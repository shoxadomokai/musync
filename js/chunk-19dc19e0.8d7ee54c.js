(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-19dc19e0"],
  {
    "027a": function(t, e, i) {},
    "0528": function(t, e, i) {
      t.exports = i.p + "img/02.9217a294.jpg";
    },
    "05f5": function(t, e, i) {
      var n = { "./01.jpg": "a58b", "./02.jpg": "0528" };
      function s(t) {
        var e = a(t);
        return i(e);
      }
      function a(t) {
        if (!i.o(n, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return n[t];
      }
      (s.keys = function() {
        return Object.keys(n);
      }),
        (s.resolve = a),
        (t.exports = s),
        (s.id = "05f5");
    },
    "0767": function(t, e, i) {
      "use strict";
      i.r(e);
      var n = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("main", [t._m(0), t._m(1), i("TeamSlider")], 1);
        },
        s = [
          function() {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("section", { staticClass: "intro" }, [
              i("div", { staticClass: "intro-header" }, [
                i("h4", [t._v("MEET")]),
                i("p", [t._v("THE")]),
                i("h4", [t._v("TEAM")])
              ])
            ]);
          },
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("section", { staticClass: "intro-text" }, [
              n("div", { staticClass: "intro-text__icon" }, [
                n("img", { attrs: { src: i("7ca4"), alt: "" } })
              ]),
              n("p", { staticClass: "intro-text__subtitle" }, [
                t._v("WE ALL NEED TEAMS")
              ]),
              n("div", { staticClass: "intro-text__quote" }, [
                n("span", { staticClass: "intro-text__quote-quotation" }, [
                  t._v('""')
                ]),
                n("h1", { staticClass: "intro-text__quote-description" }, [
                  t._v(
                    " Talent wins games, but teamwork and intelligence win championships. "
                  )
                ]),
                n("p", { staticClass: "intro-text__quote-author" }, [
                  t._v("- Michael Jordan")
                ]),
                n(
                  "a",
                  {
                    staticClass: "intro-text__quote-button",
                    attrs: { href: "#" }
                  },
                  [t._v("Help us win championships")]
                )
              ])
            ]);
          }
        ],
        a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("SliderFrame", {
            scopedSlots: t._u([
              {
                key: "default",
                fn: function(e) {
                  e.next, e.prev;
                  var s = e.activeIndex,
                    a = e.goToIndex;
                  return n(
                    "div",
                    {},
                    [
                      n(
                        "Slide",
                        { staticClass: "bg" },
                        [
                          n(
                            "div",
                            { staticClass: "tabs" },
                            t._l(2, function(e) {
                              return n(
                                "div",
                                {
                                  key: e,
                                  staticClass: "tab",
                                  class: { active: s === e - 1 },
                                  attrs: { title: t.team[e - 1] },
                                  on: {
                                    click: function(t) {
                                      return a(e - 1);
                                    }
                                  }
                                },
                                [
                                  n("img", {
                                    attrs: {
                                      width: "60px",
                                      src: i("05f5")("./0" + e + ".jpg"),
                                      alt: "avatar"
                                    }
                                  })
                                ]
                              );
                            }),
                            0
                          ),
                          n("slider-slide", [n("slide-1")], 1),
                          n("slider-slide", [n("slide-2")], 1)
                        ],
                        1
                      )
                    ],
                    1
                  );
                }
              }
            ])
          });
        },
        r = [],
        c =
          (i("7db0"),
          i("b0c0"),
          i("a9e3"),
          {
            data: function() {
              return {
                activeIndex: this.pageIndex,
                xDown: null,
                yDown: null,
                slideLength: null
              };
            },
            props: { pageIndex: { type: Number, default: 0 } },
            computed: {
              slides: function() {
                return this.$children.find(function(t) {
                  return "Slide" === t.$options.name;
                }).$children;
              },
              slidesCount: function() {
                return (
                  (this.slideLength = this.slides.length), this.slides.length
                );
              },
              nextIndex: function() {
                var t = this.activeIndex + 1;
                return t <= this.slidesCount - 1 ? t : 0;
              },
              prevIndex: function() {
                var t = this.activeIndex - 1;
                return t >= 0 ? t : this.slidesCount - 1;
              }
            },
            mounted: function() {
              var t = this;
              document.addEventListener(
                "touchstart",
                this.handleTouchStart,
                !1
              ),
                document.addEventListener(
                  "touchmove",
                  this.handleTouchMove,
                  !1
                ),
                this.goToIndex(this.activeIndex),
                (document.onkeydown = function(e) {
                  switch (e.keyCode) {
                    case 37:
                      t.prev();
                      break;
                    case 39:
                      t.next();
                      break;
                  }
                });
            },
            methods: {
              goToIndex: function(t) {
                var e = t > this.activeIndex ? "left" : "right";
                this.slides[this.activeIndex].hide(e),
                  this.slides[t].show(e),
                  (this.activeIndex = t);
              },
              next: function() {
                this.goToIndex(this.nextIndex);
              },
              prev: function() {
                this.goToIndex(this.prevIndex);
              },
              handleTouchStart: function(t) {
                (this.xDown = t.touches[0].clientX),
                  (this.yDown = t.touches[0].clientY);
              },
              handleTouchMove: function(t) {
                if (this.xDown && this.yDown) {
                  var e = t.touches[0].clientX,
                    i = t.touches[0].clientY,
                    n = this.xDown - e,
                    s = this.yDown - i;
                  Math.abs(n) > Math.abs(s) &&
                    (n > 0 ? this.next() : this.prev()),
                    (this.xDown = null),
                    (this.yDown = null);
                }
              }
            },
            render: function() {
              return this.$scopedSlots.default({
                activeIndex: this.activeIndex,
                goToIndex: this.goToIndex,
                next: this.next,
                prev: this.prev
              });
            }
          }),
        o = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("div", { staticClass: "Slide" }, [t._t("default")], 2);
        },
        l = [],
        u = { name: "Slide" },
        d = u,
        f = i("2877"),
        h = Object(f["a"])(d, o, l, !1, null, null, null),
        v = h.exports,
        p = function() {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("transition", { attrs: { name: t.transition } }, [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.active,
                    expression: "active"
                  }
                ],
                staticClass: "SliderSlide"
              },
              [t._t("default")],
              2
            )
          ]);
        },
        m = [],
        _ = {
          data: function() {
            return { active: !1, transition: "" };
          },
          methods: {
            hide: function(t) {
              (this.transition = "SliderSlide--transition-".concat(t)),
                (this.active = !1);
            },
            show: function(t) {
              (this.transition = "SliderSlide--transition-".concat(t)),
                (this.active = !0);
            }
          }
        },
        b = _,
        g = (i("afa9"), Object(f["a"])(b, p, m, !1, null, null, null)),
        x = g.exports,
        C = function() {
          var t = this,
            e = t.$createElement;
          t._self._c;
          return t._m(0);
        },
        w = [
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("section", { attrs: { id: "testProfile" } }, [
              n("div", { staticClass: "name-background" }, [
                n("h1", { staticClass: "first-name" }, [
                  t._v("Shox "),
                  n("br"),
                  n("span", [t._v("Adomokai")])
                ])
              ]),
              n("div", { staticClass: "profile-grid" }, [
                n("div", { staticClass: "image" }, [
                  n("img", {
                    attrs: { src: i("1fbc"), alt: "picture of spider-man" }
                  })
                ]),
                n("div", { staticClass: "text" }, [
                  n("div", { staticClass: "info" }, [
                    n("h1", { staticClass: "name" }, [t._v("Shox Adomokai")]),
                    n("h2", { staticClass: "job" }, [
                      t._v("DIGITAL STRATEGIST")
                    ]),
                    n("p", { staticClass: "about" }, [
                      t._v(
                        " Shox is a digital strategist who loves all things design and development. He likes to be part of the creative process that brings new ideas to life as well as part of the execution. He is also passionate about charity work and is involed in several charitable organisations. "
                      )
                    ])
                  ]),
                  n("div", { staticClass: "achievements" }, [
                    n("h2", { staticClass: "achievements__header" }, [
                      t._v("Achievements")
                    ]),
                    n("ul", { staticClass: "achievements-list" }, [
                      n("li", { staticClass: "achievements-list-items" }, [
                        t._v(
                          " Leadership role in the team that grew our reach from 10,000 kids in 2017 to 7000+ kids in 2019. "
                        )
                      ]),
                      n("li", { staticClass: "achievements-list-items" }, [
                        t._v(
                          " Advised companies as a digital strategist about the benefits of emerging technologies in employee and customer satisfcation. "
                        )
                      ]),
                      n("li", { staticClass: "achievements-list-items" }, [
                        t._v(" Brand Strategist at Corporate Luxury. ")
                      ]),
                      n("li", { staticClass: "achievements-list-items" }, [
                        t._v(
                          " Successfully designed and deployed websites for clients as a freelance software developer "
                        )
                      ])
                    ])
                  ]),
                  n("div", { staticClass: "stats" }, [
                    n("div", { staticClass: "donut-chart" })
                  ])
                ])
              ])
            ]);
          }
        ],
        I = {
          methods: {
            date: function(t) {
              var e = new Date().getFullYear();
              return (
                (e = parseInt(e, 10)),
                e - t + " " + (e - t < 2 ? "year" : "years")
              );
            }
          }
        },
        S = I,
        y = (i("3bcc"), Object(f["a"])(S, C, w, !1, null, "d4084684", null)),
        E = y.exports,
        T = function() {
          var t = this,
            e = t.$createElement;
          t._self._c;
          return t._m(0);
        },
        A = [
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("section", { attrs: { id: "profile" } }, [
              n("div", { staticClass: "team-member" }, [
                n("div", { staticClass: "team-member_text" }, [
                  n("h1", { staticClass: "team-member__name" }, [
                    t._v(" Join Our "),
                    n("br"),
                    t._v("Team ")
                  ]),
                  n("p", { staticClass: "team-member__description" }, [
                    t._v(
                      " This project is opensource and will require the help of you and other likeminded individuals to make it possible. "
                    ),
                    n("br"),
                    n("br"),
                    t._v(
                      "So we have left a free space in the teams page just for you. Help us win championships. "
                    )
                  ]),
                  n("div", { staticClass: "team-member__funfacts" }, [
                    n("div", { staticClass: "fact" }, [
                      n("p", [t._v("Age:")]),
                      n("h1", [t._v("Tell Us")])
                    ]),
                    n("div", { staticClass: "fact" }, [
                      n("p", [t._v("Height:")]),
                      n("h1", [t._v("Tell Us")])
                    ]),
                    n("div", { staticClass: "fact" }, [
                      n("p", [t._v("Total Experience:")]),
                      n("h1", [t._v("Tell Us")])
                    ])
                  ])
                ]),
                n("div", { staticClass: "team-member__image" }, [
                  n("img", {
                    attrs: { src: i("4593"), alt: "picture of spider-man" }
                  })
                ]),
                n("div", { staticClass: "team-member__stats" }, [
                  n("article", { staticClass: "stat" }, [
                    n("p", [t._v("Design")]),
                    n("h1", [t._v("??")])
                  ]),
                  n("article", { staticClass: "stat" }, [
                    n("p", [t._v("UI/UX?")]),
                    n("h1", [t._v("??")])
                  ]),
                  n("article", { staticClass: "stat" }, [
                    n("p", [t._v("Development")]),
                    n("h1", [t._v("??")])
                  ]),
                  n("article", { staticClass: "stat" }, [
                    n("p", [t._v("Content Writing")]),
                    n("h1", [t._v("??")])
                  ]),
                  n("article", { staticClass: "stat" }, [
                    n("p", [t._v("Marketing")]),
                    n("h1", [t._v("??")])
                  ])
                ])
              ])
            ]);
          }
        ],
        k = {
          methods: {
            date: function(t) {
              var e = new Date().getFullYear();
              return (
                (e = parseInt(e, 10)),
                e - t + " " + (e - t < 2 ? "year" : "years")
              );
            }
          }
        },
        N = k,
        D = Object(f["a"])(N, T, A, !1, null, "0ccd99f2", null),
        O = D.exports,
        j = {
          components: {
            SliderFrame: c,
            Slide: v,
            Slide1: E,
            Slide2: O,
            SliderSlide: x
          },
          data: function() {
            return { team: ["Shox Adomokai", "New Member"] };
          }
        },
        M = j,
        $ = (i("f4c7"), Object(f["a"])(M, a, r, !1, null, "23cbfb18", null)),
        L = $.exports,
        F = { components: { TeamSlider: L } },
        U = F,
        q = (i("1e44"), Object(f["a"])(U, n, s, !1, null, "7b738b9c", null));
      e["default"] = q.exports;
    },
    "1e44": function(t, e, i) {
      "use strict";
      var n = i("2c73"),
        s = i.n(n);
      s.a;
    },
    "1fbc": function(t, e, i) {
      t.exports = i.p + "img/01.fe47788b.png";
    },
    "2c73": function(t, e, i) {},
    "2d48": function(t, e, i) {},
    "3bcc": function(t, e, i) {
      "use strict";
      var n = i("edfb"),
        s = i.n(n);
      s.a;
    },
    4593: function(t, e, i) {
      t.exports = i.p + "img/02.bcc2e85b.png";
    },
    5899: function(t, e) {
      t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    },
    "58a8": function(t, e, i) {
      var n = i("1d80"),
        s = i("5899"),
        a = "[" + s + "]",
        r = RegExp("^" + a + a + "*"),
        c = RegExp(a + a + "*$"),
        o = function(t) {
          return function(e) {
            var i = String(n(e));
            return (
              1 & t && (i = i.replace(r, "")),
              2 & t && (i = i.replace(c, "")),
              i
            );
          };
        };
      t.exports = { start: o(1), end: o(2), trim: o(3) };
    },
    "65f0": function(t, e, i) {
      var n = i("861d"),
        s = i("e8b5"),
        a = i("b622"),
        r = a("species");
      t.exports = function(t, e) {
        var i;
        return (
          s(t) &&
            ((i = t.constructor),
            "function" != typeof i || (i !== Array && !s(i.prototype))
              ? n(i) && ((i = i[r]), null === i && (i = void 0))
              : (i = void 0)),
          new (void 0 === i ? Array : i)(0 === e ? 0 : e)
        );
      };
    },
    7156: function(t, e, i) {
      var n = i("861d"),
        s = i("d2bb");
      t.exports = function(t, e, i) {
        var a, r;
        return (
          s &&
            "function" == typeof (a = e.constructor) &&
            a !== i &&
            n((r = a.prototype)) &&
            r !== i.prototype &&
            s(t, r),
          t
        );
      };
    },
    "7ca4": function(t, e, i) {
      t.exports = i.p + "img/Arrow.b26919b7.svg";
    },
    "7db0": function(t, e, i) {
      "use strict";
      var n = i("23e7"),
        s = i("b727").find,
        a = i("44d2"),
        r = i("ae40"),
        c = "find",
        o = !0,
        l = r(c);
      c in [] &&
        Array(1)[c](function() {
          o = !1;
        }),
        n(
          { target: "Array", proto: !0, forced: o || !l },
          {
            find: function(t) {
              return s(this, t, arguments.length > 1 ? arguments[1] : void 0);
            }
          }
        ),
        a(c);
    },
    a58b: function(t, e, i) {
      t.exports = i.p + "img/01.83bc1927.jpg";
    },
    a9e3: function(t, e, i) {
      "use strict";
      var n = i("83ab"),
        s = i("da84"),
        a = i("94ca"),
        r = i("6eeb"),
        c = i("5135"),
        o = i("c6b6"),
        l = i("7156"),
        u = i("c04e"),
        d = i("d039"),
        f = i("7c73"),
        h = i("241c").f,
        v = i("06cf").f,
        p = i("9bf2").f,
        m = i("58a8").trim,
        _ = "Number",
        b = s[_],
        g = b.prototype,
        x = o(f(g)) == _,
        C = function(t) {
          var e,
            i,
            n,
            s,
            a,
            r,
            c,
            o,
            l = u(t, !1);
          if ("string" == typeof l && l.length > 2)
            if (((l = m(l)), (e = l.charCodeAt(0)), 43 === e || 45 === e)) {
              if (((i = l.charCodeAt(2)), 88 === i || 120 === i)) return NaN;
            } else if (48 === e) {
              switch (l.charCodeAt(1)) {
                case 66:
                case 98:
                  (n = 2), (s = 49);
                  break;
                case 79:
                case 111:
                  (n = 8), (s = 55);
                  break;
                default:
                  return +l;
              }
              for (a = l.slice(2), r = a.length, c = 0; c < r; c++)
                if (((o = a.charCodeAt(c)), o < 48 || o > s)) return NaN;
              return parseInt(a, n);
            }
          return +l;
        };
      if (a(_, !b(" 0o1") || !b("0b1") || b("+0x1"))) {
        for (
          var w,
            I = function(t) {
              var e = arguments.length < 1 ? 0 : t,
                i = this;
              return i instanceof I &&
                (x
                  ? d(function() {
                      g.valueOf.call(i);
                    })
                  : o(i) != _)
                ? l(new b(C(e)), i, I)
                : C(e);
            },
            S = n
              ? h(b)
              : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                  ","
                ),
            y = 0;
          S.length > y;
          y++
        )
          c(b, (w = S[y])) && !c(I, w) && p(I, w, v(b, w));
        (I.prototype = g), (g.constructor = I), r(s, _, I);
      }
    },
    ae40: function(t, e, i) {
      var n = i("83ab"),
        s = i("d039"),
        a = i("5135"),
        r = Object.defineProperty,
        c = {},
        o = function(t) {
          throw t;
        };
      t.exports = function(t, e) {
        if (a(c, t)) return c[t];
        e || (e = {});
        var i = [][t],
          l = !!a(e, "ACCESSORS") && e.ACCESSORS,
          u = a(e, 0) ? e[0] : o,
          d = a(e, 1) ? e[1] : void 0;
        return (c[t] =
          !!i &&
          !s(function() {
            if (l && !n) return !0;
            var t = { length: -1 };
            l ? r(t, 1, { enumerable: !0, get: o }) : (t[1] = 1),
              i.call(t, u, d);
          }));
      };
    },
    afa9: function(t, e, i) {
      "use strict";
      var n = i("027a"),
        s = i.n(n);
      s.a;
    },
    b0c0: function(t, e, i) {
      var n = i("83ab"),
        s = i("9bf2").f,
        a = Function.prototype,
        r = a.toString,
        c = /^\s*function ([^ (]*)/,
        o = "name";
      !n ||
        o in a ||
        s(a, o, {
          configurable: !0,
          get: function() {
            try {
              return r.call(this).match(c)[1];
            } catch (t) {
              return "";
            }
          }
        });
    },
    b727: function(t, e, i) {
      var n = i("0366"),
        s = i("44ad"),
        a = i("7b0b"),
        r = i("50c4"),
        c = i("65f0"),
        o = [].push,
        l = function(t) {
          var e = 1 == t,
            i = 2 == t,
            l = 3 == t,
            u = 4 == t,
            d = 6 == t,
            f = 5 == t || d;
          return function(h, v, p, m) {
            for (
              var _,
                b,
                g = a(h),
                x = s(g),
                C = n(v, p, 3),
                w = r(x.length),
                I = 0,
                S = m || c,
                y = e ? S(h, w) : i ? S(h, 0) : void 0;
              w > I;
              I++
            )
              if ((f || I in x) && ((_ = x[I]), (b = C(_, I, g)), t))
                if (e) y[I] = b;
                else if (b)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return _;
                    case 6:
                      return I;
                    case 2:
                      o.call(y, _);
                  }
                else if (u) return !1;
            return d ? -1 : l || u ? u : y;
          };
        };
      t.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6)
      };
    },
    e8b5: function(t, e, i) {
      var n = i("c6b6");
      t.exports =
        Array.isArray ||
        function(t) {
          return "Array" == n(t);
        };
    },
    edfb: function(t, e, i) {},
    f4c7: function(t, e, i) {
      "use strict";
      var n = i("2d48"),
        s = i.n(n);
      s.a;
    }
  }
]);
//# sourceMappingURL=chunk-19dc19e0.8d7ee54c.js.map
