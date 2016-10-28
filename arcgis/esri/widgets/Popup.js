// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/widgets/Popup/templates/Popup.html":'\x3cdiv role\x3d"presentation" class\x3d"${_css.invisible}"\x3e\r\n  \x3c!-- Popup Container --\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_containerNode" class\x3d"${_css.container} ${_css.alignTop} ${_css.shadow}"\x3e\r\n    \x3cdiv class\x3d"${_css.main}"\x3e\r\n      \x3c!-- Popup Docked Pagination --\x3e\r\n      \x3csection class\x3d"${_css.paginationDocked}"\x3e\r\n        \x3cdiv role\x3d"presentation" class\x3d"${_css.loadingContainer}" title\x3d"${_i18n.loading}"\x3e\r\n          \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconLoading}"\x3e\x3c/span\x3e\r\n          \x3cspan class\x3d"${_css.iconText}"\x3e${_i18n.loading}\x3c/span\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"${_css.paginationDockedButtons}"\x3e\r\n          \x3cdiv role\x3d"button" tabindex\x3d"0" data-dojo-attach-point\x3d"_previousDockedNode" class\x3d"${_css.button} ${_css.paginationPrevious}" title\x3d"${_i18n.previous}"\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconLeftTriangleArrow} ${_css.paginationPreviousIconLTR}"\x3e\x3c/span\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconRightTriangleArrow} ${_css.paginationPreviousIconRTL}"\x3e\x3c/span\x3e\r\n            \x3cspan class\x3d"${_css.iconText}"\x3e${_i18n.previous}\x3c/span\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"_pageTextDockedNode" class\x3d"${_css.paginationText}"\x3e\x3c/div\x3e\r\n          \x3cdiv role\x3d"button" tabindex\x3d"0" data-dojo-attach-point\x3d"_nextDockedNode" class\x3d"${_css.button} ${_css.paginationNext}" title\x3d"${_i18n.next}"\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconRightTriangleArrow} ${_css.paginationNextIconLTR}"\x3e\x3c/span\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconLeftTriangleArrow} ${_css.paginationNextIconRTL}"\x3e\x3c/span\x3e\r\n            \x3cspan class\x3d"${_css.iconText}"\x3e${_i18n.next}\x3c/span\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv role\x3d"button" tabindex\x3d"0" data-dojo-attach-point\x3d"_pageMenuDockedNode" class\x3d"${_css.button} ${_css.featureMenuButton}" title\x3d"${_i18n.menu}"\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconPaginationMenu}"\x3e\x3c/span\x3e\r\n            \x3cspan class\x3d"${_css.iconText}"\x3e${_i18n.menu}\x3c/span\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/section\x3e\r\n      \x3c!-- /Popup Docked Pagination --\x3e\r\n      \x3c!-- Popup Header --\x3e\r\n      \x3cheader class\x3d"${_css.header}"\x3e\r\n        \x3ch1 data-dojo-attach-point\x3d"_titleNode" class\x3d"${_css.headerTitle}"\x3e\x3c/h1\x3e\r\n        \x3cdiv class\x3d"${_css.headerButtons}"\x3e\r\n          \x3cdiv role\x3d"button" tabindex\x3d"0" data-dojo-attach-point\x3d"_dockNode" class\x3d"${_css.button} ${_css.buttonDock}"\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconDock} ${_css.iconDockToRight}"\x3e\x3c/span\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconDock} ${_css.iconDockToTop}"\x3e\x3c/span\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconDock} ${_css.iconDockToLeft}"\x3e\x3c/span\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconDock} ${_css.iconDockToBottom}"\x3e\x3c/span\x3e\r\n            \x3cspan class\x3d"${_css.iconText}"\x3e${_i18n.dock}\x3c/span\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconUndock}"\x3e\x3c/span\x3e\r\n            \x3cspan class\x3d"${_css.iconText}"\x3e${_i18n.undock}\x3c/span\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv role\x3d"button" tabindex\x3d"0" data-dojo-attach-point\x3d"_closeNode" class\x3d"${_css.button}" title\x3d"${_i18n.close}"\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconClose}"\x3e\x3c/span\x3e\r\n            \x3cspan class\x3d"${_css.iconText}"\x3e${_i18n.close}\x3c/span\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/header\x3e\r\n      \x3c!-- /Popup Header --\x3e\r\n      \x3c!-- Popup Content --\x3e\r\n      \x3carticle class\x3d"${_css.content}" data-dojo-attach-point\x3d"_bodyContentNode"\x3e\x3c/article\x3e\r\n      \x3c!-- /Popup Content --\x3e\r\n      \x3c!-- Popup Footer --\x3e\r\n      \x3cfooter class\x3d"${_css.footer}"\x3e\r\n        \x3c!-- Popup Actions --\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"_actionsNode" class\x3d"${_css.actions}"\x3e\x3c/div\x3e\r\n        \x3c!-- /Popup Actions --\x3e\r\n        \x3c!-- Popup Pagination --\x3e\r\n        \x3csection class\x3d"${_css.pagination}"\x3e\r\n          \x3cdiv role\x3d"presentation" class\x3d"${_css.loadingContainer}" title\x3d"${_i18n.loading}"\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconLoading}"\x3e\x3c/span\x3e\r\n            \x3cspan class\x3d"${_css.iconText}"\x3e${_i18n.loading}\x3c/span\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv role\x3d"button" tabindex\x3d"0" data-dojo-attach-point\x3d"_previousNode" class\x3d"${_css.button} ${_css.paginationPrevious}" title\x3d"${_i18n.previous}"\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconLeftTriangleArrow} ${_css.paginationPreviousIconLTR}"\x3e\x3c/span\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconRightTriangleArrow} ${_css.paginationPreviousIconRTL}"\x3e\x3c/span\x3e\r\n            \x3cspan class\x3d"${_css.iconText}"\x3e${_i18n.previous}\x3c/span\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"_pageTextNode" class\x3d"${_css.paginationText}"\x3e\x3c/div\x3e\r\n          \x3cdiv role\x3d"button" tabindex\x3d"0" data-dojo-attach-point\x3d"_nextNode" class\x3d"${_css.button} ${_css.paginationNext}" title\x3d"${_i18n.next}"\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconRightTriangleArrow} ${_css.paginationNextIconLTR}"\x3e\x3c/span\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconLeftTriangleArrow} ${_css.paginationNextIconRTL}"\x3e\x3c/span\x3e\r\n            \x3cspan class\x3d"${_css.iconText}"\x3e${_i18n.next}\x3c/span\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv role\x3d"button" tabindex\x3d"0" data-dojo-attach-point\x3d"_pageMenuNode" class\x3d"${_css.button} ${_css.featureMenuButton}" title\x3d"${_i18n.menu}"\x3e\r\n            \x3cspan aria-hidden\x3d"true" class\x3d"${_css.icon} ${_css.iconPaginationMenu}"\x3e\x3c/span\x3e\r\n            \x3cspan class\x3d"${_css.iconText}"\x3e${_i18n.menu}\x3c/span\x3e\r\n          \x3c/div\x3e\r\n        \x3c/section\x3e\r\n        \x3c!-- /Popup Pagination --\x3e\r\n      \x3c/footer\x3e\r\n      \x3c!-- /Popup Footer --\x3e\r\n      \x3c!-- Popup Menu --\x3e\r\n      \x3csection class\x3d"${_css.featureMenu}" data-dojo-attach-point\x3d"_pageMenuSectionNode" aria-hidden\x3d"true"\x3e\r\n        \x3ch2 class\x3d"${_css.featureMenuHeader}" data-dojo-attach-point\x3d"_pageMenuInfoNode"\x3e\x3c/h2\x3e\r\n        \x3cnav class\x3d"${_css.featureMenuViewport}"\x3e\r\n          \x3col class\x3d"${_css.featureMenuList}" role\x3d"menu" data-dojo-attach-point\x3d"_paginationNode"\x3e\x3c/ol\x3e\r\n        \x3c/nav\x3e\r\n      \x3c/section\x3e\r\n      \x3c!-- /Popup Menu --\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Popup Pointer --\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_pointerNode" class\x3d"${_css.pointer}" role\x3d"presentation"\x3e\r\n      \x3cdiv class\x3d"${_css.pointerDirection} ${_css.shadow}"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- /Popup Pointer --\x3e\r\n  \x3c/div\x3e\r\n  \x3c!-- /Popup Container --\x3e\r\n\x3c/div\x3e\r\n'}});
define("./support/viewModelWiring ./Widget ./Popup/PopupViewModel ../core/HandleRegistry ../core/watchUtils ../views/2d/viewpointUtils dijit/a11yclick dijit/_TemplatedMixin dojo/keys dojo/on dojo/query dojo/Deferred dojo/i18n!./Popup/nls/Popup dojo/text!./Popup/templates/Popup.html ../core/lang dojo/_base/lang dojo/dom-class dojo/dom-attr dojo/dom-construct dojo/dom-geometry dojo/dom-style ./Popup/PopupRenderer ./Popup/PopupRendererViewModel ./Spinner ./Message require".split(" "),function(w,G,H,
I,l,A,m,J,y,e,B,K,C,L,s,x,f,g,n,D,z,M,N,O,P,Q){var R=Q.toUrl("./Popup/images/default-action.svg"),c={hidden:"esri-hidden",invisible:"esri-invisible",iconText:"esri-icon-font-fallback-text",iconLeftTriangleArrow:"esri-icon-left-triangle-arrow",iconRightTriangleArrow:"esri-icon-right-triangle-arrow",iconDockToTop:"esri-icon-maximize",iconDockToBottom:"esri-icon-dock-bottom",iconDockToLeft:"esri-icon-dock-left",iconDockToRight:"esri-icon-dock-right",iconClose:"esri-icon-close",iconUndock:"esri-icon-minimize",
iconPaginationMenu:"esri-icon-layer-list",iconCheckMark:"esri-icon-check-mark",iconLoading:"esri-rotating esri-icon-loading-indicator",iconZoom:"esri-icon-zoom-in-magnifying-glass",base:"esri-popup",container:"esri-popup__size-container",main:"esri-popup__main-container",loadingContainer:"esri-popup__loading-container",shadow:"esri-popup--shadow",showDock:"esri-popup--dock-button-visible",showContent:"esri-popup--content-visible",showFooter:"esri-popup--footer-visible",showTitle:"esri-popup--title-visible",
showPagination:"esri-popup--pagination-visible",hasPopupRenderer:"esri-popup--has-popup-renderer",hasPromiseFeatures:"esri-popup--has-promise-features",isDocked:"esri-popup--is-docked",isDockedTopLeft:"esri-popup--is-docked-top-left",isDockedTopCenter:"esri-popup--is-docked-top-center",isDockedTopRight:"esri-popup--is-docked-top-right",isDockedBottomLeft:"esri-popup--is-docked-bottom-left",isDockedBottomCenter:"esri-popup--is-docked-bottom-center",isDockedBottomRight:"esri-popup--is-docked-bottom-right",
canDockToLeft:"esri-popup--can-dock-to-left",canDockToRight:"esri-popup--can-dock-to-right",canDockToTop:"esri-popup--can-dock-to-top",canDockToBottom:"esri-popup--can-dock-to-bottom",hasPaginationMenuOpen:"esri-popup--feature-menu-open",alignTop:"esri-popup--top-aligned",alignBottom:"esri-popup--bottom-aligned",alignLeft:"esri-popup--left-aligned",alignRight:"esri-popup--right-aligned",hasPendingPromises:"esri-popup--has-pending-promises",isPendingPromisesResult:"esri-popup--is-pending-promises-result",
hasFeatureUpdated:"esri-popup--feature-updated",header:"esri-popup__header",headerButtons:"esri-popup__header-buttons",headerTitle:"esri-popup__header-title",content:"esri-popup__content",footer:"esri-popup__footer",button:"esri-popup__button",buttonDock:"esri-popup__button--dock",icon:"esri-popup__icon",iconDock:"esri-popup__icon--dock-icon",actions:"esri-popup__actions",action:"esri-popup__action",actionImage:"esri-popup__action-image",actionText:"esri-popup__action-text",pointer:"esri-popup__pointer",
pointerDirection:"esri-popup__pointer-direction",pagination:"esri-popup__pagination",paginationPrevious:"esri-popup__pagination-previous",paginationNext:"esri-popup__pagination-next",paginationPreviousIconLTR:"esri-popup__pagination-previous-icon",paginationPreviousIconRTL:"esri-popup__pagination-previous-icon--rtl",paginationNextIconLTR:"esri-popup__pagination-next-icon",paginationNextIconRTL:"esri-popup__pagination-next-icon--rtl",paginationText:"esri-popup__pagination-page-text",paginationDocked:"esri-popup__pagination-docked",
paginationDockedButtons:"esri-popup__pagination-docked-buttons",featureMenu:"esri-popup__feature-menu",featureMenuList:"esri-popup__feature-menu-list",featureMenuItem:"esri-popup__feature-menu-item",featureMenuViewport:"esri-popup__feature-menu-viewport",featureMenuHeader:"esri-popup__feature-menu-header",featureMenuNote:"esri-popup__feature-menu-note",featureMenuSelected:"esri-popup__feature-menu-item--selected",featureMenuButton:"esri-popup__feature-menu-button",featureMenuTitle:"esri-popup__feature-menu-title"},
t={auto:"auto",topLeft:"top-left",topCenter:"top-center",topRight:"top-right",bottomLeft:"bottom-left",bottomCenter:"bottom-center",bottomRight:"bottom-right"},E={buttonEnabled:!0,position:t.auto,breakpoint:{width:544}},p={popupRenderer:"popup-renderer",acions:"actions",actionsChange:"actions-change",paginationTitles:"pagination-titles",view:"view"};return G.createSubclass([J],{declaredClass:"esri.widgets.Popup",baseClass:c.base,templateString:L,constructor:function(){this._handleRegistry=new I;this._contentStorage=
n.create("div")},postCreate:function(){var a=this;this.inherited(arguments);var b=this.viewModel;this.own(l.whenTrue(b,"view.ready",function(){this._wireUpView(this.viewModel.view)}.bind(this)),l.init(b,"pendingPromisesCount,featureCount,promises,location",function(){var a=this.viewModel;this._displayPendingFeaturesStatus(a.pendingPromisesCount,a.featureCount,a.promises,a.location)}.bind(this)),l.init(b,"features",this._updateFeatures.bind(this)),l.init(b,"selectedFeatureIndex,selectedFeature",function(){var a=
this.viewModel;this._updateSelectedFeature(a.selectedFeature);this._updateActions(a.actions,a.features,a.selectedFeature);this._updatePageText(a.features,a.selectedFeatureIndex);this._createPaginationNodes(a.features,a.selectedFeatureIndex);this._bodyContentNode.scrollTop=0}.bind(this)),l.init(b,"title",function(a){this._updateTitle(a);this.reposition()}.bind(this)),l.init(b,"actions",function(a){var b=this.viewModel;this._updateActions(a,b.features,b.selectedFeature);this._actionChangeListener(a)}.bind(this)),
l.init(b,"content",function(a){this._updateContent(a);this.reposition()}.bind(this)),l.init(b,"location",function(a){this._togglePopupLocationRepositioning(this.visible);this.reposition()}.bind(this)),e(this._dockNode,m,this._toggleDock.bind(this)),e(this._closeNode,m,this.close.bind(this)),e(this._previousNode,m,b.previous.bind(b)),e(this._previousDockedNode,m,b.previous.bind(b)),e(this._nextNode,m,b.next.bind(b)),e(this._nextDockedNode,m,b.next.bind(b)),e(this._pageMenuNode,m,this._togglePageMenu.bind(this)),
e(this._pageMenuDockedNode,m,this._togglePageMenu.bind(this)),e(this._pageMenuInfoNode,m,this._togglePageMenu.bind(this)),e(this._paginationNode,e.selector("li",m),function(){a._selectFeature(this)}),e(this._paginationNode,e.selector("li","keyup"),function(b){a._keyupFeature(b,this)}),e(this._actionsNode,e.selector("[data-action-index]",m),function(){a._actionEvent(this)}),e(b,"trigger-action",function(a){a.action&&"zoom-to"===a.action.id&&this.viewModel.zoomToLocation()}.bind(this)));w.setUpEventDelegates(this,
"trigger-action")},destroy:function(){this._destroyPopupRendererVMs();this._destroyMessage();this._destroySpinner();this._destroyPopupRenderer();this._handleRegistry.destroy();this._handleRegistry=null},properties:{actions:{aliasOf:"viewModel.actions"},alignment:{value:"top",set:function(a){this._set("alignment",a);this.reposition()}},autoPanEnabled:!0,content:{aliasOf:"viewModel.content"},closeOnViewChangeEnabled:!1,currentDockPosition:{readOnly:!0,value:null},dockOptions:{value:E,set:function(a){var b=
x.clone(E),d=this.viewModel.get("view.breakpoints"),c={};d&&(c.width=d.xsmall,c.height=d.xsmall);a=x.mixin({},b,a);b=x.mixin({},b.breakpoint,c);!0===a.breakpoint?a.breakpoint=b:"object"===typeof a.breakpoint&&(a.breakpoint=x.mixin({},b,a.breakpoint));this._set("dockOptions",a);this._toggleDockButton(a)}},dockEnabled:{value:!1,set:function(a){this._set("dockEnabled",a);this._togglePopupDocking(a);this._togglePopupLocationRepositioning(this.visible);this.reposition()}},featureCount:{aliasOf:"viewModel.featureCount"},
features:{aliasOf:"viewModel.features"},location:{aliasOf:"viewModel.location"},messageEnabled:{value:!0,set:function(a){this._set("messageEnabled",a);this._createMessage(a,this.viewModel.view)}},paginationEnabled:{value:!0,set:function(a){var b=this.viewModel;this._set("paginationEnabled",a);this._updatePagination(b.features,b.selectedFeatureIndex);this._updateFooterVisibility(b.features,b.actions);this.reposition()}},promises:{aliasOf:"viewModel.promises"},selectedFeature:{aliasOf:"viewModel.selectedFeature"},
selectedFeatureIndex:{aliasOf:"viewModel.selectedFeatureIndex"},spinnerEnabled:{value:!0,set:function(a){this._set("spinnerEnabled",a);this._createSpinner(a,this.viewModel.view)}},title:{aliasOf:"viewModel.title"},view:{aliasOf:"viewModel.view"},viewModel:{type:H},visible:{value:!1,set:function(a){this._set("visible",a);f.remove(this._containerNode,c.hasPaginationMenuOpen);f.toggle(this.domNode,c.invisible,!a);this._togglePopupLocationRepositioning(a);this._toggleContentVisibility(a);this.reposition()}}},
_css:c,_i18n:C,_hideActionsTextNum:3,_animationDelay:10,_popupRendererVMs:[],clear:w.createMethodDelegate("clear"),close:function(){this.set("visible",!1)},next:w.createMethodDelegate("next"),previous:w.createMethodDelegate("previous"),reposition:function(){this._positionPopup();return this._moveIntoView()},open:function(a){a=x.mixin({updateLocationEnabled:!1},a);this.viewModel.set(a);this.set("visible",!0)},triggerAction:w.createMethodDelegate("triggerAction"),_actionChangeListener:function(a){this._handleRegistry.remove(p.actionsChange);
a&&this._handleRegistry.add([a.on("change",function(){var a=this.viewModel;this._updateActions(a.actions,a.features,a.selectedFeature)}.bind(this))],p.actionsChange)},_actionEvent:function(a){var b=this.viewModel;if(a=g.get(a,"data-action-index"))a=parseInt(a,10),b.triggerAction(a)},_addContent:function(){var a=this.viewModel;this._updateSelectedFeature(a.selectedFeature);this._updateContent(a.content);this._updateTitle(a.title);this._updatePageText(a.features,a.selectedFeatureIndex)},_updateActions:function(a,
b,d){this._updateActionButtons(a,d);this._updateFooterVisibility(b,a);this.reposition()},_updateActionButtons:function(a,b){this._handleRegistry.remove(p.actions);if(this._actionsNode){var d=document.createDocumentFragment(),F=a.length;F&&a.forEach(function(a,S){"zoom-to"===a.id&&(a.title=this._i18n.zoom,a.className=c.iconZoom);var h=a.title,k=a.className,v=a.image;!v&&!k&&(v=R);var q=b&&b.attributes;q&&(h=h?s.substitute(q,h):"",k=k?s.substitute(q,k):null,v=v?s.substitute(q,v):null);var e=n.create("div",
{tabindex:"0",title:h},d);g.set(e,"data-action-index",S);f.add(e,[c.button,c.action]);var u=n.create("span",{"aria-hidden":!0},e);f.add(u,c.icon);k&&f.add(u,k);v&&(f.add(u,c.actionImage),z.set(u,"background-image","url("+v+")"));h={className:c.actionText,textContent:h};F>=this._hideActionsTextNum&&(h.className=c.iconText);var m=n.create("span",h,e);this._handleRegistry.add([l.init(a,"visible",function(a){f.toggle(e,c.hidden,!a)}),l.init(a,"className",function(a,b){q&&(a=s.substitute(q,a),b=s.substitute(q,
b));f.remove(u,b);f.add(u,a)}),l.init(a,"image",function(a){q&&(a=s.substitute(q,a));f.toggle(u,c.actionImage,!!a);z.set(u,"background-image",a?"url("+a+")":"")}),l.init(a,"title",function(a){q&&(a=s.substitute(q,a));a=a||"";g.set(e,"title",a);g.set(m,"textContent",a)})],p.actions)},this);n.place(d,this._actionsNode,"only")}},_getLocationScreenPoint:function(){var a=this.viewModel,b;if(a.location&&this.visible){var d=a.location;d&&a.get("view.ready")&&(b=a.view.toScreen(d))}return b},_calculatePosition:function(a,
b,d){var c=this.alignment,r,f,h=null,k=null,e=null,g=null;if(a&&b&&d){f=b.pointer.height;var l=b.pointer.width;r=b.popup.height;if("top"===c||"bottom"===c)r+=f;b=b.popup.width;if("left"===c||"right"===c)b+=l;var m=b/2,n=r/2;switch(c){case "bottom":h=a.y+f;k=a.x-m;c=m;f=r;break;case "left":h=a.y-n;g=d.width-a.x+l;c=b;f=n;break;case "right":h=a.y-n;k=a.x+l;c=b;f=n;break;default:e=d.height-a.y+f,k=a.x-m,c=m,f=r}d=d.padding;d=this.dockEnabled?{left:d.left?d.left+"px":"",top:d.top?d.top+"px":"",right:d.right?
d.right+"px":"",bottom:d.bottom?d.bottom+"px":""}:{top:null!==h?h+"px":"auto",left:null!==k?k+"px":"auto",bottom:null!==e?e+"px":"auto",right:null!==g?g+"px":"auto"};return{height:r,width:b,box:{top:null!==h?h:a.y-f,left:null!==k?k:a.x-c,bottom:null!==e?e:a.y+f,right:null!==g?g:a.x+c},style:d}}},_createPopupRendererVMs:function(a){this._destroyPopupRendererVMs();a&&1<a.length&&a.forEach(function(a,d){var c=new N({contentEnabled:!1,graphic:a});this._popupRendererVMs.push(c)},this)},_destroyPopupRendererVMs:function(){this._handleRegistry.remove(p.paginationTitles);
this._popupRendererVMs.forEach(function(a){a.destroy()});this._popupRendererVMs.length=0},_createPaginationNodes:function(a,b){this._handleRegistry.remove(p.paginationTitles);if(a){var d=a.length;this._paginationNode&&g.set(this._paginationNode,"innerHTML","");1<d&&(d=s.substitute({total:d},this._i18n.selectedFeatures),g.set(this._pageMenuInfoNode,"textContent",d),a.forEach(function(a,d){var e=this._i18n.untitled,h=n.create("li",{role:"menu-item",className:c.featureMenuItem},this._paginationNode);
d===b?(g.set(h,"aria-label",C.selectedFeature),f.add(h,c.featureMenuSelected)):g.set(h,"data-feature-index",d);var k=n.create("span",{className:c.featureMenuTitle,innerHTML:e},h);if(e=this._popupRendererVMs[d])e=l.init(e,"title",function(a){g.set(k,"innerHTML",a)}),this._handleRegistry.add(e,p.paginationTitles);d===b&&n.create("span",{className:c.iconCheckMark},k)},this))}},_createMessage:function(a,b){this._destroyMessage();a&&b&&(this._message=new P({visible:!1,text:this._i18n.noFeaturesFound,viewModel:{view:b}}),
this._message.startup(),n.place(this._message.domNode,b.root))},_createSpinner:function(a,b){this._destroySpinner();a&&b&&(this._spinner=new O({visible:!1,viewModel:{view:b}}),this._spinner.startup(),n.place(this._spinner.domNode,b.root))},_updateContent:function(a){a&&a.nodeName?(n.place(a,this._contentStorage),n.place(a,this._bodyContentNode,"only")):"string"===typeof a&&(this._destroyPopupRenderer(),g.set(this._bodyContentNode,"innerHTML",a));this._bodyContentNode.scrollTop=0;f.toggle(this._containerNode,
c.hasPopupRenderer,!!(this._popupRenderer&&this._popupRenderer.viewModel.content===a));f.toggle(this._containerNode,c.showContent,!!a);f.remove(this._containerNode,c.hasPaginationMenuOpen)},_destroyPopupRenderer:function(){this._popupRenderer&&!this._popupRenderer._destroyed&&(this._handleRegistry.remove(p.popupRenderer),this._popupRenderer.destroy(),this._popupRenderer=null)},_destroyMessage:function(){this._message&&(this._message.destroyRendering(),this._message.destroy(),this._message=null)},
_destroySpinner:function(){this._spinner&&(this._spinner.destroyRendering(),this._spinner.destroy(),this._spinner=null)},_setDockEnabledForViewSize:function(a){a.breakpoint&&this.set("dockEnabled",this._shouldDockAtCurrentViewSize(a))},_togglePopupDocking:function(a){f.remove(this._containerNode,c.hasPaginationMenuOpen);f.toggle(this._containerNode,c.isDocked,!!a);g.set(this._dockNode,"title",a?this._i18n.undock:this._i18n.dock);this._updateDockPosition(this.dockOptions)},_dockingThresholdCrossed:function(a,
b,d){var c=a[0];a=a[1];var f=b[0];b=b[1];var e=d.width;d=d.height;return c<=e&&f>e||c>e&&f<=e||a<=d&&b>d||a>d&&b<=d},_determineDockPosition:function(a){var b=this.viewModel,d=b.view,c=d&&d.padding,c=d&&d.width-c.left-c.right;return(b=d&&b.get("view.breakpoints"))&&c<=b.xsmall?a.bottomCenter:!this.isLeftToRight()?a.topLeft:a.topRight},_updateDockPosition:function(a){f.remove(this._containerNode,[c.isDockedTopLeft,c.isDockedTopCenter,c.isDockedTopRight,c.isDockedBottomLeft,c.isDockedBottomCenter,c.isDockedBottomRight,
c.canDockToTop,c.canDockToBottom,c.canDockToLeft,c.canDockToRight]);var b,d,e;b=a.position;b=b===t.auto?this._determineDockPosition(t):"function"===typeof b?b.call(this):b;switch(b){case t.topLeft:d=c.isDockedTopLeft;e=c.canDockToLeft;break;case t.topCenter:d=c.isDockedTopCenter;e=c.canDockToTop;break;case t.bottomLeft:d=c.isDockedBottomLeft;e=c.canDockToLeft;break;case t.bottomCenter:d=c.isDockedBottomCenter;e=c.canDockToBottom;break;case t.bottomRight:d=c.isDockedBottomRight;e=c.canDockToRight;
break;default:d=c.isDockedTopRight,e=c.canDockToRight}f.toggle(this._containerNode,e,!!a.buttonEnabled);this.dockEnabled?(f.add(this._containerNode,d),this._set("currentDockPosition",b)):this._set("currentDockPosition",null);this._popupRenderer&&this._popupRenderer.resize();this.reposition()},_toggleDockButton:function(a){var b=this._containerNode;f.toggle(b,c.showDock,!!a.buttonEnabled);f.toggle(b,c.isDocked,!!this.dockEnabled);this._updateDockPosition(a)},_updateFooterVisibility:function(a,b){var d=
this._isPaginationEnabled(a)||b&&b.length;f.toggle(this._containerNode,c.showFooter,!!d)},_isPaginationEnabled:function(a){return this.paginationEnabled&&a&&1<a.length},_updatePagination:function(a,b){this._updatePageText(a,b);this._createPaginationNodes(a,b);f.toggle(this._containerNode,c.showPagination,this._isPaginationEnabled(a))},_displayPendingFeaturesStatus:function(a,b,d,e){var r=0<a&&0===b;a&&(d.length&&a===d.length)&&this.set("visible",!1);f.toggle(this._containerNode,c.hasPendingPromises,
!!a);f.toggle(this._containerNode,c.isPendingPromisesResult,!!r);f.toggle(this._containerNode,c.hasPromiseFeatures,!!b);this._message&&this._message.set({visible:!1});r?this._spinner&&(this._spinner.set({visible:!0}),this._spinner.viewModel.point=e):(this._spinner&&(this._spinner.viewModel.point=null),b&&!this.visible&&this.set("visible",!0),!b&&(d&&d.length)&&this._message&&(this._message.set({visible:!0}),this._message.viewModel.point=e))},_moveIntoView:function(){var a=new K;setTimeout(a.resolve.bind(this),
this._animationDelay);return a.then(function(){if(!this._destroyed){var a=this.viewModel,d=this.get("viewModel.view");if(a&&d&&d.stationary){var c=this._getLocationScreenPoint();if(c){var e=this._sizePopup(),e=this._calculatePosition(c,e,d),f=d.width,h=d.height,k=d.padding,g=d.ui.padding;if(this.autoPanEnabled){if(c.y<k.top||c.y>h-k.bottom||c.x<k.left||c.x>f-k.right)return a.centerAtLocation();if(!this.dockEnabled&&e&&e.width<d.width&&e.height<d.height){var l=c=0;e.box.top<k.top?l=-e.box.top+g.top+
k.top:e.box.bottom>h-k.bottom&&(l=-(e.box.bottom-h+k.bottom)-g.bottom);e.box.left<k.left?c=e.box.left-g.left-k.left:e.box.right>f-k.right&&(c=e.box.right-f+k.right+g.right);if(c||l)return e=A.translateBy(A.create(),d.viewpoint,[c,l]),d.goTo(e,a.animationOptions)}}}}}}.bind(this))},_positionPopup:function(){var a=this.viewModel.view;if(a){f.remove(this._containerNode,[c.alignTop,c.alignBottom,c.alignLeft,c.alignRight]);var b;switch(this.alignment){case "bottom":b=c.alignBottom;break;case "right":b=
c.alignRight;break;case "left":b=c.alignLeft;break;default:b=c.alignTop}f.add(this._containerNode,b);b=this._getLocationScreenPoint();var d=this._sizePopup();(a=(a=this._calculatePosition(b,d,a))&&a.style)&&z.set(this._containerNode,a)}},_removeContent:function(){this._destroyPopupRenderer();g.set(this._bodyContentNode,"innerHTML","");g.set(this._titleNode,"innerHTML","");g.set(this._pageTextNode,"innerHTML","");g.set(this._pageTextDockedNode,"innerHTML","");f.remove(this._containerNode,[c.showTitle,
c.showContent])},_keyupFeature:function(a,b){var d=a.keyCode;if(d===y.UP_ARROW||d===y.DOWN_ARROW){a.stopPropagation();a.preventDefault();var c=B("li",this._paginationNode),e=c.length,f=c.indexOf(b),h;d===y.UP_ARROW?h=f-1:d===y.DOWN_ARROW&&(h=f+1);0>h?h=e-1:h>=e&&(h=0);c[h].focus()}},_selectFeature:function(a){var b=this.viewModel,d=-1;(a=g.get(a,"data-feature-index"))&&(d=parseInt(a,10));-1!==d&&(b.selectedFeatureIndex=d);f.remove(this._containerNode,c.hasPaginationMenuOpen);this._pageMenuNode.focus()},
_updateSelectedFeature:function(a){var b=this.viewModel,d,c="",f="";if(a){if(d=a.layer)c=d.id||"",f=d.title||"";if(!this._popupRenderer||this._popupRenderer&&this._popupRenderer._destroyed){this._handleRegistry.remove(p.popupRenderer);this._popupRenderer=new M;d=this._popupRenderer.viewModel.watch("title",function(a){b.title=a});var l=this._popupRenderer.viewModel.watch("content",function(a){b.content=a?this._popupRenderer.domNode:null}.bind(this)),h=e(this._popupRenderer,"resize",this.reposition.bind(this));
this._handleRegistry.add([d,l,h],p.popupRenderer);this._popupRenderer.startup()}this._popupRenderer.viewModel.graphic=a}this._toggleFeatureUpdatedClass();g.set(this._containerNode,"data-layer-title",f);g.set(this._containerNode,"data-layer-id",c);this.reposition()},_updateFeatures:function(a){var b=this.viewModel;this._createPopupRendererVMs(a);this._updatePagination(a,b.selectedFeatureIndex);this._updateFooterVisibility(a,b.actions);this.reposition()},_shouldDockAtCurrentViewSize:function(a){var b=
this.viewModel;a=a.breakpoint;return b.view&&(a.hasOwnProperty("width")&&b.view.ui.width<=a.width||a.hasOwnProperty("height")&&b.view.ui.height<=a.height)},_sizePopup:function(){var a=D.getContentBox(this._containerNode),b=D.getContentBox(this._pointerNode);return{popup:{height:a.h,width:a.w},pointer:{height:b.h,width:b.w}}},_updateTitle:function(a){a=a||"";g.set(this._titleNode,"innerHTML",a);f.toggle(this._containerNode,c.showTitle,!!a);f.remove(this._containerNode,c.hasPaginationMenuOpen)},_toggleDock:function(){this.set("dockEnabled",
!this.dockEnabled)},_togglePageMenu:function(){f.toggle(this._containerNode,c.hasPaginationMenuOpen);var a=f.contains(this._containerNode,c.hasPaginationMenuOpen);g.set(this._pageMenuSectionNode,"aria-hidden",!a);var b=B("li",this._paginationNode),d=b[0];b.forEach(function(b){g.set(b,"tabIndex",a?"0":"")});a?d&&d.focus():this._pageMenuNode.focus()},_updatePageText:function(a,b){var c="";this._isPaginationEnabled(a)&&(c=s.substitute({index:b+1,total:a.length},this._i18n.pageText));this._pageTextNode&&
g.set(this._pageTextNode,{textContent:c});this._pageTextDockedNode&&g.set(this._pageTextDockedNode,{textContent:c})},_toggleFeatureUpdatedClass:function(){f.remove(this._containerNode,c.hasFeatureUpdated);this._containerNode.offsetWidth=this._containerNode.offsetWidth;f.add(this._containerNode,c.hasFeatureUpdated)},_viewPointChanged:function(){this.closeOnViewChangeEnabled?this.close():this._positionPopup()},_wireUpView:function(a){this._handleRegistry.remove(p.view);this._viewPointEvent=null;if(a){var b=
"viewpoint";"3d"===a.type&&(b="camera");this._viewPointEvent=l.pausable(a,b,this._viewPointChanged.bind(this));this._handleRegistry.add([a.watch("padding",this.reposition.bind(this)),a.watch("size",this._updateDockEnabledForViewSize.bind(this)),e(a,"resize",this.reposition.bind(this)),this._viewPointEvent],p.view);this._togglePopupLocationRepositioning(this.visible);this._createMessage(this.messageEnabled,a);this._createSpinner(this.spinnerEnabled,a);this._setDockEnabledForViewSize(this.dockOptions);
this._toggleDockButton(this.dockOptions);this.reposition()}},_updateDockEnabledForViewSize:function(a,b){var c=this.get("viewModel.view.padding"),e=c.left+c.right,f=c.top+c.bottom,c=[],g=[];c[0]=a[0]-e;c[1]=a[1]-f;g[0]=b[0]-e;g[1]=b[1]-f;e=this.dockOptions;this._dockingThresholdCrossed(c,g,e.breakpoint)&&this._setDockEnabledForViewSize(e);this._updateDockPosition(e)},_togglePopupLocationRepositioning:function(a){var b=this.viewModel;this._viewPointEvent&&(a&&b.location&&!this.dockEnabled?this._viewPointEvent.resume():
this._viewPointEvent.pause())},_toggleContentVisibility:function(a){a?this._addContent():this._removeContent()}})});