import {
  AsyncPipe,
  NgComponentOutlet,
  NgIf,
  NgStyle
} from "./chunk-3GSPFOE7.js";
import "./chunk-KTTM3HHZ.js";
import {
  Component,
  Directive,
  Injectable,
  inject,
  input,
  model,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-PVB3O72J.js";
import {
  ReplaySubject,
  debounce,
  distinctUntilChanged,
  finalize,
  merge,
  partition,
  switchMap,
  tap,
  timer
} from "./chunk-P6U2JBMQ.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ng-http-loader/fesm2022/ng-http-loader.mjs
var _c0 = (a0) => ({
  "background-color": a0
});
function NgHttpLoaderComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NgHttpLoaderComponent_div_0_sk_cube_grid_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sk-cube-grid", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("backgroundColor", ctx_r0.backgroundColor());
  }
}
function NgHttpLoaderComponent_div_0_sk_chasing_dots_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sk-chasing-dots", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("backgroundColor", ctx_r0.backgroundColor());
  }
}
function NgHttpLoaderComponent_div_0_sk_double_bounce_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sk-double-bounce", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("backgroundColor", ctx_r0.backgroundColor());
  }
}
function NgHttpLoaderComponent_div_0_sk_rotating_plane_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sk-rotating-plane", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("backgroundColor", ctx_r0.backgroundColor());
  }
}
function NgHttpLoaderComponent_div_0_sk_spinner_pulse_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sk-spinner-pulse", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("backgroundColor", ctx_r0.backgroundColor());
  }
}
function NgHttpLoaderComponent_div_0_sk_three_bounce_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sk-three-bounce", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("backgroundColor", ctx_r0.backgroundColor());
  }
}
function NgHttpLoaderComponent_div_0_sk_wandering_cubes_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sk-wandering-cubes", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("backgroundColor", ctx_r0.backgroundColor());
  }
}
function NgHttpLoaderComponent_div_0_sk_wave_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "sk-wave", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("backgroundColor", ctx_r0.backgroundColor());
  }
}
function NgHttpLoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, NgHttpLoaderComponent_div_0_ng_container_1_Template, 1, 0, "ng-container", 2)(2, NgHttpLoaderComponent_div_0_sk_cube_grid_2_Template, 1, 1, "sk-cube-grid", 3)(3, NgHttpLoaderComponent_div_0_sk_chasing_dots_3_Template, 1, 1, "sk-chasing-dots", 3)(4, NgHttpLoaderComponent_div_0_sk_double_bounce_4_Template, 1, 1, "sk-double-bounce", 3)(5, NgHttpLoaderComponent_div_0_sk_rotating_plane_5_Template, 1, 1, "sk-rotating-plane", 3)(6, NgHttpLoaderComponent_div_0_sk_spinner_pulse_6_Template, 1, 1, "sk-spinner-pulse", 3)(7, NgHttpLoaderComponent_div_0_sk_three_bounce_7_Template, 1, 1, "sk-three-bounce", 3)(8, NgHttpLoaderComponent_div_0_sk_wandering_cubes_8_Template, 1, 1, "sk-wandering-cubes", 3)(9, NgHttpLoaderComponent_div_0_sk_wave_9_Template, 1, 1, "sk-wave", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("opacity", ctx_r0.opacity());
    ɵɵclassProp("backdrop", ctx_r0.backdrop());
    ɵɵproperty("ngStyle", ɵɵpureFunction1(14, _c0, ctx_r0.backdrop() ? ctx_r0.backdropBackgroundColor() : "transparent"));
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r0.entryComponent());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.spinner() === ctx_r0.spinkit.skCubeGrid);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.spinner() === ctx_r0.spinkit.skChasingDots);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.spinner() === ctx_r0.spinkit.skDoubleBounce);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.spinner() === ctx_r0.spinkit.skRotatingPlane);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.spinner() === ctx_r0.spinkit.skSpinnerPulse);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.spinner() === ctx_r0.spinkit.skThreeBounce);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.spinner() === ctx_r0.spinkit.skWanderingCubes);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.spinner() === ctx_r0.spinkit.skWave);
  }
}
var AbstractLoaderDirective = class _AbstractLoaderDirective {
  backgroundColor = input();
  static ɵfac = function AbstractLoaderDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractLoaderDirective)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _AbstractLoaderDirective,
    inputs: {
      backgroundColor: [1, "backgroundColor"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractLoaderDirective, [{
    type: Directive
  }], null, null);
})();
var SkChasingDotsComponent = class _SkChasingDotsComponent extends AbstractLoaderDirective {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSkChasingDotsComponent_BaseFactory;
    return function SkChasingDotsComponent_Factory(__ngFactoryType__) {
      return (ɵSkChasingDotsComponent_BaseFactory || (ɵSkChasingDotsComponent_BaseFactory = ɵɵgetInheritedFactory(_SkChasingDotsComponent)))(__ngFactoryType__ || _SkChasingDotsComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SkChasingDotsComponent,
    selectors: [["sk-chasing-dots"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 6,
    consts: [[1, "sk-chasing-dots"], [1, "sk-child", "sk-dot1"], [1, "sk-child", "sk-dot2"]],
    template: function SkChasingDotsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1)(2, "div", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("colored", !ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
      }
    },
    styles: [".sk-chasing-dots[_ngcontent-%COMP%]{top:50%;margin:auto;width:40px;height:40px;position:relative;text-align:center;animation:_ngcontent-%COMP%_sk-chasingDotsRotate 2s infinite linear}.sk-chasing-dots[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:60%;height:60%;display:inline-block;position:absolute;top:0;border-radius:100%;animation:_ngcontent-%COMP%_sk-chasingDotsBounce 2s infinite ease-in-out}.sk-chasing-dots[_ngcontent-%COMP%]   .sk-dot2[_ngcontent-%COMP%]{top:auto;bottom:0;animation-delay:-1s}@keyframes _ngcontent-%COMP%_sk-chasingDotsRotate{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_sk-chasingDotsBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkChasingDotsComponent, [{
    type: Component,
    args: [{
      selector: "sk-chasing-dots",
      standalone: true,
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-chasing-dots" [class.colored]="!backgroundColor()">
    <div class="sk-child sk-dot1" [style.background-color]='backgroundColor()'></div>
    <div class="sk-child sk-dot2" [style.background-color]='backgroundColor()'></div>
</div>
`,
      styles: [".sk-chasing-dots{top:50%;margin:auto;width:40px;height:40px;position:relative;text-align:center;animation:sk-chasingDotsRotate 2s infinite linear}.sk-chasing-dots .sk-child{width:60%;height:60%;display:inline-block;position:absolute;top:0;border-radius:100%;animation:sk-chasingDotsBounce 2s infinite ease-in-out}.sk-chasing-dots .sk-dot2{top:auto;bottom:0;animation-delay:-1s}@keyframes sk-chasingDotsRotate{to{transform:rotate(360deg)}}@keyframes sk-chasingDotsBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}\n"]
    }]
  }], null, null);
})();
var SkCubeGridComponent = class _SkCubeGridComponent extends AbstractLoaderDirective {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSkCubeGridComponent_BaseFactory;
    return function SkCubeGridComponent_Factory(__ngFactoryType__) {
      return (ɵSkCubeGridComponent_BaseFactory || (ɵSkCubeGridComponent_BaseFactory = ɵɵgetInheritedFactory(_SkCubeGridComponent)))(__ngFactoryType__ || _SkCubeGridComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SkCubeGridComponent,
    selectors: [["sk-cube-grid"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 10,
    vars: 20,
    consts: [[1, "sk-cube-grid"], [1, "sk-cube", "sk-cube1"], [1, "sk-cube", "sk-cube2"], [1, "sk-cube", "sk-cube3"], [1, "sk-cube", "sk-cube4"], [1, "sk-cube", "sk-cube5"], [1, "sk-cube", "sk-cube6"], [1, "sk-cube", "sk-cube7"], [1, "sk-cube", "sk-cube8"], [1, "sk-cube", "sk-cube9"]],
    template: function SkCubeGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("colored", !ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
      }
    },
    styles: [".sk-cube-grid[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]{width:33.33%;height:33.33%;float:left;animation:_ngcontent-%COMP%_sk-cubeGridScaleDelay 1.3s infinite ease-in-out}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube1[_ngcontent-%COMP%]{animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]{animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube3[_ngcontent-%COMP%]{animation-delay:.4s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube4[_ngcontent-%COMP%]{animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube5[_ngcontent-%COMP%]{animation-delay:.2s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube6[_ngcontent-%COMP%]{animation-delay:.3s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube7[_ngcontent-%COMP%]{animation-delay:0s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube8[_ngcontent-%COMP%]{animation-delay:.1s}.sk-cube-grid[_ngcontent-%COMP%]   .sk-cube9[_ngcontent-%COMP%]{animation-delay:.2s}@keyframes _ngcontent-%COMP%_sk-cubeGridScaleDelay{0%,70%,to{transform:scaleZ(1)}35%{transform:scale3D(0,0,1)}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkCubeGridComponent, [{
    type: Component,
    args: [{
      selector: "sk-cube-grid",
      standalone: true,
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-cube-grid" [class.colored]="!backgroundColor()">
    <div class="sk-cube sk-cube1" [style.background-color]='backgroundColor()'></div>
    <div class="sk-cube sk-cube2" [style.background-color]='backgroundColor()'></div>
    <div class="sk-cube sk-cube3" [style.background-color]='backgroundColor()'></div>
    <div class="sk-cube sk-cube4" [style.background-color]='backgroundColor()'></div>
    <div class="sk-cube sk-cube5" [style.background-color]='backgroundColor()'></div>
    <div class="sk-cube sk-cube6" [style.background-color]='backgroundColor()'></div>
    <div class="sk-cube sk-cube7" [style.background-color]='backgroundColor()'></div>
    <div class="sk-cube sk-cube8" [style.background-color]='backgroundColor()'></div>
    <div class="sk-cube sk-cube9" [style.background-color]='backgroundColor()'></div>
</div>
`,
      styles: [".sk-cube-grid{position:relative;top:50%;width:40px;height:40px;margin:auto}.sk-cube-grid .sk-cube{width:33.33%;height:33.33%;float:left;animation:sk-cubeGridScaleDelay 1.3s infinite ease-in-out}.sk-cube-grid .sk-cube1{animation-delay:.2s}.sk-cube-grid .sk-cube2{animation-delay:.3s}.sk-cube-grid .sk-cube3{animation-delay:.4s}.sk-cube-grid .sk-cube4{animation-delay:.1s}.sk-cube-grid .sk-cube5{animation-delay:.2s}.sk-cube-grid .sk-cube6{animation-delay:.3s}.sk-cube-grid .sk-cube7{animation-delay:0s}.sk-cube-grid .sk-cube8{animation-delay:.1s}.sk-cube-grid .sk-cube9{animation-delay:.2s}@keyframes sk-cubeGridScaleDelay{0%,70%,to{transform:scaleZ(1)}35%{transform:scale3D(0,0,1)}}\n"]
    }]
  }], null, null);
})();
var SkDoubleBounceComponent = class _SkDoubleBounceComponent extends AbstractLoaderDirective {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSkDoubleBounceComponent_BaseFactory;
    return function SkDoubleBounceComponent_Factory(__ngFactoryType__) {
      return (ɵSkDoubleBounceComponent_BaseFactory || (ɵSkDoubleBounceComponent_BaseFactory = ɵɵgetInheritedFactory(_SkDoubleBounceComponent)))(__ngFactoryType__ || _SkDoubleBounceComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SkDoubleBounceComponent,
    selectors: [["sk-double-bounce"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 6,
    consts: [[1, "sk-double-bounce"], [1, "sk-child", "sk-double-bounce1"], [1, "sk-child", "sk-double-bounce2"]],
    template: function SkDoubleBounceComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1)(2, "div", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("colored", !ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
      }
    },
    styles: [".sk-double-bounce[_ngcontent-%COMP%]{top:50%;width:40px;height:40px;position:relative;margin:auto}.sk-double-bounce[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;background-color:#333;opacity:.6;position:absolute;top:0;left:0;animation:_ngcontent-%COMP%_sk-doubleBounce 2s infinite ease-in-out}.sk-double-bounce[_ngcontent-%COMP%]   .sk-double-bounce2[_ngcontent-%COMP%]{animation-delay:-1s}@keyframes _ngcontent-%COMP%_sk-doubleBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkDoubleBounceComponent, [{
    type: Component,
    args: [{
      selector: "sk-double-bounce",
      standalone: true,
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-double-bounce" [class.colored]="!backgroundColor()">
    <div class="sk-child sk-double-bounce1" [style.background-color]='backgroundColor()'></div>
    <div class="sk-child sk-double-bounce2" [style.background-color]='backgroundColor()'></div>
</div>
`,
      styles: [".sk-double-bounce{top:50%;width:40px;height:40px;position:relative;margin:auto}.sk-double-bounce .sk-child{width:100%;height:100%;border-radius:50%;background-color:#333;opacity:.6;position:absolute;top:0;left:0;animation:sk-doubleBounce 2s infinite ease-in-out}.sk-double-bounce .sk-double-bounce2{animation-delay:-1s}@keyframes sk-doubleBounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}\n"]
    }]
  }], null, null);
})();
var SkRotatingPlaneComponent = class _SkRotatingPlaneComponent extends AbstractLoaderDirective {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSkRotatingPlaneComponent_BaseFactory;
    return function SkRotatingPlaneComponent_Factory(__ngFactoryType__) {
      return (ɵSkRotatingPlaneComponent_BaseFactory || (ɵSkRotatingPlaneComponent_BaseFactory = ɵɵgetInheritedFactory(_SkRotatingPlaneComponent)))(__ngFactoryType__ || _SkRotatingPlaneComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SkRotatingPlaneComponent,
    selectors: [["sk-rotating-plane"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 2,
    consts: [[1, "sk-rotating-plane", "colored-parent"]],
    template: function SkRotatingPlaneComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "div", 0);
      }
      if (rf & 2) {
        ɵɵstyleProp("background-color", ctx.backgroundColor());
      }
    },
    styles: [".sk-rotating-plane[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto;animation:_ngcontent-%COMP%_sk-rotatePlane 1.2s infinite ease-in-out}@keyframes _ngcontent-%COMP%_sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkRotatingPlaneComponent, [{
    type: Component,
    args: [{
      selector: "sk-rotating-plane",
      standalone: true,
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-rotating-plane colored-parent" [style.background-color]='backgroundColor()'></div>
`,
      styles: [".sk-rotating-plane{position:relative;top:50%;width:40px;height:40px;margin:auto;animation:sk-rotatePlane 1.2s infinite ease-in-out}@keyframes sk-rotatePlane{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0)}to{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}\n"]
    }]
  }], null, null);
})();
var SkSpinnerPulseComponent = class _SkSpinnerPulseComponent extends AbstractLoaderDirective {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSkSpinnerPulseComponent_BaseFactory;
    return function SkSpinnerPulseComponent_Factory(__ngFactoryType__) {
      return (ɵSkSpinnerPulseComponent_BaseFactory || (ɵSkSpinnerPulseComponent_BaseFactory = ɵɵgetInheritedFactory(_SkSpinnerPulseComponent)))(__ngFactoryType__ || _SkSpinnerPulseComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SkSpinnerPulseComponent,
    selectors: [["sk-spinner-pulse"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 2,
    consts: [[1, "sk-spinner", "sk-spinner-pulse", "colored-parent"]],
    template: function SkSpinnerPulseComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "div", 0);
      }
      if (rf & 2) {
        ɵɵstyleProp("background-color", ctx.backgroundColor());
      }
    },
    styles: [".sk-spinner-pulse[_ngcontent-%COMP%]{position:relative;top:50%;width:40px;height:40px;margin:auto;border-radius:100%;animation:_ngcontent-%COMP%_sk-pulseScaleOut 1s infinite ease-in-out}@keyframes _ngcontent-%COMP%_sk-pulseScaleOut{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkSpinnerPulseComponent, [{
    type: Component,
    args: [{
      selector: "sk-spinner-pulse",
      standalone: true,
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-spinner sk-spinner-pulse colored-parent" [style.background-color]='backgroundColor()'></div>
`,
      styles: [".sk-spinner-pulse{position:relative;top:50%;width:40px;height:40px;margin:auto;border-radius:100%;animation:sk-pulseScaleOut 1s infinite ease-in-out}@keyframes sk-pulseScaleOut{0%{transform:scale(0)}to{transform:scale(1);opacity:0}}\n"]
    }]
  }], null, null);
})();
var SkThreeBounceComponent = class _SkThreeBounceComponent extends AbstractLoaderDirective {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSkThreeBounceComponent_BaseFactory;
    return function SkThreeBounceComponent_Factory(__ngFactoryType__) {
      return (ɵSkThreeBounceComponent_BaseFactory || (ɵSkThreeBounceComponent_BaseFactory = ɵɵgetInheritedFactory(_SkThreeBounceComponent)))(__ngFactoryType__ || _SkThreeBounceComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SkThreeBounceComponent,
    selectors: [["sk-three-bounce"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 4,
    vars: 8,
    consts: [[1, "sk-three-bounce"], [1, "sk-child", "sk-bounce1"], [1, "sk-child", "sk-bounce2"], [1, "sk-child", "sk-bounce3"]],
    template: function SkThreeBounceComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1)(2, "div", 2)(3, "div", 3);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("colored", !ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
      }
    },
    styles: [".sk-three-bounce[_ngcontent-%COMP%]{top:50%;position:relative;margin:auto;width:80px;text-align:center}.sk-three-bounce[_ngcontent-%COMP%]   .sk-child[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:100%;display:inline-block;animation:_ngcontent-%COMP%_sk-three-bounce 1.4s ease-in-out 0s infinite both}.sk-three-bounce[_ngcontent-%COMP%]   .sk-bounce1[_ngcontent-%COMP%]{animation-delay:-.32s}.sk-three-bounce[_ngcontent-%COMP%]   .sk-bounce2[_ngcontent-%COMP%]{animation-delay:-.16s}@keyframes _ngcontent-%COMP%_sk-three-bounce{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkThreeBounceComponent, [{
    type: Component,
    args: [{
      selector: "sk-three-bounce",
      standalone: true,
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-three-bounce" [class.colored]="!backgroundColor()">
    <div class="sk-child sk-bounce1" [style.background-color]='backgroundColor()'></div>
    <div class="sk-child sk-bounce2" [style.background-color]='backgroundColor()'></div>
    <div class="sk-child sk-bounce3" [style.background-color]='backgroundColor()'></div>
</div>
`,
      styles: [".sk-three-bounce{top:50%;position:relative;margin:auto;width:80px;text-align:center}.sk-three-bounce .sk-child{width:20px;height:20px;border-radius:100%;display:inline-block;animation:sk-three-bounce 1.4s ease-in-out 0s infinite both}.sk-three-bounce .sk-bounce1{animation-delay:-.32s}.sk-three-bounce .sk-bounce2{animation-delay:-.16s}@keyframes sk-three-bounce{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}\n"]
    }]
  }], null, null);
})();
var SkWanderingCubesComponent = class _SkWanderingCubesComponent extends AbstractLoaderDirective {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSkWanderingCubesComponent_BaseFactory;
    return function SkWanderingCubesComponent_Factory(__ngFactoryType__) {
      return (ɵSkWanderingCubesComponent_BaseFactory || (ɵSkWanderingCubesComponent_BaseFactory = ɵɵgetInheritedFactory(_SkWanderingCubesComponent)))(__ngFactoryType__ || _SkWanderingCubesComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SkWanderingCubesComponent,
    selectors: [["sk-wandering-cubes"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 6,
    consts: [[1, "sk-wandering-cubes"], [1, "sk-cube", "sk-cube1"], [1, "sk-cube", "sk-cube2"]],
    template: function SkWanderingCubesComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1)(2, "div", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("colored", !ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
      }
    },
    styles: [".sk-wandering-cubes[_ngcontent-%COMP%]{top:50%;margin:auto;width:40px;height:40px;position:relative}.sk-wandering-cubes[_ngcontent-%COMP%]   .sk-cube[_ngcontent-%COMP%]{width:10px;height:10px;position:absolute;top:0;left:0;animation:_ngcontent-%COMP%_sk-wanderingCube 1.8s ease-in-out -1.8s infinite both}.sk-wandering-cubes[_ngcontent-%COMP%]   .sk-cube2[_ngcontent-%COMP%]{animation-delay:-.9s}@keyframes _ngcontent-%COMP%_sk-wanderingCube{0%{transform:rotate(0)}25%{transform:translate(30px) rotate(-90deg) scale(.5)}50%{transform:translate(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translate(30px) translateY(30px) rotate(-180deg)}75%{transform:translate(0) translateY(30px) rotate(-270deg) scale(.5)}to{transform:rotate(-360deg)}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkWanderingCubesComponent, [{
    type: Component,
    args: [{
      selector: "sk-wandering-cubes",
      standalone: true,
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->

<div class="sk-wandering-cubes" [class.colored]="!backgroundColor()">
    <div class="sk-cube sk-cube1" [style.background-color]='backgroundColor()'></div>
    <div class="sk-cube sk-cube2" [style.background-color]='backgroundColor()'></div>
</div>
`,
      styles: [".sk-wandering-cubes{top:50%;margin:auto;width:40px;height:40px;position:relative}.sk-wandering-cubes .sk-cube{width:10px;height:10px;position:absolute;top:0;left:0;animation:sk-wanderingCube 1.8s ease-in-out -1.8s infinite both}.sk-wandering-cubes .sk-cube2{animation-delay:-.9s}@keyframes sk-wanderingCube{0%{transform:rotate(0)}25%{transform:translate(30px) rotate(-90deg) scale(.5)}50%{transform:translate(30px) translateY(30px) rotate(-179deg)}50.1%{transform:translate(30px) translateY(30px) rotate(-180deg)}75%{transform:translate(0) translateY(30px) rotate(-270deg) scale(.5)}to{transform:rotate(-360deg)}}\n"]
    }]
  }], null, null);
})();
var SkWaveComponent = class _SkWaveComponent extends AbstractLoaderDirective {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSkWaveComponent_BaseFactory;
    return function SkWaveComponent_Factory(__ngFactoryType__) {
      return (ɵSkWaveComponent_BaseFactory || (ɵSkWaveComponent_BaseFactory = ɵɵgetInheritedFactory(_SkWaveComponent)))(__ngFactoryType__ || _SkWaveComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SkWaveComponent,
    selectors: [["sk-wave"]],
    features: [ɵɵInheritDefinitionFeature],
    decls: 6,
    vars: 12,
    consts: [[1, "sk-wave"], [1, "sk-rect", "sk-rect1"], [1, "sk-rect", "sk-rect2"], [1, "sk-rect", "sk-rect3"], [1, "sk-rect", "sk-rect4"], [1, "sk-rect", "sk-rect5"]],
    template: function SkWaveComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelement(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("colored", !ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
        ɵɵadvance();
        ɵɵstyleProp("background-color", ctx.backgroundColor());
      }
    },
    styles: [".sk-wave[_ngcontent-%COMP%]{position:relative;top:50%;margin:auto;width:50px;height:40px;text-align:center;font-size:10px}.sk-wave[_ngcontent-%COMP%]   .sk-rect[_ngcontent-%COMP%]{float:left;margin-right:1px;height:100%;width:6px;display:inline-block;animation:_ngcontent-%COMP%_sk-waveStretchDelay 1.2s infinite ease-in-out}.sk-wave[_ngcontent-%COMP%]   .sk-rect1[_ngcontent-%COMP%]{animation-delay:-1.2s}.sk-wave[_ngcontent-%COMP%]   .sk-rect2[_ngcontent-%COMP%]{animation-delay:-1.1s}.sk-wave[_ngcontent-%COMP%]   .sk-rect3[_ngcontent-%COMP%]{animation-delay:-1s}.sk-wave[_ngcontent-%COMP%]   .sk-rect4[_ngcontent-%COMP%]{animation-delay:-.9s}.sk-wave[_ngcontent-%COMP%]   .sk-rect5[_ngcontent-%COMP%]{animation-delay:-.8s}@keyframes _ngcontent-%COMP%_sk-waveStretchDelay{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkWaveComponent, [{
    type: Component,
    args: [{
      selector: "sk-wave",
      standalone: true,
      template: `<!--
Copyright (c) 2015 Tobias Ahlin

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
-->
<div class="sk-wave" [class.colored]="!backgroundColor()">
    <div class="sk-rect sk-rect1" [style.background-color]='backgroundColor()'></div>
    <div class="sk-rect sk-rect2" [style.background-color]='backgroundColor()'></div>
    <div class="sk-rect sk-rect3" [style.background-color]='backgroundColor()'></div>
    <div class="sk-rect sk-rect4" [style.background-color]='backgroundColor()'></div>
    <div class="sk-rect sk-rect5" [style.background-color]='backgroundColor()'></div>
</div>
`,
      styles: [".sk-wave{position:relative;top:50%;margin:auto;width:50px;height:40px;text-align:center;font-size:10px}.sk-wave .sk-rect{float:left;margin-right:1px;height:100%;width:6px;display:inline-block;animation:sk-waveStretchDelay 1.2s infinite ease-in-out}.sk-wave .sk-rect1{animation-delay:-1.2s}.sk-wave .sk-rect2{animation-delay:-1.1s}.sk-wave .sk-rect3{animation-delay:-1s}.sk-wave .sk-rect4{animation-delay:-.9s}.sk-wave .sk-rect5{animation-delay:-.8s}@keyframes sk-waveStretchDelay{0%,40%,to{transform:scaleY(.4)}20%{transform:scaleY(1)}}\n"]
    }]
  }], null, null);
})();
var Spinkit = {
  skChasingDots: "sk-chasing-dots",
  skCubeGrid: "sk-cube-grid",
  skDoubleBounce: "sk-double-bounce",
  skRotatingPlane: "sk-rotationg-plane",
  skSpinnerPulse: "sk-spinner-pulse",
  skThreeBounce: "sk-three-bounce",
  skWanderingCubes: "sk-wandering-cubes",
  skWave: "sk-wave"
};
var SPINKIT_COMPONENTS = [SkCubeGridComponent, SkChasingDotsComponent, SkDoubleBounceComponent, SkRotatingPlaneComponent, SkSpinnerPulseComponent, SkThreeBounceComponent, SkWanderingCubesComponent, SkWaveComponent];
var PendingRequestsInterceptorConfigurer = class _PendingRequestsInterceptorConfigurer {
  _pendingRequests = 0;
  _pendingRequestsStatus$ = new ReplaySubject(1);
  _filteredUrlPatterns = [];
  _filteredMethods = [];
  _filteredHeaders = [];
  _forceByPass = false;
  get pendingRequestsStatus$() {
    return this._pendingRequestsStatus$.asObservable();
  }
  get pendingRequestsStatusSubject$() {
    return this._pendingRequestsStatus$;
  }
  get pendingRequests() {
    return this._pendingRequests;
  }
  set pendingRequests(pendingRequests) {
    this._pendingRequests = pendingRequests;
  }
  get filteredUrlPatterns() {
    return this._filteredUrlPatterns;
  }
  set filteredMethods(httpMethods) {
    this._filteredMethods = httpMethods;
  }
  set filteredHeaders(value) {
    this._filteredHeaders = value;
  }
  set forceByPass(value) {
    this._forceByPass = value;
  }
  shouldBypassUrl(url) {
    return this._filteredUrlPatterns.some((e) => {
      return e.test(url);
    });
  }
  shouldBypassMethod(req) {
    return this._filteredMethods.some((e) => {
      return e.toUpperCase() === req.method.toUpperCase();
    });
  }
  shouldBypassHeader(req) {
    return this._filteredHeaders.some((e) => {
      return req.headers.has(e);
    });
  }
  shouldBypass(req) {
    return this._forceByPass || this.shouldBypassUrl(req.urlWithParams) || this.shouldBypassMethod(req) || this.shouldBypassHeader(req);
  }
  static ɵfac = function PendingRequestsInterceptorConfigurer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PendingRequestsInterceptorConfigurer)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PendingRequestsInterceptorConfigurer,
    factory: _PendingRequestsInterceptorConfigurer.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingRequestsInterceptorConfigurer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SpinnerVisibilityService = class _SpinnerVisibilityService {
  pendingRequestsInterceptorConfigurer;
  _visibility$ = new ReplaySubject(1);
  constructor(pendingRequestsInterceptorConfigurer) {
    this.pendingRequestsInterceptorConfigurer = pendingRequestsInterceptorConfigurer;
  }
  get visibility$() {
    return this._visibility$.asObservable();
  }
  show() {
    this.pendingRequestsInterceptorConfigurer.forceByPass = true;
    this._visibility$.next(true);
  }
  hide() {
    this._visibility$.next(false);
    this.pendingRequestsInterceptorConfigurer.forceByPass = false;
  }
  static ɵfac = function SpinnerVisibilityService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SpinnerVisibilityService)(ɵɵinject(PendingRequestsInterceptorConfigurer));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _SpinnerVisibilityService,
    factory: _SpinnerVisibilityService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpinnerVisibilityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PendingRequestsInterceptorConfigurer
  }], null);
})();
var NgHttpLoaderComponent = class _NgHttpLoaderComponent {
  pendingRequestsInterceptorConfigurer;
  spinnerVisibility;
  spinkit = Spinkit;
  isVisible$;
  visibleUntil = Date.now();
  backdrop = input(true);
  backgroundColor = input();
  debounceDelay = input(0);
  entryComponent = input(null);
  extraDuration = input(0);
  filteredHeaders = input([]);
  filteredMethods = input([]);
  filteredUrlPatterns = input([]);
  minDuration = input(0);
  opacity = input(".7");
  backdropBackgroundColor = input("#f1f1f1");
  spinner = model(Spinkit.skWave);
  constructor(pendingRequestsInterceptorConfigurer, spinnerVisibility) {
    this.pendingRequestsInterceptorConfigurer = pendingRequestsInterceptorConfigurer;
    this.spinnerVisibility = spinnerVisibility;
  }
  ngOnInit() {
    this.initIsvisibleObservable();
    this.nullifySpinnerIfEntryComponentIsDefined();
    this.initFilters();
  }
  initIsvisibleObservable() {
    const [showSpinner$, hideSpinner$] = partition(this.pendingRequestsInterceptorConfigurer.pendingRequestsStatus$, (h) => h);
    this.isVisible$ = merge(this.pendingRequestsInterceptorConfigurer.pendingRequestsStatus$.pipe(switchMap(() => showSpinner$.pipe(debounce(() => timer(this.debounceDelay()))))), showSpinner$.pipe(switchMap(() => hideSpinner$.pipe(debounce(() => this.getVisibilityTimer$())))), this.spinnerVisibility.visibility$).pipe(distinctUntilChanged(), tap((h) => this.updateExpirationDelay(h)));
  }
  nullifySpinnerIfEntryComponentIsDefined() {
    if (this.entryComponent()) {
      this.spinner.update(() => null);
    }
  }
  initFilters() {
    this.initFilteredUrlPatterns();
    this.initFilteredMethods();
    this.initFilteredHeaders();
  }
  initFilteredUrlPatterns() {
    if (!!this.filteredUrlPatterns().length) {
      this.filteredUrlPatterns().forEach((e) => this.pendingRequestsInterceptorConfigurer.filteredUrlPatterns.push(new RegExp(e)));
    }
  }
  initFilteredMethods() {
    this.pendingRequestsInterceptorConfigurer.filteredMethods = this.filteredMethods();
  }
  initFilteredHeaders() {
    this.pendingRequestsInterceptorConfigurer.filteredHeaders = this.filteredHeaders();
  }
  updateExpirationDelay(showSpinner) {
    if (showSpinner) {
      this.visibleUntil = Date.now() + this.minDuration();
    }
  }
  getVisibilityTimer$() {
    return timer(Math.max(this.extraDuration(), this.visibleUntil - Date.now()));
  }
  static ɵfac = function NgHttpLoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgHttpLoaderComponent)(ɵɵdirectiveInject(PendingRequestsInterceptorConfigurer), ɵɵdirectiveInject(SpinnerVisibilityService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NgHttpLoaderComponent,
    selectors: [["ng-http-loader"]],
    inputs: {
      backdrop: [1, "backdrop"],
      backgroundColor: [1, "backgroundColor"],
      debounceDelay: [1, "debounceDelay"],
      entryComponent: [1, "entryComponent"],
      extraDuration: [1, "extraDuration"],
      filteredHeaders: [1, "filteredHeaders"],
      filteredMethods: [1, "filteredMethods"],
      filteredUrlPatterns: [1, "filteredUrlPatterns"],
      minDuration: [1, "minDuration"],
      opacity: [1, "opacity"],
      backdropBackgroundColor: [1, "backdropBackgroundColor"],
      spinner: [1, "spinner"]
    },
    outputs: {
      spinner: "spinnerChange"
    },
    decls: 2,
    vars: 3,
    consts: [["id", "spinner", 3, "backdrop", "opacity", "ngStyle", 4, "ngIf"], ["id", "spinner", 3, "ngStyle"], [4, "ngComponentOutlet"], [3, "backgroundColor", 4, "ngIf"], [3, "backgroundColor"]],
    template: function NgHttpLoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, NgHttpLoaderComponent_div_0_Template, 10, 16, "div", 0);
        ɵɵpipe(1, "async");
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.isVisible$));
      }
    },
    dependencies: [SkCubeGridComponent, SkChasingDotsComponent, SkDoubleBounceComponent, SkRotatingPlaneComponent, SkSpinnerPulseComponent, SkThreeBounceComponent, SkWanderingCubesComponent, SkWaveComponent, NgStyle, NgComponentOutlet, NgIf, AsyncPipe],
    styles: ["#spinner[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:9999}#spinner.backdrop[_ngcontent-%COMP%]{top:0;left:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;transform:none}  .colored-parent,   .colored>div{background-color:#333}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgHttpLoaderComponent, [{
    type: Component,
    args: [{
      selector: "ng-http-loader",
      standalone: true,
      imports: [SPINKIT_COMPONENTS, NgStyle, NgComponentOutlet, NgIf, AsyncPipe],
      template: `<div id="spinner"
     *ngIf="isVisible$ | async"
     [class.backdrop]="backdrop()"
     [style.opacity]="opacity()"
     [ngStyle]="{'background-color': backdrop() ? backdropBackgroundColor() : 'transparent'}">

    <ng-container *ngComponentOutlet="entryComponent()"></ng-container>

    <sk-cube-grid
        *ngIf="spinner() === spinkit.skCubeGrid"
        [backgroundColor]="backgroundColor()">
    </sk-cube-grid>

    <sk-chasing-dots
        *ngIf="spinner() === spinkit.skChasingDots"
        [backgroundColor]="backgroundColor()">
    </sk-chasing-dots>

    <sk-double-bounce
        *ngIf="spinner() === spinkit.skDoubleBounce"
        [backgroundColor]="backgroundColor()">
    </sk-double-bounce>

    <sk-rotating-plane
        *ngIf="spinner() === spinkit.skRotatingPlane"
        [backgroundColor]="backgroundColor()">
    </sk-rotating-plane>

    <sk-spinner-pulse
        *ngIf="spinner() === spinkit.skSpinnerPulse"
        [backgroundColor]="backgroundColor()">
    </sk-spinner-pulse>

    <sk-three-bounce
        *ngIf="spinner() === spinkit.skThreeBounce"
        [backgroundColor]="backgroundColor()">
    </sk-three-bounce>

    <sk-wandering-cubes
        *ngIf="spinner() === spinkit.skWanderingCubes"
        [backgroundColor]="backgroundColor()">
    </sk-wandering-cubes>

    <sk-wave
        *ngIf="spinner() === spinkit.skWave"
        [backgroundColor]="backgroundColor()">
    </sk-wave>

</div>

`,
      styles: ["#spinner{top:50%;left:50%;transform:translate(-50%,-50%);position:fixed;z-index:9999}#spinner.backdrop{top:0;left:0;height:100%;width:100%;display:flex;align-items:center;justify-content:center;transform:none}::ng-deep .colored-parent,::ng-deep .colored>div{background-color:#333}\n"]
    }]
  }], () => [{
    type: PendingRequestsInterceptorConfigurer
  }, {
    type: SpinnerVisibilityService
  }], null);
})();
function pendingRequestsInterceptor$(req, next) {
  const pendingRequestsInterceptorConfigurer = inject(PendingRequestsInterceptorConfigurer);
  const shouldBypass = pendingRequestsInterceptorConfigurer.shouldBypass(req);
  if (!shouldBypass) {
    pendingRequestsInterceptorConfigurer.pendingRequests++;
    if (1 === pendingRequestsInterceptorConfigurer.pendingRequests) {
      pendingRequestsInterceptorConfigurer.pendingRequestsStatusSubject$.next(true);
    }
  }
  return next(req).pipe(finalize(() => {
    if (!shouldBypass) {
      pendingRequestsInterceptorConfigurer.pendingRequests--;
      if (0 === pendingRequestsInterceptorConfigurer.pendingRequests) {
        pendingRequestsInterceptorConfigurer.pendingRequestsStatusSubject$.next(false);
      }
    }
  }));
}
export {
  AbstractLoaderDirective,
  NgHttpLoaderComponent,
  PendingRequestsInterceptorConfigurer,
  SPINKIT_COMPONENTS,
  SkChasingDotsComponent,
  SkCubeGridComponent,
  SkDoubleBounceComponent,
  SkRotatingPlaneComponent,
  SkSpinnerPulseComponent,
  SkThreeBounceComponent,
  SkWanderingCubesComponent,
  SkWaveComponent,
  Spinkit,
  SpinnerVisibilityService,
  pendingRequestsInterceptor$
};
//# sourceMappingURL=ng-http-loader.js.map
