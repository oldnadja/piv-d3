/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */

/*!
         * Sizzle CSS Selector Engine v1.10.19
         * http://sizzlejs.com/
         *
         * Copyright 2013 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-04-18
         */

/**
 * @license AngularJS v1.2.21
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */

//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors

//     Underscore may be freely distributed under the MIT license.

/**
 * State-based routing for AngularJS
 * @version v0.2.12
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

!function(global, factory) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = global.document ? factory(global, !0) : function(w) {
        if (!w.document) throw new Error("jQuery requires a window with a document");
        return factory(w);
    } : factory(global);
}("undefined" != typeof window ? window : this, function(window, noGlobal) {
    function isArraylike(obj) {
        var length = obj.length, type = jQuery.type(obj);
        return "function" === type || jQuery.isWindow(obj) ? !1 : 1 === obj.nodeType && length ? !0 : "array" === type || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj;
    }
    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not;
        });
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        });
        if ("string" == typeof qualifier) {
            if (risSimple.test(qualifier)) return jQuery.filter(qualifier, elements, not);
            qualifier = jQuery.filter(qualifier, elements);
        }
        return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) >= 0 !== not;
        });
    }
    function sibling(cur, dir) {
        for (;(cur = cur[dir]) && 1 !== cur.nodeType; ) ;
        return cur;
    }
    function createOptions(options) {
        var object = optionsCache[options] = {};
        return jQuery.each(options.match(rnotwhite) || [], function(_, flag) {
            object[flag] = !0;
        }), object;
    }
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1), 
        jQuery.ready();
    }
    function Data() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = jQuery.expando + Math.random();
    }
    function dataAttr(elem, key, data) {
        var name;
        if (void 0 === data && 1 === elem.nodeType) if (name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase(), 
        data = elem.getAttribute(name), "string" == typeof data) {
            try {
                data = "true" === data ? !0 : "false" === data ? !1 : "null" === data ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
            } catch (e) {}
            data_user.set(elem, key, data);
        } else data = void 0;
        return data;
    }
    function returnTrue() {
        return !0;
    }
    function returnFalse() {
        return !1;
    }
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }
    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(11 !== content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }
    function disableScript(elem) {
        return elem.type = (null !== elem.getAttribute("type")) + "/" + elem.type, elem;
    }
    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        return match ? elem.type = match[1] : elem.removeAttribute("type"), elem;
    }
    function setGlobalEval(elems, refElements) {
        for (var i = 0, l = elems.length; l > i; i++) data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
    }
    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
        if (1 === dest.nodeType) {
            if (data_priv.hasData(src) && (pdataOld = data_priv.access(src), pdataCur = data_priv.set(dest, pdataOld), 
            events = pdataOld.events)) {
                delete pdataCur.handle, pdataCur.events = {};
                for (type in events) for (i = 0, l = events[type].length; l > i; i++) jQuery.event.add(dest, type, events[type][i]);
            }
            data_user.hasData(src) && (udataOld = data_user.access(src), udataCur = jQuery.extend({}, udataOld), 
            data_user.set(dest, udataCur));
        }
    }
    function getAll(context, tag) {
        var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];
        return void 0 === tag || tag && jQuery.nodeName(context, tag) ? jQuery.merge([ context ], ret) : ret;
    }
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();
        "input" === nodeName && rcheckableType.test(src.type) ? dest.checked = src.checked : ("input" === nodeName || "textarea" === nodeName) && (dest.defaultValue = src.defaultValue);
    }
    function actualDisplay(name, doc) {
        var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");
        return elem.detach(), display;
    }
    function defaultDisplay(nodeName) {
        var doc = document, display = elemdisplay[nodeName];
        return display || (display = actualDisplay(nodeName, doc), "none" !== display && display || (iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement), 
        doc = iframe[0].contentDocument, doc.write(), doc.close(), display = actualDisplay(nodeName, doc), 
        iframe.detach()), elemdisplay[nodeName] = display), display;
    }
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;
        return computed = computed || getStyles(elem), computed && (ret = computed.getPropertyValue(name) || computed[name]), 
        computed && ("" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), 
        rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, 
        maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, 
        ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth)), 
        void 0 !== ret ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        return {
            get: function() {
                return conditionFn() ? void delete this.get : (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    function vendorPropName(style, name) {
        if (name in style) return name;
        for (var capName = name[0].toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length; i--; ) if (name = cssPrefixes[i] + capName, 
        name in style) return name;
        return origName;
    }
    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        for (var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0, val = 0; 4 > i; i += 2) "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), 
        isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), 
        "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), 
        "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
        return val;
    }
    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = !0, val = "width" === name ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
        if (0 >= val || null == val) {
            if (val = curCSS(elem, name, styles), (0 > val || null == val) && (val = elem.style[name]), 
            rnumnonpx.test(val)) return val;
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]), 
            val = parseFloat(val) || 0;
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
    }
    function showHide(elements, show) {
        for (var display, elem, hidden, values = [], index = 0, length = elements.length; length > index; index++) elem = elements[index], 
        elem.style && (values[index] = data_priv.get(elem, "olddisplay"), display = elem.style.display, 
        show ? (values[index] || "none" !== display || (elem.style.display = ""), "" === elem.style.display && isHidden(elem) && (values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName)))) : (hidden = isHidden(elem), 
        "none" === display && hidden || data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))));
        for (index = 0; length > index; index++) elem = elements[index], elem.style && (show && "none" !== elem.style.display && "" !== elem.style.display || (elem.style.display = show ? values[index] || "" : "none"));
        return elements;
    }
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    function createFxNow() {
        return setTimeout(function() {
            fxNow = void 0;
        }), fxNow = jQuery.now();
    }
    function genFx(type, includeWidth) {
        var which, i = 0, attrs = {
            height: type
        };
        for (includeWidth = includeWidth ? 1 : 0; 4 > i; i += 2 - includeWidth) which = cssExpand[i], 
        attrs["margin" + which] = attrs["padding" + which] = type;
        return includeWidth && (attrs.opacity = attrs.width = type), attrs;
    }
    function createTween(value, prop, animation) {
        for (var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length; length > index; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHidden(elem), dataShow = data_priv.get(elem, "fxshow");
        opts.queue || (hooks = jQuery._queueHooks(elem, "fx"), null == hooks.unqueued && (hooks.unqueued = 0, 
        oldfire = hooks.empty.fire, hooks.empty.fire = function() {
            hooks.unqueued || oldfire();
        }), hooks.unqueued++, anim.always(function() {
            anim.always(function() {
                hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire();
            });
        })), 1 === elem.nodeType && ("height" in props || "width" in props) && (opts.overflow = [ style.overflow, style.overflowX, style.overflowY ], 
        display = jQuery.css(elem, "display"), checkDisplay = "none" === display ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display, 
        "inline" === checkDisplay && "none" === jQuery.css(elem, "float") && (style.display = "inline-block")), 
        opts.overflow && (style.overflow = "hidden", anim.always(function() {
            style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2];
        }));
        for (prop in props) if (value = props[prop], rfxtypes.exec(value)) {
            if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) {
                if ("show" !== value || !dataShow || void 0 === dataShow[prop]) continue;
                hidden = !0;
            }
            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
        } else display = void 0;
        if (jQuery.isEmptyObject(orig)) "inline" === ("none" === display ? defaultDisplay(elem.nodeName) : display) && (style.display = display); else {
            dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = data_priv.access(elem, "fxshow", {}), 
            toggle && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function() {
                jQuery(elem).hide();
            }), anim.done(function() {
                var prop;
                data_priv.remove(elem, "fxshow");
                for (prop in orig) jQuery.style(elem, prop, orig[prop]);
            });
            for (prop in orig) tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), 
            prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, 
            tween.start = "width" === prop || "height" === prop ? 1 : 0));
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        for (index in props) if (name = jQuery.camelCase(index), easing = specialEasing[name], 
        value = props[index], jQuery.isArray(value) && (easing = value[1], value = props[index] = value[0]), 
        index !== name && (props[name] = value, delete props[index]), hooks = jQuery.cssHooks[name], 
        hooks && "expand" in hooks) {
            value = hooks.expand(value), delete props[name];
            for (index in value) index in props || (props[index] = value[index], specialEasing[index] = easing);
        } else specialEasing[name] = easing;
    }
    function Animation(elem, properties, options) {
        var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
        }), tick = function() {
            if (stopped) return !1;
            for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length; length > index; index++) animation.tweens[index].run(percent);
            return deferred.notifyWith(elem, [ animation, percent, remaining ]), 1 > percent && length ? remaining : (deferred.resolveWith(elem, [ animation ]), 
            !1);
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(!0, {
                specialEasing: {}
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                return animation.tweens.push(tween), tween;
            },
            stop: function(gotoEnd) {
                var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                if (stopped) return this;
                for (stopped = !0; length > index; index++) animation.tweens[index].run(1);
                return gotoEnd ? deferred.resolveWith(elem, [ animation, gotoEnd ]) : deferred.rejectWith(elem, [ animation, gotoEnd ]), 
                this;
            }
        }), props = animation.props;
        for (propFilter(props, animation.opts.specialEasing); length > index; index++) if (result = animationPrefilters[index].call(animation, elem, props, animation.opts)) return result;
        return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), 
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }
    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            "string" != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = "*");
            var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
            if (jQuery.isFunction(func)) for (;dataType = dataTypes[i++]; ) "+" === dataType[0] ? (dataType = dataType.slice(1) || "*", 
            (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func);
        };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        function inspect(dataType) {
            var selected;
            return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), 
                inspect(dataTypeOrTransport), !1);
            }), selected;
        }
        var inspected = {}, seekingTransport = structure === transports;
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) void 0 !== src[key] && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
        return deep && jQuery.extend(!0, target, deep), target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
        for (var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes; "*" === dataTypes[0]; ) dataTypes.shift(), 
        void 0 === ct && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
        if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
        }
        if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                firstDataType || (firstDataType = type);
            }
            finalDataType = finalDataType || firstDataType;
        }
        return finalDataType ? (finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), 
        responses[finalDataType]) : void 0;
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
        if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
        for (current = dataTypes.shift(); current; ) if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), 
        !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), 
        prev = current, current = dataTypes.shift()) if ("*" === current) current = prev; else if ("*" !== prev && prev !== current) {
            if (conv = converters[prev + " " + current] || converters["* " + current], !conv) for (conv2 in converters) if (tmp = conv2.split(" "), 
            tmp[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                conv === !0 ? conv = converters[conv2] : converters[conv2] !== !0 && (current = tmp[0], 
                dataTypes.unshift(tmp[1]));
                break;
            }
            if (conv !== !0) if (conv && s["throws"]) response = conv(response); else try {
                response = conv(response);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: conv ? e : "No conversion from " + prev + " to " + current
                };
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) jQuery.each(obj, function(i, v) {
            traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" == typeof v ? i : "") + "]", v, traditional, add);
        }); else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj); else for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
    }
    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : 9 === elem.nodeType && elem.defaultView;
    }
    var arr = [], slice = arr.slice, concat = arr.concat, push = arr.push, indexOf = arr.indexOf, class2type = {}, toString = class2type.toString, hasOwn = class2type.hasOwnProperty, support = {}, document = window.document, version = "2.1.1", jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
    }, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    };
    jQuery.fn = jQuery.prototype = {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        get: function(num) {
            return null != num ? 0 > num ? this[num + this.length] : this[num] : slice.call(this);
        },
        pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            return ret.prevObject = this, ret.context = this.context, ret;
        },
        each: function(callback, args) {
            return jQuery.each(this, callback, args);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(i) {
            var len = this.length, j = +i + (0 > i ? len : 0);
            return this.pushStack(j >= 0 && len > j ? [ this[j] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: push,
        sort: arr.sort,
        splice: arr.splice
    }, jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = !1;
        for ("boolean" == typeof target && (deep = target, target = arguments[i] || {}, 
        i++), "object" == typeof target || jQuery.isFunction(target) || (target = {}), i === length && (target = this, 
        i--); length > i; i++) if (null != (options = arguments[i])) for (name in options) src = target[name], 
        copy = options[name], target !== copy && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))) ? (copyIsArray ? (copyIsArray = !1, 
        clone = src && jQuery.isArray(src) ? src : []) : clone = src && jQuery.isPlainObject(src) ? src : {}, 
        target[name] = jQuery.extend(deep, clone, copy)) : void 0 !== copy && (target[name] = copy));
        return target;
    }, jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {},
        isFunction: function(obj) {
            return "function" === jQuery.type(obj);
        },
        isArray: Array.isArray,
        isWindow: function(obj) {
            return null != obj && obj === obj.window;
        },
        isNumeric: function(obj) {
            return !jQuery.isArray(obj) && obj - parseFloat(obj) >= 0;
        },
        isPlainObject: function(obj) {
            return "object" !== jQuery.type(obj) || obj.nodeType || jQuery.isWindow(obj) ? !1 : obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(obj) {
            var name;
            for (name in obj) return !1;
            return !0;
        },
        type: function(obj) {
            return null == obj ? obj + "" : "object" == typeof obj || "function" == typeof obj ? class2type[toString.call(obj)] || "object" : typeof obj;
        },
        globalEval: function(code) {
            var script, indirect = eval;
            code = jQuery.trim(code), code && (1 === code.indexOf("use strict") ? (script = document.createElement("script"), 
            script.text = code, document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code));
        },
        camelCase: function(string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        nodeName: function(elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        each: function(obj, callback, args) {
            var value, i = 0, length = obj.length, isArray = isArraylike(obj);
            if (args) {
                if (isArray) for (;length > i && (value = callback.apply(obj[i], args), value !== !1); i++) ; else for (i in obj) if (value = callback.apply(obj[i], args), 
                value === !1) break;
            } else if (isArray) for (;length > i && (value = callback.call(obj[i], i, obj[i]), 
            value !== !1); i++) ; else for (i in obj) if (value = callback.call(obj[i], i, obj[i]), 
            value === !1) break;
            return obj;
        },
        trim: function(text) {
            return null == text ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function(arr, results) {
            var ret = results || [];
            return null != arr && (isArraylike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [ arr ] : arr) : push.call(ret, arr)), 
            ret;
        },
        inArray: function(elem, arr, i) {
            return null == arr ? -1 : indexOf.call(arr, elem, i);
        },
        merge: function(first, second) {
            for (var len = +second.length, j = 0, i = first.length; len > j; j++) first[i++] = second[j];
            return first.length = i, first;
        },
        grep: function(elems, callback, invert) {
            for (var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert; length > i; i++) callbackInverse = !callback(elems[i], i), 
            callbackInverse !== callbackExpect && matches.push(elems[i]);
            return matches;
        },
        map: function(elems, callback, arg) {
            var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
            if (isArray) for (;length > i; i++) value = callback(elems[i], i, arg), null != value && ret.push(value); else for (i in elems) value = callback(elems[i], i, arg), 
            null != value && ret.push(value);
            return concat.apply([], ret);
        },
        guid: 1,
        proxy: function(fn, context) {
            var tmp, args, proxy;
            return "string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), 
            jQuery.isFunction(fn) ? (args = slice.call(arguments, 2), proxy = function() {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy) : void 0;
        },
        now: Date.now,
        support: support
    }), jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    var Sizzle = function(window) {
        function Sizzle(selector, context, results, seed) {
            var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
            if ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), 
            context = context || document, results = results || [], !selector || "string" != typeof selector) return results;
            if (1 !== (nodeType = context.nodeType) && 9 !== nodeType) return [];
            if (documentIsHTML && !seed) {
                if (match = rquickExpr.exec(selector)) if (m = match[1]) {
                    if (9 === nodeType) {
                        if (elem = context.getElementById(m), !elem || !elem.parentNode) return results;
                        if (elem.id === m) return results.push(elem), results;
                    } else if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), 
                    results;
                } else {
                    if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), 
                    results;
                    if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), 
                    results;
                }
                if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    if (nid = old = expando, newContext = context, newSelector = 9 === nodeType && selector, 
                    1 === nodeType && "object" !== context.nodeName.toLowerCase()) {
                        for (groups = tokenize(selector), (old = context.getAttribute("id")) ? nid = old.replace(rescape, "\\$&") : context.setAttribute("id", nid), 
                        nid = "[id='" + nid + "'] ", i = groups.length; i--; ) groups[i] = nid + toSelector(groups[i]);
                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context, 
                        newSelector = groups.join(",");
                    }
                    if (newSelector) try {
                        return push.apply(results, newContext.querySelectorAll(newSelector)), results;
                    } catch (qsaError) {} finally {
                        old || context.removeAttribute("id");
                    }
                }
            }
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
            function cache(key, value) {
                return keys.push(key + " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key + " "] = value;
            }
            var keys = [];
            return cache;
        }
        function markFunction(fn) {
            return fn[expando] = !0, fn;
        }
        function assert(fn) {
            var div = document.createElement("div");
            try {
                return !!fn(div);
            } catch (e) {
                return !1;
            } finally {
                div.parentNode && div.parentNode.removeChild(div), div = null;
            }
        }
        function addHandle(attrs, handler) {
            for (var arr = attrs.split("|"), i = attrs.length; i--; ) Expr.attrHandle[arr[i]] = handler;
        }
        function siblingCheck(a, b) {
            var cur = b && a, diff = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
            if (diff) return diff;
            if (cur) for (;cur = cur.nextSibling; ) if (cur === b) return -1;
            return a ? 1 : -1;
        }
        function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return "input" === name && elem.type === type;
            };
        }
        function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return ("input" === name || "button" === name) && elem.type === type;
            };
        }
        function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                return argument = +argument, markFunction(function(seed, matches) {
                    for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--; ) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]));
                });
            });
        }
        function testContext(context) {
            return context && typeof context.getElementsByTagName !== strundefined && context;
        }
        function setFilters() {}
        function toSelector(tokens) {
            for (var i = 0, len = tokens.length, selector = ""; len > i; i++) selector += tokens[i].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, checkNonElements = base && "parentNode" === dir, doneName = done++;
            return combinator.first ? function(elem, context, xml) {
                for (;elem = elem[dir]; ) if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml);
            } : function(elem, context, xml) {
                var oldCache, outerCache, newCache = [ dirruns, doneName ];
                if (xml) {
                    for (;elem = elem[dir]; ) if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0;
                } else for (;elem = elem[dir]; ) if (1 === elem.nodeType || checkNonElements) {
                    if (outerCache = elem[expando] || (elem[expando] = {}), (oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2];
                    if (outerCache[dir] = newCache, newCache[2] = matcher(elem, context, xml)) return !0;
                }
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                for (var i = matchers.length; i--; ) if (!matchers[i](elem, context, xml)) return !1;
                return !0;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            for (var i = 0, len = contexts.length; len > i; i++) Sizzle(selector, contexts[i], results);
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; len > i; i++) (elem = unmatched[i]) && (!filter || filter(elem, context, xml)) && (newUnmatched.push(elem), 
            mapped && map.push(i));
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), 
            postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), 
            markFunction(function(seed, results, context, xml) {
                var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml), matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter) for (temp = condense(matcherOut, postMap), 
                postFilter(temp, [], context, xml), i = temp.length; i--; ) (elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            for (temp = [], i = matcherOut.length; i--; ) (elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        for (i = matcherOut.length; i--; ) (elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1 && (seed[temp] = !(results[temp] = elem));
                    }
                } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), 
                postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut);
            });
        }
        function matcherFromTokens(tokens) {
            for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                return indexOf.call(checkContext, elem) > -1;
            }, implicitRelative, !0), matchers = [ function(elem, context, xml) {
                return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            } ]; len > i; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator(elementMatcher(matchers), matcher) ]; else {
                if (matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches), matcher[expando]) {
                    for (j = ++i; len > j && !Expr.relative[tokens[j].type]; j++) ;
                    return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                        value: " " === tokens[i - 2].type ? "*" : ""
                    })).replace(rtrim, "$1"), matcher, j > i && matcherFromTokens(tokens.slice(i, j)), len > j && matcherFromTokens(tokens = tokens.slice(j)), len > j && toSelector(tokens));
                }
                matchers.push(matcher);
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1, len = elems.length;
                for (outermost && (outermostContext = context !== document && context); i !== len && null != (elem = elems[i]); i++) {
                    if (byElement && elem) {
                        for (j = 0; matcher = elementMatchers[j++]; ) if (matcher(elem, context, xml)) {
                            results.push(elem);
                            break;
                        }
                        outermost && (dirruns = dirrunsUnique);
                    }
                    bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem));
                }
                if (matchedCount += i, bySet && i !== matchedCount) {
                    for (j = 0; matcher = setMatchers[j++]; ) matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        if (matchedCount > 0) for (;i--; ) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                        setMatched = condense(setMatched);
                    }
                    push.apply(results, setMatched), outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1 && Sizzle.uniqueSort(results);
                }
                return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), 
                unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + -new Date(), preferredDoc = window.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder = function(a, b) {
            return a === b && (hasDuplicate = !0), 0;
        }, strundefined = "undefined", MAX_NEGATIVE = 1 << 31, hasOwn = {}.hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push = arr.push, slice = arr.slice, indexOf = arr.indexOf || function(elem) {
            for (var i = 0, len = this.length; len > i; i++) if (this[i] === elem) return i;
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", identifier = characterEncoding.replace("w", "w#"), attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + characterEncoding + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|.*)\\)|)", rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, rescape = /'|\\/g, runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), funescape = function(_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace ? escaped : 0 > high ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320);
        };
        try {
            push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), 
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ? function(target, els) {
                    push_native.apply(target, slice.call(els));
                } : function(target, els) {
                    for (var j = target.length, i = 0; target[j++] = els[i++]; ) ;
                    target.length = j - 1;
                }
            };
        }
        support = Sizzle.support = {}, isXML = Sizzle.isXML = function(elem) {
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? "HTML" !== documentElement.nodeName : !1;
        }, setDocument = Sizzle.setDocument = function(node) {
            var hasCompare, doc = node ? node.ownerDocument || node : preferredDoc, parent = doc.defaultView;
            return doc !== document && 9 === doc.nodeType && doc.documentElement ? (document = doc, 
            docElem = doc.documentElement, documentIsHTML = !isXML(doc), parent && parent !== parent.top && (parent.addEventListener ? parent.addEventListener("unload", function() {
                setDocument();
            }, !1) : parent.attachEvent && parent.attachEvent("onunload", function() {
                setDocument();
            })), support.attributes = assert(function(div) {
                return div.className = "i", !div.getAttribute("className");
            }), support.getElementsByTagName = assert(function(div) {
                return div.appendChild(doc.createComment("")), !div.getElementsByTagName("*").length;
            }), support.getElementsByClassName = rnative.test(doc.getElementsByClassName) && assert(function(div) {
                return div.innerHTML = "<div class='a'></div><div class='a i'></div>", div.firstChild.className = "i", 
                2 === div.getElementsByClassName("i").length;
            }), support.getById = assert(function(div) {
                return docElem.appendChild(div).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length;
            }), support.getById ? (Expr.find.ID = function(id, context) {
                if (typeof context.getElementById !== strundefined && documentIsHTML) {
                    var m = context.getElementById(id);
                    return m && m.parentNode ? [ m ] : [];
                }
            }, Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    return elem.getAttribute("id") === attrId;
                };
            }) : (delete Expr.find.ID, Expr.filter.ID = function(id) {
                var attrId = id.replace(runescape, funescape);
                return function(elem) {
                    var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                    return node && node.value === attrId;
                };
            }), Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
                return typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName(tag) : void 0;
            } : function(tag, context) {
                var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
                if ("*" === tag) {
                    for (;elem = results[i++]; ) 1 === elem.nodeType && tmp.push(elem);
                    return tmp;
                }
                return results;
            }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                return typeof context.getElementsByClassName !== strundefined && documentIsHTML ? context.getElementsByClassName(className) : void 0;
            }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function(div) {
                div.innerHTML = "<select msallowclip=''><option selected=''></option></select>", 
                div.querySelectorAll("[msallowclip^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), 
                div.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), 
                div.querySelectorAll(":checked").length || rbuggyQSA.push(":checked");
            }), assert(function(div) {
                var input = doc.createElement("input");
                input.setAttribute("type", "hidden"), div.appendChild(input).setAttribute("name", "D"), 
                div.querySelectorAll("[name=d]").length && rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="), 
                div.querySelectorAll(":enabled").length || rbuggyQSA.push(":enabled", ":disabled"), 
                div.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:");
            })), (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(div) {
                support.disconnectedMatch = matches.call(div, "div"), matches.call(div, "[s!='']:x"), 
                rbuggyMatches.push("!=", pseudos);
            }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), 
            hasCompare = rnative.test(docElem.compareDocumentPosition), contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = 9 === a.nodeType ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, sortOrder = hasCompare ? function(a, b) {
                if (a === b) return hasDuplicate = !0, 0;
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return compare ? compare : (compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ? -1 : b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0 : 4 & compare ? -1 : 1);
            } : function(a, b) {
                if (a === b) return hasDuplicate = !0, 0;
                var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];
                if (!aup || !bup) return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                if (aup === bup) return siblingCheck(a, b);
                for (cur = a; cur = cur.parentNode; ) ap.unshift(cur);
                for (cur = b; cur = cur.parentNode; ) bp.unshift(cur);
                for (;ap[i] === bp[i]; ) i++;
                return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            }, doc) : document;
        }, Sizzle.matches = function(expr, elements) {
            return Sizzle(expr, null, null, elements);
        }, Sizzle.matchesSelector = function(elem, expr) {
            if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), 
            !(!support.matchesSelector || !documentIsHTML || rbuggyMatches && rbuggyMatches.test(expr) || rbuggyQSA && rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret;
            } catch (e) {}
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        }, Sizzle.contains = function(context, elem) {
            return (context.ownerDocument || context) !== document && setDocument(context), 
            contains(context, elem);
        }, Sizzle.attr = function(elem, name) {
            (elem.ownerDocument || elem) !== document && setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
            return void 0 !== val ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }, Sizzle.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        }, Sizzle.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i = 0;
            if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), 
            results.sort(sortOrder), hasDuplicate) {
                for (;elem = results[i++]; ) elem === results[i] && (j = duplicates.push(i));
                for (;j--; ) results.splice(duplicates[j], 1);
            }
            return sortInput = null, results;
        }, getText = Sizzle.getText = function(elem) {
            var node, ret = "", i = 0, nodeType = elem.nodeType;
            if (nodeType) {
                if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                    if ("string" == typeof elem.textContent) return elem.textContent;
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem);
                } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue;
            } else for (;node = elem[i++]; ) ret += getText(node);
            return ret;
        }, Expr = Sizzle.selectors = {
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(match) {
                    return match[1] = match[1].replace(runescape, funescape), match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape), 
                    "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4);
                },
                CHILD: function(match) {
                    return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), 
                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), 
                    match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), 
                    match;
                },
                PSEUDO: function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    return matchExpr.CHILD.test(match[0]) ? null : (match[3] ? match[2] = match[4] || match[5] || "" : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), 
                    match[2] = unquoted.slice(0, excess)), match.slice(0, 3));
                }
            },
            filter: {
                TAG: function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return "*" === nodeNameSelector ? function() {
                        return !0;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                CLASS: function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                        return pattern.test("string" == typeof elem.className && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
                    });
                },
                ATTR: function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle.attr(elem, name);
                        return null == result ? "!=" === operator : operator ? (result += "", "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && result.indexOf(check) > -1 : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? (" " + result + " ").indexOf(check) > -1 : "|=" === operator ? result === check || result.slice(0, check.length + 1) === check + "-" : !1) : !0;
                    };
                },
                CHILD: function(type, what, argument, first, last) {
                    var simple = "nth" !== type.slice(0, 3), forward = "last" !== type.slice(-4), ofType = "of-type" === what;
                    return 1 === first && 0 === last ? function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, context, xml) {
                        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
                        if (parent) {
                            if (simple) {
                                for (;dir; ) {
                                    for (node = elem; node = node[dir]; ) if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                                    start = dir = "only" === type && !start && "nextSibling";
                                }
                                return !0;
                            }
                            if (start = [ forward ? parent.firstChild : parent.lastChild ], forward && useCache) {
                                for (outerCache = parent[expando] || (parent[expando] = {}), cache = outerCache[type] || [], 
                                nodeIndex = cache[0] === dirruns && cache[1], diff = cache[0] === dirruns && cache[2], 
                                node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop(); ) if (1 === node.nodeType && ++diff && node === elem) {
                                    outerCache[type] = [ dirruns, nodeIndex, diff ];
                                    break;
                                }
                            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) diff = cache[1]; else for (;(node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && ((node[expando] || (node[expando] = {}))[type] = [ dirruns, diff ]), 
                            node !== elem)); ) ;
                            return diff -= last, diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                PSEUDO: function(pseudo, argument) {
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                    return fn[expando] ? fn(argument) : fn.length > 1 ? (args = [ pseudo, pseudo, "", argument ], 
                    Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                        for (var idx, matched = fn(seed, argument), i = matched.length; i--; ) idx = indexOf.call(seed, matched[i]), 
                        seed[idx] = !(matches[idx] = matched[i]);
                    }) : function(elem) {
                        return fn(elem, 0, args);
                    }) : fn;
                }
            },
            pseudos: {
                not: markFunction(function(selector) {
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                        for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--; ) (elem = unmatched[i]) && (seed[i] = !(matches[i] = elem));
                    }) : function(elem, context, xml) {
                        return input[0] = elem, matcher(input, null, xml, results), !results.pop();
                    };
                }),
                has: markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                contains: markFunction(function(text) {
                    return function(elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                lang: markFunction(function(lang) {
                    return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), 
                    lang = lang.replace(runescape, funescape).toLowerCase(), function(elem) {
                        var elemLang;
                        do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return elemLang = elemLang.toLowerCase(), 
                        elemLang === lang || 0 === elemLang.indexOf(lang + "-"); while ((elem = elem.parentNode) && 1 === elem.nodeType);
                        return !1;
                    };
                }),
                target: function(elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                root: function(elem) {
                    return elem === docElem;
                },
                focus: function(elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                enabled: function(elem) {
                    return elem.disabled === !1;
                },
                disabled: function(elem) {
                    return elem.disabled === !0;
                },
                checked: function(elem) {
                    var nodeName = elem.nodeName.toLowerCase();
                    return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected;
                },
                selected: function(elem) {
                    return elem.parentNode && elem.parentNode.selectedIndex, elem.selected === !0;
                },
                empty: function(elem) {
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(elem) {
                    return !Expr.pseudos.empty(elem);
                },
                header: function(elem) {
                    return rheader.test(elem.nodeName);
                },
                input: function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                button: function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return "input" === name && "button" === elem.type || "button" === name;
                },
                text: function(elem) {
                    var attr;
                    return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || "text" === attr.toLowerCase());
                },
                first: createPositionalPseudo(function() {
                    return [ 0 ];
                }),
                last: createPositionalPseudo(function(matchIndexes, length) {
                    return [ length - 1 ];
                }),
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    return [ 0 > argument ? argument + length : argument ];
                }),
                even: createPositionalPseudo(function(matchIndexes, length) {
                    for (var i = 0; length > i; i += 2) matchIndexes.push(i);
                    return matchIndexes;
                }),
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    for (var i = 1; length > i; i += 2) matchIndexes.push(i);
                    return matchIndexes;
                }),
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    for (var i = 0 > argument ? argument + length : argument; --i >= 0; ) matchIndexes.push(i);
                    return matchIndexes;
                }),
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    for (var i = 0 > argument ? argument + length : argument; ++i < length; ) matchIndexes.push(i);
                    return matchIndexes;
                })
            }
        }, Expr.pseudos.nth = Expr.pseudos.eq;
        for (i in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) Expr.pseudos[i] = createInputPseudo(i);
        for (i in {
            submit: !0,
            reset: !0
        }) Expr.pseudos[i] = createButtonPseudo(i);
        return setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters(), 
        tokenize = Sizzle.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar; ) {
                (!matched || (match = rcomma.exec(soFar))) && (match && (soFar = soFar.slice(match[0].length) || soFar), 
                groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), 
                tokens.push({
                    value: matched,
                    type: match[0].replace(rtrim, " ")
                }), soFar = soFar.slice(matched.length));
                for (type in Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), 
                tokens.push({
                    value: matched,
                    type: type,
                    matches: match
                }), soFar = soFar.slice(matched.length));
                if (!matched) break;
            }
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
        }, compile = Sizzle.compile = function(selector, match) {
            var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                for (match || (match = tokenize(selector)), i = match.length; i--; ) cached = matcherFromTokens(match[i]), 
                cached[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)), 
                cached.selector = selector;
            }
            return cached;
        }, select = Sizzle.select = function(selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = "function" == typeof selector && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            if (results = results || [], 1 === match.length) {
                if (tokens = match[0] = match[0].slice(0), tokens.length > 2 && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                    if (context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0], 
                    !context) return results;
                    compiled && (context = context.parentNode), selector = selector.slice(tokens.shift().value.length);
                }
                for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], 
                !Expr.relative[type = token.type]); ) if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                    if (tokens.splice(i, 1), selector = seed.length && toSelector(tokens), !selector) return push.apply(results, seed), 
                    results;
                    break;
                }
            }
            return (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context), 
            results;
        }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, 
        support.detectDuplicates = !!hasDuplicate, setDocument(), support.sortDetached = assert(function(div1) {
            return 1 & div1.compareDocumentPosition(document.createElement("div"));
        }), assert(function(div) {
            return div.innerHTML = "<a href='#'></a>", "#" === div.firstChild.getAttribute("href");
        }) || addHandle("type|href|height|width", function(elem, name, isXML) {
            return isXML ? void 0 : elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2);
        }), support.attributes && assert(function(div) {
            return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), "" === div.firstChild.getAttribute("value");
        }) || addHandle("value", function(elem, name, isXML) {
            return isXML || "input" !== elem.nodeName.toLowerCase() ? void 0 : elem.defaultValue;
        }), assert(function(div) {
            return null == div.getAttribute("disabled");
        }) || addHandle(booleans, function(elem, name, isXML) {
            var val;
            return isXML ? void 0 : elem[name] === !0 ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }), Sizzle;
    }(window);
    jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, 
    jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, 
    jQuery.contains = Sizzle.contains;
    var rneedsContext = jQuery.expr.match.needsContext, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, risSimple = /^.[^:#\[\.,]*$/;
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
            return 1 === elem.nodeType;
        }));
    }, jQuery.fn.extend({
        find: function(selector) {
            var i, len = this.length, ret = [], self = this;
            if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; len > i; i++) if (jQuery.contains(self[i], this)) return !0;
            }));
            for (i = 0; len > i; i++) jQuery.find(selector, self[i], ret);
            return ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret), ret.selector = this.selector ? this.selector + " " + selector : selector, 
            ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], !1));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], !0));
        },
        is: function(selector) {
            return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length;
        }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, init = jQuery.fn.init = function(selector, context) {
        var match, elem;
        if (!selector) return this;
        if ("string" == typeof selector) {
            if (match = "<" === selector[0] && ">" === selector[selector.length - 1] && selector.length >= 3 ? [ null, selector, null ] : rquickExpr.exec(selector), 
            !match || !match[1] && context) return !context || context.jquery ? (context || rootjQuery).find(selector) : this.constructor(context).find(selector);
            if (match[1]) {
                if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), 
                rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                return this;
            }
            return elem = document.getElementById(match[2]), elem && elem.parentNode && (this.length = 1, 
            this[0] = elem), this.context = document, this.selector = selector, this;
        }
        return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, 
        this) : jQuery.isFunction(selector) ? "undefined" != typeof rootjQuery.ready ? rootjQuery.ready(selector) : selector(jQuery) : (void 0 !== selector.selector && (this.selector = selector.selector, 
        this.context = selector.context), jQuery.makeArray(selector, this));
    };
    init.prototype = jQuery.fn, rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    jQuery.extend({
        dir: function(elem, dir, until) {
            for (var matched = [], truncate = void 0 !== until; (elem = elem[dir]) && 9 !== elem.nodeType; ) if (1 === elem.nodeType) {
                if (truncate && jQuery(elem).is(until)) break;
                matched.push(elem);
            }
            return matched;
        },
        sibling: function(n, elem) {
            for (var matched = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && matched.push(n);
            return matched;
        }
    }), jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                for (var i = 0; l > i; i++) if (jQuery.contains(this, targets[i])) return !0;
            });
        },
        closest: function(selectors, context) {
            for (var cur, i = 0, l = this.length, matched = [], pos = rneedsContext.test(selectors) || "string" != typeof selectors ? jQuery(selectors, context || this.context) : 0; l > i; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                matched.push(cur);
                break;
            }
            return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
        },
        index: function(elem) {
            return elem ? "string" == typeof elem ? indexOf.call(jQuery(elem), this[0]) : indexOf.call(this, elem.jquery ? elem[0] : elem) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector));
        }
    }), jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && 11 !== parent.nodeType ? parent : null;
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function(elem) {
            return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            return "Until" !== name.slice(-5) && (selector = until), selector && "string" == typeof selector && (matched = jQuery.filter(selector, matched)), 
            this.length > 1 && (guaranteedUnique[name] || jQuery.unique(matched), rparentsprev.test(name) && matched.reverse()), 
            this.pushStack(matched);
        };
    });
    var rnotwhite = /\S+/g, optionsCache = {};
    jQuery.Callbacks = function(options) {
        options = "string" == typeof options ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
        var memory, fired, firing, firingStart, firingLength, firingIndex, list = [], stack = !options.once && [], fire = function(data) {
            for (memory = options.memory && data, fired = !0, firingIndex = firingStart || 0, 
            firingStart = 0, firingLength = list.length, firing = !0; list && firingLength > firingIndex; firingIndex++) if (list[firingIndex].apply(data[0], data[1]) === !1 && options.stopOnFalse) {
                memory = !1;
                break;
            }
            firing = !1, list && (stack ? stack.length && fire(stack.shift()) : memory ? list = [] : self.disable());
        }, self = {
            add: function() {
                if (list) {
                    var start = list.length;
                    !function add(args) {
                        jQuery.each(args, function(_, arg) {
                            var type = jQuery.type(arg);
                            "function" === type ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== type && add(arg);
                        });
                    }(arguments), firing ? firingLength = list.length : memory && (firingStart = start, 
                    fire(memory));
                }
                return this;
            },
            remove: function() {
                return list && jQuery.each(arguments, function(_, arg) {
                    for (var index; (index = jQuery.inArray(arg, list, index)) > -1; ) list.splice(index, 1), 
                    firing && (firingLength >= index && firingLength--, firingIndex >= index && firingIndex--);
                }), this;
            },
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : !(!list || !list.length);
            },
            empty: function() {
                return list = [], firingLength = 0, this;
            },
            disable: function() {
                return list = stack = memory = void 0, this;
            },
            disabled: function() {
                return !list;
            },
            lock: function() {
                return stack = void 0, memory || self.disable(), this;
            },
            locked: function() {
                return !stack;
            },
            fireWith: function(context, args) {
                return !list || fired && !stack || (args = args || [], args = [ context, args.slice ? args.slice() : args ], 
                firing ? stack.push(args) : fire(args)), this;
            },
            fire: function() {
                return self.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!fired;
            }
        };
        return self;
    }, jQuery.extend({
        Deferred: function(func) {
            var tuples = [ [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    return deferred.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(i, tuple) {
                            var fn = jQuery.isFunction(fns[i]) && fns[i];
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                returned && jQuery.isFunction(returned.promise) ? returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify) : newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                            });
                        }), fns = null;
                    }).promise();
                },
                promise: function(obj) {
                    return null != obj ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {};
            return promise.pipe = promise.then, jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2], stateString = tuple[3];
                promise[tuple[1]] = list.add, stateString && list.add(function() {
                    state = stateString;
                }, tuples[1 ^ i][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function() {
                    return deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments), 
                    this;
                }, deferred[tuple[0] + "With"] = list.fireWith;
            }), promise.promise(deferred), func && func.call(deferred, deferred), deferred;
        },
        when: function(subordinate) {
            var progressValues, progressContexts, resolveContexts, i = 0, resolveValues = slice.call(arguments), length = resolveValues.length, remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = 1 === remaining ? subordinate : jQuery.Deferred(), updateFunc = function(i, contexts, values) {
                return function(value) {
                    contexts[i] = this, values[i] = arguments.length > 1 ? slice.call(arguments) : value, 
                    values === progressValues ? deferred.notifyWith(contexts, values) : --remaining || deferred.resolveWith(contexts, values);
                };
            };
            if (length > 1) for (progressValues = new Array(length), progressContexts = new Array(length), 
            resolveContexts = new Array(length); length > i; i++) resolveValues[i] && jQuery.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues)) : --remaining;
            return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise();
        }
    });
    var readyList;
    jQuery.fn.ready = function(fn) {
        return jQuery.ready.promise().done(fn), this;
    }, jQuery.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(hold) {
            hold ? jQuery.readyWait++ : jQuery.ready(!0);
        },
        ready: function(wait) {
            (wait === !0 ? --jQuery.readyWait : jQuery.isReady) || (jQuery.isReady = !0, wait !== !0 && --jQuery.readyWait > 0 || (readyList.resolveWith(document, [ jQuery ]), 
            jQuery.fn.triggerHandler && (jQuery(document).triggerHandler("ready"), jQuery(document).off("ready"))));
        }
    }), jQuery.ready.promise = function(obj) {
        return readyList || (readyList = jQuery.Deferred(), "complete" === document.readyState ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed, !1), 
        window.addEventListener("load", completed, !1))), readyList.promise(obj);
    }, jQuery.ready.promise();
    var access = jQuery.access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0, len = elems.length, bulk = null == key;
        if ("object" === jQuery.type(key)) {
            chainable = !0;
            for (i in key) jQuery.access(elems, fn, i, key[i], !0, emptyGet, raw);
        } else if (void 0 !== value && (chainable = !0, jQuery.isFunction(value) || (raw = !0), 
        bulk && (raw ? (fn.call(elems, value), fn = null) : (bulk = fn, fn = function(elem, key, value) {
            return bulk.call(jQuery(elem), value);
        })), fn)) for (;len > i; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
    };
    jQuery.acceptData = function(owner) {
        return 1 === owner.nodeType || 9 === owner.nodeType || !+owner.nodeType;
    }, Data.uid = 1, Data.accepts = jQuery.acceptData, Data.prototype = {
        key: function(owner) {
            if (!Data.accepts(owner)) return 0;
            var descriptor = {}, unlock = owner[this.expando];
            if (!unlock) {
                unlock = Data.uid++;
                try {
                    descriptor[this.expando] = {
                        value: unlock
                    }, Object.defineProperties(owner, descriptor);
                } catch (e) {
                    descriptor[this.expando] = unlock, jQuery.extend(owner, descriptor);
                }
            }
            return this.cache[unlock] || (this.cache[unlock] = {}), unlock;
        },
        set: function(owner, data, value) {
            var prop, unlock = this.key(owner), cache = this.cache[unlock];
            if ("string" == typeof data) cache[data] = value; else if (jQuery.isEmptyObject(cache)) jQuery.extend(this.cache[unlock], data); else for (prop in data) cache[prop] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            var cache = this.cache[this.key(owner)];
            return void 0 === key ? cache : cache[key];
        },
        access: function(owner, key, value) {
            var stored;
            return void 0 === key || key && "string" == typeof key && void 0 === value ? (stored = this.get(owner, key), 
            void 0 !== stored ? stored : this.get(owner, jQuery.camelCase(key))) : (this.set(owner, key, value), 
            void 0 !== value ? value : key);
        },
        remove: function(owner, key) {
            var i, name, camel, unlock = this.key(owner), cache = this.cache[unlock];
            if (void 0 === key) this.cache[unlock] = {}; else {
                jQuery.isArray(key) ? name = key.concat(key.map(jQuery.camelCase)) : (camel = jQuery.camelCase(key), 
                key in cache ? name = [ key, camel ] : (name = camel, name = name in cache ? [ name ] : name.match(rnotwhite) || [])), 
                i = name.length;
                for (;i--; ) delete cache[name[i]];
            }
        },
        hasData: function(owner) {
            return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
        },
        discard: function(owner) {
            owner[this.expando] && delete this.cache[owner[this.expando]];
        }
    };
    var data_priv = new Data(), data_user = new Data(), rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;
    jQuery.extend({
        hasData: function(elem) {
            return data_user.hasData(elem) || data_priv.hasData(elem);
        },
        data: function(elem, name, data) {
            return data_user.access(elem, name, data);
        },
        removeData: function(elem, name) {
            data_user.remove(elem, name);
        },
        _data: function(elem, name, data) {
            return data_priv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            data_priv.remove(elem, name);
        }
    }), jQuery.fn.extend({
        data: function(key, value) {
            var i, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (void 0 === key) {
                if (this.length && (data = data_user.get(elem), 1 === elem.nodeType && !data_priv.get(elem, "hasDataAttrs"))) {
                    for (i = attrs.length; i--; ) attrs[i] && (name = attrs[i].name, 0 === name.indexOf("data-") && (name = jQuery.camelCase(name.slice(5)), 
                    dataAttr(elem, name, data[name])));
                    data_priv.set(elem, "hasDataAttrs", !0);
                }
                return data;
            }
            return "object" == typeof key ? this.each(function() {
                data_user.set(this, key);
            }) : access(this, function(value) {
                var data, camelKey = jQuery.camelCase(key);
                if (elem && void 0 === value) {
                    if (data = data_user.get(elem, key), void 0 !== data) return data;
                    if (data = data_user.get(elem, camelKey), void 0 !== data) return data;
                    if (data = dataAttr(elem, camelKey, void 0), void 0 !== data) return data;
                } else this.each(function() {
                    var data = data_user.get(this, camelKey);
                    data_user.set(this, camelKey, value), -1 !== key.indexOf("-") && void 0 !== data && data_user.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, !0);
        },
        removeData: function(key) {
            return this.each(function() {
                data_user.remove(this, key);
            });
        }
    }), jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            return elem ? (type = (type || "fx") + "queue", queue = data_priv.get(elem, type), 
            data && (!queue || jQuery.isArray(data) ? queue = data_priv.access(elem, type, jQuery.makeArray(data)) : queue.push(data)), 
            queue || []) : void 0;
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            "inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), 
            delete hooks.stop, fn.call(elem, next, hooks)), !startLength && hooks && hooks.empty.fire();
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return data_priv.get(elem, key) || data_priv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    data_priv.remove(elem, [ type + "queue", key ]);
                })
            });
        }
    }), jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : void 0 === data ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                --count || defer.resolveWith(elements, [ elements ]);
            };
            for ("string" != typeof type && (obj = type, type = void 0), type = type || "fx"; i--; ) tmp = data_priv.get(elements[i], type + "queueHooks"), 
            tmp && tmp.empty && (count++, tmp.empty.add(resolve));
            return resolve(), defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, cssExpand = [ "Top", "Right", "Bottom", "Left" ], isHidden = function(elem, el) {
        return elem = el || elem, "none" === jQuery.css(elem, "display") || !jQuery.contains(elem.ownerDocument, elem);
    }, rcheckableType = /^(?:checkbox|radio)$/i;
    !function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        input.setAttribute("type", "radio"), input.setAttribute("checked", "checked"), input.setAttribute("name", "t"), 
        div.appendChild(input), support.checkClone = div.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        div.innerHTML = "<textarea>x</textarea>", support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue;
    }();
    var strundefined = "undefined";
    support.focusinBubbles = "onfocusin" in window;
    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.get(elem);
            if (elemData) for (handler.handler && (handleObjIn = handler, handler = handleObjIn.handler, 
            selector = handleObjIn.selector), handler.guid || (handler.guid = jQuery.guid++), 
            (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || (eventHandle = elemData.handle = function(e) {
                return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
            }), types = (types || "").match(rnotwhite) || [ "" ], t = types.length; t--; ) tmp = rtypenamespace.exec(types[t]) || [], 
            type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, 
            type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, 
            handleObj = jQuery.extend({
                type: type,
                origType: origType,
                data: data,
                handler: handler,
                guid: handler.guid,
                selector: selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
            }, handleObjIn), (handlers = events[type]) || (handlers = events[type] = [], handlers.delegateCount = 0, 
            special.setup && special.setup.call(elem, data, namespaces, eventHandle) !== !1 || elem.addEventListener && elem.addEventListener(type, eventHandle, !1)), 
            special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), 
            selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), 
            jQuery.event.global[type] = !0);
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.hasData(elem) && data_priv.get(elem);
            if (elemData && (events = elemData.events)) {
                for (types = (types || "").match(rnotwhite) || [ "" ], t = types.length; t--; ) if (tmp = rtypenamespace.exec(types[t]) || [], 
                type = origType = tmp[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
                    for (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, 
                    handlers = events[type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    origCount = j = handlers.length; j--; ) handleObj = handlers[j], !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), 
                    handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                    origCount && !handlers.length && (special.teardown && special.teardown.call(elem, namespaces, elemData.handle) !== !1 || jQuery.removeEvent(elem, type, elemData.handle), 
                    delete events[type]);
                } else for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                jQuery.isEmptyObject(events) && (delete elemData.handle, data_priv.remove(elem, "events"));
            }
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (type.indexOf(".") >= 0 && (namespaces = type.split("."), 
            type = namespaces.shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, 
            event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" == typeof event && event), 
            event.isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), 
            event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            event.result = void 0, event.target || (event.target = elem), data = null == data ? [ event ] : jQuery.makeArray(data, [ event ]), 
            special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || special.trigger.apply(elem, data) !== !1)) {
                if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                    for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), 
                    tmp = cur;
                    tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
                for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped(); ) event.type = i > 1 ? bubbleType : special.bindType || type, 
                handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle"), 
                handle && handle.apply(cur, data), handle = ontype && cur[ontype], handle && handle.apply && jQuery.acceptData(cur) && (event.result = handle.apply(cur, data), 
                event.result === !1 && event.preventDefault());
                return event.type = type, onlyHandlers || event.isDefaultPrevented() || special._default && special._default.apply(eventPath.pop(), data) !== !1 || !jQuery.acceptData(elem) || ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem) && (tmp = elem[ontype], 
                tmp && (elem[ontype] = null), jQuery.event.triggered = type, elem[type](), jQuery.event.triggered = void 0, 
                tmp && (elem[ontype] = tmp)), event.result;
            }
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, j, ret, matched, handleObj, handlerQueue = [], args = slice.call(arguments), handlers = (data_priv.get(this, "events") || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
            if (args[0] = event, event.delegateTarget = this, !special.preDispatch || special.preDispatch.call(this, event) !== !1) {
                for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0; (matched = handlerQueue[i++]) && !event.isPropagationStopped(); ) for (event.currentTarget = matched.elem, 
                j = 0; (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped(); ) (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) && (event.handleObj = handleObj, 
                event.data = handleObj.data, ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args), 
                void 0 !== ret && (event.result = ret) === !1 && (event.preventDefault(), event.stopPropagation()));
                return special.postDispatch && special.postDispatch.call(this, event), event.result;
            }
        },
        handlers: function(event, handlers) {
            var i, matches, sel, handleObj, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && cur.nodeType && (!event.button || "click" !== event.type)) for (;cur !== this; cur = cur.parentNode || this) if (cur.disabled !== !0 || "click" !== event.type) {
                for (matches = [], i = 0; delegateCount > i; i++) handleObj = handlers[i], sel = handleObj.selector + " ", 
                void 0 === matches[sel] && (matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [ cur ]).length), 
                matches[sel] && matches.push(handleObj);
                matches.length && handlerQueue.push({
                    elem: cur,
                    handlers: matches
                });
            }
            return delegateCount < handlers.length && handlerQueue.push({
                elem: this,
                handlers: handlers.slice(delegateCount)
            }), handlerQueue;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                return null == event.which && (event.which = null != original.charCode ? original.charCode : original.keyCode), 
                event;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var eventDoc, doc, body, button = original.button;
                return null == event.pageX && null != original.clientX && (eventDoc = event.target.ownerDocument || document, 
                doc = eventDoc.documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), 
                event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), 
                event.which || void 0 === button || (event.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0), 
                event;
            }
        },
        fix: function(event) {
            if (event[jQuery.expando]) return event;
            var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
            for (fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), 
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new jQuery.Event(originalEvent), 
            i = copy.length; i--; ) prop = copy[i], event[prop] = originalEvent[prop];
            return event.target || (event.target = document), 3 === event.target.nodeType && (event.target = event.target.parentNode), 
            fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== safeActiveElement() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === safeActiveElement() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && jQuery.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    void 0 !== event.result && event.originalEvent && (event.originalEvent.returnValue = event.result);
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: !0,
                originalEvent: {}
            });
            bubble ? jQuery.event.trigger(e, null, elem) : jQuery.event.dispatch.call(elem, e), 
            e.isDefaultPrevented() && event.preventDefault();
        }
    }, jQuery.removeEvent = function(elem, type, handle) {
        elem.removeEventListener && elem.removeEventListener(type, handle, !1);
    }, jQuery.Event = function(src, props) {
        return this instanceof jQuery.Event ? (src && src.type ? (this.originalEvent = src, 
        this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || void 0 === src.defaultPrevented && src.returnValue === !1 ? returnTrue : returnFalse) : this.type = src, 
        props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), 
        void (this[jQuery.expando] = !0)) : new jQuery.Event(src, props);
    }, jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue, e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue, e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                return (!related || related !== target && !jQuery.contains(target, related)) && (event.type = handleObj.origType, 
                ret = handleObj.handler.apply(this, arguments), event.type = fix), ret;
            }
        };
    }), support.focusinBubbles || jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(orig, fix) {
        var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), !0);
        };
        jQuery.event.special[fix] = {
            setup: function() {
                var doc = this.ownerDocument || this, attaches = data_priv.access(doc, fix);
                attaches || doc.addEventListener(orig, handler, !0), data_priv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
                var doc = this.ownerDocument || this, attaches = data_priv.access(doc, fix) - 1;
                attaches ? data_priv.access(doc, fix, attaches) : (doc.removeEventListener(orig, handler, !0), 
                data_priv.remove(doc, fix));
            }
        };
    }), jQuery.fn.extend({
        on: function(types, selector, data, fn, one) {
            var origFn, type;
            if ("object" == typeof types) {
                "string" != typeof selector && (data = data || selector, selector = void 0);
                for (type in types) this.on(type, selector, data, types[type], one);
                return this;
            }
            if (null == data && null == fn ? (fn = selector, data = selector = void 0) : null == fn && ("string" == typeof selector ? (fn = data, 
            data = void 0) : (fn = data, data = selector, selector = void 0)), fn === !1) fn = returnFalse; else if (!fn) return this;
            return 1 === one && (origFn = fn, fn = function(event) {
                return jQuery().off(event), origFn.apply(this, arguments);
            }, fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)), this.each(function() {
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        one: function(types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, 
            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), 
            this;
            if ("object" == typeof types) {
                for (type in types) this.off(type, selector, types[type]);
                return this;
            }
            return (selector === !1 || "function" == typeof selector) && (fn = selector, selector = void 0), 
            fn === !1 && (fn = returnFalse), this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            return elem ? jQuery.event.trigger(type, data, elem, !0) : void 0;
        }
    });
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, 
    wrapMap.th = wrapMap.td, jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(!0), inPage = jQuery.contains(elem.ownerDocument, elem);
            if (!(support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem))) for (destElements = getAll(clone), 
            srcElements = getAll(elem), i = 0, l = srcElements.length; l > i; i++) fixInput(srcElements[i], destElements[i]);
            if (dataAndEvents) if (deepDataAndEvents) for (srcElements = srcElements || getAll(elem), 
            destElements = destElements || getAll(clone), i = 0, l = srcElements.length; l > i; i++) cloneCopyEvent(srcElements[i], destElements[i]); else cloneCopyEvent(elem, clone);
            return destElements = getAll(clone, "script"), destElements.length > 0 && setGlobalEval(destElements, !inPage && getAll(elem, "script")), 
            clone;
        },
        buildFragment: function(elems, context, scripts, selection) {
            for (var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length; l > i; i++) if (elem = elems[i], 
            elem || 0 === elem) if ("object" === jQuery.type(elem)) jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (rhtml.test(elem)) {
                for (tmp = tmp || fragment.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase(), 
                wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2], 
                j = wrap[0]; j--; ) tmp = tmp.lastChild;
                jQuery.merge(nodes, tmp.childNodes), tmp = fragment.firstChild, tmp.textContent = "";
            } else nodes.push(context.createTextNode(elem));
            for (fragment.textContent = "", i = 0; elem = nodes[i++]; ) if ((!selection || -1 === jQuery.inArray(elem, selection)) && (contains = jQuery.contains(elem.ownerDocument, elem), 
            tmp = getAll(fragment.appendChild(elem), "script"), contains && setGlobalEval(tmp), 
            scripts)) for (j = 0; elem = tmp[j++]; ) rscriptType.test(elem.type || "") && scripts.push(elem);
            return fragment;
        },
        cleanData: function(elems) {
            for (var data, elem, type, key, special = jQuery.event.special, i = 0; void 0 !== (elem = elems[i]); i++) {
                if (jQuery.acceptData(elem) && (key = elem[data_priv.expando], key && (data = data_priv.cache[key]))) {
                    if (data.events) for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                    data_priv.cache[key] && delete data_priv.cache[key];
                }
                delete data_user.cache[elem[data_user.expando]];
            }
        }
    }), jQuery.fn.extend({
        text: function(value) {
            return access(this, function(value) {
                return void 0 === value ? jQuery.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = value);
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(elem) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(elem) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        remove: function(selector, keepData) {
            for (var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0; null != (elem = elems[i]); i++) keepData || 1 !== elem.nodeType || jQuery.cleanData(getAll(elem)), 
            elem.parentNode && (keepData && jQuery.contains(elem.ownerDocument, elem) && setGlobalEval(getAll(elem, "script")), 
            elem.parentNode.removeChild(elem));
            return this;
        },
        empty: function() {
            for (var elem, i = 0; null != (elem = this[i]); i++) 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), 
            elem.textContent = "");
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            return dataAndEvents = null == dataAndEvents ? !1 : dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, 
            this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value) {
                var elem = this[0] || {}, i = 0, l = this.length;
                if (void 0 === value && 1 === elem.nodeType) return elem.innerHTML;
                if ("string" == typeof value && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (;l > i; i++) elem = this[i] || {}, 1 === elem.nodeType && (jQuery.cleanData(getAll(elem, !1)), 
                        elem.innerHTML = value);
                        elem = 0;
                    } catch (e) {}
                }
                elem && this.empty().append(value);
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var arg = arguments[0];
            return this.domManip(arguments, function(elem) {
                arg = this.parentNode, jQuery.cleanData(getAll(this)), arg && arg.replaceChild(elem, this);
            }), arg && (arg.length || arg.nodeType) ? this : this.remove();
        },
        detach: function(selector) {
            return this.remove(selector, !0);
        },
        domManip: function(args, callback) {
            args = concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
            if (isFunction || l > 1 && "string" == typeof value && !support.checkClone && rchecked.test(value)) return this.each(function(index) {
                var self = set.eq(index);
                isFunction && (args[0] = value.call(this, index, self.html())), self.domManip(args, callback);
            });
            if (l && (fragment = jQuery.buildFragment(args, this[0].ownerDocument, !1, this), 
            first = fragment.firstChild, 1 === fragment.childNodes.length && (fragment = first), 
            first)) {
                for (scripts = jQuery.map(getAll(fragment, "script"), disableScript), hasScripts = scripts.length; l > i; i++) node = fragment, 
                i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), 
                callback.call(this[i], node, i);
                if (hasScripts) for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), 
                i = 0; hasScripts > i; i++) node = scripts[i], rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl && jQuery._evalUrl(node.src) : jQuery.globalEval(node.textContent.replace(rcleanScript, "")));
            }
            return this;
        }
    }), jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            for (var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0; last >= i; i++) elems = i === last ? this : this.clone(!0), 
            jQuery(insert[i])[original](elems), push.apply(ret, elems.get());
            return this.pushStack(ret);
        };
    });
    var iframe, elemdisplay = {}, rmargin = /^margin/, rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"), getStyles = function(elem) {
        return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
    };
    !function() {
        function computePixelPositionAndBoxSizingReliable() {
            div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
            div.innerHTML = "", docElem.appendChild(container);
            var divStyle = window.getComputedStyle(div, null);
            pixelPositionVal = "1%" !== divStyle.top, boxSizingReliableVal = "4px" === divStyle.width, 
            docElem.removeChild(container);
        }
        var pixelPositionVal, boxSizingReliableVal, docElem = document.documentElement, container = document.createElement("div"), div = document.createElement("div");
        div.style && (div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", 
        support.clearCloneStyle = "content-box" === div.style.backgroundClip, container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
        container.appendChild(div), window.getComputedStyle && jQuery.extend(support, {
            pixelPosition: function() {
                return computePixelPositionAndBoxSizingReliable(), pixelPositionVal;
            },
            boxSizingReliable: function() {
                return null == boxSizingReliableVal && computePixelPositionAndBoxSizingReliable(), 
                boxSizingReliableVal;
            },
            reliableMarginRight: function() {
                var ret, marginDiv = div.appendChild(document.createElement("div"));
                return marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", 
                docElem.appendChild(container), ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight), 
                docElem.removeChild(container), ret;
            }
        }));
    }(), jQuery.swap = function(elem, options, callback, args) {
        var ret, name, old = {};
        for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
        ret = callback.apply(elem, args || []);
        for (name in options) elem.style[name] = old[name];
        return ret;
    };
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"), rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"), cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    }, cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return "" === ret ? "1" : ret;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(elem, name, value, extra) {
            if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
                return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName)), 
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], void 0 === value ? hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, !1, extra)) ? ret : style[name] : (type = typeof value, 
                "string" === type && (ret = rrelNum.exec(value)) && (value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)), 
                type = "number"), null != value && value === value && ("number" !== type || jQuery.cssNumber[origName] || (value += "px"), 
                support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), 
                hooks && "set" in hooks && void 0 === (value = hooks.set(elem, value, extra)) || (style[name] = value)), 
                void 0);
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = jQuery.camelCase(name);
            return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName)), 
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)), 
            void 0 === val && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), 
            "" === extra || extra ? (num = parseFloat(val), extra === !0 || jQuery.isNumeric(num) ? num || 0 : val) : val;
        }
    }), jQuery.each([ "height", "width" ], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                return computed ? rdisplayswap.test(jQuery.css(elem, "display")) && 0 === elem.offsetWidth ? jQuery.swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, name, extra);
                }) : getWidthOrHeight(elem, name, extra) : void 0;
            },
            set: function(elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles) : 0);
            }
        };
    }), jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) {
        return computed ? jQuery.swap(elem, {
            display: "inline-block"
        }, curCSS, [ elem, "marginRight" ]) : void 0;
    }), jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [ value ]; 4 > i; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded;
            }
        }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber);
    }), jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name, value) {
                var styles, len, map = {}, i = 0;
                if (jQuery.isArray(name)) {
                    for (styles = getStyles(elem), len = name.length; len > i; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                    return map;
                }
                return void 0 !== value ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function() {
            return showHide(this, !0);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
                isHidden(this) ? jQuery(this).show() : jQuery(this).hide();
            });
        }
    }), jQuery.Tween = Tween, Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem, this.prop = prop, this.easing = easing || "swing", this.options = options, 
            this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            return this.pos = eased = this.options.duration ? jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : percent, 
            this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this;
        }
    }, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                return null == tween.elem[tween.prop] || tween.elem.style && null != tween.elem.style[tween.prop] ? (result = jQuery.css(tween.elem, tween.prop, ""), 
                result && "auto" !== result ? result : 0) : tween.elem[tween.prop];
            },
            set: function(tween) {
                jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : tween.elem.style && (null != tween.elem.style[jQuery.cssProps[tween.prop]] || jQuery.cssHooks[tween.prop]) ? jQuery.style(tween.elem, tween.prop, tween.now + tween.unit) : tween.elem[tween.prop] = tween.now;
            }
        }
    }, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now);
        }
    }, jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2;
        }
    }, jQuery.fx = Tween.prototype.init, jQuery.fx.step = {};
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = {
        "*": [ function(prop, value) {
            var tween = this.createTween(prop, value), target = tween.cur(), parts = rfxnum.exec(value), unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), start = (jQuery.cssNumber[prop] || "px" !== unit && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)), scale = 1, maxIterations = 20;
            if (start && start[3] !== unit) {
                unit = unit || start[3], parts = parts || [], start = +target || 1;
                do scale = scale || ".5", start /= scale, jQuery.style(tween.elem, prop, start + unit); while (scale !== (scale = tween.cur() / target) && 1 !== scale && --maxIterations);
            }
            return parts && (start = tween.start = +start || +target || 0, tween.unit = unit, 
            tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]), tween;
        } ]
    };
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            jQuery.isFunction(props) ? (callback = props, props = [ "*" ]) : props = props.split(" ");
            for (var prop, index = 0, length = props.length; length > index; index++) prop = props[index], 
            tweeners[prop] = tweeners[prop] || [], tweeners[prop].unshift(callback);
        },
        prefilter: function(callback, prepend) {
            prepend ? animationPrefilters.unshift(callback) : animationPrefilters.push(callback);
        }
    }), jQuery.speed = function(speed, easing, fn) {
        var opt = speed && "object" == typeof speed ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, 
        (null == opt.queue || opt.queue === !0) && (opt.queue = "fx"), opt.old = opt.complete, 
        opt.complete = function() {
            jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue);
        }, opt;
    }, jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                (empty || data_priv.get(this, "finish")) && anim.stop(!0);
            };
            return doAnimation.finish = doAnimation, empty || optall.queue === !1 ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop, stop(gotoEnd);
            };
            return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = void 0), 
            clearQueue && type !== !1 && this.queue(type || "fx", []), this.each(function() {
                var dequeue = !0, index = null != type && type + "queueHooks", timers = jQuery.timers, data = data_priv.get(this);
                if (index) data[index] && data[index].stop && stopQueue(data[index]); else for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                for (index = timers.length; index--; ) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), 
                dequeue = !1, timers.splice(index, 1));
                (dequeue || !gotoEnd) && jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            return type !== !1 && (type = type || "fx"), this.each(function() {
                var index, data = data_priv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), 
                index = timers.length; index--; ) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), 
                timers.splice(index, 1));
                for (index = 0; length > index; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                delete data.finish;
            });
        }
    }), jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback);
        };
    }), jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    }), jQuery.timers = [], jQuery.fx.tick = function() {
        var timer, i = 0, timers = jQuery.timers;
        for (fxNow = jQuery.now(); i < timers.length; i++) timer = timers[i], timer() || timers[i] !== timer || timers.splice(i--, 1);
        timers.length || jQuery.fx.stop(), fxNow = void 0;
    }, jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer), timer() ? jQuery.fx.start() : jQuery.timers.pop();
    }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
        timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval));
    }, jQuery.fx.stop = function() {
        clearInterval(timerId), timerId = null;
    }, jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, jQuery.fn.delay = function(time, type) {
        return time = jQuery.fx ? jQuery.fx.speeds[time] || time : time, type = type || "fx", 
        this.queue(type, function(next, hooks) {
            var timeout = setTimeout(next, time);
            hooks.stop = function() {
                clearTimeout(timeout);
            };
        });
    }, function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox", support.checkOn = "" !== input.value, support.optSelected = opt.selected, 
        select.disabled = !0, support.optDisabled = !opt.disabled, input = document.createElement("input"), 
        input.value = "t", input.type = "radio", support.radioValue = "t" === input.value;
    }();
    var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    }), jQuery.extend({
        attr: function(elem, name, value) {
            var hooks, ret, nType = elem.nodeType;
            if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return typeof elem.getAttribute === strundefined ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), 
            hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)), 
            void 0 === value ? hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : (ret = jQuery.find.attr(elem, name), 
            null == ret ? void 0 : ret) : null !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : (elem.setAttribute(name, value + ""), 
            value) : void jQuery.removeAttr(elem, name));
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0, attrNames = value && value.match(rnotwhite);
            if (attrNames && 1 === elem.nodeType) for (;name = attrNames[i++]; ) propName = jQuery.propFix[name] || name, 
            jQuery.expr.match.bool.test(name) && (elem[propName] = !1), elem.removeAttribute(name);
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && "radio" === value && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        return elem.setAttribute("type", value), val && (elem.value = val), value;
                    }
                }
            }
        }
    }), boolHook = {
        set: function(elem, value, name) {
            return value === !1 ? jQuery.removeAttr(elem, name) : elem.setAttribute(name, name), 
            name;
        }
    }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name, isXML) {
            var ret, handle;
            return isXML || (handle = attrHandle[name], attrHandle[name] = ret, ret = null != getter(elem, name, isXML) ? name.toLowerCase() : null, 
            attrHandle[name] = handle), ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    }), jQuery.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;
            if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return notxml = 1 !== nType || !jQuery.isXMLDoc(elem), 
            notxml && (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), 
            void 0 !== value ? hooks && "set" in hooks && void 0 !== (ret = hooks.set(elem, value, name)) ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
                }
            }
        }
    }), support.optSelected || (jQuery.propHooks.selected = {
        get: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.parentNode && parent.parentNode.selectedIndex, null;
        }
    }), jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    var rclass = /[\t\r\n\f]/g;
    jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, clazz, j, finalValue, proceed = "string" == typeof value && value, i = 0, len = this.length;
            if (jQuery.isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, this.className));
            });
            if (proceed) for (classes = (value || "").match(rnotwhite) || []; len > i; i++) if (elem = this[i], 
            cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ")) {
                for (j = 0; clazz = classes[j++]; ) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                finalValue = jQuery.trim(cur), elem.className !== finalValue && (elem.className = finalValue);
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, clazz, j, finalValue, proceed = 0 === arguments.length || "string" == typeof value && value, i = 0, len = this.length;
            if (jQuery.isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, this.className));
            });
            if (proceed) for (classes = (value || "").match(rnotwhite) || []; len > i; i++) if (elem = this[i], 
            cur = 1 === elem.nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "")) {
                for (j = 0; clazz = classes[j++]; ) for (;cur.indexOf(" " + clazz + " ") >= 0; ) cur = cur.replace(" " + clazz + " ", " ");
                finalValue = value ? jQuery.trim(cur) : "", elem.className !== finalValue && (elem.className = finalValue);
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value;
            return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : this.each(jQuery.isFunction(value) ? function(i) {
                jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
            } : function() {
                if ("string" === type) for (var className, i = 0, self = jQuery(this), classNames = value.match(rnotwhite) || []; className = classNames[i++]; ) self.hasClass(className) ? self.removeClass(className) : self.addClass(className); else (type === strundefined || "boolean" === type) && (this.className && data_priv.set(this, "__className__", this.className), 
                this.className = this.className || value === !1 ? "" : data_priv.get(this, "__className__") || "");
            });
        },
        hasClass: function(selector) {
            for (var className = " " + selector + " ", i = 0, l = this.length; l > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) return !0;
            return !1;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, isFunction, elem = this[0];
            {
                if (arguments.length) return isFunction = jQuery.isFunction(value), this.each(function(i) {
                    var val;
                    1 === this.nodeType && (val = isFunction ? value.call(this, i, jQuery(this).val()) : value, 
                    null == val ? val = "" : "number" == typeof val ? val += "" : jQuery.isArray(val) && (val = jQuery.map(val, function(value) {
                        return null == value ? "" : value + "";
                    })), hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()], 
                    hooks && "set" in hooks && void 0 !== hooks.set(this, val, "value") || (this.value = val));
                });
                if (elem) return hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()], 
                hooks && "get" in hooks && void 0 !== (ret = hooks.get(elem, "value")) ? ret : (ret = elem.value, 
                "string" == typeof ret ? ret.replace(rreturn, "") : null == ret ? "" : ret);
            }
        }
    }), jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return null != val ? val : jQuery.trim(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    for (var value, option, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type || 0 > index, values = one ? null : [], max = one ? index + 1 : options.length, i = 0 > index ? max : one ? index : 0; max > i; i++) if (option = options[i], 
                    !(!option.selected && i !== index || (support.optDisabled ? option.disabled : null !== option.getAttribute("disabled")) || option.parentNode.disabled && jQuery.nodeName(option.parentNode, "optgroup"))) {
                        if (value = jQuery(option).val(), one) return value;
                        values.push(value);
                    }
                    return values;
                },
                set: function(elem, value) {
                    for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--; ) option = options[i], 
                    (option.selected = jQuery.inArray(option.value, values) >= 0) && (optionSet = !0);
                    return optionSet || (elem.selectedIndex = -1), values;
                }
            }
        }
    }), jQuery.each([ "radio", "checkbox" ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                return jQuery.isArray(value) ? elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0 : void 0;
            }
        }, support.checkOn || (jQuery.valHooks[this].get = function(elem) {
            return null === elem.getAttribute("value") ? "on" : elem.value;
        });
    }), jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    }), jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        },
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });
    var nonce = jQuery.now(), rquery = /\?/;
    jQuery.parseJSON = function(data) {
        return JSON.parse(data + "");
    }, jQuery.parseXML = function(data) {
        var xml, tmp;
        if (!data || "string" != typeof data) return null;
        try {
            tmp = new DOMParser(), xml = tmp.parseFromString(data, "text/xml");
        } catch (e) {
            xml = void 0;
        }
        return (!xml || xml.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + data), 
        xml;
    };
    var ajaxLocParts, ajaxLocation, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href;
    } catch (e) {
        ajaxLocation = document.createElement("a"), ajaxLocation.href = "", ajaxLocation = ajaxLocation.href;
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [], jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
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
                "text html": !0,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                2 !== state && (state = 2, timeoutTimer && clearTimeout(timeoutTimer), transport = void 0, 
                responseHeadersString = headers || "", jqXHR.readyState = status > 0 ? 4 : 0, isSuccess = status >= 200 && 300 > status || 304 === status, 
                responses && (response = ajaxHandleResponses(s, jqXHR, responses)), response = ajaxConvert(s, response, jqXHR, isSuccess), 
                isSuccess ? (s.ifModified && (modified = jqXHR.getResponseHeader("Last-Modified"), 
                modified && (jQuery.lastModified[cacheURL] = modified), modified = jqXHR.getResponseHeader("etag"), 
                modified && (jQuery.etag[cacheURL] = modified)), 204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, 
                success = response.data, error = response.error, isSuccess = !error)) : (error = statusText, 
                (status || !statusText) && (statusText = "error", 0 > status && (status = 0))), 
                jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", 
                isSuccess ? deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]) : deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]), 
                jqXHR.statusCode(statusCode), statusCode = void 0, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]), 
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]), 
                --jQuery.active || jQuery.event.trigger("ajaxStop")));
            }
            "object" == typeof url && (options = url, url = void 0), options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, parts, fireGlobals, i, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = "canceled", jqXHR = {
                readyState: 0,
                getResponseHeader: function(key) {
                    var match;
                    if (2 === state) {
                        if (!responseHeaders) for (responseHeaders = {}; match = rheaders.exec(responseHeadersString); ) responseHeaders[match[1].toLowerCase()] = match[2];
                        match = responseHeaders[key.toLowerCase()];
                    }
                    return null == match ? null : match;
                },
                getAllResponseHeaders: function() {
                    return 2 === state ? responseHeadersString : null;
                },
                setRequestHeader: function(name, value) {
                    var lname = name.toLowerCase();
                    return state || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, 
                    requestHeaders[name] = value), this;
                },
                overrideMimeType: function(type) {
                    return state || (s.mimeType = type), this;
                },
                statusCode: function(map) {
                    var code;
                    if (map) if (2 > state) for (code in map) statusCode[code] = [ statusCode[code], map[code] ]; else jqXHR.always(map[jqXHR.status]);
                    return this;
                },
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    return transport && transport.abort(finalText), done(0, finalText), this;
                }
            };
            if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, 
            jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), 
            s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [ "" ], 
            null == s.crossDomain && (parts = rurl.exec(s.url.toLowerCase()), s.crossDomain = !(!parts || parts[1] === ajaxLocParts[1] && parts[2] === ajaxLocParts[2] && (parts[3] || ("http:" === parts[1] ? "80" : "443")) === (ajaxLocParts[3] || ("http:" === ajaxLocParts[1] ? "80" : "443")))), 
            s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), 
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === state) return jqXHR;
            fireGlobals = s.global, fireGlobals && 0 === jQuery.active++ && jQuery.event.trigger("ajaxStart"), 
            s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, 
            s.hasContent || (s.data && (cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data, 
            delete s.data), s.cache === !1 && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++)), 
            s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), 
            jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), 
            (s.data && s.hasContent && s.contentType !== !1 || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), 
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || 2 === state)) return jqXHR.abort();
            strAbort = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) jqXHR[i](s[i]);
            if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [ jqXHR, s ]), 
                s.async && s.timeout > 0 && (timeoutTimer = setTimeout(function() {
                    jqXHR.abort("timeout");
                }, s.timeout));
                try {
                    state = 1, transport.send(requestHeaders, done);
                } catch (e) {
                    if (!(2 > state)) throw e;
                    done(-1, e);
                }
            } else done(-1, "No Transport");
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
        }
    }), jQuery.each([ "get", "post" ], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            return jQuery.isFunction(data) && (type = type || callback, callback = data, data = void 0), 
            jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    }), jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    }), jQuery._evalUrl = function(url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            return jQuery.isFunction(html) ? this.each(function(i) {
                jQuery(this).wrapAll(html.call(this, i));
            }) : (this[0] && (wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && wrap.insertBefore(this[0]), 
            wrap.map(function() {
                for (var elem = this; elem.firstElementChild; ) elem = elem.firstElementChild;
                return elem;
            }).append(this)), this);
        },
        wrapInner: function(html) {
            return this.each(jQuery.isFunction(html) ? function(i) {
                jQuery(this).wrapInner(html.call(this, i));
            } : function() {
                var self = jQuery(this), contents = self.contents();
                contents.length ? contents.wrapAll(html) : self.append(html);
            });
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes);
            }).end();
        }
    }), jQuery.expr.filters.hidden = function(elem) {
        return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
    }, jQuery.expr.filters.visible = function(elem) {
        return !jQuery.expr.filters.hidden(elem);
    };
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, value) {
            value = jQuery.isFunction(value) ? value() : null == value ? "" : value, s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        if (void 0 === traditional && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), 
        jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
            add(this.name, this.value);
        }); else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
        return s.join("&").replace(r20, "+");
    }, jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    }), jQuery.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
    };
    var xhrId = 0, xhrCallbacks = {}, xhrSuccessStatus = {
        0: 200,
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    window.ActiveXObject && jQuery(window).on("unload", function() {
        for (var key in xhrCallbacks) xhrCallbacks[key]();
    }), support.cors = !!xhrSupported && "withCredentials" in xhrSupported, support.ajax = xhrSupported = !!xhrSupported, 
    jQuery.ajaxTransport(function(options) {
        var callback;
        return support.cors || xhrSupported && !options.crossDomain ? {
            send: function(headers, complete) {
                var i, xhr = options.xhr(), id = ++xhrId;
                if (xhr.open(options.type, options.url, options.async, options.username, options.password), 
                options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                options.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(options.mimeType), 
                options.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");
                for (i in headers) xhr.setRequestHeader(i, headers[i]);
                callback = function(type) {
                    return function() {
                        callback && (delete xhrCallbacks[id], callback = xhr.onload = xhr.onerror = null, 
                        "abort" === type ? xhr.abort() : "error" === type ? complete(xhr.status, xhr.statusText) : complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, "string" == typeof xhr.responseText ? {
                            text: xhr.responseText
                        } : void 0, xhr.getAllResponseHeaders()));
                    };
                }, xhr.onload = callback(), xhr.onerror = callback("error"), callback = xhrCallbacks[id] = callback("abort");
                try {
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    if (callback) throw e;
                }
            },
            abort: function() {
                callback && callback();
            }
        } : void 0;
    }), jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(text) {
                return jQuery.globalEval(text), text;
            }
        }
    }), jQuery.ajaxPrefilter("script", function(s) {
        void 0 === s.cache && (s.cache = !1), s.crossDomain && (s.type = "GET");
    }), jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").prop({
                        async: !0,
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove(), callback = null, evt && complete("error" === evt.type ? 404 : 200, evt.type);
                    }), document.head.appendChild(script[0]);
                },
                abort: function() {
                    callback && callback();
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
            return this[callback] = !0, callback;
        }
    }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== !1 && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        return jsonProp || "jsonp" === s.dataTypes[0] ? (callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, 
        jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : s.jsonp !== !1 && (s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), 
        s.converters["script json"] = function() {
            return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0];
        }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
            responseContainer = arguments;
        }, jqXHR.always(function() {
            window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, 
            oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), 
            responseContainer = overwritten = void 0;
        }), "script") : void 0;
    }), jQuery.parseHTML = function(data, context, keepScripts) {
        if (!data || "string" != typeof data) return null;
        "boolean" == typeof context && (keepScripts = context, context = !1), context = context || document;
        var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
        return parsed ? [ context.createElement(parsed[1]) ] : (parsed = jQuery.buildFragment([ data ], context, scripts), 
        scripts && scripts.length && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes));
    };
    var _load = jQuery.fn.load;
    jQuery.fn.load = function(url, params, callback) {
        if ("string" != typeof url && _load) return _load.apply(this, arguments);
        var selector, type, response, self = this, off = url.indexOf(" ");
        return off >= 0 && (selector = jQuery.trim(url.slice(off)), url = url.slice(0, off)), 
        jQuery.isFunction(params) ? (callback = params, params = void 0) : params && "object" == typeof params && (type = "POST"), 
        self.length > 0 && jQuery.ajax({
            url: url,
            type: type,
            dataType: "html",
            data: params
        }).done(function(responseText) {
            response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
        }).complete(callback && function(jqXHR, status) {
            self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
        }), this;
    }, jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    var docElem = window.document.documentElement;
    jQuery.offset = {
        setOffset: function(elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            "static" === position && (elem.style.position = "relative"), curOffset = curElem.offset(), 
            curCSSTop = jQuery.css(elem, "top"), curCSSLeft = jQuery.css(elem, "left"), calculatePosition = ("absolute" === position || "fixed" === position) && (curCSSTop + curCSSLeft).indexOf("auto") > -1, 
            calculatePosition ? (curPosition = curElem.position(), curTop = curPosition.top, 
            curLeft = curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, curLeft = parseFloat(curCSSLeft) || 0), 
            jQuery.isFunction(options) && (options = options.call(elem, i, curOffset)), null != options.top && (props.top = options.top - curOffset.top + curTop), 
            null != options.left && (props.left = options.left - curOffset.left + curLeft), 
            "using" in options ? options.using.call(elem, props) : curElem.css(props);
        }
    }, jQuery.fn.extend({
        offset: function(options) {
            if (arguments.length) return void 0 === options ? this : this.each(function(i) {
                jQuery.offset.setOffset(this, options, i);
            });
            var docElem, win, elem = this[0], box = {
                top: 0,
                left: 0
            }, doc = elem && elem.ownerDocument;
            if (doc) return docElem = doc.documentElement, jQuery.contains(docElem, elem) ? (typeof elem.getBoundingClientRect !== strundefined && (box = elem.getBoundingClientRect()), 
            win = getWindow(doc), {
                top: box.top + win.pageYOffset - docElem.clientTop,
                left: box.left + win.pageXOffset - docElem.clientLeft
            }) : box;
        },
        position: function() {
            if (this[0]) {
                var offsetParent, offset, elem = this[0], parentOffset = {
                    top: 0,
                    left: 0
                };
                return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), 
                offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), 
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)), 
                {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var offsetParent = this.offsetParent || docElem; offsetParent && !jQuery.nodeName(offsetParent, "html") && "static" === jQuery.css(offsetParent, "position"); ) offsetParent = offsetParent.offsetParent;
                return offsetParent || docElem;
            });
        }
    }), jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method, val) {
                var win = getWindow(elem);
                return void 0 === val ? win ? win[prop] : elem[method] : void (win ? win.scrollTo(top ? window.pageXOffset : val, top ? val : window.pageYOffset) : elem[method] = val);
            }, method, val, arguments.length, null);
        };
    }), jQuery.each([ "top", "left" ], function(i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            return computed ? (computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed) : void 0;
        });
    }), jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin), extra = defaultExtra || (margin === !0 || value === !0 ? "margin" : "border");
                return access(this, function(elem, type, value) {
                    var doc;
                    return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, 
                    Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : void 0 === value ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : void 0, chainable, null);
            };
        });
    }), jQuery.fn.size = function() {
        return this.length;
    }, jQuery.fn.andSelf = jQuery.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return jQuery;
    });
    var _jQuery = window.jQuery, _$ = window.$;
    return jQuery.noConflict = function(deep) {
        return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), 
        jQuery;
    }, typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery), jQuery;
}), function(window, document, undefined) {
    "use strict";
    function minErr(module) {
        return function() {
            var message, i, code = arguments[0], prefix = "[" + (module ? module + ":" : "") + code + "] ", template = arguments[1], templateArgs = arguments, stringify = function(obj) {
                return "function" == typeof obj ? obj.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof obj ? "undefined" : "string" != typeof obj ? JSON.stringify(obj) : obj;
            };
            for (message = prefix + template.replace(/\{\d+\}/g, function(match) {
                var arg, index = +match.slice(1, -1);
                return index + 2 < templateArgs.length ? (arg = templateArgs[index + 2], "function" == typeof arg ? arg.toString().replace(/ ?\{[\s\S]*$/, "") : "undefined" == typeof arg ? "undefined" : "string" != typeof arg ? toJson(arg) : arg) : match;
            }), message = message + "\nhttp://errors.angularjs.org/1.2.21/" + (module ? module + "/" : "") + code, 
            i = 2; i < arguments.length; i++) message = message + (2 == i ? "?" : "&") + "p" + (i - 2) + "=" + encodeURIComponent(stringify(arguments[i]));
            return new Error(message);
        };
    }
    function isArrayLike(obj) {
        if (null == obj || isWindow(obj)) return !1;
        var length = obj.length;
        return 1 === obj.nodeType && length ? !0 : isString(obj) || isArray(obj) || 0 === length || "number" == typeof length && length > 0 && length - 1 in obj;
    }
    function forEach(obj, iterator, context) {
        var key;
        if (obj) if (isFunction(obj)) for (key in obj) "prototype" == key || "length" == key || "name" == key || obj.hasOwnProperty && !obj.hasOwnProperty(key) || iterator.call(context, obj[key], key); else if (isArray(obj) || isArrayLike(obj)) for (key = 0; key < obj.length; key++) iterator.call(context, obj[key], key); else if (obj.forEach && obj.forEach !== forEach) obj.forEach(iterator, context); else for (key in obj) obj.hasOwnProperty(key) && iterator.call(context, obj[key], key);
        return obj;
    }
    function sortedKeys(obj) {
        var keys = [];
        for (var key in obj) obj.hasOwnProperty(key) && keys.push(key);
        return keys.sort();
    }
    function forEachSorted(obj, iterator, context) {
        for (var keys = sortedKeys(obj), i = 0; i < keys.length; i++) iterator.call(context, obj[keys[i]], keys[i]);
        return keys;
    }
    function reverseParams(iteratorFn) {
        return function(value, key) {
            iteratorFn(key, value);
        };
    }
    function nextUid() {
        for (var digit, index = uid.length; index; ) {
            if (index--, digit = uid[index].charCodeAt(0), 57 == digit) return uid[index] = "A", 
            uid.join("");
            if (90 != digit) return uid[index] = String.fromCharCode(digit + 1), uid.join("");
            uid[index] = "0";
        }
        return uid.unshift("0"), uid.join("");
    }
    function setHashKey(obj, h) {
        h ? obj.$$hashKey = h : delete obj.$$hashKey;
    }
    function extend(dst) {
        var h = dst.$$hashKey;
        return forEach(arguments, function(obj) {
            obj !== dst && forEach(obj, function(value, key) {
                dst[key] = value;
            });
        }), setHashKey(dst, h), dst;
    }
    function int(str) {
        return parseInt(str, 10);
    }
    function inherit(parent, extra) {
        return extend(new (extend(function() {}, {
            prototype: parent
        }))(), extra);
    }
    function noop() {}
    function identity($) {
        return $;
    }
    function valueFn(value) {
        return function() {
            return value;
        };
    }
    function isUndefined(value) {
        return "undefined" == typeof value;
    }
    function isDefined(value) {
        return "undefined" != typeof value;
    }
    function isObject(value) {
        return null != value && "object" == typeof value;
    }
    function isString(value) {
        return "string" == typeof value;
    }
    function isNumber(value) {
        return "number" == typeof value;
    }
    function isDate(value) {
        return "[object Date]" === toString.call(value);
    }
    function isFunction(value) {
        return "function" == typeof value;
    }
    function isRegExp(value) {
        return "[object RegExp]" === toString.call(value);
    }
    function isWindow(obj) {
        return obj && obj.document && obj.location && obj.alert && obj.setInterval;
    }
    function isScope(obj) {
        return obj && obj.$evalAsync && obj.$watch;
    }
    function isFile(obj) {
        return "[object File]" === toString.call(obj);
    }
    function isBlob(obj) {
        return "[object Blob]" === toString.call(obj);
    }
    function isPromiseLike(obj) {
        return obj && isFunction(obj.then);
    }
    function isElement(node) {
        return !(!node || !(node.nodeName || node.prop && node.attr && node.find));
    }
    function map(obj, iterator, context) {
        var results = [];
        return forEach(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        }), results;
    }
    function includes(array, obj) {
        return -1 != indexOf(array, obj);
    }
    function indexOf(array, obj) {
        if (array.indexOf) return array.indexOf(obj);
        for (var i = 0; i < array.length; i++) if (obj === array[i]) return i;
        return -1;
    }
    function arrayRemove(array, value) {
        var index = indexOf(array, value);
        return index >= 0 && array.splice(index, 1), value;
    }
    function copy(source, destination, stackSource, stackDest) {
        if (isWindow(source) || isScope(source)) throw ngMinErr("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        if (destination) {
            if (source === destination) throw ngMinErr("cpi", "Can't copy! Source and destination are identical.");
            if (stackSource = stackSource || [], stackDest = stackDest || [], isObject(source)) {
                var index = indexOf(stackSource, source);
                if (-1 !== index) return stackDest[index];
                stackSource.push(source), stackDest.push(destination);
            }
            var result;
            if (isArray(source)) {
                destination.length = 0;
                for (var i = 0; i < source.length; i++) result = copy(source[i], null, stackSource, stackDest), 
                isObject(source[i]) && (stackSource.push(source[i]), stackDest.push(result)), destination.push(result);
            } else {
                var h = destination.$$hashKey;
                forEach(destination, function(value, key) {
                    delete destination[key];
                });
                for (var key in source) result = copy(source[key], null, stackSource, stackDest), 
                isObject(source[key]) && (stackSource.push(source[key]), stackDest.push(result)), 
                destination[key] = result;
                setHashKey(destination, h);
            }
        } else destination = source, source && (isArray(source) ? destination = copy(source, [], stackSource, stackDest) : isDate(source) ? destination = new Date(source.getTime()) : isRegExp(source) ? (destination = new RegExp(source.source, source.toString().match(/[^\/]*$/)[0]), 
        destination.lastIndex = source.lastIndex) : isObject(source) && (destination = copy(source, {}, stackSource, stackDest)));
        return destination;
    }
    function shallowCopy(src, dst) {
        if (isArray(src)) {
            dst = dst || [];
            for (var i = 0; i < src.length; i++) dst[i] = src[i];
        } else if (isObject(src)) {
            dst = dst || {};
            for (var key in src) !hasOwnProperty.call(src, key) || "$" === key.charAt(0) && "$" === key.charAt(1) || (dst[key] = src[key]);
        }
        return dst || src;
    }
    function equals(o1, o2) {
        if (o1 === o2) return !0;
        if (null === o1 || null === o2) return !1;
        if (o1 !== o1 && o2 !== o2) return !0;
        var length, key, keySet, t1 = typeof o1, t2 = typeof o2;
        if (t1 == t2 && "object" == t1) {
            if (!isArray(o1)) {
                if (isDate(o1)) return isDate(o2) && o1.getTime() == o2.getTime();
                if (isRegExp(o1) && isRegExp(o2)) return o1.toString() == o2.toString();
                if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2) || isArray(o2)) return !1;
                keySet = {};
                for (key in o1) if ("$" !== key.charAt(0) && !isFunction(o1[key])) {
                    if (!equals(o1[key], o2[key])) return !1;
                    keySet[key] = !0;
                }
                for (key in o2) if (!keySet.hasOwnProperty(key) && "$" !== key.charAt(0) && o2[key] !== undefined && !isFunction(o2[key])) return !1;
                return !0;
            }
            if (!isArray(o2)) return !1;
            if ((length = o1.length) == o2.length) {
                for (key = 0; length > key; key++) if (!equals(o1[key], o2[key])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function concat(array1, array2, index) {
        return array1.concat(slice.call(array2, index));
    }
    function sliceArgs(args, startIndex) {
        return slice.call(args, startIndex || 0);
    }
    function bind(self, fn) {
        var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
        return !isFunction(fn) || fn instanceof RegExp ? fn : curryArgs.length ? function() {
            return arguments.length ? fn.apply(self, curryArgs.concat(slice.call(arguments, 0))) : fn.apply(self, curryArgs);
        } : function() {
            return arguments.length ? fn.apply(self, arguments) : fn.call(self);
        };
    }
    function toJsonReplacer(key, value) {
        var val = value;
        return "string" == typeof key && "$" === key.charAt(0) ? val = undefined : isWindow(value) ? val = "$WINDOW" : value && document === value ? val = "$DOCUMENT" : isScope(value) && (val = "$SCOPE"), 
        val;
    }
    function toJson(obj, pretty) {
        return "undefined" == typeof obj ? undefined : JSON.stringify(obj, toJsonReplacer, pretty ? "  " : null);
    }
    function fromJson(json) {
        return isString(json) ? JSON.parse(json) : json;
    }
    function toBoolean(value) {
        if ("function" == typeof value) value = !0; else if (value && 0 !== value.length) {
            var v = lowercase("" + value);
            value = !("f" == v || "0" == v || "false" == v || "no" == v || "n" == v || "[]" == v);
        } else value = !1;
        return value;
    }
    function startingTag(element) {
        element = jqLite(element).clone();
        try {
            element.empty();
        } catch (e) {}
        var TEXT_NODE = 3, elemHtml = jqLite("<div>").append(element).html();
        try {
            return element[0].nodeType === TEXT_NODE ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(match, nodeName) {
                return "<" + lowercase(nodeName);
            });
        } catch (e) {
            return lowercase(elemHtml);
        }
    }
    function tryDecodeURIComponent(value) {
        try {
            return decodeURIComponent(value);
        } catch (e) {}
    }
    function parseKeyValue(keyValue) {
        var key_value, key, obj = {};
        return forEach((keyValue || "").split("&"), function(keyValue) {
            if (keyValue && (key_value = keyValue.replace(/\+/g, "%20").split("="), key = tryDecodeURIComponent(key_value[0]), 
            isDefined(key))) {
                var val = isDefined(key_value[1]) ? tryDecodeURIComponent(key_value[1]) : !0;
                hasOwnProperty.call(obj, key) ? isArray(obj[key]) ? obj[key].push(val) : obj[key] = [ obj[key], val ] : obj[key] = val;
            }
        }), obj;
    }
    function toKeyValue(obj) {
        var parts = [];
        return forEach(obj, function(value, key) {
            isArray(value) ? forEach(value, function(arrayValue) {
                parts.push(encodeUriQuery(key, !0) + (arrayValue === !0 ? "" : "=" + encodeUriQuery(arrayValue, !0)));
            }) : parts.push(encodeUriQuery(key, !0) + (value === !0 ? "" : "=" + encodeUriQuery(value, !0)));
        }), parts.length ? parts.join("&") : "";
    }
    function encodeUriSegment(val) {
        return encodeUriQuery(val, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, pctEncodeSpaces ? "%20" : "+");
    }
    function angularInit(element, bootstrap) {
        function append(element) {
            element && elements.push(element);
        }
        var appElement, module, elements = [ element ], names = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        forEach(names, function(name) {
            names[name] = !0, append(document.getElementById(name)), name = name.replace(":", "\\:"), 
            element.querySelectorAll && (forEach(element.querySelectorAll("." + name), append), 
            forEach(element.querySelectorAll("." + name + "\\:"), append), forEach(element.querySelectorAll("[" + name + "]"), append));
        }), forEach(elements, function(element) {
            if (!appElement) {
                var className = " " + element.className + " ", match = NG_APP_CLASS_REGEXP.exec(className);
                match ? (appElement = element, module = (match[2] || "").replace(/\s+/g, ",")) : forEach(element.attributes, function(attr) {
                    !appElement && names[attr.name] && (appElement = element, module = attr.value);
                });
            }
        }), appElement && bootstrap(appElement, module ? [ module ] : []);
    }
    function bootstrap(element, modules) {
        var doBootstrap = function() {
            if (element = jqLite(element), element.injector()) {
                var tag = element[0] === document ? "document" : startingTag(element);
                throw ngMinErr("btstrpd", "App Already Bootstrapped with this Element '{0}'", tag);
            }
            modules = modules || [], modules.unshift([ "$provide", function($provide) {
                $provide.value("$rootElement", element);
            } ]), modules.unshift("ng");
            var injector = createInjector(modules);
            return injector.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(scope, element, compile, injector) {
                scope.$apply(function() {
                    element.data("$injector", injector), compile(element)(scope);
                });
            } ]), injector;
        }, NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
        return window && !NG_DEFER_BOOTSTRAP.test(window.name) ? doBootstrap() : (window.name = window.name.replace(NG_DEFER_BOOTSTRAP, ""), 
        void (angular.resumeBootstrap = function(extraModules) {
            forEach(extraModules, function(module) {
                modules.push(module);
            }), doBootstrap();
        }));
    }
    function snake_case(name, separator) {
        return separator = separator || "_", name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
            return (pos ? separator : "") + letter.toLowerCase();
        });
    }
    function bindJQuery() {
        jQuery = window.jQuery, jQuery && jQuery.fn.on ? (jqLite = jQuery, extend(jQuery.fn, {
            scope: JQLitePrototype.scope,
            isolateScope: JQLitePrototype.isolateScope,
            controller: JQLitePrototype.controller,
            injector: JQLitePrototype.injector,
            inheritedData: JQLitePrototype.inheritedData
        }), jqLitePatchJQueryRemove("remove", !0, !0, !1), jqLitePatchJQueryRemove("empty", !1, !1, !1), 
        jqLitePatchJQueryRemove("html", !1, !1, !0)) : jqLite = JQLite, angular.element = jqLite;
    }
    function assertArg(arg, name, reason) {
        if (!arg) throw ngMinErr("areq", "Argument '{0}' is {1}", name || "?", reason || "required");
        return arg;
    }
    function assertArgFn(arg, name, acceptArrayAnnotation) {
        return acceptArrayAnnotation && isArray(arg) && (arg = arg[arg.length - 1]), assertArg(isFunction(arg), name, "not a function, got " + (arg && "object" == typeof arg ? arg.constructor.name || "Object" : typeof arg)), 
        arg;
    }
    function assertNotHasOwnProperty(name, context) {
        if ("hasOwnProperty" === name) throw ngMinErr("badname", "hasOwnProperty is not a valid {0} name", context);
    }
    function getter(obj, path, bindFnToScope) {
        if (!path) return obj;
        for (var key, keys = path.split("."), lastInstance = obj, len = keys.length, i = 0; len > i; i++) key = keys[i], 
        obj && (obj = (lastInstance = obj)[key]);
        return !bindFnToScope && isFunction(obj) ? bind(lastInstance, obj) : obj;
    }
    function getBlockElements(nodes) {
        var startNode = nodes[0], endNode = nodes[nodes.length - 1];
        if (startNode === endNode) return jqLite(startNode);
        var element = startNode, elements = [ element ];
        do {
            if (element = element.nextSibling, !element) break;
            elements.push(element);
        } while (element !== endNode);
        return jqLite(elements);
    }
    function setupModuleLoader(window) {
        function ensure(obj, name, factory) {
            return obj[name] || (obj[name] = factory());
        }
        var $injectorMinErr = minErr("$injector"), ngMinErr = minErr("ng"), angular = ensure(window, "angular", Object);
        return angular.$$minErr = angular.$$minErr || minErr, ensure(angular, "module", function() {
            var modules = {};
            return function(name, requires, configFn) {
                var assertNotHasOwnProperty = function(name, context) {
                    if ("hasOwnProperty" === name) throw ngMinErr("badname", "hasOwnProperty is not a valid {0} name", context);
                };
                return assertNotHasOwnProperty(name, "module"), requires && modules.hasOwnProperty(name) && (modules[name] = null), 
                ensure(modules, name, function() {
                    function invokeLater(provider, method, insertMethod) {
                        return function() {
                            return invokeQueue[insertMethod || "push"]([ provider, method, arguments ]), moduleInstance;
                        };
                    }
                    if (!requires) throw $injectorMinErr("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", name);
                    var invokeQueue = [], runBlocks = [], config = invokeLater("$injector", "invoke"), moduleInstance = {
                        _invokeQueue: invokeQueue,
                        _runBlocks: runBlocks,
                        requires: requires,
                        name: name,
                        provider: invokeLater("$provide", "provider"),
                        factory: invokeLater("$provide", "factory"),
                        service: invokeLater("$provide", "service"),
                        value: invokeLater("$provide", "value"),
                        constant: invokeLater("$provide", "constant", "unshift"),
                        animation: invokeLater("$animateProvider", "register"),
                        filter: invokeLater("$filterProvider", "register"),
                        controller: invokeLater("$controllerProvider", "register"),
                        directive: invokeLater("$compileProvider", "directive"),
                        config: config,
                        run: function(block) {
                            return runBlocks.push(block), this;
                        }
                    };
                    return configFn && config(configFn), moduleInstance;
                });
            };
        });
    }
    function publishExternalAPI(angular) {
        extend(angular, {
            bootstrap: bootstrap,
            copy: copy,
            extend: extend,
            equals: equals,
            element: jqLite,
            forEach: forEach,
            injector: createInjector,
            noop: noop,
            bind: bind,
            toJson: toJson,
            fromJson: fromJson,
            identity: identity,
            isUndefined: isUndefined,
            isDefined: isDefined,
            isString: isString,
            isFunction: isFunction,
            isObject: isObject,
            isNumber: isNumber,
            isElement: isElement,
            isArray: isArray,
            version: version,
            isDate: isDate,
            lowercase: lowercase,
            uppercase: uppercase,
            callbacks: {
                counter: 0
            },
            $$minErr: minErr,
            $$csp: csp
        }), angularModule = setupModuleLoader(window);
        try {
            angularModule("ngLocale");
        } catch (e) {
            angularModule("ngLocale", []).provider("$locale", $LocaleProvider);
        }
        angularModule("ng", [ "ngLocale" ], [ "$provide", function($provide) {
            $provide.provider({
                $$sanitizeUri: $$SanitizeUriProvider
            }), $provide.provider("$compile", $CompileProvider).directive({
                a: htmlAnchorDirective,
                input: inputDirective,
                textarea: inputDirective,
                form: formDirective,
                script: scriptDirective,
                select: selectDirective,
                style: styleDirective,
                option: optionDirective,
                ngBind: ngBindDirective,
                ngBindHtml: ngBindHtmlDirective,
                ngBindTemplate: ngBindTemplateDirective,
                ngClass: ngClassDirective,
                ngClassEven: ngClassEvenDirective,
                ngClassOdd: ngClassOddDirective,
                ngCloak: ngCloakDirective,
                ngController: ngControllerDirective,
                ngForm: ngFormDirective,
                ngHide: ngHideDirective,
                ngIf: ngIfDirective,
                ngInclude: ngIncludeDirective,
                ngInit: ngInitDirective,
                ngNonBindable: ngNonBindableDirective,
                ngPluralize: ngPluralizeDirective,
                ngRepeat: ngRepeatDirective,
                ngShow: ngShowDirective,
                ngStyle: ngStyleDirective,
                ngSwitch: ngSwitchDirective,
                ngSwitchWhen: ngSwitchWhenDirective,
                ngSwitchDefault: ngSwitchDefaultDirective,
                ngOptions: ngOptionsDirective,
                ngTransclude: ngTranscludeDirective,
                ngModel: ngModelDirective,
                ngList: ngListDirective,
                ngChange: ngChangeDirective,
                required: requiredDirective,
                ngRequired: requiredDirective,
                ngValue: ngValueDirective
            }).directive({
                ngInclude: ngIncludeFillContentDirective
            }).directive(ngAttributeAliasDirectives).directive(ngEventDirectives), $provide.provider({
                $anchorScroll: $AnchorScrollProvider,
                $animate: $AnimateProvider,
                $browser: $BrowserProvider,
                $cacheFactory: $CacheFactoryProvider,
                $controller: $ControllerProvider,
                $document: $DocumentProvider,
                $exceptionHandler: $ExceptionHandlerProvider,
                $filter: $FilterProvider,
                $interpolate: $InterpolateProvider,
                $interval: $IntervalProvider,
                $http: $HttpProvider,
                $httpBackend: $HttpBackendProvider,
                $location: $LocationProvider,
                $log: $LogProvider,
                $parse: $ParseProvider,
                $rootScope: $RootScopeProvider,
                $q: $QProvider,
                $sce: $SceProvider,
                $sceDelegate: $SceDelegateProvider,
                $sniffer: $SnifferProvider,
                $templateCache: $TemplateCacheProvider,
                $timeout: $TimeoutProvider,
                $window: $WindowProvider,
                $$rAF: $$RAFProvider,
                $$asyncCallback: $$AsyncCallbackProvider
            });
        } ]);
    }
    function jqNextId() {
        return ++jqId;
    }
    function camelCase(name) {
        return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter;
        }).replace(MOZ_HACK_REGEXP, "Moz$1");
    }
    function jqLitePatchJQueryRemove(name, dispatchThis, filterElems, getterIfNoArguments) {
        function removePatch(param) {
            var set, setIndex, setLength, element, childIndex, childLength, children, list = filterElems && param ? [ this.filter(param) ] : [ this ], fireEvent = dispatchThis;
            if (!getterIfNoArguments || null != param) for (;list.length; ) for (set = list.shift(), 
            setIndex = 0, setLength = set.length; setLength > setIndex; setIndex++) for (element = jqLite(set[setIndex]), 
            fireEvent ? element.triggerHandler("$destroy") : fireEvent = !fireEvent, childIndex = 0, 
            childLength = (children = element.children()).length; childLength > childIndex; childIndex++) list.push(jQuery(children[childIndex]));
            return originalJqFn.apply(this, arguments);
        }
        var originalJqFn = jQuery.fn[name];
        originalJqFn = originalJqFn.$original || originalJqFn, removePatch.$original = originalJqFn, 
        jQuery.fn[name] = removePatch;
    }
    function jqLiteIsTextNode(html) {
        return !HTML_REGEXP.test(html);
    }
    function jqLiteBuildFragment(html, context) {
        var tmp, tag, wrap, i, j, jj, fragment = context.createDocumentFragment(), nodes = [];
        if (jqLiteIsTextNode(html)) nodes.push(context.createTextNode(html)); else {
            for (tmp = fragment.appendChild(context.createElement("div")), tag = (TAG_NAME_REGEXP.exec(html) || [ "", "" ])[1].toLowerCase(), 
            wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = "<div>&#160;</div>" + wrap[1] + html.replace(XHTML_TAG_REGEXP, "<$1></$2>") + wrap[2], 
            tmp.removeChild(tmp.firstChild), i = wrap[0]; i--; ) tmp = tmp.lastChild;
            for (j = 0, jj = tmp.childNodes.length; jj > j; ++j) nodes.push(tmp.childNodes[j]);
            tmp = fragment.firstChild, tmp.textContent = "";
        }
        return fragment.textContent = "", fragment.innerHTML = "", nodes;
    }
    function jqLiteParseHTML(html, context) {
        context = context || document;
        var parsed;
        return (parsed = SINGLE_TAG_REGEXP.exec(html)) ? [ context.createElement(parsed[1]) ] : jqLiteBuildFragment(html, context);
    }
    function JQLite(element) {
        if (element instanceof JQLite) return element;
        if (isString(element) && (element = trim(element)), !(this instanceof JQLite)) {
            if (isString(element) && "<" != element.charAt(0)) throw jqLiteMinErr("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
            return new JQLite(element);
        }
        if (isString(element)) {
            jqLiteAddNodes(this, jqLiteParseHTML(element));
            var fragment = jqLite(document.createDocumentFragment());
            fragment.append(this);
        } else jqLiteAddNodes(this, element);
    }
    function jqLiteClone(element) {
        return element.cloneNode(!0);
    }
    function jqLiteDealoc(element) {
        jqLiteRemoveData(element);
        for (var i = 0, children = element.childNodes || []; i < children.length; i++) jqLiteDealoc(children[i]);
    }
    function jqLiteOff(element, type, fn, unsupported) {
        if (isDefined(unsupported)) throw jqLiteMinErr("offargs", "jqLite#off() does not support the `selector` argument");
        var events = jqLiteExpandoStore(element, "events"), handle = jqLiteExpandoStore(element, "handle");
        handle && (isUndefined(type) ? forEach(events, function(eventHandler, type) {
            removeEventListenerFn(element, type, eventHandler), delete events[type];
        }) : forEach(type.split(" "), function(type) {
            isUndefined(fn) ? (removeEventListenerFn(element, type, events[type]), delete events[type]) : arrayRemove(events[type] || [], fn);
        }));
    }
    function jqLiteRemoveData(element, name) {
        var expandoId = element.ng339, expandoStore = jqCache[expandoId];
        if (expandoStore) {
            if (name) return void delete jqCache[expandoId].data[name];
            expandoStore.handle && (expandoStore.events.$destroy && expandoStore.handle({}, "$destroy"), 
            jqLiteOff(element)), delete jqCache[expandoId], element.ng339 = undefined;
        }
    }
    function jqLiteExpandoStore(element, key, value) {
        var expandoId = element.ng339, expandoStore = jqCache[expandoId || -1];
        return isDefined(value) ? (expandoStore || (element.ng339 = expandoId = jqNextId(), 
        expandoStore = jqCache[expandoId] = {}), void (expandoStore[key] = value)) : expandoStore && expandoStore[key];
    }
    function jqLiteData(element, key, value) {
        var data = jqLiteExpandoStore(element, "data"), isSetter = isDefined(value), keyDefined = !isSetter && isDefined(key), isSimpleGetter = keyDefined && !isObject(key);
        if (data || isSimpleGetter || jqLiteExpandoStore(element, "data", data = {}), isSetter) data[key] = value; else {
            if (!keyDefined) return data;
            if (isSimpleGetter) return data && data[key];
            extend(data, key);
        }
    }
    function jqLiteHasClass(element, selector) {
        return element.getAttribute ? (" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + selector + " ") > -1 : !1;
    }
    function jqLiteRemoveClass(element, cssClasses) {
        cssClasses && element.setAttribute && forEach(cssClasses.split(" "), function(cssClass) {
            element.setAttribute("class", trim((" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + trim(cssClass) + " ", " ")));
        });
    }
    function jqLiteAddClass(element, cssClasses) {
        if (cssClasses && element.setAttribute) {
            var existingClasses = (" " + (element.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            forEach(cssClasses.split(" "), function(cssClass) {
                cssClass = trim(cssClass), -1 === existingClasses.indexOf(" " + cssClass + " ") && (existingClasses += cssClass + " ");
            }), element.setAttribute("class", trim(existingClasses));
        }
    }
    function jqLiteAddNodes(root, elements) {
        if (elements) {
            elements = elements.nodeName || !isDefined(elements.length) || isWindow(elements) ? [ elements ] : elements;
            for (var i = 0; i < elements.length; i++) root.push(elements[i]);
        }
    }
    function jqLiteController(element, name) {
        return jqLiteInheritedData(element, "$" + (name || "ngController") + "Controller");
    }
    function jqLiteInheritedData(element, name, value) {
        9 == element.nodeType && (element = element.documentElement);
        for (var names = isArray(name) ? name : [ name ]; element; ) {
            for (var i = 0, ii = names.length; ii > i; i++) if ((value = jqLite.data(element, names[i])) !== undefined) return value;
            element = element.parentNode || 11 === element.nodeType && element.host;
        }
    }
    function jqLiteEmpty(element) {
        for (var i = 0, childNodes = element.childNodes; i < childNodes.length; i++) jqLiteDealoc(childNodes[i]);
        for (;element.firstChild; ) element.removeChild(element.firstChild);
    }
    function getBooleanAttrName(element, name) {
        var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
        return booleanAttr && BOOLEAN_ELEMENTS[element.nodeName] && booleanAttr;
    }
    function createEventHandler(element, events) {
        var eventHandler = function(event, type) {
            if (event.preventDefault || (event.preventDefault = function() {
                event.returnValue = !1;
            }), event.stopPropagation || (event.stopPropagation = function() {
                event.cancelBubble = !0;
            }), event.target || (event.target = event.srcElement || document), isUndefined(event.defaultPrevented)) {
                var prevent = event.preventDefault;
                event.preventDefault = function() {
                    event.defaultPrevented = !0, prevent.call(event);
                }, event.defaultPrevented = !1;
            }
            event.isDefaultPrevented = function() {
                return event.defaultPrevented || event.returnValue === !1;
            };
            var eventHandlersCopy = shallowCopy(events[type || event.type] || []);
            forEach(eventHandlersCopy, function(fn) {
                fn.call(element, event);
            }), 8 >= msie ? (event.preventDefault = null, event.stopPropagation = null, event.isDefaultPrevented = null) : (delete event.preventDefault, 
            delete event.stopPropagation, delete event.isDefaultPrevented);
        };
        return eventHandler.elem = element, eventHandler;
    }
    function hashKey(obj, nextUidFn) {
        var key, objType = typeof obj;
        return "function" == objType || "object" == objType && null !== obj ? "function" == typeof (key = obj.$$hashKey) ? key = obj.$$hashKey() : key === undefined && (key = obj.$$hashKey = (nextUidFn || nextUid)()) : key = obj, 
        objType + ":" + key;
    }
    function HashMap(array, isolatedUid) {
        if (isolatedUid) {
            var uid = 0;
            this.nextUid = function() {
                return ++uid;
            };
        }
        forEach(array, this.put, this);
    }
    function annotate(fn) {
        var $inject, fnText, argDecl, last;
        return "function" == typeof fn ? ($inject = fn.$inject) || ($inject = [], fn.length && (fnText = fn.toString().replace(STRIP_COMMENTS, ""), 
        argDecl = fnText.match(FN_ARGS), forEach(argDecl[1].split(FN_ARG_SPLIT), function(arg) {
            arg.replace(FN_ARG, function(all, underscore, name) {
                $inject.push(name);
            });
        })), fn.$inject = $inject) : isArray(fn) ? (last = fn.length - 1, assertArgFn(fn[last], "fn"), 
        $inject = fn.slice(0, last)) : assertArgFn(fn, "fn", !0), $inject;
    }
    function createInjector(modulesToLoad) {
        function supportObject(delegate) {
            return function(key, value) {
                return isObject(key) ? void forEach(key, reverseParams(delegate)) : delegate(key, value);
            };
        }
        function provider(name, provider_) {
            if (assertNotHasOwnProperty(name, "service"), (isFunction(provider_) || isArray(provider_)) && (provider_ = providerInjector.instantiate(provider_)), 
            !provider_.$get) throw $injectorMinErr("pget", "Provider '{0}' must define $get factory method.", name);
            return providerCache[name + providerSuffix] = provider_;
        }
        function factory(name, factoryFn) {
            return provider(name, {
                $get: factoryFn
            });
        }
        function service(name, constructor) {
            return factory(name, [ "$injector", function($injector) {
                return $injector.instantiate(constructor);
            } ]);
        }
        function value(name, val) {
            return factory(name, valueFn(val));
        }
        function constant(name, value) {
            assertNotHasOwnProperty(name, "constant"), providerCache[name] = value, instanceCache[name] = value;
        }
        function decorator(serviceName, decorFn) {
            var origProvider = providerInjector.get(serviceName + providerSuffix), orig$get = origProvider.$get;
            origProvider.$get = function() {
                var origInstance = instanceInjector.invoke(orig$get, origProvider);
                return instanceInjector.invoke(decorFn, null, {
                    $delegate: origInstance
                });
            };
        }
        function loadModules(modulesToLoad) {
            var moduleFn, invokeQueue, i, ii, runBlocks = [];
            return forEach(modulesToLoad, function(module) {
                if (!loadedModules.get(module)) {
                    loadedModules.put(module, !0);
                    try {
                        if (isString(module)) for (moduleFn = angularModule(module), runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks), 
                        invokeQueue = moduleFn._invokeQueue, i = 0, ii = invokeQueue.length; ii > i; i++) {
                            var invokeArgs = invokeQueue[i], provider = providerInjector.get(invokeArgs[0]);
                            provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
                        } else isFunction(module) ? runBlocks.push(providerInjector.invoke(module)) : isArray(module) ? runBlocks.push(providerInjector.invoke(module)) : assertArgFn(module, "module");
                    } catch (e) {
                        throw isArray(module) && (module = module[module.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), 
                        $injectorMinErr("modulerr", "Failed to instantiate module {0} due to:\n{1}", module, e.stack || e.message || e);
                    }
                }
            }), runBlocks;
        }
        function createInternalInjector(cache, factory) {
            function getService(serviceName) {
                if (cache.hasOwnProperty(serviceName)) {
                    if (cache[serviceName] === INSTANTIATING) throw $injectorMinErr("cdep", "Circular dependency found: {0}", serviceName + " <- " + path.join(" <- "));
                    return cache[serviceName];
                }
                try {
                    return path.unshift(serviceName), cache[serviceName] = INSTANTIATING, cache[serviceName] = factory(serviceName);
                } catch (err) {
                    throw cache[serviceName] === INSTANTIATING && delete cache[serviceName], err;
                } finally {
                    path.shift();
                }
            }
            function invoke(fn, self, locals) {
                var length, i, key, args = [], $inject = annotate(fn);
                for (i = 0, length = $inject.length; length > i; i++) {
                    if (key = $inject[i], "string" != typeof key) throw $injectorMinErr("itkn", "Incorrect injection token! Expected service name as string, got {0}", key);
                    args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key));
                }
                return isArray(fn) && (fn = fn[length]), fn.apply(self, args);
            }
            function instantiate(Type, locals) {
                var instance, returnedValue, Constructor = function() {};
                return Constructor.prototype = (isArray(Type) ? Type[Type.length - 1] : Type).prototype, 
                instance = new Constructor(), returnedValue = invoke(Type, instance, locals), isObject(returnedValue) || isFunction(returnedValue) ? returnedValue : instance;
            }
            return {
                invoke: invoke,
                instantiate: instantiate,
                get: getService,
                annotate: annotate,
                has: function(name) {
                    return providerCache.hasOwnProperty(name + providerSuffix) || cache.hasOwnProperty(name);
                }
            };
        }
        var INSTANTIATING = {}, providerSuffix = "Provider", path = [], loadedModules = new HashMap([], !0), providerCache = {
            $provide: {
                provider: supportObject(provider),
                factory: supportObject(factory),
                service: supportObject(service),
                value: supportObject(value),
                constant: supportObject(constant),
                decorator: decorator
            }
        }, providerInjector = providerCache.$injector = createInternalInjector(providerCache, function() {
            throw $injectorMinErr("unpr", "Unknown provider: {0}", path.join(" <- "));
        }), instanceCache = {}, instanceInjector = instanceCache.$injector = createInternalInjector(instanceCache, function(servicename) {
            var provider = providerInjector.get(servicename + providerSuffix);
            return instanceInjector.invoke(provider.$get, provider);
        });
        return forEach(loadModules(modulesToLoad), function(fn) {
            instanceInjector.invoke(fn || noop);
        }), instanceInjector;
    }
    function $AnchorScrollProvider() {
        var autoScrollingEnabled = !0;
        this.disableAutoScrolling = function() {
            autoScrollingEnabled = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function($window, $location, $rootScope) {
            function getFirstAnchor(list) {
                var result = null;
                return forEach(list, function(element) {
                    result || "a" !== lowercase(element.nodeName) || (result = element);
                }), result;
            }
            function scroll() {
                var elm, hash = $location.hash();
                hash ? (elm = document.getElementById(hash)) ? elm.scrollIntoView() : (elm = getFirstAnchor(document.getElementsByName(hash))) ? elm.scrollIntoView() : "top" === hash && $window.scrollTo(0, 0) : $window.scrollTo(0, 0);
            }
            var document = $window.document;
            return autoScrollingEnabled && $rootScope.$watch(function() {
                return $location.hash();
            }, function() {
                $rootScope.$evalAsync(scroll);
            }), scroll;
        } ];
    }
    function $$AsyncCallbackProvider() {
        this.$get = [ "$$rAF", "$timeout", function($$rAF, $timeout) {
            return $$rAF.supported ? function(fn) {
                return $$rAF(fn);
            } : function(fn) {
                return $timeout(fn, 0, !1);
            };
        } ];
    }
    function Browser(window, document, $log, $sniffer) {
        function completeOutstandingRequest(fn) {
            try {
                fn.apply(null, sliceArgs(arguments, 1));
            } finally {
                if (outstandingRequestCount--, 0 === outstandingRequestCount) for (;outstandingRequestCallbacks.length; ) try {
                    outstandingRequestCallbacks.pop()();
                } catch (e) {
                    $log.error(e);
                }
            }
        }
        function startPoller(interval, setTimeout) {
            !function check() {
                forEach(pollFns, function(pollFn) {
                    pollFn();
                }), pollTimeout = setTimeout(check, interval);
            }();
        }
        function fireUrlChange() {
            newLocation = null, lastBrowserUrl != self.url() && (lastBrowserUrl = self.url(), 
            forEach(urlChangeListeners, function(listener) {
                listener(self.url());
            }));
        }
        var self = this, rawDocument = document[0], location = window.location, history = window.history, setTimeout = window.setTimeout, clearTimeout = window.clearTimeout, pendingDeferIds = {};
        self.isMock = !1;
        var outstandingRequestCount = 0, outstandingRequestCallbacks = [];
        self.$$completeOutstandingRequest = completeOutstandingRequest, self.$$incOutstandingRequestCount = function() {
            outstandingRequestCount++;
        }, self.notifyWhenNoOutstandingRequests = function(callback) {
            forEach(pollFns, function(pollFn) {
                pollFn();
            }), 0 === outstandingRequestCount ? callback() : outstandingRequestCallbacks.push(callback);
        };
        var pollTimeout, pollFns = [];
        self.addPollFn = function(fn) {
            return isUndefined(pollTimeout) && startPoller(100, setTimeout), pollFns.push(fn), 
            fn;
        };
        var lastBrowserUrl = location.href, baseElement = document.find("base"), newLocation = null;
        self.url = function(url, replace) {
            if (location !== window.location && (location = window.location), history !== window.history && (history = window.history), 
            url) {
                if (lastBrowserUrl == url) return;
                return lastBrowserUrl = url, $sniffer.history ? replace ? history.replaceState(null, "", url) : (history.pushState(null, "", url), 
                baseElement.attr("href", baseElement.attr("href"))) : (newLocation = url, replace ? location.replace(url) : location.href = url), 
                self;
            }
            return newLocation || location.href.replace(/%27/g, "'");
        };
        var urlChangeListeners = [], urlChangeInit = !1;
        self.onUrlChange = function(callback) {
            return urlChangeInit || ($sniffer.history && jqLite(window).on("popstate", fireUrlChange), 
            $sniffer.hashchange ? jqLite(window).on("hashchange", fireUrlChange) : self.addPollFn(fireUrlChange), 
            urlChangeInit = !0), urlChangeListeners.push(callback), callback;
        }, self.baseHref = function() {
            var href = baseElement.attr("href");
            return href ? href.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var lastCookies = {}, lastCookieString = "", cookiePath = self.baseHref();
        self.cookies = function(name, value) {
            var cookieLength, cookieArray, cookie, i, index;
            if (!name) {
                if (rawDocument.cookie !== lastCookieString) for (lastCookieString = rawDocument.cookie, 
                cookieArray = lastCookieString.split("; "), lastCookies = {}, i = 0; i < cookieArray.length; i++) cookie = cookieArray[i], 
                index = cookie.indexOf("="), index > 0 && (name = unescape(cookie.substring(0, index)), 
                lastCookies[name] === undefined && (lastCookies[name] = unescape(cookie.substring(index + 1))));
                return lastCookies;
            }
            value === undefined ? rawDocument.cookie = escape(name) + "=;path=" + cookiePath + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : isString(value) && (cookieLength = (rawDocument.cookie = escape(name) + "=" + escape(value) + ";path=" + cookiePath).length + 1, 
            cookieLength > 4096 && $log.warn("Cookie '" + name + "' possibly not set or overflowed because it was too large (" + cookieLength + " > 4096 bytes)!"));
        }, self.defer = function(fn, delay) {
            var timeoutId;
            return outstandingRequestCount++, timeoutId = setTimeout(function() {
                delete pendingDeferIds[timeoutId], completeOutstandingRequest(fn);
            }, delay || 0), pendingDeferIds[timeoutId] = !0, timeoutId;
        }, self.defer.cancel = function(deferId) {
            return pendingDeferIds[deferId] ? (delete pendingDeferIds[deferId], clearTimeout(deferId), 
            completeOutstandingRequest(noop), !0) : !1;
        };
    }
    function $BrowserProvider() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function($window, $log, $sniffer, $document) {
            return new Browser($window, $document, $log, $sniffer);
        } ];
    }
    function $CacheFactoryProvider() {
        this.$get = function() {
            function cacheFactory(cacheId, options) {
                function refresh(entry) {
                    entry != freshEnd && (staleEnd ? staleEnd == entry && (staleEnd = entry.n) : staleEnd = entry, 
                    link(entry.n, entry.p), link(entry, freshEnd), freshEnd = entry, freshEnd.n = null);
                }
                function link(nextEntry, prevEntry) {
                    nextEntry != prevEntry && (nextEntry && (nextEntry.p = prevEntry), prevEntry && (prevEntry.n = nextEntry));
                }
                if (cacheId in caches) throw minErr("$cacheFactory")("iid", "CacheId '{0}' is already taken!", cacheId);
                var size = 0, stats = extend({}, options, {
                    id: cacheId
                }), data = {}, capacity = options && options.capacity || Number.MAX_VALUE, lruHash = {}, freshEnd = null, staleEnd = null;
                return caches[cacheId] = {
                    put: function(key, value) {
                        if (capacity < Number.MAX_VALUE) {
                            var lruEntry = lruHash[key] || (lruHash[key] = {
                                key: key
                            });
                            refresh(lruEntry);
                        }
                        if (!isUndefined(value)) return key in data || size++, data[key] = value, size > capacity && this.remove(staleEnd.key), 
                        value;
                    },
                    get: function(key) {
                        if (capacity < Number.MAX_VALUE) {
                            var lruEntry = lruHash[key];
                            if (!lruEntry) return;
                            refresh(lruEntry);
                        }
                        return data[key];
                    },
                    remove: function(key) {
                        if (capacity < Number.MAX_VALUE) {
                            var lruEntry = lruHash[key];
                            if (!lruEntry) return;
                            lruEntry == freshEnd && (freshEnd = lruEntry.p), lruEntry == staleEnd && (staleEnd = lruEntry.n), 
                            link(lruEntry.n, lruEntry.p), delete lruHash[key];
                        }
                        delete data[key], size--;
                    },
                    removeAll: function() {
                        data = {}, size = 0, lruHash = {}, freshEnd = staleEnd = null;
                    },
                    destroy: function() {
                        data = null, stats = null, lruHash = null, delete caches[cacheId];
                    },
                    info: function() {
                        return extend({}, stats, {
                            size: size
                        });
                    }
                };
            }
            var caches = {};
            return cacheFactory.info = function() {
                var info = {};
                return forEach(caches, function(cache, cacheId) {
                    info[cacheId] = cache.info();
                }), info;
            }, cacheFactory.get = function(cacheId) {
                return caches[cacheId];
            }, cacheFactory;
        };
    }
    function $TemplateCacheProvider() {
        this.$get = [ "$cacheFactory", function($cacheFactory) {
            return $cacheFactory("templates");
        } ];
    }
    function $CompileProvider($provide, $$sanitizeUriProvider) {
        var hasDirectives = {}, Suffix = "Directive", COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, CLASS_DIRECTIVE_REGEXP = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, EVENT_HANDLER_ATTR_REGEXP = /^(on[a-z]+|formaction)$/;
        this.directive = function registerDirective(name, directiveFactory) {
            return assertNotHasOwnProperty(name, "directive"), isString(name) ? (assertArg(directiveFactory, "directiveFactory"), 
            hasDirectives.hasOwnProperty(name) || (hasDirectives[name] = [], $provide.factory(name + Suffix, [ "$injector", "$exceptionHandler", function($injector, $exceptionHandler) {
                var directives = [];
                return forEach(hasDirectives[name], function(directiveFactory, index) {
                    try {
                        var directive = $injector.invoke(directiveFactory);
                        isFunction(directive) ? directive = {
                            compile: valueFn(directive)
                        } : !directive.compile && directive.link && (directive.compile = valueFn(directive.link)), 
                        directive.priority = directive.priority || 0, directive.index = index, directive.name = directive.name || name, 
                        directive.require = directive.require || directive.controller && directive.name, 
                        directive.restrict = directive.restrict || "A", directives.push(directive);
                    } catch (e) {
                        $exceptionHandler(e);
                    }
                }), directives;
            } ])), hasDirectives[name].push(directiveFactory)) : forEach(name, reverseParams(registerDirective)), 
            this;
        }, this.aHrefSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? ($$sanitizeUriProvider.aHrefSanitizationWhitelist(regexp), 
            this) : $$sanitizeUriProvider.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? ($$sanitizeUriProvider.imgSrcSanitizationWhitelist(regexp), 
            this) : $$sanitizeUriProvider.imgSrcSanitizationWhitelist();
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function($injector, $interpolate, $exceptionHandler, $http, $templateCache, $parse, $controller, $rootScope, $document, $sce, $animate, $$sanitizeUri) {
            function compile($compileNodes, transcludeFn, maxPriority, ignoreDirective, previousCompileContext) {
                $compileNodes instanceof jqLite || ($compileNodes = jqLite($compileNodes)), forEach($compileNodes, function(node, index) {
                    3 == node.nodeType && node.nodeValue.match(/\S+/) && ($compileNodes[index] = node = jqLite(node).wrap("<span></span>").parent()[0]);
                });
                var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority, ignoreDirective, previousCompileContext);
                return safeAddClass($compileNodes, "ng-scope"), function(scope, cloneConnectFn, transcludeControllers, parentBoundTranscludeFn) {
                    assertArg(scope, "scope");
                    var $linkNode = cloneConnectFn ? JQLitePrototype.clone.call($compileNodes) : $compileNodes;
                    forEach(transcludeControllers, function(instance, name) {
                        $linkNode.data("$" + name + "Controller", instance);
                    });
                    for (var i = 0, ii = $linkNode.length; ii > i; i++) {
                        var node = $linkNode[i], nodeType = node.nodeType;
                        (1 === nodeType || 9 === nodeType) && $linkNode.eq(i).data("$scope", scope);
                    }
                    return cloneConnectFn && cloneConnectFn($linkNode, scope), compositeLinkFn && compositeLinkFn(scope, $linkNode, $linkNode, parentBoundTranscludeFn), 
                    $linkNode;
                };
            }
            function safeAddClass($element, className) {
                try {
                    $element.addClass(className);
                } catch (e) {}
            }
            function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority, ignoreDirective, previousCompileContext) {
                function compositeLinkFn(scope, nodeList, $rootElement, parentBoundTranscludeFn) {
                    var nodeLinkFn, childLinkFn, node, childScope, i, ii, n, childBoundTranscludeFn, nodeListLength = nodeList.length, stableNodeList = new Array(nodeListLength);
                    for (i = 0; nodeListLength > i; i++) stableNodeList[i] = nodeList[i];
                    for (i = 0, n = 0, ii = linkFns.length; ii > i; n++) node = stableNodeList[n], nodeLinkFn = linkFns[i++], 
                    childLinkFn = linkFns[i++], nodeLinkFn ? (nodeLinkFn.scope ? (childScope = scope.$new(), 
                    jqLite.data(node, "$scope", childScope)) : childScope = scope, childBoundTranscludeFn = nodeLinkFn.transcludeOnThisElement ? createBoundTranscludeFn(scope, nodeLinkFn.transclude, parentBoundTranscludeFn) : !nodeLinkFn.templateOnThisElement && parentBoundTranscludeFn ? parentBoundTranscludeFn : !parentBoundTranscludeFn && transcludeFn ? createBoundTranscludeFn(scope, transcludeFn) : null, 
                    nodeLinkFn(childLinkFn, childScope, node, $rootElement, childBoundTranscludeFn)) : childLinkFn && childLinkFn(scope, node.childNodes, undefined, parentBoundTranscludeFn);
                }
                for (var attrs, directives, nodeLinkFn, childNodes, childLinkFn, linkFnFound, linkFns = [], i = 0; i < nodeList.length; i++) attrs = new Attributes(), 
                directives = collectDirectives(nodeList[i], [], attrs, 0 === i ? maxPriority : undefined, ignoreDirective), 
                nodeLinkFn = directives.length ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement, null, [], [], previousCompileContext) : null, 
                nodeLinkFn && nodeLinkFn.scope && safeAddClass(attrs.$$element, "ng-scope"), childLinkFn = nodeLinkFn && nodeLinkFn.terminal || !(childNodes = nodeList[i].childNodes) || !childNodes.length ? null : compileNodes(childNodes, nodeLinkFn ? (nodeLinkFn.transcludeOnThisElement || !nodeLinkFn.templateOnThisElement) && nodeLinkFn.transclude : transcludeFn), 
                linkFns.push(nodeLinkFn, childLinkFn), linkFnFound = linkFnFound || nodeLinkFn || childLinkFn, 
                previousCompileContext = null;
                return linkFnFound ? compositeLinkFn : null;
            }
            function createBoundTranscludeFn(scope, transcludeFn, previousBoundTranscludeFn) {
                var boundTranscludeFn = function(transcludedScope, cloneFn, controllers) {
                    var scopeCreated = !1;
                    transcludedScope || (transcludedScope = scope.$new(), transcludedScope.$$transcluded = !0, 
                    scopeCreated = !0);
                    var clone = transcludeFn(transcludedScope, cloneFn, controllers, previousBoundTranscludeFn);
                    return scopeCreated && clone.on("$destroy", function() {
                        transcludedScope.$destroy();
                    }), clone;
                };
                return boundTranscludeFn;
            }
            function collectDirectives(node, directives, attrs, maxPriority, ignoreDirective) {
                var match, className, nodeType = node.nodeType, attrsMap = attrs.$attr;
                switch (nodeType) {
                  case 1:
                    addDirective(directives, directiveNormalize(nodeName_(node).toLowerCase()), "E", maxPriority, ignoreDirective);
                    for (var attr, name, nName, ngAttrName, value, isNgAttr, nAttrs = node.attributes, j = 0, jj = nAttrs && nAttrs.length; jj > j; j++) {
                        var attrStartName = !1, attrEndName = !1;
                        if (attr = nAttrs[j], !msie || msie >= 8 || attr.specified) {
                            name = attr.name, value = trim(attr.value), ngAttrName = directiveNormalize(name), 
                            (isNgAttr = NG_ATTR_BINDING.test(ngAttrName)) && (name = snake_case(ngAttrName.substr(6), "-"));
                            var directiveNName = ngAttrName.replace(/(Start|End)$/, "");
                            ngAttrName === directiveNName + "Start" && (attrStartName = name, attrEndName = name.substr(0, name.length - 5) + "end", 
                            name = name.substr(0, name.length - 6)), nName = directiveNormalize(name.toLowerCase()), 
                            attrsMap[nName] = name, (isNgAttr || !attrs.hasOwnProperty(nName)) && (attrs[nName] = value, 
                            getBooleanAttrName(node, nName) && (attrs[nName] = !0)), addAttrInterpolateDirective(node, directives, value, nName), 
                            addDirective(directives, nName, "A", maxPriority, ignoreDirective, attrStartName, attrEndName);
                        }
                    }
                    if (className = node.className, isString(className) && "" !== className) for (;match = CLASS_DIRECTIVE_REGEXP.exec(className); ) nName = directiveNormalize(match[2]), 
                    addDirective(directives, nName, "C", maxPriority, ignoreDirective) && (attrs[nName] = trim(match[3])), 
                    className = className.substr(match.index + match[0].length);
                    break;

                  case 3:
                    addTextInterpolateDirective(directives, node.nodeValue);
                    break;

                  case 8:
                    try {
                        match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue), match && (nName = directiveNormalize(match[1]), 
                        addDirective(directives, nName, "M", maxPriority, ignoreDirective) && (attrs[nName] = trim(match[2])));
                    } catch (e) {}
                }
                return directives.sort(byPriority), directives;
            }
            function groupScan(node, attrStart, attrEnd) {
                var nodes = [], depth = 0;
                if (attrStart && node.hasAttribute && node.hasAttribute(attrStart)) {
                    do {
                        if (!node) throw $compileMinErr("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", attrStart, attrEnd);
                        1 == node.nodeType && (node.hasAttribute(attrStart) && depth++, node.hasAttribute(attrEnd) && depth--), 
                        nodes.push(node), node = node.nextSibling;
                    } while (depth > 0);
                } else nodes.push(node);
                return jqLite(nodes);
            }
            function groupElementsLinkFnWrapper(linkFn, attrStart, attrEnd) {
                return function(scope, element, attrs, controllers, transcludeFn) {
                    return element = groupScan(element[0], attrStart, attrEnd), linkFn(scope, element, attrs, controllers, transcludeFn);
                };
            }
            function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection, originalReplaceDirective, preLinkFns, postLinkFns, previousCompileContext) {
                function addLinkFns(pre, post, attrStart, attrEnd) {
                    pre && (attrStart && (pre = groupElementsLinkFnWrapper(pre, attrStart, attrEnd)), 
                    pre.require = directive.require, pre.directiveName = directiveName, (newIsolateScopeDirective === directive || directive.$$isolateScope) && (pre = cloneAndAnnotateFn(pre, {
                        isolateScope: !0
                    })), preLinkFns.push(pre)), post && (attrStart && (post = groupElementsLinkFnWrapper(post, attrStart, attrEnd)), 
                    post.require = directive.require, post.directiveName = directiveName, (newIsolateScopeDirective === directive || directive.$$isolateScope) && (post = cloneAndAnnotateFn(post, {
                        isolateScope: !0
                    })), postLinkFns.push(post));
                }
                function getControllers(directiveName, require, $element, elementControllers) {
                    var value, retrievalMethod = "data", optional = !1;
                    if (isString(require)) {
                        for (;"^" == (value = require.charAt(0)) || "?" == value; ) require = require.substr(1), 
                        "^" == value && (retrievalMethod = "inheritedData"), optional = optional || "?" == value;
                        if (value = null, elementControllers && "data" === retrievalMethod && (value = elementControllers[require]), 
                        value = value || $element[retrievalMethod]("$" + require + "Controller"), !value && !optional) throw $compileMinErr("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", require, directiveName);
                        return value;
                    }
                    return isArray(require) && (value = [], forEach(require, function(require) {
                        value.push(getControllers(directiveName, require, $element, elementControllers));
                    })), value;
                }
                function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
                    function controllersBoundTransclude(scope, cloneAttachFn) {
                        var transcludeControllers;
                        return arguments.length < 2 && (cloneAttachFn = scope, scope = undefined), hasElementTranscludeDirective && (transcludeControllers = elementControllers), 
                        boundTranscludeFn(scope, cloneAttachFn, transcludeControllers);
                    }
                    var attrs, $element, i, ii, linkFn, controller, isolateScope, transcludeFn, elementControllers = {};
                    if (attrs = compileNode === linkNode ? templateAttrs : shallowCopy(templateAttrs, new Attributes(jqLite(linkNode), templateAttrs.$attr)), 
                    $element = attrs.$$element, newIsolateScopeDirective) {
                        var LOCAL_REGEXP = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        isolateScope = scope.$new(!0), !templateDirective || templateDirective !== newIsolateScopeDirective && templateDirective !== newIsolateScopeDirective.$$originalDirective ? $element.data("$isolateScopeNoTemplate", isolateScope) : $element.data("$isolateScope", isolateScope), 
                        safeAddClass($element, "ng-isolate-scope"), forEach(newIsolateScopeDirective.scope, function(definition, scopeName) {
                            var lastValue, parentGet, parentSet, compare, match = definition.match(LOCAL_REGEXP) || [], attrName = match[3] || scopeName, optional = "?" == match[2], mode = match[1];
                            switch (isolateScope.$$isolateBindings[scopeName] = mode + attrName, mode) {
                              case "@":
                                attrs.$observe(attrName, function(value) {
                                    isolateScope[scopeName] = value;
                                }), attrs.$$observers[attrName].$$scope = scope, attrs[attrName] && (isolateScope[scopeName] = $interpolate(attrs[attrName])(scope));
                                break;

                              case "=":
                                if (optional && !attrs[attrName]) return;
                                parentGet = $parse(attrs[attrName]), compare = parentGet.literal ? equals : function(a, b) {
                                    return a === b;
                                }, parentSet = parentGet.assign || function() {
                                    throw lastValue = isolateScope[scopeName] = parentGet(scope), $compileMinErr("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", attrs[attrName], newIsolateScopeDirective.name);
                                }, lastValue = isolateScope[scopeName] = parentGet(scope), isolateScope.$watch(function() {
                                    var parentValue = parentGet(scope);
                                    return compare(parentValue, isolateScope[scopeName]) || (compare(parentValue, lastValue) ? parentSet(scope, parentValue = isolateScope[scopeName]) : isolateScope[scopeName] = parentValue), 
                                    lastValue = parentValue;
                                }, null, parentGet.literal);
                                break;

                              case "&":
                                parentGet = $parse(attrs[attrName]), isolateScope[scopeName] = function(locals) {
                                    return parentGet(scope, locals);
                                };
                                break;

                              default:
                                throw $compileMinErr("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", newIsolateScopeDirective.name, scopeName, definition);
                            }
                        });
                    }
                    for (transcludeFn = boundTranscludeFn && controllersBoundTransclude, controllerDirectives && forEach(controllerDirectives, function(directive) {
                        var controllerInstance, locals = {
                            $scope: directive === newIsolateScopeDirective || directive.$$isolateScope ? isolateScope : scope,
                            $element: $element,
                            $attrs: attrs,
                            $transclude: transcludeFn
                        };
                        controller = directive.controller, "@" == controller && (controller = attrs[directive.name]), 
                        controllerInstance = $controller(controller, locals), elementControllers[directive.name] = controllerInstance, 
                        hasElementTranscludeDirective || $element.data("$" + directive.name + "Controller", controllerInstance), 
                        directive.controllerAs && (locals.$scope[directive.controllerAs] = controllerInstance);
                    }), i = 0, ii = preLinkFns.length; ii > i; i++) try {
                        linkFn = preLinkFns[i], linkFn(linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
                    } catch (e) {
                        $exceptionHandler(e, startingTag($element));
                    }
                    var scopeToChild = scope;
                    for (newIsolateScopeDirective && (newIsolateScopeDirective.template || null === newIsolateScopeDirective.templateUrl) && (scopeToChild = isolateScope), 
                    childLinkFn && childLinkFn(scopeToChild, linkNode.childNodes, undefined, boundTranscludeFn), 
                    i = postLinkFns.length - 1; i >= 0; i--) try {
                        linkFn = postLinkFns[i], linkFn(linkFn.isolateScope ? isolateScope : scope, $element, attrs, linkFn.require && getControllers(linkFn.directiveName, linkFn.require, $element, elementControllers), transcludeFn);
                    } catch (e) {
                        $exceptionHandler(e, startingTag($element));
                    }
                }
                previousCompileContext = previousCompileContext || {};
                for (var newScopeDirective, directive, directiveName, $template, linkFn, directiveValue, terminalPriority = -Number.MAX_VALUE, controllerDirectives = previousCompileContext.controllerDirectives, newIsolateScopeDirective = previousCompileContext.newIsolateScopeDirective, templateDirective = previousCompileContext.templateDirective, nonTlbTranscludeDirective = previousCompileContext.nonTlbTranscludeDirective, hasTranscludeDirective = !1, hasTemplate = !1, hasElementTranscludeDirective = previousCompileContext.hasElementTranscludeDirective, $compileNode = templateAttrs.$$element = jqLite(compileNode), replaceDirective = originalReplaceDirective, childTranscludeFn = transcludeFn, i = 0, ii = directives.length; ii > i; i++) {
                    directive = directives[i];
                    var attrStart = directive.$$start, attrEnd = directive.$$end;
                    if (attrStart && ($compileNode = groupScan(compileNode, attrStart, attrEnd)), $template = undefined, 
                    terminalPriority > directive.priority) break;
                    if ((directiveValue = directive.scope) && (newScopeDirective = newScopeDirective || directive, 
                    directive.templateUrl || (assertNoDuplicate("new/isolated scope", newIsolateScopeDirective, directive, $compileNode), 
                    isObject(directiveValue) && (newIsolateScopeDirective = directive))), directiveName = directive.name, 
                    !directive.templateUrl && directive.controller && (directiveValue = directive.controller, 
                    controllerDirectives = controllerDirectives || {}, assertNoDuplicate("'" + directiveName + "' controller", controllerDirectives[directiveName], directive, $compileNode), 
                    controllerDirectives[directiveName] = directive), (directiveValue = directive.transclude) && (hasTranscludeDirective = !0, 
                    directive.$$tlb || (assertNoDuplicate("transclusion", nonTlbTranscludeDirective, directive, $compileNode), 
                    nonTlbTranscludeDirective = directive), "element" == directiveValue ? (hasElementTranscludeDirective = !0, 
                    terminalPriority = directive.priority, $template = $compileNode, $compileNode = templateAttrs.$$element = jqLite(document.createComment(" " + directiveName + ": " + templateAttrs[directiveName] + " ")), 
                    compileNode = $compileNode[0], replaceWith(jqCollection, sliceArgs($template), compileNode), 
                    childTranscludeFn = compile($template, transcludeFn, terminalPriority, replaceDirective && replaceDirective.name, {
                        nonTlbTranscludeDirective: nonTlbTranscludeDirective
                    })) : ($template = jqLite(jqLiteClone(compileNode)).contents(), $compileNode.empty(), 
                    childTranscludeFn = compile($template, transcludeFn))), directive.template) if (hasTemplate = !0, 
                    assertNoDuplicate("template", templateDirective, directive, $compileNode), templateDirective = directive, 
                    directiveValue = isFunction(directive.template) ? directive.template($compileNode, templateAttrs) : directive.template, 
                    directiveValue = denormalizeTemplate(directiveValue), directive.replace) {
                        if (replaceDirective = directive, $template = jqLiteIsTextNode(directiveValue) ? [] : jqLite(trim(directiveValue)), 
                        compileNode = $template[0], 1 != $template.length || 1 !== compileNode.nodeType) throw $compileMinErr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", directiveName, "");
                        replaceWith(jqCollection, $compileNode, compileNode);
                        var newTemplateAttrs = {
                            $attr: {}
                        }, templateDirectives = collectDirectives(compileNode, [], newTemplateAttrs), unprocessedDirectives = directives.splice(i + 1, directives.length - (i + 1));
                        newIsolateScopeDirective && markDirectivesAsIsolate(templateDirectives), directives = directives.concat(templateDirectives).concat(unprocessedDirectives), 
                        mergeTemplateAttributes(templateAttrs, newTemplateAttrs), ii = directives.length;
                    } else $compileNode.html(directiveValue);
                    if (directive.templateUrl) hasTemplate = !0, assertNoDuplicate("template", templateDirective, directive, $compileNode), 
                    templateDirective = directive, directive.replace && (replaceDirective = directive), 
                    nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), $compileNode, templateAttrs, jqCollection, hasTranscludeDirective && childTranscludeFn, preLinkFns, postLinkFns, {
                        controllerDirectives: controllerDirectives,
                        newIsolateScopeDirective: newIsolateScopeDirective,
                        templateDirective: templateDirective,
                        nonTlbTranscludeDirective: nonTlbTranscludeDirective
                    }), ii = directives.length; else if (directive.compile) try {
                        linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn), isFunction(linkFn) ? addLinkFns(null, linkFn, attrStart, attrEnd) : linkFn && addLinkFns(linkFn.pre, linkFn.post, attrStart, attrEnd);
                    } catch (e) {
                        $exceptionHandler(e, startingTag($compileNode));
                    }
                    directive.terminal && (nodeLinkFn.terminal = !0, terminalPriority = Math.max(terminalPriority, directive.priority));
                }
                return nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope === !0, nodeLinkFn.transcludeOnThisElement = hasTranscludeDirective, 
                nodeLinkFn.templateOnThisElement = hasTemplate, nodeLinkFn.transclude = childTranscludeFn, 
                previousCompileContext.hasElementTranscludeDirective = hasElementTranscludeDirective, 
                nodeLinkFn;
            }
            function markDirectivesAsIsolate(directives) {
                for (var j = 0, jj = directives.length; jj > j; j++) directives[j] = inherit(directives[j], {
                    $$isolateScope: !0
                });
            }
            function addDirective(tDirectives, name, location, maxPriority, ignoreDirective, startAttrName, endAttrName) {
                if (name === ignoreDirective) return null;
                var match = null;
                if (hasDirectives.hasOwnProperty(name)) for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; ii > i; i++) try {
                    directive = directives[i], (maxPriority === undefined || maxPriority > directive.priority) && -1 != directive.restrict.indexOf(location) && (startAttrName && (directive = inherit(directive, {
                        $$start: startAttrName,
                        $$end: endAttrName
                    })), tDirectives.push(directive), match = directive);
                } catch (e) {
                    $exceptionHandler(e);
                }
                return match;
            }
            function mergeTemplateAttributes(dst, src) {
                var srcAttr = src.$attr, dstAttr = dst.$attr, $element = dst.$$element;
                forEach(dst, function(value, key) {
                    "$" != key.charAt(0) && (src[key] && src[key] !== value && (value += ("style" === key ? ";" : " ") + src[key]), 
                    dst.$set(key, value, !0, srcAttr[key]));
                }), forEach(src, function(value, key) {
                    "class" == key ? (safeAddClass($element, value), dst["class"] = (dst["class"] ? dst["class"] + " " : "") + value) : "style" == key ? ($element.attr("style", $element.attr("style") + ";" + value), 
                    dst.style = (dst.style ? dst.style + ";" : "") + value) : "$" == key.charAt(0) || dst.hasOwnProperty(key) || (dst[key] = value, 
                    dstAttr[key] = srcAttr[key]);
                });
            }
            function compileTemplateUrl(directives, $compileNode, tAttrs, $rootElement, childTranscludeFn, preLinkFns, postLinkFns, previousCompileContext) {
                var afterTemplateNodeLinkFn, afterTemplateChildLinkFn, linkQueue = [], beforeTemplateCompileNode = $compileNode[0], origAsyncDirective = directives.shift(), derivedSyncDirective = extend({}, origAsyncDirective, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: origAsyncDirective
                }), templateUrl = isFunction(origAsyncDirective.templateUrl) ? origAsyncDirective.templateUrl($compileNode, tAttrs) : origAsyncDirective.templateUrl;
                return $compileNode.empty(), $http.get($sce.getTrustedResourceUrl(templateUrl), {
                    cache: $templateCache
                }).success(function(content) {
                    var compileNode, tempTemplateAttrs, $template, childBoundTranscludeFn;
                    if (content = denormalizeTemplate(content), origAsyncDirective.replace) {
                        if ($template = jqLiteIsTextNode(content) ? [] : jqLite(trim(content)), compileNode = $template[0], 
                        1 != $template.length || 1 !== compileNode.nodeType) throw $compileMinErr("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", origAsyncDirective.name, templateUrl);
                        tempTemplateAttrs = {
                            $attr: {}
                        }, replaceWith($rootElement, $compileNode, compileNode);
                        var templateDirectives = collectDirectives(compileNode, [], tempTemplateAttrs);
                        isObject(origAsyncDirective.scope) && markDirectivesAsIsolate(templateDirectives), 
                        directives = templateDirectives.concat(directives), mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
                    } else compileNode = beforeTemplateCompileNode, $compileNode.html(content);
                    for (directives.unshift(derivedSyncDirective), afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn, $compileNode, origAsyncDirective, preLinkFns, postLinkFns, previousCompileContext), 
                    forEach($rootElement, function(node, i) {
                        node == compileNode && ($rootElement[i] = $compileNode[0]);
                    }), afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn); linkQueue.length; ) {
                        var scope = linkQueue.shift(), beforeTemplateLinkNode = linkQueue.shift(), linkRootElement = linkQueue.shift(), boundTranscludeFn = linkQueue.shift(), linkNode = $compileNode[0];
                        if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                            var oldClasses = beforeTemplateLinkNode.className;
                            previousCompileContext.hasElementTranscludeDirective && origAsyncDirective.replace || (linkNode = jqLiteClone(compileNode)), 
                            replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode), safeAddClass(jqLite(linkNode), oldClasses);
                        }
                        childBoundTranscludeFn = afterTemplateNodeLinkFn.transcludeOnThisElement ? createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn) : boundTranscludeFn, 
                        afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, childBoundTranscludeFn);
                    }
                    linkQueue = null;
                }).error(function(response, code, headers, config) {
                    throw $compileMinErr("tpload", "Failed to load template: {0}", config.url);
                }), function(ignoreChildLinkFn, scope, node, rootElement, boundTranscludeFn) {
                    var childBoundTranscludeFn = boundTranscludeFn;
                    linkQueue ? (linkQueue.push(scope), linkQueue.push(node), linkQueue.push(rootElement), 
                    linkQueue.push(childBoundTranscludeFn)) : (afterTemplateNodeLinkFn.transcludeOnThisElement && (childBoundTranscludeFn = createBoundTranscludeFn(scope, afterTemplateNodeLinkFn.transclude, boundTranscludeFn)), 
                    afterTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, childBoundTranscludeFn));
                };
            }
            function byPriority(a, b) {
                var diff = b.priority - a.priority;
                return 0 !== diff ? diff : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function assertNoDuplicate(what, previousDirective, directive, element) {
                if (previousDirective) throw $compileMinErr("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", previousDirective.name, directive.name, what, startingTag(element));
            }
            function addTextInterpolateDirective(directives, text) {
                var interpolateFn = $interpolate(text, !0);
                interpolateFn && directives.push({
                    priority: 0,
                    compile: function(templateNode) {
                        var parent = templateNode.parent(), hasCompileParent = parent.length;
                        return hasCompileParent && safeAddClass(templateNode.parent(), "ng-binding"), function(scope, node) {
                            var parent = node.parent(), bindings = parent.data("$binding") || [];
                            bindings.push(interpolateFn), parent.data("$binding", bindings), hasCompileParent || safeAddClass(parent, "ng-binding"), 
                            scope.$watch(interpolateFn, function(value) {
                                node[0].nodeValue = value;
                            });
                        };
                    }
                });
            }
            function getTrustedContext(node, attrNormalizedName) {
                if ("srcdoc" == attrNormalizedName) return $sce.HTML;
                var tag = nodeName_(node);
                return "xlinkHref" == attrNormalizedName || "FORM" == tag && "action" == attrNormalizedName || "IMG" != tag && ("src" == attrNormalizedName || "ngSrc" == attrNormalizedName) ? $sce.RESOURCE_URL : void 0;
            }
            function addAttrInterpolateDirective(node, directives, value, name) {
                var interpolateFn = $interpolate(value, !0);
                if (interpolateFn) {
                    if ("multiple" === name && "SELECT" === nodeName_(node)) throw $compileMinErr("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", startingTag(node));
                    directives.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(scope, element, attr) {
                                    var $$observers = attr.$$observers || (attr.$$observers = {});
                                    if (EVENT_HANDLER_ATTR_REGEXP.test(name)) throw $compileMinErr("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                    interpolateFn = $interpolate(attr[name], !0, getTrustedContext(node, name)), interpolateFn && (attr[name] = interpolateFn(scope), 
                                    ($$observers[name] || ($$observers[name] = [])).$$inter = !0, (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function(newValue, oldValue) {
                                        "class" === name && newValue != oldValue ? attr.$updateClass(newValue, oldValue) : attr.$set(name, newValue);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function replaceWith($rootElement, elementsToRemove, newNode) {
                var i, ii, firstElementToRemove = elementsToRemove[0], removeCount = elementsToRemove.length, parent = firstElementToRemove.parentNode;
                if ($rootElement) for (i = 0, ii = $rootElement.length; ii > i; i++) if ($rootElement[i] == firstElementToRemove) {
                    $rootElement[i++] = newNode;
                    for (var j = i, j2 = j + removeCount - 1, jj = $rootElement.length; jj > j; j++, 
                    j2++) jj > j2 ? $rootElement[j] = $rootElement[j2] : delete $rootElement[j];
                    $rootElement.length -= removeCount - 1;
                    break;
                }
                parent && parent.replaceChild(newNode, firstElementToRemove);
                var fragment = document.createDocumentFragment();
                fragment.appendChild(firstElementToRemove), newNode[jqLite.expando] = firstElementToRemove[jqLite.expando];
                for (var k = 1, kk = elementsToRemove.length; kk > k; k++) {
                    var element = elementsToRemove[k];
                    jqLite(element).remove(), fragment.appendChild(element), delete elementsToRemove[k];
                }
                elementsToRemove[0] = newNode, elementsToRemove.length = 1;
            }
            function cloneAndAnnotateFn(fn, annotation) {
                return extend(function() {
                    return fn.apply(null, arguments);
                }, fn, annotation);
            }
            var Attributes = function(element, attr) {
                this.$$element = element, this.$attr = attr || {};
            };
            Attributes.prototype = {
                $normalize: directiveNormalize,
                $addClass: function(classVal) {
                    classVal && classVal.length > 0 && $animate.addClass(this.$$element, classVal);
                },
                $removeClass: function(classVal) {
                    classVal && classVal.length > 0 && $animate.removeClass(this.$$element, classVal);
                },
                $updateClass: function(newClasses, oldClasses) {
                    var toAdd = tokenDifference(newClasses, oldClasses), toRemove = tokenDifference(oldClasses, newClasses);
                    0 === toAdd.length ? $animate.removeClass(this.$$element, toRemove) : 0 === toRemove.length ? $animate.addClass(this.$$element, toAdd) : $animate.setClass(this.$$element, toAdd, toRemove);
                },
                $set: function(key, value, writeAttr, attrName) {
                    var nodeName, booleanKey = getBooleanAttrName(this.$$element[0], key);
                    booleanKey && (this.$$element.prop(key, value), attrName = booleanKey), this[key] = value, 
                    attrName ? this.$attr[key] = attrName : (attrName = this.$attr[key], attrName || (this.$attr[key] = attrName = snake_case(key, "-"))), 
                    nodeName = nodeName_(this.$$element), ("A" === nodeName && "href" === key || "IMG" === nodeName && "src" === key) && (this[key] = value = $$sanitizeUri(value, "src" === key)), 
                    writeAttr !== !1 && (null === value || value === undefined ? this.$$element.removeAttr(attrName) : this.$$element.attr(attrName, value));
                    var $$observers = this.$$observers;
                    $$observers && forEach($$observers[key], function(fn) {
                        try {
                            fn(value);
                        } catch (e) {
                            $exceptionHandler(e);
                        }
                    });
                },
                $observe: function(key, fn) {
                    var attrs = this, $$observers = attrs.$$observers || (attrs.$$observers = {}), listeners = $$observers[key] || ($$observers[key] = []);
                    return listeners.push(fn), $rootScope.$evalAsync(function() {
                        listeners.$$inter || fn(attrs[key]);
                    }), fn;
                }
            };
            var startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), denormalizeTemplate = "{{" == startSymbol || "}}" == endSymbol ? identity : function(template) {
                return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
            }, NG_ATTR_BINDING = /^ngAttr[A-Z]/;
            return compile;
        } ];
    }
    function directiveNormalize(name) {
        return camelCase(name.replace(PREFIX_REGEXP, ""));
    }
    function tokenDifference(str1, str2) {
        var values = "", tokens1 = str1.split(/\s+/), tokens2 = str2.split(/\s+/);
        outer: for (var i = 0; i < tokens1.length; i++) {
            for (var token = tokens1[i], j = 0; j < tokens2.length; j++) if (token == tokens2[j]) continue outer;
            values += (values.length > 0 ? " " : "") + token;
        }
        return values;
    }
    function $ControllerProvider() {
        var controllers = {}, CNTRL_REG = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(name, constructor) {
            assertNotHasOwnProperty(name, "controller"), isObject(name) ? extend(controllers, name) : controllers[name] = constructor;
        }, this.$get = [ "$injector", "$window", function($injector, $window) {
            return function(expression, locals) {
                var instance, match, constructor, identifier;
                if (isString(expression) && (match = expression.match(CNTRL_REG), constructor = match[1], 
                identifier = match[3], expression = controllers.hasOwnProperty(constructor) ? controllers[constructor] : getter(locals.$scope, constructor, !0) || getter($window, constructor, !0), 
                assertArgFn(expression, constructor, !0)), instance = $injector.instantiate(expression, locals), 
                identifier) {
                    if (!locals || "object" != typeof locals.$scope) throw minErr("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", constructor || expression.name, identifier);
                    locals.$scope[identifier] = instance;
                }
                return instance;
            };
        } ];
    }
    function $DocumentProvider() {
        this.$get = [ "$window", function(window) {
            return jqLite(window.document);
        } ];
    }
    function $ExceptionHandlerProvider() {
        this.$get = [ "$log", function($log) {
            return function() {
                $log.error.apply($log, arguments);
            };
        } ];
    }
    function parseHeaders(headers) {
        var key, val, i, parsed = {};
        return headers ? (forEach(headers.split("\n"), function(line) {
            i = line.indexOf(":"), key = lowercase(trim(line.substr(0, i))), val = trim(line.substr(i + 1)), 
            key && (parsed[key] = parsed[key] ? parsed[key] + ", " + val : val);
        }), parsed) : parsed;
    }
    function headersGetter(headers) {
        var headersObj = isObject(headers) ? headers : undefined;
        return function(name) {
            return headersObj || (headersObj = parseHeaders(headers)), name ? headersObj[lowercase(name)] || null : headersObj;
        };
    }
    function transformData(data, headers, fns) {
        return isFunction(fns) ? fns(data, headers) : (forEach(fns, function(fn) {
            data = fn(data, headers);
        }), data);
    }
    function isSuccess(status) {
        return status >= 200 && 300 > status;
    }
    function $HttpProvider() {
        var JSON_START = /^\s*(\[|\{[^\{])/, JSON_END = /[\}\]]\s*$/, PROTECTION_PREFIX = /^\)\]\}',?\n/, CONTENT_TYPE_APPLICATION_JSON = {
            "Content-Type": "application/json;charset=utf-8"
        }, defaults = this.defaults = {
            transformResponse: [ function(data) {
                return isString(data) && (data = data.replace(PROTECTION_PREFIX, ""), JSON_START.test(data) && JSON_END.test(data) && (data = fromJson(data))), 
                data;
            } ],
            transformRequest: [ function(d) {
                return !isObject(d) || isFile(d) || isBlob(d) ? d : toJson(d);
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
                put: shallowCopy(CONTENT_TYPE_APPLICATION_JSON),
                patch: shallowCopy(CONTENT_TYPE_APPLICATION_JSON)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, interceptorFactories = this.interceptors = [], responseInterceptorFactories = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function($httpBackend, $browser, $cacheFactory, $rootScope, $q, $injector) {
            function $http(requestConfig) {
                function transformResponse(response) {
                    var resp = extend({}, response, {
                        data: transformData(response.data, response.headers, config.transformResponse)
                    });
                    return isSuccess(response.status) ? resp : $q.reject(resp);
                }
                function mergeHeaders(config) {
                    function execHeaders(headers) {
                        var headerContent;
                        forEach(headers, function(headerFn, header) {
                            isFunction(headerFn) && (headerContent = headerFn(), null != headerContent ? headers[header] = headerContent : delete headers[header]);
                        });
                    }
                    var defHeaderName, lowercaseDefHeaderName, reqHeaderName, defHeaders = defaults.headers, reqHeaders = extend({}, config.headers);
                    defHeaders = extend({}, defHeaders.common, defHeaders[lowercase(config.method)]);
                    defaultHeadersIteration: for (defHeaderName in defHeaders) {
                        lowercaseDefHeaderName = lowercase(defHeaderName);
                        for (reqHeaderName in reqHeaders) if (lowercase(reqHeaderName) === lowercaseDefHeaderName) continue defaultHeadersIteration;
                        reqHeaders[defHeaderName] = defHeaders[defHeaderName];
                    }
                    return execHeaders(reqHeaders), reqHeaders;
                }
                var config = {
                    method: "get",
                    transformRequest: defaults.transformRequest,
                    transformResponse: defaults.transformResponse
                }, headers = mergeHeaders(requestConfig);
                extend(config, requestConfig), config.headers = headers, config.method = uppercase(config.method);
                var serverRequest = function(config) {
                    headers = config.headers;
                    var reqData = transformData(config.data, headersGetter(headers), config.transformRequest);
                    return isUndefined(reqData) && forEach(headers, function(value, header) {
                        "content-type" === lowercase(header) && delete headers[header];
                    }), isUndefined(config.withCredentials) && !isUndefined(defaults.withCredentials) && (config.withCredentials = defaults.withCredentials), 
                    sendReq(config, reqData, headers).then(transformResponse, transformResponse);
                }, chain = [ serverRequest, undefined ], promise = $q.when(config);
                for (forEach(reversedInterceptors, function(interceptor) {
                    (interceptor.request || interceptor.requestError) && chain.unshift(interceptor.request, interceptor.requestError), 
                    (interceptor.response || interceptor.responseError) && chain.push(interceptor.response, interceptor.responseError);
                }); chain.length; ) {
                    var thenFn = chain.shift(), rejectFn = chain.shift();
                    promise = promise.then(thenFn, rejectFn);
                }
                return promise.success = function(fn) {
                    return promise.then(function(response) {
                        fn(response.data, response.status, response.headers, config);
                    }), promise;
                }, promise.error = function(fn) {
                    return promise.then(null, function(response) {
                        fn(response.data, response.status, response.headers, config);
                    }), promise;
                }, promise;
            }
            function createShortMethods() {
                forEach(arguments, function(name) {
                    $http[name] = function(url, config) {
                        return $http(extend(config || {}, {
                            method: name,
                            url: url
                        }));
                    };
                });
            }
            function createShortMethodsWithData() {
                forEach(arguments, function(name) {
                    $http[name] = function(url, data, config) {
                        return $http(extend(config || {}, {
                            method: name,
                            url: url,
                            data: data
                        }));
                    };
                });
            }
            function sendReq(config, reqData, reqHeaders) {
                function done(status, response, headersString, statusText) {
                    cache && (isSuccess(status) ? cache.put(url, [ status, response, parseHeaders(headersString), statusText ]) : cache.remove(url)), 
                    resolvePromise(response, status, headersString, statusText), $rootScope.$$phase || $rootScope.$apply();
                }
                function resolvePromise(response, status, headers, statusText) {
                    status = Math.max(status, 0), (isSuccess(status) ? deferred.resolve : deferred.reject)({
                        data: response,
                        status: status,
                        headers: headersGetter(headers),
                        config: config,
                        statusText: statusText
                    });
                }
                function removePendingReq() {
                    var idx = indexOf($http.pendingRequests, config);
                    -1 !== idx && $http.pendingRequests.splice(idx, 1);
                }
                var cache, cachedResp, deferred = $q.defer(), promise = deferred.promise, url = buildUrl(config.url, config.params);
                if ($http.pendingRequests.push(config), promise.then(removePendingReq, removePendingReq), 
                (config.cache || defaults.cache) && config.cache !== !1 && "GET" == config.method && (cache = isObject(config.cache) ? config.cache : isObject(defaults.cache) ? defaults.cache : defaultCache), 
                cache) if (cachedResp = cache.get(url), isDefined(cachedResp)) {
                    if (isPromiseLike(cachedResp)) return cachedResp.then(removePendingReq, removePendingReq), 
                    cachedResp;
                    isArray(cachedResp) ? resolvePromise(cachedResp[1], cachedResp[0], shallowCopy(cachedResp[2]), cachedResp[3]) : resolvePromise(cachedResp, 200, {}, "OK");
                } else cache.put(url, promise);
                if (isUndefined(cachedResp)) {
                    var xsrfValue = urlIsSameOrigin(config.url) ? $browser.cookies()[config.xsrfCookieName || defaults.xsrfCookieName] : undefined;
                    xsrfValue && (reqHeaders[config.xsrfHeaderName || defaults.xsrfHeaderName] = xsrfValue), 
                    $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials, config.responseType);
                }
                return promise;
            }
            function buildUrl(url, params) {
                if (!params) return url;
                var parts = [];
                return forEachSorted(params, function(value, key) {
                    null === value || isUndefined(value) || (isArray(value) || (value = [ value ]), 
                    forEach(value, function(v) {
                        isObject(v) && (isDate(v) ? v = v.toISOString() : isObject(v) && (v = toJson(v))), 
                        parts.push(encodeUriQuery(key) + "=" + encodeUriQuery(v));
                    }));
                }), parts.length > 0 && (url += (-1 == url.indexOf("?") ? "?" : "&") + parts.join("&")), 
                url;
            }
            var defaultCache = $cacheFactory("$http"), reversedInterceptors = [];
            return forEach(interceptorFactories, function(interceptorFactory) {
                reversedInterceptors.unshift(isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory));
            }), forEach(responseInterceptorFactories, function(interceptorFactory, index) {
                var responseFn = isString(interceptorFactory) ? $injector.get(interceptorFactory) : $injector.invoke(interceptorFactory);
                reversedInterceptors.splice(index, 0, {
                    response: function(response) {
                        return responseFn($q.when(response));
                    },
                    responseError: function(response) {
                        return responseFn($q.reject(response));
                    }
                });
            }), $http.pendingRequests = [], createShortMethods("get", "delete", "head", "jsonp"), 
            createShortMethodsWithData("post", "put"), $http.defaults = defaults, $http;
        } ];
    }
    function createXhr(method) {
        if (8 >= msie && (!method.match(/^(get|post|head|put|delete|options)$/i) || !window.XMLHttpRequest)) return new window.ActiveXObject("Microsoft.XMLHTTP");
        if (window.XMLHttpRequest) return new window.XMLHttpRequest();
        throw minErr("$httpBackend")("noxhr", "This browser does not support XMLHttpRequest.");
    }
    function $HttpBackendProvider() {
        this.$get = [ "$browser", "$window", "$document", function($browser, $window, $document) {
            return createHttpBackend($browser, createXhr, $browser.defer, $window.angular.callbacks, $document[0]);
        } ];
    }
    function createHttpBackend($browser, createXhr, $browserDefer, callbacks, rawDocument) {
        function jsonpReq(url, callbackId, done) {
            var script = rawDocument.createElement("script"), callback = null;
            return script.type = "text/javascript", script.src = url, script.async = !0, callback = function(event) {
                removeEventListenerFn(script, "load", callback), removeEventListenerFn(script, "error", callback), 
                rawDocument.body.removeChild(script), script = null;
                var status = -1, text = "unknown";
                event && ("load" !== event.type || callbacks[callbackId].called || (event = {
                    type: "error"
                }), text = event.type, status = "error" === event.type ? 404 : 200), done && done(status, text);
            }, addEventListenerFn(script, "load", callback), addEventListenerFn(script, "error", callback), 
            8 >= msie && (script.onreadystatechange = function() {
                isString(script.readyState) && /loaded|complete/.test(script.readyState) && (script.onreadystatechange = null, 
                callback({
                    type: "load"
                }));
            }), rawDocument.body.appendChild(script), callback;
        }
        var ABORTED = -1;
        return function(method, url, post, callback, headers, timeout, withCredentials, responseType) {
            function timeoutRequest() {
                status = ABORTED, jsonpDone && jsonpDone(), xhr && xhr.abort();
            }
            function completeRequest(callback, status, response, headersString, statusText) {
                timeoutId && $browserDefer.cancel(timeoutId), jsonpDone = xhr = null, 0 === status && (status = response ? 200 : "file" == urlResolve(url).protocol ? 404 : 0), 
                status = 1223 === status ? 204 : status, statusText = statusText || "", callback(status, response, headersString, statusText), 
                $browser.$$completeOutstandingRequest(noop);
            }
            var status;
            if ($browser.$$incOutstandingRequestCount(), url = url || $browser.url(), "jsonp" == lowercase(method)) {
                var callbackId = "_" + (callbacks.counter++).toString(36);
                callbacks[callbackId] = function(data) {
                    callbacks[callbackId].data = data, callbacks[callbackId].called = !0;
                };
                var jsonpDone = jsonpReq(url.replace("JSON_CALLBACK", "angular.callbacks." + callbackId), callbackId, function(status, text) {
                    completeRequest(callback, status, callbacks[callbackId].data, "", text), callbacks[callbackId] = noop;
                });
            } else {
                var xhr = createXhr(method);
                if (xhr.open(method, url, !0), forEach(headers, function(value, key) {
                    isDefined(value) && xhr.setRequestHeader(key, value);
                }), xhr.onreadystatechange = function() {
                    if (xhr && 4 == xhr.readyState) {
                        var responseHeaders = null, response = null, statusText = "";
                        status !== ABORTED && (responseHeaders = xhr.getAllResponseHeaders(), response = "response" in xhr ? xhr.response : xhr.responseText), 
                        status === ABORTED && 10 > msie || (statusText = xhr.statusText), completeRequest(callback, status || xhr.status, response, responseHeaders, statusText);
                    }
                }, withCredentials && (xhr.withCredentials = !0), responseType) try {
                    xhr.responseType = responseType;
                } catch (e) {
                    if ("json" !== responseType) throw e;
                }
                xhr.send(post || null);
            }
            if (timeout > 0) var timeoutId = $browserDefer(timeoutRequest, timeout); else isPromiseLike(timeout) && timeout.then(timeoutRequest);
        };
    }
    function $InterpolateProvider() {
        var startSymbol = "{{", endSymbol = "}}";
        this.startSymbol = function(value) {
            return value ? (startSymbol = value, this) : startSymbol;
        }, this.endSymbol = function(value) {
            return value ? (endSymbol = value, this) : endSymbol;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function($parse, $exceptionHandler, $sce) {
            function $interpolate(text, mustHaveExpression, trustedContext) {
                for (var startIndex, endIndex, fn, exp, index = 0, parts = [], length = text.length, hasInterpolation = !1, concat = []; length > index; ) -1 != (startIndex = text.indexOf(startSymbol, index)) && -1 != (endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) ? (index != startIndex && parts.push(text.substring(index, startIndex)), 
                parts.push(fn = $parse(exp = text.substring(startIndex + startSymbolLength, endIndex))), 
                fn.exp = exp, index = endIndex + endSymbolLength, hasInterpolation = !0) : (index != length && parts.push(text.substring(index)), 
                index = length);
                if ((length = parts.length) || (parts.push(""), length = 1), trustedContext && parts.length > 1) throw $interpolateMinErr("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", text);
                return !mustHaveExpression || hasInterpolation ? (concat.length = length, fn = function(context) {
                    try {
                        for (var part, i = 0, ii = length; ii > i; i++) {
                            if ("function" == typeof (part = parts[i])) if (part = part(context), part = trustedContext ? $sce.getTrusted(trustedContext, part) : $sce.valueOf(part), 
                            null == part) part = ""; else switch (typeof part) {
                              case "string":
                                break;

                              case "number":
                                part = "" + part;
                                break;

                              default:
                                part = toJson(part);
                            }
                            concat[i] = part;
                        }
                        return concat.join("");
                    } catch (err) {
                        var newErr = $interpolateMinErr("interr", "Can't interpolate: {0}\n{1}", text, err.toString());
                        $exceptionHandler(newErr);
                    }
                }, fn.exp = text, fn.parts = parts, fn) : void 0;
            }
            var startSymbolLength = startSymbol.length, endSymbolLength = endSymbol.length;
            return $interpolate.startSymbol = function() {
                return startSymbol;
            }, $interpolate.endSymbol = function() {
                return endSymbol;
            }, $interpolate;
        } ];
    }
    function $IntervalProvider() {
        this.$get = [ "$rootScope", "$window", "$q", function($rootScope, $window, $q) {
            function interval(fn, delay, count, invokeApply) {
                var setInterval = $window.setInterval, clearInterval = $window.clearInterval, deferred = $q.defer(), promise = deferred.promise, iteration = 0, skipApply = isDefined(invokeApply) && !invokeApply;
                return count = isDefined(count) ? count : 0, promise.then(null, null, fn), promise.$$intervalId = setInterval(function() {
                    deferred.notify(iteration++), count > 0 && iteration >= count && (deferred.resolve(iteration), 
                    clearInterval(promise.$$intervalId), delete intervals[promise.$$intervalId]), skipApply || $rootScope.$apply();
                }, delay), intervals[promise.$$intervalId] = deferred, promise;
            }
            var intervals = {};
            return interval.cancel = function(promise) {
                return promise && promise.$$intervalId in intervals ? (intervals[promise.$$intervalId].reject("canceled"), 
                $window.clearInterval(promise.$$intervalId), delete intervals[promise.$$intervalId], 
                !0) : !1;
            }, interval;
        } ];
    }
    function $LocaleProvider() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(num) {
                    return 1 === num ? "one" : "other";
                }
            };
        };
    }
    function encodePath(path) {
        for (var segments = path.split("/"), i = segments.length; i--; ) segments[i] = encodeUriSegment(segments[i]);
        return segments.join("/");
    }
    function parseAbsoluteUrl(absoluteUrl, locationObj, appBase) {
        var parsedUrl = urlResolve(absoluteUrl, appBase);
        locationObj.$$protocol = parsedUrl.protocol, locationObj.$$host = parsedUrl.hostname, 
        locationObj.$$port = int(parsedUrl.port) || DEFAULT_PORTS[parsedUrl.protocol] || null;
    }
    function parseAppUrl(relativeUrl, locationObj, appBase) {
        var prefixed = "/" !== relativeUrl.charAt(0);
        prefixed && (relativeUrl = "/" + relativeUrl);
        var match = urlResolve(relativeUrl, appBase);
        locationObj.$$path = decodeURIComponent(prefixed && "/" === match.pathname.charAt(0) ? match.pathname.substring(1) : match.pathname), 
        locationObj.$$search = parseKeyValue(match.search), locationObj.$$hash = decodeURIComponent(match.hash), 
        locationObj.$$path && "/" != locationObj.$$path.charAt(0) && (locationObj.$$path = "/" + locationObj.$$path);
    }
    function beginsWith(begin, whole) {
        return 0 === whole.indexOf(begin) ? whole.substr(begin.length) : void 0;
    }
    function stripHash(url) {
        var index = url.indexOf("#");
        return -1 == index ? url : url.substr(0, index);
    }
    function stripFile(url) {
        return url.substr(0, stripHash(url).lastIndexOf("/") + 1);
    }
    function serverBase(url) {
        return url.substring(0, url.indexOf("/", url.indexOf("//") + 2));
    }
    function LocationHtml5Url(appBase, basePrefix) {
        this.$$html5 = !0, basePrefix = basePrefix || "";
        var appBaseNoFile = stripFile(appBase);
        parseAbsoluteUrl(appBase, this, appBase), this.$$parse = function(url) {
            var pathUrl = beginsWith(appBaseNoFile, url);
            if (!isString(pathUrl)) throw $locationMinErr("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', url, appBaseNoFile);
            parseAppUrl(pathUrl, this, appBase), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash, this.$$absUrl = appBaseNoFile + this.$$url.substr(1);
        }, this.$$rewrite = function(url) {
            var appUrl, prevAppUrl;
            return (appUrl = beginsWith(appBase, url)) !== undefined ? (prevAppUrl = appUrl, 
            (appUrl = beginsWith(basePrefix, appUrl)) !== undefined ? appBaseNoFile + (beginsWith("/", appUrl) || appUrl) : appBase + prevAppUrl) : (appUrl = beginsWith(appBaseNoFile, url)) !== undefined ? appBaseNoFile + appUrl : appBaseNoFile == url + "/" ? appBaseNoFile : void 0;
        };
    }
    function LocationHashbangUrl(appBase, hashPrefix) {
        var appBaseNoFile = stripFile(appBase);
        parseAbsoluteUrl(appBase, this, appBase), this.$$parse = function(url) {
            function removeWindowsDriveName(path, url, base) {
                var firstPathSegmentMatch, windowsFilePathExp = /^\/[A-Z]:(\/.*)/;
                return 0 === url.indexOf(base) && (url = url.replace(base, "")), windowsFilePathExp.exec(url) ? path : (firstPathSegmentMatch = windowsFilePathExp.exec(path), 
                firstPathSegmentMatch ? firstPathSegmentMatch[1] : path);
            }
            var withoutBaseUrl = beginsWith(appBase, url) || beginsWith(appBaseNoFile, url), withoutHashUrl = "#" == withoutBaseUrl.charAt(0) ? beginsWith(hashPrefix, withoutBaseUrl) : this.$$html5 ? withoutBaseUrl : "";
            if (!isString(withoutHashUrl)) throw $locationMinErr("ihshprfx", 'Invalid url "{0}", missing hash prefix "{1}".', url, hashPrefix);
            parseAppUrl(withoutHashUrl, this, appBase), this.$$path = removeWindowsDriveName(this.$$path, withoutHashUrl, appBase), 
            this.$$compose();
        }, this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash, this.$$absUrl = appBase + (this.$$url ? hashPrefix + this.$$url : "");
        }, this.$$rewrite = function(url) {
            return stripHash(appBase) == stripHash(url) ? url : void 0;
        };
    }
    function LocationHashbangInHtml5Url(appBase, hashPrefix) {
        this.$$html5 = !0, LocationHashbangUrl.apply(this, arguments);
        var appBaseNoFile = stripFile(appBase);
        this.$$rewrite = function(url) {
            var appUrl;
            return appBase == stripHash(url) ? url : (appUrl = beginsWith(appBaseNoFile, url)) ? appBase + hashPrefix + appUrl : appBaseNoFile === url + "/" ? appBaseNoFile : void 0;
        }, this.$$compose = function() {
            var search = toKeyValue(this.$$search), hash = this.$$hash ? "#" + encodeUriSegment(this.$$hash) : "";
            this.$$url = encodePath(this.$$path) + (search ? "?" + search : "") + hash, this.$$absUrl = appBase + hashPrefix + this.$$url;
        };
    }
    function locationGetter(property) {
        return function() {
            return this[property];
        };
    }
    function locationGetterSetter(property, preprocess) {
        return function(value) {
            return isUndefined(value) ? this[property] : (this[property] = preprocess(value), 
            this.$$compose(), this);
        };
    }
    function $LocationProvider() {
        var hashPrefix = "", html5Mode = !1;
        this.hashPrefix = function(prefix) {
            return isDefined(prefix) ? (hashPrefix = prefix, this) : hashPrefix;
        }, this.html5Mode = function(mode) {
            return isDefined(mode) ? (html5Mode = mode, this) : html5Mode;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function($rootScope, $browser, $sniffer, $rootElement) {
            function afterLocationChange(oldUrl) {
                $rootScope.$broadcast("$locationChangeSuccess", $location.absUrl(), oldUrl);
            }
            var $location, LocationMode, appBase, baseHref = $browser.baseHref(), initialUrl = $browser.url();
            html5Mode ? (appBase = serverBase(initialUrl) + (baseHref || "/"), LocationMode = $sniffer.history ? LocationHtml5Url : LocationHashbangInHtml5Url) : (appBase = stripHash(initialUrl), 
            LocationMode = LocationHashbangUrl), $location = new LocationMode(appBase, "#" + hashPrefix), 
            $location.$$parse($location.$$rewrite(initialUrl)), $rootElement.on("click", function(event) {
                if (!event.ctrlKey && !event.metaKey && 2 != event.which) {
                    for (var elm = jqLite(event.target); "a" !== lowercase(elm[0].nodeName); ) if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0]) return;
                    var absHref = elm.prop("href");
                    if (isObject(absHref) && "[object SVGAnimatedString]" === absHref.toString() && (absHref = urlResolve(absHref.animVal).href), 
                    LocationMode === LocationHashbangInHtml5Url) {
                        var href = elm.attr("href") || elm.attr("xlink:href");
                        if (href.indexOf("://") < 0) {
                            var prefix = "#" + hashPrefix;
                            if ("/" == href[0]) absHref = appBase + prefix + href; else if ("#" == href[0]) absHref = appBase + prefix + ($location.path() || "/") + href; else {
                                for (var stack = $location.path().split("/"), parts = href.split("/"), i = 0; i < parts.length; i++) "." != parts[i] && (".." == parts[i] ? stack.pop() : parts[i].length && stack.push(parts[i]));
                                absHref = appBase + prefix + stack.join("/");
                            }
                        }
                    }
                    var rewrittenUrl = $location.$$rewrite(absHref);
                    absHref && !elm.attr("target") && rewrittenUrl && !event.isDefaultPrevented() && (event.preventDefault(), 
                    rewrittenUrl != $browser.url() && ($location.$$parse(rewrittenUrl), $rootScope.$apply(), 
                    window.angular["ff-684208-preventDefault"] = !0));
                }
            }), $location.absUrl() != initialUrl && $browser.url($location.absUrl(), !0), $browser.onUrlChange(function(newUrl) {
                $location.absUrl() != newUrl && ($rootScope.$evalAsync(function() {
                    var oldUrl = $location.absUrl();
                    $location.$$parse(newUrl), $rootScope.$broadcast("$locationChangeStart", newUrl, oldUrl).defaultPrevented ? ($location.$$parse(oldUrl), 
                    $browser.url(oldUrl)) : afterLocationChange(oldUrl);
                }), $rootScope.$$phase || $rootScope.$digest());
            });
            var changeCounter = 0;
            return $rootScope.$watch(function() {
                var oldUrl = $browser.url(), currentReplace = $location.$$replace;
                return changeCounter && oldUrl == $location.absUrl() || (changeCounter++, $rootScope.$evalAsync(function() {
                    $rootScope.$broadcast("$locationChangeStart", $location.absUrl(), oldUrl).defaultPrevented ? $location.$$parse(oldUrl) : ($browser.url($location.absUrl(), currentReplace), 
                    afterLocationChange(oldUrl));
                })), $location.$$replace = !1, changeCounter;
            }), $location;
        } ];
    }
    function $LogProvider() {
        var debug = !0, self = this;
        this.debugEnabled = function(flag) {
            return isDefined(flag) ? (debug = flag, this) : debug;
        }, this.$get = [ "$window", function($window) {
            function formatError(arg) {
                return arg instanceof Error && (arg.stack ? arg = arg.message && -1 === arg.stack.indexOf(arg.message) ? "Error: " + arg.message + "\n" + arg.stack : arg.stack : arg.sourceURL && (arg = arg.message + "\n" + arg.sourceURL + ":" + arg.line)), 
                arg;
            }
            function consoleLog(type) {
                var console = $window.console || {}, logFn = console[type] || console.log || noop, hasApply = !1;
                try {
                    hasApply = !!logFn.apply;
                } catch (e) {}
                return hasApply ? function() {
                    var args = [];
                    return forEach(arguments, function(arg) {
                        args.push(formatError(arg));
                    }), logFn.apply(console, args);
                } : function(arg1, arg2) {
                    logFn(arg1, null == arg2 ? "" : arg2);
                };
            }
            return {
                log: consoleLog("log"),
                info: consoleLog("info"),
                warn: consoleLog("warn"),
                error: consoleLog("error"),
                debug: function() {
                    var fn = consoleLog("debug");
                    return function() {
                        debug && fn.apply(self, arguments);
                    };
                }()
            };
        } ];
    }
    function ensureSafeMemberName(name, fullExpression) {
        if ("__defineGetter__" === name || "__defineSetter__" === name || "__lookupGetter__" === name || "__lookupSetter__" === name || "__proto__" === name) throw $parseMinErr("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", fullExpression);
        return name;
    }
    function ensureSafeObject(obj, fullExpression) {
        if (obj) {
            if (obj.constructor === obj) throw $parseMinErr("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", fullExpression);
            if (obj.document && obj.location && obj.alert && obj.setInterval) throw $parseMinErr("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", fullExpression);
            if (obj.children && (obj.nodeName || obj.prop && obj.attr && obj.find)) throw $parseMinErr("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", fullExpression);
            if (obj === Object) throw $parseMinErr("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", fullExpression);
        }
        return obj;
    }
    function ensureSafeFunction(obj, fullExpression) {
        if (obj) {
            if (obj.constructor === obj) throw $parseMinErr("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", fullExpression);
            if (obj === CALL || obj === APPLY || BIND && obj === BIND) throw $parseMinErr("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", fullExpression);
        }
    }
    function setter(obj, path, setValue, fullExp, options) {
        options = options || {};
        for (var key, element = path.split("."), i = 0; element.length > 1; i++) {
            key = ensureSafeMemberName(element.shift(), fullExp);
            var propertyObj = obj[key];
            propertyObj || (propertyObj = {}, obj[key] = propertyObj), obj = propertyObj, obj.then && options.unwrapPromises && (promiseWarning(fullExp), 
            "$$v" in obj || !function(promise) {
                promise.then(function(val) {
                    promise.$$v = val;
                });
            }(obj), obj.$$v === undefined && (obj.$$v = {}), obj = obj.$$v);
        }
        return key = ensureSafeMemberName(element.shift(), fullExp), ensureSafeObject(obj, fullExp), 
        ensureSafeObject(obj[key], fullExp), obj[key] = setValue, setValue;
    }
    function cspSafeGetterFn(key0, key1, key2, key3, key4, fullExp, options) {
        return ensureSafeMemberName(key0, fullExp), ensureSafeMemberName(key1, fullExp), 
        ensureSafeMemberName(key2, fullExp), ensureSafeMemberName(key3, fullExp), ensureSafeMemberName(key4, fullExp), 
        options.unwrapPromises ? function(scope, locals) {
            var promise, pathVal = locals && locals.hasOwnProperty(key0) ? locals : scope;
            return null == pathVal ? pathVal : (pathVal = pathVal[key0], pathVal && pathVal.then && (promiseWarning(fullExp), 
            "$$v" in pathVal || (promise = pathVal, promise.$$v = undefined, promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key1 ? null == pathVal ? undefined : (pathVal = pathVal[key1], 
            pathVal && pathVal.then && (promiseWarning(fullExp), "$$v" in pathVal || (promise = pathVal, 
            promise.$$v = undefined, promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key2 ? null == pathVal ? undefined : (pathVal = pathVal[key2], 
            pathVal && pathVal.then && (promiseWarning(fullExp), "$$v" in pathVal || (promise = pathVal, 
            promise.$$v = undefined, promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key3 ? null == pathVal ? undefined : (pathVal = pathVal[key3], 
            pathVal && pathVal.then && (promiseWarning(fullExp), "$$v" in pathVal || (promise = pathVal, 
            promise.$$v = undefined, promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), key4 ? null == pathVal ? undefined : (pathVal = pathVal[key4], 
            pathVal && pathVal.then && (promiseWarning(fullExp), "$$v" in pathVal || (promise = pathVal, 
            promise.$$v = undefined, promise.then(function(val) {
                promise.$$v = val;
            })), pathVal = pathVal.$$v), pathVal) : pathVal) : pathVal) : pathVal) : pathVal);
        } : function(scope, locals) {
            var pathVal = locals && locals.hasOwnProperty(key0) ? locals : scope;
            return null == pathVal ? pathVal : (pathVal = pathVal[key0], key1 ? null == pathVal ? undefined : (pathVal = pathVal[key1], 
            key2 ? null == pathVal ? undefined : (pathVal = pathVal[key2], key3 ? null == pathVal ? undefined : (pathVal = pathVal[key3], 
            key4 ? null == pathVal ? undefined : pathVal = pathVal[key4] : pathVal) : pathVal) : pathVal) : pathVal);
        };
    }
    function getterFn(path, options, fullExp) {
        if (getterFnCache.hasOwnProperty(path)) return getterFnCache[path];
        var fn, pathKeys = path.split("."), pathKeysLength = pathKeys.length;
        if (options.csp) fn = 6 > pathKeysLength ? cspSafeGetterFn(pathKeys[0], pathKeys[1], pathKeys[2], pathKeys[3], pathKeys[4], fullExp, options) : function(scope, locals) {
            var val, i = 0;
            do val = cspSafeGetterFn(pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], fullExp, options)(scope, locals), 
            locals = undefined, scope = val; while (pathKeysLength > i);
            return val;
        }; else {
            var code = "var p;\n";
            forEach(pathKeys, function(key, index) {
                ensureSafeMemberName(key, fullExp), code += "if(s == null) return undefined;\ns=" + (index ? "s" : '((k&&k.hasOwnProperty("' + key + '"))?k:s)') + '["' + key + '"];\n' + (options.unwrapPromises ? 'if (s && s.then) {\n pw("' + fullExp.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "");
            }), code += "return s;";
            var evaledFnGetter = new Function("s", "k", "pw", code);
            evaledFnGetter.toString = valueFn(code), fn = options.unwrapPromises ? function(scope, locals) {
                return evaledFnGetter(scope, locals, promiseWarning);
            } : evaledFnGetter;
        }
        return "hasOwnProperty" !== path && (getterFnCache[path] = fn), fn;
    }
    function $ParseProvider() {
        var cache = {}, $parseOptions = {
            csp: !1,
            unwrapPromises: !1,
            logPromiseWarnings: !0
        };
        this.unwrapPromises = function(value) {
            return isDefined(value) ? ($parseOptions.unwrapPromises = !!value, this) : $parseOptions.unwrapPromises;
        }, this.logPromiseWarnings = function(value) {
            return isDefined(value) ? ($parseOptions.logPromiseWarnings = value, this) : $parseOptions.logPromiseWarnings;
        }, this.$get = [ "$filter", "$sniffer", "$log", function($filter, $sniffer, $log) {
            return $parseOptions.csp = $sniffer.csp, promiseWarning = function(fullExp) {
                $parseOptions.logPromiseWarnings && !promiseWarningCache.hasOwnProperty(fullExp) && (promiseWarningCache[fullExp] = !0, 
                $log.warn("[$parse] Promise found in the expression `" + fullExp + "`. Automatic unwrapping of promises in Angular expressions is deprecated."));
            }, function(exp) {
                var parsedExpression;
                switch (typeof exp) {
                  case "string":
                    if (cache.hasOwnProperty(exp)) return cache[exp];
                    var lexer = new Lexer($parseOptions), parser = new Parser(lexer, $filter, $parseOptions);
                    return parsedExpression = parser.parse(exp), "hasOwnProperty" !== exp && (cache[exp] = parsedExpression), 
                    parsedExpression;

                  case "function":
                    return exp;

                  default:
                    return noop;
                }
            };
        } ];
    }
    function $QProvider() {
        this.$get = [ "$rootScope", "$exceptionHandler", function($rootScope, $exceptionHandler) {
            return qFactory(function(callback) {
                $rootScope.$evalAsync(callback);
            }, $exceptionHandler);
        } ];
    }
    function qFactory(nextTick, exceptionHandler) {
        function defaultCallback(value) {
            return value;
        }
        function defaultErrback(reason) {
            return reject(reason);
        }
        function all(promises) {
            var deferred = defer(), counter = 0, results = isArray(promises) ? [] : {};
            return forEach(promises, function(promise, key) {
                counter++, ref(promise).then(function(value) {
                    results.hasOwnProperty(key) || (results[key] = value, --counter || deferred.resolve(results));
                }, function(reason) {
                    results.hasOwnProperty(key) || deferred.reject(reason);
                });
            }), 0 === counter && deferred.resolve(results), deferred.promise;
        }
        var defer = function() {
            var value, deferred, pending = [];
            return deferred = {
                resolve: function(val) {
                    if (pending) {
                        var callbacks = pending;
                        pending = undefined, value = ref(val), callbacks.length && nextTick(function() {
                            for (var callback, i = 0, ii = callbacks.length; ii > i; i++) callback = callbacks[i], 
                            value.then(callback[0], callback[1], callback[2]);
                        });
                    }
                },
                reject: function(reason) {
                    deferred.resolve(createInternalRejectedPromise(reason));
                },
                notify: function(progress) {
                    if (pending) {
                        var callbacks = pending;
                        pending.length && nextTick(function() {
                            for (var callback, i = 0, ii = callbacks.length; ii > i; i++) callback = callbacks[i], 
                            callback[2](progress);
                        });
                    }
                },
                promise: {
                    then: function(callback, errback, progressback) {
                        var result = defer(), wrappedCallback = function(value) {
                            try {
                                result.resolve((isFunction(callback) ? callback : defaultCallback)(value));
                            } catch (e) {
                                result.reject(e), exceptionHandler(e);
                            }
                        }, wrappedErrback = function(reason) {
                            try {
                                result.resolve((isFunction(errback) ? errback : defaultErrback)(reason));
                            } catch (e) {
                                result.reject(e), exceptionHandler(e);
                            }
                        }, wrappedProgressback = function(progress) {
                            try {
                                result.notify((isFunction(progressback) ? progressback : defaultCallback)(progress));
                            } catch (e) {
                                exceptionHandler(e);
                            }
                        };
                        return pending ? pending.push([ wrappedCallback, wrappedErrback, wrappedProgressback ]) : value.then(wrappedCallback, wrappedErrback, wrappedProgressback), 
                        result.promise;
                    },
                    "catch": function(callback) {
                        return this.then(null, callback);
                    },
                    "finally": function(callback) {
                        function makePromise(value, resolved) {
                            var result = defer();
                            return resolved ? result.resolve(value) : result.reject(value), result.promise;
                        }
                        function handleCallback(value, isResolved) {
                            var callbackOutput = null;
                            try {
                                callbackOutput = (callback || defaultCallback)();
                            } catch (e) {
                                return makePromise(e, !1);
                            }
                            return isPromiseLike(callbackOutput) ? callbackOutput.then(function() {
                                return makePromise(value, isResolved);
                            }, function(error) {
                                return makePromise(error, !1);
                            }) : makePromise(value, isResolved);
                        }
                        return this.then(function(value) {
                            return handleCallback(value, !0);
                        }, function(error) {
                            return handleCallback(error, !1);
                        });
                    }
                }
            };
        }, ref = function(value) {
            return isPromiseLike(value) ? value : {
                then: function(callback) {
                    var result = defer();
                    return nextTick(function() {
                        result.resolve(callback(value));
                    }), result.promise;
                }
            };
        }, reject = function(reason) {
            var result = defer();
            return result.reject(reason), result.promise;
        }, createInternalRejectedPromise = function(reason) {
            return {
                then: function(callback, errback) {
                    var result = defer();
                    return nextTick(function() {
                        try {
                            result.resolve((isFunction(errback) ? errback : defaultErrback)(reason));
                        } catch (e) {
                            result.reject(e), exceptionHandler(e);
                        }
                    }), result.promise;
                }
            };
        }, when = function(value, callback, errback, progressback) {
            var done, result = defer(), wrappedCallback = function(value) {
                try {
                    return (isFunction(callback) ? callback : defaultCallback)(value);
                } catch (e) {
                    return exceptionHandler(e), reject(e);
                }
            }, wrappedErrback = function(reason) {
                try {
                    return (isFunction(errback) ? errback : defaultErrback)(reason);
                } catch (e) {
                    return exceptionHandler(e), reject(e);
                }
            }, wrappedProgressback = function(progress) {
                try {
                    return (isFunction(progressback) ? progressback : defaultCallback)(progress);
                } catch (e) {
                    exceptionHandler(e);
                }
            };
            return nextTick(function() {
                ref(value).then(function(value) {
                    done || (done = !0, result.resolve(ref(value).then(wrappedCallback, wrappedErrback, wrappedProgressback)));
                }, function(reason) {
                    done || (done = !0, result.resolve(wrappedErrback(reason)));
                }, function(progress) {
                    done || result.notify(wrappedProgressback(progress));
                });
            }), result.promise;
        };
        return {
            defer: defer,
            reject: reject,
            when: when,
            all: all
        };
    }
    function $$RAFProvider() {
        this.$get = [ "$window", "$timeout", function($window, $timeout) {
            var requestAnimationFrame = $window.requestAnimationFrame || $window.webkitRequestAnimationFrame || $window.mozRequestAnimationFrame, cancelAnimationFrame = $window.cancelAnimationFrame || $window.webkitCancelAnimationFrame || $window.mozCancelAnimationFrame || $window.webkitCancelRequestAnimationFrame, rafSupported = !!requestAnimationFrame, raf = rafSupported ? function(fn) {
                var id = requestAnimationFrame(fn);
                return function() {
                    cancelAnimationFrame(id);
                };
            } : function(fn) {
                var timer = $timeout(fn, 16.66, !1);
                return function() {
                    $timeout.cancel(timer);
                };
            };
            return raf.supported = rafSupported, raf;
        } ];
    }
    function $RootScopeProvider() {
        var TTL = 10, $rootScopeMinErr = minErr("$rootScope"), lastDirtyWatch = null;
        this.digestTtl = function(value) {
            return arguments.length && (TTL = value), TTL;
        }, this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function($injector, $exceptionHandler, $parse, $browser) {
            function Scope() {
                this.$id = nextUid(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], 
                this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {};
            }
            function beginPhase(phase) {
                if ($rootScope.$$phase) throw $rootScopeMinErr("inprog", "{0} already in progress", $rootScope.$$phase);
                $rootScope.$$phase = phase;
            }
            function clearPhase() {
                $rootScope.$$phase = null;
            }
            function compileToFn(exp, name) {
                var fn = $parse(exp);
                return assertArgFn(fn, name), fn;
            }
            function decrementListenerCount(current, count, name) {
                do current.$$listenerCount[name] -= count, 0 === current.$$listenerCount[name] && delete current.$$listenerCount[name]; while (current = current.$parent);
            }
            function initWatchVal() {}
            Scope.prototype = {
                constructor: Scope,
                $new: function(isolate) {
                    var child;
                    return isolate ? (child = new Scope(), child.$root = this.$root, child.$$asyncQueue = this.$$asyncQueue, 
                    child.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, 
                        this.$$listeners = {}, this.$$listenerCount = {}, this.$id = nextUid(), this.$$childScopeClass = null;
                    }, this.$$childScopeClass.prototype = this), child = new this.$$childScopeClass()), 
                    child["this"] = child, child.$parent = this, child.$$prevSibling = this.$$childTail, 
                    this.$$childHead ? (this.$$childTail.$$nextSibling = child, this.$$childTail = child) : this.$$childHead = this.$$childTail = child, 
                    child;
                },
                $watch: function(watchExp, listener, objectEquality) {
                    var scope = this, get = compileToFn(watchExp, "watch"), array = scope.$$watchers, watcher = {
                        fn: listener,
                        last: initWatchVal,
                        get: get,
                        exp: watchExp,
                        eq: !!objectEquality
                    };
                    if (lastDirtyWatch = null, !isFunction(listener)) {
                        var listenFn = compileToFn(listener || noop, "listener");
                        watcher.fn = function(newVal, oldVal, scope) {
                            listenFn(scope);
                        };
                    }
                    if ("string" == typeof watchExp && get.constant) {
                        var originalFn = watcher.fn;
                        watcher.fn = function(newVal, oldVal, scope) {
                            originalFn.call(this, newVal, oldVal, scope), arrayRemove(array, watcher);
                        };
                    }
                    return array || (array = scope.$$watchers = []), array.unshift(watcher), function() {
                        arrayRemove(array, watcher), lastDirtyWatch = null;
                    };
                },
                $watchCollection: function(obj, listener) {
                    function $watchCollectionWatch() {
                        newValue = objGetter(self);
                        var newLength, key, bothNaN;
                        if (isObject(newValue)) if (isArrayLike(newValue)) {
                            oldValue !== internalArray && (oldValue = internalArray, oldLength = oldValue.length = 0, 
                            changeDetected++), newLength = newValue.length, oldLength !== newLength && (changeDetected++, 
                            oldValue.length = oldLength = newLength);
                            for (var i = 0; newLength > i; i++) bothNaN = oldValue[i] !== oldValue[i] && newValue[i] !== newValue[i], 
                            bothNaN || oldValue[i] === newValue[i] || (changeDetected++, oldValue[i] = newValue[i]);
                        } else {
                            oldValue !== internalObject && (oldValue = internalObject = {}, oldLength = 0, changeDetected++), 
                            newLength = 0;
                            for (key in newValue) newValue.hasOwnProperty(key) && (newLength++, oldValue.hasOwnProperty(key) ? (bothNaN = oldValue[key] !== oldValue[key] && newValue[key] !== newValue[key], 
                            bothNaN || oldValue[key] === newValue[key] || (changeDetected++, oldValue[key] = newValue[key])) : (oldLength++, 
                            oldValue[key] = newValue[key], changeDetected++));
                            if (oldLength > newLength) {
                                changeDetected++;
                                for (key in oldValue) oldValue.hasOwnProperty(key) && !newValue.hasOwnProperty(key) && (oldLength--, 
                                delete oldValue[key]);
                            }
                        } else oldValue !== newValue && (oldValue = newValue, changeDetected++);
                        return changeDetected;
                    }
                    function $watchCollectionAction() {
                        if (initRun ? (initRun = !1, listener(newValue, newValue, self)) : listener(newValue, veryOldValue, self), 
                        trackVeryOldValue) if (isObject(newValue)) if (isArrayLike(newValue)) {
                            veryOldValue = new Array(newValue.length);
                            for (var i = 0; i < newValue.length; i++) veryOldValue[i] = newValue[i];
                        } else {
                            veryOldValue = {};
                            for (var key in newValue) hasOwnProperty.call(newValue, key) && (veryOldValue[key] = newValue[key]);
                        } else veryOldValue = newValue;
                    }
                    var newValue, oldValue, veryOldValue, self = this, trackVeryOldValue = listener.length > 1, changeDetected = 0, objGetter = $parse(obj), internalArray = [], internalObject = {}, initRun = !0, oldLength = 0;
                    return this.$watch($watchCollectionWatch, $watchCollectionAction);
                },
                $digest: function() {
                    var watch, value, last, watchers, length, dirty, next, current, logIdx, logMsg, asyncTask, asyncQueue = this.$$asyncQueue, postDigestQueue = this.$$postDigestQueue, ttl = TTL, target = this, watchLog = [];
                    beginPhase("$digest"), lastDirtyWatch = null;
                    do {
                        for (dirty = !1, current = target; asyncQueue.length; ) {
                            try {
                                asyncTask = asyncQueue.shift(), asyncTask.scope.$eval(asyncTask.expression);
                            } catch (e) {
                                clearPhase(), $exceptionHandler(e);
                            }
                            lastDirtyWatch = null;
                        }
                        traverseScopesLoop: do {
                            if (watchers = current.$$watchers) for (length = watchers.length; length--; ) try {
                                if (watch = watchers[length]) if ((value = watch.get(current)) === (last = watch.last) || (watch.eq ? equals(value, last) : "number" == typeof value && "number" == typeof last && isNaN(value) && isNaN(last))) {
                                    if (watch === lastDirtyWatch) {
                                        dirty = !1;
                                        break traverseScopesLoop;
                                    }
                                } else dirty = !0, lastDirtyWatch = watch, watch.last = watch.eq ? copy(value, null) : value, 
                                watch.fn(value, last === initWatchVal ? value : last, current), 5 > ttl && (logIdx = 4 - ttl, 
                                watchLog[logIdx] || (watchLog[logIdx] = []), logMsg = isFunction(watch.exp) ? "fn: " + (watch.exp.name || watch.exp.toString()) : watch.exp, 
                                logMsg += "; newVal: " + toJson(value) + "; oldVal: " + toJson(last), watchLog[logIdx].push(logMsg));
                            } catch (e) {
                                clearPhase(), $exceptionHandler(e);
                            }
                            if (!(next = current.$$childHead || current !== target && current.$$nextSibling)) for (;current !== target && !(next = current.$$nextSibling); ) current = current.$parent;
                        } while (current = next);
                        if ((dirty || asyncQueue.length) && !ttl--) throw clearPhase(), $rootScopeMinErr("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", TTL, toJson(watchLog));
                    } while (dirty || asyncQueue.length);
                    for (clearPhase(); postDigestQueue.length; ) try {
                        postDigestQueue.shift()();
                    } catch (e) {
                        $exceptionHandler(e);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var parent = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this !== $rootScope && (forEach(this.$$listenerCount, bind(null, decrementListenerCount, this)), 
                        parent.$$childHead == this && (parent.$$childHead = this.$$nextSibling), parent.$$childTail == this && (parent.$$childTail = this.$$prevSibling), 
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, 
                        this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], 
                        this.$destroy = this.$digest = this.$apply = noop, this.$on = this.$watch = function() {
                            return noop;
                        });
                    }
                },
                $eval: function(expr, locals) {
                    return $parse(expr)(this, locals);
                },
                $evalAsync: function(expr) {
                    $rootScope.$$phase || $rootScope.$$asyncQueue.length || $browser.defer(function() {
                        $rootScope.$$asyncQueue.length && $rootScope.$digest();
                    }), this.$$asyncQueue.push({
                        scope: this,
                        expression: expr
                    });
                },
                $$postDigest: function(fn) {
                    this.$$postDigestQueue.push(fn);
                },
                $apply: function(expr) {
                    try {
                        return beginPhase("$apply"), this.$eval(expr);
                    } catch (e) {
                        $exceptionHandler(e);
                    } finally {
                        clearPhase();
                        try {
                            $rootScope.$digest();
                        } catch (e) {
                            throw $exceptionHandler(e), e;
                        }
                    }
                },
                $on: function(name, listener) {
                    var namedListeners = this.$$listeners[name];
                    namedListeners || (this.$$listeners[name] = namedListeners = []), namedListeners.push(listener);
                    var current = this;
                    do current.$$listenerCount[name] || (current.$$listenerCount[name] = 0), current.$$listenerCount[name]++; while (current = current.$parent);
                    var self = this;
                    return function() {
                        namedListeners[indexOf(namedListeners, listener)] = null, decrementListenerCount(self, 1, name);
                    };
                },
                $emit: function(name) {
                    var namedListeners, i, length, empty = [], scope = this, stopPropagation = !1, event = {
                        name: name,
                        targetScope: scope,
                        stopPropagation: function() {
                            stopPropagation = !0;
                        },
                        preventDefault: function() {
                            event.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, listenerArgs = concat([ event ], arguments, 1);
                    do {
                        for (namedListeners = scope.$$listeners[name] || empty, event.currentScope = scope, 
                        i = 0, length = namedListeners.length; length > i; i++) if (namedListeners[i]) try {
                            namedListeners[i].apply(null, listenerArgs);
                        } catch (e) {
                            $exceptionHandler(e);
                        } else namedListeners.splice(i, 1), i--, length--;
                        if (stopPropagation) return event;
                        scope = scope.$parent;
                    } while (scope);
                    return event;
                },
                $broadcast: function(name) {
                    for (var listeners, i, length, target = this, current = target, next = target, event = {
                        name: name,
                        targetScope: target,
                        preventDefault: function() {
                            event.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, listenerArgs = concat([ event ], arguments, 1); current = next; ) {
                        for (event.currentScope = current, listeners = current.$$listeners[name] || [], 
                        i = 0, length = listeners.length; length > i; i++) if (listeners[i]) try {
                            listeners[i].apply(null, listenerArgs);
                        } catch (e) {
                            $exceptionHandler(e);
                        } else listeners.splice(i, 1), i--, length--;
                        if (!(next = current.$$listenerCount[name] && current.$$childHead || current !== target && current.$$nextSibling)) for (;current !== target && !(next = current.$$nextSibling); ) current = current.$parent;
                    }
                    return event;
                }
            };
            var $rootScope = new Scope();
            return $rootScope;
        } ];
    }
    function $$SanitizeUriProvider() {
        var aHrefSanitizationWhitelist = /^\s*(https?|ftp|mailto|tel|file):/, imgSrcSanitizationWhitelist = /^\s*(https?|ftp|file):|data:image\//;
        this.aHrefSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? (aHrefSanitizationWhitelist = regexp, this) : aHrefSanitizationWhitelist;
        }, this.imgSrcSanitizationWhitelist = function(regexp) {
            return isDefined(regexp) ? (imgSrcSanitizationWhitelist = regexp, this) : imgSrcSanitizationWhitelist;
        }, this.$get = function() {
            return function(uri, isImage) {
                var normalizedVal, regex = isImage ? imgSrcSanitizationWhitelist : aHrefSanitizationWhitelist;
                return msie && !(msie >= 8) || (normalizedVal = urlResolve(uri).href, "" === normalizedVal || normalizedVal.match(regex)) ? uri : "unsafe:" + normalizedVal;
            };
        };
    }
    function escapeForRegexp(s) {
        return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }
    function adjustMatcher(matcher) {
        if ("self" === matcher) return matcher;
        if (isString(matcher)) {
            if (matcher.indexOf("***") > -1) throw $sceMinErr("iwcard", "Illegal sequence *** in string matcher.  String: {0}", matcher);
            return matcher = escapeForRegexp(matcher).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), 
            new RegExp("^" + matcher + "$");
        }
        if (isRegExp(matcher)) return new RegExp("^" + matcher.source + "$");
        throw $sceMinErr("imatcher", 'Matchers may only be "self", string patterns or RegExp objects');
    }
    function adjustMatchers(matchers) {
        var adjustedMatchers = [];
        return isDefined(matchers) && forEach(matchers, function(matcher) {
            adjustedMatchers.push(adjustMatcher(matcher));
        }), adjustedMatchers;
    }
    function $SceDelegateProvider() {
        this.SCE_CONTEXTS = SCE_CONTEXTS;
        var resourceUrlWhitelist = [ "self" ], resourceUrlBlacklist = [];
        this.resourceUrlWhitelist = function(value) {
            return arguments.length && (resourceUrlWhitelist = adjustMatchers(value)), resourceUrlWhitelist;
        }, this.resourceUrlBlacklist = function(value) {
            return arguments.length && (resourceUrlBlacklist = adjustMatchers(value)), resourceUrlBlacklist;
        }, this.$get = [ "$injector", function($injector) {
            function matchUrl(matcher, parsedUrl) {
                return "self" === matcher ? urlIsSameOrigin(parsedUrl) : !!matcher.exec(parsedUrl.href);
            }
            function isResourceUrlAllowedByPolicy(url) {
                var i, n, parsedUrl = urlResolve(url.toString()), allowed = !1;
                for (i = 0, n = resourceUrlWhitelist.length; n > i; i++) if (matchUrl(resourceUrlWhitelist[i], parsedUrl)) {
                    allowed = !0;
                    break;
                }
                if (allowed) for (i = 0, n = resourceUrlBlacklist.length; n > i; i++) if (matchUrl(resourceUrlBlacklist[i], parsedUrl)) {
                    allowed = !1;
                    break;
                }
                return allowed;
            }
            function generateHolderType(Base) {
                var holderType = function(trustedValue) {
                    this.$$unwrapTrustedValue = function() {
                        return trustedValue;
                    };
                };
                return Base && (holderType.prototype = new Base()), holderType.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, holderType.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, holderType;
            }
            function trustAs(type, trustedValue) {
                var Constructor = byType.hasOwnProperty(type) ? byType[type] : null;
                if (!Constructor) throw $sceMinErr("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", type, trustedValue);
                if (null === trustedValue || trustedValue === undefined || "" === trustedValue) return trustedValue;
                if ("string" != typeof trustedValue) throw $sceMinErr("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", type);
                return new Constructor(trustedValue);
            }
            function valueOf(maybeTrusted) {
                return maybeTrusted instanceof trustedValueHolderBase ? maybeTrusted.$$unwrapTrustedValue() : maybeTrusted;
            }
            function getTrusted(type, maybeTrusted) {
                if (null === maybeTrusted || maybeTrusted === undefined || "" === maybeTrusted) return maybeTrusted;
                var constructor = byType.hasOwnProperty(type) ? byType[type] : null;
                if (constructor && maybeTrusted instanceof constructor) return maybeTrusted.$$unwrapTrustedValue();
                if (type === SCE_CONTEXTS.RESOURCE_URL) {
                    if (isResourceUrlAllowedByPolicy(maybeTrusted)) return maybeTrusted;
                    throw $sceMinErr("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", maybeTrusted.toString());
                }
                if (type === SCE_CONTEXTS.HTML) return htmlSanitizer(maybeTrusted);
                throw $sceMinErr("unsafe", "Attempting to use an unsafe value in a safe context.");
            }
            var htmlSanitizer = function() {
                throw $sceMinErr("unsafe", "Attempting to use an unsafe value in a safe context.");
            };
            $injector.has("$sanitize") && (htmlSanitizer = $injector.get("$sanitize"));
            var trustedValueHolderBase = generateHolderType(), byType = {};
            return byType[SCE_CONTEXTS.HTML] = generateHolderType(trustedValueHolderBase), byType[SCE_CONTEXTS.CSS] = generateHolderType(trustedValueHolderBase), 
            byType[SCE_CONTEXTS.URL] = generateHolderType(trustedValueHolderBase), byType[SCE_CONTEXTS.JS] = generateHolderType(trustedValueHolderBase), 
            byType[SCE_CONTEXTS.RESOURCE_URL] = generateHolderType(byType[SCE_CONTEXTS.URL]), 
            {
                trustAs: trustAs,
                getTrusted: getTrusted,
                valueOf: valueOf
            };
        } ];
    }
    function $SceProvider() {
        var enabled = !0;
        this.enabled = function(value) {
            return arguments.length && (enabled = !!value), enabled;
        }, this.$get = [ "$parse", "$sniffer", "$sceDelegate", function($parse, $sniffer, $sceDelegate) {
            if (enabled && $sniffer.msie && $sniffer.msieDocumentMode < 8) throw $sceMinErr("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 9 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
            var sce = shallowCopy(SCE_CONTEXTS);
            sce.isEnabled = function() {
                return enabled;
            }, sce.trustAs = $sceDelegate.trustAs, sce.getTrusted = $sceDelegate.getTrusted, 
            sce.valueOf = $sceDelegate.valueOf, enabled || (sce.trustAs = sce.getTrusted = function(type, value) {
                return value;
            }, sce.valueOf = identity), sce.parseAs = function(type, expr) {
                var parsed = $parse(expr);
                return parsed.literal && parsed.constant ? parsed : function(self, locals) {
                    return sce.getTrusted(type, parsed(self, locals));
                };
            };
            var parse = sce.parseAs, getTrusted = sce.getTrusted, trustAs = sce.trustAs;
            return forEach(SCE_CONTEXTS, function(enumValue, name) {
                var lName = lowercase(name);
                sce[camelCase("parse_as_" + lName)] = function(expr) {
                    return parse(enumValue, expr);
                }, sce[camelCase("get_trusted_" + lName)] = function(value) {
                    return getTrusted(enumValue, value);
                }, sce[camelCase("trust_as_" + lName)] = function(value) {
                    return trustAs(enumValue, value);
                };
            }), sce;
        } ];
    }
    function $SnifferProvider() {
        this.$get = [ "$window", "$document", function($window, $document) {
            var vendorPrefix, match, eventSupport = {}, android = int((/android (\d+)/.exec(lowercase(($window.navigator || {}).userAgent)) || [])[1]), boxee = /Boxee/i.test(($window.navigator || {}).userAgent), document = $document[0] || {}, documentMode = document.documentMode, vendorRegex = /^(Moz|webkit|O|ms)(?=[A-Z])/, bodyStyle = document.body && document.body.style, transitions = !1, animations = !1;
            if (bodyStyle) {
                for (var prop in bodyStyle) if (match = vendorRegex.exec(prop)) {
                    vendorPrefix = match[0], vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
                    break;
                }
                vendorPrefix || (vendorPrefix = "WebkitOpacity" in bodyStyle && "webkit"), transitions = !!("transition" in bodyStyle || vendorPrefix + "Transition" in bodyStyle), 
                animations = !!("animation" in bodyStyle || vendorPrefix + "Animation" in bodyStyle), 
                !android || transitions && animations || (transitions = isString(document.body.style.webkitTransition), 
                animations = isString(document.body.style.webkitAnimation));
            }
            return {
                history: !(!$window.history || !$window.history.pushState || 4 > android || boxee),
                hashchange: "onhashchange" in $window && (!documentMode || documentMode > 7),
                hasEvent: function(event) {
                    if ("input" == event && 9 == msie) return !1;
                    if (isUndefined(eventSupport[event])) {
                        var divElm = document.createElement("div");
                        eventSupport[event] = "on" + event in divElm;
                    }
                    return eventSupport[event];
                },
                csp: csp(),
                vendorPrefix: vendorPrefix,
                transitions: transitions,
                animations: animations,
                android: android,
                msie: msie,
                msieDocumentMode: documentMode
            };
        } ];
    }
    function $TimeoutProvider() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function($rootScope, $browser, $q, $exceptionHandler) {
            function timeout(fn, delay, invokeApply) {
                var timeoutId, deferred = $q.defer(), promise = deferred.promise, skipApply = isDefined(invokeApply) && !invokeApply;
                return timeoutId = $browser.defer(function() {
                    try {
                        deferred.resolve(fn());
                    } catch (e) {
                        deferred.reject(e), $exceptionHandler(e);
                    } finally {
                        delete deferreds[promise.$$timeoutId];
                    }
                    skipApply || $rootScope.$apply();
                }, delay), promise.$$timeoutId = timeoutId, deferreds[timeoutId] = deferred, promise;
            }
            var deferreds = {};
            return timeout.cancel = function(promise) {
                return promise && promise.$$timeoutId in deferreds ? (deferreds[promise.$$timeoutId].reject("canceled"), 
                delete deferreds[promise.$$timeoutId], $browser.defer.cancel(promise.$$timeoutId)) : !1;
            }, timeout;
        } ];
    }
    function urlResolve(url) {
        var href = url;
        return msie && (urlParsingNode.setAttribute("href", href), href = urlParsingNode.href), 
        urlParsingNode.setAttribute("href", href), {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: "/" === urlParsingNode.pathname.charAt(0) ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    function urlIsSameOrigin(requestUrl) {
        var parsed = isString(requestUrl) ? urlResolve(requestUrl) : requestUrl;
        return parsed.protocol === originUrl.protocol && parsed.host === originUrl.host;
    }
    function $WindowProvider() {
        this.$get = valueFn(window);
    }
    function $FilterProvider($provide) {
        function register(name, factory) {
            if (isObject(name)) {
                var filters = {};
                return forEach(name, function(filter, key) {
                    filters[key] = register(key, filter);
                }), filters;
            }
            return $provide.factory(name + suffix, factory);
        }
        var suffix = "Filter";
        this.register = register, this.$get = [ "$injector", function($injector) {
            return function(name) {
                return $injector.get(name + suffix);
            };
        } ], register("currency", currencyFilter), register("date", dateFilter), register("filter", filterFilter), 
        register("json", jsonFilter), register("limitTo", limitToFilter), register("lowercase", lowercaseFilter), 
        register("number", numberFilter), register("orderBy", orderByFilter), register("uppercase", uppercaseFilter);
    }
    function filterFilter() {
        return function(array, expression, comparator) {
            if (!isArray(array)) return array;
            var comparatorType = typeof comparator, predicates = [];
            predicates.check = function(value) {
                for (var j = 0; j < predicates.length; j++) if (!predicates[j](value)) return !1;
                return !0;
            }, "function" !== comparatorType && (comparator = "boolean" === comparatorType && comparator ? function(obj, text) {
                return angular.equals(obj, text);
            } : function(obj, text) {
                if (obj && text && "object" == typeof obj && "object" == typeof text) {
                    for (var objKey in obj) if ("$" !== objKey.charAt(0) && hasOwnProperty.call(obj, objKey) && comparator(obj[objKey], text[objKey])) return !0;
                    return !1;
                }
                return text = ("" + text).toLowerCase(), ("" + obj).toLowerCase().indexOf(text) > -1;
            });
            var search = function(obj, text) {
                if ("string" == typeof text && "!" === text.charAt(0)) return !search(obj, text.substr(1));
                switch (typeof obj) {
                  case "boolean":
                  case "number":
                  case "string":
                    return comparator(obj, text);

                  case "object":
                    switch (typeof text) {
                      case "object":
                        return comparator(obj, text);

                      default:
                        for (var objKey in obj) if ("$" !== objKey.charAt(0) && search(obj[objKey], text)) return !0;
                    }
                    return !1;

                  case "array":
                    for (var i = 0; i < obj.length; i++) if (search(obj[i], text)) return !0;
                    return !1;

                  default:
                    return !1;
                }
            };
            switch (typeof expression) {
              case "boolean":
              case "number":
              case "string":
                expression = {
                    $: expression
                };

              case "object":
                for (var key in expression) !function(path) {
                    "undefined" != typeof expression[path] && predicates.push(function(value) {
                        return search("$" == path ? value : value && value[path], expression[path]);
                    });
                }(key);
                break;

              case "function":
                predicates.push(expression);
                break;

              default:
                return array;
            }
            for (var filtered = [], j = 0; j < array.length; j++) {
                var value = array[j];
                predicates.check(value) && filtered.push(value);
            }
            return filtered;
        };
    }
    function currencyFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(amount, currencySymbol) {
            return isUndefined(currencySymbol) && (currencySymbol = formats.CURRENCY_SYM), formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, 2).replace(/\u00A4/g, currencySymbol);
        };
    }
    function numberFilter($locale) {
        var formats = $locale.NUMBER_FORMATS;
        return function(number, fractionSize) {
            return formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize);
        };
    }
    function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
        if (null == number || !isFinite(number) || isObject(number)) return "";
        var isNegative = 0 > number;
        number = Math.abs(number);
        var numStr = number + "", formatedText = "", parts = [], hasExponent = !1;
        if (-1 !== numStr.indexOf("e")) {
            var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
            match && "-" == match[2] && match[3] > fractionSize + 1 ? (numStr = "0", number = 0) : (formatedText = numStr, 
            hasExponent = !0);
        }
        if (hasExponent) fractionSize > 0 && number > -1 && 1 > number && (formatedText = number.toFixed(fractionSize)); else {
            var fractionLen = (numStr.split(DECIMAL_SEP)[1] || "").length;
            isUndefined(fractionSize) && (fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac)), 
            number = +(Math.round(+(number.toString() + "e" + fractionSize)).toString() + "e" + -fractionSize);
            var fraction = ("" + number).split(DECIMAL_SEP), whole = fraction[0];
            fraction = fraction[1] || "";
            var i, pos = 0, lgroup = pattern.lgSize, group = pattern.gSize;
            if (whole.length >= lgroup + group) for (pos = whole.length - lgroup, i = 0; pos > i; i++) (pos - i) % group === 0 && 0 !== i && (formatedText += groupSep), 
            formatedText += whole.charAt(i);
            for (i = pos; i < whole.length; i++) (whole.length - i) % lgroup === 0 && 0 !== i && (formatedText += groupSep), 
            formatedText += whole.charAt(i);
            for (;fraction.length < fractionSize; ) fraction += "0";
            fractionSize && "0" !== fractionSize && (formatedText += decimalSep + fraction.substr(0, fractionSize));
        }
        return parts.push(isNegative ? pattern.negPre : pattern.posPre), parts.push(formatedText), 
        parts.push(isNegative ? pattern.negSuf : pattern.posSuf), parts.join("");
    }
    function padNumber(num, digits, trim) {
        var neg = "";
        for (0 > num && (neg = "-", num = -num), num = "" + num; num.length < digits; ) num = "0" + num;
        return trim && (num = num.substr(num.length - digits)), neg + num;
    }
    function dateGetter(name, size, offset, trim) {
        return offset = offset || 0, function(date) {
            var value = date["get" + name]();
            return (offset > 0 || value > -offset) && (value += offset), 0 === value && -12 == offset && (value = 12), 
            padNumber(value, size, trim);
        };
    }
    function dateStrGetter(name, shortForm) {
        return function(date, formats) {
            var value = date["get" + name](), get = uppercase(shortForm ? "SHORT" + name : name);
            return formats[get][value];
        };
    }
    function timeZoneGetter(date) {
        var zone = -1 * date.getTimezoneOffset(), paddedZone = zone >= 0 ? "+" : "";
        return paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
    }
    function ampmGetter(date, formats) {
        return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
    }
    function dateFilter($locale) {
        function jsonStringToDate(string) {
            var match;
            if (match = string.match(R_ISO8601_STR)) {
                var date = new Date(0), tzHour = 0, tzMin = 0, dateSetter = match[8] ? date.setUTCFullYear : date.setFullYear, timeSetter = match[8] ? date.setUTCHours : date.setHours;
                match[9] && (tzHour = int(match[9] + match[10]), tzMin = int(match[9] + match[11])), 
                dateSetter.call(date, int(match[1]), int(match[2]) - 1, int(match[3]));
                var h = int(match[4] || 0) - tzHour, m = int(match[5] || 0) - tzMin, s = int(match[6] || 0), ms = Math.round(1e3 * parseFloat("0." + (match[7] || 0)));
                return timeSetter.call(date, h, m, s, ms), date;
            }
            return string;
        }
        var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(date, format) {
            var fn, match, text = "", parts = [];
            if (format = format || "mediumDate", format = $locale.DATETIME_FORMATS[format] || format, 
            isString(date) && (date = NUMBER_STRING.test(date) ? int(date) : jsonStringToDate(date)), 
            isNumber(date) && (date = new Date(date)), !isDate(date)) return date;
            for (;format; ) match = DATE_FORMATS_SPLIT.exec(format), match ? (parts = concat(parts, match, 1), 
            format = parts.pop()) : (parts.push(format), format = null);
            return forEach(parts, function(value) {
                fn = DATE_FORMATS[value], text += fn ? fn(date, $locale.DATETIME_FORMATS) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), text;
        };
    }
    function jsonFilter() {
        return function(object) {
            return toJson(object, !0);
        };
    }
    function limitToFilter() {
        return function(input, limit) {
            if (!isArray(input) && !isString(input)) return input;
            if (limit = 1/0 === Math.abs(Number(limit)) ? Number(limit) : int(limit), isString(input)) return limit ? limit >= 0 ? input.slice(0, limit) : input.slice(limit, input.length) : "";
            var i, n, out = [];
            for (limit > input.length ? limit = input.length : limit < -input.length && (limit = -input.length), 
            limit > 0 ? (i = 0, n = limit) : (i = input.length + limit, n = input.length); n > i; i++) out.push(input[i]);
            return out;
        };
    }
    function orderByFilter($parse) {
        return function(array, sortPredicate, reverseOrder) {
            function comparator(o1, o2) {
                for (var i = 0; i < sortPredicate.length; i++) {
                    var comp = sortPredicate[i](o1, o2);
                    if (0 !== comp) return comp;
                }
                return 0;
            }
            function reverseComparator(comp, descending) {
                return toBoolean(descending) ? function(a, b) {
                    return comp(b, a);
                } : comp;
            }
            function compare(v1, v2) {
                var t1 = typeof v1, t2 = typeof v2;
                return t1 == t2 ? (isDate(v1) && isDate(v2) && (v1 = v1.valueOf(), v2 = v2.valueOf()), 
                "string" == t1 && (v1 = v1.toLowerCase(), v2 = v2.toLowerCase()), v1 === v2 ? 0 : v2 > v1 ? -1 : 1) : t2 > t1 ? -1 : 1;
            }
            if (!isArray(array)) return array;
            if (!sortPredicate) return array;
            sortPredicate = isArray(sortPredicate) ? sortPredicate : [ sortPredicate ], sortPredicate = map(sortPredicate, function(predicate) {
                var descending = !1, get = predicate || identity;
                if (isString(predicate) && (("+" == predicate.charAt(0) || "-" == predicate.charAt(0)) && (descending = "-" == predicate.charAt(0), 
                predicate = predicate.substring(1)), get = $parse(predicate), get.constant)) {
                    var key = get();
                    return reverseComparator(function(a, b) {
                        return compare(a[key], b[key]);
                    }, descending);
                }
                return reverseComparator(function(a, b) {
                    return compare(get(a), get(b));
                }, descending);
            });
            for (var arrayCopy = [], i = 0; i < array.length; i++) arrayCopy.push(array[i]);
            return arrayCopy.sort(reverseComparator(comparator, reverseOrder));
        };
    }
    function ngDirective(directive) {
        return isFunction(directive) && (directive = {
            link: directive
        }), directive.restrict = directive.restrict || "AC", valueFn(directive);
    }
    function FormController(element, attrs, $scope, $animate) {
        function toggleValidCss(isValid, validationErrorKey) {
            validationErrorKey = validationErrorKey ? "-" + snake_case(validationErrorKey, "-") : "", 
            $animate.removeClass(element, (isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey), 
            $animate.addClass(element, (isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
        }
        var form = this, parentForm = element.parent().controller("form") || nullFormCtrl, invalidCount = 0, errors = form.$error = {}, controls = [];
        form.$name = attrs.name || attrs.ngForm, form.$dirty = !1, form.$pristine = !0, 
        form.$valid = !0, form.$invalid = !1, parentForm.$addControl(form), element.addClass(PRISTINE_CLASS), 
        toggleValidCss(!0), form.$addControl = function(control) {
            assertNotHasOwnProperty(control.$name, "input"), controls.push(control), control.$name && (form[control.$name] = control);
        }, form.$removeControl = function(control) {
            control.$name && form[control.$name] === control && delete form[control.$name], 
            forEach(errors, function(queue, validationToken) {
                form.$setValidity(validationToken, !0, control);
            }), arrayRemove(controls, control);
        }, form.$setValidity = function(validationToken, isValid, control) {
            var queue = errors[validationToken];
            if (isValid) queue && (arrayRemove(queue, control), queue.length || (invalidCount--, 
            invalidCount || (toggleValidCss(isValid), form.$valid = !0, form.$invalid = !1), 
            errors[validationToken] = !1, toggleValidCss(!0, validationToken), parentForm.$setValidity(validationToken, !0, form))); else {
                if (invalidCount || toggleValidCss(isValid), queue) {
                    if (includes(queue, control)) return;
                } else errors[validationToken] = queue = [], invalidCount++, toggleValidCss(!1, validationToken), 
                parentForm.$setValidity(validationToken, !1, form);
                queue.push(control), form.$valid = !1, form.$invalid = !0;
            }
        }, form.$setDirty = function() {
            $animate.removeClass(element, PRISTINE_CLASS), $animate.addClass(element, DIRTY_CLASS), 
            form.$dirty = !0, form.$pristine = !1, parentForm.$setDirty();
        }, form.$setPristine = function() {
            $animate.removeClass(element, DIRTY_CLASS), $animate.addClass(element, PRISTINE_CLASS), 
            form.$dirty = !1, form.$pristine = !0, forEach(controls, function(control) {
                control.$setPristine();
            });
        };
    }
    function validate(ctrl, validatorName, validity, value) {
        return ctrl.$setValidity(validatorName, validity), validity ? value : undefined;
    }
    function testFlags(validity, flags) {
        var i, flag;
        if (flags) for (i = 0; i < flags.length; ++i) if (flag = flags[i], validity[flag]) return !0;
        return !1;
    }
    function addNativeHtml5Validators(ctrl, validatorName, badFlags, ignoreFlags, validity) {
        if (isObject(validity)) {
            ctrl.$$hasNativeValidators = !0;
            var validator = function(value) {
                return ctrl.$error[validatorName] || testFlags(validity, ignoreFlags) || !testFlags(validity, badFlags) ? value : void ctrl.$setValidity(validatorName, !1);
            };
            ctrl.$parsers.push(validator);
        }
    }
    function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        var validity = element.prop(VALIDITY_STATE_PROPERTY), placeholder = element[0].placeholder, noevent = {};
        if (ctrl.$$validityState = validity, !$sniffer.android) {
            var composing = !1;
            element.on("compositionstart", function() {
                composing = !0;
            }), element.on("compositionend", function() {
                composing = !1, listener();
            });
        }
        var listener = function(ev) {
            if (!composing) {
                var value = element.val();
                if (msie && "input" === (ev || noevent).type && element[0].placeholder !== placeholder) return void (placeholder = element[0].placeholder);
                toBoolean(attr.ngTrim || "T") && (value = trim(value));
                var revalidate = validity && ctrl.$$hasNativeValidators;
                (ctrl.$viewValue !== value || "" === value && revalidate) && (scope.$$phase ? ctrl.$setViewValue(value) : scope.$apply(function() {
                    ctrl.$setViewValue(value);
                }));
            }
        };
        if ($sniffer.hasEvent("input")) element.on("input", listener); else {
            var timeout, deferListener = function() {
                timeout || (timeout = $browser.defer(function() {
                    listener(), timeout = null;
                }));
            };
            element.on("keydown", function(event) {
                var key = event.keyCode;
                91 === key || key > 15 && 19 > key || key >= 37 && 40 >= key || deferListener();
            }), $sniffer.hasEvent("paste") && element.on("paste cut", deferListener);
        }
        element.on("change", listener), ctrl.$render = function() {
            element.val(ctrl.$isEmpty(ctrl.$viewValue) ? "" : ctrl.$viewValue);
        };
        var patternValidator, match, pattern = attr.ngPattern;
        if (pattern) {
            var validateRegex = function(regexp, value) {
                return validate(ctrl, "pattern", ctrl.$isEmpty(value) || regexp.test(value), value);
            };
            match = pattern.match(/^\/(.*)\/([gim]*)$/), match ? (pattern = new RegExp(match[1], match[2]), 
            patternValidator = function(value) {
                return validateRegex(pattern, value);
            }) : patternValidator = function(value) {
                var patternObj = scope.$eval(pattern);
                if (!patternObj || !patternObj.test) throw minErr("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", pattern, patternObj, startingTag(element));
                return validateRegex(patternObj, value);
            }, ctrl.$formatters.push(patternValidator), ctrl.$parsers.push(patternValidator);
        }
        if (attr.ngMinlength) {
            var minlength = int(attr.ngMinlength), minLengthValidator = function(value) {
                return validate(ctrl, "minlength", ctrl.$isEmpty(value) || value.length >= minlength, value);
            };
            ctrl.$parsers.push(minLengthValidator), ctrl.$formatters.push(minLengthValidator);
        }
        if (attr.ngMaxlength) {
            var maxlength = int(attr.ngMaxlength), maxLengthValidator = function(value) {
                return validate(ctrl, "maxlength", ctrl.$isEmpty(value) || value.length <= maxlength, value);
            };
            ctrl.$parsers.push(maxLengthValidator), ctrl.$formatters.push(maxLengthValidator);
        }
    }
    function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        if (textInputType(scope, element, attr, ctrl, $sniffer, $browser), ctrl.$parsers.push(function(value) {
            var empty = ctrl.$isEmpty(value);
            return empty || NUMBER_REGEXP.test(value) ? (ctrl.$setValidity("number", !0), "" === value ? null : empty ? value : parseFloat(value)) : (ctrl.$setValidity("number", !1), 
            undefined);
        }), addNativeHtml5Validators(ctrl, "number", numberBadFlags, null, ctrl.$$validityState), 
        ctrl.$formatters.push(function(value) {
            return ctrl.$isEmpty(value) ? "" : "" + value;
        }), attr.min) {
            var minValidator = function(value) {
                var min = parseFloat(attr.min);
                return validate(ctrl, "min", ctrl.$isEmpty(value) || value >= min, value);
            };
            ctrl.$parsers.push(minValidator), ctrl.$formatters.push(minValidator);
        }
        if (attr.max) {
            var maxValidator = function(value) {
                var max = parseFloat(attr.max);
                return validate(ctrl, "max", ctrl.$isEmpty(value) || max >= value, value);
            };
            ctrl.$parsers.push(maxValidator), ctrl.$formatters.push(maxValidator);
        }
        ctrl.$formatters.push(function(value) {
            return validate(ctrl, "number", ctrl.$isEmpty(value) || isNumber(value), value);
        });
    }
    function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        textInputType(scope, element, attr, ctrl, $sniffer, $browser);
        var urlValidator = function(value) {
            return validate(ctrl, "url", ctrl.$isEmpty(value) || URL_REGEXP.test(value), value);
        };
        ctrl.$formatters.push(urlValidator), ctrl.$parsers.push(urlValidator);
    }
    function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
        textInputType(scope, element, attr, ctrl, $sniffer, $browser);
        var emailValidator = function(value) {
            return validate(ctrl, "email", ctrl.$isEmpty(value) || EMAIL_REGEXP.test(value), value);
        };
        ctrl.$formatters.push(emailValidator), ctrl.$parsers.push(emailValidator);
    }
    function radioInputType(scope, element, attr, ctrl) {
        isUndefined(attr.name) && element.attr("name", nextUid()), element.on("click", function() {
            element[0].checked && scope.$apply(function() {
                ctrl.$setViewValue(attr.value);
            });
        }), ctrl.$render = function() {
            var value = attr.value;
            element[0].checked = value == ctrl.$viewValue;
        }, attr.$observe("value", ctrl.$render);
    }
    function checkboxInputType(scope, element, attr, ctrl) {
        var trueValue = attr.ngTrueValue, falseValue = attr.ngFalseValue;
        isString(trueValue) || (trueValue = !0), isString(falseValue) || (falseValue = !1), 
        element.on("click", function() {
            scope.$apply(function() {
                ctrl.$setViewValue(element[0].checked);
            });
        }), ctrl.$render = function() {
            element[0].checked = ctrl.$viewValue;
        }, ctrl.$isEmpty = function(value) {
            return value !== trueValue;
        }, ctrl.$formatters.push(function(value) {
            return value === trueValue;
        }), ctrl.$parsers.push(function(value) {
            return value ? trueValue : falseValue;
        });
    }
    function classDirective(name, selector) {
        return name = "ngClass" + name, [ "$animate", function($animate) {
            function arrayDifference(tokens1, tokens2) {
                var values = [];
                outer: for (var i = 0; i < tokens1.length; i++) {
                    for (var token = tokens1[i], j = 0; j < tokens2.length; j++) if (token == tokens2[j]) continue outer;
                    values.push(token);
                }
                return values;
            }
            function arrayClasses(classVal) {
                if (isArray(classVal)) return classVal;
                if (isString(classVal)) return classVal.split(" ");
                if (isObject(classVal)) {
                    var classes = [];
                    return forEach(classVal, function(v, k) {
                        v && (classes = classes.concat(k.split(" ")));
                    }), classes;
                }
                return classVal;
            }
            return {
                restrict: "AC",
                link: function(scope, element, attr) {
                    function addClasses(classes) {
                        var newClasses = digestClassCounts(classes, 1);
                        attr.$addClass(newClasses);
                    }
                    function removeClasses(classes) {
                        var newClasses = digestClassCounts(classes, -1);
                        attr.$removeClass(newClasses);
                    }
                    function digestClassCounts(classes, count) {
                        var classCounts = element.data("$classCounts") || {}, classesToUpdate = [];
                        return forEach(classes, function(className) {
                            (count > 0 || classCounts[className]) && (classCounts[className] = (classCounts[className] || 0) + count, 
                            classCounts[className] === +(count > 0) && classesToUpdate.push(className));
                        }), element.data("$classCounts", classCounts), classesToUpdate.join(" ");
                    }
                    function updateClasses(oldClasses, newClasses) {
                        var toAdd = arrayDifference(newClasses, oldClasses), toRemove = arrayDifference(oldClasses, newClasses);
                        toRemove = digestClassCounts(toRemove, -1), toAdd = digestClassCounts(toAdd, 1), 
                        0 === toAdd.length ? $animate.removeClass(element, toRemove) : 0 === toRemove.length ? $animate.addClass(element, toAdd) : $animate.setClass(element, toAdd, toRemove);
                    }
                    function ngClassWatchAction(newVal) {
                        if (selector === !0 || scope.$index % 2 === selector) {
                            var newClasses = arrayClasses(newVal || []);
                            if (oldVal) {
                                if (!equals(newVal, oldVal)) {
                                    var oldClasses = arrayClasses(oldVal);
                                    updateClasses(oldClasses, newClasses);
                                }
                            } else addClasses(newClasses);
                        }
                        oldVal = shallowCopy(newVal);
                    }
                    var oldVal;
                    scope.$watch(attr[name], ngClassWatchAction, !0), attr.$observe("class", function() {
                        ngClassWatchAction(scope.$eval(attr[name]));
                    }), "ngClass" !== name && scope.$watch("$index", function($index, old$index) {
                        var mod = 1 & $index;
                        if (mod !== (1 & old$index)) {
                            var classes = arrayClasses(scope.$eval(attr[name]));
                            mod === selector ? addClasses(classes) : removeClasses(classes);
                        }
                    });
                }
            };
        } ];
    }
    var VALIDITY_STATE_PROPERTY = "validity", lowercase = function(string) {
        return isString(string) ? string.toLowerCase() : string;
    }, hasOwnProperty = Object.prototype.hasOwnProperty, uppercase = function(string) {
        return isString(string) ? string.toUpperCase() : string;
    }, manualLowercase = function(s) {
        return isString(s) ? s.replace(/[A-Z]/g, function(ch) {
            return String.fromCharCode(32 | ch.charCodeAt(0));
        }) : s;
    }, manualUppercase = function(s) {
        return isString(s) ? s.replace(/[a-z]/g, function(ch) {
            return String.fromCharCode(-33 & ch.charCodeAt(0));
        }) : s;
    };
    "i" !== "I".toLowerCase() && (lowercase = manualLowercase, uppercase = manualUppercase);
    var msie, jqLite, jQuery, angularModule, nodeName_, slice = [].slice, push = [].push, toString = Object.prototype.toString, ngMinErr = minErr("ng"), angular = window.angular || (window.angular = {}), uid = [ "0", "0", "0" ];
    msie = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]), isNaN(msie) && (msie = int((/trident\/.*; rv:(\d+)/.exec(lowercase(navigator.userAgent)) || [])[1])), 
    noop.$inject = [], identity.$inject = [];
    var isArray = function() {
        return isFunction(Array.isArray) ? Array.isArray : function(value) {
            return "[object Array]" === toString.call(value);
        };
    }(), trim = function() {
        return String.prototype.trim ? function(value) {
            return isString(value) ? value.trim() : value;
        } : function(value) {
            return isString(value) ? value.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : value;
        };
    }();
    nodeName_ = 9 > msie ? function(element) {
        return element = element.nodeName ? element : element[0], element.scopeName && "HTML" != element.scopeName ? uppercase(element.scopeName + ":" + element.nodeName) : element.nodeName;
    } : function(element) {
        return element.nodeName ? element.nodeName : element[0].nodeName;
    };
    var csp = function() {
        if (isDefined(csp.isActive_)) return csp.isActive_;
        var active = !(!document.querySelector("[ng-csp]") && !document.querySelector("[data-ng-csp]"));
        if (!active) try {
            new Function("");
        } catch (e) {
            active = !0;
        }
        return csp.isActive_ = active;
    }, SNAKE_CASE_REGEXP = /[A-Z]/g, version = {
        full: "1.2.21",
        major: 1,
        minor: 2,
        dot: 21,
        codeName: "wizard-props"
    };
    JQLite.expando = "ng339";
    var jqCache = JQLite.cache = {}, jqId = 1, addEventListenerFn = window.document.addEventListener ? function(element, type, fn) {
        element.addEventListener(type, fn, !1);
    } : function(element, type, fn) {
        element.attachEvent("on" + type, fn);
    }, removeEventListenerFn = window.document.removeEventListener ? function(element, type, fn) {
        element.removeEventListener(type, fn, !1);
    } : function(element, type, fn) {
        element.detachEvent("on" + type, fn);
    }, SPECIAL_CHARS_REGEXP = (JQLite._data = function(node) {
        return this.cache[node[this.expando]] || {};
    }, /([\:\-\_]+(.))/g), MOZ_HACK_REGEXP = /^moz([A-Z])/, jqLiteMinErr = minErr("jqLite"), SINGLE_TAG_REGEXP = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, HTML_REGEXP = /<|&#?\w+;/, TAG_NAME_REGEXP = /<([\w:]+)/, XHTML_TAG_REGEXP = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, wrapMap = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, 
    wrapMap.th = wrapMap.td;
    var JQLitePrototype = JQLite.prototype = {
        ready: function(fn) {
            function trigger() {
                fired || (fired = !0, fn());
            }
            var fired = !1;
            "complete" === document.readyState ? setTimeout(trigger) : (this.on("DOMContentLoaded", trigger), 
            JQLite(window).on("load", trigger));
        },
        toString: function() {
            var value = [];
            return forEach(this, function(e) {
                value.push("" + e);
            }), "[" + value.join(", ") + "]";
        },
        eq: function(index) {
            return jqLite(index >= 0 ? this[index] : this[this.length + index]);
        },
        length: 0,
        push: push,
        sort: [].sort,
        splice: [].splice
    }, BOOLEAN_ATTR = {};
    forEach("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(value) {
        BOOLEAN_ATTR[lowercase(value)] = value;
    });
    var BOOLEAN_ELEMENTS = {};
    forEach("input,select,option,textarea,button,form,details".split(","), function(value) {
        BOOLEAN_ELEMENTS[uppercase(value)] = !0;
    }), forEach({
        data: jqLiteData,
        removeData: jqLiteRemoveData
    }, function(fn, name) {
        JQLite[name] = fn;
    }), forEach({
        data: jqLiteData,
        inheritedData: jqLiteInheritedData,
        scope: function(element) {
            return jqLite.data(element, "$scope") || jqLiteInheritedData(element.parentNode || element, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(element) {
            return jqLite.data(element, "$isolateScope") || jqLite.data(element, "$isolateScopeNoTemplate");
        },
        controller: jqLiteController,
        injector: function(element) {
            return jqLiteInheritedData(element, "$injector");
        },
        removeAttr: function(element, name) {
            element.removeAttribute(name);
        },
        hasClass: jqLiteHasClass,
        css: function(element, name, value) {
            if (name = camelCase(name), !isDefined(value)) {
                var val;
                return 8 >= msie && (val = element.currentStyle && element.currentStyle[name], "" === val && (val = "auto")), 
                val = val || element.style[name], 8 >= msie && (val = "" === val ? undefined : val), 
                val;
            }
            element.style[name] = value;
        },
        attr: function(element, name, value) {
            var lowercasedName = lowercase(name);
            if (BOOLEAN_ATTR[lowercasedName]) {
                if (!isDefined(value)) return element[name] || (element.attributes.getNamedItem(name) || noop).specified ? lowercasedName : undefined;
                value ? (element[name] = !0, element.setAttribute(name, lowercasedName)) : (element[name] = !1, 
                element.removeAttribute(lowercasedName));
            } else if (isDefined(value)) element.setAttribute(name, value); else if (element.getAttribute) {
                var ret = element.getAttribute(name, 2);
                return null === ret ? undefined : ret;
            }
        },
        prop: function(element, name, value) {
            return isDefined(value) ? void (element[name] = value) : element[name];
        },
        text: function() {
            function getText(element, value) {
                var textProp = NODE_TYPE_TEXT_PROPERTY[element.nodeType];
                return isUndefined(value) ? textProp ? element[textProp] : "" : void (element[textProp] = value);
            }
            var NODE_TYPE_TEXT_PROPERTY = [];
            return 9 > msie ? (NODE_TYPE_TEXT_PROPERTY[1] = "innerText", NODE_TYPE_TEXT_PROPERTY[3] = "nodeValue") : NODE_TYPE_TEXT_PROPERTY[1] = NODE_TYPE_TEXT_PROPERTY[3] = "textContent", 
            getText.$dv = "", getText;
        }(),
        val: function(element, value) {
            if (isUndefined(value)) {
                if ("SELECT" === nodeName_(element) && element.multiple) {
                    var result = [];
                    return forEach(element.options, function(option) {
                        option.selected && result.push(option.value || option.text);
                    }), 0 === result.length ? null : result;
                }
                return element.value;
            }
            element.value = value;
        },
        html: function(element, value) {
            if (isUndefined(value)) return element.innerHTML;
            for (var i = 0, childNodes = element.childNodes; i < childNodes.length; i++) jqLiteDealoc(childNodes[i]);
            element.innerHTML = value;
        },
        empty: jqLiteEmpty
    }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2) {
            var i, key, nodeCount = this.length;
            if (fn !== jqLiteEmpty && (2 == fn.length && fn !== jqLiteHasClass && fn !== jqLiteController ? arg1 : arg2) === undefined) {
                if (isObject(arg1)) {
                    for (i = 0; nodeCount > i; i++) if (fn === jqLiteData) fn(this[i], arg1); else for (key in arg1) fn(this[i], key, arg1[key]);
                    return this;
                }
                for (var value = fn.$dv, jj = value === undefined ? Math.min(nodeCount, 1) : nodeCount, j = 0; jj > j; j++) {
                    var nodeValue = fn(this[j], arg1, arg2);
                    value = value ? value + nodeValue : nodeValue;
                }
                return value;
            }
            for (i = 0; nodeCount > i; i++) fn(this[i], arg1, arg2);
            return this;
        };
    }), forEach({
        removeData: jqLiteRemoveData,
        dealoc: jqLiteDealoc,
        on: function onFn(element, type, fn, unsupported) {
            if (isDefined(unsupported)) throw jqLiteMinErr("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
            var events = jqLiteExpandoStore(element, "events"), handle = jqLiteExpandoStore(element, "handle");
            events || jqLiteExpandoStore(element, "events", events = {}), handle || jqLiteExpandoStore(element, "handle", handle = createEventHandler(element, events)), 
            forEach(type.split(" "), function(type) {
                var eventFns = events[type];
                if (!eventFns) {
                    if ("mouseenter" == type || "mouseleave" == type) {
                        var contains = document.body.contains || document.body.compareDocumentPosition ? function(a, b) {
                            var adown = 9 === a.nodeType ? a.documentElement : a, bup = b && b.parentNode;
                            return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)));
                        } : function(a, b) {
                            if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                            return !1;
                        };
                        events[type] = [];
                        var eventmap = {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        };
                        onFn(element, eventmap[type], function(event) {
                            var target = this, related = event.relatedTarget;
                            (!related || related !== target && !contains(target, related)) && handle(event, type);
                        });
                    } else addEventListenerFn(element, type, handle), events[type] = [];
                    eventFns = events[type];
                }
                eventFns.push(fn);
            });
        },
        off: jqLiteOff,
        one: function(element, type, fn) {
            element = jqLite(element), element.on(type, function onFn() {
                element.off(type, fn), element.off(type, onFn);
            }), element.on(type, fn);
        },
        replaceWith: function(element, replaceNode) {
            var index, parent = element.parentNode;
            jqLiteDealoc(element), forEach(new JQLite(replaceNode), function(node) {
                index ? parent.insertBefore(node, index.nextSibling) : parent.replaceChild(node, element), 
                index = node;
            });
        },
        children: function(element) {
            var children = [];
            return forEach(element.childNodes, function(element) {
                1 === element.nodeType && children.push(element);
            }), children;
        },
        contents: function(element) {
            return element.contentDocument || element.childNodes || [];
        },
        append: function(element, node) {
            forEach(new JQLite(node), function(child) {
                (1 === element.nodeType || 11 === element.nodeType) && element.appendChild(child);
            });
        },
        prepend: function(element, node) {
            if (1 === element.nodeType) {
                var index = element.firstChild;
                forEach(new JQLite(node), function(child) {
                    element.insertBefore(child, index);
                });
            }
        },
        wrap: function(element, wrapNode) {
            wrapNode = jqLite(wrapNode)[0];
            var parent = element.parentNode;
            parent && parent.replaceChild(wrapNode, element), wrapNode.appendChild(element);
        },
        remove: function(element) {
            jqLiteDealoc(element);
            var parent = element.parentNode;
            parent && parent.removeChild(element);
        },
        after: function(element, newElement) {
            var index = element, parent = element.parentNode;
            forEach(new JQLite(newElement), function(node) {
                parent.insertBefore(node, index.nextSibling), index = node;
            });
        },
        addClass: jqLiteAddClass,
        removeClass: jqLiteRemoveClass,
        toggleClass: function(element, selector, condition) {
            selector && forEach(selector.split(" "), function(className) {
                var classCondition = condition;
                isUndefined(classCondition) && (classCondition = !jqLiteHasClass(element, className)), 
                (classCondition ? jqLiteAddClass : jqLiteRemoveClass)(element, className);
            });
        },
        parent: function(element) {
            var parent = element.parentNode;
            return parent && 11 !== parent.nodeType ? parent : null;
        },
        next: function(element) {
            if (element.nextElementSibling) return element.nextElementSibling;
            for (var elm = element.nextSibling; null != elm && 1 !== elm.nodeType; ) elm = elm.nextSibling;
            return elm;
        },
        find: function(element, selector) {
            return element.getElementsByTagName ? element.getElementsByTagName(selector) : [];
        },
        clone: jqLiteClone,
        triggerHandler: function(element, eventName, eventData) {
            var eventFns = (jqLiteExpandoStore(element, "events") || {})[eventName], eventFnsCopy = shallowCopy(eventFns || []);
            eventData = eventData || [];
            var event = [ {
                preventDefault: noop,
                stopPropagation: noop
            } ];
            forEach(eventFnsCopy, function(fn) {
                fn.apply(element, event.concat(eventData));
            });
        }
    }, function(fn, name) {
        JQLite.prototype[name] = function(arg1, arg2, arg3) {
            for (var value, i = 0; i < this.length; i++) isUndefined(value) ? (value = fn(this[i], arg1, arg2, arg3), 
            isDefined(value) && (value = jqLite(value))) : jqLiteAddNodes(value, fn(this[i], arg1, arg2, arg3));
            return isDefined(value) ? value : this;
        }, JQLite.prototype.bind = JQLite.prototype.on, JQLite.prototype.unbind = JQLite.prototype.off;
    }), HashMap.prototype = {
        put: function(key, value) {
            this[hashKey(key, this.nextUid)] = value;
        },
        get: function(key) {
            return this[hashKey(key, this.nextUid)];
        },
        remove: function(key) {
            var value = this[key = hashKey(key, this.nextUid)];
            return delete this[key], value;
        }
    };
    var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, FN_ARG_SPLIT = /,/, FN_ARG = /^\s*(_?)(\S+?)\1\s*$/, STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, $injectorMinErr = minErr("$injector"), $animateMinErr = minErr("$animate"), $AnimateProvider = [ "$provide", function($provide) {
        this.$$selectors = {}, this.register = function(name, factory) {
            var key = name + "-animation";
            if (name && "." != name.charAt(0)) throw $animateMinErr("notcsel", "Expecting class selector starting with '.' got '{0}'.", name);
            this.$$selectors[name.substr(1)] = key, $provide.factory(key, factory);
        }, this.classNameFilter = function(expression) {
            return 1 === arguments.length && (this.$$classNameFilter = expression instanceof RegExp ? expression : null), 
            this.$$classNameFilter;
        }, this.$get = [ "$timeout", "$$asyncCallback", function($timeout, $$asyncCallback) {
            function async(fn) {
                fn && $$asyncCallback(fn);
            }
            return {
                enter: function(element, parent, after, done) {
                    after ? after.after(element) : (parent && parent[0] || (parent = after.parent()), 
                    parent.append(element)), async(done);
                },
                leave: function(element, done) {
                    element.remove(), async(done);
                },
                move: function(element, parent, after, done) {
                    this.enter(element, parent, after, done);
                },
                addClass: function(element, className, done) {
                    className = isString(className) ? className : isArray(className) ? className.join(" ") : "", 
                    forEach(element, function(element) {
                        jqLiteAddClass(element, className);
                    }), async(done);
                },
                removeClass: function(element, className, done) {
                    className = isString(className) ? className : isArray(className) ? className.join(" ") : "", 
                    forEach(element, function(element) {
                        jqLiteRemoveClass(element, className);
                    }), async(done);
                },
                setClass: function(element, add, remove, done) {
                    forEach(element, function(element) {
                        jqLiteAddClass(element, add), jqLiteRemoveClass(element, remove);
                    }), async(done);
                },
                enabled: noop
            };
        } ];
    } ], $compileMinErr = minErr("$compile");
    $CompileProvider.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var PREFIX_REGEXP = /^(x[\:\-_]|data[\:\-_])/i, $interpolateMinErr = minErr("$interpolate"), PATH_MATCH = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, DEFAULT_PORTS = {
        http: 80,
        https: 443,
        ftp: 21
    }, $locationMinErr = minErr("$location");
    LocationHashbangInHtml5Url.prototype = LocationHashbangUrl.prototype = LocationHtml5Url.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: locationGetter("$$absUrl"),
        url: function(url, replace) {
            if (isUndefined(url)) return this.$$url;
            var match = PATH_MATCH.exec(url);
            return match[1] && this.path(decodeURIComponent(match[1])), (match[2] || match[1]) && this.search(match[3] || ""), 
            this.hash(match[5] || "", replace), this;
        },
        protocol: locationGetter("$$protocol"),
        host: locationGetter("$$host"),
        port: locationGetter("$$port"),
        path: locationGetterSetter("$$path", function(path) {
            return "/" == path.charAt(0) ? path : "/" + path;
        }),
        search: function(search, paramValue) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (isString(search)) this.$$search = parseKeyValue(search); else {
                    if (!isObject(search)) throw $locationMinErr("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                    forEach(search, function(value, key) {
                        null == value && delete search[key];
                    }), this.$$search = search;
                }
                break;

              default:
                isUndefined(paramValue) || null === paramValue ? delete this.$$search[search] : this.$$search[search] = paramValue;
            }
            return this.$$compose(), this;
        },
        hash: locationGetterSetter("$$hash", identity),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    var promiseWarning, $parseMinErr = minErr("$parse"), promiseWarningCache = {}, CALL = Function.prototype.call, APPLY = Function.prototype.apply, BIND = Function.prototype.bind, OPERATORS = {
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: noop,
        "+": function(self, locals, a, b) {
            return a = a(self, locals), b = b(self, locals), isDefined(a) ? isDefined(b) ? a + b : a : isDefined(b) ? b : undefined;
        },
        "-": function(self, locals, a, b) {
            return a = a(self, locals), b = b(self, locals), (isDefined(a) ? a : 0) - (isDefined(b) ? b : 0);
        },
        "*": function(self, locals, a, b) {
            return a(self, locals) * b(self, locals);
        },
        "/": function(self, locals, a, b) {
            return a(self, locals) / b(self, locals);
        },
        "%": function(self, locals, a, b) {
            return a(self, locals) % b(self, locals);
        },
        "^": function(self, locals, a, b) {
            return a(self, locals) ^ b(self, locals);
        },
        "=": noop,
        "===": function(self, locals, a, b) {
            return a(self, locals) === b(self, locals);
        },
        "!==": function(self, locals, a, b) {
            return a(self, locals) !== b(self, locals);
        },
        "==": function(self, locals, a, b) {
            return a(self, locals) == b(self, locals);
        },
        "!=": function(self, locals, a, b) {
            return a(self, locals) != b(self, locals);
        },
        "<": function(self, locals, a, b) {
            return a(self, locals) < b(self, locals);
        },
        ">": function(self, locals, a, b) {
            return a(self, locals) > b(self, locals);
        },
        "<=": function(self, locals, a, b) {
            return a(self, locals) <= b(self, locals);
        },
        ">=": function(self, locals, a, b) {
            return a(self, locals) >= b(self, locals);
        },
        "&&": function(self, locals, a, b) {
            return a(self, locals) && b(self, locals);
        },
        "||": function(self, locals, a, b) {
            return a(self, locals) || b(self, locals);
        },
        "&": function(self, locals, a, b) {
            return a(self, locals) & b(self, locals);
        },
        "|": function(self, locals, a, b) {
            return b(self, locals)(self, locals, a(self, locals));
        },
        "!": function(self, locals, a) {
            return !a(self, locals);
        }
    }, ESCAPE = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, Lexer = function(options) {
        this.options = options;
    };
    Lexer.prototype = {
        constructor: Lexer,
        lex: function(text) {
            for (this.text = text, this.index = 0, this.ch = undefined, this.lastCh = ":", this.tokens = []; this.index < this.text.length; ) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(); else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }), this.index++; else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue;
                    }
                    var ch2 = this.ch + this.peek(), ch3 = ch2 + this.peek(2), fn = OPERATORS[this.ch], fn2 = OPERATORS[ch2], fn3 = OPERATORS[ch3];
                    fn3 ? (this.tokens.push({
                        index: this.index,
                        text: ch3,
                        fn: fn3
                    }), this.index += 3) : fn2 ? (this.tokens.push({
                        index: this.index,
                        text: ch2,
                        fn: fn2
                    }), this.index += 2) : fn ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: fn
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
                this.lastCh = this.ch;
            }
            return this.tokens;
        },
        is: function(chars) {
            return -1 !== chars.indexOf(this.ch);
        },
        was: function(chars) {
            return -1 !== chars.indexOf(this.lastCh);
        },
        peek: function(i) {
            var num = i || 1;
            return this.index + num < this.text.length ? this.text.charAt(this.index + num) : !1;
        },
        isNumber: function(ch) {
            return ch >= "0" && "9" >= ch;
        },
        isWhitespace: function(ch) {
            return " " === ch || "\r" === ch || "	" === ch || "\n" === ch || "" === ch || " " === ch;
        },
        isIdent: function(ch) {
            return ch >= "a" && "z" >= ch || ch >= "A" && "Z" >= ch || "_" === ch || "$" === ch;
        },
        isExpOperator: function(ch) {
            return "-" === ch || "+" === ch || this.isNumber(ch);
        },
        throwError: function(error, start, end) {
            end = end || this.index;
            var colStr = isDefined(start) ? "s " + start + "-" + this.index + " [" + this.text.substring(start, end) + "]" : " " + end;
            throw $parseMinErr("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", error, colStr, this.text);
        },
        readNumber: function() {
            for (var number = "", start = this.index; this.index < this.text.length; ) {
                var ch = lowercase(this.text.charAt(this.index));
                if ("." == ch || this.isNumber(ch)) number += ch; else {
                    var peekCh = this.peek();
                    if ("e" == ch && this.isExpOperator(peekCh)) number += ch; else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && "e" == number.charAt(number.length - 1)) number += ch; else {
                        if (!this.isExpOperator(ch) || peekCh && this.isNumber(peekCh) || "e" != number.charAt(number.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            number = 1 * number, this.tokens.push({
                index: start,
                text: number,
                literal: !0,
                constant: !0,
                fn: function() {
                    return number;
                }
            });
        },
        readIdent: function() {
            for (var lastDot, peekIndex, methodName, ch, parser = this, ident = "", start = this.index; this.index < this.text.length && (ch = this.text.charAt(this.index), 
            "." === ch || this.isIdent(ch) || this.isNumber(ch)); ) "." === ch && (lastDot = this.index), 
            ident += ch, this.index++;
            if (lastDot) for (peekIndex = this.index; peekIndex < this.text.length; ) {
                if (ch = this.text.charAt(peekIndex), "(" === ch) {
                    methodName = ident.substr(lastDot - start + 1), ident = ident.substr(0, lastDot - start), 
                    this.index = peekIndex;
                    break;
                }
                if (!this.isWhitespace(ch)) break;
                peekIndex++;
            }
            var token = {
                index: start,
                text: ident
            };
            if (OPERATORS.hasOwnProperty(ident)) token.fn = OPERATORS[ident], token.literal = !0, 
            token.constant = !0; else {
                var getter = getterFn(ident, this.options, this.text);
                token.fn = extend(function(self, locals) {
                    return getter(self, locals);
                }, {
                    assign: function(self, value) {
                        return setter(self, ident, value, parser.text, parser.options);
                    }
                });
            }
            this.tokens.push(token), methodName && (this.tokens.push({
                index: lastDot,
                text: "."
            }), this.tokens.push({
                index: lastDot + 1,
                text: methodName
            }));
        },
        readString: function(quote) {
            var start = this.index;
            this.index++;
            for (var string = "", rawString = quote, escape = !1; this.index < this.text.length; ) {
                var ch = this.text.charAt(this.index);
                if (rawString += ch, escape) {
                    if ("u" === ch) {
                        var hex = this.text.substring(this.index + 1, this.index + 5);
                        hex.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + hex + "]"), 
                        this.index += 4, string += String.fromCharCode(parseInt(hex, 16));
                    } else {
                        var rep = ESCAPE[ch];
                        string += rep || ch;
                    }
                    escape = !1;
                } else if ("\\" === ch) escape = !0; else {
                    if (ch === quote) return this.index++, void this.tokens.push({
                        index: start,
                        text: rawString,
                        string: string,
                        literal: !0,
                        constant: !0,
                        fn: function() {
                            return string;
                        }
                    });
                    string += ch;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", start);
        }
    };
    var Parser = function(lexer, $filter, options) {
        this.lexer = lexer, this.$filter = $filter, this.options = options;
    };
    Parser.ZERO = extend(function() {
        return 0;
    }, {
        constant: !0
    }), Parser.prototype = {
        constructor: Parser,
        parse: function(text) {
            this.text = text, this.tokens = this.lexer.lex(text);
            var value = this.statements();
            return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            value.literal = !!value.literal, value.constant = !!value.constant, value;
        },
        primary: function() {
            var primary;
            if (this.expect("(")) primary = this.filterChain(), this.consume(")"); else if (this.expect("[")) primary = this.arrayDeclaration(); else if (this.expect("{")) primary = this.object(); else {
                var token = this.expect();
                primary = token.fn, primary || this.throwError("not a primary expression", token), 
                primary.literal = !!token.literal, primary.constant = !!token.constant;
            }
            for (var next, context; next = this.expect("(", "[", "."); ) "(" === next.text ? (primary = this.functionCall(primary, context), 
            context = null) : "[" === next.text ? (context = primary, primary = this.objectIndex(primary)) : "." === next.text ? (context = primary, 
            primary = this.fieldAccess(primary)) : this.throwError("IMPOSSIBLE");
            return primary;
        },
        throwError: function(msg, token) {
            throw $parseMinErr("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", token.text, msg, token.index + 1, this.text, this.text.substring(token.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw $parseMinErr("ueoe", "Unexpected end of expression: {0}", this.text);
            return this.tokens[0];
        },
        peek: function(e1, e2, e3, e4) {
            if (this.tokens.length > 0) {
                var token = this.tokens[0], t = token.text;
                if (t === e1 || t === e2 || t === e3 || t === e4 || !e1 && !e2 && !e3 && !e4) return token;
            }
            return !1;
        },
        expect: function(e1, e2, e3, e4) {
            var token = this.peek(e1, e2, e3, e4);
            return token ? (this.tokens.shift(), token) : !1;
        },
        consume: function(e1) {
            this.expect(e1) || this.throwError("is unexpected, expecting [" + e1 + "]", this.peek());
        },
        unaryFn: function(fn, right) {
            return extend(function(self, locals) {
                return fn(self, locals, right);
            }, {
                constant: right.constant
            });
        },
        ternaryFn: function(left, middle, right) {
            return extend(function(self, locals) {
                return left(self, locals) ? middle(self, locals) : right(self, locals);
            }, {
                constant: left.constant && middle.constant && right.constant
            });
        },
        binaryFn: function(left, fn, right) {
            return extend(function(self, locals) {
                return fn(self, locals, left, right);
            }, {
                constant: left.constant && right.constant
            });
        },
        statements: function() {
            for (var statements = []; ;) if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && statements.push(this.filterChain()), 
            !this.expect(";")) return 1 === statements.length ? statements[0] : function(self, locals) {
                for (var value, i = 0; i < statements.length; i++) {
                    var statement = statements[i];
                    statement && (value = statement(self, locals));
                }
                return value;
            };
        },
        filterChain: function() {
            for (var token, left = this.expression(); ;) {
                if (!(token = this.expect("|"))) return left;
                left = this.binaryFn(left, token.fn, this.filter());
            }
        },
        filter: function() {
            for (var token = this.expect(), fn = this.$filter(token.text), argsFn = []; ;) {
                if (!(token = this.expect(":"))) {
                    var fnInvoke = function(self, locals, input) {
                        for (var args = [ input ], i = 0; i < argsFn.length; i++) args.push(argsFn[i](self, locals));
                        return fn.apply(self, args);
                    };
                    return function() {
                        return fnInvoke;
                    };
                }
                argsFn.push(this.expression());
            }
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var right, token, left = this.ternary();
            return (token = this.expect("=")) ? (left.assign || this.throwError("implies assignment but [" + this.text.substring(0, token.index) + "] can not be assigned to", token), 
            right = this.ternary(), function(scope, locals) {
                return left.assign(scope, right(scope, locals), locals);
            }) : left;
        },
        ternary: function() {
            var middle, token, left = this.logicalOR();
            return (token = this.expect("?")) ? (middle = this.ternary(), (token = this.expect(":")) ? this.ternaryFn(left, middle, this.ternary()) : void this.throwError("expected :", token)) : left;
        },
        logicalOR: function() {
            for (var token, left = this.logicalAND(); ;) {
                if (!(token = this.expect("||"))) return left;
                left = this.binaryFn(left, token.fn, this.logicalAND());
            }
        },
        logicalAND: function() {
            var token, left = this.equality();
            return (token = this.expect("&&")) && (left = this.binaryFn(left, token.fn, this.logicalAND())), 
            left;
        },
        equality: function() {
            var token, left = this.relational();
            return (token = this.expect("==", "!=", "===", "!==")) && (left = this.binaryFn(left, token.fn, this.equality())), 
            left;
        },
        relational: function() {
            var token, left = this.additive();
            return (token = this.expect("<", ">", "<=", ">=")) && (left = this.binaryFn(left, token.fn, this.relational())), 
            left;
        },
        additive: function() {
            for (var token, left = this.multiplicative(); token = this.expect("+", "-"); ) left = this.binaryFn(left, token.fn, this.multiplicative());
            return left;
        },
        multiplicative: function() {
            for (var token, left = this.unary(); token = this.expect("*", "/", "%"); ) left = this.binaryFn(left, token.fn, this.unary());
            return left;
        },
        unary: function() {
            var token;
            return this.expect("+") ? this.primary() : (token = this.expect("-")) ? this.binaryFn(Parser.ZERO, token.fn, this.unary()) : (token = this.expect("!")) ? this.unaryFn(token.fn, this.unary()) : this.primary();
        },
        fieldAccess: function(object) {
            var parser = this, field = this.expect().text, getter = getterFn(field, this.options, this.text);
            return extend(function(scope, locals, self) {
                return getter(self || object(scope, locals));
            }, {
                assign: function(scope, value, locals) {
                    return setter(object(scope, locals), field, value, parser.text, parser.options);
                }
            });
        },
        objectIndex: function(obj) {
            var parser = this, indexFn = this.expression();
            return this.consume("]"), extend(function(self, locals) {
                var v, p, o = obj(self, locals), i = indexFn(self, locals);
                return ensureSafeMemberName(i, parser.text), o ? (v = ensureSafeObject(o[i], parser.text), 
                v && v.then && parser.options.unwrapPromises && (p = v, "$$v" in v || (p.$$v = undefined, 
                p.then(function(val) {
                    p.$$v = val;
                })), v = v.$$v), v) : undefined;
            }, {
                assign: function(self, value, locals) {
                    var key = indexFn(self, locals), safe = ensureSafeObject(obj(self, locals), parser.text);
                    return safe[key] = value;
                }
            });
        },
        functionCall: function(fn, contextGetter) {
            var argsFn = [];
            if (")" !== this.peekToken().text) do argsFn.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var parser = this;
            return function(scope, locals) {
                for (var args = [], context = contextGetter ? contextGetter(scope, locals) : scope, i = 0; i < argsFn.length; i++) args.push(argsFn[i](scope, locals));
                var fnPtr = fn(scope, locals, context) || noop;
                ensureSafeObject(context, parser.text), ensureSafeFunction(fnPtr, parser.text);
                var v = fnPtr.apply ? fnPtr.apply(context, args) : fnPtr(args[0], args[1], args[2], args[3], args[4]);
                return ensureSafeObject(v, parser.text);
            };
        },
        arrayDeclaration: function() {
            var elementFns = [], allConstant = !0;
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                var elementFn = this.expression();
                elementFns.push(elementFn), elementFn.constant || (allConstant = !1);
            } while (this.expect(","));
            return this.consume("]"), extend(function(self, locals) {
                for (var array = [], i = 0; i < elementFns.length; i++) array.push(elementFns[i](self, locals));
                return array;
            }, {
                literal: !0,
                constant: allConstant
            });
        },
        object: function() {
            var keyValues = [], allConstant = !0;
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                var token = this.expect(), key = token.string || token.text;
                this.consume(":");
                var value = this.expression();
                keyValues.push({
                    key: key,
                    value: value
                }), value.constant || (allConstant = !1);
            } while (this.expect(","));
            return this.consume("}"), extend(function(self, locals) {
                for (var object = {}, i = 0; i < keyValues.length; i++) {
                    var keyValue = keyValues[i];
                    object[keyValue.key] = keyValue.value(self, locals);
                }
                return object;
            }, {
                literal: !0,
                constant: allConstant
            });
        }
    };
    var getterFnCache = {}, $sceMinErr = minErr("$sce"), SCE_CONTEXTS = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, urlParsingNode = document.createElement("a"), originUrl = urlResolve(window.location.href, !0);
    $FilterProvider.$inject = [ "$provide" ], currencyFilter.$inject = [ "$locale" ], 
    numberFilter.$inject = [ "$locale" ];
    var DECIMAL_SEP = ".", DATE_FORMATS = {
        yyyy: dateGetter("FullYear", 4),
        yy: dateGetter("FullYear", 2, 0, !0),
        y: dateGetter("FullYear", 1),
        MMMM: dateStrGetter("Month"),
        MMM: dateStrGetter("Month", !0),
        MM: dateGetter("Month", 2, 1),
        M: dateGetter("Month", 1, 1),
        dd: dateGetter("Date", 2),
        d: dateGetter("Date", 1),
        HH: dateGetter("Hours", 2),
        H: dateGetter("Hours", 1),
        hh: dateGetter("Hours", 2, -12),
        h: dateGetter("Hours", 1, -12),
        mm: dateGetter("Minutes", 2),
        m: dateGetter("Minutes", 1),
        ss: dateGetter("Seconds", 2),
        s: dateGetter("Seconds", 1),
        sss: dateGetter("Milliseconds", 3),
        EEEE: dateStrGetter("Day"),
        EEE: dateStrGetter("Day", !0),
        a: ampmGetter,
        Z: timeZoneGetter
    }, DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, NUMBER_STRING = /^\-?\d+$/;
    dateFilter.$inject = [ "$locale" ];
    var lowercaseFilter = valueFn(lowercase), uppercaseFilter = valueFn(uppercase);
    orderByFilter.$inject = [ "$parse" ];
    var htmlAnchorDirective = valueFn({
        restrict: "E",
        compile: function(element, attr) {
            return 8 >= msie && (attr.href || attr.name || attr.$set("href", ""), element.append(document.createComment("IE fix"))), 
            attr.href || attr.xlinkHref || attr.name ? void 0 : function(scope, element) {
                var href = "[object SVGAnimatedString]" === toString.call(element.prop("href")) ? "xlink:href" : "href";
                element.on("click", function(event) {
                    element.attr(href) || event.preventDefault();
                });
            };
        }
    }), ngAttributeAliasDirectives = {};
    forEach(BOOLEAN_ATTR, function(propName, attrName) {
        if ("multiple" != propName) {
            var normalized = directiveNormalize("ng-" + attrName);
            ngAttributeAliasDirectives[normalized] = function() {
                return {
                    priority: 100,
                    link: function(scope, element, attr) {
                        scope.$watch(attr[normalized], function(value) {
                            attr.$set(attrName, !!value);
                        });
                    }
                };
            };
        }
    }), forEach([ "src", "srcset", "href" ], function(attrName) {
        var normalized = directiveNormalize("ng-" + attrName);
        ngAttributeAliasDirectives[normalized] = function() {
            return {
                priority: 99,
                link: function(scope, element, attr) {
                    var propName = attrName, name = attrName;
                    "href" === attrName && "[object SVGAnimatedString]" === toString.call(element.prop("href")) && (name = "xlinkHref", 
                    attr.$attr[name] = "xlink:href", propName = null), attr.$observe(normalized, function(value) {
                        value && (attr.$set(name, value), msie && propName && element.prop(propName, attr[name]));
                    });
                }
            };
        };
    });
    var nullFormCtrl = {
        $addControl: noop,
        $removeControl: noop,
        $setValidity: noop,
        $setDirty: noop,
        $setPristine: noop
    };
    FormController.$inject = [ "$element", "$attrs", "$scope", "$animate" ];
    var formDirectiveFactory = function(isNgForm) {
        return [ "$timeout", function($timeout) {
            var formDirective = {
                name: "form",
                restrict: isNgForm ? "EAC" : "E",
                controller: FormController,
                compile: function() {
                    return {
                        pre: function(scope, formElement, attr, controller) {
                            if (!attr.action) {
                                var preventDefaultListener = function(event) {
                                    event.preventDefault ? event.preventDefault() : event.returnValue = !1;
                                };
                                addEventListenerFn(formElement[0], "submit", preventDefaultListener), formElement.on("$destroy", function() {
                                    $timeout(function() {
                                        removeEventListenerFn(formElement[0], "submit", preventDefaultListener);
                                    }, 0, !1);
                                });
                            }
                            var parentFormCtrl = formElement.parent().controller("form"), alias = attr.name || attr.ngForm;
                            alias && setter(scope, alias, controller, alias), parentFormCtrl && formElement.on("$destroy", function() {
                                parentFormCtrl.$removeControl(controller), alias && setter(scope, alias, undefined, alias), 
                                extend(controller, nullFormCtrl);
                            });
                        }
                    };
                }
            };
            return formDirective;
        } ];
    }, formDirective = formDirectiveFactory(), ngFormDirective = formDirectiveFactory(!0), URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, inputType = {
        text: textInputType,
        number: numberInputType,
        url: urlInputType,
        email: emailInputType,
        radio: radioInputType,
        checkbox: checkboxInputType,
        hidden: noop,
        button: noop,
        submit: noop,
        reset: noop,
        file: noop
    }, numberBadFlags = [ "badInput" ], inputDirective = [ "$browser", "$sniffer", function($browser, $sniffer) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(scope, element, attr, ctrl) {
                ctrl && (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrl, $sniffer, $browser);
            }
        };
    } ], VALID_CLASS = "ng-valid", INVALID_CLASS = "ng-invalid", PRISTINE_CLASS = "ng-pristine", DIRTY_CLASS = "ng-dirty", NgModelController = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function($scope, $exceptionHandler, $attr, $element, $parse, $animate) {
        function toggleValidCss(isValid, validationErrorKey) {
            validationErrorKey = validationErrorKey ? "-" + snake_case(validationErrorKey, "-") : "", 
            $animate.removeClass($element, (isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey), 
            $animate.addClass($element, (isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
        }
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], 
        this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, 
        this.$valid = !0, this.$invalid = !1, this.$name = $attr.name;
        var ngModelGet = $parse($attr.ngModel), ngModelSet = ngModelGet.assign;
        if (!ngModelSet) throw minErr("ngModel")("nonassign", "Expression '{0}' is non-assignable. Element: {1}", $attr.ngModel, startingTag($element));
        this.$render = noop, this.$isEmpty = function(value) {
            return isUndefined(value) || "" === value || null === value || value !== value;
        };
        var parentForm = $element.inheritedData("$formController") || nullFormCtrl, invalidCount = 0, $error = this.$error = {};
        $element.addClass(PRISTINE_CLASS), toggleValidCss(!0), this.$setValidity = function(validationErrorKey, isValid) {
            $error[validationErrorKey] !== !isValid && (isValid ? ($error[validationErrorKey] && invalidCount--, 
            invalidCount || (toggleValidCss(!0), this.$valid = !0, this.$invalid = !1)) : (toggleValidCss(!1), 
            this.$invalid = !0, this.$valid = !1, invalidCount++), $error[validationErrorKey] = !isValid, 
            toggleValidCss(isValid, validationErrorKey), parentForm.$setValidity(validationErrorKey, isValid, this));
        }, this.$setPristine = function() {
            this.$dirty = !1, this.$pristine = !0, $animate.removeClass($element, DIRTY_CLASS), 
            $animate.addClass($element, PRISTINE_CLASS);
        }, this.$setViewValue = function(value) {
            this.$viewValue = value, this.$pristine && (this.$dirty = !0, this.$pristine = !1, 
            $animate.removeClass($element, PRISTINE_CLASS), $animate.addClass($element, DIRTY_CLASS), 
            parentForm.$setDirty()), forEach(this.$parsers, function(fn) {
                value = fn(value);
            }), this.$modelValue !== value && (this.$modelValue = value, ngModelSet($scope, value), 
            forEach(this.$viewChangeListeners, function(listener) {
                try {
                    listener();
                } catch (e) {
                    $exceptionHandler(e);
                }
            }));
        };
        var ctrl = this;
        $scope.$watch(function() {
            var value = ngModelGet($scope);
            if (ctrl.$modelValue !== value) {
                var formatters = ctrl.$formatters, idx = formatters.length;
                for (ctrl.$modelValue = value; idx--; ) value = formatters[idx](value);
                ctrl.$viewValue !== value && (ctrl.$viewValue = value, ctrl.$render());
            }
            return value;
        });
    } ], ngModelDirective = function() {
        return {
            require: [ "ngModel", "^?form" ],
            controller: NgModelController,
            link: function(scope, element, attr, ctrls) {
                var modelCtrl = ctrls[0], formCtrl = ctrls[1] || nullFormCtrl;
                formCtrl.$addControl(modelCtrl), scope.$on("$destroy", function() {
                    formCtrl.$removeControl(modelCtrl);
                });
            }
        };
    }, ngChangeDirective = valueFn({
        require: "ngModel",
        link: function(scope, element, attr, ctrl) {
            ctrl.$viewChangeListeners.push(function() {
                scope.$eval(attr.ngChange);
            });
        }
    }), requiredDirective = function() {
        return {
            require: "?ngModel",
            link: function(scope, elm, attr, ctrl) {
                if (ctrl) {
                    attr.required = !0;
                    var validator = function(value) {
                        return attr.required && ctrl.$isEmpty(value) ? void ctrl.$setValidity("required", !1) : (ctrl.$setValidity("required", !0), 
                        value);
                    };
                    ctrl.$formatters.push(validator), ctrl.$parsers.unshift(validator), attr.$observe("required", function() {
                        validator(ctrl.$viewValue);
                    });
                }
            }
        };
    }, ngListDirective = function() {
        return {
            require: "ngModel",
            link: function(scope, element, attr, ctrl) {
                var match = /\/(.*)\//.exec(attr.ngList), separator = match && new RegExp(match[1]) || attr.ngList || ",", parse = function(viewValue) {
                    if (!isUndefined(viewValue)) {
                        var list = [];
                        return viewValue && forEach(viewValue.split(separator), function(value) {
                            value && list.push(trim(value));
                        }), list;
                    }
                };
                ctrl.$parsers.push(parse), ctrl.$formatters.push(function(value) {
                    return isArray(value) ? value.join(", ") : undefined;
                }), ctrl.$isEmpty = function(value) {
                    return !value || !value.length;
                };
            }
        };
    }, CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/, ngValueDirective = function() {
        return {
            priority: 100,
            compile: function(tpl, tplAttr) {
                return CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue) ? function(scope, elm, attr) {
                    attr.$set("value", scope.$eval(attr.ngValue));
                } : function(scope, elm, attr) {
                    scope.$watch(attr.ngValue, function(value) {
                        attr.$set("value", value);
                    });
                };
            }
        };
    }, ngBindDirective = ngDirective({
        compile: function(templateElement) {
            return templateElement.addClass("ng-binding"), function(scope, element, attr) {
                element.data("$binding", attr.ngBind), scope.$watch(attr.ngBind, function(value) {
                    element.text(value == undefined ? "" : value);
                });
            };
        }
    }), ngBindTemplateDirective = [ "$interpolate", function($interpolate) {
        return function(scope, element, attr) {
            var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
            element.addClass("ng-binding").data("$binding", interpolateFn), attr.$observe("ngBindTemplate", function(value) {
                element.text(value);
            });
        };
    } ], ngBindHtmlDirective = [ "$sce", "$parse", function($sce, $parse) {
        return {
            compile: function(tElement) {
                return tElement.addClass("ng-binding"), function(scope, element, attr) {
                    function getStringValue() {
                        return (parsed(scope) || "").toString();
                    }
                    element.data("$binding", attr.ngBindHtml);
                    var parsed = $parse(attr.ngBindHtml);
                    scope.$watch(getStringValue, function() {
                        element.html($sce.getTrustedHtml(parsed(scope)) || "");
                    });
                };
            }
        };
    } ], ngClassDirective = classDirective("", !0), ngClassOddDirective = classDirective("Odd", 0), ngClassEvenDirective = classDirective("Even", 1), ngCloakDirective = ngDirective({
        compile: function(element, attr) {
            attr.$set("ngCloak", undefined), element.removeClass("ng-cloak");
        }
    }), ngControllerDirective = [ function() {
        return {
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], ngEventDirectives = {};
    forEach("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(name) {
        var directiveName = directiveNormalize("ng-" + name);
        ngEventDirectives[directiveName] = [ "$parse", function($parse) {
            return {
                compile: function($element, attr) {
                    var fn = $parse(attr[directiveName]);
                    return function(scope, element) {
                        element.on(lowercase(name), function(event) {
                            scope.$apply(function() {
                                fn(scope, {
                                    $event: event
                                });
                            });
                        });
                    };
                }
            };
        } ];
    });
    var ngIfDirective = [ "$animate", function($animate) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function($scope, $element, $attr, ctrl, $transclude) {
                var block, childScope, previousElements;
                $scope.$watch($attr.ngIf, function(value) {
                    toBoolean(value) ? childScope || (childScope = $scope.$new(), $transclude(childScope, function(clone) {
                        clone[clone.length++] = document.createComment(" end ngIf: " + $attr.ngIf + " "), 
                        block = {
                            clone: clone
                        }, $animate.enter(clone, $element.parent(), $element);
                    })) : (previousElements && (previousElements.remove(), previousElements = null), 
                    childScope && (childScope.$destroy(), childScope = null), block && (previousElements = getBlockElements(block.clone), 
                    $animate.leave(previousElements, function() {
                        previousElements = null;
                    }), block = null));
                });
            }
        };
    } ], ngIncludeDirective = [ "$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function($http, $templateCache, $anchorScroll, $animate, $sce) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: angular.noop,
            compile: function(element, attr) {
                var srcExp = attr.ngInclude || attr.src, onloadExp = attr.onload || "", autoScrollExp = attr.autoscroll;
                return function(scope, $element, $attr, ctrl, $transclude) {
                    var currentScope, previousElement, currentElement, changeCounter = 0, cleanupLastIncludeContent = function() {
                        previousElement && (previousElement.remove(), previousElement = null), currentScope && (currentScope.$destroy(), 
                        currentScope = null), currentElement && ($animate.leave(currentElement, function() {
                            previousElement = null;
                        }), previousElement = currentElement, currentElement = null);
                    };
                    scope.$watch($sce.parseAsResourceUrl(srcExp), function(src) {
                        var afterAnimation = function() {
                            !isDefined(autoScrollExp) || autoScrollExp && !scope.$eval(autoScrollExp) || $anchorScroll();
                        }, thisChangeId = ++changeCounter;
                        src ? ($http.get(src, {
                            cache: $templateCache
                        }).success(function(response) {
                            if (thisChangeId === changeCounter) {
                                var newScope = scope.$new();
                                ctrl.template = response;
                                var clone = $transclude(newScope, function(clone) {
                                    cleanupLastIncludeContent(), $animate.enter(clone, null, $element, afterAnimation);
                                });
                                currentScope = newScope, currentElement = clone, currentScope.$emit("$includeContentLoaded"), 
                                scope.$eval(onloadExp);
                            }
                        }).error(function() {
                            thisChangeId === changeCounter && cleanupLastIncludeContent();
                        }), scope.$emit("$includeContentRequested")) : (cleanupLastIncludeContent(), ctrl.template = null);
                    });
                };
            }
        };
    } ], ngIncludeFillContentDirective = [ "$compile", function($compile) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(scope, $element, $attr, ctrl) {
                $element.html(ctrl.template), $compile($element.contents())(scope);
            }
        };
    } ], ngInitDirective = ngDirective({
        priority: 450,
        compile: function() {
            return {
                pre: function(scope, element, attrs) {
                    scope.$eval(attrs.ngInit);
                }
            };
        }
    }), ngNonBindableDirective = ngDirective({
        terminal: !0,
        priority: 1e3
    }), ngPluralizeDirective = [ "$locale", "$interpolate", function($locale, $interpolate) {
        var BRACE = /{}/g;
        return {
            restrict: "EA",
            link: function(scope, element, attr) {
                var numberExp = attr.count, whenExp = attr.$attr.when && element.attr(attr.$attr.when), offset = attr.offset || 0, whens = scope.$eval(whenExp) || {}, whensExpFns = {}, startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), isWhen = /^when(Minus)?(.+)$/;
                forEach(attr, function(expression, attributeName) {
                    isWhen.test(attributeName) && (whens[lowercase(attributeName.replace("when", "").replace("Minus", "-"))] = element.attr(attr.$attr[attributeName]));
                }), forEach(whens, function(expression, key) {
                    whensExpFns[key] = $interpolate(expression.replace(BRACE, startSymbol + numberExp + "-" + offset + endSymbol));
                }), scope.$watch(function() {
                    var value = parseFloat(scope.$eval(numberExp));
                    return isNaN(value) ? "" : (value in whens || (value = $locale.pluralCat(value - offset)), 
                    whensExpFns[value](scope, element, !0));
                }, function(newVal) {
                    element.text(newVal);
                });
            }
        };
    } ], ngRepeatDirective = [ "$parse", "$animate", function($parse, $animate) {
        function getBlockStart(block) {
            return block.clone[0];
        }
        function getBlockEnd(block) {
            return block.clone[block.clone.length - 1];
        }
        var NG_REMOVED = "$$NG_REMOVED", ngRepeatMinErr = minErr("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            link: function($scope, $element, $attr, ctrl, $transclude) {
                var trackByExp, trackByExpGetter, trackByIdExpFn, trackByIdArrayFn, trackByIdObjFn, lhs, rhs, valueIdentifier, keyIdentifier, expression = $attr.ngRepeat, match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), hashFnLocals = {
                    $id: hashKey
                };
                if (!match) throw ngRepeatMinErr("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", expression);
                if (lhs = match[1], rhs = match[2], trackByExp = match[3], trackByExp ? (trackByExpGetter = $parse(trackByExp), 
                trackByIdExpFn = function(key, value, index) {
                    return keyIdentifier && (hashFnLocals[keyIdentifier] = key), hashFnLocals[valueIdentifier] = value, 
                    hashFnLocals.$index = index, trackByExpGetter($scope, hashFnLocals);
                }) : (trackByIdArrayFn = function(key, value) {
                    return hashKey(value);
                }, trackByIdObjFn = function(key) {
                    return key;
                }), match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !match) throw ngRepeatMinErr("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", lhs);
                valueIdentifier = match[3] || match[1], keyIdentifier = match[2];
                var lastBlockMap = {};
                $scope.$watchCollection(rhs, function(collection) {
                    var index, length, nextNode, arrayLength, childScope, key, value, trackById, trackByIdFn, collectionKeys, block, elementsToRemove, previousNode = $element[0], nextBlockMap = {}, nextBlockOrder = [];
                    if (isArrayLike(collection)) collectionKeys = collection, trackByIdFn = trackByIdExpFn || trackByIdArrayFn; else {
                        trackByIdFn = trackByIdExpFn || trackByIdObjFn, collectionKeys = [];
                        for (key in collection) collection.hasOwnProperty(key) && "$" != key.charAt(0) && collectionKeys.push(key);
                        collectionKeys.sort();
                    }
                    for (arrayLength = collectionKeys.length, length = nextBlockOrder.length = collectionKeys.length, 
                    index = 0; length > index; index++) if (key = collection === collectionKeys ? index : collectionKeys[index], 
                    value = collection[key], trackById = trackByIdFn(key, value, index), assertNotHasOwnProperty(trackById, "`track by` id"), 
                    lastBlockMap.hasOwnProperty(trackById)) block = lastBlockMap[trackById], delete lastBlockMap[trackById], 
                    nextBlockMap[trackById] = block, nextBlockOrder[index] = block; else {
                        if (nextBlockMap.hasOwnProperty(trackById)) throw forEach(nextBlockOrder, function(block) {
                            block && block.scope && (lastBlockMap[block.id] = block);
                        }), ngRepeatMinErr("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}", expression, trackById);
                        nextBlockOrder[index] = {
                            id: trackById
                        }, nextBlockMap[trackById] = !1;
                    }
                    for (key in lastBlockMap) lastBlockMap.hasOwnProperty(key) && (block = lastBlockMap[key], 
                    elementsToRemove = getBlockElements(block.clone), $animate.leave(elementsToRemove), 
                    forEach(elementsToRemove, function(element) {
                        element[NG_REMOVED] = !0;
                    }), block.scope.$destroy());
                    for (index = 0, length = collectionKeys.length; length > index; index++) {
                        if (key = collection === collectionKeys ? index : collectionKeys[index], value = collection[key], 
                        block = nextBlockOrder[index], nextBlockOrder[index - 1] && (previousNode = getBlockEnd(nextBlockOrder[index - 1])), 
                        block.scope) {
                            childScope = block.scope, nextNode = previousNode;
                            do nextNode = nextNode.nextSibling; while (nextNode && nextNode[NG_REMOVED]);
                            getBlockStart(block) != nextNode && $animate.move(getBlockElements(block.clone), null, jqLite(previousNode)), 
                            previousNode = getBlockEnd(block);
                        } else childScope = $scope.$new();
                        childScope[valueIdentifier] = value, keyIdentifier && (childScope[keyIdentifier] = key), 
                        childScope.$index = index, childScope.$first = 0 === index, childScope.$last = index === arrayLength - 1, 
                        childScope.$middle = !(childScope.$first || childScope.$last), childScope.$odd = !(childScope.$even = 0 === (1 & index)), 
                        block.scope || $transclude(childScope, function(clone) {
                            clone[clone.length++] = document.createComment(" end ngRepeat: " + expression + " "), 
                            $animate.enter(clone, null, jqLite(previousNode)), previousNode = clone, block.scope = childScope, 
                            block.clone = clone, nextBlockMap[block.id] = block;
                        });
                    }
                    lastBlockMap = nextBlockMap;
                });
            }
        };
    } ], ngShowDirective = [ "$animate", function($animate) {
        return function(scope, element, attr) {
            scope.$watch(attr.ngShow, function(value) {
                $animate[toBoolean(value) ? "removeClass" : "addClass"](element, "ng-hide");
            });
        };
    } ], ngHideDirective = [ "$animate", function($animate) {
        return function(scope, element, attr) {
            scope.$watch(attr.ngHide, function(value) {
                $animate[toBoolean(value) ? "addClass" : "removeClass"](element, "ng-hide");
            });
        };
    } ], ngStyleDirective = ngDirective(function(scope, element, attr) {
        scope.$watch(attr.ngStyle, function(newStyles, oldStyles) {
            oldStyles && newStyles !== oldStyles && forEach(oldStyles, function(val, style) {
                element.css(style, "");
            }), newStyles && element.css(newStyles);
        }, !0);
    }), ngSwitchDirective = [ "$animate", function($animate) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(scope, element, attr, ngSwitchController) {
                var watchExpr = attr.ngSwitch || attr.on, selectedTranscludes = [], selectedElements = [], previousElements = [], selectedScopes = [];
                scope.$watch(watchExpr, function(value) {
                    var i, ii;
                    for (i = 0, ii = previousElements.length; ii > i; ++i) previousElements[i].remove();
                    for (previousElements.length = 0, i = 0, ii = selectedScopes.length; ii > i; ++i) {
                        var selected = selectedElements[i];
                        selectedScopes[i].$destroy(), previousElements[i] = selected, $animate.leave(selected, function() {
                            previousElements.splice(i, 1);
                        });
                    }
                    selectedElements.length = 0, selectedScopes.length = 0, (selectedTranscludes = ngSwitchController.cases["!" + value] || ngSwitchController.cases["?"]) && (scope.$eval(attr.change), 
                    forEach(selectedTranscludes, function(selectedTransclude) {
                        var selectedScope = scope.$new();
                        selectedScopes.push(selectedScope), selectedTransclude.transclude(selectedScope, function(caseElement) {
                            var anchor = selectedTransclude.element;
                            selectedElements.push(caseElement), $animate.enter(caseElement, anchor.parent(), anchor);
                        });
                    }));
                });
            }
        };
    } ], ngSwitchWhenDirective = ngDirective({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(scope, element, attrs, ctrl, $transclude) {
            ctrl.cases["!" + attrs.ngSwitchWhen] = ctrl.cases["!" + attrs.ngSwitchWhen] || [], 
            ctrl.cases["!" + attrs.ngSwitchWhen].push({
                transclude: $transclude,
                element: element
            });
        }
    }), ngSwitchDefaultDirective = ngDirective({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(scope, element, attr, ctrl, $transclude) {
            ctrl.cases["?"] = ctrl.cases["?"] || [], ctrl.cases["?"].push({
                transclude: $transclude,
                element: element
            });
        }
    }), ngTranscludeDirective = ngDirective({
        link: function($scope, $element, $attrs, controller, $transclude) {
            if (!$transclude) throw minErr("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", startingTag($element));
            $transclude(function(clone) {
                $element.empty(), $element.append(clone);
            });
        }
    }), scriptDirective = [ "$templateCache", function($templateCache) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(element, attr) {
                if ("text/ng-template" == attr.type) {
                    var templateUrl = attr.id, text = element[0].text;
                    $templateCache.put(templateUrl, text);
                }
            }
        };
    } ], ngOptionsMinErr = minErr("ngOptions"), ngOptionsDirective = valueFn({
        terminal: !0
    }), selectDirective = [ "$compile", "$parse", function($compile, $parse) {
        var NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, nullModelCtrl = {
            $setViewValue: noop
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function($element, $scope, $attrs) {
                var nullOption, unknownOption, self = this, optionsMap = {}, ngModelCtrl = nullModelCtrl;
                self.databound = $attrs.ngModel, self.init = function(ngModelCtrl_, nullOption_, unknownOption_) {
                    ngModelCtrl = ngModelCtrl_, nullOption = nullOption_, unknownOption = unknownOption_;
                }, self.addOption = function(value) {
                    assertNotHasOwnProperty(value, '"option value"'), optionsMap[value] = !0, ngModelCtrl.$viewValue == value && ($element.val(value), 
                    unknownOption.parent() && unknownOption.remove());
                }, self.removeOption = function(value) {
                    this.hasOption(value) && (delete optionsMap[value], ngModelCtrl.$viewValue == value && this.renderUnknownOption(value));
                }, self.renderUnknownOption = function(val) {
                    var unknownVal = "? " + hashKey(val) + " ?";
                    unknownOption.val(unknownVal), $element.prepend(unknownOption), $element.val(unknownVal), 
                    unknownOption.prop("selected", !0);
                }, self.hasOption = function(value) {
                    return optionsMap.hasOwnProperty(value);
                }, $scope.$on("$destroy", function() {
                    self.renderUnknownOption = noop;
                });
            } ],
            link: function(scope, element, attr, ctrls) {
                function setupAsSingle(scope, selectElement, ngModelCtrl, selectCtrl) {
                    ngModelCtrl.$render = function() {
                        var viewValue = ngModelCtrl.$viewValue;
                        selectCtrl.hasOption(viewValue) ? (unknownOption.parent() && unknownOption.remove(), 
                        selectElement.val(viewValue), "" === viewValue && emptyOption.prop("selected", !0)) : isUndefined(viewValue) && emptyOption ? selectElement.val("") : selectCtrl.renderUnknownOption(viewValue);
                    }, selectElement.on("change", function() {
                        scope.$apply(function() {
                            unknownOption.parent() && unknownOption.remove(), ngModelCtrl.$setViewValue(selectElement.val());
                        });
                    });
                }
                function setupAsMultiple(scope, selectElement, ctrl) {
                    var lastView;
                    ctrl.$render = function() {
                        var items = new HashMap(ctrl.$viewValue);
                        forEach(selectElement.find("option"), function(option) {
                            option.selected = isDefined(items.get(option.value));
                        });
                    }, scope.$watch(function() {
                        equals(lastView, ctrl.$viewValue) || (lastView = shallowCopy(ctrl.$viewValue), ctrl.$render());
                    }), selectElement.on("change", function() {
                        scope.$apply(function() {
                            var array = [];
                            forEach(selectElement.find("option"), function(option) {
                                option.selected && array.push(option.value);
                            }), ctrl.$setViewValue(array);
                        });
                    });
                }
                function setupAsOptions(scope, selectElement, ctrl) {
                    function render() {
                        var optionGroupName, optionGroup, option, existingParent, existingOptions, existingOption, key, groupLength, length, groupIndex, index, selected, lastElement, element, label, optionGroups = {
                            "": []
                        }, optionGroupNames = [ "" ], modelValue = ctrl.$modelValue, values = valuesFn(scope) || [], keys = keyName ? sortedKeys(values) : values, locals = {}, selectedSet = !1;
                        if (multiple) if (trackFn && isArray(modelValue)) {
                            selectedSet = new HashMap([]);
                            for (var trackIndex = 0; trackIndex < modelValue.length; trackIndex++) locals[valueName] = modelValue[trackIndex], 
                            selectedSet.put(trackFn(scope, locals), modelValue[trackIndex]);
                        } else selectedSet = new HashMap(modelValue);
                        for (index = 0; length = keys.length, length > index; index++) {
                            if (key = index, keyName) {
                                if (key = keys[index], "$" === key.charAt(0)) continue;
                                locals[keyName] = key;
                            }
                            if (locals[valueName] = values[key], optionGroupName = groupByFn(scope, locals) || "", 
                            (optionGroup = optionGroups[optionGroupName]) || (optionGroup = optionGroups[optionGroupName] = [], 
                            optionGroupNames.push(optionGroupName)), multiple) selected = isDefined(selectedSet.remove(trackFn ? trackFn(scope, locals) : valueFn(scope, locals))); else {
                                if (trackFn) {
                                    var modelCast = {};
                                    modelCast[valueName] = modelValue, selected = trackFn(scope, modelCast) === trackFn(scope, locals);
                                } else selected = modelValue === valueFn(scope, locals);
                                selectedSet = selectedSet || selected;
                            }
                            label = displayFn(scope, locals), label = isDefined(label) ? label : "", optionGroup.push({
                                id: trackFn ? trackFn(scope, locals) : keyName ? keys[index] : index,
                                label: label,
                                selected: selected
                            });
                        }
                        for (multiple || (nullOption || null === modelValue ? optionGroups[""].unshift({
                            id: "",
                            label: "",
                            selected: !selectedSet
                        }) : selectedSet || optionGroups[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), groupIndex = 0, groupLength = optionGroupNames.length; groupLength > groupIndex; groupIndex++) {
                            for (optionGroupName = optionGroupNames[groupIndex], optionGroup = optionGroups[optionGroupName], 
                            optionGroupsCache.length <= groupIndex ? (existingParent = {
                                element: optGroupTemplate.clone().attr("label", optionGroupName),
                                label: optionGroup.label
                            }, existingOptions = [ existingParent ], optionGroupsCache.push(existingOptions), 
                            selectElement.append(existingParent.element)) : (existingOptions = optionGroupsCache[groupIndex], 
                            existingParent = existingOptions[0], existingParent.label != optionGroupName && existingParent.element.attr("label", existingParent.label = optionGroupName)), 
                            lastElement = null, index = 0, length = optionGroup.length; length > index; index++) option = optionGroup[index], 
                            (existingOption = existingOptions[index + 1]) ? (lastElement = existingOption.element, 
                            existingOption.label !== option.label && lastElement.text(existingOption.label = option.label), 
                            existingOption.id !== option.id && lastElement.val(existingOption.id = option.id), 
                            existingOption.selected !== option.selected && (lastElement.prop("selected", existingOption.selected = option.selected), 
                            msie && lastElement.prop("selected", existingOption.selected))) : ("" === option.id && nullOption ? element = nullOption : (element = optionTemplate.clone()).val(option.id).prop("selected", option.selected).text(option.label), 
                            existingOptions.push(existingOption = {
                                element: element,
                                label: option.label,
                                id: option.id,
                                selected: option.selected
                            }), lastElement ? lastElement.after(element) : existingParent.element.append(element), 
                            lastElement = element);
                            for (index++; existingOptions.length > index; ) existingOptions.pop().element.remove();
                        }
                        for (;optionGroupsCache.length > groupIndex; ) optionGroupsCache.pop()[0].element.remove();
                    }
                    var match;
                    if (!(match = optionsExp.match(NG_OPTIONS_REGEXP))) throw ngOptionsMinErr("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", optionsExp, startingTag(selectElement));
                    var displayFn = $parse(match[2] || match[1]), valueName = match[4] || match[6], keyName = match[5], groupByFn = $parse(match[3] || ""), valueFn = $parse(match[2] ? match[1] : valueName), valuesFn = $parse(match[7]), track = match[8], trackFn = track ? $parse(match[8]) : null, optionGroupsCache = [ [ {
                        element: selectElement,
                        label: ""
                    } ] ];
                    nullOption && ($compile(nullOption)(scope), nullOption.removeClass("ng-scope"), 
                    nullOption.remove()), selectElement.empty(), selectElement.on("change", function() {
                        scope.$apply(function() {
                            var optionGroup, key, value, optionElement, index, groupIndex, length, groupLength, trackIndex, collection = valuesFn(scope) || [], locals = {};
                            if (multiple) {
                                for (value = [], groupIndex = 0, groupLength = optionGroupsCache.length; groupLength > groupIndex; groupIndex++) for (optionGroup = optionGroupsCache[groupIndex], 
                                index = 1, length = optionGroup.length; length > index; index++) if ((optionElement = optionGroup[index].element)[0].selected) {
                                    if (key = optionElement.val(), keyName && (locals[keyName] = key), trackFn) for (trackIndex = 0; trackIndex < collection.length && (locals[valueName] = collection[trackIndex], 
                                    trackFn(scope, locals) != key); trackIndex++) ; else locals[valueName] = collection[key];
                                    value.push(valueFn(scope, locals));
                                }
                            } else {
                                if (key = selectElement.val(), "?" == key) value = undefined; else if ("" === key) value = null; else if (trackFn) {
                                    for (trackIndex = 0; trackIndex < collection.length; trackIndex++) if (locals[valueName] = collection[trackIndex], 
                                    trackFn(scope, locals) == key) {
                                        value = valueFn(scope, locals);
                                        break;
                                    }
                                } else locals[valueName] = collection[key], keyName && (locals[keyName] = key), 
                                value = valueFn(scope, locals);
                                optionGroupsCache[0].length > 1 && optionGroupsCache[0][1].id !== key && (optionGroupsCache[0][1].selected = !1);
                            }
                            ctrl.$setViewValue(value);
                        });
                    }), ctrl.$render = render, scope.$watch(render);
                }
                if (ctrls[1]) {
                    for (var emptyOption, selectCtrl = ctrls[0], ngModelCtrl = ctrls[1], multiple = attr.multiple, optionsExp = attr.ngOptions, nullOption = !1, optionTemplate = jqLite(document.createElement("option")), optGroupTemplate = jqLite(document.createElement("optgroup")), unknownOption = optionTemplate.clone(), i = 0, children = element.children(), ii = children.length; ii > i; i++) if ("" === children[i].value) {
                        emptyOption = nullOption = children.eq(i);
                        break;
                    }
                    selectCtrl.init(ngModelCtrl, nullOption, unknownOption), multiple && (ngModelCtrl.$isEmpty = function(value) {
                        return !value || 0 === value.length;
                    }), optionsExp ? setupAsOptions(scope, element, ngModelCtrl) : multiple ? setupAsMultiple(scope, element, ngModelCtrl) : setupAsSingle(scope, element, ngModelCtrl, selectCtrl);
                }
            }
        };
    } ], optionDirective = [ "$interpolate", function($interpolate) {
        var nullSelectCtrl = {
            addOption: noop,
            removeOption: noop
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(element, attr) {
                if (isUndefined(attr.value)) {
                    var interpolateFn = $interpolate(element.text(), !0);
                    interpolateFn || attr.$set("value", element.text());
                }
                return function(scope, element, attr) {
                    var selectCtrlName = "$selectController", parent = element.parent(), selectCtrl = parent.data(selectCtrlName) || parent.parent().data(selectCtrlName);
                    selectCtrl && selectCtrl.databound ? element.prop("selected", !1) : selectCtrl = nullSelectCtrl, 
                    interpolateFn ? scope.$watch(interpolateFn, function(newVal, oldVal) {
                        attr.$set("value", newVal), newVal !== oldVal && selectCtrl.removeOption(oldVal), 
                        selectCtrl.addOption(newVal);
                    }) : selectCtrl.addOption(attr.value), element.on("$destroy", function() {
                        selectCtrl.removeOption(attr.value);
                    });
                };
            }
        };
    } ], styleDirective = valueFn({
        restrict: "E",
        terminal: !0
    });
    return window.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (bindJQuery(), 
    publishExternalAPI(angular), void jqLite(document).ready(function() {
        angularInit(document, bootstrap);
    }));
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), 
define("angular", [ "jquery" ], function(global) {
    return function() {
        var ret;
        return ret || global.angular;
    };
}(this)), define("config/configuration", [], function() {
    "use strict";
    return {
        system: "dev",
        useMock: !1,
        cors: !0
    };
}), function(window, angular) {
    "use strict";
    function $RouteProvider() {
        function inherit(parent, extra) {
            return angular.extend(new (angular.extend(function() {}, {
                prototype: parent
            }))(), extra);
        }
        function pathRegExp(path, opts) {
            var insensitive = opts.caseInsensitiveMatch, ret = {
                originalPath: path,
                regexp: path
            }, keys = ret.keys = [];
            return path = path.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option) {
                var optional = "?" === option ? option : null, star = "*" === option ? option : null;
                return keys.push({
                    name: key,
                    optional: !!optional
                }), slash = slash || "", "" + (optional ? "" : slash) + "(?:" + (optional ? slash : "") + (star && "(.+?)" || "([^/]+)") + (optional || "") + ")" + (optional || "");
            }).replace(/([\/$\*])/g, "\\$1"), ret.regexp = new RegExp("^" + path + "$", insensitive ? "i" : ""), 
            ret;
        }
        var routes = {};
        this.when = function(path, route) {
            if (routes[path] = angular.extend({
                reloadOnSearch: !0
            }, route, path && pathRegExp(path, route)), path) {
                var redirectPath = "/" == path[path.length - 1] ? path.substr(0, path.length - 1) : path + "/";
                routes[redirectPath] = angular.extend({
                    redirectTo: path
                }, pathRegExp(redirectPath, route));
            }
            return this;
        }, this.otherwise = function(params) {
            return this.when(null, params), this;
        }, this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {
            function switchRouteMatcher(on, route) {
                var keys = route.keys, params = {};
                if (!route.regexp) return null;
                var m = route.regexp.exec(on);
                if (!m) return null;
                for (var i = 1, len = m.length; len > i; ++i) {
                    var key = keys[i - 1], val = m[i];
                    key && val && (params[key.name] = val);
                }
                return params;
            }
            function updateRoute() {
                var next = parseRoute(), last = $route.current;
                next && last && next.$$route === last.$$route && angular.equals(next.pathParams, last.pathParams) && !next.reloadOnSearch && !forceReload ? (last.params = next.params, 
                angular.copy(last.params, $routeParams), $rootScope.$broadcast("$routeUpdate", last)) : (next || last) && (forceReload = !1, 
                $rootScope.$broadcast("$routeChangeStart", next, last), $route.current = next, next && next.redirectTo && (angular.isString(next.redirectTo) ? $location.path(interpolate(next.redirectTo, next.params)).search(next.params).replace() : $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search())).replace()), 
                $q.when(next).then(function() {
                    if (next) {
                        var template, templateUrl, locals = angular.extend({}, next.resolve);
                        return angular.forEach(locals, function(value, key) {
                            locals[key] = angular.isString(value) ? $injector.get(value) : $injector.invoke(value);
                        }), angular.isDefined(template = next.template) ? angular.isFunction(template) && (template = template(next.params)) : angular.isDefined(templateUrl = next.templateUrl) && (angular.isFunction(templateUrl) && (templateUrl = templateUrl(next.params)), 
                        templateUrl = $sce.getTrustedResourceUrl(templateUrl), angular.isDefined(templateUrl) && (next.loadedTemplateUrl = templateUrl, 
                        template = $http.get(templateUrl, {
                            cache: $templateCache
                        }).then(function(response) {
                            return response.data;
                        }))), angular.isDefined(template) && (locals.$template = template), $q.all(locals);
                    }
                }).then(function(locals) {
                    next == $route.current && (next && (next.locals = locals, angular.copy(next.params, $routeParams)), 
                    $rootScope.$broadcast("$routeChangeSuccess", next, last));
                }, function(error) {
                    next == $route.current && $rootScope.$broadcast("$routeChangeError", next, last, error);
                }));
            }
            function parseRoute() {
                var params, match;
                return angular.forEach(routes, function(route) {
                    !match && (params = switchRouteMatcher($location.path(), route)) && (match = inherit(route, {
                        params: angular.extend({}, $location.search(), params),
                        pathParams: params
                    }), match.$$route = route);
                }), match || routes[null] && inherit(routes[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function interpolate(string, params) {
                var result = [];
                return angular.forEach((string || "").split(":"), function(segment, i) {
                    if (0 === i) result.push(segment); else {
                        var segmentMatch = segment.match(/(\w+)(.*)/), key = segmentMatch[1];
                        result.push(params[key]), result.push(segmentMatch[2] || ""), delete params[key];
                    }
                }), result.join("");
            }
            var forceReload = !1, $route = {
                routes: routes,
                reload: function() {
                    forceReload = !0, $rootScope.$evalAsync(updateRoute);
                }
            };
            return $rootScope.$on("$locationChangeSuccess", updateRoute), $route;
        } ];
    }
    function $RouteParamsProvider() {
        this.$get = function() {
            return {};
        };
    }
    function ngViewFactory($route, $anchorScroll, $animate) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(scope, $element, attr, ctrl, $transclude) {
                function cleanupLastView() {
                    previousElement && (previousElement.remove(), previousElement = null), currentScope && (currentScope.$destroy(), 
                    currentScope = null), currentElement && ($animate.leave(currentElement, function() {
                        previousElement = null;
                    }), previousElement = currentElement, currentElement = null);
                }
                function update() {
                    var locals = $route.current && $route.current.locals, template = locals && locals.$template;
                    if (angular.isDefined(template)) {
                        var newScope = scope.$new(), current = $route.current, clone = $transclude(newScope, function(clone) {
                            $animate.enter(clone, null, currentElement || $element, function() {
                                !angular.isDefined(autoScrollExp) || autoScrollExp && !scope.$eval(autoScrollExp) || $anchorScroll();
                            }), cleanupLastView();
                        });
                        currentElement = clone, currentScope = current.scope = newScope, currentScope.$emit("$viewContentLoaded"), 
                        currentScope.$eval(onloadExp);
                    } else cleanupLastView();
                }
                var currentScope, currentElement, previousElement, autoScrollExp = attr.autoscroll, onloadExp = attr.onload || "";
                scope.$on("$routeChangeSuccess", update), update();
            }
        };
    }
    function ngViewFillContentFactory($compile, $controller, $route) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(scope, $element) {
                var current = $route.current, locals = current.locals;
                $element.html(locals.$template);
                var link = $compile($element.contents());
                if (current.controller) {
                    locals.$scope = scope;
                    var controller = $controller(current.controller, locals);
                    current.controllerAs && (scope[current.controllerAs] = controller), $element.data("$ngControllerController", controller), 
                    $element.children().data("$ngControllerController", controller);
                }
                link(scope);
            }
        };
    }
    var ngRouteModule = angular.module("ngRoute", [ "ng" ]).provider("$route", $RouteProvider);
    ngRouteModule.provider("$routeParams", $RouteParamsProvider), ngRouteModule.directive("ngView", ngViewFactory), 
    ngRouteModule.directive("ngView", ngViewFillContentFactory), ngViewFactory.$inject = [ "$route", "$anchorScroll", "$animate" ], 
    ngViewFillContentFactory.$inject = [ "$compile", "$controller", "$route" ];
}(window, window.angular), define("angular-route", [ "angular" ], function() {}), 
function(window, angular, undefined) {
    "use strict";
    function isValidDottedPath(path) {
        return null != path && "" !== path && "hasOwnProperty" !== path && MEMBER_NAME_REGEX.test("." + path);
    }
    function lookupDottedPath(obj, path) {
        if (!isValidDottedPath(path)) throw $resourceMinErr("badmember", 'Dotted member path "@{0}" is invalid.', path);
        for (var keys = path.split("."), i = 0, ii = keys.length; ii > i && obj !== undefined; i++) {
            var key = keys[i];
            obj = null !== obj ? obj[key] : undefined;
        }
        return obj;
    }
    function shallowClearAndCopy(src, dst) {
        dst = dst || {}, angular.forEach(dst, function(value, key) {
            delete dst[key];
        });
        for (var key in src) !src.hasOwnProperty(key) || "$" === key.charAt(0) && "$" === key.charAt(1) || (dst[key] = src[key]);
        return dst;
    }
    var $resourceMinErr = angular.$$minErr("$resource"), MEMBER_NAME_REGEX = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    angular.module("ngResource", [ "ng" ]).factory("$resource", [ "$http", "$q", function($http, $q) {
        function encodeUriSegment(val) {
            return encodeUriQuery(val, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
        }
        function encodeUriQuery(val, pctEncodeSpaces) {
            return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, pctEncodeSpaces ? "%20" : "+");
        }
        function Route(template, defaults) {
            this.template = template, this.defaults = defaults || {}, this.urlParams = {};
        }
        function resourceFactory(url, paramDefaults, actions) {
            function extractParams(data, actionParams) {
                var ids = {};
                return actionParams = extend({}, paramDefaults, actionParams), forEach(actionParams, function(value, key) {
                    isFunction(value) && (value = value()), ids[key] = value && value.charAt && "@" == value.charAt(0) ? lookupDottedPath(data, value.substr(1)) : value;
                }), ids;
            }
            function defaultResponseInterceptor(response) {
                return response.resource;
            }
            function Resource(value) {
                shallowClearAndCopy(value || {}, this);
            }
            var route = new Route(url);
            return actions = extend({}, DEFAULT_ACTIONS, actions), forEach(actions, function(action, name) {
                var hasBody = /^(POST|PUT|PATCH)$/i.test(action.method);
                Resource[name] = function(a1, a2, a3, a4) {
                    var data, success, error, params = {};
                    switch (arguments.length) {
                      case 4:
                        error = a4, success = a3;

                      case 3:
                      case 2:
                        if (!isFunction(a2)) {
                            params = a1, data = a2, success = a3;
                            break;
                        }
                        if (isFunction(a1)) {
                            success = a1, error = a2;
                            break;
                        }
                        success = a2, error = a3;

                      case 1:
                        isFunction(a1) ? success = a1 : hasBody ? data = a1 : params = a1;
                        break;

                      case 0:
                        break;

                      default:
                        throw $resourceMinErr("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length);
                    }
                    var isInstanceCall = this instanceof Resource, value = isInstanceCall ? data : action.isArray ? [] : new Resource(data), httpConfig = {}, responseInterceptor = action.interceptor && action.interceptor.response || defaultResponseInterceptor, responseErrorInterceptor = action.interceptor && action.interceptor.responseError || undefined;
                    forEach(action, function(value, key) {
                        "params" != key && "isArray" != key && "interceptor" != key && (httpConfig[key] = copy(value));
                    }), hasBody && (httpConfig.data = data), route.setUrlParams(httpConfig, extend({}, extractParams(data, action.params || {}), params), action.url);
                    var promise = $http(httpConfig).then(function(response) {
                        var data = response.data, promise = value.$promise;
                        if (data) {
                            if (angular.isArray(data) !== !!action.isArray) throw $resourceMinErr("badcfg", "Error in resource configuration. Expected response to contain an {0} but got an {1}", action.isArray ? "array" : "object", angular.isArray(data) ? "array" : "object");
                            action.isArray ? (value.length = 0, forEach(data, function(item) {
                                value.push("object" == typeof item ? new Resource(item) : item);
                            })) : (shallowClearAndCopy(data, value), value.$promise = promise);
                        }
                        return value.$resolved = !0, response.resource = value, response;
                    }, function(response) {
                        return value.$resolved = !0, (error || noop)(response), $q.reject(response);
                    });
                    return promise = promise.then(function(response) {
                        var value = responseInterceptor(response);
                        return (success || noop)(value, response.headers), value;
                    }, responseErrorInterceptor), isInstanceCall ? promise : (value.$promise = promise, 
                    value.$resolved = !1, value);
                }, Resource.prototype["$" + name] = function(params, success, error) {
                    isFunction(params) && (error = success, success = params, params = {});
                    var result = Resource[name].call(this, params, this, success, error);
                    return result.$promise || result;
                };
            }), Resource.bind = function(additionalParamDefaults) {
                return resourceFactory(url, extend({}, paramDefaults, additionalParamDefaults), actions);
            }, Resource;
        }
        var DEFAULT_ACTIONS = {
            get: {
                method: "GET"
            },
            save: {
                method: "POST"
            },
            query: {
                method: "GET",
                isArray: !0
            },
            remove: {
                method: "DELETE"
            },
            "delete": {
                method: "DELETE"
            }
        }, noop = angular.noop, forEach = angular.forEach, extend = angular.extend, copy = angular.copy, isFunction = angular.isFunction;
        return Route.prototype = {
            setUrlParams: function(config, params, actionUrl) {
                var val, encodedVal, self = this, url = actionUrl || self.template, urlParams = self.urlParams = {};
                forEach(url.split(/\W/), function(param) {
                    if ("hasOwnProperty" === param) throw $resourceMinErr("badname", "hasOwnProperty is not a valid parameter name.");
                    !new RegExp("^\\d+$").test(param) && param && new RegExp("(^|[^\\\\]):" + param + "(\\W|$)").test(url) && (urlParams[param] = !0);
                }), url = url.replace(/\\:/g, ":"), params = params || {}, forEach(self.urlParams, function(_, urlParam) {
                    val = params.hasOwnProperty(urlParam) ? params[urlParam] : self.defaults[urlParam], 
                    angular.isDefined(val) && null !== val ? (encodedVal = encodeUriSegment(val), url = url.replace(new RegExp(":" + urlParam + "(\\W|$)", "g"), function(match, p1) {
                        return encodedVal + p1;
                    })) : url = url.replace(new RegExp("(/?):" + urlParam + "(\\W|$)", "g"), function(match, leadingSlashes, tail) {
                        return "/" == tail.charAt(0) ? tail : leadingSlashes + tail;
                    });
                }), url = url.replace(/\/+$/, "") || "/", url = url.replace(/\/\.(?=\w+($|\?))/, "."), 
                config.url = url.replace(/\/\\\./, "/."), forEach(params, function(value, key) {
                    self.urlParams[key] || (config.params = config.params || {}, config.params[key] = value);
                });
            }
        }, resourceFactory;
    } ]);
}(window, window.angular), define("angular-resource", [ "angular" ], function() {}), 
function() {
    var root = this, previousUnderscore = root._, breaker = {}, ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype, push = ArrayProto.push, slice = ArrayProto.slice, concat = ArrayProto.concat, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty, nativeForEach = ArrayProto.forEach, nativeMap = ArrayProto.map, nativeReduce = ArrayProto.reduce, nativeReduceRight = ArrayProto.reduceRight, nativeFilter = ArrayProto.filter, nativeEvery = ArrayProto.every, nativeSome = ArrayProto.some, nativeIndexOf = ArrayProto.indexOf, nativeLastIndexOf = ArrayProto.lastIndexOf, nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeBind = FuncProto.bind, _ = function(obj) {
        return obj instanceof _ ? obj : this instanceof _ ? void (this._wrapped = obj) : new _(obj);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = _), 
    exports._ = _) : root._ = _, _.VERSION = "1.6.0";
    var each = _.each = _.forEach = function(obj, iterator, context) {
        if (null == obj) return obj;
        if (nativeForEach && obj.forEach === nativeForEach) obj.forEach(iterator, context); else if (obj.length === +obj.length) {
            for (var i = 0, length = obj.length; length > i; i++) if (iterator.call(context, obj[i], i, obj) === breaker) return;
        } else for (var keys = _.keys(obj), i = 0, length = keys.length; length > i; i++) if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
        return obj;
    };
    _.map = _.collect = function(obj, iterator, context) {
        var results = [];
        return null == obj ? results : nativeMap && obj.map === nativeMap ? obj.map(iterator, context) : (each(obj, function(value, index, list) {
            results.push(iterator.call(context, value, index, list));
        }), results);
    };
    var reduceError = "Reduce of empty array with no initial value";
    _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (null == obj && (obj = []), nativeReduce && obj.reduce === nativeReduce) return context && (iterator = _.bind(iterator, context)), 
        initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
        if (each(obj, function(value, index, list) {
            initial ? memo = iterator.call(context, memo, value, index, list) : (memo = value, 
            initial = !0);
        }), !initial) throw new TypeError(reduceError);
        return memo;
    }, _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
        var initial = arguments.length > 2;
        if (null == obj && (obj = []), nativeReduceRight && obj.reduceRight === nativeReduceRight) return context && (iterator = _.bind(iterator, context)), 
        initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
        var length = obj.length;
        if (length !== +length) {
            var keys = _.keys(obj);
            length = keys.length;
        }
        if (each(obj, function(value, index, list) {
            index = keys ? keys[--length] : --length, initial ? memo = iterator.call(context, memo, obj[index], index, list) : (memo = obj[index], 
            initial = !0);
        }), !initial) throw new TypeError(reduceError);
        return memo;
    }, _.find = _.detect = function(obj, predicate, context) {
        var result;
        return any(obj, function(value, index, list) {
            return predicate.call(context, value, index, list) ? (result = value, !0) : void 0;
        }), result;
    }, _.filter = _.select = function(obj, predicate, context) {
        var results = [];
        return null == obj ? results : nativeFilter && obj.filter === nativeFilter ? obj.filter(predicate, context) : (each(obj, function(value, index, list) {
            predicate.call(context, value, index, list) && results.push(value);
        }), results);
    }, _.reject = function(obj, predicate, context) {
        return _.filter(obj, function(value, index, list) {
            return !predicate.call(context, value, index, list);
        }, context);
    }, _.every = _.all = function(obj, predicate, context) {
        predicate || (predicate = _.identity);
        var result = !0;
        return null == obj ? result : nativeEvery && obj.every === nativeEvery ? obj.every(predicate, context) : (each(obj, function(value, index, list) {
            return (result = result && predicate.call(context, value, index, list)) ? void 0 : breaker;
        }), !!result);
    };
    var any = _.some = _.any = function(obj, predicate, context) {
        predicate || (predicate = _.identity);
        var result = !1;
        return null == obj ? result : nativeSome && obj.some === nativeSome ? obj.some(predicate, context) : (each(obj, function(value, index, list) {
            return result || (result = predicate.call(context, value, index, list)) ? breaker : void 0;
        }), !!result);
    };
    _.contains = _.include = function(obj, target) {
        return null == obj ? !1 : nativeIndexOf && obj.indexOf === nativeIndexOf ? -1 != obj.indexOf(target) : any(obj, function(value) {
            return value === target;
        });
    }, _.invoke = function(obj, method) {
        var args = slice.call(arguments, 2), isFunc = _.isFunction(method);
        return _.map(obj, function(value) {
            return (isFunc ? method : value[method]).apply(value, args);
        });
    }, _.pluck = function(obj, key) {
        return _.map(obj, _.property(key));
    }, _.where = function(obj, attrs) {
        return _.filter(obj, _.matches(attrs));
    }, _.findWhere = function(obj, attrs) {
        return _.find(obj, _.matches(attrs));
    }, _.max = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) return Math.max.apply(Math, obj);
        var result = -1/0, lastComputed = -1/0;
        return each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            computed > lastComputed && (result = value, lastComputed = computed);
        }), result;
    }, _.min = function(obj, iterator, context) {
        if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) return Math.min.apply(Math, obj);
        var result = 1/0, lastComputed = 1/0;
        return each(obj, function(value, index, list) {
            var computed = iterator ? iterator.call(context, value, index, list) : value;
            lastComputed > computed && (result = value, lastComputed = computed);
        }), result;
    }, _.shuffle = function(obj) {
        var rand, index = 0, shuffled = [];
        return each(obj, function(value) {
            rand = _.random(index++), shuffled[index - 1] = shuffled[rand], shuffled[rand] = value;
        }), shuffled;
    }, _.sample = function(obj, n, guard) {
        return null == n || guard ? (obj.length !== +obj.length && (obj = _.values(obj)), 
        obj[_.random(obj.length - 1)]) : _.shuffle(obj).slice(0, Math.max(0, n));
    };
    var lookupIterator = function(value) {
        return null == value ? _.identity : _.isFunction(value) ? value : _.property(value);
    };
    _.sortBy = function(obj, iterator, context) {
        return iterator = lookupIterator(iterator), _.pluck(_.map(obj, function(value, index, list) {
            return {
                value: value,
                index: index,
                criteria: iterator.call(context, value, index, list)
            };
        }).sort(function(left, right) {
            var a = left.criteria, b = right.criteria;
            if (a !== b) {
                if (a > b || void 0 === a) return 1;
                if (b > a || void 0 === b) return -1;
            }
            return left.index - right.index;
        }), "value");
    };
    var group = function(behavior) {
        return function(obj, iterator, context) {
            var result = {};
            return iterator = lookupIterator(iterator), each(obj, function(value, index) {
                var key = iterator.call(context, value, index, obj);
                behavior(result, key, value);
            }), result;
        };
    };
    _.groupBy = group(function(result, key, value) {
        _.has(result, key) ? result[key].push(value) : result[key] = [ value ];
    }), _.indexBy = group(function(result, key, value) {
        result[key] = value;
    }), _.countBy = group(function(result, key) {
        _.has(result, key) ? result[key]++ : result[key] = 1;
    }), _.sortedIndex = function(array, obj, iterator, context) {
        iterator = lookupIterator(iterator);
        for (var value = iterator.call(context, obj), low = 0, high = array.length; high > low; ) {
            var mid = low + high >>> 1;
            iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid;
        }
        return low;
    }, _.toArray = function(obj) {
        return obj ? _.isArray(obj) ? slice.call(obj) : obj.length === +obj.length ? _.map(obj, _.identity) : _.values(obj) : [];
    }, _.size = function(obj) {
        return null == obj ? 0 : obj.length === +obj.length ? obj.length : _.keys(obj).length;
    }, _.first = _.head = _.take = function(array, n, guard) {
        return null == array ? void 0 : null == n || guard ? array[0] : 0 > n ? [] : slice.call(array, 0, n);
    }, _.initial = function(array, n, guard) {
        return slice.call(array, 0, array.length - (null == n || guard ? 1 : n));
    }, _.last = function(array, n, guard) {
        return null == array ? void 0 : null == n || guard ? array[array.length - 1] : slice.call(array, Math.max(array.length - n, 0));
    }, _.rest = _.tail = _.drop = function(array, n, guard) {
        return slice.call(array, null == n || guard ? 1 : n);
    }, _.compact = function(array) {
        return _.filter(array, _.identity);
    };
    var flatten = function(input, shallow, output) {
        return shallow && _.every(input, _.isArray) ? concat.apply(output, input) : (each(input, function(value) {
            _.isArray(value) || _.isArguments(value) ? shallow ? push.apply(output, value) : flatten(value, shallow, output) : output.push(value);
        }), output);
    };
    _.flatten = function(array, shallow) {
        return flatten(array, shallow, []);
    }, _.without = function(array) {
        return _.difference(array, slice.call(arguments, 1));
    }, _.partition = function(array, predicate) {
        var pass = [], fail = [];
        return each(array, function(elem) {
            (predicate(elem) ? pass : fail).push(elem);
        }), [ pass, fail ];
    }, _.uniq = _.unique = function(array, isSorted, iterator, context) {
        _.isFunction(isSorted) && (context = iterator, iterator = isSorted, isSorted = !1);
        var initial = iterator ? _.map(array, iterator, context) : array, results = [], seen = [];
        return each(initial, function(value, index) {
            (isSorted ? index && seen[seen.length - 1] === value : _.contains(seen, value)) || (seen.push(value), 
            results.push(array[index]));
        }), results;
    }, _.union = function() {
        return _.uniq(_.flatten(arguments, !0));
    }, _.intersection = function(array) {
        var rest = slice.call(arguments, 1);
        return _.filter(_.uniq(array), function(item) {
            return _.every(rest, function(other) {
                return _.contains(other, item);
            });
        });
    }, _.difference = function(array) {
        var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
        return _.filter(array, function(value) {
            return !_.contains(rest, value);
        });
    }, _.zip = function() {
        for (var length = _.max(_.pluck(arguments, "length").concat(0)), results = new Array(length), i = 0; length > i; i++) results[i] = _.pluck(arguments, "" + i);
        return results;
    }, _.object = function(list, values) {
        if (null == list) return {};
        for (var result = {}, i = 0, length = list.length; length > i; i++) values ? result[list[i]] = values[i] : result[list[i][0]] = list[i][1];
        return result;
    }, _.indexOf = function(array, item, isSorted) {
        if (null == array) return -1;
        var i = 0, length = array.length;
        if (isSorted) {
            if ("number" != typeof isSorted) return i = _.sortedIndex(array, item), array[i] === item ? i : -1;
            i = 0 > isSorted ? Math.max(0, length + isSorted) : isSorted;
        }
        if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);
        for (;length > i; i++) if (array[i] === item) return i;
        return -1;
    }, _.lastIndexOf = function(array, item, from) {
        if (null == array) return -1;
        var hasIndex = null != from;
        if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return hasIndex ? array.lastIndexOf(item, from) : array.lastIndexOf(item);
        for (var i = hasIndex ? from : array.length; i--; ) if (array[i] === item) return i;
        return -1;
    }, _.range = function(start, stop, step) {
        arguments.length <= 1 && (stop = start || 0, start = 0), step = arguments[2] || 1;
        for (var length = Math.max(Math.ceil((stop - start) / step), 0), idx = 0, range = new Array(length); length > idx; ) range[idx++] = start, 
        start += step;
        return range;
    };
    var ctor = function() {};
    _.bind = function(func, context) {
        var args, bound;
        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
        if (!_.isFunction(func)) throw new TypeError();
        return args = slice.call(arguments, 2), bound = function() {
            if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
            ctor.prototype = func.prototype;
            var self = new ctor();
            ctor.prototype = null;
            var result = func.apply(self, args.concat(slice.call(arguments)));
            return Object(result) === result ? result : self;
        };
    }, _.partial = function(func) {
        var boundArgs = slice.call(arguments, 1);
        return function() {
            for (var position = 0, args = boundArgs.slice(), i = 0, length = args.length; length > i; i++) args[i] === _ && (args[i] = arguments[position++]);
            for (;position < arguments.length; ) args.push(arguments[position++]);
            return func.apply(this, args);
        };
    }, _.bindAll = function(obj) {
        var funcs = slice.call(arguments, 1);
        if (0 === funcs.length) throw new Error("bindAll must be passed function names");
        return each(funcs, function(f) {
            obj[f] = _.bind(obj[f], obj);
        }), obj;
    }, _.memoize = function(func, hasher) {
        var memo = {};
        return hasher || (hasher = _.identity), function() {
            var key = hasher.apply(this, arguments);
            return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments);
        };
    }, _.delay = function(func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function() {
            return func.apply(null, args);
        }, wait);
    }, _.defer = function(func) {
        return _.delay.apply(_, [ func, 1 ].concat(slice.call(arguments, 1)));
    }, _.throttle = function(func, wait, options) {
        var context, args, result, timeout = null, previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === !1 ? 0 : _.now(), timeout = null, result = func.apply(context, args), 
            context = args = null;
        };
        return function() {
            var now = _.now();
            previous || options.leading !== !1 || (previous = now);
            var remaining = wait - (now - previous);
            return context = this, args = arguments, 0 >= remaining ? (clearTimeout(timeout), 
            timeout = null, previous = now, result = func.apply(context, args), context = args = null) : timeout || options.trailing === !1 || (timeout = setTimeout(later, remaining)), 
            result;
        };
    }, _.debounce = function(func, wait, immediate) {
        var timeout, args, context, timestamp, result, later = function() {
            var last = _.now() - timestamp;
            wait > last ? timeout = setTimeout(later, wait - last) : (timeout = null, immediate || (result = func.apply(context, args), 
            context = args = null));
        };
        return function() {
            context = this, args = arguments, timestamp = _.now();
            var callNow = immediate && !timeout;
            return timeout || (timeout = setTimeout(later, wait)), callNow && (result = func.apply(context, args), 
            context = args = null), result;
        };
    }, _.once = function(func) {
        var memo, ran = !1;
        return function() {
            return ran ? memo : (ran = !0, memo = func.apply(this, arguments), func = null, 
            memo);
        };
    }, _.wrap = function(func, wrapper) {
        return _.partial(wrapper, func);
    }, _.compose = function() {
        var funcs = arguments;
        return function() {
            for (var args = arguments, i = funcs.length - 1; i >= 0; i--) args = [ funcs[i].apply(this, args) ];
            return args[0];
        };
    }, _.after = function(times, func) {
        return function() {
            return --times < 1 ? func.apply(this, arguments) : void 0;
        };
    }, _.keys = function(obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) _.has(obj, key) && keys.push(key);
        return keys;
    }, _.values = function(obj) {
        for (var keys = _.keys(obj), length = keys.length, values = new Array(length), i = 0; length > i; i++) values[i] = obj[keys[i]];
        return values;
    }, _.pairs = function(obj) {
        for (var keys = _.keys(obj), length = keys.length, pairs = new Array(length), i = 0; length > i; i++) pairs[i] = [ keys[i], obj[keys[i]] ];
        return pairs;
    }, _.invert = function(obj) {
        for (var result = {}, keys = _.keys(obj), i = 0, length = keys.length; length > i; i++) result[obj[keys[i]]] = keys[i];
        return result;
    }, _.functions = _.methods = function(obj) {
        var names = [];
        for (var key in obj) _.isFunction(obj[key]) && names.push(key);
        return names.sort();
    }, _.extend = function(obj) {
        return each(slice.call(arguments, 1), function(source) {
            if (source) for (var prop in source) obj[prop] = source[prop];
        }), obj;
    }, _.pick = function(obj) {
        var copy = {}, keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        return each(keys, function(key) {
            key in obj && (copy[key] = obj[key]);
        }), copy;
    }, _.omit = function(obj) {
        var copy = {}, keys = concat.apply(ArrayProto, slice.call(arguments, 1));
        for (var key in obj) _.contains(keys, key) || (copy[key] = obj[key]);
        return copy;
    }, _.defaults = function(obj) {
        return each(slice.call(arguments, 1), function(source) {
            if (source) for (var prop in source) void 0 === obj[prop] && (obj[prop] = source[prop]);
        }), obj;
    }, _.clone = function(obj) {
        return _.isObject(obj) ? _.isArray(obj) ? obj.slice() : _.extend({}, obj) : obj;
    }, _.tap = function(obj, interceptor) {
        return interceptor(obj), obj;
    };
    var eq = function(a, b, aStack, bStack) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof _ && (a = a._wrapped), b instanceof _ && (b = b._wrapped);
        var className = toString.call(a);
        if (className != toString.call(b)) return !1;
        switch (className) {
          case "[object String]":
            return a == String(b);

          case "[object Number]":
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a == +b;

          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var length = aStack.length; length--; ) if (aStack[length] == a) return bStack[length] == b;
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) return !1;
        aStack.push(a), bStack.push(b);
        var size = 0, result = !0;
        if ("[object Array]" == className) {
            if (size = a.length, result = size == b.length) for (;size-- && (result = eq(a[size], b[size], aStack, bStack)); ) ;
        } else {
            for (var key in a) if (_.has(a, key) && (size++, !(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack)))) break;
            if (result) {
                for (key in b) if (_.has(b, key) && !size--) break;
                result = !size;
            }
        }
        return aStack.pop(), bStack.pop(), result;
    };
    _.isEqual = function(a, b) {
        return eq(a, b, [], []);
    }, _.isEmpty = function(obj) {
        if (null == obj) return !0;
        if (_.isArray(obj) || _.isString(obj)) return 0 === obj.length;
        for (var key in obj) if (_.has(obj, key)) return !1;
        return !0;
    }, _.isElement = function(obj) {
        return !(!obj || 1 !== obj.nodeType);
    }, _.isArray = nativeIsArray || function(obj) {
        return "[object Array]" == toString.call(obj);
    }, _.isObject = function(obj) {
        return obj === Object(obj);
    }, each([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(name) {
        _["is" + name] = function(obj) {
            return toString.call(obj) == "[object " + name + "]";
        };
    }), _.isArguments(arguments) || (_.isArguments = function(obj) {
        return !(!obj || !_.has(obj, "callee"));
    }), "function" != typeof /./ && (_.isFunction = function(obj) {
        return "function" == typeof obj;
    }), _.isFinite = function(obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
    }, _.isNaN = function(obj) {
        return _.isNumber(obj) && obj != +obj;
    }, _.isBoolean = function(obj) {
        return obj === !0 || obj === !1 || "[object Boolean]" == toString.call(obj);
    }, _.isNull = function(obj) {
        return null === obj;
    }, _.isUndefined = function(obj) {
        return void 0 === obj;
    }, _.has = function(obj, key) {
        return hasOwnProperty.call(obj, key);
    }, _.noConflict = function() {
        return root._ = previousUnderscore, this;
    }, _.identity = function(value) {
        return value;
    }, _.constant = function(value) {
        return function() {
            return value;
        };
    }, _.property = function(key) {
        return function(obj) {
            return obj[key];
        };
    }, _.matches = function(attrs) {
        return function(obj) {
            if (obj === attrs) return !0;
            for (var key in attrs) if (attrs[key] !== obj[key]) return !1;
            return !0;
        };
    }, _.times = function(n, iterator, context) {
        for (var accum = Array(Math.max(0, n)), i = 0; n > i; i++) accum[i] = iterator.call(context, i);
        return accum;
    }, _.random = function(min, max) {
        return null == max && (max = min, min = 0), min + Math.floor(Math.random() * (max - min + 1));
    }, _.now = Date.now || function() {
        return new Date().getTime();
    };
    var entityMap = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    entityMap.unescape = _.invert(entityMap.escape);
    var entityRegexes = {
        escape: new RegExp("[" + _.keys(entityMap.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + _.keys(entityMap.unescape).join("|") + ")", "g")
    };
    _.each([ "escape", "unescape" ], function(method) {
        _[method] = function(string) {
            return null == string ? "" : ("" + string).replace(entityRegexes[method], function(match) {
                return entityMap[method][match];
            });
        };
    }), _.result = function(object, property) {
        if (null == object) return void 0;
        var value = object[property];
        return _.isFunction(value) ? value.call(object) : value;
    }, _.mixin = function(obj) {
        each(_.functions(obj), function(name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function() {
                var args = [ this._wrapped ];
                return push.apply(args, arguments), result.call(this, func.apply(_, args));
            };
        });
    };
    var idCounter = 0;
    _.uniqueId = function(prefix) {
        var id = ++idCounter + "";
        return prefix ? prefix + id : id;
    }, _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var noMatch = /(.)^/, escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    _.template = function(text, data, settings) {
        var render;
        settings = _.defaults({}, settings, _.templateSettings);
        var matcher = new RegExp([ (settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source ].join("|") + "|$", "g"), index = 0, source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            return source += text.slice(index, offset).replace(escaper, function(match) {
                return "\\" + escapes[match];
            }), escape && (source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'"), 
            interpolate && (source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'"), 
            evaluate && (source += "';\n" + evaluate + "\n__p+='"), index = offset + match.length, 
            match;
        }), source += "';\n", settings.variable || (source = "with(obj||{}){\n" + source + "}\n"), 
        source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
        try {
            render = new Function(settings.variable || "obj", "_", source);
        } catch (e) {
            throw e.source = source, e;
        }
        if (data) return render(data, _);
        var template = function(data) {
            return render.call(this, data, _);
        };
        return template.source = "function(" + (settings.variable || "obj") + "){\n" + source + "}", 
        template;
    }, _.chain = function(obj) {
        return _(obj).chain();
    };
    var result = function(obj) {
        return this._chain ? _(obj).chain() : obj;
    };
    _.mixin(_), each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            var obj = this._wrapped;
            return method.apply(obj, arguments), "shift" != name && "splice" != name || 0 !== obj.length || delete obj[0], 
            result.call(this, obj);
        };
    }), each([ "concat", "join", "slice" ], function(name) {
        var method = ArrayProto[name];
        _.prototype[name] = function() {
            return result.call(this, method.apply(this._wrapped, arguments));
        };
    }), _.extend(_.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    }), "function" == typeof define && define.amd && define("underscore", [], function() {
        return _;
    });
}.call(this), _.mixin({
    getQueryStringByName: function(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(window.location.search);
        return null == results ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    },
    include: function(str, needle) {
        return "" === needle ? !0 : null == str ? !1 : -1 !== String(str).indexOf(needle);
    },
    createEmptyModules: function(moduleNames) {
        if (0 === moduleNames.length) throw new Error("None of the modules could be loaded.");
        if (null == angular) throw new Error("Cannot catch module, AngularJS is null.");
        var ngModule, nextModule;
        try {
            ngModule = angular.module(moduleNames[0]);
        } catch (err) {
            ngModule = angular.module(moduleNames[0], []);
        }
        return nextModule = moduleNames.slice(1), null == nextModule || 0 === nextModule.length ? ngModule : this.createEmptyModules(nextModule);
    },
    copyParams: function(params) {
        return params || (params = {}), angular.copy(params);
    }
}), define("underscore-mixins", [ "underscore" ], function() {}), define("config-angular", [ "angular", "config/configuration", "angular-route", "angular-resource", "underscore", "underscore-mixins" ], function(angular, configuration) {
    _.createEmptyModules([ "piv.templates" ]);
    var standardAngularModules = [ "ngRoute", "ngResource", "piv.templates", "piv" ], config = angular.module("config", []);
    return configuration.standardAngularModules = standardAngularModules, config.constant("config", configuration), 
    configuration;
}), define("app/controllers/AppController", [], function() {
    var AppController = function() {
        console.log("jgggggggggggggggggggggggggggggggggggggggg");
    };
    return AppController.$inject = [ "$scope" ], AppController;
}), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), 
function(window, angular, undefined) {
    "use strict";
    function inherit(parent, extra) {
        return extend(new (extend(function() {}, {
            prototype: parent
        }))(), extra);
    }
    function merge(dst) {
        return forEach(arguments, function(obj) {
            obj !== dst && forEach(obj, function(value, key) {
                dst.hasOwnProperty(key) || (dst[key] = value);
            });
        }), dst;
    }
    function ancestors(first, second) {
        var path = [];
        for (var n in first.path) {
            if (first.path[n] !== second.path[n]) break;
            path.push(first.path[n]);
        }
        return path;
    }
    function objectKeys(object) {
        if (Object.keys) return Object.keys(object);
        var result = [];
        return angular.forEach(object, function(val, key) {
            result.push(key);
        }), result;
    }
    function indexOf(array, value) {
        if (Array.prototype.indexOf) return array.indexOf(value, Number(arguments[2]) || 0);
        var len = array.length >>> 0, from = Number(arguments[2]) || 0;
        for (from = 0 > from ? Math.ceil(from) : Math.floor(from), 0 > from && (from += len); len > from; from++) if (from in array && array[from] === value) return from;
        return -1;
    }
    function inheritParams(currentParams, newParams, $current, $to) {
        var parentParams, parents = ancestors($current, $to), inherited = {}, inheritList = [];
        for (var i in parents) if (parents[i].params && (parentParams = objectKeys(parents[i].params), 
        parentParams.length)) for (var j in parentParams) indexOf(inheritList, parentParams[j]) >= 0 || (inheritList.push(parentParams[j]), 
        inherited[parentParams[j]] = currentParams[parentParams[j]]);
        return extend({}, inherited, newParams);
    }
    function equalForKeys(a, b, keys) {
        if (!keys) {
            keys = [];
            for (var n in a) keys.push(n);
        }
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            if (a[k] != b[k]) return !1;
        }
        return !0;
    }
    function filterByKeys(keys, values) {
        var filtered = {};
        return forEach(keys, function(name) {
            filtered[name] = values[name];
        }), filtered;
    }
    function omit(obj) {
        var copy = {}, keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
        for (var key in obj) -1 == keys.indexOf(key) && (copy[key] = obj[key]);
        return copy;
    }
    function filter(collection, callback) {
        var result = isArray(collection) ? [] : {};
        return forEach(collection, function(val, i) {
            callback(val, i) && (result[i] = val);
        }), result;
    }
    function map(collection, callback) {
        var result = isArray(collection) ? [] : {};
        return forEach(collection, function(val, i) {
            result[i] = callback(val, i);
        }), result;
    }
    function $Resolve($q, $injector) {
        var VISIT_IN_PROGRESS = 1, VISIT_DONE = 2, NOTHING = {}, NO_DEPENDENCIES = [], NO_LOCALS = NOTHING, NO_PARENT = extend($q.when(NOTHING), {
            $$promises: NOTHING,
            $$values: NOTHING
        });
        this.study = function(invocables) {
            function visit(value, key) {
                if (visited[key] !== VISIT_DONE) {
                    if (cycle.push(key), visited[key] === VISIT_IN_PROGRESS) throw cycle.splice(0, indexOf(cycle, key)), 
                    new Error("Cyclic dependency: " + cycle.join(" -> "));
                    if (visited[key] = VISIT_IN_PROGRESS, isString(value)) plan.push(key, [ function() {
                        return $injector.get(value);
                    } ], NO_DEPENDENCIES); else {
                        var params = $injector.annotate(value);
                        forEach(params, function(param) {
                            param !== key && invocables.hasOwnProperty(param) && visit(invocables[param], param);
                        }), plan.push(key, value, params);
                    }
                    cycle.pop(), visited[key] = VISIT_DONE;
                }
            }
            function isResolve(value) {
                return isObject(value) && value.then && value.$$promises;
            }
            if (!isObject(invocables)) throw new Error("'invocables' must be an object");
            var invocableKeys = objectKeys(invocables || {}), plan = [], cycle = [], visited = {};
            return forEach(invocables, visit), invocables = cycle = visited = null, function(locals, parent, self) {
                function done() {
                    --wait || (merged || merge(values, parent.$$values), result.$$values = values, result.$$promises = result.$$promises || !0, 
                    delete result.$$inheritedValues, resolution.resolve(values));
                }
                function fail(reason) {
                    result.$$failure = reason, resolution.reject(reason);
                }
                function invoke(key, invocable, params) {
                    function onfailure(reason) {
                        invocation.reject(reason), fail(reason);
                    }
                    function proceed() {
                        if (!isDefined(result.$$failure)) try {
                            invocation.resolve($injector.invoke(invocable, self, values)), invocation.promise.then(function(result) {
                                values[key] = result, done();
                            }, onfailure);
                        } catch (e) {
                            onfailure(e);
                        }
                    }
                    var invocation = $q.defer(), waitParams = 0;
                    forEach(params, function(dep) {
                        promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep) && (waitParams++, promises[dep].then(function(result) {
                            values[dep] = result, --waitParams || proceed();
                        }, onfailure));
                    }), waitParams || proceed(), promises[key] = invocation.promise;
                }
                if (isResolve(locals) && self === undefined && (self = parent, parent = locals, 
                locals = null), locals) {
                    if (!isObject(locals)) throw new Error("'locals' must be an object");
                } else locals = NO_LOCALS;
                if (parent) {
                    if (!isResolve(parent)) throw new Error("'parent' must be a promise returned by $resolve.resolve()");
                } else parent = NO_PARENT;
                var resolution = $q.defer(), result = resolution.promise, promises = result.$$promises = {}, values = extend({}, locals), wait = 1 + plan.length / 3, merged = !1;
                if (isDefined(parent.$$failure)) return fail(parent.$$failure), result;
                parent.$$inheritedValues && merge(values, omit(parent.$$inheritedValues, invocableKeys)), 
                extend(promises, parent.$$promises), parent.$$values ? (merged = merge(values, omit(parent.$$values, invocableKeys)), 
                result.$$inheritedValues = omit(parent.$$values, invocableKeys), done()) : (parent.$$inheritedValues && (result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys)), 
                parent.then(done, fail));
                for (var i = 0, ii = plan.length; ii > i; i += 3) locals.hasOwnProperty(plan[i]) ? done() : invoke(plan[i], plan[i + 1], plan[i + 2]);
                return result;
            };
        }, this.resolve = function(invocables, locals, parent, self) {
            return this.study(invocables)(locals, parent, self);
        };
    }
    function $TemplateFactory($http, $templateCache, $injector) {
        this.fromConfig = function(config, params, locals) {
            return isDefined(config.template) ? this.fromString(config.template, params) : isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) : isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) : null;
        }, this.fromString = function(template, params) {
            return isFunction(template) ? template(params) : template;
        }, this.fromUrl = function(url, params) {
            return isFunction(url) && (url = url(params)), null == url ? null : $http.get(url, {
                cache: $templateCache,
                headers: {
                    Accept: "text/html"
                }
            }).then(function(response) {
                return response.data;
            });
        }, this.fromProvider = function(provider, params, locals) {
            return $injector.invoke(provider, null, locals || {
                params: params
            });
        };
    }
    function UrlMatcher(pattern, config, parentMatcher) {
        function addParameter(id, type, config, location) {
            if (parentParams[id]) return parentParams[id];
            if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
            if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
            return params[id] = new $$UMFP.Param(id, type, config, location), params[id];
        }
        function quoteRegExp(string, pattern, squash) {
            var surroundPattern = [ "", "" ], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
            if (!pattern) return result;
            switch (squash) {
              case !1:
                surroundPattern = [ "(", ")" ];
                break;

              case !0:
                surroundPattern = [ "?(", ")?" ];
                break;

              default:
                surroundPattern = [ "(" + squash + "|", ")?" ];
            }
            return result + surroundPattern[0] + pattern + surroundPattern[1];
        }
        function matchDetails(m, isSearch) {
            var id, regexp, segment, type, cfg;
            return id = m[2] || m[3], cfg = config.params[id], segment = pattern.substring(last, m.index), 
            regexp = isSearch ? m[4] : m[4] || ("*" == m[1] ? ".*" : null), type = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"), {
                pattern: new RegExp(regexp)
            }), {
                id: id,
                regexp: regexp,
                segment: segment,
                type: type,
                cfg: cfg
            };
        }
        config = extend({
            params: {}
        }, isObject(config) ? config : {});
        var m, placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, compiled = "^", last = 0, segments = this.segments = [], parentParams = parentMatcher ? parentMatcher.params : {}, params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet();
        this.source = pattern;
        for (var p, param, segment; (m = placeholder.exec(pattern)) && (p = matchDetails(m, !1), 
        !(p.segment.indexOf("?") >= 0)); ) param = addParameter(p.id, p.type, p.cfg, "path"), 
        compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash), segments.push(p.segment), 
        last = placeholder.lastIndex;
        segment = pattern.substring(last);
        var i = segment.indexOf("?");
        if (i >= 0) {
            var search = this.sourceSearch = segment.substring(i);
            if (segment = segment.substring(0, i), this.sourcePath = pattern.substring(0, last + i), 
            search.length > 0) for (last = 0; m = searchPlaceholder.exec(search); ) p = matchDetails(m, !0), 
            param = addParameter(p.id, p.type, p.cfg, "search"), last = placeholder.lastIndex;
        } else this.sourcePath = pattern, this.sourceSearch = "";
        compiled += quoteRegExp(segment) + (config.strict === !1 ? "/?" : "") + "$", segments.push(segment), 
        this.regexp = new RegExp(compiled, config.caseInsensitive ? "i" : undefined), this.prefix = segments[0];
    }
    function Type(config) {
        extend(this, config);
    }
    function $UrlMatcherFactory() {
        function valToString(val) {
            return null != val ? val.toString().replace("/", "%2F") : val;
        }
        function valFromString(val) {
            return null != val ? val.toString().replace("%2F", "/") : val;
        }
        function regexpMatches(val) {
            return this.pattern.test(val);
        }
        function getDefaultConfig() {
            return {
                strict: isStrictMode,
                caseInsensitive: isCaseInsensitive
            };
        }
        function isInjectable(value) {
            return isFunction(value) || isArray(value) && isFunction(value[value.length - 1]);
        }
        function flushTypeQueue() {
            for (;typeQueue.length; ) {
                var type = typeQueue.shift();
                if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                angular.extend($types[type.name], injector.invoke(type.def));
            }
        }
        function ParamSet(params) {
            extend(this, params || {});
        }
        $$UMFP = this;
        var injector, isCaseInsensitive = !1, isStrictMode = !0, defaultSquashPolicy = !1, $types = {}, enqueue = !0, typeQueue = [], defaultTypes = {
            string: {
                encode: valToString,
                decode: valFromString,
                is: regexpMatches,
                pattern: /[^/]*/
            },
            "int": {
                encode: valToString,
                decode: function(val) {
                    return parseInt(val, 10);
                },
                is: function(val) {
                    return isDefined(val) && this.decode(val.toString()) === val;
                },
                pattern: /\d+/
            },
            bool: {
                encode: function(val) {
                    return val ? 1 : 0;
                },
                decode: function(val) {
                    return 0 !== parseInt(val, 10);
                },
                is: function(val) {
                    return val === !0 || val === !1;
                },
                pattern: /0|1/
            },
            date: {
                encode: function(val) {
                    return [ val.getFullYear(), ("0" + (val.getMonth() + 1)).slice(-2), ("0" + val.getDate()).slice(-2) ].join("-");
                },
                decode: function(val) {
                    return new Date(val);
                },
                is: function(val) {
                    return val instanceof Date && !isNaN(val.valueOf());
                },
                equals: function(a, b) {
                    return a.toISOString() === b.toISOString();
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/
            }
        };
        $UrlMatcherFactory.$$getDefaultValue = function(config) {
            if (!isInjectable(config.value)) return config.value;
            if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
            return injector.invoke(config.value);
        }, this.caseInsensitive = function(value) {
            return isDefined(value) && (isCaseInsensitive = value), isCaseInsensitive;
        }, this.strictMode = function(value) {
            return isDefined(value) && (isStrictMode = value), isStrictMode;
        }, this.defaultSquashPolicy = function(value) {
            if (!isDefined(value)) return defaultSquashPolicy;
            if (value !== !0 && value !== !1 && !isString(value)) throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
            return defaultSquashPolicy = value, value;
        }, this.compile = function(pattern, config) {
            return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
        }, this.isMatcher = function(o) {
            if (!isObject(o)) return !1;
            var result = !0;
            return forEach(UrlMatcher.prototype, function(val, name) {
                isFunction(val) && (result = result && isDefined(o[name]) && isFunction(o[name]));
            }), result;
        }, this.type = function(name, definition, definitionFn) {
            if (!isDefined(definition)) return $types[name];
            if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");
            return $types[name] = new Type(extend({
                name: name
            }, definition)), definitionFn && (typeQueue.push({
                name: name,
                def: definitionFn
            }), enqueue || flushTypeQueue()), this;
        }, forEach(defaultTypes, function(type, name) {
            $types[name] = new Type(extend({
                name: name
            }, type));
        }), $types = inherit($types, {}), this.$get = [ "$injector", function($injector) {
            return injector = $injector, enqueue = !1, flushTypeQueue(), forEach(defaultTypes, function(type, name) {
                $types[name] || ($types[name] = new Type(type));
            }), this;
        } ], this.Param = function(id, type, config, location) {
            function getDefaultValueConfig(config) {
                var keys = isObject(config) ? objectKeys(config) : [], isShorthand = -1 === indexOf(keys, "value") && -1 === indexOf(keys, "type") && -1 === indexOf(keys, "squash") && -1 === indexOf(keys, "array"), configValue = isShorthand ? config : config.value, result = {
                    fn: isInjectable(configValue) ? configValue : function() {
                        return result.value;
                    },
                    value: configValue
                };
                return result;
            }
            function getType(config, urlType) {
                if (config.type && urlType) throw new Error("Param '" + id + "' has two type configurations.");
                return urlType ? urlType : config.type ? config.type instanceof Type ? config.type : new Type(config.type) : $types.string;
            }
            function getArrayMode() {
                var arrayDefaults = {
                    array: "search" === location ? "auto" : !1
                }, arrayParamNomenclature = id.match(/\[\]$/) ? {
                    array: !0
                } : {};
                return extend(arrayDefaults, arrayParamNomenclature, config).array;
            }
            function getSquashPolicy(config, isOptional) {
                var squash = config.squash;
                if (!isOptional || squash === !1) return !1;
                if (!isDefined(squash) || null == squash) return defaultSquashPolicy;
                if (squash === !0 || isString(squash)) return squash;
                throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
            }
            function getReplace(config, arrayMode, isOptional, squash) {
                var replace, configuredKeys, defaultPolicy = [ {
                    from: "",
                    to: isOptional || arrayMode ? undefined : ""
                }, {
                    from: null,
                    to: isOptional || arrayMode ? undefined : ""
                } ];
                return replace = isArray(config.replace) ? config.replace : [], isString(squash) && replace.push({
                    from: squash,
                    to: undefined
                }), configuredKeys = map(replace, function(item) {
                    return item.from;
                }), filter(defaultPolicy, function(item) {
                    return -1 === indexOf(configuredKeys, item.from);
                }).concat(replace);
            }
            function $$getDefaultValue() {
                if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
                return injector.invoke(defaultValueConfig.fn);
            }
            function $value(value) {
                function hasReplaceVal(val) {
                    return function(obj) {
                        return obj.from === val;
                    };
                }
                function $replace(value) {
                    var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) {
                        return obj.to;
                    });
                    return replacement.length ? replacement[0] : value;
                }
                return value = $replace(value), isDefined(value) ? self.type.decode(value) : $$getDefaultValue();
            }
            function toString() {
                return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}";
            }
            var self = this, defaultValueConfig = getDefaultValueConfig(config);
            config = config || {}, type = getType(config, type);
            var arrayMode = getArrayMode();
            type = arrayMode ? type.$asArray(arrayMode, "search" === location) : type, "string" !== type.name || arrayMode || "path" !== location || defaultValueConfig.value !== undefined || (defaultValueConfig.value = "");
            var isOptional = defaultValueConfig.value !== undefined, squash = getSquashPolicy(config, isOptional), replace = getReplace(config, arrayMode, isOptional, squash);
            extend(this, {
                id: id,
                type: type,
                array: arrayMode,
                config: config,
                squash: squash,
                replace: replace,
                isOptional: isOptional,
                dynamic: undefined,
                value: $value,
                toString: toString
            });
        }, ParamSet.prototype = {
            $$new: function() {
                return inherit(this, extend(new ParamSet(), {
                    $$parent: this
                }));
            },
            $$keys: function() {
                for (var keys = [], chain = [], parent = this, ignore = objectKeys(ParamSet.prototype); parent; ) chain.push(parent), 
                parent = parent.$$parent;
                return chain.reverse(), forEach(chain, function(paramset) {
                    forEach(objectKeys(paramset), function(key) {
                        -1 === indexOf(keys, key) && -1 === indexOf(ignore, key) && keys.push(key);
                    });
                }), keys;
            },
            $$values: function(paramValues) {
                var values = {}, self = this;
                return forEach(self.$$keys(), function(key) {
                    values[key] = self[key].value(paramValues && paramValues[key]);
                }), values;
            },
            $$equals: function(paramValues1, paramValues2) {
                var equal = !0, self = this;
                return forEach(self.$$keys(), function(key) {
                    var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
                    self[key].type.equals(left, right) || (equal = !1);
                }), equal;
            },
            $$validates: function(paramValues) {
                var isOptional, val, param, result = !0, self = this;
                return forEach(this.$$keys(), function(key) {
                    param = self[key], val = paramValues[key], isOptional = !val && param.isOptional, 
                    result = result && (isOptional || param.type.is(val));
                }), result;
            },
            $$parent: undefined
        }, this.ParamSet = ParamSet;
    }
    function $UrlRouterProvider($locationProvider, $urlMatcherFactory) {
        function regExpPrefix(re) {
            var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
            return null != prefix ? prefix[1].replace(/\\(.)/g, "$1") : "";
        }
        function interpolate(pattern, match) {
            return pattern.replace(/\$(\$|\d{1,2})/, function(m, what) {
                return match["$" === what ? 0 : Number(what)];
            });
        }
        function handleIfMatch($injector, handler, match) {
            if (!match) return !1;
            var result = $injector.invoke(handler, handler, {
                $match: match
            });
            return isDefined(result) ? result : !0;
        }
        function $get($location, $rootScope, $injector, $browser) {
            function appendBasePath(url, isHtml5, absolute) {
                return "/" === baseHref ? url : isHtml5 ? baseHref.slice(0, -1) + url : absolute ? baseHref.slice(1) + url : url;
            }
            function update(evt) {
                function check(rule) {
                    var handled = rule($injector, $location);
                    return handled ? (isString(handled) && $location.replace().url(handled), !0) : !1;
                }
                if (!evt || !evt.defaultPrevented) {
                    var i, n = rules.length;
                    for (i = 0; n > i; i++) if (check(rules[i])) return;
                    otherwise && check(otherwise);
                }
            }
            function listen() {
                return listener = listener || $rootScope.$on("$locationChangeSuccess", update);
            }
            var baseHref = $browser.baseHref(), location = $location.url();
            return interceptDeferred || listen(), {
                sync: function() {
                    update();
                },
                listen: function() {
                    return listen();
                },
                update: function(read) {
                    return read ? void (location = $location.url()) : void ($location.url() !== location && ($location.url(location), 
                    $location.replace()));
                },
                push: function(urlMatcher, params, options) {
                    $location.url(urlMatcher.format(params || {})), options && options.replace && $location.replace();
                },
                href: function(urlMatcher, params, options) {
                    if (!urlMatcher.validates(params)) return null;
                    var isHtml5 = $locationProvider.html5Mode();
                    angular.isObject(isHtml5) && (isHtml5 = isHtml5.enabled);
                    var url = urlMatcher.format(params);
                    if (options = options || {}, isHtml5 || null === url || (url = "#" + $locationProvider.hashPrefix() + url), 
                    url = appendBasePath(url, isHtml5, options.absolute), !options.absolute || !url) return url;
                    var slash = !isHtml5 && url ? "/" : "", port = $location.port();
                    return port = 80 === port || 443 === port ? "" : ":" + port, [ $location.protocol(), "://", $location.host(), port, slash, url ].join("");
                }
            };
        }
        var listener, rules = [], otherwise = null, interceptDeferred = !1;
        this.rule = function(rule) {
            if (!isFunction(rule)) throw new Error("'rule' must be a function");
            return rules.push(rule), this;
        }, this.otherwise = function(rule) {
            if (isString(rule)) {
                var redirect = rule;
                rule = function() {
                    return redirect;
                };
            } else if (!isFunction(rule)) throw new Error("'rule' must be a function");
            return otherwise = rule, this;
        }, this.when = function(what, handler) {
            var redirect, handlerIsString = isString(handler);
            if (isString(what) && (what = $urlMatcherFactory.compile(what)), !handlerIsString && !isFunction(handler) && !isArray(handler)) throw new Error("invalid 'handler' in when()");
            var strategies = {
                matcher: function(what, handler) {
                    return handlerIsString && (redirect = $urlMatcherFactory.compile(handler), handler = [ "$match", function($match) {
                        return redirect.format($match);
                    } ]), extend(function($injector, $location) {
                        return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
                    }, {
                        prefix: isString(what.prefix) ? what.prefix : ""
                    });
                },
                regex: function(what, handler) {
                    if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");
                    return handlerIsString && (redirect = handler, handler = [ "$match", function($match) {
                        return interpolate(redirect, $match);
                    } ]), extend(function($injector, $location) {
                        return handleIfMatch($injector, handler, what.exec($location.path()));
                    }, {
                        prefix: regExpPrefix(what)
                    });
                }
            }, check = {
                matcher: $urlMatcherFactory.isMatcher(what),
                regex: what instanceof RegExp
            };
            for (var n in check) if (check[n]) return this.rule(strategies[n](what, handler));
            throw new Error("invalid 'what' in when()");
        }, this.deferIntercept = function(defer) {
            defer === undefined && (defer = !0), interceptDeferred = defer;
        }, this.$get = $get, $get.$inject = [ "$location", "$rootScope", "$injector", "$browser" ];
    }
    function $StateProvider($urlRouterProvider, $urlMatcherFactory) {
        function isRelative(stateName) {
            return 0 === stateName.indexOf(".") || 0 === stateName.indexOf("^");
        }
        function findState(stateOrName, base) {
            if (!stateOrName) return undefined;
            var isStr = isString(stateOrName), name = isStr ? stateOrName : stateOrName.name, path = isRelative(name);
            if (path) {
                if (!base) throw new Error("No reference point given for path '" + name + "'");
                base = findState(base);
                for (var rel = name.split("."), i = 0, pathLength = rel.length, current = base; pathLength > i; i++) if ("" !== rel[i] || 0 !== i) {
                    if ("^" !== rel[i]) break;
                    if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
                    current = current.parent;
                } else current = base;
                rel = rel.slice(i).join("."), name = current.name + (current.name && rel ? "." : "") + rel;
            }
            var state = states[name];
            return !state || !isStr && (isStr || state !== stateOrName && state.self !== stateOrName) ? undefined : state;
        }
        function queueState(parentName, state) {
            queue[parentName] || (queue[parentName] = []), queue[parentName].push(state);
        }
        function flushQueuedChildren(parentName) {
            for (var queued = queue[parentName] || []; queued.length; ) registerState(queued.shift());
        }
        function registerState(state) {
            state = inherit(state, {
                self: state,
                resolve: state.resolve || {},
                toString: function() {
                    return this.name;
                }
            });
            var name = state.name;
            if (!isString(name) || name.indexOf("@") >= 0) throw new Error("State must have a valid name");
            if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");
            var parentName = -1 !== name.indexOf(".") ? name.substring(0, name.lastIndexOf(".")) : isString(state.parent) ? state.parent : isObject(state.parent) && isString(state.parent.name) ? state.parent.name : "";
            if (parentName && !states[parentName]) return queueState(parentName, state.self);
            for (var key in stateBuilder) isFunction(stateBuilder[key]) && (state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]));
            return states[name] = state, !state[abstractKey] && state.url && $urlRouterProvider.when(state.url, [ "$match", "$stateParams", function($match, $stateParams) {
                $state.$current.navigable == state && equalForKeys($match, $stateParams) || $state.transitionTo(state, $match, {
                    location: !1
                });
            } ]), flushQueuedChildren(name), state;
        }
        function isGlob(text) {
            return text.indexOf("*") > -1;
        }
        function doesStateMatchGlob(glob) {
            var globSegments = glob.split("."), segments = $state.$current.name.split(".");
            if ("**" === globSegments[0] && (segments = segments.slice(indexOf(segments, globSegments[1])), 
            segments.unshift("**")), "**" === globSegments[globSegments.length - 1] && (segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE), 
            segments.push("**")), globSegments.length != segments.length) return !1;
            for (var i = 0, l = globSegments.length; l > i; i++) "*" === globSegments[i] && (segments[i] = "*");
            return segments.join("") === globSegments.join("");
        }
        function decorator(name, func) {
            return isString(name) && !isDefined(func) ? stateBuilder[name] : isFunction(func) && isString(name) ? (stateBuilder[name] && !stateBuilder.$delegates[name] && (stateBuilder.$delegates[name] = stateBuilder[name]), 
            stateBuilder[name] = func, this) : this;
        }
        function state(name, definition) {
            return isObject(name) ? definition = name : definition.name = name, registerState(definition), 
            this;
        }
        function $get($rootScope, $q, $view, $injector, $resolve, $stateParams, $urlRouter) {
            function handleRedirect(redirect, state, params, options) {
                var evt = $rootScope.$broadcast("$stateNotFound", redirect, state, params);
                if (evt.defaultPrevented) return $urlRouter.update(), TransitionAborted;
                if (!evt.retry) return null;
                if (options.$retry) return $urlRouter.update(), TransitionFailed;
                var retryTransition = $state.transition = $q.when(evt.retry);
                return retryTransition.then(function() {
                    return retryTransition !== $state.transition ? TransitionSuperseded : (redirect.options.$retry = !0, 
                    $state.transitionTo(redirect.to, redirect.toParams, redirect.options));
                }, function() {
                    return TransitionAborted;
                }), $urlRouter.update(), retryTransition;
            }
            function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
                var $stateParams = paramsAreFiltered ? params : filterByKeys(state.params.$$keys(), params), locals = {
                    $stateParams: $stateParams
                };
                dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
                var promises = [ dst.resolve.then(function(globals) {
                    dst.globals = globals;
                }) ];
                return inherited && promises.push(inherited), forEach(state.views, function(view, name) {
                    var injectables = view.resolve && view.resolve !== state.resolve ? view.resolve : {};
                    injectables.$template = [ function() {
                        return $view.load(name, {
                            view: view,
                            locals: locals,
                            params: $stateParams,
                            notify: options.notify
                        }) || "";
                    } ], promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function(result) {
                        if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
                            var injectLocals = angular.extend({}, injectables, locals);
                            result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
                        } else result.$$controller = view.controller;
                        result.$$state = state, result.$$controllerAs = view.controllerAs, dst[name] = result;
                    }));
                }), $q.all(promises).then(function() {
                    return dst;
                });
            }
            var TransitionSuperseded = $q.reject(new Error("transition superseded")), TransitionPrevented = $q.reject(new Error("transition prevented")), TransitionAborted = $q.reject(new Error("transition aborted")), TransitionFailed = $q.reject(new Error("transition failed"));
            return root.locals = {
                resolve: null,
                globals: {
                    $stateParams: {}
                }
            }, $state = {
                params: {},
                current: root.self,
                $current: root,
                transition: null
            }, $state.reload = function() {
                return $state.transitionTo($state.current, $stateParams, {
                    reload: !0,
                    inherit: !1,
                    notify: !0
                });
            }, $state.go = function(to, params, options) {
                return $state.transitionTo(to, params, extend({
                    inherit: !0,
                    relative: $state.$current
                }, options));
            }, $state.transitionTo = function(to, toParams, options) {
                toParams = toParams || {}, options = extend({
                    location: !0,
                    inherit: !1,
                    relative: null,
                    notify: !0,
                    reload: !1,
                    $retry: !1
                }, options || {});
                var evt, from = $state.$current, fromParams = $state.params, fromPath = from.path, toState = findState(to, options.relative);
                if (!isDefined(toState)) {
                    var redirect = {
                        to: to,
                        toParams: toParams,
                        options: options
                    }, redirectResult = handleRedirect(redirect, from.self, fromParams, options);
                    if (redirectResult) return redirectResult;
                    if (to = redirect.to, toParams = redirect.toParams, options = redirect.options, 
                    toState = findState(to, options.relative), !isDefined(toState)) {
                        if (!options.relative) throw new Error("No such state '" + to + "'");
                        throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
                    }
                }
                if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
                if (options.inherit && (toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState)), 
                !toState.params.$$validates(toParams)) return TransitionFailed;
                toParams = toState.params.$$values(toParams), to = toState;
                var toPath = to.path, keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];
                if (!options.reload) for (;state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams); ) locals = toLocals[keep] = state.locals, 
                keep++, state = toPath[keep];
                if (shouldTriggerReload(to, from, locals, options)) return to.self.reloadOnSearch !== !1 && $urlRouter.update(), 
                $state.transition = null, $q.when($state.current);
                if (toParams = filterByKeys(to.params.$$keys(), toParams || {}), options.notify && $rootScope.$broadcast("$stateChangeStart", to.self, toParams, from.self, fromParams).defaultPrevented) return $urlRouter.update(), 
                TransitionPrevented;
                for (var resolved = $q.when(locals), l = keep; l < toPath.length; l++, state = toPath[l]) locals = toLocals[l] = inherit(locals), 
                resolved = resolveState(state, toParams, state === to, resolved, locals, options);
                var transition = $state.transition = resolved.then(function() {
                    var l, entering, exiting;
                    if ($state.transition !== transition) return TransitionSuperseded;
                    for (l = fromPath.length - 1; l >= keep; l--) exiting = fromPath[l], exiting.self.onExit && $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals), 
                    exiting.locals = null;
                    for (l = keep; l < toPath.length; l++) entering = toPath[l], entering.locals = toLocals[l], 
                    entering.self.onEnter && $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
                    return $state.transition !== transition ? TransitionSuperseded : ($state.$current = to, 
                    $state.current = to.self, $state.params = toParams, copy($state.params, $stateParams), 
                    $state.transition = null, options.location && to.navigable && $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
                        replace: "replace" === options.location
                    }), options.notify && $rootScope.$broadcast("$stateChangeSuccess", to.self, toParams, from.self, fromParams), 
                    $urlRouter.update(!0), $state.current);
                }, function(error) {
                    return $state.transition !== transition ? TransitionSuperseded : ($state.transition = null, 
                    evt = $rootScope.$broadcast("$stateChangeError", to.self, toParams, from.self, fromParams, error), 
                    evt.defaultPrevented || $urlRouter.update(), $q.reject(error));
                });
                return transition;
            }, $state.is = function(stateOrName, params, options) {
                options = extend({
                    relative: $state.$current
                }, options || {});
                var state = findState(stateOrName, options.relative);
                return isDefined(state) ? $state.$current !== state ? !1 : isDefined(params) && null !== params ? angular.equals($stateParams, params) : !0 : undefined;
            }, $state.includes = function(stateOrName, params, options) {
                if (options = extend({
                    relative: $state.$current
                }, options || {}), isString(stateOrName) && isGlob(stateOrName)) {
                    if (!doesStateMatchGlob(stateOrName)) return !1;
                    stateOrName = $state.$current.name;
                }
                var state = findState(stateOrName, options.relative);
                return isDefined(state) ? isDefined($state.$current.includes[state.name]) ? equalForKeys(params, $stateParams) : !1 : undefined;
            }, $state.href = function(stateOrName, params, options) {
                options = extend({
                    lossy: !0,
                    inherit: !0,
                    absolute: !1,
                    relative: $state.$current
                }, options || {});
                var state = findState(stateOrName, options.relative);
                if (!isDefined(state)) return null;
                options.inherit && (params = inheritParams($stateParams, params || {}, $state.$current, state));
                var nav = state && options.lossy ? state.navigable : state;
                return nav && nav.url !== undefined && null !== nav.url ? $urlRouter.href(nav.url, filterByKeys(state.params.$$keys(), params || {}), {
                    absolute: options.absolute
                }) : null;
            }, $state.get = function(stateOrName, context) {
                if (0 === arguments.length) return map(objectKeys(states), function(name) {
                    return states[name].self;
                });
                var state = findState(stateOrName, context || $state.$current);
                return state && state.self ? state.self : null;
            }, $state;
        }
        function shouldTriggerReload(to, from, locals, options) {
            return to !== from || (locals !== from.locals || options.reload) && to.self.reloadOnSearch !== !1 ? void 0 : !0;
        }
        var root, $state, states = {}, queue = {}, abstractKey = "abstract", stateBuilder = {
            parent: function(state) {
                if (isDefined(state.parent) && state.parent) return findState(state.parent);
                var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
                return compositeName ? findState(compositeName[1]) : root;
            },
            data: function(state) {
                return state.parent && state.parent.data && (state.data = state.self.data = extend({}, state.parent.data, state.data)), 
                state.data;
            },
            url: function(state) {
                var url = state.url, config = {
                    params: state.params || {}
                };
                if (isString(url)) return "^" == url.charAt(0) ? $urlMatcherFactory.compile(url.substring(1), config) : (state.parent.navigable || root).url.concat(url, config);
                if (!url || $urlMatcherFactory.isMatcher(url)) return url;
                throw new Error("Invalid url '" + url + "' in state '" + state + "'");
            },
            navigable: function(state) {
                return state.url ? state : state.parent ? state.parent.navigable : null;
            },
            ownParams: function(state) {
                var params = state.url && state.url.params || new $$UMFP.ParamSet();
                return forEach(state.params || {}, function(config, id) {
                    params[id] || (params[id] = new $$UMFP.Param(id, null, config));
                }), params;
            },
            params: function(state) {
                return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
            },
            views: function(state) {
                var views = {};
                return forEach(isDefined(state.views) ? state.views : {
                    "": state
                }, function(view, name) {
                    name.indexOf("@") < 0 && (name += "@" + state.parent.name), views[name] = view;
                }), views;
            },
            path: function(state) {
                return state.parent ? state.parent.path.concat(state) : [];
            },
            includes: function(state) {
                var includes = state.parent ? extend({}, state.parent.includes) : {};
                return includes[state.name] = !0, includes;
            },
            $delegates: {}
        };
        root = registerState({
            name: "",
            url: "^",
            views: null,
            "abstract": !0
        }), root.navigable = null, this.decorator = decorator, this.state = state, this.$get = $get, 
        $get.$inject = [ "$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory" ];
    }
    function $ViewProvider() {
        function $get($rootScope, $templateFactory) {
            return {
                load: function(name, options) {
                    var result, defaults = {
                        template: null,
                        controller: null,
                        view: null,
                        locals: null,
                        notify: !0,
                        async: !0,
                        params: {}
                    };
                    return options = extend(defaults, options), options.view && (result = $templateFactory.fromConfig(options.view, options.params, options.locals)), 
                    result && options.notify && $rootScope.$broadcast("$viewContentLoading", options), 
                    result;
                }
            };
        }
        this.$get = $get, $get.$inject = [ "$rootScope", "$templateFactory" ];
    }
    function $ViewScrollProvider() {
        var useAnchorScroll = !1;
        this.useAnchorScroll = function() {
            useAnchorScroll = !0;
        }, this.$get = [ "$anchorScroll", "$timeout", function($anchorScroll, $timeout) {
            return useAnchorScroll ? $anchorScroll : function($element) {
                $timeout(function() {
                    $element[0].scrollIntoView();
                }, 0, !1);
            };
        } ];
    }
    function $ViewDirective($state, $injector, $uiViewScroll, $interpolate) {
        function getService() {
            return $injector.has ? function(service) {
                return $injector.has(service) ? $injector.get(service) : null;
            } : function(service) {
                try {
                    return $injector.get(service);
                } catch (e) {
                    return null;
                }
            };
        }
        function getRenderer(attrs, scope) {
            var statics = function() {
                return {
                    enter: function(element, target, cb) {
                        target.after(element), cb();
                    },
                    leave: function(element, cb) {
                        element.remove(), cb();
                    }
                };
            };
            if ($animate) return {
                enter: function(element, target, cb) {
                    var promise = $animate.enter(element, null, target, cb);
                    promise && promise.then && promise.then(cb);
                },
                leave: function(element, cb) {
                    var promise = $animate.leave(element, cb);
                    promise && promise.then && promise.then(cb);
                }
            };
            if ($animator) {
                var animate = $animator && $animator(scope, attrs);
                return {
                    enter: function(element, target, cb) {
                        animate.enter(element, null, target), cb();
                    },
                    leave: function(element, cb) {
                        animate.leave(element), cb();
                    }
                };
            }
            return statics();
        }
        var service = getService(), $animator = service("$animator"), $animate = service("$animate"), directive = {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            compile: function(tElement, tAttrs, $transclude) {
                return function(scope, $element, attrs) {
                    function cleanupLastView() {
                        previousEl && (previousEl.remove(), previousEl = null), currentScope && (currentScope.$destroy(), 
                        currentScope = null), currentEl && (renderer.leave(currentEl, function() {
                            previousEl = null;
                        }), previousEl = currentEl, currentEl = null);
                    }
                    function updateView(firstTime) {
                        var newScope, name = getUiViewName(scope, attrs, $element, $interpolate), previousLocals = name && $state.$current && $state.$current.locals[name];
                        if (firstTime || previousLocals !== latestLocals) {
                            newScope = scope.$new(), latestLocals = $state.$current.locals[name];
                            var clone = $transclude(newScope, function(clone) {
                                renderer.enter(clone, $element, function() {
                                    currentScope && currentScope.$emit("$viewContentAnimationEnded"), (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) && $uiViewScroll(clone);
                                }), cleanupLastView();
                            });
                            currentEl = clone, currentScope = newScope, currentScope.$emit("$viewContentLoaded"), 
                            currentScope.$eval(onloadExp);
                        }
                    }
                    var previousEl, currentEl, currentScope, latestLocals, onloadExp = attrs.onload || "", autoScrollExp = attrs.autoscroll, renderer = getRenderer(attrs, scope);
                    scope.$on("$stateChangeSuccess", function() {
                        updateView(!1);
                    }), scope.$on("$viewContentLoading", function() {
                        updateView(!1);
                    }), updateView(!0);
                };
            }
        };
        return directive;
    }
    function $ViewDirectiveFill($compile, $controller, $state, $interpolate) {
        return {
            restrict: "ECA",
            priority: -400,
            compile: function(tElement) {
                var initial = tElement.html();
                return function(scope, $element, attrs) {
                    var current = $state.$current, name = getUiViewName(scope, attrs, $element, $interpolate), locals = current && current.locals[name];
                    if (locals) {
                        $element.data("$uiView", {
                            name: name,
                            state: locals.$$state
                        }), $element.html(locals.$template ? locals.$template : initial);
                        var link = $compile($element.contents());
                        if (locals.$$controller) {
                            locals.$scope = scope;
                            var controller = $controller(locals.$$controller, locals);
                            locals.$$controllerAs && (scope[locals.$$controllerAs] = controller), $element.data("$ngControllerController", controller), 
                            $element.children().data("$ngControllerController", controller);
                        }
                        link(scope);
                    }
                };
            }
        };
    }
    function getUiViewName(scope, attrs, element, $interpolate) {
        var name = $interpolate(attrs.uiView || attrs.name || "")(scope), inherited = element.inheritedData("$uiView");
        return name.indexOf("@") >= 0 ? name : name + "@" + (inherited ? inherited.state.name : "");
    }
    function parseStateRef(ref, current) {
        var parsed, preparsed = ref.match(/^\s*({[^}]*})\s*$/);
        if (preparsed && (ref = current + "(" + preparsed[1] + ")"), parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), 
        !parsed || 4 !== parsed.length) throw new Error("Invalid state ref '" + ref + "'");
        return {
            state: parsed[1],
            paramExpr: parsed[3] || null
        };
    }
    function stateContext(el) {
        var stateData = el.parent().inheritedData("$uiView");
        return stateData && stateData.state && stateData.state.name ? stateData.state : void 0;
    }
    function $StateRefDirective($state, $timeout) {
        var allowedOptions = [ "location", "inherit", "reload" ];
        return {
            restrict: "A",
            require: [ "?^uiSrefActive", "?^uiSrefActiveEq" ],
            link: function(scope, element, attrs, uiSrefActive) {
                var ref = parseStateRef(attrs.uiSref, $state.current.name), params = null, base = stateContext(element) || $state.$current, newHref = null, isAnchor = "A" === element.prop("tagName"), isForm = "FORM" === element[0].nodeName, attr = isForm ? "action" : "href", nav = !0, options = {
                    relative: base,
                    inherit: !0
                }, optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};
                angular.forEach(allowedOptions, function(option) {
                    option in optionsOverride && (options[option] = optionsOverride[option]);
                });
                var update = function(newVal) {
                    if (newVal && (params = angular.copy(newVal)), nav) {
                        newHref = $state.href(ref.state, params, options);
                        var activeDirective = uiSrefActive[1] || uiSrefActive[0];
                        return activeDirective && activeDirective.$$setStateInfo(ref.state, params), null === newHref ? (nav = !1, 
                        !1) : void attrs.$set(attr, newHref);
                    }
                };
                ref.paramExpr && (scope.$watch(ref.paramExpr, function(newVal) {
                    newVal !== params && update(newVal);
                }, !0), params = angular.copy(scope.$eval(ref.paramExpr))), update(), isForm || element.bind("click", function(e) {
                    var button = e.which || e.button;
                    if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr("target"))) {
                        var transition = $timeout(function() {
                            $state.go(ref.state, params, options);
                        });
                        e.preventDefault();
                        var ignorePreventDefaultCount = isAnchor && !newHref ? 1 : 0;
                        e.preventDefault = function() {
                            ignorePreventDefaultCount-- <= 0 && $timeout.cancel(transition);
                        };
                    }
                });
            }
        };
    }
    function $StateRefActiveDirective($state, $stateParams, $interpolate) {
        return {
            restrict: "A",
            controller: [ "$scope", "$element", "$attrs", function($scope, $element, $attrs) {
                function update() {
                    isMatch() ? $element.addClass(activeClass) : $element.removeClass(activeClass);
                }
                function isMatch() {
                    return "undefined" != typeof $attrs.uiSrefActiveEq ? $state.$current.self === state && matchesParams() : state && $state.includes(state.name) && matchesParams();
                }
                function matchesParams() {
                    return !params || equalForKeys(params, $stateParams);
                }
                var state, params, activeClass;
                activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || "", !1)($scope), 
                this.$$setStateInfo = function(newState, newParams) {
                    state = $state.get(newState, stateContext($element)), params = newParams, update();
                }, $scope.$on("$stateChangeSuccess", update);
            } ]
        };
    }
    function $IsStateFilter($state) {
        var isFilter = function(state) {
            return $state.is(state);
        };
        return isFilter.$stateful = !0, isFilter;
    }
    function $IncludedByStateFilter($state) {
        var includesFilter = function(state) {
            return $state.includes(state);
        };
        return includesFilter.$stateful = !0, includesFilter;
    }
    var isDefined = angular.isDefined, isFunction = angular.isFunction, isString = angular.isString, isObject = angular.isObject, isArray = angular.isArray, forEach = angular.forEach, extend = angular.extend, copy = angular.copy;
    angular.module("ui.router.util", [ "ng" ]), angular.module("ui.router.router", [ "ui.router.util" ]), 
    angular.module("ui.router.state", [ "ui.router.router", "ui.router.util" ]), angular.module("ui.router", [ "ui.router.state" ]), 
    angular.module("ui.router.compat", [ "ui.router" ]), $Resolve.$inject = [ "$q", "$injector" ], 
    angular.module("ui.router.util").service("$resolve", $Resolve), $TemplateFactory.$inject = [ "$http", "$templateCache", "$injector" ], 
    angular.module("ui.router.util").service("$templateFactory", $TemplateFactory);
    var $$UMFP;
    UrlMatcher.prototype.concat = function(pattern, config) {
        var defaultConfig = {
            caseInsensitive: $$UMFP.caseInsensitive(),
            strict: $$UMFP.strictMode(),
            squash: $$UMFP.defaultSquashPolicy()
        };
        return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
    }, UrlMatcher.prototype.toString = function() {
        return this.source;
    }, UrlMatcher.prototype.exec = function(path, searchParams) {
        function decodePathArray(string) {
            function reverseString(str) {
                return str.split("").reverse().join("");
            }
            function unquoteDashes(str) {
                return str.replace(/\\-/, "-");
            }
            var split = reverseString(string).split(/-(?!\\)/), allReversed = map(split, reverseString);
            return map(allReversed, unquoteDashes).reverse();
        }
        var m = this.regexp.exec(path);
        if (!m) return null;
        searchParams = searchParams || {};
        var i, j, paramName, paramNames = this.parameters(), nTotal = paramNames.length, nPath = this.segments.length - 1, values = {};
        if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
        for (i = 0; nPath > i; i++) {
            paramName = paramNames[i];
            var param = this.params[paramName], paramVal = m[i + 1];
            for (j = 0; j < param.replace; j++) param.replace[j].from === paramVal && (paramVal = param.replace[j].to);
            paramVal && param.array === !0 && (paramVal = decodePathArray(paramVal)), values[paramName] = param.value(paramVal);
        }
        for (;nTotal > i; i++) paramName = paramNames[i], values[paramName] = this.params[paramName].value(searchParams[paramName]);
        return values;
    }, UrlMatcher.prototype.parameters = function(param) {
        return isDefined(param) ? this.params[param] || null : this.params.$$keys();
    }, UrlMatcher.prototype.validates = function(params) {
        return this.params.$$validates(params);
    }, UrlMatcher.prototype.format = function(values) {
        function encodeDashes(str) {
            return encodeURIComponent(str).replace(/-/g, function(c) {
                return "%5C%" + c.charCodeAt(0).toString(16).toUpperCase();
            });
        }
        values = values || {};
        var segments = this.segments, params = this.parameters(), paramset = this.params;
        if (!this.validates(values)) return null;
        var i, search = !1, nPath = segments.length - 1, nTotal = params.length, result = segments[0];
        for (i = 0; nTotal > i; i++) {
            var isPathParam = nPath > i, name = params[i], param = paramset[name], value = param.value(values[name]), isDefaultValue = param.isOptional && param.type.equals(param.value(), value), squash = isDefaultValue ? param.squash : !1, encoded = param.type.encode(value);
            if (isPathParam) {
                var nextSegment = segments[i + 1];
                if (squash === !1) null != encoded && (result += isArray(encoded) ? map(encoded, encodeDashes).join("-") : encodeURIComponent(encoded)), 
                result += nextSegment; else if (squash === !0) {
                    var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                    result += nextSegment.match(capture)[1];
                } else isString(squash) && (result += squash + nextSegment);
            } else {
                if (null == encoded || isDefaultValue && squash !== !1) continue;
                isArray(encoded) || (encoded = [ encoded ]), encoded = map(encoded, encodeURIComponent).join("&" + name + "="), 
                result += (search ? "&" : "?") + (name + "=" + encoded), search = !0;
            }
        }
        return result;
    }, Type.prototype.is = function() {
        return !0;
    }, Type.prototype.encode = function(val) {
        return val;
    }, Type.prototype.decode = function(val) {
        return val;
    }, Type.prototype.equals = function(a, b) {
        return a == b;
    }, Type.prototype.$subPattern = function() {
        var sub = this.pattern.toString();
        return sub.substr(1, sub.length - 2);
    }, Type.prototype.pattern = /.*/, Type.prototype.toString = function() {
        return "{Type:" + this.name + "}";
    }, Type.prototype.$asArray = function(mode, isSearch) {
        function ArrayType(type, mode) {
            function bindTo(thisObj, callback) {
                return function() {
                    return callback.apply(thisObj, arguments);
                };
            }
            function arrayHandler(callback, reducefn) {
                return function(val) {
                    isArray(val) || (val = [ val ]);
                    var result = map(val, callback);
                    return reducefn ? result.reduce(reducefn, !0) : result && 1 == result.length && "auto" === mode ? result[0] : result;
                };
            }
            function alltruthy(val, memo) {
                return val && memo;
            }
            this.encode = arrayHandler(bindTo(this, type.encode)), this.decode = arrayHandler(bindTo(this, type.decode)), 
            this.equals = arrayHandler(bindTo(this, type.equals), alltruthy), this.is = arrayHandler(bindTo(this, type.is), alltruthy), 
            this.pattern = type.pattern, this.$arrayMode = mode;
        }
        if (!mode) return this;
        if ("auto" === mode && !isSearch) throw new Error("'auto' array mode is for query parameters only");
        return new ArrayType(this, mode);
    }, angular.module("ui.router.util").provider("$urlMatcherFactory", $UrlMatcherFactory), 
    angular.module("ui.router.util").run([ "$urlMatcherFactory", function() {} ]), $UrlRouterProvider.$inject = [ "$locationProvider", "$urlMatcherFactoryProvider" ], 
    angular.module("ui.router.router").provider("$urlRouter", $UrlRouterProvider), $StateProvider.$inject = [ "$urlRouterProvider", "$urlMatcherFactoryProvider" ], 
    angular.module("ui.router.state").value("$stateParams", {}).provider("$state", $StateProvider), 
    $ViewProvider.$inject = [], angular.module("ui.router.state").provider("$view", $ViewProvider), 
    angular.module("ui.router.state").provider("$uiViewScroll", $ViewScrollProvider), 
    $ViewDirective.$inject = [ "$state", "$injector", "$uiViewScroll", "$interpolate" ], 
    $ViewDirectiveFill.$inject = [ "$compile", "$controller", "$state", "$interpolate" ], 
    angular.module("ui.router.state").directive("uiView", $ViewDirective), angular.module("ui.router.state").directive("uiView", $ViewDirectiveFill), 
    $StateRefDirective.$inject = [ "$state", "$timeout" ], $StateRefActiveDirective.$inject = [ "$state", "$stateParams", "$interpolate" ], 
    angular.module("ui.router.state").directive("uiSref", $StateRefDirective).directive("uiSrefActive", $StateRefActiveDirective).directive("uiSrefActiveEq", $StateRefActiveDirective), 
    $IsStateFilter.$inject = [ "$state" ], $IncludedByStateFilter.$inject = [ "$state" ], 
    angular.module("ui.router.state").filter("isState", $IsStateFilter).filter("includedByState", $IncludedByStateFilter);
}(window, window.angular), define("angular-ui-router", [ "angular" ], function() {}), 
define("app/module", [ "angular", "config-angular", "angular-ui-router" ], function(angular, configAngular) {
    "use strict";
    var app = angular.module("app", configAngular.standardAngularModules);
    return app.run([ "$rootScope", "$state", "$stateParams", function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state, $rootScope.$stateParams = $stateParams;
    } ]), app;
}), define("module-app", [ "app/controllers/AppController", "app/module" ], function(AppController, ModuleApp) {
    return ModuleApp.controller("AppController", AppController), ModuleApp;
}), define("piv/module", [ "angular", "angular-ui-router" ], function(angular) {
    "use strict";
    var ModulePiv = angular.module("piv", [ "ui.router" ]);
    return ModulePiv.config([ "$stateProvider", function($stateProvider) {
        $stateProvider.state("index", {
            controller: "PivController",
            url: "/piv",
            title: "PIV",
            templateUrl: "static/js/modules/piv/partials/index.html"
        });
    } ]), ModulePiv;
}), define("piv/services/VectorService", [], function() {
    "use strict";
    var VectorService = function($resource) {
        this.getVectors = function() {
            return $resource("api/vectors/").get();
        };
    };
    return VectorService.$inject = [ "$resource" ], VectorService;
}), define("piv/controllers/PivController", [ "underscore" ], function() {
    "use strict";
    var PivController = function($scope, $http) {
        $scope.formUrl = "upload", $scope.formData = {}, $scope.processForm = function() {
            console.log($scope.formData), $http({
                method: "POST",
                url: $scope.formUrl,
                data: $.param($scope.formData),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).success(function(data) {
                console.log(data), data.success ? $scope.message = data.message : ($scope.errorName = data.errors.name, 
                $scope.errorSuperhero = data.errors.superheroAlias);
            });
        };
    };
    return PivController.$inject = [ "$scope", "$http" ], PivController;
}), define("piv/controllers/GraphController", [ "underscore" ], function() {
    "use strict";
    var GraphController = function($scope, VectorService) {
        this.$scope = $scope, this.vectorService = VectorService, this.initialize();
    }, prototype = GraphController.prototype;
    return prototype.initialize = function() {
        var self = this, vectorsPromise = this.vectorService.getVectors();
        vectorsPromise.$promise.then(function(result) {
            self.vectors = result.vectors, self.getLinks();
        });
    }, prototype.getLinks = function() {
        console.log(this.vectors);
    }, GraphController.$inject = [ "$scope", "VectorService" ], GraphController;
}), define("piv/directives/FileReadDirective", [], function() {
    "use strict";
    var filereadDirective = function() {
        return {
            scope: {
                fileread: "="
            },
            link: function(scope, element) {
                element.bind("change", function(changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function(loadEvent) {
                        scope.$apply(function() {
                            scope.fileread = loadEvent.target.result;
                        });
                    }, reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        };
    };
    return filereadDirective;
}), define("module-piv", [ "piv/module", "piv/services/VectorService", "piv/controllers/PivController", "piv/controllers/GraphController", "piv/directives/FileReadDirective" ], function(ModulePiv, VectorService, PivController, GraphController, FileReadDirective) {
    ModulePiv.service("VectorService", VectorService).controller("PivController", PivController).controller("GraphController", GraphController).directive("fileread", FileReadDirective);
}), define("config-modules", [ "module-app", "module-piv" ], function() {
    return !0;
}), define("main", [ "angular", "config-angular", "config-modules" ], function(angular) {
    angular.element(document).ready(function() {
        angular.bootstrap(document, [ "app" ]);
    });
});