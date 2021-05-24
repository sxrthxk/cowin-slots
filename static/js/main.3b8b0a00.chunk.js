(this["webpackJsonpcowin-slots"]=this["webpackJsonpcowin-slots"]||[]).push([[0],{69:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(10),r=a.n(i),s=(a(69),a(18)),o=a.n(s),l=a(28),d=a(12),j=a(139),b=a(137),u=a(132),p=a(133),x=a(29),O=a.n(x),m=a(129),f=a(131),h=a(7),v=a(126),g=Object(v.a)((function(e){var t;return t={},Object(h.a)(t,e.breakpoints.down("md"),{backgroundColor:e.palette.secondary.main}),Object(h.a)(t,"container",{boxSizing:"border-box",backgroundColor:"white",marginTop:"50px",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",width:"85%"}),Object(h.a)(t,"containerData",{boxSizing:"border-box",backgroundColor:"white",padding:"20px",paddingTop:"0px",paddingBottom:"0px",marginTop:"50px",marginBottom:"50px",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"center",width:"85%"}),Object(h.a)(t,"button",{margin:"20px"}),Object(h.a)(t,"submitButton",{marginTop:"20px"}),Object(h.a)(t,"select",{width:"200px",marginBottom:"20px"}),Object(h.a)(t,"label",{position:"relative",padding:"0px"}),Object(h.a)(t,"form",{margin:"20px",marginTop:"0px",display:"flex",flexDirection:"column",alignItems:"stretch"}),Object(h.a)(t,"loadingButton",{margin:"20px",marginTop:"0px"}),Object(h.a)(t,"divider",{backgroundColor:"black",width:"50%",margin:"20px"}),Object(h.a)(t,"card",{color:"#fff",width:"90%",backgroundColor:"#424242"}),Object(h.a)(t,"cardContent",{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}),Object(h.a)(t,"cardTitle",{fontSize:"20px",fontWeight:"bold",textShadow:"2px 2px 2px rgba(0,0,0,0.5)"}),t})),y=a(4),S=function(e){var t=e.centerData,a=g();return Object(y.jsx)(m.a,{className:a.card,children:Object(y.jsxs)(f.a,{className:a.cardContent,children:[Object(y.jsxs)(u.a,{variant:"h6",children:["Name: "," ",Object(y.jsx)("b",{children:t.name})]}),Object(y.jsxs)(u.a,{variant:"subtitle1",children:["Address : ",t.address]}),Object(y.jsxs)(u.a,{children:["Fee Type: "," ","Paid"===t.fee_type?Object(y.jsx)("b",{style:{color:"salmon"},children:t.fee_type}):Object(y.jsx)("b",{style:{color:"green"},children:t.fee_type})]}),"Paid"===t.fee_type?Object(y.jsx)(y.Fragment,{children:t.vaccine_fees.map((function(e){return Object(y.jsxs)(u.a,{children:["Fees: Rs. ",Object(y.jsx)("b",{children:e.fee})," for ",e.vaccine]})}))}):null,Object(y.jsxs)(u.a,{children:["Time : ",t.from," to ",t.to]}),t.sessions.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)(p.a,{className:a.divider}),Object(y.jsxs)(u.a,{children:["Vaccine : ",Object(y.jsx)("u",{children:e.vaccine})]}),Object(y.jsxs)(u.a,{children:["Age Limit : ",Object(y.jsx)("b",{style:{color:"SandyBrown"},children:e.min_age_limit})]}),0===e.available_capacity?Object(y.jsxs)(u.a,{children:["Available Doses: ",Object(y.jsx)("b",{style:{color:"salmon"},children:"None"})]}):Object(y.jsxs)(u.a,{children:["Available Doses:"," ",Object(y.jsx)("b",{children:Object(y.jsx)("span",{style:{color:"LightSeaGreen"},children:e.available_capacity})})," ","| Dose 1: ",e.available_capacity_dose1,", Dose 2 :"," ",e.available_capacity_dose2]}),e.slots.map((function(e,t){return Object(y.jsxs)(u.a,{children:[" ","Slot ",t+1," : ",e]})}))]},e.session_id)}))]})})},w=a(141),D=function(e){var t=e.setPincode,a=g(),c=Object(n.useRef)(null);return Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=c.current.value;if(6!==a.length)return alert("Please enter a valid pincode."),void c.current.focus();t(a)},className:a.form,children:[Object(y.jsx)(w.a,{variant:"outlined",label:"Enter Pincode",inputRef:c,type:"number"}),Object(y.jsx)(b.a,{color:"primary",className:a.submitButton,variant:"contained",type:"submit",children:"Submit"})]})},_=a(138),N=a(136),k=a(143),B=a(140),C=a(144),I=(a(95),function(e){var t=e.setDistrictId,a=Object(n.useState)(),c=Object(d.a)(a,2),i=c[0],r=c[1],s=Object(n.useState)(!0),j=Object(d.a)(s,2),u=j[0],p=j[1],x=Object(n.useState)(),m=Object(d.a)(x,2),f=m[0],h=m[1],v=Object(n.useState)(),S=Object(d.a)(v,2),w=S[0],D=S[1],I=g();return Object(n.useEffect)((function(){var e="https://cdn-api.co-vin.in/api/v2/admin/location/states";function t(){return(t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get(e);case 2:a=t.sent,r(a.data.states),p(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[u]),Object(n.useEffect)((function(){var e="https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(f);function t(){return(t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get(e);case 2:a=t.sent,D(a.data.districts);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[f]),Object(y.jsx)(y.Fragment,{children:u?Object(y.jsx)(_.a,{className:I.loadingButton}):Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("form",{className:I.form,onSubmit:function(e){e.preventDefault();var a=e.target[2].value;t(a)},children:[Object(y.jsxs)(N.a,{variant:"outlined",children:[Object(y.jsx)(k.a,{className:"select-class",id:"select-state",children:"State"}),Object(y.jsx)(B.a,{className:"select-class",onChange:function(e){return h(e.target.value)},label:"State",labelId:"select-state",children:i.map((function(e){return Object(y.jsx)(C.a,{value:e.state_id,children:e.state_name},e.state_id)}))})]}),f?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(N.a,{variant:"outlined",children:[Object(y.jsx)(k.a,{className:"select-class",id:"select-district",children:"District"}),Object(y.jsx)(B.a,{className:"select-class",label:"District",labelId:"select-district",children:w.map((function(e){return Object(y.jsx)(C.a,{value:e.district_id,children:e.district_name},e.district_id)}))})]}),Object(y.jsx)(b.a,{color:"primary",variant:"contained",type:"submit",children:"Submit"})]}):null]})})})});var T=function(){var e=Object(n.useState)("pincode"),t=Object(d.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)([]),s=Object(d.a)(r,2),x=s[0],m=s[1],f=Object(n.useState)(),h=Object(d.a)(f,2),v=h[0],w=h[1],_=Object(n.useState)(),N=Object(d.a)(_,2),k=N[0],B=N[1];Object(n.useEffect)((function(){var e,t=v?"pincode":"districtId",a=function(e){var t=String(e.getMonth()+1),a=String(e.getDate()),n=String(e.getFullYear());return t.length<2&&(t="0"+t),a.length<2&&(a="0"+a),"".concat(a,"-").concat(t,"-").concat(n)}(new Date);if("pincode"===t){var n=function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get(e);case 2:a=t.sent,m(a.data.centers);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=".concat(v,"&date=").concat(a),n()}else{var c=function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get(e);case 2:a=t.sent,m(a.data.centers);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=".concat(k,"&date=").concat(a,"\n      "),c()}}),[v,k]),console.log(x);var C=g();return Object(y.jsxs)("div",{className:"rootDiv",children:["pincode"===a?Object(y.jsxs)(j.a,{className:C.container,children:[Object(y.jsx)(b.a,{variant:"outlined",className:C.button,color:"secondary",onClick:function(){return i("state")},children:Object(y.jsx)(u.a,{variant:"caption",children:"Get Slots by State List"})}),Object(y.jsx)(D,{setPincode:function(e){B(0),w(e)}})]}):Object(y.jsxs)(j.a,{className:C.container,children:[Object(y.jsx)(b.a,{variant:"outlined",className:C.button,color:"secondary",onClick:function(){return i("pincode")},children:Object(y.jsx)(u.a,{variant:"caption",children:"Get Slots by Pincode"})}),Object(y.jsx)(I,{setDistrictId:function(e){w(0),B(e)}})]}),x.length?Object(y.jsxs)(j.a,{className:C.containerData,children:[Object(y.jsx)(p.a,{className:C.divider,variant:"fullWidth"}),x.map((function(e){return Object(y.jsxs)(c.a.Fragment,{children:[Object(y.jsx)(S,{centerData:e}),Object(y.jsx)(p.a,{className:C.divider,variant:"fullWidth"})]},e.center_id)}))]}):null]})};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(T,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.3b8b0a00.chunk.js.map