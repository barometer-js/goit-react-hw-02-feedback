(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(4),i=n.n(o),r=(n(15),n(5)),s=n(6),d=n(10),l=n(9),u=(n(16),n(3)),b=n.n(u),j=n(0);var h=function(e){var t=e.children,n=e.title;return Object(j.jsxs)("section",{className:b.a.section,children:[n&&Object(j.jsx)("h2",{className:b.a.title,children:n}),t]})},f=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,o=e.positivePercentage;return Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Good: ".concat(t)}),Object(j.jsx)("li",{children:"Neutral: ".concat(n)}),Object(j.jsx)("li",{children:"Bad: ".concat(c)}),Object(j.jsx)("li",{children:"Total: ".concat(a)}),Object(j.jsx)("li",{children:"Positive feedback: ".concat(o,"%")})]})},g=n(7),k=n.n(g),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)("button",{className:k.a.btn,type:"button",value:e,onClick:function(){return n(e)},children:e},e)}))})},v=n(8),p=n.n(v),x=function(e){var t=e.message;return Object(j.jsx)("p",{className:p.a.message,children:t})},F=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.round(t/e.countTotalFeedback()*100)||0},e.addFeedback=function(t){switch(t){case"good":e.setState((function(e){return{good:e.good+1}}));break;case"neutral":e.setState((function(e){return{neutral:e.neutral+1}}));break;case"bad":e.setState((function(e){return{bad:e.bad+1}}));break;default:console.log("Invalid subscription type")}},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,o=Object.keys(this.state);return Object(j.jsxs)(c.Fragment,{children:[Object(j.jsx)(h,{title:"Please leave feedback",children:Object(j.jsx)(O,{options:o,onLeaveFeedback:this.addFeedback})}),Object(j.jsx)(h,{title:"Statistics",children:this.countTotalFeedback()?Object(j.jsx)(f,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(x,{message:"There is no feedback"})})]})}}]),n}(c.Component),m=F,_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),_()},3:function(e,t,n){e.exports={section:"Section_section__2jwiJ",title:"Section_title__kSpZX"}},7:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__31H24"}},8:function(e,t,n){e.exports={message:"Notification_message__3nd2P"}}},[[18,1,2]]]);
//# sourceMappingURL=main.ca1bdb6c.chunk.js.map