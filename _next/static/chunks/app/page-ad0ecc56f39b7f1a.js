(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{741:(e,t,a)=>{Promise.resolve().then(a.bind(a,4567))},4567:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ek});var r=a(5155),s=a(2115),n=a(6472),i=a(5781);let l={rebalanceLTV:.88,rebalancingBounty:.025,liquidationLTV:.95},o={xPositionValue:1e4,openingPrice:2e3,leverage:4},c=(e,t)=>e*(t-1),d=(e,t)=>e+t,m=(e,t,a)=>e*(t-1)/(t*a),x=(e,t,a)=>e*(t-1)/(t*a),u=e=>e,p=(e,t)=>e-t,b=(e,t,a,r)=>e.wasRebalanced?u(e.lastRebalancePrice):m(t,a,r),f=(e,t,a,r,s)=>e.wasRebalanced&&void 0!==s?p(e.rebalanceLine,s):x(t,a,r),h=(e,t,a,r)=>Array.from({length:r},(a,s)=>e+t*Math.sin(s/(r-1)*2*Math.PI)),g=(e,t)=>e/t,N=(e,t)=>e*t,v=(e,t,a,r,s,n)=>{let i=c(e,t),l=null!=s?s:i,o=null!=n?n:g(e+i,r),d=N(o,a);return{initialDebt:i,debt:l,positionSize:d,ethAmount:o,xPositionValue:d-l}},j=(e,t,a)=>m(e,t,a.rebalanceLTV)-x(e,t,a.liquidationLTV),w=(e,t,a,r)=>{let s;let n=j(t,a,r),i=b(e,t,a,r.rebalanceLTV);return s=e.wasRebalanced?i-n:x(t,a,r.liquidationLTV),{...e,rebalanceLine:i,liquidationLine:s}},y=e=>(.01>Math.abs(e)&&(e=0),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}).format(e)),z=(e,t,a,r)=>{if(t/e<=a)return{debtToRebalance:0,newDebt:t,newPositionSize:e,rebalancingFee:0};let s=(t-e*a)/(1-(1+r)*a),n=Math.min(s*r,e-s);return{debtToRebalance:s,newDebt:t-s,newPositionSize:e-(s+n),rebalancingFee:n}},P=(e,t,a,r)=>{let{debtToRebalance:s,newDebt:n,newPositionSize:i,rebalancingFee:l}=z(e.positionSize,e.debt,a,r);return{...e,debt:n,positionSize:i,ethAmount:i/t,xPositionValue:i-n,wasRebalanced:!0,rebalancingAmount:s+l,lastRebalancePrice:t}},k=e=>new Intl.NumberFormat("en-US",{style:"percent",minimumFractionDigits:2}).format(e);function R(e){let{data:t,initialXPositionValue:a,selectedTimestamp:i}=e,[l,o]=(0,s.useState)(400),[c,d]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let e=()=>{let e=window.innerWidth;d(e<640),e<640?o(300):e<1024?o(400):o(500)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let m={labels:Array(t.length).fill(""),datasets:[{label:"ETH Price",data:t.map(e=>e.price),fill:!1,borderColor:"rgb(59, 130, 246)",pointRadius:e=>{if(!e.raw)return 3;let a=t[e.dataIndex];return a&&i&&a.timestamp===i?8:3},pointHoverRadius:5,pointStyle:"circle",pointBackgroundColor:e=>{if(!e.raw)return"rgb(59, 130, 246)";let a=t[e.dataIndex];return a&&i&&a.timestamp,"rgb(59, 130, 246)"},pointBorderColor:e=>{if(!e.raw)return"rgb(59, 130, 246)";let a=t[e.dataIndex];return a&&i&&a.timestamp===i?"white":"rgb(59, 130, 246)"},pointBorderWidth:e=>{if(!e.raw)return 1;let a=t[e.dataIndex];return a&&i&&a.timestamp===i?2:1},pointHoverBackgroundColor:"#ffffff"},{label:"Rebalance Line",data:t.map(e=>e.rebalanceLine),fill:!1,borderColor:"rgb(234, 179, 8)",pointRadius:e=>{if(!e.raw)return 3;let a=t[e.dataIndex];return a&&i&&a.timestamp===i?8:3},pointHoverRadius:5,pointStyle:"circle",pointBackgroundColor:e=>{if(!e.raw)return"rgb(234, 179, 8)";let a=t[e.dataIndex];return a&&i&&a.timestamp,"rgb(234, 179, 8)"},pointBorderColor:e=>{if(!e.raw)return"rgb(234, 179, 8)";let a=t[e.dataIndex];return a&&i&&a.timestamp===i?"white":"rgb(234, 179, 8)"},pointBorderWidth:e=>{if(!e.raw)return 1;let a=t[e.dataIndex];return a&&i&&a.timestamp===i?2:1},pointHoverBackgroundColor:"#ffffff"},{label:"Liquidation Line",data:t.map(e=>e.liquidationLine),fill:!1,borderColor:"rgb(239, 68, 68)",pointRadius:e=>{if(!e.raw)return 3;let a=t[e.dataIndex];return a&&i&&a.timestamp===i?8:3},pointHoverRadius:5,pointStyle:"circle",pointBackgroundColor:e=>{if(!e.raw)return"rgb(239, 68, 68)";let a=t[e.dataIndex];return a&&i&&a.timestamp,"rgb(239, 68, 68)"},pointBorderColor:e=>{if(!e.raw)return"rgb(239, 68, 68)";let a=t[e.dataIndex];return a&&i&&a.timestamp===i?"white":"rgb(239, 68, 68)"},pointBorderWidth:e=>{if(!e.raw)return 1;let a=t[e.dataIndex];return a&&i&&a.timestamp===i?2:1},pointHoverBackgroundColor:"#ffffff"}]};return(0,r.jsx)("div",{className:"w-full",style:{height:l,touchAction:"none"},children:(0,r.jsx)(n.N1,{data:m,options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{position:c?"bottom":"top",labels:{boxWidth:c?8:12,padding:c?10:20,font:{size:c?11:12}}},tooltip:{enabled:!0,mode:"index",intersect:!1,bodySpacing:4,titleFont:{size:c?12:14},bodyFont:{size:c?11:12},callbacks:{label:e=>{if(!e.raw)return"";let r=t[e.dataIndex];if(!r)return"";let s="".concat(e.dataset.label,": ").concat(y(e.parsed.y));if("ETH Price"===e.dataset.label){let e=r.debt/r.positionSize;return[s,"xPosition Value: ".concat(y(r.xPositionValue)),"Debt: ".concat(y(r.debt)),"Total Position Size: ".concat(y(r.positionSize)),"LTV: ".concat(k(e)),"PnL: ".concat(y(r.xPositionValue-(a||0))),"ETH Amount: ".concat(r.ethAmount.toFixed(6)," ETH")]}return s}}}},scales:{x:{display:!0,grid:{display:!0},ticks:{display:!1},title:{display:!1}},y:{display:!0,title:{display:!0,text:"Price (USD)"},ticks:{callback:e=>y(e)}}}}})})}i.t1.register(i.PP,i.kc,i.FN,i.No,i.hE,i.m_,i.s$);var V=a(9606),T=a(3415),C=a(2679),S=a(2317),L=a(3463),F=a(9795);function E(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,F.QP)((0,L.$)(t))}var H=a(6195),I=a(1027);let A=(0,I.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),B=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(H.b,{ref:t,className:E(A(),a),...s})});B.displayName=H.b.displayName;let D=V.Op,M=s.createContext({}),_=e=>{let{...t}=e;return(0,r.jsx)(M.Provider,{value:{name:t.name},children:(0,r.jsx)(V.xI,{...t})})},q=()=>{let e=s.useContext(M),t=s.useContext(U),{getFieldState:a,formState:r}=(0,V.xW)(),n=a(e.name,r);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...n}},U=s.createContext({}),W=s.forwardRef((e,t)=>{let{className:a,...n}=e,i=s.useId();return(0,r.jsx)(U.Provider,{value:{id:i},children:(0,r.jsx)("div",{ref:t,className:E("space-y-2",a),...n})})});W.displayName="FormItem";let O=s.forwardRef((e,t)=>{let{className:a,...s}=e,{error:n,formItemId:i}=q();return(0,r.jsx)(B,{ref:t,className:E(n&&"text-red-500 dark:text-red-900",a),htmlFor:i,...s})});O.displayName="FormLabel";let J=s.forwardRef((e,t)=>{let{...a}=e,{error:s,formItemId:n,formDescriptionId:i,formMessageId:l}=q();return(0,r.jsx)(S.DX,{ref:t,id:n,"aria-describedby":s?"".concat(i," ").concat(l):"".concat(i),"aria-invalid":!!s,...a})});J.displayName="FormControl";let X=s.forwardRef((e,t)=>{let{className:a,...s}=e,{formDescriptionId:n}=q();return(0,r.jsx)("p",{ref:t,id:n,className:E("text-[0.8rem] text-zinc-500 dark:text-zinc-400",a),...s})});X.displayName="FormDescription";let Q=s.forwardRef((e,t)=>{let{className:a,children:s,...n}=e,{error:i,formMessageId:l}=q(),o=i?String(null==i?void 0:i.message):s;return o?(0,r.jsx)("p",{ref:t,id:l,className:E("text-[0.8rem] font-medium text-red-500 dark:text-red-900",a),...n,children:o}):null});Q.displayName="FormMessage";let $=s.forwardRef((e,t)=>{let{className:a,type:s,...n}=e;return(0,r.jsx)("input",{type:s,className:E("flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",a),ref:t,...n})});$.displayName="Input";var Y=a(5900);let Z=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsxs)(Y.bL,{ref:t,className:E("relative flex w-full touch-none select-none items-center",a),...s,children:[(0,r.jsx)(Y.CC,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-zinc-900/20 dark:bg-zinc-50/20",children:(0,r.jsx)(Y.Q6,{className:"absolute h-full bg-zinc-900 dark:bg-zinc-50"})}),(0,r.jsx)(Y.zi,{className:"block h-4 w-4 rounded-full border border-zinc-200 border-zinc-900/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:border-zinc-50/50 dark:bg-zinc-950 dark:focus-visible:ring-zinc-300"})]})});Z.displayName=Y.bL.displayName;let G=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,className:E("rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",a),...s})});G.displayName="Card",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,className:E("flex flex-col space-y-1.5 p-6",a),...s})}).displayName="CardHeader",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,className:E("font-semibold leading-none tracking-tight",a),...s})}).displayName="CardTitle",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,className:E("text-sm text-zinc-500 dark:text-zinc-400",a),...s})}).displayName="CardDescription",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,className:E("p-6 pt-0",a),...s})}).displayName="CardContent",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,className:E("flex items-center p-6 pt-0",a),...s})}).displayName="CardFooter";let K=T.Ik({xPositionValue:T.ai().min(100).max(1e6),openingPrice:T.ai().min(100),leverage:T.ai().min(1).max(7)});function ee(e){let{initialValues:t=o,onUpdate:a}=e,s=(0,V.mN)({resolver:(0,C.u)(K),defaultValues:t,mode:"onChange"}),n=()=>{let e=s.getValues(),t={xPositionValue:Number(e.xPositionValue),openingPrice:Number(e.openingPrice),leverage:Number(e.leverage)};Number.isNaN(t.xPositionValue)||Number.isNaN(t.openingPrice)||Number.isNaN(t.leverage)||!K.safeParse(t).success||a(t)},i=(e,t)=>{let a=parseFloat(t);Number.isNaN(a)||(e.onChange(a),n())},l=Number(s.watch("xPositionValue"))||0,m=Number(s.watch("openingPrice"))||0,x=Number(s.watch("leverage"))||1,u=c(l,x),p=d(l,u),b=g(p,m);return(0,r.jsx)(G,{className:"p-3 sm:p-6",children:(0,r.jsx)(D,{...s,children:(0,r.jsxs)("div",{className:"space-y-4 sm:space-y-6",children:[(0,r.jsx)(_,{control:s.control,name:"xPositionValue",render:e=>{let{field:t}=e;return(0,r.jsxs)(W,{className:"space-y-2 sm:space-y-3",children:[(0,r.jsx)(O,{className:"text-sm sm:text-base",children:"xPosition Value"}),(0,r.jsx)(J,{children:(0,r.jsx)($,{type:"number",placeholder:"10000",className:"h-10 sm:h-11 text-base sm:text-lg",...t,onChange:e=>i(t,e.target.value)})}),(0,r.jsxs)("div",{className:"space-y-1.5",children:[(0,r.jsxs)(X,{className:"text-xs sm:text-sm",children:["Initial xPosition value (",y(t.value),")"]}),(0,r.jsxs)(X,{className:"text-xs sm:text-sm",children:["Initial Debt: ",y(u)]}),(0,r.jsxs)(X,{className:"text-xs sm:text-sm",children:["Total Position Size: ",y(p)]}),(0,r.jsxs)(X,{className:"text-xs sm:text-sm",children:["Initial ETH Amount: ",b.toFixed(4)," ETH"]}),(0,r.jsxs)(X,{className:"text-xs sm:text-sm",children:["ETH Price: ",y(m)," / ETH"]}),(0,r.jsxs)(X,{className:"text-xs sm:text-sm font-semibold",children:["Current xPosition Value: ",y(v(t.value,x,m,m).xPositionValue)]})]}),(0,r.jsx)(Q,{className:"text-xs sm:text-sm"})]})}}),(0,r.jsx)(_,{control:s.control,name:"openingPrice",render:e=>{let{field:t}=e;return(0,r.jsxs)(W,{className:"space-y-2 sm:space-y-3",children:[(0,r.jsx)(O,{className:"text-sm sm:text-base",children:"Opening Price"}),(0,r.jsx)(J,{children:(0,r.jsx)($,{type:"number",placeholder:"2920",className:"h-10 sm:h-11 text-base sm:text-lg",...t,onChange:e=>i(t,e.target.value)})}),(0,r.jsxs)(X,{className:"text-xs sm:text-sm",children:["Enter the opening price (",y(t.value),")"]}),(0,r.jsx)(Q,{className:"text-xs sm:text-sm"})]})}}),(0,r.jsx)(_,{control:s.control,name:"leverage",render:e=>{let{field:t}=e;return(0,r.jsxs)(W,{className:"space-y-2 sm:space-y-3",children:[(0,r.jsxs)(O,{className:"text-sm sm:text-base",children:["Leverage ",(0,r.jsxs)("span",{className:"text-primary ml-1",children:["(",t.value,"x)"]})]}),(0,r.jsx)(J,{children:(0,r.jsx)("div",{className:"px-1 py-3 sm:py-4",children:(0,r.jsx)(Z,{min:1,max:7,step:.1,value:[t.value],onValueChange:e=>{let[a]=e;t.onChange(a),n()},className:"h-6 sm:h-7"})})}),(0,r.jsx)(X,{className:"text-xs sm:text-sm",children:(0,r.jsxs)("span",{className:"flex justify-between",children:[(0,r.jsx)("span",{children:"Min: 1x"}),(0,r.jsx)("span",{children:"Max: 7x"})]})}),(0,r.jsx)(Q,{className:"text-xs sm:text-sm"})]})}})]})})})}function et(e){let{constants:t}=e;return(0,r.jsxs)(G,{className:"p-6",children:[(0,r.jsx)("h2",{className:"text-lg font-semibold mb-4",children:"Protocol Constants"}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("span",{className:"text-muted-foreground",children:"Rebalance LTV"}),(0,r.jsx)("span",{className:"font-medium",children:k(t.rebalanceLTV)})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("span",{className:"text-muted-foreground",children:"Rebalancing Bounty"}),(0,r.jsx)("span",{className:"font-medium",children:k(t.rebalancingBounty)})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("span",{className:"text-muted-foreground",children:"Liquidation LTV"}),(0,r.jsx)("span",{className:"font-medium",children:k(t.liquidationLTV)})]})]})]})}let ea=(0,I.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),er=s.forwardRef((e,t)=>{let{className:a,variant:s,size:n,asChild:i=!1,...l}=e,o=i?S.DX:"button";return(0,r.jsx)(o,{className:E(ea({variant:s,size:n,className:a})),ref:t,...l})});er.displayName="Button";var es=a(2795),en=a(2517),ei=a(6235),el=a(4201),eo=a(2645),ec=a(2488),ed=a(7193);let em=el.bL;el.YJ;let ex=el.WT,eu=s.forwardRef((e,t)=>{let{className:a,children:s,...n}=e;return(0,r.jsxs)(el.l9,{ref:t,className:E("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-zinc-800 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300",a),...n,children:[s,(0,r.jsx)(el.In,{asChild:!0,children:(0,r.jsx)(eo.A,{className:"h-4 w-4 opacity-50"})})]})});eu.displayName=el.l9.displayName;let ep=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(el.PP,{ref:t,className:E("flex cursor-default items-center justify-center py-1",a),...s,children:(0,r.jsx)(ec.A,{className:"h-4 w-4"})})});ep.displayName=el.PP.displayName;let eb=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(el.wn,{ref:t,className:E("flex cursor-default items-center justify-center py-1",a),...s,children:(0,r.jsx)(eo.A,{className:"h-4 w-4"})})});eb.displayName=el.wn.displayName;let ef=s.forwardRef((e,t)=>{let{className:a,children:s,position:n="popper",...i}=e;return(0,r.jsx)(el.ZL,{children:(0,r.jsxs)(el.UC,{ref:t,className:E("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:n,...i,children:[(0,r.jsx)(ep,{}),(0,r.jsx)(el.LM,{className:E("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:s}),(0,r.jsx)(eb,{})]})})});ef.displayName=el.UC.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(el.JU,{ref:t,className:E("px-2 py-1.5 text-sm font-semibold",a),...s})}).displayName=el.JU.displayName;let eh=s.forwardRef((e,t)=>{let{className:a,children:s,...n}=e;return(0,r.jsxs)(el.q7,{ref:t,className:E("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",a),...n,children:[(0,r.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(el.VF,{children:(0,r.jsx)(ed.A,{className:"h-4 w-4"})})}),(0,r.jsx)(el.p4,{children:s})]})});function eg(e){let{isSimulating:t,marketMode:a,onPlayPause:s,onReset:n,onMarketModeChange:i}=e;return(0,r.jsx)(G,{className:"p-3 sm:p-4",children:(0,r.jsxs)("div",{className:"flex flex-wrap items-center gap-3 sm:gap-4",children:[(0,r.jsx)(er,{variant:"outline",size:"icon",onClick:s,className:"w-12 h-12 sm:w-10 sm:h-10",children:t?(0,r.jsx)(es.A,{className:"h-5 w-5 sm:h-4 sm:w-4"}):(0,r.jsx)(en.A,{className:"h-5 w-5 sm:h-4 sm:w-4"})}),(0,r.jsx)(er,{variant:"outline",size:"icon",onClick:n,className:"w-12 h-12 sm:w-10 sm:h-10",children:(0,r.jsx)(ei.A,{className:"h-5 w-5 sm:h-4 sm:w-4"})}),(0,r.jsxs)(em,{value:a,onValueChange:e=>i(e),children:[(0,r.jsx)(eu,{className:"w-full sm:w-[180px] h-12 sm:h-10 text-base sm:text-sm",children:(0,r.jsx)(ex,{placeholder:"Select market mode"})}),(0,r.jsxs)(ef,{className:"w-full sm:w-[180px]",children:[(0,r.jsx)(eh,{value:"bullish",className:"text-base sm:text-sm py-3 sm:py-2",children:"Bullish"}),(0,r.jsx)(eh,{value:"flat",className:"text-base sm:text-sm py-3 sm:py-2",children:"Flat"}),(0,r.jsx)(eh,{value:"bearish",className:"text-base sm:text-sm py-3 sm:py-2",children:"Bearish"})]})]})]})})}eh.displayName=el.q7.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(el.wv,{ref:t,className:E("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800",a),...s})}).displayName=el.wv.displayName;let eN=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:E("w-full caption-bottom text-sm",a),...s})})});eN.displayName="Table";let ev=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("thead",{ref:t,className:E("[&_tr]:border-b",a),...s})});ev.displayName="TableHeader";let ej=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:E("[&_tr:last-child]:border-0",a),...s})});ej.displayName="TableBody",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:E("border-t bg-zinc-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-zinc-800/50",a),...s})}).displayName="TableFooter";let ew=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tr",{ref:t,className:E("border-b transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800",a),...s})});ew.displayName="TableRow";let ey=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("th",{ref:t,className:E("h-10 px-2 text-left align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] dark:text-zinc-400",a),...s})});ey.displayName="TableHead";let ez=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("td",{ref:t,className:E("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...s})});function eP(e){let{events:t,selectedTimestamp:a,onSelectEvent:s}=e;if(0===t.length)return(0,r.jsx)("div",{className:"rounded-xl border bg-card text-card-foreground",children:(0,r.jsxs)("div",{className:"flex flex-col space-y-1.5 p-6",children:[(0,r.jsx)("h3",{className:"font-semibold leading-none tracking-tight",children:"Rebalancing Events"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"No rebalancing events yet"})]})});let n=e=>{null==s||s(e===a?null:e)};return(0,r.jsxs)("div",{className:"rounded-xl border bg-card text-card-foreground",children:[(0,r.jsxs)("div",{className:"flex flex-col space-y-1.5 p-6 pb-0",children:[(0,r.jsx)("h3",{className:"font-semibold leading-none tracking-tight",children:"Rebalancing Events"}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"Track position reductions during rebalancing"})]}),(0,r.jsx)("div",{className:"p-6 pt-0",children:(0,r.jsxs)(eN,{children:[(0,r.jsx)(ev,{children:(0,r.jsxs)(ew,{children:[(0,r.jsx)(ey,{children:"ETH Price"}),(0,r.jsx)(ey,{children:"Debt to Rebalance"}),(0,r.jsx)(ey,{children:"Rebalance Bounty"}),(0,r.jsx)(ey,{children:"Total"})]})}),(0,r.jsx)(ej,{children:t.map(e=>(0,r.jsxs)(ew,{className:"cursor-pointer hover:bg-accent/50 ".concat(e.timestamp===a?"bg-accent":""),onClick:()=>n(e.timestamp),children:[(0,r.jsx)(ez,{children:y(e.price)}),(0,r.jsx)(ez,{className:"text-red-500 dark:text-red-400",children:y(e.debtToRebalance)}),(0,r.jsx)(ez,{className:"text-red-500 dark:text-red-400",children:y(e.fee)}),(0,r.jsx)(ez,{className:"font-medium text-red-500 dark:text-red-400",children:y(e.totalReduction)})]},e.timestamp))})]})})]})}function ek(){let[e,t]=(0,s.useState)({...o,constants:l,currentPrice:o.openingPrice,priceHistory:[],rebalancingEvents:[],isSimulating:!1,marketMode:"bullish"}),[a,n]=(0,s.useState)(null),i=(0,s.useCallback)(()=>{if(!e.openingPrice||!e.leverage||!e.xPositionValue)return[];let a=e.openingPrice,r=h(a,.05*a,1,60),s=[],n=[];return r.forEach((t,a)=>{let r=Date.now()-(60-a)*500,i=s[a-1],o=(null==i?void 0:i.wasRebalanced)?i.debt:void 0,c=null==i?void 0:i.ethAmount,d=v(e.xPositionValue,e.leverage,t,e.openingPrice,o,c),x={timestamp:r,price:t,xPositionValue:d.xPositionValue,initialDebt:d.initialDebt,debt:d.debt,positionSize:d.positionSize,ethAmount:d.ethAmount,wasRebalanced:(null==i?void 0:i.wasRebalanced)||!1,rebalancingAmount:(null==i?void 0:i.rebalancingAmount)||0,lastRebalancePrice:(null==i?void 0:i.lastRebalancePrice)||m(e.openingPrice,e.leverage,l.rebalanceLTV)};if(t<x.lastRebalancePrice){let a=z(x.positionSize,x.debt,e.constants.rebalanceLTV,e.constants.rebalancingBounty);x=P(x,t,e.constants.rebalanceLTV,e.constants.rebalancingBounty),a.debtToRebalance>0&&n.push({timestamp:r,price:t,debtToRebalance:a.debtToRebalance,fee:a.rebalancingFee,totalReduction:a.debtToRebalance+a.rebalancingFee,remainingPosition:a.newPositionSize})}let u=w(x,e.openingPrice,e.leverage,e.constants);s.push(u)}),t(e=>({...e,rebalancingEvents:n})),s},[e.openingPrice,e.xPositionValue,e.constants,e.leverage]);(0,s.useEffect)(()=>{let e=i();t(t=>{var a;return{...t,priceHistory:e,currentPrice:(null===(a=e[e.length-1])||void 0===a?void 0:a.price)||t.currentPrice}})},[i]),(0,s.useEffect)(()=>{if(!e.isSimulating)return;let a=setInterval(()=>{t(e=>{let t=e.priceHistory[e.priceHistory.length-1];if(!t)return e;let a=0;"flat"!==e.marketMode&&(a=.005*("bullish"===e.marketMode?1:-1));let r=t.price*(1+a),s=v(e.xPositionValue,e.leverage,r,e.openingPrice,t.wasRebalanced?t.debt:void 0,t.ethAmount),n={timestamp:Date.now(),price:r,xPositionValue:s.xPositionValue,initialDebt:s.initialDebt,debt:s.debt,positionSize:s.positionSize,ethAmount:s.ethAmount,wasRebalanced:t.wasRebalanced,rebalancingAmount:t.rebalancingAmount,lastRebalancePrice:t.lastRebalancePrice},i=[...e.rebalancingEvents];if(r<n.lastRebalancePrice){let t=z(n.positionSize,n.debt,e.constants.rebalanceLTV,e.constants.rebalancingBounty);n=P(n,r,e.constants.rebalanceLTV,e.constants.rebalancingBounty),t.debtToRebalance>0&&(i=[...i,{timestamp:Date.now(),price:r,debtToRebalance:t.debtToRebalance,fee:t.rebalancingFee,totalReduction:t.debtToRebalance+t.rebalancingFee,remainingPosition:t.newPositionSize}])}let l=w(n,e.openingPrice,e.leverage,e.constants),o=[...e.priceHistory.slice(-59),l];return{...e,currentPrice:r,priceHistory:o,rebalancingEvents:i}})},500);return()=>clearInterval(a)},[e.isSimulating]);let c=e=>{t(t=>{let a=j(t.openingPrice,e,t.constants);return{...t,leverage:e,priceHistory:t.priceHistory.map(r=>({...r,rebalanceLine:b(r,t.openingPrice,e,t.constants.rebalanceLTV),liquidationLine:f(r,t.openingPrice,e,t.constants.liquidationLTV,a)}))}})},d=e.priceHistory.length>0?e.priceHistory[e.priceHistory.length-1].xPositionValue-e.xPositionValue:0;return(0,r.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 py-6 max-w-7xl space-y-6 sm:space-y-8",children:[(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4",children:[(0,r.jsx)("h1",{className:"text-2xl sm:text-3xl font-bold tracking-tight",children:"f(x) Protocol Rebalancing Simulator"}),(0,r.jsxs)("div",{className:"w-full sm:w-auto inline-flex flex-col bg-card rounded-xl overflow-hidden border border-border",children:[(0,r.jsx)("div",{className:"px-4 sm:px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center",children:"Current PnL"}),(0,r.jsx)("div",{className:"px-4 sm:px-3 py-2 sm:py-1.5 text-xl sm:text-lg font-bold tabular-nums text-center ".concat(d>=-.01?"text-green-600 dark:text-green-500":"text-red-600 dark:text-red-500"),children:y(d)})]})]}),(0,r.jsxs)("div",{className:"grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-[2fr_1fr]",children:[(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(R,{data:e.priceHistory,height:500,initialXPositionValue:e.xPositionValue,selectedTimestamp:a}),(0,r.jsx)(eg,{isSimulating:e.isSimulating,marketMode:e.marketMode,onPlayPause:()=>{t(e=>({...e,isSimulating:!e.isSimulating}))},onReset:()=>{t(e=>({...e,isSimulating:!1,priceHistory:i(),rebalancingEvents:[]})),n(null)},onMarketModeChange:e=>{t(t=>({...t,marketMode:e}))}}),(0,r.jsx)(eP,{events:e.rebalancingEvents,selectedTimestamp:a,onSelectEvent:n})]}),(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsx)(ee,{initialValues:e,onUpdate:a=>{if(a.leverage!==e.leverage&&a.openingPrice===e.openingPrice&&a.xPositionValue===e.xPositionValue){c(a.leverage);return}t(e=>({...e,...a,priceHistory:[],rebalancingEvents:[]})),n(null)}}),(0,r.jsx)(et,{constants:e.constants})]})]})]})}ez.displayName="TableCell",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("caption",{ref:t,className:E("mt-4 text-sm text-zinc-500 dark:text-zinc-400",a),...s})}).displayName="TableCaption"}},e=>{var t=t=>e(e.s=t);e.O(0,[647,174,441,517,358],()=>t(741)),_N_E=e.O()}]);