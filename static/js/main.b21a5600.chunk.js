(this["webpackJsonpcowin-slots"]=this["webpackJsonpcowin-slots"]||[]).push([[0],{69:function(t,e,n){},95:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(9),r=n.n(i),s=(n(69),n(18)),o=n.n(s),l=n(28),d=n(12),u=n(137),b=n(135),j=n(131),p=n(138),x=n(29),f=n.n(x),m=n(128),h=n(130),O=n(125),v=Object(O.a)((function(t){return{container:{boxSizing:"border-box",backgroundColor:"white",marginTop:"50px",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",width:"75%"},containerData:{boxSizing:"border-box",backgroundColor:"white",padding:"20px",paddingBottom:"0px",marginTop:"50px",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",width:"75%"},button:{margin:"20px"},submitButton:{marginTop:"20px"},select:{boxSizing:"border-box",width:"200px",marginBottom:"20px"},label:{position:"relative",padding:"0px"},form:{margin:"20px",marginTop:"0px",display:"flex",flexDirection:"column",alignItems:"stretch"},loadingButton:{margin:"20px",marginTop:"0px"},divider:{backgroundColor:"black",width:"20%",margin:"20px"},card:{color:"#fff",width:"90%",backgroundColor:"#424242",marginBottom:"20px"},cardContent:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"},cardTitle:{fontSize:"20px",fontWeight:"bold",textShadow:"2px 2px 2px rgba(0,0,0,0.5)"}}})),g=n(5),S=function(t){var e=t.centerData,n=v();return Object(g.jsx)(m.a,{className:n.card,children:Object(g.jsxs)(h.a,{className:n.cardContent,children:[Object(g.jsxs)(j.a,{variant:"h6",children:[Object(g.jsx)("span",{children:"Name: "}),e.name]}),Object(g.jsxs)(j.a,{variant:"subtitle1",children:["Address : ",e.address]}),Object(g.jsxs)(j.a,{children:["Fee Type : ",e.fee_type]}),Object(g.jsxs)(j.a,{children:["Time : ",e.from," to ",e.to]})]})})},y=n(140),w=function(t){var e=t.setPincode,n=v(),c=Object(a.useRef)(null);return Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=c.current.value;if(6!==n.length)return alert("Please enter a valid pincode."),void c.current.focus();e(n)},className:n.form,children:[Object(g.jsx)(y.a,{variant:"outlined",label:"Enter Pincode",inputRef:c,type:"number"}),Object(g.jsx)(b.a,{color:"primary",className:n.submitButton,variant:"contained",type:"submit",children:"Submit"})]})},D=n(136),N=n(134),k=n(142),B=n(139),C=n(143),I=function(t){var e=t.setDistrictId,n=Object(a.useState)(),c=Object(d.a)(n,2),i=c[0],r=c[1],s=Object(a.useState)(!0),u=Object(d.a)(s,2),j=u[0],p=u[1],x=Object(a.useState)(),m=Object(d.a)(x,2),h=m[0],O=m[1],S=Object(a.useState)(),y=Object(d.a)(S,2),w=y[0],I=y[1],_=v();return Object(a.useEffect)((function(){var t="https://cdn-api.co-vin.in/api/v2/admin/location/states";function e(){return(e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t);case 2:n=e.sent,r(n.data.states),p(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j]),Object(a.useEffect)((function(){var t="https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(h);function e(){return(e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t);case 2:n=e.sent,I(n.data.districts);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),Object(g.jsx)(g.Fragment,{children:j?Object(g.jsx)(D.a,{className:_.loadingButton}):Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("form",{className:_.form,onSubmit:function(t){t.preventDefault();var n=t.target[2].value;e(n)},children:[Object(g.jsxs)(N.a,{className:_.select,variant:"outlined",children:[Object(g.jsx)(k.a,{id:"select-state",children:"State"}),Object(g.jsx)(B.a,{onChange:function(t){return O(t.target.value)},label:"State",labelId:"select-state",children:i.map((function(t){return Object(g.jsx)(C.a,{value:t.state_id,children:t.state_name},t.state_id)}))})]}),h?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(N.a,{className:_.select,variant:"outlined",children:[Object(g.jsx)(k.a,{id:"select-district",children:"District"}),Object(g.jsx)(B.a,{label:"District",labelId:"select-district",children:w.map((function(t){return Object(g.jsx)(C.a,{value:t.district_id,children:t.district_name},t.district_id)}))})]}),Object(g.jsx)(b.a,{color:"primary",variant:"contained",type:"submit",children:"Submit"})]}):null]})})})};var _=function(){var t=Object(a.useState)("pincode"),e=Object(d.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)([]),r=Object(d.a)(i,2),s=r[0],x=r[1],m=Object(a.useState)(),h=Object(d.a)(m,2),O=h[0],y=h[1],D=Object(a.useState)(),N=Object(d.a)(D,2),k=N[0],B=N[1];Object(a.useEffect)((function(){var t,e=O?"pincode":"districtId",n=function(t){var e=String(t.getMonth()+1),n=String(t.getDate()),a=String(t.getFullYear());return e.length<2&&(e="0"+e),n.length<2&&(n="0"+n),"".concat(n,"-").concat(e,"-").concat(a)}(new Date);if("pincode"===e){var a=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t);case 2:n=e.sent,x(n.data.centers);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=".concat(O,"&date=").concat(n),a()}else{var c=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(t);case 2:n=e.sent,x(n.data.centers);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=".concat(k,"&date=").concat(n,"\n      "),c()}}),[O,k]),console.log(s);var C=v();return Object(g.jsxs)("div",{children:["pincode"===n?Object(g.jsxs)(u.a,{className:C.container,children:[Object(g.jsx)(b.a,{variant:"outlined",className:C.button,color:"secondary",onClick:function(){return c("state")},children:Object(g.jsx)(j.a,{variant:"caption",children:"Get Slots by State List"})}),Object(g.jsx)(w,{setPincode:function(t){B(0),y(t)}})]}):Object(g.jsxs)(u.a,{className:C.container,children:[Object(g.jsx)(b.a,{variant:"outlined",className:C.button,color:"secondary",onClick:function(){return c("pincode")},children:Object(g.jsx)(j.a,{variant:"caption",children:"Get Slots by Pincode"})}),Object(g.jsx)(I,{setDistrictId:function(t){y(0),B(t)}})]}),s.length?Object(g.jsxs)(u.a,{className:C.containerData,children:[Object(g.jsx)(j.a,{variant:"h6",children:"No Data Yet"}),Object(g.jsx)(p.a,{className:C.divider,variant:"fullWidth"}),s.map((function(t){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(S,{centerData:t},t.center_id)})}))]}):null]})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(_,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.b21a5600.chunk.js.map