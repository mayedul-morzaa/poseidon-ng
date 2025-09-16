import{a as Ce}from"./chunk-YVUMR7PY.js";import{a as nt,b as ot}from"./chunk-Z4WM6Q63.js";import"./chunk-NPOLKMKQ.js";import{a as Ue,b as Ye}from"./chunk-MDXDCGGT.js";import{a as Je,b as Xe}from"./chunk-PZRILFUM.js";import{a as Ke}from"./chunk-KVSD7CSX.js";import{a as Ge,d as $e,e as et,f as tt,k as it}from"./chunk-WLCMVJJR.js";import"./chunk-RBFF34T3.js";import"./chunk-Y6HNCAMH.js";import"./chunk-I2EBXMEO.js";import"./chunk-VXWNPPVV.js";import"./chunk-WX3Z7DV7.js";import"./chunk-DQ77PQX6.js";import"./chunk-SCBD5MOE.js";import"./chunk-36MYCZTL.js";import"./chunk-E6SW5TXF.js";import"./chunk-6SIPJ2JQ.js";import"./chunk-PSRYUGOH.js";import"./chunk-SJFGCXUJ.js";import"./chunk-LLVURM7T.js";import"./chunk-Y6YP6CQN.js";import"./chunk-F555ADSZ.js";import"./chunk-ENUBIGUT.js";import"./chunk-XAP2DVZB.js";import"./chunk-NYU3WUW2.js";import"./chunk-KBGEEEMP.js";import{a as We,b as Ze}from"./chunk-PNRBRSPH.js";import{k as He}from"./chunk-PWIRR5TW.js";import"./chunk-LX7OITZI.js";import"./chunk-GADHPUAI.js";import{a as Qe,b as Ne}from"./chunk-JYJUMKZD.js";import"./chunk-537DCJE4.js";import{c as ge,d as ye}from"./chunk-4PPM5SC7.js";import"./chunk-GGQ7LRWG.js";import{c as V}from"./chunk-BODZH67C.js";import"./chunk-SHGQNBGT.js";import{d as ve}from"./chunk-S7VCMZIP.js";import"./chunk-WAENNQN7.js";import{c as le,d as q,f as L,g as O,h as H}from"./chunk-TBYF2LDC.js";import"./chunk-HMA4JBK4.js";import{Ba as he,Ea as be,H as W,N as me,O as ue,c as ce,ka as Z,l as pe,oa as de,pa as fe,q as ze,sa as _e,ta as D,ua as Pe,x as Ae,xa as qe,y as ke}from"./chunk-AY2ARFMM.js";import{k as ne,n as oe,o as re,s as ae,w as se}from"./chunk-QIAVZCJE.js";import{$ as c,$a as te,Ab as Se,Bb as w,Bc as Me,Fb as f,Fc as A,Gb as u,Gc as ie,Hb as Be,Ia as Ve,Ib as Fe,Jb as T,La as $,Lb as S,Ma as m,Mb as k,Pb as F,Qa as je,R as X,Ra as y,S as G,Sb as x,Tb as b,Ub as h,Vb as K,W as j,Xa as R,Ya as ee,Yb as P,Zb as E,_b as I,aa as p,ac as M,bb as _,bc as C,cc as z,db as B,dc as J,ea as Le,eb as Re,lb as Y,na as U,oc as g,pa as Oe,rb as d,sb as a,tb as s,ub as v,yb as xe,zb as Te}from"./chunk-YSO2AELB.js";import"./chunk-GAL4ENT6.js";var _t=["content"],ht=["*"],bt=(i,l)=>({showTransitionParams:i,hideTransitionParams:l}),vt=(i,l)=>({value:i,params:l}),gt=i=>({closeCallback:i});function yt(i,l){}function Ct(i,l){i&1&&_(0,yt,0,0,"ng-template")}function wt(i,l){if(i&1){let e=w();a(0,"div",1),f("click",function(n){c(e);let r=u();return p(r.onOverlayClick(n))})("@animation.start",function(n){c(e);let r=u();return p(r.onAnimationStart(n))})("@animation.done",function(n){c(e);let r=u();return p(r.onAnimationEnd(n))}),a(1,"div",2),f("click",function(n){c(e);let r=u();return p(r.onContentClick(n))})("mousedown",function(n){c(e);let r=u();return p(r.onContentClick(n))}),Fe(2),_(3,Ct,1,0,null,3),s()()}if(i&2){let e=u();b(e.cn(e.cx("root"),e.styleClass)),d("ngStyle",e.style)("@animation",J(14,vt,e.overlayVisible?"open":"close",J(11,bt,e.showTransitionOptions,e.hideTransitionOptions))),Y("aria-modal",e.overlayVisible)("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),m(),b(e.cx("content")),m(2),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",z(17,gt,e.onCloseClick.bind(e)))}}var xt=`
.p-popover {
    margin-top: dt('popover.gutter');
    background: dt('popover.background');
    color: dt('popover.color');
    border: 1px solid dt('popover.border.color');
    border-radius: dt('popover.border.radius');
    box-shadow: dt('popover.shadow');
    position: absolute
}

.p-popover-content {
    padding: dt('popover.content.padding');
}

.p-popover-flipped {
    margin-top: calc(dt('popover.gutter') * -1);
    margin-bottom: dt('popover.gutter');
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(dt('popover.gutter') - 2px);
    margin-left: calc(-1 * (dt('popover.gutter') - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.background');
}

.p-popover:before {
    border-width: dt('popover.gutter');
    margin-left: calc(-1 * dt('popover.gutter'));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: dt('popover.border.color');
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: dt('popover.background');
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: dt('popover.border.color');
}

`,Tt={root:"p-popover p-component",content:"p-popover-content"},rt=(()=>{class i extends he{name="popover";theme=xt;classes=Tt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(i)))(n||i)}})();static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})(),Ee=(()=>{class i extends be{ariaLabel;ariaLabelledBy;dismissable=!0;style;styleClass;appendTo="body";autoZIndex=!0;ariaCloseLabel;baseZIndex=0;focusOnShow=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";onShow=new B;onHide=new B;container;overlayVisible=!1;render=!1;isOverlayAnimationInProgress=!1;selfClick=!1;documentClickListener;target;willHide;scrollHandler;documentResizeListener;contentTemplate;templates;_contentTemplate;destroyCallback;overlayEventListener;overlaySubscription;_componentStyle=j(rt);zone=j(Re);overlayService=j(fe);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break}})}bindDocumentClickListener(){if(se(this.platformId)&&!this.documentClickListener){let e=me()?"touchstart":"click",t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(t,e,n=>{this.dismissable&&(!this.container?.contains(n.target)&&this.target!==n.target&&!this.target.contains(n.target)&&!this.selfClick&&this.hide(),this.selfClick=!1,this.cd.markForCheck())})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null,this.selfClick=!1)}toggle(e,t){this.isOverlayAnimationInProgress||(this.overlayVisible?(this.hasTargetChanged(e,t)&&(this.destroyCallback=()=>{this.show(null,t||e.currentTarget||e.target)}),this.hide()):this.show(e,t))}show(e,t){t&&e&&e.stopPropagation(),!this.isOverlayAnimationInProgress&&(this.target=t||e.currentTarget||e.target,this.overlayVisible=!0,this.render=!0,this.cd.markForCheck())}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.selfClick=!0}onContentClick(e){let t=e.target;this.selfClick=e.offsetX<t.clientWidth&&e.offsetY<t.clientHeight}hasTargetChanged(e,t){return this.target!=null&&this.target!==(t||e.currentTarget||e.target)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):ze(this.appendTo,this.container))}restoreAppend(){this.container&&this.appendTo&&this.renderer.appendChild(this.el.nativeElement,this.container)}align(){this.autoZIndex&&V.set("overlay",this.container,this.baseZIndex+this.config.zIndex.overlay),pe(this.container,this.target,!1);let e=W(this.container),t=W(this.target),n=this.document.defaultView?.getComputedStyle(this.container).getPropertyValue("border-radius"),r=0;e.left<t.left&&(r=t.left-e.left-parseFloat(n)*2),this.container?.style.setProperty(qe("popover.arrow.left").name,`${r}px`),e.top<t.top&&(this.container.setAttribute("data-p-popover-flipped","true"),ce(this.container,"p-popover-flipped"))}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.container?.setAttribute(this.attrSelector,""),this.appendContainer(),this.align(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),this.focusOnShow&&this.focus(),this.overlayEventListener=t=>{this.container&&this.container.contains(t.target)&&(this.selfClick=!0)},this.overlaySubscription=this.overlayService.clickObservable.subscribe(this.overlayEventListener),this.onShow.emit(null)),this.isOverlayAnimationInProgress=!0}onAnimationEnd(e){switch(e.toState){case"void":this.destroyCallback&&(this.destroyCallback(),this.destroyCallback=null),this.overlaySubscription&&this.overlaySubscription.unsubscribe();break;case"close":this.autoZIndex&&V.clear(this.container),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),this.onContainerDestroy(),this.onHide.emit({}),this.render=!1;break}this.isOverlayAnimationInProgress=!1}focus(){let e=Ae(this.container,"[autofocus]");e&&this.zone.runOutsideAngular(()=>{setTimeout(()=>e.focus(),5)})}hide(){this.overlayVisible=!1,this.cd.markForCheck()}onCloseClick(e){this.hide(),e.preventDefault()}onEscapeKeydown(e){this.hide()}onWindowResize(){this.overlayVisible&&!ue()&&this.hide()}bindDocumentResizeListener(){if(se(this.platformId)&&!this.documentResizeListener){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){se(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new ve(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener())}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}onContainerDestroy(){this.cd.destroyed||(this.target=null),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&V.clear(this.container),this.cd.destroyed||(this.target=null),this.destroyCallback=null,this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.overlaySubscription&&this.overlaySubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(i)))(n||i)}})();static \u0275cmp=R({type:i,selectors:[["p-popover"]],contentQueries:function(t,n,r){if(t&1&&(T(r,_t,4),T(r,_e,4)),t&2){let o;S(o=k())&&(n.contentTemplate=o.first),S(o=k())&&(n.templates=o)}},hostBindings:function(t,n){t&1&&f("keydown.escape",function(o){return n.onEscapeKeydown(o)},$)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",dismissable:[2,"dismissable","dismissable",A],style:"style",styleClass:"styleClass",appendTo:"appendTo",autoZIndex:[2,"autoZIndex","autoZIndex",A],ariaCloseLabel:"ariaCloseLabel",baseZIndex:[2,"baseZIndex","baseZIndex",ie],focusOnShow:[2,"focusOnShow","focusOnShow",A],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide"},features:[M([rt]),te],ngContentSelectors:ht,decls:1,vars:1,consts:[["role","dialog",3,"class","ngStyle","click",4,"ngIf"],["role","dialog",3,"click","ngStyle"],[3,"click","mousedown"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){t&1&&(Be(),_(0,wt,4,19,"div",0)),t&2&&d("ngIf",n.render)},dependencies:[ae,ne,re,oe,D],encapsulation:2,data:{animation:[le("animation",[O("void",L({transform:"scaleY(0.8)",opacity:0})),O("close",L({opacity:0})),O("open",L({transform:"translateY(0)",opacity:1})),H("void => open",q("{{showTransitionParams}}")),H("open => close",q("{{hideTransitionParams}}"))])]},changeDetection:0})}return i})(),st=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ee({type:i});static \u0275inj=G({imports:[Ee,D,D]})}return i})();var lt=`
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-confirmpopup-leave-to {
        opacity: 0;
    }

    .p-confirmpopup-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-confirmpopup-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`;var Et=["content"],It=["accepticon"],Dt=["rejecticon"],Lt=["headless"],Ot=(i,l)=>({showTransitionParams:i,hideTransitionParams:l}),Vt=i=>({value:"open",params:i}),pt=i=>({$implicit:i});function jt(i,l){i&1&&Se(0)}function Rt(i,l){if(i&1&&(xe(0),_(1,jt,1,0,"ng-container",9),Te()),i&2){let e=u(2);m(),d("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)("ngTemplateOutletContext",z(2,pt,e.confirmation))}}function Bt(i,l){i&1&&Se(0)}function Ft(i,l){if(i&1&&(xe(0),_(1,Bt,1,0,"ng-container",9),Te()),i&2){let e=u(3);m(),d("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",z(2,pt,e.confirmation))}}function Mt(i,l){if(i&1&&v(0,"i"),i&2){let e=u(4);b(e.cx("icon"))}}function zt(i,l){if(i&1&&(_(0,Mt,1,2,"i",12),a(1,"span"),h(2),s()),i&2){let e=u(3);d("ngIf",e.confirmation==null?null:e.confirmation.icon),m(),b(e.cx("message")),m(),K(e.confirmation==null?null:e.confirmation.message)}}function At(i,l){if(i&1&&v(0,"i"),i&2){let e=u(5);b(e.confirmation==null?null:e.confirmation.rejectIcon)}}function qt(i,l){}function Ht(i,l){i&1&&_(0,qt,0,0,"ng-template",null,4,g)}function Wt(i,l){if(i&1&&_(0,At,1,2,"i",14)(1,Ht,2,0,null,15),i&2){let e=u(4);d("ngIf",e.confirmation==null?null:e.confirmation.rejectIcon)("ngIfElse",e.rejecticon),m(),d("ngTemplateOutlet",e.rejectIconTemplate||e._rejectIconTemplate)}}function Zt(i,l){if(i&1){let e=w();a(0,"p-button",13),f("onClick",function(){c(e);let n=u(3);return p(n.onReject())}),_(1,Wt,2,3,"ng-template",null,3,g),s()}if(i&2){let e=u(3);b(e.cx("pcRejectButton")),d("label",e.rejectButtonLabel)("styleClass",e.confirmation==null?null:e.confirmation.rejectButtonStyleClass)("size",(e.confirmation.rejectButtonProps==null?null:e.confirmation.rejectButtonProps.size)||"small")("text",(e.confirmation.rejectButtonProps==null?null:e.confirmation.rejectButtonProps.text)||!1)("buttonProps",e.getRejectButtonProps())("autofocus",e.autoFocusReject),Y("aria-label",e.rejectButtonLabel)}}function Qt(i,l){if(i&1&&v(0,"i"),i&2){let e=u(5);b(e.confirmation==null?null:e.confirmation.acceptIcon)}}function Nt(i,l){}function Ut(i,l){i&1&&_(0,Nt,0,0,"ng-template",null,5,g)}function Yt(i,l){if(i&1&&_(0,Qt,1,2,"i",14)(1,Ut,2,0,null,15),i&2){let e=u(4);d("ngIf",e.confirmation==null?null:e.confirmation.acceptIcon)("ngIfElse",e.accepticontemplate),m(),d("ngTemplateOutlet",e.acceptIconTemplate||e._acceptIconTemplate)}}function Kt(i,l){if(i&1){let e=w();a(0,"p-button",16),f("onClick",function(){c(e);let n=u(3);return p(n.onAccept())}),_(1,Yt,2,3,"ng-template",null,3,g),s()}if(i&2){let e=u(3);b(e.cx("pcAcceptButton")),d("label",e.acceptButtonLabel)("styleClass",e.confirmation==null?null:e.confirmation.acceptButtonStyleClass)("size",(e.confirmation.acceptButtonProps==null?null:e.confirmation.acceptButtonProps.size)||"small")("buttonProps",e.getAcceptButtonProps())("autofocus",e.autoFocusAccept),Y("aria-label",e.acceptButtonLabel)}}function Jt(i,l){if(i&1&&(a(0,"div",null,1),_(2,Ft,2,4,"ng-container",8)(3,zt,3,4,"ng-template",null,2,g),s(),a(5,"div"),_(6,Zt,3,9,"p-button",10)(7,Kt,3,8,"p-button",11),s()),i&2){let e=F(4),t=u(2);b(t.cx("content")),m(2),d("ngIf",t.contentTemplate||t._contentTemplate)("ngIfElse",e),m(3),b(t.cx("footer")),m(),d("ngIf",(t.confirmation==null?null:t.confirmation.rejectVisible)!==!1),m(),d("ngIf",(t.confirmation==null?null:t.confirmation.acceptVisible)!==!1)}}function Xt(i,l){if(i&1){let e=w();a(0,"div",7),f("click",function(n){c(e);let r=u();return p(r.onOverlayClick(n))})("@animation.start",function(n){c(e);let r=u();return p(r.onAnimationStart(n))})("@animation.done",function(n){c(e);let r=u();return p(r.onAnimationEnd(n))}),_(1,Rt,2,4,"ng-container",8)(2,Jt,8,8,"ng-template",null,0,g),s()}if(i&2){let e=F(3),t=u();b(t.cn(t.cx("root"),t.styleClass)),d("ngStyle",t.style)("@animation",z(9,Vt,J(6,Ot,t.showTransitionOptions,t.hideTransitionOptions))),m(),d("ngIf",t.headlessTemplate||t._headlessTemplate)("ngIfElse",e)}}var Gt={root:()=>["p-confirmpopup p-component"],content:"p-confirmpopup-content",icon:({instance:i})=>["p-confirmpopup-icon",i.confirmation?.icon],message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},ct=(()=>{class i extends he{name="confirmpopup";theme=lt;classes=Gt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=U(i)))(n||i)}})();static \u0275prov=X({token:i,factory:i.\u0275fac})}return i})();var Ie=(()=>{class i extends be{el;confirmationService;renderer;cd;overlayService;document;key;defaultFocus="accept";showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autoZIndex=!0;baseZIndex=0;style;styleClass;get visible(){return this._visible}set visible(e){this._visible=e,this.cd.markForCheck()}container;subscription;confirmation;autoFocusAccept=!1;autoFocusReject=!1;contentTemplate;acceptIconTemplate;rejectIconTemplate;headlessTemplate;_contentTemplate;_acceptIconTemplate;_rejectIconTemplate;_headlessTemplate;_visible;documentClickListener;documentResizeListener;scrollHandler;window;_componentStyle=j(ct);constructor(e,t,n,r,o,Q){super(),this.el=e,this.confirmationService=t,this.renderer=n,this.cd=r,this.overlayService=o,this.document=Q,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(N=>{if(!N){this.hide();return}N.key===this.key&&(this.confirmation=N,Object.keys(N).forEach(De=>{this[De]=N[De]}),this.confirmation.accept&&(this.confirmation.acceptEvent=new B,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new B,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"rejecticon":this._rejectIconTemplate=e.template;break;case"accepticon":this._acceptIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break}})}option(e,t){let n=this;if(n.hasOwnProperty(e))return t?n[t]:n[e]}onEscapeKeydown(e){this.confirmation&&this.confirmation.closeOnEscape&&this.onReject()}onAnimationStart(e){e.toState==="open"&&(this.container=e.element,this.renderer.appendChild(this.document.body,this.container),this.align(),this.bindListeners(),this.autoFocusAccept=this.defaultFocus===void 0||this.defaultFocus==="accept",this.autoFocusReject=this.defaultFocus==="reject")}onAnimationEnd(e){switch(e.toState){case"void":this.onContainerDestroy();break}}getAcceptButtonProps(){return this.option("acceptButtonProps")}getRejectButtonProps(){return this.option("rejectButtonProps")}align(){if(this.autoZIndex&&V.set("overlay",this.container,this.config.zIndex.overlay),!this.confirmation)return;pe(this.container,this.confirmation?.target,!1);let e=W(this.container),t=W(this.confirmation?.target),n=0;e.left<t.left&&(n=t.left-e.left),this.container.style.setProperty("--p-confirmpopup-arrow-left",`${n}px`),e.top<t.top&&ce(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}onAccept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide(),ke(this.confirmation?.target)}onReject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide(),ke(this.confirmation?.target)}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let e=me()?"touchstart":"click",t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(t,e,n=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let r=this.confirmation.target;this.container!==n.target&&!this.container?.contains(n.target)&&r!==n.target&&!r.contains(n.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.visible&&!ue()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ve(this.confirmation?.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&V.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&this.renderer.removeChild(this.document.body,this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(Pe.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(Pe.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(t){return new(t||i)(y(Oe),y(Z),y(je),y(Me),y(fe),y(Le))};static \u0275cmp=R({type:i,selectors:[["p-confirmpopup"]],contentQueries:function(t,n,r){if(t&1&&(T(r,Et,4),T(r,It,4),T(r,Dt,4),T(r,Lt,4),T(r,_e,4)),t&2){let o;S(o=k())&&(n.contentTemplate=o.first),S(o=k())&&(n.acceptIconTemplate=o.first),S(o=k())&&(n.rejectIconTemplate=o.first),S(o=k())&&(n.headlessTemplate=o.first),S(o=k())&&(n.templates=o)}},hostBindings:function(t,n){t&1&&f("keydown.escape",function(o){return n.onEscapeKeydown(o)},$)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:[2,"autoZIndex","autoZIndex",A],baseZIndex:[2,"baseZIndex","baseZIndex",ie],style:"style",styleClass:"styleClass",visible:"visible"},features:[M([ct]),te],decls:1,vars:1,consts:[["notHeadless",""],["content",""],["withoutContentTemplate",""],["icon",""],["rejecticon",""],["accepticontemplate",""],["pFocusTrap","","role","alertdialog",3,"class","ngStyle","click",4,"ngIf"],["pFocusTrap","","role","alertdialog",3,"click","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button",3,"label","class","styleClass","size","text","buttonProps","autofocus","onClick",4,"ngIf"],["type","button",3,"label","class","styleClass","size","buttonProps","autofocus","onClick",4,"ngIf"],[3,"class",4,"ngIf"],["type","button",3,"onClick","label","styleClass","size","text","buttonProps","autofocus"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["type","button",3,"onClick","label","styleClass","size","buttonProps","autofocus"]],template:function(t,n){t&1&&_(0,Xt,4,11,"div",6),t&2&&d("ngIf",n.visible)},dependencies:[ae,ne,re,oe,D,ye,ge,Ke],encapsulation:2,data:{animation:[le("animation",[O("void",L({transform:"scaleY(0.8)",opacity:0})),O("open",L({transform:"translateY(0)",opacity:1})),H("void => open",q("{{showTransitionParams}}")),H("open => void",q("{{hideTransitionParams}}"))])]},changeDetection:0})}return i})(),mt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ee({type:i});static \u0275inj=G({imports:[Ie,D,D]})}return i})();var ei=()=>({width:"30vw"}),ti=()=>({"960px":"75vw"}),ut=()=>({width:"auto"}),ii=()=>({width:"450px"}),we=()=>({marginRight:"0.25em"}),ni=()=>({width:"350px"});function oi(i,l){if(i&1){let e=w();a(0,"p-button",35),f("click",function(){c(e);let n=u();return p(n.close())}),s()}}function ri(i,l){i&1&&(a(0,"tr")(1,"th",36)(2,"span",37),h(3,"Name "),v(4,"p-sortIcon",38),s()(),a(5,"th",39),h(6,"Image"),s(),a(7,"th",40)(8,"span",37),h(9," Price "),v(10,"p-sortIcon",41),s()()())}function ai(i,l){if(i&1&&(a(0,"tr",42)(1,"td"),h(2),s(),a(3,"td"),v(4,"img",43),s(),a(5,"td"),h(6),s()()),i&2){let e=l.$implicit;d("pSelectableRow",e),m(2),K(e.name),m(2),d("src","/demo/images/product/"+e.image,Ve)("alt",e.name),m(2),K(e.price)}}function si(i,l){if(i&1){let e=w();a(0,"p-button",44),f("click",function(){c(e);let n=u();return p(n.closeConfirmation())}),s(),a(1,"p-button",45),f("click",function(){c(e);let n=u();return p(n.closeConfirmation())}),s()}}var dt=class i{constructor(l,e,t){this.productService=l;this.confirmationService=e;this.messageService=t}display=!1;products=[];visibleLeft=!1;visibleRight=!1;visibleTop=!1;visibleBottom=!1;visibleFull=!1;displayConfirmation=!1;selectedProduct;ngOnInit(){this.productService.getProductsSmall().then(l=>this.products=l)}confirm(l){this.confirmationService.confirm({key:"confirm2",target:l.target||new EventTarget,message:"Are you sure that you want to proceed?",icon:"pi pi-exclamation-triangle",rejectButtonProps:{label:"Cancel",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Save"},accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted"})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected"})}})}open(){this.display=!0}close(){this.display=!1}toggleDataTable(l,e){l.toggle(e)}onProductSelect(l,e){l.hide(),this.messageService.add({severity:"info",summary:"Product Selected",detail:e?.data.name,life:3e3})}openConfirmation(){this.displayConfirmation=!0}closeConfirmation(){this.displayConfirmation=!1}static \u0275fac=function(e){return new(e||i)(y(Ce),y(Z),y(de))};static \u0275cmp=R({type:i,selectors:[["app-overlay-demo"]],features:[M([Z,de,Ce])],decls:71,vars:42,consts:[["footer",""],["op2",""],["header",""],["body",""],["popup",""],[1,"flex","flex-col","md:flex-row","gap-8"],[1,"md:w-1/2","space-y-4"],[1,"card"],[1,"font-semibold","text-xl","mb-4"],["header","Dialog",3,"visibleChange","visible","breakpoints","modal"],[1,"leading-normal","m-0"],["label","Show",3,"click"],[1,"flex","flex-wrap","gap-2"],["type","button","label","Show",3,"click"],["id","overlay_panel"],["selectionMode","single","dataKey","id",3,"selectionChange","onRowSelect","value","selection","rows","paginator"],[1,"inline-flex","gap-4"],["pInputText","","type","text","placeholder","Username","pTooltip","Your username"],["type","button","label","Save","pTooltip","Click to proceed"],["header","Drawer",3,"visibleChange","visible"],["header","Drawer","position","right",3,"visibleChange","visible"],["header","Drawer","position","top",3,"visibleChange","visible"],["header","Drawer","position","bottom",3,"visibleChange","visible"],["header","Drawer","position","full",3,"visibleChange","visible"],["icon","pi pi-arrow-right",3,"click"],["icon","pi pi-arrow-left",3,"click"],["icon","pi pi-arrow-down",3,"click"],["icon","pi pi-arrow-up",3,"click"],["icon","pi pi-external-link",3,"click"],["key","confirm2"],["icon","pi pi-check","label","Confirm",1,"mr-2",3,"click"],["label","Delete","icon","pi pi-trash","severity","danger",3,"click"],["header","Confirmation",3,"visibleChange","visible","modal"],[1,"flex","items-center","justify-center"],[1,"pi","pi-exclamation-triangle","mr-6",2,"font-size","2rem"],["label","Save",3,"click"],["pSortableColumn","name",2,"width","33%"],[1,"flex","items-center","gap-2"],["field","name"],[2,"width","33%"],["pSortableColumn","price",2,"width","33%"],["field","price"],[3,"pSelectableRow"],[1,"w-16","shadow-sm",3,"src","alt"],["label","No","icon","pi pi-times","text","","severity","secondary",3,"click"],["label","Yes","icon","pi pi-check","severity","danger","outlined","","autofocus","",3,"click"]],template:function(e,t){if(e&1){let n=w();a(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8),h(4,"Dialog"),s(),a(5,"p-dialog",9),I("visibleChange",function(o){return c(n),E(t.display,o)||(t.display=o),p(o)}),a(6,"p",10),h(7," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),s(),_(8,oi,1,0,"ng-template",null,0,g),s(),a(10,"p-button",11),f("click",function(){return c(n),p(t.open())}),s()(),a(11,"div",7)(12,"div",8),h(13,"Popover"),s(),a(14,"div",12)(15,"p-button",13),f("click",function(o){c(n);let Q=F(17);return p(t.toggleDataTable(Q,o))}),s(),a(16,"p-popover",14,1)(18,"p-table",15),I("selectionChange",function(o){return c(n),E(t.selectedProduct,o)||(t.selectedProduct=o),p(o)}),f("onRowSelect",function(o){c(n);let Q=F(17);return p(t.onProductSelect(Q,o))}),_(19,ri,11,0,"ng-template",null,2,g)(21,ai,7,5,"ng-template",null,3,g),s()(),v(23,"p-toast"),s()(),a(24,"div",7)(25,"div",8),h(26,"Tooltip"),s(),a(27,"div",16),v(28,"input",17)(29,"p-button",18),s()()(),a(30,"div",6)(31,"div",7)(32,"div",8),h(33,"Drawer"),s(),a(34,"p-drawer",19),I("visibleChange",function(o){return c(n),E(t.visibleLeft,o)||(t.visibleLeft=o),p(o)}),a(35,"p"),h(36," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),s()(),a(37,"p-drawer",20),I("visibleChange",function(o){return c(n),E(t.visibleRight,o)||(t.visibleRight=o),p(o)}),a(38,"p"),h(39," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),s()(),a(40,"p-drawer",21),I("visibleChange",function(o){return c(n),E(t.visibleTop,o)||(t.visibleTop=o),p(o)}),a(41,"p"),h(42," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),s()(),a(43,"p-drawer",22),I("visibleChange",function(o){return c(n),E(t.visibleBottom,o)||(t.visibleBottom=o),p(o)}),a(44,"p"),h(45," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),s()(),a(46,"p-drawer",23),I("visibleChange",function(o){return c(n),E(t.visibleFull,o)||(t.visibleFull=o),p(o)}),a(47,"p"),h(48," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "),s()(),a(49,"p-button",24),f("click",function(){return c(n),p(t.visibleLeft=!0)}),s(),a(50,"p-button",25),f("click",function(){return c(n),p(t.visibleRight=!0)}),s(),a(51,"p-button",26),f("click",function(){return c(n),p(t.visibleTop=!0)}),s(),a(52,"p-button",27),f("click",function(){return c(n),p(t.visibleBottom=!0)}),s(),a(53,"p-button",28),f("click",function(){return c(n),p(t.visibleFull=!0)}),s()(),a(54,"div",7)(55,"div",8),h(56,"ConfirmPopup"),s(),v(57,"p-confirmpopup",29),a(58,"p-button",30,4),f("click",function(o){return c(n),p(t.confirm(o))}),s()(),a(60,"div",7)(61,"div",8),h(62,"ConfirmDialog"),s(),a(63,"p-button",31),f("click",function(){return c(n),p(t.openConfirmation())}),s(),a(64,"p-dialog",32),I("visibleChange",function(o){return c(n),E(t.displayConfirmation,o)||(t.displayConfirmation=o),p(o)}),a(65,"div",33),v(66,"i",34),a(67,"span"),h(68,"Are you sure you want to proceed?"),s()(),_(69,si,2,0,"ng-template",null,0,g),s()()()()}e&2&&(m(5),x(C(32,ei)),P("visible",t.display),d("breakpoints",C(33,ti))("modal",!0),m(5),x(C(34,ut)),m(6),x(C(35,ii)),m(2),d("value",t.products),P("selection",t.selectedProduct),d("rows",5)("paginator",!0),m(16),P("visible",t.visibleLeft),m(3),P("visible",t.visibleRight),m(3),P("visible",t.visibleTop),m(3),P("visible",t.visibleBottom),m(3),P("visible",t.visibleFull),m(3),x(C(36,we)),m(),x(C(37,we)),m(),x(C(38,we)),m(),x(C(39,we)),m(11),x(C(40,ut)),m(),x(C(41,ni)),P("visible",t.displayConfirmation),d("modal",!0))},dependencies:[ot,nt,Xe,Je,ye,ge,Ye,Ue,st,Ee,mt,Ie,Ze,We,He,Ne,Qe,it,Ge,$e,tt,et],encapsulation:2})};export{dt as OverlayDemo};
