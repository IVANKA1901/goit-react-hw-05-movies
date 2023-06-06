"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[826],{3623:function(n,t,e){e.d(t,{Z:function(){return o}});e(2791);var r,a=e(168),i=e(6444).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n"]))),c=e(184),o=function(n){var t=n.children;return(0,c.jsx)(i,{children:t})}},3314:function(n,t,e){e.d(t,{Z:function(){return v}});e(2791);var r,a,i,c,o=e(168),u=e(1087),s=e(6444),p=(0,s.ZP)(u.OL)(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  /* padding: 2px; */\n  border-radius: 5px;\n  color: black;\n  font-weight: 500;\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    color: black;\n    background-color: white;\n    transform: scale(1.1);\n    box-shadow: 0 5px 10px rgba(1, 1, 1, 1);\n  }\n"]))),d=s.ZP.ul(a||(a=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-top: 50px;\n"]))),f=s.ZP.li(i||(i=(0,o.Z)(["\n  flex-basis: calc((100% - 70px) / 3);\n"]))),l=s.ZP.p(c||(c=(0,o.Z)(["\n  padding: 10px;\n  font-size: 20px;\n  font-weight: 500;\n  margin-top: 10px;\n  color: black;\n  background-color: beige;\n  border-radius: 5px;\n  box-shadow: 0 5px 10px rgb(28 27 27);\n"]))),x=e(7689),g=e(184);var h=function(n){var t=n.id,e=n.title,r=n.poster_path,a=(0,x.TH)();return(0,g.jsx)(f,{children:(0,g.jsxs)(p,{to:"/movies/".concat(t),state:{from:a},children:[(0,g.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w300".concat(r):"https://wipfilms.net/wp-content/data/posters/tt0338683.jpg",alt:e,width:"250",height:"350"}),(0,g.jsx)(l,{children:e})]})},t)},v=function(n){var t=n.movies;return(0,g.jsx)(d,{children:t.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return(0,g.jsx)(h,{id:t,title:e,poster_path:r},t)}))})}},2826:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a=e(9439),i=e(2791),c=e(168),o=e(6444).ZP.h1(r||(r=(0,c.Z)(["\n  margin-bottom: 16px;\n  padding: 15px;\n  border-radius: 5px;\n  color: #f0e4e4;\n  background-color: #a65e51;\n  box-shadow: 0 5px 10px rgb(28 27 27);\n"]))),u=e(3623),s=e(1933),p=e(3314),d=e(8402),f=e(184),l=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(d.NB,{visible:!0,height:"160",width:"160",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})},x=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],c=(0,i.useState)(!1),d=(0,a.Z)(c,2),x=d[0],g=d[1];return(0,i.useEffect)((function(){g(!0);try{(0,s.wr)().then((function(n){r(n.results),g(!1)}))}catch(n){console.log(n)}}),[]),(0,f.jsx)("main",{children:(0,f.jsxs)(u.Z,{children:[(0,f.jsx)(o,{children:"Trending today \ud83c\udf7f"}),e.length>0&&(0,f.jsx)(p.Z,{movies:e}),x&&(0,f.jsx)(l,{})]})})}},1933:function(n,t,e){e.d(t,{BG:function(){return p},Pv:function(){return s},kK:function(){return d},sv:function(){return f},wr:function(){return u}});var r=e(5861),a=e(7757),i=e.n(a),c=e(1243),o="f796c87b999028931b2db4dbe3fd1c94";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=826.7adc539e.chunk.js.map