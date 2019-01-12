webpackJsonp([1],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ship_card_ship_card_module__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_ship_card_ship_card_module__["a" /* ShipCardComponentModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */])
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(11);
var map_1 = __webpack_require__(191);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipCardComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ship_card__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShipCardComponentModule = (function () {
    function ShipCardComponentModule() {
    }
    ShipCardComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ship_card__["a" /* ShipCardComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__ship_card__["a" /* ShipCardComponent */]]
        })
    ], ShipCardComponentModule);
    return ShipCardComponentModule;
}());

//# sourceMappingURL=ship-card.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShipCardComponent = (function () {
    function ShipCardComponent(sanitizer, appState, navCtrl, http) {
        this.sanitizer = sanitizer;
        this.appState = appState;
        this.navCtrl = navCtrl;
        this.http = http;
    }
    ShipCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // setTimeout(() => {
        // let shipModel = this.ship.model <= 2 ? 1 : 2
        // this.svgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        //   "/assets/imgs/ships/ship" + shipModel + ".svg"
        // )
        // console.log(this.ship)
        // let shipModel = this.ship.model == 1 ? 1 : 2
        // this.svgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        //   "/assets/imgs/ships/ship" + shipModel + ".svg"
        // )
        // console.log(this.wrapper)
        var shipLoad;
        if (this.appState.shipImages[this.ship.model]) {
            this.finalizeShip(this.appState.shipImages[this.ship.model]);
        }
        else {
            this.http
                .get("/images/ships/" + this.ship.model + "-ship.svg")
                .map(function (res) { return res.text(); })
                .subscribe(function (data) {
                _this.appState.shipImages[_this.ship.model] = data;
                _this.finalizeShip(data);
            }, function (err) { return console.log(err); });
        }
        // if (this.ship.model == 1) {
        //   shipLoad = this.appState.ship1
        // } else if (this.ship.model == 2) {
        //   shipLoad = this.appState.ship2
        // } else if (this.ship.model == 3) {
        //   shipLoad = this.appState.ship3
        // } else if (this.ship.model == 4) {
        //   shipLoad = this.appState.ship4
        // } else {
        //   console.log(this.ship.model)
        //   shipLoad = this.appState.ship0
        // }
        // }, 80)
        // this.doneLoading()
    };
    ShipCardComponent.prototype.positionEleToCenter = function () {
        var bbox = this.svgNative.getBBox();
        console.log(bbox.width + " bbox " + bbox.height);
        var viewBox = this.svgNative.getAttribute("viewBox");
        console.log(viewBox);
        viewBox = viewBox.split(" ");
        var cx = parseFloat(viewBox[0]) + parseFloat(viewBox[2]) / 2;
        var cy = parseFloat(viewBox[1]) + parseFloat(viewBox[3]) / 2;
        var x = cx - bbox.x - bbox.width / 2;
        var y = cy - bbox.y - bbox.height / 2;
        var matrix = "1 0 0 1 " + x + " " + y;
        this.svgNative.setAttribute("transform", "matrix(" + matrix + ")");
    };
    ShipCardComponent.prototype.finalizeShip = function (shipLoad) {
        shipLoad = shipLoad.slice(0);
        shipLoad = shipLoad.replace("Layer_1", "Layer_1-" + Math.random());
        var data = shipLoad.replace(/ChangeName/g, "id" + this.ship.id);
        data = data.replace(/cls-/g, "id" + this.ship.id + "-");
        this.appState.changedOne = true;
        data = this.getColors(data);
        this.wrapper.nativeElement.innerHTML = data;
        this.svgNative = this.wrapper.nativeElement.children[0];
        if (this.ship.primaryWeapon[0] == "B") {
            this.svgNative.children["CENTER_CANNON"].innerHTML = "";
            // if (this.ship.primaryWeapon[5] != "F") {
            //   svgNative.children["WING_CANNON_1"].innerHTML = ""
            //   let cannon2 = svgNative.children["WING_CANNON_2"]
            //   if (cannon2) {
            //     cannon2.innerHTML = ""
            //   }
            // }
        }
        else {
            this.svgNative.children["WING_CANNON_1"].innerHTML = "";
            var cannon2 = this.svgNative.children["WING_CANNON_2"];
            if (cannon2) {
                cannon2.innerHTML = "";
            }
        }
        // this.positionEleToCenter()
    };
    ShipCardComponent.prototype.goToShip = function (e, id) {
        e.preventDefault();
        this.navCtrl.setRoot("ShipPage", { id: id });
        this.appState.activePage = "/ship";
    };
    ShipCardComponent.prototype.ionViewDidLoad = function () { };
    ShipCardComponent.prototype.getColors = function (data) {
        var primaryColor = "rgb(" +
            this.ship.primaryColor[0] +
            "," +
            this.ship.primaryColor[1] +
            "," +
            this.ship.primaryColor[2] +
            ")";
        var secondaryColor = "rgb(" +
            this.ship.secondaryColor[0] +
            "," +
            this.ship.secondaryColor[1] +
            "," +
            this.ship.secondaryColor[2] +
            ")";
        if (this.ship.secondaryWeapon[0] == "B") {
            var ind = data.indexOf("fill:#");
            data = data.replace(data.substring(ind + 5, ind + 12), secondaryColor);
            data = data.replace(/PrimaryColor/g, primaryColor);
            data = data.replace(/SecondaryColor/g, primaryColor);
        }
        else {
            data = data.replace(/PrimaryColor/g, primaryColor);
            data = data.replace(/SecondaryColor/g, secondaryColor);
        }
        return data;
    };
    ShipCardComponent.prototype.doneLoading = function () {
        console.log("loading");
        this.svg.nativeElement.style = "--secondary-color: green;";
        var gradient = this.wrapper.nativeElement.children[0].contentDocument.all[1]
            .children[1];
        if (gradient && this.ship.secondaryWeapon) {
            if (this.ship.secondaryWeapon[0] == "B") {
                gradient.children[1].attributes[1].value =
                    "rgb(" +
                        this.ship.primaryColor[0] +
                        "," +
                        this.ship.primaryColor[1] +
                        "," +
                        this.ship.primaryColor[2] +
                        ")";
                gradient.children[0].attributes[1].value =
                    "rgb(" +
                        this.ship.primaryColor[0] +
                        "," +
                        this.ship.primaryColor[1] +
                        "," +
                        this.ship.primaryColor[2] +
                        ")";
                console.log(this.svg.nativeElement.contentDocument.all[1].children[0].sheet);
                this.svg.nativeElement.contentDocument.all[1].children[0].sheet.rules[0].style.fill =
                    "rgb(" +
                        this.ship.secondaryWeapon[0] +
                        "," +
                        this.ship.secondaryWeapon[1] +
                        "," +
                        this.ship.secondaryWeapon[2] +
                        ")";
            }
            else {
                gradient.children[1].attributes[1].value =
                    "rgb(" +
                        this.ship.primaryColor[0] +
                        "," +
                        this.ship.primaryColor[1] +
                        "," +
                        this.ship.primaryColor[2] +
                        ")";
                gradient.children[0].attributes[1].value =
                    "rgb(" +
                        this.ship.secondaryWeapon[0] +
                        "," +
                        this.ship.secondaryWeapon[1] +
                        "," +
                        this.ship.secondaryWeapon[2] +
                        ")";
            }
            if (this.ship.primaryWeapon[0] == "B") {
                this.svg.nativeElement.contentDocument.all["CENTER_CANNON"].innerHTML =
                    "";
                if (this.ship.primaryWeapon[5] != "F") {
                    var cannon2 = this.svg.nativeElement.contentDocument.all["WING_CANNON_2"];
                    if (cannon2) {
                        cannon2.innerHTML = "";
                    }
                }
            }
            else {
                this.svg.nativeElement.contentDocument.all["WING_CANNON_1"].innerHTML =
                    "";
                var cannon2 = this.svg.nativeElement.contentDocument.all["WING_CANNON_2"];
                if (cannon2) {
                    cannon2.innerHTML = "";
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ShipCardComponent.prototype, "ship", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("svg"),
        __metadata("design:type", Object)
    ], ShipCardComponent.prototype, "svg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("wrapper"),
        __metadata("design:type", Object)
    ], ShipCardComponent.prototype, "wrapper", void 0);
    ShipCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "ship-card",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\components\ship-card\ship-card.html"*/'<ion-card>\n  <a [href]="\'/ship/\'+ship.id" (click)="goToShip($event, ship.id)">\n\n\n    <ion-card-content>\n      <div class="shipWrap" #wrapper>\n        <!-- <img #svg class="shipSVG" src="assets/imgs/ships/ship1.svg" /> -->\n\n        <!-- <svg #svg class="svgClass">\n          <use xlink:href="#ship1" id="shiper1" style="--primary-color: #0099cc;"></use>\n        </svg> -->\n        <!-- <object #svg type="image/svg+xml" [data]="svgUrl" class="shipSVG" (load)="doneLoading()">\n          Ship Image\n        </object> -->\n        <!-- <object #svg type="image/svg+xml" [data]="this.appState.ship1" class="shipSVG" (load)="doneLoading()">\n          Ship Image\n        </object> -->\n      </div>\n      <ion-row no-padding>\n        <ion-col col-12>\n          <div class="weaponWrap">\n            <img class="weaponIcon" [src]="\'/assets/imgs/weapons/\'+ship.secondaryWeapon+\'.png\'" [title]="ship.secondaryWeapon">\n            <img class="weaponIcon" [src]="\'/assets/imgs/weapons/\'+ship.primaryWeapon+\'.png\'" [title]="ship.primaryWeapon">\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-card-title class="ellip">\n        {{ship.name ? ship.name : \'Ship \'+ship.id}}\n      </ion-card-title>\n      <ion-row no-padding>\n        <ion-col>\n          <button ion-button clear small color="danger" icon-start title="ship.model">\n            <!-- <ion-icon name=\'star\'></ion-icon> -->\n            Ship #{{ship.id}}\n          </button>\n          <span *ngIf="ship.price">{{ship.price / 1000000000000000000}} Eth</span>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n\n    <!-- <ion-row no-padding>\n    <ion-col col-6>\n      <span [ngStyle]="{\'color\': \'rgb(\' + ship.color1[0] + \',\' + ship.color1[1] + \',\' + ship.color1[2] +\')\'}">Primary Color</span>\n    </ion-col>\n    <ion-col col-6>\n      <span [ngStyle]="{\'color\': \'rgb(\' + ship.color2[0] + \',\' + ship.color2[1] + \',\' + ship.color2[2] +\')\'}">Secondary Color</span>\n    </ion-col>\n  </ion-row> -->\n  </a>\n</ion-card>\n'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\components\ship-card\ship-card.html"*/,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2__app_app_service__["a" /* AppState */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], ShipCardComponent);
    return ShipCardComponent;
}());

//# sourceMappingURL=ship-card.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_match_height_my_match_height__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__["a" /* HideHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_2__my_match_height_my_match_height__["a" /* MyMatchHeightDirective */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__hide_header_hide_header__["a" /* HideHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_2__my_match_height_my_match_height__["a" /* MyMatchHeightDirective */]]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var HideHeaderDirective = (function () {
    function HideHeaderDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        console.log("Hello HideHeaderDirective Directive", this.header);
    }
    HideHeaderDirective.prototype.ngOnInit = function () {
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, "webkitTransition", "top 700ms");
        this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
        this.renderer.setElementStyle(this.scrollContent, "webkitTransition", "margin-top 700ms");
    };
    HideHeaderDirective.prototype.onContentScroll = function (event) {
        if (event.scrollTop > 56) {
            this.renderer.setElementStyle(this.header, "top", "-56px");
            this.renderer.setElementStyle(this.scrollContent, "margin-top", "0px");
        }
        else {
            this.renderer.setElementStyle(this.header, "top", "0px");
            this.renderer.setElementStyle(this.scrollContent, "margin-top", "56px");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("header"),
        __metadata("design:type", HTMLElement)
    ], HideHeaderDirective.prototype, "header", void 0);
    HideHeaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "[hide-header]",
            host: {
                "(ionScroll)": "onContentScroll($event)"
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], HideHeaderDirective);
    return HideHeaderDirective;
}());

//# sourceMappingURL=hide-header.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMatchHeightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyMatchHeightDirective = (function () {
    function MyMatchHeightDirective(el) {
        this.el = el;
        console.log("in match");
    }
    MyMatchHeightDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.matchHeight(_this.el.nativeElement, _this.myMatchHeight);
        }, 50);
    };
    MyMatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    };
    MyMatchHeightDirective.prototype.matchHeight = function (parent, className) {
        // match height logic here
        console.log("match", parent);
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        Array.from(children).forEach(function (x) {
            x.style.height = "initial";
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children).map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children).forEach(function (x) { return (x.style.height = maxHeight + "px"); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MyMatchHeightDirective.prototype, "myMatchHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("window:resize"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MyMatchHeightDirective.prototype, "onResize", null);
    MyMatchHeightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "[myMatchHeight]" // Attribute selector
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], MyMatchHeightDirective);
    return MyMatchHeightDirective;
}());

//# sourceMappingURL=my-match-height.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.ships = [];
        this.loading = true;
        this.address = this.navParams.data.address;
        if (this.address && this.address.length > 8) {
            this.getProfile();
        }
        else {
            this.loading = false;
        }
    }
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        io.socket.get("/api/v1/ships?address=" + encodeURI(this.address), function (data) {
            _this.loading = false;
            console.log(data);
            if (data.length > 0) {
                // data.forEach(ship => {
                //   ship["img"] = "randomColo" + Math.floor(Math.random() * 4.99) + ".png"
                // })
                _this.ships = data;
            }
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-profile",template:/*ion-inline-start:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\profile\profile.html"*/'<ion-header #head>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n<header-component></header-component>\n\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row myMatchHeight="ship-card">\n      <ion-spinner *ngIf="loading" ion-col col-12>\n      </ion-spinner>\n      <ship-card *ngFor="let ship of ships" ion-col col-12 col-xl-3 col-lg-4 col-md-6 [ship]="ship"></ship-card>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\VX\Desktop\dev\ionicgame\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=1.js.map