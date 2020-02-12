export default {
  data() {
    return {
      activeIndex: this.pageIndex,
      xDown: null,
      yDown: null,
      slideLength: null
    };
  },
  props: {
    pageIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    slides() {
      // All slides must be children of the `Slide` component.
      return this.$children.find(x => x.$options.name === "Slide").$children;
    },
    slidesCount() {
      this.slideLength = this.slides.length;
      return this.slides.length;
    },
    nextIndex() {
      const nextIndex = this.activeIndex + 1;

      return nextIndex <= this.slidesCount - 1 ? nextIndex : 0;
    },
    prevIndex() {
      const prevIndex = this.activeIndex - 1;

      return prevIndex >= 0 ? prevIndex : this.slidesCount - 1;
    }
  },
  mounted() {
    // Immediately activate the first slide.
    document.addEventListener("touchstart", this.handleTouchStart, false);
    document.addEventListener("touchmove", this.handleTouchMove, false);
    this.goToIndex(this.activeIndex);
    document.onkeydown = e => {
      switch (e.keyCode) {
        case 37:
          //left keypress
          this.prev();
          break;
        case 39:
          //right keypress
          this.next();
          break;
      }
    };
  },
  methods: {
    goToIndex(index) {
      // Find out the direction we're moving.
      // This is useful for animations.
      const direction = index > this.activeIndex ? "left" : "right";
      // Call the `hide()` method on the currently
      // active `SliderSlide` component.
      this.slides[this.activeIndex].hide(direction);
      // Call the `show()` method on the `SliderSlide`
      // component with the correspondign index.
      this.slides[index].show(direction);
      this.activeIndex = index;
    },
    next() {
      this.goToIndex(this.nextIndex);
    },
    prev() {
      this.goToIndex(this.prevIndex);
    },
    handleTouchStart(evt) {
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
    },
    handleTouchMove(evt) {
      if (!this.xDown || !this.yDown) {
        return;
      }
      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;
      var xDiff = this.xDown - xUp;
      var yDiff = this.yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          this.next();
        } else {
          this.prev();
        }
      } else {
        if (yDiff > 0) {
          /* up swipe */
        } else {
          /* down swipe */
        }
      }
      /* reset values */
      this.xDown = null;
      this.yDown = null;
    }
  },
  render() {
    return this.$scopedSlots.default({
      // Data
      activeIndex: this.activeIndex,
      // Methods
      goToIndex: this.goToIndex,
      next: this.next,
      prev: this.prev
    });
  }
};
