import{g as c}from"./config.338b3a00.js";import{s as f,r as _,f as u,g as m,h as d,d as l,j as g,i as p,u as h,v as C,w as S}from"./scheduler.5d9df325.js";import{S as y,i as $,a as v,t as I}from"./index.cbe6f03d.js";const i="consent",D=()=>{w()||c("/consent-form")},w=()=>{const s=window.localStorage.getItem(i);if(s)return JSON.parse(s)},J=()=>{const s={time:new Date().toISOString(),id:crypto.randomUUID()};localStorage.setItem(i,JSON.stringify(s))};function E(s){let n,o;const r=s[1].default,e=_(r,s,s[0],null);return{c(){n=u("article"),e&&e.c(),this.h()},l(t){n=m(t,"ARTICLE",{class:!0});var a=d(n);e&&e.l(a),a.forEach(l),this.h()},h(){g(n,"class","svelte-p1yq6g")},m(t,a){p(t,n,a),e&&e.m(n,null),o=!0},p(t,[a]){e&&e.p&&(!o||a&1)&&h(e,r,t,t[0],o?S(r,t[0],a,null):C(t[0]),null)},i(t){o||(v(e,t),o=!0)},o(t){I(e,t),o=!1},d(t){t&&l(n),e&&e.d(t)}}}function N(s,n,o){let{$$slots:r={},$$scope:e}=n;return s.$$set=t=>{"$$scope"in t&&o(0,e=t.$$scope)},[e,r]}class T extends y{constructor(n){super(),$(this,n,N,E,f,{})}}export{T as C,J as a,D as e,w as g};
