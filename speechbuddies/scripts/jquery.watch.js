(function (b) {
    b.extend(b.fn, {watch: function (c, a, d) {
        var f = document.createElement("div"), h = function (a, d) {
            var a = "on" + a, b = a in d;
            b || (d.setAttribute(a, "return;"), b = typeof d[a] == "function");
            "onpropertychange" == a && jQuery.browser.msie && jQuery.browser.version >= 9 && (b = !1);
            return b
        };
        typeof a == "function" && (d = a, a = {});
        typeof d != "function" && (d = function () {
        });
        a = b.extend({}, {throttle: 10}, a);
        return this.each(function () {
            var i = b(this), g = function () {
                for (var a = i.data(), d = !1, b, f = 0; f < a.props.length; f++)if (b = i.css(a.props[f]),
                    a.vals[f] != b) {
                    a.vals[f] = b;
                    d = !0;
                    break
                }
                d && a.cb && a.cb.call(i, a)
            }, j = {props: c.split(","), cb: d, vals: []};
            b.each(j.props, function (a) {
                j.vals[a] = i.css(j.props[a])
            });
            i.data(j);
            if (h("DOMAttrModified", f))i.on("DOMAttrModified", d); else if (h("propertychange", f))i.on("propertychange", d); else setInterval(g, a.throttle)
        })
    }})
})(jQuery);
