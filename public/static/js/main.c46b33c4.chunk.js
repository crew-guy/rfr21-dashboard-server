(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{193:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),s=c(28),i=c.n(s),l=(c(87),c.p+"static/media/ather.8f960213.png"),j=c(80);function d(){return Object(a.jsxs)(j.a.div,{initial:{y:-200,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,duration:.4,type:"spring",stiffness:120,damping:10,mass:.2},className:"navbar",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:l,alt:"Ather"})}),Object(a.jsxs)("div",{className:"brand",children:[Object(a.jsx)("span",{className:"text dash",children:"DASH"}),Object(a.jsx)("span",{className:"text",children:"BOARD"})]}),Object(a.jsxs)("div",{className:"navLinks",children:[Object(a.jsx)("a",{href:"/",children:"Dash"}),Object(a.jsx)("a",{href:"/data",children:"Data"}),Object(a.jsx)("a",{href:"/about",children:"About"})]})]})}var o=c(8),b=c(74),u=c(22),h="SET_X_DETAILS",m="SET_GRAPH_DETAILS",O="energy",x=Object(b.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{idRqst:["EV20201"],dateRqst:["01/01/2020","28/12/2020"],timeRqst:["00:00:00","23:59:59"],plotRqst:O},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return console.log("X details changed !"),Object(u.a)(Object(u.a)({},e),{},{idRqst:t.payload.idRqst,dateRqst:t.payload.dateRqst,timeRqst:t.payload.timeRqst});case m:return console.log("Graph details changed !"),Object(u.a)(Object(u.a)({},e),{},{plotRqst:t.payload.graph});default:return e}}));function p(){var e=function(e){e.preventDefault(),console.log("Form was just submitted");var a=t(p,N,w,k,G,L,"/"),n=c(z,q,Q,ee,ne,le,":"),r={idRqst:[i,b],dateRqst:a,timeRqst:n};x.dispatch(function(e){return{type:h,payload:e}}(r))},t=function(e,t,c,a,n,r,s){return""===c&&(c="01"),""===n&&(n="01"),""===a&&(a="12"),""===r&&(r="28"),["".concat(n).concat(s).concat(c).concat(s).concat(e),"".concat(r).concat(s).concat(a).concat(s).concat(t)]},c=function(e,t,c,a,n,r,s){return""===e&&(e="00"),""===c&&(c="00"),""===n&&(n="00"),""===t&&(t="59"),""===a&&(a="59"),""===r&&(r="23"),["".concat(n).concat(s).concat(c).concat(s).concat(e),"".concat(r).concat(s).concat(a).concat(s).concat(t)]},r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(""),d=Object(o.a)(j,2),b=d[0],u=d[1],m=Object(n.useState)(""),O=Object(o.a)(m,2),p=O[0],f=O[1],g=Object(n.useState)(""),v=Object(o.a)(g,2),N=v[0],y=v[1],A=Object(n.useState)(""),S=Object(o.a)(A,2),w=S[0],I=S[1],R=Object(n.useState)(""),E=Object(o.a)(R,2),k=E[0],T=E[1],V=Object(n.useState)(""),Z=Object(o.a)(V,2),G=Z[0],M=Z[1],P=Object(n.useState)(""),F=Object(o.a)(P,2),L=F[0],C=F[1],W=Object(n.useState)(""),X=Object(o.a)(W,2),z=X[0],U=X[1],D=Object(n.useState)(""),Y=Object(o.a)(D,2),q=Y[0],B=Y[1],H=Object(n.useState)(""),J=Object(o.a)(H,2),Q=J[0],K=J[1],_=Object(n.useState)(""),$=Object(o.a)(_,2),ee=$[0],te=$[1],ce=Object(n.useState)(""),ae=Object(o.a)(ce,2),ne=ae[0],re=ae[1],se=Object(n.useState)(""),ie=Object(o.a)(se,2),le=ie[0],je=ie[1];return Object(a.jsxs)("div",{className:"input-form",children:[Object(a.jsx)("h2",{children:"Input Details"}),Object(a.jsxs)("form",{onSubmit:function(t){return e(t)},className:"form",children:[Object(a.jsxs)("div",{className:"date-duration",children:[Object(a.jsx)("label",{htmlFor:"date-duration",className:"form-label",children:"Select Day, Date, Time"}),Object(a.jsxs)("p",{className:"input-info",children:["The vehicle data will be analyzed, averaged and graphed as per the specified day, month or year time interval. ",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{})," Eg : Between 1/2/2020 and 3/2/2020 "]}),Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"YEAR"}),Object(a.jsx)("th",{children:"MONTH"}),Object(a.jsx)("th",{children:"DAY"})]})}),Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[Object(a.jsx)("p",{children:"Enter the start and end year in YYYY format"}),Object(a.jsx)("input",{onChange:function(e){f(e.target.value)},value:p,required:!0,type:"number",min:"2001",max:"2020",name:"start-year",id:"start-year",className:"form-input",placeholder:"Eg : 2019"}),Object(a.jsx)("input",{onChange:function(e){y(e.target.value)},value:N,required:!0,type:"number",min:"2001",max:"2020",name:"end-year",id:"end-year",className:"form-input",placeholder:"Eg : 2020"})]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("p",{children:"Enter the start and end month in MM format"}),Object(a.jsx)("input",{onChange:function(e){I(e.target.value)},value:w,type:"number",min:"1",max:"12",name:"start-month",id:"start-month",className:"form-input",placeholder:"Eg : 02"}),Object(a.jsx)("input",{onChange:function(e){T(e.target.value)},value:k,type:"number",min:"1",max:"12",name:"end-month",id:"end-month",className:"form-input",placeholder:"Eg : 03"})]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("p",{children:"Enter the start and end day in DD format"}),Object(a.jsx)("input",{onChange:function(e){M(e.target.value)},value:G,type:"number",min:"1",max:"28",name:"start-day",id:"start-day",className:"form-input",placeholder:"Eg : 01"}),Object(a.jsx)("input",{onChange:function(e){C(e.target.value)},value:L,type:"number",min:"1",max:"28",name:"end-day",id:"end-day",className:"form-input",placeholder:"Eg : 18"})]})]})})]})]}),Object(a.jsxs)("div",{className:"vehicle-id",children:[Object(a.jsx)("label",{htmlFor:"vehicle-id",className:"form-label",children:"Select Vehicle(s)"}),Object(a.jsx)("p",{className:"input-info",children:"Enter start and end vehicle IDs of the range of vehicles that you wish to evaluate "}),Object(a.jsxs)("div",{className:"vehicle-inputs",children:[Object(a.jsx)("label",{htmlFor:"start-vehicle-id",className:"form-label",children:"Set Start Vehicle ID"}),Object(a.jsx)("label",{htmlFor:"end-vehicle-id",className:"form-label",children:"Set End Vehicle ID"}),Object(a.jsx)("input",{onChange:function(e){l(e.target.value)},value:i,required:!0,type:"text",name:"start-vehicle-id",id:"start-vehicle-id",className:"form-input",placeholder:"Eg : EV20201"}),Object(a.jsx)("input",{onChange:function(e){u(e.target.value)},value:b,required:!0,type:"text",name:"end-vehicle-id",id:"end-vehicle-id",className:"form-input",placeholder:"Eg : EV20203"})]}),Object(a.jsxs)("p",{className:"input-info",children:[" ",Object(a.jsx)("br",{})," Eg : For range = EV20201, EV20202, EV20203 ",Object(a.jsx)("br",{}),"Start Vehicle ID = EV20201 ",Object(a.jsx)("br",{})," End Vehicle ID = EV20203 "]})]}),Object(a.jsxs)("div",{className:"time-duration",children:[Object(a.jsx)("p",{className:"form-label",children:"Select Time Duration"}),Object(a.jsxs)("p",{className:"input-info",children:["Given a day, the data can be visualized differently as per different time intervals. For date durations bigger than day, entire day's data will be returned ",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{})," Eg : Between 14:30:30 and 15:30:00 on 13/12/2020 "]}),Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"HOUR"}),Object(a.jsx)("th",{children:"MINUTE"}),Object(a.jsx)("th",{children:"SECOND"})]})}),Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsxs)("td",{children:[Object(a.jsx)("p",{children:"Enter the start and end hour in HH format"}),Object(a.jsx)("input",{onChange:function(e){U(e.target.value)},value:z,type:"number",min:"01",max:"24",name:"start-hr",id:"start-hr",className:"form-input",placeholder:"Eg : 02"}),Object(a.jsx)("input",{onChange:function(e){B(e.target.value)},value:q,type:"number",min:"01",max:"24",name:"end-hr",id:"end-hr",className:"form-input",placeholder:"Eg : 16"})]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("p",{children:"Enter the start and end minute in MM format"}),Object(a.jsx)("input",{onChange:function(e){K(e.target.value)},value:Q,type:"number",min:"1",max:"60",name:"start-min",id:"start-min",className:"form-input",placeholder:"Eg : 02"}),Object(a.jsx)("input",{onChange:function(e){te(e.target.value)},value:ee,type:"number",min:"1",max:"60",name:"end-min",id:"end-min",className:"form-input",placeholder:"Eg : 03"})]}),Object(a.jsxs)("td",{children:[Object(a.jsx)("p",{children:"Enter the start and end second in SS format"}),Object(a.jsx)("input",{onChange:function(e){re(e.target.value)},value:ne,type:"number",min:"1",max:"60",name:"start-sec",id:"start-sec",className:"form-input",placeholder:"Eg : 01"}),Object(a.jsx)("input",{onChange:function(e){je(e.target.value)},value:le,type:"number",min:"1",max:"60",name:"end-sec",id:"end-sec",className:"form-input",placeholder:"Eg : 18"})]})]})})]})]}),Object(a.jsxs)("div",{className:"submit-n-err",children:[Object(a.jsx)("div",{className:"error-box",children:"This is where errors will be shown"}),Object(a.jsx)("button",{type:"submit",className:"submit-btn",children:"Submit"})]})]})]})}var f=c(25),g=c(27),v=c(11),N=c.n(v),y=c(13),A=function(){var e=Object(y.a)(N.a.mark((function e(t){var c,a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=JSON.stringify(t),e.prev=1,e.next=4,fetch("".concat("http://localhost:5000","/api"),{method:"POST",headers:{"Content-Type":"application/json"},body:c});case 4:return a=e.sent,e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();var S=r.a.createContext(),w=function(){return Object(n.useContext)(S)};function I(e){var t=e.children,c=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(o.a)(r,2),i=s[0],l=s[1],j={labels:c,datasets:i},d=function(){var e=Object(y.a)(N.a.mark((function e(t){var c,n,r,s,i,d,b;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("I am about to make a query....."),c=t.idRqst,n=t.plotRqst,r=Object(o.a)(c,2),s=r[0],i=r[1],e.next=5,A(t);case 5:d=e.sent,b=Array.from(d),console.log(b),a(b.map((function(e){return e.xaxis}))),s===i?(l([{label:"".concat(n," vs time"),borderColor:"#30FF00",backgroundColor:"#30FF00",data:b.map((function(e){return e.mean}))}]),console.log(j)):l([{label:"Minimum",borderColor:"#30FF00",backgroundColor:"#30FF00",data:b.map((function(e){return e.min}))},{label:"Maximum",borderColor:"#47d7ff",backgroundColor:"#47d7ff",data:b.map((function(e){return e.max}))},{label:"Mean",borderColor:"#4747ff",backgroundColor:"#4747ff",data:b.map((function(e){return e.mean}))}]);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return x.subscribe((function(){var e=x.getState();d(e)}))})),j}();return Object(a.jsx)(S.Provider,{value:c,children:t})}function R(){var e=w();return Object(a.jsx)("div",{className:"chart-1-container",children:Object(a.jsx)(g.Line,{data:e,height:325,width:850,options:{maintainAspectRatio:!1}})})}function E(){var e=function(e){console.log(e),x.dispatch({type:m,payload:{graph:e}})};return Object(a.jsxs)("div",{className:"graph-container",children:[Object(a.jsx)("h2",{children:"GRAPH"}),Object(a.jsxs)("table",{className:"graph-info",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{className:"left-top",children:"Meaning"}),Object(a.jsx)("th",{children:"Y-Axis"}),Object(a.jsx)("th",{className:"right-top",children:"X-Axis"})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Indicates battery charge remaining over time"}),Object(a.jsx)("td",{children:"SOC (State of charge)"}),Object(a.jsx)("td",{children:"Time"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Indicates energy gained while braking over time"}),Object(a.jsx)("td",{children:"E Regen"}),Object(a.jsx)("td",{children:"Time"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Indicates temperature of battery over time"}),Object(a.jsx)("td",{children:"Battery temp"}),Object(a.jsx)("td",{children:"Time"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Indicates energy consumed over time"}),Object(a.jsx)("td",{children:"E cons"}),Object(a.jsx)("td",{children:"Time"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Indicates distance travelled over time"}),Object(a.jsx)("td",{children:"Dist travelled"}),Object(a.jsx)("td",{children:"Time"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"left-bottom",children:"Indicates number of charging, discharging events over time"}),Object(a.jsx)("td",{children:"Discharge cycles"}),Object(a.jsx)("td",{className:"right-bottom",children:"Time"})]})]})]}),Object(a.jsxs)("div",{className:"graph",children:[Object(a.jsxs)("div",{className:"graph-plot section-1",children:[Object(a.jsx)("h3",{children:"Graph Plot"}),Object(a.jsx)("div",{className:"canvas-container",children:Object(a.jsx)(R,{})})]}),Object(a.jsxs)("div",{className:"graph-options section-2",children:[Object(a.jsx)("h3",{children:"Choose a graph"}),Object(a.jsxs)("div",{className:"choose-graph",children:[Object(a.jsxs)("button",{onClick:function(){return e("soc")},className:"graph-btn",children:[Object(a.jsx)(f.a,{icon:"bolt"}),"\xa0 SOC ",Object(a.jsx)("span",{children:"VS"})," time"]}),Object(a.jsxs)("button",{onClick:function(){return e("temperature")},className:"graph-btn",children:[Object(a.jsx)(f.a,{icon:"car-battery"}),"\xa0 Battery temp ",Object(a.jsx)("span",{children:"VS"})," time"]}),Object(a.jsxs)("button",{onClick:function(){return e("regen")},className:"graph-btn",children:[Object(a.jsx)(f.a,{icon:"atom"}),"\xa0 E Regen ",Object(a.jsx)("span",{children:"VS"})," time"]}),Object(a.jsxs)("button",{onClick:function(){return e("distance")},className:"graph-btn",children:[Object(a.jsx)(f.a,{icon:"directions"}),"\xa0 Dist travelled ",Object(a.jsx)("span",{children:"VS"})," time "]}),Object(a.jsxs)("button",{onClick:function(){return e(O)},className:"graph-btn",children:[Object(a.jsx)(f.a,{icon:"battery-half"}),"\xa0 Energy cons ",Object(a.jsx)("span",{children:"VS"})," time "]}),Object(a.jsxs)("button",{onClick:function(){return e("charging")},className:"graph-btn",children:[Object(a.jsx)(f.a,{icon:"spinner"}),"\xa0 Discharge cycles ",Object(a.jsx)("span",{children:"VS"})," time"]})]})]})]})]})}function k(){var e=w();return Object(a.jsx)("div",{className:"chart-1-container",children:Object(a.jsx)(g.Bar,{data:e,height:300,width:800,options:{maintainAspectRatio:!1}})})}function T(){var e=w();return Object(a.jsx)("div",{className:"chart-1-container",children:Object(a.jsx)(g.Radar,{data:e,height:325,width:800,options:{maintainAspectRatio:!1,legend:{display:!1}}})})}function V(){return Object(a.jsxs)("div",{className:"conclusion",children:[Object(a.jsx)("h2",{children:"CONCLUSION"}),Object(a.jsxs)("div",{className:"graph-conclude",children:[Object(a.jsxs)("div",{className:"graph-plot section-2",children:[Object(a.jsx)("h3",{children:"Analysis"}),Object(a.jsx)("div",{className:"canvas-container",children:Object(a.jsx)(T,{})})]}),Object(a.jsxs)("div",{className:"graph-plot section-1",children:[Object(a.jsx)("h3",{children:"Result"}),Object(a.jsx)("div",{className:"canvas-container",children:Object(a.jsx)(k,{})})]})]})]})}function Z(){return Object(a.jsxs)("div",{className:"model-container",children:[Object(a.jsx)("h2",{children:"Model"}),Object(a.jsx)("div",{className:"model"})]})}var G=c(21);function M(){return Object(a.jsxs)("div",{className:"footer",children:["The Dashboard Project. By ",Object(a.jsx)("a",{className:"by-rfr",target:"_blank",rel:"noreferrer",href:G.a.url,children:" \xa0 Raftar Formula Racing, IIT Madras "})]})}var P=c(26);function F(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{}),Object(a.jsx)(p,{}),Object(a.jsxs)(I,{children:[Object(a.jsx)(E,{}),Object(a.jsx)(V,{})]}),Object(a.jsx)(Z,{}),Object(a.jsx)(M,{})]})}G.c.add(P.d,P.b,P.f,P.e,P.a,P.c);var L=c(196),C=c(76),W=(c(188),C.a.initializeApp({apiKey:"AIzaSyDYcXQgPeCCIgXPRGDmZGDS8oy2K2MQcfg",authDomain:"rfr21-dashboard-auth.firebaseapp.com",projectId:"rfr21-dashboard-auth",storageBucket:"rfr21-dashboard-auth.appspot.com",messagingSenderIdL:"522423065115",appId:"1:522423065115:web:cce12ab2b5afae705576be"})),X=W.auth(),z=r.a.createContext(),U=function(){return Object(n.useContext)(z)};function D(e){var t=e.children,c=Object(n.useState)(),r=Object(o.a)(c,2),s=r[0],i=r[1],l=Object(n.useState)(!0),j=Object(o.a)(l,2),d=j[0],b=j[1],u={currentUser:s,signup:function(e,t){return X.createUserWithEmailAndPassword(e,t)},login:function(e,t){return X.signInWithEmailAndPassword(e,t)},updateEmail:function(e){return X.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)},passwordReset:function(e){return s.sendPasswordResetEmail(e)}};return Object(n.useEffect)((function(){return X.onAuthStateChanged((function(e){i(e),b(!1)}))}),[]),Object(a.jsx)(z.Provider,{value:u,children:!d&&t})}var Y=c(10),q=c(16);function B(e){var t=e.children;return Object(a.jsx)("div",{className:"full-auth-container",children:Object(a.jsx)("div",{className:"auth-container",children:t})})}var H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACWCAYAAAGkxCpKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAxLTA4VDE3OjQ4OjM1KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMS0wOFQxNzo1MjoxNyswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wMS0wOFQxNzo1MjoxNyswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgcGhvdG9zaG9wOkhpc3Rvcnk9IjIwMjEtMDEtMDhUMTc6NDk6MzYrMDU6MzAmI3g5O0ZpbGUgYXRoZXIyLnBuZyBvcGVuZWQmI3hBOzIwMjEtMDEtMDhUMTc6NTI6MTcrMDU6MzAmI3g5O0ZpbGUgQzpcVXNlcnNcYW5raXRcRGVza3RvcFxQcmdTY3JcV2ViRGV2XFNjcmlwdHNcV2ViLURldmVsb3BtZW50LVByb2plY3RzXEZ1bGwgU3RhY2sgUHJvamVjdHNccmZyLTIxLWRhc2hib2FyZFxjbGllbnRcc3JjXGltZ1xhdGhlcjIucG5nIHNhdmVkJiN4QTsiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OWI0ZWMxNGEtNGM3Ny01NDQ0LThkZDktZTExZTliM2YwOTVhIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjliNGVjMTRhLTRjNzctNTQ0NC04ZGQ5LWUxMWU5YjNmMDk1YSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjliNGVjMTRhLTRjNzctNTQ0NC04ZGQ5LWUxMWU5YjNmMDk1YSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWI0ZWMxNGEtNGM3Ny01NDQ0LThkZDktZTExZTliM2YwOTVhIiBzdEV2dDp3aGVuPSIyMDIxLTAxLTA4VDE3OjQ4OjM1KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kAk5uwAAEmpJREFUeJztnU9IHFccx7/j9mA9CBGFmlaqbWoOVdtLmoaQ0g0kuIX2EEsLXrx4TCAXPSgEtLcaUOhJLaU5RHqIUhpwyy6YtlKUkoO7EYp7cUHqwm607IK7C3V5PThj9s/8ee/Nmzczu/uBgdTu/N7v/eY3v/dn3vs9EEJgdu3t7RGNxcVFYvZbhRCCakqlEgkEAjV/r0Kp+YOOsFrplEJbbAqquKdF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",J=c.p+"static/media/black-spinner.696cd6cc.gif";function Q(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),r=U().signup,s=Object(n.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1],d=Object(n.useState)(!1),b=Object(o.a)(d,2),u=b[0],h=b[1],m=Object(Y.g)(),O=function(){var a=Object(y.a)(N.a.mark((function a(n){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),console.log("Form was just submitted !"),t.current.value===c.current.value){a.next=4;break}return a.abrupt("return",j("Passwords do not match"));case 4:return a.prev=4,j(""),h(!0),a.next=9,r(e.current.value,t.current.value);case 9:m.push("/"),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(4),console.log(a.t0.message),j("Failed to create an account for you");case 16:h(!1);case 17:case"end":return a.stop()}}),a,null,[[4,12]])})));return function(e){return a.apply(this,arguments)}}();return Object(a.jsxs)(B,{children:[Object(a.jsxs)("div",{className:"form-container",children:[Object(a.jsxs)("div",{className:"auth-heading",children:[Object(a.jsx)("img",{src:H,alt:"ather-logo"}),Object(a.jsx)("h2",{children:"Sign Up"})]}),l&&Object(a.jsx)("p",{className:"danger",children:l}),Object(a.jsxs)("form",{onSubmit:O,children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",ref:e,required:!0}),Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",ref:t,required:!0}),Object(a.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(a.jsx)("input",{type:"password",id:"confirmPassword",ref:c,required:!0}),Object(a.jsx)(L.a,{disabled:u,className:"authen-button",type:"submit",children:u?Object(a.jsx)("img",{alt:"ather-logo",src:J,style:{height:"16px",width:"16px"}}):"Submit"})]})]}),Object(a.jsxs)("div",{className:"alternate-auth",children:["Already have an account ? ",Object(a.jsx)(q.b,{className:"alternate-auth-link",to:"/login",children:"Login"})]})]})}function K(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=U().login,r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1],j=Object(n.useState)(!1),d=Object(o.a)(j,2),b=d[0],u=d[1],h=Object(Y.g)(),m=function(){var a=Object(y.a)(N.a.mark((function a(n){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,l(""),u(!0),a.next=6,c(e.current.value,t.current.value);case 6:console.log("Login Successful !"),h.push("/"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0.message),l("Failed to log you in");case 14:u(!1);case 15:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}();return Object(a.jsxs)(B,{children:[Object(a.jsxs)("div",{className:"form-container",children:[Object(a.jsxs)("div",{className:"auth-heading",children:[Object(a.jsx)("img",{src:H,alt:"ather-logo"}),Object(a.jsx)("h2",{children:"Login"})]}),i&&Object(a.jsx)("p",{className:"danger",children:i}),Object(a.jsxs)("form",{onSubmit:m,children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",ref:e,required:!0}),Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",id:"password",ref:t,required:!0}),Object(a.jsx)(L.a,{disabled:b,className:"authen-button",type:"submit",children:b?Object(a.jsx)("img",{alt:"ather-logo",src:J,style:{height:"16px",width:"16px"}}):"Submit"})]})]}),Object(a.jsxs)("div",{className:"alternate-auth",children:["Don't have an account ? ",Object(a.jsx)(q.b,{className:"alternate-auth-link",to:"/signup",children:"Sign Up"})]})]})}var _=c(199),$=c(197),ee=c(198);function te(){var e=Object(n.useRef)(),t=U().resetPassword,c=Object(n.useState)(""),r=Object(o.a)(c,2),s=r[0],i=r[1],l=Object(n.useState)(!1),j=Object(o.a)(l,2),d=j[0],b=j[1],u=function(){var c=Object(y.a)(N.a.mark((function c(a){return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a.preventDefault(),c.prev=1,i(""),b(!0),c.next=6,t(e.current.value);case 6:console.log("Login Successful !"),i("Password reset email sent"),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(1),console.log(c.t0.message),i("Failed to reset password");case 14:b(!1);case 15:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(e){return c.apply(this,arguments)}}();return Object(a.jsxs)(B,{children:[Object(a.jsx)(_.a,{children:Object(a.jsxs)(_.a.Body,{children:[Object(a.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),s&&Object(a.jsx)($.a,{variant:"info",children:s}),Object(a.jsxs)(ee.a,{onSubmit:u,children:[Object(a.jsxs)(ee.a.Group,{children:[Object(a.jsx)(ee.a.Label,{children:"Email"}),Object(a.jsx)(ee.a.Control,{type:"email",ref:e,required:!0})]}),Object(a.jsx)(L.a,{disabled:d,className:"w-100",type:"submit",children:"Reset Password"}),Object(a.jsx)(q.b,{to:"/login",children:"Login"})]})]})}),Object(a.jsxs)("div",{className:"mt-2 w-100 text-center",children:["Need an account ? ",Object(a.jsx)(q.b,{to:"/signup",children:"Sign Up."})]})]})}var ce=c(81);function ae(e){var t=e.component,c=Object(ce.a)(e,["component"]),n=U().currentUser;return Object(a.jsx)(Y.b,Object(u.a)(Object(u.a)({},c),{},{render:function(e){return n?Object(a.jsx)(t,Object(u.a)({},e)):Object(a.jsx)(Y.a,{to:"/login"})}}))}function ne(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],r=t[1],s=U(),i=s.logout,l=s.currentUser,j=Object(Y.g)(),d=function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:j.push("/login"),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),r("Failed to log you out"),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(B,{children:Object(a.jsxs)("div",{className:"form-container",children:[Object(a.jsxs)("div",{className:"auth-heading",children:[Object(a.jsx)("img",{src:H,alt:"ather-logo"}),Object(a.jsx)("h2",{children:"Profile"})]}),c&&Object(a.jsx)("p",{className:"danger",children:c}),l&&Object(a.jsxs)("h2",{style:{width:"100%",textAlign:"center",fontSize:"1.4rem",padding:"2rem 1rem"},children:["Email : ",l.email]}),Object(a.jsx)(L.a,{className:"authen-button",to:"/login",variant:"link",onClick:d,children:"Logout"}),Object(a.jsx)(L.a,{className:"authen-button",style:{marginTop:"2rem"},to:"/update-profile",variant:"link",onClick:function(){j.push("/update-profile")},children:"Update Profile"}),Object(a.jsx)(L.a,{className:"authen-button",style:{marginTop:"2rem"},to:"/",variant:"link",onClick:function(){j.push("/")},children:"Back to Dashboard"})]})})}function re(){var e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),r=U(),s=r.currentUser,i=r.updateEmail,l=r.updatePassword,j=Object(n.useState)(""),d=Object(o.a)(j,2),b=d[0],u=d[1],h=Object(n.useState)(!1),m=Object(o.a)(h,2),O=m[0],x=m[1],p=Object(Y.g)(),f=function(){var a=Object(y.a)(N.a.mark((function a(n){var r;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),console.log("Form was just submitted !"),t.current.value===c.current.value){a.next=4;break}return a.abrupt("return",u("Passwords do not match"));case 4:r=[],e.current.value!==s.email&&r.push(i(e.current.value)),t.current.value&&r.push(l(t.current.value)),r.all(r).then((function(){p.push("/")})).catch((function(e){console.log(e),u("Failed to update account")}));try{u(""),x(!0),p.push("/")}catch(b){console.log(b.message),u("Failed to create an account for you")}x(!1);case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(a.jsxs)(B,{children:[Object(a.jsxs)("div",{className:"form-container",children:[Object(a.jsxs)("div",{className:"auth-heading",children:[Object(a.jsx)("img",{src:H,alt:"ather-logo"}),Object(a.jsx)("h2",{children:"Update Profile"})]}),b&&Object(a.jsx)("p",{className:"danger",children:b}),Object(a.jsxs)("form",{onSubmit:f,children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{type:"email",id:"email",ref:e,required:!0}),Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{placeholder:"Leave blank to keep the same",type:"password",id:"password",ref:t,required:!0}),Object(a.jsx)("label",{htmlFor:"password",children:"Confirm Password"}),Object(a.jsx)("input",{placeholder:"Leave blank to keep the same",type:"password",id:"password",ref:c,required:!0}),Object(a.jsx)(L.a,{disabled:O,className:"authen-button",type:"submit",children:O?Object(a.jsx)("img",{src:J,style:{height:"16px",width:"16px"}}):"Submit"})]})]}),Object(a.jsx)("div",{className:"alternate-auth",children:Object(a.jsx)(q.b,{className:"alternate-auth-link",to:"/",children:"Cancel"})})]})}function se(){return Object(a.jsx)("div",{children:"I am about"})}function ie(){return Object(a.jsx)("div",{children:"I am data"})}var le=function(){return Object(a.jsx)(q.a,{children:Object(a.jsx)(D,{children:Object(a.jsxs)(Y.d,{children:[Object(a.jsx)(ae,{exact:!0,path:"/",component:F}),Object(a.jsx)(ae,{exact:!0,path:"/data",component:ie}),Object(a.jsx)(ae,{exact:!0,path:"/about",component:se}),Object(a.jsx)(ae,{exact:!0,path:"/profile",component:ne}),Object(a.jsx)(ae,{exact:!0,path:"/update-profile",component:re}),Object(a.jsx)(Y.b,{exact:!0,path:"/signup",component:Q}),Object(a.jsx)(Y.b,{exact:!0,path:"/login",component:K}),Object(a.jsx)(Y.b,{exact:!0,path:"/forgot-password",component:te})]})})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(le,{})}),document.getElementById("root"))},87:function(e,t,c){}},[[193,1,2]]]);
//# sourceMappingURL=main.c46b33c4.chunk.js.map