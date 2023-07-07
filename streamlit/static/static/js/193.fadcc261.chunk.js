"use strict";(self.webpackChunkstreamlit_browser=self.webpackChunkstreamlit_browser||[]).push([[193],{38193:function(e,t,r){r.r(t),r.d(t,{default:function(){return fe}});var o=r(15671),n=r(43144),i=r(60136),a=r(29388),s=r(47313),l=r(93433),u=r(83985),c=r(74969),p=r(15160);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){return e.$isActive?2:e.$isHovered?1:0}function m(e){var t=e.$theme.colors,r=e.$disabled,o=e.$checked,n=e.$isFocusVisible,i=e.$error;if(r)return t.tickFillDisabled;if(!o)return n?t.borderSelected:i?t.tickBorderError:t.tickBorder;if(i)switch(b(e)){case 0:return t.tickFillErrorSelected;case 1:return t.tickFillErrorSelectedHover;case 2:return t.tickFillErrorSelectedHoverActive}else switch(b(e)){case 0:return t.tickFillSelected;case 1:return t.tickFillSelectedHover;case 2:return t.tickFillSelectedHoverActive}return null}function v(e){var t=e.$theme.colors;if(e.$disabled)return t.tickMarkFillDisabled;if(e.$checked)return t.tickMarkFill;if(e.$error)switch(b(e)){case 0:return t.tickFillError;case 1:return t.tickFillErrorHover;case 2:return t.tickFillErrorHoverActive}else switch(b(e)){case 0:return t.tickFill;case 1:return t.tickFillHover;case 2:return t.tickFillActive}}function y(e){var t=e.$disabled,r=e.$theme.colors;return t?r.contentSecondary:r.contentPrimary}var g=(0,p.zo)("div",(function(e){var t=e.$disabled,r=e.$align;return{display:"flex",flexWrap:"wrap",flexDirection:"horizontal"===r?"row":"column",alignItems:"horizontal"===r?"center":"flex-start",cursor:t?"not-allowed":"pointer","-webkit-tap-highlight-color":"transparent"}}));g.displayName="RadioGroupRoot",g.displayName="RadioGroupRoot";var w=(0,p.zo)("label",(function(e){var t,r=e.$disabled,o=e.$hasDescription,n=e.$labelPlacement,i=e.$theme,a=e.$align,s=i.sizing,l="horizontal"===a,u="rtl"===i.direction?"Left":"Right";return h(t={flexDirection:"top"===n||"bottom"===n?"column":"row",display:"flex",alignItems:"center",cursor:r?"not-allowed":"pointer",marginTop:s.scale200},"margin".concat(u),l?s.scale200:null),h(t,"marginBottom",o&&!l?null:s.scale200),t}));w.displayName="Root",w.displayName="Root";var k=(0,p.zo)("div",(function(e){var t=e.$theme,r=t.animation,o=t.sizing;return{backgroundColor:v(e),borderTopLeftRadius:"50%",borderTopRightRadius:"50%",borderBottomRightRadius:"50%",borderBottomLeftRadius:"50%",height:e.$checked?o.scale200:o.scale550,transitionDuration:r.timing200,transitionTimingFunction:r.easeOutCurve,width:e.$checked?o.scale200:o.scale550}}));k.displayName="RadioMarkInner",k.displayName="RadioMarkInner";var O=(0,p.zo)("div",(function(e){var t=e.$theme,r=t.animation,o=t.sizing;return{alignItems:"center",backgroundColor:m(e),borderTopLeftRadius:"50%",borderTopRightRadius:"50%",borderBottomRightRadius:"50%",borderBottomLeftRadius:"50%",boxShadow:e.$isFocusVisible&&e.$checked?"0 0 0 3px ".concat(e.$theme.colors.accent):"none",display:"flex",height:o.scale700,justifyContent:"center",marginTop:o.scale0,marginRight:o.scale0,marginBottom:o.scale0,marginLeft:o.scale0,outline:"none",verticalAlign:"middle",width:o.scale700,flexShrink:0,transitionDuration:r.timing200,transitionTimingFunction:r.easeOutCurve}}));O.displayName="RadioMarkOuter",O.displayName="RadioMarkOuter";var R=(0,p.zo)("div",(function(e){var t=e.$theme.typography;return f(f({verticalAlign:"middle"},function(e){var t,r=e.$labelPlacement,o=void 0===r?"":r,n=e.$theme;switch(o){case"top":t="Bottom";break;case"bottom":t="Top";break;case"left":t="rtl"===n.direction?"Left":"Right";break;default:t="rtl"===n.direction?"Right":"Left"}var i=n.sizing.scale300;return h({},"padding".concat(t),i)}(e)),{},{color:y(e)},t.LabelMedium)}));R.displayName="Label",R.displayName="Label";var j=(0,p.zo)("input",{width:0,height:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,clip:"rect(0 0 0 0)",position:"absolute"});j.displayName="Input",j.displayName="Input";var F=(0,p.zo)("div",(function(e){var t,r=e.$theme,o=e.$align,n="horizontal"===o,i="rtl"===r.direction?"Right":"Left",a="rtl"===r.direction?"Left":"Right";return f(f({},r.typography.ParagraphSmall),{},(h(t={color:r.colors.contentSecondary,cursor:"auto"},"margin".concat(i),"horizontal"===o?null:r.sizing.scale900),h(t,"margin".concat(a),n?r.sizing.scale200:null),h(t,"maxWidth","240px"),t))}));F.displayName="Description",F.displayName="Description";var P=r(75643);function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},S.apply(this,arguments)}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(o=r.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(l){s=!0,n=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=D(e);if(t){var n=D(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return A(this,r)}}function A(e,t){if(t&&("object"===$(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var V=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(i,e);var t,r,o,n=L(i);function i(){var e;x(this,i);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return T(B(e=n.call.apply(n,[this].concat(r))),"state",{isFocusVisible:!1,focusedRadioIndex:-1}),T(B(e),"handleFocus",(function(t,r){(0,P.E)(t)&&e.setState({isFocusVisible:!0}),e.setState({focusedRadioIndex:r}),e.props.onFocus&&e.props.onFocus(t)})),T(B(e),"handleBlur",(function(t,r){!1!==e.state.isFocusVisible&&e.setState({isFocusVisible:!1}),e.setState({focusedRadioIndex:-1}),e.props.onBlur&&e.props.onBlur(t)})),e}return t=i,(r=[{key:"render",value:function(){var e=this,t=this.props.overrides,r=void 0===t?{}:t,o=M((0,c.jb)(r.RadioGroupRoot,g),2),n=o[0],i=o[1];return s.createElement(n,S({id:this.props.id,role:"radiogroup","aria-describedby":this.props["aria-describedby"],"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props.error||null,"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],$align:this.props.align,$disabled:this.props.disabled,$error:this.props.error,$required:this.props.required},i),s.Children.map(this.props.children,(function(t,r){if(!s.isValidElement(t))return null;var o=e.props.value===t.props.value;return s.cloneElement(t,{align:e.props.align,autoFocus:e.props.autoFocus,checked:o,disabled:e.props.disabled||t.props.disabled,error:e.props.error,isFocused:e.state.focusedRadioIndex===r,isFocusVisible:e.state.isFocusVisible,tabIndex:0===r&&!e.props.value||o?"0":"-1",labelPlacement:e.props.labelPlacement,name:e.props.name,onBlur:function(t){return e.handleBlur(t,r)},onFocus:function(t){return e.handleFocus(t,r)},onChange:e.props.onChange,onMouseEnter:e.props.onMouseEnter,onMouseLeave:e.props.onMouseLeave})})))}}])&&C(t.prototype,r),o&&C(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(s.Component);T(V,"defaultProps",{name:"",value:"",disabled:!1,autoFocus:!1,labelPlacement:"right",align:"vertical",error:!1,required:!1,onChange:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onFocus:function(){},onBlur:function(){},overrides:{}});var z=V,_="vertical",H="horizontal";function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},U.apply(this,arguments)}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var o,n,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(o=r.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(l){s=!0,n=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function J(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Y(e);if(t){var n=Y(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Q(this,r)}}function Q(e,t){if(t&&("object"===N(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return X(e)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var te=function(e){return e.stopPropagation()},re=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(i,e);var t,r,o,n=J(i);function i(){var e;q(this,i);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return ee(X(e=n.call.apply(n,[this].concat(r))),"state",{isActive:!1,isHovered:!1}),ee(X(e),"onMouseEnter",(function(t){e.setState({isHovered:!0}),e.props.onMouseEnter&&e.props.onMouseEnter(t)})),ee(X(e),"onMouseLeave",(function(t){e.setState({isHovered:!1}),e.props.onMouseLeave&&e.props.onMouseLeave(t)})),ee(X(e),"onMouseDown",(function(t){e.setState({isActive:!0}),e.props.onMouseDown&&e.props.onMouseDown(t)})),ee(X(e),"onMouseUp",(function(t){e.setState({isActive:!1}),e.props.onMouseUp&&e.props.onMouseUp(t)})),e}return t=i,(r=[{key:"componentDidMount",value:function(){var e;this.props.autoFocus&&null!==(e=this.props.inputRef)&&void 0!==e&&e.current&&this.props.inputRef.current.focus()}},{key:"render",value:function(){var e,t=this.props.overrides,r=void 0===t?{}:t,o=Z((0,c.jb)(r.Root,w),2),n=o[0],i=o[1],a=Z((0,c.jb)(r.Label,R),2),l=a[0],u=a[1],p=Z((0,c.jb)(r.Input,j),2),d=p[0],f=p[1],h=Z((0,c.jb)(r.Description,F),2),b=h[0],m=h[1],v=Z((0,c.jb)(r.RadioMarkInner,k),2),y=v[0],g=v[1],P=Z((0,c.jb)(r.RadioMarkOuter,O),2),$=P[0],S=P[1],M={$align:this.props.align,$checked:this.props.checked,$disabled:this.props.disabled,$hasDescription:!!this.props.description,$isActive:this.state.isActive,$error:this.props.error,$isFocused:this.props.isFocused,$isFocusVisible:this.props.isFocused&&this.props.isFocusVisible,$isHovered:this.state.isHovered,$labelPlacement:this.props.labelPlacement,$required:this.props.required,$value:this.props.value},E=s.createElement(l,U({},M,u),this.props.containsInteractiveElement?s.createElement("div",{onClick:function(e){return e.preventDefault()}},this.props.children):this.props.children);return s.createElement(s.Fragment,null,s.createElement(n,U({"data-baseweb":"radio",onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp},M,i),("top"===(e=this.props.labelPlacement)||"left"===e)&&E,s.createElement($,U({},M,S),s.createElement(y,U({},M,g))),s.createElement(d,U({"aria-invalid":this.props.error||null,checked:this.props.checked,disabled:this.props.disabled,name:this.props.name,onBlur:this.props.onBlur,onFocus:this.props.onFocus,onClick:te,onChange:this.props.onChange,ref:this.props.inputRef,required:this.props.required,tabIndex:this.props.tabIndex,type:"radio",value:this.props.value},M,f)),function(e){return"bottom"===e||"right"===e}(this.props.labelPlacement)&&E),!!this.props.description&&s.createElement(b,U({},M,m),this.props.description))}}])&&G(t.prototype,r),o&&G(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i}(s.Component);ee(re,"defaultProps",{overrides:{},containsInteractiveElement:!1,checked:!1,disabled:!1,autoFocus:!1,inputRef:s.createRef(),align:"vertical",error:!1,onChange:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseDown:function(){},onMouseUp:function(){},onFocus:function(){},onBlur:function(){}});var oe=re,ne=r(72708),ie=r(20300),ae=r(23970),se=r(46417),le=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={value:e.props.value},e.onChange=function(t){var r=parseInt(t.target.value,10);e.setState({value:r},(function(){return e.props.onChange(r)}))},e}return(0,n.Z)(r,[{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.props.value!==this.state.value&&this.setState((function(e,t){return{value:t.value}}))}},{key:"render",value:function(){var e=this.props,t=e.theme,r=e.width,o=e.help,n=e.label,i=e.horizontal,a=e.labelVisibility,s=this.props.disabled,u=t.colors,c=t.radii,p={width:r},d=(0,l.Z)(this.props.options);return 0===d.length&&(d.push("No options to select."),s=!0),(0,se.jsxs)("div",{className:"row-widget stRadio",style:p,children:[(0,se.jsx)(ne.ON,{label:n,disabled:s,labelVisibility:a,children:o&&(0,se.jsx)(ne.Hp,{children:(0,se.jsx)(ie.ZP,{content:o,placement:ae.ug.TOP_RIGHT})})}),(0,se.jsx)(z,{onChange:this.onChange,value:this.state.value.toString(),disabled:s,align:i?H:_,"aria-label":n,children:d.map((function(e,t){return(0,se.jsx)(oe,{value:t.toString(),overrides:{Root:{style:function(e){return{marginBottom:0,marginTop:0,marginRight:"1rem",paddingLeft:0,alignItems:"start",paddingRight:"2px",backgroundColor:e.$isFocusVisible?u.darkenedBgMix25:"",borderTopLeftRadius:c.md,borderTopRightRadius:c.md,borderBottomLeftRadius:c.md,borderBottomRightRadius:c.md}}},RadioMarkOuter:{style:function(e){return{width:"1rem",height:"1rem",marginTop:"0.35rem",marginRight:"0",backgroundColor:e.$checked&&!s?u.primary:u.fadedText40}}},RadioMarkInner:{style:function(e){var t=e.$checked;return{height:t?"6px":".75rem",width:t?"6px":".75rem"}}},Label:{style:{color:s?u.fadedText40:u.bodyText,position:"relative",top:"1px"}}},children:e},t)}))})]})}}]),r}(s.PureComponent),ue=(0,u.b)(le),ce=r(55982),pe=r(17453),de=function(e){(0,i.Z)(r,e);var t=(0,a.Z)(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).formClearHelper=new ce.Kz,e.state={value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setIntValue(e.props.element,e.state.value,t)},e.onFormCleared=function(){e.setState((function(e,t){return{value:t.element.default}}),(function(){return e.commitWidgetValue({fromUi:!0})}))},e.onChange=function(t){e.setState({value:t},(function(){return e.commitWidgetValue({fromUi:!0})}))},e}return(0,n.Z)(r,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getIntValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e=this.props,t=e.disabled,r=e.element,o=e.width,n=e.widgetMgr,i=r.horizontal,a=r.options,s=r.label,l=r.labelVisibility,u=r.help;return this.formClearHelper.manageFormClearListener(n,r.formId,this.onFormCleared),(0,se.jsx)(ue,{label:s,onChange:this.onChange,options:a,width:o,disabled:t,horizontal:i,labelVisibility:(0,pe.iF)(null===l||void 0===l?void 0:l.value),value:this.state.value,help:u})}}]),r}(s.PureComponent),fe=de}}]);