import{a as Te,b as ze}from"./chunk-VQ5W3CEJ.js";import"./chunk-ZU7XP57U.js";import"./chunk-MZQI72M5.js";import{a as Pe,b as Ne}from"./chunk-6UG45X2K.js";import"./chunk-NPOLKMKQ.js";import{a as Ce,b as Se}from"./chunk-RE4LPTQU.js";import"./chunk-SCBD5MOE.js";import{f as Ee,g as Me}from"./chunk-Y6YP6CQN.js";import"./chunk-F555ADSZ.js";import{a as _e}from"./chunk-ENUBIGUT.js";import"./chunk-XAP2DVZB.js";import"./chunk-NYU3WUW2.js";import"./chunk-KBGEEEMP.js";import{a as we,b as ge}from"./chunk-PNRBRSPH.js";import{a as ce,b as qe,d as pe,g as ue,k as be}from"./chunk-PWIRR5TW.js";import"./chunk-Q25JNIRK.js";import"./chunk-LX7OITZI.js";import"./chunk-JYJUMKZD.js";import"./chunk-537DCJE4.js";import{a as ve,b as xe,d as ye}from"./chunk-4PPM5SC7.js";import"./chunk-GGQ7LRWG.js";import"./chunk-BODZH67C.js";import"./chunk-SHGQNBGT.js";import"./chunk-S7VCMZIP.js";import{b as ke,c as he}from"./chunk-WAENNQN7.js";import"./chunk-TBYF2LDC.js";import{b as me,c as fe}from"./chunk-HMA4JBK4.js";import{Ba as de,qa as ae,sa as se,ta as Q,x as V}from"./chunk-AY2ARFMM.js";import{j as le,k as N,n as oe,o as ie,s as I,x as re}from"./chunk-QIAVZCJE.js";import{$ as q,$a as G,Ab as Y,Bb as x,Fb as h,Gb as m,Hb as J,Ia as H,Ib as X,Jb as P,Kb as Z,Lb as y,Ma as d,Mb as _,Pb as $,Q as U,R as j,S as D,Sb as C,Tb as v,Ub as c,Vb as ee,W,Xa as T,Ya as A,Yb as w,Zb as g,_b as k,aa as p,ac as ne,bb as f,bc as S,db as z,fb as K,na as L,oc as te,rb as u,sb as l,tb as r,ub as b}from"./chunk-YSO2AELB.js";import{a as R}from"./chunk-GAL4ENT6.js";var Ie=`
    /*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
    .ql-container {
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 13px;
        height: 100%;
        margin: 0;
        position: relative;
    }
    .ql-container.ql-disabled .ql-tooltip {
        visibility: hidden;
    }
    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
        pointer-events: none;
    }
    .ql-clipboard {
        inset-inline-start: -100000px;
        height: 1px;
        overflow-y: hidden;
        position: absolute;
        top: 50%;
    }
    .ql-clipboard p {
        margin: 0;
        padding: 0;
    }
    .ql-editor {
        box-sizing: border-box;
        line-height: 1.42;
        height: 100%;
        outline: none;
        overflow-y: auto;
        padding: 12px 15px;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .ql-editor > * {
        cursor: text;
    }
    .ql-editor p,
    .ql-editor ol,
    .ql-editor ul,
    .ql-editor pre,
    .ql-editor blockquote,
    .ql-editor h1,
    .ql-editor h2,
    .ql-editor h3,
    .ql-editor h4,
    .ql-editor h5,
    .ql-editor h6 {
        margin: 0;
        padding: 0;
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol,
    .ql-editor ul {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol > li,
    .ql-editor ul > li {
        list-style-type: none;
    }
    .ql-editor ul > li::before {
        content: '\\2022';
    }
    .ql-editor ul[data-checked='true'],
    .ql-editor ul[data-checked='false'] {
        pointer-events: none;
    }
    .ql-editor ul[data-checked='true'] > li *,
    .ql-editor ul[data-checked='false'] > li * {
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before,
    .ql-editor ul[data-checked='false'] > li::before {
        color: #777;
        cursor: pointer;
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before {
        content: '\\2611';
    }
    .ql-editor ul[data-checked='false'] > li::before {
        content: '\\2610';
    }
    .ql-editor li::before {
        display: inline-block;
        white-space: nowrap;
        width: 1.2rem;
    }
    .ql-editor li:not(.ql-direction-rtl)::before {
        margin-inline-start: -1.5rem;
        margin-inline-end: 0.3rem;
        text-align: right;
    }
    .ql-editor li.ql-direction-rtl::before {
        margin-inline-start: 0.3rem;
        margin-inline-end: -1.5rem;
    }
    .ql-editor ol li:not(.ql-direction-rtl),
    .ql-editor ul li:not(.ql-direction-rtl) {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol li.ql-direction-rtl,
    .ql-editor ul li.ql-direction-rtl {
        padding-inline-end: 1.5rem;
    }
    .ql-editor ol li {
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        counter-increment: list-0;
    }
    .ql-editor ol li:before {
        content: counter(list-0, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-increment: list-1;
    }
    .ql-editor ol li.ql-indent-1:before {
        content: counter(list-1, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-2 {
        counter-increment: list-2;
    }
    .ql-editor ol li.ql-indent-2:before {
        content: counter(list-2, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-2 {
        counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-3 {
        counter-increment: list-3;
    }
    .ql-editor ol li.ql-indent-3:before {
        content: counter(list-3, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-3 {
        counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-4 {
        counter-increment: list-4;
    }
    .ql-editor ol li.ql-indent-4:before {
        content: counter(list-4, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-4 {
        counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-5 {
        counter-increment: list-5;
    }
    .ql-editor ol li.ql-indent-5:before {
        content: counter(list-5, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-5 {
        counter-reset: list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-6 {
        counter-increment: list-6;
    }
    .ql-editor ol li.ql-indent-6:before {
        content: counter(list-6, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-6 {
        counter-reset: list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-7 {
        counter-increment: list-7;
    }
    .ql-editor ol li.ql-indent-7:before {
        content: counter(list-7, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-7 {
        counter-reset: list-8 list-9;
    }
    .ql-editor ol li.ql-indent-8 {
        counter-increment: list-8;
    }
    .ql-editor ol li.ql-indent-8:before {
        content: counter(list-8, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-8 {
        counter-reset: list-9;
    }
    .ql-editor ol li.ql-indent-9 {
        counter-increment: list-9;
    }
    .ql-editor ol li.ql-indent-9:before {
        content: counter(list-9, decimal) '. ';
    }
    .ql-editor .ql-video {
        display: block;
        max-width: 100%;
    }
    .ql-editor .ql-video.ql-align-center {
        margin: 0 auto;
    }
    .ql-editor .ql-video.ql-align-right {
        margin: 0 0 0 auto;
    }
    .ql-editor .ql-bg-black {
        background: #000;
    }
    .ql-editor .ql-bg-red {
        background: #e60000;
    }
    .ql-editor .ql-bg-orange {
        background: #f90;
    }
    .ql-editor .ql-bg-yellow {
        background: #ff0;
    }
    .ql-editor .ql-bg-green {
        background: #008a00;
    }
    .ql-editor .ql-bg-blue {
        background: #06c;
    }
    .ql-editor .ql-bg-purple {
        background: #93f;
    }
    .ql-editor .ql-color-white {
        color: #fff;
    }
    .ql-editor .ql-color-red {
        color: #e60000;
    }
    .ql-editor .ql-color-orange {
        color: #f90;
    }
    .ql-editor .ql-color-yellow {
        color: #ff0;
    }
    .ql-editor .ql-color-green {
        color: #008a00;
    }
    .ql-editor .ql-color-blue {
        color: #06c;
    }
    .ql-editor .ql-color-purple {
        color: #93f;
    }
    .ql-editor .ql-font-serif {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-editor .ql-font-monospace {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-editor .ql-size-small {
        font-size: 0.75rem;
    }
    .ql-editor .ql-size-large {
        font-size: 1.5rem;
    }
    .ql-editor .ql-size-huge {
        font-size: 2.5rem;
    }
    .ql-editor .ql-direction-rtl {
        direction: rtl;
        text-align: inherit;
    }
    .ql-editor .ql-align-center {
        text-align: center;
    }
    .ql-editor .ql-align-justify {
        text-align: justify;
    }
    .ql-editor .ql-align-right {
        text-align: right;
    }
    .ql-editor.ql-blank::before {
        color: dt('form.field.placeholder.color');
        content: attr(data-placeholder);
        font-style: italic;
        inset-inline-start: 15px;
        pointer-events: none;
        position: absolute;
        inset-inline-end: 15px;
    }
    .ql-snow.ql-toolbar:after,
    .ql-snow .ql-toolbar:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
        background: none;
        border: none;
        cursor: pointer;
        display: inline-block;
        float: left;
        height: 24px;
        padding-block: 3px;
        padding-inline: 5px;
        width: 28px;
    }
    .ql-snow.ql-toolbar button svg,
    .ql-snow .ql-toolbar button svg {
        float: left;
        height: 100%;
    }
    .ql-snow.ql-toolbar button:active:hover,
    .ql-snow .ql-toolbar button:active:hover {
        outline: none;
    }
    .ql-snow.ql-toolbar input.ql-image[type='file'],
    .ql-snow .ql-toolbar input.ql-image[type='file'] {
        display: none;
    }
    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
        color: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
        fill: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
        stroke: #06c;
    }
    @media (pointer: coarse) {
        .ql-snow.ql-toolbar button:hover:not(.ql-active),
        .ql-snow .ql-toolbar button:hover:not(.ql-active) {
            color: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
            fill: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
            stroke: #444;
        }
    }
    .ql-snow {
        box-sizing: border-box;
    }
    .ql-snow * {
        box-sizing: border-box;
    }
    .ql-snow .ql-hidden {
        display: none;
    }
    .ql-snow .ql-out-bottom,
    .ql-snow .ql-out-top {
        visibility: hidden;
    }
    .ql-snow .ql-tooltip {
        position: absolute;
        transform: translateY(10px);
    }
    .ql-snow .ql-tooltip a {
        cursor: pointer;
        text-decoration: none;
    }
    .ql-snow .ql-tooltip.ql-flip {
        transform: translateY(-10px);
    }
    .ql-snow .ql-formats {
        display: inline-block;
        vertical-align: middle;
    }
    .ql-snow .ql-formats:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow .ql-stroke {
        fill: none;
        stroke: #444;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .ql-snow .ql-stroke-miter {
        fill: none;
        stroke: #444;
        stroke-miterlimit: 10;
        stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow .ql-empty {
        fill: none;
    }
    .ql-snow .ql-even {
        fill-rule: evenodd;
    }
    .ql-snow .ql-thin,
    .ql-snow .ql-stroke.ql-thin {
        stroke-width: 1;
    }
    .ql-snow .ql-transparent {
        opacity: 0.4;
    }
    .ql-snow .ql-direction svg:last-child {
        display: none;
    }
    .ql-snow .ql-direction.ql-active svg:last-child {
        display: inline;
    }
    .ql-snow .ql-direction.ql-active svg:first-child {
        display: none;
    }
    .ql-snow .ql-editor h1 {
        font-size: 2rem;
    }
    .ql-snow .ql-editor h2 {
        font-size: 1.5rem;
    }
    .ql-snow .ql-editor h3 {
        font-size: 1.17rem;
    }
    .ql-snow .ql-editor h4 {
        font-size: 1rem;
    }
    .ql-snow .ql-editor h5 {
        font-size: 0.83rem;
    }
    .ql-snow .ql-editor h6 {
        font-size: 0.67rem;
    }
    .ql-snow .ql-editor a {
        text-decoration: underline;
    }
    .ql-snow .ql-editor blockquote {
        border-inline-start: 4px solid #ccc;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding-inline-start: 16px;
    }
    .ql-snow .ql-editor code,
    .ql-snow .ql-editor pre {
        background: #f0f0f0;
        border-radius: 3px;
    }
    .ql-snow .ql-editor pre {
        white-space: pre-wrap;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding: 5px 10px;
    }
    .ql-snow .ql-editor code {
        font-size: 85%;
        padding: 2px 4px;
    }
    .ql-snow .ql-editor pre.ql-syntax {
        background: #23241f;
        color: #f8f8f2;
        overflow: visible;
    }
    .ql-snow .ql-editor img {
        max-width: 100%;
    }
    .ql-snow .ql-picker {
        color: #444;
        display: inline-block;
        float: left;
        inset-inline-start: 0;
        font-size: 14px;
        font-weight: 500;
        height: 24px;
        position: relative;
        vertical-align: middle;
    }
    .ql-snow .ql-picker-label {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        padding-inline-start: 8px;
        padding-inline-end: 2px;
        position: relative;
        width: 100%;
    }
    .ql-snow .ql-picker-label::before {
        display: inline-block;
        line-height: 22px;
    }
    .ql-snow .ql-picker-options {
        background: #fff;
        display: none;
        min-width: 100%;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
    }
    .ql-snow .ql-picker-options .ql-picker-item {
        cursor: pointer;
        display: block;
        padding-block-end: 5px;
        padding-block-start: 5px;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: #ccc;
        z-index: 2;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-options {
        display: block;
        margin-block-start: -1px;
        top: 100%;
        z-index: 1;
    }
    .ql-snow .ql-color-picker,
    .ql-snow .ql-icon-picker {
        width: 28px;
    }
    .ql-snow .ql-color-picker .ql-picker-label,
    .ql-snow .ql-icon-picker .ql-picker-label {
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-label svg,
    .ql-snow .ql-icon-picker .ql-picker-label svg {
        inset-inline-end: 4px;
    }
    .ql-snow .ql-icon-picker .ql-picker-options {
        padding: 4px 0;
    }
    .ql-snow .ql-icon-picker .ql-picker-item {
        height: 24px;
        width: 24px;
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-options {
        padding: 3px 5px;
        width: 152px;
    }
    .ql-snow .ql-color-picker .ql-picker-item {
        border: 1px solid transparent;
        float: left;
        height: 16px;
        margin: 2px;
        padding: 0;
        width: 16px;
    }
    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
        position: absolute;
        margin-block-start: -9px;
        inset-inline-end: 0;
        top: 50%;
        width: 18px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
        content: attr(data-label);
    }
    .ql-snow .ql-picker.ql-header {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        content: 'Heading 1';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        content: 'Heading 2';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        content: 'Heading 3';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        content: 'Heading 4';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        content: 'Heading 5';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        content: 'Heading 6';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        font-size: 2rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        font-size: 1.5rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        font-size: 1.17rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        font-size: 1rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        font-size: 0.83rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        font-size: 0.67rem;
    }
    .ql-snow .ql-picker.ql-font {
        width: 108px;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
        content: 'Sans Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        content: 'Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        content: 'Monospace';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-snow .ql-picker.ql-size {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        content: 'Small';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        content: 'Large';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        content: 'Huge';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        font-size: 10px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        font-size: 18px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        font-size: 32px;
    }
    .ql-snow .ql-color-picker.ql-background .ql-picker-item {
        background: #fff;
    }
    .ql-snow .ql-color-picker.ql-color .ql-picker-item {
        background: #000;
    }
    .ql-toolbar.ql-snow {
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        padding: 8px;
    }
    .ql-toolbar.ql-snow .ql-formats {
        margin-inline-end: 15px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
        border: 1px solid transparent;
    }
    .ql-toolbar.ql-snow .ql-picker-options {
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
        border-color: #000;
    }
    .ql-toolbar.ql-snow + .ql-container.ql-snow {
        border-block-start: 0;
    }
    .ql-snow .ql-tooltip {
        background: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ddd;
        color: #444;
        padding: 5px 12px;
        white-space: nowrap;
    }
    .ql-snow .ql-tooltip::before {
        content: 'Visit URL:';
        line-height: 26px;
        margin-inline-end: 8px;
    }
    .ql-snow .ql-tooltip input[type='text'] {
        display: none;
        border: 1px solid #ccc;
        font-size: 13px;
        height: 26px;
        margin: 0;
        padding: 3px 5px;
        width: 170px;
    }
    .ql-snow .ql-tooltip a.ql-preview {
        display: inline-block;
        max-width: 200px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
    }
    .ql-snow .ql-tooltip a.ql-action::after {
        border-inline-end: 1px solid #ccc;
        content: 'Edit';
        margin-inline-start: 16px;
        padding-inline-end: 8px;
    }
    .ql-snow .ql-tooltip a.ql-remove::before {
        content: 'Remove';
        margin-inline-start: 8px;
    }
    .ql-snow .ql-tooltip a {
        line-height: 26px;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-preview,
    .ql-snow .ql-tooltip.ql-editing a.ql-remove {
        display: none;
    }
    .ql-snow .ql-tooltip.ql-editing input[type='text'] {
        display: inline-block;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
        border-inline-end: 0;
        content: 'Save';
        padding-inline-end: 0;
    }
    .ql-snow .ql-tooltip[data-mode='link']::before {
        content: 'Enter link:';
    }
    .ql-snow .ql-tooltip[data-mode='formula']::before {
        content: 'Enter formula:';
    }
    .ql-snow .ql-tooltip[data-mode='video']::before {
        content: 'Enter video:';
    }
    .ql-snow a {
        color: #06c;
    }
    .ql-container.ql-snow {
        border: 1px solid #ccc;
    }

    .p-editor {
        display: block;
    }

    .p-editor .p-editor-toolbar {
        background: dt('editor.toolbar.background');
        border-start-end-radius: dt('editor.toolbar.border.radius');
        border-start-start-radius: dt('editor.toolbar.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow {
        border: 1px solid dt('editor.toolbar.border.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-stroke {
        stroke: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-fill {
        fill: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
        border: 0 none;
        color: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        background: dt('editor.overlay.background');
        border: 1px solid dt('editor.overlay.border.color');
        box-shadow: dt('editor.overlay.shadow');
        border-radius: dt('editor.overlay.border.radius');
        padding: dt('editor.overlay.padding');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
        color: dt('editor.overlay.option.color');
        border-radius: dt('editor.overlay.option.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
        background: dt('editor.overlay.option.focus.background');
        color: dt('editor.overlay.option.focus.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-color-picker, .ql-icon-picker) .ql-picker-item {
        padding: dt('editor.overlay.option.padding');
    }

    .p-editor .p-editor-content {
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .p-editor-content.ql-snow {
        border: 1px solid dt('editor.content.border.color');
    }

    .p-editor .p-editor-content .ql-editor {
        background: dt('editor.content.background');
        color: dt('editor.content.color');
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .ql-snow.ql-toolbar button:hover,
    .p-editor .ql-snow.ql-toolbar button:focus {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }
`;var Ue=["header"],je=[[["p-header"]]],De=["p-header"];function We(t,a){t&1&&Y(0)}function Le(t,a){if(t&1&&(l(0,"div"),X(1),f(2,We,1,0,"ng-container",2),r()),t&2){let e=m();v(e.cx("toolbar")),d(2),u("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function He(t,a){if(t&1&&(l(0,"div")(1,"span",3)(2,"select",4)(3,"option",5),c(4,"Heading"),r(),l(5,"option",6),c(6,"Subheading"),r(),l(7,"option",7),c(8,"Normal"),r()(),l(9,"select",8)(10,"option",7),c(11,"Sans Serif"),r(),l(12,"option",9),c(13,"Serif"),r(),l(14,"option",10),c(15,"Monospace"),r()()(),l(16,"span",3),b(17,"button",11)(18,"button",12)(19,"button",13),r(),l(20,"span",3),b(21,"select",14)(22,"select",15),r(),l(23,"span",3),b(24,"button",16)(25,"button",17),l(26,"select",18),b(27,"option",7),l(28,"option",19),c(29,"center"),r(),l(30,"option",20),c(31,"right"),r(),l(32,"option",21),c(33,"justify"),r()()(),l(34,"span",3),b(35,"button",22)(36,"button",23)(37,"button",24),r(),l(38,"span",3),b(39,"button",25),r()()),t&2){let e=m();v(e.cx("toolbar"))}}var Ae={root:({instance:t})=>["p-editor",{"p-invalid":t.invalid()}],toolbar:"p-editor-toolbar",content:"p-editor-content"},Ve=(()=>{class t extends de{name="editor";theme=Ie;classes=Ae;static \u0275fac=(()=>{let e;return function(o){return(e||(e=L(t)))(o||t)}})();static \u0275prov=j({token:t,factory:t.\u0275fac})}return t})();var Ge={provide:ce,useExisting:U(()=>O),multi:!0},O=(()=>{class t extends _e{style;styleClass;placeholder;formats;modules;bounds;scrollingContainer;debug;get readonly(){return this._readonly}set readonly(e){this._readonly=e,this.quill&&(this._readonly?this.quill.disable():this.quill.enable())}onInit=new z;onTextChange=new z;onSelectionChange=new z;toolbar;value;delayedCommand=null;_readonly=!1;quill;dynamicQuill;headerTemplate;templates;_headerTemplate;get isAttachedQuillEditorToDOM(){return this.quillElements?.editorElement?.isConnected}quillElements;_componentStyle=W(Ve);constructor(){super(),K(()=>{this.initQuillElements(),this.initQuillEditor()})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break}})}writeControlValue(e){if(this.value=e,this.quill)if(e){let n=()=>{this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith("2")?{html:this.value}:this.value))};this.isAttachedQuillEditorToDOM?n():this.delayedCommand=n}else{let n=()=>{this.quill.setText("")};this.isAttachedQuillEditorToDOM?n():this.delayedCommand=n}}getQuill(){return this.quill}initQuillEditor(){re(this.platformId)||(this.dynamicQuill?this.createQuillEditor():import("./chunk-GBOB52RX.js").then(e=>{this.dynamicQuill=e.default,this.createQuillEditor()}).catch(e=>console.error(e.message)))}createQuillEditor(){this.initQuillElements();let{toolbarElement:e,editorElement:n}=this.quillElements,o={toolbar:e},s=this.modules?R(R({},o),this.modules):o;this.quill=new this.dynamicQuill(n,{modules:s,placeholder:this.placeholder,readOnly:this.readonly,theme:"snow",formats:this.formats,bounds:this.bounds,debug:this.debug,scrollingContainer:this.scrollingContainer});let i=this.dynamicQuill.version.startsWith("2");this.value&&this.quill.setContents(this.quill.clipboard.convert(i?{html:this.value}:this.value)),this.quill.on("text-change",(F,B,E)=>{if(E==="user"){let M=i?this.quill.getSemanticHTML():V(n,".ql-editor").innerHTML,Fe=this.quill.getText().trim();M==="<p><br></p>"&&(M=null),this.onTextChange.emit({htmlValue:M,textValue:Fe,delta:F,source:E}),this.onModelChange(M),this.onModelTouched()}}),this.quill.on("selection-change",(F,B,E)=>{this.onSelectionChange.emit({range:F,oldRange:B,source:E})}),this.onInit.emit({editor:this.quill})}initQuillElements(){this.quillElements||(this.quillElements={editorElement:V(this.el.nativeElement,"div.p-editor-content"),toolbarElement:V(this.el.nativeElement,"div.p-editor-toolbar")})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=T({type:t,selectors:[["p-editor"]],contentQueries:function(n,o,s){if(n&1&&(P(s,ae,5),P(s,Ue,4),P(s,se,4)),n&2){let i;y(i=_())&&(o.toolbar=i.first),y(i=_())&&(o.headerTemplate=i.first),y(i=_())&&(o.templates=i)}},hostVars:2,hostBindings:function(n,o){n&2&&v(o.cn(o.cx("root"),o.styleClass))},inputs:{style:"style",styleClass:"styleClass",placeholder:"placeholder",formats:"formats",modules:"modules",bounds:"bounds",scrollingContainer:"scrollingContainer",debug:"debug",readonly:"readonly"},outputs:{onInit:"onInit",onTextChange:"onTextChange",onSelectionChange:"onSelectionChange"},features:[ne([Ge,Ve]),G],ngContentSelectors:De,decls:3,vars:5,consts:[[3,"class",4,"ngIf"],[3,"ngStyle"],[4,"ngTemplateOutlet"],[1,"ql-formats"],[1,"ql-header"],["value","1"],["value","2"],["selected",""],[1,"ql-font"],["value","serif"],["value","monospace"],["aria-label","Bold","type","button",1,"ql-bold"],["aria-label","Italic","type","button",1,"ql-italic"],["aria-label","Underline","type","button",1,"ql-underline"],[1,"ql-color"],[1,"ql-background"],["value","ordered","aria-label","Ordered List","type","button",1,"ql-list"],["value","bullet","aria-label","Unordered List","type","button",1,"ql-list"],[1,"ql-align"],["value","center"],["value","right"],["value","justify"],["aria-label","Insert Link","type","button",1,"ql-link"],["aria-label","Insert Image","type","button",1,"ql-image"],["aria-label","Insert Code Block","type","button",1,"ql-code-block"],["aria-label","Remove Styles","type","button",1,"ql-clean"]],template:function(n,o){n&1&&(J(je),f(0,Le,3,3,"div",0)(1,He,40,2,"div",0),b(2,"div",1)),n&2&&(u("ngIf",o.toolbar||o.headerTemplate||o._headerTemplate),d(),u("ngIf",!o.toolbar&&!o.headerTemplate&&!o._headerTemplate),d(),v(o.cx("content")),u("ngStyle",o.style))},dependencies:[I,N,ie,oe,Q],encapsulation:2,changeDetection:0})}return t})(),Qe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=A({type:t});static \u0275inj=D({imports:[O,Q,Q]})}return t})();var Ye=["buttonEl"],Je=()=>({height:"250px"}),Xe=()=>({cursor:"copy"}),Ze=()=>({padding:"1px"}),$e=()=>({"border-radius":"20px"});function en(t,a){t&1&&(l(0,"div",38),b(1,"i",39),l(2,"span",40),c(3,"Drop or select a cover image"),r()())}function nn(t,a){if(t&1){let e=x();l(0,"div",43),h("mouseenter",function(){let o=q(e).$implicit,s=m(3);return p(s.onImageMouseOver(o))})("mouseleave",function(){let o=q(e).$implicit,s=m(3);return p(s.onImageMouseLeave(o))}),l(1,"div",44),b(2,"img",45),l(3,"button",46,2),h("click",function(o){let s=q(e).$implicit,i=m(3);return p(i.removeImage(o,s))}),b(5,"i",47),r()()()}if(t&2){let e=a.$implicit;d(),C(S(5,Ze)),d(),u("src",e.objectURL,H)("alt",e.name),d(),u("id",e.name)}}function tn(t,a){if(t&1&&(l(0,"div",41),f(1,nn,6,6,"div",42),r()),t&2){let e=m(2);C(S(3,Xe)),d(),u("ngForOf",e.product.images)}}function ln(t,a){if(t&1){let e=x();l(0,"div",35),h("click",function(){q(e),m();let o=$(18);return p(o.advancedFileInput.nativeElement.click())}),f(1,en,4,0,"div",36)(2,tn,2,4,"div",37),r()}if(t&2){let e=m();d(),u("ngIf",!e.product.images.length),d(),u("ngIf",e.product.images.length)}}function on(t,a){if(t&1){let e=x();l(0,"p-chip",48)(1,"span",49),c(2),r(),l(3,"span",50),h("click",function(){let o=q(e).$implicit,s=m();return p(s.onChipRemove(o))}),b(4,"i",51),r()()}if(t&2){let e=a.$implicit;C(S(3,$e)),d(2),ee(e)}}function rn(t,a){t&1&&b(0,"i",54)}function an(t,a){if(t&1){let e=x();l(0,"div",52),h("click",function(){let o=q(e).$implicit,s=m();return p(s.onColorSelect(o.name))}),f(1,rn,1,0,"i",53),r()}if(t&2){let e=a.$implicit,n=m();v(e.background),d(),u("ngIf",n.product.colors.indexOf(e.name)!==-1)}}var Oe=class t{buttonEl;text="";categoryOptions=["Sneakers","Apparel","Socks"];colorOptions=[{name:"Black",background:"bg-gray-900"},{name:"Orange",background:"bg-orange-500"},{name:"Navy",background:"bg-blue-500"}];product={name:"",price:"",code:"",sku:"",status:"Draft",tags:["Nike","Sneaker"],category:"Sneakers",colors:["Blue"],stock:"Sneakers",inStock:!0,description:"",images:[]};uploadedFiles=[];showRemove=!1;onChipRemove(a){this.product.tags=this.product.tags.filter(e=>e!==a)}onColorSelect(a){this.product.colors.indexOf(a)==-1?this.product.colors.push(a):this.product.colors.splice(this.product.colors.indexOf(a),1)}onUpload(a){for(let e of a.files)this.product.images.push(e)}onImageMouseOver(a){this.buttonEl.toArray().forEach(e=>{e.nativeElement.id===a.name&&(e.nativeElement.style.display="flex")})}onImageMouseLeave(a){this.buttonEl.toArray().forEach(e=>{e.nativeElement.id===a.name&&(e.nativeElement.style.display="none")})}removeImage(a,e){a.stopPropagation(),this.product.images=this.product.images.filter(n=>n!==e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=T({type:t,selectors:[["app-new-product"]],viewQuery:function(e,n){if(e&1&&Z(Ye,5),e&2){let o;y(o=_())&&(n.buttonEl=o)}},decls:54,vars:18,consts:[["fileUploader",""],["content",""],["buttonEl",""],[1,"card"],[1,"block","text-surface-900","dark:text-surface-0","font-bold","text-xl","mb-6"],[1,"grid","grid-cols-12","gap-4","flex-wrap"],[1,"col-span-12","lg:col-span-8"],[1,"grid","grid-cols-12","gap-4"],[1,"col-span-12"],["pInputText","","type","text","placeholder","Product Name","label","Product Name",3,"ngModelChange","ngModel"],[1,"col-span-12","lg:col-span-4"],["pInputText","","type","text","placeholder","Price","label","Price",3,"ngModelChange","ngModel"],["pInputText","","type","text","placeholder","Product Code","label","Product Code",3,"ngModelChange","ngModel"],["pInputText","","type","text","placeholder","Product SKU","label","SKU",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],[1,"col-span-12","mt-4"],["name","demo[]","url","./upload.php","accept","image/*","styleClass","border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 p-0 rounded h-80",3,"onUpload","onSelect","customUpload","multiple","showUploadButton","showCancelButton","auto"],[1,"col-span-12","lg:col-span-4","flex","flex-col","gap-y-4"],[1,"border","border-surface-200","dark:border-surface-700","rounded"],[1,"text-surface-900","dark:text-surface-0","font-bold","block","border-b","border-surface-200","dark:border-surface-700","p-4"],[1,"p-4"],[1,"bg-surface-100","dark:bg-surface-700","py-2","px-4","flex","items-center","rounded"],[1,"text-black/90","dark:text-surface-0!","font-bold","mr-4"],[1,"text-black/60","dark:text-surface-0!","font-semibold"],["pButton","","pRipple","","type","button","icon","pi pi-fw pi-pencil","text","","rounded","",1,"ml-auto"],[1,"p-4","flex","flex-wrap","gap-1"],["styleClass","mr-2 py-2 px-4 text-surface-900 dark:text-surface-0 font-bold bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700",3,"style",4,"ngFor","ngForOf"],["placeholder","Select a category",3,"ngModelChange","options","ngModel"],[1,"p-4","flex"],["class","w-8 h-8 mr-2 border border-surface-200 dark:border-surface-700 rounded-full cursor-pointer flex justify-center items-center",3,"class","click",4,"ngFor","ngForOf"],[1,"border","border-surface-200","dark:border-surface-700","flex","justify-between","items-center","px-4","rounded"],[1,"text-surface-900","dark:text-surface-0","font-bold","p-4"],[1,"flex","justify-between","gap-4"],["pButton","","pRipple","","severity","danger","outlined","","label","Discard","icon","pi pi-fw pi-trash"],["pButton","","pRipple","","label","Save","icon","pi pi-fw pi-check"],[1,"w-full","h-full","py-4",2,"cursor","copy",3,"click"],["class","h-full flex flex-col justify-center items-center",4,"ngIf"],["class","w-full py-4",3,"style",4,"ngIf"],[1,"h-full","flex","flex-col","justify-center","items-center"],[1,"pi","pi-file","text-primary","text-4xl","mb-4"],[1,"block","font-semibold","text-surface-900","dark:text-surface-0","text-lg"],[1,"w-full","py-4"],["class","flex flex-wrap gap-8","style","padding: 1px;",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"flex","flex-wrap","gap-8",2,"padding","1px",3,"mouseenter","mouseleave"],[1,"remove-file-wrapper","relative","w-full","h-60","border-4","border-transparent","rounded","hover:bg-primary","hover:text-primary-contrast","duration-100","cursor-auto"],[1,"w-full","h-full","rounded","shadow",3,"src","alt"],["pButton","","pRipple","","rounded","","type","button",1,"remove-button","text-sm","absolute","justify-center","items-center","cursor-pointer",2,"top","-10px","right","-10px","display","none",3,"click","id"],["pButtonIcon","",1,"pi","pi-times"],["styleClass","mr-2 py-2 px-4 text-surface-900 dark:text-surface-0 font-bold bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700"],[1,"mr-4"],[1,"flex","w-4","h-4","items-center","justify-center","border","border-surface-200","dark:border-surface-700","bg-gray-100","rounded-full","cursor-pointer",3,"click"],[1,"pi","pi-fw","pi-times","text-black/60",2,"font-size","9px"],[1,"w-8","h-8","mr-2","border","border-surface-200","dark:border-surface-700","rounded-full","cursor-pointer","flex","justify-center","items-center",3,"click"],["class","pi pi-check text-sm text-white z-50",4,"ngIf"],[1,"pi","pi-check","text-sm","text-white","z-50"]],template:function(e,n){if(e&1){let o=x();l(0,"div",3)(1,"span",4),c(2,"Create Product"),r(),l(3,"p-fluid",5)(4,"div",6)(5,"div",7)(6,"div",8)(7,"input",9),k("ngModelChange",function(i){return q(o),g(n.product.name,i)||(n.product.name=i),p(i)}),r()(),l(8,"div",10)(9,"input",11),k("ngModelChange",function(i){return q(o),g(n.product.price,i)||(n.product.price=i),p(i)}),r()(),l(10,"div",10)(11,"input",12),k("ngModelChange",function(i){return q(o),g(n.product.code,i)||(n.product.code=i),p(i)}),r()(),l(12,"div",10)(13,"input",13),k("ngModelChange",function(i){return q(o),g(n.product.sku,i)||(n.product.sku=i),p(i)}),r()(),l(14,"div",8)(15,"p-editor",14),k("ngModelChange",function(i){return q(o),g(n.product.description,i)||(n.product.description=i),p(i)}),r()(),l(16,"div",15)(17,"p-fileUpload",16,0),h("onUpload",function(i){return q(o),p(n.onUpload(i))})("onSelect",function(i){return q(o),p(n.onUpload(i))}),f(19,ln,3,2,"ng-template",null,1,te),r()()()(),l(21,"div",17)(22,"div",18)(23,"span",19),c(24,"Publish"),r(),l(25,"div",20)(26,"div",21)(27,"span",22),c(28,"Status:"),r(),l(29,"span",23),c(30,"Draft"),r(),b(31,"button",24),r()()(),l(32,"div",18)(33,"span",19),c(34,"Tags"),r(),l(35,"div",25),f(36,on,5,4,"p-chip",26),r()(),l(37,"div",18)(38,"span",19),c(39,"Category"),r(),l(40,"div",20)(41,"p-select",27),k("ngModelChange",function(i){return q(o),g(n.product.category,i)||(n.product.category=i),p(i)}),r()()(),l(42,"div",18)(43,"span",19),c(44,"Colors"),r(),l(45,"div",28),f(46,an,2,3,"div",29),r()(),l(47,"div",30)(48,"span",31),c(49,"In stock"),r(),l(50,"p-toggleswitch",14),k("ngModelChange",function(i){return q(o),g(n.product.inStock,i)||(n.product.inStock=i),p(i)}),r()(),l(51,"div",32),b(52,"button",33)(53,"button",34),r()()()()}e&2&&(d(7),w("ngModel",n.product.name),d(2),w("ngModel",n.product.price),d(2),w("ngModel",n.product.code),d(2),w("ngModel",n.product.sku),d(2),C(S(17,Je)),w("ngModel",n.product.description),d(2),u("customUpload",!0)("multiple",!0)("showUploadButton",!0)("showCancelButton",!1)("auto",!0),d(19),u("ngForOf",n.product.tags),d(5),u("options",n.categoryOptions),w("ngModel",n.product.category),d(5),u("ngForOf",n.colorOptions),d(4),w("ngModel",n.product.inStock))},dependencies:[I,le,N,Qe,O,ge,we,be,qe,pe,ue,ze,Te,ye,xe,ve,Me,Ee,Se,Ce,he,ke,Ne,Pe,fe,me],styles:["[_nghost-%COMP%]     .p-fileupload-header{display:none}[_nghost-%COMP%]     .p-fileupload-file-list{display:none}[_nghost-%COMP%]     .p-fileupload-content{height:20rem}[_nghost-%COMP%]     .p-progressbar{display:none}"]})};export{Oe as NewProduct};
