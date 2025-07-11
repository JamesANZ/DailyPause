/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */ !(function (t) {
  var e = {};
  function r(i) {
    if (e[i]) return e[i].exports;
    var n = (e[i] = { i: i, l: !1, exports: {} });
    return (t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports);
  }
  ((r.m = t),
    (r.c = e),
    (r.d = function (t, e, i) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (r.r = function (t) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (r.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          r.d(
            i,
            n,
            function (e) {
              return t[e];
            }.bind(null, n),
          );
      return i;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return (r.d(e, "a", e), e);
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 92)));
})([
  function (t, e, r) {
    var i = r(5),
      n = r(82).f,
      a = r(14),
      s = r(83),
      o = r(48),
      h = r(195),
      l = r(199);
    t.exports = function (t, e) {
      var r,
        p,
        c,
        f,
        u,
        m = t.target,
        d = t.global,
        y = t.stat;
      if ((r = d ? i : y ? i[m] || o(m, {}) : (i[m] || {}).prototype))
        for (p in e) {
          if (
            ((f = e[p]),
            (c = t.noTargetGet ? (u = n(r, p)) && u.value : r[p]),
            !l(d ? p : m + (y ? "." : "#") + p, t.forced) && void 0 !== c)
          ) {
            if (typeof f == typeof c) continue;
            h(f, c);
          }
          ((t.sham || (c && c.sham)) && a(f, "sham", !0), s(r, p, f, t));
        }
    };
  },
  function (t, e, r) {
    var i = r(19),
      n = Math.min;
    t.exports = function (t) {
      return t > 0 ? n(i(t), 9007199254740991) : 0;
    };
  },
  function (t, e, r) {
    var i = r(46);
    t.exports = function (t) {
      return Object(i(t));
    };
  },
  function (t, e, r) {
    var i = r(5),
      n = r(37),
      a = r(80),
      s = r(202),
      o = i.Symbol,
      h = n("wks");
    t.exports = function (t) {
      return h[t] || (h[t] = (s && o[t]) || (s ? o : a)("Symbol." + t));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, r) {
    (function (e) {
      var r = "object",
        i = function (t) {
          return t && t.Math == Math && t;
        };
      t.exports =
        i(typeof globalThis == r && globalThis) ||
        i(typeof window == r && window) ||
        i(typeof self == r && self) ||
        i(typeof e == r && e) ||
        Function("return this")();
    }).call(this, r(63));
  },
  function (t, e, r) {
    var i = r(3),
      n = r(88),
      a = r(14),
      s = i("unscopables"),
      o = Array.prototype;
    (null == o[s] && a(o, s, n(null)),
      (t.exports = function (t) {
        o[s][t] = !0;
      }));
  },
  function (t, e, r) {
    var i = r(62),
      n = "object" == typeof self && self && self.Object === Object && self,
      a = i || n || Function("return this")();
    t.exports = a;
  },
  function (t, e, r) {
    "use strict";
    var i = r(4);
    t.exports = function (t, e) {
      var r = [][t];
      return (
        !r ||
        !i(function () {
          r.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1,
          );
        })
      );
    };
  },
  function (t, e) {
    var r = Array.isArray;
    t.exports = r;
  },
  function (t, e, r) {
    var i = r(4);
    t.exports = !i(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, e, r) {
    var i = r(10),
      n = r(78),
      a = r(20),
      s = r(49),
      o = Object.defineProperty;
    e.f = i
      ? o
      : function (t, e, r) {
          if ((a(t), (e = s(e, !0)), a(r), n))
            try {
              return o(t, e, r);
            } catch (t) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported");
          return ("value" in r && (t[e] = r.value), t);
        };
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return r.call(t, e);
    };
  },
  function (t, e, r) {
    var i = r(10),
      n = r(11),
      a = r(38);
    t.exports = i
      ? function (t, e, r) {
          return n.f(t, e, a(1, r));
        }
      : function (t, e, r) {
          return ((t[e] = r), t);
        };
  },
  function (t, e, r) {
    var i = r(39),
      n = r(46);
    t.exports = function (t) {
      return i(n(t));
    };
  },
  function (t, e, r) {
    var i = r(57),
      n = r(39),
      a = r(2),
      s = r(1),
      o = r(27),
      h = [].push,
      l = function (t) {
        var e = 1 == t,
          r = 2 == t,
          l = 3 == t,
          p = 4 == t,
          c = 6 == t,
          f = 5 == t || c;
        return function (u, m, d, y) {
          for (
            var g,
              v,
              b = a(u),
              x = n(b),
              E = i(m, d, 3),
              P = s(x.length),
              S = 0,
              _ = y || o,
              w = e ? _(u, P) : r ? _(u, 0) : void 0;
            P > S;
            S++
          )
            if ((f || S in x) && ((v = E((g = x[S]), S, b)), t))
              if (e) w[S] = v;
              else if (v)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return g;
                  case 6:
                    return S;
                  case 2:
                    h.call(w, g);
                }
              else if (p) return !1;
          return c ? -1 : l || p ? p : w;
        };
      };
    t.exports = {
      forEach: l(0),
      map: l(1),
      filter: l(2),
      some: l(3),
      every: l(4),
      find: l(5),
      findIndex: l(6),
    };
  },
  function (t, e, r) {
    "use strict";
    var i = {},
      n = {},
      a = [],
      s = window.Webflow || [],
      o = window.jQuery,
      h = o(window),
      l = o(document),
      p = o.isFunction,
      c = (i._ = r(94)),
      f = (i.tram = r(58) && o.tram),
      u = !1,
      m = !1;
    function d(t) {
      (i.env() &&
        (p(t.design) && h.on("__wf_design", t.design),
        p(t.preview) && h.on("__wf_preview", t.preview)),
        p(t.destroy) && h.on("__wf_destroy", t.destroy),
        t.ready &&
          p(t.ready) &&
          (function (t) {
            if (u) return void t.ready();
            if (c.contains(a, t.ready)) return;
            a.push(t.ready);
          })(t));
    }
    function y(t) {
      (p(t.design) && h.off("__wf_design", t.design),
        p(t.preview) && h.off("__wf_preview", t.preview),
        p(t.destroy) && h.off("__wf_destroy", t.destroy),
        t.ready &&
          p(t.ready) &&
          (function (t) {
            a = c.filter(a, function (e) {
              return e !== t.ready;
            });
          })(t));
    }
    ((f.config.hideBackface = !1),
      (f.config.keepInherited = !0),
      (i.define = function (t, e, r) {
        n[t] && y(n[t]);
        var i = (n[t] = e(o, c, r) || {});
        return (d(i), i);
      }),
      (i.require = function (t) {
        return n[t];
      }),
      (i.push = function (t) {
        u ? p(t) && t() : s.push(t);
      }),
      (i.env = function (t) {
        var e = window.__wf_design,
          r = void 0 !== e;
        return t
          ? "design" === t
            ? r && e
            : "preview" === t
              ? r && !e
              : "slug" === t
                ? r && window.__wf_slug
                : "editor" === t
                  ? window.WebflowEditor
                  : "test" === t
                    ? window.__wf_test
                    : "frame" === t
                      ? window !== window.top
                      : void 0
          : r;
      }));
    var g,
      v = navigator.userAgent.toLowerCase(),
      b = (i.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      x = (i.env.chrome =
        /chrome/.test(v) &&
        /Google/.test(navigator.vendor) &&
        parseInt(v.match(/chrome\/(\d+)\./)[1], 10)),
      E = (i.env.ios = /(ipod|iphone|ipad)/.test(v));
    ((i.env.safari = /safari/.test(v) && !x && !E),
      b &&
        l.on("touchstart mousedown", function (t) {
          g = t.target;
        }),
      (i.validClick = b
        ? function (t) {
            return t === g || o.contains(t, g);
          }
        : function () {
            return !0;
          }));
    var P,
      S = "resize.webflow orientationchange.webflow load.webflow";
    function _(t, e) {
      var r = [],
        i = {};
      return (
        (i.up = c.throttle(function (t) {
          c.each(r, function (e) {
            e(t);
          });
        })),
        t && e && t.on(e, i.up),
        (i.on = function (t) {
          "function" == typeof t && (c.contains(r, t) || r.push(t));
        }),
        (i.off = function (t) {
          r = arguments.length
            ? c.filter(r, function (e) {
                return e !== t;
              })
            : [];
        }),
        i
      );
    }
    function w(t) {
      p(t) && t();
    }
    function A() {
      (P && (P.reject(), h.off("load", P.resolve)),
        (P = new o.Deferred()),
        h.on("load", P.resolve));
    }
    ((i.resize = _(h, S)),
      (i.scroll = _(
        h,
        "scroll.webflow resize.webflow orientationchange.webflow load.webflow",
      )),
      (i.redraw = _()),
      (i.location = function (t) {
        window.location = t;
      }),
      i.env() && (i.location = function () {}),
      (i.ready = function () {
        ((u = !0),
          m ? ((m = !1), c.each(n, d)) : c.each(a, w),
          c.each(s, w),
          i.resize.up());
      }),
      (i.load = function (t) {
        P.then(t);
      }),
      (i.destroy = function (t) {
        ((t = t || {}),
          (m = !0),
          h.triggerHandler("__wf_destroy"),
          null != t.domready && (u = t.domready),
          c.each(n, y),
          i.resize.off(),
          i.scroll.off(),
          i.redraw.off(),
          (a = []),
          (s = []),
          "pending" === P.state() && A());
      }),
      o(i.ready),
      A(),
      (t.exports = window.Webflow = i));
  },
  function (t, e, r) {
    var i = r(116),
      n = r(121);
    t.exports = function (t, e) {
      var r = n(t, e);
      return i(r) ? r : void 0;
    };
  },
  function (t, e) {
    var r = Math.ceil,
      i = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? i : r)(t);
    };
  },
  function (t, e, r) {
    var i = r(12);
    t.exports = function (t) {
      if (!i(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, e, r) {
    var i = r(53);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == i(t);
      };
  },
  function (t, e, r) {
    var i = r(31),
      n = r(117),
      a = r(118),
      s = "[object Null]",
      o = "[object Undefined]",
      h = i ? i.toStringTag : void 0;
    t.exports = function (t) {
      return null == t
        ? void 0 === t
          ? o
          : s
        : h && h in Object(t)
          ? n(t)
          : a(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return null != t && "object" == typeof t;
    };
  },
  function (t, e, r) {
    var i = r(19),
      n = Math.max,
      a = Math.min;
    t.exports = function (t, e) {
      var r = i(t);
      return r < 0 ? n(r + e, 0) : a(r, e);
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    "use strict";
    var i = r(49),
      n = r(11),
      a = r(38);
    t.exports = function (t, e, r) {
      var s = i(e);
      s in t ? n.f(t, s, a(0, r)) : (t[s] = r);
    };
  },
  function (t, e, r) {
    var i = r(12),
      n = r(21),
      a = r(3)("species");
    t.exports = function (t, e) {
      var r;
      return (
        n(t) &&
          ("function" != typeof (r = t.constructor) ||
          (r !== Array && !n(r.prototype))
            ? i(r) && null === (r = r[a]) && (r = void 0)
            : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === e ? 0 : e)
      );
    };
  },
  function (t, e, r) {
    var i = r(4),
      n = r(3)("species");
    t.exports = function (t) {
      return !i(function () {
        var e = [];
        return (
          ((e.constructor = {})[n] = function () {
            return { foo: 1 };
          }),
          1 !== e[t](Boolean).foo
        );
      });
    };
  },
  function (t, e, r) {
    var i = r(106),
      n = r(107),
      a = r(108),
      s = r(109),
      o = r(110);
    function h(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var i = t[e];
        this.set(i[0], i[1]);
      }
    }
    ((h.prototype.clear = i),
      (h.prototype.delete = n),
      (h.prototype.get = a),
      (h.prototype.has = s),
      (h.prototype.set = o),
      (t.exports = h));
  },
  function (t, e, r) {
    var i = r(60);
    t.exports = function (t, e) {
      for (var r = t.length; r--; ) if (i(t[r][0], e)) return r;
      return -1;
    };
  },
  function (t, e, r) {
    var i = r(7).Symbol;
    t.exports = i;
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e);
    };
  },
  function (t, e, r) {
    var i = r(18)(Object, "create");
    t.exports = i;
  },
  function (t, e, r) {
    var i = r(130);
    t.exports = function (t, e) {
      var r = t.__data__;
      return i(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
    };
  },
  function (t, e, r) {
    var i = r(22),
      n = r(23),
      a = "[object Symbol]";
    t.exports = function (t) {
      return "symbol" == typeof t || (n(t) && i(t) == a);
    };
  },
  function (t, e, r) {
    var i = r(35),
      n = 1 / 0;
    t.exports = function (t) {
      if ("string" == typeof t || i(t)) return t;
      var e = t + "";
      return "0" == e && 1 / t == -n ? "-0" : e;
    };
  },
  function (t, e, r) {
    var i = r(5),
      n = r(48),
      a = r(50),
      s = i["__core-js_shared__"] || n("__core-js_shared__", {});
    (t.exports = function (t, e) {
      return s[t] || (s[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.1.3",
      mode: a ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e, r) {
    var i = r(4),
      n = r(53),
      a = "".split;
    t.exports = i(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == n(t) ? a.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  },
  function (t, e, r) {
    var i = r(18)(r(7), "Map");
    t.exports = i;
  },
  function (t, e, r) {
    var i = r(122),
      n = r(129),
      a = r(131),
      s = r(132),
      o = r(133);
    function h(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var i = t[e];
        this.set(i[0], i[1]);
      }
    }
    ((h.prototype.clear = i),
      (h.prototype.delete = n),
      (h.prototype.get = a),
      (h.prototype.has = s),
      (h.prototype.set = o),
      (t.exports = h));
  },
  function (t, e) {
    var r = 9007199254740991;
    t.exports = function (t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r;
    };
  },
  function (t, e, r) {
    var i = r(9),
      n = r(35),
      a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      s = /^\w*$/;
    t.exports = function (t, e) {
      if (i(t)) return !1;
      var r = typeof t;
      return (
        !(
          "number" != r &&
          "symbol" != r &&
          "boolean" != r &&
          null != t &&
          !n(t)
        ) ||
        s.test(t) ||
        !a.test(t) ||
        (null != e && t in Object(e))
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, r) {
    var i,
      n,
      a,
      s = r(193),
      o = r(5),
      h = r(12),
      l = r(14),
      p = r(13),
      c = r(51),
      f = r(52),
      u = o.WeakMap;
    if (s) {
      var m = new u(),
        d = m.get,
        y = m.has,
        g = m.set;
      ((i = function (t, e) {
        return (g.call(m, t, e), e);
      }),
        (n = function (t) {
          return d.call(m, t) || {};
        }),
        (a = function (t) {
          return y.call(m, t);
        }));
    } else {
      var v = c("state");
      ((f[v] = !0),
        (i = function (t, e) {
          return (l(t, v, e), e);
        }),
        (n = function (t) {
          return p(t, v) ? t[v] : {};
        }),
        (a = function (t) {
          return p(t, v);
        }));
    }
    t.exports = {
      set: i,
      get: n,
      has: a,
      enforce: function (t) {
        return a(t) ? n(t) : i(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!h(e) || (r = n(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return r;
        };
      },
    };
  },
  function (t, e, r) {
    var i = r(5),
      n = r(14);
    t.exports = function (t, e) {
      try {
        n(i, t, e);
      } catch (r) {
        i[t] = e;
      }
      return e;
    };
  },
  function (t, e, r) {
    var i = r(12);
    t.exports = function (t, e) {
      if (!i(t)) return t;
      var r, n;
      if (e && "function" == typeof (r = t.toString) && !i((n = r.call(t))))
        return n;
      if ("function" == typeof (r = t.valueOf) && !i((n = r.call(t)))) return n;
      if (!e && "function" == typeof (r = t.toString) && !i((n = r.call(t))))
        return n;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, r) {
    var i = r(37),
      n = r(80),
      a = i("keys");
    t.exports = function (t) {
      return a[t] || (a[t] = n(t));
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1);
    };
  },
  function (t, e, r) {
    var i = r(84),
      n = r(5),
      a = function (t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? a(i[t]) || a(n[t])
        : (i[t] && i[t][e]) || (n[t] && n[t][e]);
    };
  },
  function (t, e, r) {
    var i = r(15),
      n = r(1),
      a = r(24),
      s = function (t) {
        return function (e, r, s) {
          var o,
            h = i(e),
            l = n(h.length),
            p = a(s, l);
          if (t && r != r) {
            for (; l > p; ) if ((o = h[p++]) != o) return !0;
          } else
            for (; l > p; p++)
              if ((t || p in h) && h[p] === r) return t || p || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: s(!0), indexOf: s(!1) };
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e, r) {
    var i = r(40);
    t.exports = function (t, e, r) {
      if ((i(t), void 0 === e)) return t;
      switch (r) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, i) {
            return t.call(e, r, i);
          };
        case 3:
          return function (r, i, n) {
            return t.call(e, r, i, n);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e, r) {
    "use strict";
    var i = r(41)(r(95));
    window.tram = (function (t) {
      function e(t, e) {
        return new O.Bare().init(t, e);
      }
      function r(t) {
        return t.replace(/[A-Z]/g, function (t) {
          return "-" + t.toLowerCase();
        });
      }
      function n(t) {
        var e = parseInt(t.slice(1), 16);
        return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
      }
      function a(t, e, r) {
        return (
          "#" + ((1 << 24) | (t << 16) | (e << 8) | r).toString(16).slice(1)
        );
      }
      function s() {}
      function o(t, e, r) {
        l("Units do not match [" + t + "]: " + e + ", " + r);
      }
      function h(t, e, r) {
        if ((void 0 !== e && (r = e), void 0 === t)) return r;
        var i = r;
        return (
          Z.test(t) || !J.test(t)
            ? (i = parseInt(t, 10))
            : J.test(t) && (i = 1e3 * parseFloat(t)),
          0 > i && (i = 0),
          i == i ? i : r
        );
      }
      function l(t) {
        W.debug && window && window.console.warn(t);
      }
      var p = (function (t, e, r) {
          function n(t) {
            return "object" == (0, i.default)(t);
          }
          function a(t) {
            return "function" == typeof t;
          }
          function s() {}
          return function i(o, h) {
            function l() {
              var t = new p();
              return (a(t.init) && t.init.apply(t, arguments), t);
            }
            function p() {}
            (h === r && ((h = o), (o = Object)), (l.Bare = p));
            var c,
              f = (s[t] = o[t]),
              u = (p[t] = l[t] = new s());
            return (
              (u.constructor = l),
              (l.mixin = function (e) {
                return ((p[t] = l[t] = i(l, e)[t]), l);
              }),
              (l.open = function (t) {
                if (
                  ((c = {}),
                  a(t) ? (c = t.call(l, u, f, l, o)) : n(t) && (c = t),
                  n(c))
                )
                  for (var r in c) e.call(c, r) && (u[r] = c[r]);
                return (a(u.init) || (u.init = o), l);
              }),
              l.open(h)
            );
          };
        })("prototype", {}.hasOwnProperty),
        c = {
          ease: [
            "ease",
            function (t, e, r, i) {
              var n = (t /= i) * t,
                a = n * t;
              return (
                e +
                r * (-2.75 * a * n + 11 * n * n + -15.5 * a + 8 * n + 0.25 * t)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (t, e, r, i) {
              var n = (t /= i) * t,
                a = n * t;
              return e + r * (-1 * a * n + 3 * n * n + -3 * a + 2 * n);
            },
          ],
          "ease-out": [
            "ease-out",
            function (t, e, r, i) {
              var n = (t /= i) * t,
                a = n * t;
              return (
                e +
                r * (0.3 * a * n + -1.6 * n * n + 2.2 * a + -1.8 * n + 1.9 * t)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (t, e, r, i) {
              var n = (t /= i) * t,
                a = n * t;
              return e + r * (2 * a * n + -5 * n * n + 2 * a + 2 * n);
            },
          ],
          linear: [
            "linear",
            function (t, e, r, i) {
              return (r * t) / i + e;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (t, e, r, i) {
              return r * (t /= i) * t + e;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (t, e, r, i) {
              return -r * (t /= i) * (t - 2) + e;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (t, e, r, i) {
              return (t /= i / 2) < 1
                ? (r / 2) * t * t + e
                : (-r / 2) * (--t * (t - 2) - 1) + e;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (t, e, r, i) {
              return r * (t /= i) * t * t + e;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (t, e, r, i) {
              return r * ((t = t / i - 1) * t * t + 1) + e;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (t, e, r, i) {
              return (t /= i / 2) < 1
                ? (r / 2) * t * t * t + e
                : (r / 2) * ((t -= 2) * t * t + 2) + e;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (t, e, r, i) {
              return r * (t /= i) * t * t * t + e;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (t, e, r, i) {
              return -r * ((t = t / i - 1) * t * t * t - 1) + e;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (t, e, r, i) {
              return (t /= i / 2) < 1
                ? (r / 2) * t * t * t * t + e
                : (-r / 2) * ((t -= 2) * t * t * t - 2) + e;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (t, e, r, i) {
              return r * (t /= i) * t * t * t * t + e;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (t, e, r, i) {
              return r * ((t = t / i - 1) * t * t * t * t + 1) + e;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (t, e, r, i) {
              return (t /= i / 2) < 1
                ? (r / 2) * t * t * t * t * t + e
                : (r / 2) * ((t -= 2) * t * t * t * t + 2) + e;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (t, e, r, i) {
              return -r * Math.cos((t / i) * (Math.PI / 2)) + r + e;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (t, e, r, i) {
              return r * Math.sin((t / i) * (Math.PI / 2)) + e;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (t, e, r, i) {
              return (-r / 2) * (Math.cos((Math.PI * t) / i) - 1) + e;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (t, e, r, i) {
              return 0 === t ? e : r * Math.pow(2, 10 * (t / i - 1)) + e;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (t, e, r, i) {
              return t === i ? e + r : r * (1 - Math.pow(2, (-10 * t) / i)) + e;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (t, e, r, i) {
              return 0 === t
                ? e
                : t === i
                  ? e + r
                  : (t /= i / 2) < 1
                    ? (r / 2) * Math.pow(2, 10 * (t - 1)) + e
                    : (r / 2) * (2 - Math.pow(2, -10 * --t)) + e;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (t, e, r, i) {
              return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + e;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (t, e, r, i) {
              return r * Math.sqrt(1 - (t = t / i - 1) * t) + e;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (t, e, r, i) {
              return (t /= i / 2) < 1
                ? (-r / 2) * (Math.sqrt(1 - t * t) - 1) + e
                : (r / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (t, e, r, i, n) {
              return (
                void 0 === n && (n = 1.70158),
                r * (t /= i) * t * ((n + 1) * t - n) + e
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (t, e, r, i, n) {
              return (
                void 0 === n && (n = 1.70158),
                r * ((t = t / i - 1) * t * ((n + 1) * t + n) + 1) + e
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (t, e, r, i, n) {
              return (
                void 0 === n && (n = 1.70158),
                (t /= i / 2) < 1
                  ? (r / 2) * t * t * ((1 + (n *= 1.525)) * t - n) + e
                  : (r / 2) *
                      ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) +
                    e
              );
            },
          ],
        },
        f = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        u = document,
        m = window,
        d = "bkwld-tram",
        y = /[\-\.0-9]/g,
        g = /[A-Z]/,
        v = "number",
        b = /^(rgb|#)/,
        x = /(em|cm|mm|in|pt|pc|px)$/,
        E = /(em|cm|mm|in|pt|pc|px|%)$/,
        P = /(deg|rad|turn)$/,
        S = "unitless",
        _ = /(all|none) 0s ease 0s/,
        w = /^(width|height)$/,
        A = " ",
        C = u.createElement("a"),
        k = ["Webkit", "Moz", "O", "ms"],
        T = ["-webkit-", "-moz-", "-o-", "-ms-"],
        D = function (t) {
          if (t in C.style) return { dom: t, css: t };
          var e,
            r,
            i = "",
            n = t.split("-");
          for (e = 0; e < n.length; e++)
            i += n[e].charAt(0).toUpperCase() + n[e].slice(1);
          for (e = 0; e < k.length; e++)
            if ((r = k[e] + i) in C.style) return { dom: r, css: T[e] + t };
        },
        M = (e.support = {
          bind: Function.prototype.bind,
          transform: D("transform"),
          transition: D("transition"),
          backface: D("backface-visibility"),
          timing: D("transition-timing-function"),
        });
      if (M.transition) {
        var F = M.timing.dom;
        if (((C.style[F] = c["ease-in-back"][0]), !C.style[F]))
          for (var I in f) c[I][0] = f[I];
      }
      var R = (e.frame = (function () {
          var t =
            m.requestAnimationFrame ||
            m.webkitRequestAnimationFrame ||
            m.mozRequestAnimationFrame ||
            m.oRequestAnimationFrame ||
            m.msRequestAnimationFrame;
          return t && M.bind
            ? t.bind(m)
            : function (t) {
                m.setTimeout(t, 16);
              };
        })()),
        V = (e.now = (function () {
          var t = m.performance,
            e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
          return e && M.bind
            ? e.bind(t)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        B = p(function (e) {
          function n(t, e) {
            var r = (function (t) {
                for (var e = -1, r = t ? t.length : 0, i = []; ++e < r; ) {
                  var n = t[e];
                  n && i.push(n);
                }
                return i;
              })(("" + t).split(A)),
              i = r[0];
            e = e || {};
            var n = U[i];
            if (!n) return l("Unsupported property: " + i);
            if (!e.weak || !this.props[i]) {
              var a = n[0],
                s = this.props[i];
              return (
                s || (s = this.props[i] = new a.Bare()),
                s.init(this.$el, r, n, e),
                s
              );
            }
          }
          function a(t, e, r) {
            if (t) {
              var a = (0, i.default)(t);
              if (
                (e ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                "number" == a && e)
              )
                return (
                  (this.timer = new H({
                    duration: t,
                    context: this,
                    complete: s,
                  })),
                  void (this.active = !0)
                );
              if ("string" == a && e) {
                switch (t) {
                  case "hide":
                    p.call(this);
                    break;
                  case "stop":
                    o.call(this);
                    break;
                  case "redraw":
                    c.call(this);
                    break;
                  default:
                    n.call(this, t, r && r[1]);
                }
                return s.call(this);
              }
              if ("function" == a) return void t.call(this, this);
              if ("object" == a) {
                var l = 0;
                (u.call(
                  this,
                  t,
                  function (t, e) {
                    (t.span > l && (l = t.span), t.stop(), t.animate(e));
                  },
                  function (t) {
                    "wait" in t && (l = h(t.wait, 0));
                  },
                ),
                  f.call(this),
                  l > 0 &&
                    ((this.timer = new H({ duration: l, context: this })),
                    (this.active = !0),
                    e && (this.timer.complete = s)));
                var m = this,
                  d = !1,
                  y = {};
                R(function () {
                  (u.call(m, t, function (t) {
                    t.active && ((d = !0), (y[t.name] = t.nextStyle));
                  }),
                    d && m.$el.css(y));
                });
              }
            }
          }
          function s() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var t = this.queue.shift();
              a.call(this, t.options, !0, t.args);
            }
          }
          function o(t) {
            var e;
            (this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1),
              "string" == typeof t
                ? ((e = {})[t] = 1)
                : (e =
                    "object" == (0, i.default)(t) && null != t
                      ? t
                      : this.props),
              u.call(this, e, m),
              f.call(this));
          }
          function p() {
            (o.call(this), (this.el.style.display = "none"));
          }
          function c() {
            this.el.offsetHeight;
          }
          function f() {
            var t,
              e,
              r = [];
            for (t in (this.upstream && r.push(this.upstream), this.props))
              (e = this.props[t]).active && r.push(e.string);
            ((r = r.join(",")),
              this.style !== r &&
                ((this.style = r), (this.el.style[M.transition.dom] = r)));
          }
          function u(t, e, i) {
            var a,
              s,
              o,
              h,
              l = e !== m,
              p = {};
            for (a in t)
              ((o = t[a]),
                a in K
                  ? (p.transform || (p.transform = {}), (p.transform[a] = o))
                  : (g.test(a) && (a = r(a)),
                    a in U ? (p[a] = o) : (h || (h = {}), (h[a] = o))));
            for (a in p) {
              if (((o = p[a]), !(s = this.props[a]))) {
                if (!l) continue;
                s = n.call(this, a);
              }
              e.call(this, s, o);
            }
            i && h && i.call(this, h);
          }
          function m(t) {
            t.stop();
          }
          function y(t, e) {
            t.set(e);
          }
          function v(t) {
            this.$el.css(t);
          }
          function b(t, r) {
            e[t] = function () {
              return this.children
                ? function (t, e) {
                    var r,
                      i = this.children.length;
                    for (r = 0; i > r; r++) t.apply(this.children[r], e);
                    return this;
                  }.call(this, r, arguments)
                : (this.el && r.apply(this, arguments), this);
            };
          }
          ((e.init = function (e) {
            if (
              ((this.$el = t(e)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              W.keepInherited && !W.fallback)
            ) {
              var r = Y(this.el, "transition");
              r && !_.test(r) && (this.upstream = r);
            }
            M.backface &&
              W.hideBackface &&
              $(this.el, M.backface.css, "hidden");
          }),
            b("add", n),
            b("start", a),
            b("wait", function (t) {
              ((t = h(t, 0)),
                this.active
                  ? this.queue.push({ options: t })
                  : ((this.timer = new H({
                      duration: t,
                      context: this,
                      complete: s,
                    })),
                    (this.active = !0)));
            }),
            b("then", function (t) {
              return this.active
                ? (this.queue.push({ options: t, args: arguments }),
                  void (this.timer.complete = s))
                : l(
                    "No active transition timer. Use start() or wait() before then().",
                  );
            }),
            b("next", s),
            b("stop", o),
            b("set", function (t) {
              (o.call(this, t), u.call(this, t, y, v));
            }),
            b("show", function (t) {
              ("string" != typeof t && (t = "block"),
                (this.el.style.display = t));
            }),
            b("hide", p),
            b("redraw", c),
            b("destroy", function () {
              (o.call(this),
                t.removeData(this.el, d),
                (this.$el = this.el = null));
            }));
        }),
        O = p(B, function (e) {
          function r(e, r) {
            var i = t.data(e, d) || t.data(e, d, new B.Bare());
            return (i.el || i.init(e), r ? i.start(r) : i);
          }
          e.init = function (e, i) {
            var n = t(e);
            if (!n.length) return this;
            if (1 === n.length) return r(n[0], i);
            var a = [];
            return (
              n.each(function (t, e) {
                a.push(r(e, i));
              }),
              (this.children = a),
              this
            );
          };
        }),
        L = p(function (t) {
          function e() {
            var t = this.get();
            this.update("auto");
            var e = this.get();
            return (this.update(t), e);
          }
          function r(t) {
            var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
            return (e ? a(e[1], e[2], e[3]) : t).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3",
            );
          }
          var n = 500,
            s = "ease",
            o = 0;
          ((t.init = function (t, e, r, i) {
            ((this.$el = t), (this.el = t[0]));
            var a = e[0];
            (r[2] && (a = r[2]),
              X[a] && (a = X[a]),
              (this.name = a),
              (this.type = r[1]),
              (this.duration = h(e[1], this.duration, n)),
              (this.ease = (function (t, e, r) {
                return (void 0 !== e && (r = e), t in c ? t : r);
              })(e[2], this.ease, s)),
              (this.delay = h(e[3], this.delay, o)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = w.test(this.name)),
              (this.unit = i.unit || this.unit || W.defaultUnit),
              (this.angle = i.angle || this.angle || W.defaultAngle),
              W.fallback || i.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    A +
                    this.duration +
                    "ms" +
                    ("ease" != this.ease ? A + c[this.ease][0] : "") +
                    (this.delay ? A + this.delay + "ms" : ""))));
          }),
            (t.set = function (t) {
              ((t = this.convert(t, this.type)), this.update(t), this.redraw());
            }),
            (t.transition = function (t) {
              ((this.active = !0),
                (t = this.convert(t, this.type)),
                this.auto &&
                  ("auto" == this.el.style[this.name] &&
                    (this.update(this.get()), this.redraw()),
                  "auto" == t && (t = e.call(this))),
                (this.nextStyle = t));
            }),
            (t.fallback = function (t) {
              var r =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              ((t = this.convert(t, this.type)),
                this.auto &&
                  ("auto" == r && (r = this.convert(this.get(), this.type)),
                  "auto" == t && (t = e.call(this))),
                (this.tween = new j({
                  from: r,
                  to: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                })));
            }),
            (t.get = function () {
              return Y(this.el, this.name);
            }),
            (t.update = function (t) {
              $(this.el, this.name, t);
            }),
            (t.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                $(this.el, this.name, this.get()));
              var t = this.tween;
              t && t.context && t.destroy();
            }),
            (t.convert = function (t, e) {
              if ("auto" == t && this.auto) return t;
              var n,
                a = "number" == typeof t,
                s = "string" == typeof t;
              switch (e) {
                case v:
                  if (a) return t;
                  if (s && "" === t.replace(y, "")) return +t;
                  n = "number(unitless)";
                  break;
                case b:
                  if (s) {
                    if ("" === t && this.original) return this.original;
                    if (e.test(t))
                      return "#" == t.charAt(0) && 7 == t.length ? t : r(t);
                  }
                  n = "hex or rgb string";
                  break;
                case x:
                  if (a) return t + this.unit;
                  if (s && e.test(t)) return t;
                  n = "number(px) or string(unit)";
                  break;
                case E:
                  if (a) return t + this.unit;
                  if (s && e.test(t)) return t;
                  n = "number(px) or string(unit or %)";
                  break;
                case P:
                  if (a) return t + this.angle;
                  if (s && e.test(t)) return t;
                  n = "number(deg) or string(angle)";
                  break;
                case S:
                  if (a) return t;
                  if (s && E.test(t)) return t;
                  n = "number(unitless) or string(unit or %)";
              }
              return (
                (function (t, e) {
                  l(
                    "Type warning: Expected: [" +
                      t +
                      "] Got: [" +
                      (0, i.default)(e) +
                      "] " +
                      e,
                  );
                })(n, t),
                t
              );
            }),
            (t.redraw = function () {
              this.el.offsetHeight;
            }));
        }),
        z = p(L, function (t, e) {
          t.init = function () {
            (e.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), b)));
          };
        }),
        G = p(L, function (t, e) {
          ((t.init = function () {
            (e.init.apply(this, arguments), (this.animate = this.fallback));
          }),
            (t.get = function () {
              return this.$el[this.name]();
            }),
            (t.update = function (t) {
              this.$el[this.name](t);
            }));
        }),
        N = p(L, function (t, e) {
          function r(t, e) {
            var r, i, n, a, s;
            for (r in t)
              ((n = (a = K[r])[0]),
                (i = a[1] || r),
                (s = this.convert(t[r], n)),
                e.call(this, i, s, n));
          }
          ((t.init = function () {
            (e.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                K.perspective &&
                  W.perspective &&
                  ((this.current.perspective = W.perspective),
                  $(this.el, this.name, this.style(this.current)),
                  this.redraw())));
          }),
            (t.set = function (t) {
              (r.call(this, t, function (t, e) {
                this.current[t] = e;
              }),
                $(this.el, this.name, this.style(this.current)),
                this.redraw());
            }),
            (t.transition = function (t) {
              var e = this.values(t);
              this.tween = new q({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var r,
                i = {};
              for (r in this.current) i[r] = r in e ? e[r] : this.current[r];
              ((this.active = !0), (this.nextStyle = this.style(i)));
            }),
            (t.fallback = function (t) {
              var e = this.values(t);
              this.tween = new q({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (t.update = function () {
              $(this.el, this.name, this.style(this.current));
            }),
            (t.style = function (t) {
              var e,
                r = "";
              for (e in t) r += e + "(" + t[e] + ") ";
              return r;
            }),
            (t.values = function (t) {
              var e,
                i = {};
              return (
                r.call(this, t, function (t, r, n) {
                  ((i[t] = r),
                    void 0 === this.current[t] &&
                      ((e = 0),
                      ~t.indexOf("scale") && (e = 1),
                      (this.current[t] = this.convert(e, n))));
                }),
                i
              );
            }));
        }),
        j = p(function (e) {
          function r() {
            var t,
              e,
              i,
              n = h.length;
            if (n) for (R(r), e = V(), t = n; t--; ) (i = h[t]) && i.render(e);
          }
          var i = { ease: c.ease[1], from: 0, to: 1 };
          ((e.init = function (t) {
            ((this.duration = t.duration || 0), (this.delay = t.delay || 0));
            var e = t.ease || i.ease;
            (c[e] && (e = c[e][1]),
              "function" != typeof e && (e = i.ease),
              (this.ease = e),
              (this.update = t.update || s),
              (this.complete = t.complete || s),
              (this.context = t.context || this),
              (this.name = t.name));
            var r = t.from,
              n = t.to;
            (void 0 === r && (r = i.from),
              void 0 === n && (n = i.to),
              (this.unit = t.unit || ""),
              "number" == typeof r && "number" == typeof n
                ? ((this.begin = r), (this.change = n - r))
                : this.format(n, r),
              (this.value = this.begin + this.unit),
              (this.start = V()),
              !1 !== t.autoplay && this.play());
          }),
            (e.play = function () {
              var t;
              this.active ||
                (this.start || (this.start = V()),
                (this.active = !0),
                (t = this),
                1 === h.push(t) && R(r));
            }),
            (e.stop = function () {
              var e, r, i;
              this.active &&
                ((this.active = !1),
                (e = this),
                (i = t.inArray(e, h)) >= 0 &&
                  ((r = h.slice(i + 1)),
                  (h.length = i),
                  r.length && (h = h.concat(r))));
            }),
            (e.render = function (t) {
              var e,
                r = t - this.start;
              if (this.delay) {
                if (r <= this.delay) return;
                r -= this.delay;
              }
              if (r < this.duration) {
                var i = this.ease(r, 0, 1, this.duration);
                return (
                  (e = this.startRGB
                    ? (function (t, e, r) {
                        return a(
                          t[0] + r * (e[0] - t[0]),
                          t[1] + r * (e[1] - t[1]),
                          t[2] + r * (e[2] - t[2]),
                        );
                      })(this.startRGB, this.endRGB, i)
                    : (function (t) {
                        return Math.round(t * l) / l;
                      })(this.begin + i * this.change)),
                  (this.value = e + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              ((e = this.endHex || this.begin + this.change),
                (this.value = e + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy());
            }),
            (e.format = function (t, e) {
              if (((e += ""), "#" == (t += "").charAt(0)))
                return (
                  (this.startRGB = n(e)),
                  (this.endRGB = n(t)),
                  (this.endHex = t),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var r = e.replace(y, "");
                (r !== t.replace(y, "") && o("tween", e, t), (this.unit = r));
              }
              ((e = parseFloat(e)),
                (t = parseFloat(t)),
                (this.begin = this.value = e),
                (this.change = t - e));
            }),
            (e.destroy = function () {
              (this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = s));
            }));
          var h = [],
            l = 1e3;
        }),
        H = p(j, function (t) {
          ((t.init = function (t) {
            ((this.duration = t.duration || 0),
              (this.complete = t.complete || s),
              (this.context = t.context),
              this.play());
          }),
            (t.render = function (t) {
              t - this.start < this.duration ||
                (this.complete.call(this.context), this.destroy());
            }));
        }),
        q = p(j, function (t, e) {
          ((t.init = function (t) {
            var e, r;
            for (e in ((this.context = t.context),
            (this.update = t.update),
            (this.tweens = []),
            (this.current = t.current),
            t.values))
              ((r = t.values[e]),
                this.current[e] !== r &&
                  this.tweens.push(
                    new j({
                      name: e,
                      from: this.current[e],
                      to: r,
                      duration: t.duration,
                      delay: t.delay,
                      ease: t.ease,
                      autoplay: !1,
                    }),
                  ));
            this.play();
          }),
            (t.render = function (t) {
              var e,
                r,
                i = !1;
              for (e = this.tweens.length; e--; )
                (r = this.tweens[e]).context &&
                  (r.render(t), (this.current[r.name] = r.value), (i = !0));
              return i
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (t.destroy = function () {
              if ((e.destroy.call(this), this.tweens)) {
                var t;
                for (t = this.tweens.length; t--; ) this.tweens[t].destroy();
                ((this.tweens = null), (this.current = null));
              }
            }));
        }),
        W = (e.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !M.transition,
          agentTests: [],
        });
      ((e.fallback = function (t) {
        if (!M.transition) return (W.fallback = !0);
        W.agentTests.push("(" + t + ")");
        var e = new RegExp(W.agentTests.join("|"), "i");
        W.fallback = e.test(navigator.userAgent);
      }),
        e.fallback("6.0.[2-5] Safari"),
        (e.tween = function (t) {
          return new j(t);
        }),
        (e.delay = function (t, e, r) {
          return new H({ complete: e, duration: t, context: r });
        }),
        (t.fn.tram = function (t) {
          return e.call(null, this, t);
        }));
      var $ = t.style,
        Y = t.css,
        X = { transform: M.transform && M.transform.css },
        U = {
          color: [z, b],
          background: [z, b, "background-color"],
          "outline-color": [z, b],
          "border-color": [z, b],
          "border-top-color": [z, b],
          "border-right-color": [z, b],
          "border-bottom-color": [z, b],
          "border-left-color": [z, b],
          "border-width": [L, x],
          "border-top-width": [L, x],
          "border-right-width": [L, x],
          "border-bottom-width": [L, x],
          "border-left-width": [L, x],
          "border-spacing": [L, x],
          "letter-spacing": [L, x],
          margin: [L, x],
          "margin-top": [L, x],
          "margin-right": [L, x],
          "margin-bottom": [L, x],
          "margin-left": [L, x],
          padding: [L, x],
          "padding-top": [L, x],
          "padding-right": [L, x],
          "padding-bottom": [L, x],
          "padding-left": [L, x],
          "outline-width": [L, x],
          opacity: [L, v],
          top: [L, E],
          right: [L, E],
          bottom: [L, E],
          left: [L, E],
          "font-size": [L, E],
          "text-indent": [L, E],
          "word-spacing": [L, E],
          width: [L, E],
          "min-width": [L, E],
          "max-width": [L, E],
          height: [L, E],
          "min-height": [L, E],
          "max-height": [L, E],
          "line-height": [L, S],
          "scroll-top": [G, v, "scrollTop"],
          "scroll-left": [G, v, "scrollLeft"],
        },
        K = {};
      (M.transform &&
        ((U.transform = [N]),
        (K = {
          x: [E, "translateX"],
          y: [E, "translateY"],
          rotate: [P],
          rotateX: [P],
          rotateY: [P],
          scale: [v],
          scaleX: [v],
          scaleY: [v],
          skew: [P],
          skewX: [P],
          skewY: [P],
        })),
        M.transform &&
          M.backface &&
          ((K.z = [E, "translateZ"]),
          (K.rotateZ = [P]),
          (K.scaleZ = [v]),
          (K.perspective = [x])));
      var Z = /ms/,
        J = /s|\./;
      return (t.tram = e);
    })(window.jQuery);
  },
  function (t, e, r) {
    var i = r(29),
      n = r(111),
      a = r(112),
      s = r(113),
      o = r(114),
      h = r(115);
    function l(t) {
      var e = (this.__data__ = new i(t));
      this.size = e.size;
    }
    ((l.prototype.clear = n),
      (l.prototype.delete = a),
      (l.prototype.get = s),
      (l.prototype.has = o),
      (l.prototype.set = h),
      (t.exports = l));
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t === e || (t != t && e != e);
    };
  },
  function (t, e, r) {
    var i = r(22),
      n = r(32),
      a = "[object AsyncFunction]",
      s = "[object Function]",
      o = "[object GeneratorFunction]",
      h = "[object Proxy]";
    t.exports = function (t) {
      if (!n(t)) return !1;
      var e = i(t);
      return e == s || e == o || e == a || e == h;
    };
  },
  function (t, e, r) {
    (function (e) {
      var r = "object" == typeof e && e && e.Object === Object && e;
      t.exports = r;
    }).call(this, r(63));
  },
  function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  function (t, e) {
    var r = Function.prototype.toString;
    t.exports = function (t) {
      if (null != t) {
        try {
          return r.call(t);
        } catch (t) {}
        try {
          return t + "";
        } catch (t) {}
      }
      return "";
    };
  },
  function (t, e, r) {
    var i = r(134),
      n = r(23);
    t.exports = function t(e, r, a, s, o) {
      return (
        e === r ||
        (null == e || null == r || (!n(e) && !n(r))
          ? e != e && r != r
          : i(e, r, a, s, t, o))
      );
    };
  },
  function (t, e, r) {
    var i = r(135),
      n = r(138),
      a = r(139),
      s = 1,
      o = 2;
    t.exports = function (t, e, r, h, l, p) {
      var c = r & s,
        f = t.length,
        u = e.length;
      if (f != u && !(c && u > f)) return !1;
      var m = p.get(t),
        d = p.get(e);
      if (m && d) return m == e && d == t;
      var y = -1,
        g = !0,
        v = r & o ? new i() : void 0;
      for (p.set(t, e), p.set(e, t); ++y < f; ) {
        var b = t[y],
          x = e[y];
        if (h) var E = c ? h(x, b, y, e, t, p) : h(b, x, y, t, e, p);
        if (void 0 !== E) {
          if (E) continue;
          g = !1;
          break;
        }
        if (v) {
          if (
            !n(e, function (t, e) {
              if (!a(v, e) && (b === t || l(b, t, r, h, p))) return v.push(e);
            })
          ) {
            g = !1;
            break;
          }
        } else if (b !== x && !l(b, x, r, h, p)) {
          g = !1;
          break;
        }
      }
      return (p.delete(t), p.delete(e), g);
    };
  },
  function (t, e, r) {
    var i = r(151),
      n = r(158),
      a = r(162);
    t.exports = function (t) {
      return a(t) ? i(t) : n(t);
    };
  },
  function (t, e, r) {
    var i = r(153),
      n = r(23),
      a = Object.prototype,
      s = a.hasOwnProperty,
      o = a.propertyIsEnumerable,
      h = i(
        (function () {
          return arguments;
        })(),
      )
        ? i
        : function (t) {
            return n(t) && s.call(t, "callee") && !o.call(t, "callee");
          };
    t.exports = h;
  },
  function (t, e, r) {
    (function (t) {
      var i = r(7),
        n = r(154),
        a = e && !e.nodeType && e,
        s = a && "object" == typeof t && t && !t.nodeType && t,
        o = s && s.exports === a ? i.Buffer : void 0,
        h = (o ? o.isBuffer : void 0) || n;
      t.exports = h;
    }).call(this, r(70)(t));
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e) {
    var r = 9007199254740991,
      i = /^(?:0|[1-9]\d*)$/;
    t.exports = function (t, e) {
      var n = typeof t;
      return (
        !!(e = null == e ? r : e) &&
        ("number" == n || ("symbol" != n && i.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
      );
    };
  },
  function (t, e, r) {
    var i = r(155),
      n = r(156),
      a = r(157),
      s = a && a.isTypedArray,
      o = s ? n(s) : i;
    t.exports = o;
  },
  function (t, e, r) {
    var i = r(32);
    t.exports = function (t) {
      return t == t && !i(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (r) {
        return null != r && r[t] === e && (void 0 !== e || t in Object(r));
      };
    };
  },
  function (t, e, r) {
    var i = r(76),
      n = r(36);
    t.exports = function (t, e) {
      for (var r = 0, a = (e = i(e, t)).length; null != t && r < a; )
        t = t[n(e[r++])];
      return r && r == a ? t : void 0;
    };
  },
  function (t, e, r) {
    var i = r(9),
      n = r(45),
      a = r(171),
      s = r(174);
    t.exports = function (t, e) {
      return i(t) ? t : n(t, e) ? [t] : a(s(t));
    };
  },
  function (t, e, r) {
    var i = r(37);
    t.exports = i("native-function-to-string", Function.toString);
  },
  function (t, e, r) {
    var i = r(10),
      n = r(4),
      a = r(79);
    t.exports =
      !i &&
      !n(function () {
        return (
          7 !=
          Object.defineProperty(a("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, r) {
    var i = r(5),
      n = r(12),
      a = i.document,
      s = n(a) && n(a.createElement);
    t.exports = function (t) {
      return s ? a.createElement(t) : {};
    };
  },
  function (t, e) {
    var r = 0,
      i = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++r + i).toString(36)
      );
    };
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(200),
      a = r(87),
      s = r(206),
      o = r(89),
      h = r(14),
      l = r(83),
      p = r(3),
      c = r(50),
      f = r(25),
      u = r(86),
      m = u.IteratorPrototype,
      d = u.BUGGY_SAFARI_ITERATORS,
      y = p("iterator"),
      g = function () {
        return this;
      };
    t.exports = function (t, e, r, p, u, v, b) {
      n(r, e, p);
      var x,
        E,
        P,
        S = function (t) {
          if (t === u && k) return k;
          if (!d && t in A) return A[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        _ = e + " Iterator",
        w = !1,
        A = t.prototype,
        C = A[y] || A["@@iterator"] || (u && A[u]),
        k = (!d && C) || S(u),
        T = ("Array" == e && A.entries) || C;
      if (
        (T &&
          ((x = a(T.call(new t()))),
          m !== Object.prototype &&
            x.next &&
            (c ||
              a(x) === m ||
              (s ? s(x, m) : "function" != typeof x[y] && h(x, y, g)),
            o(x, _, !0, !0),
            c && (f[_] = g))),
        "values" == u &&
          C &&
          "values" !== C.name &&
          ((w = !0),
          (k = function () {
            return C.call(this);
          })),
        (c && !b) || A[y] === k || h(A, y, k),
        (f[e] = k),
        u)
      )
        if (
          ((E = {
            values: S("values"),
            keys: v ? k : S("keys"),
            entries: S("entries"),
          }),
          b)
        )
          for (P in E) (!d && !w && P in A) || l(A, P, E[P]);
        else i({ target: e, proto: !0, forced: d || w }, E);
      return E;
    };
  },
  function (t, e, r) {
    var i = r(10),
      n = r(194),
      a = r(38),
      s = r(15),
      o = r(49),
      h = r(13),
      l = r(78),
      p = Object.getOwnPropertyDescriptor;
    e.f = i
      ? p
      : function (t, e) {
          if (((t = s(t)), (e = o(e, !0)), l))
            try {
              return p(t, e);
            } catch (t) {}
          if (h(t, e)) return a(!n.f.call(t, e), t[e]);
        };
  },
  function (t, e, r) {
    var i = r(5),
      n = r(37),
      a = r(14),
      s = r(13),
      o = r(48),
      h = r(77),
      l = r(47),
      p = l.get,
      c = l.enforce,
      f = String(h).split("toString");
    (n("inspectSource", function (t) {
      return h.call(t);
    }),
      (t.exports = function (t, e, r, n) {
        var h = !!n && !!n.unsafe,
          l = !!n && !!n.enumerable,
          p = !!n && !!n.noTargetGet;
        ("function" == typeof r &&
          ("string" != typeof e || s(r, "name") || a(r, "name", e),
          (c(r).source = f.join("string" == typeof e ? e : ""))),
          t !== i
            ? (h ? !p && t[e] && (l = !0) : delete t[e],
              l ? (t[e] = r) : a(t, e, r))
            : l
              ? (t[e] = r)
              : o(e, r));
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && p(this).source) || h.call(this);
      }));
  },
  function (t, e, r) {
    t.exports = r(5);
  },
  function (t, e, r) {
    var i = r(13),
      n = r(15),
      a = r(55).indexOf,
      s = r(52);
    t.exports = function (t, e) {
      var r,
        o = n(t),
        h = 0,
        l = [];
      for (r in o) !i(s, r) && i(o, r) && l.push(r);
      for (; e.length > h; ) i(o, (r = e[h++])) && (~a(l, r) || l.push(r));
      return l;
    };
  },
  function (t, e, r) {
    "use strict";
    var i,
      n,
      a,
      s = r(87),
      o = r(14),
      h = r(13),
      l = r(3),
      p = r(50),
      c = l("iterator"),
      f = !1;
    ([].keys &&
      ("next" in (a = [].keys())
        ? (n = s(s(a))) !== Object.prototype && (i = n)
        : (f = !0)),
      null == i && (i = {}),
      p ||
        h(i, c) ||
        o(i, c, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: f }));
  },
  function (t, e, r) {
    var i = r(13),
      n = r(2),
      a = r(51),
      s = r(201),
      o = a("IE_PROTO"),
      h = Object.prototype;
    t.exports = s
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = n(t)),
            i(t, o)
              ? t[o]
              : "function" == typeof t.constructor && t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                  ? h
                  : null
          );
        };
  },
  function (t, e, r) {
    var i = r(20),
      n = r(203),
      a = r(56),
      s = r(52),
      o = r(205),
      h = r(79),
      l = r(51)("IE_PROTO"),
      p = function () {},
      c = function () {
        var t,
          e = h("iframe"),
          r = a.length;
        for (
          e.style.display = "none",
            o.appendChild(e),
            e.src = String("javascript:"),
            (t = e.contentWindow.document).open(),
            t.write("<script>document.F=Object</script>"),
            t.close(),
            c = t.F;
          r--;

        )
          delete c.prototype[a[r]];
        return c();
      };
    ((t.exports =
      Object.create ||
      function (t, e) {
        var r;
        return (
          null !== t
            ? ((p.prototype = i(t)),
              (r = new p()),
              (p.prototype = null),
              (r[l] = t))
            : (r = c()),
          void 0 === e ? r : n(r, e)
        );
      }),
      (s[l] = !0));
  },
  function (t, e, r) {
    var i = r(11).f,
      n = r(13),
      a = r(3)("toStringTag");
    t.exports = function (t, e, r) {
      t &&
        !n((t = r ? t : t.prototype), a) &&
        i(t, a, { configurable: !0, value: e });
    };
  },
  function (t, e, r) {
    "use strict";
    var i = r(21),
      n = r(1),
      a = r(57),
      s = function (t, e, r, o, h, l, p, c) {
        for (var f, u = h, m = 0, d = !!p && a(p, c, 3); m < o; ) {
          if (m in r) {
            if (((f = d ? d(r[m], m, e) : r[m]), l > 0 && i(f)))
              u = s(t, e, f, n(f.length), u, l - 1) - 1;
            else {
              if (u >= 9007199254740991)
                throw TypeError("Exceed the acceptable array length");
              t[u] = f;
            }
            u++;
          }
          m++;
        }
        return u;
      };
    t.exports = s;
  },
  function (t, e, r) {
    var i = r(40),
      n = r(2),
      a = r(39),
      s = r(1),
      o = function (t) {
        return function (e, r, o, h) {
          i(r);
          var l = n(e),
            p = a(l),
            c = s(l.length),
            f = t ? c - 1 : 0,
            u = t ? -1 : 1;
          if (o < 2)
            for (;;) {
              if (f in p) {
                ((h = p[f]), (f += u));
                break;
              }
              if (((f += u), t ? f < 0 : c <= f))
                throw TypeError("Reduce of empty array with no initial value");
            }
          for (; t ? f >= 0 : c > f; f += u) f in p && (h = r(h, p[f], f, l));
          return h;
        };
      };
    t.exports = { left: o(!1), right: o(!0) };
  },
  function (t, e, r) {
    (r(93), r(251), r(252), r(253), r(254), (t.exports = r(255)));
  },
  function (t, e, r) {
    "use strict";
    var i = r(17),
      n = r(96),
      a = r(250);
    i.define(
      "lottie",
      (t.exports = function () {
        return {
          lottie: a,
          createInstance: n.createInstance,
          cleanupElement: n.cleanupElement,
          init: n.init,
          destroy: n.destroy,
          ready: n.ready,
        };
      }),
    );
  },
  function (t, e, r) {
    "use strict";
    var i = window.$,
      n = r(58) && i.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = (function () {
      var t = { VERSION: "1.6.0-Webflow" },
        e = {},
        r = Array.prototype,
        i = Object.prototype,
        a = Function.prototype,
        s = (r.push, r.slice),
        o = (r.concat, i.toString, i.hasOwnProperty),
        h = r.forEach,
        l = r.map,
        p = (r.reduce, r.reduceRight, r.filter),
        c = (r.every, r.some),
        f = r.indexOf,
        u = (r.lastIndexOf, Array.isArray, Object.keys),
        m =
          (a.bind,
          (t.each = t.forEach =
            function (r, i, n) {
              if (null == r) return r;
              if (h && r.forEach === h) r.forEach(i, n);
              else if (r.length === +r.length) {
                for (var a = 0, s = r.length; a < s; a++)
                  if (i.call(n, r[a], a, r) === e) return;
              } else {
                var o = t.keys(r);
                for (a = 0, s = o.length; a < s; a++)
                  if (i.call(n, r[o[a]], o[a], r) === e) return;
              }
              return r;
            }));
      ((t.map = t.collect =
        function (t, e, r) {
          var i = [];
          return null == t
            ? i
            : l && t.map === l
              ? t.map(e, r)
              : (m(t, function (t, n, a) {
                  i.push(e.call(r, t, n, a));
                }),
                i);
        }),
        (t.find = t.detect =
          function (t, e, r) {
            var i;
            return (
              d(t, function (t, n, a) {
                if (e.call(r, t, n, a)) return ((i = t), !0);
              }),
              i
            );
          }),
        (t.filter = t.select =
          function (t, e, r) {
            var i = [];
            return null == t
              ? i
              : p && t.filter === p
                ? t.filter(e, r)
                : (m(t, function (t, n, a) {
                    e.call(r, t, n, a) && i.push(t);
                  }),
                  i);
          }));
      var d =
        (t.some =
        t.any =
          function (r, i, n) {
            i || (i = t.identity);
            var a = !1;
            return null == r
              ? a
              : c && r.some === c
                ? r.some(i, n)
                : (m(r, function (t, r, s) {
                    if (a || (a = i.call(n, t, r, s))) return e;
                  }),
                  !!a);
          });
      ((t.contains = t.include =
        function (t, e) {
          return (
            null != t &&
            (f && t.indexOf === f
              ? -1 != t.indexOf(e)
              : d(t, function (t) {
                  return t === e;
                }))
          );
        }),
        (t.delay = function (t, e) {
          var r = s.call(arguments, 2);
          return setTimeout(function () {
            return t.apply(null, r);
          }, e);
        }),
        (t.defer = function (e) {
          return t.delay.apply(t, [e, 1].concat(s.call(arguments, 1)));
        }),
        (t.throttle = function (t) {
          var e, r, i;
          return function () {
            e ||
              ((e = !0),
              (r = arguments),
              (i = this),
              n.frame(function () {
                ((e = !1), t.apply(i, r));
              }));
          };
        }),
        (t.debounce = function (e, r, i) {
          var n,
            a,
            s,
            o,
            h,
            l = function l() {
              var p = t.now() - o;
              p < r
                ? (n = setTimeout(l, r - p))
                : ((n = null), i || ((h = e.apply(s, a)), (s = a = null)));
            };
          return function () {
            ((s = this), (a = arguments), (o = t.now()));
            var p = i && !n;
            return (
              n || (n = setTimeout(l, r)),
              p && ((h = e.apply(s, a)), (s = a = null)),
              h
            );
          };
        }),
        (t.defaults = function (e) {
          if (!t.isObject(e)) return e;
          for (var r = 1, i = arguments.length; r < i; r++) {
            var n = arguments[r];
            for (var a in n) void 0 === e[a] && (e[a] = n[a]);
          }
          return e;
        }),
        (t.keys = function (e) {
          if (!t.isObject(e)) return [];
          if (u) return u(e);
          var r = [];
          for (var i in e) t.has(e, i) && r.push(i);
          return r;
        }),
        (t.has = function (t, e) {
          return o.call(t, e);
        }),
        (t.isObject = function (t) {
          return t === Object(t);
        }),
        (t.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (t.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }));
      var y = /(.)^/,
        g = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        v = /\\|'|\r|\n|\u2028|\u2029/g,
        b = function (t) {
          return "\\" + g[t];
        };
      return (
        (t.template = function (e, r, i) {
          (!r && i && (r = i), (r = t.defaults({}, r, t.templateSettings)));
          var n = RegExp(
              [
                (r.escape || y).source,
                (r.interpolate || y).source,
                (r.evaluate || y).source,
              ].join("|") + "|$",
              "g",
            ),
            a = 0,
            s = "__p+='";
          (e.replace(n, function (t, r, i, n, o) {
            return (
              (s += e.slice(a, o).replace(v, b)),
              (a = o + t.length),
              r
                ? (s += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'")
                : i
                  ? (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                  : n && (s += "';\n" + n + "\n__p+='"),
              t
            );
          }),
            (s += "';\n"),
            r.variable || (s = "with(obj||{}){\n" + s + "}\n"),
            (s =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              s +
              "return __p;\n"));
          try {
            var o = new Function(r.variable || "obj", "_", s);
          } catch (t) {
            throw ((t.source = s), t);
          }
          var h = function (e) {
              return o.call(this, e, t);
            },
            l = r.variable || "obj";
          return ((h.source = "function(" + l + "){\n" + s + "}"), h);
        }),
        t
      );
    })();
  },
  function (t, e) {
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function i(e) {
      return (
        "function" == typeof Symbol && "symbol" === r(Symbol.iterator)
          ? (t.exports = i =
              function (t) {
                return r(t);
              })
          : (t.exports = i =
              function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : r(t);
              }),
        i(e)
      );
    }
    t.exports = i;
  },
  function (t, e, r) {
    "use strict";
    var i = r(41),
      n = i(r(97)),
      a = i(r(98)),
      s = r(41);
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ready =
        e.destroy =
        e.init =
        e.cleanupElement =
        e.createInstance =
          void 0));
    var o = s(r(99)),
      h = s(r(100)),
      l = s(r(101));
    r(189);
    var p = { Playing: "playing", Stopped: "stopped" },
      c = new ((function () {
        function t() {
          ((0, n.default)(this, t), (0, h.default)(this, "_cache", []));
        }
        return (
          (0, a.default)(t, [
            {
              key: "set",
              value: function (t, e) {
                var r = (0, l.default)(this._cache, function (e) {
                  return e.wrapper === t;
                });
                (-1 !== r && this._cache.splice(r, 1),
                  this._cache.push({ wrapper: t, instance: e }));
              },
            },
            {
              key: "delete",
              value: function (t) {
                var e = (0, l.default)(this._cache, function (e) {
                  return e.wrapper === t;
                });
                -1 !== e && this._cache.splice(e, 1);
              },
            },
            {
              key: "get",
              value: function (t) {
                var e = (0, l.default)(this._cache, function (e) {
                  return e.wrapper === t;
                });
                return -1 !== e ? this._cache[e].instance : null;
              },
            },
          ]),
          t
        );
      })())(),
      f = {},
      u = (function () {
        function t() {
          ((0, n.default)(this, t),
            (0, h.default)(this, "config", null),
            (0, h.default)(this, "currentState", p.Stopped),
            (0, h.default)(this, "handlers", {
              enterFrame: [],
              complete: [],
              loop: [],
              dataReady: [],
              destroy: [],
              error: [],
            }));
        }
        return (
          (0, a.default)(t, [
            {
              key: "load",
              value: function (t) {
                var e = this,
                  r = t.dataset || f,
                  i = r.src || "",
                  n = r.preserveAspectRatio || "xMidYMid meet",
                  a = r.renderer || "svg",
                  s = 1 === parseFloat(r.loop),
                  h = parseFloat(r.direction) || 1,
                  l = 1 === parseFloat(r.autoplay),
                  u = parseFloat(r.duration) || 0,
                  m = 1 === parseFloat(r.isIx2Target),
                  d = parseFloat(r.ix2InitialState);
                isNaN(d) && (d = null);
                var y = {
                  src: i,
                  loop: s,
                  autoplay: l,
                  renderer: a,
                  direction: h,
                  duration: u,
                  hasIx2: m,
                  ix2InitialValue: d,
                  preserveAspectRatio: n,
                };
                if (
                  this.animationItem &&
                  this.config &&
                  this.config.src === i &&
                  a === this.config.renderer &&
                  n === this.config.preserveAspectRatio
                ) {
                  if (
                    (s !== this.config.loop && this.setLooping(s),
                    m ||
                      (h !== this.config.direction && this.setDirection(h),
                      u !== this.config.duration &&
                        (u > 0 && u !== this.duration
                          ? this.setSpeed(this.duration / u)
                          : this.setSpeed(1))),
                    l && this.play(),
                    d && d !== this.config.ix2InitialValue)
                  ) {
                    var g = d / 100;
                    this.goToFrame(this.frames * g);
                  }
                  this.config = y;
                } else {
                  var v = {
                    container: t,
                    loop: s,
                    autoplay: l,
                    renderer: a,
                    rendererSettings: {
                      preserveAspectRatio: n,
                      progressiveLoad: !0,
                      hideOnTransparent: !0,
                    },
                  };
                  try {
                    (this.animationItem && this.destroy(),
                      (this.animationItem = window.Webflow.require(
                        "lottie",
                      ).lottie.loadAnimation(
                        (0, o.default)({}, v, { path: i }),
                      )));
                  } catch (t) {
                    return void this.handlers.error.forEach(function (e) {
                      return e(t);
                    });
                  }
                  this.animationItem &&
                    (Boolean(
                      window.Webflow.env("design") ||
                        window.Webflow.env("preview"),
                    ) &&
                      (this.animationItem.addEventListener(
                        "enterFrame",
                        function () {
                          if (e.isPlaying) {
                            var t = e.animationItem,
                              r = t.currentFrame,
                              i = t.totalFrames,
                              n = t.playDirection,
                              a = (r / i) * 100,
                              s = Math.round(1 === n ? a : 100 - a);
                            e.handlers.enterFrame.forEach(function (t) {
                              return t(s, r);
                            });
                          }
                        },
                      ),
                      this.animationItem.addEventListener(
                        "complete",
                        function () {
                          e.currentState === p.Playing && e.animationItem.loop
                            ? (e.currentState = p.Stopped)
                            : e.handlers.complete.forEach(function (t) {
                                return t();
                              });
                        },
                      ),
                      this.animationItem.addEventListener(
                        "loopComplete",
                        function (t) {
                          e.handlers.loop.forEach(function (e) {
                            return e(t);
                          });
                        },
                      ),
                      this.animationItem.addEventListener(
                        "data_failed",
                        function (t) {
                          e.handlers.error.forEach(function (e) {
                            return e(t);
                          });
                        },
                      ),
                      this.animationItem.addEventListener(
                        "error",
                        function (t) {
                          e.handlers.error.forEach(function (e) {
                            return e(t);
                          });
                        },
                      )),
                    this.isLoaded
                      ? (this.handlers.dataReady.forEach(function (t) {
                          return t();
                        }),
                        l && this.play())
                      : this.animationItem.addEventListener(
                          "data_ready",
                          function () {
                            if (
                              (e.handlers.dataReady.forEach(function (t) {
                                return t();
                              }),
                              m ||
                                (e.setDirection(h),
                                u > 0 &&
                                  u !== e.duration &&
                                  e.setSpeed(e.duration / u),
                                l && e.play()),
                              d)
                            ) {
                              var t = d / 100;
                              e.goToFrame(e.frames * t);
                            }
                          },
                        ),
                    c.set(t, this),
                    (this.container = t),
                    (this.config = y));
                }
              },
            },
            {
              key: "onFrameChange",
              value: function (t) {
                -1 === this.handlers.enterFrame.indexOf(t) &&
                  this.handlers.enterFrame.push(t);
              },
            },
            {
              key: "onPlaybackComplete",
              value: function (t) {
                -1 === this.handlers.complete.indexOf(t) &&
                  this.handlers.complete.push(t);
              },
            },
            {
              key: "onLoopComplete",
              value: function (t) {
                -1 === this.handlers.loop.indexOf(t) &&
                  this.handlers.loop.push(t);
              },
            },
            {
              key: "onDestroy",
              value: function (t) {
                -1 === this.handlers.destroy.indexOf(t) &&
                  this.handlers.destroy.push(t);
              },
            },
            {
              key: "onDataReady",
              value: function (t) {
                -1 === this.handlers.dataReady.indexOf(t) &&
                  this.handlers.dataReady.push(t);
              },
            },
            {
              key: "onError",
              value: function (t) {
                -1 === this.handlers.error.indexOf(t) &&
                  this.handlers.error.push(t);
              },
            },
            {
              key: "play",
              value: function () {
                if (this.animationItem) {
                  var t =
                    1 === this.animationItem.playDirection ? 0 : this.frames;
                  (this.animationItem.goToAndPlay(t, !0),
                    (this.currentState = p.Playing));
                }
              },
            },
            {
              key: "stop",
              value: function () {
                if (this.animationItem) {
                  if (this.isPlaying) {
                    var t =
                      1 === this.animationItem.playDirection ? 0 : this.frames;
                    this.animationItem.goToAndStop(t, !0);
                  }
                  this.currentState = p.Stopped;
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                var t = this;
                this.animationItem &&
                  (this.isPlaying && this.stop(),
                  this.handlers.destroy.forEach(function (t) {
                    return t();
                  }),
                  this.container && c.delete(this.container),
                  this.animationItem.destroy(),
                  Object.keys(this.handlers).forEach(function (e) {
                    return (t.handlers[e].length = 0);
                  }),
                  (this.animationItem = null),
                  (this.container = null),
                  (this.config = null));
              },
            },
            {
              key: "goToFrame",
              value: function (t) {
                this.animationItem &&
                  this.animationItem.setCurrentRawFrameValue(t);
              },
            },
            {
              key: "setSubframe",
              value: function (t) {
                this.animationItem && this.animationItem.setSubframe(t);
              },
            },
            {
              key: "setSpeed",
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1;
                this.animationItem &&
                  (this.isPlaying && this.stop(),
                  this.animationItem.setSpeed(t));
              },
            },
            {
              key: "setLooping",
              value: function (t) {
                this.animationItem &&
                  (this.isPlaying && this.stop(),
                  (this.animationItem.loop = t));
              },
            },
            {
              key: "setDirection",
              value: function (t) {
                this.animationItem &&
                  (this.isPlaying && this.stop(),
                  this.animationItem.setDirection(t),
                  this.goToFrame(1 === t ? 0 : this.frames));
              },
            },
            {
              key: "isPlaying",
              get: function () {
                return !!this.animationItem && !this.animationItem.isPaused;
              },
            },
            {
              key: "isPaused",
              get: function () {
                return !!this.animationItem && this.animationItem.isPaused;
              },
            },
            {
              key: "duration",
              get: function () {
                return this.animationItem
                  ? this.animationItem.getDuration()
                  : 0;
              },
            },
            {
              key: "frames",
              get: function () {
                return this.animationItem ? this.animationItem.totalFrames : 0;
              },
            },
            {
              key: "direction",
              get: function () {
                return this.animationItem
                  ? this.animationItem.playDirection
                  : 1;
              },
            },
            {
              key: "isLoaded",
              get: function () {
                return (this.animationItem, this.animationItem.isLoaded);
              },
            },
            {
              key: "ix2InitialValue",
              get: function () {
                return this.config ? this.config.ix2InitialValue : null;
              },
            },
          ]),
          t
        );
      })(),
      m = function () {
        return Array.from(
          document.querySelectorAll('[data-animation-type="lottie"]'),
        );
      },
      d = function (t) {
        var e = c.get(t);
        return (null == e && (e = new u()), e.load(t), e);
      };
    e.createInstance = d;
    var y = function (t) {
      var e = c.get(t);
      e && e.destroy();
    };
    e.cleanupElement = y;
    var g = function () {
      m().forEach(function (t) {
        (1 === parseFloat(t.getAttribute("data-is-ix2-target")) || y(t), d(t));
      });
    };
    e.init = g;
    e.destroy = function () {
      m().forEach(y);
    };
    var v = g;
    e.ready = v;
  },
  function (t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    };
  },
  function (t, e) {
    function r(t, e) {
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        ((i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i));
      }
    }
    t.exports = function (t, e, i) {
      return (e && r(t.prototype, e), i && r(t, i), t);
    };
  },
  function (t, e) {
    function r() {
      return (
        (t.exports = r =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var i in r)
                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
            }
            return t;
          }),
        r.apply(this, arguments)
      );
    }
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t, e, r) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    };
  },
  function (t, e, r) {
    var i = r(102),
      n = r(103),
      a = r(184),
      s = Math.max;
    t.exports = function (t, e, r) {
      var o = null == t ? 0 : t.length;
      if (!o) return -1;
      var h = null == r ? 0 : a(r);
      return (h < 0 && (h = s(o + h, 0)), i(t, n(e, 3), h));
    };
  },
  function (t, e) {
    t.exports = function (t, e, r, i) {
      for (var n = t.length, a = r + (i ? 1 : -1); i ? a-- : ++a < n; )
        if (e(t[a], a, t)) return a;
      return -1;
    };
  },
  function (t, e, r) {
    var i = r(104),
      n = r(169),
      a = r(180),
      s = r(9),
      o = r(181);
    t.exports = function (t) {
      return "function" == typeof t
        ? t
        : null == t
          ? a
          : "object" == typeof t
            ? s(t)
              ? n(t[0], t[1])
              : i(t)
            : o(t);
    };
  },
  function (t, e, r) {
    var i = r(105),
      n = r(168),
      a = r(74);
    t.exports = function (t) {
      var e = n(t);
      return 1 == e.length && e[0][2]
        ? a(e[0][0], e[0][1])
        : function (r) {
            return r === t || i(r, t, e);
          };
    };
  },
  function (t, e, r) {
    var i = r(59),
      n = r(65),
      a = 1,
      s = 2;
    t.exports = function (t, e, r, o) {
      var h = r.length,
        l = h,
        p = !o;
      if (null == t) return !l;
      for (t = Object(t); h--; ) {
        var c = r[h];
        if (p && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
      }
      for (; ++h < l; ) {
        var f = (c = r[h])[0],
          u = t[f],
          m = c[1];
        if (p && c[2]) {
          if (void 0 === u && !(f in t)) return !1;
        } else {
          var d = new i();
          if (o) var y = o(u, m, f, t, e, d);
          if (!(void 0 === y ? n(m, u, a | s, o, d) : y)) return !1;
        }
      }
      return !0;
    };
  },
  function (t, e) {
    t.exports = function () {
      ((this.__data__ = []), (this.size = 0));
    };
  },
  function (t, e, r) {
    var i = r(30),
      n = Array.prototype.splice;
    t.exports = function (t) {
      var e = this.__data__,
        r = i(e, t);
      return !(
        r < 0 || (r == e.length - 1 ? e.pop() : n.call(e, r, 1), --this.size, 0)
      );
    };
  },
  function (t, e, r) {
    var i = r(30);
    t.exports = function (t) {
      var e = this.__data__,
        r = i(e, t);
      return r < 0 ? void 0 : e[r][1];
    };
  },
  function (t, e, r) {
    var i = r(30);
    t.exports = function (t) {
      return i(this.__data__, t) > -1;
    };
  },
  function (t, e, r) {
    var i = r(30);
    t.exports = function (t, e) {
      var r = this.__data__,
        n = i(r, t);
      return (n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this);
    };
  },
  function (t, e, r) {
    var i = r(29);
    t.exports = function () {
      ((this.__data__ = new i()), (this.size = 0));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.__data__,
        r = e.delete(t);
      return ((this.size = e.size), r);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.get(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e, r) {
    var i = r(29),
      n = r(42),
      a = r(43),
      s = 200;
    t.exports = function (t, e) {
      var r = this.__data__;
      if (r instanceof i) {
        var o = r.__data__;
        if (!n || o.length < s - 1)
          return (o.push([t, e]), (this.size = ++r.size), this);
        r = this.__data__ = new a(o);
      }
      return (r.set(t, e), (this.size = r.size), this);
    };
  },
  function (t, e, r) {
    var i = r(61),
      n = r(119),
      a = r(32),
      s = r(64),
      o = /^\[object .+?Constructor\]$/,
      h = Function.prototype,
      l = Object.prototype,
      p = h.toString,
      c = l.hasOwnProperty,
      f = RegExp(
        "^" +
          p
            .call(c)
            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?",
            ) +
          "$",
      );
    t.exports = function (t) {
      return !(!a(t) || n(t)) && (i(t) ? f : o).test(s(t));
    };
  },
  function (t, e, r) {
    var i = r(31),
      n = Object.prototype,
      a = n.hasOwnProperty,
      s = n.toString,
      o = i ? i.toStringTag : void 0;
    t.exports = function (t) {
      var e = a.call(t, o),
        r = t[o];
      try {
        t[o] = void 0;
        var i = !0;
      } catch (t) {}
      var n = s.call(t);
      return (i && (e ? (t[o] = r) : delete t[o]), n);
    };
  },
  function (t, e) {
    var r = Object.prototype.toString;
    t.exports = function (t) {
      return r.call(t);
    };
  },
  function (t, e, r) {
    var i,
      n = r(120),
      a = (i = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || ""))
        ? "Symbol(src)_1." + i
        : "";
    t.exports = function (t) {
      return !!a && a in t;
    };
  },
  function (t, e, r) {
    var i = r(7)["__core-js_shared__"];
    t.exports = i;
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t ? void 0 : t[e];
    };
  },
  function (t, e, r) {
    var i = r(123),
      n = r(29),
      a = r(42);
    t.exports = function () {
      ((this.size = 0),
        (this.__data__ = {
          hash: new i(),
          map: new (a || n)(),
          string: new i(),
        }));
    };
  },
  function (t, e, r) {
    var i = r(124),
      n = r(125),
      a = r(126),
      s = r(127),
      o = r(128);
    function h(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var i = t[e];
        this.set(i[0], i[1]);
      }
    }
    ((h.prototype.clear = i),
      (h.prototype.delete = n),
      (h.prototype.get = a),
      (h.prototype.has = s),
      (h.prototype.set = o),
      (t.exports = h));
  },
  function (t, e, r) {
    var i = r(33);
    t.exports = function () {
      ((this.__data__ = i ? i(null) : {}), (this.size = 0));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return ((this.size -= e ? 1 : 0), e);
    };
  },
  function (t, e, r) {
    var i = r(33),
      n = "__lodash_hash_undefined__",
      a = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      if (i) {
        var r = e[t];
        return r === n ? void 0 : r;
      }
      return a.call(e, t) ? e[t] : void 0;
    };
  },
  function (t, e, r) {
    var i = r(33),
      n = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      return i ? void 0 !== e[t] : n.call(e, t);
    };
  },
  function (t, e, r) {
    var i = r(33),
      n = "__lodash_hash_undefined__";
    t.exports = function (t, e) {
      var r = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (r[t] = i && void 0 === e ? n : e),
        this
      );
    };
  },
  function (t, e, r) {
    var i = r(34);
    t.exports = function (t) {
      var e = i(this, t).delete(t);
      return ((this.size -= e ? 1 : 0), e);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e
        ? "__proto__" !== t
        : null === t;
    };
  },
  function (t, e, r) {
    var i = r(34);
    t.exports = function (t) {
      return i(this, t).get(t);
    };
  },
  function (t, e, r) {
    var i = r(34);
    t.exports = function (t) {
      return i(this, t).has(t);
    };
  },
  function (t, e, r) {
    var i = r(34);
    t.exports = function (t, e) {
      var r = i(this, t),
        n = r.size;
      return (r.set(t, e), (this.size += r.size == n ? 0 : 1), this);
    };
  },
  function (t, e, r) {
    var i = r(59),
      n = r(66),
      a = r(140),
      s = r(144),
      o = r(163),
      h = r(9),
      l = r(69),
      p = r(72),
      c = 1,
      f = "[object Arguments]",
      u = "[object Array]",
      m = "[object Object]",
      d = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, r, y, g, v) {
      var b = h(t),
        x = h(e),
        E = b ? u : o(t),
        P = x ? u : o(e),
        S = (E = E == f ? m : E) == m,
        _ = (P = P == f ? m : P) == m,
        w = E == P;
      if (w && l(t)) {
        if (!l(e)) return !1;
        ((b = !0), (S = !1));
      }
      if (w && !S)
        return (
          v || (v = new i()),
          b || p(t) ? n(t, e, r, y, g, v) : a(t, e, E, r, y, g, v)
        );
      if (!(r & c)) {
        var A = S && d.call(t, "__wrapped__"),
          C = _ && d.call(e, "__wrapped__");
        if (A || C) {
          var k = A ? t.value() : t,
            T = C ? e.value() : e;
          return (v || (v = new i()), g(k, T, r, y, v));
        }
      }
      return !!w && (v || (v = new i()), s(t, e, r, y, g, v));
    };
  },
  function (t, e, r) {
    var i = r(43),
      n = r(136),
      a = r(137);
    function s(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.__data__ = new i(); ++e < r; ) this.add(t[e]);
    }
    ((s.prototype.add = s.prototype.push = n),
      (s.prototype.has = a),
      (t.exports = s));
  },
  function (t, e) {
    var r = "__lodash_hash_undefined__";
    t.exports = function (t) {
      return (this.__data__.set(t, r), this);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
        if (e(t[r], r, t)) return !0;
      return !1;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t.has(e);
    };
  },
  function (t, e, r) {
    var i = r(31),
      n = r(141),
      a = r(60),
      s = r(66),
      o = r(142),
      h = r(143),
      l = 1,
      p = 2,
      c = "[object Boolean]",
      f = "[object Date]",
      u = "[object Error]",
      m = "[object Map]",
      d = "[object Number]",
      y = "[object RegExp]",
      g = "[object Set]",
      v = "[object String]",
      b = "[object Symbol]",
      x = "[object ArrayBuffer]",
      E = "[object DataView]",
      P = i ? i.prototype : void 0,
      S = P ? P.valueOf : void 0;
    t.exports = function (t, e, r, i, P, _, w) {
      switch (r) {
        case E:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            return !1;
          ((t = t.buffer), (e = e.buffer));
        case x:
          return !(t.byteLength != e.byteLength || !_(new n(t), new n(e)));
        case c:
        case f:
        case d:
          return a(+t, +e);
        case u:
          return t.name == e.name && t.message == e.message;
        case y:
        case v:
          return t == e + "";
        case m:
          var A = o;
        case g:
          var C = i & l;
          if ((A || (A = h), t.size != e.size && !C)) return !1;
          var k = w.get(t);
          if (k) return k == e;
          ((i |= p), w.set(t, e));
          var T = s(A(t), A(e), i, P, _, w);
          return (w.delete(t), T);
        case b:
          if (S) return S.call(t) == S.call(e);
      }
      return !1;
    };
  },
  function (t, e, r) {
    var i = r(7).Uint8Array;
    t.exports = i;
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (t, i) {
          r[++e] = [i, t];
        }),
        r
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        r = Array(t.size);
      return (
        t.forEach(function (t) {
          r[++e] = t;
        }),
        r
      );
    };
  },
  function (t, e, r) {
    var i = r(145),
      n = 1,
      a = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, r, s, o, h) {
      var l = r & n,
        p = i(t),
        c = p.length;
      if (c != i(e).length && !l) return !1;
      for (var f = c; f--; ) {
        var u = p[f];
        if (!(l ? u in e : a.call(e, u))) return !1;
      }
      var m = h.get(t),
        d = h.get(e);
      if (m && d) return m == e && d == t;
      var y = !0;
      (h.set(t, e), h.set(e, t));
      for (var g = l; ++f < c; ) {
        var v = t[(u = p[f])],
          b = e[u];
        if (s) var x = l ? s(b, v, u, e, t, h) : s(v, b, u, t, e, h);
        if (!(void 0 === x ? v === b || o(v, b, r, s, h) : x)) {
          y = !1;
          break;
        }
        g || (g = "constructor" == u);
      }
      if (y && !g) {
        var E = t.constructor,
          P = e.constructor;
        E != P &&
          "constructor" in t &&
          "constructor" in e &&
          !(
            "function" == typeof E &&
            E instanceof E &&
            "function" == typeof P &&
            P instanceof P
          ) &&
          (y = !1);
      }
      return (h.delete(t), h.delete(e), y);
    };
  },
  function (t, e, r) {
    var i = r(146),
      n = r(148),
      a = r(67);
    t.exports = function (t) {
      return i(t, a, n);
    };
  },
  function (t, e, r) {
    var i = r(147),
      n = r(9);
    t.exports = function (t, e, r) {
      var a = e(t);
      return n(t) ? a : i(a, r(t));
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, i = e.length, n = t.length; ++r < i; ) t[n + r] = e[r];
      return t;
    };
  },
  function (t, e, r) {
    var i = r(149),
      n = r(150),
      a = Object.prototype.propertyIsEnumerable,
      s = Object.getOwnPropertySymbols,
      o = s
        ? function (t) {
            return null == t
              ? []
              : ((t = Object(t)),
                i(s(t), function (e) {
                  return a.call(t, e);
                }));
          }
        : n;
    t.exports = o;
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, i = null == t ? 0 : t.length, n = 0, a = []; ++r < i; ) {
        var s = t[r];
        e(s, r, t) && (a[n++] = s);
      }
      return a;
    };
  },
  function (t, e) {
    t.exports = function () {
      return [];
    };
  },
  function (t, e, r) {
    var i = r(152),
      n = r(68),
      a = r(9),
      s = r(69),
      o = r(71),
      h = r(72),
      l = Object.prototype.hasOwnProperty;
    t.exports = function (t, e) {
      var r = a(t),
        p = !r && n(t),
        c = !r && !p && s(t),
        f = !r && !p && !c && h(t),
        u = r || p || c || f,
        m = u ? i(t.length, String) : [],
        d = m.length;
      for (var y in t)
        (!e && !l.call(t, y)) ||
          (u &&
            ("length" == y ||
              (c && ("offset" == y || "parent" == y)) ||
              (f &&
                ("buffer" == y || "byteLength" == y || "byteOffset" == y)) ||
              o(y, d))) ||
          m.push(y);
      return m;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, i = Array(t); ++r < t; ) i[r] = e(r);
      return i;
    };
  },
  function (t, e, r) {
    var i = r(22),
      n = r(23),
      a = "[object Arguments]";
    t.exports = function (t) {
      return n(t) && i(t) == a;
    };
  },
  function (t, e) {
    t.exports = function () {
      return !1;
    };
  },
  function (t, e, r) {
    var i = r(22),
      n = r(44),
      a = r(23),
      s = {};
    ((s["[object Float32Array]"] =
      s["[object Float64Array]"] =
      s["[object Int8Array]"] =
      s["[object Int16Array]"] =
      s["[object Int32Array]"] =
      s["[object Uint8Array]"] =
      s["[object Uint8ClampedArray]"] =
      s["[object Uint16Array]"] =
      s["[object Uint32Array]"] =
        !0),
      (s["[object Arguments]"] =
        s["[object Array]"] =
        s["[object ArrayBuffer]"] =
        s["[object Boolean]"] =
        s["[object DataView]"] =
        s["[object Date]"] =
        s["[object Error]"] =
        s["[object Function]"] =
        s["[object Map]"] =
        s["[object Number]"] =
        s["[object Object]"] =
        s["[object RegExp]"] =
        s["[object Set]"] =
        s["[object String]"] =
        s["[object WeakMap]"] =
          !1),
      (t.exports = function (t) {
        return a(t) && n(t.length) && !!s[i(t)];
      }));
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return t(e);
      };
    };
  },
  function (t, e, r) {
    (function (t) {
      var i = r(62),
        n = e && !e.nodeType && e,
        a = n && "object" == typeof t && t && !t.nodeType && t,
        s = a && a.exports === n && i.process,
        o = (function () {
          try {
            var t = a && a.require && a.require("util").types;
            return t || (s && s.binding && s.binding("util"));
          } catch (t) {}
        })();
      t.exports = o;
    }).call(this, r(70)(t));
  },
  function (t, e, r) {
    var i = r(159),
      n = r(160),
      a = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (!i(t)) return n(t);
      var e = [];
      for (var r in Object(t)) a.call(t, r) && "constructor" != r && e.push(r);
      return e;
    };
  },
  function (t, e) {
    var r = Object.prototype;
    t.exports = function (t) {
      var e = t && t.constructor;
      return t === (("function" == typeof e && e.prototype) || r);
    };
  },
  function (t, e, r) {
    var i = r(161)(Object.keys, Object);
    t.exports = i;
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (r) {
        return t(e(r));
      };
    };
  },
  function (t, e, r) {
    var i = r(61),
      n = r(44);
    t.exports = function (t) {
      return null != t && n(t.length) && !i(t);
    };
  },
  function (t, e, r) {
    var i = r(164),
      n = r(42),
      a = r(165),
      s = r(166),
      o = r(167),
      h = r(22),
      l = r(64),
      p = l(i),
      c = l(n),
      f = l(a),
      u = l(s),
      m = l(o),
      d = h;
    (((i && "[object DataView]" != d(new i(new ArrayBuffer(1)))) ||
      (n && "[object Map]" != d(new n())) ||
      (a && "[object Promise]" != d(a.resolve())) ||
      (s && "[object Set]" != d(new s())) ||
      (o && "[object WeakMap]" != d(new o()))) &&
      (d = function (t) {
        var e = h(t),
          r = "[object Object]" == e ? t.constructor : void 0,
          i = r ? l(r) : "";
        if (i)
          switch (i) {
            case p:
              return "[object DataView]";
            case c:
              return "[object Map]";
            case f:
              return "[object Promise]";
            case u:
              return "[object Set]";
            case m:
              return "[object WeakMap]";
          }
        return e;
      }),
      (t.exports = d));
  },
  function (t, e, r) {
    var i = r(18)(r(7), "DataView");
    t.exports = i;
  },
  function (t, e, r) {
    var i = r(18)(r(7), "Promise");
    t.exports = i;
  },
  function (t, e, r) {
    var i = r(18)(r(7), "Set");
    t.exports = i;
  },
  function (t, e, r) {
    var i = r(18)(r(7), "WeakMap");
    t.exports = i;
  },
  function (t, e, r) {
    var i = r(73),
      n = r(67);
    t.exports = function (t) {
      for (var e = n(t), r = e.length; r--; ) {
        var a = e[r],
          s = t[a];
        e[r] = [a, s, i(s)];
      }
      return e;
    };
  },
  function (t, e, r) {
    var i = r(65),
      n = r(170),
      a = r(177),
      s = r(45),
      o = r(73),
      h = r(74),
      l = r(36),
      p = 1,
      c = 2;
    t.exports = function (t, e) {
      return s(t) && o(e)
        ? h(l(t), e)
        : function (r) {
            var s = n(r, t);
            return void 0 === s && s === e ? a(r, t) : i(e, s, p | c);
          };
    };
  },
  function (t, e, r) {
    var i = r(75);
    t.exports = function (t, e, r) {
      var n = null == t ? void 0 : i(t, e);
      return void 0 === n ? r : n;
    };
  },
  function (t, e, r) {
    var i = r(172),
      n =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      a = /\\(\\)?/g,
      s = i(function (t) {
        var e = [];
        return (
          46 === t.charCodeAt(0) && e.push(""),
          t.replace(n, function (t, r, i, n) {
            e.push(i ? n.replace(a, "$1") : r || t);
          }),
          e
        );
      });
    t.exports = s;
  },
  function (t, e, r) {
    var i = r(173),
      n = 500;
    t.exports = function (t) {
      var e = i(t, function (t) {
          return (r.size === n && r.clear(), t);
        }),
        r = e.cache;
      return e;
    };
  },
  function (t, e, r) {
    var i = r(43),
      n = "Expected a function";
    function a(t, e) {
      if ("function" != typeof t || (null != e && "function" != typeof e))
        throw new TypeError(n);
      var r = function () {
        var i = arguments,
          n = e ? e.apply(this, i) : i[0],
          a = r.cache;
        if (a.has(n)) return a.get(n);
        var s = t.apply(this, i);
        return ((r.cache = a.set(n, s) || a), s);
      };
      return ((r.cache = new (a.Cache || i)()), r);
    }
    ((a.Cache = i), (t.exports = a));
  },
  function (t, e, r) {
    var i = r(175);
    t.exports = function (t) {
      return null == t ? "" : i(t);
    };
  },
  function (t, e, r) {
    var i = r(31),
      n = r(176),
      a = r(9),
      s = r(35),
      o = 1 / 0,
      h = i ? i.prototype : void 0,
      l = h ? h.toString : void 0;
    t.exports = function t(e) {
      if ("string" == typeof e) return e;
      if (a(e)) return n(e, t) + "";
      if (s(e)) return l ? l.call(e) : "";
      var r = e + "";
      return "0" == r && 1 / e == -o ? "-0" : r;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, i = null == t ? 0 : t.length, n = Array(i); ++r < i; )
        n[r] = e(t[r], r, t);
      return n;
    };
  },
  function (t, e, r) {
    var i = r(178),
      n = r(179);
    t.exports = function (t, e) {
      return null != t && n(t, e, i);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null != t && e in Object(t);
    };
  },
  function (t, e, r) {
    var i = r(76),
      n = r(68),
      a = r(9),
      s = r(71),
      o = r(44),
      h = r(36);
    t.exports = function (t, e, r) {
      for (var l = -1, p = (e = i(e, t)).length, c = !1; ++l < p; ) {
        var f = h(e[l]);
        if (!(c = null != t && r(t, f))) break;
        t = t[f];
      }
      return c || ++l != p
        ? c
        : !!(p = null == t ? 0 : t.length) && o(p) && s(f, p) && (a(t) || n(t));
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return t;
    };
  },
  function (t, e, r) {
    var i = r(182),
      n = r(183),
      a = r(45),
      s = r(36);
    t.exports = function (t) {
      return a(t) ? i(s(t)) : n(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    };
  },
  function (t, e, r) {
    var i = r(75);
    t.exports = function (t) {
      return function (e) {
        return i(e, t);
      };
    };
  },
  function (t, e, r) {
    var i = r(185);
    t.exports = function (t) {
      var e = i(t),
        r = e % 1;
      return e == e ? (r ? e - r : e) : 0;
    };
  },
  function (t, e, r) {
    var i = r(186),
      n = 1 / 0,
      a = 1.7976931348623157e308;
    t.exports = function (t) {
      return t
        ? (t = i(t)) === n || t === -n
          ? (t < 0 ? -1 : 1) * a
          : t == t
            ? t
            : 0
        : 0 === t
          ? t
          : 0;
    };
  },
  function (t, e, r) {
    var i = r(187),
      n = r(32),
      a = r(35),
      s = NaN,
      o = /^[-+]0x[0-9a-f]+$/i,
      h = /^0b[01]+$/i,
      l = /^0o[0-7]+$/i,
      p = parseInt;
    t.exports = function (t) {
      if ("number" == typeof t) return t;
      if (a(t)) return s;
      if (n(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = n(e) ? e + "" : e;
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = i(t);
      var r = h.test(t);
      return r || l.test(t) ? p(t.slice(2), r ? 2 : 8) : o.test(t) ? s : +t;
    };
  },
  function (t, e, r) {
    var i = r(188),
      n = /^\s+/;
    t.exports = function (t) {
      return t ? t.slice(0, i(t) + 1).replace(n, "") : t;
    };
  },
  function (t, e) {
    var r = /\s/;
    t.exports = function (t) {
      for (var e = t.length; e-- && r.test(t.charAt(e)); );
      return e;
    };
  },
  function (t, e, r) {
    ((t.exports = r(190)), r(248), r(249));
  },
  function (t, e, r) {
    (r(191),
      r(208),
      r(215),
      r(216),
      r(217),
      r(218),
      r(220),
      r(221),
      r(223),
      r(224),
      r(225),
      r(226),
      r(227),
      r(228),
      r(230),
      r(231),
      r(232),
      r(233),
      r(234),
      r(236),
      r(237),
      r(238),
      r(239),
      r(240),
      r(241),
      r(242),
      r(243),
      r(245),
      r(246),
      r(247));
    var i = r(84);
    t.exports = i.Array;
  },
  function (t, e, r) {
    "use strict";
    var i = r(192).charAt,
      n = r(47),
      a = r(81),
      s = n.set,
      o = n.getterFor("String Iterator");
    a(
      String,
      "String",
      function (t) {
        s(this, { type: "String Iterator", string: String(t), index: 0 });
      },
      function () {
        var t,
          e = o(this),
          r = e.string,
          n = e.index;
        return n >= r.length
          ? { value: void 0, done: !0 }
          : ((t = i(r, n)), (e.index += t.length), { value: t, done: !1 });
      },
    );
  },
  function (t, e, r) {
    var i = r(19),
      n = r(46),
      a = function (t) {
        return function (e, r) {
          var a,
            s,
            o = String(n(e)),
            h = i(r),
            l = o.length;
          return h < 0 || h >= l
            ? t
              ? ""
              : void 0
            : (a = o.charCodeAt(h)) < 55296 ||
                a > 56319 ||
                h + 1 === l ||
                (s = o.charCodeAt(h + 1)) < 56320 ||
                s > 57343
              ? t
                ? o.charAt(h)
                : a
              : t
                ? o.slice(h, h + 2)
                : s - 56320 + ((a - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: a(!1), charAt: a(!0) };
  },
  function (t, e, r) {
    var i = r(5),
      n = r(77),
      a = i.WeakMap;
    t.exports = "function" == typeof a && /native code/.test(n.call(a));
  },
  function (t, e, r) {
    "use strict";
    var i = {}.propertyIsEnumerable,
      n = Object.getOwnPropertyDescriptor,
      a = n && !i.call({ 1: 2 }, 1);
    e.f = a
      ? function (t) {
          var e = n(this, t);
          return !!e && e.enumerable;
        }
      : i;
  },
  function (t, e, r) {
    var i = r(13),
      n = r(196),
      a = r(82),
      s = r(11);
    t.exports = function (t, e) {
      for (var r = n(e), o = s.f, h = a.f, l = 0; l < r.length; l++) {
        var p = r[l];
        i(t, p) || o(t, p, h(e, p));
      }
    };
  },
  function (t, e, r) {
    var i = r(54),
      n = r(197),
      a = r(198),
      s = r(20);
    t.exports =
      i("Reflect", "ownKeys") ||
      function (t) {
        var e = n.f(s(t)),
          r = a.f;
        return r ? e.concat(r(t)) : e;
      };
  },
  function (t, e, r) {
    var i = r(85),
      n = r(56).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return i(t, n);
      };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, r) {
    var i = r(4),
      n = /#|\.prototype\./,
      a = function (t, e) {
        var r = o[s(t)];
        return r == l || (r != h && ("function" == typeof e ? i(e) : !!e));
      },
      s = (a.normalize = function (t) {
        return String(t).replace(n, ".").toLowerCase();
      }),
      o = (a.data = {}),
      h = (a.NATIVE = "N"),
      l = (a.POLYFILL = "P");
    t.exports = a;
  },
  function (t, e, r) {
    "use strict";
    var i = r(86).IteratorPrototype,
      n = r(88),
      a = r(38),
      s = r(89),
      o = r(25),
      h = function () {
        return this;
      };
    t.exports = function (t, e, r) {
      var l = e + " Iterator";
      return (
        (t.prototype = n(i, { next: a(1, r) })),
        s(t, l, !1, !0),
        (o[l] = h),
        t
      );
    };
  },
  function (t, e, r) {
    var i = r(4);
    t.exports = !i(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, r) {
    var i = r(4);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        return !String(Symbol());
      });
  },
  function (t, e, r) {
    var i = r(10),
      n = r(11),
      a = r(20),
      s = r(204);
    t.exports = i
      ? Object.defineProperties
      : function (t, e) {
          a(t);
          for (var r, i = s(e), o = i.length, h = 0; o > h; )
            n.f(t, (r = i[h++]), e[r]);
          return t;
        };
  },
  function (t, e, r) {
    var i = r(85),
      n = r(56);
    t.exports =
      Object.keys ||
      function (t) {
        return i(t, n);
      };
  },
  function (t, e, r) {
    var i = r(54);
    t.exports = i("document", "documentElement");
  },
  function (t, e, r) {
    var i = r(20),
      n = r(207);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              ((t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__",
              ).set).call(r, []),
                (e = r instanceof Array));
            } catch (t) {}
            return function (r, a) {
              return (i(r), n(a), e ? t.call(r, a) : (r.__proto__ = a), r);
            };
          })()
        : void 0);
  },
  function (t, e, r) {
    var i = r(12);
    t.exports = function (t) {
      if (!i(t) && null !== t)
        throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  function (t, e, r) {
    var i = r(0),
      n = r(209);
    i(
      {
        target: "Array",
        stat: !0,
        forced: !r(214)(function (t) {
          Array.from(t);
        }),
      },
      { from: n },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(57),
      n = r(2),
      a = r(210),
      s = r(211),
      o = r(1),
      h = r(26),
      l = r(212);
    t.exports = function (t) {
      var e,
        r,
        p,
        c,
        f = n(t),
        u = "function" == typeof this ? this : Array,
        m = arguments.length,
        d = m > 1 ? arguments[1] : void 0,
        y = void 0 !== d,
        g = 0,
        v = l(f);
      if (
        (y && (d = i(d, m > 2 ? arguments[2] : void 0, 2)),
        null == v || (u == Array && s(v)))
      )
        for (r = new u((e = o(f.length))); e > g; g++)
          h(r, g, y ? d(f[g], g) : f[g]);
      else
        for (c = v.call(f), r = new u(); !(p = c.next()).done; g++)
          h(r, g, y ? a(c, d, [p.value, g], !0) : p.value);
      return ((r.length = g), r);
    };
  },
  function (t, e, r) {
    var i = r(20);
    t.exports = function (t, e, r, n) {
      try {
        return n ? e(i(r)[0], r[1]) : e(r);
      } catch (e) {
        var a = t.return;
        throw (void 0 !== a && i(a.call(t)), e);
      }
    };
  },
  function (t, e, r) {
    var i = r(3),
      n = r(25),
      a = i("iterator"),
      s = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (n.Array === t || s[a] === t);
    };
  },
  function (t, e, r) {
    var i = r(213),
      n = r(25),
      a = r(3)("iterator");
    t.exports = function (t) {
      if (null != t) return t[a] || t["@@iterator"] || n[i(t)];
    };
  },
  function (t, e, r) {
    var i = r(53),
      n = r(3)("toStringTag"),
      a =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })(),
        );
    t.exports = function (t) {
      var e, r, s;
      return void 0 === t
        ? "Undefined"
        : null === t
          ? "Null"
          : "string" ==
              typeof (r = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), n))
            ? r
            : a
              ? i(e)
              : "Object" == (s = i(e)) && "function" == typeof e.callee
                ? "Arguments"
                : s;
    };
  },
  function (t, e, r) {
    var i = r(3)("iterator"),
      n = !1;
    try {
      var a = 0,
        s = {
          next: function () {
            return { done: !!a++ };
          },
          return: function () {
            n = !0;
          },
        };
      ((s[i] = function () {
        return this;
      }),
        Array.from(s, function () {
          throw 2;
        }));
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !n) return !1;
      var r = !1;
      try {
        var a = {};
        ((a[i] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          t(a));
      } catch (t) {}
      return r;
    };
  },
  function (t, e, r) {
    r(0)({ target: "Array", stat: !0 }, { isArray: r(21) });
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(4),
      a = r(26);
    i(
      {
        target: "Array",
        stat: !0,
        forced: n(function () {
          function t() {}
          return !(Array.of.call(t) instanceof t);
        }),
      },
      {
        of: function () {
          for (
            var t = 0,
              e = arguments.length,
              r = new ("function" == typeof this ? this : Array)(e);
            e > t;

          )
            a(r, t, arguments[t++]);
          return ((r.length = e), r);
        },
      },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(4),
      a = r(21),
      s = r(12),
      o = r(2),
      h = r(1),
      l = r(26),
      p = r(27),
      c = r(28),
      f = r(3)("isConcatSpreadable"),
      u = !n(function () {
        var t = [];
        return ((t[f] = !1), t.concat()[0] !== t);
      }),
      m = c("concat"),
      d = function (t) {
        if (!s(t)) return !1;
        var e = t[f];
        return void 0 !== e ? !!e : a(t);
      };
    i(
      { target: "Array", proto: !0, forced: !u || !m },
      {
        concat: function (t) {
          var e,
            r,
            i,
            n,
            a,
            s = o(this),
            c = p(s, 0),
            f = 0;
          for (e = -1, i = arguments.length; e < i; e++)
            if (((a = -1 === e ? s : arguments[e]), d(a))) {
              if (f + (n = h(a.length)) > 9007199254740991)
                throw TypeError("Maximum allowed index exceeded");
              for (r = 0; r < n; r++, f++) r in a && l(c, f, a[r]);
            } else {
              if (f >= 9007199254740991)
                throw TypeError("Maximum allowed index exceeded");
              l(c, f++, a);
            }
          return ((c.length = f), c);
        },
      },
    );
  },
  function (t, e, r) {
    var i = r(0),
      n = r(219),
      a = r(6);
    (i({ target: "Array", proto: !0 }, { copyWithin: n }), a("copyWithin"));
  },
  function (t, e, r) {
    "use strict";
    var i = r(2),
      n = r(24),
      a = r(1),
      s = Math.min;
    t.exports =
      [].copyWithin ||
      function (t, e) {
        var r = i(this),
          o = a(r.length),
          h = n(t, o),
          l = n(e, o),
          p = arguments.length > 2 ? arguments[2] : void 0,
          c = s((void 0 === p ? o : n(p, o)) - l, o - h),
          f = 1;
        for (
          l < h && h < l + c && ((f = -1), (l += c - 1), (h += c - 1));
          c-- > 0;

        )
          (l in r ? (r[h] = r[l]) : delete r[h], (h += f), (l += f));
        return r;
      };
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(16).every;
    i(
      { target: "Array", proto: !0, forced: r(8)("every") },
      {
        every: function (t) {
          return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      },
    );
  },
  function (t, e, r) {
    var i = r(0),
      n = r(222),
      a = r(6);
    (i({ target: "Array", proto: !0 }, { fill: n }), a("fill"));
  },
  function (t, e, r) {
    "use strict";
    var i = r(2),
      n = r(24),
      a = r(1);
    t.exports = function (t) {
      for (
        var e = i(this),
          r = a(e.length),
          s = arguments.length,
          o = n(s > 1 ? arguments[1] : void 0, r),
          h = s > 2 ? arguments[2] : void 0,
          l = void 0 === h ? r : n(h, r);
        l > o;

      )
        e[o++] = t;
      return e;
    };
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(16).filter;
    i(
      { target: "Array", proto: !0, forced: !r(28)("filter") },
      {
        filter: function (t) {
          return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(16).find,
      a = r(6),
      s = !0;
    ("find" in [] &&
      Array(1).find(function () {
        s = !1;
      }),
      i(
        { target: "Array", proto: !0, forced: s },
        {
          find: function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      ),
      a("find"));
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(16).findIndex,
      a = r(6),
      s = !0;
    ("findIndex" in [] &&
      Array(1).findIndex(function () {
        s = !1;
      }),
      i(
        { target: "Array", proto: !0, forced: s },
        {
          findIndex: function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        },
      ),
      a("findIndex"));
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(90),
      a = r(2),
      s = r(1),
      o = r(19),
      h = r(27);
    i(
      { target: "Array", proto: !0 },
      {
        flat: function () {
          var t = arguments.length ? arguments[0] : void 0,
            e = a(this),
            r = s(e.length),
            i = h(e, 0);
          return ((i.length = n(i, e, e, r, 0, void 0 === t ? 1 : o(t))), i);
        },
      },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(90),
      a = r(2),
      s = r(1),
      o = r(40),
      h = r(27);
    i(
      { target: "Array", proto: !0 },
      {
        flatMap: function (t) {
          var e,
            r = a(this),
            i = s(r.length);
          return (
            o(t),
            ((e = h(r, 0)).length = n(
              e,
              r,
              r,
              i,
              0,
              1,
              t,
              arguments.length > 1 ? arguments[1] : void 0,
            )),
            e
          );
        },
      },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(229);
    i({ target: "Array", proto: !0, forced: [].forEach != n }, { forEach: n });
  },
  function (t, e, r) {
    "use strict";
    var i = r(16).forEach,
      n = r(8);
    t.exports = n("forEach")
      ? function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      : [].forEach;
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(55).includes,
      a = r(6);
    (i(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      },
    ),
      a("includes"));
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(55).indexOf,
      a = r(8),
      s = [].indexOf,
      o = !!s && 1 / [1].indexOf(1, -0) < 0,
      h = a("indexOf");
    i(
      { target: "Array", proto: !0, forced: o || h },
      {
        indexOf: function (t) {
          return o
            ? s.apply(this, arguments) || 0
            : n(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(15),
      n = r(6),
      a = r(25),
      s = r(47),
      o = r(81),
      h = s.set,
      l = s.getterFor("Array Iterator");
    ((t.exports = o(
      Array,
      "Array",
      function (t, e) {
        h(this, { type: "Array Iterator", target: i(t), index: 0, kind: e });
      },
      function () {
        var t = l(this),
          e = t.target,
          r = t.kind,
          i = t.index++;
        return !e || i >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == r
            ? { value: i, done: !1 }
            : "values" == r
              ? { value: e[i], done: !1 }
              : { value: [i, e[i]], done: !1 };
      },
      "values",
    )),
      (a.Arguments = a.Array),
      n("keys"),
      n("values"),
      n("entries"));
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(39),
      a = r(15),
      s = r(8),
      o = [].join,
      h = n != Object,
      l = s("join", ",");
    i(
      { target: "Array", proto: !0, forced: h || l },
      {
        join: function (t) {
          return o.call(a(this), void 0 === t ? "," : t);
        },
      },
    );
  },
  function (t, e, r) {
    var i = r(0),
      n = r(235);
    i(
      { target: "Array", proto: !0, forced: n !== [].lastIndexOf },
      { lastIndexOf: n },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(15),
      n = r(19),
      a = r(1),
      s = r(8),
      o = Math.min,
      h = [].lastIndexOf,
      l = !!h && 1 / [1].lastIndexOf(1, -0) < 0,
      p = s("lastIndexOf");
    t.exports =
      l || p
        ? function (t) {
            if (l) return h.apply(this, arguments) || 0;
            var e = i(this),
              r = a(e.length),
              s = r - 1;
            for (
              arguments.length > 1 && (s = o(s, n(arguments[1]))),
                s < 0 && (s = r + s);
              s >= 0;
              s--
            )
              if (s in e && e[s] === t) return s || 0;
            return -1;
          }
        : h;
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(16).map;
    i(
      { target: "Array", proto: !0, forced: !r(28)("map") },
      {
        map: function (t) {
          return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(91).left;
    i(
      { target: "Array", proto: !0, forced: r(8)("reduce") },
      {
        reduce: function (t) {
          return n(
            this,
            t,
            arguments.length,
            arguments.length > 1 ? arguments[1] : void 0,
          );
        },
      },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(91).right;
    i(
      { target: "Array", proto: !0, forced: r(8)("reduceRight") },
      {
        reduceRight: function (t) {
          return n(
            this,
            t,
            arguments.length,
            arguments.length > 1 ? arguments[1] : void 0,
          );
        },
      },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(21),
      a = [].reverse,
      s = [1, 2];
    i(
      { target: "Array", proto: !0, forced: String(s) === String(s.reverse()) },
      {
        reverse: function () {
          return (n(this) && (this.length = this.length), a.call(this));
        },
      },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(12),
      a = r(21),
      s = r(24),
      o = r(1),
      h = r(15),
      l = r(26),
      p = r(28),
      c = r(3)("species"),
      f = [].slice,
      u = Math.max;
    i(
      { target: "Array", proto: !0, forced: !p("slice") },
      {
        slice: function (t, e) {
          var r,
            i,
            p,
            m = h(this),
            d = o(m.length),
            y = s(t, d),
            g = s(void 0 === e ? d : e, d);
          if (
            a(m) &&
            ("function" != typeof (r = m.constructor) ||
            (r !== Array && !a(r.prototype))
              ? n(r) && null === (r = r[c]) && (r = void 0)
              : (r = void 0),
            r === Array || void 0 === r)
          )
            return f.call(m, y, g);
          for (
            i = new (void 0 === r ? Array : r)(u(g - y, 0)), p = 0;
            y < g;
            y++, p++
          )
            y in m && l(i, p, m[y]);
          return ((i.length = p), i);
        },
      },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(16).some;
    i(
      { target: "Array", proto: !0, forced: r(8)("some") },
      {
        some: function (t) {
          return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      },
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(40),
      a = r(2),
      s = r(4),
      o = r(8),
      h = [].sort,
      l = [1, 2, 3],
      p = s(function () {
        l.sort(void 0);
      }),
      c = s(function () {
        l.sort(null);
      }),
      f = o("sort");
    i(
      { target: "Array", proto: !0, forced: p || !c || f },
      {
        sort: function (t) {
          return void 0 === t ? h.call(a(this)) : h.call(a(this), n(t));
        },
      },
    );
  },
  function (t, e, r) {
    r(244)("Array");
  },
  function (t, e, r) {
    "use strict";
    var i = r(54),
      n = r(11),
      a = r(3),
      s = r(10),
      o = a("species");
    t.exports = function (t) {
      var e = i(t),
        r = n.f;
      s &&
        e &&
        !e[o] &&
        r(e, o, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e, r) {
    "use strict";
    var i = r(0),
      n = r(24),
      a = r(19),
      s = r(1),
      o = r(2),
      h = r(27),
      l = r(26),
      p = r(28),
      c = Math.max,
      f = Math.min;
    i(
      { target: "Array", proto: !0, forced: !p("splice") },
      {
        splice: function (t, e) {
          var r,
            i,
            p,
            u,
            m,
            d,
            y = o(this),
            g = s(y.length),
            v = n(t, g),
            b = arguments.length;
          if (
            (0 === b
              ? (r = i = 0)
              : 1 === b
                ? ((r = 0), (i = g - v))
                : ((r = b - 2), (i = f(c(a(e), 0), g - v))),
            g + r - i > 9007199254740991)
          )
            throw TypeError("Maximum allowed length exceeded");
          for (p = h(y, i), u = 0; u < i; u++)
            (m = v + u) in y && l(p, u, y[m]);
          if (((p.length = i), r < i)) {
            for (u = v; u < g - i; u++)
              ((d = u + r), (m = u + i) in y ? (y[d] = y[m]) : delete y[d]);
            for (u = g; u > g - i + r; u--) delete y[u - 1];
          } else if (r > i)
            for (u = g - i; u > v; u--)
              ((d = u + r - 1),
                (m = u + i - 1) in y ? (y[d] = y[m]) : delete y[d]);
          for (u = 0; u < r; u++) y[u + v] = arguments[u + 2];
          return ((y.length = g - i + r), p);
        },
      },
    );
  },
  function (t, e, r) {
    r(6)("flat");
  },
  function (t, e, r) {
    r(6)("flatMap");
  },
  function (t, e, r) {
    "use strict";
    var i = r(10),
      n = r(6),
      a = r(2),
      s = r(1),
      o = r(11).f;
    !i ||
      "lastItem" in [] ||
      (o(Array.prototype, "lastItem", {
        configurable: !0,
        get: function () {
          var t = a(this),
            e = s(t.length);
          return 0 == e ? void 0 : t[e - 1];
        },
        set: function (t) {
          var e = a(this),
            r = s(e.length);
          return (e[0 == r ? 0 : r - 1] = t);
        },
      }),
      n("lastItem"));
  },
  function (t, e, r) {
    "use strict";
    var i = r(10),
      n = r(6),
      a = r(2),
      s = r(1),
      o = r(11).f;
    !i ||
      "lastIndex" in [] ||
      (o(Array.prototype, "lastIndex", {
        configurable: !0,
        get: function () {
          var t = a(this),
            e = s(t.length);
          return 0 == e ? 0 : e - 1;
        },
      }),
      n("lastIndex"));
  },
  function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
    "undefined" != typeof navigator &&
      ((root = window || {}),
      (factory = function (window) {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
          locationHref = "",
          initialDefaultFrame = -999999,
          subframeEnabled = !0,
          idPrefix = "",
          expressionsPlugin,
          isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          cachedColors = {},
          bmRnd,
          bmPow = Math.pow,
          bmSqrt = Math.sqrt,
          bmFloor = Math.floor,
          bmMax = Math.max,
          bmMin = Math.min,
          BMMath = {};
        function ProjectInterface() {
          return {};
        }
        (!(function () {
          var t,
            e = [
              "abs",
              "acos",
              "acosh",
              "asin",
              "asinh",
              "atan",
              "atanh",
              "atan2",
              "ceil",
              "cbrt",
              "expm1",
              "clz32",
              "cos",
              "cosh",
              "exp",
              "floor",
              "fround",
              "hypot",
              "imul",
              "log",
              "log1p",
              "log2",
              "log10",
              "max",
              "min",
              "pow",
              "random",
              "round",
              "sign",
              "sin",
              "sinh",
              "sqrt",
              "tan",
              "tanh",
              "trunc",
              "E",
              "LN10",
              "LN2",
              "LOG10E",
              "LOG2E",
              "PI",
              "SQRT1_2",
              "SQRT2",
            ],
            r = e.length;
          for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]];
        })(),
          (BMMath.random = Math.random),
          (BMMath.abs = function (t) {
            if ("object" === typeof t && t.length) {
              var e,
                r = createSizedArray(t.length),
                i = t.length;
              for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
              return r;
            }
            return Math.abs(t);
          }));
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = 0.5519;
        function roundValues(t) {
          bmRnd = t
            ? Math.round
            : function (t) {
                return t;
              };
        }
        function styleDiv(t) {
          ((t.style.position = "absolute"),
            (t.style.top = 0),
            (t.style.left = 0),
            (t.style.display = "block"),
            (t.style.transformOrigin = "0 0"),
            (t.style.webkitTransformOrigin = "0 0"),
            (t.style.backfaceVisibility = "visible"),
            (t.style.webkitBackfaceVisibility = "visible"),
            (t.style.transformStyle = "preserve-3d"),
            (t.style.webkitTransformStyle = "preserve-3d"),
            (t.style.mozTransformStyle = "preserve-3d"));
        }
        function BMEnterFrameEvent(t, e, r, i) {
          ((this.type = t),
            (this.currentTime = e),
            (this.totalTime = r),
            (this.direction = i < 0 ? -1 : 1));
        }
        function BMCompleteEvent(t, e) {
          ((this.type = t), (this.direction = e < 0 ? -1 : 1));
        }
        function BMCompleteLoopEvent(t, e, r, i) {
          ((this.type = t),
            (this.currentLoop = r),
            (this.totalLoops = e),
            (this.direction = i < 0 ? -1 : 1));
        }
        function BMSegmentStartEvent(t, e, r) {
          ((this.type = t), (this.firstFrame = e), (this.totalFrames = r));
        }
        function BMDestroyEvent(t, e) {
          ((this.type = t), (this.target = e));
        }
        function BMRenderFrameErrorEvent(t, e) {
          ((this.type = "renderFrameError"),
            (this.nativeError = t),
            (this.currentTime = e));
        }
        function BMConfigErrorEvent(t) {
          ((this.type = "configError"), (this.nativeError = t));
        }
        function BMAnimationConfigErrorEvent(t, e) {
          ((this.type = t), (this.nativeError = e));
        }
        roundValues(!1);
        var createElementID =
            ((_count = 0),
            function () {
              return idPrefix + "__lottie_element_" + (_count += 1);
            }),
          _count;
        function HSVtoRGB(t, e, r) {
          var i, n, a, s, o, h, l, p;
          switch (
            ((h = r * (1 - e)),
            (l = r * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e)),
            (p = r * (1 - (1 - o) * e)),
            s % 6)
          ) {
            case 0:
              ((i = r), (n = p), (a = h));
              break;
            case 1:
              ((i = l), (n = r), (a = h));
              break;
            case 2:
              ((i = h), (n = r), (a = p));
              break;
            case 3:
              ((i = h), (n = l), (a = r));
              break;
            case 4:
              ((i = p), (n = h), (a = r));
              break;
            case 5:
              ((i = r), (n = h), (a = l));
          }
          return [i, n, a];
        }
        function RGBtoHSV(t, e, r) {
          var i,
            n = Math.max(t, e, r),
            a = Math.min(t, e, r),
            s = n - a,
            o = 0 === n ? 0 : s / n,
            h = n / 255;
          switch (n) {
            case a:
              i = 0;
              break;
            case t:
              ((i = e - r + s * (e < r ? 6 : 0)), (i /= 6 * s));
              break;
            case e:
              ((i = r - t + 2 * s), (i /= 6 * s));
              break;
            case r:
              ((i = t - e + 4 * s), (i /= 6 * s));
          }
          return [i, o, h];
        }
        function addSaturationToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[1] += e),
            r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0),
            HSVtoRGB(r[0], r[1], r[2])
          );
        }
        function addBrightnessToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[2] += e),
            r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0),
            HSVtoRGB(r[0], r[1], r[2])
          );
        }
        function addHueToRGB(t, e) {
          var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return (
            (r[0] += e / 360),
            r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1),
            HSVtoRGB(r[0], r[1], r[2])
          );
        }
        var rgbToHex = (function () {
          var t,
            e,
            r = [];
          for (t = 0; t < 256; t += 1)
            ((e = t.toString(16)), (r[t] = 1 === e.length ? "0" + e : e));
          return function (t, e, i) {
            return (
              t < 0 && (t = 0),
              e < 0 && (e = 0),
              i < 0 && (i = 0),
              "#" + r[t] + r[e] + r[i]
            );
          };
        })();
        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function (t, e) {
            if (this._cbs[t])
              for (var r = this._cbs[t].length, i = 0; i < r; i += 1)
                this._cbs[t][i](e);
          },
          addEventListener: function (t, e) {
            return (
              this._cbs[t] || (this._cbs[t] = []),
              this._cbs[t].push(e),
              function () {
                this.removeEventListener(t, e);
              }.bind(this)
            );
          },
          removeEventListener: function (t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (var r = 0, i = this._cbs[t].length; r < i; )
                  (this._cbs[t][r] === e &&
                    (this._cbs[t].splice(r, 1), (r -= 1), (i -= 1)),
                    (r += 1));
                this._cbs[t].length || (this._cbs[t] = null);
              }
            } else this._cbs[t] = null;
          },
        };
        var createTypedArray = (function () {
          function t(t, e) {
            var r,
              i = 0,
              n = [];
            switch (t) {
              case "int16":
              case "uint8c":
                r = 1;
                break;
              default:
                r = 1.1;
            }
            for (i = 0; i < e; i += 1) n.push(r);
            return n;
          }
          return "function" == typeof Uint8ClampedArray &&
            "function" == typeof Float32Array
            ? function (e, r) {
                return "float32" === e
                  ? new Float32Array(r)
                  : "int16" === e
                    ? new Int16Array(r)
                    : "uint8c" === e
                      ? new Uint8ClampedArray(r)
                      : t(e, r);
              }
            : t;
        })();
        function createSizedArray(t) {
          return Array.apply(null, { length: t });
        }
        function createNS(t) {
          return document.createElementNS(svgNS, t);
        }
        function createTag(t) {
          return document.createElement(t);
        }
        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function (t) {
            -1 === this.dynamicProperties.indexOf(t) &&
              (this.dynamicProperties.push(t),
              this.container.addDynamicProperty(this),
              (this._isAnimated = !0));
          },
          iterateDynamicProperties: function () {
            var t;
            this._mdf = !1;
            var e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1)
              (this.dynamicProperties[t].getValue(),
                this.dynamicProperties[t]._mdf && (this._mdf = !0));
          },
          initDynamicPropertyContainer: function (t) {
            ((this.container = t),
              (this.dynamicProperties = []),
              (this._mdf = !1),
              (this._isAnimated = !1));
          },
        };
        var getBlendMode =
            ((blendModeEnums = {
              0: "source-over",
              1: "multiply",
              2: "screen",
              3: "overlay",
              4: "darken",
              5: "lighten",
              6: "color-dodge",
              7: "color-burn",
              8: "hard-light",
              9: "soft-light",
              10: "difference",
              11: "exclusion",
              12: "hue",
              13: "saturation",
              14: "color",
              15: "luminosity",
            }),
            function (t) {
              return blendModeEnums[t] || "";
            }),
          blendModeEnums,
          Matrix = (function () {
            var t = Math.cos,
              e = Math.sin,
              r = Math.tan,
              i = Math.round;
            function n() {
              return (
                (this.props[0] = 1),
                (this.props[1] = 0),
                (this.props[2] = 0),
                (this.props[3] = 0),
                (this.props[4] = 0),
                (this.props[5] = 1),
                (this.props[6] = 0),
                (this.props[7] = 0),
                (this.props[8] = 0),
                (this.props[9] = 0),
                (this.props[10] = 1),
                (this.props[11] = 0),
                (this.props[12] = 0),
                (this.props[13] = 0),
                (this.props[14] = 0),
                (this.props[15] = 1),
                this
              );
            }
            function a(r) {
              if (0 === r) return this;
              var i = t(r),
                n = e(r);
              return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function s(r) {
              if (0 === r) return this;
              var i = t(r),
                n = e(r);
              return this._t(1, 0, 0, 0, 0, i, -n, 0, 0, n, i, 0, 0, 0, 0, 1);
            }
            function o(r) {
              if (0 === r) return this;
              var i = t(r),
                n = e(r);
              return this._t(i, 0, n, 0, 0, 1, 0, 0, -n, 0, i, 0, 0, 0, 0, 1);
            }
            function h(r) {
              if (0 === r) return this;
              var i = t(r),
                n = e(r);
              return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function l(t, e) {
              return this._t(1, e, t, 1, 0, 0);
            }
            function p(t, e) {
              return this.shear(r(t), r(e));
            }
            function c(i, n) {
              var a = t(n),
                s = e(n);
              return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                ._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                ._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function f(t, e, r) {
              return (
                r || 0 === r || (r = 1),
                1 === t && 1 === e && 1 === r
                  ? this
                  : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
              );
            }
            function u(t, e, r, i, n, a, s, o, h, l, p, c, f, u, m, d) {
              return (
                (this.props[0] = t),
                (this.props[1] = e),
                (this.props[2] = r),
                (this.props[3] = i),
                (this.props[4] = n),
                (this.props[5] = a),
                (this.props[6] = s),
                (this.props[7] = o),
                (this.props[8] = h),
                (this.props[9] = l),
                (this.props[10] = p),
                (this.props[11] = c),
                (this.props[12] = f),
                (this.props[13] = u),
                (this.props[14] = m),
                (this.props[15] = d),
                this
              );
            }
            function m(t, e, r) {
              return (
                (r = r || 0),
                0 !== t || 0 !== e || 0 !== r
                  ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1)
                  : this
              );
            }
            function d(t, e, r, i, n, a, s, o, h, l, p, c, f, u, m, d) {
              var y = this.props;
              if (
                1 === t &&
                0 === e &&
                0 === r &&
                0 === i &&
                0 === n &&
                1 === a &&
                0 === s &&
                0 === o &&
                0 === h &&
                0 === l &&
                1 === p &&
                0 === c
              )
                return (
                  (y[12] = y[12] * t + y[15] * f),
                  (y[13] = y[13] * a + y[15] * u),
                  (y[14] = y[14] * p + y[15] * m),
                  (y[15] *= d),
                  (this._identityCalculated = !1),
                  this
                );
              var g = y[0],
                v = y[1],
                b = y[2],
                x = y[3],
                E = y[4],
                P = y[5],
                S = y[6],
                _ = y[7],
                w = y[8],
                A = y[9],
                C = y[10],
                k = y[11],
                T = y[12],
                D = y[13],
                M = y[14],
                F = y[15];
              return (
                (y[0] = g * t + v * n + b * h + x * f),
                (y[1] = g * e + v * a + b * l + x * u),
                (y[2] = g * r + v * s + b * p + x * m),
                (y[3] = g * i + v * o + b * c + x * d),
                (y[4] = E * t + P * n + S * h + _ * f),
                (y[5] = E * e + P * a + S * l + _ * u),
                (y[6] = E * r + P * s + S * p + _ * m),
                (y[7] = E * i + P * o + S * c + _ * d),
                (y[8] = w * t + A * n + C * h + k * f),
                (y[9] = w * e + A * a + C * l + k * u),
                (y[10] = w * r + A * s + C * p + k * m),
                (y[11] = w * i + A * o + C * c + k * d),
                (y[12] = T * t + D * n + M * h + F * f),
                (y[13] = T * e + D * a + M * l + F * u),
                (y[14] = T * r + D * s + M * p + F * m),
                (y[15] = T * i + D * o + M * c + F * d),
                (this._identityCalculated = !1),
                this
              );
            }
            function y() {
              return (
                this._identityCalculated ||
                  ((this._identity = !(
                    1 !== this.props[0] ||
                    0 !== this.props[1] ||
                    0 !== this.props[2] ||
                    0 !== this.props[3] ||
                    0 !== this.props[4] ||
                    1 !== this.props[5] ||
                    0 !== this.props[6] ||
                    0 !== this.props[7] ||
                    0 !== this.props[8] ||
                    0 !== this.props[9] ||
                    1 !== this.props[10] ||
                    0 !== this.props[11] ||
                    0 !== this.props[12] ||
                    0 !== this.props[13] ||
                    0 !== this.props[14] ||
                    1 !== this.props[15]
                  )),
                  (this._identityCalculated = !0)),
                this._identity
              );
            }
            function g(t) {
              for (var e = 0; e < 16; ) {
                if (t.props[e] !== this.props[e]) return !1;
                e += 1;
              }
              return !0;
            }
            function v(t) {
              var e;
              for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              return t;
            }
            function b(t) {
              var e;
              for (e = 0; e < 16; e += 1) this.props[e] = t[e];
            }
            function x(t, e, r) {
              return {
                x:
                  t * this.props[0] +
                  e * this.props[4] +
                  r * this.props[8] +
                  this.props[12],
                y:
                  t * this.props[1] +
                  e * this.props[5] +
                  r * this.props[9] +
                  this.props[13],
                z:
                  t * this.props[2] +
                  e * this.props[6] +
                  r * this.props[10] +
                  this.props[14],
              };
            }
            function E(t, e, r) {
              return (
                t * this.props[0] +
                e * this.props[4] +
                r * this.props[8] +
                this.props[12]
              );
            }
            function P(t, e, r) {
              return (
                t * this.props[1] +
                e * this.props[5] +
                r * this.props[9] +
                this.props[13]
              );
            }
            function S(t, e, r) {
              return (
                t * this.props[2] +
                e * this.props[6] +
                r * this.props[10] +
                this.props[14]
              );
            }
            function _() {
              var t =
                  this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                r = -this.props[1] / t,
                i = -this.props[4] / t,
                n = this.props[0] / t,
                a =
                  (this.props[4] * this.props[13] -
                    this.props[5] * this.props[12]) /
                  t,
                s =
                  -(
                    this.props[0] * this.props[13] -
                    this.props[1] * this.props[12]
                  ) / t,
                o = new Matrix();
              return (
                (o.props[0] = e),
                (o.props[1] = r),
                (o.props[4] = i),
                (o.props[5] = n),
                (o.props[12] = a),
                (o.props[13] = s),
                o
              );
            }
            function w(t) {
              return this.getInverseMatrix().applyToPointArray(
                t[0],
                t[1],
                t[2] || 0,
              );
            }
            function A(t) {
              var e,
                r = t.length,
                i = [];
              for (e = 0; e < r; e += 1) i[e] = w(t[e]);
              return i;
            }
            function C(t, e, r) {
              var i = createTypedArray("float32", 6);
              if (this.isIdentity())
                ((i[0] = t[0]),
                  (i[1] = t[1]),
                  (i[2] = e[0]),
                  (i[3] = e[1]),
                  (i[4] = r[0]),
                  (i[5] = r[1]));
              else {
                var n = this.props[0],
                  a = this.props[1],
                  s = this.props[4],
                  o = this.props[5],
                  h = this.props[12],
                  l = this.props[13];
                ((i[0] = t[0] * n + t[1] * s + h),
                  (i[1] = t[0] * a + t[1] * o + l),
                  (i[2] = e[0] * n + e[1] * s + h),
                  (i[3] = e[0] * a + e[1] * o + l),
                  (i[4] = r[0] * n + r[1] * s + h),
                  (i[5] = r[0] * a + r[1] * o + l));
              }
              return i;
            }
            function k(t, e, r) {
              return this.isIdentity()
                ? [t, e, r]
                : [
                    t * this.props[0] +
                      e * this.props[4] +
                      r * this.props[8] +
                      this.props[12],
                    t * this.props[1] +
                      e * this.props[5] +
                      r * this.props[9] +
                      this.props[13],
                    t * this.props[2] +
                      e * this.props[6] +
                      r * this.props[10] +
                      this.props[14],
                  ];
            }
            function T(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var r = this.props;
              return (
                Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 +
                "," +
                Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
              );
            }
            function D() {
              for (var t = 0, e = this.props, r = "matrix3d("; t < 16; )
                ((r += i(1e4 * e[t]) / 1e4),
                  (r += 15 === t ? ")" : ","),
                  (t += 1));
              return r;
            }
            function M(t) {
              return (t < 1e-6 && t > 0) || (t > -1e-6 && t < 0)
                ? i(1e4 * t) / 1e4
                : t;
            }
            function F() {
              var t = this.props;
              return (
                "matrix(" +
                M(t[0]) +
                "," +
                M(t[1]) +
                "," +
                M(t[4]) +
                "," +
                M(t[5]) +
                "," +
                M(t[12]) +
                "," +
                M(t[13]) +
                ")"
              );
            }
            return function () {
              ((this.reset = n),
                (this.rotate = a),
                (this.rotateX = s),
                (this.rotateY = o),
                (this.rotateZ = h),
                (this.skew = p),
                (this.skewFromAxis = c),
                (this.shear = l),
                (this.scale = f),
                (this.setTransform = u),
                (this.translate = m),
                (this.transform = d),
                (this.applyToPoint = x),
                (this.applyToX = E),
                (this.applyToY = P),
                (this.applyToZ = S),
                (this.applyToPointArray = k),
                (this.applyToTriplePoints = C),
                (this.applyToPointStringified = T),
                (this.toCSS = D),
                (this.to2dCSS = F),
                (this.clone = v),
                (this.cloneFromProps = b),
                (this.equals = g),
                (this.inversePoints = A),
                (this.inversePoint = w),
                (this.getInverseMatrix = _),
                (this._t = this.transform),
                (this.isIdentity = y),
                (this._identity = !0),
                (this._identityCalculated = !1),
                (this.props = createTypedArray("float32", 16)),
                this.reset());
            };
          })();
        !(function (t, e) {
          var r,
            i = this,
            n = 256,
            a = 6,
            s = "random",
            o = e.pow(n, a),
            h = e.pow(2, 52),
            l = 2 * h,
            p = n - 1;
          function c(t) {
            var e,
              r = t.length,
              i = this,
              a = 0,
              s = (i.i = i.j = 0),
              o = (i.S = []);
            for (r || (t = [r++]); a < n; ) o[a] = a++;
            for (a = 0; a < n; a++)
              ((o[a] = o[(s = p & (s + t[a % r] + (e = o[a])))]), (o[s] = e));
            i.g = function (t) {
              for (var e, r = 0, a = i.i, s = i.j, o = i.S; t--; )
                ((e = o[(a = p & (a + 1))]),
                  (r =
                    r * n +
                    o[p & ((o[a] = o[(s = p & (s + e))]) + (o[s] = e))]));
              return ((i.i = a), (i.j = s), r);
            };
          }
          function f(t, e) {
            return ((e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e);
          }
          function u(t, e) {
            for (var r, i = t + "", n = 0; n < i.length; )
              e[p & n] = p & ((r ^= 19 * e[p & n]) + i.charCodeAt(n++));
            return m(e);
          }
          function m(t) {
            return String.fromCharCode.apply(0, t);
          }
          ((e["seed" + s] = function (p, d, y) {
            var g = [],
              v = u(
                (function t(e, r) {
                  var i,
                    n = [],
                    a = typeof e;
                  if (r && "object" == a)
                    for (i in e)
                      try {
                        n.push(t(e[i], r - 1));
                      } catch (t) {}
                  return n.length ? n : "string" == a ? e : e + "\0";
                })(
                  (d = !0 === d ? { entropy: !0 } : d || {}).entropy
                    ? [p, m(t)]
                    : null === p
                      ? (function () {
                          try {
                            if (r) return m(r.randomBytes(n));
                            var e = new Uint8Array(n);
                            return (
                              (i.crypto || i.msCrypto).getRandomValues(e),
                              m(e)
                            );
                          } catch (e) {
                            var a = i.navigator,
                              s = a && a.plugins;
                            return [+new Date(), i, s, i.screen, m(t)];
                          }
                        })()
                      : p,
                  3,
                ),
                g,
              ),
              b = new c(g),
              x = function () {
                for (var t = b.g(a), e = o, r = 0; t < h; )
                  ((t = (t + r) * n), (e *= n), (r = b.g(1)));
                for (; t >= l; ) ((t /= 2), (e /= 2), (r >>>= 1));
                return (t + r) / e;
              };
            return (
              (x.int32 = function () {
                return 0 | b.g(4);
              }),
              (x.quick = function () {
                return b.g(4) / 4294967296;
              }),
              (x.double = x),
              u(m(b.S), t),
              (
                d.pass ||
                y ||
                function (t, r, i, n) {
                  return (
                    n &&
                      (n.S && f(n, b),
                      (t.state = function () {
                        return f(b, {});
                      })),
                    i ? ((e[s] = t), r) : t
                  );
                }
              )(x, v, "global" in d ? d.global : this == e, d.state)
            );
          }),
            u(e.random(), t));
        })([], BMMath);
        var BezierFactory = (function () {
          var t = {
              getBezierEasing: function (t, r, i, n, a) {
                var s =
                  a ||
                  ("bez_" + t + "_" + r + "_" + i + "_" + n).replace(
                    /\./g,
                    "p",
                  );
                if (e[s]) return e[s];
                var o = new u([t, r, i, n]);
                return ((e[s] = o), o);
              },
            },
            e = {};
          var r = 4,
            i = 1e-7,
            n = 10,
            a = 11,
            s = 1 / (a - 1),
            o = "function" == typeof Float32Array;
          function h(t, e) {
            return 1 - 3 * e + 3 * t;
          }
          function l(t, e) {
            return 3 * e - 6 * t;
          }
          function p(t) {
            return 3 * t;
          }
          function c(t, e, r) {
            return ((h(e, r) * t + l(e, r)) * t + p(e)) * t;
          }
          function f(t, e, r) {
            return 3 * h(e, r) * t * t + 2 * l(e, r) * t + p(e);
          }
          function u(t) {
            ((this._p = t),
              (this._mSampleValues = o ? new Float32Array(a) : new Array(a)),
              (this._precomputed = !1),
              (this.get = this.get.bind(this)));
          }
          return (
            (u.prototype = {
              get: function (t) {
                var e = this._p[0],
                  r = this._p[1],
                  i = this._p[2],
                  n = this._p[3];
                return (
                  this._precomputed || this._precompute(),
                  e === r && i === n
                    ? t
                    : 0 === t
                      ? 0
                      : 1 === t
                        ? 1
                        : c(this._getTForX(t), r, n)
                );
              },
              _precompute: function () {
                var t = this._p[0],
                  e = this._p[1],
                  r = this._p[2],
                  i = this._p[3];
                ((this._precomputed = !0),
                  (t === e && r === i) || this._calcSampleValues());
              },
              _calcSampleValues: function () {
                for (var t = this._p[0], e = this._p[2], r = 0; r < a; ++r)
                  this._mSampleValues[r] = c(r * s, t, e);
              },
              _getTForX: function (t) {
                for (
                  var e = this._p[0],
                    o = this._p[2],
                    h = this._mSampleValues,
                    l = 0,
                    p = 1,
                    u = a - 1;
                  p !== u && h[p] <= t;
                  ++p
                )
                  l += s;
                var m = l + ((t - h[--p]) / (h[p + 1] - h[p])) * s,
                  d = f(m, e, o);
                return d >= 0.001
                  ? (function (t, e, i, n) {
                      for (var a = 0; a < r; ++a) {
                        var s = f(e, i, n);
                        if (0 === s) return e;
                        e -= (c(e, i, n) - t) / s;
                      }
                      return e;
                    })(t, m, e, o)
                  : 0 === d
                    ? m
                    : (function (t, e, r, a, s) {
                        var o,
                          h,
                          l = 0;
                        do {
                          (o = c((h = e + (r - e) / 2), a, s) - t) > 0
                            ? (r = h)
                            : (e = h);
                        } while (Math.abs(o) > i && ++l < n);
                        return h;
                      })(t, l, l + s, e, o);
              },
            }),
            t
          );
        })();
        function extendPrototype(t, e) {
          var r,
            i,
            n = t.length;
          for (r = 0; r < n; r += 1)
            for (var a in (i = t[r].prototype))
              Object.prototype.hasOwnProperty.call(i, a) &&
                (e.prototype[a] = i[a]);
        }
        function getDescriptor(t, e) {
          return Object.getOwnPropertyDescriptor(t, e);
        }
        function createProxyFunction(t) {
          function e() {}
          return ((e.prototype = t), e);
        }
        function bezFunction() {
          var t = Math;
          function e(t, e, r, i, n, a) {
            var s = t * i + e * n + r * a - n * i - a * t - r * e;
            return s > -0.001 && s < 0.001;
          }
          var r = function (t, e, r, i) {
            var n,
              a,
              s,
              o,
              h,
              l,
              p = defaultCurveSegments,
              c = 0,
              f = [],
              u = [],
              m = bezierLengthPool.newElement();
            for (s = r.length, n = 0; n < p; n += 1) {
              for (h = n / (p - 1), l = 0, a = 0; a < s; a += 1)
                ((o =
                  bmPow(1 - h, 3) * t[a] +
                  3 * bmPow(1 - h, 2) * h * r[a] +
                  3 * (1 - h) * bmPow(h, 2) * i[a] +
                  bmPow(h, 3) * e[a]),
                  (f[a] = o),
                  null !== u[a] && (l += bmPow(f[a] - u[a], 2)),
                  (u[a] = f[a]));
              (l && (c += l = bmSqrt(l)),
                (m.percents[n] = h),
                (m.lengths[n] = c));
            }
            return ((m.addedLength = c), m);
          };
          function i(t) {
            ((this.segmentLength = 0), (this.points = new Array(t)));
          }
          function n(t, e) {
            ((this.partialLength = t), (this.point = e));
          }
          var a,
            s =
              ((a = {}),
              function (t, r, s, o) {
                var h = (
                  t[0] +
                  "_" +
                  t[1] +
                  "_" +
                  r[0] +
                  "_" +
                  r[1] +
                  "_" +
                  s[0] +
                  "_" +
                  s[1] +
                  "_" +
                  o[0] +
                  "_" +
                  o[1]
                ).replace(/\./g, "p");
                if (!a[h]) {
                  var l,
                    p,
                    c,
                    f,
                    u,
                    m,
                    d,
                    y = defaultCurveSegments,
                    g = 0,
                    v = null;
                  2 === t.length &&
                    (t[0] !== r[0] || t[1] !== r[1]) &&
                    e(t[0], t[1], r[0], r[1], t[0] + s[0], t[1] + s[1]) &&
                    e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) &&
                    (y = 2);
                  var b = new i(y);
                  for (c = s.length, l = 0; l < y; l += 1) {
                    for (
                      d = createSizedArray(c), u = l / (y - 1), m = 0, p = 0;
                      p < c;
                      p += 1
                    )
                      ((f =
                        bmPow(1 - u, 3) * t[p] +
                        3 * bmPow(1 - u, 2) * u * (t[p] + s[p]) +
                        3 * (1 - u) * bmPow(u, 2) * (r[p] + o[p]) +
                        bmPow(u, 3) * r[p]),
                        (d[p] = f),
                        null !== v && (m += bmPow(d[p] - v[p], 2)));
                    ((g += m = bmSqrt(m)),
                      (b.points[l] = new n(m, d)),
                      (v = d));
                  }
                  ((b.segmentLength = g), (a[h] = b));
                }
                return a[h];
              });
          function o(t, e) {
            var r = e.percents,
              i = e.lengths,
              n = r.length,
              a = bmFloor((n - 1) * t),
              s = t * e.addedLength,
              o = 0;
            if (a === n - 1 || 0 === a || s === i[a]) return r[a];
            for (var h = i[a] > s ? -1 : 1, l = !0; l; )
              if (
                (i[a] <= s && i[a + 1] > s
                  ? ((o = (s - i[a]) / (i[a + 1] - i[a])), (l = !1))
                  : (a += h),
                a < 0 || a >= n - 1)
              ) {
                if (a === n - 1) return r[a];
                l = !1;
              }
            return r[a] + (r[a + 1] - r[a]) * o;
          }
          var h = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function (t) {
              var e,
                i = segmentsLengthPool.newElement(),
                n = t.c,
                a = t.v,
                s = t.o,
                o = t.i,
                h = t._length,
                l = i.lengths,
                p = 0;
              for (e = 0; e < h - 1; e += 1)
                ((l[e] = r(a[e], a[e + 1], s[e], o[e + 1])),
                  (p += l[e].addedLength));
              return (
                n &&
                  h &&
                  ((l[e] = r(a[e], a[0], s[e], o[0])), (p += l[e].addedLength)),
                (i.totalLength = p),
                i
              );
            },
            getNewSegment: function (e, r, i, n, a, s, l) {
              a < 0 ? (a = 0) : a > 1 && (a = 1);
              var p,
                c = o(a, l),
                f = o((s = s > 1 ? 1 : s), l),
                u = e.length,
                m = 1 - c,
                d = 1 - f,
                y = m * m * m,
                g = c * m * m * 3,
                v = c * c * m * 3,
                b = c * c * c,
                x = m * m * d,
                E = c * m * d + m * c * d + m * m * f,
                P = c * c * d + m * c * f + c * m * f,
                S = c * c * f,
                _ = m * d * d,
                w = c * d * d + m * f * d + m * d * f,
                A = c * f * d + m * f * f + c * d * f,
                C = c * f * f,
                k = d * d * d,
                T = f * d * d + d * f * d + d * d * f,
                D = f * f * d + d * f * f + f * d * f,
                M = f * f * f;
              for (p = 0; p < u; p += 1)
                ((h[4 * p] =
                  t.round(1e3 * (y * e[p] + g * i[p] + v * n[p] + b * r[p])) /
                  1e3),
                  (h[4 * p + 1] =
                    t.round(1e3 * (x * e[p] + E * i[p] + P * n[p] + S * r[p])) /
                    1e3),
                  (h[4 * p + 2] =
                    t.round(1e3 * (_ * e[p] + w * i[p] + A * n[p] + C * r[p])) /
                    1e3),
                  (h[4 * p + 3] =
                    t.round(1e3 * (k * e[p] + T * i[p] + D * n[p] + M * r[p])) /
                    1e3));
              return h;
            },
            getPointInSegment: function (e, r, i, n, a, s) {
              var h = o(a, s),
                l = 1 - h;
              return [
                t.round(
                  1e3 *
                    (l * l * l * e[0] +
                      (h * l * l + l * h * l + l * l * h) * i[0] +
                      (h * h * l + l * h * h + h * l * h) * n[0] +
                      h * h * h * r[0]),
                ) / 1e3,
                t.round(
                  1e3 *
                    (l * l * l * e[1] +
                      (h * l * l + l * h * l + l * l * h) * i[1] +
                      (h * h * l + l * h * h + h * l * h) * n[1] +
                      h * h * h * r[1]),
                ) / 1e3,
              ];
            },
            buildBezierData: s,
            pointOnLine2D: e,
            pointOnLine3D: function (r, i, n, a, s, o, h, l, p) {
              if (0 === n && 0 === o && 0 === p) return e(r, i, a, s, h, l);
              var c,
                f = t.sqrt(t.pow(a - r, 2) + t.pow(s - i, 2) + t.pow(o - n, 2)),
                u = t.sqrt(t.pow(h - r, 2) + t.pow(l - i, 2) + t.pow(p - n, 2)),
                m = t.sqrt(t.pow(h - a, 2) + t.pow(l - s, 2) + t.pow(p - o, 2));
              return (
                (c =
                  f > u
                    ? f > m
                      ? f - u - m
                      : m - u - f
                    : m > u
                      ? m - u - f
                      : u - f - m) > -1e-4 && c < 1e-4
              );
            },
          };
        }
        !(function () {
          for (
            var t = 0, e = ["ms", "moz", "webkit", "o"], r = 0;
            r < e.length && !window.requestAnimationFrame;
            ++r
          )
            ((window.requestAnimationFrame =
              window[e[r] + "RequestAnimationFrame"]),
              (window.cancelAnimationFrame =
                window[e[r] + "CancelAnimationFrame"] ||
                window[e[r] + "CancelRequestAnimationFrame"]));
          (window.requestAnimationFrame ||
            (window.requestAnimationFrame = function (e) {
              var r = new Date().getTime(),
                i = Math.max(0, 16 - (r - t)),
                n = setTimeout(function () {
                  e(r + i);
                }, i);
              return ((t = r + i), n);
            }),
            window.cancelAnimationFrame ||
              (window.cancelAnimationFrame = function (t) {
                clearTimeout(t);
              }));
        })();
        var bez = bezFunction();
        function dataFunctionManager() {
          function t(n, a, s) {
            var o,
              h,
              l,
              c,
              f,
              u,
              m = n.length;
            for (h = 0; h < m; h += 1)
              if ("ks" in (o = n[h]) && !o.completed) {
                if (
                  ((o.completed = !0), o.tt && (n[h - 1].td = o.tt), o.hasMask)
                ) {
                  var d = o.masksProperties;
                  for (c = d.length, l = 0; l < c; l += 1)
                    if (d[l].pt.k.i) i(d[l].pt.k);
                    else
                      for (u = d[l].pt.k.length, f = 0; f < u; f += 1)
                        (d[l].pt.k[f].s && i(d[l].pt.k[f].s[0]),
                          d[l].pt.k[f].e && i(d[l].pt.k[f].e[0]));
                }
                0 === o.ty
                  ? ((o.layers = e(o.refId, a)), t(o.layers, a, s))
                  : 4 === o.ty
                    ? r(o.shapes)
                    : 5 === o.ty && p(o);
              }
          }
          function e(t, e) {
            for (var r = 0, i = e.length; r < i; ) {
              if (e[r].id === t)
                return e[r].layers.__used
                  ? JSON.parse(JSON.stringify(e[r].layers))
                  : ((e[r].layers.__used = !0), e[r].layers);
              r += 1;
            }
            return null;
          }
          function r(t) {
            var e, n, a;
            for (e = t.length - 1; e >= 0; e -= 1)
              if ("sh" === t[e].ty)
                if (t[e].ks.k.i) i(t[e].ks.k);
                else
                  for (a = t[e].ks.k.length, n = 0; n < a; n += 1)
                    (t[e].ks.k[n].s && i(t[e].ks.k[n].s[0]),
                      t[e].ks.k[n].e && i(t[e].ks.k[n].e[0]));
              else "gr" === t[e].ty && r(t[e].it);
          }
          function i(t) {
            var e,
              r = t.i.length;
            for (e = 0; e < r; e += 1)
              ((t.i[e][0] += t.v[e][0]),
                (t.i[e][1] += t.v[e][1]),
                (t.o[e][0] += t.v[e][0]),
                (t.o[e][1] += t.v[e][1]));
          }
          function n(t, e) {
            var r = e ? e.split(".") : [100, 100, 100];
            return (
              t[0] > r[0] ||
              (!(r[0] > t[0]) &&
                (t[1] > r[1] ||
                  (!(r[1] > t[1]) &&
                    (t[2] > r[2] || (!(r[2] > t[2]) && null)))))
            );
          }
          var a,
            s = (function () {
              var t = [4, 4, 14];
              function e(t) {
                var e,
                  r,
                  i,
                  n = t.length;
                for (e = 0; e < n; e += 1)
                  5 === t[e].ty &&
                    ((r = t[e]),
                    (i = void 0),
                    (i = r.t.d),
                    (r.t.d = { k: [{ s: i, t: 0 }] }));
              }
              return function (r) {
                if (n(t, r.v) && (e(r.layers), r.assets)) {
                  var i,
                    a = r.assets.length;
                  for (i = 0; i < a; i += 1)
                    r.assets[i].layers && e(r.assets[i].layers);
                }
              };
            })(),
            o =
              ((a = [4, 7, 99]),
              function (t) {
                if (t.chars && !n(a, t.v)) {
                  var e,
                    r,
                    s,
                    o,
                    h,
                    l = t.chars.length;
                  for (e = 0; e < l; e += 1)
                    if (t.chars[e].data && t.chars[e].data.shapes)
                      for (
                        s = (h = t.chars[e].data.shapes[0].it).length, r = 0;
                        r < s;
                        r += 1
                      )
                        (o = h[r].ks.k).__converted ||
                          (i(h[r].ks.k), (o.__converted = !0));
                }
              }),
            h = (function () {
              var t = [4, 1, 9];
              function e(t) {
                var r,
                  i,
                  n,
                  a = t.length;
                for (r = 0; r < a; r += 1)
                  if ("gr" === t[r].ty) e(t[r].it);
                  else if ("fl" === t[r].ty || "st" === t[r].ty)
                    if (t[r].c.k && t[r].c.k[0].i)
                      for (n = t[r].c.k.length, i = 0; i < n; i += 1)
                        (t[r].c.k[i].s &&
                          ((t[r].c.k[i].s[0] /= 255),
                          (t[r].c.k[i].s[1] /= 255),
                          (t[r].c.k[i].s[2] /= 255),
                          (t[r].c.k[i].s[3] /= 255)),
                          t[r].c.k[i].e &&
                            ((t[r].c.k[i].e[0] /= 255),
                            (t[r].c.k[i].e[1] /= 255),
                            (t[r].c.k[i].e[2] /= 255),
                            (t[r].c.k[i].e[3] /= 255)));
                    else
                      ((t[r].c.k[0] /= 255),
                        (t[r].c.k[1] /= 255),
                        (t[r].c.k[2] /= 255),
                        (t[r].c.k[3] /= 255));
              }
              function r(t) {
                var r,
                  i = t.length;
                for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes);
              }
              return function (e) {
                if (n(t, e.v) && (r(e.layers), e.assets)) {
                  var i,
                    a = e.assets.length;
                  for (i = 0; i < a; i += 1)
                    e.assets[i].layers && r(e.assets[i].layers);
                }
              };
            })(),
            l = (function () {
              var t = [4, 4, 18];
              function e(t) {
                var r, i, n;
                for (r = t.length - 1; r >= 0; r -= 1)
                  if ("sh" === t[r].ty)
                    if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                    else
                      for (n = t[r].ks.k.length, i = 0; i < n; i += 1)
                        (t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed),
                          t[r].ks.k[i].e &&
                            (t[r].ks.k[i].e[0].c = t[r].closed));
                  else "gr" === t[r].ty && e(t[r].it);
              }
              function r(t) {
                var r,
                  i,
                  n,
                  a,
                  s,
                  o,
                  h = t.length;
                for (i = 0; i < h; i += 1) {
                  if ((r = t[i]).hasMask) {
                    var l = r.masksProperties;
                    for (a = l.length, n = 0; n < a; n += 1)
                      if (l[n].pt.k.i) l[n].pt.k.c = l[n].cl;
                      else
                        for (o = l[n].pt.k.length, s = 0; s < o; s += 1)
                          (l[n].pt.k[s].s && (l[n].pt.k[s].s[0].c = l[n].cl),
                            l[n].pt.k[s].e && (l[n].pt.k[s].e[0].c = l[n].cl));
                  }
                  4 === r.ty && e(r.shapes);
                }
              }
              return function (e) {
                if (n(t, e.v) && (r(e.layers), e.assets)) {
                  var i,
                    a = e.assets.length;
                  for (i = 0; i < a; i += 1)
                    e.assets[i].layers && r(e.assets[i].layers);
                }
              };
            })();
          function p(t) {
            0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0);
          }
          var c = {
            completeData: function (e, r) {
              e.__complete ||
                (h(e),
                s(e),
                o(e),
                l(e),
                t(e.layers, e.assets, r),
                (e.__complete = !0));
            },
          };
          return (
            (c.checkColors = h),
            (c.checkChars = o),
            (c.checkShapes = l),
            (c.completeLayers = t),
            c
          );
        }
        var dataManager = dataFunctionManager();
        function getFontProperties(t) {
          for (
            var e = t.fStyle ? t.fStyle.split(" ") : [],
              r = "normal",
              i = "normal",
              n = e.length,
              a = 0;
            a < n;
            a += 1
          )
            switch (e[a].toLowerCase()) {
              case "italic":
                i = "italic";
                break;
              case "bold":
                r = "700";
                break;
              case "black":
                r = "900";
                break;
              case "medium":
                r = "500";
                break;
              case "regular":
              case "normal":
                r = "400";
                break;
              case "light":
              case "thin":
                r = "200";
            }
          return { style: i, weight: t.fWeight || r };
        }
        var FontManager = (function () {
            var t = 5e3,
              e = { w: 0, size: 0, shapes: [] },
              r = [];
            function i(t, e) {
              var r = createTag("span");
              (r.setAttribute("aria-hidden", !0), (r.style.fontFamily = e));
              var i = createTag("span");
              ((i.innerText = "giItT1WQy@!-/#"),
                (r.style.position = "absolute"),
                (r.style.left = "-10000px"),
                (r.style.top = "-10000px"),
                (r.style.fontSize = "300px"),
                (r.style.fontVariant = "normal"),
                (r.style.fontStyle = "normal"),
                (r.style.fontWeight = "normal"),
                (r.style.letterSpacing = "0"),
                r.appendChild(i),
                document.body.appendChild(r));
              var n = i.offsetWidth;
              return (
                (i.style.fontFamily =
                  (function (t) {
                    var e,
                      r = t.split(","),
                      i = r.length,
                      n = [];
                    for (e = 0; e < i; e += 1)
                      "sans-serif" !== r[e] &&
                        "monospace" !== r[e] &&
                        n.push(r[e]);
                    return n.join(",");
                  })(t) +
                  ", " +
                  e),
                { node: i, w: n, parent: r }
              );
            }
            function n(t, e) {
              var r = createNS("text");
              r.style.fontSize = "100px";
              var i = getFontProperties(e);
              return (
                r.setAttribute("font-family", e.fFamily),
                r.setAttribute("font-style", i.style),
                r.setAttribute("font-weight", i.weight),
                (r.textContent = "1"),
                e.fClass
                  ? ((r.style.fontFamily = "inherit"),
                    r.setAttribute("class", e.fClass))
                  : (r.style.fontFamily = e.fFamily),
                t.appendChild(r),
                (createTag("canvas").getContext("2d").font =
                  e.fWeight + " " + e.fStyle + " 100px " + e.fFamily),
                r
              );
            }
            r = r.concat([
              2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
              2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
              2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
            ]);
            var a = function () {
              ((this.fonts = []),
                (this.chars = null),
                (this.typekitLoaded = 0),
                (this.isLoaded = !1),
                (this._warned = !1),
                (this.initTime = Date.now()),
                (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
                (this.checkLoadedFontsBinded =
                  this.checkLoadedFonts.bind(this)));
            };
            return (
              (a.getCombinedCharacterCodes = function () {
                return r;
              }),
              (a.prototype = {
                addChars: function (t) {
                  if (t) {
                    var e;
                    this.chars || (this.chars = []);
                    var r,
                      i,
                      n = t.length,
                      a = this.chars.length;
                    for (e = 0; e < n; e += 1) {
                      for (r = 0, i = !1; r < a; )
                        (this.chars[r].style === t[e].style &&
                          this.chars[r].fFamily === t[e].fFamily &&
                          this.chars[r].ch === t[e].ch &&
                          (i = !0),
                          (r += 1));
                      i || (this.chars.push(t[e]), (a += 1));
                    }
                  }
                },
                addFonts: function (t, e) {
                  if (t) {
                    if (this.chars)
                      return ((this.isLoaded = !0), void (this.fonts = t.list));
                    var r,
                      a = t.list,
                      s = a.length,
                      o = s;
                    for (r = 0; r < s; r += 1) {
                      var h,
                        l,
                        p = !0;
                      if (
                        ((a[r].loaded = !1),
                        (a[r].monoCase = i(a[r].fFamily, "monospace")),
                        (a[r].sansCase = i(a[r].fFamily, "sans-serif")),
                        a[r].fPath)
                      ) {
                        if ("p" === a[r].fOrigin || 3 === a[r].origin) {
                          if (
                            ((h = document.querySelectorAll(
                              'style[f-forigin="p"][f-family="' +
                                a[r].fFamily +
                                '"], style[f-origin="3"][f-family="' +
                                a[r].fFamily +
                                '"]',
                            )).length > 0 && (p = !1),
                            p)
                          ) {
                            var c = createTag("style");
                            (c.setAttribute("f-forigin", a[r].fOrigin),
                              c.setAttribute("f-origin", a[r].origin),
                              c.setAttribute("f-family", a[r].fFamily),
                              (c.type = "text/css"),
                              (c.innerText =
                                "@font-face {font-family: " +
                                a[r].fFamily +
                                "; font-style: normal; src: url('" +
                                a[r].fPath +
                                "');}"),
                              e.appendChild(c));
                          }
                        } else if ("g" === a[r].fOrigin || 1 === a[r].origin) {
                          for (
                            h = document.querySelectorAll(
                              'link[f-forigin="g"], link[f-origin="1"]',
                            ),
                              l = 0;
                            l < h.length;
                            l += 1
                          )
                            -1 !== h[l].href.indexOf(a[r].fPath) && (p = !1);
                          if (p) {
                            var f = createTag("link");
                            (f.setAttribute("f-forigin", a[r].fOrigin),
                              f.setAttribute("f-origin", a[r].origin),
                              (f.type = "text/css"),
                              (f.rel = "stylesheet"),
                              (f.href = a[r].fPath),
                              document.body.appendChild(f));
                          }
                        } else if ("t" === a[r].fOrigin || 2 === a[r].origin) {
                          for (
                            h = document.querySelectorAll(
                              'script[f-forigin="t"], script[f-origin="2"]',
                            ),
                              l = 0;
                            l < h.length;
                            l += 1
                          )
                            a[r].fPath === h[l].src && (p = !1);
                          if (p) {
                            var u = createTag("link");
                            (u.setAttribute("f-forigin", a[r].fOrigin),
                              u.setAttribute("f-origin", a[r].origin),
                              u.setAttribute("rel", "stylesheet"),
                              u.setAttribute("href", a[r].fPath),
                              e.appendChild(u));
                          }
                        }
                      } else ((a[r].loaded = !0), (o -= 1));
                      ((a[r].helper = n(e, a[r])),
                        (a[r].cache = {}),
                        this.fonts.push(a[r]));
                    }
                    0 === o
                      ? (this.isLoaded = !0)
                      : setTimeout(this.checkLoadedFonts.bind(this), 100);
                  } else this.isLoaded = !0;
                },
                getCharData: function (t, r, i) {
                  for (var n = 0, a = this.chars.length; n < a; ) {
                    if (
                      this.chars[n].ch === t &&
                      this.chars[n].style === r &&
                      this.chars[n].fFamily === i
                    )
                      return this.chars[n];
                    n += 1;
                  }
                  return (
                    (("string" == typeof t && 13 !== t.charCodeAt(0)) || !t) &&
                      console &&
                      console.warn &&
                      !this._warned &&
                      ((this._warned = !0),
                      console.warn(
                        "Missing character from exported characters list: ",
                        t,
                        r,
                        i,
                      )),
                    e
                  );
                },
                getFontByName: function (t) {
                  for (var e = 0, r = this.fonts.length; e < r; ) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1;
                  }
                  return this.fonts[0];
                },
                measureText: function (t, e, r) {
                  var i = this.getFontByName(e),
                    n = t.charCodeAt(0);
                  if (!i.cache[n + 1]) {
                    var a = i.helper;
                    if (" " === t) {
                      a.textContent = "|" + t + "|";
                      var s = a.getComputedTextLength();
                      a.textContent = "||";
                      var o = a.getComputedTextLength();
                      i.cache[n + 1] = (s - o) / 100;
                    } else
                      ((a.textContent = t),
                        (i.cache[n + 1] = a.getComputedTextLength() / 100));
                  }
                  return i.cache[n + 1] * r;
                },
                checkLoadedFonts: function () {
                  var e,
                    r,
                    i,
                    n = this.fonts.length,
                    a = n;
                  for (e = 0; e < n; e += 1)
                    this.fonts[e].loaded
                      ? (a -= 1)
                      : "n" === this.fonts[e].fOrigin ||
                          0 === this.fonts[e].origin
                        ? (this.fonts[e].loaded = !0)
                        : ((r = this.fonts[e].monoCase.node),
                          (i = this.fonts[e].monoCase.w),
                          r.offsetWidth !== i
                            ? ((a -= 1), (this.fonts[e].loaded = !0))
                            : ((r = this.fonts[e].sansCase.node),
                              (i = this.fonts[e].sansCase.w),
                              r.offsetWidth !== i &&
                                ((a -= 1), (this.fonts[e].loaded = !0))),
                          this.fonts[e].loaded &&
                            (this.fonts[
                              e
                            ].sansCase.parent.parentNode.removeChild(
                              this.fonts[e].sansCase.parent,
                            ),
                            this.fonts[
                              e
                            ].monoCase.parent.parentNode.removeChild(
                              this.fonts[e].monoCase.parent,
                            )));
                  0 !== a && Date.now() - this.initTime < t
                    ? setTimeout(this.checkLoadedFontsBinded, 20)
                    : setTimeout(this.setIsLoadedBinded, 10);
                },
                setIsLoaded: function () {
                  this.isLoaded = !0;
                },
              }),
              a
            );
          })(),
          PropertyFactory = (function () {
            var t = initialDefaultFrame,
              e = Math.abs;
            function r(t, e) {
              var r,
                n = this.offsetTime;
              "multidimensional" === this.propType &&
                (r = createTypedArray("float32", this.pv.length));
              for (
                var a,
                  s,
                  o,
                  h,
                  l,
                  p,
                  c,
                  f,
                  u = e.lastIndex,
                  m = u,
                  d = this.keyframes.length - 1,
                  y = !0;
                y;

              ) {
                if (
                  ((a = this.keyframes[m]),
                  (s = this.keyframes[m + 1]),
                  m === d - 1 && t >= s.t - n)
                ) {
                  (a.h && (a = s), (u = 0));
                  break;
                }
                if (s.t - n > t) {
                  u = m;
                  break;
                }
                m < d - 1 ? (m += 1) : ((u = 0), (y = !1));
              }
              var g,
                v,
                b,
                x,
                E,
                P,
                S,
                _,
                w,
                A,
                C = s.t - n,
                k = a.t - n;
              if (a.to) {
                a.bezierData ||
                  (a.bezierData = bez.buildBezierData(
                    a.s,
                    s.s || a.e,
                    a.to,
                    a.ti,
                  ));
                var T = a.bezierData;
                if (t >= C || t < k) {
                  var D = t >= C ? T.points.length - 1 : 0;
                  for (h = T.points[D].point.length, o = 0; o < h; o += 1)
                    r[o] = T.points[D].point[o];
                } else {
                  (a.__fnct
                    ? (f = a.__fnct)
                    : ((f = BezierFactory.getBezierEasing(
                        a.o.x,
                        a.o.y,
                        a.i.x,
                        a.i.y,
                        a.n,
                      ).get),
                      (a.__fnct = f)),
                    (l = f((t - k) / (C - k))));
                  var M,
                    F = T.segmentLength * l,
                    I =
                      e.lastFrame < t && e._lastKeyframeIndex === m
                        ? e._lastAddedLength
                        : 0;
                  for (
                    c =
                      e.lastFrame < t && e._lastKeyframeIndex === m
                        ? e._lastPoint
                        : 0,
                      y = !0,
                      p = T.points.length;
                    y;

                  ) {
                    if (
                      ((I += T.points[c].partialLength),
                      0 === F || 0 === l || c === T.points.length - 1)
                    ) {
                      for (h = T.points[c].point.length, o = 0; o < h; o += 1)
                        r[o] = T.points[c].point[o];
                      break;
                    }
                    if (F >= I && F < I + T.points[c + 1].partialLength) {
                      for (
                        M = (F - I) / T.points[c + 1].partialLength,
                          h = T.points[c].point.length,
                          o = 0;
                        o < h;
                        o += 1
                      )
                        r[o] =
                          T.points[c].point[o] +
                          (T.points[c + 1].point[o] - T.points[c].point[o]) * M;
                      break;
                    }
                    c < p - 1 ? (c += 1) : (y = !1);
                  }
                  ((e._lastPoint = c),
                    (e._lastAddedLength = I - T.points[c].partialLength),
                    (e._lastKeyframeIndex = m));
                }
              } else {
                var R, V, B, O, L;
                if (((d = a.s.length), (g = s.s || a.e), this.sh && 1 !== a.h))
                  if (t >= C) ((r[0] = g[0]), (r[1] = g[1]), (r[2] = g[2]));
                  else if (t <= k)
                    ((r[0] = a.s[0]), (r[1] = a.s[1]), (r[2] = a.s[2]));
                  else {
                    var z = i(a.s),
                      G = i(g);
                    ((v = r),
                      (b = (function (t, e, r) {
                        var i,
                          n,
                          a,
                          s,
                          o,
                          h = [],
                          l = t[0],
                          p = t[1],
                          c = t[2],
                          f = t[3],
                          u = e[0],
                          m = e[1],
                          d = e[2],
                          y = e[3];
                        (n = l * u + p * m + c * d + f * y) < 0 &&
                          ((n = -n), (u = -u), (m = -m), (d = -d), (y = -y));
                        1 - n > 1e-6
                          ? ((i = Math.acos(n)),
                            (a = Math.sin(i)),
                            (s = Math.sin((1 - r) * i) / a),
                            (o = Math.sin(r * i) / a))
                          : ((s = 1 - r), (o = r));
                        return (
                          (h[0] = s * l + o * u),
                          (h[1] = s * p + o * m),
                          (h[2] = s * c + o * d),
                          (h[3] = s * f + o * y),
                          h
                        );
                      })(z, G, (t - k) / (C - k))),
                      (x = b[0]),
                      (E = b[1]),
                      (P = b[2]),
                      (S = b[3]),
                      (_ = Math.atan2(
                        2 * E * S - 2 * x * P,
                        1 - 2 * E * E - 2 * P * P,
                      )),
                      (w = Math.asin(2 * x * E + 2 * P * S)),
                      (A = Math.atan2(
                        2 * x * S - 2 * E * P,
                        1 - 2 * x * x - 2 * P * P,
                      )),
                      (v[0] = _ / degToRads),
                      (v[1] = w / degToRads),
                      (v[2] = A / degToRads));
                  }
                else
                  for (m = 0; m < d; m += 1)
                    (1 !== a.h &&
                      (t >= C
                        ? (l = 1)
                        : t < k
                          ? (l = 0)
                          : (a.o.x.constructor === Array
                              ? (a.__fnct || (a.__fnct = []),
                                a.__fnct[m]
                                  ? (f = a.__fnct[m])
                                  : ((R =
                                      void 0 === a.o.x[m]
                                        ? a.o.x[0]
                                        : a.o.x[m]),
                                    (V =
                                      void 0 === a.o.y[m]
                                        ? a.o.y[0]
                                        : a.o.y[m]),
                                    (B =
                                      void 0 === a.i.x[m]
                                        ? a.i.x[0]
                                        : a.i.x[m]),
                                    (O =
                                      void 0 === a.i.y[m]
                                        ? a.i.y[0]
                                        : a.i.y[m]),
                                    (f = BezierFactory.getBezierEasing(
                                      R,
                                      V,
                                      B,
                                      O,
                                    ).get),
                                    (a.__fnct[m] = f)))
                              : a.__fnct
                                ? (f = a.__fnct)
                                : ((R = a.o.x),
                                  (V = a.o.y),
                                  (B = a.i.x),
                                  (O = a.i.y),
                                  (f = BezierFactory.getBezierEasing(
                                    R,
                                    V,
                                    B,
                                    O,
                                  ).get),
                                  (a.__fnct = f)),
                            (l = f((t - k) / (C - k))))),
                      (g = s.s || a.e),
                      (L = 1 === a.h ? a.s[m] : a.s[m] + (g[m] - a.s[m]) * l),
                      "multidimensional" === this.propType
                        ? (r[m] = L)
                        : (r = L));
              }
              return ((e.lastIndex = u), r);
            }
            function i(t) {
              var e = t[0] * degToRads,
                r = t[1] * degToRads,
                i = t[2] * degToRads,
                n = Math.cos(e / 2),
                a = Math.cos(r / 2),
                s = Math.cos(i / 2),
                o = Math.sin(e / 2),
                h = Math.sin(r / 2),
                l = Math.sin(i / 2);
              return [
                o * h * s + n * a * l,
                o * a * s + n * h * l,
                n * h * s - o * a * l,
                n * a * s - o * h * l,
              ];
            }
            function n() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                i =
                  this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
              if (
                !(
                  e === this._caching.lastFrame ||
                  (this._caching.lastFrame !== t &&
                    ((this._caching.lastFrame >= i && e >= i) ||
                      (this._caching.lastFrame < r && e < r)))
                )
              ) {
                this._caching.lastFrame >= e &&
                  ((this._caching._lastKeyframeIndex = -1),
                  (this._caching.lastIndex = 0));
                var n = this.interpolateValue(e, this._caching);
                this.pv = n;
              }
              return ((this._caching.lastFrame = e), this.pv);
            }
            function a(t) {
              var r;
              if ("unidimensional" === this.propType)
                ((r = t * this.mult),
                  e(this.v - r) > 1e-5 && ((this.v = r), (this._mdf = !0)));
              else
                for (var i = 0, n = this.v.length; i < n; )
                  ((r = t[i] * this.mult),
                    e(this.v[i] - r) > 1e-5 &&
                      ((this.v[i] = r), (this._mdf = !0)),
                    (i += 1));
            }
            function s() {
              if (
                this.elem.globalData.frameId !== this.frameId &&
                this.effectsSequence.length
              )
                if (this.lock) this.setVValue(this.pv);
                else {
                  var t;
                  ((this.lock = !0), (this._mdf = this._isFirstFrame));
                  var e = this.effectsSequence.length,
                    r = this.kf ? this.pv : this.data.k;
                  for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                  (this.setVValue(r),
                    (this._isFirstFrame = !1),
                    (this.lock = !1),
                    (this.frameId = this.elem.globalData.frameId));
                }
            }
            function o(t) {
              (this.effectsSequence.push(t),
                this.container.addDynamicProperty(this));
            }
            function h(t, e, r, i) {
              ((this.propType = "unidimensional"),
                (this.mult = r || 1),
                (this.data = e),
                (this.v = r ? e.k * r : e.k),
                (this.pv = e.k),
                (this._mdf = !1),
                (this.elem = t),
                (this.container = i),
                (this.comp = t.comp),
                (this.k = !1),
                (this.kf = !1),
                (this.vel = 0),
                (this.effectsSequence = []),
                (this._isFirstFrame = !0),
                (this.getValue = s),
                (this.setVValue = a),
                (this.addEffect = o));
            }
            function l(t, e, r, i) {
              var n;
              ((this.propType = "multidimensional"),
                (this.mult = r || 1),
                (this.data = e),
                (this._mdf = !1),
                (this.elem = t),
                (this.container = i),
                (this.comp = t.comp),
                (this.k = !1),
                (this.kf = !1),
                (this.frameId = -1));
              var h = e.k.length;
              for (
                this.v = createTypedArray("float32", h),
                  this.pv = createTypedArray("float32", h),
                  this.vel = createTypedArray("float32", h),
                  n = 0;
                n < h;
                n += 1
              )
                ((this.v[n] = e.k[n] * this.mult), (this.pv[n] = e.k[n]));
              ((this._isFirstFrame = !0),
                (this.effectsSequence = []),
                (this.getValue = s),
                (this.setVValue = a),
                (this.addEffect = o));
            }
            function p(e, i, h, l) {
              ((this.propType = "unidimensional"),
                (this.keyframes = i.k),
                (this.offsetTime = e.data.st),
                (this.frameId = -1),
                (this._caching = {
                  lastFrame: t,
                  lastIndex: 0,
                  value: 0,
                  _lastKeyframeIndex: -1,
                }),
                (this.k = !0),
                (this.kf = !0),
                (this.data = i),
                (this.mult = h || 1),
                (this.elem = e),
                (this.container = l),
                (this.comp = e.comp),
                (this.v = t),
                (this.pv = t),
                (this._isFirstFrame = !0),
                (this.getValue = s),
                (this.setVValue = a),
                (this.interpolateValue = r),
                (this.effectsSequence = [n.bind(this)]),
                (this.addEffect = o));
            }
            function c(e, i, h, l) {
              var p;
              this.propType = "multidimensional";
              var c,
                f,
                u,
                m,
                d = i.k.length;
              for (p = 0; p < d - 1; p += 1)
                i.k[p].to &&
                  i.k[p].s &&
                  i.k[p + 1] &&
                  i.k[p + 1].s &&
                  ((c = i.k[p].s),
                  (f = i.k[p + 1].s),
                  (u = i.k[p].to),
                  (m = i.k[p].ti),
                  ((2 === c.length &&
                    (c[0] !== f[0] || c[1] !== f[1]) &&
                    bez.pointOnLine2D(
                      c[0],
                      c[1],
                      f[0],
                      f[1],
                      c[0] + u[0],
                      c[1] + u[1],
                    ) &&
                    bez.pointOnLine2D(
                      c[0],
                      c[1],
                      f[0],
                      f[1],
                      f[0] + m[0],
                      f[1] + m[1],
                    )) ||
                    (3 === c.length &&
                      (c[0] !== f[0] || c[1] !== f[1] || c[2] !== f[2]) &&
                      bez.pointOnLine3D(
                        c[0],
                        c[1],
                        c[2],
                        f[0],
                        f[1],
                        f[2],
                        c[0] + u[0],
                        c[1] + u[1],
                        c[2] + u[2],
                      ) &&
                      bez.pointOnLine3D(
                        c[0],
                        c[1],
                        c[2],
                        f[0],
                        f[1],
                        f[2],
                        f[0] + m[0],
                        f[1] + m[1],
                        f[2] + m[2],
                      ))) &&
                    ((i.k[p].to = null), (i.k[p].ti = null)),
                  c[0] === f[0] &&
                    c[1] === f[1] &&
                    0 === u[0] &&
                    0 === u[1] &&
                    0 === m[0] &&
                    0 === m[1] &&
                    (2 === c.length ||
                      (c[2] === f[2] && 0 === u[2] && 0 === m[2])) &&
                    ((i.k[p].to = null), (i.k[p].ti = null)));
              ((this.effectsSequence = [n.bind(this)]),
                (this.data = i),
                (this.keyframes = i.k),
                (this.offsetTime = e.data.st),
                (this.k = !0),
                (this.kf = !0),
                (this._isFirstFrame = !0),
                (this.mult = h || 1),
                (this.elem = e),
                (this.container = l),
                (this.comp = e.comp),
                (this.getValue = s),
                (this.setVValue = a),
                (this.interpolateValue = r),
                (this.frameId = -1));
              var y = i.k[0].s.length;
              for (
                this.v = createTypedArray("float32", y),
                  this.pv = createTypedArray("float32", y),
                  p = 0;
                p < y;
                p += 1
              )
                ((this.v[p] = t), (this.pv[p] = t));
              ((this._caching = {
                lastFrame: t,
                lastIndex: 0,
                value: createTypedArray("float32", y),
              }),
                (this.addEffect = o));
            }
            return {
              getProp: function (t, e, r, i, n) {
                var a;
                if (e.k.length)
                  if ("number" == typeof e.k[0]) a = new l(t, e, i, n);
                  else
                    switch (r) {
                      case 0:
                        a = new p(t, e, i, n);
                        break;
                      case 1:
                        a = new c(t, e, i, n);
                    }
                else a = new h(t, e, i, n);
                return (a.effectsSequence.length && n.addDynamicProperty(a), a);
              },
            };
          })(),
          TransformPropertyFactory = (function () {
            var t = [0, 0];
            function e(t, e, r) {
              if (
                ((this.elem = t),
                (this.frameId = -1),
                (this.propType = "transform"),
                (this.data = e),
                (this.v = new Matrix()),
                (this.pre = new Matrix()),
                (this.appliedTransformations = 0),
                this.initDynamicPropertyContainer(r || t),
                e.p && e.p.s
                  ? ((this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this)),
                    (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)),
                    e.p.z &&
                      (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this)))
                  : (this.p = PropertyFactory.getProp(
                      t,
                      e.p || { k: [0, 0, 0] },
                      1,
                      0,
                      this,
                    )),
                e.rx)
              ) {
                if (
                  ((this.rx = PropertyFactory.getProp(
                    t,
                    e.rx,
                    0,
                    degToRads,
                    this,
                  )),
                  (this.ry = PropertyFactory.getProp(
                    t,
                    e.ry,
                    0,
                    degToRads,
                    this,
                  )),
                  (this.rz = PropertyFactory.getProp(
                    t,
                    e.rz,
                    0,
                    degToRads,
                    this,
                  )),
                  e.or.k[0].ti)
                ) {
                  var i,
                    n = e.or.k.length;
                  for (i = 0; i < n; i += 1)
                    ((e.or.k[i].to = null), (e.or.k[i].ti = null));
                }
                ((this.or = PropertyFactory.getProp(
                  t,
                  e.or,
                  1,
                  degToRads,
                  this,
                )),
                  (this.or.sh = !0));
              } else
                this.r = PropertyFactory.getProp(
                  t,
                  e.r || { k: 0 },
                  0,
                  degToRads,
                  this,
                );
              (e.sk &&
                ((this.sk = PropertyFactory.getProp(
                  t,
                  e.sk,
                  0,
                  degToRads,
                  this,
                )),
                (this.sa = PropertyFactory.getProp(
                  t,
                  e.sa,
                  0,
                  degToRads,
                  this,
                ))),
                (this.a = PropertyFactory.getProp(
                  t,
                  e.a || { k: [0, 0, 0] },
                  1,
                  0,
                  this,
                )),
                (this.s = PropertyFactory.getProp(
                  t,
                  e.s || { k: [100, 100, 100] },
                  1,
                  0.01,
                  this,
                )),
                e.o
                  ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t))
                  : (this.o = { _mdf: !1, v: 1 }),
                (this._isDirty = !0),
                this.dynamicProperties.length || this.getValue(!0));
            }
            return (
              (e.prototype = {
                applyToMatrix: function (t) {
                  var e = this._mdf;
                  (this.iterateDynamicProperties(),
                    (this._mdf = this._mdf || e),
                    this.a &&
                      t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                    this.r
                      ? t.rotate(-this.r.v)
                      : t
                          .rotateZ(-this.rz.v)
                          .rotateY(this.ry.v)
                          .rotateX(this.rx.v)
                          .rotateZ(-this.or.v[2])
                          .rotateY(this.or.v[1])
                          .rotateX(this.or.v[0]),
                    this.data.p.s
                      ? this.data.p.z
                        ? t.translate(this.px.v, this.py.v, -this.pz.v)
                        : t.translate(this.px.v, this.py.v, 0)
                      : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]));
                },
                getValue: function (e) {
                  if (this.elem.globalData.frameId !== this.frameId) {
                    if (
                      (this._isDirty &&
                        (this.precalculateMatrix(), (this._isDirty = !1)),
                      this.iterateDynamicProperties(),
                      this._mdf || e)
                    ) {
                      var r;
                      if (
                        (this.v.cloneFromProps(this.pre.props),
                        this.appliedTransformations < 1 &&
                          this.v.translate(
                            -this.a.v[0],
                            -this.a.v[1],
                            this.a.v[2],
                          ),
                        this.appliedTransformations < 2 &&
                          this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.sk &&
                          this.appliedTransformations < 3 &&
                          this.v.skewFromAxis(-this.sk.v, this.sa.v),
                        this.r && this.appliedTransformations < 4
                          ? this.v.rotate(-this.r.v)
                          : !this.r &&
                            this.appliedTransformations < 4 &&
                            this.v
                              .rotateZ(-this.rz.v)
                              .rotateY(this.ry.v)
                              .rotateX(this.rx.v)
                              .rotateZ(-this.or.v[2])
                              .rotateY(this.or.v[1])
                              .rotateX(this.or.v[0]),
                        this.autoOriented)
                      ) {
                        var i, n;
                        if (
                          ((r = this.elem.globalData.frameRate),
                          this.p && this.p.keyframes && this.p.getValueAtTime)
                        )
                          this.p._caching.lastFrame + this.p.offsetTime <=
                          this.p.keyframes[0].t
                            ? ((i = this.p.getValueAtTime(
                                (this.p.keyframes[0].t + 0.01) / r,
                                0,
                              )),
                              (n = this.p.getValueAtTime(
                                this.p.keyframes[0].t / r,
                                0,
                              )))
                            : this.p._caching.lastFrame + this.p.offsetTime >=
                                this.p.keyframes[this.p.keyframes.length - 1].t
                              ? ((i = this.p.getValueAtTime(
                                  this.p.keyframes[this.p.keyframes.length - 1]
                                    .t / r,
                                  0,
                                )),
                                (n = this.p.getValueAtTime(
                                  (this.p.keyframes[this.p.keyframes.length - 1]
                                    .t -
                                    0.05) /
                                    r,
                                  0,
                                )))
                              : ((i = this.p.pv),
                                (n = this.p.getValueAtTime(
                                  (this.p._caching.lastFrame +
                                    this.p.offsetTime -
                                    0.01) /
                                    r,
                                  this.p.offsetTime,
                                )));
                        else if (
                          this.px &&
                          this.px.keyframes &&
                          this.py.keyframes &&
                          this.px.getValueAtTime &&
                          this.py.getValueAtTime
                        ) {
                          ((i = []), (n = []));
                          var a = this.px,
                            s = this.py;
                          a._caching.lastFrame + a.offsetTime <=
                          a.keyframes[0].t
                            ? ((i[0] = a.getValueAtTime(
                                (a.keyframes[0].t + 0.01) / r,
                                0,
                              )),
                              (i[1] = s.getValueAtTime(
                                (s.keyframes[0].t + 0.01) / r,
                                0,
                              )),
                              (n[0] = a.getValueAtTime(
                                a.keyframes[0].t / r,
                                0,
                              )),
                              (n[1] = s.getValueAtTime(
                                s.keyframes[0].t / r,
                                0,
                              )))
                            : a._caching.lastFrame + a.offsetTime >=
                                a.keyframes[a.keyframes.length - 1].t
                              ? ((i[0] = a.getValueAtTime(
                                  a.keyframes[a.keyframes.length - 1].t / r,
                                  0,
                                )),
                                (i[1] = s.getValueAtTime(
                                  s.keyframes[s.keyframes.length - 1].t / r,
                                  0,
                                )),
                                (n[0] = a.getValueAtTime(
                                  (a.keyframes[a.keyframes.length - 1].t -
                                    0.01) /
                                    r,
                                  0,
                                )),
                                (n[1] = s.getValueAtTime(
                                  (s.keyframes[s.keyframes.length - 1].t -
                                    0.01) /
                                    r,
                                  0,
                                )))
                              : ((i = [a.pv, s.pv]),
                                (n[0] = a.getValueAtTime(
                                  (a._caching.lastFrame + a.offsetTime - 0.01) /
                                    r,
                                  a.offsetTime,
                                )),
                                (n[1] = s.getValueAtTime(
                                  (s._caching.lastFrame + s.offsetTime - 0.01) /
                                    r,
                                  s.offsetTime,
                                )));
                        } else i = n = t;
                        this.v.rotate(-Math.atan2(i[1] - n[1], i[0] - n[0]));
                      }
                      this.data.p && this.data.p.s
                        ? this.data.p.z
                          ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                          : this.v.translate(this.px.v, this.py.v, 0)
                        : this.v.translate(
                            this.p.v[0],
                            this.p.v[1],
                            -this.p.v[2],
                          );
                    }
                    this.frameId = this.elem.globalData.frameId;
                  }
                },
                precalculateMatrix: function () {
                  if (
                    !this.a.k &&
                    (this.pre.translate(
                      -this.a.v[0],
                      -this.a.v[1],
                      this.a.v[2],
                    ),
                    (this.appliedTransformations = 1),
                    !this.s.effectsSequence.length)
                  ) {
                    if (
                      (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                      (this.appliedTransformations = 2),
                      this.sk)
                    ) {
                      if (
                        this.sk.effectsSequence.length ||
                        this.sa.effectsSequence.length
                      )
                        return;
                      (this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                        (this.appliedTransformations = 3));
                    }
                    this.r
                      ? this.r.effectsSequence.length ||
                        (this.pre.rotate(-this.r.v),
                        (this.appliedTransformations = 4))
                      : this.rz.effectsSequence.length ||
                        this.ry.effectsSequence.length ||
                        this.rx.effectsSequence.length ||
                        this.or.effectsSequence.length ||
                        (this.pre
                          .rotateZ(-this.rz.v)
                          .rotateY(this.ry.v)
                          .rotateX(this.rx.v)
                          .rotateZ(-this.or.v[2])
                          .rotateY(this.or.v[1])
                          .rotateX(this.or.v[0]),
                        (this.appliedTransformations = 4));
                  }
                },
                autoOrient: function () {},
              }),
              extendPrototype([DynamicPropertyContainer], e),
              (e.prototype.addDynamicProperty = function (t) {
                (this._addDynamicProperty(t),
                  this.elem.addDynamicProperty(t),
                  (this._isDirty = !0));
              }),
              (e.prototype._addDynamicProperty =
                DynamicPropertyContainer.prototype.addDynamicProperty),
              {
                getTransformProperty: function (t, r, i) {
                  return new e(t, r, i);
                },
              }
            );
          })();
        function ShapePath() {
          ((this.c = !1),
            (this._length = 0),
            (this._maxLength = 8),
            (this.v = createSizedArray(this._maxLength)),
            (this.o = createSizedArray(this._maxLength)),
            (this.i = createSizedArray(this._maxLength)));
        }
        ((ShapePath.prototype.setPathData = function (t, e) {
          ((this.c = t), this.setLength(e));
          for (var r = 0; r < e; )
            ((this.v[r] = pointPool.newElement()),
              (this.o[r] = pointPool.newElement()),
              (this.i[r] = pointPool.newElement()),
              (r += 1));
        }),
          (ShapePath.prototype.setLength = function (t) {
            for (; this._maxLength < t; ) this.doubleArrayLength();
            this._length = t;
          }),
          (ShapePath.prototype.doubleArrayLength = function () {
            ((this.v = this.v.concat(createSizedArray(this._maxLength))),
              (this.i = this.i.concat(createSizedArray(this._maxLength))),
              (this.o = this.o.concat(createSizedArray(this._maxLength))),
              (this._maxLength *= 2));
          }),
          (ShapePath.prototype.setXYAt = function (t, e, r, i, n) {
            var a;
            switch (
              ((this._length = Math.max(this._length, i + 1)),
              this._length >= this._maxLength && this.doubleArrayLength(),
              r)
            ) {
              case "v":
                a = this.v;
                break;
              case "i":
                a = this.i;
                break;
              case "o":
                a = this.o;
                break;
              default:
                a = [];
            }
            ((!a[i] || (a[i] && !n)) && (a[i] = pointPool.newElement()),
              (a[i][0] = t),
              (a[i][1] = e));
          }),
          (ShapePath.prototype.setTripleAt = function (t, e, r, i, n, a, s, o) {
            (this.setXYAt(t, e, "v", s, o),
              this.setXYAt(r, i, "o", s, o),
              this.setXYAt(n, a, "i", s, o));
          }),
          (ShapePath.prototype.reverse = function () {
            var t = new ShapePath();
            t.setPathData(this.c, this._length);
            var e = this.v,
              r = this.o,
              i = this.i,
              n = 0;
            this.c &&
              (t.setTripleAt(
                e[0][0],
                e[0][1],
                i[0][0],
                i[0][1],
                r[0][0],
                r[0][1],
                0,
                !1,
              ),
              (n = 1));
            var a,
              s = this._length - 1,
              o = this._length;
            for (a = n; a < o; a += 1)
              (t.setTripleAt(
                e[s][0],
                e[s][1],
                i[s][0],
                i[s][1],
                r[s][0],
                r[s][1],
                a,
                !1,
              ),
                (s -= 1));
            return t;
          }));
        var ShapePropertyFactory = (function () {
            var t = -999999;
            function e(t, e, r) {
              var i,
                n,
                a,
                s,
                o,
                h,
                l,
                p,
                c,
                f = r.lastIndex,
                u = this.keyframes;
              if (t < u[0].t - this.offsetTime)
                ((i = u[0].s[0]), (a = !0), (f = 0));
              else if (t >= u[u.length - 1].t - this.offsetTime)
                ((i = u[u.length - 1].s
                  ? u[u.length - 1].s[0]
                  : u[u.length - 2].e[0]),
                  (a = !0));
              else {
                for (
                  var m, d, y = f, g = u.length - 1, v = !0;
                  v && ((m = u[y]), !((d = u[y + 1]).t - this.offsetTime > t));

                )
                  y < g - 1 ? (y += 1) : (v = !1);
                if (((f = y), !(a = 1 === m.h))) {
                  if (t >= d.t - this.offsetTime) p = 1;
                  else if (t < m.t - this.offsetTime) p = 0;
                  else {
                    var b;
                    (m.__fnct
                      ? (b = m.__fnct)
                      : ((b = BezierFactory.getBezierEasing(
                          m.o.x,
                          m.o.y,
                          m.i.x,
                          m.i.y,
                        ).get),
                        (m.__fnct = b)),
                      (p = b(
                        (t - (m.t - this.offsetTime)) /
                          (d.t - this.offsetTime - (m.t - this.offsetTime)),
                      )));
                  }
                  n = d.s ? d.s[0] : m.e[0];
                }
                i = m.s[0];
              }
              for (
                h = e._length, l = i.i[0].length, r.lastIndex = f, s = 0;
                s < h;
                s += 1
              )
                for (o = 0; o < l; o += 1)
                  ((c = a
                    ? i.i[s][o]
                    : i.i[s][o] + (n.i[s][o] - i.i[s][o]) * p),
                    (e.i[s][o] = c),
                    (c = a
                      ? i.o[s][o]
                      : i.o[s][o] + (n.o[s][o] - i.o[s][o]) * p),
                    (e.o[s][o] = c),
                    (c = a
                      ? i.v[s][o]
                      : i.v[s][o] + (n.v[s][o] - i.v[s][o]) * p),
                    (e.v[s][o] = c));
            }
            function r() {
              var e = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                i =
                  this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                n = this._caching.lastFrame;
              return (
                (n !== t && ((n < r && e < r) || (n > i && e > i))) ||
                  ((this._caching.lastIndex =
                    n < e ? this._caching.lastIndex : 0),
                  this.interpolateShape(e, this.pv, this._caching)),
                (this._caching.lastFrame = e),
                this.pv
              );
            }
            function i() {
              this.paths = this.localShapeCollection;
            }
            function n(t) {
              (function (t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var r,
                  i = t._length;
                for (r = 0; r < i; r += 1)
                  if (
                    t.v[r][0] !== e.v[r][0] ||
                    t.v[r][1] !== e.v[r][1] ||
                    t.o[r][0] !== e.o[r][0] ||
                    t.o[r][1] !== e.o[r][1] ||
                    t.i[r][0] !== e.i[r][0] ||
                    t.i[r][1] !== e.i[r][1]
                  )
                    return !1;
                return !0;
              })(this.v, t) ||
                ((this.v = shapePool.clone(t)),
                this.localShapeCollection.releaseShapes(),
                this.localShapeCollection.addShape(this.v),
                (this._mdf = !0),
                (this.paths = this.localShapeCollection));
            }
            function a() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var t, e;
                    ((this.lock = !0),
                      (this._mdf = !1),
                      (t = this.kf
                        ? this.pv
                        : this.data.ks
                          ? this.data.ks.k
                          : this.data.pt.k));
                    var r = this.effectsSequence.length;
                    for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                    (this.setVValue(t),
                      (this.lock = !1),
                      (this.frameId = this.elem.globalData.frameId));
                  }
                else this._mdf = !1;
            }
            function s(t, e, r) {
              ((this.propType = "shape"),
                (this.comp = t.comp),
                (this.container = t),
                (this.elem = t),
                (this.data = e),
                (this.k = !1),
                (this.kf = !1),
                (this._mdf = !1));
              var n = 3 === r ? e.pt.k : e.ks.k;
              ((this.v = shapePool.clone(n)),
                (this.pv = shapePool.clone(this.v)),
                (this.localShapeCollection =
                  shapeCollectionPool.newShapeCollection()),
                (this.paths = this.localShapeCollection),
                this.paths.addShape(this.v),
                (this.reset = i),
                (this.effectsSequence = []));
            }
            function o(t) {
              (this.effectsSequence.push(t),
                this.container.addDynamicProperty(this));
            }
            function h(e, n, a) {
              ((this.propType = "shape"),
                (this.comp = e.comp),
                (this.elem = e),
                (this.container = e),
                (this.offsetTime = e.data.st),
                (this.keyframes = 3 === a ? n.pt.k : n.ks.k),
                (this.k = !0),
                (this.kf = !0));
              var s = this.keyframes[0].s[0].i.length;
              ((this.v = shapePool.newElement()),
                this.v.setPathData(this.keyframes[0].s[0].c, s),
                (this.pv = shapePool.clone(this.v)),
                (this.localShapeCollection =
                  shapeCollectionPool.newShapeCollection()),
                (this.paths = this.localShapeCollection),
                this.paths.addShape(this.v),
                (this.lastFrame = t),
                (this.reset = i),
                (this._caching = { lastFrame: t, lastIndex: 0 }),
                (this.effectsSequence = [r.bind(this)]));
            }
            ((s.prototype.interpolateShape = e),
              (s.prototype.getValue = a),
              (s.prototype.setVValue = n),
              (s.prototype.addEffect = o),
              (h.prototype.getValue = a),
              (h.prototype.interpolateShape = e),
              (h.prototype.setVValue = n),
              (h.prototype.addEffect = o));
            var l = (function () {
                var t = roundCorner;
                function e(t, e) {
                  ((this.v = shapePool.newElement()),
                    this.v.setPathData(!0, 4),
                    (this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.localShapeCollection.addShape(this.v),
                    (this.d = e.d),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.frameId = -1),
                    this.initDynamicPropertyContainer(t),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertEllToPath()));
                }
                return (
                  (e.prototype = {
                    reset: i,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertEllToPath());
                    },
                    convertEllToPath: function () {
                      var e = this.p.v[0],
                        r = this.p.v[1],
                        i = this.s.v[0] / 2,
                        n = this.s.v[1] / 2,
                        a = 3 !== this.d,
                        s = this.v;
                      ((s.v[0][0] = e),
                        (s.v[0][1] = r - n),
                        (s.v[1][0] = a ? e + i : e - i),
                        (s.v[1][1] = r),
                        (s.v[2][0] = e),
                        (s.v[2][1] = r + n),
                        (s.v[3][0] = a ? e - i : e + i),
                        (s.v[3][1] = r),
                        (s.i[0][0] = a ? e - i * t : e + i * t),
                        (s.i[0][1] = r - n),
                        (s.i[1][0] = a ? e + i : e - i),
                        (s.i[1][1] = r - n * t),
                        (s.i[2][0] = a ? e + i * t : e - i * t),
                        (s.i[2][1] = r + n),
                        (s.i[3][0] = a ? e - i : e + i),
                        (s.i[3][1] = r + n * t),
                        (s.o[0][0] = a ? e + i * t : e - i * t),
                        (s.o[0][1] = r - n),
                        (s.o[1][0] = a ? e + i : e - i),
                        (s.o[1][1] = r + n * t),
                        (s.o[2][0] = a ? e - i * t : e + i * t),
                        (s.o[2][1] = r + n),
                        (s.o[3][0] = a ? e - i : e + i),
                        (s.o[3][1] = r - n * t));
                    },
                  }),
                  extendPrototype([DynamicPropertyContainer], e),
                  e
                );
              })(),
              p = (function () {
                function t(t, e) {
                  ((this.v = shapePool.newElement()),
                    this.v.setPathData(!0, 0),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.data = e),
                    (this.frameId = -1),
                    (this.d = e.d),
                    this.initDynamicPropertyContainer(t),
                    1 === e.sy
                      ? ((this.ir = PropertyFactory.getProp(
                          t,
                          e.ir,
                          0,
                          0,
                          this,
                        )),
                        (this.is = PropertyFactory.getProp(
                          t,
                          e.is,
                          0,
                          0.01,
                          this,
                        )),
                        (this.convertToPath = this.convertStarToPath))
                      : (this.convertToPath = this.convertPolygonToPath),
                    (this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this)),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.r = PropertyFactory.getProp(
                      t,
                      e.r,
                      0,
                      degToRads,
                      this,
                    )),
                    (this.or = PropertyFactory.getProp(t, e.or, 0, 0, this)),
                    (this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this)),
                    (this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertToPath()));
                }
                return (
                  (t.prototype = {
                    reset: i,
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertToPath());
                    },
                    convertStarToPath: function () {
                      var t,
                        e,
                        r,
                        i,
                        n = 2 * Math.floor(this.pt.v),
                        a = (2 * Math.PI) / n,
                        s = !0,
                        o = this.or.v,
                        h = this.ir.v,
                        l = this.os.v,
                        p = this.is.v,
                        c = (2 * Math.PI * o) / (2 * n),
                        f = (2 * Math.PI * h) / (2 * n),
                        u = -Math.PI / 2;
                      u += this.r.v;
                      var m = 3 === this.data.d ? -1 : 1;
                      for (this.v._length = 0, t = 0; t < n; t += 1) {
                        ((r = s ? l : p), (i = s ? c : f));
                        var d = (e = s ? o : h) * Math.cos(u),
                          y = e * Math.sin(u),
                          g =
                            0 === d && 0 === y
                              ? 0
                              : y / Math.sqrt(d * d + y * y),
                          v =
                            0 === d && 0 === y
                              ? 0
                              : -d / Math.sqrt(d * d + y * y);
                        ((d += +this.p.v[0]),
                          (y += +this.p.v[1]),
                          this.v.setTripleAt(
                            d,
                            y,
                            d - g * i * r * m,
                            y - v * i * r * m,
                            d + g * i * r * m,
                            y + v * i * r * m,
                            t,
                            !0,
                          ),
                          (s = !s),
                          (u += a * m));
                      }
                    },
                    convertPolygonToPath: function () {
                      var t,
                        e = Math.floor(this.pt.v),
                        r = (2 * Math.PI) / e,
                        i = this.or.v,
                        n = this.os.v,
                        a = (2 * Math.PI * i) / (4 * e),
                        s = 0.5 * -Math.PI,
                        o = 3 === this.data.d ? -1 : 1;
                      for (
                        s += this.r.v, this.v._length = 0, t = 0;
                        t < e;
                        t += 1
                      ) {
                        var h = i * Math.cos(s),
                          l = i * Math.sin(s),
                          p =
                            0 === h && 0 === l
                              ? 0
                              : l / Math.sqrt(h * h + l * l),
                          c =
                            0 === h && 0 === l
                              ? 0
                              : -h / Math.sqrt(h * h + l * l);
                        ((h += +this.p.v[0]),
                          (l += +this.p.v[1]),
                          this.v.setTripleAt(
                            h,
                            l,
                            h - p * a * n * o,
                            l - c * a * n * o,
                            h + p * a * n * o,
                            l + c * a * n * o,
                            t,
                            !0,
                          ),
                          (s += r * o));
                      }
                      ((this.paths.length = 0), (this.paths[0] = this.v));
                    },
                  }),
                  extendPrototype([DynamicPropertyContainer], t),
                  t
                );
              })(),
              c = (function () {
                function t(t, e) {
                  ((this.v = shapePool.newElement()),
                    (this.v.c = !0),
                    (this.localShapeCollection =
                      shapeCollectionPool.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.frameId = -1),
                    (this.d = e.d),
                    this.initDynamicPropertyContainer(t),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                    (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
                    this.dynamicProperties.length
                      ? (this.k = !0)
                      : ((this.k = !1), this.convertRectToPath()));
                }
                return (
                  (t.prototype = {
                    convertRectToPath: function () {
                      var t = this.p.v[0],
                        e = this.p.v[1],
                        r = this.s.v[0] / 2,
                        i = this.s.v[1] / 2,
                        n = bmMin(r, i, this.r.v),
                        a = n * (1 - roundCorner);
                      ((this.v._length = 0),
                        2 === this.d || 1 === this.d
                          ? (this.v.setTripleAt(
                              t + r,
                              e - i + n,
                              t + r,
                              e - i + n,
                              t + r,
                              e - i + a,
                              0,
                              !0,
                            ),
                            this.v.setTripleAt(
                              t + r,
                              e + i - n,
                              t + r,
                              e + i - a,
                              t + r,
                              e + i - n,
                              1,
                              !0,
                            ),
                            0 !== n
                              ? (this.v.setTripleAt(
                                  t + r - n,
                                  e + i,
                                  t + r - n,
                                  e + i,
                                  t + r - a,
                                  e + i,
                                  2,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r + n,
                                  e + i,
                                  t - r + a,
                                  e + i,
                                  t - r + n,
                                  e + i,
                                  3,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i - n,
                                  t - r,
                                  e + i - n,
                                  t - r,
                                  e + i - a,
                                  4,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i + n,
                                  t - r,
                                  e - i + a,
                                  t - r,
                                  e - i + n,
                                  5,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r + n,
                                  e - i,
                                  t - r + n,
                                  e - i,
                                  t - r + a,
                                  e - i,
                                  6,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t + r - n,
                                  e - i,
                                  t + r - a,
                                  e - i,
                                  t + r - n,
                                  e - i,
                                  7,
                                  !0,
                                ))
                              : (this.v.setTripleAt(
                                  t - r,
                                  e + i,
                                  t - r + a,
                                  e + i,
                                  t - r,
                                  e + i,
                                  2,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i,
                                  t - r,
                                  e - i + a,
                                  t - r,
                                  e - i,
                                  3,
                                )))
                          : (this.v.setTripleAt(
                              t + r,
                              e - i + n,
                              t + r,
                              e - i + a,
                              t + r,
                              e - i + n,
                              0,
                              !0,
                            ),
                            0 !== n
                              ? (this.v.setTripleAt(
                                  t + r - n,
                                  e - i,
                                  t + r - n,
                                  e - i,
                                  t + r - a,
                                  e - i,
                                  1,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r + n,
                                  e - i,
                                  t - r + a,
                                  e - i,
                                  t - r + n,
                                  e - i,
                                  2,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e - i + n,
                                  t - r,
                                  e - i + n,
                                  t - r,
                                  e - i + a,
                                  3,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i - n,
                                  t - r,
                                  e + i - a,
                                  t - r,
                                  e + i - n,
                                  4,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r + n,
                                  e + i,
                                  t - r + n,
                                  e + i,
                                  t - r + a,
                                  e + i,
                                  5,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t + r - n,
                                  e + i,
                                  t + r - a,
                                  e + i,
                                  t + r - n,
                                  e + i,
                                  6,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t + r,
                                  e + i - n,
                                  t + r,
                                  e + i - n,
                                  t + r,
                                  e + i - a,
                                  7,
                                  !0,
                                ))
                              : (this.v.setTripleAt(
                                  t - r,
                                  e - i,
                                  t - r + a,
                                  e - i,
                                  t - r,
                                  e - i,
                                  1,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t - r,
                                  e + i,
                                  t - r,
                                  e + i - a,
                                  t - r,
                                  e + i,
                                  2,
                                  !0,
                                ),
                                this.v.setTripleAt(
                                  t + r,
                                  e + i,
                                  t + r - a,
                                  e + i,
                                  t + r,
                                  e + i,
                                  3,
                                  !0,
                                ))));
                    },
                    getValue: function () {
                      this.elem.globalData.frameId !== this.frameId &&
                        ((this.frameId = this.elem.globalData.frameId),
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertRectToPath());
                    },
                    reset: i,
                  }),
                  extendPrototype([DynamicPropertyContainer], t),
                  t
                );
              })();
            var f = {
              getShapeProp: function (t, e, r) {
                var i;
                return (
                  3 === r || 4 === r
                    ? (i = (3 === r ? e.pt : e.ks).k.length
                        ? new h(t, e, r)
                        : new s(t, e, r))
                    : 5 === r
                      ? (i = new c(t, e))
                      : 6 === r
                        ? (i = new l(t, e))
                        : 7 === r && (i = new p(t, e)),
                  i.k && t.addDynamicProperty(i),
                  i
                );
              },
              getConstructorFunction: function () {
                return s;
              },
              getKeyframedConstructorFunction: function () {
                return h;
              },
            };
            return f;
          })(),
          ShapeModifiers = (function () {
            var t = {},
              e = {};
            return (
              (t.registerModifier = function (t, r) {
                e[t] || (e[t] = r);
              }),
              (t.getModifier = function (t, r, i) {
                return new e[t](r, i);
              }),
              t
            );
          })();
        function ShapeModifier() {}
        function TrimModifier() {}
        function RoundCornersModifier() {}
        function PuckerAndBloatModifier() {}
        function RepeaterModifier() {}
        function ShapeCollection() {
          ((this._length = 0),
            (this._maxLength = 4),
            (this.shapes = createSizedArray(this._maxLength)));
        }
        function DashProperty(t, e, r, i) {
          var n;
          ((this.elem = t),
            (this.frameId = -1),
            (this.dataProps = createSizedArray(e.length)),
            (this.renderer = r),
            (this.k = !1),
            (this.dashStr = ""),
            (this.dashArray = createTypedArray(
              "float32",
              e.length ? e.length - 1 : 0,
            )),
            (this.dashoffset = createTypedArray("float32", 1)),
            this.initDynamicPropertyContainer(i));
          var a,
            s = e.length || 0;
          for (n = 0; n < s; n += 1)
            ((a = PropertyFactory.getProp(t, e[n].v, 0, 0, this)),
              (this.k = a.k || this.k),
              (this.dataProps[n] = { n: e[n].n, p: a }));
          (this.k || this.getValue(!0), (this._isAnimated = this.k));
        }
        function GradientProperty(t, e, r) {
          ((this.data = e), (this.c = createTypedArray("uint8c", 4 * e.p)));
          var i = e.k.k[0].s
            ? e.k.k[0].s.length - 4 * e.p
            : e.k.k.length - 4 * e.p;
          ((this.o = createTypedArray("float32", i)),
            (this._cmdf = !1),
            (this._omdf = !1),
            (this._collapsable = this.checkCollapsable()),
            (this._hasOpacity = i),
            this.initDynamicPropertyContainer(r),
            (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
            (this.k = this.prop.k),
            this.getValue(!0));
        }
        ((ShapeModifier.prototype.initModifierProperties = function () {}),
          (ShapeModifier.prototype.addShapeToModifier = function () {}),
          (ShapeModifier.prototype.addShape = function (t) {
            if (!this.closed) {
              t.sh.container.addDynamicProperty(t.sh);
              var e = {
                shape: t.sh,
                data: t,
                localShapeCollection: shapeCollectionPool.newShapeCollection(),
              };
              (this.shapes.push(e),
                this.addShapeToModifier(e),
                this._isAnimated && t.setAsAnimated());
            }
          }),
          (ShapeModifier.prototype.init = function (t, e) {
            ((this.shapes = []),
              (this.elem = t),
              this.initDynamicPropertyContainer(t),
              this.initModifierProperties(t, e),
              (this.frameId = initialDefaultFrame),
              (this.closed = !1),
              (this.k = !1),
              this.dynamicProperties.length
                ? (this.k = !0)
                : this.getValue(!0));
          }),
          (ShapeModifier.prototype.processKeys = function () {
            this.elem.globalData.frameId !== this.frameId &&
              ((this.frameId = this.elem.globalData.frameId),
              this.iterateDynamicProperties());
          }),
          extendPrototype([DynamicPropertyContainer], ShapeModifier),
          extendPrototype([ShapeModifier], TrimModifier),
          (TrimModifier.prototype.initModifierProperties = function (t, e) {
            ((this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
              (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
              (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
              (this.sValue = 0),
              (this.eValue = 0),
              (this.getValue = this.processKeys),
              (this.m = e.m),
              (this._isAnimated =
                !!this.s.effectsSequence.length ||
                !!this.e.effectsSequence.length ||
                !!this.o.effectsSequence.length));
          }),
          (TrimModifier.prototype.addShapeToModifier = function (t) {
            t.pathsData = [];
          }),
          (TrimModifier.prototype.calculateShapeEdges = function (
            t,
            e,
            r,
            i,
            n,
          ) {
            var a = [];
            e <= 1
              ? a.push({ s: t, e: e })
              : t >= 1
                ? a.push({ s: t - 1, e: e - 1 })
                : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
            var s,
              o,
              h = [],
              l = a.length;
            for (s = 0; s < l; s += 1) {
              var p, c;
              if (!((o = a[s]).e * n < i || o.s * n > i + r))
                ((p = o.s * n <= i ? 0 : (o.s * n - i) / r),
                  (c = o.e * n >= i + r ? 1 : (o.e * n - i) / r),
                  h.push([p, c]));
            }
            return (h.length || h.push([0, 0]), h);
          }),
          (TrimModifier.prototype.releasePathsData = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
            return ((t.length = 0), t);
          }),
          (TrimModifier.prototype.processShapes = function (t) {
            var e, r, i, n;
            if (this._mdf || t) {
              var a = (this.o.v % 360) / 360;
              if (
                (a < 0 && (a += 1),
                (e =
                  this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) >
                  (r =
                    this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a))
              ) {
                var s = e;
                ((e = r), (r = s));
              }
              ((e = 1e-4 * Math.round(1e4 * e)),
                (r = 1e-4 * Math.round(1e4 * r)),
                (this.sValue = e),
                (this.eValue = r));
            } else ((e = this.sValue), (r = this.eValue));
            var o,
              h,
              l,
              p,
              c,
              f = this.shapes.length,
              u = 0;
            if (r === e)
              for (n = 0; n < f; n += 1)
                (this.shapes[n].localShapeCollection.releaseShapes(),
                  (this.shapes[n].shape._mdf = !0),
                  (this.shapes[n].shape.paths =
                    this.shapes[n].localShapeCollection),
                  this._mdf && (this.shapes[n].pathsData.length = 0));
            else if ((1 === r && 0 === e) || (0 === r && 1 === e)) {
              if (this._mdf)
                for (n = 0; n < f; n += 1)
                  ((this.shapes[n].pathsData.length = 0),
                    (this.shapes[n].shape._mdf = !0));
            } else {
              var m,
                d,
                y = [];
              for (n = 0; n < f; n += 1)
                if (
                  (m = this.shapes[n]).shape._mdf ||
                  this._mdf ||
                  t ||
                  2 === this.m
                ) {
                  if (
                    ((h = (i = m.shape.paths)._length),
                    (c = 0),
                    !m.shape._mdf && m.pathsData.length)
                  )
                    c = m.totalShapeLength;
                  else {
                    for (
                      l = this.releasePathsData(m.pathsData), o = 0;
                      o < h;
                      o += 1
                    )
                      ((p = bez.getSegmentsLength(i.shapes[o])),
                        l.push(p),
                        (c += p.totalLength));
                    ((m.totalShapeLength = c), (m.pathsData = l));
                  }
                  ((u += c), (m.shape._mdf = !0));
                } else m.shape.paths = m.localShapeCollection;
              var g,
                v = e,
                b = r,
                x = 0;
              for (n = f - 1; n >= 0; n -= 1)
                if ((m = this.shapes[n]).shape._mdf) {
                  for (
                    (d = m.localShapeCollection).releaseShapes(),
                      2 === this.m && f > 1
                        ? ((g = this.calculateShapeEdges(
                            e,
                            r,
                            m.totalShapeLength,
                            x,
                            u,
                          )),
                          (x += m.totalShapeLength))
                        : (g = [[v, b]]),
                      h = g.length,
                      o = 0;
                    o < h;
                    o += 1
                  ) {
                    ((v = g[o][0]),
                      (b = g[o][1]),
                      (y.length = 0),
                      b <= 1
                        ? y.push({
                            s: m.totalShapeLength * v,
                            e: m.totalShapeLength * b,
                          })
                        : v >= 1
                          ? y.push({
                              s: m.totalShapeLength * (v - 1),
                              e: m.totalShapeLength * (b - 1),
                            })
                          : (y.push({
                              s: m.totalShapeLength * v,
                              e: m.totalShapeLength,
                            }),
                            y.push({ s: 0, e: m.totalShapeLength * (b - 1) })));
                    var E = this.addShapes(m, y[0]);
                    if (y[0].s !== y[0].e) {
                      if (y.length > 1)
                        if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                          var P = E.pop();
                          (this.addPaths(E, d),
                            (E = this.addShapes(m, y[1], P)));
                        } else
                          (this.addPaths(E, d), (E = this.addShapes(m, y[1])));
                      this.addPaths(E, d);
                    }
                  }
                  m.shape.paths = d;
                }
            }
          }),
          (TrimModifier.prototype.addPaths = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1) e.addShape(t[r]);
          }),
          (TrimModifier.prototype.addSegment = function (t, e, r, i, n, a, s) {
            (n.setXYAt(e[0], e[1], "o", a),
              n.setXYAt(r[0], r[1], "i", a + 1),
              s && n.setXYAt(t[0], t[1], "v", a),
              n.setXYAt(i[0], i[1], "v", a + 1));
          }),
          (TrimModifier.prototype.addSegmentFromArray = function (t, e, r, i) {
            (e.setXYAt(t[1], t[5], "o", r),
              e.setXYAt(t[2], t[6], "i", r + 1),
              i && e.setXYAt(t[0], t[4], "v", r),
              e.setXYAt(t[3], t[7], "v", r + 1));
          }),
          (TrimModifier.prototype.addShapes = function (t, e, r) {
            var i,
              n,
              a,
              s,
              o,
              h,
              l,
              p,
              c = t.pathsData,
              f = t.shape.paths.shapes,
              u = t.shape.paths._length,
              m = 0,
              d = [],
              y = !0;
            for (
              r
                ? ((o = r._length), (p = r._length))
                : ((r = shapePool.newElement()), (o = 0), (p = 0)),
                d.push(r),
                i = 0;
              i < u;
              i += 1
            ) {
              for (
                h = c[i].lengths,
                  r.c = f[i].c,
                  a = f[i].c ? h.length : h.length + 1,
                  n = 1;
                n < a;
                n += 1
              )
                if (m + (s = h[n - 1]).addedLength < e.s)
                  ((m += s.addedLength), (r.c = !1));
                else {
                  if (m > e.e) {
                    r.c = !1;
                    break;
                  }
                  (e.s <= m && e.e >= m + s.addedLength
                    ? (this.addSegment(
                        f[i].v[n - 1],
                        f[i].o[n - 1],
                        f[i].i[n],
                        f[i].v[n],
                        r,
                        o,
                        y,
                      ),
                      (y = !1))
                    : ((l = bez.getNewSegment(
                        f[i].v[n - 1],
                        f[i].v[n],
                        f[i].o[n - 1],
                        f[i].i[n],
                        (e.s - m) / s.addedLength,
                        (e.e - m) / s.addedLength,
                        h[n - 1],
                      )),
                      this.addSegmentFromArray(l, r, o, y),
                      (y = !1),
                      (r.c = !1)),
                    (m += s.addedLength),
                    (o += 1));
                }
              if (f[i].c && h.length) {
                if (((s = h[n - 1]), m <= e.e)) {
                  var g = h[n - 1].addedLength;
                  e.s <= m && e.e >= m + g
                    ? (this.addSegment(
                        f[i].v[n - 1],
                        f[i].o[n - 1],
                        f[i].i[0],
                        f[i].v[0],
                        r,
                        o,
                        y,
                      ),
                      (y = !1))
                    : ((l = bez.getNewSegment(
                        f[i].v[n - 1],
                        f[i].v[0],
                        f[i].o[n - 1],
                        f[i].i[0],
                        (e.s - m) / g,
                        (e.e - m) / g,
                        h[n - 1],
                      )),
                      this.addSegmentFromArray(l, r, o, y),
                      (y = !1),
                      (r.c = !1));
                } else r.c = !1;
                ((m += s.addedLength), (o += 1));
              }
              if (
                (r._length &&
                  (r.setXYAt(r.v[p][0], r.v[p][1], "i", p),
                  r.setXYAt(
                    r.v[r._length - 1][0],
                    r.v[r._length - 1][1],
                    "o",
                    r._length - 1,
                  )),
                m > e.e)
              )
                break;
              i < u - 1 &&
                ((r = shapePool.newElement()), (y = !0), d.push(r), (o = 0));
            }
            return d;
          }),
          ShapeModifiers.registerModifier("tm", TrimModifier),
          extendPrototype([ShapeModifier], RoundCornersModifier),
          (RoundCornersModifier.prototype.initModifierProperties = function (
            t,
            e,
          ) {
            ((this.getValue = this.processKeys),
              (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)),
              (this._isAnimated = !!this.rd.effectsSequence.length));
          }),
          (RoundCornersModifier.prototype.processPath = function (t, e) {
            var r,
              i = shapePool.newElement();
            i.c = t.c;
            var n,
              a,
              s,
              o,
              h,
              l,
              p,
              c,
              f,
              u,
              m,
              d,
              y = t._length,
              g = 0;
            for (r = 0; r < y; r += 1)
              ((n = t.v[r]),
                (s = t.o[r]),
                (a = t.i[r]),
                n[0] === s[0] && n[1] === s[1] && n[0] === a[0] && n[1] === a[1]
                  ? (0 !== r && r !== y - 1) || t.c
                    ? ((o = 0 === r ? t.v[y - 1] : t.v[r - 1]),
                      (l = (h = Math.sqrt(
                        Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2),
                      ))
                        ? Math.min(h / 2, e) / h
                        : 0),
                      (p = m = n[0] + (o[0] - n[0]) * l),
                      (c = d = n[1] - (n[1] - o[1]) * l),
                      (f = p - (p - n[0]) * roundCorner),
                      (u = c - (c - n[1]) * roundCorner),
                      i.setTripleAt(p, c, f, u, m, d, g),
                      (g += 1),
                      (o = r === y - 1 ? t.v[0] : t.v[r + 1]),
                      (l = (h = Math.sqrt(
                        Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2),
                      ))
                        ? Math.min(h / 2, e) / h
                        : 0),
                      (p = f = n[0] + (o[0] - n[0]) * l),
                      (c = u = n[1] + (o[1] - n[1]) * l),
                      (m = p - (p - n[0]) * roundCorner),
                      (d = c - (c - n[1]) * roundCorner),
                      i.setTripleAt(p, c, f, u, m, d, g),
                      (g += 1))
                    : (i.setTripleAt(n[0], n[1], s[0], s[1], a[0], a[1], g),
                      (g += 1))
                  : (i.setTripleAt(
                      t.v[r][0],
                      t.v[r][1],
                      t.o[r][0],
                      t.o[r][1],
                      t.i[r][0],
                      t.i[r][1],
                      g,
                    ),
                    (g += 1)));
            return i;
          }),
          (RoundCornersModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              n,
              a,
              s,
              o = this.shapes.length,
              h = this.rd.v;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (
                  ((s = (a = this.shapes[r]).localShapeCollection),
                  a.shape._mdf || this._mdf || t)
                )
                  for (
                    s.releaseShapes(),
                      a.shape._mdf = !0,
                      e = a.shape.paths.shapes,
                      n = a.shape.paths._length,
                      i = 0;
                    i < n;
                    i += 1
                  )
                    s.addShape(this.processPath(e[i], h));
                a.shape.paths = a.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          }),
          ShapeModifiers.registerModifier("rd", RoundCornersModifier),
          extendPrototype([ShapeModifier], PuckerAndBloatModifier),
          (PuckerAndBloatModifier.prototype.initModifierProperties = function (
            t,
            e,
          ) {
            ((this.getValue = this.processKeys),
              (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
              (this._isAnimated = !!this.amount.effectsSequence.length));
          }),
          (PuckerAndBloatModifier.prototype.processPath = function (t, e) {
            var r = e / 100,
              i = [0, 0],
              n = t._length,
              a = 0;
            for (a = 0; a < n; a += 1)
              ((i[0] += t.v[a][0]), (i[1] += t.v[a][1]));
            ((i[0] /= n), (i[1] /= n));
            var s,
              o,
              h,
              l,
              p,
              c,
              f = shapePool.newElement();
            for (f.c = t.c, a = 0; a < n; a += 1)
              ((s = t.v[a][0] + (i[0] - t.v[a][0]) * r),
                (o = t.v[a][1] + (i[1] - t.v[a][1]) * r),
                (h = t.o[a][0] + (i[0] - t.o[a][0]) * -r),
                (l = t.o[a][1] + (i[1] - t.o[a][1]) * -r),
                (p = t.i[a][0] + (i[0] - t.i[a][0]) * -r),
                (c = t.i[a][1] + (i[1] - t.i[a][1]) * -r),
                f.setTripleAt(s, o, h, l, p, c, a));
            return f;
          }),
          (PuckerAndBloatModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              n,
              a,
              s,
              o = this.shapes.length,
              h = this.amount.v;
            if (0 !== h)
              for (r = 0; r < o; r += 1) {
                if (
                  ((s = (a = this.shapes[r]).localShapeCollection),
                  a.shape._mdf || this._mdf || t)
                )
                  for (
                    s.releaseShapes(),
                      a.shape._mdf = !0,
                      e = a.shape.paths.shapes,
                      n = a.shape.paths._length,
                      i = 0;
                    i < n;
                    i += 1
                  )
                    s.addShape(this.processPath(e[i], h));
                a.shape.paths = a.localShapeCollection;
              }
            this.dynamicProperties.length || (this._mdf = !1);
          }),
          ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
          extendPrototype([ShapeModifier], RepeaterModifier),
          (RepeaterModifier.prototype.initModifierProperties = function (t, e) {
            ((this.getValue = this.processKeys),
              (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
              (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
              (this.tr = TransformPropertyFactory.getTransformProperty(
                t,
                e.tr,
                this,
              )),
              (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
              (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
              (this.data = e),
              this.dynamicProperties.length || this.getValue(!0),
              (this._isAnimated = !!this.dynamicProperties.length),
              (this.pMatrix = new Matrix()),
              (this.rMatrix = new Matrix()),
              (this.sMatrix = new Matrix()),
              (this.tMatrix = new Matrix()),
              (this.matrix = new Matrix()));
          }),
          (RepeaterModifier.prototype.applyTransforms = function (
            t,
            e,
            r,
            i,
            n,
            a,
          ) {
            var s = a ? -1 : 1,
              o = i.s.v[0] + (1 - i.s.v[0]) * (1 - n),
              h = i.s.v[1] + (1 - i.s.v[1]) * (1 - n);
            (t.translate(i.p.v[0] * s * n, i.p.v[1] * s * n, i.p.v[2]),
              e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
              e.rotate(-i.r.v * s * n),
              e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
              r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
              r.scale(a ? 1 / o : o, a ? 1 / h : h),
              r.translate(i.a.v[0], i.a.v[1], i.a.v[2]));
          }),
          (RepeaterModifier.prototype.init = function (t, e, r, i) {
            for (
              this.elem = t,
                this.arr = e,
                this.pos = r,
                this.elemsData = i,
                this._currentCopies = 0,
                this._elements = [],
                this._groups = [],
                this.frameId = -1,
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e[r]);
              r > 0;

            )
              ((r -= 1), this._elements.unshift(e[r]));
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
          }),
          (RepeaterModifier.prototype.resetElements = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1)
              ((t[e]._processed = !1),
                "gr" === t[e].ty && this.resetElements(t[e].it));
          }),
          (RepeaterModifier.prototype.cloneElements = function (t) {
            var e = JSON.parse(JSON.stringify(t));
            return (this.resetElements(e), e);
          }),
          (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1)
              ((t[r]._render = e),
                "gr" === t[r].ty && this.changeGroupRender(t[r].it, e));
          }),
          (RepeaterModifier.prototype.processShapes = function (t) {
            var e,
              r,
              i,
              n,
              a,
              s = !1;
            if (this._mdf || t) {
              var o,
                h = Math.ceil(this.c.v);
              if (this._groups.length < h) {
                for (; this._groups.length < h; ) {
                  var l = { it: this.cloneElements(this._elements), ty: "gr" };
                  (l.it.push({
                    a: { a: 0, ix: 1, k: [0, 0] },
                    nm: "Transform",
                    o: { a: 0, ix: 7, k: 100 },
                    p: { a: 0, ix: 2, k: [0, 0] },
                    r: {
                      a: 1,
                      ix: 6,
                      k: [
                        { s: 0, e: 0, t: 0 },
                        { s: 0, e: 0, t: 1 },
                      ],
                    },
                    s: { a: 0, ix: 3, k: [100, 100] },
                    sa: { a: 0, ix: 5, k: 0 },
                    sk: { a: 0, ix: 4, k: 0 },
                    ty: "tr",
                  }),
                    this.arr.splice(0, 0, l),
                    this._groups.splice(0, 0, l),
                    (this._currentCopies += 1));
                }
                (this.elem.reloadShapes(), (s = !0));
              }
              for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                if (
                  ((o = a < h),
                  (this._groups[i]._render = o),
                  this.changeGroupRender(this._groups[i].it, o),
                  !o)
                ) {
                  var p = this.elemsData[i].it,
                    c = p[p.length - 1];
                  0 !== c.transform.op.v
                    ? ((c.transform.op._mdf = !0), (c.transform.op.v = 0))
                    : (c.transform.op._mdf = !1);
                }
                a += 1;
              }
              this._currentCopies = h;
              var f = this.o.v,
                u = f % 1,
                m = f > 0 ? Math.floor(f) : Math.ceil(f),
                d = this.pMatrix.props,
                y = this.rMatrix.props,
                g = this.sMatrix.props;
              (this.pMatrix.reset(),
                this.rMatrix.reset(),
                this.sMatrix.reset(),
                this.tMatrix.reset(),
                this.matrix.reset());
              var v,
                b,
                x = 0;
              if (f > 0) {
                for (; x < m; )
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    1,
                    !1,
                  ),
                    (x += 1));
                u &&
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    u,
                    !1,
                  ),
                  (x += u));
              } else if (f < 0) {
                for (; x > m; )
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    1,
                    !0,
                  ),
                    (x -= 1));
                u &&
                  (this.applyTransforms(
                    this.pMatrix,
                    this.rMatrix,
                    this.sMatrix,
                    this.tr,
                    -u,
                    !0,
                  ),
                  (x -= u));
              }
              for (
                i = 1 === this.data.m ? 0 : this._currentCopies - 1,
                  n = 1 === this.data.m ? 1 : -1,
                  a = this._currentCopies;
                a;

              ) {
                if (
                  ((b = (r = (e = this.elemsData[i].it)[e.length - 1].transform
                    .mProps.v.props).length),
                  (e[e.length - 1].transform.mProps._mdf = !0),
                  (e[e.length - 1].transform.op._mdf = !0),
                  (e[e.length - 1].transform.op.v =
                    1 === this._currentCopies
                      ? this.so.v
                      : this.so.v +
                        (this.eo.v - this.so.v) *
                          (i / (this._currentCopies - 1))),
                  0 !== x)
                ) {
                  for (
                    ((0 !== i && 1 === n) ||
                      (i !== this._currentCopies - 1 && -1 === n)) &&
                      this.applyTransforms(
                        this.pMatrix,
                        this.rMatrix,
                        this.sMatrix,
                        this.tr,
                        1,
                        !1,
                      ),
                      this.matrix.transform(
                        y[0],
                        y[1],
                        y[2],
                        y[3],
                        y[4],
                        y[5],
                        y[6],
                        y[7],
                        y[8],
                        y[9],
                        y[10],
                        y[11],
                        y[12],
                        y[13],
                        y[14],
                        y[15],
                      ),
                      this.matrix.transform(
                        g[0],
                        g[1],
                        g[2],
                        g[3],
                        g[4],
                        g[5],
                        g[6],
                        g[7],
                        g[8],
                        g[9],
                        g[10],
                        g[11],
                        g[12],
                        g[13],
                        g[14],
                        g[15],
                      ),
                      this.matrix.transform(
                        d[0],
                        d[1],
                        d[2],
                        d[3],
                        d[4],
                        d[5],
                        d[6],
                        d[7],
                        d[8],
                        d[9],
                        d[10],
                        d[11],
                        d[12],
                        d[13],
                        d[14],
                        d[15],
                      ),
                      v = 0;
                    v < b;
                    v += 1
                  )
                    r[v] = this.matrix.props[v];
                  this.matrix.reset();
                } else
                  for (this.matrix.reset(), v = 0; v < b; v += 1)
                    r[v] = this.matrix.props[v];
                ((x += 1), (a -= 1), (i += n));
              }
            } else
              for (a = this._currentCopies, i = 0, n = 1; a; )
                ((r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps
                  .v.props),
                  (e[e.length - 1].transform.mProps._mdf = !1),
                  (e[e.length - 1].transform.op._mdf = !1),
                  (a -= 1),
                  (i += n));
            return s;
          }),
          (RepeaterModifier.prototype.addShape = function () {}),
          ShapeModifiers.registerModifier("rp", RepeaterModifier),
          (ShapeCollection.prototype.addShape = function (t) {
            (this._length === this._maxLength &&
              ((this.shapes = this.shapes.concat(
                createSizedArray(this._maxLength),
              )),
              (this._maxLength *= 2)),
              (this.shapes[this._length] = t),
              (this._length += 1));
          }),
          (ShapeCollection.prototype.releaseShapes = function () {
            var t;
            for (t = 0; t < this._length; t += 1)
              shapePool.release(this.shapes[t]);
            this._length = 0;
          }),
          (DashProperty.prototype.getValue = function (t) {
            if (
              (this.elem.globalData.frameId !== this.frameId || t) &&
              ((this.frameId = this.elem.globalData.frameId),
              this.iterateDynamicProperties(),
              (this._mdf = this._mdf || t),
              this._mdf)
            ) {
              var e = 0,
                r = this.dataProps.length;
              for (
                "svg" === this.renderer && (this.dashStr = ""), e = 0;
                e < r;
                e += 1
              )
                "o" !== this.dataProps[e].n
                  ? "svg" === this.renderer
                    ? (this.dashStr += " " + this.dataProps[e].p.v)
                    : (this.dashArray[e] = this.dataProps[e].p.v)
                  : (this.dashoffset[0] = this.dataProps[e].p.v);
            }
          }),
          extendPrototype([DynamicPropertyContainer], DashProperty),
          (GradientProperty.prototype.comparePoints = function (t, e) {
            for (var r = 0, i = this.o.length / 2; r < i; ) {
              if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > 0.01) return !1;
              r += 1;
            }
            return !0;
          }),
          (GradientProperty.prototype.checkCollapsable = function () {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
              for (var t = 0, e = this.data.k.k.length; t < e; ) {
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                  return !1;
                t += 1;
              }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
          }),
          (GradientProperty.prototype.getValue = function (t) {
            if (
              (this.prop.getValue(),
              (this._mdf = !1),
              (this._cmdf = !1),
              (this._omdf = !1),
              this.prop._mdf || t)
            ) {
              var e,
                r,
                i,
                n = 4 * this.data.p;
              for (e = 0; e < n; e += 1)
                ((r = e % 4 == 0 ? 100 : 255),
                  (i = Math.round(this.prop.v[e] * r)),
                  this.c[e] !== i && ((this.c[e] = i), (this._cmdf = !t)));
              if (this.o.length)
                for (n = this.prop.v.length, e = 4 * this.data.p; e < n; e += 1)
                  ((r = e % 2 == 0 ? 100 : 1),
                    (i =
                      e % 2 == 0
                        ? Math.round(100 * this.prop.v[e])
                        : this.prop.v[e]),
                    this.o[e - 4 * this.data.p] !== i &&
                      ((this.o[e - 4 * this.data.p] = i), (this._omdf = !t)));
              this._mdf = !t;
            }
          }),
          extendPrototype([DynamicPropertyContainer], GradientProperty));
        var buildShapeString = function (t, e, r, i) {
            if (0 === e) return "";
            var n,
              a = t.o,
              s = t.i,
              o = t.v,
              h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
            for (n = 1; n < e; n += 1)
              h +=
                " C" +
                i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) +
                " " +
                i.applyToPointStringified(s[n][0], s[n][1]) +
                " " +
                i.applyToPointStringified(o[n][0], o[n][1]);
            return (
              r &&
                e &&
                ((h +=
                  " C" +
                  i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) +
                  " " +
                  i.applyToPointStringified(s[0][0], s[0][1]) +
                  " " +
                  i.applyToPointStringified(o[0][0], o[0][1])),
                (h += "z")),
              h
            );
          },
          audioControllerFactory = (function () {
            function t(t) {
              ((this.audios = []),
                (this.audioFactory = t),
                (this._volume = 1),
                (this._isMuted = !1));
            }
            return (
              (t.prototype = {
                addAudio: function (t) {
                  this.audios.push(t);
                },
                pause: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].pause();
                },
                resume: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].resume();
                },
                setRate: function (t) {
                  var e,
                    r = this.audios.length;
                  for (e = 0; e < r; e += 1) this.audios[e].setRate(t);
                },
                createAudio: function (t) {
                  return this.audioFactory
                    ? this.audioFactory(t)
                    : Howl
                      ? new Howl({ src: [t] })
                      : {
                          isPlaying: !1,
                          play: function () {
                            this.isPlaying = !0;
                          },
                          seek: function () {
                            this.isPlaying = !1;
                          },
                          playing: function () {},
                          rate: function () {},
                          setVolume: function () {},
                        };
                },
                setAudioFactory: function (t) {
                  this.audioFactory = t;
                },
                setVolume: function (t) {
                  ((this._volume = t), this._updateVolume());
                },
                mute: function () {
                  ((this._isMuted = !0), this._updateVolume());
                },
                unmute: function () {
                  ((this._isMuted = !1), this._updateVolume());
                },
                getVolume: function () {
                  return this._volume;
                },
                _updateVolume: function () {
                  var t,
                    e = this.audios.length;
                  for (t = 0; t < e; t += 1)
                    this.audios[t].volume(
                      this._volume * (this._isMuted ? 0 : 1),
                    );
                },
              }),
              function () {
                return new t();
              }
            );
          })(),
          ImagePreloader = (function () {
            var t = (function () {
              var t = createTag("canvas");
              ((t.width = 1), (t.height = 1));
              var e = t.getContext("2d");
              return (
                (e.fillStyle = "rgba(0,0,0,0)"),
                e.fillRect(0, 0, 1, 1),
                t
              );
            })();
            function e() {
              ((this.loadedAssets += 1),
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null));
            }
            function r() {
              ((this.loadedFootagesCount += 1),
                this.loadedAssets === this.totalImages &&
                  this.loadedFootagesCount === this.totalFootages &&
                  this.imagesLoadedCb &&
                  this.imagesLoadedCb(null));
            }
            function i(t, e, r) {
              var i = "";
              if (t.e) i = t.p;
              else if (e) {
                var n = t.p;
                (-1 !== n.indexOf("images/") && (n = n.split("/")[1]),
                  (i = e + n));
              } else ((i = r), (i += t.u ? t.u : ""), (i += t.p));
              return i;
            }
            function n() {
              ((this._imageLoaded = e.bind(this)),
                (this._footageLoaded = r.bind(this)),
                (this.testImageLoaded = function (t) {
                  var e = 0,
                    r = setInterval(
                      function () {
                        ((t.getBBox().width || e > 500) &&
                          (this._imageLoaded(), clearInterval(r)),
                          (e += 1));
                      }.bind(this),
                      50,
                    );
                }.bind(this)),
                (this.createFootageData = function (t) {
                  var e = { assetData: t },
                    r = i(t, this.assetsPath, this.path);
                  return (
                    assetLoader.load(
                      r,
                      function (t) {
                        ((e.img = t), this._footageLoaded());
                      }.bind(this),
                      function () {
                        ((e.img = {}), this._footageLoaded());
                      }.bind(this),
                    ),
                    e
                  );
                }.bind(this)),
                (this.assetsPath = ""),
                (this.path = ""),
                (this.totalImages = 0),
                (this.totalFootages = 0),
                (this.loadedAssets = 0),
                (this.loadedFootagesCount = 0),
                (this.imagesLoadedCb = null),
                (this.images = []));
            }
            return (
              (n.prototype = {
                loadAssets: function (t, e) {
                  var r;
                  this.imagesLoadedCb = e;
                  var i = t.length;
                  for (r = 0; r < i; r += 1)
                    t[r].layers ||
                      (t[r].t && "seq" !== t[r].t
                        ? 3 === t[r].t &&
                          ((this.totalFootages += 1),
                          this.images.push(this.createFootageData(t[r])))
                        : ((this.totalImages += 1),
                          this.images.push(this._createImageData(t[r]))));
                },
                setAssetsPath: function (t) {
                  this.assetsPath = t || "";
                },
                setPath: function (t) {
                  this.path = t || "";
                },
                loadedImages: function () {
                  return this.totalImages === this.loadedAssets;
                },
                loadedFootages: function () {
                  return this.totalFootages === this.loadedFootagesCount;
                },
                destroy: function () {
                  ((this.imagesLoadedCb = null), (this.images.length = 0));
                },
                getAsset: function (t) {
                  for (var e = 0, r = this.images.length; e < r; ) {
                    if (this.images[e].assetData === t)
                      return this.images[e].img;
                    e += 1;
                  }
                  return null;
                },
                createImgData: function (e) {
                  var r = i(e, this.assetsPath, this.path),
                    n = createTag("img");
                  ((n.crossOrigin = "anonymous"),
                    n.addEventListener("load", this._imageLoaded, !1),
                    n.addEventListener(
                      "error",
                      function () {
                        ((a.img = t), this._imageLoaded());
                      }.bind(this),
                      !1,
                    ),
                    (n.src = r));
                  var a = { img: n, assetData: e };
                  return a;
                },
                createImageData: function (e) {
                  var r = i(e, this.assetsPath, this.path),
                    n = createNS("image");
                  (isSafari
                    ? this.testImageLoaded(n)
                    : n.addEventListener("load", this._imageLoaded, !1),
                    n.addEventListener(
                      "error",
                      function () {
                        ((a.img = t), this._imageLoaded());
                      }.bind(this),
                      !1,
                    ),
                    n.setAttributeNS("http://www.w3.org/1999/xlink", "href", r),
                    this._elementHelper.append
                      ? this._elementHelper.append(n)
                      : this._elementHelper.appendChild(n));
                  var a = { img: n, assetData: e };
                  return a;
                },
                imageLoaded: e,
                footageLoaded: r,
                setCacheType: function (t, e) {
                  "svg" === t
                    ? ((this._elementHelper = e),
                      (this._createImageData = this.createImageData.bind(this)))
                    : (this._createImageData = this.createImgData.bind(this));
                },
              }),
              n
            );
          })(),
          featureSupport =
            ((ob = { maskType: !0 }),
            (/MSIE 10/i.test(navigator.userAgent) ||
              /MSIE 9/i.test(navigator.userAgent) ||
              /rv:11.0/i.test(navigator.userAgent) ||
              /Edge\/\d./i.test(navigator.userAgent)) &&
              (ob.maskType = !1),
            ob),
          ob,
          filtersFactory = (function () {
            var t = {};
            return (
              (t.createFilter = function (t, e) {
                var r = createNS("filter");
                (r.setAttribute("id", t),
                  !0 !== e &&
                    (r.setAttribute("filterUnits", "objectBoundingBox"),
                    r.setAttribute("x", "0%"),
                    r.setAttribute("y", "0%"),
                    r.setAttribute("width", "100%"),
                    r.setAttribute("height", "100%")));
                return r;
              }),
              (t.createAlphaToLuminanceFilter = function () {
                var t = createNS("feColorMatrix");
                return (
                  t.setAttribute("type", "matrix"),
                  t.setAttribute("color-interpolation-filters", "sRGB"),
                  t.setAttribute(
                    "values",
                    "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1",
                  ),
                  t
                );
              }),
              t
            );
          })(),
          assetLoader = (function () {
            function t(t) {
              return t.response && "object" == typeof t.response
                ? t.response
                : t.response && "string" == typeof t.response
                  ? JSON.parse(t.response)
                  : t.responseText
                    ? JSON.parse(t.responseText)
                    : null;
            }
            return {
              load: function (e, r, i) {
                var n,
                  a = new XMLHttpRequest();
                try {
                  a.responseType = "json";
                } catch (t) {}
                ((a.onreadystatechange = function () {
                  if (4 === a.readyState)
                    if (200 === a.status) ((n = t(a)), r(n));
                    else
                      try {
                        ((n = t(a)), r(n));
                      } catch (t) {
                        i && i(t);
                      }
                }),
                  a.open("GET", e, !0),
                  a.send());
              },
            };
          })();
        function TextAnimatorProperty(t, e, r) {
          ((this._isFirstFrame = !0),
            (this._hasMaskedPath = !1),
            (this._frameId = -1),
            (this._textData = t),
            (this._renderType = e),
            (this._elem = r),
            (this._animatorsData = createSizedArray(this._textData.a.length)),
            (this._pathData = {}),
            (this._moreOptions = { alignment: {} }),
            (this.renderedLetters = []),
            (this.lettersChangedFlag = !1),
            this.initDynamicPropertyContainer(r));
        }
        function TextAnimatorDataProperty(t, e, r) {
          var i = { propType: !1 },
            n = PropertyFactory.getProp,
            a = e.a;
          ((this.a = {
            r: a.r ? n(t, a.r, 0, degToRads, r) : i,
            rx: a.rx ? n(t, a.rx, 0, degToRads, r) : i,
            ry: a.ry ? n(t, a.ry, 0, degToRads, r) : i,
            sk: a.sk ? n(t, a.sk, 0, degToRads, r) : i,
            sa: a.sa ? n(t, a.sa, 0, degToRads, r) : i,
            s: a.s ? n(t, a.s, 1, 0.01, r) : i,
            a: a.a ? n(t, a.a, 1, 0, r) : i,
            o: a.o ? n(t, a.o, 0, 0.01, r) : i,
            p: a.p ? n(t, a.p, 1, 0, r) : i,
            sw: a.sw ? n(t, a.sw, 0, 0, r) : i,
            sc: a.sc ? n(t, a.sc, 1, 0, r) : i,
            fc: a.fc ? n(t, a.fc, 1, 0, r) : i,
            fh: a.fh ? n(t, a.fh, 0, 0, r) : i,
            fs: a.fs ? n(t, a.fs, 0, 0.01, r) : i,
            fb: a.fb ? n(t, a.fb, 0, 0.01, r) : i,
            t: a.t ? n(t, a.t, 0, 0, r) : i,
          }),
            (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r)),
            (this.s.t = e.s.t));
        }
        function LetterProps(t, e, r, i, n, a) {
          ((this.o = t),
            (this.sw = e),
            (this.sc = r),
            (this.fc = i),
            (this.m = n),
            (this.p = a),
            (this._mdf = { o: !0, sw: !!e, sc: !!r, fc: !!i, m: !0, p: !0 }));
        }
        function TextProperty(t, e) {
          ((this._frameId = initialDefaultFrame),
            (this.pv = ""),
            (this.v = ""),
            (this.kf = !1),
            (this._isFirstFrame = !0),
            (this._mdf = !1),
            (this.data = e),
            (this.elem = t),
            (this.comp = this.elem.comp),
            (this.keysIndex = 0),
            (this.canResize = !1),
            (this.minimumFontSize = 1),
            (this.effectsSequence = []),
            (this.currentData = {
              ascent: 0,
              boxWidth: this.defaultBoxWidth,
              f: "",
              fStyle: "",
              fWeight: "",
              fc: "",
              j: "",
              justifyOffset: "",
              l: [],
              lh: 0,
              lineWidths: [],
              ls: "",
              of: "",
              s: "",
              sc: "",
              sw: 0,
              t: 0,
              tr: 0,
              sz: 0,
              ps: null,
              fillColorAnim: !1,
              strokeColorAnim: !1,
              strokeWidthAnim: !1,
              yOffset: 0,
              finalSize: 0,
              finalText: [],
              finalLineHeight: 0,
              __complete: !1,
            }),
            this.copyData(this.currentData, this.data.d.k[0].s),
            this.searchProperty() || this.completeTextData(this.currentData));
        }
        ((TextAnimatorProperty.prototype.searchProperties = function () {
          var t,
            e,
            r = this._textData.a.length,
            i = PropertyFactory.getProp;
          for (t = 0; t < r; t += 1)
            ((e = this._textData.a[t]),
              (this._animatorsData[t] = new TextAnimatorDataProperty(
                this._elem,
                e,
                this,
              )));
          (this._textData.p && "m" in this._textData.p
            ? ((this._pathData = {
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: this._textData.p.r,
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
              }),
              (this._hasMaskedPath = !0))
            : (this._hasMaskedPath = !1),
            (this._moreOptions.alignment = i(
              this._elem,
              this._textData.m.a,
              1,
              0,
              this,
            )));
        }),
          (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
            if (
              ((this.lettersChangedFlag = e),
              this._mdf ||
                this._isFirstFrame ||
                e ||
                (this._hasMaskedPath && this._pathData.m._mdf))
            ) {
              this._isFirstFrame = !1;
              var r,
                i,
                n,
                a,
                s,
                o,
                h,
                l,
                p,
                c,
                f,
                u,
                m,
                d,
                y,
                g,
                v,
                b,
                x,
                E = this._moreOptions.alignment.v,
                P = this._animatorsData,
                S = this._textData,
                _ = this.mHelper,
                w = this._renderType,
                A = this.renderedLetters.length,
                C = t.l;
              if (this._hasMaskedPath) {
                if (
                  ((x = this._pathData.m),
                  !this._pathData.n || this._pathData._mdf)
                ) {
                  var k,
                    T = x.v;
                  for (
                    this._pathData.r && (T = T.reverse()),
                      s = { tLength: 0, segments: [] },
                      a = T._length - 1,
                      g = 0,
                      n = 0;
                    n < a;
                    n += 1
                  )
                    ((k = bez.buildBezierData(
                      T.v[n],
                      T.v[n + 1],
                      [T.o[n][0] - T.v[n][0], T.o[n][1] - T.v[n][1]],
                      [
                        T.i[n + 1][0] - T.v[n + 1][0],
                        T.i[n + 1][1] - T.v[n + 1][1],
                      ],
                    )),
                      (s.tLength += k.segmentLength),
                      s.segments.push(k),
                      (g += k.segmentLength));
                  ((n = a),
                    x.v.c &&
                      ((k = bez.buildBezierData(
                        T.v[n],
                        T.v[0],
                        [T.o[n][0] - T.v[n][0], T.o[n][1] - T.v[n][1]],
                        [T.i[0][0] - T.v[0][0], T.i[0][1] - T.v[0][1]],
                      )),
                      (s.tLength += k.segmentLength),
                      s.segments.push(k),
                      (g += k.segmentLength)),
                    (this._pathData.pi = s));
                }
                if (
                  ((s = this._pathData.pi),
                  (o = this._pathData.f.v),
                  (f = 0),
                  (c = 1),
                  (l = 0),
                  (p = !0),
                  (d = s.segments),
                  o < 0 && x.v.c)
                )
                  for (
                    s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength),
                      c = (m = d[(f = d.length - 1)].points).length - 1;
                    o < 0;

                  )
                    ((o += m[c].partialLength),
                      (c -= 1) < 0 &&
                        (c = (m = d[(f -= 1)].points).length - 1));
                ((u = (m = d[f].points)[c - 1]),
                  (y = (h = m[c]).partialLength));
              }
              ((a = C.length), (r = 0), (i = 0));
              var D,
                M,
                F,
                I,
                R,
                V = 1.2 * t.finalSize * 0.714,
                B = !0;
              F = P.length;
              var O,
                L,
                z,
                G,
                N,
                j,
                H,
                q,
                W,
                $,
                Y,
                X,
                U = -1,
                K = o,
                Z = f,
                J = c,
                Q = -1,
                tt = "",
                et = this.defaultPropsArray;
              if (2 === t.j || 1 === t.j) {
                var rt = 0,
                  it = 0,
                  nt = 2 === t.j ? -0.5 : -1,
                  at = 0,
                  st = !0;
                for (n = 0; n < a; n += 1)
                  if (C[n].n) {
                    for (rt && (rt += it); at < n; )
                      ((C[at].animatorJustifyOffset = rt), (at += 1));
                    ((rt = 0), (st = !0));
                  } else {
                    for (M = 0; M < F; M += 1)
                      (D = P[M].a).t.propType &&
                        (st && 2 === t.j && (it += D.t.v * nt),
                        (R = P[M].s.getMult(
                          C[n].anIndexes[M],
                          S.a[M].s.totalChars,
                        )).length
                          ? (rt += D.t.v * R[0] * nt)
                          : (rt += D.t.v * R * nt));
                    st = !1;
                  }
                for (rt && (rt += it); at < n; )
                  ((C[at].animatorJustifyOffset = rt), (at += 1));
              }
              for (n = 0; n < a; n += 1) {
                if ((_.reset(), (G = 1), C[n].n))
                  ((r = 0),
                    (i += t.yOffset),
                    (i += B ? 1 : 0),
                    (o = K),
                    (B = !1),
                    this._hasMaskedPath &&
                      ((c = J),
                      (u = (m = d[(f = Z)].points)[c - 1]),
                      (y = (h = m[c]).partialLength),
                      (l = 0)),
                    (tt = ""),
                    (Y = ""),
                    (W = ""),
                    (X = ""),
                    (et = this.defaultPropsArray));
                else {
                  if (this._hasMaskedPath) {
                    if (Q !== C[n].line) {
                      switch (t.j) {
                        case 1:
                          o += g - t.lineWidths[C[n].line];
                          break;
                        case 2:
                          o += (g - t.lineWidths[C[n].line]) / 2;
                      }
                      Q = C[n].line;
                    }
                    (U !== C[n].ind &&
                      (C[U] && (o += C[U].extra),
                      (o += C[n].an / 2),
                      (U = C[n].ind)),
                      (o += E[0] * C[n].an * 0.005));
                    var ot = 0;
                    for (M = 0; M < F; M += 1)
                      ((D = P[M].a).p.propType &&
                        ((R = P[M].s.getMult(
                          C[n].anIndexes[M],
                          S.a[M].s.totalChars,
                        )).length
                          ? (ot += D.p.v[0] * R[0])
                          : (ot += D.p.v[0] * R)),
                        D.a.propType &&
                          ((R = P[M].s.getMult(
                            C[n].anIndexes[M],
                            S.a[M].s.totalChars,
                          )).length
                            ? (ot += D.a.v[0] * R[0])
                            : (ot += D.a.v[0] * R)));
                    for (p = !0; p; )
                      l + y >= o + ot || !m
                        ? ((v = (o + ot - l) / h.partialLength),
                          (L = u.point[0] + (h.point[0] - u.point[0]) * v),
                          (z = u.point[1] + (h.point[1] - u.point[1]) * v),
                          _.translate(
                            -E[0] * C[n].an * 0.005,
                            -E[1] * V * 0.01,
                          ),
                          (p = !1))
                        : m &&
                          ((l += h.partialLength),
                          (c += 1) >= m.length &&
                            ((c = 0),
                            d[(f += 1)]
                              ? (m = d[f].points)
                              : x.v.c
                                ? ((c = 0), (m = d[(f = 0)].points))
                                : ((l -= h.partialLength), (m = null))),
                          m && ((u = h), (y = (h = m[c]).partialLength)));
                    ((O = C[n].an / 2 - C[n].add), _.translate(-O, 0, 0));
                  } else
                    ((O = C[n].an / 2 - C[n].add),
                      _.translate(-O, 0, 0),
                      _.translate(
                        -E[0] * C[n].an * 0.005,
                        -E[1] * V * 0.01,
                        0,
                      ));
                  for (M = 0; M < F; M += 1)
                    (D = P[M].a).t.propType &&
                      ((R = P[M].s.getMult(
                        C[n].anIndexes[M],
                        S.a[M].s.totalChars,
                      )),
                      (0 === r && 0 === t.j) ||
                        (this._hasMaskedPath
                          ? R.length
                            ? (o += D.t.v * R[0])
                            : (o += D.t.v * R)
                          : R.length
                            ? (r += D.t.v * R[0])
                            : (r += D.t.v * R)));
                  for (
                    t.strokeWidthAnim && (j = t.sw || 0),
                      t.strokeColorAnim &&
                        (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                      t.fillColorAnim &&
                        t.fc &&
                        (H = [t.fc[0], t.fc[1], t.fc[2]]),
                      M = 0;
                    M < F;
                    M += 1
                  )
                    (D = P[M].a).a.propType &&
                      ((R = P[M].s.getMult(
                        C[n].anIndexes[M],
                        S.a[M].s.totalChars,
                      )).length
                        ? _.translate(
                            -D.a.v[0] * R[0],
                            -D.a.v[1] * R[1],
                            D.a.v[2] * R[2],
                          )
                        : _.translate(
                            -D.a.v[0] * R,
                            -D.a.v[1] * R,
                            D.a.v[2] * R,
                          ));
                  for (M = 0; M < F; M += 1)
                    (D = P[M].a).s.propType &&
                      ((R = P[M].s.getMult(
                        C[n].anIndexes[M],
                        S.a[M].s.totalChars,
                      )).length
                        ? _.scale(
                            1 + (D.s.v[0] - 1) * R[0],
                            1 + (D.s.v[1] - 1) * R[1],
                            1,
                          )
                        : _.scale(
                            1 + (D.s.v[0] - 1) * R,
                            1 + (D.s.v[1] - 1) * R,
                            1,
                          ));
                  for (M = 0; M < F; M += 1) {
                    if (
                      ((D = P[M].a),
                      (R = P[M].s.getMult(
                        C[n].anIndexes[M],
                        S.a[M].s.totalChars,
                      )),
                      D.sk.propType &&
                        (R.length
                          ? _.skewFromAxis(-D.sk.v * R[0], D.sa.v * R[1])
                          : _.skewFromAxis(-D.sk.v * R, D.sa.v * R)),
                      D.r.propType &&
                        (R.length
                          ? _.rotateZ(-D.r.v * R[2])
                          : _.rotateZ(-D.r.v * R)),
                      D.ry.propType &&
                        (R.length
                          ? _.rotateY(D.ry.v * R[1])
                          : _.rotateY(D.ry.v * R)),
                      D.rx.propType &&
                        (R.length
                          ? _.rotateX(D.rx.v * R[0])
                          : _.rotateX(D.rx.v * R)),
                      D.o.propType &&
                        (R.length
                          ? (G += (D.o.v * R[0] - G) * R[0])
                          : (G += (D.o.v * R - G) * R)),
                      t.strokeWidthAnim &&
                        D.sw.propType &&
                        (R.length ? (j += D.sw.v * R[0]) : (j += D.sw.v * R)),
                      t.strokeColorAnim && D.sc.propType)
                    )
                      for (q = 0; q < 3; q += 1)
                        R.length
                          ? (N[q] += (D.sc.v[q] - N[q]) * R[0])
                          : (N[q] += (D.sc.v[q] - N[q]) * R);
                    if (t.fillColorAnim && t.fc) {
                      if (D.fc.propType)
                        for (q = 0; q < 3; q += 1)
                          R.length
                            ? (H[q] += (D.fc.v[q] - H[q]) * R[0])
                            : (H[q] += (D.fc.v[q] - H[q]) * R);
                      (D.fh.propType &&
                        (H = R.length
                          ? addHueToRGB(H, D.fh.v * R[0])
                          : addHueToRGB(H, D.fh.v * R)),
                        D.fs.propType &&
                          (H = R.length
                            ? addSaturationToRGB(H, D.fs.v * R[0])
                            : addSaturationToRGB(H, D.fs.v * R)),
                        D.fb.propType &&
                          (H = R.length
                            ? addBrightnessToRGB(H, D.fb.v * R[0])
                            : addBrightnessToRGB(H, D.fb.v * R)));
                    }
                  }
                  for (M = 0; M < F; M += 1)
                    (D = P[M].a).p.propType &&
                      ((R = P[M].s.getMult(
                        C[n].anIndexes[M],
                        S.a[M].s.totalChars,
                      )),
                      this._hasMaskedPath
                        ? R.length
                          ? _.translate(0, D.p.v[1] * R[0], -D.p.v[2] * R[1])
                          : _.translate(0, D.p.v[1] * R, -D.p.v[2] * R)
                        : R.length
                          ? _.translate(
                              D.p.v[0] * R[0],
                              D.p.v[1] * R[1],
                              -D.p.v[2] * R[2],
                            )
                          : _.translate(
                              D.p.v[0] * R,
                              D.p.v[1] * R,
                              -D.p.v[2] * R,
                            ));
                  if (
                    (t.strokeWidthAnim && (W = j < 0 ? 0 : j),
                    t.strokeColorAnim &&
                      ($ =
                        "rgb(" +
                        Math.round(255 * N[0]) +
                        "," +
                        Math.round(255 * N[1]) +
                        "," +
                        Math.round(255 * N[2]) +
                        ")"),
                    t.fillColorAnim &&
                      t.fc &&
                      (Y =
                        "rgb(" +
                        Math.round(255 * H[0]) +
                        "," +
                        Math.round(255 * H[1]) +
                        "," +
                        Math.round(255 * H[2]) +
                        ")"),
                    this._hasMaskedPath)
                  ) {
                    if (
                      (_.translate(0, -t.ls),
                      _.translate(0, E[1] * V * 0.01 + i, 0),
                      S.p.p)
                    ) {
                      b = (h.point[1] - u.point[1]) / (h.point[0] - u.point[0]);
                      var ht = (180 * Math.atan(b)) / Math.PI;
                      (h.point[0] < u.point[0] && (ht += 180),
                        _.rotate((-ht * Math.PI) / 180));
                    }
                    (_.translate(L, z, 0),
                      (o -= E[0] * C[n].an * 0.005),
                      C[n + 1] &&
                        U !== C[n + 1].ind &&
                        ((o += C[n].an / 2),
                        (o += 0.001 * t.tr * t.finalSize)));
                  } else {
                    switch (
                      (_.translate(r, i, 0),
                      t.ps && _.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                      t.j)
                    ) {
                      case 1:
                        _.translate(
                          C[n].animatorJustifyOffset +
                            t.justifyOffset +
                            (t.boxWidth - t.lineWidths[C[n].line]),
                          0,
                          0,
                        );
                        break;
                      case 2:
                        _.translate(
                          C[n].animatorJustifyOffset +
                            t.justifyOffset +
                            (t.boxWidth - t.lineWidths[C[n].line]) / 2,
                          0,
                          0,
                        );
                    }
                    (_.translate(0, -t.ls),
                      _.translate(O, 0, 0),
                      _.translate(E[0] * C[n].an * 0.005, E[1] * V * 0.01, 0),
                      (r += C[n].l + 0.001 * t.tr * t.finalSize));
                  }
                  ("html" === w
                    ? (tt = _.toCSS())
                    : "svg" === w
                      ? (tt = _.to2dCSS())
                      : (et = [
                          _.props[0],
                          _.props[1],
                          _.props[2],
                          _.props[3],
                          _.props[4],
                          _.props[5],
                          _.props[6],
                          _.props[7],
                          _.props[8],
                          _.props[9],
                          _.props[10],
                          _.props[11],
                          _.props[12],
                          _.props[13],
                          _.props[14],
                          _.props[15],
                        ]),
                    (X = G));
                }
                A <= n
                  ? ((I = new LetterProps(X, W, $, Y, tt, et)),
                    this.renderedLetters.push(I),
                    (A += 1),
                    (this.lettersChangedFlag = !0))
                  : ((I = this.renderedLetters[n]),
                    (this.lettersChangedFlag =
                      I.update(X, W, $, Y, tt, et) || this.lettersChangedFlag));
              }
            }
          }),
          (TextAnimatorProperty.prototype.getValue = function () {
            this._elem.globalData.frameId !== this._frameId &&
              ((this._frameId = this._elem.globalData.frameId),
              this.iterateDynamicProperties());
          }),
          (TextAnimatorProperty.prototype.mHelper = new Matrix()),
          (TextAnimatorProperty.prototype.defaultPropsArray = []),
          extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
          (LetterProps.prototype.update = function (t, e, r, i, n, a) {
            ((this._mdf.o = !1),
              (this._mdf.sw = !1),
              (this._mdf.sc = !1),
              (this._mdf.fc = !1),
              (this._mdf.m = !1),
              (this._mdf.p = !1));
            var s = !1;
            return (
              this.o !== t && ((this.o = t), (this._mdf.o = !0), (s = !0)),
              this.sw !== e && ((this.sw = e), (this._mdf.sw = !0), (s = !0)),
              this.sc !== r && ((this.sc = r), (this._mdf.sc = !0), (s = !0)),
              this.fc !== i && ((this.fc = i), (this._mdf.fc = !0), (s = !0)),
              this.m !== n && ((this.m = n), (this._mdf.m = !0), (s = !0)),
              !a.length ||
                (this.p[0] === a[0] &&
                  this.p[1] === a[1] &&
                  this.p[4] === a[4] &&
                  this.p[5] === a[5] &&
                  this.p[12] === a[12] &&
                  this.p[13] === a[13]) ||
                ((this.p = a), (this._mdf.p = !0), (s = !0)),
              s
            );
          }),
          (TextProperty.prototype.defaultBoxWidth = [0, 0]),
          (TextProperty.prototype.copyData = function (t, e) {
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t;
          }),
          (TextProperty.prototype.setCurrentData = function (t) {
            (t.__complete || this.completeTextData(t),
              (this.currentData = t),
              (this.currentData.boxWidth =
                this.currentData.boxWidth || this.defaultBoxWidth),
              (this._mdf = !0));
          }),
          (TextProperty.prototype.searchProperty = function () {
            return this.searchKeyframes();
          }),
          (TextProperty.prototype.searchKeyframes = function () {
            return (
              (this.kf = this.data.d.k.length > 1),
              this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
              this.kf
            );
          }),
          (TextProperty.prototype.addEffect = function (t) {
            (this.effectsSequence.push(t), this.elem.addDynamicProperty(this));
          }),
          (TextProperty.prototype.getValue = function (t) {
            if (
              (this.elem.globalData.frameId !== this.frameId &&
                this.effectsSequence.length) ||
              t
            ) {
              this.currentData.t = this.data.d.k[this.keysIndex].s.t;
              var e = this.currentData,
                r = this.keysIndex;
              if (this.lock) this.setCurrentData(this.currentData);
              else {
                var i;
                ((this.lock = !0), (this._mdf = !1));
                var n = this.effectsSequence.length,
                  a = t || this.data.d.k[this.keysIndex].s;
                for (i = 0; i < n; i += 1)
                  a =
                    r !== this.keysIndex
                      ? this.effectsSequence[i](a, a.t)
                      : this.effectsSequence[i](this.currentData, a.t);
                (e !== a && this.setCurrentData(a),
                  (this.v = this.currentData),
                  (this.pv = this.v),
                  (this.lock = !1),
                  (this.frameId = this.elem.globalData.frameId));
              }
            }
          }),
          (TextProperty.prototype.getKeyframeValue = function () {
            for (
              var t = this.data.d.k,
                e = this.elem.comp.renderedFrame,
                r = 0,
                i = t.length;
              r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);

            )
              r += 1;
            return (
              this.keysIndex !== r && (this.keysIndex = r),
              this.data.d.k[this.keysIndex].s
            );
          }),
          (TextProperty.prototype.buildFinalText = function (t) {
            for (
              var e,
                r = FontManager.getCombinedCharacterCodes(),
                i = [],
                n = 0,
                a = t.length;
              n < a;

            )
              ((e = t.charCodeAt(n)),
                -1 !== r.indexOf(e)
                  ? (i[i.length - 1] += t.charAt(n))
                  : e >= 55296 &&
                      e <= 56319 &&
                      (e = t.charCodeAt(n + 1)) >= 56320 &&
                      e <= 57343
                    ? (i.push(t.substr(n, 2)), (n += 1))
                    : i.push(t.charAt(n)),
                (n += 1));
            return i;
          }),
          (TextProperty.prototype.completeTextData = function (t) {
            t.__complete = !0;
            var e,
              r,
              i,
              n,
              a,
              s,
              o,
              h = this.elem.globalData.fontManager,
              l = this.data,
              p = [],
              c = 0,
              f = l.m.g,
              u = 0,
              m = 0,
              d = 0,
              y = [],
              g = 0,
              v = 0,
              b = h.getFontByName(t.f),
              x = 0,
              E = getFontProperties(b);
            ((t.fWeight = E.weight),
              (t.fStyle = E.style),
              (t.finalSize = t.s),
              (t.finalText = this.buildFinalText(t.t)),
              (r = t.finalText.length),
              (t.finalLineHeight = t.lh));
            var P,
              S = (t.tr / 1e3) * t.finalSize;
            if (t.sz)
              for (var _, w, A = !0, C = t.sz[0], k = t.sz[1]; A; ) {
                ((_ = 0),
                  (g = 0),
                  (r = (w = this.buildFinalText(t.t)).length),
                  (S = (t.tr / 1e3) * t.finalSize));
                var T = -1;
                for (e = 0; e < r; e += 1)
                  ((P = w[e].charCodeAt(0)),
                    (i = !1),
                    " " === w[e]
                      ? (T = e)
                      : (13 !== P && 3 !== P) ||
                        ((g = 0),
                        (i = !0),
                        (_ += t.finalLineHeight || 1.2 * t.finalSize)),
                    h.chars
                      ? ((o = h.getCharData(w[e], b.fStyle, b.fFamily)),
                        (x = i ? 0 : (o.w * t.finalSize) / 100))
                      : (x = h.measureText(w[e], t.f, t.finalSize)),
                    g + x > C && " " !== w[e]
                      ? (-1 === T ? (r += 1) : (e = T),
                        (_ += t.finalLineHeight || 1.2 * t.finalSize),
                        w.splice(e, T === e ? 1 : 0, "\r"),
                        (T = -1),
                        (g = 0))
                      : ((g += x), (g += S)));
                ((_ += (b.ascent * t.finalSize) / 100),
                  this.canResize && t.finalSize > this.minimumFontSize && k < _
                    ? ((t.finalSize -= 1),
                      (t.finalLineHeight = (t.finalSize * t.lh) / t.s))
                    : ((t.finalText = w), (r = t.finalText.length), (A = !1)));
              }
            ((g = -S), (x = 0));
            var D,
              M = 0;
            for (e = 0; e < r; e += 1)
              if (
                ((i = !1),
                13 === (P = (D = t.finalText[e]).charCodeAt(0)) || 3 === P
                  ? ((M = 0),
                    y.push(g),
                    (v = g > v ? g : v),
                    (g = -2 * S),
                    (n = ""),
                    (i = !0),
                    (d += 1))
                  : (n = D),
                h.chars
                  ? ((o = h.getCharData(
                      D,
                      b.fStyle,
                      h.getFontByName(t.f).fFamily,
                    )),
                    (x = i ? 0 : (o.w * t.finalSize) / 100))
                  : (x = h.measureText(n, t.f, t.finalSize)),
                " " === D ? (M += x + S) : ((g += x + S + M), (M = 0)),
                p.push({
                  l: x,
                  an: x,
                  add: u,
                  n: i,
                  anIndexes: [],
                  val: n,
                  line: d,
                  animatorJustifyOffset: 0,
                }),
                2 == f)
              ) {
                if (((u += x), "" === n || " " === n || e === r - 1)) {
                  for (("" !== n && " " !== n) || (u -= x); m <= e; )
                    ((p[m].an = u), (p[m].ind = c), (p[m].extra = x), (m += 1));
                  ((c += 1), (u = 0));
                }
              } else if (3 == f) {
                if (((u += x), "" === n || e === r - 1)) {
                  for ("" === n && (u -= x); m <= e; )
                    ((p[m].an = u), (p[m].ind = c), (p[m].extra = x), (m += 1));
                  ((u = 0), (c += 1));
                }
              } else ((p[c].ind = c), (p[c].extra = 0), (c += 1));
            if (((t.l = p), (v = g > v ? g : v), y.push(g), t.sz))
              ((t.boxWidth = t.sz[0]), (t.justifyOffset = 0));
            else
              switch (((t.boxWidth = v), t.j)) {
                case 1:
                  t.justifyOffset = -t.boxWidth;
                  break;
                case 2:
                  t.justifyOffset = -t.boxWidth / 2;
                  break;
                default:
                  t.justifyOffset = 0;
              }
            t.lineWidths = y;
            var F,
              I,
              R,
              V,
              B = l.a;
            s = B.length;
            var O = [];
            for (a = 0; a < s; a += 1) {
              for (
                (F = B[a]).a.sc && (t.strokeColorAnim = !0),
                  F.a.sw && (t.strokeWidthAnim = !0),
                  (F.a.fc || F.a.fh || F.a.fs || F.a.fb) &&
                    (t.fillColorAnim = !0),
                  V = 0,
                  R = F.s.b,
                  e = 0;
                e < r;
                e += 1
              )
                (((I = p[e]).anIndexes[a] = V),
                  ((1 == R && "" !== I.val) ||
                    (2 == R && "" !== I.val && " " !== I.val) ||
                    (3 == R && (I.n || " " == I.val || e == r - 1)) ||
                    (4 == R && (I.n || e == r - 1))) &&
                    (1 === F.s.rn && O.push(V), (V += 1)));
              l.a[a].s.totalChars = V;
              var L,
                z = -1;
              if (1 === F.s.rn)
                for (e = 0; e < r; e += 1)
                  (z != (I = p[e]).anIndexes[a] &&
                    ((z = I.anIndexes[a]),
                    (L = O.splice(Math.floor(Math.random() * O.length), 1)[0])),
                    (I.anIndexes[a] = L));
            }
            ((t.yOffset = t.finalLineHeight || 1.2 * t.finalSize),
              (t.ls = t.ls || 0),
              (t.ascent = (b.ascent * t.finalSize) / 100));
          }),
          (TextProperty.prototype.updateDocumentData = function (t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var r = this.copyData({}, this.data.d.k[e].s);
            ((r = this.copyData(r, t)),
              (this.data.d.k[e].s = r),
              this.recalculate(e),
              this.elem.addDynamicProperty(this));
          }),
          (TextProperty.prototype.recalculate = function (t) {
            var e = this.data.d.k[t].s;
            ((e.__complete = !1),
              (this.keysIndex = 0),
              (this._isFirstFrame = !0),
              this.getValue(e));
          }),
          (TextProperty.prototype.canResizeFont = function (t) {
            ((this.canResize = t),
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this));
          }),
          (TextProperty.prototype.setMinimumFontSize = function (t) {
            ((this.minimumFontSize = Math.floor(t) || 1),
              this.recalculate(this.keysIndex),
              this.elem.addDynamicProperty(this));
          }));
        var TextSelectorProp = (function () {
            var t = Math.max,
              e = Math.min,
              r = Math.floor;
            function i(t, e) {
              ((this._currentTextLength = -1),
                (this.k = !1),
                (this.data = e),
                (this.elem = t),
                (this.comp = t.comp),
                (this.finalS = 0),
                (this.finalE = 0),
                this.initDynamicPropertyContainer(t),
                (this.s = PropertyFactory.getProp(
                  t,
                  e.s || { k: 0 },
                  0,
                  0,
                  this,
                )),
                (this.e =
                  "e" in e
                    ? PropertyFactory.getProp(t, e.e, 0, 0, this)
                    : { v: 100 }),
                (this.o = PropertyFactory.getProp(
                  t,
                  e.o || { k: 0 },
                  0,
                  0,
                  this,
                )),
                (this.xe = PropertyFactory.getProp(
                  t,
                  e.xe || { k: 0 },
                  0,
                  0,
                  this,
                )),
                (this.ne = PropertyFactory.getProp(
                  t,
                  e.ne || { k: 0 },
                  0,
                  0,
                  this,
                )),
                (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
                this.dynamicProperties.length || this.getValue());
            }
            return (
              (i.prototype = {
                getMult: function (i) {
                  this._currentTextLength !==
                    this.elem.textProperty.currentData.l.length &&
                    this.getValue();
                  var n = 0,
                    a = 0,
                    s = 1,
                    o = 1;
                  (this.ne.v > 0
                    ? (n = this.ne.v / 100)
                    : (a = -this.ne.v / 100),
                    this.xe.v > 0
                      ? (s = 1 - this.xe.v / 100)
                      : (o = 1 + this.xe.v / 100));
                  var h = BezierFactory.getBezierEasing(n, a, s, o).get,
                    l = 0,
                    p = this.finalS,
                    c = this.finalE,
                    f = this.data.sh;
                  if (2 === f)
                    l = h(
                      (l =
                        c === p
                          ? i >= c
                            ? 1
                            : 0
                          : t(0, e(0.5 / (c - p) + (i - p) / (c - p), 1))),
                    );
                  else if (3 === f)
                    l = h(
                      (l =
                        c === p
                          ? i >= c
                            ? 0
                            : 1
                          : 1 - t(0, e(0.5 / (c - p) + (i - p) / (c - p), 1))),
                    );
                  else if (4 === f)
                    (c === p
                      ? (l = 0)
                      : (l = t(0, e(0.5 / (c - p) + (i - p) / (c - p), 1))) <
                          0.5
                        ? (l *= 2)
                        : (l = 1 - 2 * (l - 0.5)),
                      (l = h(l)));
                  else if (5 === f) {
                    if (c === p) l = 0;
                    else {
                      var u = c - p,
                        m = -u / 2 + (i = e(t(0, i + 0.5 - p), c - p)),
                        d = u / 2;
                      l = Math.sqrt(1 - (m * m) / (d * d));
                    }
                    l = h(l);
                  } else
                    6 === f
                      ? (c === p
                          ? (l = 0)
                          : ((i = e(t(0, i + 0.5 - p), c - p)),
                            (l =
                              (1 +
                                Math.cos(
                                  Math.PI + (2 * Math.PI * i) / (c - p),
                                )) /
                              2)),
                        (l = h(l)))
                      : (i >= r(p) &&
                          (l = t(
                            0,
                            e(i - p < 0 ? e(c, 1) - (p - i) : c - i, 1),
                          )),
                        (l = h(l)));
                  return l * this.a.v;
                },
                getValue: function (t) {
                  (this.iterateDynamicProperties(),
                    (this._mdf = t || this._mdf),
                    (this._currentTextLength =
                      this.elem.textProperty.currentData.l.length || 0),
                    t &&
                      2 === this.data.r &&
                      (this.e.v = this._currentTextLength));
                  var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                    r = this.o.v / e,
                    i = this.s.v / e + r,
                    n = this.e.v / e + r;
                  if (i > n) {
                    var a = i;
                    ((i = n), (n = a));
                  }
                  ((this.finalS = i), (this.finalE = n));
                },
              }),
              extendPrototype([DynamicPropertyContainer], i),
              {
                getTextSelectorProp: function (t, e, r) {
                  return new i(t, e, r);
                },
              }
            );
          })(),
          poolFactory = function (t, e, r) {
            var i = 0,
              n = t,
              a = createSizedArray(n);
            return {
              newElement: function () {
                return i ? a[(i -= 1)] : e();
              },
              release: function (t) {
                (i === n && ((a = pooling.double(a)), (n *= 2)),
                  r && r(t),
                  (a[i] = t),
                  (i += 1));
              },
            };
          },
          pooling = (function () {
            return {
              double: function (t) {
                return t.concat(createSizedArray(t.length));
              },
            };
          })(),
          pointPool = (function () {
            return poolFactory(8, function () {
              return createTypedArray("float32", 2);
            });
          })(),
          shapePool = (function () {
            var t = poolFactory(
              4,
              function () {
                return new ShapePath();
              },
              function (t) {
                var e,
                  r = t._length;
                for (e = 0; e < r; e += 1)
                  (pointPool.release(t.v[e]),
                    pointPool.release(t.i[e]),
                    pointPool.release(t.o[e]),
                    (t.v[e] = null),
                    (t.i[e] = null),
                    (t.o[e] = null));
                ((t._length = 0), (t.c = !1));
              },
            );
            return (
              (t.clone = function (e) {
                var r,
                  i = t.newElement(),
                  n = void 0 === e._length ? e.v.length : e._length;
                for (i.setLength(n), i.c = e.c, r = 0; r < n; r += 1)
                  i.setTripleAt(
                    e.v[r][0],
                    e.v[r][1],
                    e.o[r][0],
                    e.o[r][1],
                    e.i[r][0],
                    e.i[r][1],
                    r,
                  );
                return i;
              }),
              t
            );
          })(),
          shapeCollectionPool = (function () {
            var t = {
                newShapeCollection: function () {
                  var t;
                  t = e ? i[(e -= 1)] : new ShapeCollection();
                  return t;
                },
                release: function (t) {
                  var n,
                    a = t._length;
                  for (n = 0; n < a; n += 1) shapePool.release(t.shapes[n]);
                  ((t._length = 0),
                    e === r && ((i = pooling.double(i)), (r *= 2)));
                  ((i[e] = t), (e += 1));
                },
              },
              e = 0,
              r = 4,
              i = createSizedArray(r);
            return t;
          })(),
          segmentsLengthPool = (function () {
            return poolFactory(
              8,
              function () {
                return { lengths: [], totalLength: 0 };
              },
              function (t) {
                var e,
                  r = t.lengths.length;
                for (e = 0; e < r; e += 1)
                  bezierLengthPool.release(t.lengths[e]);
                t.lengths.length = 0;
              },
            );
          })(),
          bezierLengthPool = (function () {
            return poolFactory(8, function () {
              return {
                addedLength: 0,
                percents: createTypedArray("float32", defaultCurveSegments),
                lengths: createTypedArray("float32", defaultCurveSegments),
              };
            });
          })(),
          markerParser = (function () {
            function t(t) {
              for (
                var e, r = t.split("\r\n"), i = {}, n = 0, a = 0;
                a < r.length;
                a += 1
              )
                2 === (e = r[a].split(":")).length &&
                  ((i[e[0]] = e[1].trim()), (n += 1));
              if (0 === n) throw new Error();
              return i;
            }
            return function (e) {
              for (var r = [], i = 0; i < e.length; i += 1) {
                var n = e[i],
                  a = { time: n.tm, duration: n.dr };
                try {
                  a.payload = JSON.parse(e[i].cm);
                } catch (r) {
                  try {
                    a.payload = t(e[i].cm);
                  } catch (t) {
                    a.payload = { name: e[i] };
                  }
                }
                r.push(a);
              }
              return r;
            };
          })();
        function BaseRenderer() {}
        function SVGRenderer(t, e) {
          ((this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.svgElement = createNS("svg")));
          var r = "";
          if (e && e.title) {
            var i = createNS("title"),
              n = createElementID();
            (i.setAttribute("id", n),
              (i.textContent = e.title),
              this.svgElement.appendChild(i),
              (r += n));
          }
          if (e && e.description) {
            var a = createNS("desc"),
              s = createElementID();
            (a.setAttribute("id", s),
              (a.textContent = e.description),
              this.svgElement.appendChild(a),
              (r += " " + s));
          }
          r && this.svgElement.setAttribute("aria-labelledby", r);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var h = createNS("g");
          (this.svgElement.appendChild(h),
            (this.layerElement = h),
            (this.renderConfig = {
              preserveAspectRatio:
                (e && e.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              progressiveLoad: (e && e.progressiveLoad) || !1,
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              viewBoxOnly: (e && e.viewBoxOnly) || !1,
              viewBoxSize: (e && e.viewBoxSize) || !1,
              className: (e && e.className) || "",
              id: (e && e.id) || "",
              focusable: e && e.focusable,
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || "100%",
                height: (e && e.filterSize && e.filterSize.height) || "100%",
                x: (e && e.filterSize && e.filterSize.x) || "0%",
                y: (e && e.filterSize && e.filterSize.y) || "0%",
              },
            }),
            (this.globalData = {
              _mdf: !1,
              frameNum: -1,
              defs: o,
              renderConfig: this.renderConfig,
            }),
            (this.elements = []),
            (this.pendingElements = []),
            (this.destroyed = !1),
            (this.rendererType = "svg"));
        }
        function CanvasRenderer(t, e) {
          ((this.animationItem = t),
            (this.renderConfig = {
              clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
              context: (e && e.context) || null,
              progressiveLoad: (e && e.progressiveLoad) || !1,
              preserveAspectRatio:
                (e && e.preserveAspectRatio) || "xMidYMid meet",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              className: (e && e.className) || "",
              id: (e && e.id) || "",
            }),
            (this.renderConfig.dpr = (e && e.dpr) || 1),
            this.animationItem.wrapper &&
              (this.renderConfig.dpr =
                (e && e.dpr) || window.devicePixelRatio || 1),
            (this.renderedFrame = -1),
            (this.globalData = {
              frameNum: -1,
              _mdf: !1,
              renderConfig: this.renderConfig,
              currentGlobalAlpha: -1,
            }),
            (this.contextData = new CVContextData()),
            (this.elements = []),
            (this.pendingElements = []),
            (this.transformMat = new Matrix()),
            (this.completeLayers = !1),
            (this.rendererType = "canvas"));
        }
        function HybridRenderer(t, e) {
          ((this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.renderConfig = {
              className: (e && e.className) || "",
              imagePreserveAspectRatio:
                (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
              hideOnTransparent: !(e && !1 === e.hideOnTransparent),
              filterSize: {
                width: (e && e.filterSize && e.filterSize.width) || "400%",
                height: (e && e.filterSize && e.filterSize.height) || "400%",
                x: (e && e.filterSize && e.filterSize.x) || "-100%",
                y: (e && e.filterSize && e.filterSize.y) || "-100%",
              },
            }),
            (this.globalData = {
              _mdf: !1,
              frameNum: -1,
              renderConfig: this.renderConfig,
            }),
            (this.pendingElements = []),
            (this.elements = []),
            (this.threeDElements = []),
            (this.destroyed = !1),
            (this.camera = null),
            (this.supports3d = !0),
            (this.rendererType = "html"));
        }
        function MaskElement(t, e, r) {
          ((this.data = t),
            (this.element = e),
            (this.globalData = r),
            (this.storedData = []),
            (this.masksProperties = this.data.masksProperties || []),
            (this.maskElement = null));
          var i,
            n,
            a = this.globalData.defs,
            s = this.masksProperties ? this.masksProperties.length : 0;
          ((this.viewData = createSizedArray(s)), (this.solidPath = ""));
          var o,
            h,
            l,
            p,
            c,
            f,
            u = this.masksProperties,
            m = 0,
            d = [],
            y = createElementID(),
            g = "clipPath",
            v = "clip-path";
          for (i = 0; i < s; i += 1)
            if (
              ((("a" !== u[i].mode && "n" !== u[i].mode) ||
                u[i].inv ||
                100 !== u[i].o.k ||
                u[i].o.x) &&
                ((g = "mask"), (v = "mask")),
              ("s" !== u[i].mode && "i" !== u[i].mode) || 0 !== m
                ? (l = null)
                : ((l = createNS("rect")).setAttribute("fill", "#ffffff"),
                  l.setAttribute("width", this.element.comp.data.w || 0),
                  l.setAttribute("height", this.element.comp.data.h || 0),
                  d.push(l)),
              (n = createNS("path")),
              "n" === u[i].mode)
            )
              ((this.viewData[i] = {
                op: PropertyFactory.getProp(
                  this.element,
                  u[i].o,
                  0,
                  0.01,
                  this.element,
                ),
                prop: ShapePropertyFactory.getShapeProp(this.element, u[i], 3),
                elem: n,
                lastPath: "",
              }),
                a.appendChild(n));
            else {
              var b;
              if (
                ((m += 1),
                n.setAttribute(
                  "fill",
                  "s" === u[i].mode ? "#000000" : "#ffffff",
                ),
                n.setAttribute("clip-rule", "nonzero"),
                0 !== u[i].x.k
                  ? ((g = "mask"),
                    (v = "mask"),
                    (f = PropertyFactory.getProp(
                      this.element,
                      u[i].x,
                      0,
                      null,
                      this.element,
                    )),
                    (b = createElementID()),
                    (p = createNS("filter")).setAttribute("id", b),
                    (c = createNS("feMorphology")).setAttribute(
                      "operator",
                      "erode",
                    ),
                    c.setAttribute("in", "SourceGraphic"),
                    c.setAttribute("radius", "0"),
                    p.appendChild(c),
                    a.appendChild(p),
                    n.setAttribute(
                      "stroke",
                      "s" === u[i].mode ? "#000000" : "#ffffff",
                    ))
                  : ((c = null), (f = null)),
                (this.storedData[i] = {
                  elem: n,
                  x: f,
                  expan: c,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0,
                }),
                "i" === u[i].mode)
              ) {
                h = d.length;
                var x = createNS("g");
                for (o = 0; o < h; o += 1) x.appendChild(d[o]);
                var E = createNS("mask");
                (E.setAttribute("mask-type", "alpha"),
                  E.setAttribute("id", y + "_" + m),
                  E.appendChild(n),
                  a.appendChild(E),
                  x.setAttribute(
                    "mask",
                    "url(" + locationHref + "#" + y + "_" + m + ")",
                  ),
                  (d.length = 0),
                  d.push(x));
              } else d.push(n);
              (u[i].inv &&
                !this.solidPath &&
                (this.solidPath = this.createLayerSolidPath()),
                (this.viewData[i] = {
                  elem: n,
                  lastPath: "",
                  op: PropertyFactory.getProp(
                    this.element,
                    u[i].o,
                    0,
                    0.01,
                    this.element,
                  ),
                  prop: ShapePropertyFactory.getShapeProp(
                    this.element,
                    u[i],
                    3,
                  ),
                  invRect: l,
                }),
                this.viewData[i].prop.k ||
                  this.drawPath(
                    u[i],
                    this.viewData[i].prop.v,
                    this.viewData[i],
                  ));
            }
          for (
            this.maskElement = createNS(g), s = d.length, i = 0;
            i < s;
            i += 1
          )
            this.maskElement.appendChild(d[i]);
          (m > 0 &&
            (this.maskElement.setAttribute("id", y),
            this.element.maskedElement.setAttribute(
              v,
              "url(" + locationHref + "#" + y + ")",
            ),
            a.appendChild(this.maskElement)),
            this.viewData.length && this.element.addRenderableComponent(this));
        }
        function HierarchyElement() {}
        function FrameElement() {}
        function TransformElement() {}
        function RenderableElement() {}
        function RenderableDOMElement() {}
        function ProcessedElement(t, e) {
          ((this.elem = t), (this.pos = e));
        }
        function SVGStyleData(t, e) {
          ((this.data = t),
            (this.type = t.ty),
            (this.d = ""),
            (this.lvl = e),
            (this._mdf = !1),
            (this.closed = !0 === t.hd),
            (this.pElem = createNS("path")),
            (this.msElem = null));
        }
        function SVGShapeData(t, e, r) {
          ((this.caches = []),
            (this.styles = []),
            (this.transformers = t),
            (this.lStr = ""),
            (this.sh = r),
            (this.lvl = e),
            (this._isAnimated = !!r.k));
          for (var i = 0, n = t.length; i < n; ) {
            if (t[i].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break;
            }
            i += 1;
          }
        }
        function SVGTransformData(t, e, r) {
          ((this.transform = { mProps: t, op: e, container: r }),
            (this.elements = []),
            (this._isAnimated =
              this.transform.mProps.dynamicProperties.length ||
              this.transform.op.effectsSequence.length));
        }
        function SVGStrokeStyleData(t, e, r) {
          (this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
            (this.d = new DashProperty(t, e.d || {}, "svg", this)),
            (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
            (this.style = r),
            (this._isAnimated = !!this._isAnimated));
        }
        function SVGFillStyleData(t, e, r) {
          (this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
            (this.style = r));
        }
        function SVGGradientFillStyleData(t, e, r) {
          (this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            this.initGradientData(t, e, r));
        }
        function SVGGradientStrokeStyleData(t, e, r) {
          (this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
            (this.d = new DashProperty(t, e.d || {}, "svg", this)),
            this.initGradientData(t, e, r),
            (this._isAnimated = !!this._isAnimated));
        }
        function ShapeGroupData() {
          ((this.it = []), (this.prevViewData = []), (this.gr = createNS("g")));
        }
        ((BaseRenderer.prototype.checkLayers = function (t) {
          var e,
            r,
            i = this.layers.length;
          for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)
            (this.elements[e] ||
              ((r = this.layers[e]).ip - r.st <= t - this.layers[e].st &&
                r.op - r.st > t - this.layers[e].st &&
                this.buildItem(e)),
              (this.completeLayers =
                !!this.elements[e] && this.completeLayers));
          this.checkPendingElements();
        }),
          (BaseRenderer.prototype.createItem = function (t) {
            switch (t.ty) {
              case 2:
                return this.createImage(t);
              case 0:
                return this.createComp(t);
              case 1:
                return this.createSolid(t);
              case 3:
                return this.createNull(t);
              case 4:
                return this.createShape(t);
              case 5:
                return this.createText(t);
              case 6:
                return this.createAudio(t);
              case 13:
                return this.createCamera(t);
              case 15:
                return this.createFootage(t);
              default:
                return this.createNull(t);
            }
          }),
          (BaseRenderer.prototype.createCamera = function () {
            throw new Error("You're using a 3d camera. Try the html renderer.");
          }),
          (BaseRenderer.prototype.createAudio = function (t) {
            return new AudioElement(t, this.globalData, this);
          }),
          (BaseRenderer.prototype.createFootage = function (t) {
            return new FootageElement(t, this.globalData, this);
          }),
          (BaseRenderer.prototype.buildAllItems = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements();
          }),
          (BaseRenderer.prototype.includeLayers = function (t) {
            var e;
            this.completeLayers = !1;
            var r,
              i = t.length,
              n = this.layers.length;
            for (e = 0; e < i; e += 1)
              for (r = 0; r < n; ) {
                if (this.layers[r].id === t[e].id) {
                  this.layers[r] = t[e];
                  break;
                }
                r += 1;
              }
          }),
          (BaseRenderer.prototype.setProjectInterface = function (t) {
            this.globalData.projectInterface = t;
          }),
          (BaseRenderer.prototype.initItems = function () {
            this.globalData.progressiveLoad || this.buildAllItems();
          }),
          (BaseRenderer.prototype.buildElementParenting = function (t, e, r) {
            for (
              var i = this.elements, n = this.layers, a = 0, s = n.length;
              a < s;

            )
              (n[a].ind == e &&
                (i[a] && !0 !== i[a]
                  ? (r.push(i[a]),
                    i[a].setAsParent(),
                    void 0 !== n[a].parent
                      ? this.buildElementParenting(t, n[a].parent, r)
                      : t.setHierarchy(r))
                  : (this.buildItem(a), this.addPendingElement(t))),
                (a += 1));
          }),
          (BaseRenderer.prototype.addPendingElement = function (t) {
            this.pendingElements.push(t);
          }),
          (BaseRenderer.prototype.searchExtraCompositions = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1)
              if (t[e].xt) {
                var i = this.createComp(t[e]);
                (i.initExpressions(),
                  this.globalData.projectInterface.registerComposition(i));
              }
          }),
          (BaseRenderer.prototype.setupGlobalData = function (t, e) {
            ((this.globalData.fontManager = new FontManager()),
              this.globalData.fontManager.addChars(t.chars),
              this.globalData.fontManager.addFonts(t.fonts, e),
              (this.globalData.getAssetData =
                this.animationItem.getAssetData.bind(this.animationItem)),
              (this.globalData.getAssetsPath =
                this.animationItem.getAssetsPath.bind(this.animationItem)),
              (this.globalData.imageLoader = this.animationItem.imagePreloader),
              (this.globalData.audioController =
                this.animationItem.audioController),
              (this.globalData.frameId = 0),
              (this.globalData.frameRate = t.fr),
              (this.globalData.nm = t.nm),
              (this.globalData.compSize = { w: t.w, h: t.h }));
          }),
          extendPrototype([BaseRenderer], SVGRenderer),
          (SVGRenderer.prototype.createNull = function (t) {
            return new NullElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.createShape = function (t) {
            return new SVGShapeElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.createText = function (t) {
            return new SVGTextLottieElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.createImage = function (t) {
            return new IImageElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.createSolid = function (t) {
            return new ISolidElement(t, this.globalData, this);
          }),
          (SVGRenderer.prototype.configAnimation = function (t) {
            (this.svgElement.setAttribute(
              "xmlns",
              "http://www.w3.org/2000/svg",
            ),
              this.renderConfig.viewBoxSize
                ? this.svgElement.setAttribute(
                    "viewBox",
                    this.renderConfig.viewBoxSize,
                  )
                : this.svgElement.setAttribute(
                    "viewBox",
                    "0 0 " + t.w + " " + t.h,
                  ),
              this.renderConfig.viewBoxOnly ||
                (this.svgElement.setAttribute("width", t.w),
                this.svgElement.setAttribute("height", t.h),
                (this.svgElement.style.width = "100%"),
                (this.svgElement.style.height = "100%"),
                (this.svgElement.style.transform = "translate3d(0,0,0)")),
              this.renderConfig.className &&
                this.svgElement.setAttribute(
                  "class",
                  this.renderConfig.className,
                ),
              this.renderConfig.id &&
                this.svgElement.setAttribute("id", this.renderConfig.id),
              void 0 !== this.renderConfig.focusable &&
                this.svgElement.setAttribute(
                  "focusable",
                  this.renderConfig.focusable,
                ),
              this.svgElement.setAttribute(
                "preserveAspectRatio",
                this.renderConfig.preserveAspectRatio,
              ),
              this.animationItem.wrapper.appendChild(this.svgElement));
            var e = this.globalData.defs;
            (this.setupGlobalData(t, e),
              (this.globalData.progressiveLoad =
                this.renderConfig.progressiveLoad),
              (this.data = t));
            var r = createNS("clipPath"),
              i = createNS("rect");
            (i.setAttribute("width", t.w),
              i.setAttribute("height", t.h),
              i.setAttribute("x", 0),
              i.setAttribute("y", 0));
            var n = createElementID();
            (r.setAttribute("id", n),
              r.appendChild(i),
              this.layerElement.setAttribute(
                "clip-path",
                "url(" + locationHref + "#" + n + ")",
              ),
              e.appendChild(r),
              (this.layers = t.layers),
              (this.elements = createSizedArray(t.layers.length)));
          }),
          (SVGRenderer.prototype.destroy = function () {
            var t;
            (this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = ""),
              (this.layerElement = null),
              (this.globalData.defs = null));
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1)
              this.elements[t] && this.elements[t].destroy();
            ((this.elements.length = 0),
              (this.destroyed = !0),
              (this.animationItem = null));
          }),
          (SVGRenderer.prototype.updateContainerSize = function () {}),
          (SVGRenderer.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              e[t] = !0;
              var r = this.createItem(this.layers[t]);
              ((e[t] = r),
                expressionsPlugin &&
                  (0 === this.layers[t].ty &&
                    this.globalData.projectInterface.registerComposition(r),
                  r.initExpressions()),
                this.appendElementInPos(r, t),
                this.layers[t].tt &&
                  (this.elements[t - 1] && !0 !== this.elements[t - 1]
                    ? r.setMatte(e[t - 1].layerId)
                    : (this.buildItem(t - 1), this.addPendingElement(r))));
            }
          }),
          (SVGRenderer.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; ) {
              var t = this.pendingElements.pop();
              if ((t.checkParenting(), t.data.tt))
                for (var e = 0, r = this.elements.length; e < r; ) {
                  if (this.elements[e] === t) {
                    t.setMatte(this.elements[e - 1].layerId);
                    break;
                  }
                  e += 1;
                }
            }
          }),
          (SVGRenderer.prototype.renderFrame = function (t) {
            if (this.renderedFrame !== t && !this.destroyed) {
              var e;
              (null === t ? (t = this.renderedFrame) : (this.renderedFrame = t),
                (this.globalData.frameNum = t),
                (this.globalData.frameId += 1),
                (this.globalData.projectInterface.currentFrame = t),
                (this.globalData._mdf = !1));
              var r = this.layers.length;
              for (
                this.completeLayers || this.checkLayers(t), e = r - 1;
                e >= 0;
                e -= 1
              )
                (this.completeLayers || this.elements[e]) &&
                  this.elements[e].prepareFrame(t - this.layers[e].st);
              if (this.globalData._mdf)
                for (e = 0; e < r; e += 1)
                  (this.completeLayers || this.elements[e]) &&
                    this.elements[e].renderFrame();
            }
          }),
          (SVGRenderer.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
              for (var i, n = 0; n < e; )
                (this.elements[n] &&
                  !0 !== this.elements[n] &&
                  this.elements[n].getBaseElement() &&
                  (i = this.elements[n].getBaseElement()),
                  (n += 1));
              i
                ? this.layerElement.insertBefore(r, i)
                : this.layerElement.appendChild(r);
            }
          }),
          (SVGRenderer.prototype.hide = function () {
            this.layerElement.style.display = "none";
          }),
          (SVGRenderer.prototype.show = function () {
            this.layerElement.style.display = "block";
          }),
          extendPrototype([BaseRenderer], CanvasRenderer),
          (CanvasRenderer.prototype.createShape = function (t) {
            return new CVShapeElement(t, this.globalData, this);
          }),
          (CanvasRenderer.prototype.createText = function (t) {
            return new CVTextElement(t, this.globalData, this);
          }),
          (CanvasRenderer.prototype.createImage = function (t) {
            return new CVImageElement(t, this.globalData, this);
          }),
          (CanvasRenderer.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this);
          }),
          (CanvasRenderer.prototype.createSolid = function (t) {
            return new CVSolidElement(t, this.globalData, this);
          }),
          (CanvasRenderer.prototype.createNull =
            SVGRenderer.prototype.createNull),
          (CanvasRenderer.prototype.ctxTransform = function (t) {
            if (
              1 !== t[0] ||
              0 !== t[1] ||
              0 !== t[4] ||
              1 !== t[5] ||
              0 !== t[12] ||
              0 !== t[13]
            )
              if (this.renderConfig.clearCanvas) {
                this.transformMat.cloneFromProps(t);
                var e = this.contextData.cTr.props;
                (this.transformMat.transform(
                  e[0],
                  e[1],
                  e[2],
                  e[3],
                  e[4],
                  e[5],
                  e[6],
                  e[7],
                  e[8],
                  e[9],
                  e[10],
                  e[11],
                  e[12],
                  e[13],
                  e[14],
                  e[15],
                ),
                  this.contextData.cTr.cloneFromProps(this.transformMat.props));
                var r = this.contextData.cTr.props;
                this.canvasContext.setTransform(
                  r[0],
                  r[1],
                  r[4],
                  r[5],
                  r[12],
                  r[13],
                );
              } else
                this.canvasContext.transform(
                  t[0],
                  t[1],
                  t[4],
                  t[5],
                  t[12],
                  t[13],
                );
          }),
          (CanvasRenderer.prototype.ctxOpacity = function (t) {
            if (!this.renderConfig.clearCanvas)
              return (
                (this.canvasContext.globalAlpha *= t < 0 ? 0 : t),
                void (this.globalData.currentGlobalAlpha = this.contextData.cO)
              );
            ((this.contextData.cO *= t < 0 ? 0 : t),
              this.globalData.currentGlobalAlpha !== this.contextData.cO &&
                ((this.canvasContext.globalAlpha = this.contextData.cO),
                (this.globalData.currentGlobalAlpha = this.contextData.cO)));
          }),
          (CanvasRenderer.prototype.reset = function () {
            this.renderConfig.clearCanvas
              ? this.contextData.reset()
              : this.canvasContext.restore();
          }),
          (CanvasRenderer.prototype.save = function (t) {
            if (this.renderConfig.clearCanvas) {
              t && this.canvasContext.save();
              var e,
                r = this.contextData.cTr.props;
              this.contextData._length <= this.contextData.cArrPos &&
                this.contextData.duplicate();
              var i = this.contextData.saved[this.contextData.cArrPos];
              for (e = 0; e < 16; e += 1) i[e] = r[e];
              ((this.contextData.savedOp[this.contextData.cArrPos] =
                this.contextData.cO),
                (this.contextData.cArrPos += 1));
            } else this.canvasContext.save();
          }),
          (CanvasRenderer.prototype.restore = function (t) {
            if (this.renderConfig.clearCanvas) {
              (t &&
                (this.canvasContext.restore(),
                (this.globalData.blendMode = "source-over")),
                (this.contextData.cArrPos -= 1));
              var e,
                r = this.contextData.saved[this.contextData.cArrPos],
                i = this.contextData.cTr.props;
              for (e = 0; e < 16; e += 1) i[e] = r[e];
              (this.canvasContext.setTransform(
                r[0],
                r[1],
                r[4],
                r[5],
                r[12],
                r[13],
              ),
                (r = this.contextData.savedOp[this.contextData.cArrPos]),
                (this.contextData.cO = r),
                this.globalData.currentGlobalAlpha !== r &&
                  ((this.canvasContext.globalAlpha = r),
                  (this.globalData.currentGlobalAlpha = r)));
            } else this.canvasContext.restore();
          }),
          (CanvasRenderer.prototype.configAnimation = function (t) {
            if (this.animationItem.wrapper) {
              this.animationItem.container = createTag("canvas");
              var e = this.animationItem.container.style;
              ((e.width = "100%"), (e.height = "100%"));
              var r = "0px 0px 0px";
              ((e.transformOrigin = r),
                (e.mozTransformOrigin = r),
                (e.webkitTransformOrigin = r),
                (e["-webkit-transform"] = r),
                this.animationItem.wrapper.appendChild(
                  this.animationItem.container,
                ),
                (this.canvasContext =
                  this.animationItem.container.getContext("2d")),
                this.renderConfig.className &&
                  this.animationItem.container.setAttribute(
                    "class",
                    this.renderConfig.className,
                  ),
                this.renderConfig.id &&
                  this.animationItem.container.setAttribute(
                    "id",
                    this.renderConfig.id,
                  ));
            } else this.canvasContext = this.renderConfig.context;
            ((this.data = t),
              (this.layers = t.layers),
              (this.transformCanvas = {
                w: t.w,
                h: t.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0,
              }),
              this.setupGlobalData(t, document.body),
              (this.globalData.canvasContext = this.canvasContext),
              (this.globalData.renderer = this),
              (this.globalData.isDashed = !1),
              (this.globalData.progressiveLoad =
                this.renderConfig.progressiveLoad),
              (this.globalData.transformCanvas = this.transformCanvas),
              (this.elements = createSizedArray(t.layers.length)),
              this.updateContainerSize());
          }),
          (CanvasRenderer.prototype.updateContainerSize = function () {
            var t, e, r, i;
            if (
              (this.reset(),
              this.animationItem.wrapper && this.animationItem.container
                ? ((t = this.animationItem.wrapper.offsetWidth),
                  (e = this.animationItem.wrapper.offsetHeight),
                  this.animationItem.container.setAttribute(
                    "width",
                    t * this.renderConfig.dpr,
                  ),
                  this.animationItem.container.setAttribute(
                    "height",
                    e * this.renderConfig.dpr,
                  ))
                : ((t =
                    this.canvasContext.canvas.width * this.renderConfig.dpr),
                  (e =
                    this.canvasContext.canvas.height * this.renderConfig.dpr)),
              -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") ||
                -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice"))
            ) {
              var n = this.renderConfig.preserveAspectRatio.split(" "),
                a = n[1] || "meet",
                s = n[0] || "xMidYMid",
                o = s.substr(0, 4),
                h = s.substr(4);
              ((r = t / e),
                ((i = this.transformCanvas.w / this.transformCanvas.h) > r &&
                  "meet" === a) ||
                (i < r && "slice" === a)
                  ? ((this.transformCanvas.sx =
                      t / (this.transformCanvas.w / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      t / (this.transformCanvas.w / this.renderConfig.dpr)))
                  : ((this.transformCanvas.sx =
                      e / (this.transformCanvas.h / this.renderConfig.dpr)),
                    (this.transformCanvas.sy =
                      e / (this.transformCanvas.h / this.renderConfig.dpr))),
                (this.transformCanvas.tx =
                  "xMid" === o &&
                  ((i < r && "meet" === a) || (i > r && "slice" === a))
                    ? ((t -
                        this.transformCanvas.w * (e / this.transformCanvas.h)) /
                        2) *
                      this.renderConfig.dpr
                    : "xMax" === o &&
                        ((i < r && "meet" === a) || (i > r && "slice" === a))
                      ? (t -
                          this.transformCanvas.w *
                            (e / this.transformCanvas.h)) *
                        this.renderConfig.dpr
                      : 0),
                (this.transformCanvas.ty =
                  "YMid" === h &&
                  ((i > r && "meet" === a) || (i < r && "slice" === a))
                    ? ((e -
                        this.transformCanvas.h * (t / this.transformCanvas.w)) /
                        2) *
                      this.renderConfig.dpr
                    : "YMax" === h &&
                        ((i > r && "meet" === a) || (i < r && "slice" === a))
                      ? (e -
                          this.transformCanvas.h *
                            (t / this.transformCanvas.w)) *
                        this.renderConfig.dpr
                      : 0));
            } else
              "none" === this.renderConfig.preserveAspectRatio
                ? ((this.transformCanvas.sx =
                    t / (this.transformCanvas.w / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    e / (this.transformCanvas.h / this.renderConfig.dpr)),
                  (this.transformCanvas.tx = 0),
                  (this.transformCanvas.ty = 0))
                : ((this.transformCanvas.sx = this.renderConfig.dpr),
                  (this.transformCanvas.sy = this.renderConfig.dpr),
                  (this.transformCanvas.tx = 0),
                  (this.transformCanvas.ty = 0));
            ((this.transformCanvas.props = [
              this.transformCanvas.sx,
              0,
              0,
              0,
              0,
              this.transformCanvas.sy,
              0,
              0,
              0,
              0,
              1,
              0,
              this.transformCanvas.tx,
              this.transformCanvas.ty,
              0,
              1,
            ]),
              this.ctxTransform(this.transformCanvas.props),
              this.canvasContext.beginPath(),
              this.canvasContext.rect(
                0,
                0,
                this.transformCanvas.w,
                this.transformCanvas.h,
              ),
              this.canvasContext.closePath(),
              this.canvasContext.clip(),
              this.renderFrame(this.renderedFrame, !0));
          }),
          (CanvasRenderer.prototype.destroy = function () {
            var t;
            for (
              this.renderConfig.clearCanvas &&
                this.animationItem.wrapper &&
                (this.animationItem.wrapper.innerText = ""),
                t = (this.layers ? this.layers.length : 0) - 1;
              t >= 0;
              t -= 1
            )
              this.elements[t] && this.elements[t].destroy();
            ((this.elements.length = 0),
              (this.globalData.canvasContext = null),
              (this.animationItem.container = null),
              (this.destroyed = !0));
          }),
          (CanvasRenderer.prototype.renderFrame = function (t, e) {
            if (
              (this.renderedFrame !== t ||
                !0 !== this.renderConfig.clearCanvas ||
                e) &&
              !this.destroyed &&
              -1 !== t
            ) {
              var r;
              ((this.renderedFrame = t),
                (this.globalData.frameNum =
                  t - this.animationItem._isFirstFrame),
                (this.globalData.frameId += 1),
                (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
                (this.globalData.projectInterface.currentFrame = t));
              var i = this.layers.length;
              for (
                this.completeLayers || this.checkLayers(t), r = 0;
                r < i;
                r += 1
              )
                (this.completeLayers || this.elements[r]) &&
                  this.elements[r].prepareFrame(t - this.layers[r].st);
              if (this.globalData._mdf) {
                for (
                  !0 === this.renderConfig.clearCanvas
                    ? this.canvasContext.clearRect(
                        0,
                        0,
                        this.transformCanvas.w,
                        this.transformCanvas.h,
                      )
                    : this.save(),
                    r = i - 1;
                  r >= 0;
                  r -= 1
                )
                  (this.completeLayers || this.elements[r]) &&
                    this.elements[r].renderFrame();
                !0 !== this.renderConfig.clearCanvas && this.restore();
              }
            }
          }),
          (CanvasRenderer.prototype.buildItem = function (t) {
            var e = this.elements;
            if (!e[t] && 99 !== this.layers[t].ty) {
              var r = this.createItem(this.layers[t], this, this.globalData);
              ((e[t] = r), r.initExpressions());
            }
          }),
          (CanvasRenderer.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; ) {
              this.pendingElements.pop().checkParenting();
            }
          }),
          (CanvasRenderer.prototype.hide = function () {
            this.animationItem.container.style.display = "none";
          }),
          (CanvasRenderer.prototype.show = function () {
            this.animationItem.container.style.display = "block";
          }),
          extendPrototype([BaseRenderer], HybridRenderer),
          (HybridRenderer.prototype.buildItem =
            SVGRenderer.prototype.buildItem),
          (HybridRenderer.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length; ) {
              this.pendingElements.pop().checkParenting();
            }
          }),
          (HybridRenderer.prototype.appendElementInPos = function (t, e) {
            var r = t.getBaseElement();
            if (r) {
              var i = this.layers[e];
              if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
              else if (this.threeDElements) this.addTo3dContainer(r, e);
              else {
                for (var n, a, s = 0; s < e; )
                  (this.elements[s] &&
                    !0 !== this.elements[s] &&
                    this.elements[s].getBaseElement &&
                    ((a = this.elements[s]),
                    (n =
                      (this.layers[s].ddd
                        ? this.getThreeDContainerByPos(s)
                        : a.getBaseElement()) || n)),
                    (s += 1));
                n
                  ? (i.ddd && this.supports3d) ||
                    this.layerElement.insertBefore(r, n)
                  : (i.ddd && this.supports3d) ||
                    this.layerElement.appendChild(r);
              }
            }
          }),
          (HybridRenderer.prototype.createShape = function (t) {
            return this.supports3d
              ? new HShapeElement(t, this.globalData, this)
              : new SVGShapeElement(t, this.globalData, this);
          }),
          (HybridRenderer.prototype.createText = function (t) {
            return this.supports3d
              ? new HTextElement(t, this.globalData, this)
              : new SVGTextLottieElement(t, this.globalData, this);
          }),
          (HybridRenderer.prototype.createCamera = function (t) {
            return (
              (this.camera = new HCameraElement(t, this.globalData, this)),
              this.camera
            );
          }),
          (HybridRenderer.prototype.createImage = function (t) {
            return this.supports3d
              ? new HImageElement(t, this.globalData, this)
              : new IImageElement(t, this.globalData, this);
          }),
          (HybridRenderer.prototype.createComp = function (t) {
            return this.supports3d
              ? new HCompElement(t, this.globalData, this)
              : new SVGCompElement(t, this.globalData, this);
          }),
          (HybridRenderer.prototype.createSolid = function (t) {
            return this.supports3d
              ? new HSolidElement(t, this.globalData, this)
              : new ISolidElement(t, this.globalData, this);
          }),
          (HybridRenderer.prototype.createNull =
            SVGRenderer.prototype.createNull),
          (HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
            for (var e = 0, r = this.threeDElements.length; e < r; ) {
              if (
                this.threeDElements[e].startPos <= t &&
                this.threeDElements[e].endPos >= t
              )
                return this.threeDElements[e].perspectiveElem;
              e += 1;
            }
            return null;
          }),
          (HybridRenderer.prototype.createThreeDContainer = function (t, e) {
            var r,
              i,
              n = createTag("div");
            styleDiv(n);
            var a = createTag("div");
            if ((styleDiv(a), "3d" === e)) {
              (((r = n.style).width = this.globalData.compSize.w + "px"),
                (r.height = this.globalData.compSize.h + "px"));
              ((r.webkitTransformOrigin = "50% 50%"),
                (r.mozTransformOrigin = "50% 50%"),
                (r.transformOrigin = "50% 50%"));
              var s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              (((i = a.style).transform = s), (i.webkitTransform = s));
            }
            n.appendChild(a);
            var o = {
              container: a,
              perspectiveElem: n,
              startPos: t,
              endPos: t,
              type: e,
            };
            return (this.threeDElements.push(o), o);
          }),
          (HybridRenderer.prototype.build3dContainers = function () {
            var t,
              e,
              r = this.layers.length,
              i = "";
            for (t = 0; t < r; t += 1)
              this.layers[t].ddd && 3 !== this.layers[t].ty
                ? ("3d" !== i &&
                    ((i = "3d"), (e = this.createThreeDContainer(t, "3d"))),
                  (e.endPos = Math.max(e.endPos, t)))
                : ("2d" !== i &&
                    ((i = "2d"), (e = this.createThreeDContainer(t, "2d"))),
                  (e.endPos = Math.max(e.endPos, t)));
            for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1)
              this.resizerElem.appendChild(
                this.threeDElements[t].perspectiveElem,
              );
          }),
          (HybridRenderer.prototype.addTo3dContainer = function (t, e) {
            for (var r = 0, i = this.threeDElements.length; r < i; ) {
              if (e <= this.threeDElements[r].endPos) {
                for (var n, a = this.threeDElements[r].startPos; a < e; )
                  (this.elements[a] &&
                    this.elements[a].getBaseElement &&
                    (n = this.elements[a].getBaseElement()),
                    (a += 1));
                n
                  ? this.threeDElements[r].container.insertBefore(t, n)
                  : this.threeDElements[r].container.appendChild(t);
                break;
              }
              r += 1;
            }
          }),
          (HybridRenderer.prototype.configAnimation = function (t) {
            var e = createTag("div"),
              r = this.animationItem.wrapper,
              i = e.style;
            ((i.width = t.w + "px"),
              (i.height = t.h + "px"),
              (this.resizerElem = e),
              styleDiv(e),
              (i.transformStyle = "flat"),
              (i.mozTransformStyle = "flat"),
              (i.webkitTransformStyle = "flat"),
              this.renderConfig.className &&
                e.setAttribute("class", this.renderConfig.className),
              r.appendChild(e),
              (i.overflow = "hidden"));
            var n = createNS("svg");
            (n.setAttribute("width", "1"),
              n.setAttribute("height", "1"),
              styleDiv(n),
              this.resizerElem.appendChild(n));
            var a = createNS("defs");
            (n.appendChild(a),
              (this.data = t),
              this.setupGlobalData(t, n),
              (this.globalData.defs = a),
              (this.layers = t.layers),
              (this.layerElement = this.resizerElem),
              this.build3dContainers(),
              this.updateContainerSize());
          }),
          (HybridRenderer.prototype.destroy = function () {
            var t;
            (this.animationItem.wrapper &&
              (this.animationItem.wrapper.innerText = ""),
              (this.animationItem.container = null),
              (this.globalData.defs = null));
            var e = this.layers ? this.layers.length : 0;
            for (t = 0; t < e; t += 1) this.elements[t].destroy();
            ((this.elements.length = 0),
              (this.destroyed = !0),
              (this.animationItem = null));
          }),
          (HybridRenderer.prototype.updateContainerSize = function () {
            var t,
              e,
              r,
              i,
              n = this.animationItem.wrapper.offsetWidth,
              a = this.animationItem.wrapper.offsetHeight,
              s = n / a;
            this.globalData.compSize.w / this.globalData.compSize.h > s
              ? ((t = n / this.globalData.compSize.w),
                (e = n / this.globalData.compSize.w),
                (r = 0),
                (i =
                  (a -
                    this.globalData.compSize.h *
                      (n / this.globalData.compSize.w)) /
                  2))
              : ((t = a / this.globalData.compSize.h),
                (e = a / this.globalData.compSize.h),
                (r =
                  (n -
                    this.globalData.compSize.w *
                      (a / this.globalData.compSize.h)) /
                  2),
                (i = 0));
            var o = this.resizerElem.style;
            ((o.webkitTransform =
              "matrix3d(" +
              t +
              ",0,0,0,0," +
              e +
              ",0,0,0,0,1,0," +
              r +
              "," +
              i +
              ",0,1)"),
              (o.transform = o.webkitTransform));
          }),
          (HybridRenderer.prototype.renderFrame =
            SVGRenderer.prototype.renderFrame),
          (HybridRenderer.prototype.hide = function () {
            this.resizerElem.style.display = "none";
          }),
          (HybridRenderer.prototype.show = function () {
            this.resizerElem.style.display = "block";
          }),
          (HybridRenderer.prototype.initItems = function () {
            if ((this.buildAllItems(), this.camera)) this.camera.setup();
            else {
              var t,
                e = this.globalData.compSize.w,
                r = this.globalData.compSize.h,
                i = this.threeDElements.length;
              for (t = 0; t < i; t += 1) {
                var n = this.threeDElements[t].perspectiveElem.style;
                ((n.webkitPerspective =
                  Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px"),
                  (n.perspective = n.webkitPerspective));
              }
            }
          }),
          (HybridRenderer.prototype.searchExtraCompositions = function (t) {
            var e,
              r = t.length,
              i = createTag("div");
            for (e = 0; e < r; e += 1)
              if (t[e].xt) {
                var n = this.createComp(t[e], i, this.globalData.comp, null);
                (n.initExpressions(),
                  this.globalData.projectInterface.registerComposition(n));
              }
          }),
          (MaskElement.prototype.getMaskProperty = function (t) {
            return this.viewData[t].prop;
          }),
          (MaskElement.prototype.renderFrame = function (t) {
            var e,
              r = this.element.finalTransform.mat,
              i = this.masksProperties.length;
            for (e = 0; e < i; e += 1)
              if (
                ((this.viewData[e].prop._mdf || t) &&
                  this.drawPath(
                    this.masksProperties[e],
                    this.viewData[e].prop.v,
                    this.viewData[e],
                  ),
                (this.viewData[e].op._mdf || t) &&
                  this.viewData[e].elem.setAttribute(
                    "fill-opacity",
                    this.viewData[e].op.v,
                  ),
                "n" !== this.masksProperties[e].mode &&
                  (this.viewData[e].invRect &&
                    (this.element.finalTransform.mProp._mdf || t) &&
                    this.viewData[e].invRect.setAttribute(
                      "transform",
                      r.getInverseMatrix().to2dCSS(),
                    ),
                  this.storedData[e].x && (this.storedData[e].x._mdf || t)))
              ) {
                var n = this.storedData[e].expan;
                this.storedData[e].x.v < 0
                  ? ("erode" !== this.storedData[e].lastOperator &&
                      ((this.storedData[e].lastOperator = "erode"),
                      this.storedData[e].elem.setAttribute(
                        "filter",
                        "url(" +
                          locationHref +
                          "#" +
                          this.storedData[e].filterId +
                          ")",
                      )),
                    n.setAttribute("radius", -this.storedData[e].x.v))
                  : ("dilate" !== this.storedData[e].lastOperator &&
                      ((this.storedData[e].lastOperator = "dilate"),
                      this.storedData[e].elem.setAttribute("filter", null)),
                    this.storedData[e].elem.setAttribute(
                      "stroke-width",
                      2 * this.storedData[e].x.v,
                    ));
              }
          }),
          (MaskElement.prototype.getMaskelement = function () {
            return this.maskElement;
          }),
          (MaskElement.prototype.createLayerSolidPath = function () {
            var t = "M0,0 ";
            return (
              (t += " h" + this.globalData.compSize.w),
              (t += " v" + this.globalData.compSize.h),
              (t += " h-" + this.globalData.compSize.w),
              (t += " v-" + this.globalData.compSize.h + " ")
            );
          }),
          (MaskElement.prototype.drawPath = function (t, e, r) {
            var i,
              n,
              a = " M" + e.v[0][0] + "," + e.v[0][1];
            for (n = e._length, i = 1; i < n; i += 1)
              a +=
                " C" +
                e.o[i - 1][0] +
                "," +
                e.o[i - 1][1] +
                " " +
                e.i[i][0] +
                "," +
                e.i[i][1] +
                " " +
                e.v[i][0] +
                "," +
                e.v[i][1];
            if (
              (e.c &&
                n > 1 &&
                (a +=
                  " C" +
                  e.o[i - 1][0] +
                  "," +
                  e.o[i - 1][1] +
                  " " +
                  e.i[0][0] +
                  "," +
                  e.i[0][1] +
                  " " +
                  e.v[0][0] +
                  "," +
                  e.v[0][1]),
              r.lastPath !== a)
            ) {
              var s = "";
              (r.elem &&
                (e.c && (s = t.inv ? this.solidPath + a : a),
                r.elem.setAttribute("d", s)),
                (r.lastPath = a));
            }
          }),
          (MaskElement.prototype.destroy = function () {
            ((this.element = null),
              (this.globalData = null),
              (this.maskElement = null),
              (this.data = null),
              (this.masksProperties = null));
          }),
          (HierarchyElement.prototype = {
            initHierarchy: function () {
              ((this.hierarchy = []),
                (this._isParent = !1),
                this.checkParenting());
            },
            setHierarchy: function (t) {
              this.hierarchy = t;
            },
            setAsParent: function () {
              this._isParent = !0;
            },
            checkParenting: function () {
              void 0 !== this.data.parent &&
                this.comp.buildElementParenting(this, this.data.parent, []);
            },
          }),
          (FrameElement.prototype = {
            initFrame: function () {
              ((this._isFirstFrame = !1),
                (this.dynamicProperties = []),
                (this._mdf = !1));
            },
            prepareProperties: function (t, e) {
              var r,
                i = this.dynamicProperties.length;
              for (r = 0; r < i; r += 1)
                (e ||
                  (this._isParent &&
                    "transform" === this.dynamicProperties[r].propType)) &&
                  (this.dynamicProperties[r].getValue(),
                  this.dynamicProperties[r]._mdf &&
                    ((this.globalData._mdf = !0), (this._mdf = !0)));
            },
            addDynamicProperty: function (t) {
              -1 === this.dynamicProperties.indexOf(t) &&
                this.dynamicProperties.push(t);
            },
          }),
          (TransformElement.prototype = {
            initTransform: function () {
              ((this.finalTransform = {
                mProp: this.data.ks
                  ? TransformPropertyFactory.getTransformProperty(
                      this,
                      this.data.ks,
                      this,
                    )
                  : { o: 0 },
                _matMdf: !1,
                _opMdf: !1,
                mat: new Matrix(),
              }),
                this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                this.data.ty);
            },
            renderTransform: function () {
              if (
                ((this.finalTransform._opMdf =
                  this.finalTransform.mProp.o._mdf || this._isFirstFrame),
                (this.finalTransform._matMdf =
                  this.finalTransform.mProp._mdf || this._isFirstFrame),
                this.hierarchy)
              ) {
                var t,
                  e = this.finalTransform.mat,
                  r = 0,
                  i = this.hierarchy.length;
                if (!this.finalTransform._matMdf)
                  for (; r < i; ) {
                    if (this.hierarchy[r].finalTransform.mProp._mdf) {
                      this.finalTransform._matMdf = !0;
                      break;
                    }
                    r += 1;
                  }
                if (this.finalTransform._matMdf)
                  for (
                    t = this.finalTransform.mProp.v.props,
                      e.cloneFromProps(t),
                      r = 0;
                    r < i;
                    r += 1
                  )
                    ((t = this.hierarchy[r].finalTransform.mProp.v.props),
                      e.transform(
                        t[0],
                        t[1],
                        t[2],
                        t[3],
                        t[4],
                        t[5],
                        t[6],
                        t[7],
                        t[8],
                        t[9],
                        t[10],
                        t[11],
                        t[12],
                        t[13],
                        t[14],
                        t[15],
                      ));
              }
            },
            globalToLocal: function (t) {
              var e = [];
              e.push(this.finalTransform);
              for (var r, i = !0, n = this.comp; i; )
                n.finalTransform
                  ? (n.data.hasMask && e.splice(0, 0, n.finalTransform),
                    (n = n.comp))
                  : (i = !1);
              var a,
                s = e.length;
              for (r = 0; r < s; r += 1)
                ((a = e[r].mat.applyToPointArray(0, 0, 0)),
                  (t = [t[0] - a[0], t[1] - a[1], 0]));
              return t;
            },
            mHelper: new Matrix(),
          }),
          (RenderableElement.prototype = {
            initRenderable: function () {
              ((this.isInRange = !1),
                (this.hidden = !1),
                (this.isTransparent = !1),
                (this.renderableComponents = []));
            },
            addRenderableComponent: function (t) {
              -1 === this.renderableComponents.indexOf(t) &&
                this.renderableComponents.push(t);
            },
            removeRenderableComponent: function (t) {
              -1 !== this.renderableComponents.indexOf(t) &&
                this.renderableComponents.splice(
                  this.renderableComponents.indexOf(t),
                  1,
                );
            },
            prepareRenderableFrame: function (t) {
              this.checkLayerLimits(t);
            },
            checkTransparency: function () {
              this.finalTransform.mProp.o.v <= 0
                ? !this.isTransparent &&
                  this.globalData.renderConfig.hideOnTransparent &&
                  ((this.isTransparent = !0), this.hide())
                : this.isTransparent &&
                  ((this.isTransparent = !1), this.show());
            },
            checkLayerLimits: function (t) {
              this.data.ip - this.data.st <= t &&
              this.data.op - this.data.st > t
                ? !0 !== this.isInRange &&
                  ((this.globalData._mdf = !0),
                  (this._mdf = !0),
                  (this.isInRange = !0),
                  this.show())
                : !1 !== this.isInRange &&
                  ((this.globalData._mdf = !0),
                  (this.isInRange = !1),
                  this.hide());
            },
            renderRenderable: function () {
              var t,
                e = this.renderableComponents.length;
              for (t = 0; t < e; t += 1)
                this.renderableComponents[t].renderFrame(this._isFirstFrame);
            },
            sourceRectAtTime: function () {
              return { top: 0, left: 0, width: 100, height: 100 };
            },
            getLayerSize: function () {
              return 5 === this.data.ty
                ? { w: this.data.textData.width, h: this.data.textData.height }
                : { w: this.data.width, h: this.data.height };
            },
          }),
          extendPrototype(
            [
              RenderableElement,
              createProxyFunction({
                initElement: function (t, e, r) {
                  (this.initFrame(),
                    this.initBaseData(t, e, r),
                    this.initTransform(t, e, r),
                    this.initHierarchy(),
                    this.initRenderable(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    this.createContent(),
                    this.hide());
                },
                hide: function () {
                  this.hidden ||
                    (this.isInRange && !this.isTransparent) ||
                    (((this.baseElement || this.layerElement).style.display =
                      "none"),
                    (this.hidden = !0));
                },
                show: function () {
                  this.isInRange &&
                    !this.isTransparent &&
                    (this.data.hd ||
                      ((this.baseElement || this.layerElement).style.display =
                        "block"),
                    (this.hidden = !1),
                    (this._isFirstFrame = !0));
                },
                renderFrame: function () {
                  this.data.hd ||
                    this.hidden ||
                    (this.renderTransform(),
                    this.renderRenderable(),
                    this.renderElement(),
                    this.renderInnerContent(),
                    this._isFirstFrame && (this._isFirstFrame = !1));
                },
                renderInnerContent: function () {},
                prepareFrame: function (t) {
                  ((this._mdf = !1),
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange),
                    this.checkTransparency());
                },
                destroy: function () {
                  ((this.innerElem = null), this.destroyBaseElement());
                },
              }),
            ],
            RenderableDOMElement,
          ),
          (SVGStyleData.prototype.reset = function () {
            ((this.d = ""), (this._mdf = !1));
          }),
          (SVGShapeData.prototype.setAsAnimated = function () {
            this._isAnimated = !0;
          }),
          extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
          extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
          (SVGGradientFillStyleData.prototype.initGradientData = function (
            t,
            e,
            r,
          ) {
            ((this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
              (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
              (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
              (this.h = PropertyFactory.getProp(
                t,
                e.h || { k: 0 },
                0,
                0.01,
                this,
              )),
              (this.a = PropertyFactory.getProp(
                t,
                e.a || { k: 0 },
                0,
                degToRads,
                this,
              )),
              (this.g = new GradientProperty(t, e.g, this)),
              (this.style = r),
              (this.stops = []),
              this.setGradientData(r.pElem, e),
              this.setGradientOpacity(e, r),
              (this._isAnimated = !!this._isAnimated));
          }),
          (SVGGradientFillStyleData.prototype.setGradientData = function (
            t,
            e,
          ) {
            var r = createElementID(),
              i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            (i.setAttribute("id", r),
              i.setAttribute("spreadMethod", "pad"),
              i.setAttribute("gradientUnits", "userSpaceOnUse"));
            var n,
              a,
              s,
              o = [];
            for (s = 4 * e.g.p, a = 0; a < s; a += 4)
              ((n = createNS("stop")), i.appendChild(n), o.push(n));
            (t.setAttribute(
              "gf" === e.ty ? "fill" : "stroke",
              "url(" + locationHref + "#" + r + ")",
            ),
              (this.gf = i),
              (this.cst = o));
          }),
          (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
            t,
            e,
          ) {
            if (this.g._hasOpacity && !this.g._collapsable) {
              var r,
                i,
                n,
                a = createNS("mask"),
                s = createNS("path");
              a.appendChild(s);
              var o = createElementID(),
                h = createElementID();
              a.setAttribute("id", h);
              var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
              (l.setAttribute("id", o),
                l.setAttribute("spreadMethod", "pad"),
                l.setAttribute("gradientUnits", "userSpaceOnUse"),
                (n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length));
              var p = this.stops;
              for (i = 4 * t.g.p; i < n; i += 2)
                ((r = createNS("stop")).setAttribute(
                  "stop-color",
                  "rgb(255,255,255)",
                ),
                  l.appendChild(r),
                  p.push(r));
              (s.setAttribute(
                "gf" === t.ty ? "fill" : "stroke",
                "url(" + locationHref + "#" + o + ")",
              ),
                (this.of = l),
                (this.ms = a),
                (this.ost = p),
                (this.maskId = h),
                (e.msElem = s));
            }
          }),
          extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
          extendPrototype(
            [SVGGradientFillStyleData, DynamicPropertyContainer],
            SVGGradientStrokeStyleData,
          ));
        var SVGElementsRenderer = (function () {
          var t = new Matrix(),
            e = new Matrix();
          function r(t, e, r) {
            ((r || e.transform.op._mdf) &&
              e.transform.container.setAttribute("opacity", e.transform.op.v),
              (r || e.transform.mProps._mdf) &&
                e.transform.container.setAttribute(
                  "transform",
                  e.transform.mProps.v.to2dCSS(),
                ));
          }
          function i(r, i, n) {
            var a,
              s,
              o,
              h,
              l,
              p,
              c,
              f,
              u,
              m,
              d,
              y = i.styles.length,
              g = i.lvl;
            for (p = 0; p < y; p += 1) {
              if (((h = i.sh._mdf || n), i.styles[p].lvl < g)) {
                for (
                  f = e.reset(),
                    m = g - i.styles[p].lvl,
                    d = i.transformers.length - 1;
                  !h && m > 0;

                )
                  ((h = i.transformers[d].mProps._mdf || h),
                    (m -= 1),
                    (d -= 1));
                if (h)
                  for (
                    m = g - i.styles[p].lvl, d = i.transformers.length - 1;
                    m > 0;

                  )
                    ((u = i.transformers[d].mProps.v.props),
                      f.transform(
                        u[0],
                        u[1],
                        u[2],
                        u[3],
                        u[4],
                        u[5],
                        u[6],
                        u[7],
                        u[8],
                        u[9],
                        u[10],
                        u[11],
                        u[12],
                        u[13],
                        u[14],
                        u[15],
                      ),
                      (m -= 1),
                      (d -= 1));
              } else f = t;
              if (((s = (c = i.sh.paths)._length), h)) {
                for (o = "", a = 0; a < s; a += 1)
                  (l = c.shapes[a]) &&
                    l._length &&
                    (o += buildShapeString(l, l._length, l.c, f));
                i.caches[p] = o;
              } else o = i.caches[p];
              ((i.styles[p].d += !0 === r.hd ? "" : o),
                (i.styles[p]._mdf = h || i.styles[p]._mdf));
            }
          }
          function n(t, e, r) {
            var i = e.style;
            ((e.c._mdf || r) &&
              i.pElem.setAttribute(
                "fill",
                "rgb(" +
                  bmFloor(e.c.v[0]) +
                  "," +
                  bmFloor(e.c.v[1]) +
                  "," +
                  bmFloor(e.c.v[2]) +
                  ")",
              ),
              (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v));
          }
          function a(t, e, r) {
            (s(t, e, r), o(t, e, r));
          }
          function s(t, e, r) {
            var i,
              n,
              a,
              s,
              o,
              h = e.gf,
              l = e.g._hasOpacity,
              p = e.s.v,
              c = e.e.v;
            if (e.o._mdf || r) {
              var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
              e.style.pElem.setAttribute(f, e.o.v);
            }
            if (e.s._mdf || r) {
              var u = 1 === t.t ? "x1" : "cx",
                m = "x1" === u ? "y1" : "cy";
              (h.setAttribute(u, p[0]),
                h.setAttribute(m, p[1]),
                l &&
                  !e.g._collapsable &&
                  (e.of.setAttribute(u, p[0]), e.of.setAttribute(m, p[1])));
            }
            if (e.g._cmdf || r) {
              i = e.cst;
              var d = e.g.c;
              for (a = i.length, n = 0; n < a; n += 1)
                ((s = i[n]).setAttribute("offset", d[4 * n] + "%"),
                  s.setAttribute(
                    "stop-color",
                    "rgb(" +
                      d[4 * n + 1] +
                      "," +
                      d[4 * n + 2] +
                      "," +
                      d[4 * n + 3] +
                      ")",
                  ));
            }
            if (l && (e.g._omdf || r)) {
              var y = e.g.o;
              for (
                a = (i = e.g._collapsable ? e.cst : e.ost).length, n = 0;
                n < a;
                n += 1
              )
                ((s = i[n]),
                  e.g._collapsable || s.setAttribute("offset", y[2 * n] + "%"),
                  s.setAttribute("stop-opacity", y[2 * n + 1]));
            }
            if (1 === t.t)
              (e.e._mdf || r) &&
                (h.setAttribute("x2", c[0]),
                h.setAttribute("y2", c[1]),
                l &&
                  !e.g._collapsable &&
                  (e.of.setAttribute("x2", c[0]),
                  e.of.setAttribute("y2", c[1])));
            else if (
              ((e.s._mdf || e.e._mdf || r) &&
                ((o = Math.sqrt(
                  Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2),
                )),
                h.setAttribute("r", o),
                l && !e.g._collapsable && e.of.setAttribute("r", o)),
              e.e._mdf || e.h._mdf || e.a._mdf || r)
            ) {
              o ||
                (o = Math.sqrt(
                  Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2),
                ));
              var g = Math.atan2(c[1] - p[1], c[0] - p[0]),
                v = e.h.v;
              v >= 1 ? (v = 0.99) : v <= -1 && (v = -0.99);
              var b = o * v,
                x = Math.cos(g + e.a.v) * b + p[0],
                E = Math.sin(g + e.a.v) * b + p[1];
              (h.setAttribute("fx", x),
                h.setAttribute("fy", E),
                l &&
                  !e.g._collapsable &&
                  (e.of.setAttribute("fx", x), e.of.setAttribute("fy", E)));
            }
          }
          function o(t, e, r) {
            var i = e.style,
              n = e.d;
            (n &&
              (n._mdf || r) &&
              n.dashStr &&
              (i.pElem.setAttribute("stroke-dasharray", n.dashStr),
              i.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])),
              e.c &&
                (e.c._mdf || r) &&
                i.pElem.setAttribute(
                  "stroke",
                  "rgb(" +
                    bmFloor(e.c.v[0]) +
                    "," +
                    bmFloor(e.c.v[1]) +
                    "," +
                    bmFloor(e.c.v[2]) +
                    ")",
                ),
              (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v),
              (e.w._mdf || r) &&
                (i.pElem.setAttribute("stroke-width", e.w.v),
                i.msElem && i.msElem.setAttribute("stroke-width", e.w.v)));
          }
          return {
            createRenderFunction: function (t) {
              switch (t.ty) {
                case "fl":
                  return n;
                case "gf":
                  return s;
                case "gs":
                  return a;
                case "st":
                  return o;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                  return i;
                case "tr":
                  return r;
                default:
                  return null;
              }
            },
          };
        })();
        function ShapeTransformManager() {
          ((this.sequences = {}),
            (this.sequenceList = []),
            (this.transform_key_count = 0));
        }
        function CVShapeData(t, e, r, i) {
          ((this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]));
          var n,
            a = 4;
          ("rc" === e.ty
            ? (a = 5)
            : "el" === e.ty
              ? (a = 6)
              : "sr" === e.ty && (a = 7),
            (this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t)));
          var s,
            o = r.length;
          for (n = 0; n < o; n += 1)
            r[n].closed ||
              ((s = {
                transforms: i.addTransformSequence(r[n].transforms),
                trNodes: [],
              }),
              this.styledShapes.push(s),
              r[n].elements.push(s));
        }
        function BaseElement() {}
        function NullElement(t, e, r) {
          (this.initFrame(),
            this.initBaseData(t, e, r),
            this.initFrame(),
            this.initTransform(t, e, r),
            this.initHierarchy());
        }
        function SVGBaseElement() {}
        function IShapeElement() {}
        function ITextElement() {}
        function ICompElement() {}
        function IImageElement(t, e, r) {
          ((this.assetData = e.getAssetData(t.refId)),
            this.initElement(t, e, r),
            (this.sourceRect = {
              top: 0,
              left: 0,
              width: this.assetData.w,
              height: this.assetData.h,
            }));
        }
        function ISolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function AudioElement(t, e, r) {
          (this.initFrame(),
            this.initRenderable(),
            (this.assetData = e.getAssetData(t.refId)),
            this.initBaseData(t, e, r),
            (this._isPlaying = !1),
            (this._canPlay = !1));
          var i = this.globalData.getAssetsPath(this.assetData);
          ((this.audio = this.globalData.audioController.createAudio(i)),
            (this._currentTime = 0),
            this.globalData.audioController.addAudio(this),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 }));
        }
        function FootageElement(t, e, r) {
          (this.initFrame(),
            this.initRenderable(),
            (this.assetData = e.getAssetData(t.refId)),
            (this.footageData = e.imageLoader.getAsset(this.assetData)),
            this.initBaseData(t, e, r));
        }
        function SVGCompElement(t, e, r) {
          ((this.layers = t.layers),
            (this.supports3d = !0),
            (this.completeLayers = !1),
            (this.pendingElements = []),
            (this.elements = this.layers
              ? createSizedArray(this.layers.length)
              : []),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 }));
        }
        function SVGTextLottieElement(t, e, r) {
          ((this.textSpans = []),
            (this.renderType = "svg"),
            this.initElement(t, e, r));
        }
        function SVGShapeElement(t, e, r) {
          ((this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.shapeModifiers = []),
            (this.itemsData = []),
            (this.processedElements = []),
            (this.animatedContents = []),
            this.initElement(t, e, r),
            (this.prevViewData = []));
        }
        function SVGTintFilter(t, e) {
          this.filterManager = e;
          var r = createNS("feColorMatrix");
          if (
            (r.setAttribute("type", "matrix"),
            r.setAttribute("color-interpolation-filters", "linearRGB"),
            r.setAttribute(
              "values",
              "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0",
            ),
            r.setAttribute("result", "f1"),
            t.appendChild(r),
            (r = createNS("feColorMatrix")).setAttribute("type", "matrix"),
            r.setAttribute("color-interpolation-filters", "sRGB"),
            r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            r.setAttribute("result", "f2"),
            t.appendChild(r),
            (this.matrixFilter = r),
            100 !== e.effectElements[2].p.v || e.effectElements[2].p.k)
          ) {
            var i,
              n = createNS("feMerge");
            (t.appendChild(n),
              (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
              n.appendChild(i),
              (i = createNS("feMergeNode")).setAttribute("in", "f2"),
              n.appendChild(i));
          }
        }
        function SVGFillFilter(t, e) {
          this.filterManager = e;
          var r = createNS("feColorMatrix");
          (r.setAttribute("type", "matrix"),
            r.setAttribute("color-interpolation-filters", "sRGB"),
            r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            t.appendChild(r),
            (this.matrixFilter = r));
        }
        function SVGGaussianBlurEffect(t, e) {
          (t.setAttribute("x", "-100%"),
            t.setAttribute("y", "-100%"),
            t.setAttribute("width", "300%"),
            t.setAttribute("height", "300%"),
            (this.filterManager = e));
          var r = createNS("feGaussianBlur");
          (t.appendChild(r), (this.feGaussianBlur = r));
        }
        function SVGStrokeEffect(t, e) {
          ((this.initialized = !1),
            (this.filterManager = e),
            (this.elem = t),
            (this.paths = []));
        }
        function SVGTritoneFilter(t, e) {
          this.filterManager = e;
          var r = createNS("feColorMatrix");
          (r.setAttribute("type", "matrix"),
            r.setAttribute("color-interpolation-filters", "linearRGB"),
            r.setAttribute(
              "values",
              "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0",
            ),
            r.setAttribute("result", "f1"),
            t.appendChild(r));
          var i = createNS("feComponentTransfer");
          (i.setAttribute("color-interpolation-filters", "sRGB"),
            t.appendChild(i),
            (this.matrixFilter = i));
          var n = createNS("feFuncR");
          (n.setAttribute("type", "table"),
            i.appendChild(n),
            (this.feFuncR = n));
          var a = createNS("feFuncG");
          (a.setAttribute("type", "table"),
            i.appendChild(a),
            (this.feFuncG = a));
          var s = createNS("feFuncB");
          (s.setAttribute("type", "table"),
            i.appendChild(s),
            (this.feFuncB = s));
        }
        function SVGProLevelsFilter(t, e) {
          this.filterManager = e;
          var r = this.filterManager.effectElements,
            i = createNS("feComponentTransfer");
          ((r[10].p.k ||
            0 !== r[10].p.v ||
            r[11].p.k ||
            1 !== r[11].p.v ||
            r[12].p.k ||
            1 !== r[12].p.v ||
            r[13].p.k ||
            0 !== r[13].p.v ||
            r[14].p.k ||
            1 !== r[14].p.v) &&
            (this.feFuncR = this.createFeFunc("feFuncR", i)),
            (r[17].p.k ||
              0 !== r[17].p.v ||
              r[18].p.k ||
              1 !== r[18].p.v ||
              r[19].p.k ||
              1 !== r[19].p.v ||
              r[20].p.k ||
              0 !== r[20].p.v ||
              r[21].p.k ||
              1 !== r[21].p.v) &&
              (this.feFuncG = this.createFeFunc("feFuncG", i)),
            (r[24].p.k ||
              0 !== r[24].p.v ||
              r[25].p.k ||
              1 !== r[25].p.v ||
              r[26].p.k ||
              1 !== r[26].p.v ||
              r[27].p.k ||
              0 !== r[27].p.v ||
              r[28].p.k ||
              1 !== r[28].p.v) &&
              (this.feFuncB = this.createFeFunc("feFuncB", i)),
            (r[31].p.k ||
              0 !== r[31].p.v ||
              r[32].p.k ||
              1 !== r[32].p.v ||
              r[33].p.k ||
              1 !== r[33].p.v ||
              r[34].p.k ||
              0 !== r[34].p.v ||
              r[35].p.k ||
              1 !== r[35].p.v) &&
              (this.feFuncA = this.createFeFunc("feFuncA", i)),
            (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
              (i.setAttribute("color-interpolation-filters", "sRGB"),
              t.appendChild(i),
              (i = createNS("feComponentTransfer"))),
            (r[3].p.k ||
              0 !== r[3].p.v ||
              r[4].p.k ||
              1 !== r[4].p.v ||
              r[5].p.k ||
              1 !== r[5].p.v ||
              r[6].p.k ||
              0 !== r[6].p.v ||
              r[7].p.k ||
              1 !== r[7].p.v) &&
              (i.setAttribute("color-interpolation-filters", "sRGB"),
              t.appendChild(i),
              (this.feFuncRComposed = this.createFeFunc("feFuncR", i)),
              (this.feFuncGComposed = this.createFeFunc("feFuncG", i)),
              (this.feFuncBComposed = this.createFeFunc("feFuncB", i))));
        }
        function SVGDropShadowEffect(t, e) {
          var r = e.container.globalData.renderConfig.filterSize;
          (t.setAttribute("x", r.x),
            t.setAttribute("y", r.y),
            t.setAttribute("width", r.width),
            t.setAttribute("height", r.height),
            (this.filterManager = e));
          var i = createNS("feGaussianBlur");
          (i.setAttribute("in", "SourceAlpha"),
            i.setAttribute("result", "drop_shadow_1"),
            i.setAttribute("stdDeviation", "0"),
            (this.feGaussianBlur = i),
            t.appendChild(i));
          var n = createNS("feOffset");
          (n.setAttribute("dx", "25"),
            n.setAttribute("dy", "0"),
            n.setAttribute("in", "drop_shadow_1"),
            n.setAttribute("result", "drop_shadow_2"),
            (this.feOffset = n),
            t.appendChild(n));
          var a = createNS("feFlood");
          (a.setAttribute("flood-color", "#00ff00"),
            a.setAttribute("flood-opacity", "1"),
            a.setAttribute("result", "drop_shadow_3"),
            (this.feFlood = a),
            t.appendChild(a));
          var s = createNS("feComposite");
          (s.setAttribute("in", "drop_shadow_3"),
            s.setAttribute("in2", "drop_shadow_2"),
            s.setAttribute("operator", "in"),
            s.setAttribute("result", "drop_shadow_4"),
            t.appendChild(s));
          var o,
            h = createNS("feMerge");
          (t.appendChild(h),
            (o = createNS("feMergeNode")),
            h.appendChild(o),
            (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
            (this.feMergeNode = o),
            (this.feMerge = h),
            (this.originalNodeAdded = !1),
            h.appendChild(o));
        }
        ((ShapeTransformManager.prototype = {
          addTransformSequence: function (t) {
            var e,
              r = t.length,
              i = "_";
            for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
            var n = this.sequences[i];
            return (
              n ||
                ((n = {
                  transforms: [].concat(t),
                  finalTransform: new Matrix(),
                  _mdf: !1,
                }),
                (this.sequences[i] = n),
                this.sequenceList.push(n)),
              n
            );
          },
          processSequence: function (t, e) {
            for (var r, i = 0, n = t.transforms.length, a = e; i < n && !e; ) {
              if (t.transforms[i].transform.mProps._mdf) {
                a = !0;
                break;
              }
              i += 1;
            }
            if (a)
              for (t.finalTransform.reset(), i = n - 1; i >= 0; i -= 1)
                ((r = t.transforms[i].transform.mProps.v.props),
                  t.finalTransform.transform(
                    r[0],
                    r[1],
                    r[2],
                    r[3],
                    r[4],
                    r[5],
                    r[6],
                    r[7],
                    r[8],
                    r[9],
                    r[10],
                    r[11],
                    r[12],
                    r[13],
                    r[14],
                    r[15],
                  ));
            t._mdf = a;
          },
          processSequences: function (t) {
            var e,
              r = this.sequenceList.length;
            for (e = 0; e < r; e += 1)
              this.processSequence(this.sequenceList[e], t);
          },
          getNewKey: function () {
            return (
              (this.transform_key_count += 1),
              "_" + this.transform_key_count
            );
          },
        }),
          (CVShapeData.prototype.setAsAnimated =
            SVGShapeData.prototype.setAsAnimated),
          (BaseElement.prototype = {
            checkMasks: function () {
              if (!this.data.hasMask) return !1;
              for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                if (
                  "n" !== this.data.masksProperties[t].mode &&
                  !1 !== this.data.masksProperties[t].cl
                )
                  return !0;
                t += 1;
              }
              return !1;
            },
            initExpressions: function () {
              ((this.layerInterface = LayerExpressionInterface(this)),
                this.data.hasMask &&
                  this.maskManager &&
                  this.layerInterface.registerMaskInterface(this.maskManager));
              var t = EffectsExpressionInterface.createEffectsInterface(
                this,
                this.layerInterface,
              );
              (this.layerInterface.registerEffectsInterface(t),
                0 === this.data.ty || this.data.xt
                  ? (this.compInterface = CompExpressionInterface(this))
                  : 4 === this.data.ty
                    ? ((this.layerInterface.shapeInterface =
                        ShapeExpressionInterface(
                          this.shapesData,
                          this.itemsData,
                          this.layerInterface,
                        )),
                      (this.layerInterface.content =
                        this.layerInterface.shapeInterface))
                    : 5 === this.data.ty &&
                      ((this.layerInterface.textInterface =
                        TextExpressionInterface(this)),
                      (this.layerInterface.text =
                        this.layerInterface.textInterface)));
            },
            setBlendMode: function () {
              var t = getBlendMode(this.data.bm);
              (this.baseElement || this.layerElement).style["mix-blend-mode"] =
                t;
            },
            initBaseData: function (t, e, r) {
              ((this.globalData = e),
                (this.comp = r),
                (this.data = t),
                (this.layerId = createElementID()),
                this.data.sr || (this.data.sr = 1),
                (this.effectsManager = new EffectsManager(
                  this.data,
                  this,
                  this.dynamicProperties,
                )));
            },
            getType: function () {
              return this.type;
            },
            sourceRectAtTime: function () {},
          }),
          (NullElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0);
          }),
          (NullElement.prototype.renderFrame = function () {}),
          (NullElement.prototype.getBaseElement = function () {
            return null;
          }),
          (NullElement.prototype.destroy = function () {}),
          (NullElement.prototype.sourceRectAtTime = function () {}),
          (NullElement.prototype.hide = function () {}),
          extendPrototype(
            [BaseElement, TransformElement, HierarchyElement, FrameElement],
            NullElement,
          ),
          (SVGBaseElement.prototype = {
            initRendererElement: function () {
              this.layerElement = createNS("g");
            },
            createContainerElements: function () {
              ((this.matteElement = createNS("g")),
                (this.transformedElement = this.layerElement),
                (this.maskedElement = this.layerElement),
                (this._sizeChanged = !1));
              var t,
                e,
                r,
                i = null;
              if (this.data.td) {
                if (3 == this.data.td || 1 == this.data.td) {
                  var n = createNS("mask");
                  (n.setAttribute("id", this.layerId),
                    n.setAttribute(
                      "mask-type",
                      3 == this.data.td ? "luminance" : "alpha",
                    ),
                    n.appendChild(this.layerElement),
                    (i = n),
                    this.globalData.defs.appendChild(n),
                    featureSupport.maskType ||
                      1 != this.data.td ||
                      (n.setAttribute("mask-type", "luminance"),
                      (t = createElementID()),
                      (e = filtersFactory.createFilter(t)),
                      this.globalData.defs.appendChild(e),
                      e.appendChild(
                        filtersFactory.createAlphaToLuminanceFilter(),
                      ),
                      (r = createNS("g")).appendChild(this.layerElement),
                      (i = r),
                      n.appendChild(r),
                      r.setAttribute(
                        "filter",
                        "url(" + locationHref + "#" + t + ")",
                      )));
                } else if (2 == this.data.td) {
                  var a = createNS("mask");
                  (a.setAttribute("id", this.layerId),
                    a.setAttribute("mask-type", "alpha"));
                  var s = createNS("g");
                  (a.appendChild(s),
                    (t = createElementID()),
                    (e = filtersFactory.createFilter(t)));
                  var o = createNS("feComponentTransfer");
                  (o.setAttribute("in", "SourceGraphic"), e.appendChild(o));
                  var h = createNS("feFuncA");
                  (h.setAttribute("type", "table"),
                    h.setAttribute("tableValues", "1.0 0.0"),
                    o.appendChild(h),
                    this.globalData.defs.appendChild(e));
                  var l = createNS("rect");
                  (l.setAttribute("width", this.comp.data.w),
                    l.setAttribute("height", this.comp.data.h),
                    l.setAttribute("x", "0"),
                    l.setAttribute("y", "0"),
                    l.setAttribute("fill", "#ffffff"),
                    l.setAttribute("opacity", "0"),
                    s.setAttribute(
                      "filter",
                      "url(" + locationHref + "#" + t + ")",
                    ),
                    s.appendChild(l),
                    s.appendChild(this.layerElement),
                    (i = s),
                    featureSupport.maskType ||
                      (a.setAttribute("mask-type", "luminance"),
                      e.appendChild(
                        filtersFactory.createAlphaToLuminanceFilter(),
                      ),
                      (r = createNS("g")),
                      s.appendChild(l),
                      r.appendChild(this.layerElement),
                      (i = r),
                      s.appendChild(r)),
                    this.globalData.defs.appendChild(a));
                }
              } else
                this.data.tt
                  ? (this.matteElement.appendChild(this.layerElement),
                    (i = this.matteElement),
                    (this.baseElement = this.matteElement))
                  : (this.baseElement = this.layerElement);
              if (
                (this.data.ln &&
                  this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl &&
                  this.layerElement.setAttribute("class", this.data.cl),
                0 === this.data.ty && !this.data.hd)
              ) {
                var p = createNS("clipPath"),
                  c = createNS("path");
                c.setAttribute(
                  "d",
                  "M0,0 L" +
                    this.data.w +
                    ",0 L" +
                    this.data.w +
                    "," +
                    this.data.h +
                    " L0," +
                    this.data.h +
                    "z",
                );
                var f = createElementID();
                if (
                  (p.setAttribute("id", f),
                  p.appendChild(c),
                  this.globalData.defs.appendChild(p),
                  this.checkMasks())
                ) {
                  var u = createNS("g");
                  (u.setAttribute(
                    "clip-path",
                    "url(" + locationHref + "#" + f + ")",
                  ),
                    u.appendChild(this.layerElement),
                    (this.transformedElement = u),
                    i
                      ? i.appendChild(this.transformedElement)
                      : (this.baseElement = this.transformedElement));
                } else
                  this.layerElement.setAttribute(
                    "clip-path",
                    "url(" + locationHref + "#" + f + ")",
                  );
              }
              0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function () {
              (this.finalTransform._matMdf &&
                this.transformedElement.setAttribute(
                  "transform",
                  this.finalTransform.mat.to2dCSS(),
                ),
                this.finalTransform._opMdf &&
                  this.transformedElement.setAttribute(
                    "opacity",
                    this.finalTransform.mProp.o.v,
                  ));
            },
            destroyBaseElement: function () {
              ((this.layerElement = null),
                (this.matteElement = null),
                this.maskManager.destroy());
            },
            getBaseElement: function () {
              return this.data.hd ? null : this.baseElement;
            },
            createRenderableComponents: function () {
              ((this.maskManager = new MaskElement(
                this.data,
                this,
                this.globalData,
              )),
                (this.renderableEffectsManager = new SVGEffects(this)));
            },
            setMatte: function (t) {
              this.matteElement &&
                this.matteElement.setAttribute(
                  "mask",
                  "url(" + locationHref + "#" + t + ")",
                );
            },
          }),
          (IShapeElement.prototype = {
            addShapeToModifiers: function (t) {
              var e,
                r = this.shapeModifiers.length;
              for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t);
            },
            isShapeInAnimatedModifiers: function (t) {
              for (var e = this.shapeModifiers.length; 0 < e; )
                if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
              return !1;
            },
            renderModifiers: function () {
              if (this.shapeModifiers.length) {
                var t,
                  e = this.shapes.length;
                for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                for (
                  t = (e = this.shapeModifiers.length) - 1;
                  t >= 0 &&
                  !this.shapeModifiers[t].processShapes(this._isFirstFrame);
                  t -= 1
                );
              }
            },
            lcEnum: { 1: "butt", 2: "round", 3: "square" },
            ljEnum: { 1: "miter", 2: "round", 3: "bevel" },
            searchProcessedElement: function (t) {
              for (
                var e = this.processedElements, r = 0, i = e.length;
                r < i;

              ) {
                if (e[r].elem === t) return e[r].pos;
                r += 1;
              }
              return 0;
            },
            addProcessedElement: function (t, e) {
              for (var r = this.processedElements, i = r.length; i; )
                if (r[(i -= 1)].elem === t) return void (r[i].pos = e);
              r.push(new ProcessedElement(t, e));
            },
            prepareFrame: function (t) {
              (this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange));
            },
          }),
          (ITextElement.prototype.initElement = function (t, e, r) {
            ((this.lettersChangedFlag = !0),
              this.initFrame(),
              this.initBaseData(t, e, r),
              (this.textProperty = new TextProperty(
                this,
                t.t,
                this.dynamicProperties,
              )),
              (this.textAnimator = new TextAnimatorProperty(
                t.t,
                this.renderType,
                this,
              )),
              this.initTransform(t, e, r),
              this.initHierarchy(),
              this.initRenderable(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              this.createContent(),
              this.hide(),
              this.textAnimator.searchProperties(this.dynamicProperties));
          }),
          (ITextElement.prototype.prepareFrame = function (t) {
            ((this._mdf = !1),
              this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange),
              (this.textProperty._mdf || this.textProperty._isFirstFrame) &&
                (this.buildNewText(),
                (this.textProperty._isFirstFrame = !1),
                (this.textProperty._mdf = !1)));
          }),
          (ITextElement.prototype.createPathShape = function (t, e) {
            var r,
              i,
              n = e.length,
              a = "";
            for (r = 0; r < n; r += 1)
              ((i = e[r].ks.k), (a += buildShapeString(i, i.i.length, !0, t)));
            return a;
          }),
          (ITextElement.prototype.updateDocumentData = function (t, e) {
            this.textProperty.updateDocumentData(t, e);
          }),
          (ITextElement.prototype.canResizeFont = function (t) {
            this.textProperty.canResizeFont(t);
          }),
          (ITextElement.prototype.setMinimumFontSize = function (t) {
            this.textProperty.setMinimumFontSize(t);
          }),
          (ITextElement.prototype.applyTextPropertiesToMatrix = function (
            t,
            e,
            r,
            i,
            n,
          ) {
            switch (
              (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
              e.translate(0, -t.ls, 0),
              t.j)
            ) {
              case 1:
                e.translate(
                  t.justifyOffset + (t.boxWidth - t.lineWidths[r]),
                  0,
                  0,
                );
                break;
              case 2:
                e.translate(
                  t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2,
                  0,
                  0,
                );
            }
            e.translate(i, n, 0);
          }),
          (ITextElement.prototype.buildColor = function (t) {
            return (
              "rgb(" +
              Math.round(255 * t[0]) +
              "," +
              Math.round(255 * t[1]) +
              "," +
              Math.round(255 * t[2]) +
              ")"
            );
          }),
          (ITextElement.prototype.emptyProp = new LetterProps()),
          (ITextElement.prototype.destroy = function () {}),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            ICompElement,
          ),
          (ICompElement.prototype.initElement = function (t, e, r) {
            (this.initFrame(),
              this.initBaseData(t, e, r),
              this.initTransform(t, e, r),
              this.initRenderable(),
              this.initHierarchy(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
              this.hide());
          }),
          (ICompElement.prototype.prepareFrame = function (t) {
            if (
              ((this._mdf = !1),
              this.prepareRenderableFrame(t),
              this.prepareProperties(t, this.isInRange),
              this.isInRange || this.data.xt)
            ) {
              if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
              else {
                var e = this.tm.v;
                (e === this.data.op && (e = this.data.op - 1),
                  (this.renderedFrame = e));
              }
              var r,
                i = this.elements.length;
              for (
                this.completeLayers || this.checkLayers(this.renderedFrame),
                  r = i - 1;
                r >= 0;
                r -= 1
              )
                (this.completeLayers || this.elements[r]) &&
                  (this.elements[r].prepareFrame(
                    this.renderedFrame - this.layers[r].st,
                  ),
                  this.elements[r]._mdf && (this._mdf = !0));
            }
          }),
          (ICompElement.prototype.renderInnerContent = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1)
              (this.completeLayers || this.elements[t]) &&
                this.elements[t].renderFrame();
          }),
          (ICompElement.prototype.setElements = function (t) {
            this.elements = t;
          }),
          (ICompElement.prototype.getElements = function () {
            return this.elements;
          }),
          (ICompElement.prototype.destroyElements = function () {
            var t,
              e = this.layers.length;
            for (t = 0; t < e; t += 1)
              this.elements[t] && this.elements[t].destroy();
          }),
          (ICompElement.prototype.destroy = function () {
            (this.destroyElements(), this.destroyBaseElement());
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              SVGBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            IImageElement,
          ),
          (IImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData);
            ((this.innerElem = createNS("image")),
              this.innerElem.setAttribute("width", this.assetData.w + "px"),
              this.innerElem.setAttribute("height", this.assetData.h + "px"),
              this.innerElem.setAttribute(
                "preserveAspectRatio",
                this.assetData.pr ||
                  this.globalData.renderConfig.imagePreserveAspectRatio,
              ),
              this.innerElem.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "href",
                t,
              ),
              this.layerElement.appendChild(this.innerElem));
          }),
          (IImageElement.prototype.sourceRectAtTime = function () {
            return this.sourceRect;
          }),
          extendPrototype([IImageElement], ISolidElement),
          (ISolidElement.prototype.createContent = function () {
            var t = createNS("rect");
            (t.setAttribute("width", this.data.sw),
              t.setAttribute("height", this.data.sh),
              t.setAttribute("fill", this.data.sc),
              this.layerElement.appendChild(t));
          }),
          (AudioElement.prototype.prepareFrame = function (t) {
            if (
              (this.prepareRenderableFrame(t, !0),
              this.prepareProperties(t, !0),
              this.tm._placeholder)
            )
              this._currentTime = t / this.data.sr;
            else {
              var e = this.tm.v;
              this._currentTime = e;
            }
          }),
          extendPrototype(
            [RenderableElement, BaseElement, FrameElement],
            AudioElement,
          ),
          (AudioElement.prototype.renderFrame = function () {
            this.isInRange &&
              this._canPlay &&
              (this._isPlaying
                ? (!this.audio.playing() ||
                    Math.abs(
                      this._currentTime / this.globalData.frameRate -
                        this.audio.seek(),
                    ) > 0.1) &&
                  this.audio.seek(this._currentTime / this.globalData.frameRate)
                : (this.audio.play(),
                  this.audio.seek(
                    this._currentTime / this.globalData.frameRate,
                  ),
                  (this._isPlaying = !0)));
          }),
          (AudioElement.prototype.show = function () {}),
          (AudioElement.prototype.hide = function () {
            (this.audio.pause(), (this._isPlaying = !1));
          }),
          (AudioElement.prototype.pause = function () {
            (this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1));
          }),
          (AudioElement.prototype.resume = function () {
            this._canPlay = !0;
          }),
          (AudioElement.prototype.setRate = function (t) {
            this.audio.rate(t);
          }),
          (AudioElement.prototype.volume = function (t) {
            this.audio.volume(t);
          }),
          (AudioElement.prototype.getBaseElement = function () {
            return null;
          }),
          (AudioElement.prototype.destroy = function () {}),
          (AudioElement.prototype.sourceRectAtTime = function () {}),
          (AudioElement.prototype.initExpressions = function () {}),
          (FootageElement.prototype.prepareFrame = function () {}),
          extendPrototype(
            [RenderableElement, BaseElement, FrameElement],
            FootageElement,
          ),
          (FootageElement.prototype.getBaseElement = function () {
            return null;
          }),
          (FootageElement.prototype.renderFrame = function () {}),
          (FootageElement.prototype.destroy = function () {}),
          (FootageElement.prototype.initExpressions = function () {
            this.layerInterface = FootageInterface(this);
          }),
          (FootageElement.prototype.getFootageData = function () {
            return this.footageData;
          }),
          extendPrototype(
            [SVGRenderer, ICompElement, SVGBaseElement],
            SVGCompElement,
          ),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              SVGBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
              ITextElement,
            ],
            SVGTextLottieElement,
          ),
          (SVGTextLottieElement.prototype.createContent = function () {
            this.data.singleShape &&
              !this.globalData.fontManager.chars &&
              (this.textContainer = createNS("text"));
          }),
          (SVGTextLottieElement.prototype.buildTextContents = function (t) {
            for (var e = 0, r = t.length, i = [], n = ""; e < r; )
              (t[e] === String.fromCharCode(13) ||
              t[e] === String.fromCharCode(3)
                ? (i.push(n), (n = ""))
                : (n += t[e]),
                (e += 1));
            return (i.push(n), i);
          }),
          (SVGTextLottieElement.prototype.buildNewText = function () {
            var t,
              e,
              r = this.textProperty.currentData;
            ((this.renderedLetters = createSizedArray(r ? r.l.length : 0)),
              r.fc
                ? this.layerElement.setAttribute("fill", this.buildColor(r.fc))
                : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
              r.sc &&
                (this.layerElement.setAttribute(
                  "stroke",
                  this.buildColor(r.sc),
                ),
                this.layerElement.setAttribute("stroke-width", r.sw)),
              this.layerElement.setAttribute("font-size", r.finalSize));
            var i = this.globalData.fontManager.getFontByName(r.f);
            if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
            else {
              this.layerElement.setAttribute("font-family", i.fFamily);
              var n = r.fWeight,
                a = r.fStyle;
              (this.layerElement.setAttribute("font-style", a),
                this.layerElement.setAttribute("font-weight", n));
            }
            this.layerElement.setAttribute("aria-label", r.t);
            var s,
              o = r.l || [],
              h = !!this.globalData.fontManager.chars;
            e = o.length;
            var l,
              p = this.mHelper,
              c = "",
              f = this.data.singleShape,
              u = 0,
              m = 0,
              d = !0,
              y = 0.001 * r.tr * r.finalSize;
            if (!f || h || r.sz) {
              var g,
                v,
                b = this.textSpans.length;
              for (t = 0; t < e; t += 1)
                ((h && f && 0 !== t) ||
                  ((s =
                    b > t ? this.textSpans[t] : createNS(h ? "path" : "text")),
                  b <= t &&
                    (s.setAttribute("stroke-linecap", "butt"),
                    s.setAttribute("stroke-linejoin", "round"),
                    s.setAttribute("stroke-miterlimit", "4"),
                    (this.textSpans[t] = s),
                    this.layerElement.appendChild(s)),
                  (s.style.display = "inherit")),
                  p.reset(),
                  p.scale(r.finalSize / 100, r.finalSize / 100),
                  f &&
                    (o[t].n &&
                      ((u = -y), (m += r.yOffset), (m += d ? 1 : 0), (d = !1)),
                    this.applyTextPropertiesToMatrix(r, p, o[t].line, u, m),
                    (u += o[t].l || 0),
                    (u += y)),
                  h
                    ? ((l = (g =
                        ((v = this.globalData.fontManager.getCharData(
                          r.finalText[t],
                          i.fStyle,
                          this.globalData.fontManager.getFontByName(r.f)
                            .fFamily,
                        )) &&
                          v.data) ||
                        {}).shapes
                        ? g.shapes[0].it
                        : []),
                      f
                        ? (c += this.createPathShape(p, l))
                        : s.setAttribute("d", this.createPathShape(p, l)))
                    : (f &&
                        s.setAttribute(
                          "transform",
                          "translate(" + p.props[12] + "," + p.props[13] + ")",
                        ),
                      (s.textContent = o[t].val),
                      s.setAttributeNS(
                        "http://www.w3.org/XML/1998/namespace",
                        "xml:space",
                        "preserve",
                      )));
              f && s && s.setAttribute("d", c);
            } else {
              var x = this.textContainer,
                E = "start";
              switch (r.j) {
                case 1:
                  E = "end";
                  break;
                case 2:
                  E = "middle";
                  break;
                default:
                  E = "start";
              }
              (x.setAttribute("text-anchor", E),
                x.setAttribute("letter-spacing", y));
              var P = this.buildTextContents(r.finalText);
              for (
                e = P.length, m = r.ps ? r.ps[1] + r.ascent : 0, t = 0;
                t < e;
                t += 1
              )
                (((s = this.textSpans[t] || createNS("tspan")).textContent =
                  P[t]),
                  s.setAttribute("x", 0),
                  s.setAttribute("y", m),
                  (s.style.display = "inherit"),
                  x.appendChild(s),
                  (this.textSpans[t] = s),
                  (m += r.finalLineHeight));
              this.layerElement.appendChild(x);
            }
            for (; t < this.textSpans.length; )
              ((this.textSpans[t].style.display = "none"), (t += 1));
            this._sizeChanged = !0;
          }),
          (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
            if (
              (this.prepareFrame(this.comp.renderedFrame - this.data.st),
              this.renderInnerContent(),
              this._sizeChanged)
            ) {
              this._sizeChanged = !1;
              var t = this.layerElement.getBBox();
              this.bbox = {
                top: t.y,
                left: t.x,
                width: t.width,
                height: t.height,
              };
            }
            return this.bbox;
          }),
          (SVGTextLottieElement.prototype.renderInnerContent = function () {
            if (
              !this.data.singleShape &&
              (this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag,
              ),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
            ) {
              var t, e;
              this._sizeChanged = !0;
              var r,
                i,
                n = this.textAnimator.renderedLetters,
                a = this.textProperty.currentData.l;
              for (e = a.length, t = 0; t < e; t += 1)
                a[t].n ||
                  ((r = n[t]),
                  (i = this.textSpans[t]),
                  r._mdf.m && i.setAttribute("transform", r.m),
                  r._mdf.o && i.setAttribute("opacity", r.o),
                  r._mdf.sw && i.setAttribute("stroke-width", r.sw),
                  r._mdf.sc && i.setAttribute("stroke", r.sc),
                  r._mdf.fc && i.setAttribute("fill", r.fc));
            }
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              SVGBaseElement,
              IShapeElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            SVGShapeElement,
          ),
          (SVGShapeElement.prototype.initSecondaryElement = function () {}),
          (SVGShapeElement.prototype.identityMatrix = new Matrix()),
          (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
          (SVGShapeElement.prototype.createContent = function () {
            (this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0,
            ),
              this.filterUniqueShapes());
          }),
          (SVGShapeElement.prototype.filterUniqueShapes = function () {
            var t,
              e,
              r,
              i,
              n = this.shapes.length,
              a = this.stylesList.length,
              s = [],
              o = !1;
            for (r = 0; r < a; r += 1) {
              for (
                i = this.stylesList[r], o = !1, s.length = 0, t = 0;
                t < n;
                t += 1
              )
                -1 !== (e = this.shapes[t]).styles.indexOf(i) &&
                  (s.push(e), (o = e._isAnimated || o));
              s.length > 1 && o && this.setShapesAsAnimated(s);
            }
          }),
          (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) t[e].setAsAnimated();
          }),
          (SVGShapeElement.prototype.createStyleElement = function (t, e) {
            var r,
              i = new SVGStyleData(t, e),
              n = i.pElem;
            if ("st" === t.ty) r = new SVGStrokeStyleData(this, t, i);
            else if ("fl" === t.ty) r = new SVGFillStyleData(this, t, i);
            else if ("gf" === t.ty || "gs" === t.ty) {
              ((r = new (
                "gf" === t.ty
                  ? SVGGradientFillStyleData
                  : SVGGradientStrokeStyleData
              )(this, t, i)),
                this.globalData.defs.appendChild(r.gf),
                r.maskId &&
                  (this.globalData.defs.appendChild(r.ms),
                  this.globalData.defs.appendChild(r.of),
                  n.setAttribute(
                    "mask",
                    "url(" + locationHref + "#" + r.maskId + ")",
                  )));
            }
            return (
              ("st" !== t.ty && "gs" !== t.ty) ||
                (n.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"),
                n.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"),
                n.setAttribute("fill-opacity", "0"),
                1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)),
              2 === t.r && n.setAttribute("fill-rule", "evenodd"),
              t.ln && n.setAttribute("id", t.ln),
              t.cl && n.setAttribute("class", t.cl),
              t.bm && (n.style["mix-blend-mode"] = getBlendMode(t.bm)),
              this.stylesList.push(i),
              this.addToAnimatedContents(t, r),
              r
            );
          }),
          (SVGShapeElement.prototype.createGroupElement = function (t) {
            var e = new ShapeGroupData();
            return (
              t.ln && e.gr.setAttribute("id", t.ln),
              t.cl && e.gr.setAttribute("class", t.cl),
              t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
              e
            );
          }),
          (SVGShapeElement.prototype.createTransformElement = function (t, e) {
            var r = TransformPropertyFactory.getTransformProperty(
                this,
                t,
                this,
              ),
              i = new SVGTransformData(r, r.o, e);
            return (this.addToAnimatedContents(t, i), i);
          }),
          (SVGShapeElement.prototype.createShapeElement = function (t, e, r) {
            var i = 4;
            "rc" === t.ty
              ? (i = 5)
              : "el" === t.ty
                ? (i = 6)
                : "sr" === t.ty && (i = 7);
            var n = new SVGShapeData(
              e,
              r,
              ShapePropertyFactory.getShapeProp(this, t, i, this),
            );
            return (
              this.shapes.push(n),
              this.addShapeToModifiers(n),
              this.addToAnimatedContents(t, n),
              n
            );
          }),
          (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
            for (var r = 0, i = this.animatedContents.length; r < i; ) {
              if (this.animatedContents[r].element === e) return;
              r += 1;
            }
            this.animatedContents.push({
              fn: SVGElementsRenderer.createRenderFunction(t),
              element: e,
              data: t,
            });
          }),
          (SVGShapeElement.prototype.setElementStyles = function (t) {
            var e,
              r = t.styles,
              i = this.stylesList.length;
            for (e = 0; e < i; e += 1)
              this.stylesList[e].closed || r.push(this.stylesList[e]);
          }),
          (SVGShapeElement.prototype.reloadShapes = function () {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.layerElement,
                0,
                [],
                !0,
              ),
                this.filterUniqueShapes(),
                e = this.dynamicProperties.length,
                t = 0;
              t < e;
              t += 1
            )
              this.dynamicProperties[t].getValue();
            this.renderModifiers();
          }),
          (SVGShapeElement.prototype.searchShapes = function (
            t,
            e,
            r,
            i,
            n,
            a,
            s,
          ) {
            var o,
              h,
              l,
              p,
              c,
              f,
              u = [].concat(a),
              m = t.length - 1,
              d = [],
              y = [];
            for (o = m; o >= 0; o -= 1) {
              if (
                ((f = this.searchProcessedElement(t[o]))
                  ? (e[o] = r[f - 1])
                  : (t[o]._render = s),
                "fl" === t[o].ty ||
                  "st" === t[o].ty ||
                  "gf" === t[o].ty ||
                  "gs" === t[o].ty)
              )
                (f
                  ? (e[o].style.closed = !1)
                  : (e[o] = this.createStyleElement(t[o], n)),
                  t[o]._render && i.appendChild(e[o].style.pElem),
                  d.push(e[o].style));
              else if ("gr" === t[o].ty) {
                if (f)
                  for (l = e[o].it.length, h = 0; h < l; h += 1)
                    e[o].prevViewData[h] = e[o].it[h];
                else e[o] = this.createGroupElement(t[o]);
                (this.searchShapes(
                  t[o].it,
                  e[o].it,
                  e[o].prevViewData,
                  e[o].gr,
                  n + 1,
                  u,
                  s,
                ),
                  t[o]._render && i.appendChild(e[o].gr));
              } else
                "tr" === t[o].ty
                  ? (f || (e[o] = this.createTransformElement(t[o], i)),
                    (p = e[o].transform),
                    u.push(p))
                  : "sh" === t[o].ty ||
                      "rc" === t[o].ty ||
                      "el" === t[o].ty ||
                      "sr" === t[o].ty
                    ? (f || (e[o] = this.createShapeElement(t[o], u, n)),
                      this.setElementStyles(e[o]))
                    : "tm" === t[o].ty ||
                        "rd" === t[o].ty ||
                        "ms" === t[o].ty ||
                        "pb" === t[o].ty
                      ? (f
                          ? ((c = e[o]).closed = !1)
                          : ((c = ShapeModifiers.getModifier(t[o].ty)).init(
                              this,
                              t[o],
                            ),
                            (e[o] = c),
                            this.shapeModifiers.push(c)),
                        y.push(c))
                      : "rp" === t[o].ty &&
                        (f
                          ? ((c = e[o]).closed = !0)
                          : ((c = ShapeModifiers.getModifier(t[o].ty)),
                            (e[o] = c),
                            c.init(this, t, o, e),
                            this.shapeModifiers.push(c),
                            (s = !1)),
                        y.push(c));
              this.addProcessedElement(t[o], o + 1);
            }
            for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0;
            for (m = y.length, o = 0; o < m; o += 1) y[o].closed = !0;
          }),
          (SVGShapeElement.prototype.renderInnerContent = function () {
            var t;
            this.renderModifiers();
            var e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].reset();
            for (this.renderShape(), t = 0; t < e; t += 1)
              (this.stylesList[t]._mdf || this._isFirstFrame) &&
                (this.stylesList[t].msElem &&
                  (this.stylesList[t].msElem.setAttribute(
                    "d",
                    this.stylesList[t].d,
                  ),
                  (this.stylesList[t].d = "M0 0" + this.stylesList[t].d)),
                this.stylesList[t].pElem.setAttribute(
                  "d",
                  this.stylesList[t].d || "M0 0",
                ));
          }),
          (SVGShapeElement.prototype.renderShape = function () {
            var t,
              e,
              r = this.animatedContents.length;
            for (t = 0; t < r; t += 1)
              ((e = this.animatedContents[t]),
                (this._isFirstFrame || e.element._isAnimated) &&
                  !0 !== e.data &&
                  e.fn(e.data, e.element, this._isFirstFrame));
          }),
          (SVGShapeElement.prototype.destroy = function () {
            (this.destroyBaseElement(),
              (this.shapesData = null),
              (this.itemsData = null));
          }),
          (SVGTintFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = this.filterManager.effectElements[2].p.v / 100;
              this.matrixFilter.setAttribute(
                "values",
                r[0] -
                  e[0] +
                  " 0 0 0 " +
                  e[0] +
                  " " +
                  (r[1] - e[1]) +
                  " 0 0 0 " +
                  e[1] +
                  " " +
                  (r[2] - e[2]) +
                  " 0 0 0 " +
                  e[2] +
                  " 0 0 0 " +
                  i +
                  " 0",
              );
            }
          }),
          (SVGFillFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[2].p.v,
                r = this.filterManager.effectElements[6].p.v;
              this.matrixFilter.setAttribute(
                "values",
                "0 0 0 0 " +
                  e[0] +
                  " 0 0 0 0 " +
                  e[1] +
                  " 0 0 0 0 " +
                  e[2] +
                  " 0 0 0 " +
                  r +
                  " 0",
              );
            }
          }),
          (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = 0.3 * this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = 3 == r ? 0 : e,
                n = 2 == r ? 0 : e;
              this.feGaussianBlur.setAttribute("stdDeviation", i + " " + n);
              var a =
                1 == this.filterManager.effectElements[2].p.v
                  ? "wrap"
                  : "duplicate";
              this.feGaussianBlur.setAttribute("edgeMode", a);
            }
          }),
          (SVGStrokeEffect.prototype.initialize = function () {
            var t,
              e,
              r,
              i,
              n =
                this.elem.layerElement.children ||
                this.elem.layerElement.childNodes;
            for (
              1 === this.filterManager.effectElements[1].p.v
                ? ((i = this.elem.maskManager.masksProperties.length), (r = 0))
                : (i = (r = this.filterManager.effectElements[0].p.v - 1) + 1),
                (e = createNS("g")).setAttribute("fill", "none"),
                e.setAttribute("stroke-linecap", "round"),
                e.setAttribute("stroke-dashoffset", 1);
              r < i;
              r += 1
            )
              ((t = createNS("path")),
                e.appendChild(t),
                this.paths.push({ p: t, m: r }));
            if (3 === this.filterManager.effectElements[10].p.v) {
              var a = createNS("mask"),
                s = createElementID();
              (a.setAttribute("id", s),
                a.setAttribute("mask-type", "alpha"),
                a.appendChild(e),
                this.elem.globalData.defs.appendChild(a));
              var o = createNS("g");
              for (
                o.setAttribute("mask", "url(" + locationHref + "#" + s + ")");
                n[0];

              )
                o.appendChild(n[0]);
              (this.elem.layerElement.appendChild(o),
                (this.masker = a),
                e.setAttribute("stroke", "#fff"));
            } else if (
              1 === this.filterManager.effectElements[10].p.v ||
              2 === this.filterManager.effectElements[10].p.v
            ) {
              if (2 === this.filterManager.effectElements[10].p.v)
                for (
                  n =
                    this.elem.layerElement.children ||
                    this.elem.layerElement.childNodes;
                  n.length;

                )
                  this.elem.layerElement.removeChild(n[0]);
              (this.elem.layerElement.appendChild(e),
                this.elem.layerElement.removeAttribute("mask"),
                e.setAttribute("stroke", "#fff"));
            }
            ((this.initialized = !0), (this.pathMasker = e));
          }),
          (SVGStrokeEffect.prototype.renderFrame = function (t) {
            var e;
            this.initialized || this.initialize();
            var r,
              i,
              n = this.paths.length;
            for (e = 0; e < n; e += 1)
              if (
                -1 !== this.paths[e].m &&
                ((r = this.elem.maskManager.viewData[this.paths[e].m]),
                (i = this.paths[e].p),
                (t || this.filterManager._mdf || r.prop._mdf) &&
                  i.setAttribute("d", r.lastPath),
                t ||
                  this.filterManager.effectElements[9].p._mdf ||
                  this.filterManager.effectElements[4].p._mdf ||
                  this.filterManager.effectElements[7].p._mdf ||
                  this.filterManager.effectElements[8].p._mdf ||
                  r.prop._mdf)
              ) {
                var a;
                if (
                  0 !== this.filterManager.effectElements[7].p.v ||
                  100 !== this.filterManager.effectElements[8].p.v
                ) {
                  var s =
                      0.01 *
                      Math.min(
                        this.filterManager.effectElements[7].p.v,
                        this.filterManager.effectElements[8].p.v,
                      ),
                    o =
                      0.01 *
                      Math.max(
                        this.filterManager.effectElements[7].p.v,
                        this.filterManager.effectElements[8].p.v,
                      ),
                    h = i.getTotalLength();
                  a = "0 0 0 " + h * s + " ";
                  var l,
                    p = h * (o - s),
                    c =
                      1 +
                      2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v *
                        0.01,
                    f = Math.floor(p / c);
                  for (l = 0; l < f; l += 1)
                    a +=
                      "1 " +
                      2 *
                        this.filterManager.effectElements[4].p.v *
                        this.filterManager.effectElements[9].p.v *
                        0.01 +
                      " ";
                  a += "0 " + 10 * h + " 0 0";
                } else
                  a =
                    "1 " +
                    2 *
                      this.filterManager.effectElements[4].p.v *
                      this.filterManager.effectElements[9].p.v *
                      0.01;
                i.setAttribute("stroke-dasharray", a);
              }
            if (
              ((t || this.filterManager.effectElements[4].p._mdf) &&
                this.pathMasker.setAttribute(
                  "stroke-width",
                  2 * this.filterManager.effectElements[4].p.v,
                ),
              (t || this.filterManager.effectElements[6].p._mdf) &&
                this.pathMasker.setAttribute(
                  "opacity",
                  this.filterManager.effectElements[6].p.v,
                ),
              (1 === this.filterManager.effectElements[10].p.v ||
                2 === this.filterManager.effectElements[10].p.v) &&
                (t || this.filterManager.effectElements[3].p._mdf))
            ) {
              var u = this.filterManager.effectElements[3].p.v;
              this.pathMasker.setAttribute(
                "stroke",
                "rgb(" +
                  bmFloor(255 * u[0]) +
                  "," +
                  bmFloor(255 * u[1]) +
                  "," +
                  bmFloor(255 * u[2]) +
                  ")",
              );
            }
          }),
          (SVGTritoneFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e = this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = this.filterManager.effectElements[2].p.v,
                n = i[0] + " " + r[0] + " " + e[0],
                a = i[1] + " " + r[1] + " " + e[1],
                s = i[2] + " " + r[2] + " " + e[2];
              (this.feFuncR.setAttribute("tableValues", n),
                this.feFuncG.setAttribute("tableValues", a),
                this.feFuncB.setAttribute("tableValues", s));
            }
          }),
          (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
            var r = createNS(t);
            return (r.setAttribute("type", "table"), e.appendChild(r), r);
          }),
          (SVGProLevelsFilter.prototype.getTableValue = function (
            t,
            e,
            r,
            i,
            n,
          ) {
            for (
              var a,
                s,
                o = 0,
                h = Math.min(t, e),
                l = Math.max(t, e),
                p = Array.call(null, { length: 256 }),
                c = 0,
                f = n - i,
                u = e - t;
              o <= 256;

            )
              ((s =
                (a = o / 256) <= h
                  ? u < 0
                    ? n
                    : i
                  : a >= l
                    ? u < 0
                      ? i
                      : n
                    : i + f * Math.pow((a - t) / u, 1 / r)),
                (p[c] = s),
                (c += 1),
                (o += 256 / 255));
            return p.join(" ");
          }),
          (SVGProLevelsFilter.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              var e,
                r = this.filterManager.effectElements;
              (this.feFuncRComposed &&
                (t ||
                  r[3].p._mdf ||
                  r[4].p._mdf ||
                  r[5].p._mdf ||
                  r[6].p._mdf ||
                  r[7].p._mdf) &&
                ((e = this.getTableValue(
                  r[3].p.v,
                  r[4].p.v,
                  r[5].p.v,
                  r[6].p.v,
                  r[7].p.v,
                )),
                this.feFuncRComposed.setAttribute("tableValues", e),
                this.feFuncGComposed.setAttribute("tableValues", e),
                this.feFuncBComposed.setAttribute("tableValues", e)),
                this.feFuncR &&
                  (t ||
                    r[10].p._mdf ||
                    r[11].p._mdf ||
                    r[12].p._mdf ||
                    r[13].p._mdf ||
                    r[14].p._mdf) &&
                  ((e = this.getTableValue(
                    r[10].p.v,
                    r[11].p.v,
                    r[12].p.v,
                    r[13].p.v,
                    r[14].p.v,
                  )),
                  this.feFuncR.setAttribute("tableValues", e)),
                this.feFuncG &&
                  (t ||
                    r[17].p._mdf ||
                    r[18].p._mdf ||
                    r[19].p._mdf ||
                    r[20].p._mdf ||
                    r[21].p._mdf) &&
                  ((e = this.getTableValue(
                    r[17].p.v,
                    r[18].p.v,
                    r[19].p.v,
                    r[20].p.v,
                    r[21].p.v,
                  )),
                  this.feFuncG.setAttribute("tableValues", e)),
                this.feFuncB &&
                  (t ||
                    r[24].p._mdf ||
                    r[25].p._mdf ||
                    r[26].p._mdf ||
                    r[27].p._mdf ||
                    r[28].p._mdf) &&
                  ((e = this.getTableValue(
                    r[24].p.v,
                    r[25].p.v,
                    r[26].p.v,
                    r[27].p.v,
                    r[28].p.v,
                  )),
                  this.feFuncB.setAttribute("tableValues", e)),
                this.feFuncA &&
                  (t ||
                    r[31].p._mdf ||
                    r[32].p._mdf ||
                    r[33].p._mdf ||
                    r[34].p._mdf ||
                    r[35].p._mdf) &&
                  ((e = this.getTableValue(
                    r[31].p.v,
                    r[32].p.v,
                    r[33].p.v,
                    r[34].p.v,
                    r[35].p.v,
                  )),
                  this.feFuncA.setAttribute("tableValues", e)));
            }
          }),
          (SVGDropShadowEffect.prototype.renderFrame = function (t) {
            if (t || this.filterManager._mdf) {
              if (
                ((t || this.filterManager.effectElements[4].p._mdf) &&
                  this.feGaussianBlur.setAttribute(
                    "stdDeviation",
                    this.filterManager.effectElements[4].p.v / 4,
                  ),
                t || this.filterManager.effectElements[0].p._mdf)
              ) {
                var e = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute(
                  "flood-color",
                  rgbToHex(
                    Math.round(255 * e[0]),
                    Math.round(255 * e[1]),
                    Math.round(255 * e[2]),
                  ),
                );
              }
              if (
                ((t || this.filterManager.effectElements[1].p._mdf) &&
                  this.feFlood.setAttribute(
                    "flood-opacity",
                    this.filterManager.effectElements[1].p.v / 255,
                  ),
                t ||
                  this.filterManager.effectElements[2].p._mdf ||
                  this.filterManager.effectElements[3].p._mdf)
              ) {
                var r = this.filterManager.effectElements[3].p.v,
                  i =
                    (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                  n = r * Math.cos(i),
                  a = r * Math.sin(i);
                (this.feOffset.setAttribute("dx", n),
                  this.feOffset.setAttribute("dy", a));
              }
            }
          }));
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(t, e, r) {
          ((this.initialized = !1),
            (this.filterManager = e),
            (this.filterElem = t),
            (this.elem = r),
            (r.matteElement = createNS("g")),
            r.matteElement.appendChild(r.layerElement),
            r.matteElement.appendChild(r.transformedElement),
            (r.baseElement = r.matteElement));
        }
        function SVGEffects(t) {
          var e,
            r,
            i = t.data.ef ? t.data.ef.length : 0,
            n = createElementID(),
            a = filtersFactory.createFilter(n, !0),
            s = 0;
          for (this.filters = [], e = 0; e < i; e += 1)
            ((r = null),
              20 === t.data.ef[e].ty
                ? ((s += 1),
                  (r = new SVGTintFilter(
                    a,
                    t.effectsManager.effectElements[e],
                  )))
                : 21 === t.data.ef[e].ty
                  ? ((s += 1),
                    (r = new SVGFillFilter(
                      a,
                      t.effectsManager.effectElements[e],
                    )))
                  : 22 === t.data.ef[e].ty
                    ? (r = new SVGStrokeEffect(
                        t,
                        t.effectsManager.effectElements[e],
                      ))
                    : 23 === t.data.ef[e].ty
                      ? ((s += 1),
                        (r = new SVGTritoneFilter(
                          a,
                          t.effectsManager.effectElements[e],
                        )))
                      : 24 === t.data.ef[e].ty
                        ? ((s += 1),
                          (r = new SVGProLevelsFilter(
                            a,
                            t.effectsManager.effectElements[e],
                          )))
                        : 25 === t.data.ef[e].ty
                          ? ((s += 1),
                            (r = new SVGDropShadowEffect(
                              a,
                              t.effectsManager.effectElements[e],
                            )))
                          : 28 === t.data.ef[e].ty
                            ? (r = new SVGMatte3Effect(
                                a,
                                t.effectsManager.effectElements[e],
                                t,
                              ))
                            : 29 === t.data.ef[e].ty &&
                              ((s += 1),
                              (r = new SVGGaussianBlurEffect(
                                a,
                                t.effectsManager.effectElements[e],
                              ))),
              r && this.filters.push(r));
          (s &&
            (t.globalData.defs.appendChild(a),
            t.layerElement.setAttribute(
              "filter",
              "url(" + locationHref + "#" + n + ")",
            )),
            this.filters.length && t.addRenderableComponent(this));
        }
        function CVContextData() {
          var t;
          ((this.saved = []),
            (this.cArrPos = 0),
            (this.cTr = new Matrix()),
            (this.cO = 1));
          for (
            this.savedOp = createTypedArray("float32", 15), t = 0;
            t < 15;
            t += 1
          )
            this.saved[t] = createTypedArray("float32", 16);
          this._length = 15;
        }
        function CVBaseElement() {}
        function CVImageElement(t, e, r) {
          ((this.assetData = e.getAssetData(t.refId)),
            (this.img = e.imageLoader.getAsset(this.assetData)),
            this.initElement(t, e, r));
        }
        function CVCompElement(t, e, r) {
          ((this.completeLayers = !1),
            (this.layers = t.layers),
            (this.pendingElements = []),
            (this.elements = createSizedArray(this.layers.length)),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 }));
        }
        function CVMaskElement(t, e) {
          var r;
          ((this.data = t),
            (this.element = e),
            (this.masksProperties = this.data.masksProperties || []),
            (this.viewData = createSizedArray(this.masksProperties.length)));
          var i = this.masksProperties.length,
            n = !1;
          for (r = 0; r < i; r += 1)
            ("n" !== this.masksProperties[r].mode && (n = !0),
              (this.viewData[r] = ShapePropertyFactory.getShapeProp(
                this.element,
                this.masksProperties[r],
                3,
              )));
          ((this.hasMasks = n), n && this.element.addRenderableComponent(this));
        }
        function CVShapeElement(t, e, r) {
          ((this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.itemsData = []),
            (this.prevViewData = []),
            (this.shapeModifiers = []),
            (this.processedElements = []),
            (this.transformsManager = new ShapeTransformManager()),
            this.initElement(t, e, r));
        }
        function CVSolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function CVTextElement(t, e, r) {
          ((this.textSpans = []),
            (this.yOffset = 0),
            (this.fillColorAnim = !1),
            (this.strokeColorAnim = !1),
            (this.strokeWidthAnim = !1),
            (this.stroke = !1),
            (this.fill = !1),
            (this.justifyOffset = 0),
            (this.currentRender = null),
            (this.renderType = "canvas"),
            (this.values = {
              fill: "rgba(0,0,0,0)",
              stroke: "rgba(0,0,0,0)",
              sWidth: 0,
              fValue: "",
            }),
            this.initElement(t, e, r));
        }
        function CVEffects() {}
        function HBaseElement() {}
        function HSolidElement(t, e, r) {
          this.initElement(t, e, r);
        }
        function HCompElement(t, e, r) {
          ((this.layers = t.layers),
            (this.supports3d = !t.hasMask),
            (this.completeLayers = !1),
            (this.pendingElements = []),
            (this.elements = this.layers
              ? createSizedArray(this.layers.length)
              : []),
            this.initElement(t, e, r),
            (this.tm = t.tm
              ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this)
              : { _placeholder: !0 }));
        }
        function HShapeElement(t, e, r) {
          ((this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.shapeModifiers = []),
            (this.itemsData = []),
            (this.processedElements = []),
            (this.animatedContents = []),
            (this.shapesContainer = createNS("g")),
            this.initElement(t, e, r),
            (this.prevViewData = []),
            (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }));
        }
        function HTextElement(t, e, r) {
          ((this.textSpans = []),
            (this.textPaths = []),
            (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
            (this.renderType = "svg"),
            (this.isMasked = !1),
            this.initElement(t, e, r));
        }
        function HImageElement(t, e, r) {
          ((this.assetData = e.getAssetData(t.refId)),
            this.initElement(t, e, r));
        }
        function HCameraElement(t, e, r) {
          (this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy());
          var i = PropertyFactory.getProp;
          if (
            ((this.pe = i(this, t.pe, 0, 0, this)),
            t.ks.p.s
              ? ((this.px = i(this, t.ks.p.x, 1, 0, this)),
                (this.py = i(this, t.ks.p.y, 1, 0, this)),
                (this.pz = i(this, t.ks.p.z, 1, 0, this)))
              : (this.p = i(this, t.ks.p, 1, 0, this)),
            t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)),
            t.ks.or.k.length && t.ks.or.k[0].to)
          ) {
            var n,
              a = t.ks.or.k.length;
            for (n = 0; n < a; n += 1)
              ((t.ks.or.k[n].to = null), (t.ks.or.k[n].ti = null));
          }
          ((this.or = i(this, t.ks.or, 1, degToRads, this)),
            (this.or.sh = !0),
            (this.rx = i(this, t.ks.rx, 0, degToRads, this)),
            (this.ry = i(this, t.ks.ry, 0, degToRads, this)),
            (this.rz = i(this, t.ks.rz, 0, degToRads, this)),
            (this.mat = new Matrix()),
            (this._prevMat = new Matrix()),
            (this._isFirstFrame = !0),
            (this.finalTransform = { mProp: this }));
        }
        function HEffects() {}
        ((SVGMatte3Effect.prototype.findSymbol = function (t) {
          for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
            e += 1;
          }
          return null;
        }),
          (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
            var r = t.layerElement.parentNode;
            if (r) {
              for (
                var i, n = r.children, a = 0, s = n.length;
                a < s && n[a] !== t.layerElement;

              )
                a += 1;
              a <= s - 2 && (i = n[a + 1]);
              var o = createNS("use");
              (o.setAttribute("href", "#" + e),
                i ? r.insertBefore(o, i) : r.appendChild(o));
            }
          }),
          (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
            if (!this.findSymbol(e)) {
              var r = createElementID(),
                i = createNS("mask");
              (i.setAttribute("id", e.layerId),
                i.setAttribute("mask-type", "alpha"),
                _svgMatteSymbols.push(e));
              var n = t.globalData.defs;
              n.appendChild(i);
              var a = createNS("symbol");
              (a.setAttribute("id", r),
                this.replaceInParent(e, r),
                a.appendChild(e.layerElement),
                n.appendChild(a));
              var s = createNS("use");
              (s.setAttribute("href", "#" + r),
                i.appendChild(s),
                (e.data.hd = !1),
                e.show());
            }
            t.setMatte(e.layerId);
          }),
          (SVGMatte3Effect.prototype.initialize = function () {
            for (
              var t = this.filterManager.effectElements[0].p.v,
                e = this.elem.comp.elements,
                r = 0,
                i = e.length;
              r < i;

            )
              (e[r] &&
                e[r].data.ind === t &&
                this.setElementAsMask(this.elem, e[r]),
                (r += 1));
            this.initialized = !0;
          }),
          (SVGMatte3Effect.prototype.renderFrame = function () {
            this.initialized || this.initialize();
          }),
          (SVGEffects.prototype.renderFrame = function (t) {
            var e,
              r = this.filters.length;
            for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
          }),
          (CVContextData.prototype.duplicate = function () {
            var t = 2 * this._length,
              e = this.savedOp;
            ((this.savedOp = createTypedArray("float32", t)),
              this.savedOp.set(e));
            var r = 0;
            for (r = this._length; r < t; r += 1)
              this.saved[r] = createTypedArray("float32", 16);
            this._length = t;
          }),
          (CVContextData.prototype.reset = function () {
            ((this.cArrPos = 0), this.cTr.reset(), (this.cO = 1));
          }),
          (CVBaseElement.prototype = {
            createElements: function () {},
            initRendererElement: function () {},
            createContainerElements: function () {
              ((this.canvasContext = this.globalData.canvasContext),
                (this.renderableEffectsManager = new CVEffects(this)));
            },
            createContent: function () {},
            setBlendMode: function () {
              var t = this.globalData;
              if (t.blendMode !== this.data.bm) {
                t.blendMode = this.data.bm;
                var e = getBlendMode(this.data.bm);
                t.canvasContext.globalCompositeOperation = e;
              }
            },
            createRenderableComponents: function () {
              this.maskManager = new CVMaskElement(this.data, this);
            },
            hideElement: function () {
              this.hidden ||
                (this.isInRange && !this.isTransparent) ||
                (this.hidden = !0);
            },
            showElement: function () {
              this.isInRange &&
                !this.isTransparent &&
                ((this.hidden = !1),
                (this._isFirstFrame = !0),
                (this.maskManager._isFirstFrame = !0));
            },
            renderFrame: function () {
              if (!this.hidden && !this.data.hd) {
                (this.renderTransform(),
                  this.renderRenderable(),
                  this.setBlendMode());
                var t = 0 === this.data.ty;
                (this.globalData.renderer.save(t),
                  this.globalData.renderer.ctxTransform(
                    this.finalTransform.mat.props,
                  ),
                  this.globalData.renderer.ctxOpacity(
                    this.finalTransform.mProp.o.v,
                  ),
                  this.renderInnerContent(),
                  this.globalData.renderer.restore(t),
                  this.maskManager.hasMasks &&
                    this.globalData.renderer.restore(!0),
                  this._isFirstFrame && (this._isFirstFrame = !1));
              }
            },
            destroy: function () {
              ((this.canvasContext = null),
                (this.data = null),
                (this.globalData = null),
                this.maskManager.destroy());
            },
            mHelper: new Matrix(),
          }),
          (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
          (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVImageElement,
          ),
          (CVImageElement.prototype.initElement =
            SVGShapeElement.prototype.initElement),
          (CVImageElement.prototype.prepareFrame =
            IImageElement.prototype.prepareFrame),
          (CVImageElement.prototype.createContent = function () {
            if (
              this.img.width &&
              (this.assetData.w !== this.img.width ||
                this.assetData.h !== this.img.height)
            ) {
              var t = createTag("canvas");
              ((t.width = this.assetData.w), (t.height = this.assetData.h));
              var e,
                r,
                i = t.getContext("2d"),
                n = this.img.width,
                a = this.img.height,
                s = n / a,
                o = this.assetData.w / this.assetData.h,
                h =
                  this.assetData.pr ||
                  this.globalData.renderConfig.imagePreserveAspectRatio;
              ((s > o && "xMidYMid slice" === h) ||
              (s < o && "xMidYMid slice" !== h)
                ? (e = (r = a) * o)
                : (r = (e = n) / o),
                i.drawImage(
                  this.img,
                  (n - e) / 2,
                  (a - r) / 2,
                  e,
                  r,
                  0,
                  0,
                  this.assetData.w,
                  this.assetData.h,
                ),
                (this.img = t));
            }
          }),
          (CVImageElement.prototype.renderInnerContent = function () {
            this.canvasContext.drawImage(this.img, 0, 0);
          }),
          (CVImageElement.prototype.destroy = function () {
            this.img = null;
          }),
          extendPrototype(
            [CanvasRenderer, ICompElement, CVBaseElement],
            CVCompElement,
          ),
          (CVCompElement.prototype.renderInnerContent = function () {
            var t,
              e = this.canvasContext;
            for (
              e.beginPath(),
                e.moveTo(0, 0),
                e.lineTo(this.data.w, 0),
                e.lineTo(this.data.w, this.data.h),
                e.lineTo(0, this.data.h),
                e.lineTo(0, 0),
                e.clip(),
                t = this.layers.length - 1;
              t >= 0;
              t -= 1
            )
              (this.completeLayers || this.elements[t]) &&
                this.elements[t].renderFrame();
          }),
          (CVCompElement.prototype.destroy = function () {
            var t;
            for (t = this.layers.length - 1; t >= 0; t -= 1)
              this.elements[t] && this.elements[t].destroy();
            ((this.layers = null), (this.elements = null));
          }),
          (CVMaskElement.prototype.renderFrame = function () {
            if (this.hasMasks) {
              var t,
                e,
                r,
                i,
                n = this.element.finalTransform.mat,
                a = this.element.canvasContext,
                s = this.masksProperties.length;
              for (a.beginPath(), t = 0; t < s; t += 1)
                if ("n" !== this.masksProperties[t].mode) {
                  var o;
                  (this.masksProperties[t].inv &&
                    (a.moveTo(0, 0),
                    a.lineTo(this.element.globalData.compSize.w, 0),
                    a.lineTo(
                      this.element.globalData.compSize.w,
                      this.element.globalData.compSize.h,
                    ),
                    a.lineTo(0, this.element.globalData.compSize.h),
                    a.lineTo(0, 0)),
                    (i = this.viewData[t].v),
                    (e = n.applyToPointArray(i.v[0][0], i.v[0][1], 0)),
                    a.moveTo(e[0], e[1]));
                  var h = i._length;
                  for (o = 1; o < h; o += 1)
                    ((r = n.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o])),
                      a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]));
                  ((r = n.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0])),
                    a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]));
                }
              (this.element.globalData.renderer.save(!0), a.clip());
            }
          }),
          (CVMaskElement.prototype.getMaskProperty =
            MaskElement.prototype.getMaskProperty),
          (CVMaskElement.prototype.destroy = function () {
            this.element = null;
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              IShapeElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVShapeElement,
          ),
          (CVShapeElement.prototype.initElement =
            RenderableDOMElement.prototype.initElement),
          (CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1,
          }),
          (CVShapeElement.prototype.dashResetter = []),
          (CVShapeElement.prototype.createContent = function () {
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              !0,
              [],
            );
          }),
          (CVShapeElement.prototype.createStyleElement = function (t, e) {
            var r = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: !0 === t.hd,
              },
              i = {};
            if (
              ("fl" === t.ty || "st" === t.ty
                ? ((i.c = PropertyFactory.getProp(this, t.c, 1, 255, this)),
                  i.c.k ||
                    (r.co =
                      "rgb(" +
                      bmFloor(i.c.v[0]) +
                      "," +
                      bmFloor(i.c.v[1]) +
                      "," +
                      bmFloor(i.c.v[2]) +
                      ")"))
                : ("gf" !== t.ty && "gs" !== t.ty) ||
                  ((i.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                  (i.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                  (i.h = PropertyFactory.getProp(
                    this,
                    t.h || { k: 0 },
                    0,
                    0.01,
                    this,
                  )),
                  (i.a = PropertyFactory.getProp(
                    this,
                    t.a || { k: 0 },
                    0,
                    degToRads,
                    this,
                  )),
                  (i.g = new GradientProperty(this, t.g, this))),
              (i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
              "st" === t.ty || "gs" === t.ty)
            ) {
              if (
                ((r.lc = this.lcEnum[t.lc] || "round"),
                (r.lj = this.ljEnum[t.lj] || "round"),
                1 == t.lj && (r.ml = t.ml),
                (i.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
                i.w.k || (r.wi = i.w.v),
                t.d)
              ) {
                var n = new DashProperty(this, t.d, "canvas", this);
                ((i.d = n),
                  i.d.k ||
                    ((r.da = i.d.dashArray), (r.do = i.d.dashoffset[0])));
              }
            } else r.r = 2 === t.r ? "evenodd" : "nonzero";
            return (this.stylesList.push(r), (i.style = r), i);
          }),
          (CVShapeElement.prototype.createGroupElement = function () {
            return { it: [], prevViewData: [] };
          }),
          (CVShapeElement.prototype.createTransformElement = function (t) {
            return {
              transform: {
                opacity: 1,
                _opMdf: !1,
                key: this.transformsManager.getNewKey(),
                op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                mProps: TransformPropertyFactory.getTransformProperty(
                  this,
                  t,
                  this,
                ),
              },
            };
          }),
          (CVShapeElement.prototype.createShapeElement = function (t) {
            var e = new CVShapeData(
              this,
              t,
              this.stylesList,
              this.transformsManager,
            );
            return (this.shapes.push(e), this.addShapeToModifiers(e), e);
          }),
          (CVShapeElement.prototype.reloadShapes = function () {
            var t;
            this._isFirstFrame = !0;
            var e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                !0,
                [],
              ),
                e = this.dynamicProperties.length,
                t = 0;
              t < e;
              t += 1
            )
              this.dynamicProperties[t].getValue();
            (this.renderModifiers(),
              this.transformsManager.processSequences(this._isFirstFrame));
          }),
          (CVShapeElement.prototype.addTransformToStyleList = function (t) {
            var e,
              r = this.stylesList.length;
            for (e = 0; e < r; e += 1)
              this.stylesList[e].closed ||
                this.stylesList[e].transforms.push(t);
          }),
          (CVShapeElement.prototype.removeTransformFromStyleList = function () {
            var t,
              e = this.stylesList.length;
            for (t = 0; t < e; t += 1)
              this.stylesList[t].closed || this.stylesList[t].transforms.pop();
          }),
          (CVShapeElement.prototype.closeStyles = function (t) {
            var e,
              r = t.length;
            for (e = 0; e < r; e += 1) t[e].closed = !0;
          }),
          (CVShapeElement.prototype.searchShapes = function (t, e, r, i, n) {
            var a,
              s,
              o,
              h,
              l,
              p,
              c = t.length - 1,
              f = [],
              u = [],
              m = [].concat(n);
            for (a = c; a >= 0; a -= 1) {
              if (
                ((h = this.searchProcessedElement(t[a]))
                  ? (e[a] = r[h - 1])
                  : (t[a]._shouldRender = i),
                "fl" === t[a].ty ||
                  "st" === t[a].ty ||
                  "gf" === t[a].ty ||
                  "gs" === t[a].ty)
              )
                (h
                  ? (e[a].style.closed = !1)
                  : (e[a] = this.createStyleElement(t[a], m)),
                  f.push(e[a].style));
              else if ("gr" === t[a].ty) {
                if (h)
                  for (o = e[a].it.length, s = 0; s < o; s += 1)
                    e[a].prevViewData[s] = e[a].it[s];
                else e[a] = this.createGroupElement(t[a]);
                this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, m);
              } else
                "tr" === t[a].ty
                  ? (h || ((p = this.createTransformElement(t[a])), (e[a] = p)),
                    m.push(e[a]),
                    this.addTransformToStyleList(e[a]))
                  : "sh" === t[a].ty ||
                      "rc" === t[a].ty ||
                      "el" === t[a].ty ||
                      "sr" === t[a].ty
                    ? h || (e[a] = this.createShapeElement(t[a]))
                    : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty
                      ? (h
                          ? ((l = e[a]).closed = !1)
                          : ((l = ShapeModifiers.getModifier(t[a].ty)).init(
                              this,
                              t[a],
                            ),
                            (e[a] = l),
                            this.shapeModifiers.push(l)),
                        u.push(l))
                      : "rp" === t[a].ty &&
                        (h
                          ? ((l = e[a]).closed = !0)
                          : ((l = ShapeModifiers.getModifier(t[a].ty)),
                            (e[a] = l),
                            l.init(this, t, a, e),
                            this.shapeModifiers.push(l),
                            (i = !1)),
                        u.push(l));
              this.addProcessedElement(t[a], a + 1);
            }
            for (
              this.removeTransformFromStyleList(),
                this.closeStyles(f),
                c = u.length,
                a = 0;
              a < c;
              a += 1
            )
              u[a].closed = !0;
          }),
          (CVShapeElement.prototype.renderInnerContent = function () {
            ((this.transformHelper.opacity = 1),
              (this.transformHelper._opMdf = !1),
              this.renderModifiers(),
              this.transformsManager.processSequences(this._isFirstFrame),
              this.renderShape(
                this.transformHelper,
                this.shapesData,
                this.itemsData,
                !0,
              ));
          }),
          (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) &&
              ((e.opacity = t.opacity), (e.opacity *= e.op.v), (e._opMdf = !0));
          }),
          (CVShapeElement.prototype.drawLayer = function () {
            var t,
              e,
              r,
              i,
              n,
              a,
              s,
              o,
              h,
              l = this.stylesList.length,
              p = this.globalData.renderer,
              c = this.globalData.canvasContext;
            for (t = 0; t < l; t += 1)
              if (
                (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o) ||
                  0 !== h.wi) &&
                h.data._shouldRender &&
                0 !== h.coOp &&
                0 !== this.globalData.currentGlobalAlpha
              ) {
                for (
                  p.save(),
                    a = h.elements,
                    "st" === o || "gs" === o
                      ? ((c.strokeStyle = "st" === o ? h.co : h.grd),
                        (c.lineWidth = h.wi),
                        (c.lineCap = h.lc),
                        (c.lineJoin = h.lj),
                        (c.miterLimit = h.ml || 0))
                      : (c.fillStyle = "fl" === o ? h.co : h.grd),
                    p.ctxOpacity(h.coOp),
                    "st" !== o && "gs" !== o && c.beginPath(),
                    p.ctxTransform(h.preTransforms.finalTransform.props),
                    r = a.length,
                    e = 0;
                  e < r;
                  e += 1
                ) {
                  for (
                    ("st" !== o && "gs" !== o) ||
                      (c.beginPath(),
                      h.da && (c.setLineDash(h.da), (c.lineDashOffset = h.do))),
                      n = (s = a[e].trNodes).length,
                      i = 0;
                    i < n;
                    i += 1
                  )
                    "m" === s[i].t
                      ? c.moveTo(s[i].p[0], s[i].p[1])
                      : "c" === s[i].t
                        ? c.bezierCurveTo(
                            s[i].pts[0],
                            s[i].pts[1],
                            s[i].pts[2],
                            s[i].pts[3],
                            s[i].pts[4],
                            s[i].pts[5],
                          )
                        : c.closePath();
                  ("st" !== o && "gs" !== o) ||
                    (c.stroke(), h.da && c.setLineDash(this.dashResetter));
                }
                ("st" !== o && "gs" !== o && c.fill(h.r), p.restore());
              }
          }),
          (CVShapeElement.prototype.renderShape = function (t, e, r, i) {
            var n, a;
            for (a = t, n = e.length - 1; n >= 0; n -= 1)
              "tr" === e[n].ty
                ? ((a = r[n].transform), this.renderShapeTransform(t, a))
                : "sh" === e[n].ty ||
                    "el" === e[n].ty ||
                    "rc" === e[n].ty ||
                    "sr" === e[n].ty
                  ? this.renderPath(e[n], r[n])
                  : "fl" === e[n].ty
                    ? this.renderFill(e[n], r[n], a)
                    : "st" === e[n].ty
                      ? this.renderStroke(e[n], r[n], a)
                      : "gf" === e[n].ty || "gs" === e[n].ty
                        ? this.renderGradientFill(e[n], r[n], a)
                        : "gr" === e[n].ty
                          ? this.renderShape(a, e[n].it, r[n].it)
                          : e[n].ty;
            i && this.drawLayer();
          }),
          (CVShapeElement.prototype.renderStyledShape = function (t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
              var r,
                i,
                n,
                a = t.trNodes,
                s = e.paths,
                o = s._length;
              a.length = 0;
              var h = t.transforms.finalTransform;
              for (n = 0; n < o; n += 1) {
                var l = s.shapes[n];
                if (l && l.v) {
                  for (i = l._length, r = 1; r < i; r += 1)
                    (1 === r &&
                      a.push({
                        t: "m",
                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                      }),
                      a.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r]),
                      }));
                  (1 === i &&
                    a.push({
                      t: "m",
                      p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0),
                    }),
                    l.c &&
                      i &&
                      (a.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0]),
                      }),
                      a.push({ t: "z" })));
                }
              }
              t.trNodes = a;
            }
          }),
          (CVShapeElement.prototype.renderPath = function (t, e) {
            if (!0 !== t.hd && t._shouldRender) {
              var r,
                i = e.styledShapes.length;
              for (r = 0; r < i; r += 1)
                this.renderStyledShape(e.styledShapes[r], e.sh);
            }
          }),
          (CVShapeElement.prototype.renderFill = function (t, e, r) {
            var i = e.style;
            ((e.c._mdf || this._isFirstFrame) &&
              (i.co =
                "rgb(" +
                bmFloor(e.c.v[0]) +
                "," +
                bmFloor(e.c.v[1]) +
                "," +
                bmFloor(e.c.v[2]) +
                ")"),
              (e.o._mdf || r._opMdf || this._isFirstFrame) &&
                (i.coOp = e.o.v * r.opacity));
          }),
          (CVShapeElement.prototype.renderGradientFill = function (t, e, r) {
            var i,
              n = e.style;
            if (
              !n.grd ||
              e.g._mdf ||
              e.s._mdf ||
              e.e._mdf ||
              (1 !== t.t && (e.h._mdf || e.a._mdf))
            ) {
              var a,
                s = this.globalData.canvasContext,
                o = e.s.v,
                h = e.e.v;
              if (1 === t.t) i = s.createLinearGradient(o[0], o[1], h[0], h[1]);
              else {
                var l = Math.sqrt(
                    Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2),
                  ),
                  p = Math.atan2(h[1] - o[1], h[0] - o[0]),
                  c = e.h.v;
                c >= 1 ? (c = 0.99) : c <= -1 && (c = -0.99);
                var f = l * c,
                  u = Math.cos(p + e.a.v) * f + o[0],
                  m = Math.sin(p + e.a.v) * f + o[1];
                i = s.createRadialGradient(u, m, 0, o[0], o[1], l);
              }
              var d = t.g.p,
                y = e.g.c,
                g = 1;
              for (a = 0; a < d; a += 1)
                (e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]),
                  i.addColorStop(
                    y[4 * a] / 100,
                    "rgba(" +
                      y[4 * a + 1] +
                      "," +
                      y[4 * a + 2] +
                      "," +
                      y[4 * a + 3] +
                      "," +
                      g +
                      ")",
                  ));
              n.grd = i;
            }
            n.coOp = e.o.v * r.opacity;
          }),
          (CVShapeElement.prototype.renderStroke = function (t, e, r) {
            var i = e.style,
              n = e.d;
            (n &&
              (n._mdf || this._isFirstFrame) &&
              ((i.da = n.dashArray), (i.do = n.dashoffset[0])),
              (e.c._mdf || this._isFirstFrame) &&
                (i.co =
                  "rgb(" +
                  bmFloor(e.c.v[0]) +
                  "," +
                  bmFloor(e.c.v[1]) +
                  "," +
                  bmFloor(e.c.v[2]) +
                  ")"),
              (e.o._mdf || r._opMdf || this._isFirstFrame) &&
                (i.coOp = e.o.v * r.opacity),
              (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v));
          }),
          (CVShapeElement.prototype.destroy = function () {
            ((this.shapesData = null),
              (this.globalData = null),
              (this.canvasContext = null),
              (this.stylesList.length = 0),
              (this.itemsData.length = 0));
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            CVSolidElement,
          ),
          (CVSolidElement.prototype.initElement =
            SVGShapeElement.prototype.initElement),
          (CVSolidElement.prototype.prepareFrame =
            IImageElement.prototype.prepareFrame),
          (CVSolidElement.prototype.renderInnerContent = function () {
            var t = this.canvasContext;
            ((t.fillStyle = this.data.sc),
              t.fillRect(0, 0, this.data.sw, this.data.sh));
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              CVBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
              ITextElement,
            ],
            CVTextElement,
          ),
          (CVTextElement.prototype.tHelper =
            createTag("canvas").getContext("2d")),
          (CVTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            (t.fc
              ? ((e = !0), (this.values.fill = this.buildColor(t.fc)))
              : (this.values.fill = "rgba(0,0,0,0)"),
              (this.fill = e));
            var r = !1;
            t.sc &&
              ((r = !0),
              (this.values.stroke = this.buildColor(t.sc)),
              (this.values.sWidth = t.sw));
            var i,
              n,
              a,
              s,
              o,
              h,
              l,
              p,
              c,
              f,
              u,
              m,
              d = this.globalData.fontManager.getFontByName(t.f),
              y = t.l,
              g = this.mHelper;
            ((this.stroke = r),
              (this.values.fValue =
                t.finalSize +
                "px " +
                this.globalData.fontManager.getFontByName(t.f).fFamily),
              (n = t.finalText.length));
            var v = this.data.singleShape,
              b = 0.001 * t.tr * t.finalSize,
              x = 0,
              E = 0,
              P = !0,
              S = 0;
            for (i = 0; i < n; i += 1) {
              for (
                s =
                  ((a = this.globalData.fontManager.getCharData(
                    t.finalText[i],
                    d.fStyle,
                    this.globalData.fontManager.getFontByName(t.f).fFamily,
                  )) &&
                    a.data) ||
                  {},
                  g.reset(),
                  v &&
                    y[i].n &&
                    ((x = -b), (E += t.yOffset), (E += P ? 1 : 0), (P = !1)),
                  c = (l = s.shapes ? s.shapes[0].it : []).length,
                  g.scale(t.finalSize / 100, t.finalSize / 100),
                  v && this.applyTextPropertiesToMatrix(t, g, y[i].line, x, E),
                  u = createSizedArray(c),
                  p = 0;
                p < c;
                p += 1
              ) {
                for (
                  h = l[p].ks.k.i.length, f = l[p].ks.k, m = [], o = 1;
                  o < h;
                  o += 1
                )
                  (1 === o &&
                    m.push(
                      g.applyToX(f.v[0][0], f.v[0][1], 0),
                      g.applyToY(f.v[0][0], f.v[0][1], 0),
                    ),
                    m.push(
                      g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0),
                      g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0),
                      g.applyToX(f.i[o][0], f.i[o][1], 0),
                      g.applyToY(f.i[o][0], f.i[o][1], 0),
                      g.applyToX(f.v[o][0], f.v[o][1], 0),
                      g.applyToY(f.v[o][0], f.v[o][1], 0),
                    ));
                (m.push(
                  g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0),
                  g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0),
                  g.applyToX(f.i[0][0], f.i[0][1], 0),
                  g.applyToY(f.i[0][0], f.i[0][1], 0),
                  g.applyToX(f.v[0][0], f.v[0][1], 0),
                  g.applyToY(f.v[0][0], f.v[0][1], 0),
                ),
                  (u[p] = m));
              }
              (v && ((x += y[i].l), (x += b)),
                this.textSpans[S]
                  ? (this.textSpans[S].elem = u)
                  : (this.textSpans[S] = { elem: u }),
                (S += 1));
            }
          }),
          (CVTextElement.prototype.renderInnerContent = function () {
            var t,
              e,
              r,
              i,
              n,
              a,
              s = this.canvasContext;
            ((s.font = this.values.fValue),
              (s.lineCap = "butt"),
              (s.lineJoin = "miter"),
              (s.miterLimit = 4),
              this.data.singleShape ||
                this.textAnimator.getMeasures(
                  this.textProperty.currentData,
                  this.lettersChangedFlag,
                ));
            var o,
              h = this.textAnimator.renderedLetters,
              l = this.textProperty.currentData.l;
            e = l.length;
            var p,
              c,
              f = null,
              u = null,
              m = null;
            for (t = 0; t < e; t += 1)
              if (!l[t].n) {
                if (
                  ((o = h[t]) &&
                    (this.globalData.renderer.save(),
                    this.globalData.renderer.ctxTransform(o.p),
                    this.globalData.renderer.ctxOpacity(o.o)),
                  this.fill)
                ) {
                  for (
                    o && o.fc
                      ? f !== o.fc && ((f = o.fc), (s.fillStyle = o.fc))
                      : f !== this.values.fill &&
                        ((f = this.values.fill),
                        (s.fillStyle = this.values.fill)),
                      i = (p = this.textSpans[t].elem).length,
                      this.globalData.canvasContext.beginPath(),
                      r = 0;
                    r < i;
                    r += 1
                  )
                    for (
                      a = (c = p[r]).length,
                        this.globalData.canvasContext.moveTo(c[0], c[1]),
                        n = 2;
                      n < a;
                      n += 6
                    )
                      this.globalData.canvasContext.bezierCurveTo(
                        c[n],
                        c[n + 1],
                        c[n + 2],
                        c[n + 3],
                        c[n + 4],
                        c[n + 5],
                      );
                  (this.globalData.canvasContext.closePath(),
                    this.globalData.canvasContext.fill());
                }
                if (this.stroke) {
                  for (
                    o && o.sw
                      ? m !== o.sw && ((m = o.sw), (s.lineWidth = o.sw))
                      : m !== this.values.sWidth &&
                        ((m = this.values.sWidth),
                        (s.lineWidth = this.values.sWidth)),
                      o && o.sc
                        ? u !== o.sc && ((u = o.sc), (s.strokeStyle = o.sc))
                        : u !== this.values.stroke &&
                          ((u = this.values.stroke),
                          (s.strokeStyle = this.values.stroke)),
                      i = (p = this.textSpans[t].elem).length,
                      this.globalData.canvasContext.beginPath(),
                      r = 0;
                    r < i;
                    r += 1
                  )
                    for (
                      a = (c = p[r]).length,
                        this.globalData.canvasContext.moveTo(c[0], c[1]),
                        n = 2;
                      n < a;
                      n += 6
                    )
                      this.globalData.canvasContext.bezierCurveTo(
                        c[n],
                        c[n + 1],
                        c[n + 2],
                        c[n + 3],
                        c[n + 4],
                        c[n + 5],
                      );
                  (this.globalData.canvasContext.closePath(),
                    this.globalData.canvasContext.stroke());
                }
                o && this.globalData.renderer.restore();
              }
          }),
          (CVEffects.prototype.renderFrame = function () {}),
          (HBaseElement.prototype = {
            checkBlendMode: function () {},
            initRendererElement: function () {
              ((this.baseElement = createTag(this.data.tg || "div")),
                this.data.hasMask
                  ? ((this.svgElement = createNS("svg")),
                    (this.layerElement = createNS("g")),
                    (this.maskedElement = this.layerElement),
                    this.svgElement.appendChild(this.layerElement),
                    this.baseElement.appendChild(this.svgElement))
                  : (this.layerElement = this.baseElement),
                styleDiv(this.baseElement));
            },
            createContainerElements: function () {
              ((this.renderableEffectsManager = new CVEffects(this)),
                (this.transformedElement = this.baseElement),
                (this.maskedElement = this.layerElement),
                this.data.ln &&
                  this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl &&
                  this.layerElement.setAttribute("class", this.data.cl),
                0 !== this.data.bm && this.setBlendMode());
            },
            renderElement: function () {
              var t = this.transformedElement
                ? this.transformedElement.style
                : {};
              if (this.finalTransform._matMdf) {
                var e = this.finalTransform.mat.toCSS();
                ((t.transform = e), (t.webkitTransform = e));
              }
              this.finalTransform._opMdf &&
                (t.opacity = this.finalTransform.mProp.o.v);
            },
            renderFrame: function () {
              this.data.hd ||
                this.hidden ||
                (this.renderTransform(),
                this.renderRenderable(),
                this.renderElement(),
                this.renderInnerContent(),
                this._isFirstFrame && (this._isFirstFrame = !1));
            },
            destroy: function () {
              ((this.layerElement = null),
                (this.transformedElement = null),
                this.matteElement && (this.matteElement = null),
                this.maskManager &&
                  (this.maskManager.destroy(), (this.maskManager = null)));
            },
            createRenderableComponents: function () {
              this.maskManager = new MaskElement(
                this.data,
                this,
                this.globalData,
              );
            },
            addEffects: function () {},
            setMatte: function () {},
          }),
          (HBaseElement.prototype.getBaseElement =
            SVGBaseElement.prototype.getBaseElement),
          (HBaseElement.prototype.destroyBaseElement =
            HBaseElement.prototype.destroy),
          (HBaseElement.prototype.buildElementParenting =
            HybridRenderer.prototype.buildElementParenting),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
            ],
            HSolidElement,
          ),
          (HSolidElement.prototype.createContent = function () {
            var t;
            (this.data.hasMask
              ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.svgElement.setAttribute("width", this.data.sw),
                this.svgElement.setAttribute("height", this.data.sh))
              : (((t = createTag("div")).style.width = this.data.sw + "px"),
                (t.style.height = this.data.sh + "px"),
                (t.style.backgroundColor = this.data.sc)),
              this.layerElement.appendChild(t));
          }),
          extendPrototype(
            [HybridRenderer, ICompElement, HBaseElement],
            HCompElement,
          ),
          (HCompElement.prototype._createBaseContainerElements =
            HCompElement.prototype.createContainerElements),
          (HCompElement.prototype.createContainerElements = function () {
            (this._createBaseContainerElements(),
              this.data.hasMask
                ? (this.svgElement.setAttribute("width", this.data.w),
                  this.svgElement.setAttribute("height", this.data.h),
                  (this.transformedElement = this.baseElement))
                : (this.transformedElement = this.layerElement));
          }),
          (HCompElement.prototype.addTo3dContainer = function (t, e) {
            for (var r, i = 0; i < e; )
              (this.elements[i] &&
                this.elements[i].getBaseElement &&
                (r = this.elements[i].getBaseElement()),
                (i += 1));
            r
              ? this.layerElement.insertBefore(t, r)
              : this.layerElement.appendChild(t);
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HSolidElement,
              SVGShapeElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            HShapeElement,
          ),
          (HShapeElement.prototype._renderShapeFrame =
            HShapeElement.prototype.renderInnerContent),
          (HShapeElement.prototype.createContent = function () {
            var t;
            if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
              (this.layerElement.appendChild(this.shapesContainer),
                (t = this.svgElement));
            else {
              t = createNS("svg");
              var e = this.comp.data
                ? this.comp.data
                : this.globalData.compSize;
              (t.setAttribute("width", e.w),
                t.setAttribute("height", e.h),
                t.appendChild(this.shapesContainer),
                this.layerElement.appendChild(t));
            }
            (this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.shapesContainer,
              0,
              [],
              !0,
            ),
              this.filterUniqueShapes(),
              (this.shapeCont = t));
          }),
          (HShapeElement.prototype.getTransformedPoint = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1)
              e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
            return e;
          }),
          (HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
            var r,
              i,
              n,
              a,
              s,
              o = t.sh.v,
              h = t.transformers,
              l = o._length;
            if (!(l <= 1)) {
              for (r = 0; r < l - 1; r += 1)
                ((i = this.getTransformedPoint(h, o.v[r])),
                  (n = this.getTransformedPoint(h, o.o[r])),
                  (a = this.getTransformedPoint(h, o.i[r + 1])),
                  (s = this.getTransformedPoint(h, o.v[r + 1])),
                  this.checkBounds(i, n, a, s, e));
              o.c &&
                ((i = this.getTransformedPoint(h, o.v[r])),
                (n = this.getTransformedPoint(h, o.o[r])),
                (a = this.getTransformedPoint(h, o.i[0])),
                (s = this.getTransformedPoint(h, o.v[0])),
                this.checkBounds(i, n, a, s, e));
            }
          }),
          (HShapeElement.prototype.checkBounds = function (t, e, r, i, n) {
            this.getBoundsOfCurve(t, e, r, i);
            var a = this.shapeBoundingBox;
            ((n.x = bmMin(a.left, n.x)),
              (n.xMax = bmMax(a.right, n.xMax)),
              (n.y = bmMin(a.top, n.y)),
              (n.yMax = bmMax(a.bottom, n.yMax)));
          }),
          (HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }),
          (HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0,
          }),
          (HShapeElement.prototype.getBoundsOfCurve = function (t, e, r, i) {
            for (
              var n,
                a,
                s,
                o,
                h,
                l,
                p,
                c = [
                  [t[0], i[0]],
                  [t[1], i[1]],
                ],
                f = 0;
              f < 2;
              ++f
            )
              ((a = 6 * t[f] - 12 * e[f] + 6 * r[f]),
                (n = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f]),
                (s = 3 * e[f] - 3 * t[f]),
                (a |= 0),
                (s |= 0),
                (0 === (n |= 0) && 0 === a) ||
                  (0 === n
                    ? (o = -s / a) > 0 &&
                      o < 1 &&
                      c[f].push(this.calculateF(o, t, e, r, i, f))
                    : (h = a * a - 4 * s * n) >= 0 &&
                      ((l = (-a + bmSqrt(h)) / (2 * n)) > 0 &&
                        l < 1 &&
                        c[f].push(this.calculateF(l, t, e, r, i, f)),
                      (p = (-a - bmSqrt(h)) / (2 * n)) > 0 &&
                        p < 1 &&
                        c[f].push(this.calculateF(p, t, e, r, i, f)))));
            ((this.shapeBoundingBox.left = bmMin.apply(null, c[0])),
              (this.shapeBoundingBox.top = bmMin.apply(null, c[1])),
              (this.shapeBoundingBox.right = bmMax.apply(null, c[0])),
              (this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])));
          }),
          (HShapeElement.prototype.calculateF = function (t, e, r, i, n, a) {
            return (
              bmPow(1 - t, 3) * e[a] +
              3 * bmPow(1 - t, 2) * t * r[a] +
              3 * (1 - t) * bmPow(t, 2) * i[a] +
              bmPow(t, 3) * n[a]
            );
          }),
          (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
            var r,
              i = t.length;
            for (r = 0; r < i; r += 1)
              t[r] && t[r].sh
                ? this.calculateShapeBoundingBox(t[r], e)
                : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e);
          }),
          (HShapeElement.prototype.currentBoxContains = function (t) {
            return (
              this.currentBBox.x <= t.x &&
              this.currentBBox.y <= t.y &&
              this.currentBBox.width + this.currentBBox.x >= t.x + t.width &&
              this.currentBBox.height + this.currentBBox.y >= t.y + t.height
            );
          }),
          (HShapeElement.prototype.renderInnerContent = function () {
            if (
              (this._renderShapeFrame(),
              !this.hidden && (this._isFirstFrame || this._mdf))
            ) {
              var t = this.tempBoundingBox,
                e = 999999;
              if (
                ((t.x = e),
                (t.xMax = -e),
                (t.y = e),
                (t.yMax = -e),
                this.calculateBoundingBox(this.itemsData, t),
                (t.width = t.xMax < t.x ? 0 : t.xMax - t.x),
                (t.height = t.yMax < t.y ? 0 : t.yMax - t.y),
                this.currentBoxContains(t))
              )
                return;
              var r = !1;
              if (
                (this.currentBBox.w !== t.width &&
                  ((this.currentBBox.w = t.width),
                  this.shapeCont.setAttribute("width", t.width),
                  (r = !0)),
                this.currentBBox.h !== t.height &&
                  ((this.currentBBox.h = t.height),
                  this.shapeCont.setAttribute("height", t.height),
                  (r = !0)),
                r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y)
              ) {
                ((this.currentBBox.w = t.width),
                  (this.currentBBox.h = t.height),
                  (this.currentBBox.x = t.x),
                  (this.currentBBox.y = t.y),
                  this.shapeCont.setAttribute(
                    "viewBox",
                    this.currentBBox.x +
                      " " +
                      this.currentBBox.y +
                      " " +
                      this.currentBBox.w +
                      " " +
                      this.currentBBox.h,
                  ));
                var i = this.shapeCont.style,
                  n =
                    "translate(" +
                    this.currentBBox.x +
                    "px," +
                    this.currentBBox.y +
                    "px)";
                ((i.transform = n), (i.webkitTransform = n));
              }
            }
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HierarchyElement,
              FrameElement,
              RenderableDOMElement,
              ITextElement,
            ],
            HTextElement,
          ),
          (HTextElement.prototype.createContent = function () {
            if (((this.isMasked = this.checkMasks()), this.isMasked)) {
              ((this.renderType = "svg"),
                (this.compW = this.comp.data.w),
                (this.compH = this.comp.data.h),
                this.svgElement.setAttribute("width", this.compW),
                this.svgElement.setAttribute("height", this.compH));
              var t = createNS("g");
              (this.maskedElement.appendChild(t), (this.innerElem = t));
            } else
              ((this.renderType = "html"),
                (this.innerElem = this.layerElement));
            this.checkParenting();
          }),
          (HTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = this.innerElem.style,
              r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            ((e.fill = r),
              (e.color = r),
              t.sc &&
                ((e.stroke = this.buildColor(t.sc)),
                (e.strokeWidth = t.sw + "px")));
            var i,
              n,
              a = this.globalData.fontManager.getFontByName(t.f);
            if (!this.globalData.fontManager.chars)
              if (
                ((e.fontSize = t.finalSize + "px"),
                (e.lineHeight = t.finalSize + "px"),
                a.fClass)
              )
                this.innerElem.className = a.fClass;
              else {
                e.fontFamily = a.fFamily;
                var s = t.fWeight,
                  o = t.fStyle;
                ((e.fontStyle = o), (e.fontWeight = s));
              }
            var h,
              l,
              p,
              c = t.l;
            n = c.length;
            var f,
              u = this.mHelper,
              m = "",
              d = 0;
            for (i = 0; i < n; i += 1) {
              if (
                (this.globalData.fontManager.chars
                  ? (this.textPaths[d]
                      ? (h = this.textPaths[d])
                      : ((h = createNS("path")).setAttribute(
                          "stroke-linecap",
                          "butt",
                        ),
                        h.setAttribute("stroke-linejoin", "round"),
                        h.setAttribute("stroke-miterlimit", "4")),
                    this.isMasked ||
                      (this.textSpans[d]
                        ? (p = (l = this.textSpans[d]).children[0])
                        : (((l = createTag("div")).style.lineHeight = 0),
                          (p = createNS("svg")).appendChild(h),
                          styleDiv(l))))
                  : this.isMasked
                    ? (h = this.textPaths[d]
                        ? this.textPaths[d]
                        : createNS("text"))
                    : this.textSpans[d]
                      ? ((l = this.textSpans[d]), (h = this.textPaths[d]))
                      : (styleDiv((l = createTag("span"))),
                        styleDiv((h = createTag("span"))),
                        l.appendChild(h)),
                this.globalData.fontManager.chars)
              ) {
                var y,
                  g = this.globalData.fontManager.getCharData(
                    t.finalText[i],
                    a.fStyle,
                    this.globalData.fontManager.getFontByName(t.f).fFamily,
                  );
                if (
                  ((y = g ? g.data : null),
                  u.reset(),
                  y &&
                    y.shapes &&
                    ((f = y.shapes[0].it),
                    u.scale(t.finalSize / 100, t.finalSize / 100),
                    (m = this.createPathShape(u, f)),
                    h.setAttribute("d", m)),
                  this.isMasked)
                )
                  this.innerElem.appendChild(h);
                else {
                  if ((this.innerElem.appendChild(l), y && y.shapes)) {
                    document.body.appendChild(p);
                    var v = p.getBBox();
                    (p.setAttribute("width", v.width + 2),
                      p.setAttribute("height", v.height + 2),
                      p.setAttribute(
                        "viewBox",
                        v.x -
                          1 +
                          " " +
                          (v.y - 1) +
                          " " +
                          (v.width + 2) +
                          " " +
                          (v.height + 2),
                      ));
                    var b = p.style,
                      x = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                    ((b.transform = x),
                      (b.webkitTransform = x),
                      (c[i].yOffset = v.y - 1));
                  } else
                    (p.setAttribute("width", 1), p.setAttribute("height", 1));
                  l.appendChild(p);
                }
              } else if (
                ((h.textContent = c[i].val),
                h.setAttributeNS(
                  "http://www.w3.org/XML/1998/namespace",
                  "xml:space",
                  "preserve",
                ),
                this.isMasked)
              )
                this.innerElem.appendChild(h);
              else {
                this.innerElem.appendChild(l);
                var E = h.style,
                  P = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                ((E.transform = P), (E.webkitTransform = P));
              }
              (this.isMasked
                ? (this.textSpans[d] = h)
                : (this.textSpans[d] = l),
                (this.textSpans[d].style.display = "block"),
                (this.textPaths[d] = h),
                (d += 1));
            }
            for (; d < this.textSpans.length; )
              ((this.textSpans[d].style.display = "none"), (d += 1));
          }),
          (HTextElement.prototype.renderInnerContent = function () {
            var t;
            if (this.data.singleShape) {
              if (!this._isFirstFrame && !this.lettersChangedFlag) return;
              if (this.isMasked && this.finalTransform._matMdf) {
                (this.svgElement.setAttribute(
                  "viewBox",
                  -this.finalTransform.mProp.p.v[0] +
                    " " +
                    -this.finalTransform.mProp.p.v[1] +
                    " " +
                    this.compW +
                    " " +
                    this.compH,
                ),
                  (t = this.svgElement.style));
                var e =
                  "translate(" +
                  -this.finalTransform.mProp.p.v[0] +
                  "px," +
                  -this.finalTransform.mProp.p.v[1] +
                  "px)";
                ((t.transform = e), (t.webkitTransform = e));
              }
            }
            if (
              (this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag,
              ),
              this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
            ) {
              var r,
                i,
                n,
                a,
                s,
                o = 0,
                h = this.textAnimator.renderedLetters,
                l = this.textProperty.currentData.l;
              for (i = l.length, r = 0; r < i; r += 1)
                l[r].n
                  ? (o += 1)
                  : ((a = this.textSpans[r]),
                    (s = this.textPaths[r]),
                    (n = h[o]),
                    (o += 1),
                    n._mdf.m &&
                      (this.isMasked
                        ? a.setAttribute("transform", n.m)
                        : ((a.style.webkitTransform = n.m),
                          (a.style.transform = n.m))),
                    (a.style.opacity = n.o),
                    n.sw && n._mdf.sw && s.setAttribute("stroke-width", n.sw),
                    n.sc && n._mdf.sc && s.setAttribute("stroke", n.sc),
                    n.fc &&
                      n._mdf.fc &&
                      (s.setAttribute("fill", n.fc), (s.style.color = n.fc)));
              if (
                this.innerElem.getBBox &&
                !this.hidden &&
                (this._isFirstFrame || this._mdf)
              ) {
                var p = this.innerElem.getBBox();
                (this.currentBBox.w !== p.width &&
                  ((this.currentBBox.w = p.width),
                  this.svgElement.setAttribute("width", p.width)),
                  this.currentBBox.h !== p.height &&
                    ((this.currentBBox.h = p.height),
                    this.svgElement.setAttribute("height", p.height)));
                if (
                  this.currentBBox.w !== p.width + 2 ||
                  this.currentBBox.h !== p.height + 2 ||
                  this.currentBBox.x !== p.x - 1 ||
                  this.currentBBox.y !== p.y - 1
                ) {
                  ((this.currentBBox.w = p.width + 2),
                    (this.currentBBox.h = p.height + 2),
                    (this.currentBBox.x = p.x - 1),
                    (this.currentBBox.y = p.y - 1),
                    this.svgElement.setAttribute(
                      "viewBox",
                      this.currentBBox.x +
                        " " +
                        this.currentBBox.y +
                        " " +
                        this.currentBBox.w +
                        " " +
                        this.currentBBox.h,
                    ),
                    (t = this.svgElement.style));
                  var c =
                    "translate(" +
                    this.currentBBox.x +
                    "px," +
                    this.currentBBox.y +
                    "px)";
                  ((t.transform = c), (t.webkitTransform = c));
                }
              }
            }
          }),
          extendPrototype(
            [
              BaseElement,
              TransformElement,
              HBaseElement,
              HSolidElement,
              HierarchyElement,
              FrameElement,
              RenderableElement,
            ],
            HImageElement,
          ),
          (HImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData),
              e = new Image();
            (this.data.hasMask
              ? ((this.imageElem = createNS("image")),
                this.imageElem.setAttribute("width", this.assetData.w + "px"),
                this.imageElem.setAttribute("height", this.assetData.h + "px"),
                this.imageElem.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "href",
                  t,
                ),
                this.layerElement.appendChild(this.imageElem),
                this.baseElement.setAttribute("width", this.assetData.w),
                this.baseElement.setAttribute("height", this.assetData.h))
              : this.layerElement.appendChild(e),
              (e.crossOrigin = "anonymous"),
              (e.src = t),
              this.data.ln &&
                this.baseElement.setAttribute("id", this.data.ln));
          }),
          extendPrototype(
            [BaseElement, FrameElement, HierarchyElement],
            HCameraElement,
          ),
          (HCameraElement.prototype.setup = function () {
            var t,
              e,
              r,
              i,
              n = this.comp.threeDElements.length;
            for (t = 0; t < n; t += 1)
              if ("3d" === (e = this.comp.threeDElements[t]).type) {
                ((r = e.perspectiveElem.style), (i = e.container.style));
                var a = this.pe.v + "px",
                  s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                ((r.perspective = a),
                  (r.webkitPerspective = a),
                  (i.transformOrigin = "0px 0px 0px"),
                  (i.mozTransformOrigin = "0px 0px 0px"),
                  (i.webkitTransformOrigin = "0px 0px 0px"),
                  (r.transform = s),
                  (r.webkitTransform = s));
              }
          }),
          (HCameraElement.prototype.createElements = function () {}),
          (HCameraElement.prototype.hide = function () {}),
          (HCameraElement.prototype.renderFrame = function () {
            var t,
              e,
              r = this._isFirstFrame;
            if (this.hierarchy)
              for (e = this.hierarchy.length, t = 0; t < e; t += 1)
                r = this.hierarchy[t].finalTransform.mProp._mdf || r;
            if (
              r ||
              this.pe._mdf ||
              (this.p && this.p._mdf) ||
              (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) ||
              this.rx._mdf ||
              this.ry._mdf ||
              this.rz._mdf ||
              this.or._mdf ||
              (this.a && this.a._mdf)
            ) {
              if ((this.mat.reset(), this.hierarchy))
                for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                  var i = this.hierarchy[t].finalTransform.mProp;
                  (this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]),
                    this.mat
                      .rotateX(-i.or.v[0])
                      .rotateY(-i.or.v[1])
                      .rotateZ(i.or.v[2]),
                    this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),
                    this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]),
                    this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]));
                }
              if (
                (this.p
                  ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                  : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                this.a)
              ) {
                var n;
                n = this.p
                  ? [
                      this.p.v[0] - this.a.v[0],
                      this.p.v[1] - this.a.v[1],
                      this.p.v[2] - this.a.v[2],
                    ]
                  : [
                      this.px.v - this.a.v[0],
                      this.py.v - this.a.v[1],
                      this.pz.v - this.a.v[2],
                    ];
                var a = Math.sqrt(
                    Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2),
                  ),
                  s = [n[0] / a, n[1] / a, n[2] / a],
                  o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                  h = Math.atan2(s[1], o),
                  l = Math.atan2(s[0], -s[2]);
                this.mat.rotateY(l).rotateX(-h);
              }
              (this.mat
                .rotateX(-this.rx.v)
                .rotateY(-this.ry.v)
                .rotateZ(this.rz.v),
                this.mat
                  .rotateX(-this.or.v[0])
                  .rotateY(-this.or.v[1])
                  .rotateZ(this.or.v[2]),
                this.mat.translate(
                  this.globalData.compSize.w / 2,
                  this.globalData.compSize.h / 2,
                  0,
                ),
                this.mat.translate(0, 0, this.pe.v));
              var p = !this._prevMat.equals(this.mat);
              if ((p || this.pe._mdf) && this.comp.threeDElements) {
                var c, f, u;
                for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                  if ("3d" === (c = this.comp.threeDElements[t]).type) {
                    if (p) {
                      var m = this.mat.toCSS();
                      (((u = c.container.style).transform = m),
                        (u.webkitTransform = m));
                    }
                    this.pe._mdf &&
                      (((f = c.perspectiveElem.style).perspective =
                        this.pe.v + "px"),
                      (f.webkitPerspective = this.pe.v + "px"));
                  }
                this.mat.clone(this._prevMat);
              }
            }
            this._isFirstFrame = !1;
          }),
          (HCameraElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0);
          }),
          (HCameraElement.prototype.destroy = function () {}),
          (HCameraElement.prototype.getBaseElement = function () {
            return null;
          }),
          (HEffects.prototype.renderFrame = function () {}));
        var animationManager = (function () {
            var t = {},
              e = [],
              r = 0,
              i = 0,
              n = 0,
              a = !0,
              s = !1;
            function o(t) {
              for (var r = 0, n = t.target; r < i; )
                (e[r].animation === n &&
                  (e.splice(r, 1), (r -= 1), (i -= 1), n.isPaused || p()),
                  (r += 1));
            }
            function h(t, r) {
              if (!t) return null;
              for (var n = 0; n < i; ) {
                if (e[n].elem === t && null !== e[n].elem)
                  return e[n].animation;
                n += 1;
              }
              var a = new AnimationItem();
              return (c(a, t), a.setData(t, r), a);
            }
            function l() {
              ((n += 1), m());
            }
            function p() {
              n -= 1;
            }
            function c(t, r) {
              (t.addEventListener("destroy", o),
                t.addEventListener("_active", l),
                t.addEventListener("_idle", p),
                e.push({ elem: r, animation: t }),
                (i += 1));
            }
            function f(t) {
              var o,
                h = t - r;
              for (o = 0; o < i; o += 1) e[o].animation.advanceTime(h);
              ((r = t), n && !s ? window.requestAnimationFrame(f) : (a = !0));
            }
            function u(t) {
              ((r = t), window.requestAnimationFrame(f));
            }
            function m() {
              !s && n && a && (window.requestAnimationFrame(u), (a = !1));
            }
            return (
              (t.registerAnimation = h),
              (t.loadAnimation = function (t) {
                var e = new AnimationItem();
                return (c(e, null), e.setParams(t), e);
              }),
              (t.setSpeed = function (t, r) {
                var n;
                for (n = 0; n < i; n += 1) e[n].animation.setSpeed(t, r);
              }),
              (t.setDirection = function (t, r) {
                var n;
                for (n = 0; n < i; n += 1) e[n].animation.setDirection(t, r);
              }),
              (t.play = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.play(t);
              }),
              (t.pause = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.pause(t);
              }),
              (t.stop = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.stop(t);
              }),
              (t.togglePause = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.togglePause(t);
              }),
              (t.searchAnimations = function (t, e, r) {
                var i,
                  n = [].concat(
                    [].slice.call(document.getElementsByClassName("lottie")),
                    [].slice.call(document.getElementsByClassName("bodymovin")),
                  ),
                  a = n.length;
                for (i = 0; i < a; i += 1)
                  (r && n[i].setAttribute("data-bm-type", r), h(n[i], t));
                if (e && 0 === a) {
                  r || (r = "svg");
                  var s = document.getElementsByTagName("body")[0];
                  s.innerText = "";
                  var o = createTag("div");
                  ((o.style.width = "100%"),
                    (o.style.height = "100%"),
                    o.setAttribute("data-bm-type", r),
                    s.appendChild(o),
                    h(o, t));
                }
              }),
              (t.resize = function () {
                var t;
                for (t = 0; t < i; t += 1) e[t].animation.resize();
              }),
              (t.goToAndStop = function (t, r, n) {
                var a;
                for (a = 0; a < i; a += 1) e[a].animation.goToAndStop(t, r, n);
              }),
              (t.destroy = function (t) {
                var r;
                for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t);
              }),
              (t.freeze = function () {
                s = !0;
              }),
              (t.unfreeze = function () {
                ((s = !1), m());
              }),
              (t.setVolume = function (t, r) {
                var n;
                for (n = 0; n < i; n += 1) e[n].animation.setVolume(t, r);
              }),
              (t.mute = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.mute(t);
              }),
              (t.unmute = function (t) {
                var r;
                for (r = 0; r < i; r += 1) e[r].animation.unmute(t);
              }),
              (t.getRegisteredAnimations = function () {
                var t,
                  r = e.length,
                  i = [];
                for (t = 0; t < r; t += 1) i.push(e[t].animation);
                return i;
              }),
              t
            );
          })(),
          AnimationItem = function () {
            ((this._cbs = []),
              (this.name = ""),
              (this.path = ""),
              (this.isLoaded = !1),
              (this.currentFrame = 0),
              (this.currentRawFrame = 0),
              (this.firstFrame = 0),
              (this.totalFrames = 0),
              (this.frameRate = 0),
              (this.frameMult = 0),
              (this.playSpeed = 1),
              (this.playDirection = 1),
              (this.playCount = 0),
              (this.animationData = {}),
              (this.assets = []),
              (this.isPaused = !0),
              (this.autoplay = !1),
              (this.loop = !0),
              (this.renderer = null),
              (this.animationID = createElementID()),
              (this.assetsPath = ""),
              (this.timeCompleted = 0),
              (this.segmentPos = 0),
              (this.isSubframeEnabled = subframeEnabled),
              (this.segments = []),
              (this._idle = !0),
              (this._completedLoop = !1),
              (this.projectInterface = ProjectInterface()),
              (this.imagePreloader = new ImagePreloader()),
              (this.audioController = audioControllerFactory()),
              (this.markers = []));
          };
        (extendPrototype([BaseEvent], AnimationItem),
          (AnimationItem.prototype.setParams = function (t) {
            (t.wrapper || t.container) &&
              (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            switch (
              (t.animType ? (e = t.animType) : t.renderer && (e = t.renderer),
              e)
            ) {
              case "canvas":
                this.renderer = new CanvasRenderer(this, t.rendererSettings);
                break;
              case "svg":
                this.renderer = new SVGRenderer(this, t.rendererSettings);
                break;
              default:
                this.renderer = new HybridRenderer(this, t.rendererSettings);
            }
            (this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
              this.renderer.setProjectInterface(this.projectInterface),
              (this.animType = e),
              "" === t.loop ||
              null === t.loop ||
              void 0 === t.loop ||
              !0 === t.loop
                ? (this.loop = !0)
                : !1 === t.loop
                  ? (this.loop = !1)
                  : (this.loop = parseInt(t.loop, 10)),
              (this.autoplay = !("autoplay" in t) || t.autoplay),
              (this.name = t.name ? t.name : ""),
              (this.autoloadSegments =
                !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ||
                t.autoloadSegments),
              (this.assetsPath = t.assetsPath),
              (this.initialSegment = t.initialSegment),
              t.audioFactory &&
                this.audioController.setAudioFactory(t.audioFactory),
              t.animationData
                ? this.configAnimation(t.animationData)
                : t.path &&
                  (-1 !== t.path.lastIndexOf("\\")
                    ? (this.path = t.path.substr(
                        0,
                        t.path.lastIndexOf("\\") + 1,
                      ))
                    : (this.path = t.path.substr(
                        0,
                        t.path.lastIndexOf("/") + 1,
                      )),
                  (this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1)),
                  (this.fileName = this.fileName.substr(
                    0,
                    this.fileName.lastIndexOf(".json"),
                  )),
                  assetLoader.load(
                    t.path,
                    this.configAnimation.bind(this),
                    function () {
                      this.trigger("data_failed");
                    }.bind(this),
                  )));
          }),
          (AnimationItem.prototype.setData = function (t, e) {
            e && "object" != typeof e && (e = JSON.parse(e));
            var r = { wrapper: t, animationData: e },
              i = t.attributes;
            ((r.path = i.getNamedItem("data-animation-path")
              ? i.getNamedItem("data-animation-path").value
              : i.getNamedItem("data-bm-path")
                ? i.getNamedItem("data-bm-path").value
                : i.getNamedItem("bm-path")
                  ? i.getNamedItem("bm-path").value
                  : ""),
              (r.animType = i.getNamedItem("data-anim-type")
                ? i.getNamedItem("data-anim-type").value
                : i.getNamedItem("data-bm-type")
                  ? i.getNamedItem("data-bm-type").value
                  : i.getNamedItem("bm-type")
                    ? i.getNamedItem("bm-type").value
                    : i.getNamedItem("data-bm-renderer")
                      ? i.getNamedItem("data-bm-renderer").value
                      : i.getNamedItem("bm-renderer")
                        ? i.getNamedItem("bm-renderer").value
                        : "canvas"));
            var n = i.getNamedItem("data-anim-loop")
              ? i.getNamedItem("data-anim-loop").value
              : i.getNamedItem("data-bm-loop")
                ? i.getNamedItem("data-bm-loop").value
                : i.getNamedItem("bm-loop")
                  ? i.getNamedItem("bm-loop").value
                  : "";
            "false" === n
              ? (r.loop = !1)
              : "true" === n
                ? (r.loop = !0)
                : "" !== n && (r.loop = parseInt(n, 10));
            var a = i.getNamedItem("data-anim-autoplay")
              ? i.getNamedItem("data-anim-autoplay").value
              : i.getNamedItem("data-bm-autoplay")
                ? i.getNamedItem("data-bm-autoplay").value
                : !i.getNamedItem("bm-autoplay") ||
                  i.getNamedItem("bm-autoplay").value;
            ((r.autoplay = "false" !== a),
              (r.name = i.getNamedItem("data-name")
                ? i.getNamedItem("data-name").value
                : i.getNamedItem("data-bm-name")
                  ? i.getNamedItem("data-bm-name").value
                  : i.getNamedItem("bm-name")
                    ? i.getNamedItem("bm-name").value
                    : ""),
              "false" ===
                (i.getNamedItem("data-anim-prerender")
                  ? i.getNamedItem("data-anim-prerender").value
                  : i.getNamedItem("data-bm-prerender")
                    ? i.getNamedItem("data-bm-prerender").value
                    : i.getNamedItem("bm-prerender")
                      ? i.getNamedItem("bm-prerender").value
                      : "") && (r.prerender = !1),
              this.setParams(r));
          }),
          (AnimationItem.prototype.includeLayers = function (t) {
            t.op > this.animationData.op &&
              ((this.animationData.op = t.op),
              (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
            var e,
              r,
              i = this.animationData.layers,
              n = i.length,
              a = t.layers,
              s = a.length;
            for (r = 0; r < s; r += 1)
              for (e = 0; e < n; ) {
                if (i[e].id === a[r].id) {
                  i[e] = a[r];
                  break;
                }
                e += 1;
              }
            if (
              ((t.chars || t.fonts) &&
                (this.renderer.globalData.fontManager.addChars(t.chars),
                this.renderer.globalData.fontManager.addFonts(
                  t.fonts,
                  this.renderer.globalData.defs,
                )),
              t.assets)
            )
              for (n = t.assets.length, e = 0; e < n; e += 1)
                this.animationData.assets.push(t.assets[e]);
            ((this.animationData.__complete = !1),
              dataManager.completeData(
                this.animationData,
                this.renderer.globalData.fontManager,
              ),
              this.renderer.includeLayers(t.layers),
              expressionsPlugin && expressionsPlugin.initExpressions(this),
              this.loadNextSegment());
          }),
          (AnimationItem.prototype.loadNextSegment = function () {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments)
              return (
                this.trigger("data_ready"),
                void (this.timeCompleted = this.totalFrames)
              );
            var e = t.shift();
            this.timeCompleted = e.time * this.frameRate;
            var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            ((this.segmentPos += 1),
              assetLoader.load(
                r,
                this.includeLayers.bind(this),
                function () {
                  this.trigger("data_failed");
                }.bind(this),
              ));
          }),
          (AnimationItem.prototype.loadSegments = function () {
            (this.animationData.segments ||
              (this.timeCompleted = this.totalFrames),
              this.loadNextSegment());
          }),
          (AnimationItem.prototype.imagesLoaded = function () {
            (this.trigger("loaded_images"), this.checkLoaded());
          }),
          (AnimationItem.prototype.preloadImages = function () {
            (this.imagePreloader.setAssetsPath(this.assetsPath),
              this.imagePreloader.setPath(this.path),
              this.imagePreloader.loadAssets(
                this.animationData.assets,
                this.imagesLoaded.bind(this),
              ));
          }),
          (AnimationItem.prototype.configAnimation = function (t) {
            if (this.renderer)
              try {
                ((this.animationData = t),
                  this.initialSegment
                    ? ((this.totalFrames = Math.floor(
                        this.initialSegment[1] - this.initialSegment[0],
                      )),
                      (this.firstFrame = Math.round(this.initialSegment[0])))
                    : ((this.totalFrames = Math.floor(
                        this.animationData.op - this.animationData.ip,
                      )),
                      (this.firstFrame = Math.round(this.animationData.ip))),
                  this.renderer.configAnimation(t),
                  t.assets || (t.assets = []),
                  (this.assets = this.animationData.assets),
                  (this.frameRate = this.animationData.fr),
                  (this.frameMult = this.animationData.fr / 1e3),
                  this.renderer.searchExtraCompositions(t.assets),
                  (this.markers = markerParser(t.markers || [])),
                  this.trigger("config_ready"),
                  this.preloadImages(),
                  this.loadSegments(),
                  this.updaFrameModifier(),
                  this.waitForFontsLoaded(),
                  this.isPaused && this.audioController.pause());
              } catch (t) {
                this.triggerConfigError(t);
              }
          }),
          (AnimationItem.prototype.waitForFontsLoaded = function () {
            this.renderer &&
              (this.renderer.globalData.fontManager.isLoaded
                ? this.checkLoaded()
                : setTimeout(this.waitForFontsLoaded.bind(this), 20));
          }),
          (AnimationItem.prototype.checkLoaded = function () {
            !this.isLoaded &&
              this.renderer.globalData.fontManager.isLoaded &&
              (this.imagePreloader.loadedImages() ||
                "canvas" !== this.renderer.rendererType) &&
              this.imagePreloader.loadedFootages() &&
              ((this.isLoaded = !0),
              dataManager.completeData(
                this.animationData,
                this.renderer.globalData.fontManager,
              ),
              expressionsPlugin && expressionsPlugin.initExpressions(this),
              this.renderer.initItems(),
              setTimeout(
                function () {
                  this.trigger("DOMLoaded");
                }.bind(this),
                0,
              ),
              this.gotoFrame(),
              this.autoplay && this.play());
          }),
          (AnimationItem.prototype.resize = function () {
            this.renderer.updateContainerSize();
          }),
          (AnimationItem.prototype.setSubframe = function (t) {
            this.isSubframeEnabled = !!t;
          }),
          (AnimationItem.prototype.gotoFrame = function () {
            ((this.currentFrame = this.isSubframeEnabled
              ? this.currentRawFrame
              : ~~this.currentRawFrame),
              this.timeCompleted !== this.totalFrames &&
                this.currentFrame > this.timeCompleted &&
                (this.currentFrame = this.timeCompleted),
              this.trigger("enterFrame"),
              this.renderFrame());
          }),
          (AnimationItem.prototype.renderFrame = function () {
            if (!1 !== this.isLoaded && this.renderer)
              try {
                this.renderer.renderFrame(this.currentFrame + this.firstFrame);
              } catch (t) {
                this.triggerRenderFrameError(t);
              }
          }),
          (AnimationItem.prototype.play = function (t) {
            (t && this.name !== t) ||
              (!0 === this.isPaused &&
                ((this.isPaused = !1),
                this.audioController.resume(),
                this._idle && ((this._idle = !1), this.trigger("_active"))));
          }),
          (AnimationItem.prototype.pause = function (t) {
            (t && this.name !== t) ||
              (!1 === this.isPaused &&
                ((this.isPaused = !0),
                (this._idle = !0),
                this.trigger("_idle"),
                this.audioController.pause()));
          }),
          (AnimationItem.prototype.togglePause = function (t) {
            (t && this.name !== t) ||
              (!0 === this.isPaused ? this.play() : this.pause());
          }),
          (AnimationItem.prototype.stop = function (t) {
            (t && this.name !== t) ||
              (this.pause(),
              (this.playCount = 0),
              (this._completedLoop = !1),
              this.setCurrentRawFrameValue(0));
          }),
          (AnimationItem.prototype.getMarkerData = function (t) {
            for (var e, r = 0; r < this.markers.length; r += 1)
              if ((e = this.markers[r]).payload && e.payload.name === t)
                return e;
            return null;
          }),
          (AnimationItem.prototype.goToAndStop = function (t, e, r) {
            if (!r || this.name === r) {
              var i = Number(t);
              if (isNaN(i)) {
                var n = this.getMarkerData(t);
                n && this.goToAndStop(n.time, !0);
              } else
                e
                  ? this.setCurrentRawFrameValue(t)
                  : this.setCurrentRawFrameValue(t * this.frameModifier);
              this.pause();
            }
          }),
          (AnimationItem.prototype.goToAndPlay = function (t, e, r) {
            if (!r || this.name === r) {
              var i = Number(t);
              if (isNaN(i)) {
                var n = this.getMarkerData(t);
                n &&
                  (n.duration
                    ? this.playSegments([n.time, n.time + n.duration], !0)
                    : this.goToAndStop(n.time, !0));
              } else this.goToAndStop(i, e, r);
              this.play();
            }
          }),
          (AnimationItem.prototype.advanceTime = function (t) {
            if (!0 !== this.isPaused && !1 !== this.isLoaded) {
              var e = this.currentRawFrame + t * this.frameModifier,
                r = !1;
              (e >= this.totalFrames - 1 && this.frameModifier > 0
                ? this.loop && this.playCount !== this.loop
                  ? e >= this.totalFrames
                    ? ((this.playCount += 1),
                      this.checkSegments(e % this.totalFrames) ||
                        (this.setCurrentRawFrameValue(e % this.totalFrames),
                        (this._completedLoop = !0),
                        this.trigger("loopComplete")))
                    : this.setCurrentRawFrameValue(e)
                  : this.checkSegments(
                      e > this.totalFrames ? e % this.totalFrames : 0,
                    ) || ((r = !0), (e = this.totalFrames - 1))
                : e < 0
                  ? this.checkSegments(e % this.totalFrames) ||
                    (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                      ? ((r = !0), (e = 0))
                      : (this.setCurrentRawFrameValue(
                          this.totalFrames + (e % this.totalFrames),
                        ),
                        this._completedLoop
                          ? this.trigger("loopComplete")
                          : (this._completedLoop = !0)))
                  : this.setCurrentRawFrameValue(e),
                r &&
                  (this.setCurrentRawFrameValue(e),
                  this.pause(),
                  this.trigger("complete")));
            }
          }),
          (AnimationItem.prototype.adjustSegment = function (t, e) {
            ((this.playCount = 0),
              t[1] < t[0]
                ? (this.frameModifier > 0 &&
                    (this.playSpeed < 0
                      ? this.setSpeed(-this.playSpeed)
                      : this.setDirection(-1)),
                  (this.totalFrames = t[0] - t[1]),
                  (this.timeCompleted = this.totalFrames),
                  (this.firstFrame = t[1]),
                  this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
                : t[1] > t[0] &&
                  (this.frameModifier < 0 &&
                    (this.playSpeed < 0
                      ? this.setSpeed(-this.playSpeed)
                      : this.setDirection(1)),
                  (this.totalFrames = t[1] - t[0]),
                  (this.timeCompleted = this.totalFrames),
                  (this.firstFrame = t[0]),
                  this.setCurrentRawFrameValue(0.001 + e)),
              this.trigger("segmentStart"));
          }),
          (AnimationItem.prototype.setSegment = function (t, e) {
            var r = -1;
            (this.isPaused &&
              (this.currentRawFrame + this.firstFrame < t
                ? (r = t)
                : this.currentRawFrame + this.firstFrame > e && (r = e - t)),
              (this.firstFrame = t),
              (this.totalFrames = e - t),
              (this.timeCompleted = this.totalFrames),
              -1 !== r && this.goToAndStop(r, !0));
          }),
          (AnimationItem.prototype.playSegments = function (t, e) {
            if ((e && (this.segments.length = 0), "object" == typeof t[0])) {
              var r,
                i = t.length;
              for (r = 0; r < i; r += 1) this.segments.push(t[r]);
            } else this.segments.push(t);
            (this.segments.length &&
              e &&
              this.adjustSegment(this.segments.shift(), 0),
              this.isPaused && this.play());
          }),
          (AnimationItem.prototype.resetSegments = function (t) {
            ((this.segments.length = 0),
              this.segments.push([
                this.animationData.ip,
                this.animationData.op,
              ]),
              t && this.checkSegments(0));
          }),
          (AnimationItem.prototype.checkSegments = function (t) {
            return (
              !!this.segments.length &&
              (this.adjustSegment(this.segments.shift(), t), !0)
            );
          }),
          (AnimationItem.prototype.destroy = function (t) {
            (t && this.name !== t) ||
              !this.renderer ||
              (this.renderer.destroy(),
              this.imagePreloader.destroy(),
              this.trigger("destroy"),
              (this._cbs = null),
              (this.onEnterFrame = null),
              (this.onLoopComplete = null),
              (this.onComplete = null),
              (this.onSegmentStart = null),
              (this.onDestroy = null),
              (this.renderer = null),
              (this.renderer = null),
              (this.imagePreloader = null),
              (this.projectInterface = null));
          }),
          (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
            ((this.currentRawFrame = t), this.gotoFrame());
          }),
          (AnimationItem.prototype.setSpeed = function (t) {
            ((this.playSpeed = t), this.updaFrameModifier());
          }),
          (AnimationItem.prototype.setDirection = function (t) {
            ((this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier());
          }),
          (AnimationItem.prototype.setVolume = function (t, e) {
            (e && this.name !== e) || this.audioController.setVolume(t);
          }),
          (AnimationItem.prototype.getVolume = function () {
            return this.audioController.getVolume();
          }),
          (AnimationItem.prototype.mute = function (t) {
            (t && this.name !== t) || this.audioController.mute();
          }),
          (AnimationItem.prototype.unmute = function (t) {
            (t && this.name !== t) || this.audioController.unmute();
          }),
          (AnimationItem.prototype.updaFrameModifier = function () {
            ((this.frameModifier =
              this.frameMult * this.playSpeed * this.playDirection),
              this.audioController.setRate(
                this.playSpeed * this.playDirection,
              ));
          }),
          (AnimationItem.prototype.getPath = function () {
            return this.path;
          }),
          (AnimationItem.prototype.getAssetsPath = function (t) {
            var e = "";
            if (t.e) e = t.p;
            else if (this.assetsPath) {
              var r = t.p;
              (-1 !== r.indexOf("images/") && (r = r.split("/")[1]),
                (e = this.assetsPath + r));
            } else ((e = this.path), (e += t.u ? t.u : ""), (e += t.p));
            return e;
          }),
          (AnimationItem.prototype.getAssetData = function (t) {
            for (var e = 0, r = this.assets.length; e < r; ) {
              if (t === this.assets[e].id) return this.assets[e];
              e += 1;
            }
            return null;
          }),
          (AnimationItem.prototype.hide = function () {
            this.renderer.hide();
          }),
          (AnimationItem.prototype.show = function () {
            this.renderer.show();
          }),
          (AnimationItem.prototype.getDuration = function (t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate;
          }),
          (AnimationItem.prototype.trigger = function (t) {
            if (this._cbs && this._cbs[t])
              switch (t) {
                case "enterFrame":
                  this.triggerEvent(
                    t,
                    new BMEnterFrameEvent(
                      t,
                      this.currentFrame,
                      this.totalFrames,
                      this.frameModifier,
                    ),
                  );
                  break;
                case "loopComplete":
                  this.triggerEvent(
                    t,
                    new BMCompleteLoopEvent(
                      t,
                      this.loop,
                      this.playCount,
                      this.frameMult,
                    ),
                  );
                  break;
                case "complete":
                  this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                  break;
                case "segmentStart":
                  this.triggerEvent(
                    t,
                    new BMSegmentStartEvent(
                      t,
                      this.firstFrame,
                      this.totalFrames,
                    ),
                  );
                  break;
                case "destroy":
                  this.triggerEvent(t, new BMDestroyEvent(t, this));
                  break;
                default:
                  this.triggerEvent(t);
              }
            ("enterFrame" === t &&
              this.onEnterFrame &&
              this.onEnterFrame.call(
                this,
                new BMEnterFrameEvent(
                  t,
                  this.currentFrame,
                  this.totalFrames,
                  this.frameMult,
                ),
              ),
              "loopComplete" === t &&
                this.onLoopComplete &&
                this.onLoopComplete.call(
                  this,
                  new BMCompleteLoopEvent(
                    t,
                    this.loop,
                    this.playCount,
                    this.frameMult,
                  ),
                ),
              "complete" === t &&
                this.onComplete &&
                this.onComplete.call(
                  this,
                  new BMCompleteEvent(t, this.frameMult),
                ),
              "segmentStart" === t &&
                this.onSegmentStart &&
                this.onSegmentStart.call(
                  this,
                  new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames),
                ),
              "destroy" === t &&
                this.onDestroy &&
                this.onDestroy.call(this, new BMDestroyEvent(t, this)));
          }),
          (AnimationItem.prototype.triggerRenderFrameError = function (t) {
            var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            (this.triggerEvent("error", e),
              this.onError && this.onError.call(this, e));
          }),
          (AnimationItem.prototype.triggerConfigError = function (t) {
            var e = new BMConfigErrorEvent(t, this.currentFrame);
            (this.triggerEvent("error", e),
              this.onError && this.onError.call(this, e));
          }));
        var Expressions = (function () {
          var t = {};
          return (
            (t.initExpressions = function (t) {
              var e = 0,
                r = [];
              ((t.renderer.compInterface = CompExpressionInterface(t.renderer)),
                t.renderer.globalData.projectInterface.registerComposition(
                  t.renderer,
                ),
                (t.renderer.globalData.pushExpression = function () {
                  e += 1;
                }),
                (t.renderer.globalData.popExpression = function () {
                  0 == (e -= 1) &&
                    (function () {
                      var t,
                        e = r.length;
                      for (t = 0; t < e; t += 1) r[t].release();
                      r.length = 0;
                    })();
                }),
                (t.renderer.globalData.registerExpressionProperty = function (
                  t,
                ) {
                  -1 === r.indexOf(t) && r.push(t);
                }));
            }),
            t
          );
        })();
        expressionsPlugin = Expressions;
        var ExpressionManager = (function () {
            var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null;
            function $bm_isInstanceOfArray(t) {
              return t.constructor === Array || t.constructor === Float32Array;
            }
            function isNumerable(t, e) {
              return (
                "number" === t ||
                "boolean" === t ||
                "string" === t ||
                e instanceof Number
              );
            }
            function $bm_neg(t) {
              var e = typeof t;
              if ("number" === e || "boolean" === e || t instanceof Number)
                return -t;
              if ($bm_isInstanceOfArray(t)) {
                var r,
                  i = t.length,
                  n = [];
                for (r = 0; r < i; r += 1) n[r] = -t[r];
                return n;
              }
              return t.propType ? t.v : -t;
            }
            var easeInBez = BezierFactory.getBezierEasing(
                0.333,
                0,
                0.833,
                0.833,
                "easeIn",
              ).get,
              easeOutBez = BezierFactory.getBezierEasing(
                0.167,
                0.167,
                0.667,
                1,
                "easeOut",
              ).get,
              easeInOutBez = BezierFactory.getBezierEasing(
                0.33,
                0,
                0.667,
                1,
                "easeInOut",
              ).get;
            function sum(t, e) {
              var r = typeof t,
                i = typeof e;
              if ("string" === r || "string" === i) return t + e;
              if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                return (((t = t.slice(0))[0] += e), t);
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return (((e = e.slice(0))[0] = t + e[0]), e);
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (
                  var n = 0, a = t.length, s = e.length, o = [];
                  n < a || n < s;

                )
                  (("number" == typeof t[n] || t[n] instanceof Number) &&
                  ("number" == typeof e[n] || e[n] instanceof Number)
                    ? (o[n] = t[n] + e[n])
                    : (o[n] = void 0 === e[n] ? t[n] : t[n] || e[n]),
                    (n += 1));
                return o;
              }
              return 0;
            }
            var add = sum;
            function sub(t, e) {
              var r = typeof t,
                i = typeof e;
              if (isNumerable(r, t) && isNumerable(i, e))
                return (
                  "string" === r && (t = parseInt(t, 10)),
                  "string" === i && (e = parseInt(e, 10)),
                  t - e
                );
              if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                return (((t = t.slice(0))[0] -= e), t);
              if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                return (((e = e.slice(0))[0] = t - e[0]), e);
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (
                  var n = 0, a = t.length, s = e.length, o = [];
                  n < a || n < s;

                )
                  (("number" == typeof t[n] || t[n] instanceof Number) &&
                  ("number" == typeof e[n] || e[n] instanceof Number)
                    ? (o[n] = t[n] - e[n])
                    : (o[n] = void 0 === e[n] ? t[n] : t[n] || e[n]),
                    (n += 1));
                return o;
              }
              return 0;
            }
            function mul(t, e) {
              var r,
                i,
                n,
                a = typeof t,
                s = typeof e;
              if (isNumerable(a, t) && isNumerable(s, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (
                  n = t.length, r = createTypedArray("float32", n), i = 0;
                  i < n;
                  i += 1
                )
                  r[i] = t[i] * e;
                return r;
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (
                  n = e.length, r = createTypedArray("float32", n), i = 0;
                  i < n;
                  i += 1
                )
                  r[i] = t * e[i];
                return r;
              }
              return 0;
            }
            function div(t, e) {
              var r,
                i,
                n,
                a = typeof t,
                s = typeof e;
              if (isNumerable(a, t) && isNumerable(s, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (
                  n = t.length, r = createTypedArray("float32", n), i = 0;
                  i < n;
                  i += 1
                )
                  r[i] = t[i] / e;
                return r;
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (
                  n = e.length, r = createTypedArray("float32", n), i = 0;
                  i < n;
                  i += 1
                )
                  r[i] = t / e[i];
                return r;
              }
              return 0;
            }
            function mod(t, e) {
              return (
                "string" == typeof t && (t = parseInt(t, 10)),
                "string" == typeof e && (e = parseInt(e, 10)),
                t % e
              );
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;
            function clamp(t, e, r) {
              if (e > r) {
                var i = r;
                ((r = e), (e = i));
              }
              return Math.min(Math.max(t, e), r);
            }
            function radiansToDegrees(t) {
              return t / degToRads;
            }
            var radians_to_degrees = radiansToDegrees;
            function degreesToRadians(t) {
              return t * degToRads;
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];
            function length(t, e) {
              if ("number" == typeof t || t instanceof Number)
                return ((e = e || 0), Math.abs(t - e));
              var r;
              e || (e = helperLengthArray);
              var i = Math.min(t.length, e.length),
                n = 0;
              for (r = 0; r < i; r += 1) n += Math.pow(e[r] - t[r], 2);
              return Math.sqrt(n);
            }
            function normalize(t) {
              return div(t, length(t));
            }
            function rgbToHsl(t) {
              var e,
                r,
                i = t[0],
                n = t[1],
                a = t[2],
                s = Math.max(i, n, a),
                o = Math.min(i, n, a),
                h = (s + o) / 2;
              if (s === o) ((e = 0), (r = 0));
              else {
                var l = s - o;
                switch (((r = h > 0.5 ? l / (2 - s - o) : l / (s + o)), s)) {
                  case i:
                    e = (n - a) / l + (n < a ? 6 : 0);
                    break;
                  case n:
                    e = (a - i) / l + 2;
                    break;
                  case a:
                    e = (i - n) / l + 4;
                }
                e /= 6;
              }
              return [e, r, h, t[3]];
            }
            function hue2rgb(t, e, r) {
              return (
                r < 0 && (r += 1),
                r > 1 && (r -= 1),
                r < 1 / 6
                  ? t + 6 * (e - t) * r
                  : r < 0.5
                    ? e
                    : r < 2 / 3
                      ? t + (e - t) * (2 / 3 - r) * 6
                      : t
              );
            }
            function hslToRgb(t) {
              var e,
                r,
                i,
                n = t[0],
                a = t[1],
                s = t[2];
              if (0 === a) ((e = s), (i = s), (r = s));
              else {
                var o = s < 0.5 ? s * (1 + a) : s + a - s * a,
                  h = 2 * s - o;
                ((e = hue2rgb(h, o, n + 1 / 3)),
                  (r = hue2rgb(h, o, n)),
                  (i = hue2rgb(h, o, n - 1 / 3)));
              }
              return [e, r, i, t[3]];
            }
            function linear(t, e, r, i, n) {
              if (
                ((void 0 !== i && void 0 !== n) ||
                  ((i = e), (n = r), (e = 0), (r = 1)),
                r < e)
              ) {
                var a = r;
                ((r = e), (e = a));
              }
              if (t <= e) return i;
              if (t >= r) return n;
              var s,
                o = r === e ? 0 : (t - e) / (r - e);
              if (!i.length) return i + (n - i) * o;
              var h = i.length,
                l = createTypedArray("float32", h);
              for (s = 0; s < h; s += 1) l[s] = i[s] + (n[s] - i[s]) * o;
              return l;
            }
            function random(t, e) {
              if (
                (void 0 === e &&
                  (void 0 === t ? ((t = 0), (e = 1)) : ((e = t), (t = void 0))),
                e.length)
              ) {
                var r,
                  i = e.length;
                t || (t = createTypedArray("float32", i));
                var n = createTypedArray("float32", i),
                  a = BMMath.random();
                for (r = 0; r < i; r += 1) n[r] = t[r] + a * (e[r] - t[r]);
                return n;
              }
              return (void 0 === t && (t = 0), t + BMMath.random() * (e - t));
            }
            function createPath(t, e, r, i) {
              var n,
                a = t.length,
                s = shapePool.newElement();
              s.setPathData(!!i, a);
              var o,
                h,
                l = [0, 0];
              for (n = 0; n < a; n += 1)
                ((o = e && e[n] ? e[n] : l),
                  (h = r && r[n] ? r[n] : l),
                  s.setTripleAt(
                    t[n][0],
                    t[n][1],
                    h[0] + t[n][0],
                    h[1] + t[n][1],
                    o[0] + t[n][0],
                    o[1] + t[n][1],
                    n,
                    !0,
                  ));
              return s;
            }
            function initiateExpression(elem, data, property) {
              var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = -1 !== val.indexOf("random"),
                elemType = elem.data.ty,
                transform,
                $bm_transform,
                content,
                effect,
                thisProperty = property;
              ((thisProperty.valueAtTime = thisProperty.getValueAtTime),
                Object.defineProperty(thisProperty, "value", {
                  get: function () {
                    return thisProperty.v;
                  },
                }),
                (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
                (elem.comp.displayStartTime = 0));
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn,
                loop_in,
                loopOut,
                loop_out,
                smooth,
                toWorld,
                fromWorld,
                fromComp,
                toComp,
                fromCompToSurface,
                position,
                rotation,
                anchorPoint,
                scale,
                thisLayer,
                thisComp,
                mask,
                valueAtTime,
                velocityAtTime,
                scoped_bm_rt,
                expression_function = eval(
                  "[function _expression_function(){" +
                    val +
                    ";scoped_bm_rt=$bm_rt}]",
                )[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || !0 !== this.data.hd,
                wiggle = function (t, e) {
                  var r,
                    i,
                    n = this.pv.length ? this.pv.length : 1,
                    a = createTypedArray("float32", n);
                  var s = Math.floor(5 * time);
                  for (r = 0, i = 0; r < s; ) {
                    for (i = 0; i < n; i += 1)
                      a[i] += -e + 2 * e * BMMath.random();
                    r += 1;
                  }
                  var o = 5 * time,
                    h = o - Math.floor(o),
                    l = createTypedArray("float32", n);
                  if (n > 1) {
                    for (i = 0; i < n; i += 1)
                      l[i] =
                        this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h;
                    return l;
                  }
                  return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h;
                }.bind(this);
              function loopInDuration(t, e) {
                return loopIn(t, e, !0);
              }
              function loopOutDuration(t, e) {
                return loopOut(t, e, !0);
              }
              (thisProperty.loopIn &&
                ((loopIn = thisProperty.loopIn.bind(thisProperty)),
                (loop_in = loopIn)),
                thisProperty.loopOut &&
                  ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                  (loop_out = loopOut)),
                thisProperty.smooth &&
                  (smooth = thisProperty.smooth.bind(thisProperty)),
                this.getValueAtTime &&
                  (valueAtTime = this.getValueAtTime.bind(this)),
                this.getVelocityAtTime &&
                  (velocityAtTime = this.getVelocityAtTime.bind(this)));
              var comp = elem.comp.globalData.projectInterface.bind(
                  elem.comp.globalData.projectInterface,
                ),
                time,
                velocity,
                value,
                text,
                textIndex,
                textTotal,
                selectorValue;
              function lookAt(t, e) {
                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                  i =
                    Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) /
                    degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, i, 0];
              }
              function easeOut(t, e, r, i, n) {
                return applyEase(easeOutBez, t, e, r, i, n);
              }
              function easeIn(t, e, r, i, n) {
                return applyEase(easeInBez, t, e, r, i, n);
              }
              function ease(t, e, r, i, n) {
                return applyEase(easeInOutBez, t, e, r, i, n);
              }
              function applyEase(t, e, r, i, n, a) {
                (void 0 === n ? ((n = r), (a = i)) : (e = (e - r) / (i - r)),
                  e > 1 ? (e = 1) : e < 0 && (e = 0));
                var s = t(e);
                if ($bm_isInstanceOfArray(n)) {
                  var o,
                    h = n.length,
                    l = createTypedArray("float32", h);
                  for (o = 0; o < h; o += 1) l[o] = (a[o] - n[o]) * s + n[o];
                  return l;
                }
                return (a - n) * s + n;
              }
              function nearestKey(t) {
                var e,
                  r,
                  i,
                  n = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (
                    ((r = -1),
                    (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                  )
                    ((r = 1), (i = data.k[0].t));
                  else {
                    for (e = 0; e < n - 1; e += 1) {
                      if (t === data.k[e].t) {
                        ((r = e + 1), (i = data.k[e].t));
                        break;
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        t - data.k[e].t > data.k[e + 1].t - t
                          ? ((r = e + 2), (i = data.k[e + 1].t))
                          : ((r = e + 1), (i = data.k[e].t));
                        break;
                      }
                    }
                    -1 === r && ((r = e + 1), (i = data.k[e].t));
                  }
                else ((r = 0), (i = 0));
                var a = {};
                return (
                  (a.index = r),
                  (a.time = i / elem.comp.globalData.frameRate),
                  a
                );
              }
              function key(t) {
                var e, r, i;
                if (!data.k.length || "number" == typeof data.k[0])
                  throw new Error("The property has no keyframe at index " + t);
                ((t -= 1),
                  (e = {
                    time: data.k[t].t / elem.comp.globalData.frameRate,
                    value: [],
                  }));
                var n = Object.prototype.hasOwnProperty.call(data.k[t], "s")
                  ? data.k[t].s
                  : data.k[t - 1].e;
                for (i = n.length, r = 0; r < i; r += 1)
                  ((e[r] = n[r]), (e.value[r] = n[r]));
                return e;
              }
              function framesToTime(t, e) {
                return (e || (e = elem.comp.globalData.frameRate), t / e);
              }
              function timeToFrames(t, e) {
                return (
                  t || 0 === t || (t = time),
                  e || (e = elem.comp.globalData.frameRate),
                  t * e
                );
              }
              function seedRandom(t) {
                BMMath.seedrandom(randSeed + t);
              }
              function sourceRectAtTime() {
                return elem.sourceRectAtTime();
              }
              function substring(t, e) {
                return "string" == typeof value
                  ? void 0 === e
                    ? value.substring(t)
                    : value.substring(t, e)
                  : "";
              }
              function substr(t, e) {
                return "string" == typeof value
                  ? void 0 === e
                    ? value.substr(t)
                    : value.substr(t, e)
                  : "";
              }
              function posterizeTime(t) {
                ((time = 0 === t ? 0 : Math.floor(time * t) / t),
                  (value = valueAtTime(time)));
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent,
                randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;
              function executeExpression(t) {
                return (
                  (value = t),
                  _needsRandom && seedRandom(randSeed),
                  this.frameExpressionId === elem.globalData.frameId &&
                  "textSelector" !== this.propType
                    ? value
                    : ("textSelector" === this.propType &&
                        ((textIndex = this.textIndex),
                        (textTotal = this.textTotal),
                        (selectorValue = this.selectorValue)),
                      thisLayer ||
                        ((text = elem.layerInterface.text),
                        (thisLayer = elem.layerInterface),
                        (thisComp = elem.comp.compInterface),
                        (toWorld = thisLayer.toWorld.bind(thisLayer)),
                        (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                        (fromComp = thisLayer.fromComp.bind(thisLayer)),
                        (toComp = thisLayer.toComp.bind(thisLayer)),
                        (mask = thisLayer.mask
                          ? thisLayer.mask.bind(thisLayer)
                          : null),
                        (fromCompToSurface = fromComp)),
                      transform ||
                        ((transform = elem.layerInterface(
                          "ADBE Transform Group",
                        )),
                        ($bm_transform = transform),
                        transform && (anchorPoint = transform.anchorPoint)),
                      4 !== elemType ||
                        content ||
                        (content = thisLayer("ADBE Root Vectors Group")),
                      effect || (effect = thisLayer(4)),
                      (hasParent = !(
                        !elem.hierarchy || !elem.hierarchy.length
                      )) &&
                        !parent &&
                        (parent = elem.hierarchy[0].layerInterface),
                      (time =
                        this.comp.renderedFrame /
                        this.comp.globalData.frameRate),
                      needsVelocity && (velocity = velocityAtTime(time)),
                      expression_function(),
                      (this.frameExpressionId = elem.globalData.frameId),
                      "shape" === scoped_bm_rt.propType &&
                        (scoped_bm_rt = scoped_bm_rt.v),
                      scoped_bm_rt)
                );
              }
              return executeExpression;
            }
            return ((ob.initiateExpression = initiateExpression), ob);
          })(),
          expressionHelpers = (function () {
            return {
              searchExpressions: function (t, e, r) {
                e.x &&
                  ((r.k = !0),
                  (r.x = !0),
                  (r.initiateExpression = ExpressionManager.initiateExpression),
                  r.effectsSequence.push(
                    r.initiateExpression(t, e, r).bind(r),
                  ));
              },
              getSpeedAtTime: function (t) {
                var e = this.getValueAtTime(t),
                  r = this.getValueAtTime(t + -0.01),
                  i = 0;
                if (e.length) {
                  var n;
                  for (n = 0; n < e.length; n += 1)
                    i += Math.pow(r[n] - e[n], 2);
                  i = 100 * Math.sqrt(i);
                } else i = 0;
                return i;
              },
              getVelocityAtTime: function (t) {
                if (void 0 !== this.vel) return this.vel;
                var e,
                  r,
                  i = this.getValueAtTime(t),
                  n = this.getValueAtTime(t + -0.001);
                if (i.length)
                  for (
                    e = createTypedArray("float32", i.length), r = 0;
                    r < i.length;
                    r += 1
                  )
                    e[r] = (n[r] - i[r]) / -0.001;
                else e = (n - i) / -0.001;
                return e;
              },
              getValueAtTime: function (t) {
                return (
                  (t *= this.elem.globalData.frameRate),
                  (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                    ((this._cachingAtTime.lastIndex =
                      this._cachingAtTime.lastFrame < t
                        ? this._cachingAtTime.lastIndex
                        : 0),
                    (this._cachingAtTime.value = this.interpolateValue(
                      t,
                      this._cachingAtTime,
                    )),
                    (this._cachingAtTime.lastFrame = t)),
                  this._cachingAtTime.value
                );
              },
              getStaticValueAtTime: function () {
                return this.pv;
              },
              setGroupProperty: function (t) {
                this.propertyGroup = t;
              },
            };
          })();
        (!(function () {
          function t(t, e, r) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i,
              n,
              a,
              s,
              o,
              h = this.comp.renderedFrame,
              l = this.keyframes,
              p = l[l.length - 1].t;
            if (h <= p) return this.pv;
            if (
              (r
                ? (n =
                    p -
                    (i = e
                      ? Math.abs(p - this.elem.comp.globalData.frameRate * e)
                      : Math.max(0, p - this.elem.data.ip)))
                : ((!e || e > l.length - 1) && (e = l.length - 1),
                  (i = p - (n = l[l.length - 1 - e].t))),
              "pingpong" === t)
            ) {
              if (Math.floor((h - n) / i) % 2 != 0)
                return this.getValueAtTime(
                  (i - ((h - n) % i) + n) / this.comp.globalData.frameRate,
                  0,
                );
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(
                    n / this.comp.globalData.frameRate,
                    0,
                  ),
                  f = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0,
                  ),
                  u = this.getValueAtTime(
                    (((h - n) % i) + n) / this.comp.globalData.frameRate,
                    0,
                  ),
                  m = Math.floor((h - n) / i);
                if (this.pv.length) {
                  for (
                    s = (o = new Array(c.length)).length, a = 0;
                    a < s;
                    a += 1
                  )
                    o[a] = (f[a] - c[a]) * m + u[a];
                  return o;
                }
                return (f - c) * m + u;
              }
              if ("continue" === t) {
                var d = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0,
                  ),
                  y = this.getValueAtTime(
                    (p - 0.001) / this.comp.globalData.frameRate,
                    0,
                  );
                if (this.pv.length) {
                  for (
                    s = (o = new Array(d.length)).length, a = 0;
                    a < s;
                    a += 1
                  )
                    o[a] =
                      d[a] +
                      ((d[a] - y[a]) *
                        ((h - p) / this.comp.globalData.frameRate)) /
                        5e-4;
                  return o;
                }
                return d + ((h - p) / 0.001) * (d - y);
              }
            }
            return this.getValueAtTime(
              (((h - n) % i) + n) / this.comp.globalData.frameRate,
              0,
            );
          }
          function e(t, e, r) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i,
              n,
              a,
              s,
              o,
              h = this.comp.renderedFrame,
              l = this.keyframes,
              p = l[0].t;
            if (h >= p) return this.pv;
            if (
              (r
                ? (n =
                    p +
                    (i = e
                      ? Math.abs(this.elem.comp.globalData.frameRate * e)
                      : Math.max(0, this.elem.data.op - p)))
                : ((!e || e > l.length - 1) && (e = l.length - 1),
                  (i = (n = l[e].t) - p)),
              "pingpong" === t)
            ) {
              if (Math.floor((p - h) / i) % 2 == 0)
                return this.getValueAtTime(
                  (((p - h) % i) + p) / this.comp.globalData.frameRate,
                  0,
                );
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0,
                  ),
                  f = this.getValueAtTime(
                    n / this.comp.globalData.frameRate,
                    0,
                  ),
                  u = this.getValueAtTime(
                    (i - ((p - h) % i) + p) / this.comp.globalData.frameRate,
                    0,
                  ),
                  m = Math.floor((p - h) / i) + 1;
                if (this.pv.length) {
                  for (
                    s = (o = new Array(c.length)).length, a = 0;
                    a < s;
                    a += 1
                  )
                    o[a] = u[a] - (f[a] - c[a]) * m;
                  return o;
                }
                return u - (f - c) * m;
              }
              if ("continue" === t) {
                var d = this.getValueAtTime(
                    p / this.comp.globalData.frameRate,
                    0,
                  ),
                  y = this.getValueAtTime(
                    (p + 0.001) / this.comp.globalData.frameRate,
                    0,
                  );
                if (this.pv.length) {
                  for (
                    s = (o = new Array(d.length)).length, a = 0;
                    a < s;
                    a += 1
                  )
                    o[a] = d[a] + ((d[a] - y[a]) * (p - h)) / 0.001;
                  return o;
                }
                return d + ((d - y) * (p - h)) / 0.001;
              }
            }
            return this.getValueAtTime(
              (i - (((p - h) % i) + p)) / this.comp.globalData.frameRate,
              0,
            );
          }
          function r(t, e) {
            if (!this.k) return this.pv;
            if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1))
              return this.pv;
            var r,
              i,
              n = this.comp.renderedFrame / this.comp.globalData.frameRate,
              a = n - t,
              s = e > 1 ? (n + t - a) / (e - 1) : 1,
              o = 0,
              h = 0;
            for (
              r = this.pv.length
                ? createTypedArray("float32", this.pv.length)
                : 0;
              o < e;

            ) {
              if (((i = this.getValueAtTime(a + o * s)), this.pv.length))
                for (h = 0; h < this.pv.length; h += 1) r[h] += i[h];
              else r += i;
              o += 1;
            }
            if (this.pv.length)
              for (h = 0; h < this.pv.length; h += 1) r[h] /= e;
            else r /= e;
            return r;
          }
          var i = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function (t, e, r) {
            var n = i(t, e, r);
            return (
              n.dynamicProperties.length
                ? (n.getValueAtTime = function (t) {
                    this._transformCachingAtTime ||
                      (this._transformCachingAtTime = { v: new Matrix() });
                    var e = this._transformCachingAtTime.v;
                    if (
                      (e.cloneFromProps(this.pre.props),
                      this.appliedTransformations < 1)
                    ) {
                      var r = this.a.getValueAtTime(t);
                      e.translate(
                        -r[0] * this.a.mult,
                        -r[1] * this.a.mult,
                        r[2] * this.a.mult,
                      );
                    }
                    if (this.appliedTransformations < 2) {
                      var i = this.s.getValueAtTime(t);
                      e.scale(
                        i[0] * this.s.mult,
                        i[1] * this.s.mult,
                        i[2] * this.s.mult,
                      );
                    }
                    if (this.sk && this.appliedTransformations < 3) {
                      var n = this.sk.getValueAtTime(t),
                        a = this.sa.getValueAtTime(t);
                      e.skewFromAxis(-n * this.sk.mult, a * this.sa.mult);
                    }
                    if (this.r && this.appliedTransformations < 4) {
                      var s = this.r.getValueAtTime(t);
                      e.rotate(-s * this.r.mult);
                    } else if (!this.r && this.appliedTransformations < 4) {
                      var o = this.rz.getValueAtTime(t),
                        h = this.ry.getValueAtTime(t),
                        l = this.rx.getValueAtTime(t),
                        p = this.or.getValueAtTime(t);
                      e.rotateZ(-o * this.rz.mult)
                        .rotateY(h * this.ry.mult)
                        .rotateX(l * this.rx.mult)
                        .rotateZ(-p[2] * this.or.mult)
                        .rotateY(p[1] * this.or.mult)
                        .rotateX(p[0] * this.or.mult);
                    }
                    if (this.data.p && this.data.p.s) {
                      var c = this.px.getValueAtTime(t),
                        f = this.py.getValueAtTime(t);
                      if (this.data.p.z) {
                        var u = this.pz.getValueAtTime(t);
                        e.translate(
                          c * this.px.mult,
                          f * this.py.mult,
                          -u * this.pz.mult,
                        );
                      } else e.translate(c * this.px.mult, f * this.py.mult, 0);
                    } else {
                      var m = this.p.getValueAtTime(t);
                      e.translate(
                        m[0] * this.p.mult,
                        m[1] * this.p.mult,
                        -m[2] * this.p.mult,
                      );
                    }
                    return e;
                  }.bind(n))
                : (n.getValueAtTime = function () {
                    return this.v.clone(new Matrix());
                  }.bind(n)),
              (n.setGroupProperty = expressionHelpers.setGroupProperty),
              n
            );
          };
          var n = PropertyFactory.getProp;
          PropertyFactory.getProp = function (i, a, s, o, h) {
            var l = n(i, a, s, o, h);
            (l.kf
              ? (l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l))
              : (l.getValueAtTime =
                  expressionHelpers.getStaticValueAtTime.bind(l)),
              (l.setGroupProperty = expressionHelpers.setGroupProperty),
              (l.loopOut = t),
              (l.loopIn = e),
              (l.smooth = r),
              (l.getVelocityAtTime =
                expressionHelpers.getVelocityAtTime.bind(l)),
              (l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l)),
              (l.numKeys = 1 === a.a ? a.k.length : 0),
              (l.propertyIndex = a.ix));
            var p = 0;
            return (
              0 !== s &&
                (p = createTypedArray(
                  "float32",
                  1 === a.a ? a.k[0].s.length : a.k.length,
                )),
              (l._cachingAtTime = {
                lastFrame: initialDefaultFrame,
                lastIndex: 0,
                value: p,
              }),
              expressionHelpers.searchExpressions(i, a, l),
              l.k && h.addDynamicProperty(l),
              l
            );
          };
          var a = ShapePropertyFactory.getConstructorFunction(),
            s = ShapePropertyFactory.getKeyframedConstructorFunction();
          function o() {}
          ((o.prototype = {
            vertices: function (t, e) {
              this.k && this.getValue();
              var r,
                i = this.v;
              void 0 !== e && (i = this.getValueAtTime(e, 0));
              var n = i._length,
                a = i[t],
                s = i.v,
                o = createSizedArray(n);
              for (r = 0; r < n; r += 1)
                o[r] =
                  "i" === t || "o" === t
                    ? [a[r][0] - s[r][0], a[r][1] - s[r][1]]
                    : [a[r][0], a[r][1]];
              return o;
            },
            points: function (t) {
              return this.vertices("v", t);
            },
            inTangents: function (t) {
              return this.vertices("i", t);
            },
            outTangents: function (t) {
              return this.vertices("o", t);
            },
            isClosed: function () {
              return this.v.c;
            },
            pointOnPath: function (t, e) {
              var r = this.v;
              (void 0 !== e && (r = this.getValueAtTime(e, 0)),
                this._segmentsLength ||
                  (this._segmentsLength = bez.getSegmentsLength(r)));
              for (
                var i,
                  n = this._segmentsLength,
                  a = n.lengths,
                  s = n.totalLength * t,
                  o = 0,
                  h = a.length,
                  l = 0;
                o < h;

              ) {
                if (l + a[o].addedLength > s) {
                  var p = o,
                    c = r.c && o === h - 1 ? 0 : o + 1,
                    f = (s - l) / a[o].addedLength;
                  i = bez.getPointInSegment(
                    r.v[p],
                    r.v[c],
                    r.o[p],
                    r.i[c],
                    f,
                    a[o],
                  );
                  break;
                }
                ((l += a[o].addedLength), (o += 1));
              }
              return (
                i ||
                  (i = r.c
                    ? [r.v[0][0], r.v[0][1]]
                    : [r.v[r._length - 1][0], r.v[r._length - 1][1]]),
                i
              );
            },
            vectorOnPath: function (t, e, r) {
              1 == t ? (t = this.v.c) : 0 == t && (t = 0.999);
              var i = this.pointOnPath(t, e),
                n = this.pointOnPath(t + 0.001, e),
                a = n[0] - i[0],
                s = n[1] - i[1],
                o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
              return 0 === o
                ? [0, 0]
                : "tangent" === r
                  ? [a / o, s / o]
                  : [-s / o, a / o];
            },
            tangentOnPath: function (t, e) {
              return this.vectorOnPath(t, e, "tangent");
            },
            normalOnPath: function (t, e) {
              return this.vectorOnPath(t, e, "normal");
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime,
          }),
            extendPrototype([o], a),
            extendPrototype([o], s),
            (s.prototype.getValueAtTime = function (t) {
              return (
                this._cachingAtTime ||
                  (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame,
                  }),
                (t *= this.elem.globalData.frameRate),
                (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                  ((this._cachingAtTime.lastIndex =
                    this._cachingAtTime.lastTime < t
                      ? this._caching.lastIndex
                      : 0),
                  (this._cachingAtTime.lastTime = t),
                  this.interpolateShape(
                    t,
                    this._cachingAtTime.shapeValue,
                    this._cachingAtTime,
                  )),
                this._cachingAtTime.shapeValue
              );
            }),
            (s.prototype.initiateExpression =
              ExpressionManager.initiateExpression));
          var h = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function (t, e, r, i, n) {
            var a = h(t, e, r, i, n);
            return (
              (a.propertyIndex = e.ix),
              (a.lock = !1),
              3 === r
                ? expressionHelpers.searchExpressions(t, e.pt, a)
                : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a),
              a.k && t.addDynamicProperty(a),
              a
            );
          };
        })(),
          (function () {
            ((TextProperty.prototype.getExpressionValue = function (t, e) {
              var r = this.calculateExpression(e);
              if (t.t !== r) {
                var i = {};
                return (
                  this.copyData(i, t),
                  (i.t = r.toString()),
                  (i.__complete = !1),
                  i
                );
              }
              return t;
            }),
              (TextProperty.prototype.searchProperty = function () {
                var t = this.searchKeyframes(),
                  e = this.searchExpressions();
                return ((this.kf = t || e), this.kf);
              }),
              (TextProperty.prototype.searchExpressions = function () {
                return this.data.d.x
                  ? ((this.calculateExpression =
                      ExpressionManager.initiateExpression.bind(this)(
                        this.elem,
                        this.data.d,
                        this,
                      )),
                    this.addEffect(this.getExpressionValue.bind(this)),
                    !0)
                  : null;
              }));
          })());
        var ShapePathInterface = function (t, e, r) {
            var i = e.sh;
            function n(t) {
              return "Shape" === t ||
                "shape" === t ||
                "Path" === t ||
                "path" === t ||
                "ADBE Vector Shape" === t ||
                2 === t
                ? n.path
                : null;
            }
            var a = propertyGroupFactory(n, r);
            return (
              i.setGroupProperty(PropertyInterface("Path", a)),
              Object.defineProperties(n, {
                path: {
                  get: function () {
                    return (i.k && i.getValue(), i);
                  },
                },
                shape: {
                  get: function () {
                    return (i.k && i.getValue(), i);
                  },
                },
                _name: { value: t.nm },
                ix: { value: t.ix },
                propertyIndex: { value: t.ix },
                mn: { value: t.mn },
                propertyGroup: { value: r },
              }),
              n
            );
          },
          propertyGroupFactory = function (t, e) {
            return function (r) {
              return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1);
            };
          },
          PropertyInterface = function (t, e) {
            var r = { _name: t };
            return function (t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1);
            };
          },
          ShapeExpressionInterface = (function () {
            function t(t, o, u) {
              var m,
                d = [],
                y = t ? t.length : 0;
              for (m = 0; m < y; m += 1)
                "gr" === t[m].ty
                  ? d.push(e(t[m], o[m], u))
                  : "fl" === t[m].ty
                    ? d.push(r(t[m], o[m], u))
                    : "st" === t[m].ty
                      ? d.push(a(t[m], o[m], u))
                      : "tm" === t[m].ty
                        ? d.push(s(t[m], o[m], u))
                        : "tr" === t[m].ty ||
                          ("el" === t[m].ty
                            ? d.push(h(t[m], o[m], u))
                            : "sr" === t[m].ty
                              ? d.push(l(t[m], o[m], u))
                              : "sh" === t[m].ty
                                ? d.push(ShapePathInterface(t[m], o[m], u))
                                : "rc" === t[m].ty
                                  ? d.push(p(t[m], o[m], u))
                                  : "rd" === t[m].ty
                                    ? d.push(c(t[m], o[m], u))
                                    : "rp" === t[m].ty
                                      ? d.push(f(t[m], o[m], u))
                                      : "gf" === t[m].ty
                                        ? d.push(i(t[m], o[m], u))
                                        : d.push(n(t[m], o[m])));
              return d;
            }
            function e(e, r, i) {
              var n = function (t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return n.content;
                  default:
                    return n.transform;
                }
              };
              n.propertyGroup = propertyGroupFactory(n, i);
              var a = (function (e, r, i) {
                  var n,
                    a = function (t) {
                      for (var e = 0, r = n.length; e < r; ) {
                        if (
                          n[e]._name === t ||
                          n[e].mn === t ||
                          n[e].propertyIndex === t ||
                          n[e].ix === t ||
                          n[e].ind === t
                        )
                          return n[e];
                        e += 1;
                      }
                      return "number" == typeof t ? n[t - 1] : null;
                    };
                  ((a.propertyGroup = propertyGroupFactory(a, i)),
                    (n = t(e.it, r.it, a.propertyGroup)),
                    (a.numProperties = n.length));
                  var s = o(
                    e.it[e.it.length - 1],
                    r.it[r.it.length - 1],
                    a.propertyGroup,
                  );
                  return (
                    (a.transform = s),
                    (a.propertyIndex = e.cix),
                    (a._name = e.nm),
                    a
                  );
                })(e, r, n.propertyGroup),
                s = o(
                  e.it[e.it.length - 1],
                  r.it[r.it.length - 1],
                  n.propertyGroup,
                );
              return (
                (n.content = a),
                (n.transform = s),
                Object.defineProperty(n, "_name", {
                  get: function () {
                    return e.nm;
                  },
                }),
                (n.numProperties = e.np),
                (n.propertyIndex = e.ix),
                (n.nm = e.nm),
                (n.mn = e.mn),
                n
              );
            }
            function r(t, e, r) {
              function i(t) {
                return "Color" === t || "color" === t
                  ? i.color
                  : "Opacity" === t || "opacity" === t
                    ? i.opacity
                    : null;
              }
              return (
                Object.defineProperties(i, {
                  color: { get: ExpressionPropertyInterface(e.c) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.c.setGroupProperty(PropertyInterface("Color", r)),
                e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                i
              );
            }
            function i(t, e, r) {
              function i(t) {
                return "Start Point" === t || "start point" === t
                  ? i.startPoint
                  : "End Point" === t || "end point" === t
                    ? i.endPoint
                    : "Opacity" === t || "opacity" === t
                      ? i.opacity
                      : null;
              }
              return (
                Object.defineProperties(i, {
                  startPoint: { get: ExpressionPropertyInterface(e.s) },
                  endPoint: { get: ExpressionPropertyInterface(e.e) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  type: {
                    get: function () {
                      return "a";
                    },
                  },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.s.setGroupProperty(PropertyInterface("Start Point", r)),
                e.e.setGroupProperty(PropertyInterface("End Point", r)),
                e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                i
              );
            }
            function n() {
              return function () {
                return null;
              };
            }
            function a(t, e, r) {
              var i,
                n = propertyGroupFactory(l, r),
                a = propertyGroupFactory(h, n);
              function s(r) {
                Object.defineProperty(h, t.d[r].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[r].p),
                });
              }
              var o = t.d ? t.d.length : 0,
                h = {};
              for (i = 0; i < o; i += 1)
                (s(i), e.d.dataProps[i].p.setGroupProperty(a));
              function l(t) {
                return "Color" === t || "color" === t
                  ? l.color
                  : "Opacity" === t || "opacity" === t
                    ? l.opacity
                    : "Stroke Width" === t || "stroke width" === t
                      ? l.strokeWidth
                      : null;
              }
              return (
                Object.defineProperties(l, {
                  color: { get: ExpressionPropertyInterface(e.c) },
                  opacity: { get: ExpressionPropertyInterface(e.o) },
                  strokeWidth: { get: ExpressionPropertyInterface(e.w) },
                  dash: {
                    get: function () {
                      return h;
                    },
                  },
                  _name: { value: t.nm },
                  mn: { value: t.mn },
                }),
                e.c.setGroupProperty(PropertyInterface("Color", n)),
                e.o.setGroupProperty(PropertyInterface("Opacity", n)),
                e.w.setGroupProperty(PropertyInterface("Stroke Width", n)),
                l
              );
            }
            function s(t, e, r) {
              function i(e) {
                return e === t.e.ix || "End" === e || "end" === e
                  ? i.end
                  : e === t.s.ix
                    ? i.start
                    : e === t.o.ix
                      ? i.offset
                      : null;
              }
              var n = propertyGroupFactory(i, r);
              return (
                (i.propertyIndex = t.ix),
                e.s.setGroupProperty(PropertyInterface("Start", n)),
                e.e.setGroupProperty(PropertyInterface("End", n)),
                e.o.setGroupProperty(PropertyInterface("Offset", n)),
                (i.propertyIndex = t.ix),
                (i.propertyGroup = r),
                Object.defineProperties(i, {
                  start: { get: ExpressionPropertyInterface(e.s) },
                  end: { get: ExpressionPropertyInterface(e.e) },
                  offset: { get: ExpressionPropertyInterface(e.o) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function o(t, e, r) {
              function i(e) {
                return t.a.ix === e || "Anchor Point" === e
                  ? i.anchorPoint
                  : t.o.ix === e || "Opacity" === e
                    ? i.opacity
                    : t.p.ix === e || "Position" === e
                      ? i.position
                      : t.r.ix === e ||
                          "Rotation" === e ||
                          "ADBE Vector Rotation" === e
                        ? i.rotation
                        : t.s.ix === e || "Scale" === e
                          ? i.scale
                          : (t.sk && t.sk.ix === e) || "Skew" === e
                            ? i.skew
                            : (t.sa && t.sa.ix === e) || "Skew Axis" === e
                              ? i.skewAxis
                              : null;
              }
              var n = propertyGroupFactory(i, r);
              return (
                e.transform.mProps.o.setGroupProperty(
                  PropertyInterface("Opacity", n),
                ),
                e.transform.mProps.p.setGroupProperty(
                  PropertyInterface("Position", n),
                ),
                e.transform.mProps.a.setGroupProperty(
                  PropertyInterface("Anchor Point", n),
                ),
                e.transform.mProps.s.setGroupProperty(
                  PropertyInterface("Scale", n),
                ),
                e.transform.mProps.r.setGroupProperty(
                  PropertyInterface("Rotation", n),
                ),
                e.transform.mProps.sk &&
                  (e.transform.mProps.sk.setGroupProperty(
                    PropertyInterface("Skew", n),
                  ),
                  e.transform.mProps.sa.setGroupProperty(
                    PropertyInterface("Skew Angle", n),
                  )),
                e.transform.op.setGroupProperty(
                  PropertyInterface("Opacity", n),
                ),
                Object.defineProperties(i, {
                  opacity: {
                    get: ExpressionPropertyInterface(e.transform.mProps.o),
                  },
                  position: {
                    get: ExpressionPropertyInterface(e.transform.mProps.p),
                  },
                  anchorPoint: {
                    get: ExpressionPropertyInterface(e.transform.mProps.a),
                  },
                  scale: {
                    get: ExpressionPropertyInterface(e.transform.mProps.s),
                  },
                  rotation: {
                    get: ExpressionPropertyInterface(e.transform.mProps.r),
                  },
                  skew: {
                    get: ExpressionPropertyInterface(e.transform.mProps.sk),
                  },
                  skewAxis: {
                    get: ExpressionPropertyInterface(e.transform.mProps.sa),
                  },
                  _name: { value: t.nm },
                }),
                (i.ty = "tr"),
                (i.mn = t.mn),
                (i.propertyGroup = r),
                i
              );
            }
            function h(t, e, r) {
              function i(e) {
                return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null;
              }
              var n = propertyGroupFactory(i, r);
              i.propertyIndex = t.ix;
              var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return (
                a.s.setGroupProperty(PropertyInterface("Size", n)),
                a.p.setGroupProperty(PropertyInterface("Position", n)),
                Object.defineProperties(i, {
                  size: { get: ExpressionPropertyInterface(a.s) },
                  position: { get: ExpressionPropertyInterface(a.p) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function l(t, e, r) {
              function i(e) {
                return t.p.ix === e
                  ? i.position
                  : t.r.ix === e
                    ? i.rotation
                    : t.pt.ix === e
                      ? i.points
                      : t.or.ix === e || "ADBE Vector Star Outer Radius" === e
                        ? i.outerRadius
                        : t.os.ix === e
                          ? i.outerRoundness
                          : !t.ir ||
                              (t.ir.ix !== e &&
                                "ADBE Vector Star Inner Radius" !== e)
                            ? t.is && t.is.ix === e
                              ? i.innerRoundness
                              : null
                            : i.innerRadius;
              }
              var n = propertyGroupFactory(i, r),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return (
                (i.propertyIndex = t.ix),
                a.or.setGroupProperty(PropertyInterface("Outer Radius", n)),
                a.os.setGroupProperty(PropertyInterface("Outer Roundness", n)),
                a.pt.setGroupProperty(PropertyInterface("Points", n)),
                a.p.setGroupProperty(PropertyInterface("Position", n)),
                a.r.setGroupProperty(PropertyInterface("Rotation", n)),
                t.ir &&
                  (a.ir.setGroupProperty(PropertyInterface("Inner Radius", n)),
                  a.is.setGroupProperty(
                    PropertyInterface("Inner Roundness", n),
                  )),
                Object.defineProperties(i, {
                  position: { get: ExpressionPropertyInterface(a.p) },
                  rotation: { get: ExpressionPropertyInterface(a.r) },
                  points: { get: ExpressionPropertyInterface(a.pt) },
                  outerRadius: { get: ExpressionPropertyInterface(a.or) },
                  outerRoundness: { get: ExpressionPropertyInterface(a.os) },
                  innerRadius: { get: ExpressionPropertyInterface(a.ir) },
                  innerRoundness: { get: ExpressionPropertyInterface(a.is) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function p(t, e, r) {
              function i(e) {
                return t.p.ix === e
                  ? i.position
                  : t.r.ix === e
                    ? i.roundness
                    : t.s.ix === e ||
                        "Size" === e ||
                        "ADBE Vector Rect Size" === e
                      ? i.size
                      : null;
              }
              var n = propertyGroupFactory(i, r),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return (
                (i.propertyIndex = t.ix),
                a.p.setGroupProperty(PropertyInterface("Position", n)),
                a.s.setGroupProperty(PropertyInterface("Size", n)),
                a.r.setGroupProperty(PropertyInterface("Rotation", n)),
                Object.defineProperties(i, {
                  position: { get: ExpressionPropertyInterface(a.p) },
                  roundness: { get: ExpressionPropertyInterface(a.r) },
                  size: { get: ExpressionPropertyInterface(a.s) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function c(t, e, r) {
              function i(e) {
                return t.r.ix === e || "Round Corners 1" === e
                  ? i.radius
                  : null;
              }
              var n = propertyGroupFactory(i, r),
                a = e;
              return (
                (i.propertyIndex = t.ix),
                a.rd.setGroupProperty(PropertyInterface("Radius", n)),
                Object.defineProperties(i, {
                  radius: { get: ExpressionPropertyInterface(a.rd) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            function f(t, e, r) {
              function i(e) {
                return t.c.ix === e || "Copies" === e
                  ? i.copies
                  : t.o.ix === e || "Offset" === e
                    ? i.offset
                    : null;
              }
              var n = propertyGroupFactory(i, r),
                a = e;
              return (
                (i.propertyIndex = t.ix),
                a.c.setGroupProperty(PropertyInterface("Copies", n)),
                a.o.setGroupProperty(PropertyInterface("Offset", n)),
                Object.defineProperties(i, {
                  copies: { get: ExpressionPropertyInterface(a.c) },
                  offset: { get: ExpressionPropertyInterface(a.o) },
                  _name: { value: t.nm },
                }),
                (i.mn = t.mn),
                i
              );
            }
            return function (e, r, i) {
              var n;
              function a(t) {
                if ("number" == typeof t)
                  return 0 === (t = void 0 === t ? 1 : t) ? i : n[t - 1];
                for (var e = 0, r = n.length; e < r; ) {
                  if (n[e]._name === t) return n[e];
                  e += 1;
                }
                return null;
              }
              return (
                (a.propertyGroup = propertyGroupFactory(a, function () {
                  return i;
                })),
                (n = t(e, r, a.propertyGroup)),
                (a.numProperties = n.length),
                (a._name = "Contents"),
                a
              );
            };
          })(),
          TextExpressionInterface = function (t) {
            var e;
            function r(t) {
              switch (t) {
                case "ADBE Text Document":
                  return r.sourceText;
                default:
                  return null;
              }
            }
            return (
              Object.defineProperty(r, "sourceText", {
                get: function () {
                  t.textProperty.getValue();
                  var r = t.textProperty.currentData.t;
                  return (
                    void 0 !== r &&
                      ((t.textProperty.currentData.t = void 0),
                      ((e = new String(r)).value = r || new String(r))),
                    e
                  );
                },
              }),
              r
            );
          },
          LayerExpressionInterface = (function () {
            function t(t) {
              var e = new Matrix();
              void 0 !== t
                ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e)
                : this._elem.finalTransform.mProp.applyToMatrix(e);
              return e;
            }
            function e(t, e) {
              var r = this.getMatrix(e);
              return (
                (r.props[12] = 0),
                (r.props[13] = 0),
                (r.props[14] = 0),
                this.applyPoint(r, t)
              );
            }
            function r(t, e) {
              var r = this.getMatrix(e);
              return this.applyPoint(r, t);
            }
            function i(t, e) {
              var r = this.getMatrix(e);
              return (
                (r.props[12] = 0),
                (r.props[13] = 0),
                (r.props[14] = 0),
                this.invertPoint(r, t)
              );
            }
            function n(t, e) {
              var r = this.getMatrix(e);
              return this.invertPoint(r, t);
            }
            function a(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r,
                  i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0);
            }
            function s(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r,
                  i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
              }
              return t.inversePoint(e);
            }
            function o(t) {
              var e = new Matrix();
              if (
                (e.reset(),
                this._elem.finalTransform.mProp.applyToMatrix(e),
                this._elem.hierarchy && this._elem.hierarchy.length)
              ) {
                var r,
                  i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1)
                  this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t);
              }
              return e.inversePoint(t);
            }
            function h() {
              return [1, 1, 1, 1];
            }
            return function (l) {
              var p;
              function c(t) {
                switch (t) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return c.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return p;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return c.effect;
                  case "ADBE Text Properties":
                    return c.textInterface;
                  default:
                    return null;
                }
              }
              ((c.getMatrix = t),
                (c.invertPoint = s),
                (c.applyPoint = a),
                (c.toWorld = r),
                (c.toWorldVec = e),
                (c.fromWorld = n),
                (c.fromWorldVec = i),
                (c.toComp = r),
                (c.fromComp = o),
                (c.sampleImage = h),
                (c.sourceRectAtTime = l.sourceRectAtTime.bind(l)),
                (c._elem = l));
              var f = getDescriptor(
                (p = TransformExpressionInterface(l.finalTransform.mProp)),
                "anchorPoint",
              );
              return (
                Object.defineProperties(c, {
                  hasParent: {
                    get: function () {
                      return l.hierarchy.length;
                    },
                  },
                  parent: {
                    get: function () {
                      return l.hierarchy[0].layerInterface;
                    },
                  },
                  rotation: getDescriptor(p, "rotation"),
                  scale: getDescriptor(p, "scale"),
                  position: getDescriptor(p, "position"),
                  opacity: getDescriptor(p, "opacity"),
                  anchorPoint: f,
                  anchor_point: f,
                  transform: {
                    get: function () {
                      return p;
                    },
                  },
                  active: {
                    get: function () {
                      return l.isInRange;
                    },
                  },
                }),
                (c.startTime = l.data.st),
                (c.index = l.data.ind),
                (c.source = l.data.refId),
                (c.height = 0 === l.data.ty ? l.data.h : 100),
                (c.width = 0 === l.data.ty ? l.data.w : 100),
                (c.inPoint = l.data.ip / l.comp.globalData.frameRate),
                (c.outPoint = l.data.op / l.comp.globalData.frameRate),
                (c._name = l.data.nm),
                (c.registerMaskInterface = function (t) {
                  c.mask = new MaskManagerInterface(t, l);
                }),
                (c.registerEffectsInterface = function (t) {
                  c.effect = t;
                }),
                c
              );
            };
          })(),
          FootageInterface =
            ((dataInterfaceFactory = function (t) {
              function e(t) {
                return "Outline" === t ? e.outlineInterface() : null;
              }
              return (
                (e._name = "Outline"),
                (e.outlineInterface = (function (t) {
                  var e = "",
                    r = t.getFootageData();
                  function i(t) {
                    if (r[t])
                      return ((e = t), "object" == typeof (r = r[t]) ? i : r);
                    var n = t.indexOf(e);
                    if (-1 !== n) {
                      var a = parseInt(t.substr(n + e.length), 10);
                      return "object" == typeof (r = r[a]) ? i : r;
                    }
                    return "";
                  }
                  return function () {
                    return ((e = ""), (r = t.getFootageData()), i);
                  };
                })(t)),
                e
              );
            }),
            function (t) {
              function e(t) {
                return "Data" === t ? e.dataInterface : null;
              }
              return (
                (e._name = "Data"),
                (e.dataInterface = dataInterfaceFactory(t)),
                e
              );
            }),
          dataInterfaceFactory,
          CompExpressionInterface = function (t) {
            function e(e) {
              for (var r = 0, i = t.layers.length; r < i; ) {
                if (t.layers[r].nm === e || t.layers[r].ind === e)
                  return t.elements[r].layerInterface;
                r += 1;
              }
              return null;
            }
            return (
              Object.defineProperty(e, "_name", { value: t.data.nm }),
              (e.layer = e),
              (e.pixelAspect = 1),
              (e.height = t.data.h || t.globalData.compSize.h),
              (e.width = t.data.w || t.globalData.compSize.w),
              (e.pixelAspect = 1),
              (e.frameDuration = 1 / t.globalData.frameRate),
              (e.displayStartTime = 0),
              (e.numLayers = t.layers.length),
              e
            );
          },
          TransformExpressionInterface = function (t) {
            function e(t) {
              switch (t) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return e.rotation;
                case "ADBE Rotate X":
                  return e.xRotation;
                case "ADBE Rotate Y":
                  return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return e.position;
                case "ADBE Position_0":
                  return e.xPosition;
                case "ADBE Position_1":
                  return e.yPosition;
                case "ADBE Position_2":
                  return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return e.opacity;
                default:
                  return null;
              }
            }
            var r, i, n, a;
            return (
              Object.defineProperty(e, "rotation", {
                get: ExpressionPropertyInterface(t.r || t.rz),
              }),
              Object.defineProperty(e, "zRotation", {
                get: ExpressionPropertyInterface(t.rz || t.r),
              }),
              Object.defineProperty(e, "xRotation", {
                get: ExpressionPropertyInterface(t.rx),
              }),
              Object.defineProperty(e, "yRotation", {
                get: ExpressionPropertyInterface(t.ry),
              }),
              Object.defineProperty(e, "scale", {
                get: ExpressionPropertyInterface(t.s),
              }),
              t.p
                ? (a = ExpressionPropertyInterface(t.p))
                : ((r = ExpressionPropertyInterface(t.px)),
                  (i = ExpressionPropertyInterface(t.py)),
                  t.pz && (n = ExpressionPropertyInterface(t.pz))),
              Object.defineProperty(e, "position", {
                get: function () {
                  return t.p ? a() : [r(), i(), n ? n() : 0];
                },
              }),
              Object.defineProperty(e, "xPosition", {
                get: ExpressionPropertyInterface(t.px),
              }),
              Object.defineProperty(e, "yPosition", {
                get: ExpressionPropertyInterface(t.py),
              }),
              Object.defineProperty(e, "zPosition", {
                get: ExpressionPropertyInterface(t.pz),
              }),
              Object.defineProperty(e, "anchorPoint", {
                get: ExpressionPropertyInterface(t.a),
              }),
              Object.defineProperty(e, "opacity", {
                get: ExpressionPropertyInterface(t.o),
              }),
              Object.defineProperty(e, "skew", {
                get: ExpressionPropertyInterface(t.sk),
              }),
              Object.defineProperty(e, "skewAxis", {
                get: ExpressionPropertyInterface(t.sa),
              }),
              Object.defineProperty(e, "orientation", {
                get: ExpressionPropertyInterface(t.or),
              }),
              e
            );
          },
          ProjectInterface = (function () {
            function t(t) {
              this.compositions.push(t);
            }
            return function () {
              function e(t) {
                for (var e = 0, r = this.compositions.length; e < r; ) {
                  if (
                    this.compositions[e].data &&
                    this.compositions[e].data.nm === t
                  )
                    return (
                      this.compositions[e].prepareFrame &&
                        this.compositions[e].data.xt &&
                        this.compositions[e].prepareFrame(this.currentFrame),
                      this.compositions[e].compInterface
                    );
                  e += 1;
                }
                return null;
              }
              return (
                (e.compositions = []),
                (e.currentFrame = 0),
                (e.registerComposition = t),
                e
              );
            };
          })(),
          EffectsExpressionInterface = (function () {
            function t(r, i, n, a) {
              function s(t) {
                for (var e = r.ef, i = 0, n = e.length; i < n; ) {
                  if (t === e[i].nm || t === e[i].mn || t === e[i].ix)
                    return 5 === e[i].ty ? l[i] : l[i]();
                  i += 1;
                }
                throw new Error();
              }
              var o,
                h = propertyGroupFactory(s, n),
                l = [],
                p = r.ef.length;
              for (o = 0; o < p; o += 1)
                5 === r.ef[o].ty
                  ? l.push(
                      t(
                        r.ef[o],
                        i.effectElements[o],
                        i.effectElements[o].propertyGroup,
                        a,
                      ),
                    )
                  : l.push(e(i.effectElements[o], r.ef[o].ty, a, h));
              return (
                "ADBE Color Control" === r.mn &&
                  Object.defineProperty(s, "color", {
                    get: function () {
                      return l[0]();
                    },
                  }),
                Object.defineProperties(s, {
                  numProperties: {
                    get: function () {
                      return r.np;
                    },
                  },
                  _name: { value: r.nm },
                  propertyGroup: { value: h },
                }),
                (s.enabled = 0 !== r.en),
                (s.active = s.enabled),
                s
              );
            }
            function e(t, e, r, i) {
              var n = ExpressionPropertyInterface(t.p);
              return (
                t.p.setGroupProperty &&
                  t.p.setGroupProperty(PropertyInterface("", i)),
                function () {
                  return 10 === e ? r.comp.compInterface(t.p.v) : n();
                }
              );
            }
            return {
              createEffectsInterface: function (e, r) {
                if (e.effectsManager) {
                  var i,
                    n = [],
                    a = e.data.ef,
                    s = e.effectsManager.effectElements.length;
                  for (i = 0; i < s; i += 1)
                    n.push(t(a[i], e.effectsManager.effectElements[i], r, e));
                  var o = e.data.ef || [],
                    h = function (t) {
                      for (i = 0, s = o.length; i < s; ) {
                        if (t === o[i].nm || t === o[i].mn || t === o[i].ix)
                          return n[i];
                        i += 1;
                      }
                      return null;
                    };
                  return (
                    Object.defineProperty(h, "numProperties", {
                      get: function () {
                        return o.length;
                      },
                    }),
                    h
                  );
                }
                return null;
              },
            };
          })(),
          MaskManagerInterface = (function () {
            function t(t, e) {
              ((this._mask = t), (this._data = e));
            }
            (Object.defineProperty(t.prototype, "maskPath", {
              get: function () {
                return (
                  this._mask.prop.k && this._mask.prop.getValue(),
                  this._mask.prop
                );
              },
            }),
              Object.defineProperty(t.prototype, "maskOpacity", {
                get: function () {
                  return (
                    this._mask.op.k && this._mask.op.getValue(),
                    100 * this._mask.op.v
                  );
                },
              }));
            return function (e) {
              var r,
                i = createSizedArray(e.viewData.length),
                n = e.viewData.length;
              for (r = 0; r < n; r += 1)
                i[r] = new t(e.viewData[r], e.masksProperties[r]);
              return function (t) {
                for (r = 0; r < n; ) {
                  if (e.masksProperties[r].nm === t) return i[r];
                  r += 1;
                }
                return null;
              };
            };
          })(),
          ExpressionPropertyInterface = (function () {
            var t = { pv: 0, v: 0, mult: 1 },
              e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
            function r(t, e, r) {
              (Object.defineProperty(t, "velocity", {
                get: function () {
                  return e.getVelocityAtTime(e.comp.currentFrame);
                },
              }),
                (t.numKeys = e.keyframes ? e.keyframes.length : 0),
                (t.key = function (i) {
                  if (!t.numKeys) return 0;
                  var n = "";
                  n =
                    "s" in e.keyframes[i - 1]
                      ? e.keyframes[i - 1].s
                      : "e" in e.keyframes[i - 2]
                        ? e.keyframes[i - 2].e
                        : e.keyframes[i - 2].s;
                  var a =
                    "unidimensional" === r
                      ? new Number(n)
                      : Object.assign({}, n);
                  return (
                    (a.time =
                      e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate),
                    (a.value = "unidimensional" === r ? n[0] : n),
                    a
                  );
                }),
                (t.valueAtTime = e.getValueAtTime),
                (t.speedAtTime = e.getSpeedAtTime),
                (t.velocityAtTime = e.getVelocityAtTime),
                (t.propertyGroup = e.propertyGroup));
            }
            function i() {
              return t;
            }
            return function (n) {
              return n
                ? "unidimensional" === n.propType
                  ? (function (e) {
                      (e && "pv" in e) || (e = t);
                      var i = 1 / e.mult,
                        n = e.pv * i,
                        a = new Number(n);
                      return (
                        (a.value = n),
                        r(a, e, "unidimensional"),
                        function () {
                          return (
                            e.k && e.getValue(),
                            (n = e.v * i),
                            a.value !== n &&
                              (((a = new Number(n)).value = n),
                              r(a, e, "unidimensional")),
                            a
                          );
                        }
                      );
                    })(n)
                  : (function (t) {
                      (t && "pv" in t) || (t = e);
                      var i = 1 / t.mult,
                        n = (t.data && t.data.l) || t.pv.length,
                        a = createTypedArray("float32", n),
                        s = createTypedArray("float32", n);
                      return (
                        (a.value = s),
                        r(a, t, "multidimensional"),
                        function () {
                          t.k && t.getValue();
                          for (var e = 0; e < n; e += 1)
                            ((s[e] = t.v[e] * i), (a[e] = s[e]));
                          return a;
                        }
                      );
                    })(n)
                : i;
            };
          })();
        function SliderEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function AngleEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function ColorEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function PointEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
        }
        function LayerIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function MaskIndexEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function CheckboxEffect(t, e, r) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
        }
        function NoValueEffect() {
          this.p = {};
        }
        function EffectsManager(t, e) {
          var r,
            i = t.ef || [];
          this.effectElements = [];
          var n,
            a = i.length;
          for (r = 0; r < a; r += 1)
            ((n = new GroupEffect(i[r], e)), this.effectElements.push(n));
        }
        function GroupEffect(t, e) {
          this.init(t, e);
        }
        (!(function () {
          !(function () {
            function t(t, e) {
              return (
                (this.textIndex = t + 1),
                (this.textTotal = e),
                (this.v = this.getValue() * this.mult),
                this.v
              );
            }
          })();
          var t = TextSelectorProp.getTextSelectorProp;
          TextSelectorProp.getTextSelectorProp = function (e, r, i) {
            return 1 === r.t
              ? new TextExpressionSelectorPropFactory(e, r, i)
              : t(e, r, i);
          };
        })(),
          extendPrototype([DynamicPropertyContainer], GroupEffect),
          (GroupEffect.prototype.getValue =
            GroupEffect.prototype.iterateDynamicProperties),
          (GroupEffect.prototype.init = function (t, e) {
            var r;
            ((this.data = t),
              (this.effectElements = []),
              this.initDynamicPropertyContainer(e));
            var i,
              n = this.data.ef.length,
              a = this.data.ef;
            for (r = 0; r < n; r += 1) {
              switch (((i = null), a[r].ty)) {
                case 0:
                  i = new SliderEffect(a[r], e, this);
                  break;
                case 1:
                  i = new AngleEffect(a[r], e, this);
                  break;
                case 2:
                  i = new ColorEffect(a[r], e, this);
                  break;
                case 3:
                  i = new PointEffect(a[r], e, this);
                  break;
                case 4:
                case 7:
                  i = new CheckboxEffect(a[r], e, this);
                  break;
                case 10:
                  i = new LayerIndexEffect(a[r], e, this);
                  break;
                case 11:
                  i = new MaskIndexEffect(a[r], e, this);
                  break;
                case 5:
                  i = new EffectsManager(a[r], e, this);
                  break;
                default:
                  i = new NoValueEffect(a[r], e, this);
              }
              i && this.effectElements.push(i);
            }
          }));
        var lottie = {};
        function setLocationHref(t) {
          locationHref = t;
        }
        function searchAnimations() {
          !0 === standalone
            ? animationManager.searchAnimations(
                animationData,
                standalone,
                renderer,
              )
            : animationManager.searchAnimations();
        }
        function setSubframeRendering(t) {
          subframeEnabled = t;
        }
        function setIDPrefix(t) {
          idPrefix = t;
        }
        function loadAnimation(t) {
          return (
            !0 === standalone && (t.animationData = JSON.parse(animationData)),
            animationManager.loadAnimation(t)
          );
        }
        function setQuality(t) {
          if ("string" == typeof t)
            switch (t) {
              case "high":
                defaultCurveSegments = 200;
                break;
              default:
              case "medium":
                defaultCurveSegments = 50;
                break;
              case "low":
                defaultCurveSegments = 10;
            }
          else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
          roundValues(!(defaultCurveSegments >= 50));
        }
        function inBrowser() {
          return "undefined" != typeof navigator;
        }
        function installPlugin(t, e) {
          "expressions" === t && (expressionsPlugin = e);
        }
        function getFactory(t) {
          switch (t) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null;
          }
        }
        function checkReady() {
          "complete" === document.readyState &&
            (clearInterval(readyStateCheckInterval), searchAnimations());
        }
        function getQueryVariable(t) {
          for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
            var i = e[r].split("=");
            if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
          }
          return null;
        }
        ((lottie.play = animationManager.play),
          (lottie.pause = animationManager.pause),
          (lottie.setLocationHref = setLocationHref),
          (lottie.togglePause = animationManager.togglePause),
          (lottie.setSpeed = animationManager.setSpeed),
          (lottie.setDirection = animationManager.setDirection),
          (lottie.stop = animationManager.stop),
          (lottie.searchAnimations = searchAnimations),
          (lottie.registerAnimation = animationManager.registerAnimation),
          (lottie.loadAnimation = loadAnimation),
          (lottie.setSubframeRendering = setSubframeRendering),
          (lottie.resize = animationManager.resize),
          (lottie.goToAndStop = animationManager.goToAndStop),
          (lottie.destroy = animationManager.destroy),
          (lottie.setQuality = setQuality),
          (lottie.inBrowser = inBrowser),
          (lottie.installPlugin = installPlugin),
          (lottie.freeze = animationManager.freeze),
          (lottie.unfreeze = animationManager.unfreeze),
          (lottie.setVolume = animationManager.setVolume),
          (lottie.mute = animationManager.mute),
          (lottie.unmute = animationManager.unmute),
          (lottie.getRegisteredAnimations =
            animationManager.getRegisteredAnimations),
          (lottie.setIDPrefix = setIDPrefix),
          (lottie.__getFactory = getFactory),
          (lottie.version = "5.7.11"));
        var standalone = "__[STANDALONE]__",
          animationData = "__[ANIMATIONDATA]__",
          renderer = "",
          queryString;
        if (standalone) {
          var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || { src: "" };
          ((queryString = myScript.src.replace(/^[^\?]+\??/, "")),
            (renderer = getQueryVariable("renderer")));
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        return lottie;
      }),
      void 0 ===
        (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return factory(root);
        }.call(exports, __webpack_require__, exports, module)) ||
        (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  },
  function (t, e, r) {
    "use strict";
    var i = r(17);
    i.define(
      "brand",
      (t.exports = function (t) {
        var e,
          r = {},
          n = document,
          a = t("html"),
          s = t("body"),
          o = ".w-webflow-badge",
          h = window.location,
          l = /PhantomJS/i.test(navigator.userAgent),
          p =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        function c() {
          var r =
            n.fullScreen ||
            n.mozFullScreen ||
            n.webkitIsFullScreen ||
            n.msFullscreenElement ||
            Boolean(n.webkitFullscreenElement);
          t(e).attr("style", r ? "display: none !important;" : "");
        }
        function f() {
          var t = s.children(o),
            r = t.length && t.get(0) === e,
            n = i.env("editor");
          r ? n && t.remove() : (t.length && t.remove(), n || s.append(e));
        }
        return (
          (r.ready = function () {
            var r,
              i,
              s,
              o = a.attr("data-wf-status"),
              u = a.attr("data-wf-domain") || "";
            (/\.webflow\.io$/i.test(u) && h.hostname !== u && (o = !0),
              o &&
                !l &&
                ((e =
                  e ||
                  ((r = t('<a class="w-webflow-badge"></a>').attr(
                    "href",
                    "https://webflow.com?utm_campaign=brandjs",
                  )),
                  (i = t("<img>")
                    .attr(
                      "src",
                      "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg",
                    )
                    .attr("alt", "")
                    .css({ marginRight: "8px", width: "16px" })),
                  (s = t("<img>")
                    .attr(
                      "src",
                      "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg",
                    )
                    .attr("alt", "Made in Webflow")),
                  r.append(i, s),
                  r[0])),
                f(),
                setTimeout(f, 500),
                t(n).off(p, c).on(p, c)));
          }),
          r
        );
      }),
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(17);
    i.define(
      "links",
      (t.exports = function (t, e) {
        var r,
          n,
          a,
          s = {},
          o = t(window),
          h = i.env(),
          l = window.location,
          p = document.createElement("a"),
          c = "w--current",
          f = /index\.(html|php)$/,
          u = /\/$/;
        function m(e) {
          var i =
            (r && e.getAttribute("href-disabled")) || e.getAttribute("href");
          if (((p.href = i), !(i.indexOf(":") >= 0))) {
            var s = t(e);
            if (
              p.hash.length > 1 &&
              p.host + p.pathname === l.host + l.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(p.hash)) return;
              var o = t(p.hash);
              o.length && n.push({ link: s, sec: o, active: !1 });
            } else if ("#" !== i && "" !== i) {
              var h = p.href === l.href || i === a || (f.test(i) && u.test(a));
              y(s, c, h);
            }
          }
        }
        function d() {
          var t = o.scrollTop(),
            r = o.height();
          e.each(n, function (e) {
            var i = e.link,
              n = e.sec,
              a = n.offset().top,
              s = n.outerHeight(),
              o = 0.5 * r,
              h = n.is(":visible") && a + s - o >= t && a + o <= t + r;
            e.active !== h && ((e.active = h), y(i, c, h));
          });
        }
        function y(t, e, r) {
          var i = t.hasClass(e);
          (r && i) || ((r || i) && (r ? t.addClass(e) : t.removeClass(e)));
        }
        return (
          (s.ready =
            s.design =
            s.preview =
              function () {
                ((r = h && i.env("design")),
                  (a = i.env("slug") || l.pathname || ""),
                  i.scroll.off(d),
                  (n = []));
                for (var t = document.links, e = 0; e < t.length; ++e) m(t[e]);
                n.length && (i.scroll.on(d), d());
              }),
          s
        );
      }),
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(17);
    i.define(
      "scroll",
      (t.exports = function (t) {
        var e = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = (function () {
            try {
              return Boolean(window.frameElement);
            } catch (t) {
              return !0;
            }
          })()
            ? null
            : window.history,
          a = t(window),
          s = t(document),
          o = t(document.body),
          h =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (t) {
              window.setTimeout(t, 15);
            },
          l = i.env("editor") ? ".w-editor-body" : "body",
          p =
            "header, " +
            l +
            " > .header, " +
            l +
            " > .w-nav:not([data-no-scroll])",
          c = 'a[href="#"]',
          f = 'a[href*="#"]:not(.w-tab-link):not(' + c + ")",
          u = document.createElement("style");
        u.appendChild(
          document.createTextNode(
            '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          ),
        );
        var m = /^#[a-zA-Z0-9][\w:.-]*$/;
        var d =
          "function" == typeof window.matchMedia &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function y(t, e) {
          var r;
          switch (e) {
            case "add":
              (r = t.attr("tabindex"))
                ? t.attr("data-wf-tabindex-swap", r)
                : t.attr("tabindex", "-1");
              break;
            case "remove":
              (r = t.attr("data-wf-tabindex-swap"))
                ? (t.attr("tabindex", r), t.removeAttr("data-wf-tabindex-swap"))
                : t.removeAttr("tabindex");
          }
          t.toggleClass("wf-force-outline-none", "add" === e);
        }
        function g(e) {
          var s = e.currentTarget;
          if (
            !(
              i.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(s.className))
            )
          ) {
            var l,
              c =
                ((l = s),
                m.test(l.hash) && l.host + l.pathname === r.host + r.pathname
                  ? s.hash
                  : "");
            if ("" !== c) {
              var f = t(c);
              f.length &&
                (e && (e.preventDefault(), e.stopPropagation()),
                (function (t) {
                  if (
                    r.hash !== t &&
                    n &&
                    n.pushState &&
                    (!i.env.chrome || "file:" !== r.protocol)
                  ) {
                    var e = n.state && n.state.hash;
                    e !== t && n.pushState({ hash: t }, "", t);
                  }
                })(c),
                window.setTimeout(
                  function () {
                    !(function (e, r) {
                      var i = a.scrollTop(),
                        n = (function (e) {
                          var r = t(p),
                            i =
                              "fixed" === r.css("position")
                                ? r.outerHeight()
                                : 0,
                            n = e.offset().top - i;
                          if ("mid" === e.data("scroll")) {
                            var s = a.height() - i,
                              o = e.outerHeight();
                            o < s && (n -= Math.round((s - o) / 2));
                          }
                          return n;
                        })(e);
                      if (i === n) return;
                      var s = (function (t, e, r) {
                          if (
                            "none" ===
                              document.body.getAttribute(
                                "data-wf-scroll-motion",
                              ) ||
                            d.matches
                          )
                            return 0;
                          var i = 1;
                          return (
                            o.add(t).each(function (t, e) {
                              var r = parseFloat(
                                e.getAttribute("data-scroll-time"),
                              );
                              !isNaN(r) && r >= 0 && (i = r);
                            }),
                            (472.143 * Math.log(Math.abs(e - r) + 125) - 2e3) *
                              i
                          );
                        })(e, i, n),
                        l = Date.now();
                      h(function t() {
                        var e = Date.now() - l;
                        (window.scroll(
                          0,
                          (function (t, e, r, i) {
                            return r > i
                              ? e
                              : t +
                                  (e - t) *
                                    ((n = r / i) < 0.5
                                      ? 4 * n * n * n
                                      : (n - 1) * (2 * n - 2) * (2 * n - 2) +
                                        1);
                            var n;
                          })(i, n, e, s),
                        ),
                          e <= s ? h(t) : "function" == typeof r && r());
                      });
                    })(f, function () {
                      (y(f, "add"), f.focus(), y(f, "remove"));
                    });
                  },
                  e ? 0 : 300,
                ));
            }
          }
        }
        return {
          ready: function () {
            var t = e.WF_CLICK_EMPTY,
              r = e.WF_CLICK_SCROLL;
            (s.on(r, f, g),
              s.on(t, c, function (t) {
                t.preventDefault();
              }),
              document.head.insertBefore(u, document.head.firstChild));
          },
        };
      }),
    );
  },
  function (t, e, r) {
    "use strict";
    r(17).define(
      "touch",
      (t.exports = function (t) {
        var e = {},
          r = window.getSelection;
        function i(e) {
          var i,
            n,
            a = !1,
            s = !1,
            o = Math.min(Math.round(0.04 * window.innerWidth), 40);
          function h(t) {
            var e = t.touches;
            (e && e.length > 1) ||
              ((a = !0),
              e ? ((s = !0), (i = e[0].clientX)) : (i = t.clientX),
              (n = i));
          }
          function l(e) {
            if (a) {
              if (s && "mousemove" === e.type)
                return (e.preventDefault(), void e.stopPropagation());
              var i = e.touches,
                h = i ? i[0].clientX : e.clientX,
                l = h - n;
              ((n = h),
                Math.abs(l) > o &&
                  r &&
                  "" === String(r()) &&
                  (!(function (e, r, i) {
                    var n = t.Event(e, { originalEvent: r });
                    t(r.target).trigger(n, i);
                  })("swipe", e, { direction: l > 0 ? "right" : "left" }),
                  c()));
            }
          }
          function p(t) {
            if (a)
              return (
                (a = !1),
                s && "mouseup" === t.type
                  ? (t.preventDefault(), t.stopPropagation(), void (s = !1))
                  : void 0
              );
          }
          function c() {
            a = !1;
          }
          (e.addEventListener("touchstart", h, !1),
            e.addEventListener("touchmove", l, !1),
            e.addEventListener("touchend", p, !1),
            e.addEventListener("touchcancel", c, !1),
            e.addEventListener("mousedown", h, !1),
            e.addEventListener("mousemove", l, !1),
            e.addEventListener("mouseup", p, !1),
            e.addEventListener("mouseout", c, !1),
            (this.destroy = function () {
              (e.removeEventListener("touchstart", h, !1),
                e.removeEventListener("touchmove", l, !1),
                e.removeEventListener("touchend", p, !1),
                e.removeEventListener("touchcancel", c, !1),
                e.removeEventListener("mousedown", h, !1),
                e.removeEventListener("mousemove", l, !1),
                e.removeEventListener("mouseup", p, !1),
                e.removeEventListener("mouseout", c, !1),
                (e = null));
            }));
        }
        return (
          (t.event.special.tap = { bindType: "click", delegateType: "click" }),
          (e.init = function (e) {
            return (e = "string" == typeof e ? t(e).get(0) : e)
              ? new i(e)
              : null;
          }),
          (e.instance = e.init(document)),
          e
        );
      }),
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(17),
      n = r(256),
      a = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    i.define(
      "navbar",
      (t.exports = function (t, e) {
        var r,
          s,
          o,
          h,
          l = {},
          p = t.tram,
          c = t(window),
          f = t(document),
          u = e.debounce,
          m = i.env(),
          d = '<div class="w-nav-overlay" data-wf-ignore />',
          y = ".w-nav",
          g = "w--open",
          v = "w--nav-dropdown-open",
          b = "w--nav-dropdown-toggle-open",
          x = "w--nav-dropdown-list-open",
          E = "w--nav-link-open",
          P = n.triggers,
          S = t();
        function _() {
          i.resize.off(w);
        }
        function w() {
          s.each(V);
        }
        function A(r, i) {
          var n = t(i),
            s = t.data(i, y);
          (s ||
            (s = t.data(i, y, {
              open: !1,
              el: n,
              config: {},
              selectedIdx: -1,
            })),
            (s.menu = n.find(".w-nav-menu")),
            (s.links = s.menu.find(".w-nav-link")),
            (s.dropdowns = s.menu.find(".w-dropdown")),
            (s.dropdownToggle = s.menu.find(".w-dropdown-toggle")),
            (s.dropdownList = s.menu.find(".w-dropdown-list")),
            (s.button = n.find(".w-nav-button")),
            (s.container = n.find(".w-container")),
            (s.overlayContainerId = "w-nav-overlay-" + r),
            (s.outside = (function (e) {
              e.outside && f.off("click" + y, e.outside);
              return function (r) {
                var i = t(r.target);
                (h && i.closest(".w-editor-bem-EditorOverlay").length) ||
                  R(e, i);
              };
            })(s)));
          var l = n.find(".w-nav-brand");
          (l &&
            "/" === l.attr("href") &&
            null == l.attr("aria-label") &&
            l.attr("aria-label", "home"),
            s.button.attr("style", "-webkit-user-select: text;"),
            null == s.button.attr("aria-label") &&
              s.button.attr("aria-label", "menu"),
            s.button.attr("role", "button"),
            s.button.attr("tabindex", "0"),
            s.button.attr("aria-controls", s.overlayContainerId),
            s.button.attr("aria-haspopup", "menu"),
            s.button.attr("aria-expanded", "false"),
            s.el.off(y),
            s.button.off(y),
            s.menu.off(y),
            T(s),
            o
              ? (k(s),
                s.el.on(
                  "setting" + y,
                  (function (t) {
                    return function (r, i) {
                      i = i || {};
                      var n = c.width();
                      (T(t),
                        !0 === i.open && z(t, !0),
                        !1 === i.open && N(t, !0),
                        t.open &&
                          e.defer(function () {
                            n !== c.width() && M(t);
                          }));
                    };
                  })(s),
                ))
              : (!(function (e) {
                  if (e.overlay) return;
                  ((e.overlay = t(d).appendTo(e.el)),
                    e.overlay.attr("id", e.overlayContainerId),
                    (e.parent = e.menu.parent()),
                    N(e, !0));
                })(s),
                s.button.on("click" + y, F(s)),
                s.menu.on("click" + y, "a", I(s)),
                s.button.on(
                  "keydown" + y,
                  (function (t) {
                    return function (e) {
                      switch (e.keyCode) {
                        case a.SPACE:
                        case a.ENTER:
                          return (
                            F(t)(),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                        case a.ESCAPE:
                          return (
                            N(t),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                        case a.ARROW_RIGHT:
                        case a.ARROW_DOWN:
                        case a.HOME:
                        case a.END:
                          return t.open
                            ? (e.keyCode === a.END
                                ? (t.selectedIdx = t.links.length - 1)
                                : (t.selectedIdx = 0),
                              D(t),
                              e.preventDefault(),
                              e.stopPropagation())
                            : (e.preventDefault(), e.stopPropagation());
                      }
                    };
                  })(s),
                ),
                s.el.on(
                  "keydown" + y,
                  (function (t) {
                    return function (e) {
                      if (t.open)
                        switch (
                          ((t.selectedIdx = t.links.index(
                            document.activeElement,
                          )),
                          e.keyCode)
                        ) {
                          case a.HOME:
                          case a.END:
                            return (
                              e.keyCode === a.END
                                ? (t.selectedIdx = t.links.length - 1)
                                : (t.selectedIdx = 0),
                              D(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case a.ESCAPE:
                            return (
                              N(t),
                              t.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case a.ARROW_LEFT:
                          case a.ARROW_UP:
                            return (
                              (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)),
                              D(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case a.ARROW_RIGHT:
                          case a.ARROW_DOWN:
                            return (
                              (t.selectedIdx = Math.min(
                                t.links.length - 1,
                                t.selectedIdx + 1,
                              )),
                              D(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    };
                  })(s),
                )),
            V(r, i));
        }
        function C(e, r) {
          var i = t.data(r, y);
          i && (k(i), t.removeData(r, y));
        }
        function k(t) {
          t.overlay && (N(t, !0), t.overlay.remove(), (t.overlay = null));
        }
        function T(t) {
          var r = {},
            i = t.config || {},
            n = (r.animation = t.el.attr("data-animation") || "default");
          ((r.animOver = /^over/.test(n)),
            (r.animDirect = /left$/.test(n) ? -1 : 1),
            i.animation !== n && t.open && e.defer(M, t),
            (r.easing = t.el.attr("data-easing") || "ease"),
            (r.easing2 = t.el.attr("data-easing2") || "ease"));
          var a = t.el.attr("data-duration");
          ((r.duration = null != a ? Number(a) : 400),
            (r.docHeight = t.el.attr("data-doc-height")),
            (t.config = r));
        }
        function D(t) {
          if (t.links[t.selectedIdx]) {
            var e = t.links[t.selectedIdx];
            (e.focus(), I(e));
          }
        }
        function M(t) {
          t.open && (N(t, !0), z(t, !0));
        }
        function F(t) {
          return u(function () {
            t.open ? N(t) : z(t);
          });
        }
        function I(e) {
          return function (r) {
            var n = t(this).attr("href");
            i.validClick(r.currentTarget)
              ? n && 0 === n.indexOf("#") && e.open && N(e)
              : r.preventDefault();
          };
        }
        ((l.ready =
          l.design =
          l.preview =
            function () {
              if (
                ((o = m && i.env("design")),
                (h = i.env("editor")),
                (r = t(document.body)),
                !(s = f.find(y)).length)
              )
                return;
              (s.each(A), _(), i.resize.on(w));
            }),
          (l.destroy = function () {
            ((S = t()), _(), s && s.length && s.each(C));
          }));
        var R = u(function (t, e) {
          if (t.open) {
            var r = e.closest(".w-nav-menu");
            t.menu.is(r) || N(t);
          }
        });
        function V(e, r) {
          var i = t.data(r, y),
            n = (i.collapsed = "none" !== i.button.css("display"));
          if ((!i.open || n || o || N(i, !0), i.container.length)) {
            var a = (function (e) {
              var r = e.container.css(B);
              "none" === r && (r = "");
              return function (e, i) {
                ((i = t(i)).css(B, ""), "none" === i.css(B) && i.css(B, r));
              };
            })(i);
            (i.links.each(a), i.dropdowns.each(a));
          }
          i.open && G(i);
        }
        var B = "max-width";
        function O(t, e) {
          e.setAttribute("data-nav-menu-open", "");
        }
        function L(t, e) {
          e.removeAttribute("data-nav-menu-open");
        }
        function z(t, e) {
          if (!t.open) {
            ((t.open = !0),
              t.menu.each(O),
              t.links.addClass(E),
              t.dropdowns.addClass(v),
              t.dropdownToggle.addClass(b),
              t.dropdownList.addClass(x),
              t.button.addClass(g));
            var r = t.config;
            ("none" === r.animation ||
              !p.support.transform ||
              r.duration <= 0) &&
              (e = !0);
            var n = G(t),
              a = t.menu.outerHeight(!0),
              s = t.menu.outerWidth(!0),
              h = t.el.height(),
              l = t.el[0];
            if (
              (V(0, l),
              P.intro(0, l),
              i.redraw.up(),
              o || f.on("click" + y, t.outside),
              e)
            )
              m();
            else {
              var c = "transform " + r.duration + "ms " + r.easing;
              if (
                (t.overlay &&
                  ((S = t.menu.prev()), t.overlay.show().append(t.menu)),
                r.animOver)
              )
                return (
                  p(t.menu)
                    .add(c)
                    .set({ x: r.animDirect * s, height: n })
                    .start({ x: 0 })
                    .then(m),
                  void (t.overlay && t.overlay.width(s))
                );
              var u = h + a;
              p(t.menu).add(c).set({ y: -u }).start({ y: 0 }).then(m);
            }
          }
          function m() {
            t.button.attr("aria-expanded", "true");
          }
        }
        function G(t) {
          var e = t.config,
            i = e.docHeight ? f.height() : r.height();
          return (
            e.animOver
              ? t.menu.height(i)
              : "fixed" !== t.el.css("position") && (i -= t.el.outerHeight(!0)),
            t.overlay && t.overlay.height(i),
            i
          );
        }
        function N(t, e) {
          if (t.open) {
            ((t.open = !1), t.button.removeClass(g));
            var r = t.config;
            if (
              (("none" === r.animation ||
                !p.support.transform ||
                r.duration <= 0) &&
                (e = !0),
              P.outro(0, t.el[0]),
              f.off("click" + y, t.outside),
              e)
            )
              return (p(t.menu).stop(), void h());
            var i = "transform " + r.duration + "ms " + r.easing2,
              n = t.menu.outerHeight(!0),
              a = t.menu.outerWidth(!0),
              s = t.el.height();
            if (r.animOver)
              p(t.menu)
                .add(i)
                .start({ x: a * r.animDirect })
                .then(h);
            else {
              var o = s + n;
              p(t.menu).add(i).start({ y: -o }).then(h);
            }
          }
          function h() {
            (t.menu.height(""),
              p(t.menu).set({ x: 0, y: 0 }),
              t.menu.each(L),
              t.links.removeClass(E),
              t.dropdowns.removeClass(v),
              t.dropdownToggle.removeClass(b),
              t.dropdownList.removeClass(x),
              t.overlay &&
                t.overlay.children().length &&
                (S.length ? t.menu.insertAfter(S) : t.menu.prependTo(t.parent),
                t.overlay.attr("style", "").hide()),
              t.el.triggerHandler("w-close"),
              t.button.attr("aria-expanded", "false"));
          }
        }
        return l;
      }),
    );
  },
  function (t, e, r) {
    "use strict";
    var i = r(257);
    function n(t, e) {
      var r = document.createEvent("CustomEvent");
      (r.initCustomEvent(e, !0, !0, null), t.dispatchEvent(r));
    }
    var a = window.jQuery,
      s = {},
      o = {
        reset: function (t, e) {
          i.triggers.reset(t, e);
        },
        intro: function (t, e) {
          (i.triggers.intro(t, e), n(e, "COMPONENT_ACTIVE"));
        },
        outro: function (t, e) {
          (i.triggers.outro(t, e), n(e, "COMPONENT_INACTIVE"));
        },
      };
    ((s.triggers = {}),
      (s.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
      a.extend(s.triggers, o),
      (t.exports = s));
  },
  function (t, e, r) {
    "use strict";
    var i = window.jQuery,
      n = {},
      a = [],
      s = {
        reset: function (t, e) {
          e.__wf_intro = null;
        },
        intro: function (t, e) {
          e.__wf_intro ||
            ((e.__wf_intro = !0), i(e).triggerHandler(n.types.INTRO));
        },
        outro: function (t, e) {
          e.__wf_intro &&
            ((e.__wf_intro = null), i(e).triggerHandler(n.types.OUTRO));
        },
      };
    ((n.triggers = {}),
      (n.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
      (n.init = function () {
        for (var t = a.length, e = 0; e < t; e++) {
          var r = a[e];
          r[0](0, r[1]);
        }
        ((a = []), i.extend(n.triggers, s));
      }),
      (n.async = function () {
        for (var t in s) {
          var e = s[t];
          s.hasOwnProperty(t) &&
            (n.triggers[t] = function (t, r) {
              a.push([e, r]);
            });
        }
      }),
      n.async(),
      (t.exports = n));
  },
]);
