(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{60:(e,t,r)=>{"use strict";r.d(t,{E:()=>s});var a=r(5155),n=r(5384);let s=e=>{let{children:t,className:r,bg:s}=e;return(0,a.jsxs)("div",{className:(0,n.cn)("flex h-6 w-fit items-center bg-black/30 ",r),children:[(0,a.jsx)("div",{className:(0,n.cn)("bg-primary h-full w-1",s)}),(0,a.jsx)("div",{className:"p-2",children:(0,a.jsx)("p",{className:"text-sm text-primary-foreground",children:t})})]})}},183:(e,t,r)=>{"use strict";r.d(t,{$:()=>c});var a=r(5155),n=r(2115),s=r(9708),l=r(2085),i=r(5384);let o=(0,l.F)("inline-flex items-center justify-center rounded-[var(--radius)] text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{destructive:"bg-destructive text-primary-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",default:"bg-primary hover:bg-primary/90 text-primary-foreground mt-2 rounded-full px-6 py-5 text-base md:px-8 md:py-6 md:text-lg"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-[calc(var(--radius)-2px)] px-3",lg:"h-11 rounded-[calc(var(--radius)+2px)] px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:r,variant:n,size:l,asChild:c=!1,...d}=e,u=c?s.DX:"button";return(0,a.jsx)(u,{className:(0,i.cn)(o({variant:n,size:l,className:r})),ref:t,...d})});c.displayName="Button"},668:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>eu});var a=r(5155),n=r(2115),s=r(6081),l=r(2284),i=r(6101),o=r(5185),c=r(5845),d=r(3655),u=r(2712),m=r(8905),f=r(1285),h="Collapsible",[x,p]=(0,s.A)(h),[v,g]=x(h),b=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:s,defaultOpen:l,disabled:i,onOpenChange:o,...u}=e,[m=!1,h]=(0,c.i)({prop:s,defaultProp:l,onChange:o});return(0,a.jsx)(v,{scope:r,disabled:i,contentId:(0,f.B)(),open:m,onOpenToggle:n.useCallback(()=>h(e=>!e),[h]),children:(0,a.jsx)(d.sG.div,{"data-state":A(m),"data-disabled":i?"":void 0,...u,ref:t})})});b.displayName=h;var j="CollapsibleTrigger",y=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,...n}=e,s=g(j,r);return(0,a.jsx)(d.sG.button,{type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":A(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled,...n,ref:t,onClick:(0,o.m)(e.onClick,s.onOpenToggle)})});y.displayName=j;var w="CollapsibleContent",N=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,s=g(w,e.__scopeCollapsible);return(0,a.jsx)(m.C,{present:r||s.open,children:e=>{let{present:r}=e;return(0,a.jsx)(k,{...n,ref:t,present:r})}})});N.displayName=w;var k=n.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:s,children:l,...o}=e,c=g(w,r),[m,f]=n.useState(s),h=n.useRef(null),x=(0,i.s)(t,h),p=n.useRef(0),v=p.current,b=n.useRef(0),j=b.current,y=c.open||m,N=n.useRef(y),k=n.useRef(void 0);return n.useEffect(()=>{let e=requestAnimationFrame(()=>N.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.N)(()=>{let e=h.current;if(e){k.current=k.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();p.current=t.height,b.current=t.width,N.current||(e.style.transitionDuration=k.current.transitionDuration,e.style.animationName=k.current.animationName),f(s)}},[c.open,s]),(0,a.jsx)(d.sG.div,{"data-state":A(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!y,...o,ref:x,style:{"--radix-collapsible-content-height":v?"".concat(v,"px"):void 0,"--radix-collapsible-content-width":j?"".concat(j,"px"):void 0,...e.style},children:y&&l})});function A(e){return e?"open":"closed"}var C=r(4315),R="Accordion",_=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[I,D,E]=(0,l.N)(R),[O,H]=(0,s.A)(R,[E,p]),W=p(),F=n.forwardRef((e,t)=>{let{type:r,...n}=e;return(0,a.jsx)(I.Provider,{scope:e.__scopeAccordion,children:"multiple"===r?(0,a.jsx)(T,{...n,ref:t}):(0,a.jsx)(L,{...n,ref:t})})});F.displayName=R;var[G,q]=O(R),[z,P]=O(R,{collapsible:!1}),L=n.forwardRef((e,t)=>{let{value:r,defaultValue:s,onValueChange:l=()=>{},collapsible:i=!1,...o}=e,[d,u]=(0,c.i)({prop:r,defaultProp:s,onChange:l});return(0,a.jsx)(G,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:u,onItemClose:n.useCallback(()=>i&&u(""),[i,u]),children:(0,a.jsx)(z,{scope:e.__scopeAccordion,collapsible:i,children:(0,a.jsx)(S,{...o,ref:t})})})}),T=n.forwardRef((e,t)=>{let{value:r,defaultValue:s,onValueChange:l=()=>{},...i}=e,[o=[],d]=(0,c.i)({prop:r,defaultProp:s,onChange:l}),u=n.useCallback(e=>d(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[...t,e]}),[d]),m=n.useCallback(e=>d(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t!==e)}),[d]);return(0,a.jsx)(G,{scope:e.__scopeAccordion,value:o,onItemOpen:u,onItemClose:m,children:(0,a.jsx)(z,{scope:e.__scopeAccordion,collapsible:!0,children:(0,a.jsx)(S,{...i,ref:t})})})}),[U,B]=O(R),S=n.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:s,dir:l,orientation:c="vertical",...u}=e,m=n.useRef(null),f=(0,i.s)(m,t),h=D(r),x="ltr"===(0,C.jH)(l),p=(0,o.m)(e.onKeyDown,e=>{var t;if(!_.includes(e.key))return;let r=e.target,a=h().filter(e=>{var t;return!(null===(t=e.ref.current)||void 0===t?void 0:t.disabled)}),n=a.findIndex(e=>e.ref.current===r),s=a.length;if(-1===n)return;e.preventDefault();let l=n,i=s-1,o=()=>{(l=n+1)>i&&(l=0)},d=()=>{(l=n-1)<0&&(l=i)};switch(e.key){case"Home":l=0;break;case"End":l=i;break;case"ArrowRight":"horizontal"===c&&(x?o():d());break;case"ArrowDown":"vertical"===c&&o();break;case"ArrowLeft":"horizontal"===c&&(x?d():o());break;case"ArrowUp":"vertical"===c&&d()}null===(t=a[l%s].ref.current)||void 0===t||t.focus()});return(0,a.jsx)(U,{scope:r,disabled:s,direction:l,orientation:c,children:(0,a.jsx)(I.Slot,{scope:r,children:(0,a.jsx)(d.sG.div,{...u,"data-orientation":c,ref:f,onKeyDown:s?void 0:p})})})}),Y="AccordionItem",[$,Q]=O(Y),K=n.forwardRef((e,t)=>{let{__scopeAccordion:r,value:n,...s}=e,l=B(Y,r),i=q(Y,r),o=W(r),c=(0,f.B)(),d=n&&i.value.includes(n)||!1,u=l.disabled||e.disabled;return(0,a.jsx)($,{scope:r,open:d,disabled:u,triggerId:c,children:(0,a.jsx)(b,{"data-orientation":l.orientation,"data-state":et(d),...o,...s,ref:t,disabled:u,open:d,onOpenChange:e=>{e?i.onItemOpen(n):i.onItemClose(n)}})})});K.displayName=Y;var M="AccordionHeader",V=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,s=B(R,r),l=Q(M,r);return(0,a.jsx)(d.sG.h3,{"data-orientation":s.orientation,"data-state":et(l.open),"data-disabled":l.disabled?"":void 0,...n,ref:t})});V.displayName=M;var X="AccordionTrigger",J=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,s=B(R,r),l=Q(X,r),i=P(X,r),o=W(r);return(0,a.jsx)(I.ItemSlot,{scope:r,children:(0,a.jsx)(y,{"aria-disabled":l.open&&!i.collapsible||void 0,"data-orientation":s.orientation,id:l.triggerId,...o,...n,ref:t})})});J.displayName=X;var Z="AccordionContent",ee=n.forwardRef((e,t)=>{let{__scopeAccordion:r,...n}=e,s=B(R,r),l=Q(Z,r),i=W(r);return(0,a.jsx)(N,{role:"region","aria-labelledby":l.triggerId,"data-orientation":s.orientation,...i,...n,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function et(e){return e?"open":"closed"}ee.displayName=Z;var er=r(6474),ea=r(2596);let en=e=>{let{items:t}=e;return(0,a.jsx)(F,{type:"single",collapsible:!0,className:" text-black  w-full rounded-lg  font-sans",children:t.map((e,t)=>(0,a.jsxs)(K,{value:e.value,children:[(0,a.jsx)(V,{children:(0,a.jsxs)(J,{className:(0,ea.A)("group flex w-full items-center justify-between px-4 py-3 text-lg font-medium","bg-neutral-100 text-black"),children:[e.title,(0,a.jsx)(er.A,{className:"text-black transition-transform group-data-[state=open]:rotate-180","aria-hidden":"true"})]})}),(0,a.jsx)(ee,{className:"bg-neutral-100 text-black px-4 py-3 ",children:e.content})]},t))})};var es=r(60),el=r(183),ei=r(9420),eo=r(6874),ec=r.n(eo);let ed=[{value:"item-1",title:"What services do you offer?",content:"We offer warehousing, air freight, ocean freight, and more."},{value:"item-2",title:"How can I contact you?",content:"You can email us at contact@logistics.com or call (00) 123 456 789."},{value:"item-3",title:"What services do you offer?",content:"We offer warehousing, air freight, ocean freight, and more."},{value:"item-4",title:"How can I contact you?",content:"You can email us at contact@logistics.com or call (00) 123 456 789."},{value:"item-5",title:"What services do you offer?",content:"We offer warehousing, air freight, ocean freight, and more."}],eu=function(){return(0,a.jsxs)("main",{className:"   font-sans",children:[(0,a.jsx)("section",{className:"lg:min-h-dvh ",children:(0,a.jsxs)("div",{className:"max-w-6xl md:pt-28 flex flex-col md:flex-row justify-center md:items-start mx-auto gap-5 px-4",children:[(0,a.jsxs)("div",{className:"relative  h-96 w-full md:max-w-1/2 ",children:[(0,a.jsx)("div",{className:"absolute inset-0 w-full h-full aspect-square",children:(0,a.jsx)("img",{src:"/about-truck.jpeg",alt:"truck",className:"w-full h-full object-contain object-left"})}),(0,a.jsx)("div",{className:"absolute aspect-square -bottom-16 -right-1 md:-right-8 w-1/2 ",children:(0,a.jsx)("img",{src:"/delivery_guy.jpg",alt:"Delivery person",className:"w-full h-auto p-4 bg-neutral-100"})})]}),(0,a.jsxs)("div",{className:"text-black w-full md:max-w-1/2 mt-16 ml-0 md:ml-10 md:mt-0",children:[(0,a.jsx)("div",{className:"my-4",children:(0,a.jsx)(es.E,{children:"About Us"})}),(0,a.jsx)("h2",{className:"mb-4 text-4xl font-bold",children:"Our Company Overview"}),(0,a.jsx)("p",{className:"mb-8 text-lg  text-justify leading-relaxed pr-2",children:"With a global reach, deep industry expertise, cutting-edge technology, and a vast transportation network, we provide innovative, tailored solutions to help customers optimize their supply chains and stay ahead in an ever-changing market. Whether you're an experienced shipper or navigating logistics for the first time, we’re here to support you at every step—from booking shipments and clearing customs to managing warehouses—ensuring a seamless and efficient experience."}),(0,a.jsx)(el.$,{children:(0,a.jsx)(ec(),{href:"/services",children:"Learn More"})})]})]})}),(0,a.jsx)("section",{className:"py-24",children:(0,a.jsxs)("div",{className:"max-w-7xl  flex flex-col md:flex-row mx-auto  md:items-start  gap-5 px-4",children:[(0,a.jsxs)("div",{className:"text-black w-full md:max-w-1/2 mt-16 ml-0 md:ml-10 md:mt-0 ",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"my-5",children:(0,a.jsx)(es.E,{children:"FAQ"})}),(0,a.jsx)("h2",{className:"mb-4 text-4xl px-2 font-bold",children:"Frequently Asked Question's"})]}),(0,a.jsx)(en,{items:ed})]}),(0,a.jsxs)("div",{className:"relative h-96 w-full md:max-w-1/2 ",children:[(0,a.jsx)("div",{className:"hidden md:block absolute inset-0 w-full h-full aspect-square",children:(0,a.jsx)("img",{src:"/background-2.jpeg",alt:"Scania truck",className:"w-full h-full object-cover"})}),(0,a.jsx)("div",{className:"md:absolute w-full  -bottom-16 -right-1 md:-right-8 md:w-80 ",children:(0,a.jsxs)("div",{className:"bg-primary text-white p-10 flex flex-col w-full items-start space-y-6 ",children:[(0,a.jsx)(es.E,{bg:"bg-secondary",children:"Let's Talk"}),(0,a.jsx)("h2",{className:"text-2xl font-bold",children:"You Need Any Help? Get Free Consultation"}),(0,a.jsxs)("div",{className:"flex cursor-pointer items-center gap-4",role:"button",tabIndex:0,"aria-label":"You Need Any Help? Get Free Consultation Call (00) 123 456 789",children:[(0,a.jsx)("div",{className:"bg-primary/70 border text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full",children:(0,a.jsx)(ei.A,{className:"text-white"})}),(0,a.jsxs)("div",{className:"text-white",children:[(0,a.jsx)("p",{className:"text-lg font-bold",children:"Call Us"}),(0,a.jsx)("p",{className:"underline",children:"(00) 123 456 789"})]})]}),(0,a.jsx)(el.$,{className:"bg-secondary hover:bg-secondary/90",children:(0,a.jsx)(ec(),{href:"/contact",children:"Contact Us"})})]})})]})]})})]})}},5384:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var a=r(2596),n=r(9688);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,a.$)(t))}},7192:(e,t,r)=>{Promise.resolve().then(r.bind(r,668))},9420:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(9946).A)("phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[598,874,482,441,684,358],()=>t(7192)),_N_E=e.O()}]);