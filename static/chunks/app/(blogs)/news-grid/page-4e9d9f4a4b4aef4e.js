(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [109, 367],
  {
    4669: function (e, s, n) {
      Promise.resolve().then(n.bind(n, 1183)),
        Promise.resolve().then(n.bind(n, 9926)),
        Promise.resolve().then(n.bind(n, 5719)),
        Promise.resolve().then(n.bind(n, 2817)),
        Promise.resolve().then(n.t.bind(n, 8173, 23)),
        Promise.resolve().then(n.t.bind(n, 231, 23));
    },
    1183: function (e, s, n) {
      "use strict";
      n.d(s, {
        default: function () {
          return o;
        },
      });
      var a = n(7437);
      let i = [
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
      var r = n(7805),
        t = n(3267),
        l = n(6648);
      function o() {
        let e = {
          spaceBetween: 30,
          speed: 2500,
          loop: !0,
          modules: [r.pt],
          autoplay: { delay: 2500, disableOnInteraction: !1 },
          breakpoints: {
            1199: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            767: { slidesPerView: 3 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 2 },
          },
        };
        return (0, a.jsx)("div", {
          className: "container",
          children: (0, a.jsx)(t.tq, {
            ...e,
            className: "swiper brand-slider",
            children: i.map((e, s) =>
              (0, a.jsx)(
                t.o5,
                {
                  className: "swiper-slide",
                  children: (0, a.jsx)("div", {
                    className: "brand-image center",
                    children: (0, a.jsx)(l.default, {
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
    9926: function (e, s, n) {
      "use strict";
      n.d(s, {
        default: function () {
          return r;
        },
      });
      var a = n(7437),
        i = n(2265);
      function r() {
        let [e, s] = (0, i.useState)(1),
          n = (e) => {
            s(e);
          };
        return (0, a.jsxs)("ul", {
          className: "pagination",
          children: [
            (0, a.jsx)("li", {
              children: (0, a.jsx)("a", {
                className: "page-numbers icon ".concat(
                  1 === e ? "disabled" : ""
                ),
                onClick: () => {
                  s((e) => (e > 1 ? e - 1 : 1));
                },
                children: (0, a.jsx)("i", {
                  className: "fa-solid fa-arrow-left",
                }),
              }),
            }),
            [1, 2, 3].map((s) =>
              (0, a.jsx)(
                "li",
                {
                  children: (0, a.jsx)("a", {
                    className: "page-numbers number ".concat(
                      e === s ? "active" : ""
                    ),
                    onClick: () => n(s),
                    children: s.toString().padStart(2, "0"),
                  }),
                },
                s
              )
            ),
            (0, a.jsx)("li", {
              children: (0, a.jsx)("a", {
                className: "page-numbers icon ".concat(
                  3 === e ? "disabled" : ""
                ),
                onClick: () => {
                  s((e) => (e < 3 ? e + 1 : 3));
                },
                children: (0, a.jsx)("i", {
                  className: "fa-solid fa-arrow-right",
                }),
              }),
            }),
          ],
        });
      }
    },
    6463: function (e, s, n) {
      "use strict";
      var a = n(1169);
      n.o(a, "usePathname") &&
        n.d(s, {
          usePathname: function () {
            return a.usePathname;
          },
        });
    },
  },
  function (e) {
    e.O(0, [572, 740, 640, 987, 191, 817, 971, 23, 744], function () {
      return e((e.s = 4669));
    }),
      (_N_E = e.O());
  },
]);
