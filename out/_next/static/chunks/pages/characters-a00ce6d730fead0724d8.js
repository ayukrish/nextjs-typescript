(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{2137:function(n,t,r){"use strict";function e(n,t,r,e,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void r(s)}o.done?t(u):Promise.resolve(u).then(e,a)}function a(n){return function(){var t=this,r=arguments;return new Promise((function(a,c){var i=n.apply(t,r);function o(n){e(i,a,c,o,u,"next",n)}function u(n){e(i,a,c,o,u,"throw",n)}o(void 0)}))}}r.d(t,{Z:function(){return a}})},5079:function(n,t,r){"use strict";function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var r=[],e=!0,a=!1,c=void 0;try{for(var i,o=n[Symbol.iterator]();!(e=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(u){a=!0,c=u}finally{try{e||null==o.return||o.return()}finally{if(a)throw c}}return r}}(n,t)||function(n,t){if(n){if("string"===typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return u}});var c=r(5893),i=(r(7294),r(9505)),o=r.n(i),u=function(n){var t=n.imgSrc,r=n.heading,e=n.dataObj;return(0,c.jsxs)("article",{className:"".concat(o().card," flex column"),children:[(0,c.jsxs)("div",{className:o().cardHeader,children:[t&&(0,c.jsx)("img",{src:t,alt:r}),(0,c.jsx)("div",{className:"".concat(o().cardTitle," ").concat(t?"":o().cardBlankTitle),children:(0,c.jsx)("h2",{children:r})})]}),(0,c.jsx)("div",{className:o().cardInfo,children:Object.entries(e).map((function(n){var t=a(n,2),r=t[0],e=t[1];return(0,c.jsxs)("div",{className:"".concat(o().characterText," flex center"),children:[(0,c.jsx)("span",{children:r}),(0,c.jsx)("span",{children:e})]},r)}))})]})}},1032:function(n,t,r){"use strict";var e=r(5893),a=(r(7294),r(7111)),c=r.n(a);t.Z=function(n){var t=n.contentLength,r=n.currentPage,a=n.limit,i=n.onChange,o=t<=a;return(0,e.jsx)("div",{className:"flex ".concat(c().paginationWrapper),children:o&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("button",{type:"button",id:"prev",disabled:1===r,onClick:function(n){n.stopPropagation(),i(r-1)},"data-xpath":"pagination_prevBtn",children:"Prev"}),(0,e.jsx)("button",{type:"button",id:"next",disabled:t<a,onClick:function(n){n.stopPropagation(),i(r+1)},"data-xpath":"pagination_nextBtn",children:"Next"})]})})}},8213:function(n,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return l}});var e=r(5893),a=r(7757),c=r.n(a),i=r(2137),o=r(7294),u=r(2605),s=r(5079),d=r(1032),l=!0;t.default=function(n){var t=n.characters,r=(0,o.useState)(t),a=r[0],l=r[1],f=(0,o.useState)(1),h=f[0],p=f[1],v=function(){var n=(0,i.Z)(c().mark((function n(){var t,r,e=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.length>0&&void 0!==e[0]?e[0]:1,n.next=3,(0,u.X)({url:"https://rickandmortyapi.com/api/character",method:"get",page:t});case 3:r=n.sent,l((null===r||void 0===r?void 0:r.results)||[]);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[(null===a||void 0===a?void 0:a.length)>0&&a.map((function(n){return(0,e.jsx)(s.Z,{dataObj:{STATUS:n&&n.status,SPECIES:n&&n.species,GENDER:n&&n.gender,ORIGIN:n&&n.origin&&n.origin.name,LOCATION:n&&n.location&&n.location.name},imgSrc:n&&n.image,heading:n&&n.name},n.id)})),(0,e.jsx)(d.Z,{contentLength:(null===a||void 0===a?void 0:a.length)||0,currentPage:h,limit:20,onChange:function(n){v(n),p(n)}})]})}},2605:function(n,t,r){"use strict";r.d(t,{X:function(){return e}});var e=function(n){var t=n.url,r=n.method,e=void 0===r?"get":r,a=n.page;return a&&(t="".concat(t,"?page=").concat(a)),fetch(t,{method:e}).then((function(n){return n.ok?n.text().then((function(n){return JSON.parse(n)})):n.text().then((function(n){return Promise.reject(n)}))})).catch((function(n){return Promise.reject(n)}))}},8270:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/characters",function(){return r(8213)}])},9505:function(n){n.exports={card:"card_card__1Kbrp",cardHeader:"card_cardHeader__2SIP8",cardTitle:"card_cardTitle__1pLv7",cardBlankTitle:"card_cardBlankTitle__6oYqQ",cardInfo:"card_cardInfo__2Cogv",characterText:"card_characterText__15eJK"}},7111:function(n){n.exports={paginationWrapper:"pagination_paginationWrapper__3GpB0"}}},function(n){n.O(0,[774,351],(function(){return t=8270,n(n.s=t);var t}));var t=n.O();_N_E=t}]);