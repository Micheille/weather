(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(5),r=a.n(s),l=a(4),i=a.n(l),o=a(6),j=a(2),h=(a(12),a(0)),d={1:"jan",2:"feb",3:"mar",4:"apr",5:"may",6:"jun",7:"jul",8:"aug",9:"sep",10:"oct",11:"nov",12:"dec"};function b(e){var t=e.date,a=e.icon,c=e.temp,n=new Date(t),s=d[n.getMonth()],r=n.getDate(),l=n.getFullYear();return Object(h.jsxs)("section",{className:"card",children:[Object(h.jsx)("p",{className:"card__date",children:"".concat(r," ").concat(s," ").concat(l)}),Object(h.jsx)("div",{className:"card__icon",children:Object(h.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(a,"@2x.png")})}),Object(h.jsx)("p",{className:"card__temp",children:"+ ".concat(Math.round(c-273))})]})}var u=a.p+"static/media/Academy-Weather-bg160.1a743710.svg";a(14);function p(){return Object(h.jsxs)("section",{className:"intro",children:[Object(h.jsx)("img",{src:u}),Object(h.jsx)("p",{className:"intro__text",children:"Fill in all the fields and the weather will be displayed"})]})}a(15);var O={Samara:{lat:53.195873,lon:50.100193},Tolyatti:{lat:53.507836,lon:49.420393},Saratov:{lat:51.533557,lon:46.034257},Kazan:{lat:55.796127,lon:49.106405},Krasnodar:{lat:55.796127,lon:38.975313}};function m(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(j.a)(s,2),l=r[0],d=r[1],u=Object(c.useState)(0),m=Object(j.a)(u,2),x=m[0],_=m[1],f=Object(c.useState)(!1),w=Object(j.a)(f,2),v=w[0],N=w[1],g=Object(c.useState)(""),S=Object(j.a)(g,2),y=S[0],D=S[1],M=Object(c.useState)(""),k=Object(j.a)(M,2),K=k[0],F=k[1],T=Object(c.useState)(0),z=Object(j.a)(T,2),A=z[0],C=z[1],E=function(){var e=Object(o.a)(i.a.mark((function e(t,a,c){var n,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(t,"&lon=").concat(a,"&dt=").concat(c,"&appid=f4ea689bc636fcf4c6e9a08ea5f9f7f8"));case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,n.ok?(F(s.current.weather[0].icon),C(s.current.temp),N(!0)):(D(s.message),N(!1));case 7:case"end":return e.stop()}}),e)})));return function(t,a,c){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){a&&x&&E(O[a].lat,O[a].lon,x)}));return Object(h.jsxs)("article",{className:"weather-past",children:[Object(h.jsxs)("section",{className:"weather-past__top",children:[Object(h.jsx)("h1",{className:"weather-past__title",children:"Forecast for a Date in the Past"}),Object(h.jsxs)("section",{className:"weather-past__forms",children:[Object(h.jsxs)("select",{className:"weather-past__select",onChange:function(e){return n(e.target.value)},children:[Object(h.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Select city"}),Object(h.jsx)("option",{value:"Samara",children:"\u0421\u0430\u043c\u0430\u0440\u0430"}),Object(h.jsx)("option",{value:"Tolyatti",children:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438"}),Object(h.jsx)("option",{value:"Saratov",children:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432"}),Object(h.jsx)("option",{value:"Kazan",children:"\u041a\u0430\u0437\u0430\u043d\u044c"}),Object(h.jsx)("option",{value:"Krasnodar",children:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440"})]}),Object(h.jsx)("input",{className:"weather-past__select",type:"date",onChange:function(e){d(e.target.value);var t=new Date(e.target.value).getTime(),a=Math.floor(t/1e3);_(a)}})]})]}),Object(h.jsxs)("section",{className:"weather-past__content",children:[v?Object(h.jsx)(b,{date:l,icon:K,temp:A}):Object(h.jsx)(p,{}),Object(h.jsx)("p",{className:"weather-past__error",children:!v&&y&&"Sorry, ".concat(y,"!")})]})]})}a(16);function x(){return Object(h.jsxs)("div",{className:"weather",children:[Object(h.jsx)("header",{className:"weather__header",children:Object(h.jsxs)("div",{className:"weather__title",children:[Object(h.jsx)("h1",{className:"weather__title-word weather__title-word_weather",children:"Weather"}),Object(h.jsx)("h1",{className:"weather__title-word weather__title-word_forecast",children:"forecast"})]})}),Object(h.jsx)("main",{className:"weather__main",children:Object(h.jsx)(m,{})}),Object(h.jsx)("footer",{className:"weather__footer",children:Object(h.jsx)("p",{className:"weather__meta",children:"\u0421 \u043b\u044e\u0431\u043e\u0432\u044c\u044e \u043e\u0442 Mercury Development"})})]})}a(17);var _=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(x,{})})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.54e6298e.chunk.js.map