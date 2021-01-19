flarum.core=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=132)}([function(t,e,n){"use strict";function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(2),r=function(){function t(t,e){void 0===t&&(t={}),void 0===e&&(e=null),this.data=t,this.freshness=new Date,this.exists=!1,this.store=e}var e=t.prototype;return e.id=function(){return this.data.id},e.attribute=function(t){return this.data.attributes[t]},e.pushData=function(e){for(var n in e)if("object"==typeof e[n])for(var i in this.data[n]=this.data[n]||{},e[n])e[n][i]instanceof t&&(e[n][i]={data:t.getIdentifier(e[n][i])}),this.data[n][i]=e[n][i];else this.data[n]=e[n];this.freshness=new Date},e.pushAttributes=function(t){this.pushData({attributes:t})},e.save=function(e,n){var r=this;void 0===n&&(n={});var o={type:this.data.type,id:this.data.id,attributes:e};if(e.relationships){for(var s in o.relationships={},e.relationships){var a=e.relationships[s];o.relationships[s]={data:a instanceof Array?a.map(t.getIdentifier):t.getIdentifier(a)}}delete e.relationships}var c=this.copyData();this.pushData(o);var u={data:o};return n.meta&&(u.meta=n.meta),app.request(Object(i.a)({method:this.exists?"PATCH":"POST",url:app.forum.attribute("apiUrl")+this.apiEndpoint(),body:u},n)).then((function(t){return r.store.data[t.data.type]=r.store.data[t.data.type]||{},r.store.data[t.data.type][t.data.id]=r,r.store.pushPayload(t)}),(function(t){throw r.pushData(c),m.redraw(),t}))},e.delete=function(t,e){var n=this;return void 0===e&&(e={}),this.exists?app.request(Object(i.a)({method:"DELETE",url:app.forum.attribute("apiUrl")+this.apiEndpoint(),body:t},e)).then((function(){n.exists=!1,n.store.remove(n)})):Promise.resolve()},e.apiEndpoint=function(){return"/"+this.data.type+(this.exists?"/"+this.data.id:"")},e.copyData=function(){return JSON.parse(JSON.stringify(this.data))},t.attribute=function(t,e){return function(){var n=this.data.attributes&&this.data.attributes[t];return e?e(n):n}},t.hasOne=function(t){return function(){if(this.data.relationships){var e=this.data.relationships[t];if(e)return app.store.getById(e.data.type,e.data.id)}return!1}},t.hasMany=function(t){return function(){if(this.data.relationships){var e=this.data.relationships[t];if(e)return e.data.map((function(t){return app.store.getById(t.type,t.id)}))}return!1}},t.transformDate=function(t){return t?new Date(t):null},t.getIdentifier=function(t){return{type:t.data.type,id:t.data.id}},t}()},function(t,e,n){"use strict";function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(2),r=n(5),o=function(){function t(){Object(r.a)(this,"element",void 0),Object(r.a)(this,"attrs",void 0)}var e=t.prototype;return e.oninit=function(t){this.setAttrs(t.attrs)},e.oncreate=function(t){this.element=t.dom},e.onbeforeupdate=function(t){this.setAttrs(t.attrs)},e.$=function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=$(this.element);return t?e.find(t):e})),t.component=function(t,e){void 0===t&&(t={}),void 0===e&&(e=null);var n=Object(i.a)({},t);return m(this,n,e)},e.setAttrs=function(t){if(void 0===t&&(t={}),this.constructor.initAttrs(t),t){if("children"in t)throw new Error("["+this.constructor.name+'] The "children" attribute of attrs should never be used. Either pass children in as the vnode children or rename the attribute');if("tag"in t)throw new Error("["+this.constructor.name+'] You cannot use the "tag" attribute name with Mithril 2.')}this.attrs=t},t.initAttrs=function(t){},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n(2),r=n(0),o=n(3),s=n(7),a=n(19),c=n(11),u=n(10),l=n(17),d=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(t){var e=Object(i.a)({},this.attrs);e.type=e.type||"button",e.title&&!t.children&&(e["aria-label"]=e.title),"object"==typeof e.title&&(e.title=Object(u.a)(e.title)),!e.title&&t.children&&(e.title=Object(u.a)(t.children));var n=Object(c.a)(e,"icon"),r=Object(c.a)(e,"loading");return(e.disabled||r)&&delete e.onclick,e.className=Object(a.a)([e.className,n&&"hasIcon",(e.disabled||r)&&"disabled",r&&"loading"]),m("button",e,this.getButtonContent(t.children))},n.getButtonContent=function(t){var e=this.attrs.icon;return[e&&!0!==e?Object(s.a)(e,{className:"Button-icon"}):"",t?m("span",{className:"Button-label"},t):"",this.attrs.loading?m(l.a,{size:"tiny",className:"LoadingIndicator--inline"}):""]},e}(o.a)},function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(5),r=function(t,e){Object(i.a)(this,"content",void 0),Object(i.a)(this,"priority",void 0),Object(i.a)(this,"key",void 0),this.content=t,this.priority=e},o=function(){function t(){Object(i.a)(this,"items",{})}var e=t.prototype;return e.isEmpty=function(){for(var t in this.items)if(this.items.hasOwnProperty(t))return!1;return!0},e.has=function(t){return!!this.items[t]},e.get=function(t){return this.items[t].content},e.add=function(t,e,n){return void 0===n&&(n=0),this.items[t]=new r(e,n),this},e.replace=function(t,e,n){return void 0===e&&(e=null),void 0===n&&(n=null),this.items[t]&&(null!==e&&(this.items[t].content=e),null!==n&&(this.items[t].priority=n)),this},e.remove=function(t){return delete this.items[t],this},e.merge=function(t){for(var e in t.items)t.items.hasOwnProperty(e)&&t.items[e]instanceof r&&(this.items[e]=t.items[e]);return this},e.toArray=function(){var t=[];for(var e in this.items)this.items.hasOwnProperty(e)&&this.items[e]instanceof r&&(this.items[e].content=Object(this.items[e].content),this.items[e].content.itemName=e,t.push(this.items[e]),this.items[e].key=t.length);return t.sort((function(t,e){return t.priority===e.priority?t.key-e.key:t.priority>e.priority?-1:1})).map((function(t){return t.content}))},t}()},function(t,e,n){"use strict";function i(t,e){return void 0===e&&(e={}),e.className="icon "+t+" "+(e.className||""),m("i",e)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(27),r=n(19);function o(t){return t.tag===i.a}function s(t){return t instanceof Array||(t=[t]),function(t){var e,n=[];return t.filter(Boolean).forEach((function(i,r){(!o(i)||e&&!o(e)&&r!==t.length-1)&&(e=i,n.push(i))})),n}(t).map((function(t){var e=t.tag&&t.tag.isListItem,n=t.tag&&t.tag.isActive&&t.tag.isActive(t.attrs),i=t.attrs&&t.attrs.itemClassName||t.itemClassName;return e&&(t.attrs=t.attrs||{},t.attrs.key=t.attrs.key||t.itemName,t.key=t.attrs.key),e?t:m("li",{className:Object(r.a)([i,t.itemName&&"item-"+t.itemName,n&&"active"]),key:t.attrs&&t.attrs.key||t.itemName},t)}))}},function(t,e,n){"use strict";var i=n(97),r=n.n(i);e.a=r.a},function(t,e,n){"use strict";function i(t){return t instanceof Array?t.map((function(t){return i(t)})).join(""):"object"==typeof t&&null!==t?t.children?i(t.children):t.text:t}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";function i(t,e){var n=t[e];return delete t[e],n}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(0),r=n(3),o=n(11),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.view=function(t){var e=t.attrs,n=e.options,i=void 0===n?{}:n,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(e,["options"]);r.href=r.href||"";var s=t.children||{tag:"#",children:t.text};return r.external?m("a",r,s):(r.href===m.route.get()&&("replace"in i||(i.replace=!0)),Object(o.a)(r,"force")&&("state"in i||(i.state={}),"key"in i.state||(i.state.key=Date.now())),r.options=i,m(m.route.Link,r,s))},e}(r.a)},function(t,e,n){"use strict";var i=n(2),r=n(0),o=n(1),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e}(o.a);Object(i.a)(s.prototype,{nameSingular:o.a.attribute("nameSingular"),namePlural:o.a.attribute("namePlural"),color:o.a.attribute("color"),icon:o.a.attribute("icon"),isHidden:o.a.attribute("isHidden")}),s.ADMINISTRATOR_ID="1",s.GUEST_ID="2",s.MEMBER_ID="3",e.a=s},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(0),r=n(4),o=n(12),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.active=this.isActive(e),void 0===e.force&&(e.force=!0)},e.prototype.view=function(e){var n=t.prototype.view.call(this,e);return n.tag=o.a,n.attrs.active=String(n.attrs.active),n},e.isActive=function(t){return void 0!==t.active?t.active:m.route.get()===t.href},e}(r.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(23),r=n(0),o=n(5),s=n(3),a=n(24),c=n(4),u=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,Object(o.a)(Object(i.a)(e),"alertAttrs",null),e}Object(r.a)(e,t);var n=e.prototype;return n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e),this.attrs.animateShow((function(){return n.onready()}))},n.onbeforeremove=function(){if(!this.attrs.state.modal)return this.attrs.animateHide(),new Promise((function(t){return setTimeout(t,300)}))},n.view=function(){return this.alertAttrs&&(this.alertAttrs.dismissible=!1),m("div",{className:"Modal modal-dialog "+this.className()},m("div",{className:"Modal-content"},this.constructor.isDismissible?m("div",{className:"Modal-close App-backControl"},c.a.component({icon:"fas fa-times",onclick:this.hide.bind(this),className:"Button Button--icon Button--link"})):"",m("form",{onsubmit:this.onsubmit.bind(this)},m("div",{className:"Modal-header"},m("h3",{className:"App-titleControl App-titleControl--text"},this.title())),this.alertAttrs?m("div",{className:"Modal-alert"},a.a.component(this.alertAttrs)):"",this.content())))},n.className=function(){},n.title=function(){},n.content=function(){},n.onsubmit=function(){},n.onready=function(){this.$("form").find("input, select, textarea").first().focus().select()},n.hide=function(){this.attrs.state.close()},n.loaded=function(){this.loading=!1,m.redraw()},n.onerror=function(t){this.alertAttrs=t.alert,m.redraw(),422===t.status&&t.response.errors?this.$("form [name="+t.response.errors[0].source.pointer.replace("/data/attributes/","")+"]").select():this.onready()},e}(s.a);Object(o.a)(u,"isDismissible",!0)},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(0),r=n(3),o=n(7),s=n(8),a=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t),e.initAttrs=function(t){t.className=t.className||"",t.buttonClassName=t.buttonClassName||"",t.menuClassName=t.menuClassName||"",t.label=t.label||"",t.caretIcon=void 0!==t.caretIcon?t.caretIcon:"fas fa-caret-down"};var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.showing=!1},n.view=function(t){var e=t.children?Object(s.a)(t.children):[];return m("div",{className:"ButtonGroup Dropdown dropdown "+this.attrs.className+" itemCount"+e.length+(this.showing?" open":"")},this.getButton(t.children),this.getMenu(e))},n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e),this.$().on("shown.bs.dropdown",(function(){n.showing=!0,n.attrs.onshow&&n.attrs.onshow(),m.redraw();var t=n.$(".Dropdown-menu"),e=t.hasClass("Dropdown-menu--right");t.removeClass("Dropdown-menu--top Dropdown-menu--right"),t.toggleClass("Dropdown-menu--top",t.offset().top+t.height()>$(window).scrollTop()+$(window).height()),t.offset().top<0&&t.removeClass("Dropdown-menu--top"),t.toggleClass("Dropdown-menu--right",e||t.offset().left+t.width()>$(window).scrollLeft()+$(window).width())})),this.$().on("hidden.bs.dropdown",(function(){n.showing=!1,n.attrs.onhide&&n.attrs.onhide(),m.redraw()}))},n.getButton=function(t){return m("button",{className:"Dropdown-toggle "+this.attrs.buttonClassName,"data-toggle":"dropdown",onclick:this.attrs.onclick},this.getButtonContent(t))},n.getButtonContent=function(t){return[this.attrs.icon?Object(o.a)(this.attrs.icon,{className:"Button-icon"}):"",m("span",{className:"Button-label"},this.attrs.label),this.attrs.caretIcon?Object(o.a)(this.attrs.caretIcon,{className:"Button-caret"}):""]},n.getMenu=function(t){return m("ul",{className:"Dropdown-menu dropdown-menu "+this.attrs.menuClassName},t)},e}(r.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var i=n(2),r=n(0),o=n(3),s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},a={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",fadeColor:"transparent",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:"none",position:"absolute"},c=function(){function t(t){void 0===t&&(t={}),this.opts=s({},a,t)}return t.prototype.spin=function(t){var e,n,i,r=this;this.stop(),this.el=document.createElement("div"),this.el.className=this.opts.className,this.el.setAttribute("role","progressbar"),d(this.el,{position:this.opts.position,width:0,zIndex:this.opts.zIndex,left:this.opts.left,top:this.opts.top,transform:"scale("+this.opts.scale+")"}),t&&t.insertBefore(this.el,t.firstChild||null),"undefined"!=typeof requestAnimationFrame?(e=requestAnimationFrame,n=function(){return performance.now()}):(e=function(t){return setTimeout(t,1e3/r.opts.fps)},n=function(){return Date.now()});var o=0,s=function(){var t,a,c=n();if(void 0===i&&(i=c-1),o+=(t=c-i,a=r.opts.speed,t/1e3*a),i=c,o>1&&(o-=Math.floor(o)),r.el.childNodes.length===r.opts.lines)for(var l=0;l<r.opts.lines;l++){var d=u(l,o,r.opts);r.el.childNodes[l].childNodes[0].style.opacity=d.toString()}r.animateId=r.el?e(s):void 0};return function(t,e){var n=Math.round(e.corners*e.width*500)/1e3+"px",i="none";!0===e.shadow?i="0 2px 4px #000":"string"==typeof e.shadow&&(i=e.shadow);for(var r=function(t){for(var e=/^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/,n=[],i=0,r=t.split(",");i<r.length;i++){var o=r[i].match(e);if(null!==o){var s=+o[2],a=+o[5],c=o[4],u=o[7];0!==s||c||(c=u),0!==a||u||(u=c),c===u&&n.push({prefix:o[1]||"",x:s,y:a,xUnits:c,yUnits:u,end:o[8]})}}return n}(i),o=0;o<e.lines;o++){var s=~~(360/e.lines*o+e.rotate),a=d(document.createElement("div"),{position:"absolute",top:-e.width/2+"px",width:e.length+e.width+"px",height:e.width+"px",background:p(e.fadeColor,o),borderRadius:n,transformOrigin:"left",transform:"rotate("+s+"deg) translateX("+e.radius+"px)"}),c=d(document.createElement("div"),{width:"100%",height:"100%",background:p(e.color,o),borderRadius:n,boxShadow:h(r,s),opacity:e.opacity});a.appendChild(c),t.appendChild(a)}}(this.el,this.opts),s(),this},t.prototype.stop=function(){return this.el&&("undefined"!=typeof requestAnimationFrame?cancelAnimationFrame(this.animateId):clearTimeout(this.animateId),this.el.parentNode&&this.el.parentNode.removeChild(this.el),this.el=void 0),this},t}();function u(t,e,n){var i=e-(t+1)/n.lines*n.direction;(i<0||i>1)&&(i+=n.direction);var r=1-i/(n.trail/100);return r<0?n.opacity:r*(1-n.opacity)+n.opacity}function l(t,e){if(void 0!==t.style[e])return e;var n="ms"+e.charAt(0).toUpperCase()+e.slice(1);return void 0!==t.style[n]?n:""}function d(t,e){for(var n in e)t.style[l(t,n)||n]=e[n];return t}function p(t,e){return"string"==typeof t?t:t[e%t.length]}function h(t,e){for(var n=[],i=0,r=t;i<r.length;i++){var o=r[i],s=f(o.x,o.y,e);n.push(o.prefix+s[0]+o.xUnits+" "+s[1]+o.yUnits+o.end)}return n.join(", ")}function f(t,e,n){var i=n*Math.PI/180,r=Math.sin(i),o=Math.cos(i);return[Math.round(1e3*(t*o+e*r))/1e3,Math.round(1e3*(-t*r+e*o))/1e3]}var v=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(){var t=Object(i.a)({},this.attrs);return t.className="LoadingIndicator "+(t.className||""),delete t.size,m("div",t,m.trust("&nbsp;"))},n.oncreate=function(e){t.prototype.oncreate.call(this,e);var n={zIndex:"auto",color:this.$().css("color")};switch(this.attrs.size){case"large":Object(i.a)(n,{lines:10,length:8,width:4,radius:8});break;case"tiny":Object(i.a)(n,{lines:8,length:2,width:2,radius:3});break;default:Object(i.a)(n,{lines:8,length:4,width:3,radius:5})}new c(n).spin(this.element)},e}(o.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(2);function r(t,e){void 0===e&&(e={}),e.className="Avatar "+(e.className||"");var n="",r="undefined"===e.title||e.title;if(r||delete e.title,t){var o=t.displayName()||"?",s=t.avatarUrl();if(r&&(e.title=e.title||o),s)return m("img",Object(i.a)({},e,{src:s,alt:""}));n=o.charAt(0).toUpperCase(),e.style={background:t.color()}}return m("span",e,n)}},function(t,e,n){"use strict";function i(t){var e;if(t instanceof Array)e=t.filter((function(t){return t}));else for(var n in e=[],t)t[n]&&e.push(n);return e.join(" ")}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";function i(t){var e=t&&t.displayName()||app.translator.trans("core.lib.username.deleted_text");return m("span",{className:"username"},e)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i,r=e.slice(0,-1),o=e.slice(-1)[0],s={};return function(){var t=this,e=!1;return r.forEach((function(n){var i="function"==typeof t[n]?t[n]():t[n];s[n]!==i&&(e=!0,s[n]=i)})),e&&(i=o.apply(this,r.map((function(t){return s[t]})))),i}}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(0),r=n(3),o=n(48),s=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),app.previous=app.current,app.current=new o.a(this.constructor,{routeName:this.attrs.routeName}),app.drawer.hide(),app.modal.close(),this.bodyClass="",this.scrollTopOnCreate=!0,this.useBrowserScrollRestoration=!0},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.bodyClass&&$("#app").addClass(this.bodyClass),this.scrollTopOnCreate&&$(window).scrollTop(0),"scrollRestoration"in history&&(history.scrollRestoration=this.useBrowserScrollRestoration?"auto":"manual")},n.onremove=function(){this.bodyClass&&$("#app").removeClass(this.bodyClass)},e}(r.a)},function(t,e,n){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(2),r=n(0),o=n(3),s=n(4),a=n(8),c=n(11),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.view=function(t){var e=Object(i.a)({},this.attrs),n=Object(c.a)(e,"type");e.className="Alert Alert--"+n+" "+(e.className||"");var r=Object(c.a)(e,"content")||t.children,o=Object(c.a)(e,"controls")||[],u=Object(c.a)(e,"dismissible"),l=Object(c.a)(e,"ondismiss"),d=[];return(u||void 0===u)&&d.push(m(s.a,{icon:"fas fa-times",className:"Button Button--link Button--icon Alert-dismiss",onclick:l})),m("div",e,m("span",{className:"Alert-body"},r),m("ul",{className:"Alert-controls"},Object(a.a)(o.concat(d))))},e}(o.a)},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var i=n(98),r="object"==typeof self&&self&&self.Object===Object&&self,o=(i.a||r||Function("return this")()).Symbol;e.a=o},function(t,e,n){"use strict";var i=n(0),r=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.view=function(){return m("li",{className:"Dropdown-separator"})},e}(n(3).a);r.isListItem=!0,e.a=r},function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",r="day",o="week",s="month",a="quarter",c="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},p={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+d(i,2,"0")+":"+d(r,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,s),r=e-i<0,o=t.clone().add(n+(r?-1:1),s);return Number(-(n+(e-i)/(r?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:s,y:c,w:o,d:r,D:"date",h:i,m:n,s:e,ms:t,Q:a}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",m={};m[f]=h;var v=function(t){return t instanceof w},g=function(t,e,n){var i;if(!t)return f;if("string"==typeof t)m[t]&&(i=t),e&&(m[t]=e,i=t);else{var r=t.name;m[r]=t,i=r}return!n&&i&&(f=i),i||!n&&f},b=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},y=p;y.l=g,y.i=v,y.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var w=function(){function d(t){this.$L=this.$L||g(t.locale,null,!0),this.parse(t)}var p=d.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(u);if(i)return n?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return y},p.isValid=function(){return!("Invalid Date"===this.$d.toString())},p.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return b(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<b(t)},p.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},p.year=function(t){return this.$g(t,"$y",c)},p.month=function(t){return this.$g(t,"$M",s)},p.day=function(t){return this.$g(t,"$W",r)},p.date=function(t){return this.$g(t,"$D","date")},p.hour=function(t){return this.$g(t,"$H",i)},p.minute=function(t){return this.$g(t,"$m",n)},p.second=function(t){return this.$g(t,"$s",e)},p.millisecond=function(e){return this.$g(e,"$ms",t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,a){var u=this,l=!!y.u(a)||a,d=y.p(t),p=function(t,e){var n=y.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?n:n.endOf(r)},h=function(t,e){return y.w(u.toDate()[t].apply(u.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},f=this.$W,m=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(d){case c:return l?p(1,0):p(31,11);case s:return l?p(1,m):p(0,m+1);case o:var b=this.$locale().weekStart||0,w=(f<b?f+7:f)-b;return p(l?v-w:v+(6-w),m);case r:case"date":return h(g+"Hours",0);case i:return h(g+"Minutes",1);case n:return h(g+"Seconds",2);case e:return h(g+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(o,a){var u,l=y.p(o),d="set"+(this.$u?"UTC":""),p=(u={},u.day=d+"Date",u.date=d+"Date",u[s]=d+"Month",u[c]=d+"FullYear",u[i]=d+"Hours",u[n]=d+"Minutes",u[e]=d+"Seconds",u[t]=d+"Milliseconds",u)[l],h=l===r?this.$D+(a-this.$W):a;if(l===s||l===c){var f=this.clone().set("date",1);f.$d[p](h),f.init(),this.$d=f.set("date",Math.min(this.$D,f.daysInMonth())).toDate()}else p&&this.$d[p](h);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[y.p(t)]()},p.add=function(t,a){var u,l=this;t=Number(t);var d=y.p(a),p=function(e){var n=b(l);return y.w(n.date(n.date()+Math.round(e*t)),l)};if(d===s)return this.set(s,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===r)return p(1);if(d===o)return p(7);var h=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[d]||1,f=this.$d.getTime()+t*h;return y.w(f,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),r=this.$locale(),o=this.$H,s=this.$m,a=this.$M,c=r.weekdays,u=r.months,d=function(t,i,r,o){return t&&(t[i]||t(e,n))||r[i].substr(0,o)},p=function(t){return y.s(o%12||12,t,"0")},h=r.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:y.s(a+1,2,"0"),MMM:d(r.monthsShort,a,u,3),MMMM:d(u,a),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,c,2),ddd:d(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:y.s(o,2,"0"),h:p(1),hh:p(2),a:h(o,s,!0),A:h(o,s,!1),m:String(s),mm:y.s(s,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return n.replace(l,(function(t,e){return e||f[t]||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,r,u){var l,d=y.p(r),p=b(t),h=6e4*(p.utcOffset()-this.utcOffset()),f=this-p,m=y.m(this,p);return m=(l={},l[c]=m/12,l[s]=m,l[a]=m/3,l[o]=(f-h)/6048e5,l.day=(f-h)/864e5,l[i]=f/36e5,l[n]=f/6e4,l[e]=f/1e3,l)[d]||f,u?m:y.a(m)},p.daysInMonth=function(){return this.endOf(s).$D},p.$locale=function(){return m[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=g(t,e,!0);return i&&(n.$L=i),n},p.clone=function(){return y.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},d}();return b.prototype=w.prototype,b.extend=function(t,e){return t(e,w,b),b},b.locale=g,b.isDayjs=v,b.unix=function(t){return b(1e3*t)},b.en=m[f],b.Ls=m,b}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(0),r=n(3),o=n(8),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.view=function(t){return m("fieldset",{className:this.attrs.className},m("legend",null,this.attrs.label),m("ul",null,Object(o.a)(t.children)))},e}(r.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(28),r=n.n(i);n(75);function o(t){var e=r()(t),n=r()();e.isAfter(n)&&(e=n);return e.diff(r()())<-2592e6?e.year()===r()().year()?e.format("D MMM"):e.format("ll"):e.fromNow()}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n(2),r=n(0),o=n(3),s=n(7),a=n(11),c=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(){var t=Object(i.a)({},this.attrs),e=Object(a.a)(t,"type"),n=Object(a.a)(t,"icon");return t.className="Badge "+(e?"Badge--"+e:"")+" "+(t.className||""),t.title=Object(a.a)(t,"label")||"",m("span",t,n?Object(s.a)(n,{className:"Badge-icon"}):m.trust("&nbsp;"))},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.attrs.label&&this.$().tooltip()},e}(o.a)},function(t,e,n){"use strict";function i(t,e,n,i,r,o){return{tag:t,key:e,attrs:n,children:i,text:r,dom:o,domSize:void 0,state:void 0,events:void 0,instance:void 0}}i.normalize=function(t){return Array.isArray(t)?i("[",void 0,void 0,i.normalizeChildren(t),void 0,void 0):null==t||"boolean"==typeof t?null:"object"==typeof t?t:i("#",void 0,void 0,String(t),void 0,void 0)},i.normalizeChildren=function(t){var e=[];if(t.length){for(var n=null!=t[0]&&null!=t[0].key,r=1;r<t.length;r++)if((null!=t[r]&&null!=t[r].key)!==n)throw new TypeError("Vnodes must either always have keys or never have keys!");for(r=0;r<t.length;r++)e[r]=i.normalize(t[r])}return e},t.exports=i},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(0),r=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.className=(e.className||"")+" Checkbox--switch"},e.prototype.getDisplay=function(){return this.attrs.loading?t.prototype.getDisplay.call(this):""},e}(n(47).a)},function(t,e,n){"use strict";function i(t,e,n){return void 0===n&&(n=0),(n>0?"...":"")+t.substring(n,n+e)+(t.length>n+e?"...":"")}function r(t){return t.toLowerCase().replace(/[^a-z0-9]/gi,"-").replace(/-+/g,"-").replace(/-$|^-/g,"")}function o(t){var e=t.replace(/(<\/p>|<br>)/g,"$1 &nbsp;").replace(/<img\b[^>]*>/gi," "),n=$("<div/>").html(e);return n.find(o.removeSelectors.join(",")).remove(),n.text().replace(/\s+/g," ").trim()}function s(t){return t.substr(0,1).toUpperCase()+t.substr(1)}n.r(e),n.d(e,"truncate",(function(){return i})),n.d(e,"slug",(function(){return r})),n.d(e,"getPlainContent",(function(){return o})),n.d(e,"ucfirst",(function(){return s})),o.removeSelectors=["blockquote","script"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(0),r=n(16),o=n(7);function s(t){var e=t.tag;return("string"!=typeof e||"a"===e||"button"===e)&&("initAttrs"in e&&e.initAttrs(t.attrs),"isActive"in e?e.isActive(t.attrs):t.attrs.active)}var a=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.initAttrs=function(e){e.caretIcon=void 0!==e.caretIcon?e.caretIcon:"fas fa-sort",t.initAttrs.call(this,e),e.className+=" Dropdown--select"},e.prototype.getButtonContent=function(t){var e=t.find(s),n=e&&e.children||this.attrs.defaultLabel;return n instanceof Array&&(n=n[0]),[m("span",{className:"Button-label"},n),Object(o.a)(this.attrs.caretIcon,{className:"Button-caret"})]},e}(r.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(0),r=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.group&&(e.icon=e.group.icon(),e.style={backgroundColor:e.group.color()},e.label=void 0===e.label?e.group.nameSingular():e.label,e.type="group--"+e.group.id(),delete e.group)},e}(n(31).a)},function(t,e,n){"use strict";e.a=function(t,e){return function(){e(this.getAttribute(t)||this[t])}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(34);function r(t,e,n){if(!e&&!n)return t;var r=e instanceof RegExp?e:new RegExp(e,"gi"),o=t,s=0;return n&&(e&&(s=Math.max(0,t.search(r)-n/2)),o=Object(i.truncate)(o,n,s)),o=$("<div/>").text(o).html(),e&&(o=o.replace(r,"<mark>$&</mark>")),m.trust(o)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(0),r=n(3),o=n(7),s=n(37),a=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.view=function(){var t=this.attrs,e=t.options,n=t.onchange,i=t.value,r=t.disabled;return m("span",{className:"Select"},m("select",{className:"Select-input FormControl",onchange:n?Object(s.a)("value",n.bind(this)):void 0,value:i,disabled:r},Object.keys(e).map((function(t){return m("option",{value:t},e[t])}))),Object(o.a)("fas fa-sort",{className:"Select-caret"}))},e}(r.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},r=function(){function t(t){this.callback=t,this.ticking=!1}var e=t.prototype;return e.loop=function(){var t=this;this.ticking||(i((function(){t.update(),t.ticking=!1})),this.ticking=!0)},e.update=function(){this.callback(window.pageYOffset)},e.start=function(){this.active||window.addEventListener("scroll",this.active=this.loop.bind(this),{passive:!0})},e.stop=function(){window.removeEventListener("scroll",this.active),this.active=null},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(2),r=n(5),o=function(){function t(t,e){Object(r.a)(this,"component",void 0),Object(r.a)(this,"routeName",void 0),this.component=t,this.routeName=e}var e=t.prototype;return e.makeKey=function(){return this.routeName+JSON.stringify(m.route.param())},e.makeAttrs=function(t){return Object(i.a)({},t.attrs,{routeName:this.routeName})},e.onmatch=function(t,e,n){return this.component},e.render=function(t){return[Object(i.a)({},t,{attrs:this.makeAttrs(t),key:this.makeKey()})]},t}()},function(t,e,n){"use strict";n.r(e),n.d(e,"extend",(function(){return r})),n.d(e,"override",(function(){return o}));var i=n(2);function r(t,e,n){var r=t[e];t[e]=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var o=r?r.apply(this,e):void 0;return n.apply(this,[o].concat(e)),o},Object(i.a)(t[e],r)}function o(t,e,n){var r=t[e];t[e]=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,[r.bind(this)].concat(e))},Object(i.a)(t[e],r)}},function(t,e,n){"use strict";function i(t,e){return t&&(t===e||t.prototype instanceof e)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(28),r=n.n(i),o=n(30);function s(t){var e=r()(t),n=e.format(),i=e.format("LLLL"),s=Object(o.a)(t);return m("time",{pubdate:!0,datetime:n,title:i,"data-humantime":!0},s)}},function(t,e,n){"use strict";e.a=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(2),r=n(0),o=n(1),s=n(21),a=n(6),c=n(31),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e}(o.a);Object(i.a)(u.prototype,{title:o.a.attribute("title"),slug:o.a.attribute("slug"),createdAt:o.a.attribute("createdAt",o.a.transformDate),user:o.a.hasOne("user"),firstPost:o.a.hasOne("firstPost"),lastPostedAt:o.a.attribute("lastPostedAt",o.a.transformDate),lastPostedUser:o.a.hasOne("lastPostedUser"),lastPost:o.a.hasOne("lastPost"),lastPostNumber:o.a.attribute("lastPostNumber"),commentCount:o.a.attribute("commentCount"),replyCount:Object(s.a)("commentCount",(function(t){return Math.max(0,t-1)})),posts:o.a.hasMany("posts"),mostRelevantPost:o.a.hasOne("mostRelevantPost"),lastReadAt:o.a.attribute("lastReadAt",o.a.transformDate),lastReadPostNumber:o.a.attribute("lastReadPostNumber"),isUnread:Object(s.a)("unreadCount",(function(t){return!!t})),isRead:Object(s.a)("unreadCount",(function(t){return app.session.user&&!t})),hiddenAt:o.a.attribute("hiddenAt",o.a.transformDate),hiddenUser:o.a.hasOne("hiddenUser"),isHidden:Object(s.a)("hiddenAt",(function(t){return!!t})),canReply:o.a.attribute("canReply"),canRename:o.a.attribute("canRename"),canHide:o.a.attribute("canHide"),canDelete:o.a.attribute("canDelete"),removePost:function(t){var e=this.data.relationships,n=e&&e.posts;n&&n.data.some((function(e,i){if(t===e.id)return n.data.splice(i,1),!0}))},unreadCount:function(){var t=app.session.user;if(t&&t.markedAllAsReadAt()<this.lastPostedAt()){var e=Math.max(0,this.lastPostNumber()-(this.lastReadPostNumber()||0));return Math.min(e,this.commentCount())}return 0},badges:function(){var t=new a.a;return this.isHidden()&&t.add("hidden",m(c.a,{type:"hidden",icon:"fas fa-trash",label:app.translator.trans("core.lib.badge.hidden_tooltip")})),t},postIds:function(){var t=this.data.relationships.posts;return t?t.data.map((function(t){return t.id})):[]}})},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n(0),r=n(3),o=n(17),s=n(7),a=n(19),c=n(37),u=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.view=function(t){"0"===this.attrs.state&&(this.attrs.state=!1);var e=Object(a.a)(["Checkbox",this.attrs.state?"on":"off",this.attrs.className,this.attrs.loading&&"loading",this.attrs.disabled&&"disabled"]);return m("label",{className:e},m("input",{type:"checkbox",checked:this.attrs.state,disabled:this.attrs.disabled,onchange:Object(c.a)("checked",this.onchange.bind(this))}),m("div",{className:"Checkbox-display"},this.getDisplay()),t.children)},n.getDisplay=function(){return this.attrs.loading?m(o.a,{size:"tiny"}):Object(s.a)(this.attrs.state?"fas fa-check":"fas fa-times")},n.onchange=function(t){this.attrs.onchange&&this.attrs.onchange(t,this)},e}(r.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(43),r=function(){function t(t,e){void 0===e&&(e={}),this.type=t,this.data=e}var e=t.prototype;return e.matches=function(t,e){var n=this;return void 0===e&&(e={}),!!Object(i.a)(this.type,t)&&Object.keys(e).every((function(t){return n.data[t]===e[t]}))},e.get=function(t){return this.data[t]},e.set=function(t,e){this.data[t]=e},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(5),r=function(t,e,n,r){Object(i.a)(this,"status",void 0),Object(i.a)(this,"options",void 0),Object(i.a)(this,"xhr",void 0),Object(i.a)(this,"responseText",void 0),Object(i.a)(this,"response",void 0),Object(i.a)(this,"alert",void 0),this.status=t,this.responseText=e,this.options=n,this.xhr=r;try{this.response=JSON.parse(e)}catch(t){this.response=null}this.alert=null}},function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(0),r=n(3),o=n(4),s=n(14),a=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.view=function(){var t=app,e=t.history,n=t.pane;return m("div",{className:"Navigation ButtonGroup "+(this.attrs.className||""),onmouseenter:n&&n.show.bind(n),onmouseleave:n&&n.onmouseleave.bind(n)},e.canGoBack()?[this.getBackButton(),this.getPaneButton()]:this.getDrawerButton())},n.getBackButton=function(){var t=app.history,e=t.getPrevious()||{};return s.a.component({className:"Button Navigation-back Button--icon",href:t.backUrl(),icon:"fas fa-chevron-left",title:e.title,onclick:function(e){e.shiftKey||e.ctrlKey||e.metaKey||2===e.which||(e.preventDefault(),t.back())}})},n.getPaneButton=function(){var t=app.pane;return t&&t.active?o.a.component({className:"Button Button--icon Navigation-pin"+(t.pinned?" active":""),onclick:t.togglePinned.bind(t),icon:"fas fa-thumbtack"}):""},n.getDrawerButton=function(){if(!this.attrs.drawer)return"";var t=app.drawer,e=app.session.user;return o.a.component({className:"Button Button--icon Navigation-drawer"+(e&&e.newNotificationCount()?" new":""),onclick:function(e){e.stopPropagation(),t.show()},icon:"fas fa-bars"})},e}(r.a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(2);function r(t,e,n){void 0===e&&(e=null),void 0===n&&(n={});var r=Object(i.a)({},n);r.state=r.state||{},r.state.key=Date.now(),m.route.set(t,e,r)}},function(t,e,n){"use strict";function i(t){var e=t.m,n=function t(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];var s=e.apply(this,arguments);return s.attrs||(s.attrs={}),s.attrs.bidi&&t.bidi(s,s.attrs.bidi),s};Object.keys(e).forEach((function(t){return n[t]=e[t]})),t.m=n}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(){function t(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.callbacks=e,this.data={},this.needsRebuild()}var e=t.prototype;return e.needsRebuild=function(){var t=this,e=!1;return this.callbacks.forEach((function(n,i){var r=n();r!==t.data[i]&&(t.data[i]=r,e=!0)})),e},e.check=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.callbacks=this.callbacks.concat(e),this.needsRebuild()},e.invalidate=function(){this.data={}},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(0),r=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.view=function(){return m("div",{className:"Placeholder"},m("p",null,this.attrs.text))},e}(n(3).a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(2),r=n(0),o=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.view=function(){var t=this.attrs.state.modal;return m("div",{className:"ModalManager modal fade"},t?t.componentClass.component(Object(i.a)({},t.attrs,{animateShow:this.animateShow.bind(this),animateHide:this.animateHide.bind(this),state:this.attrs.state})):"")},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.$().on("hidden.bs.modal",this.attrs.state.close.bind(this.attrs.state))},n.animateShow=function(t){var e=!!this.attrs.state.modal.componentClass.isDismissible;this.$().hasClass("in")?t():this.$().one("shown.bs.modal",t).modal({backdrop:e||"static",keyboard:e}).modal("show")},n.animateHide=function(){this.$().modal("hide")},e}(n(3).a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(2),r=n(0),o=n(3),s=(n(24),function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state=this.attrs.state},n.view=function(){var t=this;return m("div",{className:"AlertManager"},Object.entries(this.state.getActiveAlerts()).map((function(e){var n=e[0],r=e[1];return m("div",{className:"AlertManager-alert"},m(r.componentClass,Object(i.a)({},r.attrs,{ondismiss:t.state.dismiss.bind(t.state,n)}),r.children))})))},e}(o.a))},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(0),r=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var n=e.prototype;return n.className=function(){return"RequestErrorModal Modal--large"},n.title=function(){return this.attrs.error.xhr?this.attrs.error.xhr.status+" "+this.attrs.error.xhr.statusText:""},n.content=function(){var t,e=this.attrs,n=e.error,i=e.formattedError;if(i)t=i.join("\n\n");else try{var r=n.response||JSON.parse(n.responseText);t=JSON.stringify(r,null,2)}catch(e){t=n.responseText}return m("div",{className:"Modal-body"},m("pre",null,this.attrs.error.options.method," ",this.attrs.error.options.url,m("br",null),m("br",null),t))},e}(n(15).a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(2),r=n(20),o=n(11),s=function(){function t(){this.translations={},this.locale=null}var e=t.prototype;return e.addTranslations=function(t){Object(i.a)(this.translations,t)},e.trans=function(t,e){var n=this.translations[t];return n?this.apply(n,e||{}):t},e.transChoice=function(t,e,n){var i=this.translations[t];return i?(e=parseInt(e,10),i=this.pluralize(i,e),this.apply(i,n||{})):t},e.apply=function(t,e){if("user"in e){var n=Object(o.a)(e,"user");e.username||(e.username=Object(r.a)(n))}t=t.split(new RegExp("({[a-z0-9_]+}|</?[a-z0-9_]+>)","gi"));var i=[],s=[i];return t.forEach((function(t){var n=t.match(new RegExp("{([a-z0-9_]+)}|<(/?)([a-z0-9_]+)>","i"));if(n){if(n[1])s[0].push(e[n[1]]);else if(n[3])if(n[2]){var i,r=s[0].splice(0,s[0].length);(i=s[0]).push.apply(i,m.fragment(r).children),s.shift()}else{var o=e[n[3]]||{tag:n[3],children:[]};s[0].push(o),s.unshift(o.children||o)}}else s[0].push(t)})),i.filter((function(t){return t}))},e.pluralize=function(t,e){var n=this,i=new RegExp(/^\w+\: +(.+)$/),r=new RegExp(/^\s*((\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]]))\s?(.+?)$/),o=new RegExp(/^\s*(\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]])/),s=[],a=[];return t.split("|").forEach((function(t){if(r.test(t)){var e=t.match(r);a[e[0]]=e[e.length-1]}else if(i.test(t)){var n=t.match(i);s.push(n[1])}else s.push(t)})),a.forEach((function(t,i){if(o.test(i)){var r=i.match(o);if(r[1]){var s=r[2].split(",");for(var c in s)if(e==s[c])return a[i]}else{var u=n.convertNumber(r[4]),l=n.convertNumber(r[5]);if(("["===r[3]?e>=u:e>u)&&("]"===r[6]?e<=l:e<l))return a[i]}}})),s[this.pluralPosition(e,this.locale)]||s[0]||void 0},e.convertNumber=function(t){return"-Inf"===t?Number.NEGATIVE_INFINITY:"+Inf"===t||"Inf"===t?Number.POSITIVE_INFINITY:parseInt(t,10)},e.pluralPosition=function(t,e){switch("pt_BR"===e&&(e="xbr"),e.length>3&&(e=e.split("_")[0]),e){case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"vi":case"zh":return 0;case"af":case"az":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"tr":case"ur":case"zu":return 1==t?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return 0===t||1==t?0:1;case"be":case"bs":case"hr":case"ru":case"sr":case"uk":return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2;case"cs":case"sk":return 1==t?0:t>=2&&t<=4?1:2;case"ga":return 1==t?0:2==t?1:2;case"lt":return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2;case"sl":return t%100==1?0:t%100==2?1:t%100==3||t%100==4?2:3;case"mk":return t%10==1?0:1;case"mt":return 1==t?0:0===t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3;case"lv":return 0===t?0:t%10==1&&t%100!=11?1:2;case"pl":return 1==t?0:t%10>=2&&t%10<=4&&(t%100<12||t%100>14)?1:2;case"cy":return 1==t?0:2==t?1:8==t||11==t?2:3;case"ro":return 1==t?0:0===t||t%100>0&&t%100<20?1:2;case"ar":return 0===t?0:1==t?1:2==t?2:t>=3&&t<=10?3:t>=11&&t<=99?4:5;default:return 0}},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(2),r=function(){function t(t){this.data={},this.models=t}var e=t.prototype;return e.pushPayload=function(t){t.included&&t.included.map(this.pushObject.bind(this));var e=t.data instanceof Array?t.data.map(this.pushObject.bind(this)):this.pushObject(t.data);return e.payload=t,e},e.pushObject=function(t){if(!this.models[t.type])return null;var e=this.data[t.type]=this.data[t.type]||{};return e[t.id]?e[t.id].pushData(t):e[t.id]=this.createRecord(t.type,t),e[t.id].exists=!0,e[t.id]},e.find=function(t,e,n,r){void 0===n&&(n={}),void 0===r&&(r={});var o=n,s=app.forum.attribute("apiUrl")+"/"+t;return e instanceof Array?s+="?filter[id]="+e.join(","):"object"==typeof e?o=e:e&&(s+="/"+e),app.request(Object(i.a)({method:"GET",url:s,params:o},r)).then(this.pushPayload.bind(this))},e.getById=function(t,e){return this.data[t]&&this.data[t][e]},e.getBy=function(t,e,n){return this.all(t).filter((function(t){return t[e]()===n}))[0]},e.all=function(t){var e=this.data[t];return e?Object.keys(e).map((function(t){return e[t]})):[]},e.remove=function(t){delete this.data[t.data.type][t.id()]},e.createRecord=function(t,e){return void 0===e&&(e={}),e.type=e.type||t,new this.models[t](e,this)},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(2),r=function(){function t(t,e){this.user=t,this.csrfToken=e}var e=t.prototype;return e.login=function(t,e){return void 0===e&&(e={}),app.request(Object(i.a)({method:"POST",url:app.forum.attribute("baseUrl")+"/login",body:t},e))},e.logout=function(){window.location=app.forum.attribute("baseUrl")+"/logout?token="+this.csrfToken},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(){function t(){var t=this;$("#content").click((function(e){t.isOpen()&&(e.preventDefault(),t.hide())}))}var e=t.prototype;return e.isOpen=function(){return $("#app").hasClass("drawerOpen")},e.hide=function(){$("#app").removeClass("drawerOpen"),this.$backdrop&&this.$backdrop.remove()},e.show=function(){var t=this;$("#app").addClass("drawerOpen"),this.$backdrop=$("<div/>").addClass("drawer-backdrop fade").appendTo("body").click((function(){return t.hide()})),setTimeout((function(){return t.$backdrop.addClass("in")}))},t}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(41);function r(t,e){void 0===e&&(e="");var n={};for(var r in t){var o=t[r];if("resolver"in o)n[e+o.path]=o.resolver;else{if(!("component"in o))throw new Error("Either a resolver or a component must be provided for the route ["+r+"]");var s="resolverClass"in o?o.resolverClass:i.a;n[e+o.path]=new s(o.component,r)}}return n}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(30);function r(){$("[data-humantime]").each((function(){var t=$(this),e=Object(i.a)(t.attr("datetime"));t.html(e)}))}function o(){setInterval(r,1e4)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(0),r=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.apiEndpoint=function(){return"/"},e}(n(1).a)},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(2),r=n(0),o=n(1),s=n(66),a=n(6),c=n(21),u=n(36),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e}(o.a);Object(i.a)(l.prototype,{username:o.a.attribute("username"),slug:o.a.attribute("slug"),displayName:o.a.attribute("displayName"),email:o.a.attribute("email"),isEmailConfirmed:o.a.attribute("isEmailConfirmed"),password:o.a.attribute("password"),avatarUrl:o.a.attribute("avatarUrl"),preferences:o.a.attribute("preferences"),groups:o.a.hasMany("groups"),joinTime:o.a.attribute("joinTime",o.a.transformDate),lastSeenAt:o.a.attribute("lastSeenAt",o.a.transformDate),markedAllAsReadAt:o.a.attribute("markedAllAsReadAt",o.a.transformDate),unreadNotificationCount:o.a.attribute("unreadNotificationCount"),newNotificationCount:o.a.attribute("newNotificationCount"),discussionCount:o.a.attribute("discussionCount"),commentCount:o.a.attribute("commentCount"),canEdit:o.a.attribute("canEdit"),canDelete:o.a.attribute("canDelete"),avatarColor:null,color:Object(c.a)("username","avatarUrl","avatarColor",(function(t,e,n){return n?"rgb("+n.join(", ")+")":e?(this.calculateAvatarColor(),""):"#"+Object(s.a)(t)})),isOnline:function(){return dayjs().subtract(5,"minutes").isBefore(this.lastSeenAt())},badges:function(){var t=new a.a,e=this.groups();return e&&e.forEach((function(e){t.add("group"+e.id(),u.a.component({group:e}))})),t},calculateAvatarColor:function(){var t=new Image,e=this;t.onload=function(){var t=new ColorThief;e.avatarColor=t.getColor(this),e.freshness=new Date,m.redraw()},t.crossOrigin="anonymous",t.src=this.avatarUrl()},savePreferences:function(t){var e=this.preferences();return Object(i.a)(e,t),this.save({preferences:e})}})},function(t,e,n){"use strict";function i(t){for(var e=0,n=0;n<t.length;n++)e+=t.charCodeAt(n);var i=function(t,e,n){var i,r,o,s=Math.floor(6*t),a=6*t-s,c=n*(1-e),u=n*(1-a*e),l=n*(1-(1-a)*e);switch(s%6){case 0:i=n,r=l,o=c;break;case 1:i=u,r=n,o=c;break;case 2:i=c,r=n,o=l;break;case 3:i=c,r=u,o=n;break;case 4:i=l,r=c,o=n;break;case 5:i=n,r=c,o=u}return{r:Math.floor(255*i),g:Math.floor(255*r),b:Math.floor(255*o)}}(e%360/360,.3,.9);return""+i.r.toString(16)+i.g.toString(16)+i.b.toString(16)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n(2),r=n(0),o=n(1),s=n(21),a=n(34),c=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e}(o.a);Object(i.a)(c.prototype,{number:o.a.attribute("number"),discussion:o.a.hasOne("discussion"),createdAt:o.a.attribute("createdAt",o.a.transformDate),user:o.a.hasOne("user"),contentType:o.a.attribute("contentType"),content:o.a.attribute("content"),contentHtml:o.a.attribute("contentHtml"),contentPlain:Object(s.a)("contentHtml",a.getPlainContent),editedAt:o.a.attribute("editedAt",o.a.transformDate),editedUser:o.a.hasOne("editedUser"),isEdited:Object(s.a)("editedAt",(function(t){return!!t})),hiddenAt:o.a.attribute("hiddenAt",o.a.transformDate),hiddenUser:o.a.hasOne("hiddenUser"),isHidden:Object(s.a)("hiddenAt",(function(t){return!!t})),canEdit:o.a.attribute("canEdit"),canHide:o.a.attribute("canHide"),canDelete:o.a.attribute("canDelete")})},function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(2),r=n(0),o=n(1),s=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e}(o.a);Object(i.a)(s.prototype,{contentType:o.a.attribute("contentType"),content:o.a.attribute("content"),createdAt:o.a.attribute("createdAt",o.a.transformDate),isRead:o.a.attribute("isRead"),user:o.a.hasOne("user"),fromUser:o.a.hasOne("fromUser"),subject:o.a.hasOne("subject")})},function(t,e,n){"use strict";e.a=function(t,e){var n=new RegExp("(\\w+\\/)?("+e+"|common)\\/");return new Proxy(t,{get:function(t,e){return t[e]||t[e.replace(n,"$1")]}})}},function(t,e,n){"use strict";n.d(e,"a",(function(){return Y}));var i=n(2),r=n(5),o=n(6),s=n(4),a=n(55),c=n(56),u=n(57),l=n(58),d=n(59),p=n(60),h=n(11),f=n(61),v=n(62),g=n(49),b=n(40),y=n(63),w=n(42),x=n(64),N=n(65),C=n(46),O=n(67),T=n(13),k=n(68);var j=function(t,e){for(var n=-1,i=e.length,r=t.length;++n<i;)t[r+n]=e[n];return t},S=n(26),A=n(84),P=n(45);var E=function(t){return Object(P.a)(t)&&"[object Arguments]"==Object(A.a)(t)},D=Object.prototype,_=D.hasOwnProperty,I=D.propertyIsEnumerable,M=E(function(){return arguments}())?E:function(t){return Object(P.a)(t)&&_.call(t,"callee")&&!I.call(t,"callee")},L=n(78),R=S.a?S.a.isConcatSpreadable:void 0;var B=function(t){return Object(L.a)(t)||M(t)||!!(R&&t&&t[R])};var H=function t(e,n,i,r,o){var s=-1,a=e.length;for(i||(i=B),o||(o=[]);++s<a;){var c=e[s];n>0&&i(c)?n>1?t(c,n-1,i,r,o):j(o,c):r||(o[o.length]=c)}return o};var U=function(t){return(null==t?0:t.length)?H(t,1/0):[]},F=n(48),q=n(15),z=function(){function t(){this.modal=null}var e=t.prototype;return e.show=function(t,e){if(!(t.prototype instanceof q.a))throw console.error("The ModalManager can only show Modals"),new Error("The ModalManager can only show Modals");if(t.init)throw console.error("The componentClass parameter must be a modal class, not a modal instance. Whichever extension triggered this modal should be updated to comply with beta 14."),new Error("The componentClass parameter must be a modal class, not a modal instance. Whichever extension triggered this modal should be updated to comply with beta 14.");clearTimeout(this.closeTimeout),this.modal={componentClass:t,attrs:e},m.redraw.sync()},e.close=function(){var t=this;this.modal&&(this.closeTimeout=setTimeout((function(){t.modal=null,m.redraw()})))},t}(),W=n(24),V=function(){function t(){Object(r.a)(this,"activeAlerts",{}),Object(r.a)(this,"alertId",0)}var e=t.prototype;return e.getActiveAlerts=function(){return this.activeAlerts},e.show=function(t,e,n){var i,r=W.a,o={};if(1==arguments.length?i=t:2==arguments.length?(o=t,i=e):3==arguments.length&&(r=t,o=e,i=n),o===W.a||o instanceof W.a)throw console.error("The AlertManager can only show Alerts. Whichever extension triggered this alert should be updated to comply with beta 14."),new Error("The AlertManager can only show Alerts. Whichever extension triggered this alert should be updated to comply with beta 14.");return this.activeAlerts[++this.alertId]={children:i,attrs:o,componentClass:r},m.redraw(),this.alertId},e.dismiss=function(t){t&&t in this.activeAlerts&&(delete this.activeAlerts[t],m.redraw())},e.clear=function(){this.activeAlerts={},m.redraw()},t}(),Y=function(){function t(){Object(r.a)(this,"forum",null),Object(r.a)(this,"routes",{}),Object(r.a)(this,"initializers",new o.a),Object(r.a)(this,"session",null),Object(r.a)(this,"translator",new l.a),Object(r.a)(this,"store",new d.a({forums:x.a,users:N.a,discussions:C.a,posts:O.a,groups:T.a,notifications:k.a})),Object(r.a)(this,"cache",{}),Object(r.a)(this,"booted",!1),Object(r.a)(this,"requestErrorAlert",null),Object(r.a)(this,"current",new F.a(null)),Object(r.a)(this,"previous",new F.a(null)),Object(r.a)(this,"modal",new z),Object(r.a)(this,"alerts",new V),Object(r.a)(this,"data",void 0),Object(r.a)(this,"title",""),Object(r.a)(this,"titleCount",0)}var e=t.prototype;return e.load=function(t){this.data=t,this.translator.locale=t.locale},e.boot=function(){var t=this;this.initializers.toArray().forEach((function(e){return e(t)})),this.store.pushPayload({data:this.data.resources}),this.forum=this.store.getById("forums",1),this.session=new p.a(this.store.getById("users",this.data.session.userId),this.data.session.csrfToken),this.mount()},e.bootExtensions=function(t){var e=this;Object.keys(t).forEach((function(n){var i=t[n],r=U(i.extend),o=Array.isArray(r),s=0;for(r=o?r:r[Symbol.iterator]();;){var a;if(o){if(s>=r.length)break;a=r[s++]}else{if((s=r.next()).done)break;a=s.value}a.extend(e,{name:n,exports:i})}}))},e.mount=function(t){var e=this;void 0===t&&(t=""),m.mount(document.getElementById("modal"),{view:function(){return a.a.component({state:e.modal})}}),m.mount(document.getElementById("alerts"),{view:function(){return c.a.component({state:e.alerts})}}),this.drawer=new f.a,m.route(document.getElementById("content"),t+"/",Object(v.a)(this.routes,t));var n=new b.a((function(t){var e=$("#app"),n=e.offset().top;e.toggleClass("affix",t>=n).toggleClass("scrolled",t>n),$(".App-header").toggleClass("navbar-fixed-top",t>=n)}));n.start(),n.update(),$((function(){$("body").addClass("ontouchstart"in window?"touch":"no-touch")})),Object(y.a)()},e.preloadedApiDocument=function(){if(this.data.apiDocument){var t=this.store.pushPayload(this.data.apiDocument);return this.data.apiDocument=null,t}return null},e.screen=function(){return getComputedStyle(document.documentElement).getPropertyValue("--flarum-screen")},e.setTitle=function(t){this.title=t,this.updateTitle()},e.setTitleCount=function(t){this.titleCount=t,this.updateTitle()},e.updateTitle=function(){var t=this.titleCount?"("+this.titleCount+") ":"",e=this.title&&m.route.get()!==this.forum.attribute("basePath")+"/"?this.title+" - ":"",n=this.forum.attribute("title");document.title=t+e+n},e.request=function(t){var e=this,n=Object(i.a)({},t);if(n.background=n.background||!0,Object(w.extend)(n,"config",(function(t,n){return n.setRequestHeader("X-CSRF-Token",e.session.csrfToken)})),"GET"!==n.method&&"POST"!==n.method){var r=n.method;Object(w.extend)(n,"config",(function(t,e){return e.setRequestHeader("X-HTTP-Method-Override",r)})),n.method="POST"}n.deserialize=n.deserialize||function(t){return t},n.errorHandler=n.errorHandler||function(t){throw t};var o=n.extract;return n.extract=function(t){var e;e=o?o(t.responseText):t.responseText||null;var i=t.status;if(i<200||i>299)throw new g.a(i,e,n,t);if(t.getResponseHeader){var r=t.getResponseHeader("X-CSRF-Token");r&&(app.session.csrfToken=r)}try{return JSON.parse(e)}catch(i){throw new g.a(500,e,n,t)}},this.requestErrorAlert&&this.alerts.dismiss(this.requestErrorAlert),m.request(n).then((function(t){return t}),(function(t){var i;switch(t.status){case 422:i=t.response.errors.map((function(t){return[t.detail,m("br",null)]})).reduce((function(t,e){return t.concat(e)}),[]).slice(0,-1);break;case 401:case 403:i=app.translator.trans("core.lib.error.permission_denied_message");break;case 404:case 410:i=app.translator.trans("core.lib.error.not_found_message");break;case 429:i=app.translator.trans("core.lib.error.rate_limit_exceeded_message");break;default:i=app.translator.trans("core.lib.error.generic_message")}var r=app.forum.attribute("debug"),o=t.response&&t.response.errors,a=Array.isArray(o)&&o[0]&&o[0].detail&&o.map((function(t){return decodeURI(t.detail)}));t.alert={type:"error",content:i,controls:r&&[m(s.a,{className:"Button Button--link",onclick:e.showDebug.bind(e,t,a)},"Debug")]};try{n.errorHandler(t)}catch(t){if(r&&t.xhr){var c,u=t.options,l=u.method,d=u.url,p=t.xhr.status,h=void 0===p?"":p;console.group(l+" "+d+" "+h),(c=console).error.apply(c,a||[t]),console.groupEnd()}e.requestErrorAlert=e.alerts.show(t.alert,t.alert.content)}return Promise.reject(t)}))},e.showDebug=function(t,e){this.alerts.dismiss(this.requestErrorAlert),this.modal.show(u.a,{error:t,formattedError:e})},e.route=function(t,e){void 0===e&&(e={});var n=this.routes[t];if(!n)throw new Error("Route '"+t+"' does not exist");var i=n.path.replace(/:([^\/]+)/g,(function(t,n){return Object(h.a)(e,n)}));for(var r in e)e.hasOwnProperty(r)&&!e[r]&&delete e[r];var o=m.buildQueryString(e);return(""===m.route.prefix?this.forum.attribute("basePath"):"")+i+(o?"?"+o:"")},t}()},function(t,e,n){"use strict";function i(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";var i=n(91);t.exports=n(111)(i,requestAnimationFrame,console)},function(t,e,n){"use strict";var i=n(92),r=n(93);t.exports=function(t,e){if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Template parameter names *must* be separated");if(null==e)return t;var n=t.indexOf("?"),o=t.indexOf("#"),s=o<0?t.length:o,a=n<0?s:n,c=t.slice(0,a),u={};r(u,e);var l=c.replace(/:([^\/\.-]+)(\.{3})?/g,(function(t,n,i){return delete u[n],null==e[n]?t:i?e[n]:encodeURIComponent(String(e[n]))})),d=l.indexOf("?"),p=l.indexOf("#"),h=p<0?l.length:p,f=d<0?h:d,m=l.slice(0,f);n>=0&&(m+=t.slice(n,s)),d>=0&&(m+=(n<0?"?":"&")+l.slice(d,h));var v=i(u);return v&&(m+=(n<0&&d<0?"?":"&")+v),o>=0&&(m+=t.slice(o)),p>=0&&(m+=(o<0?"":"&")+l.slice(p)),m}},function(t,e,n){"use strict";var i=n(94);t.exports=function(t){var e=t.indexOf("?"),n=t.indexOf("#"),r=n<0?t.length:n,o=e<0?r:e,s=t.slice(0,o).replace(/\/{2,}/g,"/");return s?("/"!==s[0]&&(s="/"+s),s.length>1&&"/"===s[s.length-1]&&(s=s.slice(0,-1))):s="/",{path:s,params:e<0?{}:i(t.slice(e+1,r))}}},function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var i=e.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=r;var o=function(e,i,o,s){for(var a,c,u,l=o.$locale().relativeTime||r,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],p=d.length,h=0;h<p;h+=1){var f=d[h];f.d&&(a=s?n(e).diff(o,f.d,!0):o.diff(e,f.d,!0));var m=(t.rounding||Math.round)(Math.abs(a));if(u=a>0,m<=f.r||!f.r){m<=1&&h>0&&(f=d[h-1]);var v=l[f.l];c="string"==typeof v?v.replace("%d",m):v(m,i,f.l,u);break}}return i?c:(u?l.future:l.past).replace("%s",c)};i.to=function(t,e){return o(t,e,this,!0)},i.from=function(t,e){return o(t,e,this)};var s=function(t){return t.$u?n.utc():n()};i.toNow=function(t){return this.to(s(this),t)},i.fromNow=function(t){return this.from(s(this),t)}}}()},function(t,e,n){"use strict";function i(t){return t>=1e6?Math.floor(t/1e6)+app.translator.trans("core.lib.number_suffix.mega_text"):t>=1e3?(t/1e3).toFixed(1)+app.translator.trans("core.lib.number_suffix.kilo_text"):t.toString()}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(){function t(t){this.el=t,this.$=$(t)}var e=t.prototype;return e.setValue=function(t){this.$.val(t).trigger("input"),this.el.dispatchEvent(new CustomEvent("input",{bubbles:!0,cancelable:!0}))},e.moveCursorTo=function(t){this.setSelectionRange(t,t)},e.getSelectionRange=function(){return[this.el.selectionStart,this.el.selectionEnd]},e.insertAtCursor=function(t){this.insertAt(this.el.selectionStart,t)},e.insertAt=function(t,e){this.insertBetween(t,t,e)},e.insertBetween=function(t,e,n){var i=this.el.value,r=i.slice(0,t),o=i.slice(e);this.setValue(""+r+n+o),this.moveCursorTo(t+n.length)},e.replaceBeforeCursor=function(t,e){this.insertBetween(t,this.el.selectionStart,e)},e.setSelectionRange=function(t,e){this.el.setSelectionRange(t,e),this.$.focus()},t}()},function(t,e,n){"use strict";var i=Array.isArray;e.a=i},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n(2),r=n(0),o=n(16),s=n(4),a=n(7),c=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.className+=" Dropdown--split",e.menuClassName+=" Dropdown-menu--right"};var n=e.prototype;return n.getButton=function(t){var e=this.getFirstChild(t),n=Object(i.a)({},e.attrs);return n.className=(n.className||"")+" SplitDropdown-button Button "+this.attrs.buttonClassName,[s.a.component(n,e.children),m("button",{className:"Dropdown-toggle Button Button--icon "+this.attrs.buttonClassName,"data-toggle":"dropdown"},Object(a.a)(this.attrs.icon,{className:"Button-icon"}),Object(a.a)("fas fa-caret-down",{className:"Button-caret"}))]},n.getFirstChild=function(t){for(var e=t;e instanceof Array;)e=e[0];return e},e}(o.a)},function(t,e,n){"use strict";function i(t,e){var n=$(window),i=$(t).offset().top-n.scrollTop();e(),n.scrollTop($(t).offset().top-i)}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(7);function r(t){if(t.lastSeenAt()&&t.isOnline())return m("span",{className:"UserOnline"},Object(i.a)("fas fa-circle"))}},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(28),r=n.n(i);function o(t){var e=r()(t),n=e.format(),i=e.format("LLLL");return m("time",{pubdate:!0,datetime:n},i)}},function(t,e,n){"use strict";function i(t){if(2===t.length)return app.translator.trans("core.lib.series.two_text",{first:t[0],second:t[1]});if(t.length>=3){var e=t.slice(1,t.length-1).reduce((function(t,e){return t.concat([e,app.translator.trans("core.lib.series.glue_text")])}),[]).slice(0,-1);return app.translator.trans("core.lib.series.three_text",{first:t[0],second:e,third:t[t.length-1]})}return t}n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";var i=n(26),r=Object.prototype,o=r.hasOwnProperty,s=r.toString,a=i.a?i.a.toStringTag:void 0;var c=function(t){var e=o.call(t,a),n=t[a];try{t[a]=void 0;var i=!0}catch(t){}var r=s.call(t);return i&&(e?t[a]=n:delete t[a]),r},u=Object.prototype.toString;var l=function(t){return u.call(t)},d=i.a?i.a.toStringTag:void 0;e.a=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?c(t):l(t)}},function(t,e,n){"use strict";var i=n(104),r=n(107),o=n(72),s=function(){return i.apply(this,arguments)};s.m=i,s.trust=i.trust,s.fragment=i.fragment,s.mount=o.mount,s.route=n(113),s.render=n(91),s.redraw=o.redraw,s.request=r.request,s.jsonp=r.jsonp,s.parseQueryString=n(94),s.buildQueryString=n(92),s.parsePathname=n(74),s.buildPathname=n(73),s.vnode=n(32),s.PromisePolyfill=n(89),t.exports=s},function(t,e,n){"use strict";var i=n(32),r=n(87),o=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,s={},a={}.hasOwnProperty;function c(t){for(var e in t)if(a.call(t,e))return!1;return!0}function u(t){for(var e,n="div",i=[],r={};e=o.exec(t);){var a=e[1],c=e[2];if(""===a&&""!==c)n=c;else if("#"===a)r.id=c;else if("."===a)i.push(c);else if("["===e[3][0]){var u=e[6];u&&(u=u.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===e[4]?i.push(u):r[e[4]]=""===u?u:u||!0}}return i.length>0&&(r.className=i.join(" ")),s[t]={tag:n,attrs:r}}function l(t,e){var n=e.attrs,r=i.normalizeChildren(e.children),o=a.call(n,"class"),s=o?n.class:n.className;if(e.tag=t.tag,e.attrs=null,e.children=void 0,!c(t.attrs)&&!c(n)){var u={};for(var l in n)a.call(n,l)&&(u[l]=n[l]);n=u}for(var l in t.attrs)a.call(t.attrs,l)&&"className"!==l&&!a.call(n,l)&&(n[l]=t.attrs[l]);for(var l in null==s&&null==t.attrs.className||(n.className=null!=s?null!=t.attrs.className?String(t.attrs.className)+" "+String(s):s:null!=t.attrs.className?t.attrs.className:null),o&&(n.class=null),n)if(a.call(n,l)&&"key"!==l){e.attrs=n;break}return Array.isArray(r)&&1===r.length&&null!=r[0]&&"#"===r[0].tag?e.text=r[0].children:e.children=r,e}t.exports=function(t){if(null==t||"string"!=typeof t&&"function"!=typeof t&&"function"!=typeof t.view)throw Error("The selector must be either a string or a component.");var e=r.apply(1,arguments);return"string"==typeof t&&(e.children=i.normalizeChildren(e.children),"["!==t)?l(s[t]||u(t),e):(e.tag=t,e)}},function(t,e,n){"use strict";var i=n(32);t.exports=function(){var t,e=arguments[this],n=this+1;if(null==e?e={}:("object"!=typeof e||null!=e.tag||Array.isArray(e))&&(e={},n=this),arguments.length===n+1)t=arguments[n],Array.isArray(t)||(t=[t]);else for(t=[];n<arguments.length;)t.push(arguments[n++]);return i("",e.key,e,t)}},function(t,e,n){"use strict";(function(e){var i=n(89);"undefined"!=typeof window?(void 0===window.Promise?window.Promise=i:window.Promise.prototype.finally||(window.Promise.prototype.finally=i.prototype.finally),t.exports=window.Promise):void 0!==e?(void 0===e.Promise?e.Promise=i:e.Promise.prototype.finally||(e.Promise.prototype.finally=i.prototype.finally),t.exports=e.Promise):t.exports=i}).call(this,n(25))},function(t,e,n){"use strict";(function(e){var n=function(t){if(!(this instanceof n))throw new Error("Promise must be called with `new`");if("function"!=typeof t)throw new TypeError("executor must be a function");var i=this,r=[],o=[],s=l(r,!0),a=l(o,!1),c=i._instance={resolvers:r,rejectors:o},u="function"==typeof e?e:setTimeout;function l(t,e){return function n(s){var l;try{if(!e||null==s||"object"!=typeof s&&"function"!=typeof s||"function"!=typeof(l=s.then))u((function(){e||0!==t.length||console.error("Possible unhandled promise rejection:",s);for(var i=0;i<t.length;i++)t[i](s);r.length=0,o.length=0,c.state=e,c.retry=function(){n(s)}}));else{if(s===i)throw new TypeError("Promise can't be resolved w/ itself");d(l.bind(s))}}catch(t){a(t)}}}function d(t){var e=0;function n(t){return function(n){e++>0||t(n)}}var i=n(a);try{t(n(s),i)}catch(t){i(t)}}d(t)};n.prototype.then=function(t,e){var i,r,o=this._instance;function s(t,e,n,s){e.push((function(e){if("function"!=typeof t)n(e);else try{i(t(e))}catch(t){r&&r(t)}})),"function"==typeof o.retry&&s===o.state&&o.retry()}var a=new n((function(t,e){i=t,r=e}));return s(t,o.resolvers,i,!0),s(e,o.rejectors,r,!1),a},n.prototype.catch=function(t){return this.then(null,t)},n.prototype.finally=function(t){return this.then((function(e){return n.resolve(t()).then((function(){return e}))}),(function(e){return n.resolve(t()).then((function(){return n.reject(e)}))}))},n.resolve=function(t){return t instanceof n?t:new n((function(e){e(t)}))},n.reject=function(t){return new n((function(e,n){n(t)}))},n.all=function(t){return new n((function(e,n){var i=t.length,r=0,o=[];if(0===t.length)e([]);else for(var s=0;s<t.length;s++)!function(s){function a(t){r++,o[s]=t,r===i&&e(o)}null==t[s]||"object"!=typeof t[s]&&"function"!=typeof t[s]||"function"!=typeof t[s].then?a(t[s]):t[s].then(a,n)}(s)}))},n.race=function(t){return new n((function(e,n){for(var i=0;i<t.length;i++)t[i].then(e,n)}))},t.exports=n}).call(this,n(90).setImmediate)},function(t,e,n){(function(t){var i=void 0!==t&&t||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(r.call(setTimeout,i,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,i,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(i,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout((function(){t._onTimeout&&t._onTimeout()}),e))},n(108),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(25))},function(t,e,n){"use strict";t.exports=n(110)(window)},function(t,e,n){"use strict";t.exports=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return"";var e=[];for(var n in t)i(n,t[n]);return e.join("&");function i(t,n){if(Array.isArray(n))for(var r=0;r<n.length;r++)i(t+"["+r+"]",n[r]);else if("[object Object]"===Object.prototype.toString.call(n))for(var r in n)i(t+"["+r+"]",n[r]);else e.push(encodeURIComponent(t)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}}},function(t,e,n){"use strict";t.exports=Object.assign||function(t,e){e&&Object.keys(e).forEach((function(n){t[n]=e[n]}))}},function(t,e,n){"use strict";t.exports=function(t){if(""===t||null==t)return{};"?"===t.charAt(0)&&(t=t.slice(1));for(var e=t.split("&"),n={},i={},r=0;r<e.length;r++){var o=e[r].split("="),s=decodeURIComponent(o[0]),a=2===o.length?decodeURIComponent(o[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var c=s.split(/\]\[?|\[/),u=i;s.indexOf("[")>-1&&c.pop();for(var l=0;l<c.length;l++){var d=c[l],p=c[l+1],h=""==p||!isNaN(parseInt(p,10));if(""===d)null==n[s=c.slice(0,l).join()]&&(n[s]=Array.isArray(u)?u.length:0),d=n[s]++;else if("__proto__"===d)break;if(l===c.length-1)u[d]=a;else{var f=Object.getOwnPropertyDescriptor(u,d);null!=f&&(f=f.value),null==f&&(u[d]=f=h?[]:{}),u=f}}}return i}},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={};n.r(i),n.d(i,"Model",(function(){return l})),n.d(i,"PostTypes",(function(){return p})),n.d(i,"Routes",(function(){return h}));n(100),n(103),n(116),n(117),n(119),n(120),n(121),n(122),n(123),n(124);var r=n(75),o=n.n(r),s=n(96),a=n.n(s),c=n(52),u=n(5),l=function(){function t(t,e){void 0===e&&(e=null),Object(u.a)(this,"type",void 0),Object(u.a)(this,"attributes",[]),Object(u.a)(this,"hasOnes",[]),Object(u.a)(this,"hasManys",[]),this.type=t,this.model=e}var e=t.prototype;return e.attribute=function(t){return this.attributes.push(t),this},e.hasOne=function(t){return this.hasOnes.push(t),this},e.hasMany=function(t){return this.hasManys.push(t),this},e.extend=function(t,e){this.model&&(t.store.models[this.type]=this.model);var n=t.store.models[this.type];this.attributes.forEach((function(t){return n.prototype[t]=n.attribute(t)})),this.hasOnes.forEach((function(t){return n.prototype[t]=n.hasOne(t)})),this.hasManys.forEach((function(t){return n.prototype[t]=n.hasMany(t)}))},t}(),d=n(2),p=function(){function t(){Object(u.a)(this,"postComponents",{})}var e=t.prototype;return e.add=function(t,e){return this.postComponents[t]=e,this},e.extend=function(t,e){Object(d.a)(t.postComponents,this.postComponents)},t}(),h=function(){function t(){Object(u.a)(this,"routes",{})}var e=t.prototype;return e.add=function(t,e,n){return this.routes[t]={path:e,component:n},this},e.extend=function(t,e){Object(d.a)(t.routes,this.routes)},t}();dayjs.extend(o.a),dayjs.extend(a.a),Object(c.a)(window)},function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){var i=e.prototype,r=i.format,o={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};n.en.formats=o,i.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var e=this.$locale().formats,n=void 0===e?{}:e,i=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,e,i){var r=i&&i.toUpperCase();return e||n[i]||o[i]||n[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}));return r.call(this,i)}}}()},function(t,e,n){"use strict";t.exports=n(125)},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(25))},function(t,e,n){"use strict";var i=n(42),r=n(60),o=n(59),s={handlers:null,getHandlers:function(t){return this.handlers=this.handlers||{},this.handlers[t]=this.handlers[t]||[],this.handlers[t]},trigger:function(t){for(var e=this,n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];this.getHandlers(t).forEach((function(t){return t.apply(e,i)}))},on:function(t,e){this.getHandlers(t).push(e)},one:function(t,e){this.getHandlers(t).push((function n(){e.apply(this,arguments),this.off(t,n)}))},off:function(t,e){var n=this.getHandlers(t),i=n.indexOf(e);-1!==i&&n.splice(i,1)}},a=n(63),c=n(6),u=n(2),l=n(0);var d=n(30),p=n(21),h=n(61),f=n(80),m=n(49),v=n(76),g=n(34),b=n(9),y=n(53),w=n(51),x=n(11),N=n(40),C=n(66),O=n(43),T=n(77),k=n(52),j=n(69),S=n(19),A=n(10),P=n(71),E=n(62),D=n(37),_=n(68),I=n(65),M=n(67),L=n(46),R=n(13),B=n(64),H=n(3),U=n(58),F=n(56),q=n(22),z=n(33),W=n(31),V=n(17),Y=n(54),K=n(27),G=n(16),X=n(79),J=n(57),Q=n(29),Z=n(39),tt=n(50),et=n(24),nt=n(12),it=n(14),rt=n(47),ot=n(35),st=n(55),at=n(4),ct=n(15),ut=n(36),lt=n(1),dt=n(70),pt=n(82),ht=n(18),ft=n(7),mt=n(44),vt=n(83),gt=n(38),bt=n(20),yt=n(81),wt=n(8),xt=n(5),Nt=function(){function t(){Object(xt.a)(this,"element",void 0)}var e=t.prototype;return e.$=function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=$(this.element);return t?e.find(t):e})),e.render=function(){var t=this,e=this.view();e.attrs=e.attrs||{};var n=e.attrs.oncreate;return e.attrs.oncreate=function(e){t.element=e.dom,n&&n.apply(t,[e])},e},t}(),Ct=n(41);e.a={extend:i,Session:r.a,Store:o.a,"utils/evented":s,"utils/liveHumanTimes":a.a,"utils/ItemList":c.a,"utils/mixin":function(t){for(var e=function(t){function e(){return t.apply(this,arguments)||this}return Object(l.a)(e,t),e}(t),n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return i.forEach((function(t){Object(u.a)(e.prototype,t)})),e},"utils/humanTime":d.a,"utils/computed":p.a,"utils/Drawer":h.a,"utils/anchorScroll":f.a,"utils/RequestError":m.a,"utils/abbreviateNumber":v.a,"utils/string":g,"utils/SubtreeRetainer":y.a,"utils/extract":x.a,"utils/ScrollListener":N.a,"utils/stringToColor":C.a,"utils/Stream":b.a,"utils/subclassOf":O.a,"utils/SuperTextarea":T.a,"utils/setRouteWithForcedRefresh":w.a,"utils/patchMithril":k.a,"utils/proxifyCompat":j.a,"utils/classList":S.a,"utils/extractText":A.a,"utils/formatNumber":P.a,"utils/mapRoutes":E.a,"utils/withAttr":D.a,"models/Notification":_.a,"models/User":I.a,"models/Post":M.a,"models/Discussion":L.a,"models/Group":R.a,"models/Forum":B.a,Component:H.a,Fragment:Nt,Translator:U.a,"components/AlertManager":F.a,"components/Page":q.a,"components/Switch":z.a,"components/Badge":W.a,"components/LoadingIndicator":V.a,"components/Placeholder":Y.a,"components/Separator":K.a,"components/Dropdown":G.a,"components/SplitDropdown":X.a,"components/RequestErrorModal":J.a,"components/FieldSet":Q.a,"components/Select":Z.a,"components/Navigation":tt.a,"components/Alert":et.a,"components/Link":nt.a,"components/LinkButton":it.a,"components/Checkbox":rt.a,"components/SelectDropdown":ot.a,"components/ModalManager":st.a,"components/Button":at.a,"components/Modal":ct.a,"components/GroupBadge":ut.a,Model:lt.a,Application:dt.a,"helpers/fullTime":pt.a,"helpers/avatar":ht.a,"helpers/icon":ft.a,"helpers/humanTime":mt.a,"helpers/punctuateSeries":vt.a,"helpers/highlight":gt.a,"helpers/username":bt.a,"helpers/userOnline":yt.a,"helpers/listItems":wt.a,"resolvers/DefaultResolver":Ct.a}},function(t,e,n){(function(e){t.exports=e.$=n(101)}).call(this,n(25))},function(t,e,n){(function(e){t.exports=e.jQuery=n(102)}).call(this,n(25))},function(t,e,n){var i;
/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */!function(e,n){"use strict";"object"==typeof t.exports?t.exports=e.document?n(e,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return n(t)}:n(e)}("undefined"!=typeof window?window:this,(function(n,r){"use strict";var o=[],s=Object.getPrototypeOf,a=o.slice,c=o.flat?function(t){return o.flat.call(t)}:function(t){return o.concat.apply([],t)},u=o.push,l=o.indexOf,d={},p=d.toString,h=d.hasOwnProperty,f=h.toString,m=f.call(Object),v={},g=function(t){return"function"==typeof t&&"number"!=typeof t.nodeType},b=function(t){return null!=t&&t===t.window},y=n.document,w={type:!0,src:!0,nonce:!0,noModule:!0};function x(t,e,n){var i,r,o=(n=n||y).createElement("script");if(o.text=t,e)for(i in w)(r=e[i]||e.getAttribute&&e.getAttribute(i))&&o.setAttribute(i,r);n.head.appendChild(o).parentNode.removeChild(o)}function N(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?d[p.call(t)]||"object":typeof t}var C=function(t,e){return new C.fn.init(t,e)};function O(t){var e=!!t&&"length"in t&&t.length,n=N(t);return!g(t)&&!b(t)&&("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t)}C.fn=C.prototype={jquery:"3.5.1",constructor:C,length:0,toArray:function(){return a.call(this)},get:function(t){return null==t?a.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var e=C.merge(this.constructor(),t);return e.prevObject=this,e},each:function(t){return C.each(this,t)},map:function(t){return this.pushStack(C.map(this,(function(e,n){return t.call(e,n,e)})))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(C.grep(this,(function(t,e){return(e+1)%2})))},odd:function(){return this.pushStack(C.grep(this,(function(t,e){return e%2})))},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(n>=0&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:o.sort,splice:o.splice},C.extend=C.fn.extend=function(){var t,e,n,i,r,o,s=arguments[0]||{},a=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||g(s)||(s={}),a===c&&(s=this,a--);a<c;a++)if(null!=(t=arguments[a]))for(e in t)i=t[e],"__proto__"!==e&&s!==i&&(u&&i&&(C.isPlainObject(i)||(r=Array.isArray(i)))?(n=s[e],o=r&&!Array.isArray(n)?[]:r||C.isPlainObject(n)?n:{},r=!1,s[e]=C.extend(u,o,i)):void 0!==i&&(s[e]=i));return s},C.extend({expando:"jQuery"+("3.5.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;return!(!t||"[object Object]"!==p.call(t))&&(!(e=s(t))||"function"==typeof(n=h.call(e,"constructor")&&e.constructor)&&f.call(n)===m)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},globalEval:function(t,e,n){x(t,{nonce:e&&e.nonce},n)},each:function(t,e){var n,i=0;if(O(t))for(n=t.length;i<n&&!1!==e.call(t[i],i,t[i]);i++);else for(i in t)if(!1===e.call(t[i],i,t[i]))break;return t},makeArray:function(t,e){var n=e||[];return null!=t&&(O(Object(t))?C.merge(n,"string"==typeof t?[t]:t):u.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:l.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,r=t.length;i<n;i++)t[r++]=e[i];return t.length=r,t},grep:function(t,e,n){for(var i=[],r=0,o=t.length,s=!n;r<o;r++)!e(t[r],r)!==s&&i.push(t[r]);return i},map:function(t,e,n){var i,r,o=0,s=[];if(O(t))for(i=t.length;o<i;o++)null!=(r=e(t[o],o,n))&&s.push(r);else for(o in t)null!=(r=e(t[o],o,n))&&s.push(r);return c(s)},guid:1,support:v}),"function"==typeof Symbol&&(C.fn[Symbol.iterator]=o[Symbol.iterator]),C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(t,e){d["[object "+e+"]"]=e.toLowerCase()}));var T=
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
function(t){var e,n,i,r,o,s,a,c,u,l,d,p,h,f,m,v,g,b,y,w="sizzle"+1*new Date,x=t.document,N=0,C=0,O=ct(),T=ct(),k=ct(),j=ct(),S=function(t,e){return t===e&&(d=!0),0},A={}.hasOwnProperty,P=[],E=P.pop,D=P.push,$=P.push,_=P.slice,I=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",R="(?:\\\\[\\da-fA-F]{1,6}"+L+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",B="\\["+L+"*("+R+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+L+"*\\]",H=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+B+")*)|.*)\\)|)",U=new RegExp(L+"+","g"),F=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),q=new RegExp("^"+L+"*,"+L+"*"),z=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),W=new RegExp(L+"|>"),V=new RegExp(H),Y=new RegExp("^"+R+"$"),K={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+B),PSEUDO:new RegExp("^"+H),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},G=/HTML$/i,X=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tt=/[+~]/,et=new RegExp("\\\\[\\da-fA-F]{1,6}"+L+"?|\\\\([^\\r\\n\\f])","g"),nt=function(t,e){var n="0x"+t.slice(1)-65536;return e||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},it=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,rt=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},ot=function(){p()},st=wt((function(t){return!0===t.disabled&&"fieldset"===t.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{$.apply(P=_.call(x.childNodes),x.childNodes),P[x.childNodes.length].nodeType}catch(t){$={apply:P.length?function(t,e){D.apply(t,_.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}function at(t,e,i,r){var o,a,u,l,d,f,g,b=e&&e.ownerDocument,x=e?e.nodeType:9;if(i=i||[],"string"!=typeof t||!t||1!==x&&9!==x&&11!==x)return i;if(!r&&(p(e),e=e||h,m)){if(11!==x&&(d=Z.exec(t)))if(o=d[1]){if(9===x){if(!(u=e.getElementById(o)))return i;if(u.id===o)return i.push(u),i}else if(b&&(u=b.getElementById(o))&&y(e,u)&&u.id===o)return i.push(u),i}else{if(d[2])return $.apply(i,e.getElementsByTagName(t)),i;if((o=d[3])&&n.getElementsByClassName&&e.getElementsByClassName)return $.apply(i,e.getElementsByClassName(o)),i}if(n.qsa&&!j[t+" "]&&(!v||!v.test(t))&&(1!==x||"object"!==e.nodeName.toLowerCase())){if(g=t,b=e,1===x&&(W.test(t)||z.test(t))){for((b=tt.test(t)&&gt(e.parentNode)||e)===e&&n.scope||((l=e.getAttribute("id"))?l=l.replace(it,rt):e.setAttribute("id",l=w)),a=(f=s(t)).length;a--;)f[a]=(l?"#"+l:":scope")+" "+yt(f[a]);g=f.join(",")}try{return $.apply(i,b.querySelectorAll(g)),i}catch(e){j(t,!0)}finally{l===w&&e.removeAttribute("id")}}}return c(t.replace(F,"$1"),e,i,r)}function ct(){var t=[];return function e(n,r){return t.push(n+" ")>i.cacheLength&&delete e[t.shift()],e[n+" "]=r}}function ut(t){return t[w]=!0,t}function lt(t){var e=h.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function dt(t,e){for(var n=t.split("|"),r=n.length;r--;)i.attrHandle[n[r]]=e}function pt(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function ht(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function ft(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function mt(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&st(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function vt(t){return ut((function(e){return e=+e,ut((function(n,i){for(var r,o=t([],n.length,e),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))}))}))}function gt(t){return t&&void 0!==t.getElementsByTagName&&t}for(e in n=at.support={},o=at.isXML=function(t){var e=t.namespaceURI,n=(t.ownerDocument||t).documentElement;return!G.test(e||n&&n.nodeName||"HTML")},p=at.setDocument=function(t){var e,r,s=t?t.ownerDocument||t:x;return s!=h&&9===s.nodeType&&s.documentElement?(f=(h=s).documentElement,m=!o(h),x!=h&&(r=h.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",ot,!1):r.attachEvent&&r.attachEvent("onunload",ot)),n.scope=lt((function(t){return f.appendChild(t).appendChild(h.createElement("div")),void 0!==t.querySelectorAll&&!t.querySelectorAll(":scope fieldset div").length})),n.attributes=lt((function(t){return t.className="i",!t.getAttribute("className")})),n.getElementsByTagName=lt((function(t){return t.appendChild(h.createComment("")),!t.getElementsByTagName("*").length})),n.getElementsByClassName=Q.test(h.getElementsByClassName),n.getById=lt((function(t){return f.appendChild(t).id=w,!h.getElementsByName||!h.getElementsByName(w).length})),n.getById?(i.filter.ID=function(t){var e=t.replace(et,nt);return function(t){return t.getAttribute("id")===e}},i.find.ID=function(t,e){if(void 0!==e.getElementById&&m){var n=e.getElementById(t);return n?[n]:[]}}):(i.filter.ID=function(t){var e=t.replace(et,nt);return function(t){var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}},i.find.ID=function(t,e){if(void 0!==e.getElementById&&m){var n,i,r,o=e.getElementById(t);if(o){if((n=o.getAttributeNode("id"))&&n.value===t)return[o];for(r=e.getElementsByName(t),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===t)return[o]}return[]}}),i.find.TAG=n.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):n.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],r=0,o=e.getElementsByTagName(t);if("*"===t){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},i.find.CLASS=n.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&m)return e.getElementsByClassName(t)},g=[],v=[],(n.qsa=Q.test(h.querySelectorAll))&&(lt((function(t){var e;f.appendChild(t).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+L+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||v.push("\\["+L+"*(?:value|"+M+")"),t.querySelectorAll("[id~="+w+"-]").length||v.push("~="),(e=h.createElement("input")).setAttribute("name",""),t.appendChild(e),t.querySelectorAll("[name='']").length||v.push("\\["+L+"*name"+L+"*="+L+"*(?:''|\"\")"),t.querySelectorAll(":checked").length||v.push(":checked"),t.querySelectorAll("a#"+w+"+*").length||v.push(".#.+[+~]"),t.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")})),lt((function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=h.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&v.push("name"+L+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),f.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),v.push(",.*:")}))),(n.matchesSelector=Q.test(b=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&lt((function(t){n.disconnectedMatch=b.call(t,"*"),b.call(t,"[s!='']:x"),g.push("!=",H)})),v=v.length&&new RegExp(v.join("|")),g=g.length&&new RegExp(g.join("|")),e=Q.test(f.compareDocumentPosition),y=e||Q.test(f.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},S=e?function(t,e){if(t===e)return d=!0,0;var i=!t.compareDocumentPosition-!e.compareDocumentPosition;return i||(1&(i=(t.ownerDocument||t)==(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!n.sortDetached&&e.compareDocumentPosition(t)===i?t==h||t.ownerDocument==x&&y(x,t)?-1:e==h||e.ownerDocument==x&&y(x,e)?1:l?I(l,t)-I(l,e):0:4&i?-1:1)}:function(t,e){if(t===e)return d=!0,0;var n,i=0,r=t.parentNode,o=e.parentNode,s=[t],a=[e];if(!r||!o)return t==h?-1:e==h?1:r?-1:o?1:l?I(l,t)-I(l,e):0;if(r===o)return pt(t,e);for(n=t;n=n.parentNode;)s.unshift(n);for(n=e;n=n.parentNode;)a.unshift(n);for(;s[i]===a[i];)i++;return i?pt(s[i],a[i]):s[i]==x?-1:a[i]==x?1:0},h):h},at.matches=function(t,e){return at(t,null,null,e)},at.matchesSelector=function(t,e){if(p(t),n.matchesSelector&&m&&!j[e+" "]&&(!g||!g.test(e))&&(!v||!v.test(e)))try{var i=b.call(t,e);if(i||n.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(t){j(e,!0)}return at(e,h,null,[t]).length>0},at.contains=function(t,e){return(t.ownerDocument||t)!=h&&p(t),y(t,e)},at.attr=function(t,e){(t.ownerDocument||t)!=h&&p(t);var r=i.attrHandle[e.toLowerCase()],o=r&&A.call(i.attrHandle,e.toLowerCase())?r(t,e,!m):void 0;return void 0!==o?o:n.attributes||!m?t.getAttribute(e):(o=t.getAttributeNode(e))&&o.specified?o.value:null},at.escape=function(t){return(t+"").replace(it,rt)},at.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},at.uniqueSort=function(t){var e,i=[],r=0,o=0;if(d=!n.detectDuplicates,l=!n.sortStable&&t.slice(0),t.sort(S),d){for(;e=t[o++];)e===t[o]&&(r=i.push(o));for(;r--;)t.splice(i[r],1)}return l=null,t},r=at.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=r(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=r(e);return n},(i=at.selectors={cacheLength:50,createPseudo:ut,match:K,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(et,nt),t[3]=(t[3]||t[4]||t[5]||"").replace(et,nt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||at.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&at.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return K.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&V.test(n)&&(e=s(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(et,nt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=O[t+" "];return e||(e=new RegExp("(^|"+L+")"+t+"("+L+"|$)"))&&O(t,(function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")}))},ATTR:function(t,e,n){return function(i){var r=at.attr(i,t);return null==r?"!="===e:!e||(r+="","="===e?r===n:"!="===e?r!==n:"^="===e?n&&0===r.indexOf(n):"*="===e?n&&r.indexOf(n)>-1:"$="===e?n&&r.slice(-n.length)===n:"~="===e?(" "+r.replace(U," ")+" ").indexOf(n)>-1:"|="===e&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(t,e,n,i,r){var o="nth"!==t.slice(0,3),s="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===r?function(t){return!!t.parentNode}:function(e,n,c){var u,l,d,p,h,f,m=o!==s?"nextSibling":"previousSibling",v=e.parentNode,g=a&&e.nodeName.toLowerCase(),b=!c&&!a,y=!1;if(v){if(o){for(;m;){for(p=e;p=p[m];)if(a?p.nodeName.toLowerCase()===g:1===p.nodeType)return!1;f=m="only"===t&&!f&&"nextSibling"}return!0}if(f=[s?v.firstChild:v.lastChild],s&&b){for(y=(h=(u=(l=(d=(p=v)[w]||(p[w]={}))[p.uniqueID]||(d[p.uniqueID]={}))[t]||[])[0]===N&&u[1])&&u[2],p=h&&v.childNodes[h];p=++h&&p&&p[m]||(y=h=0)||f.pop();)if(1===p.nodeType&&++y&&p===e){l[t]=[N,h,y];break}}else if(b&&(y=h=(u=(l=(d=(p=e)[w]||(p[w]={}))[p.uniqueID]||(d[p.uniqueID]={}))[t]||[])[0]===N&&u[1]),!1===y)for(;(p=++h&&p&&p[m]||(y=h=0)||f.pop())&&((a?p.nodeName.toLowerCase()!==g:1!==p.nodeType)||!++y||(b&&((l=(d=p[w]||(p[w]={}))[p.uniqueID]||(d[p.uniqueID]={}))[t]=[N,y]),p!==e)););return(y-=r)===i||y%i==0&&y/i>=0}}},PSEUDO:function(t,e){var n,r=i.pseudos[t]||i.setFilters[t.toLowerCase()]||at.error("unsupported pseudo: "+t);return r[w]?r(e):r.length>1?(n=[t,t,"",e],i.setFilters.hasOwnProperty(t.toLowerCase())?ut((function(t,n){for(var i,o=r(t,e),s=o.length;s--;)t[i=I(t,o[s])]=!(n[i]=o[s])})):function(t){return r(t,0,n)}):r}},pseudos:{not:ut((function(t){var e=[],n=[],i=a(t.replace(F,"$1"));return i[w]?ut((function(t,e,n,r){for(var o,s=i(t,null,r,[]),a=t.length;a--;)(o=s[a])&&(t[a]=!(e[a]=o))})):function(t,r,o){return e[0]=t,i(e,null,o,n),e[0]=null,!n.pop()}})),has:ut((function(t){return function(e){return at(t,e).length>0}})),contains:ut((function(t){return t=t.replace(et,nt),function(e){return(e.textContent||r(e)).indexOf(t)>-1}})),lang:ut((function(t){return Y.test(t||"")||at.error("unsupported lang: "+t),t=t.replace(et,nt).toLowerCase(),function(e){var n;do{if(n=m?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}})),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===f},focus:function(t){return t===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:mt(!1),disabled:mt(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!i.pseudos.empty(t)},header:function(t){return J.test(t.nodeName)},input:function(t){return X.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:vt((function(){return[0]})),last:vt((function(t,e){return[e-1]})),eq:vt((function(t,e,n){return[n<0?n+e:n]})),even:vt((function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t})),odd:vt((function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t})),lt:vt((function(t,e,n){for(var i=n<0?n+e:n>e?e:n;--i>=0;)t.push(i);return t})),gt:vt((function(t,e,n){for(var i=n<0?n+e:n;++i<e;)t.push(i);return t}))}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[e]=ht(e);for(e in{submit:!0,reset:!0})i.pseudos[e]=ft(e);function bt(){}function yt(t){for(var e=0,n=t.length,i="";e<n;e++)i+=t[e].value;return i}function wt(t,e,n){var i=e.dir,r=e.next,o=r||i,s=n&&"parentNode"===o,a=C++;return e.first?function(e,n,r){for(;e=e[i];)if(1===e.nodeType||s)return t(e,n,r);return!1}:function(e,n,c){var u,l,d,p=[N,a];if(c){for(;e=e[i];)if((1===e.nodeType||s)&&t(e,n,c))return!0}else for(;e=e[i];)if(1===e.nodeType||s)if(l=(d=e[w]||(e[w]={}))[e.uniqueID]||(d[e.uniqueID]={}),r&&r===e.nodeName.toLowerCase())e=e[i]||e;else{if((u=l[o])&&u[0]===N&&u[1]===a)return p[2]=u[2];if(l[o]=p,p[2]=t(e,n,c))return!0}return!1}}function xt(t){return t.length>1?function(e,n,i){for(var r=t.length;r--;)if(!t[r](e,n,i))return!1;return!0}:t[0]}function Nt(t,e,n,i,r){for(var o,s=[],a=0,c=t.length,u=null!=e;a<c;a++)(o=t[a])&&(n&&!n(o,i,r)||(s.push(o),u&&e.push(a)));return s}function Ct(t,e,n,i,r,o){return i&&!i[w]&&(i=Ct(i)),r&&!r[w]&&(r=Ct(r,o)),ut((function(o,s,a,c){var u,l,d,p=[],h=[],f=s.length,m=o||function(t,e,n){for(var i=0,r=e.length;i<r;i++)at(t,e[i],n);return n}(e||"*",a.nodeType?[a]:a,[]),v=!t||!o&&e?m:Nt(m,p,t,a,c),g=n?r||(o?t:f||i)?[]:s:v;if(n&&n(v,g,a,c),i)for(u=Nt(g,h),i(u,[],a,c),l=u.length;l--;)(d=u[l])&&(g[h[l]]=!(v[h[l]]=d));if(o){if(r||t){if(r){for(u=[],l=g.length;l--;)(d=g[l])&&u.push(v[l]=d);r(null,g=[],u,c)}for(l=g.length;l--;)(d=g[l])&&(u=r?I(o,d):p[l])>-1&&(o[u]=!(s[u]=d))}}else g=Nt(g===s?g.splice(f,g.length):g),r?r(null,s,g,c):$.apply(s,g)}))}function Ot(t){for(var e,n,r,o=t.length,s=i.relative[t[0].type],a=s||i.relative[" "],c=s?1:0,l=wt((function(t){return t===e}),a,!0),d=wt((function(t){return I(e,t)>-1}),a,!0),p=[function(t,n,i){var r=!s&&(i||n!==u)||((e=n).nodeType?l(t,n,i):d(t,n,i));return e=null,r}];c<o;c++)if(n=i.relative[t[c].type])p=[wt(xt(p),n)];else{if((n=i.filter[t[c].type].apply(null,t[c].matches))[w]){for(r=++c;r<o&&!i.relative[t[r].type];r++);return Ct(c>1&&xt(p),c>1&&yt(t.slice(0,c-1).concat({value:" "===t[c-2].type?"*":""})).replace(F,"$1"),n,c<r&&Ot(t.slice(c,r)),r<o&&Ot(t=t.slice(r)),r<o&&yt(t))}p.push(n)}return xt(p)}return bt.prototype=i.filters=i.pseudos,i.setFilters=new bt,s=at.tokenize=function(t,e){var n,r,o,s,a,c,u,l=T[t+" "];if(l)return e?0:l.slice(0);for(a=t,c=[],u=i.preFilter;a;){for(s in n&&!(r=q.exec(a))||(r&&(a=a.slice(r[0].length)||a),c.push(o=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(F," ")}),a=a.slice(n.length)),i.filter)!(r=K[s].exec(a))||u[s]&&!(r=u[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return e?a.length:a?at.error(t):T(t,c).slice(0)},a=at.compile=function(t,e){var n,r=[],o=[],a=k[t+" "];if(!a){for(e||(e=s(t)),n=e.length;n--;)(a=Ot(e[n]))[w]?r.push(a):o.push(a);(a=k(t,function(t,e){var n=e.length>0,r=t.length>0,o=function(o,s,a,c,l){var d,f,v,g=0,b="0",y=o&&[],w=[],x=u,C=o||r&&i.find.TAG("*",l),O=N+=null==x?1:Math.random()||.1,T=C.length;for(l&&(u=s==h||s||l);b!==T&&null!=(d=C[b]);b++){if(r&&d){for(f=0,s||d.ownerDocument==h||(p(d),a=!m);v=t[f++];)if(v(d,s||h,a)){c.push(d);break}l&&(N=O)}n&&((d=!v&&d)&&g--,o&&y.push(d))}if(g+=b,n&&b!==g){for(f=0;v=e[f++];)v(y,w,s,a);if(o){if(g>0)for(;b--;)y[b]||w[b]||(w[b]=E.call(c));w=Nt(w)}$.apply(c,w),l&&!o&&w.length>0&&g+e.length>1&&at.uniqueSort(c)}return l&&(N=O,u=x),y};return n?ut(o):o}(o,r))).selector=t}return a},c=at.select=function(t,e,n,r){var o,c,u,l,d,p="function"==typeof t&&t,h=!r&&s(t=p.selector||t);if(n=n||[],1===h.length){if((c=h[0]=h[0].slice(0)).length>2&&"ID"===(u=c[0]).type&&9===e.nodeType&&m&&i.relative[c[1].type]){if(!(e=(i.find.ID(u.matches[0].replace(et,nt),e)||[])[0]))return n;p&&(e=e.parentNode),t=t.slice(c.shift().value.length)}for(o=K.needsContext.test(t)?0:c.length;o--&&(u=c[o],!i.relative[l=u.type]);)if((d=i.find[l])&&(r=d(u.matches[0].replace(et,nt),tt.test(c[0].type)&&gt(e.parentNode)||e))){if(c.splice(o,1),!(t=r.length&&yt(c)))return $.apply(n,r),n;break}}return(p||a(t,h))(r,e,!m,n,!e||tt.test(t)&&gt(e.parentNode)||e),n},n.sortStable=w.split("").sort(S).join("")===w,n.detectDuplicates=!!d,p(),n.sortDetached=lt((function(t){return 1&t.compareDocumentPosition(h.createElement("fieldset"))})),lt((function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")}))||dt("type|href|height|width",(function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)})),n.attributes&&lt((function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")}))||dt("value",(function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue})),lt((function(t){return null==t.getAttribute("disabled")}))||dt(M,(function(t,e,n){var i;if(!n)return!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null})),at}(n);C.find=T,C.expr=T.selectors,C.expr[":"]=C.expr.pseudos,C.uniqueSort=C.unique=T.uniqueSort,C.text=T.getText,C.isXMLDoc=T.isXML,C.contains=T.contains,C.escapeSelector=T.escape;var k=function(t,e,n){for(var i=[],r=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(r&&C(t).is(n))break;i.push(t)}return i},j=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},S=C.expr.match.needsContext;function A(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}var P=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function E(t,e,n){return g(e)?C.grep(t,(function(t,i){return!!e.call(t,i,t)!==n})):e.nodeType?C.grep(t,(function(t){return t===e!==n})):"string"!=typeof e?C.grep(t,(function(t){return l.call(e,t)>-1!==n})):C.filter(e,t,n)}C.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?C.find.matchesSelector(i,t)?[i]:[]:C.find.matches(t,C.grep(e,(function(t){return 1===t.nodeType})))},C.fn.extend({find:function(t){var e,n,i=this.length,r=this;if("string"!=typeof t)return this.pushStack(C(t).filter((function(){for(e=0;e<i;e++)if(C.contains(r[e],this))return!0})));for(n=this.pushStack([]),e=0;e<i;e++)C.find(t,r[e],n);return i>1?C.uniqueSort(n):n},filter:function(t){return this.pushStack(E(this,t||[],!1))},not:function(t){return this.pushStack(E(this,t||[],!0))},is:function(t){return!!E(this,"string"==typeof t&&S.test(t)?C(t):t||[],!1).length}});var D,$=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(C.fn.init=function(t,e,n){var i,r;if(!t)return this;if(n=n||D,"string"==typeof t){if(!(i="<"===t[0]&&">"===t[t.length-1]&&t.length>=3?[null,t,null]:$.exec(t))||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);if(i[1]){if(e=e instanceof C?e[0]:e,C.merge(this,C.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:y,!0)),P.test(i[1])&&C.isPlainObject(e))for(i in e)g(this[i])?this[i](e[i]):this.attr(i,e[i]);return this}return(r=y.getElementById(i[2]))&&(this[0]=r,this.length=1),this}return t.nodeType?(this[0]=t,this.length=1,this):g(t)?void 0!==n.ready?n.ready(t):t(C):C.makeArray(t,this)}).prototype=C.fn,D=C(y);var _=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};function M(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}C.fn.extend({has:function(t){var e=C(t,this),n=e.length;return this.filter((function(){for(var t=0;t<n;t++)if(C.contains(this,e[t]))return!0}))},closest:function(t,e){var n,i=0,r=this.length,o=[],s="string"!=typeof t&&C(t);if(!S.test(t))for(;i<r;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&C.find.matchesSelector(n,t))){o.push(n);break}return this.pushStack(o.length>1?C.uniqueSort(o):o)},index:function(t){return t?"string"==typeof t?l.call(C(t),this[0]):l.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(C.uniqueSort(C.merge(this.get(),C(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),C.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return k(t,"parentNode")},parentsUntil:function(t,e,n){return k(t,"parentNode",n)},next:function(t){return M(t,"nextSibling")},prev:function(t){return M(t,"previousSibling")},nextAll:function(t){return k(t,"nextSibling")},prevAll:function(t){return k(t,"previousSibling")},nextUntil:function(t,e,n){return k(t,"nextSibling",n)},prevUntil:function(t,e,n){return k(t,"previousSibling",n)},siblings:function(t){return j((t.parentNode||{}).firstChild,t)},children:function(t){return j(t.firstChild)},contents:function(t){return null!=t.contentDocument&&s(t.contentDocument)?t.contentDocument:(A(t,"template")&&(t=t.content||t),C.merge([],t.childNodes))}},(function(t,e){C.fn[t]=function(n,i){var r=C.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=C.filter(i,r)),this.length>1&&(I[t]||C.uniqueSort(r),_.test(t)&&r.reverse()),this.pushStack(r)}}));var L=/[^\x20\t\r\n\f]+/g;function R(t){return t}function B(t){throw t}function H(t,e,n,i){var r;try{t&&g(r=t.promise)?r.call(t).done(e).fail(n):t&&g(r=t.then)?r.call(t,e,n):e.apply(void 0,[t].slice(i))}catch(t){n.apply(void 0,[t])}}C.Callbacks=function(t){t="string"==typeof t?function(t){var e={};return C.each(t.match(L)||[],(function(t,n){e[n]=!0})),e}(t):C.extend({},t);var e,n,i,r,o=[],s=[],a=-1,c=function(){for(r=r||t.once,i=e=!0;s.length;a=-1)for(n=s.shift();++a<o.length;)!1===o[a].apply(n[0],n[1])&&t.stopOnFalse&&(a=o.length,n=!1);t.memory||(n=!1),e=!1,r&&(o=n?[]:"")},u={add:function(){return o&&(n&&!e&&(a=o.length-1,s.push(n)),function e(n){C.each(n,(function(n,i){g(i)?t.unique&&u.has(i)||o.push(i):i&&i.length&&"string"!==N(i)&&e(i)}))}(arguments),n&&!e&&c()),this},remove:function(){return C.each(arguments,(function(t,e){for(var n;(n=C.inArray(e,o,n))>-1;)o.splice(n,1),n<=a&&a--})),this},has:function(t){return t?C.inArray(t,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return r=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return r=s=[],n||e||(o=n=""),this},locked:function(){return!!r},fireWith:function(t,n){return r||(n=[t,(n=n||[]).slice?n.slice():n],s.push(n),e||c()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!i}};return u},C.extend({Deferred:function(t){var e=[["notify","progress",C.Callbacks("memory"),C.Callbacks("memory"),2],["resolve","done",C.Callbacks("once memory"),C.Callbacks("once memory"),0,"resolved"],["reject","fail",C.Callbacks("once memory"),C.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(t){return r.then(null,t)},pipe:function(){var t=arguments;return C.Deferred((function(n){C.each(e,(function(e,i){var r=g(t[i[4]])&&t[i[4]];o[i[1]]((function(){var t=r&&r.apply(this,arguments);t&&g(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,r?[t]:arguments)}))})),t=null})).promise()},then:function(t,i,r){var o=0;function s(t,e,i,r){return function(){var a=this,c=arguments,u=function(){var n,u;if(!(t<o)){if((n=i.apply(a,c))===e.promise())throw new TypeError("Thenable self-resolution");u=n&&("object"==typeof n||"function"==typeof n)&&n.then,g(u)?r?u.call(n,s(o,e,R,r),s(o,e,B,r)):(o++,u.call(n,s(o,e,R,r),s(o,e,B,r),s(o,e,R,e.notifyWith))):(i!==R&&(a=void 0,c=[n]),(r||e.resolveWith)(a,c))}},l=r?u:function(){try{u()}catch(n){C.Deferred.exceptionHook&&C.Deferred.exceptionHook(n,l.stackTrace),t+1>=o&&(i!==B&&(a=void 0,c=[n]),e.rejectWith(a,c))}};t?l():(C.Deferred.getStackHook&&(l.stackTrace=C.Deferred.getStackHook()),n.setTimeout(l))}}return C.Deferred((function(n){e[0][3].add(s(0,n,g(r)?r:R,n.notifyWith)),e[1][3].add(s(0,n,g(t)?t:R)),e[2][3].add(s(0,n,g(i)?i:B))})).promise()},promise:function(t){return null!=t?C.extend(t,r):r}},o={};return C.each(e,(function(t,n){var s=n[2],a=n[5];r[n[1]]=s.add,a&&s.add((function(){i=a}),e[3-t][2].disable,e[3-t][3].disable,e[0][2].lock,e[0][3].lock),s.add(n[3].fire),o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},o[n[0]+"With"]=s.fireWith})),r.promise(o),t&&t.call(o,o),o},when:function(t){var e=arguments.length,n=e,i=Array(n),r=a.call(arguments),o=C.Deferred(),s=function(t){return function(n){i[t]=this,r[t]=arguments.length>1?a.call(arguments):n,--e||o.resolveWith(i,r)}};if(e<=1&&(H(t,o.done(s(n)).resolve,o.reject,!e),"pending"===o.state()||g(r[n]&&r[n].then)))return o.then();for(;n--;)H(r[n],s(n),o.reject);return o.promise()}});var U=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;C.Deferred.exceptionHook=function(t,e){n.console&&n.console.warn&&t&&U.test(t.name)&&n.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},C.readyException=function(t){n.setTimeout((function(){throw t}))};var F=C.Deferred();function q(){y.removeEventListener("DOMContentLoaded",q),n.removeEventListener("load",q),C.ready()}C.fn.ready=function(t){return F.then(t).catch((function(t){C.readyException(t)})),this},C.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--C.readyWait:C.isReady)||(C.isReady=!0,!0!==t&&--C.readyWait>0||F.resolveWith(y,[C]))}}),C.ready.then=F.then,"complete"===y.readyState||"loading"!==y.readyState&&!y.documentElement.doScroll?n.setTimeout(C.ready):(y.addEventListener("DOMContentLoaded",q),n.addEventListener("load",q));var z=function(t,e,n,i,r,o,s){var a=0,c=t.length,u=null==n;if("object"===N(n))for(a in r=!0,n)z(t,e,a,n[a],!0,o,s);else if(void 0!==i&&(r=!0,g(i)||(s=!0),u&&(s?(e.call(t,i),e=null):(u=e,e=function(t,e,n){return u.call(C(t),n)})),e))for(;a<c;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)));return r?t:u?e.call(t):c?e(t[0],n):o},W=/^-ms-/,V=/-([a-z])/g;function Y(t,e){return e.toUpperCase()}function K(t){return t.replace(W,"ms-").replace(V,Y)}var G=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType};function X(){this.expando=C.expando+X.uid++}X.uid=1,X.prototype={cache:function(t){var e=t[this.expando];return e||(e={},G(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,r=this.cache(t);if("string"==typeof e)r[K(e)]=n;else for(i in e)r[K(i)]=e[i];return r},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][K(e)]},access:function(t,e,n){return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i=t[this.expando];if(void 0!==i){if(void 0!==e){n=(e=Array.isArray(e)?e.map(K):(e=K(e))in i?[e]:e.match(L)||[]).length;for(;n--;)delete i[e[n]]}(void 0===e||C.isEmptyObject(i))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!C.isEmptyObject(e)}};var J=new X,Q=new X,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,tt=/[A-Z]/g;function et(t,e,n){var i;if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(tt,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(i))){try{n=function(t){return"true"===t||"false"!==t&&("null"===t?null:t===+t+""?+t:Z.test(t)?JSON.parse(t):t)}(n)}catch(t){}Q.set(t,e,n)}else n=void 0;return n}C.extend({hasData:function(t){return Q.hasData(t)||J.hasData(t)},data:function(t,e,n){return Q.access(t,e,n)},removeData:function(t,e){Q.remove(t,e)},_data:function(t,e,n){return J.access(t,e,n)},_removeData:function(t,e){J.remove(t,e)}}),C.fn.extend({data:function(t,e){var n,i,r,o=this[0],s=o&&o.attributes;if(void 0===t){if(this.length&&(r=Q.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=K(i.slice(5)),et(o,i,r[i]));J.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof t?this.each((function(){Q.set(this,t)})):z(this,(function(e){var n;if(o&&void 0===e)return void 0!==(n=Q.get(o,t))||void 0!==(n=et(o,t))?n:void 0;this.each((function(){Q.set(this,t,e)}))}),null,e,arguments.length>1,null,!0)},removeData:function(t){return this.each((function(){Q.remove(this,t)}))}}),C.extend({queue:function(t,e,n){var i;if(t)return e=(e||"fx")+"queue",i=J.get(t,e),n&&(!i||Array.isArray(n)?i=J.access(t,e,C.makeArray(n)):i.push(n)),i||[]},dequeue:function(t,e){e=e||"fx";var n=C.queue(t,e),i=n.length,r=n.shift(),o=C._queueHooks(t,e);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===e&&n.unshift("inprogress"),delete o.stop,r.call(t,(function(){C.dequeue(t,e)}),o)),!i&&o&&o.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return J.get(t,n)||J.access(t,n,{empty:C.Callbacks("once memory").add((function(){J.remove(t,[e+"queue",n])}))})}}),C.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?C.queue(this[0],t):void 0===e?this:this.each((function(){var n=C.queue(this,t,e);C._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&C.dequeue(this,t)}))},dequeue:function(t){return this.each((function(){C.dequeue(this,t)}))},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,r=C.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";s--;)(n=J.get(o[s],t+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(e)}});var nt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,it=new RegExp("^(?:([+-])=|)("+nt+")([a-z%]*)$","i"),rt=["Top","Right","Bottom","Left"],ot=y.documentElement,st=function(t){return C.contains(t.ownerDocument,t)},at={composed:!0};ot.getRootNode&&(st=function(t){return C.contains(t.ownerDocument,t)||t.getRootNode(at)===t.ownerDocument});var ct=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&st(t)&&"none"===C.css(t,"display")};function ut(t,e,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return C.css(t,e,"")},c=a(),u=n&&n[3]||(C.cssNumber[e]?"":"px"),l=t.nodeType&&(C.cssNumber[e]||"px"!==u&&+c)&&it.exec(C.css(t,e));if(l&&l[3]!==u){for(c/=2,u=u||l[3],l=+c||1;s--;)C.style(t,e,l+u),(1-o)*(1-(o=a()/c||.5))<=0&&(s=0),l/=o;l*=2,C.style(t,e,l+u),n=n||[]}return n&&(l=+l||+c||0,r=n[1]?l+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=l,i.end=r)),r}var lt={};function dt(t){var e,n=t.ownerDocument,i=t.nodeName,r=lt[i];return r||(e=n.body.appendChild(n.createElement(i)),r=C.css(e,"display"),e.parentNode.removeChild(e),"none"===r&&(r="block"),lt[i]=r,r)}function pt(t,e){for(var n,i,r=[],o=0,s=t.length;o<s;o++)(i=t[o]).style&&(n=i.style.display,e?("none"===n&&(r[o]=J.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&ct(i)&&(r[o]=dt(i))):"none"!==n&&(r[o]="none",J.set(i,"display",n)));for(o=0;o<s;o++)null!=r[o]&&(t[o].style.display=r[o]);return t}C.fn.extend({show:function(){return pt(this,!0)},hide:function(){return pt(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each((function(){ct(this)?C(this).show():C(this).hide()}))}});var ht,ft,mt=/^(?:checkbox|radio)$/i,vt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,gt=/^$|^module$|\/(?:java|ecma)script/i;ht=y.createDocumentFragment().appendChild(y.createElement("div")),(ft=y.createElement("input")).setAttribute("type","radio"),ft.setAttribute("checked","checked"),ft.setAttribute("name","t"),ht.appendChild(ft),v.checkClone=ht.cloneNode(!0).cloneNode(!0).lastChild.checked,ht.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ht.cloneNode(!0).lastChild.defaultValue,ht.innerHTML="<option></option>",v.option=!!ht.lastChild;var bt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function yt(t,e){var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&A(t,e)?C.merge([t],n):n}function wt(t,e){for(var n=0,i=t.length;n<i;n++)J.set(t[n],"globalEval",!e||J.get(e[n],"globalEval"))}bt.tbody=bt.tfoot=bt.colgroup=bt.caption=bt.thead,bt.th=bt.td,v.option||(bt.optgroup=bt.option=[1,"<select multiple='multiple'>","</select>"]);var xt=/<|&#?\w+;/;function Nt(t,e,n,i,r){for(var o,s,a,c,u,l,d=e.createDocumentFragment(),p=[],h=0,f=t.length;h<f;h++)if((o=t[h])||0===o)if("object"===N(o))C.merge(p,o.nodeType?[o]:o);else if(xt.test(o)){for(s=s||d.appendChild(e.createElement("div")),a=(vt.exec(o)||["",""])[1].toLowerCase(),c=bt[a]||bt._default,s.innerHTML=c[1]+C.htmlPrefilter(o)+c[2],l=c[0];l--;)s=s.lastChild;C.merge(p,s.childNodes),(s=d.firstChild).textContent=""}else p.push(e.createTextNode(o));for(d.textContent="",h=0;o=p[h++];)if(i&&C.inArray(o,i)>-1)r&&r.push(o);else if(u=st(o),s=yt(d.appendChild(o),"script"),u&&wt(s),n)for(l=0;o=s[l++];)gt.test(o.type||"")&&n.push(o);return d}var Ct=/^key/,Ot=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Tt=/^([^.]*)(?:\.(.+)|)/;function kt(){return!0}function jt(){return!1}function St(t,e){return t===function(){try{return y.activeElement}catch(t){}}()==("focus"===e)}function At(t,e,n,i,r,o){var s,a;if("object"==typeof e){for(a in"string"!=typeof n&&(i=i||n,n=void 0),e)At(t,a,n,i,e[a],o);return t}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=jt;else if(!r)return t;return 1===o&&(s=r,(r=function(t){return C().off(t),s.apply(this,arguments)}).guid=s.guid||(s.guid=C.guid++)),t.each((function(){C.event.add(this,e,r,i,n)}))}function Pt(t,e,n){n?(J.set(t,e,!1),C.event.add(t,e,{namespace:!1,handler:function(t){var i,r,o=J.get(this,e);if(1&t.isTrigger&&this[e]){if(o.length)(C.event.special[e]||{}).delegateType&&t.stopPropagation();else if(o=a.call(arguments),J.set(this,e,o),i=n(this,e),this[e](),o!==(r=J.get(this,e))||i?J.set(this,e,!1):r={},o!==r)return t.stopImmediatePropagation(),t.preventDefault(),r.value}else o.length&&(J.set(this,e,{value:C.event.trigger(C.extend(o[0],C.Event.prototype),o.slice(1),this)}),t.stopImmediatePropagation())}})):void 0===J.get(t,e)&&C.event.add(t,e,kt)}C.event={global:{},add:function(t,e,n,i,r){var o,s,a,c,u,l,d,p,h,f,m,v=J.get(t);if(G(t))for(n.handler&&(n=(o=n).handler,r=o.selector),r&&C.find.matchesSelector(ot,r),n.guid||(n.guid=C.guid++),(c=v.events)||(c=v.events=Object.create(null)),(s=v.handle)||(s=v.handle=function(e){return void 0!==C&&C.event.triggered!==e.type?C.event.dispatch.apply(t,arguments):void 0}),u=(e=(e||"").match(L)||[""]).length;u--;)h=m=(a=Tt.exec(e[u])||[])[1],f=(a[2]||"").split(".").sort(),h&&(d=C.event.special[h]||{},h=(r?d.delegateType:d.bindType)||h,d=C.event.special[h]||{},l=C.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&C.expr.match.needsContext.test(r),namespace:f.join(".")},o),(p=c[h])||((p=c[h]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(t,i,f,s)||t.addEventListener&&t.addEventListener(h,s)),d.add&&(d.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),r?p.splice(p.delegateCount++,0,l):p.push(l),C.event.global[h]=!0)},remove:function(t,e,n,i,r){var o,s,a,c,u,l,d,p,h,f,m,v=J.hasData(t)&&J.get(t);if(v&&(c=v.events)){for(u=(e=(e||"").match(L)||[""]).length;u--;)if(h=m=(a=Tt.exec(e[u])||[])[1],f=(a[2]||"").split(".").sort(),h){for(d=C.event.special[h]||{},p=c[h=(i?d.delegateType:d.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)l=p[o],!r&&m!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||i&&i!==l.selector&&("**"!==i||!l.selector)||(p.splice(o,1),l.selector&&p.delegateCount--,d.remove&&d.remove.call(t,l));s&&!p.length&&(d.teardown&&!1!==d.teardown.call(t,f,v.handle)||C.removeEvent(t,h,v.handle),delete c[h])}else for(h in c)C.event.remove(t,h+e[u],n,i,!0);C.isEmptyObject(c)&&J.remove(t,"handle events")}},dispatch:function(t){var e,n,i,r,o,s,a=new Array(arguments.length),c=C.event.fix(t),u=(J.get(this,"events")||Object.create(null))[c.type]||[],l=C.event.special[c.type]||{};for(a[0]=c,e=1;e<arguments.length;e++)a[e]=arguments[e];if(c.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,c)){for(s=C.event.handlers.call(this,c,u),e=0;(r=s[e++])&&!c.isPropagationStopped();)for(c.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!c.isImmediatePropagationStopped();)c.rnamespace&&!1!==o.namespace&&!c.rnamespace.test(o.namespace)||(c.handleObj=o,c.data=o.data,void 0!==(i=((C.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a))&&!1===(c.result=i)&&(c.preventDefault(),c.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,c),c.result}},handlers:function(t,e){var n,i,r,o,s,a=[],c=e.delegateCount,u=t.target;if(c&&u.nodeType&&!("click"===t.type&&t.button>=1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==t.type||!0!==u.disabled)){for(o=[],s={},n=0;n<c;n++)void 0===s[r=(i=e[n]).selector+" "]&&(s[r]=i.needsContext?C(r,this).index(u)>-1:C.find(r,this,null,[u]).length),s[r]&&o.push(i);o.length&&a.push({elem:u,handlers:o})}return u=this,c<e.length&&a.push({elem:u,handlers:e.slice(c)}),a},addProp:function(t,e){Object.defineProperty(C.Event.prototype,t,{enumerable:!0,configurable:!0,get:g(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(t){return t[C.expando]?t:new C.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var e=this||t;return mt.test(e.type)&&e.click&&A(e,"input")&&Pt(e,"click",kt),!1},trigger:function(t){var e=this||t;return mt.test(e.type)&&e.click&&A(e,"input")&&Pt(e,"click"),!0},_default:function(t){var e=t.target;return mt.test(e.type)&&e.click&&A(e,"input")&&J.get(e,"click")||A(e,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},C.removeEvent=function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n)},C.Event=function(t,e){if(!(this instanceof C.Event))return new C.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?kt:jt,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&C.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[C.expando]=!0},C.Event.prototype={constructor:C.Event,isDefaultPrevented:jt,isPropagationStopped:jt,isImmediatePropagationStopped:jt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=kt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=kt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=kt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},C.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&Ct.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&Ot.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},C.event.addProp),C.each({focus:"focusin",blur:"focusout"},(function(t,e){C.event.special[t]={setup:function(){return Pt(this,t,St),!1},trigger:function(){return Pt(this,t),!0},delegateType:e}})),C.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(t,e){C.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,r=t.relatedTarget,o=t.handleObj;return r&&(r===i||C.contains(i,r))||(t.type=o.origType,n=o.handler.apply(this,arguments),t.type=e),n}}})),C.fn.extend({on:function(t,e,n,i){return At(this,t,e,n,i)},one:function(t,e,n,i){return At(this,t,e,n,i,1)},off:function(t,e,n){var i,r;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,C(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(r in t)this.off(r,e,t[r]);return this}return!1!==e&&"function"!=typeof e||(n=e,e=void 0),!1===n&&(n=jt),this.each((function(){C.event.remove(this,t,n,e)}))}});var Et=/<script|<style|<link/i,Dt=/checked\s*(?:[^=]|=\s*.checked.)/i,$t=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function _t(t,e){return A(t,"table")&&A(11!==e.nodeType?e:e.firstChild,"tr")&&C(t).children("tbody")[0]||t}function It(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function Mt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Lt(t,e){var n,i,r,o,s,a;if(1===e.nodeType){if(J.hasData(t)&&(a=J.get(t).events))for(r in J.remove(e,"handle events"),a)for(n=0,i=a[r].length;n<i;n++)C.event.add(e,r,a[r][n]);Q.hasData(t)&&(o=Q.access(t),s=C.extend({},o),Q.set(e,s))}}function Rt(t,e){var n=e.nodeName.toLowerCase();"input"===n&&mt.test(t.type)?e.checked=t.checked:"input"!==n&&"textarea"!==n||(e.defaultValue=t.defaultValue)}function Bt(t,e,n,i){e=c(e);var r,o,s,a,u,l,d=0,p=t.length,h=p-1,f=e[0],m=g(f);if(m||p>1&&"string"==typeof f&&!v.checkClone&&Dt.test(f))return t.each((function(r){var o=t.eq(r);m&&(e[0]=f.call(this,r,o.html())),Bt(o,e,n,i)}));if(p&&(o=(r=Nt(e,t[0].ownerDocument,!1,t,i)).firstChild,1===r.childNodes.length&&(r=o),o||i)){for(a=(s=C.map(yt(r,"script"),It)).length;d<p;d++)u=r,d!==h&&(u=C.clone(u,!0,!0),a&&C.merge(s,yt(u,"script"))),n.call(t[d],u,d);if(a)for(l=s[s.length-1].ownerDocument,C.map(s,Mt),d=0;d<a;d++)u=s[d],gt.test(u.type||"")&&!J.access(u,"globalEval")&&C.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?C._evalUrl&&!u.noModule&&C._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):x(u.textContent.replace($t,""),u,l))}return t}function Ht(t,e,n){for(var i,r=e?C.filter(e,t):t,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||C.cleanData(yt(i)),i.parentNode&&(n&&st(i)&&wt(yt(i,"script")),i.parentNode.removeChild(i));return t}C.extend({htmlPrefilter:function(t){return t},clone:function(t,e,n){var i,r,o,s,a=t.cloneNode(!0),c=st(t);if(!(v.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||C.isXMLDoc(t)))for(s=yt(a),i=0,r=(o=yt(t)).length;i<r;i++)Rt(o[i],s[i]);if(e)if(n)for(o=o||yt(t),s=s||yt(a),i=0,r=o.length;i<r;i++)Lt(o[i],s[i]);else Lt(t,a);return(s=yt(a,"script")).length>0&&wt(s,!c&&yt(t,"script")),a},cleanData:function(t){for(var e,n,i,r=C.event.special,o=0;void 0!==(n=t[o]);o++)if(G(n)){if(e=n[J.expando]){if(e.events)for(i in e.events)r[i]?C.event.remove(n,i):C.removeEvent(n,i,e.handle);n[J.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),C.fn.extend({detach:function(t){return Ht(this,t,!0)},remove:function(t){return Ht(this,t)},text:function(t){return z(this,(function(t){return void 0===t?C.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)}))}),null,t,arguments.length)},append:function(){return Bt(this,arguments,(function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||_t(this,t).appendChild(t)}))},prepend:function(){return Bt(this,arguments,(function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=_t(this,t);e.insertBefore(t,e.firstChild)}}))},before:function(){return Bt(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this)}))},after:function(){return Bt(this,arguments,(function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)}))},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(C.cleanData(yt(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map((function(){return C.clone(this,t,e)}))},html:function(t){return z(this,(function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Et.test(t)&&!bt[(vt.exec(t)||["",""])[1].toLowerCase()]){t=C.htmlPrefilter(t);try{for(;n<i;n++)1===(e=this[n]||{}).nodeType&&(C.cleanData(yt(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)}),null,t,arguments.length)},replaceWith:function(){var t=[];return Bt(this,arguments,(function(e){var n=this.parentNode;C.inArray(this,t)<0&&(C.cleanData(yt(this)),n&&n.replaceChild(e,this))}),t)}}),C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(t,e){C.fn[t]=function(t){for(var n,i=[],r=C(t),o=r.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),C(r[s])[e](n),u.apply(i,n.get());return this.pushStack(i)}}));var Ut=new RegExp("^("+nt+")(?!px)[a-z%]+$","i"),Ft=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=n),e.getComputedStyle(t)},qt=function(t,e,n){var i,r,o={};for(r in e)o[r]=t.style[r],t.style[r]=e[r];for(r in i=n.call(t),e)t.style[r]=o[r];return i},zt=new RegExp(rt.join("|"),"i");function Wt(t,e,n){var i,r,o,s,a=t.style;return(n=n||Ft(t))&&(""!==(s=n.getPropertyValue(e)||n[e])||st(t)||(s=C.style(t,e)),!v.pixelBoxStyles()&&Ut.test(s)&&zt.test(e)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=r,a.maxWidth=o)),void 0!==s?s+"":s}function Vt(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}!function(){function t(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ot.appendChild(u).appendChild(l);var t=n.getComputedStyle(l);i="1%"!==t.top,c=12===e(t.marginLeft),l.style.right="60%",s=36===e(t.right),r=36===e(t.width),l.style.position="absolute",o=12===e(l.offsetWidth/3),ot.removeChild(u),l=null}}function e(t){return Math.round(parseFloat(t))}var i,r,o,s,a,c,u=y.createElement("div"),l=y.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,C.extend(v,{boxSizingReliable:function(){return t(),r},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),c},scrollboxSize:function(){return t(),o},reliableTrDimensions:function(){var t,e,i,r;return null==a&&(t=y.createElement("table"),e=y.createElement("tr"),i=y.createElement("div"),t.style.cssText="position:absolute;left:-11111px",e.style.height="1px",i.style.height="9px",ot.appendChild(t).appendChild(e).appendChild(i),r=n.getComputedStyle(e),a=parseInt(r.height)>3,ot.removeChild(t)),a}}))}();var Yt=["Webkit","Moz","ms"],Kt=y.createElement("div").style,Gt={};function Xt(t){var e=C.cssProps[t]||Gt[t];return e||(t in Kt?t:Gt[t]=function(t){for(var e=t[0].toUpperCase()+t.slice(1),n=Yt.length;n--;)if((t=Yt[n]+e)in Kt)return t}(t)||t)}var Jt=/^(none|table(?!-c[ea]).+)/,Qt=/^--/,Zt={position:"absolute",visibility:"hidden",display:"block"},te={letterSpacing:"0",fontWeight:"400"};function ee(t,e,n){var i=it.exec(e);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):e}function ne(t,e,n,i,r,o){var s="width"===e?1:0,a=0,c=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(c+=C.css(t,n+rt[s],!0,r)),i?("content"===n&&(c-=C.css(t,"padding"+rt[s],!0,r)),"margin"!==n&&(c-=C.css(t,"border"+rt[s]+"Width",!0,r))):(c+=C.css(t,"padding"+rt[s],!0,r),"padding"!==n?c+=C.css(t,"border"+rt[s]+"Width",!0,r):a+=C.css(t,"border"+rt[s]+"Width",!0,r));return!i&&o>=0&&(c+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-o-c-a-.5))||0),c}function ie(t,e,n){var i=Ft(t),r=(!v.boxSizingReliable()||n)&&"border-box"===C.css(t,"boxSizing",!1,i),o=r,s=Wt(t,e,i),a="offset"+e[0].toUpperCase()+e.slice(1);if(Ut.test(s)){if(!n)return s;s="auto"}return(!v.boxSizingReliable()&&r||!v.reliableTrDimensions()&&A(t,"tr")||"auto"===s||!parseFloat(s)&&"inline"===C.css(t,"display",!1,i))&&t.getClientRects().length&&(r="border-box"===C.css(t,"boxSizing",!1,i),(o=a in t)&&(s=t[a])),(s=parseFloat(s)||0)+ne(t,e,n||(r?"border":"content"),o,i,s)+"px"}function re(t,e,n,i,r){return new re.prototype.init(t,e,n,i,r)}C.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=Wt(t,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var r,o,s,a=K(e),c=Qt.test(e),u=t.style;if(c||(e=Xt(a)),s=C.cssHooks[e]||C.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(r=s.get(t,!1,i))?r:u[e];"string"===(o=typeof n)&&(r=it.exec(n))&&r[1]&&(n=ut(t,e,r),o="number"),null!=n&&n==n&&("number"!==o||c||(n+=r&&r[3]||(C.cssNumber[a]?"":"px")),v.clearCloneStyle||""!==n||0!==e.indexOf("background")||(u[e]="inherit"),s&&"set"in s&&void 0===(n=s.set(t,n,i))||(c?u.setProperty(e,n):u[e]=n))}},css:function(t,e,n,i){var r,o,s,a=K(e);return Qt.test(e)||(e=Xt(a)),(s=C.cssHooks[e]||C.cssHooks[a])&&"get"in s&&(r=s.get(t,!0,n)),void 0===r&&(r=Wt(t,e,i)),"normal"===r&&e in te&&(r=te[e]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),C.each(["height","width"],(function(t,e){C.cssHooks[e]={get:function(t,n,i){if(n)return!Jt.test(C.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?ie(t,e,i):qt(t,Zt,(function(){return ie(t,e,i)}))},set:function(t,n,i){var r,o=Ft(t),s=!v.scrollboxSize()&&"absolute"===o.position,a=(s||i)&&"border-box"===C.css(t,"boxSizing",!1,o),c=i?ne(t,e,i,a,o):0;return a&&s&&(c-=Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-parseFloat(o[e])-ne(t,e,"border",!1,o)-.5)),c&&(r=it.exec(n))&&"px"!==(r[3]||"px")&&(t.style[e]=n,n=C.css(t,e)),ee(0,n,c)}}})),C.cssHooks.marginLeft=Vt(v.reliableMarginLeft,(function(t,e){if(e)return(parseFloat(Wt(t,"marginLeft"))||t.getBoundingClientRect().left-qt(t,{marginLeft:0},(function(){return t.getBoundingClientRect().left})))+"px"})),C.each({margin:"",padding:"",border:"Width"},(function(t,e){C.cssHooks[t+e]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[t+rt[i]+e]=o[i]||o[i-2]||o[0];return r}},"margin"!==t&&(C.cssHooks[t+e].set=ee)})),C.fn.extend({css:function(t,e){return z(this,(function(t,e,n){var i,r,o={},s=0;if(Array.isArray(e)){for(i=Ft(t),r=e.length;s<r;s++)o[e[s]]=C.css(t,e[s],!1,i);return o}return void 0!==n?C.style(t,e,n):C.css(t,e)}),t,e,arguments.length>1)}}),C.Tween=re,re.prototype={constructor:re,init:function(t,e,n,i,r,o){this.elem=t,this.prop=n,this.easing=r||C.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=o||(C.cssNumber[n]?"":"px")},cur:function(){var t=re.propHooks[this.prop];return t&&t.get?t.get(this):re.propHooks._default.get(this)},run:function(t){var e,n=re.propHooks[this.prop];return this.options.duration?this.pos=e=C.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):re.propHooks._default.set(this),this}},re.prototype.init.prototype=re.prototype,re.propHooks={_default:{get:function(t){var e;return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(e=C.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){C.fx.step[t.prop]?C.fx.step[t.prop](t):1!==t.elem.nodeType||!C.cssHooks[t.prop]&&null==t.elem.style[Xt(t.prop)]?t.elem[t.prop]=t.now:C.style(t.elem,t.prop,t.now+t.unit)}}},re.propHooks.scrollTop=re.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},C.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},C.fx=re.prototype.init,C.fx.step={};var oe,se,ae=/^(?:toggle|show|hide)$/,ce=/queueHooks$/;function ue(){se&&(!1===y.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(ue):n.setTimeout(ue,C.fx.interval),C.fx.tick())}function le(){return n.setTimeout((function(){oe=void 0})),oe=Date.now()}function de(t,e){var n,i=0,r={height:t};for(e=e?1:0;i<4;i+=2-e)r["margin"+(n=rt[i])]=r["padding"+n]=t;return e&&(r.opacity=r.width=t),r}function pe(t,e,n){for(var i,r=(he.tweeners[e]||[]).concat(he.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,e,t))return i}function he(t,e,n){var i,r,o=0,s=he.prefilters.length,a=C.Deferred().always((function(){delete c.elem})),c=function(){if(r)return!1;for(var e=oe||le(),n=Math.max(0,u.startTime+u.duration-e),i=1-(n/u.duration||0),o=0,s=u.tweens.length;o<s;o++)u.tweens[o].run(i);return a.notifyWith(t,[u,i,n]),i<1&&s?n:(s||a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u]),!1)},u=a.promise({elem:t,props:C.extend({},e),opts:C.extend(!0,{specialEasing:{},easing:C.easing._default},n),originalProperties:e,originalOptions:n,startTime:oe||le(),duration:n.duration,tweens:[],createTween:function(e,n){var i=C.Tween(t,u.opts,e,n,u.opts.specialEasing[e]||u.opts.easing);return u.tweens.push(i),i},stop:function(e){var n=0,i=e?u.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)u.tweens[n].run(1);return e?(a.notifyWith(t,[u,1,0]),a.resolveWith(t,[u,e])):a.rejectWith(t,[u,e]),this}}),l=u.props;for(!function(t,e){var n,i,r,o,s;for(n in t)if(r=e[i=K(n)],o=t[n],Array.isArray(o)&&(r=o[1],o=t[n]=o[0]),n!==i&&(t[i]=o,delete t[n]),(s=C.cssHooks[i])&&"expand"in s)for(n in o=s.expand(o),delete t[i],o)n in t||(t[n]=o[n],e[n]=r);else e[i]=r}(l,u.opts.specialEasing);o<s;o++)if(i=he.prefilters[o].call(u,t,l,u.opts))return g(i.stop)&&(C._queueHooks(u.elem,u.opts.queue).stop=i.stop.bind(i)),i;return C.map(l,pe,u),g(u.opts.start)&&u.opts.start.call(t,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),C.fx.timer(C.extend(c,{elem:t,anim:u,queue:u.opts.queue})),u}C.Animation=C.extend(he,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return ut(n.elem,t,it.exec(e),n),n}]},tweener:function(t,e){g(t)?(e=t,t=["*"]):t=t.match(L);for(var n,i=0,r=t.length;i<r;i++)n=t[i],he.tweeners[n]=he.tweeners[n]||[],he.tweeners[n].unshift(e)},prefilters:[function(t,e,n){var i,r,o,s,a,c,u,l,d="width"in e||"height"in e,p=this,h={},f=t.style,m=t.nodeType&&ct(t),v=J.get(t,"fxshow");for(i in n.queue||(null==(s=C._queueHooks(t,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always((function(){p.always((function(){s.unqueued--,C.queue(t,"fx").length||s.empty.fire()}))}))),e)if(r=e[i],ae.test(r)){if(delete e[i],o=o||"toggle"===r,r===(m?"hide":"show")){if("show"!==r||!v||void 0===v[i])continue;m=!0}h[i]=v&&v[i]||C.style(t,i)}if((c=!C.isEmptyObject(e))||!C.isEmptyObject(h))for(i in d&&1===t.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(u=v&&v.display)&&(u=J.get(t,"display")),"none"===(l=C.css(t,"display"))&&(u?l=u:(pt([t],!0),u=t.style.display||u,l=C.css(t,"display"),pt([t]))),("inline"===l||"inline-block"===l&&null!=u)&&"none"===C.css(t,"float")&&(c||(p.done((function(){f.display=u})),null==u&&(l=f.display,u="none"===l?"":l)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",p.always((function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))),c=!1,h)c||(v?"hidden"in v&&(m=v.hidden):v=J.access(t,"fxshow",{display:u}),o&&(v.hidden=!m),m&&pt([t],!0),p.done((function(){for(i in m||pt([t]),J.remove(t,"fxshow"),h)C.style(t,i,h[i])}))),c=pe(m?v[i]:0,i,p),i in v||(v[i]=c.start,m&&(c.end=c.start,c.start=0))}],prefilter:function(t,e){e?he.prefilters.unshift(t):he.prefilters.push(t)}}),C.speed=function(t,e,n){var i=t&&"object"==typeof t?C.extend({},t):{complete:n||!n&&e||g(t)&&t,duration:t,easing:n&&e||e&&!g(e)&&e};return C.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in C.fx.speeds?i.duration=C.fx.speeds[i.duration]:i.duration=C.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){g(i.old)&&i.old.call(this),i.queue&&C.dequeue(this,i.queue)},i},C.fn.extend({fadeTo:function(t,e,n,i){return this.filter(ct).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var r=C.isEmptyObject(t),o=C.speed(e,n,i),s=function(){var e=he(this,C.extend({},t),o);(r||J.get(this,"finish"))&&e.stop(!0)};return s.finish=s,r||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&this.queue(t||"fx",[]),this.each((function(){var e=!0,r=null!=t&&t+"queueHooks",o=C.timers,s=J.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&ce.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem!==this||null!=t&&o[r].queue!==t||(o[r].anim.stop(n),e=!1,o.splice(r,1));!e&&n||C.dequeue(this,t)}))},finish:function(t){return!1!==t&&(t=t||"fx"),this.each((function(){var e,n=J.get(this),i=n[t+"queue"],r=n[t+"queueHooks"],o=C.timers,s=i?i.length:0;for(n.finish=!0,C.queue(this,t,[]),r&&r.stop&&r.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===t&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;e<s;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish}))}}),C.each(["toggle","show","hide"],(function(t,e){var n=C.fn[e];C.fn[e]=function(t,i,r){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(de(e,!0),t,i,r)}})),C.each({slideDown:de("show"),slideUp:de("hide"),slideToggle:de("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(t,e){C.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}})),C.timers=[],C.fx.tick=function(){var t,e=0,n=C.timers;for(oe=Date.now();e<n.length;e++)(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||C.fx.stop(),oe=void 0},C.fx.timer=function(t){C.timers.push(t),C.fx.start()},C.fx.interval=13,C.fx.start=function(){se||(se=!0,ue())},C.fx.stop=function(){se=null},C.fx.speeds={slow:600,fast:200,_default:400},C.fn.delay=function(t,e){return t=C.fx&&C.fx.speeds[t]||t,e=e||"fx",this.queue(e,(function(e,i){var r=n.setTimeout(e,t);i.stop=function(){n.clearTimeout(r)}}))},function(){var t=y.createElement("input"),e=y.createElement("select").appendChild(y.createElement("option"));t.type="checkbox",v.checkOn=""!==t.value,v.optSelected=e.selected,(t=y.createElement("input")).value="t",t.type="radio",v.radioValue="t"===t.value}();var fe,me=C.expr.attrHandle;C.fn.extend({attr:function(t,e){return z(this,C.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each((function(){C.removeAttr(this,t)}))}}),C.extend({attr:function(t,e,n){var i,r,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===t.getAttribute?C.prop(t,e,n):(1===o&&C.isXMLDoc(t)||(r=C.attrHooks[e.toLowerCase()]||(C.expr.match.bool.test(e)?fe:void 0)),void 0!==n?null===n?void C.removeAttr(t,e):r&&"set"in r&&void 0!==(i=r.set(t,n,e))?i:(t.setAttribute(e,n+""),n):r&&"get"in r&&null!==(i=r.get(t,e))?i:null==(i=C.find.attr(t,e))?void 0:i)},attrHooks:{type:{set:function(t,e){if(!v.radioValue&&"radio"===e&&A(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i=0,r=e&&e.match(L);if(r&&1===t.nodeType)for(;n=r[i++];)t.removeAttribute(n)}}),fe={set:function(t,e,n){return!1===e?C.removeAttr(t,n):t.setAttribute(n,n),n}},C.each(C.expr.match.bool.source.match(/\w+/g),(function(t,e){var n=me[e]||C.find.attr;me[e]=function(t,e,i){var r,o,s=e.toLowerCase();return i||(o=me[s],me[s]=r,r=null!=n(t,e,i)?s:null,me[s]=o),r}}));var ve=/^(?:input|select|textarea|button)$/i,ge=/^(?:a|area)$/i;function be(t){return(t.match(L)||[]).join(" ")}function ye(t){return t.getAttribute&&t.getAttribute("class")||""}function we(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(L)||[]}C.fn.extend({prop:function(t,e){return z(this,C.prop,t,e,arguments.length>1)},removeProp:function(t){return this.each((function(){delete this[C.propFix[t]||t]}))}}),C.extend({prop:function(t,e,n){var i,r,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&C.isXMLDoc(t)||(e=C.propFix[e]||e,r=C.propHooks[e]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(t,n,e))?i:t[e]=n:r&&"get"in r&&null!==(i=r.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){var e=C.find.attr(t,"tabindex");return e?parseInt(e,10):ve.test(t.nodeName)||ge.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(C.propHooks.selected={get:function(t){var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){C.propFix[this.toLowerCase()]=this})),C.fn.extend({addClass:function(t){var e,n,i,r,o,s,a,c=0;if(g(t))return this.each((function(e){C(this).addClass(t.call(this,e,ye(this)))}));if((e=we(t)).length)for(;n=this[c++];)if(r=ye(n),i=1===n.nodeType&&" "+be(r)+" "){for(s=0;o=e[s++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");r!==(a=be(i))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,r,o,s,a,c=0;if(g(t))return this.each((function(e){C(this).removeClass(t.call(this,e,ye(this)))}));if(!arguments.length)return this.attr("class","");if((e=we(t)).length)for(;n=this[c++];)if(r=ye(n),i=1===n.nodeType&&" "+be(r)+" "){for(s=0;o=e[s++];)for(;i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");r!==(a=be(i))&&n.setAttribute("class",a)}return this},toggleClass:function(t,e){var n=typeof t,i="string"===n||Array.isArray(t);return"boolean"==typeof e&&i?e?this.addClass(t):this.removeClass(t):g(t)?this.each((function(n){C(this).toggleClass(t.call(this,n,ye(this),e),e)})):this.each((function(){var e,r,o,s;if(i)for(r=0,o=C(this),s=we(t);e=s[r++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else void 0!==t&&"boolean"!==n||((e=ye(this))&&J.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===t?"":J.get(this,"__className__")||""))}))},hasClass:function(t){var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&(" "+be(ye(n))+" ").indexOf(e)>-1)return!0;return!1}});var xe=/\r/g;C.fn.extend({val:function(t){var e,n,i,r=this[0];return arguments.length?(i=g(t),this.each((function(n){var r;1===this.nodeType&&(null==(r=i?t.call(this,n,C(this).val()):t)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=C.map(r,(function(t){return null==t?"":t+""}))),(e=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,r,"value")||(this.value=r))}))):r?(e=C.valHooks[r.type]||C.valHooks[r.nodeName.toLowerCase()])&&"get"in e&&void 0!==(n=e.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(xe,""):null==n?"":n:void 0}}),C.extend({valHooks:{option:{get:function(t){var e=C.find.attr(t,"value");return null!=e?e:be(C.text(t))}},select:{get:function(t){var e,n,i,r=t.options,o=t.selectedIndex,s="select-one"===t.type,a=s?null:[],c=s?o+1:r.length;for(i=o<0?c:s?o:0;i<c;i++)if(((n=r[i]).selected||i===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(e=C(n).val(),s)return e;a.push(e)}return a},set:function(t,e){for(var n,i,r=t.options,o=C.makeArray(e),s=r.length;s--;)((i=r[s]).selected=C.inArray(C.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(t.selectedIndex=-1),o}}}}),C.each(["radio","checkbox"],(function(){C.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=C.inArray(C(t).val(),e)>-1}},v.checkOn||(C.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})})),v.focusin="onfocusin"in n;var Ne=/^(?:focusinfocus|focusoutblur)$/,Ce=function(t){t.stopPropagation()};C.extend(C.event,{trigger:function(t,e,i,r){var o,s,a,c,u,l,d,p,f=[i||y],m=h.call(t,"type")?t.type:t,v=h.call(t,"namespace")?t.namespace.split("."):[];if(s=p=a=i=i||y,3!==i.nodeType&&8!==i.nodeType&&!Ne.test(m+C.event.triggered)&&(m.indexOf(".")>-1&&(v=m.split("."),m=v.shift(),v.sort()),u=m.indexOf(":")<0&&"on"+m,(t=t[C.expando]?t:new C.Event(m,"object"==typeof t&&t)).isTrigger=r?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),e=null==e?[t]:C.makeArray(e,[t]),d=C.event.special[m]||{},r||!d.trigger||!1!==d.trigger.apply(i,e))){if(!r&&!d.noBubble&&!b(i)){for(c=d.delegateType||m,Ne.test(c+m)||(s=s.parentNode);s;s=s.parentNode)f.push(s),a=s;a===(i.ownerDocument||y)&&f.push(a.defaultView||a.parentWindow||n)}for(o=0;(s=f[o++])&&!t.isPropagationStopped();)p=s,t.type=o>1?c:d.bindType||m,(l=(J.get(s,"events")||Object.create(null))[t.type]&&J.get(s,"handle"))&&l.apply(s,e),(l=u&&s[u])&&l.apply&&G(s)&&(t.result=l.apply(s,e),!1===t.result&&t.preventDefault());return t.type=m,r||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(f.pop(),e)||!G(i)||u&&g(i[m])&&!b(i)&&((a=i[u])&&(i[u]=null),C.event.triggered=m,t.isPropagationStopped()&&p.addEventListener(m,Ce),i[m](),t.isPropagationStopped()&&p.removeEventListener(m,Ce),C.event.triggered=void 0,a&&(i[u]=a)),t.result}},simulate:function(t,e,n){var i=C.extend(new C.Event,n,{type:t,isSimulated:!0});C.event.trigger(i,null,e)}}),C.fn.extend({trigger:function(t,e){return this.each((function(){C.event.trigger(t,e,this)}))},triggerHandler:function(t,e){var n=this[0];if(n)return C.event.trigger(t,e,n,!0)}}),v.focusin||C.each({focus:"focusin",blur:"focusout"},(function(t,e){var n=function(t){C.event.simulate(e,t.target,C.event.fix(t))};C.event.special[e]={setup:function(){var i=this.ownerDocument||this.document||this,r=J.access(i,e);r||i.addEventListener(t,n,!0),J.access(i,e,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=J.access(i,e)-1;r?J.access(i,e,r):(i.removeEventListener(t,n,!0),J.remove(i,e))}}}));var Oe=n.location,Te={guid:Date.now()},ke=/\?/;C.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;try{e=(new n.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||C.error("Invalid XML: "+t),e};var je=/\[\]$/,Se=/\r?\n/g,Ae=/^(?:submit|button|image|reset|file)$/i,Pe=/^(?:input|select|textarea|keygen)/i;function Ee(t,e,n,i){var r;if(Array.isArray(e))C.each(e,(function(e,r){n||je.test(t)?i(t,r):Ee(t+"["+("object"==typeof r&&null!=r?e:"")+"]",r,n,i)}));else if(n||"object"!==N(e))i(t,e);else for(r in e)Ee(t+"["+r+"]",e[r],n,i)}C.param=function(t,e){var n,i=[],r=function(t,e){var n=g(e)?e():e;i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};if(null==t)return"";if(Array.isArray(t)||t.jquery&&!C.isPlainObject(t))C.each(t,(function(){r(this.name,this.value)}));else for(n in t)Ee(n,t[n],e,r);return i.join("&")},C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var t=C.prop(this,"elements");return t?C.makeArray(t):this})).filter((function(){var t=this.type;return this.name&&!C(this).is(":disabled")&&Pe.test(this.nodeName)&&!Ae.test(t)&&(this.checked||!mt.test(t))})).map((function(t,e){var n=C(this).val();return null==n?null:Array.isArray(n)?C.map(n,(function(t){return{name:e.name,value:t.replace(Se,"\r\n")}})):{name:e.name,value:n.replace(Se,"\r\n")}})).get()}});var De=/%20/g,$e=/#.*$/,_e=/([?&])_=[^&]*/,Ie=/^(.*?):[ \t]*([^\r\n]*)$/gm,Me=/^(?:GET|HEAD)$/,Le=/^\/\//,Re={},Be={},He="*/".concat("*"),Ue=y.createElement("a");function Fe(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,r=0,o=e.toLowerCase().match(L)||[];if(g(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function qe(t,e,n,i){var r={},o=t===Be;function s(a){var c;return r[a]=!0,C.each(t[a]||[],(function(t,a){var u=a(e,n,i);return"string"!=typeof u||o||r[u]?o?!(c=u):void 0:(e.dataTypes.unshift(u),s(u),!1)})),c}return s(e.dataTypes[0])||!r["*"]&&s("*")}function ze(t,e){var n,i,r=C.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((r[n]?t:i||(i={}))[n]=e[n]);return i&&C.extend(!0,t,i),t}Ue.href=Oe.href,C.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Oe.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Oe.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":He,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":C.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?ze(ze(t,C.ajaxSettings),e):ze(C.ajaxSettings,t)},ajaxPrefilter:Fe(Re),ajaxTransport:Fe(Be),ajax:function(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var i,r,o,s,a,c,u,l,d,p,h=C.ajaxSetup({},e),f=h.context||h,m=h.context&&(f.nodeType||f.jquery)?C(f):C.event,v=C.Deferred(),g=C.Callbacks("once memory"),b=h.statusCode||{},w={},x={},N="canceled",O={readyState:0,getResponseHeader:function(t){var e;if(u){if(!s)for(s={};e=Ie.exec(o);)s[e[1].toLowerCase()+" "]=(s[e[1].toLowerCase()+" "]||[]).concat(e[2]);e=s[t.toLowerCase()+" "]}return null==e?null:e.join(", ")},getAllResponseHeaders:function(){return u?o:null},setRequestHeader:function(t,e){return null==u&&(t=x[t.toLowerCase()]=x[t.toLowerCase()]||t,w[t]=e),this},overrideMimeType:function(t){return null==u&&(h.mimeType=t),this},statusCode:function(t){var e;if(t)if(u)O.always(t[O.status]);else for(e in t)b[e]=[b[e],t[e]];return this},abort:function(t){var e=t||N;return i&&i.abort(e),T(0,e),this}};if(v.promise(O),h.url=((t||h.url||Oe.href)+"").replace(Le,Oe.protocol+"//"),h.type=e.method||e.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(L)||[""],null==h.crossDomain){c=y.createElement("a");try{c.href=h.url,c.href=c.href,h.crossDomain=Ue.protocol+"//"+Ue.host!=c.protocol+"//"+c.host}catch(t){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=C.param(h.data,h.traditional)),qe(Re,h,e,O),u)return O;for(d in(l=C.event&&h.global)&&0==C.active++&&C.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Me.test(h.type),r=h.url.replace($e,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(De,"+")):(p=h.url.slice(r.length),h.data&&(h.processData||"string"==typeof h.data)&&(r+=(ke.test(r)?"&":"?")+h.data,delete h.data),!1===h.cache&&(r=r.replace(_e,"$1"),p=(ke.test(r)?"&":"?")+"_="+Te.guid+++p),h.url=r+p),h.ifModified&&(C.lastModified[r]&&O.setRequestHeader("If-Modified-Since",C.lastModified[r]),C.etag[r]&&O.setRequestHeader("If-None-Match",C.etag[r])),(h.data&&h.hasContent&&!1!==h.contentType||e.contentType)&&O.setRequestHeader("Content-Type",h.contentType),O.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+He+"; q=0.01":""):h.accepts["*"]),h.headers)O.setRequestHeader(d,h.headers[d]);if(h.beforeSend&&(!1===h.beforeSend.call(f,O,h)||u))return O.abort();if(N="abort",g.add(h.complete),O.done(h.success),O.fail(h.error),i=qe(Be,h,e,O)){if(O.readyState=1,l&&m.trigger("ajaxSend",[O,h]),u)return O;h.async&&h.timeout>0&&(a=n.setTimeout((function(){O.abort("timeout")}),h.timeout));try{u=!1,i.send(w,T)}catch(t){if(u)throw t;T(-1,t)}}else T(-1,"No Transport");function T(t,e,s,c){var d,p,y,w,x,N=e;u||(u=!0,a&&n.clearTimeout(a),i=void 0,o=c||"",O.readyState=t>0?4:0,d=t>=200&&t<300||304===t,s&&(w=function(t,e,n){for(var i,r,o,s,a=t.contents,c=t.dataTypes;"*"===c[0];)c.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){c.unshift(r);break}if(c[0]in n)o=c[0];else{for(r in n){if(!c[0]||t.converters[r+" "+c[0]]){o=r;break}s||(s=r)}o=o||s}if(o)return o!==c[0]&&c.unshift(o),n[o]}(h,O,s)),!d&&C.inArray("script",h.dataTypes)>-1&&(h.converters["text script"]=function(){}),w=function(t,e,n,i){var r,o,s,a,c,u={},l=t.dataTypes.slice();if(l[1])for(s in t.converters)u[s.toLowerCase()]=t.converters[s];for(o=l.shift();o;)if(t.responseFields[o]&&(n[t.responseFields[o]]=e),!c&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),c=o,o=l.shift())if("*"===o)o=c;else if("*"!==c&&c!==o){if(!(s=u[c+" "+o]||u["* "+o]))for(r in u)if((a=r.split(" "))[1]===o&&(s=u[c+" "+a[0]]||u["* "+a[0]])){!0===s?s=u[r]:!0!==u[r]&&(o=a[0],l.unshift(a[1]));break}if(!0!==s)if(s&&t.throws)e=s(e);else try{e=s(e)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+c+" to "+o}}}return{state:"success",data:e}}(h,w,O,d),d?(h.ifModified&&((x=O.getResponseHeader("Last-Modified"))&&(C.lastModified[r]=x),(x=O.getResponseHeader("etag"))&&(C.etag[r]=x)),204===t||"HEAD"===h.type?N="nocontent":304===t?N="notmodified":(N=w.state,p=w.data,d=!(y=w.error))):(y=N,!t&&N||(N="error",t<0&&(t=0))),O.status=t,O.statusText=(e||N)+"",d?v.resolveWith(f,[p,N,O]):v.rejectWith(f,[O,N,y]),O.statusCode(b),b=void 0,l&&m.trigger(d?"ajaxSuccess":"ajaxError",[O,h,d?p:y]),g.fireWith(f,[O,N]),l&&(m.trigger("ajaxComplete",[O,h]),--C.active||C.event.trigger("ajaxStop")))}return O},getJSON:function(t,e,n){return C.get(t,e,n,"json")},getScript:function(t,e){return C.get(t,void 0,e,"script")}}),C.each(["get","post"],(function(t,e){C[e]=function(t,n,i,r){return g(n)&&(r=r||i,i=n,n=void 0),C.ajax(C.extend({url:t,type:e,dataType:r,data:n,success:i},C.isPlainObject(t)&&t))}})),C.ajaxPrefilter((function(t){var e;for(e in t.headers)"content-type"===e.toLowerCase()&&(t.contentType=t.headers[e]||"")})),C._evalUrl=function(t,e,n){return C.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(t){C.globalEval(t,e,n)}})},C.fn.extend({wrapAll:function(t){var e;return this[0]&&(g(t)&&(t=t.call(this[0])),e=C(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map((function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t})).append(this)),this},wrapInner:function(t){return g(t)?this.each((function(e){C(this).wrapInner(t.call(this,e))})):this.each((function(){var e=C(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)}))},wrap:function(t){var e=g(t);return this.each((function(n){C(this).wrapAll(e?t.call(this,n):t)}))},unwrap:function(t){return this.parent(t).not("body").each((function(){C(this).replaceWith(this.childNodes)})),this}}),C.expr.pseudos.hidden=function(t){return!C.expr.pseudos.visible(t)},C.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},C.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(t){}};var We={0:200,1223:204},Ve=C.ajaxSettings.xhr();v.cors=!!Ve&&"withCredentials"in Ve,v.ajax=Ve=!!Ve,C.ajaxTransport((function(t){var e,i;if(v.cors||Ve&&!t.crossDomain)return{send:function(r,o){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(s,r[s]);e=function(t){return function(){e&&(e=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===t?a.abort():"error"===t?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(We[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=e(),i=a.onerror=a.ontimeout=e("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&n.setTimeout((function(){e&&i()}))},e=e("abort");try{a.send(t.hasContent&&t.data||null)}catch(t){if(e)throw t}},abort:function(){e&&e()}}})),C.ajaxPrefilter((function(t){t.crossDomain&&(t.contents.script=!1)})),C.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return C.globalEval(t),t}}}),C.ajaxPrefilter("script",(function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")})),C.ajaxTransport("script",(function(t){var e,n;if(t.crossDomain||t.scriptAttrs)return{send:function(i,r){e=C("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",n=function(t){e.remove(),n=null,t&&r("error"===t.type?404:200,t.type)}),y.head.appendChild(e[0])},abort:function(){n&&n()}}}));var Ye,Ke=[],Ge=/(=)\?(?=&|$)|\?\?/;C.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Ke.pop()||C.expando+"_"+Te.guid++;return this[t]=!0,t}}),C.ajaxPrefilter("json jsonp",(function(t,e,i){var r,o,s,a=!1!==t.jsonp&&(Ge.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ge.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return r=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Ge,"$1"+r):!1!==t.jsonp&&(t.url+=(ke.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return s||C.error(r+" was not called"),s[0]},t.dataTypes[0]="json",o=n[r],n[r]=function(){s=arguments},i.always((function(){void 0===o?C(n).removeProp(r):n[r]=o,t[r]&&(t.jsonpCallback=e.jsonpCallback,Ke.push(r)),s&&g(o)&&o(s[0]),s=o=void 0})),"script"})),v.createHTMLDocument=((Ye=y.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ye.childNodes.length),C.parseHTML=function(t,e,n){return"string"!=typeof t?[]:("boolean"==typeof e&&(n=e,e=!1),e||(v.createHTMLDocument?((i=(e=y.implementation.createHTMLDocument("")).createElement("base")).href=y.location.href,e.head.appendChild(i)):e=y),o=!n&&[],(r=P.exec(t))?[e.createElement(r[1])]:(r=Nt([t],e,o),o&&o.length&&C(o).remove(),C.merge([],r.childNodes)));var i,r,o},C.fn.load=function(t,e,n){var i,r,o,s=this,a=t.indexOf(" ");return a>-1&&(i=be(t.slice(a)),t=t.slice(0,a)),g(e)?(n=e,e=void 0):e&&"object"==typeof e&&(r="POST"),s.length>0&&C.ajax({url:t,type:r||"GET",dataType:"html",data:e}).done((function(t){o=arguments,s.html(i?C("<div>").append(C.parseHTML(t)).find(i):t)})).always(n&&function(t,e){s.each((function(){n.apply(this,o||[t.responseText,e,t])}))}),this},C.expr.pseudos.animated=function(t){return C.grep(C.timers,(function(e){return t===e.elem})).length},C.offset={setOffset:function(t,e,n){var i,r,o,s,a,c,u=C.css(t,"position"),l=C(t),d={};"static"===u&&(t.style.position="relative"),a=l.offset(),o=C.css(t,"top"),c=C.css(t,"left"),("absolute"===u||"fixed"===u)&&(o+c).indexOf("auto")>-1?(s=(i=l.position()).top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(c)||0),g(e)&&(e=e.call(t,n,C.extend({},a))),null!=e.top&&(d.top=e.top-a.top+s),null!=e.left&&(d.left=e.left-a.left+r),"using"in e?e.using.call(t,d):("number"==typeof d.top&&(d.top+="px"),"number"==typeof d.left&&(d.left+="px"),l.css(d))}},C.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each((function(e){C.offset.setOffset(this,t,e)}));var e,n,i=this[0];return i?i.getClientRects().length?(e=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,n,i=this[0],r={top:0,left:0};if("fixed"===C.css(i,"position"))e=i.getBoundingClientRect();else{for(e=this.offset(),n=i.ownerDocument,t=i.offsetParent||n.documentElement;t&&(t===n.body||t===n.documentElement)&&"static"===C.css(t,"position");)t=t.parentNode;t&&t!==i&&1===t.nodeType&&((r=C(t).offset()).top+=C.css(t,"borderTopWidth",!0),r.left+=C.css(t,"borderLeftWidth",!0))}return{top:e.top-r.top-C.css(i,"marginTop",!0),left:e.left-r.left-C.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var t=this.offsetParent;t&&"static"===C.css(t,"position");)t=t.offsetParent;return t||ot}))}}),C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(t,e){var n="pageYOffset"===e;C.fn[t]=function(i){return z(this,(function(t,i,r){var o;if(b(t)?o=t:9===t.nodeType&&(o=t.defaultView),void 0===r)return o?o[e]:t[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):t[i]=r}),t,i,arguments.length)}})),C.each(["top","left"],(function(t,e){C.cssHooks[e]=Vt(v.pixelPosition,(function(t,n){if(n)return n=Wt(t,e),Ut.test(n)?C(t).position()[e]+"px":n}))})),C.each({Height:"height",Width:"width"},(function(t,e){C.each({padding:"inner"+t,content:e,"":"outer"+t},(function(n,i){C.fn[i]=function(r,o){var s=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===o?"margin":"border");return z(this,(function(e,n,r){var o;return b(e)?0===i.indexOf("outer")?e["inner"+t]:e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===r?C.css(e,n,a):C.style(e,n,r,a)}),e,s?r:void 0,s)}}))})),C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(t,e){C.fn[e]=function(t){return this.on(e,t)}})),C.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)},hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(t,e){C.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}));var Xe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;C.proxy=function(t,e){var n,i,r;if("string"==typeof e&&(n=t[e],e=t,t=n),g(t))return i=a.call(arguments,2),(r=function(){return t.apply(e||this,i.concat(a.call(arguments)))}).guid=t.guid=t.guid||C.guid++,r},C.holdReady=function(t){t?C.readyWait++:C.ready(!0)},C.isArray=Array.isArray,C.parseJSON=JSON.parse,C.nodeName=A,C.isFunction=g,C.isWindow=b,C.camelCase=K,C.type=N,C.now=Date.now,C.isNumeric=function(t){var e=C.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},C.trim=function(t){return null==t?"":(t+"").replace(Xe,"")},void 0===(i=function(){return C}.apply(e,[]))||(t.exports=i);var Je=n.jQuery,Qe=n.$;return C.noConflict=function(t){return n.$===C&&(n.$=Qe),t&&n.jQuery===C&&(n.jQuery=Je),C},void 0===r&&(n.jQuery=n.$=C),C}))},function(t,e,n){(function(e){t.exports=e.m=n(85)}).call(this,n(25))},function(t,e,n){"use strict";var i=n(86);i.trust=n(105),i.fragment=n(106),t.exports=i},function(t,e,n){"use strict";var i=n(32);t.exports=function(t){return null==t&&(t=""),i("<",void 0,void 0,t,void 0,void 0)}},function(t,e,n){"use strict";var i=n(32),r=n(87);t.exports=function(){var t=r.apply(0,arguments);return t.tag="[",t.children=i.normalizeChildren(t.children),t}},function(t,e,n){"use strict";var i=n(88),r=n(72);t.exports=n(112)(window,i,r.redraw)},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var i,r,o,s,a,c=1,u={},l=!1,d=t.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(t);p=p&&p.setTimeout?p:t,"[object process]"==={}.toString.call(t.process)?i=function(t){e.nextTick((function(){f(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){f(t.data)},i=function(t){o.port2.postMessage(t)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,i=function(t){var e=d.createElement("script");e.onreadystatechange=function(){f(t),e.onreadystatechange=null,r.removeChild(e),e=null},r.appendChild(e)}):i=function(t){setTimeout(f,0,t)}:(s="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&f(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),i=function(e){t.postMessage(s+e,"*")}),p.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return u[c]=r,i(c),c++},p.clearImmediate=h}function h(t){delete u[t]}function f(t){if(l)setTimeout(f,0,t);else{var e=u[t];if(e){l=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(void 0,n)}}(e)}finally{h(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(25),n(109))},function(t,e){var n,i,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(t){i=s}}();var c,u=[],l=!1,d=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&h())}function h(){if(!l){var t=a(p);l=!0;for(var e=u.length;e;){for(c=u,u=[];++d<e;)c&&c[d].run();d=-1,e=u.length}c=null,l=!1,function(t){if(i===clearTimeout)return clearTimeout(t);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(t);try{i(t)}catch(e){try{return i.call(null,t)}catch(e){return i.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function m(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new f(t,e)),1!==u.length||l||a(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,e,n){"use strict";var i=n(32);t.exports=function(t){var e,n=t&&t.document,r={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function o(t){return t.attrs&&t.attrs.xmlns||r[t.tag]}function s(t,e){if(t.state!==e)throw new Error("`vnode.state` must not be modified")}function a(t){var e=t.state;try{return this.apply(e,arguments)}finally{s(t,e)}}function c(){try{return n.activeElement}catch(t){return null}}function u(t,e,n,i,r,o,s){for(var a=n;a<i;a++){var c=e[a];null!=c&&l(t,c,r,s,o)}}function l(t,e,r,s,c){var d=e.tag;if("string"==typeof d)switch(e.state={},null!=e.attrs&&M(e.attrs,e,r),d){case"#":!function(t,e,i){e.dom=n.createTextNode(e.children),y(t,e.dom,i)}(t,e,c);break;case"<":p(t,e,s,c);break;case"[":!function(t,e,i,r,o){var s=n.createDocumentFragment();if(null!=e.children){var a=e.children;u(s,a,0,a.length,i,null,r)}e.dom=s.firstChild,e.domSize=s.childNodes.length,y(t,s,o)}(t,e,r,s,c);break;default:!function(t,e,r,s,a){var c=e.tag,l=e.attrs,d=l&&l.is,p=(s=o(e)||s)?d?n.createElementNS(s,c,{is:d}):n.createElementNS(s,c):d?n.createElement(c,{is:d}):n.createElement(c);e.dom=p,null!=l&&function(t,e,n){for(var i in e)k(t,i,null,e[i],n)}(e,l,s);if(y(t,p,a),!w(e)&&(null!=e.text&&(""!==e.text?p.textContent=e.text:e.children=[i("#",void 0,void 0,e.text,void 0,void 0)]),null!=e.children)){var h=e.children;u(p,h,0,h.length,r,null,s),"select"===e.tag&&null!=l&&function(t,e){if("value"in e)if(null===e.value)-1!==t.dom.selectedIndex&&(t.dom.value=null);else{var n=""+e.value;t.dom.value===n&&-1!==t.dom.selectedIndex||(t.dom.value=n)}"selectedIndex"in e&&k(t,"selectedIndex",null,e.selectedIndex,void 0)}(e,l)}}(t,e,r,s,c)}else!function(t,e,n,r,o){(function(t,e){var n;if("function"==typeof t.tag.view){if(t.state=Object.create(t.tag),null!=(n=t.state.view).$$reentrantLock$$)return;n.$$reentrantLock$$=!0}else{if(t.state=void 0,null!=(n=t.tag).$$reentrantLock$$)return;n.$$reentrantLock$$=!0,t.state=null!=t.tag.prototype&&"function"==typeof t.tag.prototype.view?new t.tag(t):t.tag(t)}M(t.state,t,e),null!=t.attrs&&M(t.attrs,t,e);if(t.instance=i.normalize(a.call(t.state.view,t)),t.instance===t)throw Error("A view cannot return the vnode it received as argument");n.$$reentrantLock$$=null})(e,n),null!=e.instance?(l(t,e.instance,n,r,o),e.dom=e.instance.dom,e.domSize=null!=e.dom?e.instance.domSize:0):e.domSize=0}(t,e,r,s,c)}var d={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function p(t,e,i,r){var o=e.children.match(/^\s*?<(\w+)/im)||[],s=n.createElement(d[o[1]]||"div");"http://www.w3.org/2000/svg"===i?(s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e.children+"</svg>",s=s.firstChild):s.innerHTML=e.children,e.dom=s.firstChild,e.domSize=s.childNodes.length,e.instance=[];for(var a,c=n.createDocumentFragment();a=s.firstChild;)e.instance.push(a),c.appendChild(a);y(t,c,r)}function h(t,e,n,i,r,o){if(e!==n&&(null!=e||null!=n))if(null==e||0===e.length)u(t,n,0,n.length,i,r,o);else if(null==n||0===n.length)x(t,e,0,e.length);else{var s=null!=e[0]&&null!=e[0].key,a=null!=n[0]&&null!=n[0].key,c=0,d=0;if(!s)for(;d<e.length&&null==e[d];)d++;if(!a)for(;c<n.length&&null==n[c];)c++;if(null===a&&null==s)return;if(s!==a)x(t,e,d,e.length),u(t,n,c,n.length,i,r,o);else if(a){for(var p,h,y,w,C,O=e.length-1,T=n.length-1;O>=d&&T>=c&&(y=e[O],w=n[T],y.key===w.key);)y!==w&&f(t,y,w,i,r,o),null!=w.dom&&(r=w.dom),O--,T--;for(;O>=d&&T>=c&&(p=e[d],h=n[c],p.key===h.key);)d++,c++,p!==h&&f(t,p,h,i,g(e,d,r),o);for(;O>=d&&T>=c&&c!==T&&p.key===w.key&&y.key===h.key;)b(t,y,C=g(e,d,r)),y!==h&&f(t,y,h,i,C,o),++c<=--T&&b(t,p,r),p!==w&&f(t,p,w,i,r,o),null!=w.dom&&(r=w.dom),d++,y=e[--O],w=n[T],p=e[d],h=n[c];for(;O>=d&&T>=c&&y.key===w.key;)y!==w&&f(t,y,w,i,r,o),null!=w.dom&&(r=w.dom),T--,y=e[--O],w=n[T];if(c>T)x(t,e,d,O+1);else if(d>O)u(t,n,c,T+1,i,r,o);else{var k,j,S=r,A=T-c+1,P=new Array(A),E=0,D=0,$=2147483647,_=0;for(D=0;D<A;D++)P[D]=-1;for(D=T;D>=c;D--){null==k&&(k=m(e,d,O+1));var I=k[(w=n[D]).key];null!=I&&($=I<$?I:-1,P[D-c]=I,y=e[I],e[I]=null,y!==w&&f(t,y,w,i,r,o),null!=w.dom&&(r=w.dom),_++)}if(r=S,_!==O-d+1&&x(t,e,d,O+1),0===_)u(t,n,c,T+1,i,r,o);else if(-1===$)for(E=(j=function(t){var e=[0],n=0,i=0,r=0,o=v.length=t.length;for(r=0;r<o;r++)v[r]=t[r];for(r=0;r<o;++r)if(-1!==t[r]){var s=e[e.length-1];if(t[s]<t[r])v[r]=s,e.push(r);else{for(n=0,i=e.length-1;n<i;){var a=(n>>>1)+(i>>>1)+(n&i&1);t[e[a]]<t[r]?n=a+1:i=a}t[r]<t[e[n]]&&(n>0&&(v[r]=e[n-1]),e[n]=r)}}n=e.length,i=e[n-1];for(;n-- >0;)e[n]=i,i=v[i];return v.length=0,e}(P)).length-1,D=T;D>=c;D--)h=n[D],-1===P[D-c]?l(t,h,i,o,r):j[E]===D-c?E--:b(t,h,r),null!=h.dom&&(r=n[D].dom);else for(D=T;D>=c;D--)h=n[D],-1===P[D-c]&&l(t,h,i,o,r),null!=h.dom&&(r=n[D].dom)}}else{var M=e.length<n.length?e.length:n.length;for(c=c<d?c:d;c<M;c++)(p=e[c])===(h=n[c])||null==p&&null==h||(null==p?l(t,h,i,o,g(e,c+1,r)):null==h?N(t,p):f(t,p,h,i,g(e,c+1,r),o));e.length>M&&x(t,e,c,e.length),n.length>M&&u(t,n,c,n.length,i,r,o)}}}function f(t,e,n,r,s,c){var u=e.tag;if(u===n.tag){if(n.state=e.state,n.events=e.events,function(t,e){do{var n;if(null!=t.attrs&&"function"==typeof t.attrs.onbeforeupdate)if(void 0!==(n=a.call(t.attrs.onbeforeupdate,t,e))&&!n)break;if("string"!=typeof t.tag&&"function"==typeof t.state.onbeforeupdate)if(void 0!==(n=a.call(t.state.onbeforeupdate,t,e))&&!n)break;return!1}while(0);return t.dom=e.dom,t.domSize=e.domSize,t.instance=e.instance,t.attrs=e.attrs,t.children=e.children,t.text=e.text,!0}(n,e))return;if("string"==typeof u)switch(null!=n.attrs&&L(n.attrs,n,r),u){case"#":!function(t,e){t.children.toString()!==e.children.toString()&&(t.dom.nodeValue=e.children);e.dom=t.dom}(e,n);break;case"<":!function(t,e,n,i,r){e.children!==n.children?(C(t,e),p(t,n,i,r)):(n.dom=e.dom,n.domSize=e.domSize,n.instance=e.instance)}(t,e,n,c,s);break;case"[":!function(t,e,n,i,r,o){h(t,e.children,n.children,i,r,o);var s=0,a=n.children;if(n.dom=null,null!=a){for(var c=0;c<a.length;c++){var u=a[c];null!=u&&null!=u.dom&&(null==n.dom&&(n.dom=u.dom),s+=u.domSize||1)}1!==s&&(n.domSize=s)}}(t,e,n,r,s,c);break;default:!function(t,e,n,r){var s=e.dom=t.dom;r=o(e)||r,"textarea"===e.tag&&(null==e.attrs&&(e.attrs={}),null!=e.text&&(e.attrs.value=e.text,e.text=void 0));(function(t,e,n,i){if(null!=n)for(var r in n)k(t,r,e&&e[r],n[r],i);var o;if(null!=e)for(var r in e)null==(o=e[r])||null!=n&&null!=n[r]||j(t,r,o,i)})(e,t.attrs,e.attrs,r),w(e)||(null!=t.text&&null!=e.text&&""!==e.text?t.text.toString()!==e.text.toString()&&(t.dom.firstChild.nodeValue=e.text):(null!=t.text&&(t.children=[i("#",void 0,void 0,t.text,void 0,t.dom.firstChild)]),null!=e.text&&(e.children=[i("#",void 0,void 0,e.text,void 0,void 0)]),h(s,t.children,e.children,n,null,r)))}(e,n,r,c)}else!function(t,e,n,r,o,s){if(n.instance=i.normalize(a.call(n.state.view,n)),n.instance===n)throw Error("A view cannot return the vnode it received as argument");L(n.state,n,r),null!=n.attrs&&L(n.attrs,n,r);null!=n.instance?(null==e.instance?l(t,n.instance,r,s,o):f(t,e.instance,n.instance,r,o,s),n.dom=n.instance.dom,n.domSize=n.instance.domSize):null!=e.instance?(N(t,e.instance),n.dom=void 0,n.domSize=0):(n.dom=e.dom,n.domSize=e.domSize)}(t,e,n,r,s,c)}else N(t,e),l(t,n,r,c,s)}function m(t,e,n){for(var i=Object.create(null);e<n;e++){var r=t[e];if(null!=r){var o=r.key;null!=o&&(i[o]=e)}}return i}var v=[];function g(t,e,n){for(;e<t.length;e++)if(null!=t[e]&&null!=t[e].dom)return t[e].dom;return n}function b(t,e,i){var r=n.createDocumentFragment();!function t(e,n,i){for(;null!=i.dom&&i.dom.parentNode===e;){if("string"!=typeof i.tag){if(null!=(i=i.instance))continue}else if("<"===i.tag)for(var r=0;r<i.instance.length;r++)n.appendChild(i.instance[r]);else if("["!==i.tag)n.appendChild(i.dom);else if(1===i.children.length){if(null!=(i=i.children[0]))continue}else for(r=0;r<i.children.length;r++){var o=i.children[r];null!=o&&t(e,n,o)}break}}(t,r,e),y(t,r,i)}function y(t,e,n){null!=n?t.insertBefore(e,n):t.appendChild(e)}function w(t){if(null==t.attrs||null==t.attrs.contenteditable&&null==t.attrs.contentEditable)return!1;var e=t.children;if(null!=e&&1===e.length&&"<"===e[0].tag){var n=e[0].children;t.dom.innerHTML!==n&&(t.dom.innerHTML=n)}else if(null!=t.text||null!=e&&0!==e.length)throw new Error("Child node of a contenteditable must be trusted");return!0}function x(t,e,n,i){for(var r=n;r<i;r++){var o=e[r];null!=o&&N(t,o)}}function N(t,e){var n,i,r,o=0,c=e.state;"string"!=typeof e.tag&&"function"==typeof e.state.onbeforeremove&&(null!=(r=a.call(e.state.onbeforeremove,e))&&"function"==typeof r.then&&(o=1,n=r));e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(r=a.call(e.attrs.onbeforeremove,e))&&"function"==typeof r.then&&(o|=2,i=r));if(s(e,c),o){if(null!=n){var u=function(){1&o&&((o&=2)||l())};n.then(u,u)}if(null!=i){u=function(){2&o&&((o&=1)||l())};i.then(u,u)}}else T(e),O(t,e);function l(){s(e,c),T(e),O(t,e)}}function C(t,e){for(var n=0;n<e.instance.length;n++)t.removeChild(e.instance[n])}function O(t,e){for(;null!=e.dom&&e.dom.parentNode===t;){if("string"!=typeof e.tag){if(null!=(e=e.instance))continue}else if("<"===e.tag)C(t,e);else{if("["!==e.tag&&(t.removeChild(e.dom),!Array.isArray(e.children)))break;if(1===e.children.length){if(null!=(e=e.children[0]))continue}else for(var n=0;n<e.children.length;n++){var i=e.children[n];null!=i&&O(t,i)}}break}}function T(t){if("string"!=typeof t.tag&&"function"==typeof t.state.onremove&&a.call(t.state.onremove,t),t.attrs&&"function"==typeof t.attrs.onremove&&a.call(t.attrs.onremove,t),"string"!=typeof t.tag)null!=t.instance&&T(t.instance);else{var e=t.children;if(Array.isArray(e))for(var n=0;n<e.length;n++){var i=e[n];null!=i&&T(i)}}}function k(t,e,i,r,o){if("key"!==e&&"is"!==e&&null!=r&&!S(e)&&(i!==r||function(t,e){return"value"===e||"checked"===e||"selectedIndex"===e||"selected"===e&&t.dom===c()||"option"===t.tag&&t.dom.parentNode===n.activeElement}(t,e)||"object"==typeof r)){if("o"===e[0]&&"n"===e[1])return I(t,e,r);if("xlink:"===e.slice(0,6))t.dom.setAttributeNS("http://www.w3.org/1999/xlink",e.slice(6),r);else if("style"===e)$(t.dom,i,r);else if(A(t,e,o)){if("value"===e){if(("input"===t.tag||"textarea"===t.tag)&&t.dom.value===""+r&&t.dom===c())return;if("select"===t.tag&&null!==i&&t.dom.value===""+r)return;if("option"===t.tag&&null!==i&&t.dom.value===""+r)return}"input"===t.tag&&"type"===e?t.dom.setAttribute(e,r):t.dom[e]=r}else"boolean"==typeof r?r?t.dom.setAttribute(e,""):t.dom.removeAttribute(e):t.dom.setAttribute("className"===e?"class":e,r)}}function j(t,e,n,i){if("key"!==e&&"is"!==e&&null!=n&&!S(e))if("o"!==e[0]||"n"!==e[1]||S(e))if("style"===e)$(t.dom,n,null);else if(!A(t,e,i)||"className"===e||"value"===e&&("option"===t.tag||"select"===t.tag&&-1===t.dom.selectedIndex&&t.dom===c())||"input"===t.tag&&"type"===e){var r=e.indexOf(":");-1!==r&&(e=e.slice(r+1)),!1!==n&&t.dom.removeAttribute("className"===e?"class":e)}else t.dom[e]=null;else I(t,e,void 0)}function S(t){return"oninit"===t||"oncreate"===t||"onupdate"===t||"onremove"===t||"onbeforeremove"===t||"onbeforeupdate"===t}function A(t,e,n){return void 0===n&&(t.tag.indexOf("-")>-1||null!=t.attrs&&t.attrs.is||"href"!==e&&"list"!==e&&"form"!==e&&"width"!==e&&"height"!==e)&&e in t.dom}var P=/[A-Z]/g;function E(t){return"-"+t.toLowerCase()}function D(t){return"-"===t[0]&&"-"===t[1]?t:"cssFloat"===t?"float":t.replace(P,E)}function $(t,e,n){if(e===n);else if(null==n)t.style.cssText="";else if("object"!=typeof n)t.style.cssText=n;else if(null==e||"object"!=typeof e)for(var i in t.style.cssText="",n){null!=(r=n[i])&&t.style.setProperty(D(i),String(r))}else{for(var i in n){var r;null!=(r=n[i])&&(r=String(r))!==String(e[i])&&t.style.setProperty(D(i),r)}for(var i in e)null!=e[i]&&null==n[i]&&t.style.removeProperty(D(i))}}function _(){this._=e}function I(t,e,n){if(null!=t.events){if(t.events[e]===n)return;null==n||"function"!=typeof n&&"object"!=typeof n?(null!=t.events[e]&&t.dom.removeEventListener(e.slice(2),t.events,!1),t.events[e]=void 0):(null==t.events[e]&&t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=n)}else null==n||"function"!=typeof n&&"object"!=typeof n||(t.events=new _,t.dom.addEventListener(e.slice(2),t.events,!1),t.events[e]=n)}function M(t,e,n){"function"==typeof t.oninit&&a.call(t.oninit,e),"function"==typeof t.oncreate&&n.push(a.bind(t.oncreate,e))}function L(t,e,n){"function"==typeof t.onupdate&&n.push(a.bind(t.onupdate,e))}return _.prototype=Object.create(null),_.prototype.handleEvent=function(t){var e,n=this["on"+t.type];"function"==typeof n?e=n.call(t.currentTarget,t):"function"==typeof n.handleEvent&&n.handleEvent(t),this._&&!1!==t.redraw&&(0,this._)(),!1===e&&(t.preventDefault(),t.stopPropagation())},function(t,n,r){if(!t)throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var o=[],s=c(),a=t.namespaceURI;null==t.vnodes&&(t.textContent=""),n=i.normalizeChildren(Array.isArray(n)?n:[n]);var u=e;try{e="function"==typeof r?r:void 0,h(t,t.vnodes,n,o,null,"http://www.w3.org/1999/xhtml"===a?void 0:a)}finally{e=u}t.vnodes=n,null!=s&&c()!==s&&"function"==typeof s.focus&&s.focus();for(var l=0;l<o.length;l++)o[l]()}}},function(t,e,n){"use strict";var i=n(32);t.exports=function(t,e,n){var r=[],o=!1,s=!1;function a(){if(o)throw new Error("Nested m.redraw.sync() call");o=!0;for(var e=0;e<r.length;e+=2)try{t(r[e],i(r[e+1]),c)}catch(t){n.error(t)}o=!1}function c(){s||(s=!0,e((function(){s=!1,a()})))}return c.sync=a,{mount:function(e,n){if(null!=n&&null==n.view&&"function"!=typeof n)throw new TypeError("m.mount(element, component) expects a component, not a vnode");var o=r.indexOf(e);o>=0&&(r.splice(o,2),t(e,[],c)),null!=n&&(r.push(e,n),t(e,i(n),c))},redraw:c}}},function(t,e,n){"use strict";var i=n(73);t.exports=function(t,e,n){var r=0;function o(t){return new e(t)}function s(t){return function(r,s){"string"!=typeof r?(s=r,r=r.url):null==s&&(s={});var a=new e((function(e,n){t(i(r,s.params),s,(function(t){if("function"==typeof s.type)if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]=new s.type(t[n]);else t=new s.type(t);e(t)}),n)}));if(!0===s.background)return a;var c=0;function u(){0==--c&&"function"==typeof n&&n()}return function t(e){var n=e.then;return e.constructor=o,e.then=function(){c++;var i=n.apply(e,arguments);return i.then(u,(function(t){if(u(),0===c)throw t})),t(i)},e}(a)}}function a(t,e){for(var n in t.headers)if({}.hasOwnProperty.call(t.headers,n)&&e.test(n))return!0;return!1}return o.prototype=e.prototype,o.__proto__=e,{request:s((function(e,n,i,r){var o,s=null!=n.method?n.method.toUpperCase():"GET",c=n.body,u=!(null!=n.serialize&&n.serialize!==JSON.serialize||c instanceof t.FormData),l=n.responseType||("function"==typeof n.extract?"":"json"),d=new t.XMLHttpRequest,p=!1,h=d,f=d.abort;for(var m in d.abort=function(){p=!0,f.call(this)},d.open(s,e,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),u&&null!=c&&!a(n,/^content-type$/i)&&d.setRequestHeader("Content-Type","application/json; charset=utf-8"),"function"==typeof n.deserialize||a(n,/^accept$/i)||d.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(d.withCredentials=n.withCredentials),n.timeout&&(d.timeout=n.timeout),d.responseType=l,n.headers)({}).hasOwnProperty.call(n.headers,m)&&d.setRequestHeader(m,n.headers[m]);d.onreadystatechange=function(t){if(!p&&4===t.target.readyState)try{var o,s=t.target.status>=200&&t.target.status<300||304===t.target.status||/^file:\/\//i.test(e),a=t.target.response;if("json"===l?t.target.responseType||"function"==typeof n.extract||(a=JSON.parse(t.target.responseText)):l&&"text"!==l||null==a&&(a=t.target.responseText),"function"==typeof n.extract?(a=n.extract(t.target,n),s=!0):"function"==typeof n.deserialize&&(a=n.deserialize(a)),s)i(a);else{try{o=t.target.responseText}catch(t){o=a}var c=new Error(o);c.code=t.target.status,c.response=a,r(c)}}catch(t){r(t)}},"function"==typeof n.config&&(d=n.config(d,n,e)||d)!==h&&(o=d.abort,d.abort=function(){p=!0,o.call(this)}),null==c?d.send():"function"==typeof n.serialize?d.send(n.serialize(c)):c instanceof t.FormData?d.send(c):d.send(JSON.stringify(c))})),jsonp:s((function(e,n,i,o){var s=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,a=t.document.createElement("script");t[s]=function(e){delete t[s],a.parentNode.removeChild(a),i(e)},a.onerror=function(){delete t[s],a.parentNode.removeChild(a),o(new Error("JSONP request failed"))},a.src=e+(e.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(s),t.document.documentElement.appendChild(a)}))}}},function(t,e,n){"use strict";var i=n(72);t.exports=n(114)(window,i)},function(t,e,n){"use strict";(function(e){var i=n(32),r=n(86),o=n(88),s=n(73),a=n(74),c=n(115),u=n(93),l={};t.exports=function(t,n){var d;function p(e,n,i){if(e=s(e,n),null!=d){d();var r=i?i.state:null,o=i?i.title:null;i&&i.replace?t.history.replaceState(r,o,y.prefix+e):t.history.pushState(r,o,y.prefix+e)}else t.location.href=y.prefix+e}var h,f,m,v,g=l,b=y.SKIP={};function y(r,s,w){if(null==r)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var x,N=0,C=Object.keys(w).map((function(t){if("/"!==t[0])throw new SyntaxError("Routes must start with a `/`");if(/:([^\/\.-]+)(\.{3})?:/.test(t))throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`");return{route:t,component:w[t],check:c(t)}})),O="function"==typeof e?e:setTimeout,T=o.resolve(),k=!1;if(d=null,null!=s){var j=a(s);if(!C.some((function(t){return t.check(j)})))throw new ReferenceError("Default route doesn't match any known routes")}function S(){k=!1;var e=t.location.hash;"#"!==y.prefix[0]&&(e=t.location.search+e,"?"!==y.prefix[0]&&"/"!==(e=t.location.pathname+e)[0]&&(e="/"+e));var i=e.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent).slice(y.prefix.length),r=a(i);function o(){if(i===s)throw new Error("Could not resolve default route "+s);p(s,null,{replace:!0})}u(r.params,t.history.state),function t(e){for(;e<C.length;e++)if(C[e].check(r)){var s=C[e].component,a=C[e].route,c=s,u=v=function(o){if(u===v){if(o===b)return t(e+1);h=null==o||"function"!=typeof o.view&&"function"!=typeof o?"div":o,f=r.params,m=i,v=null,g=s.render?s:null,2===N?n.redraw():(N=2,n.redraw.sync())}};return void(s.view||"function"==typeof s?(s={},u(c)):s.onmatch?T.then((function(){return s.onmatch(r.params,i,a)})).then(u,o):u("div"))}o()}(0)}return d=function(){k||(k=!0,O(S))},"function"==typeof t.history.pushState?(x=function(){t.removeEventListener("popstate",d,!1)},t.addEventListener("popstate",d,!1)):"#"===y.prefix[0]&&(d=null,x=function(){t.removeEventListener("hashchange",S,!1)},t.addEventListener("hashchange",S,!1)),n.mount(r,{onbeforeupdate:function(){return!(!(N=N?2:1)||l===g)},oncreate:S,onremove:x,view:function(){if(N&&l!==g){var t=[i(h,f.key,f)];return g&&(t=g.render(t[0])),t}}})}return y.set=function(t,e,n){null!=v&&((n=n||{}).replace=!0),v=null,p(t,e,n)},y.get=function(){return m},y.prefix="#!",y.Link={view:function(t){var e,n,i=t.attrs.options,o={};u(o,t.attrs),o.selector=o.options=o.key=o.oninit=o.oncreate=o.onbeforeupdate=o.onupdate=o.onbeforeremove=o.onremove=null;var s=r(t.attrs.selector||"a",o,t.children);return(s.attrs.disabled=Boolean(s.attrs.disabled))?(s.attrs.href=null,s.attrs["aria-disabled"]="true",s.attrs.onclick=null):(e=s.attrs.onclick,n=s.attrs.href,s.attrs.href=y.prefix+n,s.attrs.onclick=function(t){var r;"function"==typeof e?r=e.call(t.currentTarget,t):null==e||"object"!=typeof e||"function"==typeof e.handleEvent&&e.handleEvent(t),!1===r||t.defaultPrevented||0!==t.button&&0!==t.which&&1!==t.which||t.currentTarget.target&&"_self"!==t.currentTarget.target||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey||(t.preventDefault(),t.redraw=!1,y.set(n,null,i))}),s}},y.param=function(t){return f&&null!=t?f[t]:f},y}}).call(this,n(90).setImmediate)},function(t,e,n){"use strict";var i=n(74);t.exports=function(t){var e=i(t),n=Object.keys(e.params),r=[],o=new RegExp("^"+e.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,(function(t,e,n){return null==e?"\\"+t:(r.push({k:e,r:"..."===n}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))}))+"$");return function(t){for(var i=0;i<n.length;i++)if(e.params[n[i]]!==t.params[n[i]])return!1;if(!r.length)return o.test(t.path);var s=o.exec(t.path);if(null==s)return!1;for(i=0;i<r.length;i++)t.params[r[i].k]=r[i].r?s[i+1]:decodeURIComponent(s[i+1]);return!0}}},function(t,e,n){(function(e){t.exports=e.dayjs=n(28)}).call(this,n(25))},function(t,e,n){(function(e){e.m||(e.m={}),t.exports=e.m.bidi=n(118)}).call(this,n(25))},function(t,e,n){var i,r,o,s;s=function(t){function e(t,e){var n="select"===t.tag?t.attrs.multi?"multi":"select":t.attrs.type;return t.attrs.onchange="multi"===n?function(){e([].slice.call(this.selectedOptions,(function(t){return t.value})))}:"select"===n?function(t){e(this.selectedOptions[0].value)}:"checkbox"===n?function(t){e(this.checked)}:t.attrs.oninput=function(t){e(this.value)},"select"===t.tag?t.children.forEach((function(t){t.attrs.value!==e()&&t.children[0]!==e()||(t.attrs.selected=!0)})):"checkbox"===n?t.attrs.checked=e():"radio"===n?t.attrs.checked=e()===t.attrs.value:t.attrs.value=e(),t}return e.view=function(t,n,i){return e(n,n.attrs.bidi)},t.attrs&&(t.attrs.bidi=e),t.bidi=e,e},r=[n(85)],void 0===(o="function"==typeof(i=s)?i.apply(e,r):i)||(t.exports=o)},function(t,e){!function(t){"use strict";var e=function(n,i){this.options=t.extend({},e.DEFAULTS,i);var r=this.options.target===e.DEFAULTS.target?t(this.options.target):t(document).find(this.options.target);this.$target=r.on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(n),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function n(n){return this.each((function(){var i=t(this),r=i.data("bs.affix"),o="object"==typeof n&&n;r||i.data("bs.affix",r=new e(this,o)),"string"==typeof n&&r[n]()}))}e.VERSION="3.4.1",e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0,target:window},e.prototype.getState=function(t,e,n,i){var r=this.$target.scrollTop(),o=this.$element.offset(),s=this.$target.height();if(null!=n&&"top"==this.affixed)return r<n&&"top";if("bottom"==this.affixed)return null!=n?!(r+this.unpin<=o.top)&&"bottom":!(r+s<=t-i)&&"bottom";var a=null==this.affixed,c=a?r:o.top;return null!=n&&r<=n?"top":null!=i&&c+(a?s:e)>=t-i&&"bottom"},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop(),n=this.$element.offset();return this.pinnedOffset=n.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var n=this.$element.height(),i=this.options.offset,r=i.top,o=i.bottom,s=Math.max(t(document).height(),t(document.body).height());"object"!=typeof i&&(o=r=i),"function"==typeof r&&(r=i.top(this.$element)),"function"==typeof o&&(o=i.bottom(this.$element));var a=this.getState(s,n,r,o);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var c="affix"+(a?"-"+a:""),u=t.Event(c+".bs.affix");if(this.$element.trigger(u),u.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(c).trigger(c.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:s-n-o})}};var i=t.fn.affix;t.fn.affix=n,t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",(function(){t('[data-spy="affix"]').each((function(){var e=t(this),i=e.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),n.call(e,i)}))}))}(jQuery)},function(t,e){!function(t){"use strict";var e='[data-toggle="dropdown"]',n=function(e){t(e).on("click.bs.dropdown",this.toggle)};function i(e){var n=e.attr("data-target");n||(n=(n=e.attr("href"))&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==n?t(document).find(n):null;return i&&i.length?i:e.parent()}function r(n){n&&3===n.which||(t(".dropdown-backdrop").remove(),t(e).each((function(){var e=t(this),r=i(e),o={relatedTarget:this};r.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&t.contains(r[0],n.target)||(r.trigger(n=t.Event("hide.bs.dropdown",o)),n.isDefaultPrevented()||(e.attr("aria-expanded","false"),r.removeClass("open").trigger(t.Event("hidden.bs.dropdown",o)))))})))}n.VERSION="3.4.1",n.prototype.toggle=function(e){var n=t(this);if(!n.is(".disabled, :disabled")){var o=i(n),s=o.hasClass("open");if(r(),!s){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",r);var a={relatedTarget:this};if(o.trigger(e=t.Event("show.bs.dropdown",a)),e.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),o.toggleClass("open").trigger(t.Event("shown.bs.dropdown",a))}return!1}},n.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var r=t(this);if(n.preventDefault(),n.stopPropagation(),!r.is(".disabled, :disabled")){var o=i(r),s=o.hasClass("open");if(!s&&27!=n.which||s&&27==n.which)return 27==n.which&&o.find(e).trigger("focus"),r.trigger("click");var a=o.find(".dropdown-menu li:not(.disabled):visible a");if(a.length){var c=a.index(n.target);38==n.which&&c>0&&c--,40==n.which&&c<a.length-1&&c++,~c||(c=0),a.eq(c).trigger("focus")}}}};var o=t.fn.dropdown;t.fn.dropdown=function(e){return this.each((function(){var i=t(this),r=i.data("bs.dropdown");r||i.data("bs.dropdown",r=new n(this)),"string"==typeof e&&r[e].call(i)}))},t.fn.dropdown.Constructor=n,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=o,this},t(document).on("click.bs.dropdown.data-api",r).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})).on("click.bs.dropdown.data-api",e,n.prototype.toggle).on("keydown.bs.dropdown.data-api",e,n.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",n.prototype.keydown)}(jQuery)},function(t,e){!function(t){"use strict";var e=function(e,n){this.options=n,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy((function(){this.$element.trigger("loaded.bs.modal")}),this))};function n(n,i){return this.each((function(){var r=t(this),o=r.data("bs.modal"),s=t.extend({},e.DEFAULTS,r.data(),"object"==typeof n&&n);o||r.data("bs.modal",o=new e(this,s)),"string"==typeof n?o[n](i):s.show&&o.show(i)}))}e.VERSION="3.4.1",e.TRANSITION_DURATION=300,e.BACKDROP_TRANSITION_DURATION=150,e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},e.prototype.show=function(n){var i=this,r=t.Event("show.bs.modal",{relatedTarget:n});this.$element.trigger(r),this.isShown||r.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",(function(){i.$element.one("mouseup.dismiss.bs.modal",(function(e){t(e.target).is(i.$element)&&(i.ignoreBackdropClick=!0)}))})),this.backdrop((function(){var r=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),r&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var o=t.Event("shown.bs.modal",{relatedTarget:n});r?i.$dialog.one("bsTransitionEnd",(function(){i.$element.trigger("focus").trigger(o)})).emulateTransitionEnd(e.TRANSITION_DURATION):i.$element.trigger("focus").trigger(o)})))},e.prototype.hide=function(n){n&&n.preventDefault(),n=t.Event("hide.bs.modal"),this.$element.trigger(n),this.isShown&&!n.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(e.TRANSITION_DURATION):this.hideModal())},e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy((function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")}),this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy((function(t){27==t.which&&this.hide()}),this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},e.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop((function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")}))},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(n){var i=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=t.support.transition&&r;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+r).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy((function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())}),this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!n)return;o?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):n()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){i.removeBackdrop(),n&&n()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):s()}else n&&n()},e.prototype.handleUpdate=function(){this.adjustDialog()},e.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},e.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},e.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},e.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",e+n),t(this.fixedContent).each((function(e,i){var r=i.style.paddingRight,o=t(i).css("padding-right");t(i).data("padding-right",r).css("padding-right",parseFloat(o)+n+"px")})))},e.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),t(this.fixedContent).each((function(e,n){var i=t(n).data("padding-right");t(n).removeData("padding-right"),n.style.paddingRight=i||""}))},e.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=t.fn.modal;t.fn.modal=n,t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(e){var i=t(this),r=i.attr("href"),o=i.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,""),s=t(document).find(o),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(r)&&r},s.data(),i.data());i.is("a")&&e.preventDefault(),s.one("show.bs.modal",(function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",(function(){i.is(":visible")&&i.trigger("focus")}))})),n.call(s,a,this)}))}(jQuery)},function(t,e){!function(t){"use strict";var e=["sanitize","whiteList","sanitizeFn"],n=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],i={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,o=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function s(e,i){var s=e.nodeName.toLowerCase();if(-1!==t.inArray(s,i))return-1===t.inArray(s,n)||Boolean(e.nodeValue.match(r)||e.nodeValue.match(o));for(var a=t(i).filter((function(t,e){return e instanceof RegExp})),c=0,u=a.length;c<u;c++)if(s.match(a[c]))return!0;return!1}function a(e,n,i){if(0===e.length)return e;if(i&&"function"==typeof i)return i(e);if(!document.implementation||!document.implementation.createHTMLDocument)return e;var r=document.implementation.createHTMLDocument("sanitization");r.body.innerHTML=e;for(var o=t.map(n,(function(t,e){return e})),a=t(r.body).find("*"),c=0,u=a.length;c<u;c++){var l=a[c],d=l.nodeName.toLowerCase();if(-1!==t.inArray(d,o))for(var p=t.map(l.attributes,(function(t){return t})),h=[].concat(n["*"]||[],n[d]||[]),f=0,m=p.length;f<m;f++)s(p[f],h)||l.removeAttribute(p[f].nodeName);else l.parentNode.removeChild(l)}return r.body.innerHTML}var c=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};c.VERSION="3.4.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:i},c.prototype.init=function(e,n,i){if(this.enabled=!0,this.type=e,this.$element=t(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(document).find(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var r=this.options.trigger.split(" "),o=r.length;o--;){var s=r[o];if("click"==s)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",c="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(c+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(n){var i=this.$element.data();for(var r in i)i.hasOwnProperty(r)&&-1!==t.inArray(r,e)&&delete i[r];return(n=t.extend({},this.getDefaults(),i,n)).delay&&"number"==typeof n.delay&&(n.delay={show:n.delay,hide:n.delay}),n.sanitize&&(n.template=a(n.template,n.whiteList,n.sanitizeFn)),n},c.prototype.getDelegateOptions=function(){var e={},n=this.getDefaults();return this._options&&t.each(this._options,(function(t,i){n[t]!=i&&(e[t]=i)})),e},c.prototype.enter=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusin"==e.type?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState)n.hoverState="in";else{if(clearTimeout(n.timeout),n.hoverState="in",!n.options.delay||!n.options.delay.show)return n.show();n.timeout=setTimeout((function(){"in"==n.hoverState&&n.show()}),n.options.delay.show)}},c.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},c.prototype.leave=function(e){var n=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);if(n||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n)),e instanceof t.Event&&(n.inState["focusout"==e.type?"focus":"hover"]=!1),!n.isInStateTrue()){if(clearTimeout(n.timeout),n.hoverState="out",!n.options.delay||!n.options.delay.hide)return n.hide();n.timeout=setTimeout((function(){"out"==n.hoverState&&n.hide()}),n.options.delay.hide)}},c.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var n=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!n)return;var i=this,r=this.tip(),o=this.getUID(this.type);this.setContent(),r.attr("id",o),this.$element.attr("aria-describedby",o),this.options.animation&&r.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,u=a.test(s);u&&(s=s.replace(a,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?r.appendTo(t(document).find(this.options.container)):r.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),d=r[0].offsetWidth,p=r[0].offsetHeight;if(u){var h=s,f=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+p>f.bottom?"top":"top"==s&&l.top-p<f.top?"bottom":"right"==s&&l.right+d>f.width?"left":"left"==s&&l.left-d<f.left?"right":s,r.removeClass(h).addClass(s)}var m=this.getCalculatedOffset(s,l,d,p);this.applyPlacement(m,s);var v=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};t.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",v).emulateTransitionEnd(c.TRANSITION_DURATION):v()}},c.prototype.applyPlacement=function(e,n){var i=this.tip(),r=i[0].offsetWidth,o=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),e.top+=s,e.left+=a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in");var c=i[0].offsetWidth,u=i[0].offsetHeight;"top"==n&&u!=o&&(e.top=e.top+o-u);var l=this.getViewportAdjustedDelta(n,e,c,u);l.left?e.left+=l.left:e.top+=l.top;var d=/top|bottom/.test(n),p=d?2*l.left-r+c:2*l.top-o+u,h=d?"offsetWidth":"offsetHeight";i.offset(e),this.replaceArrow(p,i[0][h],d)},c.prototype.replaceArrow=function(t,e,n){this.arrow().css(n?"left":"top",50*(1-t/e)+"%").css(n?"top":"left","")},c.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=a(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},c.prototype.hide=function(e){var n=this,i=t(this.$tip),r=t.Event("hide.bs."+this.type);function o(){"in"!=n.hoverState&&i.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}if(this.$element.trigger(r),!r.isDefaultPrevented())return i.removeClass("in"),t.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",o).emulateTransitionEnd(c.TRANSITION_DURATION):o(),this.hoverState=null,this},c.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(e){var n=(e=e||this.$element)[0],i="BODY"==n.tagName,r=n.getBoundingClientRect();null==r.width&&(r=t.extend({},r,{width:r.right-r.left,height:r.bottom-r.top}));var o=window.SVGElement&&n instanceof window.SVGElement,s=i?{top:0,left:0}:o?null:e.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},c=i?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},r,a,c,s)},c.prototype.getCalculatedOffset=function(t,e,n,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-n/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-n/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-n}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},c.prototype.getViewportAdjustedDelta=function(t,e,n,i){var r={top:0,left:0};if(!this.$viewport)return r;var o=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-o-s.scroll,c=e.top+o-s.scroll+i;a<s.top?r.top=s.top-a:c>s.top+s.height&&(r.top=s.top+s.height-c)}else{var u=e.left-o,l=e.left+o+n;u<s.left?r.left=s.left-u:l>s.right&&(r.left=s.left+s.width-l)}return r},c.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},c.prototype.getUID=function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(e){var n=this;e&&((n=t(e.currentTarget).data("bs."+this.type))||(n=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,n))),e?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},c.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide((function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null}))},c.prototype.sanitizeHtml=function(t){return a(t,this.options.whiteList,this.options.sanitizeFn)};var u=t.fn.tooltip;t.fn.tooltip=function(e){return this.each((function(){var n=t(this),i=n.data("bs.tooltip"),r="object"==typeof e&&e;!i&&/destroy|hide/.test(e)||(i||n.data("bs.tooltip",i=new c(this,r)),"string"==typeof e&&i[e]())}))},t.fn.tooltip.Constructor=c,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=u,this}}(jQuery)},function(t,e){!function(t){"use strict";t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one("bsTransitionEnd",(function(){n=!0}));return setTimeout((function(){n||t(i).trigger(t.support.transition.end)}),e),this},t((function(){t.support.transition=function(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})}))}(jQuery)},function(t,e){!function(t){function e(e){if("string"==typeof e.data&&(e.data={keys:e.data}),e.data&&e.data.keys&&"string"==typeof e.data.keys){var n=e.handler,i=e.data.keys.toLowerCase().split(" ");e.handler=function(e){if(this===e.target||!(t.hotkeys.options.filterInputAcceptingElements&&t.hotkeys.textInputTypes.test(e.target.nodeName)||t.hotkeys.options.filterContentEditable&&t(e.target).attr("contenteditable")||t.hotkeys.options.filterTextInputs&&t.inArray(e.target.type,t.hotkeys.textAcceptingInputTypes)>-1)){var r="keypress"!==e.type&&t.hotkeys.specialKeys[e.which],o=String.fromCharCode(e.which).toLowerCase(),s="",a={};t.each(["alt","ctrl","shift"],(function(t,n){e[n+"Key"]&&r!==n&&(s+=n+"+")})),e.metaKey&&!e.ctrlKey&&"meta"!==r&&(s+="meta+"),e.metaKey&&"meta"!==r&&s.indexOf("alt+ctrl+shift+")>-1&&(s=s.replace("alt+ctrl+shift+","hyper+")),r?a[s+r]=!0:(a[s+o]=!0,a[s+t.hotkeys.shiftNums[o]]=!0,"shift+"===s&&(a[t.hotkeys.shiftNums[o]]=!0));for(var c=0,u=i.length;c<u;c++)if(a[i[c]])return n.apply(this,arguments)}}}}t.hotkeys={version:"0.2.0",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],textInputTypes:/textarea|input|select/i,options:{filterInputAcceptingElements:!0,filterTextInputs:!0,filterContentEditable:!0}},t.each(["keydown","keyup","keypress"],(function(){t.event.special[this]={add:e}}))}(jQuery||this.jQuery||window.jQuery)},function(t,e,n){!function(){"use strict";n.SKIP={},n.lift=function(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return r(e).map((function(e){return t.apply(void 0,e)}))},n.scan=function(t,e,i){var r=i.map((function(i){var r=t(e,i);return r!==n.SKIP&&(e=r),r}));return r(e),r},n.merge=r,n.combine=i,n.scanMerge=function(t,e){var n=t.map((function(t){return t[0]})),r=i((function(){var i=arguments[arguments.length-1];return n.forEach((function(n,r){i.indexOf(n)>-1&&(e=t[r][1](e,n()))})),e}),n);return r(e),r},n["fantasy-land/of"]=n;var e=!1;function n(t){var e,r=[],s=[];function a(e){return arguments.length&&e!==n.SKIP&&(t=e,o(a)&&(a._changing(),a._state="active",r.forEach((function(e,n){e(s[n](t))})))),t}function c(){return(e=n()).map((function(t){return!0===t&&(a._parents.forEach((function(t){t._unregisterChild(a)})),a._state="ended",a._parents.length=r.length=s.length=0),t})),e}return a.constructor=n,a._state=arguments.length&&t!==n.SKIP?"active":"pending",a._parents=[],a._changing=function(){o(a)&&(a._state="changing"),r.forEach((function(t){t._changing()}))},a._map=function(e,i){var o=i?n():n(e(t));return o._parents.push(a),r.push(o),s.push(e),o},a.map=function(t){return a._map(t,"active"!==a._state)},a.toJSON=function(){return null!=t&&"function"==typeof t.toJSON?t.toJSON():t},a["fantasy-land/map"]=a.map,a["fantasy-land/ap"]=function(t){return i((function(t,e){return t()(e())}),[t,a])},a._unregisterChild=function(t){var e=r.indexOf(t);-1!==e&&(r.splice(e,1),s.splice(e,1))},Object.defineProperty(a,"end",{get:function(){return e||c()}}),a}function i(t,e){var i=e.every((function(t){if(t.constructor!==n)throw new Error("Ensure that each item passed to stream.combine/stream.merge/lift is a stream");return"active"===t._state})),r=i?n(t.apply(null,e.concat([e]))):n(),o=[],s=e.map((function(n){return n._map((function(s){return o.push(n),(i||e.every((function(t){return"pending"!==t._state})))&&(i=!0,r(t.apply(null,e.concat([o]))),o=[]),s}),!0)})),a=r.end.map((function(t){!0===t&&(s.forEach((function(t){t.end(!0)})),a.end(!0))}));return r}function r(t){return i((function(){return t.map((function(t){return t()}))}),t)}function o(t){return"pending"===t._state||"active"===t._state||"changing"===t._state}Object.defineProperty(n,"HALT",{get:function(){return e||console.log("HALT is deprecated and has been renamed to SKIP"),e=!0,n.SKIP}}),t.exports=n}()},,function(t,e,n){(function(e){t.exports=e.punycode=n(128)}).call(this,n(25))},function(t,e,n){(function(t,i){var r;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(o){e&&e.nodeType,t&&t.nodeType;var s="object"==typeof i&&i;s.global!==s&&s.window!==s&&s.self;var a,c=2147483647,u=/^xn--/,l=/[^\x20-\x7E]/,d=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},h=Math.floor,f=String.fromCharCode;function m(t){throw new RangeError(p[t])}function v(t,e){for(var n=t.length,i=[];n--;)i[n]=e(t[n]);return i}function g(t,e){var n=t.split("@"),i="";return n.length>1&&(i=n[0]+"@",t=n[1]),i+v((t=t.replace(d,".")).split("."),e).join(".")}function b(t){for(var e,n,i=[],r=0,o=t.length;r<o;)(e=t.charCodeAt(r++))>=55296&&e<=56319&&r<o?56320==(64512&(n=t.charCodeAt(r++)))?i.push(((1023&e)<<10)+(1023&n)+65536):(i.push(e),r--):i.push(e);return i}function y(t){return v(t,(function(t){var e="";return t>65535&&(e+=f((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=f(t)})).join("")}function w(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function x(t,e,n){var i=0;for(t=n?h(t/700):t>>1,t+=h(t/e);t>455;i+=36)t=h(t/35);return h(i+36*t/(t+38))}function N(t){var e,n,i,r,o,s,a,u,l,d,p,f=[],v=t.length,g=0,b=128,w=72;for((n=t.lastIndexOf("-"))<0&&(n=0),i=0;i<n;++i)t.charCodeAt(i)>=128&&m("not-basic"),f.push(t.charCodeAt(i));for(r=n>0?n+1:0;r<v;){for(o=g,s=1,a=36;r>=v&&m("invalid-input"),((u=(p=t.charCodeAt(r++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:36)>=36||u>h((c-g)/s))&&m("overflow"),g+=u*s,!(u<(l=a<=w?1:a>=w+26?26:a-w));a+=36)s>h(c/(d=36-l))&&m("overflow"),s*=d;w=x(g-o,e=f.length+1,0==o),h(g/e)>c-b&&m("overflow"),b+=h(g/e),g%=e,f.splice(g++,0,b)}return y(f)}function C(t){var e,n,i,r,o,s,a,u,l,d,p,v,g,y,N,C=[];for(v=(t=b(t)).length,e=128,n=0,o=72,s=0;s<v;++s)(p=t[s])<128&&C.push(f(p));for(i=r=C.length,r&&C.push("-");i<v;){for(a=c,s=0;s<v;++s)(p=t[s])>=e&&p<a&&(a=p);for(a-e>h((c-n)/(g=i+1))&&m("overflow"),n+=(a-e)*g,e=a,s=0;s<v;++s)if((p=t[s])<e&&++n>c&&m("overflow"),p==e){for(u=n,l=36;!(u<(d=l<=o?1:l>=o+26?26:l-o));l+=36)N=u-d,y=36-d,C.push(f(w(d+N%y,0))),u=h(N/y);C.push(f(w(u,0))),o=x(n,g,i==r),n=0,++i}++n,++e}return C.join("")}a={version:"1.4.1",ucs2:{decode:b,encode:y},decode:N,encode:C,toASCII:function(t){return g(t,(function(t){return l.test(t)?"xn--"+C(t):t}))},toUnicode:function(t){return g(t,(function(t){return u.test(t)?N(t.slice(4).toLowerCase()):t}))}},void 0===(r=function(){return a}.call(e,n,e,t))||(t.exports=r)}()}).call(this,n(129)(t),n(25))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){(function(e){t.exports=e.ColorThief=n(131)}).call(this,n(25))},function(t,e){
/*!
 * Color Thief v2.0
 * by Lokesh Dhakar - http://www.lokeshdhakar.com
 *
 * Thanks
 * ------
 * Nick Rabinowitz - For creating quantize.js.
 * John Schulz - For clean up and optimization. @JFSIII
 * Nathan Spady - For adding drag and drop support to the demo page.
 *
 * License
 * -------
 * Copyright 2011, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://raw.githubusercontent.com/lokesh/color-thief/master/LICENSE
 *
 */
var n=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.width,this.height=this.canvas.height=t.height,this.context.drawImage(t,0,0,this.width,this.height)};n.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)},n.prototype.update=function(t){this.context.putImageData(t,0,0)},n.prototype.getPixelCount=function(){return this.width*this.height},n.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)},n.prototype.removeCanvas=function(){this.canvas.parentNode.removeChild(this.canvas)};var i=function(){};
/*!
 * quantize.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */if(i.prototype.getColor=function(t,e){return this.getPalette(t,5,e)[0]},i.prototype.getPalette=function(t,e,i){void 0===e&&(e=10),(void 0===i||1>i)&&(i=10);for(var r,s,a,c,u=new n(t),l=u.getImageData().data,d=u.getPixelCount(),p=[],h=0;d>h;h+=i)s=l[(r=4*h)+0],a=l[r+1],c=l[r+2],l[r+3]>=125&&(s>250&&a>250&&c>250||p.push([s,a,c]));var f=o.quantize(p,e),m=f?f.palette():null;return u.removeCanvas(),m},!r)var r={map:function(t,e){var n={};return e?t.map((function(t,i){return n.index=i,e.call(n,t)})):t.slice()},naturalOrder:function(t,e){return e>t?-1:t>e?1:0},sum:function(t,e){var n={};return t.reduce(e?function(t,i,r){return n.index=r,t+e.call(n,i)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?r.map(t,e):t)}};var o=function(){function t(t,e,n){return(t<<2*c)+(e<<c)+n}function e(t){function e(){n.sort(t),i=!0}var n=[],i=!1;return{push:function(t){n.push(t),i=!1},peek:function(t){return i||e(),void 0===t&&(t=n.length-1),n[t]},pop:function(){return i||e(),n.pop()},size:function(){return n.length},map:function(t){return n.map(t)},debug:function(){return i||e(),n}}}function n(t,e,n,i,r,o,s){var a=this;a.r1=t,a.r2=e,a.g1=n,a.g2=i,a.b1=r,a.b2=o,a.histo=s}function i(){this.vboxes=new e((function(t,e){return r.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())}))}function o(e){var n,i,r,o,s=new Array(1<<3*c);return e.forEach((function(e){i=e[0]>>u,r=e[1]>>u,o=e[2]>>u,n=t(i,r,o),s[n]=(s[n]||0)+1})),s}function s(t,e){var i,r,o,s=1e6,a=0,c=1e6,l=0,d=1e6,p=0;return t.forEach((function(t){i=t[0]>>u,r=t[1]>>u,o=t[2]>>u,s>i?s=i:i>a&&(a=i),c>r?c=r:r>l&&(l=r),d>o?d=o:o>p&&(p=o)})),new n(s,a,c,l,d,p,e)}function a(e,n){if(n.count()){var i=n.r2-n.r1+1,o=n.g2-n.g1+1,s=n.b2-n.b1+1,a=r.max([i,o,s]);if(1==n.count())return[n.copy()];var c,u,l,d,p=0,h=[],f=[];if(a==i)for(c=n.r1;c<=n.r2;c++){for(d=0,u=n.g1;u<=n.g2;u++)for(l=n.b1;l<=n.b2;l++)d+=e[t(c,u,l)]||0;p+=d,h[c]=p}else if(a==o)for(c=n.g1;c<=n.g2;c++){for(d=0,u=n.r1;u<=n.r2;u++)for(l=n.b1;l<=n.b2;l++)d+=e[t(u,c,l)]||0;p+=d,h[c]=p}else for(c=n.b1;c<=n.b2;c++){for(d=0,u=n.r1;u<=n.r2;u++)for(l=n.g1;l<=n.g2;l++)d+=e[t(u,l,c)]||0;p+=d,h[c]=p}return h.forEach((function(t,e){f[e]=p-t})),function(t){var e,i,r,o,s,a=t+"1",u=t+"2",l=0;for(c=n[a];c<=n[u];c++)if(h[c]>p/2){for(r=n.copy(),o=n.copy(),e=c-n[a],s=(i=n[u]-c)>=e?Math.min(n[u]-1,~~(c+i/2)):Math.max(n[a],~~(c-1-e/2));!h[s];)s++;for(l=f[s];!l&&h[s-1];)l=f[--s];return r[u]=s,o[a]=r[u]+1,[r,o]}}(a==i?"r":a==o?"g":"b")}}var c=5,u=8-c,l=1e3,d=.75;return n.prototype={volume:function(t){var e=this;return(!e._volume||t)&&(e._volume=(e.r2-e.r1+1)*(e.g2-e.g1+1)*(e.b2-e.b1+1)),e._volume},count:function(e){var n=this,i=n.histo;if(!n._count_set||e){var r,o,s,a=0;for(r=n.r1;r<=n.r2;r++)for(o=n.g1;o<=n.g2;o++)for(s=n.b1;s<=n.b2;s++)index=t(r,o,s),a+=i[index]||0;n._count=a,n._count_set=!0}return n._count},copy:function(){var t=this;return new n(t.r1,t.r2,t.g1,t.g2,t.b1,t.b2,t.histo)},avg:function(e){var n=this,i=n.histo;if(!n._avg||e){var r,o,s,a,u=0,l=1<<8-c,d=0,p=0,h=0;for(o=n.r1;o<=n.r2;o++)for(s=n.g1;s<=n.g2;s++)for(a=n.b1;a<=n.b2;a++)u+=r=i[t(o,s,a)]||0,d+=r*(o+.5)*l,p+=r*(s+.5)*l,h+=r*(a+.5)*l;n._avg=u?[~~(d/u),~~(p/u),~~(h/u)]:[~~(l*(n.r1+n.r2+1)/2),~~(l*(n.g1+n.g2+1)/2),~~(l*(n.b1+n.b2+1)/2)]}return n._avg},contains:function(t){var e=this,n=t[0]>>u;return gval=t[1]>>u,bval=t[2]>>u,n>=e.r1&&n<=e.r2&&gval>=e.g1&&gval<=e.g2&&bval>=e.b1&&bval<=e.b2}},i.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,n=0;n<e.size();n++)if(e.peek(n).vbox.contains(t))return e.peek(n).color;return this.nearest(t)},nearest:function(t){for(var e,n,i,r=this.vboxes,o=0;o<r.size();o++)(e>(n=Math.sqrt(Math.pow(t[0]-r.peek(o).color[0],2)+Math.pow(t[1]-r.peek(o).color[1],2)+Math.pow(t[2]-r.peek(o).color[2],2)))||void 0===e)&&(e=n,i=r.peek(o).color);return i},forcebw:function(){var t=this.vboxes;t.sort((function(t,e){return r.naturalOrder(r.sum(t.color),r.sum(e.color))}));var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var n=t.length-1,i=t[n].color;i[0]>251&&i[1]>251&&i[2]>251&&(t[n].color=[255,255,255])}},{quantize:function(t,n){function c(t,e){for(var n,i=1,r=0;l>r;)if((n=t.pop()).count()){var o=a(u,n),s=o[0],c=o[1];if(!s)return;if(t.push(s),c&&(t.push(c),i++),i>=e)return;if(r++>l)return}else t.push(n),r++}if(!t.length||2>n||n>256)return!1;var u=o(t);u.forEach((function(){0}));var p=s(t,u),h=new e((function(t,e){return r.naturalOrder(t.count(),e.count())}));h.push(p),c(h,d*n);for(var f=new e((function(t,e){return r.naturalOrder(t.count()*t.volume(),e.count()*e.volume())}));h.size();)f.push(h.pop());c(f,n-f.size());for(var m=new i;f.size();)m.push(f.pop());return m}}}();t.exports=i},function(t,e,n){"use strict";n.r(e),n.d(e,"Extend",(function(){return i.a})),n.d(e,"app",(function(){return Fe})),n.d(e,"compat",(function(){return qe}));var i=n(95),r=(n(127),n(130),n(23)),o=n(0),s=n(5),a=n(2),c=n(51),u=function(){function t(t){this.stack=[]}var e=t.prototype;return e.getCurrent=function(){return this.stack[this.stack.length-1]},e.getPrevious=function(){return this.stack[this.stack.length-2]},e.push=function(t,e,n){void 0===n&&(n=m.route.get());var i=this.stack[this.stack.length-2];i&&i.name===t&&this.stack.pop();var r=this.getCurrent();r&&r.name===t?Object(a.a)(r,{url:n,title:e}):this.stack.push({name:t,url:n,title:e})},e.canGoBack=function(){return this.stack.length>1},e.back=function(){if(!this.canGoBack())return this.home();this.stack.pop(),m.route.set(this.getCurrent().url)},e.backUrl=function(){return this.stack[this.stack.length-2].url},e.home=function(){this.stack.splice(0),Object(c.a)("/")},t}(),l=function(){function t(t){this.pinnedKey="panePinned",this.$element=$(t),this.pinned="true"===localStorage.getItem(this.pinnedKey),this.active=!1,this.showing=!1,this.render()}var e=t.prototype;return e.enable=function(){this.active=!0,this.render()},e.disable=function(){this.active=!1,this.showing=!1,this.render()},e.show=function(){clearTimeout(this.hideTimeout),this.showing=!0,this.render()},e.hide=function(){this.showing=!1,this.render()},e.onmouseleave=function(){this.hideTimeout=setTimeout(this.hide.bind(this),250)},e.togglePinned=function(){this.pinned=!this.pinned,localStorage.setItem(this.pinnedKey,this.pinned?"true":"false"),this.render()},e.render=function(){this.$element.toggleClass("panePinned",this.pinned).toggleClass("hasPane",this.active).toggleClass("paneShowing",this.showing)},t}(),d=n(22),p=n(6),h=n(3),f=n(8),v=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){return m("header",{className:"Hero DiscussionHero"},m("div",{className:"container"},m("ul",{className:"DiscussionHero-items"},Object(f.a)(this.items().toArray()))))},n.items=function(){var t=new p.a,e=this.attrs.discussion,n=e.badges().toArray();return n.length&&t.add("badges",m("ul",{className:"DiscussionHero-badges badges"},Object(f.a)(n)),10),t.add("title",m("h2",{className:"DiscussionHero-title"},e.title())),t},e}(h.a),g=n(12),b=n(18),y=n(38),w=n(7),x=n(30),N=n(76),C=n(16),O=n(44),T=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.view=function(){var t=this.attrs.discussion,e=this.attrs.lastPost&&t.replyCount(),n=t[e?"lastPostedUser":"user"](),i=t[e?"lastPostedAt":"createdAt"]();return m("span",null,e?Object(w.a)("fas fa-reply"):""," ",app.translator.trans("core.forum.discussion_list."+(e?"replied":"started")+"_text",{user:n,ago:Object(O.a)(i)}))},e}(h.a),k=n(53),j=n(17),S=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.handler=function(){return this.attrs.when()||void 0},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.boundHandler=this.handler.bind(this),$(window).on("beforeunload",this.boundHandler)},n.onremove=function(){$(window).off("beforeunload",this.boundHandler)},n.view=function(t){return t.children[0]},e}(h.a),A=n(77),P=n(4),E=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.value=this.attrs.value||""},n.view=function(){var t=this;return m("div",{className:"TextEditor"},m("textarea",{className:"FormControl Composer-flexible",oninput:function(e){t.oninput(e.target.value,e)},placeholder:this.attrs.placeholder||"",disabled:!!this.attrs.disabled,value:this.value}),m("ul",{className:"TextEditor-controls Composer-footer"},Object(f.a)(this.controlItems().toArray()),m("li",{className:"TextEditor-toolbar"},this.toolbarItems().toArray())))},n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e);var i=function(){n.onsubmit(),m.redraw()};this.$("textarea").bind("keydown","meta+return",i),this.$("textarea").bind("keydown","ctrl+return",i),this.attrs.composer.editor=new A.a(this.$("textarea")[0])},n.controlItems=function(){var t=new p.a;return t.add("submit",P.a.component({icon:"fas fa-paper-plane",className:"Button Button--primary",itemClassName:"App-primaryControl",onclick:this.onsubmit.bind(this)},this.attrs.submitLabel)),this.attrs.preview&&t.add("preview",P.a.component({icon:"far fa-eye",className:"Button Button--icon",onclick:this.attrs.preview,title:app.translator.trans("core.forum.composer.preview_tooltip"),oncreate:function(t){return $(t.dom).tooltip()}})),t},n.toolbarItems=function(){return new p.a},n.oninput=function(t,e){this.value=t,this.attrs.onchange(this.value),e.redraw=!1},n.onsubmit=function(){this.attrs.onsubmit(this.value)},e}(h.a),D=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.composer=this.attrs.composer,this.loading=!1,this.attrs.confirmExit&&this.composer.preventClosingWhen((function(){return n.hasChanges()}),this.attrs.confirmExit),this.composer.fields.content(this.attrs.originalContent||"")},n.view=function(){return m(S,{when:this.hasChanges.bind(this)},m("div",{className:"ComposerBody "+(this.attrs.className||"")},Object(b.a)(this.attrs.user,{className:"ComposerBody-avatar"}),m("div",{className:"ComposerBody-content"},m("ul",{className:"ComposerBody-header"},Object(f.a)(this.headerItems().toArray())),m("div",{className:"ComposerBody-editor"},E.component({submitLabel:this.attrs.submitLabel,placeholder:this.attrs.placeholder,disabled:this.loading||this.attrs.disabled,composer:this.composer,preview:this.jumpToPreview&&this.jumpToPreview.bind(this),onchange:this.composer.fields.content,onsubmit:this.onsubmit.bind(this),value:this.composer.fields.content()}))),j.a.component({className:"ComposerBody-loading"+(this.loading?" active":"")})))},n.hasChanges=function(){var t=this.composer.fields.content();return t&&t!==this.attrs.originalContent},n.headerItems=function(){return new p.a},n.onsubmit=function(){},n.loaded=function(){this.loading=!1,m.redraw()},e}(h.a),_=n(10);function I(t){app.composer.isFullScreen()&&(app.composer.minimize(),t.stopPropagation())}var M=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.placeholder=e.placeholder||Object(_.a)(app.translator.trans("core.forum.composer_reply.body_placeholder")),e.submitLabel=e.submitLabel||app.translator.trans("core.forum.composer_reply.submit_button"),e.confirmExit=e.confirmExit||Object(_.a)(app.translator.trans("core.forum.composer_reply.discard_confirmation"))};var n=e.prototype;return n.headerItems=function(){var e=t.prototype.headerItems.call(this),n=this.attrs.discussion;return e.add("title",m("h3",null,Object(w.a)("fas fa-reply")," ",m(g.a,{href:app.route.discussion(n),onclick:I},n.title()))),e},n.jumpToPreview=function(t){I(t),m.route.set(app.route.discussion(this.attrs.discussion,"reply"))},n.data=function(){return{content:this.composer.fields.content(),relationships:{discussion:this.attrs.discussion}}},n.onsubmit=function(){var t=this,e=this.attrs.discussion;this.loading=!0,m.redraw();var n=this.data();app.store.createRecord("posts").save(n).then((function(n){if(app.viewingDiscussion(e)){var i=app.current.get("stream");i.update().then((function(){return i.goToNumber(n.number())}))}else{var r,o=P.a.component({className:"Button Button--link",onclick:function(){m.route.set(app.route.post(n)),app.alerts.dismiss(r)}},app.translator.trans("core.forum.composer_reply.view_button"));r=app.alerts.show({type:"success",controls:[o]},app.translator.trans("core.forum.composer_reply.posted_message"))}t.composer.hide()}),this.loaded.bind(this))},e}(D),L=n(15),R=n(9),B=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.email=Object(R.a)(this.attrs.email||""),this.success=!1},n.className=function(){return"ForgotPasswordModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.forgot_password.title")},n.content=function(){return this.success?m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("core.forum.forgot_password.email_sent_message")),m("div",{className:"Form-group"},m(P.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},app.translator.trans("core.forum.forgot_password.dismiss_button"))))):m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("core.forum.forgot_password.text")),m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"email",type:"email",placeholder:Object(_.a)(app.translator.trans("core.forum.forgot_password.email_placeholder")),bidi:this.email,disabled:this.loading})),m("div",{className:"Form-group"},P.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("core.forum.forgot_password.submit_button")))))},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/forgot",body:{email:this.email()},errorHandler:this.onerror.bind(this)}).then((function(){e.success=!0,e.alert=null})).catch((function(){})).then(this.loaded.bind(this))},n.onerror=function(e){404===e.status&&(e.alert.content=app.translator.trans("core.forum.forgot_password.not_found_message")),t.prototype.onerror.call(this,e)},e}(L.a),H=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){return m("div",{className:"LogInButtons"},this.items().toArray())},n.items=function(){return new p.a},e}(h.a),U=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.username=Object(R.a)(this.attrs.username||""),this.email=Object(R.a)(this.attrs.email||""),this.password=Object(R.a)(this.attrs.password||"")},n.className=function(){return"Modal--small SignUpModal"},n.title=function(){return app.translator.trans("core.forum.sign_up.title")},n.content=function(){return[m("div",{className:"Modal-body"},this.body()),m("div",{className:"Modal-footer"},this.footer())]},n.isProvided=function(t){return this.attrs.provided&&-1!==this.attrs.provided.indexOf(t)},n.body=function(){return[this.attrs.token?"":m(H,null),m("div",{className:"Form Form--centered"},this.fields().toArray())]},n.fields=function(){var t=new p.a;return t.add("username",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"username",type:"text",placeholder:Object(_.a)(app.translator.trans("core.forum.sign_up.username_placeholder")),bidi:this.username,disabled:this.loading||this.isProvided("username")})),30),t.add("email",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"email",type:"email",placeholder:Object(_.a)(app.translator.trans("core.forum.sign_up.email_placeholder")),bidi:this.email,disabled:this.loading||this.isProvided("email")})),20),this.attrs.token||t.add("password",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"password",type:"password",placeholder:Object(_.a)(app.translator.trans("core.forum.sign_up.password_placeholder")),bidi:this.password,disabled:this.loading})),10),t.add("submit",m("div",{className:"Form-group"},m(P.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("core.forum.sign_up.submit_button"))),-10),t},n.footer=function(){return[m("p",{className:"SignUpModal-logIn"},app.translator.trans("core.forum.sign_up.log_in_text",{a:m("a",{onclick:this.logIn.bind(this)})}))]},n.logIn=function(){var t={identification:this.email()||this.username(),password:this.password()};app.modal.show(F,t)},n.onready=function(){this.attrs.username&&!this.attrs.email?this.$("[name=email]").select():this.$("[name=username]").select()},n.onsubmit=function(t){t.preventDefault(),this.loading=!0;var e=this.submitData();app.request({url:app.forum.attribute("baseUrl")+"/register",method:"POST",body:e,errorHandler:this.onerror.bind(this)}).then((function(){return window.location.reload()}),this.loaded.bind(this))},n.submitData=function(){var t={username:this.username(),email:this.email()};return this.attrs.token?t.token=this.attrs.token:t.password=this.password(),t},e}(L.a),F=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.identification=Object(R.a)(this.attrs.identification||""),this.password=Object(R.a)(this.attrs.password||""),this.remember=Object(R.a)(!!this.attrs.remember)},n.className=function(){return"LogInModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.log_in.title")},n.content=function(){return[m("div",{className:"Modal-body"},this.body()),m("div",{className:"Modal-footer"},this.footer())]},n.body=function(){return[m(H,null),m("div",{className:"Form Form--centered"},this.fields().toArray())]},n.fields=function(){var t=new p.a;return t.add("identification",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"identification",type:"text",placeholder:Object(_.a)(app.translator.trans("core.forum.log_in.username_or_email_placeholder")),bidi:this.identification,disabled:this.loading})),30),t.add("password",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"password",type:"password",placeholder:Object(_.a)(app.translator.trans("core.forum.log_in.password_placeholder")),bidi:this.password,disabled:this.loading})),20),t.add("remember",m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",bidi:this.remember,disabled:this.loading}),app.translator.trans("core.forum.log_in.remember_me_label")))),10),t.add("submit",m("div",{className:"Form-group"},P.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("core.forum.log_in.submit_button"))),-10),t},n.footer=function(){return[m("p",{className:"LogInModal-forgotPassword"},m("a",{onclick:this.forgotPassword.bind(this)},app.translator.trans("core.forum.log_in.forgot_password_link"))),app.forum.attribute("allowSignUp")?m("p",{className:"LogInModal-signUp"},app.translator.trans("core.forum.log_in.sign_up_text",{a:m("a",{onclick:this.signUp.bind(this)})})):""]},n.forgotPassword=function(){var t=this.identification(),e=-1!==t.indexOf("@")?{email:t}:void 0;app.modal.show(B,e)},n.signUp=function(){var t={password:this.password()},e=this.identification();t[-1!==e.indexOf("@")?"email":"username"]=e,app.modal.show(U,t)},n.onready=function(){this.$("[name="+(this.identification()?"password":"identification")+"]").select()},n.onsubmit=function(t){t.preventDefault(),this.loading=!0;var e=this.identification(),n=this.password(),i=this.remember();app.session.login({identification:e,password:n,remember:i},{errorHandler:this.onerror.bind(this)}).then((function(){return window.location.reload()}),this.loaded.bind(this))},n.onerror=function(e){401===e.status&&(e.alert.content=app.translator.trans("core.forum.log_in.invalid_login_message")),t.prototype.onerror.call(this,e)},e}(L.a),q=n(27),z=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.discussion=this.attrs.discussion,this.currentTitle=this.attrs.currentTitle,this.newTitle=Object(R.a)(this.currentTitle)},n.className=function(){return"RenameDiscussionModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.rename_discussion.title")},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("input",{className:"FormControl",bidi:this.newTitle,type:"text"})),m("div",{className:"Form-group"},P.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("core.forum.rename_discussion.submit_button")))))},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0;var n=this.newTitle,i=this.currentTitle;if(n&&n!==i)return this.discussion.save({title:n}).then((function(){app.viewingDiscussion(e.discussion)&&app.current.get("stream").update(),m.redraw(),e.hide()})).catch((function(){e.loading=!1,m.redraw()}));this.hide()},e}(L.a),W={controls:function(t,e){var n=this,i=new p.a;return["user","moderation","destructive"].forEach((function(r){var o=n[r+"Controls"](t,e).toArray();o.length&&(o.forEach((function(t){return i.add(t.itemName,t)})),i.add(r+"Separator",q.a.component()))})),i},userControls:function(t,e){var n=this,i=new p.a;return e instanceof Ot&&i.add("reply",!app.session.user||t.canReply()?P.a.component({icon:"fas fa-reply",onclick:function(){return n.replyAction.bind(t)(!0,!1).catch((function(){}))}},app.translator.trans(app.session.user?"core.forum.discussion_controls.reply_button":"core.forum.discussion_controls.log_in_to_reply_button")):P.a.component({icon:"fas fa-reply",className:"disabled",title:app.translator.trans("core.forum.discussion_controls.cannot_reply_text")},app.translator.trans("core.forum.discussion_controls.cannot_reply_button"))),i},moderationControls:function(t){var e=new p.a;return t.canRename()&&e.add("rename",P.a.component({icon:"fas fa-pencil-alt",onclick:this.renameAction.bind(t)},app.translator.trans("core.forum.discussion_controls.rename_button"))),e},destructiveControls:function(t){var e=new p.a;return t.isHidden()?(t.canHide()&&e.add("restore",P.a.component({icon:"fas fa-reply",onclick:this.restoreAction.bind(t)},app.translator.trans("core.forum.discussion_controls.restore_button"))),t.canDelete()&&e.add("delete",P.a.component({icon:"fas fa-times",onclick:this.deleteAction.bind(t)},app.translator.trans("core.forum.discussion_controls.delete_forever_button")))):t.canHide()&&e.add("hide",P.a.component({icon:"far fa-trash-alt",onclick:this.hideAction.bind(t)},app.translator.trans("core.forum.discussion_controls.delete_button"))),e},replyAction:function(t,e){var n=this;return new Promise((function(i,r){return app.session.user?n.canReply()?(app.composer.composingReplyTo(n)&&!e||app.composer.load(M,{user:app.session.user,discussion:n}),app.composer.show(),t&&app.viewingDiscussion(n)&&!app.composer.isFullScreen()&&app.current.get("stream").goToNumber("reply"),i(app.composer)):r():(app.modal.show(F),r())}))},hideAction:function(){return this.pushAttributes({hiddenAt:new Date,hiddenUser:app.session.user}),this.save({isHidden:!0})},restoreAction:function(){return this.pushAttributes({hiddenAt:null,hiddenUser:null}),this.save({isHidden:!1})},deleteAction:function(){var t=this;if(confirm(Object(_.a)(app.translator.trans("core.forum.discussion_controls.delete_confirmation"))))return app.viewingDiscussion(this)&&app.history.back(),this.delete().then((function(){return app.discussions.removeDiscussion(t)}))},renameAction:function(){return app.modal.show(z,{currentTitle:this.title(),discussion:this})}};function V(t){var e,n,i,r,o=$(t),s=!1,a=!1,c=0,u=function(t,e){void 0===e&&(e={}),e.duration=e.duration||"fast",e.step=function(t){$(this).css("transform","translate("+t+"px, 0)")},o.find(".Slidable-content").animate({"background-position-x":t},e)},l=function(){u(0,{complete:function(){o.removeClass("sliding"),e.hide(),n.hide(),a=!1}})};return o.find(".Slidable-content").on("touchstart",(function(t){e=o.find(".Slidable-underneath--left:not(.disabled)"),n=o.find(".Slidable-underneath--right:not(.disabled)"),i=t.originalEvent.targetTouches[0].clientX,r=t.originalEvent.targetTouches[0].clientY,s=!0,c=0})).on("touchmove",(function(t){var u=t.originalEvent.targetTouches[0].clientX,l=t.originalEvent.targetTouches[0].clientY;if(s&&Math.abs(u-i)>Math.abs(l-r)&&(a=!0),s=!1,a){c=u-i;var d=function(t,e){if(t.length){var n="left"===e?c>0:c<0;n&&t.hasClass("Slidable-underneath--elastic")&&(c-=.5*c),t.toggle(n);var i=Math.max(0,Math.min(1,(Math.abs(c)-25)/50));t.find(".icon").css("transform","scale("+i+")")}else c=Math["left"===e?"min":"max"](0,c)};d(e,"left"),d(n,"right"),$(this).css("transform","translate("+c+"px, 0)"),$(this).css("background-position-x",c+"px"),o.toggleClass("sliding",!!c),t.preventDefault()}})).on("touchend",(function(){var t=function(t){t.click(),t.hasClass("Slidable-underneath--elastic")?l():u((c>0?1:-1)*o.width())};n.length&&c<-50?t(n):e.length&&c>50?t(e):l(),s=!1,a=!1})),{reset:l}}var Y=n(19),K=n(26);var G=function(t,e){for(var n=-1,i=null==t?0:t.length,r=Array(i);++n<i;)r[n]=e(t[n],n,t);return r},X=n(78),J=n(84),Q=n(45);var Z=function(t){return"symbol"==typeof t||Object(Q.a)(t)&&"[object Symbol]"==Object(J.a)(t)},tt=K.a?K.a.prototype:void 0,et=tt?tt.toString:void 0;var nt=function t(e){if("string"==typeof e)return e;if(Object(X.a)(e))return G(e,t)+"";if(Z(e))return et?et.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n};var it=function(t){return null==t?"":nt(t)},rt=/[\\^$.*+?()[\]{}|]/g,ot=RegExp(rt.source);var st=function(t){return(t=it(t))&&ot.test(t)?t.replace(rt,"\\$&"):t},at=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.subtree=new k.a((function(){return n.attrs.discussion.freshness}),(function(){var t=app.session.user&&app.session.user.markedAllAsReadAt();return t&&t.getTime()}),(function(){return n.active()}))},n.elementAttrs=function(){return{className:Object(Y.a)(["DiscussionListItem",this.active()?"active":"",this.attrs.discussion.isHidden()?"DiscussionListItem--hidden":"","ontouchstart"in window?"Slidable":""])}},n.view=function(){var t=this.attrs.discussion,e=t.user(),n=t.isUnread(),i=t.isRead(),r=!this.showRepliesCount()&&n,o=0,s=W.controls(t,this).toArray(),a=this.elementAttrs();if(this.attrs.params.q){var c=t.mostRelevantPost();c&&(o=c.number());var u=st(this.attrs.params.q);this.highlightRegExp=new RegExp(u+"|"+u.trim().replace(/\s+/g,"|"),"gi")}else o=Math.min(t.lastPostNumber(),(t.lastReadPostNumber()||0)+1);return m("div",a,s.length?C.a.component({icon:"fas fa-ellipsis-v",className:"DiscussionListItem-controls",buttonClassName:"Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right"},s):"",m("span",{className:"Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic"+(n?"":" disabled"),onclick:this.markAsRead.bind(this)},Object(w.a)("fas fa-check")),m("div",{className:"DiscussionListItem-content Slidable-content"+(n?" unread":"")+(i?" read":"")},m(g.a,{href:e?app.route.user(e):"#",className:"DiscussionListItem-author",title:Object(_.a)(app.translator.trans("core.forum.discussion_list.started_text",{user:e,ago:Object(x.a)(t.createdAt())})),oncreate:function(t){$(t.dom).tooltip({placement:"right"})}},Object(b.a)(e,{title:""})),m("ul",{className:"DiscussionListItem-badges badges"},Object(f.a)(t.badges().toArray())),m(g.a,{href:app.route.discussion(t,o),className:"DiscussionListItem-main"},m("h3",{className:"DiscussionListItem-title"},Object(y.a)(t.title(),this.highlightRegExp)),m("ul",{className:"DiscussionListItem-info"},Object(f.a)(this.infoItems().toArray()))),m("span",{className:"DiscussionListItem-count",onclick:this.markAsRead.bind(this),title:r?app.translator.trans("core.forum.discussion_list.mark_as_read_tooltip"):""},Object(N.a)(t[r?"unreadCount":"replyCount"]()))))},n.oncreate=function(e){if(t.prototype.oncreate.call(this,e),"ontouchstart"in window){var n=V(this.$());this.$(".DiscussionListItem-controls").on("hidden.bs.dropdown",(function(){return n.reset()}))}},n.onbeforeupdate=function(e,n){return t.prototype.onbeforeupdate.call(this,e,n),this.subtree.needsRebuild()},n.active=function(){return app.current.matches(Ot,{discussion:this.attrs.discussion})},n.showFirstPost=function(){return-1!==["newest","oldest"].indexOf(this.attrs.params.sort)},n.showRepliesCount=function(){return"replies"===this.attrs.params.sort},n.markAsRead=function(){var t=this.attrs.discussion;t.isUnread()&&(t.save({lastReadPostNumber:t.lastPostNumber()}),m.redraw())},n.infoItems=function(){var t=new p.a;if(this.attrs.params.q){var e=this.attrs.discussion.mostRelevantPost()||this.attrs.discussion.firstPost();if(e&&"comment"===e.contentType()){var n=Object(y.a)(e.contentPlain(),this.highlightRegExp,175);t.add("excerpt",n,-100)}}else t.add("terminalPost",T.component({discussion:this.attrs.discussion,lastPost:!this.showFirstPost()}));return t},e}(h.a),ct=n(54),ut=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.view=function(){var t,e=this.attrs.state,n=e.getParams();if(e.isLoading()?t=j.a.component():e.moreResults&&(t=P.a.component({className:"Button",onclick:e.loadMore.bind(e)},app.translator.trans("core.forum.discussion_list.load_more_button"))),e.empty()){var i=app.translator.trans("core.forum.discussion_list.empty_text");return m("div",{className:"DiscussionList"},ct.a.component({text:i}))}return m("div",{className:"DiscussionList"+(e.isSearchResults()?" DiscussionList--searchResults":"")},m("ul",{className:"DiscussionList-discussions"},e.discussions.map((function(t){return m("li",{key:t.id(),"data-id":t.id()},at.component({discussion:t,params:n}))}))),m("div",{className:"DiscussionList-loadMore"},t))},e}(h.a),lt=function(t){t.pageX<10&&app.pane.show()},dt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){if(this.attrs.state.hasDiscussions())return m("div",{className:"DiscussionPage-list"},this.enoughSpace()&&m(ut,{state:this.attrs.state}))},n.oncreate=function(e){t.prototype.oncreate.call(this,e);var n=$(e.dom),i=app.pane;n.hover(i.show.bind(i),i.onmouseleave.bind(i)),$(document).on("mousemove",lt);var r=n.find(".DiscussionListItem.active");if(r.length){var o=n.offset().top,s=o+n.outerHeight(),a=r.offset().top,c=a+r.outerHeight();(a<o||c>s)&&n.scrollTop(n.scrollTop()-o+a)}},n.onremove=function(){$(document).off("mousemove",lt)},n.enoughSpace=function(){return!$(".App-navigation").is(":visible")},e}(h.a),pt=n(40),ht=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.view=function(){return m("div",{className:"Post CommentPost LoadingPost"},m("header",{className:"Post-header"},Object(b.a)(null,{className:"PostUser-avatar"}),m("div",{className:"fakeText"})),m("div",{className:"Post-body"},m("div",{className:"fakeText"}),m("div",{className:"fakeText"}),m("div",{className:"fakeText"})))},e}(h.a),ft=n(20),mt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t),e.initAttrs=function(t){t.className=t.className||"",t.surround=t.surround||function(t){return t()}};var n=e.prototype;return n.view=function(){return m("div",{className:this.attrs.className})},n.oncreate=function(e){var n,i=this;t.prototype.oncreate.call(this,e);var r=function(){if(i.attrs.composer.isVisible()){var t=i.attrs.composer.fields.content();n!==t&&(n=t,i.attrs.surround((function(){return s9e.TextFormatter.preview(n||"",e.dom)})))}};r(),this.updateInterval=setInterval(r,50)},n.onremove=function(){clearInterval(this.updateInterval)},e}(h.a),vt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){var t=this;if(app.composer.composingReplyTo(this.attrs.discussion))return m("article",{className:"Post CommentPost editing"},m("header",{className:"Post-header"},m("div",{className:"PostUser"},m("h3",null,Object(b.a)(app.session.user,{className:"PostUser-avatar"}),Object(ft.a)(app.session.user)))),m(mt,{className:"Post-body",composer:app.composer,surround:this.anchorPreview.bind(this)}));return m("article",{className:"Post ReplyPlaceholder",onclick:function(){W.replyAction.call(t.attrs.discussion,!0).catch((function(){}))}},m("header",{className:"Post-header"},Object(b.a)(app.session.user,{className:"PostUser-avatar"})," ",app.translator.trans("core.forum.post_stream.reply_placeholder")))},n.anchorPreview=function(t){var e=$(window).scrollTop()+$(window).height()>=$(document).height();t(),e&&$(window).scrollTop($(document).height())},e}(h.a),gt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.discussion=this.attrs.discussion,this.stream=this.attrs.stream,this.scrollListener=new pt.a(this.onscroll.bind(this))},n.view=function(){var t,e=this,n=this.stream.viewingEnd(),i=this.stream.posts(),r=this.discussion.postIds(),o=function(t){$(t.dom).addClass("fadeIn"),setTimeout((function(){return $(t.dom).removeClass("fadeIn")}),500)},s=i.map((function(n,i){var s,c={"data-index":e.stream.visibleStart+i};if(n){var u=n.createdAt(),l=app.postComponents[n.contentType()];s=l?l.component({post:n}):"",c.key="post"+n.id(),c.oncreate=o,c["data-time"]=u.toISOString(),c["data-number"]=n.number(),c["data-id"]=n.id(),c["data-type"]=n.contentType();var d=u-t;d>3456e5&&(s=[m("div",{className:"PostStream-timeGap"},m("span",null,app.translator.trans("core.forum.post_stream.time_lapsed_text",{period:dayjs().add(d,"ms").fromNow(!0)}))),s]),t=u}else c.key="post"+r[e.stream.visibleStart+i],s=ht.component();return m("div",Object(a.a)({className:"PostStream-item"},c),s)}));return!n&&i[this.stream.visibleEnd-this.stream.visibleStart-1]&&s.push(m("div",{className:"PostStream-loadMore",key:"loadMore"},m(P.a,{className:"Button",onclick:this.stream.loadNext.bind(this.stream)},app.translator.trans("core.forum.post_stream.load_more_button")))),!n||app.session.user&&!this.discussion.canReply()||s.push(m("div",{className:"PostStream-item",key:"reply","data-index":this.stream.count(),oncreate:o},vt.component({discussion:this.discussion}))),m("div",{className:"PostStream"},s)},n.onupdate=function(){this.triggerScroll()},n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e),this.triggerScroll(),setTimeout((function(){return n.scrollListener.start()}))},n.onremove=function(){this.scrollListener.stop(),clearTimeout(this.calculatePositionTimeout)},n.triggerScroll=function(){if(this.stream.needsScroll){var t=this.stream.targetPost;this.stream.needsScroll=!1,"number"in t?this.scrollToNumber(t.number,this.stream.animateScroll):"index"in t&&this.scrollToIndex(t.index,this.stream.animateScroll,t.reply)}},n.onscroll=function(t){if(void 0===t&&(t=window.pageYOffset),!this.stream.paused&&(this.updateScrubber(t),!this.stream.pagesLoading)){var e=this.getMarginTop(),n=$(window).height()-e,i=t+e;if(this.stream.visibleStart>0){var r=this.$(".PostStream-item[data-index="+this.stream.visibleStart+"]");r.length&&r.offset().top>i-300&&this.stream.loadPrevious()}if(this.stream.visibleEnd<this.stream.count()){var o=this.$(".PostStream-item[data-index="+(this.stream.visibleEnd-1)+"]");o.length&&o.offset().top+o.outerHeight(!0)<i+n+300&&this.stream.loadNext()}clearTimeout(this.calculatePositionTimeout),this.calculatePositionTimeout=setTimeout(this.calculatePosition.bind(this,t),100)}},n.updateScrubber=function(t){void 0===t&&(t=window.pageYOffset);var e=this.getMarginTop(),n=$(window).height()-e,i=t+e,r=this.$(".PostStream-item[data-index]"),o=0,s="",a=null;r.each((function(){var t=$(this),e=t.offset().top,r=t.outerHeight(!0);if(e+r<i)return!0;if(e>i+n)return!1;var c=Math.max(0,i-e),u=Math.min(r,i+n-e)-c;null===a&&(a=parseFloat(t.data("index"))+c/r),u>0&&(o+=u/r);var l=t.data("time");l&&(s=l)})),this.stream.index=null!==a?a+1:this.stream.count(),this.stream.visible=o,s&&(this.stream.description=dayjs(s).format("MMMM YYYY"))},n.calculatePosition=function(t){void 0===t&&(t=window.pageYOffset);var e,n,i=this.getMarginTop(),r=$(window),o=r.height()-i,s=r.scrollTop()+i,a=t+i;this.$(".PostStream-item").each((function(){var t=$(this),i=t.offset().top,r=t.outerHeight(!0),c=Math.max(0,a-i);if(void 0===e&&(c/r<.75||(r-c)/o>.25)&&(e=t.data("number")),i+r>s){if(!(i+r<s+o))return!1;t.data("number")&&(n=t.data("number"))}})),e&&this.attrs.onPositionChange(e||1,n,e)},n.getMarginTop=function(){var t="phone"===app.screen()?"#app-navigation":"#header";return this.$()&&$(t).outerHeight()+parseInt(this.$().css("margin-top"),10)},n.scrollToNumber=function(t,e){var n=this.$(".PostStream-item[data-number="+t+"]");return this.scrollToItem(n,e).then(this.flashItem.bind(this,n))},n.scrollToIndex=function(t,e,n){var i=n?$(".PostStream-item:last-child"):this.$(".PostStream-item[data-index="+t+"]");this.scrollToItem(i,e,!0,n),n&&this.flashItem(i)},n.scrollToItem=function(t,e,n,i){var r=this,o=$("html, body").stop(!0),s=t.data("index");if(t.length){var a=t.offset().top-this.getMarginTop(),c=t.offset().top+t.height(),u=$(document).scrollTop(),l=u+$(window).height();if(n||a<u||c>l){var d=i?c-$(window).height()+app.composer.computedHeight():t.is(":first-child")?0:a;e?d!==u&&o.animate({scrollTop:d},"fast"):o.scrollTop(d)}}var p=function(){r.updateScrubber(),void 0!==s&&(r.stream.index=s+1)};return p(),this.stream.forceUpdateScrubber=!0,Promise.all([o.promise(),this.stream.loadPromise]).then((function(){var t;if(m.redraw.sync(),i){var e=$(".PostStream-item:last-child");$(window).scrollTop(e.offset().top+e.height()-$(window).height()+app.composer.computedHeight())}else 0===s?$(window).scrollTop(0):(t=$(".PostStream-item[data-index="+s+"]").offset())&&$(window).scrollTop(t.top-r.getMarginTop());p(),r.calculatePosition(),r.stream.paused=!1}))},n.flashItem=function(t){t.removeClass("fadeIn"),t.addClass("flash").on("animationend webkitAnimationEnd",(function(e){t.removeClass("flash")}))},e}(h.a),bt=n(71),yt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.stream=this.attrs.stream,this.handlers={},this.scrollListener=new pt.a(this.updateScrubberValues.bind(this,{fromScroll:!0,forceHeightChange:!0}))},n.view=function(){var t=this.stream.count(),e=app.translator.transChoice("core.forum.post_scrubber.viewing_text",t,{index:m("span",{className:"Scrubber-index"}),count:m("span",{className:"Scrubber-count"},Object(bt.a)(t))}),n=this.stream.discussion.unreadCount(),i=t?Math.min(t-this.stream.index,n)/t:0;function r(t){var e=$(t.dom),n={top:100-100*i+"%",height:100*i+"%"};t.state.oldStyle?e.stop(!0).css(t.state.oldStyle).animate(n):e.css(n),t.state.oldStyle=n}var o=["PostStreamScrubber","Dropdown"];return this.attrs.className&&o.push(this.attrs.className),m("div",{className:o.join(" ")},m("button",{className:"Button Dropdown-toggle","data-toggle":"dropdown"},e," ",Object(w.a)("fas fa-sort")),m("div",{className:"Dropdown-menu dropdown-menu"},m("div",{className:"Scrubber"},m("a",{className:"Scrubber-first",onclick:this.goToFirst.bind(this)},Object(w.a)("fas fa-angle-double-up")," ",app.translator.trans("core.forum.post_scrubber.original_post_link")),m("div",{className:"Scrubber-scrollbar"},m("div",{className:"Scrubber-before"}),m("div",{className:"Scrubber-handle"},m("div",{className:"Scrubber-bar"}),m("div",{className:"Scrubber-info"},m("strong",null,e),m("span",{className:"Scrubber-description"}))),m("div",{className:"Scrubber-after"}),m("div",{className:"Scrubber-unread",oncreate:r,onupdate:r},app.translator.trans("core.forum.post_scrubber.unread_text",{count:n}))),m("a",{className:"Scrubber-last",onclick:this.goToLast.bind(this)},Object(w.a)("fas fa-angle-double-down")," ",app.translator.trans("core.forum.post_scrubber.now_link")))))},n.onupdate=function(){var t=this;this.stream.forceUpdateScrubber&&(this.stream.forceUpdateScrubber=!1,this.stream.loadPromise.then((function(){return t.updateScrubberValues({animate:!0,forceHeightChange:!0})})))},n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e),$(window).on("resize",this.handlers.onresize=this.onresize.bind(this)).resize(),this.$(".Scrubber-scrollbar").bind("click",this.onclick.bind(this)).css({cursor:"pointer","user-select":"none"}).bind("dragstart mousedown touchstart",(function(t){return t.preventDefault()})),this.dragging=!1,this.mouseStart=0,this.indexStart=0,this.$(".Scrubber-handle").css("cursor","move").bind("mousedown touchstart",this.onmousedown.bind(this)).click((function(t){return t.stopPropagation()})),$(document).on("mousemove touchmove",this.handlers.onmousemove=this.onmousemove.bind(this)).on("mouseup touchend",this.handlers.onmouseup=this.onmouseup.bind(this)),setTimeout((function(){return n.scrollListener.start()})),this.stream.loadPromise.then((function(){return n.updateScrubberValues({animate:!1,forceHeightChange:!0})}))},n.onremove=function(){this.scrollListener.stop(),$(window).off("resize",this.handlers.onresize),$(document).off("mousemove touchmove",this.handlers.onmousemove).off("mouseup touchend",this.handlers.onmouseup)},n.updateScrubberValues=function(t){var e=this;void 0===t&&(t={});var n=this.stream.index,i=this.stream.count(),r=this.stream.visible||1,o=this.percentPerPost(),s=this.$();s.find(".Scrubber-index").text(Object(bt.a)(this.stream.sanitizeIndex(Math.max(1,n)))),s.find(".Scrubber-description").text(this.stream.description),s.toggleClass("disabled",this.stream.disabled());var a={};if(a.before=Math.max(0,o.index*Math.min(n-1,i-r)),a.handle=Math.min(100-a.before,o.visible*r),a.after=100-a.before-a.handle,!(t.fromScroll&&this.stream.paused||this.adjustingHeight&&!t.forceHeightChange)){var c=t.animate?"animate":"css";this.adjustingHeight=!0;var u=[];for(var l in a){var d=s.find(".Scrubber-"+l);u.push(d.stop(!0,!0)[c]({height:a[l]+"%"},"fast").promise()),"animate"===c&&d.css("overflow","visible")}Promise.all(u).then((function(){return e.adjustingHeight=!1}))}},n.goToFirst=function(){this.stream.goToFirst(),this.updateScrubberValues({animate:!0,forceHeightChange:!0})},n.goToLast=function(){this.stream.goToLast(),this.updateScrubberValues({animate:!0,forceHeightChange:!0})},n.onresize=function(){var t=this.$(),e=this.$(".Scrubber-scrollbar");e.css("max-height",$(window).height()-t.offset().top+$(window).scrollTop()-parseInt($("#app").css("padding-bottom"),10)-(t.outerHeight()-e.outerHeight()))},n.onmousedown=function(t){t.redraw=!1,this.mouseStart=t.clientY||t.originalEvent.touches[0].clientY,this.indexStart=this.stream.index,this.dragging=!0,$("body").css("cursor","move"),this.$().toggleClass("dragging",this.dragging)},n.onmousemove=function(t){if(this.dragging){var e=((t.clientY||t.originalEvent.touches[0].clientY)-this.mouseStart)/this.$(".Scrubber-scrollbar").outerHeight()*100/this.percentPerPost().index||0,n=Math.min(this.indexStart+e,this.stream.count()-1);this.stream.index=Math.max(0,n),this.updateScrubberValues()}},n.onmouseup=function(){if(this.$().toggleClass("dragging",this.dragging),this.dragging){this.mouseStart=0,this.indexStart=0,this.dragging=!1,$("body").css("cursor",""),this.$().removeClass("open");var t=Math.floor(this.stream.index);this.stream.goToIndex(t)}},n.onclick=function(t){var e=this.$(".Scrubber-scrollbar"),n=((t.pageY||t.originalEvent.touches[0].pageY)-e.offset().top+$("body").scrollTop())/e.outerHeight()*100,i=(n-=parseFloat(e.find(".Scrubber-handle")[0].style.height)/2)/this.percentPerPost().index;i=Math.max(0,Math.min(this.stream.count()-1,i)),this.stream.goToIndex(Math.floor(i)),this.updateScrubberValues({animate:!0,forceHeightChange:!0}),this.$().removeClass("open")},n.percentPerPost=function(){var t=this.stream.count()||1,e=this.stream.visible||1,n=50/this.$(".Scrubber-scrollbar").outerHeight()*100,i=Math.max(100/t,n/e),r=t===e?0:(100-i*e)/(t-e);return{index:r,visible:i}},e}(h.a),wt=n(79),xt=n(80),Nt=function(){function t(t,e){void 0===e&&(e=[]),this.discussion=t,this.paused=!1,this.loadPageTimeouts={},this.pagesLoading=0,this.index=0,this.number=1,this.visible=1,this.description="",this.forceUpdateScrubber=!1,this.show(e)}var e=t.prototype;return e.update=function(){return this.viewingEnd()?(this.visibleEnd=this.count(),this.loadRange(this.visibleStart,this.visibleEnd)):Promise.resolve()},e.goToFirst=function(){return this.goToIndex(0)},e.goToLast=function(){return this.goToIndex(this.count()-1,!0)},e.goToNumber=function(t,e){if(void 0===e&&(e=!1),"reply"===t){var n=this.goToLast();return this.targetPost.reply=!0,n}return this.paused=!0,this.loadPromise=this.loadNearNumber(t),this.needsScroll=!0,this.targetPost={number:t},this.animateScroll=!e,this.number=t,this.loadPromise.then((function(){return m.redraw()}))},e.goToIndex=function(t,e){return void 0===e&&(e=!1),this.paused=!0,this.loadPromise=this.loadNearIndex(t),this.needsScroll=!0,this.targetPost={index:t},this.animateScroll=!e,this.index=t,m.redraw(),this.loadPromise},e.loadNearNumber=function(t){return this.posts().some((function(e){return e&&Number(e.number())===Number(t)}))?Promise.resolve():(this.reset(),app.store.find("posts",{filter:{discussion:this.discussion.id()},page:{near:t}}).then(this.show.bind(this)))},e.loadNearIndex=function(t){if(t>=this.visibleStart&&t<this.visibleEnd)return Promise.resolve();var e=this.sanitizeIndex(t-this.constructor.loadCount/2),n=e+this.constructor.loadCount;return this.reset(e,n),this.loadRange(e,n).then(this.show.bind(this))},e.loadNext=function(){var t=this.visibleEnd,e=this.visibleEnd=this.sanitizeIndex(this.visibleEnd+this.constructor.loadCount),n=t-2*this.constructor.loadCount;n>this.visibleStart&&n>=0&&(this.visibleStart=n+this.constructor.loadCount+1,this.loadPageTimeouts[n]&&(clearTimeout(this.loadPageTimeouts[n]),this.loadPageTimeouts[n]=null,this.pagesLoading--)),this.loadPage(t,e)},e.loadPrevious=function(){var t=this.visibleStart,e=this.visibleStart=this.sanitizeIndex(this.visibleStart-this.constructor.loadCount),n=e+2*this.constructor.loadCount;n<this.visibleEnd&&n<=this.count()&&(this.visibleEnd=n,this.loadPageTimeouts[n]&&(clearTimeout(this.loadPageTimeouts[n]),this.loadPageTimeouts[n]=null,this.pagesLoading--)),this.loadPage(e,t,!0)},e.loadPage=function(t,e,n){var i=this;void 0===n&&(n=!1),this.pagesLoading++;var r=function(){if(!(t<i.visibleStart||e>i.visibleEnd)){var r=n?i.visibleEnd-1:i.visibleStart;Object(xt.a)('.PostStream-item[data-index="'+r+'"]',m.redraw.sync)}};r(),this.loadPageTimeouts[t]=setTimeout((function(){i.loadRange(t,e).then((function(){r(),i.pagesLoading--})),i.loadPageTimeouts[t]=null}),this.pagesLoading-1?1e3:0)},e.loadRange=function(t,e){var n=[],i=[];return this.discussion.postIds().slice(t,e).forEach((function(t){var e=app.store.getById("posts",t);e&&e.discussion()&&void 0!==e.canEdit()?i.push(e):n.push(t)})),n.length?app.store.find("posts",n).then((function(t){return i.concat(t).sort((function(t,e){return t.createdAt()-e.createdAt()}))})):Promise.resolve(i)},e.show=function(t){this.visibleStart=t.length?this.discussion.postIds().indexOf(t[0].id()):0,this.visibleEnd=this.sanitizeIndex(this.visibleStart+t.length)},e.reset=function(t,e){this.visibleStart=t||0,this.visibleEnd=this.sanitizeIndex(e||this.constructor.loadCount)},e.posts=function(){return this.discussion.postIds().slice(this.visibleStart,this.visibleEnd).map((function(t){var e=app.store.getById("posts",t);return e&&e.discussion()&&void 0!==e.canEdit()?e:null}))},e.count=function(){return this.discussion.postIds().length},e.disabled=function(){return this.visible>=this.count()},e.viewingEnd=function(){return Math.abs(this.count()-this.visibleEnd)<=1},e.sanitizeIndex=function(t){return Math.max(0,Math.min(this.count(),Math.floor(t)))},t}();Nt.loadCount=20;var Ct=Nt,Ot=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.useBrowserScrollRestoration=!1,this.discussion=null,this.near=m.route.param("near")||0,this.load(),app.discussions.hasDiscussions()&&(app.pane.enable(),app.pane.hide()),app.history.push("discussion"),this.bodyClass="App--discussion"},n.onremove=function(){t.prototype.onremove.call(this),app.pane.disable(),app.composer.composingReplyTo(this.discussion)&&!app.composer.fields.content()?app.composer.hide():app.composer.minimize()},n.view=function(){var t=this.discussion;return m("div",{className:"DiscussionPage"},m(dt,{state:app.discussions}),m("div",{className:"DiscussionPage-discussion"},t?[v.component({discussion:t}),m("div",{className:"container"},m("nav",{className:"DiscussionPage-nav"},m("ul",null,Object(f.a)(this.sidebarItems().toArray()))),m("div",{className:"DiscussionPage-stream"},gt.component({discussion:t,stream:this.stream,onPositionChange:this.positionChanged.bind(this)})))]:j.a.component({className:"LoadingIndicator--block"})))},n.load=function(){var t=app.preloadedApiDocument();if(t)setTimeout(this.show.bind(this,t),0);else{var e=this.requestParams();app.store.find("discussions",m.route.param("id"),e).then(this.show.bind(this))}m.redraw()},n.requestParams=function(){return{bySlug:!0,page:{near:this.near}}},n.show=function(t){var e=this;app.history.push("discussion",t.title()),app.setTitle(t.title()),app.setTitleCount(0);var n=[];if(t.payload&&t.payload.included){var i=t.id();n=t.payload.included.filter((function(t){return"posts"===t.type&&t.relationships&&t.relationships.discussion&&t.relationships.discussion.data.id===i})).map((function(t){return app.store.getById("posts",t.id)})).sort((function(t,e){return t.createdAt()-e.createdAt()})).slice(0,20)}this.stream=new Ct(t,n),this.stream.goToNumber(m.route.param("near")||n[0]&&n[0].number(),!0).then((function(){e.discussion=t,app.current.set("discussion",t),app.current.set("stream",e.stream)}))},n.sidebarItems=function(){var t=new p.a;return t.add("controls",wt.a.component({icon:"fas fa-ellipsis-v",className:"App-primaryControl",buttonClassName:"Button--primary"},W.controls(this.discussion,this).toArray())),t.add("scrubber",yt.component({stream:this.stream,className:"App-titleControl"}),-100),t},n.positionChanged=function(t,e){var n=this.discussion,i=app.route.discussion(n,this.near=t);window.history.replaceState(null,document.title,i),app.history.push("discussion",n.title()),app.session.user&&e>(n.lastReadPostNumber()||0)&&(n.save({lastReadPostNumber:e}),m.redraw())},e}(d.a),Tt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){return m("ul",{className:"Header-controls"},Object(f.a)(this.items().toArray()))},n.items=function(){return new p.a},e}(h.a),kt=n(14),jt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.className="SessionDropdown",e.buttonClassName="Button Button--user Button--flat",e.menuClassName="Dropdown-menu--right"};var n=e.prototype;return n.view=function(e){return t.prototype.view.call(this,Object(a.a)({},e,{children:this.items().toArray()}))},n.getButtonContent=function(){var t=app.session.user;return[Object(b.a)(t)," ",m("span",{className:"Button-label"},Object(ft.a)(t))]},n.items=function(){var t=new p.a,e=app.session.user;return t.add("profile",kt.a.component({icon:"fas fa-user",href:app.route.user(e)},app.translator.trans("core.forum.header.profile_button")),100),t.add("settings",kt.a.component({icon:"fas fa-cog",href:app.route("settings")},app.translator.trans("core.forum.header.settings_button")),50),app.forum.attribute("adminUrl")&&t.add("administration",kt.a.component({icon:"fas fa-wrench",href:app.forum.attribute("adminUrl"),target:"_blank"},app.translator.trans("core.forum.header.admin_button")),0),t.add("separator",q.a.component(),-90),t.add("logOut",P.a.component({icon:"fas fa-sign-out-alt",onclick:app.session.logout.bind(app.session)},app.translator.trans("core.forum.header.log_out_button")),-100),t},e}(C.a),St=n(35),At=n(46),Pt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){var t=this.attrs.state,e=t.getNotificationPages();return m("div",{className:"NotificationList"},m("div",{className:"NotificationList-header"},m("div",{className:"App-primaryControl"},P.a.component({className:"Button Button--icon Button--link",icon:"fas fa-check",title:app.translator.trans("core.forum.notifications.mark_all_as_read_tooltip"),onclick:t.markAllAsRead.bind(t)})),m("h4",{className:"App-titleControl App-titleControl--text"},app.translator.trans("core.forum.notifications.title"))),m("div",{className:"NotificationList-content"},e.length?e.map((function(t){var e=[],n={};return t.forEach((function(t){var i=t.subject();if(void 0!==i){var r=!1;i instanceof At.a?r=i:i&&i.discussion&&(r=i.discussion());var o=r?r.id():0;n[o]=n[o]||{discussion:r,notifications:[]},n[o].notifications.push(t),-1===e.indexOf(n[o])&&e.push(n[o])}})),e.map((function(t){var e=t.discussion&&t.discussion.badges().toArray();return m("div",{className:"NotificationGroup"},t.discussion?m(g.a,{className:"NotificationGroup-header",href:app.route.discussion(t.discussion)},e&&e.length?m("ul",{className:"NotificationGroup-badges badges"},Object(f.a)(e)):"",t.discussion.title()):m("div",{className:"NotificationGroup-header"},app.forum.attribute("title")),m("ul",{className:"NotificationGroup-content"},t.notifications.map((function(t){var e=app.notificationComponents[t.contentType()];return e?m("li",null,e.component({notification:t})):""}))))}))})):"",t.isLoading()?m(j.a,{className:"LoadingIndicator--block"}):e.length?"":m("div",{className:"NotificationList-empty"},app.translator.trans("core.forum.notifications.empty_text"))))},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.$notifications=this.$(".NotificationList-content"),this.$scrollParent="auto"===this.$notifications.css("overflow")?this.$notifications:$(window),this.boundScrollHandler=this.scrollHandler.bind(this),this.$scrollParent.on("scroll",this.boundScrollHandler)},n.onremove=function(){this.$scrollParent.off("scroll",this.boundScrollHandler)},n.scrollHandler=function(){var t=this.attrs.state,e=this.$scrollParent.scrollTop(),n=this.$scrollParent.height(),i=this.$scrollParent===this.$notifications?0:this.$notifications.offset().top,r=this.$notifications[0].scrollHeight;t.hasMoreResults()&&!t.isLoading()&&e+n>=i+r&&t.loadMore()},e}(h.a),Et=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t),e.initAttrs=function(e){e.className=e.className||"NotificationsDropdown",e.buttonClassName=e.buttonClassName||"Button Button--flat",e.menuClassName=e.menuClassName||"Dropdown-menu--right",e.label=e.label||app.translator.trans("core.forum.notifications.tooltip"),e.icon=e.icon||"fas fa-bell",t.initAttrs.call(this,e)};var n=e.prototype;return n.getButton=function(){var e=this.getNewCount(),n=t.prototype.getButton.call(this);return n.attrs.title=this.attrs.label,n.attrs.className+=e?" new":"",n.attrs.onclick=this.onclick.bind(this),n},n.getButtonContent=function(){var t=this.getUnreadCount();return[Object(w.a)(this.attrs.icon,{className:"Button-icon"}),t?m("span",{className:"NotificationsDropdown-unread"},t):"",m("span",{className:"Button-label"},this.attrs.label)]},n.getMenu=function(){return m("div",{className:"Dropdown-menu "+this.attrs.menuClassName,onclick:this.menuClick.bind(this)},this.showing?Pt.component({state:this.attrs.state}):"")},n.onclick=function(){app.drawer.isOpen()?this.goToRoute():this.attrs.state.load()},n.goToRoute=function(){m.route.set(app.route("notifications"))},n.getUnreadCount=function(){return app.session.user.unreadNotificationCount()},n.getNewCount=function(){return app.session.user.newNotificationCount()},n.menuClick=function(t){(t.shiftKey||t.metaKey||t.ctrlKey||2===t.which)&&t.stopPropagation()},e}(C.a),Dt=function(){function t(){this.callbacks={},this.whenCallback=function(t){return!0}}var e=t.prototype;return e.onUp=function(t){return this.callbacks[38]=function(e){e.preventDefault(),t(e)},this},e.onDown=function(t){return this.callbacks[40]=function(e){e.preventDefault(),t(e)},this},e.onSelect=function(t){return this.callbacks[9]=this.callbacks[13]=function(e){e.preventDefault(),t(e)},this},e.onCancel=function(t){return this.callbacks[27]=function(e){e.stopPropagation(),e.preventDefault(),t(e)},this},e.onRemove=function(t){return this.callbacks[8]=function(e){0===e.target.selectionStart&&0===e.target.selectionEnd&&(t(e),e.preventDefault())},this},e.when=function(t){return this.whenCallback=t,this},e.bindTo=function(t){t.on("keydown",this.navigate.bind(this))},e.navigate=function(t){if(this.whenCallback(t)){var e=this.callbacks[t.which];e&&e(t)}},t}(),$t=function(){function t(){this.results={}}var e=t.prototype;return e.search=function(t){var e=this;t=t.toLowerCase(),this.results[t]=[];var n={filter:{q:t},page:{limit:3},include:"mostRelevantPost"};return app.store.find("discussions",n).then((function(n){return e.results[t]=n}))},e.view=function(t){t=t.toLowerCase();var e=this.results[t]||[];return[m("li",{className:"Dropdown-header"},app.translator.trans("core.forum.search.discussions_heading")),m("li",null,kt.a.component({icon:"fas fa-search",href:app.route("index",{q:t})},app.translator.trans("core.forum.search.all_discussions_button",{query:t}))),e.map((function(e){var n=e.mostRelevantPost();return m("li",{className:"DiscussionSearchResult","data-index":"discussions"+e.id()},m(g.a,{href:app.route.discussion(e,n&&n.number())},m("div",{className:"DiscussionSearchResult-title"},Object(y.a)(e.title(),t)),n?m("div",{className:"DiscussionSearchResult-excerpt"},Object(y.a)(n.contentPlain(),t,100)):""))}))]},t}(),_t=function(){function t(){this.results={}}var e=t.prototype;return e.search=function(t){var e=this;return app.store.find("users",{filter:{q:t},page:{limit:5}}).then((function(n){e.results[t]=n,m.redraw()}))},e.view=function(t){t=t.toLowerCase();var e=(this.results[t]||[]).concat(app.store.all("users").filter((function(e){return[e.username(),e.displayName()].some((function(e){return e.toLowerCase().substr(0,t.length)===t}))}))).filter((function(t,e,n){return n.lastIndexOf(t)===e})).sort((function(t,e){return t.displayName().localeCompare(e.displayName())}));return e.length?[m("li",{className:"Dropdown-header"},app.translator.trans("core.forum.search.users_heading")),e.map((function(e){var n=Object(ft.a)(e),i=[Object(y.a)(n.text,t)];return m("li",{className:"UserSearchResult","data-index":"users"+e.id()},m(g.a,{href:app.route.user(e)},Object(b.a)(e),Object(a.a)({},n,{text:void 0,children:i})))}))]:""},t}(),It=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state=this.attrs.state,this.hasFocus=!1,this.sources=null,this.loadingSources=0,this.index=0},n.view=function(){var t=this,e=this.state.getInitialSearch();return this.sources||(this.sources=this.sourceItems().toArray()),this.sources.length?m("div",{className:"Search "+Object(Y.a)({open:this.state.getValue()&&this.hasFocus,focused:this.hasFocus,active:!!e,loading:!!this.loadingSources})},m("div",{className:"Search-input"},m("input",{className:"FormControl",type:"search",placeholder:Object(_.a)(app.translator.trans("core.forum.header.search_placeholder")),value:this.state.getValue(),oninput:function(e){return t.state.setValue(e.target.value)},onfocus:function(){return t.hasFocus=!0},onblur:function(){return t.hasFocus=!1}}),this.loadingSources?j.a.component({size:"tiny",className:"Button Button--icon Button--link"}):e?m("button",{className:"Search-clear Button Button--icon Button--link",onclick:this.clear.bind(this)},Object(w.a)("fas fa-times-circle")):""),m("ul",{className:"Dropdown-menu Search-results"},this.state.getValue()&&this.hasFocus?this.sources.map((function(e){return e.view(t.state.getValue())})):"")):m("div",null)},n.onupdate=function(){this.setIndex(this.getCurrentNumericIndex())},n.oncreate=function(n){var i=this;t.prototype.oncreate.call(this,n);var r=this,o=this.state;this.setIndex(this.getCurrentNumericIndex()),this.$(".Search-results").on("mousedown",(function(t){return t.preventDefault()})).on("click",(function(){return i.$("input").blur()})).on("mouseenter","> li:not(.Dropdown-header)",(function(){r.setIndex(r.selectableItems().index(this))}));var s=this.$("input");this.navigator=new Dt,this.navigator.onUp((function(){return i.setIndex(i.getCurrentNumericIndex()-1,!0)})).onDown((function(){return i.setIndex(i.getCurrentNumericIndex()+1,!0)})).onSelect(this.selectResult.bind(this)).onCancel(this.clear.bind(this)).bindTo(s),s.on("input focus",(function(){var t=this.value.toLowerCase();t&&(clearTimeout(r.searchTimeout),r.searchTimeout=setTimeout((function(){o.isCached(t)||(t.length>=e.MIN_SEARCH_LEN&&r.sources.map((function(e){e.search&&(r.loadingSources++,e.search(t).then((function(){r.loadingSources=Math.max(0,r.loadingSources-1),m.redraw()})))})),o.cache(t),m.redraw())}),250))})).on("focus",(function(){$(this).one("mouseup",(function(t){return t.preventDefault()})).select()}))},n.selectResult=function(){clearTimeout(this.searchTimeout),this.loadingSources=0,this.state.getValue()?m.route.set(this.getItem(this.index).find("a").attr("href")):this.clear(),this.$("input").blur()},n.clear=function(){this.state.clear()},n.sourceItems=function(){var t=new p.a;return app.forum.attribute("canViewDiscussions")&&t.add("discussions",new $t),app.forum.attribute("canViewUserList")&&t.add("users",new _t),t},n.selectableItems=function(){return this.$(".Search-results > li:not(.Dropdown-header)")},n.getCurrentNumericIndex=function(){return this.selectableItems().index(this.getItem(this.index))},n.getItem=function(t){var e=this.selectableItems(),n=e.filter('[data-index="'+t+'"]');return n.length||(n=e.eq(t)),n},n.setIndex=function(t,e){var n=this.selectableItems(),i=n.parent(),r=t;t<0?r=n.length-1:t>=n.length&&(r=0);var o=n.removeClass("active").eq(r).addClass("active");if(this.index=o.attr("data-index")||r,e){var s,a=i.scrollTop(),c=i.offset().top,u=c+i.outerHeight(),l=o.offset().top,d=l+o.outerHeight();l<c?s=a-c+l-parseInt(i.css("padding-top"),10):d>u&&(s=a-u+d+parseInt(i.css("padding-bottom"),10)),void 0!==s&&i.stop(!0).animate({scrollTop:s},100)}},e}(h.a);Object(s.a)(It,"MIN_SEARCH_LEN",3);var Mt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){return m("ul",{className:"Header-controls"},Object(f.a)(this.items().toArray()))},n.items=function(){var t=new p.a;if(t.add("search",It.component({state:app.search}),30),app.forum.attribute("showLanguageSelector")&&Object.keys(app.data.locales).length>1){var e=[],n=function(t){e.push(P.a.component({active:app.data.locale===t,icon:app.data.locale!==t||"fas fa-check",onclick:function(){app.session.user?app.session.user.savePreferences({locale:t}).then((function(){return window.location.reload()})):(document.cookie="locale="+t+"; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT",window.location.reload())}},app.data.locales[t]))};for(var i in app.data.locales)n(i);t.add("locale",St.a.component({buttonClassName:"Button Button--link"},e),20)}return app.session.user?(t.add("notifications",Et.component({state:app.notifications}),10),t.add("session",jt.component(),0)):(app.forum.attribute("allowSignUp")&&t.add("signUp",P.a.component({className:"Button Button--link",onclick:function(){return app.modal.show(U)}},app.translator.trans("core.forum.header.sign_up_link")),10),t.add("logIn",P.a.component({className:"Button Button--link",onclick:function(){return app.modal.show(F)}},app.translator.trans("core.forum.header.log_in_link")),0)),t},e}(h.a),Lt=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.className=e.className||"Button Button--icon Button--link"},e}(P.a),Rt=n(43),Bt=function(){function t(){this.position=t.Position.HIDDEN,this.height=null,this.body={attrs:{}},this.editor=null,this.clear()}var e=t.prototype;return e.load=function(t,e){var n={componentClass:t,attrs:e};this.preventExit()||(this.isVisible()&&(this.clear(),m.redraw.sync()),this.body=n)},e.clear=function(){this.position=t.Position.HIDDEN,this.body={attrs:{}},this.editor=null,this.onExit=null,this.fields={content:Object(R.a)("")}},e.show=function(){this.position!==t.Position.NORMAL&&this.position!==t.Position.FULLSCREEN&&(this.position=t.Position.NORMAL,m.redraw.sync())},e.hide=function(){this.clear(),m.redraw()},e.close=function(){this.preventExit()||this.hide()},e.minimize=function(){this.isVisible()&&(this.position=t.Position.MINIMIZED,m.redraw())},e.fullScreen=function(){this.isVisible()&&(this.position=t.Position.FULLSCREEN,m.redraw())},e.exitFullScreen=function(){this.position===t.Position.FULLSCREEN&&(this.position=t.Position.NORMAL,m.redraw())},e.bodyMatches=function(t,e){var n=this;return void 0===e&&(e={}),!!Object(Rt.a)(this.body.componentClass,t)&&Object.keys(e).every((function(t){return n.body.attrs[t]===e[t]}))},e.isVisible=function(){return this.position!==t.Position.HIDDEN},e.isFullScreen=function(){return this.position===t.Position.FULLSCREEN||"phone"===app.screen()},e.composingReplyTo=function(t){return this.isVisible()&&this.bodyMatches(M,{discussion:t})},e.preventExit=function(){if(this.isVisible()&&this.onExit)return this.onExit.callback()?!confirm(this.onExit.message):void 0},e.preventClosingWhen=function(t,e){this.onExit={callback:t,message:e}},e.minimumHeight=function(){return 200},e.maximumHeight=function(){return $(window).height()-$("#header").outerHeight()},e.computedHeight=function(){return this.position===t.Position.MINIMIZED?"":this.position===t.Position.FULLSCREEN?$(window).height():Math.max(this.minimumHeight(),Math.min(this.height,this.maximumHeight()))},t}();Bt.Position={HIDDEN:"hidden",NORMAL:"normal",MINIMIZED:"minimized",FULLSCREEN:"fullScreen"};var Ht=Bt,Ut=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.state=this.attrs.state,this.active=!1,this.prevPosition=this.state.position},n.view=function(){var t=this.state.body,e={normal:this.state.position===Ht.Position.NORMAL,minimized:this.state.position===Ht.Position.MINIMIZED,fullScreen:this.state.position===Ht.Position.FULLSCREEN,active:this.active,visible:this.state.isVisible()},n=this.state.position===Ht.Position.MINIMIZED?this.state.show.bind(this.state):void 0;return m("div",{className:"Composer "+Object(Y.a)(e)},m("div",{className:"Composer-handle",oncreate:this.configHandle.bind(this)}),m("ul",{className:"Composer-controls"},Object(f.a)(this.controlItems().toArray())),m("div",{className:"Composer-content",onclick:n},t.componentClass?t.componentClass.component(Object(a.a)({},t.attrs,{composer:this.state,disabled:e.minimized})):""))},n.onupdate=function(){this.state.position===this.prevPosition?this.updateHeight():(this.animatePositionChange(),this.prevPosition=this.state.position)},n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e),this.initializeHeight(),this.$().hide().css("bottom",-this.state.computedHeight()),this.$().on("focus blur",":input",(function(t){n.active="focusin"===t.type,m.redraw()})),this.$().on("keydown",":input","esc",(function(){return n.state.close()})),this.handlers={},$(window).on("resize",this.handlers.onresize=this.updateHeight.bind(this)).resize(),$(document).on("mousemove",this.handlers.onmousemove=this.onmousemove.bind(this)).on("mouseup",this.handlers.onmouseup=this.onmouseup.bind(this))},n.onremove=function(){$(window).off("resize",this.handlers.onresize),$(document).off("mousemove",this.handlers.onmousemove).off("mouseup",this.handlers.onmouseup)},n.configHandle=function(t){var e=this;$(t.dom).css("cursor","row-resize").bind("dragstart mousedown",(function(t){return t.preventDefault()})).mousedown((function(t){e.mouseStart=t.clientY,e.heightStart=e.$().height(),e.handle=$(this),$("body").css("cursor","row-resize")}))},n.onmousemove=function(t){if(this.handle){var e=this.mouseStart-t.clientY;this.changeHeight(this.heightStart+e);var n=$(window).scrollTop(),i=n>0&&n+$(window).height()>=$(document).height();this.updateBodyPadding(i)}},n.onmouseup=function(){this.handle&&(this.handle=null,$("body").css("cursor",""))},n.focus=function(){this.$(".Composer-content :input:enabled:visible:first").focus()},n.updateHeight=function(){var t=this.state.computedHeight(),e=this.$(".Composer-flexible");if(this.$().height(t),e.length){var n=e.offset().top-this.$().offset().top,i=parseInt(e.css("padding-bottom"),10),r=this.$(".Composer-footer").outerHeight(!0);e.height(this.$().outerHeight()-n-i-r)}},n.updateBodyPadding=function(){var t=this.state.position!==Ht.Position.HIDDEN&&this.state.position!==Ht.Position.MINIMIZED&&"phone"!==app.screen()?this.state.computedHeight()-parseInt($("#app").css("padding-bottom"),10):0;$("#content").css({paddingBottom:t})},n.animatePositionChange=function(){if(this.prevPosition!==Ht.Position.FULLSCREEN||this.state.position!==Ht.Position.NORMAL)switch(this.state.position){case Ht.Position.HIDDEN:return this.hide();case Ht.Position.MINIMIZED:return this.minimize();case Ht.Position.FULLSCREEN:return this.focus();case Ht.Position.NORMAL:return this.show()}else this.focus()},n.animateHeightChange=function(){var t=this.$().stop(!0),e=t.outerHeight(),n=$(window).scrollTop();t.show(),this.updateHeight();var i=t.outerHeight();this.prevPosition===Ht.Position.HIDDEN?t.css({bottom:-i,height:i}):t.css({height:e});var r=t.animate({bottom:0,height:i},"fast").promise();return this.updateBodyPadding(),$(window).scrollTop(n),r},n.showBackdrop=function(){this.$backdrop=$("<div/>").addClass("composer-backdrop").appendTo("body")},n.hideBackdrop=function(){this.$backdrop&&this.$backdrop.remove()},n.show=function(){var t=this;this.animateHeightChange().then((function(){return t.focus()})),"phone"===app.screen()&&(this.$().css("top",$(window).scrollTop()),this.showBackdrop())},n.hide=function(){var t=this,e=this.$();e.stop(!0).animate({bottom:-e.height()},"fast",(function(){e.hide(),t.hideBackdrop(),t.updateBodyPadding()}))},n.minimize=function(){this.animateHeightChange(),this.$().css("top","auto"),this.hideBackdrop()},n.controlItems=function(){var t=new p.a;return this.state.position===Ht.Position.FULLSCREEN?t.add("exitFullScreen",Lt.component({icon:"fas fa-compress",title:app.translator.trans("core.forum.composer.exit_full_screen_tooltip"),onclick:this.state.exitFullScreen.bind(this.state)})):(this.state.position!==Ht.Position.MINIMIZED&&(t.add("minimize",Lt.component({icon:"fas fa-minus minimize",title:app.translator.trans("core.forum.composer.minimize_tooltip"),onclick:this.state.minimize.bind(this.state),itemClassName:"App-backControl"})),t.add("fullScreen",Lt.component({icon:"fas fa-expand",title:app.translator.trans("core.forum.composer.full_screen_tooltip"),onclick:this.state.fullScreen.bind(this.state)}))),t.add("close",Lt.component({icon:"fas fa-times",title:app.translator.trans("core.forum.composer.close_tooltip"),onclick:this.state.close.bind(this.state)}))),t},n.initializeHeight=function(){this.state.height=localStorage.getItem("composerHeight"),this.state.height||(this.state.height=this.defaultHeight())},n.defaultHeight=function(){return this.$().height()},n.changeHeight=function(t){this.state.height=t,this.updateHeight(),localStorage.setItem("composerHeight",this.state.height)},e}(h.a),Ft=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){var t=this,e=this.attrs.notification,n=this.href();return m(g.a,{className:"Notification Notification--"+e.contentType()+" "+(e.isRead()?"":"unread"),href:n,external:n.includes("://"),onclick:this.markAsRead.bind(this)},!e.isRead()&&P.a.component({className:"Notification-action Button Button--icon Button--link",icon:"fas fa-check",title:app.translator.trans("core.forum.notifications.mark_as_read_tooltip"),onclick:function(e){e.preventDefault(),e.stopPropagation(),t.markAsRead()}}),Object(b.a)(e.fromUser()),Object(w.a)(this.icon(),{className:"Notification-icon"}),m("span",{className:"Notification-content"},this.content()),Object(O.a)(e.createdAt()),m("div",{className:"Notification-excerpt"},this.excerpt()))},n.icon=function(){},n.href=function(){},n.content=function(){},n.excerpt=function(){},n.markAsRead=function(){this.attrs.notification.isRead()||(app.session.user.pushAttributes({unreadNotificationCount:app.session.user.unreadNotificationCount()-1}),this.attrs.notification.save({isRead:!0}))},e}(h.a),qt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-pencil-alt"},n.href=function(){var t=this.attrs.notification;return app.route.discussion(t.subject(),t.content().postNumber)},n.content=function(){return app.translator.trans("core.forum.notifications.discussion_renamed_text",{user:this.attrs.notification.fromUser()})},e}(Ft);function zt(t){app.composer.isFullScreen()&&(app.composer.minimize(),t.stopPropagation())}var Wt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.submitLabel=e.submitLabel||app.translator.trans("core.forum.composer_edit.submit_button"),e.confirmExit=e.confirmExit||app.translator.trans("core.forum.composer_edit.discard_confirmation"),e.originalContent=e.originalContent||e.post.content(),e.user=e.user||e.post.user(),e.post.editedContent=e.originalContent};var n=e.prototype;return n.headerItems=function(){var e=t.prototype.headerItems.call(this),n=this.attrs.post;return e.add("title",m("h3",null,Object(w.a)("fas fa-pencil-alt")," ",m(g.a,{href:app.route.discussion(n.discussion(),n.number()),onclick:zt},app.translator.trans("core.forum.composer_edit.post_link",{number:n.number(),discussion:n.discussion().title()})))),e},n.jumpToPreview=function(t){zt(t),m.route.set(app.route.post(this.attrs.post))},n.data=function(){return{content:this.composer.fields.content()}},n.onsubmit=function(){var t=this,e=this.attrs.post.discussion();this.loading=!0;var n=this.data();this.attrs.post.save(n).then((function(n){if(app.viewingDiscussion(e))app.current.get("stream").goToNumber(n.number());else{var i,r=P.a.component({className:"Button Button--link",onclick:function(){m.route.set(app.route.post(n)),app.alerts.dismiss(i)}},app.translator.trans("core.forum.composer_edit.view_button"));i=app.alerts.show({type:"success",controls:[r]},app.translator.trans("core.forum.composer_edit.edited_message"))}t.composer.hide()}),this.loaded.bind(this))},e}(D),Vt={controls:function(t,e){var n=this,i=new p.a;return["user","moderation","destructive"].forEach((function(r){var o=n[r+"Controls"](t,e).toArray();o.length&&(o.forEach((function(t){return i.add(t.itemName,t)})),i.add(r+"Separator",q.a.component()))})),i},userControls:function(t,e){return new p.a},moderationControls:function(t,e){var n=new p.a;return"comment"===t.contentType()&&t.canEdit()&&(t.isHidden()||n.add("edit",P.a.component({icon:"fas fa-pencil-alt",onclick:this.editAction.bind(t)},app.translator.trans("core.forum.post_controls.edit_button")))),n},destructiveControls:function(t,e){var n=new p.a;return"comment"!==t.contentType()||t.isHidden()?("comment"===t.contentType()&&t.canHide()&&n.add("restore",P.a.component({icon:"fas fa-reply",onclick:this.restoreAction.bind(t)},app.translator.trans("core.forum.post_controls.restore_button"))),t.canDelete()&&n.add("delete",P.a.component({icon:"fas fa-times",onclick:this.deleteAction.bind(t,e)},app.translator.trans("core.forum.post_controls.delete_forever_button")))):t.canHide()&&n.add("hide",P.a.component({icon:"far fa-trash-alt",onclick:this.hideAction.bind(t)},app.translator.trans("core.forum.post_controls.delete_button"))),n},editAction:function(){var t=this;return new Promise((function(e){return app.composer.load(Wt,{post:t}),app.composer.show(),e()}))},hideAction:function(){if(confirm(Object(_.a)(app.translator.trans("core.forum.post_controls.hide_confirmation"))))return this.pushAttributes({hiddenAt:new Date,hiddenUser:app.session.user}),this.save({isHidden:!0}).then((function(){return m.redraw()}))},restoreAction:function(){return this.pushAttributes({hiddenAt:null,hiddenUser:null}),this.save({isHidden:!1}).then((function(){return m.redraw()}))},deleteAction:function(t){var e=this;if(confirm(Object(_.a)(app.translator.trans("core.forum.post_controls.delete_confirmation"))))return t&&(t.loading=!0),this.delete().then((function(){var t=e.discussion();t.removePost(e.id()),t.postIds().length||(app.discussions.removeDiscussion(t),app.viewingDiscussion(t)&&app.history.back())})).catch((function(){})).then((function(){t&&(t.loading=!1),m.redraw()}))}},Yt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.loading=!1,this.subtree=new k.a((function(){return n.attrs.post.freshness}),(function(){var t=n.attrs.post.user();return t&&t.freshness}),(function(){return n.controlsOpen}))},n.view=function(){var t=this,e=this.elementAttrs();e.className=this.classes(e.className).join(" ");var n=Vt.controls(this.attrs.post,this).toArray();return m("article",e,m("div",null,this.content(),m("aside",{className:"Post-actions"},m("ul",null,Object(f.a)(this.actionItems().toArray()),n.length?m("li",null,m(C.a,{className:"Post-controls",buttonClassName:"Button Button--icon Button--flat",menuClassName:"Dropdown-menu--right",icon:"fas fa-ellipsis-h",onshow:function(){return t.$(".Post-actions").addClass("open")},onhide:function(){return t.$(".Post-actions").removeClass("open")}},n)):"")),m("footer",{className:"Post-footer"},m("ul",null,Object(f.a)(this.footerItems().toArray())))))},n.onbeforeupdate=function(e){return t.prototype.onbeforeupdate.call(this,e),this.subtree.needsRebuild()},n.onupdate=function(){var t=this.$(".Post-actions"),e=this.$(".Post-controls");t.toggleClass("open",e.hasClass("open"))},n.elementAttrs=function(){return{}},n.content=function(){return[]},n.classes=function(t){var e=(t||"").split(" ").concat(["Post"]),n=this.attrs.post.user(),i=this.attrs.post.discussion();return this.loading&&e.push("Post--loading"),n&&n===app.session.user&&e.push("Post--by-actor"),n&&n===i.user()&&e.push("Post--by-start-user"),e},n.actionItems=function(){return new p.a},n.footerItems=function(){return new p.a},e}(h.a),Kt=n(36),Gt=n(13),Xt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e);var i=this.attrs.user;this.username=Object(R.a)(i.username()||""),this.email=Object(R.a)(i.email()||""),this.isEmailConfirmed=Object(R.a)(i.isEmailConfirmed()||!1),this.setPassword=Object(R.a)(!1),this.password=Object(R.a)(i.password()||""),this.groups={},app.store.all("groups").filter((function(t){return-1===[Gt.a.GUEST_ID,Gt.a.MEMBER_ID].indexOf(t.id())})).forEach((function(t){return n.groups[t.id()]=Object(R.a)(-1!==i.groups().indexOf(t))}))},n.className=function(){return"EditUserModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.edit_user.title")},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.fields().toArray()))},n.fields=function(){var t=this,e=new p.a;return e.add("username",m("div",{className:"Form-group"},m("label",null,app.translator.trans("core.forum.edit_user.username_heading")),m("input",{className:"FormControl",placeholder:Object(_.a)(app.translator.trans("core.forum.edit_user.username_label")),bidi:this.username})),40),app.session.user!==this.attrs.user&&(e.add("email",m("div",{className:"Form-group"},m("label",null,app.translator.trans("core.forum.edit_user.email_heading")),m("div",null,m("input",{className:"FormControl",placeholder:Object(_.a)(app.translator.trans("core.forum.edit_user.email_label")),bidi:this.email})),this.isEmailConfirmed()?"":m("div",null,P.a.component({className:"Button Button--block",loading:this.loading,onclick:this.activate.bind(this)},app.translator.trans("core.forum.edit_user.activate_button")))),30),e.add("password",m("div",{className:"Form-group"},m("label",null,app.translator.trans("core.forum.edit_user.password_heading")),m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",onchange:function(e){t.setPassword(e.target.checked),m.redraw.sync(),e.target.checked&&t.$("[name=password]").select(),e.redraw=!1}}),app.translator.trans("core.forum.edit_user.set_password_label")),this.setPassword()?m("input",{className:"FormControl",type:"password",name:"password",placeholder:Object(_.a)(app.translator.trans("core.forum.edit_user.password_label")),bidi:this.password}):"")),20)),e.add("groups",m("div",{className:"Form-group EditUserModal-groups"},m("label",null,app.translator.trans("core.forum.edit_user.groups_heading")),m("div",null,Object.keys(this.groups).map((function(t){return app.store.getById("groups",t)})).map((function(e){return m("label",{className:"checkbox"},m("input",{type:"checkbox",bidi:t.groups[e.id()],disabled:"1"===t.attrs.user.id()&&e.id()===Gt.a.ADMINISTRATOR_ID}),Kt.a.component({group:e,label:""})," ",e.nameSingular())})))),10),e.add("submit",m("div",{className:"Form-group"},P.a.component({className:"Button Button--primary",type:"submit",loading:this.loading},app.translator.trans("core.forum.edit_user.submit_button"))),-10),e},n.activate=function(){var t=this;this.loading=!0;var e={username:this.username(),isEmailConfirmed:!0};this.attrs.user.save(e,{errorHandler:this.onerror.bind(this)}).then((function(){t.isEmailConfirmed(!0),t.loading=!1,m.redraw()})).catch((function(){t.loading=!1,m.redraw()}))},n.data=function(){var t=this,e=Object.keys(this.groups).filter((function(e){return t.groups[e]()})).map((function(t){return app.store.getById("groups",t)})),n={username:this.username(),relationships:{groups:e}};return app.session.user!==this.attrs.user&&(n.email=this.email()),this.setPassword()&&(n.password=this.password()),n},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.attrs.user.save(this.data(),{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).catch((function(){e.loading=!1,m.redraw()}))},e}(L.a),Jt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(t){return t.children[0]},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.boundOnresize=this.onresize.bind(this),$(window).on("resize",this.boundOnresize).resize()},n.onremove=function(){$(window).off("resize",this.boundOnresize)},n.onresize=function(){var t=this,e=this.$(),n=$("#header"),i=$("#footer"),r=e.find("> ul");$(window).off(".affix"),r.removeClass("affix affix-top affix-bottom").removeData("bs.affix"),e.outerHeight(!0)>$(window).height()-n.outerHeight(!0)||r.affix({offset:{top:function(){return e.offset().top-n.outerHeight(!0)-parseInt(e.css("margin-top"),10)},bottom:function(){return t.bottom=i.outerHeight(!0)}}})},e}(h.a),Qt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.user=null,this.bodyClass="App--user"},n.view=function(){return m("div",{className:"UserPage"},this.user?[m(ee,{user:this.user,className:"Hero UserHero",editable:this.user.canEdit()||this.user===app.session.user,controlsButtonClassName:"Button"}),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m(Jt,null,m("nav",{className:"sideNav UserPage-nav"},m("ul",null,Object(f.a)(this.sidebarItems().toArray())))),m("div",{className:"sideNavOffset UserPage-content"},this.content())))]:[m(j.a,{className:"LoadingIndicator--block"})])},n.content=function(){},n.show=function(t){this.user=t,app.current.set("user",t),app.setTitle(t.displayName()),m.redraw()},n.loadUser=function(t){var e=this,n=t.toLowerCase();app.preloadedApiDocument(),app.store.all("users").some((function(i){if((i.username().toLowerCase()===n||i.id()===t)&&i.joinTime())return e.show(i),!0})),this.user||app.store.find("users",t,{bySlug:!0}).then(this.show.bind(this))},n.sidebarItems=function(){var t=new p.a;return t.add("nav",m(St.a,{className:"App-titleControl",buttonClassName:"Button"},this.navItems().toArray())),t},n.navItems=function(){var t=new p.a,e=this.user;return t.add("posts",m(kt.a,{href:app.route("user.posts",{username:e.username()}),icon:"far fa-comment"},app.translator.trans("core.forum.user.posts_link")," ",m("span",{className:"Button-badge"},e.commentCount())),100),t.add("discussions",m(kt.a,{href:app.route("user.discussions",{username:e.username()}),icon:"fas fa-bars"},app.translator.trans("core.forum.user.discussions_link")," ",m("span",{className:"Button-badge"},e.discussionCount())),90),app.session.user===e&&(t.add("separator",m(q.a,null),-90),t.add("settings",m(kt.a,{href:app.route("settings"),icon:"fas fa-cog"},app.translator.trans("core.forum.user.settings_link")),-100)),t},e}(d.a),Zt={controls:function(t,e){var n=this,i=new p.a;return["user","moderation","destructive"].forEach((function(r){var o=n[r+"Controls"](t,e).toArray();o.length&&(o.forEach((function(t){return i.add(t.itemName,t)})),i.add(r+"Separator",m(q.a,null)))})),i},userControls:function(){return new p.a},moderationControls:function(t){var e=new p.a;return t.canEdit()&&e.add("edit",m(P.a,{icon:"fas fa-pencil-alt",onclick:this.editAction.bind(this,t)},app.translator.trans("core.forum.user_controls.edit_button"))),e},destructiveControls:function(t){var e=new p.a;return"1"!==t.id()&&t.canDelete()&&e.add("delete",m(P.a,{icon:"fas fa-times",onclick:this.deleteAction.bind(this,t)},app.translator.trans("core.forum.user_controls.delete_button"))),e},deleteAction:function(t){var e=this;confirm(app.translator.trans("core.forum.user_controls.delete_confirmation"))&&t.delete().then((function(){e.showDeletionAlert(t,"success"),app.current.matches(Qt,{user:t})?app.history.back():window.location.reload()})).catch((function(){return e.showDeletionAlert(t,"error")}))},showDeletionAlert:function(t,e){var n=t.data.attributes,i=n.username,r=n.email,o={success:"core.forum.user_controls.delete_success_message",error:"core.forum.user_controls.delete_error_message"}[e];app.alerts.show({type:e},app.translator.trans(o,{username:i,email:r}))},editAction:function(t){app.modal.show(Xt,{user:t})}},te=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!1,this.isDraggedOver=!1},n.view=function(){var t=this.attrs.user;return m("div",{className:Object(Y.a)(["AvatarEditor","Dropdown",this.attrs.className,this.loading&&"loading",this.isDraggedOver&&"dragover"])},Object(b.a)(t),m("a",{className:t.avatarUrl()?"Dropdown-toggle":"Dropdown-toggle AvatarEditor--noAvatar",title:app.translator.trans("core.forum.user.avatar_upload_tooltip"),"data-toggle":"dropdown",onclick:this.quickUpload.bind(this),ondragover:this.enableDragover.bind(this),ondragenter:this.enableDragover.bind(this),ondragleave:this.disableDragover.bind(this),ondragend:this.disableDragover.bind(this),ondrop:this.dropUpload.bind(this)},this.loading?m(j.a,null):t.avatarUrl()?Object(w.a)("fas fa-pencil-alt"):Object(w.a)("fas fa-plus-circle")),m("ul",{className:"Dropdown-menu Menu"},Object(f.a)(this.controlItems().toArray())))},n.controlItems=function(){var t=new p.a;return t.add("upload",m(P.a,{icon:"fas fa-upload",onclick:this.openPicker.bind(this)},app.translator.trans("core.forum.user.avatar_upload_button"))),t.add("remove",m(P.a,{icon:"fas fa-times",onclick:this.remove.bind(this)},app.translator.trans("core.forum.user.avatar_remove_button"))),t},n.enableDragover=function(t){t.preventDefault(),t.stopPropagation(),this.isDraggedOver=!0},n.disableDragover=function(t){t.preventDefault(),t.stopPropagation(),this.isDraggedOver=!1},n.dropUpload=function(t){t.preventDefault(),t.stopPropagation(),this.isDraggedOver=!1,this.upload(t.dataTransfer.files[0])},n.quickUpload=function(t){this.attrs.user.avatarUrl()||(t.preventDefault(),t.stopPropagation(),this.openPicker())},n.openPicker=function(){var t=this;this.loading||$('<input type="file">').appendTo("body").hide().click().on("input",(function(e){t.upload($(e.target)[0].files[0])}))},n.upload=function(t){if(!this.loading){var e=this.attrs.user,n=new FormData;n.append("avatar",t),this.loading=!0,m.redraw(),app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/users/"+e.id()+"/avatar",serialize:function(t){return t},body:n}).then(this.success.bind(this),this.failure.bind(this))}},n.remove=function(){var t=this.attrs.user;this.loading=!0,m.redraw(),app.request({method:"DELETE",url:app.forum.attribute("apiUrl")+"/users/"+t.id()+"/avatar"}).then(this.success.bind(this),this.failure.bind(this))},n.success=function(t){app.store.pushPayload(t),delete this.attrs.user.avatarColor,this.loading=!1,m.redraw()},n.failure=function(t){this.loading=!1,m.redraw()},e}(h.a),ee=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){var t=this.attrs.user,e=Zt.controls(t,this).toArray(),n=t.color(),i=t.badges().toArray();return m("div",{className:"UserCard "+(this.attrs.className||""),style:n?{backgroundColor:n}:""},m("div",{className:"darkenBackground"},m("div",{className:"container"},e.length?C.a.component({className:"UserCard-controls App-primaryControl",menuClassName:"Dropdown-menu--right",buttonClassName:this.attrs.controlsButtonClassName,label:app.translator.trans("core.forum.user_controls.button"),icon:"fas fa-ellipsis-v"},e):"",m("div",{className:"UserCard-profile"},m("h2",{className:"UserCard-identity"},this.attrs.editable?[te.component({user:t,className:"UserCard-avatar"}),Object(ft.a)(t)]:m(g.a,{href:app.route.user(t)},m("div",{className:"UserCard-avatar"},Object(b.a)(t)),Object(ft.a)(t))),i.length?m("ul",{className:"UserCard-badges badges"},Object(f.a)(i)):"",m("ul",{className:"UserCard-info"},Object(f.a)(this.infoItems().toArray()))))))},n.infoItems=function(){var t=new p.a,e=this.attrs.user,n=e.lastSeenAt();if(n){var i=e.isOnline();t.add("lastSeen",m("span",{className:"UserCard-lastSeen"+(i?" online":"")},i?[Object(w.a)("fas fa-circle")," ",app.translator.trans("core.forum.user.online_text")]:[Object(w.a)("far fa-clock")," ",Object(x.a)(n)]))}return t.add("joined",app.translator.trans("core.forum.user.joined_date_text",{ago:Object(x.a)(e.joinTime())})),t},e}(h.a),ne=n(81),ie=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){var t=this.attrs.post,e=t.user();if(!e)return m("div",{className:"PostUser"},m("h3",null,Object(b.a)(e,{className:"PostUser-avatar"})," ",Object(ft.a)(e)));var n="";return!t.isHidden()&&this.attrs.cardVisible&&(n=ee.component({user:e,className:"UserCard--popover",controlsButtonClassName:"Button Button--icon Button--flat"})),m("div",{className:"PostUser"},m("h3",null,m(g.a,{href:app.route.user(e)},Object(b.a)(e,{className:"PostUser-avatar"}),Object(ne.a)(e),Object(ft.a)(e))),m("ul",{className:"PostUser-badges badges"},Object(f.a)(e.badges().toArray())),n)},n.oncreate=function(e){var n,i=this;t.prototype.oncreate.call(this,e),this.$().on("mouseover","h3 a, .UserCard",(function(){clearTimeout(n),n=setTimeout(i.showCard.bind(i),500)})).on("mouseout","h3 a, .UserCard",(function(){clearTimeout(n),n=setTimeout(i.hideCard.bind(i),250)}))},n.showCard=function(){var t=this;this.attrs.oncardshow(),setTimeout((function(){return t.$(".UserCard").addClass("in")}))},n.hideCard=function(){var t=this;this.$(".UserCard").removeClass("in").one("transitionend webkitTransitionEnd oTransitionEnd",(function(){t.attrs.oncardhide()}))},e}(h.a),re=n(82),oe=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.view=function(){var t=this.attrs.post,e=t.createdAt(),n=this.getPermalink(t),i="ontouchstart"in document.documentElement;return m("div",{className:"Dropdown PostMeta"},m("a",{className:"Dropdown-toggle",onclick:function(t){var e=this;setTimeout((function(){return $(e).parent().find(".PostMeta-permalink").select()})),t.redraw=!1},"data-toggle":"dropdown"},Object(O.a)(e)),m("div",{className:"Dropdown-menu dropdown-menu"},m("span",{className:"PostMeta-number"},app.translator.trans("core.forum.post.number_tooltip",{number:t.number()}))," ",m("span",{className:"PostMeta-time"},Object(re.a)(e))," ",m("span",{className:"PostMeta-ip"},t.data.attributes.ipAddress),i?m("a",{className:"Button PostMeta-permalink",href:n},n):m("input",{className:"FormControl PostMeta-permalink",value:n,onclick:function(t){return t.stopPropagation()}})))},n.getPermalink=function(t){return window.location.origin+app.route.post(t)},e}(h.a),se=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.shouldUpdateTooltip=!1,this.oldEditedInfo=null},n.view=function(){var t=this.attrs.post,e=t.editedUser(),n=Object(_.a)(app.translator.trans("core.forum.post.edited_tooltip",{user:e,ago:Object(x.a)(t.editedAt())}));return n!==this.oldEditedInfo&&(this.shouldUpdateTooltip=!0,this.oldEditedInfo=n),m("span",{className:"PostEdited",title:n},app.translator.trans("core.forum.post.edited_text"))},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.rebuildTooltip()},n.onupdate=function(){this.rebuildTooltip()},n.rebuildTooltip=function(){this.shouldUpdateTooltip&&(this.$().tooltip("destroy").tooltip(),this.shouldUpdateTooltip=!1)},e}(h.a),ae=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){var n=this;t.prototype.oninit.call(this,e),this.revealContent=!1,this.cardVisible=!1,this.subtree.check((function(){return n.cardVisible}),(function(){return n.isEditing()}),(function(){return n.revealContent}))},n.content=function(){return t.prototype.content.call(this).concat([m("header",{className:"Post-header"},m("ul",null,Object(f.a)(this.headerItems().toArray()))),m("div",{className:"Post-body"},this.isEditing()?m(mt,{className:"Post-preview",composer:app.composer}):m.trust(this.attrs.post.contentHtml()))])},n.refreshContent=function(){var t=this.isEditing()?"":this.attrs.post.contentHtml();this.contentHtml!==t&&this.$(".Post-body script").each((function(){var t=document.createElement("script");t.textContent=this.textContent,Array.from(this.attributes).forEach((function(e){return t.setAttribute(e.name,e.value)})),this.parentNode.replaceChild(t,this)})),this.contentHtml=t},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.refreshContent()},n.onupdate=function(e){t.prototype.onupdate.call(this,e),this.refreshContent()},n.isEditing=function(){return app.composer.bodyMatches(Wt,{post:this.attrs.post})},n.elementAttrs=function(){var e=this.attrs.post,n=t.prototype.elementAttrs.call(this);return n.className=(n.className||"")+" "+Object(Y.a)({CommentPost:!0,"Post--hidden":e.isHidden(),"Post--edited":e.isEdited(),revealContent:this.revealContent,editing:this.isEditing()}),n},n.toggleContent=function(){this.revealContent=!this.revealContent},n.headerItems=function(){var t=this,e=new p.a,n=this.attrs.post;return e.add("user",ie.component({post:n,cardVisible:this.cardVisible,oncardshow:function(){t.cardVisible=!0,m.redraw()},oncardhide:function(){t.cardVisible=!1,m.redraw()}}),100),e.add("meta",oe.component({post:n})),n.isEdited()&&!n.isHidden()&&e.add("edited",se.component({post:n})),n.isHidden()&&e.add("toggle",P.a.component({className:"Button Button--default Button--more",icon:"fas fa-ellipsis-h",onclick:this.toggleContent.bind(this)})),e},e}(Yt),ce=n(34),ue=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.elementAttrs=function(){var e=t.prototype.elementAttrs.call(this);return e.className=(e.className||"")+" EventPost "+Object(ce.ucfirst)(this.attrs.post.contentType())+"Post",e},n.content=function(){var e=this.attrs.post.user(),n=Object(ft.a)(e),i=Object(a.a)(this.descriptionData(),{user:e,username:e?m(g.a,{className:"EventPost-user",href:app.route.user(e)},n):n});return t.prototype.content.call(this).concat([Object(w.a)(this.icon(),{className:"EventPost-icon"}),m("div",{class:"EventPost-info"},this.description(i))])},n.icon=function(){return""},n.description=function(t){return app.translator.transChoice(this.descriptionKey(),t.count,t)},n.descriptionKey=function(){return""},n.descriptionData=function(){return{}},e}(Yt),le=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-pencil-alt"},n.description=function(t){var e=app.translator.trans("core.forum.post_stream.discussion_renamed_text",t),n=app.translator.trans("core.forum.post_stream.discussion_renamed_old_tooltip",t);return m("span",{title:Object(_.a)(n)},e)},n.descriptionData=function(){var t=this.attrs.post,e=t.content()[0],n=t.content()[1];return{old:e,new:m("strong",{className:"DiscussionRenamedPost-new"},n)}},e}(ue),de=(n(42),function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.hidden=localStorage.getItem("welcomeHidden")},n.view=function(){var t=this;if(this.hidden)return m("div",null);return m("header",{className:"Hero WelcomeHero"},m("div",{class:"container"},P.a.component({icon:"fas fa-times",onclick:function(){t.$().slideUp(t.hide.bind(t))},className:"Hero-close Button Button--icon Button--link"}),m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title"},app.forum.attribute("welcomeTitle")),m("div",{className:"Hero-subtitle"},m.trust(app.forum.attribute("welcomeMessage"))))))},n.hide=function(){localStorage.setItem("welcomeHidden","true"),this.hidden=!0},e}(h.a)),pe=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.placeholder=e.placeholder||Object(_.a)(app.translator.trans("core.forum.composer_discussion.body_placeholder")),e.submitLabel=e.submitLabel||app.translator.trans("core.forum.composer_discussion.submit_button"),e.confirmExit=e.confirmExit||Object(_.a)(app.translator.trans("core.forum.composer_discussion.discard_confirmation")),e.titlePlaceholder=e.titlePlaceholder||Object(_.a)(app.translator.trans("core.forum.composer_discussion.title_placeholder")),e.className="ComposerBody--discussion"};var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.composer.fields.title=this.composer.fields.title||Object(R.a)(""),this.title=this.composer.fields.title},n.headerItems=function(){var e=t.prototype.headerItems.call(this);return e.add("title",m("h3",null,app.translator.trans("core.forum.composer_discussion.title")),100),e.add("discussionTitle",m("h3",null,m("input",{className:"FormControl",bidi:this.title,placeholder:this.attrs.titlePlaceholder,disabled:!!this.attrs.disabled,onkeydown:this.onkeydown.bind(this)}))),e},n.onkeydown=function(t){13===t.which&&(t.preventDefault(),this.composer.editor.moveCursorTo(0)),t.redraw=!1},n.hasChanges=function(){return this.title()||this.composer.fields.content()},n.data=function(){return{title:this.title(),content:this.composer.fields.content()}},n.onsubmit=function(){var t=this;this.loading=!0;var e=this.data();app.store.createRecord("discussions").save(e).then((function(e){t.composer.hide(),app.discussions.refresh({deferClear:!0}),m.route.set(app.route.discussion(e))}),this.loaded.bind(this))},e}(D),he=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(n){t.prototype.oninit.call(this,n),app.previous.matches(Ot)&&(this.lastDiscussion=app.previous.get("discussion")),app.previous.matches(e)&&app.discussions.clear(),app.discussions.refreshParams(app.search.params()),app.history.push("index",app.translator.trans("core.forum.header.back_to_index_tooltip")),this.bodyClass="App--index",this.scrollTopOnCreate=!1},n.view=function(){return m("div",{className:"IndexPage"},this.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,Object(f.a)(this.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},m("div",{className:"IndexPage-toolbar"},m("ul",{className:"IndexPage-toolbar-view"},Object(f.a)(this.viewItems().toArray())),m("ul",{className:"IndexPage-toolbar-action"},Object(f.a)(this.actionItems().toArray()))),m(ut,{state:app.discussions})))))},n.setTitle=function(){app.setTitle(app.translator.trans("core.forum.index.meta_title_text")),app.setTitleCount(0)},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.setTitle();var n=app.cache.heroHeight,i=app.cache.heroHeight=this.$(".Hero").outerHeight()||0,r=app.cache.scrollTop;if($("#app").css("min-height",$(window).height()+i),null!=app.previous.type&&("desktop"==app.screen()||"desktop-hd"==app.screen()||this.lastDiscussion?$(window).scrollTop(r-n+i):$(window).scrollTop(0),this.lastDiscussion)){var o=this.$('li[data-id="'+this.lastDiscussion.id()+'"] .DiscussionListItem');if(o.length){var s=$("#header").outerHeight(),a=$(window).height(),c=o.offset().top,u=c+o.outerHeight();(c<r+s||u>r+a)&&$(window).scrollTop(c-s)}}},n.onbeforeremove=function(){app.cache.scrollTop=$(window).scrollTop()},n.onremove=function(){t.prototype.onremove.call(this),$("#app").css("min-height","")},n.hero=function(){return de.component()},n.sidebarItems=function(){var t=this,e=new p.a,n=app.forum.attribute("canStartDiscussion")||!app.session.user;return e.add("newDiscussion",P.a.component({icon:"fas fa-edit",className:"Button Button--primary IndexPage-newDiscussion",itemClassName:"App-primaryControl",onclick:function(){return t.newDiscussionAction().catch((function(){}))},disabled:!n},app.translator.trans(n?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button"))),e.add("nav",St.a.component({buttonClassName:"Button",className:"App-titleControl"},this.navItems(this).toArray())),e},n.navItems=function(){var t=new p.a,e=app.search.stickyParams();return t.add("allDiscussions",kt.a.component({href:app.route("index",e),icon:"far fa-comments"},app.translator.trans("core.forum.index.all_discussions_link")),100),t},n.viewItems=function(){var t=new p.a,e=app.discussions.sortMap(),n={};for(var i in e)n[i]=app.translator.trans("core.forum.index_sort."+i+"_button");return t.add("sort",C.a.component({buttonClassName:"Button",label:n[app.search.params().sort]||Object.keys(e).map((function(t){return n[t]}))[0]},Object.keys(n).map((function(t){var i=n[t],r=(app.search.params().sort||Object.keys(e)[0])===t;return P.a.component({icon:!r||"fas fa-check",onclick:app.search.changeSort.bind(app.search,t),active:r},i)})))),t},n.actionItems=function(){var t=new p.a;return t.add("refresh",P.a.component({title:app.translator.trans("core.forum.index.refresh_tooltip"),icon:"fas fa-sync",className:"Button Button--icon",onclick:function(){app.discussions.refresh(),app.session.user&&(app.store.find("users",app.session.user.id()),m.redraw())}})),app.session.user&&t.add("markAllAsRead",P.a.component({title:app.translator.trans("core.forum.index.mark_all_as_read_tooltip"),icon:"fas fa-check",className:"Button Button--icon",onclick:this.markAllAsRead.bind(this)})),t},n.newDiscussionAction=function(){return new Promise((function(t,e){return app.session.user?(app.composer.load(pe,{user:app.session.user}),app.composer.show(),t(app.composer)):(app.modal.show(F),e())}))},n.markAllAsRead=function(){confirm(app.translator.trans("core.forum.index.mark_all_as_read_confirmation"))&&app.session.user.save({markedAllAsReadAt:new Date})},e}(d.a);Object(s.a)(he,"providesInitialSearch",!0);var fe=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0,this.moreResults=!1,this.posts=[],this.loadLimit=20,this.loadUser(m.route.param("username"))},n.content=function(){return 0!==this.posts.length||this.loading?(this.loading?t=m(j.a,null):this.moreResults&&(t=m("div",{className:"PostsUserPage-loadMore"},m(P.a,{className:"Button",onclick:this.loadMore.bind(this)},app.translator.trans("core.forum.user.posts_load_more_button")))),m("div",{className:"PostsUserPage"},m("ul",{className:"PostsUserPage-list"},this.posts.map((function(t){return m("li",null,m("div",{className:"PostsUserPage-discussion"},app.translator.trans("core.forum.user.in_discussion_text",{discussion:m(g.a,{href:app.route.post(t)},t.discussion().title())})),m(ae,{post:t}))}))),m("div",{className:"PostsUserPage-loadMore"},t))):m("div",{className:"PostsUserPage"},m(ct.a,{text:app.translator.trans("core.forum.user.posts_empty_text")}));var t},n.show=function(e){t.prototype.show.call(this,e),this.refresh()},n.refresh=function(){this.loading=!0,this.posts=[],m.redraw(),this.loadResults().then(this.parseResults.bind(this))},n.loadResults=function(t){return app.store.find("posts",{filter:{user:this.user.id(),type:"comment"},page:{offset:t,limit:this.loadLimit},sort:"-createdAt"})},n.loadMore=function(){this.loading=!0,this.loadResults(this.posts.length).then(this.parseResults.bind(this))},n.parseResults=function(t){return this.loading=!1,[].push.apply(this.posts,t),this.moreResults=t.length>=this.loadLimit,m.redraw(),t},e}(Qt),me=function(){function t(t,e){void 0===t&&(t={}),void 0===e&&(e=window.app),this.params=t,this.app=e,this.discussions=[],this.moreResults=!1,this.loading=!1}var e=t.prototype;return e.requestParams=function(){var t={include:["user","lastPostedUser"],filter:{}};return t.sort=this.sortMap()[this.params.sort],this.params.q&&(t.filter.q=this.params.q,t.include.push("mostRelevantPost","mostRelevantPost.user")),t},e.sortMap=function(){var t={};return this.params.q&&(t.relevance=""),t.latest="-lastPostedAt",t.top="-commentCount",t.newest="-createdAt",t.oldest="createdAt",t},e.getParams=function(){return this.params},e.clear=function(){this.discussions=[],m.redraw()},e.refreshParams=function(t){var e=this;this.hasDiscussions()&&!Object.keys(t).some((function(n){return e.getParams()[n]!==t[n]}))||(this.params=t,this.refresh())},e.refresh=function(t){var e=this,n=(void 0===t?{}:t).deferClear,i=void 0!==n&&n;return this.loading=!0,i||this.clear(),this.loadResults().then((function(t){e.discussions=[],e.parseResults(t)}),(function(){e.loading=!1,m.redraw()}))},e.loadResults=function(t){var e=this.app.preloadedApiDocument();if(e)return Promise.resolve(e);var n=this.requestParams();return n.page={offset:t},n.include=n.include.join(","),this.app.store.find("discussions",n)},e.loadMore=function(){this.loading=!0,this.loadResults(this.discussions.length).then(this.parseResults.bind(this))},e.parseResults=function(t){var e;return(e=this.discussions).push.apply(e,t),this.loading=!1,this.moreResults=!!t.payload.links&&!!t.payload.links.next,m.redraw(),t},e.removeDiscussion=function(t){var e=this.discussions.indexOf(t);-1!==e&&this.discussions.splice(e,1),m.redraw()},e.addDiscussion=function(t){this.discussions.unshift(t),m.redraw()},e.hasDiscussions=function(){return this.discussions.length>0},e.isLoading=function(){return this.loading},e.isSearchResults=function(){return!!this.params.q},e.empty=function(){return!this.hasDiscussions()&&!this.isLoading()},t}(),ve=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.loadUser(m.route.param("username"))},n.show=function(e){t.prototype.show.call(this,e),this.state=new me({q:"author:"+e.username(),sort:"newest"}),this.state.refresh()},n.content=function(){return m("div",{className:"DiscussionsUserPage"},ut.component({state:this.state}))},e}(Qt),ge=n(33),be=n(29),ye=n(47),we=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.methods=this.notificationMethods().toArray(),this.loading={},this.types=this.notificationTypes().toArray()},n.view=function(){var t=this,e=this.attrs.user.preferences();return m("table",{className:"NotificationGrid"},m("thead",null,m("tr",null,m("td",null),this.methods.map((function(e){return m("th",{className:"NotificationGrid-groupToggle",onclick:t.toggleMethod.bind(t,e.name)},Object(w.a)(e.icon)," ",e.label)})))),m("tbody",null,this.types.map((function(n){return m("tr",null,m("td",{className:"NotificationGrid-groupToggle",onclick:t.toggleType.bind(t,n.name)},Object(w.a)(n.icon)," ",n.label),t.methods.map((function(i){var r=t.preferenceKey(n.name,i.name);return m("td",{className:"NotificationGrid-checkbox"},m(ye.a,{state:!!e[r],loading:t.loading[r],disabled:!(r in e),onchange:t.toggle.bind(t,[r])}))})))}))))},n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.$("thead .NotificationGrid-groupToggle").bind("mouseenter mouseleave",(function(t){var e=parseInt($(this).index(),10)+1;$(this).parents("table").find("td:nth-child("+e+")").toggleClass("highlighted","mouseenter"===t.type)})),this.$("tbody .NotificationGrid-groupToggle").bind("mouseenter mouseleave",(function(t){$(this).parent().find("td").toggleClass("highlighted","mouseenter"===t.type)}))},n.toggle=function(t){var e=this,n=this.attrs.user,i=n.preferences(),r=!i[t[0]];t.forEach((function(t){e.loading[t]=!0,i[t]=r})),m.redraw(),n.save({preferences:i}).then((function(){t.forEach((function(t){return e.loading[t]=!1})),m.redraw()}))},n.toggleMethod=function(t){var e=this,n=this.types.map((function(n){return e.preferenceKey(n.name,t)})).filter((function(t){return t in e.attrs.user.preferences()}));this.toggle(n)},n.toggleType=function(t){var e=this,n=this.methods.map((function(n){return e.preferenceKey(t,n.name)})).filter((function(t){return t in e.attrs.user.preferences()}));this.toggle(n)},n.preferenceKey=function(t,e){return"notify_"+t+"_"+e},n.notificationMethods=function(){var t=new p.a;return t.add("alert",{name:"alert",icon:"fas fa-bell",label:app.translator.trans("core.forum.settings.notify_by_web_heading")}),t.add("email",{name:"email",icon:"far fa-envelope",label:app.translator.trans("core.forum.settings.notify_by_email_heading")}),t},n.notificationTypes=function(){var t=new p.a;return t.add("discussionRenamed",{name:"discussionRenamed",icon:"fas fa-pencil-alt",label:app.translator.trans("core.forum.settings.notify_discussion_renamed_label")}),t},e}(h.a),xe=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.className=function(){return"ChangePasswordModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.change_password.title")},n.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("core.forum.change_password.text")),m("div",{className:"Form-group"},P.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("core.forum.change_password.send_button")))))},n.onsubmit=function(t){t.preventDefault(),this.loading=!0,app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/forgot",body:{email:app.session.user.email()}}).then(this.hide.bind(this),this.loaded.bind(this))},e}(L.a),Ne=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.success=!1,this.email=Object(R.a)(app.session.user.email()),this.password=Object(R.a)("")},n.className=function(){return"ChangeEmailModal Modal--small"},n.title=function(){return app.translator.trans("core.forum.change_email.title")},n.content=function(){return this.success?m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("core.forum.change_email.confirmation_message",{email:m("strong",null,this.email())})),m("div",{className:"Form-group"},m(P.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},app.translator.trans("core.forum.change_email.dismiss_button"))))):m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("input",{type:"email",name:"email",className:"FormControl",placeholder:app.session.user.email(),bidi:this.email,disabled:this.loading})),m("div",{className:"Form-group"},m("input",{type:"password",name:"password",className:"FormControl",placeholder:app.translator.trans("core.forum.change_email.confirm_password_placeholder"),bidi:this.password,disabled:this.loading})),m("div",{className:"Form-group"},P.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("core.forum.change_email.submit_button")))))},n.onsubmit=function(t){var e=this;if(t.preventDefault(),this.email()!==app.session.user.email()){app.session.user.email();this.loading=!0,app.session.user.save({email:this.email()},{errorHandler:this.onerror.bind(this),meta:{password:this.password()}}).then((function(){e.success=!0,e.alertAttrs=null})).catch((function(){})).then(this.loaded.bind(this))}else this.hide()},n.onerror=function(e){401===e.status&&(e.alert.content=app.translator.trans("core.forum.change_email.incorrect_password_message")),t.prototype.onerror.call(this,e)},e}(L.a),Ce=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.show(app.session.user),app.setTitle(app.translator.trans("core.forum.settings.title"))},n.content=function(){return m("div",{className:"SettingsPage"},m("ul",null,Object(f.a)(this.settingsItems().toArray())))},n.settingsItems=function(){var t=this,e=new p.a;return["account","notifications","privacy"].forEach((function(n){e.add(n,m(be.a,{className:"Settings-"+n,label:app.translator.trans("core.forum.settings."+n+"_heading")},t[n+"Items"]().toArray()))})),e},n.accountItems=function(){var t=new p.a;return t.add("changePassword",m(P.a,{className:"Button",onclick:function(){return app.modal.show(xe)}},app.translator.trans("core.forum.settings.change_password_button"))),t.add("changeEmail",m(P.a,{className:"Button",onclick:function(){return app.modal.show(Ne)}},app.translator.trans("core.forum.settings.change_email_button"))),t},n.notificationsItems=function(){var t=new p.a;return t.add("notificationGrid",m(we,{user:this.user})),t},n.privacyItems=function(){var t=this,e=new p.a;return e.add("discloseOnline",m(ge.a,{state:this.user.preferences().discloseOnline,onchange:function(e){t.discloseOnlineLoading=!0,t.user.savePreferences({discloseOnline:e}).then((function(){t.discloseOnlineLoading=!1,m.redraw()}))},loading:this.discloseOnlineLoading},app.translator.trans("core.forum.settings.privacy_disclose_online_label"))),e},e}(Qt),Oe=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),app.history.push("notifications"),app.notifications.load(),this.bodyClass="App--notifications"},n.view=function(){return m("div",{className:"NotificationsPage"},m(Pt,{state:app.notifications}))},e}(d.a),Te=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.canonicalizeDiscussionSlug=function(t){if(t)return t.split("-")[0]},n.makeKey=function(){var t=Object(a.a)({},m.route.param());return"near"in t&&delete t.near,t.id=this.canonicalizeDiscussionSlug(t.id),this.routeName.replace(".near","")+JSON.stringify(t)},n.onmatch=function(n,i,r){return app.current.matches(Ot)&&this.canonicalizeDiscussionSlug(n.id)===this.canonicalizeDiscussionSlug(m.route.param("id"))&&(e.scrollToPostNumber=n.near||"1"),t.prototype.onmatch.call(this,n,i,r)},n.render=function(n){if(null!==e.scrollToPostNumber){var i=e.scrollToPostNumber;setTimeout((function(){return app.current.get("stream").goToNumber(i)})),e.scrollToPostNumber=null}return t.prototype.render.call(this,n)},e}(n(41).a);Object(s.a)(Te,"scrollToPostNumber",null);var ke=function(t){t.routes={index:{path:"/all",component:he},discussion:{path:"/d/:id",component:Ot,resolverClass:Te},"discussion.near":{path:"/d/:id/:near",component:Ot,resolverClass:Te},user:{path:"/u/:username",component:fe},"user.posts":{path:"/u/:username",component:fe},"user.discussions":{path:"/u/:username/discussions",component:ve},settings:{path:"/settings",component:Ce},notifications:{path:"/notifications",component:Oe}},t.route.discussion=function(e,n){return t.route(n&&1!==n?"discussion.near":"discussion",{id:e.slug(),near:n&&1!==n?n:void 0})},t.route.post=function(e){return t.route.discussion(e.discussion(),e.number())},t.route.user=function(e){return t.route("user",{username:e.slug()})}},je=n(24);function Se(t){var e=t.session.user;if(e&&!e.isEmailConfirmed()){var n=function(n){function i(){return n.apply(this,arguments)||this}Object(o.a)(i,n);var r=i.prototype;return r.oninit=function(t){n.prototype.oninit.call(this,t),this.loading=!1,this.sent=!1},r.view=function(){return m(P.a,{class:"Button Button--link",onclick:this.onclick.bind(this),loading:this.loading,disabled:this.sent},this.sent?[Object(w.a)("fas fa-check")," ",t.translator.trans("core.forum.user_email_confirmation.sent_message")]:t.translator.trans("core.forum.user_email_confirmation.resend_button"))},r.onclick=function(){var n=this;this.loading=!0,m.redraw(),t.request({method:"POST",url:t.forum.attribute("apiUrl")+"/users/"+e.id()+"/send-confirmation"}).then((function(){n.loading=!1,n.sent=!0,m.redraw()})).catch((function(){n.loading=!1,m.redraw()}))},i}(h.a),i=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.view=function(e){var n=t.prototype.view.call(this,e);return Object(a.a)({},n,{children:[m("div",{className:"container"},n.children)]})},e}(je.a);m.mount($("<div/>").insertBefore("#content")[0],{view:function(){return m(i,{dismissible:!1,controls:[m(n,null)]},t.translator.trans("core.forum.user_email_confirmation.alert_message",{email:m("strong",null,e.email())}))}})}}var Ae=n(70),Pe=n(50),Ee=function(){function t(t){this.app=t,this.notificationPages=[],this.loading=!1,this.moreResults=!1}var e=t.prototype;return e.clear=function(){this.notificationPages=[]},e.getNotificationPages=function(){return this.notificationPages},e.isLoading=function(){return this.loading},e.hasMoreResults=function(){return this.moreResults},e.load=function(){this.app.session.user.newNotificationCount()&&(this.notificationPages=[]),this.notificationPages.length>0||(this.app.session.user.pushAttributes({newNotificationCount:0}),this.loadMore())},e.loadMore=function(){var t=this;this.loading=!0,m.redraw();var e=this.notificationPages.length>0?{page:{offset:10*this.notificationPages.length}}:null;return this.app.store.find("notifications",e).then(this.parseResults.bind(this)).catch((function(){})).then((function(){t.loading=!1,m.redraw()}))},e.parseResults=function(t){return t.length&&this.notificationPages.push(t),this.moreResults=!!t.payload.links.next,t},e.markAllAsRead=function(){0!==this.notificationPages.length&&(this.app.session.user.pushAttributes({unreadNotificationCount:0}),this.notificationPages.forEach((function(t){t.forEach((function(t){return t.pushAttributes({isRead:!0})}))})),this.app.request({url:this.app.forum.attribute("apiUrl")+"/notifications/read",method:"POST"}))},t}(),De=function(){function t(t){void 0===t&&(t=[]),this.cachedSearches=t}var e=t.prototype;return e.getValue=function(){return this.value},e.setValue=function(t){this.value=t},e.clear=function(){this.setValue("")},e.cache=function(t){this.cachedSearches.push(t)},e.isCached=function(t){return-1!==this.cachedSearches.indexOf(t)},t}(),$e=function(t){function e(e){return void 0===e&&(e=[]),t.call(this,e)||this}Object(o.a)(e,t);var n=e.prototype;return n.getValue=function(){return void 0===this.value&&(this.value=this.getInitialSearch()||""),t.prototype.getValue.call(this)},n.clear=function(){t.prototype.clear.call(this),this.getInitialSearch()?this.clearInitialSearch():m.redraw()},n.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},n.params=function(){var t=this.stickyParams();return t.filter=m.route.param("filter"),t},n.changeSort=function(t){var e=this.params();t===Object.keys(app.discussions.sortMap())[0]?delete e.sort:e.sort=t,Object(c.a)(app.route(app.current.get("routeName"),e))},n.getInitialSearch=function(){return app.current.type&&app.current.type.providesInitialSearch&&this.params().q},n.clearInitialSearch=function(){var t=this.params();delete t.q,Object(c.a)(app.route(app.current.get("routeName"),t))},e}(De),_e=function(t){function e(){var e;return e=t.call(this)||this,Object(s.a)(Object(r.a)(e),"notificationComponents",{discussionRenamed:qt}),Object(s.a)(Object(r.a)(e),"postComponents",{comment:ae,discussionRenamed:le}),Object(s.a)(Object(r.a)(e),"pane",null),Object(s.a)(Object(r.a)(e),"drawer",null),Object(s.a)(Object(r.a)(e),"history",new u),Object(s.a)(Object(r.a)(e),"notifications",new Ee(Object(r.a)(e))),Object(s.a)(Object(r.a)(e),"search",new $e),Object(s.a)(Object(r.a)(e),"composer",new Ht),ke(Object(r.a)(e)),e.discussions=new me({},Object(r.a)(e)),e}Object(o.a)(e,t);var n=e.prototype;return n.mount=function(){var e=this,n=this.forum.attribute("defaultRoute"),i="index";for(var r in this.routes)this.routes[r].path===n&&(i=r);this.routes[i].path="/",this.history.push(i,this.translator.trans("core.forum.header.back_to_index_tooltip"),"/"),this.pane=new l(document.getElementById("app")),m.route.prefix="",t.prototype.mount.call(this,this.forum.attribute("basePath")),m.mount(document.getElementById("app-navigation"),{view:function(){return Pe.a.component({className:"App-backControl",drawer:!0})}}),m.mount(document.getElementById("header-navigation"),Pe.a),m.mount(document.getElementById("header-primary"),Tt),m.mount(document.getElementById("header-secondary"),Mt),m.mount(document.getElementById("composer"),{view:function(){return Ut.component({state:e.composer})}}),Se(this),$("#home-link").click((function(t){t.ctrlKey||t.metaKey||2===t.which||(t.preventDefault(),app.history.home(),app.session.user&&(app.store.find("users",app.session.user.id()),m.redraw()))}))},n.viewingDiscussion=function(t){return this.current.matches(Ot,{discussion:t})},n.authenticationComplete=function(t){t.loggedIn?window.location.reload():this.modal.show(U,t)},e}(Ae.a),Ie=n(99),Me=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.initAttrs=function(e){e.className=(e.className||"")+" LogInButton",e.onclick=function(){var t=$(window);window.open(app.forum.attribute("baseUrl")+e.path,"logInPopup","width=580,height=400,top="+(t.height()/2-200)+",left="+(t.width()/2-290)+",status=no,scrollbars=yes,resizable=no")},t.initAttrs.call(this,e)},e}(P.a),Le=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.className=e.className||"Button Button--icon Button--link"},e.prototype.oncreate=function(e){t.prototype.oncreate.call(this,e),this.$().tooltip()},e}(P.a),Re=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.view=function(){var t=this.attrs.post,e=t.user(),n=Object(y.a)(t.contentPlain(),this.attrs.highlight,300);return m(g.a,{className:"PostPreview",href:app.route.post(t),onclick:this.attrs.onclick},m("span",{className:"PostPreview-content"},Object(b.a)(e),Object(ft.a)(e)," ",m("span",{className:"PostPreview-excerpt"},n)))},e}(h.a),Be=function(){function t(){}var e=t.prototype;return e.search=function(){},e.view=function(){},t}(),He=Object(a.a)(Ie.a,{"utils/PostControls":Vt,"utils/KeyboardNavigatable":Dt,"utils/slidable":V,"utils/History":u,"utils/DiscussionControls":W,"utils/alertEmailConfirmation":Se,"utils/UserControls":Zt,"utils/Pane":l,"states/ComposerState":Ht,"states/DiscussionListState":me,"states/GlobalSearchState":$e,"states/NotificationListState":Ee,"states/PostStreamState":Ct,"states/SearchState":De,"components/AffixedSidebar":Jt,"components/DiscussionPage":Ot,"components/LogInModal":F,"components/ComposerBody":D,"components/ForgotPasswordModal":B,"components/Notification":Ft,"components/LogInButton":Me,"components/DiscussionsUserPage":ve,"components/Composer":Ut,"components/SessionDropdown":jt,"components/HeaderPrimary":Tt,"components/PostEdited":se,"components/PostStream":gt,"components/ChangePasswordModal":xe,"components/IndexPage":he,"components/DiscussionRenamedNotification":qt,"components/DiscussionsSearchSource":$t,"components/HeaderSecondary":Mt,"components/ComposerButton":Lt,"components/DiscussionList":ut,"components/ReplyPlaceholder":vt,"components/TextEditor":E,"components/TextEditorButton":Le,"components/AvatarEditor":te,"components/Post":Yt,"components/SettingsPage":Ce,"components/TerminalPost":T,"components/ChangeEmailModal":Ne,"components/NotificationsDropdown":Et,"components/UserPage":Qt,"components/PostUser":ie,"components/UserCard":ee,"components/UsersSearchSource":_t,"components/NotificationGrid":we,"components/PostPreview":Re,"components/EventPost":ue,"components/DiscussionHero":v,"components/PostMeta":oe,"components/EditUserModal":Xt,"components/SearchSource":Be,"components/DiscussionRenamedPost":le,"components/DiscussionComposer":pe,"components/LogInButtons":H,"components/NotificationList":Pt,"components/WelcomeHero":de,"components/SignUpModal":U,"components/CommentPost":ae,"components/ComposerPostPreview":mt,"components/ReplyComposer":M,"components/NotificationsPage":Oe,"components/PostStreamScrubber":yt,"components/EditPostComposer":Wt,"components/RenameDiscussionModal":z,"components/Search":It,"components/DiscussionListItem":at,"components/LoadingPost":ht,"components/PostsUserPage":fe,"resolvers/DiscussionPageResolver":Te,routes:ke,ForumApplication:_e}),Ue=n(69),Fe=new _e;window.app=Fe,He.app=Fe;var qe=Object(Ue.a)(He,"forum")}]);


(function(){var HINT={};HINT.LITEDOWN_DECODE_HTML_ENTITIES=0;HINT.PREG_HAS_PASSTHROUGH=!1;HINT.RULE_AUTO_CLOSE=1;HINT.RULE_AUTO_REOPEN=1;HINT.RULE_BREAK_PARAGRAPH=1;HINT.RULE_CREATE_PARAGRAPHS=1;HINT.RULE_DISABLE_AUTO_BR=1;HINT.RULE_ENABLE_AUTO_BR=1;HINT.RULE_IGNORE_TAGS=1;HINT.RULE_IGNORE_TEXT=1;HINT.RULE_IGNORE_WHITESPACE=1;HINT.RULE_IS_TRANSPARENT=1;HINT.RULE_PREVENT_BR=1;HINT.RULE_SUSPEND_AUTO_BR=1;HINT.RULE_TRIM_FIRST_LINE=1;HINT.attributeDefaultValue=1;HINT.closeAncestor=0;HINT.closeParent=1;HINT.createChild=1;HINT.fosterParent=1;HINT.hash=1;HINT.ignoreAttrs=1;HINT.namespaces=0;HINT.onRender=1;HINT.onUpdate=1;HINT.regexp=1;HINT.regexpLimit=1;HINT.requireAncestor=0;var oB4E9AE58=[""];var o82015558=[0,0];var o90B2B224=["","t"];var oB565876D={flags:2};var o8706E0A9=[261,769];var oA9ACF916=[257,771];var o85888FAE=["","id"];var o3A598861=["","vid"];var o939F1698={flags:514};var oD276C2BF=["","type"];var o44720161=[31065,7939];var o06856E8A=["","width"];var oCB183773=[65295,7939];var oA80287CC={flags:3089};var oD3E674AB=[65503,7939];var o42DE1101=[65281,7954];var oF3C0ADD0=["","height"];var o9338E0AD=/embed\/(\d+)/;var o5F5D8CFC=["","track_id"];var oA60012B9=["","album_id"];var oC59CF925=["","video_id"];var o0E3C680A=[[/(?:)/,oB4E9AE58]];var oF5EDDAF6=["","id","type"];var oEDE19F33=["","user","id"];var o28C25529=["","fid","eid"];var o37C2EA3B=["","episode_id"];var oB0695997=["","playlist_id"];var o1BD7B50C=["","oid","vid","hash"];var o6ACB7DBF=["","channel","clip_id"];var o86C6DC19=["","athlete","highlight"];var o02D8DBB5={filterChain:[],required:!0};var o1BC3EAF4={filterChain:[],required:!1};var oD0874E6E=["","account_id","event_id"];var o251A6FB9={"id":o1BC3EAF4};var oD4A66010=[[/globalnews\.ca\/video\/(\d+)/,o85888FAE]];var oF7034233=[/hudl\.com\/video\/(\w+)(?![\w\/])/,o85888FAE];var oBF39CE41=[/flickr\.com\/photos\/[^\/]+\/(\d+)/,o85888FAE];var oFF5E442E=[[/([-\w]+)\.castos\.com\/player\/(\d+)/,["","host","id"]]];var o3C5A4C51=[[/247sports\.com\/PlayerSport\/[-\w]*(\d+)\/Embed/,["","player_id"]]];var o3773CEC3=[/hudl\.com\/video\/\d+\/(\d+)\/([\da-f]+)/,o86C6DC19];var oD4869BFF={"B":1,"C":1,"COLOR":1,"EM":1,"EMAIL":1,"I":1,"S":1,"SIZE":1,"STRONG":1,"U":1,"URL":1};var oF3C6FA42={closeParent:oD4869BFF,flags:3349};var oD03A52D8=[[/(?:open|play)\.spotify\.com\/(?:user\/[-.\w]+\/)?((?:album|artist|episode|playlist|show|track)(?:[:\/][-.\w]+)+)/,o85888FAE]];var oDF43256F=[function(attrValue,attrName){return NumericFilter.filterUint(attrValue)}];var o118B31AC=function(tag,tagConfig){return filterAttributes(tag,tagConfig,registeredVars,logger)};var o1B4F5B52=[o118B31AC];var o56E79363=[function(attrValue,attrName){return RegexpFilter.filter(attrValue,/^[-0-9A-Za-z_]+$/)}];var o6377B813=function(attrValue,attrName){return RegexpFilter.filter(attrValue,/^[- +,.0-9A-Za-z_]+$/)};var o0967AFCF={filterChain:[function(attrValue,attrName){return TimestampFilter.filter(attrValue)}],required:!1};var o6CB0A318={filterChain:oDF43256F,required:!0};var o75AB9259={filterChain:oDF43256F,required:!1};var oE2346708={filterChain:o56E79363,required:!0};var oFB2F5649={filterChain:o56E79363,required:!1};var o28FFC5A0={defaultValue:640,filterChain:oDF43256F,required:!1};var o9244B582={defaultValue:360,filterChain:oDF43256F,required:!1};var oABCFC4A3={filterChain:[o6377B813],required:!0};var oF307D35C={filterChain:[function(attrValue,attrName){return UrlFilter.filter(attrValue,registeredVars.urlConfig,logger)}],required:!0};var o1AF69066={closeParent:oD4869BFF,flags:268,fosterParent:oD4869BFF};var o2ACFCB30={closeParent:{"B":1,"C":1,"COLOR":1,"EM":1,"EMAIL":1,"I":1,"S":1,"SIZE":1,"STRONG":1,"TD":1,"TH":1,"U":1,"URL":1},flags:256,fosterParent:oD4869BFF};var oF5133072={allowed:oCB183773,attributes:{},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oB565876D,tagLimit:5000};var o212FA0B5={allowed:oCB183773,attributes:{},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:{flags:0},tagLimit:5000};var o1C8AA61D={allowed:o8706E0A9,attributes:o251A6FB9,bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000};var oCCD33097={allowed:oA9ACF916,attributes:{"char":o02D8DBB5},bitNumber:8,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000};var o285DC803={allowed:o8706E0A9,attributes:{"id":o1BC3EAF4,"user":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000};var oB55F46D1={"align":{filterChain:[function(attrValue,attrName){return(function(str){return str.toLowerCase()})(attrValue)},function(attrValue,attrName){return RegexpFilter.filter(attrValue,/^(?:center|justify|left|right)$/)}],required:!1}};var oBF8B7AD8={allowed:oCB183773,attributes:{},bitNumber:6,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:oD4869BFF,flags:260,fosterParent:oD4869BFF},tagLimit:5000};var o57881CFF={allowed:o8706E0A9,attributes:{"height":o9244B582,"id":o1BC3EAF4,"width":o28FFC5A0},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000};var xsl=("<xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http:\/\/www.w3.org\/1999\/XSL\/Transform\"><xsl:output method=\"html\" encoding=\"utf-8\" indent=\"no\"\/><xsl:decimal-format decimal-separator=\".\"\/><xsl:param$uAMAZON_ASSOCIATE_TAG\"\/><xsl:param$uAMAZON_ASSOCIATE_TAG_CA\"\/><xsl:param$uAMAZON_ASSOCIATE_TAG_DE\"\/><xsl:param$uAMAZON_ASSOCIATE_TAG_ES\"\/><xsl:param$uAMAZON_ASSOCIATE_TAG_FR\"\/><xsl:param$uAMAZON_ASSOCIATE_TAG_IN\"\/><xsl:param$uAMAZON_ASSOCIATE_TAG_IT\"\/><xsl:param$uAMAZON_ASSOCIATE_TAG_JP\"\/><xsl:param$uAMAZON_ASSOCIATE_TAG_UK\"\/><xsl:param$uDISCUSSION_URL\">http:\/\/localhost:8015\/d\/<\/xsl:param><xsl:param$uMEDIAEMBED_THEME\"\/><xsl:param$uPROFILE_URL\">http:\/\/localhost:8015\/u\/<\/xsl:param><xsl:param$uTASKLISTS_EDITABLE\"\/>$dABCNEWS\"><$r$eabcnews\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/abcnews.go.com\/video\/embed?id={@id}\"$i$b\/><\/$r><\/$r>$g$dAMAZON\"><$r$eamazon\"$i$c120px\"><$r$i$a200%\"><$n$f\"$l$q$kno\"$ibackground:url(https:\/\/www.amazon.com\/favicon.ico) center no-repeat;$b><$m$usrc\">\/\/ws-<$x><$w$s@tld='jp'\">fe<\/$w><$w$s@tld and contains('desfrinituk',@tld)\">eu<\/$w><$t>na<\/$t><\/$x>.assoc-amazon.com\/widgets\/cm?l=as1&amp;f=ifr&amp;o=<$x><$w$s@tld='ca'\">15&amp;t=$h$AMAZON_ASSOCIATE_TAG_CA\"\/><\/$w><$w$s@tld='de'\">3&amp;t=$h$AMAZON_ASSOCIATE_TAG_DE\"\/><\/$w><$w$s@tld='es'\">30&amp;t=$h$AMAZON_ASSOCIATE_TAG_ES\"\/><\/$w><$w$s@tld='fr'\">8&amp;t=$h$AMAZON_ASSOCIATE_TAG_FR\"\/><\/$w><$w$s@tld='in'\">31&amp;t=$h$AMAZON_ASSOCIATE_TAG_IN\"\/><\/$w><$w$s@tld='it'\">29&amp;t=$h$AMAZON_ASSOCIATE_TAG_IT\"\/><\/$w><$w$s@tld='jp'\">9&amp;t=$h$AMAZON_ASSOCIATE_TAG_JP\"\/><\/$w><$w$s@tld='uk'\">2&amp;t=$h$AMAZON_ASSOCIATE_TAG_UK\"\/><\/$w><$t>1&amp;t=$h$AMAZON_ASSOCIATE_TAG\"\/><\/$t><\/$x>&amp;asins=$h@id\"\/><\/$m><\/$n><\/$r><\/$r>$g$dANCHOR\"><$n$eanchor\"$f\"$l$q$kno\"$p\/\/anchor.fm\/embed\/episodes\/x-{@id}\"$iborder:0;height:102px;max-width:700px;width:100%\"\/>$g$dAUDIOBOOM\"><$n$eaudioboom\"$f\"$l$q$kno\"$p\/\/audioboom.com\/posts\/{@id}\/embed\/v3\"$iborder:0;height:150px;max-width:700px;width:100%\"\/>$g$dAUDIOMACK\"><$n$eaudiomack\"$f\"$l$q$kno\"><$x><$w$s@mode="+"'album'\"><$m$usrc\">https:\/\/www.audiomack.com\/embed\/album\/<$x><$w$s@id\">$h@id\"\/><\/$w><$t>$h@artist\"\/>\/$h@title\"\/><\/$t><\/$x><\/$m><$m$u$z>border:0;height:400px;max-width:900px;width:100%<\/$m><\/$w><$t><$m$usrc\">https:\/\/www.audiomack.com\/embed\/song\/<$x><$w$s@id\">$h@id\"\/><\/$w><$t>$h@artist\"\/>\/$h@title\"\/><\/$t><\/$x><\/$m><$m$u$z>border:0;height:252px;max-width:900px;width:100%<\/$m><\/$t><\/$x><\/$n>$g$dB|DEL|EM|H1|H2|H3|H4|H5|H6|I|S|STRONG|SUB|SUP|TABLE|TBODY|THEAD|TR|U|p\"><xsl:element$u{translate(name(),'ABDEGHILMNOPRSTUY','abdeghilmnoprstuy')}\">$v<\/xsl:element>$g$dBANDCAMP\"><$r$ebandcamp\"$i$c400px\"><$r$i$a100%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">\/\/bandcamp.com\/EmbeddedPlayer\/size=large\/minimal=true\/<$x><$w$s@album_id\">album=$h@album_id\"\/><xsl:if$s@track_num\">\/t=$h@track_num\"\/><\/xsl:if><\/$w><$t>track=$h@track_id\"\/><\/$t><\/$x><xsl:if$s$MEDIAEMBED_THEME='dark'\">\/bgcol=333333\/linkcol=0f91ff<\/xsl:if><\/$m><\/$n><\/$r><\/$r>$g$dBBCNEWS\"><$r$ebbcnews\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">\/\/www.bbc.com\/news\/av\/video-<$x><$w$sstarts-with(@playlist,'\/news\/')\">$hsubstring-after(@playlist,'\/news\/')\"\/><\/$w><$w$scontains(@id,'\/')\">$hsubstring-after(@id,'\/')\"\/><\/$w><$t>$h@id\"\/><\/$t><\/$x>\/embed<\/$m><\/$n><\/$r><\/$r>$g$dBITCHUTE\"><$r$ebitchute\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/www.bitchute.com\/embed\/{@id}\/\"$i$b\/><\/$r><\/$r>$g$dBLEACHERREPORT\"><$r$ebleacherreport\"$i$c320px\"><$r$i$a100%\"><$n$f\"$l$q$kno\"$p\/\/bleacherreport.com\/video_embed?id={@id}&amp;library=video-cms\"$i$b\/><\/$r><\/$r>$g$dBREAK\"><$r$ebreak\"$i$c464px\"><$r$i$a60.344828%\"><$n$f\"$l$q$kno\"$p\/\/break.com\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dBRIGHTCOVE\"><$r$ebrightcove\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">https:\/\/<$x><$w$s@bckey\">link.brightcove.com\/services\/player\/bcpid$h@bcpid\"\/>?bckey=$h@bckey\"\/>&amp;bctid=$h@bctid\"\/>&amp;secureConnections=true&amp;secureHTMLConnections=true&amp;autoStart=false&amp;height=360&amp;width=640<\/$w><$t>players.brightcove.net\/$h@bcpid\"\/>\/default_default\/index.html?videoId"+"=$h@bctid\"\/><\/$t><\/$x><\/$m><\/$n><\/$r><\/$r>$g$dC\"><code>$v<\/code>$g$dCASTOS\"><$n$ecastos\"$f\"$l$q$kno\"$phttps:\/\/player.castos.com\/player\/{@id}\"$iborder:0;height:150px;max-width:900px;width:100%\"\/>$g$dCBSNEWS\"><$r$ecbsnews\"$i$c640px\"><$r><$x><$w$scontains(@id,'-')\"><$m$u$z>$a56.25%<\/$m><$n$f\"$l$q$kno\"$phttps:\/\/www.cbsnews.com\/embed\/videos\/{@id}\/\"$i$b\/><\/$w><$w$s@pid\"><$m$u$z>$a62.1875%;padding-bottom:calc(56.25% + 38px)<\/$m><object data=\"\/\/www.cbsnews.com\/common\/video\/cbsnews_player.swf\"$i$y type=\"application\/x-shockwave-flash\" typemustmatch=\"\"><param$uallowfullscreen\" value=\"true\"\/><param$uflashvars\" value=\"pType=embed&amp;si=254&amp;pid={@pid}\"\/><\/object><\/$w><$t><$m$u$z>$a62.5%;padding-bottom:calc(56.25% + 40px)<\/$m><object data=\"\/\/i.i.cbsi.com\/cnwk.1d\/av\/video\/cbsnews\/atlantis2\/cbsnews_player_embed.swf\"$i$y type=\"application\/x-shockwave-flash\" typemustmatch=\"\"><param$uallowfullscreen\" value=\"true\"\/><param$uflashvars\" value=\"si=254&amp;contentValue={@id}\"\/><\/object><\/$t><\/$x><\/$r><\/$r>$g$dCENTER\"><div$itext-align:center\">$v<\/div>$g$dCLYP\"><$n$eclyp\"$f\"$l$q$kno\"$phttps:\/\/clyp.it\/{@id}\/widget\"$iborder:0;height:265px;max-width:900px;width:100%\"\/>$g$dCNBC\"><$r$ecnbc\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/player.cnbc.com\/p\/gZWlPC\/cnbc_global?playertype=synd&amp;byGuid={@id}&amp;size=640_360\"$i$b\/><\/$r><\/$r>$g$dCNN\"><$r$ecnn\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/fave.api.cnn.io\/v1\/fav\/?video={@id}&amp;customer=cnn&amp;edition=international&amp;env=prod\"$i$b\/><\/$r><\/$r>$g$dCNNMONEY\"><$r$ecnnmoney\"$i$c560px\"><$r$i$a64.285714%\"><$n$f\"$l$q$kno\"$p\/\/money.cnn.com\/.element\/ssi\/video\/7.0\/players\/embed.player.html?videoid=video\/{@id}&amp;width=560&amp;height=360\"$i$b\/><\/$r><\/$r>$g$dCODE\"><pre data-s9e-livepreview-hash=\"\" data-s9e-livepreview-onupdate=\"if(typeof hljsLoader!=='undefined')hljsLoader.highlightBlocks(this)\"><code><xsl:if$s@lang\"><$m$uclass\">language-$h@lang\"\/><\/$m><\/xsl:if>$v<\/code><script async=\"\" crossorigin=\"anonymous\" data-hljs-style=\"github-gist"+"\" data-s9e-livepreview-onrender=\"if(typeof hljsLoader!=='undefined')this.parentNode.removeChild(this)\" integrity=\"sha384-eud4nQrKZMwcYak7or3J5ZPJx1x4HRe8iTTHJy1SUVrDD+fP30Bo\/F8OSdQJpk8d\" onload=\"hljsLoader.highlightBlocks(this.parentNode)\"$phttps:\/\/cdn.jsdelivr.net\/gh\/s9e\/hljs-loader@1.0.18\/loader.min.js\"\/><\/pre>$g$dCODEPEN\"><$n$ecodepen\"$f\"$l$q$kno\"$phttps:\/\/codepen.io\/{@user}\/embed\/{@id}?height=400&amp;default-tab=html,result\"$iborder:0;height:400px;width:100%\"\/>$g$dCOLOR\"><$r$icolor:{@color}\">$v<\/$r>$g$dCOMEDYCENTRAL\"><$r$ecomedycentral\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/media.mtvnservices.com\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dCOUB\"><$r$ecoub\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/coub.com\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dDAILYMOTION\"><$r$edailymotion\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">\/\/www.dailymotion.com\/embed\/video\/$h@id\"\/><xsl:if$s@t\">?start=$h@t\"\/><\/xsl:if><\/$m><\/$n><\/$r><\/$r>$g$dDEMOCRACYNOW\"><$r$edemocracynow\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">\/\/www.democracynow.org\/embed\/<$x><$w$scontains(@id,'\/headlines')\">headlines\/$hsubstring-before(@id,'\/headlines')\"\/><\/$w><$w$sstarts-with(@id,'2')\">story\/$h@id\"\/><\/$w><$w$sstarts-with(@id,'shows\/')\">show\/$hsubstring-after(@id,'\/')\"\/><\/$w><$t>$h@id\"\/><\/$t><\/$x><\/$m><\/$n><\/$r><\/$r>$g$dDUMPERT\"><$r$edumpert\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.dumpert.nl\/embed\/{translate(@id,'\/','_')}\"$i$b\/><\/$r><\/$r>$g$dEIGHTTRACKS\"><$r$eeighttracks\"$i$c400px\"><$r$i$a100%\"><$n$f\"$l$q$kno\"$p\/\/8tracks.com\/mixes\/{@id}\/player_v3_universal\"$i$b\/><\/$r><\/$r>$g$dEMAIL\"><a href=\"mailto:{@email}\">$v<\/a>$g$dESC\">$v$g$dESPN\"><$r$eespn\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.espn.com\/core\/video\/$n?id={@id}\"$i$b\/><\/$r><\/$r>$g$dFACEBOOK\"><$n$efacebook\"$f\"$o$z$l$q onload=\"$j$kno\"$phttps:\/\/s9e.github.io\/$n\/2\/facebook.min.html#{@type}{@id}\"$iborder:0;height:360px;max-width:640px;width:100%\"\/>$g$dFALSTAD\"><$n$efalstad\"$f\"$l$q$kno\"$iborder:0;height:500px;max-height:90vh;width:100%"+"\"><$m$usrc\">https:\/\/www.falstad.com\/circuit\/circuitjs.html?running=false&amp;c<$x><$w$s@cct\">ct=$h@cct\"\/><\/$w><$t>tz=$h@ctz\"\/><\/$t><\/$x><\/$m><\/$n>$g$dFLICKR\"><$r$eflickr\"$i$c500px\"><$r$i$a100%\"><$n$f\"$l$q$kno\"$phttps:\/\/www.flickr.com\/photos\/_\/{@id}\/player\/\"$i$b\/><\/$r><\/$r>$g$dFOXNEWS\"><$r$efoxnews\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/video.foxnews.com\/v\/video-embed.html?video_id={@id}\"$i$b\/><\/$r><\/$r>$g$dFP|HE\">$h@char\"\/>$g$dFUNNYORDIE\"><$r$efunnyordie\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.funnyordie.com\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dGAMESPOT\"><$r$egamespot\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.gamespot.com\/videos\/embed\/{@id}\/\"$i$b\/><\/$r><\/$r>$g$dGAMETRAILERS\"><$r$egametrailers\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">\/\/<$x><$w$sstarts-with(@id,'mgid:')\">media.mtvnservices.com\/embed\/$h@id\"\/><\/$w><$t>embed.gametrailers.com\/embed\/$h@id\"\/>?embed=1&amp;suppressBumper=1<\/$t><\/$x><\/$m><\/$n><\/$r><\/$r>$g$dGETTY\"><$r$egetty\"$i$c{@width}px\"><$r><$m$u$z>display:block;overflow:hidden;position:relative;<xsl:if$s@width&gt;0\">padding-bottom:$h100*@height div@width\"\/>%<\/xsl:if><\/$m><$n$f\"$l$q$kno\"$p\/\/embed.gettyimages.com\/embed\/{@id}?et={@et}&amp;tld=com&amp;sig={@sig}&amp;caption=false&amp;ver=1\"$i$b\/><\/$r><\/$r>$g$dGFYCAT\"><$r$egfycat\"$i$c{@width}px\"><$r><$m$u$z>display:block;overflow:hidden;position:relative;<xsl:if$s@width&gt;0\">padding-bottom:$h100*(@height+44)div@width\"\/>%;padding-bottom:calc($h100*@height div@width\"\/>% + 44px)<\/xsl:if><\/$m><$n$f\"$l$q$kno\"$p\/\/gfycat.com\/ifr\/{@id}?hd=1\"$i$b\/><\/$r><\/$r>$g$dGIFS\"><$r$egifs\"$i$c{@width}px\"><$r><$m$u$z>display:block;overflow:hidden;position:relative;<xsl:if$s@width&gt;0\">padding-bottom:$h100*@height div@width\"\/>%<\/xsl:if><\/$m><$n$f\"$l$q$kno\"$p\/\/gifs.com\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dGIPHY\"><$r$egiphy\"$i$c{@width}px\"><$r><$m$u$z>display:block;overflow:hidden;position:relative;<xsl:if$s@width&gt;0\">padding-bottom:$h100*@height div@width\"\/>%<\/xsl:if><\/$m><$n$f\"$l$q$kno\"$i$b><$m$usrc\">\/\/"+"giphy.com\/embed\/$h@id\"\/><xsl:if$s@type='video'\">\/video<\/xsl:if><\/$m><\/$n><\/$r><\/$r>$g$dGIST\"><$n$egist\"$f\"$o$z$l$q onload=\"$j$k\"$phttps:\/\/s9e.github.io\/$n\/2\/gist.min.html#{@id}\"$iborder:0;height:180px;width:100%\"\/>$g$dGLOBALNEWS\"><$r$eglobalnews\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/globalnews.ca\/video\/embed\/{@id}\/\"$i$b\/><\/$r><\/$r>$g$dGOFUNDME\"><$r$egofundme\"$i$c349px\"><$r$i$a118.911175%;padding-bottom:calc(59.312321% + 208px)\"><$n$f\"$l$q$kno\"$p\/\/www.gofundme.com\/mvc.php?route=widgets\/mediawidget&amp;fund={@id}&amp;image=1&amp;coinfo=1\"$i$b\/><\/$r><\/$r>$g$dGOOGLEDRIVE\"><$r$egoogledrive\"$i$c640px\"><$r$i$a75%\"><$n$f\"$l$q$kno\"$p\/\/drive.google.com\/file\/d\/{@id}\/preview\"$i$b\/><\/$r><\/$r>$g$dGOOGLEPLUS\"><$n$egoogleplus\"$f\"$o$z$l$q onload=\"$j$kno\"$iborder:0;height:240px;max-width:450px;width:100%\"><$m$usrc\">https:\/\/s9e.github.io\/$n\/2\/googleplus.min.html#<$x><$w$s@oid\">$h@oid\"\/><\/$w><$t>+$h@name\"\/><\/$t><\/$x>\/posts\/$h@pid\"\/><\/$m><\/$n>$g$dGOOGLESHEETS\"><$x><$w$s@type='chart'\"><$r$egooglesheets\"$i$c600px\"><$r$i$a62%\"><$n$f\"$l$q$kno\"$phttps:\/\/docs.google.com\/spreadsheets\/d\/{@id}\/pubchart?oid={@oid}&amp;format=interactive\"$i$b\/><\/$r><\/$r><\/$w><$t><$n$egooglesheets\"$f\"$l$q$kno\"$iborder:0;height:500px;resize:vertical;width:100%\"><$m$usrc\">https:\/\/docs.google.com\/spreadsheets\/d\/$h@id\"\/>\/p<$x><$w$sstarts-with(@id,'e\/')\">ubhtml?widget=true&amp;headers=false<\/$w><$t>review<\/$t><\/$x>#gid=$h@gid\"\/><\/$m><\/$n><\/$t><\/$x>$g$dHR\"><hr\/>$g$dHUDL\"><$r$ehudl\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">\/\/www.hudl.com\/embed\/<$x><$w$s@id\">video\/$h@id\"\/><\/$w><$t>athlete\/$h@athlete\"\/>\/highlights\/$h@highlight\"\/><\/$t><\/$x><\/$m><\/$n><\/$r><\/$r>$g$dHULU\"><$r$ehulu\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/secure.hulu.com\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dIGN\"><$r$eign\"$i$c468px\"><$r$i$a56.196581%\"><$n$f\"$l$q$kno\"$p\/\/widgets.ign.com\/video\/embed\/content.html?url={@id}\"$i$b\/><\/$r><\/$r>$g$dIMDB\"><$r$eimdb\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.imdb.com\/video\/imdb\/vi{@id}\/imdb\/"+"embed?autoplay=false&amp;width=640\"$i$b\/><\/$r><\/$r>$g$dIMG\"><img$p{@src}\" title=\"{@title}\" alt=\"{@alt}\"><xsl:copy-of select=\"@height|@width\"\/><\/img>$g$dIMGUR\"><$n$eimgur\"$f\"$o$z$l$q onload=\"var c=new MessageChannel;c.port1.onmessage=function(e){{var d=e.data.split(' ');style.height=d[0]+'px';style.width=d[1]+'px'}};contentWindow.postMessage('s9e:init','https:\/\/s9e.github.io',[c.port2])\"$kno\"$iborder:0;height:400px;max-width:100%;width:542px\"><$m$usrc\">https:\/\/s9e.github.io\/$n\/2\/imgur.min.html#<xsl:if$s@type='album'\">a\/<\/xsl:if>$h@id\"\/><\/$m><\/$n>$g$dINDIEGOGO\"><$r$eindiegogo\"$i$c222px\"><$r$i$a200.45045%\"><$n$f\"$l$q$kno\"$p\/\/www.indiegogo.com\/project\/{@id}\/embedded\"$i$b\/><\/$r><\/$r>$g$dINSTAGRAM\"><$n$einstagram\"$f\"$o$z$l$q onload=\"$j$kno\"$phttps:\/\/s9e.github.io\/$n\/2\/instagram.min.html#{@id}\"$ibackground:url(https:\/\/www.instagram.com\/static\/images\/ico\/favicon.svg\/fc72dd4bfde8.svg) no-repeat 50% 50% \/ 50%;border:0;height:540px;max-width:540px;width:100%\"\/>$g$dINTERNETARCHIVE\"><$x><$w$scontains(@id,'playlist=1')\"><$n$einternetarchive\"$f\"$l$q$kno\"$phttps:\/\/archive.org\/embed\/{@id}&amp;list_height=150\"$iborder:0;height:170px;max-width:640px;width:100%\"\/><\/$w><$t><$r$einternetarchive\"$i$c{@width}px\"><$r><$m$u$z>display:block;overflow:hidden;position:relative;<xsl:if$s@width&gt;0\">padding-bottom:$h100*@height div@width\"\/>%<\/xsl:if><\/$m><$n$f\"$l$q$kno\"$phttps:\/\/archive.org\/embed\/{@id}\"$i$b\/><\/$r><\/$r><\/$t><\/$x>$g$dISPOILER\"><$r class=\"spoiler\"$oclass\" onclick=\"removeAttribute('class')\">$v<\/$r>$g$dIZLESENE\"><$r$eizlesene\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.izlesene.com\/embedplayer\/{@id}?autoplay=0\"$i$b\/><\/$r><\/$r>$g$dJSFIDDLE\"><$n$ejsfiddle\"$f\"$l$q$kno\"$p\/\/jsfiddle.net\/{@id}\/{@revision}\/embedded\/{$MEDIAEMBED_THEME}\/\"$iborder:0;height:400px;width:100%\"\/>$g$dJWPLATFORM\"><$r$ejwplatform\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/content.jwplatform.com\/players\/{@id}.html\"$i$b\/><\/$r><\/$r>$g$dKALTURA\"><$r$ekaltura\"$i$c640px\"><$r$i$a61.875%;padding-bottom:calc(56.25% + 36"+"px)\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">https:\/\/cdnapisec.kaltura.com\/p\/$h@partner_id\"\/>\/sp\/<$x><$w$s@sp\">$h@sp\"\/><\/$w><$t>$h@partner_id\"\/>00<\/$t><\/$x>\/embedIframeJs\/uiconf_id\/$h@uiconf_id\"\/>\/partner_id\/$h@partner_id\"\/>?$nembed=true&amp;entry_id=$h@entry_id\"\/><\/$m><\/$n><\/$r><\/$r>$g$dKHL\"><$r$ekhl\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/video.khl.ru\/$n\/feed\/start\/{@id}?type_id=18&amp;width=560&amp;height=315\"$i$b\/><\/$r><\/$r>$g$dKICKSTARTER\"><$r$ekickstarter\"><$x><$w$s@video\"><$m$u$z>$c640px<\/$m><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.kickstarter.com\/projects\/{@id}\/widget\/video.html\"$i$b\/><\/$r><\/$w><$t><$m$u$z>$c220px<\/$m><$r$i$a190.909091%\"><$n$f\"$l$q$kno\"$p\/\/www.kickstarter.com\/projects\/{@id}\/widget\/card.html\"$i$b\/><\/$r><\/$t><\/$x><\/$r>$g$dLI\"><li><xsl:if$sTASK\"><$m$udata-s9e-livepreview-ignore-attrs\">data-task-id<\/$m><$m$udata-task-id\">$hTASK\/@id\"\/><\/$m><$m$udata-task-state\">$hTASK\/@state\"\/><\/$m><\/xsl:if>$v<\/li>$g$dLIBSYN\"><$n$elibsyn\"$f\"$l$q$kno\"$p\/\/html5-player.libsyn.com\/embed\/episode\/id\/{@id}\/thumbnail\/no\"$iborder:0;height:90px;max-width:900px;width:100%\"\/>$g$dLIST\"><$x><$w$snot(@type)\"><ul>$v<\/ul><\/$w><$w$sstarts-with(@type,'decimal')or starts-with(@type,'lower')or starts-with(@type,'upper')\"><ol$ilist-style-type:{@type}\"><xsl:copy-of select=\"@start\"\/>$v<\/ol><\/$w><$t><ul$ilist-style-type:{@type}\">$v<\/ul><\/$t><\/$x>$g$dLIVELEAK\"><$r$eliveleak\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.liveleak.com\/e\/{@id}\"$i$b\/><\/$r><\/$r>$g$dLIVESTREAM\"><$r$elivestream\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">\/\/<$x><$w$s@clip_id\">cdn.livestream.com\/embed\/$h@channel\"\/>?layout=4&amp;autoplay=false&amp;clip=$h@clip_id\"\/><\/$w><$t>livestream.com\/accounts\/$h@account_id\"\/>\/events\/$h@event_id\"\/><xsl:if$s@video_id\">\/videos\/$h@video_id\"\/><\/xsl:if>\/player?autoPlay=false<\/$t><\/$x><\/$m><\/$n><\/$r><\/$r>$g$dMAILRU\"><$r$emailru\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/my.mail.ru\/video\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dMEDIUM\"><$n$emedium\"$f\"$o$z$l$q onload=\"$j$kno\"$phtt"+"ps:\/\/s9e.github.io\/$n\/2\/medium.min.html#{@id}\"$iborder:0;height:316px;max-width:900px;width:100%\"\/>$g$dMEGAPHONE\"><$n$emegaphone\"$f\"$l$q$kno\"$phttps:\/\/player.megaphone.fm\/{@id}\"$iborder:0;height:200px;max-width:900px;width:100%\"\/>$g$dMETACAFE\"><$r$emetacafe\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.metacafe.com\/embed\/{@id}\/\"$i$b\/><\/$r><\/$r>$g$dMIXCLOUD\"><$r$emixcloud\"$i$c400px\"><$r$i$a100%\"><$n$f\"$l$q$kno\"$p\/\/www.mixcloud.com\/widget\/$n\/?feed=http%3A%2F%2Fwww.mixcloud.com%2F{@id}%2F&amp;embed_type=widget_standard\"$i$b\/><\/$r><\/$r>$g$dMIXER\"><$r$emixer\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">https:\/\/mixer.com\/embed\/player\/$h@channel\"\/><xsl:if$s@vod\">?vod=$h@vod\"\/><\/xsl:if><\/$m><\/$n><\/$r><\/$r>$g$dMLB\"><$r$emlb\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/www.mlb.com\/video\/share\/c-{@id}\"$i$b\/><\/$r><\/$r>$g$dMRCTV\"><$r$emrctv\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/www.mrctv.org\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dMSNBC\"><$r$emsnbc\"$i$c640px\"><$r><$x><$w$scontains(@id,'_')\"><$m$u$z>$a68.75%;padding-bottom:calc(56.25% + 80px)<\/$m><$n$f\"$l$q$kno\"$p\/\/player.theplatform.com\/p\/7wvmTC\/MSNBCEmbeddedOffSite?guid={@id}\"$i$b\/><\/$w><$t><$m$u$z>$a56.25%<\/$m><$n$f\"$l$q$kno\"$phttps:\/\/www.msnbc.com\/msnbc\/embedded-video\/{@id}\"$i$b\/><\/$t><\/$x><\/$r><\/$r>$g$dNATGEOCHANNEL\"><$r$enatgeochannel\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/channel.nationalgeographic.com\/{@id}\/embed\/\"$i$b\/><\/$r><\/$r>$g$dNATGEOVIDEO\"><$r$enatgeovideo\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/player.d.nationalgeographic.com\/players\/ngsvideo\/share\/?guid={@id}\"$i$b\/><\/$r><\/$r>$g$dNBCNEWS\"><$r$enbcnews\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.nbcnews.com\/widget\/video-embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dNBCSPORTS\"><$r$enbcsports\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/vplayer.nbcsports.com\/p\/BxmELC\/nbcsports_embed\/select\/media\/{@id}?parentUrl=\"$i$b\/><\/$r><\/$r>$g$dNHL\"><$r$enhl\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">https:\/\/www.nhl.com\/video\/embed<xsl:if$s"+"@t\">\/t-$h@t\"\/><\/xsl:if><xsl:if$s@c\">\/c-$h@c\"\/><\/xsl:if>?autostart=false<\/$m><\/$n><\/$r><\/$r>$g$dNPR\"><$n$enpr\"$f\"$l$q$kno\"$p\/\/www.npr.org\/player\/embed\/{@i}\/{@m}\"$iborder:0;height:228px;max-width:800px;width:100%\"\/>$g$dNYTIMES\"><$r$enytimes\"$i$c585px\"><$r$i$a68.376068%\"><$n$f\"$l$q$kno\"$p\/\/graphics8.nytimes.com\/video\/players\/offsite\/index.html?videoId={@id}\"$i$b\/><\/$r><\/$r>$g$dORFIUM\"><$n$eorfium\"$f\"$l$q$kno\"><$m$usrc\">https:\/\/www.orfium.com\/embedded\/<$x><$w$s@album_id\">album\/$h@album_id\"\/><\/$w><$w$s@playlist_id\">playlist\/$h@playlist_id\"\/><\/$w><$w$s@set_id\">live-set\/$h@set_id\"\/><\/$w><$t>track\/$h@track_id\"\/><\/$t><\/$x><\/$m><$m$u$z>border:0;height:<$x><$w$s@album_id\">550<\/$w><$t>275<\/$t><\/$x>px;max-width:900px;width:100%<\/$m><\/$n>$g$dPASTEBIN\"><$n$epastebin\"$f\"$l$q$k\"$p\/\/pastebin.com\/embed_$n.php?i={@id}\"$iborder:0;height:300px;resize:vertical;width:100%\"\/>$g$dPINTEREST\"><$n$epinterest\"$f\"$o$z$l$q onload=\"$j$kno\"$phttps:\/\/s9e.github.io\/$n\/2\/pinterest.min.html#{@id}\"><$m$u$z>border:0;height:360px;max-width:<$x><$w$scontains(@id,'\/')\">730<\/$w><$t>345<\/$t><\/$x>px;width:100%<\/$m><\/$n>$g$dPODBEAN\"><$n$epodbean\"$f\"$l$q$kno\"$p\/\/www.podbean.com\/media\/player\/{@id}\"$iborder:0;height:100px;max-width:900px;width:100%\"\/>$g$dPOSTMENTION\"><a href=\"{$DISCUSSION_URL}{@discussionid}\/{@number}\" class=\"PostMention\" data-id=\"{@id}\">$h@displayname\"\/><\/a>$g$dPREZI\"><$r$eprezi\"$i$c550px\"><$r$i$a72.727273%\"><$n$f\"$l$q$kno\"$p\/\/prezi.com\/embed\/{@id}\/\"$i$b\/><\/$r><\/$r>$g$dQUOTE\"><blockquote><xsl:if$snot(@author)\"><$m$uclass\">uncited<\/$m><\/xsl:if><div><xsl:if$s@author\"><cite>$h@author\"\/> wrote:<\/cite><\/xsl:if>$v<\/div><\/blockquote>$g$dREDDIT\"><$n$ereddit\"$f\"$o$z$l$q onload=\"$j$kno\"$phttps:\/\/s9e.github.io\/$n\/2\/reddit.min.html#{@id}{@path}\"$iborder:0;height:165px;max-width:800px;width:100%\"\/>$g$dRUMBLE\"><$r$erumble\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/rumble.com\/embed\/{@id}\/\"$i$b\/><\/$r><\/$r>$g$dRUTUBE\"><$r$erutube\"$i$c720px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/rutube.ru\/play\/embed\/{@id}\"$i$b\/"+"><\/$r><\/$r>$g$dSCRIBD\"><$n$escribd\"$f\"$l$q$kno\"$phttps:\/\/www.scribd.com\/embeds\/{@id}\/content?view_mode=scroll&amp;show_recommendations=false\"$iborder:0;height:500px;resize:vertical;width:100%\"\/>$g$dSENDVID\"><$r$esendvid\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/sendvid.com\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dSIZE\"><$r$ifont-size:{@size}px\">$v<\/$r>$g$dSLIDESHARE\"><$r$eslideshare\"$i$c427px\"><$r$i$a83.372365%\"><$n$f\"$l$q$kno\"$p\/\/www.slideshare.net\/slideshow\/embed_code\/{@id}\"$i$b\/><\/$r><\/$r>$g$dSOUNDCLOUD\"><$n$esoundcloud\"$f\"$l$q$kno\"><$m$usrc\">https:\/\/w.soundcloud.com\/player\/?url=<$x><$w$s@playlist_id\">https%3A\/\/api.soundcloud.com\/playlists\/$h@playlist_id\"\/><\/$w><$w$s@track_id\">https%3A\/\/api.soundcloud.com\/tracks\/$h@track_id\"\/>&amp;secret_token=$h@secret_token\"\/><\/$w><$t><xsl:if$snot(contains(@id,':\/\/'))\">https%3A\/\/soundcloud.com\/<\/xsl:if>$h@id\"\/><\/$t><\/$x><\/$m><$m$u$z>border:0;height:<$x><$w$s@playlist_id or contains(@id,'\/sets\/')\">450<\/$w><$t>166<\/$t><\/$x>px;max-width:900px;width:100%<\/$m><\/$n>$g$dSPOILER\"><details class=\"spoiler\"$oopen\">$v<\/details>$g$dSPORCLE\"><$n$esporcle\"$f\"$o$z$l$q onload=\"var c=new MessageChannel;c.port1.onmessage=function(e){{style.height=e.data+'px'}};contentWindow.postMessage('s9e:init','*',[c.port2])\"$kno\"$phttps:\/\/s9e.github.io\/$n\/2\/sporcle.min.html#{@id}\"$iborder:0;height:535px;max-width:820px;width:100%\"\/>$g$dSPORTSNET\"><$r$esportsnet\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/images.rogersdigitalmedia.com\/video_service.php?videoId={@id}&amp;playerKey=AQ~~,AAAAAGWRwLc~,cRCmKE8Utf7OFWP38XQcokFZ80fR-u_y&amp;autoStart=false&amp;width=100%25&amp;height=100%25\"$i$b\/><\/$r><\/$r>$g$dSPOTIFY\"><$x><$w$sstarts-with(@id,'episode\/')or starts-with(@id,'show\/')\"><$n$espotify\" allow=\"encrypted-media\"$f\"$l$q$kno\"$phttps:\/\/open.spotify.com\/embed\/{@id}\"$iborder:0;height:152px;max-width:900px;width:100%\"\/><\/$w><$t><$r$espotify\"$i$c320px\"><$r$i$a125%;padding-bottom:calc(100% + 80px)\"><$n allow=\"encrypted-media\"$f\"$l$q$kno\"$phttps:\/\/open.spotify.com\/em"+"bed\/{translate(@id,':','\/')}{@path}\"$i$b\/><\/$r><\/$r><\/$t><\/$x>$g$dSPREAKER\"><$n$espreaker\"$f\"$l$q$kno\"$phttps:\/\/widget.spreaker.com\/player?episode_id={@episode_id}&amp;show_id={@show_id}&amp;theme={$MEDIAEMBED_THEME}\"$iborder:0;height:{400-200*boolean(@episode_id)}px;max-width:900px;width:100%\"\/>$g$dSTEAMSTORE\"><$n$esteamstore\"$f\"$l$q$kno\"$p\/\/store.steampowered.com\/widget\/{@id}\"$iborder:0;height:190px;max-width:900px;width:100%\"\/>$g$dSTITCHER\"><$n$estitcher\"$f\"$l$q$kno\"$phttps:\/\/www.stitcher.com\/embed\/{@fid}\/{@eid}\"$iborder:0;height:150px;max-width:900px;width:100%\"\/>$g$dSTRAWPOLL\"><$r$estrawpoll\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$k\"$p\/\/www.strawpoll.me\/embed_1\/{@id}\"$i$b\/><\/$r><\/$r>$g$dSTREAMABLE\"><$r$estreamable\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/streamable.com\/e\/{@id}\"$i$b\/><\/$r><\/$r>$g$dSTREAMJA\"><$r$estreamja\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/streamja.com\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dTASK\"><input data-task-id=\"{@id}\"$odata-task-id\" type=\"checkbox\"><xsl:if$s@state='checked'\"><$m$uchecked\"\/><\/xsl:if><xsl:if$snot($TASKLISTS_EDITABLE)\"><$m$udisabled\"\/><\/xsl:if><\/input>$g$dTD\"><td><xsl:if$s@align\"><$m$u$z>text-align:$h@align\"\/><\/$m><\/xsl:if>$v<\/td>$g$dTEAMCOCO\"><$r$eteamcoco\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/teamcoco.com\/embed\/v\/{@id}\"$i$b\/><\/$r><\/$r>$g$dTED\"><$r$eted\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">\/\/embed.ted.com\/$h@id\"\/><xsl:if$snot(contains(@id,'.html'))\">.html<\/xsl:if><\/$m><\/$n><\/$r><\/$r>$g$dTELEGRAM\"><$n$etelegram\"$f\"$o$z$l$q onload=\"$j$kno\"$phttps:\/\/s9e.github.io\/$n\/2\/telegram.min.html#{@id}\"$iborder:0;height:96px;max-width:500px;width:100%\"\/>$g$dTH\"><th><xsl:if$s@align\"><$m$u$z>text-align:$h@align\"\/><\/$m><\/xsl:if>$v<\/th>$g$dTHEATLANTIC\"><$r$etheatlantic\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.theatlantic.com\/video\/$n\/{@id}\/\"$i$b\/><\/$r><\/$r>$g$dTHEGUARDIAN\"><$r$etheguardian\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/embed.theguardian.com\/embed\/video\/{@id}\"$i$b\/><\/$r><\/$r>$g$dTHEONIO"+"N\"><$r$etheonion\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.theonion.com\/video_embed\/?id={@id}\"$i$b\/><\/$r><\/$r>$g$dTIKTOK\"><$r$etiktok\"$i$c340px\"><$r$i$a205.882353%\"><$n$f\"$l$q$kno\"$p\/\/www.tiktok.com\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dTMZ\"><$r$etmz\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.kaltura.com\/index.php\/kwidget\/cache_st\/133592691\/wid\/_591531\/partner_id\/591531\/uiconf_id\/9071262\/entry_id\/{@id}\"$i$b\/><\/$r><\/$r>$g$dTRADINGVIEW\"><$n$etradingview\"$f\"$l$q$kno\"$iborder:0;height:400px;width:100%\"><$m$usrc\">https:\/\/s.tradingview.com\/<$x><$w$s@symbol\">widgetembed\/?interval=D&amp;symbol=$htranslate(@symbol,'-',':')\"\/><\/$w><$t>embed\/$h@chart\"\/><\/$t><\/$x><\/$m><\/$n>$g$dTRAILERADDICT\"><$r$etraileraddict\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/v.traileraddict.com\/{@id}\"$i$b\/><\/$r><\/$r>$g$dTRENDINGVIEWS\"><$r$etrendingviews\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/trendingviews.co\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dTUMBLR\"><$n$etumblr\"$f\"$o$z$l$q onload=\"$j$kno\"$phttps:\/\/s9e.github.io\/$n\/2\/tumblr.min.html#{@key}\/{@id}\"$iborder:0;height:300px;max-width:520px;width:100%\"\/>$g$dTWENTYFOURSEVENSPORTS\"><$x><$w$s@video_id\"><$r$etwentyfoursevensports\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/www.cbssports.com\/video\/player\/embed?args=player_id%3D{@video_id}%26channel%3Dmobilevideo%26pcid%3D{@video_id}%26width%3D640%26height%3D360%26autoplay%3Dfalse%26comp_ads_enabled%3Dfalse%26uvpc%3Dhttp%3A%2F%2Fsports.cbsimg.net%2Fvideo%2Fuvp%2Fconfig%2Fv4%2Fuvp_247sports.xml%26uvpc_m%3Dhttp%3A%2F%2Fsports.cbsimg.net%2Fvideo%2Fuvp%2Fconfig%2Fv4%2Fuvp_247sports_m.xml%26partner%3D247%26partner_m%3D247_mobile%26utag%3D247sportssite%26resizable%3Dtrue\"$i$b\/><\/$r><\/$r><\/$w><$t><$n$etwentyfoursevensports\"$f\"$l$q onload=\"window.addEventListener('message',function(e){{if(e.source===this.contentWindow&amp;&amp;e.data.height)this.style.height=e.data.height+'px'}})\"$kno\"$phttps:\/\/247sports.com\/PlayerSport\/{@player_id}\/Embed\/\"$iborder:0;height:200px;max-width:600px;width:100%\"\/><\/$"+"t><\/$x>$g$dTWITCH\"><$r$etwitch\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q onload=\"contentWindow.postMessage('','https:\/\/s9e.github.io')\"$kno\"$phttps:\/\/s9e.github.io\/$n\/2\/twitch.min.html#channel={@channel};clip_id={@clip_id};t={@t};video_id={@video_id}\"$i$b\/><\/$r><\/$r>$g$dTWITTER\"><$n$etwitter\" allow=\"autoplay *\"$f\"$o$z$l$q onload=\"$j$kno\"$phttps:\/\/s9e.github.io\/$n\/2\/twitter.min.html#{@id}{$MEDIAEMBED_THEME}\"$iborder:0;height:250px;max-width:550px;width:100%\"\/>$g$dUPL-FILE\"><div class=\"ButtonGroup\" data-fof-upload-download-uuid=\"{@uuid}\"><div class=\"Button hasIcon Button--icon Button--primary\"><i class=\"fas fa-download\"\/><\/div><div class=\"Button\">$h@content\"\/><\/div><div class=\"Button\">$h@size\"\/><\/div><\/div>$g$dUPL-IMAGE\"><div class=\"fof-download row\" data-fof-upload-download-uuid=\"{@uuid}\"><div class=\"card\"><div class=\"wrapper\"$ibackground:url({@url}) center \/ cover no-repeat\"><div class=\"header\"><ul class=\"menu-content\"><li><div class=\"far fa-hdd\"><$r>$h@size\"\/><\/$r><\/div><\/li><\/ul><\/div><div class=\"data\"><div class=\"content\"><h4 class=\"title\">$h@content\"\/><\/h4><div class=\"Button Button--primary Button-icon Button--block\"><i class=\"fas fa-download\"\/><\/div><\/div><\/div><\/div><\/div><\/div>$g$dUPL-IMAGE-PREVIEW\"><img$p{@url}\" title=\"{@base_name}\"\/>$g$dURL\"><a href=\"{@url}\" rel=\" nofollow ugc\"><xsl:copy-of select=\"@title\"\/>$v<\/a>$g$dUSERMENTION\"><a href=\"{$PROFILE_URL}{@username}\" class=\"UserMention\">@$h@displayname\"\/><\/a>$g$dUSTREAM\"><$r$eustream\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">\/\/www.ustream.tv\/embed\/<$x><$w$s@vid\">recorded\/$h@vid\"\/><\/$w><$t>$h@cid\"\/><\/$t><\/$x>?html5ui<\/$m><\/$n><\/$r><\/$r>$g$dVBOX7\"><$r$evbox7\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/vbox7.com\/emb\/external.php?vid={@id}\"$i$b\/><\/$r><\/$r>$g$dVEOH\"><$r$eveoh\"$i$c640px\"><$r$i$a62.5%;padding-bottom:calc(56.25% + 40px)\"><object data=\"\/\/www.veoh.com\/swf\/webplayer\/WebPlayer.swf?version=AFrontend.5.7.0.1509&amp;permalinkId=v{@id}&amp;player=videodetailsembedded&amp;videoAutoPlay=0&amp;id=anon"+"ymous\"$i$y type=\"application\/x-shockwave-flash\" typemustmatch=\"\"><param$uallowfullscreen\" value=\"true\"\/><\/object><\/$r><\/$r>$g$dVEVO\"><$r$evevo\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/embed.vevo.com\/?isrc={@id}\"$i$b\/><\/$r><\/$r>$g$dVIDEO\"><video controls=\"\"$p{@src}\"\/>$g$dVIDEODETECTIVE\"><$r$evideodetective\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.videodetective.com\/embed\/video\/?options=false&amp;autostart=false&amp;playlist=none&amp;publishedid={@id}\"$i$b\/><\/$r><\/$r>$g$dVIMEO\"><$r$evimeo\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$i$b><$m$usrc\">\/\/player.vimeo.com\/video\/$h@id\"\/><xsl:if$s@t\">#t=$h@t\"\/><\/xsl:if><\/$m><\/$n><\/$r><\/$r>$g$dVINE\"><$r$evine\"$i$c480px\"><$r$i$a100%\"><$n$f\"$l$q$kno\"$phttps:\/\/vine.co\/v\/{@id}\/embed\/simple?audio=1\"$i$b\/><\/$r><\/$r>$g$dVK\"><$r$evk\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/vk.com\/video_ext.php?oid={@oid}&amp;id={@vid}&amp;hash={@hash}&amp;hd=1\"$i$b\/><\/$r><\/$r>$g$dVOCAROO\"><$r$evocaroo\"><$x><$w$sstarts-with(@id,'s0')or starts-with(@id,'s1')\"><$m$u$z>$c148px<\/$m><$r$i$a29.72973%\"><object data=\"\/\/vocaroo.com\/player.swf?playMediaID={@id}&amp;autoplay=0\"$i$y type=\"application\/x-shockwave-flash\" typemustmatch=\"\"><param$uallowfullscreen\" value=\"true\"\/><\/object><\/$r><\/$w><$t><$m$u$z>$c300px<\/$m><$r$i$a20%\"><$n$f\"$l$q$kno\"$phttps:\/\/vocaroo.com\/embed\/{@id}\"$i$b\/><\/$r><\/$t><\/$x><\/$r>$g$dVOX\"><$r$evox\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/player.ooyala.com\/$n.html#pbid=a637d53c5c0a43c7bf4e342886b9d8b0&amp;ec={@id}\"$i$b\/><\/$r><\/$r>$g$dWASHINGTONPOST\"><$r$ewashingtonpost\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.washingtonpost.com\/video\/c\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dWISTIA\"><$r$ewistia\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$phttps:\/\/fast.wistia.net\/embed\/$n\/{@id}\"$i$b\/><\/$r><\/$r>$g$dWSHH\"><$r$ewshh\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/www.worldstarhiphop.com\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dWSJ\"><$r$ewsj\"$i$c512px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/video-api.wsj.com\/api-video\/player\/$n.html?guid={@id}\"$"+"i$b\/><\/$r><\/$r>$g$dXBOXCLIPS\"><$r$exboxclips\"$i$c560px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/gameclips.io\/{@user}\/{@id}\/embed\"$i$b\/><\/$r><\/$r>$g$dXBOXDVR\"><$r$exboxdvr\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/gamerdvr.com\/gamer\/{@user}\/video\/{@id}\/embed\"$i$b\/><\/$r><\/$r>$g$dYOUKU\"><$r$eyouku\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$p\/\/player.youku.com\/embed\/{@id}\"$i$b\/><\/$r><\/$r>$g$dYOUTUBE\"><$r$eyoutube\"$i$c640px\"><$r$i$a56.25%\"><$n$f\"$l$q$kno\"$ibackground:url(https:\/\/i.ytimg.com\/vi\/{@id}\/hqdefault.jpg) 50% 50% \/ cover;$b><$m$usrc\">https:\/\/www.youtube.com\/embed\/$h@id\"\/><xsl:if$s@list\">?list=$h@list\"\/><\/xsl:if><xsl:if$s@t\"><$x><$w$s@list\">&amp;<\/$w><$t>?<\/$t><\/$x>start=$h@t\"\/><\/xsl:if><\/$m><\/$n><\/$r><\/$r>$g$dbr\"><br\/>$g$de|i|s\"\/><\/xsl:stylesheet>").replace(/\$[a-z]/g,function(k){return{"$a":"display:block;overflow:hidden;position:relative;padding-bottom:","$b":"border:0;height:100%;left:0;position:absolute;width:100%\"","$c":"display:inline-block;width:100%;max-width:","$d":"<xsl:template match=\"","$e":" data-s9e-mediaembed=\"","$f":" allowfullscreen=\"","$g":"<\/xsl:template>","$h":"<xsl:value-of select=\"","$i":" style=\"","$j":"var c=new MessageChannel;c.port1.onmessage=function(e){{style.height=e.data+'px'}};contentWindow.postMessage('s9e:init','https:\/\/s9e.github.io',[c.port2])\"","$k":" scrolling=\"","$l":" loading=\"","$m":"xsl:attribute","$n":"iframe","$o":" data-s9e-livepreview-ignore-attrs=\"","$p":" src=\"","$q":"lazy\"","$r":"span","$s":" test=\"","$t":"xsl:otherwise","$u":" name=\"","$v":"<xsl:apply-templates\/>","$w":"xsl:when","$x":"xsl:choose","$y":"height:100%;left:0;position:absolute;width:100%\"","$z":"style\""}[k]});var EmailFilter={filter:function(attrValue){return/^[-\w.+]+@[-\w.]+$/.test(attrValue)?attrValue:!1}};var FalseFilter={filter:function(attrValue){return!1}};var HashmapFilter={filter:function(attrValue,map,strict){if(attrValue in map){return map[attrValue]}
return(strict)?!1:attrValue}};var MapFilter={filter:function(attrValue,map){var i=-1,cnt=map.length;while(++i<cnt){if(map[i][0].test(attrValue)){return map[i][1]}}
return attrValue}};var NetworkFilter={filterIp:function(attrValue){if(/^[\d.]+$/.test(attrValue)){return NetworkFilter.filterIpv4(attrValue)}
if(/^[\da-f:]+$/i.test(attrValue)){return NetworkFilter.filterIpv6(attrValue)}
return!1},filterIpport:function(attrValue){var m,ip;if(m=/^\[([\da-f:]+)(\]:[1-9]\d*)$/i.exec(attrValue)){ip=NetworkFilter.filterIpv6(m[1]);if(ip===!1){return!1}
return'['+ip+m[2]}
if(m=/^([\d.]+)(:[1-9]\d*)$/.exec(attrValue)){ip=NetworkFilter.filterIpv4(m[1]);if(ip===!1){return!1}
return ip+m[2]}
return!1},filterIpv4:function(attrValue){if(!/^\d+\.\d+\.\d+\.\d+$/.test(attrValue)){return!1}
var i=4,p=attrValue.split('.');while(--i>=0){if(p[i][0]==='0'||p[i]>255){return!1}}
return attrValue},filterIpv6:function(attrValue){return/^([\da-f]{0,4}:){2,7}(?:[\da-f]{0,4}|\d+\.\d+\.\d+\.\d+)$/.test(attrValue)?attrValue:!1}};var NumericFilter={filterFloat:function(attrValue){return/^(?:0|-?[1-9]\d*)(?:\.\d+)?(?:e[1-9]\d*)?$/i.test(attrValue)?attrValue:!1},filterInt:function(attrValue){return/^(?:0|-?[1-9]\d*)$/.test(attrValue)?attrValue:!1},filterRange:function(attrValue,min,max,logger){if(!/^(?:0|-?[1-9]\d*)$/.test(attrValue)){return!1}
attrValue=parseInt(attrValue,10);if(attrValue<min){if(logger){logger.warn('Value outside of range, adjusted up to min value',{'attrValue':attrValue,'min':min,'max':max})}
return min}
if(attrValue>max){if(logger){logger.warn('Value outside of range, adjusted down to max value',{'attrValue':attrValue,'min':min,'max':max})}
return max}
return attrValue},filterUint:function(attrValue){return/^(?:0|[1-9]\d*)$/.test(attrValue)?attrValue:!1}};var RegexpFilter={filter:function(attrValue,regexp){return regexp.test(attrValue)?attrValue:!1}};var TimestampFilter={filter:function(attrValue){var m=/^(?=\d)(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(attrValue);if(m){return 3600*(m[1]||0)+60*(m[2]||0)+(+m[3]||0)}
return NumericFilter.filterUint(attrValue)}};var UrlFilter={filter:function(attrValue,urlConfig,logger){var p=UrlFilter.parseUrl(attrValue.replace(/^\s+/,'').replace(/\s+$/,''));var error=UrlFilter.validateUrl(urlConfig,p);if(error){if(logger){p.attrValue=attrValue;logger.err(error,p)}
return!1}
return UrlFilter.rebuildUrl(urlConfig,p)},parseUrl:function(url){var regexp=/^(?:([a-z][-+.\w]*):)?(?:\/\/(?:([^:\/?#]*)(?::([^\/?#]*)?)?@)?(?:(\[[a-f\d:]+\]|[^:\/?#]+)(?::(\d*))?)?(?![^\/?#]))?([^?#]*)(\?[^#]*)?(#.*)?$/i;var m=regexp.exec(url),parts={},tokens=['scheme','user','pass','host','port','path','query','fragment'];tokens.forEach(function(name,i){parts[name]=(m[i+1]>'')?m[i+1]:''});parts.scheme=parts.scheme.toLowerCase();parts.host=parts.host.replace(/[\u3002\uff0e\uff61]/g,'.').replace(/\.+$/g,'');if(/[^\x00-\x7F]/.test(parts.host)&&typeof punycode!=='undefined'){parts.host=punycode.toASCII(parts.host)}
return parts},rebuildUrl:function(urlConfig,p){var url='';if(p.scheme!==''){url+=p.scheme+':'}
if(p.host!==''){url+='//';if(p.user!==''){url+=rawurlencode(decodeURIComponent(p.user));if(p.pass!==''){url+=':'+rawurlencode(decodeURIComponent(p.pass))}
url+='@'}
url+=p.host;if(p.port!==''){url+=':'+p.port}}else if(p.scheme==='file'){url+='//'}
var path=p.path+p.query+p.fragment;path=path.replace(/%.?[a-f]/g,function(str){return str.toUpperCase()},path);url+=UrlFilter.sanitizeUrl(path);if(!p.scheme){url=url.replace(/^([^\/]*):/,'$1%3A')}
return url},sanitizeUrl:function(url){return url.replace(/[^\u0020-\u007E]+/g,encodeURIComponent).replace(/%(?![0-9A-Fa-f]{2})|[^!#-&*-;=?-Z_a-z~]/g,escape)},validateUrl:function(urlConfig,p){if(p.scheme!==''&&!urlConfig.allowedSchemes.test(p.scheme)){return'URL scheme is not allowed'}
if(p.host!==''){var regexp=/^(?!-)[-a-z0-9]{0,62}[a-z0-9](?:\.(?!-)[-a-z0-9]{0,62}[a-z0-9])*$/i;if(!regexp.test(p.host)){if(!NetworkFilter.filterIpv4(p.host)&&!NetworkFilter.filterIpv6(p.host.replace(/^\[(.*)\]$/,'$1',p.host))){return'URL host is invalid'}}
if((urlConfig.disallowedHosts&&urlConfig.disallowedHosts.test(p.host))||(urlConfig.restrictedHosts&&!urlConfig.restrictedHosts.test(p.host))){return'URL host is not allowed'}}else if(/^(?:(?:f|ht)tps?)$/.test(p.scheme)){return'Missing host'}}};function html_entity_decode(str){var b=document.createElement('b');html_entity_decode=function(str){b.innerHTML=str.replace(/</g,'&lt;');return b.textContent};return html_entity_decode(str)}
function htmlspecialchars_compat(str){var t={'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'};return str.replace(/[<>&"]/g,function(c){return t[c]})}
function htmlspecialchars_noquotes(str){var t={'<':'&lt;','>':'&gt;','&':'&amp;'};return str.replace(/[<>&]/g,function(c){return t[c]})}
function rawurlencode(str){return encodeURIComponent(str).replace(/[!'()*]/g,function(c){return'%'+c.charCodeAt(0).toString(16).toUpperCase()})}
function returnFalse(){return!1}
function returnTrue(){return!0}
function executeAttributePreprocessors(tag,tagConfig){if(typeof tagConfig.attributePreprocessors==='undefined'){return}
tagConfig.attributePreprocessors.forEach(function(ap){var attrName=ap[0],regexp=ap[1],map=ap[2];if(tag.hasAttribute(attrName)){executeAttributePreprocessor(tag,attrName,regexp,map)}})}
function filterAttributes(tag,tagConfig,registeredVars,logger){var attributes={},attrName;for(attrName in tagConfig.attributes){var attrConfig=tagConfig.attributes[attrName],attrValue=!1;if(tag.hasAttribute(attrName)){attrValue=executeAttributeFilterChain(attrConfig.filterChain,attrName,tag.getAttribute(attrName))}
if(attrValue!==!1){attributes[attrName]=attrValue}else if(HINT.attributeDefaultValue&&typeof attrConfig.defaultValue!=='undefined'){attributes[attrName]=attrConfig.defaultValue}else if(attrConfig.required){tag.invalidate()}}
tag.setAttributes(attributes)}
function filterTag(tag){var tagName=tag.getName(),tagConfig=tagsConfig[tagName];logger.setTag(tag);for(var i=0;i<tagConfig.filterChain.length;++i){if(tag.isInvalid()){break}
tagConfig.filterChain[i](tag,tagConfig)}
logger.unsetTag()}
function executeAttributeFilterChain(filterChain,attrName,attrValue){logger.setAttribute(attrName);for(var i=0;i<filterChain.length;++i){attrValue=filterChain[i](attrValue,attrName);if(attrValue===!1){break}}
logger.unsetAttribute();return attrValue}
function executeAttributePreprocessor(tag,attrName,regexp,map){var attrValue=tag.getAttribute(attrName),captures=getNamedCaptures(attrValue,regexp,map),k;for(k in captures){if(k===attrName||!tag.hasAttribute(k)){tag.setAttribute(k,captures[k])}}}
function getNamedCaptures(attrValue,regexp,map){var m=regexp.exec(attrValue);if(!m){return[]}
var values={};map.forEach(function(k,i){if(typeof m[i]==='string'&&m[i]!==''){values[k]=m[i]}});return values}
function Logger(){}Logger.prototype={add:function(type,msg,context){},clear:function(){},setAttribute:function(attrName){},setTag:function(tag){},unsetAttribute:function(){},unsetTag:function(){},debug:function(msg,context){},err:function(msg,context){},info:function(msg,context){},warn:function(msg,context){}};function Tag(type,name,pos,len,priority){this.type=+type;this.name=name;this.pos=+pos;this.len=+len;this.sortPriority=+priority||0;this.attributes={};this.cascade=[];if(isNaN(type+pos+len)){this.invalidate()}}
Tag.START_TAG=1;Tag.END_TAG=2;Tag.SELF_CLOSING_TAG=3;Tag.prototype.attributes;Tag.prototype.cascade;Tag.prototype.endTag;Tag.prototype.invalid=!1;Tag.prototype.len;Tag.prototype.name;Tag.prototype.pos;Tag.prototype.sortPriority;Tag.prototype.startTag;Tag.prototype.type;Tag.prototype.addFlags=function(flags){this.flags|=flags};Tag.prototype.cascadeInvalidationTo=function(tag){this.cascade.push(tag);if(this.invalid){tag.invalidate()}};Tag.prototype.invalidate=function(){if(!this.invalid){this.invalid=!0;this.cascade.forEach(function(tag){tag.invalidate()})}};Tag.prototype.pairWith=function(tag){if(this.canBePaired(this,tag)){this.endTag=tag;tag.startTag=this;this.cascadeInvalidationTo(tag)}else if(this.canBePaired(tag,this)){this.startTag=tag;tag.endTag=this}};Tag.prototype.canBePaired=function(startTag,endTag){return startTag.name===endTag.name&&startTag.type===Tag.START_TAG&&endTag.type===Tag.END_TAG&&startTag.pos<=startTag.pos};Tag.prototype.removeFlags=function(flags){this.flags&=~flags};Tag.prototype.setFlags=function(flags){this.flags=flags};Tag.prototype.getAttributes=function(){var attributes={};for(var attrName in this.attributes){attributes[attrName]=this.attributes[attrName]}
return attributes};Tag.prototype.getEndTag=function(){return this.endTag};Tag.prototype.getFlags=function(){return this.flags};Tag.prototype.getLen=function(){return this.len};Tag.prototype.getName=function(){return this.name};Tag.prototype.getPos=function(){return this.pos};Tag.prototype.getSortPriority=function(){return this.sortPriority};Tag.prototype.getStartTag=function(){return this.startTag};Tag.prototype.getType=function(){return this.type};Tag.prototype.canClose=function(startTag){if(this.invalid||!this.canBePaired(startTag,this)||(this.startTag&&this.startTag!==startTag)||(startTag.endTag&&startTag.endTag!==this)){return!1}
return!0};Tag.prototype.isBrTag=function(){return(this.name==='br')};Tag.prototype.isEndTag=function(){return!!(this.type&Tag.END_TAG)};Tag.prototype.isIgnoreTag=function(){return(this.name==='i')};Tag.prototype.isInvalid=function(){return this.invalid};Tag.prototype.isParagraphBreak=function(){return(this.name==='pb')};Tag.prototype.isSelfClosingTag=function(){return(this.type===Tag.SELF_CLOSING_TAG)};Tag.prototype.isSystemTag=function(){return('br i pb v'.indexOf(this.name)>-1)};Tag.prototype.isStartTag=function(){return!!(this.type&Tag.START_TAG)};Tag.prototype.isVerbatim=function(){return(this.name==='v')};Tag.prototype.getAttribute=function(attrName){return this.attributes[attrName]};Tag.prototype.hasAttribute=function(attrName){return(attrName in this.attributes)};Tag.prototype.removeAttribute=function(attrName){delete this.attributes[attrName]};Tag.prototype.setAttribute=function(attrName,attrValue){this.attributes[attrName]=attrValue};Tag.prototype.setAttributes=function(attributes){this.attributes={};for(var attrName in attributes){this.attributes[attrName]=attributes[attrName]}};var RULE_AUTO_CLOSE=1<<0;var RULE_AUTO_REOPEN=1<<1;var RULE_BREAK_PARAGRAPH=1<<2;var RULE_CREATE_PARAGRAPHS=1<<3;var RULE_DISABLE_AUTO_BR=1<<4;var RULE_ENABLE_AUTO_BR=1<<5;var RULE_IGNORE_TAGS=1<<6;var RULE_IGNORE_TEXT=1<<7;var RULE_IGNORE_WHITESPACE=1<<8;var RULE_IS_TRANSPARENT=1<<9;var RULE_PREVENT_BR=1<<10;var RULE_SUSPEND_AUTO_BR=1<<11;var RULE_TRIM_FIRST_LINE=1<<12;var RULES_AUTO_LINEBREAKS=RULE_DISABLE_AUTO_BR|RULE_ENABLE_AUTO_BR|RULE_SUSPEND_AUTO_BR;var RULES_INHERITANCE=RULE_ENABLE_AUTO_BR;var WHITESPACE=" \n\t";var cntOpen;var cntTotal;var context;var currentFixingCost;var currentTag;var isRich;var logger=new Logger;var maxFixingCost=10000;var namespaces;var openTags;var output;var plugins={"Autoemail":{parser:function(text,matches){var config={attrName:"email",tagName:"EMAIL"};var tagName=config.tagName,attrName=config.attrName;matches.forEach(function(m){var startTag=addStartTag(tagName,m[0][1],0);startTag.setAttribute(attrName,m[0][0]);var endTag=addEndTag(tagName,m[0][1]+m[0][0].length,0);startTag.pairWith(endTag)})},quickMatch:"@",regexp:/\b[-a-z0-9_+.]+@[-a-z0-9.]*[a-z0-9]/ig,regexpLimit:50000},"Autoimage":{parser:function(text,matches){var config={attrName:"src",tagName:"IMG"};var tagName=config.tagName,attrName=config.attrName;matches.forEach(function(m){addTagPair(tagName,m[0][1],0,m[0][1]+m[0][0].length,0,2).setAttribute(attrName,m[0][0])})},quickMatch:":\/\/",regexp:/\bhttps?:\/\/[-.\w]+\/(?:[-+.:\/\w]|%[0-9a-f]{2}|\(\w+\))+\.(?:gif|jpe?g|png|svgz?|webp)(?!\S)/ig,regexpLimit:50000},"Autolink":{parser:function(text,matches){var config={attrName:"url",tagName:"URL"};matches.forEach(function(m){linkifyUrl(m[0][1],trimUrl(m[0][0]))});function linkifyUrl(tagPos,url){var endPos=tagPos+url.length,endTag=addEndTag(config.tagName,endPos,0);if(url[3]==='.'){url='http://'+url}
var startTag=addStartTag(config.tagName,tagPos,0,1);startTag.setAttribute(config.attrName,url);startTag.pairWith(endTag);var contentTag=addVerbatim(tagPos,endPos-tagPos,1000);startTag.cascadeInvalidationTo(contentTag)}
function trimUrl(url){return url.replace(/(?:(?![-=)\/_])[\s!-.:-@[-`{-~])+$/,'')}},quickMatch:":",regexp:/\bhttps?:(?:[^\s()\[\]\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65]|\([^\s()]*\)|\[\w*\])+/ig,regexpLimit:50000},"Autovideo":{parser:function(text,matches){var config={attrName:"src",tagName:"VIDEO"};var tagName=config.tagName,attrName=config.attrName;matches.forEach(function(m){addTagPair(tagName,m[0][1],0,m[0][1]+m[0][0].length,0,-1).setAttribute(attrName,m[0][0])})},quickMatch:":\/\/",regexp:/\bhttps?:\/\/[-.\w]+\/(?:[-+.:\/\w]|%[0-9a-f]{2}|\(\w+\))+\.(?:mp4|ogg|webm)(?!\S)/ig,regexpLimit:50000},"BBCodes":{parser:function(text,matches){var config={bbcodes:{"*":{tagName:"LI"},"B":[],"CENTER":[],"CODE":{defaultAttribute:"lang"},"COLOR":[],"DEL":[],"EMAIL":{contentAttributes:["email"]},"I":[],"IMG":{contentAttributes:["src"],defaultAttribute:"src"},"LIST":{defaultAttribute:"type"},"MEDIA":{contentAttributes:["url"]},"QUOTE":{defaultAttribute:"author"},"S":[],"SIZE":[],"U":[],"UPL-FILE":{contentAttributes:["content"],defaultAttribute:"uuid"},"UPL-IMAGE":{contentAttributes:["content"],defaultAttribute:"uuid"},"UPL-IMAGE-PREVIEW":{defaultAttribute:"url"},"URL":{contentAttributes:["url"]}}};var attributes;var bbcodeConfig;var bbcodeName;var bbcodeSuffix;var pos;var startPos;var textLen=text.length;var uppercaseText='';matches.forEach(function(m){bbcodeName=m[1][0].toUpperCase();if(!(bbcodeName in config.bbcodes)){return}
bbcodeConfig=config.bbcodes[bbcodeName];startPos=m[0][1];pos=startPos+m[0][0].length;try
{parseBBCode()}catch(e){}});function addBBCodeEndTag(){return addEndTag(getTagName(),startPos,pos-startPos)}
function addBBCodeSelfClosingTag(){var tag=addSelfClosingTag(getTagName(),startPos,pos-startPos);tag.setAttributes(attributes);return tag}
function addBBCodeStartTag(){var tag=addStartTag(getTagName(),startPos,pos-startPos);tag.setAttributes(attributes);return tag}
function captureEndTag(){if(!uppercaseText){uppercaseText=text.toUpperCase()}
var match='[/'+bbcodeName+bbcodeSuffix+']',endTagPos=uppercaseText.indexOf(match,pos);if(endTagPos<0){return null}
return addEndTag(getTagName(),endTagPos,match.length)}
function getTagName(){return bbcodeConfig.tagName||bbcodeName}
function parseAttributes(){var firstPos=pos,attrName;attributes={};while(pos<textLen){var c=text[pos];if(" \n\t".indexOf(c)>-1){++pos;continue}
if('/]'.indexOf(c)>-1){return}
var spn=/^[-\w]*/.exec(text.substr(pos,100))[0].length;if(spn){attrName=text.substr(pos,spn).toLowerCase();pos+=spn;if(pos>=textLen){throw ''}
if(text[pos]!=='='){continue}}else if(c==='='&&pos===firstPos){attrName=bbcodeConfig.defaultAttribute||bbcodeName.toLowerCase()}else{throw ''}
if(++pos>=textLen){throw ''}
attributes[attrName]=parseAttributeValue()}}
function parseAttributeValue(){if(text[pos]==='"'||text[pos]==="'"){return parseQuotedAttributeValue()}
var match=/(?:[^\s\]]|[ \t](?!\s*(?:[-\w]+=|\/?\])))*/.exec(text.substr(pos)),attrValue=match[0];pos+=attrValue.length;return attrValue}
function parseBBCode(){parseBBCodeSuffix();if(text[startPos+1]==='/'){if(text[pos]===']'&&bbcodeSuffix===''){++pos;addBBCodeEndTag()}
return}
parseAttributes();if(bbcodeConfig.predefinedAttributes){for(var attrName in bbcodeConfig.predefinedAttributes){if(!(attrName in attributes)){attributes[attrName]=bbcodeConfig.predefinedAttributes[attrName]}}}
if(text[pos]===']'){++pos}else{if(text.substr(pos,2)==='/]'){pos+=2;addBBCodeSelfClosingTag()}
return}
var contentAttributes=[];if(bbcodeConfig.contentAttributes){bbcodeConfig.contentAttributes.forEach(function(attrName){if(!(attrName in attributes)){contentAttributes.push(attrName)}})}
var requireEndTag=(bbcodeSuffix||bbcodeConfig.forceLookahead),endTag=(requireEndTag||contentAttributes.length)?captureEndTag():null;if(endTag){contentAttributes.forEach(function(attrName){attributes[attrName]=text.substr(pos,endTag.getPos()-pos)})}else if(requireEndTag){return}
var tag=addBBCodeStartTag();if(endTag){tag.pairWith(endTag)}}
function parseBBCodeSuffix(){bbcodeSuffix='';if(text[pos]===':'){bbcodeSuffix=/^:\d*/.exec(text.substr(pos))[0];pos+=bbcodeSuffix.length}}
function parseQuotedAttributeValue(){var quote=text[pos],valuePos=pos+1;do{pos=text.indexOf(quote,pos+1);if(pos<0){throw ''}
var n=1;while(text[pos-n]==='\\'){++n}}
while(n%2===0);var attrValue=text.substr(valuePos,pos-valuePos);if(attrValue.indexOf('\\')>-1){attrValue=attrValue.replace(/\\([\\'"])/g,'$1')}
++pos;return attrValue}},quickMatch:"[",regexp:/\[\/?(\*|[-\w]+)(?=[\]\s=:\/])/g,regexpLimit:50000},"Escaper":{parser:function(text,matches){var config={tagName:"ESC"};matches.forEach(function(m){addTagPair(config.tagName,m[0][1],1,m[0][1]+m[0][0].length,0)})},quickMatch:"\\",regexp:/\\[-!#()*+.:<>@[\\\]^_`{|}~]/g,regexpLimit:50000},"FancyPants":{parser:function(text,matches){var config={attrName:"char",tagName:"FP"};var attrName=config.attrName,hasSingleQuote=(text.indexOf("'")>=0),hasDoubleQuote=(text.indexOf('"')>=0),tagName=config.tagName;if(typeof config.disableQuotes==='undefined'){parseSingleQuotes();parseSingleQuotePairs();parseDoubleQuotePairs()}
if(typeof config.disableGuillemets==='undefined'){parseGuillemets()}
if(typeof config.disableMathSymbols==='undefined'){parseNotEqualSign();parseSymbolsAfterDigits();parseFractions()}
if(typeof config.disablePunctuation==='undefined'){parseDashesAndEllipses()}
if(typeof config.disableSymbols==='undefined'){parseSymbolsInParentheses()}
function addTag(tagPos,tagLen,chr,prio){var tag=addSelfClosingTag(tagName,tagPos,tagLen,prio||0);tag.setAttribute(attrName,chr);return tag}
function parseDashesAndEllipses(){if(text.indexOf('...')<0&&text.indexOf('--')<0){return}
var chrs={'--':"\u2013",'---':"\u2014",'...':"\u2026"},regexp=/---?|\.\.\./g,m;while(m=regexp.exec(text)){addTag(m.index,m[0].length,chrs[m[0]])}}
function parseDoubleQuotePairs(){if(hasDoubleQuote){parseQuotePairs('"',/(?:^|\W)".+?"(?!\w)/g,"\u201c","\u201d")}}
function parseFractions(){if(text.indexOf('/')<0){return}
var map={'0/3':"\u2189",'1/10':"\u2152",'1/2':"\u00BD",'1/3':"\u2153",'1/4':"\u00BC",'1/5':"\u2155",'1/6':"\u2159",'1/7':"\u2150",'1/8':"\u215B",'1/9':"\u2151",'2/3':"\u2154",'2/5':"\u2156",'3/4':"\u00BE",'3/5':"\u2157",'3/8':"\u215C",'4/5':"\u2158",'5/6':"\u215A",'5/8':"\u215D",'7/8':"\u215E"};var m,regexp=/\b(?:0\/3|1\/(?:[2-9]|10)|2\/[35]|3\/[458]|4\/5|5\/[68]|7\/8)\b/g;while(m=regexp.exec(text)){addTag(m.index,m[0].length,map[m[0]])}}
function parseGuillemets(){if(text.indexOf('<<')<0){return}
var m,regexp=/<<( ?)(?! )[^\n<>]*?[^\n <>]\1>>(?!>)/g;while(m=regexp.exec(text)){var left=addTag(m.index,2,"\u00AB"),right=addTag(m.index+m[0].length-2,2,"\u00BB");left.cascadeInvalidationTo(right)}}
function parseNotEqualSign(){if(text.indexOf('!=')<0&&text.indexOf('=/=')<0){return}
var m,regexp=/\b (?:!|=\/)=(?= \b)/g;while(m=regexp.exec(text)){addTag(m.index+1,m[0].length-1,"\u2260")}}
function parseQuotePairs(q,regexp,leftQuote,rightQuote){var m;while(m=regexp.exec(text)){var left=addTag(m.index+m[0].indexOf(q),1,leftQuote),right=addTag(m.index+m[0].length-1,1,rightQuote);left.cascadeInvalidationTo(right)}}
function parseSingleQuotePairs(){if(hasSingleQuote){parseQuotePairs("'",/(?:^|\W)'.+?'(?!\w)/g,"\u2018","\u2019")}}
function parseSingleQuotes(){if(!hasSingleQuote){return}
var m,regexp=/[a-z]'|(?:^|\s)'(?=[a-z]|[0-9]{2})/gi;while(m=regexp.exec(text)){addTag(m.index+m[0].indexOf("'"),1,"\u2019",10)}}
function parseSymbolsAfterDigits(){if(!hasSingleQuote&&!hasDoubleQuote&&text.indexOf('x')<0){return}
var map={"'s":"\u2019","'":"\u2032","' ":"\u2032","'x":"\u2032",'"':"\u2033",'" ':"\u2033",'"x':"\u2033"};var m,regexp=/[0-9](?:'s|["']? ?x(?= ?[0-9])|["'])/g;while(m=regexp.exec(text)){if(m[0][m[0].length-1]==='x'){addTag(m.index+m[0].length-1,1,"\u00d7")}
var str=m[0].substr(1,2);if(map[str]){addTag(m.index+1,1,map[str])}}}
function parseSymbolsInParentheses(){if(text.indexOf('(')<0){return}
var chrs={'(c)':"\u00A9",'(r)':"\u00AE",'(tm)':"\u2122"},regexp=/\((?:c|r|tm)\)/gi,m;while(m=regexp.exec(text)){addTag(m.index,m[0].length,chrs[m[0].toLowerCase()])}}}},"HTMLEntities":{parser:function(text,matches){var config={attrName:"char",tagName:"HE"};var tagName=config.tagName,attrName=config.attrName;matches.forEach(function(m){var entity=m[0][0],chr=html_entity_decode(entity);if(chr===entity||chr.charCodeAt(0)<32){return}
addSelfClosingTag(tagName,m[0][1],entity.length).setAttribute(attrName,chr)})},quickMatch:"&",regexp:/&(?:[a-z]+|#(?:[0-9]+|x[0-9a-f]+));/ig,regexpLimit:50000},"Litedown":{parser:function(text,matches){var config={decodeHtmlEntities:!1};var decodeHtmlEntities=config.decodeHtmlEntities;var hasEscapedChars=!1;var hasReferences=!1;var linkReferences={};if(text.indexOf('\\')>=0){hasEscapedChars=!0;text=text.replace(/\\[!"'()*<>[\\\]^_`~]/g,function(str){return{'\\!':"\x1B0",'\\"':"\x1B1","\\'":"\x1B2",'\\(':"\x1B3",'\\)':"\x1B4",'\\*':"\x1B5",'\\<':"\x1B6",'\\>':"\x1B7",'\\[':"\x1B8",'\\\\':"\x1B9",'\\]':"\x1BA",'\\^':"\x1BB",'\\_':"\x1BC",'\\`':"\x1BD",'\\~':"\x1BE"}[str]})}
text+="\n\n\x17";function decode(str){if(HINT.LITEDOWN_DECODE_HTML_ENTITIES&&decodeHtmlEntities&&str.indexOf('&')>-1){str=html_entity_decode(str)}
str=str.replace(/\x1A/g,'');if(hasEscapedChars){str=str.replace(/\x1B./g,function(seq){return{"\x1B0":'!',"\x1B1":'"',"\x1B2":"'","\x1B3":'(',"\x1B4":')',"\x1B5":'*',"\x1B6":'<',"\x1B7":'>',"\x1B8":'[',"\x1B9":'\\',"\x1BA":']',"\x1BB":'^',"\x1BC":'_',"\x1BD":'`',"\x1BE":'~'}[seq]})}
return str}
function isAfterWhitespace(pos){return(pos>0&&isWhitespace(text.charAt(pos-1)))}
function isAlnum(chr){return(' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.indexOf(chr)>0)}
function isBeforeWhitespace(pos){return isWhitespace(text[pos+1])}
function isSurroundedByAlnum(pos,len){return(pos>0&&isAlnum(text[pos-1])&&isAlnum(text[pos+len]))}
function isWhitespace(chr){return(" \n\t".indexOf(chr)>-1)}
function markBoundary(pos){text=text.substr(0,pos)+"\x17"+text.substr(pos+1)}
function overwrite(pos,len){if(len>0){text=text.substr(0,pos)+new Array(1+len).join("\x1A")+text.substr(pos+len)}}
function parseInlineMarkup(str,regexp,tagName){if(text.indexOf(str)===-1){return}
var m;while(m=regexp.exec(text)){var match=m[0],matchPos=m.index,matchLen=match.length,endPos=matchPos+matchLen-2;addTagPair(tagName,matchPos,2,endPos,2);overwrite(matchPos,2);overwrite(endPos,2)}}
function parseAbstractScript(tagName,syntaxChar,shortRegexp,longRegexp){var pos=text.indexOf(syntaxChar);if(pos===-1){return}
parseShortForm(pos);parseLongForm(pos);function parseLongForm(pos){pos=text.indexOf(syntaxChar+'(',pos);if(pos===-1){return}
var m,regexp=longRegexp;regexp.lastIndex=pos;while(m=regexp.exec(text)){var match=m[0],matchPos=m.index,matchLen=match.length;addTagPair(tagName,matchPos,2,matchPos+matchLen-1,1);overwrite(matchPos,matchLen)}
if(match){parseLongForm(pos)}}
function parseShortForm(pos){var m,regexp=shortRegexp;regexp.lastIndex=pos;while(m=regexp.exec(text)){var match=m[0],matchPos=m.index,matchLen=match.length,startPos=matchPos,endLen=(match.substr(-1)===syntaxChar)?1:0,endPos=matchPos+matchLen-endLen;addTagPair(tagName,startPos,1,endPos,endLen)}}}
function setLinkAttributes(tag,linkInfo,attrName){var url=linkInfo.replace(/^\s*/,'').replace(/\s*$/,''),title='',pos=url.indexOf(' ');if(pos!==-1){title=url.substr(pos).replace(/^\s*\S/,'').replace(/\S\s*$/,'');url=url.substr(0,pos)}
if(/^<.+>$/.test(url)){url=url.replace(/^<(.+)>$/,'$1').replace(/\\>/g,'>')}
tag.setAttribute(attrName,decode(url));if(title>''){tag.setAttribute('title',decode(title))}}(function(){var setextLines={};function parse(){matchSetextLines();var blocks=[],blocksCnt=0,codeFence,codeIndent=4,codeTag,lineIsEmpty=!0,lists=[],listsCnt=0,newContext=!1,textBoundary=0,breakParagraph,continuation,ignoreLen,indentStr,indentLen,lfPos,listIndex,maxIndent,minIndent,blockDepth,tagPos,tagLen;var matches=[],m,regexp=/^(?:(?=[-*+\d \t>`~#_])((?: {0,3}>(?:(?!!)|!(?![^\n>]*?!<)) ?)+)?([ \t]+)?(\* *\* *\*[* ]*$|- *- *-[- ]*$|_ *_ *_[_ ]*$)?((?:[-*+]|\d+\.)[ \t]+(?=\S))?[ \t]*(#{1,6}[ \t]+|```+[^`\n]*$|~~~+[^~\n]*$)?)?/gm;while(m=regexp.exec(text)){matches.push(m);if(m.index===regexp.lastIndex){++regexp.lastIndex}}
matches.forEach(function(m){var blockMarks=[],matchPos=m.index,matchLen=m[0].length,startPos,startLen,endPos,endLen;ignoreLen=0;blockDepth=0;continuation=!lineIsEmpty;lfPos=text.indexOf("\n",matchPos);lineIsEmpty=(lfPos===matchPos+matchLen&&!m[3]&&!m[4]&&!m[5]);if(!matchLen){++regexp.lastIndex}
breakParagraph=(lineIsEmpty&&continuation);if(m[1]){blockMarks=getBlockMarks(m[1]);blockDepth=blockMarks.length;ignoreLen=m[1].length;if(codeTag&&codeTag.hasAttribute('blockDepth')){blockDepth=Math.min(blockDepth,codeTag.getAttribute('blockDepth'));ignoreLen=computeBlockIgnoreLen(m[1],blockDepth)}
overwrite(matchPos,ignoreLen)}
if(blockDepth<blocksCnt&&!continuation){newContext=!0;do{var startTag=blocks.pop();addEndTag(startTag.getName(),textBoundary,0).pairWith(startTag)}
while(blockDepth<--blocksCnt);}
if(blockDepth>blocksCnt&&!lineIsEmpty){newContext=!0;do{var tagName=(blockMarks[blocksCnt]==='>!')?'SPOILER':'QUOTE';blocks.push(addStartTag(tagName,matchPos,0,-999))}
while(blockDepth>++blocksCnt);}
var indentWidth=0,indentPos=0;if(m[2]&&!codeFence){indentStr=m[2];indentLen=indentStr.length;do{if(indentStr[indentPos]===' '){++indentWidth}else{indentWidth=(indentWidth+4)&~3}}
while(++indentPos<indentLen&&indentWidth<codeIndent);}
if(codeTag&&!codeFence&&indentWidth<codeIndent&&!lineIsEmpty){newContext=!0}
if(newContext){newContext=!1;if(codeTag){if(textBoundary>codeTag.getPos()){overwrite(codeTag.getPos(),textBoundary-codeTag.getPos());codeTag.pairWith(addEndTag('CODE',textBoundary,0,-1))}else{codeTag.invalidate()}
codeTag=null;codeFence=null}
lists.forEach(function(list){closeList(list,textBoundary)});lists=[];listsCnt=0;if(matchPos){markBoundary(matchPos-1)}}
if(indentWidth>=codeIndent){if(codeTag||!continuation){ignoreLen=(m[1]||'').length+indentPos;if(!codeTag){codeTag=addStartTag('CODE',matchPos+ignoreLen,0,-999)}
m={}}}else{var hasListItem=!!m[4];if(!indentWidth&&!continuation&&!hasListItem){listIndex=-1}else if(continuation&&!hasListItem){listIndex=listsCnt-1}else if(!listsCnt){listIndex=(hasListItem)?0:-1}else{listIndex=0;while(listIndex<listsCnt&&indentWidth>lists[listIndex].maxIndent){++listIndex}}
while(listIndex<listsCnt-1){closeList(lists.pop(),textBoundary);--listsCnt}
if(listIndex===listsCnt&&!hasListItem){--listIndex}
if(hasListItem&&listIndex>=0){breakParagraph=!0;tagPos=matchPos+ignoreLen+indentPos;tagLen=m[4].length;var itemTag=addStartTag('LI',tagPos,tagLen);overwrite(tagPos,tagLen);if(listIndex<listsCnt){addEndTag('LI',textBoundary,0).pairWith(lists[listIndex].itemTag);lists[listIndex].itemTag=itemTag;lists[listIndex].itemTags.push(itemTag)}else{++listsCnt;if(listIndex){minIndent=lists[listIndex-1].maxIndent+1;maxIndent=Math.max(minIndent,listIndex*4)}else{minIndent=0;maxIndent=indentWidth}
var listTag=addStartTag('LIST',tagPos,0);if(m[4].indexOf('.')>-1){listTag.setAttribute('type','decimal');var start=+m[4];if(start!==1){listTag.setAttribute('start',start)}}
lists.push({listTag:listTag,itemTag:itemTag,itemTags:[itemTag],minIndent:minIndent,maxIndent:maxIndent,tight:!0})}}
if(listsCnt&&!continuation&&!lineIsEmpty){if(lists[0].itemTags.length>1||!hasListItem){lists.forEach(function(list){list.tight=!1})}}
codeIndent=(listsCnt+1)*4}
if(m[5]){if(m[5][0]==='#'){startLen=m[5].length;startPos=matchPos+matchLen-startLen;endLen=getAtxHeaderEndTagLen(matchPos+matchLen,lfPos);endPos=lfPos-endLen;addTagPair('H'+/#{1,6}/.exec(m[5])[0].length,startPos,startLen,endPos,endLen);markBoundary(startPos);markBoundary(lfPos);if(continuation){breakParagraph=!0}}else if(m[5][0]==='`'||m[5][0]==='~'){tagPos=matchPos+ignoreLen;tagLen=lfPos-tagPos;if(codeTag&&m[5]===codeFence){codeTag.pairWith(addEndTag('CODE',tagPos,tagLen,-1));addIgnoreTag(textBoundary,tagPos-textBoundary);overwrite(codeTag.getPos(),tagPos+tagLen-codeTag.getPos());codeTag=null;codeFence=null}else if(!codeTag){codeTag=addStartTag('CODE',tagPos,tagLen);codeFence=m[5].replace(/[^`~]+/,'');codeTag.setAttribute('blockDepth',blockDepth);addIgnoreTag(tagPos+tagLen,1);var lang=m[5].replace(/^[`~\s]*/,'').replace(/\s+$/,'');if(lang!==''){codeTag.setAttribute('lang',lang)}}}}else if(m[3]&&!listsCnt&&text[matchPos+matchLen]!=="\x17"){addSelfClosingTag('HR',matchPos+ignoreLen,matchLen-ignoreLen);breakParagraph=!0;markBoundary(lfPos)}else if(setextLines[lfPos]&&setextLines[lfPos].blockDepth===blockDepth&&!lineIsEmpty&&!listsCnt&&!codeTag){addTagPair(setextLines[lfPos].tagName,matchPos+ignoreLen,0,setextLines[lfPos].endPos,setextLines[lfPos].endLen);markBoundary(setextLines[lfPos].endPos+setextLines[lfPos].endLen)}
if(breakParagraph){addParagraphBreak(textBoundary);markBoundary(textBoundary)}
if(!lineIsEmpty){textBoundary=lfPos}
if(ignoreLen){addIgnoreTag(matchPos,ignoreLen,1000)}})}
function closeList(list,textBoundary){addEndTag('LIST',textBoundary,0).pairWith(list.listTag);addEndTag('LI',textBoundary,0).pairWith(list.itemTag);if(list.tight){list.itemTags.forEach(function(itemTag){itemTag.removeFlags(RULE_CREATE_PARAGRAPHS)})}}
function computeBlockIgnoreLen(str,maxBlockDepth){var remaining=str;while(--maxBlockDepth>=0){remaining=remaining.replace(/^ *>!? ?/,'')}
return str.length-remaining.length}
function getAtxHeaderEndTagLen(startPos,endPos){var content=text.substr(startPos,endPos-startPos),m=/[ \t]*#*[ \t]*$/.exec(content);return m[0].length}
function getBlockMarks(str){var blockMarks=[],regexp=/>!?/g,m;while(m=regexp.exec(str)){blockMarks.push(m[0])}
return blockMarks}
function matchSetextLines(){if(text.indexOf('-')===-1&&text.indexOf('=')===-1){return}
var m,regexp=/^(?=[-=>])(?:>!? ?)*(?=[-=])(?:-+|=+) *$/gm;while(m=regexp.exec(text)){var match=m[0],matchPos=m.index;var endPos=matchPos-1;while(endPos>0&&text[endPos-1]===' '){--endPos}
setextLines[matchPos-1]={endLen:matchPos+match.length-endPos,endPos:endPos,blockDepth:match.length-match.replace(/>/g,'').length,tagName:(match[0]==='=')?'H1':'H2'}}}
parse()})();(function(){function parse(){if(text.indexOf(']:')<0){return}
var m,regexp=/^\x1A* {0,3}\[([^\x17\]]+)\]: *([^[\s\x17]+ *(?:"[^\x17]*?"|'[^\x17]*?'|\([^\x17)]*\))?) *(?=$|\x17)\n?/gm;while(m=regexp.exec(text)){addIgnoreTag(m.index,m[0].length);var id=m[1].toLowerCase();if(!linkReferences[id]){hasReferences=!0;linkReferences[id]=m[2]}}}
parse()})();(function(){function parse(){var markers=getInlineCodeMarkers(),i=-1,cnt=markers.length;while(++i<(cnt-1)){var pos=markers[i].next,j=i;if(text[markers[i].pos]!=='`'){++markers[i].pos;--markers[i].len}
while(++j<cnt&&markers[j].pos===pos){if(markers[j].len===markers[i].len){addInlineCodeTags(markers[i],markers[j]);i=j;break}
pos=markers[j].next}}}
function addInlineCodeTags(left,right){var startPos=left.pos,startLen=left.len+left.trimAfter,endPos=right.pos-right.trimBefore,endLen=right.len+right.trimBefore;addTagPair('C',startPos,startLen,endPos,endLen);overwrite(startPos,endPos+endLen-startPos)}
function getInlineCodeMarkers(){var pos=text.indexOf('`');if(pos<0){return[]}
var regexp=/(`+)(\s*)[^\x17`]*/g,trimNext=0,markers=[],_text=text.replace(/\x1BD/g,'\\`'),m;regexp.lastIndex=pos;while(m=regexp.exec(_text)){markers.push({pos:m.index,len:m[1].length,trimBefore:trimNext,trimAfter:m[2].length,next:m.index+m[0].length});trimNext=m[0].length-m[0].replace(/\s+$/,'').length}
return markers}
parse()})();(function(){function parse(){var pos=text.indexOf('![');if(pos===-1){return}
if(text.indexOf('](',pos)>0){parseInlineImages()}
if(hasReferences){parseReferenceImages()}}
function addImageTag(startPos,endPos,endLen,linkInfo,alt){var tag=addTagPair('IMG',startPos,2,endPos,endLen);setLinkAttributes(tag,linkInfo,'src');tag.setAttribute('alt',decode(alt));overwrite(startPos,endPos+endLen-startPos)}
function parseInlineImages(){var m,regexp=/!\[(?:[^\x17[\]]|\[[^\x17[\]]*\])*\]\(( *(?:[^\x17\s()]|\([^\x17\s()]*\))*(?=[ )]) *(?:"[^\x17]*?"|'[^\x17]*?'|\([^\x17)]*\))? *)\)/g;while(m=regexp.exec(text)){var linkInfo=m[1],startPos=m.index,endLen=3+linkInfo.length,endPos=startPos+m[0].length-endLen,alt=m[0].substr(2,m[0].length-endLen-2);addImageTag(startPos,endPos,endLen,linkInfo,alt)}}
function parseReferenceImages(){var m,regexp=/!\[((?:[^\x17[\]]|\[[^\x17[\]]*\])*)\](?: ?\[([^\x17[\]]+)\])?/g;while(m=regexp.exec(text)){var startPos=m.index,endPos=startPos+2+m[1].length,endLen=1,alt=m[1],id=alt;if(m[2]>''&&linkReferences[m[2]]){endLen=m[0].length-alt.length-2;id=m[2]}else if(!linkReferences[id]){continue}
addImageTag(startPos,endPos,endLen,linkReferences[id],alt)}}
parse()})();(function(){function parse(){parseInlineMarkup('>!',/>![^\x17]+?!</g,'ISPOILER');parseInlineMarkup('||',/\|\|[^\x17]+?\|\|/g,'ISPOILER')}
parse()})();(function(){function parse(){if(text.indexOf('](')!==-1){parseInlineLinks()}
if(text.indexOf('<')!==-1){parseAutomaticLinks()}
if(hasReferences){parseReferenceLinks()}}
function addLinkTag(startPos,endPos,endLen,linkInfo){var priority=(endLen===1)?1:-1;var tag=addTagPair('URL',startPos,1,endPos,endLen,priority);setLinkAttributes(tag,linkInfo,'url');overwrite(startPos,1);overwrite(endPos,endLen)}
function getLabels(){var labels={},m,regexp=/\[((?:[^\x17[\]]|\[[^\x17[\]]*\])*)\]/g;while(m=regexp.exec(text)){labels[m.index]=m[1].toLowerCase()}
return labels}
function parseAutomaticLinks(){var m,regexp=/<[-+.\w]+([:@])[^\x17\s>]+?(?:>|\x1B7)/g;while(m=regexp.exec(text)){var content=decode(m[0].replace(/\x1B/g,"\\\x1B")).replace(/^<(.+)>$/,'$1'),startPos=m.index,endPos=startPos+m[0].length-1,tagName=(m[1]===':')?'URL':'EMAIL',attrName=tagName.toLowerCase();addTagPair(tagName,startPos,1,endPos,1).setAttribute(attrName,content)}}
function parseInlineLinks(){var m,regexp=/\[(?:[^\x17[\]]|\[[^\x17[\]]*\])*\]\(( *(?:\([^\x17\s()]*\)|[^\x17\s)])*(?=[ )]) *(?:"[^\x17]*?"|'[^\x17]*?'|\([^\x17)]*\))? *)\)/g;while(m=regexp.exec(text)){var linkInfo=m[1],startPos=m.index,endLen=3+linkInfo.length,endPos=startPos+m[0].length-endLen;addLinkTag(startPos,endPos,endLen,linkInfo)}}
function parseReferenceLinks(){var labels=getLabels(),startPos;for(startPos in labels){var id=labels[startPos],labelPos=+startPos+2+id.length,endPos=labelPos-1,endLen=1;if(text[labelPos]===' '){++labelPos}
if(labels[labelPos]>''&&linkReferences[labels[labelPos]]){id=labels[labelPos];endLen=labelPos+2+id.length-endPos}
if(linkReferences[id]){addLinkTag(+startPos,endPos,endLen,linkReferences[id])}}}
parse()})();(function(){function parse(){parseInlineMarkup('~~',/~~[^\x17]+?~~(?!~)/g,'DEL')}
parse()})();(function(){function parse(){parseAbstractScript('SUB','~',/~[^\x17\s!"#$%&\'()*+,\-.\/:;<=>?@[\]^_`{}|~]+~?/g,/~\([^\x17()]+\)/g)}
parse()})();(function(){function parse(){parseAbstractScript('SUP','^',/\^[^\x17\s!"#$%&\'()*+,\-.\/:;<=>?@[\]^_`{}|~]+\^?/g,/\^\([^\x17()]+\)/g)}
parse()})();(function(){var closeEm;var closeStrong;var emPos;var emEndPos;var remaining;var strongPos;var strongEndPos;function parse(){parseEmphasisByCharacter('*',/\*+/g);parseEmphasisByCharacter('_',/_+/g)}
function adjustEndingPositions(){if(closeEm&&closeStrong){if(emPos<strongPos){emEndPos+=2}else{++strongEndPos}}}
function adjustStartingPositions(){if(emPos>=0&&emPos===strongPos){if(closeEm){emPos+=2}else{++strongPos}}}
function closeSpans(){if(closeEm){--remaining;addTagPair('EM',emPos,1,emEndPos,1);emPos=-1}
if(closeStrong){remaining-=2;addTagPair('STRONG',strongPos,2,strongEndPos,2);strongPos=-1}}
function getEmphasisByBlock(regexp,pos){var block=[],blocks=[],breakPos=text.indexOf("\x17",pos),m;regexp.lastIndex=pos;while(m=regexp.exec(text)){var matchPos=m.index,matchLen=m[0].length;if(matchPos>breakPos){blocks.push(block);block=[];breakPos=text.indexOf("\x17",matchPos)}
if(!ignoreEmphasis(matchPos,matchLen)){block.push([matchPos,matchLen])}}
blocks.push(block);return blocks}
function ignoreEmphasis(pos,len){return(text.charAt(pos)==='_'&&len===1&&isSurroundedByAlnum(pos,len))}
function openSpans(pos){if(remaining&1){emPos=pos-remaining}
if(remaining&2){strongPos=pos-remaining}}
function parseEmphasisByCharacter(character,regexp){var pos=text.indexOf(character);if(pos===-1){return}
getEmphasisByBlock(regexp,pos).forEach(processEmphasisBlock)}
function processEmphasisBlock(block){emPos=-1,strongPos=-1;block.forEach(function(pair){processEmphasisMatch(pair[0],pair[1])})}
function processEmphasisMatch(matchPos,matchLen){var canOpen=!isBeforeWhitespace(matchPos+matchLen-1),canClose=!isAfterWhitespace(matchPos),closeLen=(canClose)?Math.min(matchLen,3):0;closeEm=!!(closeLen&1)&&emPos>=0;closeStrong=!!(closeLen&2)&&strongPos>=0;emEndPos=matchPos;strongEndPos=matchPos;remaining=matchLen;adjustStartingPositions();adjustEndingPositions();closeSpans();remaining=(canOpen)?Math.min(remaining,3):0;openSpans(matchPos+matchLen)}
parse()})();(function(){function parse(){var pos=text.indexOf("  \n");while(pos>0){addBrTag(pos+2).cascadeInvalidationTo(addVerbatim(pos+2,1));pos=text.indexOf("  \n",pos+3)}}
parse()})()}},"MediaEmbed":{parser:function(text,matches){var config={tagName:"MEDIA"};matches.forEach(function(m){var tagName=config.tagName,url=m[0][0],pos=m[0][1],len=url.length;addSelfClosingTag(tagName,pos,len,-10).setAttribute('url',url)})},quickMatch:":\/\/",regexp:/\bhttps?:\/\/[^["'\s]+/ig,regexpLimit:50000},"PipeTables":{parser:function(text,matches){var config={overwriteEscapes:!0,overwriteMarkdown:!0};var pos,table=null,tableTag,tables,_text=text;if(config.overwriteMarkdown){overwriteMarkdown()}
if(config.overwriteEscapes){overwriteEscapes()}
captureTables();processTables();function addLine(line){var ignoreLen=0;if(!table){table={rows:[]};ignoreLen=/^ */.exec(line)[0].length;line=line.substr(ignoreLen)}
line=line.replace(/^( *)\|/,'$1 ').replace(/\|( *)$/,' $1');table.rows.push({line:line,pos:pos+ignoreLen})}
function addTableBody(){var i=1,cnt=table.rows.length;while(++i<cnt){addTableRow('TD',table.rows[i])}
createBodyTags(table.rows[2].pos,pos)}
function addTableCell(tagName,align,content){var startPos=pos,endPos=startPos+content.length,ignoreLen;pos=endPos;var m=/^( *).*?( *)$/.exec(content);if(m[1]){ignoreLen=m[1].length;createIgnoreTag(startPos,ignoreLen);startPos+=ignoreLen}
if(m[2]){ignoreLen=m[2].length;createIgnoreTag(endPos-ignoreLen,ignoreLen);endPos-=ignoreLen}
createCellTags(tagName,startPos,endPos,align)}
function addTableHead(){addTableRow('TH',table.rows[0]);createHeadTags(table.rows[0].pos,pos)}
function addTableRow(tagName,row){pos=row.pos;row.line.split('|').forEach(function(str,i){if(i>0){createIgnoreTag(pos,1);++pos}
var align=(!table.cols[i])?'':table.cols[i];addTableCell(tagName,align,str)});createRowTags(row.pos,pos)}
function captureTables(){table=null;tables=[];pos=0;_text.split("\n").forEach(function(line){if(line.indexOf('|')<0){endTable()}else{addLine(line)}
pos+=1+line.length});endTable()}
function createBodyTags(startPos,endPos){addTagPair('TBODY',startPos,0,endPos,0,-103)}
function createCellTags(tagName,startPos,endPos,align){var tag;if(startPos===endPos){tag=addSelfClosingTag(tagName,startPos,0,-101)}else{tag=addTagPair(tagName,startPos,0,endPos,0,-101)}
if(align){tag.setAttribute('align',align)}}
function createHeadTags(startPos,endPos){addTagPair('THEAD',startPos,0,endPos,0,-103)}
function createIgnoreTag(pos,len){tableTag.cascadeInvalidationTo(addIgnoreTag(pos,len,1000))}
function createRowTags(startPos,endPos){addTagPair('TR',startPos,0,endPos,0,-102)}
function createSeparatorTag(row){createIgnoreTag(row.pos-1,1+row.line.length)}
function createTableTags(startPos,endPos){tableTag=addTagPair('TABLE',startPos,0,endPos,0,-104)}
function endTable(){if(hasValidTable()){table.cols=parseColumnAlignments(table.rows[1].line);tables.push(table)}
table=null}
function hasValidTable(){return(table&&table.rows.length>2&&isValidSeparator(table.rows[1].line))}
function isValidSeparator(line){return/^ *:?-+:?(?:(?:\+| *\| *):?-+:?)+ */.test(line)}
function overwriteBlockquoteCallback(str){return str.replace(/[!>]/g,' ')}
function overwriteEscapes(){if(_text.indexOf('\\|')>-1){_text=_text.replace(/\\[\\|]/g,'..')}}
function overwriteInlineCodeCallback(str){return str.replace(/\|/g,'.')}
function overwriteMarkdown(){if(_text.indexOf('`')>-1){_text=_text.replace(/`[^`]*`/g,overwriteInlineCodeCallback)}
if(_text.indexOf('>')>-1){_text=_text.replace(/^(?:>!? ?)+/gm,overwriteBlockquoteCallback)}}
function parseColumnAlignments(line){var align=['','right','left','center'],cols=[],regexp=/(:?)-+(:?)/g,m;while(m=regexp.exec(line)){var key=(m[1]?2:0)+(m[2]?1:0);cols.push(align[key])}
return cols}
function processCurrentTable(){var firstRow=table.rows[0],lastRow=table.rows[table.rows.length-1];createTableTags(firstRow.pos,lastRow.pos+lastRow.line.length);addTableHead();createSeparatorTag(table.rows[1]);addTableBody()}
function processTables(){var i=-1,cnt=tables.length;while(++i<cnt){table=tables[i];processCurrentTable()}}},quickMatch:"|"},"Preg":{parser:function(text,matches){var config={generics:[["USERMENTION",/\B@([a-z0-9_-]+)(?!#)/ig,0,["","username"]],["POSTMENTION",/\B@([a-z0-9_-]+)#(\d+)/ig,0,["","username","id"]]]};config.generics.forEach(function(entry){var tagName=entry[0],regexp=entry[1],passthroughIdx=entry[2],map=entry[3],m;regexp.lastIndex=0;while(m=regexp.exec(text)){var startTagPos=m.index,matchLen=m[0].length,tag;if(HINT.PREG_HAS_PASSTHROUGH&&passthroughIdx&&m[passthroughIdx]!==''){var contentPos=text.indexOf(m[passthroughIdx],startTagPos),contentLen=m[passthroughIdx].length,startTagLen=contentPos-startTagPos,endTagPos=contentPos+contentLen,endTagLen=matchLen-(startTagLen+contentLen);tag=addTagPair(tagName,startTagPos,startTagLen,endTagPos,endTagLen,-100)}else{tag=addSelfClosingTag(tagName,startTagPos,matchLen,-100)}
map.forEach(function(attrName,i){if(attrName&&typeof m[i]!=='undefined'){tag.setAttribute(attrName,m[i])}})}})}}};var pos;var registeredVars={"MediaEmbed.hosts":{"247sports.com":"twentyfoursevensports","8tracks.com":"eighttracks","abcnews.go.com":"abcnews","amazon.ca":"amazon","amazon.co.jp":"amazon","amazon.co.uk":"amazon","amazon.com":"amazon","amazon.de":"amazon","amazon.es":"amazon","amazon.fr":"amazon","amazon.in":"amazon","amazon.it":"amazon","anchor.fm":"anchor","archive.org":"internetarchive","audioboo.fm":"audioboom","audioboom.com":"audioboom","audiomack.com":"audiomack","bandcamp.com":"bandcamp","bbc.co.uk":"bbcnews","bbc.com":"bbcnews","bitchute.com":"bitchute","bleacherreport.com":"bleacherreport","break.com":"break","castos.com":"castos","cbsnews.com":"cbsnews","cc.com":"comedycentral","channel.nationalgeographic.com":"natgeochannel","clyp.it":"clyp","cnbc.com":"cnbc","cnn.com":"cnn","codepen.io":"codepen","comedycentral.com":"comedycentral","coub.com":"coub","dai.ly":"dailymotion","dailymotion.com":"dailymotion","democracynow.org":"democracynow","docs.google.com":"googlesheets","drive.google.com":"googledrive","dumpert.nl":"dumpert","espn.com":"espn","espn.go.com":"espn","facebook.com":"facebook","falstad.com":"falstad","flic.kr":"flickr","flickr.com":"flickr","funnyordie.com":"funnyordie","gameclips.io":"xboxclips","gamerdvr.com":"xboxdvr","gamespot.com":"gamespot","gametrailers.com":"gametrailers","gettyimages.be":"getty","gettyimages.cn":"getty","gettyimages.co.jp":"getty","gettyimages.co.uk":"getty","gettyimages.com":"getty","gettyimages.com.au":"getty","gettyimages.de":"getty","gettyimages.dk":"getty","gettyimages.es":"getty","gettyimages.fr":"getty","gettyimages.ie":"getty","gettyimages.it":"getty","gettyimages.nl":"getty","gettyimages.pt":"getty","gettyimages.se":"getty","gfycat.com":"gfycat","gifs.com":"gifs","giphy.com":"giphy","github.com":"gist","globalnews.ca":"globalnews","gofundme.com":"gofundme","gty.im":"getty","hudl.com":"hudl","hulu.com":"hulu","ign.com":"ign","imdb.com":"imdb","imgur.com":"imgur","indiegogo.com":"indiegogo","instagram.com":"instagram","izlesene.com":"izlesene","jsfiddle.net":"jsfiddle","jwplatform.com":"jwplatform","kaltura.com":"kaltura","kickstarter.com":"kickstarter","libsyn.com":"libsyn","link.brightcove.com":"brightcove","link.tospotify.com":"spotify","liveleak.com":"liveleak","livestre.am":"livestream","livestream.com":"livestream","medium.com":"medium","megaphone.fm":"megaphone","megaphone.link":"megaphone","metacafe.com":"metacafe","mixcloud.com":"mixcloud","mixer.com":"mixer","mlb.com":"mlb","money.cnn.com":"cnnmoney","mrctv.org":"mrctv","msnbc.com":"msnbc","my.mail.ru":"mailru","n.pr":"npr","nbcnews.com":"nbcnews","nbcsports.com":"nbcsports","nhl.com":"nhl","npr.org":"npr","nytimes.com":"nytimes","open.spotify.com":"spotify","orfium.com":"orfium","pastebin.com":"pastebin","pinterest.com":"pinterest","play.spotify.com":"spotify","players.brightcove.net":"brightcove","plus.google.com":"googleplus","podbean.com":"podbean","prezi.com":"prezi","reddit.com":"reddit","rumble.com":"rumble","rutube.ru":"rutube","scribd.com":"scribd","sendvid.com":"sendvid","slideshare.net":"slideshare","soundcloud.com":"soundcloud","sporcle.com":"sporcle","sportsnet.ca":"sportsnet","spreaker.com":"spreaker","stitcher.com":"stitcher","store.steampowered.com":"steamstore","strawpoll.me":"strawpoll","streamable.com":"streamable","streamja.com":"streamja","t.me":"telegram","teamcoco.com":"teamcoco","ted.com":"ted","theatlantic.com":"theatlantic","theguardian.com":"theguardian","theonion.com":"theonion","tiktok.com":"tiktok","tmz.com":"tmz","tradingview.com":"tradingview","traileraddict.com":"traileraddict","trendingviews.co":"trendingviews","tumblr.com":"tumblr","twitch.tv":"twitch","twitter.com":"twitter","ustream.tv":"ustream","vbox7.com":"vbox7","veoh.com":"veoh","vevo.com":"vevo","video.foxnews.com":"foxnews","video.khl.ru":"khl","video.nationalgeographic.com":"natgeovideo","videodetective.com":"videodetective","vimeo.com":"vimeo","vine.co":"vine","vk.com":"vk","vkontakte.ru":"vk","voca.ro":"vocaroo","vocaroo.com":"vocaroo","vox.com":"vox","washingtonpost.com":"washingtonpost","wistia.com":"wistia","worldstarhiphop.com":"wshh","wsj.com":"wsj","xboxclips.com":"xboxclips","xboxdvr.com":"xboxdvr","youku.com":"youku","youtu.be":"youtube","youtube.com":"youtube"},"MediaEmbed.sites":{"abcnews":[[[/abcnews\.go\.com\/(?:video\/embed\?id=|[^\/]+\/video\/[^\/]+-)(\d+)/,o85888FAE]],[]],"amazon":[[[/\/(?:dp|gp\/product)\/([A-Z0-9]+)/,o85888FAE],[/amazon\.(?:co\.)?(ca|de|es|fr|in|it|jp|uk)/,["","tld"]]],[]],"anchor":[[[/anchor.fm\/[-\w]+\/episodes\/(?:[-\w]+-)(\w+)(?![-\w])/,o85888FAE]],[]],"audioboom":[[[/audioboo(?:\.f|m\.co)m\/(?:boo|post)s\/(\d+)/,o85888FAE]],[]],"audiomack":[[[/audiomack\.com\/(album|song)\/([-\w]+)\/([-\w]+)/,["","mode","artist","title"]],[/audiomack\.com\/([-\w]+)\/(album|song)\/([-\w]+)/,["","artist","mode","title"]]],[]],"bandcamp":[[],[{extract:[[/\/album=(\d+)/,oA60012B9]],match:[[/bandcamp\.com\/album\/./,oB4E9AE58]]},{extract:[[/"album_id":(\d+)/,oA60012B9],[/"track_num":(\d+)/,["","track_num"]],[/\/track=(\d+)/,o5F5D8CFC]],match:[[/bandcamp\.com\/track\/./,oB4E9AE58]]}]],"bbcnews":[[[/bbc\.co(?:m|\.uk)\/news\/(?:av|video_and_audio)\/(?:\w+-)+(\d+)/,o85888FAE],[/bbc\.co(?:m|\.uk)\/news\/(?:av|video_and_audio)\/embed\/(\w+\/\d+)/,o85888FAE],[/bbc\.co(?:m|\.uk)\/news\/(?:av|video_and_audio)\/\w+\/(\d+)/,o85888FAE]],[]],"bitchute":[[[/bitchute\.com\/(?:embed|video)\/([-\w]+)/,o85888FAE]],[]],"bleacherreport":[[],[{extract:[[/id="video-([-\w]+)/,o85888FAE],[/video_embed\?id=([-\w]+)/,o85888FAE]],match:[[/\/articles\/./,oB4E9AE58]]}]],"break":[[[/break\.com\/video\/.*-(\d+)$/,o85888FAE]],[]],"brightcove":[[[/link\.brightcove\.com\/services\/player\/bcpid(\d+).*?bckey=([-,~\w]+).*?bctid=(\d+)/,["","bcpid","bckey","bctid"]],[/players\.brightcove\.net\/(\d+)\/.*?videoId=(\d+)/,["","bcpid","bctid"]]],[]],"castos":[oFF5E442E,[{extract:oFF5E442E,match:[[/castos\.com\/(?:podcasts\/[^\/]*\/)?episodes\/./,oB4E9AE58]]}]],"cbsnews":[[[/cbsnews\.com\/videos?\/(?!watch\/)([-\w]+)/,o85888FAE],[/cbsnews\.com\/video\/watch\/\?id=(\d+)/,o85888FAE]],[]],"clyp":[[[/clyp\.it\/(?!user\/)(\w+)/,o85888FAE]],[]],"cnbc":[[[/cnbc\.com\/gallery\/\?video=(\d+)/,o85888FAE]],[{extract:[[/byGuid=(\d+)/,o85888FAE]],match:[[/cnbc\.com\/video\/20\d\d\/\d\d\/\d\d\/\w/,oB4E9AE58]]}]],"cnn":[[[/cnn.com\/videos\/(.*\.cnn)/,o85888FAE],[/cnn\.com\/video\/data\/2\.0\/video\/(.*\.cnn)/,o85888FAE]],[]],"cnnmoney":[[[/money\.cnn\.com\/video\/(.*\.cnnmoney)/,o85888FAE]],[]],"codepen":[[[/codepen\.io\/([-\w]+)\/(?:details|embed|full|live|pen)\/(\w+)/,oEDE19F33]],[]],"comedycentral":[[],[{extract:[[/(mgid:arc:(?:episode|video):[.\w]+:[-\w]+)/,o85888FAE]],match:[[/c(?:c|omedycentral)\.com\/(?:full-episode|video-clip)s\//,oB4E9AE58]]}]],"coub":[[[/coub\.com\/view\/(\w+)/,o85888FAE]],[]],"dailymotion":[[[/dai\.ly\/([a-z0-9]+)/i,o85888FAE],[/dailymotion\.com\/(?:live\/|swf\/|user\/[^#]+#video=|(?:related\/\d+\/)?video\/)([a-z0-9]+)/i,o85888FAE],[/start=(\d+)/,o90B2B224]],[]],"democracynow":[[[/democracynow.org\/(?:embed\/)?((?:\w+\/)?\d+\/\d+\/\d+(?:\/\w+)?)/,o85888FAE]],[{extract:[[/democracynow\.org\/((?:\w+\/)?\d+\/\d+\/\d+(?:\/\w+)?)' rel='canonical/,o85888FAE]],match:[[/m\.democracynow\.org\/stories\/\d/,oB4E9AE58]]}]],"dumpert":[[[/dumpert\.nl\/(?:item|mediabase)\/(\d+[\/_]\w+)/,o85888FAE]],[]],"eighttracks":[[[/8tracks\.com\/[-\w]+\/(\d+)(?=#|$)/,o85888FAE]],[{extract:[[/eighttracks:\/\/mix\/(\d+)/,o85888FAE]],match:[[/8tracks\.com\/[-\w]+\/\D/,oB4E9AE58]]}]],"espn":[[[/video\/(?:clip(?:\?id=|\/_\/id\/))?(\d+)/,o85888FAE]],[]],"facebook":[[[/\/(?!(?:apps|developers|graph)\.)[-\w.]*facebook\.com\/(?:[\/\w]+\/permalink|(?!marketplace\/|pages\/|groups\/).*?)(?:\/|fbid=|\?v=)(\d+)(?=$|[\/?&#])/,o85888FAE],[/facebook\.com\/([.\w]+)\/(?=(?:post|video)s?\/)([pv])/,["","user","type"]],[/facebook\.com\/video\/(?=post|video)([pv])/,oD276C2BF],[/facebook\.com\/watch\/\?([pv])=/,oD276C2BF]],[]],"falstad":[[[/falstad\.com\/circuit\/circuitjs\.html\?c(?:ct=([^&]+)|tz=([-+=\w]+))/,["","cct","ctz"]]],[]],"flickr":[[oBF39CE41,[/flic\.kr\/(?!p\/)[^\/]+\/(\d+)/,o85888FAE]],[{extract:[oBF39CE41],match:[[/flic\.kr\/p\/(\w+)/,["","short"]]],url:"https:\/\/www.flickr.com\/photo.gne?rb=1&short={@short}"}]],"foxnews":[[[/video\.foxnews\.com\/v\/(\d+)/,o85888FAE]],[]],"funnyordie":[[[/funnyordie\.com\/videos\/([0-9a-f]+)/,o85888FAE]],[]],"gamespot":[[[/gamespot\.com.*?\/(?:events|videos)\/.*?-(\d+)\/(?:[#?].*)?$/,o85888FAE]],[]],"gametrailers":[[],[{extract:[[o9338E0AD,o85888FAE]],match:[[/gametrailers\.com\/(?:full-episode|review|video)s\//,oB4E9AE58]]}]],"getty":[[[/gty\.im\/(\d+)/,o85888FAE],[/gettyimages\.[.\w]+\/detail(?=\/).*?\/(\d+)/,o85888FAE],[/#[-\w]*picture-id(\d+)$/,o85888FAE]],[{extract:[[/"height":[ "]*(\d+)/,oF3C0ADD0],[/"width":[ "]*(\d+)/,o06856E8A],[/\bid[=:]['"]?([-=\w]+)/,["","et"]],[/\bsig[=:]['"]?([-=\w]+)/,["","sig"]]],match:o0E3C680A,url:"https:\/\/embed.gettyimages.com\/preview\/{@id}"}]],"gfycat":[[[/gfycat\.com\/(?!gaming|reactions|stickers|gifs\/tag)(?:gifs\/detail\/|ifr(?:ame)?\/)?(\w+)/,o85888FAE]],[{extract:[[/\/ifr\/(\w+)/,o85888FAE]],match:[[/gfycat\.com\/(?!gaming|reactions|stickers|gifs\/tag)(?:gifs\/detail\/|ifr(?:ame)?\/)?[a-z]/,oB4E9AE58]],url:"https:\/\/gfycat.com\/ifr\/{@id}"},{extract:[[/"height":(\d+)/,oF3C0ADD0],[/"width":(\d+)/,o06856E8A]],match:o0E3C680A,url:"https:\/\/api.gfycat.com\/v1\/oembed?url=https:\/\/gfycat.com\/{@id}"}]],"gifs":[[[/gifs\.com\/(?:gif\/)?(\w+)/,o85888FAE]],[{extract:[[/meta property="og:image:width" content="(\d+)/,o06856E8A],[/meta property="og:image:height" content="(\d+)/,oF3C0ADD0]],match:o0E3C680A,url:"https:\/\/gifs.com\/gif\/{@id}"}]],"giphy":[[[/giphy\.com\/(gif|video|webp)\w+\/(?:[-\w]+-)*(\w+)/,["","type","id"]],[/giphy\.com\/media\/(\w+)\/\w+\.(gif|webp)/,oF5EDDAF6],[/i\.giphy\.com\/(\w+)\.(gif|webp)/,oF5EDDAF6]],[{extract:[[/"height"\s*:\s*(\d+)/,oF3C0ADD0],[/"width"\s*:\s*(\d+)/,o06856E8A]],match:o0E3C680A,url:"https:\/\/giphy.com\/services\/oembed?url=https:\/\/media.giphy.com\/media\/{@id}\/giphy.gif"}]],"gist":[[[/gist\.github\.com\/((?:\w+\/)?[\da-f]+(?:\/[\da-f]+)?)/,o85888FAE]],[]],"globalnews":[oD4A66010,[{extract:oD4A66010,match:[[/globalnews\.ca\/video\/rd\//,oB4E9AE58]]}]],"gofundme":[[[/gofundme\.com\/(\w+)(?![^#?])/,o85888FAE]],[]],"googledrive":[[[/drive\.google\.com\/.*?(?:file\/d\/|id=)([-\w]+)/,o85888FAE]],[]],"googleplus":[[[/\/\/plus\.google\.com\/(?:u\/\d+\/)?(?:\+([^\/]+)|(\d+))\/posts\/(\w+)/,["","name","oid","pid"]]],[]],"googlesheets":[[[/docs\.google\.com\/spreadsheet(?:\/ccc\?key=|(?:[^e]\/)+)((?:e\/)?[-\w]+)/,o85888FAE],[/oid=(\d+)/,["","oid"]],[/#gid=(\d+)/,["","gid"]],[/\/pub(chart)/,oD276C2BF]],[]],"hudl":[[[/hudl\.com\/athlete\/(\d+)\/highlights\/([\da-f]+)/,o86C6DC19],o3773CEC3,oF7034233],[{extract:[o3773CEC3,oF7034233],match:[[/hudl\.com\/v\//,oB4E9AE58]]}]],"hulu":[[],[{extract:[[/eid=([-\w]+)/,o85888FAE]],match:[[/hulu\.com\/watch\//,oB4E9AE58]]}]],"ign":[[[/(https?:\/\/.*?ign\.com\/videos\/.+)/i,o85888FAE]],[]],"imdb":[[[/imdb\.com\/[\/\w]+\/vi(\d+)/,o85888FAE]],[]],"imgur":[[[/imgur\.com\/(a\/\w+)/,o85888FAE],[/i\.imgur\.com\/(\w{5,7})[lms]?\./,o85888FAE],[/imgur\.com\/(\w+)(?![\w.\/])/,o85888FAE]],[{extract:[[/data-id="([\w\/]+)"/,o85888FAE]],match:[[/imgur\.com\/(?![art]\/|user\/)((?:gallery\/)?\w+)(?![\w.])/,["","path"]]],url:"https:\/\/api.imgur.com\/oembed.xml?url=\/{@path}"}]],"indiegogo":[[[/indiegogo\.com\/projects\/([-\w]+)/,o85888FAE]],[]],"instagram":[[[/instagram\.com\/(?:p|tv)\/([-\w]+)/,o85888FAE]],[]],"internetarchive":[[],[{extract:[[/meta property="twitter:player" content="https:\/\/archive.org\/embed\/([^\/"]+)/,o85888FAE],[/meta property="og:video:width" content="(\d+)/,o06856E8A],[/meta property="og:video:height" content="(\d+)/,oF3C0ADD0]],match:[[/archive\.org\/(?:details|embed)\//,oB4E9AE58]]}]],"izlesene":[[[/izlesene\.com\/video\/[-\w]+\/(\d+)/,o85888FAE]],[]],"jsfiddle":[[[/jsfiddle.net\/(?:(\w+)\/)?(?!\d+\b|embedded\b|show\b)(\w+)\b(?:\/(\d+)\b)?/,["","user","id","revision"]]],[]],"jwplatform":[[[/jwplatform\.com\/\w+\/([-\w]+)/,o85888FAE]],[]],"kaltura":[[[/\/p(?:artner_id)?\/(\d+)\//,["","partner_id"]],[/\/sp\/(\d+)\//,["","sp"]],[/\/uiconf_id\/(\d+)\//,["","uiconf_id"]],[/\bentry_id[=\/](\w+)/,["","entry_id"]]],[{extract:[[/kaltura\.com\/+p\/(\d+)\/sp\/(\d+)\/\w*\/uiconf_id\/(\d+)\/.*?\bentry_id=(\w+)/,["","partner_id","sp","uiconf_id","entry_id"]]],match:[[/kaltura\.com\/(?:media\/t|tiny)\/./,oB4E9AE58]]}]],"khl":[[],[{extract:[[/\/feed\/start\/([\/\w]+)/,o85888FAE]],match:[[/video\.khl\.ru\/(?:event|quote)s\/\d/,oB4E9AE58]]}]],"kickstarter":[[[/kickstarter\.com\/projects\/([^\/]+\/[^\/?]+)(?:\/widget\/(?:(card)|(video)))?/,["","id","card","video"]]],[]],"libsyn":[[],[{extract:[[/embed\/episode\/id\/(\d+)/,o85888FAE]],match:[[/(?!\.mp3)....$/,oB4E9AE58]]}]],"liveleak":[[[/liveleak\.com\/(?:e\/|view\?i=)(\w+)/,o85888FAE]],[{extract:[[/liveleak\.com\/e\/(\w+)/,o85888FAE]],match:[[/liveleak\.com\/view\?t=/,oB4E9AE58]]}]],"livestream":[[[/livestream\.com\/accounts\/(\d+)\/events\/(\d+)/,oD0874E6E],[/\/videos\/(\d+)/,oC59CF925],[/original\.livestream\.com\/(\w+)\/video\?clipId=([-\w]+)/,o6ACB7DBF]],[{extract:[[/accounts\/(\d+)\/events\/(\d+)/,oD0874E6E]],match:[[/livestream\.com\/(?!accounts\/\d+\/events\/\d)/,oB4E9AE58]]},{extract:[[/\/\/original\.livestream\.com\/(\w+)\/video\/([-\w]+)/,o6ACB7DBF]],match:[[/livestre.am/,oB4E9AE58]]}]],"mailru":[[],[{extract:[[/"itemId": ?"?(\d+)/,o85888FAE]],match:[[/my\.mail\.ru\/\w+\/\w+\/video\/\w+\/\d/,oB4E9AE58]]}]],"medium":[[[/medium\.com\/(?:s\/\w+\/|@?\w+\/)?(?:\w+-)*([0-9a-f]+)/,o85888FAE]],[]],"megaphone":[[[/megaphone\.fm\/.*?\?(?:e|selected)=(\w+)/,o85888FAE],[/(?:dcs|player|traffic)\.megaphone\.fm\/(\w+)/,o85888FAE],[/megaphone\.link\/(\w+)/,o85888FAE]],[]],"metacafe":[[[/metacafe\.com\/watch\/(\d+)/,o85888FAE]],[]],"mixcloud":[[[/mixcloud\.com\/(?!categories|tag)([-\w]+\/[^\/&]+)\//,o85888FAE]],[]],"mixer":[[[/mixer.com\/(?!browse\/)(\w+)(?!\?clip|\w)(?:\?vod=([-\w]+))?/,["","channel","vod"]]],[]],"mlb":[[[/mlb\.com\/video\/(?:[-\w\/]+\/)?(?:c-|v|[-\w]+-c)(\d+)/,o85888FAE]],[]],"mrctv":[[],[{extract:[[/mrctv\.org\/embed\/(\d+)/,o85888FAE]],match:[[/mrctv\.org\/videos\/./,oB4E9AE58]]}]],"msnbc":[[],[{extract:[[/embedded-video\/(?!undefined)(\w+)/,o85888FAE]],match:[[/msnbc\.com\/[-\w]+\/watch\//,oB4E9AE58],[/on\.msnbc\.com\/./,oB4E9AE58]]}]],"natgeochannel":[[[/channel\.nationalgeographic\.com\/([-\/\w]+\/videos\/[-\w]+)/,o85888FAE]],[]],"natgeovideo":[[],[{extract:[[/guid="([-\w]+)"/,o85888FAE]],match:[[/video\.nationalgeographic\.com\/(?:tv|video)\/\w/,oB4E9AE58]]}]],"nbcnews":[[[/nbcnews\.com\/(?:widget\/video-embed\/|video\/[-\w]+-)(\d+)/,o85888FAE]],[]],"nbcsports":[[],[{extract:[[/select\/media\/(\w+)/,o85888FAE]],match:[[/nbcsports\.com\/video\/./,oB4E9AE58]]}]],"nhl":[[[/nhl\.com\/(?:\w+\/)?video(?:\/(?![ct]-)[-\w]+)?(?:\/t-(\d+))?(?:\/c-(\d+))?/,["","t","c"]]],[]],"npr":[[],[{extract:[[/player\/embed\/(\d+)\/(\d+)/,["","i","m"]]],header:"Cookie: trackingChoice=false; choiceVersion=1",match:[[/npr\.org\/[\/\w]+\/\d+/,oB4E9AE58],[/n\.pr\/\w/,oB4E9AE58]]}]],"nytimes":[[[/nytimes\.com\/video\/[a-z]+\/(?:[a-z]+\/)?(\d+)/,o85888FAE],[/nytimes\.com\/video\/\d+\/\d+\/\d+\/[a-z]+\/(\d+)/,o85888FAE]],[{extract:[[/\/video\/movies\/(\d+)/,o85888FAE]],match:[[/nytimes\.com\/movie(?:s\/movie)?\/(\d+)\/[-\w]+\/trailers/,["","playlist"]]],url:"http:\/\/www.nytimes.com\/svc\/video\/api\/playlist\/{@playlist}?externalId=true"}]],"orfium":[[[/album\/(\d+)/,oA60012B9],[/playlist\/(\d+)/,oB0695997],[/live-set\/(\d+)/,["","set_id"]],[/track\/(\d+)/,o5F5D8CFC]],[]],"pastebin":[[[/pastebin\.com\/(?!u\/)(?:\w+(?:\.php\?i=|\/))?(\w+)/,o85888FAE]],[]],"pinterest":[[[/pinterest.com\/pin\/(\d+)/,o85888FAE],[/pinterest.com\/(?!_\/|discover\/|explore\/|news_hub\/|pin\/|search\/)([-\w]+\/[-\w]+)/,o85888FAE]],[]],"podbean":[[[/podbean\.com\/media\/(?:player\/|share\/pb-)([-\w]+)/,o85888FAE]],[{extract:[[/podbean\.com\/media\/player\/([-\w]+)/,o85888FAE]],match:[[/podbean\.com\/(?:media\/shar)?e\/(?!pb-)/,oB4E9AE58]]}]],"prezi":[[[/\/\/prezi\.com\/(?!(?:a(?:bout|mbassadors)|c(?:o(?:llaborate|mmunity|ntact)|reate)|exp(?:erts|lore)|ip(?:ad|hone)|jobs|l(?:ear|ogi)n|m(?:ac|obility)|pr(?:es(?:s|ent)|icing)|recommend|support|user|windows|your)\/)(\w+)\//,o85888FAE]],[]],"reddit":[[[/(\w+\/comments\/\w+(?:\/\w+\/\w+)?)/,o85888FAE]],[]],"rumble":[[[/rumble\.com\/embed\/(\w+)/,o85888FAE]],[{extract:[[/video"?:"(\w+)/,o85888FAE]],match:[[/rumble\.com\/(?!embed\/)./,oB4E9AE58]]}]],"rutube":[[[/rutube\.ru\/tracks\/(\d+)/,o85888FAE]],[{extract:[[/rutube\.ru\/play\/embed\/(\d+)/,o85888FAE]],header:"User-agent: Mozilla\/5.0 (X11; Linux x86_64; rv:62.0) Gecko\/20100101 Firefox\/62.0",match:[[/rutube\.ru\/video\/([0-9a-f]{32})/,o3A598861]],url:"http:\/\/rutube.ru\/api\/oembed\/?url=https:\/\/rutube.ru\/video\/{@vid}\/"}]],"scribd":[[[/scribd\.com\/(?:mobile\/)?(?:doc(?:ument)?|presentation)\/(\d+)/,o85888FAE]],[]],"sendvid":[[[/sendvid\.com\/(\w+)/,o85888FAE]],[]],"slideshare":[[[/slideshare\.net\/[^\/]+\/[-\w]+-(\d{6,})$/,o85888FAE]],[{extract:[[/"presentationId":(\d+)/,o85888FAE]],match:[[/slideshare\.net\/[^\/]+\/\w(?![-\w]+-\d{6,}$)/,oB4E9AE58]]}]],"soundcloud":[[[/https?:\/\/(?:api\.)?soundcloud\.com\/(?!pages\/)([-\/\w]+\/[-\/\w]+|^[^\/]+\/[^\/]+$)/i,o85888FAE],[/api\.soundcloud\.com\/playlists\/(\d+)/,oB0695997],[/api\.soundcloud\.com\/tracks\/(\d+)(?:\?secret_token=([-\w]+))?/,["","track_id","secret_token"]],[/soundcloud\.com\/(?!playlists|tracks)[-\w]+\/[-\w]+\/(?=s-)([-\w]+)/,["","secret_token"]]],[{extract:[[/soundcloud:tracks:(\d+)/,o5F5D8CFC]],header:"User-agent: PHP (not Mozilla)",match:[[/soundcloud\.com\/(?!playlists\/\d|tracks\/\d)[-\w]+\/[-\w]/,oB4E9AE58]]},{extract:[[/soundcloud:\/\/playlists:(\d+)/,oB0695997]],header:"User-agent: PHP (not Mozilla)",match:[[/soundcloud\.com\/\w+\/sets\//,oB4E9AE58]]}]],"sporcle":[[[/sporcle.com\/framed\/.*?gid=(\w+)/,o85888FAE]],[{extract:[[/encodedGameID\W+(\w+)/,o85888FAE]],match:[[/sporcle\.com\/games\/(?!\w*category\/)[-\w]+\/[-\w]/,oB4E9AE58]]}]],"sportsnet":[[],[{extract:[[/vid(?:eoId)?=(\d+)/,o85888FAE],[/param name="@videoPlayer" value="(\d+)"/,o85888FAE]],match:o0E3C680A}]],"spotify":[oD03A52D8,[{extract:oD03A52D8,header:"User-agent: PHP (not Mozilla)",match:[[/link\.tospotify\.com\/./,oB4E9AE58]]}]],"spreaker":[[[/spreaker\.com\/episode\/(\d+)/,o37C2EA3B]],[{extract:[[/episode_id=(\d+)/,o37C2EA3B],[/show_id=(\d+)/,["","show_id"]]],match:[[/(.+\/(?:show\/|user\/.+\/).+)/,["","url"]]],url:"https:\/\/api.spreaker.com\/oembed?format=json&url={@url}"}]],"steamstore":[[[/store.steampowered.com\/app\/(\d+)/,o85888FAE]],[]],"stitcher":[[[/\/(?:embed|splayer\/f)\/(\d+)\/(\d+)/,o28C25529]],[{extract:[[/\/embed\/(\d+)\/(\d+)/,o28C25529]],match:[[/\/(?:podcast\/|show\/|s\?)/,oB4E9AE58]]}]],"strawpoll":[[[/strawpoll\.me\/(\d+)/,o85888FAE]],[]],"streamable":[[[/streamable\.com\/(\w+)/,o85888FAE]],[]],"streamja":[[[/streamja\.com\/(?!login|signup|terms|videos)(\w+)/,o85888FAE]],[]],"teamcoco":[[[/teamcoco\.com\/video\/(\d+)/,o85888FAE]],[{extract:[[/embed\/v\/(\d+)/,o85888FAE]],match:[[/teamcoco\.com\/video\/\D/,oB4E9AE58]]}]],"ted":[[[/ted\.com\/((?:talk|playlist)s\/[-\w]+(?:\.html)?)(?![-\w]|\/transcript)/i,o85888FAE]],[]],"telegram":[[[/\/\/t.me\/(?!addstickers\/|joinchat\/)(\w+\/\d+)/,o85888FAE]],[]],"theatlantic":[[[/theatlantic\.com\/video\/index\/(\d+)/,o85888FAE]],[]],"theguardian":[[[/theguardian\.com\/(\w+\/video\/20(?:0[0-9]|1[0-7])[-\/\w]+)/,o85888FAE]],[]],"theonion":[[[/theonion\.com\/video\/[-\w]+[-,](\d+)/,o85888FAE]],[]],"tiktok":[[[/tiktok\.com\/(?:@[.\w]+\/video|v|i18n\/share\/video)\/(\d+)/,o85888FAE]],[{extract:[[/tiktok\.com\/@[.\w]+\/video\/(\d+)/,o85888FAE]],header:"User-agent: Mozilla\/5.0 (X11; Linux x86_64; rv:62.0) Gecko\/20100101 Firefox\/62.0",match:[[/\/\/vm\.tiktok\.com\/./,oB4E9AE58]]}]],"tmz":[[[/tmz\.com\/videos\/(\w+)/,o85888FAE]],[]],"tradingview":[[[/tradingview\.com\/(?:chart\/[^\/]+|i)\/(\w+)/,["","chart"]],[/tradingview\.com\/symbols\/([-:\w]+)/,["","symbol"]]],[]],"traileraddict":[[],[{extract:[[/v\.traileraddict\.com\/(\d+)/,o85888FAE]],match:[[/traileraddict\.com\/(?!tags\/)[^\/]+\/./,oB4E9AE58]]}]],"trendingviews":[[[/trendingviews.co\/(?:video|embed)\/(?:[^\/]+-)?(\d+)/,o85888FAE]],[]],"tumblr":[[[/([-\w]+)\.tumblr\.com\/post\/(\d+)/,["","name","id"]]],[{extract:[[/did=\\u0022([-\w]+)/,["","did"]],[/embed\\\/post\\\/([-\w]+)/,["","key"]]],header:"User-agent: curl",match:[[/\w\.tumblr\.com\/post\/\d/,oB4E9AE58]],url:"https:\/\/www.tumblr.com\/oembed\/1.0?url=https:\/\/{@name}.tumblr.com\/post\/{@id}"}]],"twentyfoursevensports":[o3C5A4C51,[{extract:o3C5A4C51,header:"User-agent: Mozilla\/5.0 (X11; Linux x86_64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/73.0.3683.86 Safari\/537.36",match:[[/247sports\.com\/Player\/[-\w]*\d/,oB4E9AE58]]},{extract:[[/player_id%3[Dd](\d+)/,oC59CF925]],header:"User-agent: Mozilla\/5.0 (X11; Linux x86_64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/73.0.3683.86 Safari\/537.36",match:[[/247sports\.com\/Video\/./,oB4E9AE58]]}]],"twitch":[[[/twitch\.tv\/(?:videos|\w+\/v)\/(\d+)?/,oC59CF925],[/www\.twitch\.tv\/(?!videos\/)(\w+)(?:\/clip\/(\w+))?/,o6ACB7DBF],[/t=((?:(?:\d+h)?\d+m)?\d+s)/,o90B2B224],[/clips\.twitch\.tv\/(?:(\w+)\/)?(\w+)/,o6ACB7DBF]],[]],"twitter":[[[/twitter\.com\/(?:#!\/|i\/)?\w+\/(?:status(?:es)?|tweet)\/(\d+)/,o85888FAE]],[]],"ustream":[[[/ustream\.tv\/recorded\/(\d+)/,o3A598861]],[{extract:[[o9338E0AD,["","cid"]]],match:[[/ustream\.tv\/(?!explore\/|platform\/|recorded\/|search\?|upcoming$|user\/)(?:channel\/)?[-\w]+/,oB4E9AE58]]}]],"vbox7":[[[/vbox7\.com\/play:([\da-f]+)/,o85888FAE]],[]],"veoh":[[[/veoh\.com\/(?:m\/watch\.php\?v=|watch\/)v(\w+)/,o85888FAE]],[]],"vevo":[[[/vevo\.com\/watch\/(.*?\/)?([A-Z]+\d+)/,["","","id"]]],[]],"videodetective":[[[/videodetective\.com\/\w+\/[-\w]+\/(?:trailer\/P0*)?(\d+)/,o85888FAE]],[]],"vimeo":[[[/vimeo\.com\/(?:channels\/[^\/]+\/|video\/)?(\d+)/,o85888FAE],[/#t=([\dhms]+)/,o90B2B224]],[]],"vine":[[[/vine\.co\/v\/([^\/]+)/,o85888FAE]],[]],"vk":[[[/vk(?:\.com|ontakte\.ru)\/(?:[\w.]+\?z=)?video(-?\d+)_(\d+).*?hash=([0-9a-f]+)/,o1BD7B50C],[/vk(?:\.com|ontakte\.ru)\/video_ext\.php\?oid=(-?\d+)&id=(\d+)&hash=([0-9a-f]+)/,o1BD7B50C]],[{extract:[[/meta property="og:video" content=".*?oid=(-?\d+).*?id=(\d+).*?hash=([0-9a-f]+)/,o1BD7B50C]],header:"User-agent: Mozilla\/5.0 (X11; Linux x86_64; rv:62.0) Gecko\/20100101 Firefox\/62.0",match:[[/^(?!.*?hash=)/,oB4E9AE58]]}]],"vocaroo":[[[/voca(?:\.ro|roo\.com)\/(?:i\/)?(\w+)/,o85888FAE]],[]],"vox":[[[/vox.com\/.*#ooid=([-\w]+)/,o85888FAE]],[]],"washingtonpost":[[[/washingtonpost\.com\/video\/c\/\w+\/([-0-9a-f]+)/,o85888FAE],[/washingtonpost\.com\/video\/[-\/\w]+\/([-0-9a-f]+)_video\.html/,o85888FAE]],[]],"wistia":[[[/wistia.com\/medias\/(\w+)/,o85888FAE]],[]],"wshh":[[[/worldstarhiphop\.com\/featured\/(\d+)/,o85888FAE]],[{extract:[[/v: ?"?(\d+)/,o85888FAE]],match:[[/worldstarhiphop\.com\/(?:\w+\/)?video\.php\?v=\w+/,oB4E9AE58]]}]],"wsj":[[[/wsj\.com\/[^#]*#!([-0-9A-F]{36})/,o85888FAE],[/wsj\.com\/video\/[^\/]+\/([-0-9A-F]{36})/,o85888FAE]],[{extract:[[/guid=([-0-9A-F]{36})/,o85888FAE]],match:[[/on\.wsj\.com\/\w/,oB4E9AE58]]}]],"xboxclips":[[[/(?:gameclips\.io|xboxclips\.com)\/(?!game\/)([^\/]+)\/(?!screenshots\/)([-0-9a-f]+)/,oEDE19F33]],[]],"xboxdvr":[[[/(?:gamer|xbox)dvr\.com\/gamer\/([^\/]+)\/video\/(\d+)/,oEDE19F33]],[]],"youku":[[[/youku\.com\/v(?:_show|ideo)\/id_(\w+=*)/,o85888FAE]],[]],"youtube":[[[/youtube\.com\/(?:watch.*?v=|v\/|attribution_link.*?v%3D)([-\w]+)/,o85888FAE],[/youtu\.be\/([-\w]+)/,o85888FAE],[/[#&?]t=(\d[\dhms]*)/,o90B2B224],[/[&?]list=([-\w]+)/,["","list"]]],[{extract:[[/\/vi\/([-\w]+)/,o85888FAE]],match:[[/\/shared\?ci=/,oB4E9AE58]]}]]},"urlConfig":{allowedSchemes:/^https?$/i}};var rootContext={allowed:oD3E674AB,flags:40};var tagsConfig={"ABCNEWS":o1C8AA61D,"AMAZON":{allowed:o8706E0A9,attributes:{"id":o02D8DBB5,"tld":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"ANCHOR":o1C8AA61D,"AUDIOBOOM":o1C8AA61D,"AUDIOMACK":{allowed:o8706E0A9,attributes:{"artist":o1BC3EAF4,"mode":o1BC3EAF4,"title":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"B":oF5133072,"BANDCAMP":{allowed:o8706E0A9,attributes:{"album_id":o1BC3EAF4,"track_id":o1BC3EAF4,"track_num":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"BBCNEWS":o1C8AA61D,"BITCHUTE":o1C8AA61D,"BLEACHERREPORT":o1C8AA61D,"BREAK":o1C8AA61D,"BRIGHTCOVE":{allowed:o8706E0A9,attributes:{"bckey":o1BC3EAF4,"bcpid":o1BC3EAF4,"bctid":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"C":{allowed:o82015558,attributes:{},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:{flags:66},tagLimit:5000},"CASTOS":{allowed:o8706E0A9,attributes:{"host":o1BC3EAF4,"id":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"CBSNEWS":o1C8AA61D,"CENTER":{allowed:oD3E674AB,attributes:{},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:o1AF69066,tagLimit:5000},"CLYP":o1C8AA61D,"CNBC":o1C8AA61D,"CNN":o1C8AA61D,"CNNMONEY":o1C8AA61D,"CODE":{allowed:o82015558,attributes:{"lang":oFB2F5649},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:oD4869BFF,flags:4436,fosterParent:oD4869BFF},tagLimit:5000},"CODEPEN":o285DC803,"COLOR":{allowed:oCB183773,attributes:{"color":{filterChain:[function(attrValue,attrName){return RegexpFilter.filter(attrValue,/^(?:#(?:(?:[0-9a-f]{3}){1,2}|(?:[0-9a-f]{4}){1,2})|rgb\(\d{1,3}, *\d{1,3}, *\d{1,3}\)|rgba\(\d{1,3}, *\d{1,3}, *\d{1,3}, *\d*(?:\.\d+)?\)|[a-z]+)$/i)}],required:!0}},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oB565876D,tagLimit:5000},"COMEDYCENTRAL":o1C8AA61D,"COUB":o1C8AA61D,"DAILYMOTION":{allowed:o8706E0A9,attributes:{"id":o1BC3EAF4,"t":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"DEL":{allowed:oD3E674AB,attributes:{},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:{flags:512},tagLimit:5000},"DEMOCRACYNOW":o1C8AA61D,"DUMPERT":o1C8AA61D,"EIGHTTRACKS":o1C8AA61D,"EM":oF5133072,"EMAIL":{allowed:o44720161,attributes:{"email":{filterChain:[function(attrValue,attrName){return EmailFilter.filter(attrValue)}],required:!0}},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:o939F1698,tagLimit:5000},"ESC":{allowed:o82015558,attributes:{},bitNumber:0,filterChain:o1B4F5B52,nestingLimit:10,rules:{flags:1616},tagLimit:5000},"ESPN":o1C8AA61D,"FACEBOOK":{allowed:o8706E0A9,attributes:{"id":o1BC3EAF4,"type":o1BC3EAF4,"user":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"FALSTAD":{allowed:o8706E0A9,attributes:{"cct":o1BC3EAF4,"ctz":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"FLICKR":o1C8AA61D,"FOXNEWS":o1C8AA61D,"FP":oCCD33097,"FUNNYORDIE":o1C8AA61D,"GAMESPOT":o1C8AA61D,"GAMETRAILERS":o1C8AA61D,"GETTY":{allowed:o8706E0A9,attributes:{"et":o1BC3EAF4,"height":o9244B582,"id":o1BC3EAF4,"sig":o1BC3EAF4,"width":o28FFC5A0},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"GFYCAT":o57881CFF,"GIFS":o57881CFF,"GIPHY":{allowed:o8706E0A9,attributes:{"height":o9244B582,"id":o1BC3EAF4,"type":o1BC3EAF4,"width":o28FFC5A0},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"GIST":o1C8AA61D,"GLOBALNEWS":o1C8AA61D,"GOFUNDME":o1C8AA61D,"GOOGLEDRIVE":o1C8AA61D,"GOOGLEPLUS":{allowed:o8706E0A9,attributes:{"name":{filterChain:[function(attrValue,attrName){return(function(str){return decodeURIComponent(""+str)})(attrValue)}],required:!1},"oid":o1BC3EAF4,"pid":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"GOOGLESHEETS":{allowed:o8706E0A9,attributes:{"gid":o1BC3EAF4,"id":o1BC3EAF4,"oid":o1BC3EAF4,"type":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"H1":oBF8B7AD8,"H2":oBF8B7AD8,"H3":oBF8B7AD8,"H4":oBF8B7AD8,"H5":oBF8B7AD8,"H6":oBF8B7AD8,"HE":oCCD33097,"HR":{allowed:oA9ACF916,attributes:{},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:oF3C6FA42,tagLimit:5000},"HUDL":{allowed:o8706E0A9,attributes:{"athlete":o1BC3EAF4,"highlight":o1BC3EAF4,"id":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"HULU":o1C8AA61D,"I":oF5133072,"IGN":o1C8AA61D,"IMDB":o1C8AA61D,"IMG":{allowed:oA9ACF916,attributes:{"alt":o1BC3EAF4,"height":o75AB9259,"src":oF307D35C,"title":o1BC3EAF4,"width":o75AB9259},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"IMGUR":o1C8AA61D,"INDIEGOGO":o1C8AA61D,"INSTAGRAM":o1C8AA61D,"INTERNETARCHIVE":{allowed:o8706E0A9,attributes:{"height":o9244B582,"id":{filterChain:[returnFalse],required:!1},"width":o28FFC5A0},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"ISPOILER":o212FA0B5,"IZLESENE":o1C8AA61D,"JSFIDDLE":{allowed:o8706E0A9,attributes:{"id":o1BC3EAF4,"revision":o1BC3EAF4,"user":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"JWPLATFORM":o1C8AA61D,"KALTURA":{allowed:o8706E0A9,attributes:{"entry_id":o02D8DBB5,"partner_id":o02D8DBB5,"sp":o1BC3EAF4,"uiconf_id":o02D8DBB5},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"KHL":o1C8AA61D,"KICKSTARTER":{allowed:o8706E0A9,attributes:{"card":o1BC3EAF4,"id":o1BC3EAF4,"video":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"LI":{allowed:oD3E674AB,attributes:{},bitNumber:5,filterChain:[o118B31AC,function(tag,tagConfig){return(function(listItem,text){var pos=listItem.getPos()+listItem.getLen();while(text.charAt(pos)===' '){++pos}
var str=text.substr(pos,3);if(!/\[[ Xx]\]/.test(str)){return}
var taskId=Math.random().toString(16).substr(2),taskState=(str==='[ ]')?'unchecked':'checked',task=addSelfClosingTag('TASK',pos,3);task.setAttribute('id',taskId);task.setAttribute('state',taskState);listItem.cascadeInvalidationTo(task)})(tag,text)}],nestingLimit:10,rules:{closeParent:{"B":1,"C":1,"COLOR":1,"EM":1,"EMAIL":1,"I":1,"LI":1,"S":1,"SIZE":1,"STRONG":1,"U":1,"URL":1},flags:264,fosterParent:oD4869BFF},tagLimit:5000},"LIBSYN":o1C8AA61D,"LIST":{allowed:[65313,7938],attributes:{"start":o75AB9259,"type":{filterChain:[function(attrValue,attrName){return HashmapFilter.filter(attrValue,{"A":"upper-alpha","I":"upper-roman","a":"lower-alpha","i":"lower-roman","1":"decimal"},!1)},o6377B813],required:!1}},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:oD4869BFF,createChild:["LI"],flags:3460,fosterParent:oD4869BFF},tagLimit:5000},"LIVELEAK":o1C8AA61D,"LIVESTREAM":{allowed:o8706E0A9,attributes:{"account_id":o1BC3EAF4,"channel":o1BC3EAF4,"clip_id":o1BC3EAF4,"event_id":o1BC3EAF4,"video_id":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"MAILRU":o1C8AA61D,"MEDIA":{allowed:[65503,7937],attributes:{},bitNumber:9,filterChain:[function(tag,tagConfig){return(function(tag,hosts,sites,cacheDir){function filterTag(tag,hosts,sites){tag.invalidate();if(tag.hasAttribute('url')){var url=tag.getAttribute('url'),siteId=getSiteIdFromUrl(url,hosts);if(sites[siteId]){var attributes=getAttributes(url,sites[siteId]);if(!empty(attributes)){createTag(siteId.toUpperCase(),tag).setAttributes(attributes)}}}}
function addNamedCaptures(attributes,string,regexps){var matched=!1;regexps.forEach(function(pair){var regexp=pair[0],map=pair[1],m=regexp.exec(string);if(!m){return}
matched=!0;map.forEach(function(name,i){if(m[i]>''&&name>''){attributes[name]=m[i]}})});return matched}
function createTag(tagName,tag){var startPos=tag.getPos(),endTag=tag.getEndTag(),startLen,endPos,endLen;if(endTag){startLen=tag.getLen();endPos=endTag.getPos();endLen=endTag.getLen()}else{startLen=0;endPos=tag.getPos()+tag.getLen();endLen=0}
return addTagPair(tagName,startPos,startLen,endPos,endLen,tag.getSortPriority())}
function empty(attributes){for(var attrName in attributes){return!1}
return!0}
function getAttributes(url,config){var attributes={};addNamedCaptures(attributes,url,config[0]);return attributes}
function getSiteIdFromUrl(url,hosts){var m=/^https?:\/\/([^\/]+)/.exec(url.toLowerCase()),host=m[1]||'';while(host>''){if(hosts[host]){return hosts[host]}
host=host.replace(/^[^.]*./,'')}
return''}
filterTag(tag,hosts,sites)})(tag,registeredVars["MediaEmbed.hosts"],registeredVars["MediaEmbed.sites"],registeredVars.cacheDir)}],nestingLimit:10,rules:{flags:513},tagLimit:5000},"MEDIUM":o1C8AA61D,"MEGAPHONE":o1C8AA61D,"METACAFE":o1C8AA61D,"MIXCLOUD":o1C8AA61D,"MIXER":{allowed:o8706E0A9,attributes:{"channel":o1BC3EAF4,"vod":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"MLB":o1C8AA61D,"MRCTV":o1C8AA61D,"MSNBC":o1C8AA61D,"NATGEOCHANNEL":o1C8AA61D,"NATGEOVIDEO":o1C8AA61D,"NBCNEWS":o1C8AA61D,"NBCSPORTS":o1C8AA61D,"NHL":{allowed:o8706E0A9,attributes:{"c":o1BC3EAF4,"t":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"NPR":{allowed:o8706E0A9,attributes:{"i":o1BC3EAF4,"m":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"NYTIMES":o1C8AA61D,"ORFIUM":{allowed:o8706E0A9,attributes:{"album_id":o1BC3EAF4,"playlist_id":o1BC3EAF4,"set_id":o1BC3EAF4,"track_id":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"PASTEBIN":o1C8AA61D,"PINTEREST":o1C8AA61D,"PODBEAN":o1C8AA61D,"POSTMENTION":{allowed:oA9ACF916,attributes:{"discussionid":o6CB0A318,"displayname":o02D8DBB5,"id":o6CB0A318,"number":o6CB0A318,"username":o02D8DBB5},bitNumber:1,filterChain:[function(tag,tagConfig){return(function(tag){return flarum.extensions["flarum-mentions"].filterPostMentions(tag)})(tag)},o118B31AC],nestingLimit:10,rules:oA80287CC,tagLimit:5000},"PREZI":o1C8AA61D,"QUOTE":{allowed:oD3E674AB,attributes:{"author":o1BC3EAF4},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:o1AF69066,tagLimit:5000},"REDDIT":o1C8AA61D,"RUMBLE":o1C8AA61D,"RUTUBE":o1C8AA61D,"S":oF5133072,"SCRIBD":o1C8AA61D,"SENDVID":o1C8AA61D,"SIZE":{allowed:oCB183773,attributes:{"size":{filterChain:[function(attrValue,attrName){return NumericFilter.filterRange(attrValue,8,36,logger)}],required:!0}},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oB565876D,tagLimit:5000},"SLIDESHARE":o1C8AA61D,"SOUNDCLOUD":{allowed:o8706E0A9,attributes:{"id":o1BC3EAF4,"playlist_id":o1BC3EAF4,"secret_token":o1BC3EAF4,"track_id":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"SPOILER":{allowed:oD3E674AB,attributes:{},bitNumber:7,filterChain:o1B4F5B52,nestingLimit:10,rules:o1AF69066,tagLimit:5000},"SPORCLE":o1C8AA61D,"SPORTSNET":o1C8AA61D,"SPOTIFY":o1C8AA61D,"SPREAKER":{allowed:o8706E0A9,attributes:{"episode_id":o1BC3EAF4,"show_id":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"STEAMSTORE":o1C8AA61D,"STITCHER":{allowed:o8706E0A9,attributes:{"eid":o1BC3EAF4,"fid":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"STRAWPOLL":o1C8AA61D,"STREAMABLE":o1C8AA61D,"STREAMJA":o1C8AA61D,"STRONG":oF5133072,"SUB":o212FA0B5,"SUP":o212FA0B5,"TABLE":{allowed:[65281,7958],attributes:{},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:oD4869BFF,flags:3460,fosterParent:oD4869BFF},tagLimit:5000},"TASK":{allowed:oA9ACF916,attributes:{"id":oE2346708,"state":oE2346708},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"TBODY":{allowed:o42DE1101,attributes:{},bitNumber:10,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:{"B":1,"C":1,"COLOR":1,"EM":1,"EMAIL":1,"I":1,"S":1,"SIZE":1,"STRONG":1,"TBODY":1,"TD":1,"TH":1,"THEAD":1,"TR":1,"U":1,"URL":1},flags:3456,fosterParent:oD4869BFF},tagLimit:5000},"TD":{allowed:oD3E674AB,attributes:oB55F46D1,bitNumber:11,filterChain:o1B4F5B52,nestingLimit:10,rules:o2ACFCB30,tagLimit:5000},"TEAMCOCO":o1C8AA61D,"TED":o1C8AA61D,"TELEGRAM":o1C8AA61D,"TH":{allowed:[49055,7939],attributes:oB55F46D1,bitNumber:11,filterChain:o1B4F5B52,nestingLimit:10,rules:o2ACFCB30,tagLimit:5000},"THEAD":{allowed:o42DE1101,attributes:{},bitNumber:10,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:oD4869BFF,flags:3456,fosterParent:oD4869BFF},tagLimit:5000},"THEATLANTIC":o1C8AA61D,"THEGUARDIAN":o1C8AA61D,"THEONION":o1C8AA61D,"TIKTOK":o1C8AA61D,"TMZ":o1C8AA61D,"TR":{allowed:[65281,7946],attributes:{},bitNumber:12,filterChain:o1B4F5B52,nestingLimit:10,rules:{closeParent:{"B":1,"C":1,"COLOR":1,"EM":1,"EMAIL":1,"I":1,"S":1,"SIZE":1,"STRONG":1,"TD":1,"TH":1,"TR":1,"U":1,"URL":1},flags:3456,fosterParent:oD4869BFF},tagLimit:5000},"TRADINGVIEW":{allowed:o8706E0A9,attributes:{"chart":o1BC3EAF4,"symbol":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"TRAILERADDICT":o1C8AA61D,"TRENDINGVIEWS":o1C8AA61D,"TUMBLR":{allowed:o8706E0A9,attributes:{"did":o1BC3EAF4,"id":o1BC3EAF4,"key":o1BC3EAF4,"name":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"TWENTYFOURSEVENSPORTS":{allowed:o8706E0A9,attributes:{"player_id":o1BC3EAF4,"video_id":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"TWITCH":{allowed:o8706E0A9,attributes:{"channel":o1BC3EAF4,"clip_id":o1BC3EAF4,"t":o1BC3EAF4,"video_id":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"TWITTER":o1C8AA61D,"U":oF5133072,"UPL-FILE":{allowed:oA9ACF916,attributes:{"content":oABCFC4A3,"size":oABCFC4A3,"uuid":oE2346708},bitNumber:4,filterChain:o1B4F5B52,nestingLimit:10,rules:oF3C6FA42,tagLimit:5000},"UPL-IMAGE":{allowed:oA9ACF916,attributes:{"content":oABCFC4A3,"size":oABCFC4A3,"url":oF307D35C,"uuid":oE2346708},bitNumber:6,filterChain:o1B4F5B52,nestingLimit:10,rules:oF3C6FA42,tagLimit:5000},"UPL-IMAGE-PREVIEW":{allowed:oA9ACF916,attributes:{"url":oF307D35C},bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"URL":{allowed:o44720161,attributes:{"title":o1BC3EAF4,"url":oF307D35C},bitNumber:2,filterChain:o1B4F5B52,nestingLimit:10,rules:o939F1698,tagLimit:5000},"USERMENTION":{allowed:oA9ACF916,attributes:{"displayname":o02D8DBB5,"id":o6CB0A318,"username":o02D8DBB5},bitNumber:1,filterChain:[function(tag,tagConfig){return(function(tag){return flarum.extensions["flarum-mentions"].filterUserMentions(tag)})(tag)},o118B31AC],nestingLimit:10,rules:oA80287CC,tagLimit:5000},"USTREAM":{allowed:o8706E0A9,attributes:{"cid":o1BC3EAF4,"vid":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"VBOX7":o1C8AA61D,"VEOH":{allowed:o8706E0A9,attributes:o251A6FB9,bitNumber:3,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"VEVO":o1C8AA61D,"VIDEO":{allowed:[261,771],attributes:{"src":oF307D35C},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"VIDEODETECTIVE":o1C8AA61D,"VIMEO":{allowed:o8706E0A9,attributes:{"id":o1BC3EAF4,"t":o0967AFCF},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"VINE":o1C8AA61D,"VK":{allowed:o8706E0A9,attributes:{"hash":o1BC3EAF4,"oid":o1BC3EAF4,"vid":o1BC3EAF4},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000},"VOCAROO":o1C8AA61D,"VOX":o1C8AA61D,"WASHINGTONPOST":o1C8AA61D,"WISTIA":o1C8AA61D,"WSHH":o1C8AA61D,"WSJ":o1C8AA61D,"XBOXCLIPS":o285DC803,"XBOXDVR":o285DC803,"YOUKU":o1C8AA61D,"YOUTUBE":{allowed:o8706E0A9,attributes:{"id":oFB2F5649,"list":o1BC3EAF4,"t":o0967AFCF},bitNumber:1,filterChain:o1B4F5B52,nestingLimit:10,rules:oA80287CC,tagLimit:5000}};var tagStack;var tagStackIsSorted;var text;var textLen;var uid=0;var wsPos;function disableTag(tagName){if(tagsConfig[tagName]){copyTagConfig(tagName).isDisabled=!0}}
function enableTag(tagName){if(tagsConfig[tagName]){copyTagConfig(tagName).isDisabled=!1}}
function getLogger(){return logger}
function parse(_text){reset(_text);var _uid=uid;executePluginParsers();processTags();finalizeOutput();if(uid!==_uid){throw 'The parser has been reset during execution'}
if(currentFixingCost>maxFixingCost){logger.warn('Fixing cost limit exceeded')}
return output}
function reset(_text){_text=_text.replace(/\r\n?/g,"\n");_text=_text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]+/g,'');logger.clear();cntOpen={};cntTotal={};currentFixingCost=0;currentTag=null;isRich=!1;namespaces={};openTags=[];output='';pos=0;tagStack=[];tagStackIsSorted=!1;text=_text;textLen=text.length;wsPos=0;context=rootContext;context.inParagraph=!1;++uid}
function setTagLimit(tagName,tagLimit){if(tagsConfig[tagName]){copyTagConfig(tagName).tagLimit=tagLimit}}
function setNestingLimit(tagName,nestingLimit){if(tagsConfig[tagName]){copyTagConfig(tagName).nestingLimit=nestingLimit}}
function copyTagConfig(tagName){var tagConfig={},k;for(k in tagsConfig[tagName]){tagConfig[k]=tagsConfig[tagName][k]}
return tagsConfig[tagName]=tagConfig}
function encodeUnicodeSupplementaryCharacters(){output=output.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,encodeUnicodeSupplementaryCharactersCallback)}
function encodeUnicodeSupplementaryCharactersCallback(pair){var cp=(pair.charCodeAt(0)<<10)+pair.charCodeAt(1)-56613888;return'&#'+cp+';'}
function finalizeOutput(){var tmp;outputText(textLen,0,!0);do{tmp=output;output=output.replace(/<([^ />]+)[^>]*><\/\1>/g,'')}
while(output!==tmp);output=output.replace(/<\/i><i>/g,'');output=output.replace(/[\x00-\x08\x0B-\x1F]/g,'');encodeUnicodeSupplementaryCharacters();var tagName=(isRich)?'r':'t';tmp='<'+tagName;if(HINT.namespaces){for(var prefix in namespaces){tmp+=' xmlns:'+prefix+'="urn:s9e:TextFormatter:'+prefix+'"'}}
output=tmp+'>'+output+'</'+tagName+'>'}
function outputTag(tag){isRich=!0;var tagName=tag.getName(),tagPos=tag.getPos(),tagLen=tag.getLen(),tagFlags=tag.getFlags(),skipBefore=0,skipAfter=0;if(HINT.RULE_IGNORE_WHITESPACE&&(tagFlags&RULE_IGNORE_WHITESPACE)){skipBefore=1;skipAfter=(tag.isEndTag())?2:1}
var closeParagraph=!1;if(tag.isStartTag()){if(HINT.RULE_BREAK_PARAGRAPH&&(tagFlags&RULE_BREAK_PARAGRAPH)){closeParagraph=!0}}else{closeParagraph=!0}
outputText(tagPos,skipBefore,closeParagraph);var tagText=(tagLen)?htmlspecialchars_noquotes(text.substr(tagPos,tagLen)):'';if(tag.isStartTag()){if(!HINT.RULE_BREAK_PARAGRAPH||!(tagFlags&RULE_BREAK_PARAGRAPH)){outputParagraphStart(tagPos)}
if(HINT.namespaces){var colonPos=tagName.indexOf(':');if(colonPos>0){namespaces[tagName.substr(0,colonPos)]=0}}
output+='<'+tagName;var attributes=tag.getAttributes(),attributeNames=[];for(var attrName in attributes){attributeNames.push(attrName)}
attributeNames.sort(function(a,b){return(a>b)?1:-1});attributeNames.forEach(function(attrName){output+=' '+attrName+'="'+htmlspecialchars_compat(attributes[attrName].toString()).replace(/\n/g,'&#10;')+'"'});if(tag.isSelfClosingTag()){if(tagLen){output+='>'+tagText+'</'+tagName+'>'}else{output+='/>'}}else if(tagLen){output+='><s>'+tagText+'</s>'}else{output+='>'}}else{if(tagLen){output+='<e>'+tagText+'</e>'}
output+='</'+tagName+'>'}
pos=tagPos+tagLen;wsPos=pos;while(skipAfter&&wsPos<textLen&&text[wsPos]==="\n"){--skipAfter;++wsPos}}
function outputText(catchupPos,maxLines,closeParagraph){if(closeParagraph){if(!(context.flags&RULE_CREATE_PARAGRAPHS)){closeParagraph=!1}else{maxLines=-1}}
if(pos>=catchupPos){if(closeParagraph){outputParagraphEnd()}}
if(wsPos>pos){var skipPos=Math.min(catchupPos,wsPos);output+=text.substr(pos,skipPos-pos);pos=skipPos;if(pos>=catchupPos){if(closeParagraph){outputParagraphEnd()}}}
var catchupLen,catchupText;if(HINT.RULE_IGNORE_TEXT&&context.flags&RULE_IGNORE_TEXT){catchupLen=catchupPos-pos,catchupText=text.substr(pos,catchupLen);if(!/^[ \n\t]*$/.test(catchupText)){catchupText='<i>'+htmlspecialchars_noquotes(catchupText)+'</i>'}
output+=catchupText;pos=catchupPos;if(closeParagraph){outputParagraphEnd()}
return}
var ignorePos=catchupPos,ignoreLen=0;while(maxLines&&--ignorePos>=pos){var c=text[ignorePos];if(c!==' '&&c!=="\n"&&c!=="\t"){break}
if(c==="\n"){--maxLines}
++ignoreLen}
catchupPos-=ignoreLen;if(HINT.RULE_CREATE_PARAGRAPHS&&context.flags&RULE_CREATE_PARAGRAPHS){if(!context.inParagraph){outputWhitespace(catchupPos);if(catchupPos>pos){outputParagraphStart(catchupPos)}}
var pbPos=text.indexOf("\n\n",pos);while(pbPos>-1&&pbPos<catchupPos){outputText(pbPos,0,!0);outputParagraphStart(catchupPos);pbPos=text.indexOf("\n\n",pos)}}
if(catchupPos>pos){catchupText=htmlspecialchars_noquotes(text.substr(pos,catchupPos-pos));if(HINT.RULE_ENABLE_AUTO_BR&&(context.flags&RULES_AUTO_LINEBREAKS)===RULE_ENABLE_AUTO_BR){catchupText=catchupText.replace(/\n/g,"<br/>\n")}
output+=catchupText}
if(closeParagraph){outputParagraphEnd()}
if(ignoreLen){output+=text.substr(catchupPos,ignoreLen)}
pos=catchupPos+ignoreLen}
function outputBrTag(tag){outputText(tag.getPos(),0,!1);output+='<br/>'}
function outputIgnoreTag(tag){var tagPos=tag.getPos(),tagLen=tag.getLen();var ignoreText=text.substr(tagPos,tagLen);outputText(tagPos,0,!1);output+='<i>'+htmlspecialchars_noquotes(ignoreText)+'</i>';isRich=!0;pos=tagPos+tagLen}
function outputParagraphStart(maxPos){if(!HINT.RULE_CREATE_PARAGRAPHS){return}
if(context.inParagraph||!(context.flags&RULE_CREATE_PARAGRAPHS)){return}
outputWhitespace(maxPos);if(pos<textLen){output+='<p>';context.inParagraph=!0}}
function outputParagraphEnd(){if(!context.inParagraph){return}
output+='</p>';context.inParagraph=!1}
function outputVerbatim(tag){var flags=context.flags;context.flags=tag.getFlags();outputText(currentTag.getPos()+currentTag.getLen(),0,!1);context.flags=flags}
function outputWhitespace(maxPos){while(pos<maxPos&&" \n\t".indexOf(text[pos])>-1){output+=text[pos];++pos}}
function disablePlugin(pluginName){if(plugins[pluginName]){plugins[pluginName].isDisabled=!0}}
function enablePlugin(pluginName){if(plugins[pluginName]){plugins[pluginName].isDisabled=!1}}
function executePluginParser(pluginName){var pluginConfig=plugins[pluginName];if(pluginConfig.quickMatch&&text.indexOf(pluginConfig.quickMatch)<0){return}
var matches=[];if(HINT.regexp&&HINT.regexpLimit&&typeof pluginConfig.regexp!=='undefined'&&typeof pluginConfig.regexpLimit!=='undefined'){matches=getMatches(pluginConfig.regexp,pluginConfig.regexpLimit);if(!matches.length){return}}
getPluginParser(pluginName)(text,matches)}
function executePluginParsers(){for(var pluginName in plugins){if(!plugins[pluginName].isDisabled){executePluginParser(pluginName)}}}
function getMatches(regexp,limit){regexp.lastIndex=0;var matches=[],cnt=0,m;while(++cnt<=limit&&(m=regexp.exec(text))){var pos=m.index,match=[[m[0],pos]],i=0;while(++i<m.length){var str=m[i];if(str===undefined){match.push(['',-1])}else{match.push([str,text.indexOf(str,pos)]);pos+=str.length}}
matches.push(match)}
return matches}
function getPluginParser(pluginName){return plugins[pluginName].parser}
function registerParser(pluginName,parser,regexp,limit){if(!plugins[pluginName]){plugins[pluginName]={}}
if(regexp){plugins[pluginName].regexp=regexp;plugins[pluginName].limit=limit||Infinity}
plugins[pluginName].parser=parser}
function closeAncestor(tag){if(!HINT.closeAncestor){return!1}
if(openTags.length){var tagName=tag.getName(),tagConfig=tagsConfig[tagName];if(tagConfig.rules.closeAncestor){var i=openTags.length;while(--i>=0){var ancestor=openTags[i],ancestorName=ancestor.getName();if(tagConfig.rules.closeAncestor[ancestorName]){++currentFixingCost;tagStack.push(tag);addMagicEndTag(ancestor,tag.getPos(),tag.getSortPriority()-1);return!0}}}}
return!1}
function closeParent(tag){if(!HINT.closeParent){return!1}
if(openTags.length){var tagName=tag.getName(),tagConfig=tagsConfig[tagName];if(tagConfig.rules.closeParent){var parent=openTags[openTags.length-1],parentName=parent.getName();if(tagConfig.rules.closeParent[parentName]){++currentFixingCost;tagStack.push(tag);addMagicEndTag(parent,tag.getPos(),tag.getSortPriority()-1);return!0}}}
return!1}
function createChild(tag){if(!HINT.createChild){return}
var tagConfig=tagsConfig[tag.getName()];if(tagConfig.rules.createChild){var priority=-1000,_text=text.substr(pos),tagPos=pos+_text.length-_text.replace(/^[ \n\r\t]+/,'').length;tagConfig.rules.createChild.forEach(function(tagName){addStartTag(tagName,tagPos,0,++priority)})}}
function fosterParent(tag){if(!HINT.fosterParent){return!1}
if(openTags.length){var tagName=tag.getName(),tagConfig=tagsConfig[tagName];if(tagConfig.rules.fosterParent){var parent=openTags[openTags.length-1],parentName=parent.getName();if(tagConfig.rules.fosterParent[parentName]){if(parentName!==tagName&&currentFixingCost<maxFixingCost){addFosterTag(tag,parent)}
tagStack.push(tag);addMagicEndTag(parent,tag.getPos(),tag.getSortPriority()-1);currentFixingCost+=4;return!0}}}
return!1}
function requireAncestor(tag){if(!HINT.requireAncestor){return!1}
var tagName=tag.getName(),tagConfig=tagsConfig[tagName];if(tagConfig.rules.requireAncestor){var i=tagConfig.rules.requireAncestor.length;while(--i>=0){var ancestorName=tagConfig.rules.requireAncestor[i];if(cntOpen[ancestorName]){return!1}}
logger.err('Tag requires an ancestor',{'requireAncestor':tagConfig.rules.requireAncestor.join(', '),'tag':tag});return!0}
return!1}
function addFosterTag(tag,fosterTag){var coords=getMagicStartCoords(tag.getPos()+tag.getLen()),childPos=coords[0],childPrio=coords[1];var childTag=addCopyTag(fosterTag,childPos,0,childPrio);tag.cascadeInvalidationTo(childTag)}
function addMagicEndTag(startTag,tagPos,prio){var tagName=startTag.getName();if(HINT.RULE_IGNORE_WHITESPACE&&((currentTag.getFlags()|startTag.getFlags())&RULE_IGNORE_WHITESPACE)){tagPos=getMagicEndPos(tagPos)}
var endTag=addEndTag(tagName,tagPos,0,prio||0);endTag.pairWith(startTag);return endTag}
function getMagicEndPos(tagPos){while(tagPos>pos&&WHITESPACE.indexOf(text[tagPos-1])>-1){--tagPos}
return tagPos}
function getMagicStartCoords(tagPos){var nextPos,nextPrio,nextTag,prio;if(!tagStack.length){nextPos=textLen+1;nextPrio=0}else{nextTag=tagStack[tagStack.length-1];nextPos=nextTag.getPos();nextPrio=nextTag.getSortPriority()}
while(tagPos<nextPos&&WHITESPACE.indexOf(text[tagPos])>-1){++tagPos}
prio=(tagPos===nextPos)?nextPrio-1:0;return[tagPos,prio]}
function isFollowedByClosingTag(tag){return(!tagStack.length)?!1:tagStack[tagStack.length-1].canClose(tag)}
function processTags(){if(!tagStack.length){return}
for(var tagName in tagsConfig){cntOpen[tagName]=0;cntTotal[tagName]=0}
do{while(tagStack.length){if(!tagStackIsSorted){sortTags()}
currentTag=tagStack.pop();processCurrentTag()}
openTags.forEach(function(startTag){addMagicEndTag(startTag,textLen)})}
while(tagStack.length);}
function processCurrentTag(){if((context.flags&RULE_IGNORE_TAGS)&&!currentTag.canClose(openTags[openTags.length-1])&&!currentTag.isSystemTag()){currentTag.invalidate()}
var tagPos=currentTag.getPos(),tagLen=currentTag.getLen();if(pos>tagPos&&!currentTag.isInvalid()){var startTag=currentTag.getStartTag();if(startTag&&openTags.indexOf(startTag)>=0){addEndTag(startTag.getName(),pos,Math.max(0,tagPos+tagLen-pos)).pairWith(startTag);return}
if(currentTag.isIgnoreTag()){var ignoreLen=tagPos+tagLen-pos;if(ignoreLen>0){addIgnoreTag(pos,ignoreLen);return}}
currentTag.invalidate()}
if(currentTag.isInvalid()){return}
if(currentTag.isIgnoreTag()){outputIgnoreTag(currentTag)}else if(currentTag.isBrTag()){if(!HINT.RULE_PREVENT_BR||!(context.flags&RULE_PREVENT_BR)){outputBrTag(currentTag)}}else if(currentTag.isParagraphBreak()){outputText(currentTag.getPos(),0,!0)}else if(currentTag.isVerbatim()){outputVerbatim(currentTag)}else if(currentTag.isStartTag()){processStartTag(currentTag)}else{processEndTag(currentTag)}}
function processStartTag(tag){var tagName=tag.getName(),tagConfig=tagsConfig[tagName];if(cntTotal[tagName]>=tagConfig.tagLimit){logger.err('Tag limit exceeded',{'tag':tag,'tagName':tagName,'tagLimit':tagConfig.tagLimit});tag.invalidate();return}
filterTag(tag);if(tag.isInvalid()){return}
if(currentFixingCost<maxFixingCost){if(fosterParent(tag)||closeParent(tag)||closeAncestor(tag)){return}}
if(cntOpen[tagName]>=tagConfig.nestingLimit){logger.err('Nesting limit exceeded',{'tag':tag,'tagName':tagName,'nestingLimit':tagConfig.nestingLimit});tag.invalidate();return}
if(!tagIsAllowed(tagName)){var msg='Tag is not allowed in this context',context={'tag':tag,'tagName':tagName};if(tag.getLen()>0){logger.warn(msg,context)}else{logger.debug(msg,context)}
tag.invalidate();return}
if(requireAncestor(tag)){tag.invalidate();return}
if(HINT.RULE_AUTO_CLOSE&&tag.getFlags()&RULE_AUTO_CLOSE&&!tag.isSelfClosingTag()&&!tag.getEndTag()&&!isFollowedByClosingTag(tag)){var newTag=new Tag(Tag.SELF_CLOSING_TAG,tagName,tag.getPos(),tag.getLen());newTag.setAttributes(tag.getAttributes());newTag.setFlags(tag.getFlags());tag=newTag}
if(HINT.RULE_TRIM_FIRST_LINE&&tag.getFlags()&RULE_TRIM_FIRST_LINE&&text[tag.getPos()+tag.getLen()]==="\n"){addIgnoreTag(tag.getPos()+tag.getLen(),1)}
outputTag(tag);pushContext(tag);createChild(tag)}
function processEndTag(tag){var tagName=tag.getName();if(!cntOpen[tagName]){return}
var closeTags=[];var i=openTags.length;while(--i>=0){var openTag=openTags[i];if(tag.canClose(openTag)){break}
closeTags.push(openTag);++currentFixingCost}
if(i<0){logger.debug('Skipping end tag with no start tag',{'tag':tag});return}
var flags=tag.getFlags();closeTags.forEach(function(openTag){flags|=openTag.getFlags()});var ignoreWhitespace=(HINT.RULE_IGNORE_WHITESPACE&&(flags&RULE_IGNORE_WHITESPACE));var keepReopening=HINT.RULE_AUTO_REOPEN&&(currentFixingCost<maxFixingCost),reopenTags=[];closeTags.forEach(function(openTag){var openTagName=openTag.getName();if(keepReopening){if(openTag.getFlags()&RULE_AUTO_REOPEN){reopenTags.push(openTag)}else{keepReopening=!1}}
var tagPos=tag.getPos();if(ignoreWhitespace){tagPos=getMagicEndPos(tagPos)}
var endTag=new Tag(Tag.END_TAG,openTagName,tagPos,0);endTag.setFlags(openTag.getFlags());outputTag(endTag);popContext()});outputTag(tag);popContext();if(closeTags.length&&currentFixingCost<maxFixingCost){var ignorePos=pos;i=tagStack.length;while(--i>=0&&++currentFixingCost<maxFixingCost){var upcomingTag=tagStack[i];if(upcomingTag.getPos()>ignorePos||upcomingTag.isStartTag()){break}
var j=closeTags.length;while(--j>=0&&++currentFixingCost<maxFixingCost){if(upcomingTag.canClose(closeTags[j])){closeTags.splice(j,1);if(reopenTags[j]){reopenTags.splice(j,1)}
ignorePos=Math.max(ignorePos,upcomingTag.getPos()+upcomingTag.getLen());break}}}
if(ignorePos>pos){outputIgnoreTag(new Tag(Tag.SELF_CLOSING_TAG,'i',pos,ignorePos-pos))}}
reopenTags.forEach(function(startTag){var newTag=addCopyTag(startTag,pos,0);var endTag=startTag.getEndTag();if(endTag){newTag.pairWith(endTag)}})}
function popContext(){var tag=openTags.pop();--cntOpen[tag.getName()];context=context.parentContext}
function pushContext(tag){var tagName=tag.getName(),tagFlags=tag.getFlags(),tagConfig=tagsConfig[tagName];++cntTotal[tagName];if(tag.isSelfClosingTag()){return}
var allowed=[];context.allowed.forEach(function(v,k){if(!HINT.RULE_IS_TRANSPARENT||!(tagFlags&RULE_IS_TRANSPARENT)){v=(v&0xFF00)|(v>>8)}
allowed.push(tagConfig.allowed[k]&v)});var flags=tagFlags|(context.flags&RULES_INHERITANCE);if(flags&RULE_DISABLE_AUTO_BR){flags&=~RULE_ENABLE_AUTO_BR}
++cntOpen[tagName];openTags.push(tag);context={parentContext:context};context.allowed=allowed;context.flags=flags}
function tagIsAllowed(tagName){var n=tagsConfig[tagName].bitNumber;return!!(context.allowed[n>>3]&(1<<(n&7)))}
function addStartTag(name,pos,len,prio){return addTag(Tag.START_TAG,name,pos,len,prio||0)}
function addEndTag(name,pos,len,prio){return addTag(Tag.END_TAG,name,pos,len,prio||0)}
function addSelfClosingTag(name,pos,len,prio){return addTag(Tag.SELF_CLOSING_TAG,name,pos,len,prio||0)}
function addBrTag(pos,prio){return addTag(Tag.SELF_CLOSING_TAG,'br',pos,0,prio||0)}
function addIgnoreTag(pos,len,prio){return addTag(Tag.SELF_CLOSING_TAG,'i',pos,Math.min(len,textLen-pos),prio||0)}
function addParagraphBreak(pos,prio){return addTag(Tag.SELF_CLOSING_TAG,'pb',pos,0,prio||0)}
function addCopyTag(tag,pos,len,prio){var copy=addTag(tag.getType(),tag.getName(),pos,len,tag.getSortPriority());copy.setAttributes(tag.getAttributes());return copy}
function addTag(type,name,pos,len,prio){var tag=new Tag(type,name,pos,len,prio||0);if(tagsConfig[name]){tag.setFlags(tagsConfig[name].rules.flags)}
if((!tagsConfig[name]&&!tag.isSystemTag())||isInvalidTextSpan(pos,len)){tag.invalidate()}else if(tagsConfig[name]&&tagsConfig[name].isDisabled){logger.warn('Tag is disabled',{'tag':tag,'tagName':name});tag.invalidate()}else{insertTag(tag)}
return tag}
function isInvalidTextSpan(pos,len){return(len<0||pos<0||pos+len>textLen||/[\uDC00-\uDFFF]/.test(text.substr(pos,1)+text.substr(pos+len,1)))}
function insertTag(tag){if(!tagStackIsSorted){tagStack.push(tag)}else{var i=tagStack.length,key=getSortKey(tag);while(i>0&&key>getSortKey(tagStack[i-1])){tagStack[i]=tagStack[i-1];--i}
tagStack[i]=tag}}
function addTagPair(name,startPos,startLen,endPos,endLen,prio){var endTag=addEndTag(name,endPos,endLen,-prio||0),startTag=addStartTag(name,startPos,startLen,prio||0);startTag.pairWith(endTag);return startTag}
function addVerbatim(pos,len,prio){return addTag(Tag.SELF_CLOSING_TAG,'v',pos,len,prio||0)}
function sortTags(){var arr={},keys=[],i=tagStack.length;while(--i>=0){var tag=tagStack[i],key=getSortKey(tag,i);keys.push(key);arr[key]=tag}
keys.sort();i=keys.length;tagStack=[];while(--i>=0){tagStack.push(arr[keys[i]])}
tagStackIsSorted=!0}
function getSortKey(tag,tagIndex){var prioFlag=(tag.getSortPriority()>=0),prio=tag.getSortPriority();if(!prioFlag){prio+=(1<<30)}
var lenFlag=(tag.getLen()>0),lenOrder;if(lenFlag){lenOrder=textLen-tag.getLen()}else{var order={};order[Tag.END_TAG]=0;order[Tag.SELF_CLOSING_TAG]=1;order[Tag.START_TAG]=2;lenOrder=order[tag.getType()]}
return hex32(tag.getPos())+(+prioFlag)+hex32(prio)+(+lenFlag)+hex32(lenOrder)+hex32(tagIndex||0)}
function hex32(number){var hex=number.toString(16);return"        ".substr(hex.length)+hex}
var MSXML=(typeof DOMParser==='undefined'||typeof XSLTProcessor==='undefined');var xslt={init:function(xsl){var stylesheet=xslt.loadXML(xsl);if(MSXML){var generator=new ActiveXObject('MSXML2.XSLTemplate.6.0');generator.stylesheet=stylesheet;xslt.proc=generator.createProcessor()}else{xslt.proc=new XSLTProcessor;xslt.proc.importStylesheet(stylesheet)}},loadXML:function(xml){var dom;if(MSXML){dom=new ActiveXObject('MSXML2.FreeThreadedDOMDocument.6.0');dom.async=!1;dom.validateOnParse=!1;dom.loadXML(xml)}else{dom=(new DOMParser).parseFromString(xml,'text/xml')}
if(!dom){throw 'Cannot parse '+xml}
return dom},setParameter:function(paramName,paramValue){if(MSXML){xslt.proc.addParameter(paramName,paramValue,'')}else{xslt.proc.setParameter(null,paramName,paramValue)}},transformToFragment:function(xml,targetDoc){if(MSXML){var div=targetDoc.createElement('div'),fragment=targetDoc.createDocumentFragment();xslt.proc.input=xslt.loadXML(xml);xslt.proc.transform();div.innerHTML=xslt.proc.output;while(div.firstChild){fragment.appendChild(div.firstChild)}
return fragment}
return xslt.proc.transformToFragment(xslt.loadXML(xml),targetDoc)}};xslt.init(xsl);var functionCache={};function preview(text,target){var targetDoc=target.ownerDocument;if(!targetDoc){throw 'Target does not have a ownerDocument'}
var resultFragment=xslt.transformToFragment(parse(text).replace(/<[eis]>[^<]*<\/[eis]>/g,''),targetDoc),lastUpdated=target;if(typeof window!=='undefined'&&'chrome' in window){resultFragment.querySelectorAll('script').forEach(function(oldScript){let newScript=document.createElement('script');for(let attribute of oldScript.attributes){newScript.setAttribute(attribute.name,attribute.value)}
newScript.textContent=oldScript.textContent;oldScript.parentNode.replaceChild(newScript,oldScript)})}
if(HINT.hash){computeHashes(resultFragment)}
if(HINT.onRender){executeEvents(resultFragment,'render')}
function computeHashes(fragment){var nodes=fragment.querySelectorAll('[data-s9e-livepreview-hash]'),i=nodes.length;while(--i>=0){nodes[i].setAttribute('data-s9e-livepreview-hash',hash(nodes[i].outerHTML))}}
function executeEvent(node,eventName){var code=node.getAttribute('data-s9e-livepreview-on'+eventName);if(!functionCache[code]){functionCache[code]=new Function(code)}
functionCache[code].call(node)}
function executeEvents(root,eventName){if(root instanceof Element&&root.hasAttribute('data-s9e-livepreview-on'+eventName)){executeEvent(root,eventName)}
var nodes=root.querySelectorAll('[data-s9e-livepreview-on'+eventName+']'),i=nodes.length;while(--i>=0){executeEvent(nodes[i],eventName)}}
function refreshElementContent(oldParent,newParent){var oldNodes=oldParent.childNodes,newNodes=newParent.childNodes,oldCnt=oldNodes.length,newCnt=newNodes.length,oldNode,newNode,left=0,right=0;while(left<oldCnt&&left<newCnt){oldNode=oldNodes[left];newNode=newNodes[left];if(!refreshNode(oldNode,newNode)){break}
++left}
var maxRight=Math.min(oldCnt-left,newCnt-left);while(right<maxRight){oldNode=oldNodes[oldCnt-(right+1)];newNode=newNodes[newCnt-(right+1)];if(!refreshNode(oldNode,newNode)){break}
++right}
var i=oldCnt-right;while(--i>=left){oldParent.removeChild(oldNodes[i]);lastUpdated=oldParent}
var rightBoundary=newCnt-right;if(left>=rightBoundary){return}
var newNodesFragment=targetDoc.createDocumentFragment();i=left;do{newNode=newNodes[i];if(HINT.onUpdate&&newNode instanceof Element){executeEvents(newNode,'update')}
lastUpdated=newNodesFragment.appendChild(newNode)}
while(i<--rightBoundary);if(!right){oldParent.appendChild(newNodesFragment)}else{oldParent.insertBefore(newNodesFragment,oldParent.childNodes[left])}}
function refreshNode(oldNode,newNode){if(oldNode.nodeName!==newNode.nodeName||oldNode.nodeType!==newNode.nodeType){return!1}
if(oldNode instanceof HTMLElement&&newNode instanceof HTMLElement){if(!oldNode.isEqualNode(newNode)&&!elementHashesMatch(oldNode,newNode)){if(HINT.onUpdate&&newNode.hasAttribute('data-s9e-livepreview-onupdate')){executeEvent(newNode,'update')}
syncElementAttributes(oldNode,newNode);refreshElementContent(oldNode,newNode)}}else if(oldNode.nodeType===3||oldNode.nodeType===8){if(oldNode.nodeValue!==newNode.nodeValue){oldNode.nodeValue=newNode.nodeValue;lastUpdated=oldNode}}
return!0}
function elementHashesMatch(oldEl,newEl){if(!HINT.hash){return!1}
const attrName='data-s9e-livepreview-hash';return oldEl.hasAttribute(attrName)&&newEl.hasAttribute(attrName)&&oldEl.getAttribute(attrName)===newEl.getAttribute(attrName)}
function hash(text){var pos=text.length,s1=0,s2=0;while(--pos>=0){s1=(s1+text.charCodeAt(pos))%0xFFFF;s2=(s1+s2)%0xFFFF}
return(s2<<16)|s1}
function syncElementAttributes(oldEl,newEl){var oldAttributes=oldEl.attributes,newAttributes=newEl.attributes,oldCnt=oldAttributes.length,newCnt=newAttributes.length,i=oldCnt,ignoreAttrs=' '+oldEl.getAttribute('data-s9e-livepreview-ignore-attrs')+' ';while(--i>=0){var oldAttr=oldAttributes[i],namespaceURI=oldAttr.namespaceURI,attrName=oldAttr.name;if(HINT.ignoreAttrs&&ignoreAttrs.indexOf(' '+attrName+' ')>-1){continue}
if(!newEl.hasAttributeNS(namespaceURI,attrName)){oldEl.removeAttributeNS(namespaceURI,attrName);lastUpdated=oldEl}}
i=newCnt;while(--i>=0){var newAttr=newAttributes[i],namespaceURI=newAttr.namespaceURI,attrName=newAttr.name,attrValue=newAttr.value;if(HINT.ignoreAttrs&&ignoreAttrs.indexOf(' '+attrName+' ')>-1){continue}
if(attrValue!==oldEl.getAttributeNS(namespaceURI,attrName)){oldEl.setAttributeNS(namespaceURI,attrName,attrValue);lastUpdated=oldEl}}}
refreshElementContent(target,resultFragment);return lastUpdated}
function setParameter(paramName,paramValue){xslt.setParameter(paramName,paramValue)}if(!window.s9e)window.s9e={};window.s9e.TextFormatter={'preview':preview}})();

var module={}

module.exports=function(t){var o={};function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)e.d(r,n,function(o){return t[o]}.bind(null,n));return r},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=10)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat["models/Post"]},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},function(t,o){t.exports=flarum.core.compat["utils/PostControls"]},function(t,o){t.exports=flarum.core.compat["components/Post"]},function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,o){t.exports=flarum.core.compat["components/CommentPost"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o,e){"use strict";e.r(o);var r=e(1),n=e(0),a=e.n(n),p=e(3),s=e.n(p),i=e(2),u=e.n(i),c=e(6),l=e.n(c),f=e(7),d=e.n(f),v=e(5),b=e.n(v),x=e(8),y=e.n(x),A=e(9),g=e.n(A),h=e(4),_=e.n(h);a.a.initializers.add("flarum-approval",(function(){s.a.prototype.isApproved=s.a.attribute("isApproved"),Object(r.extend)(s.a.prototype,"badges",(function(t){this.isApproved()||t.has("hidden")||t.add("awaitingApproval",m(l.a,{type:"awaitingApproval",icon:"fas fa-gavel",label:a.a.translator.trans("flarum-approval.forum.badge.awaiting_approval_tooltip")}))})),u.a.prototype.isApproved=u.a.attribute("isApproved"),u.a.prototype.canApprove=u.a.attribute("canApprove"),Object(r.extend)(d.a.prototype,"elementAttrs",(function(t){this.attrs.discussion.isApproved()||(t.className+=" DiscussionListItem--unapproved")})),Object(r.extend)(b.a.prototype,"elementAttrs",(function(t){this.attrs.post.isApproved()||(t.className+=" Post--unapproved")})),Object(r.extend)(y.a.prototype,"headerItems",(function(t){this.attrs.post.isApproved()||this.attrs.post.isHidden()||t.add("unapproved",a.a.translator.trans("flarum-approval.forum.post.awaiting_approval_text"))})),Object(r.override)(b.a.prototype,"flagReason",(function(t,o){return"approval"===o.type()?a.a.translator.trans("flarum-approval.forum.post.awaiting_approval_text"):t(o)})),Object(r.extend)(_.a,"destructiveControls",(function(t,o){!o.isApproved()&&o.canApprove()&&t.add("approve",m(g.a,{icon:"fas fa-check",onclick:_.a.approveAction.bind(o)},a.a.translator.trans("flarum-approval.forum.post_controls.approve_button")),10)})),_.a.approveAction=function(){this.save({isApproved:!0}),1===this.number()&&this.discussion().pushAttributes({isApproved:!0})}}),-10)}]);


flarum.extensions['flarum-approval']=module.exports

var module={}

module.exports=function(t){var a={};function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=t,o.c=a,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="",o(o.s=22)}([function(t,a){t.exports=flarum.core.compat.app},function(t,a){t.exports=flarum.core.compat.Model},function(t,a){t.exports=flarum.core.compat["utils/withAttr"]},function(t,a){t.exports=flarum.core.compat.extend},function(t,a){t.exports=flarum.core.compat["components/Button"]},function(t,a){t.exports=flarum.core.compat["components/Post"]},function(t,a){t.exports=flarum.core.compat["utils/PostControls"]},function(t,a){t.exports=flarum.core.compat["utils/Stream"]},function(t,a){t.exports=flarum.core.compat["components/Page"]},function(t,a){t.exports=flarum.core.compat.Component},function(t,a){t.exports=flarum.core.compat["components/Link"]},function(t,a){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,a){t.exports=flarum.core.compat["helpers/avatar"]},function(t,a){t.exports=flarum.core.compat["helpers/username"]},function(t,a){t.exports=flarum.core.compat["helpers/icon"]},function(t,a){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,a){t.exports=flarum.core.compat["components/Modal"]},function(t,a){t.exports=flarum.core.compat["components/HeaderSecondary"]},function(t,a){t.exports=flarum.core.compat["components/NotificationsDropdown"]},function(t,a){t.exports=flarum.core.compat["utils/ItemList"]},function(t,a){t.exports=flarum.core.compat["utils/humanTime"]},function(t,a){t.exports=flarum.core},function(t,a,o){"use strict";function e(){return(e=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t}).apply(this,arguments)}o.r(a);var s=o(0),n=o.n(s),r=o(1),l=o.n(r);function i(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a}var c=function(t){function a(){return t.apply(this,arguments)||this}return i(a,t),a}(l.a);e(c.prototype,{type:l.a.attribute("type"),reason:l.a.attribute("reason"),reasonDetail:l.a.attribute("reasonDetail"),createdAt:l.a.attribute("createdAt",l.a.transformDate),post:l.a.hasOne("post"),user:l.a.hasOne("user")});var u=c,p=o(8),f=o.n(p),d=o(9),g=o.n(d),h=o(10),v=o.n(h),b=o(11),_=o.n(b),y=o(12),x=o.n(y),N=o(13),F=o.n(N),k=o(14),w=o.n(k),C=o(15),D=o.n(C),P=function(t){function a(){return t.apply(this,arguments)||this}i(a,t);var o=a.prototype;return o.oninit=function(a){t.prototype.oninit.call(this,a),this.state=this.attrs.state},o.view=function(){var t=this.state.cache||[];return m("div",{className:"NotificationList FlagList"},m("div",{className:"NotificationList-header"},m("h4",{className:"App-titleControl App-titleControl--text"},app.translator.trans("flarum-flags.forum.flagged_posts.title"))),m("div",{className:"NotificationList-content"},m("ul",{className:"NotificationGroup-content"},t.length?t.map((function(t){var a=t.post();return m("li",null,m(v.a,{href:app.route.post(a),className:"Notification Flag",onclick:function(t){app.flags.index=a,t.redraw=!1}},x()(a.user()),w()("fas fa-flag",{className:"Notification-icon"}),m("span",{className:"Notification-content"},app.translator.trans("flarum-flags.forum.flagged_posts.item_text",{username:F()(a.user()),em:m("em",null),discussion:a.discussion().title()})),D()(t.createdAt()),m("div",{className:"Notification-excerpt"},a.contentPlain())))})):this.state.loading?_.a.component({className:"LoadingIndicator--block"}):m("div",{className:"NotificationList-empty"},app.translator.trans("flarum-flags.forum.flagged_posts.empty_text")))))},a}(g.a),O=function(t){function a(){return t.apply(this,arguments)||this}i(a,t);var o=a.prototype;return o.oninit=function(a){t.prototype.oninit.call(this,a),app.history.push("flags"),app.flags.load(),this.bodyClass="App--flags"},o.view=function(){return m("div",{className:"FlagsPage"},m(P,{state:app.flags}))},a}(f.a),A=function(){function t(t){this.app=t,this.loading=!1}return t.prototype.load=function(){var t=this;this.cache&&!this.app.session.user.attribute("newFlagCount")||(this.loading=!0,m.redraw(),this.app.store.find("flags").then((function(a){t.app.session.user.pushAttributes({newFlagCount:0}),t.cache=a.sort((function(t,a){return a.createdAt()-t.createdAt()}))})).catch((function(){})).then((function(){t.loading=!1,m.redraw()})))},t}(),j=o(3),M=o(6),L=o.n(M),B=o(4),T=o.n(B),S=o(16),E=o.n(S),I=o(7),H=o.n(I),R=o(2),U=o.n(R),G=function(t){function a(){return t.apply(this,arguments)||this}i(a,t);var o=a.prototype;return o.oninit=function(a){t.prototype.oninit.call(this,a),this.success=!1,this.reason=H()(""),this.reasonDetail=H()("")},o.className=function(){return"FlagPostModal Modal--medium"},o.title=function(){return app.translator.trans("flarum-flags.forum.flag_post.title")},o.content=function(){if(this.success)return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},app.translator.trans("flarum-flags.forum.flag_post.confirmation_message")),m("div",{className:"Form-group"},m(T.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},app.translator.trans("flarum-flags.forum.flag_post.dismiss_button")))));var t=app.forum.attribute("guidelinesUrl");return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"off_topic"===this.reason(),value:"off_topic",onclick:U()("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_off_topic_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_off_topic_text"),"off_topic"===this.reason()?m("textarea",{className:"FormControl",placeholder:app.translator.trans("flarum-flags.forum.flag_post.reason_details_placeholder"),value:this.reasonDetail(),oninput:U()("value",this.reasonDetail)}):""),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"inappropriate"===this.reason(),value:"inappropriate",onclick:U()("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_inappropriate_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_inappropriate_text",{a:t?m("a",{href:t,target:"_blank"}):void 0}),"inappropriate"===this.reason()?m("textarea",{className:"FormControl",placeholder:app.translator.trans("flarum-flags.forum.flag_post.reason_details_placeholder"),value:this.reasonDetail(),oninput:U()("value",this.reasonDetail)}):""),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"spam"===this.reason(),value:"spam",onclick:U()("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_spam_label")),app.translator.trans("flarum-flags.forum.flag_post.reason_spam_text"),"spam"===this.reason()?m("textarea",{className:"FormControl",placeholder:app.translator.trans("flarum-flags.forum.flag_post.reason_details_placeholder"),value:this.reasonDetail(),oninput:U()("value",this.reasonDetail)}):""),m("label",{className:"checkbox"},m("input",{type:"radio",name:"reason",checked:"other"===this.reason(),value:"other",onclick:U()("value",this.reason)}),m("strong",null,app.translator.trans("flarum-flags.forum.flag_post.reason_other_label")),"other"===this.reason()?m("textarea",{className:"FormControl",value:this.reasonDetail(),oninput:U()("value",this.reasonDetail)}):""))),m("div",{className:"Form-group"},m(T.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading,disabled:!this.reason()},app.translator.trans("flarum-flags.forum.flag_post.submit_button")))))},o.onsubmit=function(t){var a=this;t.preventDefault(),this.loading=!0,app.store.createRecord("flags").save({reason:"other"===this.reason()?null:this.reason(),reasonDetail:this.reasonDetail(),relationships:{user:app.session.user,post:this.attrs.post}},{errorHandler:this.onerror.bind(this)}).then((function(){return a.success=!0})).catch((function(){})).then(this.loaded.bind(this))},a}(E.a),q=function(){Object(j.extend)(L.a,"userControls",(function(t,a){!a.isHidden()&&"comment"===a.contentType()&&a.canFlag()&&t.add("flag",m(T.a,{icon:"fas fa-flag",onclick:function(){return n.a.modal.show(G,{post:a})}},n.a.translator.trans("flarum-flags.forum.post_controls.flag_button")))}))},z=o(17),V=o.n(z),J=o(18),K=function(t){function a(){return t.apply(this,arguments)||this}i(a,t),a.initAttrs=function(a){a.label=a.label||app.translator.trans("flarum-flags.forum.flagged_posts.tooltip"),a.icon=a.icon||"fas fa-flag",t.initAttrs.call(this,a)};var o=a.prototype;return o.getMenu=function(){return m("div",{className:"Dropdown-menu "+this.attrs.menuClassName,onclick:this.menuClick.bind(this)},this.showing?P.component({state:this.attrs.state}):"")},o.goToRoute=function(){m.route.set(app.route("flags"))},o.getUnreadCount=function(){return app.flags.cache?app.flags.cache.length:app.forum.attribute("flagCount")},o.getNewCount=function(){return app.session.user.attribute("newFlagCount")},a}(o.n(J).a),Q=function(){Object(j.extend)(V.a.prototype,"items",(function(t){n.a.forum.attribute("canViewFlags")&&t.add("flags",m(K,{state:n.a.flags}),15)}))},W=o(5),X=o.n(W),Y=o(19),Z=o.n(Y),$=o(20),tt=o.n($),at=function(){Object(j.extend)(X.a.prototype,"elementAttrs",(function(t){this.attrs.post.flags().length&&(t.className+=" Post--flagged")})),X.a.prototype.dismissFlag=function(t){var a=this.attrs.post;return delete a.data.relationships.flags,this.subtree.invalidate(),n.a.flags.cache&&n.a.flags.cache.some((function(t,o){if(t.post()===a){if(n.a.flags.cache.splice(o,1),n.a.flags.index===a){var e=n.a.flags.cache[o];if(e||(e=n.a.flags.cache[0]),e){var s=e.post();n.a.flags.index=s,m.route.set(n.a.route.post(s))}}return!0}})),n.a.request({url:n.a.forum.attribute("apiUrl")+a.apiEndpoint()+"/flags",method:"DELETE",body:t})},X.a.prototype.flagActionItems=function(){var t=this,a=new Z.a,o=L.a.destructiveControls(this.attrs.post);return Object.keys(o.items).forEach((function(a){var e=o.get(a).attrs;e.className="Button",Object(j.extend)(e,"onclick",(function(){return t.dismissFlag()}))})),a.add("controls",m("div",{className:"ButtonGroup"},o.toArray())),a.add("dismiss",m(T.a,{className:"Button",icon:"far fa-eye-slash",onclick:this.dismissFlag.bind(this)},n.a.translator.trans("flarum-flags.forum.post.dismiss_flag_button")),-100),a},Object(j.extend)(X.a.prototype,"content",(function(t){var a=this,o=this.attrs.post,e=o.flags();e.length&&(o.isHidden()&&(this.revealContent=!0),t.unshift(m("div",{className:"Post-flagged"},m("div",{className:"Post-flagged-flags"},e.map((function(t){return m("div",{className:"Post-flagged-flag"},a.flagReason(t))}))),m("div",{className:"Post-flagged-actions"},this.flagActionItems().toArray()))))})),X.a.prototype.flagReason=function(t){if("user"===t.type()){var a=t.user(),o=t.reason(),e=t.reasonDetail(),s=tt()(t.createdAt());return[n.a.translator.trans(o?"flarum-flags.forum.post.flagged_by_with_reason_text":"flarum-flags.forum.post.flagged_by_text",{time:s,user:a,reason:o}),e?m("span",{className:"Post-flagged-detail"},e):""]}}},ot={"flags/addFlagsToPosts":at,"flags/addFlagControl":q,"flags/addFlagsDropdown":Q,"flags/models/Flag":u,"flags/components/FlagList":P,"flags/components/FlagPostModal":G,"flags/components/FlagsPage":O,"flags/components/FlagsDropdown":K},et=o(21);n.a.initializers.add("flarum-flags",(function(){n.a.store.models.posts.prototype.flags=l.a.hasMany("flags"),n.a.store.models.posts.prototype.canFlag=l.a.attribute("canFlag"),n.a.store.models.flags=u,n.a.routes.flags={path:"/flags",component:O},n.a.flags=new A(n.a),q(),Q(),at()})),e(et.compat,ot)}]);


flarum.extensions['flarum-flags']=module.exports

var module={}

module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=16)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["models/Post"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["helpers/punctuateSeries"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},,function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(0),a=o.n(r),s=o(5),i=o.n(s),u=o(6),c=o.n(u),l=o(7),f=o.n(l),p=o(8),d=o.n(p),k=o(2),h=o.n(k),y=o(3),x=o.n(y),b=o(9),v=o.n(b),_=o(4),g=o.n(_),j=o(10),O=o.n(j);function M(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var P=o(11),L=o.n(P),N=o(12),S=o.n(N),C=function(t){function e(){return t.apply(this,arguments)||this}M(e,t);var o=e.prototype;return o.className=function(){return"PostLikesModal Modal--small"},o.title=function(){return app.translator.trans("flarum-likes.forum.post_likes.title")},o.content=function(){return m("div",{className:"Modal-body"},m("ul",{className:"PostLikesModal-list"},this.attrs.post.likes().map((function(t){return m("li",null,m(x.a,{href:app.route.user(t)},S()(t)," "," ",g()(t)))}))))},e}(L.a),B=o(13),T=o.n(B),w=o(14),I=function(t){function e(){return t.apply(this,arguments)||this}M(e,t);var o=e.prototype;return o.icon=function(){return"far fa-thumbs-up"},o.href=function(){return app.route.post(this.attrs.notification.subject())},o.content=function(){var t=this.attrs.notification.fromUser();return app.translator.transChoice("flarum-likes.forum.notifications.post_liked_text",1,{user:t})},o.excerpt=function(){return Object(w.truncate)(this.attrs.notification.subject().contentPlain(),200)},e}(T.a);a.a.initializers.add("flarum-likes",(function(){a.a.notificationComponents.postLiked=I,i.a.prototype.canLike=c.a.attribute("canLike"),i.a.prototype.likes=c.a.hasMany("likes"),Object(n.extend)(h.a.prototype,"actionItems",(function(t){var e=this.attrs.post;if(!e.isHidden()&&e.canLike()){var o=e.likes(),n=a.a.session.user&&o&&o.some((function(t){return t===a.a.session.user}));t.add("like",d.a.component({className:"Button Button--link",onclick:function(){n=!n,e.save({isLiked:n});var t=e.data.relationships.likes.data;t.some((function(e,o){if(e.id===a.a.session.user.id())return t.splice(o,1),!0})),n&&t.unshift({type:"users",id:a.a.session.user.id()})}},a.a.translator.trans(n?"flarum-likes.forum.post.unlike_link":"flarum-likes.forum.post.like_link")))}})),Object(n.extend)(h.a.prototype,"footerItems",(function(t){var e=this.attrs.post,o=e.likes();if(o&&o.length){var n=o.length>4,r=o.sort((function(t){return t===a.a.session.user?-1:1})).slice(0,n?3:4).map((function(t){return m(x.a,{href:a.a.route.user(t)},t===a.a.session.user?a.a.translator.trans("flarum-likes.forum.post.you_text"):g()(t))}));if(n){var s=o.length-r.length;r.push(m("a",{href:"#",onclick:function(t){t.preventDefault(),a.a.modal.show(C,{post:e})}},a.a.translator.transChoice("flarum-likes.forum.post.others_link",s,{count:s})))}t.add("liked",m("div",{className:"Post-likedBy"},O()("far fa-thumbs-up"),a.a.translator.transChoice("flarum-likes.forum.post.liked_by"+(o[0]===a.a.session.user?"_self":"")+"_text",r.length,{count:r.length,users:v()(r)})))}})),Object(n.extend)(f.a.prototype,"notificationTypes",(function(t){t.add("postLiked",{name:"postLiked",icon:"far fa-thumbs-up",label:a.a.translator.trans("flarum-likes.forum.settings.notify_post_liked_label")})}))}))}]);


flarum.extensions['flarum-likes']=module.exports

var module={}

module.exports=function(o){var t={};function n(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=o,n.c=t,n.d=function(o,t,e){n.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:e})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,t){if(1&t&&(o=n(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var r in o)n.d(e,r,function(t){return o[t]}.bind(null,r));return e},n.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(t,"a",t),t},n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},n.p="",n(n.s=11)}([function(o,t){o.exports=flarum.core.compat.app},function(o,t){o.exports=flarum.core.compat.extend},function(o,t){o.exports=flarum.core.compat["models/Discussion"]},function(o,t){o.exports=flarum.core.compat.Model},function(o,t){o.exports=flarum.core.compat["utils/DiscussionControls"]},function(o,t){o.exports=flarum.core.compat["components/NotificationGrid"]},function(o,t){o.exports=flarum.core.compat["components/EventPost"]},function(o,t){o.exports=flarum.core.compat["components/Notification"]},function(o,t){o.exports=flarum.core.compat["components/Badge"]},function(o,t){o.exports=flarum.core.compat["components/DiscussionPage"]},function(o,t){o.exports=flarum.core.compat["components/Button"]},function(o,t,n){"use strict";n.r(t);var e=n(1),r=n(0),c=n.n(r),i=n(3),a=n.n(i),s=n(2),u=n.n(s),f=n(5),p=n.n(f);function l(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var d=n(6),k=function(o){function t(){return o.apply(this,arguments)||this}l(t,o);var n=t.prototype;return n.icon=function(){return this.attrs.post.content().locked?"fas fa-lock":"fas fa-unlock"},n.descriptionKey=function(){return this.attrs.post.content().locked?"flarum-lock.forum.post_stream.discussion_locked_text":"flarum-lock.forum.post_stream.discussion_unlocked_text"},t}(n.n(d).a),b=n(7),y=function(o){function t(){return o.apply(this,arguments)||this}l(t,o);var n=t.prototype;return n.icon=function(){return"fas fa-lock"},n.href=function(){var o=this.attrs.notification;return app.route.discussion(o.subject(),o.content().postNumber)},n.content=function(){return app.translator.trans("flarum-lock.forum.notifications.discussion_locked_text",{user:this.attrs.notification.fromUser()})},t}(n.n(b).a),_=n(8),x=n.n(_);var h=n(4),v=n.n(h),L=n(9),g=n.n(L),j=n(10),O=n.n(j);c.a.initializers.add("flarum-lock",(function(){c.a.postComponents.discussionLocked=k,c.a.notificationComponents.discussionLocked=y,u.a.prototype.isLocked=a.a.attribute("isLocked"),u.a.prototype.canLock=a.a.attribute("canLock"),Object(e.extend)(u.a.prototype,"badges",(function(o){this.isLocked()&&o.add("locked",x.a.component({type:"locked",label:app.translator.trans("flarum-lock.forum.badge.locked_tooltip"),icon:"fas fa-lock"}))})),Object(e.extend)(v.a,"moderationControls",(function(o,t){t.canLock()&&o.add("lock",O.a.component({icon:"fas fa-lock",onclick:this.lockAction.bind(t)},app.translator.trans(t.isLocked()?"flarum-lock.forum.discussion_controls.unlock_button":"flarum-lock.forum.discussion_controls.lock_button")))})),v.a.lockAction=function(){this.save({isLocked:!this.isLocked()}).then((function(){app.current.matches(g.a)&&app.current.get("stream").update(),m.redraw()}))},Object(e.extend)(p.a.prototype,"notificationTypes",(function(o){o.add("discussionLocked",{name:"discussionLocked",icon:"fas fa-lock",label:c.a.translator.trans("flarum-lock.forum.settings.notify_discussion_locked_label")})}))}))}]);


flarum.extensions['flarum-lock']=module.exports

var module={}

module.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e,n){var i,r,l;"undefined"!=typeof self&&self,r=[],void 0===(l="function"==typeof(i=function(){var t=/mac|iphone|ipad|ipod/i.test(navigator.platform)?"metaKey":"ctrlKey",e=/[*_]/,n=/^[ \t]*(?:(?:[-+*]|\d+\.)[ \t]+(?:\[[ x]][ \t]+)?|>[ \t]*)*(?::[ \t]*)?/,i=/[-=\s"'`<>\[\](){}+*^$\\.|]$/,r=/(?:[-+*]|\d+\.)[ \t]+(?:\[[ x]][ \t]+)?$/,l=/^(?:\n|$)/,o=/[-+*\[\]x\d.]/g,s=/[^ \t]/g,a=/(\d+)\.(?=[ \t]+$)/,c=/(?:(?:^[ \t]+)?(?:[-+*]|\d+\.|[>:])(?:[ \t]+\[[ x]])?[ \t]*|^[ \t]+)$/,u=/^(?!$)/gm,f={"`":/^``$/m,"~":/^~~$/m},h={"[":"]","(":")","{":"}","<":">"},d={"]":"[",")":"(","}":"{",">":"<"},p={enter:["Enter","Shift+Enter"],indent:["Tab","Cmd+m"],outdent:["Shift+Tab","Cmd+Shift+m"],inline:['"',"'","`","*","_","[","]","(",")","{","}","<",">"]};function m(t,e){var n,i;this._options=((n=e)||(n={}),n.keyMap=function(t){t||(t={});var e={},n=[];for(var i in p)if(p.hasOwnProperty(i)){var r=t[i]||p[i];Array.isArray(r)||(r=r.toString().trim().split(/\s*[|,]\s*/g)),n.push.apply(n,r.map((function(t){return(t=v(t)).key in e||(e[t.key]=0),++e[t.key],{key:t,action:i}})))}return n.forEach((function(t){var n;1<e[t.key.key]&&("ctrlKey"in(n=t.key)||(n.ctrlKey=!1),"altKey"in n||(n.altKey=!1),"shiftKey"in n||(n.shiftKey=!1),"metaKey"in n||(n.metaKey=!1))})),n}(n.keyMap),n.indent=("number"!=typeof(i=n.indent||4)&&(i=(i+"").length),new Array(i+1).join(" ")),n),this._reOutdent=new RegExp("^"+this._options.indent,"mg"),this._handleKey=this._handleKey.bind(this),this.setElement(t)}function v(e){var n={};return e.trim().split(/\s*\+\s*/g).forEach((function(e){switch(e.toLowerCase()){case"cmd":n[t]=!0;break;case"ctrl":case"alt":case"shift":case"meta":n[e.toLowerCase()+"Key"]=!0;break;default:n.key=e}})),n}function y(t,e,n,i){if(t.value=e,t.selectionStart=n,t.selectionEnd=3<arguments.length?i:n,"InputEvent"in window)try{var r=new InputEvent("input");t.dispatchEvent(r)}catch(i){}}function g(t,e){return t.replace(e?s:o," ")}return m.prototype={constructor:m,getElement:function(){return this._elem},setElement:function(t){this._elem&&this._elem.removeEventListener("keydown",this._handleKey),(this._elem=t).addEventListener("keydown",this._handleKey)},getValue:function(){return this._elem.value},setValue:function(t){this._elem.value=t},destroy:function(){this._elem.removeEventListener("keydown",this._handleKey),this._elem=this._options=this._reOutdent=this._handleKey=null},_handleKey:function(t){if(!t.defaultPrevented){var o=this._options.keyMap.find((function(e){return function(t,e){for(var n in e)if(e.hasOwnProperty(n)&&t[n]!==e[n])return!1;return!0}(t,e.key)}));if(o){var s=this._elem.value.substring(0,this._elem.selectionStart),p=this._elem.value.substring(this._elem.selectionStart,this._elem.selectionEnd),m=this._elem.value.substring(this._elem.selectionEnd);switch(o.action){case"enter":!function(t,e,i,o,s,u){var f,d,p,m,v,x=i?null:(d=(f=e).lastIndexOf("\n")+1,{line:p=f.substring(d),offset:d,prefix:(m=n.exec(p))&&m[0]});if(i)e+="\n";else if(x.line&&x.line.charAt(x.line.length-1)in h){var b=x.prefix?g(x.prefix,!0):"";o="\n"+b+o,u||(e+="\n"+b+s)}else x.prefix?!u&&x.prefix===x.line&&l.test(o)?e=e.substring(0,x.offset)+x.prefix.replace(c,""):!u&&(v=x.prefix,r.test(v))?e+="\n"+x.prefix.replace(a,(function(t,e){return parseInt(e)+1+"."})):e+="\n"+g(x.prefix,u):e+="\n";y(t,e+o,e.length)}(this._elem,s,p,m,this._options.indent,t.shiftKey);break;case"indent":!function(t,e,n,i,r){var l=e.length,o=e.lastIndexOf("\n")+1;o<l&&(n=e.substring(o)+n,e=e.substring(0,o)),(o<l||!n)&&(l+=r.length),n?n=n.replace(u,r):e+=r,y(t,e+n+i,l,n?o+n.length:l)}(this._elem,s,p,m,this._options.indent);break;case"outdent":!function(t,e,n,i,r,l){var o=e.length,s=e.lastIndexOf("\n")+1;s<o&&(n=e.substring(s)+n,e=e.substring(0,s),n.substring(0,r.length)===r&&(o-=r.length)),y(t,e+(n=n.replace(l,""))+i,o,s+n.length)}(this._elem,s,p,m,this._options.indent,this._reOutdent);break;case"inline":v=this._elem,x=s,b=p,k=m,E=t.key,b||E in h||k.charAt(0)!==E?b||("'"!==E||i.test(x))&&!(E in d)?!b&&E in f&&f[E].test(x)?y(v,x+E+"language\n"+E+E+E+("\n"!==k.charAt(0)?"\n":"")+k,x.length+1,x.length+9):E===x.slice(-1)&&E===k.slice(0,1)?y(v,x.slice(0,-1)+b+k.slice(1),x.length-1,x.length-1+b.length):y(v,x+(d[E]||E)+b+(h[E]||E)+k,x.length+1,x.length+1+b.length):y(v,x+E+k,x.length+1):y(v,x+(e.test(E)?E+E:"")+k,x.length+1)}t.preventDefault()}}var v,x,b,k,E}},m})?i.apply(e,r):i)||(t.exports=l)},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(1),l=n.n(r),o=n(3),s=n.n(o);function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var c=n(2),u=n.n(c),f=navigator.userAgent.match(/Macintosh/)?"Meta":"Control",h=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var n=e.prototype;return n.oncreate=function(e){t.prototype.oncreate.call(this,e),document.getElementById(this.attrs.for).addEventListener("keydown",this.shortcut.bind(this))},n.view=function(t){return m("div",{id:"MarkdownToolbar","data-for":this.attrs.for,style:{display:"inline-block"}},t.children)},n.shortcut=function(t){if(t.metaKey&&"Meta"===f||t.ctrlKey&&"Control"===f){var e=this.element.querySelector('[data-hotkey="'+t.key+'"]');e&&(e.click(),t.preventDefault())}},e}(u.a),d=n(4),p=n.n(d);function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var y=null;function g(t){return t.trim().split("\n").length>1}function x(t,e){return Array(e+1).join(t)}function b(t,e){for(var n=e;t[n]&&null!=t[n-1]&&!t[n-1].match(/\s/);)n--;return n}function k(t,e,n){for(var i=e,r=n?/\n/:/\s/;t[i]&&!t[i].match(r);)i++;return i}function E(t){var e,n,i=t.value.slice(0,t.selectionStart),r=t.value.slice(t.selectionEnd),l=i.match(/\n*$/),o=r.match(/^\n*/),s=l?l[0].length:0,a=o?o[0].length:0;return i.match(/\S/)&&s<2&&(e=x("\n",2-s)),r.match(/\S/)&&a<2&&(n=x("\n",2-a)),null==e&&(e=""),null==n&&(n=""),{newlinesToAppend:e,newlinesToPrepend:n}}var S=function(t,e){var n=e.prefix,i=e.suffix,r=e.blockPrefix,l=e.blockSuffix,o=e.replaceNext,s=e.prefixSpace,a=e.scanFor,c=e.surroundWithNewlines,u=t.selectionStart,f=t.selectionEnd,h=t.value.slice(t.selectionStart,t.selectionEnd),d=g(h)&&r.length>0?r+"\n":n,p=g(h)&&l.length>0?"\n"+l:i;if(s){var m=t.value[t.selectionStart-1];0===t.selectionStart||null==m||m.match(/\s/)||(d=" "+d)}h=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(t.selectionStart===t.selectionEnd)t.selectionStart=b(t.value,t.selectionStart),t.selectionEnd=k(t.value,t.selectionEnd,i);else{var r=t.selectionStart-e.length,l=t.selectionEnd+n.length,o=t.value.slice(r,t.selectionStart)===e,s=t.value.slice(t.selectionEnd,l)===n;o&&s&&(t.selectionStart=r,t.selectionEnd=l)}return t.value.slice(t.selectionStart,t.selectionEnd)}(t,d,p,e.multiline);var v=t.selectionStart,y=t.selectionEnd,x=o.length>0&&p.indexOf(o)>-1&&h.length>0;if(c){var S=E(t);d=S.newlinesToAppend+n,p+=S.newlinesToPrepend}if(h.startsWith(d)&&h.endsWith(p)){var _=h.slice(d.length,h.length-p.length);if(u===f){var w=u-d.length;w=Math.max(w,v),v=y=w=Math.min(w,v+_.length)}else y=v+_.length;return{text:_,selectionStart:v,selectionEnd:y}}if(x)return a.length>0&&h.match(a)?{text:d+(p=p.replace(o,h)),selectionStart:v=y=v+d.length,selectionEnd:y}:{text:d+h+p,selectionStart:v=v+d.length+h.length+p.indexOf(o),selectionEnd:y=v+o.length};var O=d+h+p;v=u+d.length,y=f+d.length;var j=h.match(/^\s*|\s*$/g);if(e.trimFirst&&j){var K=j[0]||"",M=j[1]||"";O=K+d+h.trim()+p+M,v+=K.length,y-=M.length}return{text:O,selectionStart:v,selectionEnd:y}},_=function(t,e){var n,i=t.value.slice(t.selectionStart,t.selectionEnd);n=e.orderedList?function(t){var e,n,i,r,l=/^\d+\.\s+/,o=t.selectionStart===t.selectionEnd,s=t.value.slice(t.selectionStart,t.selectionEnd),a=s,c=s.split("\n");if(o){var u=t.value.slice(0,t.selectionStart).split(/\n/);i=t.selectionStart-u[u.length-1].length,r=k(t.value,t.selectionStart,!0),a=t.value.slice(i,r)}var f=a.split("\n");if(f.every((function(t){return l.test(t)}))){if(s=(c=f.map((function(t){return t.replace(l,"")}))).join("\n"),o&&i&&r){var h=f[0].length-c[0].length;n=e=t.selectionStart-h,t.selectionStart=i,t.selectionEnd=r}}else{s=(c=function(){var t,e,n,i=[];for(n=t=0,e=c.length;t<e;n=++t){var r=c[n];i.push(n+1+". "+r)}return i}()).join("\n");var d=E(t),p=d.newlinesToAppend,m=d.newlinesToPrepend;e=(n=t.selectionStart+p.length)+s.length,o&&(n=e),s=p+s+m}return{text:s,selectionStart:n,selectionEnd:e}}(t):e.multiline&&g(i)?function(t,e){var n=e.prefix,i=e.suffix,r=e.surroundWithNewlines,l=t.value.slice(t.selectionStart,t.selectionEnd),o=t.selectionStart,s=t.selectionEnd,a=l.split("\n");if(a.every((function(t){return t.startsWith(n)&&t.endsWith(i)})))s=o+(l=a.map((function(t){return t.slice(n.length,t.length-i.length)})).join("\n")).length;else if(l=a.map((function(t){return n+t+i})).join("\n"),r){var c=E(t),u=c.newlinesToAppend,f=c.newlinesToPrepend;s=(o+=u.length)+l.length,l=u+l+f}return{text:l,selectionStart:o,selectionEnd:s}}(t,e):S(t,e),function(t,e){var n=e.text,i=e.selectionStart,r=e.selectionEnd,l=t.selectionStart,o=t.value.slice(0,l),s=t.value.slice(t.selectionEnd);if(null===y||!0===y){t.contentEditable="true";try{y=document.execCommand("insertText",!1,n)}catch(t){y=!1}t.contentEditable="false"}if(y&&!t.value.slice(0,t.selectionStart).endsWith(n)&&(y=!1),!y){try{document.execCommand("ms-beginUndoUnit")}catch(t){}t.value=o+n+s;try{document.execCommand("ms-endUndoUnit")}catch(t){}var a=document.createEvent("Event");a.initEvent("input",!0,!0),t.dispatchEvent(a)}null!=i&&null!=r?t.setSelectionRange(i,r):t.setSelectionRange(l,t.selectionEnd)}(t,n)},w=navigator.userAgent.match(/Macintosh/)?"⌘":"ctrl",O=function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var n=e.prototype;return n.oncreate=function(e){t.prototype.oncreate.call(this,e),this.$().tooltip()},n.view=function(){return m("button",{className:"Button Button--icon Button--link",title:this.title(),"data-hotkey":this.attrs.hotkey,onclick:this.click.bind(this),onkeydown:this.keydown.bind(this)},p()(this.attrs.icon))},n.keydown=function(t){" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),this.click())},n.click=function(){return t=this.element,e=this.attrs.style,n=t.parentElement,i=v({},{prefix:"",suffix:"",blockPrefix:"",blockSuffix:"",multiline:!1,replaceNext:"",prefixSpace:!1,scanFor:"",surroundWithNewlines:!1,orderedList:!1,trimFirst:!1},e),void((r=document.getElementById(n.dataset.for))&&(r.focus(),_(r,i)));var t,e,n,i,r},n.title=function(){var t=this.attrs.title;return this.attrs.hotkey&&(t+=" <"+w+"-"+this.attrs.hotkey+">"),t},e}(u.a);
/*!
 * Includes modified code from GitHub Markdown Toolbar Element
 * https://github.com/github/markdown-toolbar-element/
 *
 * Original Copyright GitHub, Inc.
 * Released under the MIT license
 * https://github.com/github/markdown-toolbar-element/blob/master/LICENSE
 */
app.initializers.add("flarum-markdown",(function(t){var e=1;Object(i.extend)(l.a.prototype,"oninit",(function(){this.textareaId="textarea"+e++})),Object(i.extend)(l.a.prototype,"view",(function(t){t.children[0].attrs.id=this.textareaId})),Object(i.extend)(l.a.prototype,"oncreate",(function(){this.editor=new s.a(this.$("textarea")[0],{keyMap:{indent:["Ctrl+m"],outdent:["Ctrl+M"]}})})),Object(i.extend)(l.a.prototype,"onremove",(function(){this.editor.destroy()})),Object(i.extend)(l.a.prototype,"toolbarItems",(function(e){var n=function(e){return t.translator.trans("flarum-markdown.forum.composer."+e+"_tooltip")};e.add("markdown",m(h,{for:this.textareaId},m(O,{title:n("header"),icon:"fas fa-heading",style:{prefix:"### "}}),m(O,{title:n("bold"),icon:"fas fa-bold",style:{prefix:"**",suffix:"**",trimFirst:!0},hotkey:"b"}),m(O,{title:n("italic"),icon:"fas fa-italic",style:{prefix:"_",suffix:"_",trimFirst:!0},hotkey:"i"}),m(O,{title:n("quote"),icon:"fas fa-quote-left",style:{prefix:"> ",multiline:!0,surroundWithNewlines:!0}}),m(O,{title:n("code"),icon:"fas fa-code",style:{prefix:"`",suffix:"`",blockPrefix:"```",blockSuffix:"```"}}),m(O,{title:n("link"),icon:"fas fa-link",style:{prefix:"[",suffix:"](https://)",replaceNext:"https://",scanFor:"https?://"}}),m(O,{title:n("image"),icon:"fas fa-image",style:{prefix:"![",suffix:"](https://)",replaceNext:"https://",scanFor:"https?://"}}),m(O,{title:n("unordered_list"),icon:"fas fa-list-ul",style:{prefix:"- ",multiline:!0,surroundWithNewlines:!0}}),m(O,{title:n("ordered_list"),icon:"fas fa-list-ol",style:{prefix:"1. ",multiline:!0,orderedList:!0}})),100)}))}))}]);


flarum.extensions['flarum-markdown']=module.exports

var module={}

module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=29)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["utils/string"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["components/PostPreview"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/EditPostComposer"]},function(t,e){t.exports=flarum.core.compat.Fragment},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["models/Post"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["helpers/punctuateSeries"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e,n){!function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n="undefined"!=typeof window,o=n&&null!=window.mozInnerScreenX;function r(t,r,i){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var s=i&&i.debug||!1;if(s){var a=document.querySelector("#input-textarea-caret-position-mirror-div");a&&a.parentNode.removeChild(a)}var u=document.createElement("div");u.id="input-textarea-caret-position-mirror-div",document.body.appendChild(u);var c=u.style,p=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,f="INPUT"===t.nodeName;c.whiteSpace="pre-wrap",f||(c.wordWrap="break-word"),c.position="absolute",s||(c.visibility="hidden"),e.forEach((function(t){f&&"lineHeight"===t?c.lineHeight=p.height:c[t]=p[t]})),o?t.scrollHeight>parseInt(p.height)&&(c.overflowY="scroll"):c.overflow="hidden",u.textContent=t.value.substring(0,r),f&&(u.textContent=u.textContent.replace(/\s/g," "));var l=document.createElement("span");l.textContent=t.value.substring(r)||".",u.appendChild(l);var d={top:l.offsetTop+parseInt(p.borderTopWidth),left:l.offsetLeft+parseInt(p.borderLeftWidth),height:parseInt(p.lineHeight)};return s?l.style.backgroundColor="#aaa":document.body.removeChild(u),d}void 0!==t.exports?t.exports=r:n&&(window.getCaretCoordinates=r)}()},function(t,e){t.exports=flarum.core.compat["components/TextEditorButton"]},function(t,e){t.exports=flarum.core.compat["components/ReplyComposer"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/KeyboardNavigatable"]},function(t,e){t.exports=flarum.core.compat["components/UserPage"]},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/PostsUserPage"]},function(t,e,n){"use strict";n.r(e),n.d(e,"filterUserMentions",(function(){return gt})),n.d(e,"filterPostMentions",(function(){return yt}));var o=n(0),r=n(2),i=n.n(r),s=n(12),a=n.n(s),u=n(3),c=n(1),p=n.n(c),f=n(5),l=n.n(f),d=n(13),h=n.n(d);var v=n(14),b=n.n(v),g=n(15),y=n.n(g),x=n(16),w=n.n(x),C=n(17),P=n.n(C),T=n(4),S=n.n(T),_=n(6),j=n.n(_);var M=n(18),B=n.n(M),O=n(19),k=n.n(O),A=n(7),H=n.n(A);function I(t,e,n){var o=t.user(),r="@"+(o?o.username():t.number())+"#"+t.id()+" ";e.fields.content()||(e.body.attrs.originalContent=r);var i=e.editor.getSelectionRange()[0],s=e.fields.content().slice(0,i),a=0==s.length?0:3-s.match(/(\n{0,2})$/)[0].length;e.editor.insertAtCursor(Array(a).join("\n")+(n?"> "+r+n.trim().replace(/\n/g,"\n> ")+"\n\n":r))}function W(t,e){app.composer.bodyMatches(H.a)&&app.composer.body.attrs.post.discussion()===t.discussion()?I(t,app.composer,e):k.a.replyAction.call(t.discussion()).then((function(n){return I(t,n,e)}))}function E(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var N=n(8),D=n.n(N),L=function(t){function e(e){var n;return(n=t.call(this)||this).post=e,n}E(e,t);var n=e.prototype;return n.view=function(){var t=this;return m("button",{class:"Button PostQuoteButton",onclick:function(){W(t.post,t.content)}},j()("fas fa-quote-left",{className:"Button-icon"}),app.translator.trans("flarum-mentions.forum.post.quote_button"))},n.show=function(t,e){var n=this.$().show(),o=n.offsetParent().offset();n.css("left",t-o.left).css("top",e-o.top),this.hideHandler=this.hide.bind(this),$(document).on("mouseup",this.hideHandler)},n.showStart=function(t,e){var n=this.$();this.show(t,$(window).scrollTop()+e-n.outerHeight()-5)},n.showEnd=function(t,e){var n=this.$();this.show(t-n.outerWidth(),$(window).scrollTop()+e+5)},n.hide=function(){this.$().hide(),$(document).off("mouseup",this.hideHandler)},e}(D.a);function R(){Object(o.extend)(p.a.prototype,"oncreate",(function(){var t=this.attrs.post;if(!(t.isHidden()||app.session.user&&!t.discussion().canReply())){var e=this.$(".Post-body"),n=$('<div class="Post-quoteButtonContainer"></div>'),o=new L(t),r=function(t){setTimeout((function(){var r=function(t){var e=window.getSelection();if(e.rangeCount){var n=e.getRangeAt(0),o=n.commonAncestorContainer;if(t[0]===o||$.contains(t[0],o)){var r=$("<div>").append(n.cloneContents());return r.find("img.emoji").replaceWith((function(){return this.alt})),r.find("img").replaceWith((function(){return"![]("+this.src+")"})),r.find("a").replaceWith((function(){return"["+this.innerText+"]("+this.href+")"})),r.text()}}return""}(e);if(r){o.content=r,m.render(n[0],o.render());var i=window.getSelection().getRangeAt(0).getClientRects(),s=i[0];if(t.clientY<s.bottom&&t.clientX-s.right<s.left-t.clientX)o.showStart(s.left,s.top);else{var a=i[i.length-1];o.showEnd(a.right,a.bottom)}}}),1)};this.$().after(n).on("mouseup",r),"ontouchstart"in window&&document.addEventListener("selectionchange",r,!1)}}))}var z=n(20),U=n.n(z),q=n(10),J=n.n(q),X=n(21),Y=n.n(X),F=n(22),G=n.n(F),K=n(23),Q=n.n(K),V=n(24),Z=n.n(V),tt=n(25),et=n.n(tt);function nt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var rt=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return ot(nt(nt(e=t.call.apply(t,[this].concat(o))||this)),"items",[]),ot(nt(nt(e)),"active",!1),ot(nt(nt(e)),"index",0),ot(nt(nt(e)),"keyWasJustPressed",!1),e}E(e,t);var n=e.prototype;return n.view=function(){return m("ul",{className:"Dropdown-menu MentionsDropdown"},this.items.map((function(t){return m("li",null,t)})))},n.show=function(t,e){this.$().show().css({left:t+"px",top:e+"px"}),this.active=!0},n.hide=function(){this.$().hide(),this.active=!1},n.navigate=function(t){var e=this;this.keyWasJustPressed=!0,this.setIndex(this.index+t,!0),clearTimeout(this.keyWasJustPressedTimeout),this.keyWasJustPressedTimeout=setTimeout((function(){return e.keyWasJustPressed=!1}),500)},n.complete=function(){this.$("li").eq(this.index).find("button").click()},n.setIndex=function(t,e){if(!this.keyWasJustPressed||e){var n=this.$(),o=n.find("li"),r=t;r<0?r=o.length-1:r>=o.length&&(r=0),this.index=r;var i=o.removeClass("active").eq(r).addClass("active");if(e){var s,a=n.scrollTop(),u=n.offset().top,c=u+n.outerHeight(),p=i.offset().top,f=p+i.outerHeight();p<u?s=a-u+p-parseInt(n.css("padding-top"),10):f>c&&(s=a-c+f+parseInt(n.css("padding-bottom"),10)),void 0!==s&&n.stop(!0).animate({scrollTop:s},100)}}},e}(D.a);function it(){Object(o.extend)(J.a.prototype,"oncreate",(function(){var t,e,n,o=$('<div class="ComposerBody-mentionsDropdownContainer"></div>'),r=new rt,i=this.$("textarea").wrap('<div class="ComposerBody-mentionsWrapper"></div>'),s=[],a=Array.from(app.store.all("users")),c=new Set(a.map((function(t){return t.id()})));this.navigator=new et.a,this.navigator.when((function(){return r.active})).onUp((function(){return r.navigate(-1)})).onDown((function(){return r.navigate(1)})).onSelect(r.complete.bind(r)).onCancel(r.hide.bind(r)).bindTo(i),i.after(o).on("click keyup input",(function(i){var p=this;if(-1===[9,13,27,40,38,37,39].indexOf(i.which)){var f=this.selectionStart;if(!(this.selectionEnd-f>0)){var l=this.value;t=0;for(var d=f-1;d>=f-30;d--){if("@"===l.substr(d,1)){t=d+1;break}}if(r.hide(),r.active=!1,t){e=l.substring(t,f).toLowerCase();var h=function(n,o,i,s){void 0===s&&(s="");var a=S()(n);return e&&(a.children=[Z()(a.text,e)],delete a.text),m("button",{className:"PostPreview "+s,onclick:function(){return function(e){app.composer.editor.replaceBeforeCursor(t-1,e+" "),r.hide()}(o)},onmouseenter:function(){r.setIndex($(this).parent().index())}},m("span",{className:"PostPreview-content"},Q()(n),a," "," ",i))},v=function(t){return[t.username(),t.displayName()].some((function(t){return t.toLowerCase().substr(0,e.length)===e}))},b=function(){var n=[];if(e&&a.forEach((function(t){v(t)&&n.push(h(t,"@"+t.username(),"","MentionsDropdown-user"))})),app.composer.bodyMatches(G.a)||app.composer.bodyMatches(H.a)){var i=app.composer.body.attrs,s=i.post,c=s&&s.discussion()||i.discussion;c&&c.posts().filter((function(t){return t&&"comment"===t.contentType()&&(!s||t.number()<s.number())})).sort((function(t,e){return e.createdAt()-t.createdAt()})).filter((function(t){var e=t.user();return e&&v(e)})).splice(0,5).forEach((function(t){var e=t.user();n.push(h(e,"@"+e.username()+"#"+t.id(),[app.translator.trans("flarum-mentions.forum.composer.reply_to_post_text",{number:t.number()})," — ",Object(u.truncate)(t.contentPlain(),200)],"MentionsDropdown-post"))}))}if(n.length){r.items=n,m.render(o[0],r.render()),r.show();var f=U()(p,t),l=r.$().outerWidth(),d=r.$().outerHeight(),b=r.$().offsetParent(),g=f.left,y=f.top-p.scrollTop+15;y+d>b.height()&&(y=f.top-p.scrollTop-d-15),g+l>b.width()&&(g=b.width()-l),r.show(g,y)}else r.active=!1,r.hide()};r.active=!0,b(),r.setIndex(0),r.$().scrollTop(0),clearTimeout(n),e.length>1&&(n=setTimeout((function(){var t=e.toLowerCase();-1===s.indexOf(t)&&(app.store.find("users",{filter:{q:e},page:{limit:5}}).then((function(t){t.forEach((function(t){c.has(t.id())||(c.add(t.id()),a.push(t))})),r.active&&b()})),s.push(t))}),250))}}}}))})),Object(o.extend)(J.a.prototype,"toolbarItems",(function(t){var e=this;t.add("mention",m(Y.a,{onclick:function(){return e.attrs.composer.editor.insertAtCursor("@")},icon:"fas fa-at"},app.translator.trans("flarum-mentions.forum.composer.mention_tooltip")))}))}var st=n(9),at=n.n(st),ut=function(t){function e(){return t.apply(this,arguments)||this}E(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-reply"},n.href=function(){var t=this.attrs.notification,e=t.subject(),n=t.content();return app.route.discussion(e.discussion(),n&&n.replyNumber)},n.content=function(){var t=this.attrs.notification.fromUser();return app.translator.transChoice("flarum-mentions.forum.notifications.post_mentioned_text",1,{user:t})},n.excerpt=function(){return Object(u.truncate)(this.attrs.notification.subject().contentPlain(),200)},e}(at.a),ct=function(t){function e(){return t.apply(this,arguments)||this}E(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-at"},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t.discussion(),t.number())},n.content=function(){var t=this.attrs.notification.fromUser();return app.translator.trans("flarum-mentions.forum.notifications.user_mentioned_text",{user:t})},n.excerpt=function(){return Object(u.truncate)(this.attrs.notification.subject().contentPlain(),200)},e}(at.a),pt=n(26),ft=n.n(pt),lt=n(27),dt=n.n(lt),mt=n(28),ht=function(t){function e(){return t.apply(this,arguments)||this}return E(e,t),e.prototype.loadResults=function(t){return app.store.find("posts",{filter:{type:"comment",mentioned:this.user.id()},page:{offset:t,limit:this.loadLimit},sort:"-createdAt"})},e}(n.n(mt).a),vt=n(11),bt=n.n(vt);function gt(t){var e=app.store.getBy("users","username",t.getAttribute("username"));if(e)return t.setAttribute("id",e.id()),t.setAttribute("displayname",bt()(S()(e))),!0}function yt(t){var e=app.store.getById("posts",t.getAttribute("id"));if(e)return t.setAttribute("discussionid",e.discussion().id()),t.setAttribute("number",e.number()),t.setAttribute("displayname",bt()(S()(e.user()))),!0}i.a.initializers.add("flarum-mentions",(function(){!function(){function t(){var t=this.attrs.post.contentHtml();if(t!==this.oldPostContentHtml&&!this.isEditing()){this.oldPostContentHtml=t;var e=this.attrs.post,n=this.$();this.$().on("click",".UserMention, .PostMention",(function(t){m.route.set(this.getAttribute("href")),t.preventDefault()})),this.$(".PostMention").each((function(){var t,o=$(this),r=o.data("id"),i=$('<ul class="Dropdown-menu PostMention-preview fade"/>');n.append(i);var s=function(){return $('.PostStream-item[data-id="'+r+'"]')},a=function(){var t=s(),a=!1;if(t.length){var u=t.offset().top,c=window.pageYOffset;u>c&&u+t.height()<c+$(window).height()&&(t.addClass("pulsate"),a=!0)}if(!a){var p=function(){var t=i.outerHeight(!0),e=0;o.offset().top-t<$(window).scrollTop()+$("#header").outerHeight()?e+=o.outerHeight(!0):e-=t,i.show().css("top",o.offset().top-n.offset().top+e).css("left",o.offsetParent().offset().left-n.offset().left).css("max-width",o.offsetParent().width())},f=function(t){var n=t.discussion();m.render(i[0],[n!==e.discussion()?m("li",null,m("span",{className:"PostMention-preview-discussion"},n.title())):"",m("li",null,l.a.component({post:t}))]),p()},d=app.store.getById("posts",r);d&&d.discussion()?f(d):(m.render(i[0],h.a.component()),app.store.find("posts",r).then(f),p()),setTimeout((function(){return i.off("transitionend").addClass("in")}))}},u=function(){s().removeClass("pulsate"),i.hasClass("in")&&i.removeClass("in").one("transitionend",(function(){return i.hide()}))};o.on("touchend",(function(t){t.cancelable&&t.preventDefault()})),o.add(i).hover((function(){clearTimeout(t),t=setTimeout(a,250)}),(function(){clearTimeout(t),s().removeClass("pulsate"),t=setTimeout(u,250)})).on("touchend",(function(t){a(),t.stopPropagation()})),$(document).on("touchend",u)}))}}Object(o.extend)(p.a.prototype,"oncreate",t),Object(o.extend)(p.a.prototype,"onupdate",t)}(),y.a.prototype.mentionedBy=b.a.hasMany("mentionedBy"),Object(o.extend)(p.a.prototype,"footerItems",(function(t){var e=this,n=this.attrs.post.mentionedBy();if(n&&n.length){var o=function(){e.$(".Post-mentionedBy-preview").removeClass("in").one("transitionend",(function(){$(this).hide()}))},r=[],i=n.sort((function(t){return t.user()===app.session.user?-1:0})).filter((function(t){var e=t.user();if(-1===r.indexOf(e))return r.push(e),!0})),s=i.length>4,a=i.slice(0,s?3:4).map((function(t){var e=t.user();return m(w.a,{href:app.route.post(t),onclick:o,"data-number":t.number()},app.session.user===e?app.translator.trans("flarum-mentions.forum.post.you_text"):S()(e))}));if(s){var u=i.length-a.length;a.push(app.translator.transChoice("flarum-mentions.forum.post.others_text",u,{count:u}))}t.add("replies",m("div",{className:"Post-mentionedBy",oncreate:function(t){var e,r=$(t.dom),i=$('<ul class="Dropdown-menu Post-mentionedBy-preview fade"/>');r.append(i),r.children().hover((function(){clearTimeout(e),e=setTimeout((function(){!i.hasClass("in")&&i.is(":visible")||(m.render(i[0],n.map((function(t){return m("li",{"data-number":t.number()},l.a.component({post:t,onclick:o}))}))),i.show(),setTimeout((function(){return i.off("transitionend").addClass("in")})))}),500)}),(function(){clearTimeout(e),e=setTimeout(o,250)})),r.find(".Post-mentionedBy-summary a").hover((function(){i.find('[data-number="'+$(this).data("number")+'"]').addClass("active")}),(function(){i.find("[data-number]").removeClass("active")}))}},m("span",{className:"Post-mentionedBy-summary"},j()("fas fa-reply"),app.translator.transChoice("flarum-mentions.forum.post.mentioned_by"+(i[0].user()===app.session.user?"_self":"")+"_text",a.length,{count:a.length,users:P()(a)}))))}})),Object(o.extend)(p.a.prototype,"actionItems",(function(t){var e=this.attrs.post;e.isHidden()||app.session.user&&!e.discussion().canReply()||t.add("reply",m(B.a,{className:"Button Button--link",onclick:function(){return W(e)}},app.translator.trans("flarum-mentions.forum.post.reply_link")))})),R(),it(),i.a.notificationComponents.postMentioned=ut,i.a.notificationComponents.userMentioned=ct,Object(o.extend)(a.a.prototype,"notificationTypes",(function(t){t.add("postMentioned",{name:"postMentioned",icon:"fas fa-reply",label:i.a.translator.trans("flarum-mentions.forum.settings.notify_post_mentioned_label")}),t.add("userMentioned",{name:"userMentioned",icon:"fas fa-at",label:i.a.translator.trans("flarum-mentions.forum.settings.notify_user_mentioned_label")})})),i.a.routes["user.mentions"]={path:"/u/:username/mentions",component:ht},Object(o.extend)(ft.a.prototype,"navItems",(function(t){var e=this.user;t.add("mentions",dt.a.component({href:i.a.route("user.mentions",{username:e.username()}),name:"mentions",icon:"fas fa-at"},i.a.translator.trans("flarum-mentions.forum.user.mentions_link")),80)})),u.getPlainContent.removeSelectors.push("a.PostMention")}))}]);


flarum.extensions['flarum-mentions']=module.exports

var module={}

module.exports=function(t){var o={};function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=o,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(e,r,function(o){return t[o]}.bind(null,r));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=12)}([function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,o){t.exports=flarum.core.compat["components/EventPost"]},function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,o){t.exports=flarum.core.compat["utils/string"]},function(t,o,n){"use strict";n.r(o);var e=n(0),r=n.n(e),c=n(3),i=n.n(c),s=n(2),a=n.n(s);var u=n(5),p=function(t){var o,n;function e(){return t.apply(this,arguments)||this}n=t,(o=e).prototype=Object.create(n.prototype),o.prototype.constructor=o,o.__proto__=n;var r=e.prototype;return r.icon=function(){return"fas fa-thumbtack"},r.descriptionKey=function(){return this.attrs.post.content().sticky?"flarum-sticky.forum.post_stream.discussion_stickied_text":"flarum-sticky.forum.post_stream.discussion_unstickied_text"},e}(n.n(u).a),f=n(1),l=n(6),d=n.n(l);var y=n(4),k=n.n(y),b=n(7),x=n.n(b),_=n(8),v=n.n(_);var S=n(9),h=n.n(S),j=n(10),O=n.n(j),g=n(11);r.a.initializers.add("flarum-sticky",(function(){r.a.postComponents.discussionStickied=p,a.a.prototype.isSticky=i.a.attribute("isSticky"),a.a.prototype.canSticky=i.a.attribute("canSticky"),Object(f.extend)(a.a.prototype,"badges",(function(t){this.isSticky()&&t.add("sticky",d.a.component({type:"sticky",label:app.translator.trans("flarum-sticky.forum.badge.sticky_tooltip"),icon:"fas fa-thumbtack"}),10)})),Object(f.extend)(k.a,"moderationControls",(function(t,o){o.canSticky()&&t.add("sticky",v.a.component({icon:"fas fa-thumbtack",onclick:this.stickyAction.bind(o)},app.translator.trans(o.isSticky()?"flarum-sticky.forum.discussion_controls.unsticky_button":"flarum-sticky.forum.discussion_controls.sticky_button")))})),k.a.stickyAction=function(){this.save({isSticky:!this.isSticky()}).then((function(){app.current.matches(x.a)&&app.current.get("stream").update(),m.redraw()}))},Object(f.extend)(h.a.prototype,"requestParams",(function(t){t.include.push("firstPost")})),Object(f.extend)(O.a.prototype,"infoItems",(function(t){var o=this.attrs.discussion;if(o.isSticky()&&!this.attrs.params.q&&!o.lastReadPostNumber()){var n=o.firstPost();if(n){var e=Object(g.truncate)(n.contentPlain(),175);t.add("excerpt",m.trust(e),-100)}}}))}))}]);


flarum.extensions['flarum-sticky']=module.exports

var module={}

module.exports=function(t){var o={};function n(r){if(o[r])return o[r].exports;var s=o[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=o,n.d=function(t,o,r){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var s in t)n.d(r,s,function(o){return t[o]}.bind(null,s));return r},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=20)}([function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat["components/IndexPage"]},function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat.app},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,o){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,o){t.exports=flarum.core.compat["components/Dropdown"]},function(t,o){t.exports=flarum.core.compat["utils/extractText"]},function(t,o){t.exports=flarum.core.compat.Component},function(t,o){t.exports=flarum.core.compat["components/LinkButton"]},function(t,o){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,o){t.exports=flarum.core.compat["components/SettingsPage"]},function(t,o){t.exports=flarum.core.compat["components/Switch"]},function(t,o){t.exports=flarum.core.compat["components/Notification"]},function(t,o){t.exports=flarum.core.compat["helpers/username"]},function(t,o,n){"use strict";n.r(o);var r=n(0),s=n(3),e=n.n(s),a=n(8),i=n.n(a),c=n(4),u=n.n(c),p=n(1),l=n.n(p),f=n(9),b=n.n(f),d=n(6),g=n.n(d);var _=n(5),w=n.n(_),y=n(7),h=n.n(y),x=n(10),v=n.n(x);function O(){return(O=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function j(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}var S=n(11),P=n.n(S),N=n(2),M=n.n(N),k=n(12),B=n.n(k),D=n(13),I=function(t){function o(){return t.apply(this,arguments)||this}return j(o,t),o.prototype.view=function(){return m("button",{className:"SubscriptionMenuItem hasIcon",onclick:this.attrs.onclick},this.attrs.active?M()("fas fa-check",{className:"Button-icon"}):"",m("span",{className:"SubscriptionMenuItem-label"},M()(this.attrs.icon,{className:"Button-icon"}),m("strong",null,this.attrs.label),m("span",{className:"SubscriptionMenuItem-description"},this.attrs.description)))},o}(n.n(D).a),A=function(t){function o(){return t.apply(this,arguments)||this}j(o,t);var n=o.prototype;return n.oninit=function(o){t.prototype.oninit.call(this,o),this.options=[{subscription:!1,icon:"far fa-star",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.not_following_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.not_following_text")},{subscription:"follow",icon:"fas fa-star",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.following_text")},{subscription:"ignore",icon:"far fa-eye-slash",label:app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),description:app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_text")}]},n.view=function(){var t=this,o=this.attrs.discussion,n=o.subscription(),r=app.translator.trans("flarum-subscriptions.forum.sub_controls.follow_button"),s="far fa-star",e="SubscriptionMenu-button--"+n;switch(n){case"follow":r=app.translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),s="fas fa-star";break;case"ignore":r=app.translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),s="far fa-eye-slash"}var a=app.session.user.preferences(),i=a.notify_newPost_email,c=a.notify_newPost_alert,u=B()(app.translator.trans(i?"flarum-subscriptions.forum.sub_controls.notify_email_tooltip":"flarum-subscriptions.forum.sub_controls.notify_alert_tooltip")),p={className:"Button SubscriptionMenu-button "+e,icon:s,onclick:this.saveSubscription.bind(this,o,-1===["follow","ignore"].indexOf(n)&&"follow"),title:u};return(i||c)&&!1===n?p.oncreate=p.onupdate=function(t){$(t.dom).tooltip({container:".SubscriptionMenu",placement:"bottom",delay:250,title:u})}:p.onupdate=function(t){return $(t.dom).tooltip("destroy")},m("div",{className:"Dropdown ButtonGroup SubscriptionMenu"},w.a.component(p,r),m("button",{className:"Dropdown-toggle Button Button--icon "+e,"data-toggle":"dropdown"},M()("fas fa-caret-down",{className:"Button-icon"})),m("ul",{className:"Dropdown-menu dropdown-menu Dropdown-menu--right"},this.options.map((function(r){return m("li",null,I.component(O(O({},r),{},{onclick:t.saveSubscription.bind(t,o,r.subscription),active:n===r.subscription})))}))))},n.saveSubscription=function(t,o){t.save({subscription:o}),this.$(".SubscriptionMenu-button").tooltip("hide")},o}(P.a);var R=n(14),T=n.n(R),L=n(15),C=n.n(L);var q=n(16),G=n.n(q),z=n(17),U=n.n(z),E=n(18),F=n.n(E),H=(n(19),function(t){function o(){return t.apply(this,arguments)||this}j(o,t);var n=o.prototype;return n.icon=function(){return"fas fa-star"},n.href=function(){var t=this.attrs.notification,o=t.subject(),n=t.content()||{};return app.route.discussion(o,n.postNumber)},n.content=function(){return app.translator.trans("flarum-subscriptions.forum.notifications.new_post_text",{user:this.attrs.notification.fromUser()})},o}(F.a));e.a.initializers.add("subscriptions",(function(){e.a.routes.following={path:"/following",component:l.a},e.a.notificationComponents.newPost=H,u.a.prototype.subscription=i.a.attribute("subscription"),Object(r.extend)(u.a.prototype,"badges",(function(t){var o;switch(this.subscription()){case"follow":o=g.a.component({label:app.translator.trans("flarum-subscriptions.forum.badge.following_tooltip"),icon:"fas fa-star",type:"following"});break;case"ignore":o=g.a.component({label:app.translator.trans("flarum-subscriptions.forum.badge.ignoring_tooltip"),icon:"far fa-eye-slash",type:"ignoring"})}o&&t.add("subscription",o)})),Object(r.extend)(v.a,"userControls",(function(t,o,n){if(app.session.user&&!(n instanceof h.a)){var r={none:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.follow_button"),icon:"fas fa-star",save:"follow"},follow:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.unfollow_button"),icon:"far fa-star",save:!1},ignore:{label:app.translator.trans("flarum-subscriptions.forum.discussion_controls.unignore_button"),icon:"fas fa-eye",save:!1}},s=o.subscription()||"none";t.add("subscription",w.a.component({icon:r[s].icon,onclick:o.save.bind(o,{subscription:r[s].save})},r[s].label))}})),Object(r.extend)(h.a.prototype,"sidebarItems",(function(t){if(app.session.user){var o=this.discussion;t.add("subscription",A.component({discussion:o}))}})),Object(r.extend)(l.a.prototype,"navItems",(function(t){if(app.session.user){var o=app.search.stickyParams();t.add("following",T.a.component({href:app.route("following",o),icon:"fas fa-star"},app.translator.trans("flarum-subscriptions.forum.index.following_link")),50)}})),Object(r.extend)(l.a.prototype,"setTitle",(function(){"following"===app.current.get("routeName")&&app.setTitle(app.translator.trans("flarum-subscriptions.forum.following.meta_title_text"))})),Object(r.extend)(C.a.prototype,"requestParams",(function(t){"following"===app.current.get("routeName")&&(t.filter.q=(t.filter.q||"")+" is:following")})),Object(r.extend)(G.a.prototype,"notificationsItems",(function(t){var o=this;t.add("followAfterReply",U.a.component({state:this.user.preferences().followAfterReply,onchange:function(t){o.followAfterReplyLoading=!0,o.user.savePreferences({followAfterReply:t}).then((function(){o.followAfterReplyLoading=!1,m.redraw()}))},loading:this.followAfterReplyLoading},app.translator.trans("flarum-subscriptions.forum.settings.follow_after_reply_label")))})),Object(r.extend)(b.a.prototype,"notificationTypes",(function(t){t.add("newPost",{name:"newPost",icon:"fas fa-star",label:e.a.translator.trans("flarum-subscriptions.forum.settings.notify_new_post_label")})}))}))}]);


flarum.extensions['flarum-subscriptions']=module.exports

var module={}

module.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat["utils/withAttr"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e){t.exports=flarum.core.compat["utils/UserControls"]},function(t,e){t.exports=flarum.core.compat["components/Badge"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e,n){"use strict";n.r(e);var s=n(6),a=n(0),r=n.n(a),o=n(8),u=n.n(o),i=n(1),l=n.n(i),p=n(9),c=n.n(p),d=n(3),f=n.n(d),y=n(4),h=n.n(y);function b(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var v=n(10),_=n.n(v),x=n(7),g=n.n(x),j=n(5),S=n.n(j),U=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e);var n=this.attrs.user.suspendedUntil(),s=null;new Date>n&&(n=null),n&&(s=9999===n.getFullYear()?"indefinitely":"limited"),this.status=g()(s),this.daysRemaining=g()("limited"===s&&1-dayjs().diff(n,"days"))},n.className=function(){return"SuspendUserModal Modal--small"},n.title=function(){return app.translator.trans("flarum-suspend.forum.suspend_user.title",{user:this.attrs.user})},n.content=function(){var t=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",null,app.translator.trans("flarum-suspend.forum.suspend_user.status_heading")),m("div",null,m("label",{className:"checkbox"},m("input",{type:"radio",name:"status",checked:!this.status(),value:"",onclick:S()("value",this.status)}),app.translator.trans("flarum-suspend.forum.suspend_user.not_suspended_label")),m("label",{className:"checkbox"},m("input",{type:"radio",name:"status",checked:"indefinitely"===this.status(),value:"indefinitely",onclick:S()("value",this.status)}),app.translator.trans("flarum-suspend.forum.suspend_user.indefinitely_label")),m("label",{className:"checkbox SuspendUserModal-days"},m("input",{type:"radio",name:"status",checked:"limited"===this.status(),value:"limited",onclick:function(e){t.status(e.target.value),m.redraw.sync(),t.$(".SuspendUserModal-days-input input").select(),e.redraw=!1}}),app.translator.trans("flarum-suspend.forum.suspend_user.limited_time_label"),"limited"===this.status()?m("div",{className:"SuspendUserModal-days-input"},m("input",{type:"number",min:"0",value:this.daysRemaining(),oninput:S()("value",this.daysRemaining),className:"FormControl"}),app.translator.trans("flarum-suspend.forum.suspend_user.limited_time_days_text")):""))),m("div",{className:"Form-group"},m(l.a,{className:"Button Button--primary",loading:this.loading,type:"submit"},app.translator.trans("flarum-suspend.forum.suspend_user.submit_button")))))},n.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0;var n=null;switch(this.status()){case"indefinitely":n=new Date("2038-01-01");break;case"limited":n=dayjs().add(this.daysRemaining(),"days").toDate()}this.attrs.user.save({suspendedUntil:n}).then((function(){return e.hide()}),this.loaded.bind(this))},e}(_.a),M=n(2),N=n.n(M),k=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-ban"},n.href=function(){return app.route.user(this.attrs.notification.subject())},n.content=function(){var t=this.attrs.notification,e=t.content(),n=dayjs(e.date).from(t.createdAt(),!0);return app.translator.trans("flarum-suspend.forum.notifications.user_suspended_text",{user:t.fromUser(),timeReadable:n})},e}(N.a),O=function(t){function e(){return t.apply(this,arguments)||this}b(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-ban"},n.href=function(){return app.route.user(this.attrs.notification.subject())},n.content=function(){var t=this.attrs.notification;return app.translator.trans("flarum-suspend.forum.notifications.user_unsuspended_text",{user:t.fromUser()})},e}(N.a);r.a.initializers.add("flarum-suspend",(function(){r.a.notificationComponents.userSuspended=k,r.a.notificationComponents.userUnsuspended=O,h.a.prototype.canSuspend=f.a.attribute("canSuspend"),h.a.prototype.suspendedUntil=f.a.attribute("suspendedUntil",f.a.transformDate),Object(s.extend)(u.a,"moderationControls",(function(t,e){e.canSuspend()&&t.add("suspend",l.a.component({icon:"fas fa-ban",onclick:function(){return r.a.modal.show(U,{user:e})}},r.a.translator.trans("flarum-suspend.forum.user_controls.suspend_button")))})),Object(s.extend)(h.a.prototype,"badges",(function(t){var e=this.suspendedUntil();new Date<e&&t.add("suspended",c.a.component({icon:"fas fa-ban",type:"suspended",label:r.a.translator.trans("flarum-suspend.forum.user_badge.suspended_tooltip")}))}))}))}]);


flarum.extensions['flarum-suspend']=module.exports

var module={}

module.exports=function(t){var e={};function a(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=50)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.extend},function(t,e,a){"use strict";function s(t){return t.slice(0).sort((function(t,e){var a=t.position(),s=e.position();if(null===a&&null===s)return e.discussionCount()-t.discussionCount();if(null===s)return-1;if(null===a)return 1;var n=t.parent(),o=e.parent();return n===o?a-s:n&&o?n.position()-o.position():n?n===e?1:n.position()-s:o?o===t?-1:a-o.position():0}))}a.d(e,"a",(function(){return s}))},function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var s=a(13),n=a.n(s);function o(t,e,a){void 0===e&&(e={}),void 0===a&&(a={});var s=t&&t.icon(),o=a.useColor,r=void 0===o||o;return e.className=n()([e.className,"icon",s?t.icon():"TagIcon"]),t?(e.style=e.style||{},s?e.style.color=r?t.color():"":e.style.backgroundColor=t.color()):e.className+=" untagged",s?m("i",e):m("span",e)}},function(t,e,a){"use strict";function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}a.d(e,"a",(function(){return s}))},function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var s=a(14),n=a.n(s),o=a(9),r=a.n(o),i=a(3);function c(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="TagLabel "+(e.className||"");var a=n()(e,"link"),s=t?t.name():app.translator.trans("flarum-tags.lib.deleted_tag_text");if(t){var o=t.color();o&&(e.style.backgroundColor=e.style.color=o,e.className+=" colored"),a&&(e.title=t.description()||"",e.href=app.route("tag",{tags:t.slug()}))}else e.className+=" untagged";return m(a?r.a:"span",e,m("span",{className:"TagLabel-text"},t&&t.icon()&&Object(i.a)(t,{},{useColor:!1})," ",s))}},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var s=a(14),n=a.n(s),o=a(5),r=a(2);function i(t,e){void 0===e&&(e={});var a=[],s=n()(e,"link");return e.className="TagsLabel "+(e.className||""),t?Object(r.a)(t).forEach((function(e){(e||1===t.length)&&a.push(Object(o.a)(e,{link:s}))})):a.push(Object(o.a)()),m("span",e,a)}},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e,a){"use strict";function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t}).apply(this,arguments)}a.d(e,"a",(function(){return s}))},function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var s=a(4),n=a(0),o=a.n(n),r=a(16),i=a.n(r),c=a(17),u=a.n(c),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(s.a)(e,t),e}(i()(o.a,{name:o.a.attribute("name"),slug:o.a.attribute("slug"),description:o.a.attribute("description"),color:o.a.attribute("color"),backgroundUrl:o.a.attribute("backgroundUrl"),backgroundMode:o.a.attribute("backgroundMode"),icon:o.a.attribute("icon"),position:o.a.attribute("position"),parent:o.a.hasOne("parent"),defaultSort:o.a.attribute("defaultSort"),isChild:o.a.attribute("isChild"),isHidden:o.a.attribute("isHidden"),discussionCount:o.a.attribute("discussionCount"),lastPostedAt:o.a.attribute("lastPostedAt",o.a.transformDate),lastPostedDiscussion:o.a.hasOne("lastPostedDiscussion"),isRestricted:o.a.attribute("isRestricted"),canStartDiscussion:o.a.attribute("canStartDiscussion"),canAddToDiscussion:o.a.attribute("canAddToDiscussion"),isPrimary:u()("position","parent",(function(t,e){return null!==t&&!1===e}))}))},function(t,e){t.exports=flarum.core.compat["utils/classList"]},function(t,e){t.exports=flarum.core.compat["utils/extract"]},function(t,e){},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e,a){"use strict";var s=a(2),n=a(12),o=a(7),r=a(3),i=a(5);e.a={"tags/utils/sortTags":s.a,"tags/models/Tag":n.a,"tags/helpers/tagsLabel":o.a,"tags/helpers/tagIcon":r.a,"tags/helpers/tagLabel":i.a}},function(t,e){t.exports=flarum.core},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},,function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},,function(t,e,a){"use strict";var s=a(11),n=a(0),o=a.n(n),r=a(24),i=a.n(r),c=a(6),u=a.n(c),l=a(12),p=a(4),d=a(30),f=a.n(d),g=a(9),h=a.n(g),b=a(31),v=a.n(b),y=a(32),x=a.n(y),T=a(3),O=a(5),N=a(2),_=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.tags=Object(N.a)(app.store.all("tags").filter((function(t){return!t.parent()}))),app.history.push("tags",app.translator.trans("flarum-tags.forum.header.back_to_tags_tooltip"))},a.view=function(){var t=this.tags.filter((function(t){return null!==t.position()})),e=this.tags.filter((function(t){return null===t.position()}));return m("div",{className:"TagsPage"},u.a.prototype.hero(),m("div",{className:"container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav"},m("ul",null,v()(u.a.prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content sideNavOffset"},m("ul",{className:"TagTiles"},t.map((function(t){var e=t.lastPostedDiscussion(),a=Object(N.a)(app.store.all("tags").filter((function(e){return e.parent()===t})));return m("li",{className:"TagTile "+(t.color()?"colored":""),style:{backgroundColor:t.color()}},m(h.a,{className:"TagTile-info",href:app.route.tag(t)},t.icon()&&Object(T.a)(t,{},{useColor:!1}),m("h3",{className:"TagTile-name"},t.name()),m("p",{className:"TagTile-description"},t.description()),a?m("div",{className:"TagTile-children"},a.map((function(t){return[m(h.a,{href:app.route.tag(t)},t.name())," "]}))):""),e?m(h.a,{className:"TagTile-lastPostedDiscussion",href:app.route.discussion(e,e.lastPostNumber())},m("span",{className:"TagTile-lastPostedDiscussion-title"},e.title()),x()(e.lastPostedAt())):m("span",{className:"TagTile-lastPostedDiscussion"}))}))),e.length?m("div",{className:"TagCloud"},e.map((function(t){return[Object(O.a)(t,{link:!0})," "]}))):"")))},a.oncreate=function(e){t.prototype.oncreate.call(this,e),app.setTitle(app.translator.trans("flarum-tags.forum.all_tags.meta_title_text")),app.setTitleCount(0)},e}(f.a),j=a(33),C=a.n(j),P=a(7),D=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e);var a=e.post.content()[0],s=e.post.content()[1];function n(t,e){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return app.store.getById("tags",t)}))}e.tagsAdded=n(s,a),e.tagsRemoved=n(a,s)};var a=e.prototype;return a.icon=function(){return"fas fa-tag"},a.descriptionKey=function(){return this.attrs.tagsAdded.length?this.attrs.tagsRemoved.length?"flarum-tags.forum.post_stream.added_and_removed_tags_text":"flarum-tags.forum.post_stream.added_tags_text":"flarum-tags.forum.post_stream.removed_tags_text"},a.descriptionData=function(){var t={};return this.attrs.tagsAdded.length&&(t.tagsAdded=app.translator.transChoice("flarum-tags.forum.post_stream.tags_text",this.attrs.tagsAdded.length,{tags:Object(P.a)(this.attrs.tagsAdded,{link:!0}),count:this.attrs.tagsAdded.length})),this.attrs.tagsRemoved.length&&(t.tagsRemoved=app.translator.transChoice("flarum-tags.forum.post_stream.tags_text",this.attrs.tagsRemoved.length,{tags:Object(P.a)(this.attrs.tagsRemoved,{link:!0}),count:this.attrs.tagsRemoved.length})),t},e}(C.a),I=a(1),k=a(34),S=a.n(k),w=a(21),A=a.n(w),L=a(13),M=a.n(L),H=function(t){function e(){return t.apply(this,arguments)||this}return Object(p.a)(e,t),e.prototype.view=function(t){var e=this.attrs.model,a=this.constructor.isActive(this.attrs),s=e&&e.description(),n=M()(["TagLinkButton","hasIcon",this.attrs.className,e.isChild()&&"child"]);return m(h.a,{className:n,href:this.attrs.route,style:a&&e?{color:e.color()}:"",title:s||""},Object(T.a)(e,{className:"Button-icon"}),e?e.name():app.translator.trans("flarum-tags.forum.index.untagged_link"))},e.initAttrs=function(e){t.initAttrs.call(this,e);var a=e.model;e.params.tags=a?a.slug():"untagged",e.route=app.route("tag",e.params)},e}(A.a),B=function(){Object(I.extend)(u.a.prototype,"navItems",(function(t){if(t.add("tags",m(A.a,{icon:"fas fa-th-large",href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.tags_link")),-10),!app.current.matches(_)){t.add("separator",S.a.component(),-12);var e=app.search.stickyParams(),a=app.store.all("tags"),s=this.currentTag(),n=function(a){var n=s===a;!n&&s&&(n=s.parent()===a),t.add("tag"+a.id(),H.component({model:a,params:e,active:n},null==a?void 0:a.name()),-14)};Object(N.a)(a).filter((function(t){return null!==t.position()&&(!t.isChild()||s&&(t.parent()===s||t.parent()===s.parent()))})).forEach(n);var o=a.filter((function(t){return null===t.position()})).sort((function(t,e){return e.discussionCount()-t.discussionCount()}));o.splice(0,3).forEach(n),o.length&&t.add("moreTags",m(A.a,{href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.more_link")),-16)}}))},R=a(35),E=a.n(R),q=a(36),K=a.n(q),$=a(37),F=function(t){function e(){return t.apply(this,arguments)||this}return Object(p.a)(e,t),e.prototype.view=function(){var t=this.attrs.model,e=t.color();return m("header",{className:"Hero TagHero"+(e?" TagHero--colored":""),style:e?{color:"#fff",backgroundColor:e}:""},m("div",{className:"container"},m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title"},t.icon()&&Object(T.a)(t,{},{useColor:!1})," ",t.name()),m("div",{className:"Hero-subtitle"},t.description()))))},e}(a.n($).a),U=function(){u.a.prototype.currentTag=function(){var t=app.search.params().tags;if(t)return app.store.getBy("tags","slug",t)},Object(I.override)(u.a.prototype,"hero",(function(t){var e=this.currentTag();return e?m(F,{model:e}):t()})),Object(I.extend)(u.a.prototype,"view",(function(t){var e=this.currentTag();e&&(t.attrs.className+=" IndexPage--tag"+e.id())})),Object(I.extend)(u.a.prototype,"setTitle",(function(){var t=this.currentTag();t&&app.setTitle(t.name())})),Object(I.extend)(u.a.prototype,"sidebarItems",(function(t){var e=this.currentTag();if(e){var a=e.color(),s=e.canStartDiscussion()||!app.session.user;a&&(t.get("newDiscussion").attrs.style={backgroundColor:a}),t.get("newDiscussion").attrs.disabled=!s,t.get("newDiscussion").children=app.translator.trans(s?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button")}})),Object(I.extend)(K.a.prototype,"params",(function(t){t.tags=m.route.param("tags")})),Object(I.extend)(E.a.prototype,"requestParams",(function(t){t.include.push("tags"),this.params.tags&&(t.filter.q=(t.filter.q||"")+" tag:"+this.params.tags)}))},z=a(38),G=a.n(z),J=a(25),Q=a.n(J),V=function(){Object(I.extend)(G.a.prototype,"infoItems",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",Object(P.a)(e),10)})),Object(I.extend)(Q.a.prototype,"view",(function(t){var e=Object(N.a)(this.attrs.discussion.tags());if(e&&e.length){var a=e[0].color();a&&(t.attrs.style={backgroundColor:a},t.attrs.className+=" DiscussionHero--colored")}})),Object(I.extend)(Q.a.prototype,"items",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",Object(P.a)(e,{link:!0}),5)}))},W=a(39),X=a.n(W),Y=a(8),Z=a.n(Y),tt=a(18),et=a.n(tt),at=a(40),st=a.n(at),nt=a(41),ot=a.n(nt),rt=a(26),it=a.n(rt),ct=a(42),ut=a.n(ct),lt=a(10),pt=a.n(lt),mt=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t);var a=e.prototype;return a.oninit=function(e){var a=this;t.prototype.oninit.call(this,e),this.tags=app.store.all("tags"),this.attrs.discussion?this.tags=this.tags.filter((function(t){return t.canAddToDiscussion()||-1!==a.attrs.discussion.tags().indexOf(t)})):this.tags=this.tags.filter((function(t){return t.canStartDiscussion()})),this.tags=Object(N.a)(this.tags),this.selected=[],this.filter=pt()(""),this.index=this.tags[0].id(),this.focused=!1,this.attrs.selectedTags?this.attrs.selectedTags.map(this.addTag.bind(this)):this.attrs.discussion&&this.attrs.discussion.tags().map(this.addTag.bind(this)),this.minPrimary=app.forum.attribute("minPrimaryTags"),this.maxPrimary=app.forum.attribute("maxPrimaryTags"),this.minSecondary=app.forum.attribute("minSecondaryTags"),this.maxSecondary=app.forum.attribute("maxSecondaryTags"),this.navigator=new ut.a,this.navigator.onUp((function(){return a.setIndex(a.getCurrentNumericIndex()-1,!0)})).onDown((function(){return a.setIndex(a.getCurrentNumericIndex()+1,!0)})).onSelect(this.select.bind(this)).onRemove((function(){return a.selected.splice(a.selected.length-1,1)}))},a.primaryCount=function(){return this.selected.filter((function(t){return t.isPrimary()})).length},a.secondaryCount=function(){return this.selected.filter((function(t){return!t.isPrimary()})).length},a.addTag=function(t){if(t.canStartDiscussion()){var e=t.parent();e&&-1===this.selected.indexOf(e)&&this.selected.push(e),-1===this.selected.indexOf(t)&&this.selected.push(t)}},a.removeTag=function(t){var e=this.selected.indexOf(t);-1!==e&&(this.selected.splice(e,1),this.selected.filter((function(e){return e.parent()===t})).forEach(this.removeTag.bind(this)))},a.className=function(){return"TagDiscussionModal"},a.title=function(){return this.attrs.discussion?app.translator.trans("flarum-tags.forum.choose_tags.edit_title",{title:m("em",null,this.attrs.discussion.title())}):app.translator.trans("flarum-tags.forum.choose_tags.title")},a.getInstruction=function(t,e){if(t<this.minPrimary){var a=this.minPrimary-t;return app.translator.transChoice("flarum-tags.forum.choose_tags.choose_primary_placeholder",a,{count:a})}if(e<this.minSecondary){var s=this.minSecondary-e;return app.translator.transChoice("flarum-tags.forum.choose_tags.choose_secondary_placeholder",s,{count:s})}return""},a.content=function(){var t=this,e=this.tags,a=this.filter().toLowerCase(),s=this.primaryCount(),n=this.secondaryCount();e=e.filter((function(e){var a=e.parent();return!1===a||-1!==t.selected.indexOf(a)})),s>=this.maxPrimary&&(e=e.filter((function(e){return!e.isPrimary()||-1!==t.selected.indexOf(e)}))),n>=this.maxSecondary&&(e=e.filter((function(e){return e.isPrimary()||-1!==t.selected.indexOf(e)}))),a&&(e=e.filter((function(t){return t.name().substr(0,a.length).toLowerCase()===a}))),-1===e.indexOf(this.index)&&(this.index=e[0]);var o=Math.max(it()(this.getInstruction(s,n)).length,this.filter().length);return[m("div",{className:"Modal-body"},m("div",{className:"TagDiscussionModal-form"},m("div",{className:"TagDiscussionModal-form-input"},m("div",{className:"TagsInput FormControl "+(this.focused?"focus":""),onclick:function(){return t.$(".TagsInput input").focus()}},m("span",{className:"TagsInput-selected"},this.selected.map((function(e){return m("span",{className:"TagsInput-tag",onclick:function(){t.removeTag(e),t.onready()}},Object(O.a)(e))}))),m("input",{className:"FormControl",placeholder:it()(this.getInstruction(s,n)),bidi:this.filter,style:{width:o+"ch"},onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:function(){return t.focused=!0},onblur:function(){return t.focused=!1}}))),m("div",{className:"TagDiscussionModal-form-submit App-primaryControl"},m(Z.a,{type:"submit",className:"Button Button--primary",disabled:s<this.minPrimary||n<this.minSecondary,icon:"fas fa-check"},app.translator.trans("flarum-tags.forum.choose_tags.submit_button"))))),m("div",{className:"Modal-footer"},m("ul",{className:"TagDiscussionModal-list SelectTagList"},e.filter((function(e){return a||!e.parent()||-1!==t.selected.indexOf(e.parent())})).map((function(e){return m("li",{"data-index":e.id(),className:M()({pinned:null!==e.position(),child:!!e.parent(),colored:!!e.color(),selected:-1!==t.selected.indexOf(e),active:t.index===e}),style:{color:e.color()},onmouseover:function(){return t.index=e},onclick:t.toggleTag.bind(t,e)},Object(T.a)(e),m("span",{className:"SelectTagListItem-name"},ot()(e.name(),a)),e.description()?m("span",{className:"SelectTagListItem-description"},e.description()):"")}))))]},a.toggleTag=function(t){-1!==this.selected.indexOf(t)?this.removeTag(t):this.addTag(t),this.filter()&&(this.filter(""),this.index=this.tags[0]),this.onready()},a.select=function(t){t.metaKey||t.ctrlKey||-1!==this.selected.indexOf(this.index)?this.selected.length&&this.$("form").submit():this.getItem(this.index)[0].dispatchEvent(new Event("click"))},a.selectableItems=function(){return this.$(".TagDiscussionModal-list > li")},a.getCurrentNumericIndex=function(){return this.selectableItems().index(this.getItem(this.index))},a.getItem=function(t){return this.selectableItems().filter('[data-index="'+t.id()+'"]')},a.setIndex=function(t,e){var a=this.selectableItems(),s=a.parent();t<0?t=a.length-1:t>=a.length&&(t=0);var n=a.eq(t);if(this.index=app.store.getById("tags",n.attr("data-index")),m.redraw(),e){var o,r=s.scrollTop(),i=s.offset().top,c=i+s.outerHeight(),u=n.offset().top,l=u+n.outerHeight();u<i?o=r-i+u-parseInt(s.css("padding-top"),10):l>c&&(o=r-c+l+parseInt(s.css("padding-bottom"),10)),void 0!==o&&s.stop(!0).animate({scrollTop:o},100)}},a.onsubmit=function(t){t.preventDefault();var e=this.attrs.discussion,a=this.selected;e&&e.save({relationships:{tags:a}}).then((function(){app.current.matches(st.a)&&app.current.get("stream").update(),m.redraw()})),this.attrs.onsubmit&&this.attrs.onsubmit(a),this.hide()},e}(et.a),dt=function(){Object(I.extend)(X.a,"moderationControls",(function(t,e){e.canTag()&&t.add("tags",m(Z.a,{icon:"fas fa-tag",onclick:function(){return app.modal.show(mt,{discussion:e})}},app.translator.trans("flarum-tags.forum.discussion_controls.edit_tags_button")))}))},ft=a(23),gt=a.n(ft),ht=function(){Object(I.extend)(u.a.prototype,"newDiscussionAction",(function(t){var e=app.store.getBy("tags","slug",app.search.params().tags);if(e){var a=e.parent(),s=a?[a,e]:[e];t.then((function(t){return t.fields.tags=s}))}else app.composer.fields.tags=[]})),gt.a.prototype.chooseTags=function(){var t=this;app.modal.show(mt,{selectedTags:(this.composer.fields.tags||[]).slice(0),onsubmit:function(e){t.composer.fields.tags=e,t.$("textarea").focus()}})},Object(I.extend)(gt.a.prototype,"headerItems",(function(t){var e=this.composer.fields.tags||[];t.add("tags",m("a",{className:"DiscussionComposer-changeTags",onclick:this.chooseTags.bind(this)},e.length?Object(P.a)(e):m("span",{className:"TagLabel untagged"},app.translator.trans("flarum-tags.forum.composer_discussion.choose_tags_link"))),10)})),Object(I.override)(gt.a.prototype,"onsubmit",(function(t){var e=this,a=this.composer.fields.tags||[],s=a.filter((function(t){return null!==t.position()&&!t.isChild()})),n=a.filter((function(t){return null===t.position()}));!a.length||s.length<app.forum.attribute("minPrimaryTags")||n.length<app.forum.attribute("minSecondaryTags")?app.modal.show(mt,{selectedTags:a,onsubmit:function(a){e.composer.fields.tags=a,t()}}):t()})),Object(I.extend)(gt.a.prototype,"data",(function(t){t.relationships=t.relationships||{},t.relationships.tags=this.composer.fields.tags}))},bt=a(19),vt=Object(s.a)(bt.a,{"tags/addTagFilter":U,"tags/addTagControl":dt,"tags/components/TagHero":F,"tags/components/TagDiscussionModal":mt,"tags/components/TagsPage":_,"tags/components/DiscussionTaggedPost":D,"tags/components/TagLinkButton":H,"tags/addTagList":B,"tags/addTagLabels":V,"tags/addTagComposer":ht}),yt=a(20);app.initializers.add("flarum-tags",(function(t){t.routes.tags={path:"/tags",component:_},t.routes.tag={path:"/t/:tags",component:u.a},t.route.tag=function(e){return t.route("tag",{tags:e.slug()})},t.postComponents.discussionTagged=D,t.store.models.tags=l.a,i.a.prototype.tags=o.a.hasMany("tags"),i.a.prototype.canTag=o.a.attribute("canTag"),B(),U(),V(),dt(),ht()})),Object(s.a)(yt.compat,vt)},,function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/EventPost"]},function(t,e){t.exports=flarum.core.compat["components/Separator"]},function(t,e){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,e){t.exports=flarum.core.compat["states/GlobalSearchState"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/KeyboardNavigatable"]},,,,,,,,function(t,e,a){"use strict";a.r(e);var s=a(15);for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a(28)}]);


flarum.extensions['flarum-tags']=module.exports

var module={}

module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=18)}([function(t,e){t.exports=flarum.core.compat.app},,,function(t,e){t.exports=flarum.core.compat.extend},,,function(t,e,o){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}o.d(e,"a",(function(){return n}))},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},,function(t,e){t.exports=flarum.core.compat["components/Post"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},,,,,,function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),i=o(3),a=o(9),s=o.n(a),u=o(7),p=o.n(u),l=o(6),d=o(10),c=o.n(d),f=o(11),h=o.n(f),g=o(12),v=o.n(g),b=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var o=e.prototype;return o.oninit=function(e){var o=this;t.prototype.oninit.call(this,e),this.attrs.uploader.on("uploaded",(function(){o.$("form")[0].reset(),m.redraw()}))},o.view=function(){var t=this.attrs.uploader.uploading?r.a.translator.trans("fof-upload.forum.states.loading"):r.a.translator.trans("fof-upload.forum.buttons.attach");return m("button.Button.hasIcon.fof-upload-button.Button--icon",{className:this.attrs.uploader.uploading?"uploading":"",onclick:this.uploadButtonClicked.bind(this)},[this.attrs.uploader.uploading?v.a.component({size:"tiny",className:"LoadingIndicator--inline Button-icon"}):h()("fas fa-file-upload",{className:"Button-icon"}),m("span.Button-label",t),m("form",[m("input",{type:"file",multiple:!0,onchange:this.process.bind(this)})])])},o.process=function(t){var e=this.$("input").prop("files");0!==e.length&&this.attrs.uploader.upload(e)},o.uploadButtonClicked=function(t){this.$("input").click()},e}(c.a),y=function(){function t(t,e){this.upload=t,this.composerElement=e,this.handlers={},this.supportsFileDragging()&&(this.composerElement.addEventListener("dragover",this.handlers.in=this.in.bind(this)),this.composerElement.addEventListener("dragleave",this.handlers.out=this.out.bind(this)),this.composerElement.addEventListener("dragend",this.handlers.out),this.composerElement.addEventListener("drop",this.handlers.dropping=this.dropping.bind(this)),this.isDropping=this.over=!1)}var e=t.prototype;return e.supportsFileDragging=function(){var t=document.createElement("div");return("draggable"in t||"ondragstart"in t&&"ondrop"in t)&&"FormData"in window&&"FileReader"in window},e.unload=function(){this.handlers.in&&(this.composerElement.removeEventListener("dragover",this.handlers.in),this.composerElement.removeEventListener("dragleave",this.handlers.out),this.composerElement.removeEventListener("dragend",this.handlers.out),this.composerElement.removeEventListener("drop",this.handlers.dropping))},e.isNotFile=function(t){if(t.dataTransfer.items)for(var e=0;e<t.dataTransfer.items.length;e++)if("file"!==t.dataTransfer.items[e].kind)return!0;return!1},e.in=function(t){this.isNotFile(t)||(t.preventDefault(),this.over||(this.composerElement.classList.add("fof-upload-dragging"),this.over=!0))},e.out=function(t){this.isNotFile(t)||(t.preventDefault(),this.over&&(this.composerElement.classList.remove("fof-upload-dragging"),this.over=!1))},e.dropping=function(t){var e=this;this.isNotFile(t)||(t.preventDefault(),this.isDropping||(this.isDropping=!0,this.composerElement.classList.add("fof-upload-dropping"),this.upload(t.dataTransfer.files,(function(){e.composerElement.classList.remove("fof-upload-dropping"),e.isDropping=!1}))))},t}(),E=function(){function t(t,e){this.upload=t,e.addEventListener("paste",this.paste.bind(this))}return t.prototype.paste=function(t){if(t.clipboardData&&t.clipboardData.items){for(var e=t.clipboardData.items,o=[],n=0;n<e.length;n++)-1!==e[n].type.indexOf("image")&&o.push(e[n].getAsFile());o.length>0&&(t.preventDefault(),this.upload(o))}},t}(),w=function(){function t(){this.callbacks={success:[],failure:[],uploading:[],uploaded:[]},this.uploading=!1}var e=t.prototype;return e.on=function(t,e){this.callbacks[t].push(e)},e.dispatch=function(t,e){this.callbacks[t].forEach((function(t){return t(e)}))},e.upload=function(t){var e=this;this.uploading=!0,this.dispatch("uploading",t),m.redraw();for(var o=new FormData,n=0;n<t.length;n++)o.append("files[]",t[n]);return app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/fof/upload",serialize:function(t){return t},body:o}).then(this.uploaded.bind(this)).catch((function(t){throw e.uploading=!1,m.redraw(),t}))},e.uploaded=function(t){var e=this;this.uploading=!1,t.forEach((function(t){return e.dispatch("success",t)})),this.dispatch("uploaded")},t}();r.a.initializers.add("fof-upload",(function(){Object(i.extend)(p.a.prototype,"oninit",(function(){this.uploader=new w})),Object(i.extend)(p.a.prototype,"controlItems",(function(t){r.a.forum.attribute("fof-upload.canUpload")&&t.add("fof-upload",b.component({uploader:this.uploader}))})),Object(i.extend)(p.a.prototype,"oncreate",(function(t,e){var o=this;if(r.a.forum.attribute("fof-upload.canUpload")){this.uploader.on("success",(function(t){if(o.attrs.composer.editor.insertAtCursor(t+"\n"),"function"==typeof o.attrs.preview){var e=r.a.composer.isFullScreen;r.a.composer.isFullScreen=function(){return!1},o.attrs.preview(),r.a.composer.isFullScreen=e}}));var n=new y((function(t){return o.uploader.upload(t)}),this.$().parents(".Composer")[0]);this.$("textarea").bind("onunload",(function(){n.unload()})),new E((function(t){return o.uploader.upload(t)}),this.$("textarea")[0])}})),Object(i.extend)(s.a.prototype,"oncreate",(function(){var t=this;this.$("[data-fof-upload-download-uuid]").unbind("click").on("click",(function(e){if(e.preventDefault(),e.stopPropagation(),r.a.forum.attribute("fof-upload.canDownload")){var o=r.a.forum.attribute("apiUrl")+"/fof/download";o+="/"+e.currentTarget.dataset.fofUploadDownloadUuid,o+="/"+t.attrs.post.id(),o+="/"+r.a.session.csrfToken,window.open(o)}else alert(r.a.translator.trans("fof-upload.forum.states.unauthorized"))}))}))}))}]);


flarum.extensions['fof-upload']=module.exports

var module={}

module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){e.exports=flarum.core.compat.app},,,function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["models/Discussion"]},function(e,t){e.exports=flarum.core.compat["components/Badge"]},function(e,t,r){"use strict";r.r(t);var n=r(3),o=r(0),u=r.n(o),a=r(4),i=r.n(a),c=r(5),s=r.n(c);u.a.initializers.add("clarkwinkelmann-popular-discussion-badge",(function(){Object(n.extend)(i.a.prototype,"badges",(function(e){var t=this,r=u.a.forum.attribute("popularDiscussionBadgeConditions");(Array.isArray(r)?r.some((function(e){return function(e,t){return Object.keys(t).every((function(r){var n=t[r];if(!n||n<0)return!0;switch(r){case"comments":return e.commentCount()>=n;case"views":return e.attribute("views")>=n||e.attribute("viewCount")>=n;default:return console.warn("Unknown popular discussion criteria "+r),!0}}))}(t,e)})):this.attribute("isPopular"))&&e.add("popular",s.a.component({type:"popular",icon:"fas fa-fire",label:u.a.translator.trans("clarkwinkelmann-popular-discussion-badge.forum.badge_label")}))}))}))}]);


flarum.extensions['clarkwinkelmann-popular-discussion-badge']=module.exports

var module={}

module.exports=function(e){var s={};function t(n){if(s[n])return s[n].exports;var o=s[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=s,t.d=function(e,s,n){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var o in e)t.d(n,o,function(s){return e[s]}.bind(null,o));return n},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},t.p="",t(t.s=10)}([function(e,s){e.exports=flarum.core.compat.app},function(e,s){e.exports=flarum.core.compat.extend},function(e,s){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,s){e.exports=flarum.core.compat["utils/string"]},function(e,s){e.exports=flarum.core.compat["components/Switch"]},function(e,s){e.exports=flarum.core.compat["utils/Stream"]},function(e,s){e.exports=flarum.core.compat["components/DiscussionList"]},function(e,s){e.exports=flarum.core.compat["components/DiscussionListItem"]},function(e,s){e.exports=flarum.core.compat["components/FieldSet"]},function(e,s){e.exports=flarum.core.compat["utils/ItemList"]},function(e,s,t){"use strict";t.r(s);var n=t(0),o=t.n(n),r=t(1),i=t(6),p=t.n(i),a=t(7),c=t.n(a),u=t(3);var f=t(2),l=t.n(f),d=t(8),y=t.n(d),x=t(9),h=t.n(x),b=t(4),S=t.n(b),g=t(5),w=t.n(g);o.a.initializers.add("ianm-synopsis",(function(){Object(r.extend)(p.a.prototype,"requestParams",(function(e){e.include.push(["firstPost","lastPost"])})),Object(r.extend)(c.a.prototype,"infoItems",(function(e){var s=this.attrs.discussion;if(!o.a.session.user||o.a.session.user.preferences().showSynopsisExcerpts){var t="first"===o.a.forum.attribute("synopsis.excerpt_type")?s.firstPost():s.lastPost(),n=o.a.forum.attribute("synopsis.excerpt_length"),r=o.a.forum.attribute("synopsis.rich_excerpts"),i=!!o.a.session.user&&o.a.session.user.preferences().showSynopsisExcerptsOnMobile;if(t){var p=m("div",null,r?m.trust(Object(u.truncate)(t.contentHtml(),n)):Object(u.truncate)(t.contentPlain(),n));e.add(i?"excerptM":"excerpt",p,-100)}}})),Object(r.extend)(l.a.prototype,"oninit",(function(){this.showSynopsisExcerpts=w()(this.user.preferences().showSynopsisExcerpts),this.showSynopsisExcerptsOnMobile=w()(this.user.preferences().showSynopsisExcerptsOnMobile)})),Object(r.extend)(l.a.prototype,"settingsItems",(function(e){e.add("synopsis",y.a.component({label:app.translator.trans("ianm-synopsis.forum.user.settings.summaries-heading"),className:"Settings-Synopsis"},this.summariesItems().toArray()))})),l.a.prototype.summariesItems=function(){var e=this,s=new h.a;return s.add("synopsis-excerpts",S.a.component({state:this.user.preferences().showSynopsisExcerpts,onchange:function(s){e.showSynopsisExcerptsLoading=!0,e.user.savePreferences({showSynopsisExcerpts:s}).then((function(){e.showSynopsisExcerptsLoading=!1,m.redraw()}))},loading:this.showSynopsisExcerptsLoading},app.translator.trans("ianm-synopsis.forum.user.settings.show-summaries"))),this.user.preferences().showSynopsisExcerpts&&s.add("synopsis-excerpts-mobile",S.a.component({state:this.user.preferences().showSynopsisExcerptsOnMobile,disabled:!this.user.preferences().showSynopsisExcerpts,onchange:function(s){e.showSynopsisExcerptsOnMobileLoading=!0,e.user.savePreferences({showSynopsisExcerptsOnMobile:s}).then((function(){e.showSynopsisExcerptsOnMobileLoading=!1,window.location.reload()}))},loading:this.showSynopsisExcerptsOnMobileLoading},app.translator.trans("ianm-synopsis.forum.user.settings.show-summaries-mobile"))),s}}))}]);


flarum.extensions['ianm-synopsis']=module.exports

var module={}

module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t,n){"use strict";var o={AUTO:0,LIGHT:1,DARK:2,DEFAULT:function(){return Number.parseInt(app.data["fof-nightmode.default_theme"])||0}};t.a=o},function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return s}));var o=n(4),r=n(0),i="flarum_nightmode",c=function(){var e=o.get(i);return e||"0"===e?Number(e):r.a.DEFAULT()},a=function(e){return o.set(i,e,{sameSite:"lax",secure:"https:"===location.protocol})},s=function(){return o.remove(i)}},function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var o=n(5),r=n(7),i=n.n(r),c=n(0),a=n(6),s=n(3);function u(){var e=app.session.user;e?(e.preferences().fofNightMode_perDevice&&Object(a.a)(),p(Object(s.a)())):p(c.a.DEFAULT())}function f(){return{day:app.data["fof-nightmode.assets.day"],night:app.data["fof-nightmode.assets.night"]}}function p(e){if(e===c.a.DARK)d("night");else if(e===c.a.LIGHT)d("day");else{d(window.matchMedia("(prefers-color-scheme: dark)").matches?"night":"day")}}function d(e){var t=document.querySelector("link.nightmode-light[rel=stylesheet]"),n=document.querySelector("link.nightmode-dark[rel=stylesheet]");if(t&&n){if(Object(s.a)()===c.a.AUTO)return;var o=document.createElement("link");"onload"in o?o.onload=function(){t.remove(),n.remove()}:(t.remove(),n.remove()),o.rel="stylesheet",o.className="nightmode",o.href=f()[e],document.head.append(o)}else{var r=t||n||document.querySelector("link.nightmode[rel=stylesheet]"),i=f()[e];i!==r.href&&(r.href=i,r.className="nightmode")}}t.a=function(){Object(o.extend)(i.a.prototype,"oninit",u)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),r=n(1);function i(){var e,t=app.session.user,n=t&&!!t.preferences().fofNightMode_perDevice,i=t&&t.preferences().fofNightMode;return n?e=Object(r.a)():"number"==typeof i&&-1!==i&&(e=i),"number"==typeof e?e:o.a.DEFAULT()}},function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function r(e,t){if(!t)return"";var n="; "+e;return!0===t?n:n+"="+t}function i(e,t,n){return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(t).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(e){if("number"==typeof e.expires){var t=new Date;t.setMilliseconds(t.getMilliseconds()+864e5*e.expires),e.expires=t}return r("Expires",e.expires?e.expires.toUTCString():"")+r("Domain",e.domain)+r("Path",e.path)+r("Secure",e.secure)+r("SameSite",e.sameSite)}(n)}function c(e){for(var t={},n=e?e.split("; "):[],o=/(%[\dA-F]{2})+/gi,r=0;r<n.length;r++){var i=n[r].split("="),c=i.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{t[i[0].replace(o,decodeURIComponent)]=c.replace(o,decodeURIComponent)}catch(e){}}return t}function a(){return c(document.cookie)}function s(e,t,n){document.cookie=i(e,t,o({path:"/"},n))}t.__esModule=!0,t.encode=i,t.parse=c,t.getAll=a,t.get=function(e){return a()[e]},t.set=s,t.remove=function(e,t){s(e,"",o(o({},t),{expires:-1}))}},function(e,t){e.exports=flarum.core.compat.extend},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),r=n(1);function i(){var e=Array.from(new Set(Object.values(o.a))),t=Object(r.a)();isNaN(t)?c("Theme is not a valid integer! Resetting..."):e.includes(t)||c("Theme is out of bounds! Resetting...")}function c(e){console.warn(e),Object(r.c)(o.a.DEFAULT())}},function(e,t){e.exports=flarum.core.compat["components/Page"]},function(e,t){e.exports=flarum.core.compat["components/SettingsPage"]},function(e,t){e.exports=flarum.core.compat["components/Button"]},function(e,t){e.exports=flarum.core.compat["components/SessionDropdown"]},function(e,t){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["components/Select"]},function(e,t){e.exports=flarum.core.compat["components/FieldSet"]},function(e,t){e.exports=flarum.core.compat["components/Switch"]},function(e,t,n){"use strict";n.r(t);var o=n(5),r=n(8),i=n.n(r),c=n(9),a=n.n(c),s=n(10),u=n.n(s),f=n(11),p=n.n(f),d=n(12),l=n.n(d),h=n(13),g=n.n(h),v=n(14),b=n.n(v),y=n(2),O=n(6),j=n(1),x=n(3),_=n(0),S=function(e){return app.translator.trans("fof-nightmode.forum.user.settings."+e)};app.initializers.add("fof-nightmode",(function(){Object(o.extend)(i.a.prototype,"settingsItems",(function(e){var t=app.session.user,n=!!t.preferences().fofNightMode_perDevice;n&&Object(O.a)();var o=Object(x.a)();e.add("fof-nightmode",g.a.component({label:S("heading"),className:"Settings-theme"},[m("p",{className:"description"},S("description")),m("p",{className:"description"},S("description2")),b.a.component({className:"Settings-theme--per_device_cb",state:n,onchange:function(e){e?j.c(o):j.b(),t.savePreferences({fofNightMode_perDevice:e}).then((function(){Object(y.b)()}))}},S("device_specific_setting_checkbox")),l.a.component({value:o,className:"Settings-theme--input",onchange:function(e){if(n)return j.c(e),void Object(y.b)();t.savePreferences({fofNightMode:Number.parseInt(e)}).then((function(){m.redraw(),Object(y.b)()}))},options:[S("options.auto"),S("options.day"),S("options.night")]}),m("p",{className:"Settings-theme--selection_description"},o===_.a.AUTO?S("option_descriptions.auto"):o===_.a.LIGHT?S("option_descriptions.day"):o===_.a.DARK?S("option_descriptions.night"):p.a.component())]))})),Object(o.extend)(u.a.prototype,"items",(function(e){if(app.session.user){var t=app.session.user,n=Object(x.a)(),o=n===_.a.LIGHT||n===_.a.AUTO&&!window.matchMedia("(prefers-color-scheme: dark)").matches;e.add(o?"nightmode":"daymode",a.a.component({icon:"far fa-"+(o?"moon":"sun"),onclick:function(){var e=o?_.a.DARK:_.a.LIGHT;if(t.preferences().fofNightMode_perDevice)return j.c(e),void Object(y.b)();t.savePreferences({fofNightMode:e}).then((function(){Object(y.b)()}))}},app.translator.trans("fof-nightmode.forum."+(o?"night":"day"))),-1)}})),Object(y.a)()}))}]);


flarum.extensions['fof-nightmode']=module.exports

var module={}

module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}([function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},,function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e,r){"use strict";var n=r(7).htmlEscape;t.exports=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a `string` in the first argument, got `"+typeof t+"`");if("object"!=typeof e)throw new TypeError("Expected an `object` or `Array` in the second argument, got `"+typeof e+"`");var r=/{{(.*?)}}/g;r.test(t)&&(t=t.replace(r,(function(t,r){var o=e,a=r.split("."),i=Array.isArray(a),s=0;for(a=i?a:a[Symbol.iterator]();;){var c;if(i){if(s>=a.length)break;c=a[s++]}else{if((s=a.next()).done)break;c=s.value}o=o?o[c]:""}return n(String(o))})));return t.replace(/{(.*?)}/g,(function(t,r){var n=e,o=r.split("."),a=Array.isArray(o),i=0;for(o=a?o:o[Symbol.iterator]();;){var s;if(a){if(i>=o.length)break;s=o[i++]}else{if((i=o.next()).done)break;s=i.value}n=n?n[s]:""}return String(n)}))}},function(t,e,r){"use strict";e.htmlEscape=function(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},e.htmlUnescape=function(t){return t.replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&#0?39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,"&")},e.htmlEscapeTag=function(t){for(var r=t[0],n=0;n<(arguments.length<=1?0:arguments.length-1);n++)r=r+e.htmlEscape(String(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]))+t[n+1];return r},e.htmlUnescapeTag=function(t){for(var r=t[0],n=0;n<(arguments.length<=1?0:arguments.length-1);n++)r=r+e.htmlUnescape(String(n+1<1||arguments.length<=n+1?void 0:arguments[n+1]))+t[n+1];return r}},function(t,e,r){"use strict";r.r(e);var n=r(3),o=r(4),a=r.n(o),i=r(0),s=r.n(i);var c=r(5),l=r.n(c),u=r(1),p=r(6),f=r.n(p),d={facebook:"//facebook.com/sharer/sharer.php?u={url}",twitter:"//twitter.com/share?url={url}&text={title}",linkedin:"//linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={description}",reddit:"//www.reddit.com/submit?url={url}&title={title}",whatsapp:"//wa.me/?text={title}%20{url}",telegram:"//telegram.me/share/url?url={url}&text={title}",vkontakte:"//vk.com/share.php?url={url}&title={title}&description={description}",odnoklassniki:"//connect.ok.ru/offer?url={url}",my_mail:"//connect.mail.ru/share?url={url}&title={title}&description={description}",qq:"//connect.qq.com/widget/shareqq/iframe_index.html?url={url}&title={title}",qzone:"//sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&summary={description}&title={title}"},h={vkontakte:"fab fa-vk",my_mail:"fas fa-at",qq:"fab fa-qq",qzone:"fas fa-star"},g=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var o=n.prototype;return o.oninit=function(e){t.prototype.oninit.call(this,e),this.networks=this.attrs.networks,this.discussion=this.attrs.discussion},o.className=function(){return"FofShareSocialModal Modal--small"},o.title=function(){return app.translator.trans("fof-share-social.forum.modal.title")},o.content=function(){var t={url:encodeURIComponent(app.forum.attribute("baseUrl")+app.route("discussion",{id:this.discussion.id()})),title:encodeURIComponent(app.title),description:this.discussion.firstPost()?encodeURIComponent(Object(u.truncate)(Object(u.getPlainContent)(this.discussion.firstPost().contentHtml()),150,0)):""},e="width=1000, height= 500, top="+($(window).height()/2-250)+", left="+($(window).width()/2-500)+", status=no, scrollbars=no, resizable=no";return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},this.networks.map((function(r){return s.a.component({className:"Button Button--rounded Button--block Share--"+r,icon:(h[r]||"fab fa-"+r)+" fa-lg fa-fw",onclick:function(){return window.open(f()(d[r],t),app.title,e)}},app.translator.trans("fof-share-social.lib.networks."+r))})))))},n}(l.a);app.initializers.add("fof/share-social",(function(){Object(n.extend)(a.a.prototype,"sidebarItems",(function(t){var e=this,r=Object.keys(app.data).filter((function(t){return t.startsWith("fof-share-social.networks.")&&Number(app.data[t])})).map((function(t){return t.replace("fof-share-social.networks.","")}));r.length&&t.add("share-social",s.a.component({className:"Button Button-icon Button--share",icon:"fas fa-share-alt",onclick:function(){return app.modal.show(g,{networks:r,discussion:e.discussion})}},app.translator.trans("fof-share-social.forum.discussion.share_button")),-1)}))}))}]);


flarum.extensions['fof-share-social']=module.exports

var module={}

module.exports=function(t){var n={};function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)o.d(e,a,function(n){return t[n]}.bind(null,a));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=44)}([function(t,n){t.exports=flarum.core.compat.Model},function(t,n){t.exports=flarum.core.compat.extend},function(t,n,o){"use strict";function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}o.d(n,"a",(function(){return e}))},function(t,n){t.exports=flarum.core.compat["components/Button"]},,function(t,n,o){"use strict";o.d(n,"a",(function(){return i}));var e=o(2),a=o(0),r=o.n(a),s=o(14),i=function(t){function n(){return t.apply(this,arguments)||this}return Object(e.a)(n,t),n}(o.n(s)()(r.a,{points:r.a.attribute("points"),name:r.a.attribute("name"),color:r.a.attribute("color")}))},function(t,n,o){"use strict";function e(t,n){void 0===n&&(n={}),n.style=n.style||{},n.className="rankLabel "+(n.className||"");var o=t.color();return n.style.backgroundColor=n.style.color=o,n.className+=" colored",m("span",n,m("span",{className:"rankLabel-text"},t.name()))}o.d(n,"a",(function(){return e}))},function(t,n){t.exports=flarum.core.compat["utils/Stream"]},function(t,n){t.exports=flarum.core.compat["helpers/icon"]},function(t,n){t.exports=flarum.core.compat["models/Post"]},function(t,n){t.exports=flarum.core.compat["components/IndexPage"]},,function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var e={Rank:o(5).a}},function(t,n,o){"use strict";o.d(n,"a",(function(){return e}));var e={rankLabel:o(6).a}},function(t,n){t.exports=flarum.core.compat["utils/mixin"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,n){t.exports=flarum.core.compat["models/Discussion"]},function(t,n){t.exports=flarum.core.compat["helpers/avatar"]},function(t,n){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,n){t.exports=flarum.core.compat["helpers/username"]},function(t,n){t.exports=flarum.core.compat["components/Link"]},function(t,n){t.exports=flarum.core.compat["utils/abbreviateNumber"]},function(t,n){t.exports=flarum.core.compat["models/User"]},function(t,n){t.exports=flarum.core.compat["components/UserCard"]},function(t,n){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,n){t.exports=flarum.core.compat["components/Page"]},function(t,n){t.exports=flarum.core.compat["components/AffixedSidebar"]},function(t,n){t.exports=flarum.core.compat["helpers/listItems"]},function(t,n){t.exports=flarum.core.compat["components/Notification"]},function(t,n){t.exports=flarum.core.compat["utils/ItemList"]},function(t,n){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,n){t.exports=flarum.core.compat["components/Dropdown"]},function(t,n){t.exports=flarum.core.compat["components/LinkButton"]},function(t,n){t.exports=flarum.core.compat["components/CommentPost"]},function(t,n){t.exports=flarum.core.compat["utils/PostControls"]},function(t,n){t.exports=flarum.core.compat["components/Modal"]},function(t,n){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,n){t.exports=flarum.core.compat["components/PostUser"]},function(t,n,o){(function(n){var o=/^\s+|\s+$/g,e=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,r=/^0o[0-7]+$/i,s=parseInt,i="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,c=i||u||Function("return this")(),p=Object.prototype.toString,f=Math.max,l=Math.min,m=function(){return c.Date.now()};function d(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(d(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=d(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||r.test(t)?s(t.slice(2),i?2:8):e.test(t)?NaN:+t}t.exports=function(t,n,o){var e,a,r,s,i,u,c=0,p=!1,v=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var o=e,r=a;return e=a=void 0,c=n,s=t.apply(r,o)}function y(t){return c=t,i=setTimeout(k,n),p?g(t):s}function x(t){var o=t-u;return void 0===u||o>=n||o<0||v&&t-c>=r}function k(){var t=m();if(x(t))return N(t);i=setTimeout(k,function(t){var o=n-(t-u);return v?l(o,r-(t-c)):o}(t))}function N(t){return i=void 0,b&&e?g(t):(e=a=void 0,s)}function j(){var t=m(),o=x(t);if(e=arguments,a=this,u=t,o){if(void 0===i)return y(u);if(v)return i=setTimeout(k,n),g(u)}return void 0===i&&(i=setTimeout(k,n)),s}return n=h(n)||0,d(o)&&(p=!!o.leading,r=(v="maxWait"in o)?f(h(o.maxWait)||0,n):r,b="trailing"in o?!!o.trailing:b),j.cancel=function(){void 0!==i&&clearTimeout(i),c=0,e=u=a=i=void 0},j.flush=function(){return void 0===i?s:N(m())},j}}).call(this,o(43))},,,,,function(t,n){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o},function(t,n,o){"use strict";o.r(n),o.d(n,"models",(function(){return e.a})),o.d(n,"components",(function(){return Vt})),o.d(n,"helpers",(function(){return Mt}));var e=o(12),a=o(0),r=o.n(a),s=o(16),i=o.n(s),u=o(9),c=o.n(u),p=o(22),f=o.n(p),l=o(5),d=o(2),h=o(17),v=o.n(h),b=o(25),g=o.n(b),y=o(10),x=o.n(y),k=o(26),N=o.n(k),j=o(3),O=o.n(j),w=o(18),P=o.n(w),L=o(27),V=o.n(L),_=o(19),M=o.n(_),I=o(8),S=o.n(I),U=function(t,n){void 0===n&&(n=!1);var o=app.data["fof-gamification."+t];return n?!!Number(o):o},D=o(20),R=o.n(D),C=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.oninit=function(n){t.prototype.oninit.call(this,n),app.session.user&&!0===app.session.user.data.attributes.canViewRankingPage||m.route.set("/"),this.loading=!0,this.users=[],this.refresh()},o.view=function(){var t,n=this;return t=this.loading?P.a.component():O.a.component({className:"Button",onclick:this.loadMore.bind(this)},app.translator.trans("core.forum.discussion_list.load_more_button")),m("div",{className:"TagsPage"},x.a.prototype.hero(),m("div",{className:"container"},m(N.a,null,m("nav",{className:"RankingPage-nav IndexPage-nav sideNav"},m("ul",null,V()(x.a.prototype.sidebarItems().toArray())))),m("div",{className:"RankingPage sideNavOffset"},m("table",{class:"rankings"},m("tr",null,m("th",{className:"rankings-mobile"},app.translator.trans("fof-gamification.forum.ranking.rank")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.name")),m("th",null,app.translator.trans("fof-gamification.forum.ranking.amount"))),this.users.map((function(t,o){return++o,[m("tr",{className:"ranking-"+o},o<4?U("customRankingImages",!0)?m("img",{className:"rankings-mobile rankings-image",src:app.forum.attribute("baseUrl")+app.forum.attribute("fof-gamification.topimage"+o+"Url")}):m("td",{className:"rankings-mobile rankings-"+o},S()("fas fa-trophy")):m("td",{className:"rankings-4 rankings-mobile"},n.addOrdinalSuffix(o)),m("td",null,m("div",{className:"PostUser"},m("h3",{className:"rankings-info"},m(R.a,{href:app.route.user(t)},o<4?v()(t,{className:"info-avatar rankings-"+o+"-avatar"}):""," ",M()(t))))),o<4?m("td",{className:"rankings-"+o},t.points()):m("td",{className:"rankings-4"},t.points()))]}))),m("div",{className:"rankings-loadmore"}," ",t))))},o.refresh=function(t){var n=this;return void 0===t&&(t=!0),t&&(this.loading=!0,this.users=[]),this.loadResults().then((function(t){n.users=[],n.parseResults(t)}),(function(){n.loading=!1,m.redraw()}))},o.addOrdinalSuffix=function(t){if("en"===app.data.locale){var n=t%10,o=t%100;return 1===n&&11!==o?t+"st":2===n&&12!==o?t+"nd":3===n&&13!==o?t+"rd":t+"th"}return t},o.loadResults=function(t){var n={};return n.page={offset:t,limit:"10"},app.store.find("rankings",n)},o.loadMore=function(){this.loading=!0,this.loadResults(this.users.length).then(this.parseResults.bind(this))},o.parseResults=function(t){return[].push.apply(this.users,t),this.loading=!1,this.users.sort((function(t,n){return parseFloat(n.points())-parseFloat(t.points())})),m.redraw(),t},n}(g.a),A=o(28),T=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.icon=function(){return this.attrs.notification.content()>0?"fas fa-thumbs-up":"fas fa-thumbs-down"},o.href=function(){return app.route.post(this.attrs.notification.subject())},o.content=function(){var t=this.attrs.notification.fromUser(),n=parseInt(this.attrs.notification.content());return n>0?app.translator.trans("fof-gamification.forum.notification.upvote",{user:t}):app.translator.trans("fof-gamification.forum.notification.downvote",{user:t})},o.excerpt=function(){return this.attrs.notification.subject().contentPlain()},n}(o.n(A).a),B=o(1),E=o(29),F=o.n(E),$=o(30),W=o.n($),z=o(31),q=o.n(z),G=o(32),H=o.n(G),J=function(){x.a.prototype.viewItems=function(){var t=new F.a,n=app.discussions.sortMap(),o={};for(var e in n)o[e]=app.translator.trans("core.forum.index_sort."+e+"_button");var a=o[app.search.params().sort]||Object.keys(n).map((function(t){return o[t]}))[0];return/^.*?\/hot/.test(m.route.get())&&(a=app.translator.trans("core.forum.index_sort.hot_button")),t.add("sort",q.a.component({buttonClassName:"Button",label:a},Object.keys(o).map((function(t){var e=o[t],a=(app.search.params().sort||Object.keys(n)[0])===t;return/^.*?\/hot/.test(m.route.get())&&"hot"===t&&(a=!0),/^.*?\/hot/.test(m.route.get())&&"latest"===t&&(a=!1,m.redraw()),O.a.component({icon:!a||"fas fa-check",onclick:app.search.changeSort.bind(app.search,t),active:a},e)})))),t},Object(B.extend)(x.a.prototype,"navItems",(function(t){app.session.user&&!0===app.session.user.data.attributes.canViewRankingPage&&t.add("rankings",H.a.component({href:app.route("rankings"),icon:"fas fa-trophy"},app.translator.trans("fof-gamification.forum.nav.name")),80)})),Object(B.extend)(W.a.prototype,"sortMap",(function(t){t.hot="-hotness"}))},K=o(33),Q=o.n(K),X=o(34),Y=o.n(X),Z=o(35),tt=function(t){function n(){return t.apply(this,arguments)||this}Object(d.a)(n,t);var o=n.prototype;return o.className=function(){return"VotesModal Modal--small"},o.title=function(){return app.translator.trans("fof-gamification.forum.modal.title")},o.oninit=function(n){t.prototype.oninit.call(this,n),this.loading=!this.attrs.post.upvotes(),this.loading&&this.load()},o.content=function(){var t=this;return this.loading?m("div",{className:"Modal-body"},m(P.a,null)):m("div",{className:"Modal-body"},m("ul",{className:"VotesModal-list"},["upvotes"].map((function(n){var o=t.attrs.post[n]();if(o&&o.length)return m("div",null,m("legend",null,app.translator.trans("fof-gamification.forum.modal."+n+"_label")),o.map((function(t){return m("li",null,m(R.a,{href:app.route.user(t)},v()(t)," ",M()(t)))})))}))))},o.load=function(){return app.store.find("posts",this.attrs.post.id(),{include:"upvotes"}).then(this.loaded.bind(this))},n}(o.n(Z).a),nt=o(36),ot=o.n(nt),et=function(t,n,o,e,a){if(void 0===a&&(a=t.discussion()),app.session.user){if(!a||a.canVote()||t.canVote())return n&&o&&(n=!1,o=!1),e&&e(!0),m.redraw(),t.save([n,o,"vote"]).then((function(){return null}),(function(){return null})).then((function(){e&&e(!1),a&&a.pushAttributes({votes:t.votes()}),m.redraw()}))}else ot.a.replyAction.call(a,!0)},at=function(){Object(B.extend)(Y.a,"moderationControls",(function(t,n){n.canSeeVotes()&&t.add("viewVotes",[m(O.a,{icon:"fas fa-thumbs-up",onclick:function(){app.modal.show(tt,{post:n})}},app.translator.trans("fof-gamification.forum.mod_item"))])})),Object(B.extend)(Q.a.prototype,"actionItems",(function(t){var n=this,o=this.attrs.post,e=o.hasDownvoted(),a=o.hasUpvoted(),r=U("iconName")||"thumbs",s=!app.session.user||o.canVote();t.add("votes",m("div",{className:"CommentPost-votes "+(U("useAlternateLayout",!0)&&"alternateLayout")},O.a.component({icon:this.voteLoading||"fas fa-"+r+"-up",className:"Post-vote Post-upvote",style:a&&{color:app.forum.attribute("themePrimaryColor")},loading:this.voteLoading,disabled:this.voteLoading||!s,onclick:function(){return et(o,!a,!1,(function(t){return n.voteLoading=t}))}}),m("label",{className:"Post-points"},o.votes()),O.a.component({icon:this.voteLoading||"fas fa-"+r+"-down",className:"Post-vote Post-downvote",style:e&&{color:app.forum.attribute("themePrimaryColor")},loading:this.voteLoading,disabled:!s,onclick:function(){return et(o,!1,!e,(function(t){return n.voteLoading=t}))}})),10)}))},rt=o(15),st=o.n(rt),it=o(21),ut=o.n(it),ct=function(){U("showVotesOnDiscussionPage",!0)&&!U("useAlternateLayout",!0)&&Object(B.extend)(st.a.prototype,"infoItems",(function(t){t.add("discussion-votes",m("span",{className:"DiscussionListItem-votes",title:app.translator.trans("fof-gamification.forum.votes")},S()("far fa-thumbs-up"),ut()(this.attrs.discussion.votes())),20)}))},pt=o(37),ft=o.n(pt),lt=o(23),mt=o.n(lt),dt=o(6),ht=function(){var t=function(t){return function(n){return n&&n.attrs&&n.attrs.className&&String(n.attrs.className).split(" ").includes(t)}};Object(B.extend)(mt.a.prototype,"infoItems",(function(t){var n,o=U("pointsPlaceholder"),e=String(this.attrs.user.points());n=o?m("div",null,o.replace("{points}",e)):app.translator.trans("fof-gamification.forum.user.points",{points:e}),t.add("points",n)})),Object(B.extend)(mt.a.prototype,"view",(function(n){var o=this.attrs.user,e=function n(o,e){var a=[];if(o&&o.children&&Array.isArray(o.children)){var r=o.children.find(t(e));r&&a.push(r),o.children.forEach((function(t){a.push.apply(a,n(t,e))}))}return a}(n,"UserCard-profile")[0],a=Number(U("rankAmt"));if(e){var r=e.children.find(t("UserCard-badges"));return o.ranks()&&(r?o.ranks().reverse().map((function(t,n){if(!a||n<a)return m("li",{className:"User-Rank"},Object(dt.a)(t))})).forEach((function(t){r.children.push(t)})):e.children.splice(1,0,m("ul",{className:"UserCard-badges badges"},o.ranks().reverse().map((function(t,n){if(!a||n<a)return m("li",{className:"User-Rank"},Object(dt.a)(t))}))))),n}})),Object(B.extend)(ft.a.prototype,"view",(function(t){var n=this.attrs.post.user();if(!n)return t;var o,e=t.children.find((o="h3",function(t){return t&&t.tag&&t.tag===o})),a=Number(U("rankAmt"));e.children.push(n.ranks().reverse().map((function(t,n){if(!a||n<a)return m("span",{className:"Post-Rank"},Object(dt.a)(t))}))),e.children=e.children.filter((function(t){return void 0!==t.tag}))}))},vt=o(24),bt=o.n(vt),gt=o(38),yt=o.n(gt),xt=function(t){return app.store.find("posts",t).then((function(){return m.redraw()}))},kt=[],Nt=function(){Object(B.extend)(bt.a.prototype,"oncreate",(function(){app.pusher&&app.pusher.then((function(t){t.main.bind("newVote",(function(t){var n,o,e=app.store.getById("posts",t.post_id),a=t.user_id;e&&e.votes()!==t.votes&&a!=app.session.user.id()&&(n=e.id(),(o=kt[n])?o(n):(o=kt[n]=yt()(xt,1500))(n))}))}))})),Object(B.extend)(bt.a.prototype,"onremove",(function(){app.pusher&&app.pusher.then((function(t){t.main.unbind("newVote")}))}))};function jt(){return(jt=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t}).apply(this,arguments)}var Ot=o(7),wt=o.n(Ot),Pt=function(t,n){var o=t.firstPost();return o&&void 0!==o[n]()?o[n]():t[n]()},Lt=function(){Object(B.extend)(st.a.prototype,"oninit",(function(){this.voteLoading=wt()(!1)})),Object(B.extend)(st.a.prototype,"view",(function(t){if(t&&t.children){var n=t.children.find((function(t){return t&&t.attrs&&t.attrs.className&&t.attrs.className.includes("DiscussionListItem-content")})),o=this.attrs.discussion,e=o.firstPost(),a=Pt(o,"hasUpvoted"),r=Pt(o,"hasDownvoted"),s=!app.session.user||Pt(o,"canVote"),i={color:app.forum.attribute("themePrimaryColor")},u={disabled:!s},c=U("useAlternateLayout",!0);n.children.unshift(m("div",{className:"DiscussionListItem-votes "+(c&&"alternateLayout")},S()("fas fa-arrow-up",jt({style:a?i:{},onclick:s&&function(){return et(e,!a,!1,null,o)}},u)),m("span",null,ut()(Pt(o,"votes")||0)),S()("fas fa-arrow-down",jt({style:r?i:{},onclick:s&&function(){return et(e,!1,!r,null,o)}},u))))}}))},Vt={RankingsPage:C,VoteNotification:T,VotesModal:tt},_t=o(13),Mt=jt({saveVote:et,setting:U},_t.a);app.initializers.add("fof-gamification",(function(t){i.a.prototype.votes=r.a.attribute("votes"),i.a.prototype.hasUpvoted=r.a.attribute("hasUpvoted"),i.a.prototype.hasDownvoted=r.a.attribute("hasDownvoted"),i.a.prototype.canVote=r.a.attribute("canVote"),f.a.prototype.points=r.a.attribute("points"),f.a.prototype.ranks=r.a.hasMany("ranks"),c.a.prototype.upvotes=r.a.hasMany("upvotes"),c.a.prototype.votes=r.a.attribute("votes"),c.a.prototype.canVote=r.a.attribute("canVote"),c.a.prototype.canSeeVotes=r.a.attribute("canSeeVotes"),c.a.prototype.hasUpvoted=r.a.attribute("hasUpvoted"),c.a.prototype.hasDownvoted=r.a.attribute("hasDownvoted"),t.store.models.ranks=l.a,t.notificationComponents.vote=T,t.routes.rankings={path:"/rankings",component:C},at(),J(),ht(),ct(),Nt(),U("useAlternateLayout",!0)&&Lt()}))}]);


flarum.extensions['fof-gamification']=module.exports

var module={}

module.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=22)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e,n){"use strict";function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return s}))},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["utils/PostControls"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/Post"]},function(t,e){t.exports=flarum.core.compat["components/PostMeta"]},function(t,e){t.exports=flarum.core.compat["helpers/userOnline"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/Badge"]},,,function(t,e,n){"use strict";n.r(e);var s=n(2),r=n(0),o=n.n(r),a=n(3),i=n.n(a),c=n(4),u=n.n(c),p=n(11),f=n.n(p),d=n(1),l=n(5),b=n.n(l),w=function(t){function e(){return t.apply(this,arguments)||this}Object(d.a)(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-comment-dots"},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){return app.translator.trans("fof-best-answer.forum.notification.content")},e}(b.a),A=n(8),h=n.n(A),y=n(12),v=n.n(y),P=n(13),x=n.n(P),_=n(6),B=n.n(_),O=n(14),j=n.n(O),N=n(15),S=n.n(N),g=n(9),U=n.n(g),k=n(16),I=n.n(k),C=n(7),T=n.n(C),D=n(17),H=n.n(D),M=n(10),z=n.n(M),G=n(18),L=n.n(G),q=function(t){function e(){return t.apply(this,arguments)||this}Object(d.a)(e,t);var n=e.prototype;return n.view=function(){var t=this.attrs,e=t.post,n=t.discussion;return m("div",{className:"Post--BestAnswer"},e?m("span",null,z()("fas fa-check"),app.translator.trans("fof-best-answer.forum.best_answer_button")):m(T.a,{href:app.route.post(e),"data-number":e.number()},z()("fas fa-check"),app.translator.trans("fof-best-answer.forum.best_answer_button")),m("span",{className:"BestAnswer--User"},app.translator.trans("fof-best-answer.forum.best_answer_label",{user:n.bestAnswerUser(),time_set:this.getSetTime(n),a:m("a",{onclick:function(){return m.route.set(app.route.user(n.bestAnswerUser()))}})})))},n.getSetTime=function(t){if(null!==t.bestAnswerSetAt())return L()(t.bestAnswerSetAt())},e}(H.a),E=n(19),F=n.n(E),J=function(t){function e(){return t.apply(this,arguments)||this}Object(d.a)(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-check"},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return app.translator.trans("fof-best-answer.forum.notification.awarded",{user:t})},e}(b.a),K=function(t){function e(){return t.apply(this,arguments)||this}Object(d.a)(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-check"},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return app.translator.trans("fof-best-answer.forum.notification.best_answer_in_discussion",{user:t})},e}(b.a);o.a.initializers.add("fof/best-answer",(function(){var t,e,n,r,a;i.a.prototype.bestAnswerPost=u.a.hasOne("bestAnswerPost"),i.a.prototype.bestAnswerUser=u.a.hasOne("bestAnswerUser"),i.a.prototype.hasBestAnswer=u.a.attribute("hasBestAnswer"),i.a.prototype.startUserId=u.a.attribute("startUserId",Number),i.a.prototype.firstPostId=u.a.attribute("firstPostId",Number),i.a.prototype.canSelectBestAnswer=u.a.attribute("canSelectBestAnswer"),i.a.prototype.bestAnswerSetAt=u.a.attribute("bestAnswerSetAt",u.a.transformDate),o.a.notificationComponents.selectBestAnswer=w,o.a.notificationComponents.awardedBestAnswer=J,o.a.notificationComponents.bestAnswerInDiscussion=K,Object(s.extend)(i.a.prototype,"badges",(function(t){this.hasBestAnswer()&&!t.has("hidden")&&t.add("bestAnswer",F.a.component({type:"bestAnswer",icon:"fas fa-check",label:o.a.translator.trans("fof-best-answer.forum.answered_badge")}))})),t=function(t,e){return e.isHidden()||1===e.number()||!t.canSelectBestAnswer()||!app.session.user},e=function(t){return!app.forum.attribute("canSelectBestAnswerOwnPost")&&t.user()&&t.user().id()===app.session.user.id()},n=function(t,e){return t.bestAnswerPost()&&t.bestAnswerPost().id()===e.id()},r=function(t){return app.translator.trans(t?"fof-best-answer.forum.remove_best_answer":"fof-best-answer.forum.this_best_answer")},a=function(t,e,n){t.save({bestAnswerPostId:e?n.id():0,bestAnswerUserId:app.session.user.id(),relationships:e?{bestAnswerPost:n,bestAnswerUser:app.session.user}:delete t.data.relationships.bestAnswerPost}).then((function(){app.current instanceof x.a&&app.current.stream.update(),m.redraw(),e&&m.route.set(app.route.discussion(t))}))},Object(s.extend)(v.a,"moderationControls",(function(s,o){if(!app.forum.attribute("useAlternativeBestAnswerUi")){var i=o.discussion(),c=n(i,o);o.pushAttributes({isBestAnswer:c}),"comment"===o.contentType()&&(t(i,o)||e(o)||s.add("bestAnswer",h.a.component({icon:"fa"+(c?"s":"r")+" fa-comment-dots",onclick:function(){a(i,c=!c,o)}},r(c))))}})),Object(s.extend)(B.a.prototype,"actionItems",(function(s){if(app.forum.attribute("useAlternativeBestAnswerUi")){var o=this.attrs.post,i=this.attrs.post.discussion(),c=n(i,o),u=!1!==i.bestAnswerPost();o.pushAttributes({isBestAnswer:c}),t(i,o)||e(o)||s.add("bestAnswer",h.a.component({className:u?c?"Button Button--primary":"Button Button--link":"Button Button--primary",onclick:function(){u=!u,a(i,c=!c,o)}},r(c)))}})),Object(s.extend)(B.a.prototype,"headerItems",(function(t){var e=this.attrs.post;e.discussion().bestAnswerPost()&&e.discussion().bestAnswerPost().id()===e.id()&&!e.isHidden()&&t.add("isBestAnswer",q.component({post:e,discussion:e.discussion()}))})),Object(s.extend)(B.a.prototype,"footerItems",(function(t){var e=this.attrs.post,n=e.discussion(),s=n.bestAnswerPost();if(s&&!s.isHidden()&&1===e.number()&&!e.isHidden()){var r=s.user();t.add("bestAnswerPost",m("div",{className:"CommentPost",onclick:function(){return app.current.get("stream").goToNumber(s.number())}},m("div",{className:"Post-header"},m("ul",null,m("li",{className:"item-user"},m("div",{className:"PostUser"},r&&I()(r),m("h3",null,r?m(T.a,{href:app.route.user(r)},U()(r)):U()(r)))),s.discussion()&&m("li",{className:"item-meta"},S.a.component({post:s})),q.component({post:s,discussion:n}))),m("div",{className:"Post-body"},m.trust(s.contentHtml()))),-10)}})),Object(s.extend)(j.a.prototype,"elementAttrs",(function(t){var e=this.attrs.post;e.discussion().bestAnswerPost()&&e.discussion().bestAnswerPost().id()===e.id()&&!e.isHidden()&&(t.className?t.className+=" Post--bestAnswer":t.className="Post--bestAnswer")})),Object(s.extend)(f.a.prototype,"notificationTypes",(function(t){t.add("awardedBestAnswer",{name:"awardedBestAnswer",icon:"fas fa-check",label:o.a.translator.trans("fof-best-answer.forum.notification.preferences.awarded_best_answer")}),t.add("bestAnswerInDiscussion",{name:"bestAnswerInDiscussion",icon:"fas fa-check",label:o.a.translator.trans("fof-best-answer.forum.notification.preferences.best_answer_in_discussion")})}))}))}]);


flarum.extensions['fof-best-answer']=module.exports

var module={}

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js":
/*!******************************************************************!*\
  !*** ./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
  "use strict";

  window.console = window.console || {
    info: function (stuff) {}
  };

  // If there's no jQuery, fancyBox can't work
  // =========================================

  if (!$) {
    return;
  }

  // Check if fancyBox is already initialized
  // ========================================

  if ($.fn.fancybox) {
    console.info("fancyBox already initialized");

    return;
  }

  // Private default settings
  // ========================

  var defaults = {
    // Close existing modals
    // Set this to false if you do not need to stack multiple instances
    closeExisting: false,

    // Enable infinite gallery navigation
    loop: false,

    // Horizontal space between slides
    gutter: 50,

    // Enable keyboard navigation
    keyboard: true,

    // Should allow caption to overlap the content
    preventCaptionOverlap: true,

    // Should display navigation arrows at the screen edges
    arrows: true,

    // Should display counter at the top left corner
    infobar: true,

    // Should display close button (using `btnTpl.smallBtn` template) over the content
    // Can be true, false, "auto"
    // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
    smallBtn: "auto",

    // Should display toolbar (buttons at the top)
    // Can be true, false, "auto"
    // If "auto" - will be automatically hidden if "smallBtn" is enabled
    toolbar: "auto",

    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: [
      "zoom",
      //"share",
      "slideShow",
      //"fullScreen",
      //"download",
      "thumbs",
      "close"
    ],

    // Detect "idle" time in seconds
    idleTime: 3,

    // Disable right-click and use simple image protection for images
    protect: false,

    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,

    image: {
      // Wait for images to load before displaying
      //   true  - wait for image to load and then display;
      //   false - display thumbnail and load the full-sized image over top,
      //           requires predefined image dimensions (`data-width` and `data-height` attributes)
      preload: false
    },

    ajax: {
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true
        }
      }
    },

    iframe: {
      // Iframe template
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',

      // Preload iframe before displaying it
      // This allows to calculate iframe content width and height
      // (note: Due to "Same Origin Policy", you can't get cross domain data).
      preload: true,

      // Custom CSS styling for iframe wrapping element
      // You can use this to set custom iframe dimensions
      css: {},

      // Iframe tag attributes
      attr: {
        scrolling: "auto"
      }
    },

    // For HTML5 video only
    video: {
      tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
        '<source src="{{src}}" type="{{format}}" />' +
        'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
        "</video>",
      format: "", // custom video format
      autoStart: true
    },

    // Default content type if cannot be detected automatically
    defaultType: "image",

    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",

    // Duration in ms for open/close animation
    animationDuration: 366,

    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",

    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "fade",

    // Duration in ms for transition animation
    transitionDuration: 366,

    // Custom CSS class for slide element
    slideClass: "",

    // Custom CSS class for layout
    baseClass: "",

    // Base template for layout
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
      '<div class="fancybox-toolbar">{{buttons}}</div>' +
      '<div class="fancybox-navigation">{{arrows}}</div>' +
      '<div class="fancybox-stage"></div>' +
      '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
      "</div>" +
      "</div>",

    // Loading indicator template
    spinnerTpl: '<div class="fancybox-loading"></div>',

    // Error message template
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',

    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
        "</a>",

      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
        "</button>",

      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",

      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
        "</button>",

      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
        "</button>",

      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
        "</button>"
    },

    // Container is injected into this element
    parentEl: "body",

    // Hide browser vertical scrollbars; use at your own risk
    hideScrollbar: true,

    // Focus handling
    // ==============

    // Try to focus on the first focusable element after opening
    autoFocus: true,

    // Put focus back to active element after closing
    backFocus: true,

    // Do not let user to focus on element outside modal content
    trapFocus: true,

    // Module specific options
    // =======================

    fullScreen: {
      autoStart: false
    },

    // Set `touch: false` to disable panning/swiping
    touch: {
      vertical: true, // Allow to drag content vertically
      momentum: true // Continue movement after releasing mouse/touch when panning
    },

    // Hash value when initializing manually,
    // set `false` to disable hash change
    hash: null,

    // Customize or add new media types
    // Example:
    /*
      media : {
        youtube : {
          params : {
            autoplay : 0
          }
        }
      }
    */
    media: {},

    slideShow: {
      autoStart: false,
      speed: 3000
    },

    thumbs: {
      autoStart: false, // Display thumbnails on opening
      hideOnClose: true, // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container", // Container is injected into this element
      axis: "y" // Vertical (y) or horizontal (x) scrolling
    },

    // Use mousewheel to navigate gallery
    // If 'auto' - enabled for images only
    wheel: "auto",

    // Callbacks
    //==========

    // See Documentation/API/Events for more information
    // Example:
    /*
      afterShow: function( instance, current ) {
        console.info( 'Clicked element:' );
        console.info( current.opts.$orig );
      }
    */

    onInit: $.noop, // When instance has been initialized

    beforeLoad: $.noop, // Before the content of a slide is being loaded
    afterLoad: $.noop, // When the content of a slide is done loading

    beforeShow: $.noop, // Before open animation starts
    afterShow: $.noop, // When content is done loading and animating

    beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
    afterClose: $.noop, // After instance has been closed

    onActivate: $.noop, // When instance is brought to front
    onDeactivate: $.noop, // When other instance has been activated

    // Interaction
    // ===========

    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
    // each option can be string or method that returns value.
    //
    // Possible values:
    //   "close"           - close instance
    //   "next"            - move to next gallery item
    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
    //   "toggleControls"  - show/hide controls
    //   "zoom"            - zoom image (if loaded)
    //   false             - do nothing

    // Clicked on the content
    clickContent: function (current, event) {
      return current.type === "image" ? "zoom" : false;
    },

    // Clicked on the slide
    clickSlide: "close",

    // Clicked on the background (backdrop) element;
    // if you have not changed the layout, then most likely you need to use `clickSlide` option
    clickOutside: "close",

    // Same as previous two, but for double click
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,

    // Custom options when mobile device is detected
    // =============================================

    mobile: {
      preventCaptionOverlap: false,
      idleTime: false,
      clickContent: function (current, event) {
        return current.type === "image" ? "toggleControls" : false;
      },
      clickSlide: function (current, event) {
        return current.type === "image" ? "toggleControls" : "close";
      },
      dblclickContent: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      dblclickSlide: function (current, event) {
        return current.type === "image" ? "zoom" : false;
      }
    },

    // Internationalization
    // ====================

    lang: "en",
    i18n: {
      en: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Start slideshow",
        PLAY_STOP: "Pause slideshow",
        FULL_SCREEN: "Full screen",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      },
      de: {
        CLOSE: "Schlie&szlig;en",
        NEXT: "Weiter",
        PREV: "Zur&uuml;ck",
        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
        PLAY_START: "Diaschau starten",
        PLAY_STOP: "Diaschau beenden",
        FULL_SCREEN: "Vollbild",
        THUMBS: "Vorschaubilder",
        DOWNLOAD: "Herunterladen",
        SHARE: "Teilen",
        ZOOM: "Vergr&ouml;&szlig;ern"
      }
    }
  };

  // Few useful variables and methods
  // ================================

  var $W = $(window);
  var $D = $(document);

  var called = 0;

  // Check if an object is a jQuery object and not a native JavaScript object
  // ========================================================================
  var isQuery = function (obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  };

  // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
  // ===============================================================================
  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  // Detect the supported transition-end event property name
  // =======================================================
  var transitionEnd = (function () {
    var el = document.createElement("fakeelement"),
      t;

    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }

    return "transitionend";
  })();

  // Force redraw on an element.
  // This helps in cases where the browser doesn't redraw an updated element properly
  // ================================================================================
  var forceRedraw = function ($el) {
    return $el && $el.length && $el[0].offsetHeight;
  };

  // Exclude array (`buttons`) options from deep merging
  // ===================================================
  var mergeOpts = function (opts1, opts2) {
    var rez = $.extend(true, {}, opts1, opts2);

    $.each(opts2, function (key, value) {
      if ($.isArray(value)) {
        rez[key] = value;
      }
    });

    return rez;
  };

  // How much of an element is visible in viewport
  // =============================================

  var inViewport = function (elem) {
    var elemCenter, rez;

    if (!elem || elem.ownerDocument !== document) {
      return false;
    }

    $(".fancybox-container").css("pointer-events", "none");

    elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };

    rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;

    $(".fancybox-container").css("pointer-events", "");

    return rez;
  };

  // Class definition
  // ================

  var FancyBox = function (content, opts, index) {
    var self = this;

    self.opts = mergeOpts({
      index: index
    }, $.fancybox.defaults);

    if ($.isPlainObject(opts)) {
      self.opts = mergeOpts(self.opts, opts);
    }

    if ($.fancybox.isMobile) {
      self.opts = mergeOpts(self.opts, self.opts.mobile);
    }

    self.id = self.opts.id || ++called;

    self.currIndex = parseInt(self.opts.index, 10) || 0;
    self.prevIndex = null;

    self.prevPos = null;
    self.currPos = 0;

    self.firstRun = true;

    // All group items
    self.group = [];

    // Existing slides (for current, next and previous gallery items)
    self.slides = {};

    // Create group elements
    self.addContent(content);

    if (!self.group.length) {
      return;
    }

    self.init();
  };

  $.extend(FancyBox.prototype, {
    // Create DOM structure
    // ====================

    init: function () {
      var self = this,
        firstItem = self.group[self.currIndex],
        firstItemOpts = firstItem.opts,
        $container,
        buttonStr;

      if (firstItemOpts.closeExisting) {
        $.fancybox.close(true);
      }

      // Hide scrollbars
      // ===============

      $("body").addClass("fancybox-active");

      if (
        !$.fancybox.getInstance() &&
        firstItemOpts.hideScrollbar !== false &&
        !$.fancybox.isMobile &&
        document.body.scrollHeight > window.innerHeight
      ) {
        $("head").append(
          '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
          (window.innerWidth - document.documentElement.clientWidth) +
          "px;}</style>"
        );

        $("body").addClass("compensate-for-scrollbar");
      }

      // Build html markup and set references
      // ====================================

      // Build html code for buttons and insert into main template
      buttonStr = "";

      $.each(firstItemOpts.buttons, function (index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || "";
      });

      // Create markup from base template, it will be initially hidden to
      // avoid unnecessary work like painting while initializing is not complete
      $container = $(
          self.translate(
            self,
            firstItemOpts.baseTpl
            .replace("{{buttons}}", buttonStr)
            .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
          )
        )
        .attr("id", "fancybox-container-" + self.id)
        .addClass(firstItemOpts.baseClass)
        .data("FancyBox", self)
        .appendTo(firstItemOpts.parentEl);

      // Create object holding references to jQuery wrapped nodes
      self.$refs = {
        container: $container
      };

      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
        self.$refs[item] = $container.find(".fancybox-" + item);
      });

      self.trigger("onInit");

      // Enable events, deactive previous instances
      self.activate();

      // Build slides, load and reveal content
      self.jumpTo(self.currIndex);
    },

    // Simple i18n support - replaces object keys found in template
    // with corresponding values
    // ============================================================

    translate: function (obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;

      return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
        return arr[n] === undefined ? match : arr[n];
      });
    },

    // Populate current group with fresh content
    // Check if each object has valid type and content
    // ===============================================

    addContent: function (content) {
      var self = this,
        items = $.makeArray(content),
        thumbs;

      $.each(items, function (i, item) {
        var obj = {},
          opts = {},
          $item,
          type,
          found,
          src,
          srcParts;

        // Step 1 - Make sure we have an object
        // ====================================

        if ($.isPlainObject(item)) {
          // We probably have manual usage here, something like
          // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === "object" && $(item).length) {
          // Here we probably have jQuery collection returned by some selector
          $item = $(item);

          // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
          opts = $item.data() || {};
          opts = $.extend(true, {}, opts, opts.options);

          // Here we store clicked element
          opts.$orig = $item;

          obj.src = self.opts.src || opts.src || $item.attr("href");

          // Assume that simple syntax is used, for example:
          //   `$.fancybox.open( $("#test"), {} );`
          if (!obj.type && !obj.src) {
            obj.type = "inline";
            obj.src = item;
          }
        } else {
          // Assume we have a simple html code, for example:
          //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
          obj = {
            type: "html",
            src: item + ""
          };
        }

        // Each gallery object has full collection of options
        obj.opts = $.extend(true, {}, self.opts, opts);

        // Do not merge buttons array
        if ($.isArray(opts.buttons)) {
          obj.opts.buttons = opts.buttons;
        }

        if ($.fancybox.isMobile && obj.opts.mobile) {
          obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
        }

        // Step 2 - Make sure we have content type, if not - try to guess
        // ==============================================================

        type = obj.type || obj.opts.type;
        src = obj.src || "";

        if (!type && src) {
          if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
            type = "video";

            if (!obj.opts.video.format) {
              obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
            }
          } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = "image";
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = "iframe";
            obj = $.extend(true, obj, {
              contentType: "pdf",
              opts: {
                iframe: {
                  preload: false
                }
              }
            });
          } else if (src.charAt(0) === "#") {
            type = "inline";
          }
        }

        if (type) {
          obj.type = type;
        } else {
          self.trigger("objectNeedsType", obj);
        }

        if (!obj.contentType) {
          obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
        }

        // Step 3 - Some adjustments
        // =========================

        obj.index = self.group.length;

        if (obj.opts.smallBtn == "auto") {
          obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
        }

        if (obj.opts.toolbar === "auto") {
          obj.opts.toolbar = !obj.opts.smallBtn;
        }

        // Find thumbnail image, check if exists and if is in the viewport
        obj.$thumb = obj.opts.$thumb || null;

        if (obj.opts.$trigger && obj.index === self.opts.index) {
          obj.$thumb = obj.opts.$trigger.find("img:first");

          if (obj.$thumb.length) {
            obj.opts.$orig = obj.opts.$trigger;
          }
        }

        if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
          obj.$thumb = obj.opts.$orig.find("img:first");
        }

        if (obj.$thumb && !obj.$thumb.length) {
          obj.$thumb = null;
        }

        obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);

        // "caption" is a "special" option, it can be used to customize caption per gallery item
        if ($.type(obj.opts.caption) === "function") {
          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
        }

        if ($.type(self.opts.caption) === "function") {
          obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
        }

        // Make sure we have caption as a string or jQuery object
        if (!(obj.opts.caption instanceof $)) {
          obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
        }

        // Check if url contains "filter" used to filter the content
        // Example: "ajax.html #something"
        if (obj.type === "ajax") {
          srcParts = src.split(/\s+/, 2);

          if (srcParts.length > 1) {
            obj.src = srcParts.shift();

            obj.opts.filter = srcParts.shift();
          }
        }

        // Hide all buttons and disable interactivity for modal items
        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            trapFocus: true,
            // Remove buttons
            infobar: 0,
            toolbar: 0,

            smallBtn: 0,

            // Disable keyboard navigation
            keyboard: 0,

            // Disable some modules
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,

            // Disable click event handlers
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        }

        // Step 4 - Add processed object to group
        // ======================================

        self.group.push(obj);
      });

      // Update controls if gallery is already opened
      if (Object.keys(self.slides).length) {
        self.updateControls();

        // Update thumbnails, if needed
        thumbs = self.Thumbs;

        if (thumbs && thumbs.isActive) {
          thumbs.create();

          thumbs.focus();
        }
      }
    },

    // Attach an event handler functions for:
    //   - navigation buttons
    //   - browser scrolling, resizing;
    //   - focusing
    //   - keyboard
    //   - detecting inactivity
    // ======================================

    addEvents: function () {
      var self = this;

      self.removeEvents();

      // Make navigation elements clickable
      // ==================================

      self.$refs.container
        .on("click.fb-close", "[data-fancybox-close]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.close(e);
        })
        .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.previous();
        })
        .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          self.next();
        })
        .on("click.fb", "[data-fancybox-zoom]", function (e) {
          // Click handler for zoom button
          self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
        });

      // Handle page scrolling and browser resizing
      // ==========================================

      $W.on("orientationchange.fb resize.fb", function (e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          if (self.requestId) {
            cancelAFrame(self.requestId);
          }

          self.requestId = requestAFrame(function () {
            self.update(e);
          });
        } else {
          if (self.current && self.current.type === "iframe") {
            self.$refs.stage.hide();
          }

          setTimeout(
            function () {
              self.$refs.stage.show();

              self.update(e);
            },
            $.fancybox.isMobile ? 600 : 250
          );
        }
      });

      $D.on("keydown.fb", function (e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null,
          current = instance.current,
          keycode = e.keyCode || e.which;

        // Trap keyboard focus inside of the modal
        // =======================================

        if (keycode == 9) {
          if (current.opts.trapFocus) {
            self.focus(e);
          }

          return;
        }

        // Enable keyboard navigation
        // ==========================

        if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
          return;
        }

        // Backspace and Esc keys
        if (keycode === 8 || keycode === 27) {
          e.preventDefault();

          self.close(e);

          return;
        }

        // Left arrow and Up arrow
        if (keycode === 37 || keycode === 38) {
          e.preventDefault();

          self.previous();

          return;
        }

        // Righ arrow and Down arrow
        if (keycode === 39 || keycode === 40) {
          e.preventDefault();

          self.next();

          return;
        }

        self.trigger("afterKeydown", e, keycode);
      });

      // Hide controls after some inactivity period
      if (self.group[self.currIndex].opts.idleTime) {
        self.idleSecondsCounter = 0;

        $D.on(
          "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
          function (e) {
            self.idleSecondsCounter = 0;

            if (self.isIdle) {
              self.showControls();
            }

            self.isIdle = false;
          }
        );

        self.idleInterval = window.setInterval(function () {
          self.idleSecondsCounter++;

          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
            self.isIdle = true;
            self.idleSecondsCounter = 0;

            self.hideControls();
          }
        }, 1000);
      }
    },

    // Remove events added by the core
    // ===============================

    removeEvents: function () {
      var self = this;

      $W.off("orientationchange.fb resize.fb");
      $D.off("keydown.fb .fb-idle");

      this.$refs.container.off(".fb-close .fb-prev .fb-next");

      if (self.idleInterval) {
        window.clearInterval(self.idleInterval);

        self.idleInterval = null;
      }
    },

    // Change to previous gallery item
    // ===============================

    previous: function (duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },

    // Change to next gallery item
    // ===========================

    next: function (duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },

    // Switch to selected gallery item
    // ===============================

    jumpTo: function (pos, duration) {
      var self = this,
        groupLen = self.group.length,
        firstRun,
        isMoved,
        loop,
        current,
        previous,
        slidePos,
        stagePos,
        prop,
        diff;

      if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
        return;
      }

      // Should loop?
      pos = parseInt(pos, 10);
      loop = self.current ? self.current.opts.loop : self.opts.loop;

      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }

      // Check if opening for the first time; this helps to speed things up
      firstRun = self.firstRun = !Object.keys(self.slides).length;

      // Create slides
      previous = self.current;

      self.prevIndex = self.currIndex;
      self.prevPos = self.currPos;

      current = self.createSlide(pos);

      if (groupLen > 1) {
        if (loop || current.index < groupLen - 1) {
          self.createSlide(pos + 1);
        }

        if (loop || current.index > 0) {
          self.createSlide(pos - 1);
        }
      }

      self.current = current;
      self.currIndex = current.index;
      self.currPos = current.pos;

      self.trigger("beforeShow", firstRun);

      self.updateControls();

      // Validate duration length
      current.forcedDuration = undefined;

      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
      }

      duration = parseInt(duration, 10);

      // Check if user has swiped the slides or if still animating
      isMoved = self.isMoved(current);

      // Make sure current slide is visible
      current.$slide.addClass("fancybox-slide--current");

      // Fresh start - reveal container, current slide and start loading content
      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self.$refs.container.css("transition-duration", duration + "ms");
        }

        self.$refs.container.addClass("fancybox-is-open").trigger("focus");

        // Attempt to load content into slide
        // This will later call `afterLoad` -> `revealContent`
        self.loadSlide(current);

        self.preload("image");

        return;
      }

      // Get actual slide/stage positions (before cleaning up)
      slidePos = $.fancybox.getTranslate(previous.$slide);
      stagePos = $.fancybox.getTranslate(self.$refs.stage);

      // Clean up all slides
      $.each(self.slides, function (index, slide) {
        $.fancybox.stop(slide.$slide, true);
      });

      if (previous.pos !== current.pos) {
        previous.isComplete = false;
      }

      previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");

      // If slides are out of place, then animate them to correct position
      if (isMoved) {
        // Calculate horizontal swipe distance
        diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);

        $.each(self.slides, function (index, slide) {
          slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });

          // Make sure that each slide is in equal distance
          // This is mostly needed for freshly added slides, because they are not yet positioned
          var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;

          $.fancybox.setTranslate(slide.$slide, {
            top: 0,
            left: leftPos - stagePos.left + diff
          });

          if (slide.pos !== current.pos) {
            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
          }

          // Redraw to make sure that transition will start
          forceRedraw(slide.$slide);

          // Animate the slide
          $.fancybox.animate(
            slide.$slide, {
              top: 0,
              left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
            },
            duration,
            function () {
              slide.$slide
                .css({
                  transform: "",
                  opacity: ""
                })
                .removeClass("fancybox-slide--next fancybox-slide--previous");

              if (slide.pos === self.currPos) {
                self.complete();
              }
            }
          );
        });
      } else if (duration && current.opts.transitionEffect) {
        // Set transition effect for previously active slide
        prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;

        previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));

        $.fancybox.animate(
          previous.$slide,
          prop,
          duration,
          function () {
            previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
          },
          false
        );
      }

      if (current.isLoaded) {
        self.revealContent(current);
      } else {
        self.loadSlide(current);
      }

      self.preload("image");
    },

    // Create new "slide" element
    // These are gallery items  that are actually added to DOM
    // =======================================================

    createSlide: function (pos) {
      var self = this,
        $slide,
        index;

      index = pos % self.group.length;
      index = index < 0 ? self.group.length + index : index;

      if (!self.slides[pos] && self.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);

        self.slides[pos] = $.extend(true, {}, self.group[index], {
          pos: pos,
          $slide: $slide,
          isLoaded: false
        });

        self.updateSlide(self.slides[pos]);
      }

      return self.slides[pos];
    },

    // Scale image to the actual size of the image;
    // x and y values should be relative to the slide
    // ==============================================

    scaleToActual: function (x, y, duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        canvasWidth = $.fancybox.getTranslate(current.$slide).width,
        canvasHeight = $.fancybox.getTranslate(current.$slide).height,
        newImgWidth = current.width,
        newImgHeight = current.height,
        imgPos,
        posX,
        posY,
        scaleX,
        scaleY;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      x = x === undefined ? canvasWidth * 0.5 : x;
      y = y === undefined ? canvasHeight * 0.5 : y;

      imgPos = $.fancybox.getTranslate($content);

      imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
      imgPos.left -= $.fancybox.getTranslate(current.$slide).left;

      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height;

      // Get center position for original image
      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5;

      // Make sure image does not move away from edges
      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);

        if (posX > 0) {
          posX = 0;
        }

        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }

      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);

        if (posY > 0) {
          posY = 0;
        }

        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }

      self.updateCursor(newImgWidth, newImgHeight);

      $.fancybox.animate(
        $content, {
          top: posY,
          left: posX,
          scaleX: scaleX,
          scaleY: scaleY
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );

      // Stop slideshow
      if (self.SlideShow && self.SlideShow.isActive) {
        self.SlideShow.stop();
      }
    },

    // Scale image to fit inside parent element
    // ========================================

    scaleToFit: function (duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        end;

      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }

      self.isAnimating = true;

      $.fancybox.stop($content);

      end = self.getFitPos(current);

      self.updateCursor(end.width, end.height);

      $.fancybox.animate(
        $content, {
          top: end.top,
          left: end.left,
          scaleX: end.width / $content.width(),
          scaleY: end.height / $content.height()
        },
        duration || 366,
        function () {
          self.isAnimating = false;
        }
      );
    },

    // Calculate image size to fit inside viewport
    // ===========================================

    getFitPos: function (slide) {
      var self = this,
        $content = slide.$content,
        $slide = slide.$slide,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        maxWidth,
        maxHeight,
        minRatio,
        aspectRatio,
        rez = {};

      if (!slide.isLoaded || !$content || !$content.length) {
        return false;
      }

      maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
      maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;

      maxWidth -=
        parseFloat($slide.css("paddingLeft")) +
        parseFloat($slide.css("paddingRight")) +
        parseFloat($content.css("marginLeft")) +
        parseFloat($content.css("marginRight"));

      maxHeight -=
        parseFloat($slide.css("paddingTop")) +
        parseFloat($slide.css("paddingBottom")) +
        parseFloat($content.css("marginTop")) +
        parseFloat($content.css("marginBottom"));

      if (!width || !height) {
        width = maxWidth;
        height = maxHeight;
      }

      minRatio = Math.min(1, maxWidth / width, maxHeight / height);

      width = minRatio * width;
      height = minRatio * height;

      // Adjust width/height to precisely fit into container
      if (width > maxWidth - 0.5) {
        width = maxWidth;
      }

      if (height > maxHeight - 0.5) {
        height = maxHeight;
      }

      if (slide.type === "image") {
        rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
        rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
      } else if (slide.contentType === "video") {
        // Force aspect ratio for the video
        // "I say the whole world must learn of our peaceful ways… by force!"
        aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;

        if (height > width / aspectRatio) {
          height = width / aspectRatio;
        } else if (width > height * aspectRatio) {
          width = height * aspectRatio;
        }
      }

      rez.width = width;
      rez.height = height;

      return rez;
    },

    // Update content size and position for all slides
    // ==============================================

    update: function (e) {
      var self = this;

      $.each(self.slides, function (key, slide) {
        self.updateSlide(slide, e);
      });
    },

    // Update slide content position and size
    // ======================================

    updateSlide: function (slide, e) {
      var self = this,
        $content = slide && slide.$content,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        $slide = slide.$slide;

      // First, prevent caption overlap, if needed
      self.adjustCaption(slide);

      // Then resize content to fit inside the slide
      if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
        $.fancybox.stop($content);

        $.fancybox.setTranslate($content, self.getFitPos(slide));

        if (slide.pos === self.currPos) {
          self.isAnimating = false;

          self.updateCursor();
        }
      }

      // Then some adjustments
      self.adjustLayout(slide);

      if ($slide.length) {
        $slide.trigger("refresh");

        if (slide.pos === self.currPos) {
          self.$refs.toolbar
            .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
            .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
        }
      }

      self.trigger("onUpdate", slide, e);
    },

    // Horizontally center slide
    // =========================

    centerSlide: function (duration) {
      var self = this,
        current = self.current,
        $slide = current.$slide;

      if (self.isClosing || !current) {
        return;
      }

      $slide.siblings().css({
        transform: "",
        opacity: ""
      });

      $slide
        .parent()
        .children()
        .removeClass("fancybox-slide--previous fancybox-slide--next");

      $.fancybox.animate(
        $slide, {
          top: 0,
          left: 0,
          opacity: 1
        },
        duration === undefined ? 0 : duration,
        function () {
          // Clean up
          $slide.css({
            transform: "",
            opacity: ""
          });

          if (!current.isComplete) {
            self.complete();
          }
        },
        false
      );
    },

    // Check if current slide is moved (swiped)
    // ========================================

    isMoved: function (slide) {
      var current = slide || this.current,
        slidePos,
        stagePos;

      if (!current) {
        return false;
      }

      stagePos = $.fancybox.getTranslate(this.$refs.stage);
      slidePos = $.fancybox.getTranslate(current.$slide);

      return (
        !current.$slide.hasClass("fancybox-animated") &&
        (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
      );
    },

    // Update cursor style depending if content can be zoomed
    // ======================================================

    updateCursor: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        $container = self.$refs.container,
        canPan,
        isZoomable;

      if (!current || self.isClosing || !self.Guestures) {
        return;
      }

      $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");

      canPan = self.canPan(nextWidth, nextHeight);

      isZoomable = canPan ? true : self.isZoomable();

      $container.toggleClass("fancybox-is-zoomable", isZoomable);

      $("[data-fancybox-zoom]").prop("disabled", !isZoomable);

      if (canPan) {
        $container.addClass("fancybox-can-pan");
      } else if (
        isZoomable &&
        (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
      ) {
        $container.addClass("fancybox-can-zoomIn");
      } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
        $container.addClass("fancybox-can-swipe");
      }
    },

    // Check if current slide is zoomable
    // ==================================

    isZoomable: function () {
      var self = this,
        current = self.current,
        fitPos;

      // Assume that slide is zoomable if:
      //   - image is still loading
      //   - actual size of the image is smaller than available area
      if (current && !self.isClosing && current.type === "image" && !current.hasError) {
        if (!current.isLoaded) {
          return true;
        }

        fitPos = self.getFitPos(current);

        if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
          return true;
        }
      }

      return false;
    },

    // Check if current image dimensions are smaller than actual
    // =========================================================

    isScaledDown: function (nextWidth, nextHeight) {
      var self = this,
        rez = false,
        current = self.current,
        $content = current.$content;

      if (nextWidth !== undefined && nextHeight !== undefined) {
        rez = nextWidth < current.width && nextHeight < current.height;
      } else if ($content) {
        rez = $.fancybox.getTranslate($content);
        rez = rez.width < current.width && rez.height < current.height;
      }

      return rez;
    },

    // Check if image dimensions exceed parent element
    // ===============================================

    canPan: function (nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        pos = null,
        rez = false;

      if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
        rez = self.getFitPos(current);

        if (nextWidth !== undefined && nextHeight !== undefined) {
          pos = {
            width: nextWidth,
            height: nextHeight
          };
        } else if (current.isComplete) {
          pos = $.fancybox.getTranslate(current.$content);
        }

        if (pos && rez) {
          rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
        }
      }

      return rez;
    },

    // Load content into the slide
    // ===========================

    loadSlide: function (slide) {
      var self = this,
        type,
        $slide,
        ajaxLoad;

      if (slide.isLoading || slide.isLoaded) {
        return;
      }

      slide.isLoading = true;

      if (self.trigger("beforeLoad", slide) === false) {
        slide.isLoading = false;

        return false;
      }

      type = slide.type;
      $slide = slide.$slide;

      $slide
        .off("refresh")
        .trigger("onReset")
        .addClass(slide.opts.slideClass);

      // Create content depending on the type
      switch (type) {
        case "image":
          self.setImage(slide);

          break;

        case "iframe":
          self.setIframe(slide);

          break;

        case "html":
          self.setContent(slide, slide.src || slide.content);

          break;

        case "video":
          self.setContent(
            slide,
            slide.opts.video.tpl
            .replace(/\{\{src\}\}/gi, slide.src)
            .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
            .replace("{{poster}}", slide.thumb || "")
          );

          break;

        case "inline":
          if ($(slide.src).length) {
            self.setContent(slide, $(slide.src));
          } else {
            self.setError(slide);
          }

          break;

        case "ajax":
          self.showLoading(slide);

          ajaxLoad = $.ajax(
            $.extend({}, slide.opts.ajax.settings, {
              url: slide.src,
              success: function (data, textStatus) {
                if (textStatus === "success") {
                  self.setContent(slide, data);
                }
              },
              error: function (jqXHR, textStatus) {
                if (jqXHR && textStatus !== "abort") {
                  self.setError(slide);
                }
              }
            })
          );

          $slide.one("onReset", function () {
            ajaxLoad.abort();
          });

          break;

        default:
          self.setError(slide);

          break;
      }

      return true;
    },

    // Use thumbnail image, if possible
    // ================================

    setImage: function (slide) {
      var self = this,
        ghost;

      // Check if need to show loading icon
      setTimeout(function () {
        var $img = slide.$image;

        if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
          self.showLoading(slide);
        }
      }, 50);

      //Check if image has srcset
      self.checkSrcset(slide);

      // This will be wrapper containing both ghost and actual image
      slide.$content = $('<div class="fancybox-content"></div>')
        .addClass("fancybox-is-hidden")
        .appendTo(slide.$slide.addClass("fancybox-slide--image"));

      // If we have a thumbnail, we can display it while actual image is loading
      // Users will not stare at black screen and actual image will appear gradually
      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;

        ghost = document.createElement("img");

        ghost.onerror = function () {
          $(this).remove();

          slide.$ghost = null;
        };

        ghost.onload = function () {
          self.afterLoad(slide);
        };

        slide.$ghost = $(ghost)
          .addClass("fancybox-image")
          .appendTo(slide.$content)
          .attr("src", slide.thumb);
      }

      // Start loading actual image
      self.setBigImage(slide);
    },

    // Check if image has srcset and get the source
    // ============================================
    checkSrcset: function (slide) {
      var srcset = slide.opts.srcset || slide.opts.image.srcset,
        found,
        temp,
        pxRatio,
        windowWidth;

      // If we have "srcset", then we need to find first matching "src" value.
      // This is necessary, because when you set an src attribute, the browser will preload the image
      // before any javascript or even CSS is applied.
      if (srcset) {
        pxRatio = window.devicePixelRatio || 1;
        windowWidth = window.innerWidth * pxRatio;

        temp = srcset.split(",").map(function (el) {
          var ret = {};

          el.trim()
            .split(/\s+/)
            .forEach(function (el, i) {
              var value = parseInt(el.substring(0, el.length - 1), 10);

              if (i === 0) {
                return (ret.url = el);
              }

              if (value) {
                ret.value = value;
                ret.postfix = el[el.length - 1];
              }
            });

          return ret;
        });

        // Sort by value
        temp.sort(function (a, b) {
          return a.value - b.value;
        });

        // Ok, now we have an array of all srcset values
        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];

          if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
            found = el;
            break;
          }
        }

        // If not found, take the last one
        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }

        if (found) {
          slide.src = found.url;

          // If we have default width/height values, we can calculate height for matching source
          if (slide.width && slide.height && found.postfix == "w") {
            slide.height = (slide.width / slide.height) * found.value;
            slide.width = found.value;
          }

          slide.opts.srcset = srcset;
        }
      }
    },

    // Create full-size image
    // ======================

    setBigImage: function (slide) {
      var self = this,
        img = document.createElement("img"),
        $img = $(img);

      slide.$image = $img
        .one("error", function () {
          self.setError(slide);
        })
        .one("load", function () {
          var sizes;

          if (!slide.$ghost) {
            self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);

            self.afterLoad(slide);
          }

          if (self.isClosing) {
            return;
          }

          if (slide.opts.srcset) {
            sizes = slide.opts.sizes;

            if (!sizes || sizes === "auto") {
              sizes =
                (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
                "vw";
            }

            $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
          }

          // Hide temporary image after some delay
          if (slide.$ghost) {
            setTimeout(function () {
              if (slide.$ghost && !self.isClosing) {
                slide.$ghost.hide();
              }
            }, Math.min(300, Math.max(1000, slide.height / 1600)));
          }

          self.hideLoading(slide);
        })
        .addClass("fancybox-image")
        .attr("src", slide.src)
        .appendTo(slide.$content);

      if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
        $img.trigger("load");
      } else if (img.error) {
        $img.trigger("error");
      }
    },

    // Computes the slide size from image size and maxWidth/maxHeight
    // ==============================================================

    resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
      var maxWidth = parseInt(slide.opts.width, 10),
        maxHeight = parseInt(slide.opts.height, 10);

      // Sets the default values from the image
      slide.width = imgWidth;
      slide.height = imgHeight;

      if (maxWidth > 0) {
        slide.width = maxWidth;
        slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
      }

      if (maxHeight > 0) {
        slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
        slide.height = maxHeight;
      }
    },

    // Create iframe wrapper, iframe and bindings
    // ==========================================

    setIframe: function (slide) {
      var self = this,
        opts = slide.opts.iframe,
        $slide = slide.$slide,
        $iframe;

      slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
        .css(opts.css)
        .appendTo($slide);

      $slide.addClass("fancybox-slide--" + slide.contentType);

      slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
        .attr(opts.attr)
        .appendTo(slide.$content);

      if (opts.preload) {
        self.showLoading(slide);

        // Unfortunately, it is not always possible to determine if iframe is successfully loaded
        // (due to browser security policy)

        $iframe.on("load.fb error.fb", function (e) {
          this.isReady = 1;

          slide.$slide.trigger("refresh");

          self.afterLoad(slide);
        });

        // Recalculate iframe content size
        // ===============================

        $slide.on("refresh.fb", function () {
          var $content = slide.$content,
            frameWidth = opts.css.width,
            frameHeight = opts.css.height,
            $contents,
            $body;

          if ($iframe[0].isReady !== 1) {
            return;
          }

          try {
            $contents = $iframe.contents();
            $body = $contents.find("body");
          } catch (ignore) {}

          // Calculate content dimensions, if it is accessible
          if ($body && $body.length && $body.children().length) {
            // Avoid scrolling to top (if multiple instances)
            $slide.css("overflow", "visible");

            $content.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            });

            if (frameWidth === undefined) {
              frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
            }

            $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");

            if (frameHeight === undefined) {
              frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
            }

            $content.css("height", frameHeight ? frameHeight : "");

            $slide.css("overflow", "auto");
          }

          $content.removeClass("fancybox-is-hidden");
        });
      } else {
        self.afterLoad(slide);
      }

      $iframe.attr("src", slide.src);

      // Remove iframe if closing or changing gallery item
      $slide.one("onReset", function () {
        // This helps IE not to throw errors when closing
        try {
          $(this)
            .find("iframe")
            .hide()
            .unbind()
            .attr("src", "//about:blank");
        } catch (ignore) {}

        $(this)
          .off("refresh.fb")
          .empty();

        slide.isLoaded = false;
        slide.isRevealed = false;
      });
    },

    // Wrap and append content to the slide
    // ======================================

    setContent: function (slide, content) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      self.hideLoading(slide);

      if (slide.$content) {
        $.fancybox.stop(slide.$content);
      }

      slide.$slide.empty();

      // If content is a jQuery object, then it will be moved to the slide.
      // The placeholder is created so we will know where to put it back.
      if (isQuery(content) && content.parent().length) {
        // Make sure content is not already moved to fancyBox
        if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
          content.parents(".fancybox-slide").trigger("onReset");
        }

        // Create temporary element marking original place of the content
        slide.$placeholder = $("<div>")
          .hide()
          .insertAfter(content);

        // Make sure content is visible
        content.css("display", "inline-block");
      } else if (!slide.hasError) {
        // If content is just a plain text, try to convert it to html
        if ($.type(content) === "string") {
          content = $("<div>")
            .append($.trim(content))
            .contents();
        }

        // If "filter" option is provided, then filter content
        if (slide.opts.filter) {
          content = $("<div>")
            .html(content)
            .find(slide.opts.filter);
        }
      }

      slide.$slide.one("onReset", function () {
        // Pause all html5 video/audio
        $(this)
          .find("video,audio")
          .trigger("pause");

        // Put content back
        if (slide.$placeholder) {
          slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();

          slide.$placeholder = null;
        }

        // Remove custom close button
        if (slide.$smallBtn) {
          slide.$smallBtn.remove();

          slide.$smallBtn = null;
        }

        // Remove content and mark slide as not loaded
        if (!slide.hasError) {
          $(this).empty();

          slide.isLoaded = false;
          slide.isRevealed = false;
        }
      });

      $(content).appendTo(slide.$slide);

      if ($(content).is("video,audio")) {
        $(content).addClass("fancybox-video");

        $(content).wrap("<div></div>");

        slide.contentType = "video";

        slide.opts.width = slide.opts.width || $(content).attr("width");
        slide.opts.height = slide.opts.height || $(content).attr("height");
      }

      slide.$content = slide.$slide
        .children()
        .filter("div,form,main,video,audio,article,.fancybox-content")
        .first();

      slide.$content.siblings().hide();

      // Re-check if there is a valid content
      // (in some cases, ajax response can contain various elements or plain text)
      if (!slide.$content.length) {
        slide.$content = slide.$slide
          .wrapInner("<div></div>")
          .children()
          .first();
      }

      slide.$content.addClass("fancybox-content");

      slide.$slide.addClass("fancybox-slide--" + slide.contentType);

      self.afterLoad(slide);
    },

    // Display error message
    // =====================

    setError: function (slide) {
      slide.hasError = true;

      slide.$slide
        .trigger("onReset")
        .removeClass("fancybox-slide--" + slide.contentType)
        .addClass("fancybox-slide--error");

      slide.contentType = "html";

      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));

      if (slide.pos === this.currPos) {
        this.isAnimating = false;
      }
    },

    // Show loading icon inside the slide
    // ==================================

    showLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && !slide.$spinner) {
        slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
          .appendTo(slide.$slide)
          .hide()
          .fadeIn("fast");
      }
    },

    // Remove loading icon from the slide
    // ==================================

    hideLoading: function (slide) {
      var self = this;

      slide = slide || self.current;

      if (slide && slide.$spinner) {
        slide.$spinner.stop().remove();

        delete slide.$spinner;
      }
    },

    // Adjustments after slide content has been loaded
    // ===============================================

    afterLoad: function (slide) {
      var self = this;

      if (self.isClosing) {
        return;
      }

      slide.isLoading = false;
      slide.isLoaded = true;

      self.trigger("afterLoad", slide);

      self.hideLoading(slide);

      // Add small close button
      if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
      }

      // Disable right click
      if (slide.opts.protect && slide.$content && !slide.hasError) {
        slide.$content.on("contextmenu.fb", function (e) {
          if (e.button == 2) {
            e.preventDefault();
          }

          return true;
        });

        // Add fake element on top of the image
        // This makes a bit harder for user to select image
        if (slide.type === "image") {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }

      self.adjustCaption(slide);

      self.adjustLayout(slide);

      if (slide.pos === self.currPos) {
        self.updateCursor();
      }

      self.revealContent(slide);
    },

    // Prevent caption overlap,
    // fix css inconsistency across browsers
    // =====================================

    adjustCaption: function (slide) {
      var self = this,
        current = slide || self.current,
        caption = current.opts.caption,
        preventOverlap = current.opts.preventCaptionOverlap,
        $caption = self.$refs.caption,
        $clone,
        captionH = false;

      $caption.toggleClass("fancybox-caption--separate", preventOverlap);

      if (preventOverlap && caption && caption.length) {
        if (current.pos !== self.currPos) {
          $clone = $caption.clone().appendTo($caption.parent());

          $clone
            .children()
            .eq(0)
            .empty()
            .html(caption);

          captionH = $clone.outerHeight(true);

          $clone.empty().remove();
        } else if (self.$caption) {
          captionH = self.$caption.outerHeight(true);
        }

        current.$slide.css("padding-bottom", captionH || "");
      }
    },

    // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
    // ====================================================================================

    adjustLayout: function (slide) {
      var self = this,
        current = slide || self.current,
        scrollHeight,
        marginBottom,
        inlinePadding,
        actualPadding;

      if (current.isLoaded && current.opts.disableLayoutFix !== true) {
        current.$content.css("margin-bottom", "");

        // If we would always set margin-bottom for the content,
        // then it would potentially break vertical align
        if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
          inlinePadding = current.$slide[0].style["padding-bottom"];
          actualPadding = current.$slide.css("padding-bottom");

          if (parseFloat(actualPadding) > 0) {
            scrollHeight = current.$slide[0].scrollHeight;

            current.$slide.css("padding-bottom", 0);

            if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
              marginBottom = actualPadding;
            }

            current.$slide.css("padding-bottom", inlinePadding);
          }
        }

        current.$content.css("margin-bottom", marginBottom);
      }
    },

    // Make content visible
    // This method is called right after content has been loaded or
    // user navigates gallery and transition should start
    // ============================================================

    revealContent: function (slide) {
      var self = this,
        $slide = slide.$slide,
        end = false,
        start = false,
        isMoved = self.isMoved(slide),
        isRevealed = slide.isRevealed,
        effect,
        effectClassName,
        duration,
        opacity;

      slide.isRevealed = true;

      effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
      duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];

      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

      if (isMoved || slide.pos !== self.currPos || !duration) {
        effect = false;
      }

      // Check if can zoom
      if (effect === "zoom") {
        if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
          end = self.getFitPos(slide);
        } else {
          effect = "fade";
        }
      }

      // Zoom animation
      // ==============
      if (effect === "zoom") {
        self.isAnimating = true;

        end.scaleX = end.width / start.width;
        end.scaleY = end.height / start.height;

        // Check if we need to animate opacity
        opacity = slide.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }

        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        }

        // Draw image at start position
        $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);

        forceRedraw(slide.$content);

        // Start animation
        $.fancybox.animate(slide.$content, end, duration, function () {
          self.isAnimating = false;

          self.complete();
        });

        return;
      }

      self.updateSlide(slide);

      // Simply show content if no effect
      // ================================
      if (!effect) {
        slide.$content.removeClass("fancybox-is-hidden");

        if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
          slide.$content.hide().fadeIn("fast");
        }

        if (slide.pos === self.currPos) {
          self.complete();
        }

        return;
      }

      // Prepare for CSS transiton
      // =========================
      $.fancybox.stop($slide);

      //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
      effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;

      $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

      slide.$content.removeClass("fancybox-is-hidden");

      // Force reflow
      forceRedraw($slide);

      if (slide.type !== "image") {
        slide.$content.hide().show(0);
      }

      $.fancybox.animate(
        $slide,
        "fancybox-slide--current",
        duration,
        function () {
          $slide.removeClass(effectClassName).css({
            transform: "",
            opacity: ""
          });

          if (slide.pos === self.currPos) {
            self.complete();
          }
        },
        true
      );
    },

    // Check if we can and have to zoom from thumbnail
    //================================================

    getThumbPos: function (slide) {
      var rez = false,
        $thumb = slide.$thumb,
        thumbPos,
        btw,
        brw,
        bbw,
        blw;

      if (!$thumb || !inViewport($thumb[0])) {
        return false;
      }

      thumbPos = $.fancybox.getTranslate($thumb);

      btw = parseFloat($thumb.css("border-top-width") || 0);
      brw = parseFloat($thumb.css("border-right-width") || 0);
      bbw = parseFloat($thumb.css("border-bottom-width") || 0);
      blw = parseFloat($thumb.css("border-left-width") || 0);

      rez = {
        top: thumbPos.top + btw,
        left: thumbPos.left + blw,
        width: thumbPos.width - brw - blw,
        height: thumbPos.height - btw - bbw,
        scaleX: 1,
        scaleY: 1
      };

      return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
    },

    // Final adjustments after current gallery item is moved to position
    // and it`s content is loaded
    // ==================================================================

    complete: function () {
      var self = this,
        current = self.current,
        slides = {},
        $el;

      if (self.isMoved() || !current.isLoaded) {
        return;
      }

      if (!current.isComplete) {
        current.isComplete = true;

        current.$slide.siblings().trigger("onReset");

        self.preload("inline");

        // Trigger any CSS transiton inside the slide
        forceRedraw(current.$slide);

        current.$slide.addClass("fancybox-slide--complete");

        // Remove unnecessary slides
        $.each(self.slides, function (key, slide) {
          if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
            slides[slide.pos] = slide;
          } else if (slide) {
            $.fancybox.stop(slide.$slide);

            slide.$slide.off().remove();
          }
        });

        self.slides = slides;
      }

      self.isAnimating = false;

      self.updateCursor();

      self.trigger("afterShow");

      // Autoplay first html5 video/audio
      if (!!current.opts.video.autoStart) {
        current.$slide
          .find("video,audio")
          .filter(":visible:first")
          .trigger("play")
          .one("ended", function () {
            if (Document.exitFullscreen) {
              Document.exitFullscreen();
            } else if (this.webkitExitFullscreen) {
              this.webkitExitFullscreen();
            }

            self.next();
          });
      }

      // Try to focus on the first focusable element
      if (current.opts.autoFocus && current.contentType === "html") {
        // Look for the first input with autofocus attribute
        $el = current.$content.find("input[autofocus]:enabled:visible:first");

        if ($el.length) {
          $el.trigger("focus");
        } else {
          self.focus(null, true);
        }
      }

      // Avoid jumping
      current.$slide.scrollTop(0).scrollLeft(0);
    },

    // Preload next and previous slides
    // ================================

    preload: function (type) {
      var self = this,
        prev,
        next;

      if (self.group.length < 2) {
        return;
      }

      next = self.slides[self.currPos + 1];
      prev = self.slides[self.currPos - 1];

      if (prev && prev.type === type) {
        self.loadSlide(prev);
      }

      if (next && next.type === type) {
        self.loadSlide(next);
      }
    },

    // Try to find and focus on the first focusable element
    // ====================================================

    focus: function (e, firstRun) {
      var self = this,
        focusableStr = [
          "a[href]",
          "area[href]",
          'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
          "select:not([disabled]):not([aria-hidden])",
          "textarea:not([disabled]):not([aria-hidden])",
          "button:not([disabled]):not([aria-hidden])",
          "iframe",
          "object",
          "embed",
          "video",
          "audio",
          "[contenteditable]",
          '[tabindex]:not([tabindex^="-"])'
        ].join(","),
        focusableItems,
        focusedItemIndex;

      if (self.isClosing) {
        return;
      }

      if (e || !self.current || !self.current.isComplete) {
        // Focus on any element inside fancybox
        focusableItems = self.$refs.container.find("*:visible");
      } else {
        // Focus inside current slide
        focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
      }

      focusableItems = focusableItems.filter(focusableStr).filter(function () {
        return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
      });

      if (focusableItems.length) {
        focusedItemIndex = focusableItems.index(document.activeElement);

        if (e && e.shiftKey) {
          // Back tab
          if (focusedItemIndex < 0 || focusedItemIndex == 0) {
            e.preventDefault();

            focusableItems.eq(focusableItems.length - 1).trigger("focus");
          }
        } else {
          // Outside or Forward tab
          if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
            if (e) {
              e.preventDefault();
            }

            focusableItems.eq(0).trigger("focus");
          }
        }
      } else {
        self.$refs.container.trigger("focus");
      }
    },

    // Activates current instance - brings container to the front and enables keyboard,
    // notifies other instances about deactivating
    // =================================================================================

    activate: function () {
      var self = this;

      // Deactivate all instances
      $(".fancybox-container").each(function () {
        var instance = $(this).data("FancyBox");

        // Skip self and closing instances
        if (instance && instance.id !== self.id && !instance.isClosing) {
          instance.trigger("onDeactivate");

          instance.removeEvents();

          instance.isVisible = false;
        }
      });

      self.isVisible = true;

      if (self.current || self.isIdle) {
        self.update();

        self.updateControls();
      }

      self.trigger("onActivate");

      self.addEvents();
    },

    // Start closing procedure
    // This will start "zoom-out" animation if needed and clean everything up afterwards
    // =================================================================================

    close: function (e, d) {
      var self = this,
        current = self.current,
        effect,
        duration,
        $content,
        domRect,
        opacity,
        start,
        end;

      var done = function () {
        self.cleanUp(e);
      };

      if (self.isClosing) {
        return false;
      }

      self.isClosing = true;

      // If beforeClose callback prevents closing, make sure content is centered
      if (self.trigger("beforeClose", e) === false) {
        self.isClosing = false;

        requestAFrame(function () {
          self.update();
        });

        return false;
      }

      // Remove all events
      // If there are multiple instances, they will be set again by "activate" method
      self.removeEvents();

      $content = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;

      current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");

      if (e !== true) {
        $.fancybox.stop(current.$slide);
      } else {
        effect = false;
      }

      // Remove other slides
      current.$slide
        .siblings()
        .trigger("onReset")
        .remove();

      // Trigger animations
      if (duration) {
        self.$refs.container
          .removeClass("fancybox-is-open")
          .addClass("fancybox-is-closing")
          .css("transition-duration", duration + "ms");
      }

      // Clean up
      self.hideLoading(current);

      self.hideControls(true);

      self.updateCursor();

      // Check if possible to zoom-out
      if (
        effect === "zoom" &&
        !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
      ) {
        effect = "fade";
      }

      if (effect === "zoom") {
        $.fancybox.stop($content);

        domRect = $.fancybox.getTranslate($content);

        start = {
          top: domRect.top,
          left: domRect.left,
          scaleX: domRect.width / end.width,
          scaleY: domRect.height / end.height,
          width: end.width,
          height: end.height
        };

        // Check if we need to animate opacity
        opacity = current.opts.zoomOpacity;

        if (opacity == "auto") {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }

        if (opacity) {
          end.opacity = 0;
        }

        $.fancybox.setTranslate($content, start);

        forceRedraw($content);

        $.fancybox.animate($content, end, duration, done);

        return true;
      }

      if (effect && duration) {
        $.fancybox.animate(
          current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
          "fancybox-animated fancybox-fx-" + effect,
          duration,
          done
        );
      } else {
        // If skip animation
        if (e === true) {
          setTimeout(done, duration);
        } else {
          done();
        }
      }

      return true;
    },

    // Final adjustments after removing the instance
    // =============================================

    cleanUp: function (e) {
      var self = this,
        instance,
        $focus = self.current.opts.$orig,
        x,
        y;

      self.current.$slide.trigger("onReset");

      self.$refs.container.empty().remove();

      self.trigger("afterClose", e);

      // Place back focus
      if (!!self.current.opts.backFocus) {
        if (!$focus || !$focus.length || !$focus.is(":visible")) {
          $focus = self.$trigger;
        }

        if ($focus && $focus.length) {
          x = window.scrollX;
          y = window.scrollY;

          $focus.trigger("focus");

          $("html, body")
            .scrollTop(y)
            .scrollLeft(x);
        }
      }

      self.current = null;

      // Check if there are other instances
      instance = $.fancybox.getInstance();

      if (instance) {
        instance.activate();
      } else {
        $("body").removeClass("fancybox-active compensate-for-scrollbar");

        $("#fancybox-style-noscroll").remove();
      }
    },

    // Call callback and trigger an event
    // ==================================

    trigger: function (name, slide) {
      var args = Array.prototype.slice.call(arguments, 1),
        self = this,
        obj = slide && slide.opts ? slide : self.current,
        rez;

      if (obj) {
        args.unshift(obj);
      } else {
        obj = self;
      }

      args.unshift(self);

      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }

      if (rez === false) {
        return rez;
      }

      if (name === "afterClose" || !self.$refs) {
        $D.trigger(name + ".fb", args);
      } else {
        self.$refs.container.trigger(name + ".fb", args);
      }
    },

    // Update infobar values, navigation button states and reveal caption
    // ==================================================================

    updateControls: function () {
      var self = this,
        current = self.current,
        index = current.index,
        $container = self.$refs.container,
        $caption = self.$refs.caption,
        caption = current.opts.caption;

      // Recalculate content dimensions
      current.$slide.trigger("refresh");

      // Set caption
      if (caption && caption.length) {
        self.$caption = $caption;

        $caption
          .children()
          .eq(0)
          .html(caption);
      } else {
        self.$caption = null;
      }

      if (!self.hasHiddenControls && !self.isIdle) {
        self.showControls();
      }

      // Update info and navigation elements
      $container.find("[data-fancybox-count]").html(self.group.length);
      $container.find("[data-fancybox-index]").html(index + 1);

      $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
      $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);

      if (current.type === "image") {
        // Re-enable buttons; update download button source
        $container
          .find("[data-fancybox-zoom]")
          .show()
          .end()
          .find("[data-fancybox-download]")
          .attr("href", current.opts.image.src || current.src)
          .show();
      } else if (current.opts.toolbar) {
        $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      }

      // Make sure focus is not on disabled button/element
      if ($(document.activeElement).is(":hidden,[disabled]")) {
        self.$refs.container.trigger("focus");
      }
    },

    // Hide toolbar and caption
    // ========================

    hideControls: function (andCaption) {
      var self = this,
        arr = ["infobar", "toolbar", "nav"];

      if (andCaption || !self.current.opts.preventCaptionOverlap) {
        arr.push("caption");
      }

      this.$refs.container.removeClass(
        arr
        .map(function (i) {
          return "fancybox-show-" + i;
        })
        .join(" ")
      );

      this.hasHiddenControls = true;
    },

    showControls: function () {
      var self = this,
        opts = self.current ? self.current.opts : self.opts,
        $container = self.$refs.container;

      self.hasHiddenControls = false;
      self.idleSecondsCounter = 0;

      $container
        .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
        .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
        .toggleClass("fancybox-show-caption", !!self.$caption)
        .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
        .toggleClass("fancybox-is-modal", !!opts.modal);
    },

    // Toggle toolbar and caption
    // ==========================

    toggleControls: function () {
      if (this.hasHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });

  $.fancybox = {
    version: "3.5.7",
    defaults: defaults,

    // Get current instance and execute a command.
    //
    // Examples of usage:
    //
    //   $instance = $.fancybox.getInstance();
    //   $.fancybox.getInstance().jumpTo( 1 );
    //   $.fancybox.getInstance( 'jumpTo', 1 );
    //   $.fancybox.getInstance( function() {
    //       console.info( this.currIndex );
    //   });
    // ======================================================

    getInstance: function (command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
        args = Array.prototype.slice.call(arguments, 1);

      if (instance instanceof FancyBox) {
        if ($.type(command) === "string") {
          instance[command].apply(instance, args);
        } else if ($.type(command) === "function") {
          command.apply(instance, args);
        }

        return instance;
      }

      return false;
    },

    // Create new instance
    // ===================

    open: function (items, opts, index) {
      return new FancyBox(items, opts, index);
    },

    // Close current or all instances
    // ==============================

    close: function (all) {
      var instance = this.getInstance();

      if (instance) {
        instance.close();

        // Try to find and close next instance
        if (all === true) {
          this.close(all);
        }
      }
    },

    // Close all instances and unbind all events
    // =========================================

    destroy: function () {
      this.close(true);

      $D.add("body").off("click.fb-start", "**");
    },

    // Try to detect mobile devices
    // ============================

    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

    // Detect if 'translate3d' support is available
    // ============================================

    use3d: (function () {
      var div = document.createElement("div");

      return (
        window.getComputedStyle &&
        window.getComputedStyle(div) &&
        window.getComputedStyle(div).getPropertyValue("transform") &&
        !(document.documentMode && document.documentMode < 11)
      );
    })(),

    // Helper function to get current visual state of an element
    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
    // =====================================================================

    getTranslate: function ($el) {
      var domRect;

      if (!$el || !$el.length) {
        return false;
      }

      domRect = $el[0].getBoundingClientRect();

      return {
        top: domRect.top || 0,
        left: domRect.left || 0,
        width: domRect.width,
        height: domRect.height,
        opacity: parseFloat($el.css("opacity"))
      };
    },

    // Shortcut for setting "translate3d" properties for element
    // Can set be used to set opacity, too
    // ========================================================

    setTranslate: function ($el, props) {
      var str = "",
        css = {};

      if (!$el || !props) {
        return;
      }

      if (props.left !== undefined || props.top !== undefined) {
        str =
          (props.left === undefined ? $el.position().left : props.left) +
          "px, " +
          (props.top === undefined ? $el.position().top : props.top) +
          "px";

        if (this.use3d) {
          str = "translate3d(" + str + ", 0px)";
        } else {
          str = "translate(" + str + ")";
        }
      }

      if (props.scaleX !== undefined && props.scaleY !== undefined) {
        str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
      } else if (props.scaleX !== undefined) {
        str += " scaleX(" + props.scaleX + ")";
      }

      if (str.length) {
        css.transform = str;
      }

      if (props.opacity !== undefined) {
        css.opacity = props.opacity;
      }

      if (props.width !== undefined) {
        css.width = props.width;
      }

      if (props.height !== undefined) {
        css.height = props.height;
      }

      return $el.css(css);
    },

    // Simple CSS transition handler
    // =============================

    animate: function ($el, to, duration, callback, leaveAnimationName) {
      var self = this,
        from;

      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }

      self.stop($el);

      from = self.getTranslate($el);

      $el.on(transitionEnd, function (e) {
        // Skip events from child elements and z-index change
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
          return;
        }

        self.stop($el);

        if ($.isNumeric(duration)) {
          $el.css("transition-duration", "");
        }

        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            self.setTranslate($el, {
              top: to.top,
              left: to.left,
              width: from.width * to.scaleX,
              height: from.height * to.scaleY,
              scaleX: 1,
              scaleY: 1
            });
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }

        if ($.isFunction(callback)) {
          callback(e);
        }
      });

      if ($.isNumeric(duration)) {
        $el.css("transition-duration", duration + "ms");
      }

      // Start animation by changing CSS properties or class name
      if ($.isPlainObject(to)) {
        if (to.scaleX !== undefined && to.scaleY !== undefined) {
          delete to.width;
          delete to.height;

          if ($el.parent().hasClass("fancybox-slide--image")) {
            $el.parent().addClass("fancybox-is-scaling");
          }
        }

        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      }

      // Make sure that `transitionend` callback gets fired
      $el.data(
        "timer",
        setTimeout(function () {
          $el.trigger(transitionEnd);
        }, duration + 33)
      );
    },

    stop: function ($el, callCallback) {
      if ($el && $el.length) {
        clearTimeout($el.data("timer"));

        if (callCallback) {
          $el.trigger(transitionEnd);
        }

        $el.off(transitionEnd).css("transition-duration", "");

        $el.parent().removeClass("fancybox-is-scaling");
      }
    }
  };

  // Default click handler for "fancyboxed" links
  // ============================================

  function _run(e, opts) {
    var items = [],
      index = 0,
      $target,
      value,
      instance;

    // Avoid opening multiple times
    if (e && e.isDefaultPrevented()) {
      return;
    }

    e.preventDefault();

    opts = opts || {};

    if (e && e.data) {
      opts = mergeOpts(e.data.options, opts);
    }

    $target = opts.$target || $(e.currentTarget).trigger("blur");
    instance = $.fancybox.getInstance();

    if (instance && instance.$trigger && instance.$trigger.is($target)) {
      return;
    }

    if (opts.selector) {
      items = $(opts.selector);
    } else {
      // Get all related items and find index for clicked one
      value = $target.attr("data-fancybox") || "";

      if (value) {
        items = e.data ? e.data.items : [];
        items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      } else {
        items = [$target];
      }
    }

    index = $(items).index($target);

    // Sometimes current item can not be found
    if (index < 0) {
      index = 0;
    }

    instance = $.fancybox.open(items, opts, index);

    // Save last active element
    instance.$trigger = $target;
  }

  // Create a jQuery plugin
  // ======================

  $.fn.fancybox = function (options) {
    var selector;

    options = options || {};
    selector = options.selector || false;

    if (selector) {
      // Use body element instead of document so it executes first
      $("body")
        .off("click.fb-start", selector)
        .on("click.fb-start", selector, {
          options: options
        }, _run);
    } else {
      this.off("click.fb-start").on(
        "click.fb-start", {
          items: this,
          options: options
        },
        _run
      );
    }

    return this;
  };

  // Self initializing plugin for all elements having `data-fancybox` attribute
  // ==========================================================================

  $D.on("click.fb-start", "[data-fancybox]", _run);

  // Enable "trigger elements"
  // =========================

  $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
    $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
      .eq($(this).attr("data-fancybox-index") || 0)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });
  });

  // Track focus event for better accessibility styling
  // ==================================================
  (function () {
    var buttonStr = ".fancybox-button",
      focusStr = "fancybox-focus",
      $pressed = null;

    $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
      switch (e.type) {
        case "mousedown":
          $pressed = $(this);
          break;
        case "mouseup":
          $pressed = null;
          break;
        case "focusin":
          $(buttonStr).removeClass(focusStr);

          if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
            $(this).addClass(focusStr);
          }
          break;
        case "focusout":
          $(buttonStr).removeClass(focusStr);
          break;
      }
    });
  })();
})(window, document, jQuery);
// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
(function ($) {
  "use strict";

  // Object containing properties for each media type
  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },

    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },

    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },

    // Examples:
    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
    // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function (rez) {
        return (
          "//maps.google." +
          rez[2] +
          "/?ll=" +
          (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
          "&output=" +
          (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
        );
      }
    },

    // Examples:
    // https://www.google.com/maps/search/Empire+State+Building/
    // https://www.google.com/maps/search/?api=1&query=centurylink+field
    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function (rez) {
        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };

  // Formats matching url to final form
  var format = function (url, rez, params) {
    if (!url) {
      return;
    }

    params = params || "";

    if ($.type(params) === "object") {
      params = $.param(params, true);
    }

    $.each(rez, function (key, value) {
      url = url.replace("$" + key, value || "");
    });

    if (params.length) {
      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
    }

    return url;
  };

  $(document).on("objectNeedsType.fb", function (e, instance, item) {
    var url = item.src || "",
      type = false,
      media,
      thumb,
      rez,
      params,
      urlParams,
      paramObj,
      provider;

    media = $.extend(true, {}, defaults, item.opts.media);

    // Look for any matching media type
    $.each(media, function (providerName, providerOpts) {
      rez = url.match(providerOpts.matcher);

      if (!rez) {
        return;
      }

      type = providerOpts.type;
      provider = providerName;
      paramObj = {};

      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
        urlParams = rez[providerOpts.paramPlace];

        if (urlParams[0] == "?") {
          urlParams = urlParams.substring(1);
        }

        urlParams = urlParams.split("&");

        for (var m = 0; m < urlParams.length; ++m) {
          var p = urlParams[m].split("=", 2);

          if (p.length == 2) {
            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
        }
      }

      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);

      url =
        $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);

      thumb =
        $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

      if (providerName === "youtube") {
        url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
          return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
        });
      } else if (providerName === "vimeo") {
        url = url.replace("&%23", "#");
      }

      return false;
    });

    // If it is found, then change content type and update the url

    if (type) {
      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
        item.opts.thumb = thumb;
      }

      if (type === "iframe") {
        item.opts = $.extend(true, item.opts, {
          iframe: {
            preload: false,
            attr: {
              scrolling: "no"
            }
          }
        });
      }

      $.extend(item, {
        type: type,
        src: url,
        origSrc: item.src,
        contentSource: provider,
        contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
      });
    } else if (url) {
      item.type = item.opts.defaultType;
    }
  });

  // Load YouTube/Video API on request to detect when video finished playing
  var VideoAPILoader = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: false,
      loaded: false
    },

    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: false,
      loaded: false
    },

    load: function (vendor) {
      var _this = this,
        script;

      if (this[vendor].loaded) {
        setTimeout(function () {
          _this.done(vendor);
        });
        return;
      }

      if (this[vendor].loading) {
        return;
      }

      this[vendor].loading = true;

      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = this[vendor].src;

      if (vendor === "youtube") {
        window.onYouTubeIframeAPIReady = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      } else {
        script.onload = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      }

      document.body.appendChild(script);
    },
    done: function (vendor) {
      var instance, $el, player;

      if (vendor === "youtube") {
        delete window.onYouTubeIframeAPIReady;
      }

      instance = $.fancybox.getInstance();

      if (instance) {
        $el = instance.current.$content.find("iframe");

        if (vendor === "youtube" && YT !== undefined && YT) {
          player = new YT.Player($el.attr("id"), {
            events: {
              onStateChange: function (e) {
                if (e.data == 0) {
                  instance.next();
                }
              }
            }
          });
        } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
          player = new Vimeo.Player($el);

          player.on("ended", function () {
            instance.next();
          });
        }
      }
    }
  };

  $(document).on({
    "afterShow.fb": function (e, instance, current) {
      if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
        VideoAPILoader.load(current.contentSource);
      }
    }
  });
})(jQuery);
// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  var requestAFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      // if all else fails, use setTimeout
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  var cancelAFrame = (function () {
    return (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function (id) {
        window.clearTimeout(id);
      }
    );
  })();

  var getPointerXY = function (e) {
    var result = [];

    e = e.originalEvent || e || window.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

    for (var key in e) {
      if (e[key].pageX) {
        result.push({
          x: e[key].pageX,
          y: e[key].pageY
        });
      } else if (e[key].clientX) {
        result.push({
          x: e[key].clientX,
          y: e[key].clientY
        });
      }
    }

    return result;
  };

  var distance = function (point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }

    if (what === "x") {
      return point2.x - point1.x;
    } else if (what === "y") {
      return point2.y - point1.y;
    }

    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };

  var isClickable = function ($el) {
    if (
      $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
      $.isFunction($el.get(0).onclick) ||
      $el.data("selectable")
    ) {
      return true;
    }

    // Check for attributes like data-fancybox-next or data-fancybox-close
    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
        return true;
      }
    }

    return false;
  };

  var hasScrollbars = function (el) {
    var overflowY = window.getComputedStyle(el)["overflow-y"],
      overflowX = window.getComputedStyle(el)["overflow-x"],
      vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
      horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;

    return vertical || horizontal;
  };

  var isScrollable = function ($el) {
    var rez = false;

    while (true) {
      rez = hasScrollbars($el.get(0));

      if (rez) {
        break;
      }

      $el = $el.parent();

      if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
        break;
      }
    }

    return rez;
  };

  var Guestures = function (instance) {
    var self = this;

    self.instance = instance;

    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;

    self.destroy();

    self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
  };

  Guestures.prototype.destroy = function () {
    var self = this;

    self.$container.off(".fb.touch");

    $(document).off(".fb.touch");

    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }

    if (self.tapped) {
      clearTimeout(self.tapped);
      self.tapped = null;
    }
  };

  Guestures.prototype.ontouchstart = function (e) {
    var self = this,
      $target = $(e.target),
      instance = self.instance,
      current = instance.current,
      $slide = current.$slide,
      $content = current.$content,
      isTouchDevice = e.type == "touchstart";

    // Do not respond to both (touch and mouse) events
    if (isTouchDevice) {
      self.$container.off("mousedown.fb.touch");
    }

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Ignore taping on links, buttons, input elements
    if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    }
    // Ignore clicks on the scrollbar
    if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Ignore clicks while zooming or closing
    if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
      e.stopPropagation();
      e.preventDefault();

      return;
    }

    self.realPoints = self.startPoints = getPointerXY(e);

    if (!self.startPoints.length) {
      return;
    }

    // Allow other scripts to catch touch event if "touch" is set to false
    if (current.touch) {
      e.stopPropagation();
    }

    self.startEvent = e;

    self.canTap = true;
    self.$target = $target;
    self.$content = $content;
    self.opts = current.opts.touch;

    self.isPanning = false;
    self.isSwiping = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.canPan = instance.canPan();

    self.startTime = new Date().getTime();
    self.distanceX = self.distanceY = self.distance = 0;

    self.canvasWidth = Math.round($slide[0].clientWidth);
    self.canvasHeight = Math.round($slide[0].clientHeight);

    self.contentLastPos = null;
    self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
      top: 0,
      left: 0
    };
    self.sliderStartPos = $.fancybox.getTranslate($slide);

    // Since position will be absolute, but we need to make it relative to the stage
    self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);

    self.sliderStartPos.top -= self.stagePos.top;
    self.sliderStartPos.left -= self.stagePos.left;

    self.contentStartPos.top -= self.stagePos.top;
    self.contentStartPos.left -= self.stagePos.left;

    $(document)
      .off(".fb.touch")
      .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
      .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));

    if ($.fancybox.isMobile) {
      document.addEventListener("scroll", self.onscroll, true);
    }

    // Skip if clicked outside the sliding area
    if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      if ($target.is(".fancybox-image")) {
        e.preventDefault();
      }

      if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
        return;
      }
    }

    self.isScrollable = isScrollable($target) || isScrollable($target.parent());

    // Check if element is scrollable and try to prevent default behavior (scrolling)
    if (!($.fancybox.isMobile && self.isScrollable)) {
      e.preventDefault();
    }

    // One finger or mouse click - swipe or pan an image
    if (self.startPoints.length === 1 || current.hasError) {
      if (self.canPan) {
        $.fancybox.stop(self.$content);

        self.isPanning = true;
      } else {
        self.isSwiping = true;
      }

      self.$container.addClass("fancybox-is-grabbing");
    }

    // Two fingers - zoom image
    if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
      self.canTap = false;
      self.isSwiping = false;
      self.isPanning = false;

      self.isZooming = true;

      $.fancybox.stop(self.$content);

      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();

      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;

      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
    }
  };

  Guestures.prototype.onscroll = function (e) {
    var self = this;

    self.isScrolling = true;

    document.removeEventListener("scroll", self.onscroll, true);
  };

  Guestures.prototype.ontouchmove = function (e) {
    var self = this;

    // Make sure user has not released over iframe or disabled element
    if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
      self.ontouchend(e);
      return;
    }

    if (self.isScrolling) {
      self.canTap = false;
      return;
    }

    self.newPoints = getPointerXY(e);

    if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
      return;
    }

    if (!(self.isSwiping && self.isSwiping === true)) {
      e.preventDefault();
    }

    self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
    self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");

    self.distance = distance(self.newPoints[0], self.startPoints[0]);

    // Skip false ontouchmove events (Chrome)
    if (self.distance > 0) {
      if (self.isSwiping) {
        self.onSwipe(e);
      } else if (self.isPanning) {
        self.onPan();
      } else if (self.isZooming) {
        self.onZoom();
      }
    }
  };

  Guestures.prototype.onSwipe = function (e) {
    var self = this,
      instance = self.instance,
      swiping = self.isSwiping,
      left = self.sliderStartPos.left || 0,
      angle;

    // If direction is not yet determined
    if (swiping === true) {
      // We need at least 10px distance to correctly calculate an angle
      if (Math.abs(self.distance) > 10) {
        self.canTap = false;

        if (instance.group.length < 2 && self.opts.vertical) {
          self.isSwiping = "y";
        } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
          self.isSwiping = "x";
        } else {
          angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);

          self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
        }

        if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
          self.isScrolling = true;

          return;
        }

        instance.isDragging = self.isSwiping;

        // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
        self.startPoints = self.newPoints;

        $.each(instance.slides, function (index, slide) {
          var slidePos, stagePos;

          $.fancybox.stop(slide.$slide);

          slidePos = $.fancybox.getTranslate(slide.$slide);
          stagePos = $.fancybox.getTranslate(instance.$refs.stage);

          slide.$slide
            .css({
              transform: "",
              opacity: "",
              "transition-duration": ""
            })
            .removeClass("fancybox-animated")
            .removeClass(function (index, className) {
              return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
            });

          if (slide.pos === instance.current.pos) {
            self.sliderStartPos.top = slidePos.top - stagePos.top;
            self.sliderStartPos.left = slidePos.left - stagePos.left;
          }

          $.fancybox.setTranslate(slide.$slide, {
            top: slidePos.top - stagePos.top,
            left: slidePos.left - stagePos.left
          });
        });

        // Stop slideshow
        if (instance.SlideShow && instance.SlideShow.isActive) {
          instance.SlideShow.stop();
        }
      }

      return;
    }

    // Sticky edges
    if (swiping == "x") {
      if (
        self.distanceX > 0 &&
        (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
      ) {
        left = left + Math.pow(self.distanceX, 0.8);
      } else if (
        self.distanceX < 0 &&
        (self.instance.group.length < 2 ||
          (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
      ) {
        left = left - Math.pow(-self.distanceX, 0.8);
      } else {
        left = left + self.distanceX;
      }
    }

    self.sliderLastPos = {
      top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
      left: left
    };

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.requestId = requestAFrame(function () {
      if (self.sliderLastPos) {
        $.each(self.instance.slides, function (index, slide) {
          var pos = slide.pos - self.instance.currPos;

          $.fancybox.setTranslate(slide.$slide, {
            top: self.sliderLastPos.top,
            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
          });
        });

        self.$container.addClass("fancybox-is-sliding");
      }
    });
  };

  Guestures.prototype.onPan = function () {
    var self = this;

    // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
    if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
      self.startPoints = self.newPoints;
      return;
    }

    self.canTap = false;

    self.contentLastPos = self.limitMovement();

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  // Make panning sticky to the edges
  Guestures.prototype.limitMovement = function () {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    var distanceX = self.distanceX;
    var distanceY = self.distanceY;

    var contentStartPos = self.contentStartPos;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

    if (currentWidth > canvasWidth) {
      newOffsetX = currentOffsetX + distanceX;
    } else {
      newOffsetX = currentOffsetX;
    }

    newOffsetY = currentOffsetY + distanceY;

    // Slow down proportionally to traveled distance
    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);

    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

    //   ->
    if (distanceX > 0 && newOffsetX > minTranslateX) {
      newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
    }

    //    <-
    if (distanceX < 0 && newOffsetX < maxTranslateX) {
      newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
    }

    //   \/
    if (distanceY > 0 && newOffsetY > minTranslateY) {
      newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
    }

    //   /\
    if (distanceY < 0 && newOffsetY < maxTranslateY) {
      newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;

    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;

    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      // Center horizontally
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }

    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      // Center vertically
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }

    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };

  Guestures.prototype.onZoom = function () {
    var self = this;

    // Calculate current distance between points to get pinch ratio and new width and height
    var contentStartPos = self.contentStartPos;

    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;

    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;

    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);

    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio);

    // This is the translation due to pinch-zooming
    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

    // Point between the two touches
    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();

    // And this is the translation due to translation of the centerpoint
    // between the two fingers
    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

    // The new offset is the old/current one plus the total translation
    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);

    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: pinchRatio,
      scaleY: pinchRatio
    };

    self.canTap = false;

    self.newWidth = newWidth;
    self.newHeight = newHeight;

    self.contentLastPos = newPos;

    if (self.requestId) {
      cancelAFrame(self.requestId);
    }

    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  Guestures.prototype.ontouchend = function (e) {
    var self = this;

    var swiping = self.isSwiping;
    var panning = self.isPanning;
    var zooming = self.isZooming;
    var scrolling = self.isScrolling;

    self.endPoints = getPointerXY(e);
    self.dMs = Math.max(new Date().getTime() - self.startTime, 1);

    self.$container.removeClass("fancybox-is-grabbing");

    $(document).off(".fb.touch");

    document.removeEventListener("scroll", self.onscroll, true);

    if (self.requestId) {
      cancelAFrame(self.requestId);

      self.requestId = null;
    }

    self.isSwiping = false;
    self.isPanning = false;
    self.isZooming = false;
    self.isScrolling = false;

    self.instance.isDragging = false;

    if (self.canTap) {
      return self.onTap(e);
    }

    self.speed = 100;

    // Speed in px/ms
    self.velocityX = (self.distanceX / self.dMs) * 0.5;
    self.velocityY = (self.distanceY / self.dMs) * 0.5;

    if (panning) {
      self.endPanning();
    } else if (zooming) {
      self.endZooming();
    } else {
      self.endSwiping(swiping, scrolling);
    }

    return;
  };

  Guestures.prototype.endSwiping = function (swiping, scrolling) {
    var self = this,
      ret = false,
      len = self.instance.group.length,
      distanceX = Math.abs(self.distanceX),
      canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
      speedX = 300;

    self.sliderLastPos = null;

    // Close if swiped vertically / navigate if horizontally
    if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
      // Continue vertical movement
      $.fancybox.animate(
        self.instance.current.$slide, {
          top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
          opacity: 0
        },
        200
      );
      ret = self.instance.close(true, 250);
    } else if (canAdvance && self.distanceX > 0) {
      ret = self.instance.previous(speedX);
    } else if (canAdvance && self.distanceX < 0) {
      ret = self.instance.next(speedX);
    }

    if (ret === false && (swiping == "x" || swiping == "y")) {
      self.instance.centerSlide(200);
    }

    self.$container.removeClass("fancybox-is-sliding");
  };

  // Limit panning from edges
  // ========================
  Guestures.prototype.endPanning = function () {
    var self = this,
      newOffsetX,
      newOffsetY,
      newPos;

    if (!self.contentLastPos) {
      return;
    }

    if (self.opts.momentum === false || self.dMs > 350) {
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
    } else {
      // Continue movement
      newOffsetX = self.contentLastPos.left + self.velocityX * 500;
      newOffsetY = self.contentLastPos.top + self.velocityY * 500;
    }

    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);

    newPos.width = self.contentStartPos.width;
    newPos.height = self.contentStartPos.height;

    $.fancybox.animate(self.$content, newPos, 366);
  };

  Guestures.prototype.endZooming = function () {
    var self = this;

    var current = self.instance.current;

    var newOffsetX, newOffsetY, newPos, reset;

    var newWidth = self.newWidth;
    var newHeight = self.newHeight;

    if (!self.contentLastPos) {
      return;
    }

    newOffsetX = self.contentLastPos.left;
    newOffsetY = self.contentLastPos.top;

    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    };

    // Reset scalex/scaleY values; this helps for perfomance and does not break animation
    $.fancybox.setTranslate(self.$content, reset);

    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
      self.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
    } else {
      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);

      $.fancybox.animate(self.$content, newPos, 150);
    }
  };

  Guestures.prototype.onTap = function (e) {
    var self = this;
    var $target = $(e.target);

    var instance = self.instance;
    var current = instance.current;

    var endPoints = (e && getPointerXY(e)) || self.startPoints;

    var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;

    var where;

    var process = function (prefix) {
      var action = current.opts[prefix];

      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }

      if (!action) {
        return;
      }

      switch (action) {
        case "close":
          instance.close(self.startEvent);

          break;

        case "toggleControls":
          instance.toggleControls();

          break;

        case "next":
          instance.next();

          break;

        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self.startEvent);
          }

          break;

        case "zoom":
          if (current.type == "image" && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self.startEvent);
            }
          }

          break;
      }
    };

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Skip if clicked on the scrollbar
    if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Check where is clicked
    if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
      where = "Outside";
    } else if ($target.is(".fancybox-slide")) {
      where = "Slide";
    } else if (
      instance.current.$content &&
      instance.current.$content
      .find($target)
      .addBack()
      .filter($target).length
    ) {
      where = "Content";
    } else {
      return;
    }

    // Check if this is a double tap
    if (self.tapped) {
      // Stop previously created single tap
      clearTimeout(self.tapped);
      self.tapped = null;

      // Skip if distance between taps is too big
      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
        return this;
      }

      // OK, now we assume that this is a double-tap
      process("dblclick" + where);
    } else {
      // Single tap will be processed if user has not clicked second time within 300ms
      // or there is no need to wait for double-tap
      self.tapX = tapX;
      self.tapY = tapY;

      if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
        self.tapped = setTimeout(function () {
          self.tapped = null;

          if (!instance.isAnimating) {
            process("click" + where);
          }
        }, 500);
      } else {
        process("click" + where);
      }
    }

    return this;
  };

  $(document)
    .on("onActivate.fb", function (e, instance) {
      if (instance && !instance.Guestures) {
        instance.Guestures = new Guestures(instance);
      }
    })
    .on("beforeClose.fb", function (e, instance) {
      if (instance && instance.Guestures) {
        instance.Guestures.destroy();
      }
    });
})(window, document, jQuery);
// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
        "</button>"
    },
    slideShow: {
      autoStart: false,
      speed: 3000,
      progress: true
    }
  });

  var SlideShow = function (instance) {
    this.instance = instance;
    this.init();
  };

  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,

    init: function () {
      var self = this,
        instance = self.instance,
        opts = instance.group[instance.currIndex].opts.slideShow;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        self.toggle();
      });

      if (instance.group.length < 2 || !opts) {
        self.$button.hide();
      } else if (opts.progress) {
        self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
      }
    },

    set: function (force) {
      var self = this,
        instance = self.instance,
        current = instance.current;

      // Check if reached last element
      if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
        if (self.isActive && current.contentType !== "video") {
          if (self.$progress) {
            $.fancybox.animate(self.$progress.show(), {
              scaleX: 1
            }, current.opts.slideShow.speed);
          }

          self.timer = setTimeout(function () {
            if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
              instance.jumpTo(0);
            } else {
              instance.next();
            }
          }, current.opts.slideShow.speed);
        }
      } else {
        self.stop();
        instance.idleSecondsCounter = 0;
        instance.showControls();
      }
    },

    clear: function () {
      var self = this;

      clearTimeout(self.timer);

      self.timer = null;

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    start: function () {
      var self = this,
        current = self.instance.current;

      if (current) {
        self.$button
          .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
          .removeClass("fancybox-button--play")
          .addClass("fancybox-button--pause");

        self.isActive = true;

        if (current.isComplete) {
          self.set(true);
        }

        self.instance.trigger("onSlideShowChange", true);
      }
    },

    stop: function () {
      var self = this,
        current = self.instance.current;

      self.clear();

      self.$button
        .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
        .removeClass("fancybox-button--pause")
        .addClass("fancybox-button--play");

      self.isActive = false;

      self.instance.trigger("onSlideShowChange", false);

      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },

    toggle: function () {
      var self = this;

      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },

    "beforeShow.fb": function (e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;

      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },

    "afterShow.fb": function (e, instance, current) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow;

      // "P" or Spacebar
      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
        keypress.preventDefault();

        SlideShow.toggle();
      }
    },

    "beforeClose.fb onDeactivate.fb": function (e, instance) {
      var SlideShow = instance && instance.SlideShow;

      if (SlideShow) {
        SlideShow.stop();
      }
    }
  });

  // Page Visibility API to pause slideshow when window is not active
  $(document).on("visibilitychange", function () {
    var instance = $.fancybox.getInstance(),
      SlideShow = instance && instance.SlideShow;

    if (SlideShow && SlideShow.isActive) {
      if (document.hidden) {
        SlideShow.clear();
      } else {
        SlideShow.set();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
(function (document, $) {
  "use strict";

  // Collection of methods supported by user browser
  var fn = (function () {
    var fnMap = [
      ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
      // new WebKit
      [
        "webkitRequestFullscreen",
        "webkitExitFullscreen",
        "webkitFullscreenElement",
        "webkitFullscreenEnabled",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      // old WebKit (Safari 5.1)
      [
        "webkitRequestFullScreen",
        "webkitCancelFullScreen",
        "webkitCurrentFullScreenElement",
        "webkitCancelFullScreen",
        "webkitfullscreenchange",
        "webkitfullscreenerror"
      ],
      [
        "mozRequestFullScreen",
        "mozCancelFullScreen",
        "mozFullScreenElement",
        "mozFullScreenEnabled",
        "mozfullscreenchange",
        "mozfullscreenerror"
      ],
      ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
    ];

    var ret = {};

    for (var i = 0; i < fnMap.length; i++) {
      var val = fnMap[i];

      if (val && val[1] in document) {
        for (var j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }

        return ret;
      }
    }

    return false;
  })();

  if (fn) {
    var FullScreen = {
      request: function (elem) {
        elem = elem || document.documentElement;

        elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
      },
      exit: function () {
        document[fn.exitFullscreen]();
      },
      toggle: function (elem) {
        elem = elem || document.documentElement;

        if (this.isFullscreen()) {
          this.exit();
        } else {
          this.request(elem);
        }
      },
      isFullscreen: function () {
        return Boolean(document[fn.fullscreenElement]);
      },
      enabled: function () {
        return Boolean(document[fn.fullscreenEnabled]);
      }
    };

    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
          "</button>"
      },
      fullScreen: {
        autoStart: false
      }
    });

    $(document).on(fn.fullscreenchange, function () {
      var isFullscreen = FullScreen.isFullscreen(),
        instance = $.fancybox.getInstance();

      if (instance) {
        // If image is zooming, then force to stop and reposition properly
        if (instance.current && instance.current.type === "image" && instance.isAnimating) {
          instance.isAnimating = false;

          instance.update(true, true, 0);

          if (!instance.isComplete) {
            instance.complete();
          }
        }

        instance.trigger("onFullscreenChange", isFullscreen);

        instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);

        instance.$refs.toolbar
          .find("[data-fancybox-fullscreen]")
          .toggleClass("fancybox-button--fsenter", !isFullscreen)
          .toggleClass("fancybox-button--fsexit", isFullscreen);
      }
    });
  }

  $(document).on({
    "onInit.fb": function (e, instance) {
      var $container;

      if (!fn) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();

        return;
      }

      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;

        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
          e.stopPropagation();
          e.preventDefault();

          FullScreen.toggle();
        });

        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request();
        }

        // Expose API
        instance.FullScreen = FullScreen;
      } else if (instance) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      // "F"
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();

        instance.FullScreen.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
        FullScreen.exit();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var CLASS = "fancybox-thumbs",
    CLASS_ACTIVE = CLASS + "-active";

  // Make sure there are default values
  $.fancybox.defaults = $.extend(
    true, {
      btnTpl: {
        thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
          "</button>"
      },
      thumbs: {
        autoStart: false, // Display thumbnails on opening
        hideOnClose: true, // Hide thumbnail grid when closing animation starts
        parentEl: ".fancybox-container", // Container is injected into this element
        axis: "y" // Vertical (y) or horizontal (x) scrolling
      }
    },
    $.fancybox.defaults
  );

  var FancyThumbs = function (instance) {
    this.init(instance);
  };

  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,

    init: function (instance) {
      var self = this,
        group = instance.group,
        enabled = 0;

      self.instance = instance;
      self.opts = group[instance.currIndex].opts.thumbs;

      instance.Thumbs = self;

      self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");

      // Enable thumbs if at least two group items have thumbnails
      for (var i = 0, len = group.length; i < len; i++) {
        if (group[i].thumb) {
          enabled++;
        }

        if (enabled > 1) {
          break;
        }
      }

      if (enabled > 1 && !!self.opts) {
        self.$button.removeAttr("style").on("click", function () {
          self.toggle();
        });

        self.isActive = true;
      } else {
        self.$button.hide();
      }
    },

    create: function () {
      var self = this,
        instance = self.instance,
        parentEl = self.opts.parentEl,
        list = [],
        src;

      if (!self.$grid) {
        // Create main element
        self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
          instance.$refs.container
          .find(parentEl)
          .addBack()
          .filter(parentEl)
        );

        // Add "click" event that performs gallery navigation
        self.$grid.on("click", "a", function () {
          instance.jumpTo($(this).attr("data-index"));
        });
      }

      // Build the list
      if (!self.$list) {
        self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
      }

      $.each(instance.group, function (i, item) {
        src = item.thumb;

        if (!src && item.type === "image") {
          src = item.src;
        }

        list.push(
          '<a href="javascript:;" tabindex="0" data-index="' +
          i +
          '"' +
          (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
          "></a>"
        );
      });

      self.$list[0].innerHTML = list.join("");

      if (self.opts.axis === "x") {
        // Set fixed width for list element to enable horizontal scrolling
        self.$list.width(
          parseInt(self.$grid.css("padding-right"), 10) +
          instance.group.length *
          self.$list
          .children()
          .eq(0)
          .outerWidth(true)
        );
      }
    },

    focus: function (duration) {
      var self = this,
        $list = self.$list,
        $grid = self.$grid,
        thumb,
        thumbPos;

      if (!self.instance.current) {
        return;
      }

      thumb = $list
        .children()
        .removeClass(CLASS_ACTIVE)
        .filter('[data-index="' + self.instance.current.index + '"]')
        .addClass(CLASS_ACTIVE);

      thumbPos = thumb.position();

      // Check if need to scroll to make current thumb visible
      if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
        $list.stop().animate({
            scrollTop: $list.scrollTop() + thumbPos.top
          },
          duration
        );
      } else if (
        self.opts.axis === "x" &&
        (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
      ) {
        $list
          .parent()
          .stop()
          .animate({
              scrollLeft: thumbPos.left
            },
            duration
          );
      }
    },

    update: function () {
      var that = this;
      that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);

      if (that.isVisible) {
        if (!that.$grid) {
          that.create();
        }

        that.instance.trigger("onThumbsShow");

        that.focus(0);
      } else if (that.$grid) {
        that.instance.trigger("onThumbsHide");
      }

      // Update content position
      that.instance.update();
    },

    hide: function () {
      this.isVisible = false;
      this.update();
    },

    show: function () {
      this.isVisible = true;
      this.update();
    },

    toggle: function () {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });

  $(document).on({
    "onInit.fb": function (e, instance) {
      var Thumbs;

      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);

        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },

    "beforeShow.fb": function (e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },

    "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs;

      // "G"
      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();

        Thumbs.toggle();
      }
    },

    "beforeClose.fb": function (e, instance) {
      var Thumbs = instance && instance.Thumbs;

      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
        Thumbs.$grid.hide();
      }
    }
  });
})(document, jQuery);
//// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
        "</button>"
    },
    share: {
      url: function (instance, item) {
        return (
          (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
        );
      },
      tpl: '<div class="fancybox-share">' +
        "<h1>{{SHARE}}</h1>" +
        "<p>" +
        '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
        "<span>Facebook</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
        "<span>Twitter</span>" +
        "</a>" +
        '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
        '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
        "<span>Pinterest</span>" +
        "</a>" +
        "</p>" +
        '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
        "</div>"
    }
  });

  function escapeHtml(string) {
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };

    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }

  $(document).on("click", "[data-fancybox-share]", function () {
    var instance = $.fancybox.getInstance(),
      current = instance.current || null,
      url,
      tpl;

    if (!current) {
      return;
    }

    if ($.type(current.opts.share.url) === "function") {
      url = current.opts.share.url.apply(current, [instance, current]);
    }

    tpl = current.opts.share.tpl
      .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
      .replace(/\{\{url\}\}/g, encodeURIComponent(url))
      .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
      .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");

    $.fancybox.open({
      src: instance.translate(instance, tpl),
      type: "html",
      opts: {
        touch: false,
        animationEffect: false,
        afterLoad: function (shareInstance, shareCurrent) {
          // Close self if parent instance is closing
          instance.$refs.container.one("beforeClose.fb", function () {
            shareInstance.close(null, 0);
          });

          // Opening links in a popup window
          shareCurrent.$content.find(".fancybox-share__button").click(function () {
            window.open(this.href, "Share", "width=550, height=450");
            return false;
          });
        },
        mobile: {
          autoFocus: false
        }
      }
    });
  });
})(document, jQuery);
// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  // Simple $.escapeSelector polyfill (for jQuery prior v3)
  if (!$.escapeSelector) {
    $.escapeSelector = function (sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      var fcssescape = function (ch, asCodePoint) {
        if (asCodePoint) {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0") {
            return "\uFFFD";
          }

          // Control characters and (dependent upon position) numbers get escaped as code points
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }

        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
      };

      return (sel + "").replace(rcssescape, fcssescape);
    };
  }

  // Get info about gallery name and current index from url
  function parseUrl() {
    var hash = window.location.hash.substr(1),
      rez = hash.split("-"),
      index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
      gallery = rez.join("-");

    return {
      hash: hash,
      /* Index is starting from 1 */
      index: index < 1 ? 1 : index,
      gallery: gallery
    };
  }

  // Trigger click evnt on links to open new fancyBox instance
  function triggerFromUrl(url) {
    if (url.gallery !== "") {
      // If we can find element matching 'data-fancybox' atribute,
      // then triggering click event should start fancyBox
      $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
        .eq(url.index - 1)
        .focus()
        .trigger("click.fb-start");
    }
  }

  // Get gallery name from current instance
  function getGalleryID(instance) {
    var opts, ret;

    if (!instance) {
      return false;
    }

    opts = instance.current ? instance.current.opts : instance.opts;
    ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");

    return ret === "" ? false : ret;
  }

  // Start when DOM becomes ready
  $(function () {
    // Check if user has disabled this module
    if ($.fancybox.defaults.hash === false) {
      return;
    }

    // Update hash when opening/closing fancyBox
    $(document).on({
      "onInit.fb": function (e, instance) {
        var url, gallery;

        if (instance.group[instance.currIndex].opts.hash === false) {
          return;
        }

        url = parseUrl();
        gallery = getGalleryID(instance);

        // Make sure gallery start index matches index from hash
        if (gallery && url.gallery && gallery == url.gallery) {
          instance.currIndex = url.index - 1;
        }
      },

      "beforeShow.fb": function (e, instance, current, firstRun) {
        var gallery;

        if (!current || current.opts.hash === false) {
          return;
        }

        // Check if need to update window hash
        gallery = getGalleryID(instance);

        if (!gallery) {
          return;
        }

        // Variable containing last hash value set by fancyBox
        // It will be used to determine if fancyBox needs to close after hash change is detected
        instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");

        // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
        if (window.location.hash === "#" + instance.currentHash) {
          return;
        }

        if (firstRun && !instance.origHash) {
          instance.origHash = window.location.hash;
        }

        if (instance.hashTimer) {
          clearTimeout(instance.hashTimer);
        }

        // Update hash
        instance.hashTimer = setTimeout(function () {
          if ("replaceState" in window.history) {
            window.history[firstRun ? "pushState" : "replaceState"]({},
              document.title,
              window.location.pathname + window.location.search + "#" + instance.currentHash
            );

            if (firstRun) {
              instance.hasCreatedHistory = true;
            }
          } else {
            window.location.hash = instance.currentHash;
          }

          instance.hashTimer = null;
        }, 300);
      },

      "beforeClose.fb": function (e, instance, current) {
        if (!current || current.opts.hash === false) {
          return;
        }

        clearTimeout(instance.hashTimer);

        // Goto previous history entry
        if (instance.currentHash && instance.hasCreatedHistory) {
          window.history.back();
        } else if (instance.currentHash) {
          if ("replaceState" in window.history) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
          } else {
            window.location.hash = instance.origHash;
          }
        }

        instance.currentHash = null;
      }
    });

    // Check if need to start/close after url has changed
    $(window).on("hashchange.fb", function () {
      var url = parseUrl(),
        fb = null;

      // Find last fancyBox instance that has "hash"
      $.each(
        $(".fancybox-container")
        .get()
        .reverse(),
        function (index, value) {
          var tmp = $(value).data("FancyBox");

          if (tmp && tmp.currentHash) {
            fb = tmp;
            return false;
          }
        }
      );

      if (fb) {
        // Now, compare hash values
        if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
          fb.currentHash = null;

          fb.close();
        }
      } else if (url.gallery !== "") {
        triggerFromUrl(url);
      }
    });

    // Check current hash and trigger click event on matching element to start fancyBox, if needed
    setTimeout(function () {
      if (!$.fancybox.getInstance()) {
        triggerFromUrl(parseUrl());
      }
    }, 50);
  });
})(window, document, jQuery);
// ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var prevTime = new Date().getTime();

  $(document).on({
    "onInit.fb": function (e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var current = instance.current,
          currTime = new Date().getTime();

        if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (current.$slide.hasClass("fancybox-animated")) {
          return;
        }

        e = e.originalEvent || e;

        if (currTime - prevTime < 250) {
          return;
        }

        prevTime = currTime;

        instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
      });
    }
  });
})(document, jQuery);

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/CommentPost */ "flarum/components/CommentPost");
/* harmony import */ var flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_ModalManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/ModalManager */ "flarum/components/ModalManager");
/* harmony import */ var flarum_components_ModalManager__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ModalManager__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__);
/*
 *  FancyBox Extension for Flarum
 *  Copyright (C) 2019 Eleanor Hawk
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 */





function categorizeImages(element) {
  var imageWrapperHtml = '<div class="image-wrapper"></div>';
  var badgeHtml = "\n    <div class=\"extlink-badge\">\n      <span></span>\n    </div>";

  var captionHtml = function captionHtml(caption) {
    return "\n      <div class=\"caption-wrapper\">\n        <span>" + caption + "</span>\n      </div>\n    ";
  };

  $(element).find('p, th, td').children('img:not([class]):not([data-nothing-fancy])').each(function (i, e) {
    var caption = $(e).attr('title') || '';

    if ($(e).parent().contents().length === 1) {
      $(e).addClass('block-image');
      $(e).wrap('<a class="block-image-self-link" role="button">' + imageWrapperHtml + '</a>');
    } else {
      $(e).addClass('inline-image');
      $(e).wrap('<a class="inline-image-self-link" role="button">' + imageWrapperHtml + '</a>');
    }

    $(e).parent().append(badgeHtml);
    if (caption !== '') $(e).closest('a').append(captionHtml(caption));
  });
  $(element).find('p, th, td').find("a:not(\n      .block-image-link,\n      .inline-image-link,\n      .block-image-self-link,\n      .inline-image-self-link\n    ) > img:not([class])").each(function (i, e) {
    var link = $(e).parent();

    if (typeof $(e).data('nothing-fancy') !== 'undefined' && !(link.hasClass('fancybox--iframe-link') || link.hasClass('fancybox--video-link'))) {
      return true;
    }

    var caption = $(e).attr('title') || link.attr('title') || '';

    if (link.contents().length === 1 && link.parent().contents().length === 1) {
      $(e).addClass('block-image');

      if ($(e).attr('src') !== link.attr('href')) {
        link.addClass('block-image-link');
      } else {
        link.addClass('block-image-self-link');
      }
    } else {
      $(e).addClass('inline-image');

      if ($(e).attr('src') !== link.attr('href')) {
        link.addClass('inline-image-link');
      } else {
        link.addClass('inline-image-self-link');
      }
    }

    link.append(badgeHtml);
    link.wrapInner(imageWrapperHtml);
    if (caption !== '') link.append(captionHtml(caption));
  });
}

app.initializers.add('the-turk-fancybox', function (app) {
  $.fancybox.defaults.toolbar = false;
  $.fancybox.defaults.smallBtn = true;
  $.fancybox.defaults.lang = app.translator.locale;
  $.fancybox.defaults.i18n[app.translator.locale] = {
    NEXT: app.translator.trans('the-turk-fancybox.forum.next'),
    PREV: app.translator.trans('the-turk-fancybox.forum.prev'),
    CLOSE: app.translator.trans('the-turk-fancybox.forum.close'),
    ERROR: app.translator.trans('the-turk-fancybox.forum.error')
  };
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_CommentPost__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'config', function (x, isInitialized, context) {
    var _this = this;

    categorizeImages(this.element);
    var selectors = "\n      a.block-image-self-link,\n      a.inline-image-self-link,\n      a.fancybox--iframe-link,\n      a.fancybox--video-link\n    ";
    $(this.element).find(selectors).click(function (e) {
      return e.preventDefault();
    });

    if (!this.isEditing() && !('fancybox_gallery' in this)) {
      var fancies = $(this.element).find(selectors).not("\n        a.block-image-link *,\n        a.inline-image-link *");
      var gallery = fancies.map(function (i, e) {
        var type;
        var caption = $(e).find('img').attr('title') || $(e).attr('title') || '';
        var src = $(e).attr('href') || $(e).find('img').attr('src');

        if ($(e).hasClass('fancybox--iframe-link')) {
          type = 'iframe';
        } else if (!$(e).hasClass('fancybox--video-link')) {
          type = 'image';
        }

        return {
          src: src,
          type: type,
          opts: {
            caption: caption
          }
        };
      });
      this.fancybox_gallery = gallery.length ? gallery : false;

      if (this.fancybox_gallery) {
        fancies.each(function (i, e) {
          var index = i;
          $(e).off('click.fancybox');
          $(e).on('click.fancybox', function (event) {
            $.fancybox.open(_this.fancybox_gallery, {}, index);
          });
        });
      }
    } else if (this.isEditing() && 'fancybox_gallery' in this) {
      delete this.fancybox_gallery;
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_ModalManager__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'show', function (x) {
    $.fancybox.close();
  });

  if (s9e && s9e.TextFormatter) {
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(s9e.TextFormatter, 'preview', function (x, preview, element) {
      if (element.matches('.Post *')) categorizeImages(element);
    });
  }
});

/***/ }),

/***/ "flarum/components/CommentPost":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/CommentPost']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/CommentPost'];

/***/ }),

/***/ "flarum/components/ModalManager":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/ModalManager']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ModalManager'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });


flarum.extensions['the-turk-fancybox']=module.exports

var module={}

module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=19)}([function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat["utils/Stream"]},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/Button"]},,function(e,t){e.exports=flarum.core.compat["utils/mixin"]},function(e,t){e.exports=flarum.core.compat["components/Modal"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionComposer"]},function(e,t){e.exports=flarum.core.compat["components/CommentPost"]},function(e,t){e.exports=flarum.core.compat["components/Badge"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionList"]},function(e,t){e.exports=flarum.core.compat["models/Discussion"]},function(e,t){e.exports=flarum.core.compat["components/Switch"]},function(e,t,n){
/* flatpickr v4.6.6, @license MIT */
e.exports=function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function t(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),a=0;for(t=0;t<n;t++)for(var i=arguments[t],r=0,l=i.length;r<l;r++,a++)o[a]=i[r];return o}var n=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],o={_disable:[],_enable:[],allowInput:!1,allowInvalidPreload:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",autoFillDefaultTime:!0,clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enable:[],enableSeconds:!1,enableTime:!1,errorHandler:function(e){return"undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var n=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",monthSelectorType:"dropdown",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},a={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year",monthAriaLabel:"Month",hourAriaLabel:"Hour",minuteAriaLabel:"Minute",time_24hr:!1},i=function(e,t){return void 0===t&&(t=2),("000"+e).slice(-1*t)},r=function(e){return!0===e?1:0};function l(e,t,n){var o;return void 0===n&&(n=!1),function(){var a=this,i=arguments;null!==o&&clearTimeout(o),o=window.setTimeout((function(){o=null,n||e.apply(a,i)}),t),n&&!o&&e.apply(a,i)}}var s=function(e){return e instanceof Array?e:[e]};function c(e,t,n){if(!0===n)return e.classList.add(t);e.classList.remove(t)}function u(e,t,n){var o=window.document.createElement(e);return t=t||"",n=n||"",o.className=t,void 0!==n&&(o.textContent=n),o}function d(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function p(e,t){var n=u("div","numInputWrapper"),o=u("input","numInput "+e),a=u("span","arrowUp"),i=u("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?o.type="number":(o.type="text",o.pattern="\\d*"),void 0!==t)for(var r in t)o.setAttribute(r,t[r]);return n.appendChild(o),n.appendChild(a),n.appendChild(i),n}function f(e){try{return"function"==typeof e.composedPath?e.composedPath()[0]:e.target}catch(t){return e.target}}var m=function(){},h=function(e,t,n){return n.months[t?"shorthand":"longhand"][e]},g={D:m,F:function(e,t,n){e.setMonth(n.months.longhand.indexOf(t))},G:function(e,t){e.setHours(parseFloat(t))},H:function(e,t){e.setHours(parseFloat(t))},J:function(e,t){e.setDate(parseFloat(t))},K:function(e,t,n){e.setHours(e.getHours()%12+12*r(new RegExp(n.amPM[1],"i").test(t)))},M:function(e,t,n){e.setMonth(n.months.shorthand.indexOf(t))},S:function(e,t){e.setSeconds(parseFloat(t))},U:function(e,t){return new Date(1e3*parseFloat(t))},W:function(e,t,n){var o=parseInt(t),a=new Date(e.getFullYear(),0,2+7*(o-1),0,0,0,0);return a.setDate(a.getDate()-a.getDay()+n.firstDayOfWeek),a},Y:function(e,t){e.setFullYear(parseFloat(t))},Z:function(e,t){return new Date(t)},d:function(e,t){e.setDate(parseFloat(t))},h:function(e,t){e.setHours(parseFloat(t))},i:function(e,t){e.setMinutes(parseFloat(t))},j:function(e,t){e.setDate(parseFloat(t))},l:m,m:function(e,t){e.setMonth(parseFloat(t)-1)},n:function(e,t){e.setMonth(parseFloat(t)-1)},s:function(e,t){e.setSeconds(parseFloat(t))},u:function(e,t){return new Date(parseFloat(t))},w:m,y:function(e,t){e.setFullYear(2e3+parseFloat(t))}},v={D:"(\\w+)",F:"(\\w+)",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"(\\w+)",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"(\\w+)",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},b={Z:function(e){return e.toISOString()},D:function(e,t,n){return t.weekdays.shorthand[b.w(e,t,n)]},F:function(e,t,n){return h(b.n(e,t,n)-1,!1,t)},G:function(e,t,n){return i(b.h(e,t,n))},H:function(e){return i(e.getHours())},J:function(e,t){return void 0!==t.ordinal?e.getDate()+t.ordinal(e.getDate()):e.getDate()},K:function(e,t){return t.amPM[r(e.getHours()>11)]},M:function(e,t){return h(e.getMonth(),!0,t)},S:function(e){return i(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,t,n){return n.getWeek(e)},Y:function(e){return i(e.getFullYear(),4)},d:function(e){return i(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return i(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,t){return t.weekdays.longhand[e.getDay()]},m:function(e){return i(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},D=function(e){var t=e.config,n=void 0===t?o:t,i=e.l10n,r=void 0===i?a:i,l=e.isMobile,s=void 0!==l&&l;return function(e,t,o){var a=o||r;return void 0===n.formatDate||s?t.split("").map((function(t,o,i){return b[t]&&"\\"!==i[o-1]?b[t](e,a,n):"\\"!==t?t:""})).join(""):n.formatDate(e,t,a)}},y=function(e){var t=e.config,n=void 0===t?o:t,i=e.l10n,r=void 0===i?a:i;return function(e,t,a,i){if(0===e||e){var l,s=i||r,c=e;if(e instanceof Date)l=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)l=new Date(e);else if("string"==typeof e){var u=t||(n||o).dateFormat,d=String(e).trim();if("today"===d)l=new Date,a=!0;else if(/Z$/.test(d)||/GMT$/.test(d))l=new Date(e);else if(n&&n.parseDate)l=n.parseDate(e,u);else{l=n&&n.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0);for(var p=void 0,f=[],m=0,h=0,b="";m<u.length;m++){var D=u[m],y="\\"===D,w="\\"===u[m-1]||y;if(v[D]&&!w){b+=v[D];var M=new RegExp(b).exec(e);M&&(p=!0)&&f["Y"!==D?"push":"unshift"]({fn:g[D],val:M[++h]})}else y||(b+=".");f.forEach((function(e){var t=e.fn,n=e.val;return l=t(l,n,s)||l}))}l=p?l:void 0}}if(l instanceof Date&&!isNaN(l.getTime()))return!0===a&&l.setHours(0,0,0,0),l;n.errorHandler(new Error("Invalid date provided: "+c))}}};function w(e,t,n){return void 0===n&&(n=!0),!1!==n?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime()}var M=864e5;function C(m,g){var b={config:e(e({},o),E.defaultConfig),l10n:a};function C(e){return e.bind(b)}function x(){var e=b.config;!1===e.weekNumbers&&1===e.showMonths||!0!==e.noCalendar&&window.requestAnimationFrame((function(){if(void 0!==b.calendarContainer&&(b.calendarContainer.style.visibility="hidden",b.calendarContainer.style.display="block"),void 0!==b.daysContainer){var t=(b.days.offsetWidth+1)*e.showMonths;b.daysContainer.style.width=t+"px",b.calendarContainer.style.width=t+(void 0!==b.weekWrapper?b.weekWrapper.offsetWidth:0)+"px",b.calendarContainer.style.removeProperty("visibility"),b.calendarContainer.style.removeProperty("display")}}))}function P(e){if(0===b.selectedDates.length){var t=void 0!==b.config.minDate?new Date(b.config.minDate.getTime()):new Date,n=O(),o=n.hours,a=n.minutes,l=n.seconds;t.setHours(o,a,l,0),b.setDate(t,!1)}void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var t="keydown"===e.type,n=f(e),o=n;void 0!==b.amPM&&n===b.amPM&&(b.amPM.textContent=b.l10n.amPM[r(b.amPM.textContent===b.l10n.amPM[0])]);var a=parseFloat(o.getAttribute("min")),l=parseFloat(o.getAttribute("max")),s=parseFloat(o.getAttribute("step")),c=parseInt(o.value,10),u=e.delta||(t?38===e.which?1:-1:0),d=c+s*u;if(void 0!==o.value&&2===o.value.length){var p=o===b.hourElement,m=o===b.minuteElement;d<a?(d=l+d+r(!p)+(r(p)&&r(!b.amPM)),m&&j(void 0,-1,b.hourElement)):d>l&&(d=o===b.hourElement?d-l-r(!b.amPM):a,m&&j(void 0,1,b.hourElement)),b.amPM&&p&&(1===s?d+c===23:Math.abs(d-c)>s)&&(b.amPM.textContent=b.l10n.amPM[r(b.amPM.textContent===b.l10n.amPM[0])]),o.value=i(d)}}(e);var s=b._input.value;k(),De(),b._input.value!==s&&b._debouncedChange()}function k(){if(void 0!==b.hourElement&&void 0!==b.minuteElement){var e,t,n=(parseInt(b.hourElement.value.slice(-2),10)||0)%24,o=(parseInt(b.minuteElement.value,10)||0)%60,a=void 0!==b.secondElement?(parseInt(b.secondElement.value,10)||0)%60:0;void 0!==b.amPM&&(e=n,t=b.amPM.textContent,n=e%12+12*r(t===b.l10n.amPM[1]));var i=void 0!==b.config.minTime||b.config.minDate&&b.minDateHasTime&&b.latestSelectedDateObj&&0===w(b.latestSelectedDateObj,b.config.minDate,!0);if(void 0!==b.config.maxTime||b.config.maxDate&&b.maxDateHasTime&&b.latestSelectedDateObj&&0===w(b.latestSelectedDateObj,b.config.maxDate,!0)){var l=void 0!==b.config.maxTime?b.config.maxTime:b.config.maxDate;(n=Math.min(n,l.getHours()))===l.getHours()&&(o=Math.min(o,l.getMinutes())),o===l.getMinutes()&&(a=Math.min(a,l.getSeconds()))}if(i){var s=void 0!==b.config.minTime?b.config.minTime:b.config.minDate;(n=Math.max(n,s.getHours()))===s.getHours()&&(o=Math.max(o,s.getMinutes())),o===s.getMinutes()&&(a=Math.max(a,s.getSeconds()))}_(n,o,a)}}function T(e){var t=e||b.latestSelectedDateObj;t&&_(t.getHours(),t.getMinutes(),t.getSeconds())}function O(){var e=b.config.defaultHour,t=b.config.defaultMinute,n=b.config.defaultSeconds;if(void 0!==b.config.minDate){var o=b.config.minDate.getHours(),a=b.config.minDate.getMinutes();(e=Math.max(e,o))===o&&(t=Math.max(a,t)),e===o&&t===a&&(n=b.config.minDate.getSeconds())}if(void 0!==b.config.maxDate){var i=b.config.maxDate.getHours(),r=b.config.maxDate.getMinutes();(e=Math.min(e,i))===i&&(t=Math.min(r,t)),e===i&&t===r&&(n=b.config.maxDate.getSeconds())}return{hours:e,minutes:t,seconds:n}}function _(e,t,n){void 0!==b.latestSelectedDateObj&&b.latestSelectedDateObj.setHours(e%24,t,n||0,0),b.hourElement&&b.minuteElement&&!b.isMobile&&(b.hourElement.value=i(b.config.time_24hr?e:(12+e)%12+12*r(e%12==0)),b.minuteElement.value=i(t),void 0!==b.amPM&&(b.amPM.textContent=b.l10n.amPM[r(e>=12)]),void 0!==b.secondElement&&(b.secondElement.value=i(n)))}function N(e){var t=f(e),n=parseInt(t.value)+(e.delta||0);(n/1e3>1||"Enter"===e.key&&!/[^\d]/.test(n.toString()))&&Z(n)}function I(e,t,n,o){return t instanceof Array?t.forEach((function(t){return I(e,t,n,o)})):e instanceof Array?e.forEach((function(e){return I(e,t,n,o)})):(e.addEventListener(t,n,o),void b._handlers.push({element:e,event:t,handler:n,options:o}))}function S(){me("onChange")}function F(e,t){var n=void 0!==e?b.parseDate(e):b.latestSelectedDateObj||(b.config.minDate&&b.config.minDate>b.now?b.config.minDate:b.config.maxDate&&b.config.maxDate<b.now?b.config.maxDate:b.now),o=b.currentYear,a=b.currentMonth;try{void 0!==n&&(b.currentYear=n.getFullYear(),b.currentMonth=n.getMonth())}catch(e){e.message="Invalid date supplied: "+n,b.config.errorHandler(e)}t&&b.currentYear!==o&&(me("onYearChange"),W()),!t||b.currentYear===o&&b.currentMonth===a||me("onMonthChange"),b.redraw()}function A(e){var t=f(e);~t.className.indexOf("arrow")&&j(e,t.classList.contains("arrowUp")?1:-1)}function j(e,t,n){var o=e&&f(e),a=n||o&&o.parentNode&&o.parentNode.firstChild,i=he("increment");i.delta=t,a&&a.dispatchEvent(i)}function Y(e,t,n,o){var a=Q(t,!0),i=u("span","flatpickr-day "+e,t.getDate().toString());return i.dateObj=t,i.$i=o,i.setAttribute("aria-label",b.formatDate(t,b.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===w(t,b.now)&&(b.todayDateElem=i,i.classList.add("today"),i.setAttribute("aria-current","date")),a?(i.tabIndex=-1,ge(t)&&(i.classList.add("selected"),b.selectedDateElem=i,"range"===b.config.mode&&(c(i,"startRange",b.selectedDates[0]&&0===w(t,b.selectedDates[0],!0)),c(i,"endRange",b.selectedDates[1]&&0===w(t,b.selectedDates[1],!0)),"nextMonthDay"===e&&i.classList.add("inRange")))):i.classList.add("flatpickr-disabled"),"range"===b.config.mode&&function(e){return!("range"!==b.config.mode||b.selectedDates.length<2)&&w(e,b.selectedDates[0])>=0&&w(e,b.selectedDates[1])<=0}(t)&&!ge(t)&&i.classList.add("inRange"),b.weekNumbers&&1===b.config.showMonths&&"prevMonthDay"!==e&&n%7==1&&b.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+b.config.getWeek(t)+"</span>"),me("onDayCreate",i),i}function H(e){e.focus(),"range"===b.config.mode&&ne(e)}function L(e){for(var t=e>0?0:b.config.showMonths-1,n=e>0?b.config.showMonths:-1,o=t;o!=n;o+=e)for(var a=b.daysContainer.children[o],i=e>0?0:a.children.length-1,r=e>0?a.children.length:-1,l=i;l!=r;l+=e){var s=a.children[l];if(-1===s.className.indexOf("hidden")&&Q(s.dateObj))return s}}function B(e,t){var n=X(document.activeElement||document.body),o=void 0!==e?e:n?document.activeElement:void 0!==b.selectedDateElem&&X(b.selectedDateElem)?b.selectedDateElem:void 0!==b.todayDateElem&&X(b.todayDateElem)?b.todayDateElem:L(t>0?1:-1);void 0===o?b._input.focus():n?function(e,t){for(var n=-1===e.className.indexOf("Month")?e.dateObj.getMonth():b.currentMonth,o=t>0?b.config.showMonths:-1,a=t>0?1:-1,i=n-b.currentMonth;i!=o;i+=a)for(var r=b.daysContainer.children[i],l=n-b.currentMonth===i?e.$i+t:t<0?r.children.length-1:0,s=r.children.length,c=l;c>=0&&c<s&&c!=(t>0?s:-1);c+=a){var u=r.children[c];if(-1===u.className.indexOf("hidden")&&Q(u.dateObj)&&Math.abs(e.$i-c)>=Math.abs(t))return H(u)}b.changeMonth(a),B(L(a),0)}(o,t):H(o)}function q(e,t){for(var n=(new Date(e,t,1).getDay()-b.l10n.firstDayOfWeek+7)%7,o=b.utils.getDaysInMonth((t-1+12)%12,e),a=b.utils.getDaysInMonth(t,e),i=window.document.createDocumentFragment(),r=b.config.showMonths>1,l=r?"prevMonthDay hidden":"prevMonthDay",s=r?"nextMonthDay hidden":"nextMonthDay",c=o+1-n,d=0;c<=o;c++,d++)i.appendChild(Y(l,new Date(e,t-1,c),c,d));for(c=1;c<=a;c++,d++)i.appendChild(Y("",new Date(e,t,c),c,d));for(var p=a+1;p<=42-n&&(1===b.config.showMonths||d%7!=0);p++,d++)i.appendChild(Y(s,new Date(e,t+1,p%a),p,d));var f=u("div","dayContainer");return f.appendChild(i),f}function R(){if(void 0!==b.daysContainer){d(b.daysContainer),b.weekNumbers&&d(b.weekNumbers);for(var e=document.createDocumentFragment(),t=0;t<b.config.showMonths;t++){var n=new Date(b.currentYear,b.currentMonth,1);n.setMonth(b.currentMonth+t),e.appendChild(q(n.getFullYear(),n.getMonth()))}b.daysContainer.appendChild(e),b.days=b.daysContainer.firstChild,"range"===b.config.mode&&1===b.selectedDates.length&&ne()}}function W(){if(!(b.config.showMonths>1||"dropdown"!==b.config.monthSelectorType)){var e=function(e){return!(void 0!==b.config.minDate&&b.currentYear===b.config.minDate.getFullYear()&&e<b.config.minDate.getMonth()||void 0!==b.config.maxDate&&b.currentYear===b.config.maxDate.getFullYear()&&e>b.config.maxDate.getMonth())};b.monthsDropdownContainer.tabIndex=-1,b.monthsDropdownContainer.innerHTML="";for(var t=0;t<12;t++)if(e(t)){var n=u("option","flatpickr-monthDropdown-month");n.value=new Date(b.currentYear,t).getMonth().toString(),n.textContent=h(t,b.config.shorthandCurrentMonth,b.l10n),n.tabIndex=-1,b.currentMonth===t&&(n.selected=!0),b.monthsDropdownContainer.appendChild(n)}}}function V(){var e,t=u("div","flatpickr-month"),n=window.document.createDocumentFragment();b.config.showMonths>1||"static"===b.config.monthSelectorType?e=u("span","cur-month"):(b.monthsDropdownContainer=u("select","flatpickr-monthDropdown-months"),b.monthsDropdownContainer.setAttribute("aria-label",b.l10n.monthAriaLabel),I(b.monthsDropdownContainer,"change",(function(e){var t=f(e),n=parseInt(t.value,10);b.changeMonth(n-b.currentMonth),me("onMonthChange")})),W(),e=b.monthsDropdownContainer);var o=p("cur-year",{tabindex:"-1"}),a=o.getElementsByTagName("input")[0];a.setAttribute("aria-label",b.l10n.yearAriaLabel),b.config.minDate&&a.setAttribute("min",b.config.minDate.getFullYear().toString()),b.config.maxDate&&(a.setAttribute("max",b.config.maxDate.getFullYear().toString()),a.disabled=!!b.config.minDate&&b.config.minDate.getFullYear()===b.config.maxDate.getFullYear());var i=u("div","flatpickr-current-month");return i.appendChild(e),i.appendChild(o),n.appendChild(i),t.appendChild(n),{container:t,yearElement:a,monthElement:e}}function J(){d(b.monthNav),b.monthNav.appendChild(b.prevMonthNav),b.config.showMonths&&(b.yearElements=[],b.monthElements=[]);for(var e=b.config.showMonths;e--;){var t=V();b.yearElements.push(t.yearElement),b.monthElements.push(t.monthElement),b.monthNav.appendChild(t.container)}b.monthNav.appendChild(b.nextMonthNav)}function K(){b.weekdayContainer?d(b.weekdayContainer):b.weekdayContainer=u("div","flatpickr-weekdays");for(var e=b.config.showMonths;e--;){var t=u("div","flatpickr-weekdaycontainer");b.weekdayContainer.appendChild(t)}return U(),b.weekdayContainer}function U(){if(b.weekdayContainer){var e=b.l10n.firstDayOfWeek,n=t(b.l10n.weekdays.shorthand);e>0&&e<n.length&&(n=t(n.splice(e,n.length),n.splice(0,e)));for(var o=b.config.showMonths;o--;)b.weekdayContainer.children[o].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+n.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      "}}function $(e,t){void 0===t&&(t=!0);var n=t?e:e-b.currentMonth;n<0&&!0===b._hidePrevMonthArrow||n>0&&!0===b._hideNextMonthArrow||(b.currentMonth+=n,(b.currentMonth<0||b.currentMonth>11)&&(b.currentYear+=b.currentMonth>11?1:-1,b.currentMonth=(b.currentMonth+12)%12,me("onYearChange"),W()),R(),me("onMonthChange"),ve())}function z(e){return!(!b.config.appendTo||!b.config.appendTo.contains(e))||b.calendarContainer.contains(e)}function G(e){if(b.isOpen&&!b.config.inline){var t=f(e),n=z(t),o=t===b.input||t===b.altInput||b.element.contains(t)||e.path&&e.path.indexOf&&(~e.path.indexOf(b.input)||~e.path.indexOf(b.altInput)),a="blur"===e.type?o&&e.relatedTarget&&!z(e.relatedTarget):!o&&!n&&!z(e.relatedTarget),i=!b.config.ignoredFocusElements.some((function(e){return e.contains(t)}));a&&i&&(void 0!==b.timeContainer&&void 0!==b.minuteElement&&void 0!==b.hourElement&&""!==b.input.value&&void 0!==b.input.value&&P(),b.close(),b.config&&"range"===b.config.mode&&1===b.selectedDates.length&&(b.clear(!1),b.redraw()))}}function Z(e){if(!(!e||b.config.minDate&&e<b.config.minDate.getFullYear()||b.config.maxDate&&e>b.config.maxDate.getFullYear())){var t=e,n=b.currentYear!==t;b.currentYear=t||b.currentYear,b.config.maxDate&&b.currentYear===b.config.maxDate.getFullYear()?b.currentMonth=Math.min(b.config.maxDate.getMonth(),b.currentMonth):b.config.minDate&&b.currentYear===b.config.minDate.getFullYear()&&(b.currentMonth=Math.max(b.config.minDate.getMonth(),b.currentMonth)),n&&(b.redraw(),me("onYearChange"),W())}}function Q(e,t){void 0===t&&(t=!0);var n=b.parseDate(e,void 0,t);if(b.config.minDate&&n&&w(n,b.config.minDate,void 0!==t?t:!b.minDateHasTime)<0||b.config.maxDate&&n&&w(n,b.config.maxDate,void 0!==t?t:!b.maxDateHasTime)>0)return!1;if(0===b.config.enable.length&&0===b.config.disable.length)return!0;if(void 0===n)return!1;for(var o=b.config.enable.length>0,a=o?b.config.enable:b.config.disable,i=0,r=void 0;i<a.length;i++){if("function"==typeof(r=a[i])&&r(n))return o;if(r instanceof Date&&void 0!==n&&r.getTime()===n.getTime())return o;if("string"==typeof r&&void 0!==n){var l=b.parseDate(r,void 0,!0);return l&&l.getTime()===n.getTime()?o:!o}if("object"==typeof r&&void 0!==n&&r.from&&r.to&&n.getTime()>=r.from.getTime()&&n.getTime()<=r.to.getTime())return o}return!o}function X(e){return void 0!==b.daysContainer&&-1===e.className.indexOf("hidden")&&-1===e.className.indexOf("flatpickr-disabled")&&b.daysContainer.contains(e)}function ee(e){e.target!==b._input||e.relatedTarget&&z(e.relatedTarget)||b.setDate(b._input.value,!0,e.target===b.altInput?b.config.altFormat:b.config.dateFormat)}function te(e){var t=f(e),n=b.config.wrap?m.contains(t):t===b._input,o=b.config.allowInput,a=b.isOpen&&(!o||!n),i=b.config.inline&&n&&!o;if(13===e.keyCode&&n){if(o)return b.setDate(b._input.value,!0,t===b.altInput?b.config.altFormat:b.config.dateFormat),t.blur();b.open()}else if(z(t)||a||i){var r=!!b.timeContainer&&b.timeContainer.contains(t);switch(e.keyCode){case 13:r?(e.preventDefault(),P(),ce()):ue(e);break;case 27:e.preventDefault(),ce();break;case 8:case 46:n&&!b.config.allowInput&&(e.preventDefault(),b.clear());break;case 37:case 39:if(r||n)b.hourElement&&b.hourElement.focus();else if(e.preventDefault(),void 0!==b.daysContainer&&(!1===o||document.activeElement&&X(document.activeElement))){var l=39===e.keyCode?1:-1;e.ctrlKey?(e.stopPropagation(),$(l),B(L(1),0)):B(void 0,l)}break;case 38:case 40:e.preventDefault();var s=40===e.keyCode?1:-1;b.daysContainer&&void 0!==t.$i||t===b.input||t===b.altInput?e.ctrlKey?(e.stopPropagation(),Z(b.currentYear-s),B(L(1),0)):r||B(void 0,7*s):t===b.currentYearElement?Z(b.currentYear-s):b.config.enableTime&&(!r&&b.hourElement&&b.hourElement.focus(),P(e),b._debouncedChange());break;case 9:if(r){var c=[b.hourElement,b.minuteElement,b.secondElement,b.amPM].concat(b.pluginElements).filter((function(e){return e})),u=c.indexOf(t);if(-1!==u){var d=c[u+(e.shiftKey?-1:1)];e.preventDefault(),(d||b._input).focus()}}else!b.config.noCalendar&&b.daysContainer&&b.daysContainer.contains(t)&&e.shiftKey&&(e.preventDefault(),b._input.focus())}}if(void 0!==b.amPM&&t===b.amPM)switch(e.key){case b.l10n.amPM[0].charAt(0):case b.l10n.amPM[0].charAt(0).toLowerCase():b.amPM.textContent=b.l10n.amPM[0],k(),De();break;case b.l10n.amPM[1].charAt(0):case b.l10n.amPM[1].charAt(0).toLowerCase():b.amPM.textContent=b.l10n.amPM[1],k(),De()}(n||z(t))&&me("onKeyDown",e)}function ne(e){if(1===b.selectedDates.length&&(!e||e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled"))){for(var t=e?e.dateObj.getTime():b.days.firstElementChild.dateObj.getTime(),n=b.parseDate(b.selectedDates[0],void 0,!0).getTime(),o=Math.min(t,b.selectedDates[0].getTime()),a=Math.max(t,b.selectedDates[0].getTime()),i=!1,r=0,l=0,s=o;s<a;s+=M)Q(new Date(s),!0)||(i=i||s>o&&s<a,s<n&&(!r||s>r)?r=s:s>n&&(!l||s<l)&&(l=s));for(var c=0;c<b.config.showMonths;c++)for(var u=b.daysContainer.children[c],d=function(o,a){var s,c,d,p=u.children[o],f=p.dateObj.getTime(),m=r>0&&f<r||l>0&&f>l;return m?(p.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach((function(e){p.classList.remove(e)})),"continue"):i&&!m?"continue":(["startRange","inRange","endRange","notAllowed"].forEach((function(e){p.classList.remove(e)})),void(void 0!==e&&(e.classList.add(t<=b.selectedDates[0].getTime()?"startRange":"endRange"),n<t&&f===n?p.classList.add("startRange"):n>t&&f===n&&p.classList.add("endRange"),f>=r&&(0===l||f<=l)&&(c=n,d=t,(s=f)>Math.min(c,d)&&s<Math.max(c,d))&&p.classList.add("inRange"))))},p=0,f=u.children.length;p<f;p++)d(p)}}function oe(){!b.isOpen||b.config.static||b.config.inline||le()}function ae(e){return function(t){var n=b.config["_"+e+"Date"]=b.parseDate(t,b.config.dateFormat),o=b.config["_"+("min"===e?"max":"min")+"Date"];void 0!==n&&(b["min"===e?"minDateHasTime":"maxDateHasTime"]=n.getHours()>0||n.getMinutes()>0||n.getSeconds()>0),b.selectedDates&&(b.selectedDates=b.selectedDates.filter((function(e){return Q(e)})),b.selectedDates.length||"min"!==e||T(n),De()),b.daysContainer&&(se(),void 0!==n?b.currentYearElement[e]=n.getFullYear().toString():b.currentYearElement.removeAttribute(e),b.currentYearElement.disabled=!!o&&void 0!==n&&o.getFullYear()===n.getFullYear())}}function ie(){return b.config.wrap?m.querySelector("[data-input]"):m}function re(){"object"!=typeof b.config.locale&&void 0===E.l10ns[b.config.locale]&&b.config.errorHandler(new Error("flatpickr: invalid locale "+b.config.locale)),b.l10n=e(e({},E.l10ns.default),"object"==typeof b.config.locale?b.config.locale:"default"!==b.config.locale?E.l10ns[b.config.locale]:void 0),v.K="("+b.l10n.amPM[0]+"|"+b.l10n.amPM[1]+"|"+b.l10n.amPM[0].toLowerCase()+"|"+b.l10n.amPM[1].toLowerCase()+")",void 0===e(e({},g),JSON.parse(JSON.stringify(m.dataset||{}))).time_24hr&&void 0===E.defaultConfig.time_24hr&&(b.config.time_24hr=b.l10n.time_24hr),b.formatDate=D(b),b.parseDate=y({config:b.config,l10n:b.l10n})}function le(e){if(void 0!==b.calendarContainer){me("onPreCalendarPosition");var t=e||b._positionElement,n=Array.prototype.reduce.call(b.calendarContainer.children,(function(e,t){return e+t.offsetHeight}),0),o=b.calendarContainer.offsetWidth,a=b.config.position.split(" "),i=a[0],r=a.length>1?a[1]:null,l=t.getBoundingClientRect(),s=window.innerHeight-l.bottom,u="above"===i||"below"!==i&&s<n&&l.top>n,d=window.pageYOffset+l.top+(u?-n-2:t.offsetHeight+2);if(c(b.calendarContainer,"arrowTop",!u),c(b.calendarContainer,"arrowBottom",u),!b.config.inline){var p=window.pageXOffset+l.left,f=!1,m=!1;"center"===r?(p-=(o-l.width)/2,f=!0):"right"===r&&(p-=o-l.width,m=!0),c(b.calendarContainer,"arrowLeft",!f&&!m),c(b.calendarContainer,"arrowCenter",f),c(b.calendarContainer,"arrowRight",m);var h=window.document.body.offsetWidth-(window.pageXOffset+l.right),g=p+o>window.document.body.offsetWidth,v=h+o>window.document.body.offsetWidth;if(c(b.calendarContainer,"rightMost",g),!b.config.static)if(b.calendarContainer.style.top=d+"px",g)if(v){var D=function(){for(var e=null,t=0;t<document.styleSheets.length;t++){var n=document.styleSheets[t];try{n.cssRules}catch(e){continue}e=n;break}return null!=e?e:(o=document.createElement("style"),document.head.appendChild(o),o.sheet);var o}();if(void 0===D)return;var y=window.document.body.offsetWidth,w=Math.max(0,y/2-o/2),M=D.cssRules.length,C="{left:"+l.left+"px;right:auto;}";c(b.calendarContainer,"rightMost",!1),c(b.calendarContainer,"centerMost",!0),D.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+C,M),b.calendarContainer.style.left=w+"px",b.calendarContainer.style.right="auto"}else b.calendarContainer.style.left="auto",b.calendarContainer.style.right=h+"px";else b.calendarContainer.style.left=p+"px",b.calendarContainer.style.right="auto"}}}function se(){b.config.noCalendar||b.isMobile||(W(),ve(),R())}function ce(){b._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(b.close,0):b.close()}function ue(e){e.preventDefault(),e.stopPropagation();var t=function e(t,n){return n(t)?t:t.parentNode?e(t.parentNode,n):void 0}(f(e),(function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("flatpickr-disabled")&&!e.classList.contains("notAllowed")}));if(void 0!==t){var n=t,o=b.latestSelectedDateObj=new Date(n.dateObj.getTime()),a=(o.getMonth()<b.currentMonth||o.getMonth()>b.currentMonth+b.config.showMonths-1)&&"range"!==b.config.mode;if(b.selectedDateElem=n,"single"===b.config.mode)b.selectedDates=[o];else if("multiple"===b.config.mode){var i=ge(o);i?b.selectedDates.splice(parseInt(i),1):b.selectedDates.push(o)}else"range"===b.config.mode&&(2===b.selectedDates.length&&b.clear(!1,!1),b.latestSelectedDateObj=o,b.selectedDates.push(o),0!==w(o,b.selectedDates[0],!0)&&b.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()})));if(k(),a){var r=b.currentYear!==o.getFullYear();b.currentYear=o.getFullYear(),b.currentMonth=o.getMonth(),r&&(me("onYearChange"),W()),me("onMonthChange")}if(ve(),R(),De(),a||"range"===b.config.mode||1!==b.config.showMonths?void 0!==b.selectedDateElem&&void 0===b.hourElement&&b.selectedDateElem&&b.selectedDateElem.focus():H(n),void 0!==b.hourElement&&void 0!==b.hourElement&&b.hourElement.focus(),b.config.closeOnSelect){var l="single"===b.config.mode&&!b.config.enableTime,s="range"===b.config.mode&&2===b.selectedDates.length&&!b.config.enableTime;(l||s)&&ce()}S()}}b.parseDate=y({config:b.config,l10n:b.l10n}),b._handlers=[],b.pluginElements=[],b.loadedPlugins=[],b._bind=I,b._setHoursFromDate=T,b._positionCalendar=le,b.changeMonth=$,b.changeYear=Z,b.clear=function(e,t){if(void 0===e&&(e=!0),void 0===t&&(t=!0),b.input.value="",void 0!==b.altInput&&(b.altInput.value=""),void 0!==b.mobileInput&&(b.mobileInput.value=""),b.selectedDates=[],b.latestSelectedDateObj=void 0,!0===t&&(b.currentYear=b._initialDate.getFullYear(),b.currentMonth=b._initialDate.getMonth()),!0===b.config.enableTime){var n=O(),o=n.hours,a=n.minutes,i=n.seconds;_(o,a,i)}b.redraw(),e&&me("onChange")},b.close=function(){b.isOpen=!1,b.isMobile||(void 0!==b.calendarContainer&&b.calendarContainer.classList.remove("open"),void 0!==b._input&&b._input.classList.remove("active")),me("onClose")},b._createElement=u,b.destroy=function(){void 0!==b.config&&me("onDestroy");for(var e=b._handlers.length;e--;){var t=b._handlers[e];t.element.removeEventListener(t.event,t.handler,t.options)}if(b._handlers=[],b.mobileInput)b.mobileInput.parentNode&&b.mobileInput.parentNode.removeChild(b.mobileInput),b.mobileInput=void 0;else if(b.calendarContainer&&b.calendarContainer.parentNode)if(b.config.static&&b.calendarContainer.parentNode){var n=b.calendarContainer.parentNode;if(n.lastChild&&n.removeChild(n.lastChild),n.parentNode){for(;n.firstChild;)n.parentNode.insertBefore(n.firstChild,n);n.parentNode.removeChild(n)}}else b.calendarContainer.parentNode.removeChild(b.calendarContainer);b.altInput&&(b.input.type="text",b.altInput.parentNode&&b.altInput.parentNode.removeChild(b.altInput),delete b.altInput),b.input&&(b.input.type=b.input._type,b.input.classList.remove("flatpickr-input"),b.input.removeAttribute("readonly")),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","monthsDropdownContainer","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach((function(e){try{delete b[e]}catch(e){}}))},b.isEnabled=Q,b.jumpToDate=F,b.open=function(e,t){if(void 0===t&&(t=b._positionElement),!0===b.isMobile){if(e){e.preventDefault();var n=f(e);n&&n.blur()}return void 0!==b.mobileInput&&(b.mobileInput.focus(),b.mobileInput.click()),void me("onOpen")}if(!b._input.disabled&&!b.config.inline){var o=b.isOpen;b.isOpen=!0,o||(b.calendarContainer.classList.add("open"),b._input.classList.add("active"),me("onOpen"),le(t)),!0===b.config.enableTime&&!0===b.config.noCalendar&&(!1!==b.config.allowInput||void 0!==e&&b.timeContainer.contains(e.relatedTarget)||setTimeout((function(){return b.hourElement.select()}),50))}},b.redraw=se,b.set=function(e,t){if(null!==e&&"object"==typeof e)for(var o in Object.assign(b.config,e),e)void 0!==de[o]&&de[o].forEach((function(e){return e()}));else b.config[e]=t,void 0!==de[e]?de[e].forEach((function(e){return e()})):n.indexOf(e)>-1&&(b.config[e]=s(t));b.redraw(),De(!0)},b.setDate=function(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=b.config.dateFormat),0!==e&&!e||e instanceof Array&&0===e.length)return b.clear(t);pe(e,n),b.latestSelectedDateObj=b.selectedDates[b.selectedDates.length-1],b.redraw(),F(void 0,t),T(),0===b.selectedDates.length&&b.clear(!1),De(t),t&&me("onChange")},b.toggle=function(e){if(!0===b.isOpen)return b.close();b.open(e)};var de={locale:[re,U],showMonths:[J,x,K],minDate:[F],maxDate:[F]};function pe(e,t){var n=[];if(e instanceof Array)n=e.map((function(e){return b.parseDate(e,t)}));else if(e instanceof Date||"number"==typeof e)n=[b.parseDate(e,t)];else if("string"==typeof e)switch(b.config.mode){case"single":case"time":n=[b.parseDate(e,t)];break;case"multiple":n=e.split(b.config.conjunction).map((function(e){return b.parseDate(e,t)}));break;case"range":n=e.split(b.l10n.rangeSeparator).map((function(e){return b.parseDate(e,t)}))}else b.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(e)));b.selectedDates=b.config.allowInvalidPreload?n:n.filter((function(e){return e instanceof Date&&Q(e,!1)})),"range"===b.config.mode&&b.selectedDates.sort((function(e,t){return e.getTime()-t.getTime()}))}function fe(e){return e.slice().map((function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?b.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:b.parseDate(e.from,void 0),to:b.parseDate(e.to,void 0)}:e})).filter((function(e){return e}))}function me(e,t){if(void 0!==b.config){var n=b.config[e];if(void 0!==n&&n.length>0)for(var o=0;n[o]&&o<n.length;o++)n[o](b.selectedDates,b.input.value,b,t);"onChange"===e&&(b.input.dispatchEvent(he("change")),b.input.dispatchEvent(he("input")))}}function he(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function ge(e){for(var t=0;t<b.selectedDates.length;t++)if(0===w(b.selectedDates[t],e))return""+t;return!1}function ve(){b.config.noCalendar||b.isMobile||!b.monthNav||(b.yearElements.forEach((function(e,t){var n=new Date(b.currentYear,b.currentMonth,1);n.setMonth(b.currentMonth+t),b.config.showMonths>1||"static"===b.config.monthSelectorType?b.monthElements[t].textContent=h(n.getMonth(),b.config.shorthandCurrentMonth,b.l10n)+" ":b.monthsDropdownContainer.value=n.getMonth().toString(),e.value=n.getFullYear().toString()})),b._hidePrevMonthArrow=void 0!==b.config.minDate&&(b.currentYear===b.config.minDate.getFullYear()?b.currentMonth<=b.config.minDate.getMonth():b.currentYear<b.config.minDate.getFullYear()),b._hideNextMonthArrow=void 0!==b.config.maxDate&&(b.currentYear===b.config.maxDate.getFullYear()?b.currentMonth+1>b.config.maxDate.getMonth():b.currentYear>b.config.maxDate.getFullYear()))}function be(e){return b.selectedDates.map((function(t){return b.formatDate(t,e)})).filter((function(e,t,n){return"range"!==b.config.mode||b.config.enableTime||n.indexOf(e)===t})).join("range"!==b.config.mode?b.config.conjunction:b.l10n.rangeSeparator)}function De(e){void 0===e&&(e=!0),void 0!==b.mobileInput&&b.mobileFormatStr&&(b.mobileInput.value=void 0!==b.latestSelectedDateObj?b.formatDate(b.latestSelectedDateObj,b.mobileFormatStr):""),b.input.value=be(b.config.dateFormat),void 0!==b.altInput&&(b.altInput.value=be(b.config.altFormat)),!1!==e&&me("onValueUpdate")}function ye(e){var t=f(e),n=b.prevMonthNav.contains(t),o=b.nextMonthNav.contains(t);n||o?$(n?-1:1):b.yearElements.indexOf(t)>=0?t.select():t.classList.contains("arrowUp")?b.changeYear(b.currentYear+1):t.classList.contains("arrowDown")&&b.changeYear(b.currentYear-1)}return function(){b.element=b.input=m,b.isOpen=!1,function(){var t=["wrap","weekNumbers","allowInput","allowInvalidPreload","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],a=e(e({},JSON.parse(JSON.stringify(m.dataset||{}))),g),i={};b.config.parseDate=a.parseDate,b.config.formatDate=a.formatDate,Object.defineProperty(b.config,"enable",{get:function(){return b.config._enable},set:function(e){b.config._enable=fe(e)}}),Object.defineProperty(b.config,"disable",{get:function(){return b.config._disable},set:function(e){b.config._disable=fe(e)}});var r="time"===a.mode;if(!a.dateFormat&&(a.enableTime||r)){var l=E.defaultConfig.dateFormat||o.dateFormat;i.dateFormat=a.noCalendar||r?"H:i"+(a.enableSeconds?":S":""):l+" H:i"+(a.enableSeconds?":S":"")}if(a.altInput&&(a.enableTime||r)&&!a.altFormat){var c=E.defaultConfig.altFormat||o.altFormat;i.altFormat=a.noCalendar||r?"h:i"+(a.enableSeconds?":S K":" K"):c+" h:i"+(a.enableSeconds?":S":"")+" K"}Object.defineProperty(b.config,"minDate",{get:function(){return b.config._minDate},set:ae("min")}),Object.defineProperty(b.config,"maxDate",{get:function(){return b.config._maxDate},set:ae("max")});var u=function(e){return function(t){b.config["min"===e?"_minTime":"_maxTime"]=b.parseDate(t,"H:i:S")}};Object.defineProperty(b.config,"minTime",{get:function(){return b.config._minTime},set:u("min")}),Object.defineProperty(b.config,"maxTime",{get:function(){return b.config._maxTime},set:u("max")}),"time"===a.mode&&(b.config.noCalendar=!0,b.config.enableTime=!0),Object.assign(b.config,i,a);for(var d=0;d<t.length;d++)b.config[t[d]]=!0===b.config[t[d]]||"true"===b.config[t[d]];for(n.filter((function(e){return void 0!==b.config[e]})).forEach((function(e){b.config[e]=s(b.config[e]||[]).map(C)})),b.isMobile=!b.config.disableMobile&&!b.config.inline&&"single"===b.config.mode&&!b.config.disable.length&&!b.config.enable.length&&!b.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),d=0;d<b.config.plugins.length;d++){var p=b.config.plugins[d](b)||{};for(var f in p)n.indexOf(f)>-1?b.config[f]=s(p[f]).map(C).concat(b.config[f]):void 0===a[f]&&(b.config[f]=p[f])}a.altInputClass||(b.config.altInputClass=ie().className+" "+b.config.altInputClass),me("onParseConfig")}(),re(),b.input=ie(),b.input?(b.input._type=b.input.type,b.input.type="text",b.input.classList.add("flatpickr-input"),b._input=b.input,b.config.altInput&&(b.altInput=u(b.input.nodeName,b.config.altInputClass),b._input=b.altInput,b.altInput.placeholder=b.input.placeholder,b.altInput.disabled=b.input.disabled,b.altInput.required=b.input.required,b.altInput.tabIndex=b.input.tabIndex,b.altInput.type="text",b.input.setAttribute("type","hidden"),!b.config.static&&b.input.parentNode&&b.input.parentNode.insertBefore(b.altInput,b.input.nextSibling)),b.config.allowInput||b._input.setAttribute("readonly","readonly"),b._positionElement=b.config.positionElement||b._input):b.config.errorHandler(new Error("Invalid input element specified")),function(){b.selectedDates=[],b.now=b.parseDate(b.config.now)||new Date;var e=b.config.defaultDate||("INPUT"!==b.input.nodeName&&"TEXTAREA"!==b.input.nodeName||!b.input.placeholder||b.input.value!==b.input.placeholder?b.input.value:null);e&&pe(e,b.config.dateFormat),b._initialDate=b.selectedDates.length>0?b.selectedDates[0]:b.config.minDate&&b.config.minDate.getTime()>b.now.getTime()?b.config.minDate:b.config.maxDate&&b.config.maxDate.getTime()<b.now.getTime()?b.config.maxDate:b.now,b.currentYear=b._initialDate.getFullYear(),b.currentMonth=b._initialDate.getMonth(),b.selectedDates.length>0&&(b.latestSelectedDateObj=b.selectedDates[0]),void 0!==b.config.minTime&&(b.config.minTime=b.parseDate(b.config.minTime,"H:i")),void 0!==b.config.maxTime&&(b.config.maxTime=b.parseDate(b.config.maxTime,"H:i")),b.minDateHasTime=!!b.config.minDate&&(b.config.minDate.getHours()>0||b.config.minDate.getMinutes()>0||b.config.minDate.getSeconds()>0),b.maxDateHasTime=!!b.config.maxDate&&(b.config.maxDate.getHours()>0||b.config.maxDate.getMinutes()>0||b.config.maxDate.getSeconds()>0)}(),b.utils={getDaysInMonth:function(e,t){return void 0===e&&(e=b.currentMonth),void 0===t&&(t=b.currentYear),1===e&&(t%4==0&&t%100!=0||t%400==0)?29:b.l10n.daysInMonth[e]}},b.isMobile||function(){var e=window.document.createDocumentFragment();if(b.calendarContainer=u("div","flatpickr-calendar"),b.calendarContainer.tabIndex=-1,!b.config.noCalendar){if(e.appendChild((b.monthNav=u("div","flatpickr-months"),b.yearElements=[],b.monthElements=[],b.prevMonthNav=u("span","flatpickr-prev-month"),b.prevMonthNav.innerHTML=b.config.prevArrow,b.nextMonthNav=u("span","flatpickr-next-month"),b.nextMonthNav.innerHTML=b.config.nextArrow,J(),Object.defineProperty(b,"_hidePrevMonthArrow",{get:function(){return b.__hidePrevMonthArrow},set:function(e){b.__hidePrevMonthArrow!==e&&(c(b.prevMonthNav,"flatpickr-disabled",e),b.__hidePrevMonthArrow=e)}}),Object.defineProperty(b,"_hideNextMonthArrow",{get:function(){return b.__hideNextMonthArrow},set:function(e){b.__hideNextMonthArrow!==e&&(c(b.nextMonthNav,"flatpickr-disabled",e),b.__hideNextMonthArrow=e)}}),b.currentYearElement=b.yearElements[0],ve(),b.monthNav)),b.innerContainer=u("div","flatpickr-innerContainer"),b.config.weekNumbers){var t=function(){b.calendarContainer.classList.add("hasWeeks");var e=u("div","flatpickr-weekwrapper");e.appendChild(u("span","flatpickr-weekday",b.l10n.weekAbbreviation));var t=u("div","flatpickr-weeks");return e.appendChild(t),{weekWrapper:e,weekNumbers:t}}(),n=t.weekWrapper,o=t.weekNumbers;b.innerContainer.appendChild(n),b.weekNumbers=o,b.weekWrapper=n}b.rContainer=u("div","flatpickr-rContainer"),b.rContainer.appendChild(K()),b.daysContainer||(b.daysContainer=u("div","flatpickr-days"),b.daysContainer.tabIndex=-1),R(),b.rContainer.appendChild(b.daysContainer),b.innerContainer.appendChild(b.rContainer),e.appendChild(b.innerContainer)}b.config.enableTime&&e.appendChild(function(){b.calendarContainer.classList.add("hasTime"),b.config.noCalendar&&b.calendarContainer.classList.add("noCalendar"),b.timeContainer=u("div","flatpickr-time"),b.timeContainer.tabIndex=-1;var e=u("span","flatpickr-time-separator",":"),t=p("flatpickr-hour",{"aria-label":b.l10n.hourAriaLabel});b.hourElement=t.getElementsByTagName("input")[0];var n=p("flatpickr-minute",{"aria-label":b.l10n.minuteAriaLabel});if(b.minuteElement=n.getElementsByTagName("input")[0],b.hourElement.tabIndex=b.minuteElement.tabIndex=-1,b.hourElement.value=i(b.latestSelectedDateObj?b.latestSelectedDateObj.getHours():b.config.time_24hr?b.config.defaultHour:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(b.config.defaultHour)),b.minuteElement.value=i(b.latestSelectedDateObj?b.latestSelectedDateObj.getMinutes():b.config.defaultMinute),b.hourElement.setAttribute("step",b.config.hourIncrement.toString()),b.minuteElement.setAttribute("step",b.config.minuteIncrement.toString()),b.hourElement.setAttribute("min",b.config.time_24hr?"0":"1"),b.hourElement.setAttribute("max",b.config.time_24hr?"23":"12"),b.minuteElement.setAttribute("min","0"),b.minuteElement.setAttribute("max","59"),b.timeContainer.appendChild(t),b.timeContainer.appendChild(e),b.timeContainer.appendChild(n),b.config.time_24hr&&b.timeContainer.classList.add("time24hr"),b.config.enableSeconds){b.timeContainer.classList.add("hasSeconds");var o=p("flatpickr-second");b.secondElement=o.getElementsByTagName("input")[0],b.secondElement.value=i(b.latestSelectedDateObj?b.latestSelectedDateObj.getSeconds():b.config.defaultSeconds),b.secondElement.setAttribute("step",b.minuteElement.getAttribute("step")),b.secondElement.setAttribute("min","0"),b.secondElement.setAttribute("max","59"),b.timeContainer.appendChild(u("span","flatpickr-time-separator",":")),b.timeContainer.appendChild(o)}return b.config.time_24hr||(b.amPM=u("span","flatpickr-am-pm",b.l10n.amPM[r((b.latestSelectedDateObj?b.hourElement.value:b.config.defaultHour)>11)]),b.amPM.title=b.l10n.toggleTitle,b.amPM.tabIndex=-1,b.timeContainer.appendChild(b.amPM)),b.timeContainer}()),c(b.calendarContainer,"rangeMode","range"===b.config.mode),c(b.calendarContainer,"animate",!0===b.config.animate),c(b.calendarContainer,"multiMonth",b.config.showMonths>1),b.calendarContainer.appendChild(e);var a=void 0!==b.config.appendTo&&void 0!==b.config.appendTo.nodeType;if((b.config.inline||b.config.static)&&(b.calendarContainer.classList.add(b.config.inline?"inline":"static"),b.config.inline&&(!a&&b.element.parentNode?b.element.parentNode.insertBefore(b.calendarContainer,b._input.nextSibling):void 0!==b.config.appendTo&&b.config.appendTo.appendChild(b.calendarContainer)),b.config.static)){var l=u("div","flatpickr-wrapper");b.element.parentNode&&b.element.parentNode.insertBefore(l,b.element),l.appendChild(b.element),b.altInput&&l.appendChild(b.altInput),l.appendChild(b.calendarContainer)}b.config.static||b.config.inline||(void 0!==b.config.appendTo?b.config.appendTo:window.document.body).appendChild(b.calendarContainer)}(),function(){if(b.config.wrap&&["open","close","toggle","clear"].forEach((function(e){Array.prototype.forEach.call(b.element.querySelectorAll("[data-"+e+"]"),(function(t){return I(t,"click",b[e])}))})),b.isMobile)!function(){var e=b.config.enableTime?b.config.noCalendar?"time":"datetime-local":"date";b.mobileInput=u("input",b.input.className+" flatpickr-mobile"),b.mobileInput.tabIndex=1,b.mobileInput.type=e,b.mobileInput.disabled=b.input.disabled,b.mobileInput.required=b.input.required,b.mobileInput.placeholder=b.input.placeholder,b.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",b.selectedDates.length>0&&(b.mobileInput.defaultValue=b.mobileInput.value=b.formatDate(b.selectedDates[0],b.mobileFormatStr)),b.config.minDate&&(b.mobileInput.min=b.formatDate(b.config.minDate,"Y-m-d")),b.config.maxDate&&(b.mobileInput.max=b.formatDate(b.config.maxDate,"Y-m-d")),b.input.getAttribute("step")&&(b.mobileInput.step=String(b.input.getAttribute("step"))),b.input.type="hidden",void 0!==b.altInput&&(b.altInput.type="hidden");try{b.input.parentNode&&b.input.parentNode.insertBefore(b.mobileInput,b.input.nextSibling)}catch(e){}I(b.mobileInput,"change",(function(e){b.setDate(f(e).value,!1,b.mobileFormatStr),me("onChange"),me("onClose")}))}();else{var e=l(oe,50);b._debouncedChange=l(S,300),b.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&I(b.daysContainer,"mouseover",(function(e){"range"===b.config.mode&&ne(f(e))})),I(window.document.body,"keydown",te),b.config.inline||b.config.static||I(window,"resize",e),void 0!==window.ontouchstart?I(window.document,"touchstart",G):I(window.document,"click",G),I(window.document,"focus",G,{capture:!0}),!0===b.config.clickOpens&&(I(b._input,"focus",b.open),I(b._input,"click",b.open)),void 0!==b.daysContainer&&(I(b.monthNav,"click",ye),I(b.monthNav,["keyup","increment"],N),I(b.daysContainer,"click",ue)),void 0!==b.timeContainer&&void 0!==b.minuteElement&&void 0!==b.hourElement&&(I(b.timeContainer,["increment"],P),I(b.timeContainer,"blur",P,{capture:!0}),I(b.timeContainer,"click",A),I([b.hourElement,b.minuteElement],["focus","click"],(function(e){return f(e).select()})),void 0!==b.secondElement&&I(b.secondElement,"focus",(function(){return b.secondElement&&b.secondElement.select()})),void 0!==b.amPM&&I(b.amPM,"click",(function(e){P(e),S()}))),b.config.allowInput&&I(b._input,"blur",ee)}}(),(b.selectedDates.length||b.config.noCalendar)&&(b.config.enableTime&&T(b.config.noCalendar?b.latestSelectedDateObj||b.config.minDate:void 0),De(!1)),x();var t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!b.isMobile&&t&&le(),me("onReady")}(),b}function x(e,t){for(var n=Array.prototype.slice.call(e).filter((function(e){return e instanceof HTMLElement})),o=[],a=0;a<n.length;a++){var i=n[a];try{if(null!==i.getAttribute("data-fp-omit"))continue;void 0!==i._flatpickr&&(i._flatpickr.destroy(),i._flatpickr=void 0),i._flatpickr=C(i,t||{}),o.push(i._flatpickr)}catch(e){console.error(e)}}return 1===o.length?o[0]:o}"function"!=typeof Object.assign&&(Object.assign=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var o=function(t){t&&Object.keys(t).forEach((function(n){return e[n]=t[n]}))},a=0,i=t;a<i.length;a++){var r=i[a];o(r)}return e}),"undefined"!=typeof HTMLElement&&"undefined"!=typeof HTMLCollection&&"undefined"!=typeof NodeList&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return x(this,e)},HTMLElement.prototype.flatpickr=function(e){return x([this],e)});var E=function(e,t){return"string"==typeof e?x(window.document.querySelectorAll(e),t):e instanceof Node?x([e],t):x(e,t)};return E.defaultConfig={},E.l10ns={en:e({},a),default:e({},a)},E.localize=function(t){E.l10ns.default=e(e({},E.l10ns.default),t)},E.setDefaults=function(t){E.defaultConfig=e(e({},E.defaultConfig),t)},E.parseDate=y({}),E.formatDate=D({}),E.compareDates=w,"undefined"!=typeof jQuery&&void 0!==jQuery.fn&&(jQuery.fn.flatpickr=function(e){return x(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=E),E}()},function(e,t){e.exports=flarum.core.compat.Component},function(e,t){e.exports=flarum.core.compat["components/LogInModal"]},function(e,t){e.exports=flarum.core.compat["helpers/avatar"]},function(e,t){e.exports=flarum.core.compat["helpers/username"]},function(e,t){e.exports=flarum.core.compat["utils/PostControls"]},function(e,t,n){"use strict";n.r(t),n.d(t,"components",(function(){return z})),n.d(t,"models",(function(){return G}));var o=n(0),a=n.n(o);function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var r=n(5),l=n.n(r),s=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.apiEndpoint=function(){return"/fof/polls"+(this.exists?"/"+this.data.id:"")},t}(l()(a.a,{question:a.a.attribute("question"),hasEnded:a.a.attribute("hasEnded"),endDate:a.a.attribute("endDate"),publicPoll:a.a.attribute("publicPoll"),options:a.a.hasMany("options"),votes:a.a.hasMany("votes")})),c=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.apiEndpoint=function(){return"/fof/polls/answers"+(this.exists?"/"+this.data.id:"")},t}(l()(a.a,{answer:a.a.attribute("answer"),poll:a.a.hasOne("polls"),votes:a.a.hasMany("votes")})),u=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.apiEndpoint=function(){return"/fof/polls/"+this.pollId()+"/vote"},t}(l()(a.a,{poll:a.a.hasOne("poll"),option:a.a.hasOne("option"),user:a.a.hasOne("user"),pollId:a.a.attribute("pollId"),optionId:a.a.attribute("optionId")})),d=n(2),p=n(9),f=n.n(p),h=n(10),g=n.n(h),v=n(11),b=n.n(v),D=n(7),y=n.n(D),w=n(3),M=n.n(w),C=n(6),x=n.n(C),E=n(12),P=n.n(E),k=n(1),T=n.n(k),O=n(13),_=n.n(O),N=function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.oninit=function(t){if(e.prototype.oninit.call(this,t),this.options=[T()(""),T()("")],this.question=T()(""),this.endDate=T()(),this.publicPoll=T()(!1),this.attrs.poll&&this.attrs.poll.relationships){var n=this.attrs.poll;this.options=n.relationships.options.map((function(e){return T()(e)})),this.question(n.question),this.endDate(!n.endDate||isNaN(n.endDate.getTime())?null:n.endDate),this.publicPoll(n.publicPoll)}},n.title=function(){return app.translator.trans("fof-polls.forum.modal.add_title")},n.className=function(){return"PollDiscussionModal Modal--small"},n.configDatePicker=function(e){var t=this;_()(e.dom,{enableTime:!0,minDate:this.endDate()||"today",dateFormat:"Y-m-d H:i",defaultDate:this.endDate(),wrap:!0,onChange:function(e){return t.endDate(e[0])}})},n.content=function(){return[m("div",{className:"Modal-body"},m("div",{className:"PollDiscussionModal-form"},m("div",{className:"Form-group"},m("label",{className:"label"},app.translator.trans("fof-polls.forum.modal.question_placeholder")),m("input",{type:"text",name:"question",className:"FormControl",bidi:this.question})),m("div",{className:"PollModal--answers Form-group"},m("label",{className:"label PollModal--answers-title"},m("span",null,app.translator.trans("fof-polls.forum.modal.options_label")),M.a.component({className:"Button PollModal--button small",icon:"fas fa-plus",onclick:this.addOption.bind(this)})),this.displayOptions()),m("div",{className:"Form-group"},m("label",{className:"label"},app.translator.trans("fof-polls.forum.modal.date_placeholder")),m("div",{className:"PollModal--date",oncreate:this.configDatePicker.bind(this)},m("input",{style:"opacity: 1; color: inherit",className:"FormControl","data-input":!0}),M.a.component({className:"Button PollModal--button",icon:"fas fa-times","data-clear":!0}))),m("div",{className:"Form-group"},P.a.component({state:this.publicPoll()||!1,onchange:this.publicPoll},app.translator.trans("fof-polls.forum.modal.public_poll_label"))),m("div",{className:"Form-group"},M.a.component({type:"submit",className:"Button Button--primary PollModal-SubmitButton",loading:this.loading},app.translator.trans("fof-polls.forum.modal.submit")))))]},n.displayOptions=function(){var e=this;return Object.keys(this.options).map((function(t,n){return m("div",{className:""===e.options[n+1]?"Form-group hide":"Form-group"},m("fieldset",{className:"Poll-answer-input"},m("input",{className:"FormControl",type:"text",name:"answer"+(n+1),bidi:e.options[n],placeholder:app.translator.trans("fof-polls.forum.modal.option_placeholder")+" #"+(n+1)})),n>=2?M.a.component({type:"button",className:"Button Button--warning PollModal--button",icon:"fas fa-minus",onclick:n>=2?e.removeOption.bind(e,n):""}):"")}))},n.addOption=function(){var e=app.data["fof-polls.options.max"],t=e&&parseInt(e)||11;this.options.length<t?this.options.push(T()("")):alert(app.translator.trans("fof-polls.forum.modal.max"))},n.removeOption=function(e){this.options.splice(e,1)},n.onsubmit=function(e){e.preventDefault();var t={question:this.question(),endDate:this.endDate(),publicPoll:this.publicPoll()},n=this.options.map((function(e){return e()})).filter(Boolean);""!==this.question()?n.length<2?alert(app.translator.trans("fof-polls.forum.modal.min")):(t.relationships={options:n},this.attrs.onsubmit(t),app.modal.close()):alert(app.translator.trans("fof-polls.forum.modal.include_question"))},t}(x.a),I=n(8),S=n.n(I);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var A=n(14),j=n.n(A),Y=n(15),H=n.n(Y),L=n(16),B=n.n(L),q=n(17),R=n.n(q),W=function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.className=function(){return"Modal--small"},n.title=function(){return app.translator.trans("fof-polls.forum.votes_modal.title")},n.content=function(){var e=this;return m("div",{className:"Modal-body"},m("ul",{className:"VotesModal-list"},this.attrs.poll.options().map((function(t){var n=e.attrs.poll.votes().filter((function(e){return t.id()===e.option().id()})).map((function(e){return e.user()}));return m("div",null,m("h2",null,t.answer()+":"),n.length?n.map((function(e){var t=e&&{href:app.route.user(e),config:m.route};return m("li",null,m("a",t,B()(e)," ",R()(e)))})):m("h4",{style:"color: #000"},app.translator.trans("fof-polls.forum.modal.no_voters")))}))))},t}(x.a),V=function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.poll=this.attrs.poll,this.vote=T()(),this.voted=T()(!1),this.updateData()},n.view=function(){var e=this;return m("div",null,m("h3",null,this.poll.question()),this.options.map((function(t){var n=e.voted(),o=e.vote()&&e.vote().option().id()===t.id(),a=e.votes.filter((function(e){return e.option().id()===t.id()})).length,i=Math.round(a/e.poll.votes().length*100),r=o?{title:n&&app.translator.transChoice("fof-polls.forum.tooltip.votes",a,{count:String(a)}).join(""),oncreate:function(e){$(e.dom).tooltip({placement:"right"})}}:{},l=o?{checked:!0}:{};return m("div",{className:"PollOption "+(n&&"PollVoted")+" "+(e.poll.hasEnded()&&"PollEnded")},m("div",F({},r,{className:"PollBar","data-selected":o}),(!e.poll.hasEnded()&&app.session.user&&app.session.user.canVotePolls()||!app.session.user)&&m("label",{className:"checkbox"},m("input",F({onchange:e.changeVote.bind(e,t),type:"checkbox"},l)),m("span",{className:"checkmark"})),m("div",{style:n&&"--width: "+i+"%",className:"PollOption-active"}),m("label",{className:"PollAnswer"},m("span",null,t.answer())),n&&m("label",null,m("span",{className:100!==i?"PollPercent PollPercent--option":"PollPercent"},i,"%"))))})),m("div",{style:"clear: both;"}),this.poll.publicPoll()?M.a.component({className:"Button Button--primary PublicPollButton",onclick:function(){return e.showVoters()}},app.translator.trans("fof-polls.forum.public_poll")):"",app.session.user&&!app.session.user.canVotePolls()?m("div",{className:"helpText PollInfoText"},app.translator.trans("fof-polls.forum.no_permission")):this.poll.hasEnded()?m("div",{className:"helpText PollInfoText"},app.translator.trans("fof-polls.forum.poll_ended")):null!==this.poll.endDate()?m("div",{className:"helpText PollInfoText"},m("i",{class:"icon fa fa-clock-o"}),app.translator.trans("fof-polls.forum.days_remaining",{time:dayjs(this.poll.endDate()).fromNow()})):"")},n.updateData=function(){this.poll=app.store.getById("polls",this.poll.id()),this.options=this.poll.options()||[],this.votes=this.poll.votes()||[],this.vote(app.session.user?this.votes.find((function(e){return e.user()&&e.user().id()===app.session.user.id()})):null),this.voted(!!this.vote())},n.onError=function(e,t){throw e.target.checked=!1,t},n.changeVote=function(e,t){var n=this;if(!app.session.user)return app.modal.show(H.a),void(t.target.checked=!1);this.vote()&&e.id()===this.vote().option().id()&&(e=null),this.vote()||(this.vote(app.store.createRecord("poll_votes")),this.vote().pollId(this.poll.id())),app.request({method:"PATCH",url:app.forum.attribute("apiUrl")+"/fof/polls/"+this.poll.id()+"/vote",errorHandler:this.onError.bind(this,t),body:{data:{optionId:e?e.id():null}}}).then((function(t){app.store.pushPayload(t),e||app.store.remove(n.vote()),n.updateData(),e||m.redraw.sync(),m.redraw()}))},n.showVoters=function(){app.modal.show(W,{poll:this.poll})},t}(j.a),J=n(18),K=n.n(J),U=function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.poll=this.attrs.poll,this.options=this.poll.options(),this.optionAnswers=this.options.map((function(e){return T()(e.answer())})),this.question=T()(this.poll.question()),this.endDate=T()(this.poll.endDate()),this.publicPoll=T()(this.poll.publicPoll())},n.title=function(){return app.translator.trans("fof-polls.forum.modal.edit_title")},n.displayOptions=function(){var e=this;return this.options.map((function(t,n){return m("div",{className:"Form-group"},m("fieldset",{className:"Poll-answer-input"},m("input",{className:"FormControl",type:"text",name:"answer"+(n+1),bidi:e.optionAnswers[n],placeholder:app.translator.trans("fof-polls.forum.modal.option_placeholder")+" #"+(n+1)})),n>=2?M.a.component({type:"button",className:"Button PollModal--button",icon:"fas fa-minus",onclick:n>=2?e.removeOption.bind(e,n):""}):"")}))},n.addOption=function(){var e=app.data["fof-polls.options.max"],t=e&&parseInt(e)||11;this.options.length<t?(this.options.push(app.store.createRecord("poll_options")),this.optionAnswers.push(T()(""))):alert(app.translator.trans("fof-polls.forum.modal.max"))},n.removeOption=function(e){this.options.splice(e,1),this.optionAnswers.splice(e,1)},n.onsubmit=function(e){var t=this;if(e.preventDefault(),!this.loading){this.loading=!0;var n=this.options.map((function(e,n){return e.data.attributes||(e.data.attributes={}),e.data.attributes.answer=t.optionAnswers[n](),e.data}));return this.poll.save({question:this.question(),endDate:this.endDate()||!1,publicPoll:this.publicPoll(),options:n}).then((function(){document.location.reload()})).catch((function(e){t.loaded(),t.onerror(e)}))}},t}(N),z={CreatePollModal:N,DiscussionPoll:V,EditPollModal:U,ListVotersModal:W},G={Poll:s,PollOption:c,PollVote:u};app.initializers.add("fof/polls",(function(){app.store.models.polls=s,app.store.models.poll_options=c,app.store.models.poll_votes=u,app.store.models.discussions.prototype.poll=a.a.hasOne("poll"),app.store.models.users.prototype.canEditPolls=a.a.attribute("canEditPolls"),app.store.models.users.prototype.canStartPolls=a.a.attribute("canStartPolls"),app.store.models.users.prototype.canSelfEditPolls=a.a.attribute("canSelfEditPolls"),app.store.models.users.prototype.canVotePolls=a.a.attribute("canVotePolls"),Object(d.extend)(g.a.prototype,"requestParams",(function(e){e.include.push("poll")})),Object(d.extend)(b.a.prototype,"badges",(function(e){this.poll()&&e.add("poll",f.a.component({type:"poll",label:app.translator.trans("fof-polls.forum.tooltip.badge"),icon:"fa fa-signal"}),5)})),Object(d.extend)(K.a,"moderationControls",(function(e,t){var n=t.discussion().poll(),o=app.session.user;n&&(o&&o.canEditPolls()||t.user()&&t.user().canSelfEditPolls()&&t.user().id()===o.id())&&1===t.number()&&(n.hasEnded()||e.add("fof-polls-edit",M.a.component({icon:"fas fa-check-square",onclick:function(){return app.modal.show(U,{poll:n})}},app.translator.trans("fof-polls.forum.moderation.edit"))),e.add("fof-polls-remove",M.a.component({icon:"fas fa-trash",onclick:function(){confirm(app.translator.trans("fof-polls.forum.moderation.delete_confirm"))&&n.delete().then((function(){m.redraw.sync()}))}},app.translator.trans("fof-polls.forum.moderation.delete"))))})),y.a.prototype.addPoll=function(){var e=this;app.modal.show(N,{poll:this.poll,onsubmit:function(t){return e.poll=t}})},Object(d.extend)(y.a.prototype,"headerItems",(function(e){app.session.user&&app.session.user.canStartPolls()&&e.add("polls",m("a",{className:"DiscussionComposer-poll",onclick:this.addPoll.bind(this)},m("span",{className:"PollLabel "+(this.poll?"":"none")},app.translator.trans("fof-polls.forum.composer_discussion."+(this.poll?"edit":"add")+"_poll"))),1)})),Object(d.extend)(y.a.prototype,"data",(function(e){this.poll&&(e.poll=this.poll)})),Object(d.extend)(S.a.prototype,"content",(function(e){var t=this.attrs.post.discussion();t.poll()&&1===this.attrs.post.number()&&e.push(V.component({poll:t.poll()}))})),Object(d.extend)(S.a.prototype,"oncreate",(function(e,t){var n=this;app.pusher&&app.pusher.then((function(e){e.main.bind("newPollVote",(function(e){var t=parseInt(e.user_id);if(!app.session.user||t!=app.session.user.id()){var o=app.store.getById("polls",n.attrs.post.discussion().poll().id());if(parseInt(o.id())===parseInt(e.poll_id)){var a={};Object.keys(e).map((function(t){a[t]=T()(e[t])})),a.option=T()(app.store.getById("poll_options",e.option_id)),a.user=T()(app.store.getById("users",e.user_id));var i=o.votes();i.some((function(e,n){parseInt(e.user()&&e.user().id())===t&&i.splice(n,1)})),i.push(a),o.votes=T()(i),m.redraw.sync()}}})),Object(d.extend)(t,"onremove",(function(){return e.main.unbind("newPollVote")}))}))}))}))}]);


flarum.extensions['fof-polls']=module.exports

var module={}

module.exports=function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=5)}([function(t,n){t.exports=flarum.core.compat["components/Notification"]},,function(t,n){t.exports=flarum.core.compat.extend},function(t,n){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,n){t.exports=flarum.core.compat["utils/string"]},function(t,n,r){"use strict";r.r(n);var e=r(2),o=r(3),i=r.n(o);function a(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}var s=r(0),u=r.n(s),c=function(t){function n(){return t.apply(this,arguments)||this}a(n,t);var r=n.prototype;return r.icon=function(){return"fas fa-edit"},r.href=function(){var t=this.attrs.notification;return app.route.discussion(t.subject())},r.content=function(){return app.translator.trans("fof-subscribed.forum.notifications.discussion_created_text",{user:this.attrs.notification.fromUser()})},n}(u.a),f=function(t){function n(){return t.apply(this,arguments)||this}a(n,t);var r=n.prototype;return r.icon=function(){return"fas fa-user-plus"},r.href=function(){var t=this.attrs.notification;return app.route.user(t.subject())},r.content=function(){return app.translator.trans("fof-subscribed.forum.notifications.user_created_text",{user:this.attrs.notification.fromUser()})},n}(u.a),p=r(4),d=function(t){function n(){return t.apply(this,arguments)||this}a(n,t);var r=n.prototype;return r.icon=function(){return"fas fa-gavel"},r.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t.discussion(),t.number())},r.content=function(){return app.translator.trans("fof-subscribed.forum.notifications.post_unapproved_text",{user:this.attrs.notification.fromUser()})},r.excerpt=function(){return Object(p.truncate)(this.attrs.notification.subject().contentPlain(),200)},n}(u.a);app.initializers.add("fof-subscribed",(function(){app.notificationComponents.discussionCreated=c,app.notificationComponents.userCreated=f,app.notificationComponents.postUnapproved=d,Object(e.extend)(i.a.prototype,"notificationTypes",(function(t){app.forum.attribute("subscribeDiscussionCreated")&&t.add("discussionCreated",{name:"discussionCreated",icon:"fas fa-pencil-alt",label:app.translator.trans("fof-subscribed.forum.settings.notify_discussion_created_label")},5),app.forum.attribute("subscribePostUnapproved")&&t.add("postUnapproved",{name:"postUnapproved",icon:"fas fa-check",label:app.translator.trans("fof-subscribed.forum.settings.notify_post_unapproved_label")},-10),app.forum.attribute("subscribeUserCreated")&&t.add("userCreated",{name:"userCreated",icon:"fas fa-user-plus",label:app.translator.trans("fof-subscribed.forum.settings.notify_user_created_label")},-10)}))}))}]);


flarum.extensions['fof-subscribed']=module.exports

var module={}

module.exports=function(t){var o={};function n(s){if(o[s])return o[s].exports;var r=o[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=o,n.d=function(t,o,s){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)n.d(s,r,function(o){return t[o]}.bind(null,r));return s},n.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="",n(n.s=20)}([function(t,o){t.exports=flarum.core.compat.extend},function(t,o,n){"use strict";var s;o.a=function(t){return s||(s=["none","tags"].reduce((function(o,n){return o[n]=app.translator.trans("fof-follow-tags."+t+".following_"+n+"_label"),o}),{}))}},function(t,o){t.exports=flarum.core.compat["components/Notification"]},function(t,o,n){"use strict";n.d(o,"a",(function(){return s}));var s={followingPageOptions:n(1).a}},function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat["components/IndexPage"]},function(t,o){t.exports=flarum.core.compat["components/Dropdown"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat.Component},,function(t,o){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["utils/extractText"]},function(t,o){t.exports=flarum.core.compat["utils/Stream"]},function(t,o){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,o){t.exports=flarum.core.compat["models/Discussion"]},function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat["components/SettingsPage"]},function(t,o){t.exports=flarum.core.compat["components/FieldSet"]},function(t,o){t.exports=flarum.core.compat["components/Select"]},function(t,o,n){"use strict";n.r(o),n.d(o,"components",(function(){return Z})),n.d(o,"utils",(function(){return ot}));var s=n(0),r=n(10),e=n.n(r),a=n(11),i=n.n(a),l=n(5),u=n.n(l);function c(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}var f=n(6),p=n.n(f),g=n(7),d=n.n(g),b=n(4),w=n.n(b),h=n(12),_=n.n(h),y=n(13),v=n.n(y);function x(){return(x=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}var T,S,N=n(8),P=n.n(N),j=function(t){function o(){return t.apply(this,arguments)||this}return c(o,t),o.prototype.view=function(){var t={onclick:this.attrs.onclick,disabled:this.attrs.disabled};return m("button",x({className:"SubscriptionMenuItem hasIcon "+(this.attrs.disabled&&"disabled")},t),this.attrs.active?w()("fas fa-check",{className:"Button-icon"}):"",m("span",{className:"SubscriptionMenuItem-label"},w()(this.attrs.icon,{className:"Button-icon"}),m("strong",null,this.attrs.label),m("span",{className:"SubscriptionMenuItem-description"},this.attrs.description)))},o}(P.a),D=((T={})[!1]="fas fa-star",T.follow="fas fa-star",T.lurk="fas fa-comments",T.ignore="fas fa-bell-slash",T.hide="fas fa-eye-slash",T),O=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.oninit=function(o){t.prototype.oninit.call(this,o),this.loading=v()(!1),this.options=[{subscription:!1,icon:D[!1],label:app.translator.trans("fof-follow-tags.forum.sub_controls.not_following_button"),description:app.translator.trans("fof-follow-tags.forum.sub_controls.not_following_text")},{subscription:"follow",icon:D.follow,label:app.translator.trans("fof-follow-tags.forum.sub_controls.following_button"),description:app.translator.trans("fof-follow-tags.forum.sub_controls.following_text")},{subscription:"lurk",icon:D.lurk,label:app.translator.trans("fof-follow-tags.forum.sub_controls.lurking_button"),description:app.translator.trans("fof-follow-tags.forum.sub_controls.lurking_text")},{subscription:"ignore",icon:D.ignore,label:app.translator.trans("fof-follow-tags.forum.sub_controls.ignoring_button"),description:app.translator.trans("fof-follow-tags.forum.sub_controls.ignoring_text")},{subscription:"hide",icon:D.hide,label:app.translator.trans("fof-follow-tags.forum.sub_controls.hiding_button"),description:app.translator.trans("fof-follow-tags.forum.sub_controls.hiding_text")}]},n.view=function(){var t=this,o=this.attrs.model,n=o.subscription()||!1,s=app.translator.trans("fof-follow-tags.forum.sub_controls.follow_button"),r=D[n]||"far fa-star",e="SubscriptionMenu-button--"+n;if(["follow","lurk","ignore","hide"].includes(n)){var a=["ignore","hide"].includes(n)?n.slice(0,n.length-1):n;s=app.translator.trans("fof-follow-tags.forum.sub_controls."+a+"ing_button")}var i=app.session.user.preferences(),l=i.notify_newPostInTag_email,u=i.notify_newPostInTag_alert,c=_()(app.translator.trans(l?"fof-follow-tags.forum.sub_controls.notify_email_tooltip":"fof-follow-tags.forum.sub_controls.notify_alert_tooltip")),f={className:"Button SubscriptionMenu-button "+e,icon:r,onclick:this.saveSubscription.bind(this,o,!["follow","lurk","ignore","hide"].includes(n)&&"follow"),title:c,loading:this.loading()};return(l||u)&&!1===n?f.oncreate=function(t){return $(t.dom).tooltip({container:".SubscriptionMenu",placement:"bottom",delay:250,title:c})}:delete f.title,f.onupdate=f.oncreate,m("div",{className:"Dropdown ButtonGroup SubscriptionMenu App-primaryControl"},d.a.component(f,s),m("button",{className:"Dropdown-toggle Button Button--icon "+e,"data-toggle":"dropdown"},w()("fas fa-caret-down",{className:"Button-icon"})),m("ul",{className:"Dropdown-menu dropdown-menu Dropdown-menu--right"},this.options.map((function(s){return s.onclick=t.saveSubscription.bind(t,o,s.subscription),s.active=n===s.subscription,s.disabled="hide"===s.subscription&&o.isHidden(),m("li",null,j.component(s))}))))},n.saveSubscription=function(t,o){var n=this;this.loading(!0),app.request({url:app.forum.attribute("apiUrl")+"/tags/"+t.id()+"/subscription",method:"POST",body:{data:{subscription:o}}}).then((function(t){return app.store.pushPayload(t)})).then((function(){n.loading(!1),m.redraw()})),this.$(".SubscriptionMenu-button").tooltip("hide")},o}(p.a),k=n(14),I=n.n(k),M=function(){return m.route.get().includes(app.route("following"))},B=n(1),C=function(){return S||(S=Object(B.a)("forum.index.following")),S},F=function(){C();var t=app.data["fof-follow-tags.following_page_default"];if(S[t]||(t=null),app.session.user){var o=app.session.user.preferences().followTagsPageDefault;S[o]&&(t=o)}return t||"none"},q=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.view=function(){var t=app.discussions.followTags,o=this.options();return p.a.component({buttonClassName:"Button",label:o[t]||F()},Object.keys(o).map((function(n){var s=n===t;return d.a.component({active:s,icon:!s||"fas fa-check",onclick:function(){app.discussions.followTags=n,app.discussions.refresh()}},o[n])})))},n.options=function(){return C()},o}(P.a),U=n(2),z=n.n(U),A=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.icon=function(){return"fas fa-user-tag"},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){return app.translator.trans("fof-follow-tags.forum.notifications.new_discussion_text",{user:this.attrs.notification.fromUser(),title:this.attrs.notification.subject().title()})},o}(z.a),G=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.icon=function(){return D.lurk},n.href=function(){var t=this.attrs.notification,o=t.subject(),n=t.content()||{};return app.route.discussion(o,n.postNumber)},n.content=function(){return app.translator.trans("fof-follow-tags.forum.notifications.new_post_text",{user:this.attrs.notification.fromUser()})},o}(z.a),H=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var n=o.prototype;return n.icon=function(){return"fas fa-user-tag"},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){return app.translator.trans("fof-follow-tags.forum.notifications.new_discussion_tag_text",{user:this.attrs.notification.fromUser(),title:this.attrs.notification.subject().title()})},o}(z.a),L=n(15),E=n.n(L),J=n(16),K=n.n(J);var Q=n(17),R=n.n(Q),V=n(18),W=n.n(V),X=n(19),Y=n.n(X),Z={FollowingPageFilterDropdown:q,NewDiscussionNotification:A,NewDiscussionTagNotification:H,NewPostNotification:G,SubscriptionMenu:O,SubscriptionMenuItem:j},tt=n(3),ot=x({options:S,getOptions:C,getDefaultFollowingFiltering:F,isFollowingPage:M},tt.a);app.initializers.add("fof/follow-tags",(function(){app.initializers.has("flarum-tags")?(app.store.models.tags.prototype.subscription=i.a.attribute("subscription"),Object(s.extend)(u.a.prototype,"sidebarItems",(function(t){if(this.currentTag()&&app.session.user){var o=this.currentTag();t.replace("newDiscussion",t.get("newDiscussion"),10),t.add("subscription",O.component({model:o,itemClassName:"App-primaryControl"}),5)}})),app.initializers.has("subscriptions")&&(Object(s.extend)(E.a.prototype,"badges",(function(t){if(M()&&this.tags()){var o=this.tags().map((function(t){return t.subscription()})).filter((function(t){return["lurk","follow"].includes(t)})),n=o.includes("lurk")?"lurking":"following";o.length&&t.add("followTags",K.a.component({label:app.translator.trans("fof-follow-tags.forum.badge."+n+"_tag_tooltip"),icon:"fas fa-user-tag",type:n+"-tag"}))}})),Object(s.extend)(I.a.prototype,"requestParams",(function(t){if(M()&&app.session.user){this.followTags||(this.followTags=F());var o=t.filter.q||"",n=this.followTags;"following"===app.current.get("routeName")&&["tags","all"].includes(n)&&("tags"!==n&&"all"!==n||(o+=" is:following-tag"),"tags"===n&&(o=o.replace(" is:following","")),t.filter.q=o)}})),Object(s.extend)(u.a.prototype,"viewItems",(function(t){M()&&app.session.user&&t.add("follow-tags",m(q,null))})),Object(s.extend)(R.a.prototype,"settingsItems",(function(t){var o=this;t.add("fof-follow-tags",W.a.component({label:app.translator.trans("fof-follow-tags.forum.user.settings.heading"),className:"Settings-follow-tags"},[m("div",{className:"Form-group"},m("p",null,app.translator.trans("fof-follow-tags.forum.user.settings.filter_label")),Y.a.component({options:C(),value:this.user.preferences().followTagsPageDefault||F(),onchange:function(t){o.user.savePreferences({followTagsPageDefault:t}).then((function(){m.redraw()}))}}))]))}))),app.notificationComponents.newPostInTag=G,app.notificationComponents.newDiscussionInTag=A,app.notificationComponents.newDiscussionTag=H,Object(s.extend)(e.a.prototype,"notificationTypes",(function(t){t.add("newDiscussionInTag",{name:"newDiscussionInTag",icon:"fas fa-user-tag",label:app.translator.trans("fof-follow-tags.forum.settings.notify_new_discussion_label")}),t.add("newPostInTag",{name:"newPostInTag",icon:"fas fa-user-tag",label:app.translator.trans("fof-follow-tags.forum.settings.notify_new_post_label")}),t.add("newDiscussionTag",{name:"newDiscussionTag",icon:"fas fa-user-tag",label:app.translator.trans("fof-follow-tags.forum.settings.notify_new_discussion_tag_label")})}))):console.error("[fof/follow-tags] flarum/tags is not enabled")}),-1)}]);


flarum.extensions['fof-follow-tags']=module.exports

var module={}

module.exports=function(o){var t={};function e(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return o[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=o,e.c=t,e.d=function(o,t,r){e.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:r})},e.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},e.t=function(o,t){if(1&t&&(o=e(o)),8&t)return o;if(4&t&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var n in o)e.d(r,n,function(t){return o[t]}.bind(null,n));return r},e.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(t,"a",t),t},e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},e.p="",e(e.s=18)}({0:function(o,t){o.exports=flarum.core.compat.app},1:function(o,t){o.exports=flarum.core.compat["utils/Stream"]},18:function(o,t,e){"use strict";e.r(t);var r=e(0),n=e.n(r),a=e(7),u=e(8),i=e.n(u),f=e(1),l=e.n(f);n.a.initializers.add("fof-doorman",(function(){Object(a.extend)(i.a.prototype,"oninit",(function(){this.doorkey=l()("")})),Object(a.extend)(i.a.prototype,"fields",(function(o){var t=JSON.parse(n.a.forum.data.attributes["fof-doorman.allowPublic"]),e=n.a.translator.trans("fof-doorman.forum.sign_up.doorman_placeholder");t&&(e=n.a.translator.trans("fof-doorman.forum.sign_up.doorman_placeholder_optional")),o.add("doorkey",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"fof-doorkey",type:"text",placeholder:e,bidi:this.doorkey,disabled:this.loading})))})),Object(a.extend)(i.a.prototype,"submitData",(function(o){var t=o;return t["fof-doorkey"]=this.doorkey,t}))}))},7:function(o,t){o.exports=flarum.core.compat.extend},8:function(o,t){o.exports=flarum.core.compat["components/SignUpModal"]}});


flarum.extensions['fof-doorman']=module.exports

var module={}

module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=13)}([function(e,t){e.exports=flarum.core.compat.app},,,,,function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/CommentPost"]},,,,function(e,t){e.exports=flarum.core.compat["utils/PostControls"]},,,function(e,t,r){"use strict";r.r(t);var n=r(5),o=r(0),u=r.n(o),f=(r(10),r(6)),a=r.n(f);u.a.initializers.add("fof-filter",(function(){Object(n.override)(a.a.prototype,"flagReason",(function(e,t){return t.type()===u.a.translator.trans("fof-filter.forum.flagger_name")[0]?u.a.translator.trans("fof-filter.forum.flagger_name"):e(t)}))}),-20)}]);


flarum.extensions['fof-filter']=module.exports

var module={}

module.exports=function(o){var e={};function n(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return o[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=o,n.c=e,n.d=function(o,e,r){n.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:r})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,e){if(1&e&&(o=n(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var t in o)n.d(r,t,function(e){return o[e]}.bind(null,t));return r},n.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(e,"a",e),e},n.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},n.p="",n(n.s=14)}([function(o,e){o.exports=flarum.core.compat.extend},function(o,e){o.exports=flarum.core.compat.app},function(o,e){o.exports=flarum.core.compat["components/Button"]},function(o,e){o.exports=flarum.core.compat["models/User"]},function(o,e){o.exports=flarum.core.compat["components/UserPage"]},function(o,e){o.exports=flarum.core.compat["utils/UserControls"]},function(o,e){o.exports=flarum.core.compat.Model},function(o,e){o.exports=flarum.core.compat["components/CommentPost"]},function(o,e){o.exports=flarum.core.compat["components/Badge"]},function(o,e){o.exports=flarum.core.compat["components/LinkButton"]},function(o,e){o.exports=flarum.core.compat["helpers/avatar"]},function(o,e){o.exports=flarum.core.compat["helpers/username"]},function(o,e){o.exports=flarum.core.compat["utils/Stream"]},function(o,e){o.exports=flarum.core.compat["models/Discussion"]},function(o,e,n){"use strict";n.r(e);var r=n(6),t=n.n(r),s=n(3),a=n.n(s),i=n(0),u=n(5),c=n.n(u),p=n(2),f=n.n(p),l=function(){Object(i.extend)(c.a,"userControls",(function(o,e){app.session.user!==e&&app.session.user&&(e.ignored()?o.add("unignore",f.a.component({icon:"fas fa-comment",onclick:function(){confirm(app.translator.trans("fof-ignore-users.forum.user_controls.unignore_confirmation"))&&this.save({ignored:!1})}.bind(e)},app.translator.trans("fof-ignore-users.forum.user_controls.unignore_button"))):o.add("ignore",f.a.component({icon:"fas fa-comment-slash",onclick:function(){confirm(app.translator.trans("fof-ignore-users.forum.user_controls.ignore_confirmation"))&&this.save({ignored:!0})}.bind(e)},app.translator.trans("fof-ignore-users.forum.user_controls.ignore_button"))))}))},d=n(7),g=n.n(d),b=n(1),h=n.n(b),y=n(9),x=n.n(y),_=n(4),v=n.n(_);var U=n(10),j=n.n(U),O=n(11),P=n.n(O),B=n(12),N=n.n(B),k=function(o){var e,n;function r(){return o.apply(this,arguments)||this}n=o,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var t=r.prototype;return t.oninit=function(e){o.prototype.oninit.call(this,e),this.loading=!0,this.ignoredUsers=app.session.user.ignoredUsers(),this.loadUser(app.session.user.username())},t.content=function(){var o=this;return m("table",{className:"NotificationGrid"},this.ignoredUsers.map((function(e,n){return m("tr",null,m("td",null,m("a",{href:app.route.user(e),config:m.route},m("h3",null,j()(e,{className:"ignorePage-avatar"})," ",P()(e)))),m("td",{className:"ignorePage-button"},f.a.component({icon:"fas fa-comment",type:"button",className:"Button Button--warning",onclick:function(){confirm(app.translator.trans("fof-ignore-users.forum.user_controls.unignore_confirmation"))&&(e.save({ignored:!1}),o.ignoredUsers.splice(n,1),app.session.user.ignoredUsers=N()(o.ignoredUsers))}.bind(e)},app.translator.trans("fof-ignore-users.forum.user_controls.unignore_button"))))})))},t.show=function(o){this.user=app.session.user,m.redraw()},r}(v.a),M=n(13),S=n.n(M),w=n(8),C=n.n(w);function I(){Object(i.extend)(S.a.prototype,"badges",(function(o){var e;this.user()&&this.user().ignored()&&(e=C.a.component({label:app.translator.trans("fof-ignore-users.forum.badge.discussion_label"),icon:"fas fa-user-slash",type:"ignored"})),e&&o.add("user-discussion-ignored",e)})),Object(i.extend)(a.a.prototype,"badges",(function(o){var e;this.ignored()&&(e=C.a.component({label:app.translator.trans("fof-ignore-users.forum.badge.user_label"),icon:"fas fa-user-slash",type:"ignored"})),e&&o.add("user-ignored",e)}))}app.initializers.add("fof-ignore-users",(function(o){a.a.prototype.ignored=t.a.attribute("ignored"),a.a.prototype.ignoredUsers=t.a.hasMany("ignoredUsers"),o.routes.ignoredUsers={path:"/ignoredUsers",component:k},l(),Object(i.extend)(g.a.prototype,"elementAttrs",(function(o){var e=this.attrs.post.user();return e&&e.ignored()&&(o.className+=" Post--hidden"),o})),Object(i.extend)(g.a.prototype,"headerItems",(function(o){var e=this.attrs.post;!e.isHidden()&&e.user()&&e.user().ignored()&&o.add("ignore-toggle",f.a.component({className:"Button Button--default Button--more",icon:"fas fa-ellipsis-h",onclick:this.toggleContent.bind(this)}))})),Object(i.extend)(v.a.prototype,"navItems",(function(o){h.a.session.user&&h.a.session.user===this.user&&o.add("ignored-users",x.a.component({href:h.a.route("ignoredUsers"),icon:"fas fa-user-slash"},h.a.translator.trans("fof-ignore-users.forum.profile_link")))})),I()}))}]);


flarum.extensions['fof-ignore-users']=module.exports

var module={}

module.exports=function(t){var a={};function e(o){if(a[o])return a[o].exports;var s=a[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,e),s.l=!0,s.exports}return e.m=t,e.c=a,e.d=function(t,a,o){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)e.d(o,s,function(a){return t[a]}.bind(null,s));return o},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=21)}([function(t,a){t.exports=flarum.core.compat.extend},function(t,a){t.exports=flarum.core.compat.Component},function(t,a){t.exports=flarum.core.compat["components/IndexPage"]},function(t,a){t.exports=flarum.core.compat["components/Link"]},function(t,a){t.exports=flarum.core.compat["helpers/icon"]},function(t,a){t.exports=flarum.core.compat["utils/ItemList"]},function(t,a){t.exports=flarum.core.compat["tags/utils/sortTags"]},function(t,a){t.exports=flarum.core.compat["components/LinkButton"]},function(t,a){t.exports=flarum.core.compat.Model},function(t,a){t.exports=flarum.core.compat["tags/models/Tag"]},function(t,a){t.exports=flarum.core.compat["components/Page"]},function(t,a){t.exports=flarum.core.compat["components/AffixedSidebar"]},function(t,a){t.exports=flarum.core.compat["helpers/listItems"]},function(t,a){t.exports=flarum.core.compat["tags/helpers/tagLabel"]},function(t,a){t.exports=flarum.core.compat["tags/components/TagsPage"]},function(t,a){t.exports=flarum.core.compat["helpers/avatar"]},function(t,a){t.exports=flarum.core.compat["helpers/username"]},function(t,a){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,a){t.exports=flarum.core.compat["utils/string"]},function(t,a){t.exports=flarum.core.compat["components/UserCard"]},,function(t,a,e){"use strict";e.r(a);var o=e(0),s=e(2),r=e.n(s),n=e(7),i=e.n(n),c=e(8),u=e.n(c),l=e(9),p=e.n(l);function g(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a}var f=e(10),d=e.n(f),h=e(11),v=e.n(h),C=e(12),y=e.n(C),b=e(6),T=e.n(b),x=e(13),w=e.n(x),k=e(14),D=e.n(k),P=e(1),L=e.n(P),I=e(3),_=e.n(I),N=e(4),M=e.n(N),S=e(5),j=e.n(S),A=function(t){function a(){return t.apply(this,arguments)||this}return g(a,t),a.prototype.view=function(){var t=app.forum.attribute("categories.compactMobile")&&window.innerWidth<767;return m("div",{class:"StatWidget"},m("div",{class:"StatWidget-count"},this.attrs.count),m("div",{class:"StatWidget-label"},t?M()(this.attrs.icon):this.attrs.label))},a}(L.a),O=e(15),U=e.n(O),B=e(16),R=e.n(B),W=e(17),V=e.n(W),z=e(18),E=e(19),q=e.n(E),F=function(t){function a(){return t.apply(this,arguments)||this}g(a,t);var e=a.prototype;return e.oninit=function(a){t.prototype.oninit.call(this,a),this.cardVisible=!1},e.view=function(){var t=this.attrs.discussion;if(!t)return m("div",{class:"LastDiscussion"},app.translator.trans("askvortsov-categories.forum.last_discussion_widget.no_discussions"));var a=t.lastPostedUser(),e="";return a&&this.cardVisible&&(e=q.a.component({user:a,className:"UserCard--popover",controlsButtonClassName:"Button Button--icon Button--flat"})),m(_.a,{class:"LastDiscussion",href:app.route.discussion(t)},m(_.a,{className:"LastDiscussion-avatar",href:a?app.route.user(a):"#"},U()(a)),m("div",{class:"LastDiscussion-content"},m("div",{class:"LastDiscussion-bottomRow"},V()(t.lastPostedAt())," ",m(_.a,{className:"LastDiscussion-usernameLink",href:a?app.route.user(a):"#"}," ","| ",R()(a))),m("div",{class:"LastDiscussion-topRow"},Object(z.truncate)(t.title(),26))),m("div",{class:"LastDiscussion-userCardContainer"},e))},e.oncreate=function(a){var e,o=this;t.prototype.oncreate.call(this,a),this.$().on("mouseover",".LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard",(function(){clearTimeout(e),e=setTimeout(o.showCard.bind(o),300)})).on("mouseout",".LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard",(function(){clearTimeout(e),e=setTimeout(o.hideCard.bind(o),150)}))},e.showCard=function(){var t=this;this.cardVisible=!0,m.redraw(),setTimeout((function(){return t.$(".UserCard").addClass("in")}))},e.hideCard=function(){$(".UserCard").removeClass("in"),this.cardVisible=!1,m.redraw()},a}(L.a),G=function(t){function a(){return t.apply(this,arguments)||this}g(a,t);var e=a.prototype;return e.oninit=function(a){t.prototype.oninit.call(this,a),this.tag=this.attrs.model,this.isChild=null!=this.attrs.parent&&null!=this.attrs.parent,this.collapsed=!1,window.addEventListener("resize",(function(){m.redraw()}))},e.view=function(){var t=this,e=this.tag;if(!e)return"";this.compactMobileMode=window.innerWidth<=767&&app.forum.attribute("categories.compactMobile");var o=this.isChild?[]:T()(app.store.all("tags").filter((function(t){return t.parent()===e}))),s=this.isChild?{}:{backgroundColor:e.color()},r=["TagCategory","TagCategory-"+e.slug()];this.isChild?r.push("SubCategory"):r.push("ParentCategory"),this.compactMobileMode&&r.push("compactMobile");var n=(e.lastPostedDiscussion()?["TagCategory-lastDiscussion"]:["TagCategory-lastDiscussion empty"]).join(" "),i=!this.isChild&&this.compactMobileMode,c=m("ol",{className:"TagCategory-subTagList"},o.map((function(e){return[a.component({model:e,parent:t})]})));return m("li",{class:r.join(" ")},m(_.a,{class:"TagCategory-content TagCategory-content-"+e.slug(),style:s,href:app.route.tag(e)},m("div",{class:"TagCategory-alignStart"},m("div",{class:"TagCategory-alignStart-main"},m("span",{class:"TagCategory-icon"},this.iconItems().toArray()),m("div",{class:"TagCategory-main"},this.mainItems().toArray())),0==o.length?"":m("p",{class:"TagCategory-toggleArrow",onclick:function(a){t.toggleArrow(a)}},M()(this.collapsed?"fas fa-caret-down":"fas fa-caret-up"))),m("div",{class:"TagCategory-alignEnd"},m("div",{class:"TagCategory-stats StatWidgetList"},this.statItems().toArray()),m("div",{class:n},this.lastDiscussionItems().toArray())),i&&!this.collapsed?c:""),i||this.isChild?"":c)},e.iconItems=function(){var t=new j.a;if(this.tag.icon()&&this.isChild){var a={},e="fa-stack-1x CategoryIcon";app.forum.attribute("categories.childBareIcon")&&(a.color=this.tag.color(),e+=" NoBackgroundCategoryIcon");var o=this.compactMobileMode?"fa-stack fa-1x":"fa-stack fa-2x";t.add("icon",m("span",{class:o},app.forum.attribute("categories.childBareIcon")?"":m("i",{class:"fa fa-circle fa-stack-2x icon-background",style:{color:this.tag.color()}}),M()(this.tag.icon(),{className:e,style:a})),10)}else if(this.tag.icon()&&!app.forum.attribute("categories.parentRemoveIcon")){var s=this.compactMobileMode?"fa-stack fa-2x":"fa-stack fa-3x";t.add("icon",m("span",{class:s},M()(this.tag.icon(),{className:"fa-stack-1x CategoryIcon"})),10)}return t},e.mainItems=function(){var t=new j.a;return t.add("name",m("h4",{class:"TagCategory-name"},this.tag.name()),15),!this.tag.description()||!this.isChild&&app.forum.attribute("categories.parentRemoveDescription")||t.add("description",m("div",{class:"TagCategory-description"},this.tag.description()),10),t},e.statItems=function(){var t=new j.a;return!this.isChild&&app.forum.attribute("categories.parentRemoveStats")||(t.add("discussionCount",A.component({count:this.tag.discussionCount(),label:app.translator.trans("askvortsov-categories.forum.stat-widgets.discussion_label"),icon:"fas fa-file-alt"}),15),t.add("postCount",A.component({count:this.tag.postCount(),label:app.translator.trans("askvortsov-categories.forum.stat-widgets.post_label"),icon:"fas fa-comment"}),10)),t},e.lastDiscussionItems=function(){var t=new j.a;return!this.isChild&&app.forum.attribute("categories.parentRemoveLastDiscussion")||t.add("lastDiscussion",F.component({discussion:this.tag.lastPostedDiscussion()}),10),t},e.oncreate=function(a){t.prototype.oncreate.call(this,a),this.$(".TagCategory-content,.TagCategory-toggleArrow").bind("mouseenter",(function(t){$(this).addClass("hover"),($(this).parent().hasClass("SubCategory")||$(this).hasClass("TagCategory-toggleArrow"))&&$(this).closest(".ParentCategory").children(".TagCategory-content").removeClass("hover")})),this.$(".TagCategory-content,.TagCategory-toggleArrow").bind("mouseleave",(function(t){$(this).removeClass("hover"),($(this).parent().hasClass("SubCategory")||$(this).hasClass("TagCategory-toggleArrow"))&&$(this).closest(".ParentCategory").children(".TagCategory-content").addClass("hover")}))},e.toggleArrow=function(t){t.preventDefault(),t.stopPropagation(),this.collapsed=!this.collapsed,m.redraw()},a}(L.a),H=function(t){function a(){return t.apply(this,arguments)||this}g(a,t);var e=a.prototype;return e.oninit=function(t){d.a.prototype.oninit.call(this,t),this.tags=T()(app.store.all("tags").filter((function(t){return!t.parent()}))),app.history.push("categories",app.translator.trans("askvortsov-category.forum.header.back_to_categories_tooltip")),Object(o.extend)(r.a.prototype,"sidebarItems",(function(t){if(app.current instanceof a&&app.forum.attribute("categories.fullPageDesktop"))for(var e in t.items)"newDiscussion"!=e&&"nav"!=e&&t.remove(e);return t}))},e.view=function(){var t=this.tags.filter((function(t){return null!==t.position()})),a=this.tags.filter((function(t){return null===t.position()})),e=app.forum.attribute("categories.fullPageDesktop")?["CategoriesPage","TagsPage"]:["CategoriesPage"];return m("div",{className:e.join(" ")},r.a.prototype.hero(),m("div",{className:"container"},m("div",{className:app.forum.attribute("categories.fullPageDesktop")?"":"sideNavContainer"},m(v.a,null,m("nav",{className:"CategoriesPage-nav TagsPage-nav IndexPage-nav sideNav"},m("ul",null,y()(r.a.prototype.sidebarItems().toArray())))),m("div",{className:"CategoriesPage-content sideNavOffset"},m("ol",{className:"TagCategoryList"},t.map((function(t){return G.component({model:t})}))),a.length?m("div",{className:"TagCloud"},a.map((function(t){return[w()(t,{link:!0})," "]}))):""))))},e.oncreate=function(a){t.prototype.oncreate.call(this,a),app.setTitle(app.translator.trans("askvortsov-categories.forum.meta.categories_title"))},a}(D.a);app.initializers.add("askvortsov/flarum-categories",(function(){app.routes.categories={path:"/categories",component:H},p.a.prototype.postCount=u.a.attribute("postCount"),Object(o.extend)(r.a.prototype,"navItems",(function(t){return t.has("tags")&&!app.forum.attribute("categories.keepTagsNav")&&t.remove("tags"),t.add("categories",m(i.a,{icon:"fas fa-th-list",href:app.route("categories")},app.translator.trans("askvortsov-categories.forum.index.categories_link")),-9.5),t.has("moreTags")&&t.replace("moreTags",m(i.a,{href:app.route("categories")},app.translator.trans("flarum-tags.forum.index.more_link"))),t}))}))}]);


flarum.extensions['askvortsov-categories']=module.exports

var module={}

module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=10)}([function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat["tags/models/Tag"]},,function(e,t){e.exports=flarum.core.compat["components/IndexPage"]},function(e,t){e.exports=flarum.core.compat["tags/components/TagDiscussionModal"]},,,,,function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(4),a=o.n(r),p=o(1),c=o.n(p),i=o(2),s=o.n(i),u=o(5),l=o.n(u);function f(){if(!app.composer.fields.content()&&app.composer.fields.tags){var e={};app.composer.fields.tags.forEach((function(t){null!==t.position()&&t.template()&&(e[t.id()]=t.template())}));var t=Object.keys(e);if(2===t.length){var o=app.store.getById("tags",t[0]),n=app.store.getById("tags",t[1]);o.parent()===n&&delete e[t[1]],n.parent()===o&&delete e[t[0]]}if(1===Object.keys(e).length){var r=Object.values(e)[0];app.composer.editor.setValue(r)}}}app.initializers.add("askvortsov/flarum-discussion-templates",(function(){s.a.prototype.template=c.a.attribute("template"),Object(n.extend)(a.a.prototype,"newDiscussionAction",(function(e){e.then((function(e){e.fields.tags.length>0&&f()}))})),Object(n.extend)(l.a.prototype,"onremove",(function(){app.composer.fields.tags&&app.composer.fields.tags.length>0&&f()}))}))}]);


flarum.extensions['askvortsov-discussion-templates']=module.exports

var module={}

module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=21)}([function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e,r){t.exports=r(19)},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/SessionDropdown"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["utils/PostControls"]},function(t,e){t.exports=flarum.core.compat["utils/UserControls"]},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["components/SettingsPage"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},,,,,,function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=g(i,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var p=c(t,e,r);if("normal"===p.type){if(n=r.done?"completed":"suspendedYield",p.arg===u)continue;return{value:p.arg,done:r.done}}"throw"===p.type&&(n="completed",r.method="throw",r.arg=p.arg)}}}(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function p(){}function f(){}function l(){}var d={};d[o]=function(){return this};var h=Object.getPrototypeOf,m=h&&h(h(_([])));m&&m!==e&&r.call(m,o)&&(d=m);var v=l.prototype=p.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,s){var u=c(t[o],t,a);if("throw"!==u.type){var p=u.arg,f=p.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(f).then((function(t){p.value=t,i(p)}),(function(t){return n("throw",t,i,s)}))}s(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function g(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=v.constructor=l,l.constructor=f,l[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},w(y.prototype),y.prototype[a]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new y(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(v),v[i]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},,function(t,e,r){"use strict";r.r(e);var n=r(2),o=r.n(n);function a(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function s(t){a(i,n,o,s,c,"next",t)}function c(t){a(i,n,o,s,c,"throw",t)}s(void 0)}))}}var s=r(1);let c,u;const p=new WeakMap,f=new WeakMap,l=new WeakMap,d=new WeakMap,h=new WeakMap;let v={get(t,e,r){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||l.get(t);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(t[e])},set:(t,e,r)=>(t[e]=r,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(b(this),e),g(p.get(this))}:function(...e){return g(t.apply(b(this),e))}:function(e,...r){const n=t.call(b(this),e,...r);return l.set(n,e.sort?e.sort():[e]),g(n)}}function y(t){return"function"==typeof t?w(t):(t instanceof IDBTransaction&&function(t){if(f.has(t))return;const e=new Promise((e,r)=>{const n=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{e(),n()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});f.set(t,e)}(t),e=t,(c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>e instanceof t)?new Proxy(t,v):t);var e}function g(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,r)=>{const n=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{e(g(t.result)),n()},a=()=>{r(t.error),n()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(e=>{e instanceof IDBCursor&&p.set(e,t)}).catch(()=>{}),h.set(e,t),e}(t);if(d.has(t))return d.get(t);const e=y(t);return e!==t&&(d.set(t,e),h.set(e,t)),e}const b=t=>h.get(t);function x(t,e,{blocked:r,upgrade:n,blocking:o,terminated:a}={}){const i=indexedDB.open(t,e),s=g(i);return n&&i.addEventListener("upgradeneeded",t=>{n(g(i.result),t.oldVersion,t.newVersion,g(i.transaction))}),r&&i.addEventListener("blocked",()=>r()),s.then(t=>{a&&t.addEventListener("close",()=>a()),o&&t.addEventListener("versionchange",()=>o())}).catch(()=>{}),s}const k=["get","getKey","getAll","getAllKeys","count"],_=["put","add","delete","clear"],L=new Map;function E(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(L.get(e))return L.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,o=_.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!k.includes(r))return;const a=async function(t,...e){const a=this.transaction(t,o?"readwrite":"readonly");let i=a.store;n&&(i=i.index(e.shift()));const s=await i[r](...e);return o&&await a.done,s};return L.set(e,a),a}v=(t=>({...t,get:(e,r,n)=>E(e,r)||t.get(e,r,n),has:(e,r)=>!!E(e,r)||t.has(e,r)}))(v);var j=r(4),O=r.n(j),N=r(6),B=r.n(N),S=r(7),I=r.n(S),P=r(8),D=r.n(P),M=r(9),C=r.n(M),T=r(10),A=r.n(T),W=r(0),G=r.n(W);function F(t){return q.apply(this,arguments)}function q(){return(q=i(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.share(e);case 3:resultPara.textContent="MDN shared successfully",t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("Error: "+t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}var K=r(11),R=r.n(K),U=r(12),V=r.n(U),z=r(3),Y=r.n(z),J=r(13),$=r.n(J),H=r(5),Q=r.n(H),X=function(t){return app.sw.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:app.forum.attribute("vapidPublicKey")}).then((function(e){t&&app.request({method:"POST",url:app.forum.attribute("apiUrl")+"/pwa/push",body:{subscription:e}})}))},Z=function(){if(!app.session.user)return!1;var t,e=app.session.user.preferences();for(t in e)if(("string"==typeof t||t instanceof String)&&t.startsWith("notify_")&&t.endsWith("_push")&&e[t])return!0;return!1},tt=function(){var t=i(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(app.cache.pwaRefreshed||!("Notification"in window)||"granted"!==window.Notification.permission||!Z()){t.next=10;break}return t.prev=1,t.next=4,X(!0);case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0),e.pushManager.getSubscription().then((function(t){return t.unsubscribe().then(X.bind(void 0,!0))}));case 10:app.cache.pwaRefreshed=!0;case 11:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),et=function(){return app.forum.attribute("vapidPublicKey")};app.initializers.add("askvortsov/flarum-pwa",(function(){Object(s.extend)(O.a.prototype,"oninit",(function(){var t=app.forum.attribute("basePath").trimRight("/");(function(){var e=i(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=x("keyval-store",1,{upgrade:function(t){t.createObjectStore("keyval")}}),e.next=3,r;case 3:e.sent.put("keyval",app.forum.data.attributes,"flarum.forumPayload"),"serviceWorker"in navigator&&navigator.serviceWorker.register(t+"/sw",{scope:t+"/"}).then((function(t){navigator.serviceWorker.ready.then((function(){app.sw=t,tt(t)}))}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),Object(s.extend)(I.a.prototype,"items",(function(t){(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone||document.referrer.includes("android-app://"))&&t.has("administration")&&t.replace("administration",B.a.component({icon:"fas fa-wrench",href:app.forum.attribute("adminUrl"),target:"_self"},app.translator.trans("core.forum.header.admin_button")))})),Object(s.extend)(D.a,"userControls",(function(t,e){navigator.share&&t.add("share",G.a.component({icon:"fas fa-share-square",onclick:function(){return F({title:e.title(),url:window.location.protocol+"//"+window.location.hostname+app.route.discussion(e)})}},app.translator.trans("askvortsov-pwa.forum.discussion_controls.share_button")),-1)})),Object(s.extend)(C.a,"userControls",(function(t,e){navigator.share&&t.add("share",G.a.component({icon:"fas fa-share-square",onclick:function(){return F({title:app.translator.trans("askvortsov-pwa.forum.post_controls.share_api.title",{username:e.user().displayName(),title:e.discussion().title()}),url:window.location.protocol+"//"+window.location.hostname+app.route.post(e)})}},app.translator.trans("askvortsov-pwa.forum.post_controls.share_button")),100)})),Object(s.extend)(A.a,"userControls",(function(t,e){navigator.share&&t.add("share",G.a.component({icon:"fas fa-share-square",onclick:function(){return F({title:e.displayName(),url:window.location.protocol+"//"+window.location.hostname+app.route.user(e)})}},app.translator.trans("askvortsov-pwa.forum.user_controls.share_button")),100)})),Object(s.extend)(O.a.prototype,"oncreate",(function(){if(et()){var t=function(){localStorage.setItem("askvortov-pwa.notif-alert.dismissed",JSON.stringify({timestamp:(new Date).getTime()}))};app.alerts.dismiss(app.cache.pwaNotifsAlert),!localStorage.getItem("askvortov-pwa.notif-alert.dismissed")&&"Notification"in window&&"default"===window.Notification.permission&&Z()&&(app.cache.pwaNotifsAlert=app.alerts.show({controls:[m($.a,{class:"Button Button--link",href:app.route("settings"),onclick:function(){return t()}},app.translator.trans("askvortsov-pwa.forum.alerts.optin_button"))],ondismiss:t},app.translator.trans("askvortsov-pwa.forum.alerts.optin")))}})),Object(s.extend)(R.a.prototype,"notificationMethods",(function(t){et()&&t.add("push",{name:"push",icon:"fas fa-mobile",label:app.translator.trans("askvortsov-pwa.forum.settings.push_header")})})),Object(s.extend)(V.a.prototype,"notificationsItems",(function(t){if(et())if("Notification"in window)if("default"===window.Notification.permission){if(!et())return;t.add("push-optin-default",Y.a.component({itemClassName:"pwa-setting-alert",dismissible:!1,controls:[G.a.component({className:"Button Button--link",onclick:function(){window.Notification.requestPermission((function(t){m.redraw(),"granted"===t&&X(!0)}))}},app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_default_button"))]},[Q()("fas fa-exclamation-circle"),app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_default")]),10)}else"denied"===window.Notification.permission&&t.add("push-optin-denied",Y.a.component({itemClassName:"pwa-setting-alert",dismissible:!1,type:"error",controls:[m("a",{class:"Button Button--link",href:"https://support.humblebundle.com/hc/en-us/articles/360008513933-Enabling-and-Disabling-Browser-Notifications-in-Various-Browsers"},app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_denied_button"))]},[Q()("fas fa-exclamation-triangle"),app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.access_denied")]),10);else t.add("push-no-browser-support",Y.a.component({dismissible:!1,controls:[m("a",{class:"Button Button--link",href:"https://developer.mozilla.org/en-US/docs/Web/API/Push_API"},app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.no_browser_support_button"))]},[Q()("fas fa-exclamation-triangle"),app.translator.trans("askvortsov-pwa.forum.settings.pwa_notifications.no_browser_support")]),10)}))}))}]);


flarum.extensions['askvortsov-pwa']=module.exports

var module={}

module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=9)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["common/components/Button"]},function(t,e){t.exports=flarum.core.compat["common/models/User"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/SessionDropdown"]},,,function(t,e,o){"use strict";o.r(e);var n=o(0),i=o.n(n),r=o(3),a=o.n(r),s=o(4),u=o.n(s),l=o(1);function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var d=o(5),f=o.n(d),h=o(2),g=o.n(h),v=function(t){var e,o;function n(){for(var e,o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return c(p(e=t.call.apply(t,[this].concat(n))||this),"remainingSeconds",void 0),c(p(e),"remainingTimeString",void 0),c(p(e),"updateInterval",void 0),c(p(e),"restartListener",void 0),e}o=t,(e=n).prototype=Object.create(o.prototype),e.prototype.constructor=e,e.__proto__=o;var i=n.prototype;return i.oninit=function(e){t.prototype.oninit.call(this,e),this.remainingSeconds=this.attrs.remainingTimeMillis/1e3,this.recalculateRemainingTime(),this.updateInterval=setInterval(this.updateRemainingTime.bind(this),1e3)},i.onready=function(){this.restartListener=this.restartDetected.bind(this),window.addEventListener("autologoutRestarted",this.restartListener)},i.restartDetected=function(){this.removeTimeUpdater(),this.hide()},i.recalculateRemainingTime=function(){var t=Math.floor(this.remainingSeconds/60),e=this.remainingSeconds-60*t;this.remainingTimeString=t+":"+e.toString().padStart(2,"0")},i.updateRemainingTime=function(){this.remainingSeconds--,this.remainingSeconds<0?this.removeTimeUpdater():(this.recalculateRemainingTime(),m.redraw())},i.removeTimeUpdater=function(){this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=null)},i.className=function(){return"ExpirationWarningModal Modal--small"},i.title=function(){return app.translator.trans("tiborsulyan-autologout.forum.warning-modal.title")},i.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Modal-header"},m("h3",null,app.translator.trans("tiborsulyan-autologout.forum.warning-modal.remaining")," ",this.remainingTimeString)),m("div",{className:"Form-group"},g.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,onclick:this.stay.bind(this)},app.translator.trans("tiborsulyan-autologout.forum.warning-modal.stay")),",",g.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,onclick:this.leave.bind(this)},app.translator.trans("tiborsulyan-autologout.forum.warning-modal.leave")))))},i.onremove=function(){window.removeEventListener("autologoutRestarted",this.restartListener),this.removeTimeUpdater()},i.onsubmit=function(t){t.preventDefault()},i.stay=function(){app.request({method:"POST",url:app.forum.attribute("baseUrl")+"/api/keepalive"}),this.hide()},i.leave=function(){this.removeTimeUpdater(),app.session.logout()},n}(f.a),b=function(){function t(t){c(this,"options",void 0),c(this,"warnTimer",void 0),c(this,"logoutTimer",void 0),c(this,"storageListener",void 0),c(this,"lastUpdate",0),this.options=t,this.warnTimer=null,this.logoutTimer=null,this.storageListener=this.expirationTimeUpdated.bind(this),window.addEventListener("storage",this.storageListener)}var e=t.prototype;return e.warn=function(){i.a.modal.show(v,{remainingTimeMillis:this.options.logoutAfter-this.options.warnAfter})},e.storageKey=function(){return"tiborsulyan.autologout"},e.logout=function(){i.a.session.user&&(this.stop(),i.a.session.logout())},e.stopTimers=function(){this.warnTimer&&(clearTimeout(this.warnTimer),this.warnTimer=null),this.logoutTimer&&(clearTimeout(this.logoutTimer),this.logoutTimer=null)},e.removeStorageListener=function(){window.removeEventListener("storage",this.storageListener),this.storageListener=null},e.stop=function(){this.stopTimers(),localStorage.clear(),this.removeStorageListener()},e.start=function(){this.options.warnAfter&&(this.warnTimer=setTimeout(this.warn.bind(this),this.options.warnAfter)),this.logoutTimer=setTimeout(this.logout.bind(this),this.options.logoutAfter)},e.expirationTimeUpdated=function(t){i.a.session.user&&"tiborsulyan.autologout"===t.key&&(t.newValue?(this.lastUpdate=Date.now(),this.restart()):this.logout())},e.restart=function(){this.stopTimers(),this.start(),this.fireRestartedEvent()},e.fireRestartedEvent=function(){window.dispatchEvent(new Event("autologoutRestarted"))},e.updateExpirationTime=function(){Date.now()-this.lastUpdate>2e3&&(this.lastUpdate=Date.now(),localStorage.setItem("tiborsulyan.autologout",this.lastUpdate),this.restart())},t}(),T=o(6),y=o.n(T);i.a.initializers.add("tiborsulyan/autologout",(function(){a.a.prototype.autoLogoutTimer=null,Object(l.extend)(u.a.prototype,"oninit",(function(){var t,e;i.a.session.user&&(i.a.forum.attribute("tiborsulyan-autologout.logoutAfter")&&!document.cookie.includes("flarum_has_remember=1")?(i.a.session.user.autoLogoutTimer||(i.a.session.user.autoLogoutTimer=new b((t=i.a.forum.attribute("tiborsulyan-autologout.logoutAfter"),(e=i.a.forum.attribute("tiborsulyan-autologout.warnAfter"))?{logoutAfter:6e4*t,warnAfter:6e4*e}:{logoutAfter:6e4*t}))),i.a.session.user.autoLogoutTimer.updateExpirationTime()):i.a.session.user)})),Object(l.extend)(XMLHttpRequest.prototype,"open",(function(){this.addEventListener("load",(function(){i.a.session.user&&i.a.session.user.autoLogoutTimer&&i.a.session.user.autoLogoutTimer.updateExpirationTime()}))})),Object(l.extend)(y.a.prototype,"items",(function(t){var e=t.get("logOut"),o=e.attrs.onclick;e.attrs.onclick=function(){i.a.session.user&&i.a.session.user.autoLogoutTimer&&i.a.session.user.autoLogoutTimer.stop(),o()}}))}))}]);


flarum.extensions['tiborsulyan-autologout']=module.exports

//# sourceMappingURL=http://localhost:8015/assets/forum-80408027.js.map