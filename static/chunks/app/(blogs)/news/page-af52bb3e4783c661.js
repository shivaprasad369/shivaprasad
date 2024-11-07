(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [370],
  {
    2300: function (e, s, a) {
      Promise.resolve().then(a.bind(a, 2180)),
        Promise.resolve().then(a.bind(a, 1183)),
        Promise.resolve().then(a.bind(a, 5719)),
        Promise.resolve().then(a.bind(a, 2817)),
        Promise.resolve().then(a.t.bind(a, 8173, 23)),
        Promise.resolve().then(a.t.bind(a, 231, 23));
    },
    2180: function (e, s, a) {
      "use strict";
      a.d(s, {
        default: function () {
          return m;
        },
      });
      var i = a(7437),
        l = a(3267),
        n = a(9926),
        r = a(7805),
        d = a(7138),
        t = a(6648),
        c = a(5844),
        o = a(2265),
        h = a(8757);
      function m() {
        let [e, s] = (0, o.useState)(!1);
        return (
          r.pt,
          r.W_,
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("section", {
                className: "news-standard fix section-padding",
                children: (0, i.jsx)("div", {
                  className: "container",
                  children: (0, i.jsxs)("div", {
                    className: "row g-4",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-12 col-lg-8",
                        children: (0, i.jsxs)("div", {
                          className: "news-standard-wrapper",
                          children: [
                            h.MO.map((e, a) => {
                              var n;
                              return (0, i.jsxs)(
                                "div",
                                {
                                  className: "news-standard-items",
                                  children: [
                                    "standard" === e.type &&
                                      (0, i.jsx)("div", {
                                        className: "news-thumb",
                                        children: (0, i.jsx)(t.default, {
                                          src: e.imageSrc,
                                          width: 740,
                                          height: 396,
                                          alt: "img",
                                        }),
                                      }),
                                    "slider" === e.type &&
                                      (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          (0, i.jsxs)("div", {
                                            className: "array-button",
                                            children: [
                                              (0, i.jsx)("button", {
                                                className: "array-prev",
                                                children: (0, i.jsx)("i", {
                                                  className:
                                                    "fa-regular fa-arrow-left-long",
                                                }),
                                              }),
                                              (0, i.jsx)("button", {
                                                className: "array-next",
                                                children: (0, i.jsx)("i", {
                                                  className:
                                                    "fa-regular fa-arrow-right-long",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, i.jsx)(l.tq, {
                                            className:
                                              "swiper news-post-slider",
                                            children:
                                              null === (n = e.swiperSlides) ||
                                              void 0 === n
                                                ? void 0
                                                : n.map((e, s) =>
                                                    (0, i.jsx)(
                                                      l.o5,
                                                      {
                                                        className:
                                                          "swiper-slide",
                                                        children: (0, i.jsx)(
                                                          "div",
                                                          {
                                                            className:
                                                              "news-thumb",
                                                            children: (0,
                                                            i.jsx)(t.default, {
                                                              width: 740,
                                                              height: 396,
                                                              src: e,
                                                              alt: "Slide ".concat(
                                                                s + 1
                                                              ),
                                                            }),
                                                          }
                                                        ),
                                                      },
                                                      s
                                                    )
                                                  ),
                                          }),
                                        ],
                                      }),
                                    "video" === e.type &&
                                      (0, i.jsxs)("div", {
                                        className: "news-thumb",
                                        children: [
                                          (0, i.jsx)(t.default, {
                                            src: e.imageSrc,
                                            width: 740,
                                            height: 396,
                                            alt: "img",
                                          }),
                                          (0, i.jsx)("div", {
                                            className: "video-box",
                                            children: (0, i.jsx)("a", {
                                              onClick: () => s(!0),
                                              className:
                                                "video-btn video-popup",
                                              children: (0, i.jsx)("i", {
                                                className: "fas fa-play",
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    (0, i.jsxs)("div", {
                                      className: "news-content",
                                      children: [
                                        (0, i.jsxs)("ul", {
                                          className: "date-list",
                                          children: [
                                            (0, i.jsxs)("li", {
                                              children: [
                                                (0, i.jsx)("i", {
                                                  className:
                                                    "fa-regular fa-user",
                                                }),
                                                "By Admin",
                                              ],
                                            }),
                                            (0, i.jsxs)("li", {
                                              children: [
                                                (0, i.jsx)("i", {
                                                  className:
                                                    "fa-regular fa-calendar-days",
                                                }),
                                                e.date,
                                              ],
                                            }),
                                            (0, i.jsxs)("li", {
                                              children: [
                                                (0, i.jsx)("i", {
                                                  className:
                                                    "fa-regular fa-tag",
                                                }),
                                                e.category,
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, i.jsx)("h3", {
                                          children: (0, i.jsx)(d.default, {
                                            href: "/news-details/".concat(e.id),
                                            children: e.title,
                                          }),
                                        }),
                                        (0, i.jsx)("p", {
                                          children: e.content,
                                        }),
                                        (0, i.jsx)("div", {
                                          className: "news-button",
                                          children: (0, i.jsxs)(d.default, {
                                            href: "/news-details/".concat(e.id),
                                            className: "theme-btn mt-4",
                                            children: [
                                              "read more ",
                                              (0, i.jsx)("i", {
                                                className:
                                                  "fa-regular fa-arrow-right",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                a
                              );
                            }),
                            (0, i.jsx)("div", {
                              className: "page-nav-wrap wow fadeInUp",
                              "data-wow-delay": ".3s",
                              children: (0, i.jsx)("ul", {
                                children: (0, i.jsx)(n.default, {}),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-12 col-lg-4",
                        children: (0, i.jsxs)("div", {
                          className: "main-sidebar",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "single-sidebar-widget",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "wid-title",
                                  children: (0, i.jsx)("h3", {
                                    children: "Search",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "search-widget",
                                  children: (0, i.jsxs)("form", {
                                    onSubmit: (e) => e.preventDefault(),
                                    children: [
                                      (0, i.jsx)("input", {
                                        type: "text",
                                        placeholder: "Search here",
                                      }),
                                      (0, i.jsx)("button", {
                                        type: "submit",
                                        children: (0, i.jsx)("i", {
                                          className:
                                            "fa-solid fa-magnifying-glass",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "single-sidebar-widget",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "wid-title",
                                  children: (0, i.jsx)("h3", {
                                    children: "Categories",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "news-widget-categories",
                                  children: (0, i.jsx)("ul", {
                                    children: h.Lv.map((e, s) =>
                                      (0, i.jsxs)(
                                        "li",
                                        {
                                          className: e.isActive ? "active" : "",
                                          children: [
                                            (0, i.jsx)("a", {
                                              href: e.link,
                                              children: e.text,
                                            }),
                                            " ",
                                            (0, i.jsx)("span", {
                                              children: e.count,
                                            }),
                                          ],
                                        },
                                        s
                                      )
                                    ),
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "single-sidebar-widget",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "wid-title",
                                  children: (0, i.jsx)("h3", {
                                    children: "Recent Post",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "recent-post-area",
                                  children: h.CI.map((e, s) =>
                                    (0, i.jsxs)(
                                      "div",
                                      {
                                        className: "recent-items",
                                        children: [
                                          (0, i.jsx)("div", {
                                            className: "recent-thumb",
                                            children: (0, i.jsx)(t.default, {
                                              src: e.imageSrc,
                                              width: 70,
                                              height: 70,
                                              alt: "img",
                                            }),
                                          }),
                                          (0, i.jsxs)("div", {
                                            className: "recent-content",
                                            children: [
                                              (0, i.jsx)("ul", {
                                                children: (0, i.jsxs)("li", {
                                                  children: [
                                                    (0, i.jsx)("i", {
                                                      className:
                                                        "fa-solid fa-calendar-days",
                                                    }),
                                                    e.date,
                                                  ],
                                                }),
                                              }),
                                              (0, i.jsx)("h6", {
                                                children: (0, i.jsx)(
                                                  d.default,
                                                  {
                                                    href: "/news-details",
                                                    dangerouslySetInnerHTML: {
                                                      __html: e.title,
                                                    },
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      s
                                    )
                                  ),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "single-sidebar-widget",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "wid-title",
                                  children: (0, i.jsx)("h3", {
                                    children: "Popular Tag",
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "news-widget-categories",
                                  children: (0, i.jsx)("div", {
                                    className: "tagcloud",
                                    children: h.Ok.map((e, s) =>
                                      (0, i.jsx)(
                                        d.default,
                                        { href: e.href, children: e.text },
                                        s
                                      )
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              " ",
              (0, i.jsx)(c.Z, {
                channel: "youtube",
                youtube: { mute: 0, autoplay: 0 },
                isOpen: e,
                videoId: "Cn4G2lZ_g2I",
                onClose: () => s(!1),
              }),
              " ",
            ],
          })
        );
      }
    },
    1183: function (e, s, a) {
      "use strict";
      a.d(s, {
        default: function () {
          return t;
        },
      });
      var i = a(7437);
      let l = [
        "/assets/img/brand/brand-logo.png",
        "/assets/img/brand/brand-logo-2.png",
        "/assets/img/brand/brand-logo-3.png",
        "/assets/img/brand/brand-logo-4.png",
        "/assets/img/brand/brand-logo-5.png",
        "/assets/img/brand/brand-logo.png",
        "/assets/img/brand/brand-logo-2.png",
        "/assets/img/brand/brand-logo-3.png",
        "/assets/img/brand/brand-logo-4.png",
        "/assets/img/brand/brand-logo-5.png",
      ];
      var n = a(7805),
        r = a(3267),
        d = a(6648);
      function t() {
        let e = {
          spaceBetween: 30,
          speed: 2500,
          loop: !0,
          modules: [n.pt],
          autoplay: { delay: 2500, disableOnInteraction: !1 },
          breakpoints: {
            1199: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            767: { slidesPerView: 3 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 2 },
          },
        };
        return (0, i.jsx)("div", {
          className: "container",
          children: (0, i.jsx)(r.tq, {
            ...e,
            className: "swiper brand-slider",
            children: l.map((e, s) =>
              (0, i.jsx)(
                r.o5,
                {
                  className: "swiper-slide",
                  children: (0, i.jsx)("div", {
                    className: "brand-image center",
                    children: (0, i.jsx)(d.default, {
                      width: 92,
                      height: 120,
                      style: { objectFit: "contain" },
                      src: e,
                      alt: "Brand logo ".concat(s + 1),
                    }),
                  }),
                },
                s
              )
            ),
          }),
        });
      }
    },
    9926: function (e, s, a) {
      "use strict";
      a.d(s, {
        default: function () {
          return n;
        },
      });
      var i = a(7437),
        l = a(2265);
      function n() {
        let [e, s] = (0, l.useState)(1),
          a = (e) => {
            s(e);
          };
        return (0, i.jsxs)("ul", {
          className: "pagination",
          children: [
            (0, i.jsx)("li", {
              children: (0, i.jsx)("a", {
                className: "page-numbers icon ".concat(
                  1 === e ? "disabled" : ""
                ),
                onClick: () => {
                  s((e) => (e > 1 ? e - 1 : 1));
                },
                children: (0, i.jsx)("i", {
                  className: "fa-solid fa-arrow-left",
                }),
              }),
            }),
            [1, 2, 3].map((s) =>
              (0, i.jsx)(
                "li",
                {
                  children: (0, i.jsx)("a", {
                    className: "page-numbers number ".concat(
                      e === s ? "active" : ""
                    ),
                    onClick: () => a(s),
                    children: s.toString().padStart(2, "0"),
                  }),
                },
                s
              )
            ),
            (0, i.jsx)("li", {
              children: (0, i.jsx)("a", {
                className: "page-numbers icon ".concat(
                  3 === e ? "disabled" : ""
                ),
                onClick: () => {
                  s((e) => (e < 3 ? e + 1 : 3));
                },
                children: (0, i.jsx)("i", {
                  className: "fa-solid fa-arrow-right",
                }),
              }),
            }),
          ],
        });
      }
    },
    6463: function (e, s, a) {
      "use strict";
      var i = a(1169);
      a.o(i, "usePathname") &&
        a.d(s, {
          usePathname: function () {
            return i.usePathname;
          },
        });
    },
  },
  function (e) {
    e.O(0, [572, 740, 640, 987, 844, 191, 817, 971, 23, 744], function () {
      return e((e.s = 2300));
    }),
      (_N_E = e.O());
  },
]);
