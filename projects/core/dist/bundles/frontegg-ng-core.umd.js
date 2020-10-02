(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng-test'), require('@angular/router'), require('@angular/cdk/portal'), require('ngx-countdown')) :
    typeof define === 'function' && define.amd ? define('@frontegg/ng-core', ['exports', '@angular/core', 'ng-test', '@angular/router', '@angular/cdk/portal', 'ngx-countdown'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.frontegg = global.frontegg || {}, global.frontegg['ng-core'] = {}), global.ng.core, global.ngTest, global.ng.router, global.ng.cdk.portal, global.ngxCountdown));
}(this, (function (exports, i0, ngTest, i1, portal, ngxCountdown) { 'use strict';

    var CoreService = /** @class */ (function () {
        function CoreService() {
        }
        return CoreService;
    }());
    CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
    CoreService.ɵprov = i0.ɵɵdefineInjectable({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CoreService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var _c0 = ["*"];
    var FronteggProviderComponent = /** @class */ (function () {
        // 1) createElement(RcComponent)
        //   1.1) pass upper props to RcComponent
        //   1.2) create smart children component with unique id to inject ng-content after mount
        // 2) create React Portal to be rendered inside this.elementRef
        // 3) search for parent Rc Component to inject this ReactPortal to it's children
        // 4) after React.Portal did mount, inject ng-container to it's smart children component
        function FronteggProviderComponent(elem, router) {
            this.elem = elem;
            this.router = router;
            this.rcPortals = [];
            this.ngChildren = [];
            this.routeListeners = [];
            this.elem.nativeElement.ngClass = this;
        }
        FronteggProviderComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.rcProxy = document.createElement('div');
            document.body.appendChild(this.rcProxy);
            this.ngChildren = __spread(this.elem.nativeElement.childNodes);
            var ngComponents = ngTest.createElement('div', {
                ref: function (ref) { return _this.ngChildren.forEach(function (node) { return ref === null || ref === void 0 ? void 0 : ref.appendChild(node); }); },
            }, []);
            // @ts-ignore
            window.ngH = this.router;
            // @ts-ignore
            this.router.location._platformLocation._history.listen = function (e) {
                _this.routeListeners.push(e);
                return function () {
                    _this.routeListeners = _this.routeListeners.filter(function (l) { return l !== e; });
                };
            };
            // @ts-ignore
            this.router.location._platformLocation._history.createHref = function (e) {
                return e.pathname;
            };
            // @ts-ignore
            this.router.location._platformLocation._history.push = function (path, data) {
                // @ts-ignore
                _this.router.navigate([path], { state: data, replaceUrl: false });
            };
            // @ts-ignore
            this.router.location._platformLocation._history.replace = function (path, data) {
                _this.router.navigate([path], { state: data, replaceUrl: true });
            };
            // @ts-ignore
            this.router.location._platformLocation._history.location = this.router.location._platformLocation.location;
            this.router.events.subscribe(function (event) {
                if (event instanceof i1.NavigationEnd) {
                    // @ts-ignore
                    _this.routeListeners.forEach(function (l) { return l(_this.router.location._platformLocation.location); });
                }
            });
            this.rcWrapper = ngTest.createPortal(ngTest.createElement(ngTest.Wrapper, {
                ref: function (ref) { return _this.rcWrapperRef = ref; },
                ngComponents: ngComponents,
                rcPortals: this.rcPortals,
                // @ts-ignore
                _history: this.router.location._platformLocation._history,
            }), this.elem.nativeElement);
            ngTest.render(this.rcWrapper, this.rcProxy);
        };
        FronteggProviderComponent.prototype.ngOnInit = function () {
        };
        FronteggProviderComponent.prototype.mountChild = function (child) {
            this.rcWrapperRef.mountChild(child);
        };
        FronteggProviderComponent.prototype.unmountChild = function (child) {
            this.rcWrapperRef.unmountChild(child);
        };
        FronteggProviderComponent.prototype.ngOnDestroy = function () {
            // this.nodeRef?.remove();
        };
        return FronteggProviderComponent;
    }());
    FronteggProviderComponent.ɵfac = function FronteggProviderComponent_Factory(t) { return new (t || FronteggProviderComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Router)); };
    FronteggProviderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FronteggProviderComponent, selectors: [["frontegg-provider"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function FronteggProviderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FronteggProviderComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'frontegg-provider',
                        template: "\n    <!--    <frontegg-router></frontegg-router>-->\n    <ng-content></ng-content>",
                        styles: [],
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i1.Router }]; }, null);
    })();

    var _c0$1 = ["*"];
    var FronteggFirstComponent = /** @class */ (function () {
        function FronteggFirstComponent(elem) {
            this.elem = elem;
            console.log('FronteggFirstComponent.constructor');
            this.elem.nativeElement.ngClass = this;
        }
        FronteggFirstComponent.prototype.ngAfterViewInit = function () {
            var parent = this.elem.nativeElement.parentElement;
            while (parent != null && !parent.ngClass) {
                parent = parent.parentElement;
            }
            this.rcPortal = ngTest.createPortal(ngTest.createElement(ngTest.FirstComp, { isNg: true }, null), this.elem.nativeElement);
            if (!parent) {
                var rcProxy = document.createElement('div');
                document.body.appendChild(rcProxy);
                ngTest.render(this.rcPortal, rcProxy);
            }
            else {
                this.rcParent = parent.ngClass;
                this.rcParent.mountChild(this.rcPortal);
            }
        };
        FronteggFirstComponent.prototype.ngOnInit = function () {
            console.log('FronteggFirstComponent.ngOnInit');
        };
        FronteggFirstComponent.prototype.ngOnDestroy = function () {
            console.log('FronteggFirstComponent.ngOnDestroy');
            this.rcParent.unmountChild(this.rcPortal);
        };
        return FronteggFirstComponent;
    }());
    FronteggFirstComponent.ɵfac = function FronteggFirstComponent_Factory(t) { return new (t || FronteggFirstComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    FronteggFirstComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FronteggFirstComponent, selectors: [["frontegg-first-component"]], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function FronteggFirstComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FronteggFirstComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'frontegg-first-component',
                        template: "<ng-content></ng-content>",
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, null);
    })();

    var _c0$2 = ["*"];
    var FronteggRouterComponent = /** @class */ (function () {
        function FronteggRouterComponent(elem, router) {
            this.elem = elem;
            // @ts-ignore
            window.ngHistory = router;
            router.events.subscribe(function (event) {
                console.log(event);
                if (event instanceof i1.NavigationStart) {
                    console.log(event);
                    if (event.navigationTrigger === 'imperative') {
                        // @ts-ignore
                        (window.rcHistory).replace(event.url, event.restoredState);
                    }
                    // @ts-ignore
                    // console.log(window.ngHistory.location._platformLocation._history);
                    // @ts-ignore
                    // Object.assign(window.rcHistory, window.ngHistory.location._platformLocation._history);
                    // event.url
                    // window.localStorage.setItem('previousUrl', this.router.url);
                }
            });
        }
        return FronteggRouterComponent;
    }());
    FronteggRouterComponent.ɵfac = function FronteggRouterComponent_Factory(t) { return new (t || FronteggRouterComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Router)); };
    FronteggRouterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FronteggRouterComponent, selectors: [["frontegg-router"]], ngContentSelectors: _c0$2, decls: 1, vars: 0, template: function FronteggRouterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FronteggRouterComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'frontegg-router',
                        template: "\n    <ng-content></ng-content>",
                        styles: [],
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i1.Router }]; }, null);
    })();

    var CoreModule = /** @class */ (function () {
        function CoreModule() {
        }
        return CoreModule;
    }());
    CoreModule.ɵmod = i0.ɵɵdefineNgModule({ type: CoreModule });
    CoreModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
                portal.PortalModule,
                ngxCountdown.CountdownModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreModule, { declarations: [FronteggProviderComponent,
                FronteggFirstComponent,
                FronteggRouterComponent], imports: [portal.PortalModule,
                ngxCountdown.CountdownModule], exports: [FronteggProviderComponent,
                FronteggFirstComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CoreModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FronteggProviderComponent,
                            FronteggFirstComponent,
                            FronteggRouterComponent,
                        ],
                        imports: [
                            portal.PortalModule,
                            ngxCountdown.CountdownModule,
                        ],
                        exports: [
                            FronteggProviderComponent,
                            FronteggFirstComponent,
                        ],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of core
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CoreModule = CoreModule;
    exports.CoreService = CoreService;
    exports.FronteggFirstComponent = FronteggFirstComponent;
    exports.FronteggProviderComponent = FronteggProviderComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=frontegg-ng-core.umd.js.map
