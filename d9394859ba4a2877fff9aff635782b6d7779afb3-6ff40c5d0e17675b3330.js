(self.webpackChunkjacobg1_github_io=self.webpackChunkjacobg1_github_io||[]).push([[125],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!i(e[s],a[s]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],a[l[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},7618:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",c),p}}},3847:function(e,t,n){"use strict";n.d(t,{A:function(){return r}});var r={header:"(min-width: 325px)",mobile:"(min-width: 425px)",footer:"(min-width: 560px)",specialHeader:"(min-width: 700px)",tablet:"(min-width: 768px)",laptop:"(min-width: 1024px)",desktop:"(min-width: 1440px)"}},8759:function(e,t,n){"use strict";n.d(t,{Z:function(){return Be}});var r,o,i,a,c=n(7294),s=n(5697),l=n.n(s),u=n(7618),p=n.n(u),d=n(2993),f=n.n(d),h=n(6494),m=n.n(h),b="bodyAttributes",y="htmlAttributes",g="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(w).map((function(e){return w[e]})),"charset"),v="cssText",T="href",C="http-equiv",E="innerHTML",A="itemprop",k="name",O="property",S="rel",j="src",I="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",L="defer",P="encodeSpecialCharacters",N="onChangeClientState",R="titleTemplate",H=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),D=[w.NOSCRIPT,w.SCRIPT,w.STYLE],B="data-react-helmet",z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Q(e,w.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,M);return t||r||void 0},V=function(e){return Q(e,N)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===S&&"canonical"===e[n].toLowerCase()||s===S&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==E&&c!==v&&c!==A||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=m()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;se(w.BODY,r),se(w.HTML,o),ce(p,d);var f={baseTag:le(w.BASE,n),linkTags:le(w.LINK,i),metaTags:le(w.META,a),noscriptTags:le(w.NOSCRIPT,c),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,u)},h={},m={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=f[e].oldTags)})),t&&t(),s(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(w.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===E)n.innerHTML=t.innerHTML;else if(r===v)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,o=pe(n,r),[c.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case y:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=_[e]||e;if(n===E||n===v){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===E||e===v)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(b,n,r),htmlAttributes:de(y,o,r),link:de(w.LINK,i,r),meta:de(w.META,a,r),noscript:de(w.NOSCRIPT,c,r),script:de(w.SCRIPT,s,r),style:de(w.STYLE,l,r),title:de(w.TITLE,{title:p,titleAttributes:d},r)}},he=p()((function(e){return{baseTag:J([T,I],e),bodyAttributes:Z(b,e),defer:Q(e,L),encode:Q(e,P),htmlAttributes:Z(y,e),linkTags:$(w.LINK,[S,T],e),metaTags:$(w.META,[k,x,C,O,A],e),noscriptTags:$(w.NOSCRIPT,[E],e),onChangeClientState:V(e),scriptTags:$(w.SCRIPT,[j,E],e),styleTags:$(w.STYLE,[v],e),title:G(e),titleAttributes:Z(g,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),fe)((function(){return null})),me=(o=he,a=i=function(e){function t(){return F(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case w.BODY:return Y({},o,{bodyAttributes:Y({},i)});case w.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var be=me,ye=n(1597),ge=n(1721),we=n(1074),xe=n(3847),ve=we.default.div.withConfig({displayName:"mobileMenu__MobileModal",componentId:"sc-1eh094j-0"})(["position:absolute;background:#4065b7;top:0;height:280px;width:100%;padding-top:40px;@media ","{padding-top:32px;}@media ","{display:none;}& a{text-decoration:none;font-size:21px;font-weight:500;padding:9px 0;display:block;width:41%;margin:3px auto 0px auto;text-align:center;color:white;cursor:pointer;text-shadow:0 1px 1px rgb(106,80,91);box-shadow:0px 3px #78b4f9;}"],xe.A.tablet,xe.A.laptop),Te=we.default.div.withConfig({displayName:"mobileMenu__MobileMenuContainer",componentId:"sc-1eh094j-1"})(["display:inline;position:absolute;top:41%;transform:translateY(-43%);right:13px;z-index:1;cursor:pointer;@media ","{display:none;}& span{width:30px;display:block;border-bottom:3px solid #f1f1f1;box-shadow:0px 3px #78b4f9;padding-bottom:4px;}& span.transition{transition:transform 0.5s ease-in-out;}& span.transitionBack{transition:transform 0.2s ease-in-out;}& span.rotateUp{transform:rotate(45deg);position:absolute;top:0;width:30px;}& span.rotateDown{transform:rotate(-45deg);position:absolute;top:0;width:30px;left:-4px;}& span.disappear{visibility:hidden;}"],xe.A.laptop),Ce=we.default.div.withConfig({displayName:"mobileMenu__DesktopMenu",componentId:"sc-1eh094j-2"})(["display:none;@media ","{display:block;float:right;padding-right:35px;padding-top:17px;}& a{color:white;display:block;text-decoration:none;font-size:14px;text-shadow:0 1px 1px rgb(41,35,37);font-weight:normal;@media ","{font-size:17px;}}"],xe.A.laptop,xe.A.desktop),Ee=we.default.div.withConfig({displayName:"mobileMenu__MenuButton",componentId:"sc-1eh094j-3"})(["display:inline-block;margin-left:25px;border-radius:30px;border:2px solid #73b2fb;"," box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);transition:all 0.3s ease-in-out;width:95px;text-align:center;line-height:30px;@media ","{width:100px;}:hover{background:#ef6060;box-shadow:none;border-color:#7cb9fd;}"],"",xe.A.desktop),Ae=[{text:"Projects",href:"/projects/"},{text:"Contact",href:"/contact/"},{text:"Github",href:"https://github.com/jacobg1"},{text:"LinkedIn",href:"https://www.linkedin.com/in/jacob-greenwald-developer/"}],ke=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showMenu:!1,rotate:!1,transition:!0,location:""},n.openMenu=function(){return n.setState((function(e){return{showMenu:!e.showMenu,rotate:!e.rotate,transition:!0}}),(function(){this.state.showMenu?localStorage.setItem("open","1"):localStorage.setItem("open","2")}))},n}(0,ge.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({location:window.location.pathname,window:window}),"1"===localStorage.getItem("open")?this.setState({showMenu:!0,rotate:!0,transition:!1}):this.setState({showMenu:!1,rotate:!1,transition:!1})},n.render=function(){var e=this,t=c.createElement(ve,null,Ae.map((function(t,n){return"Github"===t.text||"LinkedIn"===t.text?c.createElement("a",{key:n,href:t.href,target:"_blank",rel:"noopener noreferrer"},t.text):"Resume"===t.text&&"/resume/"===e.state.location||"Projects"===t.text&&"/projects/"===e.state.location||"Contact"===t.text&&"/"!==e.state.location&&"/contact/"===e.state.location?c.createElement(ye.Link,{key:n,to:"/"},"Home"):c.createElement(ye.Link,{key:n,to:t.href},t.text)})));return c.createElement(c.Fragment,null,c.createElement(Te,{onClick:this.openMenu},c.createElement("span",{className:this.state.rotate&&this.state.transition?"rotateUp transition":this.state.rotate?"rotateUp":"transitionBack"}),c.createElement("span",{className:this.state.rotate&&this.state.transition?"disappear transition":this.state.rotate?"disappear":""}),c.createElement("span",{className:this.state.rotate&&this.state.transition?"rotateDown transition":this.state.rotate?"rotateDown":"transitionBack"})),this.state.showMenu?t:"",c.createElement(Ce,null,Ae.map((function(t,n){return"Github"===t.text||"LinkedIn"===t.text?c.createElement(Ee,{key:n},c.createElement("a",{href:t.href,target:"_blank",rel:"noopener noreferrer"},t.text)):"Resume"===t.text&&"/resume/"===e.state.location||"Projects"===t.text&&"/projects/"===e.state.location||"Contact"===t.text&&"/contact/"===e.state.location?c.createElement(Ee,{key:n},c.createElement(ye.Link,{to:"/"},"Home")):c.createElement(Ee,{key:n},c.createElement(ye.Link,{to:t.href},t.text))}))))},t}(c.Component),Oe=we.default.div.withConfig({displayName:"header__Card",componentId:"sc-4agoby-0"})(["border-radius:5px;position:fixed;top:0;width:100%;"]),Se=(0,we.default)(Oe).withConfig({displayName:"header__HeaderContainer",componentId:"sc-4agoby-1"})([""," margin:0 auto;background:#ef6060;border-radius:0;background:#4971be;z-index:2;"],""),je=we.default.div.withConfig({displayName:"header__HeaderContentWrapper",componentId:"sc-4agoby-2"})(["position:relative;z-index:0;border-bottom:3px solid #e7e9ee;"]),Ie=we.default.h1.withConfig({displayName:"header__HeaderTitle",componentId:"sc-4agoby-3"})(["margin:0;font-size:19px;display:inline-block;padding:17px 12px;vertical-align:middle;max-width:46%;@media ","{font-size:27px;padding:20px 25px;}"],xe.A.tablet),_e=(0,we.default)(ye.Link).withConfig({displayName:"header__HeaderLink",componentId:"sc-4agoby-4"})(["color:#f1f1f1;text-decoration:none;text-shadow:0 1px 1px rgb(106,80,91);font-family:'Archivo',sans-serif;letter-spacing:1px;"]),Me=we.default.div.withConfig({displayName:"header__ButtonWrapper",componentId:"sc-4agoby-5"})(["line-height:21px;position:absolute;right:70px;top:44%;transform:translateY(-43%);width:70px;display:inline-block;text-align:center;border-radius:30px;"," outline:none;border:1px solid #73b2fb;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);text-shadow:0 1px 1px rgb(106,80,91);transition:all .3s ease-in-out;cursor:pointer;z-index:-1;:hover{background:#ef6060;}@media ","{display:none;}"],"",xe.A.laptop),Le=(0,we.default)(ye.Link).withConfig({displayName:"header__ContactButton",componentId:"sc-4agoby-6"})(["color:#ffffff;text-decoration:none;display:block;font-size:12px;",""],""),Pe=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:""},n}(0,ge.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({location:window.location.pathname})},n.render=function(){return c.createElement(c.Fragment,null,c.createElement(Se,null,c.createElement(je,null,c.createElement(Ie,null,c.createElement(_e,{to:"/"},this.props.siteTitle)),c.createElement(ke,null),c.createElement(Me,null,"/"!==this.state.location?c.createElement(Le,{to:"/"},"Home"):c.createElement(Le,{to:"/projects/"},"Projects")))))},t}(c.Component),Ne=we.default.div.withConfig({displayName:"footer__FooterContainer",componentId:"sc-szco2c-0"})(["width:100%;background:#4971bd;display:flex;justify-content:space-around;align-items:center;flex-direction:column;padding:25px 40px;min-width:320px;position:absolute;bottom:0;@media ","{justify-content:space-between;flex-direction:row;}& a{color:white;text-decoration:none;display:block;text-align:center;font-weight:normal;transition:color 0.3s ease-in-out;:hover{color:rgb(26,17,72);}@media ","{display:inline-block;}}"],xe.A.footer,xe.A.footer),Re=(0,we.default)(ye.Link).withConfig({displayName:"footer__ContactLink",componentId:"sc-szco2c-1"})(["padding-bottom:15px;@media ","{padding-right:24px;}"],xe.A.footer),He=function(e){var t=e.email;return c.createElement(Ne,null,c.createElement("div",null,c.createElement("a",{href:"mailto:"+t},t)),c.createElement("div",null,c.createElement(Re,{to:"/contact/"},"Contact"),c.createElement(ye.Link,{to:"/icon-credits/"},"Icons")))},De=we.default.div.withConfig({displayName:"layout__SiteContainer",componentId:"sc-1t4ehsi-0"})(["margin:0 auto 62px auto;padding-top:0;padding-bottom:105px;@media ","{padding-bottom:65px;}"],xe.A.tablet),Be=function(e){var t=e.children;return c.createElement(ye.StaticQuery,{query:"3442025986",render:function(e){return c.createElement(c.Fragment,null,c.createElement(be,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"A creative thinker who uses ingenuity to find innovative solutions to challenging problems. I use insight, imagination and coding fundamentals to create success by drawing on my dedication, persistence and passion for web development"},{name:"keywords",content:"Jacob Greenwald, Portfolio, Web Developer, Javascript"}]},c.createElement("html",{lang:"en"})),c.createElement(Pe,{siteTitle:e.site.siteMetadata.title}),c.createElement(De,null,t),c.createElement(He,{email:e.site.siteMetadata.email}))}})}}}]);
//# sourceMappingURL=d9394859ba4a2877fff9aff635782b6d7779afb3-6ff40c5d0e17675b3330.js.map