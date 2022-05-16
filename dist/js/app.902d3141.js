(function(){"use strict";var t={261:function(t,n,e){var r=e(8935),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("Inicio")]),t._v(" | "),e("router-link",{attrs:{to:"/servicios"}},[t._v("Servicios")]),t._v(" | "),e("router-link",{attrs:{to:"/blog/1"}},[t._v("Blog")]),t._v(" | "),e("router-link",{attrs:{to:{name:"contacto"}}},[t._v("Contacto")])],1),e("router-view")],1)},i=[],a=e(1001),u={},l=(0,a.Z)(u,o,i,!1,null,null,null),c=l.exports,s=e(2809),v=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Página de inicio")])])}],p={},_=(0,a.Z)(p,v,f,!1,null,null,null),d=_.exports,h=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Página de Contacto")])])}],b={},g=(0,a.Z)(b,h,m,!1,null,null,null),E=g.exports,$=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Servicios:")]),e("p",[t._v("Sitios web autoadministrables")]),e("p",[t._v("Desarrollo a medida")]),e("p",[t._v("Alojamiento de webs")]),e("p",[t._v("SEO")])])}],w={},x=(0,a.Z)(w,$,k,!1,null,"cb31b7c2",null),O=x.exports,Z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v(t._s(t.tituloEntrada))]),e("router-link",{attrs:{to:t.paginar(!1)}},[t._v("Anterior")]),t._v("| "),e("router-link",{attrs:{to:t.paginar(!0)}},[t._v("Siguiente")]),e("p"),e("router-link",{attrs:{to:{name:"comentarios"}}},[t._v("Ver comentarios")]),e("router-view")],1)},y=[],j={methods:{paginar(t){let n=parseInt(this.$route.params.entrada);return t?n<10?`/blog/${n+1}`:`/blog/${n}`:n>1?"/blog/"+(n-1):`/blog/${n}`}},computed:{tituloEntrada(){return`Entrada ${this.$route.params.entrada} del Blog`}}},C=j,S=(0,a.Z)(C,Z,y,!1,null,null,null),P=S.exports,q=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[e("b",[t._v("Juan dice:")]),e("label",[t._v("Es un gran blog. Los sigo.")])]),e("p",[e("b",[t._v("Carlos dice:")]),e("label",[t._v("Excelente contenido.")])])])}],A={},B=(0,a.Z)(A,q,T,!1,null,null,null),I=B.exports,L=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("La página que buscas no está aquí")]),e("router-link",{attrs:{to:"/"}},[t._v("Haga click aquí para volver al inicio")])],1)},D=[],F={},H=(0,a.Z)(F,L,D,!1,null,null,null),J=H.exports;r.Z.use(s.Z);const M=[{path:"/",component:d},{path:"/servicios",component:O},{path:"/blog/:entrada",component:P,children:[{path:"comentarios",component:I,name:"comentarios"}]},{path:"/contacto",component:E,name:"contacto"},{path:"*",component:J}],V=new s.Z({mode:"history",base:"/",routes:M});var z=V;r.Z.config.productionTip=!1,new r.Z({router:z,render:t=>t(c)}).$mount("#app")}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,r,o,i){if(!r){var a=1/0;for(s=0;s<t.length;s++){r=t[s][0],o=t[s][1],i=t[s][2];for(var u=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[l])}))?r.splice(l--,1):(u=!1,i<a&&(a=i));if(u){t.splice(s--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[r,o,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,r){var o,i,a=r[0],u=r[1],l=r[2],c=0;if(a.some((function(n){return 0!==t[n]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(l)var s=l(e)}for(n&&n(r);c<a.length;c++)i=a[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(s)},r=self["webpackChunkvue_router"]=self["webpackChunkvue_router"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(261)}));r=e.O(r)})();
//# sourceMappingURL=app.902d3141.js.map