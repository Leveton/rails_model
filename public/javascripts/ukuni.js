
(function () {
    var v = this;
    var s = v._;
    var b = {};
    var j = Array.prototype,
        C = Object.prototype,
        E = Function.prototype;
    var t = j.slice,
        x = j.unshift,
        w = C.toString,
        p = C.hasOwnProperty;
    var n = j.forEach,
        i = j.map,
        A = j.reduce,
        f = j.reduceRight,
        m = j.filter,
        a = j.every,
        z = j.some,
        u = j.indexOf,
        g = j.lastIndexOf,
        c = Array.isArray,
        B = Object.keys,
        k = E.bind;
    var D = function (F) {
            return new h(F)
        };
    if (typeof module !== "undefined" && module.exports) {
        module.exports = D;
        D._ = D
    } else {
        v._ = D
    }
    D.VERSION = "1.1.6";
    var e = D.each = D.forEach = function (K, J, I) {
            if (K == null) {
                return
            }
            if (n && K.forEach === n) {
                K.forEach(J, I)
            } else {
                if (D.isNumber(K.length)) {
                    for (var H = 0, F = K.length; H < F; H++) {
                        if (J.call(I, K[H], H, K) === b) {
                            return
                        }
                    }
                } else {
                    for (var G in K) {
                        if (p.call(K, G)) {
                            if (J.call(I, K[G], G, K) === b) {
                                return
                            }
                        }
                    }
                }
            }
        };
    D.map = function (I, H, G) {
        var F = [];
        if (I == null) {
            return F
        }
        if (i && I.map === i) {
            return I.map(H, G)
        }
        e(I, function (L, J, K) {
            F[F.length] = H.call(G, L, J, K)
        });
        return F
    };
    D.reduce = D.foldl = D.inject = function (J, I, F, H) {
        var G = F !== void 0;
        if (J == null) {
            J = []
        }
        if (A && J.reduce === A) {
            if (H) {
                I = D.bind(I, H)
            }
            return G ? J.reduce(I, F) : J.reduce(I)
        }
        e(J, function (M, K, L) {
            if (!G && K === 0) {
                F = M;
                G = true
            } else {
                F = I.call(H, F, M, K, L)
            }
        });
        if (!G) {
            throw new TypeError("Reduce of empty array with no initial value")
        }
        return F
    };
    D.reduceRight = D.foldr = function (I, H, F, G) {
        if (I == null) {
            I = []
        }
        if (f && I.reduceRight === f) {
            if (G) {
                H = D.bind(H, G)
            }
            return F !== void 0 ? I.reduceRight(H, F) : I.reduceRight(H)
        }
        var J = (D.isArray(I) ? I.slice() : D.toArray(I)).reverse();
        return D.reduce(J, H, F, G)
    };
    D.find = D.detect = function (I, H, G) {
        var F;
        q(I, function (L, J, K) {
            if (H.call(G, L, J, K)) {
                F = L;
                return true
            }
        });
        return F
    };
    D.filter = D.select = function (I, H, G) {
        var F = [];
        if (I == null) {
            return F
        }
        if (m && I.filter === m) {
            return I.filter(H, G)
        }
        e(I, function (L, J, K) {
            if (H.call(G, L, J, K)) {
                F[F.length] = L
            }
        });
        return F
    };
    D.reject = function (I, H, G) {
        var F = [];
        if (I == null) {
            return F
        }
        e(I, function (L, J, K) {
            if (!H.call(G, L, J, K)) {
                F[F.length] = L
            }
        });
        return F
    };
    D.every = D.all = function (I, H, G) {
        var F = true;
        if (I == null) {
            return F
        }
        if (a && I.every === a) {
            return I.every(H, G)
        }
        e(I, function (L, J, K) {
            if (!(F = F && H.call(G, L, J, K))) {
                return b
            }
        });
        return F
    };
    var q = D.some = D.any = function (I, H, G) {
            H || (H = D.identity);
            var F = false;
            if (I == null) {
                return F
            }
            if (z && I.some === z) {
                return I.some(H, G)
            }
            e(I, function (L, J, K) {
                if (F = H.call(G, L, J, K)) {
                    return b
                }
            });
            return F
        };
    D.include = D.contains = function (H, G) {
        var F = false;
        if (H == null) {
            return F
        }
        if (u && H.indexOf === u) {
            return H.indexOf(G) != -1
        }
        q(H, function (I) {
            if (F = I === G) {
                return true
            }
        });
        return F
    };
    D.invoke = function (G, H) {
        var F = t.call(arguments, 2);
        return D.map(G, function (I) {
            return (H.call ? H || I : I[H]).apply(I, F)
        })
    };
    D.pluck = function (G, F) {
        return D.map(G, function (H) {
            return H[F]
        })
    };
    D.max = function (I, H, G) {
        if (!H && D.isArray(I)) {
            return Math.max.apply(Math, I)
        }
        var F = {
            computed: -Infinity
        };
        e(I, function (M, J, L) {
            var K = H ? H.call(G, M, J, L) : M;
            K >= F.computed && (F = {
                value: M,
                computed: K
            })
        });
        return F.value
    };
    D.min = function (I, H, G) {
        if (!H && D.isArray(I)) {
            return Math.min.apply(Math, I)
        }
        var F = {
            computed: Infinity
        };
        e(I, function (M, J, L) {
            var K = H ? H.call(G, M, J, L) : M;
            K < F.computed && (F = {
                value: M,
                computed: K
            })
        });
        return F.value
    };
    D.sortBy = function (H, G, F) {
        return D.pluck(D.map(H, function (K, I, J) {
            return {
                value: K,
                criteria: G.call(F, K, I, J)
            }
        }).sort(function (L, K) {
            var J = L.criteria,
                I = K.criteria;
            return J < I ? -1 : J > I ? 1 : 0
        }), "value")
    };
    D.sortedIndex = function (K, J, H) {
        H || (H = D.identity);
        var F = 0,
            I = K.length;
        while (F < I) {
            var G = (F + I) >> 1;
            H(K[G]) < H(J) ? F = G + 1 : I = G
        }
        return F
    };
    D.toArray = function (F) {
        if (!F) {
            return []
        }
        if (F.toArray) {
            return F.toArray()
        }
        if (D.isArray(F)) {
            return F
        }
        if (D.isArguments(F)) {
            return t.call(F)
        }
        return D.values(F)
    };
    D.size = function (F) {
        return D.toArray(F).length
    };
    D.first = D.head = function (H, G, F) {
        return (G != null) && !F ? t.call(H, 0, G) : H[0]
    };
    D.rest = D.tail = function (H, F, G) {
        return t.call(H, (F == null) || G ? 1 : F)
    };
    D.last = function (F) {
        return F[F.length - 1]
    };
    D.compact = function (F) {
        return D.filter(F, function (G) {
            return !!G
        })
    };
    D.flatten = function (F) {
        return D.reduce(F, function (G, H) {
            if (D.isArray(H)) {
                return G.concat(D.flatten(H))
            }
            G[G.length] = H;
            return G
        }, [])
    };
    D.without = function (G) {
        var F = t.call(arguments, 1);
        return D.filter(G, function (H) {
            return !D.include(F, H)
        })
    };
    D.uniq = D.unique = function (G, F) {
        return D.reduce(G, function (H, J, I) {
            if (0 == I || (F === true ? D.last(H) != J : !D.include(H, J))) {
                H[H.length] = J
            }
            return H
        }, [])
    };
    D.intersect = function (G) {
        var F = t.call(arguments, 1);
        return D.filter(D.uniq(G), function (H) {
            return D.every(F, function (I) {
                return D.indexOf(I, H) >= 0
            })
        })
    };
    D.zip = function () {
        var F = t.call(arguments);
        var I = D.max(D.pluck(F, "length"));
        var H = new Array(I);
        for (var G = 0; G < I; G++) {
            H[G] = D.pluck(F, "" + G)
        }
        return H
    };
    D.indexOf = function (J, H, I) {
        if (J == null) {
            return -1
        }
        var G, F;
        if (I) {
            G = D.sortedIndex(J, H);
            return J[G] === H ? G : -1
        }
        if (u && J.indexOf === u) {
            return J.indexOf(H)
        }
        for (G = 0, F = J.length; G < F; G++) {
            if (J[G] === H) {
                return G
            }
        }
        return -1
    };
    D.lastIndexOf = function (H, G) {
        if (H == null) {
            return -1
        }
        if (g && H.lastIndexOf === g) {
            return H.lastIndexOf(G)
        }
        var F = H.length;
        while (F--) {
            if (H[F] === G) {
                return F
            }
        }
        return -1
    };
    D.range = function (K, I, J) {
        if (arguments.length <= 1) {
            I = K || 0;
            K = 0
        }
        J = arguments[2] || 1;
        var G = Math.max(Math.ceil((I - K) / J), 0);
        var F = 0;
        var H = new Array(G);
        while (F < G) {
            H[F++] = K;
            K += J
        }
        return H
    };
    D.bind = function (G, H) {
        if (G.bind === k && k) {
            return k.apply(G, t.call(arguments, 1))
        }
        var F = t.call(arguments, 2);
        return function () {
            return G.apply(H, F.concat(t.call(arguments)))
        }
    };
    D.bindAll = function (G) {
        var F = t.call(arguments, 1);
        if (F.length == 0) {
            F = D.functions(G)
        }
        e(F, function (H) {
            G[H] = D.bind(G[H], G)
        });
        return G
    };
    D.memoize = function (H, G) {
        var F = {};
        G || (G = D.identity);
        return function () {
            var I = G.apply(this, arguments);
            return p.call(F, I) ? F[I] : (F[I] = H.apply(this, arguments))
        }
    };
    D.delay = function (G, H) {
        var F = t.call(arguments, 2);
        return setTimeout(function () {
            return G.apply(G, F)
        }, H)
    };
    D.defer = function (F) {
        return D.delay.apply(D, [F, 1].concat(t.call(arguments, 1)))
    };
    var y = function (G, I, F) {
            var H;
            return function () {
                var K = this,
                    J = arguments;
                var L = function () {
                        H = null;
                        G.apply(K, J)
                    };
                if (F) {
                    clearTimeout(H)
                }
                if (F || !H) {
                    H = setTimeout(L, I)
                }
            }
        };
    D.throttle = function (F, G) {
        return y(F, G, false)
    };
    D.debounce = function (F, G) {
        return y(F, G, true)
    };
    D.once = function (H) {
        var F = false,
            G;
        return function () {
            if (F) {
                return G
            }
            F = true;
            return G = H.apply(this, arguments)
        }
    };
    D.wrap = function (F, G) {
        return function () {
            var H = [F].concat(t.call(arguments));
            return G.apply(this, H)
        }
    };
    D.compose = function () {
        var F = t.call(arguments);
        return function () {
            var G = t.call(arguments);
            for (var H = F.length - 1; H >= 0; H--) {
                G = [F[H].apply(this, G)]
            }
            return G[0]
        }
    };
    D.after = function (G, F) {
        return function () {
            if (--G < 1) {
                return F.apply(this, arguments)
            }
        }
    };
    D.keys = B ||
    function (H) {
        if (H !== Object(H)) {
            throw new TypeError("Invalid object")
        }
        var G = [];
        for (var F in H) {
            if (p.call(H, F)) {
                G[G.length] = F
            }
        }
        return G
    };
    D.values = function (F) {
        return D.map(F, D.identity)
    };
    D.functions = D.methods = function (F) {
        return D.filter(D.keys(F), function (G) {
            return D.isFunction(F[G])
        }).sort()
    };
    D.extend = function (F) {
        e(t.call(arguments, 1), function (G) {
            for (var H in G) {
                if (G[H] !== void 0) {
                    F[H] = G[H]
                }
            }
        });
        return F
    };
    D.defaults = function (F) {
        e(t.call(arguments, 1), function (G) {
            for (var H in G) {
                if (F[H] == null) {
                    F[H] = G[H]
                }
            }
        });
        return F
    };
    D.clone = function (F) {
        return D.isArray(F) ? F.slice() : D.extend({}, F)
    };
    D.tap = function (G, F) {
        F(G);
        return G
    };
    D.isEqual = function (G, F) {
        if (G === F) {
            return true
        }
        var J = typeof (G),
            L = typeof (F);
        if (J != L) {
            return false
        }
        if (G == F) {
            return true
        }
        if ((!G && F) || (G && !F)) {
            return false
        }
        if (G._chain) {
            G = G._wrapped
        }
        if (F._chain) {
            F = F._wrapped
        }
        if (G.isEqual) {
            return G.isEqual(F)
        }
        if (D.isDate(G) && D.isDate(F)) {
            return G.getTime() === F.getTime()
        }
        if (D.isNaN(G) && D.isNaN(F)) {
            return false
        }
        if (D.isRegExp(G) && D.isRegExp(F)) {
            return G.source === F.source && G.global === F.global && G.ignoreCase === F.ignoreCase && G.multiline === F.multiline
        }
        if (J !== "object") {
            return false
        }
        if (G.length && (G.length !== F.length)) {
            return false
        }
        var H = D.keys(G),
            K = D.keys(F);
        if (H.length != K.length) {
            return false
        }
        for (var I in G) {
            if (!(I in F) || !D.isEqual(G[I], F[I])) {
                return false
            }
        }
        return true
    };
    D.isEmpty = function (G) {
        if (D.isArray(G) || D.isString(G)) {
            return G.length === 0
        }
        for (var F in G) {
            if (p.call(G, F)) {
                return false
            }
        }
        return true
    };
    D.isElement = function (F) {
        return !!(F && F.nodeType == 1)
    };
    D.isArray = c ||
    function (F) {
        return w.call(F) === "[object Array]"
    };
    D.isArguments = function (F) {
        return !!(F && p.call(F, "callee"))
    };
    D.isFunction = function (F) {
        return !!(F && F.constructor && F.call && F.apply)
    };
    D.isString = function (F) {
        return !!(F === "" || (F && F.charCodeAt && F.substr))
    };
    D.isNumber = function (F) {
        return !!(F === 0 || (F && F.toExponential && F.toFixed))
    };
    D.isNaN = function (F) {
        return F !== F
    };
    D.isBoolean = function (F) {
        return F === true || F === false
    };
    D.isDate = function (F) {
        return !!(F && F.getTimezoneOffset && F.setUTCFullYear)
    };
    D.isRegExp = function (F) {
        return !!(F && F.test && F.exec && (F.ignoreCase || F.ignoreCase === false))
    };
    D.isNull = function (F) {
        return F === null
    };
    D.isUndefined = function (F) {
        return F === void 0
    };
    D.noConflict = function () {
        v._ = s;
        return this
    };
    D.identity = function (F) {
        return F
    };
    D.times = function (I, H, G) {
        for (var F = 0; F < I; F++) {
            H.call(G, F)
        }
    };
    D.mixin = function (F) {
        e(D.functions(F), function (G) {
            r(G, D[G] = F[G])
        })
    };
    var l = 0;
    D.uniqueId = function (F) {
        var G = l++;
        return F ? F + G : G
    };
    D.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g
    };
    D.template = function (I, H) {
        var J = D.templateSettings;
        var F = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + I.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(J.interpolate, function (K, L) {
            return "'," + L.replace(/\\'/g, "'") + ",'"
        }).replace(J.evaluate || null, function (K, L) {
            return "');" + L.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "__p.push('"
        }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');";
        var G = new Function("obj", F);
        return H ? G(H) : G
    };
    var h = function (F) {
            this._wrapped = F
        };
    D.prototype = h.prototype;
    var o = function (G, F) {
            return F ? D(G).chain() : G
        };
    var r = function (F, G) {
            h.prototype[F] = function () {
                var H = t.call(arguments);
                x.call(H, this._wrapped);
                return o(G.apply(D, H), this._chain)
            }
        };
    D.mixin(D);
    e(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (F) {
        var G = j[F];
        h.prototype[F] = function () {
            G.apply(this._wrapped, arguments);
            return o(this._wrapped, this._chain)
        }
    });
    e(["concat", "join", "slice"], function (F) {
        var G = j[F];
        h.prototype[F] = function () {
            return o(G.apply(this._wrapped, arguments), this._chain)
        }
    });
    h.prototype.chain = function () {
        this._chain = true;
        return this
    };
    h.prototype.value = function () {
        return this._wrapped
    }
})();
(function (e) {
    var c = e.browser.msie && parseInt(e.browser.version) === 6 && typeof window.XMLHttpRequest !== "object",
        b = e.browser.msie && parseInt(e.browser.version) === 7,
        f = null,
        a = [];
    e.modal = function (h, g) {
        return e.modal.impl.init(h, g)
    };
    e.modal.close = function () {
        e.modal.impl.close()
    };
    e.modal.focus = function (g) {
        e.modal.impl.focus(g)
    };
    e.modal.setContainerDimensions = function () {
        e.modal.impl.setContainerDimensions()
    };
    e.modal.setPosition = function () {
        e.modal.impl.setPosition()
    };
    e.modal.update = function (g, h) {
        e.modal.impl.update(g, h)
    };
    e.fn.modal = function (g) {
        return e.modal.impl.init(this, g)
    };
    e.modal.defaults = {
        appendTo: "body",
        focus: true,
        opacity: 50,
        overlayId: "simplemodal-overlay",
        overlayCss: {},
        containerId: "simplemodal-container",
        containerCss: {},
        dataId: "simplemodal-data",
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: false,
        autoPosition: true,
        zIndex: 1000,
        close: true,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: "simplemodal-close",
        escClose: true,
        overlayClose: false,
        position: null,
        persist: false,
        modal: true,
        onOpen: null,
        onShow: null,
        onClose: null
    };
    e.modal.impl = {
        d: {},
        init: function (i, g) {
            var h = this;
            if (h.d.data) {
                return false
            }
            f = e.browser.msie && !e.boxModel;
            h.o = e.extend({}, e.modal.defaults, g);
            h.zIndex = h.o.zIndex;
            h.occb = false;
            if (typeof i === "object") {
                i = i instanceof jQuery ? i : e(i);
                h.d.placeholder = false;
                if (i.parent().parent().size() > 0) {
                    i.before(e("<span></span>").attr("id", "simplemodal-placeholder").css({
                        display: "none"
                    }));
                    h.d.placeholder = true;
                    h.display = i.css("display");
                    if (!h.o.persist) {
                        h.d.orig = i.clone(true)
                    }
                }
            } else {
                if (typeof i === "string" || typeof i === "number") {
                    i = e("<div></div>").html(i)
                } else {
                    alert("SimpleModal Error: Unsupported data type: " + typeof i);
                    return h
                }
            }
            h.create(i);
            i = null;
            h.open();
            if (e.isFunction(h.o.onShow)) {
                h.o.onShow.apply(h, [h.d])
            }
            return h
        },
        create: function (h) {
            var g = this;
            a = g.getDimensions();
            if (g.o.modal && c) {
                g.d.iframe = e('<iframe src="javascript:false;"></iframe>').css(e.extend(g.o.iframeCss, {
                    display: "none",
                    opacity: 0,
                    position: "fixed",
                    height: a[0],
                    width: a[1],
                    zIndex: g.o.zIndex,
                    top: 0,
                    left: 0
                })).appendTo(g.o.appendTo)
            }
            g.d.overlay = e("<div></div>").attr("id", g.o.overlayId).addClass("simplemodal-overlay").css(e.extend(g.o.overlayCss, {
                display: "none",
                opacity: g.o.opacity / 100,
                height: g.o.modal ? a[0] : 0,
                width: g.o.modal ? a[1] : 0,
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: g.o.zIndex + 1
            })).appendTo(g.o.appendTo);
            g.d.container = e("<div></div>").attr("id", g.o.containerId).addClass("simplemodal-container").css(e.extend(g.o.containerCss, {
                display: "none",
                position: "fixed",
                zIndex: g.o.zIndex + 2
            })).append(g.o.close && g.o.closeHTML ? e(g.o.closeHTML).addClass(g.o.closeClass) : "").appendTo(g.o.appendTo);
            g.d.wrap = e("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({
                height: "100%",
                outline: 0,
                width: "100%"
            }).appendTo(g.d.container);
            g.d.data = h.attr("id", h.attr("id") || g.o.dataId).addClass("simplemodal-data").css(e.extend(g.o.dataCss, {
                display: "none"
            })).appendTo("body");
            h = null;
            g.setContainerDimensions();
            g.d.data.appendTo(g.d.wrap);
            if (c || f) {
                g.fixIE()
            }
        },
        bindEvents: function () {
            var g = this;
            e("." + g.o.closeClass).bind("click.simplemodal", function (h) {
                h.preventDefault();
                g.close()
            });
            if (g.o.modal && g.o.close && g.o.overlayClose) {
                g.d.overlay.bind("click.simplemodal", function (h) {
                    h.preventDefault();
                    g.close()
                })
            }
            e(document).bind("keydown.simplemodal", function (h) {
                if (g.o.modal && h.keyCode === 9) {
                    g.watchTab(h)
                } else {
                    if ((g.o.close && g.o.escClose) && h.keyCode === 27) {
                        h.preventDefault();
                        g.close()
                    }
                }
            });
            e(window).bind("resize.simplemodal", function () {
                a = g.getDimensions();
                g.o.autoResize ? g.setContainerDimensions() : g.o.autoPosition && g.setPosition();
                if (c || f) {
                    g.fixIE()
                } else {
                    if (g.o.modal) {
                        g.d.iframe && g.d.iframe.css({
                            height: a[0],
                            width: a[1]
                        });
                        g.d.overlay.css({
                            height: a[0],
                            width: a[1]
                        })
                    }
                }
            })
        },
        unbindEvents: function () {
            e("." + this.o.closeClass).unbind("click.simplemodal");
            e(document).unbind("keydown.simplemodal");
            e(window).unbind("resize.simplemodal");
            this.d.overlay.unbind("click.simplemodal")
        },
        fixIE: function () {
            var g = this,
                h = g.o.position;
            e.each([g.d.iframe || null, !g.o.modal ? null : g.d.overlay, g.d.container], function (u, m) {
                if (m) {
                    var r = "document.body.clientHeight",
                        w = "document.body.clientWidth",
                        y = "document.body.scrollHeight",
                        v = "document.body.scrollLeft",
                        p = "document.body.scrollTop",
                        l = "document.body.scrollWidth",
                        k = "document.documentElement.clientHeight",
                        t = "document.documentElement.clientWidth",
                        q = "document.documentElement.scrollLeft",
                        z = "document.documentElement.scrollTop",
                        A = m[0].style;
                    A.position = "absolute";
                    if (u < 2) {
                        A.removeExpression("height");
                        A.removeExpression("width");
                        A.setExpression("height", "" + y + " > " + r + " ? " + y + " : " + r + ' + "px"');
                        A.setExpression("width", "" + l + " > " + w + " ? " + l + " : " + w + ' + "px"')
                    } else {
                        var o, j;
                        if (h && h.constructor === Array) {
                            var x = h[0] ? typeof h[0] === "number" ? h[0].toString() : h[0].replace(/px/, "") : m.css("top").replace(/px/, "");
                            o = x.indexOf("%") === -1 ? x + " + (t = " + z + " ? " + z + " : " + p + ') + "px"' : parseInt(x.replace(/%/, "")) + " * ((" + k + " || " + r + ") / 100) + (t = " + z + " ? " + z + " : " + p + ') + "px"';
                            if (h[1]) {
                                var n = typeof h[1] === "number" ? h[1].toString() : h[1].replace(/px/, "");
                                j = n.indexOf("%") === -1 ? n + " + (t = " + q + " ? " + q + " : " + v + ') + "px"' : parseInt(n.replace(/%/, "")) + " * ((" + t + " || " + w + ") / 100) + (t = " + q + " ? " + q + " : " + v + ') + "px"'
                            }
                        } else {
                            o = "(" + k + " || " + r + ") / 2 - (this.offsetHeight / 2) + (t = " + z + " ? " + z + " : " + p + ') + "px"';
                            j = "(" + t + " || " + w + ") / 2 - (this.offsetWidth / 2) + (t = " + q + " ? " + q + " : " + v + ') + "px"'
                        }
                        A.removeExpression("top");
                        A.removeExpression("left");
                        A.setExpression("top", o);
                        A.setExpression("left", j)
                    }
                }
            })
        },
        focus: function (j) {
            var h = this,
                i = j && e.inArray(j, ["first", "last"]) !== -1 ? j : "first";
            var g = e(":input:enabled:visible:" + i, h.d.wrap);
            setTimeout(function () {
                g.length > 0 ? g.focus() : h.d.wrap.focus()
            }, 10)
        },
        getDimensions: function () {
            var i = e(window);
            var g = e.browser.opera && e.browser.version > "9.5" && e.fn.jquery < "1.3" || e.browser.opera && e.browser.version < "9.5" && e.fn.jquery > "1.2.6" ? i[0].innerHeight : i.height();
            return [g, i.width()]
        },
        getVal: function (g, h) {
            return g ? (typeof g === "number" ? g : g === "auto" ? 0 : g.indexOf("%") > 0 ? ((parseInt(g.replace(/%/, "")) / 100) * (h === "h" ? a[0] : a[1])) : parseInt(g.replace(/px/, ""))) : null
        },
        update: function (g, i) {
            var h = this;
            if (!h.d.data) {
                return false
            }
            h.d.origHeight = h.getVal(g, "h");
            h.d.origWidth = h.getVal(i, "w");
            h.d.data.hide();
            g && h.d.container.css("height", g);
            i && h.d.container.css("width", i);
            h.setContainerDimensions();
            h.d.data.show();
            h.o.focus && h.focus();
            h.unbindEvents();
            h.bindEvents()
        },
        setContainerDimensions: function () {
            var r = this,
                j = c || b;
            var g = r.d.origHeight ? r.d.origHeight : e.browser.opera ? r.d.container.height() : r.getVal(j ? r.d.container[0].currentStyle.height : r.d.container.css("height"), "h"),
                i = r.d.origWidth ? r.d.origWidth : e.browser.opera ? r.d.container.width() : r.getVal(j ? r.d.container[0].currentStyle.width : r.d.container.css("width"), "w"),
                n = r.d.data.outerHeight(true),
                h = r.d.data.outerWidth(true);
            r.d.origHeight = r.d.origHeight || g;
            r.d.origWidth = r.d.origWidth || i;
            var k = r.o.maxHeight ? r.getVal(r.o.maxHeight, "h") : null,
                o = r.o.maxWidth ? r.getVal(r.o.maxWidth, "w") : null,
                m = k && k < a[0] ? k : a[0],
                q = o && o < a[1] ? o : a[1];
            var l = r.o.minHeight ? r.getVal(r.o.minHeight, "h") : "auto";
            if (!g) {
                if (!n) {
                    g = l
                } else {
                    if (n > m) {
                        g = m
                    } else {
                        if (r.o.minHeight && l !== "auto" && n < l) {
                            g = l
                        } else {
                            g = n
                        }
                    }
                }
            } else {
                g = r.o.autoResize && g > m ? m : g < l ? l : g
            }
            var p = r.o.minWidth ? r.getVal(r.o.minWidth, "w") : "auto";
            if (!i) {
                if (!h) {
                    i = p
                } else {
                    if (h > q) {
                        i = q
                    } else {
                        if (r.o.minWidth && p !== "auto" && h < p) {
                            i = p
                        } else {
                            i = h
                        }
                    }
                }
            } else {
                i = r.o.autoResize && i > q ? q : i < p ? p : i
            }
            r.d.container.css({
                height: g,
                width: i
            });
            r.d.wrap.css({
                overflow: (n > g || h > i) ? "auto" : "visible"
            });
            r.o.autoPosition && r.setPosition()
        },
        setPosition: function () {
            var h = this,
                j, i, k = (a[0] / 2) - (h.d.container.outerHeight(true) / 2),
                g = (a[1] / 2) - (h.d.container.outerWidth(true) / 2);
            if (h.o.position && Object.prototype.toString.call(h.o.position) === "[object Array]") {
                j = h.o.position[0] || k;
                i = h.o.position[1] || g
            } else {
                j = k;
                i = g
            }
            h.d.container.css({
                left: i,
                top: j
            })
        },
        watchTab: function (h) {
            var g = this;
            if (e(h.target).parents(".simplemodal-container").length > 0) {
                g.inputs = e(":input:enabled:visible:first, :input:enabled:visible:last", g.d.data[0]);
                if ((!h.shiftKey && h.target === g.inputs[g.inputs.length - 1]) || (h.shiftKey && h.target === g.inputs[0]) || g.inputs.length === 0) {
                    h.preventDefault();
                    var i = h.shiftKey ? "last" : "first";
                    g.focus(i)
                }
            } else {
                h.preventDefault();
                g.focus()
            }
        },
        open: function () {
            var g = this;
            g.d.iframe && g.d.iframe.show();
            if (e.isFunction(g.o.onOpen)) {
                g.o.onOpen.apply(g, [g.d])
            } else {
                g.d.overlay.show();
                g.d.container.show();
                g.d.data.show()
            }
            g.o.focus && g.focus();
            g.bindEvents()
        },
        close: function () {
            var g = this;
            if (!g.d.data) {
                return false
            }
            g.unbindEvents();
            if (e.isFunction(g.o.onClose) && !g.occb) {
                g.occb = true;
                g.o.onClose.apply(g, [g.d])
            } else {
                if (g.d.placeholder) {
                    var h = e("#simplemodal-placeholder");
                    if (g.o.persist) {
                        h.replaceWith(g.d.data.removeClass("simplemodal-data").css("display", g.display))
                    } else {
                        g.d.data.hide().remove();
                        h.replaceWith(g.d.orig)
                    }
                } else {
                    g.d.data.hide().remove()
                }
                g.d.container.hide().remove();
                g.d.overlay.hide();
                g.d.iframe && g.d.iframe.hide().remove();
                setTimeout(function () {
                    g.d.overlay.remove();
                    g.d = {}
                }, 10)
            }
        }
    }
})(jQuery);
(function () {
    d3 = {
        version: "1.20.2"
    };
    if (!Date.now) {
        Date.now = function () {
            return +new Date
        }
    }
    if (!Object.create) {
        Object.create = function (bl) {
            function e() {}
            e.prototype = bl;
            return new e
        }
    }
    var v = a7;

    function ac(bl) {
        var e = -1,
            bn = bl.length,
            bm = [];
        while (++e < bn) {
            bm.push(bl[e])
        }
        return bm
    }
    function a7(e) {
        return Array.prototype.slice.call(e)
    }
    try {
        v(document.documentElement.childNodes)[0].nodeType
    } catch (ae) {
        v = ac
    }
    d3.functor = function (e) {
        return typeof e === "function" ? e : function () {
            return e
        }
    };
    d3.rebind = function (e, bl) {
        return function () {
            var bm = bl.apply(e, arguments);
            return arguments.length ? e : bm
        }
    };
    d3.ascending = function (bl, e) {
        return bl < e ? -1 : bl > e ? 1 : 0
    };
    d3.descending = function (bl, e) {
        return e < bl ? -1 : e > bl ? 1 : 0
    };
    d3.min = function (bp, bn) {
        var bm = -1,
            bo = bp.length,
            bl, e;
        if (arguments.length === 1) {
            while (++bm < bo && ((bl = bp[bm]) == null || bl != bl)) {
                bl = undefined
            }
            while (++bm < bo) {
                if ((e = bp[bm]) != null && bl > e) {
                    bl = e
                }
            }
        } else {
            while (++bm < bo && ((bl = bn.call(bp, bp[bm], bm)) == null || bl != bl)) {
                bl = undefined
            }
            while (++bm < bo) {
                if ((e = bn.call(bp, bp[bm], bm)) != null && bl > e) {
                    bl = e
                }
            }
        }
        return bl
    };
    d3.max = function (bp, bn) {
        var bm = -1,
            bo = bp.length,
            bl, e;
        if (arguments.length === 1) {
            while (++bm < bo && ((bl = bp[bm]) == null || bl != bl)) {
                bl = undefined
            }
            while (++bm < bo) {
                if ((e = bp[bm]) != null && e > bl) {
                    bl = e
                }
            }
        } else {
            while (++bm < bo && ((bl = bn.call(bp, bp[bm], bm)) == null || bl != bl)) {
                bl = undefined
            }
            while (++bm < bo) {
                if ((e = bn.call(bp, bp[bm], bm)) != null && e > bl) {
                    bl = e
                }
            }
        }
        return bl
    };
    d3.zip = function () {
        if (!(bp = arguments.length)) {
            return []
        }
        for (var bn = -1, e = d3.min(arguments, aw), bm = new Array(e); ++bn < e;) {
            for (var bl = -1, bp, bo = bm[bn] = new Array(bp); ++bl < bp;) {
                bo[bl] = arguments[bl][bn]
            }
        }
        return bm
    };

    function aw(e) {
        return e.length
    }
    d3.bisectLeft = function (bl, e, bo, bn) {
        if (arguments.length < 3) {
            bo = 0
        }
        if (arguments.length < 4) {
            bn = bl.length
        }
        while (bo < bn) {
            var bm = (bo + bn) >> 1;
            if (bl[bm] < e) {
                bo = bm + 1
            } else {
                bn = bm
            }
        }
        return bo
    };
    d3.bisect = d3.bisectRight = function (bl, e, bo, bn) {
        if (arguments.length < 3) {
            bo = 0
        }
        if (arguments.length < 4) {
            bn = bl.length
        }
        while (bo < bn) {
            var bm = (bo + bn) >> 1;
            if (e < bl[bm]) {
                bn = bm
            } else {
                bo = bm + 1
            }
        }
        return bo
    };
    d3.nest = function () {
        var bn = {},
            bm = [],
            bq = [],
            bl, bo;

        function bp(by, bw) {
            if (bw >= bm.length) {
                return bo ? bo.call(bn, by) : (bl ? by.sort(bl) : by)
            }
            var bt = -1,
                bx = by.length,
                bs = bm[bw++],
                bu, br, bv = {};
            while (++bt < bx) {
                if ((bu = bs(br = by[bt])) in bv) {
                    bv[bu].push(br)
                } else {
                    bv[bu] = [br]
                }
            }
            for (bu in bv) {
                bv[bu] = bp(bv[bu], bw)
            }
            return bv
        }
        function e(bu, bv) {
            if (bv >= bm.length) {
                return bu
            }
            var br = [],
                bs = bq[bv++],
                bt;
            for (bt in bu) {
                br.push({
                    key: bt,
                    values: e(bu[bt], bv)
                })
            }
            if (bs) {
                br.sort(function (bx, bw) {
                    return bs(bx.key, bw.key)
                })
            }
            return br
        }
        bn.map = function (br) {
            return bp(br, 0)
        };
        bn.entries = function (br) {
            return e(bp(br, 0), 0)
        };
        bn.key = function (br) {
            bm.push(br);
            return bn
        };
        bn.sortKeys = function (br) {
            bq[bm.length - 1] = br;
            return bn
        };
        bn.sortValues = function (br) {
            bl = br;
            return bn
        };
        bn.rollup = function (br) {
            bo = br;
            return bn
        };
        return bn
    };
    d3.keys = function (bm) {
        var bl = [];
        for (var e in bm) {
            bl.push(e)
        }
        return bl
    };
    d3.values = function (bm) {
        var e = [];
        for (var bl in bm) {
            e.push(bm[bl])
        }
        return e
    };
    d3.entries = function (bm) {
        var e = [];
        for (var bl in bm) {
            e.push({
                key: bl,
                value: bm[bl]
            })
        }
        return e
    };
    d3.permute = function (bo, bl) {
        var e = [],
            bm = -1,
            bn = bl.length;
        while (++bm < bn) {
            e[bm] = bo[bl[bm]]
        }
        return e
    };
    d3.merge = function (e) {
        return Array.prototype.concat.apply([], e)
    };
    d3.split = function (bq, bo) {
        var bn = [],
            e = [],
            bm, bl = -1,
            bp = bq.length;
        if (arguments.length < 2) {
            bo = x
        }
        while (++bl < bp) {
            if (bo.call(e, bm = bq[bl], bl)) {
                e = []
            } else {
                if (!e.length) {
                    bn.push(e)
                }
                e.push(bm)
            }
        }
        return bn
    };

    function x(e) {
        return e == null
    }
    function aH(e) {
        return e.replace(/(^\s+)|(\s+$)/g, "").replace(/\s+/g, " ")
    }
    function aA(e) {
        e.apply(this, (arguments[0] = this, arguments));
        return this
    }
    d3.range = function (bp, bn, bo) {
        if (arguments.length === 1) {
            bn = bp;
            bp = 0
        }
        if (bo == null) {
            bo = 1
        }
        if ((bn - bp) / bo == Infinity) {
            throw new Error("infinite range")
        }
        var e = [],
            bm = -1,
            bl;
        if (bo < 0) {
            while ((bl = bp + bo * ++bm) > bn) {
                e.push(bl)
            }
        } else {
            while ((bl = bp + bo * ++bm) < bn) {
                e.push(bl)
            }
        }
        return e
    };
    d3.requote = function (e) {
        return e.replace(ar, "\\$&")
    };
    var ar = /[\\\^\$\*\+\?\[\]\(\)\.\{\}]/g;
    d3.round = function (e, bl) {
        return bl ? Math.round(e * Math.pow(10, bl)) * Math.pow(10, -bl) : Math.round(e)
    };
    d3.xhr = function (e, bm, bn) {
        var bl = new XMLHttpRequest;
        if (arguments.length < 3) {
            bn = bm
        } else {
            if (bm && bl.overrideMimeType) {
                bl.overrideMimeType(bm)
            }
        }
        bl.open("GET", e, true);
        bl.onreadystatechange = function () {
            if (bl.readyState === 4) {
                bn(bl.status < 300 ? bl : null)
            }
        };
        bl.send(null)
    };
    d3.text = function (e, bm, bn) {
        function bl(bo) {
            bn(bo && bo.responseText)
        }
        if (arguments.length < 3) {
            bn = bm;
            bm = null
        }
        d3.xhr(e, bm, bl)
    };
    d3.json = function (e, bl) {
        d3.text(e, "application/json", function (bm) {
            bl(bm ? JSON.parse(bm) : null)
        })
    };
    d3.html = function (e, bl) {
        d3.text(e, "text/html", function (bn) {
            if (bn != null) {
                var bm = document.createRange();
                bm.selectNode(document.body);
                bn = bm.createContextualFragment(bn)
            }
            bl(bn)
        })
    };
    d3.xml = function (e, bm, bn) {
        function bl(bo) {
            bn(bo && bo.responseXML)
        }
        if (arguments.length < 3) {
            bn = bm;
            bm = null
        }
        d3.xhr(e, bm, bl)
    };
    d3.ns = {
        prefix: {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        },
        qualify: function (e) {
            var bl = e.indexOf(":");
            return bl < 0 ? e : {
                space: d3.ns.prefix[e.substring(0, bl)],
                local: e.substring(bl + 1)
            }
        }
    };
    d3.dispatch = function (bm) {
        var e = {},
            bn;
        for (var bl = 0, bo = arguments.length; bl < bo; bl++) {
            bn = arguments[bl];
            e[bn] = j(bn)
        }
        return e
    };

    function j(bm) {
        var e = {},
            bl = [];
        e.add = function (bo) {
            for (var bn = 0; bn < bl.length; bn++) {
                if (bl[bn].listener == bo) {
                    return e
                }
            }
            bl.push({
                listener: bo,
                on: true
            });
            return e
        };
        e.remove = function (bp) {
            for (var bo = 0; bo < bl.length; bo++) {
                var bn = bl[bo];
                if (bn.listener == bp) {
                    bn.on = false;
                    bl = bl.slice(0, bo).concat(bl.slice(bo + 1));
                    break
                }
            }
            return e
        };
        e.dispatch = function () {
            var bo = bl;
            for (var bp = 0, bq = bo.length; bp < bq; bp++) {
                var bn = bo[bp];
                if (bn.on) {
                    bn.listener.apply(this, arguments)
                }
            }
        };
        return e
    }
    d3.format = function (br) {
        var bo = M.exec(br),
            bt = bo[1] || " ",
            bl = bo[3] || "",
            bm = bo[5],
            e = +bo[6],
            bu = bo[7],
            bp = bo[8],
            bq = bo[9],
            bs = false,
            bn = false;
        if (bp) {
            bp = bp.substring(1)
        }
        if (bm) {
            bt = "0";
            if (bu) {
                e -= Math.floor((e - 1) / 4)
            }
        }
        switch (bq) {
        case "n":
            bu = true;
            bq = "g";
            break;
        case "%":
            bs = true;
            bq = "f";
            break;
        case "p":
            bs = true;
            bq = "r";
            break;
        case "d":
            bn = true;
            bp = "0";
            break
        }
        bq = n[bq] || aB;
        return function (by) {
            var bx = bs ? by * 100 : +by,
                bv = (bx < 0) && (bx = -bx) ? "\u2212" : bl;
            if (bn && (bx % 1)) {
                return ""
            }
            by = bq(bx, bp);
            if (bm) {
                var bw = by.length + bv.length;
                if (bw < e) {
                    by = new Array(e - bw + 1).join(bt) + by
                }
                if (bu) {
                    by = a1(by)
                }
                by = bv + by
            } else {
                if (bu) {
                    by = a1(by)
                }
                by = bv + by;
                var bw = by.length;
                if (bw < e) {
                    by = new Array(e - bw + 1).join(bt) + by
                }
            }
            if (bs) {
                by += "%"
            }
            return by
        }
    };
    var M = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/;
    var n = {
        g: function (e, bl) {
            return e.toPrecision(bl)
        },
        e: function (e, bl) {
            return e.toExponential(bl)
        },
        f: function (e, bl) {
            return e.toFixed(bl)
        },
        r: function (e, bl) {
            var bm = 1 + Math.floor(1e-15 + Math.log(e) / Math.LN10);
            return d3.round(e, bl - bm).toFixed(Math.max(0, bl - bm))
        }
    };

    function aB(e) {
        return e + ""
    }
    function a1(bn) {
        var bl = bn.lastIndexOf("."),
            bm = bl >= 0 ? bn.substring(bl) : (bl = bn.length, ""),
            e = [];
        while (bl > 0) {
            e.push(bn.substring(bl -= 3, bl + 3))
        }
        return e.reverse().join(",") + bm
    }
    var H = ag(2),
        y = ag(3);
    var at = {
        linear: function () {
            return a3
        },
        poly: ag,
        quad: function () {
            return H
        },
        cubic: function () {
            return y
        },
        sin: function () {
            return bg
        },
        exp: function () {
            return bf
        },
        circle: function () {
            return ba
        },
        elastic: aG,
        back: m,
        bounce: function () {
            return aQ
        }
    };
    var a2 = {
        "in": function (e) {
            return e
        },
        out: L,
        "in-out": Z,
        "out-in": function (e) {
            return Z(L(e))
        }
    };
    d3.ease = function (bl) {
        var bn = bl.indexOf("-"),
            bm = bn >= 0 ? bl.substring(0, bn) : bl,
            e = bn >= 0 ? bl.substring(bn + 1) : "in";
        return a2[e](at[bm].apply(null, Array.prototype.slice.call(arguments, 1)))
    };

    function L(e) {
        return function (bl) {
            return 1 - e(1 - bl)
        }
    }
    function Z(e) {
        return function (bl) {
            return 0.5 * (bl < 0.5 ? e(2 * bl) : (2 - e(2 - 2 * bl)))
        }
    }
    function a3(e) {
        return e
    }
    function ag(bl) {
        return function (e) {
            return Math.pow(e, bl)
        }
    }
    function bg(e) {
        return 1 - Math.cos(e * Math.PI / 2)
    }
    function bf(e) {
        return e ? Math.pow(2, 10 * (e - 1)) - 0.001 : 0
    }
    function ba(e) {
        return 1 - Math.sqrt(1 - e * e)
    }
    function aG(e, bm) {
        var bl;
        if (arguments.length < 2) {
            bm = 0.45
        }
        if (arguments.length < 1) {
            e = 1;
            bl = bm / 4
        } else {
            bl = bm / (2 * Math.PI) * Math.asin(1 / e)
        }
        return function (bn) {
            return 1 + e * Math.pow(2, 10 * -bn) * Math.sin((bn - bl) * 2 * Math.PI / bm)
        }
    }
    function m(e) {
        if (!e) {
            e = 1.70158
        }
        return function (bl) {
            return bl * bl * ((e + 1) * bl - e)
        }
    }
    function aQ(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
    }
    d3.event = null;
    d3.interpolate = function (bl, e) {
        var bm = d3.interpolators.length,
            bn;
        while (--bm >= 0 && !(bn = d3.interpolators[bm](bl, e))) {}
        return bn
    };
    d3.interpolateNumber = function (bl, e) {
        e -= bl;
        return function (bm) {
            return bl + e * bm
        }
    };
    d3.interpolateRound = function (bl, e) {
        e -= bl;
        return function (bm) {
            return Math.round(bl + e * bm)
        }
    };
    d3.interpolateString = function (br, bq) {
        var bn, bp, bo, bt = 0,
            bs = 0,
            bu = [],
            e = [],
            bm, bl;
        aM.lastIndex = 0;
        for (bp = 0; bn = aM.exec(bq); ++bp) {
            if (bn.index) {
                bu.push(bq.substring(bt, bs = bn.index))
            }
            e.push({
                i: bu.length,
                x: bn[0]
            });
            bu.push(null);
            bt = aM.lastIndex
        }
        if (bt < bq.length) {
            bu.push(bq.substring(bt))
        }
        for (bp = 0, bm = e.length;
        (bn = aM.exec(br)) && bp < bm; ++bp) {
            bl = e[bp];
            if (bl.x == bn[0]) {
                if (bl.i) {
                    if (bu[bl.i + 1] == null) {
                        bu[bl.i - 1] += bl.x;
                        bu.splice(bl.i, 1);
                        for (bo = bp + 1; bo < bm; ++bo) {
                            e[bo].i--
                        }
                    } else {
                        bu[bl.i - 1] += bl.x + bu[bl.i + 1];
                        bu.splice(bl.i, 2);
                        for (bo = bp + 1; bo < bm; ++bo) {
                            e[bo].i -= 2
                        }
                    }
                } else {
                    if (bu[bl.i + 1] == null) {
                        bu[bl.i] = bl.x
                    } else {
                        bu[bl.i] = bl.x + bu[bl.i + 1];
                        bu.splice(bl.i + 1, 1);
                        for (bo = bp + 1; bo < bm; ++bo) {
                            e[bo].i--
                        }
                    }
                }
                e.splice(bp, 1);
                bm--;
                bp--
            } else {
                bl.x = d3.interpolateNumber(parseFloat(bn[0]), parseFloat(bl.x))
            }
        }
        while (bp < bm) {
            bl = e.pop();
            if (bu[bl.i + 1] == null) {
                bu[bl.i] = bl.x
            } else {
                bu[bl.i] = bl.x + bu[bl.i + 1];
                bu.splice(bl.i + 1, 1)
            }
            bm--
        }
        if (bu.length === 1) {
            return bu[0] == null ? e[0].x : function () {
                return bq
            }
        }
        return function (bv) {
            for (bp = 0; bp < bm; ++bp) {
                bu[(bl = e[bp]).i] = bl.x(bv)
            }
            return bu.join("")
        }
    };
    d3.interpolateRgb = function (bl, e) {
        bl = d3.rgb(bl);
        e = d3.rgb(e);
        var bn = bl.r,
            bm = bl.g,
            bq = bl.b,
            bp = e.r - bn,
            bo = e.g - bm,
            bs = e.b - bq;
        return function (br) {
            return "rgb(" + Math.round(bn + bp * br) + "," + Math.round(bm + bo * br) + "," + Math.round(bq + bs * br) + ")"
        }
    };
    d3.interpolateHsl = function (bm, e) {
        bm = d3.hsl(bm);
        e = d3.hsl(e);
        var br = bm.h,
            bq = bm.s,
            bn = bm.l,
            bp = e.h - br,
            bo = e.s - bq,
            bl = e.l - bn;
        return function (bs) {
            return a8(br + bp * bs, bq + bo * bs, bn + bl * bs).toString()
        }
    };
    d3.interpolateArray = function (bo, bm) {
        var bl = [],
            br = [],
            bn = bo.length,
            e = bm.length,
            bq = Math.min(bo.length, bm.length),
            bp;
        for (bp = 0; bp < bq; ++bp) {
            bl.push(d3.interpolate(bo[bp], bm[bp]))
        }
        for (; bp < bn; ++bp) {
            br[bp] = bo[bp]
        }
        for (; bp < e; ++bp) {
            br[bp] = bm[bp]
        }
        return function (bs) {
            for (bp = 0; bp < bq; ++bp) {
                br[bp] = bl[bp](bs)
            }
            return br
        }
    };
    d3.interpolateObject = function (bl, e) {
        var bn = {},
            bo = {},
            bm;
        for (bm in bl) {
            if (bm in e) {
                bn[bm] = aO(bm)(bl[bm], e[bm])
            } else {
                bo[bm] = bl[bm]
            }
        }
        for (bm in e) {
            if (!(bm in bl)) {
                bo[bm] = e[bm]
            }
        }
        return function (bp) {
            for (bm in bn) {
                bo[bm] = bn[bm](bp)
            }
            return bo
        }
    };
    var aM = /[-+]?(?:\d+\.\d+|\d+\.|\.\d+|\d+)(?:[eE][-]?\d+)?/g,
        be = {
            background: 1,
            fill: 1,
            stroke: 1
        };

    function aO(e) {
        return e in be || /\bcolor\b/.test(e) ? d3.interpolateRgb : d3.interpolate
    }
    d3.interpolators = [d3.interpolateObject, function (bl, e) {
        return (e instanceof Array) && d3.interpolateArray(bl, e)
    }, function (bl, e) {
        return (typeof e === "string") && d3.interpolateString(String(bl), e)
    }, function (bl, e) {
        return (e in af || /^(#|rgb\(|hsl\()/.test(e)) && d3.interpolateRgb(String(bl), e)
    }, function (bl, e) {
        return (typeof e === "number") && d3.interpolateNumber(+bl, e)
    }];

    function q(bl, e) {
        e = 1 / (e - (bl = +bl));
        return function (bm) {
            return (bm - bl) * e
        }
    }
    function z(bl, e) {
        e = 1 / (e - (bl = +bl));
        return function (bm) {
            return Math.max(0, Math.min(1, (bm - bl) * e))
        }
    }
    d3.rgb = function (bm, bl, e) {
        return arguments.length === 1 ? aN("" + bm, aD, a8) : aD(~~bm, ~~bl, ~~e)
    };

    function aD(bm, bl, e) {
        return new aE(bm, bl, e)
    }
    function aE(bm, bl, e) {
        this.r = bm;
        this.g = bl;
        this.b = e
    }
    aE.prototype.brighter = function (bl) {
        bl = Math.pow(0.7, arguments.length ? bl : 1);
        var bo = this.r,
            bn = this.g,
            e = this.b,
            bm = 30;
        if (!bo && !bn && !e) {
            return aD(bm, bm, bm)
        }
        if (bo && bo < bm) {
            bo = bm
        }
        if (bn && bn < bm) {
            bn = bm
        }
        if (e && e < bm) {
            e = bm
        }
        return aD(Math.min(255, Math.floor(bo / bl)), Math.min(255, Math.floor(bn / bl)), Math.min(255, Math.floor(e / bl)))
    };
    aE.prototype.darker = function (e) {
        e = Math.pow(0.7, arguments.length ? e : 1);
        return aD(Math.max(0, Math.floor(e * this.r)), Math.max(0, Math.floor(e * this.g)), Math.max(0, Math.floor(e * this.b)))
    };
    aE.prototype.hsl = function () {
        return S(this.r, this.g, this.b)
    };
    aE.prototype.toString = function () {
        return "#" + au(this.r) + au(this.g) + au(this.b)
    };

    function au(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16)
    }
    function aN(bp, bn, bq) {
        var e = 0,
            bm = 0,
            bo = 0,
            bs, br, bl;
        bs = /([a-z]+)\((.*)\)/i.exec(bp);
        if (bs) {
            br = bs[2].split(",");
            switch (bs[1]) {
            case "hsl":
                return bq(parseFloat(br[0]), parseFloat(br[1]) / 100, parseFloat(br[2]) / 100);
            case "rgb":
                return bn(O(br[0]), O(br[1]), O(br[2]))
            }
        }
        if (bl = af[bp]) {
            return bn(bl.r, bl.g, bl.b)
        }
        if (bp != null && bp.charAt(0) === "#") {
            if (bp.length === 4) {
                e = bp.charAt(1);
                e += e;
                bm = bp.charAt(2);
                bm += bm;
                bo = bp.charAt(3);
                bo += bo
            } else {
                if (bp.length === 7) {
                    e = bp.substring(1, 3);
                    bm = bp.substring(3, 5);
                    bo = bp.substring(5, 7)
                }
            }
            e = parseInt(e, 16);
            bm = parseInt(bm, 16);
            bo = parseInt(bo, 16)
        }
        return bn(e, bm, bo)
    }
    function S(e, bo, bq) {
        var bm = Math.min(e /= 255, bo /= 255, bq /= 255),
            br = Math.max(e, bo, bq),
            bp = br - bm,
            bn, bs, bl = (br + bm) / 2;
        if (bp) {
            bs = bl < 0.5 ? bp / (br + bm) : bp / (2 - br - bm);
            if (e == br) {
                bn = (bo - bq) / bp + (bo < bq ? 6 : 0)
            } else {
                if (bo == br) {
                    bn = (bq - e) / bp + 2
                } else {
                    bn = (e - bo) / bp + 4
                }
            }
            bn *= 60
        } else {
            bs = bn = 0
        }
        return bi(bn, bs, bl)
    }
    function O(bl) {
        var e = parseFloat(bl);
        return bl.charAt(bl.length - 1) === "%" ? Math.round(e * 2.55) : e
    }
    var af = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    for (var aP in af) {
        af[aP] = aN(af[aP], aD, a8)
    }
    d3.hsl = function (bm, bl, e) {
        return arguments.length === 1 ? aN("" + bm, S, bi) : bi(+bm, +bl, +e)
    };

    function bi(bm, bl, e) {
        return new bj(bm, bl, e)
    }
    function bj(bm, bl, e) {
        this.h = bm;
        this.s = bl;
        this.l = e
    }
    bj.prototype.brighter = function (e) {
        e = Math.pow(0.7, arguments.length ? e : 1);
        return bi(this.h, this.s, this.l / e)
    };
    bj.prototype.darker = function (e) {
        e = Math.pow(0.7, arguments.length ? e : 1);
        return bi(this.h, this.s, e * this.l)
    };
    bj.prototype.rgb = function () {
        return a8(this.h, this.s, this.l)
    };
    bj.prototype.toString = function () {
        return "hsl(" + this.h + "," + this.s * 100 + "%," + this.l * 100 + "%)"
    };

    function a8(bp, bo, e) {
        var bn, bm;
        bp = bp % 360;
        if (bp < 0) {
            bp += 360
        }
        bo = bo < 0 ? 0 : bo > 1 ? 1 : bo;
        e = e < 0 ? 0 : e > 1 ? 1 : e;
        bm = e <= 0.5 ? e * (1 + bo) : e + bo - e * bo;
        bn = 2 * e - bm;

        function bl(br) {
            if (br > 360) {
                br -= 360
            } else {
                if (br < 0) {
                    br += 360
                }
            }
            if (br < 60) {
                return bn + (bm - bn) * br / 60
            }
            if (br < 180) {
                return bm
            }
            if (br < 240) {
                return bn + (bm - bn) * (240 - br) / 60
            }
            return bn
        }
        function bq(br) {
            return Math.round(bl(br) * 255)
        }
        return aD(bq(bp + 120), bq(bp), bq(bp - 120))
    }
    var ao = function (e, bl) {
            return bl.querySelector(e)
        },
        l = function (e, bl) {
            return v(bl.querySelectorAll(e))
        };
    if (typeof Sizzle === "function") {
        ao = function (e, bl) {
            return Sizzle(e, bl)[0]
        };
        l = function (e, bl) {
            return Sizzle.uniqueSort(Sizzle(e, bl))
        }
    }
    var i = P([[document]]);
    i[0].parentNode = document.documentElement;
    d3.select = function (e) {
        return typeof e === "string" ? i.select(e) : P([[e]])
    };
    d3.selectAll = function (e) {
        return typeof e === "string" ? i.selectAll(e) : P([v(e)])
    };

    function P(bl) {
        function e(bw) {
            var br = [],
                by, bp, bx, bs;
            for (var bu = 0, bt = bl.length; bu < bt; bu++) {
                bx = bl[bu];
                br.push(by = []);
                by.parentNode = bx.parentNode;
                for (var bv = 0, bq = bx.length; bv < bq; bv++) {
                    if (bs = bx[bv]) {
                        by.push(bp = bw(bs));
                        if (bp && "__data__" in bs) {
                            bp.__data__ = bs.__data__
                        }
                    } else {
                        by.push(null)
                    }
                }
            }
            return P(br)
        }
        function bn(br) {
            var bq = [],
                bx, bw, bs;
            for (var bu = 0, bt = bl.length; bu < bt; bu++) {
                bw = bl[bu];
                for (var bv = 0, bp = bw.length; bv < bp; bv++) {
                    if (bs = bw[bv]) {
                        bq.push(bx = br(bs));
                        bx.parentNode = bs
                    }
                }
            }
            return P(bq)
        }
        bl.select = function (bp) {
            return e(function (bq) {
                return ao(bp, bq)
            })
        };
        bl.selectAll = function (bp) {
            return bn(function (bq) {
                return l(bp, bq)
            })
        };
        bl.filter = function (bp) {
            var br = [],
                bx, bw, bs;
            for (var bu = 0, bt = bl.length; bu < bt; bu++) {
                bw = bl[bu];
                br.push(bx = []);
                bx.parentNode = bw.parentNode;
                for (var bv = 0, bq = bw.length; bv < bq; bv++) {
                    if ((bs = bw[bv]) && bp.call(bs, bs.__data__, bv)) {
                        bx.push(bs)
                    }
                }
            }
            return P(br)
        };
        bl.map = function (bu) {
            var bt, bs;
            for (var bq = 0, bp = bl.length; bq < bp; bq++) {
                bt = bl[bq];
                for (var br = 0, bv = bt.length; br < bv; br++) {
                    if (bs = bt[br]) {
                        bs.__data__ = bu.call(bs, bs.__data__, br)
                    }
                }
            }
            return bl
        };
        bl.data = function (bt, bp) {
            var bw = [],
                bs = [],
                bq = [];

            function bv(bM, bD) {
                var bF = 0,
                    bA = bM.length,
                    bC = bD.length,
                    bJ = Math.min(bA, bC),
                    bI = Math.max(bA, bC),
                    bO = [],
                    bL = [],
                    bH = [],
                    bB, bz;
                if (bp) {
                    var bG = {},
                        bN = [],
                        bK, bE = bD.length;
                    for (bF = 0; bF < bA; bF++) {
                        bK = bp.call(bB = bM[bF], bB.__data__, bF);
                        if (bK in bG) {
                            bH[bE++] = bM[bF]
                        } else {
                            bG[bK] = bB
                        }
                        bN.push(bK)
                    }
                    for (bF = 0; bF < bC; bF++) {
                        bB = bG[bK = bp.call(bD, bz = bD[bF], bF)];
                        if (bB) {
                            bB.__data__ = bz;
                            bO[bF] = bB;
                            bL[bF] = bH[bF] = null
                        } else {
                            bL[bF] = J(bz);
                            bO[bF] = bH[bF] = null
                        }
                        delete bG[bK]
                    }
                    for (bF = 0; bF < bA; bF++) {
                        if (bN[bF] in bG) {
                            bH[bF] = bM[bF]
                        }
                    }
                } else {
                    for (; bF < bJ; bF++) {
                        bB = bM[bF];
                        bz = bD[bF];
                        if (bB) {
                            bB.__data__ = bz;
                            bO[bF] = bB;
                            bL[bF] = bH[bF] = null
                        } else {
                            bL[bF] = J(bz);
                            bO[bF] = bH[bF] = null
                        }
                    }
                    for (; bF < bC; bF++) {
                        bL[bF] = J(bD[bF]);
                        bO[bF] = bH[bF] = null
                    }
                    for (; bF < bI; bF++) {
                        bH[bF] = bM[bF];
                        bL[bF] = bO[bF] = null
                    }
                }
                bL.parentNode = bO.parentNode = bH.parentNode = bM.parentNode;
                bw.push(bL);
                bs.push(bO);
                bq.push(bH)
            }
            var bu = -1,
                br = bl.length,
                by;
            if (typeof bt === "function") {
                while (++bu < br) {
                    bv(by = bl[bu], bt.call(by, by.parentNode.__data__, bu))
                }
            } else {
                while (++bu < br) {
                    bv(by = bl[bu], bt)
                }
            }
            var bx = P(bs);
            bx.enter = function () {
                return a9(bw)
            };
            bx.exit = function () {
                return P(bq)
            };
            return bx
        };
        bl.each = bm;

        function bm(bv) {
            for (var bq = 0, bp = bl.length; bq < bp; bq++) {
                var bt = bl[bq];
                for (var br = 0, bu = bt.length; br < bu; br++) {
                    var bs = bt[br];
                    if (bs) {
                        bv.call(bs, bs.__data__, br)
                    }
                }
            }
            return bl
        }
        function bo(bv) {
            for (var bq = 0, bp = bl.length; bq < bp; bq++) {
                var bt = bl[bq];
                for (var br = 0, bu = bt.length; br < bu; br++) {
                    var bs = bt[br];
                    if (bs) {
                        return bv.call(bs, bs.__data__, br)
                    }
                }
            }
            return null
        }
        bl.empty = function () {
            return !bo(function () {
                return true
            })
        };
        bl.node = function () {
            return bo(function () {
                return this
            })
        };
        bl.attr = function (bp, bq) {
            if (arguments.length < 2) {
                switch (typeof bp) {
                case "object":
                    for (bq in bp) {
                        bm(X(d3.ns.qualify(bq), bp[bq]))
                    }
                    return bl;
                case "function":
                    return bm(function () {
                        var br = bp.apply(this, arguments);
                        for (bq in br) {
                            am(d3.ns.qualify(bq), br[bq]).apply(this, arguments)
                        }
                    })
                }
                return bo(aj(d3.ns.qualify(bp)))
            }
            return bm(X(d3.ns.qualify(bp), bq))
        };
        bl.classed = function (bp, bs) {
            var bq = new RegExp("(^|\\s+)" + d3.requote(bp) + "(\\s+|$)", "g");
            if (arguments.length < 2) {
                return bo(function () {
                    if (bv = this.classList) {
                        return bv.contains(bp)
                    }
                    var bv = this.className;
                    bq.lastIndex = 0;
                    return bq.test(bv.baseVal != null ? bv.baseVal : bv)
                })
            }
            function bu() {
                if (bx = this.classList) {
                    return bx.add(bp)
                }
                var bx = this.className,
                    bv = bx.baseVal != null,
                    bw = bv ? bx.baseVal : bx;
                bq.lastIndex = 0;
                if (!bq.test(bw)) {
                    bw = aH(bw + " " + bp);
                    if (bv) {
                        bx.baseVal = bw
                    } else {
                        this.className = bw
                    }
                }
            }
            function bt() {
                if (bx = this.classList) {
                    return bx.remove(bp)
                }
                var bx = this.className,
                    bv = bx.baseVal != null,
                    bw = bv ? bx.baseVal : bx;
                bw = aH(bw.replace(bq, " "));
                if (bv) {
                    bx.baseVal = bw
                } else {
                    this.className = bw
                }
            }
            function br() {
                (bs.apply(this, arguments) ? bu : bt).call(this)
            }
            return bl.each(typeof bs === "function" ? br : bs ? bu : bt)
        };
        bl.style = function (br, bu, bs) {
            if (arguments.length < 3) {
                bs = ""
            }
            if (arguments.length < 2) {
                return bo(function () {
                    return window.getComputedStyle(this, null).getPropertyValue(br)
                })
            }
            function bq() {
                this.style.removeProperty(br)
            }
            function bt() {
                this.style.setProperty(br, bu, bs)
            }
            function bp() {
                var bv = bu.apply(this, arguments);
                if (bv == null) {
                    this.style.removeProperty(br)
                } else {
                    this.style.setProperty(br, bv, bs)
                }
            }
            return bl.each(bu == null ? bq : (typeof bu === "function" ? bp : bt))
        };
        bl.property = function (bq, bs) {
            bq = d3.ns.qualify(bq);
            if (arguments.length < 2) {
                return bo(function () {
                    return this[bq]
                })
            }
            function bp() {
                delete this[bq]
            }
            function br() {
                this[bq] = bs
            }
            function bt() {
                var bu = bs.apply(this, arguments);
                if (bu == null) {
                    delete this[bq]
                } else {
                    this[bq] = bu
                }
            }
            return bl.each(bs == null ? bp : (typeof bs === "function" ? bt : br))
        };
        bl.text = function (bq) {
            if (arguments.length < 1) {
                return bo(function () {
                    return this.textContent
                })
            }
            function bp() {
                this.textContent = bq
            }
            function br() {
                this.textContent = bq.apply(this, arguments)
            }
            return bl.each(typeof bq === "function" ? br : bp)
        };
        bl.html = function (br) {
            if (arguments.length < 1) {
                return bo(function () {
                    return this.innerHTML
                })
            }
            function bp() {
                this.innerHTML = br
            }
            function bq() {
                this.innerHTML = br.apply(this, arguments)
            }
            return bl.each(typeof br === "function" ? bq : bp)
        };
        bl.append = function (bq) {
            bq = d3.ns.qualify(bq);

            function bp(bs) {
                return bs.appendChild(document.createElement(bq))
            }
            function br(bs) {
                return bs.appendChild(document.createElementNS(bq.space, bq.local))
            }
            return e(bq.local ? br : bp)
        };
        bl.insert = function (bp, br) {
            bp = d3.ns.qualify(bp);

            function bq(bt) {
                return bt.insertBefore(document.createElement(bp), ao(br, bt))
            }
            function bs(bt) {
                return bt.insertBefore(document.createElementNS(bp.space, bp.local), ao(br, bt))
            }
            return e(bp.local ? bs : bq)
        };
        bl.remove = function () {
            return bl.each(function () {
                var bp = this.parentNode;
                if (bp) {
                    bp.removeChild(this)
                }
            })
        };
        bl.sort = function (bq) {
            bq = aX.apply(this, arguments);
            for (var br = 0, bp = bl.length; br < bp; br++) {
                var bv = bl[br];
                bv.sort(bq);
                for (var bs = 1, bw = bv.length, bu = bv[0]; bs < bw; bs++) {
                    var bt = bv[bs];
                    if (bt) {
                        if (bu) {
                            bu.parentNode.insertBefore(bt, bu.nextSibling)
                        }
                        bu = bt
                    }
                }
            }
            return bl
        };
        bl.on = function (bs, bu, bp) {
            if (arguments.length < 3) {
                bp = false
            }
            var br = bs.indexOf("."),
                bt = br === -1 ? bs : bs.substring(0, br),
                bq = "__on" + bs;
            return bl.each(function (by, bw) {
                if (this[bq]) {
                    this.removeEventListener(bt, this[bq], bp)
                }
                if (bu) {
                    this.addEventListener(bt, this[bq] = bv, bp)
                }
                var bx = this;

                function bv(bz) {
                    var bA = d3.event;
                    d3.event = bz;
                    try {
                        bu.call(this, bx.__data__, bw)
                    } finally {
                        d3.event = bA
                    }
                }
            })
        };
        bl.transition = function () {
            return aL(bl)
        };
        bl.call = aA;
        return bl
    }
    function a9(bl) {
        function e(bt) {
            var bo = [],
                bv, bm, bu, bp;
            for (var br = 0, bq = bl.length; br < bq; br++) {
                bu = bl[br];
                bo.push(bv = []);
                bv.parentNode = bu.parentNode;
                for (var bs = 0, bn = bu.length; bs < bn; bs++) {
                    if (bp = bu[bs]) {
                        bv.push(bm = bt(bu.parentNode));
                        bm.__data__ = bp.__data__
                    } else {
                        bv.push(null)
                    }
                }
            }
            return P(bo)
        }
        bl.append = function (bn) {
            bn = d3.ns.qualify(bn);

            function bm(bp) {
                return bp.appendChild(document.createElement(bn))
            }
            function bo(bp) {
                return bp.appendChild(document.createElementNS(bn.space, bn.local))
            }
            return e(bn.local ? bo : bm)
        };
        bl.insert = function (bm, bo) {
            bm = d3.ns.qualify(bm);

            function bn(bq) {
                return bq.insertBefore(document.createElement(bm), ao(bo, bq))
            }
            function bp(bq) {
                return bq.insertBefore(document.createElementNS(bm.space, bm.local), ao(bo, bq))
            }
            return e(bm.local ? bp : bn)
        };
        return bl
    }
    function aX(e) {
        if (!arguments.length) {
            e = d3.ascending
        }
        return function (bm, bl) {
            return e(bm && bm.__data__, bl && bl.__data__)
        }
    }
    function J(e) {
        return {
            __data__: e
        }
    }
    function aj(e) {
        return e.local ?
        function () {
            return this.getAttributeNS(e.space, e.local)
        } : function () {
            return this.getAttribute(e)
        }
    }
    function X(bl, bn) {
        function e() {
            var bo = bn.apply(this, arguments);
            if (bo == null) {
                this.removeAttribute(bl)
            } else {
                this.setAttribute(bl, bo)
            }
        }
        function bm() {
            var bo = bn.apply(this, arguments);
            if (bo == null) {
                this.removeAttributeNS(bl.space, bl.local)
            } else {
                this.setAttributeNS(bl.space, bl.local, bo)
            }
        }
        return typeof bn === "function" ? (bl.local ? bm : e) : am(bl, bn)
    }
    function am(bl, bo) {
        function e() {
            this.removeAttribute(bl)
        }
        function bp() {
            this.removeAttributeNS(bl.space, bl.local)
        }
        function bn() {
            this.setAttribute(bl, bo)
        }
        function bm() {
            this.setAttributeNS(bl.space, bl.local, bo)
        }
        return bo == null ? (bl.local ? bp : e) : (bl.local ? bm : bn)
    }
    d3.transition = i.transition;
    var K = 0,
        aI = 0;

    function aL(bm) {
        var bw = {},
            bo = aI || ++K,
            bu = {},
            br = [],
            bt = false,
            e = d3.dispatch("start", "end"),
            bv = [],
            bs = [],
            bq = [],
            bn, bp = d3.ease("cubic-in-out");
        bm.each(function () {
            (this.__transition__ || (this.__transition__ = {})).owner = bo
        });

        function bl(by) {
            var bx = true,
                bz = -1;
            bm.each(function () {
                if (bv[++bz] === 2) {
                    return
                }
                var bE = (by - bs[bz]) / bq[bz],
                    bB = this.__transition__,
                    bF, bD, bC = br[bz];
                if (bE < 1) {
                    bx = false;
                    if (bE < 0) {
                        return
                    }
                } else {
                    bE = 1
                }
                if (bv[bz]) {
                    if (!bB || bB.active !== bo) {
                        bv[bz] = 2;
                        return
                    }
                } else {
                    if (!bB || bB.active > bo) {
                        bv[bz] = 2;
                        return
                    } else {
                        bv[bz] = 1;
                        e.start.dispatch.apply(this, arguments);
                        bC = br[bz] = {};
                        bB.active = bo;
                        for (bD in bu) {
                            if (bF = bu[bD].apply(this, arguments)) {
                                bC[bD] = bF
                            }
                        }
                    }
                }
                bF = bp(bE);
                for (bD in bC) {
                    bC[bD].call(this, bF)
                }
                if (bE === 1) {
                    bv[bz] = 2;
                    if (bB.active === bo) {
                        var bA = bB.owner;
                        if (bA === bo) {
                            delete this.__transition__;
                            if (bt) {
                                this.parentNode.removeChild(this)
                            }
                        }
                        aI = bo;
                        e.end.dispatch.apply(this, arguments);
                        aI = 0;
                        bB.owner = bA
                    }
                }
            });
            return bx
        }
        bw.delay = function (by) {
            var bz = Infinity,
                bx = -1;
            if (typeof by === "function") {
                bm.each(function (bC, bB) {
                    var bA = bs[++bx] = +by.apply(this, arguments);
                    if (bA < bz) {
                        bz = bA
                    }
                })
            } else {
                bz = +by;
                bm.each(function (bB, bA) {
                    bs[++bx] = bz
                })
            }
            bd(bl, bz);
            return bw
        };
        bw.duration = function (by) {
            var bx = -1;
            if (typeof by === "function") {
                bn = 0;
                bm.each(function (bB, bA) {
                    var bz = bq[++bx] = +by.apply(this, arguments);
                    if (bz > bn) {
                        bn = bz
                    }
                })
            } else {
                bn = +by;
                bm.each(function (bA, bz) {
                    bq[++bx] = bn
                })
            }
            return bw
        };
        bw.ease = function (bx) {
            bp = typeof bx === "function" ? bx : d3.ease.apply(d3, arguments);
            return bw
        };
        bw.attrTween = function (bx, by) {
            function bz(bD, bB) {
                var bC = by.call(this, bD, bB, this.getAttribute(bx));
                return bC &&
                function (bE) {
                    this.setAttribute(bx, bC(bE))
                }
            }
            function bA(bD, bB) {
                var bC = by.call(this, bD, bB, this.getAttributeNS(bx.space, bx.local));
                return bC &&
                function (bE) {
                    this.setAttributeNS(bx.space, bx.local, bC(bE))
                }
            }
            bu["attr." + bx] = bx.local ? bA : bz;
            return bw
        };
        bw.attr = function (bx, by) {
            return bw.attrTween(bx, aT(by))
        };
        bw.styleTween = function (bx, bz, by) {
            if (arguments.length < 3) {
                by = null
            }
            function bA(bD, bB) {
                var bC = bz.call(this, bD, bB, window.getComputedStyle(this, null).getPropertyValue(bx));
                return bC &&
                function (bE) {
                    this.style.setProperty(bx, bC(bE), by)
                }
            }
            bu["style." + bx] = bA;
            return bw
        };
        bw.style = function (bx, bz, by) {
            if (arguments.length < 3) {
                by = null
            }
            return bw.styleTween(bx, aT(bz), by)
        };
        bw.text = function (bx) {
            bu.text = function (bz, by) {
                this.textContent = typeof bx === "function" ? bx.call(this, bz, by) : bx
            };
            return bw
        };
        bw.select = function (bz) {
            var bx, by = aL(bm.select(bz)).ease(bp);
            bx = -1;
            by.delay(function (bB, bA) {
                return bs[++bx]
            });
            bx = -1;
            by.duration(function (bB, bA) {
                return bq[++bx]
            });
            return by
        };
        bw.selectAll = function (bz) {
            var bx, by = aL(bm.selectAll(bz)).ease(bp);
            bx = -1;
            by.delay(function (bB, bA) {
                return bs[bA ? bx : ++bx]
            });
            bx = -1;
            by.duration(function (bB, bA) {
                return bq[bA ? bx : ++bx]
            });
            return by
        };
        bw.remove = function () {
            bt = true;
            return bw
        };
        bw.each = function (bx, by) {
            e[bx].add(by);
            return bw
        };
        bw.call = aA;
        return bw.delay(0).duration(250)
    }
    function aT(e) {
        return typeof e === "function" ?
        function (bo, bn, bl) {
            var bm = e.call(this, bo, bn) + "";
            return bl != bm && d3.interpolate(bl, bm)
        } : (e = e + "", function (bn, bm, bl) {
            return bl != e && d3.interpolate(bl, e)
        })
    }
    var A = null,
        ah, ap;
    d3.timer = function (e) {
        bd(e, 0)
    };

    function bd(bp, bl) {
        var e = Date.now(),
            bo = false,
            bn, bm = A;
        if (!isFinite(bl)) {
            return
        }
        while (bm) {
            if (bm.callback === bp) {
                bm.then = e;
                bm.delay = bl;
                bo = true;
                break
            }
            bn = bm;
            bm = bm.next
        }
        if (!bo) {
            A = {
                callback: bp,
                then: e,
                delay: bl,
                next: A
            }
        }
        if (!ah) {
            ap = clearTimeout(ap);
            ah = 1;
            ax(aR)
        }
    }
    function aR() {
        var e, bm = Date.now(),
            bn = A;
        while (bn) {
            e = bm - bn.then;
            if (e > bn.delay) {
                bn.flush = bn.callback(e)
            }
            bn = bn.next
        }
        var bl = a4() - bm;
        if (bl > 24) {
            if (isFinite(bl)) {
                clearTimeout(ap);
                ap = setTimeout(aR, bl)
            }
            ah = 0
        } else {
            ah = 1;
            ax(aR)
        }
    }
    d3.timer.flush = function () {
        var e, bl = Date.now(),
            bm = A;
        while (bm) {
            e = bl - bm.then;
            if (!bm.delay) {
                bm.flush = bm.callback(e)
            }
            bm = bm.next
        }
        a4()
    };

    function a4() {
        var bl = null,
            e = A,
            bm = Infinity;
        while (e) {
            if (e.flush) {
                e = bl ? bl.next = e.next : A = e.next
            } else {
                bm = Math.min(bm, e.then + e.delay);
                e = (bl = e).next
            }
        }
        return bm
    }
    var ax = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (e) {
        setTimeout(e, 17)
    };
    d3.scale = {};

    function w(bq, bo) {
        var bp = 0,
            bn = bq.length - 1,
            bm = bq[bp],
            bl = bq[bn],
            e;
        if (bl < bm) {
            e = bp;
            bp = bn;
            bn = e;
            e = bm;
            bm = bl;
            bl = e
        }
        bo = bo(bl - bm);
        bq[bp] = bo.floor(bm);
        bq[bn] = bo.ceil(bl);
        return bq
    }
    function al() {
        return Math
    }
    d3.scale.linear = function () {
        var bn = [0, 1],
            bo = [0, 1],
            bq = d3.interpolate,
            bp = false,
            bl, br;

        function e() {
            var bt = bn.length == 2 ? F : C,
                bu = bp ? z : q;
            bl = bt(bn, bo, bu, bq);
            br = bt(bo, bn, bu, d3.interpolate);
            return bm
        }
        function bm(bt) {
            return bl(bt)
        }
        bm.invert = function (bt) {
            return br(bt)
        };
        bm.domain = function (bt) {
            if (!arguments.length) {
                return bn
            }
            bn = bt.map(Number);
            return e()
        };
        bm.range = function (bt) {
            if (!arguments.length) {
                return bo
            }
            bo = bt;
            return e()
        };
        bm.rangeRound = function (bt) {
            return bm.range(bt).interpolate(d3.interpolateRound)
        };
        bm.clamp = function (bt) {
            if (!arguments.length) {
                return bp
            }
            bp = bt;
            return e()
        };
        bm.interpolate = function (bt) {
            if (!arguments.length) {
                return bq
            }
            bq = bt;
            return e()
        };

        function bs(bt) {
            var by = d3.min(bn),
                bu = d3.max(bn),
                bv = bu - by,
                bx = Math.pow(10, Math.floor(Math.log(bv / bt) / Math.LN10)),
                bw = bt / (bv / bx);
            if (bw <= 0.15) {
                bx *= 10
            } else {
                if (bw <= 0.35) {
                    bx *= 5
                } else {
                    if (bw <= 0.75) {
                        bx *= 2
                    }
                }
            }
            return {
                start: Math.ceil(by / bx) * bx,
                stop: Math.floor(bu / bx) * bx + bx * 0.5,
                step: bx
            }
        }
        bm.ticks = function (bt) {
            var bu = bs(bt);
            return d3.range(bu.start, bu.stop, bu.step)
        };
        bm.tickFormat = function (bt) {
            var bu = Math.max(0, -Math.floor(Math.log(bs(bt).step) / Math.LN10 + 0.01));
            return d3.format(",." + bu + "f")
        };
        bm.nice = function () {
            w(bn, o);
            return e()
        };
        return e()
    };

    function o(e) {
        e = Math.pow(10, Math.round(Math.log(e) / Math.LN10) - 1);
        return {
            floor: function (bl) {
                return Math.floor(bl / e) * e
            },
            ceil: function (bl) {
                return Math.ceil(bl / e) * e
            },
        }
    }
    function F(bo, e, bp, bm) {
        var bl = bp(bo[0], bo[1]),
            bn = bm(e[0], e[1]);
        return function (bq) {
            return bn(bl(bq))
        }
    }
    function C(bp, e, br, bn) {
        var bm = [],
            bo = [],
            bl = 0,
            bq = bp.length;
        while (++bl < bq) {
            bm.push(br(bp[bl - 1], bp[bl]));
            bo.push(bn(e[bl - 1], e[bl]))
        }
        return function (bs) {
            var bt = d3.bisect(bp, bs, 1, bp.length - 1) - 1;
            return bo[bt](bm[bt](bs))
        }
    }
    d3.scale.log = function () {
        var e = d3.scale.linear(),
            bl = ad,
            bm = bl.pow;

        function bn(bo) {
            return e(bl(bo))
        }
        bn.invert = function (bo) {
            return bm(e.invert(bo))
        };
        bn.domain = function (bo) {
            if (!arguments.length) {
                return e.domain().map(bm)
            }
            bl = (bo[0] || bo[1]) < 0 ? G : ad;
            bm = bl.pow;
            e.domain(bo.map(bl));
            return bn
        };
        bn.range = d3.rebind(bn, e.range);
        bn.rangeRound = d3.rebind(bn, e.rangeRound);
        bn.interpolate = d3.rebind(bn, e.interpolate);
        bn.clamp = d3.rebind(bn, e.clamp);
        bn.nice = function () {
            e.domain(w(e.domain(), al));
            return bn
        };
        bn.ticks = function () {
            var bu = e.domain(),
                bt = [];
            if (bu.every(isFinite)) {
                var bs = Math.floor(bu[0]),
                    br = Math.ceil(bu[1]),
                    bq = bm(bu[0]),
                    bp = bm(bu[1]);
                if (bl === G) {
                    bt.push(bm(bs));
                    for (; bs++ < br;) {
                        for (var bo = 9; bo > 0; bo--) {
                            bt.push(bm(bs) * bo)
                        }
                    }
                } else {
                    for (; bs < br; bs++) {
                        for (var bo = 1; bo < 10; bo++) {
                            bt.push(bm(bs) * bo)
                        }
                    }
                    bt.push(bm(bs))
                }
                for (bs = 0; bt[bs] < bq; bs++) {}
                for (br = bt.length; bt[br - 1] > bp; br--) {}
                bt = bt.slice(bs, br)
            }
            return bt
        };
        bn.tickFormat = function () {
            return function (bo) {
                return bo.toPrecision(1)
            }
        };
        return bn
    };

    function ad(e) {
        return Math.log(e) / Math.LN10
    }
    function G(e) {
        return -Math.log(-e) / Math.LN10
    }
    ad.pow = function (e) {
        return Math.pow(10, e)
    };
    G.pow = function (e) {
        return -Math.pow(10, -e)
    };
    d3.scale.pow = function () {
        var e = d3.scale.linear(),
            bl = d3.scale.linear(),
            bn = 1,
            bm = Number,
            bo = bm;

        function bp(bq) {
            return e(bm(bq))
        }
        bp.invert = function (bq) {
            return bo(e.invert(bq))
        };
        bp.domain = function (bq) {
            if (!arguments.length) {
                return e.domain().map(bo)
            }
            var br = (bq[0] || bq[1]) < 0 ? aJ : I;
            bm = br(bn);
            bo = br(1 / bn);
            e.domain(bq.map(bm));
            bl.domain(bq);
            return bp
        };
        bp.range = d3.rebind(bp, e.range);
        bp.rangeRound = d3.rebind(bp, e.rangeRound);
        bp.interpolate = d3.rebind(bp, e.interpolate);
        bp.clamp = d3.rebind(bp, e.clamp);
        bp.ticks = bl.ticks;
        bp.tickFormat = bl.tickFormat;
        bp.nice = function () {
            return bp.domain(w(bp.domain(), o))
        };
        bp.exponent = function (bq) {
            if (!arguments.length) {
                return bn
            }
            var br = bp.domain();
            bn = bq;
            return bp.domain(br)
        };
        return bp
    };

    function I(bl) {
        return function (e) {
            return Math.pow(e, bl)
        }
    }
    function aJ(bl) {
        return function (e) {
            return -Math.pow(-e, bl)
        }
    }
    d3.scale.sqrt = function () {
        return d3.scale.pow().exponent(0.5)
    };
    d3.scale.ordinal = function () {
        var bn = [],
            bm = {},
            e = [],
            bl = 0;

        function bo(bp) {
            var bq = bp in bm ? bm[bp] : (bm[bp] = bn.push(bp) - 1);
            return e[bq % e.length]
        }
        bo.domain = function (bp) {
            if (!arguments.length) {
                return bn
            }
            bn = bp;
            bm = {};
            var br = -1,
                bq = -1,
                bs = bn.length;
            while (++br < bs) {
                bp = bn[br];
                if (!(bp in bm)) {
                    bm[bp] = ++bq
                }
            }
            return bo
        };
        bo.range = function (bp) {
            if (!arguments.length) {
                return e
            }
            e = bp;
            return bo
        };
        bo.rangePoints = function (bp, bs) {
            if (arguments.length < 2) {
                bs = 0
            }
            var bt = bp[0],
                bq = bp[1],
                br = (bq - bt) / (bn.length - 1 + bs);
            e = bn.length == 1 ? [(bt + bq) / 2] : d3.range(bt + br * bs / 2, bq + br / 2, br);
            bl = 0;
            return bo
        };
        bo.rangeBands = function (bp, bs) {
            if (arguments.length < 2) {
                bs = 0
            }
            var bt = bp[0],
                bq = bp[1],
                br = (bq - bt) / (bn.length + bs);
            e = d3.range(bt + br * bs, bq, br);
            bl = br * (1 - bs);
            return bo
        };
        bo.rangeRoundBands = function (bp, bu) {
            if (arguments.length < 2) {
                bu = 0
            }
            var bv = bp[0],
                bq = bp[1],
                bt = bq - bv,
                bs = Math.floor(bt / (bn.length + bu)),
                br = bt - (bn.length - bu) * bs;
            e = d3.range(bv + Math.round(br / 2), bq, bs);
            bl = Math.round(bs * (1 - bu));
            return bo
        };
        bo.rangeBand = function () {
            return bl
        };
        return bo
    };
    d3.scale.category10 = function () {
        return d3.scale.ordinal().range(t)
    };
    d3.scale.category20 = function () {
        return d3.scale.ordinal().range(bh)
    };
    d3.scale.category20b = function () {
        return d3.scale.ordinal().range(aW)
    };
    d3.scale.category20c = function () {
        return d3.scale.ordinal().range(aU)
    };
    var t = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];
    var bh = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"];
    var aW = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"];
    var aU = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
    d3.scale.quantile = function () {
        var bm = [],
            bl = [],
            bn = [];

        function e() {
            var bp = 0,
                bs = bm.length,
                br = bl.length,
                bq;
            bn.length = Math.max(0, br - 1);
            while (++bp < br) {
                bn[bp - 1] = (bq = bs * bp / br) % 1 ? bm[~~bq] : (bm[bq = ~~bq] + bm[bq - 1]) / 2
            }
        }
        function bo(bp) {
            if (isNaN(bp = +bp)) {
                return NaN
            }
            return bl[d3.bisect(bn, bp)]
        }
        bo.domain = function (bp) {
            if (!arguments.length) {
                return bm
            }
            bm = bp.filter(function (bq) {
                return !isNaN(bq)
            }).sort(d3.ascending);
            e();
            return bo
        };
        bo.range = function (bp) {
            if (!arguments.length) {
                return bl
            }
            bl = bp;
            e();
            return bo
        };
        bo.quantiles = function () {
            return bn
        };
        return bo
    };
    d3.scale.quantize = function () {
        var bn = 0,
            bl = 1,
            bo = 2,
            bm = 1,
            e = [0, 1];

        function bp(bq) {
            return e[Math.max(0, Math.min(bm, Math.floor(bo * (bq - bn))))]
        }
        bp.domain = function (bq) {
            if (!arguments.length) {
                return [bn, bl]
            }
            bn = bq[0];
            bl = bq[1];
            bo = e.length / (bl - bn);
            return bp
        };
        bp.range = function (bq) {
            if (!arguments.length) {
                return e
            }
            e = bq;
            bo = e.length / (bl - bn);
            bm = e.length - 1;
            return bp
        };
        return bp
    };
    d3.svg = {};
    d3.svg.arc = function () {
        var bo = V,
            bn = E,
            bm = az,
            e = D;

        function bl() {
            var bs = bo.apply(this, arguments),
                br = bn.apply(this, arguments),
                bq = bm.apply(this, arguments) + W,
                bp = e.apply(this, arguments) + W,
                by = bp - bq,
                bv = by < Math.PI ? "0" : "1",
                bu = Math.cos(bq),
                bx = Math.sin(bq),
                bt = Math.cos(bp),
                bw = Math.sin(bp);
            return by >= aK ? (bs ? "M0," + br + "A" + br + "," + br + " 0 1,1 0," + (-br) + "A" + br + "," + br + " 0 1,1 0," + br + "M0," + bs + "A" + bs + "," + bs + " 0 1,1 0," + (-bs) + "A" + bs + "," + bs + " 0 1,1 0," + bs + "Z" : "M0," + br + "A" + br + "," + br + " 0 1,1 0," + (-br) + "A" + br + "," + br + " 0 1,1 0," + br + "Z") : (bs ? "M" + br * bu + "," + br * bx + "A" + br + "," + br + " 0 " + bv + ",1 " + br * bt + "," + br * bw + "L" + bs * bt + "," + bs * bw + "A" + bs + "," + bs + " 0 " + bv + ",0 " + bs * bu + "," + bs * bx + "Z" : "M" + br * bu + "," + br * bx + "A" + br + "," + br + " 0 " + bv + ",1 " + br * bt + "," + br * bw + "L0,0Z")
        }
        bl.innerRadius = function (bp) {
            if (!arguments.length) {
                return bo
            }
            bo = d3.functor(bp);
            return bl
        };
        bl.outerRadius = function (bp) {
            if (!arguments.length) {
                return bn
            }
            bn = d3.functor(bp);
            return bl
        };
        bl.startAngle = function (bp) {
            if (!arguments.length) {
                return bm
            }
            bm = d3.functor(bp);
            return bl
        };
        bl.endAngle = function (bp) {
            if (!arguments.length) {
                return e
            }
            e = d3.functor(bp);
            return bl
        };
        bl.centroid = function () {
            var bq = (bo.apply(this, arguments) + bn.apply(this, arguments)) / 2,
                bp = (bm.apply(this, arguments) + e.apply(this, arguments)) / 2 + W;
            return [Math.cos(bp) * bq, Math.sin(bp) * bq]
        };
        return bl
    };
    var W = -Math.PI / 2,
        aK = 2 * Math.PI - 0.000001;

    function V(e) {
        return e.innerRadius
    }
    function E(e) {
        return e.outerRadius
    }
    function az(e) {
        return e.startAngle
    }
    function D(e) {
        return e.endAngle
    }
    d3.svg.line = function () {
        var e = aZ,
            bp = aV,
            bm = "linear",
            bo = ab[bm],
            bn = 0.7;

        function bl(bq) {
            return bq.length < 1 ? null : "M" + bo(p(this, bq, e, bp), bn)
        }
        bl.x = function (bq) {
            if (!arguments.length) {
                return e
            }
            e = bq;
            return bl
        };
        bl.y = function (bq) {
            if (!arguments.length) {
                return bp
            }
            bp = bq;
            return bl
        };
        bl.interpolate = function (bq) {
            if (!arguments.length) {
                return bm
            }
            bo = ab[bm = bq];
            return bl
        };
        bl.tension = function (bq) {
            if (!arguments.length) {
                return bn
            }
            bn = bq;
            return bl
        };
        return bl
    };

    function p(bt, bo, bq, bp) {
        var bs = [],
            bn = -1,
            e = bo.length,
            bm = typeof bq === "function",
            bl = typeof bp === "function",
            br;
        if (bm && bl) {
            while (++bn < e) {
                bs.push([bq.call(bt, br = bo[bn], bn), bp.call(bt, br, bn)])
            }
        } else {
            if (bm) {
                while (++bn < e) {
                    bs.push([bq.call(bt, bo[bn], bn), bp])
                }
            } else {
                if (bl) {
                    while (++bn < e) {
                        bs.push([bq, bp.call(bt, bo[bn], bn)])
                    }
                } else {
                    while (++bn < e) {
                        bs.push([bq, bp])
                    }
                }
            }
        }
        return bs
    }
    function aZ(e) {
        return e[0]
    }
    function aV(e) {
        return e[1]
    }
    var ab = {
        linear: r,
        "step-before": U,
        "step-after": an,
        basis: bb,
        "basis-open": B,
        "basis-closed": R,
        cardinal: a,
        "cardinal-open": ay,
        "cardinal-closed": a0,
        monotone: aC
    };

    function r(bl) {
        var bn = [],
            e = 0,
            bo = bl.length,
            bm = bl[0];
        bn.push(bm[0], ",", bm[1]);
        while (++e < bo) {
            bn.push("L", (bm = bl[e])[0], ",", bm[1])
        }
        return bn.join("")
    }
    function U(bl) {
        var bn = [],
            e = 0,
            bo = bl.length,
            bm = bl[0];
        bn.push(bm[0], ",", bm[1]);
        while (++e < bo) {
            bn.push("V", (bm = bl[e])[1], "H", bm[0])
        }
        return bn.join("")
    }
    function an(bl) {
        var bn = [],
            e = 0,
            bo = bl.length,
            bm = bl[0];
        bn.push(bm[0], ",", bm[1]);
        while (++e < bo) {
            bn.push("H", (bm = bl[e])[0], "V", bm[1])
        }
        return bn.join("")
    }
    function ay(bl, e) {
        return bl.length < 4 ? r(bl) : bl[1] + u(bl.slice(1, bl.length - 1), ak(bl, e))
    }
    function a0(bl, e) {
        return bl.length < 3 ? r(bl) : bl[0] + u((bl.push(bl[0]), bl), ak([bl[bl.length - 2]].concat(bl, [bl[1]]), e))
    }
    function a(bm, bl, e) {
        return bm.length < 3 ? r(bm) : bm[0] + u(bm, ak(bm, bl))
    }
    function u(bq, bp) {
        if (bp.length < 1 || (bq.length != bp.length && bq.length != bp.length + 2)) {
            return r(bq)
        }
        var br = bq.length != bp.length,
            bu = "",
            bs = bq[0],
            e = bq[1],
            bo = bp[0],
            bt = bo,
            bm = 1;
        if (br) {
            bu += "Q" + (e[0] - bo[0] * 2 / 3) + "," + (e[1] - bo[1] * 2 / 3) + "," + e[0] + "," + e[1];
            bs = bq[1];
            bm = 2
        }
        if (bp.length > 1) {
            bt = bp[1];
            e = bq[bm];
            bm++;
            bu += "C" + (bs[0] + bo[0]) + "," + (bs[1] + bo[1]) + "," + (e[0] - bt[0]) + "," + (e[1] - bt[1]) + "," + e[0] + "," + e[1];
            for (var bl = 2; bl < bp.length; bl++, bm++) {
                e = bq[bm];
                bt = bp[bl];
                bu += "S" + (e[0] - bt[0]) + "," + (e[1] - bt[1]) + "," + e[0] + "," + e[1]
            }
        }
        if (br) {
            var bn = bq[bm];
            bu += "Q" + (e[0] + bt[0] * 2 / 3) + "," + (e[1] + bt[1] * 2 / 3) + "," + bn[0] + "," + bn[1]
        }
        return bu
    }
    function ak(bq, bo) {
        var bm = [],
            bn = (1 - bo) / 2,
            bs, br = bq[0],
            bp = bq[1],
            bl = 1,
            e = bq.length;
        while (++bl < e) {
            bs = br;
            br = bp;
            bp = bq[bl];
            bm.push([bn * (bp[0] - bs[0]), bn * (bp[1] - bs[1])])
        }
        return bm
    }
    function bb(br) {
        if (br.length < 3) {
            return r(br)
        }
        var bs = [],
            bm = 1,
            bl = br.length,
            bn = br[0],
            e = bn[0],
            bp = bn[1],
            bq = [e, e, e, (bn = br[1])[0]],
            bo = [bp, bp, bp, bn[1]];
        bs.push(e, ",", bp);
        k(bs, bq, bo);
        while (++bm < bl) {
            bn = br[bm];
            bq.shift();
            bq.push(bn[0]);
            bo.shift();
            bo.push(bn[1]);
            k(bs, bq, bo)
        }
        bm = -1;
        while (++bm < 2) {
            bq.shift();
            bq.push(bn[0]);
            bo.shift();
            bo.push(bn[1]);
            k(bs, bq, bo)
        }
        return bs.join("")
    }
    function B(bn) {
        if (bn.length < 4) {
            return r(bn)
        }
        var bp = [],
            bm = -1,
            bq = bn.length,
            bo, bl = [0],
            e = [0];
        while (++bm < 3) {
            bo = bn[bm];
            bl.push(bo[0]);
            e.push(bo[1])
        }
        bp.push(Y(c, bl) + "," + Y(c, e));
        --bm;
        while (++bm < bq) {
            bo = bn[bm];
            bl.shift();
            bl.push(bo[0]);
            e.shift();
            e.push(bo[1]);
            k(bp, bl, e)
        }
        return bp.join("")
    }
    function R(bo) {
        var bq, bn = -1,
            br = bo.length,
            e = br + 4,
            bp, bm = [],
            bl = [];
        while (++bn < 4) {
            bp = bo[bn % br];
            bm.push(bp[0]);
            bl.push(bp[1])
        }
        bq = [Y(c, bm), ",", Y(c, bl)];
        --bn;
        while (++bn < e) {
            bp = bo[bn % br];
            bm.shift();
            bm.push(bp[0]);
            bl.shift();
            bl.push(bp[1]);
            k(bq, bm, bl)
        }
        return bq.join("")
    }
    function Y(bl, e) {
        return bl[0] * e[0] + bl[1] * e[1] + bl[2] * e[2] + bl[3] * e[3]
    }
    var h = [0, 2 / 3, 1 / 3, 0],
        g = [0, 1 / 3, 2 / 3, 0],
        c = [0, 1 / 6, 2 / 3, 1 / 6];

    function k(bl, e, bm) {
        bl.push("C", Y(h, e), ",", Y(h, bm), ",", Y(g, e), ",", Y(g, bm), ",", Y(c, e), ",", Y(c, bm))
    }
    function b(bl, e) {
        return (e[1] - bl[1]) / (e[0] - bl[0])
    }
    function f(bn) {
        var bm = 0,
            bl = bn.length - 1,
            e = [],
            bq = bn[0],
            bp = bn[1],
            bo = e[0] = b(bq, bp);
        while (++bm < bl) {
            e[bm] = bo + (bo = b(bq = bp, bp = bn[bm + 1]))
        }
        e[bm] = bo;
        return e
    }
    function a6(br) {
        var bo = [],
            bn, bq, bp, bs, e = f(br),
            bm = -1,
            bl = br.length - 1;
        while (++bm < bl) {
            bn = b(br[bm], br[bm + 1]);
            if (Math.abs(bn) < 0.000001) {
                e[bm] = e[bm + 1] = 0
            } else {
                bq = e[bm] / bn;
                bp = e[bm + 1] / bn;
                bs = bq * bq + bp * bp;
                if (bs > 9) {
                    bs = bn * 3 / Math.sqrt(bs);
                    e[bm] = bs * bq;
                    e[bm + 1] = bs * bp
                }
            }
        }
        bm = -1;
        while (++bm <= bl) {
            bs = (br[Math.min(bl, bm + 1)][0] - br[Math.max(0, bm - 1)][0]) / (6 * (1 + e[bm] * e[bm]));
            bo.push([bs || 0, e[bm] * bs || 0])
        }
        return bo
    }
    function aC(e) {
        return e.length < 3 ? r(e) : e[0] + u(e, a6(e))
    }
    d3.svg.area = function () {
        var e = aZ,
            bp = a5,
            bn = aV,
            bl = "linear",
            bq = ab[bl],
            bm = 0.7;

        function bo(br) {
            return br.length < 1 ? null : "M" + bq(p(this, br, e, bn), bm) + "L" + bq(p(this, br, e, bp).reverse(), bm) + "Z"
        }
        bo.x = function (br) {
            if (!arguments.length) {
                return e
            }
            e = br;
            return bo
        };
        bo.y0 = function (br) {
            if (!arguments.length) {
                return bp
            }
            bp = br;
            return bo
        };
        bo.y1 = function (br) {
            if (!arguments.length) {
                return bn
            }
            bn = br;
            return bo
        };
        bo.interpolate = function (br) {
            if (!arguments.length) {
                return bl
            }
            bq = ab[bl = br];
            return bo
        };
        bo.tension = function (br) {
            if (!arguments.length) {
                return bm
            }
            bm = br;
            return bo
        };
        return bo
    };

    function a5() {
        return 0
    }
    d3.svg.chord = function () {
        var e = s,
            br = aY,
            bq = aa,
            bs = az,
            bo = D;

        function bp(bx, bv) {
            var bw = bt(this, e, bx, bv),
                bu = bt(this, br, bx, bv);
            return "M" + bw.p0 + bl(bw.r, bw.p1) + (bm(bw, bu) ? bn(bw.r, bw.p1, bw.r, bw.p0) : bn(bw.r, bw.p1, bu.r, bu.p0) + bl(bu.r, bu.p1) + bn(bu.r, bu.p1, bw.r, bw.p0)) + "Z"
        }
        function bt(bx, bA, bB, by) {
            var bw = bA.call(bx, bB, by),
                bz = bq.call(bx, bw, by),
                bv = bs.call(bx, bw, by) + W,
                bu = bo.call(bx, bw, by) + W;
            return {
                r: bz,
                a0: bv,
                a1: bu,
                p0: [bz * Math.cos(bv), bz * Math.sin(bv)],
                p1: [bz * Math.cos(bu), bz * Math.sin(bu)]
            }
        }
        function bm(bv, bu) {
            return bv.a0 == bu.a0 && bv.a1 == bu.a1
        }
        function bl(bu, bv) {
            return "A" + bu + "," + bu + " 0 0,1 " + bv
        }
        function bn(bv, bx, bu, bw) {
            return "Q 0,0 " + bw
        }
        bp.radius = function (bu) {
            if (!arguments.length) {
                return bq
            }
            bq = d3.functor(bu);
            return bp
        };
        bp.source = function (bu) {
            if (!arguments.length) {
                return e
            }
            e = d3.functor(bu);
            return bp
        };
        bp.target = function (bu) {
            if (!arguments.length) {
                return br
            }
            br = d3.functor(bu);
            return bp
        };
        bp.startAngle = function (bu) {
            if (!arguments.length) {
                return bs
            }
            bs = d3.functor(bu);
            return bp
        };
        bp.endAngle = function (bu) {
            if (!arguments.length) {
                return bo
            }
            bo = d3.functor(bu);
            return bp
        };
        return bp
    };

    function s(e) {
        return e.source
    }
    function aY(e) {
        return e.target
    }
    function aa(e) {
        return e.radius
    }
    function T(e) {
        return e.startAngle
    }
    function bc(e) {
        return e.endAngle
    }
    d3.svg.diagonal = function () {
        var bm = s,
            bn = aY,
            e = aS;

        function bl(bs, bp) {
            var bt = bm.call(this, bs, bp),
                bq = bn.call(this, bs, bp),
                bo = (bt.y + bq.y) / 2,
                br = [bt,
                {
                    x: bt.x,
                    y: bo
                }, {
                    x: bq.x,
                    y: bo
                }, bq];
            br = br.map(e);
            return "M" + br[0] + "C" + br[1] + " " + br[2] + " " + br[3]
        }
        bl.source = function (bo) {
            if (!arguments.length) {
                return bm
            }
            bm = d3.functor(bo);
            return bl
        };
        bl.target = function (bo) {
            if (!arguments.length) {
                return bn
            }
            bn = d3.functor(bo);
            return bl
        };
        bl.projection = function (bo) {
            if (!arguments.length) {
                return e
            }
            e = bo;
            return bl
        };
        return bl
    };

    function aS(e) {
        return [e.x, e.y]
    }
    d3.svg.mouse = function (e) {
        return aq(e, d3.event)
    };
    var bk = /WebKit/.test(navigator.userAgent) ? -1 : 0;

    function aq(bn, bp) {
        var bl = (bn.ownerSVGElement || bn).createSVGPoint();
        if ((bk < 0) && (window.scrollX || window.scrollY)) {
            var bo = d3.select(document.body).append("svg:svg").style("position", "absolute").style("top", 0).style("left", 0);
            var bm = bo[0][0].getScreenCTM();
            bk = !(bm.f || bm.e);
            bo.remove()
        }
        if (bk) {
            bl.x = bp.pageX;
            bl.y = bp.pageY
        } else {
            bl.x = bp.clientX;
            bl.y = bp.clientY
        }
        bl = bl.matrixTransform(bn.getScreenCTM().inverse());
        return [bl.x, bl.y]
    }
    d3.svg.touches = function (e) {
        var bl = d3.event.touches;
        return bl ? v(bl).map(function (bn) {
            var bm = aq(e, bn);
            bm.identifier = bn.identifier;
            return bm
        }) : []
    };
    d3.svg.symbol = function () {
        var bl = ai,
            e = Q;

        function bm(bo, bn) {
            return (N[bl.call(this, bo, bn)] || N.circle)(e.call(this, bo, bn))
        }
        bm.type = function (bn) {
            if (!arguments.length) {
                return bl
            }
            bl = d3.functor(bn);
            return bm
        };
        bm.size = function (bn) {
            if (!arguments.length) {
                return e
            }
            e = d3.functor(bn);
            return bm
        };
        return bm
    };

    function Q() {
        return 64
    }
    function ai() {
        return "circle"
    }
    var N = {
        circle: function (e) {
            var bl = Math.sqrt(e / Math.PI);
            return "M0," + bl + "A" + bl + "," + bl + " 0 1,1 0," + (-bl) + "A" + bl + "," + bl + " 0 1,1 0," + bl + "Z"
        },
        cross: function (e) {
            var bl = Math.sqrt(e / 5) / 2;
            return "M" + -3 * bl + "," + -bl + "H" + -bl + "V" + -3 * bl + "H" + bl + "V" + -bl + "H" + 3 * bl + "V" + bl + "H" + bl + "V" + 3 * bl + "H" + -bl + "V" + bl + "H" + -3 * bl + "Z"
        },
        diamond: function (e) {
            var bl = Math.sqrt(e / (2 * aF)),
                bm = bl * aF;
            return "M0," + -bl + "L" + bm + ",0 0," + bl + " " + -bm + ",0Z"
        },
        square: function (e) {
            var bl = Math.sqrt(e) / 2;
            return "M" + -bl + "," + -bl + "L" + bl + "," + -bl + " " + bl + "," + bl + " " + -bl + "," + bl + "Z"
        },
        "triangle-down": function (e) {
            var bm = Math.sqrt(e / av),
                bl = bm * av / 2;
            return "M0," + bl + "L" + bm + "," + -bl + " " + -bm + "," + -bl + "Z"
        },
        "triangle-up": function (e) {
            var bm = Math.sqrt(e / av),
                bl = bm * av / 2;
            return "M0," + -bl + "L" + bm + "," + bl + " " + -bm + "," + bl + "Z"
        }
    };
    d3.svg.symbolTypes = d3.keys(N);
    var av = Math.sqrt(3),
        aF = Math.tan(30 * Math.PI / 180)
})();
(function () {
    d3.layout = {};
    d3.layout.chord = function () {
        var af = {},
            ag, ad, ak, ac, aj = 0,
            aa, ab, ae;

        function ai() {
            var an = {},
                aq = [],
                az = d3.range(ac),
                av = [],
                ao, ax, am, ar, ap;
            ag = [];
            ad = [];
            ao = 0, ar = -1;
            while (++ar < ac) {
                ax = 0, ap = -1;
                while (++ap < ac) {
                    ax += ak[ar][ap]
                }
                aq.push(ax);
                av.push(d3.range(ac));
                ao += ax
            }
            if (aa) {
                az.sort(function (aB, aA) {
                    return aa(aq[aB], aq[aA])
                })
            }
            if (ab) {
                av.forEach(function (aB, aA) {
                    aB.sort(function (aD, aC) {
                        return ab(ak[aA][aD], ak[aA][aC])
                    })
                })
            }
            ao = (2 * Math.PI - aj * ac) / ao;
            ax = 0, ar = -1;
            while (++ar < ac) {
                am = ax, ap = -1;
                while (++ap < ac) {
                    var aw = az[ar],
                        au = av[ar][ap],
                        ay = ak[aw][au];
                    an[aw + "-" + au] = {
                        index: aw,
                        subindex: au,
                        startAngle: ax,
                        endAngle: ax += ay * ao,
                        value: ay
                    }
                }
                ad.push({
                    index: aw,
                    startAngle: am,
                    endAngle: ax,
                    value: (ax - am) / ao
                });
                ax += aj
            }
            ar = -1;
            while (++ar < ac) {
                ap = ar - 1;
                while (++ap < ac) {
                    var al = an[ar + "-" + ap],
                        at = an[ap + "-" + ar];
                    if (al.value || at.value) {
                        ag.push({
                            source: al,
                            target: at
                        })
                    }
                }
            }
            if (ae) {
                ah()
            }
        }
        function ah() {
            ag.sort(function (am, al) {
                am = Math.min(am.source.value, am.target.value);
                al = Math.min(al.source.value, al.target.value);
                return ae(am, al)
            })
        }
        af.matrix = function (al) {
            if (!arguments.length) {
                return ak
            }
            ac = (ak = al) && ak.length;
            ag = ad = null;
            return af
        };
        af.padding = function (al) {
            if (!arguments.length) {
                return aj
            }
            aj = al;
            ag = ad = null;
            return af
        };
        af.sortGroups = function (al) {
            if (!arguments.length) {
                return aa
            }
            aa = al;
            ag = ad = null;
            return af
        };
        af.sortSubgroups = function (al) {
            if (!arguments.length) {
                return ab
            }
            ab = al;
            ag = null;
            return af
        };
        af.sortChords = function (al) {
            if (!arguments.length) {
                return ae
            }
            ae = al;
            if (ag) {
                ah()
            }
            return af
        };
        af.chords = function () {
            if (!ag) {
                ai()
            }
            return ag
        };
        af.groups = function () {
            if (!ad) {
                ai()
            }
            return ad
        };
        return af
    };
    d3.layout.force = function () {
        var ad = {},
            ac = d3.dispatch("tick"),
            aq = [1, 1],
            ah, aj = 0.9,
            ab = 20,
            ak = -30,
            ap = 0.1,
            af = 0.8,
            ae, aa, ao, am;

        function al(at, ar) {
            return function (aA, av, az, au, ay) {
                if (aA.point !== at) {
                    var aC = aA.cx - at.x,
                        aB = aA.cy - at.y,
                        ax = 1 / Math.sqrt(aC * aC + aB * aB);
                    if ((au - av) * ax < af) {
                        var aw = ar * aA.count * ax * ax;
                        at.x += aC * aw;
                        at.y += aB * aw;
                        return true
                    }
                    if (aA.point && isFinite(ax)) {
                        var aw = ar * ax * ax;
                        at.x += aC * aw;
                        at.y += aB * aw
                    }
                }
            }
        }
        function ai() {
            var au = aa.length,
                av = ao.length,
                ar = d3.geom.quadtree(aa),
                ay, at, aD, aC, ax, aB, aA;
            for (ay = 0; ay < av; ++ay) {
                at = ao[ay];
                aD = at.source;
                aC = at.target;
                aB = aC.x - aD.x;
                aA = aC.y - aD.y;
                if (ax = (aB * aB + aA * aA)) {
                    ax = ah * ((ax = Math.sqrt(ax)) - ab) / ax;
                    aB *= ax;
                    aA *= ax;
                    aC.x -= aB;
                    aC.y -= aA;
                    aD.x += aB;
                    aD.y += aA
                }
            }
            var aw = ah * ap;
            aB = aq[0] / 2;
            aA = aq[1] / 2;
            ay = -1;
            while (++ay < au) {
                at = aa[ay];
                at.x += (aB - at.x) * aw;
                at.y += (aA - at.y) * aw
            }
            r(ar);
            var az = ah * ak;
            ay = -1;
            while (++ay < au) {
                ar.visit(al(aa[ay], az))
            }
            ay = -1;
            while (++ay < au) {
                at = aa[ay];
                if (at.fixed) {
                    at.x = at.px;
                    at.y = at.py
                } else {
                    at.x -= (at.px - (at.px = at.x)) * aj;
                    at.y -= (at.py - (at.py = at.y)) * aj
                }
            }
            ac.tick.dispatch({
                type: "tick",
                alpha: ah
            });
            return (ah *= 0.99) < 0.005
        }
        ad.on = function (ar, at) {
            ac[ar].add(at);
            return ad
        };
        ad.nodes = function (ar) {
            if (!arguments.length) {
                return aa
            }
            aa = ar;
            return ad
        };
        ad.links = function (ar) {
            if (!arguments.length) {
                return ao
            }
            ao = ar;
            return ad
        };
        ad.size = function (ar) {
            if (!arguments.length) {
                return aq
            }
            aq = ar;
            return ad
        };
        ad.distance = function (ar) {
            if (!arguments.length) {
                return ab
            }
            ab = ar;
            return ad
        };
        ad.drag = function (ar) {
            if (!arguments.length) {
                return aj
            }
            aj = ar;
            return ad
        };
        ad.charge = function (ar) {
            if (!arguments.length) {
                return ak
            }
            ak = ar;
            return ad
        };
        ad.gravity = function (ar) {
            if (!arguments.length) {
                return ap
            }
            ap = ar;
            return ad
        };
        ad.theta = function (ar) {
            if (!arguments.length) {
                return af
            }
            af = ar;
            return ad
        };
        ad.start = function () {
            var aw, av, at = aa.length,
                au = ao.length,
                az = aq[0],
                ay = aq[1],
                aB, ar;
            for (aw = 0; aw < at; ++aw) {
                (ar = aa[aw]).index = aw
            }
            for (aw = 0; aw < au; ++aw) {
                ar = ao[aw];
                if (typeof ar.source == "number") {
                    ar.source = aa[ar.source]
                }
                if (typeof ar.target == "number") {
                    ar.target = aa[ar.target]
                }
            }
            for (aw = 0; aw < at; ++aw) {
                ar = aa[aw];
                if (isNaN(ar.x)) {
                    ar.x = ax("x", az)
                }
                if (isNaN(ar.y)) {
                    ar.y = ax("y", ay)
                }
                if (isNaN(ar.px)) {
                    ar.px = ar.x
                }
                if (isNaN(ar.py)) {
                    ar.py = ar.y
                }
            }
            function ax(aH, aG) {
                var aF = aA(aw),
                    aE = -1,
                    aD = aF.length,
                    aC;
                while (++aE < aD) {
                    if (!isNaN(aC = aF[aE][aH])) {
                        return aC
                    }
                }
                return Math.random() * aG
            }
            function aA() {
                if (!aB) {
                    aB = [];
                    for (av = 0; av < at; ++av) {
                        aB[av] = []
                    }
                    for (av = 0; av < au; ++av) {
                        var aC = ao[av];
                        aB[aC.source.index].push(aC.target);
                        aB[aC.target.index].push(aC.source)
                    }
                }
                return aB[aw]
            }
            return ad.resume()
        };
        ad.resume = function () {
            ah = 0.1;
            d3.timer(ai);
            return ad
        };
        ad.stop = function () {
            ah = 0;
            return ad
        };
        ad.drag = function () {
            this.on("mouseover.force", p).on("mouseout.force", W).on("mousedown.force", N);
            d3.select(window).on("mousemove.force", an).on("mouseup.force", ag, true).on("click.force", e, true);
            return ad
        };

        function an() {
            if (!k) {
                return
            }
            var at = l.parentNode;
            if (!at) {
                k.fixed = false;
                k = l = null;
                return
            }
            var ar = d3.svg.mouse(at);
            A = true;
            k.px = ar[0];
            k.py = ar[1];
            ad.resume()
        }
        function ag() {
            if (!k) {
                return
            }
            if (A) {
                s = true;
                O()
            }
            an();
            k.fixed = false;
            k = l = null
        }
        return ad
    };
    var k, A, s, l;

    function p(aa) {
        aa.fixed = true
    }
    function W(aa) {
        if (aa !== k) {
            aa.fixed = false
        }
    }
    function N(ab, aa) {
        (k = ab).fixed = true;
        A = false;
        l = this;
        O()
    }
    function e() {
        if (s) {
            O();
            s = false
        }
    }
    function O() {
        d3.event.stopPropagation();
        d3.event.preventDefault()
    }
    function r(ab) {
        var aa = 0,
            ac = 0;
        ab.count = 0;
        if (!ab.leaf) {
            ab.nodes.forEach(function (ad) {
                r(ad);
                ab.count += ad.count;
                aa += ad.count * ad.cx;
                ac += ad.count * ad.cy
            })
        }
        if (ab.point) {
            if (!ab.leaf) {
                ab.point.x += Math.random() - 0.5;
                ab.point.y += Math.random() - 0.5
            }
            ab.count++;
            aa += ab.point.x;
            ac += ab.point.y
        }
        ab.cx = aa / ab.count;
        ab.cy = ac / ab.count
    }
    d3.layout.partition = function () {
        var ac = d3.layout.hierarchy(),
            ad = [1, 1];

        function aa(ah, al, an, am) {
            var af = ah.children;
            ah.x = al;
            ah.y = ah.depth * am;
            ah.dx = an;
            ah.dy = am;
            if (af) {
                var ai = -1,
                    ag = af.length,
                    ak, aj;
                an /= ah.value;
                while (++ai < ag) {
                    aa(ak = af[ai], al, aj = ak.value * an, am);
                    al += aj
                }
            }
        }
        function ae(ah) {
            var ag = ah.children,
                ai = 0;
            if (ag) {
                var af = -1,
                    aj = ag.length;
                while (++af < aj) {
                    ai = Math.max(ai, ae(ag[af]))
                }
            }
            return 1 + ai
        }
        function ab(ah, ag) {
            var af = ac.call(this, ah, ag);
            aa(af[0], 0, ad[0], ad[1] / ae(af[0]));
            return af
        }
        ab.size = function (af) {
            if (!arguments.length) {
                return ad
            }
            ad = af;
            return ab
        };
        return t(ab, ac)
    };
    d3.layout.pie = function () {
        var ae = Number,
            ad = null,
            ac = 0,
            ab = 2 * Math.PI;

        function aa(al, aj) {
            var af = +(typeof ac === "function" ? ac.apply(this, arguments) : ac);
            var ah = (typeof ab === "function" ? ab.apply(this, arguments) : ab) - ac;
            var ai = d3.range(al.length);
            if (ad != null) {
                ai.sort(function (an, am) {
                    return ad(al[an], al[am])
                })
            }
            var ag = al.map(ae);
            ah /= ag.reduce(function (am, an) {
                return am + an
            }, 0);
            var ak = ai.map(function (am) {
                return {
                    value: d = ag[am],
                    startAngle: af,
                    endAngle: af += d * ah
                }
            });
            return al.map(function (an, am) {
                return ak[ai[am]]
            })
        }
        aa.value = function (af) {
            if (!arguments.length) {
                return ae
            }
            ae = af;
            return aa
        };
        aa.sort = function (af) {
            if (!arguments.length) {
                return ad
            }
            ad = af;
            return aa
        };
        aa.startAngle = function (af) {
            if (!arguments.length) {
                return ac
            }
            ac = af;
            return aa
        };
        aa.endAngle = function (af) {
            if (!arguments.length) {
                return ab
            }
            ab = af;
            return aa
        };
        return aa
    };
    d3.layout.stack = function () {
        var ad = Object,
            ac = i["default"],
            af = q.zero,
            ae = a,
            ab = K,
            ag = I;

        function aa(ao, aq) {
            var ap = ao.map(function (au, at) {
                return ad.call(aa, au, at)
            });
            var ar = ap.map(function (au, at) {
                return au.map(function (av, aw) {
                    return [ab.call(aa, av, aw), ag.call(aa, av, aw)]
                })
            });
            var al = ac.call(aa, ar, aq);
            ap = d3.permute(ap, al);
            ar = d3.permute(ar, al);
            var ak = af.call(aa, ar, aq);
            var ai = ap.length,
                aj = ap[0].length,
                an, am, ah;
            for (am = 0; am < aj; ++am) {
                ae.call(aa, ap[0][am], ah = ak[am], ar[0][am][1]);
                for (an = 1; an < ai; ++an) {
                    ae.call(aa, ap[an][am], ah += ar[an - 1][am][1], ar[an][am][1])
                }
            }
            return ao
        }
        aa.values = function (ah) {
            if (!arguments.length) {
                return ad
            }
            ad = ah;
            return aa
        };
        aa.order = function (ah) {
            if (!arguments.length) {
                return ac
            }
            ac = typeof ah === "function" ? ah : i[ah];
            return aa
        };
        aa.offset = function (ah) {
            if (!arguments.length) {
                return af
            }
            af = typeof ah === "function" ? ah : q[ah];
            return aa
        };
        aa.x = function (ah) {
            if (!arguments.length) {
                return ab
            }
            ab = ah;
            return aa
        };
        aa.y = function (ah) {
            if (!arguments.length) {
                return ag
            }
            ag = ah;
            return aa
        };
        aa.out = function (ah) {
            if (!arguments.length) {
                return ae
            }
            ae = ah;
            return aa
        };
        return aa
    };

    function K(aa) {
        return aa.x
    }
    function I(aa) {
        return aa.y
    }
    function a(ab, aa, ac) {
        ab.y0 = aa;
        ab.y = ac
    }
    var i = {
        "inside-out": function (ae) {
            var ac = ae.length,
                af, ad, aj = ae.map(J),
                ag = ae.map(u),
                ah = d3.range(ac).sort(function (am, al) {
                    return aj[am] - aj[al]
                }),
                ai = 0,
                aa = 0,
                ak = [],
                ab = [];
            for (af = 0; af < ac; ++af) {
                ad = ah[af];
                if (ai < aa) {
                    ai += ag[ad];
                    ak.push(ad)
                } else {
                    aa += ag[ad];
                    ab.push(ad)
                }
            }
            return ab.reverse().concat(ak)
        },
        reverse: function (aa) {
            return d3.range(aa.length).reverse()
        },
        "default": function (aa) {
            return d3.range(aa.length)
        }
    };
    var q = {
        silhouette: function (ae) {
            var ab = ae.length,
                ac = ae[0].length,
                ag = [],
                ah = 0,
                af, ad, aa, ai = [];
            for (ad = 0; ad < ac; ++ad) {
                for (af = 0, aa = 0; af < ab; af++) {
                    aa += ae[af][ad][1]
                }
                if (aa > ah) {
                    ah = aa
                }
                ag.push(aa)
            }
            for (ad = 0; ad < ac; ++ad) {
                ai[ad] = (ah - ag[ad]) / 2
            }
            return ai
        },
        wiggle: function (ag) {
            var ab = ag.length,
                ak = ag[0],
                ac = ak.length,
                ai = 0,
                ah, af, ae, an, am, aj, ao, aa, ad, al = [];
            al[0] = aa = ad = 0;
            for (af = 1; af < ac; ++af) {
                for (ah = 0, an = 0; ah < ab; ++ah) {
                    an += ag[ah][af][1]
                }
                for (ah = 0, am = 0, ao = ak[af][0] - ak[af - 1][0]; ah < ab; ++ah) {
                    for (ae = 0, aj = (ag[ah][af][1] - ag[ah][af - 1][1]) / (2 * ao); ae < ah; ++ae) {
                        aj += (ag[ae][af][1] - ag[ae][af - 1][1]) / ao
                    }
                    am += aj * ag[ah][af][1]
                }
                al[af] = aa -= an ? am / an * ao : 0;
                if (aa < ad) {
                    ad = aa
                }
            }
            for (af = 0; af < ac; ++af) {
                al[af] -= ad
            }
            return al
        },
        expand: function (af) {
            var ah = af.length,
                aa = af[0].length,
                ab = 1 / ah,
                ad, ac, ag, ae = [];
            for (ac = 0; ac < aa; ++ac) {
                for (ad = 0, ag = 0; ad < ah; ad++) {
                    ag += af[ad][ac][1]
                }
                if (ag) {
                    for (ad = 0; ad < ah; ad++) {
                        af[ad][ac][1] /= ag
                    }
                } else {
                    for (ad = 0; ad < ah; ad++) {
                        af[ad][ac][1] = ab
                    }
                }
            }
            for (ac = 0; ac < aa; ++ac) {
                ae[ac] = 0
            }
            return ae
        },
        zero: function (ad) {
            var ab = -1,
                aa = ad[0].length,
                ac = [];
            while (++ab < aa) {
                ac[ab] = 0
            }
            return ac
        }
    };

    function J(af) {
        var ad = 1,
            ac = 0,
            ab = af[0][1],
            aa, ae = af.length;
        for (; ad < ae; ++ad) {
            if ((aa = af[ad][1]) > ab) {
                ac = ad;
                ab = aa
            }
        }
        return ac
    }
    function u(aa) {
        return aa.reduce(D, 0)
    }
    function D(aa, ab) {
        return aa + ab[1]
    }
    d3.layout.histogram = function () {
        var ae = true,
            ab = Number,
            aa = V,
            ac = E;

        function ad(ai, aj) {
            var ao = [],
                am = ai.map(ab, this),
                ak = aa.call(this, am, aj),
                an = ac.call(this, ak, am, aj),
                ap, aj = -1,
                af = am.length,
                ag = an.length - 1,
                ah = ae ? 1 / af : 1,
                al;
            while (++aj < ag) {
                ap = ao[aj] = [];
                ap.dx = an[aj + 1] - (ap.x = an[aj]);
                ap.y = 0
            }
            aj = -1;
            while (++aj < af) {
                al = am[aj];
                if ((al >= ak[0]) && (al <= ak[1])) {
                    ap = ao[d3.bisect(an, al, 1, ag) - 1];
                    ap.y += ah;
                    ap.push(ai[aj])
                }
            }
            return ao
        }
        ad.value = function (af) {
            if (!arguments.length) {
                return ab
            }
            ab = af;
            return ad
        };
        ad.range = function (af) {
            if (!arguments.length) {
                return aa
            }
            aa = d3.functor(af);
            return ad
        };
        ad.bins = function (af) {
            if (!arguments.length) {
                return ac
            }
            ac = typeof af === "number" ?
            function (ag) {
                return Y(ag, af)
            } : d3.functor(af);
            return ad
        };
        ad.frequency = function (af) {
            if (!arguments.length) {
                return ae
            }
            ae = !! af;
            return ad
        };
        return ad
    };

    function E(ab, aa) {
        return Y(ab, Math.ceil(Math.log(aa.length) / Math.LN2 + 1))
    }
    function Y(ad, af) {
        var ac = -1,
            ab = +ad[0],
            aa = (ad[1] - ab) / af,
            ae = [];
        while (++ac <= af) {
            ae[ac] = aa * ac + ab
        }
        return ae
    }
    function V(aa) {
        return [d3.min(aa), d3.max(aa)]
    }
    d3.layout.hierarchy = function () {
        var ac = C,
            ab = L,
            ae = U;

        function ad(al, ak, ag) {
            var an = ab.call(aa, al, ak),
                ai = {
                    depth: ak,
                    data: al
                };
            ag.push(ai);
            if (an) {
                var am = -1,
                    ah = an.length,
                    ao = ai.children = [],
                    ap = 0,
                    aj = ak + 1;
                while (++am < ah) {
                    d = ad(an[am], aj, ag);
                    d.parent = ai;
                    ao.push(d);
                    ap += d.value
                }
                if (ac) {
                    ao.sort(ac)
                }
                if (ae) {
                    ai.value = ap
                }
            } else {
                if (ae) {
                    ai.value = ae.call(aa, al, ak)
                }
            }
            return ai
        }
        function af(ak, al) {
            var aj = ak.children,
                ag = 0;
            if (aj) {
                var ai = -1,
                    am = aj.length,
                    ah = al + 1;
                while (++ai < am) {
                    ag += af(aj[ai], ah)
                }
            } else {
                if (ae) {
                    ag = ae.call(aa, ak.data, al)
                }
            }
            if (ae) {
                ak.value = ag
            }
            return ag
        }
        function aa(ah) {
            var ag = [];
            ad(ah, 0, ag);
            return ag
        }
        aa.sort = function (ag) {
            if (!arguments.length) {
                return ac
            }
            ac = ag;
            return aa
        };
        aa.children = function (ag) {
            if (!arguments.length) {
                return ab
            }
            ab = ag;
            return aa
        };
        aa.value = function (ag) {
            if (!arguments.length) {
                return ae
            }
            ae = ag;
            return aa
        };
        aa.revalue = function (ag) {
            af(ag, 0);
            return ag
        };
        return aa
    };

    function t(ab, aa) {
        ab.sort = d3.rebind(ab, aa.sort);
        ab.children = d3.rebind(ab, aa.children);
        ab.links = T;
        ab.value = d3.rebind(ab, aa.value);
        return ab
    }
    function L(aa) {
        return aa.children
    }
    function U(aa) {
        return aa.value
    }
    function C(ab, aa) {
        return aa.value - ab.value
    }
    function T(aa) {
        return d3.merge(aa.map(function (ab) {
            return (ab.children || []).map(function (ac) {
                return {
                    source: ab,
                    target: ac
                }
            })
        }))
    }
    d3.layout.pack = function () {
        var aa = d3.layout.hierarchy().sort(Z),
            ac = [1, 1];

        function ab(aj, ah) {
            var ag = aa.call(this, aj, ah),
                ae = ag[0];
            ae.x = 0;
            ae.y = 0;
            y(ae);
            var ad = ac[0],
                ai = ac[1],
                af = 1 / Math.max(2 * ae.r / ad, 2 * ae.r / ai);
            F(ae, ad / 2, ai / 2, af);
            return ag
        }
        ab.size = function (ad) {
            if (!arguments.length) {
                return ac
            }
            ac = ad;
            return ab
        };
        return t(ab, aa)
    };

    function Z(ab, aa) {
        return ab.value - aa.value
    }
    function z(ab, aa) {
        var ac = ab._pack_next;
        ab._pack_next = aa;
        aa._pack_prev = ab;
        aa._pack_next = ac;
        ac._pack_prev = aa
    }
    function Q(ab, aa) {
        ab._pack_next = aa;
        aa._pack_prev = ab
    }
    function X(ac, aa) {
        var ad = aa.x - ac.x,
            ab = aa.y - ac.y,
            ae = ac.r + aa.r;
        return (ae * ae - ad * ad - ab * ab) > 0.001
    }
    function H(ak) {
        var ap = Infinity,
            au = -Infinity,
            aa = Infinity,
            ae = -Infinity,
            aj = ak.length,
            at, ar, aq, an, am;

        function ac(av) {
            ap = Math.min(av.x - av.r, ap);
            au = Math.max(av.x + av.r, au);
            aa = Math.min(av.y - av.r, aa);
            ae = Math.max(av.y + av.r, ae)
        }
        ak.forEach(n);
        at = ak[0];
        at.x = -at.r;
        at.y = 0;
        ac(at);
        if (aj > 1) {
            ar = ak[1];
            ar.x = ar.r;
            ar.y = 0;
            ac(ar);
            if (aj > 2) {
                aq = ak[2];
                j(at, ar, aq);
                ac(aq);
                z(at, aq);
                at._pack_prev = aq;
                z(aq, ar);
                ar = at._pack_next;
                for (var ao = 3; ao < aj; ao++) {
                    j(at, ar, aq = ak[ao]);
                    var ab = 0,
                        af = 1,
                        ad = 1;
                    for (an = ar._pack_next; an !== ar; an = an._pack_next, af++) {
                        if (X(an, aq)) {
                            ab = 1;
                            break
                        }
                    }
                    if (ab == 1) {
                        for (am = at._pack_prev; am !== an._pack_prev; am = am._pack_prev, ad++) {
                            if (X(am, aq)) {
                                if (ad < af) {
                                    ab = -1;
                                    an = am
                                }
                                break
                            }
                        }
                    }
                    if (ab == 0) {
                        z(at, aq);
                        ar = aq;
                        ac(aq)
                    } else {
                        if (ab > 0) {
                            Q(at, an);
                            ar = an;
                            ao--
                        } else {
                            Q(an, ar);
                            at = an;
                            ao--
                        }
                    }
                }
            }
        }
        var ah = (ap + au) / 2,
            ag = (aa + ae) / 2,
            ai = 0;
        for (var ao = 0; ao < aj; ao++) {
            var al = ak[ao];
            al.x -= ah;
            al.y -= ag;
            ai = Math.max(ai, al.r + Math.sqrt(al.x * al.x + al.y * al.y))
        }
        ak.forEach(M);
        return ai
    }
    function n(aa) {
        aa._pack_next = aa._pack_prev = aa
    }
    function M(aa) {
        delete aa._pack_next;
        delete aa._pack_prev
    }
    function y(ab) {
        var aa = ab.children;
        if (aa) {
            aa.forEach(y);
            ab.r = H(aa)
        } else {
            ab.r = Math.sqrt(ab.value)
        }
    }
    function F(ae, aa, ag, ab) {
        var ad = ae.children;
        ae.x = (aa += ab * ae.x);
        ae.y = (ag += ab * ae.y);
        ae.r *= ab;
        if (ad) {
            var ac = -1,
                af = ad.length;
            while (++ac < af) {
                F(ad[ac], aa, ag, ab)
            }
        }
    }
    function j(af, ad, ac) {
        var ak = ad.r + ac.r,
            ai = af.r + ac.r,
            al = ad.x - af.x,
            aj = ad.y - af.y,
            ah = Math.sqrt(al * al + aj * aj),
            ag = (ai * ai + ah * ah - ak * ak) / (2 * ai * ah),
            aa = Math.acos(ag),
            ae = ag * ai,
            ab = Math.sin(aa) * ai;
        al /= ah;
        aj /= ah;
        ac.x = af.x + ae * al + ab * aj;
        ac.y = af.y + ae * aj - ab * al
    }
    d3.layout.cluster = function () {
        var ab = d3.layout.hierarchy().sort(null).value(null),
            ad = o,
            ac = [1, 1];

        function aa(al, ai) {
            var ae = ab.call(this, al, ai),
                am = ae[0],
                an, ao = 0,
                ak, aj;
            R(am, function (aq) {
                if (aq.children) {
                    aq.x = f(aq.children);
                    aq.y = c(aq.children)
                } else {
                    aq.x = an ? ao += ad(aq, an) : 0;
                    aq.y = 0;
                    an = aq
                }
            });
            var ah = G(am),
                ap = h(am),
                ag = ah.x - ad(ah, ap) / 2,
                af = ap.x + ad(ap, ah) / 2;
            R(am, function (aq) {
                aq.x = (aq.x - ag) / (af - ag) * ac[0];
                aq.y = (1 - aq.y / am.y) * ac[1]
            });
            return ae
        }
        aa.separation = function (ae) {
            if (!arguments.length) {
                return ad
            }
            ad = ae;
            return aa
        };
        aa.size = function (ae) {
            if (!arguments.length) {
                return ac
            }
            ac = ae;
            return aa
        };
        return t(aa, ab)
    };

    function c(aa) {
        return 1 + d3.max(aa, function (ab) {
            return ab.y
        })
    }
    function f(aa) {
        return aa.reduce(function (ab, ac) {
            return ab + ac.x
        }, 0) / aa.length
    }
    function G(ab) {
        var aa = ab.children;
        return aa ? G(aa[0]) : ab
    }
    function h(ab) {
        var aa = ab.children;
        return aa ? h(aa[aa.length - 1]) : ab
    }
    d3.layout.tree = function () {
        var ab = d3.layout.hierarchy().sort(null).value(null),
            ad = o,
            ac = [1, 1];

        function aa(al, aj) {
            var af = ab.call(this, al, aj),
                an = af[0];

            function ak(aw, ar) {
                var au = aw.children,
                    az = aw._tree;
                if (au) {
                    var av = au.length,
                        aB = au[0],
                        aA, ay = aB,
                        at, ax = -1;
                    while (++ax < av) {
                        at = au[ax];
                        ak(at, aA);
                        ay = ae(at, aA, ay);
                        aA = at
                    }
                    B(aw);
                    var aC = 0.5 * (aB._tree.prelim + at._tree.prelim);
                    if (ar) {
                        az.prelim = ar._tree.prelim + ad(aw, ar);
                        az.mod = az.prelim - aC
                    } else {
                        az.prelim = aC
                    }
                } else {
                    if (ar) {
                        az.prelim = ar._tree.prelim + ad(aw, ar)
                    }
                }
            }
            function am(av, ar) {
                av.x = av._tree.prelim + ar;
                var au = av.children;
                if (au) {
                    var at = -1,
                        aw = au.length;
                    ar += av._tree.mod;
                    while (++at < aw) {
                        am(au[at], ar)
                    }
                }
            }
            function ae(aw, ar, az) {
                if (ar) {
                    var av = aw,
                        au = aw,
                        ay = ar,
                        ax = aw.parent.children[0],
                        aB = av._tree.mod,
                        aA = au._tree.mod,
                        aD = ay._tree.mod,
                        aC = ax._tree.mod,
                        at;
                    while (ay = S(ay), av = m(av), ay && av) {
                        ax = m(ax);
                        au = S(au);
                        au._tree.ancestor = aw;
                        at = ay._tree.prelim + aD - av._tree.prelim - aB + ad(ay, av);
                        if (at > 0) {
                            v(b(ay, aw, az), aw, at);
                            aB += at;
                            aA += at
                        }
                        aD += ay._tree.mod;
                        aB += av._tree.mod;
                        aC += ax._tree.mod;
                        aA += au._tree.mod
                    }
                    if (ay && !S(au)) {
                        au._tree.thread = ay;
                        au._tree.mod += aD - aA
                    }
                    if (av && !m(ax)) {
                        ax._tree.thread = av;
                        ax._tree.mod += aB - aC;
                        az = aw
                    }
                }
                return az
            }
            R(an, function (at, ar) {
                at._tree = {
                    ancestor: at,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: ar ? ar._tree.number + 1 : 0
                }
            });
            ak(an);
            am(an, -an._tree.prelim);
            var ai = x(an, g),
                aq = x(an, P),
                ap = x(an, w),
                ah = ai.x - ad(ai, aq) / 2,
                ag = aq.x + ad(aq, ai) / 2,
                ao = ap.depth || 1;
            R(an, function (ar) {
                ar.x = (ar.x - ah) / (ag - ah) * ac[0];
                ar.y = ar.depth / ao * ac[1];
                delete ar._tree
            });
            return af
        }
        aa.separation = function (ae) {
            if (!arguments.length) {
                return ad
            }
            ad = ae;
            return aa
        };
        aa.size = function (ae) {
            if (!arguments.length) {
                return ac
            }
            ac = ae;
            return aa
        };
        return t(aa, ab)
    };

    function o(ab, aa) {
        return ab.parent == aa.parent ? 1 : 2
    }
    function m(aa) {
        return aa.children ? aa.children[0] : aa._tree.thread
    }
    function S(aa) {
        return aa.children ? aa.children[aa.children.length - 1] : aa._tree.thread
    }
    function x(ac, ad) {
        var ab = ac.children;
        if (ab) {
            var af, ae = ab.length,
                aa = -1;
            while (++aa < ae) {
                if (ad(af = x(ab[aa], ad), ac) > 0) {
                    ac = af
                }
            }
        }
        return ac
    }
    function P(ab, aa) {
        return ab.x - aa.x
    }
    function g(ab, aa) {
        return aa.x - ab.x
    }
    function w(ab, aa) {
        return ab.depth - aa.depth
    }
    function R(ab, ac) {
        function aa(ah, ag) {
            var af = ah.children;
            if (af) {
                var aj, ae = null,
                    ad = -1,
                    ai = af.length;
                while (++ad < ai) {
                    aj = af[ad];
                    aa(aj, ae);
                    ae = aj
                }
            }
            ac(ah, ag)
        }
        aa(ab, null)
    }
    function B(ad) {
        var aa = 0,
            af = 0,
            ac = ad.children,
            ab = ac.length,
            ae;
        while (--ab >= 0) {
            ae = ac[ab]._tree;
            ae.prelim += aa;
            ae.mod += aa;
            aa += ae.shift + (af += ae.change)
        }
    }
    function v(ab, ac, aa) {
        ab = ab._tree;
        ac = ac._tree;
        var ad = aa / (ac.number - ab.number);
        ab.change += ad;
        ac.change -= ad;
        ac.shift += aa;
        ac.prelim += aa;
        ac.mod += aa
    }
    function b(aa, ac, ab) {
        return aa._tree.ancestor.parent == ac.parent ? aa._tree.ancestor : ab
    }
    d3.layout.treemap = function () {
        var ag = d3.layout.hierarchy(),
            aj = Math.round,
            al = [1, 1],
            ah = false,
            ae, af = 0.5 * (1 + Math.sqrt(5));

        function aa(ap, am) {
            var ao = ap.children;
            ap.area = ap.value * am;
            if (ao) {
                var an = -1,
                    aq = ao.length;
                while (++an < aq) {
                    aa(ao[an], am)
                }
            }
        }
        function ac(aq) {
            if (!aq.children) {
                return
            }
            var at = {
                x: aq.x,
                y: aq.y,
                dx: aq.dx,
                dy: aq.dy
            },
                av = [],
                an = aq.children.slice(),
                am, ar = Infinity,
                ap, au = Math.min(at.dx, at.dy),
                ao;
            av.area = 0;
            while ((ao = an.length) > 0) {
                av.push(am = an[ao - 1]);
                av.area += am.area;
                if ((ap = ab(av, au)) <= ar) {
                    an.pop();
                    ar = ap
                } else {
                    av.area -= av.pop().area;
                    ad(av, au, at, false);
                    au = Math.min(at.dx, at.dy);
                    av.length = av.area = 0;
                    ar = Infinity
                }
            }
            if (av.length) {
                ad(av, au, at, true);
                av.length = av.area = 0
            }
            aq.children.forEach(ac)
        }
        function ak(ao) {
            if (!ao.children) {
                return
            }
            var an = {
                x: ao.x,
                y: ao.y,
                dx: ao.dx,
                dy: ao.dy
            },
                am = ao.children.slice(),
                aq, ap = [];
            ap.area = 0;
            while (aq = am.pop()) {
                ap.push(aq);
                ap.area += aq.area;
                if (aq.z != null) {
                    ad(ap, aq.z ? an.dx : an.dy, an, !am.length);
                    ap.length = ap.area = 0
                }
            }
            ao.children.forEach(ak)
        }
        function ab(ar, an) {
            var ap = ar.area,
                aq, au = 0,
                am = Infinity,
                ao = -1,
                at = ar.length;
            while (++ao < at) {
                aq = ar[ao].area;
                if (aq < am) {
                    am = aq
                }
                if (aq > au) {
                    au = aq
                }
            }
            ap *= ap;
            an *= an;
            return Math.max((an * au * af) / ap, ap / (an * am * af))
        }
        function ad(aw, av, aq, au) {
            var ao = -1,
                an = aw.length,
                ar = aq.x,
                ap = aq.y,
                at = av ? aj(aw.area / av) : 0,
                am;
            if (av == aq.dx) {
                if (au || at > aq.dy) {
                    at = aq.dy
                }
                while (++ao < an) {
                    am = aw[ao];
                    am.x = ar;
                    am.y = ap;
                    am.dy = at;
                    ar += am.dx = aj(am.area / at)
                }
                am.z = true;
                am.dx += aq.x + aq.dx - ar;
                aq.y += at;
                aq.dy -= at
            } else {
                if (au || at > aq.dx) {
                    at = aq.dx
                }
                while (++ao < an) {
                    am = aw[ao];
                    am.x = ar;
                    am.y = ap;
                    am.dx = at;
                    ap += am.dy = aj(am.area / at)
                }
                am.z = false;
                am.dy += aq.y + aq.dy - ap;
                aq.x += at;
                aq.dx -= at
            }
        }
        function ai(ao) {
            var an = ae || ag(ao),
                am = an[0];
            am.x = 0;
            am.y = 0;
            am.dx = al[0];
            am.dy = al[1];
            if (ae) {
                ag.revalue(am)
            }
            aa(am, al[0] * al[1] / am.value);
            (ae ? ak : ac)(am);
            if (ah) {
                ae = an
            }
            return an
        }
        ai.size = function (am) {
            if (!arguments.length) {
                return al
            }
            al = am;
            return ai
        };
        ai.round = function (am) {
            if (!arguments.length) {
                return aj != Number
            }
            aj = am ? Math.round : Number;
            return ai
        };
        ai.sticky = function (am) {
            if (!arguments.length) {
                return ah
            }
            ah = am;
            ae = null;
            return ai
        };
        ai.ratio = function (am) {
            if (!arguments.length) {
                return af
            }
            af = am;
            return ai
        };
        return t(ai, ag)
    }
})();
(function () {
    var a, c, b, e;
    e = d3.format("%");
    b = d3.format(",");
    a = 16;
    c = (function () {
        function f(l, j) {
            var i, k, g, m;
            this.$treemap = l;
            this.update_params(j);
            this.treemap_div = d3.select(this.$treemap[0]).append("div");
            m = [this.$treemap.width(), this.$treemap.height()], g = m[0], i = m[1];
            k = this;
            this.treemap = d3.layout.treemap().size([g, i]).children(function (h) {
                if (isNaN(h.value) && !(h.value[k.current_year] != null)) {
                    return d3.entries(h.value)
                } else {
                    return null
                }
            }).value(function (n) {
                var h, o;
                h = (o = n.value[k.current_year]) != null ? o[k.current_value] : void 0;
                if (h) {
                    return h
                } else {
                    return 1
                }
            }).sticky(false)
        }
        f.prototype.draw = function () {
            var j, k, i, g, l;
            l = [this.$treemap.innerWidth(), this.$treemap.innerHeight()], g = l[0], j = l[1];
            this.treemap_div.style("position", "relative").style("width", g + "px").style("height", j + "px");
            this.treemap.size([g, j]);
            i = this.treemap_div.data([{
                key: "",
                value: this.data
            }]).selectAll("div").data(this.treemap, keyer);
            k = this;
            i.transition().duration(1000).call(function () {
                return k.cell(this, k)
            });
            i.html(function (h) {
                return k.make_label(this, h)
            });
            i.enter().append("div").attr({
                "class": function (h) {
                    return "cell " + (unspace(h.data.key))
                }
            }).on("mouseover", function (h) {
                k.toggle_highlight(unspace(h.data.key));
                return $(document).trigger("treemap_highlight_change", {
                    hie: k.hie(h)
                })
            }).on("mouseout", function (h) {
                k.toggle_highlight(unspace(h.data.key));
                return $(document).trigger("treemap_highlight_change", {
                    hie: k.hie(h)
                })
            }).on("mousedown", function (h) {
                return k.show_ratios(h)
            }).on("mouseup", function (h) {
                return k.hide_ratios()
            }).call(function () {
                return k.cell(this, k)
            }).style("left", function (h) {
                return 5000 + h.x + "px"
            }).html(function (h) {
                return k.make_label(this, h)
            }).transition().duration(1000).call(function () {
                return k.cell(this, k)
            });
            return i.exit().transition().duration(1000).style("left", function (h) {
                return -5000 - h.x + "px"
            }).remove()
        };
        f.prototype.toggle_highlight = function (g) {
            return $("." + g).toggleClass("highlighted")
        };
        f.prototype.hie = function (h) {
            var g;
            g = [h.data.key];
            while (h.parent != null) {
                h = h.parent;
                g.push(h.data.key)
            }
            return g.reverse()
        };
        f.prototype.update_params = function (g) {
            this.data = g.data;
            this.current_year = g.year;
            this.current_value = g.value;
            this.current_hie = g.hie;
            return this.color_type = g.color_type
        };
        f.prototype.cur_val = function (h) {
            var g;
            return (g = h.data.value[this.current_year]) != null ? g[this.current_value] : void 0
        };
        f.prototype.acceptance_rate = function (h) {
            var g;
            g = h.data.value[this.current_year];
            if (g != null) {
                return g.accepted / Math.max(g.applied, 1)
            }
        };
        f.prototype.cell = function (g, h) {
            return g.style("left", function (i) {
                return i.x + "px"
            }).style("top", function (i) {
                return i.y + "px"
            }).style("width", function (i) {
                return i.dx - 1 + "px"
            }).style("height", function (i) {
                return i.dy - 1 + "px"
            }).attr("title", function (l) {
                var m, j, i, k;
                if (l.depth === 2) {
                    k = b(h.cur_val(l));
                    m = e(h.acceptance_rate(l));
                    j = l.data.key;
                    i = l.parent.data.key;
                    if (j === i) {
                        j = ""
                    }
                    if (j === "undefined") {
                        j = ""
                    }
                    if (i === "undefined") {
                        i = ""
                    }
                    return "" + k + " " + j + " " + i + " students " + h.current_value + " in " + h.current_year + " (" + m + " accepted)"
                }
            }).style("background-color", function (i) {
                if (i.children != null) {
                    return color(i.data.key)
                } else {
                    switch (h.color_type) {
                    case "acceptance_ratio":
                        return color(h.acceptance_rate(i));
                    case "categorical":
                        $(this).css("background-color", "");
                        return null
                    }
                }
            })
        };
        f.prototype.make_label = function (g, l) {
            var m, p, h, o, r, q, j, n, k, i;
            m = $("<span>", {
                "class": l.children != null ? "group_label" : "leaf_label"
            }).text(l.data.key);
            if (((this.current_hie[0] === this.current_hie[1]) && !(l.children != null)) || l.data.key === "undefined") {
                m.text("")
            }
            p = $(g).css("background-color");
            if (d3.rgb(p).hsl().l < 0.3 && p !== "rgba(0, 0, 0, 0)" && p !== "transparent" && !$(g).hasClass("highlighted")) {
                m.addClass("white")
            }
            if (l.dx / l.dy < 0.8) {
                o = 20;
                m.addClass("rotated").css({
                    width: (l.dy - o) + "px",
                    height: l.dx + "px"
                });
                if (m.hasClass("leaf_label")) {
                    m.css({
                        top: -l.dx + "px"
                    })
                } else {
                    if (m.hasClass("group_label")) {
                        m.css({
                            right: l.dx + "px"
                        })
                    }
                }
            }
            r = (k = m.css("font-size")) != null ? k.replace(/px/, "") : void 0;
            i = [(r != null ? r : r = a), a * 0.6, a * 0.4];
            for (j = 0, n = i.length; j < n; j++) {
                h = i[j];
                q = l.data.key.length * h;
                if (Math.sqrt(l.area) > q / 5) {
                    m.css("font-size", h + "px");
                    return m.outerHTML()
                }
            }
            return ""
        };
        f.prototype.show_ratios = function (i) {
            var h, g;
            g = this;
            h = this.current_hie[0] !== this.current_hie[1] ? unspace(i.data.key) : "cell";
            return this.$treemap.find("." + h).each(function (k, m) {
                var j, n, l;
                if (m.__data__.depth !== 2) {
                    return
                }
                l = m.__data__.value / g.cur_val(i);
                j = $(m);
                if (j.height() > 25 && j.width() > 50) {
                    n = $("<span>", {
                        "class": "ratio"
                    }).text(l === 1 ? "(relative to this group)" : e(l));
                    j.append(n);
                    return n.css({
                        bottom: ((j.height() - n.outerHeight()) / 2) + "px",
                        left: ((j.width() - n.outerWidth()) / 2) + "px"
                    })
                }
            })
        };
        f.prototype.hide_ratios = function () {
            return this.$treemap.find(".ratio").remove()
        };
        return f
    })();
    window.Treemap = c
}).call(this);
(function () {
    var b, a, c;
    c = d3.format("%");
    a = d3.format(",");
    b = (function () {
        function e(g, f) {
            this.$linechart = g;
            this.$title = $("<span>", {
                "class": "title"
            }).text("").appendTo(this.$linechart);
            this.linechart_div = d3.select(this.$linechart[0]).append("svg:svg");
            this.update_params(f)
        }
        e.prototype.draw = function () {
            var k, f, s, q, n, l, p, j, i, o, m, h, g, r;
            this.w = this.$linechart.width();
            this.h = Math.round(this.$linechart.height() - sum(this.$linechart.children().not("svg").map(function () {
                return $(this).height()
            })));
            if (this.current_group === "none") {
                this.linechart_div.selectAll("path").remove();
                this.set_title(this.current_hie[0] !== this.current_hie[1] ? "(Mouseover a treemap cell to show the gain/loss of an " + this.current_hie[1] + " by " + this.current_hie[0] + ")" : "(Mouseover a treemap cell to show the gain/loss by " + this.current_hie[0] + ".)");
                return
            }
            j = this.ratios(this.data);
            l = d3.max(j.map(function (t) {
                return d3.max(t.value)
            }));
            p = d3.min(j.map(function (t) {
                return d3.min(t.value)
            }));
            h = 60;
            i = 20;
            o = d3.scale.linear().domain([0, j[0].value.length - 1]).range([h, this.w]).nice();
            m = d3.scale.linear().domain([p, l]).range([this.h - i, i]).nice();
            s = d3.svg.line().x(function (u, t) {
                return o(t)
            }).y(function (t) {
                return m(t)
            });
            f = this.linechart_div.selectAll("path").data(j, function (t) {
                return t.key
            });
            f.transition().duration(1000).attr("d", function (t) {
                return s(t.value)
            });
            f.enter().append("svg:path").style("stroke", function (u, t) {
                return color(u.key)
            }).attr("class", function (t) {
                return unspace(t.key)
            }).style("fill", "none").attr("d", function (t) {
                return s(t.value)
            });
            f.exit().remove();
            k = function () {
                return this.transition().duration(1000).attr("y", function (t) {
                    return m(t)
                }).attr("y1", function (t) {
                    return m(t)
                }).attr("y2", function (t) {
                    return m(t)
                }).style("opacity", 0.1).remove()
            };
            r = this.linechart_div.selectAll(".y_rule").data(m.ticks(3), function (t) {
                return c(t)
            });
            n = function (t) {
                return this.style("stroke", "white").style("stroke-width", "1").attr("class", "y_rule").attr("x1", o(o.domain()[0])).attr("y1", function (u) {
                    return m(u)
                }).attr("x2", o(o.domain()[1])).attr("y2", function (u) {
                    return m(u)
                }).style("opacity", 1)
            };
            r.transition().duration(1000).call(n);
            r.enter().append("svg:line").call(n);
            r.exit().call(k);
            g = this.linechart_div.selectAll("text.ylabel").data(m.ticks(3), function (t) {
                return c(t)
            });
            q = function (t) {
                return this.attr("class", "ylabel").attr("x", o(o.domain()[0])).attr("y", function (u) {
                    return m(u)
                }).attr("dy", "0.3em").attr("dx", "-0.5em").attr("text-anchor", "end").style("opacity", 1).text(function (u) {
                    return c(u)
                })
            };
            g.enter().append("svg:text").call(q).style("opacity", 0.1).transition().duration(1000).style("opacity", 1);
            g.transition().duration(1000).call(q);
            return g.exit().call(k)
        };
        e.prototype.update_params = function (f) {
            if (f.data != null) {
                this.data = f.data
            }
            if (f.year != null) {
                this.current_year = f.year
            }
            if (f.value != null) {
                this.current_value = f.value
            }
            if (f.hie != null) {
                this.current_hie = f.hie
            }
            if (f.group != null) {
                this.current_group = f.group
            }
            if ((this.current_value != null) && (this.current_group != null) && (this.current_year != null)) {
                if (this.current_group !== "undefined") {
                    return this.set_title("Gain/loss of " + this.current_value + " " + this.current_group + " students, relative to " + this.current_year)
                } else {
                    return this.set_title("Student " + (this.current_value === "applied" ? "applications" : "acceptances") + " relative to " + this.current_year + ".")
                }
            }
        };
        e.prototype.toggle_highlight = function (h) {
            var f, g;
            g = this.linechart_div.selectAll("." + h);
            if (g.classed("highlighted")) {
                return g.classed("highlighted", false)
            } else {
                g.classed("highlighted", true);
                f = g.node();
                g.remove();
                if ( !! (f != null)) {
                    return this.linechart_div.node().appendChild(f)
                }
            }
        };
        e.prototype.set_title = function (f) {
            return this.$title.text(f)
        };
        e.prototype.ratios = function (g) {
            var f, h;
            f = this;
            h = d3.keys(g);
            return h.map(function (j) {
                var i, l, m;
                i = f.current_hie[0] !== f.current_hie[1] ? d3.entries(g[j][f.current_group]) : d3.entries(g[j][j]);
                m = i.sort(function (n, k) {
                    return k.year - n.year
                }).map(function (k) {
                    var n;
                    n = k.value[f.current_value];
                    if (n != null) {
                        return n
                    } else {
                        return 1
                    }
                });
                l = indexify(m, _(i).pluck("key").indexOf(f.current_year));
                return {
                    key: j,
                    value: l
                }
            })
        };
        return e
    })();
    window.Linechart = b
}).call(this);
(function () {
    var b, a;
    window.p = function (c) {
        console.log(c);
        return c
    };
    window.timeout = function (e, c) {
        return setTimeout(c, e)
    };
    window.sum = function (c) {
        return _(c).reduce((function (f, e) {
            return f + e
        }), 0)
    };
    window.unspace = function (c) {
        return "g" + c.replace(/\ /g, "").replace(/(&|,|-)/g, "")
    };
    window.indexify = function (c, e) {
        var f;
        f = c[e];
        if (f != null) {
            return c.map(function (g) {
                return (g - f) / f
            })
        } else {
            return []
        }
    };
    $.fn.outerHTML = function () {
        if (!(this.length != null)) {
            return this
        } else {
            if (this[0].outerHTML != null) {
                return this[0].outerHTML
            } else {
                return (function (c) {
                    var e, f;
                    f = document.createElement("div");
                    f.appendChild(c.cloneNode(true));
                    e = f.innerHTML;
                    f = null;
                    return e
                })(this[0])
            }
        }
    };
    a = d3.scale.category20c();
    window.color = function (c) {
        if (typeof c === "string") {
            switch (c) {
            case "male":
                return "#1f77b4";
            case "female":
                return "#f7b6d2";
            case "40 and over":
                return "#eff3ff";
            case "25 to 39":
                return "#bdd7e7";
            case "21 to 24":
                return "#6baed6";
            case "20 and under":
                return "#2171b5";
            case "White":
                return "#fdd0a2";
            case "Black":
                return "#636363";
            case "Asian":
                return "#6baed6";
            case "Unknown":
                return "#756bb1";
            case "Mixed":
                return "#31a354";
            case "Other":
                return "#ad494a";
            default:
                return a(c)
            }
        } else {
            return "hsl(0,0%," + (c * 100) + "%)"
        }
    };
    window.sum_numerics = function (e) {
        var c;
        c = {};
        e = _.compact(e);
        _(e[0]).keys().forEach(function (f) {
            if (isNaN(e[0][f])) {
                if (typeof e[0][f] === "object") {
                    return c[f] = sum_numerics(_(e).pluck(f))
                }
            } else {
                return c[f] = sum(_(e).pluck(f))
            }
        });
        return c
    };
    window.keyer = function (f, e) {
        var c;
        c = f.data.key;
        while (f.parent != null) {
            c += f.parent.data.key;
            f = f.parent
        }
        return c
    };
    window.reshape = function (g, f, e) {
        var c;
        c = d3.nest();
        f.forEach(function (h) {
            return c.key(function (i) {
                return i[h]
            })
        });
        c.rollup(function (h) {
            return sum_numerics(h.map(function (i) {
                return i.data
            }))
        });
        return c.map(g)
    };
    b = function () {
        var c;
        c = [$("#hie1 > td > a.selected").text().toLowerCase(), $("#hie2 > td > a.selected").text().toLowerCase()];
        if (c[1] === "") {
            c[1] = c[0]
        }
        return c
    };
    d3.json("data.json", function (c) {
        return $(document).ready(function () {
            var e, i, h, g, j, f;
            i = {
                data: reshape(c, b()),
                value: "applied",
                hie: b(),
                year: "2003",
                color_type: "categorical"
            };
            j = new Treemap($("#treemap"), i);
            h = new Linechart($("#linechart"), i);
            $(document).bind("treemap_highlight_change", function (k, l) {
                h.update_params({
                    group: l.hie[2]
                });
                h.draw();
                return h.toggle_highlight(unspace(l.hie[1]))
            });
            $(document).bind("linechart_highlight_change", function (k, l) {
                return j.toggle_highlight(l.classname)
            });
            $("#treemap").mouseout(function () {
                h.update_params({
                    group: "none"
                });
                return h.draw()
            });
            $(document).bind({
                redraw: function () {
                    var m, r, p, l, k, q, o;
                    i.data = reshape(c, i.hie);
                    i.group = "none";
                    j.update_params(i);
                    j.draw();
                    h.update_params(i);
                    h.draw();
                    m = $("#linechart > .years");
                    l = m.width() - parseInt(m.css("margin-left").replace("px", ""), 10);
                    r = m.children().length;
                    p = l / (r - 1);
                    o = [m.offset().left, m.offset().top], k = o[0], q = o[1];
                    return m.children().each(function (n, s) {
                        return $(s).css({
                            left: k + n * p + "px",
                            top: q
                        })
                    })
                }
            });
            $("#coloring").click(function () {
                if (i.color_type === "categorical") {
                    i.color_type = "acceptance_ratio";
                    $(this).find("a").toggleClass("selected");
                    $("#color_scale").fadeIn()
                } else {
                    i.color_type = "categorical";
                    $(this).find("a").toggleClass("selected");
                    $("#color_scale").fadeOut()
                }
                $(document).trigger("redraw");
                return false
            });
            $("#sizing").click(function () {
                $(this).find("a").toggleClass("selected");
                i.value = $(this).find(".selected").text().toLowerCase();
                $(document).trigger("redraw");
                return false
            });
            $(".hie > td > a").attr("href", "#").click(function () {
                if ($(this).hasClass("selected")) {
                    $(this).removeClass("selected")
                } else {
                    $(this).addClass("selected").parent().siblings().children().removeClass("selected")
                }
                i.hie = b();
                $(document).trigger("redraw");
                return false
            });
            e = $("<div>", {
                "class": "years"
            }).appendTo($("#linechart"));
            for (f = 2003; f <= 2010; f++) {
                e.append($("<a>", {
                    "class": "button"
                }).attr("href", "#").text(f).click(function () {
                    $(this).addClass("selected").siblings().removeClass("selected");
                    i.year = $(this).text();
                    $(document).trigger("redraw");
                    return false
                }))
            }
            e.find(":contains(" + i.year + ")").click();
            $("#details_link").click(function () {
                $("#details").modal({
                    opacity: 70,
                    overlayCss: {
                        backgroundColor: "black"
                    },
                    overlayClose: true
                });
                return false
            });
            g = null;
            $(window).resize(function () {
                var k;
                clearTimeout(g);
                return k = timeout(100, function () {
                    $(document).trigger("redraw");
                    if ((!$.browser.safari) || (!$.browser.webkit)) {
                        return $("#treemap").css({
                            width: 0,
                            height: 0
                        })
                    }
                })
            });
            return $(document).trigger("redraw")
        })
    })
}).call(this);
