module.exports=function(o){var e={};function n(r){if(e[r])return e[r].exports;var t=e[r]={i:r,l:!1,exports:{}};return o[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=o,n.c=e,n.d=function(o,e,r){n.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:r})},n.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,e){if(1&e&&(o=n(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var t in o)n.d(r,t,function(e){return o[e]}.bind(null,t));return r},n.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(e,"a",e),e},n.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},n.p="",n(n.s=14)}([function(o,e){o.exports=flarum.core.compat.extend},function(o,e){o.exports=flarum.core.compat.app},function(o,e){o.exports=flarum.core.compat["components/Button"]},function(o,e){o.exports=flarum.core.compat["models/User"]},function(o,e){o.exports=flarum.core.compat["components/UserPage"]},function(o,e){o.exports=flarum.core.compat["utils/UserControls"]},function(o,e){o.exports=flarum.core.compat.Model},function(o,e){o.exports=flarum.core.compat["components/CommentPost"]},function(o,e){o.exports=flarum.core.compat["components/Badge"]},function(o,e){o.exports=flarum.core.compat["components/LinkButton"]},function(o,e){o.exports=flarum.core.compat["helpers/avatar"]},function(o,e){o.exports=flarum.core.compat["helpers/username"]},function(o,e){o.exports=flarum.core.compat["utils/Stream"]},function(o,e){o.exports=flarum.core.compat["models/Discussion"]},function(o,e,n){"use strict";n.r(e);var r=n(6),t=n.n(r),s=n(3),a=n.n(s),i=n(0),u=n(5),c=n.n(u),p=n(2),f=n.n(p),l=function(){Object(i.extend)(c.a,"userControls",(function(o,e){app.session.user!==e&&app.session.user&&(e.ignored()?o.add("unignore",f.a.component({icon:"fas fa-comment",onclick:function(){confirm(app.translator.trans("fof-ignore-users.forum.user_controls.unignore_confirmation"))&&this.save({ignored:!1})}.bind(e)},app.translator.trans("fof-ignore-users.forum.user_controls.unignore_button"))):o.add("ignore",f.a.component({icon:"fas fa-comment-slash",onclick:function(){confirm(app.translator.trans("fof-ignore-users.forum.user_controls.ignore_confirmation"))&&this.save({ignored:!0})}.bind(e)},app.translator.trans("fof-ignore-users.forum.user_controls.ignore_button"))))}))},d=n(7),g=n.n(d),b=n(1),h=n.n(b),y=n(9),x=n.n(y),_=n(4),v=n.n(_);var U=n(10),j=n.n(U),O=n(11),P=n.n(O),B=n(12),N=n.n(B),k=function(o){var e,n;function r(){return o.apply(this,arguments)||this}n=o,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var t=r.prototype;return t.oninit=function(e){o.prototype.oninit.call(this,e),this.loading=!0,this.ignoredUsers=app.session.user.ignoredUsers(),this.loadUser(app.session.user.username())},t.content=function(){var o=this;return m("table",{className:"NotificationGrid"},this.ignoredUsers.map((function(e,n){return m("tr",null,m("td",null,m("a",{href:app.route.user(e),config:m.route},m("h3",null,j()(e,{className:"ignorePage-avatar"})," ",P()(e)))),m("td",{className:"ignorePage-button"},f.a.component({icon:"fas fa-comment",type:"button",className:"Button Button--warning",onclick:function(){confirm(app.translator.trans("fof-ignore-users.forum.user_controls.unignore_confirmation"))&&(e.save({ignored:!1}),o.ignoredUsers.splice(n,1),app.session.user.ignoredUsers=N()(o.ignoredUsers))}.bind(e)},app.translator.trans("fof-ignore-users.forum.user_controls.unignore_button"))))})))},t.show=function(o){this.user=app.session.user,m.redraw()},r}(v.a),M=n(13),S=n.n(M),w=n(8),C=n.n(w);function I(){Object(i.extend)(S.a.prototype,"badges",(function(o){var e;this.user()&&this.user().ignored()&&(e=C.a.component({label:app.translator.trans("fof-ignore-users.forum.badge.discussion_label"),icon:"fas fa-user-slash",type:"ignored"})),e&&o.add("user-discussion-ignored",e)})),Object(i.extend)(a.a.prototype,"badges",(function(o){var e;this.ignored()&&(e=C.a.component({label:app.translator.trans("fof-ignore-users.forum.badge.user_label"),icon:"fas fa-user-slash",type:"ignored"})),e&&o.add("user-ignored",e)}))}app.initializers.add("fof-ignore-users",(function(o){a.a.prototype.ignored=t.a.attribute("ignored"),a.a.prototype.ignoredUsers=t.a.hasMany("ignoredUsers"),o.routes.ignoredUsers={path:"/ignoredUsers",component:k},l(),Object(i.extend)(g.a.prototype,"elementAttrs",(function(o){var e=this.attrs.post.user();return e&&e.ignored()&&(o.className+=" Post--hidden"),o})),Object(i.extend)(g.a.prototype,"headerItems",(function(o){var e=this.attrs.post;!e.isHidden()&&e.user()&&e.user().ignored()&&o.add("ignore-toggle",f.a.component({className:"Button Button--default Button--more",icon:"fas fa-ellipsis-h",onclick:this.toggleContent.bind(this)}))})),Object(i.extend)(v.a.prototype,"navItems",(function(o){h.a.session.user&&h.a.session.user===this.user&&o.add("ignored-users",x.a.component({href:h.a.route("ignoredUsers"),icon:"fas fa-user-slash"},h.a.translator.trans("fof-ignore-users.forum.profile_link")))})),I()}))}]);
//# sourceMappingURL=forum.js.map