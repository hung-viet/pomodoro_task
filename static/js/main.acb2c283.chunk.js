(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(t,e,s){},22:function(t,e,s){},27:function(t,e,s){},29:function(t,e,s){"use strict";s.r(e);var a=s(0),i=s.n(a),n=s(12),r=s.n(n),c=(s(21),s(14)),o=s(8),l=s(9),d=s(5),u=s(11),h=s(10),b=(s(22),s(13)),p=s(16),j=s(1),m=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(o.a)(this,s),(a=e.call(this,t)).state={value:a.props.timer,isModalShown:!1},a.renderTimer=a.renderTimer.bind(Object(d.a)(a)),a.handleClose=a.handleClose.bind(Object(d.a)(a)),a}return Object(l.a)(s,[{key:"renderTimer",value:function(t){var e=t%60,s=(t-e)/60;return"".concat(this.formatTime(s),":").concat(this.formatTime(e))}},{key:"formatTime",value:function(t){return t<10?"0"+t:t.toString()}},{key:"resume",value:function(t){var e=this;clearInterval(this.state.timerID),this.state.timerID=setInterval((function(){t<=0?e.setState({isModalShown:!0}):(e.setState({value:t-1}),e.props.setTimer(e.state.value))}),1e3)}},{key:"pause",value:function(){clearInterval(this.state.timerID)}},{key:"handleClose",value:function(){this.props.updateBreakStatus(),this.setState({isModalShown:!1})}},{key:"render",value:function(){console.log(this.props.timerState);var t="";"pause"===this.props.timerState?(this.pause(),t="#383d42"):"running"===this.props.timerState&&(this.resume(this.props.timer),t=this.props.isBreakTime?"#3ca861":"#e0942a");var e=this.renderTimer(this.props.timer);return Object(j.jsxs)("div",{className:"py-2",children:[Object(j.jsx)("h1",{className:"text-center",style:{color:t},children:e}),Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsxs)(b.a,{show:this.state.isModalShown,onHide:this.handleClose,children:[Object(j.jsx)(b.a.Header,{closeButton:!0,children:Object(j.jsx)(b.a.Title,{children:"Hey"})}),Object(j.jsx)(b.a.Body,{children:this.props.isBreakTime?"Come back to work!":"Take a break!"}),Object(j.jsx)(b.a.Footer,{children:Object(j.jsx)(p.a,{variant:"success",onClick:this.handleClose,children:"Ok"})})]})})]})}}]),s}(i.a.Component),k=(s(27),function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(o.a)(this,s),(a=e.call(this,t)).state={isDone:a.props.task.isDone},a.updateStartStatus=a.updateStartStatus.bind(Object(d.a)(a)),a.updateDoneStatus=a.updateDoneStatus.bind(Object(d.a)(a)),a.delete=a.delete.bind(Object(d.a)(a)),a}return Object(l.a)(s,[{key:"updateDoneStatus",value:function(t){this.setState({isDone:!0}),this.props.updateDoneStatus(this.props.task.id,!0)}},{key:"updateStartStatus",value:function(){this.props.updateStartStatus(this.props.task.id)}},{key:"delete",value:function(){this.props.removeTask(this.props.task.id)}},{key:"render",value:function(){var t;return t=this.props.currentTaskId===this.props.task.id&&"running"===this.props.timerState?Object(j.jsxs)("span",{children:[Object(j.jsx)("i",{className:"fas fa-pause"})," Pause"]}):Object(j.jsxs)("span",{children:[Object(j.jsx)("i",{className:"fas fa-play"})," Start"]}),Object(j.jsxs)("div",{className:"mb-2 shadow-sm",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between mb-2 px-3 py-4",children:[Object(j.jsx)("span",{className:"fw-bold",children:this.props.task.name}),Object(j.jsx)("button",{type:"button",className:"btn-close btn-sm",onClick:this.delete})]}),Object(j.jsxs)("div",{className:"d-flex flex-row-reverse bg-light py-2 px-3",children:[this.props.currentTaskId&&this.props.currentTaskId!==this.props.task.id&&"running"===this.props.timerState?null:Object(j.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm",onClick:this.updateStartStatus,children:t}),Object(j.jsxs)("button",{type:"button",className:"btn btn-outline-primary btn-sm me-2",onClick:this.updateDoneStatus,children:[Object(j.jsx)("i",{className:"fas fa-check"})," Done"]})]})]})}}]),s}(i.a.Component)),O=function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(o.a)(this,s),(a=e.call(this,t)).setDate=function(t){a.setState({date:t})},a.state={value:"",date:""},a.handleInput=a.handleInput.bind(Object(d.a)(a)),a.handleClick=a.handleClick.bind(Object(d.a)(a)),a.setDate=a.setDate.bind(Object(d.a)(a)),a}return Object(l.a)(s,[{key:"handleInput",value:function(t){this.setState({value:t.target.value})}},{key:"handleClick",value:function(){this.props.addDoingTask(this.state.value),this.setState({value:""})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"py-2 px-3 text-white rounded-top fw-bold mb-2 accordion-button pointer",style:{backgroundColor:"#3f80ea"},"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Add a new task"}),Object(j.jsxs)("div",{id:"collapseOne",className:"collapse p-2 show","aria-labelledby":"headingOne",children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"mb-3 row",children:[Object(j.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:"Task"}),Object(j.jsx)("div",{className:"col-sm-10",children:Object(j.jsx)("input",{type:"text",className:"form-control",id:"inputPassword",value:this.state.value,onChange:this.handleInput})})]}),Object(j.jsxs)("div",{className:"mb-3 row",children:[Object(j.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"col-sm-2 col-form-label",children:"Estimate"}),Object(j.jsx)("div",{className:"col-sm-10",children:Object(j.jsx)("input",{type:"text",className:"form-control",id:"exampleFormControlInput1"})})]})]}),Object(j.jsx)("div",{className:"d-flex flex-row-reverse mb-3",children:Object(j.jsxs)("button",{type:"button",className:"btn btn-secondary",onClick:this.handleClick,children:[Object(j.jsx)("i",{className:"fas fa-plus"})," Add"]})})]})]})}}]),s}(i.a.Component),v=(s(28),function(t){Object(u.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(o.a)(this,s),(a=e.call(this,t)).getId=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.reduce((function(t,e){return(t.id||0)>(e.id||0)?t:e}),{}).id||0;return++e},a.state={currentTaskId:0,listTaskDoing:[],timer:10,timerState:"pause",isBreakTime:!1},a.setTimer=a.setTimer.bind(Object(d.a)(a)),a.addDoingTask=a.addDoingTask.bind(Object(d.a)(a)),a.removeDoingTask=a.removeDoingTask.bind(Object(d.a)(a)),a.updateDoneStatus=a.updateDoneStatus.bind(Object(d.a)(a)),a.updateStartStatus=a.updateStartStatus.bind(Object(d.a)(a)),a.updateBreakStatus=a.updateBreakStatus.bind(Object(d.a)(a)),a}return Object(l.a)(s,[{key:"addDoingTask",value:function(t){t&&this.setState({listTaskDoing:[].concat(Object(c.a)(this.state.listTaskDoing),[{id:this.getId(this.state.listTaskDoing),name:t,isDone:!1}])})}},{key:"removeDoingTask",value:function(t){var e=Object(c.a)(this.state.listTaskDoing);e.splice(e.findIndex((function(e){return e.id===t})),1),this.setState({listTaskDoing:e})}},{key:"updateDoneStatus",value:function(t,e){var s=Object(c.a)(this.state.listTaskDoing);s.find((function(e){return e.id===t})).isDone=e,this.setState({listTaskDoing:s,timerState:"pause"})}},{key:"setTimer",value:function(t){this.setState({timer:t})}},{key:"updateStartStatus",value:function(t){(this.state.isBreakTime||this.state.currentTaskId!==t)&&this.setState({timer:10}),this.setState({currentTaskId:t,isBreakTime:!1,timerState:"pause"===this.state.timerState?"running":"pause"})}},{key:"updateBreakStatus",value:function(){this.state.isBreakTime?this.setState({timer:10,isBreakTime:!1}):this.setState({timer:5,isBreakTime:!0})}},{key:"render",value:function(){var t=this;return Object(j.jsx)("div",{className:"container p-4",children:Object(j.jsx)("div",{className:"row align-items-center justify-content-center",children:Object(j.jsxs)("div",{className:"col-md-6 py-4 bg-white",children:[Object(j.jsxs)("div",{className:"d-flex justify-content-between border-bottom",style:{color:"#B6B6B6"},children:[Object(j.jsx)("h2",{children:"Hello"}),Object(j.jsx)("h2",{children:Object(j.jsx)("i",{className:"fab fa-github"})})]}),Object(j.jsx)(m,{timer:this.state.timer,timerState:this.state.timerState,isBreakTime:this.state.isBreakTime,setTimer:this.setTimer,updateBreakStatus:this.updateBreakStatus}),Object(j.jsx)(O,{addDoingTask:this.addDoingTask}),Object(j.jsxs)("div",{className:"rounded",children:[Object(j.jsxs)("div",{className:"py-2 px-3 text-white rounded-top fw-bold",style:{backgroundColor:"#3f80ea"},children:["You've got ",this.state.listTaskDoing.filter((function(t){return!t.isDone})).length," tasks today"]}),this.state.listTaskDoing.map((function(e,s){return Object(j.jsx)(k,{task:e,currentTaskId:t.state.currentTaskId,timerState:t.state.timerState,updateDoneStatus:t.updateDoneStatus,removeTask:t.removeDoingTask,updateStartStatus:t.updateStartStatus},s)}))]})]})})})}}]),s}(i.a.Component)),f=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,31)).then((function(e){var s=e.getCLS,a=e.getFID,i=e.getFCP,n=e.getLCP,r=e.getTTFB;s(t),a(t),i(t),n(t),r(t)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),f()}},[[29,1,2]]]);
//# sourceMappingURL=main.acb2c283.chunk.js.map