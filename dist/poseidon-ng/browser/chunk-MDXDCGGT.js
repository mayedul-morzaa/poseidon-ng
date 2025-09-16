import{a as _e}from"./chunk-NYU3WUW2.js";import{c as we}from"./chunk-4PPM5SC7.js";import{c as v}from"./chunk-BODZH67C.js";import{b as fe,c as ue}from"./chunk-S7VCMZIP.js";import{c as le,d as E,f as L,h as O,i as M,k as V}from"./chunk-TBYF2LDC.js";import{Ba as me,Ea as he,T as A,c as Q,e as de,q as ce,sa as pe,ta as k}from"./chunk-AY2ARFMM.js";import{i as re,k as oe,o as ae,s as se}from"./chunk-QIAVZCJE.js";import{$ as b,$a as q,Ab as g,Bb as T,Fb as S,Fc as h,Gb as s,Gc as ie,Hb as K,Ib as X,Jb as w,Kb as I,Lb as p,Ma as d,Mb as m,R as B,S as z,Sb as Y,Tb as D,Ub as U,Vb as J,W as F,Xa as j,Ya as P,aa as y,ac as W,ba as Z,bb as c,cc as ee,db as x,dc as te,lb as f,mb as R,na as C,nb as N,oc as ne,rb as o,sb as u,tb as _,ub as $,yb as G,zb as H}from"./chunk-YSO2AELB.js";var be=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var ge=["header"],ve=["footer"],xe=["content"],ke=["closeicon"],Ce=["headless"],Te=["container"],Se=["closeButton"],Ie=["*"],De=(t,a)=>({transform:t,transition:a}),Ee=t=>({value:"visible",params:t});function Le(t,a){t&1&&g(0)}function Oe(t,a){if(t&1&&c(0,Le,1,0,"ng-container",4),t&2){let e=s(2);o("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function Me(t,a){t&1&&g(0)}function Ve(t,a){if(t&1&&(u(0,"div"),U(1),_()),t&2){let e=s(3);D(e.cx("title")),d(),J(e.header)}}function Qe(t,a){t&1&&(Z(),$(0,"svg",11)),t&2&&f("data-pc-section","closeicon")}function Ae(t,a){}function Be(t,a){t&1&&c(0,Ae,0,0,"ng-template")}function ze(t,a){if(t&1&&c(0,Qe,1,1,"svg",10)(1,Be,1,0,null,4),t&2){let e=s(4);o("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),d(),o("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Fe(t,a){if(t&1){let e=T();u(0,"p-button",9),S("onClick",function(n){b(e);let r=s(3);return y(r.close(n))})("keydown.enter",function(n){b(e);let r=s(3);return y(r.close(n))}),c(1,ze,2,2,"ng-template",null,1,ne),_()}if(t&2){let e=s(3);o("ngClass",e.cx("pcCloseButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),f("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function Ze(t,a){t&1&&g(0)}function je(t,a){t&1&&g(0)}function Pe(t,a){if(t&1&&(G(0),u(1,"div",5),c(2,je,1,0,"ng-container",4),_(),H()),t&2){let e=s(3);d(),o("ngClass",e.cx("footer")),f("data-pc-section","footer"),d(),o("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function qe(t,a){if(t&1&&(u(0,"div",5),c(1,Me,1,0,"ng-container",4)(2,Ve,2,3,"div",6)(3,Fe,3,5,"p-button",7),_(),u(4,"div",5),X(5),c(6,Ze,1,0,"ng-container",4),_(),c(7,Pe,3,3,"ng-container",8)),t&2){let e=s(2);o("ngClass",e.cx("header")),f("data-pc-section","header"),d(),o("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),d(),o("ngIf",e.header),d(),o("ngIf",e.showCloseIcon&&e.closable),d(),o("ngClass",e.cx("content")),f("data-pc-section","content"),d(2),o("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),d(),o("ngIf",e.footerTemplate||e._footerTemplate)}}function Re(t,a){if(t&1){let e=T();u(0,"div",3,0),S("@panelState.start",function(n){b(e);let r=s();return y(r.onAnimationStart(n))})("@panelState.done",function(n){b(e);let r=s();return y(r.onAnimationEnd(n))})("keydown",function(n){b(e);let r=s();return y(r.onKeyDown(n))}),R(2,Oe,1,1,"ng-container")(3,qe,8,9),_()}if(t&2){let e=s();Y(e.style),D(e.cn(e.cx("root"),e.styleClass)),o("@panelState",ee(11,Ee,te(8,De,e.transformOptions,e.transitionOptions))),f("data-pc-name","sidebar")("data-pc-section","root"),d(2),N(e.headlessTemplate||e._headlessTemplate?2:3)}}var Ne=`
    ${be}

    /** For PrimeNG **/
    .p-drawer {
        position: fixed;
        display: flex;
        flex-direction: column;
    }

    .p-drawer-left {
        top: 0;
        left: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-right {
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
    }

    .p-drawer-top {
        top: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-bottom {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10rem;
    }

    .p-drawer-full {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transition: none;
        transition: none;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation 150ms forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation 150ms forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background-color: transparent;
        }
        to {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background-color: rgba(0, 0, 0, 0.4);
        }
        to {
            background-color: transparent;
        }
    }
`,$e={mask:({instance:t})=>["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":t.modal},{"p-drawer-full":t.fullScreen}],root:({instance:t})=>["p-drawer p-component",{"p-drawer-full":t.fullScreen,"p-drawer-open":t.visible},`p-drawer-${t.position}`],header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},ye=(()=>{class t extends me{name="drawer";theme=Ne;classes=$e;static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275prov=B({token:t,factory:t.\u0275fac})}return t})();var Ge=M([L({transform:"{{transform}}",opacity:0}),E("{{transition}}")]),He=M([E("{{transition}}",L({transform:"{{transform}}",opacity:0}))]),Ke=(()=>{class t extends he{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new x;onHide=new x;visibleChange=new x;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=F(ye);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container.setAttribute(this.attrSelector,""),this.autoZIndex&&v.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-open"),i=e.length,n=i==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[i-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),A(this.mask,"style",this.getMaskStyle()),A(this.mask,"style",`z-index: ${n}`),Q(this.mask,this.cx("mask")),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",r=>{this.dismissible&&this.close(r)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&fe())}getMaskStyle(){return this.maskStyle?Object.entries(this.maskStyle).map(([e,i])=>`${e}: ${i}`).join("; "):""}disableModality(){this.mask&&(de(this.mask,"p-overlay-mask-enter"),Q(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&ue(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),v.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):ce(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.which==27&&parseInt(this.container.style.zIndex)===v.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&v.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=C(t)))(n||t)}})();static \u0275cmp=j({type:t,selectors:[["p-drawer"]],contentQueries:function(i,n,r){if(i&1&&(w(r,ge,4),w(r,ve,4),w(r,xe,4),w(r,ke,4),w(r,Ce,4),w(r,pe,4)),i&2){let l;p(l=m())&&(n.headerTemplate=l.first),p(l=m())&&(n.footerTemplate=l.first),p(l=m())&&(n.contentTemplate=l.first),p(l=m())&&(n.closeIconTemplate=l.first),p(l=m())&&(n.headlessTemplate=l.first),p(l=m())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&(I(Te,5),I(Se,5)),i&2){let r;p(r=m())&&(n.containerViewChild=r.first),p(r=m())&&(n.closeButtonViewChild=r.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",h],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",h],baseZIndex:[2,"baseZIndex","baseZIndex",ie],modal:[2,"modal","modal",h],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",h],showCloseIcon:[2,"showCloseIcon","showCloseIcon",h],closeOnEscape:[2,"closeOnEscape","closeOnEscape",h],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",h]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[W([ye]),q],ngContentSelectors:Ie,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"class","style","keydown",4,"ngIf"],["role","complementary",3,"keydown"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(i,n){i&1&&(K(),c(0,Re,4,13,"div",2)),i&2&&o("ngIf",n.visible)},dependencies:[se,re,oe,ae,we,_e,k],encapsulation:2,data:{animation:[le("panelState",[O("void => visible",[V(Ge)]),O("visible => void",[V(He)])])]},changeDetection:0})}return t})(),gt=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=P({type:t});static \u0275inj=z({imports:[Ke,k,k]})}return t})();export{Ke as a,gt as b};
