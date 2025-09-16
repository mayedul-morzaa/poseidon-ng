import{a as N}from"./chunk-WAENNQN7.js";import{Ba as F,Ea as k,U as x,X as B,ia as c,ta as o}from"./chunk-AY2ARFMM.js";import{s as M}from"./chunk-QIAVZCJE.js";import{$a as r,Cb as C,Fc as I,Ma as m,Qb as S,R as p,S as u,Tb as z,Ub as D,Vb as E,W as h,Xa as s,Ya as y,ac as w,ba as f,lb as v,na as a,vb as g,wb as l,xb as b,xc as n}from"./chunk-YSO2AELB.js";var V=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var P=`
    ${V}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,_={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":B(e.value())&&String(e.value()).length===1,"p-badge-dot":x(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},j=(()=>{class e extends F{name="badge";theme=P;classes=_;static \u0275fac=(()=>{let i;return function(t){return(i||(i=a(e)))(t||e)}})();static \u0275prov=p({token:e,factory:e.\u0275fac})}return e})();var A=(()=>{class e extends k{styleClass=n();badgeSize=n();size=n();severity=n();value=n();badgeDisabled=n(!1,{transform:I});_componentStyle=h(j);static \u0275fac=(()=>{let i;return function(t){return(i||(i=a(e)))(t||e)}})();static \u0275cmp=s({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(d,t){d&2&&(z(t.cn(t.cx("root"),t.styleClass())),S("display",t.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[w([j]),r],decls:1,vars:1,template:function(d,t){d&1&&D(0),d&2&&E(t.value())},dependencies:[M,o],encapsulation:2,changeDetection:0})}return e})(),se=(()=>{class e{static \u0275fac=function(d){return new(d||e)};static \u0275mod=y({type:e});static \u0275inj=u({imports:[A,o,o]})}return e})();var T=["data-p-icon","spinner"],le=(()=>{class e extends N{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+c()+")"}static \u0275fac=(()=>{let i;return function(t){return(i||(i=a(e)))(t||e)}})();static \u0275cmp=s({type:e,selectors:[["","data-p-icon","spinner"]],features:[r],attrs:T,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(d,t){d&1&&(f(),g(0,"g"),b(1,"path",0),l(),g(2,"defs")(3,"clipPath",1),b(4,"rect",2),l()()),d&2&&(v("clip-path",t.pathId),m(3),C("id",t.pathId))},encapsulation:2})}return e})();export{A as a,se as b,le as c};
