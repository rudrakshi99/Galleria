(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{20:function(e,t,a){e.exports=a(28)},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(17),l=a.n(c),i=(a(25),a(8)),u=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Galleria"),r.a.createElement("h2",null,"Your Gallary"),r.a.createElement("p",null,"The open source web based photo album organizer."))},o=a(11),s=a.n(o),m=a(18),p=a(12),d=(a(29),a(31),p.a.initializeApp({apiKey:"AIzaSyCWmofMOYupJNpu5Rjb2d54Xe9MJS_iViA",authDomain:"galeria-40f45.firebaseapp.com",projectId:"galeria-40f45",storageBucket:"galeria-40f45.appspot.com",messagingSenderId:"891328408971",appId:"1:891328408971:web:aa9521c1a4417440c1d38e",measurementId:"G-8HLBFRHTZ1"})),f=d.storage(),g=d.firestore(),b=p.a.firestore.FieldValue.serverTimestamp,E=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),u=Object(i.a)(l,2),o=u[0],p=u[1],d=Object(n.useState)(null),E=Object(i.a)(d,2),v=E[0],j=E[1];return Object(n.useEffect)((function(){var t=f.ref(e.name),a=g.collection("images");t.put(e).on("state_changed",(function(e){var t=e.byteTransferred/e.totalBytes*100;c(t)}),(function(e){p(e)}),Object(m.a)(s.a.mark((function e(){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=b(),a.add({url:n,createdAt:r}),j(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:v,error:o}},v=a(32),j=function(e){var t=e.file,a=e.setFile,c=E(t),l=c.url,i=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(v.a.div,{initial:{height:"5px",background:"red",marginTop:"20px",width:"60rem"},animate:{height:"5px",background:"red",marginTop:"20px",width:550*i+"px"}})},h=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=["image/png","image/jpeg"],u=Object(n.useState)(null),o=Object(i.a)(u,2),s=o[0],m=o[1];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&l.includes(t.type)?(c(t),m("")):(c(null),m("Please select an image file (png or jpeg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},s&&r.a.createElement("div",{className:"error"}," ",s),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(j,{file:a,setFile:c})))},O=a(13),y=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=g.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},S=function(e){var t=e.setSelectedImg,a=y("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(v.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},s:!0,onClick:function(){return t(e.url)}},r.a.createElement(v.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},I=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(v.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(v.a.img,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))};var k=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(h,null),r.a.createElement(S,{setSelectedImg:c}),a&&r.a.createElement(I,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.0fb8a08e.chunk.js.map