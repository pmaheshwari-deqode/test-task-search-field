(this["webpackJsonpsearch-field"]=this["webpackJsonpsearch-field"]||[]).push([[0],{58:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var o=n(11),r=n(0),a=n.n(r),c=n(10),u=n.n(c),i=(n(58),n(16)),s=n(28);function l(e){var t=1e3;return e>t&&(e=t),Math.floor(Math.random()*t)%e===0}var d=n(32),j=n(99),p=n(105),h=n(106),b=Object(j.a)({rootContainer:{width:"500px",padding:"20px"},matchingText:{color:"red"},noResultsFound:{color:"red",display:"block",margin:"3px",lineBreak:"anywhere"}}),f=function(e){var t=e.searchHandler,n=e.dropdownOptions,a=e.isLoading,c=e.lastSearchedStr,u=b(),s=Object(r.useState)(!1),l=Object(i.a)(s,2),j=l[0],f=l[1],O=Object(r.useState)(""),v=Object(i.a)(O,2),g=v[0],S=v[1],x=Object(r.useState)(""),m=Object(i.a)(x,2),w=m[0],B=m[1],C=Object(r.useState)(!1),F=Object(i.a)(C,2),I=F[0],P=F[1];Object(r.useEffect)((function(){n.length&&!a?(f(!0),P(!1)):Boolean(g)&&!a&&(f(!1),P(!0))}),[n,a]);var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=e.split(" ").filter((function(e){return Boolean(e)}));return t[t.length-1]};return Object(o.jsxs)("div",{className:u.rootContainer,children:[Object(o.jsx)(h.a,{open:Boolean(j&&n.length),onClose:function(){return f(!1)},onOpen:function(){return f(!0)},value:g,getOptionSelected:function(e,t){return e===t},popupIcon:null,options:n,loading:a,onChange:function(e,n){var o=g.split(" ").filter((function(e){return Boolean(e)}));o[o.length-1]=n;var r=n?o.join(" ")+" ":"";S(r),B(r),Boolean(r)||t(""),!Boolean(n)&&I&&P(!1)},renderOption:function(e){var t=e.split(c),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(o.jsxs)("span",{children:[r,Object(o.jsx)("span",{className:u.matchingText,children:c}),a]})},renderInput:function(e){return Object(o.jsx)(p.a,Object(d.a)(Object(d.a)({},e),{},{label:"Search",variant:"outlined",onChange:function(e){var n=e.target;S(n.value),B(n.value);var o=T(n.value);T(w)!==o?t(T(n.value)):f(!1),B(n.value)},InputProps:Object(d.a)({},e.InputProps)}))}}),Object(o.jsx)("span",{className:u.noResultsFound,children:I&&!a?"No results found for '".concat(c,"'"):null})]})};f.defaultProps={searchHandler:Object(s.noop)(),dropdownOptions:[],isLoading:!1,lastSearchedStr:""};var O=f,v=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),u=Object(i.a)(c,2),d=u[0],j=u[1],p=Object(r.useState)(""),h=Object(i.a)(p,2),b=h[0],f=h[1],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";f(e),j(!1)},g=Object(r.useCallback)(Object(s.debounce)((function(e){(function(e){var t="post",n=[];return l(2)&&n.push("pre"+e),l(2)&&n.push(e),l(2)&&n.push(e+t),l(2)&&n.push("pre"+e+t),new Promise((function(e,t){var o=200*Math.random();setTimeout((function(){l(10)?t():e(n)}),o)}))})(e).then((function(t){a(t),v(e)}),(function(t){console.error("There was some error while fetching results."),v(e)}))}),500),[]);return Object(o.jsx)(O,{searchHandler:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";a([]),""!==e&&(j(!0),g(e))},isLoading:d,dropdownOptions:n,lastSearchedStr:b})};var g=function(){return Object(o.jsx)(v,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,108)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};u.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),S()}},[[65,1,2]]]);
//# sourceMappingURL=main.be2eda99.chunk.js.map