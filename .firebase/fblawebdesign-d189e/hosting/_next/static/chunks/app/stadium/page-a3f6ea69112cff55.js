(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[526],{8014:(e,t,a)=>{Promise.resolve().then(a.bind(a,3540))},3540:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var i=a(5155);a(2321);var n=a(2115),s=a(2253),r=a(1567);let l=e=>{let{children:t,className:a}=e;return(0,i.jsxs)("div",{className:(0,r.cn)("relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",a),children:[(0,i.jsxs)("div",{className:"relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ",children:[(0,i.jsxs)(s.P.div,{initial:{opacity:.5,width:"15rem"},whileInView:{opacity:1,width:"30rem"},transition:{delay:.3,duration:.8,ease:"easeInOut"},style:{backgroundImage:"conic-gradient(var(--conic-position), var(--tw-gradient-stops))"},className:"absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-yellow-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]",children:[(0,i.jsx)("div",{className:"absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"}),(0,i.jsx)("div",{className:"absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]"})]}),(0,i.jsxs)(s.P.div,{initial:{opacity:.5,width:"15rem"},whileInView:{opacity:1,width:"30rem"},transition:{delay:.3,duration:.8,ease:"easeInOut"},style:{backgroundImage:"conic-gradient(var(--conic-position), var(--tw-gradient-stops))"},className:"absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-yellow-500 text-white [--conic-position:from_290deg_at_center_top]",children:[(0,i.jsx)("div",{className:"absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]"}),(0,i.jsx)("div",{className:"absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]"})]}),(0,i.jsx)("div",{className:"absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"}),(0,i.jsx)("div",{className:"absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"}),(0,i.jsx)("div",{className:"absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-yellow-500 opacity-50 blur-3xl"}),(0,i.jsx)(s.P.div,{initial:{width:"8rem"},whileInView:{width:"16rem"},transition:{delay:.3,duration:.8,ease:"easeInOut"},className:"absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-yellow-400 blur-2xl"}),(0,i.jsx)(s.P.div,{initial:{width:"15rem"},whileInView:{width:"30rem"},transition:{delay:.3,duration:.8,ease:"easeInOut"},className:"absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-yellow-400 "}),(0,i.jsx)("div",{className:"absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "})]}),(0,i.jsx)("div",{className:"relative z-50 flex -translate-y-80 flex-col items-center px-5",children:t})]})};function o(){return(0,i.jsx)(l,{children:(0,i.jsxs)(s.P.h1,{initial:{opacity:.5,y:100},whileInView:{opacity:1,y:0},transition:{delay:.3,duration:.8,ease:"easeInOut"},className:"mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl",children:["Witness Lancer ",(0,i.jsx)("br",{})," Stadium"]})})}let c=()=>{let e=Math.floor(4*Math.random()),t=Math.random()*window.innerWidth;switch(e){case 0:return{x:t,y:0,angle:45};case 1:return{x:window.innerWidth,y:t,angle:135};case 2:return{x:t,y:window.innerHeight,angle:225};case 3:return{x:0,y:t,angle:315};default:return{x:0,y:0,angle:45}}},d=e=>{let{minSpeed:t=10,maxSpeed:a=30,minDelay:s=1200,maxDelay:l=1300,starColor:o="#9E00FF",trailColor:d="#2EB9DF",starWidth:u=10,starHeight:h=1,className:m}=e,[w,x]=(0,n.useState)(null),g=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=()=>{let{x:i,y:n,angle:r}=c();x({id:Date.now(),x:i,y:n,angle:r,scale:1,speed:Math.random()*(a-t)+t,distance:0}),setTimeout(e,Math.random()*(l-s)+s)};return e(),()=>{}},[t,a,s,l]),(0,n.useEffect)(()=>{let e=requestAnimationFrame(()=>{w&&x(e=>{if(!e)return null;let t=e.x+e.speed*Math.cos(e.angle*Math.PI/180),a=e.y+e.speed*Math.sin(e.angle*Math.PI/180),i=e.distance+e.speed;return t<-20||t>window.innerWidth+20||a<-20||a>window.innerHeight+20?null:{...e,x:t,y:a,distance:i,scale:1+i/100}})});return()=>cancelAnimationFrame(e)},[w]),(0,i.jsxs)("svg",{ref:g,className:(0,r.cn)("w-full h-full absolute inset-0",m),children:[w&&(0,i.jsx)("rect",{x:w.x,y:w.y,width:u*w.scale,height:h,fill:"url(#gradient)",transform:"rotate(".concat(w.angle,", ").concat(w.x+u*w.scale/2,", ").concat(w.y+h/2,")")},w.id),(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,i.jsx)("stop",{offset:"0%",style:{stopColor:d,stopOpacity:0}}),(0,i.jsx)("stop",{offset:"100%",style:{stopColor:o,stopOpacity:1}})]})})]})};function u(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(o,{}),(0,i.jsx)(d,{})]})}},1567:(e,t,a)=>{"use strict";a.d(t,{cn:()=>s});var i=a(3463),n=a(9795);function s(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.QP)((0,i.$)(t))}},2321:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[472,533,441,517,358],()=>t(8014)),_N_E=e.O()}]);