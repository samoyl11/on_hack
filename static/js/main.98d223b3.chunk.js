(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){e.exports=a(240)},239:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);a(157),a(208);var n=a(0),c=a.n(n),r=a(28),l=a.n(r),i=a(38),s=a.n(i),o=a(44),d=a(45),u=a(50),h=a(46),p=a(51),m=a(9),f=(a(92),function(e){var t=e.id,a=e.go,n=e.fetchedUser,r=e.qrData;return c.a.createElement(m.h,{id:t},c.a.createElement(m.i,null,"Example"),n&&c.a.createElement(m.d,{title:"User Data Fetched with VK Connect"},c.a.createElement(m.g,{before:n.photo_200?c.a.createElement(m.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(m.d,{title:"Navigation Example"},c.a.createElement(m.c,null,c.a.createElement(m.b,{size:"xl",level:"2",onClick:a,"data-to":"scaner"},"Show me the Persik, please")),c.a.createElement(m.c,null,"".concat(r))))}),b=a(47),E=a.n(b),g=a(48),k=a.n(g),v=a(49),O=a.n(v),j=(Object(m.k)(),a(39),a(239),Object(m.k)()),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={props:e,qrData:111,qrtype:111,fetchedUser:111},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return c.a.createElement(m.h,{id:this.props.id},c.a.createElement(m.i,{left:c.a.createElement(m.e,{onClick:this.props.go,"data-to":"home"},j===m.f?c.a.createElement(k.a,null):c.a.createElement(O.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:E.a,alt:"Persik The Cat"}),c.a.createElement(m.d,{title:"QR Data Fetched with VK Connect"},this.fetchedUser&&c.a.createElement(m.g,null,"DDDATA ".concat(this.fetchedUser))))}}]),t}(c.a.Component),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null,qrData:null},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppOpenQRResult":e.setState({qrData:t.detail.data}),console.log(t.detail.type);break;case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),console.log(t.detail.type);break;default:console.log(t.detail.type)}}),s.a.send("VKWebAppOpenQR")}},{key:"render",value:function(){return c.a.createElement(m.j,{activePanel:this.state.activePanel},c.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(y,{id:"scaner",go:this.go,data:this.state.qrData}))}}]),t}(c.a.Component);s.a.send("VKWebAppInit",{}),l.a.render(c.a.createElement(D,null),document.getElementById("root"))},47:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[156,1,2]]]);
//# sourceMappingURL=main.98d223b3.chunk.js.map