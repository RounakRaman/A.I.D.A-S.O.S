"use strict";(self.webpackChunkstreamlit_browser=self.webpackChunkstreamlit_browser||[]).push([[645],{13645:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var n=i(15671),o=i(43144),r=i(60136),a=i(29388),l=i(47313),u=i(55982),s=i(6335),p=i(17453),m=i(46417),f=function(e){(0,r.Z)(i,e);var t=(0,a.Z)(i);function i(){var e;(0,n.Z)(this,i);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).formClearHelper=new u.Kz,e.state={value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setIntValue(e.props.element,e.state.value,t)},e.onFormCleared=function(){e.setState((function(e,t){return{value:t.element.default}}),(function(){return e.commitWidgetValue({fromUi:!0})}))},e.onChange=function(t){e.setState({value:t},(function(){return e.commitWidgetValue({fromUi:!0})}))},e}return(0,o.Z)(i,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getIntValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e=this.props.element,t=e.options,i=e.help,n=e.label,o=e.labelVisibility,r=e.formId,a=this.props,l=a.disabled,u=a.widgetMgr;return this.formClearHelper.manageFormClearListener(u,r,this.onFormCleared),(0,m.jsx)(s.Z,{label:n,labelVisibility:(0,p.iF)(null===o||void 0===o?void 0:o.value),options:t,disabled:l,width:this.props.width,onChange:this.onChange,value:this.state.value,help:i})}}]),i}(l.PureComponent),c=f}}]);