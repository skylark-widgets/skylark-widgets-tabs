/**
 * skylark-widgets-tabs - The skylark tabs widgets library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-tabs/
 * @license MIT
 */
!function(t,e){var s=e.define,require=e.require,i="function"==typeof s&&s.amd,n=!i&&"undefined"!=typeof exports;if(!i&&!s){var a={};s=e.define=function(t,e,s){"function"==typeof s?(a[t]={factory:s,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var s=e.split("/"),i=t.split("/");s.pop();for(var n=0;n<i.length;n++)"."!=i[n]&&(".."==i[n]?s.pop():s.push(i[n]));return s.join("/")}(e,t)}),resolved:!1,exports:null},require(t)):a[t]={factory:null,resolved:!0,exports:s}},require=e.require=function(t){if(!a.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=a[t];if(!module.resolved){var s=[];module.deps.forEach(function(t){s.push(require(t))}),module.exports=module.factory.apply(e,s)||null,module.resolved=!0}return module.exports}}if(!s)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-widgets-tabs/tabs",["skylark-langx/skylark"],function(t){return t.attach("widgets.tabs",{splittable:{}})}),t("skylark-widgets-tabs/TabButton",["skylark-devices-points/mouse","skylark-widgets-base/Widget","./tabs"],function(t,e,s){"use strict";var i=e.inherit({klassName:"TabButton",_construct:function(s,n){e.prototype._construct.call(this,s,"div");var a=this;this._elm.draggable=!0,this._elm.style.cursor="pointer",this._elm.style.boxSizing="border-box";var o=this.getSkin();this._elm.style.backgroundColor=o.buttonColor,this.tab=n,this.icon=document.createWidget("img"),this.icon.style.pointerEvents="none",this.icon.style.position="absolute",this.icon.src=n.icon,this._elm.appendChild(this.icon),this.text=document.createWidget("div"),this.text.style.position="absolute",this.text.style.overflow="hidden",this.text.style.textAlign="center",this.text.style.pointerEvents="none",this.text.style.textOverflow="ellipsis",this.text.style.whiteSpace="nowrap",this.text.style.color=o.textColor,this._elm.appendChild(this.text),this.title=document.createTextNode(n.title),this.text.appendChild(this.title),this.close=document.createWidget("img"),this.close.draggable=!1,this.close.style.position="absolute",this.close.style.opacity=.5,this.close.style.display=n.closeable?"block":"none",this.close.src=o.closeIconUrl,this._elm.appendChild(this.close),this.close.onmouseenter=function(){this.style.opacity=1},this.close.onmouseleave=function(){this.style.opacity=.5},this.close.onclick=function(){a.tab.close()};var l=i.NONE;this._elm.ondragstart=function(t){t.dataTransfer.setData("tab",a.tab.index),l=i.NONE},this._elm.ondrop=function(t){t.preventDefault(),this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null;var e=t.dataTransfer.getData("tab");""!==e&&(e=parseInt(e))!==a.tab.index&&(l===i.PREVIOUS?a.tab.container.moveTabIndex(e,e<a.tab.index?a.tab.index-1:a.tab.index):l===i.NEXT&&a.tab.container.moveTabIndex(e,e<a.tab.index?a.tab.index:a.tab.index+1))},this._elm.ondragover=function(t){a.tab.container.placement===TabGroup.TOP||a.tab.container.placement===TabGroup.BOTTOM?t.layerX>.8*a.size.x||t.target!==this?l!==i.NEXT&&(l=i.NEXT,this.style.borderLeft=null,this.style.borderRight="thick solid #999999"):t.layerX<.2*a.size.x?l!==i.PREVIOUS&&(l=i.PREVIOUS,this.style.borderRight=null,this.style.borderLeft="thick solid #999999"):l!==i.NONE&&(l=i.NONE,this.style.borderLeft=null,this.style.borderRight=null):t.layerY>.7*a.size.y||t.target!==this?l!==i.NEXT&&(l=i.NEXT,this.style.borderTop=null,this.style.borderBottom="solid #999999"):t.layerY<.3*a.size.y?l!==i.PREVIOUS&&(l=i.PREVIOUS,this.style.borderBottom=null,this.style.borderTop="solid #999999"):l!==i.NONE&&(l=i.NONE,this.style.borderBottom=null,this.style.borderTop=null)},this._elm.ondragend=function(t){t.preventDefault(),l=i.NONE,this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null},this._elm.ondragleave=function(t){t.preventDefault(),l=i.NONE,this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null},this._elm.onmousedown=function(e){e.which;t.isLeftMouseButton(e)?a.tab.container.selectTab(a.tab):n.closeable&&t.isMiddleMouseButton(e)&&a.tab.container.removeTab(a.tab)},this._elm.onmouseenter=function(){this.style.backgroundColor=o.buttonOverColor},this._elm.onmouseleave=function(){n.isSelected()?this.style.backgroundColor=o.buttonOverColor:this.style.backgroundColor=o.buttonColor}},setIcon:function(t){this.tab.icon=t,this.icon.src=t},setName:function(t){this.tab.title=t,this.title.data=t},updateSelection:function(){var t=this.getSkin();this._elm.style.backgroundColor=this.tab.isSelected()?t.buttonOverColor:t.buttonColor},updateSize:function(){e.prototype.updateSize.call(this),this.icon.style.top=.2*this.size.y+"px",this.icon.style.left=.2*this.size.y+"px",this.icon.style.width=.6*this.size.y+"px",this.icon.style.height=.6*this.size.y+"px",this.text.style.left=this.size.y+"px",this.text.style.top=(this.size.y-12)/2+"px",this.text.style.width=this.size.x-2*this.size.y+"px",this.text.style.height=this.size.y+"px",!0===this.tab.closeable?(this.close.style.width=.4*this.size.y+"px",this.close.style.height=.4*this.size.y+"px",this.close.style.top=.3*this.size.y+"px",this.close.style.right=.3*this.size.y+"px",this.close.style.display="block"):this.close.style.display="none",this.updateSelection()}});return i.NONE=0,i.PREVIOUS=1,i.NEXT=2,s.TabButton=i}),t("skylark-widgets-tabs/TabElement",["skylark-langx-strings","skylark-widgets-base/panels/Panel","./tabs"],function(t,e,s){"use strict";var i=e.inherit({klassName:"TabElement",_construct:function(s,i,n,a,o,l){e.prototype._construct.call(this,s);var r=this.getSkin();this._elm.style.overflow="visible",this._elm.style.backgroundColor=r.panelColor,this.preventDragEvents(),this.container=n,this.uuid=t.generateUUID(),this.index=a,this.button=null,this.closeable=i,this.title=o,this.icon=l,this.active=!1},updateMetadata:function(){},updateSettings:function(){},updateValues:function(){},updateObjectsView:function(){},updateSelection:function(){},activate:function(){if(!0===this.active&&this.deactivate(),void 0!==this.update){var t=this,e=function(){t.update(),!0===t.active&&requestAnimationFrame(e)};requestAnimationFrame(e)}this.active=!0},deactivate:function(){this.active=!1},attach:function(t){},isAttached:function(t){return!1},close:function(){this.container.removeTab(this)},select:function(){this.container.selectTab(this)},isSelected:function(){return this===this.container.selected},setIcon:function(t){this.icon=t,this.button.setIcon(t)},setName:function(t){this.title=t,this.button.setName(t)},destroy:function(){e.prototype.destroy.call(this),null!==this.button&&this.button.destroy()}});return s.TabElement=i}),t("skylark-widgets-tabs/TabGroup",["skylark-langx-numerics/Vector2","skylark-widgets-base/dnd/DragBuffer","skylark-widgets-base/Widget","skylark-widgets-base/panels/Panel","./tabs","./TabElement","./TabButton"],function(t,e,s,i,n,a,o){"use strict";var l=i.inherit({klassName:"TabGroup",_construct:function(s,n){i.prototype._construct.call(this,s);var o=this,r=this.getSkin();this._elm.style.overflow="visible",this._elm.style.backgroundColor=r.panelColor,this.preventDragEvents(),this.buttons=new i(this),this.buttons.element.style.backgroundColor=r.barColor,this.buttons.element.ondrop=function(t){t.preventDefault();var s=t.dataTransfer.getData("uuid"),i=e.get(s);i instanceof a&&(o.attachTab(i),e.pop(s))},this.tab=new i(this),this.empty=document.createElement("div"),this.empty.style.position="absolute",this.empty.style.textAlign="center",this.empty.style.display="none",this.empty.style.width="100%",this.empty.style.height="100%",this.empty.style.flexDirection="column",this.empty.style.justifyContent="center",this.empty.style.pointerEvents="none",this.empty.appendChild(document.createTextNode(Locale.openTabToEditContent)),this._elm.appendChild(this.empty),this.selected=null,this.buttonSize=new t(150,22),this.placement=void 0!==n?n:l.TOP,this.setPlacement(this.placement),this.items=[],this.focused=!1,this._elm.onmouseenter=function(){o.focused=!0},this._elm.onmouseleave=function(){o.focused=!1}},updateMetadata:function(){for(var t=0;t<this.items.length;t++)this.items[t].updateMetadata()},updateObjectsView:function(){for(var t=0;t<this.items.length;t++)this.items[t].updateObjectsView()},attachTab:function(t,e){return t.container.removeTab(t.index,!0),t.container=this,t.button.setParent(this.buttons),t.setParent(this.tab),void 0!==e?(t.index=e,this.items.splice(e,0,t)):(t.index=this.items.length,this.items.push(t)),null===this.selected&&this.selectTab(t),this.updateItemIndex(),this.updateInterface(),t},moveTabIndex:function(t,e){var s=this.items[t];this.items.splice(t,1),this.items.splice(e,0,s),this.updateItemIndex(),this.updateInterface()},updateSelection:function(){for(var t=0;t<this.items.length;t++)this.items[t].updateSelection()},updateSettings:function(){for(var t=0;t<this.items.length;t++)this.items[t].updateSettings()},getActiveTab:function(){return null!==this.selected?this.selected:null},closeActual:function(){null!==this.selected&&this.selected.closeable&&(this.selected.deactivate(),this.removeTab(this.selected))},selectTab:function(t){null!==this.selected&&this.selected.deactivate(),t instanceof a?(this.selected=t,this.selected.activate()):"number"==typeof t&&t>-1&&t<this.items.length?(this.selected=this.items[t],this.selected.activate()):this.selected=null,this.empty.style.display=null===this.selected?"flex":"none",this.updateInterface()},selectNextTab:function(){this.items.length>0&&this.selectTab((this.selected.index+1)%this.items.length)},selectPreviousTab:function(){this.items.length>0&&(0===this.selected.index?this.selectTab(this.items.length-1):this.selectTab(this.selected.index-1))},addTab:function(t,e){var s=new t(this.tab,e,this,this.items.length);return s.button=new o(this.buttons,s),this.items.push(s),null===this.selected||1===this.items.length?this.selectTab(s):this.updateInterface(),s},getTab:function(t,e){for(var s=0;s<this.items.length;s++)if(this.items[s]instanceof t&&(void 0===e||this.items[s].isAttached(e)))return this.items[s];return null},removeTab:function(t,e){if("object"==typeof t&&(t=this.items.indexOf(t)),t>-1&&t<this.items.length){var s=this.items[t];return!0!==e&&s.destroy(),this.items.splice(t,1),this.updateItemIndex(),this.selected===s&&this.items.length>0?this.selectTab(0!==t?t-1:0):this.selectTab(null),s}return null},clear:function(t){if(!0===t){for(;this.items.length>0;)this.items.pop().destroy();this.selectTab(null)}else{for(var e=0;e<this.items.length;)this.items[e].closeable?(this.items[e].destroy(),this.items.splice(e,1)):e++;var s=this.items.indexOf(this.selected);-1===s&&this.items.length>0&&this.selectTab(0)}},updateItemIndex:function(){for(var t=0;t<this.items.length;t++)this.items[t].index=t},setPlacement:function(t){this.placement=t},updateSize:function(){i.prototype.updateSize.call(this);var t=this.size.clone(),e=this.buttonSize.clone(),s=this.buttonSize.clone();this.placement===l.TOP||this.placement===l.BOTTOM?(e.x*this.items.length>this.size.x&&(e.x=this.size.x/this.items.length,s.x=e.x),t.y-=this.buttonSize.y,s.y=0):this.placement!==l.LEFT&&this.placement!==l.RIGHT||(e.y*this.items.length>this.size.y&&(e.y=this.size.y/this.items.length,s.y=e.y),t.x-=this.buttonSize.x,s.x=0);for(var n=0;n<this.items.length;n++){var a=this.items[n];a.visible=this.selected===a,a.size.copy(t),a.updateInterface();var o=a.button;o.size.copy(e),o.position.copy(s),o.position.multiplyScalar(n),o.updateInterface()}this.tab.size.copy(t),this.tab.updateSize(),this.placement===l.TOP?(this.buttons.position.set(0,0),this.buttons.updatePosition(),this.buttons.size.set(this.size.x,this.buttonSize.y),this.buttons.updateSize(),this.tab.position.set(0,this.buttonSize.y),this.tab.updatePosition()):this.placement===l.BOTTOM?(this.buttons.position.set(0,this.size.y-this.buttonSize.y),this.buttons.updatePosition(),this.buttons.size.set(this.size.x,this.buttonSize.y),this.buttons.updateSize(),this.tab.position.set(0,0),this.tab.updatePosition()):this.placement===l.LEFT?(this.buttons.position.set(0,0),this.buttons.updatePosition(),this.buttons.size.set(this.buttonSize.x,this.size.y),this.buttons.updateSize(),this.tab.position.set(this.buttonSize.x,0),this.tab.updatePosition()):this.placement===l.RIGHT&&(this.buttons.position.set(this.size.x-this.buttonSize.x,0),this.buttons.updatePosition(),this.buttons.size.set(this.buttonSize.x,this.size.y),this.buttons.updateSize(),this.tab.position.set(0,0),this.tab.updatePosition())}});return l.TOP=0,l.BOTTOM=1,l.LEFT=2,l.RIGHT=3,n.TabGroup=l}),t("skylark-widgets-tabs/splittable/TabButtonSplit",["skylark-devices-points/mouse","skylark-widgets-base/dnd/DragBuffer","skylark-widgets-base/Widget","../tabs","../TabElement","../TabGroup"],function(t,e,s,i,n,a){"use strict";var o=s.inherit({klassName:"TabButtonSplit",_construct:function(i,l){s.prototype._construct.call(this,i,"div");var r=this;this._elm.draggable=!0,this._elm.style.cursor="pointer",this._elm.style.boxSizing="border-box";var h=this.getSkin();this._elm.style.backgroundColor=h.buttonColor,this.tab=l,this.icon=document.createElement("img"),this.icon.style.pointerEvents="none",this.icon.style.position="absolute",this.icon.src=l.icon,this._elm.appendChild(this.icon),this.text=document.createElement("div"),this.text.style.position="absolute",this.text.style.overflow="hidden",this.text.style.textAlign="center",this.text.style.pointerEvents="none",this.text.style.textOverflow="ellipsis",this.text.style.whiteSpace="nowrap",this.text.style.color=Editor.theme.textColor,this._elm.appendChild(this.text),this.title=document.createTextNode(l.title),this.text.appendChild(this.title),this.close=document.createElement("img"),this.close.draggable=!1,this.close.style.position="absolute",this.close.style.opacity=.5,this.close.style.display=l.closeable?"block":"none",this.close.src=Global.FILE_PATH+"icons/misc/close.png",this._elm.appendChild(this.close),this.close.onmouseenter=function(){this.style.opacity=1},this.close.onmouseleave=function(){this.style.opacity=.5},this.close.onclick=function(){r.tab.close()};var c=o.NONE;this._elm.ondragstart=function(t){t.dataTransfer.setData("uuid",r.tab.uuid),e.push(r.tab),t.dataTransfer.setData("tab",r.tab.index),c=o.NONE},this._elm.ondrop=function(t){t.preventDefault(),this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null;var s=t.dataTransfer.getData("uuid"),i=e.get(s);if(i instanceof n)if(i.container===r.tab.container){var a=t.dataTransfer.getData("tab");(a=parseInt(a))!==r.tab.index&&(c===o.PREVIOUS?r.tab.container.moveTabIndex(a,a<r.tab.index?r.tab.index-1:r.tab.index):c===o.NEXT&&r.tab.container.moveTabIndex(a,a<r.tab.index?r.tab.index:r.tab.index+1),e.pop(s))}else c===o.PREVIOUS?r.tab.container.attachTab(i,r.tab.index):c===o.NEXT&&r.tab.container.attachTab(i,r.tab.index+1),e.pop(s)},this._elm.ondragover=function(t){r.tab.container.placement===a.TOP||r.tab.container.placement===a.BOTTOM?t.layerX>.8*r.size.x||t.target!==this?c!==o.NEXT&&(c=o.NEXT,this.style.borderLeft=null,this.style.borderRight="thick solid #999999"):t.layerX<.2*r.size.x?c!==o.PREVIOUS&&(c=o.PREVIOUS,this.style.borderRight=null,this.style.borderLeft="thick solid #999999"):c!==o.NONE&&(c=o.NONE,this.style.borderLeft=null,this.style.borderRight=null):t.layerY>.7*r.size.y||t.target!==this?c!==o.NEXT&&(c=o.NEXT,this.style.borderTop=null,this.style.borderBottom="solid #999999"):t.layerY<.3*r.size.y?c!==o.PREVIOUS&&(c=o.PREVIOUS,this.style.borderBottom=null,this.style.borderTop="solid #999999"):c!==o.NONE&&(c=o.NONE,this.style.borderBottom=null,this.style.borderTop=null)},this._elm.ondragend=function(t){t.preventDefault(),e.pop(r.tab.uuid),c=o.NONE,this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null},this._elm.ondragleave=function(t){t.preventDefault(),c=o.NONE,this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null},this._elm.onmousedown=function(e){e.which;t.isLeftMouseButton(e)?r.tab.container.selectTab(r.tab):l.closeable&&t.isMiddleMouseButton(e)&&r.tab.container.removeTab(r.tab)},this._elm.onmouseenter=function(){this.style.backgroundColor=h.buttonOverColor},this._elm.onmouseleave=function(){l.isSelected()?this.style.backgroundColor=h.buttonOverColor:this.style.backgroundColor=h.buttonColor}},setIcon:function(t){this.tab.icon=t,this.icon.src=t},setName:function(t){this.tab.title=t,this.title.data=t},updateSelection:function(){var t=this.getSkin();this._elm.style.backgroundColor=this.tab.isSelected()?t.buttonOverColor:t.buttonColor},updateSize:function(){s.prototype.updateSize.call(this),this.icon.style.top=.2*this.size.y+"px",this.icon.style.left=.2*this.size.y+"px",this.icon.style.width=.6*this.size.y+"px",this.icon.style.height=.6*this.size.y+"px",this.text.style.left=this.size.y+"px",this.text.style.top=(this.size.y-12)/2+"px",this.text.style.width=this.size.x-2*this.size.y+"px",this.text.style.height=this.size.y+"px",!0===this.tab.closeable?(this.close.style.width=.4*this.size.y+"px",this.close.style.height=.4*this.size.y+"px",this.close.style.top=.3*this.size.y+"px",this.close.style.right=.3*this.size.y+"px",this.close.style.display="block"):this.close.style.display="none",this.updateSelection()}});return o.NONE=0,o.PREVIOUS=1,o.NEXT=2,i.splittable.TabButtonSplit=o}),t("skylark-widgets-tabs/splittable/TabContainer",["skylark-widgets-base/panels/Panel","../tabs","../TabGroup"],function(t,e,s){"use strict";var i=t.inherit({klassName:"TabContainer",_construct:function(e){t.prototype._construct.call(this,e),this.group=null},split:function(t){return this.group.split(t)},attach:function(t){this.group=t,this.group.setParent(this)},updateSize:function(){t.prototype.updateSize.call(this),null!==this.group&&(this.group.position.set(0,0),this.group.size.copy(this.size),this.group.updateInterface())},updateMetadata:function(){this.group.updateMetadata()},updateObjectsView:function(){this.group.updateObjectsView()},updateSelection:function(){this.group.updateSelection()},updateSettings:function(){this.group.updateSettings()},getActiveTab:function(){var t=[];if(this.group instanceof s){var e=this.group.getActiveTab();null!==e&&t.push(e)}else t=t.concat(this.group.getActiveTab());return this.group.getActiveTab()},closeActual:function(){this.group.closeActual()},selectTab:function(t){this.group.selectTab(t)},selectNextTab:function(){this.group.selectNextTab()},selectPreviousTab:function(){this.group.selectPreviousTab()},addTab:function(t,e){return this.group.addTab(t,e)},getTab:function(t,e){return this.group.getTab(t,e)},clear:function(t){this.group.clear()}});return e.splittable.TabContainer=i}),t("skylark-widgets-tabs/splittable/TabDualContainer",["skylark-widgets-base/panels/DualContainer","../tabs","../TabGroup"],function(t,e,s){"use strict";var i=t.inherit({_construct:function(e){t.prototype._construct.call(this,e),this._elm.style.overflow="visible"},updateMetadata:function(){this._elmA.updateMetadata(),this._elmB.updateMetadata()},updateObjectsView:function(){this._elmA.updateObjectsView(),this._elmB.updateObjectsView()},updateSelection:function(){this._elmA.updateSelection(),this._elmB.updateSelection()},updateSettings:function(){this._elmA.updateSettings(),this._elmB.updateSettings()},getActiveTab:function(){var t=[];if(this._elmA instanceof s){var e=this._elmA.getActiveTab();null!==e&&t.push(e)}else t=t.concat(this._elmA.getActiveTab());if(this._elmB instanceof s){var e=this._elmB.getActiveTab();null!==e&&t.push(e),this._elmA.getActiveTab()}else t=t.concat(this._elmB.getActiveTab());return t},closeActual:function(){this._elmA instanceof s&&!this._elmA.focused||this._elmA.closeActual(),this._elmB instanceof s&&!this._elmB.focused||this._elmB.closeActual()},selectTab:function(t){this._elmA.selectTab(t),this._elmB.selectTab(t)},selectNextTab:function(){this._elmA instanceof s&&!this._elmA.focused||this._elmA.selectNextTab(),this._elmB instanceof s&&!this._elmB.focused||this._elmB.selectNextTab()},selectPreviousTab:function(){this._elmA instanceof s&&!this._elmA.focused||this._elmA.selectPreviousTab(),this._elmB instanceof s&&!this._elmB.focused||this._elmB.selectPreviousTab()},addTab:function(t,e){var s=this._elmA.addTab(t,e);return null===s&&(s=this._elmB.addTab(t,e)),s},getTab:function(t,e){var s=this._elmA.getTab(t,e);return null===s&&(s=this._elmB.getTab(t,e)),s},clear:function(t){this._elmA.clear(t),this._elmB.clear(t)}});return e.splittable.TabDualContainer=i}),t("skylark-widgets-tabs/splittable/TabGroupSplit",["skylark-domx-geom","skylark-widgets-base/dnd/DragBuffer","skylark-widgets-base/panels/DualContainer","../tabs","../TabGroup","../TabElement","./TabContainer","./TabDualContainer","./TabButtonSplit"],function(t,e,s,i,n,a,o,l,r){"use strict";var h=n.inherit({klassName:"TabGroupSplit",_construct:function(s,i){n.prototype._construct.call(this,s,i);var o=this;this.dragBorder=.2,this.canSplit=!0,this.canCollapse=!0,this.tabArea=document.createElement("div"),this.tabArea.style.zIndex="1000",this.tabArea.style.position="absolute",this.tabArea.style.backgroundColor="rgba(0.0, 0.0, 0.0, 0.2)",this.tabArea.style.pointerEvents="none",this.tab.element.ondrop=function(s){s.preventDefault();var i=s.dataTransfer.getData("uuid"),l=e.get(i);if(l instanceof a){var r=t.pagePosition(o.element),h=s.clientX-(r.x||r.left),c=s.clientY-(r.y||r.top);h<o.size.x*o.dragBorder?o.split(n.LEFT).attachTab(l):h>o.size.x*(1-o.dragBorder)?o.split(n.RIGHT).attachTab(l):c<o.size.y*o.dragBorder?o.split(n.TOP).attachTab(l):c>o.size.y*(1-o.dragBorder)?o.split(n.BOTTOM).attachTab(l):o.attachTab(l),e.pop(i)}o.tab.element.contains(o.tabArea)&&o.tab.element.removeChild(o.tabArea)},this.tab.element.ondragover=function(s){if(s.preventDefault(),e.buffer[0]instanceof a){var i=t.pagePosition(o.element),n=s.clientX-(i.x||i.left),l=s.clientY-(i.y||i.top);n<o.size.x*o.dragBorder?(o.tabArea.style.right=null,o.tabArea.style.bottom=null,o.tabArea.style.top="0px",o.tabArea.style.left="0px",o.tabArea.style.width="50%",o.tabArea.style.height="100%",o.tab.element.contains(o.tabArea)||o.tab.element.appendChild(o.tabArea)):n>o.size.x*(1-o.dragBorder)?(o.tabArea.style.left=null,o.tabArea.style.bottom=null,o.tabArea.style.top="0px",o.tabArea.style.right="0px",o.tabArea.style.width="50%",o.tabArea.style.height="100%",o.tab.element.contains(o.tabArea)||o.tab.element.appendChild(o.tabArea)):l<o.size.y*o.dragBorder?(o.tabArea.style.right=null,o.tabArea.style.bottom=null,o.tabArea.style.top="0px",o.tabArea.style.left="0px",o.tabArea.style.width="100%",o.tabArea.style.height="50%",o.tab.element.contains(o.tabArea)||o.tab.element.appendChild(o.tabArea)):l>o.size.y*(1-o.dragBorder)?(o.tabArea.style.top=null,o.tabArea.style.right=null,o.tabArea.style.bottom="0px",o.tabArea.style.left="0px",o.tabArea.style.width="100%",o.tabArea.style.height="50%",o.tab.element.contains(o.tabArea)||o.tab.element.appendChild(o.tabArea)):o.tab.element.contains(o.tabArea)&&o.tab.element.removeChild(o.tabArea)}},this.tab.element.ondragleave=function(t){t.preventDefault(),o.tab.element.contains(o.tabArea)&&o.tab.element.removeChild(o.tabArea)}},split:function(t){if(this.canSplit){void 0===t&&(t=n.RIGHT);var e=new l,i=this.parent,a=new h(e,this.placement);return t===n.RIGHT?(e.orientation=s.HORIZONTAL,e.attach(this),e.attach(a)):t===n.LEFT?(e.orientation=s.HORIZONTAL,e.attach(a),e.attach(this)):t===n.BOTTOM?(e.orientation=s.VERTICAL,e.attach(this),e.attach(a)):t===n.TOP&&(e.orientation=s.VERTICAL,e.attach(a),e.attach(this)),i instanceof o?(i.attach(e),i.updateSize()):i instanceof s&&(i.elementA===this?(i.attachA(e),i.updateSize()):i.elementB===this&&(i.attachB(e),i.updateSize())),a}console.warn("nunuStudio: Tab is not splitable.")},collapse:function(){if(this.canCollapse)if(this.parent instanceof s){var t=this.parent.parent,e=this.parent.elementA===this?this.parent.elementB:this.parent.elementA;t instanceof s?t.elementA===this.parent?(this.parent.destroy(),this.destroy(),t.attachA(e)):t.elementB===this.parent&&(this.parent.destroy(),this.destroy(),t.attachB(e)):(this.parent.destroy(),this.destroy(),t.attach(e)),t.updateSize()}else console.warn("nunuStudio: Tab cannot be collapsed (parent is not a dual container).");else console.warn("nunuStudio: Tab is not collapsable.")},attachTab:function(t,e){var s=t.container,t=n.prototype.attachTab.call(this,t,e);return 0===s.items.length&&s.collapse(),t},removeTab:function(t,e){n.prototype.removeTab.call(this,t,e),0===this.items.length&&!0!==e&&this.collapse()},addTab:function(t,e){var s=new t(this.tab,e,this,this.items.length);return s.button=new r(this.buttons,s),s.updateInterface(),this.items.push(s),null===this.selected||1===this.items.length?this.selectTab(s):this.updateInterface(),s}});return i.splittable.TabGroupSplit=h}),t("skylark-widgets-tabs/main",["./tabs","./TabButton","./TabElement","./TabGroup","./splittable/TabButtonSplit","./splittable/TabContainer","./splittable/TabDualContainer","./splittable/TabGroupSplit"],function(t){return t}),t("skylark-widgets-tabs",["skylark-widgets-tabs/main"],function(t){return t})}(s),!i){var o=require("skylark-langx-ns");n?module.exports=o:e.skylarkjs=o}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-widgets-tabs.js.map