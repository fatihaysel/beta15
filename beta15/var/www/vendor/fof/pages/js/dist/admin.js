module.exports=function(t){var e={};function a(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=25)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e,a){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}a.d(e,"a",(function(){return n}))},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/Badge"]},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e,a){"use strict";a.d(e,"a",(function(){return b}));var n=a(1),s=a(6),i=a.n(s),o=a(0),r=a.n(o),l=a(12),p=a.n(l),c=a(13),u=a.n(c),m=a(5),d=a(4),f=a.n(d),g=a(7),h=a.n(g),b=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e}(p()(r.a,{title:r.a.attribute("title"),time:r.a.attribute("time",r.a.transformDate),editTime:r.a.attribute("editTime",r.a.transformDate),content:r.a.attribute("content"),contentHtml:r.a.attribute("contentHtml"),contentPlain:u()("contentHtml",m.getPlainContent),slug:r.a.attribute("slug"),isHidden:r.a.attribute("isHidden"),isRestricted:r.a.attribute("isRestricted"),isHtml:r.a.attribute("isHtml"),badges:function(){var t=new f.a;return this.isHidden()&&t.add("hidden",h.a.component({type:"hidden",icon:"fas fa-trash",label:i.a.translator.trans("fof-pages.admin.badges.hidden")})),this.isRestricted()&&t.add("restricted",h.a.component({type:"restricted",icon:"fas fa-user-shield",label:i.a.translator.trans("fof-pages.admin.badges.restricted")})),t}}))},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["utils/withAttr"]},,,,function(t,e){t.exports=flarum.core.compat["components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/Placeholder"]},function(t,e){t.exports=flarum.core.compat["utils/saveSettings"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/BasicsPage"]},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e,a){"use strict";a.r(e);var n=a(11),s=a(1),i=a(18),o=a.n(i),r=a(2),l=a.n(r),p=a(19),c=a.n(p),u=a(5),d=a(8),f=a.n(d),g=a(14),h=a.n(g),b=function(t){function e(){return t.apply(this,arguments)||this}Object(s.a)(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.page=this.attrs.page||app.store.createRecord("pages"),this.pageTitle=f()(this.page.title()||""),this.slug=f()(this.page.slug()||""),this.pageContent=f()(this.page.content()||""),this.isHidden=f()(this.page.isHidden()),this.isRestricted=f()(this.page.isRestricted()),this.isHtml=f()(this.page.isHtml())},a.className=function(){return"EditPageModal Modal--large"},a.title=function(){var t=this.pageTitle();return t||app.translator.trans("fof-pages.admin.edit_page.title")},a.content=function(){var t=this;return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-pages.admin.edit_page.title_label")),m("input",{className:"FormControl",placeholder:app.translator.trans("fof-pages.admin.edit_page.title_placeholder"),value:this.pageTitle(),oninput:function(e){t.pageTitle(e.target.value),t.slug(Object(u.slug)(e.target.value))}})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-pages.admin.edit_page.slug_label")),m("input",{className:"FormControl",placeholder:app.translator.trans("fof-pages.admin.edit_page.slug_placeholder"),value:this.slug(),oninput:function(e){t.slug(e.target.value)}})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-pages.admin.edit_page.content_label")),m("textarea",{className:"FormControl",rows:"5",value:this.pageContent(),onchange:h()("value",this.pageContent),placeholder:app.translator.trans("fof-pages.admin.edit_page.content_placeholder")})),m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",checked:this.isHidden(),onchange:h()("checked",this.isHidden)}),app.translator.trans("fof-pages.admin.edit_page.hidden_label")))),m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",checked:this.isRestricted(),onchange:h()("checked",this.isRestricted)}),app.translator.trans("fof-pages.admin.edit_page.restricted_label")))),m("div",{className:"Form-group"},m("div",null,m("label",{className:"checkbox"},m("input",{type:"checkbox",checked:this.isHtml(),onchange:h()("checked",this.isHtml)}),app.translator.trans("fof-pages.admin.edit_page.html_label")))),m("div",{className:"Form-group"},l.a.component({type:"submit",className:"Button Button--primary EditPageModal-save",loading:this.loading},app.translator.trans("fof-pages.admin.edit_page.submit_button")),this.page.exists?m("button",{type:"button",className:"Button EditPageModal-delete",onclick:this.delete.bind(this)},app.translator.trans("fof-pages.admin.edit_page.delete_page_button")):"")))},a.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.page.save({title:this.pageTitle(),slug:this.slug(),content:this.pageContent(),isHidden:this.isHidden(),isRestricted:this.isRestricted(),isHtml:this.isHtml()},{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).catch((function(){e.loading=!1,m.redraw()}))},a.onhide=function(){m.route(app.route("pages"))},a.delete=function(){confirm(app.translator.trans("fof-pages.admin.edit_page.delete_page_confirmation"))&&(this.page.delete().then((function(){return m.redraw()})),this.hide())},e}(c.a),v=a(3),_=a.n(v),x=a(9),y=a.n(x),N=a(20),P=a.n(N),k=(a(24),a(21)),H=a.n(k),B=a(10),R=a.n(B),w=function(t){function e(){return t.apply(this,arguments)||this}Object(s.a)(e,t);var a=e.prototype;return a.view=function(){var t=this.attrs.page,e=app.forum.attribute("baseUrl")+"/p/"+t.id()+"-"+t.slug(),a=t.badges().toArray();return m("tr",{key:t.id()},m("th",null,t.title(),a.length?m("ul",{className:"badges"},R()(t.badges().toArray())):null),m("td",{className:"Pages-actions"},m("div",{className:"ButtonGroup"},l.a.component({className:"Button Button--page-edit",icon:"fas fa-pencil-alt",onclick:function(){return app.modal.show(b,{page:t})}}),l.a.component({className:"Button Button--page-edit",icon:"fas fa-home",onclick:this.setAsHomePage.bind(this),disabled:app.data.settings.pages_home===t.id()&&"/pages/home"===app.data.settings.default_route}),l.a.component({className:"Button Button--page-view",icon:"fas fa-eye fa-sm",onclick:function(){return window.open(e,"_blank")}}),l.a.component({className:"Button Button--danger Button--page-delete",icon:"fas fa-times",onclick:this.delete.bind(this)}))))},a.setAsHomePage=function(){var t=this;if(app.alerts.dismiss(this.successAlert),confirm(app.translator.trans("fof-pages.admin.edit_page.set_as_home_page_confirmation"))){var e=this.attrs.page;H()({default_route:"/pages/home",pages_home:e.id()}).then((function(){app.alerts.show({type:"success"},app.translator.trans("core.admin.basics.saved_message"))})).catch((function(){})).then((function(){t.loading=!1,m.redraw()}))}},a.delete=function(){confirm(app.translator.trans("fof-pages.admin.edit_page.delete_page_confirmation"))&&this.attrs.page.delete().then((function(){return m.redraw()}))},e}(_.a),O=function(t){function e(){return t.apply(this,arguments)||this}Object(s.a)(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.loading=!0,this.pages=[],this.page=0,this.loadLimit=20,this.refresh()},a.view=function(){if(this.loading)return m("div",{className:"PageList-loading"},y.a.component());if(0===this.pages.length){var t=app.translator.trans("fof-pages.admin.pages_list.empty_text");return P.a.component({text:t})}var e,a;return!0===this.nextResults&&(e=l.a.component({className:"Button Button--PageList-next",icon:"fas fa-angle-right",onclick:this.loadNext.bind(this)})),!0===this.prevResults&&(a=l.a.component({className:"Button Button--PageList-prev",icon:"fas fa-angle-left",onclick:this.loadPrev.bind(this)})),m("div",{className:"PageList"},m("table",{className:"PageList-results"},m("thead",null,m("tr",null,m("th",null,app.translator.trans("fof-pages.admin.pages_list.title")),m("th",null))),m("tbody",null,this.pages.map((function(t){return w.component({page:t})})))),m("div",{className:"PageList-pagination"},e,a))},a.refresh=function(t){return void 0===t&&(t=!0),t&&(this.loading=!0,this.pages=[]),this.loadResults().then(this.parseResults.bind(this))},a.loadResults=function(){var t=this.page*this.loadLimit;return app.store.find("pages",{page:{offset:t,limit:this.loadLimit},sort:"-time"})},a.loadNext=function(){!0===this.nextResults&&(this.page++,this.refresh())},a.loadPrev=function(){!0===this.prevResults&&(this.page--,this.refresh())},a.parseResults=function(t){return[].push.apply(this.pages,t),this.loading=!1,this.nextResults=!!t.payload.links.next,this.prevResults=!!t.payload.links.prev,m.redraw(),t},e}(_.a),j=function(t){function e(){return t.apply(this,arguments)||this}Object(s.a)(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e)},a.content=function(){return m("div",{className:"PagesPage"},m("div",{className:"PagesPage-header"},m("div",{className:"container"},l.a.component({className:"Button Button--primary",icon:"fas fa-plus",onclick:function(){return app.modal.show(b)}},app.translator.trans("fof-pages.admin.pages.create_button")))),m("div",{className:"PagesPage-list"},m("div",{className:"container"},O.component())))},e}(o.a),F=a(22),L=a(23),M=a.n(L);app.initializers.add("fof-pages",(function(t){t.store.models.pages=n.a,t.extensionData.for("fof-pages").registerPage(j).registerPermission({icon:"fas fa-file-alt",label:t.translator.trans("fof-pages.admin.permissions.restricted"),permission:"fof-pages.viewRestricted"},"view"),Object(F.extend)(M.a.prototype,"homePageItems",(function(t){t.add("fof-pages",{path:"/pages/home",label:"FriendsOfFlarum Pages"})}))}))}]);
//# sourceMappingURL=admin.js.map