(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Y8YH:function(e,t,r){"use strict";var n=r("q1tI");function a(e,t,r){void 0===t&&(t=[]),void 0===r&&(r={loading:!1});var a,o,i=Object(n.useState)(r),c=i[0],u=i[1],l=(a=Object(n.useRef)(!1),o=Object(n.useCallback)((function(){return a.current}),[]),Object(n.useEffect)((function(){return a.current=!0,function(){a.current=!1}})),o);return[c,Object(n.useCallback)((function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return u({loading:!0}),e.apply(void 0,t).then((function(e){return l()&&u({value:e,loading:!1}),e}),(function(e){return l()&&u({error:e,loading:!1}),e}))}),t)]}function o(e,t){void 0===t&&(t=[]);var r=a(e,t,{loading:!0}),o=r[0],i=r[1];return Object(n.useEffect)((function(){i()}),[i]),o}r.d(t,"a",(function(){return o}))},mwzk:function(e,t,r){"use strict";r.r(t),function(e){var n=r("q1tI"),a=r.n(n),o=r("0cfB"),i=r("/MKj"),c=r("3SGO"),u=r("t8hP"),l=r("kDLi"),s=r("Y8YH"),m=r("ZGyg"),d=r("HJRA"),f=r("ZFWI");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){g(o,n,a,i,c,"next",e)}function c(e){g(o,n,a,i,c,"throw",e)}i(void 0)}))}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var O={main:{icon:"gicon gicon-branding",text:"Invite",subTitle:"Register your Grafana account",breadcrumbs:[{title:"Login",url:"login"}]},node:{text:""}},y={updateLocation:c.c};t.default=Object(o.hot)(e)(Object(i.connect)((function(e){return{code:e.location.routeParams.code}}),y)((function(e){var t=e.code,r=w(Object(n.useState)(),2),o=r[0],i=r[1],c=w(Object(n.useState)(),2),p=c[0],v=c[1],g=w(Object(n.useState)(),2),y=g[0],j=g[1];Object(s.a)(h(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.getBackendSrv)().get("/api/user/invite/"+t);case 2:r=e.sent,i({email:r.email,name:r.name,username:r.email}),v(r.name||r.email||r.username),j(r.invitedBy);case 6:case"end":return e.stop()}}),e)}))),[]);var E=function(){var e=h(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.getBackendSrv)().post("/api/user/invite/complete",b({},r,{inviteCode:t}));case 2:window.location.href=Object(f.c)().appSubUrl+"/";case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(m.a,{navModel:O},a.a.createElement(m.a.Contents,null,a.a.createElement("h3",{className:"page-sub-heading"},"Hello ",p||"there","."),a.a.createElement("div",{className:"modal-tagline p-b-2"},a.a.createElement("em",null,y||"Someone")," has invited you to join Grafana and the organization"," ",a.a.createElement("span",{className:"highlight-word"},d.b.user.orgName),a.a.createElement("br",null),"Please complete the following and choose a password to accept your invitation and continue:"),a.a.createElement(l.Forms.Form,{defaultValues:o,onSubmit:E},(function(e){var t=e.register,r=e.errors;return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.Forms.Field,{invalid:!!r.email,error:!!r.email&&r.email.message,label:"Email"},a.a.createElement(l.Forms.Input,{size:"md",placeholder:"email@example.com",name:"email",ref:t({required:"Email is required",pattern:{value:/^\S+@\S+$/,message:"Email is invalid"}})})),a.a.createElement(l.Forms.Field,{invalid:!!r.name,error:!!r.name&&r.name.message,label:"Name"},a.a.createElement(l.Forms.Input,{size:"md",placeholder:"Name (optional)",name:"name",ref:t})),a.a.createElement(l.Forms.Field,{invalid:!!r.username,error:!!r.username&&r.username.message,label:"Username"},a.a.createElement(l.Forms.Input,{size:"md",placeholder:"Username",name:"username",ref:t({required:"Username is required"})})),a.a.createElement(l.Forms.Field,{invalid:!!r.password,error:!!r.password&&r.password.message,label:"Password"},a.a.createElement(l.Forms.Input,{size:"md",type:"password",placeholder:"Password",name:"password",ref:t({required:"Password is required"})})),a.a.createElement(l.Forms.Button,{type:"submit"},"Sign Up"))}))))})))}.call(this,r("3UD+")(e))}}]);
//# sourceMappingURL=SignupInvited.898fe9e20a782b4232fe.js.map