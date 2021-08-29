/**
 * skylark-widgets-tabs - The skylark tabs widgets library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-tabs/
 * @license MIT
 */
!function(t,e){var i=e.define,require=e.require,s="function"==typeof i&&i.amd,n=!s&&"undefined"!=typeof exports;if(!s&&!i){var a={};i=e.define=function(t,e,i){"function"==typeof i?(a[t]={factory:i,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var i=e.split("/"),s=t.split("/");i.pop();for(var n=0;n<s.length;n++)"."!=s[n]&&(".."==s[n]?i.pop():i.push(s[n]));return i.join("/")}(e,t)}),resolved:!1,exports:null},require(t)):a[t]={factory:null,resolved:!0,exports:i}},require=e.require=function(t){if(!a.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=a[t];if(!module.resolved){var i=[];module.deps.forEach(function(t){i.push(require(t))}),module.exports=module.factory.apply(e,i)||null,module.resolved=!0}return module.exports}}if(!i)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-widgets-tabs/tabs",["skylark-langx/skylark"],function(t){return t.attach("widgets.tabs",{splittable:{}})}),t("skylark-widgets-tabs/tab-button",["skylark-devices-points/mouse","skylark-widgets-base/widget","./tabs"],function(t,e,i){"use strict";var s=e.inherit({klassName:"TabButton",_construct:function(i,n){e.prototype._construct.call(this,i,"div");var a=this;this._elm.draggable=!0,this._elm.style.cursor="pointer",this._elm.style.boxSizing="border-box";var o=this.getSkin();this._elm.style.backgroundColor=o.buttonColor,this.tab=n,this.icon=document.createWidget("img"),this.icon.style.pointerEvents="none",this.icon.style.position="absolute",this.icon.src=n.icon,this._elm.appendChild(this.icon),this.text=document.createWidget("div"),this.text.style.position="absolute",this.text.style.overflow="hidden",this.text.style.textAlign="center",this.text.style.pointerEvents="none",this.text.style.textOverflow="ellipsis",this.text.style.whiteSpace="nowrap",this.text.style.color=o.textColor,this._elm.appendChild(this.text),this.title=document.createTextNode(n.title),this.text.appendChild(this.title),this.close=document.createWidget("img"),this.close.draggable=!1,this.close.style.position="absolute",this.close.style.opacity=.5,this.close.style.display=n.closeable?"block":"none",this.close.src=o.closeIconUrl,this._elm.appendChild(this.close),this.close.onmouseenter=function(){this.style.opacity=1},this.close.onmouseleave=function(){this.style.opacity=.5},this.close.onclick=function(){a.tab.close()};var l=s.NONE;this._elm.ondragstart=function(t){t.dataTransfer.setData("tab",a.tab.index),l=s.NONE},this._elm.ondrop=function(t){t.preventDefault(),this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null;var e=t.dataTransfer.getData("tab");""!==e&&(e=parseInt(e))!==a.tab.index&&(l===s.PREVIOUS?a.tab.container.moveTabIndex(e,e<a.tab.index?a.tab.index-1:a.tab.index):l===s.NEXT&&a.tab.container.moveTabIndex(e,e<a.tab.index?a.tab.index:a.tab.index+1))},this._elm.ondragover=function(t){a.tab.container.placement===TabGroup.TOP||a.tab.container.placement===TabGroup.BOTTOM?t.layerX>.8*a.size.x||t.target!==this?l!==s.NEXT&&(l=s.NEXT,this.style.borderLeft=null,this.style.borderRight="thick solid #999999"):t.layerX<.2*a.size.x?l!==s.PREVIOUS&&(l=s.PREVIOUS,this.style.borderRight=null,this.style.borderLeft="thick solid #999999"):l!==s.NONE&&(l=s.NONE,this.style.borderLeft=null,this.style.borderRight=null):t.layerY>.7*a.size.y||t.target!==this?l!==s.NEXT&&(l=s.NEXT,this.style.borderTop=null,this.style.borderBottom="solid #999999"):t.layerY<.3*a.size.y?l!==s.PREVIOUS&&(l=s.PREVIOUS,this.style.borderBottom=null,this.style.borderTop="solid #999999"):l!==s.NONE&&(l=s.NONE,this.style.borderBottom=null,this.style.borderTop=null)},this._elm.ondragend=function(t){t.preventDefault(),l=s.NONE,this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null},this._elm.ondragleave=function(t){t.preventDefault(),l=s.NONE,this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null},this._elm.onmousedown=function(e){e.which;t.isLeftMouseButton(e)?a.tab.container.selectTab(a.tab):n.closeable&&t.isMiddleMouseButton(e)&&a.tab.container.removeTab(a.tab)},this._elm.onmouseenter=function(){this.style.backgroundColor=o.buttonOverColor},this._elm.onmouseleave=function(){n.isSelected()?this.style.backgroundColor=o.buttonOverColor:this.style.backgroundColor=o.buttonColor}},setIcon:function(t){this.tab.icon=t,this.icon.src=t},setName:function(t){this.tab.title=t,this.title.data=t},updateSelection:function(){var t=this.getSkin();this._elm.style.backgroundColor=this.tab.isSelected()?t.buttonOverColor:t.buttonColor},updateSize:function(){e.prototype.updateSize.call(this),this.icon.style.top=.2*this.size.y+"px",this.icon.style.left=.2*this.size.y+"px",this.icon.style.width=.6*this.size.y+"px",this.icon.style.height=.6*this.size.y+"px",this.text.style.left=this.size.y+"px",this.text.style.top=(this.size.y-12)/2+"px",this.text.style.width=this.size.x-2*this.size.y+"px",this.text.style.height=this.size.y+"px",!0===this.tab.closeable?(this.close.style.width=.4*this.size.y+"px",this.close.style.height=.4*this.size.y+"px",this.close.style.top=.3*this.size.y+"px",this.close.style.right=.3*this.size.y+"px",this.close.style.display="block"):this.close.style.display="none",this.updateSelection()}});return s.NONE=0,s.PREVIOUS=1,s.NEXT=2,i.TabButton=s}),t("skylark-widgets-tabs/tab-element",["skylark-langx-strings","skylark-widgets-base/panels/panel","./tabs"],function(t,e,i){"use strict";var s=e.inherit({klassName:"TabElement",_construct:function(i,s,n,a,o,l){e.prototype._construct.call(this,i);var h=this.getSkin();this._elm.style.overflow="visible",this._elm.style.backgroundColor=h.panelColor,this.preventDragEvents(),this.container=n,this.uuid=t.generateUUID(),this.index=a,this.button=null,this.closeable=s,this.title=o,this.icon=l,this.active=!1},updateMetadata:function(){},updateSettings:function(){},updateValues:function(){},updateObjectsView:function(){},updateSelection:function(){},activate:function(){if(!0===this.active&&this.deactivate(),void 0!==this.update){var t=this,e=function(){t.update(),!0===t.active&&requestAnimationFrame(e)};requestAnimationFrame(e)}this.active=!0},deactivate:function(){this.active=!1},attach:function(t){},isAttached:function(t){return!1},close:function(){this.container.removeTab(this)},select:function(){this.container.selectTab(this)},isSelected:function(){return this===this.container.selected},setIcon:function(t){this.icon=t,this.button.setIcon(t)},setName:function(t){this.title=t,this.button.setName(t)},destroy:function(){e.prototype.destroy.call(this),null!==this.button&&this.button.destroy()}});return i.TabElement=s}),t("skylark-langx-numerics/Vector2",["skylark-langx-klass","./numerics"],function(t,e){var i=t({klassName:"Vector2",set:function(t,e){return this.x=t,this.y=e,this},setScalar:function(t){return this.x=t,this.y=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},clone:function(){return new this.constructor(this.x,this.y)},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t,e){return void 0!==e?(console.warn("Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)},addScalar:function(t){return this.x+=t,this.y+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this},sub:function(t,e){return void 0!==e?(console.warn("Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)},subScalar:function(t){return this.x-=t,this.y-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},multiplyScalar:function(t){return this.x*=t,this.y*=t,this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},divideScalar:function(t){return this.multiplyScalar(1/t)},applyMatrix3:function(t){var e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this},clampScalar:function(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this},clampLength:function(t,e){var i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},cross:function(t){return this.x*t.y-this.y*t.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var t=Math.atan2(-this.y,-this.x)+Math.PI;return t},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,i=this.y-t.y;return e*e+i*i},manhattanDistanceTo:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},setLength:function(t){return this.normalize().multiplyScalar(t)},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this},lerpVectors:function(t,e,i){return this.subVectors(e,t).multiplyScalar(i).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t},rotateAround:function(t,e){var i=Math.cos(e),s=Math.sin(e),n=this.x-t.x,a=this.y-t.y;return this.x=n*i-a*s+t.x,this.y=n*s+a*i+t.y,this},_construct:function(t,e){this.x=t||0,this.y=e||0}});return e.Vector2=i}),t("skylark-widgets-tabs/tab-group",["skylark-langx-numerics/Vector2","skylark-widgets-base/dnd/drag-buffer","skylark-widgets-base/widget","skylark-widgets-base/panels/panel","./tabs","./tab-element","./tab-button"],function(t,e,i,s,n,a,o){"use strict";var l=s.inherit({klassName:"TabGroup",_construct:function(i,n){s.prototype._construct.call(this,i);var o=this,h=this.getSkin();this._elm.style.overflow="visible",this._elm.style.backgroundColor=h.panelColor,this.preventDragEvents(),this.buttons=new s(this),this.buttons.element.style.backgroundColor=h.barColor,this.buttons.element.ondrop=function(t){t.preventDefault();var i=t.dataTransfer.getData("uuid"),s=e.get(i);s instanceof a&&(o.attachTab(s),e.pop(i))},this.tab=new s(this),this.empty=document.createElement("div"),this.empty.style.position="absolute",this.empty.style.textAlign="center",this.empty.style.display="none",this.empty.style.width="100%",this.empty.style.height="100%",this.empty.style.flexDirection="column",this.empty.style.justifyContent="center",this.empty.style.pointerEvents="none",this.empty.appendChild(document.createTextNode(Locale.openTabToEditContent)),this._elm.appendChild(this.empty),this.selected=null,this.buttonSize=new t(150,22),this.placement=void 0!==n?n:l.TOP,this.setPlacement(this.placement),this.items=[],this.focused=!1,this._elm.onmouseenter=function(){o.focused=!0},this._elm.onmouseleave=function(){o.focused=!1}},updateMetadata:function(){for(var t=0;t<this.items.length;t++)this.items[t].updateMetadata()},updateObjectsView:function(){for(var t=0;t<this.items.length;t++)this.items[t].updateObjectsView()},attachTab:function(t,e){return t.container.removeTab(t.index,!0),t.container=this,t.button.setParent(this.buttons),t.setParent(this.tab),void 0!==e?(t.index=e,this.items.splice(e,0,t)):(t.index=this.items.length,this.items.push(t)),null===this.selected&&this.selectTab(t),this.updateItemIndex(),this.updateInterface(),t},moveTabIndex:function(t,e){var i=this.items[t];this.items.splice(t,1),this.items.splice(e,0,i),this.updateItemIndex(),this.updateInterface()},updateSelection:function(){for(var t=0;t<this.items.length;t++)this.items[t].updateSelection()},updateSettings:function(){for(var t=0;t<this.items.length;t++)this.items[t].updateSettings()},getActiveTab:function(){return null!==this.selected?this.selected:null},closeActual:function(){null!==this.selected&&this.selected.closeable&&(this.selected.deactivate(),this.removeTab(this.selected))},selectTab:function(t){null!==this.selected&&this.selected.deactivate(),t instanceof a?(this.selected=t,this.selected.activate()):"number"==typeof t&&t>-1&&t<this.items.length?(this.selected=this.items[t],this.selected.activate()):this.selected=null,this.empty.style.display=null===this.selected?"flex":"none",this.updateInterface()},selectNextTab:function(){this.items.length>0&&this.selectTab((this.selected.index+1)%this.items.length)},selectPreviousTab:function(){this.items.length>0&&(0===this.selected.index?this.selectTab(this.items.length-1):this.selectTab(this.selected.index-1))},addTab:function(t,e){var i=new t(this.tab,e,this,this.items.length);return i.button=new o(this.buttons,i),this.items.push(i),null===this.selected||1===this.items.length?this.selectTab(i):this.updateInterface(),i},getTab:function(t,e){for(var i=0;i<this.items.length;i++)if(this.items[i]instanceof t&&(void 0===e||this.items[i].isAttached(e)))return this.items[i];return null},removeTab:function(t,e){if("object"==typeof t&&(t=this.items.indexOf(t)),t>-1&&t<this.items.length){var i=this.items[t];return!0!==e&&i.destroy(),this.items.splice(t,1),this.updateItemIndex(),this.selected===i&&this.items.length>0?this.selectTab(0!==t?t-1:0):this.selectTab(null),i}return null},clear:function(t){if(!0===t){for(;this.items.length>0;)this.items.pop().destroy();this.selectTab(null)}else{for(var e=0;e<this.items.length;)this.items[e].closeable?(this.items[e].destroy(),this.items.splice(e,1)):e++;var i=this.items.indexOf(this.selected);-1===i&&this.items.length>0&&this.selectTab(0)}},updateItemIndex:function(){for(var t=0;t<this.items.length;t++)this.items[t].index=t},setPlacement:function(t){this.placement=t},updateSize:function(){s.prototype.updateSize.call(this);var t=this.size.clone(),e=this.buttonSize.clone(),i=this.buttonSize.clone();this.placement===l.TOP||this.placement===l.BOTTOM?(e.x*this.items.length>this.size.x&&(e.x=this.size.x/this.items.length,i.x=e.x),t.y-=this.buttonSize.y,i.y=0):this.placement!==l.LEFT&&this.placement!==l.RIGHT||(e.y*this.items.length>this.size.y&&(e.y=this.size.y/this.items.length,i.y=e.y),t.x-=this.buttonSize.x,i.x=0);for(var n=0;n<this.items.length;n++){var a=this.items[n];a.visible=this.selected===a,a.size.copy(t),a.updateInterface();var o=a.button;o.size.copy(e),o.position.copy(i),o.position.multiplyScalar(n),o.updateInterface()}this.tab.size.copy(t),this.tab.updateSize(),this.placement===l.TOP?(this.buttons.position.set(0,0),this.buttons.updatePosition(),this.buttons.size.set(this.size.x,this.buttonSize.y),this.buttons.updateSize(),this.tab.position.set(0,this.buttonSize.y),this.tab.updatePosition()):this.placement===l.BOTTOM?(this.buttons.position.set(0,this.size.y-this.buttonSize.y),this.buttons.updatePosition(),this.buttons.size.set(this.size.x,this.buttonSize.y),this.buttons.updateSize(),this.tab.position.set(0,0),this.tab.updatePosition()):this.placement===l.LEFT?(this.buttons.position.set(0,0),this.buttons.updatePosition(),this.buttons.size.set(this.buttonSize.x,this.size.y),this.buttons.updateSize(),this.tab.position.set(this.buttonSize.x,0),this.tab.updatePosition()):this.placement===l.RIGHT&&(this.buttons.position.set(this.size.x-this.buttonSize.x,0),this.buttons.updatePosition(),this.buttons.size.set(this.buttonSize.x,this.size.y),this.buttons.updateSize(),this.tab.position.set(0,0),this.tab.updatePosition())}});return l.TOP=0,l.BOTTOM=1,l.LEFT=2,l.RIGHT=3,n.TabGroup=l}),t("skylark-widgets-tabs/splittable/tab-button-split",["skylark-devices-points/mouse","skylark-widgets-base/dnd/drag-buffer","skylark-widgets-base/widget","../tabs","../tab-element","../tab-group"],function(t,e,i,s,n,a){"use strict";var o=i.inherit({klassName:"TabButtonSplit",_construct:function(s,l){i.prototype._construct.call(this,s,"div");var h=this;this._elm.draggable=!0,this._elm.style.cursor="pointer",this._elm.style.boxSizing="border-box";var r=this.getSkin();this._elm.style.backgroundColor=r.buttonColor,this.tab=l,this.icon=document.createElement("img"),this.icon.style.pointerEvents="none",this.icon.style.position="absolute",this.icon.src=l.icon,this._elm.appendChild(this.icon),this.text=document.createElement("div"),this.text.style.position="absolute",this.text.style.overflow="hidden",this.text.style.textAlign="center",this.text.style.pointerEvents="none",this.text.style.textOverflow="ellipsis",this.text.style.whiteSpace="nowrap",this.text.style.color=Editor.theme.textColor,this._elm.appendChild(this.text),this.title=document.createTextNode(l.title),this.text.appendChild(this.title),this.close=document.createElement("img"),this.close.draggable=!1,this.close.style.position="absolute",this.close.style.opacity=.5,this.close.style.display=l.closeable?"block":"none",this.close.src=Global.FILE_PATH+"icons/misc/close.png",this._elm.appendChild(this.close),this.close.onmouseenter=function(){this.style.opacity=1},this.close.onmouseleave=function(){this.style.opacity=.5},this.close.onclick=function(){h.tab.close()};var c=o.NONE;this._elm.ondragstart=function(t){t.dataTransfer.setData("uuid",h.tab.uuid),e.push(h.tab),t.dataTransfer.setData("tab",h.tab.index),c=o.NONE},this._elm.ondrop=function(t){t.preventDefault(),this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null;var i=t.dataTransfer.getData("uuid"),s=e.get(i);if(s instanceof n)if(s.container===h.tab.container){var a=t.dataTransfer.getData("tab");(a=parseInt(a))!==h.tab.index&&(c===o.PREVIOUS?h.tab.container.moveTabIndex(a,a<h.tab.index?h.tab.index-1:h.tab.index):c===o.NEXT&&h.tab.container.moveTabIndex(a,a<h.tab.index?h.tab.index:h.tab.index+1),e.pop(i))}else c===o.PREVIOUS?h.tab.container.attachTab(s,h.tab.index):c===o.NEXT&&h.tab.container.attachTab(s,h.tab.index+1),e.pop(i)},this._elm.ondragover=function(t){h.tab.container.placement===a.TOP||h.tab.container.placement===a.BOTTOM?t.layerX>.8*h.size.x||t.target!==this?c!==o.NEXT&&(c=o.NEXT,this.style.borderLeft=null,this.style.borderRight="thick solid #999999"):t.layerX<.2*h.size.x?c!==o.PREVIOUS&&(c=o.PREVIOUS,this.style.borderRight=null,this.style.borderLeft="thick solid #999999"):c!==o.NONE&&(c=o.NONE,this.style.borderLeft=null,this.style.borderRight=null):t.layerY>.7*h.size.y||t.target!==this?c!==o.NEXT&&(c=o.NEXT,this.style.borderTop=null,this.style.borderBottom="solid #999999"):t.layerY<.3*h.size.y?c!==o.PREVIOUS&&(c=o.PREVIOUS,this.style.borderBottom=null,this.style.borderTop="solid #999999"):c!==o.NONE&&(c=o.NONE,this.style.borderBottom=null,this.style.borderTop=null)},this._elm.ondragend=function(t){t.preventDefault(),e.pop(h.tab.uuid),c=o.NONE,this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null},this._elm.ondragleave=function(t){t.preventDefault(),c=o.NONE,this.style.borderLeft=null,this.style.borderRight=null,this.style.borderBottom=null,this.style.borderTop=null},this._elm.onmousedown=function(e){e.which;t.isLeftMouseButton(e)?h.tab.container.selectTab(h.tab):l.closeable&&t.isMiddleMouseButton(e)&&h.tab.container.removeTab(h.tab)},this._elm.onmouseenter=function(){this.style.backgroundColor=r.buttonOverColor},this._elm.onmouseleave=function(){l.isSelected()?this.style.backgroundColor=r.buttonOverColor:this.style.backgroundColor=r.buttonColor}},setIcon:function(t){this.tab.icon=t,this.icon.src=t},setName:function(t){this.tab.title=t,this.title.data=t},updateSelection:function(){var t=this.getSkin();this._elm.style.backgroundColor=this.tab.isSelected()?t.buttonOverColor:t.buttonColor},updateSize:function(){i.prototype.updateSize.call(this),this.icon.style.top=.2*this.size.y+"px",this.icon.style.left=.2*this.size.y+"px",this.icon.style.width=.6*this.size.y+"px",this.icon.style.height=.6*this.size.y+"px",this.text.style.left=this.size.y+"px",this.text.style.top=(this.size.y-12)/2+"px",this.text.style.width=this.size.x-2*this.size.y+"px",this.text.style.height=this.size.y+"px",!0===this.tab.closeable?(this.close.style.width=.4*this.size.y+"px",this.close.style.height=.4*this.size.y+"px",this.close.style.top=.3*this.size.y+"px",this.close.style.right=.3*this.size.y+"px",this.close.style.display="block"):this.close.style.display="none",this.updateSelection()}});return o.NONE=0,o.PREVIOUS=1,o.NEXT=2,s.splittable.TabButtonSplit=o}),t("skylark-widgets-tabs/splittable/tab-container",["skylark-widgets-base/panels/panel","../tabs","../tab-group"],function(t,e,i){"use strict";var s=t.inherit({klassName:"TabContainer",_construct:function(e){t.prototype._construct.call(this,e),this.group=null},split:function(t){return this.group.split(t)},attach:function(t){this.group=t,this.group.setParent(this)},updateSize:function(){t.prototype.updateSize.call(this),null!==this.group&&(this.group.position.set(0,0),this.group.size.copy(this.size),this.group.updateInterface())},updateMetadata:function(){this.group.updateMetadata()},updateObjectsView:function(){this.group.updateObjectsView()},updateSelection:function(){this.group.updateSelection()},updateSettings:function(){this.group.updateSettings()},getActiveTab:function(){var t=[];if(this.group instanceof i){var e=this.group.getActiveTab();null!==e&&t.push(e)}else t=t.concat(this.group.getActiveTab());return this.group.getActiveTab()},closeActual:function(){this.group.closeActual()},selectTab:function(t){this.group.selectTab(t)},selectNextTab:function(){this.group.selectNextTab()},selectPreviousTab:function(){this.group.selectPreviousTab()},addTab:function(t,e){return this.group.addTab(t,e)},getTab:function(t,e){return this.group.getTab(t,e)},clear:function(t){this.group.clear()}});return e.splittable.TabContainer=s}),t("skylark-widgets-tabs/splittable/tab-dual-container",["skylark-widgets-base/panels/dual-container","../tabs","../tab-group"],function(t,e,i){"use strict";var s=t.inherit({_construct:function(e){t.prototype._construct.call(this,e),this._elm.style.overflow="visible"},updateMetadata:function(){this._elmA.updateMetadata(),this._elmB.updateMetadata()},updateObjectsView:function(){this._elmA.updateObjectsView(),this._elmB.updateObjectsView()},updateSelection:function(){this._elmA.updateSelection(),this._elmB.updateSelection()},updateSettings:function(){this._elmA.updateSettings(),this._elmB.updateSettings()},getActiveTab:function(){var t=[];if(this._elmA instanceof i){var e=this._elmA.getActiveTab();null!==e&&t.push(e)}else t=t.concat(this._elmA.getActiveTab());if(this._elmB instanceof i){var e=this._elmB.getActiveTab();null!==e&&t.push(e),this._elmA.getActiveTab()}else t=t.concat(this._elmB.getActiveTab());return t},closeActual:function(){this._elmA instanceof i&&!this._elmA.focused||this._elmA.closeActual(),this._elmB instanceof i&&!this._elmB.focused||this._elmB.closeActual()},selectTab:function(t){this._elmA.selectTab(t),this._elmB.selectTab(t)},selectNextTab:function(){this._elmA instanceof i&&!this._elmA.focused||this._elmA.selectNextTab(),this._elmB instanceof i&&!this._elmB.focused||this._elmB.selectNextTab()},selectPreviousTab:function(){this._elmA instanceof i&&!this._elmA.focused||this._elmA.selectPreviousTab(),this._elmB instanceof i&&!this._elmB.focused||this._elmB.selectPreviousTab()},addTab:function(t,e){var i=this._elmA.addTab(t,e);return null===i&&(i=this._elmB.addTab(t,e)),i},getTab:function(t,e){var i=this._elmA.getTab(t,e);return null===i&&(i=this._elmB.getTab(t,e)),i},clear:function(t){this._elmA.clear(t),this._elmB.clear(t)}});return e.splittable.TabDualContainer=s}),t("skylark-widgets-tabs/splittable/tab-group-split",["skylark-domx-geom","skylark-widgets-base/dnd/drag-buffer","skylark-widgets-base/panels/dual-container","../tabs","../tab-group","../tab-element","./tab-container","./tab-dual-container","./tab-button-split"],function(t,e,i,s,n,a,o,l,h){"use strict";var r=n.inherit({klassName:"TabGroupSplit",_construct:function(i,s){n.prototype._construct.call(this,i,s);var o=this;this.dragBorder=.2,this.canSplit=!0,this.canCollapse=!0,this.tabArea=document.createElement("div"),this.tabArea.style.zIndex="1000",this.tabArea.style.position="absolute",this.tabArea.style.backgroundColor="rgba(0.0, 0.0, 0.0, 0.2)",this.tabArea.style.pointerEvents="none",this.tab.element.ondrop=function(i){i.preventDefault();var s=i.dataTransfer.getData("uuid"),l=e.get(s);if(l instanceof a){var h=t.pagePosition(o.element),r=i.clientX-(h.x||h.left),c=i.clientY-(h.y||h.top);r<o.size.x*o.dragBorder?o.split(n.LEFT).attachTab(l):r>o.size.x*(1-o.dragBorder)?o.split(n.RIGHT).attachTab(l):c<o.size.y*o.dragBorder?o.split(n.TOP).attachTab(l):c>o.size.y*(1-o.dragBorder)?o.split(n.BOTTOM).attachTab(l):o.attachTab(l),e.pop(s)}o.tab.element.contains(o.tabArea)&&o.tab.element.removeChild(o.tabArea)},this.tab.element.ondragover=function(i){if(i.preventDefault(),e.buffer[0]instanceof a){var s=t.pagePosition(o.element),n=i.clientX-(s.x||s.left),l=i.clientY-(s.y||s.top);n<o.size.x*o.dragBorder?(o.tabArea.style.right=null,o.tabArea.style.bottom=null,o.tabArea.style.top="0px",o.tabArea.style.left="0px",o.tabArea.style.width="50%",o.tabArea.style.height="100%",o.tab.element.contains(o.tabArea)||o.tab.element.appendChild(o.tabArea)):n>o.size.x*(1-o.dragBorder)?(o.tabArea.style.left=null,o.tabArea.style.bottom=null,o.tabArea.style.top="0px",o.tabArea.style.right="0px",o.tabArea.style.width="50%",o.tabArea.style.height="100%",o.tab.element.contains(o.tabArea)||o.tab.element.appendChild(o.tabArea)):l<o.size.y*o.dragBorder?(o.tabArea.style.right=null,o.tabArea.style.bottom=null,o.tabArea.style.top="0px",o.tabArea.style.left="0px",o.tabArea.style.width="100%",o.tabArea.style.height="50%",o.tab.element.contains(o.tabArea)||o.tab.element.appendChild(o.tabArea)):l>o.size.y*(1-o.dragBorder)?(o.tabArea.style.top=null,o.tabArea.style.right=null,o.tabArea.style.bottom="0px",o.tabArea.style.left="0px",o.tabArea.style.width="100%",o.tabArea.style.height="50%",o.tab.element.contains(o.tabArea)||o.tab.element.appendChild(o.tabArea)):o.tab.element.contains(o.tabArea)&&o.tab.element.removeChild(o.tabArea)}},this.tab.element.ondragleave=function(t){t.preventDefault(),o.tab.element.contains(o.tabArea)&&o.tab.element.removeChild(o.tabArea)}},split:function(t){if(this.canSplit){void 0===t&&(t=n.RIGHT);var e=new l,s=this.parent,a=new r(e,this.placement);return t===n.RIGHT?(e.orientation=i.HORIZONTAL,e.attach(this),e.attach(a)):t===n.LEFT?(e.orientation=i.HORIZONTAL,e.attach(a),e.attach(this)):t===n.BOTTOM?(e.orientation=i.VERTICAL,e.attach(this),e.attach(a)):t===n.TOP&&(e.orientation=i.VERTICAL,e.attach(a),e.attach(this)),s instanceof o?(s.attach(e),s.updateSize()):s instanceof i&&(s.elementA===this?(s.attachA(e),s.updateSize()):s.elementB===this&&(s.attachB(e),s.updateSize())),a}console.warn("nunuStudio: Tab is not splitable.")},collapse:function(){if(this.canCollapse)if(this.parent instanceof i){var t=this.parent.parent,e=this.parent.elementA===this?this.parent.elementB:this.parent.elementA;t instanceof i?t.elementA===this.parent?(this.parent.destroy(),this.destroy(),t.attachA(e)):t.elementB===this.parent&&(this.parent.destroy(),this.destroy(),t.attachB(e)):(this.parent.destroy(),this.destroy(),t.attach(e)),t.updateSize()}else console.warn("nunuStudio: Tab cannot be collapsed (parent is not a dual container).");else console.warn("nunuStudio: Tab is not collapsable.")},attachTab:function(t,e){var i=t.container,t=n.prototype.attachTab.call(this,t,e);return 0===i.items.length&&i.collapse(),t},removeTab:function(t,e){n.prototype.removeTab.call(this,t,e),0===this.items.length&&!0!==e&&this.collapse()},addTab:function(t,e){var i=new t(this.tab,e,this,this.items.length);return i.button=new h(this.buttons,i),i.updateInterface(),this.items.push(i),null===this.selected||1===this.items.length?this.selectTab(i):this.updateInterface(),i}});return s.splittable.TabGroupSplit=r}),t("skylark-widgets-tabs/main",["./tabs","./tab-button","./tab-element","./tab-group","./splittable/tab-button-split","./splittable/tab-container","./splittable/tab-dual-container","./splittable/tab-group-split"],function(t){return t}),t("skylark-widgets-tabs",["skylark-widgets-tabs/main"],function(t){return t})}(i),!s){var o=require("skylark-langx-ns");n?module.exports=o:e.skylarkjs=o}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-widgets-tabs.js.map
