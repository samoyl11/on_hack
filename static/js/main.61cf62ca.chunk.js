(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,a){e.exports=a(235)},233:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);a(152),a(203);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),i=a(32),o=a.n(i),s=a(39),u=a(40),d=a(42),m=a(41),h=a(43),p=a(11),b=(a(85),function(e){var t=e.id,a=(e.qrResult,e.go),n=e.handle;return l.a.createElement(p.h,{id:t},l.a.createElement(p.i,null,"Photo2Text"),l.a.createElement(p.e,null,l.a.createElement(p.b,null,l.a.createElement(p.d,null,l.a.createElement(p.c,{size:"xl",level:"secondary",onChange:n}))),l.a.createElement(p.b,null,l.a.createElement(p.a,{top:"\u0413\u0430\u043b\u0435\u0440\u0435\u044f",size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u0413\u0430\u043b\u0435\u0440\u0435\u044f"))))}),f=a(91),E=a.n(f),g=(a(233),a(92)),v=a.n(g),k=a(93),j=a.n(k),O=Object(p.k)(),P=function(e){return l.a.createElement(p.h,{id:e.id},l.a.createElement(p.i,{left:l.a.createElement(p.f,{onClick:e.go,"data-to":"home"},O===p.g?l.a.createElement(v.a,null):l.a.createElement(j.a,null))},"Persik"),l.a.createElement("img",{className:"Persik",src:E.a,alt:"Persik The Cat"}))},R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={go:e.go,qrResult:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppOpenQRResult":e.setState({qrResult:t.detail.qr_data}),console.log(t.detail.qr_data);break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppOpenQR")}},{key:"render",value:function(){return l.a.createElement(p.j,{activePanel:this.state.activePanel},l.a.createElement(P,{id:"persik",go:this.go}))}}]),t}(l.a.Component),q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.handle=function(e){e.preventDefault(),a.setState({fileUpload:e.target.value})},a.state={activePanel:"home",qrResult:null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(p.j,{activePanel:this.state.activePanel},l.a.createElement(b,{id:"home",qrResult:this.state.qrResult,go:this.go,handle:this.handle}),l.a.createElement(R,{go:this.go}))}}]),t}(l.a.Component);o.a.send("VKWebAppInit",{}),c.a.render(l.a.createElement(q,null),document.getElementById("root"))},91:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[151,1,2]]]);
//# sourceMappingURL=main.61cf62ca.chunk.js.map