var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Button(_a) {
        var { text, sx = {} } = _a, rest = __rest(_a, ["text", "sx"]);
        const [state, setState] = React.useState({
            hovered: false,
        });
        const handleOnHovered = React.useCallback(() => {
            setState((oldState) => (Object.assign(Object.assign({}, oldState), { hovered: true })));
        }, []);
        return (React.createElement(TextButton, Object.assign({ style: Object.assign({ backgroundColor: state.hovered ? "blue" : "yellow" }, sx) }, rest, { text: text, onmouseover: handleOnHovered })));
    }
    exports.default = Button;
});
