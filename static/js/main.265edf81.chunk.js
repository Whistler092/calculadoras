(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(20),o=t.n(s),r=(t(62),t(14)),c=t(15),i=t(18),m=t(16),d=t(17),u=t(13),h=t(117),E=t(116),f=(t(64),t(107)),y=t(108),g=t(109),p=t(110),v=t(118),b=t(115),x=t(111),w=t(112),N=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleChange=function(e){var a=e.target.value;t.setState({monto:a})},t.handleRateChange=function(e){t.setState({tasa:e.target.value})},t.handleMonthsChange=function(e){t.setState({meses:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.generatePayments()},t.state={monto:0,tasa:1.02,meses:12},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.generatePayments()}},{key:"generatePayments",value:function(){var e=[];if(0!==this.state.monto&&""!==this.state.monto){var a=parseFloat(this.state.monto);e.push({id:0,renta:0,intereses:0,amortizacion:0,capital:this.formatMoney(a)});for(var t=this.convertPercentage(this.state.tasa)/12,n=a/((1-Math.pow(1+t,-this.state.meses))/t),l=this.state.monto,s=0;s<this.state.meses;s++){var o=l*t,r=n-o;l-=r,e.push({id:s+1,renta:this.formatMoney(n),intereses:this.formatMoney(o),amortizacion:this.formatMoney(r),capital:this.formatMoney(l)})}this.setState({cuotas:e})}else this.setState({cuotas:null})}},{key:"formatMoney",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;try{return e.toFixed(a).replace(/\d(?=(\d{3})+\.)/g,"$&,")}catch(t){console.log(t)}}},{key:"convertPercentage",value:function(e){return e/100}},{key:"obtenerCuotas",value:function(){return this.state.cuotas.map(function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,"#",e.id),l.a.createElement("td",null,e.renta),l.a.createElement("td",null,e.intereses),l.a.createElement("td",null,e.amortizacion),l.a.createElement("td",null,e.capital))})}},{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:12,md:12,lg:12},l.a.createElement("h1",null,"Calculadora de cr\xe9dito"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(p.a,null,l.a.createElement(v.a,null,l.a.createElement(v.a.Addon,null,"Monto Prestamo $"),l.a.createElement(b.a,{type:"text",value:this.state.monto,placeholder:"Digita el monto de tu prestamo",onChange:this.handleChange}),l.a.createElement(v.a.Addon,null,".00"))),l.a.createElement(p.a,null,l.a.createElement(v.a,null,l.a.createElement(v.a.Button,null,l.a.createElement(x.a,null,"Meses")),l.a.createElement(b.a,{type:"text",value:this.state.meses,placeholder:"Digita la tasa ",onChange:this.handleMonthsChange}))),l.a.createElement(p.a,null,l.a.createElement(v.a,null,l.a.createElement(v.a.Button,null,l.a.createElement(x.a,null,"Tasa de Interes")),l.a.createElement(b.a,{type:"text",value:this.state.tasa,placeholder:"Digita el n\xfamero de meses",onChange:this.handleRateChange}),l.a.createElement(v.a.Addon,null,"%"))),l.a.createElement(x.a,{type:"submit"},"Calcular")),l.a.createElement("br",null),this.state.cuotas?l.a.createElement(w.a,{striped:!0,bordered:!0,condensed:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Vlr. Cuota"),l.a.createElement("th",null,"Intereses"),l.a.createElement("th",null,"Amortizaci\xf3n"),l.a.createElement("th",null,"Saldo"))),l.a.createElement("tbody",null,this.obtenerCuotas())):l.a.createElement("p",null,"Digitar un valor de Monto"))))}}]),a}(n.Component),S=t(113),C=t(114),P=t(102),M=(t(100),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleBasicChange=function(e){t.setState({salarioBasico:e.target.value})},t.handleDaysChange=function(e){t.setState({dias:e.target.value})},t.handleSubmit=t.handleSubmit.bind(Object(u.a)(Object(u.a)(t))),t.state={salarioBasico:781242,dias:30,devengado:{basico:0,auxilioTrasporte:0,total:0},deducciones:{salud:0,pension:0,total:0},aportesParafiscales:{Salud:0,FondoDePensiones:0,ARL:0,Parafiscales:0,Prima:0,Cesantias:0,InteresesDeCesantias:0,Vacaciones:0,Dotacion:0,total:0,subtotal:0},netoPagado:0},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.doMaths()}},{key:"componentDidMount",value:function(){this.doMaths()}},{key:"doMaths",value:function(){var e=this.state,a=e.salarioBasico,t=a/30*e.dias,n=a<=1562484?88211:0,l=n+t,s=.04*t,o=.04*t,r=s+o,c=.085*t,i=.12*t,m=.0052*t,d=.09*t,u=.0833*t,h=.0833*t,E=.01*t,f=.0417*t,y=.05*t,g=c+i+m+d+u+h+E+f+y;this.setState({devengado:{basico:t,auxilioTrasporte:n,total:l},deducciones:{salud:s,pension:o,total:r},netoPagado:l-r,aportesParafiscales:{Salud:c,FondoDePensiones:i,ARL:m,Parafiscales:d,Prima:u,Cesantias:h,InteresesDeCesantias:E,Vacaciones:f,Dotacion:y,total:g+l-r,subtotal:g}})}},{key:"formatMoney",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;try{return e.toFixed(a).replace(/\d(?=(\d{3})+\.)/g,"$&,")}catch(t){console.log(t)}}},{key:"getValidationState",value:function(){var e=parseInt(this.state.value);return e<30&&e>0?"success":e<0?"warning":e>30?"error":null}},{key:"render",value:function(){var e=this;return l.a.createElement(f.a,null,l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:12,md:12,lg:12},l.a.createElement("h1",null,"Calculadora de Salarios"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(p.a,null,l.a.createElement(v.a,null,l.a.createElement(v.a.Addon,null,"Sueldo B\xe1sico $"),l.a.createElement(b.a,{type:"text",value:this.formatMoney(this.state.salarioBasico),onChange:function(a){return e.handleBasicChange(a)}}),l.a.createElement(v.a.Addon,null,".00"))),l.a.createElement(p.a,{controlId:"formBasicText",validationState:this.getValidationState()},l.a.createElement(v.a,null,l.a.createElement(v.a.Addon,null,"D\xedas Liquidados"),l.a.createElement(b.a,{type:"text",value:this.state.dias,placeholder:"Entre 1 y 30 d\xedas",onChange:this.handleDaysChange}),l.a.createElement(b.a.Feedback,null)),l.a.createElement(S.a,null)),l.a.createElement(x.a,{type:"submit"},"Calcular")),l.a.createElement("hr",null),l.a.createElement("div",{className:"payroll-list-output"},l.a.createElement(C.a,null,l.a.createElement(P.a,{header:"DEVENGADO",bsStyle:"info"},l.a.createElement(f.a,null,l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"B\xe1sico"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.devengado.basico))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"Auxilio de Trasporte"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.devengado.auxilioTrasporte))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},l.a.createElement("strong",null)),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},l.a.createElement("strong",null))))),l.a.createElement(P.a,{header:"DEDUCCIONES",bsStyle:"danger"},l.a.createElement(f.a,null,l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"Salud (4%)"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.deducciones.salud))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"Pension (4%)"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.deducciones.pension))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},l.a.createElement("strong",null,"Total Deducciones")),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},l.a.createElement("strong",null,this.formatMoney(this.state.deducciones.total)))))),l.a.createElement(P.a,{header:"Neto Pagado",bsSize:"success"},l.a.createElement(f.a,null,l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8}),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},l.a.createElement("strong",null,this.formatMoney(this.state.netoPagado)))))),l.a.createElement(P.a,{header:"Aportes Parafiscales",bsStyle:"info"},l.a.createElement(f.a,null,l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"Salud (8.5%)"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.aportesParafiscales.Salud))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"Fondo de Pensiones (12%)"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.aportesParafiscales.FondoDePensiones))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"ARL (0.52%)"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.aportesParafiscales.ARL))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"Parafiscales (9%)"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.aportesParafiscales.Parafiscales))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"Prima (8.33%)"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.aportesParafiscales.Prima))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"Cesantias (8.33%)"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.aportesParafiscales.Cesantias))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"Intereses de cesantias (1%)"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.aportesParafiscales.InteresesDeCesantias))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"Vacaciones (4.17%)"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.aportesParafiscales.Vacaciones))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},"Dotacion (5%)"),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},this.formatMoney(this.state.aportesParafiscales.Dotacion))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},l.a.createElement("strong",null,"SubTotal")),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},l.a.createElement("strong",null,this.formatMoney(this.state.aportesParafiscales.subtotal)))),l.a.createElement(y.a,{className:"show-grid"},l.a.createElement(g.a,{xs:8,md:8},l.a.createElement("strong",null,"Total")),l.a.createElement(g.a,{xs:4,md:4,className:"payroll-list-money"},l.a.createElement("strong",null,this.formatMoney(this.state.aportesParafiscales.total)))))))))))}}]),a}(n.Component)),k=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleSelect=t.handleSelect.bind(Object(u.a)(Object(u.a)(t))),t.state={key:2},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"handleSelect",value:function(e){console.log("selected ".concat(e)),this.setState({key:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h.a,{activeKey:this.state.key,onSelect:this.handleSelect,id:"controlled-tab"},l.a.createElement(E.a,{eventKey:1,title:"Simulador de Cr\xe9ditos"},l.a.createElement(N,null)),l.a.createElement(E.a,{eventKey:2,title:"Simulador de Sueldos"},l.a.createElement(M,null))))}}]),a}(n.Component),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(l.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");D?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):O(e)})}}()},57:function(e,a,t){e.exports=t(106)},62:function(e,a,t){},64:function(e,a,t){}},[[57,2,1]]]);
//# sourceMappingURL=main.265edf81.chunk.js.map