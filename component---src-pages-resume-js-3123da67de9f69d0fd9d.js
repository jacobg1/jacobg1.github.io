(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(165),r=a(7),s=a.n(r),l=a(294),p=a.n(l),d=a(159),c=a(382),m=a.n(c),u=a(158),h=a(383),x=a.n(h),g=d.a.div.withConfig({displayName:"myPdf__ResumeHolder",componentId:"ssuseh-0"})(["text-align:center;padding-top:90px;@media ","{padding-top:100px;}& canvas{max-width:300px;margin:0 auto;@media ","{max-width:650px;}@media ","{max-width:850px;}}& img{width:35px;@media ","{width:50px;position:absolute;right:16px;z-index:-1;}@media ","{right:95px;width:75px;}}"],u.a.laptop,u.a.tablet,u.a.laptop,u.a.laptop,u.a.desktop),f=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return o.a.createElement(g,null,o.a.createElement("a",{href:m.a,download:!0},o.a.createElement("img",{src:x.a})),o.a.createElement(p.a,{file:m.a,scale:2}))},t}(o.a.Component);t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(f,null))}},158:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={header:"(min-width: 325px)",mobile:"(min-width: 425px)",footer:"(min-width: 560px)",specialHeader:"(min-width: 700px)",tablet:"(min-width: 768px)",laptop:"(min-width: 1024px)",desktop:"(min-width: 1440px)"}},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Jacob Greenwald",email:"greenwald.j8@gmail.com"}}}}},165:function(e,t,a){"use strict";var n=a(164),o=a(0),i=a.n(o),r=a(1),s=a.n(r),l=a(176),p=a.n(l),d=a(55),c=a(7),m=a.n(c),u=a(159),h=a(158),x=u.a.div.withConfig({displayName:"mobileMenu__MobileModal",componentId:"sc-1eh094j-0"})(["position:absolute;background:#ef6060;top:0;height:280px;width:100%;padding-top:40px;@media ","{padding-top:32px;}@media ","{display:none;}& a{text-decoration:none;font-size:21px;font-weight:500;padding:9px 0;display:block;width:41%;margin:3px auto 0px auto;text-align:center;color:white;cursor:pointer;text-shadow:0 1px 1px rgb(106,80,91);box-shadow:0px 3px #78b4f9;}"],h.a.tablet,h.a.laptop),g=u.a.div.withConfig({displayName:"mobileMenu__MobileMenuContainer",componentId:"sc-1eh094j-1"})(["display:inline;position:absolute;top:41%;transform:translateY(-43%);right:13px;z-index:1;cursor:pointer;@media ","{display:none;}& span{width:30px;display:block;border-bottom:3px solid #f1f1f1;box-shadow:0px 3px #78b4f9;padding-bottom:4px;}& span.transition{transition:transform .5s ease-in-out;}& span.transitionBack{transition:transform .2s ease-in-out;}& span.rotateUp{transform:rotate(45deg);position:absolute;top:0;width:30px;}& span.rotateDown{transform:rotate(-45deg);position:absolute;top:0;width:30px;left:-4px;}& span.disappear{visibility:hidden;}"],h.a.laptop),f=u.a.div.withConfig({displayName:"mobileMenu__DesktopMenu",componentId:"sc-1eh094j-2"})(["display:none;@media ","{display:block;float:right;padding-right:35px;padding-top:17px;}& a{color:white;display:block;text-decoration:none;font-size:14px;text-shadow:0 1px 1px rgb(41,35,37);font-weight:normal;@media ","{font-size:17px;}}"],h.a.laptop,h.a.desktop),b=u.a.div.withConfig({displayName:"mobileMenu__MenuButton",componentId:"sc-1eh094j-3"})(["display:inline-block;margin-left:25px;border-radius:30px;border:2px solid #73b2fb;"," box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);transition:all .3s ease-in-out;width:95px;text-align:center;line-height:30px;@media ","{width:100px;}:hover{background:#ef6060;box-shadow:none;border-color:#7cb9fd;}"],"",h.a.desktop),w=[{text:"Projects",href:"/projects/"},{text:"Contact",href:"/contact/"},{text:"Github",href:"https://github.com/jacobg1"},{text:"LinkedIn",href:"https://www.linkedin.com/in/jacob-greenwald-developer/"}],y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showMenu:!1,rotate:!1,transition:!0,location:""},a.openMenu=function(){return a.setState(function(e){return{showMenu:!e.showMenu,rotate:!e.rotate,transition:!0}},function(){this.state.showMenu?localStorage.setItem("open","1"):localStorage.setItem("open","2")})},a}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({location:window.location.pathname,window:window}),"1"===localStorage.getItem("open")?this.setState({showMenu:!0,rotate:!0,transition:!1}):this.setState({showMenu:!1,rotate:!1,transition:!1})},a.render=function(){var e=this,t=i.a.createElement(x,null,w.map(function(t,a){return"Github"===t.text?i.a.createElement("a",{key:a,href:t.href,target:"_blank",rel:"noopener noreferrer"},t.text):"LinkedIn"===t.text?i.a.createElement("a",{key:a,href:t.href,target:"_blank",rel:"noopener noreferrer"},t.text):"Resume"===t.text&&"/resume/"===e.state.location?i.a.createElement(d.Link,{key:a,to:"/"},"Home"):"Projects"===t.text&&"/projects/"===e.state.location?i.a.createElement(d.Link,{key:a,to:"/"},"Home"):"Contact"===t.text&&"/"!==e.state.location&&"/contact/"===e.state.location?i.a.createElement(d.Link,{key:a,to:"/"},"Home"):i.a.createElement(d.Link,{key:a,to:t.href},t.text)}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{onClick:this.openMenu},i.a.createElement("span",{className:this.state.rotate&&this.state.transition?"rotateUp transition":this.state.rotate?"rotateUp":"transitionBack"}),i.a.createElement("span",{className:this.state.rotate&&this.state.transition?"disappear transition":this.state.rotate?"disappear":""}),i.a.createElement("span",{className:this.state.rotate&&this.state.transition?"rotateDown transition":this.state.rotate?"rotateDown":"transitionBack"})),this.state.showMenu?t:"",i.a.createElement(f,null,w.map(function(t,a){return"Github"===t.text?i.a.createElement(b,{key:a},i.a.createElement("a",{href:t.href,target:"_blank",rel:"noopener noreferrer"},t.text)):"LinkedIn"===t.text?i.a.createElement(b,{key:a},i.a.createElement("a",{href:t.href,target:"_blank",rel:"noopener noreferrer"},t.text)):"Resume"===t.text&&"/resume/"===e.state.location?i.a.createElement(b,{key:a},i.a.createElement(d.Link,{to:"/"},"Home")):"Projects"===t.text&&"/projects/"===e.state.location?i.a.createElement(b,{key:a},i.a.createElement(d.Link,{to:"/"},"Home")):"Contact"===t.text&&"/contact/"===e.state.location?i.a.createElement(b,{key:a},i.a.createElement(d.Link,{to:"/"},"Home")):i.a.createElement(b,{key:a},i.a.createElement(d.Link,{to:t.href},t.text))})))},t}(o.Component),E=u.a.div.withConfig({displayName:"header__Card",componentId:"sc-4agoby-0"})(["border-radius:5px;position:fixed;top:0;width:100%;"]),M=Object(u.a)(E).withConfig({displayName:"header__HeaderContainer",componentId:"sc-4agoby-1"})([""," margin:0 auto;background:#ef6060;border-radius:0;background:#4971be;"],""),k=u.a.div.withConfig({displayName:"header__HeaderContentWrapper",componentId:"sc-4agoby-2"})(["position:relative;z-index:0;border-bottom:3px solid #e7e9ee;"]),I=u.a.h1.withConfig({displayName:"header__HeaderTitle",componentId:"sc-4agoby-3"})(["margin:0;font-size:19px;display:inline-block;padding:17px 12px;vertical-align:middle;max-width:46%;@media ","{font-size:27px;padding:20px 25px;}"],h.a.tablet),j=Object(u.a)(d.Link).withConfig({displayName:"header__HeaderLink",componentId:"sc-4agoby-4"})(["color:#f1f1f1;text-decoration:none;text-shadow:0 1px 1px rgb(106,80,91);font-family:'Archivo',sans-serif;letter-spacing:1px;"]),N=u.a.div.withConfig({displayName:"header__ButtonWrapper",componentId:"sc-4agoby-5"})(["line-height:21px;position:absolute;right:70px;top:44%;transform:translateY(-43%);width:70px;display:inline-block;text-align:center;border-radius:30px;"," outline:none;border:1px solid #73b2fb;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);text-shadow:0 1px 1px rgb(106,80,91);transition:all .3s ease-in-out;cursor:pointer;z-index:-1;:hover{background:#ef6060;}@media ","{display:none;}"],"",h.a.laptop),L=Object(u.a)(d.Link).withConfig({displayName:"header__ContactButton",componentId:"sc-4agoby-6"})(["color:#ffffff;text-decoration:none;display:block;font-size:12px;",""],""),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={location:""},a}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({location:window.location.pathname})},a.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(M,null,i.a.createElement(k,null,i.a.createElement(I,null,i.a.createElement(j,{to:"/"},this.props.siteTitle)),i.a.createElement(y,null),i.a.createElement(N,null,"/"!==this.state.location?i.a.createElement(L,{to:"/"},"Home"):i.a.createElement(L,{to:"/projects/"},"Projects")))))},t}(o.Component);v.propTypes={siteTitle:s.a.string.isRequired};var C=v,_=u.a.div.withConfig({displayName:"footer__FooterContainer",componentId:"szco2c-0"})(["width:100%;background:#4971bd;display:flex;justify-content:space-around;align-items:center;flex-direction:column;padding:25px 40px;min-width:320px;position:absolute;bottom:0;@media ","{justify-content:space-between;flex-direction:row;}& a{color:white;text-decoration:none;display:block;text-align:center;font-weight:normal;transition:color .3s ease-in-out;:hover{color:rgb(26,17,72);}@media ","{display:inline-block;}}"],h.a.footer,h.a.footer),D=u.a.a.withConfig({displayName:"footer__ResumeLink",componentId:"szco2c-1"})(["padding-bottom:15px;padding-top:15px;@media ","{padding-right:25px;}"],h.a.footer),T=Object(u.a)(d.Link).withConfig({displayName:"footer__ContactLink",componentId:"szco2c-2"})(["padding-bottom:15px;@media ","{padding-right:24px;}"],h.a.footer),z=function(e){var t=e.email;return i.a.createElement(_,null,i.a.createElement("div",null,i.a.createElement("a",{href:"mailto:"+t},t)),i.a.createElement("div",null,i.a.createElement(D,{href:"/resume/"},"Resume"),i.a.createElement(T,{to:"/contact/"},"Contact"),i.a.createElement(d.Link,{to:"/icon-credits/"},"Icons")))};z.propTypes={email:s.a.string.isRequired};var A=z,S=(a(177),u.a.div.withConfig({displayName:"layout__SiteContainer",componentId:"sc-1t4ehsi-0"})(["margin:0 auto 62px auto;padding-top:0;padding-bottom:105px;@media ","{padding-bottom:65px;}"],h.a.tablet)),Y=function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"79871472",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"A creative thinker who uses ingenuity to find innovative solutions to challenging problems. I use insight, imagination and coding fundamentals to create success by drawing on my dedication, persistence and passion for web development"},{name:"keywords",content:"Jacob Greenwald, Portfolio, Web Developer, Javascript"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(C,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(S,null,t),i.a.createElement(A,{email:e.site.siteMetadata.email}))},data:n})};Y.propTypes={children:s.a.node.isRequired};t.a=Y},360:function(e,t){},362:function(e,t){},382:function(e,t,a){e.exports=a.p+"static/resume-0e3f1c1cccc5fb4e04901786d81b90d6.pdf"},383:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJmaWxlLWRvd25sb2FkIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtZmlsZS1kb3dubG9hZCBmYS13LTEyIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM4NCA1MTIiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0yMjQgMTM2VjBIMjRDMTAuNyAwIDAgMTAuNyAwIDI0djQ2NGMwIDEzLjMgMTAuNyAyNCAyNCAyNGgzMzZjMTMuMyAwIDI0LTEwLjcgMjQtMjRWMTYwSDI0OGMtMTMuMiAwLTI0LTEwLjgtMjQtMjR6bTc2LjQ1IDIxMS4zNmwtOTYuNDIgOTUuN2MtNi42NSA2LjYxLTE3LjM5IDYuNjEtMjQuMDQgMGwtOTYuNDItOTUuN0M3My40MiAzMzcuMjkgODAuNTQgMzIwIDk0LjgyIDMyMEgxNjB2LTgwYzAtOC44NCA3LjE2LTE2IDE2LTE2aDMyYzguODQgMCAxNiA3LjE2IDE2IDE2djgwaDY1LjE4YzE0LjI4IDAgMjEuNCAxNy4yOSAxMS4yNyAyNy4zNnpNMzc3IDEwNUwyNzkuMSA3Yy00LjUtNC41LTEwLjYtNy0xNy03SDI1NnYxMjhoMTI4di02LjFjMC02LjMtMi41LTEyLjQtNy0xNi45eiI+PC9wYXRoPjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-resume-js-3123da67de9f69d0fd9d.js.map