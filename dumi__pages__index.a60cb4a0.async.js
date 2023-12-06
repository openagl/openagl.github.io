"use strict";(self.webpackChunkopenagl_site=self.webpackChunkopenagl_site||[]).push([[152],{60500:function(Y1,_,l){l.d(_,{Y:function(){return B}});var H=l(97857),t=l.n(H),b=l(49511),A=l(87363),i={logo:"https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*VU5eSq-BtJUAAAAAAAAAAAAADtmcAQ/original",favicon:["https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*JiTDRaNWTQkAAAAAAAAAAAAADtmcAQ/original"],metas:[{name:"keywords",content:"AGL, All-Scale Graph Learning, \u5927\u89C4\u6A21\u56FE\u5B66\u4E60\u7CFB\u7EDF"},{name:"description",content:"AGL\uFF08All-Scale Graph Learning\uFF09\u5927\u89C4\u6A21\u56FE\u5B66\u4E60\u7CFB\u7EDF"}],footer:"\xA9 \u7248\u6743\u6240\u6709 2022 Ant Group Co., Ltd. \u4EACICP\u590715032932\u53F7-38"},M={PRIMARY_KEY:"AGL",PRIMARY_TITLE:{zh:"\u5927\u89C4\u6A21\u56FE\u5B66\u4E60\u7CFB\u7EDF",en:"All-Scale Graph Learning"},PRIMARY_DESCRIPTION:{zh:"All-Scale Graph Learning",en:"All-Scale Graph Learning"},GITHUB:"GitHub",GITHUB_URL:"https://github.com/TuGraph-family/TuGraph-AntGraphLearning",HELP_URL:"",HELP_DOCUMENT:{zh:"\u5E2E\u52A9\u6587\u6863",en:"Document"},ANNOUNCEMENT_INFO_DATA:[{title:{zh:"AGL\u5F00\u6E90\u53D1\u5E03",en:"AGL open source release"},description:{zh:"\u5916\u6EE9\u5927\u4F1A\u8682\u8681\u5F00\u6E90\u5927\u89C4\u6A21\u56FE\u5B66\u4E60\u7CFB\u7EDFAGL",en:"Bund Conference Ant open source large-scale graph learning system AGL"},linkUrl:"https://mp.weixin.qq.com/s/e4Jcvp8dlyj3ZJJukHi5WA",imgUrl:"https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*i1HwQKSMFo0AAAAAAAAAAAAADtmcAQ/original"}],TECHNICAL_FEATURES_TITLE:{zh:"\u6280\u672F\u7279\u6027",en:"Technical Features"},TECHNICAL_FEATURES_STYLE:{minCardWidth:100},TECHNICAL_FEATURES_DATA:[{title:{zh:"\u6613\u7528",en:"easy to use"},description:{zh:"\u63D0\u4F9B\u591A\u4E2A\u5728\u91D1\u878D\u573A\u666F\u7684\u4F7F\u7528\u6848\u4F8B",en:"Provides multiple use eases in financial scenarios"},imgUrl:"https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*qAvdQoWBKX8AAAAAAAAAAAAADtmcAQ/original",imgStyle:{width:112,height:112}},{title:{zh:"\u5927\u89C4\u6A21",en:"Large-scale"},description:{zh:"\u652F\u6301\u767E\u4EBF\u8282\u70B9\u5343\u4EBF\u8FB9",en:"Supports billions of nodes and trillions of edges"},imgUrl:"https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*_cbTQKqJ5LMAAAAAAAAAAAAADtmcAQ/original",imgStyle:{width:112,height:112}},{title:{zh:"\u6269\u5C55\u6027\u5F3A",en:"Highly extensible"},description:{zh:"\u652F\u6301 Tensorflow/Pytorch\u591A\u5F15\u64CE\uFF0C\u63D0\u4F9B\u4E30\u5BCC\u7684\u56FE\u5B66\u4E60\u7B97\u5B50",en:"Supports multiple engines like Tensorflow/Pytorch, provides rich graph learning operators"},imgUrl:"https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*kKciS5ldXGIAAAAAAAAAAAAADtmcAQ/original",imgStyle:{width:112,height:112}},{title:{zh:"\u77E5\u8BC6\u9A71\u52A8",en:"Knowledge-driven"},description:{zh:"\u652F\u6301 Tensorflow/Pytorch\u591A\u5F15\u64CE\uFF0C\u63D0\u4F9B\u4E30\u5BCC\u7684\u56FE\u5B66\u4E60\u7B97\u5B50",en:"Supports multiple engines like Tensorflow/Pytorch, provides rich graph learning operators"},imgUrl:"https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*PheCT7fLUwsAAAAAAAAAAAAADtmcAQ/original",imgStyle:{width:112,height:112}}],BUSINESS_APPLICATION_TITLE:{zh:"\u4E1A\u52A1\u5E94\u7528",en:"Business Applications"},BUSINESS_APPLICATION_DATA:[{title:{zh:"\u8425\u9500\u63A8\u8350\u573A\u666F",en:"Marketing Recommendation"},description:{zh:"\u57FA\u4E8E\u56FE\u8C31\u4E2D\u7684\u77E5\u8BC6\u4EE5\u53CA\u793E\u4EA4\u7F51\u7EDC\u4E2D\u7684\u8D8B\u540C\u6027\u9A71\u52A8\u6A21\u578B\uFF0C\u8FC1\u79FB\u7528\u6237\u504F\u597D\u81F3\u65B0\u4F9B\u7ED9\u4E0A",en:"Transfer user preferences to new supplies based on knowledge in the graph and convergence-driven models in social networks"},imgUrl:{zh:"https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*T04oTZV3uUQAAAAAAAAAAAAADtmcAQ/original",en:"https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*yPjsTa96yuMAAAAAAAAAAAAADtmcAQ/original"},children:[{title:{zh:"\u4E1A\u52A1\u80CC\u666F",en:"Business Background"},children:[{zh:"\u7528\u57FA\u4E8E\u56FE\u8C31\u4E2D\u7684\u77E5\u8BC6\u4EE5\u53CA\u793E\u4EA4\u7F51\u7EDC\u4E2D\u7684\u8D8B\u540C\u6027\u9A71\u52A8\u6A21\u578B\uFF0C\u8FC1\u79FB\u7528\u6237\u504F\u597D\u81F3\u65B0\u4F9B\u7ED9\u4E0A",en:"Transfer user preferences to new supply using knowledge from graph and convergence-driven models in social networks"}]},{title:{zh:"\u6280\u672F\u65B9\u6848",en:"Technical Solution"},children:[{zh:"\u7528\u6237\u504F\u597D\u4E0A\u9AD8\u540C\u914D\u6027\u7684\u56FE\u7ED3\u6784\u6570\uFF08\u793E\u4EA4\u5173\u7CFB\u7B49\uFF09\u4F5C\u4E3A\u4FE1\u606F\u8FC1\u79FB\u7684\u6865\u6881",en:"Utilize graph structures with high homophily in user preferences (such as social relationships) as bridges for information transfer"},{zh:"\u5229\u7528\u56FE\u8C31\u4E2D\u5B9E\u4F53\u8868\u5F81\u6765\u8FDE\u63A5\u5E76\u8FC1\u79FB\u7528\u6237\u504F\u597D\u81F3\u65B0\u4F9B\u7ED9\u4E0A",en:"Use entity representations in the graph to connect and transfer user preferences to new supplies"}]}]},{title:{zh:"\u4F01\u4E1A\u6388\u4FE1\u573A\u666F",en:"Enterprise Credit"},description:{zh:"\u5728\u590D\u6742\u7684\u4F01\u4E1A\u5173\u7CFB\u56FE\u4E2D\u57FA\u4E8E\u8DEF\u5F84\u611F\u77E5\u7684\u65B9\u6CD5\u6316\u6398\u4E0A\u4E0B\u6E38\u4F9B\u5E94\u94FE\u5173\u7CFB\uFF0C\u5E76\u57FA\u4E8E\u4F9B\u5E94\u94FE\u56FE\u8FDB\u884C\u591A\u7EF4\u5EA6\u7684\u98CE\u9669\u5206\u6790",en:"Utilize path-aware methods to mine upstream and downstream supply chain relationships in complex enterprise relationship graphs and conduct multi-dimensional risk analysis based on the supply chain graph"},imgUrl:{zh:"https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*O1SYToYyQnMAAAAAAAAAAAAADtmcAQ/original",en:""},children:[{title:{zh:"\u4E1A\u52A1\u80CC\u666F",en:"Business Background"},children:[{zh:"\u5728\u590D\u6742\u7684\u4F01\u4E1A\u5173\u7CFB\u56FE\u4E2D\u57FA\u4E8E\u8DEF\u5F84\u611F\u77E5\u7684\u65B9\u6CD5\u6316\u6398\u4E0A\u4E0B\u6E38\u4F9B\u5E94\u94FE\u5173\u7CFB\uFF0C\u5E76\u57FA\u4E8E\u4F9B\u5E94\u94FE\u56FE\u8FDB\u884C\u591A\u7EF4\u5EA6\u7684\u98CE\u9669\u5206\u6790",en:"In the complex enterprise relationship diagram, the relationship between upstream and downstream supply chain is mined based on the path perception method, and the risk analysis is carried out based on the supply chain diagram"}]},{title:{zh:"\u6280\u672F\u65B9\u6848",en:"Technical Solution"},children:[{zh:"\u5229\u7528\u5B9E\u4F53\u4E30\u5BCC\u7684\u5C5E\u6027\u7279\u5F81\u4FE1\u606F",en:"Utilize rich attribute feature information of entities"},{zh:"\u5B66\u4E60\u8868\u5F81\u8282\u70B9\u95F4\u590D\u6742\u62D3\u6251\u7ED3\u6784",en:"Learn representations of complex topological structures between nodes"},{zh:"\u8DEF\u5F84\u611F\u77E5GNN\u4F20\u64AD-\u805A\u5408\u7ED3\u6784",en:"Path-aware GNN propagation-aggregation structure"}]}]}],COOPERATOR_TITLE:{zh:"\u5408\u4F5C\u4F19\u4F34",en:"Cooperators"},COOPERATOR_DATA:[{imgUrl:"",title:{zh:"\u5317\u4EAC\u90AE\u7535\u5927\u5B66",en:"Beijing University of Posts and Telecommunications"},imgHidden:!0},{imgUrl:"",title:{zh:"OpenKG\u77E5\u8BC6\u56FE\u8C31\u793E\u533A",en:"OpenKG Knowledge Graph Community"}}],ABOUT_US_CONFIG:[{title:{zh:"\u8D44\u6E90",en:"Resources"},description:{zh:"GitHub",en:"GitHub"},imgUrl:"https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*JRo8Roq8B9EAAAAAAAAAAAAADtmcAQ/original",linkUrl:"https://github.com/TuGraph-family/TuGraph-AntGraphLearning"},{title:{zh:"\u793E\u533A",en:"Community"},description:{zh:"\u793E\u533A\u5730\u5740",en:"Community Address"},linkUrl:"",hidden:!0},{title:{zh:"\u5173\u6CE8\u6211\u4EEC",en:"follow us"},description:{zh:"\u90AE\u7BB1: feidongni.fdn@antgroup.com",en:"Email: feidongni.fdn@antgroup.com"},linkUrl:"mailto:feidongni.fdn@antgroup.com"}],OR_CODE_CONFIG_TITLE:{zh:"\u8682\u8681\u56FE\u5B66\u4E60",en:"Ant Graph Learning"},OR_CODE_CONFIG_URL:"https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*Q_HdTayGBzIAAAAAAAAAAAAADtmcAQ/original"},D=function(){return M},S=l(96486),L=function(P,v){return P.map(function(g){var C=g.title,c=g.description,n=g.imgUrl,T=g.children;return t()(t()({},g),{},{title:v(C==null?void 0:C.zh,C==null?void 0:C.en),description:v(c==null?void 0:c.zh,c==null?void 0:c.en),imgUrl:typeof n=="string"?n:v(n==null?void 0:n.zh,n==null?void 0:n.en),children:(0,S.isArray)(T)?T.map(function(j){var Z,z;return{title:v(j.title.zh,j.title.en),children:(0,S.isArray)(j.children)?j.children.map(function(I){return v(I.zh,I.en)}):[],imgUrl:typeof j.imgUrl=="string"?j.imgUrl:v((Z=j.imgUrl)===null||Z===void 0?void 0:Z.zh,(z=j.imgUrl)===null||z===void 0?void 0:z.en)}}):[]})})},G=function(P,v){var g={};return Object.keys(P).forEach(function(C){var c=P[C];(0,S.isObject)(c)&&c.zh&&c.en?g[C]=v(c.zh,c.en):(0,S.isArray)(c)?g[C]=L(c,v):g[C]=c}),g},B=function(){var P=(0,b.bU)(),v=P.id,g=(0,A.useCallback)(function(n,T){return T&&v!=="zh-CN"?T:n},[v]),C=G(D(),g),c=(0,A.useMemo)(function(){return t()({},C)},[g]);return{intl:g,Messages:c}}},45421:function(Y1,_,l){l.r(_),l.d(_,{default:function(){return Mn}});var H=l(68400),t=l.n(H),b=l(87363),A=l.n(b),i=l(20648),M=l(26850),D=l(29713),S=l(14032),L=l(51431),G=l(15009),B=l.n(G),E=l(99289),P=l.n(E),v=l(5574),g=l.n(v),C=function(e,r){var a=(0,b.useState)({stars:0,forks:0}),o=g()(a,2),s=o[0],f=o[1];return(0,b.useEffect)(function(){function p(){return x.apply(this,arguments)}function x(){return x=P()(B()().mark(function y(){var O,m;return B()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,fetch("https://api.github.com/repos/".concat(e,"/").concat(r));case 3:return O=u.sent,u.next=6,O.json();case 6:m=u.sent,f({stars:m.stargazers_count,forks:m.forks}),u.next=13;break;case 10:u.prev=10,u.t0=u.catch(0),console.error("Error fetching repo stats:",u.t0);case 13:case"end":return u.stop()}},y,null,[[0,10]])})),x.apply(this,arguments)}p()},[e,r]),s},c=l(60500),n=l(86074),T,j,Z,z=(0,i.ZP)(L.Z)(T||(T=t()([`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  width: 196px;
  height: 55px;
  gap: 5px;
  padding: 5px;
  border-radius: 8px;
  background-image: linear-gradient(
    105deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );

  @media (max-width: 900px), (max-width: 480px) {
    width: 150px;
    height: 45px;
  }
`]))),I=(0,i.ZP)(L.Z)(j||(j=t()([""]))),W=i.ZP.span(Z||(Z=t()([`
  margin-left: 4px;
  color: var(--text-color);
`]))),K1=A().memo(function(){var d=(0,c.Y)(),e=d.Messages.GITHUB_URL,r=e,a=r.split("/"),o=a[3],s=a[4],f=C(o,s),p=f.stars,x=f.forks,y=function(){r&&window.open(r,"_blank","noopener=yes,noreferrer=yes")};return(0,n.jsx)(L.Z,{justify:"end",children:(0,n.jsxs)(z,{children:[(0,n.jsx)(I,{children:(0,n.jsx)(M.Z,{onClick:y})}),(0,n.jsxs)(I,{children:[(0,n.jsx)(D.Z,{}),(0,n.jsx)(W,{children:x!=null?x:0})]}),(0,n.jsxs)(I,{children:[(0,n.jsx)(S.Z,{}),(0,n.jsx)(W,{children:p!=null?p:0})]})]})})}),$1=K1,Q,Y,K,$,J1=(0,i.ZP)(L.Z)(Q||(Q=t()([`
  font-size: 50px;
  color: var(--text-color);
  text-align: center;
  font-weight: 500;
  align-items: center;

  @media (max-width: 900px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-top: 16px;
  }
`]))),V1=i.ZP.div(Y||(Y=t()([`
  color: rgba(67, 155, 255, 1);
`]))),J=i.ZP.div(K||(K=t()([`
  color: var(--text-color);
`]))),X1=i.ZP.div($||($=t()([`
  font-size: 18px;
  opacity: 0.45;
  color: var(--text-color);
  text-align: center;

  @media (max-width: 900px), (max-width: 480px) {
    margin-top: 8px;
  }
`]))),q1=A().memo(function(){var d=(0,c.Y)(),e=d.Messages,r=e.PRIMARY_KEY,a=e.PRIMARY_TITLE,o=e.PRIMARY_DESCRIPTION;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(L.Z,{justify:"center",children:(0,n.jsxs)(J1,{justify:"center",children:[(0,n.jsx)(V1,{children:r}),(0,n.jsx)(J,{children:"\xB7"}),(0,n.jsx)(J,{style:{textAlign:"left"},children:a})]})}),(0,n.jsx)(X1,{children:o})]})}),n5=q1,e5=l(97857),h=l.n(e5),t5=l(13769),w=l.n(t5),i5=["fill"],r5=function(e){var r=e.fill,a=w()(e,i5);return(0,n.jsx)("svg",h()(h()({width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1"},a),{},{children:(0,n.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{x:"0",y:"0",width:"16",height:"16"}),(0,n.jsx)("g",{transform:"translate(0.6667, 0.6667)",fill:"#000000",opacity:"0.45",children:(0,n.jsx)("path",{d:"M10,2.66666667 C10,1.19390667 8.8061,0 7.33333333,0 C5.86056667,0 4.66666667,1.19390667 4.66666667,2.66666667 C4.66666667,3.9093 5.51663333,4.95343333 6.66686667,5.24936667 L6.66666667,7.33333333 L2.66666667,7.33333333 C2.11438333,7.33333333 1.66666667,7.78103333 1.66666667,8.33333333 L1.66665,10.4299667 C0.70283,10.7168333 0,11.6096667 0,12.6666667 C0,13.9553333 1.04467,15 2.33333333,15 C3.622,15 4.66666667,13.9553333 4.66666667,12.6666667 C4.66666667,11.6098 3.964,10.7170333 3.00033333,10.4300667 L3,8.66666667 L11.6666667,8.66666667 L11.6666667,10.4299667 C10.7028333,10.7168333 10,11.6096667 10,12.6666667 C10,13.9553333 11.0446667,15 12.3333333,15 C13.622,15 14.6666667,13.9553333 14.6666667,12.6666667 C14.6666667,11.6098 13.964,10.7170333 13.0003333,10.4300667 L13,8.33333333 C13,7.78103333 12.5523,7.33333333 12,7.33333333 L8,7.33333333 L8.00013333,5.2493 C9.1502,4.95323333 10,3.90916667 10,2.66666667 Z M11.3333333,12.6666667 C11.3333333,12.1143667 11.7810333,11.6666667 12.3333333,11.6666667 C12.8856333,11.6666667 13.3333333,12.1143667 13.3333333,12.6666667 C13.3333333,13.2189667 12.8856333,13.6666667 12.3333333,13.6666667 C11.7810333,13.6666667 11.3333333,13.2189667 11.3333333,12.6666667 Z M2.33333333,11.6666667 C1.78105,11.6666667 1.33333333,12.1143667 1.33333333,12.6666667 C1.33333333,13.2189667 1.78105,13.6666667 2.33333333,13.6666667 C2.88563333,13.6666667 3.33333333,13.2189667 3.33333333,12.6666667 C3.33333333,12.1143667 2.88563333,11.6666667 2.33333333,11.6666667 Z M6,2.66666667 C6,1.93028667 6.59696667,1.33333333 7.33333333,1.33333333 C8.0697,1.33333333 8.66666667,1.93028667 8.66666667,2.66666667 C8.66666667,3.40303333 8.0697,4 7.33333333,4 C6.59696667,4 6,3.40303333 6,2.66666667 Z",fill:r})})]})})}))},a5=r5,l5=["fill"],o5=function(e){var r=e.fill,a=w()(e,l5);return(0,n.jsx)("svg",h()(h()({width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1"},a),{},{children:(0,n.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{x:"0",y:"0",width:"16",height:"16"}),(0,n.jsx)("g",{transform:"translate(1, 1)",opacity:"0.45",children:(0,n.jsx)("path",{d:"M3.30302412,13.4870594 C3.02652412,13.6200594 2.69455745,13.5036928 2.56159079,13.2271928 C2.51699079,13.1344594 2.49899079,13.0311594 2.50969079,12.9287928 L2.91452412,9.04605944 C2.93082412,8.88979277 2.88019079,8.73392611 2.77515745,8.61705944 L0.142397452,5.68825944 C-0.0627225481,5.46005944 -0.0440225481,5.10879277 0.184160785,4.90369277 C0.256457452,4.83869277 0.344537452,4.79382611 0.439607452,4.77352611 L4.29105745,3.95155944 C4.44472412,3.91875944 4.57732412,3.82242611 4.65599079,3.68642611 L6.62789079,0.277472775 C6.78152412,0.0118827749 7.12135745,-0.0788805584 7.38695745,0.0747527749 C7.47112412,0.123426108 7.54102412,0.193326108 7.58969079,0.277472775 L9.56159079,3.68642611 C9.64025745,3.82242611 9.77285745,3.91875944 9.92652412,3.95155944 L13.7779575,4.77352611 C14.0780241,4.83755944 14.2693908,5.13272611 14.2053241,5.43279277 C14.1850575,5.52785944 14.1401575,5.61595944 14.0751908,5.68825944 L11.4424241,8.61705944 C11.3373908,8.73392611 11.2867575,8.88979277 11.3030241,9.04605944 L11.7078908,12.9287928 C11.7397241,13.2339594 11.5181241,13.5071261 11.2129575,13.5389594 C11.1105908,13.5496261 11.0072908,13.5316594 10.9145241,13.4870594 L7.34959079,11.7724594 C7.19739079,11.6992594 7.02019079,11.6992594 6.86799079,11.7724594 L3.30302412,13.4870594 Z M6.29009079,10.5708928 C6.80752412,10.3220261 7.41005745,10.3220261 7.92749079,10.5708928 L10.2373241,11.6817928 L9.97689079,9.18435944 C9.92149079,8.65299277 10.0936908,8.12302611 10.4508575,7.72569277 L12.1846908,5.79685944 L9.64822412,5.25552611 C9.12575745,5.14402611 8.67492412,4.81649277 8.40742412,4.35402611 L7.10879079,2.10898611 L5.81015745,4.35402611 C5.54265745,4.81649277 5.09182412,5.14402611 4.56935745,5.25552611 L2.03287412,5.79685944 L3.76672412,7.72569277 C4.12389079,8.12302611 4.29609079,8.65299277 4.24069079,9.18435944 L3.98025745,11.6817928 L6.29009079,10.5708928 Z",fill:r})})]})})}))},s5=o5,d5=function(e){return(0,n.jsx)("svg",h()(h()({width:"20px",height:"20px",viewBox:"0 0 20 20",version:"1.1"},e),{},{children:(0,n.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,n.jsxs)("g",{fill:"#000000",fillRule:"nonzero",children:[(0,n.jsx)("rect",{opacity:"0",x:"0",y:"0",width:"100%",height:"100%"}),(0,n.jsx)("path",{d:"M18.125,3.14453125 L13.65625,3.14453125 C12.6972656,3.14453125 11.7597656,3.41992187 10.953125,3.93945312 L10,4.55078125 L9.046875,3.93945312 C8.2421875,3.41992187 7.30273437,3.14453125 6.34375,3.14453125 L1.875,3.14453125 C1.52929688,3.14453125 1.25,3.42382812 1.25,3.76953125 L1.25,14.8632812 C1.25,15.2089844 1.52929688,15.4882812 1.875,15.4882812 L6.34375,15.4882812 C7.30273438,15.4882812 8.24023438,15.7636719 9.046875,16.2832031 L9.9140625,16.8417969 C9.93945313,16.8574219 9.96875,16.8671875 9.99804688,16.8671875 C10.0273438,16.8671875 10.0566406,16.859375 10.0820313,16.8417969 L10.9492188,16.2832031 C11.7578125,15.7636719 12.6972656,15.4882812 13.65625,15.4882812 L18.125,15.4882812 C18.4707031,15.4882812 18.75,15.2089844 18.75,14.8632812 L18.75,3.76953125 C18.75,3.42382812 18.4707031,3.14453125 18.125,3.14453125 Z M6.34375,14.0820312 L2.65625,14.0820312 L2.65625,4.55078125 L6.34375,4.55078125 C7.03515625,4.55078125 7.70703125,4.74804687 8.28710938,5.12109375 L9.24023438,5.73242187 L9.375,5.8203125 L9.375,14.84375 C8.4453125,14.34375 7.40625,14.0820312 6.34375,14.0820312 Z M17.34375,14.0820312 L13.65625,14.0820312 C12.59375,14.0820312 11.5546875,14.34375 10.625,14.84375 L10.625,5.8203125 L10.7597656,5.73242187 L11.7128906,5.12109375 C12.2929688,4.74804687 12.9648438,4.55078125 13.65625,4.55078125 L17.34375,4.55078125 L17.34375,14.0820312 Z M7.75195312,7.05078125 L4.12304688,7.05078125 C4.046875,7.05078125 3.984375,7.1171875 3.984375,7.19726562 L3.984375,8.07617187 C3.984375,8.15625 4.046875,8.22265625 4.12304688,8.22265625 L7.75,8.22265625 C7.82617187,8.22265625 7.88867188,8.15625 7.88867188,8.07617187 L7.88867188,7.19726562 C7.890625,7.1171875 7.828125,7.05078125 7.75195312,7.05078125 Z M12.109375,7.19726562 L12.109375,8.07617187 C12.109375,8.15625 12.171875,8.22265625 12.2480469,8.22265625 L15.875,8.22265625 C15.9511719,8.22265625 16.0136719,8.15625 16.0136719,8.07617187 L16.0136719,7.19726562 C16.0136719,7.1171875 15.9511719,7.05078125 15.875,7.05078125 L12.2480469,7.05078125 C12.171875,7.05078125 12.109375,7.1171875 12.109375,7.19726562 Z M7.75195312,9.78515625 L4.12304688,9.78515625 C4.046875,9.78515625 3.984375,9.8515625 3.984375,9.93164062 L3.984375,10.8105469 C3.984375,10.890625 4.046875,10.9570312 4.12304688,10.9570312 L7.75,10.9570312 C7.82617187,10.9570312 7.88867188,10.890625 7.88867188,10.8105469 L7.88867188,9.93164062 C7.890625,9.8515625 7.828125,9.78515625 7.75195312,9.78515625 Z M15.8769531,9.78515625 L12.2480469,9.78515625 C12.171875,9.78515625 12.109375,9.8515625 12.109375,9.93164062 L12.109375,10.8105469 C12.109375,10.890625 12.171875,10.9570312 12.2480469,10.9570312 L15.875,10.9570312 C15.9511719,10.9570312 16.0136719,10.890625 16.0136719,10.8105469 L16.0136719,9.93164062 C16.015625,9.8515625 15.953125,9.78515625 15.8769531,9.78515625 Z",fill:"currentColor"})]})})}))},c5=d5,p5=["fill"],h5=function(e){var r=e.fill,a=w()(e,p5);return(0,n.jsxs)("svg",h()(h()({width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"},a),{},{children:[(0,n.jsx)("path",{d:"M19.5492188,10.996875 C19.0921875,9.9703125 18.4382813,9.0609375 17.60625,8.296875 L16.9242188,7.67109375 C16.8234375,7.58203125 16.6640625,7.621875 16.6195313,7.7484375 L16.3148438,8.62265625 C16.125,9.17109375 15.7757813,9.73125 15.28125,10.2820313 C15.2484375,10.3171875 15.2109375,10.3265625 15.1851562,10.3289063 C15.159375,10.33125 15.1195312,10.3265625 15.084375,10.29375 C15.0515625,10.265625 15.0351562,10.2234375 15.0375,10.18125 C15.1242188,8.7703125 14.7023438,7.17890625 13.7789063,5.446875 C13.0148437,4.0078125 11.953125,2.88515625 10.6265625,2.10234375 L9.65859375,1.5328125 C9.53203125,1.4578125 9.3703125,1.55625 9.37734375,1.70390625 L9.42890625,2.82890625 C9.4640625,3.59765625 9.375,4.27734375 9.1640625,4.8421875 C8.90625,5.53359375 8.5359375,6.17578125 8.0625,6.75234375 C7.7296875,7.15546875 7.35703125,7.51875 6.94921875,7.8328125 C5.9625,8.58984375 5.14921875,9.5765625 4.5984375,10.6804688 C4.04296875,11.7960938 3.75,13.0453125 3.75,14.296875 C3.75,15.403125 3.96796875,16.4742188 4.39921875,17.484375 C4.81640625,18.4570313 5.41171875,19.3335938 6.16875,20.0835938 C6.928125,20.8335938 7.809375,21.4242188 8.79140625,21.834375 C9.80859375,22.2609375 10.8867188,22.4765625 12,22.4765625 C13.1132812,22.4765625 14.1914062,22.2609375 15.2085938,21.8367188 C16.190625,21.4265625 17.0742188,20.8382813 17.83125,20.0859375 C18.590625,19.3359375 19.1859375,18.459375 19.6007812,17.4867188 C20.0320312,16.4765625 20.25,15.4054688 20.25,14.2992188 C20.25,13.1554688 20.015625,12.0445313 19.5492188,10.996875 Z M16.7109375,18.9492188 C15.4523437,20.1960938 13.78125,20.8804688 12,20.8804688 C10.21875,20.8804688 8.54765625,20.1960938 7.2890625,18.9492188 C6.03515625,17.7046875 5.34375,16.0546875 5.34375,14.2992188 C5.34375,13.2796875 5.5734375,12.3023438 6.02578125,11.3929688 C6.46640625,10.5046875 7.12265625,9.71015625 7.91953125,9.0984375 C8.4234375,8.7140625 8.88515625,8.26640625 9.29296875,7.7671875 C9.87890625,7.05234375 10.3382813,6.25546875 10.6570313,5.4 C10.7835938,5.06015625 10.8796875,4.696875 10.940625,4.31015625 C11.5054688,4.83046875 11.9789063,5.45859375 12.375,6.19453125 C13.1578125,7.66171875 13.51875,8.9671875 13.4484375,10.078125 C13.415625,10.6125 13.6242188,11.1210938 14.0203125,11.4796875 C14.3648438,11.7890625 14.8101563,11.9460938 15.271875,11.9203125 C15.7335938,11.896875 16.1578125,11.6929688 16.4671875,11.3484375 C16.7789062,10.9992188 17.0484375,10.6429688 17.2734375,10.2796875 C17.6015625,10.6992188 17.8757813,11.15625 18.09375,11.6484375 C18.4664062,12.4875 18.65625,13.3804688 18.65625,14.2992188 C18.65625,16.0546875 17.9648438,17.7070313 16.7109375,18.9492188 Z",fill:r}),(0,n.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{fill:r,fillRule:"nonzero",opacity:"0",x:"0",y:"0",width:"24",height:"24"}),(0,n.jsxs)("g",{children:[(0,n.jsx)("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-3)"}),(0,n.jsx)("use",{fill:"url(#linearGradient-1)",fillRule:"evenodd"})]})]})})]}))},g5=h5,x5=["fill"],m5=function(e){var r=e.fill,a=w()(e,x5);return(0,n.jsxs)("svg",h()(h()({width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"},a),{},{children:[(0,n.jsx)("path",{d:"M20.025,18.7710937 C20.0296875,18.7640625 20.0367187,18.7570312 20.0414063,18.75 C21.5765625,16.9242187 22.5,14.5710937 22.5,12 C22.5,9.42890625 21.5765625,7.07578125 20.04375,5.25 C20.0390625,5.24296875 20.0320313,5.23828125 20.0273438,5.23125 C20.0015625,5.20078125 19.978125,5.17265625 19.9523437,5.14453125 C19.9429687,5.1328125 19.9335938,5.1234375 19.9242187,5.11171875 C19.8914062,5.07421875 19.8609375,5.0390625 19.828125,5.0015625 L19.8257812,4.99921875 C19.790625,4.959375 19.753125,4.91953125 19.7179687,4.8796875 L19.715625,4.87734375 C19.640625,4.79765625 19.565625,4.71796875 19.4882812,4.640625 L19.4859375,4.63828125 L19.3734375,4.52578125 L19.3664062,4.51875 C19.33125,4.48359375 19.2960937,4.45078125 19.2609375,4.41796875 C19.2492187,4.40625 19.2375,4.39453125 19.2234375,4.3828125 C19.2,4.359375 19.1765625,4.33828125 19.153125,4.3171875 C19.1460937,4.31015625 19.1367187,4.303125 19.1296875,4.29375 C17.259375,2.559375 14.7539063,1.5 12,1.5 C9.24609375,1.5 6.740625,2.559375 4.86796875,4.29375 C4.8609375,4.30078125 4.8515625,4.3078125 4.84453125,4.3171875 C4.82109375,4.33828125 4.79765625,4.36171875 4.77421875,4.38515625 C4.7625,4.396875 4.75078125,4.40859375 4.73671875,4.4203125 C4.7015625,4.453125 4.66640625,4.48828125 4.63125,4.52109375 L4.62421875,4.528125 L4.51171875,4.640625 L4.509375,4.64296875 C4.43203125,4.7203125 4.35703125,4.8 4.28203125,4.8796875 L4.2796875,4.88203125 C4.2421875,4.921875 4.20703125,4.96171875 4.171875,5.0015625 L4.16953125,5.00390625 C4.13671875,5.0390625 4.10390625,5.0765625 4.0734375,5.1140625 C4.0640625,5.12578125 4.0546875,5.13515625 4.0453125,5.146875 C4.01953125,5.175 3.99609375,5.20546875 3.9703125,5.23359375 C3.965625,5.240625 3.95859375,5.2453125 3.95390625,5.25234375 C2.4234375,7.07578125 1.5,9.42890625 1.5,12 C1.5,14.5710937 2.4234375,16.9242187 3.95625,18.75 C3.9609375,18.7570312 3.96796875,18.7640625 3.97265625,18.7710937 C3.99609375,18.7992187 4.021875,18.8296875 4.0453125,18.8578125 C4.0546875,18.8695312 4.0640625,18.8789062 4.0734375,18.890625 C4.10625,18.928125 4.13671875,18.9632812 4.16953125,19.0007812 C4.16953125,19.003125 4.171875,19.003125 4.171875,19.0054687 C4.20703125,19.0453125 4.2421875,19.0851562 4.2796875,19.1226562 L4.28203125,19.125 C4.35703125,19.2046875 4.43203125,19.284375 4.50703125,19.3617187 L4.509375,19.3640625 C4.546875,19.4015625 4.58203125,19.4390625 4.61953125,19.4742188 L4.6265625,19.48125 C4.70390625,19.5585937 4.78359375,19.6335937 4.86328125,19.70625 C6.740625,21.440625 9.24609375,22.5 12,22.5 C14.7539063,22.5 17.259375,21.440625 19.1320312,19.70625 C19.2117187,19.6335937 19.2890625,19.5585938 19.3664062,19.48125 L19.3734375,19.4742188 C19.4109375,19.4367187 19.4484375,19.4015625 19.4835938,19.3640625 L19.4859375,19.3617187 C19.5632812,19.284375 19.6382812,19.2046875 19.7109375,19.125 L19.7132813,19.1226562 C19.7484375,19.0828125 19.7859375,19.0453125 19.8210938,19.0054687 C19.8210938,19.003125 19.8234375,19.003125 19.8234375,19.0007812 C19.85625,18.965625 19.8890625,18.928125 19.9195313,18.890625 C19.9289063,18.8789062 19.9382812,18.8695312 19.9476563,18.8578125 C19.9757813,18.8273437 20.0015625,18.7992187 20.025,18.7710937 Z M20.1210938,15.4289062 C19.7976563,16.1929687 19.3710938,16.9007812 18.8507813,17.5429688 C18.2671875,17.0390625 17.6273438,16.5984375 16.940625,16.2328125 C17.2125,15.1335938 17.38125,13.9265625 17.4257812,12.65625 L20.7890625,12.65625 C20.71875,13.6148437 20.49375,14.5453125 20.1210938,15.4289062 Z M20.7890625,11.34375 L17.4257812,11.34375 C17.38125,10.0734375 17.2125,8.86640625 16.940625,7.7671875 C17.6273438,7.4015625 18.2671875,6.9609375 18.8507813,6.45703125 C19.3710938,7.09921875 19.7976563,7.80703125 20.1210938,8.57109375 C20.49375,9.4546875 20.71875,10.3851563 20.7890625,11.34375 Z M15.4289063,3.87890625 C16.359375,4.27265625 17.2054688,4.81640625 17.9507813,5.50078125 C17.5171875,5.87109375 17.0507812,6.196875 16.5585938,6.48046875 C16.190625,5.42578125 15.7195313,4.509375 15.1710938,3.77578125 C15.2578125,3.80859375 15.3445313,3.84375 15.4289063,3.87890625 Z M13.3054688,20.2992188 C13.0898438,20.4679688 12.8742188,20.596875 12.65625,20.6835938 L12.65625,16.3359375 C13.5914062,16.4015625 14.4984375,16.6078125 15.3679687,16.95 C15.1734375,17.5265625 14.9484375,18.0585938 14.6882812,18.5390625 C14.2804688,19.2984375 13.8023438,19.9054687 13.3054688,20.2992188 Z M14.6882812,5.4609375 C14.9460937,5.94375 15.1734375,6.47578125 15.3679687,7.05 C14.4984375,7.3921875 13.5914063,7.5984375 12.65625,7.6640625 L12.65625,3.31875 C12.871875,3.40546875 13.0898438,3.53203125 13.3054688,3.703125 C13.8023438,4.09453125 14.2804688,4.7015625 14.6882812,5.4609375 Z M12.65625,15.0210937 L12.65625,12.65625 L16.1132812,12.65625 C16.0757812,13.6921875 15.946875,14.6976563 15.73125,15.6515625 L15.7242188,15.6796875 C14.7609375,15.3140625 13.7296875,15.0867188 12.65625,15.0210937 L12.65625,15.0210937 Z M12.65625,11.34375 L12.65625,8.97890625 C13.7296875,8.91328125 14.7609375,8.6859375 15.7242187,8.3203125 L15.73125,8.3484375 C15.946875,9.30234375 16.0757812,10.3054687 16.1132812,11.34375 L12.65625,11.34375 Z M11.34375,12.65625 L11.34375,15.0210937 C10.2703125,15.0867187 9.2390625,15.3140625 8.27578125,15.6796875 L8.26875,15.6515625 C8.053125,14.6976562 7.92421875,13.6945312 7.88671875,12.65625 L11.34375,12.65625 Z M7.88671875,11.34375 C7.92421875,10.3078125 8.053125,9.30234375 8.26875,8.3484375 L8.27578125,8.3203125 C9.2390625,8.6859375 10.2679688,8.91328125 11.34375,8.97890625 L11.34375,11.34375 L7.88671875,11.34375 Z M11.34375,16.3359375 L11.34375,20.68125 C11.128125,20.5945312 10.9101562,20.4679687 10.6945313,20.296875 C10.1976563,19.9054687 9.7171875,19.2960937 9.309375,18.5367187 C9.0515625,18.0539062 8.82421875,17.521875 8.6296875,16.9476562 C9.5015625,16.6054688 10.4085938,16.4015625 11.34375,16.3359375 Z M11.34375,7.6640625 C10.4085937,7.5984375 9.5015625,7.3921875 8.63203125,7.05 C8.8265625,6.4734375 9.0515625,5.94140625 9.31171875,5.4609375 C9.71953125,4.7015625 10.1976562,4.0921875 10.696875,3.70078125 C10.9125,3.53203125 11.128125,3.403125 11.3460937,3.31640625 L11.3460937,7.6640625 L11.34375,7.6640625 Z M8.57109375,3.87890625 C8.6578125,3.84375 8.7421875,3.80859375 8.82890625,3.77578125 C8.28046875,4.509375 7.809375,5.42578125 7.44140625,6.48046875 C6.94921875,6.19921875 6.4828125,5.87109375 6.04921875,5.50078125 C6.79453125,4.81640625 7.640625,4.27265625 8.57109375,3.87890625 L8.57109375,3.87890625 Z M3.87890625,8.57109375 C4.20234375,7.80703125 4.62890625,7.09921875 5.14921875,6.45703125 C5.7328125,6.9609375 6.37265625,7.4015625 7.059375,7.7671875 C6.7875,8.86640625 6.61875,10.0734375 6.57421875,11.34375 L3.2109375,11.34375 C3.28125,10.3851563 3.50625,9.4546875 3.87890625,8.57109375 Z M3.2109375,12.65625 L6.57421875,12.65625 C6.61875,13.9265625 6.7875,15.1335938 7.059375,16.2328125 C6.37265625,16.5984375 5.7328125,17.0390625 5.14921875,17.5429688 C4.62890625,16.9007813 4.20234375,16.1929687 3.87890625,15.4289062 C3.50625,14.5453125 3.28125,13.6148437 3.2109375,12.65625 Z M8.57109375,20.1210937 C7.640625,19.7273437 6.79453125,19.1835937 6.04921875,18.4992187 C6.4828125,18.1289062 6.94921875,17.803125 7.44140625,17.5195312 C7.809375,18.5742188 8.28046875,19.490625 8.82890625,20.2242187 C8.7421875,20.1914062 8.65546875,20.15625 8.57109375,20.1210937 Z M15.4289063,20.1210937 C15.3421875,20.15625 15.2578125,20.1914062 15.1710938,20.2242187 C15.7195312,19.490625 16.190625,18.5742188 16.5585938,17.5195312 C17.0507812,17.8007812 17.5171875,18.1289062 17.9507813,18.4992187 C17.2054688,19.1835937 16.359375,19.7273437 15.4289063,20.1210937 Z",fill:r}),(0,n.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{fill:"#000000",fillRule:"nonzero",opacity:"0",x:"0",y:"0",width:"24",height:"24"}),(0,n.jsxs)("g",{children:[(0,n.jsx)("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-3)"}),(0,n.jsx)("use",{fill:"url(#linearGradient-1)",fillRule:"evenodd"})]})]})})]}))},u5=m5,C5=["fill"],v5=function(e){var r=e.fill,a=w()(e,C5);return(0,n.jsxs)("svg",h()(h()({width:"24px",height:"20px",viewBox:"0 0 24 20",version:"1.1"},a),{},{children:[(0,n.jsx)("path",{d:"M21,0 C21.5523,0 22,0.447715 22,1 L22,19 C22,19.5523 21.5523,20 21,20 L1,20 C0.447715,20 0,19.5523 0,19 L0,1 C0,0.447715 0.447715,0 1,0 L21,0 Z M20,2 L2,2 L2,18 L20,18 L20,2 Z M11.3327,4.50535 L12.22005,4.60375 C12.4945,4.6342 12.69235,4.88135 12.6619,5.1558 C12.66145,5.16005 12.6609,5.16425 12.66035,5.16845 L11.3752,14.56545 C11.33845,14.83415 11.0942,15.02455 10.8247,14.99465 L9.9373,14.89625 C9.66285,14.8658 9.46505,14.61865 9.4955,14.3442 C9.49595,14.33995 9.49645,14.33575 9.49705,14.33155 L10.7822,4.93455 C10.81895,4.66585 11.06315,4.47545 11.3327,4.50535 Z M7.5444,6.9799 L8.17165,7.56195 C8.3741,7.74975 8.3859,8.0661 8.1981,8.26855 C8.1951,8.27175 8.1921,8.2749 8.18905,8.27805 L6.464,10.042 L8.18905,11.80595 C8.3821,12.00335 8.3786,12.3199 8.18115,12.513 L8.17165,12.52205 L7.5444,13.10405 C7.34685,13.28735 7.0396,13.2811 6.84965,13.08995 L4.1713,10.3944 C3.977555,10.1994 3.977555,9.88455 4.1713,9.68955 L6.84965,6.994 C7.0396,6.80285 7.34685,6.7966 7.5444,6.9799 Z M15.15035,6.994 L17.8287,9.68955 C18.02245,9.88455 18.02245,10.1994 17.8287,10.3944 L15.15035,13.08995 C14.9604,13.2811 14.65315,13.28735 14.4556,13.10405 L13.82835,12.52205 C13.6259,12.3342 13.6141,12.01785 13.8019,11.81545 C13.8049,11.8122 13.8079,11.80905 13.81095,11.80595 L15.536,10.042 L13.81095,8.27805 C13.6179,8.0806 13.6214,7.76405 13.81885,7.571 C13.82195,7.5679 13.82515,7.5649 13.82835,7.56195 L14.4556,6.9799 C14.65315,6.7966 14.9604,6.80285 15.15035,6.994 Z",fill:r}),(0,n.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("rect",{x:"0",y:"0",width:"24",height:"20"}),(0,n.jsxs)("g",{transform:"translate(1, 2)",children:[(0,n.jsx)("use",{fill:"black",fillOpacity:"1",filter:"url(#filter-3)"}),(0,n.jsx)("use",{fill:"url(#linearGradient-1)",fillRule:"evenodd"})]})]})})]}))},A5=v5,f5=["fill"],L5=function(e){var r=e.fill,a=w()(e,f5);return(0,n.jsx)("svg",{width:"32px",height:"32px",viewBox:"0 0 32 32",version:"1.1",children:(0,n.jsx)("g",h()(h()({stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a),{},{children:(0,n.jsxs)("g",{children:[(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:"M6,0 L26,0 C29.3137085,-6.08718376e-16 32,2.6862915 32,6 L32,26 C32,29.3137085 29.3137085,32 26,32 L6,32 C2.6862915,32 4.05812251e-16,29.3137085 0,26 L0,6 C-4.05812251e-16,2.6862915 2.6862915,6.08718376e-16 6,0 Z",fill:r}),(0,n.jsx)("rect",{x:"6",y:"6",width:"20",height:"20"})]}),(0,n.jsx)("g",{transform:"translate(7, 8)",fill:"#ffffff",fillRule:"nonzero",opacity:"0.95",children:(0,n.jsx)("path",{d:"M14.614,5.638 L18.226,15.354 L16.28,15.354 L15.384,12.778 L11.324,12.778 L10.4,15.354 L8.51,15.354 L12.15,5.638 L14.614,5.638 Z M6.566,0 C6.72,0.448 7,1.358 7.182,2.072 L12.124,2.072 L12.124,3.444 L10.066,3.444 C9.492,5.67 8.638,7.378 7.35,8.792 C7.83859351,9.16353465 8.37344267,9.50546567 8.96396426,9.82451932 C8.426,10.854 8.926,9.854 8.08087004,11.0286034 C7.43945439,10.6416243 6.85947688,10.2306009 6.328,9.786 C4.886,11.004 3.066,11.998 0.644,12.95 L0,11.424 C2.296,10.626 3.99,9.786 5.278,8.778 C3.976,7.364 3.108,5.67 2.478,3.444 L0.476,3.444 L0.476,2.072 L5.642,2.072 C5.474,1.414 5.264,0.644 5.11,0.21 Z M13.452,7.276 L13.284,7.276 L11.87,11.238 L14.838,11.238 L13.452,7.276 Z M8.554,3.444 L3.976,3.444 C4.466,5.25 5.18,6.664 6.3,7.84 C7.406,6.664 8.092,5.278 8.554,3.444 Z",fill:r})})]})}))})},j5=L5,y5=["iconType"],V,b5=i.ZP.div(V||(V=t()([`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`]))),P5={BranchSvg:a5,CollectSvg:s5,HelpDocumentSvg:c5,LatestActivity:g5,LatestRelease:u5,OpenPublishSvg:A5,LanguageSwitchSvg:j5},T5=function(e){var r=e.iconType,a=r===void 0?"":r,o=w()(e,y5);if(!a)return"-";var s=P5[a];return(0,n.jsx)(b5,{children:(0,n.jsx)(s,h()({},o))})},w5=T5,O5=l(94608),X,q,S5=(0,i.ZP)(L.Z)(X||(X=t()([`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 20px;
`]))),n1=(0,i.ZP)(O5.ZP)(q||(q=t()([`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 176px;
  height: 54px;
  color: var(--text-color);
  font-size: 1rem;

  @media (max-width: 900px) {
    width: 140px;
    height: 46px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 40px;
  }
`]))),Z5={width:20,height:20,fill:"var(--text-color)"},I5=A().memo(function(){var d=(0,c.Y)(),e=d.Messages,r=e.GITHUB,a=e.HELP_DOCUMENT,o=e.GITHUB_URL,s=e.HELP_URL,f=function(x){x&&window.open(x,"_blank","noopener=yes,noreferrer=yes")};return(0,n.jsxs)(S5,{children:[(0,n.jsx)(n1,{icon:(0,n.jsx)(M.Z,{}),type:"primary",onClick:function(){return f(o)},children:r}),(0,n.jsx)(n1,{icon:(0,n.jsx)(w5,h()({iconType:"HelpDocumentSvg"},Z5)),onClick:function(){return f(s)},children:a})]})}),R5=I5,E5=l(52975),z5=["children"],e1,t1,U5=(0,i.ZP)(E5.Z)(e1||(e1=t()([`
  position: relative;
  z-index: 1;
  min-width: 300px;
  min-height: 50px;
  color: #fff;
  background-color: transparent;
  overflow: hidden; // \u8D85\u51FA\u7279\u6548\u7684\u533A\u57DF\u9690\u85CF\u6389
  cursor: pointer;

  &:hover:after {
    width: 250px;
    height: 250px;
    left: var(--x);
    top: var(--y);
  }

  /* \u9F20\u6807hover\u5149\u6655\u6E10\u53D8 */
  &:after {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 6;
    transform: rotateX(-0.03deg) rotateY(-0.03deg) translate(-50%, -50%);
    transition:
      width 0.2s ease,
      height 0.2 ease;
    width: 0;
    height: 0;
    opacity: 0.7;
    content: '';
    background: radial-gradient(circle closest-side, #133b71, transparent);
  }
`]))),_5=i.ZP.div(t1||(t1=t()([`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 100%;
`]))),M5=A().memo(function(d){var e=(0,b.useRef)(null),r=d.children,a=w()(d,z5);return(0,b.useEffect)(function(){var o=e.current,s=function(p){var x,y=p==null||(x=p.target)===null||x===void 0?void 0:x.getBoundingClientRect();if(!(!y||!o)){var O=p.clientX-y.left,m=p.clientY-y.top;o.style.setProperty("--x",O+"px"),o.style.setProperty("--y",m+"px")}};return o==null||o.addEventListener("mousemove",s),function(){o==null||o.removeEventListener("mousemove",s)}},[]),(0,n.jsx)("div",{ref:e,style:{display:"inline-block",flex:1},children:(0,n.jsx)(U5,h()(h()({},a),{},{children:(0,n.jsx)(_5,{children:r})}))})}),B5=M5,R=l(89764),i1,r1,a1,l1,k5=R.Z.Text,H5=(0,i.ZP)(L.Z)(i1||(i1=t()([`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  gap: 24px;
  margin: 0 auto;
  padding: 60px 0;

  @media (max-width: 900px), (max-width: 480px) {
    padding: 20px 20px;
    gap: 16px;
    flex-direction: column;
  }
`]))),D5=(0,i.ZP)(B5)(r1||(r1=t()([`
  height: 100%;
  border: none;
  background-image: linear-gradient(
    106deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  border-radius: 16px;

  .openagl-card-body {
    height: 100%;

    @media (max-width: 900px) {
      padding: 16px;
    }

    @media (max-width: 480px) {
      padding: 12px;
    }
  }
`]))),G5=(0,i.ZP)(L.Z)(a1||(a1=t()([`
  overflow: hidden;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--text-color);
  opacity: 0.95;
  font-weight: 500;
`]))),N5=(0,i.ZP)(k5)(l1||(l1=t()([`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: var(--text-color);
  opacity: 0.45;
  margin-top: 9px;
  text-align: center;
`]))),F5=A().memo(function(){var d=(0,c.Y)(),e=d.Messages.ANNOUNCEMENT_INFO_DATA,r=function(o){o&&window.open(o,"_blank","noopener=yes,noreferrer=yes")};return e.length===0?(0,n.jsx)("div",{style:{padding:20}}):(0,n.jsx)(H5,{justify:"space-between",children:e.map(function(a){var o=a.imgUrl,s=a.title,f=a.description,p=a.linkUrl;return(0,n.jsxs)(D5,{onClick:function(){return r(p)},children:[(0,n.jsxs)(G5,{children:[(0,n.jsx)("img",{src:o}),(0,n.jsx)("span",{children:s})]}),(0,n.jsx)(N5,{children:f})]},s)})})}),W5=F5,o1,s1,d1,c1,p1,h1,g1,x1,m1,u1=R.Z.Title,Q5=R.Z.Text,Y5=i.ZP.div(o1||(o1=t()([`
  display: flex;
  align-items: center;
  justify-content: center;
`]))),K5=(0,i.ZP)(Y5)(s1||(s1=t()([`
  flex-direction: column;
`]))),$5=i.ZP.div(d1||(d1=t()([`
  max-width: 1200px;
  width: 100%;
  padding: 0 4rem;

  @media (max-width: 900px), (max-width: 480px) {
    padding: 0 2rem;
  }
`]))),J5=(0,i.ZP)(u1)(c1||(c1=t()([`
  text-align: center;
`]))),V5=i.ZP.div(p1||(p1=t()([`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(`,`px, 1fr)
  );
  justify-items: center;
  width: 100%;
`])),function(d){var e;return(e=d.minCardWidth)!==null&&e!==void 0?e:100}),X5=i.ZP.div(h1||(h1=t()([`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`]))),q5=i.ZP.div(g1||(g1=t()([`
  box-sizing: border-box;
  width: 100%;
  height: 225px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
    134deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.04) 100%
  );
  border-radius: 16px;
  padding: 24px;

  @media (max-width: 900px), (max-width: 480px) {
    border-radius: 8px;
    height: 180px;
  }
`]))),nn=(0,i.ZP)(u1)(x1||(x1=t()([`
  margin-top: 1rem;
  text-align: center;
`]))),en=(0,i.ZP)(Q5)(m1||(m1=t()([`
  opacity: 0.45;
  color: var(--text-color);
  text-align: center;
  margin-top: 0.5rem;
`]))),tn=A().memo(function(){var d=(0,c.Y)(),e=d.Messages,r=e.TECHNICAL_FEATURES_TITLE,a=e.TECHNICAL_FEATURES_DATA,o=e.TECHNICAL_FEATURES_STYLE;return(0,n.jsx)(K5,{children:(0,n.jsxs)($5,{children:[(0,n.jsx)(J5,{level:3,children:r}),(0,n.jsx)(V5,{minCardWidth:o==null?void 0:o.minCardWidth,children:a.map(function(s){return(0,n.jsxs)(X5,{children:[(0,n.jsx)(q5,{style:s.imgStyle,children:(0,n.jsx)("img",{style:{width:"100%",height:"100%"},src:s.imgUrl})}),(0,n.jsx)(nn,{level:4,children:s.title}),(0,n.jsx)(en,{children:s.description})]},s.title)})})]})})}),rn=tn,an=l(89446),C1,v1,A1,f1,L1,j1,y1,b1,P1,T1,w1,O1,S1,Z1=R.Z.Text,I1=R.Z.Title,Bn=R.Z.Paragraph,ln=i.ZP.div(C1||(C1=t()([`
  display: flex;
  align-items: center;
  justify-content: center;
`]))),on=i.ZP.div(v1||(v1=t()([`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`]))),sn=i.ZP.div(A1||(A1=t()([`
  display: inline-block;
  margin: 0 0.3rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  border: 0.15rem solid var(--color-circle);
  flex-shrink: 0;
`]))),R1=(0,i.ZP)(I1)(f1||(f1=t()([`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 4rem;

  @media (max-width: 900px), (max-width: 480px) {
    margin-top: 2rem;
  }
`]))),dn=i.ZP.div(L1||(L1=t()([`
  position: relative;

  .openagl-tabs {
    background-image: linear-gradient(
      113deg,
      rgba(255, 255, 255, 0.06) 0%,
      rgba(255, 255, 255, 0.04) 100%
    );
    border-radius: 16px;
    margin: 0 auto;

    @media (max-width: 900px) {
      width: calc(100% - 40px);
    }

    @media (max-width: 480px) {
      width: calc(100% - 20px);
    }
  }

  &:after {
    position: absolute;
    top: -20px;
    right: -15px;
    z-index: 999;
    width: 86px;
    height: 63px;
    content: '';
    background: url('https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*vAHuSbAD7jQAAAAAAAAAAAAADtmcAQ/original')
      no-repeat;
    background-size: 100%;

    @media (max-width: 900px) {
      right: 5px;
    }

    @media (max-width: 480px) {
      right: -5px;
    }
  }

  @media (max-width: 900px), (max-width: 480px) {
    margin: 12px 0;
  }
`]))),cn=i.ZP.div(j1||(j1=t()([`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  padding: 24px 12px;
  gap: 40px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 10px;
    height: auto;
  }
`]))),pn=i.ZP.div(y1||(y1=t()([`
  font-size: 1rem;
  opacity: 0.95;
`]))),hn=(0,i.ZP)(L.Z)(b1||(b1=t()([`
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  padding: 12px;
  align-items: center;
  min-height: 346px;
  @media (max-width: 900px), (max-width: 480px) {
    min-height: auto;
  }
`]))),gn=(0,i.ZP)(ln)(P1||(P1=t()([`
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  color: var(--text-color);
  text-align: left;

  & > h2 {
    font-weight: 500;
    font-size: 1rem;
    opacity: 0.95;
  }

  & > ul {
    overflow: auto;
  }

  & > ul > li {
    opacity: 0.8;
    font-size: 14px;

    @media (max-width: 900px), (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`]))),xn=i.ZP.div(T1||(T1=t()([`
  color: #fff;
  padding: 0 60px;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 20px;
  }
`]))),mn=i.ZP.div(w1||(w1=t()([`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0.95;
  font-size: 1rem;
  color: var(--text-color);
`]))),un=i.ZP.div(O1||(O1=t()([`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  padding: 2px;
  background-color: var(--text-color);
`]))),Cn=i.ZP.div(S1||(S1=t()([`
  display: flex;
  flex-direction: column;
  gap: 10px;
`]))),vn=A().memo(function(){var d=(0,c.Y)(),e=d.Messages,r=e.BUSINESS_APPLICATION_TITLE,a=e.BUSINESS_APPLICATION_DATA,o=e.COOPERATOR_TITLE,s=e.COOPERATOR_DATA,f=(0,b.useState)("tab0"),p=g()(f,2),x=p[0],y=p[1],O=a.map(function(m,k){var u;return{key:"tab".concat(k),label:(0,n.jsx)(pn,{children:m.title}),children:(0,n.jsxs)(cn,{children:[(0,n.jsx)(hn,{children:(0,n.jsx)("img",{style:{width:"100%"},src:m.imgUrl})}),(0,n.jsx)(Cn,{children:m==null||(u=m.children)===null||u===void 0?void 0:u.map(function(U){var F;return(0,n.jsxs)(gn,{children:[(0,n.jsxs)(I1,{level:5,children:[(0,n.jsx)(sn,{}),U.title]}),U==null||(F=U.children)===null||F===void 0?void 0:F.map(function(Q1){return(0,n.jsxs)(Z1,{children:["\u2022 ",Q1]},Q1)})]},U.title)})})]})}});return(0,n.jsx)(on,{children:(0,n.jsxs)("div",{style:{maxWidth:1200,margin:"0 auto"},children:[(0,n.jsx)(R1,{level:3,children:r}),(0,n.jsx)(dn,{children:(0,n.jsx)(an.Z,{centered:!0,activeKey:x,items:O,onChange:function(k){return y(k)}})}),(0,n.jsx)(R1,{level:3,children:o}),(0,n.jsx)(xn,{children:s.map(function(m){return(0,n.jsxs)(mn,{children:[!m.imgHidden&&m.imgUrl&&(0,n.jsx)(un,{children:(0,n.jsx)("img",{style:{width:"100%",height:"100%"},src:m.imgUrl})}),(0,n.jsx)(Z1,{children:m.title})]})})})]})})}),An=vn,E1,z1,U1,_1,N=i.ZP.div(E1||(E1=t()([`
  display: flex;
  align-items: center;
  justify-content: center;
`]))),fn=(0,i.ZP)(N)(z1||(z1=t()([`
  flex-direction: column;
  row-gap: 12px;
  width: 180px;
  height: 180px;
  background-image: linear-gradient(142deg, #20262e 2%, #0f141c 99%);
  box-shadow:
    0 2px 2px 0 #3e495f,
    inset 0 2px 3px 0 rgba(0, 0, 0, 0.4);
  border-radius: 8px;

  @media (max-width: 900px), (max-width: 480px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 600px) {
    align-self: center;
  }
`]))),Ln=(0,i.ZP)(N)(U1||(U1=t()([`
  width: 120px;
  height: 120px;
  font-size: 16px;
  border-radius: 8px;
  padding: 10px;
  background-color: var(--text-color);

  @media (max-width: 900px), (max-width: 480px) {
    width: 80px;
    height: 80px;
    row-gap: 2px;
    padding: 8px;
  }
`]))),jn=(0,i.ZP)(N)(_1||(_1=t()([`
  color: var(--text-color);
  font-weight: 400;
  font-size: 12px;
  opacity: 0.45;
  text-align: center;
`]))),yn=A().memo(function(d){var e=d.imgUrl,r=d.title;return(0,n.jsxs)(fn,{children:[(0,n.jsx)(Ln,{children:(0,n.jsx)("img",{style:{width:"100%",height:"100%"},src:e,alt:r})}),(0,n.jsx)(jn,{children:r})]})}),bn=yn,M1,B1,k1,H1,Pn=i.ZP.footer(M1||(M1=t()([`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-position: center;

  /* \u6697\u9ED1\u4E3B\u9898\u80CC\u666F */
  padding: 0 60px;

  /* \u767D\u8272\u4E3B\u9898\u80CC\u666F */
  /* background: '#01132B'; */

  @media (max-width: 900px), (max-width: 480px) {
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`]))),Tn=i.ZP.div(B1||(B1=t()([`
  padding: 40px 0;
  max-width: 1200px;
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 900px), (max-width: 480px) {
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
    align-items: start;
  }
`]))),wn=i.ZP.div(k1||(k1=t()([`
  flex: 1;
  display: flex;
  gap: 10px;
  justify-content: space-evenly;

  @media (max-width: 480px) {
    gap: 20px;
    flex-direction: column;
    justify-content: start;
  }
`]))),On=i.ZP.div(H1||(H1=t()([`
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  color: var(--text-color);

  & > :first-child {
    font-size: 20px;
    opacity: 0.95;

    @media (max-width: 900px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  & > :last-child {
    color: rgba(255, 255, 255, 0.65);

    @media (max-width: 900px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`]))),Sn=A().memo(function(){var d=(0,c.Y)(),e=d.Messages,r=e.ABOUT_US_CONFIG,a=e.OR_CODE_CONFIG_TITLE,o=e.OR_CODE_CONFIG_URL;return(0,n.jsx)(Pn,{children:(0,n.jsxs)(Tn,{children:[(0,n.jsx)(wn,{children:r.map(function(s){return!s.hidden&&(0,n.jsxs)(On,{children:[(0,n.jsx)("span",{children:s.title}),(0,n.jsx)("a",{onClick:function(){return window.open(s==null?void 0:s.linkUrl,"_blank","noopener=yes,noreferrer=yes")},children:(0,n.jsxs)(L.Z,{gap:4,align:"center",children:[(0,n.jsx)("img",{src:s.imgUrl}),(0,n.jsx)("span",{children:s==null?void 0:s.description})]})})]},s.title)})}),(0,n.jsx)(bn,{title:a,imgUrl:o})]})})}),Zn=Sn,D1,G1,N1,F1,In=i.ZP.div(D1||(D1=t()([`
  box-sizing: border-box;
  width: 100%;
`]))),W1=i.ZP.div(G1||(G1=t()([`
  padding: 0 60px;

  @media (max-width: 900px) {
    padding: 0 40px;
  }

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`]))),Rn=(0,i.ZP)(W1)(N1||(N1=t()([`
  background: url('https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*ZWMARpRH9yIAAAAAAAAAAAAADtmcAQ/original')
    no-repeat;
  background-size: 100% 100%;

  @media (max-width: 900px) {
    background-size: cover;
    background-position: bottom;
  }
`]))),En=(0,i.ZP)(W1)(F1||(F1=t()([`
  background: url('https://mdn.alipayobjects.com/huamei_xgb3qj/afts/img/A*xVhwR6ie-YIAAAAAAAAAAAAADtmcAQ/original')
    no-repeat;
  background-size: 100% 100%;

  @media (max-width: 900px) {
    background-size: cover;
    background-position: bottom;
  }
`]))),zn=A().memo(function(){return(0,n.jsxs)(In,{children:[(0,n.jsxs)(Rn,{children:[(0,n.jsx)($1,{}),(0,n.jsx)(n5,{}),(0,n.jsx)(R5,{}),(0,n.jsx)(W5,{}),(0,n.jsx)(rn,{})]}),(0,n.jsxs)(En,{children:[(0,n.jsx)(An,{}),(0,n.jsx)(Zn,{})]})]})}),Un=zn,_n=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(Un,{})})},Mn=_n}}]);
