(function(t) {
  function e(e) {
    for (
      var a, s, o = e[0], c = e[1], l = e[2], u = 0, p = [];
      u < o.length;
      u++
    )
      (s = o[u]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && p.push(r[s][0]),
        (r[s] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
    d && d(e);
    while (p.length) p.shift()();
    return i.push.apply(i, l || []), n();
  }
  function n() {
    for (var t, e = 0; e < i.length; e++) {
      for (var n = i[e], a = !0, s = 1; s < n.length; s++) {
        var o = n[s];
        0 !== r[o] && (a = !1);
      }
      a && (i.splice(e--, 1), (t = c((c.s = n[0]))));
    }
    return t;
  }
  var a = {},
    s = { app: 0 },
    r = { app: 0 },
    i = [];
  function o(t) {
    return (
      c.p +
      "js/" +
      ({ about: "about" }[t] || t) +
      "." +
      {
        about: "582b5e7b",
        "chunk-19dc19e0": "8d7ee54c",
        "chunk-ee569a84": "f9e7eb24"
      }[t] +
      ".js"
    );
  }
  function c(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.e = function(t) {
    var e = [],
      n = { about: 1, "chunk-19dc19e0": 1, "chunk-ee569a84": 1 };
    s[t]
      ? e.push(s[t])
      : 0 !== s[t] &&
        n[t] &&
        e.push(
          (s[t] = new Promise(function(e, n) {
            for (
              var a =
                  "css/" +
                  ({ about: "about" }[t] || t) +
                  "." +
                  {
                    about: "2159cae6",
                    "chunk-19dc19e0": "1f7dfa9d",
                    "chunk-ee569a84": "c34827e1"
                  }[t] +
                  ".css",
                r = c.p + a,
                i = document.getElementsByTagName("link"),
                o = 0;
              o < i.length;
              o++
            ) {
              var l = i[o],
                u = l.getAttribute("data-href") || l.getAttribute("href");
              if ("stylesheet" === l.rel && (u === a || u === r)) return e();
            }
            var p = document.getElementsByTagName("style");
            for (o = 0; o < p.length; o++) {
              (l = p[o]), (u = l.getAttribute("data-href"));
              if (u === a || u === r) return e();
            }
            var d = document.createElement("link");
            (d.rel = "stylesheet"),
              (d.type = "text/css"),
              (d.onload = e),
              (d.onerror = function(e) {
                var a = (e && e.target && e.target.src) || r,
                  i = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + a + ")"
                  );
                (i.code = "CSS_CHUNK_LOAD_FAILED"),
                  (i.request = a),
                  delete s[t],
                  d.parentNode.removeChild(d),
                  n(i);
              }),
              (d.href = r);
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(d);
          }).then(function() {
            s[t] = 0;
          }))
        );
    var a = r[t];
    if (0 !== a)
      if (a) e.push(a[2]);
      else {
        var i = new Promise(function(e, n) {
          a = r[t] = [e, n];
        });
        e.push((a[2] = i));
        var l,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          c.nc && u.setAttribute("nonce", c.nc),
          (u.src = o(t));
        var p = new Error();
        l = function(e) {
          (u.onerror = u.onload = null), clearTimeout(d);
          var n = r[t];
          if (0 !== n) {
            if (n) {
              var a = e && ("load" === e.type ? "missing" : e.type),
                s = e && e.target && e.target.src;
              (p.message =
                "Loading chunk " + t + " failed.\n(" + a + ": " + s + ")"),
                (p.name = "ChunkLoadError"),
                (p.type = a),
                (p.request = s),
                n[1](p);
            }
            r[t] = void 0;
          }
        };
        var d = setTimeout(function() {
          l({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = l), document.head.appendChild(u);
      }
    return Promise.all(e);
  }),
    (c.m = t),
    (c.c = a),
    (c.d = function(t, e, n) {
      c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (c.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (c.t = function(t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          c.d(
            n,
            a,
            function(e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (c.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return c.d(e, "a", e), e;
    }),
    (c.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (c.p = ""),
    (c.oe = function(t) {
      throw (console.error(t), t);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = l.push.bind(l);
  (l.push = e), (l = l.slice());
  for (var p = 0; p < l.length; p++) e(l[p]);
  var d = u;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  "034f": function(t, e, n) {
    "use strict";
    var a = n("85ec"),
      s = n.n(a);
    s.a;
  },
  "0821": function(t, e, n) {
    var a = {
      "./01.jpg": "c130",
      "./02.jpg": "7b17",
      "./03.jpg": "81e3",
      "./04.jpg": "d674",
      "./05.jpg": "b564",
      "./06.jpg": "54a0"
    };
    function s(t) {
      var e = r(t);
      return n(e);
    }
    function r(t) {
      if (!n.o(a, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return a[t];
    }
    (s.keys = function() {
      return Object.keys(a);
    }),
      (s.resolve = r),
      (t.exports = s),
      (s.id = "0821");
  },
  "1ad6": function(t, e, n) {
    t.exports = n.p + "img/integrate.00c13110.svg";
  },
  "2bed": function(t, e, n) {},
  "2d42": function(t, e, n) {
    "use strict";
    var a = n("c00c"),
      s = n.n(a);
    s.a;
  },
  "2eef": function(t, e, n) {
    t.exports = n.p + "img/black.ec60dc8d.svg";
  },
  3886: function(t, e, n) {
    t.exports = n.p + "img/iPhone.449286ff.png";
  },
  4808: function(t, e, n) {
    t.exports = n.p + "img/automate.83ac8356.svg";
  },
  "483e": function(t, e, n) {
    t.exports = n.p + "img/apple-badge.268809d2.png";
  },
  4967: function(t, e, n) {
    t.exports = n.p + "img/synchronize.2496146d.svg";
  },
  "4d1e": function(t, e, n) {
    "use strict";
    var a = n("2bed"),
      s = n.n(a);
    s.a;
  },
  "4fe8": function(t, e, n) {
    t.exports = n.p + "img/plant.aa2581f8.png";
  },
  5065: function(t, e, n) {
    "use strict";
    var a = n("9cbf"),
      s = n.n(a);
    s.a;
  },
  "54a0": function(t, e, n) {
    t.exports = n.p + "img/06.4c53a461.jpg";
  },
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var a = n("2b0e"),
      s = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "app" } },
          [n("Navbar"), n("router-view")],
          1
        );
      },
      r = [],
      i = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("main", [
          n(
            "nav",
            { class: { active: t.isActive } },
            [
              n(
                "ul",
                {
                  on: {
                    click: function(e) {
                      t.isActive = !1;
                    }
                  }
                },
                [
                  n(
                    "li",
                    [
                      n(
                        "router-link",
                        { attrs: { tag: "a", to: "/", "data-text": "Home" } },
                        [t._v("Home")]
                      )
                    ],
                    1
                  ),
                  n(
                    "li",
                    [
                      n(
                        "router-link",
                        {
                          attrs: {
                            tag: "a",
                            to: "/about",
                            "data-text": "About"
                          }
                        },
                        [t._v("About")]
                      )
                    ],
                    1
                  ),
                  n(
                    "li",
                    [
                      n(
                        "router-link",
                        {
                          attrs: { tag: "a", to: "/team", "data-text": "Team" }
                        },
                        [t._v("Team")]
                      )
                    ],
                    1
                  ),
                  n(
                    "li",
                    [
                      n(
                        "router-link",
                        {
                          attrs: {
                            tag: "a",
                            to: "/contact",
                            "data-text": "Contact"
                          }
                        },
                        [t._v("Contact")]
                      )
                    ],
                    1
                  )
                ]
              ),
              n("SocialMedia", { staticClass: "socialMedia" })
            ],
            1
          ),
          n("div", { staticClass: "navigation" }, [
            t._m(0),
            n(
              "span",
              {
                staticClass: "hamburger",
                class: { active: t.isActive },
                on: {
                  click: function(e) {
                    t.isActive = !t.isActive;
                  }
                }
              },
              [n("div", { staticClass: "line" })]
            )
          ])
        ]);
      },
      o = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "progress" }, [
            n("div", { staticClass: "progress-bar" })
          ]);
        }
      ],
      c = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("section", { staticClass: "social-media" }, [
          n("h4", [t._v("Connect with us:")]),
          n("ul", { staticClass: "social-media-list" }, [
            n("li", { staticClass: "social-media__icons twitter" }, [
              n(
                "a",
                {
                  attrs: {
                    href: "https://twitter.com/azterikcz",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }
                },
                [
                  n(
                    "svg",
                    {
                      attrs: {
                        width: "50pt",
                        height: "50pt",
                        viewBox: "0 0 50 50",
                        version: "1.1"
                      }
                    },
                    [
                      n("g", { attrs: { id: "surface1" } }, [
                        n("path", {
                          attrs: {
                            d:
                              "M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z "
                          }
                        })
                      ])
                    ]
                  )
                ]
              )
            ]),
            n("li", { staticClass: "social-media__icons linkedin" }, [
              n(
                "a",
                {
                  attrs: {
                    href:
                      "https://www.linkedin.com/in/peter-adomokai-4a674385/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }
                },
                [
                  n(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        width: "50pt",
                        height: "50pt",
                        viewBox: "0 0 50 50",
                        version: "1.1"
                      }
                    },
                    [
                      n("g", { attrs: { id: "surface1" } }, [
                        n("path", {
                          attrs: {
                            d:
                              "M 8 3.007813 C 4.53125 3.007813 2.007813 5.089844 2.007813 7.949219 C 2.007813 10.820313 4.589844 12.988281 8 12.988281 C 11.46875 12.988281 13.988281 10.871094 13.988281 7.890625 C 13.832031 5.019531 11.359375 3.007813 8 3.007813 Z M 3 15 C 2.449219 15 2 15.449219 2 16 L 2 45 C 2 45.550781 2.449219 46 3 46 L 13 46 C 13.550781 46 14 45.550781 14 45 L 14 16 C 14 15.449219 13.550781 15 13 15 Z M 18 15 C 17.449219 15 17 15.449219 17 16 L 17 45 C 17 45.550781 17.449219 46 18 46 L 27 46 C 27.550781 46 28 45.550781 28 45 L 28 29.5 C 28 27.128906 29.820313 25.199219 32.140625 25.019531 C 32.261719 25 32.378906 25 32.5 25 C 32.621094 25 32.738281 25 32.859375 25.019531 C 35.179688 25.199219 37 27.128906 37 29.5 L 37 45 C 37 45.550781 37.449219 46 38 46 L 47 46 C 47.550781 46 48 45.550781 48 45 L 48 28 C 48 21.53125 44.527344 15 36.789063 15 C 33.269531 15 30.609375 16.359375 29 17.488281 L 29 16 C 29 15.449219 28.550781 15 28 15 Z "
                          }
                        })
                      ])
                    ]
                  )
                ]
              )
            ]),
            n("li", { staticClass: "social-media__icons behance" }, [
              n(
                "a",
                {
                  attrs: {
                    href: "https://www.behance.net/ShoxAdomokai",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }
                },
                [
                  n(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        width: "50pt",
                        height: "50pt",
                        viewBox: "0 0 50 50",
                        version: "1.1"
                      }
                    },
                    [
                      n("g", { attrs: { id: "surface1" } }, [
                        n("path", {
                          attrs: {
                            d:
                              "M 9 4 C 6.238281 4 4 6.238281 4 9 L 4 41 C 4 43.761719 6.238281 46 9 46 L 41 46 C 43.761719 46 46 43.761719 46 41 L 46 9 C 46 6.238281 43.761719 4 41 4 Z M 12 18 L 18.730469 18 C 19.460938 18 23.410156 17.949219 23.410156 21.570313 C 23.410156 23.492188 22.101563 24.140625 21.511719 24.429688 C 22.390625 24.710938 24 25.519531 24 28 C 24 31.828125 19.609375 32 19.019531 32 L 12 32 Z M 29 18 L 36 18 L 36 20 L 29 20 Z M 15 20.429688 L 15 23.710938 L 18.21875 23.710938 C 18.660156 23.710938 20.121094 23.46875 20.121094 22 C 20.121094 20.53125 18.21875 20.429688 17.929688 20.429688 Z M 32.730469 21 C 36.628906 21 37.691406 24.039063 37.847656 24.761719 C 38 25.488281 38 26.128906 38 27 L 30.097656 27 C 30.097656 27.871094 30.5625 29.828125 32.890625 29.828125 C 33.511719 29.828125 33.96875 29.679688 34.4375 29.390625 C 34.898438 29.101563 35.0625 28.820313 35.210938 28.53125 L 37.839844 28.53125 C 37.378906 29.679688 36.761719 30.550781 35.828125 31.128906 C 34.898438 31.710938 33.820313 32 32.578125 32 C 31.800781 32 31.03125 31.851563 30.25 31.5625 C 29.628906 31.269531 29.011719 30.839844 28.550781 30.410156 C 28.089844 29.96875 27.78125 29.390625 27.46875 28.671875 C 27.160156 28.089844 27 27.21875 27 26.5 C 27 25.78125 27.289063 21 32.730469 21 Z M 32.730469 23.03125 C 30.46875 23.03125 30.097656 25.199219 30.097656 25.339844 L 35.0625 25.339844 C 34.902344 24.621094 34.25 23.03125 32.730469 23.03125 Z M 15 25.710938 L 15 29.570313 L 18.351563 29.570313 C 18.640625 29.570313 20.679688 29.480469 20.679688 27.710938 C 20.679688 25.949219 19.078125 25.710938 18.351563 25.710938 Z "
                          }
                        })
                      ])
                    ]
                  )
                ]
              )
            ]),
            n("li", { staticClass: "social-media__icons github" }, [
              n(
                "a",
                {
                  attrs: {
                    href: "https://github.com/shoxadomokai/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }
                },
                [
                  n(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                        width: "50pt",
                        height: "50pt",
                        viewBox: "0 0 50 50",
                        version: "1.1"
                      }
                    },
                    [
                      n("g", { attrs: { id: "surface1" } }, [
                        n("path", {
                          attrs: {
                            d:
                              "M 17.789063 46.835938 C 18.503906 46.53125 19 45.824219 19 45 L 19 39.601563 C 19 39.402344 19.015625 39.199219 19.039063 38.988281 C 19.027344 38.992188 19.015625 38.996094 19 39 C 19 39 16 39 15.398438 39 C 13.898438 39 12.601563 38.398438 12 37.199219 C 11.300781 35.898438 11 33.699219 9.199219 32.5 C 8.898438 32.300781 9.101563 32 9.699219 32 C 10.300781 32.101563 11.601563 32.898438 12.398438 34 C 13.300781 35.101563 14.199219 36 15.800781 36 C 18.285156 36 19.621094 35.875 20.421875 35.445313 C 21.355469 34.054688 22.648438 33 24 33 L 24 32.976563 C 18.332031 32.792969 14.710938 30.910156 13.023438 28 C 9.359375 28.042969 6.167969 28.40625 4.347656 28.707031 C 4.289063 28.378906 4.238281 28.050781 4.195313 27.71875 C 5.992188 27.425781 9.039063 27.074219 12.542969 27.007813 C 12.429688 26.730469 12.332031 26.445313 12.25 26.15625 C 8.738281 25.980469 5.710938 26.117188 4.0625 26.253906 C 4.042969 25.921875 4.015625 25.589844 4.011719 25.253906 C 5.660156 25.121094 8.609375 24.984375 12.03125 25.144531 C 11.953125 24.644531 11.902344 24.132813 11.902344 23.601563 C 11.902344 21.902344 12.5 20.101563 13.601563 18.601563 C 13.101563 16.902344 12.402344 13.300781 13.800781 12 C 16.5 12 18.402344 13.300781 19.300781 14.101563 C 21 13.398438 22.898438 13 25 13 C 27.101563 13 29 13.398438 30.601563 14.101563 C 31.5 13.300781 33.398438 12 36.101563 12 C 37.601563 13.398438 36.800781 17 36.300781 18.601563 C 37.398438 20.101563 38 21.800781 37.898438 23.601563 C 37.898438 24.085938 37.855469 24.550781 37.789063 25.007813 C 41.289063 24.835938 44.316406 24.976563 45.992188 25.109375 C 45.992188 25.449219 45.960938 25.777344 45.941406 26.109375 C 44.273438 25.972656 41.167969 25.828125 37.585938 26.019531 C 37.496094 26.355469 37.386719 26.683594 37.257813 27 C 40.804688 27.046875 43.925781 27.390625 45.808594 27.691406 C 45.765625 28.023438 45.714844 28.351563 45.65625 28.675781 C 43.742188 28.371094 40.484375 28.011719 36.777344 27.996094 C 35.113281 30.871094 31.558594 32.75 26 32.96875 L 26 33 C 28.601563 33 31 36.898438 31 39.601563 L 31 45 C 31 45.824219 31.496094 46.53125 32.210938 46.835938 C 41.371094 43.804688 48 35.164063 48 25 C 48 12.316406 37.683594 2 25 2 C 12.316406 2 2 12.316406 2 25 C 2 35.164063 8.628906 43.804688 17.789063 46.835938 Z "
                          }
                        })
                      ])
                    ]
                  )
                ]
              )
            ])
          ])
        ]);
      },
      l = [],
      u = {},
      p = u,
      d = (n("e81e"), n("2877")),
      f = Object(d["a"])(p, c, l, !1, null, "54b194e4", null),
      m = f.exports,
      v = {
        components: { SocialMedia: m },
        data: function() {
          return { isActive: !1 };
        },
        created: function() {
          window.addEventListener("scroll", function() {
            var t = document.scrollingElement.scrollTop,
              e =
                document.scrollingElement.scrollHeight -
                document.scrollingElement.clientHeight,
              n = (t / e) * 100 + "%";
            document.documentElement.style.setProperty("--scrollProgress", n);
          });
        }
      },
      h = v,
      C = (n("4d1e"), Object(d["a"])(h, i, o, !1, null, "3c330807", null)),
      g = C.exports,
      b = { components: { Navbar: g } },
      _ = b,
      w = (n("034f"), Object(d["a"])(_, s, r, !1, null, null, null)),
      x = w.exports,
      y = (n("d3b7"), n("8c4f")),
      k = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "home" },
          [
            n("Hero"),
            n("Sync"),
            n("LoseYourself"),
            n("Devices"),
            n("Slider"),
            n("Join", { attrs: { id: "about" } })
          ],
          1
        );
      },
      L = [],
      j = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("main", { staticClass: "hero" }, [
          a("div", { staticClass: "hero__text" }, [
            a(
              "div",
              [
                a("img", { attrs: { src: n("2eef"), alt: "musync logo" } }),
                t._m(0),
                t._m(1),
                a("SocialMedia")
              ],
              1
            )
          ]),
          t._m(2)
        ]);
      },
      E = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("h1", [
            t._v(" Listen to your favourite songs "),
            n("span", [t._v("anywhere")]),
            t._v(", anytime. ")
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "buttons" }, [
            n("button", { staticClass: "primary-button" }, [
              t._v("Start Listening Now")
            ]),
            n("button", { staticClass: "secondary-button" }, [
              t._v("Learn More")
            ])
          ]);
        },
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "hero__image" }, [
            a("img", { attrs: { src: n("4fe8"), alt: "plant" } })
          ]);
        }
      ],
      M = {
        components: { SocialMedia: m },
        data: function() {
          return { scrollTop: "" };
        },
        methods: {
          scrollAnimation: function() {
            (this.scrollTop = document.scrollingElement.scrollTop + "px"),
              document.documentElement.style.setProperty(
                "--scrollPos",
                this.scrollTop
              );
          }
        },
        created: function() {
          window.addEventListener("scroll", this.scrollAnimation);
        }
      },
      S = M,
      O = (n("a1ce"), Object(d["a"])(S, j, E, !1, null, "5402e14c", null)),
      A = O.exports,
      T = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      $ = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("main", [
            a("div", { staticClass: "two-column" }, [
              a("div", { staticClass: "two-column__text" }, [
                a("h1", [
                  t._v(" Sync your "),
                  a("br"),
                  a("span", [t._v("favourite playlists...")])
                ]),
                a("p", [
                  t._v(
                    " Keep your playlists updated automatically accross all your music platforms. Never lose access to the songs you love "
                  )
                ])
              ]),
              a("div", { staticClass: "two-column__image" }, [
                a("img", { attrs: { src: n("e5f5"), alt: "" } })
              ])
            ]),
            a("div", { staticClass: "three-column" }, [
              a("article", { staticClass: "content" }, [
                a("div", { staticClass: "box", attrs: { "data-text": "01" } }, [
                  a("div", { staticClass: "heading" }, [
                    a("div", { staticClass: "icon" }, [
                      a("img", { attrs: { src: n("1ad6"), alt: "" } })
                    ]),
                    a("h4", [t._v("Integrate")])
                  ]),
                  a("p", [
                    t._v(
                      " Transfer playlists, albums, artists or tracks between all streaming services. "
                    )
                  ])
                ])
              ]),
              a("article", { staticClass: "content" }, [
                a("div", { staticClass: "box", attrs: { "data-text": "02" } }, [
                  a("div", { staticClass: "heading" }, [
                    a("div", { staticClass: "icon" }, [
                      a("img", { attrs: { src: n("4967"), alt: "" } })
                    ]),
                    a("h4", [t._v("Synchronise")])
                  ]),
                  a("p", [
                    t._v(
                      " Keep playlists automatically synchronized between streaming platforms "
                    )
                  ])
                ])
              ]),
              a("article", { staticClass: "content" }, [
                a("div", { staticClass: "box", attrs: { "data-text": "03" } }, [
                  a("div", { staticClass: "heading" }, [
                    a("div", { staticClass: "icon" }, [
                      a("img", { attrs: { src: n("4808"), alt: "" } })
                    ]),
                    a("h4", [t._v("Automate")])
                  ]),
                  a("p", [
                    t._v(
                      " Transfer playlists, albums, artists or tracks between all streaming services. "
                    )
                  ])
                ])
              ])
            ])
          ]);
        }
      ],
      P = {},
      N = P,
      Z = (n("b332"), Object(d["a"])(N, T, $, !1, null, "3ed35cb9", null)),
      B = Z.exports,
      z = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      D = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("main", [
            a("section", { staticClass: "one-column__text" }, [
              a("h1", [
                t._v(" Lose yourself to over "),
                a("br"),
                a("span", [t._v("60million")]),
                t._v(" songs ")
              ]),
              a("div", { staticClass: "buttons" }, [
                a("img", {
                  staticClass: "app-button",
                  attrs: { src: n("b847"), alt: "playstore logo" }
                }),
                a("img", {
                  staticClass: "app-button",
                  attrs: { src: n("483e"), alt: "apple logo" }
                })
              ])
            ]),
            a("div", { staticClass: "one-column__image" }, [
              a("img", { attrs: { src: n("c827"), alt: "" } })
            ])
          ]);
        }
      ],
      H = {},
      J = H,
      F = (n("5065"), Object(d["a"])(J, z, D, !1, null, "09ff0e66", null)),
      I = F.exports,
      K = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      U = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("main", { staticClass: "devices" }, [
            a("div", { staticClass: "column", attrs: { id: "laptop" } }, [
              a("div", { staticClass: "text" }, [
                a("h4", [t._v("Desktop")]),
                a("h1", [
                  t._v(" See More. Do More. "),
                  a("br"),
                  t._v("Hear More ")
                ]),
                a("button", { staticClass: "learn-button" }, [
                  t._v("Learn More")
                ])
              ]),
              a("img", { attrs: { src: n("d897"), alt: "laptop view" } })
            ]),
            a("div", { staticClass: "column", attrs: { id: "mobile" } }, [
              a("img", { attrs: { src: n("978f"), alt: "mobile view" } }),
              a("div", { staticClass: "text" }, [
                a("h4", [t._v("Mobile")]),
                a("h1", [
                  t._v(" The music you love. "),
                  a("br"),
                  t._v("On the go ")
                ]),
                a("button", { staticClass: "learn-button" }, [
                  t._v("Learn More")
                ])
              ])
            ])
          ]);
        }
      ],
      W = {},
      q = W,
      G = (n("8265"), Object(d["a"])(q, K, U, !1, null, "43229ad5", null)),
      Y = G.exports,
      V = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "main",
          { staticClass: "slider-container" },
          [
            t._m(0),
            a("img", {
              staticClass: "phone",
              attrs: { src: n("3886"), alt: "" }
            }),
            a(
              "carousel-3d",
              {
                attrs: {
                  "controls-visible": !0,
                  width: 280,
                  height: 488,
                  space: 200,
                  display: 5,
                  loop: !0
                }
              },
              t._l(6, function(t) {
                return a(
                  "slide",
                  { key: t, staticClass: "slide", attrs: { index: t - 1 } },
                  [
                    a("img", {
                      attrs: { src: n("0821")("./0" + t + ".jpg"), alt: "" }
                    })
                  ]
                );
              }),
              1
            )
          ],
          1
        );
      },
      Q = [
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "text" }, [
            n("h4", [t._v("Gallery")]),
            n("h1", [t._v("Worth a Thousand Words...")])
          ]);
        }
      ],
      R = n("3cf7"),
      X = { components: { Carousel3d: R["Carousel3d"], Slide: R["Slide"] } },
      tt = X,
      et = (n("9b60"), Object(d["a"])(tt, V, Q, !1, null, "35056cab", null)),
      nt = et.exports,
      at = function() {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      st = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("main", { staticClass: "join" }, [
            a("img", { attrs: { src: n("2eef"), alt: "musync logo" } }),
            a("h1", [t._v("Working with musync")]),
            a("p", { staticClass: "join__text" }, [
              t._v(
                " Musync is a personal project by Shox Adomokai. The service is built with VueJS and NodeJS. It is my plan to make it opensource so everyone who believes in the project can contribute to it. "
              )
            ]),
            a("ul", { staticClass: "social-list" }, [
              a("li", { staticClass: "social-list__items twitter" }, [
                a(
                  "a",
                  {
                    attrs: {
                      href: "https://twitter.com/azterikcz",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }
                  },
                  [
                    a("h3", [t._v("Twitter")]),
                    a("div", { staticClass: "cta-text" }, [
                      a("p", [
                        t._v(" @azterikcz "),
                        a("br"),
                        a("br"),
                        t._v("Follow Me ")
                      ])
                    ])
                  ]
                )
              ]),
              a("li", { staticClass: "social-list__items linkedin" }, [
                a(
                  "a",
                  {
                    attrs: {
                      href:
                        "https://www.linkedin.com/in/peter-adomokai-4a674385/",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }
                  },
                  [
                    a("h3", [t._v("LinkedIn")]),
                    a("div", { staticClass: "cta-text" }, [
                      a("p", [
                        t._v(" peter-adomokai "),
                        a("br"),
                        a("br"),
                        t._v("Connect with Me ")
                      ])
                    ])
                  ]
                )
              ]),
              a("li", { staticClass: "social-list__items behance" }, [
                a(
                  "a",
                  {
                    attrs: {
                      href: "https://www.behance.net/ShoxAdomokai",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }
                  },
                  [
                    a("h3", [t._v("Behance")]),
                    a("div", { staticClass: "cta-text" }, [
                      a("p", [
                        t._v(" ShoxAdomokai "),
                        a("br"),
                        a("br"),
                        t._v("Appreciate ")
                      ])
                    ])
                  ]
                )
              ]),
              a("li", { staticClass: "social-list__items github" }, [
                a(
                  "a",
                  {
                    attrs: {
                      href: "https://github.com/shoxadomokai/",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    }
                  },
                  [
                    a("h3", [t._v("Github")]),
                    a("div", { staticClass: "cta-text" }, [
                      a("p", [
                        t._v(" shoxadomokai "),
                        a("br"),
                        a("br"),
                        t._v("Follow Me ")
                      ])
                    ])
                  ]
                )
              ])
            ])
          ]);
        }
      ],
      rt = {},
      it = rt,
      ot = (n("2d42"), Object(d["a"])(it, at, st, !1, null, "5bdf4014", null)),
      ct = ot.exports,
      lt = {
        name: "home",
        components: {
          Hero: A,
          Sync: B,
          LoseYourself: I,
          Devices: Y,
          Slider: nt,
          Join: ct
        }
      },
      ut = lt,
      pt = Object(d["a"])(ut, k, L, !1, null, null, null),
      dt = pt.exports;
    a["a"].use(y["a"]);
    var ft = [
        { path: "/", name: "home", component: dt },
        {
          path: "/about",
          name: "about",
          component: function() {
            return n.e("about").then(n.bind(null, "f820"));
          }
        },
        {
          path: "/team",
          name: "team",
          component: function() {
            return n.e("chunk-19dc19e0").then(n.bind(null, "0767"));
          }
        },
        {
          path: "/contact",
          name: "contact",
          component: function() {
            return n.e("chunk-ee569a84").then(n.bind(null, "b8fa"));
          }
        }
      ],
      mt = new y["a"]({
        mode: "history",
        base: "",
        routes: ft,
        scrollBehavior: function(t, e, n) {
          return n || { x: 0, y: 0 };
        }
      }),
      vt = mt;
    (a["a"].config.productionTip = !1),
      new a["a"]({
        router: vt,
        render: function(t) {
          return t(x);
        }
      }).$mount("#app");
  },
  "5e09": function(t, e, n) {},
  "7b17": function(t, e, n) {
    t.exports = n.p + "img/02.c4924468.jpg";
  },
  "81e3": function(t, e, n) {
    t.exports = n.p + "img/03.aecfebcf.jpg";
  },
  8265: function(t, e, n) {
    "use strict";
    var a = n("a285"),
      s = n.n(a);
    s.a;
  },
  "85ec": function(t, e, n) {},
  9620: function(t, e, n) {},
  "978f": function(t, e, n) {
    t.exports = n.p + "img/mobile.b0e6a260.png";
  },
  "9b60": function(t, e, n) {
    "use strict";
    var a = n("5e09"),
      s = n.n(a);
    s.a;
  },
  "9bf9": function(t, e, n) {},
  "9cbf": function(t, e, n) {},
  a1ce: function(t, e, n) {
    "use strict";
    var a = n("edfc"),
      s = n.n(a);
    s.a;
  },
  a285: function(t, e, n) {},
  b332: function(t, e, n) {
    "use strict";
    var a = n("9620"),
      s = n.n(a);
    s.a;
  },
  b564: function(t, e, n) {
    t.exports = n.p + "img/05.c6c400fd.jpg";
  },
  b847: function(t, e, n) {
    t.exports = n.p + "img/google-badge.283797d4.png";
  },
  c00c: function(t, e, n) {},
  c130: function(t, e, n) {
    t.exports = n.p + "img/01.1ea811c3.jpg";
  },
  c827: function(t, e, n) {
    t.exports = n.p + "img/girl.1d4ec578.png";
  },
  d674: function(t, e, n) {
    t.exports = n.p + "img/04.6f0a96b4.jpg";
  },
  d897: function(t, e, n) {
    t.exports = n.p + "img/laptop.513395c5.png";
  },
  e5f5: function(t, e, n) {
    t.exports = n.p + "img/streaming_tiles.1b4b9967.png";
  },
  e81e: function(t, e, n) {
    "use strict";
    var a = n("9bf9"),
      s = n.n(a);
    s.a;
  },
  edfc: function(t, e, n) {}
});
//# sourceMappingURL=app.fcfa3c4d.js.map
