(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{4416:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(9946).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},4783:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(9946).A)("menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},4917:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},5455:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}},5798:(e,t,n)=>{"use strict";n.d(t,{UC:()=>eC,C1:()=>ex,q7:()=>eg,N_:()=>eb,B8:()=>ey,bL:()=>eh,l9:()=>eE,LM:()=>eR});var r,o=n(2115),i=n(7650),a=n(6081),s=n(5185),l=n(3655),u=n(5845),d=n(6101),c=n(4315),v=n(8905),f=n(1285),m=n(2284),p=n(9033),w=n(5155),h="dismissableLayer.update",y=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),g=o.forwardRef((e,t)=>{var n,i;let{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:u,onPointerDownOutside:c,onFocusOutside:v,onInteractOutside:f,onDismiss:m,...g}=e,x=o.useContext(y),[C,R]=o.useState(null),N=null!==(i=null==C?void 0:C.ownerDocument)&&void 0!==i?i:null===(n=globalThis)||void 0===n?void 0:n.document,[,T]=o.useState({}),L=(0,d.s)(t,e=>R(e)),P=Array.from(x.layers),[j]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),k=P.indexOf(j),M=C?P.indexOf(C):-1,D=x.layersWithOutsidePointerEventsDisabled.size>0,_=M>=k,F=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,p.c)(e),i=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!i.current){let t=function(){b("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);i.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>i.current=!0}}(e=>{let t=e.target,n=[...x.branches].some(e=>e.contains(t));!_||n||(null==c||c(e),null==f||f(e),e.defaultPrevented||null==m||m())},N),S=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,p.c)(e),i=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!i.current&&b("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}(e=>{let t=e.target;[...x.branches].some(e=>e.contains(t))||(null==v||v(e),null==f||f(e),e.defaultPrevented||null==m||m())},N);return!function(e,t=globalThis?.document){let n=(0,p.c)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{M===x.layers.size-1&&(null==u||u(e),!e.defaultPrevented&&m&&(e.preventDefault(),m()))},N),o.useEffect(()=>{if(C)return a&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(r=N.body.style.pointerEvents,N.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(C)),x.layers.add(C),E(),()=>{a&&1===x.layersWithOutsidePointerEventsDisabled.size&&(N.body.style.pointerEvents=r)}},[C,N,a,x]),o.useEffect(()=>()=>{C&&(x.layers.delete(C),x.layersWithOutsidePointerEventsDisabled.delete(C),E())},[C,x]),o.useEffect(()=>{let e=()=>T({});return document.addEventListener(h,e),()=>document.removeEventListener(h,e)},[]),(0,w.jsx)(l.sG.div,{...g,ref:L,style:{pointerEvents:D?_?"auto":"none":void 0,...e.style},onFocusCapture:(0,s.m)(e.onFocusCapture,S.onFocusCapture),onBlurCapture:(0,s.m)(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:(0,s.m)(e.onPointerDownCapture,F.onPointerDownCapture)})});function E(){let e=new CustomEvent(h);document.dispatchEvent(e)}function b(e,t,n,r){let{discrete:o}=r,i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),o?(0,l.hO)(i,a):i.dispatchEvent(a)}g.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(y),r=o.useRef(null),i=(0,d.s)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,w.jsx)(l.sG.div,{...e,ref:i})}).displayName="DismissableLayerBranch";var x=n(2712),C=o.forwardRef((e,t)=>(0,w.jsx)(l.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));C.displayName="VisuallyHidden";var R="NavigationMenu",[N,T,L]=(0,m.N)(R),[P,j,k]=(0,m.N)(R),[M,D]=(0,a.A)(R,[L,k]),[_,F]=M(R),[S,O]=M(R),A=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:i,defaultValue:a,delayDuration:s=200,skipDelayDuration:v=300,orientation:f="horizontal",dir:m,...p}=e,[h,y]=o.useState(null),g=(0,d.s)(t,e=>y(e)),E=(0,c.jH)(m),b=o.useRef(0),x=o.useRef(0),C=o.useRef(0),[R,N]=o.useState(!0),[T="",L]=(0,u.i)({prop:r,onChange:e=>{let t=v>0;""!==e?(window.clearTimeout(C.current),t&&N(!1)):(window.clearTimeout(C.current),C.current=window.setTimeout(()=>N(!0),v)),null==i||i(e)},defaultProp:a}),P=o.useCallback(()=>{window.clearTimeout(x.current),x.current=window.setTimeout(()=>L(""),150)},[L]),j=o.useCallback(e=>{window.clearTimeout(x.current),L(e)},[L]),k=o.useCallback(e=>{T===e?window.clearTimeout(x.current):b.current=window.setTimeout(()=>{window.clearTimeout(x.current),L(e)},s)},[T,L,s]);return o.useEffect(()=>()=>{window.clearTimeout(b.current),window.clearTimeout(x.current),window.clearTimeout(C.current)},[]),(0,w.jsx)(G,{scope:n,isRootMenu:!0,value:T,dir:E,orientation:f,rootNavigationMenu:h,onTriggerEnter:e=>{window.clearTimeout(b.current),R?k(e):j(e)},onTriggerLeave:()=>{window.clearTimeout(b.current),P()},onContentEnter:()=>window.clearTimeout(x.current),onContentLeave:P,onItemSelect:e=>{L(t=>t===e?"":e)},onItemDismiss:()=>L(""),children:(0,w.jsx)(l.sG.nav,{"aria-label":"Main","data-orientation":f,dir:E,...p,ref:g})})});A.displayName=R;var I="NavigationMenuSub";o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:i,orientation:a="horizontal",...s}=e,d=F(I,n),[c="",v]=(0,u.i)({prop:r,onChange:o,defaultProp:i});return(0,w.jsx)(G,{scope:n,isRootMenu:!1,value:c,dir:d.dir,orientation:a,rootNavigationMenu:d.rootNavigationMenu,onTriggerEnter:e=>v(e),onItemSelect:e=>v(e),onItemDismiss:()=>v(""),children:(0,w.jsx)(l.sG.div,{"data-orientation":a,...s,ref:t})})}).displayName=I;var G=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:r,dir:i,orientation:a,children:s,value:l,onItemSelect:u,onItemDismiss:d,onTriggerEnter:c,onTriggerLeave:v,onContentEnter:m,onContentLeave:h}=e,[y,g]=o.useState(null),[E,b]=o.useState(new Map),[x,C]=o.useState(null);return(0,w.jsx)(_,{scope:t,isRootMenu:n,rootNavigationMenu:r,value:l,previousValue:function(e){let t=o.useRef({value:e,previous:e});return o.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(l),baseId:(0,f.B)(),dir:i,orientation:a,viewport:y,onViewportChange:g,indicatorTrack:x,onIndicatorTrackChange:C,onTriggerEnter:(0,p.c)(c),onTriggerLeave:(0,p.c)(v),onContentEnter:(0,p.c)(m),onContentLeave:(0,p.c)(h),onItemSelect:(0,p.c)(u),onItemDismiss:(0,p.c)(d),onViewportContentChange:o.useCallback((e,t)=>{b(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:o.useCallback(e=>{b(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,w.jsx)(N.Provider,{scope:t,children:(0,w.jsx)(S,{scope:t,items:E,children:s})})})},K="NavigationMenuList",z=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=F(K,n),i=(0,w.jsx)(l.sG.ul,{"data-orientation":o.orientation,...r,ref:t});return(0,w.jsx)(l.sG.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,w.jsx)(N.Slot,{scope:n,children:o.isRootMenu?(0,w.jsx)(es,{asChild:!0,children:i}):i})})});z.displayName=K;var W="NavigationMenuItem",[V,B]=M(W),H=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,...i}=e,a=(0,f.B)(),s=o.useRef(null),u=o.useRef(null),d=o.useRef(null),c=o.useRef(()=>{}),v=o.useRef(!1),m=o.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(s.current){c.current();let t=ed(s.current);t.length&&ec("start"===e?t:t.reverse())}},[]),p=o.useCallback(()=>{if(s.current){let e=ed(s.current);e.length&&(c.current=function(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}}(e))}},[]);return(0,w.jsx)(V,{scope:n,value:r||a||"LEGACY_REACT_AUTO_VALUE",triggerRef:u,contentRef:s,focusProxyRef:d,wasEscapeCloseRef:v,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:p,onContentFocusOutside:p,children:(0,w.jsx)(l.sG.li,{...i,ref:t})})});H.displayName=W;var U="NavigationMenuTrigger",q=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:r,...i}=e,a=F(U,e.__scopeNavigationMenu),u=B(U,e.__scopeNavigationMenu),c=o.useRef(null),v=(0,d.s)(c,u.triggerRef,t),f=em(a.baseId,u.value),m=ep(a.baseId,u.value),p=o.useRef(!1),h=o.useRef(!1),y=u.value===a.value;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(N.ItemSlot,{scope:n,value:u.value,children:(0,w.jsx)(eu,{asChild:!0,children:(0,w.jsx)(l.sG.button,{id:f,disabled:r,"data-disabled":r?"":void 0,"data-state":ef(y),"aria-expanded":y,"aria-controls":m,...i,ref:v,onPointerEnter:(0,s.m)(e.onPointerEnter,()=>{h.current=!1,u.wasEscapeCloseRef.current=!1}),onPointerMove:(0,s.m)(e.onPointerMove,ew(()=>{r||h.current||u.wasEscapeCloseRef.current||p.current||(a.onTriggerEnter(u.value),p.current=!0)})),onPointerLeave:(0,s.m)(e.onPointerLeave,ew(()=>{r||(a.onTriggerLeave(),p.current=!1)})),onClick:(0,s.m)(e.onClick,()=>{a.onItemSelect(u.value),h.current=y}),onKeyDown:(0,s.m)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===a.dir?"ArrowLeft":"ArrowRight"}[a.orientation];y&&e.key===t&&(u.onEntryKeyDown(),e.preventDefault())})})})}),y&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(C,{"aria-hidden":!0,tabIndex:0,ref:u.focusProxyRef,onFocus:e=>{let t=u.contentRef.current,n=e.relatedTarget,r=n===c.current,o=null==t?void 0:t.contains(n);(r||!o)&&u.onFocusProxyEnter(r?"start":"end")}}),a.viewport&&(0,w.jsx)("span",{"aria-owns":m})]})]})});q.displayName=U;var Y="navigationMenu.linkSelect",X=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:r,onSelect:o,...i}=e;return(0,w.jsx)(eu,{asChild:!0,children:(0,w.jsx)(l.sG.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...i,ref:t,onClick:(0,s.m)(e.onClick,e=>{let t=e.target,n=new CustomEvent(Y,{bubbles:!0,cancelable:!0});if(t.addEventListener(Y,e=>null==o?void 0:o(e),{once:!0}),(0,l.hO)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(en,{bubbles:!0,cancelable:!0});(0,l.hO)(t,e)}},{checkForDefaultPrevented:!1})})})});X.displayName="NavigationMenuLink";var J="NavigationMenuIndicator",Q=o.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=F(J,e.__scopeNavigationMenu),a=!!o.value;return o.indicatorTrack?i.createPortal((0,w.jsx)(v.C,{present:n||a,children:(0,w.jsx)(Z,{...r,ref:t})}),o.indicatorTrack):null});Q.displayName=J;var Z=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,i=F(J,n),a=T(n),[s,u]=o.useState(null),[d,c]=o.useState(null),v="horizontal"===i.orientation,f=!!i.value;o.useEffect(()=>{var e;let t=null===(e=a().find(e=>e.value===i.value))||void 0===e?void 0:e.ref.current;t&&u(t)},[a,i.value]);let m=()=>{s&&c({size:v?s.offsetWidth:s.offsetHeight,offset:v?s.offsetLeft:s.offsetTop})};return ev(s,m),ev(i.indicatorTrack,m),d?(0,w.jsx)(l.sG.div,{"aria-hidden":!0,"data-state":f?"visible":"hidden","data-orientation":i.orientation,...r,ref:t,style:{position:"absolute",...v?{left:0,width:d.size+"px",transform:"translateX(".concat(d.offset,"px)")}:{top:0,height:d.size+"px",transform:"translateY(".concat(d.offset,"px)")},...r.style}}):null}),$="NavigationMenuContent",ee=o.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=F($,e.__scopeNavigationMenu),i=B($,e.__scopeNavigationMenu),a=(0,d.s)(i.contentRef,t),l=i.value===o.value,u={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...r};return o.viewport?(0,w.jsx)(et,{forceMount:n,...u,ref:a}):(0,w.jsx)(v.C,{present:n||l,children:(0,w.jsx)(er,{"data-state":ef(l),...u,ref:a,onPointerEnter:(0,s.m)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,s.m)(e.onPointerLeave,ew(o.onContentLeave)),style:{pointerEvents:!l&&o.isRootMenu?"none":void 0,...u.style}})})});ee.displayName=$;var et=o.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=F($,e.__scopeNavigationMenu);return(0,x.N)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,x.N)(()=>()=>r(e.value),[e.value,r]),null}),en="navigationMenu.rootContentDismiss",er=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,triggerRef:i,focusProxyRef:a,wasEscapeCloseRef:l,onRootContentClose:u,onContentFocusOutside:c,...v}=e,f=F($,n),m=o.useRef(null),p=(0,d.s)(m,t),h=em(f.baseId,r),y=ep(f.baseId,r),E=T(n),b=o.useRef(null),{onItemDismiss:x}=f;o.useEffect(()=>{let e=m.current;if(f.isRootMenu&&e){let t=()=>{var t;x(),u(),e.contains(document.activeElement)&&(null===(t=i.current)||void 0===t||t.focus())};return e.addEventListener(en,t),()=>e.removeEventListener(en,t)}},[f.isRootMenu,e.value,i,x,u]);let C=o.useMemo(()=>{let e=E().map(e=>e.value);"rtl"===f.dir&&e.reverse();let t=e.indexOf(f.value),n=e.indexOf(f.previousValue),o=r===f.value,i=n===e.indexOf(r);if(!o&&!i)return b.current;let a=(()=>{if(t!==n){if(o&&-1!==n)return t>n?"from-end":"from-start";if(i&&-1!==t)return t>n?"to-start":"to-end"}return null})();return b.current=a,a},[f.previousValue,f.value,f.dir,E,r]);return(0,w.jsx)(es,{asChild:!0,children:(0,w.jsx)(g,{id:y,"aria-labelledby":h,"data-motion":C,"data-orientation":f.orientation,...v,ref:p,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(en,{bubbles:!0,cancelable:!0});null===(e=m.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,s.m)(e.onFocusOutside,e=>{var t;c();let n=e.target;(null===(t=f.rootNavigationMenu)||void 0===t?void 0:t.contains(n))&&e.preventDefault()}),onPointerDownOutside:(0,s.m)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=E().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),o=f.isRootMenu&&(null===(t=f.viewport)||void 0===t?void 0:t.contains(n));(r||o||!f.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,s.m)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ed(e.currentTarget),r=document.activeElement,o=t.findIndex(e=>e===r);if(ec(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var n;null===(n=a.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,s.m)(e.onEscapeKeyDown,e=>{l.current=!0})})})}),eo="NavigationMenuViewport",ei=o.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=!!F(eo,e.__scopeNavigationMenu).value;return(0,w.jsx)(v.C,{present:n||o,children:(0,w.jsx)(ea,{...r,ref:t})})});ei.displayName=eo;var ea=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:r,...i}=e,a=F(eo,n),u=(0,d.s)(t,a.onViewportChange),c=O($,e.__scopeNavigationMenu),[f,m]=o.useState(null),[p,h]=o.useState(null),y=f?(null==f?void 0:f.width)+"px":void 0,g=f?(null==f?void 0:f.height)+"px":void 0,E=!!a.value,b=E?a.value:a.previousValue;return ev(p,()=>{p&&m({width:p.offsetWidth,height:p.offsetHeight})}),(0,w.jsx)(l.sG.div,{"data-state":ef(E),"data-orientation":a.orientation,...i,ref:u,style:{pointerEvents:!E&&a.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":y,"--radix-navigation-menu-viewport-height":g,...i.style},onPointerEnter:(0,s.m)(e.onPointerEnter,a.onContentEnter),onPointerLeave:(0,s.m)(e.onPointerLeave,ew(a.onContentLeave)),children:Array.from(c.items).map(e=>{let[t,{ref:n,forceMount:r,...o}]=e,i=b===t;return(0,w.jsx)(v.C,{present:r||i,children:(0,w.jsx)(er,{...o,ref:(0,d.t)(n,e=>{i&&e&&h(e)})})},t)})})}),es=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=F("FocusGroup",n);return(0,w.jsx)(P.Provider,{scope:n,children:(0,w.jsx)(P.Slot,{scope:n,children:(0,w.jsx)(l.sG.div,{dir:o.dir,...r,ref:t})})})}),el=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],eu=o.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=j(n),i=F("FocusGroupItem",n);return(0,w.jsx)(P.ItemSlot,{scope:n,children:(0,w.jsx)(l.sG.button,{...r,ref:t,onKeyDown:(0,s.m)(e.onKeyDown,e=>{if(["Home","End",...el].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===i.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),el.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>ec(t)),e.preventDefault()}})})})});function ed(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ec(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function ev(e,t){let n=(0,p.c)(t);(0,x.N)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function ef(e){return e?"open":"closed"}function em(e,t){return"".concat(e,"-trigger-").concat(t)}function ep(e,t){return"".concat(e,"-content-").concat(t)}function ew(e){return t=>"mouse"===t.pointerType?e(t):void 0}var eh=A,ey=z,eg=H,eE=q,eb=X,ex=Q,eC=ee,eR=ei}}]);