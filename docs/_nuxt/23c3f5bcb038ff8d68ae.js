(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{194:function(t,n,e){var content=e(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(20).default)("7eae81f6",content,!0,{sourceMap:!1})},195:function(t,n,e){"use strict";var r=e(8),o=e(196)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(85)("find")},196:function(t,n,e){var r=e(31),o=e(84),c=e(32),h=e(25),f=e(197);t.exports=function(t,n){var e=1==t,l=2==t,d=3==t,_=4==t,v=6==t,m=5==t||v,y=n||f;return function(n,f,N){for(var w,I,M=c(n),x=o(M),L=r(f,N,3),E=h(x.length),A=0,Y=e?y(n,E):l?y(n,0):void 0;E>A;A++)if((m||A in x)&&(I=L(w=x[A],A,M),t))if(e)Y[A]=I;else if(I)switch(t){case 3:return!0;case 5:return w;case 6:return A;case 2:Y.push(w)}else if(_)return!1;return v?-1:d||_?_:Y}}},197:function(t,n,e){var r=e(198);t.exports=function(t,n){return new(r(t))(n)}},198:function(t,n,e){var r=e(12),o=e(120),c=e(2)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[c])&&(n=void 0)),void 0===n?Array:n}},199:function(t,n,e){"use strict";var r=e(3),o=e(18),c=e(24),h=e(121),f=e(65),l=e(11),d=e(42).f,_=e(66).f,v=e(10).f,m=e(200).trim,y=r.Number,N=y,w=y.prototype,I="Number"==c(e(83)(w)),M="trim"in String.prototype,x=function(t){var n=f(t,!1);if("string"==typeof n&&n.length>2){var e,r,o,c=(n=M?n.trim():m(n,3)).charCodeAt(0);if(43===c||45===c){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===c){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var code,h=n.slice(2),i=0,l=h.length;i<l;i++)if((code=h.charCodeAt(i))<48||code>o)return NaN;return parseInt(h,r)}}return+n};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof y&&(I?l((function(){w.valueOf.call(e)})):"Number"!=c(e))?h(new N(x(n)),e,y):x(n)};for(var L,E=e(9)?d(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;E.length>A;A++)o(N,L=E[A])&&!o(y,L)&&v(y,L,_(N,L));y.prototype=w,w.constructor=y,e(13)(r,"Number",y)}},200:function(t,n,e){var r=e(8),o=e(23),c=e(11),h=e(201),f="["+h+"]",l=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),_=function(t,n,e){var o={},f=c((function(){return!!h[t]()||"​"!="​"[t]()})),l=o[t]=f?n(v):h[t];e&&(o[e]=l),r(r.P+r.F*f,"String",o)},v=_.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(l,"")),2&n&&(t=t.replace(d,"")),t};t.exports=_},201:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},202:function(t,n,e){"use strict";var r=e(194);e.n(r).a},203:function(t,n,e){(n=e(19)(!1)).push([t.i,".container[data-v-256c16b6]{margin:10px auto;max-width:800px;background-color:#ddd}",""]),t.exports=n},204:function(t,n,e){"use strict";e.r(n);e(33);var r,o=e(5),c=(e(195),e(199),{props:{longitude:{type:Number},latitude:{type:Number}},data:function(){return{ymap:"",busMarker:{},bus:{1:{isRunning:!0,datetime:"20121111110057",busid:"4",rosenid:"1",binid:"6",latitude:35.9463122814615,longitude:136.188002291092,speed:8.00399208068848,direction:260.027038574219,destination:"神明駅",isdelay:!1},2:{},3:{},4:{},5:{},6:{},7:{},8:{},9:{},10:{}}}},computed:{busstop:function(){return this.$store.getters["bus/busstop"]}},watch:{busstop:function(t,n){this.set_busstop_icon()},"bus.1":function(t){this.remove_bus_icon(1),this.set_bus_icon(1)},"bus.2":function(t){this.remove_bus_icon(2),this.set_bus_icon(2)},"bus.3":function(t){this.remove_bus_icon(3),this.set_bus_icon(3)},"bus.4":function(t){this.remove_bus_icon(4),this.set_bus_icon(4)},"bus.5":function(t){this.remove_bus_icon(5),this.set_bus_icon(5)},"bus.6":function(t){this.remove_bus_icon(6),this.set_bus_icon(6)},"bus.7":function(t){this.remove_bus_icon(7),this.set_bus_icon(7)},"bus.8":function(t){this.remove_bus_icon(8),this.set_bus_icon(8)},"bus.9":function(t){this.remove_bus_icon(9),this.set_bus_icon(9)},"bus.10":function(t){this.remove_bus_icon(10),this.set_bus_icon(10)}},mounted:function(){this.createMap(),this.interval(1),this.interval(2),this.interval(3),this.interval(4),this.interval(5),this.interval(6),this.interval(7),this.interval(8),this.interval(9),this.interval(10)},methods:{createMap:function(){this.ymap=new Y.Map("map",{configure:{mapType:Y.Map.TYPE.SMARTPHONE}}),this.ymap.drawMap(new Y.LatLng(this.latitude,this.longitude),14,Y.LayerSetId.NORMAL)},set_busstop_icon:function(){if(this.ymap.clearFeatures(),null!=this.busstop){for(var t=[],n=[],e=[],r=new Y.Icon("http://tutujibus.com/image/busstop32.png"),i=0;i<this.busstop.length;i++)t.push(new Y.Marker(new Y.LatLng(this.busstop[i].latitude,this.busstop[i].longitude),{icon:r})),n.push(this.busstop[i].latitude),e.push(this.busstop[i].longitude);this.ymap.addFeatures(t);var o=Math.max.apply(null,n),c=Math.max.apply(null,e),h=Math.min.apply(null,n),f=Math.min.apply(null,e);this.ymap.drawBounds(new Y.LatLngBounds(new Y.LatLng(h,f),new Y.LatLng(o,c)),Y.LayerSetId.NORMAL)}},set_bus_icon:function(t){if(void 0!==this.bus[t]){var n=new Y.Marker(new Y.LatLng(this.bus[t].latitude,this.bus[t].longitude));n.id=t,this.ymap.addFeature(n)}},remove_bus_icon:function(t){var n=this.ymap.getFeatures().find((function(n){return n.id===t}));void 0!==n&&this.ymap.removeFeature(n)},get_bus_position:(r=Object(o.a)(regeneratorRuntime.mark((function t(n){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$jsonp("/api/busLookup.php",{busid:n,callbackName:"get_"+n});case 2:e=t.sent,this.bus[n]=e;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)}),interval:function(t){var n=this;setInterval((function(){n.get_bus_position(t)}),6e3)}}}),h=e(6),f={components:{MapComponent:Object(h.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticStyle:{"max-width":"800px",height:"70vh"},attrs:{id:"map"}})])}],!1,null,null,null).exports},data:function(){return{longitude:136.188187,latitude:35.943302}}},l=(e(202),Object(h.a)(f,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("MapComponent",{attrs:{longitude:this.longitude,latitude:this.latitude}})],1)])}),[],!1,null,"256c16b6",null));n.default=l.exports}}]);