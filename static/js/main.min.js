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

/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/**
 * angular-strap
 * @version v2.1.0 - 2014-09-05
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors

//     Underscore may be freely distributed under the MIT license.

function Graph(data) {
    this.links = data;
}

if (function(global, factory) {
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
}(this)), function(window, angular) {
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
"undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

+function($) {
    "use strict";
    function transitionEnd() {
        var el = document.createElement("bootstrap"), transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var name in transEndEventNames) if (void 0 !== el.style[name]) return {
            end: transEndEventNames[name]
        };
        return !1;
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = !1, $el = this;
        $(this).one($.support.transition.end, function() {
            called = !0;
        });
        var callback = function() {
            called || $($el).trigger($.support.transition.end);
        };
        return setTimeout(callback, duration), this;
    }, $(function() {
        $.support.transition = transitionEnd();
    });
}(jQuery), +function($) {
    "use strict";
    var dismiss = '[data-dismiss="alert"]', Alert = function(el) {
        $(el).on("click", dismiss, this.close);
    };
    Alert.prototype.close = function(e) {
        function removeElement() {
            $parent.trigger("closed.bs.alert").remove();
        }
        var $this = $(this), selector = $this.attr("data-target");
        selector || (selector = $this.attr("href"), selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ""));
        var $parent = $(selector);
        e && e.preventDefault(), $parent.length || ($parent = $this.hasClass("alert") ? $this : $this.parent()), 
        $parent.trigger(e = $.Event("close.bs.alert")), e.isDefaultPrevented() || ($parent.removeClass("in"), 
        $.support.transition && $parent.hasClass("fade") ? $parent.one($.support.transition.end, removeElement).emulateTransitionEnd(150) : removeElement());
    };
    var old = $.fn.alert;
    $.fn.alert = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.alert");
            data || $this.data("bs.alert", data = new Alert(this)), "string" == typeof option && data[option].call($this);
        });
    }, $.fn.alert.Constructor = Alert, $.fn.alert.noConflict = function() {
        return $.fn.alert = old, this;
    }, $(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close);
}(jQuery), +function($) {
    "use strict";
    var Button = function(element, options) {
        this.$element = $(element), this.options = $.extend({}, Button.DEFAULTS, options), 
        this.isLoading = !1;
    };
    Button.DEFAULTS = {
        loadingText: "loading..."
    }, Button.prototype.setState = function(state) {
        var d = "disabled", $el = this.$element, val = $el.is("input") ? "val" : "html", data = $el.data();
        state += "Text", data.resetText || $el.data("resetText", $el[val]()), $el[val](data[state] || this.options[state]), 
        setTimeout($.proxy(function() {
            "loadingText" == state ? (this.isLoading = !0, $el.addClass(d).attr(d, d)) : this.isLoading && (this.isLoading = !1, 
            $el.removeClass(d).removeAttr(d));
        }, this), 0);
    }, Button.prototype.toggle = function() {
        var changed = !0, $parent = this.$element.closest('[data-toggle="buttons"]');
        if ($parent.length) {
            var $input = this.$element.find("input");
            "radio" == $input.prop("type") && ($input.prop("checked") && this.$element.hasClass("active") ? changed = !1 : $parent.find(".active").removeClass("active")), 
            changed && $input.prop("checked", !this.$element.hasClass("active")).trigger("change");
        }
        changed && this.$element.toggleClass("active");
    };
    var old = $.fn.button;
    $.fn.button = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.button"), options = "object" == typeof option && option;
            data || $this.data("bs.button", data = new Button(this, options)), "toggle" == option ? data.toggle() : option && data.setState(option);
        });
    }, $.fn.button.Constructor = Button, $.fn.button.noConflict = function() {
        return $.fn.button = old, this;
    }, $(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(e) {
        var $btn = $(e.target);
        $btn.hasClass("btn") || ($btn = $btn.closest(".btn")), $btn.button("toggle"), e.preventDefault();
    });
}(jQuery), +function($) {
    "use strict";
    var Carousel = function(element, options) {
        this.$element = $(element), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = options, this.paused = this.sliding = this.interval = this.$active = this.$items = null, 
        "hover" == this.options.pause && this.$element.on("mouseenter", $.proxy(this.pause, this)).on("mouseleave", $.proxy(this.cycle, this));
    };
    Carousel.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, Carousel.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), 
        this;
    }, Carousel.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(".item"), 
        this.$items.index(this.$active);
    }, Carousel.prototype.to = function(pos) {
        var that = this, activeIndex = this.getActiveIndex();
        return pos > this.$items.length - 1 || 0 > pos ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            that.to(pos);
        }) : activeIndex == pos ? this.pause().cycle() : this.slide(pos > activeIndex ? "next" : "prev", $(this.$items[pos]));
    }, Carousel.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, Carousel.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
    }, Carousel.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
    }, Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find(".item.active"), $next = next || $active[type](), isCycling = this.interval, direction = "next" == type ? "left" : "right", fallback = "next" == type ? "first" : "last", that = this;
        if (!$next.length) {
            if (!this.options.wrap) return;
            $next = this.$element.find(".item")[fallback]();
        }
        if ($next.hasClass("active")) return this.sliding = !1;
        var e = $.Event("slide.bs.carousel", {
            relatedTarget: $next[0],
            direction: direction
        });
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (this.sliding = !0, 
        isCycling && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), 
        this.$element.one("slid.bs.carousel", function() {
            var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()]);
            $nextIndicator && $nextIndicator.addClass("active");
        })), $.support.transition && this.$element.hasClass("slide") ? ($next.addClass(type), 
        $next[0].offsetWidth, $active.addClass(direction), $next.addClass(direction), $active.one($.support.transition.end, function() {
            $next.removeClass([ type, direction ].join(" ")).addClass("active"), $active.removeClass([ "active", direction ].join(" ")), 
            that.sliding = !1, setTimeout(function() {
                that.$element.trigger("slid.bs.carousel");
            }, 0);
        }).emulateTransitionEnd(1e3 * $active.css("transition-duration").slice(0, -1))) : ($active.removeClass("active"), 
        $next.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), 
        isCycling && this.cycle(), this);
    };
    var old = $.fn.carousel;
    $.fn.carousel = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.carousel"), options = $.extend({}, Carousel.DEFAULTS, $this.data(), "object" == typeof option && option), action = "string" == typeof option ? option : options.slide;
            data || $this.data("bs.carousel", data = new Carousel(this, options)), "number" == typeof option ? data.to(option) : action ? data[action]() : options.interval && data.pause().cycle();
        });
    }, $.fn.carousel.Constructor = Carousel, $.fn.carousel.noConflict = function() {
        return $.fn.carousel = old, this;
    }, $(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
        var href, $this = $(this), $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "")), options = $.extend({}, $target.data(), $this.data()), slideIndex = $this.attr("data-slide-to");
        slideIndex && (options.interval = !1), $target.carousel(options), (slideIndex = $this.attr("data-slide-to")) && $target.data("bs.carousel").to(slideIndex), 
        e.preventDefault();
    }), $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var $carousel = $(this);
            $carousel.carousel($carousel.data());
        });
    });
}(jQuery), +function($) {
    "use strict";
    var Collapse = function(element, options) {
        this.$element = $(element), this.options = $.extend({}, Collapse.DEFAULTS, options), 
        this.transitioning = null, this.options.parent && (this.$parent = $(this.options.parent)), 
        this.options.toggle && this.toggle();
    };
    Collapse.DEFAULTS = {
        toggle: !0
    }, Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass("width");
        return hasWidth ? "width" : "height";
    }, Collapse.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var startEvent = $.Event("show.bs.collapse");
            if (this.$element.trigger(startEvent), !startEvent.isDefaultPrevented()) {
                var actives = this.$parent && this.$parent.find("> .panel > .in");
                if (actives && actives.length) {
                    var hasData = actives.data("bs.collapse");
                    if (hasData && hasData.transitioning) return;
                    actives.collapse("hide"), hasData || actives.data("bs.collapse", null);
                }
                var dimension = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[dimension](0), this.transitioning = 1;
                var complete = function(e) {
                    e && e.target != this.$element[0] || (this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("auto"), 
                    this.transitioning = 0, this.$element.trigger("shown.bs.collapse"));
                };
                if (!$.support.transition) return complete.call(this);
                var scrollSize = $.camelCase([ "scroll", dimension ].join("-"));
                this.$element.one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize]);
            }
        }
    }, Collapse.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var startEvent = $.Event("hide.bs.collapse");
            if (this.$element.trigger(startEvent), !startEvent.isDefaultPrevented()) {
                var dimension = this.dimension();
                this.$element[dimension](this.$element[dimension]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), 
                this.transitioning = 1;
                var complete = function(e) {
                    e && e.target != this.$element[0] || (this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse"));
                };
                return $.support.transition ? void this.$element[dimension](0).one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350) : complete.call(this);
            }
        }
    }, Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    var old = $.fn.collapse;
    $.fn.collapse = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.collapse"), options = $.extend({}, Collapse.DEFAULTS, $this.data(), "object" == typeof option && option);
            !data && options.toggle && "show" == option && (option = !option), data || $this.data("bs.collapse", data = new Collapse(this, options)), 
            "string" == typeof option && data[option]();
        });
    }, $.fn.collapse.Constructor = Collapse, $.fn.collapse.noConflict = function() {
        return $.fn.collapse = old, this;
    }, $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var href, $this = $(this), target = $this.attr("data-target") || e.preventDefault() || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""), $target = $(target), data = $target.data("bs.collapse"), option = data ? "toggle" : $this.data(), parent = $this.attr("data-parent"), $parent = parent && $(parent);
        data && data.transitioning || ($parent && $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass("collapsed"), 
        $this[$target.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), $target.collapse(option);
    });
}(jQuery), +function($) {
    "use strict";
    function clearMenus(e) {
        $(backdrop).remove(), $(toggle).each(function() {
            var $parent = getParent($(this)), relatedTarget = {
                relatedTarget: this
            };
            $parent.hasClass("open") && ($parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget)), 
            e.isDefaultPrevented() || $parent.removeClass("open").trigger("hidden.bs.dropdown", relatedTarget));
        });
    }
    function getParent($this) {
        var selector = $this.attr("data-target");
        selector || (selector = $this.attr("href"), selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ""));
        var $parent = selector && $(selector);
        return $parent && $parent.length ? $parent : $this.parent();
    }
    var backdrop = ".dropdown-backdrop", toggle = '[data-toggle="dropdown"]', Dropdown = function(element) {
        $(element).on("click.bs.dropdown", this.toggle);
    };
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this);
        if (!$this.is(".disabled, :disabled")) {
            var $parent = getParent($this), isActive = $parent.hasClass("open");
            if (clearMenus(), !isActive) {
                "ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length && $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click", clearMenus);
                var relatedTarget = {
                    relatedTarget: this
                };
                if ($parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget)), e.isDefaultPrevented()) return;
                $parent.toggleClass("open").trigger("shown.bs.dropdown", relatedTarget), $this.trigger("focus");
            }
            return !1;
        }
    }, Dropdown.prototype.keydown = function(e) {
        if (/(38|40|27)/.test(e.keyCode)) {
            var $this = $(this);
            if (e.preventDefault(), e.stopPropagation(), !$this.is(".disabled, :disabled")) {
                var $parent = getParent($this), isActive = $parent.hasClass("open");
                if (!isActive || isActive && 27 == e.keyCode) return 27 == e.which && $parent.find(toggle).trigger("focus"), 
                $this.trigger("click");
                var desc = " li:not(.divider):visible a", $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);
                if ($items.length) {
                    var index = $items.index($items.filter(":focus"));
                    38 == e.keyCode && index > 0 && index--, 40 == e.keyCode && index < $items.length - 1 && index++, 
                    ~index || (index = 0), $items.eq(index).trigger("focus");
                }
            }
        }
    };
    var old = $.fn.dropdown;
    $.fn.dropdown = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.dropdown");
            data || $this.data("bs.dropdown", data = new Dropdown(this)), "string" == typeof option && data[option].call($this);
        });
    }, $.fn.dropdown.Constructor = Dropdown, $.fn.dropdown.noConflict = function() {
        return $.fn.dropdown = old, this;
    }, $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation();
    }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown);
}(jQuery), +function($) {
    "use strict";
    var Modal = function(element, options) {
        this.options = options, this.$body = $(document.body), this.$element = $(element), 
        this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };
    Modal.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget);
    }, Modal.prototype.show = function(_relatedTarget) {
        var that = this, e = $.Event("show.bs.modal", {
            relatedTarget: _relatedTarget
        });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, 
        this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), 
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), 
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass("fade");
            that.$element.parent().length || that.$element.appendTo(that.$body), that.$element.show().scrollTop(0), 
            transition && that.$element[0].offsetWidth, that.$element.addClass("in").attr("aria-hidden", !1), 
            that.enforceFocus();
            var e = $.Event("shown.bs.modal", {
                relatedTarget: _relatedTarget
            });
            transition ? that.$element.find(".modal-dialog").one($.support.transition.end, function() {
                that.$element.trigger("focus").trigger(e);
            }).emulateTransitionEnd(300) : that.$element.trigger("focus").trigger(e);
        }));
    }, Modal.prototype.hide = function(e) {
        e && e.preventDefault(), e = $.Event("hide.bs.modal"), this.$element.trigger(e), 
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), 
        this.resetScrollbar(), this.escape(), $(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), 
        $.support.transition && this.$element.hasClass("fade") ? this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
    }, Modal.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus");
        }, this));
    }, Modal.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", $.proxy(function(e) {
            27 == e.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
    }, Modal.prototype.hideModal = function() {
        var that = this;
        this.$element.hide(), this.backdrop(function() {
            that.removeBackdrop(), that.$element.trigger("hidden.bs.modal");
        });
    }, Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, Modal.prototype.backdrop = function(callback) {
        var animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            if (this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(this.$body), 
            this.$element.on("click.dismiss.bs.modal", $.proxy(function(e) {
                e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
            }, this)), doAnimate && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), 
            !callback) return;
            doAnimate ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback();
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback()) : callback && callback();
    }, Modal.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar());
    }, Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt(this.$body.css("padding-right") || 0);
        this.scrollbarWidth && this.$body.css("padding-right", bodyPad + this.scrollbarWidth);
    }, Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "");
    }, Modal.prototype.measureScrollbar = function() {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "modal-scrollbar-measure", this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        return this.$body[0].removeChild(scrollDiv), scrollbarWidth;
    };
    var old = $.fn.modal;
    $.fn.modal = function(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.modal"), options = $.extend({}, Modal.DEFAULTS, $this.data(), "object" == typeof option && option);
            data || $this.data("bs.modal", data = new Modal(this, options)), "string" == typeof option ? data[option](_relatedTarget) : options.show && data.show(_relatedTarget);
        });
    }, $.fn.modal.Constructor = Modal, $.fn.modal.noConflict = function() {
        return $.fn.modal = old, this;
    }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var $this = $(this), href = $this.attr("href"), $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, "")), option = $target.data("bs.modal") ? "toggle" : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data());
        $this.is("a") && e.preventDefault(), $target.modal(option, this).one("hide", function() {
            $this.is(":visible") && $this.trigger("focus");
        });
    });
}(jQuery), +function($) {
    "use strict";
    var Tooltip = function(element, options) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, 
        this.init("tooltip", element, options);
    };
    Tooltip.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, Tooltip.prototype.init = function(type, element, options) {
        this.enabled = !0, this.type = type, this.$element = $(element), this.options = this.getOptions(options), 
        this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);
        for (var triggers = this.options.trigger.split(" "), i = triggers.length; i--; ) {
            var trigger = triggers[i];
            if ("click" == trigger) this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this)); else if ("manual" != trigger) {
                var eventIn = "hover" == trigger ? "mouseenter" : "focusin", eventOut = "hover" == trigger ? "mouseleave" : "focusout";
                this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this)), 
                this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = $.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS;
    }, Tooltip.prototype.getOptions = function(options) {
        return options = $.extend({}, this.getDefaults(), this.$element.data(), options), 
        options.delay && "number" == typeof options.delay && (options.delay = {
            show: options.delay,
            hide: options.delay
        }), options;
    }, Tooltip.prototype.getDelegateOptions = function() {
        var options = {}, defaults = this.getDefaults();
        return this._options && $.each(this._options, function(key, value) {
            defaults[key] != value && (options[key] = value);
        }), options;
    }, Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(self.timeout), self.hoverState = "in", self.options.delay && self.options.delay.show ? void (self.timeout = setTimeout(function() {
            "in" == self.hoverState && self.show();
        }, self.options.delay.show)) : self.show();
    }, Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(self.timeout), self.hoverState = "out", self.options.delay && self.options.delay.hide ? void (self.timeout = setTimeout(function() {
            "out" == self.hoverState && self.hide();
        }, self.options.delay.hide)) : self.hide();
    }, Tooltip.prototype.show = function() {
        var e = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(e), e.isDefaultPrevented()) return;
            var that = this, $tip = this.tip();
            this.setContent(), this.options.animation && $tip.addClass("fade");
            var placement = "function" == typeof this.options.placement ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement, autoToken = /\s?auto?\s?/i, autoPlace = autoToken.test(placement);
            autoPlace && (placement = placement.replace(autoToken, "") || "top"), $tip.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(placement), this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
            var pos = this.getPosition(), actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
            if (autoPlace) {
                var orgPlacement = placement, $parent = this.$element.parent(), parentDim = this.getPosition($parent);
                placement = "bottom" == placement && pos.top + pos.height + actualHeight - parentDim.scroll > parentDim.height ? "top" : "top" == placement && pos.top - parentDim.scroll - actualHeight < 0 ? "bottom" : "right" == placement && pos.right + actualWidth > parentDim.width ? "left" : "left" == placement && pos.left - actualWidth < parentDim.left ? "right" : placement, 
                $tip.removeClass(orgPlacement).addClass(placement);
            }
            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
            this.applyPlacement(calculatedOffset, placement), this.hoverState = null;
            var complete = function() {
                that.$element.trigger("shown.bs." + that.type);
            };
            $.support.transition && this.$tip.hasClass("fade") ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete();
        }
    }, Tooltip.prototype.applyPlacement = function(offset, placement) {
        var $tip = this.tip(), width = $tip[0].offsetWidth, height = $tip[0].offsetHeight, marginTop = parseInt($tip.css("margin-top"), 10), marginLeft = parseInt($tip.css("margin-left"), 10);
        isNaN(marginTop) && (marginTop = 0), isNaN(marginLeft) && (marginLeft = 0), offset.top = offset.top + marginTop, 
        offset.left = offset.left + marginLeft, $.offset.setOffset($tip[0], $.extend({
            using: function(props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                });
            }
        }, offset), 0), $tip.addClass("in");
        var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
        "top" == placement && actualHeight != height && (offset.top = offset.top + height - actualHeight);
        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
        delta.left ? offset.left += delta.left : offset.top += delta.top;
        var arrowDelta = delta.left ? 2 * delta.left - width + actualWidth : 2 * delta.top - height + actualHeight, arrowPosition = delta.left ? "left" : "top", arrowOffsetPosition = delta.left ? "offsetWidth" : "offsetHeight";
        $tip.offset(offset), this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition);
    }, Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
        this.arrow().css(position, delta ? 50 * (1 - delta / dimension) + "%" : "");
    }, Tooltip.prototype.setContent = function() {
        var $tip = this.tip(), title = this.getTitle();
        $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title), $tip.removeClass("fade in top bottom left right");
    }, Tooltip.prototype.hide = function() {
        function complete() {
            "in" != that.hoverState && $tip.detach(), that.$element.trigger("hidden.bs." + that.type);
        }
        var that = this, $tip = this.tip(), e = $.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : ($tip.removeClass("in"), 
        $.support.transition && this.$tip.hasClass("fade") ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete(), 
        this.hoverState = null, this);
    }, Tooltip.prototype.fixTitle = function() {
        var $e = this.$element;
        ($e.attr("title") || "string" != typeof $e.attr("data-original-title")) && $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
    }, Tooltip.prototype.hasContent = function() {
        return this.getTitle();
    }, Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element;
        var el = $element[0], isBody = "BODY" == el.tagName;
        return $.extend({}, "function" == typeof el.getBoundingClientRect ? el.getBoundingClientRect() : null, {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
            width: isBody ? $(window).width() : $element.outerWidth(),
            height: isBody ? $(window).height() : $element.outerHeight()
        }, isBody ? {
            top: 0,
            left: 0
        } : $element.offset());
    }, Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return "bottom" == placement ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : "top" == placement ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : "left" == placement ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
        } : {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
        };
    }, Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
        var delta = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return delta;
        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0, viewportDimensions = this.getPosition(this.$viewport);
        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll, bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
            topEdgeOffset < viewportDimensions.top ? delta.top = viewportDimensions.top - topEdgeOffset : bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height && (delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset);
        } else {
            var leftEdgeOffset = pos.left - viewportPadding, rightEdgeOffset = pos.left + viewportPadding + actualWidth;
            leftEdgeOffset < viewportDimensions.left ? delta.left = viewportDimensions.left - leftEdgeOffset : rightEdgeOffset > viewportDimensions.width && (delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset);
        }
        return delta;
    }, Tooltip.prototype.getTitle = function() {
        var title, $e = this.$element, o = this.options;
        return title = $e.attr("data-original-title") || ("function" == typeof o.title ? o.title.call($e[0]) : o.title);
    }, Tooltip.prototype.tip = function() {
        return this.$tip = this.$tip || $(this.options.template);
    }, Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, Tooltip.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
    }, Tooltip.prototype.enable = function() {
        this.enabled = !0;
    }, Tooltip.prototype.disable = function() {
        this.enabled = !1;
    }, Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, Tooltip.prototype.toggle = function(e) {
        var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        self.tip().hasClass("in") ? self.leave(self) : self.enter(self);
    }, Tooltip.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type);
    };
    var old = $.fn.tooltip;
    $.fn.tooltip = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.tooltip"), options = "object" == typeof option && option;
            (data || "destroy" != option) && (data || $this.data("bs.tooltip", data = new Tooltip(this, options)), 
            "string" == typeof option && data[option]());
        });
    }, $.fn.tooltip.Constructor = Tooltip, $.fn.tooltip.noConflict = function() {
        return $.fn.tooltip = old, this;
    };
}(jQuery), +function($) {
    "use strict";
    var Popover = function(element, options) {
        this.init("popover", element, options);
    };
    if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype), Popover.prototype.constructor = Popover, 
    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS;
    }, Popover.prototype.setContent = function() {
        var $tip = this.tip(), title = this.getTitle(), content = this.getContent();
        $tip.find(".popover-title")[this.options.html ? "html" : "text"](title), $tip.find(".popover-content").empty()[this.options.html ? "string" == typeof content ? "html" : "append" : "text"](content), 
        $tip.removeClass("fade top bottom left right in"), $tip.find(".popover-title").html() || $tip.find(".popover-title").hide();
    }, Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, Popover.prototype.getContent = function() {
        var $e = this.$element, o = this.options;
        return $e.attr("data-content") || ("function" == typeof o.content ? o.content.call($e[0]) : o.content);
    }, Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    }, Popover.prototype.tip = function() {
        return this.$tip || (this.$tip = $(this.options.template)), this.$tip;
    };
    var old = $.fn.popover;
    $.fn.popover = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.popover"), options = "object" == typeof option && option;
            (data || "destroy" != option) && (data || $this.data("bs.popover", data = new Popover(this, options)), 
            "string" == typeof option && data[option]());
        });
    }, $.fn.popover.Constructor = Popover, $.fn.popover.noConflict = function() {
        return $.fn.popover = old, this;
    };
}(jQuery), +function($) {
    "use strict";
    function ScrollSpy(element, options) {
        var href, process = $.proxy(this.process, this);
        this.$element = $($(element).is("body") ? window : element), this.$body = $("body"), 
        this.$scrollElement = this.$element.on("scroll.bs.scrollspy", process), this.options = $.extend({}, ScrollSpy.DEFAULTS, options), 
        this.selector = (this.options.target || (href = $(element).attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", 
        this.offsets = $([]), this.targets = $([]), this.activeTarget = null, this.refresh(), 
        this.process();
    }
    ScrollSpy.DEFAULTS = {
        offset: 10
    }, ScrollSpy.prototype.refresh = function() {
        var offsetMethod = this.$element[0] == window ? "offset" : "position";
        this.offsets = $([]), this.targets = $([]);
        {
            var self = this;
            this.$body.find(this.selector).map(function() {
                var $el = $(this), href = $el.data("target") || $el.attr("href"), $href = /^#./.test(href) && $(href);
                return $href && $href.length && $href.is(":visible") && [ [ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ] ] || null;
            }).sort(function(a, b) {
                return a[0] - b[0];
            }).each(function() {
                self.offsets.push(this[0]), self.targets.push(this[1]);
            });
        }
    }, ScrollSpy.prototype.process = function() {
        var i, scrollTop = this.$scrollElement.scrollTop() + this.options.offset, scrollHeight = this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight), maxScroll = scrollHeight - this.$scrollElement.height(), offsets = this.offsets, targets = this.targets, activeTarget = this.activeTarget;
        if (scrollTop >= maxScroll) return activeTarget != (i = targets.last()[0]) && this.activate(i);
        if (activeTarget && scrollTop <= offsets[0]) return activeTarget != (i = targets[0]) && this.activate(i);
        for (i = offsets.length; i--; ) activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i]);
    }, ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target, $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]', active = $(selector).parents("li").addClass("active");
        active.parent(".dropdown-menu").length && (active = active.closest("li.dropdown").addClass("active")), 
        active.trigger("activate.bs.scrollspy");
    };
    var old = $.fn.scrollspy;
    $.fn.scrollspy = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.scrollspy"), options = "object" == typeof option && option;
            data || $this.data("bs.scrollspy", data = new ScrollSpy(this, options)), "string" == typeof option && data[option]();
        });
    }, $.fn.scrollspy.Constructor = ScrollSpy, $.fn.scrollspy.noConflict = function() {
        return $.fn.scrollspy = old, this;
    }, $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this);
            $spy.scrollspy($spy.data());
        });
    });
}(jQuery), +function($) {
    "use strict";
    var Tab = function(element) {
        this.element = $(element);
    };
    Tab.prototype.show = function() {
        var $this = this.element, $ul = $this.closest("ul:not(.dropdown-menu)"), selector = $this.data("target");
        if (selector || (selector = $this.attr("href"), selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "")), 
        !$this.parent("li").hasClass("active")) {
            var previous = $ul.find(".active:last a")[0], e = $.Event("show.bs.tab", {
                relatedTarget: previous
            });
            if ($this.trigger(e), !e.isDefaultPrevented()) {
                var $target = $(selector);
                this.activate($this.parent("li"), $ul), this.activate($target, $target.parent(), function() {
                    $this.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: previous
                    });
                });
            }
        }
    }, Tab.prototype.activate = function(element, container, callback) {
        function next() {
            $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
            element.addClass("active"), transition ? (element[0].offsetWidth, element.addClass("in")) : element.removeClass("fade"), 
            element.parent(".dropdown-menu") && element.closest("li.dropdown").addClass("active"), 
            callback && callback();
        }
        var $active = container.find("> .active"), transition = callback && $.support.transition && $active.hasClass("fade");
        transition ? $active.one($.support.transition.end, next).emulateTransitionEnd(150) : next(), 
        $active.removeClass("in");
    };
    var old = $.fn.tab;
    $.fn.tab = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.tab");
            data || $this.data("bs.tab", data = new Tab(this)), "string" == typeof option && data[option]();
        });
    }, $.fn.tab.Constructor = Tab, $.fn.tab.noConflict = function() {
        return $.fn.tab = old, this;
    }, $(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault(), $(this).tab("show");
    });
}(jQuery), +function($) {
    "use strict";
    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options), this.$window = $(window).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = $(element), this.affixed = this.unpin = this.pinnedOffset = null, 
        this.checkPosition();
    };
    Affix.RESET = "affix affix-top affix-bottom", Affix.DEFAULTS = {
        offset: 0
    }, Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass("affix");
        var scrollTop = this.$window.scrollTop(), position = this.$element.offset();
        return this.pinnedOffset = position.top - scrollTop;
    }, Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1);
    }, Affix.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var scrollHeight = $(document).height(), scrollTop = this.$window.scrollTop(), position = this.$element.offset(), offset = this.options.offset, offsetTop = offset.top, offsetBottom = offset.bottom;
            "object" != typeof offset && (offsetBottom = offsetTop = offset), "function" == typeof offsetTop && (offsetTop = offset.top(this.$element)), 
            "function" == typeof offsetBottom && (offsetBottom = offset.bottom(this.$element));
            var affix = null != this.unpin && scrollTop + this.unpin <= position.top ? !1 : null != offsetBottom && position.top + this.$element.height() >= scrollHeight - offsetBottom ? "bottom" : null != offsetTop && offsetTop >= scrollTop ? "top" : !1;
            if (this.affixed !== affix) {
                null != this.unpin && this.$element.css("top", "");
                var affixType = "affix" + (affix ? "-" + affix : ""), e = $.Event(affixType + ".bs.affix");
                this.$element.trigger(e), e.isDefaultPrevented() || (this.affixed = affix, this.unpin = "bottom" == affix ? this.getPinnedOffset() : null, 
                this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace("affix", "affixed"))), 
                "bottom" == affix && this.$element.offset({
                    top: position.top
                }));
            }
        }
    };
    var old = $.fn.affix;
    $.fn.affix = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("bs.affix"), options = "object" == typeof option && option;
            data || $this.data("bs.affix", data = new Affix(this, options)), "string" == typeof option && data[option]();
        });
    }, $.fn.affix.Constructor = Affix, $.fn.affix.noConflict = function() {
        return $.fn.affix = old, this;
    }, $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this), data = $spy.data();
            data.offset = data.offset || {}, data.offsetBottom && (data.offset.bottom = data.offsetBottom), 
            data.offsetTop && (data.offset.top = data.offsetTop), $spy.affix(data);
        });
    });
}(jQuery), define("bootstrap", [ "jquery" ], function() {}), function(window, document) {
    "use strict";
    angular.module("mgcrea.ngStrap", [ "mgcrea.ngStrap.button", "mgcrea.ngStrap.select", "mgcrea.ngStrap.datepicker", "mgcrea.ngStrap.timepicker", "mgcrea.ngStrap.navbar", "mgcrea.ngStrap.tooltip", "mgcrea.ngStrap.popover", "mgcrea.ngStrap.dropdown", "mgcrea.ngStrap.typeahead", "mgcrea.ngStrap.scrollspy", "mgcrea.ngStrap.affix", "mgcrea.ngStrap.tab", "mgcrea.ngStrap.collapse" ]), 
    angular.module("mgcrea.ngStrap.affix", [ "mgcrea.ngStrap.helpers.dimensions", "mgcrea.ngStrap.helpers.debounce" ]).provider("$affix", function() {
        var defaults = this.defaults = {
            offsetTop: "auto"
        };
        this.$get = [ "$window", "debounce", "dimensions", function($window, debounce, dimensions) {
            function AffixFactory(element, config) {
                function getRequiredAffixClass(unpin, position, elementHeight) {
                    var scrollTop = getScrollTop(), scrollHeight = getScrollHeight();
                    return offsetTop >= scrollTop ? "top" : null !== unpin && scrollTop + unpin <= position.top ? "middle" : null !== offsetBottom && position.top + elementHeight + initialAffixTop >= scrollHeight - offsetBottom ? "bottom" : "middle";
                }
                function getScrollTop() {
                    return targetEl[0] === $window ? $window.pageYOffset : targetEl[0].scrollTop;
                }
                function getScrollHeight() {
                    return targetEl[0] === $window ? $window.document.body.scrollHeight : targetEl[0].scrollHeight;
                }
                var $affix = {}, options = angular.extend({}, defaults, config), targetEl = options.target, reset = "affix affix-top affix-bottom", initialAffixTop = 0, initialOffsetTop = 0, offsetTop = 0, offsetBottom = 0, affixed = null, unpin = null, parent = element.parent();
                if (options.offsetParent) if (options.offsetParent.match(/^\d+$/)) for (var i = 0; i < 1 * options.offsetParent - 1; i++) parent = parent.parent(); else parent = angular.element(options.offsetParent);
                return $affix.init = function() {
                    $affix.$parseOffsets(), initialOffsetTop = dimensions.offset(element[0]).top + initialAffixTop, 
                    targetEl.on("scroll", $affix.checkPosition), targetEl.on("click", $affix.checkPositionWithEventLoop), 
                    windowEl.on("resize", $affix.$debouncedOnResize), $affix.checkPosition(), $affix.checkPositionWithEventLoop();
                }, $affix.destroy = function() {
                    targetEl.off("scroll", $affix.checkPosition), targetEl.off("click", $affix.checkPositionWithEventLoop), 
                    windowEl.off("resize", $affix.$debouncedOnResize);
                }, $affix.checkPositionWithEventLoop = function() {
                    setTimeout($affix.checkPosition, 1);
                }, $affix.checkPosition = function() {
                    var scrollTop = getScrollTop(), position = dimensions.offset(element[0]), elementHeight = dimensions.height(element[0]), affix = getRequiredAffixClass(unpin, position, elementHeight);
                    affixed !== affix && (affixed = affix, element.removeClass(reset).addClass("affix" + ("middle" !== affix ? "-" + affix : "")), 
                    "top" === affix ? (unpin = null, element.css("position", options.offsetParent ? "" : "relative"), 
                    element.css("top", "")) : "bottom" === affix ? (unpin = options.offsetUnpin ? -(1 * options.offsetUnpin) : position.top - scrollTop, 
                    element.css("position", options.offsetParent ? "" : "relative"), element.css("top", options.offsetParent ? "" : bodyEl[0].offsetHeight - offsetBottom - elementHeight - initialOffsetTop + "px")) : (unpin = null, 
                    element.css("position", "fixed"), element.css("top", initialAffixTop + "px")));
                }, $affix.$onResize = function() {
                    $affix.$parseOffsets(), $affix.checkPosition();
                }, $affix.$debouncedOnResize = debounce($affix.$onResize, 50), $affix.$parseOffsets = function() {
                    element.css("position", options.offsetParent ? "" : "relative"), options.offsetTop && ("auto" === options.offsetTop && (options.offsetTop = "+0"), 
                    options.offsetTop.match(/^[-+]\d+$/) ? (initialAffixTop = 1 * -options.offsetTop, 
                    offsetTop = options.offsetParent ? dimensions.offset(parent[0]).top + 1 * options.offsetTop : dimensions.offset(element[0]).top - dimensions.css(element[0], "marginTop", !0) + 1 * options.offsetTop) : offsetTop = 1 * options.offsetTop), 
                    options.offsetBottom && (offsetBottom = options.offsetParent && options.offsetBottom.match(/^[-+]\d+$/) ? getScrollHeight() - (dimensions.offset(parent[0]).top + dimensions.height(parent[0])) + 1 * options.offsetBottom + 1 : 1 * options.offsetBottom);
                }, $affix.init(), $affix;
            }
            var bodyEl = angular.element($window.document.body), windowEl = angular.element($window);
            return AffixFactory;
        } ];
    }).directive("bsAffix", [ "$affix", "$window", function($affix, $window) {
        return {
            restrict: "EAC",
            require: "^?bsAffixTarget",
            link: function(scope, element, attr, affixTarget) {
                var options = {
                    scope: scope,
                    offsetTop: "auto",
                    target: affixTarget ? affixTarget.$element : angular.element($window)
                };
                angular.forEach([ "offsetTop", "offsetBottom", "offsetParent", "offsetUnpin" ], function(key) {
                    angular.isDefined(attr[key]) && (options[key] = attr[key]);
                });
                var affix = $affix(element, options);
                scope.$on("$destroy", function() {
                    affix && affix.destroy(), options = null, affix = null;
                });
            }
        };
    } ]).directive("bsAffixTarget", function() {
        return {
            controller: [ "$element", function($element) {
                this.$element = $element;
            } ]
        };
    }), angular.module("mgcrea.ngStrap.button", []).provider("$button", function() {
        var defaults = this.defaults = {
            activeClass: "active",
            toggleEvent: "click"
        };
        this.$get = function() {
            return {
                defaults: defaults
            };
        };
    }).directive("bsCheckboxGroup", function() {
        return {
            restrict: "A",
            require: "ngModel",
            compile: function(element, attr) {
                element.attr("data-toggle", "buttons"), element.removeAttr("ng-model");
                var children = element[0].querySelectorAll('input[type="checkbox"]');
                angular.forEach(children, function(child) {
                    var childEl = angular.element(child);
                    childEl.attr("bs-checkbox", ""), childEl.attr("ng-model", attr.ngModel + "." + childEl.attr("value"));
                });
            }
        };
    }).directive("bsCheckbox", [ "$button", "$$rAF", function($button, $$rAF) {
        var defaults = $button.defaults, constantValueRegExp = /^(true|false|\d+)$/;
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attr, controller) {
                var options = defaults, isInput = "INPUT" === element[0].nodeName, activeElement = isInput ? element.parent() : element, trueValue = angular.isDefined(attr.trueValue) ? attr.trueValue : !0;
                constantValueRegExp.test(attr.trueValue) && (trueValue = scope.$eval(attr.trueValue));
                var falseValue = angular.isDefined(attr.falseValue) ? attr.falseValue : !1;
                constantValueRegExp.test(attr.falseValue) && (falseValue = scope.$eval(attr.falseValue));
                var hasExoticValues = "boolean" != typeof trueValue || "boolean" != typeof falseValue;
                hasExoticValues && (controller.$parsers.push(function(viewValue) {
                    return viewValue ? trueValue : falseValue;
                }), scope.$watch(attr.ngModel, function() {
                    controller.$render();
                })), controller.$render = function() {
                    var isActive = angular.equals(controller.$modelValue, trueValue);
                    $$rAF(function() {
                        isInput && (element[0].checked = isActive), activeElement.toggleClass(options.activeClass, isActive);
                    });
                }, element.bind(options.toggleEvent, function() {
                    scope.$apply(function() {
                        isInput || controller.$setViewValue(!activeElement.hasClass("active")), hasExoticValues || controller.$render();
                    });
                });
            }
        };
    } ]).directive("bsRadioGroup", function() {
        return {
            restrict: "A",
            require: "ngModel",
            compile: function(element, attr) {
                element.attr("data-toggle", "buttons"), element.removeAttr("ng-model");
                var children = element[0].querySelectorAll('input[type="radio"]');
                angular.forEach(children, function(child) {
                    angular.element(child).attr("bs-radio", ""), angular.element(child).attr("ng-model", attr.ngModel);
                });
            }
        };
    }).directive("bsRadio", [ "$button", "$$rAF", function($button, $$rAF) {
        var defaults = $button.defaults, constantValueRegExp = /^(true|false|\d+)$/;
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attr, controller) {
                var options = defaults, isInput = "INPUT" === element[0].nodeName, activeElement = isInput ? element.parent() : element, value = constantValueRegExp.test(attr.value) ? scope.$eval(attr.value) : attr.value;
                controller.$render = function() {
                    var isActive = angular.equals(controller.$modelValue, value);
                    $$rAF(function() {
                        isInput && (element[0].checked = isActive), activeElement.toggleClass(options.activeClass, isActive);
                    });
                }, element.bind(options.toggleEvent, function() {
                    scope.$apply(function() {
                        controller.$setViewValue(value), controller.$render();
                    });
                });
            }
        };
    } ]), angular.module("mgcrea.ngStrap.collapse", []).provider("$collapse", function() {
        var defaults = this.defaults = {
            animation: "am-collapse",
            disallowToggle: !1,
            activeClass: "in"
        }, controller = this.controller = function($scope, $element, $attrs) {
            var self = this;
            self.$options = angular.copy(defaults), angular.forEach([ "animation", "disallowToggle", "activeClass" ], function(key) {
                angular.isDefined($attrs[key]) && (self.$options[key] = $attrs[key]);
            }), self.$toggles = [], self.$targets = [], self.$viewChangeListeners = [], self.$registerToggle = function(element) {
                self.$toggles.push(element);
            }, self.$registerTarget = function(element) {
                self.$targets.push(element);
            }, self.$targets.$active = 0, self.$setActive = $scope.$setActive = function(value) {
                self.$targets.$active = self.$options.disallowToggle ? value : self.$targets.$active === value ? -1 : value, 
                self.$viewChangeListeners.forEach(function(fn) {
                    fn();
                });
            };
        };
        this.$get = function() {
            var $collapse = {};
            return $collapse.defaults = defaults, $collapse.controller = controller, $collapse;
        };
    }).directive("bsCollapse", [ "$window", "$animate", "$collapse", function($window, $animate, $collapse) {
        $collapse.defaults;
        return {
            require: [ "?ngModel", "bsCollapse" ],
            controller: [ "$scope", "$element", "$attrs", $collapse.controller ],
            link: function(scope, element, attrs, controllers) {
                var ngModelCtrl = controllers[0], bsCollapseCtrl = controllers[1];
                ngModelCtrl && (bsCollapseCtrl.$viewChangeListeners.push(function() {
                    ngModelCtrl.$setViewValue(bsCollapseCtrl.$targets.$active);
                }), ngModelCtrl.$formatters.push(function(modelValue) {
                    return bsCollapseCtrl.$setActive(1 * modelValue), modelValue;
                }));
            }
        };
    } ]).directive("bsCollapseToggle", function() {
        return {
            require: [ "^?ngModel", "^bsCollapse" ],
            link: function(scope, element, attrs, controllers) {
                var bsCollapseCtrl = (controllers[0], controllers[1]);
                element.attr("data-toggle", "collapse"), bsCollapseCtrl.$registerToggle(element), 
                element.on("click", function() {
                    var index = attrs.bsCollapseToggle || bsCollapseCtrl.$toggles.indexOf(element);
                    bsCollapseCtrl.$setActive(1 * index), scope.$apply();
                });
            }
        };
    }).directive("bsCollapseTarget", [ "$animate", function($animate) {
        return {
            require: [ "^?ngModel", "^bsCollapse" ],
            link: function(scope, element, attrs, controllers) {
                function render() {
                    var index = bsCollapseCtrl.$targets.indexOf(element), active = bsCollapseCtrl.$targets.$active;
                    $animate[index === active ? "addClass" : "removeClass"](element, bsCollapseCtrl.$options.activeClass);
                }
                var bsCollapseCtrl = (controllers[0], controllers[1]);
                element.addClass("collapse"), bsCollapseCtrl.$options.animation && element.addClass(bsCollapseCtrl.$options.animation), 
                bsCollapseCtrl.$registerTarget(element), bsCollapseCtrl.$viewChangeListeners.push(function() {
                    render();
                }), render();
            }
        };
    } ]), angular.module("mgcrea.ngStrap.datepicker", [ "mgcrea.ngStrap.helpers.dateParser", "mgcrea.ngStrap.tooltip" ]).provider("$datepicker", function() {
        var defaults = this.defaults = {
            animation: "am-fade",
            prefixClass: "datepicker",
            placement: "bottom-left",
            template: "datepicker/datepicker.tpl.html",
            trigger: "focus",
            container: !1,
            keyboard: !0,
            html: !1,
            delay: 0,
            useNative: !1,
            dateType: "date",
            dateFormat: "shortDate",
            modelDateFormat: null,
            dayFormat: "dd",
            strictFormat: !1,
            autoclose: !1,
            minDate: -1/0,
            maxDate: +1/0,
            startView: 0,
            minView: 0,
            startWeek: 0,
            daysOfWeekDisabled: "",
            iconLeft: "glyphicon glyphicon-chevron-left",
            iconRight: "glyphicon glyphicon-chevron-right"
        };
        this.$get = [ "$window", "$document", "$rootScope", "$sce", "$locale", "dateFilter", "datepickerViews", "$tooltip", function($window, $document, $rootScope, $sce, $locale, dateFilter, datepickerViews, $tooltip) {
            function DatepickerFactory(element, controller, config) {
                function updateSelected(el) {
                    el.selected = $datepicker.$isSelected(el.date);
                }
                function focusElement() {
                    element[0].focus();
                }
                var $datepicker = $tooltip(element, angular.extend({}, defaults, config)), parentScope = config.scope, options = $datepicker.$options, scope = $datepicker.$scope;
                options.startView && (options.startView -= options.minView);
                var pickerViews = datepickerViews($datepicker);
                $datepicker.$views = pickerViews.views;
                var viewDate = pickerViews.viewDate;
                scope.$mode = options.startView, scope.$iconLeft = options.iconLeft, scope.$iconRight = options.iconRight;
                var $picker = $datepicker.$views[scope.$mode];
                scope.$select = function(date) {
                    $datepicker.select(date);
                }, scope.$selectPane = function(value) {
                    $datepicker.$selectPane(value);
                }, scope.$toggleMode = function() {
                    $datepicker.setMode((scope.$mode + 1) % $datepicker.$views.length);
                }, $datepicker.update = function(date) {
                    angular.isDate(date) && !isNaN(date.getTime()) && ($datepicker.$date = date, $picker.update.call($picker, date)), 
                    $datepicker.$build(!0);
                }, $datepicker.updateDisabledDates = function(dateRanges) {
                    options.disabledDateRanges = dateRanges;
                    for (var i = 0, l = scope.rows.length; l > i; i++) angular.forEach(scope.rows[i], $datepicker.$setDisabledEl);
                }, $datepicker.select = function(date, keep) {
                    angular.isDate(controller.$dateValue) || (controller.$dateValue = new Date(date)), 
                    !scope.$mode || keep ? (controller.$setViewValue(angular.copy(date)), controller.$render(), 
                    options.autoclose && !keep && $datepicker.hide(!0)) : (angular.extend(viewDate, {
                        year: date.getFullYear(),
                        month: date.getMonth(),
                        date: date.getDate()
                    }), $datepicker.setMode(scope.$mode - 1), $datepicker.$build());
                }, $datepicker.setMode = function(mode) {
                    scope.$mode = mode, $picker = $datepicker.$views[scope.$mode], $datepicker.$build();
                }, $datepicker.$build = function(pristine) {
                    pristine === !0 && $picker.built || (pristine !== !1 || $picker.built) && $picker.build.call($picker);
                }, $datepicker.$updateSelected = function() {
                    for (var i = 0, l = scope.rows.length; l > i; i++) angular.forEach(scope.rows[i], updateSelected);
                }, $datepicker.$isSelected = function(date) {
                    return $picker.isSelected(date);
                }, $datepicker.$setDisabledEl = function(el) {
                    el.disabled = $picker.isDisabled(el.date);
                }, $datepicker.$selectPane = function(value) {
                    var steps = $picker.steps, targetDate = new Date(Date.UTC(viewDate.year + (steps.year || 0) * value, viewDate.month + (steps.month || 0) * value, viewDate.date + (steps.day || 0) * value));
                    angular.extend(viewDate, {
                        year: targetDate.getUTCFullYear(),
                        month: targetDate.getUTCMonth(),
                        date: targetDate.getUTCDate()
                    }), $datepicker.$build();
                }, $datepicker.$onMouseDown = function(evt) {
                    if (evt.preventDefault(), evt.stopPropagation(), isTouch) {
                        var targetEl = angular.element(evt.target);
                        "button" !== targetEl[0].nodeName.toLowerCase() && (targetEl = targetEl.parent()), 
                        targetEl.triggerHandler("click");
                    }
                }, $datepicker.$onKeyDown = function(evt) {
                    if (/(38|37|39|40|13)/.test(evt.keyCode) && !evt.shiftKey && !evt.altKey) {
                        if (evt.preventDefault(), evt.stopPropagation(), 13 === evt.keyCode) return scope.$mode ? scope.$apply(function() {
                            $datepicker.setMode(scope.$mode - 1);
                        }) : $datepicker.hide(!0);
                        $picker.onKeyDown(evt), parentScope.$digest();
                    }
                };
                var _init = $datepicker.init;
                $datepicker.init = function() {
                    return isNative && options.useNative ? (element.prop("type", "date"), void element.css("-webkit-appearance", "textfield")) : (isTouch && (element.prop("type", "text"), 
                    element.attr("readonly", "true"), element.on("click", focusElement)), void _init());
                };
                var _destroy = $datepicker.destroy;
                $datepicker.destroy = function() {
                    isNative && options.useNative && element.off("click", focusElement), _destroy();
                };
                var _show = $datepicker.show;
                $datepicker.show = function() {
                    _show(), setTimeout(function() {
                        $datepicker.$element.on(isTouch ? "touchstart" : "mousedown", $datepicker.$onMouseDown), 
                        options.keyboard && element.on("keydown", $datepicker.$onKeyDown);
                    });
                };
                var _hide = $datepicker.hide;
                return $datepicker.hide = function(blur) {
                    $datepicker.$element.off(isTouch ? "touchstart" : "mousedown", $datepicker.$onMouseDown), 
                    options.keyboard && element.off("keydown", $datepicker.$onKeyDown), _hide(blur);
                }, $datepicker;
            }
            var isNative = (angular.element($window.document.body), /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent)), isTouch = "createTouch" in $window.document && isNative;
            return defaults.lang || (defaults.lang = $locale.id), DatepickerFactory.defaults = defaults, 
            DatepickerFactory;
        } ];
    }).directive("bsDatepicker", [ "$window", "$parse", "$q", "$locale", "dateFilter", "$datepicker", "$dateParser", "$timeout", function($window, $parse, $q, $locale, dateFilter, $datepicker, $dateParser) {
        var isNative = ($datepicker.defaults, /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent)), isNumeric = function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        };
        return {
            restrict: "EAC",
            require: "ngModel",
            link: function(scope, element, attr, controller) {
                function normalizeDateRanges(ranges) {
                    return ranges && ranges.length ? ranges : null;
                }
                var options = {
                    scope: scope,
                    controller: controller
                };
                angular.forEach([ "placement", "container", "delay", "trigger", "keyboard", "html", "animation", "template", "autoclose", "dateType", "dateFormat", "modelDateFormat", "dayFormat", "strictFormat", "startWeek", "startDate", "useNative", "lang", "startView", "minView", "iconLeft", "iconRight", "daysOfWeekDisabled" ], function(key) {
                    angular.isDefined(attr[key]) && (options[key] = attr[key]);
                }), attr.bsShow && scope.$watch(attr.bsShow, function(newValue) {
                    datepicker && angular.isDefined(newValue) && (angular.isString(newValue) && (newValue = !!newValue.match(",?(datepicker),?")), 
                    newValue === !0 ? datepicker.show() : datepicker.hide());
                });
                var datepicker = $datepicker(element, controller, options);
                options = datepicker.$options, isNative && options.useNative && (options.dateFormat = "yyyy-MM-dd"), 
                angular.forEach([ "minDate", "maxDate" ], function(key) {
                    angular.isDefined(attr[key]) && attr.$observe(key, function(newValue) {
                        if ("today" === newValue) {
                            var today = new Date();
                            datepicker.$options[key] = +new Date(today.getFullYear(), today.getMonth(), today.getDate() + ("maxDate" === key ? 1 : 0), 0, 0, 0, "minDate" === key ? 0 : -1);
                        } else datepicker.$options[key] = angular.isString(newValue) && newValue.match(/^".+"$/) ? +new Date(newValue.substr(1, newValue.length - 2)) : isNumeric(newValue) ? +new Date(parseInt(newValue, 10)) : angular.isString(newValue) && 0 === newValue.length ? "maxDate" === key ? +1/0 : -1/0 : +new Date(newValue);
                        !isNaN(datepicker.$options[key]) && datepicker.$build(!1);
                    });
                }), scope.$watch(attr.ngModel, function() {
                    datepicker.update(controller.$dateValue);
                }, !0), angular.isDefined(attr.disabledDates) && scope.$watch(attr.disabledDates, function(disabledRanges, previousValue) {
                    disabledRanges = normalizeDateRanges(disabledRanges), previousValue = normalizeDateRanges(previousValue), 
                    disabledRanges !== previousValue && datepicker.updateDisabledDates(disabledRanges);
                });
                var dateParser = $dateParser({
                    format: options.dateFormat,
                    lang: options.lang,
                    strict: options.strictFormat
                });
                controller.$parsers.unshift(function(viewValue) {
                    if (!viewValue) return void controller.$setValidity("date", !0);
                    var parsedDate = dateParser.parse(viewValue, controller.$dateValue);
                    if (!parsedDate || isNaN(parsedDate.getTime())) return void controller.$setValidity("date", !1);
                    var isMinValid = isNaN(datepicker.$options.minDate) || parsedDate.getTime() >= datepicker.$options.minDate, isMaxValid = isNaN(datepicker.$options.maxDate) || parsedDate.getTime() <= datepicker.$options.maxDate, isValid = isMinValid && isMaxValid;
                    return controller.$setValidity("date", isValid), controller.$setValidity("min", isMinValid), 
                    controller.$setValidity("max", isMaxValid), isValid && (controller.$dateValue = parsedDate), 
                    "string" === options.dateType ? dateFilter(parsedDate, options.modelDateFormat || options.dateFormat) : "number" === options.dateType ? controller.$dateValue.getTime() : "iso" === options.dateType ? controller.$dateValue.toISOString() : new Date(controller.$dateValue);
                }), controller.$formatters.push(function(modelValue) {
                    var date;
                    return date = angular.isUndefined(modelValue) || null === modelValue ? 0/0 : angular.isDate(modelValue) ? modelValue : "string" === options.dateType ? dateParser.parse(modelValue, null, options.modelDateFormat) : new Date(modelValue), 
                    controller.$dateValue = date, controller.$dateValue;
                }), controller.$render = function() {
                    element.val(!controller.$dateValue || isNaN(controller.$dateValue.getTime()) ? "" : dateFilter(controller.$dateValue, options.dateFormat));
                }, scope.$on("$destroy", function() {
                    datepicker && datepicker.destroy(), options = null, datepicker = null;
                });
            }
        };
    } ]).provider("datepickerViews", function() {
        function split(arr, size) {
            for (var arrays = []; arr.length > 0; ) arrays.push(arr.splice(0, size));
            return arrays;
        }
        function mod(n, m) {
            return (n % m + m) % m;
        }
        this.defaults = {
            dayFormat: "dd",
            daySplit: 7
        };
        this.$get = [ "$locale", "$sce", "dateFilter", function($locale, $sce, dateFilter) {
            return function(picker) {
                var scope = picker.$scope, options = picker.$options, weekDaysMin = $locale.DATETIME_FORMATS.SHORTDAY, weekDaysLabels = weekDaysMin.slice(options.startWeek).concat(weekDaysMin.slice(0, options.startWeek)), weekDaysLabelsHtml = $sce.trustAsHtml('<th class="dow text-center">' + weekDaysLabels.join('</th><th class="dow text-center">') + "</th>"), startDate = picker.$date || (options.startDate ? new Date(options.startDate) : new Date()), viewDate = {
                    year: startDate.getFullYear(),
                    month: startDate.getMonth(),
                    date: startDate.getDate()
                }, views = (6e4 * startDate.getTimezoneOffset(), [ {
                    format: options.dayFormat,
                    split: 7,
                    steps: {
                        month: 1
                    },
                    update: function(date, force) {
                        !this.built || force || date.getFullYear() !== viewDate.year || date.getMonth() !== viewDate.month ? (angular.extend(viewDate, {
                            year: picker.$date.getFullYear(),
                            month: picker.$date.getMonth(),
                            date: picker.$date.getDate()
                        }), picker.$build()) : date.getDate() !== viewDate.date && (viewDate.date = picker.$date.getDate(), 
                        picker.$updateSelected());
                    },
                    build: function() {
                        var firstDayOfMonth = new Date(viewDate.year, viewDate.month, 1), firstDayOfMonthOffset = firstDayOfMonth.getTimezoneOffset(), firstDate = new Date(+firstDayOfMonth - 864e5 * mod(firstDayOfMonth.getDay() - options.startWeek, 7)), firstDateOffset = firstDate.getTimezoneOffset(), today = new Date().toDateString();
                        firstDateOffset !== firstDayOfMonthOffset && (firstDate = new Date(+firstDate + 6e4 * (firstDateOffset - firstDayOfMonthOffset)));
                        for (var day, days = [], i = 0; 42 > i; i++) day = new Date(firstDate.getFullYear(), firstDate.getMonth(), firstDate.getDate() + i), 
                        days.push({
                            date: day,
                            isToday: day.toDateString() === today,
                            label: dateFilter(day, this.format),
                            selected: picker.$date && this.isSelected(day),
                            muted: day.getMonth() !== viewDate.month,
                            disabled: this.isDisabled(day)
                        });
                        scope.title = dateFilter(firstDayOfMonth, "MMMM yyyy"), scope.showLabels = !0, scope.labels = weekDaysLabelsHtml, 
                        scope.rows = split(days, this.split), this.built = !0;
                    },
                    isSelected: function(date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear() && date.getMonth() === picker.$date.getMonth() && date.getDate() === picker.$date.getDate();
                    },
                    isDisabled: function(date) {
                        var time = date.getTime();
                        if (time < options.minDate || time > options.maxDate) return !0;
                        if (-1 !== options.daysOfWeekDisabled.indexOf(date.getDay())) return !0;
                        if (options.disabledDateRanges) for (var i = 0; i < options.disabledDateRanges.length; i++) if (time >= options.disabledDateRanges[i].start) return time <= options.disabledDateRanges[i].end ? !0 : !1;
                        return !1;
                    },
                    onKeyDown: function(evt) {
                        var newDate, actualTime = picker.$date.getTime();
                        37 === evt.keyCode ? newDate = new Date(actualTime - 864e5) : 38 === evt.keyCode ? newDate = new Date(actualTime - 6048e5) : 39 === evt.keyCode ? newDate = new Date(actualTime + 864e5) : 40 === evt.keyCode && (newDate = new Date(actualTime + 6048e5)), 
                        this.isDisabled(newDate) || picker.select(newDate, !0);
                    }
                }, {
                    name: "month",
                    format: "MMM",
                    split: 4,
                    steps: {
                        year: 1
                    },
                    update: function(date) {
                        this.built && date.getFullYear() === viewDate.year ? date.getMonth() !== viewDate.month && (angular.extend(viewDate, {
                            month: picker.$date.getMonth(),
                            date: picker.$date.getDate()
                        }), picker.$updateSelected()) : (angular.extend(viewDate, {
                            year: picker.$date.getFullYear(),
                            month: picker.$date.getMonth(),
                            date: picker.$date.getDate()
                        }), picker.$build());
                    },
                    build: function() {
                        for (var month, months = (new Date(viewDate.year, 0, 1), []), i = 0; 12 > i; i++) month = new Date(viewDate.year, i, 1), 
                        months.push({
                            date: month,
                            label: dateFilter(month, this.format),
                            selected: picker.$isSelected(month),
                            disabled: this.isDisabled(month)
                        });
                        scope.title = dateFilter(month, "yyyy"), scope.showLabels = !1, scope.rows = split(months, this.split), 
                        this.built = !0;
                    },
                    isSelected: function(date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear() && date.getMonth() === picker.$date.getMonth();
                    },
                    isDisabled: function(date) {
                        var lastDate = +new Date(date.getFullYear(), date.getMonth() + 1, 0);
                        return lastDate < options.minDate || date.getTime() > options.maxDate;
                    },
                    onKeyDown: function(evt) {
                        var actualMonth = picker.$date.getMonth(), newDate = new Date(picker.$date);
                        37 === evt.keyCode ? newDate.setMonth(actualMonth - 1) : 38 === evt.keyCode ? newDate.setMonth(actualMonth - 4) : 39 === evt.keyCode ? newDate.setMonth(actualMonth + 1) : 40 === evt.keyCode && newDate.setMonth(actualMonth + 4), 
                        this.isDisabled(newDate) || picker.select(newDate, !0);
                    }
                }, {
                    name: "year",
                    format: "yyyy",
                    split: 4,
                    steps: {
                        year: 12
                    },
                    update: function(date, force) {
                        !this.built || force || parseInt(date.getFullYear() / 20, 10) !== parseInt(viewDate.year / 20, 10) ? (angular.extend(viewDate, {
                            year: picker.$date.getFullYear(),
                            month: picker.$date.getMonth(),
                            date: picker.$date.getDate()
                        }), picker.$build()) : date.getFullYear() !== viewDate.year && (angular.extend(viewDate, {
                            year: picker.$date.getFullYear(),
                            month: picker.$date.getMonth(),
                            date: picker.$date.getDate()
                        }), picker.$updateSelected());
                    },
                    build: function() {
                        for (var year, firstYear = viewDate.year - viewDate.year % (3 * this.split), years = [], i = 0; 12 > i; i++) year = new Date(firstYear + i, 0, 1), 
                        years.push({
                            date: year,
                            label: dateFilter(year, this.format),
                            selected: picker.$isSelected(year),
                            disabled: this.isDisabled(year)
                        });
                        scope.title = years[0].label + "-" + years[years.length - 1].label, scope.showLabels = !1, 
                        scope.rows = split(years, this.split), this.built = !0;
                    },
                    isSelected: function(date) {
                        return picker.$date && date.getFullYear() === picker.$date.getFullYear();
                    },
                    isDisabled: function(date) {
                        var lastDate = +new Date(date.getFullYear() + 1, 0, 0);
                        return lastDate < options.minDate || date.getTime() > options.maxDate;
                    },
                    onKeyDown: function(evt) {
                        var actualYear = picker.$date.getFullYear(), newDate = new Date(picker.$date);
                        37 === evt.keyCode ? newDate.setYear(actualYear - 1) : 38 === evt.keyCode ? newDate.setYear(actualYear - 4) : 39 === evt.keyCode ? newDate.setYear(actualYear + 1) : 40 === evt.keyCode && newDate.setYear(actualYear + 4), 
                        this.isDisabled(newDate) || picker.select(newDate, !0);
                    }
                } ]);
                return {
                    views: options.minView ? Array.prototype.slice.call(views, options.minView) : views,
                    viewDate: viewDate
                };
            };
        } ];
    }), angular.module("mgcrea.ngStrap.dropdown", [ "mgcrea.ngStrap.tooltip" ]).provider("$dropdown", function() {
        var defaults = this.defaults = {
            animation: "am-fade",
            prefixClass: "dropdown",
            placement: "bottom-left",
            template: "dropdown/dropdown.tpl.html",
            trigger: "click",
            container: !1,
            keyboard: !0,
            html: !1,
            delay: 0
        };
        this.$get = [ "$window", "$rootScope", "$tooltip", function($window, $rootScope, $tooltip) {
            function DropdownFactory(element, config) {
                function onBodyClick(evt) {
                    return evt.target !== element[0] ? evt.target !== element[0] && $dropdown.hide() : void 0;
                }
                {
                    var $dropdown = {}, options = angular.extend({}, defaults, config);
                    $dropdown.$scope = options.scope && options.scope.$new() || $rootScope.$new();
                }
                $dropdown = $tooltip(element, options);
                var parentEl = element.parent();
                $dropdown.$onKeyDown = function(evt) {
                    if (/(38|40)/.test(evt.keyCode)) {
                        evt.preventDefault(), evt.stopPropagation();
                        var items = angular.element($dropdown.$element[0].querySelectorAll("li:not(.divider) a"));
                        if (items.length) {
                            var index;
                            angular.forEach(items, function(el, i) {
                                matchesSelector && matchesSelector.call(el, ":focus") && (index = i);
                            }), 38 === evt.keyCode && index > 0 ? index-- : 40 === evt.keyCode && index < items.length - 1 ? index++ : angular.isUndefined(index) && (index = 0), 
                            items.eq(index)[0].focus();
                        }
                    }
                };
                var show = $dropdown.show;
                $dropdown.show = function() {
                    show(), setTimeout(function() {
                        options.keyboard && $dropdown.$element.on("keydown", $dropdown.$onKeyDown), bodyEl.on("click", onBodyClick);
                    }), parentEl.hasClass("dropdown") && parentEl.addClass("open");
                };
                var hide = $dropdown.hide;
                return $dropdown.hide = function() {
                    options.keyboard && $dropdown.$element.off("keydown", $dropdown.$onKeyDown), bodyEl.off("click", onBodyClick), 
                    parentEl.hasClass("dropdown") && parentEl.removeClass("open"), hide();
                }, $dropdown;
            }
            var bodyEl = angular.element($window.document.body), matchesSelector = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
            return DropdownFactory;
        } ];
    }).directive("bsDropdown", [ "$window", "$sce", "$dropdown", function($window, $sce, $dropdown) {
        return {
            restrict: "EAC",
            scope: !0,
            link: function(scope, element, attr) {
                var options = {
                    scope: scope
                };
                angular.forEach([ "placement", "container", "delay", "trigger", "keyboard", "html", "animation", "template" ], function(key) {
                    angular.isDefined(attr[key]) && (options[key] = attr[key]);
                }), attr.bsDropdown && scope.$watch(attr.bsDropdown, function(newValue) {
                    scope.content = newValue;
                }, !0), attr.bsShow && scope.$watch(attr.bsShow, function(newValue) {
                    dropdown && angular.isDefined(newValue) && (angular.isString(newValue) && (newValue = !!newValue.match(",?(dropdown),?")), 
                    newValue === !0 ? dropdown.show() : dropdown.hide());
                });
                var dropdown = $dropdown(element, options);
                scope.$on("$destroy", function() {
                    dropdown && dropdown.destroy(), options = null, dropdown = null;
                });
            }
        };
    } ]), angular.module("mgcrea.ngStrap.helpers.dateParser", []).provider("$dateParser", [ "$localeProvider", function() {
        function noop() {}
        var proto = Date.prototype, defaults = this.defaults = {
            format: "shortDate",
            strict: !1
        };
        this.$get = [ "$locale", "dateFilter", function($locale, dateFilter) {
            var DateParserFactory = function(config) {
                function setMapForFormat(format) {
                    var i, keys = Object.keys(setFnMap), map = [], sortedMap = [], clonedFormat = format;
                    for (i = 0; i < keys.length; i++) if (format.split(keys[i]).length > 1) {
                        var index = clonedFormat.search(keys[i]);
                        format = format.split(keys[i]).join(""), setFnMap[keys[i]] && (map[index] = setFnMap[keys[i]]);
                    }
                    return angular.forEach(map, function(v) {
                        v && sortedMap.push(v);
                    }), sortedMap;
                }
                function escapeReservedSymbols(text) {
                    return text.replace(/\//g, "[\\/]").replace("/-/g", "[-]").replace(/\./g, "[.]").replace(/\\s/g, "[\\s]");
                }
                function regExpForFormat(format) {
                    var i, keys = Object.keys(regExpMap), re = format;
                    for (i = 0; i < keys.length; i++) re = re.split(keys[i]).join("${" + i + "}");
                    for (i = 0; i < keys.length; i++) re = re.split("${" + i + "}").join("(" + regExpMap[keys[i]] + ")");
                    return format = escapeReservedSymbols(format), new RegExp("^" + re + "$", [ "i" ]);
                }
                var regex, setMap, options = angular.extend({}, defaults, config), $dateParser = {}, regExpMap = {
                    sss: "[0-9]{3}",
                    ss: "[0-5][0-9]",
                    s: options.strict ? "[1-5]?[0-9]" : "[0-9]|[0-5][0-9]",
                    mm: "[0-5][0-9]",
                    m: options.strict ? "[1-5]?[0-9]" : "[0-9]|[0-5][0-9]",
                    HH: "[01][0-9]|2[0-3]",
                    H: options.strict ? "1?[0-9]|2[0-3]" : "[01]?[0-9]|2[0-3]",
                    hh: "[0][1-9]|[1][012]",
                    h: options.strict ? "[1-9]|1[012]" : "0?[1-9]|1[012]",
                    a: "AM|PM",
                    EEEE: $locale.DATETIME_FORMATS.DAY.join("|"),
                    EEE: $locale.DATETIME_FORMATS.SHORTDAY.join("|"),
                    dd: "0[1-9]|[12][0-9]|3[01]",
                    d: options.strict ? "[1-9]|[1-2][0-9]|3[01]" : "0?[1-9]|[1-2][0-9]|3[01]",
                    MMMM: $locale.DATETIME_FORMATS.MONTH.join("|"),
                    MMM: $locale.DATETIME_FORMATS.SHORTMONTH.join("|"),
                    MM: "0[1-9]|1[012]",
                    M: options.strict ? "[1-9]|1[012]" : "0?[1-9]|1[012]",
                    yyyy: "[1]{1}[0-9]{3}|[2]{1}[0-9]{3}",
                    yy: "[0-9]{2}",
                    y: options.strict ? "-?(0|[1-9][0-9]{0,3})" : "-?0*[0-9]{1,4}"
                }, setFnMap = {
                    sss: proto.setMilliseconds,
                    ss: proto.setSeconds,
                    s: proto.setSeconds,
                    mm: proto.setMinutes,
                    m: proto.setMinutes,
                    HH: proto.setHours,
                    H: proto.setHours,
                    hh: proto.setHours,
                    h: proto.setHours,
                    EEEE: noop,
                    EEE: noop,
                    dd: proto.setDate,
                    d: proto.setDate,
                    a: function(value) {
                        var hours = this.getHours();
                        return this.setHours(value.match(/pm/i) ? hours + 12 : hours);
                    },
                    MMMM: function(value) {
                        return this.setMonth($locale.DATETIME_FORMATS.MONTH.indexOf(value));
                    },
                    MMM: function(value) {
                        return this.setMonth($locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value));
                    },
                    MM: function(value) {
                        return this.setMonth(1 * value - 1);
                    },
                    M: function(value) {
                        return this.setMonth(1 * value - 1);
                    },
                    yyyy: proto.setFullYear,
                    yy: function(value) {
                        return this.setFullYear(2e3 + 1 * value);
                    },
                    y: proto.setFullYear
                };
                return $dateParser.init = function() {
                    $dateParser.$format = $locale.DATETIME_FORMATS[options.format] || options.format, 
                    regex = regExpForFormat($dateParser.$format), setMap = setMapForFormat($dateParser.$format);
                }, $dateParser.isValid = function(date) {
                    return angular.isDate(date) ? !isNaN(date.getTime()) : regex.test(date);
                }, $dateParser.parse = function(value, baseDate, format) {
                    angular.isDate(value) && (value = dateFilter(value, format || $dateParser.$format));
                    var formatRegex = format ? regExpForFormat(format) : regex, formatSetMap = format ? setMapForFormat(format) : setMap, matches = formatRegex.exec(value);
                    if (!matches) return !1;
                    for (var date = baseDate || new Date(0, 0, 1), i = 0; i < matches.length - 1; i++) formatSetMap[i] && formatSetMap[i].call(date, matches[i + 1]);
                    return date;
                }, $dateParser.init(), $dateParser;
            };
            return DateParserFactory;
        } ];
    } ]), angular.module("mgcrea.ngStrap.helpers.debounce", []).constant("debounce", function(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        return function() {
            context = this, args = arguments, timestamp = new Date();
            var later = function() {
                var last = new Date() - timestamp;
                wait > last ? timeout = setTimeout(later, wait - last) : (timeout = null, immediate || (result = func.apply(context, args)));
            }, callNow = immediate && !timeout;
            return timeout || (timeout = setTimeout(later, wait)), callNow && (result = func.apply(context, args)), 
            result;
        };
    }).constant("throttle", function(func, wait, options) {
        var context, args, result, timeout = null, previous = 0;
        options || (options = {});
        var later = function() {
            previous = options.leading === !1 ? 0 : new Date(), timeout = null, result = func.apply(context, args);
        };
        return function() {
            var now = new Date();
            previous || options.leading !== !1 || (previous = now);
            var remaining = wait - (now - previous);
            return context = this, args = arguments, 0 >= remaining ? (clearTimeout(timeout), 
            timeout = null, previous = now, result = func.apply(context, args)) : timeout || options.trailing === !1 || (timeout = setTimeout(later, remaining)), 
            result;
        };
    }), angular.module("mgcrea.ngStrap.helpers.dimensions", []).factory("dimensions", [ "$document", "$window", function() {
        var fn = (angular.element, {}), nodeName = fn.nodeName = function(element, name) {
            return element.nodeName && element.nodeName.toLowerCase() === name.toLowerCase();
        };
        fn.css = function(element, prop, extra) {
            var value;
            return value = element.currentStyle ? element.currentStyle[prop] : window.getComputedStyle ? window.getComputedStyle(element)[prop] : element.style[prop], 
            extra === !0 ? parseFloat(value) || 0 : value;
        }, fn.offset = function(element) {
            var boxRect = element.getBoundingClientRect(), docElement = element.ownerDocument;
            return {
                width: boxRect.width || element.offsetWidth,
                height: boxRect.height || element.offsetHeight,
                top: boxRect.top + (window.pageYOffset || docElement.documentElement.scrollTop) - (docElement.documentElement.clientTop || 0),
                left: boxRect.left + (window.pageXOffset || docElement.documentElement.scrollLeft) - (docElement.documentElement.clientLeft || 0)
            };
        }, fn.position = function(element) {
            var offsetParentElement, offset, offsetParentRect = {
                top: 0,
                left: 0
            };
            return "fixed" === fn.css(element, "position") ? offset = element.getBoundingClientRect() : (offsetParentElement = offsetParent(element), 
            offset = fn.offset(element), offset = fn.offset(element), nodeName(offsetParentElement, "html") || (offsetParentRect = fn.offset(offsetParentElement)), 
            offsetParentRect.top += fn.css(offsetParentElement, "borderTopWidth", !0), offsetParentRect.left += fn.css(offsetParentElement, "borderLeftWidth", !0)), 
            {
                width: element.offsetWidth,
                height: element.offsetHeight,
                top: offset.top - offsetParentRect.top - fn.css(element, "marginTop", !0),
                left: offset.left - offsetParentRect.left - fn.css(element, "marginLeft", !0)
            };
        };
        var offsetParent = function(element) {
            var docElement = element.ownerDocument, offsetParent = element.offsetParent || docElement;
            if (nodeName(offsetParent, "#document")) return docElement.documentElement;
            for (;offsetParent && !nodeName(offsetParent, "html") && "static" === fn.css(offsetParent, "position"); ) offsetParent = offsetParent.offsetParent;
            return offsetParent || docElement.documentElement;
        };
        return fn.height = function(element, outer) {
            var value = element.offsetHeight;
            return outer ? value += fn.css(element, "marginTop", !0) + fn.css(element, "marginBottom", !0) : value -= fn.css(element, "paddingTop", !0) + fn.css(element, "paddingBottom", !0) + fn.css(element, "borderTopWidth", !0) + fn.css(element, "borderBottomWidth", !0), 
            value;
        }, fn.width = function(element, outer) {
            var value = element.offsetWidth;
            return outer ? value += fn.css(element, "marginLeft", !0) + fn.css(element, "marginRight", !0) : value -= fn.css(element, "paddingLeft", !0) + fn.css(element, "paddingRight", !0) + fn.css(element, "borderLeftWidth", !0) + fn.css(element, "borderRightWidth", !0), 
            value;
        }, fn;
    } ]), angular.module("mgcrea.ngStrap.helpers.parseOptions", []).provider("$parseOptions", function() {
        var defaults = this.defaults = {
            regexp: /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/
        };
        this.$get = [ "$parse", "$q", function($parse, $q) {
            function ParseOptionsFactory(attr, config) {
                function parseValues(values, scope) {
                    return values.map(function(match, index) {
                        var label, value, locals = {};
                        return locals[valueName] = match, label = displayFn(scope, locals), value = valueFn(scope, locals) || index, 
                        {
                            label: label,
                            value: value
                        };
                    });
                }
                var $parseOptions = {}, options = angular.extend({}, defaults, config);
                $parseOptions.$values = [];
                var match, displayFn, valueName, keyName, groupByFn, valueFn, valuesFn;
                return $parseOptions.init = function() {
                    $parseOptions.$match = match = attr.match(options.regexp), displayFn = $parse(match[2] || match[1]), 
                    valueName = match[4] || match[6], keyName = match[5], groupByFn = $parse(match[3] || ""), 
                    valueFn = $parse(match[2] ? match[1] : valueName), valuesFn = $parse(match[7]);
                }, $parseOptions.valuesFn = function(scope, controller) {
                    return $q.when(valuesFn(scope, controller)).then(function(values) {
                        return $parseOptions.$values = values ? parseValues(values, scope) : {}, $parseOptions.$values;
                    });
                }, $parseOptions.init(), $parseOptions;
            }
            return ParseOptionsFactory;
        } ];
    }), angular.version.minor < 3 && angular.version.dot < 14 && angular.module("ng").factory("$$rAF", [ "$window", "$timeout", function($window, $timeout) {
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
    } ]), angular.module("mgcrea.ngStrap.navbar", []).provider("$navbar", function() {
        var defaults = this.defaults = {
            activeClass: "active",
            routeAttr: "data-match-route",
            strict: !1
        };
        this.$get = function() {
            return {
                defaults: defaults
            };
        };
    }).directive("bsNavbar", [ "$window", "$location", "$navbar", function($window, $location, $navbar) {
        var defaults = $navbar.defaults;
        return {
            restrict: "A",
            link: function(scope, element, attr) {
                var options = angular.copy(defaults);
                angular.forEach(Object.keys(defaults), function(key) {
                    angular.isDefined(attr[key]) && (options[key] = attr[key]);
                }), scope.$watch(function() {
                    return $location.path();
                }, function(newValue) {
                    var liElements = element[0].querySelectorAll("li[" + options.routeAttr + "]");
                    angular.forEach(liElements, function(li) {
                        var liElement = angular.element(li), pattern = liElement.attr(options.routeAttr).replace("/", "\\/");
                        options.strict && (pattern = "^" + pattern + "$");
                        var regexp = new RegExp(pattern, [ "i" ]);
                        regexp.test(newValue) ? liElement.addClass(options.activeClass) : liElement.removeClass(options.activeClass);
                    });
                });
            }
        };
    } ]), angular.module("mgcrea.ngStrap.popover", [ "mgcrea.ngStrap.tooltip" ]).provider("$popover", function() {
        var defaults = this.defaults = {
            animation: "am-fade",
            customClass: "",
            container: !1,
            target: !1,
            placement: "right",
            template: "popover/popover.tpl.html",
            contentTemplate: !1,
            trigger: "click",
            keyboard: !0,
            html: !1,
            title: "",
            content: "",
            delay: 0
        };
        this.$get = [ "$tooltip", function($tooltip) {
            function PopoverFactory(element, config) {
                var options = angular.extend({}, defaults, config), $popover = $tooltip(element, options);
                return options.content && ($popover.$scope.content = options.content), $popover;
            }
            return PopoverFactory;
        } ];
    }).directive("bsPopover", [ "$window", "$sce", "$popover", function($window, $sce, $popover) {
        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
        return {
            restrict: "EAC",
            scope: !0,
            link: function(scope, element, attr) {
                var options = {
                    scope: scope
                };
                angular.forEach([ "template", "contentTemplate", "placement", "container", "target", "delay", "trigger", "keyboard", "html", "animation", "customClass" ], function(key) {
                    angular.isDefined(attr[key]) && (options[key] = attr[key]);
                }), angular.forEach([ "title", "content" ], function(key) {
                    attr[key] && attr.$observe(key, function(newValue, oldValue) {
                        scope[key] = $sce.trustAsHtml(newValue), angular.isDefined(oldValue) && requestAnimationFrame(function() {
                            popover && popover.$applyPlacement();
                        });
                    });
                }), attr.bsPopover && scope.$watch(attr.bsPopover, function(newValue, oldValue) {
                    angular.isObject(newValue) ? angular.extend(scope, newValue) : scope.content = newValue, 
                    angular.isDefined(oldValue) && requestAnimationFrame(function() {
                        popover && popover.$applyPlacement();
                    });
                }, !0), attr.bsShow && scope.$watch(attr.bsShow, function(newValue) {
                    popover && angular.isDefined(newValue) && (angular.isString(newValue) && (newValue = !!newValue.match(",?(popover),?")), 
                    newValue === !0 ? popover.show() : popover.hide());
                });
                var popover = $popover(element, options);
                scope.$on("$destroy", function() {
                    popover && popover.destroy(), options = null, popover = null;
                });
            }
        };
    } ]), angular.module("mgcrea.ngStrap.scrollspy", [ "mgcrea.ngStrap.helpers.debounce", "mgcrea.ngStrap.helpers.dimensions" ]).provider("$scrollspy", function() {
        var spies = this.$$spies = {}, defaults = this.defaults = {
            debounce: 150,
            throttle: 100,
            offset: 100
        };
        this.$get = [ "$window", "$document", "$rootScope", "dimensions", "debounce", "throttle", function($window, $document, $rootScope, dimensions, debounce, throttle) {
            function nodeName(element, name) {
                return element[0].nodeName && element[0].nodeName.toLowerCase() === name.toLowerCase();
            }
            function ScrollSpyFactory(config) {
                var options = angular.extend({}, defaults, config);
                options.element || (options.element = bodyEl);
                var isWindowSpy = nodeName(options.element, "body"), scrollEl = isWindowSpy ? windowEl : options.element, scrollId = isWindowSpy ? "window" : options.id;
                if (spies[scrollId]) return spies[scrollId].$$count++, spies[scrollId];
                var unbindViewContentLoaded, unbindIncludeContentLoaded, activeTarget, debouncedCheckPosition, throttledCheckPosition, debouncedCheckOffsets, viewportHeight, scrollTop, $scrollspy = {}, trackedElements = $scrollspy.$trackedElements = [], sortedElements = [];
                return $scrollspy.init = function() {
                    this.$$count = 1, debouncedCheckPosition = debounce(this.checkPosition, options.debounce), 
                    throttledCheckPosition = throttle(this.checkPosition, options.throttle), scrollEl.on("click", this.checkPositionWithEventLoop), 
                    windowEl.on("resize", debouncedCheckPosition), scrollEl.on("scroll", throttledCheckPosition), 
                    debouncedCheckOffsets = debounce(this.checkOffsets, options.debounce), unbindViewContentLoaded = $rootScope.$on("$viewContentLoaded", debouncedCheckOffsets), 
                    unbindIncludeContentLoaded = $rootScope.$on("$includeContentLoaded", debouncedCheckOffsets), 
                    debouncedCheckOffsets(), scrollId && (spies[scrollId] = $scrollspy);
                }, $scrollspy.destroy = function() {
                    this.$$count--, this.$$count > 0 || (scrollEl.off("click", this.checkPositionWithEventLoop), 
                    windowEl.off("resize", debouncedCheckPosition), scrollEl.off("scroll", debouncedCheckPosition), 
                    unbindViewContentLoaded(), unbindIncludeContentLoaded(), scrollId && delete spies[scrollId]);
                }, $scrollspy.checkPosition = function() {
                    if (sortedElements.length) {
                        if (scrollTop = (isWindowSpy ? $window.pageYOffset : scrollEl.prop("scrollTop")) || 0, 
                        viewportHeight = Math.max($window.innerHeight, docEl.prop("clientHeight")), scrollTop < sortedElements[0].offsetTop && activeTarget !== sortedElements[0].target) return $scrollspy.$activateElement(sortedElements[0]);
                        for (var i = sortedElements.length; i--; ) if (!angular.isUndefined(sortedElements[i].offsetTop) && null !== sortedElements[i].offsetTop && activeTarget !== sortedElements[i].target && !(scrollTop < sortedElements[i].offsetTop || sortedElements[i + 1] && scrollTop > sortedElements[i + 1].offsetTop)) return $scrollspy.$activateElement(sortedElements[i]);
                    }
                }, $scrollspy.checkPositionWithEventLoop = function() {
                    setTimeout(this.checkPosition, 1);
                }, $scrollspy.$activateElement = function(element) {
                    if (activeTarget) {
                        var activeElement = $scrollspy.$getTrackedElement(activeTarget);
                        activeElement && (activeElement.source.removeClass("active"), nodeName(activeElement.source, "li") && nodeName(activeElement.source.parent().parent(), "li") && activeElement.source.parent().parent().removeClass("active"));
                    }
                    activeTarget = element.target, element.source.addClass("active"), nodeName(element.source, "li") && nodeName(element.source.parent().parent(), "li") && element.source.parent().parent().addClass("active");
                }, $scrollspy.$getTrackedElement = function(target) {
                    return trackedElements.filter(function(obj) {
                        return obj.target === target;
                    })[0];
                }, $scrollspy.checkOffsets = function() {
                    angular.forEach(trackedElements, function(trackedElement) {
                        var targetElement = document.querySelector(trackedElement.target);
                        trackedElement.offsetTop = targetElement ? dimensions.offset(targetElement).top : null, 
                        options.offset && null !== trackedElement.offsetTop && (trackedElement.offsetTop -= 1 * options.offset);
                    }), sortedElements = trackedElements.filter(function(el) {
                        return null !== el.offsetTop;
                    }).sort(function(a, b) {
                        return a.offsetTop - b.offsetTop;
                    }), debouncedCheckPosition();
                }, $scrollspy.trackElement = function(target, source) {
                    trackedElements.push({
                        target: target,
                        source: source
                    });
                }, $scrollspy.untrackElement = function(target, source) {
                    for (var toDelete, i = trackedElements.length; i--; ) if (trackedElements[i].target === target && trackedElements[i].source === source) {
                        toDelete = i;
                        break;
                    }
                    trackedElements = trackedElements.splice(toDelete, 1);
                }, $scrollspy.activate = function(i) {
                    trackedElements[i].addClass("active");
                }, $scrollspy.init(), $scrollspy;
            }
            var windowEl = angular.element($window), docEl = angular.element($document.prop("documentElement")), bodyEl = angular.element($window.document.body);
            return ScrollSpyFactory;
        } ];
    }).directive("bsScrollspy", [ "$rootScope", "debounce", "dimensions", "$scrollspy", function($rootScope, debounce, dimensions, $scrollspy) {
        return {
            restrict: "EAC",
            link: function(scope, element, attr) {
                var options = {
                    scope: scope
                };
                angular.forEach([ "offset", "target" ], function(key) {
                    angular.isDefined(attr[key]) && (options[key] = attr[key]);
                });
                var scrollspy = $scrollspy(options);
                scrollspy.trackElement(options.target, element), scope.$on("$destroy", function() {
                    scrollspy && (scrollspy.untrackElement(options.target, element), scrollspy.destroy()), 
                    options = null, scrollspy = null;
                });
            }
        };
    } ]).directive("bsScrollspyList", [ "$rootScope", "debounce", "dimensions", "$scrollspy", function() {
        return {
            restrict: "A",
            compile: function(element) {
                var children = element[0].querySelectorAll("li > a[href]");
                angular.forEach(children, function(child) {
                    var childEl = angular.element(child);
                    childEl.parent().attr("bs-scrollspy", "").attr("data-target", childEl.attr("href"));
                });
            }
        };
    } ]), angular.module("mgcrea.ngStrap.select", [ "mgcrea.ngStrap.tooltip", "mgcrea.ngStrap.helpers.parseOptions" ]).provider("$select", function() {
        var defaults = this.defaults = {
            animation: "am-fade",
            prefixClass: "select",
            prefixEvent: "$select",
            placement: "bottom-left",
            template: "select/select.tpl.html",
            trigger: "focus",
            container: !1,
            keyboard: !0,
            html: !1,
            delay: 0,
            multiple: !1,
            allNoneButtons: !1,
            sort: !0,
            caretHtml: '&nbsp;<span class="caret"></span>',
            placeholder: "Choose among the following...",
            maxLength: 3,
            maxLengthHtml: "selected",
            iconCheckmark: "glyphicon glyphicon-ok"
        };
        this.$get = [ "$window", "$document", "$rootScope", "$tooltip", function($window, $document, $rootScope, $tooltip) {
            function SelectFactory(element, controller, config) {
                var $select = {}, options = angular.extend({}, defaults, config);
                $select = $tooltip(element, options);
                var scope = $select.$scope;
                scope.$matches = [], scope.$activeIndex = 0, scope.$isMultiple = options.multiple, 
                scope.$showAllNoneButtons = options.allNoneButtons && options.multiple, scope.$iconCheckmark = options.iconCheckmark, 
                scope.$activate = function(index) {
                    scope.$$postDigest(function() {
                        $select.activate(index);
                    });
                }, scope.$select = function(index) {
                    scope.$$postDigest(function() {
                        $select.select(index);
                    });
                }, scope.$isVisible = function() {
                    return $select.$isVisible();
                }, scope.$isActive = function(index) {
                    return $select.$isActive(index);
                }, scope.$selectAll = function() {
                    for (var i = 0; i < scope.$matches.length; i++) scope.$isActive(i) || scope.$select(i);
                }, scope.$selectNone = function() {
                    for (var i = 0; i < scope.$matches.length; i++) scope.$isActive(i) && scope.$select(i);
                }, $select.update = function(matches) {
                    scope.$matches = matches, $select.$updateActiveIndex();
                }, $select.activate = function(index) {
                    return options.multiple ? (scope.$activeIndex.sort(), $select.$isActive(index) ? scope.$activeIndex.splice(scope.$activeIndex.indexOf(index), 1) : scope.$activeIndex.push(index), 
                    options.sort && scope.$activeIndex.sort()) : scope.$activeIndex = index, scope.$activeIndex;
                }, $select.select = function(index) {
                    var value = scope.$matches[index].value;
                    scope.$apply(function() {
                        $select.activate(index), options.multiple ? controller.$setViewValue(scope.$activeIndex.map(function(index) {
                            return scope.$matches[index].value;
                        })) : (controller.$setViewValue(value), $select.hide());
                    }), scope.$emit(options.prefixEvent + ".select", value, index);
                }, $select.$updateActiveIndex = function() {
                    controller.$modelValue && scope.$matches.length ? scope.$activeIndex = options.multiple && angular.isArray(controller.$modelValue) ? controller.$modelValue.map(function(value) {
                        return $select.$getIndex(value);
                    }) : $select.$getIndex(controller.$modelValue) : scope.$activeIndex >= scope.$matches.length && (scope.$activeIndex = options.multiple ? [] : 0);
                }, $select.$isVisible = function() {
                    return options.minLength && controller ? scope.$matches.length && controller.$viewValue.length >= options.minLength : scope.$matches.length;
                }, $select.$isActive = function(index) {
                    return options.multiple ? -1 !== scope.$activeIndex.indexOf(index) : scope.$activeIndex === index;
                }, $select.$getIndex = function(value) {
                    var l = scope.$matches.length, i = l;
                    if (l) {
                        for (i = l; i-- && scope.$matches[i].value !== value; ) ;
                        if (!(0 > i)) return i;
                    }
                }, $select.$onMouseDown = function(evt) {
                    if (evt.preventDefault(), evt.stopPropagation(), isTouch) {
                        var targetEl = angular.element(evt.target);
                        targetEl.triggerHandler("click");
                    }
                }, $select.$onKeyDown = function(evt) {
                    if (/(9|13|38|40)/.test(evt.keyCode)) {
                        if (evt.preventDefault(), evt.stopPropagation(), !options.multiple && (13 === evt.keyCode || 9 === evt.keyCode)) return $select.select(scope.$activeIndex);
                        38 === evt.keyCode && scope.$activeIndex > 0 ? scope.$activeIndex-- : 40 === evt.keyCode && scope.$activeIndex < scope.$matches.length - 1 ? scope.$activeIndex++ : angular.isUndefined(scope.$activeIndex) && (scope.$activeIndex = 0), 
                        scope.$digest();
                    }
                };
                var _show = $select.show;
                $select.show = function() {
                    _show(), options.multiple && $select.$element.addClass("select-multiple"), setTimeout(function() {
                        $select.$element.on(isTouch ? "touchstart" : "mousedown", $select.$onMouseDown), 
                        options.keyboard && element.on("keydown", $select.$onKeyDown);
                    });
                };
                var _hide = $select.hide;
                return $select.hide = function() {
                    $select.$element.off(isTouch ? "touchstart" : "mousedown", $select.$onMouseDown), 
                    options.keyboard && element.off("keydown", $select.$onKeyDown), _hide(!0);
                }, $select;
            }
            var isNative = (angular.element($window.document.body), /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent)), isTouch = "createTouch" in $window.document && isNative;
            return SelectFactory.defaults = defaults, SelectFactory;
        } ];
    }).directive("bsSelect", [ "$window", "$parse", "$q", "$select", "$parseOptions", function($window, $parse, $q, $select, $parseOptions) {
        var defaults = $select.defaults;
        return {
            restrict: "EAC",
            require: "ngModel",
            link: function(scope, element, attr, controller) {
                var options = {
                    scope: scope
                };
                if (angular.forEach([ "placement", "container", "delay", "trigger", "keyboard", "html", "animation", "template", "placeholder", "multiple", "allNoneButtons", "maxLength", "maxLengthHtml" ], function(key) {
                    angular.isDefined(attr[key]) && (options[key] = attr[key]);
                }), "select" === element[0].nodeName.toLowerCase()) {
                    var inputEl = element;
                    inputEl.css("display", "none"), element = angular.element('<button type="button" class="btn btn-default"></button>'), 
                    inputEl.after(element);
                }
                var parsedOptions = $parseOptions(attr.ngOptions), select = $select(element, controller, options), watchedOptions = parsedOptions.$match[7].replace(/\|.+/, "").trim();
                scope.$watch(watchedOptions, function() {
                    parsedOptions.valuesFn(scope, controller).then(function(values) {
                        select.update(values), controller.$render();
                    });
                }, !0), scope.$watch(attr.ngModel, function() {
                    select.$updateActiveIndex(), controller.$render();
                }, !0), controller.$render = function() {
                    var selected, index;
                    options.multiple && angular.isArray(controller.$modelValue) ? (selected = controller.$modelValue.map(function(value) {
                        return index = select.$getIndex(value), angular.isDefined(index) ? select.$scope.$matches[index].label : !1;
                    }).filter(angular.isDefined), selected = selected.length > (options.maxLength || defaults.maxLength) ? selected.length + " " + (options.maxLengthHtml || defaults.maxLengthHtml) : selected.join(", ")) : (index = select.$getIndex(controller.$modelValue), 
                    selected = angular.isDefined(index) ? select.$scope.$matches[index].label : !1), 
                    element.html((selected ? selected : attr.placeholder || defaults.placeholder) + defaults.caretHtml);
                }, scope.$on("$destroy", function() {
                    select && select.destroy(), options = null, select = null;
                });
            }
        };
    } ]), angular.module("mgcrea.ngStrap.tab", []).provider("$tab", function() {
        var defaults = this.defaults = {
            animation: "am-fade",
            template: "tab/tab.tpl.html",
            navClass: "nav-tabs",
            activeClass: "active"
        }, controller = this.controller = function($scope, $element, $attrs) {
            var self = this;
            self.$options = angular.copy(defaults), angular.forEach([ "animation", "navClass", "activeClass" ], function(key) {
                angular.isDefined($attrs[key]) && (self.$options[key] = $attrs[key]);
            }), $scope.$navClass = self.$options.navClass, $scope.$activeClass = self.$options.activeClass, 
            self.$panes = $scope.$panes = [], self.$viewChangeListeners = [], self.$push = function(pane) {
                self.$panes.push(pane);
            }, self.$panes.$active = 0, self.$setActive = $scope.$setActive = function(value) {
                self.$panes.$active = value, self.$viewChangeListeners.forEach(function(fn) {
                    fn();
                });
            };
        };
        this.$get = function() {
            var $tab = {};
            return $tab.defaults = defaults, $tab.controller = controller, $tab;
        };
    }).directive("bsTabs", [ "$window", "$animate", "$tab", function($window, $animate, $tab) {
        var defaults = $tab.defaults;
        return {
            require: [ "?ngModel", "bsTabs" ],
            transclude: !0,
            scope: !0,
            controller: [ "$scope", "$element", "$attrs", $tab.controller ],
            templateUrl: function(element, attr) {
                return attr.template || defaults.template;
            },
            link: function(scope, element, attrs, controllers) {
                var ngModelCtrl = controllers[0], bsTabsCtrl = controllers[1];
                ngModelCtrl && (bsTabsCtrl.$viewChangeListeners.push(function() {
                    ngModelCtrl.$setViewValue(bsTabsCtrl.$panes.$active);
                }), ngModelCtrl.$formatters.push(function(modelValue) {
                    return bsTabsCtrl.$setActive(1 * modelValue), modelValue;
                }));
            }
        };
    } ]).directive("bsPane", [ "$window", "$animate", "$sce", function($window, $animate, $sce) {
        return {
            require: [ "^?ngModel", "^bsTabs" ],
            scope: !0,
            link: function(scope, element, attrs, controllers) {
                function render() {
                    var index = bsTabsCtrl.$panes.indexOf(scope), active = bsTabsCtrl.$panes.$active;
                    $animate[index === active ? "addClass" : "removeClass"](element, bsTabsCtrl.$options.activeClass);
                }
                var bsTabsCtrl = (controllers[0], controllers[1]);
                element.addClass("tab-pane"), attrs.$observe("title", function(newValue) {
                    scope.title = $sce.trustAsHtml(newValue);
                }), bsTabsCtrl.$options.animation && element.addClass(bsTabsCtrl.$options.animation), 
                bsTabsCtrl.$push(scope), bsTabsCtrl.$viewChangeListeners.push(function() {
                    render();
                }), render();
            }
        };
    } ]), angular.module("mgcrea.ngStrap.timepicker", [ "mgcrea.ngStrap.helpers.dateParser", "mgcrea.ngStrap.tooltip" ]).provider("$timepicker", function() {
        var defaults = this.defaults = {
            animation: "am-fade",
            prefixClass: "timepicker",
            placement: "bottom-left",
            template: "timepicker/timepicker.tpl.html",
            trigger: "focus",
            container: !1,
            keyboard: !0,
            html: !1,
            delay: 0,
            useNative: !0,
            timeType: "date",
            timeFormat: "shortTime",
            modelTimeFormat: null,
            autoclose: !1,
            minTime: -1/0,
            maxTime: +1/0,
            length: 5,
            hourStep: 1,
            minuteStep: 5,
            iconUp: "glyphicon glyphicon-chevron-up",
            iconDown: "glyphicon glyphicon-chevron-down",
            arrowBehavior: "pager"
        };
        this.$get = [ "$window", "$document", "$rootScope", "$sce", "$locale", "dateFilter", "$tooltip", function($window, $document, $rootScope, $sce, $locale, dateFilter, $tooltip) {
            function timepickerFactory(element, controller, config) {
                function createSelection(start, end) {
                    if (element[0].createTextRange) {
                        var selRange = element[0].createTextRange();
                        selRange.collapse(!0), selRange.moveStart("character", start), selRange.moveEnd("character", end), 
                        selRange.select();
                    } else element[0].setSelectionRange ? element[0].setSelectionRange(start, end) : angular.isUndefined(element[0].selectionStart) && (element[0].selectionStart = start, 
                    element[0].selectionEnd = end);
                }
                function focusElement() {
                    element[0].focus();
                }
                var $timepicker = $tooltip(element, angular.extend({}, defaults, config)), parentScope = config.scope, options = $timepicker.$options, scope = $timepicker.$scope, selectedIndex = 0, startDate = controller.$dateValue || new Date(), viewDate = {
                    hour: startDate.getHours(),
                    meridian: startDate.getHours() < 12,
                    minute: startDate.getMinutes(),
                    second: startDate.getSeconds(),
                    millisecond: startDate.getMilliseconds()
                }, format = $locale.DATETIME_FORMATS[options.timeFormat] || options.timeFormat, formats = /(h+)([:\.])?(m+)[ ]?(a?)/i.exec(format).slice(1);
                scope.$iconUp = options.iconUp, scope.$iconDown = options.iconDown, scope.$select = function(date, index) {
                    $timepicker.select(date, index);
                }, scope.$moveIndex = function(value, index) {
                    $timepicker.$moveIndex(value, index);
                }, scope.$switchMeridian = function(date) {
                    $timepicker.switchMeridian(date);
                }, $timepicker.update = function(date) {
                    angular.isDate(date) && !isNaN(date.getTime()) ? ($timepicker.$date = date, angular.extend(viewDate, {
                        hour: date.getHours(),
                        minute: date.getMinutes(),
                        second: date.getSeconds(),
                        millisecond: date.getMilliseconds()
                    }), $timepicker.$build()) : $timepicker.$isBuilt || $timepicker.$build();
                }, $timepicker.select = function(date, index, keep) {
                    (!controller.$dateValue || isNaN(controller.$dateValue.getTime())) && (controller.$dateValue = new Date(1970, 0, 1)), 
                    angular.isDate(date) || (date = new Date(date)), 0 === index ? controller.$dateValue.setHours(date.getHours()) : 1 === index && controller.$dateValue.setMinutes(date.getMinutes()), 
                    controller.$setViewValue(controller.$dateValue), controller.$render(), options.autoclose && !keep && $timepicker.hide(!0);
                }, $timepicker.switchMeridian = function(date) {
                    var hours = (date || controller.$dateValue).getHours();
                    controller.$dateValue.setHours(12 > hours ? hours + 12 : hours - 12), controller.$setViewValue(controller.$dateValue), 
                    controller.$render();
                }, $timepicker.$build = function() {
                    var i, hour, midIndex = scope.midIndex = parseInt(options.length / 2, 10), hours = [];
                    for (i = 0; i < options.length; i++) hour = new Date(1970, 0, 1, viewDate.hour - (midIndex - i) * options.hourStep), 
                    hours.push({
                        date: hour,
                        label: dateFilter(hour, formats[0]),
                        selected: $timepicker.$date && $timepicker.$isSelected(hour, 0),
                        disabled: $timepicker.$isDisabled(hour, 0)
                    });
                    var minute, minutes = [];
                    for (i = 0; i < options.length; i++) minute = new Date(1970, 0, 1, 0, viewDate.minute - (midIndex - i) * options.minuteStep), 
                    minutes.push({
                        date: minute,
                        label: dateFilter(minute, formats[2]),
                        selected: $timepicker.$date && $timepicker.$isSelected(minute, 1),
                        disabled: $timepicker.$isDisabled(minute, 1)
                    });
                    var rows = [];
                    for (i = 0; i < options.length; i++) rows.push([ hours[i], minutes[i] ]);
                    scope.rows = rows, scope.showAM = !!formats[3], scope.isAM = ($timepicker.$date || hours[midIndex].date).getHours() < 12, 
                    scope.timeSeparator = formats[1], $timepicker.$isBuilt = !0;
                }, $timepicker.$isSelected = function(date, index) {
                    return $timepicker.$date ? 0 === index ? date.getHours() === $timepicker.$date.getHours() : 1 === index ? date.getMinutes() === $timepicker.$date.getMinutes() : void 0 : !1;
                }, $timepicker.$isDisabled = function(date, index) {
                    var selectedTime;
                    return 0 === index ? selectedTime = date.getTime() + 6e4 * viewDate.minute : 1 === index && (selectedTime = date.getTime() + 36e5 * viewDate.hour), 
                    selectedTime < 1 * options.minTime || selectedTime > 1 * options.maxTime;
                }, scope.$arrowAction = function(value, index) {
                    "picker" === options.arrowBehavior ? $timepicker.$setTimeByStep(value, index) : $timepicker.$moveIndex(value, index);
                }, $timepicker.$setTimeByStep = function(value, index) {
                    {
                        var newDate = new Date($timepicker.$date), hours = newDate.getHours(), minutes = (dateFilter(newDate, "h").length, 
                        newDate.getMinutes());
                        dateFilter(newDate, "mm").length;
                    }
                    0 === index ? newDate.setHours(hours - parseInt(options.hourStep, 10) * value) : newDate.setMinutes(minutes - parseInt(options.minuteStep, 10) * value), 
                    $timepicker.select(newDate, index, !0), parentScope.$digest();
                }, $timepicker.$moveIndex = function(value, index) {
                    var targetDate;
                    0 === index ? (targetDate = new Date(1970, 0, 1, viewDate.hour + value * options.length, viewDate.minute), 
                    angular.extend(viewDate, {
                        hour: targetDate.getHours()
                    })) : 1 === index && (targetDate = new Date(1970, 0, 1, viewDate.hour, viewDate.minute + value * options.length * options.minuteStep), 
                    angular.extend(viewDate, {
                        minute: targetDate.getMinutes()
                    })), $timepicker.$build();
                }, $timepicker.$onMouseDown = function(evt) {
                    if ("input" !== evt.target.nodeName.toLowerCase() && evt.preventDefault(), evt.stopPropagation(), 
                    isTouch) {
                        var targetEl = angular.element(evt.target);
                        "button" !== targetEl[0].nodeName.toLowerCase() && (targetEl = targetEl.parent()), 
                        targetEl.triggerHandler("click");
                    }
                }, $timepicker.$onKeyDown = function(evt) {
                    if (/(38|37|39|40|13)/.test(evt.keyCode) && !evt.shiftKey && !evt.altKey) {
                        if (evt.preventDefault(), evt.stopPropagation(), 13 === evt.keyCode) return $timepicker.hide(!0);
                        var newDate = new Date($timepicker.$date), hours = newDate.getHours(), hoursLength = dateFilter(newDate, "h").length, minutes = newDate.getMinutes(), minutesLength = dateFilter(newDate, "mm").length, lateralMove = /(37|39)/.test(evt.keyCode), count = 2 + 1 * !!formats[3];
                        lateralMove && (37 === evt.keyCode ? selectedIndex = 1 > selectedIndex ? count - 1 : selectedIndex - 1 : 39 === evt.keyCode && (selectedIndex = count - 1 > selectedIndex ? selectedIndex + 1 : 0));
                        var selectRange = [ 0, hoursLength ];
                        0 === selectedIndex ? (38 === evt.keyCode ? newDate.setHours(hours - parseInt(options.hourStep, 10)) : 40 === evt.keyCode && newDate.setHours(hours + parseInt(options.hourStep, 10)), 
                        selectRange = [ 0, hoursLength ]) : 1 === selectedIndex ? (38 === evt.keyCode ? newDate.setMinutes(minutes - parseInt(options.minuteStep, 10)) : 40 === evt.keyCode && newDate.setMinutes(minutes + parseInt(options.minuteStep, 10)), 
                        selectRange = [ hoursLength + 1, hoursLength + 1 + minutesLength ]) : 2 === selectedIndex && (lateralMove || $timepicker.switchMeridian(), 
                        selectRange = [ hoursLength + 1 + minutesLength + 1, hoursLength + 1 + minutesLength + 3 ]), 
                        $timepicker.select(newDate, selectedIndex, !0), createSelection(selectRange[0], selectRange[1]), 
                        parentScope.$digest();
                    }
                };
                var _init = $timepicker.init;
                $timepicker.init = function() {
                    return isNative && options.useNative ? (element.prop("type", "time"), void element.css("-webkit-appearance", "textfield")) : (isTouch && (element.prop("type", "text"), 
                    element.attr("readonly", "true"), element.on("click", focusElement)), void _init());
                };
                var _destroy = $timepicker.destroy;
                $timepicker.destroy = function() {
                    isNative && options.useNative && element.off("click", focusElement), _destroy();
                };
                var _show = $timepicker.show;
                $timepicker.show = function() {
                    _show(), setTimeout(function() {
                        $timepicker.$element.on(isTouch ? "touchstart" : "mousedown", $timepicker.$onMouseDown), 
                        options.keyboard && element.on("keydown", $timepicker.$onKeyDown);
                    });
                };
                var _hide = $timepicker.hide;
                return $timepicker.hide = function(blur) {
                    $timepicker.$element.off(isTouch ? "touchstart" : "mousedown", $timepicker.$onMouseDown), 
                    options.keyboard && element.off("keydown", $timepicker.$onKeyDown), _hide(blur);
                }, $timepicker;
            }
            var isNative = (angular.element($window.document.body), /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent)), isTouch = "createTouch" in $window.document && isNative;
            return defaults.lang || (defaults.lang = $locale.id), timepickerFactory.defaults = defaults, 
            timepickerFactory;
        } ];
    }).directive("bsTimepicker", [ "$window", "$parse", "$q", "$locale", "dateFilter", "$timepicker", "$dateParser", "$timeout", function($window, $parse, $q, $locale, dateFilter, $timepicker, $dateParser) {
        {
            var defaults = $timepicker.defaults, isNative = /(ip(a|o)d|iphone|android)/gi.test($window.navigator.userAgent);
            $window.requestAnimationFrame || $window.setTimeout;
        }
        return {
            restrict: "EAC",
            require: "ngModel",
            link: function(scope, element, attr, controller) {
                var options = {
                    scope: scope,
                    controller: controller
                };
                angular.forEach([ "placement", "container", "delay", "trigger", "keyboard", "html", "animation", "template", "autoclose", "timeType", "timeFormat", "modelTimeFormat", "useNative", "hourStep", "minuteStep", "length", "arrowBehavior" ], function(key) {
                    angular.isDefined(attr[key]) && (options[key] = attr[key]);
                }), attr.bsShow && scope.$watch(attr.bsShow, function(newValue) {
                    timepicker && angular.isDefined(newValue) && (angular.isString(newValue) && (newValue = !!newValue.match(",?(timepicker),?")), 
                    newValue === !0 ? timepicker.show() : timepicker.hide());
                }), isNative && (options.useNative || defaults.useNative) && (options.timeFormat = "HH:mm");
                var timepicker = $timepicker(element, controller, options);
                options = timepicker.$options;
                var dateParser = $dateParser({
                    format: options.timeFormat,
                    lang: options.lang
                });
                angular.forEach([ "minTime", "maxTime" ], function(key) {
                    angular.isDefined(attr[key]) && attr.$observe(key, function(newValue) {
                        timepicker.$options[key] = "now" === newValue ? new Date().setFullYear(1970, 0, 1) : angular.isString(newValue) && newValue.match(/^".+"$/) ? +new Date(newValue.substr(1, newValue.length - 2)) : dateParser.parse(newValue, new Date(1970, 0, 1, 0)), 
                        !isNaN(timepicker.$options[key]) && timepicker.$build();
                    });
                }), scope.$watch(attr.ngModel, function() {
                    timepicker.update(controller.$dateValue);
                }, !0), controller.$parsers.unshift(function(viewValue) {
                    if (!viewValue) return void controller.$setValidity("date", !0);
                    var parsedTime = angular.isDate(viewValue) ? viewValue : dateParser.parse(viewValue, controller.$dateValue);
                    if (!parsedTime || isNaN(parsedTime.getTime())) controller.$setValidity("date", !1); else {
                        var isValid = parsedTime.getTime() >= options.minTime && parsedTime.getTime() <= options.maxTime;
                        controller.$setValidity("date", isValid), isValid && (controller.$dateValue = parsedTime);
                    }
                    return "string" === options.timeType ? dateFilter(parsedTime, options.modelTimeFormat || options.timeFormat) : "number" === options.timeType ? controller.$dateValue.getTime() : "iso" === options.timeType ? controller.$dateValue.toISOString() : new Date(controller.$dateValue);
                }), controller.$formatters.push(function(modelValue) {
                    var date;
                    return date = angular.isUndefined(modelValue) || null === modelValue ? 0/0 : angular.isDate(modelValue) ? modelValue : "string" === options.timeType ? dateParser.parse(modelValue, null, options.modelTimeFormat) : new Date(modelValue), 
                    controller.$dateValue = date, controller.$dateValue;
                }), controller.$render = function() {
                    element.val(!controller.$dateValue || isNaN(controller.$dateValue.getTime()) ? "" : dateFilter(controller.$dateValue, options.timeFormat));
                }, scope.$on("$destroy", function() {
                    timepicker && timepicker.destroy(), options = null, timepicker = null;
                });
            }
        };
    } ]), angular.module("mgcrea.ngStrap.tooltip", [ "mgcrea.ngStrap.helpers.dimensions" ]).provider("$tooltip", function() {
        var defaults = this.defaults = {
            animation: "am-fade",
            customClass: "",
            prefixClass: "tooltip",
            prefixEvent: "tooltip",
            container: !1,
            target: !1,
            placement: "top",
            template: "tooltip/tooltip.tpl.html",
            contentTemplate: !1,
            trigger: "hover focus",
            keyboard: !1,
            html: !1,
            show: !1,
            title: "",
            type: "",
            delay: 0
        };
        this.$get = [ "$window", "$rootScope", "$compile", "$q", "$templateCache", "$http", "$animate", "dimensions", "$$rAF", function($window, $rootScope, $compile, $q, $templateCache, $http, $animate, dimensions, $$rAF) {
            function TooltipFactory(element, config) {
                function getPosition() {
                    return "body" === options.container ? dimensions.offset(options.target[0] || element[0]) : dimensions.position(options.target[0] || element[0]);
                }
                function getCalculatedOffset(placement, position, actualWidth, actualHeight) {
                    var offset, split = placement.split("-");
                    switch (split[0]) {
                      case "right":
                        offset = {
                            top: position.top + position.height / 2 - actualHeight / 2,
                            left: position.left + position.width
                        };
                        break;

                      case "bottom":
                        offset = {
                            top: position.top + position.height,
                            left: position.left + position.width / 2 - actualWidth / 2
                        };
                        break;

                      case "left":
                        offset = {
                            top: position.top + position.height / 2 - actualHeight / 2,
                            left: position.left - actualWidth
                        };
                        break;

                      default:
                        offset = {
                            top: position.top - actualHeight,
                            left: position.left + position.width / 2 - actualWidth / 2
                        };
                    }
                    if (!split[1]) return offset;
                    if ("top" === split[0] || "bottom" === split[0]) switch (split[1]) {
                      case "left":
                        offset.left = position.left;
                        break;

                      case "right":
                        offset.left = position.left + position.width - actualWidth;
                    } else if ("left" === split[0] || "right" === split[0]) switch (split[1]) {
                      case "top":
                        offset.top = position.top - actualHeight;
                        break;

                      case "bottom":
                        offset.top = position.top + position.height;
                    }
                    return offset;
                }
                var $tooltip = {}, nodeName = element[0].nodeName.toLowerCase(), options = $tooltip.$options = angular.extend({}, defaults, config);
                $tooltip.$promise = fetchTemplate(options.template);
                var scope = $tooltip.$scope = options.scope && options.scope.$new() || $rootScope.$new();
                options.delay && angular.isString(options.delay) && (options.delay = parseFloat(options.delay)), 
                options.title && ($tooltip.$scope.title = options.title), scope.$hide = function() {
                    scope.$$postDigest(function() {
                        $tooltip.hide();
                    });
                }, scope.$show = function() {
                    scope.$$postDigest(function() {
                        $tooltip.show();
                    });
                }, scope.$toggle = function() {
                    scope.$$postDigest(function() {
                        $tooltip.toggle();
                    });
                }, $tooltip.$isShown = scope.$isShown = !1;
                var timeout, hoverState;
                options.contentTemplate && ($tooltip.$promise = $tooltip.$promise.then(function(template) {
                    var templateEl = angular.element(template);
                    return fetchTemplate(options.contentTemplate).then(function(contentTemplate) {
                        var contentEl = findElement('[ng-bind="content"]', templateEl[0]);
                        return contentEl.length || (contentEl = findElement('[ng-bind="title"]', templateEl[0])), 
                        contentEl.removeAttr("ng-bind").html(contentTemplate), templateEl[0].outerHTML;
                    });
                }));
                var tipLinker, tipElement, tipTemplate, tipContainer;
                return $tooltip.$promise.then(function(template) {
                    angular.isObject(template) && (template = template.data), options.html && (template = template.replace(htmlReplaceRegExp, 'ng-bind-html="')), 
                    template = trim.apply(template), tipTemplate = template, tipLinker = $compile(template), 
                    $tooltip.init();
                }), $tooltip.init = function() {
                    options.delay && angular.isNumber(options.delay) && (options.delay = {
                        show: options.delay,
                        hide: options.delay
                    }), "self" === options.container ? tipContainer = element : angular.isElement(options.container) ? tipContainer = options.container : options.container && (tipContainer = findElement(options.container));
                    var triggers = options.trigger.split(" ");
                    angular.forEach(triggers, function(trigger) {
                        "click" === trigger ? element.on("click", $tooltip.toggle) : "manual" !== trigger && (element.on("hover" === trigger ? "mouseenter" : "focus", $tooltip.enter), 
                        element.on("hover" === trigger ? "mouseleave" : "blur", $tooltip.leave), "button" === nodeName && "hover" !== trigger && element.on(isTouch ? "touchstart" : "mousedown", $tooltip.$onFocusElementMouseDown));
                    }), options.target && (options.target = angular.isElement(options.target) ? options.target : findElement(options.target)), 
                    options.show && scope.$$postDigest(function() {
                        "focus" === options.trigger ? element[0].focus() : $tooltip.show();
                    });
                }, $tooltip.destroy = function() {
                    for (var triggers = options.trigger.split(" "), i = triggers.length; i--; ) {
                        var trigger = triggers[i];
                        "click" === trigger ? element.off("click", $tooltip.toggle) : "manual" !== trigger && (element.off("hover" === trigger ? "mouseenter" : "focus", $tooltip.enter), 
                        element.off("hover" === trigger ? "mouseleave" : "blur", $tooltip.leave), "button" === nodeName && "hover" !== trigger && element.off(isTouch ? "touchstart" : "mousedown", $tooltip.$onFocusElementMouseDown));
                    }
                    tipElement && (tipElement.remove(), tipElement = null), clearTimeout(timeout), scope.$destroy();
                }, $tooltip.enter = function() {
                    return clearTimeout(timeout), hoverState = "in", options.delay && options.delay.show ? void (timeout = setTimeout(function() {
                        "in" === hoverState && $tooltip.show();
                    }, options.delay.show)) : $tooltip.show();
                }, $tooltip.show = function() {
                    scope.$emit(options.prefixEvent + ".show.before", $tooltip);
                    var parent = options.container ? tipContainer : null, after = options.container ? null : element;
                    tipElement && tipElement.remove(), tipElement = $tooltip.$element = tipLinker(scope, function() {}), 
                    tipElement.css({
                        top: "-9999px",
                        left: "-9999px",
                        display: "block",
                        visibility: "hidden"
                    }).addClass(options.placement), options.animation && tipElement.addClass(options.animation), 
                    options.type && tipElement.addClass(options.prefixClass + "-" + options.type), options.customClass && tipElement.addClass(options.customClass), 
                    $animate.enter(tipElement, parent, after, function() {
                        scope.$emit(options.prefixEvent + ".show", $tooltip);
                    }), $tooltip.$isShown = scope.$isShown = !0, scope.$$phase || scope.$root && scope.$root.$$phase || scope.$digest(), 
                    $$rAF(function() {
                        $tooltip.$applyPlacement(), tipElement.css({
                            visibility: "visible"
                        });
                    }), options.keyboard && ("focus" !== options.trigger ? ($tooltip.focus(), tipElement.on("keyup", $tooltip.$onKeyUp)) : element.on("keyup", $tooltip.$onFocusKeyUp));
                }, $tooltip.leave = function() {
                    return clearTimeout(timeout), hoverState = "out", options.delay && options.delay.hide ? void (timeout = setTimeout(function() {
                        "out" === hoverState && $tooltip.hide();
                    }, options.delay.hide)) : $tooltip.hide();
                }, $tooltip.hide = function(blur) {
                    $tooltip.$isShown && (scope.$emit(options.prefixEvent + ".hide.before", $tooltip), 
                    $animate.leave(tipElement, function() {
                        return scope.$emit(options.prefixEvent + ".hide", $tooltip), blur && "focus" === options.trigger ? element[0].blur() : void 0;
                    }), $tooltip.$isShown = scope.$isShown = !1, scope.$$phase || scope.$root && scope.$root.$$phase || scope.$digest(), 
                    options.keyboard && null !== tipElement && tipElement.off("keyup", $tooltip.$onKeyUp));
                }, $tooltip.toggle = function() {
                    $tooltip.$isShown ? $tooltip.leave() : $tooltip.enter();
                }, $tooltip.focus = function() {
                    tipElement[0].focus();
                }, $tooltip.$applyPlacement = function() {
                    if (tipElement) {
                        var elementPosition = getPosition(), tipWidth = tipElement.prop("offsetWidth"), tipHeight = tipElement.prop("offsetHeight"), tipPosition = getCalculatedOffset(options.placement, elementPosition, tipWidth, tipHeight);
                        tipPosition.top += "px", tipPosition.left += "px", tipElement.css(tipPosition);
                    }
                }, $tooltip.$onKeyUp = function(evt) {
                    27 === evt.which && $tooltip.$isShown && ($tooltip.hide(), evt.stopPropagation());
                }, $tooltip.$onFocusKeyUp = function(evt) {
                    27 === evt.which && (element[0].blur(), evt.stopPropagation());
                }, $tooltip.$onFocusElementMouseDown = function(evt) {
                    evt.preventDefault(), evt.stopPropagation(), $tooltip.$isShown ? element[0].blur() : element[0].focus();
                }, $tooltip;
            }
            function findElement(query, element) {
                return angular.element((element || document).querySelectorAll(query));
            }
            function fetchTemplate(template) {
                return $q.when($templateCache.get(template) || $http.get(template)).then(function(res) {
                    return angular.isObject(res) ? ($templateCache.put(template, res.data), res.data) : res;
                });
            }
            var trim = String.prototype.trim, isTouch = "createTouch" in $window.document, htmlReplaceRegExp = /ng-bind="/gi;
            return TooltipFactory;
        } ];
    }).directive("bsTooltip", [ "$window", "$location", "$sce", "$tooltip", "$$rAF", function($window, $location, $sce, $tooltip, $$rAF) {
        return {
            restrict: "EAC",
            scope: !0,
            link: function(scope, element, attr) {
                var options = {
                    scope: scope
                };
                angular.forEach([ "template", "contentTemplate", "placement", "container", "target", "delay", "trigger", "keyboard", "html", "animation", "type", "customClass" ], function(key) {
                    angular.isDefined(attr[key]) && (options[key] = attr[key]);
                }), angular.forEach([ "title" ], function(key) {
                    attr.$observe(key, function(newValue, oldValue) {
                        scope[key] = $sce.trustAsHtml(newValue), angular.isDefined(oldValue) && $$rAF(function() {
                            tooltip && tooltip.$applyPlacement();
                        });
                    });
                }), attr.bsTooltip && scope.$watch(attr.bsTooltip, function(newValue, oldValue) {
                    angular.isObject(newValue) ? angular.extend(scope, newValue) : scope.title = newValue, 
                    angular.isDefined(oldValue) && $$rAF(function() {
                        tooltip && tooltip.$applyPlacement();
                    });
                }, !0), attr.bsShow && scope.$watch(attr.bsShow, function(newValue) {
                    tooltip && angular.isDefined(newValue) && (angular.isString(newValue) && (newValue = !!newValue.match(",?(tooltip),?")), 
                    newValue === !0 ? tooltip.show() : tooltip.hide());
                });
                var tooltip = $tooltip(element, options);
                scope.$on("$destroy", function() {
                    tooltip && tooltip.destroy(), options = null, tooltip = null;
                });
            }
        };
    } ]), angular.module("mgcrea.ngStrap.typeahead", [ "mgcrea.ngStrap.tooltip", "mgcrea.ngStrap.helpers.parseOptions" ]).provider("$typeahead", function() {
        var defaults = this.defaults = {
            animation: "am-fade",
            prefixClass: "typeahead",
            prefixEvent: "$typeahead",
            placement: "bottom-left",
            template: "typeahead/typeahead.tpl.html",
            trigger: "focus",
            container: !1,
            keyboard: !0,
            html: !1,
            delay: 0,
            minLength: 1,
            filter: "filter",
            limit: 6
        };
        this.$get = [ "$window", "$rootScope", "$tooltip", function($window, $rootScope, $tooltip) {
            function TypeaheadFactory(element, controller, config) {
                var $typeahead = {}, options = angular.extend({}, defaults, config);
                $typeahead = $tooltip(element, options);
                var parentScope = config.scope, scope = $typeahead.$scope;
                scope.$resetMatches = function() {
                    scope.$matches = [], scope.$activeIndex = 0;
                }, scope.$resetMatches(), scope.$activate = function(index) {
                    scope.$$postDigest(function() {
                        $typeahead.activate(index);
                    });
                }, scope.$select = function(index) {
                    scope.$$postDigest(function() {
                        $typeahead.select(index);
                    });
                }, scope.$isVisible = function() {
                    return $typeahead.$isVisible();
                }, $typeahead.update = function(matches) {
                    scope.$matches = matches, scope.$activeIndex >= matches.length && (scope.$activeIndex = 0);
                }, $typeahead.activate = function(index) {
                    scope.$activeIndex = index;
                }, $typeahead.select = function(index) {
                    var value = scope.$matches[index].value;
                    controller.$setViewValue(value), controller.$render(), scope.$resetMatches(), parentScope && parentScope.$digest(), 
                    scope.$emit(options.prefixEvent + ".select", value, index);
                }, $typeahead.$isVisible = function() {
                    return options.minLength && controller ? scope.$matches.length && angular.isString(controller.$viewValue) && controller.$viewValue.length >= options.minLength : !!scope.$matches.length;
                }, $typeahead.$getIndex = function(value) {
                    var l = scope.$matches.length, i = l;
                    if (l) {
                        for (i = l; i-- && scope.$matches[i].value !== value; ) ;
                        if (!(0 > i)) return i;
                    }
                }, $typeahead.$onMouseDown = function(evt) {
                    evt.preventDefault(), evt.stopPropagation();
                }, $typeahead.$onKeyDown = function(evt) {
                    /(38|40|13)/.test(evt.keyCode) && ($typeahead.$isVisible() && (evt.preventDefault(), 
                    evt.stopPropagation()), 13 === evt.keyCode && scope.$matches.length ? $typeahead.select(scope.$activeIndex) : 38 === evt.keyCode && scope.$activeIndex > 0 ? scope.$activeIndex-- : 40 === evt.keyCode && scope.$activeIndex < scope.$matches.length - 1 ? scope.$activeIndex++ : angular.isUndefined(scope.$activeIndex) && (scope.$activeIndex = 0), 
                    scope.$digest());
                };
                var show = $typeahead.show;
                $typeahead.show = function() {
                    show(), setTimeout(function() {
                        $typeahead.$element.on("mousedown", $typeahead.$onMouseDown), options.keyboard && element.on("keydown", $typeahead.$onKeyDown);
                    });
                };
                var hide = $typeahead.hide;
                return $typeahead.hide = function() {
                    $typeahead.$element.off("mousedown", $typeahead.$onMouseDown), options.keyboard && element.off("keydown", $typeahead.$onKeyDown), 
                    hide();
                }, $typeahead;
            }
            angular.element($window.document.body);
            return TypeaheadFactory.defaults = defaults, TypeaheadFactory;
        } ];
    }).directive("bsTypeahead", [ "$window", "$parse", "$q", "$typeahead", "$parseOptions", function($window, $parse, $q, $typeahead, $parseOptions) {
        var defaults = $typeahead.defaults;
        return {
            restrict: "EAC",
            require: "ngModel",
            link: function(scope, element, attr, controller) {
                var options = {
                    scope: scope
                };
                angular.forEach([ "placement", "container", "delay", "trigger", "keyboard", "html", "animation", "template", "filter", "limit", "minLength", "watchOptions", "selectMode" ], function(key) {
                    angular.isDefined(attr[key]) && (options[key] = attr[key]);
                });
                var filter = options.filter || defaults.filter, limit = options.limit || defaults.limit, ngOptions = attr.ngOptions;
                filter && (ngOptions += " | " + filter + ":$viewValue"), limit && (ngOptions += " | limitTo:" + limit);
                var parsedOptions = $parseOptions(ngOptions), typeahead = $typeahead(element, controller, options);
                if (options.watchOptions) {
                    var watchedOptions = parsedOptions.$match[7].replace(/\|.+/, "").replace(/\(.*\)/g, "").trim();
                    scope.$watch(watchedOptions, function() {
                        parsedOptions.valuesFn(scope, controller).then(function(values) {
                            typeahead.update(values), controller.$render();
                        });
                    }, !0);
                }
                scope.$watch(attr.ngModel, function(newValue) {
                    scope.$modelValue = newValue, parsedOptions.valuesFn(scope, controller).then(function(values) {
                        if (options.selectMode && !values.length && newValue.length > 0) return void controller.$setViewValue(controller.$viewValue.substring(0, controller.$viewValue.length - 1));
                        values.length > limit && (values = values.slice(0, limit));
                        var isVisible = typeahead.$isVisible();
                        isVisible && typeahead.update(values), (1 !== values.length || values[0].value !== newValue) && (!isVisible && typeahead.update(values), 
                        controller.$render());
                    });
                }), controller.$render = function() {
                    if (controller.$isEmpty(controller.$viewValue)) return element.val("");
                    var index = typeahead.$getIndex(controller.$modelValue), selected = angular.isDefined(index) ? typeahead.$scope.$matches[index].label : controller.$viewValue;
                    selected = angular.isObject(selected) ? selected.label : selected, element.val(selected.replace(/<(?:.|\n)*?>/gm, "").trim());
                }, scope.$on("$destroy", function() {
                    typeahead && typeahead.destroy(), options = null, typeahead = null;
                });
            }
        };
    } ]);
}(window, document), define("angular-strap", [ "angular" ], function() {}), function() {
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
}.call(this), !function() {
    function n(n, t) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0/0;
    }
    function t(n) {
        return null != n && !isNaN(n);
    }
    function e(n) {
        return {
            left: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r; ) {
                    var i = r + u >>> 1;
                    n(t[i], e) < 0 ? r = i + 1 : u = i;
                }
                return r;
            },
            right: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r; ) {
                    var i = r + u >>> 1;
                    n(t[i], e) > 0 ? u = i : r = i + 1;
                }
                return r;
            }
        };
    }
    function r(n) {
        return n.length;
    }
    function u(n) {
        for (var t = 1; n * t % 1; ) t *= 10;
        return t;
    }
    function i(n, t) {
        try {
            for (var e in t) Object.defineProperty(n.prototype, e, {
                value: t[e],
                enumerable: !1
            });
        } catch (r) {
            n.prototype = t;
        }
    }
    function o() {}
    function a(n) {
        return ia + n in this;
    }
    function c(n) {
        return n = ia + n, n in this && delete this[n];
    }
    function s() {
        var n = [];
        return this.forEach(function(t) {
            n.push(t);
        }), n;
    }
    function l() {
        var n = 0;
        for (var t in this) t.charCodeAt(0) === oa && ++n;
        return n;
    }
    function f() {
        for (var n in this) if (n.charCodeAt(0) === oa) return !1;
        return !0;
    }
    function h() {}
    function g(n, t, e) {
        return function() {
            var r = e.apply(t, arguments);
            return r === t ? n : r;
        };
    }
    function p(n, t) {
        if (t in n) return t;
        t = t.charAt(0).toUpperCase() + t.substring(1);
        for (var e = 0, r = aa.length; r > e; ++e) {
            var u = aa[e] + t;
            if (u in n) return u;
        }
    }
    function v() {}
    function d() {}
    function m(n) {
        function t() {
            for (var t, r = e, u = -1, i = r.length; ++u < i; ) (t = r[u].on) && t.apply(this, arguments);
            return n;
        }
        var e = [], r = new o();
        return t.on = function(t, u) {
            var i, o = r.get(t);
            return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), 
            r.remove(t)), u && e.push(r.set(t, {
                on: u
            })), n);
        }, t;
    }
    function y() {
        Zo.event.preventDefault();
    }
    function x() {
        for (var n, t = Zo.event; n = t.sourceEvent; ) t = n;
        return t;
    }
    function M(n) {
        for (var t = new d(), e = 0, r = arguments.length; ++e < r; ) t[arguments[e]] = m(t);
        return t.of = function(e, r) {
            return function(u) {
                try {
                    var i = u.sourceEvent = Zo.event;
                    u.target = n, Zo.event = u, t[u.type].apply(e, r);
                } finally {
                    Zo.event = i;
                }
            };
        }, t;
    }
    function _(n) {
        return sa(n, pa), n;
    }
    function b(n) {
        return "function" == typeof n ? n : function() {
            return la(n, this);
        };
    }
    function w(n) {
        return "function" == typeof n ? n : function() {
            return fa(n, this);
        };
    }
    function S(n, t) {
        function e() {
            this.removeAttribute(n);
        }
        function r() {
            this.removeAttributeNS(n.space, n.local);
        }
        function u() {
            this.setAttribute(n, t);
        }
        function i() {
            this.setAttributeNS(n.space, n.local, t);
        }
        function o() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttribute(n) : this.setAttribute(n, e);
        }
        function a() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
        }
        return n = Zo.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u;
    }
    function k(n) {
        return n.trim().replace(/\s+/g, " ");
    }
    function E(n) {
        return new RegExp("(?:^|\\s+)" + Zo.requote(n) + "(?:\\s+|$)", "g");
    }
    function A(n) {
        return (n + "").trim().split(/^|\s+/);
    }
    function C(n, t) {
        function e() {
            for (var e = -1; ++e < u; ) n[e](this, t);
        }
        function r() {
            for (var e = -1, r = t.apply(this, arguments); ++e < u; ) n[e](this, r);
        }
        n = A(n).map(N);
        var u = n.length;
        return "function" == typeof t ? r : e;
    }
    function N(n) {
        var t = E(n);
        return function(e, r) {
            if (u = e.classList) return r ? u.add(n) : u.remove(n);
            var u = e.getAttribute("class") || "";
            r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", k(u + " " + n))) : e.setAttribute("class", k(u.replace(t, " ")));
        };
    }
    function z(n, t, e) {
        function r() {
            this.style.removeProperty(n);
        }
        function u() {
            this.style.setProperty(n, t, e);
        }
        function i() {
            var r = t.apply(this, arguments);
            null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
        }
        return null == t ? r : "function" == typeof t ? i : u;
    }
    function L(n, t) {
        function e() {
            delete this[n];
        }
        function r() {
            this[n] = t;
        }
        function u() {
            var e = t.apply(this, arguments);
            null == e ? delete this[n] : this[n] = e;
        }
        return null == t ? e : "function" == typeof t ? u : r;
    }
    function T(n) {
        return "function" == typeof n ? n : (n = Zo.ns.qualify(n)).local ? function() {
            return this.ownerDocument.createElementNS(n.space, n.local);
        } : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, n);
        };
    }
    function q(n) {
        return {
            __data__: n
        };
    }
    function R(n) {
        return function() {
            return ga(this, n);
        };
    }
    function D(t) {
        return arguments.length || (t = n), function(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e;
        };
    }
    function P(n, t) {
        for (var e = 0, r = n.length; r > e; e++) for (var u, i = n[e], o = 0, a = i.length; a > o; o++) (u = i[o]) && t(u, o, e);
        return n;
    }
    function U(n) {
        return sa(n, da), n;
    }
    function j(n) {
        var t, e;
        return function(r, u, i) {
            var o, a = n[i].update, c = a.length;
            for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c; ) ;
            return o;
        };
    }
    function H() {
        var n = this.__transition__;
        n && ++n.active;
    }
    function F(n, t, e) {
        function r() {
            var t = this[o];
            t && (this.removeEventListener(n, t, t.$), delete this[o]);
        }
        function u() {
            var u = c(t, Xo(arguments));
            r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t;
        }
        function i() {
            var t, e = new RegExp("^__on([^.]+)" + Zo.requote(n) + "$");
            for (var r in this) if (t = r.match(e)) {
                var u = this[r];
                this.removeEventListener(t[1], u, u.$), delete this[r];
            }
        }
        var o = "__on" + n, a = n.indexOf("."), c = O;
        a > 0 && (n = n.substring(0, a));
        var s = ya.get(n);
        return s && (n = s, c = Y), a ? t ? u : r : t ? v : i;
    }
    function O(n, t) {
        return function(e) {
            var r = Zo.event;
            Zo.event = e, t[0] = this.__data__;
            try {
                n.apply(this, t);
            } finally {
                Zo.event = r;
            }
        };
    }
    function Y(n, t) {
        var e = O(n, t);
        return function(n) {
            var t = this, r = n.relatedTarget;
            r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n);
        };
    }
    function I() {
        var n = ".dragsuppress-" + ++Ma, t = "click" + n, e = Zo.select(Wo).on("touchmove" + n, y).on("dragstart" + n, y).on("selectstart" + n, y);
        if (xa) {
            var r = Bo.style, u = r[xa];
            r[xa] = "none";
        }
        return function(i) {
            function o() {
                e.on(t, null);
            }
            e.on(n, null), xa && (r[xa] = u), i && (e.on(t, function() {
                y(), o();
            }, !0), setTimeout(o, 0));
        };
    }
    function Z(n, t) {
        t.changedTouches && (t = t.changedTouches[0]);
        var e = n.ownerSVGElement || n;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            if (0 > _a && (Wo.scrollX || Wo.scrollY)) {
                e = Zo.select("body").append("svg").style({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    padding: 0,
                    border: "none"
                }, "important");
                var u = e[0][0].getScreenCTM();
                _a = !(u.f || u.e), e.remove();
            }
            return _a ? (r.x = t.pageX, r.y = t.pageY) : (r.x = t.clientX, r.y = t.clientY), 
            r = r.matrixTransform(n.getScreenCTM().inverse()), [ r.x, r.y ];
        }
        var i = n.getBoundingClientRect();
        return [ t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop ];
    }
    function V() {
        return Zo.event.changedTouches[0].identifier;
    }
    function X() {
        return Zo.event.target;
    }
    function $() {
        return Wo;
    }
    function B(n) {
        return n > 0 ? 1 : 0 > n ? -1 : 0;
    }
    function W(n, t, e) {
        return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0]);
    }
    function J(n) {
        return n > 1 ? 0 : -1 > n ? ba : Math.acos(n);
    }
    function G(n) {
        return n > 1 ? Sa : -1 > n ? -Sa : Math.asin(n);
    }
    function K(n) {
        return ((n = Math.exp(n)) - 1 / n) / 2;
    }
    function Q(n) {
        return ((n = Math.exp(n)) + 1 / n) / 2;
    }
    function nt(n) {
        return ((n = Math.exp(2 * n)) - 1) / (n + 1);
    }
    function tt(n) {
        return (n = Math.sin(n / 2)) * n;
    }
    function et() {}
    function rt(n, t, e) {
        return this instanceof rt ? (this.h = +n, this.s = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof rt ? new rt(n.h, n.s, n.l) : mt("" + n, yt, rt) : new rt(n, t, e);
    }
    function ut(n, t, e) {
        function r(n) {
            return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i;
        }
        function u(n) {
            return Math.round(255 * r(n));
        }
        var i, o;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, 
        e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, 
        new gt(u(n + 120), u(n), u(n - 120));
    }
    function it(n, t, e) {
        return this instanceof it ? (this.h = +n, this.c = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof it ? new it(n.h, n.c, n.l) : n instanceof at ? st(n.l, n.a, n.b) : st((n = xt((n = Zo.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new it(n, t, e);
    }
    function ot(n, t, e) {
        return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new at(e, Math.cos(n *= Aa) * t, Math.sin(n) * t);
    }
    function at(n, t, e) {
        return this instanceof at ? (this.l = +n, this.a = +t, void (this.b = +e)) : arguments.length < 2 ? n instanceof at ? new at(n.l, n.a, n.b) : n instanceof it ? ot(n.l, n.c, n.h) : xt((n = gt(n)).r, n.g, n.b) : new at(n, t, e);
    }
    function ct(n, t, e) {
        var r = (n + 16) / 116, u = r + t / 500, i = r - e / 200;
        return u = lt(u) * ja, r = lt(r) * Ha, i = lt(i) * Fa, new gt(ht(3.2404542 * u - 1.5371385 * r - .4985314 * i), ht(-.969266 * u + 1.8760108 * r + .041556 * i), ht(.0556434 * u - .2040259 * r + 1.0572252 * i));
    }
    function st(n, t, e) {
        return n > 0 ? new it(Math.atan2(e, t) * Ca, Math.sqrt(t * t + e * e), n) : new it(0/0, 0/0, n);
    }
    function lt(n) {
        return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037;
    }
    function ft(n) {
        return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29;
    }
    function ht(n) {
        return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055));
    }
    function gt(n, t, e) {
        return this instanceof gt ? (this.r = ~~n, this.g = ~~t, void (this.b = ~~e)) : arguments.length < 2 ? n instanceof gt ? new gt(n.r, n.g, n.b) : mt("" + n, gt, ut) : new gt(n, t, e);
    }
    function pt(n) {
        return new gt(n >> 16, 255 & n >> 8, 255 & n);
    }
    function vt(n) {
        return pt(n) + "";
    }
    function dt(n) {
        return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16);
    }
    function mt(n, t, e) {
        var r, u, i, o = 0, a = 0, c = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(n)) switch (u = r[2].split(","), r[1]) {
          case "hsl":
            return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);

          case "rgb":
            return t(_t(u[0]), _t(u[1]), _t(u[2]));
        }
        return (i = Ia.get(n)) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.substring(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4, 
        o = o >> 4 | o, a = 240 & i, a = a >> 4 | a, c = 15 & i, c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16, 
        a = (65280 & i) >> 8, c = 255 & i)), t(o, a, c));
    }
    function yt(n, t, e) {
        var r, u, i = Math.min(n /= 255, t /= 255, e /= 255), o = Math.max(n, t, e), a = o - i, c = (o + i) / 2;
        return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, 
        r *= 60) : (r = 0/0, u = c > 0 && 1 > c ? 0 : r), new rt(r, u, c);
    }
    function xt(n, t, e) {
        n = Mt(n), t = Mt(t), e = Mt(e);
        var r = ft((.4124564 * n + .3575761 * t + .1804375 * e) / ja), u = ft((.2126729 * n + .7151522 * t + .072175 * e) / Ha), i = ft((.0193339 * n + .119192 * t + .9503041 * e) / Fa);
        return at(116 * u - 16, 500 * (r - u), 200 * (u - i));
    }
    function Mt(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
    }
    function _t(n) {
        var t = parseFloat(n);
        return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t;
    }
    function bt(n) {
        return "function" == typeof n ? n : function() {
            return n;
        };
    }
    function wt(n) {
        return n;
    }
    function St(n) {
        return function(t, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e, e = null), kt(t, e, n, r);
        };
    }
    function kt(n, t, e, r) {
        function u() {
            var n, t = c.status;
            if (!t && c.responseText || t >= 200 && 300 > t || 304 === t) {
                try {
                    n = e.call(i, c);
                } catch (r) {
                    return void o.error.call(i, r);
                }
                o.load.call(i, n);
            } else o.error.call(i, c);
        }
        var i = {}, o = Zo.dispatch("beforesend", "progress", "load", "error"), a = {}, c = new XMLHttpRequest(), s = null;
        return !Wo.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest()), 
        "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
            c.readyState > 3 && u();
        }, c.onprogress = function(n) {
            var t = Zo.event;
            Zo.event = n;
            try {
                o.progress.call(i, c);
            } finally {
                Zo.event = t;
            }
        }, i.header = function(n, t) {
            return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", 
            i);
        }, i.mimeType = function(n) {
            return arguments.length ? (t = null == n ? null : n + "", i) : t;
        }, i.responseType = function(n) {
            return arguments.length ? (s = n, i) : s;
        }, i.response = function(n) {
            return e = n, i;
        }, [ "get", "post" ].forEach(function(n) {
            i[n] = function() {
                return i.send.apply(i, [ n ].concat(Xo(arguments)));
            };
        }), i.send = function(e, r, u) {
            if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), 
            null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader) for (var l in a) c.setRequestHeader(l, a[l]);
            return null != t && c.overrideMimeType && c.overrideMimeType(t), null != s && (c.responseType = s), 
            null != u && i.on("error", u).on("load", function(n) {
                u(null, n);
            }), o.beforesend.call(i, c), c.send(null == r ? null : r), i;
        }, i.abort = function() {
            return c.abort(), i;
        }, Zo.rebind(i, o, "on"), null == r ? i : i.get(Et(r));
    }
    function Et(n) {
        return 1 === n.length ? function(t, e) {
            n(null == t ? e : null);
        } : n;
    }
    function At() {
        var n = Ct(), t = Nt() - n;
        t > 24 ? (isFinite(t) && (clearTimeout($a), $a = setTimeout(At, t)), Xa = 0) : (Xa = 1, 
        Wa(At));
    }
    function Ct() {
        var n = Date.now();
        for (Ba = Za; Ba; ) n >= Ba.t && (Ba.f = Ba.c(n - Ba.t)), Ba = Ba.n;
        return n;
    }
    function Nt() {
        for (var n, t = Za, e = 1 / 0; t; ) t.f ? t = n ? n.n = t.n : Za = t.n : (t.t < e && (e = t.t), 
        t = (n = t).n);
        return Va = n, e;
    }
    function zt(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1);
    }
    function Lt(n, t) {
        var e = Math.pow(10, 3 * ua(8 - t));
        return {
            scale: t > 8 ? function(n) {
                return n / e;
            } : function(n) {
                return n * e;
            },
            symbol: n
        };
    }
    function Tt(n) {
        var t = n.decimal, e = n.thousands, r = n.grouping, u = n.currency, i = r ? function(n) {
            for (var t = n.length, u = [], i = 0, o = r[0]; t > 0 && o > 0; ) u.push(n.substring(t -= o, t + o)), 
            o = r[i = (i + 1) % r.length];
            return u.reverse().join(e);
        } : wt;
        return function(n) {
            var e = Ga.exec(n), r = e[1] || " ", o = e[2] || ">", a = e[3] || "", c = e[4] || "", s = e[5], l = +e[6], f = e[7], h = e[8], g = e[9], p = 1, v = "", d = "", m = !1;
            switch (h && (h = +h.substring(1)), (s || "0" === r && "=" === o) && (s = r = "0", 
            o = "=", f && (l -= Math.floor((l - 1) / 4))), g) {
              case "n":
                f = !0, g = "g";
                break;

              case "%":
                p = 100, d = "%", g = "f";
                break;

              case "p":
                p = 100, d = "%", g = "r";
                break;

              case "b":
              case "o":
              case "x":
              case "X":
                "#" === c && (v = "0" + g.toLowerCase());

              case "c":
              case "d":
                m = !0, h = 0;
                break;

              case "s":
                p = -1, g = "r";
            }
            "$" === c && (v = u[0], d = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), 
            g = Ka.get(g) || qt;
            var y = s && f;
            return function(n) {
                var e = d;
                if (m && n % 1) return "";
                var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : a;
                if (0 > p) {
                    var c = Zo.formatPrefix(n, h);
                    n = c.scale(n), e = c.symbol + d;
                } else n *= p;
                n = g(n, h);
                var x = n.lastIndexOf("."), M = 0 > x ? n : n.substring(0, x), _ = 0 > x ? "" : t + n.substring(x + 1);
                !s && f && (M = i(M));
                var b = v.length + M.length + _.length + (y ? 0 : u.length), w = l > b ? new Array(b = l - b + 1).join(r) : "";
                return y && (M = i(w + M)), u += v, n = M + _, ("<" === o ? u + n + w : ">" === o ? w + u + n : "^" === o ? w.substring(0, b >>= 1) + u + n + w.substring(b) : u + (y ? n : w + n)) + e;
            };
        };
    }
    function qt(n) {
        return n + "";
    }
    function Rt() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
    }
    function Dt(n, t, e) {
        function r(t) {
            var e = n(t), r = i(e, 1);
            return r - t > t - e ? e : r;
        }
        function u(e) {
            return t(e = n(new nc(e - 1)), 1), e;
        }
        function i(n, e) {
            return t(n = new nc(+n), e), n;
        }
        function o(n, r, i) {
            var o = u(n), a = [];
            if (i > 1) for (;r > o; ) e(o) % i || a.push(new Date(+o)), t(o, 1); else for (;r > o; ) a.push(new Date(+o)), 
            t(o, 1);
            return a;
        }
        function a(n, t, e) {
            try {
                nc = Rt;
                var r = new Rt();
                return r._ = n, o(r, t, e);
            } finally {
                nc = Date;
            }
        }
        n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
        var c = n.utc = Pt(n);
        return c.floor = c, c.round = Pt(r), c.ceil = Pt(u), c.offset = Pt(i), c.range = a, 
        n;
    }
    function Pt(n) {
        return function(t, e) {
            try {
                nc = Rt;
                var r = new Rt();
                return r._ = t, n(r, e)._;
            } finally {
                nc = Date;
            }
        };
    }
    function Ut(n) {
        function t(n) {
            function t(t) {
                for (var e, u, i, o = [], a = -1, c = 0; ++a < r; ) 37 === n.charCodeAt(a) && (o.push(n.substring(c, a)), 
                null != (u = ec[e = n.charAt(++a)]) && (e = n.charAt(++a)), (i = C[e]) && (e = i(t, null == u ? "e" === e ? " " : "0" : u)), 
                o.push(e), c = a + 1);
                return o.push(n.substring(c, a)), o.join("");
            }
            var r = n.length;
            return t.parse = function(t) {
                var r = {
                    y: 1900,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0,
                    Z: null
                }, u = e(r, n, t, 0);
                if (u != t.length) return null;
                "p" in r && (r.H = r.H % 12 + 12 * r.p);
                var i = null != r.Z && nc !== Rt, o = new (i ? Rt : nc)();
                return "j" in r ? o.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (o.setFullYear(r.y, 0, 1), 
                o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), 
                o.setHours(r.H + Math.floor(r.Z / 100), r.M + r.Z % 100, r.S, r.L), i ? o._ : o;
            }, t.toString = function() {
                return n;
            }, t;
        }
        function e(n, t, e, r) {
            for (var u, i, o, a = 0, c = t.length, s = e.length; c > a; ) {
                if (r >= s) return -1;
                if (u = t.charCodeAt(a++), 37 === u) {
                    if (o = t.charAt(a++), i = N[o in ec ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0) return -1;
                } else if (u != e.charCodeAt(r++)) return -1;
            }
            return r;
        }
        function r(n, t, e) {
            b.lastIndex = 0;
            var r = b.exec(t.substring(e));
            return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1;
        }
        function u(n, t, e) {
            M.lastIndex = 0;
            var r = M.exec(t.substring(e));
            return r ? (n.w = _.get(r[0].toLowerCase()), e + r[0].length) : -1;
        }
        function i(n, t, e) {
            E.lastIndex = 0;
            var r = E.exec(t.substring(e));
            return r ? (n.m = A.get(r[0].toLowerCase()), e + r[0].length) : -1;
        }
        function o(n, t, e) {
            S.lastIndex = 0;
            var r = S.exec(t.substring(e));
            return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1;
        }
        function a(n, t, r) {
            return e(n, C.c.toString(), t, r);
        }
        function c(n, t, r) {
            return e(n, C.x.toString(), t, r);
        }
        function s(n, t, r) {
            return e(n, C.X.toString(), t, r);
        }
        function l(n, t, e) {
            var r = x.get(t.substring(e, e += 2).toLowerCase());
            return null == r ? -1 : (n.p = r, e);
        }
        var f = n.dateTime, h = n.date, g = n.time, p = n.periods, v = n.days, d = n.shortDays, m = n.months, y = n.shortMonths;
        t.utc = function(n) {
            function e(n) {
                try {
                    nc = Rt;
                    var t = new nc();
                    return t._ = n, r(t);
                } finally {
                    nc = Date;
                }
            }
            var r = t(n);
            return e.parse = function(n) {
                try {
                    nc = Rt;
                    var t = r.parse(n);
                    return t && t._;
                } finally {
                    nc = Date;
                }
            }, e.toString = r.toString, e;
        }, t.multi = t.utc.multi = re;
        var x = Zo.map(), M = Ht(v), _ = Ft(v), b = Ht(d), w = Ft(d), S = Ht(m), k = Ft(m), E = Ht(y), A = Ft(y);
        p.forEach(function(n, t) {
            x.set(n.toLowerCase(), t);
        });
        var C = {
            a: function(n) {
                return d[n.getDay()];
            },
            A: function(n) {
                return v[n.getDay()];
            },
            b: function(n) {
                return y[n.getMonth()];
            },
            B: function(n) {
                return m[n.getMonth()];
            },
            c: t(f),
            d: function(n, t) {
                return jt(n.getDate(), t, 2);
            },
            e: function(n, t) {
                return jt(n.getDate(), t, 2);
            },
            H: function(n, t) {
                return jt(n.getHours(), t, 2);
            },
            I: function(n, t) {
                return jt(n.getHours() % 12 || 12, t, 2);
            },
            j: function(n, t) {
                return jt(1 + Qa.dayOfYear(n), t, 3);
            },
            L: function(n, t) {
                return jt(n.getMilliseconds(), t, 3);
            },
            m: function(n, t) {
                return jt(n.getMonth() + 1, t, 2);
            },
            M: function(n, t) {
                return jt(n.getMinutes(), t, 2);
            },
            p: function(n) {
                return p[+(n.getHours() >= 12)];
            },
            S: function(n, t) {
                return jt(n.getSeconds(), t, 2);
            },
            U: function(n, t) {
                return jt(Qa.sundayOfYear(n), t, 2);
            },
            w: function(n) {
                return n.getDay();
            },
            W: function(n, t) {
                return jt(Qa.mondayOfYear(n), t, 2);
            },
            x: t(h),
            X: t(g),
            y: function(n, t) {
                return jt(n.getFullYear() % 100, t, 2);
            },
            Y: function(n, t) {
                return jt(n.getFullYear() % 1e4, t, 4);
            },
            Z: te,
            "%": function() {
                return "%";
            }
        }, N = {
            a: r,
            A: u,
            b: i,
            B: o,
            c: a,
            d: Wt,
            e: Wt,
            H: Gt,
            I: Gt,
            j: Jt,
            L: ne,
            m: Bt,
            M: Kt,
            p: l,
            S: Qt,
            U: Yt,
            w: Ot,
            W: It,
            x: c,
            X: s,
            y: Vt,
            Y: Zt,
            Z: Xt,
            "%": ee
        };
        return t;
    }
    function jt(n, t, e) {
        var r = 0 > n ? "-" : "", u = (r ? -n : n) + "", i = u.length;
        return r + (e > i ? new Array(e - i + 1).join(t) + u : u);
    }
    function Ht(n) {
        return new RegExp("^(?:" + n.map(Zo.requote).join("|") + ")", "i");
    }
    function Ft(n) {
        for (var t = new o(), e = -1, r = n.length; ++e < r; ) t.set(n[e].toLowerCase(), e);
        return t;
    }
    function Ot(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e, e + 1));
        return r ? (n.w = +r[0], e + r[0].length) : -1;
    }
    function Yt(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e));
        return r ? (n.U = +r[0], e + r[0].length) : -1;
    }
    function It(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e));
        return r ? (n.W = +r[0], e + r[0].length) : -1;
    }
    function Zt(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e, e + 4));
        return r ? (n.y = +r[0], e + r[0].length) : -1;
    }
    function Vt(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e, e + 2));
        return r ? (n.y = $t(+r[0]), e + r[0].length) : -1;
    }
    function Xt(n, t, e) {
        return /^[+-]\d{4}$/.test(t = t.substring(e, e + 5)) ? (n.Z = -t, e + 5) : -1;
    }
    function $t(n) {
        return n + (n > 68 ? 1900 : 2e3);
    }
    function Bt(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e, e + 2));
        return r ? (n.m = r[0] - 1, e + r[0].length) : -1;
    }
    function Wt(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e, e + 2));
        return r ? (n.d = +r[0], e + r[0].length) : -1;
    }
    function Jt(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e, e + 3));
        return r ? (n.j = +r[0], e + r[0].length) : -1;
    }
    function Gt(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e, e + 2));
        return r ? (n.H = +r[0], e + r[0].length) : -1;
    }
    function Kt(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e, e + 2));
        return r ? (n.M = +r[0], e + r[0].length) : -1;
    }
    function Qt(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e, e + 2));
        return r ? (n.S = +r[0], e + r[0].length) : -1;
    }
    function ne(n, t, e) {
        rc.lastIndex = 0;
        var r = rc.exec(t.substring(e, e + 3));
        return r ? (n.L = +r[0], e + r[0].length) : -1;
    }
    function te(n) {
        var t = n.getTimezoneOffset(), e = t > 0 ? "-" : "+", r = ~~(ua(t) / 60), u = ua(t) % 60;
        return e + jt(r, "0", 2) + jt(u, "0", 2);
    }
    function ee(n, t, e) {
        uc.lastIndex = 0;
        var r = uc.exec(t.substring(e, e + 1));
        return r ? e + r[0].length : -1;
    }
    function re(n) {
        for (var t = n.length, e = -1; ++e < t; ) n[e][0] = this(n[e][0]);
        return function(t) {
            for (var e = 0, r = n[e]; !r[1](t); ) r = n[++e];
            return r[0](t);
        };
    }
    function ue() {}
    function ie(n, t, e) {
        var r = e.s = n + t, u = r - n, i = r - u;
        e.t = n - i + (t - u);
    }
    function oe(n, t) {
        n && cc.hasOwnProperty(n.type) && cc[n.type](n, t);
    }
    function ae(n, t, e) {
        var r, u = -1, i = n.length - e;
        for (t.lineStart(); ++u < i; ) r = n[u], t.point(r[0], r[1], r[2]);
        t.lineEnd();
    }
    function ce(n, t) {
        var e = -1, r = n.length;
        for (t.polygonStart(); ++e < r; ) ae(n[e], t, 1);
        t.polygonEnd();
    }
    function se() {
        function n(n, t) {
            n *= Aa, t = t * Aa / 2 + ba / 4;
            var e = n - r, o = e >= 0 ? 1 : -1, a = o * e, c = Math.cos(t), s = Math.sin(t), l = i * s, f = u * c + l * Math.cos(a), h = l * o * Math.sin(a);
            lc.add(Math.atan2(h, f)), r = n, u = c, i = s;
        }
        var t, e, r, u, i;
        fc.point = function(o, a) {
            fc.point = n, r = (t = o) * Aa, u = Math.cos(a = (e = a) * Aa / 2 + ba / 4), i = Math.sin(a);
        }, fc.lineEnd = function() {
            n(t, e);
        };
    }
    function le(n) {
        var t = n[0], e = n[1], r = Math.cos(e);
        return [ r * Math.cos(t), r * Math.sin(t), Math.sin(e) ];
    }
    function fe(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
    }
    function he(n, t) {
        return [ n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0] ];
    }
    function ge(n, t) {
        n[0] += t[0], n[1] += t[1], n[2] += t[2];
    }
    function pe(n, t) {
        return [ n[0] * t, n[1] * t, n[2] * t ];
    }
    function ve(n) {
        var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        n[0] /= t, n[1] /= t, n[2] /= t;
    }
    function de(n) {
        return [ Math.atan2(n[1], n[0]), G(n[2]) ];
    }
    function me(n, t) {
        return ua(n[0] - t[0]) < ka && ua(n[1] - t[1]) < ka;
    }
    function ye(n, t) {
        n *= Aa;
        var e = Math.cos(t *= Aa);
        xe(e * Math.cos(n), e * Math.sin(n), Math.sin(t));
    }
    function xe(n, t, e) {
        ++hc, pc += (n - pc) / hc, vc += (t - vc) / hc, dc += (e - dc) / hc;
    }
    function Me() {
        function n(n, u) {
            n *= Aa;
            var i = Math.cos(u *= Aa), o = i * Math.cos(n), a = i * Math.sin(n), c = Math.sin(u), s = Math.atan2(Math.sqrt((s = e * c - r * a) * s + (s = r * o - t * c) * s + (s = t * a - e * o) * s), t * o + e * a + r * c);
            gc += s, mc += s * (t + (t = o)), yc += s * (e + (e = a)), xc += s * (r + (r = c)), 
            xe(t, e, r);
        }
        var t, e, r;
        wc.point = function(u, i) {
            u *= Aa;
            var o = Math.cos(i *= Aa);
            t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), wc.point = n, xe(t, e, r);
        };
    }
    function _e() {
        wc.point = ye;
    }
    function be() {
        function n(n, t) {
            n *= Aa;
            var e = Math.cos(t *= Aa), o = e * Math.cos(n), a = e * Math.sin(n), c = Math.sin(t), s = u * c - i * a, l = i * o - r * c, f = r * a - u * o, h = Math.sqrt(s * s + l * l + f * f), g = r * o + u * a + i * c, p = h && -J(g) / h, v = Math.atan2(h, g);
            Mc += p * s, _c += p * l, bc += p * f, gc += v, mc += v * (r + (r = o)), yc += v * (u + (u = a)), 
            xc += v * (i + (i = c)), xe(r, u, i);
        }
        var t, e, r, u, i;
        wc.point = function(o, a) {
            t = o, e = a, wc.point = n, o *= Aa;
            var c = Math.cos(a *= Aa);
            r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), xe(r, u, i);
        }, wc.lineEnd = function() {
            n(t, e), wc.lineEnd = _e, wc.point = ye;
        };
    }
    function we() {
        return !0;
    }
    function Se(n, t, e, r, u) {
        var i = [], o = [];
        if (n.forEach(function(n) {
            if (!((t = n.length - 1) <= 0)) {
                var t, e = n[0], r = n[t];
                if (me(e, r)) {
                    u.lineStart();
                    for (var a = 0; t > a; ++a) u.point((e = n[a])[0], e[1]);
                    return void u.lineEnd();
                }
                var c = new Ee(e, n, null, !0), s = new Ee(e, null, c, !1);
                c.o = s, i.push(c), o.push(s), c = new Ee(r, n, null, !1), s = new Ee(r, null, c, !0), 
                c.o = s, i.push(c), o.push(s);
            }
        }), o.sort(t), ke(i), ke(o), i.length) {
            for (var a = 0, c = e, s = o.length; s > a; ++a) o[a].e = c = !c;
            for (var l, f, h = i[0]; ;) {
                for (var g = h, p = !0; g.v; ) if ((g = g.n) === h) return;
                l = g.z, u.lineStart();
                do {
                    if (g.v = g.o.v = !0, g.e) {
                        if (p) for (var a = 0, s = l.length; s > a; ++a) u.point((f = l[a])[0], f[1]); else r(g.x, g.n.x, 1, u);
                        g = g.n;
                    } else {
                        if (p) {
                            l = g.p.z;
                            for (var a = l.length - 1; a >= 0; --a) u.point((f = l[a])[0], f[1]);
                        } else r(g.x, g.p.x, -1, u);
                        g = g.p;
                    }
                    g = g.o, l = g.z, p = !p;
                } while (!g.v);
                u.lineEnd();
            }
        }
    }
    function ke(n) {
        if (t = n.length) {
            for (var t, e, r = 0, u = n[0]; ++r < t; ) u.n = e = n[r], e.p = u, u = e;
            u.n = e = n[0], e.p = u;
        }
    }
    function Ee(n, t, e, r) {
        this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
    }
    function Ae(n, t, e, r) {
        return function(u, i) {
            function o(t, e) {
                var r = u(t, e);
                n(t = r[0], e = r[1]) && i.point(t, e);
            }
            function a(n, t) {
                var e = u(n, t);
                d.point(e[0], e[1]);
            }
            function c() {
                y.point = a, d.lineStart();
            }
            function s() {
                y.point = o, d.lineEnd();
            }
            function l(n, t) {
                v.push([ n, t ]);
                var e = u(n, t);
                M.point(e[0], e[1]);
            }
            function f() {
                M.lineStart(), v = [];
            }
            function h() {
                l(v[0][0], v[0][1]), M.lineEnd();
                var n, t = M.clean(), e = x.buffer(), r = e.length;
                if (v.pop(), p.push(v), v = null, r) if (1 & t) {
                    n = e[0];
                    var u, r = n.length - 1, o = -1;
                    if (r > 0) {
                        for (_ || (i.polygonStart(), _ = !0), i.lineStart(); ++o < r; ) i.point((u = n[o])[0], u[1]);
                        i.lineEnd();
                    }
                } else r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), g.push(e.filter(Ce));
            }
            var g, p, v, d = t(i), m = u.invert(r[0], r[1]), y = {
                point: o,
                lineStart: c,
                lineEnd: s,
                polygonStart: function() {
                    y.point = l, y.lineStart = f, y.lineEnd = h, g = [], p = [];
                },
                polygonEnd: function() {
                    y.point = o, y.lineStart = c, y.lineEnd = s, g = Zo.merge(g);
                    var n = Le(m, p);
                    g.length ? (_ || (i.polygonStart(), _ = !0), Se(g, ze, n, e, i)) : n && (_ || (i.polygonStart(), 
                    _ = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), _ && (i.polygonEnd(), 
                    _ = !1), g = p = null;
                },
                sphere: function() {
                    i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
                }
            }, x = Ne(), M = t(x), _ = !1;
            return y;
        };
    }
    function Ce(n) {
        return n.length > 1;
    }
    function Ne() {
        var n, t = [];
        return {
            lineStart: function() {
                t.push(n = []);
            },
            point: function(t, e) {
                n.push([ t, e ]);
            },
            lineEnd: v,
            buffer: function() {
                var e = t;
                return t = [], n = null, e;
            },
            rejoin: function() {
                t.length > 1 && t.push(t.pop().concat(t.shift()));
            }
        };
    }
    function ze(n, t) {
        return ((n = n.x)[0] < 0 ? n[1] - Sa - ka : Sa - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Sa - ka : Sa - t[1]);
    }
    function Le(n, t) {
        var e = n[0], r = n[1], u = [ Math.sin(e), -Math.cos(e), 0 ], i = 0, o = 0;
        lc.reset();
        for (var a = 0, c = t.length; c > a; ++a) {
            var s = t[a], l = s.length;
            if (l) for (var f = s[0], h = f[0], g = f[1] / 2 + ba / 4, p = Math.sin(g), v = Math.cos(g), d = 1; ;) {
                d === l && (d = 0), n = s[d];
                var m = n[0], y = n[1] / 2 + ba / 4, x = Math.sin(y), M = Math.cos(y), _ = m - h, b = _ >= 0 ? 1 : -1, w = b * _, S = w > ba, k = p * x;
                if (lc.add(Math.atan2(k * b * Math.sin(w), v * M + k * Math.cos(w))), i += S ? _ + b * wa : _, 
                S ^ h >= e ^ m >= e) {
                    var E = he(le(f), le(n));
                    ve(E);
                    var A = he(u, E);
                    ve(A);
                    var C = (S ^ _ >= 0 ? -1 : 1) * G(A[2]);
                    (r > C || r === C && (E[0] || E[1])) && (o += S ^ _ >= 0 ? 1 : -1);
                }
                if (!d++) break;
                h = m, p = x, v = M, f = n;
            }
        }
        return (-ka > i || ka > i && 0 > lc) ^ 1 & o;
    }
    function Te(n) {
        var t, e = 0/0, r = 0/0, u = 0/0;
        return {
            lineStart: function() {
                n.lineStart(), t = 1;
            },
            point: function(i, o) {
                var a = i > 0 ? ba : -ba, c = ua(i - e);
                ua(c - ba) < ka ? (n.point(e, r = (r + o) / 2 > 0 ? Sa : -Sa), n.point(u, r), n.lineEnd(), 
                n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= ba && (ua(e - u) < ka && (e -= u * ka), 
                ua(i - a) < ka && (i -= a * ka), r = qe(e, r, i, o), n.point(u, r), n.lineEnd(), 
                n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a;
            },
            lineEnd: function() {
                n.lineEnd(), e = r = 0/0;
            },
            clean: function() {
                return 2 - t;
            }
        };
    }
    function qe(n, t, e, r) {
        var u, i, o = Math.sin(n - e);
        return ua(o) > ka ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2;
    }
    function Re(n, t, e, r) {
        var u;
        if (null == n) u = e * Sa, r.point(-ba, u), r.point(0, u), r.point(ba, u), r.point(ba, 0), 
        r.point(ba, -u), r.point(0, -u), r.point(-ba, -u), r.point(-ba, 0), r.point(-ba, u); else if (ua(n[0] - t[0]) > ka) {
            var i = n[0] < t[0] ? ba : -ba;
            u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u);
        } else r.point(t[0], t[1]);
    }
    function De(n) {
        function t(n, t) {
            return Math.cos(n) * Math.cos(t) > i;
        }
        function e(n) {
            var e, i, c, s, l;
            return {
                lineStart: function() {
                    s = c = !1, l = 1;
                },
                point: function(f, h) {
                    var g, p = [ f, h ], v = t(f, h), d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? ba : -ba), h) : 0;
                    if (!e && (s = c = v) && n.lineStart(), v !== c && (g = r(e, p), (me(e, g) || me(p, g)) && (p[0] += ka, 
                    p[1] += ka, v = t(p[0], p[1]))), v !== c) l = 0, v ? (n.lineStart(), g = r(p, e), 
                    n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g; else if (a && e && o ^ v) {
                        var m;
                        d & i || !(m = r(p, e, !0)) || (l = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), 
                        n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), 
                        n.lineStart(), n.point(m[0][0], m[0][1])));
                    }
                    !v || e && me(e, p) || n.point(p[0], p[1]), e = p, c = v, i = d;
                },
                lineEnd: function() {
                    c && n.lineEnd(), e = null;
                },
                clean: function() {
                    return l | (s && c) << 1;
                }
            };
        }
        function r(n, t, e) {
            var r = le(n), u = le(t), o = [ 1, 0, 0 ], a = he(r, u), c = fe(a, a), s = a[0], l = c - s * s;
            if (!l) return !e && n;
            var f = i * c / l, h = -i * s / l, g = he(o, a), p = pe(o, f), v = pe(a, h);
            ge(p, v);
            var d = g, m = fe(p, d), y = fe(d, d), x = m * m - y * (fe(p, p) - 1);
            if (!(0 > x)) {
                var M = Math.sqrt(x), _ = pe(d, (-m - M) / y);
                if (ge(_, p), _ = de(_), !e) return _;
                var b, w = n[0], S = t[0], k = n[1], E = t[1];
                w > S && (b = w, w = S, S = b);
                var A = S - w, C = ua(A - ba) < ka, N = C || ka > A;
                if (!C && k > E && (b = k, k = E, E = b), N ? C ? k + E > 0 ^ _[1] < (ua(_[0] - w) < ka ? k : E) : k <= _[1] && _[1] <= E : A > ba ^ (w <= _[0] && _[0] <= S)) {
                    var z = pe(d, (-m + M) / y);
                    return ge(z, p), [ _, de(z) ];
                }
            }
        }
        function u(t, e) {
            var r = o ? n : ba - n, u = 0;
            return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), 
            u;
        }
        var i = Math.cos(n), o = i > 0, a = ua(i) > ka, c = sr(n, 6 * Aa);
        return Ae(t, e, c, o ? [ 0, -n ] : [ -ba, n - ba ]);
    }
    function Pe(n, t, e, r) {
        return function(u) {
            var i, o = u.a, a = u.b, c = o.x, s = o.y, l = a.x, f = a.y, h = 0, g = 1, p = l - c, v = f - s;
            if (i = n - c, p || !(i > 0)) {
                if (i /= p, 0 > p) {
                    if (h > i) return;
                    g > i && (g = i);
                } else if (p > 0) {
                    if (i > g) return;
                    i > h && (h = i);
                }
                if (i = e - c, p || !(0 > i)) {
                    if (i /= p, 0 > p) {
                        if (i > g) return;
                        i > h && (h = i);
                    } else if (p > 0) {
                        if (h > i) return;
                        g > i && (g = i);
                    }
                    if (i = t - s, v || !(i > 0)) {
                        if (i /= v, 0 > v) {
                            if (h > i) return;
                            g > i && (g = i);
                        } else if (v > 0) {
                            if (i > g) return;
                            i > h && (h = i);
                        }
                        if (i = r - s, v || !(0 > i)) {
                            if (i /= v, 0 > v) {
                                if (i > g) return;
                                i > h && (h = i);
                            } else if (v > 0) {
                                if (h > i) return;
                                g > i && (g = i);
                            }
                            return h > 0 && (u.a = {
                                x: c + h * p,
                                y: s + h * v
                            }), 1 > g && (u.b = {
                                x: c + g * p,
                                y: s + g * v
                            }), u;
                        }
                    }
                }
            }
        };
    }
    function Ue(n, t, e, r) {
        function u(r, u) {
            return ua(r[0] - n) < ka ? u > 0 ? 0 : 3 : ua(r[0] - e) < ka ? u > 0 ? 2 : 1 : ua(r[1] - t) < ka ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2;
        }
        function i(n, t) {
            return o(n.x, t.x);
        }
        function o(n, t) {
            var e = u(n, 1), r = u(t, 1);
            return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0];
        }
        return function(a) {
            function c(n) {
                for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u) for (var i, o = 1, a = d[u], c = a.length, s = a[0]; c > o; ++o) i = a[o], 
                s[1] <= r ? i[1] > r && W(s, i, n) > 0 && ++t : i[1] <= r && W(s, i, n) < 0 && --t, 
                s = i;
                return 0 !== t;
            }
            function s(i, a, c, s) {
                var l = 0, f = 0;
                if (null == i || (l = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
                    do s.point(0 === l || 3 === l ? n : e, l > 1 ? r : t); while ((l = (l + c + 4) % 4) !== f);
                } else s.point(a[0], a[1]);
            }
            function l(u, i) {
                return u >= n && e >= u && i >= t && r >= i;
            }
            function f(n, t) {
                l(n, t) && a.point(n, t);
            }
            function h() {
                N.point = p, d && d.push(m = []), S = !0, w = !1, _ = b = 0/0;
            }
            function g() {
                v && (p(y, x), M && w && A.rejoin(), v.push(A.buffer())), N.point = f, w && a.lineEnd();
            }
            function p(n, t) {
                n = Math.max(-kc, Math.min(kc, n)), t = Math.max(-kc, Math.min(kc, t));
                var e = l(n, t);
                if (d && m.push([ n, t ]), S) y = n, x = t, M = e, S = !1, e && (a.lineStart(), 
                a.point(n, t)); else if (e && w) a.point(n, t); else {
                    var r = {
                        a: {
                            x: _,
                            y: b
                        },
                        b: {
                            x: n,
                            y: t
                        }
                    };
                    C(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), 
                    k = !1) : e && (a.lineStart(), a.point(n, t), k = !1);
                }
                _ = n, b = t, w = e;
            }
            var v, d, m, y, x, M, _, b, w, S, k, E = a, A = Ne(), C = Pe(n, t, e, r), N = {
                point: f,
                lineStart: h,
                lineEnd: g,
                polygonStart: function() {
                    a = A, v = [], d = [], k = !0;
                },
                polygonEnd: function() {
                    a = E, v = Zo.merge(v);
                    var t = c([ n, r ]), e = k && t, u = v.length;
                    (e || u) && (a.polygonStart(), e && (a.lineStart(), s(null, null, 1, a), a.lineEnd()), 
                    u && Se(v, i, t, s, a), a.polygonEnd()), v = d = m = null;
                }
            };
            return N;
        };
    }
    function je(n, t) {
        function e(e, r) {
            return e = n(e, r), t(e[0], e[1]);
        }
        return n.invert && t.invert && (e.invert = function(e, r) {
            return e = t.invert(e, r), e && n.invert(e[0], e[1]);
        }), e;
    }
    function He(n) {
        var t = 0, e = ba / 3, r = tr(n), u = r(t, e);
        return u.parallels = function(n) {
            return arguments.length ? r(t = n[0] * ba / 180, e = n[1] * ba / 180) : [ 180 * (t / ba), 180 * (e / ba) ];
        }, u;
    }
    function Fe(n, t) {
        function e(n, t) {
            var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
            return [ e * Math.sin(n *= u), o - e * Math.cos(n) ];
        }
        var r = Math.sin(n), u = (r + Math.sin(t)) / 2, i = 1 + r * (2 * u - r), o = Math.sqrt(i) / u;
        return e.invert = function(n, t) {
            var e = o - t;
            return [ Math.atan2(n, e) / u, G((i - (n * n + e * e) * u * u) / (2 * u)) ];
        }, e;
    }
    function Oe() {
        function n(n, t) {
            Ac += u * n - r * t, r = n, u = t;
        }
        var t, e, r, u;
        Tc.point = function(i, o) {
            Tc.point = n, t = r = i, e = u = o;
        }, Tc.lineEnd = function() {
            n(t, e);
        };
    }
    function Ye(n, t) {
        Cc > n && (Cc = n), n > zc && (zc = n), Nc > t && (Nc = t), t > Lc && (Lc = t);
    }
    function Ie() {
        function n(n, t) {
            o.push("M", n, ",", t, i);
        }
        function t(n, t) {
            o.push("M", n, ",", t), a.point = e;
        }
        function e(n, t) {
            o.push("L", n, ",", t);
        }
        function r() {
            a.point = n;
        }
        function u() {
            o.push("Z");
        }
        var i = Ze(4.5), o = [], a = {
            point: n,
            lineStart: function() {
                a.point = t;
            },
            lineEnd: r,
            polygonStart: function() {
                a.lineEnd = u;
            },
            polygonEnd: function() {
                a.lineEnd = r, a.point = n;
            },
            pointRadius: function(n) {
                return i = Ze(n), a;
            },
            result: function() {
                if (o.length) {
                    var n = o.join("");
                    return o = [], n;
                }
            }
        };
        return a;
    }
    function Ze(n) {
        return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z";
    }
    function Ve(n, t) {
        pc += n, vc += t, ++dc;
    }
    function Xe() {
        function n(n, r) {
            var u = n - t, i = r - e, o = Math.sqrt(u * u + i * i);
            mc += o * (t + n) / 2, yc += o * (e + r) / 2, xc += o, Ve(t = n, e = r);
        }
        var t, e;
        Rc.point = function(r, u) {
            Rc.point = n, Ve(t = r, e = u);
        };
    }
    function $e() {
        Rc.point = Ve;
    }
    function Be() {
        function n(n, t) {
            var e = n - r, i = t - u, o = Math.sqrt(e * e + i * i);
            mc += o * (r + n) / 2, yc += o * (u + t) / 2, xc += o, o = u * n - r * t, Mc += o * (r + n), 
            _c += o * (u + t), bc += 3 * o, Ve(r = n, u = t);
        }
        var t, e, r, u;
        Rc.point = function(i, o) {
            Rc.point = n, Ve(t = r = i, e = u = o);
        }, Rc.lineEnd = function() {
            n(t, e);
        };
    }
    function We(n) {
        function t(t, e) {
            n.moveTo(t, e), n.arc(t, e, o, 0, wa);
        }
        function e(t, e) {
            n.moveTo(t, e), a.point = r;
        }
        function r(t, e) {
            n.lineTo(t, e);
        }
        function u() {
            a.point = t;
        }
        function i() {
            n.closePath();
        }
        var o = 4.5, a = {
            point: t,
            lineStart: function() {
                a.point = e;
            },
            lineEnd: u,
            polygonStart: function() {
                a.lineEnd = i;
            },
            polygonEnd: function() {
                a.lineEnd = u, a.point = t;
            },
            pointRadius: function(n) {
                return o = n, a;
            },
            result: v
        };
        return a;
    }
    function Je(n) {
        function t(n) {
            return (a ? r : e)(n);
        }
        function e(t) {
            return Qe(t, function(e, r) {
                e = n(e, r), t.point(e[0], e[1]);
            });
        }
        function r(t) {
            function e(e, r) {
                e = n(e, r), t.point(e[0], e[1]);
            }
            function r() {
                x = 0/0, S.point = i, t.lineStart();
            }
            function i(e, r) {
                var i = le([ e, r ]), o = n(e, r);
                u(x, M, y, _, b, w, x = o[0], M = o[1], y = e, _ = i[0], b = i[1], w = i[2], a, t), 
                t.point(x, M);
            }
            function o() {
                S.point = e, t.lineEnd();
            }
            function c() {
                r(), S.point = s, S.lineEnd = l;
            }
            function s(n, t) {
                i(f = n, h = t), g = x, p = M, v = _, d = b, m = w, S.point = i;
            }
            function l() {
                u(x, M, y, _, b, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o();
            }
            var f, h, g, p, v, d, m, y, x, M, _, b, w, S = {
                point: e,
                lineStart: r,
                lineEnd: o,
                polygonStart: function() {
                    t.polygonStart(), S.lineStart = c;
                },
                polygonEnd: function() {
                    t.polygonEnd(), S.lineStart = r;
                }
            };
            return S;
        }
        function u(t, e, r, a, c, s, l, f, h, g, p, v, d, m) {
            var y = l - t, x = f - e, M = y * y + x * x;
            if (M > 4 * i && d--) {
                var _ = a + g, b = c + p, w = s + v, S = Math.sqrt(_ * _ + b * b + w * w), k = Math.asin(w /= S), E = ua(ua(w) - 1) < ka || ua(r - h) < ka ? (r + h) / 2 : Math.atan2(b, _), A = n(E, k), C = A[0], N = A[1], z = C - t, L = N - e, T = x * z - y * L;
                (T * T / M > i || ua((y * z + x * L) / M - .5) > .3 || o > a * g + c * p + s * v) && (u(t, e, r, a, c, s, C, N, E, _ /= S, b /= S, w, d, m), 
                m.point(C, N), u(C, N, E, _, b, w, l, f, h, g, p, v, d, m));
            }
        }
        var i = .5, o = Math.cos(30 * Aa), a = 16;
        return t.precision = function(n) {
            return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i);
        }, t;
    }
    function Ge(n) {
        var t = Je(function(t, e) {
            return n([ t * Ca, e * Ca ]);
        });
        return function(n) {
            return er(t(n));
        };
    }
    function Ke(n) {
        this.stream = n;
    }
    function Qe(n, t) {
        return {
            point: t,
            sphere: function() {
                n.sphere();
            },
            lineStart: function() {
                n.lineStart();
            },
            lineEnd: function() {
                n.lineEnd();
            },
            polygonStart: function() {
                n.polygonStart();
            },
            polygonEnd: function() {
                n.polygonEnd();
            }
        };
    }
    function nr(n) {
        return tr(function() {
            return n;
        })();
    }
    function tr(n) {
        function t(n) {
            return n = a(n[0] * Aa, n[1] * Aa), [ n[0] * h + c, s - n[1] * h ];
        }
        function e(n) {
            return n = a.invert((n[0] - c) / h, (s - n[1]) / h), n && [ n[0] * Ca, n[1] * Ca ];
        }
        function r() {
            a = je(o = ir(m, y, x), i);
            var n = i(v, d);
            return c = g - n[0] * h, s = p + n[1] * h, u();
        }
        function u() {
            return l && (l.valid = !1, l = null), t;
        }
        var i, o, a, c, s, l, f = Je(function(n, t) {
            return n = i(n, t), [ n[0] * h + c, s - n[1] * h ];
        }), h = 150, g = 480, p = 250, v = 0, d = 0, m = 0, y = 0, x = 0, M = Sc, _ = wt, b = null, w = null;
        return t.stream = function(n) {
            return l && (l.valid = !1), l = er(M(o, f(_(n)))), l.valid = !0, l;
        }, t.clipAngle = function(n) {
            return arguments.length ? (M = null == n ? (b = n, Sc) : De((b = +n) * Aa), u()) : b;
        }, t.clipExtent = function(n) {
            return arguments.length ? (w = n, _ = n ? Ue(n[0][0], n[0][1], n[1][0], n[1][1]) : wt, 
            u()) : w;
        }, t.scale = function(n) {
            return arguments.length ? (h = +n, r()) : h;
        }, t.translate = function(n) {
            return arguments.length ? (g = +n[0], p = +n[1], r()) : [ g, p ];
        }, t.center = function(n) {
            return arguments.length ? (v = n[0] % 360 * Aa, d = n[1] % 360 * Aa, r()) : [ v * Ca, d * Ca ];
        }, t.rotate = function(n) {
            return arguments.length ? (m = n[0] % 360 * Aa, y = n[1] % 360 * Aa, x = n.length > 2 ? n[2] % 360 * Aa : 0, 
            r()) : [ m * Ca, y * Ca, x * Ca ];
        }, Zo.rebind(t, f, "precision"), function() {
            return i = n.apply(this, arguments), t.invert = i.invert && e, r();
        };
    }
    function er(n) {
        return Qe(n, function(t, e) {
            n.point(t * Aa, e * Aa);
        });
    }
    function rr(n, t) {
        return [ n, t ];
    }
    function ur(n, t) {
        return [ n > ba ? n - wa : -ba > n ? n + wa : n, t ];
    }
    function ir(n, t, e) {
        return n ? t || e ? je(ar(n), cr(t, e)) : ar(n) : t || e ? cr(t, e) : ur;
    }
    function or(n) {
        return function(t, e) {
            return t += n, [ t > ba ? t - wa : -ba > t ? t + wa : t, e ];
        };
    }
    function ar(n) {
        var t = or(n);
        return t.invert = or(-n), t;
    }
    function cr(n, t) {
        function e(n, t) {
            var e = Math.cos(t), a = Math.cos(n) * e, c = Math.sin(n) * e, s = Math.sin(t), l = s * r + a * u;
            return [ Math.atan2(c * i - l * o, a * r - s * u), G(l * i + c * o) ];
        }
        var r = Math.cos(n), u = Math.sin(n), i = Math.cos(t), o = Math.sin(t);
        return e.invert = function(n, t) {
            var e = Math.cos(t), a = Math.cos(n) * e, c = Math.sin(n) * e, s = Math.sin(t), l = s * i - c * o;
            return [ Math.atan2(c * i + s * o, a * r + l * u), G(l * r - a * u) ];
        }, e;
    }
    function sr(n, t) {
        var e = Math.cos(n), r = Math.sin(n);
        return function(u, i, o, a) {
            var c = o * t;
            null != u ? (u = lr(e, u), i = lr(e, i), (o > 0 ? i > u : u > i) && (u += o * wa)) : (u = n + o * wa, 
            i = n - .5 * c);
            for (var s, l = u; o > 0 ? l > i : i > l; l -= c) a.point((s = de([ e, -r * Math.cos(l), -r * Math.sin(l) ]))[0], s[1]);
        };
    }
    function lr(n, t) {
        var e = le(t);
        e[0] -= n, ve(e);
        var r = J(-e[1]);
        return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - ka) % (2 * Math.PI);
    }
    function fr(n, t, e) {
        var r = Zo.range(n, t - ka, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [ n, t ];
            });
        };
    }
    function hr(n, t, e) {
        var r = Zo.range(n, t - ka, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [ t, n ];
            });
        };
    }
    function gr(n) {
        return n.source;
    }
    function pr(n) {
        return n.target;
    }
    function vr(n, t, e, r) {
        var u = Math.cos(t), i = Math.sin(t), o = Math.cos(r), a = Math.sin(r), c = u * Math.cos(n), s = u * Math.sin(n), l = o * Math.cos(e), f = o * Math.sin(e), h = 2 * Math.asin(Math.sqrt(tt(r - t) + u * o * tt(e - n))), g = 1 / Math.sin(h), p = h ? function(n) {
            var t = Math.sin(n *= h) * g, e = Math.sin(h - n) * g, r = e * c + t * l, u = e * s + t * f, o = e * i + t * a;
            return [ Math.atan2(u, r) * Ca, Math.atan2(o, Math.sqrt(r * r + u * u)) * Ca ];
        } : function() {
            return [ n * Ca, t * Ca ];
        };
        return p.distance = h, p;
    }
    function dr() {
        function n(n, u) {
            var i = Math.sin(u *= Aa), o = Math.cos(u), a = ua((n *= Aa) - t), c = Math.cos(a);
            Dc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), 
            t = n, e = i, r = o;
        }
        var t, e, r;
        Pc.point = function(u, i) {
            t = u * Aa, e = Math.sin(i *= Aa), r = Math.cos(i), Pc.point = n;
        }, Pc.lineEnd = function() {
            Pc.point = Pc.lineEnd = v;
        };
    }
    function mr(n, t) {
        function e(t, e) {
            var r = Math.cos(t), u = Math.cos(e), i = n(r * u);
            return [ i * u * Math.sin(t), i * Math.sin(e) ];
        }
        return e.invert = function(n, e) {
            var r = Math.sqrt(n * n + e * e), u = t(r), i = Math.sin(u), o = Math.cos(u);
            return [ Math.atan2(n * i, r * o), Math.asin(r && e * i / r) ];
        }, e;
    }
    function yr(n, t) {
        function e(n, t) {
            o > 0 ? -Sa + ka > t && (t = -Sa + ka) : t > Sa - ka && (t = Sa - ka);
            var e = o / Math.pow(u(t), i);
            return [ e * Math.sin(i * n), o - e * Math.cos(i * n) ];
        }
        var r = Math.cos(n), u = function(n) {
            return Math.tan(ba / 4 + n / 2);
        }, i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)), o = r * Math.pow(u(n), i) / i;
        return i ? (e.invert = function(n, t) {
            var e = o - t, r = B(i) * Math.sqrt(n * n + e * e);
            return [ Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Sa ];
        }, e) : Mr;
    }
    function xr(n, t) {
        function e(n, t) {
            var e = i - t;
            return [ e * Math.sin(u * n), i - e * Math.cos(u * n) ];
        }
        var r = Math.cos(n), u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n), i = r / u + n;
        return ua(u) < ka ? rr : (e.invert = function(n, t) {
            var e = i - t;
            return [ Math.atan2(n, e) / u, i - B(u) * Math.sqrt(n * n + e * e) ];
        }, e);
    }
    function Mr(n, t) {
        return [ n, Math.log(Math.tan(ba / 4 + t / 2)) ];
    }
    function _r(n) {
        var t, e = nr(n), r = e.scale, u = e.translate, i = e.clipExtent;
        return e.scale = function() {
            var n = r.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n;
        }, e.translate = function() {
            var n = u.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n;
        }, e.clipExtent = function(n) {
            var o = i.apply(e, arguments);
            if (o === e) {
                if (t = null == n) {
                    var a = ba * r(), c = u();
                    i([ [ c[0] - a, c[1] - a ], [ c[0] + a, c[1] + a ] ]);
                }
            } else t && (o = null);
            return o;
        }, e.clipExtent(null);
    }
    function br(n, t) {
        return [ Math.log(Math.tan(ba / 4 + t / 2)), -n ];
    }
    function wr(n) {
        return n[0];
    }
    function Sr(n) {
        return n[1];
    }
    function kr(n) {
        for (var t = n.length, e = [ 0, 1 ], r = 2, u = 2; t > u; u++) {
            for (;r > 1 && W(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0; ) --r;
            e[r++] = u;
        }
        return e.slice(0, r);
    }
    function Er(n, t) {
        return n[0] - t[0] || n[1] - t[1];
    }
    function Ar(n, t, e) {
        return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0]);
    }
    function Cr(n, t, e, r) {
        var u = n[0], i = e[0], o = t[0] - u, a = r[0] - i, c = n[1], s = e[1], l = t[1] - c, f = r[1] - s, h = (a * (c - s) - f * (u - i)) / (f * o - a * l);
        return [ u + h * o, c + h * l ];
    }
    function Nr(n) {
        var t = n[0], e = n[n.length - 1];
        return !(t[0] - e[0] || t[1] - e[1]);
    }
    function zr() {
        Gr(this), this.edge = this.site = this.circle = null;
    }
    function Lr(n) {
        var t = Bc.pop() || new zr();
        return t.site = n, t;
    }
    function Tr(n) {
        Yr(n), Vc.remove(n), Bc.push(n), Gr(n);
    }
    function qr(n) {
        var t = n.circle, e = t.x, r = t.cy, u = {
            x: e,
            y: r
        }, i = n.P, o = n.N, a = [ n ];
        Tr(n);
        for (var c = i; c.circle && ua(e - c.circle.x) < ka && ua(r - c.circle.cy) < ka; ) i = c.P, 
        a.unshift(c), Tr(c), c = i;
        a.unshift(c), Yr(c);
        for (var s = o; s.circle && ua(e - s.circle.x) < ka && ua(r - s.circle.cy) < ka; ) o = s.N, 
        a.push(s), Tr(s), s = o;
        a.push(s), Yr(s);
        var l, f = a.length;
        for (l = 1; f > l; ++l) s = a[l], c = a[l - 1], Br(s.edge, c.site, s.site, u);
        c = a[0], s = a[f - 1], s.edge = Xr(c.site, s.site, null, u), Or(c), Or(s);
    }
    function Rr(n) {
        for (var t, e, r, u, i = n.x, o = n.y, a = Vc._; a; ) if (r = Dr(a, o) - i, r > ka) a = a.L; else {
            if (u = i - Pr(a, o), !(u > ka)) {
                r > -ka ? (t = a.P, e = a) : u > -ka ? (t = a, e = a.N) : t = e = a;
                break;
            }
            if (!a.R) {
                t = a;
                break;
            }
            a = a.R;
        }
        var c = Lr(n);
        if (Vc.insert(t, c), t || e) {
            if (t === e) return Yr(t), e = Lr(t.site), Vc.insert(c, e), c.edge = e.edge = Xr(t.site, c.site), 
            Or(t), void Or(e);
            if (!e) return void (c.edge = Xr(t.site, c.site));
            Yr(t), Yr(e);
            var s = t.site, l = s.x, f = s.y, h = n.x - l, g = n.y - f, p = e.site, v = p.x - l, d = p.y - f, m = 2 * (h * d - g * v), y = h * h + g * g, x = v * v + d * d, M = {
                x: (d * y - g * x) / m + l,
                y: (h * x - v * y) / m + f
            };
            Br(e.edge, s, p, M), c.edge = Xr(s, n, null, M), e.edge = Xr(n, p, null, M), Or(t), 
            Or(e);
        }
    }
    function Dr(n, t) {
        var e = n.site, r = e.x, u = e.y, i = u - t;
        if (!i) return r;
        var o = n.P;
        if (!o) return -1 / 0;
        e = o.site;
        var a = e.x, c = e.y, s = c - t;
        if (!s) return a;
        var l = a - r, f = 1 / i - 1 / s, h = l / s;
        return f ? (-h + Math.sqrt(h * h - 2 * f * (l * l / (-2 * s) - c + s / 2 + u - i / 2))) / f + r : (r + a) / 2;
    }
    function Pr(n, t) {
        var e = n.N;
        if (e) return Dr(e, t);
        var r = n.site;
        return r.y === t ? r.x : 1 / 0;
    }
    function Ur(n) {
        this.site = n, this.edges = [];
    }
    function jr(n) {
        for (var t, e, r, u, i, o, a, c, s, l, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = Zc, d = v.length; d--; ) if (i = v[d], 
        i && i.prepare()) for (a = i.edges, c = a.length, o = 0; c > o; ) l = a[o].end(), 
        r = l.x, u = l.y, s = a[++o % c].start(), t = s.x, e = s.y, (ua(r - t) > ka || ua(u - e) > ka) && (a.splice(o, 0, new Wr($r(i.site, l, ua(r - f) < ka && p - u > ka ? {
            x: f,
            y: ua(t - f) < ka ? e : p
        } : ua(u - p) < ka && h - r > ka ? {
            x: ua(e - p) < ka ? t : h,
            y: p
        } : ua(r - h) < ka && u - g > ka ? {
            x: h,
            y: ua(t - h) < ka ? e : g
        } : ua(u - g) < ka && r - f > ka ? {
            x: ua(e - g) < ka ? t : f,
            y: g
        } : null), i.site, null)), ++c);
    }
    function Hr(n, t) {
        return t.angle - n.angle;
    }
    function Fr() {
        Gr(this), this.x = this.y = this.arc = this.site = this.cy = null;
    }
    function Or(n) {
        var t = n.P, e = n.N;
        if (t && e) {
            var r = t.site, u = n.site, i = e.site;
            if (r !== i) {
                var o = u.x, a = u.y, c = r.x - o, s = r.y - a, l = i.x - o, f = i.y - a, h = 2 * (c * f - s * l);
                if (!(h >= -Ea)) {
                    var g = c * c + s * s, p = l * l + f * f, v = (f * g - s * p) / h, d = (c * p - l * g) / h, f = d + a, m = Wc.pop() || new Fr();
                    m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, 
                    n.circle = m;
                    for (var y = null, x = $c._; x; ) if (m.y < x.y || m.y === x.y && m.x <= x.x) {
                        if (!x.L) {
                            y = x.P;
                            break;
                        }
                        x = x.L;
                    } else {
                        if (!x.R) {
                            y = x;
                            break;
                        }
                        x = x.R;
                    }
                    $c.insert(y, m), y || (Xc = m);
                }
            }
        }
    }
    function Yr(n) {
        var t = n.circle;
        t && (t.P || (Xc = t.N), $c.remove(t), Wc.push(t), Gr(t), n.circle = null);
    }
    function Ir(n) {
        for (var t, e = Ic, r = Pe(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--; ) t = e[u], 
        (!Zr(t, n) || !r(t) || ua(t.a.x - t.b.x) < ka && ua(t.a.y - t.b.y) < ka) && (t.a = t.b = null, 
        e.splice(u, 1));
    }
    function Zr(n, t) {
        var e = n.b;
        if (e) return !0;
        var r, u, i = n.a, o = t[0][0], a = t[1][0], c = t[0][1], s = t[1][1], l = n.l, f = n.r, h = l.x, g = l.y, p = f.x, v = f.y, d = (h + p) / 2, m = (g + v) / 2;
        if (v === g) {
            if (o > d || d >= a) return;
            if (h > p) {
                if (i) {
                    if (i.y >= s) return;
                } else i = {
                    x: d,
                    y: c
                };
                e = {
                    x: d,
                    y: s
                };
            } else {
                if (i) {
                    if (i.y < c) return;
                } else i = {
                    x: d,
                    y: s
                };
                e = {
                    x: d,
                    y: c
                };
            }
        } else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1) if (h > p) {
            if (i) {
                if (i.y >= s) return;
            } else i = {
                x: (c - u) / r,
                y: c
            };
            e = {
                x: (s - u) / r,
                y: s
            };
        } else {
            if (i) {
                if (i.y < c) return;
            } else i = {
                x: (s - u) / r,
                y: s
            };
            e = {
                x: (c - u) / r,
                y: c
            };
        } else if (v > g) {
            if (i) {
                if (i.x >= a) return;
            } else i = {
                x: o,
                y: r * o + u
            };
            e = {
                x: a,
                y: r * a + u
            };
        } else {
            if (i) {
                if (i.x < o) return;
            } else i = {
                x: a,
                y: r * a + u
            };
            e = {
                x: o,
                y: r * o + u
            };
        }
        return n.a = i, n.b = e, !0;
    }
    function Vr(n, t) {
        this.l = n, this.r = t, this.a = this.b = null;
    }
    function Xr(n, t, e, r) {
        var u = new Vr(n, t);
        return Ic.push(u), e && Br(u, n, t, e), r && Br(u, t, n, r), Zc[n.i].edges.push(new Wr(u, n, t)), 
        Zc[t.i].edges.push(new Wr(u, t, n)), u;
    }
    function $r(n, t, e) {
        var r = new Vr(n, null);
        return r.a = t, r.b = e, Ic.push(r), r;
    }
    function Br(n, t, e, r) {
        n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e);
    }
    function Wr(n, t, e) {
        var r = n.a, u = n.b;
        this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y);
    }
    function Jr() {
        this._ = null;
    }
    function Gr(n) {
        n.U = n.C = n.L = n.R = n.P = n.N = null;
    }
    function Kr(n, t) {
        var e = t, r = t.R, u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), 
        r.L = e;
    }
    function Qr(n, t) {
        var e = t, r = t.L, u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), 
        r.R = e;
    }
    function nu(n) {
        for (;n.L; ) n = n.L;
        return n;
    }
    function tu(n, t) {
        var e, r, u, i = n.sort(eu).pop();
        for (Ic = [], Zc = new Array(n.length), Vc = new Jr(), $c = new Jr(); ;) if (u = Xc, 
        i && (!u || i.y < u.y || i.y === u.y && i.x < u.x)) (i.x !== e || i.y !== r) && (Zc[i.i] = new Ur(i), 
        Rr(i), e = i.x, r = i.y), i = n.pop(); else {
            if (!u) break;
            qr(u.arc);
        }
        t && (Ir(t), jr(t));
        var o = {
            cells: Zc,
            edges: Ic
        };
        return Vc = $c = Ic = Zc = null, o;
    }
    function eu(n, t) {
        return t.y - n.y || t.x - n.x;
    }
    function ru(n, t, e) {
        return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y);
    }
    function uu(n) {
        return n.x;
    }
    function iu(n) {
        return n.y;
    }
    function ou() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        };
    }
    function au(n, t, e, r, u, i) {
        if (!n(t, e, r, u, i)) {
            var o = .5 * (e + u), a = .5 * (r + i), c = t.nodes;
            c[0] && au(n, c[0], e, r, o, a), c[1] && au(n, c[1], o, r, u, a), c[2] && au(n, c[2], e, a, o, i), 
            c[3] && au(n, c[3], o, a, u, i);
        }
    }
    function cu(n, t) {
        n = Zo.rgb(n), t = Zo.rgb(t);
        var e = n.r, r = n.g, u = n.b, i = t.r - e, o = t.g - r, a = t.b - u;
        return function(n) {
            return "#" + dt(Math.round(e + i * n)) + dt(Math.round(r + o * n)) + dt(Math.round(u + a * n));
        };
    }
    function su(n, t) {
        var e, r = {}, u = {};
        for (e in n) e in t ? r[e] = hu(n[e], t[e]) : u[e] = n[e];
        for (e in t) e in n || (u[e] = t[e]);
        return function(n) {
            for (e in r) u[e] = r[e](n);
            return u;
        };
    }
    function lu(n, t) {
        return t -= n = +n, function(e) {
            return n + t * e;
        };
    }
    function fu(n, t) {
        var e, r, u, i = Gc.lastIndex = Kc.lastIndex = 0, o = -1, a = [], c = [];
        for (n += "", t += ""; (e = Gc.exec(n)) && (r = Kc.exec(t)); ) (u = r.index) > i && (u = t.substring(i, u), 
        a[o] ? a[o] += u : a[++o] = u), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, 
        c.push({
            i: o,
            x: lu(e, r)
        })), i = Kc.lastIndex;
        return i < t.length && (u = t.substring(i), a[o] ? a[o] += u : a[++o] = u), a.length < 2 ? c[0] ? (t = c[0].x, 
        function(n) {
            return t(n) + "";
        }) : function() {
            return t;
        } : (t = c.length, function(n) {
            for (var e, r = 0; t > r; ++r) a[(e = c[r]).i] = e.x(n);
            return a.join("");
        });
    }
    function hu(n, t) {
        for (var e, r = Zo.interpolators.length; --r >= 0 && !(e = Zo.interpolators[r](n, t)); ) ;
        return e;
    }
    function gu(n, t) {
        var e, r = [], u = [], i = n.length, o = t.length, a = Math.min(n.length, t.length);
        for (e = 0; a > e; ++e) r.push(hu(n[e], t[e]));
        for (;i > e; ++e) u[e] = n[e];
        for (;o > e; ++e) u[e] = t[e];
        return function(n) {
            for (e = 0; a > e; ++e) u[e] = r[e](n);
            return u;
        };
    }
    function pu(n) {
        return function(t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : n(t);
        };
    }
    function vu(n) {
        return function(t) {
            return 1 - n(1 - t);
        };
    }
    function du(n) {
        return function(t) {
            return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t));
        };
    }
    function mu(n) {
        return n * n;
    }
    function yu(n) {
        return n * n * n;
    }
    function xu(n) {
        if (0 >= n) return 0;
        if (n >= 1) return 1;
        var t = n * n, e = t * n;
        return 4 * (.5 > n ? e : 3 * (n - t) + e - .75);
    }
    function Mu(n) {
        return function(t) {
            return Math.pow(t, n);
        };
    }
    function _u(n) {
        return 1 - Math.cos(n * Sa);
    }
    function bu(n) {
        return Math.pow(2, 10 * (n - 1));
    }
    function wu(n) {
        return 1 - Math.sqrt(1 - n * n);
    }
    function Su(n, t) {
        var e;
        return arguments.length < 2 && (t = .45), arguments.length ? e = t / wa * Math.asin(1 / n) : (n = 1, 
        e = t / 4), function(r) {
            return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * wa / t);
        };
    }
    function ku(n) {
        return n || (n = 1.70158), function(t) {
            return t * t * ((n + 1) * t - n);
        };
    }
    function Eu(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375;
    }
    function Au(n, t) {
        n = Zo.hcl(n), t = Zo.hcl(t);
        var e = n.h, r = n.c, u = n.l, i = t.h - e, o = t.c - r, a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), 
        function(n) {
            return ot(e + i * n, r + o * n, u + a * n) + "";
        };
    }
    function Cu(n, t) {
        n = Zo.hsl(n), t = Zo.hsl(t);
        var e = n.h, r = n.s, u = n.l, i = t.h - e, o = t.s - r, a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360), 
        function(n) {
            return ut(e + i * n, r + o * n, u + a * n) + "";
        };
    }
    function Nu(n, t) {
        n = Zo.lab(n), t = Zo.lab(t);
        var e = n.l, r = n.a, u = n.b, i = t.l - e, o = t.a - r, a = t.b - u;
        return function(n) {
            return ct(e + i * n, r + o * n, u + a * n) + "";
        };
    }
    function zu(n, t) {
        return t -= n, function(e) {
            return Math.round(n + t * e);
        };
    }
    function Lu(n) {
        var t = [ n.a, n.b ], e = [ n.c, n.d ], r = qu(t), u = Tu(t, e), i = qu(Ru(e, t, -u)) || 0;
        t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Ca, 
        this.translate = [ n.e, n.f ], this.scale = [ r, i ], this.skew = i ? Math.atan2(u, i) * Ca : 0;
    }
    function Tu(n, t) {
        return n[0] * t[0] + n[1] * t[1];
    }
    function qu(n) {
        var t = Math.sqrt(Tu(n, n));
        return t && (n[0] /= t, n[1] /= t), t;
    }
    function Ru(n, t, e) {
        return n[0] += e * t[0], n[1] += e * t[1], n;
    }
    function Du(n, t) {
        var e, r = [], u = [], i = Zo.transform(n), o = Zo.transform(t), a = i.translate, c = o.translate, s = i.rotate, l = o.rotate, f = i.skew, h = o.skew, g = i.scale, p = o.scale;
        return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), 
        u.push({
            i: 1,
            x: lu(a[0], c[0])
        }, {
            i: 3,
            x: lu(a[1], c[1])
        })) : r.push(c[0] || c[1] ? "translate(" + c + ")" : ""), s != l ? (s - l > 180 ? l += 360 : l - s > 180 && (s += 360), 
        u.push({
            i: r.push(r.pop() + "rotate(", null, ")") - 2,
            x: lu(s, l)
        })) : l && r.push(r.pop() + "rotate(" + l + ")"), f != h ? u.push({
            i: r.push(r.pop() + "skewX(", null, ")") - 2,
            x: lu(f, h)
        }) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), 
        u.push({
            i: e - 4,
            x: lu(g[0], p[0])
        }, {
            i: e - 2,
            x: lu(g[1], p[1])
        })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length, 
        function(n) {
            for (var t, i = -1; ++i < e; ) r[(t = u[i]).i] = t.x(n);
            return r.join("");
        };
    }
    function Pu(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0, function(e) {
            return (e - n) * t;
        };
    }
    function Uu(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0, function(e) {
            return Math.max(0, Math.min(1, (e - n) * t));
        };
    }
    function ju(n) {
        for (var t = n.source, e = n.target, r = Fu(t, e), u = [ t ]; t !== r; ) t = t.parent, 
        u.push(t);
        for (var i = u.length; e !== r; ) u.splice(i, 0, e), e = e.parent;
        return u;
    }
    function Hu(n) {
        for (var t = [], e = n.parent; null != e; ) t.push(n), n = e, e = e.parent;
        return t.push(n), t;
    }
    function Fu(n, t) {
        if (n === t) return n;
        for (var e = Hu(n), r = Hu(t), u = e.pop(), i = r.pop(), o = null; u === i; ) o = u, 
        u = e.pop(), i = r.pop();
        return o;
    }
    function Ou(n) {
        n.fixed |= 2;
    }
    function Yu(n) {
        n.fixed &= -7;
    }
    function Iu(n) {
        n.fixed |= 4, n.px = n.x, n.py = n.y;
    }
    function Zu(n) {
        n.fixed &= -5;
    }
    function Vu(n, t, e) {
        var r = 0, u = 0;
        if (n.charge = 0, !n.leaf) for (var i, o = n.nodes, a = o.length, c = -1; ++c < a; ) i = o[c], 
        null != i && (Vu(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
        if (n.point) {
            n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
            var s = t * e[n.point.index];
            n.charge += n.pointCharge = s, r += s * n.point.x, u += s * n.point.y;
        }
        n.cx = r / n.charge, n.cy = u / n.charge;
    }
    function Xu(n, t) {
        return Zo.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = Ku, 
        n;
    }
    function $u(n, t) {
        for (var e = [ n ]; null != (n = e.pop()); ) if (t(n), (u = n.children) && (r = u.length)) for (var r, u; --r >= 0; ) e.push(u[r]);
    }
    function Bu(n, t) {
        for (var e = [ n ], r = []; null != (n = e.pop()); ) if (r.push(n), (i = n.children) && (u = i.length)) for (var u, i, o = -1; ++o < u; ) e.push(i[o]);
        for (;null != (n = r.pop()); ) t(n);
    }
    function Wu(n) {
        return n.children;
    }
    function Ju(n) {
        return n.value;
    }
    function Gu(n, t) {
        return t.value - n.value;
    }
    function Ku(n) {
        return Zo.merge(n.map(function(n) {
            return (n.children || []).map(function(t) {
                return {
                    source: n,
                    target: t
                };
            });
        }));
    }
    function Qu(n) {
        return n.x;
    }
    function ni(n) {
        return n.y;
    }
    function ti(n, t, e) {
        n.y0 = t, n.y = e;
    }
    function ei(n) {
        return Zo.range(n.length);
    }
    function ri(n) {
        for (var t = -1, e = n[0].length, r = []; ++t < e; ) r[t] = 0;
        return r;
    }
    function ui(n) {
        for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e) (t = n[e][1]) > u && (r = e, 
        u = t);
        return r;
    }
    function ii(n) {
        return n.reduce(oi, 0);
    }
    function oi(n, t) {
        return n + t[1];
    }
    function ai(n, t) {
        return ci(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1));
    }
    function ci(n, t) {
        for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t; ) i[e] = u * e + r;
        return i;
    }
    function si(n) {
        return [ Zo.min(n), Zo.max(n) ];
    }
    function li(n, t) {
        return n.value - t.value;
    }
    function fi(n, t) {
        var e = n._pack_next;
        n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t;
    }
    function hi(n, t) {
        n._pack_next = t, t._pack_prev = n;
    }
    function gi(n, t) {
        var e = t.x - n.x, r = t.y - n.y, u = n.r + t.r;
        return .999 * u * u > e * e + r * r;
    }
    function pi(n) {
        function t(n) {
            l = Math.min(n.x - n.r, l), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), 
            g = Math.max(n.y + n.r, g);
        }
        if ((e = n.children) && (s = e.length)) {
            var e, r, u, i, o, a, c, s, l = 1 / 0, f = -1 / 0, h = 1 / 0, g = -1 / 0;
            if (e.forEach(vi), r = e[0], r.x = -r.r, r.y = 0, t(r), s > 1 && (u = e[1], u.x = u.r, 
            u.y = 0, t(u), s > 2)) for (i = e[2], yi(r, u, i), t(i), fi(r, i), r._pack_prev = i, 
            fi(i, u), u = r._pack_next, o = 3; s > o; o++) {
                yi(r, u, i = e[o]);
                var p = 0, v = 1, d = 1;
                for (a = u._pack_next; a !== u; a = a._pack_next, v++) if (gi(a, i)) {
                    p = 1;
                    break;
                }
                if (1 == p) for (c = r._pack_prev; c !== a._pack_prev && !gi(c, i); c = c._pack_prev, 
                d++) ;
                p ? (d > v || v == d && u.r < r.r ? hi(r, u = a) : hi(r = c, u), o--) : (fi(r, i), 
                u = i, t(i));
            }
            var m = (l + f) / 2, y = (h + g) / 2, x = 0;
            for (o = 0; s > o; o++) i = e[o], i.x -= m, i.y -= y, x = Math.max(x, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
            n.r = x, e.forEach(di);
        }
    }
    function vi(n) {
        n._pack_next = n._pack_prev = n;
    }
    function di(n) {
        delete n._pack_next, delete n._pack_prev;
    }
    function mi(n, t, e, r) {
        var u = n.children;
        if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u) for (var i = -1, o = u.length; ++i < o; ) mi(u[i], t, e, r);
    }
    function yi(n, t, e) {
        var r = n.r + e.r, u = t.x - n.x, i = t.y - n.y;
        if (r && (u || i)) {
            var o = t.r + e.r, a = u * u + i * i;
            o *= o, r *= r;
            var c = .5 + (r - o) / (2 * a), s = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
            e.x = n.x + c * u + s * i, e.y = n.y + c * i - s * u;
        } else e.x = n.x + r, e.y = n.y;
    }
    function xi(n, t) {
        return n.parent == t.parent ? 1 : 2;
    }
    function Mi(n) {
        var t = n.children;
        return t.length ? t[0] : n.t;
    }
    function _i(n) {
        var t, e = n.children;
        return (t = e.length) ? e[t - 1] : n.t;
    }
    function bi(n, t, e) {
        var r = e / (t.i - n.i);
        t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e;
    }
    function wi(n) {
        for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0; ) t = u[i], t.z += e, 
        t.m += e, e += t.s + (r += t.c);
    }
    function Si(n, t, e) {
        return n.a.parent === t.parent ? n.a : e;
    }
    function ki(n) {
        return 1 + Zo.max(n, function(n) {
            return n.y;
        });
    }
    function Ei(n) {
        return n.reduce(function(n, t) {
            return n + t.x;
        }, 0) / n.length;
    }
    function Ai(n) {
        var t = n.children;
        return t && t.length ? Ai(t[0]) : n;
    }
    function Ci(n) {
        var t, e = n.children;
        return e && (t = e.length) ? Ci(e[t - 1]) : n;
    }
    function Ni(n) {
        return {
            x: n.x,
            y: n.y,
            dx: n.dx,
            dy: n.dy
        };
    }
    function zi(n, t) {
        var e = n.x + t[3], r = n.y + t[0], u = n.dx - t[1] - t[3], i = n.dy - t[0] - t[2];
        return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {
            x: e,
            y: r,
            dx: u,
            dy: i
        };
    }
    function Li(n) {
        var t = n[0], e = n[n.length - 1];
        return e > t ? [ t, e ] : [ e, t ];
    }
    function Ti(n) {
        return n.rangeExtent ? n.rangeExtent() : Li(n.range());
    }
    function qi(n, t, e, r) {
        var u = e(n[0], n[1]), i = r(t[0], t[1]);
        return function(n) {
            return i(u(n));
        };
    }
    function Ri(n, t) {
        var e, r = 0, u = n.length - 1, i = n[r], o = n[u];
        return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), 
        n;
    }
    function Di(n) {
        return n ? {
            floor: function(t) {
                return Math.floor(t / n) * n;
            },
            ceil: function(t) {
                return Math.ceil(t / n) * n;
            }
        } : ss;
    }
    function Pi(n, t, e, r) {
        var u = [], i = [], o = 0, a = Math.min(n.length, t.length) - 1;
        for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a; ) u.push(e(n[o - 1], n[o])), 
        i.push(r(t[o - 1], t[o]));
        return function(t) {
            var e = Zo.bisect(n, t, 1, a) - 1;
            return i[e](u[e](t));
        };
    }
    function Ui(n, t, e, r) {
        function u() {
            var u = Math.min(n.length, t.length) > 2 ? Pi : qi, c = r ? Uu : Pu;
            return o = u(n, t, c, e), a = u(t, n, c, hu), i;
        }
        function i(n) {
            return o(n);
        }
        var o, a;
        return i.invert = function(n) {
            return a(n);
        }, i.domain = function(t) {
            return arguments.length ? (n = t.map(Number), u()) : n;
        }, i.range = function(n) {
            return arguments.length ? (t = n, u()) : t;
        }, i.rangeRound = function(n) {
            return i.range(n).interpolate(zu);
        }, i.clamp = function(n) {
            return arguments.length ? (r = n, u()) : r;
        }, i.interpolate = function(n) {
            return arguments.length ? (e = n, u()) : e;
        }, i.ticks = function(t) {
            return Oi(n, t);
        }, i.tickFormat = function(t, e) {
            return Yi(n, t, e);
        }, i.nice = function(t) {
            return Hi(n, t), u();
        }, i.copy = function() {
            return Ui(n, t, e, r);
        }, u();
    }
    function ji(n, t) {
        return Zo.rebind(n, t, "range", "rangeRound", "interpolate", "clamp");
    }
    function Hi(n, t) {
        return Ri(n, Di(Fi(n, t)[2]));
    }
    function Fi(n, t) {
        null == t && (t = 10);
        var e = Li(n), r = e[1] - e[0], u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)), i = t / r * u;
        return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, 
        e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e;
    }
    function Oi(n, t) {
        return Zo.range.apply(Zo, Fi(n, t));
    }
    function Yi(n, t, e) {
        var r = Fi(n, t);
        if (e) {
            var u = Ga.exec(e);
            if (u.shift(), "s" === u[8]) {
                var i = Zo.formatPrefix(Math.max(ua(r[0]), ua(r[1])));
                return u[7] || (u[7] = "." + Ii(i.scale(r[2]))), u[8] = "f", e = Zo.format(u.join("")), 
                function(n) {
                    return e(i.scale(n)) + i.symbol;
                };
            }
            u[7] || (u[7] = "." + Zi(u[8], r)), e = u.join("");
        } else e = ",." + Ii(r[2]) + "f";
        return Zo.format(e);
    }
    function Ii(n) {
        return -Math.floor(Math.log(n) / Math.LN10 + .01);
    }
    function Zi(n, t) {
        var e = Ii(t[2]);
        return n in ls ? Math.abs(e - Ii(Math.max(ua(t[0]), ua(t[1])))) + +("e" !== n) : e - 2 * ("%" === n);
    }
    function Vi(n, t, e, r) {
        function u(n) {
            return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t);
        }
        function i(n) {
            return e ? Math.pow(t, n) : -Math.pow(t, -n);
        }
        function o(t) {
            return n(u(t));
        }
        return o.invert = function(t) {
            return i(n.invert(t));
        }, o.domain = function(t) {
            return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), 
            o) : r;
        }, o.base = function(e) {
            return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t;
        }, o.nice = function() {
            var t = Ri(r.map(u), e ? Math : hs);
            return n.domain(t), r = t.map(i), o;
        }, o.ticks = function() {
            var n = Li(r), o = [], a = n[0], c = n[1], s = Math.floor(u(a)), l = Math.ceil(u(c)), f = t % 1 ? 2 : t;
            if (isFinite(l - s)) {
                if (e) {
                    for (;l > s; s++) for (var h = 1; f > h; h++) o.push(i(s) * h);
                    o.push(i(s));
                } else for (o.push(i(s)); s++ < l; ) for (var h = f - 1; h > 0; h--) o.push(i(s) * h);
                for (s = 0; o[s] < a; s++) ;
                for (l = o.length; o[l - 1] > c; l--) ;
                o = o.slice(s, l);
            }
            return o;
        }, o.tickFormat = function(n, t) {
            if (!arguments.length) return fs;
            arguments.length < 2 ? t = fs : "function" != typeof t && (t = Zo.format(t));
            var r, a = Math.max(.1, n / o.ticks().length), c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, 
            Math.floor);
            return function(n) {
                return n / i(c(u(n) + r)) <= a ? t(n) : "";
            };
        }, o.copy = function() {
            return Vi(n.copy(), t, e, r);
        }, ji(o, n);
    }
    function Xi(n, t, e) {
        function r(t) {
            return n(u(t));
        }
        var u = $i(t), i = $i(1 / t);
        return r.invert = function(t) {
            return i(n.invert(t));
        }, r.domain = function(t) {
            return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e;
        }, r.ticks = function(n) {
            return Oi(e, n);
        }, r.tickFormat = function(n, t) {
            return Yi(e, n, t);
        }, r.nice = function(n) {
            return r.domain(Hi(e, n));
        }, r.exponent = function(o) {
            return arguments.length ? (u = $i(t = o), i = $i(1 / t), n.domain(e.map(u)), r) : t;
        }, r.copy = function() {
            return Xi(n.copy(), t, e);
        }, ji(r, n);
    }
    function $i(n) {
        return function(t) {
            return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n);
        };
    }
    function Bi(n, t) {
        function e(e) {
            return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : 0/0)) - 1) % i.length];
        }
        function r(t, e) {
            return Zo.range(n.length).map(function(n) {
                return t + e * n;
            });
        }
        var u, i, a;
        return e.domain = function(r) {
            if (!arguments.length) return n;
            n = [], u = new o();
            for (var i, a = -1, c = r.length; ++a < c; ) u.has(i = r[a]) || u.set(i, n.push(i));
            return e[t.t].apply(e, t.a);
        }, e.range = function(n) {
            return arguments.length ? (i = n, a = 0, t = {
                t: "range",
                a: arguments
            }, e) : i;
        }, e.rangePoints = function(u, o) {
            arguments.length < 2 && (o = 0);
            var c = u[0], s = u[1], l = (s - c) / (Math.max(1, n.length - 1) + o);
            return i = r(n.length < 2 ? (c + s) / 2 : c + l * o / 2, l), a = 0, t = {
                t: "rangePoints",
                a: arguments
            }, e;
        }, e.rangeBands = function(u, o, c) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
            var s = u[1] < u[0], l = u[s - 0], f = u[1 - s], h = (f - l) / (n.length - o + 2 * c);
            return i = r(l + h * c, h), s && i.reverse(), a = h * (1 - o), t = {
                t: "rangeBands",
                a: arguments
            }, e;
        }, e.rangeRoundBands = function(u, o, c) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
            var s = u[1] < u[0], l = u[s - 0], f = u[1 - s], h = Math.floor((f - l) / (n.length - o + 2 * c)), g = f - l - (n.length - o) * h;
            return i = r(l + Math.round(g / 2), h), s && i.reverse(), a = Math.round(h * (1 - o)), 
            t = {
                t: "rangeRoundBands",
                a: arguments
            }, e;
        }, e.rangeBand = function() {
            return a;
        }, e.rangeExtent = function() {
            return Li(t.a[0]);
        }, e.copy = function() {
            return Bi(n, t);
        }, e.domain(n);
    }
    function Wi(e, r) {
        function u() {
            var n = 0, t = r.length;
            for (o = []; ++n < t; ) o[n - 1] = Zo.quantile(e, n / t);
            return i;
        }
        function i(n) {
            return isNaN(n = +n) ? void 0 : r[Zo.bisect(o, n)];
        }
        var o;
        return i.domain = function(r) {
            return arguments.length ? (e = r.filter(t).sort(n), u()) : e;
        }, i.range = function(n) {
            return arguments.length ? (r = n, u()) : r;
        }, i.quantiles = function() {
            return o;
        }, i.invertExtent = function(n) {
            return n = r.indexOf(n), 0 > n ? [ 0/0, 0/0 ] : [ n > 0 ? o[n - 1] : e[0], n < o.length ? o[n] : e[e.length - 1] ];
        }, i.copy = function() {
            return Wi(e, r);
        }, u();
    }
    function Ji(n, t, e) {
        function r(t) {
            return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))];
        }
        function u() {
            return i = e.length / (t - n), o = e.length - 1, r;
        }
        var i, o;
        return r.domain = function(e) {
            return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [ n, t ];
        }, r.range = function(n) {
            return arguments.length ? (e = n, u()) : e;
        }, r.invertExtent = function(t) {
            return t = e.indexOf(t), t = 0 > t ? 0/0 : t / i + n, [ t, t + 1 / i ];
        }, r.copy = function() {
            return Ji(n, t, e);
        }, u();
    }
    function Gi(n, t) {
        function e(e) {
            return e >= e ? t[Zo.bisect(n, e)] : void 0;
        }
        return e.domain = function(t) {
            return arguments.length ? (n = t, e) : n;
        }, e.range = function(n) {
            return arguments.length ? (t = n, e) : t;
        }, e.invertExtent = function(e) {
            return e = t.indexOf(e), [ n[e - 1], n[e] ];
        }, e.copy = function() {
            return Gi(n, t);
        }, e;
    }
    function Ki(n) {
        function t(n) {
            return +n;
        }
        return t.invert = t, t.domain = t.range = function(e) {
            return arguments.length ? (n = e.map(t), t) : n;
        }, t.ticks = function(t) {
            return Oi(n, t);
        }, t.tickFormat = function(t, e) {
            return Yi(n, t, e);
        }, t.copy = function() {
            return Ki(n);
        }, t;
    }
    function Qi(n) {
        return n.innerRadius;
    }
    function no(n) {
        return n.outerRadius;
    }
    function to(n) {
        return n.startAngle;
    }
    function eo(n) {
        return n.endAngle;
    }
    function ro(n) {
        function t(t) {
            function o() {
                s.push("M", i(n(l), a));
            }
            for (var c, s = [], l = [], f = -1, h = t.length, g = bt(e), p = bt(r); ++f < h; ) u.call(this, c = t[f], f) ? l.push([ +g.call(this, c, f), +p.call(this, c, f) ]) : l.length && (o(), 
            l = []);
            return l.length && o(), s.length ? s.join("") : null;
        }
        var e = wr, r = Sr, u = we, i = uo, o = i.key, a = .7;
        return t.x = function(n) {
            return arguments.length ? (e = n, t) : e;
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r;
        }, t.defined = function(n) {
            return arguments.length ? (u = n, t) : u;
        }, t.interpolate = function(n) {
            return arguments.length ? (o = "function" == typeof n ? i = n : (i = xs.get(n) || uo).key, 
            t) : o;
        }, t.tension = function(n) {
            return arguments.length ? (a = n, t) : a;
        }, t;
    }
    function uo(n) {
        return n.join("L");
    }
    function io(n) {
        return uo(n) + "Z";
    }
    function oo(n) {
        for (var t = 0, e = n.length, r = n[0], u = [ r[0], ",", r[1] ]; ++t < e; ) u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
        return e > 1 && u.push("H", r[0]), u.join("");
    }
    function ao(n) {
        for (var t = 0, e = n.length, r = n[0], u = [ r[0], ",", r[1] ]; ++t < e; ) u.push("V", (r = n[t])[1], "H", r[0]);
        return u.join("");
    }
    function co(n) {
        for (var t = 0, e = n.length, r = n[0], u = [ r[0], ",", r[1] ]; ++t < e; ) u.push("H", (r = n[t])[0], "V", r[1]);
        return u.join("");
    }
    function so(n, t) {
        return n.length < 4 ? uo(n) : n[1] + ho(n.slice(1, n.length - 1), go(n, t));
    }
    function lo(n, t) {
        return n.length < 3 ? uo(n) : n[0] + ho((n.push(n[0]), n), go([ n[n.length - 2] ].concat(n, [ n[1] ]), t));
    }
    function fo(n, t) {
        return n.length < 3 ? uo(n) : n[0] + ho(n, go(n, t));
    }
    function ho(n, t) {
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return uo(n);
        var e = n.length != t.length, r = "", u = n[0], i = n[1], o = t[0], a = o, c = 1;
        if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], 
        u = n[1], c = 2), t.length > 1) {
            a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
            for (var s = 2; s < t.length; s++, c++) i = n[c], a = t[s], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
        }
        if (e) {
            var l = n[c];
            r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + l[0] + "," + l[1];
        }
        return r;
    }
    function go(n, t) {
        for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c; ) e = i, 
        i = o, o = n[a], r.push([ u * (o[0] - e[0]), u * (o[1] - e[1]) ]);
        return r;
    }
    function po(n) {
        if (n.length < 3) return uo(n);
        var t = 1, e = n.length, r = n[0], u = r[0], i = r[1], o = [ u, u, u, (r = n[1])[0] ], a = [ i, i, i, r[1] ], c = [ u, ",", i, "L", xo(bs, o), ",", xo(bs, a) ];
        for (n.push(n[e - 1]); ++t <= e; ) r = n[t], o.shift(), o.push(r[0]), a.shift(), 
        a.push(r[1]), Mo(c, o, a);
        return n.pop(), c.push("L", r), c.join("");
    }
    function vo(n) {
        if (n.length < 4) return uo(n);
        for (var t, e = [], r = -1, u = n.length, i = [ 0 ], o = [ 0 ]; ++r < 3; ) t = n[r], 
        i.push(t[0]), o.push(t[1]);
        for (e.push(xo(bs, i) + "," + xo(bs, o)), --r; ++r < u; ) t = n[r], i.shift(), i.push(t[0]), 
        o.shift(), o.push(t[1]), Mo(e, i, o);
        return e.join("");
    }
    function mo(n) {
        for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4; ) e = n[r % u], 
        o.push(e[0]), a.push(e[1]);
        for (t = [ xo(bs, o), ",", xo(bs, a) ], --r; ++r < i; ) e = n[r % u], o.shift(), 
        o.push(e[0]), a.shift(), a.push(e[1]), Mo(t, o, a);
        return t.join("");
    }
    function yo(n, t) {
        var e = n.length - 1;
        if (e) for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, s = -1; ++s <= e; ) r = n[s], 
        u = s / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
        return po(n);
    }
    function xo(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3];
    }
    function Mo(n, t, e) {
        n.push("C", xo(Ms, t), ",", xo(Ms, e), ",", xo(_s, t), ",", xo(_s, e), ",", xo(bs, t), ",", xo(bs, e));
    }
    function _o(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0]);
    }
    function bo(n) {
        for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = _o(u, i); ++t < e; ) r[t] = (o + (o = _o(u = i, i = n[t + 1]))) / 2;
        return r[t] = o, r;
    }
    function wo(n) {
        for (var t, e, r, u, i = [], o = bo(n), a = -1, c = n.length - 1; ++a < c; ) t = _o(n[a], n[a + 1]), 
        ua(t) < ka ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, 
        u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
        for (a = -1; ++a <= c; ) u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), 
        i.push([ u || 0, o[a] * u || 0 ]);
        return i;
    }
    function So(n) {
        return n.length < 3 ? uo(n) : n[0] + ho(n, wo(n));
    }
    function ko(n) {
        for (var t, e, r, u = -1, i = n.length; ++u < i; ) t = n[u], e = t[0], r = t[1] + ms, 
        t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
        return n;
    }
    function Eo(n) {
        function t(t) {
            function c() {
                v.push("M", a(n(m), f), l, s(n(d.reverse()), f), "Z");
            }
            for (var h, g, p, v = [], d = [], m = [], y = -1, x = t.length, M = bt(e), _ = bt(u), b = e === r ? function() {
                return g;
            } : bt(r), w = u === i ? function() {
                return p;
            } : bt(i); ++y < x; ) o.call(this, h = t[y], y) ? (d.push([ g = +M.call(this, h, y), p = +_.call(this, h, y) ]), 
            m.push([ +b.call(this, h, y), +w.call(this, h, y) ])) : d.length && (c(), d = [], 
            m = []);
            return d.length && c(), v.length ? v.join("") : null;
        }
        var e = wr, r = wr, u = 0, i = Sr, o = we, a = uo, c = a.key, s = a, l = "L", f = .7;
        return t.x = function(n) {
            return arguments.length ? (e = r = n, t) : r;
        }, t.x0 = function(n) {
            return arguments.length ? (e = n, t) : e;
        }, t.x1 = function(n) {
            return arguments.length ? (r = n, t) : r;
        }, t.y = function(n) {
            return arguments.length ? (u = i = n, t) : i;
        }, t.y0 = function(n) {
            return arguments.length ? (u = n, t) : u;
        }, t.y1 = function(n) {
            return arguments.length ? (i = n, t) : i;
        }, t.defined = function(n) {
            return arguments.length ? (o = n, t) : o;
        }, t.interpolate = function(n) {
            return arguments.length ? (c = "function" == typeof n ? a = n : (a = xs.get(n) || uo).key, 
            s = a.reverse || a, l = a.closed ? "M" : "L", t) : c;
        }, t.tension = function(n) {
            return arguments.length ? (f = n, t) : f;
        }, t;
    }
    function Ao(n) {
        return n.radius;
    }
    function Co(n) {
        return [ n.x, n.y ];
    }
    function No(n) {
        return function() {
            var t = n.apply(this, arguments), e = t[0], r = t[1] + ms;
            return [ e * Math.cos(r), e * Math.sin(r) ];
        };
    }
    function zo() {
        return 64;
    }
    function Lo() {
        return "circle";
    }
    function To(n) {
        var t = Math.sqrt(n / ba);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z";
    }
    function qo(n, t) {
        return sa(n, Cs), n.id = t, n;
    }
    function Ro(n, t, e, r) {
        var u = n.id;
        return P(n, "function" == typeof e ? function(n, i, o) {
            n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, o)));
        } : (e = r(e), function(n) {
            n.__transition__[u].tween.set(t, e);
        }));
    }
    function Do(n) {
        return null == n && (n = ""), function() {
            this.textContent = n;
        };
    }
    function Po(n, t, e, r) {
        var u = n.__transition__ || (n.__transition__ = {
            active: 0,
            count: 0
        }), i = u[e];
        if (!i) {
            var a = r.time;
            i = u[e] = {
                tween: new o(),
                time: a,
                ease: r.ease,
                delay: r.delay,
                duration: r.duration
            }, ++u.count, Zo.timer(function(r) {
                function o(r) {
                    return u.active > e ? s() : (u.active = e, i.event && i.event.start.call(n, l, t), 
                    i.tween.forEach(function(e, r) {
                        (r = r.call(n, l, t)) && v.push(r);
                    }), void Zo.timer(function() {
                        return p.c = c(r || 1) ? we : c, 1;
                    }, 0, a));
                }
                function c(r) {
                    if (u.active !== e) return s();
                    for (var o = r / g, a = f(o), c = v.length; c > 0; ) v[--c].call(n, a);
                    return o >= 1 ? (i.event && i.event.end.call(n, l, t), s()) : void 0;
                }
                function s() {
                    return --u.count ? delete u[e] : delete n.__transition__, 1;
                }
                var l = n.__data__, f = i.ease, h = i.delay, g = i.duration, p = Ba, v = [];
                return p.t = h + a, r >= h ? o(r - h) : void (p.c = o);
            }, 0, a);
        }
    }
    function Uo(n, t) {
        n.attr("transform", function(n) {
            return "translate(" + t(n) + ",0)";
        });
    }
    function jo(n, t) {
        n.attr("transform", function(n) {
            return "translate(0," + t(n) + ")";
        });
    }
    function Ho(n) {
        return n.toISOString();
    }
    function Fo(n, t, e) {
        function r(t) {
            return n(t);
        }
        function u(n, e) {
            var r = n[1] - n[0], u = r / e, i = Zo.bisect(Us, u);
            return i == Us.length ? [ t.year, Fi(n.map(function(n) {
                return n / 31536e6;
            }), e)[2] ] : i ? t[u / Us[i - 1] < Us[i] / u ? i - 1 : i] : [ Fs, Fi(n, e)[2] ];
        }
        return r.invert = function(t) {
            return Oo(n.invert(t));
        }, r.domain = function(t) {
            return arguments.length ? (n.domain(t), r) : n.domain().map(Oo);
        }, r.nice = function(n, t) {
            function e(e) {
                return !isNaN(e) && !n.range(e, Oo(+e + 1), t).length;
            }
            var i = r.domain(), o = Li(i), a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
            return a && (n = a[0], t = a[1]), r.domain(Ri(i, t > 1 ? {
                floor: function(t) {
                    for (;e(t = n.floor(t)); ) t = Oo(t - 1);
                    return t;
                },
                ceil: function(t) {
                    for (;e(t = n.ceil(t)); ) t = Oo(+t + 1);
                    return t;
                }
            } : n));
        }, r.ticks = function(n, t) {
            var e = Li(r.domain()), i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [ {
                range: n
            }, t ];
            return i && (n = i[0], t = i[1]), n.range(e[0], Oo(+e[1] + 1), 1 > t ? 1 : t);
        }, r.tickFormat = function() {
            return e;
        }, r.copy = function() {
            return Fo(n.copy(), t, e);
        }, ji(r, n);
    }
    function Oo(n) {
        return new Date(n);
    }
    function Yo(n) {
        return JSON.parse(n.responseText);
    }
    function Io(n) {
        var t = $o.createRange();
        return t.selectNode($o.body), t.createContextualFragment(n.responseText);
    }
    var Zo = {
        version: "3.4.11"
    };
    Date.now || (Date.now = function() {
        return +new Date();
    });
    var Vo = [].slice, Xo = function(n) {
        return Vo.call(n);
    }, $o = document, Bo = $o.documentElement, Wo = window;
    try {
        Xo(Bo.childNodes)[0].nodeType;
    } catch (Jo) {
        Xo = function(n) {
            for (var t = n.length, e = new Array(t); t--; ) e[t] = n[t];
            return e;
        };
    }
    try {
        $o.createElement("div").style.setProperty("opacity", 0, "");
    } catch (Go) {
        var Ko = Wo.Element.prototype, Qo = Ko.setAttribute, na = Ko.setAttributeNS, ta = Wo.CSSStyleDeclaration.prototype, ea = ta.setProperty;
        Ko.setAttribute = function(n, t) {
            Qo.call(this, n, t + "");
        }, Ko.setAttributeNS = function(n, t, e) {
            na.call(this, n, t, e + "");
        }, ta.setProperty = function(n, t, e) {
            ea.call(this, n, t + "", e);
        };
    }
    Zo.ascending = n, Zo.descending = function(n, t) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0/0;
    }, Zo.min = function(n, t) {
        var e, r, u = -1, i = n.length;
        if (1 === arguments.length) {
            for (;++u < i && !(null != (e = n[u]) && e >= e); ) e = void 0;
            for (;++u < i; ) null != (r = n[u]) && e > r && (e = r);
        } else {
            for (;++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e); ) e = void 0;
            for (;++u < i; ) null != (r = t.call(n, n[u], u)) && e > r && (e = r);
        }
        return e;
    }, Zo.max = function(n, t) {
        var e, r, u = -1, i = n.length;
        if (1 === arguments.length) {
            for (;++u < i && !(null != (e = n[u]) && e >= e); ) e = void 0;
            for (;++u < i; ) null != (r = n[u]) && r > e && (e = r);
        } else {
            for (;++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e); ) e = void 0;
            for (;++u < i; ) null != (r = t.call(n, n[u], u)) && r > e && (e = r);
        }
        return e;
    }, Zo.extent = function(n, t) {
        var e, r, u, i = -1, o = n.length;
        if (1 === arguments.length) {
            for (;++i < o && !(null != (e = u = n[i]) && e >= e); ) e = u = void 0;
            for (;++i < o; ) null != (r = n[i]) && (e > r && (e = r), r > u && (u = r));
        } else {
            for (;++i < o && !(null != (e = u = t.call(n, n[i], i)) && e >= e); ) e = void 0;
            for (;++i < o; ) null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r));
        }
        return [ e, u ];
    }, Zo.sum = function(n, t) {
        var e, r = 0, u = n.length, i = -1;
        if (1 === arguments.length) for (;++i < u; ) isNaN(e = +n[i]) || (r += e); else for (;++i < u; ) isNaN(e = +t.call(n, n[i], i)) || (r += e);
        return r;
    }, Zo.mean = function(n, e) {
        var r, u = 0, i = n.length, o = -1, a = i;
        if (1 === arguments.length) for (;++o < i; ) t(r = n[o]) ? u += r : --a; else for (;++o < i; ) t(r = e.call(n, n[o], o)) ? u += r : --a;
        return a ? u / a : void 0;
    }, Zo.quantile = function(n, t) {
        var e = (n.length - 1) * t + 1, r = Math.floor(e), u = +n[r - 1], i = e - r;
        return i ? u + i * (n[r] - u) : u;
    }, Zo.median = function(e, r) {
        return arguments.length > 1 && (e = e.map(r)), e = e.filter(t), e.length ? Zo.quantile(e.sort(n), .5) : void 0;
    };
    var ra = e(n);
    Zo.bisectLeft = ra.left, Zo.bisect = Zo.bisectRight = ra.right, Zo.bisector = function(t) {
        return e(1 === t.length ? function(e, r) {
            return n(t(e), r);
        } : t);
    }, Zo.shuffle = function(n) {
        for (var t, e, r = n.length; r; ) e = 0 | Math.random() * r--, t = n[r], n[r] = n[e], 
        n[e] = t;
        return n;
    }, Zo.permute = function(n, t) {
        for (var e = t.length, r = new Array(e); e--; ) r[e] = n[t[e]];
        return r;
    }, Zo.pairs = function(n) {
        for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e; ) i[e] = [ t = u, u = n[++e] ];
        return i;
    }, Zo.zip = function() {
        if (!(u = arguments.length)) return [];
        for (var n = -1, t = Zo.min(arguments, r), e = new Array(t); ++n < t; ) for (var u, i = -1, o = e[n] = new Array(u); ++i < u; ) o[i] = arguments[i][n];
        return e;
    }, Zo.transpose = function(n) {
        return Zo.zip.apply(Zo, n);
    }, Zo.keys = function(n) {
        var t = [];
        for (var e in n) t.push(e);
        return t;
    }, Zo.values = function(n) {
        var t = [];
        for (var e in n) t.push(n[e]);
        return t;
    }, Zo.entries = function(n) {
        var t = [];
        for (var e in n) t.push({
            key: e,
            value: n[e]
        });
        return t;
    }, Zo.merge = function(n) {
        for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u; ) o += n[i].length;
        for (e = new Array(o); --u >= 0; ) for (r = n[u], t = r.length; --t >= 0; ) e[--o] = r[t];
        return e;
    };
    var ua = Math.abs;
    Zo.range = function(n, t, e) {
        if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / e) throw new Error("infinite range");
        var r, i = [], o = u(ua(e)), a = -1;
        if (n *= o, t *= o, e *= o, 0 > e) for (;(r = n + e * ++a) > t; ) i.push(r / o); else for (;(r = n + e * ++a) < t; ) i.push(r / o);
        return i;
    }, Zo.map = function(n) {
        var t = new o();
        if (n instanceof o) n.forEach(function(n, e) {
            t.set(n, e);
        }); else for (var e in n) t.set(e, n[e]);
        return t;
    }, i(o, {
        has: a,
        get: function(n) {
            return this[ia + n];
        },
        set: function(n, t) {
            return this[ia + n] = t;
        },
        remove: c,
        keys: s,
        values: function() {
            var n = [];
            return this.forEach(function(t, e) {
                n.push(e);
            }), n;
        },
        entries: function() {
            var n = [];
            return this.forEach(function(t, e) {
                n.push({
                    key: t,
                    value: e
                });
            }), n;
        },
        size: l,
        empty: f,
        forEach: function(n) {
            for (var t in this) t.charCodeAt(0) === oa && n.call(this, t.substring(1), this[t]);
        }
    });
    var ia = "\x00", oa = ia.charCodeAt(0);
    Zo.nest = function() {
        function n(t, a, c) {
            if (c >= i.length) return r ? r.call(u, a) : e ? a.sort(e) : a;
            for (var s, l, f, h, g = -1, p = a.length, v = i[c++], d = new o(); ++g < p; ) (h = d.get(s = v(l = a[g]))) ? h.push(l) : d.set(s, [ l ]);
            return t ? (l = t(), f = function(e, r) {
                l.set(e, n(t, r, c));
            }) : (l = {}, f = function(e, r) {
                l[e] = n(t, r, c);
            }), d.forEach(f), l;
        }
        function t(n, e) {
            if (e >= i.length) return n;
            var r = [], u = a[e++];
            return n.forEach(function(n, u) {
                r.push({
                    key: n,
                    values: t(u, e)
                });
            }), u ? r.sort(function(n, t) {
                return u(n.key, t.key);
            }) : r;
        }
        var e, r, u = {}, i = [], a = [];
        return u.map = function(t, e) {
            return n(e, t, 0);
        }, u.entries = function(e) {
            return t(n(Zo.map, e, 0), 0);
        }, u.key = function(n) {
            return i.push(n), u;
        }, u.sortKeys = function(n) {
            return a[i.length - 1] = n, u;
        }, u.sortValues = function(n) {
            return e = n, u;
        }, u.rollup = function(n) {
            return r = n, u;
        }, u;
    }, Zo.set = function(n) {
        var t = new h();
        if (n) for (var e = 0, r = n.length; r > e; ++e) t.add(n[e]);
        return t;
    }, i(h, {
        has: a,
        add: function(n) {
            return this[ia + n] = !0, n;
        },
        remove: function(n) {
            return n = ia + n, n in this && delete this[n];
        },
        values: s,
        size: l,
        empty: f,
        forEach: function(n) {
            for (var t in this) t.charCodeAt(0) === oa && n.call(this, t.substring(1));
        }
    }), Zo.behavior = {}, Zo.rebind = function(n, t) {
        for (var e, r = 1, u = arguments.length; ++r < u; ) n[e = arguments[r]] = g(n, t, t[e]);
        return n;
    };
    var aa = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
    Zo.dispatch = function() {
        for (var n = new d(), t = -1, e = arguments.length; ++t < e; ) n[arguments[t]] = m(n);
        return n;
    }, d.prototype.on = function(n, t) {
        var e = n.indexOf("."), r = "";
        if (e >= 0 && (r = n.substring(e + 1), n = n.substring(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
        if (2 === arguments.length) {
            if (null == t) for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
            return this;
        }
    }, Zo.event = null, Zo.requote = function(n) {
        return n.replace(ca, "\\$&");
    };
    var ca = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, sa = {}.__proto__ ? function(n, t) {
        n.__proto__ = t;
    } : function(n, t) {
        for (var e in t) n[e] = t[e];
    }, la = function(n, t) {
        return t.querySelector(n);
    }, fa = function(n, t) {
        return t.querySelectorAll(n);
    }, ha = Bo.matches || Bo[p(Bo, "matchesSelector")], ga = function(n, t) {
        return ha.call(n, t);
    };
    "function" == typeof Sizzle && (la = function(n, t) {
        return Sizzle(n, t)[0] || null;
    }, fa = Sizzle, ga = Sizzle.matchesSelector), Zo.selection = function() {
        return ma;
    };
    var pa = Zo.selection.prototype = [];
    pa.select = function(n) {
        var t, e, r, u, i = [];
        n = b(n);
        for (var o = -1, a = this.length; ++o < a; ) {
            i.push(t = []), t.parentNode = (r = this[o]).parentNode;
            for (var c = -1, s = r.length; ++c < s; ) (u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), 
            e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null);
        }
        return _(i);
    }, pa.selectAll = function(n) {
        var t, e, r = [];
        n = w(n);
        for (var u = -1, i = this.length; ++u < i; ) for (var o = this[u], a = -1, c = o.length; ++a < c; ) (e = o[a]) && (r.push(t = Xo(n.call(e, e.__data__, a, u))), 
        t.parentNode = e);
        return _(r);
    };
    var va = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    Zo.ns = {
        prefix: va,
        qualify: function(n) {
            var t = n.indexOf(":"), e = n;
            return t >= 0 && (e = n.substring(0, t), n = n.substring(t + 1)), va.hasOwnProperty(e) ? {
                space: va[e],
                local: n
            } : n;
        }
    }, pa.attr = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node();
                return n = Zo.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n);
            }
            for (t in n) this.each(S(t, n[t]));
            return this;
        }
        return this.each(S(n, t));
    }, pa.classed = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node(), r = (n = A(n)).length, u = -1;
                if (t = e.classList) {
                    for (;++u < r; ) if (!t.contains(n[u])) return !1;
                } else for (t = e.getAttribute("class"); ++u < r; ) if (!E(n[u]).test(t)) return !1;
                return !0;
            }
            for (t in n) this.each(C(t, n[t]));
            return this;
        }
        return this.each(C(n, t));
    }, pa.style = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = "");
                for (e in n) this.each(z(e, n[e], t));
                return this;
            }
            if (2 > r) return Wo.getComputedStyle(this.node(), null).getPropertyValue(n);
            e = "";
        }
        return this.each(z(n, t, e));
    }, pa.property = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) return this.node()[n];
            for (t in n) this.each(L(t, n[t]));
            return this;
        }
        return this.each(L(n, t));
    }, pa.text = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.textContent = null == t ? "" : t;
        } : null == n ? function() {
            this.textContent = "";
        } : function() {
            this.textContent = n;
        }) : this.node().textContent;
    }, pa.html = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.innerHTML = null == t ? "" : t;
        } : null == n ? function() {
            this.innerHTML = "";
        } : function() {
            this.innerHTML = n;
        }) : this.node().innerHTML;
    }, pa.append = function(n) {
        return n = T(n), this.select(function() {
            return this.appendChild(n.apply(this, arguments));
        });
    }, pa.insert = function(n, t) {
        return n = T(n), t = b(t), this.select(function() {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null);
        });
    }, pa.remove = function() {
        return this.each(function() {
            var n = this.parentNode;
            n && n.removeChild(this);
        });
    }, pa.data = function(n, t) {
        function e(n, e) {
            var r, u, i, a = n.length, f = e.length, h = Math.min(a, f), g = new Array(f), p = new Array(f), v = new Array(a);
            if (t) {
                var d, m = new o(), y = new o(), x = [];
                for (r = -1; ++r < a; ) d = t.call(u = n[r], u.__data__, r), m.has(d) ? v[r] = u : m.set(d, u), 
                x.push(d);
                for (r = -1; ++r < f; ) d = t.call(e, i = e[r], r), (u = m.get(d)) ? (g[r] = u, 
                u.__data__ = i) : y.has(d) || (p[r] = q(i)), y.set(d, i), m.remove(d);
                for (r = -1; ++r < a; ) m.has(x[r]) && (v[r] = n[r]);
            } else {
                for (r = -1; ++r < h; ) u = n[r], i = e[r], u ? (u.__data__ = i, g[r] = u) : p[r] = q(i);
                for (;f > r; ++r) p[r] = q(e[r]);
                for (;a > r; ++r) v[r] = n[r];
            }
            p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, c.push(p), 
            s.push(g), l.push(v);
        }
        var r, u, i = -1, a = this.length;
        if (!arguments.length) {
            for (n = new Array(a = (r = this[0]).length); ++i < a; ) (u = r[i]) && (n[i] = u.__data__);
            return n;
        }
        var c = U([]), s = _([]), l = _([]);
        if ("function" == typeof n) for (;++i < a; ) e(r = this[i], n.call(r, r.parentNode.__data__, i)); else for (;++i < a; ) e(r = this[i], n);
        return s.enter = function() {
            return c;
        }, s.exit = function() {
            return l;
        }, s;
    }, pa.datum = function(n) {
        return arguments.length ? this.property("__data__", n) : this.property("__data__");
    }, pa.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = R(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []), t.parentNode = (e = this[i]).parentNode;
            for (var a = 0, c = e.length; c > a; a++) (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r);
        }
        return _(u);
    }, pa.order = function() {
        for (var n = -1, t = this.length; ++n < t; ) for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0; ) (e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), 
        i = e);
        return this;
    }, pa.sort = function(n) {
        n = D.apply(this, arguments);
        for (var t = -1, e = this.length; ++t < e; ) this[t].sort(n);
        return this.order();
    }, pa.each = function(n) {
        return P(this, function(t, e, r) {
            n.call(t, t.__data__, e, r);
        });
    }, pa.call = function(n) {
        var t = Xo(arguments);
        return n.apply(t[0] = this, t), this;
    }, pa.empty = function() {
        return !this.node();
    }, pa.node = function() {
        for (var n = 0, t = this.length; t > n; n++) for (var e = this[n], r = 0, u = e.length; u > r; r++) {
            var i = e[r];
            if (i) return i;
        }
        return null;
    }, pa.size = function() {
        var n = 0;
        return this.each(function() {
            ++n;
        }), n;
    };
    var da = [];
    Zo.selection.enter = U, Zo.selection.enter.prototype = da, da.append = pa.append, 
    da.empty = pa.empty, da.node = pa.node, da.call = pa.call, da.size = pa.size, da.select = function(n) {
        for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c; ) {
            r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
            for (var s = -1, l = u.length; ++s < l; ) (i = u[s]) ? (t.push(r[s] = e = n.call(u.parentNode, i.__data__, s, a)), 
            e.__data__ = i.__data__) : t.push(null);
        }
        return _(o);
    }, da.insert = function(n, t) {
        return arguments.length < 2 && (t = j(this)), pa.insert.call(this, n, t);
    }, pa.transition = function() {
        for (var n, t, e = Ss || ++Ns, r = [], u = ks || {
            time: Date.now(),
            ease: xu,
            delay: 0,
            duration: 250
        }, i = -1, o = this.length; ++i < o; ) {
            r.push(n = []);
            for (var a = this[i], c = -1, s = a.length; ++c < s; ) (t = a[c]) && Po(t, c, e, u), 
            n.push(t);
        }
        return qo(r, e);
    }, pa.interrupt = function() {
        return this.each(H);
    }, Zo.select = function(n) {
        var t = [ "string" == typeof n ? la(n, $o) : n ];
        return t.parentNode = Bo, _([ t ]);
    }, Zo.selectAll = function(n) {
        var t = Xo("string" == typeof n ? fa(n, $o) : n);
        return t.parentNode = Bo, _([ t ]);
    };
    var ma = Zo.select(Bo);
    pa.on = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = !1);
                for (e in n) this.each(F(e, n[e], t));
                return this;
            }
            if (2 > r) return (r = this.node()["__on" + n]) && r._;
            e = !1;
        }
        return this.each(F(n, t, e));
    };
    var ya = Zo.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    ya.forEach(function(n) {
        "on" + n in $o && ya.remove(n);
    });
    var xa = "onselectstart" in $o ? null : p(Bo.style, "userSelect"), Ma = 0;
    Zo.mouse = function(n) {
        return Z(n, x());
    };
    var _a = /WebKit/.test(Wo.navigator.userAgent) ? -1 : 0;
    Zo.touches = function(n, t) {
        return arguments.length < 2 && (t = x().touches), t ? Xo(t).map(function(t) {
            var e = Z(n, t);
            return e.identifier = t.identifier, e;
        }) : [];
    }, Zo.behavior.drag = function() {
        function n() {
            this.on("mousedown.drag", u).on("touchstart.drag", i);
        }
        function t(n, t, u, i, o) {
            return function() {
                function a() {
                    var n, e, r = t(h, v);
                    r && (n = r[0] - x[0], e = r[1] - x[1], p |= n | e, x = r, g({
                        type: "drag",
                        x: r[0] + s[0],
                        y: r[1] + s[1],
                        dx: n,
                        dy: e
                    }));
                }
                function c() {
                    t(h, v) && (m.on(i + d, null).on(o + d, null), y(p && Zo.event.target === f), g({
                        type: "dragend"
                    }));
                }
                var s, l = this, f = Zo.event.target, h = l.parentNode, g = e.of(l, arguments), p = 0, v = n(), d = ".drag" + (null == v ? "" : "-" + v), m = Zo.select(u()).on(i + d, a).on(o + d, c), y = I(), x = t(h, v);
                r ? (s = r.apply(l, arguments), s = [ s.x - x[0], s.y - x[1] ]) : s = [ 0, 0 ], 
                g({
                    type: "dragstart"
                });
            };
        }
        var e = M(n, "drag", "dragstart", "dragend"), r = null, u = t(v, Zo.mouse, $, "mousemove", "mouseup"), i = t(V, Zo.touch, X, "touchmove", "touchend");
        return n.origin = function(t) {
            return arguments.length ? (r = t, n) : r;
        }, Zo.rebind(n, e, "on");
    };
    var ba = Math.PI, wa = 2 * ba, Sa = ba / 2, ka = 1e-6, Ea = ka * ka, Aa = ba / 180, Ca = 180 / ba, Na = Math.SQRT2, za = 2, La = 4;
    Zo.interpolateZoom = function(n, t) {
        function e(n) {
            var t = n * y;
            if (m) {
                var e = Q(v), o = i / (za * h) * (e * nt(Na * t + v) - K(v));
                return [ r + o * s, u + o * l, i * e / Q(Na * t + v) ];
            }
            return [ r + n * s, u + n * l, i * Math.exp(Na * t) ];
        }
        var r = n[0], u = n[1], i = n[2], o = t[0], a = t[1], c = t[2], s = o - r, l = a - u, f = s * s + l * l, h = Math.sqrt(f), g = (c * c - i * i + La * f) / (2 * i * za * h), p = (c * c - i * i - La * f) / (2 * c * za * h), v = Math.log(Math.sqrt(g * g + 1) - g), d = Math.log(Math.sqrt(p * p + 1) - p), m = d - v, y = (m || Math.log(c / i)) / Na;
        return e.duration = 1e3 * y, e;
    }, Zo.behavior.zoom = function() {
        function n(n) {
            n.on(A, s).on(Ra + ".zoom", f).on("dblclick.zoom", h).on(z, l);
        }
        function t(n) {
            return [ (n[0] - S.x) / S.k, (n[1] - S.y) / S.k ];
        }
        function e(n) {
            return [ n[0] * S.k + S.x, n[1] * S.k + S.y ];
        }
        function r(n) {
            S.k = Math.max(E[0], Math.min(E[1], n));
        }
        function u(n, t) {
            t = e(t), S.x += n[0] - t[0], S.y += n[1] - t[1];
        }
        function i() {
            _ && _.domain(x.range().map(function(n) {
                return (n - S.x) / S.k;
            }).map(x.invert)), w && w.domain(b.range().map(function(n) {
                return (n - S.y) / S.k;
            }).map(b.invert));
        }
        function o(n) {
            n({
                type: "zoomstart"
            });
        }
        function a(n) {
            i(), n({
                type: "zoom",
                scale: S.k,
                translate: [ S.x, S.y ]
            });
        }
        function c(n) {
            n({
                type: "zoomend"
            });
        }
        function s() {
            function n() {
                l = 1, u(Zo.mouse(r), h), a(s);
            }
            function e() {
                f.on(C, null).on(N, null), g(l && Zo.event.target === i), c(s);
            }
            var r = this, i = Zo.event.target, s = L.of(r, arguments), l = 0, f = Zo.select(Wo).on(C, n).on(N, e), h = t(Zo.mouse(r)), g = I();
            H.call(r), o(s);
        }
        function l() {
            function n() {
                var n = Zo.touches(g);
                return h = S.k, n.forEach(function(n) {
                    n.identifier in v && (v[n.identifier] = t(n));
                }), n;
            }
            function e() {
                var t = Zo.event.target;
                Zo.select(t).on(M, i).on(_, f), b.push(t);
                for (var e = Zo.event.changedTouches, o = 0, c = e.length; c > o; ++o) v[e[o].identifier] = null;
                var s = n(), l = Date.now();
                if (1 === s.length) {
                    if (500 > l - m) {
                        var h = s[0], g = v[h.identifier];
                        r(2 * S.k), u(h, g), y(), a(p);
                    }
                    m = l;
                } else if (s.length > 1) {
                    var h = s[0], x = s[1], w = h[0] - x[0], k = h[1] - x[1];
                    d = w * w + k * k;
                }
            }
            function i() {
                for (var n, t, e, i, o = Zo.touches(g), c = 0, s = o.length; s > c; ++c, i = null) if (e = o[c], 
                i = v[e.identifier]) {
                    if (t) break;
                    n = e, t = i;
                }
                if (i) {
                    var l = (l = e[0] - n[0]) * l + (l = e[1] - n[1]) * l, f = d && Math.sqrt(l / d);
                    n = [ (n[0] + e[0]) / 2, (n[1] + e[1]) / 2 ], t = [ (t[0] + i[0]) / 2, (t[1] + i[1]) / 2 ], 
                    r(f * h);
                }
                m = null, u(n, t), a(p);
            }
            function f() {
                if (Zo.event.touches.length) {
                    for (var t = Zo.event.changedTouches, e = 0, r = t.length; r > e; ++e) delete v[t[e].identifier];
                    for (var u in v) return void n();
                }
                Zo.selectAll(b).on(x, null), w.on(A, s).on(z, l), k(), c(p);
            }
            var h, g = this, p = L.of(g, arguments), v = {}, d = 0, x = ".zoom-" + Zo.event.changedTouches[0].identifier, M = "touchmove" + x, _ = "touchend" + x, b = [], w = Zo.select(g).on(A, null).on(z, e), k = I();
            H.call(g), e(), o(p);
        }
        function f() {
            var n = L.of(this, arguments);
            d ? clearTimeout(d) : (g = t(p = v || Zo.mouse(this)), H.call(this), o(n)), d = setTimeout(function() {
                d = null, c(n);
            }, 50), y(), r(Math.pow(2, .002 * Ta()) * S.k), u(p, g), a(n);
        }
        function h() {
            var n = L.of(this, arguments), e = Zo.mouse(this), i = t(e), s = Math.log(S.k) / Math.LN2;
            o(n), r(Math.pow(2, Zo.event.shiftKey ? Math.ceil(s) - 1 : Math.floor(s) + 1)), 
            u(e, i), a(n), c(n);
        }
        var g, p, v, d, m, x, _, b, w, S = {
            x: 0,
            y: 0,
            k: 1
        }, k = [ 960, 500 ], E = qa, A = "mousedown.zoom", C = "mousemove.zoom", N = "mouseup.zoom", z = "touchstart.zoom", L = M(n, "zoomstart", "zoom", "zoomend");
        return n.event = function(n) {
            n.each(function() {
                var n = L.of(this, arguments), t = S;
                Ss ? Zo.select(this).transition().each("start.zoom", function() {
                    S = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, o(n);
                }).tween("zoom:zoom", function() {
                    var e = k[0], r = k[1], u = e / 2, i = r / 2, o = Zo.interpolateZoom([ (u - S.x) / S.k, (i - S.y) / S.k, e / S.k ], [ (u - t.x) / t.k, (i - t.y) / t.k, e / t.k ]);
                    return function(t) {
                        var r = o(t), c = e / r[2];
                        this.__chart__ = S = {
                            x: u - r[0] * c,
                            y: i - r[1] * c,
                            k: c
                        }, a(n);
                    };
                }).each("end.zoom", function() {
                    c(n);
                }) : (this.__chart__ = S, o(n), a(n), c(n));
            });
        }, n.translate = function(t) {
            return arguments.length ? (S = {
                x: +t[0],
                y: +t[1],
                k: S.k
            }, i(), n) : [ S.x, S.y ];
        }, n.scale = function(t) {
            return arguments.length ? (S = {
                x: S.x,
                y: S.y,
                k: +t
            }, i(), n) : S.k;
        }, n.scaleExtent = function(t) {
            return arguments.length ? (E = null == t ? qa : [ +t[0], +t[1] ], n) : E;
        }, n.center = function(t) {
            return arguments.length ? (v = t && [ +t[0], +t[1] ], n) : v;
        }, n.size = function(t) {
            return arguments.length ? (k = t && [ +t[0], +t[1] ], n) : k;
        }, n.x = function(t) {
            return arguments.length ? (_ = t, x = t.copy(), S = {
                x: 0,
                y: 0,
                k: 1
            }, n) : _;
        }, n.y = function(t) {
            return arguments.length ? (w = t, b = t.copy(), S = {
                x: 0,
                y: 0,
                k: 1
            }, n) : w;
        }, Zo.rebind(n, L, "on");
    };
    var Ta, qa = [ 0, 1 / 0 ], Ra = "onwheel" in $o ? (Ta = function() {
        return -Zo.event.deltaY * (Zo.event.deltaMode ? 120 : 1);
    }, "wheel") : "onmousewheel" in $o ? (Ta = function() {
        return Zo.event.wheelDelta;
    }, "mousewheel") : (Ta = function() {
        return -Zo.event.detail;
    }, "MozMousePixelScroll");
    Zo.color = et, et.prototype.toString = function() {
        return this.rgb() + "";
    }, Zo.hsl = rt;
    var Da = rt.prototype = new et();
    Da.brighter = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), new rt(this.h, this.s, this.l / n);
    }, Da.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), new rt(this.h, this.s, n * this.l);
    }, Da.rgb = function() {
        return ut(this.h, this.s, this.l);
    }, Zo.hcl = it;
    var Pa = it.prototype = new et();
    Pa.brighter = function(n) {
        return new it(this.h, this.c, Math.min(100, this.l + Ua * (arguments.length ? n : 1)));
    }, Pa.darker = function(n) {
        return new it(this.h, this.c, Math.max(0, this.l - Ua * (arguments.length ? n : 1)));
    }, Pa.rgb = function() {
        return ot(this.h, this.c, this.l).rgb();
    }, Zo.lab = at;
    var Ua = 18, ja = .95047, Ha = 1, Fa = 1.08883, Oa = at.prototype = new et();
    Oa.brighter = function(n) {
        return new at(Math.min(100, this.l + Ua * (arguments.length ? n : 1)), this.a, this.b);
    }, Oa.darker = function(n) {
        return new at(Math.max(0, this.l - Ua * (arguments.length ? n : 1)), this.a, this.b);
    }, Oa.rgb = function() {
        return ct(this.l, this.a, this.b);
    }, Zo.rgb = gt;
    var Ya = gt.prototype = new et();
    Ya.brighter = function(n) {
        n = Math.pow(.7, arguments.length ? n : 1);
        var t = this.r, e = this.g, r = this.b, u = 30;
        return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), 
        new gt(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new gt(u, u, u);
    }, Ya.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), new gt(n * this.r, n * this.g, n * this.b);
    }, Ya.hsl = function() {
        return yt(this.r, this.g, this.b);
    }, Ya.toString = function() {
        return "#" + dt(this.r) + dt(this.g) + dt(this.b);
    };
    var Ia = Zo.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    Ia.forEach(function(n, t) {
        Ia.set(n, pt(t));
    }), Zo.functor = bt, Zo.xhr = St(wt), Zo.dsv = function(n, t) {
        function e(n, e, i) {
            arguments.length < 3 && (i = e, e = null);
            var o = kt(n, t, null == e ? r : u(e), i);
            return o.row = function(n) {
                return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e;
            }, o;
        }
        function r(n) {
            return e.parse(n.responseText);
        }
        function u(n) {
            return function(t) {
                return e.parse(t.responseText, n);
            };
        }
        function i(t) {
            return t.map(o).join(n);
        }
        function o(n) {
            return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n;
        }
        var a = new RegExp('["' + n + "\n]"), c = n.charCodeAt(0);
        return e.parse = function(n, t) {
            var r;
            return e.parseRows(n, function(n, e) {
                if (r) return r(n, e - 1);
                var u = new Function("d", "return {" + n.map(function(n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]";
                }).join(",") + "}");
                r = t ? function(n, e) {
                    return t(u(n), e);
                } : u;
            });
        }, e.parseRows = function(n, t) {
            function e() {
                if (l >= s) return o;
                if (u) return u = !1, i;
                var t = l;
                if (34 === n.charCodeAt(t)) {
                    for (var e = t; e++ < s; ) if (34 === n.charCodeAt(e)) {
                        if (34 !== n.charCodeAt(e + 1)) break;
                        ++e;
                    }
                    l = e + 2;
                    var r = n.charCodeAt(e + 1);
                    return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++l) : 10 === r && (u = !0), 
                    n.substring(t + 1, e).replace(/""/g, '"');
                }
                for (;s > l; ) {
                    var r = n.charCodeAt(l++), a = 1;
                    if (10 === r) u = !0; else if (13 === r) u = !0, 10 === n.charCodeAt(l) && (++l, 
                    ++a); else if (r !== c) continue;
                    return n.substring(t, l - a);
                }
                return n.substring(t);
            }
            for (var r, u, i = {}, o = {}, a = [], s = n.length, l = 0, f = 0; (r = e()) !== o; ) {
                for (var h = []; r !== i && r !== o; ) h.push(r), r = e();
                (!t || (h = t(h, f++))) && a.push(h);
            }
            return a;
        }, e.format = function(t) {
            if (Array.isArray(t[0])) return e.formatRows(t);
            var r = new h(), u = [];
            return t.forEach(function(n) {
                for (var t in n) r.has(t) || u.push(r.add(t));
            }), [ u.map(o).join(n) ].concat(t.map(function(t) {
                return u.map(function(n) {
                    return o(t[n]);
                }).join(n);
            })).join("\n");
        }, e.formatRows = function(n) {
            return n.map(i).join("\n");
        }, e;
    }, Zo.csv = Zo.dsv(",", "text/csv"), Zo.tsv = Zo.dsv("	", "text/tab-separated-values"), 
    Zo.touch = function(n, t, e) {
        if (arguments.length < 3 && (e = t, t = x().changedTouches), t) for (var r, u = 0, i = t.length; i > u; ++u) if ((r = t[u]).identifier === e) return Z(n, r);
    };
    var Za, Va, Xa, $a, Ba, Wa = Wo[p(Wo, "requestAnimationFrame")] || function(n) {
        setTimeout(n, 17);
    };
    Zo.timer = function(n, t, e) {
        var r = arguments.length;
        2 > r && (t = 0), 3 > r && (e = Date.now());
        var u = e + t, i = {
            c: n,
            t: u,
            f: !1,
            n: null
        };
        Va ? Va.n = i : Za = i, Va = i, Xa || ($a = clearTimeout($a), Xa = 1, Wa(At));
    }, Zo.timer.flush = function() {
        Ct(), Nt();
    }, Zo.round = function(n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n);
    };
    var Ja = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(Lt);
    Zo.formatPrefix = function(n, t) {
        var e = 0;
        return n && (0 > n && (n *= -1), t && (n = Zo.round(n, zt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), 
        e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), Ja[8 + e / 3];
    };
    var Ga = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, Ka = Zo.map({
        b: function(n) {
            return n.toString(2);
        },
        c: function(n) {
            return String.fromCharCode(n);
        },
        o: function(n) {
            return n.toString(8);
        },
        x: function(n) {
            return n.toString(16);
        },
        X: function(n) {
            return n.toString(16).toUpperCase();
        },
        g: function(n, t) {
            return n.toPrecision(t);
        },
        e: function(n, t) {
            return n.toExponential(t);
        },
        f: function(n, t) {
            return n.toFixed(t);
        },
        r: function(n, t) {
            return (n = Zo.round(n, zt(n, t))).toFixed(Math.max(0, Math.min(20, zt(n * (1 + 1e-15), t))));
        }
    }), Qa = Zo.time = {}, nc = Date;
    Rt.prototype = {
        getDate: function() {
            return this._.getUTCDate();
        },
        getDay: function() {
            return this._.getUTCDay();
        },
        getFullYear: function() {
            return this._.getUTCFullYear();
        },
        getHours: function() {
            return this._.getUTCHours();
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds();
        },
        getMinutes: function() {
            return this._.getUTCMinutes();
        },
        getMonth: function() {
            return this._.getUTCMonth();
        },
        getSeconds: function() {
            return this._.getUTCSeconds();
        },
        getTime: function() {
            return this._.getTime();
        },
        getTimezoneOffset: function() {
            return 0;
        },
        valueOf: function() {
            return this._.valueOf();
        },
        setDate: function() {
            tc.setUTCDate.apply(this._, arguments);
        },
        setDay: function() {
            tc.setUTCDay.apply(this._, arguments);
        },
        setFullYear: function() {
            tc.setUTCFullYear.apply(this._, arguments);
        },
        setHours: function() {
            tc.setUTCHours.apply(this._, arguments);
        },
        setMilliseconds: function() {
            tc.setUTCMilliseconds.apply(this._, arguments);
        },
        setMinutes: function() {
            tc.setUTCMinutes.apply(this._, arguments);
        },
        setMonth: function() {
            tc.setUTCMonth.apply(this._, arguments);
        },
        setSeconds: function() {
            tc.setUTCSeconds.apply(this._, arguments);
        },
        setTime: function() {
            tc.setTime.apply(this._, arguments);
        }
    };
    var tc = Date.prototype;
    Qa.year = Dt(function(n) {
        return n = Qa.day(n), n.setMonth(0, 1), n;
    }, function(n, t) {
        n.setFullYear(n.getFullYear() + t);
    }, function(n) {
        return n.getFullYear();
    }), Qa.years = Qa.year.range, Qa.years.utc = Qa.year.utc.range, Qa.day = Dt(function(n) {
        var t = new nc(2e3, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t;
    }, function(n, t) {
        n.setDate(n.getDate() + t);
    }, function(n) {
        return n.getDate() - 1;
    }), Qa.days = Qa.day.range, Qa.days.utc = Qa.day.utc.range, Qa.dayOfYear = function(n) {
        var t = Qa.year(n);
        return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5);
    }, [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(n, t) {
        t = 7 - t;
        var e = Qa[n] = Dt(function(n) {
            return (n = Qa.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n;
        }, function(n, t) {
            n.setDate(n.getDate() + 7 * Math.floor(t));
        }, function(n) {
            var e = Qa.year(n).getDay();
            return Math.floor((Qa.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t);
        });
        Qa[n + "s"] = e.range, Qa[n + "s"].utc = e.utc.range, Qa[n + "OfYear"] = function(n) {
            var e = Qa.year(n).getDay();
            return Math.floor((Qa.dayOfYear(n) + (e + t) % 7) / 7);
        };
    }), Qa.week = Qa.sunday, Qa.weeks = Qa.sunday.range, Qa.weeks.utc = Qa.sunday.utc.range, 
    Qa.weekOfYear = Qa.sundayOfYear;
    var ec = {
        "-": "",
        _: " ",
        0: "0"
    }, rc = /^\s*\d+/, uc = /^%/;
    Zo.locale = function(n) {
        return {
            numberFormat: Tt(n),
            timeFormat: Ut(n)
        };
    };
    var ic = Zo.locale({
        decimal: ".",
        thousands: ",",
        grouping: [ 3 ],
        currency: [ "$", "" ],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: [ "AM", "PM" ],
        days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
        shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
        months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
        shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    });
    Zo.format = ic.numberFormat, Zo.geo = {}, ue.prototype = {
        s: 0,
        t: 0,
        add: function(n) {
            ie(n, this.t, oc), ie(oc.s, this.s, this), this.s ? this.t += oc.t : this.s = oc.t;
        },
        reset: function() {
            this.s = this.t = 0;
        },
        valueOf: function() {
            return this.s;
        }
    };
    var oc = new ue();
    Zo.geo.stream = function(n, t) {
        n && ac.hasOwnProperty(n.type) ? ac[n.type](n, t) : oe(n, t);
    };
    var ac = {
        Feature: function(n, t) {
            oe(n.geometry, t);
        },
        FeatureCollection: function(n, t) {
            for (var e = n.features, r = -1, u = e.length; ++r < u; ) oe(e[r].geometry, t);
        }
    }, cc = {
        Sphere: function(n, t) {
            t.sphere();
        },
        Point: function(n, t) {
            n = n.coordinates, t.point(n[0], n[1], n[2]);
        },
        MultiPoint: function(n, t) {
            for (var e = n.coordinates, r = -1, u = e.length; ++r < u; ) n = e[r], t.point(n[0], n[1], n[2]);
        },
        LineString: function(n, t) {
            ae(n.coordinates, t, 0);
        },
        MultiLineString: function(n, t) {
            for (var e = n.coordinates, r = -1, u = e.length; ++r < u; ) ae(e[r], t, 0);
        },
        Polygon: function(n, t) {
            ce(n.coordinates, t);
        },
        MultiPolygon: function(n, t) {
            for (var e = n.coordinates, r = -1, u = e.length; ++r < u; ) ce(e[r], t);
        },
        GeometryCollection: function(n, t) {
            for (var e = n.geometries, r = -1, u = e.length; ++r < u; ) oe(e[r], t);
        }
    };
    Zo.geo.area = function(n) {
        return sc = 0, Zo.geo.stream(n, fc), sc;
    };
    var sc, lc = new ue(), fc = {
        sphere: function() {
            sc += 4 * ba;
        },
        point: v,
        lineStart: v,
        lineEnd: v,
        polygonStart: function() {
            lc.reset(), fc.lineStart = se;
        },
        polygonEnd: function() {
            var n = 2 * lc;
            sc += 0 > n ? 4 * ba + n : n, fc.lineStart = fc.lineEnd = fc.point = v;
        }
    };
    Zo.geo.bounds = function() {
        function n(n, t) {
            x.push(M = [ l = n, h = n ]), f > t && (f = t), t > g && (g = t);
        }
        function t(t, e) {
            var r = le([ t * Aa, e * Aa ]);
            if (m) {
                var u = he(m, r), i = [ u[1], -u[0], 0 ], o = he(i, u);
                ve(o), o = de(o);
                var c = t - p, s = c > 0 ? 1 : -1, v = o[0] * Ca * s, d = ua(c) > 180;
                if (d ^ (v > s * p && s * t > v)) {
                    var y = o[1] * Ca;
                    y > g && (g = y);
                } else if (v = (v + 360) % 360 - 180, d ^ (v > s * p && s * t > v)) {
                    var y = -o[1] * Ca;
                    f > y && (f = y);
                } else f > e && (f = e), e > g && (g = e);
                d ? p > t ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t) : h >= l ? (l > t && (l = t), 
                t > h && (h = t)) : t > p ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t);
            } else n(t, e);
            m = r, p = t;
        }
        function e() {
            _.point = t;
        }
        function r() {
            M[0] = l, M[1] = h, _.point = n, m = null;
        }
        function u(n, e) {
            if (m) {
                var r = n - p;
                y += ua(r) > 180 ? r + (r > 0 ? 360 : -360) : r;
            } else v = n, d = e;
            fc.point(n, e), t(n, e);
        }
        function i() {
            fc.lineStart();
        }
        function o() {
            u(v, d), fc.lineEnd(), ua(y) > ka && (l = -(h = 180)), M[0] = l, M[1] = h, m = null;
        }
        function a(n, t) {
            return (t -= n) < 0 ? t + 360 : t;
        }
        function c(n, t) {
            return n[0] - t[0];
        }
        function s(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
        }
        var l, f, h, g, p, v, d, m, y, x, M, _ = {
            point: n,
            lineStart: e,
            lineEnd: r,
            polygonStart: function() {
                _.point = u, _.lineStart = i, _.lineEnd = o, y = 0, fc.polygonStart();
            },
            polygonEnd: function() {
                fc.polygonEnd(), _.point = n, _.lineStart = e, _.lineEnd = r, 0 > lc ? (l = -(h = 180), 
                f = -(g = 90)) : y > ka ? g = 90 : -ka > y && (f = -90), M[0] = l, M[1] = h;
            }
        };
        return function(n) {
            g = h = -(l = f = 1 / 0), x = [], Zo.geo.stream(n, _);
            var t = x.length;
            if (t) {
                x.sort(c);
                for (var e, r = 1, u = x[0], i = [ u ]; t > r; ++r) e = x[r], s(e[0], u) || s(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), 
                a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
                for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r) e = i[r], 
                (o = a(u[1], e[0])) > p && (p = o, l = e[0], h = u[1]);
            }
            return x = M = null, 1 / 0 === l || 1 / 0 === f ? [ [ 0/0, 0/0 ], [ 0/0, 0/0 ] ] : [ [ l, f ], [ h, g ] ];
        };
    }(), Zo.geo.centroid = function(n) {
        hc = gc = pc = vc = dc = mc = yc = xc = Mc = _c = bc = 0, Zo.geo.stream(n, wc);
        var t = Mc, e = _c, r = bc, u = t * t + e * e + r * r;
        return Ea > u && (t = mc, e = yc, r = xc, ka > gc && (t = pc, e = vc, r = dc), u = t * t + e * e + r * r, 
        Ea > u) ? [ 0/0, 0/0 ] : [ Math.atan2(e, t) * Ca, G(r / Math.sqrt(u)) * Ca ];
    };
    var hc, gc, pc, vc, dc, mc, yc, xc, Mc, _c, bc, wc = {
        sphere: v,
        point: ye,
        lineStart: Me,
        lineEnd: _e,
        polygonStart: function() {
            wc.lineStart = be;
        },
        polygonEnd: function() {
            wc.lineStart = Me;
        }
    }, Sc = Ae(we, Te, Re, [ -ba, -ba / 2 ]), kc = 1e9;
    Zo.geo.clipExtent = function() {
        var n, t, e, r, u, i, o = {
            stream: function(n) {
                return u && (u.valid = !1), u = i(n), u.valid = !0, u;
            },
            extent: function(a) {
                return arguments.length ? (i = Ue(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), 
                u && (u.valid = !1, u = null), o) : [ [ n, t ], [ e, r ] ];
            }
        };
        return o.extent([ [ 0, 0 ], [ 960, 500 ] ]);
    }, (Zo.geo.conicEqualArea = function() {
        return He(Fe);
    }).raw = Fe, Zo.geo.albers = function() {
        return Zo.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
    }, Zo.geo.albersUsa = function() {
        function n(n) {
            var i = n[0], o = n[1];
            return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t;
        }
        var t, e, r, u, i = Zo.geo.albers(), o = Zo.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]), a = Zo.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]), c = {
            point: function(n, e) {
                t = [ n, e ];
            }
        };
        return n.invert = function(n) {
            var t = i.scale(), e = i.translate(), r = (n[0] - e[0]) / t, u = (n[1] - e[1]) / t;
            return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n);
        }, n.stream = function(n) {
            var t = i.stream(n), e = o.stream(n), r = a.stream(n);
            return {
                point: function(n, u) {
                    t.point(n, u), e.point(n, u), r.point(n, u);
                },
                sphere: function() {
                    t.sphere(), e.sphere(), r.sphere();
                },
                lineStart: function() {
                    t.lineStart(), e.lineStart(), r.lineStart();
                },
                lineEnd: function() {
                    t.lineEnd(), e.lineEnd(), r.lineEnd();
                },
                polygonStart: function() {
                    t.polygonStart(), e.polygonStart(), r.polygonStart();
                },
                polygonEnd: function() {
                    t.polygonEnd(), e.polygonEnd(), r.polygonEnd();
                }
            };
        }, n.precision = function(t) {
            return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision();
        }, n.scale = function(t) {
            return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale();
        }, n.translate = function(t) {
            if (!arguments.length) return i.translate();
            var s = i.scale(), l = +t[0], f = +t[1];
            return e = i.translate(t).clipExtent([ [ l - .455 * s, f - .238 * s ], [ l + .455 * s, f + .238 * s ] ]).stream(c).point, 
            r = o.translate([ l - .307 * s, f + .201 * s ]).clipExtent([ [ l - .425 * s + ka, f + .12 * s + ka ], [ l - .214 * s - ka, f + .234 * s - ka ] ]).stream(c).point, 
            u = a.translate([ l - .205 * s, f + .212 * s ]).clipExtent([ [ l - .214 * s + ka, f + .166 * s + ka ], [ l - .115 * s - ka, f + .234 * s - ka ] ]).stream(c).point, 
            n;
        }, n.scale(1070);
    };
    var Ec, Ac, Cc, Nc, zc, Lc, Tc = {
        point: v,
        lineStart: v,
        lineEnd: v,
        polygonStart: function() {
            Ac = 0, Tc.lineStart = Oe;
        },
        polygonEnd: function() {
            Tc.lineStart = Tc.lineEnd = Tc.point = v, Ec += ua(Ac / 2);
        }
    }, qc = {
        point: Ye,
        lineStart: v,
        lineEnd: v,
        polygonStart: v,
        polygonEnd: v
    }, Rc = {
        point: Ve,
        lineStart: Xe,
        lineEnd: $e,
        polygonStart: function() {
            Rc.lineStart = Be;
        },
        polygonEnd: function() {
            Rc.point = Ve, Rc.lineStart = Xe, Rc.lineEnd = $e;
        }
    };
    Zo.geo.path = function() {
        function n(n) {
            return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), 
            o && o.valid || (o = u(i)), Zo.geo.stream(n, o)), i.result();
        }
        function t() {
            return o = null, n;
        }
        var e, r, u, i, o, a = 4.5;
        return n.area = function(n) {
            return Ec = 0, Zo.geo.stream(n, u(Tc)), Ec;
        }, n.centroid = function(n) {
            return pc = vc = dc = mc = yc = xc = Mc = _c = bc = 0, Zo.geo.stream(n, u(Rc)), 
            bc ? [ Mc / bc, _c / bc ] : xc ? [ mc / xc, yc / xc ] : dc ? [ pc / dc, vc / dc ] : [ 0/0, 0/0 ];
        }, n.bounds = function(n) {
            return zc = Lc = -(Cc = Nc = 1 / 0), Zo.geo.stream(n, u(qc)), [ [ Cc, Nc ], [ zc, Lc ] ];
        }, n.projection = function(n) {
            return arguments.length ? (u = (e = n) ? n.stream || Ge(n) : wt, t()) : e;
        }, n.context = function(n) {
            return arguments.length ? (i = null == (r = n) ? new Ie() : new We(n), "function" != typeof a && i.pointRadius(a), 
            t()) : r;
        }, n.pointRadius = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), 
            +t), n) : a;
        }, n.projection(Zo.geo.albersUsa()).context(null);
    }, Zo.geo.transform = function(n) {
        return {
            stream: function(t) {
                var e = new Ke(t);
                for (var r in n) e[r] = n[r];
                return e;
            }
        };
    }, Ke.prototype = {
        point: function(n, t) {
            this.stream.point(n, t);
        },
        sphere: function() {
            this.stream.sphere();
        },
        lineStart: function() {
            this.stream.lineStart();
        },
        lineEnd: function() {
            this.stream.lineEnd();
        },
        polygonStart: function() {
            this.stream.polygonStart();
        },
        polygonEnd: function() {
            this.stream.polygonEnd();
        }
    }, Zo.geo.projection = nr, Zo.geo.projectionMutator = tr, (Zo.geo.equirectangular = function() {
        return nr(rr);
    }).raw = rr.invert = rr, Zo.geo.rotation = function(n) {
        function t(t) {
            return t = n(t[0] * Aa, t[1] * Aa), t[0] *= Ca, t[1] *= Ca, t;
        }
        return n = ir(n[0] % 360 * Aa, n[1] * Aa, n.length > 2 ? n[2] * Aa : 0), t.invert = function(t) {
            return t = n.invert(t[0] * Aa, t[1] * Aa), t[0] *= Ca, t[1] *= Ca, t;
        }, t;
    }, ur.invert = rr, Zo.geo.circle = function() {
        function n() {
            var n = "function" == typeof r ? r.apply(this, arguments) : r, t = ir(-n[0] * Aa, -n[1] * Aa, 0).invert, u = [];
            return e(null, null, 1, {
                point: function(n, e) {
                    u.push(n = t(n, e)), n[0] *= Ca, n[1] *= Ca;
                }
            }), {
                type: "Polygon",
                coordinates: [ u ]
            };
        }
        var t, e, r = [ 0, 0 ], u = 6;
        return n.origin = function(t) {
            return arguments.length ? (r = t, n) : r;
        }, n.angle = function(r) {
            return arguments.length ? (e = sr((t = +r) * Aa, u * Aa), n) : t;
        }, n.precision = function(r) {
            return arguments.length ? (e = sr(t * Aa, (u = +r) * Aa), n) : u;
        }, n.angle(90);
    }, Zo.geo.distance = function(n, t) {
        var e, r = (t[0] - n[0]) * Aa, u = n[1] * Aa, i = t[1] * Aa, o = Math.sin(r), a = Math.cos(r), c = Math.sin(u), s = Math.cos(u), l = Math.sin(i), f = Math.cos(i);
        return Math.atan2(Math.sqrt((e = f * o) * e + (e = s * l - c * f * a) * e), c * l + s * f * a);
    }, Zo.geo.graticule = function() {
        function n() {
            return {
                type: "MultiLineString",
                coordinates: t()
            };
        }
        function t() {
            return Zo.range(Math.ceil(i / d) * d, u, d).map(h).concat(Zo.range(Math.ceil(s / m) * m, c, m).map(g)).concat(Zo.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
                return ua(n % d) > ka;
            }).map(l)).concat(Zo.range(Math.ceil(a / v) * v, o, v).filter(function(n) {
                return ua(n % m) > ka;
            }).map(f));
        }
        var e, r, u, i, o, a, c, s, l, f, h, g, p = 10, v = p, d = 90, m = 360, y = 2.5;
        return n.lines = function() {
            return t().map(function(n) {
                return {
                    type: "LineString",
                    coordinates: n
                };
            });
        }, n.outline = function() {
            return {
                type: "Polygon",
                coordinates: [ h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(s).reverse().slice(1)) ]
            };
        }, n.extent = function(t) {
            return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent();
        }, n.majorExtent = function(t) {
            return arguments.length ? (i = +t[0][0], u = +t[1][0], s = +t[0][1], c = +t[1][1], 
            i > u && (t = i, i = u, u = t), s > c && (t = s, s = c, c = t), n.precision(y)) : [ [ i, s ], [ u, c ] ];
        }, n.minorExtent = function(t) {
            return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], 
            r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [ [ r, a ], [ e, o ] ];
        }, n.step = function(t) {
            return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep();
        }, n.majorStep = function(t) {
            return arguments.length ? (d = +t[0], m = +t[1], n) : [ d, m ];
        }, n.minorStep = function(t) {
            return arguments.length ? (p = +t[0], v = +t[1], n) : [ p, v ];
        }, n.precision = function(t) {
            return arguments.length ? (y = +t, l = fr(a, o, 90), f = hr(r, e, y), h = fr(s, c, 90), 
            g = hr(i, u, y), n) : y;
        }, n.majorExtent([ [ -180, -90 + ka ], [ 180, 90 - ka ] ]).minorExtent([ [ -180, -80 - ka ], [ 180, 80 + ka ] ]);
    }, Zo.geo.greatArc = function() {
        function n() {
            return {
                type: "LineString",
                coordinates: [ t || r.apply(this, arguments), e || u.apply(this, arguments) ]
            };
        }
        var t, e, r = gr, u = pr;
        return n.distance = function() {
            return Zo.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments));
        }, n.source = function(e) {
            return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r;
        }, n.target = function(t) {
            return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u;
        }, n.precision = function() {
            return arguments.length ? n : 0;
        }, n;
    }, Zo.geo.interpolate = function(n, t) {
        return vr(n[0] * Aa, n[1] * Aa, t[0] * Aa, t[1] * Aa);
    }, Zo.geo.length = function(n) {
        return Dc = 0, Zo.geo.stream(n, Pc), Dc;
    };
    var Dc, Pc = {
        sphere: v,
        point: v,
        lineStart: dr,
        lineEnd: v,
        polygonStart: v,
        polygonEnd: v
    }, Uc = mr(function(n) {
        return Math.sqrt(2 / (1 + n));
    }, function(n) {
        return 2 * Math.asin(n / 2);
    });
    (Zo.geo.azimuthalEqualArea = function() {
        return nr(Uc);
    }).raw = Uc;
    var jc = mr(function(n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t);
    }, wt);
    (Zo.geo.azimuthalEquidistant = function() {
        return nr(jc);
    }).raw = jc, (Zo.geo.conicConformal = function() {
        return He(yr);
    }).raw = yr, (Zo.geo.conicEquidistant = function() {
        return He(xr);
    }).raw = xr;
    var Hc = mr(function(n) {
        return 1 / n;
    }, Math.atan);
    (Zo.geo.gnomonic = function() {
        return nr(Hc);
    }).raw = Hc, Mr.invert = function(n, t) {
        return [ n, 2 * Math.atan(Math.exp(t)) - Sa ];
    }, (Zo.geo.mercator = function() {
        return _r(Mr);
    }).raw = Mr;
    var Fc = mr(function() {
        return 1;
    }, Math.asin);
    (Zo.geo.orthographic = function() {
        return nr(Fc);
    }).raw = Fc;
    var Oc = mr(function(n) {
        return 1 / (1 + n);
    }, function(n) {
        return 2 * Math.atan(n);
    });
    (Zo.geo.stereographic = function() {
        return nr(Oc);
    }).raw = Oc, br.invert = function(n, t) {
        return [ -t, 2 * Math.atan(Math.exp(n)) - Sa ];
    }, (Zo.geo.transverseMercator = function() {
        var n = _r(br), t = n.center, e = n.rotate;
        return n.center = function(n) {
            return n ? t([ -n[1], n[0] ]) : (n = t(), [ n[1], -n[0] ]);
        }, n.rotate = function(n) {
            return n ? e([ n[0], n[1], n.length > 2 ? n[2] + 90 : 90 ]) : (n = e(), [ n[0], n[1], n[2] - 90 ]);
        }, e([ 0, 0, 90 ]);
    }).raw = br, Zo.geom = {}, Zo.geom.hull = function(n) {
        function t(n) {
            if (n.length < 3) return [];
            var t, u = bt(e), i = bt(r), o = n.length, a = [], c = [];
            for (t = 0; o > t; t++) a.push([ +u.call(this, n[t], t), +i.call(this, n[t], t), t ]);
            for (a.sort(Er), t = 0; o > t; t++) c.push([ a[t][0], -a[t][1] ]);
            var s = kr(a), l = kr(c), f = l[0] === s[0], h = l[l.length - 1] === s[s.length - 1], g = [];
            for (t = s.length - 1; t >= 0; --t) g.push(n[a[s[t]][2]]);
            for (t = +f; t < l.length - h; ++t) g.push(n[a[l[t]][2]]);
            return g;
        }
        var e = wr, r = Sr;
        return arguments.length ? t(n) : (t.x = function(n) {
            return arguments.length ? (e = n, t) : e;
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r;
        }, t);
    }, Zo.geom.polygon = function(n) {
        return sa(n, Yc), n;
    };
    var Yc = Zo.geom.polygon.prototype = [];
    Yc.area = function() {
        for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e; ) n = r, r = this[t], 
        u += n[1] * r[0] - n[0] * r[1];
        return .5 * u;
    }, Yc.centroid = function(n) {
        var t, e, r = -1, u = this.length, i = 0, o = 0, a = this[u - 1];
        for (arguments.length || (n = -1 / (6 * this.area())); ++r < u; ) t = a, a = this[r], 
        e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
        return [ i * n, o * n ];
    }, Yc.clip = function(n) {
        for (var t, e, r, u, i, o, a = Nr(n), c = -1, s = this.length - Nr(this), l = this[s - 1]; ++c < s; ) {
            for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r; ) o = t[e], 
            Ar(o, l, u) ? (Ar(i, l, u) || n.push(Cr(i, o, l, u)), n.push(o)) : Ar(i, l, u) && n.push(Cr(i, o, l, u)), 
            i = o;
            a && n.push(n[0]), l = u;
        }
        return n;
    };
    var Ic, Zc, Vc, Xc, $c, Bc = [], Wc = [];
    Ur.prototype.prepare = function() {
        for (var n, t = this.edges, e = t.length; e--; ) n = t[e].edge, n.b && n.a || t.splice(e, 1);
        return t.sort(Hr), t.length;
    }, Wr.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b;
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a;
        }
    }, Jr.prototype = {
        insert: function(n, t) {
            var e, r, u;
            if (n) {
                if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                    for (n = n.R; n.L; ) n = n.L;
                    n.L = t;
                } else n.R = t;
                e = n;
            } else this._ ? (n = nu(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, 
            this._ = t, e = null);
            for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C; ) r = e.U, e === r.L ? (u = r.R, 
            u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (Kr(this, e), n = e, 
            e = n.U), e.C = !1, r.C = !0, Qr(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, 
            r.C = !0, n = r) : (n === e.L && (Qr(this, e), n = e, e = n.U), e.C = !1, r.C = !0, 
            Kr(this, r))), e = n.U;
            this._.C = !1;
        },
        remove: function(n) {
            n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
            var t, e, r, u = n.U, i = n.L, o = n.R;
            if (e = i ? o ? nu(o) : i : o, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && o ? (r = e.C, 
            e.C = n.C, e.L = i, i.U = e, e !== o ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = o, 
            o.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
                if (n && n.C) return void (n.C = !1);
                do {
                    if (n === this._) break;
                    if (n === u.L) {
                        if (t = u.R, t.C && (t.C = !1, u.C = !0, Kr(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1, t.C = !0, Qr(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, 
                            Kr(this, u), n = this._;
                            break;
                        }
                    } else if (t = u.L, t.C && (t.C = !1, u.C = !0, Qr(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1, t.C = !0, Kr(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, 
                        Qr(this, u), n = this._;
                        break;
                    }
                    t.C = !0, n = u, u = u.U;
                } while (!n.C);
                n && (n.C = !1);
            }
        }
    }, Zo.geom.voronoi = function(n) {
        function t(n) {
            var t = new Array(n.length), r = a[0][0], u = a[0][1], i = a[1][0], o = a[1][1];
            return tu(e(n), a).cells.forEach(function(e, a) {
                var c = e.edges, s = e.site, l = t[a] = c.length ? c.map(function(n) {
                    var t = n.start();
                    return [ t.x, t.y ];
                }) : s.x >= r && s.x <= i && s.y >= u && s.y <= o ? [ [ r, o ], [ i, o ], [ i, u ], [ r, u ] ] : [];
                l.point = n[a];
            }), t;
        }
        function e(n) {
            return n.map(function(n, t) {
                return {
                    x: Math.round(i(n, t) / ka) * ka,
                    y: Math.round(o(n, t) / ka) * ka,
                    i: t
                };
            });
        }
        var r = wr, u = Sr, i = r, o = u, a = Jc;
        return n ? t(n) : (t.links = function(n) {
            return tu(e(n)).edges.filter(function(n) {
                return n.l && n.r;
            }).map(function(t) {
                return {
                    source: n[t.l.i],
                    target: n[t.r.i]
                };
            });
        }, t.triangles = function(n) {
            var t = [];
            return tu(e(n)).cells.forEach(function(e, r) {
                for (var u, i, o = e.site, a = e.edges.sort(Hr), c = -1, s = a.length, l = a[s - 1].edge, f = l.l === o ? l.r : l.l; ++c < s; ) u = l, 
                i = f, l = a[c].edge, f = l.l === o ? l.r : l.l, r < i.i && r < f.i && ru(o, i, f) < 0 && t.push([ n[r], n[i.i], n[f.i] ]);
            }), t;
        }, t.x = function(n) {
            return arguments.length ? (i = bt(r = n), t) : r;
        }, t.y = function(n) {
            return arguments.length ? (o = bt(u = n), t) : u;
        }, t.clipExtent = function(n) {
            return arguments.length ? (a = null == n ? Jc : n, t) : a === Jc ? null : a;
        }, t.size = function(n) {
            return arguments.length ? t.clipExtent(n && [ [ 0, 0 ], n ]) : a === Jc ? null : a && a[1];
        }, t);
    };
    var Jc = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
    Zo.geom.delaunay = function(n) {
        return Zo.geom.voronoi().triangles(n);
    }, Zo.geom.quadtree = function(n, t, e, r, u) {
        function i(n) {
            function i(n, t, e, r, u, i, o, a) {
                if (!isNaN(e) && !isNaN(r)) if (n.leaf) {
                    var c = n.x, l = n.y;
                    if (null != c) if (ua(c - e) + ua(l - r) < .01) s(n, t, e, r, u, i, o, a); else {
                        var f = n.point;
                        n.x = n.y = n.point = null, s(n, f, c, l, u, i, o, a), s(n, t, e, r, u, i, o, a);
                    } else n.x = e, n.y = r, n.point = t;
                } else s(n, t, e, r, u, i, o, a);
            }
            function s(n, t, e, r, u, o, a, c) {
                var s = .5 * (u + a), l = .5 * (o + c), f = e >= s, h = r >= l, g = (h << 1) + f;
                n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = ou()), f ? u = s : a = s, h ? o = l : c = l, 
                i(n, t, e, r, u, o, a, c);
            }
            var l, f, h, g, p, v, d, m, y, x = bt(a), M = bt(c);
            if (null != t) v = t, d = e, m = r, y = u; else if (m = y = -(v = d = 1 / 0), f = [], 
            h = [], p = n.length, o) for (g = 0; p > g; ++g) l = n[g], l.x < v && (v = l.x), 
            l.y < d && (d = l.y), l.x > m && (m = l.x), l.y > y && (y = l.y), f.push(l.x), h.push(l.y); else for (g = 0; p > g; ++g) {
                var _ = +x(l = n[g], g), b = +M(l, g);
                v > _ && (v = _), d > b && (d = b), _ > m && (m = _), b > y && (y = b), f.push(_), 
                h.push(b);
            }
            var w = m - v, S = y - d;
            w > S ? y = d + w : m = v + S;
            var k = ou();
            if (k.add = function(n) {
                i(k, n, +x(n, ++g), +M(n, g), v, d, m, y);
            }, k.visit = function(n) {
                au(n, k, v, d, m, y);
            }, g = -1, null == t) {
                for (;++g < p; ) i(k, n[g], f[g], h[g], v, d, m, y);
                --g;
            } else n.forEach(k.add);
            return f = h = n = l = null, k;
        }
        var o, a = wr, c = Sr;
        return (o = arguments.length) ? (a = uu, c = iu, 3 === o && (u = e, r = t, e = t = 0), 
        i(n)) : (i.x = function(n) {
            return arguments.length ? (a = n, i) : a;
        }, i.y = function(n) {
            return arguments.length ? (c = n, i) : c;
        }, i.extent = function(n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], 
            r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [ [ t, e ], [ r, u ] ];
        }, i.size = function(n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], 
            u = +n[1]), i) : null == t ? null : [ r - t, u - e ];
        }, i);
    }, Zo.interpolateRgb = cu, Zo.interpolateObject = su, Zo.interpolateNumber = lu, 
    Zo.interpolateString = fu;
    var Gc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Kc = new RegExp(Gc.source, "g");
    Zo.interpolate = hu, Zo.interpolators = [ function(n, t) {
        var e = typeof t;
        return ("string" === e ? Ia.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? cu : fu : t instanceof et ? cu : Array.isArray(t) ? gu : "object" === e && isNaN(t) ? su : lu)(n, t);
    } ], Zo.interpolateArray = gu;
    var Qc = function() {
        return wt;
    }, ns = Zo.map({
        linear: Qc,
        poly: Mu,
        quad: function() {
            return mu;
        },
        cubic: function() {
            return yu;
        },
        sin: function() {
            return _u;
        },
        exp: function() {
            return bu;
        },
        circle: function() {
            return wu;
        },
        elastic: Su,
        back: ku,
        bounce: function() {
            return Eu;
        }
    }), ts = Zo.map({
        "in": wt,
        out: vu,
        "in-out": du,
        "out-in": function(n) {
            return du(vu(n));
        }
    });
    Zo.ease = function(n) {
        var t = n.indexOf("-"), e = t >= 0 ? n.substring(0, t) : n, r = t >= 0 ? n.substring(t + 1) : "in";
        return e = ns.get(e) || Qc, r = ts.get(r) || wt, pu(r(e.apply(null, Vo.call(arguments, 1))));
    }, Zo.interpolateHcl = Au, Zo.interpolateHsl = Cu, Zo.interpolateLab = Nu, Zo.interpolateRound = zu, 
    Zo.transform = function(n) {
        var t = $o.createElementNS(Zo.ns.prefix.svg, "g");
        return (Zo.transform = function(n) {
            if (null != n) {
                t.setAttribute("transform", n);
                var e = t.transform.baseVal.consolidate();
            }
            return new Lu(e ? e.matrix : es);
        })(n);
    }, Lu.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
    };
    var es = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    Zo.interpolateTransform = Du, Zo.layout = {}, Zo.layout.bundle = function() {
        return function(n) {
            for (var t = [], e = -1, r = n.length; ++e < r; ) t.push(ju(n[e]));
            return t;
        };
    }, Zo.layout.chord = function() {
        function n() {
            var n, s, f, h, g, p = {}, v = [], d = Zo.range(i), m = [];
            for (e = [], r = [], n = 0, h = -1; ++h < i; ) {
                for (s = 0, g = -1; ++g < i; ) s += u[h][g];
                v.push(s), m.push(Zo.range(i)), n += s;
            }
            for (o && d.sort(function(n, t) {
                return o(v[n], v[t]);
            }), a && m.forEach(function(n, t) {
                n.sort(function(n, e) {
                    return a(u[t][n], u[t][e]);
                });
            }), n = (wa - l * i) / n, s = 0, h = -1; ++h < i; ) {
                for (f = s, g = -1; ++g < i; ) {
                    var y = d[h], x = m[y][g], M = u[y][x], _ = s, b = s += M * n;
                    p[y + "-" + x] = {
                        index: y,
                        subindex: x,
                        startAngle: _,
                        endAngle: b,
                        value: M
                    };
                }
                r[y] = {
                    index: y,
                    startAngle: f,
                    endAngle: s,
                    value: (s - f) / n
                }, s += l;
            }
            for (h = -1; ++h < i; ) for (g = h - 1; ++g < i; ) {
                var w = p[h + "-" + g], S = p[g + "-" + h];
                (w.value || S.value) && e.push(w.value < S.value ? {
                    source: S,
                    target: w
                } : {
                    source: w,
                    target: S
                });
            }
            c && t();
        }
        function t() {
            e.sort(function(n, t) {
                return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2);
            });
        }
        var e, r, u, i, o, a, c, s = {}, l = 0;
        return s.matrix = function(n) {
            return arguments.length ? (i = (u = n) && u.length, e = r = null, s) : u;
        }, s.padding = function(n) {
            return arguments.length ? (l = n, e = r = null, s) : l;
        }, s.sortGroups = function(n) {
            return arguments.length ? (o = n, e = r = null, s) : o;
        }, s.sortSubgroups = function(n) {
            return arguments.length ? (a = n, e = null, s) : a;
        }, s.sortChords = function(n) {
            return arguments.length ? (c = n, e && t(), s) : c;
        }, s.chords = function() {
            return e || n(), e;
        }, s.groups = function() {
            return r || n(), r;
        }, s;
    }, Zo.layout.force = function() {
        function n(n) {
            return function(t, e, r, u) {
                if (t.point !== n) {
                    var i = t.cx - n.x, o = t.cy - n.y, a = u - e, c = i * i + o * o;
                    if (c > a * a / d) {
                        if (p > c) {
                            var s = t.charge / c;
                            n.px -= i * s, n.py -= o * s;
                        }
                        return !0;
                    }
                    if (t.point && c && p > c) {
                        var s = t.pointCharge / c;
                        n.px -= i * s, n.py -= o * s;
                    }
                }
                return !t.charge;
            };
        }
        function t(n) {
            n.px = Zo.event.x, n.py = Zo.event.y, a.resume();
        }
        var e, r, u, i, o, a = {}, c = Zo.dispatch("start", "tick", "end"), s = [ 1, 1 ], l = .9, f = rs, h = us, g = -30, p = is, v = .1, d = .64, m = [], y = [];
        return a.tick = function() {
            if ((r *= .99) < .005) return c.end({
                type: "end",
                alpha: r = 0
            }), !0;
            var t, e, a, f, h, p, d, x, M, _ = m.length, b = y.length;
            for (e = 0; b > e; ++e) a = y[e], f = a.source, h = a.target, x = h.x - f.x, M = h.y - f.y, 
            (p = x * x + M * M) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p, x *= p, 
            M *= p, h.x -= x * (d = f.weight / (h.weight + f.weight)), h.y -= M * d, f.x += x * (d = 1 - d), 
            f.y += M * d);
            if ((d = r * v) && (x = s[0] / 2, M = s[1] / 2, e = -1, d)) for (;++e < _; ) a = m[e], 
            a.x += (x - a.x) * d, a.y += (M - a.y) * d;
            if (g) for (Vu(t = Zo.geom.quadtree(m), r, o), e = -1; ++e < _; ) (a = m[e]).fixed || t.visit(n(a));
            for (e = -1; ++e < _; ) a = m[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * l, 
            a.y -= (a.py - (a.py = a.y)) * l);
            c.tick({
                type: "tick",
                alpha: r
            });
        }, a.nodes = function(n) {
            return arguments.length ? (m = n, a) : m;
        }, a.links = function(n) {
            return arguments.length ? (y = n, a) : y;
        }, a.size = function(n) {
            return arguments.length ? (s = n, a) : s;
        }, a.linkDistance = function(n) {
            return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f;
        }, a.distance = a.linkDistance, a.linkStrength = function(n) {
            return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h;
        }, a.friction = function(n) {
            return arguments.length ? (l = +n, a) : l;
        }, a.charge = function(n) {
            return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g;
        }, a.chargeDistance = function(n) {
            return arguments.length ? (p = n * n, a) : Math.sqrt(p);
        }, a.gravity = function(n) {
            return arguments.length ? (v = +n, a) : v;
        }, a.theta = function(n) {
            return arguments.length ? (d = n * n, a) : Math.sqrt(d);
        }, a.alpha = function(n) {
            return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
                type: "start",
                alpha: r = n
            }), Zo.timer(a.tick)), a) : r;
        }, a.start = function() {
            function n(n, r) {
                if (!e) {
                    for (e = new Array(c), a = 0; c > a; ++a) e[a] = [];
                    for (a = 0; s > a; ++a) {
                        var u = y[a];
                        e[u.source.index].push(u.target), e[u.target.index].push(u.source);
                    }
                }
                for (var i, o = e[t], a = -1, s = o.length; ++a < s; ) if (!isNaN(i = o[a][n])) return i;
                return Math.random() * r;
            }
            var t, e, r, c = m.length, l = y.length, p = s[0], v = s[1];
            for (t = 0; c > t; ++t) (r = m[t]).index = t, r.weight = 0;
            for (t = 0; l > t; ++t) r = y[t], "number" == typeof r.source && (r.source = m[r.source]), 
            "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
            for (t = 0; c > t; ++t) r = m[t], isNaN(r.x) && (r.x = n("x", p)), isNaN(r.y) && (r.y = n("y", v)), 
            isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
            if (u = [], "function" == typeof f) for (t = 0; l > t; ++t) u[t] = +f.call(this, y[t], t); else for (t = 0; l > t; ++t) u[t] = f;
            if (i = [], "function" == typeof h) for (t = 0; l > t; ++t) i[t] = +h.call(this, y[t], t); else for (t = 0; l > t; ++t) i[t] = h;
            if (o = [], "function" == typeof g) for (t = 0; c > t; ++t) o[t] = +g.call(this, m[t], t); else for (t = 0; c > t; ++t) o[t] = g;
            return a.resume();
        }, a.resume = function() {
            return a.alpha(.1);
        }, a.stop = function() {
            return a.alpha(0);
        }, a.drag = function() {
            return e || (e = Zo.behavior.drag().origin(wt).on("dragstart.force", Ou).on("drag.force", t).on("dragend.force", Yu)), 
            arguments.length ? void this.on("mouseover.force", Iu).on("mouseout.force", Zu).call(e) : e;
        }, Zo.rebind(a, c, "on");
    };
    var rs = 20, us = 1, is = 1 / 0;
    Zo.layout.hierarchy = function() {
        function n(u) {
            var i, o = [ u ], a = [];
            for (u.depth = 0; null != (i = o.pop()); ) if (a.push(i), (s = e.call(n, i, i.depth)) && (c = s.length)) {
                for (var c, s, l; --c >= 0; ) o.push(l = s[c]), l.parent = i, l.depth = i.depth + 1;
                r && (i.value = 0), i.children = s;
            } else r && (i.value = +r.call(n, i, i.depth) || 0), delete i.children;
            return Bu(u, function(n) {
                var e, u;
                t && (e = n.children) && e.sort(t), r && (u = n.parent) && (u.value += n.value);
            }), a;
        }
        var t = Gu, e = Wu, r = Ju;
        return n.sort = function(e) {
            return arguments.length ? (t = e, n) : t;
        }, n.children = function(t) {
            return arguments.length ? (e = t, n) : e;
        }, n.value = function(t) {
            return arguments.length ? (r = t, n) : r;
        }, n.revalue = function(t) {
            return r && ($u(t, function(n) {
                n.children && (n.value = 0);
            }), Bu(t, function(t) {
                var e;
                t.children || (t.value = +r.call(n, t, t.depth) || 0), (e = t.parent) && (e.value += t.value);
            })), t;
        }, n;
    }, Zo.layout.partition = function() {
        function n(t, e, r, u) {
            var i = t.children;
            if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
                var o, a, c, s = -1;
                for (r = t.value ? r / t.value : 0; ++s < o; ) n(a = i[s], e, c = a.value * r, u), 
                e += c;
            }
        }
        function t(n) {
            var e = n.children, r = 0;
            if (e && (u = e.length)) for (var u, i = -1; ++i < u; ) r = Math.max(r, t(e[i]));
            return 1 + r;
        }
        function e(e, i) {
            var o = r.call(this, e, i);
            return n(o[0], 0, u[0], u[1] / t(o[0])), o;
        }
        var r = Zo.layout.hierarchy(), u = [ 1, 1 ];
        return e.size = function(n) {
            return arguments.length ? (u = n, e) : u;
        }, Xu(e, r);
    }, Zo.layout.pie = function() {
        function n(i) {
            var o = i.map(function(e, r) {
                return +t.call(n, e, r);
            }), a = +("function" == typeof r ? r.apply(this, arguments) : r), c = (("function" == typeof u ? u.apply(this, arguments) : u) - a) / Zo.sum(o), s = Zo.range(i.length);
            null != e && s.sort(e === os ? function(n, t) {
                return o[t] - o[n];
            } : function(n, t) {
                return e(i[n], i[t]);
            });
            var l = [];
            return s.forEach(function(n) {
                var t;
                l[n] = {
                    data: i[n],
                    value: t = o[n],
                    startAngle: a,
                    endAngle: a += t * c
                };
            }), l;
        }
        var t = Number, e = os, r = 0, u = wa;
        return n.value = function(e) {
            return arguments.length ? (t = e, n) : t;
        }, n.sort = function(t) {
            return arguments.length ? (e = t, n) : e;
        }, n.startAngle = function(t) {
            return arguments.length ? (r = t, n) : r;
        }, n.endAngle = function(t) {
            return arguments.length ? (u = t, n) : u;
        }, n;
    };
    var os = {};
    Zo.layout.stack = function() {
        function n(a, c) {
            var s = a.map(function(e, r) {
                return t.call(n, e, r);
            }), l = s.map(function(t) {
                return t.map(function(t, e) {
                    return [ i.call(n, t, e), o.call(n, t, e) ];
                });
            }), f = e.call(n, l, c);
            s = Zo.permute(s, f), l = Zo.permute(l, f);
            var h, g, p, v = r.call(n, l, c), d = s.length, m = s[0].length;
            for (g = 0; m > g; ++g) for (u.call(n, s[0][g], p = v[g], l[0][g][1]), h = 1; d > h; ++h) u.call(n, s[h][g], p += l[h - 1][g][1], l[h][g][1]);
            return a;
        }
        var t = wt, e = ei, r = ri, u = ti, i = Qu, o = ni;
        return n.values = function(e) {
            return arguments.length ? (t = e, n) : t;
        }, n.order = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : as.get(t) || ei, n) : e;
        }, n.offset = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : cs.get(t) || ri, n) : r;
        }, n.x = function(t) {
            return arguments.length ? (i = t, n) : i;
        }, n.y = function(t) {
            return arguments.length ? (o = t, n) : o;
        }, n.out = function(t) {
            return arguments.length ? (u = t, n) : u;
        }, n;
    };
    var as = Zo.map({
        "inside-out": function(n) {
            var t, e, r = n.length, u = n.map(ui), i = n.map(ii), o = Zo.range(r).sort(function(n, t) {
                return u[n] - u[t];
            }), a = 0, c = 0, s = [], l = [];
            for (t = 0; r > t; ++t) e = o[t], c > a ? (a += i[e], s.push(e)) : (c += i[e], l.push(e));
            return l.reverse().concat(s);
        },
        reverse: function(n) {
            return Zo.range(n.length).reverse();
        },
        "default": ei
    }), cs = Zo.map({
        silhouette: function(n) {
            var t, e, r, u = n.length, i = n[0].length, o = [], a = 0, c = [];
            for (e = 0; i > e; ++e) {
                for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
                r > a && (a = r), o.push(r);
            }
            for (e = 0; i > e; ++e) c[e] = (a - o[e]) / 2;
            return c;
        },
        wiggle: function(n) {
            var t, e, r, u, i, o, a, c, s, l = n.length, f = n[0], h = f.length, g = [];
            for (g[0] = c = s = 0, e = 1; h > e; ++e) {
                for (t = 0, u = 0; l > t; ++t) u += n[t][e][1];
                for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; l > t; ++t) {
                    for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r) o += (n[r][e][1] - n[r][e - 1][1]) / a;
                    i += o * n[t][e][1];
                }
                g[e] = c -= u ? i / u * a : 0, s > c && (s = c);
            }
            for (e = 0; h > e; ++e) g[e] -= s;
            return g;
        },
        expand: function(n) {
            var t, e, r, u = n.length, i = n[0].length, o = 1 / u, a = [];
            for (e = 0; i > e; ++e) {
                for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
                if (r) for (t = 0; u > t; t++) n[t][e][1] /= r; else for (t = 0; u > t; t++) n[t][e][1] = o;
            }
            for (e = 0; i > e; ++e) a[e] = 0;
            return a;
        },
        zero: ri
    });
    Zo.layout.histogram = function() {
        function n(n, i) {
            for (var o, a, c = [], s = n.map(e, this), l = r.call(this, s, i), f = u.call(this, l, s, i), i = -1, h = s.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g; ) o = c[i] = [], 
            o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
            if (g > 0) for (i = -1; ++i < h; ) a = s[i], a >= l[0] && a <= l[1] && (o = c[Zo.bisect(f, a, 1, g) - 1], 
            o.y += p, o.push(n[i]));
            return c;
        }
        var t = !0, e = Number, r = si, u = ai;
        return n.value = function(t) {
            return arguments.length ? (e = t, n) : e;
        }, n.range = function(t) {
            return arguments.length ? (r = bt(t), n) : r;
        }, n.bins = function(t) {
            return arguments.length ? (u = "number" == typeof t ? function(n) {
                return ci(n, t);
            } : bt(t), n) : u;
        }, n.frequency = function(e) {
            return arguments.length ? (t = !!e, n) : t;
        }, n;
    }, Zo.layout.pack = function() {
        function n(n, i) {
            var o = e.call(this, n, i), a = o[0], c = u[0], s = u[1], l = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
                return t;
            };
            if (a.x = a.y = 0, Bu(a, function(n) {
                n.r = +l(n.value);
            }), Bu(a, pi), r) {
                var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / s)) / 2;
                Bu(a, function(n) {
                    n.r += f;
                }), Bu(a, pi), Bu(a, function(n) {
                    n.r -= f;
                });
            }
            return mi(a, c / 2, s / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / s)), o;
        }
        var t, e = Zo.layout.hierarchy().sort(li), r = 0, u = [ 1, 1 ];
        return n.size = function(t) {
            return arguments.length ? (u = t, n) : u;
        }, n.radius = function(e) {
            return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t;
        }, n.padding = function(t) {
            return arguments.length ? (r = +t, n) : r;
        }, Xu(n, e);
    }, Zo.layout.tree = function() {
        function n(n, u) {
            var l = o.call(this, n, u), f = l[0], h = t(f);
            if (Bu(h, e), h.parent.m = -h.z, $u(h, r), s) $u(f, i); else {
                var g = f, p = f, v = f;
                $u(f, function(n) {
                    n.x < g.x && (g = n), n.x > p.x && (p = n), n.depth > v.depth && (v = n);
                });
                var d = a(g, p) / 2 - g.x, m = c[0] / (p.x + a(p, g) / 2 + d), y = c[1] / (v.depth || 1);
                $u(f, function(n) {
                    n.x = (n.x + d) * m, n.y = n.depth * y;
                });
            }
            return l;
        }
        function t(n) {
            for (var t, e = {
                A: null,
                children: [ n ]
            }, r = [ e ]; null != (t = r.pop()); ) for (var u, i = t.children, o = 0, a = i.length; a > o; ++o) r.push((i[o] = u = {
                _: i[o],
                parent: t,
                children: (u = i[o].children) && u.slice() || [],
                A: null,
                a: null,
                z: 0,
                m: 0,
                c: 0,
                s: 0,
                t: null,
                i: o
            }).a = u);
            return e.children[0];
        }
        function e(n) {
            var t = n.children, e = n.parent.children, r = n.i ? e[n.i - 1] : null;
            if (t.length) {
                wi(n);
                var i = (t[0].z + t[t.length - 1].z) / 2;
                r ? (n.z = r.z + a(n._, r._), n.m = n.z - i) : n.z = i;
            } else r && (n.z = r.z + a(n._, r._));
            n.parent.A = u(n, r, n.parent.A || e[0]);
        }
        function r(n) {
            n._.x = n.z + n.parent.m, n.m += n.parent.m;
        }
        function u(n, t, e) {
            if (t) {
                for (var r, u = n, i = n, o = t, c = u.parent.children[0], s = u.m, l = i.m, f = o.m, h = c.m; o = _i(o), 
                u = Mi(u), o && u; ) c = Mi(c), i = _i(i), i.a = n, r = o.z + f - u.z - s + a(o._, u._), 
                r > 0 && (bi(Si(o, n, e), n, r), s += r, l += r), f += o.m, s += u.m, h += c.m, 
                l += i.m;
                o && !_i(i) && (i.t = o, i.m += f - l), u && !Mi(c) && (c.t = u, c.m += s - h, e = n);
            }
            return e;
        }
        function i(n) {
            n.x *= c[0], n.y = n.depth * c[1];
        }
        var o = Zo.layout.hierarchy().sort(null).value(null), a = xi, c = [ 1, 1 ], s = null;
        return n.separation = function(t) {
            return arguments.length ? (a = t, n) : a;
        }, n.size = function(t) {
            return arguments.length ? (s = null == (c = t) ? i : null, n) : s ? null : c;
        }, n.nodeSize = function(t) {
            return arguments.length ? (s = null == (c = t) ? null : i, n) : s ? c : null;
        }, Xu(n, o);
    }, Zo.layout.cluster = function() {
        function n(n, i) {
            var o, a = t.call(this, n, i), c = a[0], s = 0;
            Bu(c, function(n) {
                var t = n.children;
                t && t.length ? (n.x = Ei(t), n.y = ki(t)) : (n.x = o ? s += e(n, o) : 0, n.y = 0, 
                o = n);
            });
            var l = Ai(c), f = Ci(c), h = l.x - e(l, f) / 2, g = f.x + e(f, l) / 2;
            return Bu(c, u ? function(n) {
                n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1];
            } : function(n) {
                n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1];
            }), a;
        }
        var t = Zo.layout.hierarchy().sort(null).value(null), e = xi, r = [ 1, 1 ], u = !1;
        return n.separation = function(t) {
            return arguments.length ? (e = t, n) : e;
        }, n.size = function(t) {
            return arguments.length ? (u = null == (r = t), n) : u ? null : r;
        }, n.nodeSize = function(t) {
            return arguments.length ? (u = null != (r = t), n) : u ? r : null;
        }, Xu(n, t);
    }, Zo.layout.treemap = function() {
        function n(n, t) {
            for (var e, r, u = -1, i = n.length; ++u < i; ) r = (e = n[u]).value * (0 > t ? 0 : t), 
            e.area = isNaN(r) || 0 >= r ? 0 : r;
        }
        function t(e) {
            var i = e.children;
            if (i && i.length) {
                var o, a, c, s = f(e), l = [], h = i.slice(), p = 1 / 0, v = "slice" === g ? s.dx : "dice" === g ? s.dy : "slice-dice" === g ? 1 & e.depth ? s.dy : s.dx : Math.min(s.dx, s.dy);
                for (n(h, s.dx * s.dy / e.value), l.area = 0; (c = h.length) > 0; ) l.push(o = h[c - 1]), 
                l.area += o.area, "squarify" !== g || (a = r(l, v)) <= p ? (h.pop(), p = a) : (l.area -= l.pop().area, 
                u(l, v, s, !1), v = Math.min(s.dx, s.dy), l.length = l.area = 0, p = 1 / 0);
                l.length && (u(l, v, s, !0), l.length = l.area = 0), i.forEach(t);
            }
        }
        function e(t) {
            var r = t.children;
            if (r && r.length) {
                var i, o = f(t), a = r.slice(), c = [];
                for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop(); ) c.push(i), c.area += i.area, 
                null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
                r.forEach(e);
            }
        }
        function r(n, t) {
            for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a; ) (e = n[o].area) && (i > e && (i = e), 
            e > u && (u = e));
            return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0;
        }
        function u(n, t, e, r) {
            var u, i = -1, o = n.length, a = e.x, s = e.y, l = t ? c(n.area / t) : 0;
            if (t == e.dx) {
                for ((r || l > e.dy) && (l = e.dy); ++i < o; ) u = n[i], u.x = a, u.y = s, u.dy = l, 
                a += u.dx = Math.min(e.x + e.dx - a, l ? c(u.area / l) : 0);
                u.z = !0, u.dx += e.x + e.dx - a, e.y += l, e.dy -= l;
            } else {
                for ((r || l > e.dx) && (l = e.dx); ++i < o; ) u = n[i], u.x = a, u.y = s, u.dx = l, 
                s += u.dy = Math.min(e.y + e.dy - s, l ? c(u.area / l) : 0);
                u.z = !1, u.dy += e.y + e.dy - s, e.x += l, e.dx -= l;
            }
        }
        function i(r) {
            var u = o || a(r), i = u[0];
            return i.x = 0, i.y = 0, i.dx = s[0], i.dy = s[1], o && a.revalue(i), n([ i ], i.dx * i.dy / i.value), 
            (o ? e : t)(i), h && (o = u), u;
        }
        var o, a = Zo.layout.hierarchy(), c = Math.round, s = [ 1, 1 ], l = null, f = Ni, h = !1, g = "squarify", p = .5 * (1 + Math.sqrt(5));
        return i.size = function(n) {
            return arguments.length ? (s = n, i) : s;
        }, i.padding = function(n) {
            function t(t) {
                var e = n.call(i, t, t.depth);
                return null == e ? Ni(t) : zi(t, "number" == typeof e ? [ e, e, e, e ] : e);
            }
            function e(t) {
                return zi(t, n);
            }
            if (!arguments.length) return l;
            var r;
            return f = null == (l = n) ? Ni : "function" == (r = typeof n) ? t : "number" === r ? (n = [ n, n, n, n ], 
            e) : e, i;
        }, i.round = function(n) {
            return arguments.length ? (c = n ? Math.round : Number, i) : c != Number;
        }, i.sticky = function(n) {
            return arguments.length ? (h = n, o = null, i) : h;
        }, i.ratio = function(n) {
            return arguments.length ? (p = n, i) : p;
        }, i.mode = function(n) {
            return arguments.length ? (g = n + "", i) : g;
        }, Xu(i, a);
    }, Zo.random = {
        normal: function(n, t) {
            var e = arguments.length;
            return 2 > e && (t = 1), 1 > e && (n = 0), function() {
                var e, r, u;
                do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r; while (!u || u > 1);
                return n + t * e * Math.sqrt(-2 * Math.log(u) / u);
            };
        },
        logNormal: function() {
            var n = Zo.random.normal.apply(Zo, arguments);
            return function() {
                return Math.exp(n());
            };
        },
        bates: function(n) {
            var t = Zo.random.irwinHall(n);
            return function() {
                return t() / n;
            };
        },
        irwinHall: function(n) {
            return function() {
                for (var t = 0, e = 0; n > e; e++) t += Math.random();
                return t;
            };
        }
    }, Zo.scale = {};
    var ss = {
        floor: wt,
        ceil: wt
    };
    Zo.scale.linear = function() {
        return Ui([ 0, 1 ], [ 0, 1 ], hu, !1);
    };
    var ls = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    Zo.scale.log = function() {
        return Vi(Zo.scale.linear().domain([ 0, 1 ]), 10, !0, [ 1, 10 ]);
    };
    var fs = Zo.format(".0e"), hs = {
        floor: function(n) {
            return -Math.ceil(-n);
        },
        ceil: function(n) {
            return -Math.floor(-n);
        }
    };
    Zo.scale.pow = function() {
        return Xi(Zo.scale.linear(), 1, [ 0, 1 ]);
    }, Zo.scale.sqrt = function() {
        return Zo.scale.pow().exponent(.5);
    }, Zo.scale.ordinal = function() {
        return Bi([], {
            t: "range",
            a: [ [] ]
        });
    }, Zo.scale.category10 = function() {
        return Zo.scale.ordinal().range(gs);
    }, Zo.scale.category20 = function() {
        return Zo.scale.ordinal().range(ps);
    }, Zo.scale.category20b = function() {
        return Zo.scale.ordinal().range(vs);
    }, Zo.scale.category20c = function() {
        return Zo.scale.ordinal().range(ds);
    };
    var gs = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(vt), ps = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(vt), vs = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(vt), ds = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(vt);
    Zo.scale.quantile = function() {
        return Wi([], []);
    }, Zo.scale.quantize = function() {
        return Ji(0, 1, [ 0, 1 ]);
    }, Zo.scale.threshold = function() {
        return Gi([ .5 ], [ 0, 1 ]);
    }, Zo.scale.identity = function() {
        return Ki([ 0, 1 ]);
    }, Zo.svg = {}, Zo.svg.arc = function() {
        function n() {
            var n = t.apply(this, arguments), i = e.apply(this, arguments), o = r.apply(this, arguments) + ms, a = u.apply(this, arguments) + ms, c = (o > a && (c = o, 
            o = a, a = c), a - o), s = ba > c ? "0" : "1", l = Math.cos(o), f = Math.sin(o), h = Math.cos(a), g = Math.sin(a);
            return c >= ys ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z" : n ? "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + s + ",0 " + n * l + "," + n * f + "Z" : "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L0,0Z";
        }
        var t = Qi, e = no, r = to, u = eo;
        return n.innerRadius = function(e) {
            return arguments.length ? (t = bt(e), n) : t;
        }, n.outerRadius = function(t) {
            return arguments.length ? (e = bt(t), n) : e;
        }, n.startAngle = function(t) {
            return arguments.length ? (r = bt(t), n) : r;
        }, n.endAngle = function(t) {
            return arguments.length ? (u = bt(t), n) : u;
        }, n.centroid = function() {
            var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2, i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + ms;
            return [ Math.cos(i) * n, Math.sin(i) * n ];
        }, n;
    };
    var ms = -Sa, ys = wa - ka;
    Zo.svg.line = function() {
        return ro(wt);
    };
    var xs = Zo.map({
        linear: uo,
        "linear-closed": io,
        step: oo,
        "step-before": ao,
        "step-after": co,
        basis: po,
        "basis-open": vo,
        "basis-closed": mo,
        bundle: yo,
        cardinal: fo,
        "cardinal-open": so,
        "cardinal-closed": lo,
        monotone: So
    });
    xs.forEach(function(n, t) {
        t.key = n, t.closed = /-closed$/.test(n);
    });
    var Ms = [ 0, 2 / 3, 1 / 3, 0 ], _s = [ 0, 1 / 3, 2 / 3, 0 ], bs = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
    Zo.svg.line.radial = function() {
        var n = ro(ko);
        return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n;
    }, ao.reverse = co, co.reverse = ao, Zo.svg.area = function() {
        return Eo(wt);
    }, Zo.svg.area.radial = function() {
        var n = Eo(ko);
        return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, 
        delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, 
        delete n.y1, n;
    }, Zo.svg.chord = function() {
        function n(n, a) {
            var c = t(this, i, n, a), s = t(this, o, n, a);
            return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, s) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, s.r, s.p0) + r(s.r, s.p1, s.a1 - s.a0) + u(s.r, s.p1, c.r, c.p0)) + "Z";
        }
        function t(n, t, e, r) {
            var u = t.call(n, e, r), i = a.call(n, u, r), o = c.call(n, u, r) + ms, l = s.call(n, u, r) + ms;
            return {
                r: i,
                a0: o,
                a1: l,
                p0: [ i * Math.cos(o), i * Math.sin(o) ],
                p1: [ i * Math.cos(l), i * Math.sin(l) ]
            };
        }
        function e(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1;
        }
        function r(n, t, e) {
            return "A" + n + "," + n + " 0 " + +(e > ba) + ",1 " + t;
        }
        function u(n, t, e, r) {
            return "Q 0,0 " + r;
        }
        var i = gr, o = pr, a = Ao, c = to, s = eo;
        return n.radius = function(t) {
            return arguments.length ? (a = bt(t), n) : a;
        }, n.source = function(t) {
            return arguments.length ? (i = bt(t), n) : i;
        }, n.target = function(t) {
            return arguments.length ? (o = bt(t), n) : o;
        }, n.startAngle = function(t) {
            return arguments.length ? (c = bt(t), n) : c;
        }, n.endAngle = function(t) {
            return arguments.length ? (s = bt(t), n) : s;
        }, n;
    }, Zo.svg.diagonal = function() {
        function n(n, u) {
            var i = t.call(this, n, u), o = e.call(this, n, u), a = (i.y + o.y) / 2, c = [ i, {
                x: i.x,
                y: a
            }, {
                x: o.x,
                y: a
            }, o ];
            return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3];
        }
        var t = gr, e = pr, r = Co;
        return n.source = function(e) {
            return arguments.length ? (t = bt(e), n) : t;
        }, n.target = function(t) {
            return arguments.length ? (e = bt(t), n) : e;
        }, n.projection = function(t) {
            return arguments.length ? (r = t, n) : r;
        }, n;
    }, Zo.svg.diagonal.radial = function() {
        var n = Zo.svg.diagonal(), t = Co, e = n.projection;
        return n.projection = function(n) {
            return arguments.length ? e(No(t = n)) : t;
        }, n;
    }, Zo.svg.symbol = function() {
        function n(n, r) {
            return (ws.get(t.call(this, n, r)) || To)(e.call(this, n, r));
        }
        var t = Lo, e = zo;
        return n.type = function(e) {
            return arguments.length ? (t = bt(e), n) : t;
        }, n.size = function(t) {
            return arguments.length ? (e = bt(t), n) : e;
        }, n;
    };
    var ws = Zo.map({
        circle: To,
        cross: function(n) {
            var t = Math.sqrt(n / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z";
        },
        diamond: function(n) {
            var t = Math.sqrt(n / (2 * As)), e = t * As;
            return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z";
        },
        square: function(n) {
            var t = Math.sqrt(n) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z";
        },
        "triangle-down": function(n) {
            var t = Math.sqrt(n / Es), e = t * Es / 2;
            return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z";
        },
        "triangle-up": function(n) {
            var t = Math.sqrt(n / Es), e = t * Es / 2;
            return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z";
        }
    });
    Zo.svg.symbolTypes = ws.keys();
    var Ss, ks, Es = Math.sqrt(3), As = Math.tan(30 * Aa), Cs = [], Ns = 0;
    Cs.call = pa.call, Cs.empty = pa.empty, Cs.node = pa.node, Cs.size = pa.size, Zo.transition = function(n) {
        return arguments.length ? Ss ? n.transition() : n : ma.transition();
    }, Zo.transition.prototype = Cs, Cs.select = function(n) {
        var t, e, r, u = this.id, i = [];
        n = b(n);
        for (var o = -1, a = this.length; ++o < a; ) {
            i.push(t = []);
            for (var c = this[o], s = -1, l = c.length; ++s < l; ) (r = c[s]) && (e = n.call(r, r.__data__, s, o)) ? ("__data__" in r && (e.__data__ = r.__data__), 
            Po(e, s, u, r.__transition__[u]), t.push(e)) : t.push(null);
        }
        return qo(i, u);
    }, Cs.selectAll = function(n) {
        var t, e, r, u, i, o = this.id, a = [];
        n = w(n);
        for (var c = -1, s = this.length; ++c < s; ) for (var l = this[c], f = -1, h = l.length; ++f < h; ) if (r = l[f]) {
            i = r.__transition__[o], e = n.call(r, r.__data__, f, c), a.push(t = []);
            for (var g = -1, p = e.length; ++g < p; ) (u = e[g]) && Po(u, g, o, i), t.push(u);
        }
        return qo(a, o);
    }, Cs.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = R(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []);
            for (var e = this[i], a = 0, c = e.length; c > a; a++) (r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r);
        }
        return qo(u, this.id);
    }, Cs.tween = function(n, t) {
        var e = this.id;
        return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : P(this, null == t ? function(t) {
            t.__transition__[e].tween.remove(n);
        } : function(r) {
            r.__transition__[e].tween.set(n, t);
        });
    }, Cs.attr = function(n, t) {
        function e() {
            this.removeAttribute(a);
        }
        function r() {
            this.removeAttributeNS(a.space, a.local);
        }
        function u(n) {
            return null == n ? e : (n += "", function() {
                var t, e = this.getAttribute(a);
                return e !== n && (t = o(e, n), function(n) {
                    this.setAttribute(a, t(n));
                });
            });
        }
        function i(n) {
            return null == n ? r : (n += "", function() {
                var t, e = this.getAttributeNS(a.space, a.local);
                return e !== n && (t = o(e, n), function(n) {
                    this.setAttributeNS(a.space, a.local, t(n));
                });
            });
        }
        if (arguments.length < 2) {
            for (t in n) this.attr(t, n[t]);
            return this;
        }
        var o = "transform" == n ? Du : hu, a = Zo.ns.qualify(n);
        return Ro(this, "attr." + n, t, a.local ? i : u);
    }, Cs.attrTween = function(n, t) {
        function e(n, e) {
            var r = t.call(this, n, e, this.getAttribute(u));
            return r && function(n) {
                this.setAttribute(u, r(n));
            };
        }
        function r(n, e) {
            var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
            return r && function(n) {
                this.setAttributeNS(u.space, u.local, r(n));
            };
        }
        var u = Zo.ns.qualify(n);
        return this.tween("attr." + n, u.local ? r : e);
    }, Cs.style = function(n, t, e) {
        function r() {
            this.style.removeProperty(n);
        }
        function u(t) {
            return null == t ? r : (t += "", function() {
                var r, u = Wo.getComputedStyle(this, null).getPropertyValue(n);
                return u !== t && (r = hu(u, t), function(t) {
                    this.style.setProperty(n, r(t), e);
                });
            });
        }
        var i = arguments.length;
        if (3 > i) {
            if ("string" != typeof n) {
                2 > i && (t = "");
                for (e in n) this.style(e, n[e], t);
                return this;
            }
            e = "";
        }
        return Ro(this, "style." + n, t, u);
    }, Cs.styleTween = function(n, t, e) {
        function r(r, u) {
            var i = t.call(this, r, u, Wo.getComputedStyle(this, null).getPropertyValue(n));
            return i && function(t) {
                this.style.setProperty(n, i(t), e);
            };
        }
        return arguments.length < 3 && (e = ""), this.tween("style." + n, r);
    }, Cs.text = function(n) {
        return Ro(this, "text", n, Do);
    }, Cs.remove = function() {
        return this.each("end.transition", function() {
            var n;
            this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this);
        });
    }, Cs.ease = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].ease : ("function" != typeof n && (n = Zo.ease.apply(Zo, arguments)), 
        P(this, function(e) {
            e.__transition__[t].ease = n;
        }));
    }, Cs.delay = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].delay : P(this, "function" == typeof n ? function(e, r, u) {
            e.__transition__[t].delay = +n.call(e, e.__data__, r, u);
        } : (n = +n, function(e) {
            e.__transition__[t].delay = n;
        }));
    }, Cs.duration = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].duration : P(this, "function" == typeof n ? function(e, r, u) {
            e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u));
        } : (n = Math.max(1, n), function(e) {
            e.__transition__[t].duration = n;
        }));
    }, Cs.each = function(n, t) {
        var e = this.id;
        if (arguments.length < 2) {
            var r = ks, u = Ss;
            Ss = e, P(this, function(t, r, u) {
                ks = t.__transition__[e], n.call(t, t.__data__, r, u);
            }), ks = r, Ss = u;
        } else P(this, function(r) {
            var u = r.__transition__[e];
            (u.event || (u.event = Zo.dispatch("start", "end"))).on(n, t);
        });
        return this;
    }, Cs.transition = function() {
        for (var n, t, e, r, u = this.id, i = ++Ns, o = [], a = 0, c = this.length; c > a; a++) {
            o.push(n = []);
            for (var t = this[a], s = 0, l = t.length; l > s; s++) (e = t[s]) && (r = Object.create(e.__transition__[u]), 
            r.delay += r.duration, Po(e, s, i, r)), n.push(e);
        }
        return qo(o, i);
    }, Zo.svg.axis = function() {
        function n(n) {
            n.each(function() {
                var n, s = Zo.select(this), l = this.__chart__ || e, f = this.__chart__ = e.copy(), h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c, g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : wt : t, p = s.selectAll(".tick").data(h, f), v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ka), d = Zo.transition(p.exit()).style("opacity", ka).remove(), m = Zo.transition(p.order()).style("opacity", 1), y = Ti(f), x = s.selectAll(".domain").data([ 0 ]), M = (x.enter().append("path").attr("class", "domain"), 
                Zo.transition(x));
                v.append("line"), v.append("text");
                var _ = v.select("line"), b = m.select("line"), w = p.select("text").text(g), S = v.select("text"), k = m.select("text");
                switch (r) {
                  case "bottom":
                    n = Uo, _.attr("y2", u), S.attr("y", Math.max(u, 0) + o), b.attr("x2", 0).attr("y2", u), 
                    k.attr("x", 0).attr("y", Math.max(u, 0) + o), w.attr("dy", ".71em").style("text-anchor", "middle"), 
                    M.attr("d", "M" + y[0] + "," + i + "V0H" + y[1] + "V" + i);
                    break;

                  case "top":
                    n = Uo, _.attr("y2", -u), S.attr("y", -(Math.max(u, 0) + o)), b.attr("x2", 0).attr("y2", -u), 
                    k.attr("x", 0).attr("y", -(Math.max(u, 0) + o)), w.attr("dy", "0em").style("text-anchor", "middle"), 
                    M.attr("d", "M" + y[0] + "," + -i + "V0H" + y[1] + "V" + -i);
                    break;

                  case "left":
                    n = jo, _.attr("x2", -u), S.attr("x", -(Math.max(u, 0) + o)), b.attr("x2", -u).attr("y2", 0), 
                    k.attr("x", -(Math.max(u, 0) + o)).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "end"), 
                    M.attr("d", "M" + -i + "," + y[0] + "H0V" + y[1] + "H" + -i);
                    break;

                  case "right":
                    n = jo, _.attr("x2", u), S.attr("x", Math.max(u, 0) + o), b.attr("x2", u).attr("y2", 0), 
                    k.attr("x", Math.max(u, 0) + o).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "start"), 
                    M.attr("d", "M" + i + "," + y[0] + "H0V" + y[1] + "H" + i);
                }
                if (f.rangeBand) {
                    var E = f, A = E.rangeBand() / 2;
                    l = f = function(n) {
                        return E(n) + A;
                    };
                } else l.rangeBand ? l = f : d.call(n, f);
                v.call(n, l), m.call(n, f);
            });
        }
        var t, e = Zo.scale.linear(), r = zs, u = 6, i = 6, o = 3, a = [ 10 ], c = null;
        return n.scale = function(t) {
            return arguments.length ? (e = t, n) : e;
        }, n.orient = function(t) {
            return arguments.length ? (r = t in Ls ? t + "" : zs, n) : r;
        }, n.ticks = function() {
            return arguments.length ? (a = arguments, n) : a;
        }, n.tickValues = function(t) {
            return arguments.length ? (c = t, n) : c;
        }, n.tickFormat = function(e) {
            return arguments.length ? (t = e, n) : t;
        }, n.tickSize = function(t) {
            var e = arguments.length;
            return e ? (u = +t, i = +arguments[e - 1], n) : u;
        }, n.innerTickSize = function(t) {
            return arguments.length ? (u = +t, n) : u;
        }, n.outerTickSize = function(t) {
            return arguments.length ? (i = +t, n) : i;
        }, n.tickPadding = function(t) {
            return arguments.length ? (o = +t, n) : o;
        }, n.tickSubdivide = function() {
            return arguments.length && n;
        }, n;
    };
    var zs = "bottom", Ls = {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    };
    Zo.svg.brush = function() {
        function n(i) {
            i.each(function() {
                var i = Zo.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u), o = i.selectAll(".background").data([ 0 ]);
                o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), 
                i.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var a = i.selectAll(".resize").data(p, wt);
                a.exit().remove(), a.enter().append("g").attr("class", function(n) {
                    return "resize " + n;
                }).style("cursor", function(n) {
                    return Ts[n];
                }).append("rect").attr("x", function(n) {
                    return /[ew]$/.test(n) ? -3 : null;
                }).attr("y", function(n) {
                    return /^[ns]/.test(n) ? -3 : null;
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
                var l, f = Zo.transition(i), h = Zo.transition(o);
                c && (l = Ti(c), h.attr("x", l[0]).attr("width", l[1] - l[0]), e(f)), s && (l = Ti(s), 
                h.attr("y", l[0]).attr("height", l[1] - l[0]), r(f)), t(f);
            });
        }
        function t(n) {
            n.selectAll(".resize").attr("transform", function(n) {
                return "translate(" + l[+/e$/.test(n)] + "," + f[+/^s/.test(n)] + ")";
            });
        }
        function e(n) {
            n.select(".extent").attr("x", l[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0]);
        }
        function r(n) {
            n.select(".extent").attr("y", f[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1] - f[0]);
        }
        function u() {
            function u() {
                32 == Zo.event.keyCode && (C || (x = null, z[0] -= l[1], z[1] -= f[1], C = 2), y());
            }
            function p() {
                32 == Zo.event.keyCode && 2 == C && (z[0] += l[1], z[1] += f[1], C = 0, y());
            }
            function v() {
                var n = Zo.mouse(_), u = !1;
                M && (n[0] += M[0], n[1] += M[1]), C || (Zo.event.altKey ? (x || (x = [ (l[0] + l[1]) / 2, (f[0] + f[1]) / 2 ]), 
                z[0] = l[+(n[0] < x[0])], z[1] = f[+(n[1] < x[1])]) : x = null), E && d(n, c, 0) && (e(S), 
                u = !0), A && d(n, s, 1) && (r(S), u = !0), u && (t(S), w({
                    type: "brush",
                    mode: C ? "move" : "resize"
                }));
            }
            function d(n, t, e) {
                var r, u, a = Ti(t), c = a[0], s = a[1], p = z[e], v = e ? f : l, d = v[1] - v[0];
                return C && (c -= p, s -= d + p), r = (e ? g : h) ? Math.max(c, Math.min(s, n[e])) : n[e], 
                C ? u = (r += p) + d : (x && (p = Math.max(c, Math.min(s, 2 * x[e] - r))), r > p ? (u = r, 
                r = p) : u = p), v[0] != r || v[1] != u ? (e ? o = null : i = null, v[0] = r, v[1] = u, 
                !0) : void 0;
            }
            function m() {
                v(), S.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), 
                Zo.select("body").style("cursor", null), L.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), 
                N(), w({
                    type: "brushend"
                });
            }
            var x, M, _ = this, b = Zo.select(Zo.event.target), w = a.of(_, arguments), S = Zo.select(_), k = b.datum(), E = !/^(n|s)$/.test(k) && c, A = !/^(e|w)$/.test(k) && s, C = b.classed("extent"), N = I(), z = Zo.mouse(_), L = Zo.select(Wo).on("keydown.brush", u).on("keyup.brush", p);
            if (Zo.event.changedTouches ? L.on("touchmove.brush", v).on("touchend.brush", m) : L.on("mousemove.brush", v).on("mouseup.brush", m), 
            S.interrupt().selectAll("*").interrupt(), C) z[0] = l[0] - z[0], z[1] = f[0] - z[1]; else if (k) {
                var T = +/w$/.test(k), q = +/^n/.test(k);
                M = [ l[1 - T] - z[0], f[1 - q] - z[1] ], z[0] = l[T], z[1] = f[q];
            } else Zo.event.altKey && (x = z.slice());
            S.style("pointer-events", "none").selectAll(".resize").style("display", null), Zo.select("body").style("cursor", b.style("cursor")), 
            w({
                type: "brushstart"
            }), v();
        }
        var i, o, a = M(n, "brushstart", "brush", "brushend"), c = null, s = null, l = [ 0, 0 ], f = [ 0, 0 ], h = !0, g = !0, p = qs[0];
        return n.event = function(n) {
            n.each(function() {
                var n = a.of(this, arguments), t = {
                    x: l,
                    y: f,
                    i: i,
                    j: o
                }, e = this.__chart__ || t;
                this.__chart__ = t, Ss ? Zo.select(this).transition().each("start.brush", function() {
                    i = e.i, o = e.j, l = e.x, f = e.y, n({
                        type: "brushstart"
                    });
                }).tween("brush:brush", function() {
                    var e = gu(l, t.x), r = gu(f, t.y);
                    return i = o = null, function(u) {
                        l = t.x = e(u), f = t.y = r(u), n({
                            type: "brush",
                            mode: "resize"
                        });
                    };
                }).each("end.brush", function() {
                    i = t.i, o = t.j, n({
                        type: "brush",
                        mode: "resize"
                    }), n({
                        type: "brushend"
                    });
                }) : (n({
                    type: "brushstart"
                }), n({
                    type: "brush",
                    mode: "resize"
                }), n({
                    type: "brushend"
                }));
            });
        }, n.x = function(t) {
            return arguments.length ? (c = t, p = qs[!c << 1 | !s], n) : c;
        }, n.y = function(t) {
            return arguments.length ? (s = t, p = qs[!c << 1 | !s], n) : s;
        }, n.clamp = function(t) {
            return arguments.length ? (c && s ? (h = !!t[0], g = !!t[1]) : c ? h = !!t : s && (g = !!t), 
            n) : c && s ? [ h, g ] : c ? h : s ? g : null;
        }, n.extent = function(t) {
            var e, r, u, a, h;
            return arguments.length ? (c && (e = t[0], r = t[1], s && (e = e[0], r = r[0]), 
            i = [ e, r ], c.invert && (e = c(e), r = c(r)), e > r && (h = e, e = r, r = h), 
            (e != l[0] || r != l[1]) && (l = [ e, r ])), s && (u = t[0], a = t[1], c && (u = u[1], 
            a = a[1]), o = [ u, a ], s.invert && (u = s(u), a = s(a)), u > a && (h = u, u = a, 
            a = h), (u != f[0] || a != f[1]) && (f = [ u, a ])), n) : (c && (i ? (e = i[0], 
            r = i[1]) : (e = l[0], r = l[1], c.invert && (e = c.invert(e), r = c.invert(r)), 
            e > r && (h = e, e = r, r = h))), s && (o ? (u = o[0], a = o[1]) : (u = f[0], a = f[1], 
            s.invert && (u = s.invert(u), a = s.invert(a)), u > a && (h = u, u = a, a = h))), 
            c && s ? [ [ e, u ], [ r, a ] ] : c ? [ e, r ] : s && [ u, a ]);
        }, n.clear = function() {
            return n.empty() || (l = [ 0, 0 ], f = [ 0, 0 ], i = o = null), n;
        }, n.empty = function() {
            return !!c && l[0] == l[1] || !!s && f[0] == f[1];
        }, Zo.rebind(n, a, "on");
    };
    var Ts = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    }, qs = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ], Rs = Qa.format = ic.timeFormat, Ds = Rs.utc, Ps = Ds("%Y-%m-%dT%H:%M:%S.%LZ");
    Rs.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Ho : Ps, 
    Ho.parse = function(n) {
        var t = new Date(n);
        return isNaN(t) ? null : t;
    }, Ho.toString = Ps.toString, Qa.second = Dt(function(n) {
        return new nc(1e3 * Math.floor(n / 1e3));
    }, function(n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t));
    }, function(n) {
        return n.getSeconds();
    }), Qa.seconds = Qa.second.range, Qa.seconds.utc = Qa.second.utc.range, Qa.minute = Dt(function(n) {
        return new nc(6e4 * Math.floor(n / 6e4));
    }, function(n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t));
    }, function(n) {
        return n.getMinutes();
    }), Qa.minutes = Qa.minute.range, Qa.minutes.utc = Qa.minute.utc.range, Qa.hour = Dt(function(n) {
        var t = n.getTimezoneOffset() / 60;
        return new nc(36e5 * (Math.floor(n / 36e5 - t) + t));
    }, function(n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t));
    }, function(n) {
        return n.getHours();
    }), Qa.hours = Qa.hour.range, Qa.hours.utc = Qa.hour.utc.range, Qa.month = Dt(function(n) {
        return n = Qa.day(n), n.setDate(1), n;
    }, function(n, t) {
        n.setMonth(n.getMonth() + t);
    }, function(n) {
        return n.getMonth();
    }), Qa.months = Qa.month.range, Qa.months.utc = Qa.month.utc.range;
    var Us = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ], js = [ [ Qa.second, 1 ], [ Qa.second, 5 ], [ Qa.second, 15 ], [ Qa.second, 30 ], [ Qa.minute, 1 ], [ Qa.minute, 5 ], [ Qa.minute, 15 ], [ Qa.minute, 30 ], [ Qa.hour, 1 ], [ Qa.hour, 3 ], [ Qa.hour, 6 ], [ Qa.hour, 12 ], [ Qa.day, 1 ], [ Qa.day, 2 ], [ Qa.week, 1 ], [ Qa.month, 1 ], [ Qa.month, 3 ], [ Qa.year, 1 ] ], Hs = Rs.multi([ [ ".%L", function(n) {
        return n.getMilliseconds();
    } ], [ ":%S", function(n) {
        return n.getSeconds();
    } ], [ "%I:%M", function(n) {
        return n.getMinutes();
    } ], [ "%I %p", function(n) {
        return n.getHours();
    } ], [ "%a %d", function(n) {
        return n.getDay() && 1 != n.getDate();
    } ], [ "%b %d", function(n) {
        return 1 != n.getDate();
    } ], [ "%B", function(n) {
        return n.getMonth();
    } ], [ "%Y", we ] ]), Fs = {
        range: function(n, t, e) {
            return Zo.range(Math.ceil(n / e) * e, +t, e).map(Oo);
        },
        floor: wt,
        ceil: wt
    };
    js.year = Qa.year, Qa.scale = function() {
        return Fo(Zo.scale.linear(), js, Hs);
    };
    var Os = js.map(function(n) {
        return [ n[0].utc, n[1] ];
    }), Ys = Ds.multi([ [ ".%L", function(n) {
        return n.getUTCMilliseconds();
    } ], [ ":%S", function(n) {
        return n.getUTCSeconds();
    } ], [ "%I:%M", function(n) {
        return n.getUTCMinutes();
    } ], [ "%I %p", function(n) {
        return n.getUTCHours();
    } ], [ "%a %d", function(n) {
        return n.getUTCDay() && 1 != n.getUTCDate();
    } ], [ "%b %d", function(n) {
        return 1 != n.getUTCDate();
    } ], [ "%B", function(n) {
        return n.getUTCMonth();
    } ], [ "%Y", we ] ]);
    Os.year = Qa.year.utc, Qa.scale.utc = function() {
        return Fo(Zo.scale.linear(), Os, Ys);
    }, Zo.text = St(function(n) {
        return n.responseText;
    }), Zo.json = function(n, t) {
        return kt(n, "application/json", Yo, t);
    }, Zo.html = function(n, t) {
        return kt(n, "text/html", Io, t);
    }, Zo.xml = St(function(n) {
        return n.responseXML;
    }), "function" == typeof define && define.amd ? define("d3", Zo) : "object" == typeof module && module.exports && (module.exports = Zo), 
    this.d3 = Zo;
}();

var pivServices = angular.module("pivServices", [ "ngResource" ]);

pivServices.factory("Vector", [ "$resource", function($resource) {
    return $resource("api/vectors/").get();
} ]), define("vectorService", function() {});

var pivControllers = angular.module("pivControllers", []);

pivControllers.controller("PivCtrl", [ "$scope", "$http", "Vector", function($scope, $http, Vector) {
    Vector.$promise.then(function(result) {
        console.log(result);
        var vectors = Vector.vectors, graph = new Graph(vectors);
        graph.initialize();
    }), $scope.formUrl = "upload", $scope.formData = {}, $scope.processForm = function() {
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
} ]), define("pivController", function() {}), Graph.prototype.initialize = function() {
    function tick() {
        path.attr("x1", function(d) {
            return d.source.x;
        }).attr("y1", function(d) {
            return d.source.y;
        }).attr("x2", function(d) {
            return d.target.x;
        }).attr("y2", function(d) {
            return d.target.y;
        }).attr("d", linkArc).on("drag", function() {
            return !1;
        }), circle.attr("transform", transform);
    }
    function linkArc(d) {
        var dx = d.target.x - d.source.x, dy = d.target.y - d.source.y, dr = Math.sqrt(dx * dx + dy * dy);
        return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
    }
    function transform(d) {
        return "translate(" + d.x + "," + d.y + ")";
    }
    var links = this.links, nodes = {};
    links.forEach(function(link) {
        link.source = nodes[link.source] || (nodes[link.source] = {
            name: link.source
        }), link.source.x = link.coords.source[0], link.source.y = link.coords.source[1], 
        link.target = nodes[link.target] || (nodes[link.target] = {
            name: link.target
        }), link.target.x = link.coords.target[0], link.target.y = link.coords.target[1];
    });
    var width = 960, height = 500, drag = (d3.svg.line().x(function(d) {
        return console.log(d), d.x;
    }).y(function(d) {
        return d.y;
    }).interpolate("linear"), d3.behavior.drag().origin(function(d) {
        return d;
    }).on("drag", function() {
        return !1;
    })), force = d3.layout.force().nodes(d3.values(nodes)).links(links).size([ width, height ]).charge(-300).on("tick", tick).start(), svg = d3.select(".field").append("svg").attr("width", width).attr("height", height);
    svg.append("defs").selectAll("marker").data([ "arrow" ]).enter().append("marker").attr("id", function(d) {
        return d;
    }).attr("viewBox", "0 -5 10 10").attr("refX", 15).attr("refY", 0).attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto").append("path").attr("d", "M0,-5L10,0L0,5").append("path");
    var path = svg.append("g").selectAll("path").data(force.links()).enter().append("path").attr("class", function(d) {
        return "link " + d.type;
    }).attr("marker-end", function(d) {
        return "url(#" + d.type + ")";
    }), circle = svg.append("g").selectAll("circle").data(force.nodes()).enter().append("circle").attr("r", 3).call(drag);
}, define("graphController", function() {});

var pivDirectives = angular.module("pivDirectives", []);

pivDirectives.directive("fileread", [ function() {
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
} ]), define("filereadDirective", function() {});

var pivApp = angular.module("pivApp", [ "ngRoute", "pivServices", "pivControllers", "pivDirectives" ]);

pivApp.config([ "$routeProvider", function($routeProvider) {
    $routeProvider.when("/piv", {
        templateUrl: "static/js/partials/index.html",
        controller: "PivCtrl"
    }).otherwise({
        templateUrl: "static/js/partials/index.html",
        controller: "PivCtrl"
    });
} ]), define("app", function() {}), define("main", [ "angular", "angular-route", "angular-resource", "bootstrap", "angular-strap", "jquery", "underscore", "d3", "vectorService", "pivController", "graphController", "filereadDirective", "app" ], function() {
    return function() {};
});