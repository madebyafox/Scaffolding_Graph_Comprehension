/*
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */
(function(b, a) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = b.document ? a(b, true) : function(c) {
            if (!c.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return a(c)
        }
    } else {
        a(b)
    }
}(typeof window !== "undefined" ? window : this, function(b0, ay) {
    var O = [];
    var bQ = O.slice;
    var z = O.concat;
    var aF = O.push;
    var al = O.indexOf;
    var w = {};
    var bU = w.toString;
    var ai = w.hasOwnProperty;
    var bS = {};
    var bZ = "1.11.1",
        au = function(i, e) {
            return new au.fn.init(i, e)
        },
        bC = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bc = /^-ms-/,
        aQ = /-([\da-z])/gi,
        V = function(e, i) {
            return i.toUpperCase()
        };
    au.fn = au.prototype = {
        jquery: bZ,
        constructor: au,
        selector: "",
        length: 0,
        toArray: function() {
            return bQ.call(this)
        },
        get: function(e) {
            return e != null ? (e < 0 ? this[e + this.length] : this[e]) : bQ.call(this)
        },
        pushStack: function(e) {
            var i = au.merge(this.constructor(), e);
            i.prevObject = this;
            i.context = this.context;
            return i
        },
        each: function(i, e) {
            return au.each(this, i, e)
        },
        map: function(e) {
            return this.pushStack(au.map(this, function(b6, b7) {
                return e.call(b6, b7, b6)
            }))
        },
        slice: function() {
            return this.pushStack(bQ.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var b7 = this.length,
                b6 = +e + (e < 0 ? b7 : 0);
            return this.pushStack(b6 >= 0 && b6 < b7 ? [this[b6]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: aF,
        sort: O.sort,
        splice: O.splice
    };
    au.extend = au.fn.extend = function() {
        var cd, b7, b6, cb, cc, e, ce = arguments[0] || {},
            b9 = 1,
            ca = arguments.length,
            b8 = false;
        if (typeof ce === "boolean") {
            b8 = ce;
            ce = arguments[b9] || {};
            b9++
        }
        if (typeof ce !== "object" && !au.isFunction(ce)) {
            ce = {}
        }
        if (b9 === ca) {
            ce = this;
            b9--
        }
        for (; b9 < ca; b9++) {
            if ((cc = arguments[b9]) != null) {
                for (cb in cc) {
                    cd = ce[cb];
                    b6 = cc[cb];
                    if (ce === b6) {
                        continue
                    }
                    if (b8 && b6 && (au.isPlainObject(b6) || (b7 = au.isArray(b6)))) {
                        if (b7) {
                            b7 = false;
                            e = cd && au.isArray(cd) ? cd : []
                        } else {
                            e = cd && au.isPlainObject(cd) ? cd : {}
                        }
                        ce[cb] = au.extend(b8, e, b6)
                    } else {
                        if (b6 !== undefined) {
                            ce[cb] = b6
                        }
                    }
                }
            }
        }
        return ce
    };
    au.extend({
        expando: "jQuery" + (bZ + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return au.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return au.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !au.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function(i) {
            var e;
            for (e in i) {
                return false
            }
            return true
        },
        isPlainObject: function(b7) {
            var b6;
            if (!b7 || au.type(b7) !== "object" || b7.nodeType || au.isWindow(b7)) {
                return false
            }
            try {
                if (b7.constructor && !ai.call(b7, "constructor") && !ai.call(b7.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (i) {
                return false
            }
            if (bS.ownLast) {
                for (b6 in b7) {
                    return ai.call(b7, b6)
                }
            }
            for (b6 in b7) {}
            return b6 === undefined || ai.call(b7, b6)
        },
        type: function(e) {
            if (e == null) {
                return e + ""
            }
            return typeof e === "object" || typeof e === "function" ? w[bU.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            if (e && au.trim(e)) {
                (b0.execScript || function(i) {
                    b0["eval"].call(b0, i)
                })(e)
            }
        },
        camelCase: function(e) {
            return e.replace(bc, "ms-").replace(aQ, V)
        },
        nodeName: function(e, i) {
            return e.nodeName && e.nodeName.toLowerCase() === i.toLowerCase()
        },
        each: function(ca, b6, e) {
            var cb, b7 = 0,
                b9 = ca.length,
                b8 = aq(ca);
            if (e) {
                if (b8) {
                    for (; b7 < b9; b7++) {
                        cb = b6.apply(ca[b7], e);
                        if (cb === false) {
                            break
                        }
                    }
                } else {
                    for (b7 in ca) {
                        cb = b6.apply(ca[b7], e);
                        if (cb === false) {
                            break
                        }
                    }
                }
            } else {
                if (b8) {
                    for (; b7 < b9; b7++) {
                        cb = b6.call(ca[b7], b7, ca[b7]);
                        if (cb === false) {
                            break
                        }
                    }
                } else {
                    for (b7 in ca) {
                        cb = b6.call(ca[b7], b7, ca[b7]);
                        if (cb === false) {
                            break
                        }
                    }
                }
            }
            return ca
        },
        trim: function(e) {
            return e == null ? "" : (e + "").replace(bC, "")
        },
        makeArray: function(e, i) {
            var b6 = i || [];
            if (e != null) {
                if (aq(Object(e))) {
                    au.merge(b6, typeof e === "string" ? [e] : e)
                } else {
                    aF.call(b6, e)
                }
            }
            return b6
        },
        inArray: function(b6, e, b7) {
            var b8;
            if (e) {
                if (al) {
                    return al.call(e, b6, b7)
                }
                b8 = e.length;
                b7 = b7 ? b7 < 0 ? Math.max(0, b8 + b7) : b7 : 0;
                for (; b7 < b8; b7++) {
                    if (b7 in e && e[b7] === b6) {
                        return b7
                    }
                }
            }
            return -1
        },
        merge: function(e, b9) {
            var b8 = +b9.length,
                b7 = 0,
                b6 = e.length;
            while (b7 < b8) {
                e[b6++] = b9[b7++]
            }
            if (b8 !== b8) {
                while (b9[b7] !== undefined) {
                    e[b6++] = b9[b7++]
                }
            }
            e.length = b6;
            return e
        },
        grep: function(b8, e, ca) {
            var b7, cc = [],
                b9 = 0,
                cb = b8.length,
                b6 = !ca;
            for (; b9 < cb; b9++) {
                b7 = !e(b8[b9], b9);
                if (b7 !== b6) {
                    cc.push(b8[b9])
                }
            }
            return cc
        },
        map: function(b7, b6, e) {
            var cc, b8 = 0,
                ca = b7.length,
                b9 = aq(b7),
                cb = [];
            if (b9) {
                for (; b8 < ca; b8++) {
                    cc = b6(b7[b8], b8, e);
                    if (cc != null) {
                        cb.push(cc)
                    }
                }
            } else {
                for (b8 in b7) {
                    cc = b6(b7[b8], b8, e);
                    if (cc != null) {
                        cb.push(cc)
                    }
                }
            }
            return z.apply([], cb)
        },
        guid: 1,
        proxy: function(b6, i) {
            var e, b7, b8;
            if (typeof i === "string") {
                b8 = b6[i];
                i = b6;
                b6 = b8
            }
            if (!au.isFunction(b6)) {
                return undefined
            }
            e = bQ.call(arguments, 2);
            b7 = function() {
                return b6.apply(i || this, e.concat(bQ.call(arguments)))
            };
            b7.guid = b6.guid = b6.guid || au.guid++;
            return b7
        },
        now: function() {
            return +(new Date())
        },
        support: bS
    });
    au.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, b6) {
        w["[object " + b6 + "]"] = b6.toLowerCase()
    });

    function aq(i) {
        var e = i.length,
            b6 = au.type(i);
        if (b6 === "function" || au.isWindow(i)) {
            return false
        }
        if (i.nodeType === 1 && e) {
            return true
        }
        return b6 === "array" || e === 0 || typeof e === "number" && e > 0 && (e - 1) in i
    }
    var bP =
        /*
         * Sizzle CSS Selector Engine v1.10.19
         * http://sizzlejs.com/
         *
         * Copyright 2013 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-04-18
         */
        (function(dl) {
            var cz, df, cu, cw, cC, di, ce, c5, cK, dc, cx, c6, co, cn, cp, cS, cR, cG, ch, ct = "sizzle" + -(new Date()),
                cM = dl.document,
                cm = 0,
                cq = 0,
                cd = cj(),
                dh = cj(),
                cf = cj(),
                dd = function(e, i) {
                    if (e === i) {
                        cx = true
                    }
                    return 0
                },
                de = typeof undefined,
                cI = 1 << 31,
                cy = ({}).hasOwnProperty,
                b8 = [],
                cL = b8.pop,
                cP = b8.push,
                cO = b8.push,
                db = b8.slice,
                cB = b8.indexOf || function(e) {
                    var dm = 0,
                        dn = this.length;
                    for (; dm < dn; dm++) {
                        if (this[dm] === e) {
                            return dm
                        }
                    }
                    return -1
                },
                cb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                dk = "[\\x20\\t\\r\\n\\f]",
                cc = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                cA = cc.replace("w", "w#"),
                ca = "\\[" + dk + "*(" + cc + ")(?:" + dk + "*([*^$|!~]?=)" + dk + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + cA + "))|)" + dk + "*\\]",
                cN = ":(" + cc + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ca + ")*)|.*)\\)|)",
                c3 = new RegExp("^" + dk + "+|((?:^|[^\\\\])(?:\\\\.)*)" + dk + "+$", "g"),
                cU = new RegExp("^" + dk + "*," + dk + "*"),
                cT = new RegExp("^" + dk + "*([>+~]|" + dk + ")" + dk + "*"),
                cQ = new RegExp("=" + dk + "*([^\\]'\"]*?)" + dk + "*\\]", "g"),
                c0 = new RegExp(cN),
                cX = new RegExp("^" + cA + "$"),
                cH = {
                    ID: new RegExp("^#(" + cc + ")"),
                    CLASS: new RegExp("^\\.(" + cc + ")"),
                    TAG: new RegExp("^(" + cc.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ca),
                    PSEUDO: new RegExp("^" + cN),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + dk + "*(even|odd|(([+-]|)(\\d*)n|)" + dk + "*(?:([+-]|)" + dk + "*(\\d+)|))" + dk + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + cb + ")$", "i"),
                    needsContext: new RegExp("^" + dk + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + dk + "*((?:-\\d)?\\d*)" + dk + "*\\)|)(?=[^-]|$)", "i")
                },
                cY = /^(?:input|select|textarea|button)$/i,
                cW = /^h\d$/i,
                cZ = /^[^{]+\{\s*\[native \w/,
                c1 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                c2 = /[+~]/,
                cV = /'|\\/g,
                c4 = new RegExp("\\\\([\\da-f]{1,6}" + dk + "?|(" + dk + ")|.)", "ig"),
                cv = function(e, i, dm) {
                    var dn = "0x" + i - 65536;
                    return dn !== dn || dm ? i : dn < 0 ? String.fromCharCode(dn + 65536) : String.fromCharCode(dn >> 10 | 55296, dn & 1023 | 56320)
                };
            try {
                cO.apply((b8 = db.call(cM.childNodes)), cM.childNodes);
                b8[cM.childNodes.length].nodeType
            } catch (cr) {
                cO = {
                    apply: b8.length ? function(i, e) {
                        cP.apply(i, db.call(e))
                    } : function(dp, e) {
                        var dn = dp.length,
                            dm = 0;
                        while ((dp[dn++] = e[dm++])) {}
                        dp.length = dn - 1
                    }
                }
            }

            function da(dA, e, dy, dz) {
                var dr, dm, dq, dv, dp, dn, dw, du, ds, dt;
                if ((e ? e.ownerDocument || e : cM) !== co) {
                    c6(e)
                }
                e = e || co;
                dy = dy || [];
                if (!dA || typeof dA !== "string") {
                    return dy
                }
                if ((dv = e.nodeType) !== 1 && dv !== 9) {
                    return []
                }
                if (cp && !dz) {
                    if ((dr = c1.exec(dA))) {
                        if ((dq = dr[1])) {
                            if (dv === 9) {
                                dm = e.getElementById(dq);
                                if (dm && dm.parentNode) {
                                    if (dm.id === dq) {
                                        dy.push(dm);
                                        return dy
                                    }
                                } else {
                                    return dy
                                }
                            } else {
                                if (e.ownerDocument && (dm = e.ownerDocument.getElementById(dq)) && ch(e, dm) && dm.id === dq) {
                                    dy.push(dm);
                                    return dy
                                }
                            }
                        } else {
                            if (dr[2]) {
                                cO.apply(dy, e.getElementsByTagName(dA));
                                return dy
                            } else {
                                if ((dq = dr[3]) && df.getElementsByClassName && e.getElementsByClassName) {
                                    cO.apply(dy, e.getElementsByClassName(dq));
                                    return dy
                                }
                            }
                        }
                    }
                    if (df.qsa && (!cS || !cS.test(dA))) {
                        du = dw = ct;
                        ds = e;
                        dt = dv === 9 && dA;
                        if (dv === 1 && e.nodeName.toLowerCase() !== "object") {
                            dn = di(dA);
                            if ((dw = e.getAttribute("id"))) {
                                du = dw.replace(cV, "\\$&")
                            } else {
                                e.setAttribute("id", du)
                            }
                            du = "[id='" + du + "'] ";
                            dp = dn.length;
                            while (dp--) {
                                dn[dp] = du + dj(dn[dp])
                            }
                            ds = c2.test(dA) && dg(e.parentNode) || e;
                            dt = dn.join(",")
                        }
                        if (dt) {
                            try {
                                cO.apply(dy, ds.querySelectorAll(dt));
                                return dy
                            } catch (dx) {} finally {
                                if (!dw) {
                                    e.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
                return c5(dA.replace(c3, "$1"), e, dy, dz)
            }

            function cj() {
                var i = [];

                function e(dm, dn) {
                    if (i.push(dm + " ") > cu.cacheLength) {
                        delete e[i.shift()]
                    }
                    return (e[dm + " "] = dn)
                }
                return e
            }

            function cD(e) {
                e[ct] = true;
                return e
            }

            function b9(dn) {
                var i = co.createElement("div");
                try {
                    return !!dn(i)
                } catch (dm) {
                    return false
                } finally {
                    if (i.parentNode) {
                        i.parentNode.removeChild(i)
                    }
                    i = null
                }
            }

            function b7(dm, dn) {
                var e = dm.split("|"),
                    dp = dm.length;
                while (dp--) {
                    cu.attrHandle[e[dp]] = dn
                }
            }

            function c9(e, i) {
                var dm = i && e,
                    dn = dm && e.nodeType === 1 && i.nodeType === 1 && (~i.sourceIndex || cI) - (~e.sourceIndex || cI);
                if (dn) {
                    return dn
                }
                if (dm) {
                    while ((dm = dm.nextSibling)) {
                        if (dm === i) {
                            return -1
                        }
                    }
                }
                return e ? 1 : -1
            }

            function ck(e) {
                return function(i) {
                    var dm = i.nodeName.toLowerCase();
                    return dm === "input" && i.type === e
                }
            }

            function ci(e) {
                return function(i) {
                    var dm = i.nodeName.toLowerCase();
                    return (dm === "input" || dm === "button") && i.type === e
                }
            }

            function cl(e) {
                return cD(function(i) {
                    i = +i;
                    return cD(function(dr, dp) {
                        var dn, dq = e([], dr.length, i),
                            dm = dq.length;
                        while (dm--) {
                            if (dr[(dn = dq[dm])]) {
                                dr[dn] = !(dp[dn] = dr[dn])
                            }
                        }
                    })
                })
            }

            function dg(e) {
                return e && typeof e.getElementsByTagName !== de && e
            }
            df = da.support = {};
            cC = da.isXML = function(i) {
                var e = i && (i.ownerDocument || i).documentElement;
                return e ? e.nodeName !== "HTML" : false
            };
            c6 = da.setDocument = function(dm) {
                var i, e = dm ? dm.ownerDocument || dm : cM,
                    dn = e.defaultView;
                if (e === co || e.nodeType !== 9 || !e.documentElement) {
                    return co
                }
                co = e;
                cn = e.documentElement;
                cp = !cC(e);
                if (dn && dn !== dn.top) {
                    if (dn.addEventListener) {
                        dn.addEventListener("unload", function() {
                            c6()
                        }, false)
                    } else {
                        if (dn.attachEvent) {
                            dn.attachEvent("onunload", function() {
                                c6()
                            })
                        }
                    }
                }
                df.attributes = b9(function(dp) {
                    dp.className = "i";
                    return !dp.getAttribute("className")
                });
                df.getElementsByTagName = b9(function(dp) {
                    dp.appendChild(e.createComment(""));
                    return !dp.getElementsByTagName("*").length
                });
                df.getElementsByClassName = cZ.test(e.getElementsByClassName) && b9(function(dp) {
                    dp.innerHTML = "<div class='a'></div><div class='a i'></div>";
                    dp.firstChild.className = "i";
                    return dp.getElementsByClassName("i").length === 2
                });
                df.getById = b9(function(dp) {
                    cn.appendChild(dp).id = ct;
                    return !e.getElementsByName || !e.getElementsByName(ct).length
                });
                if (df.getById) {
                    cu.find.ID = function(dq, dp) {
                        if (typeof dp.getElementById !== de && cp) {
                            var dr = dp.getElementById(dq);
                            return dr && dr.parentNode ? [dr] : []
                        }
                    };
                    cu.filter.ID = function(dq) {
                        var dp = dq.replace(c4, cv);
                        return function(dr) {
                            return dr.getAttribute("id") === dp
                        }
                    }
                } else {
                    delete cu.find.ID;
                    cu.filter.ID = function(dq) {
                        var dp = dq.replace(c4, cv);
                        return function(dr) {
                            var ds = typeof dr.getAttributeNode !== de && dr.getAttributeNode("id");
                            return ds && ds.value === dp
                        }
                    }
                }
                cu.find.TAG = df.getElementsByTagName ? function(dq, dp) {
                    if (typeof dp.getElementsByTagName !== de) {
                        return dp.getElementsByTagName(dq)
                    }
                } : function(dt, dp) {
                    var dq, du = [],
                        dr = 0,
                        ds = dp.getElementsByTagName(dt);
                    if (dt === "*") {
                        while ((dq = ds[dr++])) {
                            if (dq.nodeType === 1) {
                                du.push(dq)
                            }
                        }
                        return du
                    }
                    return ds
                };
                cu.find.CLASS = df.getElementsByClassName && function(dp, dq) {
                    if (typeof dq.getElementsByClassName !== de && cp) {
                        return dq.getElementsByClassName(dp)
                    }
                };
                cR = [];
                cS = [];
                if ((df.qsa = cZ.test(e.querySelectorAll))) {
                    b9(function(dp) {
                        dp.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
                        if (dp.querySelectorAll("[msallowclip^='']").length) {
                            cS.push("[*^$]=" + dk + "*(?:''|\"\")")
                        }
                        if (!dp.querySelectorAll("[selected]").length) {
                            cS.push("\\[" + dk + "*(?:value|" + cb + ")")
                        }
                        if (!dp.querySelectorAll(":checked").length) {
                            cS.push(":checked")
                        }
                    });
                    b9(function(dp) {
                        var dq = e.createElement("input");
                        dq.setAttribute("type", "hidden");
                        dp.appendChild(dq).setAttribute("name", "D");
                        if (dp.querySelectorAll("[name=d]").length) {
                            cS.push("name" + dk + "*[*^$|!~]?=")
                        }
                        if (!dp.querySelectorAll(":enabled").length) {
                            cS.push(":enabled", ":disabled")
                        }
                        dp.querySelectorAll("*,:x");
                        cS.push(",.*:")
                    })
                }
                if ((df.matchesSelector = cZ.test((cG = cn.matches || cn.webkitMatchesSelector || cn.mozMatchesSelector || cn.oMatchesSelector || cn.msMatchesSelector)))) {
                    b9(function(dp) {
                        df.disconnectedMatch = cG.call(dp, "div");
                        cG.call(dp, "[s!='']:x");
                        cR.push("!=", cN)
                    })
                }
                cS = cS.length && new RegExp(cS.join("|"));
                cR = cR.length && new RegExp(cR.join("|"));
                i = cZ.test(cn.compareDocumentPosition);
                ch = i || cZ.test(cn.contains) ? function(dp, dr) {
                    var dq = dp.nodeType === 9 ? dp.documentElement : dp,
                        ds = dr && dr.parentNode;
                    return dp === ds || !!(ds && ds.nodeType === 1 && (dq.contains ? dq.contains(ds) : dp.compareDocumentPosition && dp.compareDocumentPosition(ds) & 16))
                } : function(dp, dq) {
                    if (dq) {
                        while ((dq = dq.parentNode)) {
                            if (dq === dp) {
                                return true
                            }
                        }
                    }
                    return false
                };
                dd = i ? function(dp, dq) {
                    if (dp === dq) {
                        cx = true;
                        return 0
                    }
                    var dr = !dp.compareDocumentPosition - !dq.compareDocumentPosition;
                    if (dr) {
                        return dr
                    }
                    dr = (dp.ownerDocument || dp) === (dq.ownerDocument || dq) ? dp.compareDocumentPosition(dq) : 1;
                    if (dr & 1 || (!df.sortDetached && dq.compareDocumentPosition(dp) === dr)) {
                        if (dp === e || dp.ownerDocument === cM && ch(cM, dp)) {
                            return -1
                        }
                        if (dq === e || dq.ownerDocument === cM && ch(cM, dq)) {
                            return 1
                        }
                        return dc ? (cB.call(dc, dp) - cB.call(dc, dq)) : 0
                    }
                    return dr & 4 ? -1 : 1
                } : function(dp, ds) {
                    if (dp === ds) {
                        cx = true;
                        return 0
                    }
                    var dv, dw = 0,
                        dr = dp.parentNode,
                        du = ds.parentNode,
                        dq = [dp],
                        dt = [ds];
                    if (!dr || !du) {
                        return dp === e ? -1 : ds === e ? 1 : dr ? -1 : du ? 1 : dc ? (cB.call(dc, dp) - cB.call(dc, ds)) : 0
                    } else {
                        if (dr === du) {
                            return c9(dp, ds)
                        }
                    }
                    dv = dp;
                    while ((dv = dv.parentNode)) {
                        dq.unshift(dv)
                    }
                    dv = ds;
                    while ((dv = dv.parentNode)) {
                        dt.unshift(dv)
                    }
                    while (dq[dw] === dt[dw]) {
                        dw++
                    }
                    return dw ? c9(dq[dw], dt[dw]) : dq[dw] === cM ? -1 : dt[dw] === cM ? 1 : 0
                };
                return e
            };
            da.matches = function(i, e) {
                return da(i, null, null, e)
            };
            da.matchesSelector = function(dm, dn) {
                if ((dm.ownerDocument || dm) !== co) {
                    c6(dm)
                }
                dn = dn.replace(cQ, "='$1']");
                if (df.matchesSelector && cp && (!cR || !cR.test(dn)) && (!cS || !cS.test(dn))) {
                    try {
                        var dp = cG.call(dm, dn);
                        if (dp || df.disconnectedMatch || dm.document && dm.document.nodeType !== 11) {
                            return dp
                        }
                    } catch (i) {}
                }
                return da(dn, co, null, [dm]).length > 0
            };
            da.contains = function(e, i) {
                if ((e.ownerDocument || e) !== co) {
                    c6(e)
                }
                return ch(e, i)
            };
            da.attr = function(e, dm) {
                if ((e.ownerDocument || e) !== co) {
                    c6(e)
                }
                var i = cu.attrHandle[dm.toLowerCase()],
                    dn = i && cy.call(cu.attrHandle, dm.toLowerCase()) ? i(e, dm, !cp) : undefined;
                return dn !== undefined ? dn : df.attributes || !cp ? e.getAttribute(dm) : (dn = e.getAttributeNode(dm)) && dn.specified ? dn.value : null
            };
            da.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            da.uniqueSort = function(dq) {
                var dm, e = [],
                    dp = 0,
                    dn = 0;
                cx = !df.detectDuplicates;
                dc = !df.sortStable && dq.slice(0);
                dq.sort(dd);
                if (cx) {
                    while ((dm = dq[dn++])) {
                        if (dm === dq[dn]) {
                            dp = e.push(dn)
                        }
                    }
                    while (dp--) {
                        dq.splice(e[dp], 1)
                    }
                }
                dc = null;
                return dq
            };
            cw = da.getText = function(e) {
                var dn, dq = "",
                    dm = 0,
                    dp = e.nodeType;
                if (!dp) {
                    while ((dn = e[dm++])) {
                        dq += cw(dn)
                    }
                } else {
                    if (dp === 1 || dp === 9 || dp === 11) {
                        if (typeof e.textContent === "string") {
                            return e.textContent
                        } else {
                            for (e = e.firstChild; e; e = e.nextSibling) {
                                dq += cw(e)
                            }
                        }
                    } else {
                        if (dp === 3 || dp === 4) {
                            return e.nodeValue
                        }
                    }
                }
                return dq
            };
            cu = da.selectors = {
                cacheLength: 50,
                createPseudo: cD,
                match: cH,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        e[1] = e[1].replace(c4, cv);
                        e[3] = (e[3] || e[4] || e[5] || "").replace(c4, cv);
                        if (e[2] === "~=") {
                            e[3] = " " + e[3] + " "
                        }
                        return e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        e[1] = e[1].toLowerCase();
                        if (e[1].slice(0, 3) === "nth") {
                            if (!e[3]) {
                                da.error(e[0])
                            }
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                            e[5] = +((e[7] + e[8]) || e[3] === "odd")
                        } else {
                            if (e[3]) {
                                da.error(e[0])
                            }
                        }
                        return e
                    },
                    PSEUDO: function(i) {
                        var e, dm = !i[6] && i[2];
                        if (cH.CHILD.test(i[0])) {
                            return null
                        }
                        if (i[3]) {
                            i[2] = i[4] || i[5] || ""
                        } else {
                            if (dm && c0.test(dm) && (e = di(dm, true)) && (e = dm.indexOf(")", dm.length - e) - dm.length)) {
                                i[0] = i[0].slice(0, e);
                                i[2] = dm.slice(0, e)
                            }
                        }
                        return i.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(i) {
                        var e = i.replace(c4, cv).toLowerCase();
                        return i === "*" ? function() {
                            return true
                        } : function(dm) {
                            return dm.nodeName && dm.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(e) {
                        var i = cd[e + " "];
                        return i || (i = new RegExp("(^|" + dk + ")" + e + "(" + dk + "|$)")) && cd(e, function(dm) {
                            return i.test(typeof dm.className === "string" && dm.className || typeof dm.getAttribute !== de && dm.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(i, dm, e) {
                        return function(dn) {
                            var dp = da.attr(dn, i);
                            if (dp == null) {
                                return dm === "!="
                            }
                            if (!dm) {
                                return true
                            }
                            dp += "";
                            return dm === "=" ? dp === e : dm === "!=" ? dp !== e : dm === "^=" ? e && dp.indexOf(e) === 0 : dm === "*=" ? e && dp.indexOf(e) > -1 : dm === "$=" ? e && dp.slice(-e.length) === e : dm === "~=" ? (" " + dp + " ").indexOf(e) > -1 : dm === "|=" ? dp === e || dp.slice(0, e.length + 1) === e + "-" : false
                        }
                    },
                    CHILD: function(dr, ds, e, i, dn) {
                        var dq = dr.slice(0, 3) !== "nth",
                            dm = dr.slice(-4) !== "last",
                            dp = ds === "of-type";
                        return i === 1 && dn === 0 ? function(dt) {
                            return !!dt.parentNode
                        } : function(dx, du, dF) {
                            var dt, dB, dz, dv, dA, dD, dw = dq !== dm ? "nextSibling" : "previousSibling",
                                dC = dx.parentNode,
                                dy = dp && dx.nodeName.toLowerCase(),
                                dE = !dF && !dp;
                            if (dC) {
                                if (dq) {
                                    while (dw) {
                                        dz = dx;
                                        while ((dz = dz[dw])) {
                                            if (dp ? dz.nodeName.toLowerCase() === dy : dz.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        dD = dw = dr === "only" && !dD && "nextSibling"
                                    }
                                    return true
                                }
                                dD = [dm ? dC.firstChild : dC.lastChild];
                                if (dm && dE) {
                                    dB = dC[ct] || (dC[ct] = {});
                                    dt = dB[dr] || [];
                                    dA = dt[0] === cm && dt[1];
                                    dv = dt[0] === cm && dt[2];
                                    dz = dA && dC.childNodes[dA];
                                    while ((dz = ++dA && dz && dz[dw] || (dv = dA = 0) || dD.pop())) {
                                        if (dz.nodeType === 1 && ++dv && dz === dx) {
                                            dB[dr] = [cm, dA, dv];
                                            break
                                        }
                                    }
                                } else {
                                    if (dE && (dt = (dx[ct] || (dx[ct] = {}))[dr]) && dt[0] === cm) {
                                        dv = dt[1]
                                    } else {
                                        while ((dz = ++dA && dz && dz[dw] || (dv = dA = 0) || dD.pop())) {
                                            if ((dp ? dz.nodeName.toLowerCase() === dy : dz.nodeType === 1) && ++dv) {
                                                if (dE) {
                                                    (dz[ct] || (dz[ct] = {}))[dr] = [cm, dv]
                                                }
                                                if (dz === dx) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                dv -= dn;
                                return dv === i || (dv % i === 0 && dv / i >= 0)
                            }
                        }
                    },
                    PSEUDO: function(dn, i) {
                        var e, dm = cu.pseudos[dn] || cu.setFilters[dn.toLowerCase()] || da.error("unsupported pseudo: " + dn);
                        if (dm[ct]) {
                            return dm(i)
                        }
                        if (dm.length > 1) {
                            e = [dn, dn, "", i];
                            return cu.setFilters.hasOwnProperty(dn.toLowerCase()) ? cD(function(dt, ds) {
                                var dq, dr = dm(dt, i),
                                    dp = dr.length;
                                while (dp--) {
                                    dq = cB.call(dt, dr[dp]);
                                    dt[dq] = !(ds[dq] = dr[dp])
                                }
                            }) : function(dp) {
                                return dm(dp, 0, e)
                            }
                        }
                        return dm
                    }
                },
                pseudos: {
                    not: cD(function(dn) {
                        var e = [],
                            dm = [],
                            i = ce(dn.replace(c3, "$1"));
                        return i[ct] ? cD(function(dt, ds, dp, dv) {
                            var dq, du = i(dt, null, dv, []),
                                dr = dt.length;
                            while (dr--) {
                                if ((dq = du[dr])) {
                                    dt[dr] = !(ds[dr] = dq)
                                }
                            }
                        }) : function(dq, dp, dr) {
                            e[0] = dq;
                            i(e, null, dr, dm);
                            return !dm.pop()
                        }
                    }),
                    has: cD(function(e) {
                        return function(i) {
                            return da(e, i).length > 0
                        }
                    }),
                    contains: cD(function(e) {
                        return function(i) {
                            return (i.textContent || i.innerText || cw(i)).indexOf(e) > -1
                        }
                    }),
                    lang: cD(function(e) {
                        if (!cX.test(e || "")) {
                            da.error("unsupported lang: " + e)
                        }
                        e = e.replace(c4, cv).toLowerCase();
                        return function(i) {
                            var dm;
                            do {
                                if ((dm = cp ? i.lang : i.getAttribute("xml:lang") || i.getAttribute("lang"))) {
                                    dm = dm.toLowerCase();
                                    return dm === e || dm.indexOf(e + "-") === 0
                                }
                            } while ((i = i.parentNode) && i.nodeType === 1);
                            return false
                        }
                    }),
                    target: function(e) {
                        var i = dl.location && dl.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === cn
                    },
                    focus: function(e) {
                        return e === co.activeElement && (!co.hasFocus || co.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === false
                    },
                    disabled: function(e) {
                        return e.disabled === true
                    },
                    checked: function(e) {
                        var i = e.nodeName.toLowerCase();
                        return (i === "input" && !!e.checked) || (i === "option" && !!e.selected)
                    },
                    selected: function(e) {
                        if (e.parentNode) {
                            e.parentNode.selectedIndex
                        }
                        return e.selected === true
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeType < 6) {
                                return false
                            }
                        }
                        return true
                    },
                    parent: function(e) {
                        return !cu.pseudos.empty(e)
                    },
                    header: function(e) {
                        return cW.test(e.nodeName)
                    },
                    input: function(e) {
                        return cY.test(e.nodeName)
                    },
                    button: function(e) {
                        var i = e.nodeName.toLowerCase();
                        return i === "input" && e.type === "button" || i === "button"
                    },
                    text: function(i) {
                        var e;
                        return i.nodeName.toLowerCase() === "input" && i.type === "text" && ((e = i.getAttribute("type")) == null || e.toLowerCase() === "text")
                    },
                    first: cl(function() {
                        return [0]
                    }),
                    last: cl(function(i, e) {
                        return [e - 1]
                    }),
                    eq: cl(function(dm, i, e) {
                        return [e < 0 ? e + i : e]
                    }),
                    even: cl(function(dn, dm) {
                        var e = 0;
                        for (; e < dm; e += 2) {
                            dn.push(e)
                        }
                        return dn
                    }),
                    odd: cl(function(dn, dm) {
                        var e = 1;
                        for (; e < dm; e += 2) {
                            dn.push(e)
                        }
                        return dn
                    }),
                    lt: cl(function(dp, dn, e) {
                        var dm = e < 0 ? e + dn : e;
                        for (; --dm >= 0;) {
                            dp.push(dm)
                        }
                        return dp
                    }),
                    gt: cl(function(dp, dn, e) {
                        var dm = e < 0 ? e + dn : e;
                        for (; ++dm < dn;) {
                            dp.push(dm)
                        }
                        return dp
                    })
                }
            };
            cu.pseudos.nth = cu.pseudos.eq;
            for (cz in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                cu.pseudos[cz] = ck(cz)
            }
            for (cz in {
                    submit: true,
                    reset: true
                }) {
                cu.pseudos[cz] = ci(cz)
            }

            function c7() {}
            c7.prototype = cu.filters = cu.pseudos;
            cu.setFilters = new c7();
            di = da.tokenize = function(dr, dp) {
                var dn, dm, dt, du, ds, i, dq, e = dh[dr + " "];
                if (e) {
                    return dp ? 0 : e.slice(0)
                }
                ds = dr;
                i = [];
                dq = cu.preFilter;
                while (ds) {
                    if (!dn || (dm = cU.exec(ds))) {
                        if (dm) {
                            ds = ds.slice(dm[0].length) || ds
                        }
                        i.push((dt = []))
                    }
                    dn = false;
                    if ((dm = cT.exec(ds))) {
                        dn = dm.shift();
                        dt.push({
                            value: dn,
                            type: dm[0].replace(c3, " ")
                        });
                        ds = ds.slice(dn.length)
                    }
                    for (du in cu.filter) {
                        if ((dm = cH[du].exec(ds)) && (!dq[du] || (dm = dq[du](dm)))) {
                            dn = dm.shift();
                            dt.push({
                                value: dn,
                                type: du,
                                matches: dm
                            });
                            ds = ds.slice(dn.length)
                        }
                    }
                    if (!dn) {
                        break
                    }
                }
                return dp ? ds.length : ds ? da.error(dr) : dh(dr, i).slice(0)
            };

            function dj(dp) {
                var e = 0,
                    dm = dp.length,
                    dn = "";
                for (; e < dm; e++) {
                    dn += dp[e].value
                }
                return dn
            }

            function b6(dq, dm, e) {
                var dn = dm.dir,
                    i = e && dn === "parentNode",
                    dp = cq++;
                return dm.first ? function(ds, dr, dt) {
                    while ((ds = ds[dn])) {
                        if (ds.nodeType === 1 || i) {
                            return dq(ds, dr, dt)
                        }
                    }
                } : function(ds, dr, dw) {
                    var du, dv, dt = [cm, dp];
                    if (dw) {
                        while ((ds = ds[dn])) {
                            if (ds.nodeType === 1 || i) {
                                if (dq(ds, dr, dw)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while ((ds = ds[dn])) {
                            if (ds.nodeType === 1 || i) {
                                dv = ds[ct] || (ds[ct] = {});
                                if ((du = dv[dn]) && du[0] === cm && du[1] === dp) {
                                    return (dt[2] = du[2])
                                } else {
                                    dv[dn] = dt;
                                    if ((dt[2] = dq(ds, dr, dw))) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function cs(e) {
                return e.length > 1 ? function(dn, dm, dq) {
                    var dp = e.length;
                    while (dp--) {
                        if (!e[dp](dn, dm, dq)) {
                            return false
                        }
                    }
                    return true
                } : e[0]
            }

            function cJ(dq, e, dp) {
                var dm = 0,
                    dn = e.length;
                for (; dm < dn; dm++) {
                    da(dq, e[dm], dp)
                }
                return dp
            }

            function cg(du, dr, dn, e, dv) {
                var dm, dt = [],
                    dp = 0,
                    dq = du.length,
                    ds = dr != null;
                for (; dp < dq; dp++) {
                    if ((dm = du[dp])) {
                        if (!dn || dn(dm, e, dv)) {
                            dt.push(dm);
                            if (ds) {
                                dr.push(dp)
                            }
                        }
                    }
                }
                return dt
            }

            function c8(dp, dq, e, i, dm, dn) {
                if (i && !i[ct]) {
                    i = c8(i)
                }
                if (dm && !dm[ct]) {
                    dm = c8(dm, dn)
                }
                return cD(function(dB, dA, dr, dD) {
                    var dC, du, ds, dz = [],
                        dx = [],
                        dy = dA.length,
                        dt = dB || cJ(dq || "*", dr.nodeType ? [dr] : dr, []),
                        dv = dp && (dB || !dq) ? cg(dt, dz, dp, dr, dD) : dt,
                        dw = e ? dm || (dB ? dp : dy || i) ? [] : dA : dv;
                    if (e) {
                        e(dv, dw, dr, dD)
                    }
                    if (i) {
                        dC = cg(dw, dx);
                        i(dC, [], dr, dD);
                        du = dC.length;
                        while (du--) {
                            if ((ds = dC[du])) {
                                dw[dx[du]] = !(dv[dx[du]] = ds)
                            }
                        }
                    }
                    if (dB) {
                        if (dm || dp) {
                            if (dm) {
                                dC = [];
                                du = dw.length;
                                while (du--) {
                                    if ((ds = dw[du])) {
                                        dC.push((dv[du] = ds))
                                    }
                                }
                                dm(null, (dw = []), dC, dD)
                            }
                            du = dw.length;
                            while (du--) {
                                if ((ds = dw[du]) && (dC = dm ? cB.call(dB, ds) : dz[du]) > -1) {
                                    dB[dC] = !(dA[dC] = ds)
                                }
                            }
                        }
                    } else {
                        dw = cg(dw === dA ? dw.splice(dy, dw.length) : dw);
                        if (dm) {
                            dm(null, dA, dw, dD)
                        } else {
                            cO.apply(dA, dw)
                        }
                    }
                })
            }

            function cF(dw) {
                var e, du, dp, dr = dw.length,
                    dq = cu.relative[dw[0].type],
                    dn = dq || cu.relative[" "],
                    dm = dq ? 1 : 0,
                    dt = b6(function(i) {
                        return i === e
                    }, dn, true),
                    ds = b6(function(i) {
                        return cB.call(e, i) > -1
                    }, dn, true),
                    dv = [function(dx, i, dy) {
                        return (!dq && (dy || i !== cK)) || ((e = i).nodeType ? dt(dx, i, dy) : ds(dx, i, dy))
                    }];
                for (; dm < dr; dm++) {
                    if ((du = cu.relative[dw[dm].type])) {
                        dv = [b6(cs(dv), du)]
                    } else {
                        du = cu.filter[dw[dm].type].apply(null, dw[dm].matches);
                        if (du[ct]) {
                            dp = ++dm;
                            for (; dp < dr; dp++) {
                                if (cu.relative[dw[dp].type]) {
                                    break
                                }
                            }
                            return c8(dm > 1 && cs(dv), dm > 1 && dj(dw.slice(0, dm - 1).concat({
                                value: dw[dm - 2].type === " " ? "*" : ""
                            })).replace(c3, "$1"), du, dm < dp && cF(dw.slice(dm, dp)), dp < dr && cF((dw = dw.slice(dp))), dp < dr && dj(dw))
                        }
                        dv.push(du)
                    }
                }
                return cs(dv)
            }

            function cE(dm, dn) {
                var i = dn.length > 0,
                    e = dm.length > 0,
                    dp = function(dC, dq, dF, dB, dA) {
                        var dt, dw, dz, dy = 0,
                            dv = "0",
                            dE = dC && [],
                            dD = [],
                            dr = cK,
                            du = dC || e && cu.find.TAG("*", dA),
                            ds = (cm += dr == null ? 1 : Math.random() || 0.1),
                            dx = du.length;
                        if (dA) {
                            cK = dq !== co && dq
                        }
                        for (; dv !== dx && (dt = du[dv]) != null; dv++) {
                            if (e && dt) {
                                dw = 0;
                                while ((dz = dm[dw++])) {
                                    if (dz(dt, dq, dF)) {
                                        dB.push(dt);
                                        break
                                    }
                                }
                                if (dA) {
                                    cm = ds
                                }
                            }
                            if (i) {
                                if ((dt = !dz && dt)) {
                                    dy--
                                }
                                if (dC) {
                                    dE.push(dt)
                                }
                            }
                        }
                        dy += dv;
                        if (i && dv !== dy) {
                            dw = 0;
                            while ((dz = dn[dw++])) {
                                dz(dE, dD, dq, dF)
                            }
                            if (dC) {
                                if (dy > 0) {
                                    while (dv--) {
                                        if (!(dE[dv] || dD[dv])) {
                                            dD[dv] = cL.call(dB)
                                        }
                                    }
                                }
                                dD = cg(dD)
                            }
                            cO.apply(dB, dD);
                            if (dA && !dC && dD.length > 0 && (dy + dn.length) > 1) {
                                da.uniqueSort(dB)
                            }
                        }
                        if (dA) {
                            cm = ds;
                            cK = dr
                        }
                        return dE
                    };
                return i ? cD(dp) : dp
            }
            ce = da.compile = function(dq, dp) {
                var dn, dr = [],
                    dm = [],
                    e = cf[dq + " "];
                if (!e) {
                    if (!dp) {
                        dp = di(dq)
                    }
                    dn = dp.length;
                    while (dn--) {
                        e = cF(dp[dn]);
                        if (e[ct]) {
                            dr.push(e)
                        } else {
                            dm.push(e)
                        }
                    }
                    e = cf(dq, cE(dm, dr));
                    e.selector = dq
                }
                return e
            };
            c5 = da.select = function(dt, dm, dr, ds) {
                var dp, dv, du, dw, dn, e = typeof dt === "function" && dt,
                    dq = !ds && di((dt = e.selector || dt));
                dr = dr || [];
                if (dq.length === 1) {
                    dv = dq[0] = dq[0].slice(0);
                    if (dv.length > 2 && (du = dv[0]).type === "ID" && df.getById && dm.nodeType === 9 && cp && cu.relative[dv[1].type]) {
                        dm = (cu.find.ID(du.matches[0].replace(c4, cv), dm) || [])[0];
                        if (!dm) {
                            return dr
                        } else {
                            if (e) {
                                dm = dm.parentNode
                            }
                        }
                        dt = dt.slice(dv.shift().value.length)
                    }
                    dp = cH.needsContext.test(dt) ? 0 : dv.length;
                    while (dp--) {
                        du = dv[dp];
                        if (cu.relative[(dw = du.type)]) {
                            break
                        }
                        if ((dn = cu.find[dw])) {
                            if ((ds = dn(du.matches[0].replace(c4, cv), c2.test(dv[0].type) && dg(dm.parentNode) || dm))) {
                                dv.splice(dp, 1);
                                dt = ds.length && dj(dv);
                                if (!dt) {
                                    cO.apply(dr, ds);
                                    return dr
                                }
                                break
                            }
                        }
                    }
                }(e || ce(dt, dq))(ds, dm, !cp, dr, c2.test(dt) && dg(dm.parentNode) || dm);
                return dr
            };
            df.sortStable = ct.split("").sort(dd).join("") === ct;
            df.detectDuplicates = !!cx;
            c6();
            df.sortDetached = b9(function(e) {
                return e.compareDocumentPosition(co.createElement("div")) & 1
            });
            if (!b9(function(e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                b7("type|href|height|width", function(e, dm, i) {
                    if (!i) {
                        return e.getAttribute(dm, dm.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!df.attributes || !b9(function(e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                b7("value", function(e, dm, i) {
                    if (!i && e.nodeName.toLowerCase() === "input") {
                        return e.defaultValue
                    }
                })
            }
            if (!b9(function(e) {
                    return e.getAttribute("disabled") == null
                })) {
                b7(cb, function(e, dm, i) {
                    var dn;
                    if (!i) {
                        return e[dm] === true ? dm.toLowerCase() : (dn = e.getAttributeNode(dm)) && dn.specified ? dn.value : null
                    }
                })
            }
            return da
        })(b0);
    au.find = bP;
    au.expr = bP.selectors;
    au.expr[":"] = au.expr.pseudos;
    au.unique = bP.uniqueSort;
    au.text = bP.getText;
    au.isXMLDoc = bP.isXML;
    au.contains = bP.contains;
    var be = au.expr.match.needsContext;
    var bx = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
    var a5 = /^.[^:#\[\.,]*$/;

    function b1(e, b6, i) {
        if (au.isFunction(b6)) {
            return au.grep(e, function(b7, b8) {
                return !!b6.call(b7, b8, b7) !== i
            })
        }
        if (b6.nodeType) {
            return au.grep(e, function(b7) {
                return (b7 === b6) !== i
            })
        }
        if (typeof b6 === "string") {
            if (a5.test(b6)) {
                return au.filter(b6, e, i)
            }
            b6 = au.filter(b6, e)
        }
        return au.grep(e, function(b7) {
            return (au.inArray(b7, b6) >= 0) !== i
        })
    }
    au.filter = function(b6, i, b7) {
        var e = i[0];
        if (b7) {
            b6 = ":not(" + b6 + ")"
        }
        return i.length === 1 && e.nodeType === 1 ? au.find.matchesSelector(e, b6) ? [e] : [] : au.find.matches(b6, au.grep(i, function(b8) {
            return b8.nodeType === 1
        }))
    };
    au.fn.extend({
        find: function(b8) {
            var e, b7 = [],
                b9 = this,
                b6 = b9.length;
            if (typeof b8 !== "string") {
                return this.pushStack(au(b8).filter(function() {
                    for (e = 0; e < b6; e++) {
                        if (au.contains(b9[e], this)) {
                            return true
                        }
                    }
                }))
            }
            for (e = 0; e < b6; e++) {
                au.find(b8, b9[e], b7)
            }
            b7 = this.pushStack(b6 > 1 ? au.unique(b7) : b7);
            b7.selector = this.selector ? this.selector + " " + b8 : b8;
            return b7
        },
        filter: function(e) {
            return this.pushStack(b1(this, e || [], false))
        },
        not: function(e) {
            return this.pushStack(b1(this, e || [], true))
        },
        is: function(e) {
            return !!b1(this, typeof e === "string" && be.test(e) ? au(e) : e || [], false).length
        }
    });
    var bl, S = b0.document,
        br = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        am = au.fn.init = function(b7, e) {
            var b6, i;
            if (!b7) {
                return this
            }
            if (typeof b7 === "string") {
                if (b7.charAt(0) === "<" && b7.charAt(b7.length - 1) === ">" && b7.length >= 3) {
                    b6 = [null, b7, null]
                } else {
                    b6 = br.exec(b7)
                }
                if (b6 && (b6[1] || !e)) {
                    if (b6[1]) {
                        e = e instanceof au ? e[0] : e;
                        au.merge(this, au.parseHTML(b6[1], e && e.nodeType ? e.ownerDocument || e : S, true));
                        if (bx.test(b6[1]) && au.isPlainObject(e)) {
                            for (b6 in e) {
                                if (au.isFunction(this[b6])) {
                                    this[b6](e[b6])
                                } else {
                                    this.attr(b6, e[b6])
                                }
                            }
                        }
                        return this
                    } else {
                        i = S.getElementById(b6[2]);
                        if (i && i.parentNode) {
                            if (i.id !== b6[2]) {
                                return bl.find(b7)
                            }
                            this.length = 1;
                            this[0] = i
                        }
                        this.context = S;
                        this.selector = b7;
                        return this
                    }
                } else {
                    if (!e || e.jquery) {
                        return (e || bl).find(b7)
                    } else {
                        return this.constructor(e).find(b7)
                    }
                }
            } else {
                if (b7.nodeType) {
                    this.context = this[0] = b7;
                    this.length = 1;
                    return this
                } else {
                    if (au.isFunction(b7)) {
                        return typeof bl.ready !== "undefined" ? bl.ready(b7) : b7(au)
                    }
                }
            }
            if (b7.selector !== undefined) {
                this.selector = b7.selector;
                this.context = b7.context
            }
            return au.makeArray(b7, this)
        };
    am.prototype = au.fn;
    bl = au(S);
    var bn = /^(?:parents|prev(?:Until|All))/,
        ah = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    au.extend({
        dir: function(b6, i, b8) {
            var b7 = [],
                e = b6[i];
            while (e && e.nodeType !== 9 && (b8 === undefined || e.nodeType !== 1 || !au(e).is(b8))) {
                if (e.nodeType === 1) {
                    b7.push(e)
                }
                e = e[i]
            }
            return b7
        },
        sibling: function(i, e) {
            var b6 = [];
            for (; i; i = i.nextSibling) {
                if (i.nodeType === 1 && i !== e) {
                    b6.push(i)
                }
            }
            return b6
        }
    });
    au.fn.extend({
        has: function(b7) {
            var e, b8 = au(b7, this),
                b6 = b8.length;
            return this.filter(function() {
                for (e = 0; e < b6; e++) {
                    if (au.contains(this, b8[e])) {
                        return true
                    }
                }
            })
        },
        closest: function(cb, e) {
            var b6, b7 = 0,
                b8 = this.length,
                b9 = [],
                ca = be.test(cb) || typeof cb !== "string" ? au(cb, e || this.context) : 0;
            for (; b7 < b8; b7++) {
                for (b6 = this[b7]; b6 && b6 !== e; b6 = b6.parentNode) {
                    if (b6.nodeType < 11 && (ca ? ca.index(b6) > -1 : b6.nodeType === 1 && au.find.matchesSelector(b6, cb))) {
                        b9.push(b6);
                        break
                    }
                }
            }
            return this.pushStack(b9.length > 1 ? au.unique(b9) : b9)
        },
        index: function(e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
            }
            if (typeof e === "string") {
                return au.inArray(this[0], au(e))
            }
            return au.inArray(e.jquery ? e[0] : e, this)
        },
        add: function(i, e) {
            return this.pushStack(au.unique(au.merge(this.get(), au(i, e))))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function bO(e, i) {
        do {
            e = e[i]
        } while (e && e.nodeType !== 1);
        return e
    }
    au.each({
        parent: function(e) {
            var i = e.parentNode;
            return i && i.nodeType !== 11 ? i : null
        },
        parents: function(e) {
            return au.dir(e, "parentNode")
        },
        parentsUntil: function(e, b6, b7) {
            return au.dir(e, "parentNode", b7)
        },
        next: function(e) {
            return bO(e, "nextSibling")
        },
        prev: function(e) {
            return bO(e, "previousSibling")
        },
        nextAll: function(e) {
            return au.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return au.dir(e, "previousSibling")
        },
        nextUntil: function(e, b6, b7) {
            return au.dir(e, "nextSibling", b7)
        },
        prevUntil: function(e, b6, b7) {
            return au.dir(e, "previousSibling", b7)
        },
        siblings: function(e) {
            return au.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return au.sibling(e.firstChild)
        },
        contents: function(e) {
            return au.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : au.merge([], e.childNodes)
        }
    }, function(i, e) {
        au.fn[i] = function(b8, b7) {
            var b6 = au.map(this, e, b8);
            if (i.slice(-5) !== "Until") {
                b7 = b8
            }
            if (b7 && typeof b7 === "string") {
                b6 = au.filter(b7, b6)
            }
            if (this.length > 1) {
                if (!ah[i]) {
                    b6 = au.unique(b6)
                }
                if (bn.test(i)) {
                    b6 = b6.reverse()
                }
            }
            return this.pushStack(b6)
        }
    });
    var bi = (/\S+/g);
    var aB = {};

    function C(i) {
        var e = aB[i] = {};
        au.each(i.match(bi) || [], function(b6, b7) {
            e[b7] = true
        });
        return e
    }
    au.Callbacks = function(cc) {
        cc = typeof cc === "string" ? (aB[cc] || C(cc)) : au.extend({}, cc);
        var b6, cb, i, b8, b7, b9, ca = [],
            ce = !cc.once && [],
            e = function(cf) {
                cb = cc.memory && cf;
                i = true;
                b7 = b9 || 0;
                b9 = 0;
                b8 = ca.length;
                b6 = true;
                for (; ca && b7 < b8; b7++) {
                    if (ca[b7].apply(cf[0], cf[1]) === false && cc.stopOnFalse) {
                        cb = false;
                        break
                    }
                }
                b6 = false;
                if (ca) {
                    if (ce) {
                        if (ce.length) {
                            e(ce.shift())
                        }
                    } else {
                        if (cb) {
                            ca = []
                        } else {
                            cd.disable()
                        }
                    }
                }
            },
            cd = {
                add: function() {
                    if (ca) {
                        var cg = ca.length;
                        (function cf(ch) {
                            au.each(ch, function(ci, cj) {
                                var ck = au.type(cj);
                                if (ck === "function") {
                                    if (!cc.unique || !cd.has(cj)) {
                                        ca.push(cj)
                                    }
                                } else {
                                    if (cj && cj.length && ck !== "string") {
                                        cf(cj)
                                    }
                                }
                            })
                        })(arguments);
                        if (b6) {
                            b8 = ca.length
                        } else {
                            if (cb) {
                                b9 = cg;
                                e(cb)
                            }
                        }
                    }
                    return this
                },
                remove: function() {
                    if (ca) {
                        au.each(arguments, function(cf, cg) {
                            var ch;
                            while ((ch = au.inArray(cg, ca, ch)) > -1) {
                                ca.splice(ch, 1);
                                if (b6) {
                                    if (ch <= b8) {
                                        b8--
                                    }
                                    if (ch <= b7) {
                                        b7--
                                    }
                                }
                            }
                        })
                    }
                    return this
                },
                has: function(cf) {
                    return cf ? au.inArray(cf, ca) > -1 : !!(ca && ca.length)
                },
                empty: function() {
                    ca = [];
                    b8 = 0;
                    return this
                },
                disable: function() {
                    ca = ce = cb = undefined;
                    return this
                },
                disabled: function() {
                    return !ca
                },
                lock: function() {
                    ce = undefined;
                    if (!cb) {
                        cd.disable()
                    }
                    return this
                },
                locked: function() {
                    return !ce
                },
                fireWith: function(cg, cf) {
                    if (ca && (!i || ce)) {
                        cf = cf || [];
                        cf = [cg, cf.slice ? cf.slice() : cf];
                        if (b6) {
                            ce.push(cf)
                        } else {
                            e(cf)
                        }
                    }
                    return this
                },
                fire: function() {
                    cd.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!i
                }
            };
        return cd
    };
    au.extend({
        Deferred: function(i) {
            var b8 = [
                    ["resolve", "done", au.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", au.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", au.Callbacks("memory")]
                ],
                b7 = "pending",
                b6 = {
                    state: function() {
                        return b7
                    },
                    always: function() {
                        e.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var b9 = arguments;
                        return au.Deferred(function(ca) {
                            au.each(b8, function(cc, cd) {
                                var cb = au.isFunction(b9[cc]) && b9[cc];
                                e[cd[1]](function() {
                                    var ce = cb && cb.apply(this, arguments);
                                    if (ce && au.isFunction(ce.promise)) {
                                        ce.promise().done(ca.resolve).fail(ca.reject).progress(ca.notify)
                                    } else {
                                        ca[cd[0] + "With"](this === b6 ? ca.promise() : this, cb ? [ce] : arguments)
                                    }
                                })
                            });
                            b9 = null
                        }).promise()
                    },
                    promise: function(b9) {
                        return b9 != null ? au.extend(b9, b6) : b6
                    }
                },
                e = {};
            b6.pipe = b6.then;
            au.each(b8, function(b9, cc) {
                var ca = cc[2],
                    cb = cc[3];
                b6[cc[1]] = ca.add;
                if (cb) {
                    ca.add(function() {
                        b7 = cb
                    }, b8[b9 ^ 1][2].disable, b8[2][2].lock)
                }
                e[cc[0]] = function() {
                    e[cc[0] + "With"](this === e ? b6 : this, arguments);
                    return this
                };
                e[cc[0] + "With"] = ca.fireWith
            });
            b6.promise(e);
            if (i) {
                i.call(e, e)
            }
            return e
        },
        when: function(cd) {
            var b6 = 0,
                cc = bQ.call(arguments),
                b7 = cc.length,
                ca = b7 !== 1 || (cd && au.isFunction(cd.promise)) ? b7 : 0,
                e = ca === 1 ? cd : au.Deferred(),
                ce = function(cg, cf, ch) {
                    return function(i) {
                        cf[cg] = this;
                        ch[cg] = arguments.length > 1 ? bQ.call(arguments) : i;
                        if (ch === b9) {
                            e.notifyWith(cf, ch)
                        } else {
                            if (!(--ca)) {
                                e.resolveWith(cf, ch)
                            }
                        }
                    }
                },
                b9, b8, cb;
            if (b7 > 1) {
                b9 = new Array(b7);
                b8 = new Array(b7);
                cb = new Array(b7);
                for (; b6 < b7; b6++) {
                    if (cc[b6] && au.isFunction(cc[b6].promise)) {
                        cc[b6].promise().done(ce(b6, cb, cc)).fail(e.reject).progress(ce(b6, b8, b9))
                    } else {
                        --ca
                    }
                }
            }
            if (!ca) {
                e.resolveWith(cb, cc)
            }
            return e.promise()
        }
    });
    var aS;
    au.fn.ready = function(e) {
        au.ready.promise().done(e);
        return this
    };
    au.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(e) {
            if (e) {
                au.readyWait++
            } else {
                au.ready(true)
            }
        },
        ready: function(e) {
            if (e === true ? --au.readyWait : au.isReady) {
                return
            }
            if (!S.body) {
                return setTimeout(au.ready)
            }
            au.isReady = true;
            if (e !== true && --au.readyWait > 0) {
                return
            }
            aS.resolveWith(S, [au]);
            if (au.fn.triggerHandler) {
                au(S).triggerHandler("ready");
                au(S).off("ready")
            }
        }
    });

    function P() {
        if (S.addEventListener) {
            S.removeEventListener("DOMContentLoaded", y, false);
            b0.removeEventListener("load", y, false)
        } else {
            S.detachEvent("onreadystatechange", y);
            b0.detachEvent("onload", y)
        }
    }

    function y() {
        if (S.addEventListener || event.type === "load" || S.readyState === "complete") {
            P();
            au.ready()
        }
    }
    au.ready.promise = function(b7) {
        if (!aS) {
            aS = au.Deferred();
            if (S.readyState === "complete") {
                setTimeout(au.ready)
            } else {
                if (S.addEventListener) {
                    S.addEventListener("DOMContentLoaded", y, false);
                    b0.addEventListener("load", y, false)
                } else {
                    S.attachEvent("onreadystatechange", y);
                    b0.attachEvent("onload", y);
                    var b8 = false;
                    try {
                        b8 = b0.frameElement == null && S.documentElement
                    } catch (b6) {}
                    if (b8 && b8.doScroll) {
                        (function i() {
                            if (!au.isReady) {
                                try {
                                    b8.doScroll("left")
                                } catch (b9) {
                                    return setTimeout(i, 50)
                                }
                                P();
                                au.ready()
                            }
                        })()
                    }
                }
            }
        }
        return aS.promise(b7)
    };
    var bR = typeof undefined;
    var aj;
    for (aj in au(bS)) {
        break
    }
    bS.ownLast = aj !== "0";
    bS.inlineBlockNeedsLayout = false;
    au(function() {
        var b7, b6, e, i;
        e = S.getElementsByTagName("body")[0];
        if (!e || !e.style) {
            return
        }
        b6 = S.createElement("div");
        i = S.createElement("div");
        i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        e.appendChild(i).appendChild(b6);
        if (typeof b6.style.zoom !== bR) {
            b6.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            bS.inlineBlockNeedsLayout = b7 = b6.offsetWidth === 3;
            if (b7) {
                e.style.zoom = 1
            }
        }
        e.removeChild(i)
    });
    (function() {
        var i = S.createElement("div");
        if (bS.deleteExpando == null) {
            bS.deleteExpando = true;
            try {
                delete i.test
            } catch (b6) {
                bS.deleteExpando = false
            }
        }
        i = null
    })();
    au.acceptData = function(e) {
        var i = au.noData[(e.nodeName + " ").toLowerCase()],
            b6 = +e.nodeType || 1;
        return b6 !== 1 && b6 !== 9 ? false : !i || i !== true && e.getAttribute("classid") === i
    };
    var aI = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bd = /([A-Z])/g;

    function L(b7, b8, i) {
        if (i === undefined && b7.nodeType === 1) {
            var b9 = "data-" + b8.replace(bd, "-$1").toLowerCase();
            i = b7.getAttribute(b9);
            if (typeof i === "string") {
                try {
                    i = i === "true" ? true : i === "false" ? false : i === "null" ? null : +i + "" === i ? +i : aI.test(i) ? au.parseJSON(i) : i
                } catch (b6) {}
                au.data(b7, b8, i)
            } else {
                i = undefined
            }
        }
        return i
    }

    function ar(i) {
        var e;
        for (e in i) {
            if (e === "data" && au.isEmptyObject(i[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }

    function ao(b6, ca, i, cb) {
        if (!au.acceptData(b6)) {
            return
        }
        var cc, cd, b8 = au.expando,
            b9 = b6.nodeType,
            e = b9 ? au.cache : b6,
            b7 = b9 ? b6[b8] : b6[b8] && b8;
        if ((!b7 || !e[b7] || (!cb && !e[b7].data)) && i === undefined && typeof ca === "string") {
            return
        }
        if (!b7) {
            if (b9) {
                b7 = b6[b8] = O.pop() || au.guid++
            } else {
                b7 = b8
            }
        }
        if (!e[b7]) {
            e[b7] = b9 ? {} : {
                toJSON: au.noop
            }
        }
        if (typeof ca === "object" || typeof ca === "function") {
            if (cb) {
                e[b7] = au.extend(e[b7], ca)
            } else {
                e[b7].data = au.extend(e[b7].data, ca)
            }
        }
        cd = e[b7];
        if (!cb) {
            if (!cd.data) {
                cd.data = {}
            }
            cd = cd.data
        }
        if (i !== undefined) {
            cd[au.camelCase(ca)] = i
        }
        if (typeof ca === "string") {
            cc = cd[ca];
            if (cc == null) {
                cc = cd[au.camelCase(ca)]
            }
        } else {
            cc = cd
        }
        return cc
    }

    function ap(b6, ca, cb) {
        if (!au.acceptData(b6)) {
            return
        }
        var cc, b7, b9 = b6.nodeType,
            e = b9 ? au.cache : b6,
            b8 = b9 ? b6[au.expando] : au.expando;
        if (!e[b8]) {
            return
        }
        if (ca) {
            cc = cb ? e[b8] : e[b8].data;
            if (cc) {
                if (!au.isArray(ca)) {
                    if (ca in cc) {
                        ca = [ca]
                    } else {
                        ca = au.camelCase(ca);
                        if (ca in cc) {
                            ca = [ca]
                        } else {
                            ca = ca.split(" ")
                        }
                    }
                } else {
                    ca = ca.concat(au.map(ca, au.camelCase))
                }
                b7 = ca.length;
                while (b7--) {
                    delete cc[ca[b7]]
                }
                if (cb ? !ar(cc) : !au.isEmptyObject(cc)) {
                    return
                }
            }
        }
        if (!cb) {
            delete e[b8].data;
            if (!ar(e[b8])) {
                return
            }
        }
        if (b9) {
            au.cleanData([b6], true)
        } else {
            if (bS.deleteExpando || e != e.window) {
                delete e[b8]
            } else {
                e[b8] = null
            }
        }
    }
    au.extend({
        cache: {},
        noData: {
            "applet ": true,
            "embed ": true,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            e = e.nodeType ? au.cache[e[au.expando]] : e[au.expando];
            return !!e && !ar(e)
        },
        data: function(i, b6, e) {
            return ao(i, b6, e)
        },
        removeData: function(e, i) {
            return ap(e, i)
        },
        _data: function(i, b6, e) {
            return ao(i, b6, e, true)
        },
        _removeData: function(e, i) {
            return ap(e, i, true)
        }
    });
    au.fn.extend({
        data: function(b9, cb) {
            var b8, ca, b6, b7 = this[0],
                e = b7 && b7.attributes;
            if (b9 === undefined) {
                if (this.length) {
                    b6 = au.data(b7);
                    if (b7.nodeType === 1 && !au._data(b7, "parsedAttrs")) {
                        b8 = e.length;
                        while (b8--) {
                            if (e[b8]) {
                                ca = e[b8].name;
                                if (ca.indexOf("data-") === 0) {
                                    ca = au.camelCase(ca.slice(5));
                                    L(b7, ca, b6[ca])
                                }
                            }
                        }
                        au._data(b7, "parsedAttrs", true)
                    }
                }
                return b6
            }
            if (typeof b9 === "object") {
                return this.each(function() {
                    au.data(this, b9)
                })
            }
            return arguments.length > 1 ? this.each(function() {
                au.data(this, b9, cb)
            }) : b7 ? L(b7, b9, au.data(b7, b9)) : undefined
        },
        removeData: function(e) {
            return this.each(function() {
                au.removeData(this, e)
            })
        }
    });
    au.extend({
        queue: function(i, b7, e) {
            var b6;
            if (i) {
                b7 = (b7 || "fx") + "queue";
                b6 = au._data(i, b7);
                if (e) {
                    if (!b6 || au.isArray(e)) {
                        b6 = au._data(i, b7, au.makeArray(e))
                    } else {
                        b6.push(e)
                    }
                }
                return b6 || []
            }
        },
        dequeue: function(e, ca) {
            ca = ca || "fx";
            var b8 = au.queue(e, ca),
                b9 = b8.length,
                i = b8.shift(),
                b6 = au._queueHooks(e, ca),
                b7 = function() {
                    au.dequeue(e, ca)
                };
            if (i === "inprogress") {
                i = b8.shift();
                b9--
            }
            if (i) {
                if (ca === "fx") {
                    b8.unshift("inprogress")
                }
                delete b6.stop;
                i.call(e, b7, b6)
            }
            if (!b9 && b6) {
                b6.empty.fire()
            }
        },
        _queueHooks: function(e, b6) {
            var i = b6 + "queueHooks";
            return au._data(e, i) || au._data(e, i, {
                empty: au.Callbacks("once memory").add(function() {
                    au._removeData(e, b6 + "queue");
                    au._removeData(e, i)
                })
            })
        }
    });
    au.fn.extend({
        queue: function(b6, e) {
            var i = 2;
            if (typeof b6 !== "string") {
                e = b6;
                b6 = "fx";
                i--
            }
            if (arguments.length < i) {
                return au.queue(this[0], b6)
            }
            return e === undefined ? this : this.each(function() {
                var b7 = au.queue(this, b6, e);
                au._queueHooks(this, b6);
                if (b6 === "fx" && b7[0] !== "inprogress") {
                    au.dequeue(this, b6)
                }
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                au.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(cc, b9) {
            var cb, e = 1,
                b6 = au.Deferred(),
                b7 = this,
                b8 = this.length,
                ca = function() {
                    if (!(--e)) {
                        b6.resolveWith(b7, [b7])
                    }
                };
            if (typeof cc !== "string") {
                b9 = cc;
                cc = undefined
            }
            cc = cc || "fx";
            while (b8--) {
                cb = au._data(b7[b8], cc + "queueHooks");
                if (cb && cb.empty) {
                    e++;
                    cb.empty.add(ca)
                }
            }
            ca();
            return b6.promise(b9)
        }
    });
    var aC = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
    var G = ["Top", "Right", "Bottom", "Left"];
    var at = function(i, e) {
        i = e || i;
        return au.css(i, "display") === "none" || !au.contains(i.ownerDocument, i)
    };
    var d = au.access = function(b7, b9, cb, ce, b6, b8, cd) {
        var ca = 0,
            cc = b7.length,
            e = cb == null;
        if (au.type(cb) === "object") {
            b6 = true;
            for (ca in cb) {
                au.access(b7, b9, ca, cb[ca], true, b8, cd)
            }
        } else {
            if (ce !== undefined) {
                b6 = true;
                if (!au.isFunction(ce)) {
                    cd = true
                }
                if (e) {
                    if (cd) {
                        b9.call(b7, ce);
                        b9 = null
                    } else {
                        e = b9;
                        b9 = function(i, cf, cg) {
                            return e.call(au(i), cg)
                        }
                    }
                }
                if (b9) {
                    for (; ca < cc; ca++) {
                        b9(b7[ca], cb, cd ? ce : ce.call(b7[ca], ca, b9(b7[ca], cb)))
                    }
                }
            }
        }
        return b6 ? b7 : e ? b9.call(b7) : cc ? b9(b7[0], cb) : b8
    };
    var aK = (/^(?:checkbox|radio)$/i);
    (function() {
        var b8 = S.createElement("input"),
            i = S.createElement("div"),
            b7 = S.createDocumentFragment();
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        bS.leadingWhitespace = i.firstChild.nodeType === 3;
        bS.tbody = !i.getElementsByTagName("tbody").length;
        bS.htmlSerialize = !!i.getElementsByTagName("link").length;
        bS.html5Clone = S.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        b8.type = "checkbox";
        b8.checked = true;
        b7.appendChild(b8);
        bS.appendChecked = b8.checked;
        i.innerHTML = "<textarea>x</textarea>";
        bS.noCloneChecked = !!i.cloneNode(true).lastChild.defaultValue;
        b7.appendChild(i);
        i.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        bS.checkClone = i.cloneNode(true).cloneNode(true).lastChild.checked;
        bS.noCloneEvent = true;
        if (i.attachEvent) {
            i.attachEvent("onclick", function() {
                bS.noCloneEvent = false
            });
            i.cloneNode(true).click()
        }
        if (bS.deleteExpando == null) {
            bS.deleteExpando = true;
            try {
                delete i.test
            } catch (b6) {
                bS.deleteExpando = false
            }
        }
    })();
    (function() {
        var b7, b6, e = S.createElement("div");
        for (b7 in {
                submit: true,
                change: true,
                focusin: true
            }) {
            b6 = "on" + b7;
            if (!(bS[b7 + "Bubbles"] = b6 in b0)) {
                e.setAttribute(b6, "t");
                bS[b7 + "Bubbles"] = e.attributes[b6].expando === false
            }
        }
        e = null
    })();
    var aY = /^(?:input|select|textarea)$/i,
        a7 = /^key/,
        bb = /^(?:mouse|pointer|contextmenu)|click/,
        aX = /^(?:focusinfocus|focusoutblur)$/,
        bE = /^([^.]*)(?:\.(.+)|)$/;

    function aV() {
        return true
    }

    function aU() {
        return false
    }

    function bJ() {
        try {
            return S.activeElement
        } catch (e) {}
    }
    au.event = {
        global: {},
        add: function(i, ck, cb, e, cf) {
            var ci, b8, ch, ca, cg, b7, b9, cc, cj, cd, ce, b6 = au._data(i);
            if (!b6) {
                return
            }
            if (cb.handler) {
                ca = cb;
                cb = ca.handler;
                cf = ca.selector
            }
            if (!cb.guid) {
                cb.guid = au.guid++
            }
            if (!(b8 = b6.events)) {
                b8 = b6.events = {}
            }
            if (!(b7 = b6.handle)) {
                b7 = b6.handle = function(cl) {
                    return typeof au !== bR && (!cl || au.event.triggered !== cl.type) ? au.event.dispatch.apply(b7.elem, arguments) : undefined
                };
                b7.elem = i
            }
            ck = (ck || "").match(bi) || [""];
            ch = ck.length;
            while (ch--) {
                ci = bE.exec(ck[ch]) || [];
                cj = ce = ci[1];
                cd = (ci[2] || "").split(".").sort();
                if (!cj) {
                    continue
                }
                cg = au.event.special[cj] || {};
                cj = (cf ? cg.delegateType : cg.bindType) || cj;
                cg = au.event.special[cj] || {};
                b9 = au.extend({
                    type: cj,
                    origType: ce,
                    data: e,
                    handler: cb,
                    guid: cb.guid,
                    selector: cf,
                    needsContext: cf && au.expr.match.needsContext.test(cf),
                    namespace: cd.join(".")
                }, ca);
                if (!(cc = b8[cj])) {
                    cc = b8[cj] = [];
                    cc.delegateCount = 0;
                    if (!cg.setup || cg.setup.call(i, e, cd, b7) === false) {
                        if (i.addEventListener) {
                            i.addEventListener(cj, b7, false)
                        } else {
                            if (i.attachEvent) {
                                i.attachEvent("on" + cj, b7)
                            }
                        }
                    }
                }
                if (cg.add) {
                    cg.add.call(i, b9);
                    if (!b9.handler.guid) {
                        b9.handler.guid = cb.guid
                    }
                }
                if (cf) {
                    cc.splice(cc.delegateCount++, 0, b9)
                } else {
                    cc.push(b9)
                }
                au.event.global[cj] = true
            }
            i = null
        },
        remove: function(e, ck, b8, cf, cb) {
            var ca, b7, ci, cd, ch, b6, cg, b9, cj, cc, ce, i = au.hasData(e) && au._data(e);
            if (!i || !(b6 = i.events)) {
                return
            }
            ck = (ck || "").match(bi) || [""];
            ch = ck.length;
            while (ch--) {
                ci = bE.exec(ck[ch]) || [];
                cj = ce = ci[1];
                cc = (ci[2] || "").split(".").sort();
                if (!cj) {
                    for (cj in b6) {
                        au.event.remove(e, cj + ck[ch], b8, cf, true)
                    }
                    continue
                }
                cg = au.event.special[cj] || {};
                cj = (cf ? cg.delegateType : cg.bindType) || cj;
                b9 = b6[cj] || [];
                ci = ci[2] && new RegExp("(^|\\.)" + cc.join("\\.(?:.*\\.|)") + "(\\.|$)");
                cd = ca = b9.length;
                while (ca--) {
                    b7 = b9[ca];
                    if ((cb || ce === b7.origType) && (!b8 || b8.guid === b7.guid) && (!ci || ci.test(b7.namespace)) && (!cf || cf === b7.selector || cf === "**" && b7.selector)) {
                        b9.splice(ca, 1);
                        if (b7.selector) {
                            b9.delegateCount--
                        }
                        if (cg.remove) {
                            cg.remove.call(e, b7)
                        }
                    }
                }
                if (cd && !b9.length) {
                    if (!cg.teardown || cg.teardown.call(e, cc, i.handle) === false) {
                        au.removeEvent(e, cj, i.handle)
                    }
                    delete b6[cj]
                }
            }
            if (au.isEmptyObject(b6)) {
                delete i.handle;
                au._removeData(e, "events")
            }
        },
        trigger: function(cb, b8, ca, cg) {
            var cd, ch, b7, b6, ci, cj, ce, cc = [ca || S],
                ck = ai.call(cb, "type") ? cb.type : cb,
                cf = ai.call(cb, "namespace") ? cb.namespace.split(".") : [];
            b7 = cj = ca = ca || S;
            if (ca.nodeType === 3 || ca.nodeType === 8) {
                return
            }
            if (aX.test(ck + au.event.triggered)) {
                return
            }
            if (ck.indexOf(".") >= 0) {
                cf = ck.split(".");
                ck = cf.shift();
                cf.sort()
            }
            ch = ck.indexOf(":") < 0 && "on" + ck;
            cb = cb[au.expando] ? cb : new au.Event(ck, typeof cb === "object" && cb);
            cb.isTrigger = cg ? 2 : 3;
            cb.namespace = cf.join(".");
            cb.namespace_re = cb.namespace ? new RegExp("(^|\\.)" + cf.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            cb.result = undefined;
            if (!cb.target) {
                cb.target = ca
            }
            b8 = b8 == null ? [cb] : au.makeArray(b8, [cb]);
            ci = au.event.special[ck] || {};
            if (!cg && ci.trigger && ci.trigger.apply(ca, b8) === false) {
                return
            }
            if (!cg && !ci.noBubble && !au.isWindow(ca)) {
                b6 = ci.delegateType || ck;
                if (!aX.test(b6 + ck)) {
                    b7 = b7.parentNode
                }
                for (; b7; b7 = b7.parentNode) {
                    cc.push(b7);
                    cj = b7
                }
                if (cj === (ca.ownerDocument || S)) {
                    cc.push(cj.defaultView || cj.parentWindow || b0)
                }
            }
            ce = 0;
            while ((b7 = cc[ce++]) && !cb.isPropagationStopped()) {
                cb.type = ce > 1 ? b6 : ci.bindType || ck;
                cd = (au._data(b7, "events") || {})[cb.type] && au._data(b7, "handle");
                if (cd) {
                    cd.apply(b7, b8)
                }
                cd = ch && b7[ch];
                if (cd && cd.apply && au.acceptData(b7)) {
                    cb.result = cd.apply(b7, b8);
                    if (cb.result === false) {
                        cb.preventDefault()
                    }
                }
            }
            cb.type = ck;
            if (!cg && !cb.isDefaultPrevented()) {
                if ((!ci._default || ci._default.apply(cc.pop(), b8) === false) && au.acceptData(ca)) {
                    if (ch && ca[ck] && !au.isWindow(ca)) {
                        cj = ca[ch];
                        if (cj) {
                            ca[ch] = null
                        }
                        au.event.triggered = ck;
                        try {
                            ca[ck]()
                        } catch (b9) {}
                        au.event.triggered = undefined;
                        if (cj) {
                            ca[ch] = cj
                        }
                    }
                }
            }
            return cb.result
        },
        dispatch: function(b6) {
            b6 = au.event.fix(b6);
            var ca, cd, b7, cc, cb, b8 = [],
                e = bQ.call(arguments),
                b9 = (au._data(this, "events") || {})[b6.type] || [],
                ce = au.event.special[b6.type] || {};
            e[0] = b6;
            b6.delegateTarget = this;
            if (ce.preDispatch && ce.preDispatch.call(this, b6) === false) {
                return
            }
            b8 = au.event.handlers.call(this, b6, b9);
            ca = 0;
            while ((cc = b8[ca++]) && !b6.isPropagationStopped()) {
                b6.currentTarget = cc.elem;
                cb = 0;
                while ((b7 = cc.handlers[cb++]) && !b6.isImmediatePropagationStopped()) {
                    if (!b6.namespace_re || b6.namespace_re.test(b7.namespace)) {
                        b6.handleObj = b7;
                        b6.data = b7.data;
                        cd = ((au.event.special[b7.origType] || {}).handle || b7.handler).apply(cc.elem, e);
                        if (cd !== undefined) {
                            if ((b6.result = cd) === false) {
                                b6.preventDefault();
                                b6.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (ce.postDispatch) {
                ce.postDispatch.call(this, b6)
            }
            return b6.result
        },
        handlers: function(b7, ca) {
            var cd, b8, cc, cb, b9 = [],
                b6 = ca.delegateCount,
                e = b7.target;
            if (b6 && e.nodeType && (!b7.button || b7.type !== "click")) {
                for (; e != this; e = e.parentNode || this) {
                    if (e.nodeType === 1 && (e.disabled !== true || b7.type !== "click")) {
                        cc = [];
                        for (cb = 0; cb < b6; cb++) {
                            b8 = ca[cb];
                            cd = b8.selector + " ";
                            if (cc[cd] === undefined) {
                                cc[cd] = b8.needsContext ? au(cd, this).index(e) >= 0 : au.find(cd, this, null, [e]).length
                            }
                            if (cc[cd]) {
                                cc.push(b8)
                            }
                        }
                        if (cc.length) {
                            b9.push({
                                elem: e,
                                handlers: cc
                            })
                        }
                    }
                }
            }
            if (b6 < ca.length) {
                b9.push({
                    elem: this,
                    handlers: ca.slice(b6)
                })
            }
            return b9
        },
        fix: function(b6) {
            if (b6[au.expando]) {
                return b6
            }
            var b8, ca, e, cb = b6.type,
                b9 = b6,
                b7 = this.fixHooks[cb];
            if (!b7) {
                this.fixHooks[cb] = b7 = bb.test(cb) ? this.mouseHooks : a7.test(cb) ? this.keyHooks : {}
            }
            e = b7.props ? this.props.concat(b7.props) : this.props;
            b6 = new au.Event(b9);
            b8 = e.length;
            while (b8--) {
                ca = e[b8];
                b6[ca] = b9[ca]
            }
            if (!b6.target) {
                b6.target = b9.srcElement || S
            }
            if (b6.target.nodeType === 3) {
                b6.target = b6.target.parentNode
            }
            b6.metaKey = !!b6.metaKey;
            return b7.filter ? b7.filter(b6, b9) : b6
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, i) {
                if (e.which == null) {
                    e.which = i.charCode != null ? i.charCode : i.keyCode
                }
                return e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b7, ca) {
                var e, b8, b6, i = ca.button,
                    b9 = ca.fromElement;
                if (b7.pageX == null && ca.clientX != null) {
                    b8 = b7.target.ownerDocument || S;
                    b6 = b8.documentElement;
                    e = b8.body;
                    b7.pageX = ca.clientX + (b6 && b6.scrollLeft || e && e.scrollLeft || 0) - (b6 && b6.clientLeft || e && e.clientLeft || 0);
                    b7.pageY = ca.clientY + (b6 && b6.scrollTop || e && e.scrollTop || 0) - (b6 && b6.clientTop || e && e.clientTop || 0)
                }
                if (!b7.relatedTarget && b9) {
                    b7.relatedTarget = b9 === b7.target ? ca.toElement : b9
                }
                if (!b7.which && i !== undefined) {
                    b7.which = (i & 1 ? 1 : (i & 2 ? 3 : (i & 4 ? 2 : 0)))
                }
                return b7
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== bJ() && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (i) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === bJ() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (au.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                },
                _default: function(e) {
                    return au.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    if (e.result !== undefined && e.originalEvent) {
                        e.originalEvent.returnValue = e.result
                    }
                }
            }
        },
        simulate: function(b9, b7, b8, i) {
            var b6 = au.extend(new au.Event(), b8, {
                type: b9,
                isSimulated: true,
                originalEvent: {}
            });
            if (i) {
                au.event.trigger(b6, null, b7)
            } else {
                au.event.dispatch.call(b7, b6)
            }
            if (b6.isDefaultPrevented()) {
                b8.preventDefault()
            }
        }
    };
    au.removeEvent = S.removeEventListener ? function(e, b6, i) {
        if (e.removeEventListener) {
            e.removeEventListener(b6, i, false)
        }
    } : function(e, b7, i) {
        var b6 = "on" + b7;
        if (e.detachEvent) {
            if (typeof e[b6] === bR) {
                e[b6] = null
            }
            e.detachEvent(b6, i)
        }
    };
    au.Event = function(i, e) {
        if (!(this instanceof au.Event)) {
            return new au.Event(i, e)
        }
        if (i && i.type) {
            this.originalEvent = i;
            this.type = i.type;
            this.isDefaultPrevented = i.defaultPrevented || i.defaultPrevented === undefined && i.returnValue === false ? aV : aU
        } else {
            this.type = i
        }
        if (e) {
            au.extend(this, e)
        }
        this.timeStamp = i && i.timeStamp || au.now();
        this[au.expando] = true
    };
    au.Event.prototype = {
        isDefaultPrevented: aU,
        isPropagationStopped: aU,
        isImmediatePropagationStopped: aU,
        preventDefault: function() {
            var i = this.originalEvent;
            this.isDefaultPrevented = aV;
            if (!i) {
                return
            }
            if (i.preventDefault) {
                i.preventDefault()
            } else {
                i.returnValue = false
            }
        },
        stopPropagation: function() {
            var i = this.originalEvent;
            this.isPropagationStopped = aV;
            if (!i) {
                return
            }
            if (i.stopPropagation) {
                i.stopPropagation()
            }
            i.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            var i = this.originalEvent;
            this.isImmediatePropagationStopped = aV;
            if (i && i.stopImmediatePropagation) {
                i.stopImmediatePropagation()
            }
            this.stopPropagation()
        }
    };
    au.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(i, e) {
        au.event.special[i] = {
            delegateType: e,
            bindType: e,
            handle: function(b6) {
                var b9, ca = this,
                    b8 = b6.relatedTarget,
                    b7 = b6.handleObj;
                if (!b8 || (b8 !== ca && !au.contains(ca, b8))) {
                    b6.type = b7.origType;
                    b9 = b7.handler.apply(this, arguments);
                    b6.type = e
                }
                return b9
            }
        }
    });
    if (!bS.submitBubbles) {
        au.event.special.submit = {
            setup: function() {
                if (au.nodeName(this, "form")) {
                    return false
                }
                au.event.add(this, "click._submit keypress._submit", function(i) {
                    var b6 = i.target,
                        b7 = au.nodeName(b6, "input") || au.nodeName(b6, "button") ? b6.form : undefined;
                    if (b7 && !au._data(b7, "submitBubbles")) {
                        au.event.add(b7, "submit._submit", function(e) {
                            e._submit_bubble = true
                        });
                        au._data(b7, "submitBubbles", true)
                    }
                })
            },
            postDispatch: function(e) {
                if (e._submit_bubble) {
                    delete e._submit_bubble;
                    if (this.parentNode && !e.isTrigger) {
                        au.event.simulate("submit", this.parentNode, e, true)
                    }
                }
            },
            teardown: function() {
                if (au.nodeName(this, "form")) {
                    return false
                }
                au.event.remove(this, "._submit")
            }
        }
    }
    if (!bS.changeBubbles) {
        au.event.special.change = {
            setup: function() {
                if (aY.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        au.event.add(this, "propertychange._change", function(e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        au.event.add(this, "click._change", function(e) {
                            if (this._just_changed && !e.isTrigger) {
                                this._just_changed = false
                            }
                            au.event.simulate("change", this, e, true)
                        })
                    }
                    return false
                }
                au.event.add(this, "beforeactivate._change", function(i) {
                    var b6 = i.target;
                    if (aY.test(b6.nodeName) && !au._data(b6, "changeBubbles")) {
                        au.event.add(b6, "change._change", function(e) {
                            if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                au.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        au._data(b6, "changeBubbles", true)
                    }
                })
            },
            handle: function(i) {
                var e = i.target;
                if (this !== e || i.isSimulated || i.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                    return i.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                au.event.remove(this, "._change");
                return !aY.test(this.nodeName)
            }
        }
    }
    if (!bS.focusinBubbles) {
        au.each({
            focus: "focusin",
            blur: "focusout"
        }, function(b6, e) {
            var i = function(b7) {
                au.event.simulate(e, b7.target, au.event.fix(b7), true)
            };
            au.event.special[e] = {
                setup: function() {
                    var b8 = this.ownerDocument || this,
                        b7 = au._data(b8, e);
                    if (!b7) {
                        b8.addEventListener(b6, i, true)
                    }
                    au._data(b8, e, (b7 || 0) + 1)
                },
                teardown: function() {
                    var b8 = this.ownerDocument || this,
                        b7 = au._data(b8, e) - 1;
                    if (!b7) {
                        b8.removeEventListener(b6, i, true);
                        au._removeData(b8, e)
                    } else {
                        au._data(b8, e, b7)
                    }
                }
            }
        })
    }
    au.fn.extend({
        on: function(ca, b8, e, i, b6) {
            var b9, b7;
            if (typeof ca === "object") {
                if (typeof b8 !== "string") {
                    e = e || b8;
                    b8 = undefined
                }
                for (b9 in ca) {
                    this.on(b9, b8, e, ca[b9], b6)
                }
                return this
            }
            if (e == null && i == null) {
                i = b8;
                e = b8 = undefined
            } else {
                if (i == null) {
                    if (typeof b8 === "string") {
                        i = e;
                        e = undefined
                    } else {
                        i = e;
                        e = b8;
                        b8 = undefined
                    }
                }
            }
            if (i === false) {
                i = aU
            } else {
                if (!i) {
                    return this
                }
            }
            if (b6 === 1) {
                b7 = i;
                i = function(cb) {
                    au().off(cb);
                    return b7.apply(this, arguments)
                };
                i.guid = b7.guid || (b7.guid = au.guid++)
            }
            return this.each(function() {
                au.event.add(this, ca, i, e, b8)
            })
        },
        one: function(b7, b6, e, i) {
            return this.on(b7, b6, e, i, 1)
        },
        off: function(b8, b6, e) {
            var i, b7;
            if (b8 && b8.preventDefault && b8.handleObj) {
                i = b8.handleObj;
                au(b8.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
                return this
            }
            if (typeof b8 === "object") {
                for (b7 in b8) {
                    this.off(b7, b6, b8[b7])
                }
                return this
            }
            if (b6 === false || typeof b6 === "function") {
                e = b6;
                b6 = undefined
            }
            if (e === false) {
                e = aU
            }
            return this.each(function() {
                au.event.remove(this, b8, e, b6)
            })
        },
        trigger: function(i, e) {
            return this.each(function() {
                au.event.trigger(i, e, this)
            })
        },
        triggerHandler: function(b6, e) {
            var i = this[0];
            if (i) {
                return au.event.trigger(b6, e, i, true)
            }
        }
    });

    function D(e) {
        var i = ax.split("|"),
            b6 = e.createDocumentFragment();
        if (b6.createElement) {
            while (i.length) {
                b6.createElement(i.pop())
            }
        }
        return b6
    }
    var ax = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        a4 = / jQuery\d+="(?:null|\d+)"/g,
        bh = new RegExp("<(?:" + ax + ")[\\s/>]", "i"),
        a8 = /^\s+/,
        bI = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bA = /<([\w:]+)/,
        bB = /<tbody/i,
        a3 = /<|&#?\w+;/,
        bg = /<(?:script|style|link)/i,
        aL = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bv = /^$|\/(?:java|ecma)script/i,
        bw = /^true\/(.*)/,
        aN = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        b2 = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: bS.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        bK = D(S),
        Y = bK.appendChild(S.createElement("div"));
    b2.optgroup = b2.option;
    b2.tbody = b2.tfoot = b2.colgroup = b2.caption = b2.thead;
    b2.th = b2.td;

    function ab(e, ca) {
        var b7, b6, b9 = 0,
            b8 = typeof e.getElementsByTagName !== bR ? e.getElementsByTagName(ca || "*") : typeof e.querySelectorAll !== bR ? e.querySelectorAll(ca || "*") : undefined;
        if (!b8) {
            for (b8 = [], b7 = e.childNodes || e;
                (b6 = b7[b9]) != null; b9++) {
                if (!ca || au.nodeName(b6, ca)) {
                    b8.push(b6)
                } else {
                    au.merge(b8, ab(b6, ca))
                }
            }
        }
        return ca === undefined || ca && au.nodeName(e, ca) ? au.merge([e], b8) : b8
    }

    function X(e) {
        if (aK.test(e.type)) {
            e.defaultChecked = e.checked
        }
    }

    function av(i, e) {
        return au.nodeName(i, "table") && au.nodeName(e.nodeType !== 11 ? e : e.firstChild, "tr") ? i.getElementsByTagName("tbody")[0] || i.appendChild(i.ownerDocument.createElement("tbody")) : i
    }

    function Q(e) {
        e.type = (au.find.attr(e, "type") !== null) + "/" + e.type;
        return e
    }

    function aT(e) {
        var i = bw.exec(e.type);
        if (i) {
            e.type = i[1]
        } else {
            e.removeAttribute("type")
        }
        return e
    }

    function bL(b6, b8) {
        var e, b7 = 0;
        for (;
            (e = b6[b7]) != null; b7++) {
            au._data(e, "globalEval", !b8 || au._data(b8[b7], "globalEval"))
        }
    }

    function x(cb, b6) {
        if (b6.nodeType !== 1 || !au.hasData(cb)) {
            return
        }
        var cc, b8, b9, ca = au._data(cb),
            e = au._data(b6, ca),
            b7 = ca.events;
        if (b7) {
            delete e.handle;
            e.events = {};
            for (cc in b7) {
                for (b8 = 0, b9 = b7[cc].length; b8 < b9; b8++) {
                    au.event.add(b6, cc, b7[cc][b8])
                }
            }
        }
        if (e.data) {
            e.data = au.extend({}, e.data)
        }
    }

    function W(b9, b6) {
        var b8, b7, i;
        if (b6.nodeType !== 1) {
            return
        }
        b8 = b6.nodeName.toLowerCase();
        if (!bS.noCloneEvent && b6[au.expando]) {
            i = au._data(b6);
            for (b7 in i.events) {
                au.removeEvent(b6, b7, i.handle)
            }
            b6.removeAttribute(au.expando)
        }
        if (b8 === "script" && b6.text !== b9.text) {
            Q(b6).text = b9.text;
            aT(b6)
        } else {
            if (b8 === "object") {
                if (b6.parentNode) {
                    b6.outerHTML = b9.outerHTML
                }
                if (bS.html5Clone && (b9.innerHTML && !au.trim(b6.innerHTML))) {
                    b6.innerHTML = b9.innerHTML
                }
            } else {
                if (b8 === "input" && aK.test(b9.type)) {
                    b6.defaultChecked = b6.checked = b9.checked;
                    if (b6.value !== b9.value) {
                        b6.value = b9.value
                    }
                } else {
                    if (b8 === "option") {
                        b6.defaultSelected = b6.selected = b9.defaultSelected
                    } else {
                        if (b8 === "input" || b8 === "textarea") {
                            b6.defaultValue = b9.defaultValue
                        }
                    }
                }
            }
        }
    }
    au.extend({
        clone: function(b9, b6, b7) {
            var b8, cc, e, ca, cd, cb = au.contains(b9.ownerDocument, b9);
            if (bS.html5Clone || au.isXMLDoc(b9) || !bh.test("<" + b9.nodeName + ">")) {
                e = b9.cloneNode(true)
            } else {
                Y.innerHTML = b9.outerHTML;
                Y.removeChild(e = Y.firstChild)
            }
            if ((!bS.noCloneEvent || !bS.noCloneChecked) && (b9.nodeType === 1 || b9.nodeType === 11) && !au.isXMLDoc(b9)) {
                b8 = ab(e);
                cd = ab(b9);
                for (ca = 0;
                    (cc = cd[ca]) != null; ++ca) {
                    if (b8[ca]) {
                        W(cc, b8[ca])
                    }
                }
            }
            if (b6) {
                if (b7) {
                    cd = cd || ab(b9);
                    b8 = b8 || ab(e);
                    for (ca = 0;
                        (cc = cd[ca]) != null; ca++) {
                        x(cc, b8[ca])
                    }
                } else {
                    x(b9, e)
                }
            }
            b8 = ab(e, "script");
            if (b8.length > 0) {
                bL(b8, !cb && ab(b9, "script"))
            }
            b8 = cd = cc = null;
            return e
        },
        buildFragment: function(b8, b6, ce, cf) {
            var ca, b7, e, ci, cg, ch, cj, cb = b8.length,
                cd = D(b6),
                cc = [],
                b9 = 0;
            for (; b9 < cb; b9++) {
                b7 = b8[b9];
                if (b7 || b7 === 0) {
                    if (au.type(b7) === "object") {
                        au.merge(cc, b7.nodeType ? [b7] : b7)
                    } else {
                        if (!a3.test(b7)) {
                            cc.push(b6.createTextNode(b7))
                        } else {
                            ci = ci || cd.appendChild(b6.createElement("div"));
                            cg = (bA.exec(b7) || ["", ""])[1].toLowerCase();
                            cj = b2[cg] || b2._default;
                            ci.innerHTML = cj[1] + b7.replace(bI, "<$1></$2>") + cj[2];
                            ca = cj[0];
                            while (ca--) {
                                ci = ci.lastChild
                            }
                            if (!bS.leadingWhitespace && a8.test(b7)) {
                                cc.push(b6.createTextNode(a8.exec(b7)[0]))
                            }
                            if (!bS.tbody) {
                                b7 = cg === "table" && !bB.test(b7) ? ci.firstChild : cj[1] === "<table>" && !bB.test(b7) ? ci : 0;
                                ca = b7 && b7.childNodes.length;
                                while (ca--) {
                                    if (au.nodeName((ch = b7.childNodes[ca]), "tbody") && !ch.childNodes.length) {
                                        b7.removeChild(ch)
                                    }
                                }
                            }
                            au.merge(cc, ci.childNodes);
                            ci.textContent = "";
                            while (ci.firstChild) {
                                ci.removeChild(ci.firstChild)
                            }
                            ci = cd.lastChild
                        }
                    }
                }
            }
            if (ci) {
                cd.removeChild(ci)
            }
            if (!bS.appendChecked) {
                au.grep(ab(cc, "input"), X)
            }
            b9 = 0;
            while ((b7 = cc[b9++])) {
                if (cf && au.inArray(b7, cf) !== -1) {
                    continue
                }
                e = au.contains(b7.ownerDocument, b7);
                ci = ab(cd.appendChild(b7), "script");
                if (e) {
                    bL(ci)
                }
                if (ce) {
                    ca = 0;
                    while ((b7 = ci[ca++])) {
                        if (bv.test(b7.type || "")) {
                            ce.push(b7)
                        }
                    }
                }
            }
            ci = null;
            return cd
        },
        cleanData: function(ca, e) {
            var b9, cf, cc, b7, cb = 0,
                cd = au.expando,
                b6 = au.cache,
                b8 = bS.deleteExpando,
                ce = au.event.special;
            for (;
                (b9 = ca[cb]) != null; cb++) {
                if (e || au.acceptData(b9)) {
                    cc = b9[cd];
                    b7 = cc && b6[cc];
                    if (b7) {
                        if (b7.events) {
                            for (cf in b7.events) {
                                if (ce[cf]) {
                                    au.event.remove(b9, cf)
                                } else {
                                    au.removeEvent(b9, cf, b7.handle)
                                }
                            }
                        }
                        if (b6[cc]) {
                            delete b6[cc];
                            if (b8) {
                                delete b9[cd]
                            } else {
                                if (typeof b9.removeAttribute !== bR) {
                                    b9.removeAttribute(cd)
                                } else {
                                    b9[cd] = null
                                }
                            }
                            O.push(cc)
                        }
                    }
                }
            }
        }
    });
    au.fn.extend({
        text: function(e) {
            return d(this, function(i) {
                return i === undefined ? au.text(this) : this.empty().append((this[0] && this[0].ownerDocument || S).createTextNode(i))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var i = av(this, e);
                    i.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var i = av(this, e);
                    i.insertBefore(e, i.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this)
                }
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
            })
        },
        remove: function(b9, b8) {
            var e, b6 = b9 ? au.filter(b9, this) : this,
                b7 = 0;
            for (;
                (e = b6[b7]) != null; b7++) {
                if (!b8 && e.nodeType === 1) {
                    au.cleanData(ab(e))
                }
                if (e.parentNode) {
                    if (b8 && au.contains(e.ownerDocument, e)) {
                        bL(ab(e, "script"))
                    }
                    e.parentNode.removeChild(e)
                }
            }
            return this
        },
        empty: function() {
            var e, b6 = 0;
            for (;
                (e = this[b6]) != null; b6++) {
                if (e.nodeType === 1) {
                    au.cleanData(ab(e, false))
                }
                while (e.firstChild) {
                    e.removeChild(e.firstChild)
                }
                if (e.options && au.nodeName(e, "select")) {
                    e.options.length = 0
                }
            }
            return this
        },
        clone: function(e, i) {
            e = e == null ? false : e;
            i = i == null ? e : i;
            return this.map(function() {
                return au.clone(this, e, i)
            })
        },
        html: function(e) {
            return d(this, function(ca) {
                var b7 = this[0] || {},
                    b8 = 0,
                    b9 = this.length;
                if (ca === undefined) {
                    return b7.nodeType === 1 ? b7.innerHTML.replace(a4, "") : undefined
                }
                if (typeof ca === "string" && !bg.test(ca) && (bS.htmlSerialize || !bh.test(ca)) && (bS.leadingWhitespace || !a8.test(ca)) && !b2[(bA.exec(ca) || ["", ""])[1].toLowerCase()]) {
                    ca = ca.replace(bI, "<$1></$2>");
                    try {
                        for (; b8 < b9; b8++) {
                            b7 = this[b8] || {};
                            if (b7.nodeType === 1) {
                                au.cleanData(ab(b7, false));
                                b7.innerHTML = ca
                            }
                        }
                        b7 = 0
                    } catch (b6) {}
                }
                if (b7) {
                    this.empty().append(ca)
                }
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            this.domManip(arguments, function(i) {
                e = this.parentNode;
                au.cleanData(ab(this));
                if (e) {
                    e.replaceChild(i, this)
                }
            });
            return e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, true)
        },
        domManip: function(e, b6) {
            e = z.apply([], e);
            var b8, cf, ca, cg, b7, b9, cb = 0,
                ce = this.length,
                ch = this,
                cc = ce - 1,
                ci = e[0],
                cd = au.isFunction(ci);
            if (cd || (ce > 1 && typeof ci === "string" && !bS.checkClone && aL.test(ci))) {
                return this.each(function(i) {
                    var cj = ch.eq(i);
                    if (cd) {
                        e[0] = ci.call(this, i, cj.html())
                    }
                    cj.domManip(e, b6)
                })
            }
            if (ce) {
                b9 = au.buildFragment(e, this[0].ownerDocument, false, this);
                b8 = b9.firstChild;
                if (b9.childNodes.length === 1) {
                    b9 = b8
                }
                if (b8) {
                    cg = au.map(ab(b9, "script"), Q);
                    ca = cg.length;
                    for (; cb < ce; cb++) {
                        cf = b9;
                        if (cb !== cc) {
                            cf = au.clone(cf, true, true);
                            if (ca) {
                                au.merge(cg, ab(cf, "script"))
                            }
                        }
                        b6.call(this[cb], cf, cb)
                    }
                    if (ca) {
                        b7 = cg[cg.length - 1].ownerDocument;
                        au.map(cg, aT);
                        for (cb = 0; cb < ca; cb++) {
                            cf = cg[cb];
                            if (bv.test(cf.type || "") && !au._data(cf, "globalEval") && au.contains(b7, cf)) {
                                if (cf.src) {
                                    if (au._evalUrl) {
                                        au._evalUrl(cf.src)
                                    }
                                } else {
                                    au.globalEval((cf.text || cf.textContent || cf.innerHTML || "").replace(aN, ""))
                                }
                            }
                        }
                    }
                    b9 = b8 = null
                }
            }
            return this
        }
    });
    au.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, i) {
        au.fn[e] = function(cb) {
            var b6, b7 = 0,
                ca = [],
                b8 = au(cb),
                b9 = b8.length - 1;
            for (; b7 <= b9; b7++) {
                b6 = b7 === b9 ? this : this.clone(true);
                au(b8[b7])[i](b6);
                aF.apply(ca, b6.get())
            }
            return this.pushStack(ca)
        }
    });
    var ak, U = {};

    function f(b7, i) {
        var b8, b6 = au(i.createElement(b7)).appendTo(i.body),
            e = b0.getDefaultComputedStyle && (b8 = b0.getDefaultComputedStyle(b6[0])) ? b8.display : au.css(b6[0], "display");
        b6.detach();
        return e
    }

    function M(b6) {
        var i = S,
            e = U[b6];
        if (!e) {
            e = f(b6, i);
            if (e === "none" || !e) {
                ak = (ak || au("<iframe frameborder='0' width='0' height='0'/>")).appendTo(i.documentElement);
                i = (ak[0].contentWindow || ak[0].contentDocument).document;
                i.write();
                i.close();
                e = f(b6, i);
                ak.detach()
            }
            U[b6] = e
        }
        return e
    }(function() {
        var e;
        bS.shrinkWrapBlocks = function() {
            if (e != null) {
                return e
            }
            e = false;
            var b7, i, b6;
            i = S.getElementsByTagName("body")[0];
            if (!i || !i.style) {
                return
            }
            b7 = S.createElement("div");
            b6 = S.createElement("div");
            b6.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            i.appendChild(b6).appendChild(b7);
            if (typeof b7.style.zoom !== bR) {
                b7.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
                b7.appendChild(S.createElement("div")).style.width = "5px";
                e = b7.offsetWidth !== 3
            }
            i.removeChild(b6);
            return e
        }
    })();
    var ba = (/^margin/);
    var bj = new RegExp("^(" + aC + ")(?!px)[a-z%]+$", "i");
    var ae, K, bo = /^(top|right|bottom|left)$/;
    if (b0.getComputedStyle) {
        ae = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        };
        K = function(i, b8, e) {
            var cb, b7, b6, b9, ca = i.style;
            e = e || ae(i);
            b9 = e ? e.getPropertyValue(b8) || e[b8] : undefined;
            if (e) {
                if (b9 === "" && !au.contains(i.ownerDocument, i)) {
                    b9 = au.style(i, b8)
                }
                if (bj.test(b9) && ba.test(b8)) {
                    cb = ca.width;
                    b7 = ca.minWidth;
                    b6 = ca.maxWidth;
                    ca.minWidth = ca.maxWidth = ca.width = b9;
                    b9 = e.width;
                    ca.width = cb;
                    ca.minWidth = b7;
                    ca.maxWidth = b6
                }
            }
            return b9 === undefined ? b9 : b9 + ""
        }
    } else {
        if (S.documentElement.currentStyle) {
            ae = function(e) {
                return e.currentStyle
            };
            K = function(i, b7, e) {
                var b6, b9, ca, b8, cb = i.style;
                e = e || ae(i);
                b8 = e ? e[b7] : undefined;
                if (b8 == null && cb && cb[b7]) {
                    b8 = cb[b7]
                }
                if (bj.test(b8) && !bo.test(b7)) {
                    b6 = cb.left;
                    b9 = i.runtimeStyle;
                    ca = b9 && b9.left;
                    if (ca) {
                        b9.left = i.currentStyle.left
                    }
                    cb.left = b7 === "fontSize" ? "1em" : b8;
                    b8 = cb.pixelLeft + "px";
                    cb.left = b6;
                    if (ca) {
                        b9.left = ca
                    }
                }
                return b8 === undefined ? b8 : b8 + "" || "auto"
            }
        }
    }

    function g(e, i) {
        return {
            get: function() {
                var b6 = e();
                if (b6 == null) {
                    return
                }
                if (b6) {
                    delete this.get;
                    return
                }
                return (this.get = i).apply(this, arguments)
            }
        }
    }(function() {
        var b7, cb, e, b8, i, b9, ca;
        b7 = S.createElement("div");
        b7.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        e = b7.getElementsByTagName("a")[0];
        cb = e && e.style;
        if (!cb) {
            return
        }
        cb.cssText = "float:left;opacity:.5";
        bS.opacity = cb.opacity === "0.5";
        bS.cssFloat = !!cb.cssFloat;
        b7.style.backgroundClip = "content-box";
        b7.cloneNode(true).style.backgroundClip = "";
        bS.clearCloneStyle = b7.style.backgroundClip === "content-box";
        bS.boxSizing = cb.boxSizing === "" || cb.MozBoxSizing === "" || cb.WebkitBoxSizing === "";
        au.extend(bS, {
            reliableHiddenOffsets: function() {
                if (b9 == null) {
                    b6()
                }
                return b9
            },
            boxSizingReliable: function() {
                if (i == null) {
                    b6()
                }
                return i
            },
            pixelPosition: function() {
                if (b8 == null) {
                    b6()
                }
                return b8
            },
            reliableMarginRight: function() {
                if (ca == null) {
                    b6()
                }
                return ca
            }
        });

        function b6() {
            var cf, cc, cd, ce;
            cc = S.getElementsByTagName("body")[0];
            if (!cc || !cc.style) {
                return
            }
            cf = S.createElement("div");
            cd = S.createElement("div");
            cd.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            cc.appendChild(cd).appendChild(cf);
            cf.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
            b8 = i = false;
            ca = true;
            if (b0.getComputedStyle) {
                b8 = (b0.getComputedStyle(cf, null) || {}).top !== "1%";
                i = (b0.getComputedStyle(cf, null) || {
                    width: "4px"
                }).width === "4px";
                ce = cf.appendChild(S.createElement("div"));
                ce.style.cssText = cf.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                ce.style.marginRight = ce.style.width = "0";
                cf.style.width = "1px";
                ca = !parseFloat((b0.getComputedStyle(ce, null) || {}).marginRight)
            }
            cf.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            ce = cf.getElementsByTagName("td");
            ce[0].style.cssText = "margin:0;border:0;padding:0;display:none";
            b9 = ce[0].offsetHeight === 0;
            if (b9) {
                ce[0].style.display = "";
                ce[1].style.display = "none";
                b9 = ce[0].offsetHeight === 0
            }
            cc.removeChild(cd)
        }
    })();
    au.swap = function(b6, b9, i, e) {
        var ca, b7, b8 = {};
        for (b7 in b9) {
            b8[b7] = b6.style[b7];
            b6.style[b7] = b9[b7]
        }
        ca = i.apply(b6, e || []);
        for (b7 in b9) {
            b6.style[b7] = b8[b7]
        }
        return ca
    };
    var aH = /alpha\([^)]*\)/i,
        bm = /opacity\s*=\s*([^)]*)/,
        aR = /^(none|table(?!-c[ea]).+)/,
        bk = new RegExp("^(" + aC + ")(.*)$", "i"),
        bs = new RegExp("^([+-])=(" + aC + ")", "i"),
        J = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        H = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        I = ["Webkit", "O", "Moz", "ms"];

    function bY(b9, b7) {
        if (b7 in b9) {
            return b7
        }
        var e = b7.charAt(0).toUpperCase() + b7.slice(1),
            b8 = b7,
            b6 = I.length;
        while (b6--) {
            b7 = I[b6] + e;
            if (b7 in b9) {
                return b7
            }
        }
        return b8
    }

    function bN(b6, ca) {
        var e, i, b7, cb = [],
            b8 = 0,
            b9 = b6.length;
        for (; b8 < b9; b8++) {
            i = b6[b8];
            if (!i.style) {
                continue
            }
            cb[b8] = au._data(i, "olddisplay");
            e = i.style.display;
            if (ca) {
                if (!cb[b8] && e === "none") {
                    i.style.display = ""
                }
                if (i.style.display === "" && at(i)) {
                    cb[b8] = au._data(i, "olddisplay", M(i.nodeName))
                }
            } else {
                b7 = at(i);
                if (e && e !== "none" || !b7) {
                    au._data(i, "olddisplay", b7 ? e : au.css(i, "display"))
                }
            }
        }
        for (b8 = 0; b8 < b9; b8++) {
            i = b6[b8];
            if (!i.style) {
                continue
            }
            if (!ca || i.style.display === "none" || i.style.display === "") {
                i.style.display = ca ? cb[b8] || "" : "none"
            }
        }
        return b6
    }

    function bM(e, b7, b6) {
        var i = bk.exec(b7);
        return i ? Math.max(0, i[1] - (b6 || 0)) + (i[2] || "px") : b7
    }

    function s(e, b9, b6, b8, ca) {
        var b7 = b6 === (b8 ? "border" : "content") ? 4 : b9 === "width" ? 1 : 0,
            cb = 0;
        for (; b7 < 4; b7 += 2) {
            if (b6 === "margin") {
                cb += au.css(e, b6 + G[b7], true, ca)
            }
            if (b8) {
                if (b6 === "content") {
                    cb -= au.css(e, "padding" + G[b7], true, ca)
                }
                if (b6 !== "margin") {
                    cb -= au.css(e, "border" + G[b7] + "Width", true, ca)
                }
            } else {
                cb += au.css(e, "padding" + G[b7], true, ca);
                if (b6 !== "padding") {
                    cb += au.css(e, "border" + G[b7] + "Width", true, ca)
                }
            }
        }
        return cb
    }

    function af(e, b7, i) {
        var ca = true,
            b9 = b7 === "width" ? e.offsetWidth : e.offsetHeight,
            b8 = ae(e),
            b6 = bS.boxSizing && au.css(e, "boxSizing", false, b8) === "border-box";
        if (b9 <= 0 || b9 == null) {
            b9 = K(e, b7, b8);
            if (b9 < 0 || b9 == null) {
                b9 = e.style[b7]
            }
            if (bj.test(b9)) {
                return b9
            }
            ca = b6 && (bS.boxSizingReliable() || b9 === e.style[b7]);
            b9 = parseFloat(b9) || 0
        }
        return (b9 + s(e, b7, i || (b6 ? "border" : "content"), ca, b8)) + "px"
    }
    au.extend({
        cssHooks: {
            opacity: {
                get: function(i, e) {
                    if (e) {
                        var b6 = K(i, "opacity");
                        return b6 === "" ? "1" : b6
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": bS.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b6, b9, ce, b7) {
            if (!b6 || b6.nodeType === 3 || b6.nodeType === 8 || !b6.style) {
                return
            }
            var cb, cd, b8, ca = au.camelCase(b9),
                cc = b6.style;
            b9 = au.cssProps[ca] || (au.cssProps[ca] = bY(cc, ca));
            b8 = au.cssHooks[b9] || au.cssHooks[ca];
            if (ce !== undefined) {
                cd = typeof ce;
                if (cd === "string" && (cb = bs.exec(ce))) {
                    ce = (cb[1] + 1) * cb[2] + parseFloat(au.css(b6, b9));
                    cd = "number"
                }
                if (ce == null || ce !== ce) {
                    return
                }
                if (cd === "number" && !au.cssNumber[ca]) {
                    ce += "px"
                }
                if (!bS.clearCloneStyle && ce === "" && b9.indexOf("background") === 0) {
                    cc[b9] = "inherit"
                }
                if (!b8 || !("set" in b8) || (ce = b8.set(b6, ce, b7)) !== undefined) {
                    try {
                        cc[b9] = ce
                    } catch (i) {}
                }
            } else {
                if (b8 && "get" in b8 && (cb = b8.get(b6, false, b7)) !== undefined) {
                    return cb
                }
                return cc[b9]
            }
        },
        css: function(e, b7, i, ca) {
            var b8, cb, b6, b9 = au.camelCase(b7);
            b7 = au.cssProps[b9] || (au.cssProps[b9] = bY(e.style, b9));
            b6 = au.cssHooks[b7] || au.cssHooks[b9];
            if (b6 && "get" in b6) {
                cb = b6.get(e, true, i)
            }
            if (cb === undefined) {
                cb = K(e, b7, ca)
            }
            if (cb === "normal" && b7 in H) {
                cb = H[b7]
            }
            if (i === "" || i) {
                b8 = parseFloat(cb);
                return i === true || au.isNumeric(b8) ? b8 || 0 : cb
            }
            return cb
        }
    });
    au.each(["height", "width"], function(e, b6) {
        au.cssHooks[b6] = {
            get: function(b7, i, b8) {
                if (i) {
                    return aR.test(au.css(b7, "display")) && b7.offsetWidth === 0 ? au.swap(b7, J, function() {
                        return af(b7, b6, b8)
                    }) : af(b7, b6, b8)
                }
            },
            set: function(i, b9, b7) {
                var b8 = b7 && ae(i);
                return bM(i, b9, b7 ? s(i, b6, b7, bS.boxSizing && au.css(i, "boxSizing", false, b8) === "border-box", b8) : 0)
            }
        }
    });
    if (!bS.opacity) {
        au.cssHooks.opacity = {
            get: function(i, e) {
                return bm.test((e && i.currentStyle ? i.currentStyle.filter : i.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
            },
            set: function(i, b9) {
                var b8 = i.style,
                    e = i.currentStyle,
                    b7 = au.isNumeric(b9) ? "alpha(opacity=" + b9 * 100 + ")" : "",
                    b6 = e && e.filter || b8.filter || "";
                b8.zoom = 1;
                if ((b9 >= 1 || b9 === "") && au.trim(b6.replace(aH, "")) === "" && b8.removeAttribute) {
                    b8.removeAttribute("filter");
                    if (b9 === "" || e && !e.filter) {
                        return
                    }
                }
                b8.filter = aH.test(b6) ? b6.replace(aH, b7) : b6 + " " + b7
            }
        }
    }
    au.cssHooks.marginRight = g(bS.reliableMarginRight, function(i, e) {
        if (e) {
            return au.swap(i, {
                display: "inline-block"
            }, K, [i, "marginRight"])
        }
    });
    au.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, i) {
        au.cssHooks[e + i] = {
            expand: function(b9) {
                var b7 = 0,
                    b6 = {},
                    b8 = typeof b9 === "string" ? b9.split(" ") : [b9];
                for (; b7 < 4; b7++) {
                    b6[e + G[b7] + i] = b8[b7] || b8[b7 - 2] || b8[0]
                }
                return b6
            }
        };
        if (!ba.test(e)) {
            au.cssHooks[e + i].set = bM
        }
    });
    au.fn.extend({
        css: function(e, i) {
            return d(this, function(b6, ca, cc) {
                var cb, b8, b9 = {},
                    b7 = 0;
                if (au.isArray(ca)) {
                    cb = ae(b6);
                    b8 = ca.length;
                    for (; b7 < b8; b7++) {
                        b9[ca[b7]] = au.css(b6, ca[b7], false, cb)
                    }
                    return b9
                }
                return cc !== undefined ? au.style(b6, ca, cc) : au.css(b6, ca)
            }, e, i, arguments.length > 1)
        },
        show: function() {
            return bN(this, true)
        },
        hide: function() {
            return bN(this)
        },
        toggle: function(e) {
            if (typeof e === "boolean") {
                return e ? this.show() : this.hide()
            }
            return this.each(function() {
                if (at(this)) {
                    au(this).show()
                } else {
                    au(this).hide()
                }
            })
        }
    });

    function bW(i, b7, b8, b6, e) {
        return new bW.prototype.init(i, b7, b8, b6, e)
    }
    au.Tween = bW;
    bW.prototype = {
        constructor: bW,
        init: function(i, b7, b8, b6, e, b9) {
            this.elem = i;
            this.prop = b8;
            this.easing = e || "swing";
            this.options = b7;
            this.start = this.now = this.cur();
            this.end = b6;
            this.unit = b9 || (au.cssNumber[b8] ? "" : "px")
        },
        cur: function() {
            var e = bW.propHooks[this.prop];
            return e && e.get ? e.get(this) : bW.propHooks._default.get(this)
        },
        run: function(b6) {
            var e, i = bW.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = e = au.easing[this.easing](b6, this.options.duration * b6, 0, 1, this.options.duration)
            } else {
                this.pos = e = b6
            }
            this.now = (this.end - this.start) * e + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (i && i.set) {
                i.set(this)
            } else {
                bW.propHooks._default.set(this)
            }
            return this
        }
    };
    bW.prototype.init.prototype = bW.prototype;
    bW.propHooks = {
        _default: {
            get: function(i) {
                var e;
                if (i.elem[i.prop] != null && (!i.elem.style || i.elem.style[i.prop] == null)) {
                    return i.elem[i.prop]
                }
                e = au.css(i.elem, i.prop, "");
                return !e || e === "auto" ? 0 : e
            },
            set: function(e) {
                if (au.fx.step[e.prop]) {
                    au.fx.step[e.prop](e)
                } else {
                    if (e.elem.style && (e.elem.style[au.cssProps[e.prop]] != null || au.cssHooks[e.prop])) {
                        au.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        }
    };
    bW.propHooks.scrollTop = bW.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }
    };
    au.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    };
    au.fx = bW.prototype.init;
    au.fx.step = {};
    var Z, bT, a0 = /^(?:toggle|show|hide)$/,
        aZ = new RegExp("^(?:([+-])=|)(" + aC + ")([a-z%]*)$", "i"),
        bu = /queueHooks$/,
        q = [N],
        bX = {
            "*": [function(b6, cc) {
                var ca = this.createTween(b6, cc),
                    b9 = ca.cur(),
                    i = aZ.exec(cc),
                    cb = i && i[3] || (au.cssNumber[b6] ? "" : "px"),
                    b8 = (au.cssNumber[b6] || cb !== "px" && +b9) && aZ.exec(au.css(ca.elem, b6)),
                    b7 = 1,
                    e = 20;
                if (b8 && b8[3] !== cb) {
                    cb = cb || b8[3];
                    i = i || [];
                    b8 = +b9 || 1;
                    do {
                        b7 = b7 || ".5";
                        b8 = b8 / b7;
                        au.style(ca.elem, b6, b8 + cb)
                    } while (b7 !== (b7 = ca.cur() / b9) && b7 !== 1 && --e)
                }
                if (i) {
                    b8 = ca.start = +b8 || +b9 || 0;
                    ca.unit = cb;
                    ca.end = i[1] ? b8 + (i[1] + 1) * i[2] : +i[2]
                }
                return ca
            }]
        };

    function B() {
        setTimeout(function() {
            Z = undefined
        });
        return (Z = au.now())
    }

    function aa(b8, b7) {
        var b9, e = {
                height: b8
            },
            b6 = 0;
        b7 = b7 ? 1 : 0;
        for (; b6 < 4; b6 += 2 - b7) {
            b9 = G[b6];
            e["margin" + b9] = e["padding" + b9] = b8
        }
        if (b7) {
            e.opacity = e.width = b8
        }
        return e
    }

    function F(ca, b8, e) {
        var b9, i = (bX[b8] || []).concat(bX["*"]),
            b6 = 0,
            b7 = i.length;
        for (; b6 < b7; b6++) {
            if ((b9 = i[b6].call(e, b8, ca))) {
                return b9
            }
        }
    }

    function N(b8, cf, cc) {
        var ce, cj, ch, ci, ca, cb, b7, i, e = this,
            cd = {},
            cg = b8.style,
            b9 = b8.nodeType && at(b8),
            b6 = au._data(b8, "fxshow");
        if (!cc.queue) {
            ca = au._queueHooks(b8, "fx");
            if (ca.unqueued == null) {
                ca.unqueued = 0;
                cb = ca.empty.fire;
                ca.empty.fire = function() {
                    if (!ca.unqueued) {
                        cb()
                    }
                }
            }
            ca.unqueued++;
            e.always(function() {
                e.always(function() {
                    ca.unqueued--;
                    if (!au.queue(b8, "fx").length) {
                        ca.empty.fire()
                    }
                })
            })
        }
        if (b8.nodeType === 1 && ("height" in cf || "width" in cf)) {
            cc.overflow = [cg.overflow, cg.overflowX, cg.overflowY];
            b7 = au.css(b8, "display");
            i = b7 === "none" ? au._data(b8, "olddisplay") || M(b8.nodeName) : b7;
            if (i === "inline" && au.css(b8, "float") === "none") {
                if (!bS.inlineBlockNeedsLayout || M(b8.nodeName) === "inline") {
                    cg.display = "inline-block"
                } else {
                    cg.zoom = 1
                }
            }
        }
        if (cc.overflow) {
            cg.overflow = "hidden";
            if (!bS.shrinkWrapBlocks()) {
                e.always(function() {
                    cg.overflow = cc.overflow[0];
                    cg.overflowX = cc.overflow[1];
                    cg.overflowY = cc.overflow[2]
                })
            }
        }
        for (ce in cf) {
            cj = cf[ce];
            if (a0.exec(cj)) {
                delete cf[ce];
                ch = ch || cj === "toggle";
                if (cj === (b9 ? "hide" : "show")) {
                    if (cj === "show" && b6 && b6[ce] !== undefined) {
                        b9 = true
                    } else {
                        continue
                    }
                }
                cd[ce] = b6 && b6[ce] || au.style(b8, ce)
            } else {
                b7 = undefined
            }
        }
        if (!au.isEmptyObject(cd)) {
            if (b6) {
                if ("hidden" in b6) {
                    b9 = b6.hidden
                }
            } else {
                b6 = au._data(b8, "fxshow", {})
            }
            if (ch) {
                b6.hidden = !b9
            }
            if (b9) {
                au(b8).show()
            } else {
                e.done(function() {
                    au(b8).hide()
                })
            }
            e.done(function() {
                var ck;
                au._removeData(b8, "fxshow");
                for (ck in cd) {
                    au.style(b8, ck, cd[ck])
                }
            });
            for (ce in cd) {
                ci = F(b9 ? b6[ce] : 0, ce, e);
                if (!(ce in b6)) {
                    b6[ce] = ci.start;
                    if (b9) {
                        ci.end = ci.start;
                        ci.start = ce === "width" || ce === "height" ? 1 : 0
                    }
                }
            }
        } else {
            if ((b7 === "none" ? M(b8.nodeName) : b7) === "inline") {
                cg.display = b7
            }
        }
    }

    function aE(b8, b9) {
        var b6, b7, e, ca, i;
        for (b6 in b8) {
            b7 = au.camelCase(b6);
            e = b9[b7];
            ca = b8[b6];
            if (au.isArray(ca)) {
                e = ca[1];
                ca = b8[b6] = ca[0]
            }
            if (b6 !== b7) {
                b8[b7] = ca;
                delete b8[b6]
            }
            i = au.cssHooks[b7];
            if (i && "expand" in i) {
                ca = i.expand(ca);
                delete b8[b7];
                for (b6 in ca) {
                    if (!(b6 in b8)) {
                        b8[b6] = ca[b6];
                        b9[b6] = e
                    }
                }
            } else {
                b9[b7] = e
            }
        }
    }

    function p(b6, ca, b9) {
        var cc, cd, b7 = 0,
            b8 = q.length,
            i = au.Deferred().always(function() {
                delete ce.elem
            }),
            ce = function() {
                if (cd) {
                    return false
                }
                var cf = Z || B(),
                    cj = Math.max(0, e.startTime + e.duration - cf),
                    ck = cj / e.duration || 0,
                    ci = 1 - ck,
                    cg = 0,
                    ch = e.tweens.length;
                for (; cg < ch; cg++) {
                    e.tweens[cg].run(ci)
                }
                i.notifyWith(b6, [e, ci, cj]);
                if (ci < 1 && ch) {
                    return cj
                } else {
                    i.resolveWith(b6, [e]);
                    return false
                }
            },
            e = i.promise({
                elem: b6,
                props: au.extend({}, ca),
                opts: au.extend(true, {
                    specialEasing: {}
                }, b9),
                originalProperties: ca,
                originalOptions: b9,
                startTime: Z || B(),
                duration: b9.duration,
                tweens: [],
                createTween: function(cg, cf) {
                    var ch = au.Tween(b6, e.opts, cg, cf, e.opts.specialEasing[cg] || e.opts.easing);
                    e.tweens.push(ch);
                    return ch
                },
                stop: function(cf) {
                    var cg = 0,
                        ch = cf ? e.tweens.length : 0;
                    if (cd) {
                        return this
                    }
                    cd = true;
                    for (; cg < ch; cg++) {
                        e.tweens[cg].run(1)
                    }
                    if (cf) {
                        i.resolveWith(b6, [e, cf])
                    } else {
                        i.rejectWith(b6, [e, cf])
                    }
                    return this
                }
            }),
            cb = e.props;
        aE(cb, e.opts.specialEasing);
        for (; b7 < b8; b7++) {
            cc = q[b7].call(e, b6, cb, e.opts);
            if (cc) {
                return cc
            }
        }
        au.map(cb, F, e);
        if (au.isFunction(e.opts.start)) {
            e.opts.start.call(b6, e)
        }
        au.fx.timer(au.extend(ce, {
            elem: b6,
            anim: e,
            queue: e.opts.queue
        }));
        return e.progress(e.opts.progress).done(e.opts.done, e.opts.complete).fail(e.opts.fail).always(e.opts.always)
    }
    au.Animation = au.extend(p, {
        tweener: function(b8, e) {
            if (au.isFunction(b8)) {
                e = b8;
                b8 = ["*"]
            } else {
                b8 = b8.split(" ")
            }
            var b7, i = 0,
                b6 = b8.length;
            for (; i < b6; i++) {
                b7 = b8[i];
                bX[b7] = bX[b7] || [];
                bX[b7].unshift(e)
            }
        },
        prefilter: function(e, i) {
            if (i) {
                q.unshift(e)
            } else {
                q.push(e)
            }
        }
    });
    au.speed = function(b7, e, i) {
        var b6 = b7 && typeof b7 === "object" ? au.extend({}, b7) : {
            complete: i || !i && e || au.isFunction(b7) && b7,
            duration: b7,
            easing: i && e || e && !au.isFunction(e) && e
        };
        b6.duration = au.fx.off ? 0 : typeof b6.duration === "number" ? b6.duration : b6.duration in au.fx.speeds ? au.fx.speeds[b6.duration] : au.fx.speeds._default;
        if (b6.queue == null || b6.queue === true) {
            b6.queue = "fx"
        }
        b6.old = b6.complete;
        b6.complete = function() {
            if (au.isFunction(b6.old)) {
                b6.old.call(this)
            }
            if (b6.queue) {
                au.dequeue(this, b6.queue)
            }
        };
        return b6
    };
    au.fn.extend({
        fadeTo: function(b6, b7, i, e) {
            return this.filter(at).css("opacity", 0).show().end().animate({
                opacity: b7
            }, b6, i, e)
        },
        animate: function(b9, ca, b6, e) {
            var b7 = au.isEmptyObject(b9),
                b8 = au.speed(ca, b6, e),
                i = function() {
                    var cb = p(this, au.extend({}, b9), b8);
                    if (b7 || au._data(this, "finish")) {
                        cb.stop(true)
                    }
                };
            i.finish = i;
            return b7 || b8.queue === false ? this.each(i) : this.queue(b8.queue, i)
        },
        stop: function(b7, e, i) {
            var b6 = function(b8) {
                var b9 = b8.stop;
                delete b8.stop;
                b9(i)
            };
            if (typeof b7 !== "string") {
                i = e;
                e = b7;
                b7 = undefined
            }
            if (e && b7 !== false) {
                this.queue(b7 || "fx", [])
            }
            return this.each(function() {
                var b9 = true,
                    ca = b7 != null && b7 + "queueHooks",
                    cb = au.timers,
                    b8 = au._data(this);
                if (ca) {
                    if (b8[ca] && b8[ca].stop) {
                        b6(b8[ca])
                    }
                } else {
                    for (ca in b8) {
                        if (b8[ca] && b8[ca].stop && bu.test(ca)) {
                            b6(b8[ca])
                        }
                    }
                }
                for (ca = cb.length; ca--;) {
                    if (cb[ca].elem === this && (b7 == null || cb[ca].queue === b7)) {
                        cb[ca].anim.stop(i);
                        b9 = false;
                        cb.splice(ca, 1)
                    }
                }
                if (b9 || !i) {
                    au.dequeue(this, b7)
                }
            })
        },
        finish: function(e) {
            if (e !== false) {
                e = e || "fx"
            }
            return this.each(function() {
                var b7, i = au._data(this),
                    b9 = i[e + "queue"],
                    b6 = i[e + "queueHooks"],
                    ca = au.timers,
                    b8 = b9 ? b9.length : 0;
                i.finish = true;
                au.queue(this, e, []);
                if (b6 && b6.stop) {
                    b6.stop.call(this, true)
                }
                for (b7 = ca.length; b7--;) {
                    if (ca[b7].elem === this && ca[b7].queue === e) {
                        ca[b7].anim.stop(true);
                        ca.splice(b7, 1)
                    }
                }
                for (b7 = 0; b7 < b8; b7++) {
                    if (b9[b7] && b9[b7].finish) {
                        b9[b7].finish.call(this)
                    }
                }
                delete i.finish
            })
        }
    });
    au.each(["toggle", "show", "hide"], function(b6, b7) {
        var e = au.fn[b7];
        au.fn[b7] = function(b9, b8, i) {
            return b9 == null || typeof b9 === "boolean" ? e.apply(this, arguments) : this.animate(aa(b7, true), b9, b8, i)
        }
    });
    au.each({
        slideDown: aa("show"),
        slideUp: aa("hide"),
        slideToggle: aa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        au.fn[e] = function(b8, b7, b6) {
            return this.animate(i, b8, b7, b6)
        }
    });
    au.timers = [];
    au.fx.tick = function() {
        var b6, b7 = au.timers,
            e = 0;
        Z = au.now();
        for (; e < b7.length; e++) {
            b6 = b7[e];
            if (!b6() && b7[e] === b6) {
                b7.splice(e--, 1)
            }
        }
        if (!b7.length) {
            au.fx.stop()
        }
        Z = undefined
    };
    au.fx.timer = function(e) {
        au.timers.push(e);
        if (e()) {
            au.fx.start()
        } else {
            au.timers.pop()
        }
    };
    au.fx.interval = 13;
    au.fx.start = function() {
        if (!bT) {
            bT = setInterval(au.fx.tick, au.fx.interval)
        }
    };
    au.fx.stop = function() {
        clearInterval(bT);
        bT = null
    };
    au.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    au.fn.delay = function(e, i) {
        e = au.fx ? au.fx.speeds[e] || e : e;
        i = i || "fx";
        return this.queue(i, function(b7, b6) {
            var b8 = setTimeout(b7, e);
            b6.stop = function() {
                clearTimeout(b8)
            }
        })
    };
    (function() {
        var b6, i, b8, e, b7;
        i = S.createElement("div");
        i.setAttribute("className", "t");
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        e = i.getElementsByTagName("a")[0];
        b8 = S.createElement("select");
        b7 = b8.appendChild(S.createElement("option"));
        b6 = i.getElementsByTagName("input")[0];
        e.style.cssText = "top:1px";
        bS.getSetAttribute = i.className !== "t";
        bS.style = /top/.test(e.getAttribute("style"));
        bS.hrefNormalized = e.getAttribute("href") === "/a";
        bS.checkOn = !!b6.value;
        bS.optSelected = b7.selected;
        bS.enctype = !!S.createElement("form").enctype;
        b8.disabled = true;
        bS.optDisabled = !b7.disabled;
        b6 = S.createElement("input");
        b6.setAttribute("value", "");
        bS.input = b6.getAttribute("value") === "";
        b6.value = "t";
        b6.setAttribute("type", "radio");
        bS.radioValue = b6.value === "t"
    })();
    var bt = /\r/g;
    au.fn.extend({
        val: function(b8) {
            var i, b7, b6, e = this[0];
            if (!arguments.length) {
                if (e) {
                    i = au.valHooks[e.type] || au.valHooks[e.nodeName.toLowerCase()];
                    if (i && "get" in i && (b7 = i.get(e, "value")) !== undefined) {
                        return b7
                    }
                    b7 = e.value;
                    return typeof b7 === "string" ? b7.replace(bt, "") : b7 == null ? "" : b7
                }
                return
            }
            b6 = au.isFunction(b8);
            return this.each(function(b9) {
                var ca;
                if (this.nodeType !== 1) {
                    return
                }
                if (b6) {
                    ca = b8.call(this, b9, au(this).val())
                } else {
                    ca = b8
                }
                if (ca == null) {
                    ca = ""
                } else {
                    if (typeof ca === "number") {
                        ca += ""
                    } else {
                        if (au.isArray(ca)) {
                            ca = au.map(ca, function(cb) {
                                return cb == null ? "" : cb + ""
                            })
                        }
                    }
                }
                i = au.valHooks[this.type] || au.valHooks[this.nodeName.toLowerCase()];
                if (!i || !("set" in i) || i.set(this, ca, "value") === undefined) {
                    this.value = ca
                }
            })
        }
    });
    au.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var i = au.find.attr(e, "value");
                    return i != null ? i : au.trim(au.text(e))
                }
            },
            select: {
                get: function(e) {
                    var cc, ca, cb = e.options,
                        b7 = e.selectedIndex,
                        b9 = e.type === "select-one" || b7 < 0,
                        cd = b9 ? null : [],
                        b8 = b9 ? b7 + 1 : cb.length,
                        b6 = b7 < 0 ? b8 : b9 ? b7 : 0;
                    for (; b6 < b8; b6++) {
                        ca = cb[b6];
                        if ((ca.selected || b6 === b7) && (bS.optDisabled ? !ca.disabled : ca.getAttribute("disabled") === null) && (!ca.parentNode.disabled || !au.nodeName(ca.parentNode, "optgroup"))) {
                            cc = au(ca).val();
                            if (b9) {
                                return cc
                            }
                            cd.push(cc)
                        }
                    }
                    return cd
                },
                set: function(b6, cb) {
                    var ca, b8, b9 = b6.options,
                        cc = au.makeArray(cb),
                        b7 = b9.length;
                    while (b7--) {
                        b8 = b9[b7];
                        if (au.inArray(au.valHooks.option.get(b8), cc) >= 0) {
                            try {
                                b8.selected = ca = true
                            } catch (e) {
                                b8.scrollHeight
                            }
                        } else {
                            b8.selected = false
                        }
                    }
                    if (!ca) {
                        b6.selectedIndex = -1
                    }
                    return b9
                }
            }
        }
    });
    au.each(["radio", "checkbox"], function() {
        au.valHooks[this] = {
            set: function(e, i) {
                if (au.isArray(i)) {
                    return (e.checked = au.inArray(au(e).val(), i) >= 0)
                }
            }
        };
        if (!bS.checkOn) {
            au.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    });
    var aw, t, r = au.expr.attrHandle,
        bG = /^(?:checked|selected)$/i,
        ac = bS.getSetAttribute,
        ad = bS.input;
    au.fn.extend({
        attr: function(e, i) {
            return d(this, au.attr, e, i, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                au.removeAttr(this, e)
            })
        }
    });
    au.extend({
        attr: function(e, b6, b9) {
            var i, b8, b7 = e.nodeType;
            if (!e || b7 === 3 || b7 === 8 || b7 === 2) {
                return
            }
            if (typeof e.getAttribute === bR) {
                return au.prop(e, b6, b9)
            }
            if (b7 !== 1 || !au.isXMLDoc(e)) {
                b6 = b6.toLowerCase();
                i = au.attrHooks[b6] || (au.expr.match.bool.test(b6) ? t : aw)
            }
            if (b9 !== undefined) {
                if (b9 === null) {
                    au.removeAttr(e, b6)
                } else {
                    if (i && "set" in i && (b8 = i.set(e, b9, b6)) !== undefined) {
                        return b8
                    } else {
                        e.setAttribute(b6, b9 + "");
                        return b9
                    }
                }
            } else {
                if (i && "get" in i && (b8 = i.get(e, b6)) !== null) {
                    return b8
                } else {
                    b8 = au.find.attr(e, b6);
                    return b8 == null ? undefined : b8
                }
            }
        },
        removeAttr: function(b6, ca) {
            var b8, b9, b7 = 0,
                e = ca && ca.match(bi);
            if (e && b6.nodeType === 1) {
                while ((b8 = e[b7++])) {
                    b9 = au.propFix[b8] || b8;
                    if (au.expr.match.bool.test(b8)) {
                        if (ad && ac || !bG.test(b8)) {
                            b6[b9] = false
                        } else {
                            b6[au.camelCase("default-" + b8)] = b6[b9] = false
                        }
                    } else {
                        au.attr(b6, b8, "")
                    }
                    b6.removeAttribute(ac ? b8 : b9)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, b6) {
                    if (!bS.radioValue && b6 === "radio" && au.nodeName(e, "input")) {
                        var i = e.value;
                        e.setAttribute("type", b6);
                        if (i) {
                            e.value = i
                        }
                        return b6
                    }
                }
            }
        }
    });
    t = {
        set: function(e, b6, i) {
            if (b6 === false) {
                au.removeAttr(e, i)
            } else {
                if (ad && ac || !bG.test(i)) {
                    e.setAttribute(!ac && au.propFix[i] || i, i)
                } else {
                    e[au.camelCase("default-" + i)] = e[i] = true
                }
            }
            return i
        }
    };
    au.each(au.expr.match.bool.source.match(/\w+/g), function(b6, b7) {
        var e = r[b7] || au.find.attr;
        r[b7] = ad && ac || !bG.test(b7) ? function(i, ca, b9) {
            var cb, b8;
            if (!b9) {
                b8 = r[ca];
                r[ca] = cb;
                cb = e(i, ca, b9) != null ? ca.toLowerCase() : null;
                r[ca] = b8
            }
            return cb
        } : function(i, b9, b8) {
            if (!b8) {
                return i[au.camelCase("default-" + b9)] ? b9.toLowerCase() : null
            }
        }
    });
    if (!ad || !ac) {
        au.attrHooks.value = {
            set: function(e, b6, i) {
                if (au.nodeName(e, "input")) {
                    e.defaultValue = b6
                } else {
                    return aw && aw.set(e, b6, i)
                }
            }
        }
    }
    if (!ac) {
        aw = {
            set: function(e, b7, i) {
                var b6 = e.getAttributeNode(i);
                if (!b6) {
                    e.setAttributeNode((b6 = e.ownerDocument.createAttribute(i)))
                }
                b6.value = b7 += "";
                if (i === "value" || b7 === e.getAttribute(i)) {
                    return b7
                }
            }
        };
        r.id = r.name = r.coords = function(e, b6, i) {
            var b7;
            if (!i) {
                return (b7 = e.getAttributeNode(b6)) && b7.value !== "" ? b7.value : null
            }
        };
        au.valHooks.button = {
            get: function(e, i) {
                var b6 = e.getAttributeNode(i);
                if (b6 && b6.specified) {
                    return b6.value
                }
            },
            set: aw.set
        };
        au.attrHooks.contenteditable = {
            set: function(e, b6, i) {
                aw.set(e, b6 === "" ? false : b6, i)
            }
        };
        au.each(["width", "height"], function(e, b6) {
            au.attrHooks[b6] = {
                set: function(i, b7) {
                    if (b7 === "") {
                        i.setAttribute(b6, "auto");
                        return b7
                    }
                }
            }
        })
    }
    if (!bS.style) {
        au.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || undefined
            },
            set: function(e, i) {
                return (e.style.cssText = i + "")
            }
        }
    }
    var aW = /^(?:input|select|textarea|button|object)$/i,
        aO = /^(?:a|area)$/i;
    au.fn.extend({
        prop: function(e, i) {
            return d(this, au.prop, e, i, arguments.length > 1)
        },
        removeProp: function(e) {
            e = au.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = undefined;
                    delete this[e]
                } catch (i) {}
            })
        }
    });
    au.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, b6, ca) {
            var b9, i, b7, b8 = e.nodeType;
            if (!e || b8 === 3 || b8 === 8 || b8 === 2) {
                return
            }
            b7 = b8 !== 1 || !au.isXMLDoc(e);
            if (b7) {
                b6 = au.propFix[b6] || b6;
                i = au.propHooks[b6]
            }
            if (ca !== undefined) {
                return i && "set" in i && (b9 = i.set(e, ca, b6)) !== undefined ? b9 : (e[b6] = ca)
            } else {
                return i && "get" in i && (b9 = i.get(e, b6)) !== null ? b9 : e[b6]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var i = au.find.attr(e, "tabindex");
                    return i ? parseInt(i, 10) : aW.test(e.nodeName) || aO.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    });
    if (!bS.hrefNormalized) {
        au.each(["href", "src"], function(e, b6) {
            au.propHooks[b6] = {
                get: function(i) {
                    return i.getAttribute(b6, 4)
                }
            }
        })
    }
    if (!bS.optSelected) {
        au.propHooks.selected = {
            get: function(e) {
                var i = e.parentNode;
                if (i) {
                    i.selectedIndex;
                    if (i.parentNode) {
                        i.parentNode.selectedIndex
                    }
                }
                return null
            }
        }
    }
    au.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        au.propFix[this.toLowerCase()] = this
    });
    if (!bS.enctype) {
        au.propFix.enctype = "encoding"
    }
    var aM = /[\t\r\n\f]/g;
    au.fn.extend({
        addClass: function(ce) {
            var e, b8, b7, b6, cb, b9, ca = 0,
                cc = this.length,
                cd = typeof ce === "string" && ce;
            if (au.isFunction(ce)) {
                return this.each(function(i) {
                    au(this).addClass(ce.call(this, i, this.className))
                })
            }
            if (cd) {
                e = (ce || "").match(bi) || [];
                for (; ca < cc; ca++) {
                    b8 = this[ca];
                    b7 = b8.nodeType === 1 && (b8.className ? (" " + b8.className + " ").replace(aM, " ") : " ");
                    if (b7) {
                        cb = 0;
                        while ((b6 = e[cb++])) {
                            if (b7.indexOf(" " + b6 + " ") < 0) {
                                b7 += b6 + " "
                            }
                        }
                        b9 = au.trim(b7);
                        if (b8.className !== b9) {
                            b8.className = b9
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(ce) {
            var e, b8, b7, b6, cb, b9, ca = 0,
                cc = this.length,
                cd = arguments.length === 0 || typeof ce === "string" && ce;
            if (au.isFunction(ce)) {
                return this.each(function(i) {
                    au(this).removeClass(ce.call(this, i, this.className))
                })
            }
            if (cd) {
                e = (ce || "").match(bi) || [];
                for (; ca < cc; ca++) {
                    b8 = this[ca];
                    b7 = b8.nodeType === 1 && (b8.className ? (" " + b8.className + " ").replace(aM, " ") : "");
                    if (b7) {
                        cb = 0;
                        while ((b6 = e[cb++])) {
                            while (b7.indexOf(" " + b6 + " ") >= 0) {
                                b7 = b7.replace(" " + b6 + " ", " ")
                            }
                        }
                        b9 = ce ? au.trim(b7) : "";
                        if (b8.className !== b9) {
                            b8.className = b9
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(b6, e) {
            var i = typeof b6;
            if (typeof e === "boolean" && i === "string") {
                return e ? this.addClass(b6) : this.removeClass(b6)
            }
            if (au.isFunction(b6)) {
                return this.each(function(b7) {
                    au(this).toggleClass(b6.call(this, b7, this.className, e), e)
                })
            }
            return this.each(function() {
                if (i === "string") {
                    var b7, b9 = 0,
                        ca = au(this),
                        b8 = b6.match(bi) || [];
                    while ((b7 = b8[b9++])) {
                        if (ca.hasClass(b7)) {
                            ca.removeClass(b7)
                        } else {
                            ca.addClass(b7)
                        }
                    }
                } else {
                    if (i === bR || i === "boolean") {
                        if (this.className) {
                            au._data(this, "__className__", this.className)
                        }
                        this.className = this.className || b6 === false ? "" : au._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function(b8) {
            var e = " " + b8 + " ",
                b6 = 0,
                b7 = this.length;
            for (; b6 < b7; b6++) {
                if (this[b6].nodeType === 1 && (" " + this[b6].className + " ").replace(aM, " ").indexOf(e) >= 0) {
                    return true
                }
            }
            return false
        }
    });
    au.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(e, b6) {
        au.fn[b6] = function(i, b7) {
            return arguments.length > 0 ? this.on(b6, null, i, b7) : this.trigger(b6)
        }
    });
    au.fn.extend({
        hover: function(i, e) {
            return this.mouseenter(i).mouseleave(e || i)
        },
        bind: function(b6, e, i) {
            return this.on(b6, null, e, i)
        },
        unbind: function(i, e) {
            return this.off(i, null, e)
        },
        delegate: function(b6, b7, e, i) {
            return this.on(b7, b6, e, i)
        },
        undelegate: function(i, b6, e) {
            return arguments.length === 1 ? this.off(i, "**") : this.off(b6, i || "**", e)
        }
    });
    var az = au.now();
    var bq = (/\?/);
    var bH = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    au.parseJSON = function(e) {
        if (b0.JSON && b0.JSON.parse) {
            return b0.JSON.parse(e + "")
        }
        var b6, i = null,
            b7 = au.trim(e + "");
        return b7 && !au.trim(b7.replace(bH, function(cb, b9, ca, b8) {
            if (b6 && b9) {
                i = 0
            }
            if (i === 0) {
                return cb
            }
            b6 = ca || b9;
            i += !b8 - !ca;
            return ""
        })) ? (Function("return " + b7))() : au.error("Invalid JSON: " + e)
    };
    au.parseXML = function(i) {
        var b8, b7;
        if (!i || typeof i !== "string") {
            return null
        }
        try {
            if (b0.DOMParser) {
                b7 = new DOMParser();
                b8 = b7.parseFromString(i, "text/xml")
            } else {
                b8 = new ActiveXObject("Microsoft.XMLDOM");
                b8.async = "false";
                b8.loadXML(i)
            }
        } catch (b6) {
            b8 = undefined
        }
        if (!b8 || !b8.documentElement || b8.getElementsByTagName("parsererror").length) {
            au.error("Invalid XML: " + i)
        }
        return b8
    };
    var n, m, a1 = /#.*$/,
        bD = /([?&])_=[^&]*/,
        a2 = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        a9 = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        bf = /^(?:GET|HEAD)$/,
        bp = /^\/\//,
        bF = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        aD = {},
        bV = {},
        o = "*/".concat("*");
    try {
        m = location.href
    } catch (T) {
        m = S.createElement("a");
        m.href = "";
        m = m.href
    }
    n = bF.exec(m.toLowerCase()) || [];

    function h(e) {
        return function(b7, b9) {
            if (typeof b7 !== "string") {
                b9 = b7;
                b7 = "*"
            }
            var b6, ca = 0,
                b8 = b7.toLowerCase().match(bi) || [];
            if (au.isFunction(b9)) {
                while ((b6 = b8[ca++])) {
                    if (b6.charAt(0) === "+") {
                        b6 = b6.slice(1) || "*";
                        (e[b6] = e[b6] || []).unshift(b9)
                    } else {
                        (e[b6] = e[b6] || []).push(b9)
                    }
                }
            }
        }
    }

    function an(ca, b7, b8, b6) {
        var i = {},
            b9 = (ca === bV);

        function e(cb) {
            var cc;
            i[cb] = true;
            au.each(ca[cb] || [], function(cd, cf) {
                var ce = cf(b7, b8, b6);
                if (typeof ce === "string" && !b9 && !i[ce]) {
                    b7.dataTypes.unshift(ce);
                    e(ce);
                    return false
                } else {
                    if (b9) {
                        return !(cc = ce)
                    }
                }
            });
            return cc
        }
        return e(b7.dataTypes[0]) || !i["*"] && e("*")
    }

    function k(b8, b7) {
        var e, b6, i = au.ajaxSettings.flatOptions || {};
        for (b6 in b7) {
            if (b7[b6] !== undefined) {
                (i[b6] ? b8 : (e || (e = {})))[b6] = b7[b6]
            }
        }
        if (e) {
            au.extend(true, b8, e)
        }
        return b8
    }

    function l(cb, b9, ca) {
        var b8, i, b7, cc, e = cb.contents,
            b6 = cb.dataTypes;
        while (b6[0] === "*") {
            b6.shift();
            if (i === undefined) {
                i = cb.mimeType || b9.getResponseHeader("Content-Type")
            }
        }
        if (i) {
            for (cc in e) {
                if (e[cc] && e[cc].test(i)) {
                    b6.unshift(cc);
                    break
                }
            }
        }
        if (b6[0] in ca) {
            b7 = b6[0]
        } else {
            for (cc in ca) {
                if (!b6[0] || cb.converters[cc + " " + b6[0]]) {
                    b7 = cc;
                    break
                }
                if (!b8) {
                    b8 = cc
                }
            }
            b7 = b7 || b8
        }
        if (b7) {
            if (b7 !== b6[0]) {
                b6.unshift(b7)
            }
            return ca[b7]
        }
    }

    function j(cf, ce, cc, cb) {
        var b6, b8, i, cg, cd, b7 = {},
            b9 = cf.dataTypes.slice();
        if (b9[1]) {
            for (i in cf.converters) {
                b7[i.toLowerCase()] = cf.converters[i]
            }
        }
        b8 = b9.shift();
        while (b8) {
            if (cf.responseFields[b8]) {
                cc[cf.responseFields[b8]] = ce
            }
            if (!cd && cb && cf.dataFilter) {
                ce = cf.dataFilter(ce, cf.dataType)
            }
            cd = b8;
            b8 = b9.shift();
            if (b8) {
                if (b8 === "*") {
                    b8 = cd
                } else {
                    if (cd !== "*" && cd !== b8) {
                        i = b7[cd + " " + b8] || b7["* " + b8];
                        if (!i) {
                            for (b6 in b7) {
                                cg = b6.split(" ");
                                if (cg[1] === b8) {
                                    i = b7[cd + " " + cg[0]] || b7["* " + cg[0]];
                                    if (i) {
                                        if (i === true) {
                                            i = b7[b6]
                                        } else {
                                            if (b7[b6] !== true) {
                                                b8 = cg[0];
                                                b9.unshift(cg[1])
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (i !== true) {
                            if (i && cf["throws"]) {
                                ce = i(ce)
                            } else {
                                try {
                                    ce = i(ce)
                                } catch (ca) {
                                    return {
                                        state: "parsererror",
                                        error: i ? ca : "No conversion from " + cd + " to " + b8
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: ce
        }
    }
    au.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: m,
            type: "GET",
            isLocal: a9.test(n[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": o,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": au.parseJSON,
                "text xml": au.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(i, e) {
            return e ? k(k(i, au.ajaxSettings), e) : k(au.ajaxSettings, i)
        },
        ajaxPrefilter: h(aD),
        ajaxTransport: h(bV),
        ajax: function(cs, cg) {
            if (typeof cs === "object") {
                cg = cs;
                cs = undefined
            }
            cg = cg || {};
            var ch, ce, b6, cl, cq, cc, cr, ck, cm = au.ajaxSetup({}, cg),
                b7 = cm.context || cm,
                cd = cm.context && (b7.nodeType || b7.jquery) ? au(b7) : au.event,
                b9 = au.Deferred(),
                b8 = au.Callbacks("once memory"),
                co = cm.statusCode || {},
                ci = {},
                cj = {},
                cn = 0,
                cp = "canceled",
                cf = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var i;
                        if (cn === 2) {
                            if (!ck) {
                                ck = {};
                                while ((i = a2.exec(cl))) {
                                    ck[i[1].toLowerCase()] = i[2]
                                }
                            }
                            i = ck[e.toLowerCase()]
                        }
                        return i == null ? null : i
                    },
                    getAllResponseHeaders: function() {
                        return cn === 2 ? cl : null
                    },
                    setRequestHeader: function(i, ct) {
                        var e = i.toLowerCase();
                        if (!cn) {
                            i = cj[e] = cj[e] || i;
                            ci[i] = ct
                        }
                        return this
                    },
                    overrideMimeType: function(e) {
                        if (!cn) {
                            cm.mimeType = e
                        }
                        return this
                    },
                    statusCode: function(i) {
                        var e;
                        if (i) {
                            if (cn < 2) {
                                for (e in i) {
                                    co[e] = [co[e], i[e]]
                                }
                            } else {
                                cf.always(i[cf.status])
                            }
                        }
                        return this
                    },
                    abort: function(i) {
                        var e = i || cp;
                        if (cr) {
                            cr.abort(e)
                        }
                        ca(0, e);
                        return this
                    }
                };
            b9.promise(cf).complete = b8.add;
            cf.success = cf.done;
            cf.error = cf.fail;
            cm.url = ((cs || cm.url || m) + "").replace(a1, "").replace(bp, n[1] + "//");
            cm.type = cg.method || cg.type || cm.method || cm.type;
            cm.dataTypes = au.trim(cm.dataType || "*").toLowerCase().match(bi) || [""];
            if (cm.crossDomain == null) {
                ch = bF.exec(cm.url.toLowerCase());
                cm.crossDomain = !!(ch && (ch[1] !== n[1] || ch[2] !== n[2] || (ch[3] || (ch[1] === "http:" ? "80" : "443")) !== (n[3] || (n[1] === "http:" ? "80" : "443"))))
            }
            if (cm.data && cm.processData && typeof cm.data !== "string") {
                cm.data = au.param(cm.data, cm.traditional)
            }
            an(aD, cm, cg, cf);
            if (cn === 2) {
                return cf
            }
            cc = cm.global;
            if (cc && au.active++ === 0) {
                au.event.trigger("ajaxStart")
            }
            cm.type = cm.type.toUpperCase();
            cm.hasContent = !bf.test(cm.type);
            b6 = cm.url;
            if (!cm.hasContent) {
                if (cm.data) {
                    b6 = (cm.url += (bq.test(b6) ? "&" : "?") + cm.data);
                    delete cm.data
                }
                if (cm.cache === false) {
                    cm.url = bD.test(b6) ? b6.replace(bD, "$1_=" + az++) : b6 + (bq.test(b6) ? "&" : "?") + "_=" + az++
                }
            }
            if (cm.ifModified) {
                if (au.lastModified[b6]) {
                    cf.setRequestHeader("If-Modified-Since", au.lastModified[b6])
                }
                if (au.etag[b6]) {
                    cf.setRequestHeader("If-None-Match", au.etag[b6])
                }
            }
            if (cm.data && cm.hasContent && cm.contentType !== false || cg.contentType) {
                cf.setRequestHeader("Content-Type", cm.contentType)
            }
            cf.setRequestHeader("Accept", cm.dataTypes[0] && cm.accepts[cm.dataTypes[0]] ? cm.accepts[cm.dataTypes[0]] + (cm.dataTypes[0] !== "*" ? ", " + o + "; q=0.01" : "") : cm.accepts["*"]);
            for (ce in cm.headers) {
                cf.setRequestHeader(ce, cm.headers[ce])
            }
            if (cm.beforeSend && (cm.beforeSend.call(b7, cf, cm) === false || cn === 2)) {
                return cf.abort()
            }
            cp = "abort";
            for (ce in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                cf[ce](cm[ce])
            }
            cr = an(bV, cm, cg, cf);
            if (!cr) {
                ca(-1, "No Transport")
            } else {
                cf.readyState = 1;
                if (cc) {
                    cd.trigger("ajaxSend", [cf, cm])
                }
                if (cm.async && cm.timeout > 0) {
                    cq = setTimeout(function() {
                        cf.abort("timeout")
                    }, cm.timeout)
                }
                try {
                    cn = 1;
                    cr.send(ci, ca)
                } catch (cb) {
                    if (cn < 2) {
                        ca(-1, cb)
                    } else {
                        throw cb
                    }
                }
            }

            function ca(cy, cv, cx, i) {
                var ct, cA, e, cw, cu, cz = cv;
                if (cn === 2) {
                    return
                }
                cn = 2;
                if (cq) {
                    clearTimeout(cq)
                }
                cr = undefined;
                cl = i || "";
                cf.readyState = cy > 0 ? 4 : 0;
                ct = cy >= 200 && cy < 300 || cy === 304;
                if (cx) {
                    cw = l(cm, cf, cx)
                }
                cw = j(cm, cw, cf, ct);
                if (ct) {
                    if (cm.ifModified) {
                        cu = cf.getResponseHeader("Last-Modified");
                        if (cu) {
                            au.lastModified[b6] = cu
                        }
                        cu = cf.getResponseHeader("etag");
                        if (cu) {
                            au.etag[b6] = cu
                        }
                    }
                    if (cy === 204 || cm.type === "HEAD") {
                        cz = "nocontent"
                    } else {
                        if (cy === 304) {
                            cz = "notmodified"
                        } else {
                            cz = cw.state;
                            cA = cw.data;
                            e = cw.error;
                            ct = !e
                        }
                    }
                } else {
                    e = cz;
                    if (cy || !cz) {
                        cz = "error";
                        if (cy < 0) {
                            cy = 0
                        }
                    }
                }
                cf.status = cy;
                cf.statusText = (cv || cz) + "";
                if (ct) {
                    b9.resolveWith(b7, [cA, cz, cf])
                } else {
                    b9.rejectWith(b7, [cf, cz, e])
                }
                cf.statusCode(co);
                co = undefined;
                if (cc) {
                    cd.trigger(ct ? "ajaxSuccess" : "ajaxError", [cf, cm, ct ? cA : e])
                }
                b8.fireWith(b7, [cf, cz]);
                if (cc) {
                    cd.trigger("ajaxComplete", [cf, cm]);
                    if (!(--au.active)) {
                        au.event.trigger("ajaxStop")
                    }
                }
            }
            return cf
        },
        getJSON: function(b6, i, e) {
            return au.get(b6, i, e, "json")
        },
        getScript: function(i, e) {
            return au.get(i, undefined, e, "script")
        }
    });
    au.each(["get", "post"], function(e, b6) {
        au[b6] = function(b9, b7, i, b8) {
            if (au.isFunction(b7)) {
                b8 = b8 || i;
                i = b7;
                b7 = undefined
            }
            return au.ajax({
                url: b9,
                type: b6,
                dataType: b8,
                data: b7,
                success: i
            })
        }
    });
    au.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, b6) {
        au.fn[b6] = function(i) {
            return this.on(b6, i)
        }
    });
    au._evalUrl = function(e) {
        return au.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        })
    };
    au.fn.extend({
        wrapAll: function(e) {
            if (au.isFunction(e)) {
                return this.each(function(b6) {
                    au(this).wrapAll(e.call(this, b6))
                })
            }
            if (this[0]) {
                var i = au(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    i.insertBefore(this[0])
                }
                i.map(function() {
                    var b6 = this;
                    while (b6.firstChild && b6.firstChild.nodeType === 1) {
                        b6 = b6.firstChild
                    }
                    return b6
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            if (au.isFunction(e)) {
                return this.each(function(b6) {
                    au(this).wrapInner(e.call(this, b6))
                })
            }
            return this.each(function() {
                var b6 = au(this),
                    i = b6.contents();
                if (i.length) {
                    i.wrapAll(e)
                } else {
                    b6.append(e)
                }
            })
        },
        wrap: function(e) {
            var i = au.isFunction(e);
            return this.each(function(b6) {
                au(this).wrapAll(i ? e.call(this, b6) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!au.nodeName(this, "body")) {
                    au(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });
    au.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || (!bS.reliableHiddenOffsets() && ((e.style && e.style.display) || au.css(e, "display")) === "none")
    };
    au.expr.filters.visible = function(e) {
        return !au.expr.filters.hidden(e)
    };
    var aG = /%20/g,
        aJ = /\[\]$/,
        aP = /\r?\n/g,
        bz = /^(?:submit|button|image|reset|file)$/i,
        by = /^(?:input|select|textarea|keygen)/i;

    function u(b7, b6, b8, e) {
        var i;
        if (au.isArray(b6)) {
            au.each(b6, function(b9, ca) {
                if (b8 || aJ.test(b7)) {
                    e(b7, ca)
                } else {
                    u(b7 + "[" + (typeof ca === "object" ? b9 : "") + "]", ca, b8, e)
                }
            })
        } else {
            if (!b8 && au.type(b6) === "object") {
                for (i in b6) {
                    u(b7 + "[" + i + "]", b6[i], b8, e)
                }
            } else {
                e(b7, b6)
            }
        }
    }
    au.param = function(e, b8) {
        var b6, b7 = [],
            i = function(b9, ca) {
                ca = au.isFunction(ca) ? ca() : (ca == null ? "" : ca);
                b7[b7.length] = encodeURIComponent(b9) + "=" + encodeURIComponent(ca)
            };
        if (b8 === undefined) {
            b8 = au.ajaxSettings && au.ajaxSettings.traditional
        }
        if (au.isArray(e) || (e.jquery && !au.isPlainObject(e))) {
            au.each(e, function() {
                i(this.name, this.value)
            })
        } else {
            for (b6 in e) {
                u(b6, e[b6], b8, i)
            }
        }
        return b7.join("&").replace(aG, "+")
    };
    au.fn.extend({
        serialize: function() {
            return au.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = au.prop(this, "elements");
                return e ? au.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !au(this).is(":disabled") && by.test(this.nodeName) && !bz.test(e) && (this.checked || !aK.test(e))
            }).map(function(b6, e) {
                var b7 = au(this).val();
                return b7 == null ? null : au.isArray(b7) ? au.map(b7, function(i) {
                    return {
                        name: e.name,
                        value: i.replace(aP, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: b7.replace(aP, "\r\n")
                }
            }).get()
        }
    });
    au.ajaxSettings.xhr = b0.ActiveXObject !== undefined ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && E() || A()
    } : E;
    var b4 = 0,
        b3 = {},
        b5 = au.ajaxSettings.xhr();
    if (b0.ActiveXObject) {
        au(b0).on("unload", function() {
            for (var e in b3) {
                b3[e](undefined, true)
            }
        })
    }
    bS.cors = !!b5 && ("withCredentials" in b5);
    b5 = bS.ajax = !!b5;
    if (b5) {
        au.ajaxTransport(function(i) {
            if (!i.crossDomain || bS.cors) {
                var e;
                return {
                    send: function(b7, b6) {
                        var b8, ca = i.xhr(),
                            b9 = ++b4;
                        ca.open(i.type, i.url, i.async, i.username, i.password);
                        if (i.xhrFields) {
                            for (b8 in i.xhrFields) {
                                ca[b8] = i.xhrFields[b8]
                            }
                        }
                        if (i.mimeType && ca.overrideMimeType) {
                            ca.overrideMimeType(i.mimeType)
                        }
                        if (!i.crossDomain && !b7["X-Requested-With"]) {
                            b7["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (b8 in b7) {
                            if (b7[b8] !== undefined) {
                                ca.setRequestHeader(b8, b7[b8] + "")
                            }
                        }
                        ca.send((i.hasContent && i.data) || null);
                        e = function(cb, cd) {
                            var cf, cg, ce;
                            if (e && (cd || ca.readyState === 4)) {
                                delete b3[b9];
                                e = undefined;
                                ca.onreadystatechange = au.noop;
                                if (cd) {
                                    if (ca.readyState !== 4) {
                                        ca.abort()
                                    }
                                } else {
                                    ce = {};
                                    cf = ca.status;
                                    if (typeof ca.responseText === "string") {
                                        ce.text = ca.responseText
                                    }
                                    try {
                                        cg = ca.statusText
                                    } catch (cc) {
                                        cg = ""
                                    }
                                    if (!cf && i.isLocal && !i.crossDomain) {
                                        cf = ce.text ? 200 : 404
                                    } else {
                                        if (cf === 1223) {
                                            cf = 204
                                        }
                                    }
                                }
                            }
                            if (ce) {
                                b6(cf, cg, ce, ca.getAllResponseHeaders())
                            }
                        };
                        if (!i.async) {
                            e()
                        } else {
                            if (ca.readyState === 4) {
                                setTimeout(e)
                            } else {
                                ca.onreadystatechange = b3[b9] = e
                            }
                        }
                    },
                    abort: function() {
                        if (e) {
                            e(undefined, true)
                        }
                    }
                }
            }
        })
    }

    function E() {
        try {
            return new b0.XMLHttpRequest()
        } catch (i) {}
    }

    function A() {
        try {
            return new b0.ActiveXObject("Microsoft.XMLHTTP")
        } catch (i) {}
    }
    au.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                au.globalEval(e);
                return e
            }
        }
    });
    au.ajaxPrefilter("script", function(e) {
        if (e.cache === undefined) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    au.ajaxTransport("script", function(i) {
        if (i.crossDomain) {
            var b6, e = S.head || au("head")[0] || S.documentElement;
            return {
                send: function(b7, b8) {
                    b6 = S.createElement("script");
                    b6.async = true;
                    if (i.scriptCharset) {
                        b6.charset = i.scriptCharset
                    }
                    b6.src = i.url;
                    b6.onload = b6.onreadystatechange = function(b9, ca) {
                        if (ca || !b6.readyState || /loaded|complete/.test(b6.readyState)) {
                            b6.onload = b6.onreadystatechange = null;
                            if (b6.parentNode) {
                                b6.parentNode.removeChild(b6)
                            }
                            b6 = null;
                            if (!ca) {
                                b8(200, "success")
                            }
                        }
                    };
                    e.insertBefore(b6, e.firstChild)
                },
                abort: function() {
                    if (b6) {
                        b6.onload(undefined, true)
                    }
                }
            }
        }
    });
    var aA = [],
        a6 = /(=)\?(?=&|$)|\?\?/;
    au.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = aA.pop() || (au.expando + "_" + (az++));
            this[e] = true;
            return e
        }
    });
    au.ajaxPrefilter("json jsonp", function(ca, b7, i) {
        var e, b8, b9, b6 = ca.jsonp !== false && (a6.test(ca.url) ? "url" : typeof ca.data === "string" && !(ca.contentType || "").indexOf("application/x-www-form-urlencoded") && a6.test(ca.data) && "data");
        if (b6 || ca.dataTypes[0] === "jsonp") {
            e = ca.jsonpCallback = au.isFunction(ca.jsonpCallback) ? ca.jsonpCallback() : ca.jsonpCallback;
            if (b6) {
                ca[b6] = ca[b6].replace(a6, "$1" + e)
            } else {
                if (ca.jsonp !== false) {
                    ca.url += (bq.test(ca.url) ? "&" : "?") + ca.jsonp + "=" + e
                }
            }
            ca.converters["script json"] = function() {
                if (!b9) {
                    au.error(e + " was not called")
                }
                return b9[0]
            };
            ca.dataTypes[0] = "json";
            b8 = b0[e];
            b0[e] = function() {
                b9 = arguments
            };
            i.always(function() {
                b0[e] = b8;
                if (ca[e]) {
                    ca.jsonpCallback = b7.jsonpCallback;
                    aA.push(e)
                }
                if (b9 && au.isFunction(b8)) {
                    b8(b9[0])
                }
                b9 = b8 = undefined
            });
            return "script"
        }
    });
    au.parseHTML = function(i, e, b6) {
        if (!i || typeof i !== "string") {
            return null
        }
        if (typeof e === "boolean") {
            b6 = e;
            e = false
        }
        e = e || S;
        var b7 = bx.exec(i),
            b8 = !b6 && [];
        if (b7) {
            return [e.createElement(b7[1])]
        }
        b7 = au.buildFragment([i], e, b8);
        if (b8 && b8.length) {
            au(b8).remove()
        }
        return au.merge([], b7.childNodes)
    };
    var c = au.fn.load;
    au.fn.load = function(cb, b6, e) {
        if (typeof cb !== "string" && c) {
            return c.apply(this, arguments)
        }
        var b8, b7, ca, b9 = this,
            i = cb.indexOf(" ");
        if (i >= 0) {
            b8 = au.trim(cb.slice(i, cb.length));
            cb = cb.slice(0, i)
        }
        if (au.isFunction(b6)) {
            e = b6;
            b6 = undefined
        } else {
            if (b6 && typeof b6 === "object") {
                ca = "POST"
            }
        }
        if (b9.length > 0) {
            au.ajax({
                url: cb,
                type: ca,
                dataType: "html",
                data: b6
            }).done(function(cc) {
                b7 = arguments;
                b9.html(b8 ? au("<div>").append(au.parseHTML(cc)).find(b8) : cc)
            }).complete(e && function(cc, cd) {
                b9.each(e, b7 || [cc.responseText, cd, cc])
            })
        }
        return this
    };
    au.expr.filters.animated = function(e) {
        return au.grep(au.timers, function(i) {
            return e === i.elem
        }).length
    };
    var R = b0.document.documentElement;

    function ag(e) {
        return au.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    au.offset = {
        setOffset: function(cd, cf, ce) {
            var cb, b9, b7, cc, ca, b6, e, cg = au.css(cd, "position"),
                b8 = au(cd),
                ch = {};
            if (cg === "static") {
                cd.style.position = "relative"
            }
            ca = b8.offset();
            b7 = au.css(cd, "top");
            b6 = au.css(cd, "left");
            e = (cg === "absolute" || cg === "fixed") && au.inArray("auto", [b7, b6]) > -1;
            if (e) {
                cb = b8.position();
                cc = cb.top;
                b9 = cb.left
            } else {
                cc = parseFloat(b7) || 0;
                b9 = parseFloat(b6) || 0
            }
            if (au.isFunction(cf)) {
                cf = cf.call(cd, ce, ca)
            }
            if (cf.top != null) {
                ch.top = (cf.top - ca.top) + cc
            }
            if (cf.left != null) {
                ch.left = (cf.left - ca.left) + b9
            }
            if ("using" in cf) {
                cf.using.call(cd, ch)
            } else {
                b8.css(ch)
            }
        }
    };
    au.fn.extend({
        offset: function(b8) {
            if (arguments.length) {
                return b8 === undefined ? this : this.each(function(ca) {
                    au.offset.setOffset(this, b8, ca)
                })
            }
            var b6, b9, e = {
                    top: 0,
                    left: 0
                },
                b7 = this[0],
                i = b7 && b7.ownerDocument;
            if (!i) {
                return
            }
            b6 = i.documentElement;
            if (!au.contains(b6, b7)) {
                return e
            }
            if (typeof b7.getBoundingClientRect !== bR) {
                e = b7.getBoundingClientRect()
            }
            b9 = ag(i);
            return {
                top: e.top + (b9.pageYOffset || b6.scrollTop) - (b6.clientTop || 0),
                left: e.left + (b9.pageXOffset || b6.scrollLeft) - (b6.clientLeft || 0)
            }
        },
        position: function() {
            if (!this[0]) {
                return
            }
            var b6, i, b7 = {
                    top: 0,
                    left: 0
                },
                e = this[0];
            if (au.css(e, "position") === "fixed") {
                i = e.getBoundingClientRect()
            } else {
                b6 = this.offsetParent();
                i = this.offset();
                if (!au.nodeName(b6[0], "html")) {
                    b7 = b6.offset()
                }
                b7.top += au.css(b6[0], "borderTopWidth", true);
                b7.left += au.css(b6[0], "borderLeftWidth", true)
            }
            return {
                top: i.top - b7.top - au.css(e, "marginTop", true),
                left: i.left - b7.left - au.css(e, "marginLeft", true)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || R;
                while (e && (!au.nodeName(e, "html") && au.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e || R
            })
        }
    });
    au.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var b6 = /Y/.test(i);
        au.fn[e] = function(b7) {
            return d(this, function(b8, b9, ca) {
                var cb = ag(b8);
                if (ca === undefined) {
                    return cb ? (i in cb) ? cb[i] : cb.document.documentElement[b9] : b8[b9]
                }
                if (cb) {
                    cb.scrollTo(!b6 ? ca : au(cb).scrollLeft(), b6 ? ca : au(cb).scrollTop())
                } else {
                    b8[b9] = ca
                }
            }, e, b7, arguments.length, null)
        }
    });
    au.each(["top", "left"], function(e, b6) {
        au.cssHooks[b6] = g(bS.pixelPosition, function(b7, i) {
            if (i) {
                i = K(b7, b6);
                return bj.test(i) ? au(b7).position()[b6] + "px" : i
            }
        })
    });
    au.each({
        Height: "height",
        Width: "width"
    }, function(e, i) {
        au.each({
            padding: "inner" + e,
            content: i,
            "": "outer" + e
        }, function(b6, b7) {
            au.fn[b7] = function(ca, cb) {
                var b8 = arguments.length && (b6 || typeof ca !== "boolean"),
                    b9 = b6 || (ca === true || cb === true ? "margin" : "border");
                return d(this, function(cd, ce, cf) {
                    var cc;
                    if (au.isWindow(cd)) {
                        return cd.document.documentElement["client" + e]
                    }
                    if (cd.nodeType === 9) {
                        cc = cd.documentElement;
                        return Math.max(cd.body["scroll" + e], cc["scroll" + e], cd.body["offset" + e], cc["offset" + e], cc["client" + e])
                    }
                    return cf === undefined ? au.css(cd, ce, b9) : au.style(cd, ce, cf, b9)
                }, i, b8 ? ca : undefined, b8, null)
            }
        })
    });
    au.fn.size = function() {
        return this.length
    };
    au.fn.andSelf = au.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return au
        })
    }
    var b = b0.jQuery,
        a = b0.$;
    au.noConflict = function(e) {
        if (b0.$ === au) {
            b0.$ = a
        }
        if (e && b0.jQuery === au) {
            b0.jQuery = b
        }
        return au
    };
    if (typeof ay === bR) {
        b0.jQuery = b0.$ = au
    }
    return au
}));
/*
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function(h, G, C) {
    var F = {};
    h.migrateWarnings = [];
    h.migrateMute = true;
    if (!h.migrateMute && G.console && G.console.log) {
        G.console.log("JQMIGRATE: Logging is active")
    }
    if (h.migrateTrace === C) {
        h.migrateTrace = true
    }
    h.migrateReset = function() {
        F = {};
        h.migrateWarnings.length = 0
    };

    function j(I) {
        var H = G.console;
        if (!F[I]) {
            F[I] = true;
            h.migrateWarnings.push(I);
            if (H && H.warn && !h.migrateMute) {
                H.warn("JQMIGRATE: " + I);
                if (h.migrateTrace && H.trace) {
                    H.trace()
                }
            }
        }
    }

    function k(J, K, L, I) {
        if (Object.defineProperty) {
            try {
                Object.defineProperty(J, K, {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        j(I);
                        return L
                    },
                    set: function(M) {
                        j(I);
                        L = M
                    }
                });
                return
            } catch (H) {}
        }
        h._definePropertyBroken = true;
        J[K] = L
    }
    if (document.compatMode === "BackCompat") {
        j("jQuery is not compatible with Quirks Mode")
    }
    var b = h("<input/>", {
            size: 1
        }).attr("size") && h.attrFn,
        l = h.attr,
        D = h.attrHooks.value && h.attrHooks.value.get || function() {
            return null
        },
        E = h.attrHooks.value && h.attrHooks.value.set || function() {
            return C
        },
        y = /^(?:input|button)$/i,
        x = /^[238]$/,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        B = /^(?:checked|selected)$/i;
    k(h, "attrFn", b || {}, "jQuery.attrFn is deprecated");
    h.attr = function(H, J, M, L) {
        var I = J.toLowerCase(),
            K = H && H.nodeType;
        if (L) {
            if (l.length < 4) {
                j("jQuery.fn.attr( props, pass ) is deprecated")
            }
            if (H && !x.test(K) && (b ? J in b : h.isFunction(h.fn[J]))) {
                return h(H)[J](M)
            }
        }
        if (J === "type" && M !== C && y.test(H.nodeName) && H.parentNode) {
            j("Can't change the 'type' of an input or button in IE 6/7/8")
        }
        if (!h.attrHooks[I] && u.test(I)) {
            h.attrHooks[I] = {
                get: function(O, P) {
                    var N, Q = h.prop(O, P);
                    return Q === true || typeof Q !== "boolean" && (N = O.getAttributeNode(P)) && N.nodeValue !== false ? P.toLowerCase() : C
                },
                set: function(N, Q, O) {
                    var P;
                    if (Q === false) {
                        h.removeAttr(N, O)
                    } else {
                        P = h.propFix[O] || O;
                        if (P in N) {
                            N[P] = true
                        }
                        N.setAttribute(O, O.toLowerCase())
                    }
                    return O
                }
            };
            if (B.test(I)) {
                j("jQuery.fn.attr('" + I + "') may use property instead of attribute")
            }
        }
        return l.call(h, H, J, M)
    };
    h.attrHooks.value = {
        get: function(H, I) {
            var J = (H.nodeName || "").toLowerCase();
            if (J === "button") {
                return D.apply(this, arguments)
            }
            if (J !== "input" && J !== "option") {
                j("jQuery.fn.attr('value') no longer gets properties")
            }
            return I in H ? H.value : null
        },
        set: function(H, J) {
            var I = (H.nodeName || "").toLowerCase();
            if (I === "button") {
                return E.apply(this, arguments)
            }
            if (I !== "input" && I !== "option") {
                j("jQuery.fn.attr('value', val) no longer sets properties")
            }
            H.value = J
        }
    };
    var i, c, o = h.fn.init,
        q = h.parseJSON,
        z = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    h.fn.init = function(K, H, J) {
        var I;
        if (K && typeof K === "string" && !h.isPlainObject(H) && (I = z.exec(h.trim(K))) && I[0]) {
            if (K.charAt(0) !== "<") {
                j("$(html) HTML strings must start with '<' character")
            }
            if (I[3]) {
                j("$(html) HTML text after last tag is ignored")
            }
            if (I[0].charAt(0) === "#") {
                j("HTML string cannot start with a '#' character");
                h.error("JQMIGRATE: Invalid selector string (XSS)")
            }
            if (H && H.context) {
                H = H.context
            }
            if (h.parseHTML) {
                return o.call(this, h.parseHTML(I[2], H, true), H, J)
            }
        }
        return o.apply(this, arguments)
    };
    h.fn.init.prototype = h.fn;
    h.parseJSON = function(H) {
        if (!H && H !== null) {
            j("jQuery.parseJSON requires a valid JSON string");
            return null
        }
        return q.apply(this, arguments)
    };
    h.uaMatch = function(I) {
        I = I.toLowerCase();
        var H = /(chrome)[ \/]([\w.]+)/.exec(I) || /(webkit)[ \/]([\w.]+)/.exec(I) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(I) || /(msie) ([\w.]+)/.exec(I) || I.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(I) || [];
        return {
            browser: H[1] || "",
            version: H[2] || "0"
        }
    };
    if (!h.browser) {
        i = h.uaMatch(navigator.userAgent);
        c = {};
        if (i.browser) {
            c[i.browser] = true;
            c.version = i.version
        }
        if (c.chrome) {
            c.webkit = true
        } else {
            if (c.webkit) {
                c.safari = true
            }
        }
        h.browser = c
    }
    k(h, "browser", h.browser, "jQuery.browser is deprecated");
    h.sub = function() {
        function I(L, K) {
            return new I.fn.init(L, K)
        }
        h.extend(true, I, this);
        I.superclass = this;
        I.fn = I.prototype = this();
        I.fn.constructor = I;
        I.sub = this.sub;
        I.fn.init = function H(L, K) {
            if (K && K instanceof h && !(K instanceof I)) {
                K = I(K)
            }
            return h.fn.init.call(this, L, K, J)
        };
        I.fn.init.prototype = I.fn;
        var J = I(document);
        j("jQuery.sub() is deprecated");
        return I
    };
    h.ajaxSetup({
        converters: {
            "text json": h.parseJSON
        }
    });
    var n = h.fn.data;
    h.fn.data = function(J) {
        var K, I, H = this[0];
        if (H && J === "events" && arguments.length === 1) {
            K = h.data(H, J);
            I = h._data(H, J);
            if ((K === C || K === I) && I !== C) {
                j("Use of jQuery.fn.data('events') is deprecated");
                return I
            }
        }
        return n.apply(this, arguments)
    };
    var A = /\/(java|ecma)script/i,
        r = h.fn.andSelf || h.fn.addBack;
    h.fn.andSelf = function() {
        j("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
        return r.apply(this, arguments)
    };
    if (!h.clean) {
        h.clean = function(J, H, K, P) {
            H = H || document;
            H = !H.nodeType && H[0] || H;
            H = H.ownerDocument || H;
            j("jQuery.clean() is deprecated");
            var M, I, L, N, O = [];
            h.merge(O, h.buildFragment(J, H).childNodes);
            if (K) {
                L = function(Q) {
                    if (!Q.type || A.test(Q.type)) {
                        return P ? P.push(Q.parentNode ? Q.parentNode.removeChild(Q) : Q) : K.appendChild(Q)
                    }
                };
                for (M = 0;
                    (I = O[M]) != null; M++) {
                    if (!(h.nodeName(I, "script") && L(I))) {
                        K.appendChild(I);
                        if (typeof I.getElementsByTagName !== "undefined") {
                            N = h.grep(h.merge([], I.getElementsByTagName("script")), L);
                            O.splice.apply(O, [M + 1, 0].concat(N));
                            M += N.length
                        }
                    }
                }
            }
            return O
        }
    }
    var d = h.event.add,
        e = h.event.remove,
        f = h.event.trigger,
        s = h.fn.toggle,
        p = h.fn.live,
        m = h.fn.die,
        a = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        t = new RegExp("\\b(?:" + a + ")\\b"),
        w = /(?:^|\s)hover(\.\S+|)\b/,
        g = function(H) {
            if (typeof(H) !== "string" || h.event.special.hover) {
                return H
            }
            if (w.test(H)) {
                j("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")
            }
            return H && H.replace(w, "mouseenter$1 mouseleave$1")
        };
    if (h.event.props && h.event.props[0] !== "attrChange") {
        h.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement")
    }
    if (h.event.dispatch) {
        k(h.event, "handle", h.event.dispatch, "jQuery.event.handle is undocumented and deprecated")
    }
    h.event.add = function(I, L, J, H, K) {
        if (I !== document && t.test(L)) {
            j("AJAX events should be attached to document: " + L)
        }
        d.call(this, I, g(L || ""), J, H, K)
    };
    h.event.remove = function(H, L, I, K, J) {
        e.call(this, H, g(L) || "", I, K, J)
    };
    h.fn.error = function() {
        var H = Array.prototype.slice.call(arguments, 0);
        j("jQuery.fn.error() is deprecated");
        H.splice(0, 0, "error");
        if (arguments.length) {
            return this.bind.apply(this, H)
        }
        this.triggerHandler.apply(this, H);
        return this
    };
    h.fn.toggle = function(I, J) {
        if (!h.isFunction(I) || !h.isFunction(J)) {
            return s.apply(this, arguments)
        }
        j("jQuery.fn.toggle(handler, handler...) is deprecated");
        var H = arguments,
            K = I.guid || h.guid++,
            L = 0,
            M = function(N) {
                var O = (h._data(this, "lastToggle" + I.guid) || 0) % L;
                h._data(this, "lastToggle" + I.guid, O + 1);
                N.preventDefault();
                return H[O].apply(this, arguments) || false
            };
        M.guid = K;
        while (L < H.length) {
            H[L++].guid = K
        }
        return this.click(M)
    };
    h.fn.live = function(J, H, I) {
        j("jQuery.fn.live() is deprecated");
        if (p) {
            return p.apply(this, arguments)
        }
        h(this.context).on(J, this.selector, H, I);
        return this
    };
    h.fn.die = function(I, H) {
        j("jQuery.fn.die() is deprecated");
        if (m) {
            return m.apply(this, arguments)
        }
        h(this.context).off(I, this.selector || "**", H);
        return this
    };
    h.event.trigger = function(J, H, I, K) {
        if (!I && !t.test(J)) {
            j("Global events are undocumented and deprecated")
        }
        return f.call(this, J, H, I || document, K)
    };
    h.each(a.split("|"), function(H, I) {
        h.event.special[I] = {
            setup: function() {
                var J = this;
                if (J !== document) {
                    h.event.add(document, I + "." + h.guid, function() {
                        h.event.trigger(I, null, J, true)
                    });
                    h._data(this, I, h.guid++)
                }
                return false
            },
            teardown: function() {
                if (this !== document) {
                    h.event.remove(document, I + "." + h._data(this, I))
                }
                return false
            }
        }
    })
})(jQuery, window);
/* jQuery UI - v1.11.2 - 2014-10-29
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, draggable.js, sortable.js, datepicker.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(a) {
    /*
     * jQuery UI Core 1.11.2
     * http://jqueryui.com
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/category/ui-core/
     */
    a.ui = a.ui || {};
    a.extend(a.ui, {
        version: "1.11.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    a.fn.extend({
        scrollParent: function(w) {
            var y = this.css("position"),
                u = y === "absolute",
                x = w ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                z = this.parents().filter(function() {
                    var A = a(this);
                    if (u && A.css("position") === "static") {
                        return false
                    }
                    return x.test(A.css("overflow") + A.css("overflow-y") + A.css("overflow-x"))
                }).eq(0);
            return y === "fixed" || !z.length ? a(this[0].ownerDocument || document) : z
        },
        uniqueId: (function() {
            var u = 0;
            return function() {
                return this.each(function() {
                    if (!this.id) {
                        this.id = "ui-id-" + (++u)
                    }
                })
            }
        })(),
        removeUniqueId: function() {
            return this.each(function() {
                if (/^ui-id-\d+$/.test(this.id)) {
                    a(this).removeAttr("id")
                }
            })
        }
    });

    function k(u, x) {
        var y, z, w, A = u.nodeName.toLowerCase();
        if ("area" === A) {
            y = u.parentNode;
            z = y.name;
            if (!u.href || !z || y.nodeName.toLowerCase() !== "map") {
                return false
            }
            w = a("img[usemap='#" + z + "']")[0];
            return !!w && q(w)
        }
        return (/input|select|textarea|button|object/.test(A) ? !u.disabled : "a" === A ? u.href || x : x) && q(u)
    }

    function q(u) {
        return a.expr.filters.visible(u) && !a(u).parents().addBack().filter(function() {
            return a.css(this, "visibility") === "hidden"
        }).length
    }
    a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(u) {
            return function(w) {
                return !!a.data(w, u)
            }
        }) : function(u, w, x) {
            return !!a.data(u, x[3])
        },
        focusable: function(u) {
            return k(u, !isNaN(a.attr(u, "tabindex")))
        },
        tabbable: function(u) {
            var x = a.attr(u, "tabindex"),
                w = isNaN(x);
            return (w || x >= 0) && k(u, !w)
        }
    });
    if (!a("<a>").outerWidth(1).jquery) {
        a.each(["Width", "Height"], function(u, w) {
            var z = w === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                A = w.toLowerCase(),
                x = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };

            function y(C, E, B, D) {
                a.each(z, function() {
                    E -= parseFloat(a.css(C, "padding" + this)) || 0;
                    if (B) {
                        E -= parseFloat(a.css(C, "border" + this + "Width")) || 0
                    }
                    if (D) {
                        E -= parseFloat(a.css(C, "margin" + this)) || 0
                    }
                });
                return E
            }
            a.fn["inner" + w] = function(B) {
                if (B === undefined) {
                    return x["inner" + w].call(this)
                }
                return this.each(function() {
                    a(this).css(A, y(this, B) + "px")
                })
            };
            a.fn["outer" + w] = function(C, B) {
                if (typeof C !== "number") {
                    return x["outer" + w].call(this, C)
                }
                return this.each(function() {
                    a(this).css(A, y(this, C, true, B) + "px")
                })
            }
        })
    }
    if (!a.fn.addBack) {
        a.fn.addBack = function(u) {
            return this.add(u == null ? this.prevObject : this.prevObject.filter(u))
        }
    }
    if (a("<a>").data("a-b", "a").removeData("a-b").data("a-b")) {
        a.fn.removeData = (function(u) {
            return function(w) {
                if (arguments.length) {
                    return u.call(this, a.camelCase(w))
                } else {
                    return u.call(this)
                }
            }
        })(a.fn.removeData)
    }
    a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    a.fn.extend({
        focus: (function(u) {
            return function(w, x) {
                return typeof w === "number" ? this.each(function() {
                    var y = this;
                    setTimeout(function() {
                        a(y).focus();
                        if (x) {
                            x.call(y)
                        }
                    }, w)
                }) : u.apply(this, arguments)
            }
        })(a.fn.focus),
        disableSelection: (function() {
            var u = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(u + ".ui-disableSelection", function(w) {
                    w.preventDefault()
                })
            }
        })(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(y) {
            if (y !== undefined) {
                return this.css("zIndex", y)
            }
            if (this.length) {
                var u = a(this[0]),
                    w, x;
                while (u.length && u[0] !== document) {
                    w = u.css("position");
                    if (w === "absolute" || w === "relative" || w === "fixed") {
                        x = parseInt(u.css("zIndex"), 10);
                        if (!isNaN(x) && x !== 0) {
                            return x
                        }
                    }
                    u = u.parent()
                }
            }
            return 0
        }
    });
    a.ui.plugin = {
        add: function(w, x, z) {
            var u, y = a.ui[w].prototype;
            for (u in z) {
                y.plugins[u] = y.plugins[u] || [];
                y.plugins[u].push([x, z[u]])
            }
        },
        call: function(y, z, w, u) {
            var x, A = y.plugins[z];
            if (!A) {
                return
            }
            if (!u && (!y.element[0].parentNode || y.element[0].parentNode.nodeType === 11)) {
                return
            }
            for (x = 0; x < A.length; x++) {
                if (y.options[A[x][0]]) {
                    A[x][1].apply(y.element, w)
                }
            }
        }
    };
    /*
     * jQuery UI Widget 1.11.2
     * http://jqueryui.com
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/jQuery.widget/
     */
    var t = 0,
        s = Array.prototype.slice;
    a.cleanData = (function(u) {
        return function(y) {
            var z, x, A;
            for (A = 0;
                (x = y[A]) != null; A++) {
                try {
                    z = a._data(x, "events");
                    if (z && z.remove) {
                        a(x).triggerHandler("remove")
                    }
                } catch (w) {}
            }
            u(y)
        }
    })(a.cleanData);
    a.widget = function(A, u, C) {
        var z, y, x, w, D = {},
            B = A.split(".")[0];
        A = A.split(".")[1];
        z = B + "-" + A;
        if (!C) {
            C = u;
            u = a.Widget
        }
        a.expr[":"][z.toLowerCase()] = function(E) {
            return !!a.data(E, z)
        };
        a[B] = a[B] || {};
        y = a[B][A];
        x = a[B][A] = function(F, E) {
            if (!this._createWidget) {
                return new x(F, E)
            }
            if (arguments.length) {
                this._createWidget(F, E)
            }
        };
        a.extend(x, y, {
            version: C.version,
            _proto: a.extend({}, C),
            _childConstructors: []
        });
        w = new u();
        w.options = a.widget.extend({}, w.options);
        a.each(C, function(E, F) {
            if (!a.isFunction(F)) {
                D[E] = F;
                return
            }
            D[E] = (function() {
                var G = function() {
                        return u.prototype[E].apply(this, arguments)
                    },
                    H = function(I) {
                        return u.prototype[E].apply(this, I)
                    };
                return function() {
                    var I = this._super,
                        J = this._superApply,
                        K;
                    this._super = G;
                    this._superApply = H;
                    K = F.apply(this, arguments);
                    this._super = I;
                    this._superApply = J;
                    return K
                }
            })()
        });
        x.prototype = a.widget.extend(w, {
            widgetEventPrefix: y ? (w.widgetEventPrefix || A) : A
        }, D, {
            constructor: x,
            namespace: B,
            widgetName: A,
            widgetFullName: z
        });
        if (y) {
            a.each(y._childConstructors, function(G, E) {
                var F = E.prototype;
                a.widget(F.namespace + "." + F.widgetName, x, E._proto)
            });
            delete y._childConstructors
        } else {
            u._childConstructors.push(x)
        }
        a.widget.bridge(A, x);
        return x
    };
    a.widget.extend = function(z) {
        var u = s.call(arguments, 1),
            w = 0,
            x = u.length,
            y, A;
        for (; w < x; w++) {
            for (y in u[w]) {
                A = u[w][y];
                if (u[w].hasOwnProperty(y) && A !== undefined) {
                    if (a.isPlainObject(A)) {
                        z[y] = a.isPlainObject(z[y]) ? a.widget.extend({}, z[y], A) : a.widget.extend({}, A)
                    } else {
                        z[y] = A
                    }
                }
            }
        }
        return z
    };
    a.widget.bridge = function(w, x) {
        var u = x.prototype.widgetFullName || w;
        a.fn[w] = function(A) {
            var z = typeof A === "string",
                y = s.call(arguments, 1),
                B = this;
            A = !z && y.length ? a.widget.extend.apply(null, [A].concat(y)) : A;
            if (z) {
                this.each(function() {
                    var D, C = a.data(this, u);
                    if (A === "instance") {
                        B = C;
                        return false
                    }
                    if (!C) {
                        return a.error("cannot call methods on " + w + " prior to initialization; attempted to call method '" + A + "'")
                    }
                    if (!a.isFunction(C[A]) || A.charAt(0) === "_") {
                        return a.error("no such method '" + A + "' for " + w + " widget instance")
                    }
                    D = C[A].apply(C, y);
                    if (D !== C && D !== undefined) {
                        B = D && D.jquery ? B.pushStack(D.get()) : D;
                        return false
                    }
                })
            } else {
                this.each(function() {
                    var C = a.data(this, u);
                    if (C) {
                        C.option(A || {});
                        if (C._init) {
                            C._init()
                        }
                    } else {
                        a.data(this, u, new x(A, this))
                    }
                })
            }
            return B
        }
    };
    a.Widget = function() {};
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: false,
            create: null
        },
        _createWidget: function(w, u) {
            u = a(u || this.defaultElement || this)[0];
            this.element = a(u);
            this.uuid = t++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            if (u !== this) {
                a.data(u, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(x) {
                        if (x.target === u) {
                            this.destroy()
                        }
                    }
                });
                this.document = a(u.style ? u.ownerDocument : u.document || u);
                this.window = a(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), w);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(x, A) {
            var y = x,
                z, u, w;
            if (arguments.length === 0) {
                return a.widget.extend({}, this.options)
            }
            if (typeof x === "string") {
                y = {};
                z = x.split(".");
                x = z.shift();
                if (z.length) {
                    u = y[x] = a.widget.extend({}, this.options[x]);
                    for (w = 0; w < z.length - 1; w++) {
                        u[z[w]] = u[z[w]] || {};
                        u = u[z[w]]
                    }
                    x = z.pop();
                    if (arguments.length === 1) {
                        return u[x] === undefined ? null : u[x]
                    }
                    u[x] = A
                } else {
                    if (arguments.length === 1) {
                        return this.options[x] === undefined ? null : this.options[x]
                    }
                    y[x] = A
                }
            }
            this._setOptions(y);
            return this
        },
        _setOptions: function(w) {
            var u;
            for (u in w) {
                this._setOption(u, w[u])
            }
            return this
        },
        _setOption: function(u, w) {
            this.options[u] = w;
            if (u === "disabled") {
                this.widget().toggleClass(this.widgetFullName + "-disabled", !!w);
                if (w) {
                    this.hoverable.removeClass("ui-state-hover");
                    this.focusable.removeClass("ui-state-focus")
                }
            }
            return this
        },
        enable: function() {
            return this._setOptions({
                disabled: false
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: true
            })
        },
        _on: function(z, w, x) {
            var u, y = this;
            if (typeof z !== "boolean") {
                x = w;
                w = z;
                z = false
            }
            if (!x) {
                x = w;
                w = this.element;
                u = this.widget()
            } else {
                w = u = a(w);
                this.bindings = this.bindings.add(w)
            }
            a.each(x, function(A, C) {
                function D() {
                    if (!z && (y.options.disabled === true || a(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof C === "string" ? y[C] : C).apply(y, arguments)
                }
                if (typeof C !== "string") {
                    D.guid = C.guid = C.guid || D.guid || a.guid++
                }
                var E = A.match(/^([\w:-]*)\s*(.*)$/),
                    B = E[1] + y.eventNamespace,
                    F = E[2];
                if (F) {
                    u.delegate(F, B, D)
                } else {
                    w.bind(B, D)
                }
            })
        },
        _off: function(u, w) {
            w = (w || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            u.unbind(w).undelegate(w);
            this.bindings = a(this.bindings.not(u).get());
            this.focusable = a(this.focusable.not(u).get());
            this.hoverable = a(this.hoverable.not(u).get())
        },
        _delay: function(w, u) {
            function x() {
                return (typeof w === "string" ? y[w] : w).apply(y, arguments)
            }
            var y = this;
            return setTimeout(x, u || 0)
        },
        _hoverable: function(u) {
            this.hoverable = this.hoverable.add(u);
            this._on(u, {
                mouseenter: function(w) {
                    a(w.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(w) {
                    a(w.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(u) {
            this.focusable = this.focusable.add(u);
            this._on(u, {
                focusin: function(w) {
                    a(w.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(w) {
                    a(w.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(A, x, w) {
            var z, y, u = this.options[A];
            w = w || {};
            x = a.Event(x);
            x.type = (A === this.widgetEventPrefix ? A : this.widgetEventPrefix + A).toLowerCase();
            x.target = this.element[0];
            y = x.originalEvent;
            if (y) {
                for (z in y) {
                    if (!(z in x)) {
                        x[z] = y[z]
                    }
                }
            }
            this.element.trigger(x, w);
            return !(a.isFunction(u) && u.apply(this.element[0], [x].concat(w)) === false || x.isDefaultPrevented())
        }
    };
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(w, u) {
        a.Widget.prototype["_" + w] = function(z, B, x) {
            if (typeof B === "string") {
                B = {
                    effect: B
                }
            }
            var A, y = !B ? w : B === true || typeof B === "number" ? u : B.effect || u;
            B = B || {};
            if (typeof B === "number") {
                B = {
                    duration: B
                }
            }
            A = !a.isEmptyObject(B);
            B.complete = x;
            if (B.delay) {
                z.delay(B.delay)
            }
            if (A && a.effects && a.effects.effect[y]) {
                z[w](B)
            } else {
                if (y !== w && z[y]) {
                    z[y](B.duration, B.easing, x)
                } else {
                    z.queue(function(C) {
                        a(this)[w]();
                        if (x) {
                            x.call(z[0])
                        }
                        C()
                    })
                }
            }
        }
    });
    var r = a.widget;
    /*
     * jQuery UI Position 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */
    (function() {
        a.ui = a.ui || {};
        var x, I, A = Math.max,
            w = Math.abs,
            E = Math.round,
            C = /left|center|right/,
            H = /top|center|bottom/,
            D = /[\+\-]\d+(\.[\d]+)?%?/,
            G = /^\w+/,
            F = /%$/,
            u = a.fn.position;

        function z(K, L, J) {
            return [parseFloat(K[0]) * (F.test(K[0]) ? L / 100 : 1), parseFloat(K[1]) * (F.test(K[1]) ? J / 100 : 1)]
        }

        function B(J, K) {
            return parseInt(a.css(J, K), 10) || 0
        }

        function y(J) {
            var K = J[0];
            if (K.nodeType === 9) {
                return {
                    width: J.width(),
                    height: J.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                }
            }
            if (a.isWindow(K)) {
                return {
                    width: J.width(),
                    height: J.height(),
                    offset: {
                        top: J.scrollTop(),
                        left: J.scrollLeft()
                    }
                }
            }
            if (K.preventDefault) {
                return {
                    width: 0,
                    height: 0,
                    offset: {
                        top: K.pageY,
                        left: K.pageX
                    }
                }
            }
            return {
                width: J.outerWidth(),
                height: J.outerHeight(),
                offset: J.offset()
            }
        }
        a.position = {
            scrollbarWidth: function() {
                if (x !== undefined) {
                    return x
                }
                var L, M, J = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    K = J.children()[0];
                a("body").append(J);
                L = K.offsetWidth;
                J.css("overflow", "scroll");
                M = K.offsetWidth;
                if (L === M) {
                    M = J[0].clientWidth
                }
                J.remove();
                return (x = L - M)
            },
            getScrollInfo: function(N) {
                var L = N.isWindow || N.isDocument ? "" : N.element.css("overflow-x"),
                    M = N.isWindow || N.isDocument ? "" : N.element.css("overflow-y"),
                    J = L === "scroll" || (L === "auto" && N.width < N.element[0].scrollWidth),
                    K = M === "scroll" || (M === "auto" && N.height < N.element[0].scrollHeight);
                return {
                    width: K ? a.position.scrollbarWidth() : 0,
                    height: J ? a.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(J) {
                var M = a(J || window),
                    L = a.isWindow(M[0]),
                    K = !!M[0] && M[0].nodeType === 9;
                return {
                    element: M,
                    isWindow: L,
                    isDocument: K,
                    offset: M.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: M.scrollLeft(),
                    scrollTop: M.scrollTop(),
                    width: L || K ? M.width() : M.outerWidth(),
                    height: L || K ? M.height() : M.outerHeight()
                }
            }
        };
        a.fn.position = function(O) {
            if (!O || !O.of) {
                return u.apply(this, arguments)
            }
            O = a.extend({}, O);
            var J, T, R, S, K, M, Q = a(O.of),
                U = a.position.getWithinInfo(O.within),
                P = a.position.getScrollInfo(U),
                L = (O.collision || "flip").split(" "),
                N = {};
            M = y(Q);
            if (Q[0].preventDefault) {
                O.at = "left top"
            }
            T = M.width;
            R = M.height;
            S = M.offset;
            K = a.extend({}, S);
            a.each(["my", "at"], function() {
                var W = (O[this] || "").split(" "),
                    V, X;
                if (W.length === 1) {
                    W = C.test(W[0]) ? W.concat(["center"]) : H.test(W[0]) ? ["center"].concat(W) : ["center", "center"]
                }
                W[0] = C.test(W[0]) ? W[0] : "center";
                W[1] = H.test(W[1]) ? W[1] : "center";
                V = D.exec(W[0]);
                X = D.exec(W[1]);
                N[this] = [V ? V[0] : 0, X ? X[0] : 0];
                O[this] = [G.exec(W[0])[0], G.exec(W[1])[0]]
            });
            if (L.length === 1) {
                L[1] = L[0]
            }
            if (O.at[0] === "right") {
                K.left += T
            } else {
                if (O.at[0] === "center") {
                    K.left += T / 2
                }
            }
            if (O.at[1] === "bottom") {
                K.top += R
            } else {
                if (O.at[1] === "center") {
                    K.top += R / 2
                }
            }
            J = z(N.at, T, R);
            K.left += J[0];
            K.top += J[1];
            return this.each(function() {
                var W, af, Y = a(this),
                    aa = Y.outerWidth(),
                    Z = Y.outerHeight(),
                    ab = B(this, "marginLeft"),
                    ac = B(this, "marginTop"),
                    X = aa + ab + B(this, "marginRight") + P.width,
                    V = Z + ac + B(this, "marginBottom") + P.height,
                    ae = a.extend({}, K),
                    ad = z(N.my, Y.outerWidth(), Y.outerHeight());
                if (O.my[0] === "right") {
                    ae.left -= aa
                } else {
                    if (O.my[0] === "center") {
                        ae.left -= aa / 2
                    }
                }
                if (O.my[1] === "bottom") {
                    ae.top -= Z
                } else {
                    if (O.my[1] === "center") {
                        ae.top -= Z / 2
                    }
                }
                ae.left += ad[0];
                ae.top += ad[1];
                if (!I) {
                    ae.left = E(ae.left);
                    ae.top = E(ae.top)
                }
                W = {
                    marginLeft: ab,
                    marginTop: ac
                };
                a.each(["left", "top"], function(ah, ag) {
                    if (a.ui.position[L[ah]]) {
                        a.ui.position[L[ah]][ag](ae, {
                            targetWidth: T,
                            targetHeight: R,
                            elemWidth: aa,
                            elemHeight: Z,
                            collisionPosition: W,
                            collisionWidth: X,
                            collisionHeight: V,
                            offset: [J[0] + ad[0], J[1] + ad[1]],
                            my: O.my,
                            at: O.at,
                            within: U,
                            elem: Y
                        })
                    }
                });
                if (O.using) {
                    af = function(aj) {
                        var ai = S.left - ae.left,
                            ak = ai + T - aa,
                            al = S.top - ae.top,
                            ag = al + R - Z,
                            ah = {
                                target: {
                                    element: Q,
                                    left: S.left,
                                    top: S.top,
                                    width: T,
                                    height: R
                                },
                                element: {
                                    element: Y,
                                    left: ae.left,
                                    top: ae.top,
                                    width: aa,
                                    height: Z
                                },
                                horizontal: ak < 0 ? "left" : ai > 0 ? "right" : "center",
                                vertical: ag < 0 ? "top" : al > 0 ? "bottom" : "middle"
                            };
                        if (T < aa && w(ai + ak) < T) {
                            ah.horizontal = "center"
                        }
                        if (R < Z && w(al + ag) < R) {
                            ah.vertical = "middle"
                        }
                        if (A(w(ai), w(ak)) > A(w(al), w(ag))) {
                            ah.important = "horizontal"
                        } else {
                            ah.important = "vertical"
                        }
                        O.using.call(this, aj, ah)
                    }
                }
                Y.offset(a.extend(ae, {
                    using: af
                }))
            })
        };
        a.ui.position = {
            fit: {
                left: function(P, K) {
                    var Q = K.within,
                        R = Q.isWindow ? Q.scrollLeft : Q.offset.left,
                        M = Q.width,
                        J = P.left - K.collisionPosition.marginLeft,
                        N = R - J,
                        O = J + K.collisionWidth - M - R,
                        L;
                    if (K.collisionWidth > M) {
                        if (N > 0 && O <= 0) {
                            L = P.left + N + K.collisionWidth - M - R;
                            P.left += N - L
                        } else {
                            if (O > 0 && N <= 0) {
                                P.left = R
                            } else {
                                if (N > O) {
                                    P.left = R + M - K.collisionWidth
                                } else {
                                    P.left = R
                                }
                            }
                        }
                    } else {
                        if (N > 0) {
                            P.left += N
                        } else {
                            if (O > 0) {
                                P.left -= O
                            } else {
                                P.left = A(P.left - J, P.left)
                            }
                        }
                    }
                },
                top: function(P, K) {
                    var Q = K.within,
                        R = Q.isWindow ? Q.scrollTop : Q.offset.top,
                        M = K.within.height,
                        J = P.top - K.collisionPosition.marginTop,
                        O = R - J,
                        N = J + K.collisionHeight - M - R,
                        L;
                    if (K.collisionHeight > M) {
                        if (O > 0 && N <= 0) {
                            L = P.top + O + K.collisionHeight - M - R;
                            P.top += O - L
                        } else {
                            if (N > 0 && O <= 0) {
                                P.top = R
                            } else {
                                if (O > N) {
                                    P.top = R + M - K.collisionHeight
                                } else {
                                    P.top = R
                                }
                            }
                        }
                    } else {
                        if (O > 0) {
                            P.top += O
                        } else {
                            if (N > 0) {
                                P.top -= N
                            } else {
                                P.top = A(P.top - J, P.top)
                            }
                        }
                    }
                }
            },
            flip: {
                left: function(U, L) {
                    var V = L.within,
                        W = V.offset.left + V.scrollLeft,
                        R = V.width,
                        Q = V.isWindow ? V.scrollLeft : V.offset.left,
                        K = U.left - L.collisionPosition.marginLeft,
                        S = K - Q,
                        T = K + L.collisionWidth - R - Q,
                        M = L.my[0] === "left" ? -L.elemWidth : L.my[0] === "right" ? L.elemWidth : 0,
                        J = L.at[0] === "left" ? L.targetWidth : L.at[0] === "right" ? -L.targetWidth : 0,
                        P = -2 * L.offset[0],
                        O, N;
                    if (S < 0) {
                        O = U.left + M + J + P + L.collisionWidth - R - W;
                        if (O < 0 || O < w(S)) {
                            U.left += M + J + P
                        }
                    } else {
                        if (T > 0) {
                            N = U.left - L.collisionPosition.marginLeft + M + J + P - Q;
                            if (N > 0 || w(N) < T) {
                                U.left += M + J + P
                            }
                        }
                    }
                },
                top: function(U, L) {
                    var W = L.within,
                        X = W.offset.top + W.scrollTop,
                        R = W.height,
                        Q = W.isWindow ? W.scrollTop : W.offset.top,
                        K = U.top - L.collisionPosition.marginTop,
                        T = K - Q,
                        S = K + L.collisionHeight - R - Q,
                        V = L.my[1] === "top",
                        M = V ? -L.elemHeight : L.my[1] === "bottom" ? L.elemHeight : 0,
                        J = L.at[1] === "top" ? L.targetHeight : L.at[1] === "bottom" ? -L.targetHeight : 0,
                        P = -2 * L.offset[1],
                        O, N;
                    if (T < 0) {
                        N = U.top + M + J + P + L.collisionHeight - R - X;
                        if (N < 0 || N < w(T)) {
                            U.top += M + J + P
                        }
                    } else {
                        if (S > 0) {
                            O = U.top - L.collisionPosition.marginTop + M + J + P - Q;
                            if (O > 0 || w(O) < S) {
                                U.top += M + J + P
                            }
                        }
                    }
                }
            },
            flipfit: {
                left: function() {
                    a.ui.position.flip.left.apply(this, arguments);
                    a.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    a.ui.position.flip.top.apply(this, arguments);
                    a.ui.position.fit.top.apply(this, arguments)
                }
            }
        };
        (function() {
            var N, O, P, M, L, J = document.getElementsByTagName("body")[0],
                K = document.createElement("div");
            N = document.createElement(J ? "div" : "body");
            P = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            if (J) {
                a.extend(P, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                })
            }
            for (L in P) {
                N.style[L] = P[L]
            }
            N.appendChild(K);
            O = J || document.documentElement;
            O.insertBefore(N, O.firstChild);
            K.style.cssText = "position: absolute; left: 10.7432222px;";
            M = a(K).offset().left;
            I = M > 10 && M < 11;
            N.innerHTML = "";
            O.removeChild(N)
        })()
    })();
    var o = a.ui.position;
    /*
     * jQuery UI Menu 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/menu/
     */
    var l = a.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = false;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            });
            if (this.options.disabled) {
                this.element.addClass("ui-state-disabled").attr("aria-disabled", "true")
            }
            this._on({
                "mousedown .ui-menu-item": function(u) {
                    u.preventDefault()
                },
                "click .ui-menu-item": function(u) {
                    var w = a(u.target);
                    if (!this.mouseHandled && w.not(".ui-state-disabled").length) {
                        this.select(u);
                        if (!u.isPropagationStopped()) {
                            this.mouseHandled = true
                        }
                        if (w.has(".ui-menu").length) {
                            this.expand(u)
                        } else {
                            if (!this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length) {
                                this.element.trigger("focus", [true]);
                                if (this.active && this.active.parents(".ui-menu").length === 1) {
                                    clearTimeout(this.timer)
                                }
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function(u) {
                    if (this.previousFilter) {
                        return
                    }
                    var w = a(u.currentTarget);
                    w.siblings(".ui-state-active").removeClass("ui-state-active");
                    this.focus(u, w)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(u, x) {
                    var w = this.active || this.element.find(this.options.items).eq(0);
                    if (!x) {
                        this.focus(u, w)
                    }
                },
                blur: function(u) {
                    this._delay(function() {
                        if (!a.contains(this.element[0], this.document[0].activeElement)) {
                            this.collapseAll(u)
                        }
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(u) {
                    if (this._closeOnDocumentClick(u)) {
                        this.collapseAll(u)
                    }
                    this.mouseHandled = false
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var u = a(this);
                if (u.data("ui-menu-submenu-carat")) {
                    u.remove()
                }
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(w) {
            var x, y, u, A, z = true;
            switch (w.keyCode) {
                case a.ui.keyCode.PAGE_UP:
                    this.previousPage(w);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    this.nextPage(w);
                    break;
                case a.ui.keyCode.HOME:
                    this._move("first", "first", w);
                    break;
                case a.ui.keyCode.END:
                    this._move("last", "last", w);
                    break;
                case a.ui.keyCode.UP:
                    this.previous(w);
                    break;
                case a.ui.keyCode.DOWN:
                    this.next(w);
                    break;
                case a.ui.keyCode.LEFT:
                    this.collapse(w);
                    break;
                case a.ui.keyCode.RIGHT:
                    if (this.active && !this.active.is(".ui-state-disabled")) {
                        this.expand(w)
                    }
                    break;
                case a.ui.keyCode.ENTER:
                case a.ui.keyCode.SPACE:
                    this._activate(w);
                    break;
                case a.ui.keyCode.ESCAPE:
                    this.collapse(w);
                    break;
                default:
                    z = false;
                    y = this.previousFilter || "";
                    u = String.fromCharCode(w.keyCode);
                    A = false;
                    clearTimeout(this.filterTimer);
                    if (u === y) {
                        A = true
                    } else {
                        u = y + u
                    }
                    x = this._filterMenuItems(u);
                    x = A && x.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : x;
                    if (!x.length) {
                        u = String.fromCharCode(w.keyCode);
                        x = this._filterMenuItems(u)
                    }
                    if (x.length) {
                        this.focus(w, x);
                        this.previousFilter = u;
                        this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1000)
                    } else {
                        delete this.previousFilter
                    }
            }
            if (z) {
                w.preventDefault()
            }
        },
        _activate: function(u) {
            if (!this.active.is(".ui-state-disabled")) {
                if (this.active.is("[aria-haspopup='true']")) {
                    this.expand(u)
                } else {
                    this.select(u)
                }
            }
        },
        refresh: function() {
            var x, w, z = this,
                u = this.options.icons.submenu,
                y = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
            y.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var B = a(this),
                    A = B.parent(),
                    C = a("<span>").addClass("ui-menu-icon ui-icon " + u).data("ui-menu-submenu-carat", true);
                A.attr("aria-haspopup", "true").prepend(C);
                B.attr("aria-labelledby", A.attr("id"))
            });
            x = y.add(this.element);
            w = x.find(this.options.items);
            w.not(".ui-menu-item").each(function() {
                var A = a(this);
                if (z._isDivider(A)) {
                    A.addClass("ui-widget-content ui-menu-divider")
                }
            });
            w.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            w.filter(".ui-state-disabled").attr("aria-disabled", "true");
            if (this.active && !a.contains(this.element[0], this.active[0])) {
                this.blur()
            }
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(u, w) {
            if (u === "icons") {
                this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(w.submenu)
            }
            if (u === "disabled") {
                this.element.toggleClass("ui-state-disabled", !!w).attr("aria-disabled", w)
            }
            this._super(u, w)
        },
        focus: function(u, x) {
            var y, w;
            this.blur(u, u && u.type === "focus");
            this._scrollIntoView(x);
            this.active = x.first();
            w = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
            if (this.options.role) {
                this.element.attr("aria-activedescendant", w.attr("id"))
            }
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
            if (u && u.type === "keydown") {
                this._close()
            } else {
                this.timer = this._delay(function() {
                    this._close()
                }, this.delay)
            }
            y = x.children(".ui-menu");
            if (y.length && u && (/^mouse/.test(u.type))) {
                this._startOpening(y)
            }
            this.activeMenu = x.parent();
            this._trigger("focus", u, {
                item: x
            })
        },
        _scrollIntoView: function(x) {
            var u, A, z, B, w, y;
            if (this._hasScroll()) {
                u = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0;
                A = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0;
                z = x.offset().top - this.activeMenu.offset().top - u - A;
                B = this.activeMenu.scrollTop();
                w = this.activeMenu.height();
                y = x.outerHeight();
                if (z < 0) {
                    this.activeMenu.scrollTop(B + z)
                } else {
                    if (z + y > w) {
                        this.activeMenu.scrollTop(B + z - w + y)
                    }
                }
            }
        },
        blur: function(u, w) {
            if (!w) {
                clearTimeout(this.timer)
            }
            if (!this.active) {
                return
            }
            this.active.removeClass("ui-state-focus");
            this.active = null;
            this._trigger("blur", u, {
                item: this.active
            })
        },
        _startOpening: function(u) {
            clearTimeout(this.timer);
            if (u.attr("aria-hidden") !== "true") {
                return
            }
            this.timer = this._delay(function() {
                this._close();
                this._open(u)
            }, this.delay)
        },
        _open: function(w) {
            var u = a.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(w.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            w.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(u)
        },
        collapseAll: function(w, u) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var x = u ? this.element : a(w && w.target).closest(this.element.find(".ui-menu"));
                if (!x.length) {
                    x = this.element
                }
                this._close(x);
                this.blur(w);
                this.activeMenu = x
            }, this.delay)
        },
        _close: function(u) {
            if (!u) {
                u = this.active ? this.active.parent() : this.element
            }
            u.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(u) {
            return !a(u.target).closest(".ui-menu").length
        },
        _isDivider: function(u) {
            return !/[^\-\u2014\u2013\s]/.test(u.text())
        },
        collapse: function(u) {
            var w = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            if (w && w.length) {
                this._close();
                this.focus(u, w)
            }
        },
        expand: function(u) {
            var w = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            if (w && w.length) {
                this._open(w.parent());
                this._delay(function() {
                    this.focus(u, w)
                })
            }
        },
        next: function(u) {
            this._move("next", "first", u)
        },
        previous: function(u) {
            this._move("prev", "last", u)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(u, x, w) {
            var y;
            if (this.active) {
                if (u === "first" || u === "last") {
                    y = this.active[u === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
                } else {
                    y = this.active[u + "All"](".ui-menu-item").eq(0)
                }
            }
            if (!y || !y.length || !this.active) {
                y = this.activeMenu.find(this.options.items)[x]()
            }
            this.focus(w, y)
        },
        nextPage: function(w) {
            var y, u, x;
            if (!this.active) {
                this.next(w);
                return
            }
            if (this.isLastItem()) {
                return
            }
            if (this._hasScroll()) {
                u = this.active.offset().top;
                x = this.element.height();
                this.active.nextAll(".ui-menu-item").each(function() {
                    y = a(this);
                    return y.offset().top - u - x < 0
                });
                this.focus(w, y)
            } else {
                this.focus(w, this.activeMenu.find(this.options.items)[!this.active ? "first" : "last"]())
            }
        },
        previousPage: function(w) {
            var y, u, x;
            if (!this.active) {
                this.next(w);
                return
            }
            if (this.isFirstItem()) {
                return
            }
            if (this._hasScroll()) {
                u = this.active.offset().top;
                x = this.element.height();
                this.active.prevAll(".ui-menu-item").each(function() {
                    y = a(this);
                    return y.offset().top - u + x > 0
                });
                this.focus(w, y)
            } else {
                this.focus(w, this.activeMenu.find(this.options.items).first())
            }
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(u) {
            this.active = this.active || a(u.target).closest(".ui-menu-item");
            var w = {
                item: this.active
            };
            if (!this.active.has(".ui-menu").length) {
                this.collapseAll(u, true)
            }
            this._trigger("select", u, w)
        },
        _filterMenuItems: function(u) {
            var w = u.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                x = new RegExp("^" + w, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return x.test(a.trim(a(this).text()))
            })
        }
    });
    /*
     * jQuery UI Autocomplete 1.11.4
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/autocomplete/
     */
    a.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var z, A, y, x = this.element[0].nodeName.toLowerCase(),
                w = x === "textarea",
                u = x === "input";
            this.isMultiLine = w ? true : u ? false : this.element.prop("isContentEditable");
            this.valueMethod = this.element[w || u ? "val" : "text"];
            this.isNewMenu = true;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(B) {
                    if (this.element.prop("readOnly")) {
                        z = true;
                        y = true;
                        A = true;
                        return
                    }
                    z = false;
                    y = false;
                    A = false;
                    var C = a.ui.keyCode;
                    switch (B.keyCode) {
                        case C.PAGE_UP:
                            z = true;
                            this._move("previousPage", B);
                            break;
                        case C.PAGE_DOWN:
                            z = true;
                            this._move("nextPage", B);
                            break;
                        case C.UP:
                            z = true;
                            this._keyEvent("previous", B);
                            break;
                        case C.DOWN:
                            z = true;
                            this._keyEvent("next", B);
                            break;
                        case C.ENTER:
                            if (this.menu.active) {
                                z = true;
                                B.preventDefault();
                                this.menu.select(B)
                            }
                            break;
                        case C.TAB:
                            if (this.menu.active) {
                                this.menu.select(B)
                            }
                            break;
                        case C.ESCAPE:
                            if (this.menu.element.is(":visible")) {
                                if (!this.isMultiLine) {
                                    this._value(this.term)
                                }
                                this.close(B);
                                B.preventDefault()
                            }
                            break;
                        default:
                            A = true;
                            this._searchTimeout(B);
                            break
                    }
                },
                keypress: function(B) {
                    if (z) {
                        z = false;
                        if (!this.isMultiLine || this.menu.element.is(":visible")) {
                            B.preventDefault()
                        }
                        return
                    }
                    if (A) {
                        return
                    }
                    var C = a.ui.keyCode;
                    switch (B.keyCode) {
                        case C.PAGE_UP:
                            this._move("previousPage", B);
                            break;
                        case C.PAGE_DOWN:
                            this._move("nextPage", B);
                            break;
                        case C.UP:
                            this._keyEvent("previous", B);
                            break;
                        case C.DOWN:
                            this._keyEvent("next", B);
                            break
                    }
                },
                input: function(B) {
                    if (y) {
                        y = false;
                        B.preventDefault();
                        return
                    }
                    this._searchTimeout(B)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(B) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching);
                    this.close(B);
                    this._change(B)
                }
            });
            this._initSource();
            this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._on(this.menu.element, {
                mousedown: function(B) {
                    B.preventDefault();
                    this.cancelBlur = true;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var C = this.menu.element[0];
                    if (!a(B.target).closest(".ui-menu-item").length) {
                        this._delay(function() {
                            var D = this;
                            this.document.one("mousedown", function(E) {
                                if (E.target !== D.element[0] && E.target !== C && !a.contains(C, E.target)) {
                                    D.close()
                                }
                            })
                        })
                    }
                },
                menufocus: function(B, E) {
                    var D, C;
                    if (this.isNewMenu) {
                        this.isNewMenu = false;
                        if (B.originalEvent && /^mouse/.test(B.originalEvent.type)) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                a(B.target).trigger(B.originalEvent)
                            });
                            return
                        }
                    }
                    C = E.item.data("ui-autocomplete-item");
                    if (false !== this._trigger("focus", B, {
                            item: C
                        })) {
                        if (B.originalEvent && /^key/.test(B.originalEvent.type)) {
                            this._value(C.value)
                        }
                    }
                    D = E.item.attr("aria-label") || C.value;
                    if (D && a.trim(D).length) {
                        this.liveRegion.children().hide();
                        a("<div>").text(D).appendTo(this.liveRegion)
                    }
                },
                menuselect: function(B, E) {
                    var C = E.item.data("ui-autocomplete-item"),
                        D = this.previous;
                    if (this.element[0] !== this.document[0].activeElement) {
                        this.element.focus();
                        this.previous = D;
                        this._delay(function() {
                            this.previous = D;
                            this.selectedItem = C
                        })
                    }
                    if (false !== this._trigger("select", B, {
                            item: C
                        })) {
                        this._value(C.value)
                    }
                    this.term = this._value();
                    this.close(B);
                    this.selectedItem = C
                }
            });
            this.liveRegion = a("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(u, w) {
            this._super(u, w);
            if (u === "source") {
                this._initSource()
            }
            if (u === "appendTo") {
                this.menu.element.appendTo(this._appendTo())
            }
            if (u === "disabled" && w && this.xhr) {
                this.xhr.abort()
            }
        },
        _appendTo: function() {
            var u = this.options.appendTo;
            if (u) {
                u = u.jquery || u.nodeType ? a(u) : this.document.find(u).eq(0)
            }
            if (!u || !u[0]) {
                u = this.element.closest(".ui-front")
            }
            if (!u.length) {
                u = this.document[0].body
            }
            return u
        },
        _initSource: function() {
            var u, x, w = this;
            if (a.isArray(this.options.source)) {
                u = this.options.source;
                this.source = function(y, z) {
                    z(a.ui.autocomplete.filter(u, y.term))
                }
            } else {
                if (typeof this.options.source === "string") {
                    x = this.options.source;
                    this.source = function(y, z) {
                        if (w.xhr) {
                            w.xhr.abort()
                        }
                        w.xhr = a.ajax({
                            url: x,
                            data: y,
                            dataType: "json",
                            success: function(A) {
                                z(A)
                            },
                            error: function() {
                                z([])
                            }
                        })
                    }
                } else {
                    this.source = this.options.source
                }
            }
        },
        _searchTimeout: function(u) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var w = this.term === this._value(),
                    x = this.menu.element.is(":visible"),
                    y = u.altKey || u.ctrlKey || u.metaKey || u.shiftKey;
                if (!w || (w && !x && !y)) {
                    this.selectedItem = null;
                    this.search(null, u)
                }
            }, this.options.delay)
        },
        search: function(w, u) {
            w = w != null ? w : this._value();
            this.term = this._value();
            if (w.length < this.options.minLength) {
                return this.close(u)
            }
            if (this._trigger("search", u) === false) {
                return
            }
            return this._search(w)
        },
        _search: function(u) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = false;
            this.source({
                term: u
            }, this._response())
        },
        _response: function() {
            var u = ++this.requestIndex;
            return a.proxy(function(w) {
                if (u === this.requestIndex) {
                    this.__response(w)
                }
                this.pending--;
                if (!this.pending) {
                    this.element.removeClass("ui-autocomplete-loading")
                }
            }, this)
        },
        __response: function(u) {
            if (u) {
                u = this._normalize(u)
            }
            this._trigger("response", null, {
                content: u
            });
            if (!this.options.disabled && u && u.length && !this.cancelSearch) {
                this._suggest(u);
                this._trigger("open")
            } else {
                this._close()
            }
        },
        close: function(u) {
            this.cancelSearch = true;
            this._close(u)
        },
        _close: function(u) {
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger("close", u)
            }
        },
        _change: function(u) {
            if (this.previous !== this._value()) {
                this._trigger("change", u, {
                    item: this.selectedItem
                })
            }
        },
        _normalize: function(u) {
            if (u.length && u[0].label && u[0].value) {
                return u
            }
            return a.map(u, function(w) {
                if (typeof w === "string") {
                    return {
                        label: w,
                        value: w
                    }
                }
                return a.extend({}, w, {
                    label: w.label || w.value,
                    value: w.value || w.label
                })
            })
        },
        _suggest: function(u) {
            var w = this.menu.element.empty();
            this._renderMenu(w, u);
            this.isNewMenu = true;
            this.menu.refresh();
            w.show();
            this._resizeMenu();
            w.position(a.extend({
                of: this.element
            }, this.options.position));
            if (this.options.autoFocus) {
                this.menu.next()
            }
        },
        _resizeMenu: function() {
            var u = this.menu.element;
            u.outerWidth(Math.max(u.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(x, u) {
            var w = this;
            a.each(u, function(y, z) {
                w._renderItemData(x, z)
            })
        },
        _renderItemData: function(w, u) {
            return this._renderItem(w, u).data("ui-autocomplete-item", u)
        },
        _renderItem: function(w, u) {
            return a("<li>").text(u.label).appendTo(w)
        },
        _move: function(u, w) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, w);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(u) || this.menu.isLastItem() && /^next/.test(u)) {
                if (!this.isMultiLine) {
                    this._value(this.term)
                }
                this.menu.blur();
                return
            }
            this.menu[u](w)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(w, u) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(w, u);
                u.preventDefault()
            }
        }
    });
    a.extend(a.ui.autocomplete, {
        escapeRegex: function(u) {
            return u.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(u, x) {
            var w = new RegExp(a.ui.autocomplete.escapeRegex(x), "i");
            return a.grep(u, function(y) {
                return w.test(y.label || y.value || y)
            })
        }
    });
    a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(u) {
                    return u + (u > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(u) {
            var w;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return
            }
            if (u && u.length) {
                w = this.options.messages.results(u.length)
            } else {
                w = this.options.messages.noResults
            }
            this.liveRegion.children().hide();
            a("<div>").text(w).appendTo(this.liveRegion)
        }
    });
    var b = a.ui.autocomplete;
    /*
     * jQuery UI Mouse 1.11.2
     * http://jqueryui.com
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/mouse/
     */
    var n = false;
    a(document).mouseup(function() {
        n = false
    });
    var m = a.widget("ui.mouse", {
        version: "1.11.2",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var u = this;
            this.element.bind("mousedown." + this.widgetName, function(w) {
                return u._mouseDown(w)
            }).bind("click." + this.widgetName, function(w) {
                if (true === a.data(w.target, u.widgetName + ".preventClickEvent")) {
                    a.removeData(w.target, u.widgetName + ".preventClickEvent");
                    w.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            }
        },
        _mouseDown: function(x) {
            if (n) {
                return
            }
            this._mouseMoved = false;
            (this._mouseStarted && this._mouseUp(x));
            this._mouseDownEvent = x;
            var y = this,
                u = (x.which === 1),
                w = (typeof this.options.cancel === "string" && x.target.nodeName ? a(x.target).closest(this.options.cancel).length : false);
            if (!u || w || !this._mouseCapture(x)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    y.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(x) && this._mouseDelayMet(x)) {
                this._mouseStarted = (this._mouseStart(x) !== false);
                if (!this._mouseStarted) {
                    x.preventDefault();
                    return true
                }
            }
            if (true === a.data(x.target, this.widgetName + ".preventClickEvent")) {
                a.removeData(x.target, this.widgetName + ".preventClickEvent")
            }
            this._mouseMoveDelegate = function(z) {
                return y._mouseMove(z)
            };
            this._mouseUpDelegate = function(z) {
                return y._mouseUp(z)
            };
            this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
            x.preventDefault();
            n = true;
            return true
        },
        _mouseMove: function(u) {
            if (this._mouseMoved) {
                if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !u.button) {
                    return this._mouseUp(u)
                } else {
                    if (!u.which) {
                        return this._mouseUp(u)
                    }
                }
            }
            if (u.which || u.button) {
                this._mouseMoved = true
            }
            if (this._mouseStarted) {
                this._mouseDrag(u);
                return u.preventDefault()
            }
            if (this._mouseDistanceMet(u) && this._mouseDelayMet(u)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, u) !== false);
                (this._mouseStarted ? this._mouseDrag(u) : this._mouseUp(u))
            }
            return !this._mouseStarted
        },
        _mouseUp: function(u) {
            this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (u.target === this._mouseDownEvent.target) {
                    a.data(u.target, this.widgetName + ".preventClickEvent", true)
                }
                this._mouseStop(u)
            }
            n = false;
            return false
        },
        _mouseDistanceMet: function(u) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - u.pageX), Math.abs(this._mouseDownEvent.pageY - u.pageY)) >= this.options.distance)
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true
        }
    });
    /*
     * jQuery UI Draggable 1.11.2
     * http://jqueryui.com
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/draggable/
     */
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            if (this.options.helper === "original") {
                this._setPositionRelative()
            }
            if (this.options.addClasses) {
                this.element.addClass("ui-draggable")
            }
            if (this.options.disabled) {
                this.element.addClass("ui-draggable-disabled")
            }
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(u, w) {
            this._super(u, w);
            if (u === "handle") {
                this._removeHandleClassName();
                this._setHandleClassName()
            }
        },
        _destroy: function() {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                this.destroyOnClear = true;
                return
            }
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._removeHandleClassName();
            this._mouseDestroy()
        },
        _mouseCapture: function(u) {
            var w = this.options;
            this._blurActiveElement(u);
            if (this.helper || w.disabled || a(u.target).closest(".ui-resizable-handle").length > 0) {
                return false
            }
            this.handle = this._getHandle(u);
            if (!this.handle) {
                return false
            }
            this._blockFrames(w.iframeFix === true ? "iframe" : w.iframeFix);
            return true
        },
        _blockFrames: function(u) {
            this.iframeBlocks = this.document.find(u).map(function() {
                var w = a(this);
                return a("<div>").css("position", "absolute").appendTo(w.parent()).outerWidth(w.outerWidth()).outerHeight(w.outerHeight()).offset(w.offset())[0]
            })
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks
            }
        },
        _blurActiveElement: function(x) {
            var u = this.document[0];
            if (!this.handleElement.is(x.target)) {
                return
            }
            try {
                if (u.activeElement && u.activeElement.nodeName.toLowerCase() !== "body") {
                    a(u.activeElement).blur()
                }
            } catch (w) {}
        },
        _mouseStart: function(u) {
            var w = this.options;
            this.helper = this._createHelper(u);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(true);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return a(this).css("position") === "fixed"
            }).length > 0;
            this.positionAbs = this.element.offset();
            this._refreshOffsets(u);
            this.originalPosition = this.position = this._generatePosition(u, false);
            this.originalPageX = u.pageX;
            this.originalPageY = u.pageY;
            (w.cursorAt && this._adjustOffsetFromHelper(w.cursorAt));
            this._setContainment();
            if (this._trigger("start", u) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            if (a.ui.ddmanager && !w.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, u)
            }
            this._normalizeRightBottom();
            this._mouseDrag(u, true);
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStart(this, u)
            }
            return true
        },
        _refreshOffsets: function(u) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: u.pageX - this.offset.left,
                top: u.pageY - this.offset.top
            }
        },
        _mouseDrag: function(u, w) {
            if (this.hasFixedAncestor) {
                this.offset.parent = this._getParentOffset()
            }
            this.position = this._generatePosition(u, true);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!w) {
                var x = this._uiHash();
                if (this._trigger("drag", u, x) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = x.position
            }
            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, u)
            }
            return false
        },
        _mouseStop: function(w) {
            var x = this,
                u = false;
            if (a.ui.ddmanager && !this.options.dropBehaviour) {
                u = a.ui.ddmanager.drop(this, w)
            }
            if (this.dropped) {
                u = this.dropped;
                this.dropped = false
            }
            if ((this.options.revert === "invalid" && !u) || (this.options.revert === "valid" && u) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, u))) {
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (x._trigger("stop", w) !== false) {
                        x._clear()
                    }
                })
            } else {
                if (this._trigger("stop", w) !== false) {
                    this._clear()
                }
            }
            return false
        },
        _mouseUp: function(u) {
            this._unblockFrames();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStop(this, u)
            }
            if (this.handleElement.is(u.target)) {
                this.element.focus()
            }
            return a.ui.mouse.prototype._mouseUp.call(this, u)
        },
        cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({})
            } else {
                this._clear()
            }
            return this
        },
        _getHandle: function(u) {
            return this.options.handle ? !!a(u.target).closest(this.element.find(this.options.handle)).length : true
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(u) {
            var y = this.options,
                x = a.isFunction(y.helper),
                w = x ? a(y.helper.apply(this.element[0], [u])) : (y.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
            if (!w.parents("body").length) {
                w.appendTo((y.appendTo === "parent" ? this.element[0].parentNode : y.appendTo))
            }
            if (x && w[0] === this.element[0]) {
                this._setPositionRelative()
            }
            if (w[0] !== this.element[0] && !(/(fixed|absolute)/).test(w.css("position"))) {
                w.css("position", "absolute")
            }
            return w
        },
        _setPositionRelative: function() {
            if (!(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative"
            }
        },
        _adjustOffsetFromHelper: function(u) {
            if (typeof u === "string") {
                u = u.split(" ")
            }
            if (a.isArray(u)) {
                u = {
                    left: +u[0],
                    top: +u[1] || 0
                }
            }
            if ("left" in u) {
                this.offset.click.left = u.left + this.margins.left
            }
            if ("right" in u) {
                this.offset.click.left = this.helperProportions.width - u.right + this.margins.left
            }
            if ("top" in u) {
                this.offset.click.top = u.top + this.margins.top
            }
            if ("bottom" in u) {
                this.offset.click.top = this.helperProportions.height - u.bottom + this.margins.top
            }
        },
        _isRootNode: function(u) {
            return (/(html|body)/i).test(u.tagName) || u === this.document[0]
        },
        _getParentOffset: function() {
            var w = this.offsetParent.offset(),
                u = this.document[0];
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== u && a.contains(this.scrollParent[0], this.offsetParent[0])) {
                w.left += this.scrollParent.scrollLeft();
                w.top += this.scrollParent.scrollTop()
            }
            if (this._isRootNode(this.offsetParent[0])) {
                w = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: w.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: w.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition !== "relative") {
                return {
                    top: 0,
                    left: 0
                }
            }
            var u = this.element.position(),
                w = this._isRootNode(this.scrollParent[0]);
            return {
                top: u.top - (parseInt(this.helper.css("top"), 10) || 0) + (!w ? this.scrollParent.scrollTop() : 0),
                left: u.left - (parseInt(this.helper.css("left"), 10) || 0) + (!w ? this.scrollParent.scrollLeft() : 0)
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var y, u, w, z = this.options,
                x = this.document[0];
            this.relativeContainer = null;
            if (!z.containment) {
                this.containment = null;
                return
            }
            if (z.containment === "window") {
                this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || x.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (z.containment === "document") {
                this.containment = [0, 0, a(x).width() - this.helperProportions.width - this.margins.left, (a(x).height() || x.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (z.containment.constructor === Array) {
                this.containment = z.containment;
                return
            }
            if (z.containment === "parent") {
                z.containment = this.helper[0].parentNode
            }
            u = a(z.containment);
            w = u[0];
            if (!w) {
                return
            }
            y = /(scroll|auto)/.test(u.css("overflow"));
            this.containment = [(parseInt(u.css("borderLeftWidth"), 10) || 0) + (parseInt(u.css("paddingLeft"), 10) || 0), (parseInt(u.css("borderTopWidth"), 10) || 0) + (parseInt(u.css("paddingTop"), 10) || 0), (y ? Math.max(w.scrollWidth, w.offsetWidth) : w.offsetWidth) - (parseInt(u.css("borderRightWidth"), 10) || 0) - (parseInt(u.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (y ? Math.max(w.scrollHeight, w.offsetHeight) : w.offsetHeight) - (parseInt(u.css("borderBottomWidth"), 10) || 0) - (parseInt(u.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
            this.relativeContainer = u
        },
        _convertPositionTo: function(u, x) {
            if (!x) {
                x = this.position
            }
            var w = u === "absolute" ? 1 : -1,
                y = this._isRootNode(this.scrollParent[0]);
            return {
                top: (x.top + this.offset.relative.top * w + this.offset.parent.top * w - ((this.cssPosition === "fixed" ? -this.offset.scroll.top : (y ? 0 : this.offset.scroll.top)) * w)),
                left: (x.left + this.offset.relative.left * w + this.offset.parent.left * w - ((this.cssPosition === "fixed" ? -this.offset.scroll.left : (y ? 0 : this.offset.scroll.left)) * w))
            }
        },
        _generatePosition: function(y, w) {
            var x, u, E, z, A = this.options,
                D = this._isRootNode(this.scrollParent[0]),
                B = y.pageX,
                C = y.pageY;
            if (!D || !this.offset.scroll) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }
            }
            if (w) {
                if (this.containment) {
                    if (this.relativeContainer) {
                        u = this.relativeContainer.offset();
                        x = [this.containment[0] + u.left, this.containment[1] + u.top, this.containment[2] + u.left, this.containment[3] + u.top]
                    } else {
                        x = this.containment
                    }
                    if (y.pageX - this.offset.click.left < x[0]) {
                        B = x[0] + this.offset.click.left
                    }
                    if (y.pageY - this.offset.click.top < x[1]) {
                        C = x[1] + this.offset.click.top
                    }
                    if (y.pageX - this.offset.click.left > x[2]) {
                        B = x[2] + this.offset.click.left
                    }
                    if (y.pageY - this.offset.click.top > x[3]) {
                        C = x[3] + this.offset.click.top
                    }
                }
                if (A.grid) {
                    E = A.grid[1] ? this.originalPageY + Math.round((C - this.originalPageY) / A.grid[1]) * A.grid[1] : this.originalPageY;
                    C = x ? ((E - this.offset.click.top >= x[1] || E - this.offset.click.top > x[3]) ? E : ((E - this.offset.click.top >= x[1]) ? E - A.grid[1] : E + A.grid[1])) : E;
                    z = A.grid[0] ? this.originalPageX + Math.round((B - this.originalPageX) / A.grid[0]) * A.grid[0] : this.originalPageX;
                    B = x ? ((z - this.offset.click.left >= x[0] || z - this.offset.click.left > x[2]) ? z : ((z - this.offset.click.left >= x[0]) ? z - A.grid[0] : z + A.grid[0])) : z
                }
                if (A.axis === "y") {
                    B = this.originalPageX
                }
                if (A.axis === "x") {
                    C = this.originalPageY
                }
            }
            return {
                top: (C - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : (D ? 0 : this.offset.scroll.top))),
                left: (B - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : (D ? 0 : this.offset.scroll.left)))
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove()
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if (this.destroyOnClear) {
                this.destroy()
            }
        },
        _normalizeRightBottom: function() {
            if (this.options.axis !== "y" && this.helper.css("right") !== "auto") {
                this.helper.width(this.helper.width());
                this.helper.css("right", "auto")
            }
            if (this.options.axis !== "x" && this.helper.css("bottom") !== "auto") {
                this.helper.height(this.helper.height());
                this.helper.css("bottom", "auto")
            }
        },
        _trigger: function(w, u, x) {
            x = x || this._uiHash();
            a.ui.plugin.call(this, w, [u, x, this], true);
            if (/^(drag|start|stop)/.test(w)) {
                this.positionAbs = this._convertPositionTo("absolute");
                x.offset = this.positionAbs
            }
            return a.Widget.prototype._trigger.call(this, w, u, x)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(w, x, u) {
            var y = a.extend({}, x, {
                item: u.element
            });
            u.sortables = [];
            a(u.options.connectToSortable).each(function() {
                var z = a(this).sortable("instance");
                if (z && !z.options.disabled) {
                    u.sortables.push(z);
                    z.refreshPositions();
                    z._trigger("activate", w, y)
                }
            })
        },
        stop: function(w, x, u) {
            var y = a.extend({}, x, {
                item: u.element
            });
            u.cancelHelperRemoval = false;
            a.each(u.sortables, function() {
                var z = this;
                if (z.isOver) {
                    z.isOver = 0;
                    u.cancelHelperRemoval = true;
                    z.cancelHelperRemoval = false;
                    z._storedCSS = {
                        position: z.placeholder.css("position"),
                        top: z.placeholder.css("top"),
                        left: z.placeholder.css("left")
                    };
                    z._mouseStop(w);
                    z.options.helper = z.options._helper
                } else {
                    z.cancelHelperRemoval = true;
                    z._trigger("deactivate", w, y)
                }
            })
        },
        drag: function(w, x, u) {
            a.each(u.sortables, function() {
                var y = false,
                    z = this;
                z.positionAbs = u.positionAbs;
                z.helperProportions = u.helperProportions;
                z.offset.click = u.offset.click;
                if (z._intersectsWith(z.containerCache)) {
                    y = true;
                    a.each(u.sortables, function() {
                        this.positionAbs = u.positionAbs;
                        this.helperProportions = u.helperProportions;
                        this.offset.click = u.offset.click;
                        if (this !== z && this._intersectsWith(this.containerCache) && a.contains(z.element[0], this.element[0])) {
                            y = false
                        }
                        return y
                    })
                }
                if (y) {
                    if (!z.isOver) {
                        z.isOver = 1;
                        z.currentItem = x.helper.appendTo(z.element).data("ui-sortable-item", true);
                        z.options._helper = z.options.helper;
                        z.options.helper = function() {
                            return x.helper[0]
                        };
                        w.target = z.currentItem[0];
                        z._mouseCapture(w, true);
                        z._mouseStart(w, true, true);
                        z.offset.click.top = u.offset.click.top;
                        z.offset.click.left = u.offset.click.left;
                        z.offset.parent.left -= u.offset.parent.left - z.offset.parent.left;
                        z.offset.parent.top -= u.offset.parent.top - z.offset.parent.top;
                        u._trigger("toSortable", w);
                        u.dropped = z.element;
                        a.each(u.sortables, function() {
                            this.refreshPositions()
                        });
                        u.currentItem = u.element;
                        z.fromOutside = u
                    }
                    if (z.currentItem) {
                        z._mouseDrag(w);
                        x.position = z.position
                    }
                } else {
                    if (z.isOver) {
                        z.isOver = 0;
                        z.cancelHelperRemoval = true;
                        z.options._revert = z.options.revert;
                        z.options.revert = false;
                        z._trigger("out", w, z._uiHash(z));
                        z._mouseStop(w, true);
                        z.options.revert = z.options._revert;
                        z.options.helper = z.options._helper;
                        if (z.placeholder) {
                            z.placeholder.remove()
                        }
                        u._refreshOffsets(w);
                        x.position = u._generatePosition(w, true);
                        u._trigger("fromSortable", w);
                        u.dropped = false;
                        a.each(u.sortables, function() {
                            this.refreshPositions()
                        })
                    }
                }
            })
        }
    });
    a.ui.plugin.add("draggable", "cursor", {
        start: function(u, z, w) {
            var y = a("body"),
                x = w.options;
            if (y.css("cursor")) {
                x._cursor = y.css("cursor")
            }
            y.css("cursor", x.cursor)
        },
        stop: function(u, y, w) {
            var x = w.options;
            if (x._cursor) {
                a("body").css("cursor", x._cursor)
            }
        }
    });
    a.ui.plugin.add("draggable", "opacity", {
        start: function(u, z, w) {
            var y = a(z.helper),
                x = w.options;
            if (y.css("opacity")) {
                x._opacity = y.css("opacity")
            }
            y.css("opacity", x.opacity)
        },
        stop: function(u, y, w) {
            var x = w.options;
            if (x._opacity) {
                a(y.helper).css("opacity", x._opacity)
            }
        }
    });
    a.ui.plugin.add("draggable", "scroll", {
        start: function(u, x, w) {
            if (!w.scrollParentNotHidden) {
                w.scrollParentNotHidden = w.helper.scrollParent(false)
            }
            if (w.scrollParentNotHidden[0] !== w.document[0] && w.scrollParentNotHidden[0].tagName !== "HTML") {
                w.overflowOffset = w.scrollParentNotHidden.offset()
            }
        },
        drag: function(w, B, x) {
            var y = x.options,
                z = false,
                A = x.scrollParentNotHidden[0],
                u = x.document[0];
            if (A !== u && A.tagName !== "HTML") {
                if (!y.axis || y.axis !== "x") {
                    if ((x.overflowOffset.top + A.offsetHeight) - w.pageY < y.scrollSensitivity) {
                        A.scrollTop = z = A.scrollTop + y.scrollSpeed
                    } else {
                        if (w.pageY - x.overflowOffset.top < y.scrollSensitivity) {
                            A.scrollTop = z = A.scrollTop - y.scrollSpeed
                        }
                    }
                }
                if (!y.axis || y.axis !== "y") {
                    if ((x.overflowOffset.left + A.offsetWidth) - w.pageX < y.scrollSensitivity) {
                        A.scrollLeft = z = A.scrollLeft + y.scrollSpeed
                    } else {
                        if (w.pageX - x.overflowOffset.left < y.scrollSensitivity) {
                            A.scrollLeft = z = A.scrollLeft - y.scrollSpeed
                        }
                    }
                }
            } else {
                if (!y.axis || y.axis !== "x") {
                    if (w.pageY - a(u).scrollTop() < y.scrollSensitivity) {
                        z = a(u).scrollTop(a(u).scrollTop() - y.scrollSpeed)
                    } else {
                        if (a(window).height() - (w.pageY - a(u).scrollTop()) < y.scrollSensitivity) {
                            z = a(u).scrollTop(a(u).scrollTop() + y.scrollSpeed)
                        }
                    }
                }
                if (!y.axis || y.axis !== "y") {
                    if (w.pageX - a(u).scrollLeft() < y.scrollSensitivity) {
                        z = a(u).scrollLeft(a(u).scrollLeft() - y.scrollSpeed)
                    } else {
                        if (a(window).width() - (w.pageX - a(u).scrollLeft()) < y.scrollSensitivity) {
                            z = a(u).scrollLeft(a(u).scrollLeft() + y.scrollSpeed)
                        }
                    }
                }
            }
            if (z !== false && a.ui.ddmanager && !y.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(x, w)
            }
        }
    });
    a.ui.plugin.add("draggable", "snap", {
        start: function(u, y, w) {
            var x = w.options;
            w.snapElements = [];
            a(x.snap.constructor !== String ? (x.snap.items || ":data(ui-draggable)") : x.snap).each(function() {
                var A = a(this),
                    z = A.offset();
                if (this !== w.element[0]) {
                    w.snapElements.push({
                        item: this,
                        width: A.outerWidth(),
                        height: A.outerHeight(),
                        top: z.top,
                        left: z.left
                    })
                }
            })
        },
        drag: function(y, J, B) {
            var I, w, D, G, C, F, H, u, A, z, E = B.options,
                x = E.snapTolerance,
                K = J.offset.left,
                L = K + B.helperProportions.width,
                M = J.offset.top,
                N = M + B.helperProportions.height;
            for (A = B.snapElements.length - 1; A >= 0; A--) {
                C = B.snapElements[A].left - B.margins.left;
                F = C + B.snapElements[A].width;
                H = B.snapElements[A].top - B.margins.top;
                u = H + B.snapElements[A].height;
                if (L < C - x || K > F + x || N < H - x || M > u + x || !a.contains(B.snapElements[A].item.ownerDocument, B.snapElements[A].item)) {
                    if (B.snapElements[A].snapping) {
                        (B.options.snap.release && B.options.snap.release.call(B.element, y, a.extend(B._uiHash(), {
                            snapItem: B.snapElements[A].item
                        })))
                    }
                    B.snapElements[A].snapping = false;
                    continue
                }
                if (E.snapMode !== "inner") {
                    I = Math.abs(H - N) <= x;
                    w = Math.abs(u - M) <= x;
                    D = Math.abs(C - L) <= x;
                    G = Math.abs(F - K) <= x;
                    if (I) {
                        J.position.top = B._convertPositionTo("relative", {
                            top: H - B.helperProportions.height,
                            left: 0
                        }).top
                    }
                    if (w) {
                        J.position.top = B._convertPositionTo("relative", {
                            top: u,
                            left: 0
                        }).top
                    }
                    if (D) {
                        J.position.left = B._convertPositionTo("relative", {
                            top: 0,
                            left: C - B.helperProportions.width
                        }).left
                    }
                    if (G) {
                        J.position.left = B._convertPositionTo("relative", {
                            top: 0,
                            left: F
                        }).left
                    }
                }
                z = (I || w || D || G);
                if (E.snapMode !== "outer") {
                    I = Math.abs(H - M) <= x;
                    w = Math.abs(u - N) <= x;
                    D = Math.abs(C - K) <= x;
                    G = Math.abs(F - L) <= x;
                    if (I) {
                        J.position.top = B._convertPositionTo("relative", {
                            top: H,
                            left: 0
                        }).top
                    }
                    if (w) {
                        J.position.top = B._convertPositionTo("relative", {
                            top: u - B.helperProportions.height,
                            left: 0
                        }).top
                    }
                    if (D) {
                        J.position.left = B._convertPositionTo("relative", {
                            top: 0,
                            left: C
                        }).left
                    }
                    if (G) {
                        J.position.left = B._convertPositionTo("relative", {
                            top: 0,
                            left: F - B.helperProportions.width
                        }).left
                    }
                }
                if (!B.snapElements[A].snapping && (I || w || D || G || z)) {
                    (B.options.snap.snap && B.options.snap.snap.call(B.element, y, a.extend(B._uiHash(), {
                        snapItem: B.snapElements[A].item
                    })))
                }
                B.snapElements[A].snapping = (I || w || D || G || z)
            }
        }
    });
    a.ui.plugin.add("draggable", "stack", {
        start: function(u, A, x) {
            var y, z = x.options,
                w = a.makeArray(a(z.stack)).sort(function(B, C) {
                    return (parseInt(a(B).css("zIndex"), 10) || 0) - (parseInt(a(C).css("zIndex"), 10) || 0)
                });
            if (!w.length) {
                return
            }
            y = parseInt(a(w[0]).css("zIndex"), 10) || 0;
            a(w).each(function(B) {
                a(this).css("zIndex", y + B)
            });
            this.css("zIndex", (y + w.length))
        }
    });
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(u, z, w) {
            var y = a(z.helper),
                x = w.options;
            if (y.css("zIndex")) {
                x._zIndex = y.css("zIndex")
            }
            y.css("zIndex", x.zIndex)
        },
        stop: function(u, y, w) {
            var x = w.options;
            if (x._zIndex) {
                a(y.helper).css("zIndex", x._zIndex)
            }
        }
    });
    var j = a.ui.draggable;
    /*
     * jQuery UI Sortable 1.11.2
     * http://jqueryui.com
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/sortable/
     */
    var p = a.widget("ui.sortable", a.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(y, u, w) {
            return (y >= u) && (y < (u + w))
        },
        _isFloating: function(u) {
            return (/left|right/).test(u.css("float")) || (/inline|table-cell/).test(u.css("display"))
        },
        _create: function() {
            var u = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? u.axis === "x" || this._isFloating(this.items[0].item) : false;
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = true
        },
        _setOption: function(u, w) {
            this._super(u, w);
            if (u === "handle") {
                this._setHandleClassName()
            }
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            a.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
            this._mouseDestroy();
            for (var u = this.items.length - 1; u >= 0; u--) {
                this.items[u].item.removeData(this.widgetName + "-item")
            }
            return this
        },
        _mouseCapture: function(w, x) {
            var u = null,
                z = false,
                y = this;
            if (this.reverting) {
                return false
            }
            if (this.options.disabled || this.options.type === "static") {
                return false
            }
            this._refreshItems(w);
            a(w.target).parents().each(function() {
                if (a.data(this, y.widgetName + "-item") === y) {
                    u = a(this);
                    return false
                }
            });
            if (a.data(w.target, y.widgetName + "-item") === y) {
                u = a(w.target)
            }
            if (!u) {
                return false
            }
            if (this.options.handle && !x) {
                a(this.options.handle, u).find("*").addBack().each(function() {
                    if (this === w.target) {
                        z = true
                    }
                });
                if (!z) {
                    return false
                }
            }
            this.currentItem = u;
            this._removeCurrentsFromItems();
            return true
        },
        _mouseStart: function(w, A, y) {
            var x, u, z = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(w);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            a.extend(this.offset, {
                click: {
                    left: w.pageX - this.offset.left,
                    top: w.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(w);
            this.originalPageX = w.pageX;
            this.originalPageY = w.pageY;
            (z.cursorAt && this._adjustOffsetFromHelper(z.cursorAt));
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide()
            }
            this._createPlaceholder();
            if (z.containment) {
                this._setContainment()
            }
            if (z.cursor && z.cursor !== "auto") {
                u = this.document.find("body");
                this.storedCursor = u.css("cursor");
                u.css("cursor", z.cursor);
                this.storedStylesheet = a("<style>*{ cursor: " + z.cursor + " !important; }</style>").appendTo(u)
            }
            if (z.opacity) {
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity")
                }
                this.helper.css("opacity", z.opacity)
            }
            if (z.zIndex) {
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex")
                }
                this.helper.css("zIndex", z.zIndex)
            }
            if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset()
            }
            this._trigger("start", w, this._uiHash());
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions()
            }
            if (!y) {
                for (x = this.containers.length - 1; x >= 0; x--) {
                    this.containers[x]._trigger("activate", w, this._uiHash(this))
                }
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this
            }
            if (a.ui.ddmanager && !z.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, w)
            }
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(w);
            return true
        },
        _mouseDrag: function(u) {
            var w, y, z, x, A = this.options,
                B = false;
            this.position = this._generatePosition(u);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs
            }
            if (this.options.scroll) {
                if (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML") {
                    if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - u.pageY < A.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = B = this.scrollParent[0].scrollTop + A.scrollSpeed
                    } else {
                        if (u.pageY - this.overflowOffset.top < A.scrollSensitivity) {
                            this.scrollParent[0].scrollTop = B = this.scrollParent[0].scrollTop - A.scrollSpeed
                        }
                    }
                    if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - u.pageX < A.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = B = this.scrollParent[0].scrollLeft + A.scrollSpeed
                    } else {
                        if (u.pageX - this.overflowOffset.left < A.scrollSensitivity) {
                            this.scrollParent[0].scrollLeft = B = this.scrollParent[0].scrollLeft - A.scrollSpeed
                        }
                    }
                } else {
                    if (u.pageY - a(document).scrollTop() < A.scrollSensitivity) {
                        B = a(document).scrollTop(a(document).scrollTop() - A.scrollSpeed)
                    } else {
                        if (a(window).height() - (u.pageY - a(document).scrollTop()) < A.scrollSensitivity) {
                            B = a(document).scrollTop(a(document).scrollTop() + A.scrollSpeed)
                        }
                    }
                    if (u.pageX - a(document).scrollLeft() < A.scrollSensitivity) {
                        B = a(document).scrollLeft(a(document).scrollLeft() - A.scrollSpeed)
                    } else {
                        if (a(window).width() - (u.pageX - a(document).scrollLeft()) < A.scrollSensitivity) {
                            B = a(document).scrollLeft(a(document).scrollLeft() + A.scrollSpeed)
                        }
                    }
                }
                if (B !== false && a.ui.ddmanager && !A.dropBehaviour) {
                    a.ui.ddmanager.prepareOffsets(this, u)
                }
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            for (w = this.items.length - 1; w >= 0; w--) {
                y = this.items[w];
                z = y.item[0];
                x = this._intersectsWithPointer(y);
                if (!x) {
                    continue
                }
                if (y.instance !== this.currentContainer) {
                    continue
                }
                if (z !== this.currentItem[0] && this.placeholder[x === 1 ? "next" : "prev"]()[0] !== z && !a.contains(this.placeholder[0], z) && (this.options.type === "semi-dynamic" ? !a.contains(this.element[0], z) : true)) {
                    this.direction = x === 1 ? "down" : "up";
                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(y)) {
                        this._rearrange(u, y)
                    } else {
                        break
                    }
                    this._trigger("change", u, this._uiHash());
                    break
                }
            }
            this._contactContainers(u);
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, u)
            }
            this._trigger("sort", u, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },
        _mouseStop: function(y, z) {
            if (!y) {
                return
            }
            if (a.ui.ddmanager && !this.options.dropBehaviour) {
                a.ui.ddmanager.drop(this, y)
            }
            if (this.options.revert) {
                var A = this,
                    x = this.placeholder.offset(),
                    w = this.options.axis,
                    u = {};
                if (!w || w === "x") {
                    u.left = x.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)
                }
                if (!w || w === "y") {
                    u.top = x.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)
                }
                this.reverting = true;
                a(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function() {
                    A._clear(y)
                })
            } else {
                this._clear(y, z)
            }
            return false
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                if (this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else {
                    this.currentItem.show()
                }
                for (var u = this.containers.length - 1; u >= 0; u--) {
                    this.containers[u]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[u].containerCache.over) {
                        this.containers[u]._trigger("out", null, this._uiHash(this));
                        this.containers[u].containerCache.over = 0
                    }
                }
            }
            if (this.placeholder) {
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0])
                }
                if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove()
                }
                a.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                if (this.domPosition.prev) {
                    a(this.domPosition.prev).after(this.currentItem)
                } else {
                    a(this.domPosition.parent).prepend(this.currentItem)
                }
            }
            return this
        },
        serialize: function(w) {
            var u = this._getItemsAsjQuery(w && w.connected),
                x = [];
            w = w || {};
            a(u).each(function() {
                var y = (a(w.item || this).attr(w.attribute || "id") || "").match(w.expression || (/(.+)[\-=_](.+)/));
                if (y) {
                    x.push((w.key || y[1] + "[]") + "=" + (w.key && w.expression ? y[1] : y[2]))
                }
            });
            if (!x.length && w.key) {
                x.push(w.key + "=")
            }
            return x.join("&")
        },
        toArray: function(w) {
            var u = this._getItemsAsjQuery(w && w.connected),
                x = [];
            w = w || {};
            u.each(function() {
                x.push(a(w.item || this).attr(w.attribute || "id") || "")
            });
            return x
        },
        _intersectsWith: function(B) {
            var F = this.positionAbs.left,
                G = F + this.helperProportions.width,
                H = this.positionAbs.top,
                I = H + this.helperProportions.height,
                C = B.left,
                D = C + B.width,
                E = B.top,
                u = E + B.height,
                x = this.offset.click.top,
                w = this.offset.click.left,
                z = (this.options.axis === "x") || ((H + x) > E && (H + x) < u),
                A = (this.options.axis === "y") || ((F + w) > C && (F + w) < D),
                y = z && A;
            if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > B[this.floating ? "width" : "height"])) {
                return y
            } else {
                return (C < F + (this.helperProportions.width / 2) && G - (this.helperProportions.width / 2) < D && E < H + (this.helperProportions.height / 2) && I - (this.helperProportions.height / 2) < u)
            }
        },
        _intersectsWithPointer: function(z) {
            var x = (this.options.axis === "x") || this._isOverAxis(this.positionAbs.top + this.offset.click.top, z.top, z.height),
                y = (this.options.axis === "y") || this._isOverAxis(this.positionAbs.left + this.offset.click.left, z.left, z.width),
                w = x && y,
                A = this._getDragVerticalDirection(),
                u = this._getDragHorizontalDirection();
            if (!w) {
                return false
            }
            return this.floating ? (((u && u === "right") || A === "down") ? 2 : 1) : (A && (A === "down" ? 2 : 1))
        },
        _intersectsWithSides: function(y) {
            var w = this._isOverAxis(this.positionAbs.top + this.offset.click.top, y.top + (y.height / 2), y.height),
                x = this._isOverAxis(this.positionAbs.left + this.offset.click.left, y.left + (y.width / 2), y.width),
                z = this._getDragVerticalDirection(),
                u = this._getDragHorizontalDirection();
            if (this.floating && u) {
                return ((u === "right" && x) || (u === "left" && !x))
            } else {
                return z && ((z === "down" && w) || (z === "up" && !w))
            }
        },
        _getDragVerticalDirection: function() {
            var u = this.positionAbs.top - this.lastPositionAbs.top;
            return u !== 0 && (u > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var u = this.positionAbs.left - this.lastPositionAbs.left;
            return u !== 0 && (u > 0 ? "right" : "left")
        },
        refresh: function(u) {
            this._refreshItems(u);
            this._setHandleClassName();
            this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var u = this.options;
            return u.connectWith.constructor === String ? [u.connectWith] : u.connectWith
        },
        _getItemsAsjQuery: function(w) {
            var z, C, y, A, B = [],
                D = [],
                x = this._connectWith();
            if (x && w) {
                for (z = x.length - 1; z >= 0; z--) {
                    y = a(x[z]);
                    for (C = y.length - 1; C >= 0; C--) {
                        A = a.data(y[C], this.widgetFullName);
                        if (A && A !== this && !A.options.disabled) {
                            D.push([a.isFunction(A.options.items) ? A.options.items.call(A.element) : a(A.options.items, A.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), A])
                        }
                    }
                }
            }
            D.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

            function u() {
                B.push(this)
            }
            for (z = D.length - 1; z >= 0; z--) {
                D[z][0].each(u)
            }
            return a(B)
        },
        _removeCurrentsFromItems: function() {
            var u = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function(w) {
                for (var x = 0; x < u.length; x++) {
                    if (u[x] === w.item[0]) {
                        return false
                    }
                }
                return true
            })
        },
        _refreshItems: function(y) {
            this.items = [];
            this.containers = [this];
            var z, D, x, A, G, u, B, F, C = this.items,
                E = [
                    [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], y, {
                        item: this.currentItem
                    }) : a(this.options.items, this.element), this]
                ],
                w = this._connectWith();
            if (w && this.ready) {
                for (z = w.length - 1; z >= 0; z--) {
                    x = a(w[z]);
                    for (D = x.length - 1; D >= 0; D--) {
                        A = a.data(x[D], this.widgetFullName);
                        if (A && A !== this && !A.options.disabled) {
                            E.push([a.isFunction(A.options.items) ? A.options.items.call(A.element[0], y, {
                                item: this.currentItem
                            }) : a(A.options.items, A.element), A]);
                            this.containers.push(A)
                        }
                    }
                }
            }
            for (z = E.length - 1; z >= 0; z--) {
                G = E[z][1];
                u = E[z][0];
                for (D = 0, F = u.length; D < F; D++) {
                    B = a(u[D]);
                    B.data(this.widgetName + "-item", G);
                    C.push({
                        item: B,
                        instance: G,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function(u) {
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset()
            }
            var w, x, z, y;
            for (w = this.items.length - 1; w >= 0; w--) {
                x = this.items[w];
                if (x.instance !== this.currentContainer && this.currentContainer && x.item[0] !== this.currentItem[0]) {
                    continue
                }
                z = this.options.toleranceElement ? a(this.options.toleranceElement, x.item) : x.item;
                if (!u) {
                    x.width = z.outerWidth();
                    x.height = z.outerHeight()
                }
                y = z.offset();
                x.left = y.left;
                x.top = y.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this)
            } else {
                for (w = this.containers.length - 1; w >= 0; w--) {
                    y = this.containers[w].element.offset();
                    this.containers[w].containerCache.left = y.left;
                    this.containers[w].containerCache.top = y.top;
                    this.containers[w].containerCache.width = this.containers[w].element.outerWidth();
                    this.containers[w].containerCache.height = this.containers[w].element.outerHeight()
                }
            }
            return this
        },
        _createPlaceholder: function(x) {
            x = x || this;
            var u, w = x.options;
            if (!w.placeholder || w.placeholder.constructor === String) {
                u = w.placeholder;
                w.placeholder = {
                    element: function() {
                        var z = x.currentItem[0].nodeName.toLowerCase(),
                            y = a("<" + z + ">", x.document[0]).addClass(u || x.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        if (z === "tr") {
                            x.currentItem.children().each(function() {
                                a("<td>&#160;</td>", x.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(y)
                            })
                        } else {
                            if (z === "img") {
                                y.attr("src", x.currentItem.attr("src"))
                            }
                        }
                        if (!u) {
                            y.css("visibility", "hidden")
                        }
                        return y
                    },
                    update: function(y, z) {
                        if (u && !w.forcePlaceholderSize) {
                            return
                        }
                        if (!z.height()) {
                            z.height(x.currentItem.innerHeight() - parseInt(x.currentItem.css("paddingTop") || 0, 10) - parseInt(x.currentItem.css("paddingBottom") || 0, 10))
                        }
                        if (!z.width()) {
                            z.width(x.currentItem.innerWidth() - parseInt(x.currentItem.css("paddingLeft") || 0, 10) - parseInt(x.currentItem.css("paddingRight") || 0, 10))
                        }
                    }
                }
            }
            x.placeholder = a(w.placeholder.element.call(x.element, x.currentItem));
            x.currentItem.after(x.placeholder);
            w.placeholder.update(x, x.placeholder)
        },
        _contactContainers: function(y) {
            var A, E, x, D, G, H, w, F, z, u, B = null,
                C = null;
            for (A = this.containers.length - 1; A >= 0; A--) {
                if (a.contains(this.currentItem[0], this.containers[A].element[0])) {
                    continue
                }
                if (this._intersectsWith(this.containers[A].containerCache)) {
                    if (B && a.contains(this.containers[A].element[0], B.element[0])) {
                        continue
                    }
                    B = this.containers[A];
                    C = A
                } else {
                    if (this.containers[A].containerCache.over) {
                        this.containers[A]._trigger("out", y, this._uiHash(this));
                        this.containers[A].containerCache.over = 0
                    }
                }
            }
            if (!B) {
                return
            }
            if (this.containers.length === 1) {
                if (!this.containers[C].containerCache.over) {
                    this.containers[C]._trigger("over", y, this._uiHash(this));
                    this.containers[C].containerCache.over = 1
                }
            } else {
                x = 10000;
                D = null;
                z = B.floating || this._isFloating(this.currentItem);
                G = z ? "left" : "top";
                H = z ? "width" : "height";
                u = z ? "clientX" : "clientY";
                for (E = this.items.length - 1; E >= 0; E--) {
                    if (!a.contains(this.containers[C].element[0], this.items[E].item[0])) {
                        continue
                    }
                    if (this.items[E].item[0] === this.currentItem[0]) {
                        continue
                    }
                    w = this.items[E].item.offset()[G];
                    F = false;
                    if (y[u] - w > this.items[E][H] / 2) {
                        F = true
                    }
                    if (Math.abs(y[u] - w) < x) {
                        x = Math.abs(y[u] - w);
                        D = this.items[E];
                        this.direction = F ? "up" : "down"
                    }
                }
                if (!D && !this.options.dropOnEmpty) {
                    return
                }
                if (this.currentContainer === this.containers[C]) {
                    if (!this.currentContainer.containerCache.over) {
                        this.containers[C]._trigger("over", y, this._uiHash());
                        this.currentContainer.containerCache.over = 1
                    }
                    return
                }
                D ? this._rearrange(y, D, null, true) : this._rearrange(y, null, this.containers[C].element, true);
                this._trigger("change", y, this._uiHash());
                this.containers[C]._trigger("change", y, this._uiHash(this));
                this.currentContainer = this.containers[C];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[C]._trigger("over", y, this._uiHash(this));
                this.containers[C].containerCache.over = 1
            }
        },
        _createHelper: function(u) {
            var x = this.options,
                w = a.isFunction(x.helper) ? a(x.helper.apply(this.element[0], [u, this.currentItem])) : (x.helper === "clone" ? this.currentItem.clone() : this.currentItem);
            if (!w.parents("body").length) {
                a(x.appendTo !== "parent" ? x.appendTo : this.currentItem[0].parentNode)[0].appendChild(w[0])
            }
            if (w[0] === this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }
            }
            if (!w[0].style.width || x.forceHelperSize) {
                w.width(this.currentItem.width())
            }
            if (!w[0].style.height || x.forceHelperSize) {
                w.height(this.currentItem.height())
            }
            return w
        },
        _adjustOffsetFromHelper: function(u) {
            if (typeof u === "string") {
                u = u.split(" ")
            }
            if (a.isArray(u)) {
                u = {
                    left: +u[0],
                    top: +u[1] || 0
                }
            }
            if ("left" in u) {
                this.offset.click.left = u.left + this.margins.left
            }
            if ("right" in u) {
                this.offset.click.left = this.helperProportions.width - u.right + this.margins.left
            }
            if ("top" in u) {
                this.offset.click.top = u.top + this.margins.top
            }
            if ("bottom" in u) {
                this.offset.click.top = this.helperProportions.height - u.bottom + this.margins.top
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var u = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) {
                u.left += this.scrollParent.scrollLeft();
                u.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && a.ui.ie)) {
                u = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: u.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: u.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var u = this.currentItem.position();
                return {
                    top: u.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: u.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {
                    top: 0,
                    left: 0
                }
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
                top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var u, w, y, x = this.options;
            if (x.containment === "parent") {
                x.containment = this.helper[0].parentNode
            }
            if (x.containment === "document" || x.containment === "window") {
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(x.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a(x.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!(/^(document|window|parent)$/).test(x.containment)) {
                u = a(x.containment)[0];
                w = a(x.containment).offset();
                y = (a(u).css("overflow") !== "hidden");
                this.containment = [w.left + (parseInt(a(u).css("borderLeftWidth"), 10) || 0) + (parseInt(a(u).css("paddingLeft"), 10) || 0) - this.margins.left, w.top + (parseInt(a(u).css("borderTopWidth"), 10) || 0) + (parseInt(a(u).css("paddingTop"), 10) || 0) - this.margins.top, w.left + (y ? Math.max(u.scrollWidth, u.offsetWidth) : u.offsetWidth) - (parseInt(a(u).css("borderLeftWidth"), 10) || 0) - (parseInt(a(u).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, w.top + (y ? Math.max(u.scrollHeight, u.offsetHeight) : u.offsetHeight) - (parseInt(a(u).css("borderTopWidth"), 10) || 0) - (parseInt(a(u).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(u, x) {
            if (!x) {
                x = this.position
            }
            var w = u === "absolute" ? 1 : -1,
                y = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                z = (/(html|body)/i).test(y[0].tagName);
            return {
                top: (x.top + this.offset.relative.top * w + this.offset.parent.top * w - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (z ? 0 : y.scrollTop())) * w)),
                left: (x.left + this.offset.relative.left * w + this.offset.parent.left * w - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : z ? 0 : y.scrollLeft()) * w))
            }
        },
        _generatePosition: function(u) {
            var C, w, x = this.options,
                y = u.pageX,
                z = u.pageY,
                A = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                B = (/(html|body)/i).test(A[0].tagName);
            if (this.cssPosition === "relative" && !(this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset()
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (u.pageX - this.offset.click.left < this.containment[0]) {
                        y = this.containment[0] + this.offset.click.left
                    }
                    if (u.pageY - this.offset.click.top < this.containment[1]) {
                        z = this.containment[1] + this.offset.click.top
                    }
                    if (u.pageX - this.offset.click.left > this.containment[2]) {
                        y = this.containment[2] + this.offset.click.left
                    }
                    if (u.pageY - this.offset.click.top > this.containment[3]) {
                        z = this.containment[3] + this.offset.click.top
                    }
                }
                if (x.grid) {
                    C = this.originalPageY + Math.round((z - this.originalPageY) / x.grid[1]) * x.grid[1];
                    z = this.containment ? ((C - this.offset.click.top >= this.containment[1] && C - this.offset.click.top <= this.containment[3]) ? C : ((C - this.offset.click.top >= this.containment[1]) ? C - x.grid[1] : C + x.grid[1])) : C;
                    w = this.originalPageX + Math.round((y - this.originalPageX) / x.grid[0]) * x.grid[0];
                    y = this.containment ? ((w - this.offset.click.left >= this.containment[0] && w - this.offset.click.left <= this.containment[2]) ? w : ((w - this.offset.click.left >= this.containment[0]) ? w - x.grid[0] : w + x.grid[0])) : w
                }
            }
            return {
                top: (z - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (B ? 0 : A.scrollTop())))),
                left: (y - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : B ? 0 : A.scrollLeft())))
            }
        },
        _rearrange: function(x, z, u, y) {
            u ? u[0].appendChild(this.placeholder[0]) : z.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? z.item[0] : z.item[0].nextSibling));
            this.counter = this.counter ? ++this.counter : 1;
            var w = this.counter;
            this._delay(function() {
                if (w === this.counter) {
                    this.refreshPositions(!y)
                }
            })
        },
        _clear: function(x, z) {
            this.reverting = false;
            var y, u = [];
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem)
            }
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (y in this._storedCSS) {
                    if (this._storedCSS[y] === "auto" || this._storedCSS[y] === "static") {
                        this._storedCSS[y] = ""
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            if (this.fromOutside && !z) {
                u.push(function(A) {
                    this._trigger("receive", A, this._uiHash(this.fromOutside))
                })
            }
            if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !z) {
                u.push(function(A) {
                    this._trigger("update", A, this._uiHash())
                })
            }
            if (this !== this.currentContainer) {
                if (!z) {
                    u.push(function(A) {
                        this._trigger("remove", A, this._uiHash())
                    });
                    u.push((function(A) {
                        return function(B) {
                            A._trigger("receive", B, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer));
                    u.push((function(A) {
                        return function(B) {
                            A._trigger("update", B, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer))
                }
            }

            function w(C, B, A) {
                return function(D) {
                    A._trigger(C, D, B._uiHash(B))
                }
            }
            for (y = this.containers.length - 1; y >= 0; y--) {
                if (!z) {
                    u.push(w("deactivate", this, this.containers[y]))
                }
                if (this.containers[y].containerCache.over) {
                    u.push(w("out", this, this.containers[y]));
                    this.containers[y].containerCache.over = 0
                }
            }
            if (this.storedCursor) {
                this.document.find("body").css("cursor", this.storedCursor);
                this.storedStylesheet.remove()
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity)
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex)
            }
            this.dragging = false;
            if (!z) {
                this._trigger("beforeStop", x, this._uiHash())
            }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            if (!this.cancelHelperRemoval) {
                if (this.helper[0] !== this.currentItem[0]) {
                    this.helper.remove()
                }
                this.helper = null
            }
            if (!z) {
                for (y = 0; y < u.length; y++) {
                    u[y].call(this, x)
                }
                this._trigger("stop", x, this._uiHash())
            }
            this.fromOutside = false;
            return !this.cancelHelperRemoval
        },
        _trigger: function() {
            if (a.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel()
            }
        },
        _uiHash: function(u) {
            var w = u || this;
            return {
                helper: w.helper,
                placeholder: w.placeholder || a([]),
                position: w.position,
                originalPosition: w.originalPosition,
                offset: w.positionAbs,
                item: w.currentItem,
                sender: u ? u.element : null
            }
        }
    });
    /*
     * jQuery UI Datepicker 1.11.2
     * http://jqueryui.com
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/datepicker/
     */
    a.extend(a.ui, {
        datepicker: {
            version: "1.11.2"
        }
    });
    var i;

    function g(u) {
        var w, x;
        while (u.length && u[0] !== document) {
            w = u.css("position");
            if (w === "absolute" || w === "relative" || w === "fixed") {
                x = parseInt(u.css("zIndex"), 10);
                if (!isNaN(x) && x !== 0) {
                    return x
                }
            }
            u = u.parent()
        }
        return 0
    }

    function d() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        a.extend(this._defaults, this.regional[""]);
        this.regional.en = a.extend(true, {}, this.regional[""]);
        this.regional["en-US"] = a.extend(true, {}, this.regional.en);
        this.dpDiv = e(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    a.extend(d.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(u) {
            f(this._defaults, u || {});
            return this
        },
        _attachDatepicker: function(z, y) {
            var x, u, w;
            x = z.nodeName.toLowerCase();
            u = (x === "div" || x === "span");
            if (!z.id) {
                this.uuid += 1;
                z.id = "dp" + this.uuid
            }
            w = this._newInst(a(z), u);
            w.settings = a.extend({}, y || {});
            if (x === "input") {
                this._connectDatepicker(z, w)
            } else {
                if (u) {
                    this._inlineDatepicker(z, w)
                }
            }
        },
        _newInst: function(x, w) {
            var u = x[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: u,
                input: x,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: w,
                dpDiv: (!w ? this.dpDiv : e(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))
            }
        },
        _connectDatepicker: function(x, w) {
            var u = a(x);
            w.append = a([]);
            w.trigger = a([]);
            if (u.hasClass(this.markerClassName)) {
                return
            }
            this._attachments(u, w);
            u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
            this._autoSize(w);
            a.data(x, "datepicker", w);
            if (w.settings.disabled) {
                this._disableDatepicker(x)
            }
        },
        _attachments: function(y, z) {
            var B, x, w, u = this._get(z, "appendText"),
                A = this._get(z, "isRTL");
            if (z.append) {
                z.append.remove()
            }
            if (u) {
                z.append = a("<span class='" + this._appendClass + "'>" + u + "</span>");
                y[A ? "before" : "after"](z.append)
            }
            y.unbind("focus", this._showDatepicker);
            if (z.trigger) {
                z.trigger.remove()
            }
            B = this._get(z, "showOn");
            if (B === "focus" || B === "both") {
                y.focus(this._showDatepicker)
            }
            if (B === "button" || B === "both") {
                x = this._get(z, "buttonText");
                w = this._get(z, "buttonImage");
                z.trigger = a(this._get(z, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                    src: w,
                    alt: x,
                    title: x
                }) : a("<button type='button'></button>").addClass(this._triggerClass).html(!w ? x : a("<img/>").attr({
                    src: w,
                    alt: x,
                    title: x
                })));
                y[A ? "before" : "after"](z.trigger);
                z.trigger.click(function() {
                    if (a.datepicker._datepickerShowing && a.datepicker._lastInput === y[0]) {
                        a.datepicker._hideDatepicker()
                    } else {
                        if (a.datepicker._datepickerShowing && a.datepicker._lastInput !== y[0]) {
                            a.datepicker._hideDatepicker();
                            a.datepicker._showDatepicker(y[0])
                        } else {
                            a.datepicker._showDatepicker(y[0])
                        }
                    }
                    return false
                })
            }
        },
        _autoSize: function(z) {
            if (this._get(z, "autoSize") && !z.inline) {
                var x, A, B, y, u = new Date(2009, 12 - 1, 20),
                    w = this._get(z, "dateFormat");
                if (w.match(/[DM]/)) {
                    x = function(C) {
                        A = 0;
                        B = 0;
                        for (y = 0; y < C.length; y++) {
                            if (C[y].length > A) {
                                A = C[y].length;
                                B = y
                            }
                        }
                        return B
                    };
                    u.setMonth(x(this._get(z, (w.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    u.setDate(x(this._get(z, (w.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - u.getDay())
                }
                z.input.attr("size", this._formatDate(z, u).length)
            }
        },
        _inlineDatepicker: function(x, w) {
            var u = a(x);
            if (u.hasClass(this.markerClassName)) {
                return
            }
            u.addClass(this.markerClassName).append(w.dpDiv);
            a.data(x, "datepicker", w);
            this._setDate(w, this._getDefaultDate(w), true);
            this._updateDatepicker(w);
            this._updateAlternate(w);
            if (w.settings.disabled) {
                this._disableDatepicker(x)
            }
            w.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function(z, x, B, F, C) {
            var y, w, u, D, E, A = this._dialogInst;
            if (!A) {
                this.uuid += 1;
                y = "dp" + this.uuid;
                this._dialogInput = a("<input type='text' id='" + y + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.keydown(this._doKeyDown);
                a("body").append(this._dialogInput);
                A = this._dialogInst = this._newInst(this._dialogInput, false);
                A.settings = {};
                a.data(this._dialogInput[0], "datepicker", A)
            }
            f(A.settings, F || {});
            x = (x && x.constructor === Date ? this._formatDate(A, x) : x);
            this._dialogInput.val(x);
            this._pos = (C ? (C.length ? C : [C.pageX, C.pageY]) : null);
            if (!this._pos) {
                w = document.documentElement.clientWidth;
                u = document.documentElement.clientHeight;
                D = document.documentElement.scrollLeft || document.body.scrollLeft;
                E = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(w / 2) - 100 + D, (u / 2) - 150 + E]
            }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            A.settings.onSelect = B;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if (a.blockUI) {
                a.blockUI(this.dpDiv)
            }
            a.data(this._dialogInput[0], "datepicker", A);
            return this
        },
        _destroyDatepicker: function(y) {
            var x, u = a(y),
                w = a.data(y, "datepicker");
            if (!u.hasClass(this.markerClassName)) {
                return
            }
            x = y.nodeName.toLowerCase();
            a.removeData(y, "datepicker");
            if (x === "input") {
                w.append.remove();
                w.trigger.remove();
                u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
            } else {
                if (x === "div" || x === "span") {
                    u.removeClass(this.markerClassName).empty()
                }
            }
        },
        _enableDatepicker: function(z) {
            var y, w, u = a(z),
                x = a.data(z, "datepicker");
            if (!u.hasClass(this.markerClassName)) {
                return
            }
            y = z.nodeName.toLowerCase();
            if (y === "input") {
                z.disabled = false;
                x.trigger.filter("button").each(function() {
                    this.disabled = false
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })
            } else {
                if (y === "div" || y === "span") {
                    w = u.children("." + this._inlineClass);
                    w.children().removeClass("ui-state-disabled");
                    w.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
                }
            }
            this._disabledInputs = a.map(this._disabledInputs, function(A) {
                return (A === z ? null : A)
            })
        },
        _disableDatepicker: function(z) {
            var y, w, u = a(z),
                x = a.data(z, "datepicker");
            if (!u.hasClass(this.markerClassName)) {
                return
            }
            y = z.nodeName.toLowerCase();
            if (y === "input") {
                z.disabled = true;
                x.trigger.filter("button").each(function() {
                    this.disabled = true
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })
            } else {
                if (y === "div" || y === "span") {
                    w = u.children("." + this._inlineClass);
                    w.children().addClass("ui-state-disabled");
                    w.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
                }
            }
            this._disabledInputs = a.map(this._disabledInputs, function(A) {
                return (A === z ? null : A)
            });
            this._disabledInputs[this._disabledInputs.length] = z
        },
        _isDisabledDatepicker: function(w) {
            if (!w) {
                return false
            }
            for (var u = 0; u < this._disabledInputs.length; u++) {
                if (this._disabledInputs[u] === w) {
                    return true
                }
            }
            return false
        },
        _getInst: function(w) {
            try {
                return a.data(w, "datepicker")
            } catch (u) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(B, z, C) {
            var A, u, y, x, w = this._getInst(B);
            if (arguments.length === 2 && typeof z === "string") {
                return (z === "defaults" ? a.extend({}, a.datepicker._defaults) : (w ? (z === "all" ? a.extend({}, w.settings) : this._get(w, z)) : null))
            }
            A = z || {};
            if (typeof z === "string") {
                A = {};
                A[z] = C
            }
            if (w) {
                if (this._curInst === w) {
                    this._hideDatepicker()
                }
                u = this._getDateDatepicker(B, true);
                y = this._getMinMaxDate(w, "min");
                x = this._getMinMaxDate(w, "max");
                f(w.settings, A);
                if (y !== null && A.dateFormat !== undefined && A.minDate === undefined) {
                    w.settings.minDate = this._formatDate(w, y)
                }
                if (x !== null && A.dateFormat !== undefined && A.maxDate === undefined) {
                    w.settings.maxDate = this._formatDate(w, x)
                }
                if ("disabled" in A) {
                    if (A.disabled) {
                        this._disableDatepicker(B)
                    } else {
                        this._enableDatepicker(B)
                    }
                }
                this._attachments(a(B), w);
                this._autoSize(w);
                this._setDate(w, u);
                this._updateAlternate(w);
                this._updateDatepicker(w)
            }
        },
        _changeDatepicker: function(w, u, x) {
            this._optionDatepicker(w, u, x)
        },
        _refreshDatepicker: function(w) {
            var u = this._getInst(w);
            if (u) {
                this._updateDatepicker(u)
            }
        },
        _setDateDatepicker: function(x, u) {
            var w = this._getInst(x);
            if (w) {
                this._setDate(w, u);
                this._updateDatepicker(w);
                this._updateAlternate(w)
            }
        },
        _getDateDatepicker: function(x, w) {
            var u = this._getInst(x);
            if (u && !u.inline) {
                this._setDateFromField(u, w)
            }
            return (u ? this._getDate(u) : null)
        },
        _doKeyDown: function(w) {
            var A, u, B, y = a.datepicker._getInst(w.target),
                x = true,
                z = y.dpDiv.is(".ui-datepicker-rtl");
            y._keyEvent = true;
            if (a.datepicker._datepickerShowing) {
                switch (w.keyCode) {
                    case 9:
                        a.datepicker._hideDatepicker();
                        x = false;
                        break;
                    case 13:
                        B = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", y.dpDiv);
                        if (B[0]) {
                            a.datepicker._selectDay(w.target, y.selectedMonth, y.selectedYear, B[0])
                        }
                        A = a.datepicker._get(y, "onSelect");
                        if (A) {
                            u = a.datepicker._formatDate(y);
                            A.apply((y.input ? y.input[0] : null), [u, y])
                        } else {
                            a.datepicker._hideDatepicker()
                        }
                        return false;
                    case 27:
                        a.datepicker._hideDatepicker();
                        break;
                    case 33:
                        a.datepicker._adjustDate(w.target, (w.ctrlKey ? -a.datepicker._get(y, "stepBigMonths") : -a.datepicker._get(y, "stepMonths")), "M");
                        break;
                    case 34:
                        a.datepicker._adjustDate(w.target, (w.ctrlKey ? +a.datepicker._get(y, "stepBigMonths") : +a.datepicker._get(y, "stepMonths")), "M");
                        break;
                    case 35:
                        if (w.ctrlKey || w.metaKey) {
                            a.datepicker._clearDate(w.target)
                        }
                        x = w.ctrlKey || w.metaKey;
                        break;
                    case 36:
                        if (w.ctrlKey || w.metaKey) {
                            a.datepicker._gotoToday(w.target)
                        }
                        x = w.ctrlKey || w.metaKey;
                        break;
                    case 37:
                        if (w.ctrlKey || w.metaKey) {
                            a.datepicker._adjustDate(w.target, (z ? +1 : -1), "D")
                        }
                        x = w.ctrlKey || w.metaKey;
                        if (w.originalEvent.altKey) {
                            a.datepicker._adjustDate(w.target, (w.ctrlKey ? -a.datepicker._get(y, "stepBigMonths") : -a.datepicker._get(y, "stepMonths")), "M")
                        }
                        break;
                    case 38:
                        if (w.ctrlKey || w.metaKey) {
                            a.datepicker._adjustDate(w.target, -7, "D")
                        }
                        x = w.ctrlKey || w.metaKey;
                        break;
                    case 39:
                        if (w.ctrlKey || w.metaKey) {
                            a.datepicker._adjustDate(w.target, (z ? -1 : +1), "D")
                        }
                        x = w.ctrlKey || w.metaKey;
                        if (w.originalEvent.altKey) {
                            a.datepicker._adjustDate(w.target, (w.ctrlKey ? +a.datepicker._get(y, "stepBigMonths") : +a.datepicker._get(y, "stepMonths")), "M")
                        }
                        break;
                    case 40:
                        if (w.ctrlKey || w.metaKey) {
                            a.datepicker._adjustDate(w.target, +7, "D")
                        }
                        x = w.ctrlKey || w.metaKey;
                        break;
                    default:
                        x = false
                }
            } else {
                if (w.keyCode === 36 && w.ctrlKey) {
                    a.datepicker._showDatepicker(this)
                } else {
                    x = false
                }
            }
            if (x) {
                w.preventDefault();
                w.stopPropagation()
            }
        },
        _doKeyPress: function(x) {
            var u, w, y = a.datepicker._getInst(x.target);
            if (a.datepicker._get(y, "constrainInput")) {
                u = a.datepicker._possibleChars(a.datepicker._get(y, "dateFormat"));
                w = String.fromCharCode(x.charCode == null ? x.keyCode : x.charCode);
                return x.ctrlKey || x.metaKey || (w < " " || !u || u.indexOf(w) > -1)
            }
        },
        _doKeyUp: function(x) {
            var u, y = a.datepicker._getInst(x.target);
            if (y.input.val() !== y.lastVal) {
                try {
                    u = a.datepicker.parseDate(a.datepicker._get(y, "dateFormat"), (y.input ? y.input.val() : null), a.datepicker._getFormatConfig(y));
                    if (u) {
                        a.datepicker._setDateFromField(y);
                        a.datepicker._updateAlternate(y);
                        a.datepicker._updateDatepicker(y)
                    }
                } catch (w) {}
            }
            return true
        },
        _showDatepicker: function(y) {
            y = y.target || y;
            if (y.nodeName.toLowerCase() !== "input") {
                y = a("input", y.parentNode)[0]
            }
            if (a.datepicker._isDisabledDatepicker(y) || a.datepicker._lastInput === y) {
                return
            }
            var z, u, w, A, B, C, x;
            z = a.datepicker._getInst(y);
            if (a.datepicker._curInst && a.datepicker._curInst !== z) {
                a.datepicker._curInst.dpDiv.stop(true, true);
                if (z && a.datepicker._datepickerShowing) {
                    a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])
                }
            }
            u = a.datepicker._get(z, "beforeShow");
            w = u ? u.apply(y, [y, z]) : {};
            if (w === false) {
                return
            }
            f(z.settings, w);
            z.lastVal = null;
            a.datepicker._lastInput = y;
            a.datepicker._setDateFromField(z);
            if (a.datepicker._inDialog) {
                y.value = ""
            }
            if (!a.datepicker._pos) {
                a.datepicker._pos = a.datepicker._findPos(y);
                a.datepicker._pos[1] += y.offsetHeight
            }
            A = false;
            a(y).parents().each(function() {
                A |= a(this).css("position") === "fixed";
                return !A
            });
            B = {
                left: a.datepicker._pos[0],
                top: a.datepicker._pos[1]
            };
            a.datepicker._pos = null;
            z.dpDiv.empty();
            z.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            });
            a.datepicker._updateDatepicker(z);
            B = a.datepicker._checkOffset(z, B, A);
            z.dpDiv.css({
                position: (a.datepicker._inDialog && a.blockUI ? "static" : (A ? "fixed" : "absolute")),
                display: "none",
                left: B.left + "px",
                top: B.top + "px"
            });
            if (!z.inline) {
                C = a.datepicker._get(z, "showAnim");
                x = a.datepicker._get(z, "duration");
                z.dpDiv.css("z-index", g(a(y)) + 1);
                a.datepicker._datepickerShowing = true;
                if (a.effects && a.effects.effect[C]) {
                    z.dpDiv.show(C, a.datepicker._get(z, "showOptions"), x)
                } else {
                    z.dpDiv[C || "show"](C ? x : null)
                }
                if (a.datepicker._shouldFocusInput(z)) {
                    z.input.focus()
                }
                a.datepicker._curInst = z
            }
        },
        _updateDatepicker: function(x) {
            this.maxRows = 4;
            i = x;
            x.dpDiv.empty().append(this._generateHTML(x));
            this._attachHandlers(x);
            var z, y = this._getNumberOfMonths(x),
                w = y[1],
                A = 17,
                u = x.dpDiv.find("." + this._dayOverClass + " a");
            if (u.length > 0) {
                h.apply(u.get(0))
            }
            x.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (w > 1) {
                x.dpDiv.addClass("ui-datepicker-multi-" + w).css("width", (A * w) + "em")
            }
            x.dpDiv[(y[0] !== 1 || y[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            x.dpDiv[(this._get(x, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (x === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(x)) {
                x.input.focus()
            }
            if (x.yearshtml) {
                z = x.yearshtml;
                setTimeout(function() {
                    if (z === x.yearshtml && x.yearshtml) {
                        x.dpDiv.find("select.ui-datepicker-year:first").replaceWith(x.yearshtml)
                    }
                    z = x.yearshtml = null
                }, 0)
            }
        },
        _shouldFocusInput: function(u) {
            return u.input && u.input.is(":visible") && !u.input.is(":disabled") && !u.input.is(":focus")
        },
        _checkOffset: function(z, B, A) {
            var w = z.dpDiv.outerWidth(),
                u = z.dpDiv.outerHeight(),
                y = z.input ? z.input.outerWidth() : 0,
                x = z.input ? z.input.outerHeight() : 0,
                D = document.documentElement.clientWidth + (A ? 0 : a(document).scrollLeft()),
                C = document.documentElement.clientHeight + (A ? 0 : a(document).scrollTop());
            B.left -= (this._get(z, "isRTL") ? (w - y) : 0);
            B.left -= (A && B.left === z.input.offset().left) ? a(document).scrollLeft() : 0;
            B.top -= (A && B.top === (z.input.offset().top + x)) ? a(document).scrollTop() : 0;
            B.left -= Math.min(B.left, (B.left + w > D && D > w) ? Math.abs(B.left + w - D) : 0);
            B.top -= Math.min(B.top, (B.top + u > C && C > u) ? Math.abs(u + x) : 0);
            return B
        },
        _findPos: function(x) {
            var y, u = this._getInst(x),
                w = this._get(u, "isRTL");
            while (x && (x.type === "hidden" || x.nodeType !== 1 || a.expr.filters.hidden(x))) {
                x = x[w ? "previousSibling" : "nextSibling"]
            }
            y = a(x).offset();
            return [y.left, y.top]
        },
        _hideDatepicker: function(w) {
            var A, u, z, y, x = this._curInst;
            if (!x || (w && x !== a.data(w, "datepicker"))) {
                return
            }
            if (this._datepickerShowing) {
                A = this._get(x, "showAnim");
                u = this._get(x, "duration");
                z = function() {
                    a.datepicker._tidyDialog(x)
                };
                if (a.effects && (a.effects.effect[A] || a.effects[A])) {
                    x.dpDiv.hide(A, a.datepicker._get(x, "showOptions"), u, z)
                } else {
                    x.dpDiv[(A === "slideDown" ? "slideUp" : (A === "fadeIn" ? "fadeOut" : "hide"))]((A ? u : null), z)
                }
                if (!A) {
                    z()
                }
                this._datepickerShowing = false;
                y = this._get(x, "onClose");
                if (y) {
                    y.apply((x.input ? x.input[0] : null), [(x.input ? x.input.val() : ""), x])
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    });
                    if (a.blockUI) {
                        a.unblockUI();
                        a("body").append(this.dpDiv)
                    }
                }
                this._inDialog = false
            }
        },
        _tidyDialog: function(u) {
            u.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(w) {
            if (!a.datepicker._curInst) {
                return
            }
            var u = a(w.target),
                x = a.datepicker._getInst(u[0]);
            if (((u[0].id !== a.datepicker._mainDivId && u.parents("#" + a.datepicker._mainDivId).length === 0 && !u.hasClass(a.datepicker.markerClassName) && !u.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && !(a.datepicker._inDialog && a.blockUI))) || (u.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== x)) {
                a.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(u, x, y) {
            var z = a(u),
                w = this._getInst(z[0]);
            if (this._isDisabledDatepicker(z[0])) {
                return
            }
            this._adjustInstDate(w, x + (y === "M" ? this._get(w, "showCurrentAtPos") : 0), y);
            this._updateDatepicker(w)
        },
        _gotoToday: function(w) {
            var u, y = a(w),
                x = this._getInst(y[0]);
            if (this._get(x, "gotoCurrent") && x.currentDay) {
                x.selectedDay = x.currentDay;
                x.drawMonth = x.selectedMonth = x.currentMonth;
                x.drawYear = x.selectedYear = x.currentYear
            } else {
                u = new Date();
                x.selectedDay = u.getDate();
                x.drawMonth = x.selectedMonth = u.getMonth();
                x.drawYear = x.selectedYear = u.getFullYear()
            }
            this._notifyChange(x);
            this._adjustDate(y)
        },
        _selectMonthYear: function(u, y, x) {
            var z = a(u),
                w = this._getInst(z[0]);
            w["selected" + (x === "M" ? "Month" : "Year")] = w["draw" + (x === "M" ? "Month" : "Year")] = parseInt(y.options[y.selectedIndex].value, 10);
            this._notifyChange(w);
            this._adjustDate(z)
        },
        _selectDay: function(u, x, A, z) {
            var w, y = a(u);
            if (a(z).hasClass(this._unselectableClass) || this._isDisabledDatepicker(y[0])) {
                return
            }
            w = this._getInst(y[0]);
            w.selectedDay = w.currentDay = a("a", z).html();
            w.selectedMonth = w.currentMonth = x;
            w.selectedYear = w.currentYear = A;
            this._selectDate(u, this._formatDate(w, w.currentDay, w.currentMonth, w.currentYear))
        },
        _clearDate: function(u) {
            var w = a(u);
            this._selectDate(w, "")
        },
        _selectDate: function(w, u) {
            var y, z = a(w),
                x = this._getInst(z[0]);
            u = (u != null ? u : this._formatDate(x));
            if (x.input) {
                x.input.val(u)
            }
            this._updateAlternate(x);
            y = this._get(x, "onSelect");
            if (y) {
                y.apply((x.input ? x.input[0] : null), [u, x])
            } else {
                if (x.input) {
                    x.input.trigger("change")
                }
            }
            if (x.inline) {
                this._updateDatepicker(x)
            } else {
                this._hideDatepicker();
                this._lastInput = x.input[0];
                if (typeof(x.input[0]) !== "object") {
                    x.input.focus()
                }
                this._lastInput = null
            }
        },
        _updateAlternate: function(z) {
            var w, x, y, u = this._get(z, "altField");
            if (u) {
                w = this._get(z, "altFormat") || this._get(z, "dateFormat");
                x = this._getDate(z);
                y = this.formatDate(w, x, this._getFormatConfig(z));
                a(u).each(function() {
                    a(this).val(y)
                })
            }
        },
        noWeekends: function(u) {
            var w = u.getDay();
            return [(w > 0 && w < 6), ""]
        },
        iso8601Week: function(w) {
            var x, u = new Date(w.getTime());
            u.setDate(u.getDate() + 4 - (u.getDay() || 7));
            x = u.getTime();
            u.setMonth(0);
            u.setDate(1);
            return Math.floor(Math.round((x - u) / 86400000) / 7) + 1
        },
        parseDate: function(D, Q, N) {
            if (D == null || Q == null) {
                throw "Invalid arguments"
            }
            Q = (typeof Q === "object" ? Q.toString() : Q + "");
            if (Q === "") {
                return null
            }
            var G, A, C, H = 0,
                P = (N ? N.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                O = (typeof P !== "string" ? P : new Date().getFullYear() % 100 + parseInt(P, 10)),
                z = (N ? N.dayNamesShort : null) || this._defaults.dayNamesShort,
                y = (N ? N.dayNames : null) || this._defaults.dayNames,
                M = (N ? N.monthNamesShort : null) || this._defaults.monthNamesShort,
                L = (N ? N.monthNames : null) || this._defaults.monthNames,
                R = -1,
                K = -1,
                x = -1,
                B = -1,
                I = false,
                w, J = function(S) {
                    var T = (G + 1 < D.length && D.charAt(G + 1) === S);
                    if (T) {
                        G++
                    }
                    return T
                },
                F = function(U) {
                    var T = J(U),
                        X = (U === "@" ? 14 : (U === "!" ? 20 : (U === "y" && T ? 4 : (U === "o" ? 3 : 2)))),
                        V = (U === "y" ? X : 1),
                        S = new RegExp("^\\d{" + V + "," + X + "}"),
                        W = Q.substring(H).match(S);
                    if (!W) {
                        throw "Missing number at position " + H
                    }
                    H += W[0].length;
                    return parseInt(W[0], 10)
                },
                E = function(U, W, T) {
                    var S = -1,
                        V = a.map(J(U) ? T : W, function(Y, X) {
                            return [
                                [X, Y]
                            ]
                        }).sort(function(X, Y) {
                            return -(X[1].length - Y[1].length)
                        });
                    a.each(V, function(X, Z) {
                        var Y = Z[1];
                        if (Q.substr(H, Y.length).toLowerCase() === Y.toLowerCase()) {
                            S = Z[0];
                            H += Y.length;
                            return false
                        }
                    });
                    if (S !== -1) {
                        return S + 1
                    } else {
                        throw "Unknown name at position " + H
                    }
                },
                u = function() {
                    if (Q.charAt(H) !== D.charAt(G)) {
                        throw "Unexpected literal at position " + H
                    }
                    H++
                };
            for (G = 0; G < D.length; G++) {
                if (I) {
                    if (D.charAt(G) === "'" && !J("'")) {
                        I = false
                    } else {
                        u()
                    }
                } else {
                    switch (D.charAt(G)) {
                        case "d":
                            x = F("d");
                            break;
                        case "D":
                            E("D", z, y);
                            break;
                        case "o":
                            B = F("o");
                            break;
                        case "m":
                            K = F("m");
                            break;
                        case "M":
                            K = E("M", M, L);
                            break;
                        case "y":
                            R = F("y");
                            break;
                        case "@":
                            w = new Date(F("@"));
                            R = w.getFullYear();
                            K = w.getMonth() + 1;
                            x = w.getDate();
                            break;
                        case "!":
                            w = new Date((F("!") - this._ticksTo1970) / 10000);
                            R = w.getFullYear();
                            K = w.getMonth() + 1;
                            x = w.getDate();
                            break;
                        case "'":
                            if (J("'")) {
                                u()
                            } else {
                                I = true
                            }
                            break;
                        default:
                            u()
                    }
                }
            }
            if (H < Q.length) {
                C = Q.substr(H);
                if (!/^\s+/.test(C)) {
                    throw "Extra/unparsed characters found in date: " + C
                }
            }
            if (R === -1) {
                R = new Date().getFullYear()
            } else {
                if (R < 100) {
                    R += new Date().getFullYear() - new Date().getFullYear() % 100 + (R <= O ? 0 : -100)
                }
            }
            if (B > -1) {
                K = 1;
                x = B;
                do {
                    A = this._getDaysInMonth(R, K - 1);
                    if (x <= A) {
                        break
                    }
                    K++;
                    x -= A
                } while (true)
            }
            w = this._daylightSavingAdjust(new Date(R, K - 1, x));
            if (w.getFullYear() !== R || w.getMonth() + 1 !== K || w.getDate() !== x) {
                throw "Invalid date"
            }
            return w
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
        formatDate: function(y, u, H) {
            if (!u) {
                return ""
            }
            var B, x = (H ? H.dayNamesShort : null) || this._defaults.dayNamesShort,
                w = (H ? H.dayNames : null) || this._defaults.dayNames,
                F = (H ? H.monthNamesShort : null) || this._defaults.monthNamesShort,
                E = (H ? H.monthNames : null) || this._defaults.monthNames,
                D = function(I) {
                    var J = (B + 1 < y.length && y.charAt(B + 1) === I);
                    if (J) {
                        B++
                    }
                    return J
                },
                A = function(J, L, I) {
                    var K = "" + L;
                    if (D(J)) {
                        while (K.length < I) {
                            K = "0" + K
                        }
                    }
                    return K
                },
                z = function(J, L, K, I) {
                    return (D(J) ? I[L] : K[L])
                },
                G = "",
                C = false;
            if (u) {
                for (B = 0; B < y.length; B++) {
                    if (C) {
                        if (y.charAt(B) === "'" && !D("'")) {
                            C = false
                        } else {
                            G += y.charAt(B)
                        }
                    } else {
                        switch (y.charAt(B)) {
                            case "d":
                                G += A("d", u.getDate(), 2);
                                break;
                            case "D":
                                G += z("D", u.getDay(), x, w);
                                break;
                            case "o":
                                G += A("o", Math.round((new Date(u.getFullYear(), u.getMonth(), u.getDate()).getTime() - new Date(u.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case "m":
                                G += A("m", u.getMonth() + 1, 2);
                                break;
                            case "M":
                                G += z("M", u.getMonth(), F, E);
                                break;
                            case "y":
                                G += (D("y") ? u.getFullYear() : (u.getYear() % 100 < 10 ? "0" : "") + u.getYear() % 100);
                                break;
                            case "@":
                                G += u.getTime();
                                break;
                            case "!":
                                G += u.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if (D("'")) {
                                    G += "'"
                                } else {
                                    C = true
                                }
                                break;
                            default:
                                G += y.charAt(B)
                        }
                    }
                }
            }
            return G
        },
        _possibleChars: function(w) {
            var x, u = "",
                y = false,
                z = function(A) {
                    var B = (x + 1 < w.length && w.charAt(x + 1) === A);
                    if (B) {
                        x++
                    }
                    return B
                };
            for (x = 0; x < w.length; x++) {
                if (y) {
                    if (w.charAt(x) === "'" && !z("'")) {
                        y = false
                    } else {
                        u += w.charAt(x)
                    }
                } else {
                    switch (w.charAt(x)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            u += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            if (z("'")) {
                                u += "'"
                            } else {
                                y = true
                            }
                            break;
                        default:
                            u += w.charAt(x)
                    }
                }
            }
            return u
        },
        _get: function(u, w) {
            return u.settings[w] !== undefined ? u.settings[w] : this._defaults[w]
        },
        _setDateFromField: function(A, B) {
            if (A.input.val() === A.lastVal) {
                return
            }
            var w = this._get(A, "dateFormat"),
                x = A.lastVal = A.input ? A.input.val() : null,
                y = this._getDefaultDate(A),
                u = y,
                C = this._getFormatConfig(A);
            try {
                u = this.parseDate(w, x, C) || y
            } catch (z) {
                x = (B ? "" : x)
            }
            A.selectedDay = u.getDate();
            A.drawMonth = A.selectedMonth = u.getMonth();
            A.drawYear = A.selectedYear = u.getFullYear();
            A.currentDay = (x ? u.getDate() : 0);
            A.currentMonth = (x ? u.getMonth() : 0);
            A.currentYear = (x ? u.getFullYear() : 0);
            this._adjustInstDate(A)
        },
        _getDefaultDate: function(u) {
            return this._restrictMinMax(u, this._determineDate(u, this._get(u, "defaultDate"), new Date()))
        },
        _determineDate: function(x, u, w) {
            var z = function(C) {
                    var B = new Date();
                    B.setDate(B.getDate() + C);
                    return B
                },
                A = function(G) {
                    try {
                        return a.datepicker.parseDate(a.datepicker._get(x, "dateFormat"), G, a.datepicker._getFormatConfig(x))
                    } catch (D) {}
                    var B = (G.toLowerCase().match(/^c/) ? a.datepicker._getDate(x) : null) || new Date(),
                        I = B.getFullYear(),
                        F = B.getMonth(),
                        C = B.getDate(),
                        H = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        E = H.exec(G);
                    while (E) {
                        switch (E[2] || "d") {
                            case "d":
                            case "D":
                                C += parseInt(E[1], 10);
                                break;
                            case "w":
                            case "W":
                                C += parseInt(E[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                F += parseInt(E[1], 10);
                                C = Math.min(C, a.datepicker._getDaysInMonth(I, F));
                                break;
                            case "y":
                            case "Y":
                                I += parseInt(E[1], 10);
                                C = Math.min(C, a.datepicker._getDaysInMonth(I, F));
                                break
                        }
                        E = H.exec(G)
                    }
                    return new Date(I, F, C)
                },
                y = (u == null || u === "" ? w : (typeof u === "string" ? A(u) : (typeof u === "number" ? (isNaN(u) ? w : z(u)) : new Date(u.getTime()))));
            y = (y && y.toString() === "Invalid Date" ? w : y);
            if (y) {
                y.setHours(0);
                y.setMinutes(0);
                y.setSeconds(0);
                y.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(y)
        },
        _daylightSavingAdjust: function(u) {
            if (!u) {
                return null
            }
            u.setHours(u.getHours() > 12 ? u.getHours() + 2 : 0);
            return u
        },
        _setDate: function(x, w, z) {
            var u = !w,
                A = x.selectedMonth,
                B = x.selectedYear,
                y = this._restrictMinMax(x, this._determineDate(x, w, new Date()));
            x.selectedDay = x.currentDay = y.getDate();
            x.drawMonth = x.selectedMonth = x.currentMonth = y.getMonth();
            x.drawYear = x.selectedYear = x.currentYear = y.getFullYear();
            if ((A !== x.selectedMonth || B !== x.selectedYear) && !z) {
                this._notifyChange(x)
            }
            this._adjustInstDate(x);
            if (x.input) {
                x.input.val(u ? "" : this._formatDate(x))
            }
        },
        _getDate: function(u) {
            var w = (!u.currentYear || (u.input && u.input.val() === "") ? null : this._daylightSavingAdjust(new Date(u.currentYear, u.currentMonth, u.currentDay)));
            return w
        },
        _attachHandlers: function(w) {
            var x = this._get(w, "stepMonths"),
                u = "#" + w.id.replace(/\\\\/g, "\\");
            w.dpDiv.find("[data-handler]").map(function() {
                var y = {
                    prev: function() {
                        a.datepicker._adjustDate(u, -x, "M")
                    },
                    next: function() {
                        a.datepicker._adjustDate(u, +x, "M")
                    },
                    hide: function() {
                        a.datepicker._hideDatepicker()
                    },
                    today: function() {
                        a.datepicker._gotoToday(u)
                    },
                    selectDay: function() {
                        a.datepicker._selectDay(u, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false
                    },
                    selectMonth: function() {
                        a.datepicker._selectMonthYear(u, this, "M");
                        return false
                    },
                    selectYear: function() {
                        a.datepicker._selectMonthYear(u, this, "Y");
                        return false
                    }
                };
                a(this).bind(this.getAttribute("data-event"), y[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(T) {
            var Y, aj, ai, ae, ad, C, P, z, w, O, ar, F, G, aa, ab, u, aq, an, J, S, K, al, Q, y, am, A, x, aw, E, I, W, D, ag, ak, N, au, H, ah, ay, av = new Date(),
                ax = this._daylightSavingAdjust(new Date(av.getFullYear(), av.getMonth(), av.getDate())),
                V = this._get(T, "isRTL"),
                ao = this._get(T, "showButtonPanel"),
                R = this._get(T, "hideIfNoPrevNext"),
                ac = this._get(T, "navigationAsDateFormat"),
                af = this._getNumberOfMonths(T),
                ap = this._get(T, "showCurrentAtPos"),
                at = this._get(T, "stepMonths"),
                U = (af[0] !== 1 || af[1] !== 1),
                B = this._daylightSavingAdjust((!T.currentDay ? new Date(9999, 9, 9) : new Date(T.currentYear, T.currentMonth, T.currentDay))),
                Z = this._getMinMaxDate(T, "min"),
                X = this._getMinMaxDate(T, "max"),
                L = T.drawMonth - ap,
                M = T.drawYear;
            if (L < 0) {
                L += 12;
                M--
            }
            if (X) {
                Y = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - (af[0] * af[1]) + 1, X.getDate()));
                Y = (Z && Y < Z ? Z : Y);
                while (this._daylightSavingAdjust(new Date(M, L, 1)) > Y) {
                    L--;
                    if (L < 0) {
                        L = 11;
                        M--
                    }
                }
            }
            T.drawMonth = L;
            T.drawYear = M;
            aj = this._get(T, "prevText");
            aj = (!ac ? aj : this.formatDate(aj, this._daylightSavingAdjust(new Date(M, L - at, 1)), this._getFormatConfig(T)));
            ai = (this._canAdjustMonth(T, -1, M, L) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + aj + "'><span class='ui-icon ui-icon-circle-triangle-" + (V ? "e" : "w") + "'>" + aj + "</span></a>" : (R ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + aj + "'><span class='ui-icon ui-icon-circle-triangle-" + (V ? "e" : "w") + "'>" + aj + "</span></a>"));
            ae = this._get(T, "nextText");
            ae = (!ac ? ae : this.formatDate(ae, this._daylightSavingAdjust(new Date(M, L + at, 1)), this._getFormatConfig(T)));
            ad = (this._canAdjustMonth(T, +1, M, L) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + ae + "'><span class='ui-icon ui-icon-circle-triangle-" + (V ? "w" : "e") + "'>" + ae + "</span></a>" : (R ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + ae + "'><span class='ui-icon ui-icon-circle-triangle-" + (V ? "w" : "e") + "'>" + ae + "</span></a>"));
            C = this._get(T, "currentText");
            P = (this._get(T, "gotoCurrent") && T.currentDay ? B : ax);
            C = (!ac ? C : this.formatDate(C, P, this._getFormatConfig(T)));
            z = (!T.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(T, "closeText") + "</button>" : "");
            w = (ao) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (V ? z : "") + (this._isInRange(T, P) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + C + "</button>" : "") + (V ? "" : z) + "</div>" : "";
            O = parseInt(this._get(T, "firstDay"), 10);
            O = (isNaN(O) ? 0 : O);
            ar = this._get(T, "showWeek");
            F = this._get(T, "dayNames");
            G = this._get(T, "dayNamesMin");
            aa = this._get(T, "monthNames");
            ab = this._get(T, "monthNamesShort");
            u = this._get(T, "beforeShowDay");
            aq = this._get(T, "showOtherMonths");
            an = this._get(T, "selectOtherMonths");
            J = this._getDefaultDate(T);
            S = "";
            K;
            for (al = 0; al < af[0]; al++) {
                Q = "";
                this.maxRows = 4;
                for (y = 0; y < af[1]; y++) {
                    am = this._daylightSavingAdjust(new Date(M, L, T.selectedDay));
                    A = " ui-corner-all";
                    x = "";
                    if (U) {
                        x += "<div class='ui-datepicker-group";
                        if (af[1] > 1) {
                            switch (y) {
                                case 0:
                                    x += " ui-datepicker-group-first";
                                    A = " ui-corner-" + (V ? "right" : "left");
                                    break;
                                case af[1] - 1:
                                    x += " ui-datepicker-group-last";
                                    A = " ui-corner-" + (V ? "left" : "right");
                                    break;
                                default:
                                    x += " ui-datepicker-group-middle";
                                    A = "";
                                    break
                            }
                        }
                        x += "'>"
                    }
                    x += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && al === 0 ? (V ? ad : ai) : "") + (/all|right/.test(A) && al === 0 ? (V ? ai : ad) : "") + this._generateMonthYearHeader(T, L, M, Z, X, al > 0 || y > 0, aa, ab) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    aw = (ar ? "<th class='ui-datepicker-week-col'>" + this._get(T, "weekHeader") + "</th>" : "");
                    for (K = 0; K < 7; K++) {
                        E = (K + O) % 7;
                        aw += "<th scope='col'" + ((K + O + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + F[E] + "'>" + G[E] + "</span></th>"
                    }
                    x += aw + "</tr></thead><tbody>";
                    I = this._getDaysInMonth(M, L);
                    if (M === T.selectedYear && L === T.selectedMonth) {
                        T.selectedDay = Math.min(T.selectedDay, I)
                    }
                    W = (this._getFirstDayOfMonth(M, L) - O + 7) % 7;
                    D = Math.ceil((W + I) / 7);
                    ag = (U ? this.maxRows > D ? this.maxRows : D : D);
                    this.maxRows = ag;
                    ak = this._daylightSavingAdjust(new Date(M, L, 1 - W));
                    for (N = 0; N < ag; N++) {
                        x += "<tr>";
                        au = (!ar ? "" : "<td class='ui-datepicker-week-col'>" + this._get(T, "calculateWeek")(ak) + "</td>");
                        for (K = 0; K < 7; K++) {
                            H = (u ? u.apply((T.input ? T.input[0] : null), [ak]) : [true, ""]);
                            ah = (ak.getMonth() !== L);
                            ay = (ah && !an) || !H[0] || (Z && ak < Z) || (X && ak > X);
                            au += "<td class='" + ((K + O + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (ah ? " ui-datepicker-other-month" : "") + ((ak.getTime() === am.getTime() && L === T.selectedMonth && T._keyEvent) || (J.getTime() === ak.getTime() && J.getTime() === am.getTime()) ? " " + this._dayOverClass : "") + (ay ? " " + this._unselectableClass + " ui-state-disabled" : "") + (ah && !aq ? "" : " " + H[1] + (ak.getTime() === B.getTime() ? " " + this._currentClass : "") + (ak.getTime() === ax.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!ah || aq) && H[2] ? " title='" + H[2].replace(/'/g, "&#39;") + "'" : "") + (ay ? "" : " data-handler='selectDay' data-event='click' data-month='" + ak.getMonth() + "' data-year='" + ak.getFullYear() + "'") + ">" + (ah && !aq ? "&#xa0;" : (ay ? "<span class='ui-state-default'>" + ak.getDate() + "</span>" : "<a class='ui-state-default" + (ak.getTime() === ax.getTime() ? " ui-state-highlight" : "") + (ak.getTime() === B.getTime() ? " ui-state-active" : "") + (ah ? " ui-priority-secondary" : "") + "' href='#'>" + ak.getDate() + "</a>")) + "</td>";
                            ak.setDate(ak.getDate() + 1);
                            ak = this._daylightSavingAdjust(ak)
                        }
                        x += au + "</tr>"
                    }
                    L++;
                    if (L > 11) {
                        L = 0;
                        M++
                    }
                    x += "</tbody></table>" + (U ? "</div>" + ((af[0] > 0 && y === af[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    Q += x
                }
                S += Q
            }
            S += w;
            T._keyEvent = false;
            return S
        },
        _generateMonthYearHeader: function(E, y, z, G, F, L, J, K) {
            var D, C, H, P, N, x, O, A, u = this._get(E, "changeMonth"),
                w = this._get(E, "changeYear"),
                M = this._get(E, "showMonthAfterYear"),
                B = "<div class='ui-datepicker-title'>",
                I = "";
            if (L || !u) {
                I += "<span class='ui-datepicker-month'>" + J[y] + "</span>"
            } else {
                D = (G && G.getFullYear() === z);
                C = (F && F.getFullYear() === z);
                I += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (H = 0; H < 12; H++) {
                    if ((!D || H >= G.getMonth()) && (!C || H <= F.getMonth())) {
                        I += "<option value='" + H + "'" + (H === y ? " selected='selected'" : "") + ">" + K[H] + "</option>"
                    }
                }
                I += "</select>"
            }
            if (!M) {
                B += I + (L || !(u && w) ? "&#xa0;" : "")
            }
            if (!E.yearshtml) {
                E.yearshtml = "";
                if (L || !w) {
                    B += "<span class='ui-datepicker-year'>" + z + "</span>"
                } else {
                    P = this._get(E, "yearRange").split(":");
                    N = new Date().getFullYear();
                    x = function(Q) {
                        var R = (Q.match(/c[+\-].*/) ? z + parseInt(Q.substring(1), 10) : (Q.match(/[+\-].*/) ? N + parseInt(Q, 10) : parseInt(Q, 10)));
                        return (isNaN(R) ? N : R)
                    };
                    O = x(P[0]);
                    A = Math.max(O, x(P[1] || ""));
                    O = (G ? Math.max(O, G.getFullYear()) : O);
                    A = (F ? Math.min(A, F.getFullYear()) : A);
                    E.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; O <= A; O++) {
                        E.yearshtml += "<option value='" + O + "'" + (O === z ? " selected='selected'" : "") + ">" + O + "</option>"
                    }
                    E.yearshtml += "</select>";
                    B += E.yearshtml;
                    E.yearshtml = null
                }
            }
            B += this._get(E, "yearSuffix");
            if (M) {
                B += (L || !(u && w) ? "&#xa0;" : "") + I
            }
            B += "</div>";
            return B
        },
        _adjustInstDate: function(x, z, A) {
            var B = x.drawYear + (A === "Y" ? z : 0),
                y = x.drawMonth + (A === "M" ? z : 0),
                w = Math.min(x.selectedDay, this._getDaysInMonth(B, y)) + (A === "D" ? z : 0),
                u = this._restrictMinMax(x, this._daylightSavingAdjust(new Date(B, y, w)));
            x.selectedDay = u.getDate();
            x.drawMonth = x.selectedMonth = u.getMonth();
            x.drawYear = x.selectedYear = u.getFullYear();
            if (A === "M" || A === "Y") {
                this._notifyChange(x)
            }
        },
        _restrictMinMax: function(w, u) {
            var y = this._getMinMaxDate(w, "min"),
                x = this._getMinMaxDate(w, "max"),
                z = (y && u < y ? y : u);
            return (x && z > x ? x : z)
        },
        _notifyChange: function(u) {
            var w = this._get(u, "onChangeMonthYear");
            if (w) {
                w.apply((u.input ? u.input[0] : null), [u.selectedYear, u.selectedMonth + 1, u])
            }
        },
        _getNumberOfMonths: function(u) {
            var w = this._get(u, "numberOfMonths");
            return (w == null ? [1, 1] : (typeof w === "number" ? [1, w] : w))
        },
        _getMinMaxDate: function(u, w) {
            return this._determineDate(u, this._get(u, w + "Date"), null)
        },
        _getDaysInMonth: function(w, u) {
            return 32 - this._daylightSavingAdjust(new Date(w, u, 32)).getDate()
        },
        _getFirstDayOfMonth: function(w, u) {
            return new Date(w, u, 1).getDay()
        },
        _canAdjustMonth: function(y, A, w, u) {
            var z = this._getNumberOfMonths(y),
                x = this._daylightSavingAdjust(new Date(w, u + (A < 0 ? A : z[0] * z[1]), 1));
            if (A < 0) {
                x.setDate(this._getDaysInMonth(x.getFullYear(), x.getMonth()))
            }
            return this._isInRange(y, x)
        },
        _isInRange: function(x, w) {
            var D, u, A = this._getMinMaxDate(x, "min"),
                y = this._getMinMaxDate(x, "max"),
                B = null,
                z = null,
                C = this._get(x, "yearRange");
            if (C) {
                D = C.split(":");
                u = new Date().getFullYear();
                B = parseInt(D[0], 10);
                z = parseInt(D[1], 10);
                if (D[0].match(/[+\-].*/)) {
                    B += u
                }
                if (D[1].match(/[+\-].*/)) {
                    z += u
                }
            }
            return ((!A || w.getTime() >= A.getTime()) && (!y || w.getTime() <= y.getTime()) && (!B || w.getFullYear() >= B) && (!z || w.getFullYear() <= z))
        },
        _getFormatConfig: function(u) {
            var w = this._get(u, "shortYearCutoff");
            w = (typeof w !== "string" ? w : new Date().getFullYear() % 100 + parseInt(w, 10));
            return {
                shortYearCutoff: w,
                dayNamesShort: this._get(u, "dayNamesShort"),
                dayNames: this._get(u, "dayNames"),
                monthNamesShort: this._get(u, "monthNamesShort"),
                monthNames: this._get(u, "monthNames")
            }
        },
        _formatDate: function(x, w, y, z) {
            if (!w) {
                x.currentDay = x.selectedDay;
                x.currentMonth = x.selectedMonth;
                x.currentYear = x.selectedYear
            }
            var u = (w ? (typeof w === "object" ? w : this._daylightSavingAdjust(new Date(z, y, w))) : this._daylightSavingAdjust(new Date(x.currentYear, x.currentMonth, x.currentDay)));
            return this.formatDate(this._get(x, "dateFormat"), u, this._getFormatConfig(x))
        }
    });

    function e(u) {
        var w = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return u.delegate(w, "mouseout", function() {
            a(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                a(this).removeClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                a(this).removeClass("ui-datepicker-next-hover")
            }
        }).delegate(w, "mouseover", h)
    }

    function h() {
        if (!a.datepicker._isDisabledDatepicker(i.inline ? i.dpDiv.parent()[0] : i.input[0])) {
            a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            a(this).addClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                a(this).addClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                a(this).addClass("ui-datepicker-next-hover")
            }
        }
    }

    function f(x, w) {
        a.extend(x, w);
        for (var u in w) {
            if (w[u] == null) {
                x[u] = w[u]
            }
        }
        return x
    }
    a.fn.datepicker = function(u) {
        if (!this.length) {
            return this
        }
        if (!a.datepicker.initialized) {
            a(document).mousedown(a.datepicker._checkExternalClick);
            a.datepicker.initialized = true
        }
        if (a("#" + a.datepicker._mainDivId).length === 0) {
            a("body").append(a.datepicker.dpDiv)
        }
        var w = Array.prototype.slice.call(arguments, 1);
        if (typeof u === "string" && (u === "isDisabled" || u === "getDate" || u === "widget")) {
            return a.datepicker["_" + u + "Datepicker"].apply(a.datepicker, [this[0]].concat(w))
        }
        if (u === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return a.datepicker["_" + u + "Datepicker"].apply(a.datepicker, [this[0]].concat(w))
        }
        return this.each(function() {
            typeof u === "string" ? a.datepicker["_" + u + "Datepicker"].apply(a.datepicker, [this].concat(w)) : a.datepicker._attachDatepicker(this, u)
        })
    };
    a.datepicker = new d();
    a.datepicker.initialized = false;
    a.datepicker.uuid = new Date().getTime();
    a.datepicker.version = "1.11.2";
    var c = a.datepicker
}));
/*
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function(a) {
    a.support.touch = "ontouchend" in document;
    if (!a.support.touch) {
        return
    }
    var d = a.ui.mouse.prototype,
        c = d._mouseInit,
        b = d._mouseDestroy,
        f;

    function e(g, i) {
        if (g.originalEvent.touches.length > 1) {
            return
        }
        g.preventDefault();
        var j = g.originalEvent.changedTouches[0],
            h = document.createEvent("MouseEvents");
        h.initMouseEvent(i, true, true, window, 1, j.screenX, j.screenY, j.clientX, j.clientY, false, false, false, false, 0, null);
        g.target.dispatchEvent(h)
    }
    d._touchStart = function(g) {
        var h = this;
        if (f || !h._mouseCapture(g.originalEvent.changedTouches[0])) {
            return
        }
        f = true;
        h._touchMoved = false;
        e(g, "mouseover");
        e(g, "mousemove");
        e(g, "mousedown")
    };
    d._touchMove = function(g) {
        if (!f) {
            return
        }
        this._touchMoved = true;
        e(g, "mousemove")
    };
    d._touchEnd = function(g) {
        if (!f) {
            return
        }
        e(g, "mouseup");
        e(g, "mouseout");
        if (!this._touchMoved) {
            e(g, "click")
        }
        f = false
    };
    d._mouseInit = function() {
        var g = this;
        g.element.bind({
            touchstart: a.proxy(g, "_touchStart"),
            touchmove: a.proxy(g, "_touchMove"),
            touchend: a.proxy(g, "_touchEnd")
        });
        c.call(g)
    };
    d._mouseDestroy = function() {
        var g = this;
        g.element.unbind({
            touchstart: a.proxy(g, "_touchStart"),
            touchmove: a.proxy(g, "_touchMove"),
            touchend: a.proxy(g, "_touchEnd")
        });
        b.call(g)
    }
})(jQuery);
(function() {
    var c;
    var e = function() {};
    var d = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
    var b = d.length;
    var a = (window.console = window.console || {});
    while (b--) {
        c = d[b];
        if (!a[c]) {
            a[c] = e
        }
    }
}());
/* Magnific Popup - v0.9.9 - 2013-12-27
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function(a) {
    var H = "Close",
        F = "BeforeClose",
        C = "AfterClose",
        E = "BeforeAppend",
        O = "MarkupParse",
        R = "Open",
        G = "Change",
        Q = "mfp",
        I = "." + Q,
        T = "mfp-ready",
        U = "mfp-removing",
        S = "mfp-prevent-close";
    var P, N = function() {},
        q = !!(window.jQuery),
        w, A = a(window),
        c, g, u, B, e;
    var s = function(Y, X) {
            P.ev.on(Q + Y + I, X)
        },
        k = function(Y, X, aa, ab) {
            var Z = document.createElement("div");
            Z.className = "mfp-" + Y;
            if (aa) {
                Z.innerHTML = aa
            }
            if (!ab) {
                Z = a(Z);
                if (X) {
                    Z.appendTo(X)
                }
            } else {
                if (X) {
                    X.appendChild(Z)
                }
            }
            return Z
        },
        t = function(Y, X) {
            P.ev.triggerHandler(Q + Y, X);
            if (P.st.callbacks) {
                Y = Y.charAt(0).toLowerCase() + Y.slice(1);
                if (P.st.callbacks[Y]) {
                    P.st.callbacks[Y].apply(P, a.isArray(X) ? X : [X])
                }
            }
        },
        j = function(X) {
            if (X !== e || !P.currTemplate.closeBtn) {
                P.currTemplate.closeBtn = a(P.st.closeMarkup.replace("%title%", P.st.tClose));
                e = X
            }
            return P.currTemplate.closeBtn
        },
        d = function() {
            if (!a.magnificPopup.instance) {
                P = new N();
                P.init();
                a.magnificPopup.instance = P
            }
        },
        W = function() {
            var X = document.createElement("p").style,
                Y = ["ms", "O", "Moz", "Webkit"];
            if (X.transition !== undefined) {
                return true
            }
            while (Y.length) {
                if (Y.pop() + "Transition" in X) {
                    return true
                }
            }
            return false
        };
    N.prototype = {
        constructor: N,
        init: function() {
            var X = navigator.appVersion;
            P.isIE7 = X.indexOf("MSIE 7.") !== -1;
            P.isIE8 = X.indexOf("MSIE 8.") !== -1;
            P.isLowIE = P.isIE7 || P.isIE8;
            P.isAndroid = (/android/gi).test(X);
            P.isIOS = (/iphone|ipad|ipod/gi).test(X);
            P.supportsTransition = W();
            P.probablyMobile = (P.isAndroid || P.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
            g = a(document);
            P.popupsCache = {}
        },
        open: function(Y) {
            if (!c) {
                c = a(document.body)
            }
            var Z;
            if (Y.isObj === false) {
                P.items = Y.items.toArray();
                P.index = 0;
                var ab = Y.items,
                    aa;
                for (Z = 0; Z < ab.length; Z++) {
                    aa = ab[Z];
                    if (aa.parsed) {
                        aa = aa.el[0]
                    }
                    if (aa === Y.el[0]) {
                        P.index = Z;
                        break
                    }
                }
            } else {
                P.items = a.isArray(Y.items) ? Y.items : [Y.items];
                P.index = Y.index || 0
            }
            if (P.isOpen) {
                P.updateItemHTML();
                return
            }
            P.types = [];
            B = "";
            if (Y.mainEl && Y.mainEl.length) {
                P.ev = Y.mainEl.eq(0)
            } else {
                P.ev = g
            }
            if (Y.key) {
                if (!P.popupsCache[Y.key]) {
                    P.popupsCache[Y.key] = {}
                }
                P.currTemplate = P.popupsCache[Y.key]
            } else {
                P.currTemplate = {}
            }
            P.st = a.extend(true, {}, a.magnificPopup.defaults, Y);
            P.fixedContentPos = P.st.fixedContentPos === "auto" ? !P.probablyMobile : P.st.fixedContentPos;
            if (P.st.modal) {
                P.st.closeOnContentClick = false;
                P.st.closeOnBgClick = false;
                P.st.showCloseBtn = false;
                P.st.enableEscapeKey = false
            }
            if (!P.bgOverlay) {
                P.bgOverlay = k("bg").on("click" + I, function() {
                    P.close()
                });
                P.wrap = k("wrap").attr("tabindex", -1).on("click" + I, function(ah) {
                    if (P._checkIfClose(ah.target)) {
                        P.close()
                    }
                });
                P.container = k("container", P.wrap)
            }
            P.contentContainer = k("content");
            if (P.st.preloader) {
                P.preloader = k("preloader", P.container, P.st.tLoading)
            }
            var ac = a.magnificPopup.modules;
            for (Z = 0; Z < ac.length; Z++) {
                var ad = ac[Z];
                ad = ad.charAt(0).toUpperCase() + ad.slice(1);
                P["init" + ad].call(P)
            }
            t("BeforeOpen");
            if (P.st.showCloseBtn) {
                if (!P.st.closeBtnInside) {
                    P.wrap.append(j())
                } else {
                    s(O, function(ah, aj, ak, ai) {
                        ak.close_replaceWith = j(ai.type)
                    });
                    B += " mfp-close-btn-in"
                }
            }
            if (P.st.alignTop) {
                B += " mfp-align-top"
            }
            if (P.fixedContentPos) {
                P.wrap.css({
                    overflow: P.st.overflowY,
                    overflowX: "hidden",
                    overflowY: P.st.overflowY
                })
            } else {
                P.wrap.css({
                    top: A.scrollTop(),
                    position: "absolute"
                })
            }
            if (P.st.fixedBgPos === false || (P.st.fixedBgPos === "auto" && !P.fixedContentPos)) {
                P.bgOverlay.css({
                    height: g.height(),
                    position: "absolute"
                })
            }
            if (P.st.enableEscapeKey) {
                g.on("keyup" + I, function(ah) {
                    if (ah.keyCode === 27) {
                        P.close()
                    }
                })
            }
            A.on("resize" + I, function() {
                P.updateSize()
            });
            if (!P.st.closeOnContentClick) {
                B += " mfp-auto-cursor"
            }
            if (B) {
                P.wrap.addClass(B)
            }
            var af = P.wH = A.height();
            var ag = {};
            if (P.fixedContentPos) {
                if (P._hasScrollBar(af)) {
                    var ae = P._getScrollbarSize();
                    if (ae) {
                        ag.marginRight = ae
                    }
                }
            }
            if (P.fixedContentPos) {
                if (!P.isIE7) {
                    ag.overflow = "hidden"
                } else {
                    a("body, html").css("overflow", "hidden")
                }
            }
            var X = P.st.mainClass;
            if (P.isIE7) {
                X += " mfp-ie7"
            }
            if (X) {
                P._addClassToMFP(X)
            }
            P.updateItemHTML();
            t("BuildControls");
            a("html").css(ag);
            P.bgOverlay.add(P.wrap).prependTo(P.st.prependTo || c);
            P._lastFocusedEl = document.activeElement;
            setTimeout(function() {
                if (P.content) {
                    P._addClassToMFP(T);
                    P._setFocus()
                } else {
                    P.bgOverlay.addClass(T)
                }
                g.on("focusin" + I, P._onFocusIn)
            }, 16);
            P.isOpen = true;
            P.updateSize(af);
            t(R);
            return Y
        },
        close: function() {
            if (!P.isOpen) {
                return
            }
            t(F);
            P.isOpen = false;
            if (P.st.removalDelay && !P.isLowIE && P.supportsTransition) {
                P._addClassToMFP(U);
                setTimeout(function() {
                    P._close()
                }, P.st.removalDelay)
            } else {
                P._close()
            }
        },
        _close: function() {
            t(H);
            var X = U + " " + T + " ";
            P.bgOverlay.detach();
            P.wrap.detach();
            P.container.empty();
            if (P.st.mainClass) {
                X += P.st.mainClass + " "
            }
            P._removeClassFromMFP(X);
            if (P.fixedContentPos) {
                var Y = {
                    marginRight: ""
                };
                if (P.isIE7) {
                    a("body, html").css("overflow", "")
                } else {
                    Y.overflow = ""
                }
                a("html").css(Y)
            }
            g.off("keyup" + I + " focusin" + I);
            P.ev.off(I);
            P.wrap.attr("class", "mfp-wrap").removeAttr("style");
            P.bgOverlay.attr("class", "mfp-bg");
            P.container.attr("class", "mfp-container");
            if (P.st.showCloseBtn && (!P.st.closeBtnInside || P.currTemplate[P.currItem.type] === true)) {
                if (P.currTemplate.closeBtn) {
                    P.currTemplate.closeBtn.detach()
                }
            }
            if (P._lastFocusedEl) {
                a(P._lastFocusedEl).focus()
            }
            P.currItem = null;
            P.content = null;
            P.currTemplate = null;
            P.prevHeight = 0;
            t(C)
        },
        updateSize: function(Y) {
            if (P.isIOS) {
                var Z = document.documentElement.clientWidth / window.innerWidth;
                var X = window.innerHeight * Z;
                P.wrap.css("height", X);
                P.wH = X
            } else {
                P.wH = Y || A.height()
            }
            if (!P.fixedContentPos) {
                P.wrap.css("height", P.wH)
            }
            t("Resize")
        },
        updateItemHTML: function() {
            var X = P.items[P.index];
            P.contentContainer.detach();
            if (P.content) {
                P.content.detach()
            }
            if (!X.parsed) {
                X = P.parseEl(P.index)
            }
            var aa = X.type;
            t("BeforeChange", [P.currItem ? P.currItem.type : "", aa]);
            P.currItem = X;
            if (!P.currTemplate[aa]) {
                var Y = P.st[aa] ? P.st[aa].markup : false;
                t("FirstMarkupParse", Y);
                if (Y) {
                    P.currTemplate[aa] = a(Y)
                } else {
                    P.currTemplate[aa] = true
                }
            }
            if (u && u !== X.type) {
                P.container.removeClass("mfp-" + u + "-holder")
            }
            var Z = P["get" + aa.charAt(0).toUpperCase() + aa.slice(1)](X, P.currTemplate[aa]);
            P.appendContent(Z, aa);
            X.preloaded = true;
            t(G, X);
            u = X.type;
            P.container.prepend(P.contentContainer);
            t("AfterChange")
        },
        appendContent: function(X, Y) {
            P.content = X;
            if (X) {
                if (P.st.showCloseBtn && P.st.closeBtnInside && P.currTemplate[Y] === true) {
                    if (!P.content.find(".mfp-close").length) {
                        P.content.append(j())
                    }
                } else {
                    P.content = X
                }
            } else {
                P.content = ""
            }
            t(E);
            P.container.addClass("mfp-" + Y + "-holder");
            P.contentContainer.append(P.content)
        },
        parseEl: function(Y) {
            var Z = P.items[Y],
                aa;
            if (Z.tagName) {
                Z = {
                    el: a(Z)
                }
            } else {
                aa = Z.type;
                Z = {
                    data: Z,
                    src: Z.src
                }
            }
            if (Z.el) {
                var ab = P.types;
                for (var X = 0; X < ab.length; X++) {
                    if (Z.el.hasClass("mfp-" + ab[X])) {
                        aa = ab[X];
                        break
                    }
                }
                Z.src = Z.el.attr("data-mfp-src");
                if (!Z.src) {
                    Z.src = Z.el.attr("href")
                }
            }
            Z.type = aa || P.st.type || "inline";
            Z.index = Y;
            Z.parsed = true;
            P.items[Y] = Z;
            t("ElementParse", Z);
            return P.items[Y]
        },
        addGroup: function(Y, aa) {
            var X = function(ab) {
                ab.mfpEl = this;
                P._openClick(ab, Y, aa)
            };
            if (!aa) {
                aa = {}
            }
            var Z = "click.magnificPopup";
            aa.mainEl = Y;
            if (aa.items) {
                aa.isObj = true;
                Y.off(Z).on(Z, X)
            } else {
                aa.isObj = false;
                if (aa.delegate) {
                    Y.off(Z).on(Z, aa.delegate, X)
                } else {
                    aa.items = Y;
                    Y.off(Z).on(Z, X)
                }
            }
        },
        _openClick: function(Y, Z, ab) {
            var aa = ab.midClick !== undefined ? ab.midClick : a.magnificPopup.defaults.midClick;
            if (!aa && (Y.which === 2 || Y.ctrlKey || Y.metaKey)) {
                return
            }
            var X = ab.disableOn !== undefined ? ab.disableOn : a.magnificPopup.defaults.disableOn;
            if (X) {
                if (a.isFunction(X)) {
                    if (!X.call(P)) {
                        return true
                    }
                } else {
                    if (A.width() < X) {
                        return true
                    }
                }
            }
            if (Y.type) {
                Y.preventDefault();
                if (P.isOpen) {
                    Y.stopPropagation()
                }
            }
            ab.el = a(Y.mfpEl);
            if (ab.delegate) {
                ab.items = Z.find(ab.delegate)
            }
            P.open(ab)
        },
        updateStatus: function(Y, Z) {
            if (P.preloader) {
                if (w !== Y) {
                    P.container.removeClass("mfp-s-" + w)
                }
                if (!Z && Y === "loading") {
                    Z = P.st.tLoading
                }
                var X = {
                    status: Y,
                    text: Z
                };
                t("UpdateStatus", X);
                Y = X.status;
                Z = X.text;
                P.preloader.html(Z);
                P.preloader.find("a").on("click", function(aa) {
                    aa.stopImmediatePropagation()
                });
                P.container.addClass("mfp-s-" + Y);
                w = Y
            }
        },
        _checkIfClose: function(Z) {
            if (a(Z).hasClass(S)) {
                return
            }
            var Y = P.st.closeOnContentClick;
            var X = P.st.closeOnBgClick;
            if (Y && X) {
                return true
            } else {
                if (!P.content || a(Z).hasClass("mfp-close") || (P.preloader && Z === P.preloader[0])) {
                    return true
                }
                if ((Z !== P.content[0] && !a.contains(P.content[0], Z))) {
                    if (X) {
                        if (a.contains(document, Z)) {
                            return true
                        }
                    }
                } else {
                    if (Y) {
                        return true
                    }
                }
            }
            return false
        },
        _addClassToMFP: function(X) {
            P.bgOverlay.addClass(X);
            P.wrap.addClass(X)
        },
        _removeClassFromMFP: function(X) {
            this.bgOverlay.removeClass(X);
            P.wrap.removeClass(X)
        },
        _hasScrollBar: function(X) {
            return ((P.isIE7 ? g.height() : document.body.scrollHeight) > (X || A.height()))
        },
        _setFocus: function() {
            (P.st.focus ? P.content.find(P.st.focus).eq(0) : P.wrap).focus()
        },
        _onFocusIn: function(X) {
            if (X.target !== P.wrap[0] && !a.contains(P.wrap[0], X.target)) {
                P._setFocus();
                return false
            }
        },
        _parseMarkup: function(Z, aa, Y) {
            var X;
            if (Y.data) {
                aa = a.extend(Y.data, aa)
            }
            t(O, [Z, aa, Y]);
            a.each(aa, function(ad, ae) {
                if (ae === undefined || ae === false) {
                    return true
                }
                X = ad.split("_");
                if (X.length > 1) {
                    var ac = Z.find(I + "-" + X[0]);
                    if (ac.length > 0) {
                        var ab = X[1];
                        if (ab === "replaceWith") {
                            if (ac[0] !== ae[0]) {
                                ac.replaceWith(ae)
                            }
                        } else {
                            if (ab === "img") {
                                if (ac.is("img")) {
                                    ac.attr("src", ae)
                                } else {
                                    ac.replaceWith('<img src="' + ae + '" class="' + ac.attr("class") + '" />')
                                }
                            } else {
                                ac.attr(X[1], ae)
                            }
                        }
                    }
                } else {
                    Z.find(I + "-" + ad).html(ae)
                }
            })
        },
        _getScrollbarSize: function() {
            if (P.scrollbarSize === undefined) {
                var X = document.createElement("div");
                X.id = "mfp-sbm";
                X.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                document.body.appendChild(X);
                P.scrollbarSize = X.offsetWidth - X.clientWidth;
                document.body.removeChild(X)
            }
            return P.scrollbarSize
        }
    };
    a.magnificPopup = {
        instance: null,
        proto: N.prototype,
        modules: [],
        open: function(Y, X) {
            d();
            if (!Y) {
                Y = {}
            } else {
                Y = a.extend(true, {}, Y)
            }
            Y.isObj = true;
            Y.index = X || 0;
            return this.instance.open(Y)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(Y, X) {
            if (X.options) {
                a.magnificPopup.defaults[Y] = X.options
            }
            a.extend(this.proto, X.proto);
            this.modules.push(Y)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: false,
            mainClass: "",
            preloader: true,
            focus: "",
            closeOnContentClick: false,
            closeOnBgClick: true,
            closeBtnInside: true,
            showCloseBtn: true,
            enableEscapeKey: true,
            modal: false,
            alignTop: false,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "hidden",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    };
    a.fn.magnificPopup = function(ab) {
        d();
        var aa = a(this);
        if (typeof ab === "string") {
            if (ab === "open") {
                var Z, Y = q ? aa.data("magnificPopup") : aa[0].magnificPopup,
                    X = parseInt(arguments[1], 10) || 0;
                if (Y.items) {
                    Z = Y.items[X]
                } else {
                    Z = aa;
                    if (Y.delegate) {
                        Z = Z.find(Y.delegate)
                    }
                    Z = Z.eq(X)
                }
                P._openClick({
                    mfpEl: Z
                }, aa, Y)
            } else {
                if (P.isOpen) {
                    P[ab].apply(P, Array.prototype.slice.call(arguments, 1))
                }
            }
        } else {
            ab = a.extend(true, {}, ab);
            if (q) {
                aa.data("magnificPopup", ab)
            } else {
                aa[0].magnificPopup = ab
            }
            P.addGroup(aa, ab)
        }
        return aa
    };
    var M = "inline",
        n, p, r, x = function() {
            if (r) {
                p.after(r.addClass(n)).detach();
                r = null
            }
        };
    a.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                P.types.push(M);
                s(H + "." + M, function() {
                    x()
                })
            },
            getInline: function(Z, ab) {
                x();
                if (Z.src) {
                    var Y = P.st.inline,
                        X = a(Z.src);
                    if (X.length) {
                        var aa = X[0].parentNode;
                        if (aa && aa.tagName) {
                            if (!p) {
                                n = Y.hiddenClass;
                                p = k(n);
                                n = "mfp-" + n
                            }
                            r = X.after(p).detach().removeClass(n)
                        }
                        P.updateStatus("ready")
                    } else {
                        P.updateStatus("error", Y.tNotFound);
                        X = a("<div>")
                    }
                    Z.inlineElement = X;
                    return X
                }
                P.updateStatus("ready");
                P._parseMarkup(ab, {}, Z);
                return ab
            }
        }
    });
    var D = "ajax",
        b, y = function() {
            if (b) {
                c.removeClass(b)
            }
        },
        f = function() {
            y();
            if (P.req) {
                P.req.abort()
            }
        };
    a.magnificPopup.registerModule(D, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                P.types.push(D);
                b = P.st.ajax.cursor;
                s(H + "." + D, f);
                s("BeforeChange." + D, f)
            },
            getAjax: function(X) {
                if (b) {
                    c.addClass(b)
                }
                P.updateStatus("loading");
                var Y = a.extend({
                    url: X.src,
                    success: function(Z, ac, aa) {
                        var ab = {
                            data: Z,
                            xhr: aa
                        };
                        t("ParseAjax", ab);
                        P.appendContent(a(ab.data), D);
                        X.finished = true;
                        y();
                        P._setFocus();
                        setTimeout(function() {
                            P.wrap.addClass(T)
                        }, 16);
                        P.updateStatus("ready");
                        t("AjaxContentAdded")
                    },
                    error: function() {
                        y();
                        X.finished = X.loadError = true;
                        P.updateStatus("error", P.st.ajax.tError.replace("%url%", X.src))
                    }
                }, P.st.ajax.settings);
                P.req = a.ajax(Y);
                return ""
            }
        }
    });
    var o, m = function(X) {
        if (X.data && X.data.title !== undefined) {
            return X.data.title
        }
        var Y = P.st.image.titleSrc;
        if (Y) {
            if (a.isFunction(Y)) {
                return Y.call(P, X)
            } else {
                if (X.el) {
                    return X.el.attr(Y) || ""
                }
            }
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var X = P.st.image,
                    Y = ".image";
                P.types.push("image");
                s(R + Y, function() {
                    if (P.currItem.type === "image" && X.cursor) {
                        c.addClass(X.cursor)
                    }
                });
                s(H + Y, function() {
                    if (X.cursor) {
                        c.removeClass(X.cursor)
                    }
                    A.off("resize" + I)
                });
                s("Resize" + Y, P.resizeImage);
                if (P.isLowIE) {
                    s("AfterChange", P.resizeImage)
                }
            },
            resizeImage: function() {
                var Y = P.currItem;
                if (!Y || !Y.img) {
                    return
                }
                if (P.st.image.verticalFit) {
                    var X = 0;
                    if (P.isLowIE) {
                        X = parseInt(Y.img.css("padding-top"), 10) + parseInt(Y.img.css("padding-bottom"), 10)
                    }
                    Y.img.css("max-height", P.wH - X)
                }
            },
            _onImageHasSize: function(X) {
                if (X.img) {
                    X.hasSize = true;
                    if (o) {
                        clearInterval(o)
                    }
                    X.isCheckingImgSize = false;
                    t("ImageHasSize", X);
                    if (X.imgHidden) {
                        if (P.content) {
                            P.content.removeClass("mfp-loading")
                        }
                        X.imgHidden = false
                    }
                }
            },
            findImageSize: function(Z) {
                var X = 0,
                    Y = Z.img[0],
                    aa = function(ab) {
                        if (o) {
                            clearInterval(o)
                        }
                        o = setInterval(function() {
                            if (Y.naturalWidth > 0) {
                                P._onImageHasSize(Z);
                                return
                            }
                            if (X > 200) {
                                clearInterval(o)
                            }
                            X++;
                            if (X === 3) {
                                aa(10)
                            } else {
                                if (X === 40) {
                                    aa(50)
                                } else {
                                    if (X === 100) {
                                        aa(500)
                                    }
                                }
                            }
                        }, ab)
                    };
                aa(1)
            },
            getImage: function(ab, ae) {
                var Y = 0,
                    ac = function() {
                        if (ab) {
                            if (ab.img[0].complete) {
                                ab.img.off(".mfploader");
                                if (ab === P.currItem) {
                                    P._onImageHasSize(ab);
                                    P.updateStatus("ready")
                                }
                                ab.hasSize = true;
                                ab.loaded = true;
                                t("ImageLoadComplete")
                            } else {
                                Y++;
                                if (Y < 200) {
                                    setTimeout(ac, 100)
                                } else {
                                    ad()
                                }
                            }
                        }
                    },
                    ad = function() {
                        if (ab) {
                            ab.img.off(".mfploader");
                            if (ab === P.currItem) {
                                P._onImageHasSize(ab);
                                P.updateStatus("error", aa.tError.replace("%url%", ab.src))
                            }
                            ab.hasSize = true;
                            ab.loaded = true;
                            ab.loadError = true
                        }
                    },
                    aa = P.st.image;
                var X = ae.find(".mfp-img");
                if (X.length) {
                    var Z = document.createElement("img");
                    Z.className = "mfp-img";
                    ab.img = a(Z).on("load.mfploader", ac).on("error.mfploader", ad);
                    Z.src = ab.src;
                    if (X.is("img")) {
                        ab.img = ab.img.clone()
                    }
                    Z = ab.img[0];
                    if (Z.naturalWidth > 0) {
                        ab.hasSize = true
                    } else {
                        if (!Z.width) {
                            ab.hasSize = false
                        }
                    }
                }
                P._parseMarkup(ae, {
                    title: m(ab),
                    img_replaceWith: ab.img
                }, ab);
                P.resizeImage();
                if (ab.hasSize) {
                    if (o) {
                        clearInterval(o)
                    }
                    if (ab.loadError) {
                        ae.addClass("mfp-loading");
                        P.updateStatus("error", aa.tError.replace("%url%", ab.src))
                    } else {
                        ae.removeClass("mfp-loading");
                        P.updateStatus("ready")
                    }
                    return ae
                }
                P.updateStatus("loading");
                ab.loading = true;
                if (!ab.hasSize) {
                    ab.imgHidden = true;
                    ae.addClass("mfp-loading");
                    P.findImageSize(ab)
                }
                return ae
            }
        }
    });
    var K, J = function() {
        if (K === undefined) {
            K = document.createElement("p").style.MozTransform !== undefined
        }
        return K
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: false,
            easing: "ease-in-out",
            duration: 300,
            opener: function(X) {
                return X.is("img") ? X : X.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var ae = P.st.zoom,
                    ab = ".zoom",
                    aa;
                if (!ae.enabled || !P.supportsTransition) {
                    return
                }
                var Y = ae.duration,
                    Z = function(ag) {
                        var ah = ag.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            aj = "all " + (ae.duration / 1000) + "s " + ae.easing,
                            af = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            },
                            ai = "transition";
                        af["-webkit-" + ai] = af["-moz-" + ai] = af["-o-" + ai] = af[ai] = aj;
                        ah.css(af);
                        return ah
                    },
                    ad = function() {
                        P.content.css("visibility", "visible")
                    },
                    ac, X;
                s("BuildControls" + ab, function() {
                    if (P._allowZoom()) {
                        clearTimeout(ac);
                        P.content.css("visibility", "hidden");
                        aa = P._getItemToZoom();
                        if (!aa) {
                            ad();
                            return
                        }
                        X = Z(aa);
                        X.css(P._getOffset());
                        P.wrap.append(X);
                        ac = setTimeout(function() {
                            X.css(P._getOffset(true));
                            ac = setTimeout(function() {
                                ad();
                                setTimeout(function() {
                                    X.remove();
                                    aa = X = null;
                                    t("ZoomAnimationEnded")
                                }, 16)
                            }, Y)
                        }, 16)
                    }
                });
                s(F + ab, function() {
                    if (P._allowZoom()) {
                        clearTimeout(ac);
                        P.st.removalDelay = Y;
                        if (!aa) {
                            aa = P._getItemToZoom();
                            if (!aa) {
                                return
                            }
                            X = Z(aa)
                        }
                        X.css(P._getOffset(true));
                        P.wrap.append(X);
                        P.content.css("visibility", "hidden");
                        setTimeout(function() {
                            X.css(P._getOffset())
                        }, 16)
                    }
                });
                s(H + ab, function() {
                    if (P._allowZoom()) {
                        ad();
                        if (X) {
                            X.remove()
                        }
                        aa = null
                    }
                })
            },
            _allowZoom: function() {
                return P.currItem.type === "image"
            },
            _getItemToZoom: function() {
                if (P.currItem.hasSize) {
                    return P.currItem.img
                } else {
                    return false
                }
            },
            _getOffset: function(Y) {
                var X;
                if (Y) {
                    X = P.currItem.img
                } else {
                    X = P.st.zoom.opener(P.currItem.el || P.currItem)
                }
                var aa = X.offset();
                var ac = parseInt(X.css("padding-top"), 10);
                var ab = parseInt(X.css("padding-bottom"), 10);
                aa.top -= (a(window).scrollTop() - ac);
                var Z = {
                    width: X.width(),
                    height: (q ? X.innerHeight() : X[0].offsetHeight) - ab - ac
                };
                if (J()) {
                    Z["-moz-transform"] = Z.transform = "translate(" + aa.left + "px," + aa.top + "px)"
                } else {
                    Z.left = aa.left;
                    Z.top = aa.top
                }
                return Z
            }
        }
    });
    var L = "iframe",
        h = "//about:blank",
        i = function(Y) {
            if (P.currTemplate[L]) {
                var X = P.currTemplate[L].find("iframe");
                if (X.length) {
                    if (!Y) {
                        X[0].src = h
                    }
                    if (P.isIE8) {
                        X.css("display", Y ? "block" : "none")
                    }
                }
            }
        };
    a.magnificPopup.registerModule(L, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                P.types.push(L);
                s("BeforeChange", function(X, Z, Y) {
                    if (Z !== Y) {
                        if (Z === L) {
                            i()
                        } else {
                            if (Y === L) {
                                i(true)
                            }
                        }
                    }
                });
                s(H + "." + L, function() {
                    i()
                })
            },
            getIframe: function(aa, ab) {
                var Y = aa.src;
                var Z = P.st.iframe;
                a.each(Z.patterns, function() {
                    if (Y.indexOf(this.index) > -1) {
                        if (this.id) {
                            if (typeof this.id === "string") {
                                Y = Y.substr(Y.lastIndexOf(this.id) + this.id.length, Y.length)
                            } else {
                                Y = this.id.call(this, Y)
                            }
                        }
                        Y = this.src.replace("%id%", Y);
                        return false
                    }
                });
                var X = {};
                if (Z.srcAction) {
                    X[Z.srcAction] = Y
                }
                P._parseMarkup(ab, X, aa);
                P.updateStatus("ready");
                return ab
            }
        }
    });
    var l = function(X) {
            var Y = P.items.length;
            if (X > Y - 1) {
                return X - Y
            } else {
                if (X < 0) {
                    return Y + X
                }
            }
            return X
        },
        z = function(Y, X, Z) {
            return Y.replace(/%curr%/gi, X + 1).replace(/%total%/gi, Z)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: false,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: true,
            arrows: true,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var X = P.st.gallery,
                    Y = ".mfp-gallery",
                    Z = Boolean(a.fn.mfpFastClick);
                P.direction = true;
                if (!X || !X.enabled) {
                    return false
                }
                B += " mfp-gallery";
                s(R + Y, function() {
                    if (X.navigateByImgClick) {
                        P.wrap.on("click" + Y, ".mfp-img", function() {
                            if (P.items.length > 1) {
                                P.next();
                                return false
                            }
                        })
                    }
                    g.on("keydown" + Y, function(aa) {
                        if (aa.keyCode === 37) {
                            P.prev()
                        } else {
                            if (aa.keyCode === 39) {
                                P.next()
                            }
                        }
                    })
                });
                s("UpdateStatus" + Y, function(ab, aa) {
                    if (aa.text) {
                        aa.text = z(aa.text, P.currItem.index, P.items.length)
                    }
                });
                s(O + Y, function(aa, ab, ae, ac) {
                    var ad = P.items.length;
                    ae.counter = ad > 1 ? z(X.tCounter, ac.index, ad) : ""
                });
                s("BuildControls" + Y, function() {
                    if (P.items.length > 1 && X.arrows && !P.arrowLeft) {
                        var ad = X.arrowMarkup,
                            aa = P.arrowLeft = a(ad.replace(/%title%/gi, X.tPrev).replace(/%dir%/gi, "left")).addClass(S),
                            ab = P.arrowRight = a(ad.replace(/%title%/gi, X.tNext).replace(/%dir%/gi, "right")).addClass(S);
                        var ac = Z ? "mfpFastClick" : "click";
                        aa[ac](function() {
                            P.prev()
                        });
                        ab[ac](function() {
                            P.next()
                        });
                        if (P.isIE7) {
                            k("b", aa[0], false, true);
                            k("a", aa[0], false, true);
                            k("b", ab[0], false, true);
                            k("a", ab[0], false, true)
                        }
                        P.container.append(aa.add(ab))
                    }
                });
                s(G + Y, function() {
                    if (P._preloadTimeout) {
                        clearTimeout(P._preloadTimeout)
                    }
                    P._preloadTimeout = setTimeout(function() {
                        P.preloadNearbyImages();
                        P._preloadTimeout = null
                    }, 16)
                });
                s(H + Y, function() {
                    g.off(Y);
                    P.wrap.off("click" + Y);
                    if (P.arrowLeft && Z) {
                        P.arrowLeft.add(P.arrowRight).destroyMfpFastClick()
                    }
                    P.arrowRight = P.arrowLeft = null
                })
            },
            next: function() {
                P.direction = true;
                P.index = l(P.index + 1);
                P.updateItemHTML()
            },
            prev: function() {
                P.direction = false;
                P.index = l(P.index - 1);
                P.updateItemHTML()
            },
            goTo: function(X) {
                P.direction = (X >= P.index);
                P.index = X;
                P.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var Y = P.st.gallery.preload,
                    aa = Math.min(Y[0], P.items.length),
                    Z = Math.min(Y[1], P.items.length),
                    X;
                for (X = 1; X <= (P.direction ? Z : aa); X++) {
                    P._preloadItem(P.index + X)
                }
                for (X = 1; X <= (P.direction ? aa : Z); X++) {
                    P._preloadItem(P.index - X)
                }
            },
            _preloadItem: function(X) {
                X = l(X);
                if (P.items[X].preloaded) {
                    return
                }
                var Y = P.items[X];
                if (!Y.parsed) {
                    Y = P.parseEl(X)
                }
                t("LazyLoad", Y);
                if (Y.type === "image") {
                    Y.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        Y.hasSize = true
                    }).on("error.mfploader", function() {
                        Y.hasSize = true;
                        Y.loadError = true;
                        t("LazyLoadError", Y)
                    }).attr("src", Y.src)
                }
                Y.preloaded = true
            }
        }
    });
    var V = "retina";
    a.magnificPopup.registerModule(V, {
        options: {
            replaceSrc: function(X) {
                return X.src.replace(/\.\w+$/, function(Y) {
                    return "@2x" + Y
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var Y = P.st.retina,
                        X = Y.ratio;
                    X = !isNaN(X) ? X : X();
                    if (X > 1) {
                        s("ImageHasSize." + V, function(Z, aa) {
                            aa.img.css({
                                "max-width": aa.img[0].naturalWidth / X,
                                width: "100%"
                            })
                        });
                        s("ElementParse." + V, function(Z, aa) {
                            aa.src = Y.replaceSrc(aa, X)
                        })
                    }
                }
            }
        }
    });
    (function() {
        var Y = 1000,
            aa = "ontouchstart" in window,
            ab = function() {
                A.off("touchmove" + Z + " touchend" + Z)
            },
            X = "mfpFastClick",
            Z = "." + X;
        a.fn.mfpFastClick = function(ac) {
            return a(this).each(function() {
                var ad = a(this),
                    ae;
                if (aa) {
                    var ak, ai, aj, ah, ag, af;
                    ad.on("touchstart" + Z, function(al) {
                        ah = false;
                        af = 1;
                        ag = al.originalEvent ? al.originalEvent.touches[0] : al.touches[0];
                        ai = ag.clientX;
                        aj = ag.clientY;
                        A.on("touchmove" + Z, function(am) {
                            ag = am.originalEvent ? am.originalEvent.touches : am.touches;
                            af = ag.length;
                            ag = ag[0];
                            if (Math.abs(ag.clientX - ai) > 10 || Math.abs(ag.clientY - aj) > 10) {
                                ah = true;
                                ab()
                            }
                        }).on("touchend" + Z, function(am) {
                            ab();
                            if (ah || af > 1) {
                                return
                            }
                            ae = true;
                            am.preventDefault();
                            clearTimeout(ak);
                            ak = setTimeout(function() {
                                ae = false
                            }, Y);
                            ac()
                        })
                    })
                }
                ad.on("click" + Z, function() {
                    if (!ae) {
                        ac()
                    }
                })
            })
        };
        a.fn.destroyMfpFastClick = function() {
            a(this).off("touchstart" + Z + " click" + Z);
            if (aa) {
                A.off("touchmove" + Z + " touchend" + Z)
            }
        }
    })();
    d()
})(window.jQuery || window.Zepto);
/*
 * jQuery Cycle2; version: 2.1.5 build: 20140415
 * http://jquery.malsup.com/cycle2/
 * Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
 */
(function(a) {
    var d = "2.1.5";
    a.fn.cycle = function(f) {
        var e;
        if (this.length === 0 && !a.isReady) {
            e = {
                s: this.selector,
                c: this.context
            };
            a.fn.cycle.log("requeuing slideshow (dom not ready)");
            a(function() {
                a(e.s, e.c).cycle(f)
            });
            return this
        }
        return this.each(function() {
            var h, j, l, m;
            var g = a(this);
            var i = a.fn.cycle.log;
            if (g.data("cycle.opts")) {
                return
            }
            if (g.data("cycle-log") === false || (f && f.log === false) || (j && j.log === false)) {
                i = a.noop
            }
            i("--c2 init--");
            h = g.data();
            for (var k in h) {
                if (h.hasOwnProperty(k) && /^cycle[A-Z]+/.test(k)) {
                    m = h[k];
                    l = k.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, c);
                    i(l + ":", m, "(" + typeof m + ")");
                    h[l] = m
                }
            }
            j = a.extend({}, a.fn.cycle.defaults, h, f || {});
            j.timeoutId = 0;
            j.paused = j.paused || false;
            j.container = g;
            j._maxZ = j.maxZ;
            j.API = a.extend({
                _container: g
            }, a.fn.cycle.API);
            j.API.log = i;
            j.API.trigger = function(o, n) {
                j.container.trigger(o, n);
                return j.API
            };
            g.data("cycle.opts", j);
            g.data("cycle.API", j.API);
            j.API.trigger("cycle-bootstrap", [j, j.API]);
            j.API.addInitialSlides();
            j.API.preInitSlideshow();
            if (j.slides.length) {
                j.API.initSlideshow()
            }
        })
    };
    a.fn.cycle.API = {
        opts: function() {
            return this._container.data("cycle.opts")
        },
        addInitialSlides: function() {
            var e = this.opts();
            var f = e.slides;
            e.slideCount = 0;
            e.slides = a();
            f = f.jquery ? f : e.container.find(f);
            if (e.random) {
                f.sort(function() {
                    return Math.random() - 0.5
                })
            }
            e.API.add(f)
        },
        preInitSlideshow: function() {
            var e = this.opts();
            e.API.trigger("cycle-pre-initialize", [e]);
            var f = a.fn.cycle.transitions[e.fx];
            if (f && a.isFunction(f.preInit)) {
                f.preInit(e)
            }
            e._preInitialized = true
        },
        postInitSlideshow: function() {
            var e = this.opts();
            e.API.trigger("cycle-post-initialize", [e]);
            var f = a.fn.cycle.transitions[e.fx];
            if (f && a.isFunction(f.postInit)) {
                f.postInit(e)
            }
        },
        initSlideshow: function() {
            var e = this.opts();
            var f = e.container;
            var g;
            e.API.calcFirstSlide();
            if (e.container.css("position") == "static") {
                e.container.css("position", "relative")
            }
            a(e.slides[e.currSlide]).css({
                opacity: 1,
                display: "block",
                visibility: "visible"
            });
            e.API.stackSlides(e.slides[e.currSlide], e.slides[e.nextSlide], !e.reverse);
            if (e.pauseOnHover) {
                if (e.pauseOnHover !== true) {
                    f = a(e.pauseOnHover)
                }
                f.hover(function() {
                    e.API.pause(true)
                }, function() {
                    e.API.resume(true)
                })
            }
            if (e.timeout) {
                g = e.API.getSlideOpts(e.currSlide);
                e.API.queueTransition(g, g.timeout + e.delay)
            }
            e._initialized = true;
            e.API.updateView(true);
            e.API.trigger("cycle-initialized", [e]);
            e.API.postInitSlideshow()
        },
        pause: function(f) {
            var g = this.opts(),
                h = g.API.getSlideOpts(),
                e = g.hoverPaused || g.paused;
            if (f) {
                g.hoverPaused = true
            } else {
                g.paused = true
            }
            if (!e) {
                g.container.addClass("cycle-paused");
                g.API.trigger("cycle-paused", [g]).log("cycle-paused");
                if (h.timeout) {
                    clearTimeout(g.timeoutId);
                    g.timeoutId = 0;
                    g._remainingTimeout -= (a.now() - g._lastQueue);
                    if (g._remainingTimeout < 0 || isNaN(g._remainingTimeout)) {
                        g._remainingTimeout = undefined
                    }
                }
            }
        },
        resume: function(f) {
            var g = this.opts(),
                e = !g.hoverPaused && !g.paused,
                h;
            if (f) {
                g.hoverPaused = false
            } else {
                g.paused = false
            }
            if (!e) {
                g.container.removeClass("cycle-paused");
                if (g.slides.filter(":animated").length === 0) {
                    g.API.queueTransition(g.API.getSlideOpts(), g._remainingTimeout)
                }
                g.API.trigger("cycle-resumed", [g, g._remainingTimeout]).log("cycle-resumed")
            }
        },
        add: function(i, h) {
            var g = this.opts();
            var f = g.slideCount;
            var j = false;
            var e;
            if (a.type(i) == "string") {
                i = a.trim(i)
            }
            a(i).each(function(k) {
                var m;
                var l = a(this);
                if (h) {
                    g.container.prepend(l)
                } else {
                    g.container.append(l)
                }
                g.slideCount++;
                m = g.API.buildSlideOpts(l);
                if (h) {
                    g.slides = a(l).add(g.slides)
                } else {
                    g.slides = g.slides.add(l)
                }
                g.API.initSlide(m, l, --g._maxZ);
                l.data("cycle.opts", m);
                g.API.trigger("cycle-slide-added", [g, m, l])
            });
            g.API.updateView(true);
            j = g._preInitialized && (f < 2 && g.slideCount >= 1);
            if (j) {
                if (!g._initialized) {
                    g.API.initSlideshow()
                } else {
                    if (g.timeout) {
                        e = g.slides.length;
                        g.nextSlide = g.reverse ? e - 1 : 1;
                        if (!g.timeoutId) {
                            g.API.queueTransition(g)
                        }
                    }
                }
            }
        },
        calcFirstSlide: function() {
            var f = this.opts();
            var e;
            e = parseInt(f.startingSlide || 0, 10);
            if (e >= f.slides.length || e < 0) {
                e = 0
            }
            f.currSlide = e;
            if (f.reverse) {
                f.nextSlide = e - 1;
                if (f.nextSlide < 0) {
                    f.nextSlide = f.slides.length - 1
                }
            } else {
                f.nextSlide = e + 1;
                if (f.nextSlide == f.slides.length) {
                    f.nextSlide = 0
                }
            }
        },
        calcNextSlide: function() {
            var e = this.opts();
            var f;
            if (e.reverse) {
                f = (e.nextSlide - 1) < 0;
                e.nextSlide = f ? e.slideCount - 1 : e.nextSlide - 1;
                e.currSlide = f ? 0 : e.nextSlide + 1
            } else {
                f = (e.nextSlide + 1) == e.slides.length;
                e.nextSlide = f ? 0 : e.nextSlide + 1;
                e.currSlide = f ? e.slides.length - 1 : e.nextSlide - 1
            }
        },
        calcTx: function(g, e) {
            var f = g;
            var h;
            if (f._tempFx) {
                h = a.fn.cycle.transitions[f._tempFx]
            } else {
                if (e && f.manualFx) {
                    h = a.fn.cycle.transitions[f.manualFx]
                }
            }
            if (!h) {
                h = a.fn.cycle.transitions[f.fx]
            }
            f._tempFx = null;
            this.opts()._tempFx = null;
            if (!h) {
                h = a.fn.cycle.transitions.fade;
                f.API.log('Transition "' + f.fx + '" not found.  Using fade.')
            }
            return h
        },
        prepareTx: function(h, g) {
            var j = this.opts();
            var e, f, i, k, l;
            if (j.slideCount < 2) {
                j.timeoutId = 0;
                return
            }
            if (h && (!j.busy || j.manualTrump)) {
                j.API.stopTransition();
                j.busy = false;
                clearTimeout(j.timeoutId);
                j.timeoutId = 0
            }
            if (j.busy) {
                return
            }
            if (j.timeoutId === 0 && !h) {
                return
            }
            f = j.slides[j.currSlide];
            i = j.slides[j.nextSlide];
            k = j.API.getSlideOpts(j.nextSlide);
            l = j.API.calcTx(k, h);
            j._tx = l;
            if (h && k.manualSpeed !== undefined) {
                k.speed = k.manualSpeed
            }
            if (j.nextSlide != j.currSlide && (h || (!j.paused && !j.hoverPaused && j.timeout))) {
                j.API.trigger("cycle-before", [k, f, i, g]);
                if (l.before) {
                    l.before(k, f, i, g)
                }
                e = function() {
                    j.busy = false;
                    if (!j.container.data("cycle.opts")) {
                        return
                    }
                    if (l.after) {
                        l.after(k, f, i, g)
                    }
                    j.API.trigger("cycle-after", [k, f, i, g]);
                    j.API.queueTransition(k);
                    j.API.updateView(true)
                };
                j.busy = true;
                if (l.transition) {
                    l.transition(k, f, i, g, e)
                } else {
                    j.API.doTransition(k, f, i, g, e)
                }
                j.API.calcNextSlide();
                j.API.updateView()
            } else {
                j.API.queueTransition(k)
            }
        },
        doTransition: function(m, g, k, i, e) {
            var l = m;
            var f = a(g),
                j = a(k);
            var h = function() {
                j.animate(l.animIn || {
                    opacity: 1
                }, l.speed, l.easeIn || l.easing, e)
            };
            j.css(l.cssBefore || {});
            f.animate(l.animOut || {}, l.speed, l.easeOut || l.easing, function() {
                f.css(l.cssAfter || {});
                if (!l.sync) {
                    h()
                }
            });
            if (l.sync) {
                h()
            }
        },
        queueTransition: function(f, g) {
            var e = this.opts();
            var h = g !== undefined ? g : f.timeout;
            if (e.nextSlide === 0 && --e.loop === 0) {
                e.API.log("terminating; loop=0");
                e.timeout = 0;
                if (h) {
                    setTimeout(function() {
                        e.API.trigger("cycle-finished", [e])
                    }, h)
                } else {
                    e.API.trigger("cycle-finished", [e])
                }
                e.nextSlide = e.currSlide;
                return
            }
            if (e.continueAuto !== undefined) {
                if (e.continueAuto === false || (a.isFunction(e.continueAuto) && e.continueAuto() === false)) {
                    e.API.log("terminating automatic transitions");
                    e.timeout = 0;
                    if (e.timeoutId) {
                        clearTimeout(e.timeoutId)
                    }
                    return
                }
            }
            if (h) {
                e._lastQueue = a.now();
                if (g === undefined) {
                    e._remainingTimeout = f.timeout
                }
                if (!e.paused && !e.hoverPaused) {
                    e.timeoutId = setTimeout(function() {
                        e.API.prepareTx(false, !e.reverse)
                    }, h)
                }
            }
        },
        stopTransition: function() {
            var e = this.opts();
            if (e.slides.filter(":animated").length) {
                e.slides.stop(false, true);
                e.API.trigger("cycle-transition-stopped", [e])
            }
            if (e._tx && e._tx.stopTransition) {
                e._tx.stopTransition(e)
            }
        },
        advanceSlide: function(f) {
            var e = this.opts();
            clearTimeout(e.timeoutId);
            e.timeoutId = 0;
            e.nextSlide = e.currSlide + f;
            if (e.nextSlide < 0) {
                e.nextSlide = e.slides.length - 1
            } else {
                if (e.nextSlide >= e.slides.length) {
                    e.nextSlide = 0
                }
            }
            e.API.prepareTx(true, f >= 0);
            return false
        },
        buildSlideOpts: function(j) {
            var g = this.opts();
            var l, i;
            var k = j.data() || {};
            for (var h in k) {
                if (k.hasOwnProperty(h) && /^cycle[A-Z]+/.test(h)) {
                    l = k[h];
                    i = h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, c);
                    g.API.log("[" + (g.slideCount - 1) + "]", i + ":", l, "(" + typeof l + ")");
                    k[i] = l
                }
            }
            k = a.extend({}, a.fn.cycle.defaults, g, k);
            k.slideNum = g.slideCount;
            try {
                delete k.API;
                delete k.slideCount;
                delete k.currSlide;
                delete k.nextSlide;
                delete k.slides
            } catch (f) {}
            return k
        },
        getSlideOpts: function(e) {
            var f = this.opts();
            if (e === undefined) {
                e = f.currSlide
            }
            var g = f.slides[e];
            var h = a(g).data("cycle.opts");
            return a.extend({}, f, h)
        },
        initSlide: function(g, f, h) {
            var e = this.opts();
            f.css(g.slideCss || {});
            if (h > 0) {
                f.css("zIndex", h)
            }
            if (isNaN(g.speed)) {
                g.speed = a.fx.speeds[g.speed] || a.fx.speeds._default
            }
            if (!g.sync) {
                g.speed = g.speed / 2
            }
            f.addClass(e.slideClass)
        },
        updateView: function(g, h, f) {
            var i = this.opts();
            if (!i._initialized) {
                return
            }
            var j = i.API.getSlideOpts();
            var e = i.slides[i.currSlide];
            if (!g && h !== true) {
                i.API.trigger("cycle-update-view-before", [i, j, e]);
                if (i.updateView < 0) {
                    return
                }
            }
            if (i.slideActiveClass) {
                i.slides.removeClass(i.slideActiveClass).eq(i.currSlide).addClass(i.slideActiveClass)
            }
            if (g && i.hideNonActive) {
                i.slides.filter(":not(." + i.slideActiveClass + ")").css("visibility", "hidden")
            }
            if (i.updateView === 0) {
                setTimeout(function() {
                    i.API.trigger("cycle-update-view", [i, j, e, g])
                }, j.speed / (i.sync ? 2 : 1))
            }
            if (i.updateView !== 0) {
                i.API.trigger("cycle-update-view", [i, j, e, g])
            }
            if (g) {
                i.API.trigger("cycle-update-view-after", [i, j, e])
            }
        },
        getComponent: function(e) {
            var f = this.opts();
            var g = f[e];
            if (typeof g === "string") {
                return (/^\s*[\>|\+|~]/).test(g) ? f.container.find(g) : a(g)
            }
            if (g.jquery) {
                return g
            }
            return a(g)
        },
        stackSlides: function(e, j, f) {
            var k = this.opts();
            if (!e) {
                e = k.slides[k.currSlide];
                j = k.slides[k.nextSlide];
                f = !k.reverse
            }
            a(e).css("zIndex", k.maxZ);
            var g;
            var l = k.maxZ - 2;
            var h = k.slideCount;
            if (f) {
                for (g = k.currSlide + 1; g < h; g++) {
                    a(k.slides[g]).css("zIndex", l--)
                }
                for (g = 0; g < k.currSlide; g++) {
                    a(k.slides[g]).css("zIndex", l--)
                }
            } else {
                for (g = k.currSlide - 1; g >= 0; g--) {
                    a(k.slides[g]).css("zIndex", l--)
                }
                for (g = h - 1; g > k.currSlide; g--) {
                    a(k.slides[g]).css("zIndex", l--)
                }
            }
            a(j).css("zIndex", k.maxZ - 1)
        },
        getSlideIndex: function(e) {
            return this.opts().slides.index(e)
        }
    };
    a.fn.cycle.log = function b() {
        if (window.console && console.log) {
            console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
        }
    };
    a.fn.cycle.version = function() {
        return "Cycle2: " + d
    };

    function c(e) {
        return (e || "").toLowerCase()
    }
    a.fn.cycle.transitions = {
        custom: {},
        none: {
            before: function(h, e, g, f) {
                h.API.stackSlides(g, e, f);
                h.cssBefore = {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                }
            }
        },
        fade: {
            before: function(i, f, h, g) {
                var e = i.API.getSlideOpts(i.nextSlide).slideCss || {};
                i.API.stackSlides(f, h, g);
                i.cssBefore = a.extend(e, {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                });
                i.animIn = {
                    opacity: 1
                };
                i.animOut = {
                    opacity: 0
                }
            }
        },
        fadeout: {
            before: function(i, f, h, g) {
                var e = i.API.getSlideOpts(i.nextSlide).slideCss || {};
                i.API.stackSlides(f, h, g);
                i.cssBefore = a.extend(e, {
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                });
                i.animOut = {
                    opacity: 0
                }
            }
        },
        scrollHorz: {
            before: function(h, e, g, f) {
                h.API.stackSlides(e, g, f);
                var i = h.container.css("overflow", "hidden").width();
                h.cssBefore = {
                    left: f ? i : -i,
                    top: 0,
                    opacity: 1,
                    visibility: "visible",
                    display: "block"
                };
                h.cssAfter = {
                    zIndex: h._maxZ - 2,
                    left: 0
                };
                h.animIn = {
                    left: 0
                };
                h.animOut = {
                    left: f ? -i : i
                }
            }
        }
    };
    a.fn.cycle.defaults = {
        allowWrap: true,
        autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
        delay: 0,
        easing: null,
        fx: "fade",
        hideNonActive: true,
        loop: 0,
        manualFx: undefined,
        manualSpeed: undefined,
        manualTrump: true,
        maxZ: 100,
        pauseOnHover: false,
        reverse: false,
        slideActiveClass: "cycle-slide-active",
        slideClass: "cycle-slide",
        slideCss: {
            position: "absolute",
            top: 0,
            left: 0
        },
        slides: "> img",
        speed: 500,
        startingSlide: 0,
        sync: true,
        timeout: 4000,
        updateView: 0
    };
    a(document).ready(function() {
        a(a.fn.cycle.defaults.autoSelector).cycle()
    })
})(jQuery);
/* Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
(function(a) {
    a.extend(a.fn.cycle.defaults, {
        autoHeight: 0,
        autoHeightSpeed: 250,
        autoHeightEasing: null
    });
    a(document).on("cycle-initialized", function(g, i) {
        var f = i.autoHeight;
        var l = a.type(f);
        var k = null;
        var j;
        if (l !== "string" && l !== "number") {
            return
        }
        i.container.on("cycle-slide-added cycle-slide-removed", c);
        i.container.on("cycle-destroyed", e);
        if (f == "container") {
            i.container.on("cycle-before", d)
        } else {
            if (l === "string" && /\d+\:\d+/.test(f)) {
                j = f.match(/(\d+)\:(\d+)/);
                j = j[1] / j[2];
                i._autoHeightRatio = j
            }
        }
        if (l !== "number") {
            i._autoHeightOnResize = function() {
                clearTimeout(k);
                k = setTimeout(h, 50)
            };
            a(window).on("resize orientationchange", i._autoHeightOnResize)
        }
        setTimeout(h, 30);

        function h() {
            c(g, i)
        }
    });

    function c(h, j) {
        var g, i, k;
        var f = j.autoHeight;
        if (f == "container") {
            i = a(j.slides[j.currSlide]).outerHeight();
            j.container.height(i)
        } else {
            if (j._autoHeightRatio) {
                j.container.height(j.container.width() / j._autoHeightRatio)
            } else {
                if (f === "calc" || (a.type(f) == "number" && f >= 0)) {
                    if (f === "calc") {
                        k = b(h, j)
                    } else {
                        if (f >= j.slides.length) {
                            k = 0
                        } else {
                            k = f
                        }
                    }
                    if (k == j._sentinelIndex) {
                        return
                    }
                    j._sentinelIndex = k;
                    if (j._sentinel) {
                        j._sentinel.remove()
                    }
                    g = a(j.slides[k].cloneNode(true));
                    g.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel");
                    g.css({
                        position: "static",
                        visibility: "hidden",
                        display: "block"
                    }).prependTo(j.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active");
                    g.find("*").css("visibility", "hidden");
                    j._sentinel = g
                }
            }
        }
    }

    function b(f, i) {
        var g = 0,
            h = -1;
        i.slides.each(function(k) {
            var j = a(this).height();
            if (j > h) {
                h = j;
                g = k
            }
        });
        return g
    }

    function d(f, k, l, j, g) {
        var i = a(j).outerHeight();
        k.container.animate({
            height: i
        }, k.autoHeightSpeed, k.autoHeightEasing)
    }

    function e(f, g) {
        if (g._autoHeightOnResize) {
            a(window).off("resize orientationchange", g._autoHeightOnResize);
            g._autoHeightOnResize = null
        }
        g.container.off("cycle-slide-added cycle-slide-removed", c);
        g.container.off("cycle-destroyed", e);
        g.container.off("cycle-before", d);
        if (g._sentinel) {
            g._sentinel.remove();
            g._sentinel = null
        }
    }
})(jQuery);
/* caption plugin for Cycle2;  version: 20130306 */
(function(a) {
    a.extend(a.fn.cycle.defaults, {
        caption: "> .cycle-caption",
        captionTemplate: "{{slideNum}} / {{slideCount}}",
        overlay: "> .cycle-overlay",
        overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
        captionModule: "caption"
    });
    a(document).on("cycle-update-view", function(c, f, g, b) {
        if (f.captionModule !== "caption") {
            return
        }
        var d;
        a.each(["caption", "overlay"], function() {
            var h = this;
            var i = g[h + "Template"];
            var e = f.API.getComponent(h);
            if (e.length && i) {
                e.html(f.API.tmpl(i, g, f, b));
                e.show()
            } else {
                e.hide()
            }
        })
    });
    a(document).on("cycle-destroyed", function(b, d) {
        var c;
        a.each(["caption", "overlay"], function() {
            var e = this,
                f = d[e + "Template"];
            if (d[e] && f) {
                c = d.API.getComponent("caption");
                c.empty()
            }
        })
    })
})(jQuery);
/* command plugin for Cycle2;  version: 20140415 */
(function(a) {
    var b = a.fn.cycle;
    a.fn.cycle = function(f) {
        var d, e, g;
        var c = a.makeArray(arguments);
        if (a.type(f) == "number") {
            return this.cycle("goto", f)
        }
        if (a.type(f) == "string") {
            return this.each(function() {
                var h;
                d = f;
                g = a(this).data("cycle.opts");
                if (g === undefined) {
                    b.log('slideshow must be initialized before sending commands; "' + d + '" ignored');
                    return
                } else {
                    d = d == "goto" ? "jump" : d;
                    e = g.API[d];
                    if (a.isFunction(e)) {
                        h = a.makeArray(c);
                        h.shift();
                        return e.apply(g.API, h)
                    } else {
                        b.log("unknown command: ", d)
                    }
                }
            })
        } else {
            return b.apply(this, arguments)
        }
    };
    a.extend(a.fn.cycle, b);
    a.extend(b.API, {
        next: function() {
            var d = this.opts();
            if (d.busy && !d.manualTrump) {
                return
            }
            var c = d.reverse ? -1 : 1;
            if (d.allowWrap === false && (d.currSlide + c) >= d.slideCount) {
                return
            }
            d.API.advanceSlide(c);
            d.API.trigger("cycle-next", [d]).log("cycle-next")
        },
        prev: function() {
            var d = this.opts();
            if (d.busy && !d.manualTrump) {
                return
            }
            var c = d.reverse ? 1 : -1;
            if (d.allowWrap === false && (d.currSlide + c) < 0) {
                return
            }
            d.API.advanceSlide(c);
            d.API.trigger("cycle-prev", [d]).log("cycle-prev")
        },
        destroy: function() {
            this.stop();
            var d = this.opts();
            var c = a.isFunction(a._data) ? a._data : a.noop;
            clearTimeout(d.timeoutId);
            d.timeoutId = 0;
            d.API.stop();
            d.API.trigger("cycle-destroyed", [d]).log("cycle-destroyed");
            d.container.removeData();
            c(d.container[0], "parsedAttrs", false);
            if (!d.retainStylesOnDestroy) {
                d.container.removeAttr("style");
                d.slides.removeAttr("style");
                d.slides.removeClass(d.slideActiveClass)
            }
            d.slides.each(function() {
                a(this).removeData();
                c(this, "parsedAttrs", false)
            })
        },
        jump: function(e, d) {
            var c;
            var g = this.opts();
            if (g.busy && !g.manualTrump) {
                return
            }
            var f = parseInt(e, 10);
            if (isNaN(f) || f < 0 || f >= g.slides.length) {
                g.API.log("goto: invalid slide index: " + f);
                return
            }
            if (f == g.currSlide) {
                g.API.log("goto: skipping, already on slide", f);
                return
            }
            g.nextSlide = f;
            clearTimeout(g.timeoutId);
            g.timeoutId = 0;
            g.API.log("goto: ", f, " (zero-index)");
            c = g.currSlide < g.nextSlide;
            g._tempFx = d;
            g.API.prepareTx(true, c)
        },
        stop: function() {
            var c = this.opts();
            var d = c.container;
            clearTimeout(c.timeoutId);
            c.timeoutId = 0;
            c.API.stopTransition();
            if (c.pauseOnHover) {
                if (c.pauseOnHover !== true) {
                    d = a(c.pauseOnHover)
                }
                d.off("mouseenter mouseleave")
            }
            c.API.trigger("cycle-stopped", [c]).log("cycle-stopped")
        },
        reinit: function() {
            var c = this.opts();
            c.API.destroy();
            c.container.cycle()
        },
        remove: function(d) {
            var e = this.opts();
            var f, j, h = [],
                g = 1;
            for (var c = 0; c < e.slides.length; c++) {
                f = e.slides[c];
                if (c == d) {
                    j = f
                } else {
                    h.push(f);
                    a(f).data("cycle.opts").slideNum = g;
                    g++
                }
            }
            if (j) {
                e.slides = a(h);
                e.slideCount--;
                a(j).remove();
                if (d == e.currSlide) {
                    e.API.advanceSlide(1)
                } else {
                    if (d < e.currSlide) {
                        e.currSlide--
                    } else {
                        e.currSlide++
                    }
                }
                e.API.trigger("cycle-slide-removed", [e, d, j]).log("cycle-slide-removed");
                e.API.updateView()
            }
        }
    });
    a(document).on("click.cycle", "[data-cycle-cmd]", function(f) {
        f.preventDefault();
        var g = a(this);
        var c = g.data("cycle-cmd");
        var d = g.data("cycle-context") || ".cycle-slideshow";
        a(d).cycle(c, g.data("cycle-arg"))
    })
})(jQuery);
/* hash plugin for Cycle2;  version: 20130905 */
(function(a) {
    a(document).on("cycle-pre-initialize", function(c, d) {
        b(d, true);
        d._onHashChange = function() {
            b(d, false)
        };
        a(window).on("hashchange", d._onHashChange)
    });
    a(document).on("cycle-update-view", function(c, d, f) {
        if (f.hash && ("#" + f.hash) != window.location.hash) {
            d._hashFence = true;
            window.location.hash = f.hash
        }
    });
    a(document).on("cycle-destroyed", function(c, d) {
        if (d._onHashChange) {
            a(window).off("hashchange", d._onHashChange)
        }
    });

    function b(d, e) {
        var c;
        if (d._hashFence) {
            d._hashFence = false;
            return
        }
        c = window.location.hash.substring(1);
        d.slides.each(function(g) {
            if (a(this).data("cycle-hash") == c) {
                if (e === true) {
                    d.startingSlide = g
                } else {
                    var f = d.currSlide < g;
                    d.nextSlide = g;
                    d.API.prepareTx(true, f)
                }
                return false
            }
        })
    }
})(jQuery);
/* loader plugin for Cycle2;  version: 20131121 */
(function(a) {
    a.extend(a.fn.cycle.defaults, {
        loader: false
    });
    a(document).on("cycle-bootstrap", function(d, f) {
        var c;
        if (!f.loader) {
            return
        }
        c = f.API.add;
        f.API.add = b;

        function b(l, h) {
            var j = [];
            if (a.type(l) == "string") {
                l = a.trim(l)
            } else {
                if (a.type(l) === "array") {
                    for (var g = 0; g < l.length; g++) {
                        l[g] = a(l[g])[0]
                    }
                }
            }
            l = a(l);
            var k = l.length;
            if (!k) {
                return
            }
            l.css("visibility", "hidden").appendTo("body").each(function(o) {
                var n = 0;
                var r = a(this);
                var q = r.is("img") ? r : r.find("img");
                r.data("index", o);
                q = q.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])');
                if (!q.length) {
                    --k;
                    j.push(r);
                    return
                }
                n = q.length;
                q.each(function() {
                    if (this.complete) {
                        p()
                    } else {
                        a(this).load(function() {
                            p()
                        }).on("error", function() {
                            if (--n === 0) {
                                f.API.log("slide skipped; img not loaded:", this.src);
                                if (--k === 0 && f.loader == "wait") {
                                    c.apply(f.API, [j, h])
                                }
                            }
                        })
                    }
                });

                function p() {
                    if (--n === 0) {
                        --k;
                        e(r)
                    }
                }
            });
            if (k) {
                f.container.addClass("cycle-loading")
            }

            function e(n) {
                var i;
                if (f.loader == "wait") {
                    j.push(n);
                    if (k === 0) {
                        j.sort(m);
                        c.apply(f.API, [j, h]);
                        f.container.removeClass("cycle-loading")
                    }
                } else {
                    i = a(f.slides[f.currSlide]);
                    c.apply(f.API, [n, h]);
                    i.show();
                    f.container.removeClass("cycle-loading")
                }
            }

            function m(i, n) {
                return i.data("index") - n.data("index")
            }
        }
    })
})(jQuery);
/* pager plugin for Cycle2;  version: 20140415 */
(function(a) {
    a.extend(a.fn.cycle.defaults, {
        pager: "> .cycle-pager",
        pagerActiveClass: "cycle-pager-active",
        pagerEvent: "click.cycle",
        pagerEventBubble: undefined,
        pagerTemplate: "<span>&bull;</span>"
    });
    a(document).on("cycle-bootstrap", function(f, g, d) {
        d.buildPagerLink = b
    });
    a(document).on("cycle-slide-added", function(d, f, h, g) {
        if (f.pager) {
            f.API.buildPagerLink(f, h, g);
            f.API.page = c
        }
    });
    a(document).on("cycle-slide-removed", function(d, g, f, i) {
        if (g.pager) {
            var h = g.API.getComponent("pager");
            h.each(function() {
                var e = a(this);
                a(e.children()[f]).remove()
            })
        }
    });
    a(document).on("cycle-update-view", function(d, f, h) {
        var g;
        if (f.pager) {
            g = f.API.getComponent("pager");
            g.each(function() {
                a(this).children().removeClass(f.pagerActiveClass).eq(f.currSlide).addClass(f.pagerActiveClass)
            })
        }
    });
    a(document).on("cycle-destroyed", function(d, f) {
        var g = f.API.getComponent("pager");
        if (g) {
            g.children().off(f.pagerEvent);
            if (f.pagerTemplate) {
                g.empty()
            }
        }
    });

    function b(d, h, g) {
        var e;
        var f = d.API.getComponent("pager");
        f.each(function() {
            var j = a(this);
            if (h.pagerTemplate) {
                var i = d.API.tmpl(h.pagerTemplate, h, d, g[0]);
                e = a(i).appendTo(j)
            } else {
                e = j.children().eq(d.slideCount - 1)
            }
            e.on(d.pagerEvent, function(k) {
                if (!d.pagerEventBubble) {
                    k.preventDefault()
                }
                d.API.page(j, k.currentTarget)
            })
        })
    }

    function c(h, i) {
        var g = this.opts();
        if (g.busy && !g.manualTrump) {
            return
        }
        var e = h.children().index(i);
        var f = e;
        var d = g.currSlide < f;
        if (g.currSlide == f) {
            return
        }
        g.nextSlide = f;
        g._tempFx = g.pagerFx;
        g.API.prepareTx(true, d);
        g.API.trigger("cycle-pager-activated", [g, h, i])
    }
})(jQuery);
/* prevnext plugin for Cycle2;  version: 20140408 */
(function(a) {
    a.extend(a.fn.cycle.defaults, {
        next: "> .cycle-next",
        nextEvent: "click.cycle",
        disabledClass: "disabled",
        prev: "> .cycle-prev",
        prevEvent: "click.cycle",
        swipe: false
    });
    a(document).on("cycle-initialized", function(b, d) {
        d.API.getComponent("next").on(d.nextEvent, function(g) {
            g.preventDefault();
            d.API.next()
        });
        d.API.getComponent("prev").on(d.prevEvent, function(g) {
            g.preventDefault();
            d.API.prev()
        });
        if (d.swipe) {
            var c = d.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle";
            var f = d.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
            d.container.on(c, function(g) {
                d._tempFx = d.swipeFx;
                d.API.next()
            });
            d.container.on(f, function() {
                d._tempFx = d.swipeFx;
                d.API.prev()
            })
        }
    });
    a(document).on("cycle-update-view", function(d, h, k, c) {
        if (h.allowWrap) {
            return
        }
        var b = h.disabledClass;
        var f = h.API.getComponent("next");
        var i = h.API.getComponent("prev");
        var j = h._prevBoundry || 0;
        var g = (h._nextBoundry !== undefined) ? h._nextBoundry : h.slideCount - 1;
        if (h.currSlide == g) {
            f.addClass(b).prop("disabled", true)
        } else {
            f.removeClass(b).prop("disabled", false)
        }
        if (h.currSlide === j) {
            i.addClass(b).prop("disabled", true)
        } else {
            i.removeClass(b).prop("disabled", false)
        }
    });
    a(document).on("cycle-destroyed", function(b, c) {
        c.API.getComponent("prev").off(c.nextEvent);
        c.API.getComponent("next").off(c.prevEvent);
        c.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
    })
})(jQuery);
/* progressive loader plugin for Cycle2;  version: 20130315 */
(function(a) {
    a.extend(a.fn.cycle.defaults, {
        progressive: false
    });
    a(document).on("cycle-pre-initialize", function(c, g) {
        if (!g.progressive) {
            return
        }
        var b = g.API;
        var f = b.next;
        var i = b.prev;
        var h = b.prepareTx;
        var l = a.type(g.progressive);
        var k, j;
        if (l == "array") {
            k = g.progressive
        } else {
            if (a.isFunction(g.progressive)) {
                k = g.progressive(g)
            } else {
                if (l == "string") {
                    j = a(g.progressive);
                    k = a.trim(j.html());
                    if (!k) {
                        return
                    }
                    if (/^(\[)/.test(k)) {
                        try {
                            k = a.parseJSON(k)
                        } catch (d) {
                            b.log("error parsing progressive slides", d);
                            return
                        }
                    } else {
                        k = k.split(new RegExp(j.data("cycle-split") || "\n"));
                        if (!k[k.length - 1]) {
                            k.pop()
                        }
                    }
                }
            }
        }
        if (h) {
            b.prepareTx = function(n, e) {
                var m, o;
                if (n || k.length === 0) {
                    h.apply(g.API, [n, e]);
                    return
                }
                if (e && g.currSlide == (g.slideCount - 1)) {
                    o = k[0];
                    k = k.slice(1);
                    g.container.one("cycle-slide-added", function(p, q) {
                        setTimeout(function() {
                            q.API.advanceSlide(1)
                        }, 50)
                    });
                    g.API.add(o)
                } else {
                    if (!e && g.currSlide === 0) {
                        m = k.length - 1;
                        o = k[m];
                        k = k.slice(0, m);
                        g.container.one("cycle-slide-added", function(p, q) {
                            setTimeout(function() {
                                q.currSlide = 1;
                                q.API.advanceSlide(-1)
                            }, 50)
                        });
                        g.API.add(o, true)
                    } else {
                        h.apply(g.API, [n, e])
                    }
                }
            }
        }
        if (f) {
            b.next = function() {
                var e = this.opts();
                if (k.length && e.currSlide == (e.slideCount - 1)) {
                    var m = k[0];
                    k = k.slice(1);
                    e.container.one("cycle-slide-added", function(n, o) {
                        f.apply(o.API);
                        o.container.removeClass("cycle-loading")
                    });
                    e.container.addClass("cycle-loading");
                    e.API.add(m)
                } else {
                    f.apply(e.API)
                }
            }
        }
        if (i) {
            b.prev = function() {
                var m = this.opts();
                if (k.length && m.currSlide === 0) {
                    var e = k.length - 1;
                    var n = k[e];
                    k = k.slice(0, e);
                    m.container.one("cycle-slide-added", function(o, p) {
                        p.currSlide = 1;
                        p.API.advanceSlide(-1);
                        p.container.removeClass("cycle-loading")
                    });
                    m.container.addClass("cycle-loading");
                    m.API.add(n, true)
                } else {
                    i.apply(m.API)
                }
            }
        }
    })
})(jQuery);
/* tmpl plugin for Cycle2;  version: 20121227 */
(function(a) {
    a.extend(a.fn.cycle.defaults, {
        tmplRegex: "{{((.)?.*?)}}"
    });
    a.extend(a.fn.cycle.API, {
        tmpl: function(e, c) {
            var d = new RegExp(c.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g");
            var b = a.makeArray(arguments);
            b.shift();
            return e.replace(d, function(f, n) {
                var g, h, l, m, k = n.split(".");
                for (g = 0; g < b.length; g++) {
                    l = b[g];
                    if (!l) {
                        continue
                    }
                    if (k.length > 1) {
                        m = l;
                        for (h = 0; h < k.length; h++) {
                            l = m;
                            m = m[k[h]] || n
                        }
                    } else {
                        m = l[n]
                    }
                    if (a.isFunction(m)) {
                        return m.apply(l, b)
                    }
                    if (m !== undefined && m !== null && m != n) {
                        return m
                    }
                }
                return n
            })
        }
    })
})(jQuery);
/* swipe plugin for Cycle2;  version: 20121120 */
(function(a) {
    var b = "ontouchend" in document;
    a.event.special.swipe = a.event.special.swipe || {
        scrollSupressionThreshold: 10,
        durationThreshold: 1000,
        horizontalDistanceThreshold: 30,
        verticalDistanceThreshold: 75,
        setup: function() {
            var c = a(this);
            c.bind("touchstart", function(e) {
                var d = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                var h, g = {
                    time: (new Date()).getTime(),
                    coords: [d.pageX, d.pageY],
                    origin: a(e.target)
                };

                function f(j) {
                    if (!g) {
                        return
                    }
                    var i = j.originalEvent.touches ? j.originalEvent.touches[0] : j;
                    h = {
                        time: (new Date()).getTime(),
                        coords: [i.pageX, i.pageY]
                    };
                    if (Math.abs(g.coords[0] - h.coords[0]) > a.event.special.swipe.scrollSupressionThreshold) {
                        j.preventDefault()
                    }
                }
                c.bind("touchmove", f).one("touchend", function(i) {
                    c.unbind("touchmove", f);
                    if (g && h) {
                        if (h.time - g.time < a.event.special.swipe.durationThreshold && Math.abs(g.coords[0] - h.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(g.coords[1] - h.coords[1]) < a.event.special.swipe.verticalDistanceThreshold) {
                            g.origin.trigger("swipe").trigger(g.coords[0] > h.coords[0] ? "swipeleft" : "swiperight")
                        }
                    }
                    g = h = undefined
                })
            })
        }
    };
    a.event.special.swipeleft = a.event.special.swipeleft || {
        setup: function() {
            a(this).bind("swipe", a.noop)
        }
    };
    a.event.special.swiperight = a.event.special.swiperight || a.event.special.swipeleft
})(jQuery);
(function(a, k, g) {
    var i = "tooltipster",
        c = {
            animation: "fade",
            arrow: true,
            arrowColor: "",
            autoClose: true,
            content: null,
            contentAsHTML: false,
            contentCloning: true,
            debug: true,
            delay: 200,
            minWidth: 0,
            maxWidth: null,
            functionInit: function(m, l) {},
            functionBefore: function(m, l) {
                l()
            },
            functionReady: function(l, m) {},
            functionAfter: function(l) {},
            icon: "(?)",
            iconCloning: true,
            iconDesktop: false,
            iconTouch: false,
            iconTheme: "tooltipster-icon",
            interactive: false,
            interactiveTolerance: 350,
            multiple: false,
            offsetX: 0,
            offsetY: 0,
            onlyOne: false,
            position: "top",
            positionTracker: false,
            speed: 350,
            timer: 0,
            theme: "tooltipster-default",
            touchDevices: true,
            trigger: "hover",
            updateAnimation: true
        };

    function h(l, m) {
        this.bodyOverflowX;
        this.callbacks = {
            hide: [],
            show: []
        };
        this.checkInterval = null;
        this.Content;
        this.$el = a(l);
        this.$elProxy;
        this.elProxyPosition;
        this.enabled = true;
        this.options = a.extend({}, c, m);
        this.mouseIsOverProxy = false;
        this.namespace = "tooltipster-" + Math.round(Math.random() * 100000);
        this.Status = "hidden";
        this.timerHide = null;
        this.timerShow = null;
        this.$tooltip;
        this.options.iconTheme = this.options.iconTheme.replace(".", "");
        this.options.theme = this.options.theme.replace(".", "");
        this._init()
    }
    h.prototype = {
        _init: function() {
            var m = this;
            if (g.querySelector) {
                if (m.options.content !== null) {
                    m._content_set(m.options.content)
                } else {
                    var n = m.$el.attr("title");
                    if (typeof n === "undefined") {
                        n = null
                    }
                    m._content_set(n)
                }
                var l = m.options.functionInit.call(m.$el, m.$el, m.Content);
                if (typeof l !== "undefined") {
                    m._content_set(l)
                }
                m.$el.removeAttr("title").addClass("tooltipstered");
                if ((!e && m.options.iconDesktop) || (e && m.options.iconTouch)) {
                    if (typeof m.options.icon === "string") {
                        m.$elProxy = a('<span class="' + m.options.iconTheme + '"></span>');
                        m.$elProxy.text(m.options.icon)
                    } else {
                        if (m.options.iconCloning) {
                            m.$elProxy = m.options.icon.clone(true)
                        } else {
                            m.$elProxy = m.options.icon
                        }
                    }
                    m.$elProxy.insertAfter(m.$el)
                } else {
                    m.$elProxy = m.$el
                }
                if (m.options.trigger == "hover") {
                    m.$elProxy.on("mouseenter." + m.namespace, function() {
                        if (!f() || m.options.touchDevices) {
                            m.mouseIsOverProxy = true;
                            m._show()
                        }
                    }).on("mouseleave." + m.namespace, function() {
                        if (!f() || m.options.touchDevices) {
                            m.mouseIsOverProxy = false
                        }
                    });
                    if (e && m.options.touchDevices) {
                        m.$elProxy.on("touchstart." + m.namespace, function() {
                            m._showNow()
                        })
                    }
                } else {
                    if (m.options.trigger == "click") {
                        m.$elProxy.on("click." + m.namespace, function() {
                            if (!f() || m.options.touchDevices) {
                                m._show()
                            }
                        })
                    }
                }
            }
        },
        _show: function() {
            var l = this;
            if (l.Status != "shown" && l.Status != "appearing") {
                if (l.options.delay) {
                    l.timerShow = setTimeout(function() {
                        if (l.options.trigger == "click" || (l.options.trigger == "hover" && l.mouseIsOverProxy)) {
                            l._showNow()
                        }
                    }, l.options.delay)
                } else {
                    l._showNow()
                }
            }
        },
        _showNow: function(l) {
            var m = this;
            m.options.functionBefore.call(m.$el, m.$el, function() {
                if (m.enabled && m.Content !== null) {
                    if (l) {
                        m.callbacks.show.push(l)
                    }
                    m.callbacks.hide = [];
                    clearTimeout(m.timerShow);
                    m.timerShow = null;
                    clearTimeout(m.timerHide);
                    m.timerHide = null;
                    if (m.options.onlyOne) {
                        a(".tooltipstered").not(m.$el).each(function(y, x) {
                            var w = a(x),
                                z = w.data("tooltipster-ns");
                            a.each(z, function(B, D) {
                                var C = w.data(D),
                                    E = C.status(),
                                    A = C.option("autoClose");
                                if (E !== "hidden" && E !== "disappearing" && A) {
                                    C.hide()
                                }
                            })
                        })
                    }
                    var q = function() {
                        m.Status = "shown";
                        a.each(m.callbacks.show, function(x, w) {
                            w.call(m.$el)
                        });
                        m.callbacks.show = []
                    };
                    if (m.Status !== "hidden") {
                        var p = 0;
                        if (m.Status === "disappearing") {
                            m.Status = "appearing";
                            if (j()) {
                                m.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + m.options.animation + "-show");
                                if (m.options.speed > 0) {
                                    m.$tooltip.delay(m.options.speed)
                                }
                                m.$tooltip.queue(q)
                            } else {
                                m.$tooltip.stop().fadeIn(q)
                            }
                        } else {
                            if (m.Status === "shown") {
                                q()
                            }
                        }
                    } else {
                        m.Status = "appearing";
                        var p = m.options.speed;
                        m.bodyOverflowX = a("body").css("overflow-x");
                        a("body").css("overflow-x", "hidden");
                        var n = "tooltipster-" + m.options.animation,
                            o = "-webkit-transition-duration: " + m.options.speed + "ms; -webkit-animation-duration: " + m.options.speed + "ms; -moz-transition-duration: " + m.options.speed + "ms; -moz-animation-duration: " + m.options.speed + "ms; -o-transition-duration: " + m.options.speed + "ms; -o-animation-duration: " + m.options.speed + "ms; -ms-transition-duration: " + m.options.speed + "ms; -ms-animation-duration: " + m.options.speed + "ms; transition-duration: " + m.options.speed + "ms; animation-duration: " + m.options.speed + "ms;",
                            s = m.options.minWidth ? "min-width:" + Math.round(m.options.minWidth) + "px;" : "",
                            r = m.options.maxWidth ? "max-width:" + Math.round(m.options.maxWidth) + "px;" : "",
                            t = m.options.interactive ? "pointer-events: auto;" : "";
                        m.$tooltip = a('<div class="tooltipster-base ' + m.options.theme + '" style="' + s + " " + r + " " + t + " " + o + '"><div class="tooltipster-content"></div></div>');
                        if (j()) {
                            m.$tooltip.addClass(n)
                        }
                        m._content_insert();
                        m.$tooltip.appendTo("body");
                        m.reposition();
                        m.options.functionReady.call(m.$el, m.$el, m.$tooltip);
                        if (j()) {
                            m.$tooltip.addClass(n + "-show");
                            if (m.options.speed > 0) {
                                m.$tooltip.delay(m.options.speed)
                            }
                            m.$tooltip.queue(q)
                        } else {
                            m.$tooltip.css("display", "none").fadeIn(m.options.speed, q)
                        }
                        m._interval_set();
                        a(k).on("scroll." + m.namespace + " resize." + m.namespace, function() {
                            m.reposition()
                        });
                        if (m.options.autoClose) {
                            a("body").off("." + m.namespace);
                            if (m.options.trigger == "hover") {
                                if (e) {
                                    setTimeout(function() {
                                        a("body").on("touchstart." + m.namespace, function() {
                                            m.hide()
                                        })
                                    }, 0)
                                }
                                if (m.options.interactive) {
                                    if (e) {
                                        m.$tooltip.on("touchstart." + m.namespace, function(w) {
                                            w.stopPropagation()
                                        })
                                    }
                                    var u = null;
                                    m.$elProxy.add(m.$tooltip).on("mouseleave." + m.namespace + "-autoClose", function() {
                                        clearTimeout(u);
                                        u = setTimeout(function() {
                                            m.hide()
                                        }, m.options.interactiveTolerance)
                                    }).on("mouseenter." + m.namespace + "-autoClose", function() {
                                        clearTimeout(u)
                                    })
                                } else {
                                    m.$elProxy.on("mouseleave." + m.namespace + "-autoClose", function() {
                                        m.hide()
                                    })
                                }
                            } else {
                                if (m.options.trigger == "click") {
                                    setTimeout(function() {
                                        a("body").on("click." + m.namespace + " touchstart." + m.namespace, function() {
                                            m.hide()
                                        })
                                    }, 0);
                                    if (m.options.interactive) {
                                        m.$tooltip.on("click." + m.namespace + " touchstart." + m.namespace, function(w) {
                                            w.stopPropagation()
                                        })
                                    }
                                }
                            }
                        }
                    }
                    if (m.options.timer > 0) {
                        m.timerHide = setTimeout(function() {
                            m.timerHide = null;
                            m.hide()
                        }, m.options.timer + p)
                    }
                }
            })
        },
        _interval_set: function() {
            var l = this;
            l.checkInterval = setInterval(function() {
                if (a("body").find(l.$el).length === 0 || a("body").find(l.$elProxy).length === 0 || l.Status == "hidden" || a("body").find(l.$tooltip).length === 0) {
                    if (l.Status == "shown" || l.Status == "appearing") {
                        l.hide()
                    }
                    l._interval_cancel()
                } else {
                    if (l.options.positionTracker) {
                        var n = l._repositionInfo(l.$elProxy),
                            m = false;
                        if (b(n.dimension, l.elProxyPosition.dimension)) {
                            if (l.$elProxy.css("position") === "fixed") {
                                if (b(n.position, l.elProxyPosition.position)) {
                                    m = true
                                }
                            } else {
                                if (b(n.offset, l.elProxyPosition.offset)) {
                                    m = true
                                }
                            }
                        }
                        if (!m) {
                            l.reposition()
                        }
                    }
                }
            }, 200)
        },
        _interval_cancel: function() {
            clearInterval(this.checkInterval);
            this.checkInterval = null
        },
        _content_set: function(l) {
            if (typeof l === "object" && l !== null && this.options.contentCloning) {
                l = l.clone(true)
            }
            this.Content = l
        },
        _content_insert: function() {
            var m = this,
                l = this.$tooltip.find(".tooltipster-content");
            if (typeof m.Content === "string" && !m.options.contentAsHTML) {
                l.text(m.Content)
            } else {
                l.empty().append(m.Content)
            }
        },
        _update: function(l) {
            var m = this;
            m._content_set(l);
            if (m.Content !== null) {
                if (m.Status !== "hidden") {
                    m._content_insert();
                    m.reposition();
                    if (m.options.updateAnimation) {
                        if (j()) {
                            m.$tooltip.css({
                                width: "",
                                "-webkit-transition": "all " + m.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                                "-moz-transition": "all " + m.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                                "-o-transition": "all " + m.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                                "-ms-transition": "all " + m.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                                transition: "all " + m.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
                            }).addClass("tooltipster-content-changing");
                            setTimeout(function() {
                                if (m.Status != "hidden") {
                                    m.$tooltip.removeClass("tooltipster-content-changing");
                                    setTimeout(function() {
                                        if (m.Status !== "hidden") {
                                            m.$tooltip.css({
                                                "-webkit-transition": m.options.speed + "ms",
                                                "-moz-transition": m.options.speed + "ms",
                                                "-o-transition": m.options.speed + "ms",
                                                "-ms-transition": m.options.speed + "ms",
                                                transition: m.options.speed + "ms"
                                            })
                                        }
                                    }, m.options.speed)
                                }
                            }, m.options.speed)
                        } else {
                            m.$tooltip.fadeTo(m.options.speed, 0.5, function() {
                                if (m.Status != "hidden") {
                                    m.$tooltip.fadeTo(m.options.speed, 1)
                                }
                            })
                        }
                    }
                }
            } else {
                m.hide()
            }
        },
        _repositionInfo: function(l) {
            return {
                dimension: {
                    height: l.outerHeight(false),
                    width: l.outerWidth(false)
                },
                offset: l.offset(),
                position: {
                    left: parseInt(l.css("left")),
                    top: parseInt(l.css("top"))
                }
            }
        },
        hide: function(l) {
            var o = this;
            if (l) {
                o.callbacks.hide.push(l)
            }
            o.callbacks.show = [];
            clearTimeout(o.timerShow);
            o.timerShow = null;
            clearTimeout(o.timerHide);
            o.timerHide = null;
            var n = function() {
                a.each(o.callbacks.hide, function(q, p) {
                    p.call(o.$el)
                });
                o.callbacks.hide = []
            };
            if (o.Status == "shown" || o.Status == "appearing") {
                o.Status = "disappearing";
                var m = function() {
                    o.Status = "hidden";
                    if (typeof o.Content == "object" && o.Content !== null) {
                        o.Content.detach()
                    }
                    o.$tooltip.remove();
                    o.$tooltip = null;
                    a(k).off("." + o.namespace);
                    a("body").off("." + o.namespace).css("overflow-x", o.bodyOverflowX);
                    a("body").off("." + o.namespace);
                    o.$elProxy.off("." + o.namespace + "-autoClose");
                    o.options.functionAfter.call(o.$el, o.$el);
                    n()
                };
                if (j()) {
                    o.$tooltip.clearQueue().removeClass("tooltipster-" + o.options.animation + "-show").addClass("tooltipster-dying");
                    if (o.options.speed > 0) {
                        o.$tooltip.delay(o.options.speed)
                    }
                    o.$tooltip.queue(m)
                } else {
                    o.$tooltip.stop().fadeOut(o.options.speed, m)
                }
            } else {
                if (o.Status == "hidden") {
                    n()
                }
            }
            return o
        },
        show: function(l) {
            this._showNow(l);
            return this
        },
        update: function(l) {
            return this.content(l)
        },
        content: function(l) {
            if (typeof l === "undefined") {
                return this.Content
            } else {
                this._update(l);
                return this
            }
        },
        reposition: function() {
            var Z = this;
            if (a("body").find(Z.$tooltip).length !== 0) {
                Z.$tooltip.css("width", "");
                Z.elProxyPosition = Z._repositionInfo(Z.$elProxy);
                var H = null,
                    ag = a(k).width(),
                    Y = Z.elProxyPosition,
                    ae = Z.$tooltip.outerWidth(false),
                    ad = Z.$tooltip.innerWidth() + 1,
                    ac = Z.$tooltip.outerHeight(false);
                if (Z.$elProxy.is("area")) {
                    var s = Z.$elProxy.attr("shape"),
                        O = Z.$elProxy.parent().attr("name"),
                        N = a('img[usemap="#' + O + '"]'),
                        P = N.offset().left,
                        Q = N.offset().top,
                        p = Z.$elProxy.attr("coords") !== undefined ? Z.$elProxy.attr("coords").split(",") : undefined;
                    if (s == "circle") {
                        var o = parseInt(p[0]),
                            w = parseInt(p[1]),
                            x = parseInt(p[2]);
                        Y.dimension.height = x * 2;
                        Y.dimension.width = x * 2;
                        Y.offset.top = Q + w - x;
                        Y.offset.left = P + o - x
                    } else {
                        if (s == "rect") {
                            var o = parseInt(p[0]),
                                w = parseInt(p[1]),
                                r = parseInt(p[2]),
                                l = parseInt(p[3]);
                            Y.dimension.height = l - w;
                            Y.dimension.width = r - o;
                            Y.offset.top = Q + w;
                            Y.offset.left = P + o
                        } else {
                            if (s == "poly") {
                                var y = [],
                                    z = [],
                                    t = 0,
                                    u = 0,
                                    m = 0,
                                    n = 0,
                                    A = "even";
                                for (var L = 0; L < p.length; L++) {
                                    var q = parseInt(p[L]);
                                    if (A == "even") {
                                        if (q > m) {
                                            m = q;
                                            if (L === 0) {
                                                t = m
                                            }
                                        }
                                        if (q < t) {
                                            t = q
                                        }
                                        A = "odd"
                                    } else {
                                        if (q > n) {
                                            n = q;
                                            if (L == 1) {
                                                u = n
                                            }
                                        }
                                        if (q < u) {
                                            u = q
                                        }
                                        A = "even"
                                    }
                                }
                                Y.dimension.height = n - u;
                                Y.dimension.width = m - t;
                                Y.offset.top = Q + u;
                                Y.offset.left = P + t
                            } else {
                                Y.dimension.height = N.outerHeight(false);
                                Y.dimension.width = N.outerWidth(false);
                                Y.offset.top = Q;
                                Y.offset.left = P
                            }
                        }
                    }
                }
                var R = 0,
                    S = 0,
                    T = 0,
                    W = parseInt(Z.options.offsetY),
                    V = parseInt(Z.options.offsetX),
                    X = Z.options.position;

                function J() {
                    var ah = a(k).scrollLeft();
                    if ((R - ah) < 0) {
                        H = R - ah;
                        R = ah
                    }
                    if (((R + ae) - ah) > ag) {
                        H = R - ((ag + ah) - ae);
                        R = (ag + ah) - ae
                    }
                }

                function K(ai, ah) {
                    if (((Y.offset.top - a(k).scrollTop() - ac - W - 12) < 0) && (ah.indexOf("top") > -1)) {
                        X = ai
                    }
                    if (((Y.offset.top + Y.dimension.height + ac + 12 + W) > (a(k).scrollTop() + a(k).height())) && (ah.indexOf("bottom") > -1)) {
                        X = ai;
                        T = (Y.offset.top - ac) - W - 12
                    }
                }
                if (X == "top") {
                    var M = (Y.offset.left + ae) - (Y.offset.left + Y.dimension.width);
                    R = (Y.offset.left + V) - (M / 2);
                    T = (Y.offset.top - ac) - W - 12;
                    J();
                    K("bottom", "top")
                }
                if (X == "top-left") {
                    R = Y.offset.left + V;
                    T = (Y.offset.top - ac) - W - 12;
                    J();
                    K("bottom-left", "top-left")
                }
                if (X == "top-right") {
                    R = (Y.offset.left + Y.dimension.width + V) - ae;
                    T = (Y.offset.top - ac) - W - 12;
                    J();
                    K("bottom-right", "top-right")
                }
                if (X == "bottom") {
                    var M = (Y.offset.left + ae) - (Y.offset.left + Y.dimension.width);
                    R = Y.offset.left - (M / 2) + V;
                    T = (Y.offset.top + Y.dimension.height) + W + 12;
                    J();
                    K("top", "bottom")
                }
                if (X == "bottom-left") {
                    R = Y.offset.left + V;
                    T = (Y.offset.top + Y.dimension.height) + W + 12;
                    J();
                    K("top-left", "bottom-left")
                }
                if (X == "bottom-right") {
                    R = (Y.offset.left + Y.dimension.width + V) - ae;
                    T = (Y.offset.top + Y.dimension.height) + W + 12;
                    J();
                    K("top-right", "bottom-right")
                }
                if (X == "left") {
                    R = Y.offset.left - V - ae - 12;
                    S = Y.offset.left + V + Y.dimension.width + 12;
                    var af = (Y.offset.top + ac) - (Y.offset.top + Y.dimension.height);
                    T = Y.offset.top - (af / 2) - W;
                    if ((R < 0) && ((S + ae) > ag)) {
                        var I = parseFloat(Z.$tooltip.css("border-width")) * 2,
                            U = (ae + R) - I;
                        Z.$tooltip.css("width", U + "px");
                        ac = Z.$tooltip.outerHeight(false);
                        R = Y.offset.left - V - U - 12 - I;
                        af = (Y.offset.top + ac) - (Y.offset.top + Y.dimension.height);
                        T = Y.offset.top - (af / 2) - W
                    } else {
                        if (R < 0) {
                            R = Y.offset.left + V + Y.dimension.width + 12;
                            H = "left"
                        }
                    }
                }
                if (X == "right") {
                    R = Y.offset.left + V + Y.dimension.width + 12;
                    S = Y.offset.left - V - ae - 12;
                    var af = (Y.offset.top + ac) - (Y.offset.top + Y.dimension.height);
                    T = Y.offset.top - (af / 2) - W;
                    if (((R + ae) > ag) && (S < 0)) {
                        var I = parseFloat(Z.$tooltip.css("border-width")) * 2,
                            U = (ag - R) - I;
                        Z.$tooltip.css("width", U + "px");
                        ac = Z.$tooltip.outerHeight(false);
                        af = (Y.offset.top + ac) - (Y.offset.top + Y.dimension.height);
                        T = Y.offset.top - (af / 2) - W
                    } else {
                        if ((R + ae) > ag) {
                            R = Y.offset.left - V - ae - 12;
                            H = "right"
                        }
                    }
                }
                if (Z.options.arrow) {
                    var E = "tooltipster-arrow-" + X;
                    if (Z.options.arrowColor.length < 1) {
                        var F = Z.$tooltip.css("background-color")
                    } else {
                        var F = Z.options.arrowColor
                    }
                    if (!H) {
                        H = ""
                    } else {
                        if (H == "left") {
                            E = "tooltipster-arrow-right";
                            H = ""
                        } else {
                            if (H == "right") {
                                E = "tooltipster-arrow-left";
                                H = ""
                            } else {
                                H = "left:" + Math.round(H) + "px;"
                            }
                        }
                    }
                    if ((X == "top") || (X == "top-left") || (X == "top-right")) {
                        var ab = parseFloat(Z.$tooltip.css("border-bottom-width")),
                            aa = Z.$tooltip.css("border-bottom-color")
                    } else {
                        if ((X == "bottom") || (X == "bottom-left") || (X == "bottom-right")) {
                            var ab = parseFloat(Z.$tooltip.css("border-top-width")),
                                aa = Z.$tooltip.css("border-top-color")
                        } else {
                            if (X == "left") {
                                var ab = parseFloat(Z.$tooltip.css("border-right-width")),
                                    aa = Z.$tooltip.css("border-right-color")
                            } else {
                                if (X == "right") {
                                    var ab = parseFloat(Z.$tooltip.css("border-left-width")),
                                        aa = Z.$tooltip.css("border-left-color")
                                } else {
                                    var ab = parseFloat(Z.$tooltip.css("border-bottom-width")),
                                        aa = Z.$tooltip.css("border-bottom-color")
                                }
                            }
                        }
                    }
                    if (ab > 1) {
                        ab++
                    }
                    var B = "";
                    if (ab !== 0) {
                        var D = "",
                            C = "border-color: " + aa + ";";
                        if (E.indexOf("bottom") !== -1) {
                            D = "margin-top: -" + Math.round(ab) + "px;"
                        } else {
                            if (E.indexOf("top") !== -1) {
                                D = "margin-bottom: -" + Math.round(ab) + "px;"
                            } else {
                                if (E.indexOf("left") !== -1) {
                                    D = "margin-right: -" + Math.round(ab) + "px;"
                                } else {
                                    if (E.indexOf("right") !== -1) {
                                        D = "margin-left: -" + Math.round(ab) + "px;"
                                    }
                                }
                            }
                        }
                        B = '<span class="tooltipster-arrow-border" style="' + D + " " + C + ';"></span>'
                    }
                    Z.$tooltip.find(".tooltipster-arrow").remove();
                    var G = '<div class="' + E + ' tooltipster-arrow" style="' + H + '">' + B + '<span style="border-color:' + F + ';"></span></div>';
                    Z.$tooltip.append(G)
                }
                Z.$tooltip.css({
                    top: Math.round(T) + "px",
                    left: Math.round(R) + "px"
                })
            }
            return Z
        },
        enable: function() {
            this.enabled = true;
            return this
        },
        disable: function() {
            this.hide();
            this.enabled = false;
            return this
        },
        destroy: function() {
            var m = this;
            m.hide();
            if (m.$el[0] !== m.$elProxy[0]) {
                m.$elProxy.remove()
            }
            m.$el.removeData(m.namespace).off("." + m.namespace);
            var l = m.$el.data("tooltipster-ns");
            if (l.length === 1) {
                var n = (typeof m.Content === "string") ? m.Content : a("<div></div>").append(m.Content).html();
                m.$el.removeClass("tooltipstered").attr("title", n).removeData(m.namespace).removeData("tooltipster-ns").off("." + m.namespace)
            } else {
                l = a.grep(l, function(o, p) {
                    return o !== m.namespace
                });
                m.$el.data("tooltipster-ns", l)
            }
            return m
        },
        elementIcon: function() {
            return (this.$el[0] !== this.$elProxy[0]) ? this.$elProxy[0] : undefined
        },
        elementTooltip: function() {
            return this.$tooltip ? this.$tooltip[0] : undefined
        },
        option: function(l, m) {
            if (typeof m == "undefined") {
                return this.options[l]
            } else {
                this.options[l] = m;
                return this
            }
        },
        status: function() {
            return this.Status
        }
    };
    a.fn[i] = function() {
        var l = arguments;
        if (this.length === 0) {
            if (typeof l[0] === "string") {
                var p = true;
                switch (l[0]) {
                    case "setDefaults":
                        a.extend(c, l[1]);
                        break;
                    default:
                        p = false;
                        break
                }
                if (p) {
                    return true
                } else {
                    return this
                }
            } else {
                return this
            }
        } else {
            if (typeof l[0] === "string") {
                var s = "#*$~&";
                this.each(function() {
                    var t = a(this).data("tooltipster-ns"),
                        w = t ? a(this).data(t[0]) : null;
                    if (w) {
                        if (typeof w[l[0]] === "function") {
                            var u = w[l[0]](l[1], l[2])
                        } else {
                            throw new Error('Unknown method .tooltipster("' + l[0] + '")')
                        }
                        if (u !== w) {
                            s = u;
                            return false
                        }
                    } else {
                        throw new Error("You called Tooltipster's \"" + l[0] + '" method on an uninitialized element')
                    }
                });
                return (s !== "#*$~&") ? s : this
            } else {
                var o = [],
                    r = l[0] && typeof l[0].multiple !== "undefined",
                    q = (r && l[0].multiple) || (!r && c.multiple),
                    n = l[0] && typeof l[0].debug !== "undefined",
                    m = (n && l[0].debug) || (!n && c.debug);
                this.each(function() {
                    var t = false,
                        w = a(this).data("tooltipster-ns"),
                        u = null;
                    if (!w) {
                        t = true
                    } else {
                        if (q) {
                            t = true
                        } else {
                            if (m) {}
                        }
                    }
                    if (t) {
                        u = new h(this, l[0]);
                        if (!w) {
                            w = []
                        }
                        w.push(u.namespace);
                        a(this).data("tooltipster-ns", w);
                        a(this).data(u.namespace, u)
                    }
                    o.push(u)
                });
                if (q) {
                    return o
                } else {
                    return this
                }
            }
        }
    };

    function b(l, m) {
        var n = true;
        a.each(l, function(p, o) {
            if (typeof m[p] === "undefined" || l[p] !== m[p]) {
                n = false;
                return false
            }
        });
        return n
    }
    var e = !!("ontouchstart" in k);
    var d = false;
    a("body").one("mousemove", function() {
        d = true
    });

    function f() {
        return (!d && e)
    }

    function j() {
        var l = g.body || g.documentElement,
            o = l.style,
            n = "transition";
        if (typeof o[n] == "string") {
            return true
        }
        v = ["Moz", "Webkit", "Khtml", "O", "ms"], n = n.charAt(0).toUpperCase() + n.substr(1);
        for (var m = 0; m < v.length; m++) {
            if (typeof o[v[m] + n] == "string") {
                return true
            }
        }
        return false
    }
})(jQuery, window, document);
/* http://mths.be/placeholder v2.0.8 by @mathias */
(function(o, d, a) {
    var g = Object.prototype.toString.call(o.operamini) == "[object OperaMini]";
    var f = "placeholder" in d.createElement("input") && !g;
    var h = "placeholder" in d.createElement("textarea") && !g;
    var k = a.fn;
    var n = a.valHooks;
    var j = a.propHooks;
    var e;
    var i;
    if (f && h) {
        i = k.placeholder = function() {
            return this
        };
        i.input = i.textarea = true
    } else {
        i = k.placeholder = function() {
            var p = this;
            p.filter((f ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": c,
                "blur.placeholder": m
            }).data("placeholder-enabled", true).trigger("blur.placeholder");
            return p
        };
        i.input = f;
        i.textarea = h;
        e = {
            get: function(r) {
                var p = a(r);
                var q = p.data("placeholder-password");
                if (q) {
                    return q[0].value
                }
                return p.data("placeholder-enabled") && p.hasClass("placeholder") ? "" : r.value
            },
            set: function(r, s) {
                var p = a(r);
                var q = p.data("placeholder-password");
                if (q) {
                    return q[0].value = s
                }
                if (!p.data("placeholder-enabled")) {
                    return r.value = s
                }
                if (s == "") {
                    r.value = s;
                    if (r != l()) {
                        m.call(r)
                    }
                } else {
                    if (p.hasClass("placeholder")) {
                        c.call(r, true, s) || (r.value = s)
                    } else {
                        r.value = s
                    }
                }
                return p
            }
        };
        if (!f) {
            n.input = e;
            j.value = e
        }
        if (!h) {
            n.textarea = e;
            j.value = e
        }
        a(function() {
            a(d).delegate("form", "submit.placeholder", function() {
                var p = a(".placeholder", this).each(c);
                setTimeout(function() {
                    p.each(m)
                }, 10)
            })
        });
        a(o).bind("beforeunload.placeholder", function() {
            a(".placeholder").each(function() {
                this.value = ""
            })
        })
    }

    function b(p) {
        var q = {};
        var r = /^jQuery\d+$/;
        a.each(p.attributes, function(t, s) {
            if (s.specified && !r.test(s.name)) {
                q[s.name] = s.value
            }
        });
        return q
    }

    function c(q, s) {
        var r = this;
        var p = a(r);
        if (r.value == p.attr("placeholder") && p.hasClass("placeholder")) {
            if (p.data("placeholder-password")) {
                p = p.hide().next().show().attr("id", p.removeAttr("id").data("placeholder-id"));
                if (q === true) {
                    return p[0].value = s
                }
                p.focus()
            } else {
                r.value = "";
                p.removeClass("placeholder");
                r == l() && r.select()
            }
        }
    }

    function m() {
        var q;
        var t = this;
        var p = a(t);
        var s = this.id;
        if (t.value == "") {
            if (t.type == "password") {
                if (!p.data("placeholder-textinput")) {
                    try {
                        q = p.clone().attr({
                            type: "text"
                        })
                    } catch (r) {
                        q = a("<input>").attr(a.extend(b(this), {
                            type: "text"
                        }))
                    }
                    q.removeAttr("name").data({
                        "placeholder-password": p,
                        "placeholder-id": s
                    }).bind("focus.placeholder", c);
                    p.data({
                        "placeholder-textinput": q,
                        "placeholder-id": s
                    }).before(q)
                }
                p = p.removeAttr("id").hide().prev().attr("id", s).show()
            }
            p.addClass("placeholder");
            p[0].value = p.attr("placeholder")
        } else {
            p.removeClass("placeholder")
        }
    }

    function l() {
        try {
            return d.activeElement
        } catch (p) {}
    }
}(this, document, jQuery));
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function(a) {
    function m() {
        var n = document.createElement("input");
        n.setAttribute("type", "range");
        return n.type !== "text"
    }
    var l = "rangeslider",
        k = [],
        j = 0,
        g = m(),
        c = {
            polyfill: true,
            rangeClass: "rangeslider",
            disabledClass: "rangeslider--disabled",
            fillClass: "rangeslider__fill",
            handleClass: "rangeslider__handle",
            startEvent: ["mousedown", "touchstart", "pointerdown"],
            moveEvent: ["mousemove", "touchmove", "pointermove"],
            endEvent: ["mouseup", "touchend", "pointerup"]
        };

    function d(o, p) {
        var n = Array.prototype.slice.call(arguments, 2);
        return setTimeout(function() {
            return o.apply(null, n)
        }, p)
    }

    function b(o, n) {
        n = n || 100;
        return function() {
            if (!o.debouncing) {
                var p = Array.prototype.slice.apply(arguments);
                o.lastReturnVal = o.apply(window, p);
                o.debouncing = true
            }
            clearTimeout(o.debounceTimeout);
            o.debounceTimeout = setTimeout(function() {
                o.debouncing = false
            }, n);
            return o.lastReturnVal
        }
    }

    function h(n) {
        if (!n) {
            return null
        }
        if (n.offsetWidth !== 0 || n.offsetHeight !== 0) {
            return false
        }
        return true
    }

    function f(n) {
        var p = [],
            o = n.parentNode;
        while (h(o)) {
            p.push(o);
            o = o.parentNode
        }
        return p
    }

    function e(p, u) {
        var q = f(p),
            r = q.length,
            o = [],
            n = p[u];
        if (r) {
            for (var s = 0; s < r; s++) {
                o[s] = q[s].style.display;
                q[s].style.display = "block";
                q[s].style.height = "0";
                q[s].style.overflow = "hidden";
                q[s].style.visibility = "hidden"
            }
            n = p[u];
            for (var t = 0; t < r; t++) {
                q[t].style.display = o[t];
                q[t].style.height = "";
                q[t].style.overflow = "";
                q[t].style.visibility = ""
            }
        }
        return n
    }

    function i(o, p) {
        this.$window = a(window);
        this.$document = a(document);
        this.$element = a(o);
        this.options = a.extend({}, c, p);
        this._defaults = c;
        this._name = l;
        this.startEvent = this.options.startEvent.join("." + l + " ") + "." + l;
        this.moveEvent = this.options.moveEvent.join("." + l + " ") + "." + l;
        this.endEvent = this.options.endEvent.join("." + l + " ") + "." + l;
        this.polyfill = this.options.polyfill;
        this.onInit = this.options.onInit;
        this.onSlideStart = this.options.onSlideStart;
        this.onSlide = this.options.onSlide;
        this.onSlideEnd = this.options.onSlideEnd;
        if (this.polyfill) {
            if (g) {
                return false
            }
        }
        this.identifier = "js-" + l + "-" + (j++);
        this.$fill = a('<div class="' + this.options.fillClass + '" />');
        this.$handle = a('<div class="' + this.options.handleClass + '" />');
        this.$range = a('<div class="' + this.options.rangeClass + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle);
        this.$element.css({
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: "0"
        });
        this.handleDown = a.proxy(this.handleDown, this);
        this.handleMove = a.proxy(this.handleMove, this);
        this.handleEnd = a.proxy(this.handleEnd, this);
        this.init();
        var n = this;
        this.$window.on("resize." + l, b(function() {
            d(function() {
                n.update()
            }, 300)
        }, 20));
        this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown);
        this.$element.on("change." + l, function(r, q) {
            if (q && q.origin === l) {
                return
            }
            var t = r.target.value,
                s = n.getPositionFromValue(t);
            n.setPosition(s)
        })
    }
    i.prototype.init = function() {
        if (this.onInit && typeof this.onInit === "function") {
            this.onInit()
        }
        this.update()
    };
    i.prototype.update = function() {
        this.min = parseFloat(this.$element[0].getAttribute("min") || 0);
        this.max = parseFloat(this.$element[0].getAttribute("max") || 100);
        this.value = parseFloat(this.$element[0].value || this.min + (this.max - this.min) / 2);
        this.step = parseFloat(this.$element[0].getAttribute("step") || 1);
        this.handleWidth = e(this.$handle[0], "offsetWidth");
        this.rangeWidth = e(this.$range[0], "offsetWidth");
        this.maxHandleX = this.rangeWidth - this.handleWidth;
        this.grabX = this.handleWidth / 2;
        this.position = this.getPositionFromValue(this.value);
        if (this.$element[0].disabled) {
            this.$range.addClass(this.options.disabledClass)
        } else {
            this.$range.removeClass(this.options.disabledClass)
        }
        this.setPosition(this.position)
    };
    i.prototype.handleDown = function(n) {
        n.preventDefault();
        this.$document.on(this.moveEvent, this.handleMove);
        this.$document.on(this.endEvent, this.handleEnd);
        if ((" " + n.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass) > -1) {
            return
        }
        var p = this.getRelativePosition(n),
            q = this.$range[0].getBoundingClientRect().left,
            o = this.getPositionFromNode(this.$handle[0]) - q;
        this.setPosition(p - this.grabX);
        if (this.onSlideStart && typeof this.onSlideStart === "function") {
            this.onSlideStart(this.position, this.value)
        }
        if (p >= o && p < o + this.handleWidth) {
            this.grabX = p - o
        }
    };
    i.prototype.handleMove = function(n) {
        n.preventDefault();
        var o = this.getRelativePosition(n);
        this.setPosition(o - this.grabX);
        if (this.onSlide && typeof this.onSlide === "function") {
            this.onSlide(this.position, this.value)
        }
    };
    i.prototype.handleEnd = function(n) {
        n.preventDefault();
        this.$document.off(this.moveEvent, this.handleMove);
        this.$document.off(this.endEvent, this.handleEnd);
        if (this.onSlideEnd && typeof this.onSlideEnd === "function") {
            this.onSlideEnd(this.position, this.value)
        }
    };
    i.prototype.cap = function(p, o, n) {
        if (p < o) {
            return o
        }
        if (p > n) {
            return n
        }
        return p
    };
    i.prototype.setPosition = function(o) {
        var p, n;
        p = (this.getValueFromPosition(this.cap(o, 0, this.maxHandleX)) / this.step) * this.step;
        n = this.getPositionFromValue(p);
        this.$fill[0].style.width = (n + this.grabX) + "px";
        this.$handle[0].style.left = n + "px";
        this.setValue(p);
        this.position = n;
        this.value = p
    };
    i.prototype.getPositionFromNode = function(o) {
        var n = 0;
        while (o !== null) {
            n += o.offsetLeft;
            o = o.offsetParent
        }
        return n
    };
    i.prototype.getRelativePosition = function(n) {
        var o = this.$range[0].getBoundingClientRect().left;
        return (n.pageX || n.originalEvent.clientX || n.originalEvent.touches[0].clientX || n.currentPoint.x) - o
    };
    i.prototype.getPositionFromValue = function(p) {
        var n, o;
        n = (p - this.min) / (this.max - this.min);
        o = n * this.maxHandleX;
        return o
    };
    i.prototype.getValueFromPosition = function(o) {
        var n, p;
        n = ((o) / (this.maxHandleX || 1));
        p = this.step * Math.round(n * (this.max - this.min) / this.step) + this.min;
        return Number((p).toFixed(2))
    };
    i.prototype.setValue = function(n) {
        if (n !== this.value) {
            this.$element.val(n).trigger("change", {
                origin: l
            })
        }
    };
    i.prototype.destroy = function() {
        this.$document.off(this.startEvent, "#" + this.identifier, this.handleDown);
        this.$element.off("." + l).removeAttr("style").removeData("plugin_" + l);
        if (this.$range && this.$range.length) {
            this.$range[0].parentNode.removeChild(this.$range[0])
        }
        k.splice(k.indexOf(this.$element[0]), 1);
        if (!k.length) {
            this.$window.off("." + l)
        }
    };
    a.fn[l] = function(n) {
        return this.each(function() {
            var o = a(this),
                p = o.data("plugin_" + l);
            if (!p) {
                o.data("plugin_" + l, (p = new i(this, n)));
                k.push(this)
            }
            if (typeof n === "string") {
                p[n]()
            }
        })
    }
}));
/* noUiSlider - 7.0.8 - 2014-09-24 14:32:09 */
(function(a) {
    function V(X) {
        return a.grep(X, function(Y, Z) {
            return Z === a.inArray(Y, X)
        })
    }

    function l(Y, X) {
        return Math.round(Y / X) * X
    }

    function z(X) {
        return typeof X === "number" && !isNaN(X) && isFinite(X)
    }

    function c(X) {
        var Y = Math.pow(10, 7);
        return Number((Math.round(X * Y) / Y).toFixed(7))
    }

    function e(Z, X, Y) {
        Z.addClass(X);
        setTimeout(function() {
            Z.removeClass(X)
        }, Y)
    }

    function B(X) {
        return Math.max(Math.min(X, 100), 0)
    }

    function j(X) {
        return a.isArray(X) ? X : [X]
    }
    var o = a(document),
        b = a.fn.val,
        C = ".nui",
        d = window.navigator.pointerEnabled ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup"
        } : window.navigator.msPointerEnabled ? {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        } : {
            start: "mousedown touchstart",
            move: "mousemove touchmove",
            end: "mouseup touchend"
        },
        k = ["noUi-target", "noUi-base", "noUi-origin", "noUi-handle", "noUi-horizontal", "noUi-vertical", "noUi-background", "noUi-connect", "noUi-ltr", "noUi-rtl", "noUi-dragable", "", "noUi-state-drag", "", "noUi-state-tap", "noUi-active", "", "noUi-stacking"];

    function F(X, Y) {
        return (100 / (Y - X))
    }

    function q(X, Y) {
        return (Y * 100) / (X[1] - X[0])
    }

    function T(X, Y) {
        return q(X, X[0] < 0 ? Y + Math.abs(X[0]) : Y - X[0])
    }

    function A(X, Y) {
        return ((Y * (X[1] - X[0])) / 100) + X[0]
    }

    function s(Z, X) {
        var Y = 1;
        while (Z >= X[Y]) {
            Y += 1
        }
        return Y
    }

    function U(ae, ad, ab) {
        if (ab >= ae.slice(-1)[0]) {
            return 100
        }
        var X = s(ab, ae),
            aa, ac, Y, Z;
        aa = ae[X - 1];
        ac = ae[X];
        Y = ad[X - 1];
        Z = ad[X];
        return Y + (T([aa, ac], ab) / F(Y, Z))
    }

    function r(ae, ad, ab) {
        if (ab >= 100) {
            return ae.slice(-1)[0]
        }
        var X = s(ab, ad),
            aa, ac, Y, Z;
        aa = ae[X - 1];
        ac = ae[X];
        Y = ad[X - 1];
        Z = ad[X];
        return A([aa, ac], (ab - Y) * F(Y, Z))
    }

    function u(ac, ad, aa, ab) {
        if (ab === 100) {
            return ab
        }
        var Z = s(ab, ac),
            X, Y;
        if (aa) {
            X = ac[Z - 1];
            Y = ac[Z];
            if ((ab - X) > ((Y - X) / 2)) {
                return Y
            }
            return X
        }
        if (!ad[Z - 1]) {
            return ab
        }
        return ac[Z - 1] + l(ab - ac[Z - 1], ad[Z - 1])
    }

    function w(X, aa, Z) {
        var Y;
        if (typeof aa === "number") {
            aa = [aa]
        }
        if (Object.prototype.toString.call(aa) !== "[object Array]") {
            throw new Error("noUiSlider: 'range' contains invalid value.")
        }
        if (X === "min") {
            Y = 0
        } else {
            if (X === "max") {
                Y = 100
            } else {
                Y = parseFloat(X)
            }
        }
        if (!z(Y) || !z(aa[0])) {
            throw new Error("noUiSlider: 'range' value isn't numeric.")
        }
        Z.xPct.push(Y);
        Z.xVal.push(aa[0]);
        if (!Y) {
            if (!isNaN(aa[1])) {
                Z.xSteps[0] = aa[1]
            }
        } else {
            Z.xSteps.push(isNaN(aa[1]) ? false : aa[1])
        }
    }

    function x(X, Y, Z) {
        if (!Y) {
            return true
        }
        Z.xSteps[X] = q([Z.xVal[X], Z.xVal[X + 1]], Y) / F(Z.xPct[X], Z.xPct[X + 1])
    }

    function E(Y, ab, X, aa) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [aa || false];
        this.xNumSteps = [false];
        this.snap = ab;
        this.direction = X;
        var ac = this,
            Z;
        for (Z in Y) {
            if (Y.hasOwnProperty(Z)) {
                w(Z, Y[Z], ac)
            }
        }
        ac.xNumSteps = ac.xSteps.slice(0);
        for (Z in ac.xNumSteps) {
            if (ac.xNumSteps.hasOwnProperty(Z)) {
                x(Number(Z), ac.xNumSteps[Z], ac)
            }
        }
    }
    E.prototype.getMargin = function(X) {
        return this.xPct.length === 2 ? q(this.xVal, X) : false
    };
    E.prototype.toStepping = function(X) {
        X = U(this.xVal, this.xPct, X);
        if (this.direction) {
            X = 100 - X
        }
        return X
    };
    E.prototype.fromStepping = function(X) {
        if (this.direction) {
            X = 100 - X
        }
        return c(r(this.xVal, this.xPct, X))
    };
    E.prototype.getStep = function(X) {
        if (this.direction) {
            X = 100 - X
        }
        X = u(this.xPct, this.xSteps, this.snap, X);
        if (this.direction) {
            X = 100 - X
        }
        return X
    };
    E.prototype.getApplicableStep = function(Z) {
        var X = s(Z, this.xPct),
            Y = Z === 100 ? 2 : 1;
        return [this.xNumSteps[X - 2], this.xVal[X - Y], this.xNumSteps[X - Y]]
    };
    E.prototype.convert = function(X) {
        return this.getStep(this.toStepping(X))
    };
    var n = {
        to: function(X) {
            return X.toFixed(2)
        },
        from: Number
    };

    function S(Y, X) {
        if (!z(X)) {
            throw new Error("noUiSlider: 'step' is not numeric.")
        }
        Y.singleStep = X
    }

    function P(Y, X) {
        if (typeof X !== "object" || a.isArray(X)) {
            throw new Error("noUiSlider: 'range' is not an object.")
        }
        if (X.min === undefined || X.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.")
        }
        Y.spectrum = new E(X, Y.snap, Y.dir, Y.singleStep)
    }

    function R(Y, X) {
        X = j(X);
        if (!a.isArray(X) || !X.length || X.length > 2) {
            throw new Error("noUiSlider: 'start' option is incorrect.")
        }
        Y.handles = X.length;
        Y.start = X
    }

    function Q(Y, X) {
        Y.snap = X;
        if (typeof X !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.")
        }
    }

    function G(Y, X) {
        Y.animate = X;
        if (typeof X !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.")
        }
    }

    function I(Y, X) {
        if (X === "lower" && Y.handles === 1) {
            Y.connect = 1
        } else {
            if (X === "upper" && Y.handles === 1) {
                Y.connect = 2
            } else {
                if (X === true && Y.handles === 2) {
                    Y.connect = 3
                } else {
                    if (X === false) {
                        Y.connect = 0
                    } else {
                        throw new Error("noUiSlider: 'connect' option doesn't match handle count.")
                    }
                }
            }
        }
    }

    function O(Y, X) {
        switch (X) {
            case "horizontal":
                Y.ort = 0;
                break;
            case "vertical":
                Y.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.")
        }
    }

    function M(Y, X) {
        if (!z(X)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.")
        }
        Y.margin = Y.spectrum.getMargin(X);
        if (!Y.margin) {
            throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
        }
    }

    function L(Y, X) {
        if (!z(X)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.")
        }
        Y.limit = Y.spectrum.getMargin(X);
        if (!Y.limit) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
        }
    }

    function J(Y, X) {
        switch (X) {
            case "ltr":
                Y.dir = 0;
                break;
            case "rtl":
                Y.dir = 1;
                Y.connect = [0, 2, 1, 3][Y.connect];
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.")
        }
    }

    function H(aa, Y) {
        if (typeof Y !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.")
        }
        var ac = Y.indexOf("tap") >= 0,
            X = Y.indexOf("drag") >= 0,
            Z = Y.indexOf("fixed") >= 0,
            ab = Y.indexOf("snap") >= 0;
        aa.events = {
            tap: ac || ab,
            drag: X,
            fixed: Z,
            snap: ab
        }
    }

    function K(Y, X) {
        Y.format = X;
        if (typeof X.to === "function" && typeof X.from === "function") {
            return true
        }
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
    }

    function N(X) {
        var Y = {
                margin: 0,
                limit: 0,
                animate: true,
                format: n
            },
            Z;
        Z = {
            step: {
                r: false,
                t: S
            },
            start: {
                r: true,
                t: R
            },
            connect: {
                r: true,
                t: I
            },
            direction: {
                r: true,
                t: J
            },
            snap: {
                r: false,
                t: Q
            },
            animate: {
                r: false,
                t: G
            },
            range: {
                r: true,
                t: P
            },
            orientation: {
                r: false,
                t: O
            },
            margin: {
                r: false,
                t: M
            },
            limit: {
                r: false,
                t: L
            },
            behaviour: {
                r: true,
                t: H
            },
            format: {
                r: false,
                t: K
            }
        };
        X = a.extend({
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal"
        }, X);
        a.each(Z, function(aa, ab) {
            if (X[aa] === undefined) {
                if (ab.r) {
                    throw new Error("noUiSlider: '" + aa + "' is required.")
                }
                return true
            }
            ab.t(Y, X[aa])
        });
        Y.style = Y.ort ? "top" : "left";
        return Y
    }

    function t(X, Y, ab) {
        var Z = X + Y[0],
            aa = X + Y[1];
        if (ab) {
            if (Z < 0) {
                aa += Math.abs(Z)
            }
            if (aa > 100) {
                Z -= (aa - 100)
            }
            return [B(Z), B(aa)]
        }
        return [Z, aa]
    }

    function p(X) {
        X.preventDefault();
        var ab = X.type.indexOf("touch") === 0,
            Z = X.type.indexOf("mouse") === 0,
            aa = X.type.indexOf("pointer") === 0,
            ac, ad, Y = X;
        if (X.type.indexOf("MSPointer") === 0) {
            aa = true
        }
        if (X.originalEvent) {
            X = X.originalEvent
        }
        if (ab) {
            ac = X.changedTouches[0].pageX;
            ad = X.changedTouches[0].pageY
        }
        if (Z || aa) {
            if (!aa && window.pageXOffset === undefined) {
                window.pageXOffset = document.documentElement.scrollLeft;
                window.pageYOffset = document.documentElement.scrollTop
            }
            ac = X.clientX + window.pageXOffset;
            ad = X.clientY + window.pageYOffset
        }
        Y.points = [ac, ad];
        Y.cursor = Z;
        return Y
    }

    function g(Y, aa) {
        var Z = a("<div><div/></div>").addClass(k[2]),
            X = ["-lower", "-upper"];
        if (Y) {
            X.reverse()
        }
        Z.children().addClass(k[3] + " " + k[3] + X[aa]);
        return Z
    }

    function f(X, Z, Y) {
        switch (X) {
            case 1:
                Z.addClass(k[7]);
                Y[0].addClass(k[6]);
                break;
            case 3:
                Y[1].addClass(k[6]);
            case 2:
                Y[0].addClass(k[7]);
            case 0:
                Z.addClass(k[6]);
                break
        }
    }

    function h(ab, Y, X) {
        var aa, Z = [];
        for (aa = 0; aa < ab; aa += 1) {
            Z.push(g(Y, aa).appendTo(X))
        }
        return Z
    }

    function i(X, Y, Z) {
        Z.addClass([k[0], k[8 + X], k[4 + Y]].join(" "));
        return a("<div/>").appendTo(Z).addClass(k[1])
    }

    function m(ay, aq, ar) {
        var ab = a(ay),
            Z = [-1, -1],
            X, Y, aa = aq.spectrum,
            ac = [],
            az = ["lower", "upper"].slice(0, aq.handles);
        if (aq.dir) {
            az.reverse()
        }

        function ae() {
            return X[["width", "height"][aq.ort]]()
        }

        function aj(aC) {
            var aD, aE = [ab.val()];
            for (aD = 0; aD < aC.length; aD += 1) {
                ab.trigger(aC[aD], aE)
            }
        }

        function am(aC) {
            if (aC.length === 1) {
                return aC[0]
            }
            if (aq.dir) {
                return aC.reverse()
            }
            return aC
        }

        function af(aC) {
            return function(aD, aE) {
                ab.val([aC ? null : aE, aC ? aE : null], true)
            }
        }

        function ao(aC) {
            var aD = a.inArray(aC, az);
            if (ab[0].linkAPI && ab[0].linkAPI[aC]) {
                ab[0].linkAPI[aC].change(ac[aD], Y[aD].children(), ab)
            }
        }

        function an(aD, aC) {
            var aE = a.inArray(aD, az);
            if (aC) {
                aC.appendTo(Y[aE].children())
            }
            if (aq.dir && aq.handles > 1) {
                aE = aE === 1 ? 0 : 1
            }
            return af(aE)
        }

        function at() {
            var aD, aC;
            for (aD = 0; aD < az.length; aD += 1) {
                if (this.linkAPI && this.linkAPI[(aC = az[aD])]) {
                    this.linkAPI[aC].reconfirm(aC)
                }
            }
        }
        ay.LinkUpdate = ao;
        ay.LinkConfirm = an;
        ay.LinkDefaultFormatter = aq.format;
        ay.LinkDefaultFlag = "lower";
        ay.reappend = at;

        function ad(aF, aE, aC, aD) {
            aF = aF.replace(/\s/g, C + " ") + C;
            return aE.on(aF, function(aG) {
                if (!!ab.attr("disabled")) {
                    return false
                }
                if (ab.hasClass(k[14])) {
                    return false
                }
                aG = p(aG);
                aG.calcPoint = aG.points[aq.ort];
                aC(aG, aD)
            })
        }

        function ap(aD, aC) {
            var aF = aC.handles || Y,
                aG, aI = false,
                aH = ((aD.calcPoint - aC.start) * 100) / ae(),
                aE = aF[0][0] !== Y[0][0] ? 1 : 0;
            aG = t(aH, aC.positions, aF.length > 1);
            aI = au(aF[0], aG[aE], aF.length === 1);
            if (aF.length > 1) {
                aI = au(aF[1], aG[aE ? 0 : 1], false) || aI
            }
            if (aI) {
                aj(["slide"])
            }
        }

        function ah(aC) {
            a("." + k[15]).removeClass(k[15]);
            if (aC.cursor) {
                a("body").css("cursor", "").off(C)
            }
            o.off(C);
            ab.removeClass(k[12]);
            aj(["set", "change"])
        }

        function aw(aD, aC) {
            if (aC.handles.length === 1) {
                aC.handles[0].children().addClass(k[15])
            }
            aD.stopPropagation();
            ad(d.move, o, ap, {
                start: aD.calcPoint,
                handles: aC.handles,
                positions: [Z[0], Z[Y.length - 1]]
            });
            ad(d.end, o, ah, null);
            if (aD.cursor) {
                a("body").css("cursor", a(aD.target).css("cursor"));
                if (Y.length > 1) {
                    ab.addClass(k[12])
                }
                a("body").on("selectstart" + C, false)
            }
        }

        function ax(aC) {
            var aD = aC.calcPoint,
                aF = 0,
                aE;
            aC.stopPropagation();
            a.each(Y, function() {
                aF += this.offset()[aq.style]
            });
            aF = (aD < aF / 2 || Y.length === 1) ? 0 : 1;
            aD -= X.offset()[aq.style];
            aE = (aD * 100) / ae();
            if (!aq.events.snap) {
                e(ab, k[14], 300)
            }
            au(Y[aF], aE);
            aj(["slide", "set", "change"]);
            if (aq.events.snap) {
                aw(aC, {
                    handles: [Y[aF]]
                })
            }
        }

        function ai(aC) {
            var aE, aD;
            if (!aC.fixed) {
                for (aE = 0; aE < Y.length; aE += 1) {
                    ad(d.start, Y[aE].children(), aw, {
                        handles: [Y[aE]]
                    })
                }
            }
            if (aC.tap) {
                ad(d.start, X, ax, {
                    handles: Y
                })
            }
            if (aC.drag) {
                aD = X.find("." + k[7]).addClass(k[10]);
                if (aC.fixed) {
                    aD = aD.add(X.children().not(aD).children())
                }
                ad(d.start, aD, aw, {
                    handles: Y
                })
            }
        }

        function au(aC, aG, aF) {
            var aH = aC[0] !== Y[0][0] ? 1 : 0,
                aE = Z[0] + aq.margin,
                aJ = Z[1] - aq.margin,
                aD = Z[0] + aq.limit,
                aI = Z[1] - aq.limit;
            if (Y.length > 1) {
                aG = aH ? Math.max(aG, aE) : Math.min(aG, aJ)
            }
            if (aF !== false && aq.limit && Y.length > 1) {
                aG = aH ? Math.min(aG, aD) : Math.max(aG, aI)
            }
            aG = aa.getStep(aG);
            aG = B(parseFloat(aG.toFixed(7)));
            if (aG === Z[aH]) {
                return false
            }
            aC.css(aq.style, aG + "%");
            if (aC.is(":first-child")) {
                aC.toggleClass(k[17], aG > 50)
            }
            Z[aH] = aG;
            ac[aH] = aa.fromStepping(aG);
            ao(az[aH]);
            return true
        }

        function av(aC, aG) {
            var aD, aF, aE;
            if (aq.limit) {
                aC += 1
            }
            for (aD = 0; aD < aC; aD += 1) {
                aF = aD % 2;
                aE = aG[aF];
                if (aE !== null && aE !== false) {
                    if (typeof aE === "number") {
                        aE = String(aE)
                    }
                    aE = aq.format.from(aE);
                    if (aE === false || isNaN(aE) || au(Y[aF], aa.toStepping(aE), aD === (3 - aq.dir)) === false) {
                        ao(az[aF])
                    }
                }
            }
        }

        function aB(aD) {
            if (ab[0].LinkIsEmitting) {
                return this
            }
            var aC, aE = j(aD);
            if (aq.dir && aq.handles > 1) {
                aE.reverse()
            }
            if (aq.animate && Z[0] !== -1) {
                e(ab, k[14], 300)
            }
            aC = Y.length > 1 ? 3 : 1;
            if (aE.length === 1) {
                aC = 1
            }
            av(aC, aE);
            aj(["set"]);
            return this
        }

        function aA() {
            var aC, aD = [];
            for (aC = 0; aC < aq.handles; aC += 1) {
                aD[aC] = aq.format.to(ac[aC])
            }
            return am(aD)
        }

        function ag() {
            a(this).off(C).removeClass(k.join(" ")).empty();
            delete this.LinkUpdate;
            delete this.LinkConfirm;
            delete this.LinkDefaultFormatter;
            delete this.LinkDefaultFlag;
            delete this.reappend;
            delete this.vGet;
            delete this.vSet;
            delete this.getCurrentStep;
            delete this.getInfo;
            delete this.destroy;
            return ar
        }

        function ak() {
            var aC = a.map(Z, function(aG, aF) {
                var aH = aa.getApplicableStep(aG),
                    aI = ac[aF],
                    aE = aH[2],
                    aD = (aI - aH[2]) >= aH[1] ? aH[2] : aH[0];
                return [
                    [aD, aE]
                ]
            });
            return am(aC)
        }

        function al() {
            return ar
        }
        if (ab.hasClass(k[0])) {
            throw new Error("Slider was already initialized.")
        }
        X = i(aq.dir, aq.ort, ab);
        Y = h(aq.handles, aq.dir, X);
        f(aq.connect, ab, Y);
        ai(aq.events);
        ay.vSet = aB;
        ay.vGet = aA;
        ay.destroy = ag;
        ay.getCurrentStep = ak;
        ay.getOriginalOptions = al;
        ay.getInfo = function() {
            return [aa, aq.style, aq.ort]
        };
        ab.val(aq.start)
    }

    function y(Y) {
        if (!this.length) {
            throw new Error("noUiSlider: Can't initialize slider on empty selection.")
        }
        var X = N(Y, this);
        return this.each(function() {
            m(this, X, Y)
        })
    }

    function D(X) {
        return this.each(function() {
            if (!this.destroy) {
                a(this).noUiSlider(X);
                return
            }
            var aa = a(this).val(),
                Z = this.destroy(),
                Y = a.extend({}, Z, X);
            a(this).noUiSlider(Y);
            this.reappend();
            if (Z.start === Y.start) {
                a(this).val(aa)
            }
        })
    }

    function W() {
        return this[0][!arguments.length ? "vGet" : "vSet"].apply(this[0], arguments)
    }
    a.fn.val = function(X) {
        function aa(ab) {
            return ab.hasClass(k[0]) ? W : b
        }
        if (X === undefined) {
            var Y = a(this[0]);
            return aa(Y).call(Y)
        }
        var Z = a.isFunction(X);
        return this.each(function(ac) {
            var ad = X,
                ab = a(this);
            if (Z) {
                ad = X.call(this, ac, ab.val())
            }
            aa(ab).call(ab, ad)
        })
    };
    a.fn.noUiSlider = function(X, Y) {
        switch (X) {
            case "step":
                return this[0].getCurrentStep();
            case "options":
                return this[0].getOriginalOptions()
        }
        return (Y ? D : y).call(this, X)
    }
}(window.jQuery || window.Zepto));
(function(a) {
    var b = {
            prefilled: null,
            CapitalizeFirstLetter: false,
            preventSubmitOnEnter: true,
            isClearInputOnEsc: true,
            externalTagId: false,
            prefillIdFieldName: "Id",
            prefillValueFieldName: "Value",
            AjaxPush: null,
            AjaxPushAllTags: null,
            AjaxPushParameters: null,
            delimiters: [9, 13, 44],
            backspace: [8],
            maxTags: 0,
            hiddenTagListName: null,
            hiddenTagListId: null,
            replace: true,
            output: null,
            deleteTagsOnBackspace: true,
            tagsContainer: null,
            tagCloseIcon: "x",
            tagClass: "",
            validator: null,
            onlyTagList: false,
            tagList: null,
            fillInputOnTagRemove: false,
        },
        d = {
            pushTag: function(w, n, k, i) {
                var f = a(this),
                    t = f.data("opts"),
                    h, A, q, x, z = f.data("tlis"),
                    y = f.data("tlid"),
                    m, r, s, j, l, e, o, p;
                w = c.trimTag(w, t.delimiterChars);
                if (!w || w.length <= 0) {
                    return
                }
                if (t.onlyTagList && undefined !== t.tagList) {
                    if (t.tagList) {
                        var g = t.tagList;
                        a.each(g, function(B, C) {
                            g[B] = C.toLowerCase()
                        });
                        var u = a.inArray(w.toLowerCase(), g);
                        if (-1 === u) {
                            return
                        }
                    }
                }
                if (t.CapitalizeFirstLetter && w.length > 1) {
                    w = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
                }
                if (t.validator && !t.validator(w)) {
                    return
                }
                if (t.maxTags > 0 && z.length >= t.maxTags) {
                    return
                }
                h = false;
                A = jQuery.map(z, function(B) {
                    return B.toLowerCase()
                });
                m = a.inArray(w.toLowerCase(), A);
                if (-1 !== m) {
                    h = true
                }
                if (h) {
                    f.trigger("tm:duplicated", w);
                    a("#" + f.data("tm_rndid") + "_" + y[m]).stop().animate({
                        backgroundColor: t.blinkBGColor_1
                    }, 100).animate({
                        backgroundColor: t.blinkBGColor_2
                    }, 100).animate({
                        backgroundColor: t.blinkBGColor_1
                    }, 100).animate({
                        backgroundColor: t.blinkBGColor_2
                    }, 100).animate({
                        backgroundColor: t.blinkBGColor_1
                    }, 100).animate({
                        backgroundColor: t.blinkBGColor_2
                    }, 100)
                } else {
                    if (t.externalTagId === true) {
                        if (k === undefined) {
                            a.error("externalTagId is not passed for tag -" + w)
                        }
                        x = k
                    } else {
                        q = Math.max.apply(null, y);
                        q = q === -Infinity ? 0 : q;
                        x = ++q
                    }
                    if (!n) {
                        f.trigger("tm:pushing", [w, x])
                    }
                    z.push(w);
                    y.push(x);
                    if (!n) {
                        if (t.AjaxPush !== null && t.AjaxPushAllTags == null) {
                            if (a.inArray(w, t.prefilled) === -1) {
                                a.post(t.AjaxPush, a.extend({
                                    tag: w
                                }, t.AjaxPushParameters))
                            }
                        }
                    }
                    r = f.data("tm_rndid") + "_" + x;
                    s = f.data("tm_rndid") + "_Remover_" + x;
                    j = a("<span/>").text(w).html();
                    l = '<span class="' + c.tagClasses.call(f) + '" id="' + r + '" ';
                    if (i) {
                        l += 'data-tip="hover right" title="' + w + '"'
                    }
                    l += "><span>" + j + "</span>";
                    l += '<a href="#" class="tm-tag-remove" id="' + s + '" TagIdToRemove="' + x + '">';
                    l += t.tagCloseIcon + "</a></span> ";
                    e = a(l);
                    if (t.tagsContainer !== null) {
                        a(t.tagsContainer).append(e)
                    } else {
                        if (y.length > 1) {
                            p = a("#" + f.data("tm_rndid") + "_" + y[y.length - 2]);
                            p.after(e)
                        } else {
                            f.before(e)
                        }
                    }
                    e.find("#" + s).on("click", f, function(B) {
                        B.preventDefault();
                        var C = parseInt(a(this).attr("TagIdToRemove"));
                        c.spliceTag.call(f, C, B.data)
                    });
                    c.refreshHiddenTagList.call(f);
                    if (!n) {
                        f.trigger("tm:pushed", [w, x])
                    }
                    c.showOrHide.call(f)
                }
                f.val("")
            },
            popTag: function() {
                var e = a(this),
                    g, f, i = e.data("tlis"),
                    h = e.data("tlid");
                if (h.length > 0) {
                    g = h.pop();
                    f = i[i.length - 1];
                    e.trigger("tm:popping", [f, g]);
                    i.pop();
                    a("#" + e.data("tm_rndid") + "_" + g).remove();
                    c.refreshHiddenTagList.call(e);
                    e.trigger("tm:popped", [f, g])
                }
            },
            empty: function() {
                var e = a(this),
                    h = e.data("tlis"),
                    g = e.data("tlid"),
                    f;
                while (g.length > 0) {
                    f = g.pop();
                    h.pop();
                    a("#" + e.data("tm_rndid") + "_" + f).remove();
                    c.refreshHiddenTagList.call(e)
                }
                e.trigger("tm:emptied", null);
                c.showOrHide.call(e)
            },
            tags: function() {
                var e = this,
                    f = e.data("tlis");
                return f
            }
        },
        c = {
            showOrHide: function() {
                var e = this,
                    f = e.data("opts"),
                    g = e.data("tlis");
                if (f.maxTags > 0 && g.length < f.maxTags) {
                    e.show();
                    e.trigger("tm:show")
                }
                if (f.maxTags > 0 && g.length >= f.maxTags) {
                    e.hide();
                    e.trigger("tm:hide")
                }
            },
            tagClasses: function() {
                var e = a(this),
                    h = e.data("opts"),
                    i = h.tagBaseClass,
                    g = h.inputBaseClass,
                    f;
                f = i;
                if (e.attr("class")) {
                    a.each(e.attr("class").split(" "), function(j, k) {
                        if (k.indexOf(g + "-") !== -1) {
                            f += " " + i + k.substring(g.length)
                        }
                    })
                }
                f += (h.tagClass ? " " + h.tagClass : "");
                return f
            },
            trimTag: function(g, e) {
                var f;
                g = a.trim(g);
                f = 0;
                for (f; f < g.length; f++) {
                    if (a.inArray(g.charCodeAt(f), e) !== -1) {
                        break
                    }
                }
                return g.substring(0, f)
            },
            refreshHiddenTagList: function() {
                var e = a(this),
                    g = e.data("tlis"),
                    f = e.data("lhiddenTagList");
                if (f) {
                    a(f).val(g.join(e.data("opts").baseDelimiter)).change()
                }
                e.trigger("tm:refresh", g.join(e.data("opts").baseDelimiter))
            },
            killEvent: function(f) {
                f.cancelBubble = true;
                f.returnValue = false;
                f.stopPropagation();
                f.preventDefault()
            },
            keyInArray: function(g, f) {
                return a.inArray(g.which, f) !== -1
            },
            applyDelimiter: function(g) {
                var f = a(this);
                d.pushTag.call(f, a(this).val());
                g.preventDefault()
            },
            prefill: function(g) {
                var e = a(this);
                var f = e.data("opts");
                a.each(g, function(h, i) {
                    if (f.externalTagId === true) {
                        d.pushTag.call(e, i[f.prefillValueFieldName], true, i[f.prefillIdFieldName])
                    } else {
                        d.pushTag.call(e, i, true)
                    }
                })
            },
            pushAllTags: function(g, i) {
                var f = a(this),
                    h = f.data("opts"),
                    j = f.data("tlis");
                if (h.AjaxPushAllTags) {
                    if (g.type !== "tm:pushed" || a.inArray(i, h.prefilled) === -1) {
                        a.post(h.AjaxPush, a.extend({
                            tags: j.join(h.baseDelimiter)
                        }, h.AjaxPushParameters))
                    }
                }
            },
            spliceTag: function(h) {
                var e = this,
                    j = e.data("tlis"),
                    i = e.data("tlid"),
                    f = a.inArray(h, i),
                    g;
                if (-1 !== f) {
                    g = j[f];
                    e.trigger("tm:splicing", [g, h]);
                    a("#" + e.data("tm_rndid") + "_" + h).remove();
                    j.splice(f, 1);
                    i.splice(f, 1);
                    c.refreshHiddenTagList.call(e);
                    e.trigger("tm:spliced", [g, h])
                }
                c.showOrHide.call(e)
            },
            init: function(g) {
                var h = a.extend({}, b, g),
                    e, f;
                h.hiddenTagListName = (h.hiddenTagListName === null) ? "hidden-" + this.attr("name") : h.hiddenTagListName;
                e = h.delimeters || h.delimiters;
                f = [9, 13, 17, 18, 19, 37, 38, 39, 40];
                h.delimiterChars = [];
                h.delimiterKeys = [];
                a.each(e, function(j, k) {
                    if (a.inArray(k, f) !== -1) {
                        h.delimiterKeys.push(k)
                    } else {
                        h.delimiterChars.push(k)
                    }
                });
                h.baseDelimiter = String.fromCharCode(h.delimiterChars[0] || 44);
                h.tagBaseClass = "tm-tag";
                h.inputBaseClass = "tm-input";
                if (!a.isFunction(h.validator)) {
                    h.validator = null
                }
                this.each(function() {
                    var j = a(this),
                        m = "",
                        o = "",
                        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                    if (j.data("tagManager")) {
                        return false
                    }
                    j.data("tagManager", true);
                    for (var n = 0; n < 5; n++) {
                        o += k.charAt(Math.floor(Math.random() * k.length))
                    }
                    j.data("tm_rndid", o);
                    j.data("opts", h).data("tlis", []).data("tlid", []);
                    if (h.output === null) {
                        m = a("<input/>", {
                            type: "hidden",
                            name: h.hiddenTagListName
                        });
                        j.after(m);
                        j.data("lhiddenTagList", m)
                    } else {
                        j.data("lhiddenTagList", a(h.output))
                    }
                    if (h.AjaxPushAllTags) {
                        j.on("tm:spliced", c.pushAllTags);
                        j.on("tm:popped", c.pushAllTags);
                        j.on("tm:pushed", c.pushAllTags)
                    }
                    j.on("focus keypress", function(i) {
                        if (a(this).popover) {
                            a(this).popover("hide")
                        }
                    });
                    if (h.isClearInputOnEsc) {
                        j.on("keyup", function(i) {
                            if (i.which === 27) {
                                a(this).val("");
                                c.killEvent(i)
                            }
                        })
                    }
                    j.on("keypress", function(i) {
                        if (c.keyInArray(i, h.delimiterChars)) {
                            c.applyDelimiter.call(j, i)
                        }
                    });
                    j.on("keydown", function(i) {
                        if (i.which === 13) {
                            if (h.preventSubmitOnEnter) {
                                c.killEvent(i)
                            }
                        }
                        if (c.keyInArray(i, h.delimiterKeys)) {
                            c.applyDelimiter.call(j, i)
                        }
                    });
                    if (h.deleteTagsOnBackspace) {
                        j.on("keydown", function(i) {
                            if (c.keyInArray(i, h.backspace)) {
                                if (a(this).val().length <= 0) {
                                    d.popTag.call(j);
                                    c.killEvent(i)
                                }
                            }
                        })
                    }
                    if (h.fillInputOnTagRemove) {
                        j.on("tm:popped", function(i, p) {
                            a(this).val(p)
                        })
                    }
                    j.change(function(i) {
                        if (!/webkit/.test(navigator.userAgent.toLowerCase())) {
                            j.focus()
                        }
                        c.killEvent(i)
                    });
                    if (h.prefilled !== null) {
                        if (typeof(h.prefilled) === "object") {
                            c.prefill.call(j, h.prefilled)
                        } else {
                            if (typeof(h.prefilled) === "string") {
                                c.prefill.call(j, h.prefilled.split(h.baseDelimiter))
                            } else {
                                if (typeof(h.prefilled) === "function") {
                                    c.prefill.call(j, h.prefilled())
                                }
                            }
                        }
                    } else {
                        if (h.output !== null) {
                            if (a(h.output) && a(h.output).val()) {
                                var l = a(h.output)
                            }
                            c.prefill.call(j, a(h.output).val().split(h.baseDelimiter))
                        }
                    }
                });
                return this
            }
        };
    a.fn.tagsManager = function(f) {
        var e = a(this);
        if (!(0 in this)) {
            return this
        }
        if (d[f]) {
            return d[f].apply(e, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof f === "object" || !f) {
                return c.init.apply(this, arguments)
            } else {
                a.error("Method " + f + " does not exist.");
                return false
            }
        }
    }
}(jQuery));
/*
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.2.0
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2014 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/
(function() {
    var a, e, f, g, d, c = {}.hasOwnProperty,
        b = function(h, k) {
            for (var j in k) {
                if (c.call(k, j)) {
                    h[j] = k[j]
                }
            }

            function i() {
                this.constructor = h
            }
            i.prototype = k.prototype;
            h.prototype = new i();
            h.__super__ = k.prototype;
            return h
        };
    g = (function() {
        function h() {
            this.options_index = 0;
            this.parsed = []
        }
        h.prototype.add_node = function(i) {
            if (i.nodeName.toUpperCase() === "OPTGROUP") {
                return this.add_group(i)
            } else {
                return this.add_option(i)
            }
        };
        h.prototype.add_group = function(m) {
            var n, o, i, j, k, l;
            n = this.parsed.length;
            this.parsed.push({
                array_index: n,
                group: true,
                label: this.escapeExpression(m.label),
                children: 0,
                disabled: m.disabled
            });
            k = m.childNodes;
            l = [];
            for (i = 0, j = k.length; i < j; i++) {
                o = k[i];
                l.push(this.add_option(o, n, m.disabled))
            }
            return l
        };
        h.prototype.add_option = function(k, j, i) {
            if (k.nodeName.toUpperCase() === "OPTION") {
                if (k.text !== "") {
                    if (j != null) {
                        this.parsed[j].children += 1
                    }
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        value: k.value,
                        text: k.text,
                        html: k.innerHTML,
                        selected: k.selected,
                        disabled: i === true ? i : k.disabled,
                        group_array_index: j,
                        classes: k.className,
                        style: k.style.cssText
                    })
                } else {
                    this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        empty: true
                    })
                }
                return this.options_index += 1
            }
        };
        h.prototype.escapeExpression = function(j) {
            var i, k;
            if ((j == null) || j === false) {
                return ""
            }
            if (!/[\&\<\>\"\'\`]/.test(j)) {
                return j
            }
            i = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            };
            k = /&(?!\w+;)|[\<\>\"\'\`]/g;
            return j.replace(k, function(l) {
                return i[l] || "&amp;"
            })
        };
        return h
    })();
    g.select_to_array = function(m) {
        var k, l, h, i, j;
        l = new g();
        j = m.childNodes;
        for (h = 0, i = j.length; h < i; h++) {
            k = j[h];
            l.add_node(k)
        }
        return l.parsed
    };
    e = (function() {
        function h(i, j) {
            this.form_field = i;
            this.options = j != null ? j : {};
            if (!h.browser_is_supported()) {
                return
            }
            this.is_multiple = this.form_field.multiple;
            this.set_default_text();
            this.set_default_values();
            this.setup();
            this.set_up_html();
            this.register_observers()
        }
        h.prototype.set_default_values = function() {
            var i = this;
            this.click_test_action = function(j) {
                return i.test_active_click(j)
            };
            this.activate_action = function(j) {
                return i.activate_field(j)
            };
            this.active_field = false;
            this.mouse_on_container = false;
            this.results_showing = false;
            this.result_highlighted = null;
            this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
            this.disable_search_threshold = this.options.disable_search_threshold || 0;
            this.disable_search = this.options.disable_search || false;
            this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
            this.group_search = this.options.group_search != null ? this.options.group_search : true;
            this.search_contains = this.options.search_contains || false;
            this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
            this.max_selected_options = this.options.max_selected_options || Infinity;
            this.inherit_select_classes = this.options.inherit_select_classes || false;
            this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
            return this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true
        };
        h.prototype.set_default_text = function() {
            if (this.form_field.getAttribute("data-placeholder")) {
                this.default_text = this.form_field.getAttribute("data-placeholder")
            } else {
                if (this.is_multiple) {
                    this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || h.default_multiple_text
                } else {
                    this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || h.default_single_text
                }
            }
            return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || h.default_no_result_text
        };
        h.prototype.mouse_enter = function() {
            return this.mouse_on_container = true
        };
        h.prototype.mouse_leave = function() {
            return this.mouse_on_container = false
        };
        h.prototype.input_focus = function(j) {
            var i = this;
            if (this.is_multiple) {
                if (!this.active_field) {
                    return setTimeout((function() {
                        return i.container_mousedown()
                    }), 50)
                }
            } else {
                if (!this.active_field) {
                    return this.activate_field()
                }
            }
        };
        h.prototype.input_blur = function(j) {
            var i = this;
            if (!this.mouse_on_container) {
                this.active_field = false;
                return setTimeout((function() {
                    return i.blur_test()
                }), 100)
            }
        };
        h.prototype.results_option_build = function(n) {
            var l, m, i, j, k;
            l = "";
            k = this.results_data;
            for (i = 0, j = k.length; i < j; i++) {
                m = k[i];
                if (m.group) {
                    l += this.result_add_group(m)
                } else {
                    l += this.result_add_option(m)
                }
                if (n != null ? n.first : void 0) {
                    if (m.selected && this.is_multiple) {
                        this.choice_build(m)
                    } else {
                        if (m.selected && !this.is_multiple) {
                            this.single_set_selected_text(m.text)
                        }
                    }
                }
            }
            return l
        };
        h.prototype.result_add_option = function(j) {
            var i, k;
            if (!j.search_match) {
                return ""
            }
            if (!this.include_option_in_results(j)) {
                return ""
            }
            i = [];
            if (!j.disabled && !(j.selected && this.is_multiple)) {
                i.push("active-result")
            }
            if (j.disabled && !(j.selected && this.is_multiple)) {
                i.push("disabled-result")
            }
            if (j.selected) {
                i.push("result-selected")
            }
            if (j.group_array_index != null) {
                i.push("group-option")
            }
            if (j.classes !== "") {
                i.push(j.classes)
            }
            k = document.createElement("li");
            k.className = i.join(" ");
            k.style.cssText = j.style;
            k.setAttribute("data-option-array-index", j.array_index);
            k.innerHTML = j.html;
            return this.outerHTML(k)
        };
        h.prototype.result_add_group = function(i) {
            var j;
            if (!(i.search_match || i.group_match)) {
                return ""
            }
            if (!(i.active_options > 0)) {
                return ""
            }
            j = document.createElement("li");
            j.className = "group-result";
            j.innerHTML = i.html;
            return this.outerHTML(j)
        };
        h.prototype.results_update_field = function() {
            this.set_default_text();
            if (!this.is_multiple) {
                this.results_reset_cleanup()
            }
            this.result_clear_highlight();
            this.results_build();
            if (this.results_showing) {
                return this.winnow_results()
            }
        };
        h.prototype.reset_single_select_options = function() {
            var m, i, j, k, l;
            k = this.results_data;
            l = [];
            for (i = 0, j = k.length; i < j; i++) {
                m = k[i];
                if (m.selected) {
                    l.push(m.selected = false)
                } else {
                    l.push(void 0)
                }
            }
            return l
        };
        h.prototype.results_toggle = function() {
            if (this.results_showing) {
                return this.results_hide()
            } else {
                return this.results_show()
            }
        };
        h.prototype.results_search = function(i) {
            if (this.results_showing) {
                return this.winnow_results()
            } else {
                return this.results_show()
            }
        };
        h.prototype.winnow_results = function() {
            var l, m, n, o, p, q, r, s, t, i, j, k;
            this.no_results_clear();
            o = 0;
            q = this.get_search_text();
            l = q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
            t = new RegExp(l, "i");
            n = this.get_search_regex(l);
            k = this.results_data;
            for (i = 0, j = k.length; i < j; i++) {
                m = k[i];
                m.search_match = false;
                p = null;
                if (this.include_option_in_results(m)) {
                    if (m.group) {
                        m.group_match = false;
                        m.active_options = 0
                    }
                    if ((m.group_array_index != null) && this.results_data[m.group_array_index]) {
                        p = this.results_data[m.group_array_index];
                        if (p.active_options === 0 && p.search_match) {
                            o += 1
                        }
                        p.active_options += 1
                    }
                    if (!(m.group && !this.group_search)) {
                        m.search_text = m.group ? m.label : m.text;
                        m.search_match = this.search_string_match(m.search_text, n);
                        if (m.search_match && !m.group) {
                            o += 1
                        }
                        if (m.search_match) {
                            if (q.length) {
                                r = m.search_text.search(t);
                                s = m.search_text.substr(0, r + q.length) + "</em>" + m.search_text.substr(r + q.length);
                                m.search_text = s.substr(0, r) + "<em>" + s.substr(r)
                            }
                            if (p != null) {
                                p.group_match = true
                            }
                        } else {
                            if ((m.group_array_index != null) && this.results_data[m.group_array_index].search_match) {
                                m.search_match = true
                            }
                        }
                    }
                }
            }
            this.result_clear_highlight();
            if (o < 1 && q.length) {
                this.update_results_content("");
                return this.no_results(q)
            } else {
                this.update_results_content(this.results_option_build());
                return this.winnow_results_set_highlight()
            }
        };
        h.prototype.get_search_regex = function(i) {
            var j;
            j = this.search_contains ? "" : "^";
            return new RegExp(j + i, "i")
        };
        h.prototype.search_string_match = function(n, m) {
            var k, l, i, j;
            if (m.test(n)) {
                return true
            } else {
                if (this.enable_split_word_search && (n.indexOf(" ") >= 0 || n.indexOf("[") === 0)) {
                    l = n.replace(/\[|\]/g, "").split(" ");
                    if (l.length) {
                        for (i = 0, j = l.length; i < j; i++) {
                            k = l[i];
                            if (m.test(k)) {
                                return true
                            }
                        }
                    }
                }
            }
        };
        h.prototype.choices_count = function() {
            var l, i, j, k;
            if (this.selected_option_count != null) {
                return this.selected_option_count
            }
            this.selected_option_count = 0;
            k = this.form_field.options;
            for (i = 0, j = k.length; i < j; i++) {
                l = k[i];
                if (l.selected) {
                    this.selected_option_count += 1
                }
            }
            return this.selected_option_count
        };
        h.prototype.choices_click = function(i) {
            i.preventDefault();
            if (!(this.results_showing || this.is_disabled)) {
                return this.results_show()
            }
        };
        h.prototype.keyup_checker = function(j) {
            var k, i;
            k = (i = j.which) != null ? i : j.keyCode;
            switch (k) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
                        return this.keydown_backstroke()
                    } else {
                        if (!this.pending_backstroke) {
                            this.result_clear_highlight();
                            return this.results_search()
                        }
                    }
                    break;
                case 13:
                    j.preventDefault();
                    if (this.results_showing) {
                        return this.result_select(j)
                    }
                    break;
                case 27:
                    if (this.results_showing) {
                        this.results_hide()
                    }
                    return true;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        };
        h.prototype.clipboard_event_checker = function(j) {
            var i = this;
            return setTimeout((function() {
                return i.results_search()
            }), 50)
        };
        h.prototype.container_width = function() {
            if (this.options.width != null) {
                return this.options.width
            } else {
                return "" + this.form_field.offsetWidth + "px"
            }
        };
        h.prototype.include_option_in_results = function(i) {
            if (this.is_multiple && (!this.display_selected_options && i.selected)) {
                return false
            }
            if (!this.display_disabled_options && i.disabled) {
                return false
            }
            if (i.empty) {
                return false
            }
            return true
        };
        h.prototype.search_results_touchstart = function(i) {
            this.touch_started = true;
            return this.search_results_mouseover(i)
        };
        h.prototype.search_results_touchmove = function(i) {
            this.touch_started = false;
            return this.search_results_mouseout(i)
        };
        h.prototype.search_results_touchend = function(i) {
            if (this.touch_started) {
                return this.search_results_mouseup(i)
            }
        };
        h.prototype.outerHTML = function(i) {
            var j;
            if (i.outerHTML) {
                return i.outerHTML
            }
            j = document.createElement("div");
            j.appendChild(i);
            return j.innerHTML
        };
        h.browser_is_supported = function() {
            if (window.navigator.appName === "Microsoft Internet Explorer") {
                return document.documentMode >= 8
            }
            if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
                return false
            }
            if (/Android/i.test(window.navigator.userAgent)) {
                if (/Mobile/i.test(window.navigator.userAgent)) {
                    return false
                }
            }
            return true
        };
        h.default_multiple_text = "Select Some Options";
        h.default_single_text = "Select an Option";
        h.default_no_result_text = "No results match";
        return h
    })();
    a = jQuery;
    a.fn.extend({
        chosen: function(h) {
            if (!e.browser_is_supported()) {
                return this
            }
            return this.each(function(k) {
                var i, j;
                i = a(this);
                j = i.data("chosen");
                if (h === "destroy" && j instanceof f) {
                    j.destroy()
                } else {
                    if (!(j instanceof f)) {
                        i.data("chosen", new f(this, h))
                    }
                }
            })
        }
    });
    f = (function(h) {
        b(i, h);

        function i() {
            d = i.__super__.constructor.apply(this, arguments);
            return d
        }
        i.prototype.setup = function() {
            this.form_field_jq = a(this.form_field);
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        };
        i.prototype.set_up_html = function() {
            var j, k;
            j = ["chosen-container"];
            j.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
            if (this.inherit_select_classes && this.form_field.className) {
                j.push(this.form_field.className)
            }
            if (this.is_rtl) {
                j.push("chosen-rtl")
            }
            k = {
                "class": j.join(" "),
                style: "width: " + (this.container_width()) + ";",
                title: this.form_field.title
            };
            if (this.form_field.id.length) {
                k.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"
            }
            this.container = a("<div />", k);
            if (this.is_multiple) {
                this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>')
            } else {
                this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>')
            }
            this.form_field_jq.hide().after(this.container);
            this.dropdown = this.container.find("div.chosen-drop").first();
            this.search_field = this.container.find("input").first();
            this.search_results = this.container.find("ul.chosen-results").first();
            this.search_field_scale();
            this.search_no_results = this.container.find("li.no-results").first();
            if (this.is_multiple) {
                this.search_choices = this.container.find("ul.chosen-choices").first();
                this.search_container = this.container.find("li.search-field").first()
            } else {
                this.search_container = this.container.find("div.chosen-search").first();
                this.selected_item = this.container.find(".chosen-single").first()
            }
            this.results_build();
            this.set_tab_index();
            this.set_label_behavior();
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        };
        i.prototype.register_observers = function() {
            var j = this;
            this.container.bind("touchstart.chosen", function(k) {
                j.container_mousedown(k)
            });
            this.container.bind("touchend.chosen", function(k) {
                j.container_mouseup(k)
            });
            this.container.bind("mousedown.chosen", function(k) {
                j.container_mousedown(k)
            });
            this.container.bind("mouseup.chosen", function(k) {
                j.container_mouseup(k)
            });
            this.container.bind("mouseenter.chosen", function(k) {
                j.mouse_enter(k)
            });
            this.container.bind("mouseleave.chosen", function(k) {
                j.mouse_leave(k)
            });
            this.search_results.bind("mouseup.chosen", function(k) {
                j.search_results_mouseup(k)
            });
            this.search_results.bind("mouseover.chosen", function(k) {
                j.search_results_mouseover(k)
            });
            this.search_results.bind("mouseout.chosen", function(k) {
                j.search_results_mouseout(k)
            });
            this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(k) {
                j.search_results_mousewheel(k)
            });
            this.search_results.bind("touchstart.chosen", function(k) {
                j.search_results_touchstart(k)
            });
            this.search_results.bind("touchmove.chosen", function(k) {
                j.search_results_touchmove(k)
            });
            this.search_results.bind("touchend.chosen", function(k) {
                j.search_results_touchend(k)
            });
            this.form_field_jq.bind("chosen:updated.chosen", function(k) {
                j.results_update_field(k)
            });
            this.form_field_jq.bind("chosen:activate.chosen", function(k) {
                j.activate_field(k)
            });
            this.form_field_jq.bind("chosen:open.chosen", function(k) {
                j.container_mousedown(k)
            });
            this.form_field_jq.bind("chosen:close.chosen", function(k) {
                j.input_blur(k)
            });
            this.search_field.bind("blur.chosen", function(k) {
                j.input_blur(k)
            });
            this.search_field.bind("keyup.chosen", function(k) {
                j.keyup_checker(k)
            });
            this.search_field.bind("keydown.chosen", function(k) {
                j.keydown_checker(k)
            });
            this.search_field.bind("focus.chosen", function(k) {
                j.input_focus(k)
            });
            this.search_field.bind("cut.chosen", function(k) {
                j.clipboard_event_checker(k)
            });
            this.search_field.bind("paste.chosen", function(k) {
                j.clipboard_event_checker(k)
            });
            if (this.is_multiple) {
                return this.search_choices.bind("click.chosen", function(k) {
                    j.choices_click(k)
                })
            } else {
                return this.container.bind("click.chosen", function(k) {
                    k.preventDefault()
                })
            }
        };
        i.prototype.destroy = function() {
            a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
            if (this.search_field[0].tabIndex) {
                this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex
            }
            this.container.remove();
            this.form_field_jq.removeData("chosen");
            return this.form_field_jq.show()
        };
        i.prototype.search_field_disabled = function() {
            this.is_disabled = this.form_field_jq[0].disabled;
            if (this.is_disabled) {
                this.container.addClass("chosen-disabled");
                this.search_field[0].disabled = true;
                if (!this.is_multiple) {
                    this.selected_item.unbind("focus.chosen", this.activate_action)
                }
                return this.close_field()
            } else {
                this.container.removeClass("chosen-disabled");
                this.search_field[0].disabled = false;
                if (!this.is_multiple) {
                    return this.selected_item.bind("focus.chosen", this.activate_action)
                }
            }
        };
        i.prototype.container_mousedown = function(j) {
            if (!this.is_disabled) {
                if (j && j.type === "mousedown" && !this.results_showing) {
                    j.preventDefault()
                }
                if (!((j != null) && (a(j.target)).hasClass("search-choice-close"))) {
                    if (!this.active_field) {
                        if (this.is_multiple) {
                            this.search_field.val("")
                        }
                        a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action);
                        this.results_show()
                    } else {
                        if (!this.is_multiple && j && ((a(j.target)[0] === this.selected_item[0]) || a(j.target).parents("a.chosen-single").length)) {
                            j.preventDefault();
                            this.results_toggle()
                        }
                    }
                    return this.activate_field()
                }
            }
        };
        i.prototype.container_mouseup = function(j) {
            if (j.target.nodeName === "ABBR" && !this.is_disabled) {
                return this.results_reset(j)
            }
        };
        i.prototype.search_results_mousewheel = function(k) {
            var j;
            if (k.originalEvent) {
                j = k.originalEvent.deltaY || -k.originalEvent.wheelDelta || k.originalEvent.detail
            }
            if (j != null) {
                k.preventDefault();
                if (k.type === "DOMMouseScroll") {
                    j = j * 40
                }
                return this.search_results.scrollTop(j + this.search_results.scrollTop())
            }
        };
        i.prototype.blur_test = function(j) {
            if (!this.active_field && this.container.hasClass("chosen-container-active")) {
                return this.close_field()
            }
        };
        i.prototype.close_field = function() {
            a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
            this.active_field = false;
            this.results_hide();
            this.container.removeClass("chosen-container-active");
            this.clear_backstroke();
            this.show_search_field_default();
            return this.search_field_scale()
        };
        i.prototype.activate_field = function() {
            this.container.addClass("chosen-container-active");
            this.active_field = true;
            this.search_field.val(this.search_field.val());
            return this.search_field.focus()
        };
        i.prototype.test_active_click = function(k) {
            var j;
            j = a(k.target).closest(".chosen-container");
            if (j.length && this.container[0] === j[0]) {
                return this.active_field = true
            } else {
                return this.close_field()
            }
        };
        i.prototype.results_build = function() {
            this.parsing = true;
            this.selected_option_count = null;
            this.results_data = g.select_to_array(this.form_field);
            if (this.is_multiple) {
                this.search_choices.find("li.search-choice").remove()
            } else {
                if (!this.is_multiple) {
                    this.single_set_selected_text();
                    if (this.disable_search || !this.form_field.options || this.form_field.options.length <= this.disable_search_threshold) {
                        this.search_field[0].readOnly = true;
                        this.container.addClass("chosen-container-single-nosearch")
                    } else {
                        this.search_field[0].readOnly = false;
                        this.container.removeClass("chosen-container-single-nosearch")
                    }
                }
            }
            this.update_results_content(this.results_option_build({
                first: true
            }));
            this.search_field_disabled();
            this.show_search_field_default();
            this.search_field_scale();
            return this.parsing = false
        };
        i.prototype.result_do_highlight = function(j) {
            var k, l, m, n, o;
            if (j.length) {
                this.result_clear_highlight();
                this.result_highlight = j;
                this.result_highlight.addClass("highlighted");
                m = parseInt(this.search_results.css("maxHeight"), 10);
                o = this.search_results.scrollTop();
                n = m + o;
                l = this.result_highlight.position().top + this.search_results.scrollTop();
                k = l + this.result_highlight.outerHeight();
                if (k >= n) {
                    return this.search_results.scrollTop((k - m) > 0 ? k - m : 0)
                } else {
                    if (l < o) {
                        return this.search_results.scrollTop(l)
                    }
                }
            }
        };
        i.prototype.result_clear_highlight = function() {
            if (this.result_highlight) {
                this.result_highlight.removeClass("highlighted")
            }
            return this.result_highlight = null
        };
        i.prototype.results_show = function() {
            if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                });
                return false
            }
            this.container.addClass("chosen-with-drop");
            this.results_showing = true;
            this.search_field.focus();
            this.search_field.val(this.search_field.val());
            this.winnow_results();
            return this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            })
        };
        i.prototype.update_results_content = function(j) {
            return this.search_results.html(j)
        };
        i.prototype.results_hide = function() {
            if (this.results_showing) {
                this.result_clear_highlight();
                this.container.removeClass("chosen-with-drop");
                this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })
            }
            return this.results_showing = false
        };
        i.prototype.set_tab_index = function(j) {
            var k;
            if (this.form_field.tabIndex) {
                k = this.form_field.tabIndex;
                this.form_field.tabIndex = -1;
                return this.search_field[0].tabIndex = k
            }
        };
        i.prototype.set_label_behavior = function() {
            var j = this;
            this.form_field_label = this.form_field_jq.parents("label");
            if (!this.form_field_label.length && this.form_field.id.length) {
                this.form_field_label = a("label[for='" + this.form_field.id + "']")
            }
            if (this.form_field_label.length > 0) {
                return this.form_field_label.bind("click.chosen", function(k) {
                    if (j.is_multiple) {
                        return j.container_mousedown(k)
                    } else {
                        return j.activate_field()
                    }
                })
            }
        };
        i.prototype.show_search_field_default = function() {
            if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
                this.search_field.val(this.default_text);
                return this.search_field.addClass("default")
            } else {
                this.search_field.val("");
                return this.search_field.removeClass("default")
            }
        };
        i.prototype.search_results_mouseup = function(j) {
            var k;
            k = a(j.target).hasClass("active-result") ? a(j.target) : a(j.target).parents(".active-result").first();
            if (k.length) {
                this.result_highlight = k;
                this.result_select(j);
                return this.search_field.focus()
            }
        };
        i.prototype.search_results_mouseover = function(j) {
            var k;
            k = a(j.target).hasClass("active-result") ? a(j.target) : a(j.target).parents(".active-result").first();
            if (k) {
                return this.result_do_highlight(k)
            }
        };
        i.prototype.search_results_mouseout = function(j) {
            if (a(j.target).hasClass("active-result" || a(j.target).parents(".active-result").first())) {
                return this.result_clear_highlight()
            }
        };
        i.prototype.choice_build = function(m) {
            var k, l, j = this;
            k = a("<li />", {
                "class": "search-choice"
            }).html("<span>" + m.html + "</span>");
            if (m.disabled) {
                k.addClass("search-choice-disabled")
            } else {
                l = a("<a />", {
                    "class": "search-choice-close",
                    "data-option-array-index": m.array_index
                });
                l.bind("click.chosen", function(n) {
                    return j.choice_destroy_link_click(n)
                });
                k.append(l)
            }
            return this.search_container.before(k)
        };
        i.prototype.choice_destroy_link_click = function(j) {
            j.preventDefault();
            j.stopPropagation();
            if (!this.is_disabled) {
                return this.choice_destroy(a(j.target))
            }
        };
        i.prototype.choice_destroy = function(j) {
            if (this.result_deselect(j[0].getAttribute("data-option-array-index"))) {
                this.show_search_field_default();
                if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
                    this.results_hide()
                }
                j.parents("li").first().remove();
                return this.search_field_scale()
            }
        };
        i.prototype.results_reset = function() {
            this.reset_single_select_options();
            this.form_field.options[0].selected = true;
            this.single_set_selected_text();
            this.show_search_field_default();
            this.results_reset_cleanup();
            this.form_field_jq.trigger("change");
            if (this.active_field) {
                return this.results_hide()
            }
        };
        i.prototype.results_reset_cleanup = function() {
            this.current_selectedIndex = this.form_field.selectedIndex;
            return this.selected_item.find("abbr").remove()
        };
        i.prototype.result_select = function(j) {
            var k, l;
            if (this.result_highlight) {
                k = this.result_highlight;
                this.result_clear_highlight();
                if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
                    this.form_field_jq.trigger("chosen:maxselected", {
                        chosen: this
                    });
                    return false
                }
                if (this.is_multiple) {
                    k.removeClass("active-result")
                } else {
                    this.reset_single_select_options()
                }
                l = this.results_data[k[0].getAttribute("data-option-array-index")];
                l.selected = true;
                this.form_field.options[l.options_index].selected = true;
                this.selected_option_count = null;
                if (this.is_multiple) {
                    this.choice_build(l)
                } else {
                    this.single_set_selected_text(l.text)
                }
                if (!((j.metaKey || j.ctrlKey) && this.is_multiple)) {
                    this.results_hide()
                }
                this.search_field.val("");
                if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
                    this.form_field_jq.trigger("change", {
                        selected: this.form_field.options[l.options_index].value
                    })
                }
                this.current_selectedIndex = this.form_field.selectedIndex;
                return this.search_field_scale()
            }
        };
        i.prototype.single_set_selected_text = function(j) {
            if (j == null) {
                j = this.default_text
            }
            if (j === this.default_text) {
                this.selected_item.addClass("chosen-default")
            } else {
                this.single_deselect_control_build();
                this.selected_item.removeClass("chosen-default")
            }
            return this.selected_item.find("span").text(j)
        };
        i.prototype.result_deselect = function(j) {
            var k;
            k = this.results_data[j];
            if (!this.form_field.options[k.options_index].disabled) {
                k.selected = false;
                this.form_field.options[k.options_index].selected = false;
                this.selected_option_count = null;
                this.result_clear_highlight();
                if (this.results_showing) {
                    this.winnow_results()
                }
                this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[k.options_index].value
                });
                this.search_field_scale();
                return true
            } else {
                return false
            }
        };
        i.prototype.single_deselect_control_build = function() {
            if (!this.allow_single_deselect) {
                return
            }
            if (!this.selected_item.find("abbr").length) {
                this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')
            }
            return this.selected_item.addClass("chosen-single-with-deselect")
        };
        i.prototype.get_search_text = function() {
            if (this.search_field.val() === this.default_text) {
                return ""
            } else {
                return a("<div/>").text(a.trim(this.search_field.val())).html()
            }
        };
        i.prototype.winnow_results_set_highlight = function() {
            var j, k;
            k = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
            j = k.length ? k.first() : this.search_results.find(".active-result").first();
            if (j != null) {
                return this.result_do_highlight(j)
            }
        };
        i.prototype.no_results = function(k) {
            var j;
            j = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
            j.find("span").first().html(k);
            this.search_results.append(j);
            return this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        };
        i.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        };
        i.prototype.keydown_arrow = function() {
            var j;
            if (this.results_showing && this.result_highlight) {
                j = this.result_highlight.nextAll("li.active-result").first();
                if (j) {
                    return this.result_do_highlight(j)
                }
            } else {
                return this.results_show()
            }
        };
        i.prototype.keyup_arrow = function() {
            var j;
            if (!this.results_showing && !this.is_multiple) {
                return this.results_show()
            } else {
                if (this.result_highlight) {
                    j = this.result_highlight.prevAll("li.active-result");
                    if (j.length) {
                        return this.result_do_highlight(j.first())
                    } else {
                        if (this.choices_count() > 0) {
                            this.results_hide()
                        }
                        return this.result_clear_highlight()
                    }
                }
            }
        };
        i.prototype.keydown_backstroke = function() {
            var j;
            if (this.pending_backstroke) {
                this.choice_destroy(this.pending_backstroke.find("a").first());
                return this.clear_backstroke()
            } else {
                j = this.search_container.siblings("li.search-choice").last();
                if (j.length && !j.hasClass("search-choice-disabled")) {
                    this.pending_backstroke = j;
                    if (this.single_backstroke_delete) {
                        return this.keydown_backstroke()
                    } else {
                        return this.pending_backstroke.addClass("search-choice-focus")
                    }
                }
            }
        };
        i.prototype.clear_backstroke = function() {
            if (this.pending_backstroke) {
                this.pending_backstroke.removeClass("search-choice-focus")
            }
            return this.pending_backstroke = null
        };
        i.prototype.keydown_checker = function(k) {
            var l, j;
            l = (j = k.which) != null ? j : k.keyCode;
            if (l !== 8 && this.pending_backstroke) {
                this.clear_backstroke()
            }
            switch (l) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    if (this.results_showing && !this.is_multiple) {
                        this.result_select(k)
                    }
                    this.mouse_on_container = false;
                    break;
                case 13:
                    if (this.results_showing) {
                        k.preventDefault()
                    }
                    break;
                case 32:
                    if (this.disable_search) {
                        k.preventDefault()
                    }
                    break;
                case 38:
                    k.preventDefault();
                    this.keyup_arrow();
                    break;
                case 40:
                    k.preventDefault();
                    this.keydown_arrow();
                    break
            }
        };
        i.prototype.search_field_scale = function() {
            var l, m, n, o, p, q, r, j, k;
            if (this.is_multiple) {
                n = 0;
                r = 0;
                p = "position:absolute; left: -1000px; top: -1000px; display:none;";
                q = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"];
                for (j = 0, k = q.length; j < k; j++) {
                    o = q[j];
                    p += o + ":" + this.search_field.css(o) + ";"
                }
                l = a("<div />", {
                    style: p
                });
                l.text(this.search_field.val());
                a("body").append(l);
                r = l.width() + 25;
                l.remove();
                m = this.container.outerWidth();
                if (r > m - 10) {
                    r = m - 10
                }
                return this.search_field.css({
                    width: r + "px"
                })
            }
        };
        return i
    })(e)
}).call(this);
(function(b, a) {
    if (typeof exports == "object") {
        module.exports = a()
    } else {
        if (typeof define == "function" && define.amd) {
            define(a)
        } else {
            b.Spinner = a()
        }
    }
}(this, function() {
    var k = ["webkit", "Moz", "ms", "O"],
        b = {},
        o;

    function c(t, s) {
        var q = document.createElement(t || "div"),
            r;
        for (r in s) {
            q[r] = s[r]
        }
        return q
    }

    function h(s) {
        for (var q = 1, r = arguments.length; q < r; q++) {
            s.appendChild(arguments[q])
        }
        return s
    }
    var m = (function() {
        var q = c("style", {
            type: "text/css"
        });
        h(document.getElementsByTagName("head")[0], q);
        return q.sheet || q.styleSheet
    }());

    function a(q, y, r, s) {
        var t = ["opacity", y, ~~(q * 100), r, s].join("-"),
            x = 0.01 + r / s * 100,
            A = Math.max(1 - (1 - q) / y * (100 - x), q),
            w = o.substring(0, o.indexOf("Animation")).toLowerCase(),
            u = w && "-" + w + "-" || "";
        if (!b[t]) {
            m.insertRule("@" + u + "keyframes " + t + "{0%{opacity:" + A + "}" + x + "%{opacity:" + q + "}" + (x + 0.01) + "%{opacity:1}" + (x + y) % 100 + "%{opacity:" + q + "}100%{opacity:" + A + "}}", m.cssRules.length);
            b[t] = 1
        }
        return t
    }

    function p(q, u) {
        var w = q.style,
            t, r;
        u = u.charAt(0).toUpperCase() + u.slice(1);
        for (r = 0; r < k.length; r++) {
            t = k[r] + u;
            if (w[t] !== undefined) {
                return t
            }
        }
        if (w[u] !== undefined) {
            return u
        }
    }

    function d(q, s) {
        for (var r in s) {
            q.style[p(q, r) || r] = s[r]
        }
        return q
    }

    function i(t) {
        for (var r = 1; r < arguments.length; r++) {
            var q = arguments[r];
            for (var s in q) {
                if (t[s] === undefined) {
                    t[s] = q[s]
                }
            }
        }
        return t
    }

    function j(q) {
        var r = {
            x: q.offsetLeft,
            y: q.offsetTop
        };
        while ((q = q.offsetParent)) {
            r.x += q.offsetLeft, r.y += q.offsetTop
        }
        return r
    }

    function f(q, r) {
        return typeof q == "string" ? q : q[r % q.length]
    }
    var e = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: 1 / 4,
        fps: 20,
        zIndex: 2000000000,
        className: "spinner",
        top: "50%",
        left: "50%",
        position: "absolute"
    };

    function n(q) {
        this.opts = i(q || {}, n.defaults, e)
    }
    n.defaults = {};
    i(n.prototype, {
        spin: function(D) {
            this.stop();
            var B = this,
                z = B.opts,
                t = B.el = d(c(0, {
                    className: z.className
                }), {
                    position: z.position,
                    width: 0,
                    zIndex: z.zIndex
                }),
                y = z.radius + z.length + z.width;
            d(t, {
                left: z.left,
                top: z.top
            });
            if (D) {
                D.insertBefore(t, D.firstChild || null)
            }
            t.setAttribute("role", "progressbar");
            B.lines(t, B.opts);
            if (!o) {
                var x = 0,
                    C = (z.lines - 1) * (1 - z.direction) / 2,
                    q, w = z.fps,
                    u = w / z.speed,
                    A = (1 - z.opacity) / (u * z.trail / 100),
                    s = u / z.lines;
                (function r() {
                    x++;
                    for (var E = 0; E < z.lines; E++) {
                        q = Math.max(1 - (x + (z.lines - E) * s) % u * A, z.opacity);
                        B.opacity(t, E * z.direction + C, q, z)
                    }
                    B.timeout = B.el && setTimeout(r, ~~(1000 / w))
                })()
            }
            return B
        },
        stop: function() {
            var q = this.el;
            if (q) {
                clearTimeout(this.timeout);
                if (q.parentNode) {
                    q.parentNode.removeChild(q)
                }
                this.el = undefined
            }
            return this
        },
        lines: function(q, t) {
            var s = 0,
                w = (t.lines - 1) * (1 - t.direction) / 2,
                u;

            function r(x, y) {
                return d(c(), {
                    position: "absolute",
                    width: (t.length + t.width) + "px",
                    height: t.width + "px",
                    background: x,
                    boxShadow: y,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / t.lines * s + t.rotate) + "deg) translate(" + t.radius + "px,0)",
                    borderRadius: (t.corners * t.width >> 1) + "px"
                })
            }
            for (; s < t.lines; s++) {
                u = d(c(), {
                    position: "absolute",
                    top: 1 + ~(t.width / 2) + "px",
                    transform: t.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: t.opacity,
                    animation: o && a(t.opacity, t.trail, w + s * t.direction, t.lines) + " " + 1 / t.speed + "s linear infinite"
                });
                if (t.shadow) {
                    h(u, d(r("#000", "0 0 4px #000"), {
                        top: 2 + "px"
                    }))
                }
                h(q, h(u, r(f(t.color, s), "0 0 1px rgba(0,0,0,.1)")))
            }
            return q
        },
        opacity: function(q, r, s) {
            if (r < q.childNodes.length) {
                q.childNodes[r].style.opacity = s
            }
        }
    });

    function g() {
        function q(s, r) {
            return c("<" + s + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', r)
        }
        m.addRule(".spin-vml", "behavior:url(#default#VML)");
        n.prototype.lines = function(t, z) {
            var A = z.length + z.width,
                B = 2 * A;

            function w() {
                return d(q("group", {
                    coordsize: B + " " + B,
                    coordorigin: -A + " " + -A
                }), {
                    width: B,
                    height: B
                })
            }
            var y = -(z.width + z.length) * 2 + "px",
                u = d(w(), {
                    position: "absolute",
                    top: y,
                    left: y
                }),
                x;

            function C(D, r, s) {
                h(u, h(d(w(), {
                    rotation: 360 / z.lines * D + "deg",
                    left: ~~r
                }), h(d(q("roundrect", {
                    arcsize: z.corners
                }), {
                    width: A,
                    height: z.width,
                    left: z.radius,
                    top: -z.width >> 1,
                    filter: s
                }), q("fill", {
                    color: f(z.color, D),
                    opacity: z.opacity
                }), q("stroke", {
                    opacity: 0
                }))))
            }
            if (z.shadow) {
                for (x = 1; x <= z.lines; x++) {
                    C(x, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
                }
            }
            for (x = 1; x <= z.lines; x++) {
                C(x)
            }
            return h(t, u)
        };
        n.prototype.opacity = function(s, t, w, u) {
            var r = s.firstChild;
            u = u.shadow && u.lines || 0;
            if (r && t + u < r.childNodes.length) {
                r = r.childNodes[t + u];
                r = r && r.firstChild;
                r = r && r.firstChild;
                if (r) {
                    r.opacity = w
                }
            }
        }
    }
    var l = d(c("group"), {
        behavior: "url(#default#VML)"
    });
    if (!p(l, "transform") && l.adj) {
        g()
    } else {
        o = p(l, "animation")
    }
    return n
}));
/*
 * Ladda
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2014 Hakim El Hattab, http://hakim.se
 */
(function(b, a) {
    if (typeof exports === "object") {
        module.exports = a(require("spin.js"))
    } else {
        if (typeof define === "function" && define.amd) {
            define(["spin"], a)
        } else {
            b.Ladda = a(b.Spinner)
        }
    }
}(this, function(g) {
    var a = [];

    function c(j) {
        if (typeof j === "undefined") {
            console.warn("Ladda button target must be defined.");
            return
        }
        if (!j.querySelector(".ladda-label")) {
            j.innerHTML = '<span class="ladda-label">' + j.innerHTML + "</span>"
        }
        var l;
        var m = document.createElement("span");
        m.className = "ladda-spinner";
        j.appendChild(m);
        var n;
        var k = {
            start: function() {
                if (!l) {
                    l = d(j)
                }
                j.setAttribute("disabled", "");
                j.setAttribute("data-loading", "");
                clearTimeout(n);
                l.spin(m);
                this.setProgress(0);
                return this
            },
            startAfter: function(o) {
                clearTimeout(n);
                n = setTimeout(function() {
                    k.start()
                }, o);
                return this
            },
            stop: function() {
                j.removeAttribute("disabled");
                j.removeAttribute("data-loading");
                clearTimeout(n);
                if (l) {
                    n = setTimeout(function() {
                        l.stop()
                    }, 1000)
                }
                return this
            },
            toggle: function() {
                if (this.isLoading()) {
                    this.stop()
                } else {
                    this.start()
                }
                return this
            },
            setProgress: function(o) {
                o = Math.max(Math.min(o, 1), 0);
                var p = j.querySelector(".ladda-progress");
                if (o === 0 && p && p.parentNode) {
                    p.parentNode.removeChild(p)
                } else {
                    if (!p) {
                        p = document.createElement("div");
                        p.className = "ladda-progress";
                        j.appendChild(p)
                    }
                    p.style.width = ((o || 0) * j.offsetWidth) + "px"
                }
            },
            enable: function() {
                this.stop();
                return this
            },
            disable: function() {
                this.stop();
                j.setAttribute("disabled", "");
                return this
            },
            isLoading: function() {
                return j.hasAttribute("data-loading")
            },
            remove: function() {
                clearTimeout(n);
                j.removeAttribute("disabled", "");
                j.removeAttribute("data-loading", "");
                if (l) {
                    l.stop();
                    l = null
                }
                for (var o = 0, p = a.length; o < p; o++) {
                    if (k === a[o]) {
                        a.splice(o, 1);
                        break
                    }
                }
            }
        };
        a.push(k);
        return k
    }

    function e(j, k) {
        while (j.parentNode && j.tagName !== k) {
            j = j.parentNode
        }
        return (k === j.tagName) ? j : undefined
    }

    function f(l) {
        var p = ["input", "textarea"];
        var n = [];
        for (var m = 0; m < p.length; m++) {
            var k = l.getElementsByTagName(p[m]);
            for (var o = 0; o < k.length; o++) {
                if (k[o].hasAttribute("required")) {
                    n.push(k[o])
                }
            }
        }
        return n
    }

    function b(m, l) {
        l = l || {};
        var n = [];
        if (typeof m === "string") {
            n = i(document.querySelectorAll(m))
        } else {
            if (typeof m === "object" && typeof m.nodeName === "string") {
                n = [m]
            }
        }
        for (var j = 0, k = n.length; j < k; j++) {
            (function() {
                var o = n[j];
                if (typeof o.addEventListener === "function") {
                    var p = c(o);
                    var q = -1;
                    o.addEventListener("click", function(r) {
                        var w = true;
                        var s = e(o, "FORM");
                        if (typeof s !== "undefined") {
                            var u = f(s);
                            for (var t = 0; t < u.length; t++) {
                                if (u[t].value.replace(/^\s+|\s+$/g, "") === "") {
                                    w = false
                                }
                            }
                        }
                        if (w) {
                            p.startAfter(1);
                            if (typeof l.timeout === "number") {
                                clearTimeout(q);
                                q = setTimeout(p.stop, l.timeout)
                            }
                            if (typeof l.callback === "function") {
                                l.callback.apply(null, [p])
                            }
                        }
                    }, false)
                }
            })()
        }
    }

    function h() {
        for (var j = 0, k = a.length; j < k; j++) {
            a[j].stop()
        }
    }

    function d(j) {
        var k = j.offsetHeight,
            o;
        if (k === 0) {
            k = parseFloat(window.getComputedStyle(j).height)
        }
        if (k > 32) {
            k *= 0.8
        }
        if (j.hasAttribute("data-spinner-size")) {
            k = parseInt(j.getAttribute("data-spinner-size"), 10)
        }
        if (j.hasAttribute("data-spinner-color")) {
            o = j.getAttribute("data-spinner-color")
        }
        var m = 12,
            n = k * 0.2,
            l = n * 0.6,
            p = n < 7 ? 2 : 3;
        return new g({
            color: o || "#fff",
            lines: m,
            radius: n,
            length: l,
            width: p,
            zIndex: "auto",
            top: "auto",
            left: "auto",
            className: ""
        })
    }

    function i(l) {
        var j = [];
        for (var k = 0; k < l.length; k++) {
            j.push(l[k])
        }
        return j
    }
    return {
        bind: b,
        create: c,
        stopAll: h
    }
}));
/* Tablesaw - v0.1.8 - 2014-10-23
 * https://github.com/filamentgroup/tablesaw
 * Copyright (c) 2014 Filament Group; Licensed MIT */
(function(a) {
    var d = document.createElement("div"),
        c = d.getElementsByTagName("i"),
        b = a(document.documentElement);
    d.innerHTML = "<!--[if lte IE 8]><i></i><![endif]-->";
    if (c[0]) {
        b.addClass("ie-lte8")
    }
    if (!("querySelector" in document) || (window.blackberry && !window.WebKitPoint) || window.operamini) {
        return
    } else {
        b.addClass("tablesaw-enhanced");
        a(function() {
            a(document).trigger("enhance.tablesaw")
        })
    }
})(jQuery);
(function(a) {
    var f = "table",
        b = {
            toolbar: "tablesaw-bar"
        },
        d = {
            create: "tablesawcreate",
            destroy: "tablesawdestroy",
            refresh: "tablesawrefresh"
        },
        c = "stack",
        e = "table[data-mode],table[data-sortable]";
    var g = function(h) {
        if (!h) {
            throw new Error("Tablesaw requires an element.")
        }
        this.table = h;
        this.$table = a(h);
        this.mode = this.$table.attr("data-mode") || c;
        this.init()
    };
    g.prototype.init = function() {
        if (!this.$table.attr("id")) {
            this.$table.attr("id", f + "-" + Math.round(Math.random() * 10000))
        }
        this.createToolbar();
        var h = this._initCells();
        this.$table.trigger(d.create, [this, h])
    };
    g.prototype._initCells = function() {
        var h, j = this.table.querySelectorAll("thead tr"),
            i = this;
        a(j).each(function() {
            var k = 0;
            a(this).children().each(function() {
                var n = parseInt(this.getAttribute("colspan"), 10),
                    m = ":nth-child(" + (k + 1) + ")";
                h = k + 1;
                if (n) {
                    for (var l = 0; l < n - 1; l++) {
                        k++;
                        m += ", :nth-child(" + (k + 1) + ")"
                    }
                }
                this.cells = i.$table.find("tr").not(a(j).eq(0)).not(this).children(m);
                k++
            })
        });
        return h
    };
    g.prototype.refresh = function() {
        this._initCells();
        this.$table.trigger(d.refresh)
    };
    g.prototype.createToolbar = function() {
        var h = this.$table.prev("." + b.toolbar);
        if (!h.length) {
            h = a("<div>").addClass(b.toolbar).insertBefore(this.$table)
        }
        this.$toolbar = h;
        if (this.mode) {
            this.$toolbar.addClass("mode-" + this.mode)
        }
    };
    g.prototype.destroy = function() {
        this.$table.prev("." + b.toolbar).each(function() {
            this.className = this.className.replace(/\bmode\-\w*\b/gi, "")
        });
        var h = this.$table.attr("id");
        a(document).unbind("." + h);
        a(window).unbind("." + h);
        this.$table.trigger(d.destroy, [this]);
        this.$table.removeAttr("data-mode");
        this.$table.removeData(f)
    };
    a.fn[f] = function() {
        return this.each(function() {
            var h = a(this);
            if (h.data(f)) {
                return
            }
            var i = new g(this);
            h.data(f, i)
        })
    };
    a(document).on("enhance.tablesaw", function(h) {
        a(h.target).find(e)[f]()
    })
}(jQuery));
(function(g, a, f) {
    var c = {
        stackTable: "tablesaw-stack",
        cellLabels: "tablesaw-cell-label"
    };
    var d = {
        obj: "tablesaw-stack"
    };
    var b = {
        labelless: "data-no-labels"
    };
    var e = function(h) {
        this.$table = a(h);
        this.labelless = this.$table.is("[" + b.labelless + "]");
        if (!this.labelless) {
            this.allHeaders = this.$table.find("th")
        }
        this.$table.data(d.obj, this)
    };
    e.prototype.init = function(h) {
        this.$table.addClass(c.stackTable);
        if (this.labelless) {
            return
        }
        var i = a(this.allHeaders);
        i.each(function() {
            var j = a(this.cells).filter(function() {
                    return !a(this).parent().is("[" + b.labelless + "]")
                }),
                l = j.not(this).filter("thead th").length && " tablesaw-cell-label-top",
                n = a(this).text();
            if (n !== "") {
                if (l) {
                    var m = parseInt(a(this).attr("colspan"), 10),
                        k = "";
                    if (m) {
                        k = "td:nth-child(" + m + "n + " + (h) + ")"
                    }
                    j.filter(k).prepend("<b class='" + c.cellLabels + l + "'>" + n + "</b>")
                } else {
                    j.prepend("<b class='" + c.cellLabels + "'>" + n + "</b>")
                }
            }
        })
    };
    e.prototype.destroy = function() {
        this.$table.removeClass(c.stackTable);
        this.$table.find("." + c.cellLabels).remove()
    };
    a(document).on("tablesawcreate", function(i, k, h) {
        if (k.mode === "stack") {
            var j = new e(k.table);
            j.init(h)
        }
    });
    a(document).on("tablesawdestroy", function(h, i) {
        if (i.mode === "stack") {
            a(i.table).data(d.obj).destroy()
        }
    })
}(this, jQuery));
(function(a) {
    var d = "tablesawbtn",
        b = ".btn",
        c = {
            _create: function() {
                return a(this).each(function() {
                    a(this).trigger("beforecreate." + d)[d]("_init").trigger("create." + d)
                })
            },
            _init: function() {
                var e = a(this),
                    f = this.getElementsByTagName("select")[0];
                if (f) {
                    a(this).addClass("btn-select")[d]("_select", f)
                }
                return e
            },
            _select: function(e) {
                var f = function(n, p) {
                    var o = a(p).find("option"),
                        m, h, g;
                    o.each(function() {
                        var i = this;
                        if (i.selected) {
                            m = document.createTextNode(i.text)
                        }
                    });
                    g = n.childNodes;
                    if (o.length > 0) {
                        for (var j = 0, k = g.length; j < k; j++) {
                            h = g[j];
                            if (h && h.nodeType === 3) {
                                n.replaceChild(m, h)
                            }
                        }
                    }
                };
                f(this, e);
                a(this).bind("change refresh", function() {
                    f(this, e)
                })
            }
        };
    a.fn[d] = function(f, e, g, h) {
        return this.each(function() {
            if (f && typeof(f) === "string") {
                return a.fn[d].prototype[f].call(this, e, g, h)
            }
            if (a(this).data(d + "active")) {
                return a(this)
            }
            a(this).data(d + "active", true);
            a.fn[d].prototype._create.call(this)
        })
    };
    a.extend(a.fn[d].prototype, c);
    a(document).on("enhance", function(f) {
        a(b, f.target)[d]()
    })
}(jQuery));
(function(d, a, c) {
    var b = function(e) {
        this.$table = a(e);
        this.classes = {
            columnToggleTable: "tablesaw-columntoggle",
            columnBtnContain: "tablesaw-columntoggle-btnwrap tablesaw-advance",
            columnBtn: "tablesaw-columntoggle-btn tablesaw-nav-btn down",
            columnBtnSide: this.$table.attr("data-column-btn-side") || "right",
            popup: "tablesaw-columntoggle-popup",
            priorityPrefix: "tablesaw-priority-",
            toolbar: "tablesaw-bar"
        };
        this.i18n = {
            columnBtnText: "Columns",
            columnsDialogError: "No eligible columns."
        };
        this.headers = this.$table.find("tr:first > th");
        this.$table.data("tablesaw-coltoggle", this)
    };
    b.prototype.init = function() {
        var o, l, g, h, f, e, n = this;
        this.$table.addClass(this.classes.columnToggleTable);
        o = this.$table.attr("id");
        l = o + "-popup";
        e = a("<div class='" + this.classes.columnBtnContain + " " + this.classes.columnBtnSide + "'></div>");
        g = a("<a href='#" + l + "' class='btn btn-micro " + this.classes.columnBtn + "' data-popup-link><span>" + this.i18n.columnBtnText + "</span></a>");
        h = a("<div class='dialog-table-coltoggle " + this.classes.popup + "' id='" + l + "'></div>");
        f = a("<div class='btn-group'></div>");
        var k = false;
        a(this.headers).not("td").each(function() {
            var q = a(this),
                r = q.attr("data-priority"),
                p = q.add(this.cells);
            if (r && r !== "persist") {
                p.addClass(n.classes.priorityPrefix + r);
                a("<label><input type='checkbox' checked>" + q.text() + "</label>").appendTo(f).children(0).data("cells", p);
                k = true
            }
        });
        if (!k) {
            f.append("<label>" + this.i18n.columnsDialogError + "</label>")
        }
        f.appendTo(h);
        f.find('input[type="checkbox"]').on("change", function(q) {
            var p = q.target.checked;
            a(q.target).data("cells").toggleClass("tablesaw-cell-hidden", !p).toggleClass("tablesaw-cell-visible", p);
            n.$table.trigger("tablesawcolumns")
        });
        g.appendTo(e);
        e.appendTo(this.$table.prev("." + this.classes.toolbar));
        var j;

        function m() {
            e.addClass("visible");
            g.removeClass("down").addClass("up");
            a(document).unbind("click." + o, i);
            window.clearTimeout(j);
            j = window.setTimeout(function() {
                a(document).one("click." + o, i)
            }, 15)
        }

        function i(p) {
            if (p && a(p.target).closest("." + n.classes.popup).length) {
                return
            }
            a(document).unbind("click." + o);
            g.removeClass("up").addClass("down");
            e.removeClass("visible")
        }
        g.on("click.tablesaw", function(p) {
            p.preventDefault();
            if (!e.is(".visible")) {
                m()
            } else {
                i()
            }
        });
        h.appendTo(e);
        this.$menu = f;
        a(window).on("resize." + o, function() {
            n.refreshToggle()
        });
        this.refreshToggle()
    };
    b.prototype.refreshToggle = function() {
        this.$menu.find("input").each(function() {
            var e = a(this);
            this.checked = e.data("cells").eq(0).css("display") === "table-cell"
        })
    };
    b.prototype.refreshPriority = function() {
        var e = this;
        a(this.headers).not("td").each(function() {
            var g = a(this),
                h = g.attr("data-priority"),
                f = g.add(this.cells);
            if (h && h !== "persist") {
                f.addClass(e.classes.priorityPrefix + h)
            } else {
                f.each(function() {
                    this.className = this.className.replace(/\bui\-table\-priority\-\d\b/g, "")
                })
            }
        })
    };
    b.prototype.destroy = function() {
        this.$table.removeClass(this.classes.columnToggleTable);
        this.$table.find("th, td").each(function() {
            var e = a(this);
            e.removeClass("tablesaw-cell-hidden").removeClass("tablesaw-cell-visible");
            this.className = this.className.replace(/\bui\-table\-priority\-\d\b/g, "")
        })
    };
    a(document).on("tablesawcreate", function(f, h) {
        if (h.mode === "columntoggle") {
            var g = new b(h.table);
            g.init()
        }
    });
    a(document).on("tablesawdestroy", function(f, g) {
        if (g === "columntoggle") {
            a(g.table).data("tablesaw-coltoggle").destroy()
        }
    })
}(this, jQuery));
(function(d, a, c) {
    function b(l) {
        var e = a("<div class='tablesaw-advance'></div>"),
            k = a("<a href='#' class='tablesaw-nav-btn btn btn-micro left' title='Previous Column'></a>").appendTo(e),
            j = a("<a href='#' class='tablesaw-nav-btn btn btn-micro right' title='Next Column'></a>").appendTo(e),
            s = "disabled",
            A = "tablesaw-fix-persist",
            h = l.find("thead th"),
            i = h.not('[data-priority="persist"]'),
            r = [],
            g = a(document.head || "head"),
            C = l.attr("id"),
            u = a("html").is(".ie-lte8");
        if (!h.length) {
            throw new Error("tablesaw swipe: no header cells found. Are you using <th> inside of <thead>?")
        }
        l.css("width", "auto");
        h.each(function() {
            r.push(a(this).outerWidth())
        });
        l.css("width", "");
        e.appendTo(l.prev(".tablesaw-bar"));
        l.addClass("tablesaw-swipe");
        if (!C) {
            C = "tableswipe-" + Math.round(Math.random() * 10000);
            l.attr("id", C)
        }

        function f(E) {
            return a(E.cells).add(E)
        }

        function B(E) {
            f(E).removeClass("tablesaw-cell-hidden")
        }

        function t(E) {
            f(E).addClass("tablesaw-cell-hidden")
        }

        function z(E) {
            f(E).addClass("tablesaw-cell-persist")
        }

        function w(E) {
            return a(E).is('[data-priority="persist"]')
        }

        function D() {
            l.removeClass(A);
            a("#" + C + "-persist").remove()
        }

        function x() {
            var E = "#" + C + " ",
                F = [],
                G = l.width();
            h.each(function(H) {
                var I;
                if (w(this)) {
                    I = a(this).outerWidth();
                    if (I < G * 0.75) {
                        F.push(E + " .tablesaw-cell-persist:nth-child(" + (H + 1) + ") { width: " + I + "px; }")
                    }
                }
            });
            D();
            l.addClass(A);
            g.append(a("<style>" + F.join("\n") + "</style>").attr("id", C + "-persist"))
        }

        function p() {
            var F = [],
                E;
            i.each(function(H) {
                var G = a(this),
                    I = G.css("display") === "none" || G.is(".tablesaw-cell-hidden");
                if (!I && !E) {
                    E = true;
                    F[0] = H
                } else {
                    if (I && E) {
                        F[1] = H;
                        return false
                    }
                }
            });
            return F
        }

        function q() {
            var E = p();
            return [E[1] - 1, E[0] - 1]
        }

        function y(E) {
            return E ? p() : q()
        }

        function n(E) {
            return E[1] > -1 && E[1] < i.length
        }

        function o() {
            var F = 20,
                E = l.parent().width(),
                G = 0;
            h.each(function(I) {
                var H = a(this),
                    J = H.is('[data-priority="persist"]');
                G += r[I] + (J ? 0 : F);
                if (J) {
                    z(this);
                    return
                }
                if (G > E) {
                    t(this)
                } else {
                    B(this)
                }
            });
            if (!u) {
                D()
            }
            l.trigger("tablesawcolumns")
        }

        function m(E) {
            var F = y(E);
            if (n(F)) {
                if (isNaN(F[0])) {
                    if (E) {
                        F[0] = 0
                    } else {
                        F[0] = i.length - 1
                    }
                }
                if (!u) {
                    x()
                }
                t(i.get(F[0]));
                B(i.get(F[1]));
                l.trigger("tablesawcolumns")
            }
        }
        k.add(j).click(function(E) {
            m(!!a(E.target).closest(j).length);
            E.preventDefault()
        });
        l.bind("touchstart.swipetoggle", function(E) {
            var F = (E.touches || E.originalEvent.touches)[0].pageX,
                G = (E.touches || E.originalEvent.touches)[0].pageY,
                H, I;
            a(this).bind("touchmove", function(J) {
                H = (J.touches || J.originalEvent.touches)[0].pageX;
                I = (J.touches || J.originalEvent.touches)[0].pageY;
                if (Math.abs(H - F) > 15 && Math.abs(I - G) < 20) {
                    J.preventDefault()
                }
            }).bind("touchend.swipetoggle", function() {
                if (H - F < 15) {
                    m(true)
                }
                if (H - F > -15) {
                    m(false)
                }
                a(this).unbind("touchmove touchend")
            })
        }).bind("tablesawcolumns.swipetoggle", function() {
            k[n(q()) ? "removeClass" : "addClass"](s);
            j[n(p()) ? "removeClass" : "addClass"](s)
        }).bind("tablesawnext.swipetoggle", function() {
            m(true)
        }).bind("tablesawprev.swipetoggle", function() {
            m(false)
        }).bind("tablesawdestroy.swipetoggle", function() {
            var E = a(this);
            E.removeClass("tablesaw-swipe");
            E.prev(".tablesaw-bar").find(".tablesaw-advance").remove();
            a(d).off("resize", o);
            E.unbind(".swipetoggle")
        });
        o();
        a(d).on("resize", o)
    }
    a(document).on("tablesawcreate", function(f, g) {
        if (g.mode === "swipe") {
            b(g.$table)
        }
    })
}(this, jQuery));
(function(a) {
    function c(j) {
        return a.map(j.childNodes, function(l) {
            var k = a(l);
            if (k.is("input, select")) {
                return k.val()
            } else {
                if (k.hasClass("tablesaw-cell-label")) {
                    return
                }
            }
            return a.trim(k.text())
        }).join("")
    }
    var i = "tablesaw-sortable",
        g = "xsortable",
        e = "table[data-" + g + "]",
        h = "[data-" + g + "-switch]",
        b = {
            head: g + "-head",
            ascend: g + "-ascending",
            descend: g + "-descending",
            switcher: i + "-switch",
            tableToolbar: "tablesaw-toolbar"
        },
        d = {
            sort: "Sort"
        },
        f = {
            _create: function(j) {
                return a(this).each(function() {
                    var k = a(this).data("init" + g);
                    if (k) {
                        return false
                    }
                    a(this).data("init" + g, true).trigger("beforecreate." + g)[g]("_init", j).trigger("create." + g)
                })
            },
            _init: function() {
                var o = a(this),
                    q, j;
                var l = function() {
                        o.addClass(i)
                    },
                    k = function(t) {
                        a.each(t, function(u, w) {
                            a(w).addClass(b.head)
                        })
                    },
                    s = function(u, t) {
                        a.each(u, function(x, y) {
                            var w = a("<button />");
                            w.bind("click", {
                                col: y
                            }, t);
                            a(y).wrapInner(w)
                        })
                    },
                    n = function(t) {
                        a.each(t, function(w, x) {
                            var u = a(x);
                            u.removeAttr("data-sortable-default-col");
                            u.removeClass(b.ascend);
                            u.removeClass(b.descend)
                        })
                    },
                    r = function(t) {
                        if (a(t.target).is("a[href]")) {
                            return
                        }
                        t.stopPropagation();
                        var u = a(this).parent(),
                            x = t.data.col,
                            w = q.index(u);
                        n(u.siblings());
                        if (u.hasClass(b.descend)) {
                            o[g]("sortBy", x, true);
                            w += "_asc"
                        } else {
                            o[g]("sortBy", x);
                            w += "_desc"
                        }
                        if (j) {
                            j.find("select").val(w).trigger("refresh")
                        }
                        t.preventDefault()
                    },
                    p = function(t) {
                        a.each(t, function(x, w) {
                            var u = a(w);
                            if (u.is("[data-sortable-default-col]")) {
                                if (!u.hasClass(b.descend)) {
                                    u.addClass(b.ascend)
                                }
                            }
                        })
                    },
                    m = function(w) {
                        j = a("<div>").addClass(b.switcher).addClass(b.tableToolbar).html(function() {
                            var x = ["<label>" + d.sort + ":"];
                            x.push('<span class="btn btn-small">&#160;<select>');
                            w.each(function(C) {
                                var y = a(this),
                                    z = y.is("[data-sortable-default-col]"),
                                    A = y.hasClass(b.descend),
                                    B = false;
                                a(this.cells).slice(0, 3).each(function() {
                                    if (!isNaN(parseInt(c(this), 10))) {
                                        B = true;
                                        return false
                                    }
                                });
                                x.push("<option" + (z && !A ? " selected" : "") + ' value="' + C + '_asc">' + y.text() + " " + (B ? "?" : "(A-Z)") + "</option>");
                                x.push("<option" + (z && A ? " selected" : "") + ' value="' + C + '_desc">' + y.text() + " " + (B ? "?" : "(Z-A)") + "</option>")
                            });
                            x.push("</select></span></label>");
                            return x.join("")
                        });
                        var u = o.prev(".tablesaw-bar"),
                            t = u.children().eq(0);
                        if (t.length) {
                            j.insertBefore(t)
                        } else {
                            j.appendTo(u)
                        }
                        j.find(".btn").tablesawbtn();
                        j.find("select").on("change", function() {
                            var y = a(this).val().split("_"),
                                x = w.eq(y[0]);
                            n(x.siblings());
                            o.sortable("sortBy", x.get(0), y[1] === "asc")
                        })
                    };
                l();
                q = o.find("thead th[data-" + g + "-col]");
                k(q);
                s(q, r);
                p(q);
                if (o.is(h)) {
                    m(q, o.find("tbody tr:nth-child(-n+3)"))
                }
            },
            getColumnNumber: function(j) {
                return a(j).prevAll().length
            },
            getTableRows: function() {
                return a(this).find("tbody tr")
            },
            sortRows: function(r, n, k, m) {
                var l, o, s;
                var p = function(u) {
                        var t = [];
                        a.each(u, function(w, x) {
                            t.push({
                                cell: c(a(x).children().get(n)),
                                rowNum: w
                            })
                        });
                        return t
                    },
                    q = function(t, w) {
                        var u, x = /[^\d\.]/g;
                        if (t) {
                            u = function(y, z) {
                                if (w || !isNaN(parseFloat(y.cell))) {
                                    return parseFloat(y.cell.replace(x, "")) - parseFloat(z.cell.replace(x, ""))
                                } else {
                                    return y.cell.toLowerCase() > z.cell.toLowerCase() ? 1 : -1
                                }
                            }
                        } else {
                            u = function(y, z) {
                                if (w || !isNaN(parseFloat(y.cell))) {
                                    return parseFloat(z.cell.replace(x, "")) - parseFloat(y.cell.replace(x, ""))
                                } else {
                                    return y.cell.toLowerCase() < z.cell.toLowerCase() ? 1 : -1
                                }
                            }
                        }
                        return u
                    },
                    j = function(z, y) {
                        var x = [],
                            u, w, t;
                        for (u = 0, w = z.length; u < w; u++) {
                            t = z[u].rowNum;
                            x.push(y[t])
                        }
                        return x
                    };
                l = p(r);
                o = q(k, a(m).is("[data-sortable-numeric]"));
                s = l.sort(o);
                r = j(s, r);
                return r
            },
            replaceTableRows: function(l) {
                var k = a(this),
                    j = k.find("tbody");
                j.html(l)
            },
            makeColDefault: function(l, j) {
                var k = a(l);
                k.attr("data-sortable-default-col", "true");
                if (j) {
                    k.removeClass(b.descend);
                    k.addClass(b.ascend)
                } else {
                    k.removeClass(b.ascend);
                    k.addClass(b.descend)
                }
            },
            sortBy: function(k, j) {
                var m = a(this),
                    l, n;
                l = m[g]("getColumnNumber", k);
                n = m[g]("getTableRows");
                n = m[g]("sortRows", n, l, j, k);
                m[g]("replaceTableRows", n);
                m[g]("makeColDefault", k, j)
            }
        };
    a.fn[g] = function(k) {
        var j = Array.prototype.slice.call(arguments, 1),
            l;
        if (k && typeof(k) === "string") {
            l = a.fn[g].prototype[k].apply(this[0], j);
            return (typeof l !== "undefined") ? l : a(this)
        }
        if (!a(this).data(g + "data")) {
            a(this).data(g + "active", true);
            a.fn[g].prototype._create.call(this, k)
        }
        return a(this)
    };
    a.extend(a.fn[g].prototype, f);
    a(document).on("tablesawcreate", function(j, k) {
        if (k.$table.is(e)) {
            k.$table[g]()
        }
    })
}(jQuery));
(function(e, a, d) {
    var c = {
        attr: {
            init: "data-minimap"
        }
    };

    function b(i) {
        var f = a('<div class="tablesaw-advance minimap">'),
            g = a('<ul class="tablesaw-advance-dots">').appendTo(f),
            j = "tablesaw-advance-dots-hide",
            h = i.find("thead th");
        h.each(function() {
            g.append("<li><i></i></li>")
        });
        f.appendTo(i.prev(".tablesaw-bar"));

        function l(m) {
            var n = m.attr(c.attr.init);
            return !n || e.matchMedia && e.matchMedia(n).matches
        }

        function k() {
            if (!l(i)) {
                f.hide();
                return
            }
            f.show();
            var m = g.find("li").removeClass(j);
            i.find("thead th").each(function(n) {
                if (a(this).css("display") === "none") {
                    m.eq(n).addClass(j)
                }
            })
        }
        k();
        a(e).on("resize", k);
        i.bind("tablesawcolumns.minimap", function() {
            k()
        }).bind("tablesawdestroy.minimap", function() {
            var m = a(this);
            m.prev(".tablesaw-bar").find(".tablesaw-advance").remove();
            a(e).off("resize", k);
            m.unbind(".minimap")
        })
    }
    a(document).on("tablesawcreate", function(f, g) {
        if ((g.mode === "swipe" || g.mode === "columntoggle") && g.$table.is("[ " + c.attr.init + "]")) {
            b(g.$table)
        }
    })
}(this, jQuery));
(function(c, a) {
    var b = {
        selectors: {
            init: "table[data-mode-switch]"
        },
        attributes: {
            excludeMode: "data-mode-exclude"
        },
        classes: {
            main: "tablesaw-modeswitch",
            toolbar: "tablesaw-toolbar"
        },
        modes: ["stack", "swipe", "columntoggle"],
        i18n: {
            modes: ["Stack", "Swipe", "Toggle"],
            columns: 'Col<span class="a11y-sm">umn</span>s'
        },
        init: function(j) {
            var f = a(j),
                h = f.attr(b.attributes.excludeMode),
                g = f.prev(".tablesaw-bar"),
                i = "",
                e = a("<div>").addClass(b.classes.main + " " + b.classes.toolbar).html(function() {
                    var m = ["<label>" + b.i18n.columns + ":"],
                        l = f.attr("data-mode"),
                        n;
                    m.push('<span class="btn btn-small">&#160;<select>');
                    for (var o = 0, p = b.modes.length; o < p; o++) {
                        if (h && h.toLowerCase() === b.modes[o]) {
                            continue
                        }
                        n = l === b.modes[o];
                        if (n) {
                            i = b.modes[o]
                        }
                        m.push("<option" + (n ? " selected" : "") + ' value="' + b.modes[o] + '">' + b.i18n.modes[o] + "</option>")
                    }
                    m.push("</select></span></label>");
                    return m.join("")
                });
            var d = g.find(".tablesaw-advance").eq(0);
            if (d.length) {
                e.insertBefore(d)
            } else {
                e.appendTo(g)
            }
            e.find(".btn").tablesawbtn();
            e.find("select").bind("change", b.onModeChange)
        },
        onModeChange: function() {
            var e = a(this),
                d = e.closest("." + b.classes.main),
                f = e.closest(".tablesaw-bar").nextUntil(f).eq(0),
                g = e.val();
            d.remove();
            f.data("table").destroy();
            f.attr("data-mode", g);
            f.table()
        }
    };
    a(c.document).on("tablesawcreate", function(d, f) {
        if (f.$table.is(b.selectors.init)) {
            b.init(f.table)
        }
    })
})(this, jQuery);
/*
 * Ladda for jQuery
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2014 Hakim El Hattab, http://hakim.se
 */
(function(c, a) {
    if (a === undefined) {
        return console.error("jQuery required for Ladda.jQuery")
    }
    var b = [];
    a = a.extend(a, {
        ladda: function(d) {
            if (d === "stopAll") {
                c.stopAll()
            }
        }
    });
    a.fn = a.extend(a.fn, {
        ladda: function(d) {
            var e = b.slice.call(arguments, 1);
            if (d === "bind") {
                e.unshift(a(this).selector);
                c.bind.apply(c, e)
            } else {
                a(this).each(function() {
                    var f = a(this),
                        g;
                    if (d === undefined) {
                        f.data("ladda", c.create(this))
                    } else {
                        g = f.data("ladda");
                        g[d].apply(g, e)
                    }
                })
            }
            return this
        }
    })
}(this.Ladda, this.jQuery));
/*
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function() {
    var O = this,
        K = O.Chart;
    var j = function(Y) {
        var W = this;
        this.canvas = Y.canvas;
        this.ctx = Y;
        var X = function(ac, ab) {
            if (ac["offset" + ab]) {
                return ac["offset" + ab]
            } else {
                return document.defaultView.getComputedStyle(ac).getPropertyValue(ab)
            }
        };
        var aa = this.width = X(Y.canvas, "Width");
        var Z = this.height = X(Y.canvas, "Height");
        Y.canvas.width = aa;
        Y.canvas.height = Z;
        var aa = this.width = Y.canvas.width;
        var Z = this.height = Y.canvas.height;
        this.aspectRatio = this.width / this.height;
        B.retinaScale(this);
        return this
    };
    j.defaults = {
        global: {
            animation: true,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: true,
            scaleOverride: false,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: true,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: true,
            scaleBeginAtZero: false,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: false,
            maintainAspectRatio: true,
            showTooltips: true,
            customTooltips: false,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function() {},
            onAnimationComplete: function() {}
        }
    };
    j.types = {};
    var B = j.helpers = {};
    var n = B.each = function(aa, X, ab) {
            var W = Array.prototype.slice.call(arguments, 3);
            if (aa) {
                if (aa.length === +aa.length) {
                    var Y;
                    for (Y = 0; Y < aa.length; Y++) {
                        X.apply(ab, [aa[Y], Y].concat(W))
                    }
                } else {
                    for (var Z in aa) {
                        X.apply(ab, [aa[Z], Z].concat(W))
                    }
                }
            }
        },
        l = B.clone = function(W) {
            var X = {};
            n(W, function(Z, Y) {
                if (W.hasOwnProperty(Y)) {
                    X[Y] = Z
                }
            });
            return X
        },
        p = B.extend = function(W) {
            n(Array.prototype.slice.call(arguments, 1), function(X) {
                n(X, function(Z, Y) {
                    if (X.hasOwnProperty(Y)) {
                        W[Y] = Z
                    }
                })
            });
            return W
        },
        H = B.merge = function(X, Y) {
            var W = Array.prototype.slice.call(arguments, 0);
            W.unshift({});
            return p.apply(null, W)
        },
        C = B.indexOf = function(W, Y) {
            if (Array.prototype.indexOf) {
                return W.indexOf(Y)
            } else {
                for (var X = 0; X < W.length; X++) {
                    if (W[X] === Y) {
                        return X
                    }
                }
                return -1
            }
        },
        V = B.where = function(W, X) {
            var Y = [];
            B.each(W, function(Z) {
                if (X(Z)) {
                    Y.push(Z)
                }
            });
            return Y
        },
        q = B.findNextWhere = function(W, Y, aa) {
            if (!aa) {
                aa = -1
            }
            for (var Z = aa + 1; Z < W.length; Z++) {
                var X = W[Z];
                if (Y(X)) {
                    return X
                }
            }
        },
        r = B.findPreviousWhere = function(W, Y, aa) {
            if (!aa) {
                aa = W.length
            }
            for (var Z = aa - 1; Z >= 0; Z--) {
                var X = W[Z];
                if (Y(X)) {
                    return X
                }
            }
        },
        D = B.inherits = function(X) {
            var Y = this;
            var W = (X && X.hasOwnProperty("constructor")) ? X.constructor : function() {
                return Y.apply(this, arguments)
            };
            var Z = function() {
                this.constructor = W
            };
            Z.prototype = Y.prototype;
            W.prototype = new Z();
            W.extend = D;
            if (X) {
                p(W.prototype, X)
            }
            W.__super__ = Y.prototype;
            return W
        },
        J = B.noop = function() {},
        S = B.uid = (function() {
            var W = 0;
            return function() {
                return "chart-" + W++
            }
        })(),
        U = B.warn = function(W) {
            if (window.console && typeof window.console.warn == "function") {
                console.warn(W)
            }
        },
        c = B.amd = (typeof define == "function" && define.amd),
        E = B.isNumber = function(W) {
            return !isNaN(parseFloat(W)) && isFinite(W)
        },
        G = B.max = function(W) {
            return Math.max.apply(Math, W)
        },
        I = B.min = function(W) {
            return Math.min.apply(Math, W)
        },
        i = B.cap = function(Y, W, X) {
            if (E(W)) {
                if (Y > W) {
                    return W
                }
            } else {
                if (E(X)) {
                    if (Y < X) {
                        return X
                    }
                }
            }
            return Y
        },
        w = B.getDecimalPlaces = function(W) {
            if (W % 1 !== 0 && E(W)) {
                return W.toString().split(".")[1].length
            } else {
                return 0
            }
        },
        R = B.radians = function(W) {
            return W * (Math.PI / 180)
        },
        u = B.getAngleFromPoint = function(Y, X) {
            var Z = X.x - Y.x,
                aa = X.y - Y.y,
                ab = Math.sqrt(Z * Z + aa * aa);
            var W = Math.PI * 2 + Math.atan2(aa, Z);
            if (Z < 0 && aa < 0) {
                W += Math.PI * 2
            }
            return {
                angle: W,
                distance: ab
            }
        },
        b = B.aliasPixel = function(W) {
            return (W % 2 === 0) ? 0 : 0.5
        },
        P = B.splineCurve = function(ab, ac, W, ad) {
            var X = Math.sqrt(Math.pow(ac.x - ab.x, 2) + Math.pow(ac.y - ab.y, 2)),
                Y = Math.sqrt(Math.pow(W.x - ac.x, 2) + Math.pow(W.y - ac.y, 2)),
                Z = ad * X / (X + Y),
                aa = ad * Y / (X + Y);
            return {
                inner: {
                    x: ac.x - Z * (W.x - ab.x),
                    y: ac.y - Z * (W.y - ab.y)
                },
                outer: {
                    x: ac.x + aa * (W.x - ab.x),
                    y: ac.y + aa * (W.y - ab.y)
                }
            }
        },
        f = B.calculateOrderOfMagnitude = function(W) {
            return Math.floor(Math.log(W) / Math.LN10)
        },
        g = B.calculateScaleRange = function(am, W, ak, ai, aa) {
            var ad = 2,
                ab = Math.floor(W / (ak * 1.5)),
                ah = (ad >= ab);
            var ac = G(am),
                ae = I(am);
            if (ac === ae) {
                ac += 0.5;
                if (ae >= 0.5 && !ai) {
                    ae -= 0.5
                } else {
                    ac += 0.5
                }
            }
            var al = Math.abs(ac - ae),
                ag = f(al),
                X = Math.ceil(ac / (1 * Math.pow(10, ag))) * Math.pow(10, ag),
                Y = (ai) ? 0 : Math.floor(ae / (1 * Math.pow(10, ag))) * Math.pow(10, ag),
                Z = X - Y,
                aj = Math.pow(10, ag),
                af = Math.round(Z / aj);
            while ((af > ab || (af * 2) < ab) && !ah) {
                if (af > ab) {
                    aj *= 2;
                    af = Math.round(Z / aj);
                    if (af % 1 !== 0) {
                        ah = true
                    }
                } else {
                    if (aa && ag >= 0) {
                        if (aj / 2 % 1 === 0) {
                            aj /= 2;
                            af = Math.round(Z / aj)
                        } else {
                            break
                        }
                    } else {
                        aj /= 2;
                        af = Math.round(Z / aj)
                    }
                }
            }
            if (ah) {
                af = ad;
                aj = Z / af
            }
            return {
                steps: af,
                stepValue: aj,
                min: Y,
                max: Y + (af * aj)
            }
        },
        Q = B.template = function(X, Z) {
            if (X instanceof Function) {
                return X(Z)
            }
            var W = {};

            function Y(ac, aa) {
                var ab = !/\W/.test(ac) ? W[ac] = W[ac] : new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + ac.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
                return aa ? ab(aa) : ab
            }
            return Y(X, Z)
        },
        t = B.generateLabels = function(aa, Y, W, Z) {
            var X = new Array(Y);
            if (labelTemplateString) {
                n(X, function(ac, ab) {
                    X[ab] = Q(aa, {
                        value: (W + (Z * (ab + 1)))
                    })
                })
            }
            return X
        },
        o = B.easingEffects = {
            linear: function(W) {
                return W
            },
            easeInQuad: function(W) {
                return W * W
            },
            easeOutQuad: function(W) {
                return -1 * W * (W - 2)
            },
            easeInOutQuad: function(W) {
                if ((W /= 1 / 2) < 1) {
                    return 1 / 2 * W * W
                }
                return -1 / 2 * ((--W) * (W - 2) - 1)
            },
            easeInCubic: function(W) {
                return W * W * W
            },
            easeOutCubic: function(W) {
                return 1 * ((W = W / 1 - 1) * W * W + 1)
            },
            easeInOutCubic: function(W) {
                if ((W /= 1 / 2) < 1) {
                    return 1 / 2 * W * W * W
                }
                return 1 / 2 * ((W -= 2) * W * W + 2)
            },
            easeInQuart: function(W) {
                return W * W * W * W
            },
            easeOutQuart: function(W) {
                return -1 * ((W = W / 1 - 1) * W * W * W - 1)
            },
            easeInOutQuart: function(W) {
                if ((W /= 1 / 2) < 1) {
                    return 1 / 2 * W * W * W * W
                }
                return -1 / 2 * ((W -= 2) * W * W * W - 2)
            },
            easeInQuint: function(W) {
                return 1 * (W /= 1) * W * W * W * W
            },
            easeOutQuint: function(W) {
                return 1 * ((W = W / 1 - 1) * W * W * W * W + 1)
            },
            easeInOutQuint: function(W) {
                if ((W /= 1 / 2) < 1) {
                    return 1 / 2 * W * W * W * W * W
                }
                return 1 / 2 * ((W -= 2) * W * W * W * W + 2)
            },
            easeInSine: function(W) {
                return -1 * Math.cos(W / 1 * (Math.PI / 2)) + 1
            },
            easeOutSine: function(W) {
                return 1 * Math.sin(W / 1 * (Math.PI / 2))
            },
            easeInOutSine: function(W) {
                return -1 / 2 * (Math.cos(Math.PI * W / 1) - 1)
            },
            easeInExpo: function(W) {
                return (W === 0) ? 1 : 1 * Math.pow(2, 10 * (W / 1 - 1))
            },
            easeOutExpo: function(W) {
                return (W === 1) ? 1 : 1 * (-Math.pow(2, -10 * W / 1) + 1)
            },
            easeInOutExpo: function(W) {
                if (W === 0) {
                    return 0
                }
                if (W === 1) {
                    return 1
                }
                if ((W /= 1 / 2) < 1) {
                    return 1 / 2 * Math.pow(2, 10 * (W - 1))
                }
                return 1 / 2 * (-Math.pow(2, -10 * --W) + 2)
            },
            easeInCirc: function(W) {
                if (W >= 1) {
                    return W
                }
                return -1 * (Math.sqrt(1 - (W /= 1) * W) - 1)
            },
            easeOutCirc: function(W) {
                return 1 * Math.sqrt(1 - (W = W / 1 - 1) * W)
            },
            easeInOutCirc: function(W) {
                if ((W /= 1 / 2) < 1) {
                    return -1 / 2 * (Math.sqrt(1 - W * W) - 1)
                }
                return 1 / 2 * (Math.sqrt(1 - (W -= 2) * W) + 1)
            },
            easeInElastic: function(Z) {
                var Y = 1.70158;
                var X = 0;
                var W = 1;
                if (Z === 0) {
                    return 0
                }
                if ((Z /= 1) == 1) {
                    return 1
                }
                if (!X) {
                    X = 1 * 0.3
                }
                if (W < Math.abs(1)) {
                    W = 1;
                    Y = X / 4
                } else {
                    Y = X / (2 * Math.PI) * Math.asin(1 / W)
                }
                return -(W * Math.pow(2, 10 * (Z -= 1)) * Math.sin((Z * 1 - Y) * (2 * Math.PI) / X))
            },
            easeOutElastic: function(Z) {
                var Y = 1.70158;
                var X = 0;
                var W = 1;
                if (Z === 0) {
                    return 0
                }
                if ((Z /= 1) == 1) {
                    return 1
                }
                if (!X) {
                    X = 1 * 0.3
                }
                if (W < Math.abs(1)) {
                    W = 1;
                    Y = X / 4
                } else {
                    Y = X / (2 * Math.PI) * Math.asin(1 / W)
                }
                return W * Math.pow(2, -10 * Z) * Math.sin((Z * 1 - Y) * (2 * Math.PI) / X) + 1
            },
            easeInOutElastic: function(Z) {
                var Y = 1.70158;
                var X = 0;
                var W = 1;
                if (Z === 0) {
                    return 0
                }
                if ((Z /= 1 / 2) == 2) {
                    return 1
                }
                if (!X) {
                    X = 1 * (0.3 * 1.5)
                }
                if (W < Math.abs(1)) {
                    W = 1;
                    Y = X / 4
                } else {
                    Y = X / (2 * Math.PI) * Math.asin(1 / W)
                }
                if (Z < 1) {
                    return -0.5 * (W * Math.pow(2, 10 * (Z -= 1)) * Math.sin((Z * 1 - Y) * (2 * Math.PI) / X))
                }
                return W * Math.pow(2, -10 * (Z -= 1)) * Math.sin((Z * 1 - Y) * (2 * Math.PI) / X) * 0.5 + 1
            },
            easeInBack: function(X) {
                var W = 1.70158;
                return 1 * (X /= 1) * X * ((W + 1) * X - W)
            },
            easeOutBack: function(X) {
                var W = 1.70158;
                return 1 * ((X = X / 1 - 1) * X * ((W + 1) * X + W) + 1)
            },
            easeInOutBack: function(X) {
                var W = 1.70158;
                if ((X /= 1 / 2) < 1) {
                    return 1 / 2 * (X * X * (((W *= (1.525)) + 1) * X - W))
                }
                return 1 / 2 * ((X -= 2) * X * (((W *= (1.525)) + 1) * X + W) + 2)
            },
            easeInBounce: function(W) {
                return 1 - o.easeOutBounce(1 - W)
            },
            easeOutBounce: function(W) {
                if ((W /= 1) < (1 / 2.75)) {
                    return 1 * (7.5625 * W * W)
                } else {
                    if (W < (2 / 2.75)) {
                        return 1 * (7.5625 * (W -= (1.5 / 2.75)) * W + 0.75)
                    } else {
                        if (W < (2.5 / 2.75)) {
                            return 1 * (7.5625 * (W -= (2.25 / 2.75)) * W + 0.9375)
                        } else {
                            return 1 * (7.5625 * (W -= (2.625 / 2.75)) * W + 0.984375)
                        }
                    }
                }
            },
            easeInOutBounce: function(W) {
                if (W < 1 / 2) {
                    return o.easeInBounce(W * 2) * 0.5
                }
                return o.easeOutBounce(W * 2 - 1) * 0.5 + 1 * 0.5
            }
        },
        M = B.requestAnimFrame = (function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(W) {
                return window.setTimeout(W, 1000 / 60)
            }
        })(),
        h = B.cancelAnimFrame = (function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(W) {
                return window.clearTimeout(W, 1000 / 60)
            }
        })(),
        d = B.animationLoop = function(X, ae, ab, ad, ac, Y) {
            var Z = 0,
                aa = o[ab] || o.linear;
            var W = function() {
                Z++;
                var ag = Z / ae;
                var af = aa(ag);
                X.call(Y, af, ag, Z);
                ad.call(Y, af, ag);
                if (Z < ae) {
                    Y.animationFrame = M(W)
                } else {
                    ac.apply(Y)
                }
            };
            M(W)
        },
        A = B.getRelativePosition = function(Z) {
            var aa, ab;
            var Y = Z.originalEvent || Z,
                X = Z.currentTarget || Z.srcElement,
                W = X.getBoundingClientRect();
            if (Y.touches) {
                aa = Y.touches[0].clientX - W.left;
                ab = Y.touches[0].clientY - W.top
            } else {
                aa = Y.clientX - W.left;
                ab = Y.clientY - W.top
            }
            return {
                x: aa,
                y: ab
            }
        },
        a = B.addEvent = function(Y, W, X) {
            if (Y.addEventListener) {
                Y.addEventListener(W, X)
            } else {
                if (Y.attachEvent) {
                    Y.attachEvent("on" + W, X)
                } else {
                    Y["on" + W] = X
                }
            }
        },
        L = B.removeEvent = function(Y, W, X) {
            if (Y.removeEventListener) {
                Y.removeEventListener(W, X, false)
            } else {
                if (Y.detachEvent) {
                    Y.detachEvent("on" + W, X)
                } else {
                    Y["on" + W] = J
                }
            }
        },
        e = B.bindEvents = function(X, W, Y) {
            if (!X.events) {
                X.events = {}
            }
            n(W, function(Z) {
                X.events[Z] = function() {
                    Y.apply(X, arguments)
                };
                a(X.chart.canvas, Z, X.events[Z])
            })
        },
        T = B.unbindEvents = function(X, W) {
            n(W, function(Z, Y) {
                L(X.chart.canvas, Y, Z)
            })
        },
        z = B.getMaximumWidth = function(X) {
            var W = X.parentNode;
            return W.clientWidth
        },
        x = B.getMaximumHeight = function(X) {
            var W = X.parentNode;
            return W.clientHeight
        },
        y = B.getMaximumSize = B.getMaximumWidth,
        N = B.retinaScale = function(W) {
            var X = W.ctx,
                Z = W.canvas.width,
                Y = W.canvas.height;
            if (window.devicePixelRatio) {
                X.canvas.style.width = Z + "px";
                X.canvas.style.height = Y + "px";
                X.canvas.height = Y * window.devicePixelRatio;
                X.canvas.width = Z * window.devicePixelRatio;
                X.scale(window.devicePixelRatio, window.devicePixelRatio)
            }
        },
        k = B.clear = function(W) {
            W.ctx.clearRect(0, 0, W.width, W.height)
        },
        s = B.fontString = function(Y, X, W) {
            return X + " " + Y + "px " + W
        },
        F = B.longestText = function(X, Y, W) {
            X.font = Y;
            var Z = 0;
            n(W, function(aa) {
                var ab = X.measureText(aa).width;
                Z = (ab > Z) ? ab : Z
            });
            return Z
        },
        m = B.drawRoundedRectangle = function(W, aa, ab, Z, X, Y) {
            W.beginPath();
            W.moveTo(aa + Y, ab);
            W.lineTo(aa + Z - Y, ab);
            W.quadraticCurveTo(aa + Z, ab, aa + Z, ab + Y);
            W.lineTo(aa + Z, ab + X - Y);
            W.quadraticCurveTo(aa + Z, ab + X, aa + Z - Y, ab + X);
            W.lineTo(aa + Y, ab + X);
            W.quadraticCurveTo(aa, ab + X, aa, ab + X - Y);
            W.lineTo(aa, ab + Y);
            W.quadraticCurveTo(aa, ab, aa + Y, ab);
            W.closePath()
        };
    j.instances = {};
    j.Type = function(X, Y, W) {
        this.options = Y;
        this.chart = W;
        this.id = S();
        j.instances[this.id] = this;
        if (Y.responsive) {
            this.resize()
        }
        this.initialize.call(this, X)
    };
    p(j.Type.prototype, {
        initialize: function() {
            return this
        },
        clear: function() {
            k(this.chart);
            return this
        },
        stop: function() {
            h(this.animationFrame);
            return this
        },
        resize: function(W) {
            this.stop();
            var X = this.chart.canvas,
                Z = z(this.chart.canvas),
                Y = this.options.maintainAspectRatio ? Z / this.chart.aspectRatio : x(this.chart.canvas);
            X.width = this.chart.width = Z;
            X.height = this.chart.height = Y;
            N(this.chart);
            if (typeof W === "function") {
                W.apply(this, Array.prototype.slice.call(arguments, 1))
            }
            return this
        },
        reflow: J,
        render: function(W) {
            if (W) {
                this.reflow()
            }
            if (this.options.animation && !W) {
                B.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this)
            } else {
                this.draw();
                this.options.onAnimationComplete.call(this)
            }
            return this
        },
        generateLegend: function() {
            return Q(this.options.legendTemplate, this)
        },
        destroy: function() {
            this.clear();
            T(this, this.events);
            var W = this.chart.canvas;
            W.width = this.chart.width;
            W.height = this.chart.height;
            if (W.style.removeProperty) {
                W.style.removeProperty("width");
                W.style.removeProperty("height")
            } else {
                W.style.removeAttribute("width");
                W.style.removeAttribute("height")
            }
            delete j.instances[this.id]
        },
        showTooltip: function(W, Z) {
            if (typeof this.activeElements === "undefined") {
                this.activeElements = []
            }
            var ab = (function(ag) {
                var af = false;
                if (ag.length !== this.activeElements.length) {
                    af = true;
                    return af
                }
                n(ag, function(ah, ai) {
                    if (ah !== this.activeElements[ai]) {
                        af = true
                    }
                }, this);
                return af
            }).call(this, W);
            if (!ab && !Z) {
                return
            } else {
                this.activeElements = W
            }
            this.draw();
            if (this.options.customTooltips) {
                this.options.customTooltips(false)
            }
            if (W.length > 0) {
                if (this.datasets && this.datasets.length > 1) {
                    var X, Y;
                    for (var aa = this.datasets.length - 1; aa >= 0; aa--) {
                        X = this.datasets[aa].points || this.datasets[aa].bars || this.datasets[aa].segments;
                        Y = C(X, W[0]);
                        if (Y !== -1) {
                            break
                        }
                    }
                    var ae = [],
                        ad = [],
                        ac = (function(ah) {
                            var ag = [],
                                af, ak = [],
                                an = [],
                                ai, al, aj, am;
                            B.each(this.datasets, function(ao) {
                                af = ao.points || ao.bars || ao.segments;
                                if (af[Y] && af[Y].hasValue()) {
                                    ag.push(af[Y])
                                }
                            });
                            B.each(ag, function(ao) {
                                ak.push(ao.x);
                                an.push(ao.y);
                                ae.push(B.template(this.options.multiTooltipTemplate, ao));
                                ad.push({
                                    fill: ao._saved.fillColor || ao.fillColor,
                                    stroke: ao._saved.strokeColor || ao.strokeColor
                                })
                            }, this);
                            am = I(an);
                            al = G(an);
                            aj = I(ak);
                            ai = G(ak);
                            return {
                                x: (aj > this.chart.width / 2) ? aj : ai,
                                y: (am + al) / 2
                            }
                        }).call(this, Y);
                    new j.MultiTooltip({
                        x: ac.x,
                        y: ac.y,
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        xOffset: this.options.tooltipXOffset,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        titleTextColor: this.options.tooltipTitleFontColor,
                        titleFontFamily: this.options.tooltipTitleFontFamily,
                        titleFontStyle: this.options.tooltipTitleFontStyle,
                        titleFontSize: this.options.tooltipTitleFontSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        labels: ae,
                        legendColors: ad,
                        legendColorBackground: this.options.multiTooltipKeyBackground,
                        title: W[0].label,
                        chart: this.chart,
                        ctx: this.chart.ctx,
                        custom: this.options.customTooltips
                    }).draw()
                } else {
                    n(W, function(af) {
                        var ag = af.tooltipPosition();
                        new j.Tooltip({
                            x: Math.round(ag.x),
                            y: Math.round(ag.y),
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            caretHeight: this.options.tooltipCaretSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            text: Q(this.options.tooltipTemplate, af),
                            chart: this.chart,
                            custom: this.options.customTooltips
                        }).draw()
                    }, this)
                }
            }
            return this
        },
        toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    });
    j.Type.extend = function(Z) {
        var aa = this;
        var Y = function() {
            return aa.apply(this, arguments)
        };
        Y.prototype = l(aa.prototype);
        p(Y.prototype, Z);
        Y.extend = j.Type.extend;
        if (Z.name || aa.prototype.name) {
            var X = Z.name || aa.prototype.name;
            var W = (j.defaults[aa.prototype.name]) ? l(j.defaults[aa.prototype.name]) : {};
            j.defaults[X] = p(W, Z.defaults);
            j.types[X] = Y;
            j.prototype[X] = function(ac, ad) {
                var ab = H(j.defaults.global, j.defaults[X], ad || {});
                return new Y(ac, ab, this)
            }
        } else {
            U("Name not provided for this chart, so it hasn't been registered")
        }
        return aa
    };
    j.Element = function(W) {
        p(this, W);
        this.initialize.apply(this, arguments);
        this.save()
    };
    p(j.Element.prototype, {
        initialize: function() {},
        restore: function(W) {
            if (!W) {
                p(this, this._saved)
            } else {
                n(W, function(X) {
                    this[X] = this._saved[X]
                }, this)
            }
            return this
        },
        save: function() {
            this._saved = l(this);
            delete this._saved._saved;
            return this
        },
        update: function(W) {
            n(W, function(Y, X) {
                this._saved[X] = this[X];
                this[X] = Y
            }, this);
            return this
        },
        transition: function(X, W) {
            n(X, function(Z, Y) {
                this[Y] = ((Z - this._saved[Y]) * W) + this._saved[Y]
            }, this);
            return this
        },
        tooltipPosition: function() {
            return {
                x: this.x,
                y: this.y
            }
        },
        hasValue: function() {
            return E(this.value)
        }
    });
    j.Element.extend = D;
    j.Point = j.Element.extend({
        display: true,
        inRange: function(W, X) {
            var Y = this.hitDetectionRadius + this.radius;
            return ((Math.pow(W - this.x, 2) + Math.pow(X - this.y, 2)) < Math.pow(Y, 2))
        },
        draw: function() {
            if (this.display) {
                var W = this.ctx;
                W.beginPath();
                W.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                W.closePath();
                W.strokeStyle = this.strokeColor;
                W.lineWidth = this.strokeWidth;
                W.fillStyle = this.fillColor;
                W.fill();
                W.stroke()
            }
        }
    });
    j.Arc = j.Element.extend({
        inRange: function(X, Y) {
            var Z = B.getAngleFromPoint(this, {
                x: X,
                y: Y
            });
            var W = (Z.angle >= this.startAngle && Z.angle <= this.endAngle),
                aa = (Z.distance >= this.innerRadius && Z.distance <= this.outerRadius);
            return (W && aa)
        },
        tooltipPosition: function() {
            var W = this.startAngle + ((this.endAngle - this.startAngle) / 2),
                X = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + (Math.cos(W) * X),
                y: this.y + (Math.sin(W) * X)
            }
        },
        draw: function(W) {
            var Y = W || 1;
            var X = this.ctx;
            X.beginPath();
            X.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);
            X.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);
            X.closePath();
            X.strokeStyle = this.strokeColor;
            X.lineWidth = this.strokeWidth;
            X.fillStyle = this.fillColor;
            X.fill();
            X.lineJoin = "bevel";
            if (this.showStroke) {
                X.stroke()
            }
        }
    });
    j.Rectangle = j.Element.extend({
        draw: function() {
            var W = this.ctx,
                Y = this.width / 2,
                Z = this.x - Y,
                aa = this.x + Y,
                ab = this.base - (this.base - this.y),
                X = this.strokeWidth / 2;
            if (this.showStroke) {
                Z += X;
                aa -= X;
                ab += X
            }
            W.beginPath();
            W.fillStyle = this.fillColor;
            W.strokeStyle = this.strokeColor;
            W.lineWidth = this.strokeWidth;
            W.moveTo(Z, this.base);
            W.lineTo(Z, ab);
            W.lineTo(aa, ab);
            W.lineTo(aa, this.base);
            W.fill();
            if (this.showStroke) {
                W.stroke()
            }
        },
        height: function() {
            return this.base - this.y
        },
        inRange: function(W, X) {
            return (W >= this.x - this.width / 2 && W <= this.x + this.width / 2) && (X >= this.y && X <= this.base)
        }
    });
    j.Tooltip = j.Element.extend({
        draw: function() {
            var X = this.chart.ctx;
            X.font = s(this.fontSize, this.fontStyle, this.fontFamily);
            this.xAlign = "center";
            this.yAlign = "above";
            var W = this.caretPadding = 2;
            var aa = X.measureText(this.text).width + 2 * this.xPadding,
                Z = this.fontSize + 2 * this.yPadding,
                Y = Z + this.caretHeight + W;
            if (this.x + aa / 2 > this.chart.width) {
                this.xAlign = "left"
            } else {
                if (this.x - aa / 2 < 0) {
                    this.xAlign = "right"
                }
            }
            if (this.y - Y < 0) {
                this.yAlign = "below"
            }
            var ab = this.x - aa / 2,
                ac = this.y - Y;
            X.fillStyle = this.fillColor;
            if (this.custom) {
                this.custom(this)
            } else {
                switch (this.yAlign) {
                    case "above":
                        X.beginPath();
                        X.moveTo(this.x, this.y - W);
                        X.lineTo(this.x + this.caretHeight, this.y - (W + this.caretHeight));
                        X.lineTo(this.x - this.caretHeight, this.y - (W + this.caretHeight));
                        X.closePath();
                        X.fill();
                        break;
                    case "below":
                        ac = this.y + W + this.caretHeight;
                        X.beginPath();
                        X.moveTo(this.x, this.y + W);
                        X.lineTo(this.x + this.caretHeight, this.y + W + this.caretHeight);
                        X.lineTo(this.x - this.caretHeight, this.y + W + this.caretHeight);
                        X.closePath();
                        X.fill();
                        break
                }
                switch (this.xAlign) {
                    case "left":
                        ab = this.x - aa + (this.cornerRadius + this.caretHeight);
                        break;
                    case "right":
                        ab = this.x - (this.cornerRadius + this.caretHeight);
                        break
                }
                m(X, ab, ac, aa, Z, this.cornerRadius);
                X.fill();
                X.fillStyle = this.textColor;
                X.textAlign = "center";
                X.textBaseline = "middle";
                X.fillText(this.text, ab + aa / 2, ac + Z / 2)
            }
        }
    });
    j.MultiTooltip = j.Element.extend({
        initialize: function() {
            this.font = s(this.fontSize, this.fontStyle, this.fontFamily);
            this.titleFont = s(this.titleFontSize, this.titleFontStyle, this.titleFontFamily);
            this.height = (this.labels.length * this.fontSize) + ((this.labels.length - 1) * (this.fontSize / 2)) + (this.yPadding * 2) + this.titleFontSize * 1.5;
            this.ctx.font = this.titleFont;
            var Z = this.ctx.measureText(this.title).width,
                X = F(this.ctx, this.font, this.labels) + this.fontSize + 3,
                Y = G([X, Z]);
            this.width = Y + (this.xPadding * 2);
            var W = this.height / 2;
            if (this.y - W < 0) {
                this.y = W
            } else {
                if (this.y + W > this.chart.height) {
                    this.y = this.chart.height - W
                }
            }
            if (this.x > this.chart.width / 2) {
                this.x -= this.xOffset + this.width
            } else {
                this.x += this.xOffset
            }
        },
        getLineHeight: function(Y) {
            var X = this.y - (this.height / 2) + this.yPadding,
                W = Y - 1;
            if (Y === 0) {
                return X + this.titleFontSize / 2
            } else {
                return X + ((this.fontSize * 1.5 * W) + this.fontSize / 2) + this.titleFontSize * 1.5
            }
        },
        draw: function() {
            if (this.custom) {
                this.custom(this)
            } else {
                m(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var W = this.ctx;
                W.fillStyle = this.fillColor;
                W.fill();
                W.closePath();
                W.textAlign = "left";
                W.textBaseline = "middle";
                W.fillStyle = this.titleTextColor;
                W.font = this.titleFont;
                W.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0));
                W.font = this.font;
                B.each(this.labels, function(Y, X) {
                    W.fillStyle = this.textColor;
                    W.fillText(Y, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(X + 1));
                    W.fillStyle = this.legendColorBackground;
                    W.fillRect(this.x + this.xPadding, this.getLineHeight(X + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
                    W.fillStyle = this.legendColors[X].fill;
                    W.fillRect(this.x + this.xPadding, this.getLineHeight(X + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }
    });
    j.Scale = j.Element.extend({
        initialize: function() {
            this.fit()
        },
        buildYLabels: function() {
            this.yLabels = [];
            var X = w(this.stepValue);
            for (var W = 0; W <= this.steps; W++) {
                this.yLabels.push(Q(this.templateString, {
                    value: (this.min + (W * this.stepValue)).toFixed(X)
                }))
            }
            this.yLabelWidth = (this.display && this.showLabels) ? F(this.ctx, this.font, this.yLabels) : 0
        },
        addXLabel: function(W) {
            this.xLabels.push(W);
            this.valuesCount++;
            this.fit()
        },
        removeXLabel: function() {
            this.xLabels.shift();
            this.valuesCount--;
            this.fit()
        },
        fit: function() {
            this.startPoint = (this.display) ? this.fontSize : 0;
            this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height;
            this.startPoint += this.padding;
            this.endPoint -= this.padding;
            var W = this.endPoint - this.startPoint,
                X;
            this.calculateYRange(W);
            this.buildYLabels();
            this.calculateXLabelRotation();
            while ((W > this.endPoint - this.startPoint)) {
                W = this.endPoint - this.startPoint;
                X = this.yLabelWidth;
                this.calculateYRange(W);
                this.buildYLabels();
                if (X < this.yLabelWidth) {
                    this.calculateXLabelRotation()
                }
            }
        },
        calculateXLabelRotation: function() {
            this.ctx.font = this.font;
            var Z = this.ctx.measureText(this.xLabels[0]).width,
                ab = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,
                X, aa;
            this.xScalePaddingRight = ab / 2 + 3;
            this.xScalePaddingLeft = (Z / 2 > this.yLabelWidth + 10) ? Z / 2 : this.yLabelWidth + 10;
            this.xLabelRotation = 0;
            if (this.display) {
                var ac = F(this.ctx, this.font, this.xLabels),
                    W, Y;
                this.xLabelWidth = ac;
                var ad = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;
                while ((this.xLabelWidth > Math.floor(ad * this.freqXLabel) && this.xLabelRotation === 0) || (this.xLabelWidth > Math.floor(ad * this.freqXLabel) && this.xLabelRotation <= 90 && this.xLabelRotation > 0)) {
                    W = Math.cos(R(this.xLabelRotation));
                    X = W * Z;
                    aa = W * ab;
                    if (X + this.fontSize / 2 > this.yLabelWidth + 8) {
                        this.xScalePaddingLeft = X + this.fontSize / 2
                    }
                    this.xScalePaddingRight = this.fontSize / 2;
                    this.xLabelRotation++;
                    this.xLabelWidth = W * ac
                }
                if (this.xLabelRotation > 0) {
                    this.endPoint -= Math.sin(R(this.xLabelRotation)) * ac + 3
                }
            } else {
                this.xLabelWidth = 0;
                this.xScalePaddingRight = this.padding;
                this.xScalePaddingLeft = this.padding
            }
        },
        calculateYRange: J,
        drawingArea: function() {
            return this.startPoint - this.endPoint
        },
        calculateY: function(X) {
            var W = this.drawingArea() / (this.min - this.max);
            return this.endPoint - (W * (X - this.min))
        },
        calculateX: function(W) {
            var Y = (this.xLabelRotation > 0),
                X = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),
                aa = X / Math.max((this.valuesCount - ((this.offsetGridLines) ? 0 : 1)), 1),
                Z = (aa * W) + this.xScalePaddingLeft;
            if (this.offsetGridLines) {
                Z += (aa / 2)
            }
            return Math.round(Z)
        },
        update: function(W) {
            B.extend(this, W);
            this.fit()
        },
        draw: function() {
            var W = this.ctx,
                Y = (this.endPoint - this.startPoint) / this.steps,
                X = Math.round(this.xScalePaddingLeft);
            if (this.display) {
                W.fillStyle = this.textColor;
                W.font = this.font;
                n(this.yLabels, function(ab, aa) {
                    var ad = this.endPoint - (Y * aa),
                        ac = Math.round(ad),
                        Z = this.showHorizontalLines;
                    W.textAlign = "right";
                    W.textBaseline = "middle";
                    if (this.showLabels) {
                        W.fillText(ab, X - 10, ad)
                    }
                    if (aa === 0 && !Z) {
                        Z = true
                    }
                    if (Z) {
                        W.beginPath()
                    }
                    if (aa > 0) {
                        W.lineWidth = this.gridLineWidth;
                        W.strokeStyle = this.gridLineColor
                    } else {
                        W.lineWidth = this.lineWidth;
                        W.strokeStyle = this.lineColor
                    }
                    ac += B.aliasPixel(W.lineWidth);
                    if (Z) {
                        W.moveTo(X, ac);
                        W.lineTo(this.width, ac);
                        W.stroke();
                        W.closePath()
                    }
                    W.lineWidth = this.lineWidth;
                    W.strokeStyle = this.lineColor;
                    W.beginPath();
                    W.moveTo(X - 5, ac);
                    W.lineTo(X, ac);
                    W.stroke();
                    W.closePath()
                }, this);
                n(this.xLabels, function(ac, aa) {
                    var ae = this.calculateX(aa) + b(this.lineWidth),
                        ad = this.calculateX(aa - (this.offsetGridLines ? 0.5 : 0)) + b(this.lineWidth),
                        ab = (this.xLabelRotation > 0),
                        Z = this.showVerticalLines;
                    if (aa === 0 && !Z) {
                        Z = true
                    }
                    if (Z) {
                        W.beginPath()
                    }
                    if (aa > 0) {
                        W.lineWidth = this.gridLineWidth;
                        W.strokeStyle = this.gridLineColor
                    } else {
                        W.lineWidth = this.lineWidth;
                        W.strokeStyle = this.lineColor
                    }
                    if (Z) {
                        W.moveTo(ad, this.endPoint);
                        W.lineTo(ad, this.startPoint - 3);
                        W.stroke();
                        W.closePath()
                    }
                    W.lineWidth = this.lineWidth;
                    W.strokeStyle = this.lineColor;
                    W.beginPath();
                    W.moveTo(ad, this.endPoint);
                    W.lineTo(ad, this.endPoint + 5);
                    W.stroke();
                    W.closePath();
                    W.save();
                    W.translate(ae, (ab) ? this.endPoint + 12 : this.endPoint + 8);
                    W.rotate(R(this.xLabelRotation) * -1);
                    W.font = this.font;
                    W.textAlign = (ab) ? "right" : "center";
                    W.textBaseline = (ab) ? "middle" : "top";
                    if (aa % this.freqXLabel == 0) {
                        W.fillText(ac, 0, 0)
                    }
                    W.restore()
                }, this)
            }
        }
    });
    j.RadialScale = j.Element.extend({
        initialize: function() {
            this.size = I([this.height, this.width]);
            this.drawingArea = (this.display) ? (this.size / 2) - (this.fontSize / 2 + this.backdropPaddingY) : (this.size / 2)
        },
        calculateCenterOffset: function(X) {
            var W = this.drawingArea / (this.max - this.min);
            return (X - this.min) * W
        },
        update: function() {
            if (!this.lineArc) {
                this.setScaleSize()
            } else {
                this.drawingArea = (this.display) ? (this.size / 2) - (this.fontSize / 2 + this.backdropPaddingY) : (this.size / 2)
            }
            this.buildYLabels()
        },
        buildYLabels: function() {
            this.yLabels = [];
            var X = w(this.stepValue);
            for (var W = 0; W <= this.steps; W++) {
                this.yLabels.push(Q(this.templateString, {
                    value: (this.min + (W * this.stepValue)).toFixed(X)
                }))
            }
        },
        getCircumference: function() {
            return ((Math.PI * 2) / this.valuesCount)
        },
        setScaleSize: function() {
            var ae = I([(this.height / 2 - this.pointLabelFontSize - 5), this.width / 2]),
                ag, ad, aj, ac, Z = this.width,
                ab, aa, W = 0,
                Y, X, ak, al, ai, ah, af;
            this.ctx.font = s(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily);
            for (ad = 0; ad < this.valuesCount; ad++) {
                ag = this.getPointPosition(ad, ae);
                aj = this.ctx.measureText(Q(this.templateString, {
                    value: this.labels[ad]
                })).width + 5;
                if (ad === 0 || ad === this.valuesCount / 2) {
                    ac = aj / 2;
                    if (ag.x + ac > Z) {
                        Z = ag.x + ac;
                        ab = ad
                    }
                    if (ag.x - ac < W) {
                        W = ag.x - ac;
                        Y = ad
                    }
                } else {
                    if (ad < this.valuesCount / 2) {
                        if (ag.x + aj > Z) {
                            Z = ag.x + aj;
                            ab = ad
                        }
                    } else {
                        if (ad > this.valuesCount / 2) {
                            if (ag.x - aj < W) {
                                W = ag.x - aj;
                                Y = ad
                            }
                        }
                    }
                }
            }
            ak = W;
            al = Math.ceil(Z - this.width);
            aa = this.getIndexAngle(ab);
            X = this.getIndexAngle(Y);
            ai = al / Math.sin(aa + Math.PI / 2);
            ah = ak / Math.sin(X + Math.PI / 2);
            ai = (E(ai)) ? ai : 0;
            ah = (E(ah)) ? ah : 0;
            this.drawingArea = ae - (ah + ai) / 2;
            this.setCenterPoint(ah, ai)
        },
        setCenterPoint: function(W, Z) {
            var Y = this.width - Z - this.drawingArea,
                X = W + this.drawingArea;
            this.xCenter = (X + Y) / 2;
            this.yCenter = (this.height / 2)
        },
        getIndexAngle: function(X) {
            var W = (Math.PI * 2) / this.valuesCount;
            return X * W - (Math.PI / 2)
        },
        getPointPosition: function(X, W) {
            var Y = this.getIndexAngle(X);
            return {
                x: (Math.cos(Y) * W) + this.xCenter,
                y: (Math.sin(Y) * W) + this.yCenter
            }
        },
        draw: function() {
            if (this.display) {
                var W = this.ctx;
                n(this.yLabels, function(ah, ag) {
                    if (ag > 0) {
                        var ak = ag * (this.drawingArea / this.steps),
                            al = this.yCenter - ak,
                            aj;
                        if (this.lineWidth > 0) {
                            W.strokeStyle = this.lineColor;
                            W.lineWidth = this.lineWidth;
                            if (this.lineArc) {
                                W.beginPath();
                                W.arc(this.xCenter, this.yCenter, ak, 0, Math.PI * 2);
                                W.closePath();
                                W.stroke()
                            } else {
                                W.beginPath();
                                for (var af = 0; af < this.valuesCount; af++) {
                                    aj = this.getPointPosition(af, this.calculateCenterOffset(this.min + (ag * this.stepValue)));
                                    if (af === 0) {
                                        W.moveTo(aj.x, aj.y)
                                    } else {
                                        W.lineTo(aj.x, aj.y)
                                    }
                                }
                                W.closePath();
                                W.stroke()
                            }
                        }
                        if (this.showLabels) {
                            W.font = s(this.fontSize, this.fontStyle, this.fontFamily);
                            if (this.showLabelBackdrop) {
                                var ai = W.measureText(ah).width;
                                W.fillStyle = this.backdropColor;
                                W.fillRect(this.xCenter - ai / 2 - this.backdropPaddingX, al - this.fontSize / 2 - this.backdropPaddingY, ai + this.backdropPaddingX * 2, this.fontSize + this.backdropPaddingY * 2)
                            }
                            W.textAlign = "center";
                            W.textBaseline = "middle";
                            W.fillStyle = this.fontColor;
                            W.fillText(ah, this.xCenter, al)
                        }
                    }
                }, this);
                if (!this.lineArc) {
                    W.lineWidth = this.angleLineWidth;
                    W.strokeStyle = this.angleLineColor;
                    for (var Z = this.valuesCount - 1; Z >= 0; Z--) {
                        if (this.angleLineWidth > 0) {
                            var ab = this.getPointPosition(Z, this.calculateCenterOffset(this.max));
                            W.beginPath();
                            W.moveTo(this.xCenter, this.yCenter);
                            W.lineTo(ab.x, ab.y);
                            W.stroke();
                            W.closePath()
                        }
                        var ac = this.getPointPosition(Z, this.calculateCenterOffset(this.max) + 5);
                        W.font = s(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily);
                        W.fillStyle = this.pointLabelFontColor;
                        var aa = this.labels.length,
                            Y = this.labels.length / 2,
                            ad = Y / 2,
                            ae = (Z < ad || Z > aa - ad),
                            X = (Z === ad || Z === aa - ad);
                        if (Z === 0) {
                            W.textAlign = "center"
                        } else {
                            if (Z === Y) {
                                W.textAlign = "center"
                            } else {
                                if (Z < Y) {
                                    W.textAlign = "left"
                                } else {
                                    W.textAlign = "right"
                                }
                            }
                        }
                        if (X) {
                            W.textBaseline = "middle"
                        } else {
                            if (ae) {
                                W.textBaseline = "bottom"
                            } else {
                                W.textBaseline = "top"
                            }
                        }
                        W.fillText(this.labels[Z], ac.x, ac.y)
                    }
                }
            }
        }
    });
    B.addEvent(window, "resize", (function() {
        var W;
        return function() {
            clearTimeout(W);
            W = setTimeout(function() {
                n(j.instances, function(X) {
                    if (X.options.responsive) {
                        X.resize(X.render, true)
                    }
                })
            }, 50)
        }
    })());
    if (c) {
        define(function() {
            return j
        })
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = j
        }
    }
    O.Chart = j;
    j.noConflict = function() {
        O.Chart = K;
        return j
    }
}).call(this);
(function() {
    var d = this,
        a = d.Chart,
        c = a.helpers;
    var b = {
        scaleBeginAtZero: true,
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barPercentage: 0.9,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    a.Type.extend({
        name: "Bar",
        defaults: b,
        initialize: function(e) {
            var f = this.options;
            this.ScaleClass = a.Scale.extend({
                offsetGridLines: true,
                calculateBarX: function(i, j, g) {
                    var l = this.calculateBaseWidth(),
                        k = this.calculateX(g) - (l / 2),
                        h = this.calculateBarWidth(i);
                    return k + (h * j) + (j * f.barDatasetSpacing) + h / 2
                },
                calculateBaseWidth: function() {
                    var g = this.calculateX(1) - this.calculateX(0);
                    return Math.min(g - (2 * f.barValueSpacing), g * f.barPercentage)
                },
                calculateBarWidth: function(h) {
                    var g = this.calculateBaseWidth() - ((h - 1) * f.barDatasetSpacing);
                    return (g / h)
                }
            });
            this.datasets = [];
            if (this.options.onStepClick) {
                c.bindEvents(this, ["click"], function(i) {
                    var h = -1;
                    var g = this.getBarsAtEvent(i);
                    if (g.length === 1 && !g[0].clicked) {
                        h = g[0].index
                    }
                    this.options.onStepClick(h)
                })
            }
            if (this.options.showTooltips) {
                c.bindEvents(this, this.options.tooltipEvents, function(h) {
                    var g = (h.type !== "mouseout") ? this.getBarsAtEvent(h) : [];
                    this.eachBars(function(i) {
                        if (!i.clicked) {
                            i.restore(["fillColor", "strokeColor"])
                        }
                    });
                    c.each(g, function(i) {
                        i.fillColor = i.highlightFill;
                        i.strokeColor = i.highlightStroke
                    });
                    this.showTooltip(g)
                })
            }
            this.BarClass = a.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            });
            c.each(e.datasets, function(g, h) {
                var i = {
                    label: g.label || null,
                    fillColor: g.fillColor,
                    strokeColor: g.strokeColor,
                    bars: []
                };
                this.datasets.push(i);
                c.each(g.data, function(j, k) {
                    i.bars.push(new this.BarClass({
                        value: j,
                        label: e.labels[k],
                        datasetLabel: g.label,
                        strokeColor: g.strokeColor,
                        fillColor: g.fillColor,
                        highlightFill: g.highlightFill || g.fillColor,
                        highlightStroke: g.highlightStroke || g.strokeColor,
                        index: k
                    }))
                }, this)
            }, this);
            this.buildScale(e.labels);
            this.BarClass.prototype.base = this.scale.endPoint;
            this.eachBars(function(g, i, h) {
                c.extend(g, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, h, i),
                    y: this.scale.endPoint
                });
                g.save()
            }, this);
            this.render()
        },
        update: function() {
            this.scale.update();
            c.each(this.activeElements, function(e) {
                e.restore(["fillColor", "strokeColor"])
            });
            this.eachBars(function(e) {
                e.save()
            });
            this.render()
        },
        setIndexToSelected: function(e) {
            this.eachBars(function(f, g) {
                f.restore(["fillColor", "strokeColor"]);
                f.clicked = false;
                if (g === e) {
                    f.clicked = true;
                    f.fillColor = f.highlightFill;
                    f.strokeColor = f.highlightStroke
                }
            });
            this.options.animation = false;
            this.render();
            this.options.animation = true
        },
        eachBars: function(e) {
            c.each(this.datasets, function(f, g) {
                c.each(f.bars, e, this, g)
            }, this)
        },
        getBarsAtEvent: function(j) {
            var g = [],
                k = c.getRelativePosition(j),
                i = function(e) {
                    g.push(e.bars[f])
                },
                f;
            for (var h = 0; h < this.datasets.length; h++) {
                for (f = 0; f < this.datasets[h].bars.length; f++) {
                    if (this.datasets[h].bars[f].inRange(k.x, k.y)) {
                        c.each(this.datasets, i);
                        return g
                    }
                }
            }
            return g
        },
        buildScale: function(f) {
            var h = this;
            var e = function() {
                var i = [];
                h.eachBars(function(j) {
                    i.push(j.value)
                });
                return i
            };
            var g = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: f.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(i) {
                    var j = c.calculateScaleRange(e(), i, this.fontSize, this.beginAtZero, this.integersOnly);
                    c.extend(this, j)
                },
                xLabels: f,
                font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
                gridLineColor: (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale,
                freqXLabel: this.options.freqXLabel
            };
            if (this.options.scaleOverride) {
                c.extend(g, {
                    calculateYRange: c.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
                })
            }
            this.scale = new this.ScaleClass(g)
        },
        addData: function(f, e) {
            c.each(f, function(h, g) {
                this.datasets[g].bars.push(new this.BarClass({
                    value: h,
                    label: e,
                    x: this.scale.calculateBarX(this.datasets.length, g, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[g].strokeColor,
                    fillColor: this.datasets[g].fillColor
                }))
            }, this);
            this.scale.addXLabel(e);
            this.update()
        },
        removeData: function() {
            this.scale.removeXLabel();
            c.each(this.datasets, function(e) {
                e.bars.shift()
            }, this);
            this.update()
        },
        reflow: function() {
            c.extend(this.BarClass.prototype, {
                y: this.scale.endPoint,
                base: this.scale.endPoint
            });
            var e = c.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(e)
        },
        draw: function(f) {
            var g = f || 1;
            this.clear();
            var e = this.chart.ctx;
            this.scale.draw(g);
            c.each(this.datasets, function(h, i) {
                c.each(h.bars, function(j, k) {
                    if (j.hasValue()) {
                        j.base = this.scale.endPoint;
                        j.transition({
                            x: this.scale.calculateBarX(this.datasets.length, i, k),
                            y: this.scale.calculateY(j.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, g).draw()
                    }
                }, this)
            }, this)
        }
    })
}).call(this);
(function() {
    var d = this,
        a = d.Chart,
        c = a.helpers;
    var b = {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    a.Type.extend({
        name: "Doughnut",
        defaults: b,
        initialize: function(e) {
            this.segments = [];
            this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2;
            this.SegmentArc = a.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            });
            if (this.options.showTooltips) {
                c.bindEvents(this, this.options.tooltipEvents, function(g) {
                    var f = (g.type !== "mouseout") ? this.getSegmentsAtEvent(g) : [];
                    c.each(this.segments, function(h) {
                        h.restore(["fillColor"])
                    });
                    c.each(f, function(h) {
                        h.fillColor = h.highlightColor
                    });
                    this.showTooltip(f)
                })
            }
            this.calculateTotal(e);
            c.each(e, function(f, g) {
                this.addData(f, g, true)
            }, this);
            this.render()
        },
        getSegmentsAtEvent: function(f) {
            var h = [];
            var g = c.getRelativePosition(f);
            c.each(this.segments, function(e) {
                if (e.inRange(g.x, g.y)) {
                    h.push(e)
                }
            }, this);
            return h
        },
        addData: function(g, e, h) {
            var f = e || this.segments.length;
            this.segments.splice(f, 0, new this.SegmentArc({
                value: g.value,
                outerRadius: (this.options.animateScale) ? 0 : this.outerRadius,
                innerRadius: (this.options.animateScale) ? 0 : (this.outerRadius / 100) * this.options.percentageInnerCutout,
                fillColor: g.color,
                highlightColor: g.highlight || g.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: Math.PI * 1.5,
                circumference: (this.options.animateRotate) ? 0 : this.calculateCircumference(g.value),
                label: g.label
            }));
            if (!h) {
                this.reflow();
                this.update()
            }
        },
        calculateCircumference: function(e) {
            return (Math.PI * 2) * (Math.abs(e) / this.total)
        },
        calculateTotal: function(e) {
            this.total = 0;
            c.each(e, function(f) {
                this.total += Math.abs(f.value)
            }, this)
        },
        update: function() {
            this.calculateTotal(this.segments);
            c.each(this.activeElements, function(e) {
                e.restore(["fillColor"])
            });
            c.each(this.segments, function(e) {
                e.save()
            });
            this.render()
        },
        removeData: function(e) {
            var f = (c.isNumber(e)) ? e : this.segments.length - 1;
            this.segments.splice(f, 1);
            this.reflow();
            this.update()
        },
        reflow: function() {
            c.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            });
            this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2;
            c.each(this.segments, function(e) {
                e.update({
                    outerRadius: this.outerRadius,
                    innerRadius: (this.outerRadius / 100) * this.options.percentageInnerCutout
                })
            }, this)
        },
        draw: function(f) {
            var e = (f) ? f : 1;
            this.clear();
            c.each(this.segments, function(h, g) {
                h.transition({
                    circumference: this.calculateCircumference(h.value),
                    outerRadius: this.outerRadius,
                    innerRadius: (this.outerRadius / 100) * this.options.percentageInnerCutout
                }, e);
                h.endAngle = h.startAngle + h.circumference;
                h.draw();
                if (g === 0) {
                    h.startAngle = Math.PI * 1.5
                }
                if (g < this.segments.length - 1) {
                    this.segments[g + 1].startAngle = h.endAngle
                }
            }, this)
        }
    });
    a.types.Doughnut.extend({
        name: "Pie",
        defaults: c.merge(b, {
            percentageInnerCutout: 0
        })
    })
}).call(this);
(function() {
    var d = this,
        a = d.Chart,
        c = a.helpers;
    var b = {
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
        freqXLabel: 1
    };
    a.Type.extend({
        name: "Line",
        defaults: b,
        initialize: function(e) {
            this.PointClass = a.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function(f) {
                    return (Math.pow(f - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2))
                }
            });
            this.datasets = [];
            if (this.options.showTooltips) {
                c.bindEvents(this, this.options.tooltipEvents, function(g) {
                    var f = (g.type !== "mouseout") ? this.getPointsAtEvent(g) : [];
                    this.eachPoints(function(h) {
                        h.restore(["fillColor", "strokeColor"])
                    });
                    c.each(f, function(h) {
                        h.fillColor = h.highlightFill;
                        h.strokeColor = h.highlightStroke
                    });
                    this.showTooltip(f)
                })
            }
            c.each(e.datasets, function(f) {
                var g = {
                    label: f.label || null,
                    fillColor: f.fillColor,
                    strokeColor: f.strokeColor,
                    pointColor: f.pointColor,
                    pointStrokeColor: f.pointStrokeColor,
                    points: []
                };
                this.datasets.push(g);
                c.each(f.data, function(h, i) {
                    g.points.push(new this.PointClass({
                        value: h,
                        label: e.labels[i],
                        datasetLabel: f.label,
                        strokeColor: f.pointStrokeColor,
                        fillColor: f.pointColor,
                        highlightFill: f.pointHighlightFill || f.pointColor,
                        highlightStroke: f.pointHighlightStroke || f.pointStrokeColor
                    }))
                }, this);
                this.buildScale(e.labels);
                this.eachPoints(function(i, h) {
                    c.extend(i, {
                        x: this.scale.calculateX(h),
                        y: this.scale.endPoint
                    });
                    i.save()
                }, this)
            }, this);
            this.render()
        },
        update: function() {
            this.scale.update();
            c.each(this.activeElements, function(e) {
                e.restore(["fillColor", "strokeColor"])
            });
            this.eachPoints(function(e) {
                e.save()
            });
            this.render()
        },
        eachPoints: function(e) {
            c.each(this.datasets, function(f) {
                c.each(f.points, e, this)
            }, this)
        },
        getPointsAtEvent: function(f) {
            var h = [],
                g = c.getRelativePosition(f);
            c.each(this.datasets, function(e) {
                c.each(e.points, function(i) {
                    if (i.inRange(g.x, g.y)) {
                        h.push(i)
                    }
                })
            }, this);
            return h
        },
        buildScale: function(f) {
            var h = this;
            var e = function() {
                var i = [];
                h.eachPoints(function(j) {
                    i.push(j.value)
                });
                return i
            };
            var g = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: f.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(i) {
                    var j = c.calculateScaleRange(e(), i, this.fontSize, this.beginAtZero, this.integersOnly);
                    c.extend(this, j)
                },
                xLabels: f,
                font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
                gridLineColor: (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale,
                freqXLabel: this.options.freqXLabel
            };
            if (this.options.scaleOverride) {
                c.extend(g, {
                    calculateYRange: c.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
                })
            }
            this.scale = new a.Scale(g)
        },
        addData: function(f, e) {
            c.each(f, function(h, g) {
                this.datasets[g].points.push(new this.PointClass({
                    value: h,
                    label: e,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[g].pointStrokeColor,
                    fillColor: this.datasets[g].pointColor
                }))
            }, this);
            this.scale.addXLabel(e);
            this.update()
        },
        removeData: function() {
            this.scale.removeXLabel();
            c.each(this.datasets, function(e) {
                e.points.shift()
            }, this);
            this.update()
        },
        reflow: function() {
            var e = c.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(e)
        },
        draw: function(f) {
            var g = f || 1;
            this.clear();
            var e = this.chart.ctx;
            var h = function(k) {
                    return k.value !== null
                },
                i = function(m, k, l) {
                    return c.findNextWhere(k, h, l) || m
                },
                j = function(m, k, l) {
                    return c.findPreviousWhere(k, h, l) || m
                };
            this.scale.draw(g);
            c.each(this.datasets, function(k) {
                var l = c.where(k.points, h);
                c.each(k.points, function(n, m) {
                    if (n.hasValue()) {
                        n.transition({
                            y: this.scale.calculateY(n.value),
                            x: this.scale.calculateX(m)
                        }, g)
                    }
                }, this);
                if (this.options.bezierCurve) {
                    c.each(l, function(n, m) {
                        var o = (m > 0 && m < l.length - 1) ? this.options.bezierCurveTension : 0;
                        n.controlPoints = c.splineCurve(j(n, l, m), n, i(n, l, m), o);
                        if (n.controlPoints.outer.y > this.scale.endPoint) {
                            n.controlPoints.outer.y = this.scale.endPoint
                        } else {
                            if (n.controlPoints.outer.y < this.scale.startPoint) {
                                n.controlPoints.outer.y = this.scale.startPoint
                            }
                        }
                        if (n.controlPoints.inner.y > this.scale.endPoint) {
                            n.controlPoints.inner.y = this.scale.endPoint
                        } else {
                            if (n.controlPoints.inner.y < this.scale.startPoint) {
                                n.controlPoints.inner.y = this.scale.startPoint
                            }
                        }
                    }, this)
                }
                e.lineWidth = this.options.datasetStrokeWidth;
                e.strokeStyle = k.strokeColor;
                e.beginPath();
                c.each(l, function(n, m) {
                    if (m === 0) {
                        e.moveTo(n.x, n.y)
                    } else {
                        if (this.options.bezierCurve) {
                            var o = j(n, l, m);
                            e.bezierCurveTo(o.controlPoints.outer.x, o.controlPoints.outer.y, n.controlPoints.inner.x, n.controlPoints.inner.y, n.x, n.y)
                        } else {
                            e.lineTo(n.x, n.y)
                        }
                    }
                }, this);
                e.stroke();
                if (this.options.datasetFill && l.length > 0) {
                    e.lineTo(l[l.length - 1].x, this.scale.endPoint);
                    e.lineTo(l[0].x, this.scale.endPoint);
                    e.fillStyle = k.fillColor;
                    e.closePath();
                    e.fill()
                }
                c.each(l, function(m) {
                    m.draw()
                })
            }, this)
        }
    })
}).call(this);
(function() {
    var d = this,
        a = d.Chart,
        c = a.helpers;
    var b = {
        scaleShowLabelBackdrop: true,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: true,
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        scaleShowLine: true,
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    a.Type.extend({
        name: "PolarArea",
        defaults: b,
        initialize: function(e) {
            this.segments = [];
            this.SegmentArc = a.Arc.extend({
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                ctx: this.chart.ctx,
                innerRadius: 0,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            });
            this.scale = new a.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                lineArc: true,
                width: this.chart.width,
                height: this.chart.height,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                valuesCount: e.length
            });
            this.updateScaleRange(e);
            this.scale.update();
            c.each(e, function(g, f) {
                this.addData(g, f, true)
            }, this);
            if (this.options.showTooltips) {
                c.bindEvents(this, this.options.tooltipEvents, function(g) {
                    var f = (g.type !== "mouseout") ? this.getSegmentsAtEvent(g) : [];
                    c.each(this.segments, function(h) {
                        h.restore(["fillColor"])
                    });
                    c.each(f, function(h) {
                        h.fillColor = h.highlightColor
                    });
                    this.showTooltip(f)
                })
            }
            this.render()
        },
        getSegmentsAtEvent: function(f) {
            var h = [];
            var g = c.getRelativePosition(f);
            c.each(this.segments, function(e) {
                if (e.inRange(g.x, g.y)) {
                    h.push(e)
                }
            }, this);
            return h
        },
        addData: function(g, e, h) {
            var f = e || this.segments.length;
            this.segments.splice(f, 0, new this.SegmentArc({
                fillColor: g.color,
                highlightColor: g.highlight || g.color,
                label: g.label,
                value: g.value,
                outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(g.value),
                circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),
                startAngle: Math.PI * 1.5
            }));
            if (!h) {
                this.reflow();
                this.update()
            }
        },
        removeData: function(e) {
            var f = (c.isNumber(e)) ? e : this.segments.length - 1;
            this.segments.splice(f, 1);
            this.reflow();
            this.update()
        },
        calculateTotal: function(e) {
            this.total = 0;
            c.each(e, function(f) {
                this.total += f.value
            }, this);
            this.scale.valuesCount = this.segments.length
        },
        updateScaleRange: function(e) {
            var g = [];
            c.each(e, function(h) {
                g.push(h.value)
            });
            var f = (this.options.scaleOverride) ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
            } : c.calculateScaleRange(g, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            c.extend(this.scale, f, {
                size: c.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            })
        },
        update: function() {
            this.calculateTotal(this.segments);
            c.each(this.segments, function(e) {
                e.save()
            });
            this.reflow();
            this.render()
        },
        reflow: function() {
            c.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            });
            this.updateScaleRange(this.segments);
            this.scale.update();
            c.extend(this.scale, {
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            });
            c.each(this.segments, function(e) {
                e.update({
                    outerRadius: this.scale.calculateCenterOffset(e.value)
                })
            }, this)
        },
        draw: function(e) {
            var f = e || 1;
            this.clear();
            c.each(this.segments, function(h, g) {
                h.transition({
                    circumference: this.scale.getCircumference(),
                    outerRadius: this.scale.calculateCenterOffset(h.value)
                }, f);
                h.endAngle = h.startAngle + h.circumference;
                if (g === 0) {
                    h.startAngle = Math.PI * 1.5
                }
                if (g < this.segments.length - 1) {
                    this.segments[g + 1].startAngle = h.endAngle
                }
                h.draw()
            }, this);
            this.scale.draw()
        }
    })
}).call(this);
(function() {
    var c = this,
        a = c.Chart,
        b = a.helpers;
    a.Type.extend({
        name: "Radar",
        defaults: {
            scaleShowLine: true,
            angleShowLineOut: true,
            scaleShowLabels: false,
            scaleBeginAtZero: true,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: true,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: true,
            datasetStrokeWidth: 2,
            datasetFill: true,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        },
        initialize: function(d) {
            this.PointClass = a.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            });
            this.datasets = [];
            this.buildScale(d);
            if (this.options.showTooltips) {
                b.bindEvents(this, this.options.tooltipEvents, function(f) {
                    var e = (f.type !== "mouseout") ? this.getPointsAtEvent(f) : [];
                    this.eachPoints(function(g) {
                        g.restore(["fillColor", "strokeColor"])
                    });
                    b.each(e, function(g) {
                        g.fillColor = g.highlightFill;
                        g.strokeColor = g.highlightStroke
                    });
                    this.showTooltip(e)
                })
            }
            b.each(d.datasets, function(e) {
                var f = {
                    label: e.label || null,
                    fillColor: e.fillColor,
                    strokeColor: e.strokeColor,
                    pointColor: e.pointColor,
                    pointStrokeColor: e.pointStrokeColor,
                    points: []
                };
                this.datasets.push(f);
                b.each(e.data, function(g, h) {
                    var i;
                    if (!this.scale.animation) {
                        i = this.scale.getPointPosition(h, this.scale.calculateCenterOffset(g))
                    }
                    f.points.push(new this.PointClass({
                        value: g,
                        label: d.labels[h],
                        datasetLabel: e.label,
                        x: (this.options.animation) ? this.scale.xCenter : i.x,
                        y: (this.options.animation) ? this.scale.yCenter : i.y,
                        strokeColor: e.pointStrokeColor,
                        fillColor: e.pointColor,
                        highlightFill: e.pointHighlightFill || e.pointColor,
                        highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                    }))
                }, this)
            }, this);
            this.render()
        },
        eachPoints: function(d) {
            b.each(this.datasets, function(e) {
                b.each(e.points, d, this)
            }, this)
        },
        getPointsAtEvent: function(f) {
            var h = b.getRelativePosition(f),
                g = b.getAngleFromPoint({
                    x: this.scale.xCenter,
                    y: this.scale.yCenter
                }, h);
            var e = (Math.PI * 2) / this.scale.valuesCount,
                i = Math.round((g.angle - Math.PI * 1.5) / e),
                d = [];
            if (i >= this.scale.valuesCount || i < 0) {
                i = 0
            }
            if (g.distance <= this.scale.drawingArea) {
                b.each(this.datasets, function(j) {
                    d.push(j.points[i])
                })
            }
            return d
        },
        buildScale: function(d) {
            this.scale = new a.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                angleLineColor: this.options.angleLineColor,
                angleLineWidth: (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,
                pointLabelFontColor: this.options.pointLabelFontColor,
                pointLabelFontSize: this.options.pointLabelFontSize,
                pointLabelFontFamily: this.options.pointLabelFontFamily,
                pointLabelFontStyle: this.options.pointLabelFontStyle,
                height: this.chart.height,
                width: this.chart.width,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                labels: d.labels,
                valuesCount: d.datasets[0].data.length
            });
            this.scale.setScaleSize();
            this.updateScaleRange(d.datasets);
            this.scale.buildYLabels()
        },
        updateScaleRange: function(d) {
            var f = (function() {
                var g = [];
                b.each(d, function(h) {
                    if (h.data) {
                        g = g.concat(h.data)
                    } else {
                        b.each(h.points, function(i) {
                            g.push(i.value)
                        })
                    }
                });
                return g
            })();
            var e = (this.options.scaleOverride) ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
            } : b.calculateScaleRange(f, b.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            b.extend(this.scale, e)
        },
        addData: function(e, d) {
            this.scale.valuesCount++;
            b.each(e, function(h, f) {
                var g = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(h));
                this.datasets[f].points.push(new this.PointClass({
                    value: h,
                    label: d,
                    x: g.x,
                    y: g.y,
                    strokeColor: this.datasets[f].pointStrokeColor,
                    fillColor: this.datasets[f].pointColor
                }))
            }, this);
            this.scale.labels.push(d);
            this.reflow();
            this.update()
        },
        removeData: function() {
            this.scale.valuesCount--;
            this.scale.labels.shift();
            b.each(this.datasets, function(d) {
                d.points.shift()
            }, this);
            this.reflow();
            this.update()
        },
        update: function() {
            this.eachPoints(function(d) {
                d.save()
            });
            this.reflow();
            this.render()
        },
        reflow: function() {
            b.extend(this.scale, {
                width: this.chart.width,
                height: this.chart.height,
                size: b.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            });
            this.updateScaleRange(this.datasets);
            this.scale.setScaleSize();
            this.scale.buildYLabels()
        },
        draw: function(e) {
            var f = e || 1,
                d = this.chart.ctx;
            this.clear();
            this.scale.draw();
            b.each(this.datasets, function(g) {
                b.each(g.points, function(i, h) {
                    if (i.hasValue()) {
                        i.transition(this.scale.getPointPosition(h, this.scale.calculateCenterOffset(i.value)), f)
                    }
                }, this);
                d.lineWidth = this.options.datasetStrokeWidth;
                d.strokeStyle = g.strokeColor;
                d.beginPath();
                b.each(g.points, function(i, h) {
                    if (h === 0) {
                        d.moveTo(i.x, i.y)
                    } else {
                        d.lineTo(i.x, i.y)
                    }
                }, this);
                d.closePath();
                d.stroke();
                d.fillStyle = g.fillColor;
                d.fill();
                b.each(g.points, function(h) {
                    if (h.hasValue()) {
                        h.draw()
                    }
                })
            }, this)
        }
    })
}).call(this);
/*
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
(function(c, b, a) {
    if (typeof module != "undefined" && module.exports) {
        module.exports = a()
    } else {
        c[b] = a()
    }
}(this, "verge", function() {
    var l = {},
        k = typeof window != "undefined" && window,
        c = typeof document != "undefined" && document,
        d = c && c.documentElement,
        e = k.matchMedia || k.msMatchMedia,
        f = e ? function(m) {
            return !!e.call(k, m).matches
        } : function() {
            return false
        },
        j = l.viewportW = function() {
            var m = d.clientWidth,
                n = k.innerWidth;
            return m < n ? n : m
        },
        i = l.viewportH = function() {
            var m = d.clientHeight,
                n = k.innerHeight;
            return m < n ? n : m
        };
    l.mq = f;
    l.matchMedia = e ? function() {
        return e.apply(k, arguments)
    } : function() {
        return {}
    };

    function h() {
        return {
            width: j(),
            height: i()
        }
    }
    l.viewport = h;
    l.scrollX = function() {
        return k.pageXOffset || d.scrollLeft
    };
    l.scrollY = function() {
        return k.pageYOffset || d.scrollTop
    };

    function b(m, n) {
        var p = {};
        n = +n || 0;
        p.width = (p.right = m.right + n) - (p.left = m.left - n);
        p.height = (p.bottom = m.bottom + n) - (p.top = m.top - n);
        return p
    }

    function g(n, m) {
        n = n && !n.nodeType ? n[0] : n;
        if (!n || 1 !== n.nodeType) {
            return false
        }
        return b(n.getBoundingClientRect(), m)
    }
    l.rectangle = g;

    function a(n) {
        n = null == n ? h() : 1 === n.nodeType ? g(n) : n;
        var m = n.height,
            p = n.width;
        m = typeof m == "function" ? m.call(n) : m;
        p = typeof p == "function" ? p.call(n) : p;
        return p / m
    }
    l.aspect = a;
    l.inX = function(n, m) {
        var o = g(n, m);
        return !!o && o.right >= 0 && o.left <= j()
    };
    l.inY = function(n, m) {
        var o = g(n, m);
        return !!o && o.bottom >= 0 && o.top <= i()
    };
    l.inViewport = function(n, m) {
        var o = g(n, m);
        return !!o && o.bottom >= 0 && o.right >= 0 && o.top <= i() && o.left <= j()
    };
    return l
}));
Modernizr.addTest("csschecked", function() {
    return Modernizr.testStyles("#modernizr input {margin-left:0px;} #modernizr input:checked {margin-left: 20px;}", function(b) {
        var a = document.createElement("input");
        a.type = "checkbox";
        a.checked = "checked";
        b.appendChild(a);
        return b.lastChild.offsetLeft >= 20
    })
});
(function(a, d, b, c) {
    d.mfapp = d.mfapp || {};
    a(b).ready(function() {
        var e = {
            init: function() {
                this.menus.init();
                this.modals.init();
                this.forms.init();
                this.tooltips.init();
                this.siteCards.init();
                this.sortable.init();
                this.details_window.init();
                this.stickyFooter();
                this.utils.init();
                this.table.init()
            },
            vals: {
                $window: a(d),
                isOldIe: a("html").hasClass("lt-ie9")
            },
            menus: {
                init: function() {
                    this.menuPod();
                    this.main();
                    this.popout();
                    this.closeMenu();
                    this.peripheral()
                },
                menuPod: function() {
                    a(".js-menu").on("click", ".menu-pod__link", function(j) {
                        j.preventDefault();
                        var i = a(this),
                            g = i.closest(".menu-pod__item"),
                            f = i.next(".menu-pod__dropdown"),
                            h = a(".menu-pod__item");
                        h.not(g).removeClass("is-active");
                        if (f.length > 0) {
                            if (g.hasClass("is-active")) {
                                g.removeClass("is-active")
                            } else {
                                g.addClass("is-active")
                            }
                        }
                    })
                },
                main: function() {
                    a(".navicon").on("click", function() {
                        a("html").toggleClass("menu-active")
                    })
                },
                resize: {
                    main: function() {
                        var f = a(".aside");
                        if (e.vals.$window.scrollTop() > 50) {
                            f.removeClass("aside--spacing")
                        } else {
                            f.addClass("aside--spacing")
                        }
                    }
                },
                popout: function() {
                    a(".js-table").on("click", ".js-popout", function(g) {
                        if (!a(g.target).is("input")) {
                            g.preventDefault();
                            var f = (a(this).hasClass("metrics__icon-menu")) ? a(this).closest(".data-controls__meta-item") : a(this);
                            f.toggleClass("is-active")
                        }
                    });
                    a(".js-table").on("mouseleave", ".data-controls__meta-item", function() {
                        var f = a(this);
                        if (f.hasClass("is-active")) {
                            f.removeClass("is-active")
                        }
                    })
                },
                closeMenu: function() {
                    var f = ".menu-pod__item.is-active, .heading-plot.is-active, .metrics__icon-menu.is-active";
                    a(b).on("click touchstart", function(h) {
                        var g = a(f);
                        if (!a(h.target).closest(g).length && h.target.getAttribute("id") != "website-menu-expand") {
                            g.removeClass("is-active")
                        }
                    })
                },
                peripheral: function() {
                    var k;
                    if (e.vals.isOldIe) {
                        k = a(d).height()
                    } else {
                        k = verge.viewportH()
                    }
                    var g = a(".aside__inner").height(),
                        i = a(".head").height(),
                        f = a(".menu-peripheral"),
                        j = f.outerHeight(),
                        h = i + g + j;
                    (h > k) ? f.removeClass("menu-peripheral--fixed"): f.addClass("menu-peripheral--fixed")
                }
            },
            modals: {
                init: function() {
                    this.bind()
                },
                bind: function() {
                    a(".js-modal").magnificPopup({
                        removalDelay: 300,
                        mainClass: "mfp-fade",
                        focus: ".modal--autofocus",
                        callbacks: {
                            close: function() {
                                var h = a.magnificPopup.instance,
                                    g = h.st.el,
                                    f = h.content;
                                if (f.hasClass("modal--reset-on-close")) {
                                    f.find("input,select").val("").trigger("chosen:updated");
                                    f.find(".notification").removeClass("notification--visible");
                                    f.find(".notification--permanent").addClass("notification--visible");
                                    f.find(".error").removeClass("error")
                                }
                                if (a(g).hasClass("js-modal-changeEmail") || a(g).hasClass("js-modal-changePassword")) {
                                    MF.Views.mySettings.modalClosing()
                                }
                                if (a(g).hasClass("js-modal-cancelAccount")) {
                                    MF.Views.account.modalClosing()
                                }
                                if (a(g).hasClass("js-modal-createNewApiKey")) {
                                    MF.Views.apiKey.modalClosing()
                                }
                            }
                        }
                    });
                    a(".js-modal-ajax").magnificPopup({
                        type: "ajax",
                        tLoading: "",
                        focus: ".modal--autofocus",
                        callbacks: {
                            parseAjax: function(f) {},
                            ajaxContentAdded: function() {
                                e.forms.range.ranges();
                                e.forms.range.update();
                                e.forms.select();
                                e.forms.loading();
                                e.tooltips.init();
                                var g = a.magnificPopup.instance,
                                    f = g.st.el;
                                if (a(f).hasClass("js-add-website")) {
                                    MF.Views.addWebsiteModal.init()
                                }
                                if (a(f).hasClass("js-edit-user")) {
                                    MF.Views.userList.initEditUserModal(decodeURIComponent(a(f).attr("href").substring(a(f).attr("href").indexOf("=") + 1)))
                                }
                                if (a(f).hasClass("js-add-user")) {
                                    MF.Views.userList.initEditUserModal()
                                }
                            },
                            close: function() {
                                var h = a.magnificPopup.instance,
                                    g = h.st.el,
                                    f = h.content;
                                if (f.hasClass("modal--reset-on-close")) {
                                    f.find("input,select").val("").trigger("chosen:updated");
                                    f.find(".notification").removeClass("notification--visible");
                                    f.find(".notification--permanent").addClass("notification--visible");
                                    f.find(".error").removeClass("error")
                                }
                                if (a(g).hasClass("js-add-website")) {
                                    MF.Views.addWebsiteModal.goToNewDashboard()
                                }
                            }
                        }
                    });
                    a(".js-modal-media").magnificPopup({
                        type: "iframe",
                        closeBtnInside: true
                    });
                    a("body").on("click", ".js-modal-close", function(f) {
                        f.preventDefault();
                        var g = a.magnificPopup.instance;
                        g.close()
                    })
                }
            },
            forms: {
                init: function() {
                    this.placeholder();
                    this.range.init();
                    this.checked.init();
                    this.select();
                    this.loading()
                },
                placeholder: function() {
                    a("input, textarea").placeholder()
                },
                range: {
                    init: function() {
                        this.ranges();
                        this.update()
                    },
                    ranges: function() {
                        var f = a('input[type="range"]');
                        f.rangeslider({
                            polyfill: false,
                            onSlideStart: function() {
                                console.log("onSlideStart");
                                if (MF.Views.player) {
                                    MF.Views.player.scrubStart()
                                }
                            },
                            onSlide: function(g, h) {
                                if (MF.Views.heatmap && this.$element.attr("id") == "range-opacity") {
                                    MF.Views.heatmap.setOpacity(h / 100)
                                }
                                if (MF.Views.heatmap && this.$element.attr("id") == "range-intensity") {
                                    MF.Views.heatmap.setIntensity((h * h) / 100000)
                                }
                            },
                            onSlideEnd: function(g, h) {
                                console.log("onSlideEnd");
                                if (MF.Views.player) {
                                    MF.Views.player.scrub(h / 100)
                                }
                            }
                        });
                        f.each(function() {
                            var g = a(this).siblings(".rangeslider__output").children(".rangeslider__denominator");
                            if (g.length == 1) {
                                var h = e.helpers.getRecordingRateInverseValue(parseInt(g.html()), 10000);
                                a(this).attr("value", h).rangeslider("update");
                                e.forms.range.updatePercent(a(this))
                            } else {
                                e.forms.range.progress(a(this))
                            }
                        });
                        a(b).on("change", f, function(g) {
                            e.forms.range.progress(a(g.target))
                        })
                    },
                    progress: function(f) {
                        var h = f,
                            i = h.val(),
                            j = h.attr("max"),
                            g = h.siblings(".rangeslider__output");
                        var k = e.helpers.getRecordingRateValue(i, j);
                        g.find(".rangeslider__denominator").html(k);
                        e.forms.range.updatePercent(h)
                    },
                    updatePercent: function(f) {
                        var k = parseInt(f.siblings(".rangeslider__output").find(".rangeslider__denominator").html());
                        var g = 1 / k * 100;
                        var i = "";
                        var h = (MF != c && MF.Lang != c) ? MF.Lang.settings_PercentOfVisitors : "% of visitors";
                        if (e.helpers.isNumeric(g) && g > 0) {
                            if (g < 0.1) {
                                i = "(< 0.1" + h + ")"
                            } else {
                                var j = Math.round(g * 10) / 10;
                                i = "(" + j + h + ")"
                            }
                        }
                        f.siblings(".rangeslider__output").find(".rangeslider__percent").html(i)
                    },
                    steps: function(i, f, j) {
                        var h = Math.floor(f / i),
                            g = Math.floor(j / i);
                        return [h, g]
                    },
                    update: function() {
                        a(".rangeslider__denominator").on("focus", function() {
                            var f = a(this);
                            f.data("original", f.html())
                        }).on("drop paste", function(f) {
                            f.preventDefault();
                            return false
                        }).on("input propertychange", function(h) {
                            var g = a(this),
                                j = Number(g.html());
                            if (g.data("original") !== j) {
                                g.data("original", j);
                                var i = e.helpers.getRecordingRateInverseValue(j, 10000);
                                var f = g.closest(".rangeslider__output").siblings('input[type="range"]').attr("value", i).rangeslider("update");
                                e.forms.range.updatePercent(f)
                            }
                        }).on("keypress", function(f) {
                            if (f.which == 13) {
                                f.preventDefault();
                                a(this).trigger("input")
                            }
                        })
                    }
                },
                checked: {
                    init: function() {
                        this.test()
                    },
                    test: function() {
                        if (!Modernizr.csschecked) {
                            var f = a("input:radio, input:checkbox");
                            f.each(function() {
                                var g = a(this);
                                if (g.prop("type") === "radio") {
                                    a('input[name="' + g.prop("name") + '"]').change(function() {
                                        e.forms.checked.assignClasses(g)
                                    })
                                } else {
                                    if (g.prop("type") === "checkbox") {
                                        g.change(function() {
                                            e.forms.checked.assignClasses(g)
                                        })
                                    }
                                }
                                e.forms.checked.assignClasses(g)
                            })
                        }
                    },
                    assignClasses: function(f) {
                        if (f.prop("checked")) {
                            f.addClass("checked")
                        } else {
                            f.removeClass("checked")
                        }
                        return f
                    }
                },
                select: function() {
                    a("select.select-chosen").chosen({
                        width: "100%",
                        disable_search: true,
                        inherit_select_classes: true
                    });
                    a("select.select-chosen-search").chosen({
                        width: "100%",
                        inherit_select_classes: true
                    })
                },
                loading: function() {
                    a(".ladda-button").ladda("bind")
                }
            },
            tooltips: {
                init: function(f) {
                    this.defaults(f);
                    this.hover();
                    this.click();
                    this.focus()
                },
                defaults: function(f) {
                    a.fn.tooltipster("setDefaults", {
                        delay: 10,
                        interactive: true,
                        maxWidth: 250,
                        updateAnimation: false,
                        contentAsHTML: false,
                        onlyOne: true,
                        functionBefore: function(h, g) {
                            if (h[0].textContent === h.tooltipster("content") && h[0].scrollWidth > 0 && h.innerWidth() === h[0].scrollWidth) {
                                return
                            }
                            g()
                        },
                        functionReady: f ? f : function(g, h) {}
                    })
                },
                hover: function() {
                    a('[data-tip~="hover"][data-tip~="top"]:not([data-tip~="html"])').tooltipster({
                        position: "top",
                        theme: "tooltipster-dark"
                    });
                    a('[data-tip~="hover"][data-tip~="right"]:not([data-tip~="html"])').tooltipster({
                        position: "right",
                        theme: "tooltipster-dark"
                    });
                    a('[data-tip~="hover"][data-tip~="bottom"]:not([data-tip~="html"])').tooltipster({
                        position: "bottom",
                        theme: "tooltipster-dark"
                    });
                    a('[data-tip~="hover"][data-tip~="left"]:not([data-tip~="html"])').tooltipster({
                        position: "left",
                        theme: "tooltipster-dark"
                    });
                    a('[data-tip~="hover"][data-tip~="top"][data-tip~="html"]').tooltipster({
                        position: "top",
                        theme: "tooltipster-dark",
                        contentAsHTML: true
                    });
                    a('[data-tip~="hover"][data-tip~="right"][data-tip~="html"]').tooltipster({
                        position: "right",
                        theme: "tooltipster-dark",
                        contentAsHTML: true
                    });
                    a('[data-tip~="hover"][data-tip~="bottom"][data-tip~="html"]').tooltipster({
                        position: "bottom",
                        theme: "tooltipster-dark",
                        contentAsHTML: true
                    });
                    a('[data-tip~="hover"][data-tip~="left"][data-tip~="html"]').tooltipster({
                        position: "left",
                        theme: "tooltipster-dark",
                        contentAsHTML: true
                    })
                },
                click: function() {
                    a('[data-tip~="click"][data-tip~="top"]').tooltipster({
                        position: "top",
                        trigger: "click",
                        theme: "tooltipster-dark"
                    });
                    a('[data-tip~="click"][data-tip~="right"]').tooltipster({
                        position: "right",
                        trigger: "click",
                        theme: "tooltipster-dark"
                    });
                    a('[data-tip~="click"][data-tip~="bottom"]').tooltipster({
                        position: "bottom",
                        trigger: "click",
                        theme: "tooltipster-dark"
                    });
                    a('[data-tip~="click"][data-tip~="left"]').tooltipster({
                        position: "left",
                        trigger: "click",
                        theme: "tooltipster-dark"
                    })
                },
                focus: function() {
                    a('[data-tip~="focus"][data-tip~="top"]').tooltipster({
                        position: "top",
                        trigger: "custom",
                        theme: "tooltipster-dark"
                    });
                    a('[data-tip~="focus"][data-tip~="right"]').tooltipster({
                        position: "right",
                        trigger: "custom",
                        theme: "tooltipster-dark"
                    });
                    a('[data-tip~="focus"][data-tip~="bottom"]').tooltipster({
                        position: "bottom",
                        trigger: "custom",
                        theme: "tooltipster-dark"
                    });
                    a('[data-tip~="focus"][data-tip~="left"]').tooltipster({
                        position: "left",
                        trigger: "custom",
                        theme: "tooltipster-dark"
                    });
                    a('[data-tip~="focus"]').focus(function() {
                        a(this).tooltipster("show")
                    }).blur(function() {
                        a(this).tooltipster("hide")
                    })
                }
            },
            siteCards: {
                init: function() {
                    this.newCard();
                    this.toggle()
                },
                newCard: function() {
                    var f = a(".js-add-card"),
                        g = f.prev(".card-wrap").find(".card");
                    if (g[0]) {
                        g.find(".card__image").on("load", function() {
                            f.find(".card__center").css("min-height", g.height())
                        })
                    }
                },
                toggle: function() {
                    a(".toggle-icons__item").on("click", function(h) {
                        h.preventDefault();
                        var g = a(this),
                            i = g.index(),
                            f = g.siblings().addBack();
                        if (0 !== i) {
                            f.eq(i).insertBefore(f.eq(0));
                            var j = "Stopped";
                            if (g.find(":first-child").hasClass("icon-stop")) {
                                j = "Stopped"
                            }
                            if (g.find(":first-child").hasClass("icon-record")) {
                                j = "Recording"
                            }
                            if (g.find(":first-child").hasClass("icon-pause")) {
                                j = "Paused"
                            }
                            g.addClass("toggle-icons__item--inactive");
                            var k = a(this).closest(".card").attr("data-website-id");
                            MF.Views.websiteList.updateWebsiteStatus(k, j, function() {
                                d.sessionStorage.removeItem("websiteList");
                                g.removeClass("toggle-icons__item--inactive")
                            }, function() {
                                f = g.siblings().addBack();
                                f.eq(1).insertBefore(f.eq(0));
                                g.removeClass("toggle-icons__item--inactive")
                            })
                        }
                    })
                }
            },
            table: {
                init: function() {
                    this.tablesaw.init();
                    this.bulkActions.init()
                },
                tablesaw: {
                    init: function() {
                        this.updateColspan();
                        this.bind()
                    },
                    updateColspan: function() {
                        a(".metrics").each(function() {
                            var h = a(this),
                                g = h.prev(".tablesaw-bar").find(".tablesaw-advance-dots"),
                                i = g.find("li").length,
                                j = g.find(".tablesaw-advance-dots-hide").length,
                                f = h.find("> tbody > .table__row > .table__data");
                            f.attr("colspan", i - j)
                        })
                    },
                    bind: function() {
                        a(b).on("change", ".tablesaw-modeswitch select, .dialog-table-coltoggle input", function() {
                            e.table.tablesaw.updateColspan()
                        });
                        a(b).on("click", ".tablesaw-nav-btn", function() {
                            if (!a(this).hasClass("disabled")) {
                                e.table.tablesaw.updateColspan()
                            }
                        })
                    }
                },
                bulkActions: {
                    init: function() {
                        this.plots.init()
                    },
                    plots: {
                        init: function() {
                            this.check();
                            this.highlight()
                        },
                        check: function() {
                            a(".js-plot").on("click", function(i) {
                                var g = a(this),
                                    f = e.table.helpers.getPlots(g),
                                    h = this.checked;
                                if (g.is("input")) {
                                    f.each(function() {
                                        a(this).prop("checked", h).trigger("change")
                                    })
                                } else {
                                    i.preventDefault();
                                    g.parents(".heading-plot").find("> .js-plot").click()
                                }
                            })
                        },
                        highlight: function() {
                            a(".js-table").on("change", ".data-plot > .plot", function(g) {
                                var f = a(this).closest(".table__row");
                                (this.checked) ? f.addClass("is-selected"): f.removeClass("is-selected")
                            })
                        }
                    }
                },
                helpers: {
                    getPlots: function(f) {
                        return f.closest("table").find(".data-plot .plot")
                    }
                }
            },
            sortable: {
                init: function() {
                    this.bind()
                },
                bind: function() {
                    a(".js-sortable").sortable({
                        cursor: "move",
                        placeholder: "ui-sortable-placeholder",
                        forcePlaceholderSize: true,
                        handle: ".js-sort-handle",
                        update: function(f, g) {}
                    })
                }
            },
            details_window: {
                init: function() {
                    this.drawer_toggle()
                },
                drawer_toggle: function() {
                    var h = a(".js-toggle-drawer");
                    var f = a(".detail-view-drawer");
                    var g = a(".detail-view-drawer__inner");
                    h.on("click", function(j) {
                        j.preventDefault();
                        var i = a(this);
                        if (i.hasClass("icon-chevron-up")) {
                            g.fadeTo("fast", 0, function() {
                                f.slideUp("fast", "swing", function() {
                                    i.removeClass("icon-chevron-up").addClass("icon-chevron-down");
                                    a("iframe").resize()
                                })
                            })
                        } else {
                            f.slideDown("fast", "swing", function() {
                                i.removeClass("icon-chevron-down").addClass("icon-chevron-up");
                                g.fadeTo("fast", 1);
                                a("iframe").resize()
                            })
                        }
                    })
                }
            },
            stickyFooter: function() {
                if (a("html").hasClass("sticky-footer")) {
                    a("body").css("margin-bottom", a(".footer").innerHeight())
                }
            },
            utils: {
                init: function() {
                    this.mqState.appendEl();
                    this.mqState.checkStateView();
                    this.setDelay()
                },
                mqState: {
                    appendEl: function() {
                        a("body").append('<div class="mq-state"/>')
                    },
                    checkStateView: function() {
                        e.vals.view = parseInt(a(".mq-state").css("z-index"));
                        if (!Modernizr.mq("only all")) {
                            e.vals.view = 30
                        }
                    }
                },
                setDelay: function() {
                    var g = false,
                        f = false;
                    e.vals.$window.on("scroll touchmove", function() {
                        g = true
                    });
                    e.vals.$window.on("resize", function() {
                        f = true
                    });
                    setInterval(function() {
                        if (g) {
                            e.menus.resize.main();
                            g = false
                        }
                        if (f) {
                            f = false;
                            e.utils.mqState.checkStateView();
                            e.siteCards.newCard();
                            e.menus.peripheral();
                            e.stickyFooter();
                            e.table.tablesaw.updateColspan()
                        }
                    }, 50)
                }
            },
            helpers: {
                reduce: function(h, f) {
                    var g = function g(i, j) {
                        return j ? g(j, i % j) : i
                    };
                    g = g(h, f);
                    return [h / g, f / g]
                },
                percent: function(g, f) {
                    return Math.round((g / f) * 100)
                },
                getRecordingRateValue: function(f, g) {
                    var h = g / 5;
                    var i = h / 9;
                    if (f < h) {
                        return Math.floor(f / i) + 1
                    } else {
                        if (f < h * 2) {
                            return Math.floor((f - h) / i) * 10 + 10
                        } else {
                            if (f < h * 3) {
                                return Math.floor((f - (h * 2)) / i) * 100 + 100
                            } else {
                                if (f < h * 4) {
                                    return Math.floor((f - (h * 3)) / i) * 1000 + 1000
                                } else {
                                    return Math.floor((f - (h * 4)) / i) * 10000 + 10000
                                }
                            }
                        }
                    }
                },
                getRecordingRateInverseValue: function(h, f) {
                    var g = f / 5;
                    if (h < 10) {
                        return (h - 1) * 200
                    } else {
                        if (h < 100) {
                            return (h - 10) * 20 + g
                        } else {
                            if (h < 1000) {
                                return (h - 100) * 2 + (g * 2)
                            } else {
                                if (h < 10000) {
                                    return (h - 1000) / 5 + (g * 3)
                                } else {
                                    return (h - 10000) / 50 + (g * 4)
                                }
                            }
                        }
                    }
                },
                isMobile: function() {
                    var f = false;
                    (function(g) {
                        if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(g) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(g.substr(0, 4))) {
                            f = true
                        }
                    })(navigator.userAgent || navigator.vendor || d.opera);
                    return f
                },
                isNumeric: function(f) {
                    return !isNaN(parseFloat(f)) && isFinite(f)
                },
                updateQueryStringParameter: function(j, g, k) {
                    if (!j) {
                        j = d.location.href
                    }
                    var h = new RegExp("([?&])" + g + "=.*?(&|#|$)(.*)", "gi"),
                        f;
                    if (h.test(j)) {
                        if (typeof k !== "undefined" && k !== null) {
                            return j.replace(h, "$1" + g + "=" + k + "$2$3")
                        } else {
                            f = j.split("#");
                            j = f[0].replace(h, "$1$3").replace(/(&|\?)$/, "");
                            if (typeof f[1] !== "undefined" && f[1] !== null) {
                                j += "#" + f[1]
                            }
                            return j
                        }
                    } else {
                        if (typeof k !== "undefined" && k !== null) {
                            var i = j.indexOf("?") !== -1 ? "&" : "?";
                            f = j.split("#");
                            j = f[0] + i + g + "=" + k;
                            if (typeof f[1] !== "undefined" && f[1] !== null) {
                                j += "#" + f[1]
                            }
                            return j
                        } else {
                            return j
                        }
                    }
                }
            }
        };
        d.mfapp = e
    })
})(jQuery, window, document);
var MF = window.MF || {};
MF.Classes = MF.Classes || {};
MF.Classes.Helper = function(d, c) {
    var b = {};
    b.htmlEscape = function(e) {
        if (!e) {
            return e
        }
        return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    };
    b.htmlUnEscape = function(e) {
        if (!e) {
            return e
        }
        return e.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    };
    b.getUrlParts = function(f) {
        var e = d.document.createElement("a");
        e.href = f;
        return e
    };
    b.validateEmail = function(e) {
        var f = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return f.test(e)
    };
    b.validatePassword = function(e) {
        return e.length >= 8
    };
    b.validateIpAddressMask = function(e) {
        return /^((((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){1,3}\*))$/.test(e.trim())
    };
    b.validateDomainName = function(e) {
        return /^(((?!-))(xn--)?(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-\u0080-\u00FF]+\.(xn--)?)+))([a-zA-Z]{2,}|[0-9]{1,3})(\]?)$/.test(e.trim())
    };
    b.validateUrl = function(e) {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(e.trim())
    };
    b.validateSlackUrl = function(e) {
        return /^https:\/\/hooks\.slack\.com\//.test(e.trim())
    };
    b.trimEnd = function(e, g) {
        g = (g || " ").replace("\\", "\\\\");
        var f = new RegExp(g + "+$");
        return e.replace(f, "")
    };
    b.validateMergeUrl = function(h) {
        var g;
        try {
            if (h.indexOf("[]") != -1) {
                throw "Empty bracket!"
            }
            new d.RegExp(h);
            g = true
        } catch (f) {
            g = false
        }
        return g || ((/^\*/.test(h) && !/\*$/.test(h)) || (!/^\*/.test(h) && /\*$/.test(h)))
    };
    b.isInt = function(e) {
        if (isNaN(e)) {
            return false
        }
        var f = parseFloat(e);
        return (f | 0) === f
    };
    b.truncate = function(f, e) {
        if (e < 4) {
            return f
        }
        return f.length > e ? f.substr(0, e - 3).trim() + "..." : f
    };
    b.getDateXDaysBack = function(e) {
        var f = b.createDate();
        return f.setDate(f.getDate() - e)
    };
    b.getDuration = function(j) {
        j = j / 1000;
        var e = Math.floor(j / 86400);
        j -= e * 86400;
        var f = Math.floor(j / 3600) % 24;
        j -= f * 3600;
        var g = Math.floor(j / 60) % 60;
        j -= g * 60;
        var h = Math.floor(j);
        var i = j.toFixed(1);
        return (e > 0 ? e + "d " : "") + (e > 0 || f > 0 ? f + "h " : "") + (e > 0 || f > 0 || g > 0 ? g + "m " : "") + (e > 0 || f > 0 || g > 0 ? h + "s" : "") + (e === 0 && f === 0 && g === 0 ? i + "s" : "")
    };
    b.getDayDuration = function(f) {
        f = f / 1000;
        var e = Math.floor(f / 86400);
        return e
    };
    b.getDaysBetweenDates = function(e, f) {
        var g = 24 * 60 * 60 * 1000;
        return Math.round((e - f) / g)
    };
    b.convertTimeStampToColonSeperatedMinutesAndSeconds = function(h) {
        h = h / 1000;
        var e = Math.floor(h / 3600);
        h -= e * 3600;
        var f = Math.floor(h / 60) % 60;
        h -= f * 60;
        var g = Math.floor(h);
        return (e > 0 ? e + ":" : "") + b.padString(f, "00") + ":" + b.padString(g, "00")
    };
    b.getLocation = function(f) {
        if (f.visitorName) {
            return f.visitorName
        }
        var e = f.city ? f.city + ", " : "";
        if ((f.country === "us" || f.country === "ca") && f.region) {
            e += f.region
        } else {
            e += f.country.toUpperCase()
        }
        return e
    };
    b.padString = function(f, e) {
        return (e + f).slice(-e.length)
    };
    b.removeSchemeAndWww = function(f) {
        if (!f) {
            return ""
        }
        var e = d.document.createElement("a");
        e.href = f;
        f = e ? e.hostname : "";
        if (f.indexOf("www.") === 0) {
            f = f.substring(4)
        }
        return f
    };
    b.getIsoDateString = function(e) {
        if (!e) {
            e = b.createDate()
        }
        return e.getFullYear() + "-" + b.padString(e.getMonth() + 1, "00") + "-" + b.padString(e.getDate(), "00")
    };
    b.getLocaleString = function(e, i) {
        var j;
        try {
            j = e.toLocaleString(d.navigator.language, i);
            if (i && j == e.toLocaleString(d.navigator.language)) {
                throw true
            }
        } catch (h) {
            var f = "day/month/year";
            if (d.navigator && d.navigator.language === "en-US") {
                f = "month/day/year"
            }
            if (!i.day) {
                f = f.replace("day/", "")
            }
            if (!i.month) {
                f = f.replace("month/", "")
            }
            if (!i.year) {
                f = f.replace(/\/?year/, "")
            }
            var k = "hour:minute:second";
            if (!i.hour) {
                k = k.replace("hour:", "")
            }
            if (!i.minute) {
                k = k.replace("minute:", "")
            }
            if (!i.second) {
                k = k.replace(/:?second/, "")
            }
            var g = f + (f && k ? ", " : "") + k;
            j = g.replace("year", e.getFullYear()).replace("month", b.padString(e.getMonth() + 1, "00")).replace("day", b.padString(e.getDate(), "00")).replace("hour", b.padString(e.getHours(), "00")).replace("minute", b.padString(e.getMinutes(), "00")).replace("second", b.padString(e.getSeconds(), "00"))
        }
        return j
    };
    b.getTimeDifference = function(e, n) {
        var m = 1000 * 60;
        var l = m * 60;
        var k = l * 24;
        var f = e - n;
        var t = "0 secs ago";
        var o = "{x} sec ago";
        var p = "{x} secs ago";
        var i = "{x} min ago";
        var j = "{x} mins ago";
        var g = "{x} hour ago";
        var h = "{x} hours ago";
        var s = "yesterday, {x}";
        if (c != undefined) {
            t = c.general_ZeroSecsAgo;
            o = c.general_SecAgo;
            p = c.general_SecsAgo;
            i = c.general_MinAgo;
            j = c.general_MinsAgo;
            g = c.general_HourAgo;
            h = c.general_HoursAgo;
            s = c.general_Yesterday
        }
        var r, q;
        if (f < 0) {
            return t
        }
        if (f < m) {
            r = Math.round(f / 1000);
            q = r === 1 ? o : p;
            return q.replace(/{x}/g, r)
        } else {
            if (f < l) {
                r = Math.round(f / m);
                q = r === 1 ? i : j;
                return q.replace(/{x}/g, r)
            } else {
                if (f < k && e.getDate() === n.getDate()) {
                    r = Math.round(f / l);
                    q = r === 1 ? g : h;
                    return q.replace(/{x}/g, r)
                } else {
                    if (f < k * 2 && e.getDate() - n.getDate() === 1) {
                        r = b.getLocaleString(n, {
                            hour: "numeric",
                            minute: "numeric"
                        });
                        q = s;
                        return q.replace(/{x}/g, r)
                    } else {
                        if (f < k * 335) {
                            return b.getLocaleString(n, {
                                month: "numeric",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric"
                            })
                        } else {
                            return b.getLocaleString(n, {
                                year: "numeric",
                                month: "numeric",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric"
                            })
                        }
                    }
                }
            }
        }
    };
    b.getTimeDifferenceToNow = function(e) {
        var f = b.getTimeZoneOffset(e);
        return b.getTimeDifference(b.createDate(null, -f), b.createLocalDate(e))
    };
    b.numberWithCommas = function(e) {
        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    };
    b.humanBytes = function(f) {
        var e = Math.floor(Math.log(f) / Math.log(1024));
        return (f / Math.pow(1024, e)).toFixed(2) * 1 + " " + ["B", "KB", "MB", "GB", "TB"][e]
    };
    b.humanNumber = function(f) {
        if (f < 1000) {
            return f.toString()
        }
        var e = -1;
        var g = "KMBTP";
        do {
            f = f / 1000;
            e++
        } while (f > 1000);
        return Math.max(f, 0.1).toFixed(1) + g[e]
    };
    b.getBrowserIcon = function(e, f) {
        switch (e) {
            case "Android browser":
                return "android";
            case "BlackBerry Browser":
                return "blackberry";
            case "Chrome":
                return "chrome";
            case "Chrome Mobile":
                return "chrome";
            case "Chromium":
                return "chrome";
            case "Firefox":
                return "firefox";
            case "Mobile Firefox":
                return "firefox";
            case "Microsoft Edge":
                return "edge";
            case "IE":
                if (!f) {
                    return "ie-7-8-9"
                } else {
                    if (f.indexOf("11") === 0) {
                        return "ie-11"
                    } else {
                        if (f.indexOf("10") === 0) {
                            return "ie-10"
                        } else {
                            if (f.indexOf("9") === 0) {
                                return "ie-7-8-9"
                            } else {
                                if (f.indexOf("8") === 0) {
                                    return "ie-7-8-9"
                                } else {
                                    if (f.indexOf("7") === 0) {
                                        return "ie-7-8-9"
                                    } else {
                                        if (f.indexOf("6") === 0) {
                                            return "ie-7-8-9"
                                        } else {
                                            return "ie-10"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            case "IE Mobile":
                return "ie-10";
            case "Opera":
                return "opera";
            case "Opera Mini":
                return "opera";
            case "Opera Mobile":
                return "opera";
            case "Safari":
                return "safari";
            case "Safari mobile":
                return "safari";
            case "Mobile Safari":
                return "safari";
            default:
                return "unknown"
        }
    };
    b.getOsIcon = function(e, f) {
        switch (e) {
            case "Android":
                return "android";
            case "BlackBerry OS":
                return "blackberry";
            case "Chrome OS":
                return "chrome";
            case "iOS":
                return "ios";
            case "Linux":
                return "linux";
            case "OS X":
            case "macOS":
                return "osx";
            case "RIM OS":
                return "blackberry";
            case "Windows":
                if (!f) {
                    return "windows-xp"
                } else {
                    if (f.toLowerCase() === "vista") {
                        return "windows-vista"
                    } else {
                        if (f.indexOf("7") === 0) {
                            return "windows-7"
                        } else {
                            if (f.indexOf("8") === 0) {
                                return "windows-8"
                            } else {
                                if (f.indexOf("10") === 0) {
                                    return "windows-8"
                                } else {
                                    return "windows-xp"
                                }
                            }
                        }
                    }
                }
            default:
                return "unknown"
        }
    };
    b.getDeviceIcon = function(e) {
        switch (e) {
            case "Desktop":
                return "desktop16";
            case "Phone":
                return "phone16";
            case "Tablet":
                return "tablet16";
            default:
                return "unknown"
        }
    };
    b.correctOsFilter = function(e) {
        switch (e) {
            case "os x":
            case "macos":
                return "mac os";
            default:
                return e
        }
    };
    b.correctBrowserFilter = function(e) {
        if (e.substring(0, 6) === "chrome") {
            return "chrome"
        }
        if (e.substring(0, 5) === "opera") {
            return "opera"
        }
        if (e.substring(0, 7) === "android") {
            return "android"
        }
        if (e.substring(0, 6) === "safari") {
            return "safari"
        }
        if (e === "microsoft edge") {
            return "edge"
        }
        if (e.substring(0, 10) === "blackberry") {
            return ""
        }
        if (e.substring(0, 3) === "ie ") {
            return "ie"
        }
        return e
    };
    b.correctReferrerFilter = function(e) {
        switch (e) {
            case "link":
                return "links";
            case "search":
                return "searchengines";
            default:
                return e
        }
    };
    b.isMobile = function() {
        var e = false;
        (function(f) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(f) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(f.substr(0, 4))) {
                e = true
            }
        })(navigator.userAgent || navigator.vendor || d.opera);
        return e
    };
    b.generateRandomPassword = function(e) {
        var g = "";
        var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!.#$@%&";
        g += f.substring(0, 26).charAt(Math.floor(Math.random() * 26));
        g += f.substring(26, 52).charAt(Math.floor(Math.random() * 26));
        g += f.substring(52, 62).charAt(Math.floor(Math.random() * 10));
        g += f.substring(62).charAt(Math.floor(Math.random() * 7));
        while (g.length < e) {
            g += f.charAt(Math.floor(Math.random() * f.length))
        }
        return g.split("").sort(function() {
            return 0.5 - Math.random()
        }).join("")
    };
    var a = function(f, g, e) {
        if (typeof e === "undefined" || (e = +e) === 0) {
            return Math[f](g)
        }
        g = g.toString().split("e");
        g = Math[f](+(g[0] + "e" + (g[1] ? (+g[1] + e) : +e)));
        g = g.toString().split("e");
        return +(g[0] + "e" + (g[1] ? (+g[1] - e) : -e))
    };
    b.round = function(f, e) {
        return a("round", f, e)
    };
    b.floor = function(f, e) {
        return a("floor", f, e)
    };
    b.ceil = function(f, e) {
        return a("ceil", f, e)
    };
    b.parseUrl = function(f) {
        var e = (f || "").match(/^(([^:]+:)?\/?\/?(([^:\/\?#]+)?:?(\d+)?))(\/.*?)?(\?.*?)?(#.*)?$/);
        return {
            href: e[0],
            origin: e[1],
            protocol: e[2],
            host: e[3],
            hostname: e[4],
            port: e[5],
            pathname: e[6],
            search: e[7],
            hash: e[8]
        }
    };
    b.getTimeZoneOffset = function(f) {
        var g = f.match(/([+-])(\d{2}):(\d{2})$/);
        if (!g) {
            return 0
        }
        var j = g[1],
            e = +g[2],
            h = +g[3];
        var i = e * 60 + h;
        if (j === "+") {
            i = -i
        }
        return i
    };
    b.getBrowserTimeZoneOffset = function(e) {
        if (typeof e === "string") {
            e = new Date(e)
        }
        return (e || new Date()).getTimezoneOffset()
    };
    b.getBrowserTimeZone = function(e) {
        var i = b.getBrowserTimeZoneOffset(e);
        var h = true;
        if (i < 0) {
            h = false;
            i = -i
        }
        var g = i % 60;
        var f = (i - g) / 60;
        var j = (h ? "-" : "+") + b.padString(f, "00") + ":" + b.padString(g, "00");
        return j
    };
    b.createIsoDateString = function(e) {
        return e.replace(/^(\d{4}-\d{2}-\d{2})(T\d{2}(:\d{2}(:\d{2}([,.]\d+)?)?)?)?(Z|[+-]\d{2}:\d{2})?$/, function(h, f, g, i, k, j, n) {
            var l = g || "";
            if (!g) {
                l += "T00:00:00.000"
            } else {
                if (!i) {
                    l += ":00:00.000"
                } else {
                    if (!k) {
                        l += ":00.000"
                    } else {
                        if (!j) {
                            l += ".000"
                        }
                    }
                }
            }
            var m = n && n !== "Z" ? n : "+00:00";
            return f + l + m
        })
    };
    b.setIsoTimeZone = function(e, f) {
        return e.replace(/[+-]\d{2}:\d{2}$/, f)
    };
    b.correctTimeZone = function(e, f) {
        e.setMinutes(e.getMinutes() + b.getBrowserTimeZoneOffset(e) + (f || 0));
        return e
    };
    b.createDate = function(f, g) {
        if (typeof f === "string") {
            f = b.createIsoDateString(f)
        }
        var e = f !== undefined && f !== null ? new Date(f) : new Date();
        if (g !== undefined && g !== null) {
            b.correctTimeZone(e, g)
        }
        return e
    };
    b.createLocalDate = function(e) {
        if (typeof e !== "string") {
            throw 'Missing or invalid "isoDateString" argument'
        }
        e = b.createIsoDateString(e);
        var f = b.getBrowserTimeZone(e);
        e = b.setIsoTimeZone(e, f);
        return new Date(e)
    };
    b.pastePlainText = function(f) {
        f.preventDefault();
        var g = (f.originalEvent || f).clipboardData.getData("text/plain");
        if (g) {
            d.document.execCommand("insertText", false, g.replace(/(\r\n|\n|\r)/gm, ""))
        }
    };
    b.isUrl = function(e) {
        return /(https?:\/\/[^\s]+)/g.test(e)
    };
    b.getDataCenter = function() {
        return d.location.hostname.substring(0, 2)
    };
    b.stringContains = function(e, f) {
        return e.indexOf(f) !== -1
    };
    b.setTransform = function(e, g, f) {
        e.style.webkitTransform = g;
        e.style.mozTransform = g;
        e.style.msTransform = g;
        e.style.transform = g;
        if (f) {
            e.style.webkitTransformOrigin = f;
            e.style.mozTransformOrigin = f;
            e.style.msTransformOrigin = f;
            e.style.transformOrigin = f
        }
    };
    b.convertMillisecondsToQueryStringTimestamp = function(e) {
        if (!e) {
            return "0m0s"
        }
        var h = Math.floor(e / 1000);
        var f = Math.floor(h / 60);
        var g = h % 60;
        return f + "m" + g + "s"
    };
    b.convertQueryStringTimestampToMilliseconds = function(h) {
        if (!h) {
            return 0
        }
        var e = h.match(/(\d+)m(\d+)s/);
        var f = +e[1];
        var g = +e[2];
        return (f * 60 + g) * 1000
    };
    b.decodeCssPath = function(e) {
        if (!e) {
            return null
        }
        if (e.substr(0, 1) == ">") {
            e = "html > body " + e
        }
        e = e.replace(/^#(\d)/, "#\\3$1 ");
        e = e.replace(/^#(-\d)/, "#\\$1");
        e = e.replace(/:(?!\[)/g, "\\:");
        e = e.replace(/(#\w+?)\./g, "$1\\.");
        e = e.replace(/:\[([^\]]+)\]/g, ":nth-of-type($1)");
        e = e.replace(/([{}\[\]\/;%$~@&<\*\^])/g, "\\$1");
        return e
    };
    return b
};
var MF = window.MF || {};
MF.Classes = MF.Classes || {};
MF.Classes.PlayerControls = function(a, I, ah, ap, k, t, J, p, m, A, H, G) {
    var K = {};
    var e, c, f, d, b, i, g, h, ax;
    var ao = [0.5, 1, 2, 4, 8],
        q = 1;
    var w, at, u, au;
    var l = [];
    var N = 10000;
    var x = false,
        E = false;
    K.init = function() {
        f = a("#js-scrub-input");
        d = a(".js-play-pause-toggle");
        b = a("#js-time-elapsed");
        i = a("#js-time-total");
        g = a(".player-scrub-bar__skippauses-text");
        h = a(".player-scrub-bar__skippauses-text span");
        e = a(".rangeslider");
        c = a(".player-scrub-bar .rangeslider__handle");
        Y();
        ad();
        ac();
        U();
        ab();
        Z();
        ae();
        X();
        V();
        if (ap) {
            af()
        }
        if (t) {
            ag()
        }
        if (ah) {
            aa()
        }
        if (k) {
            T()
        }
        if (J) {
            W()
        }
    };
    I.setPlayingStatus = R;
    I.setPausedStatus = Q;
    I.updateTime = aw;
    I.showSkippingMessage = al;
    I.displayMetaData = s;
    I.initScrubBar = D;

    function Y() {
        d.on("click", function(ay) {
            ay.preventDefault();
            aq(a(this))
        })
    }

    function o() {
        var ay = x;
        a("html").off("keyup").on("keyup", function(az) {
            var aA = true;
            switch (az.which) {
                case 32:
                    aq();
                    break;
                case 37:
                    L();
                    break;
                case 39:
                    M();
                    break;
                case 33:
                    I.skipToPreviousPage();
                    break;
                case 34:
                case 35:
                    I.skipToNextPage();
                    break;
                case 36:
                    O();
                    break;
                case 46:
                    if (ay) {
                        a(".js-modal-delete").click()
                    }
                    break;
                default:
                    aA = false;
                    break
            }
            if (aA) {
                az.preventDefault()
            }
        }).off("keypress").on("keypress", function(az) {
            var aA = true;
            switch (az.which) {
                case 43:
                    C();
                    break;
                case 45:
                    r();
                    break;
                case 116:
                    if (ay) {
                        am()
                    }
                    break;
                case 118:
                    if (ay) {
                        an()
                    }
                    break;
                case 100:
                    a(".js-toggle-drawer:first").click();
                    break;
                case 105:
                    if (ay) {
                        aj()
                    }
                    break;
                case 99:
                    if (ay) {
                        ai()
                    }
                    break;
                case 42:
                    if (ay) {
                        ar()
                    }
                    break;
                default:
                    aA = false;
                    break
            }
            if (aA) {
                az.preventDefault()
            }
        })
    }

    function av() {
        a("html").off("keyup").off("keypress")
    }

    function aq() {
        if (F()) {
            I.pause()
        } else {
            I.play()
        }
    }

    function F() {
        return d.hasClass("is-playing")
    }

    function n() {
        av();
        if (ax = F()) {
            I.pause()
        }
    }

    function j() {
        o();
        if (ax) {
            I.play()
        }
    }

    function ad() {
        a(".js-favorite").on("click", function(ay) {
            ay.preventDefault();
            ar()
        })
    }

    function ar() {
        var ay = a(".js-favorite");
        ay.toggleClass("is-favorite");
        if (ay.hasClass("is-favorite")) {
            I.star()
        } else {
            I.unstar()
        }
    }

    function af() {
        a(".js-modal-tag").off("click").on("click", function(ay) {
            ay.preventDefault();
            am()
        });
        a(".js-remove-tag").off("click").on("click", function(az) {
            az.preventDefault();
            var ay = a(this);
            var aA = A.htmlUnEscape(ay.parent().find(".tag-name").html());
            m.removeTagFromSession(aA, I.websiteId, I.session.id, function() {
                ay.parent().remove()
            })
        })
    }

    function am() {
        n();
        m.websiteInfo(I.websiteId, function(ay) {
            ap.showModal({
                websiteId: I.websiteId,
                sessionIdList: [I.session.id],
                isDemoWebsite: ay.isDemo,
                callbacks: {
                    successFunction: function(az) {
                        var aA = '<span class="tag ' + (az == "click-error" || az == "click-rage" ? "tag-warn " : "") + 'js-tag-filter" href="#"><a class="remove-tag js-remove-tag icon-close"></a><div class="tag-name">' + A.htmlEscape(az) + "</div></span>";
                        a("#recording-detail-tags").append(aA);
                        a(".tag.js-modal-tag").appendTo("#recording-detail-tags");
                        af()
                    },
                    afterCloseFunction: j
                }
            })
        })
    }

    function ai(ay) {
        n();
        var az = false;
        for (var aA = 0; aA < l.length; aA++) {
            if (Math.abs(l[aA].engagementTime - w) <= 300) {
                az = true;
                break
            }
        }
        m.websiteInfo(I.websiteId, function(aB) {
            k.showModal({
                annotation: ay,
                websiteId: I.websiteId,
                sessionId: I.session.id,
                pageviewId: I.pageviewid,
                time: u,
                engagementTime: w,
                isDemoWebsite: aB.isDemo,
                closeToAnotherComment: az,
                callbacks: {
                    successFunction: function(aC) {
                        a("#annotation_" + aC.id).remove();
                        a(".player-scrub-bar").append(y(aC, at, E));
                        a(".player-scrub-bar__annotation").tooltipster({
                            position: "bottom",
                            contentAsHTML: true,
                            theme: "tooltipster-annotation"
                        });
                        var aE = false;
                        for (var aD = 0; aD < l.length; aD++) {
                            if (l[aD].id === aC.id) {
                                l[aD] = aC;
                                aE = true
                            }
                        }
                        if (!aE) {
                            l.push(aC)
                        }
                        j()
                    },
                    afterCloseFunction: function() {
                        j()
                    }
                }
            })
        })
    }

    function y(ay, aC, aD) {
        var aB = '<a class="js-edit-annotation" data-id="' + ay.id + '" href="#"><i class="icon-pencil" /></a>';
        var aA = '<a class="js-delete-annotation" data-id="' + ay.id + '" href="#"><i class="icon-trash" /></a>';
        var az = ay.email ? ' <em style="font-size:12px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">(' + A.htmlEscape(ay.email) + ")</em>" : "";
        var aE = '<span class="annotation-controls">' + (ay.mine ? aB : "") + (ay.mine || aD ? aA : "") + "</span>" + A.convertTimeStampToColonSeperatedMinutesAndSeconds(ay.time) + " - " + A.htmlEscape(ay.text) + az;
        return '<i class="icon icon-speech player-scrub-bar__annotation" id="annotation_' + ay.id + '" data-tip="hover right html" title="' + A.htmlEscape(aE) + '" style="left: ' + ay.engagementTime / aC * 99 + '%"></i>'
    }

    function aa() {
        a(".js-modal-share").off("click").on("click", function(az) {
            az.preventDefault();
            n();
            var ay = this;
            m.websiteInfo(I.websiteId, function(aA) {
                ah.show({
                    target: ay,
                    shareUrl: z(ay),
                    alternativeUrl: z(ay, I.pageviewid, u),
                    alternativeUrlOption1: G.share_PlayFromBeginning,
                    alternativeUrlOption2: G.share_PlayFromHere + " (" + A.convertTimeStampToColonSeperatedMinutesAndSeconds(u) + ")",
                    websiteIsDemo: aA.isDemo,
                    callbacks: {
                        sessionChanged: function(aD, aE, aB, aC) {
                            if (aD == "session") {
                                a(ay).attr("data-modal-token", aC || null)
                            }
                        },
                        afterClose: j
                    }
                })
            })
        })
    }

    function z(az, ay, aA) {
        var aB;
        a.each(az.attributes, function(aD, aC) {
            if (aC.name.indexOf("data-modal-share-url") === 0) {
                aB = aC.value
            }
        });
        if (!aB) {
            return ""
        }
        if (ay) {
            aB = aB.replace(/(\/pageviews\/\w+)?\/play/g, "/pageviews/" + ay + "/play")
        } else {
            aB = aB.replace(/\/pageviews\/\w+/, "")
        }
        if (aA) {
            aB += "?t=" + A.convertMillisecondsToQueryStringTimestamp(aA)
        }
        return aB
    }

    function W() {
        a(".js-identify").off("click").on("click", function(ay) {
            ay.preventDefault();
            aj()
        })
    }

    function T() {
        a(".js-annotate").off("click").on("click", function(ay) {
            ay.preventDefault();
            ai()
        });
        a(document).on("click", ".js-edit-annotation", function(ay) {
            ay.preventDefault();
            for (var az = 0; az < l.length; az++) {
                if (l[az].id === a(this).data("id")) {
                    ai(l[az])
                }
            }
        });
        a(document).on("click", ".js-delete-annotation", function(az) {
            az.preventDefault();
            var ay = a(this).data("id");
            n();
            p.showModal(G.playback_AnnotateRecording_Delete, G.playback_AnnotateRecording_DeleteText, G.playback_AnnotateRecording_DeleteButton, {
                confirm: function() {
                    m.removeAnnotation(ay, I.websiteId, I.session.id, I.pageviewid, function() {
                        a("#annotation_" + ay).remove();
                        p.closeModal()
                    }, null)
                },
                afterClose: j
            })
        })
    }

    function aj() {
        n();
        J.prompt(G.recordingList_IdentifyVisitor, G.recordingList_VisitorName, I.session.visitorName, null, function(ay) {
            return ay.length < 50
        }, G.general_ValueTooLong, function(aA, az, ay) {
            m.websiteInfo(I.websiteId, function(aB) {
                if (aB.isDemo) {
                    ay(G.demoWebsite_SaveNotAllowed);
                    return
                }
                m.identify(aA, I.websiteId, I.session.id, function() {
                    az();
                    I.session.visitorName = aA;
                    a("#recording-detail-visitor-name").html(A.htmlEscape(aA))
                }, ay)
            })
        }, j)
    }

    function ag() {
        a(".js-modal-variables").click(function(ay) {
            ay.preventDefault();
            an()
        })
    }

    function an() {
        n();
        m.websiteInfo(I.websiteId, function(ay) {
            t.show({
                websiteId: I.websiteId,
                sessionId: I.session.id,
                websiteIsDemo: ay.isDemo,
                websiteIsReadOnly: ay.readOnly,
                callbacks: {
                    variablesChanged: function(aA) {
                        a(".tag.variable").remove();
                        for (var az in aA) {
                            if (aA[az]) {
                                a("#recording-detail-tags").append('<span class="tag variable" title="' + A.htmlEscape(az) + "=" + A.htmlEscape(aA[az]) + '">' + A.htmlEscape(az) + "=" + A.htmlEscape(aA[az]) + "</span>")
                            }
                        }
                        a(".tag.js-modal-tag").appendTo("#recording-detail-tags");
                        af()
                    },
                    afterClose: j
                }
            })
        })
    }

    function V() {
        a(".js-modal-delete").click(function(ay) {
            ay.preventDefault();
            n();
            a.magnificPopup.open({
                items: {
                    src: "#modal-delete",
                    type: "inline",
                    removalDelay: 300,
                    mainClass: "mfp-fade",
                    focus: ".modal--autofocus"
                },
                callbacks: {
                    afterClose: j
                }
            });
            a(".js-delete").click(function(az) {
                az.preventDefault();
                m.websiteInfo(I.websiteId, function(aA) {
                    if (aA.isDemo && aA.readOnly) {
                        H.showMessage("#deleteErrorMsg", G.demoWebsite_DeleteNotAllowed)
                    } else {
                        I.deleteRecording()
                    }
                })
            });
            a(".js-cancel-delete").click(function(az) {
                az.preventDefault();
                a("#modal-delete .mfp-close").click()
            })
        })
    }

    function ae() {
        a("#contact-support").on("click", function() {
            I.pause()
        })
    }

    function X() {
        a(".detail-head").hover(ak, B)
    }

    function ak() {
        a(".playback-legend").removeClass("is-hidden");
        a(".keyboard-legend").removeClass("is-hidden")
    }

    function B() {
        a(".playback-legend").addClass("is-hidden");
        a(".keyboard-legend").addClass("is-hidden")
    }

    function ac() {
        a(".js-speed-adjust").on("click", function(ay) {
            ay.preventDefault();
            C()
        })
    }

    function C() {
        if (++q >= ao.length) {
            q = 0
        }
        a(".js-speed-adjust span").html("x" + ao[q]);
        I.changeSpeed(ao[q])
    }

    function r() {
        if (--q < 0) {
            q = ao.length - 1
        }
        a(".js-speed-adjust span").html("x" + ao[q]);
        I.changeSpeed(ao[q])
    }

    function O() {
        w = 0;
        P()
    }

    function L() {
        if ((w -= N) < 0) {
            w = 0
        }
        P()
    }

    function M() {
        if ((w += N) > at) {
            w = at
        }
        P()
    }

    function P() {
        I.scrubStart();
        I.scrub(w / at * 100);
        aw(w, at, u, au)
    }

    function U() {
        var ay = a("#page-selector");
        ay.change(function() {
            I.changePage(a(this).val());
            B()
        })
    }

    function ab() {
        var ay = a(".js-skip");
        ay.on("click", function(az) {
            az.preventDefault();
            if (a(this).hasClass("js-skip--start")) {
                I.skipToPreviousPage()
            } else {
                I.skipToNextPage()
            }
        })
    }

    function Z() {
        var az = a("#player-replay");
        var ay = a("#player-close");
        az.on("click", function() {
            a.magnificPopup.close();
            I.changePage(a("#page-selector option").first().val())
        });
        ay.on("click", function() {
            window.close()
        })
    }

    function R() {
        d.addClass("is-playing").find("i").removeClass("icon-play-2").addClass("icon-pause")
    }

    function Q() {
        d.removeClass("is-playing").find("i").removeClass("icon-pause").addClass("icon-play-2")
    }

    function aw(az, aA, ay, aB) {
        w = az;
        at = aA;
        u = ay;
        au = aB;
        b.html(A.convertTimeStampToColonSeperatedMinutesAndSeconds(u));
        i.html(A.convertTimeStampToColonSeperatedMinutesAndSeconds(au));
        S(w / at)
    }

    function S(ay) {
        if (e.length == 0) {
            e = a(".rangeslider")
        }
        if (c.length == 0) {
            c = a(".player-scrub-bar .rangeslider__handle")
        }
        f.val(ay * 10000);
        f.change()
    }

    function al(ay, az, aB, aA) {
        if (!ay) {
            g.fadeOut("slow");
            return
        }
        h.text(A.getDuration(aA));
        g.css("left", (((az - 3500) / aB * 100).toFixed(2) - 1) + "%");
        g.css("width", ((3500 / aB * 100).toFixed(2) + 2) + "%");
        g.fadeIn("slow")
    }

    function D(aD, ay) {
        E = ay;
        l = aD.annotations;
        var aA = "linear-gradient(to right, ";
        for (var aC = 0; aC < aD.buckets.length; aC++) {
            aA += "hsl(" + (aD.buckets[aC].m > 0 ? "0, 80%, 60%" : "0, 0%, 80%") + ") " + ((aC + 1) / 2) + "%, ";
            if (aD.buckets[aC].c > 0) {
                aA += "hsl(50, 100%, 50%) " + ((aC + 1) / 2) + "%, "
            }
            if (aD.buckets[aC].k > 0) {
                aA += "hsl(100, 100%, 30%) " + ((aC + 1) / 2) + "%, "
            }
            if (aD.buckets[aC].i > 0) {
                aA += "hsl(100, 100%, 10%) " + ((aC + 1) / 2) + "%, "
            }
        }
        aA = aA.substring(0, aA.length - 2) + ")";
        a(".player-scrub-bar").css("background-image", aA);
        a(".player-scrub-bar__click-error").remove();
        for (aC = 0; aC < aD.clickErrors.length; aC++) {
            var az = aD.clickErrors[aC];
            var aB = "<b>" + G.playback_JavascriptError + "</b>" + (az.error ? "<br>" + A.htmlEscape(az.error.errorMessage) + '<pre><a href="' + az.error.url + '" target="_blank">' + A.htmlEscape(az.error.url) + "</a> (" + A.htmlEscape(az.error.line) + ":" + A.htmlEscape(az.error.column) + ")" + (az.error.stack ? "<br><br><b>" + G.playback_JavascriptErrorStackTrace + "</b>:<br>" + A.htmlEscape(az.error.stack).replace(/\n/g, "<br>") : "") : "") + "</pre>";
            a(".player-scrub-bar").append('<i class="icon icon-warn player-scrub-bar__click-error" data-tip="hover" title="' + A.htmlEscape(aB) + '" style="left: ' + az.position + '%"></i>')
        }
        a(".player-scrub-bar__click-error").tooltipster({
            position: "bottom",
            contentAsHTML: true,
            theme: "tooltipster-js-error"
        });
        a(".player-scrub-bar__skippauses-gradient").remove();
        for (aC = 0; aC < aD.pauses.length; aC++) {
            a(".player-scrub-bar").append('<div class="player-scrub-bar__skippauses-gradient" style="left: ' + aD.pauses[aC].start + "%;width: " + aD.pauses[aC].width + '%"></div>')
        }
        a(".player-scrub-bar__annotation").remove();
        if (aD.annotations) {
            for (aC = 0; aC < aD.annotations.length; aC++) {
                a(".player-scrub-bar").append(y(aD.annotations[aC], aD.engagementTime, E))
            }
            a(".player-scrub-bar__annotation").tooltipster({
                position: "bottom",
                contentAsHTML: true,
                theme: "tooltipster-annotation"
            })
        }
    }

    function s(aC, ay, aE) {
        x = ay;
        var az = '<i class="icon-device icon-device--{browser-icon}" data-tip="hover top" title="{useragent}"></i> <i class="icon-device icon-device--{os-icon}" data-tip="hover top" title="{os}"></i> <i class="icon-device icon-device--{device-icon}" data-tip="hover top" title="{device}"></i>';
        a("#recording-detail-location").html('<i class="icon-flag icon-flag--' + aC.country + '"></i> ' + A.htmlEscape(A.getLocation(aC)));
        a("#recording-detail-ip").html(aC.ip);
        a("#recording-detail-isp").html(A.htmlEscape(aC.isp));
        a("#recording-detail-visitor-name").html(A.htmlEscape(aC.visitorName));
        a("#recording-detail-device").html(az.replace(/{useragent}/g, A.htmlEscape(aC.browser + (aC.browserVersion ? " " + aC.browserVersion : ""))).replace(/{browser-icon}/g, A.getBrowserIcon(aC.browser, aC.browserVersion)).replace(/{os}/g, A.htmlEscape(aC.os + (aC.osVersion ? " " + aC.osVersion : ""))).replace(/{os-icon}/g, A.getOsIcon(aC.os, aC.osVersion)).replace(/{device}/g, A.htmlEscape(aC.device)).replace(/{device-icon}/g, A.getDeviceIcon(aC.device)));
        a("#recording-detail-screenres").html(A.htmlEscape(aC.screenRes));
        a("#recording-detail-language").html(A.htmlEscape(aC.lang));
        a("#recording-detail-referrer").html('<a href="' + aC.referrer + '" target="_blank">' + (aC.referrer != "" ? A.htmlEscape(aC.referrer) : "-") + "</a>");
        var aB = A.getTimeDifferenceToNow(aC.lastActivity);
        if (/\d{2}:\d{2}$/.test(aB)) {
            aB = null
        }
        a("#recording-detail-starttime").html(A.createLocalDate(aC.created).toLocaleString() + (aB ? ' <span style="color:#aaa">(' + aB + ")</span>" : ""));
        a("#recording-detail-duration").html(A.getDuration(aC.duration));
        var aD = "";
        for (var aA = 0; aA < aC.tags.length; aA++) {
            if (!ap || !x || aC.tags[aA] == "form-interact" || aC.tags[aA] == "submit" || aC.tags[aA] == "shared" || aC.tags[aA] == "click-error" || aC.tags[aA] == "click-rage") {
                aD += '<span class="tag' + (aC.tags[aA] == "click-error" || aC.tags[aA] == "click-rage" ? " tag-warn" : "") + '">' + A.htmlEscape(aC.tags[aA]) + "</span>"
            } else {
                aD += '<span class="tag js-tag-filter" href="#"><a class="remove-tag js-remove-tag icon-close"></a><div class="tag-name">' + A.htmlEscape(aC.tags[aA]) + "</div></span>"
            }
        }
        for (var aA = 0; aA < aC.variables.length; aA++) {
            aD += '<span class="tag variable" title="' + A.htmlEscape(aC.variables[aA]) + '">' + A.htmlEscape(aC.variables[aA]) + "</span>"
        }
        a("#recording-detail-tags").html(aD);
        if (ap && typeof aE != "undefined" && x) {
            a("#recording-detail-tags").append('<span class="tag fullaccess demo--hidden js-modal-tag" data-tip="hover top" title="Add Tag">+</span>');
            af()
        }
        if (aC.starred) {
            a(".js-favorite").addClass("is-favorite")
        }
        a(".js-modal-share").attr("data-modal-token", aC.token);
        o()
    }
    return K
};
var MF = window.MF || {};
MF.Classes = MF.Classes || {};
MF.Classes.PlayerModule = function(a, aJ, i, M, aE, an, ab) {
    var ak = {};
    var d = a("#play-iframe");
    var b = a("#page-selector");
    var c = a(".page-selector-website-name");
    var e = a(".playback-zoom-indicator");
    var ai = d[0].contentWindow;
    var p = aJ.location.search.indexOf("mf_debug=2") > -1;
    var N = false,
        x = false;
    var t = aJ.location.search.indexOf("mf_autostart=0") > -1;
    var ac = aJ.location.search.indexOf("livestream=1") !== -1;
    var y = [],
        aC = [],
        aA = [],
        h = [];
    var ag = 1;
    var n = 0;
    var o = {};
    var V = false;
    var W = false;
    var aI = false;
    var T = false;
    var X = false;
    var q;
    var P = 1;
    var aH;
    var aG;
    var S = false;
    var z = null;
    var aD = +new Date();
    var al = false;
    var ae;
    var O = true;
    ax();
    ak.setPlayingStatus = function() {};
    ak.setPausedStatus = function() {};
    ak.updateTime = function() {};
    ak.showSkippingMessage = function() {};
    ak.displayMetaData = function() {};
    ak.initScrubBar = function() {};
    ak.token = null;
    ak.init = function(aT, aR, aQ, aS, aO, aN, aP) {
        ak.token = aS;
        if (aS) {
            X = true
        }
        ak.langError = aP;
        T = aN;
        ae = K();
        if (!T && !ak.token) {
            g(aT);
            i.websiteInfo(aT, function(aU) {
                i.user(function(aV) {
                    z = aV.isAccountOwner || aU.isDemo || aV.permissions.filter(function(aW) {
                        return aW.websiteId === aT
                    }).length > 0;
                    if (!z) {
                        a("#player").addClass("readonly")
                    }
                    if (!aV.downloadRecordingsEnabled && !aU.isDemo) {
                        a(".menu-inpod__link.download").attr("href", "#").click(function(aW) {
                            aW.preventDefault();
                            a.magnificPopup.open({
                                items: {
                                    src: "#modal-upgrade"
                                }
                            })
                        })
                    }
                    if (!aV.sharingEnabled && !aU.isDemo) {
                        a(".js-modal-share").addClass("is-hidden")
                    }
                    if (aV.inGpdrZone) {
                        O = false
                    }
                    if (!O) {
                        a(".js-identify").addClass("is-hidden")
                    } else {
                        a(".js-identify").removeClass("is-hidden")
                    }
                    if (ak.session) {
                        ak.displayMetaData(ak.session, z, aS)
                    }
                }, az)
            })
        }
        i.loadSessionData(aT, aR, ak.token, function(aV) {
            ak.session = aV;
            ak.websiteId = aT;
            q = aV.device;
            aj();
            if (z !== null || T || X) {
                ak.displayMetaData(ak.session, z, aS)
            }
            if (aV.gdpr) {
                O = false
            }
            aE.initPageList();
            var aU = aM(aQ);
            R(aU);
            if (!aO && !ak.token) {
                i.markSessionWatched(aT, aR)
            }
            a(function() {
                mfapp.init()
            })
        }, az);
        d.load(function() {
            ad("HTML loaded");
            try {
                var aV = d[0].contentWindow.document.location.href
            } catch (aU) {
                if (p) {
                    alert("Warning: The playback iframe has been redirected to an external URL.")
                }
                ad("Warning: External url loaded")
            }
            if (!N) {
                N = true
            }
            if (x) {
                a(".spinner-large").hide();
                d[0].style.opacity = 1;
                Q();
                if (L()) {
                    au(aH, aG)
                }
                if (!t) {
                    ak.play()
                }
            }
        });
        a(aJ).resize(aL);
        a("body").css("overflow-y", "hidden");

        function aM(aU) {
            var aV = I(aJ.location.href);
            if (aV) {
                aU = aV;
                if (aJ.history.pushState) {
                    aJ.history.pushState(null, "", ao(aJ.location.href, null))
                }
            }
            return aU || ak.session.pageViews[0].id
        }
    };
    ak.play = function() {
        ad("Play from time " + n);
        av();
        ak.setPlayingStatus();
        V = true
    };
    ak.pause = function() {
        ad("Pause at time " + n);
        k();
        ak.setPausedStatus();
        V = false
    };
    ak.renderInitialDom = function() {
        ai.postMessage(JSON.stringify({
            ty: 38,
            t: 0,
            v: o.initialDom
        }), "*")
    };
    ak.scrubStart = function() {
        if (!W) {
            ad("Scrub start, wasPlaying: " + V);
            W = true;
            aI = V;
            if (aI) {
                ak.pause();
                ad("Scrub start, pausing")
            } else {
                ad("Scrub start, not pausing")
            }
        }
    };
    ak.scrub = function(aM) {
        W = false;
        ad("Scrub: " + aM);
        ak.showSkippingMessage(false);
        aK(Math.round((aM / 100) * o.engagementTime));
        if (aI) {
            ak.play();
            ad("Scrub end, playing")
        } else {
            ad("Scrub end, not playing")
        }
    };
    ak.changeSpeed = function(aM) {
        ag = aM;
        if (V) {
            av()
        }
    };
    ak.changePage = function(aM) {
        ak.pause();
        R(aM)
    };
    ak.isPlaying = function() {
        return V
    };
    ak.skipToNextPage = function() {
        var aM = E(ak.pageviewid);
        if (aM != null) {
            ak.changePage(aM);
            return true
        } else {
            ak.pause();
            return false
        }
    };
    ak.skipToPreviousPage = function() {
        var aM = G(ak.pageviewid);
        if (aM != null) {
            ak.changePage(aM)
        } else {
            ak.pause();
            n = 0;
            ak.play()
        }
    };
    ak.star = function() {
        i.markSessionStarred(ak.websiteId, ak.session.id, null, function() {
            a("#player > .notification--error").addClass("notification--visible")
        })
    };
    ak.unstar = function() {
        i.markSessionUnStarred(ak.websiteId, ak.session.id, null, function() {
            a("#player > .notification--error").addClass("notification--visible")
        })
    };
    ak.deleteRecording = function() {
        i.deleteSession(ak.websiteId, ak.session.id, function() {
            aJ.close()
        }, function() {})
    };

    function K() {
        var aM = aJ.location.href.match(/t=\w+/);
        if (!aM) {
            return null
        }
        return aM[0].split("=")[1]
    }

    function aB() {
        if (!al) {
            var aN = M.convertQueryStringTimestampToMilliseconds(ae);
            var aM = m(aN, o.events);
            aK(aM);
            al = true
        }
    }

    function aj() {
        for (var aN = 0; aN < ak.session.pageViews.length; aN++) {
            var aO = ak.session.pageViews[aN];
            var aQ = M.getUrlParts(aO.uri);
            var aP = aQ.pathname + aQ.search;
            if (aP.indexOf(aO.websitePage) != 0) {
                aP = aO.websitePage
            }
            var aM = "#" + (aN + 1) + "/" + ak.session.pageViews.length + " (" + M.convertTimeStampToColonSeperatedMinutesAndSeconds(aO.visitTime) + "): " + aP;
            b.append('<option value="' + aO.id + '">' + M.htmlEscape(aM) + "</option>")
        }
    }

    function ax() {
        f(aJ, "message", am)
    }

    function am(aO) {
        try {
            var aN = JSON.parse(aO.data)
        } catch (aM) {
            ad("Receive failure: " + aM.message);
            return
        }
        if (!aN.mfCommand) {
            return
        }
        if (aN.mfCommand == "html-error") {
            t = true;
            ak.pause();
            if (!aJ._mfq) {
                aJ._mfq = []
            }
            switch (aN.errorCode) {
                case "504":
                    aJ._mfq.push(["tag", "crawl-error"]);
                    break;
                case "404":
                    aJ._mfq.push(["tag", "html-not-found"]);
                    break;
                default:
                    aJ._mfq.push(["tag", "error"]);
                    break
            }
        }
    }

    function f(aM, aN, aO) {
        if (aM.addEventListener) {
            aM.addEventListener(aN, aO, false)
        } else {
            aM.attachEvent("on" + aN, aO)
        }
    }

    function R(aQ) {
        for (var aM = 0; aM < ak.session.pageViews.length; aM++) {
            var aS = ak.session.pageViews[aM];
            if (aS.id == aQ) {
                var aR = M.parseUrl(aS.uri);
                a(".menu-inpod__link.pageUrl").attr("href", aS.uri).off("click").on("click", function() {
                    ak.pause()
                });
                break
            }
        }
        if (an && aR != undefined && aR.protocol != aJ.location.protocol) {
            var aP = ap(aJ.location.href, aR.protocol);
            aP = aq(aP, aQ);
            aJ.location = aP;
            return
        }
        ak.pageviewid = aQ;
        n = 0;
        N = false;
        x = false;
        b.val(aQ);
        b.trigger("chosen:updated");
        a(".spinner-large").css({
            "font-size": "33px"
        }).fadeIn();
        d[0].style.opacity = 0.7;
        aO();
        aN();

        function aN() {
            i.loadPlaybackData(ak.websiteId, ak.session.id, ak.pageviewid, ak.token, function(aT) {
                o = aT;
                aF(o.events);
                ay(o);
                if (L()) {
                    var aU = parseInt(ak.session.screenRes.split("x")[0]);
                    P = Math.min(aU / Math.min(aH, aG), 1);
                    S = (aH / aG) >= 1;
                    j();
                    ad("Touch device with initial default viewport width " + aH + " px and height " + aG + " px. Iframe max zoom level " + P)
                }
                ar(aH, aG);
                aL(null, aH, aG);
                s();
                ad("Recording events loaded. Count:" + aT.events.length + ", viewport to " + aT.viewportWidth + " x " + aT.viewportHeight + " px, screen res: " + ak.session.screenRes + ", touch: " + L());
                x = true;
                l();
                if (N) {
                    a(".spinner-large").hide();
                    d[0].style.opacity = 1;
                    Q();
                    if (!t) {
                        ak.play()
                    }
                }
                if (ae) {
                    aB()
                }
            }, ac ? aa : az)
        }

        function aO() {
            if (T) {
                d.attr("src", "html/" + ak.pageviewid + ".html")
            } else {
                d.attr("src", "/websites/" + ak.websiteId + "/recordings/" + ak.session.id + "/pageviews/" + ak.pageviewid + "/frame" + (ak.token ? "?token=" + i.encodeValue(ak.token) : ""))
            }
        }
    }

    function ay(aM) {
        if (L()) {
            aw(aM)
        } else {
            aH = aM.viewportWidth;
            aG = aM.viewportHeight
        }
    }

    function aF(aM) {
        var aN = {};
        aM.filter(function(aO) {
            return aO.ty === 9
        }).forEach(function(aO) {
            if (aO.v && aO.v.indexOf("+||") === 0 && aN[aO.ta]) {
                aO.v = aN[aO.ta] + aO.v.substring(3)
            }
            aN[aO.ta] = aO.v
        })
    }

    function aw(aM) {
        if (!aH) {
            if (aM.viewportWidth) {
                aH = aM.viewportWidth
            } else {
                aH = +ak.session.screenRes.split("x")[0]
            }
        }
        if (!aG) {
            if (aM.viewportHeight) {
                aG = aM.viewportHeight
            } else {
                aG = +ak.session.screenRes.split("x")[1]
            }
        }
    }

    function j() {
        if (U()) {
            if (S) {
                d.removeClass("touch-phone-portrait");
                d.addClass("touch-phone-landscape")
            } else {
                d.removeClass("touch-phone-landscape");
                d.addClass("touch-phone-portrait")
            }
        }
        if (Y()) {
            if (S) {
                d.removeClass("touch-tablet-portrait");
                d.addClass("touch-tablet-landscape")
            } else {
                d.removeClass("touch-tablet-landscape");
                d.addClass("touch-tablet-portrait")
            }
        }
    }

    function ap(aN, aM) {
        return aN.replace(/^[^:]+:/, aM)
    }

    function I(aN) {
        var aM = aN.match(/redirect-page=([a-z0-9]+)/i);
        return aM ? aM[1] : null
    }

    function aq(aP, aM) {
        var aN = /redirect-page=([a-z0-9]+)/i;
        var aO = "redirect-page=" + aM;
        return aN.test(aP) ? aP.replace(aN, aO) : aP + H(aP) + aO
    }

    function ao(aM) {
        return aM.replace(/[?&]?redirect-page=([a-z0-9]+)/i, "")
    }

    function H(aM) {
        return aM.indexOf("?") === -1 ? "?" : "&"
    }

    function az() {
        aJ.setTimeout(function() {
            a(".spinner-large__content").html(ak.langError);
            a(".spinner-large").css({
                "font-size": "26px"
            }).fadeIn();
            d[0].style.opacity = 0.7
        }, 200)
    }

    function k() {
        ad("Clearing events.");
        for (var aM = 0; aM < y.length; aM++) {
            clearTimeout(y[aM])
        }
        for (aM = 0; aM < aC.length; aM++) {
            clearTimeout(aC[aM])
        }
        for (aM = 0; aM < aA.length; aM++) {
            clearTimeout(aA[aM])
        }
        for (aM = 0; aM < h.length; aM++) {
            clearTimeout(h[aM])
        }
        y = [];
        aC = [];
        aA = [];
        h = []
    }

    function aK(aW) {
        ad("Winding playback from " + n + " to " + aW);
        if (aW < n) {
            n = 0
        }
        if (n === 0 && o.initialDom) {
            ai.postMessage(JSON.stringify({
                ty: 38,
                t: 0,
                v: o.initialDom
            }), "*")
        }
        var aS = -1,
            aT = -1,
            aR = -1,
            aQ = {},
            aO = {},
            aU = 0;
        o.events.map(function(aX, aY) {
            return {
                event: aX,
                index: aY
            }
        }).filter(function(aX) {
            return n <= aX.event.e && aX.event.e < aW
        }).forEach(function(aX) {
            if (aX.event.ty === 0) {
                aS = aX.index
            } else {
                if (aX.event.ty === 1) {
                    aT = aX.index
                } else {
                    if (aX.event.ty === 2) {
                        aR = aX.index
                    } else {
                        if (aX.event.ty === 9 || aX.event.ty === 10) {
                            aQ[aX.event.ta] = aX.index
                        } else {
                            if (aX.event.ty === 38) {
                                ah(aX.event)
                            } else {
                                if (aX.event.ty === 39) {
                                    aO[aX.event.ta] = aX.index
                                }
                            }
                        }
                    }
                }
            }
        });
        if (aS > -1) {
            ah(o.events[aS])
        }
        if (aT > -1) {
            ah(o.events[aT])
        }
        if (aR > -1) {
            ah(o.events[aR])
        }
        for (var aV in aQ) {
            if (aQ.hasOwnProperty(aV)) {
                ah(o.events[aQ[aV]])
            }
        }
        for (var aV in aO) {
            if (aO.hasOwnProperty(aV)) {
                ah(o.events[aO[aV]])
            }
        }
        n = aW;
        var aP = null;
        for (var aN = 0; aN < o.events.length; aN++) {
            if (o.events[aN].e > aW) {
                break
            }
            aP = o.events[aN]
        }
        var aM = A();
        for (var aN = 0; aN < aM.length; aN++) {
            if (n > aM[aN].engagementTime && n < aM[aN].engagementTime + 3000) {
                a("#annotation_" + aM[aN].id).mouseover().parent().mouseout()
            } else {
                a("#annotation_" + aM[aN].id).mouseout()
            }
        }
        u(n, o.engagementTime, aP ? aP.t : 0, o.visitTime)
    }

    function A() {
        var aM = [];
        for (var aN = 0; aN < ak.session.pageViews.length; aN++) {
            if (ak.session.pageViews[aN].id === ak.pageviewid) {
                return ak.session.pageViews[aN].annotations
            }
        }
        return null
    }

    function m(aM, aN) {
        return (aN.filter(function(aO) {
            return aO.t >= aM
        })[0] || {
            e: 0
        }).e
    }

    function av() {
        ad("Scheduling events.");
        k();
        var aT = n;
        var aS = [],
            aP = 0,
            aQ = aT;
        for (var aO = 0; aO < o.events.length; aO++) {
            if (o.events[aO].ty >= 14 && o.events[aO].ty <= 20) {
                continue
            }
            if (o.events[aO].ty !== 38 && o.events[aO].t - o.events[aO].e > aP) {
                aP = o.events[aO].t - o.events[aO].e;
                var aU = o.events[aO].t - aQ;
                if (aU > 5000) {
                    ad("Pause found at " + aO + ", e: " + o.events[aO].e + ", inactivity: " + aU + ", displayed in : " + (o.events[aO].e - 4000 - aT) / ag + " ms");
                    aS.push({
                        engagementTime: o.events[aO].e,
                        summarizedInactivityTime: aP
                    });
                    if (o.events[aO].e >= aT) {
                        aA.push(aJ.setTimeout(function(aW, aV) {
                            return function() {
                                ak.showSkippingMessage(true, o.events[aW].e, o.engagementTime, aV)
                            }
                        }(aO, aU), (o.events[aO].e - 3500 - aT) / ag));
                        aA.push(aJ.setTimeout(function(aV) {
                            return function() {
                                ak.showSkippingMessage(false, o.events[aV].e)
                            }
                        }(aO), (o.events[aO].e - 1000 - aT) / ag))
                    }
                }
            }
            if (o.events[aO].ty !== 38) {
                aQ = o.events[aO].t
            }
            if (o.events[aO].e >= aT) {
                y.push(aJ.setTimeout(function(aV) {
                    return function() {
                        ah(o.events[aV])
                    }
                }(aO), (o.events[aO].e - aT - (o.events[aO].ty === 2 ? 100 : 0)) / ag))
            }
        }
        var aN = A();
        for (var aO = 0; aO < aN.length; aO++) {
            h.push(aJ.setTimeout(function(aV) {
                return function() {
                    a("#annotation_" + aV.id).mouseover().parent().mouseout()
                }
            }(aN[aO]), Math.max(0, aN[aO].engagementTime - aT) / ag));
            h.push(aJ.setTimeout(function(aV) {
                return function() {
                    a("#annotation_" + aV.id).mouseout()
                }
            }(aN[aO]), Math.max(0, aN[aO].engagementTime + 3000 - aT) / ag))
        }
        for (var aO = aT; aO < o.engagementTime; aO += 50) {
            var aM = aO;
            aP = 0;
            for (var aR = 0; aR < aS.length; aR++) {
                if (aS[aR].engagementTime < aO) {
                    aP = aS[aR].summarizedInactivityTime
                } else {
                    break
                }
            }
            aM += aP;
            aC.push(aJ.setTimeout(function(aW, aV) {
                return function() {
                    u(aW, o.engagementTime, aV, o.visitTime)
                }
            }(aO, aM), (aO - aT) / ag))
        }
        aC.push(aJ.setTimeout(function() {
            u(o.engagementTime, o.engagementTime, o.visitTime, o.visitTime);
            af()
        }, (o.engagementTime - aT) / ag));
        ad("Scheduled " + y.length + " events")
    }

    function l() {
        var aW = {
            engagementTime: o.engagementTime,
            buckets: [],
            pauses: [],
            clickErrors: []
        };
        var aY = o.engagementTime,
            aN = aY / 200;
        if (aN == 0) {
            return
        }
        for (var aQ = 0; aQ < 200; aQ++) {
            aW.buckets[aQ] = {
                m: 0,
                c: 0,
                k: 0
            }
        }
        var aR = 0,
            aV = 0;
        for (var aQ = 0; aQ < o.events.length; aQ++) {
            var aM = Math.floor(o.events[aQ].e / aN);
            if (aM >= aW.buckets.length) {
                continue
            }
            if (o.events[aQ].ty >= 14 && o.events[aQ].ty <= 20) {
                continue
            }
            if (o.events[aQ].ty !== 38 && o.events[aQ].t - o.events[aQ].e > aR) {
                var aZ = ((3500 / aY) * 100);
                var aX = o.events[aQ].t - aV;
                if (aX > 5000) {
                    aW.pauses.push({
                        start: ((o.events[aQ].e / o.engagementTime) * 100 - aZ).toFixed(2),
                        width: aZ.toFixed(2),
                        time: aX
                    })
                }
                aR = o.events[aQ].t - o.events[aQ].e
            }
            if (o.events[aQ].ty !== 38) {
                aV = o.events[aQ].t
            }
            var aP = o.events[aQ].ty;
            if (aP == 5) {
                aW.buckets[aM].c = 1
            } else {
                if (aP < 8 || (aP > 20 && aP < 33) || aP == 39) {
                    aW.buckets[aM].m = 1
                } else {
                    if (aP < 14 || aP == 33) {
                        aW.buckets[aM].k = 1
                    }
                }
            }
        }
        var aT = -1;
        var aU = -1;
        for (var aQ = 0; aQ < o.events.length; aQ++) {
            var aO = o.events[aQ];
            if (aO.ty == 5) {
                aT = aQ;
                if (aU != -1 && aO.t - o.events[aU].t < 100) {
                    var aS = C(o.events[aU]);
                    aW.clickErrors.push({
                        time: o.events[aU].t,
                        position: o.events[aU].e / o.engagementTime * 99,
                        error: aS
                    });
                    aO.clickError = true
                }
            }
            if (aO.ty == 15) {
                aU = aQ;
                if (aT != -1 && aO.t - o.events[aT].t < 100) {
                    var aS = C(aO);
                    aW.clickErrors.push({
                        time: aO.t,
                        position: aO.e / o.engagementTime * 99,
                        error: aS
                    });
                    o.events[aT].clickError = true
                }
            }
        }
        for (var aQ = 0; aQ < ak.session.pageViews.length; aQ++) {
            if (ak.session.pageViews[aQ].id === ak.pageviewid) {
                aW.annotations = ak.session.pageViews[aQ].annotations
            }
        }
        if (!T && !ak.token) {
            i.user(function(a0) {
                ak.initScrubBar(aW, a0.isAccountOwner)
            })
        } else {
            ak.initScrubBar(aW, false)
        }
    }

    function C(aM) {
        if (o.javascriptErrors) {
            for (var aN = 0; aN < o.javascriptErrors.length; aN++) {
                if (o.javascriptErrors[aN].sequence === aM.x) {
                    return o.javascriptErrors[aN]
                }
            }
        }
        return null
    }

    function Q() {
        ad("Sending init command to dispatcher");
        if (o.initialDom && !p) {
            d[0].style.pointerEvents = "none"
        }
        ai.postMessage(JSON.stringify({
            mfInit: {
                isTouchDevice: L(),
                url: o.url,
                pointersUrlBase: F(),
                pointerStart: B(),
                pointerSet: ak.session.os == "OS X" || ak.session.os == "macOS" ? "Mac" : "",
                iframeZoom: P,
                useCssProxy: o.useCssProxy,
                usingDomMutations: o.initialDom ? true : false
            }
        }), "*");
        if (o.initialDom) {
            ai.postMessage(JSON.stringify({
                ty: 38,
                t: 0,
                v: o.initialDom
            }), "*")
        }
    }

    function au(aN, aM) {
        ai.postMessage(JSON.stringify({
            dimensions: {
                x: aN,
                y: aM
            }
        }), "*")
    }

    function af() {
        ad("Playback finished");
        i.loadSessionData(ak.websiteId, ak.session.id, ak.token, function(aM) {
            ak.session = aM;
            b.html("");
            aj();
            if (!ak.skipToNextPage()) {
                if (ac) {
                    aa()
                } else {
                    if (aJ.location.search.indexOf("sm=0") == -1) {
                        a.magnificPopup.open({
                            items: {
                                src: "#modal-finished"
                            },
                            type: "inline"
                        }, 0)
                    }
                }
            }
        }, az)
    }

    function aa() {
        a.magnificPopup.open({
            items: {
                src: "#modal-next-visitor"
            },
            type: "inline",
            showCloseBtn: false,
            closeOnBgClick: false,
            enableEscapeKey: false
        }, 0);
        Z()
    }

    function Z() {
        a("#nextVisitorErrorMsg").removeClass("notification--visible");
        var aM = aJ.localStorage.getItem("mfLiveExclude") ? JSON.parse(aJ.localStorage.getItem("mfLiveExclude")) : [];
        aM.push(ak.session.id);
        var aN = aJ.location.search.replace("?", "");
        i.findNextLiveSession(ak.websiteId, aM, aN, function(aO) {
            if (aO == "" || aO == ak.session.id) {
                aJ.setTimeout(Z, 30000)
            } else {
                aJ.localStorage.setItem("mfLiveExclude", JSON.stringify(aM));
                aJ.location = "/websites/" + ak.websiteId + "/recordings/" + aO + "/play?" + aN
            }
        }, function() {
            a("#nextVisitorErrorMsg").addClass("notification--visible")
        })
    }

    function u(aN, aO, aM, aP) {
        n = aN;
        ak.updateTime(aN, aO, aM, aP)
    }

    function ar(aN, aM) {
        if (!aN || aN == 0) {
            aN = "100%"
        }
        if (!aM || aM == 0) {
            aM = "600"
        }
        ad("Resizing playback frame to " + aN + " x " + aM);
        d.width(aN).height(aM)
    }

    function at(aN) {
        var aO;
        var aM;
        if (aN === 90 || aN === 270) {
            S = true;
            aO = D();
            aM = J()
        } else {
            S = false;
            aO = J();
            aM = D()
        }
        j();
        ar(aO, aM);
        aL(null, aO, aM)
    }

    function J() {
        return aG < aH ? aG : aH
    }

    function D() {
        return aG > aH ? aG : aH
    }

    function L() {
        return U() || Y()
    }

    function U() {
        return q === "Phone"
    }

    function Y() {
        return q === "Tablet"
    }

    function B() {
        for (var aM = 0; aM < o.events.length; aM++) {
            if (o.events[aM].ty == 2) {
                return {
                    x: o.events[aM].x,
                    y: o.events[aM].y
                }
            }
        }
        return {
            x: 0,
            y: 0
        }
    }

    function E(aO) {
        var aN = "";
        for (var aM = 0; aM < ak.session.pageViews.length; aM++) {
            if (aN == aO) {
                return ak.session.pageViews[aM].id
            }
            aN = ak.session.pageViews[aM].id
        }
        return null
    }

    function G(aN) {
        for (var aM = 1; aM < ak.session.pageViews.length; aM++) {
            if (ak.session.pageViews[aM].id == aN) {
                return ak.session.pageViews[aM - 1].id
            }
        }
        return null
    }

    function s() {
        ak.updateTime(0, o.engagementTime, 0, o.visitTime)
    }

    function g(aM) {
        var aN = ac ? ab.livestream_Title : ab.playback_Title;
        i.websiteList(function(aO) {
            a.each(aO, function(aP, aQ) {
                if (aQ.id == aM) {
                    document.title = aN + " – " + aQ.name + " – " + ab.general_Mouseflow;
                    c.text(aQ.name);
                    return false
                }
            })
        }, function() {})
    }

    function ah(aM) {
        ad("Event. Type: " + aM.ty + ", Time: " + aM.t + ", ETime: " + aM.e + ", X: " + aM.x + ", Y: " + aM.y + (aM.ta ? ", Target: " + aM.ta : "") + (aM.v ? ", Value: " + aM.v : ""));
        r(aM)
    }

    function r(aM) {
        if (aM.ty === 14 || aM.ty === 19 || aM.ty === 20) {
            return
        }
        if (aM.ty === 24) {
            var aP = aM.x;
            at(aP)
        }
        if (aM.ty === 0) {
            if (!L()) {
                ar(aM.x, aM.y);
                aL(null, aM.x, aM.y);
                return
            } else {
                if (aM.x !== aH) {
                    var aN = w(aM) ? 90 : 0;
                    at(aN);
                    return
                }
            }
            ad("Forwarding resize event to dispatcher")
        }
        if (aM.ty === 38 && o.domMutations && aM.v !== 0) {
            for (var aO = 0; aO < o.domMutations.length; aO++) {
                if (o.domMutations[aO].sequence === aM.x) {
                    aM.v = o.domMutations[aO].data;
                    ai.postMessage(JSON.stringify(aM), "*");
                    break
                }
            }
            return
        }
        if (aM.t > o.visitTime - 500 || o.initialDom) {
            aM.disable = true
        }
        ai.postMessage(JSON.stringify(aM), "*")
    }

    function w(aM) {
        return (aM.x / aM.y) > 1
    }

    function ad(aM) {
        if (p) {
            aJ.console.log("MF (" + (+new Date() - aD) + " ms): " + aM)
        }
    }

    function F() {
        if (T) {
            var aM = document.location.href;
            if (aM.indexOf("#") > -1) {
                aM = aM.substring(0, aM.indexOf("#"))
            }
            return aM.replace("recording.html", "") + "img/pointers"
        }
        return document.location.protocol + "//" + document.location.host + "/img/pointers"
    }

    function aL(aM, aO, aN) {
        var aT = aO || (o ? o.viewportWidth : 800);
        var aS = aN || (o ? o.viewportHeight : 600);
        if (L() && ((aT / aS) >= 1) !== S) {
            var aR = aT;
            aT = aS;
            aS = aR
        }
        if (U()) {
            if (S) {
                aT = aT + 112;
                aS = aS + 16
            } else {
                aT = aT + 16;
                aS = aS + 112
            }
        }
        if (Y()) {
            if (S) {
                aT = aT + 132;
                aS = aS + 80
            } else {
                aT = aT + 80;
                aS = aS + 132
            }
        }
        var aU = a(aJ).width() / aT;
        var aP = (a(aJ).height() - 85) / aS;
        var aV = Math.min(P, aU, aP);
        var aQ = a(aJ).width() > aT ? 0.5 : 0;
        if (aU < 1 && aU > aV) {
            aQ = ((aU / aV) - 1) / ((1 / aV) - 1) * 0.5
        }
        if (aV < 1) {
            e.text((aV * 100).toFixed(0) + "% zoom").show()
        } else {
            e.hide()
        }
        M.setTransform(d[0], "scale(" + aV + ")", (aQ * 100).toFixed(0) + "% 0%");
        d.parent().css("height", (d.height() * aV).toFixed(0) + "px")
    }
    return ak
};
var MF = window.MF || {};
MF.Classes = MF.Classes || {};
MF.Classes.OfflineApi = function() {
    var a = {};
    a.loadSessionData = function(f, c, e, d, b) {
        if (MF && MF.RecordingData && MF.RecordingData.session) {
            d(MF.RecordingData.session)
        } else {
            b()
        }
    };
    a.loadPlaybackData = function(g, d, c, f, e, b) {
        if (MF && MF.RecordingData && MF.RecordingData[c]) {
            e(MF.RecordingData[c])
        } else {
            b()
        }
    };
    a.markSessionWatched = function() {};
    return a
};
var MF = window.MF || {};
MF.Classes = MF.Classes || {};
MF.Classes.TagFields = function(a, b) {
    var c = {};
    c.clearTagList = function() {
        a("select.js-refine-tags option").prop("selected", false);
        a("select.js-refine-tags").trigger("chosen:updated")
    };
    c.initTagField = function(f, g) {
        var e = a(f),
            d = e.closest(".form__row").find(".form__tags-list");
        var h;
        if (typeof g == "undefined") {
            var i = e.data("validator");
            h = i ? function(k) {
                var j = new RegExp(i);
                return j.test(k)
            } : null
        } else {
            h = g
        }
        e.tagsManager({
            replace: true,
            prefilled: e.val(),
            tagsContainer: d,
            tagCloseIcon: "×",
            delimiters: [9, 13, 59],
            backspace: [],
            validator: h
        });
        a(".js-add-tag").off("click");
        a(".js-add-tag").on("click", function() {
            var j = a(this).siblings(".form__tags"),
                l = j.val();
            if (l.length) {
                j.focus();
                var k = a.Event("keydown");
                k.which = 9;
                j.trigger(k)
            }
        })
    };
    c.initPageList = function() {
        a(".js-refine-page").chosen({
            disable_search_threshold: 10,
            width: "100%",
            no_results_text: b != undefined ? b.filter_Funnel_NoMatchingPages : "No matching pages",
            inherit_select_classes: true,
            search_contains: true
        })
    };
    c.initTagList = function() {
        a(".js-refine-tags").chosen({
            width: "100%",
            no_results_text: b != undefined ? b.filter_Tags_NoMatchingTags : "No matching tags",
            inherit_select_classes: true
        })
    };
    return c
};
var MF = window.MF || {};
MF.Views = (function(g, a) {
    var c = MF.Classes.Helper(g);
    var f = MF.Classes.TagFields(a);
    var b = MF.Classes.OfflineApi();
    var d = MF.Classes.PlayerModule(a, g, b, c, f, false, null, MF.Lang);
    var e = MF.Classes.PlayerControls(a, d, null, null, null, null, null, null, b, c, null, MF.Lang);
    e.init();
    return {
        player: d
    }
})(window, $);
