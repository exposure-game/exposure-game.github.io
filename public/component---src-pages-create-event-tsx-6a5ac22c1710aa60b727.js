(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0XWb":function(e,t,n){"use strict";n.r(t);n("f3/d");var a,r=n("q1tI"),o=n.n(r),u=n("Wbzz"),l=n("Ng2+"),i=n("1Yd/"),c=[{name:"questioner 1",questions:[{text:"quetion 1"},{text:"quetion 2"},{text:"quetion 3"},{text:"quetion 4"},{text:"quetion 5"}]},{name:"questioner 2",questions:[{text:"quetion 1"},{text:"quetion 2"},{text:"quetion 3"},{text:"quetion 4"},{text:"quetion 5"}]}];!function(e){e[e.SelectQuestioner=0]="SelectQuestioner",e[e.CreateQuestioner=1]="CreateQuestioner",e[e.CreateRoom=2]="CreateRoom"}(a||(a={}));var m=function(e){var t=e.onSubmit,n=o.a.useState(void 0),a=n[0],r=n[1];return o.a.createElement("form",{onSubmit:function(){return a&&t(a)}},o.a.createElement("h2",null,"Select a questioner"),c.map((function(e){var t=e.name,n=e.questions;return o.a.createElement("div",{key:t},o.a.createElement("label",null,o.a.createElement("input",{onChange:function(t){return r(e)},type:"radio",name:"questions"}),t),o.a.createElement("ol",null,n.map((function(e){var t=e.text;return o.a.createElement("li",{key:t},o.a.createElement("p",null,t))}))))})),o.a.createElement("input",{type:"submit",disabled:!a,value:"Create"}))},s=function(e){var t=e.questioner,n=t.name,a=t.questions;return o.a.createElement("div",null,o.a.createElement("h2",null,"Questioner"),o.a.createElement("div",{key:n},o.a.createElement("h4",null,n),o.a.createElement("ol",null,a.map((function(e){var t=e.text;return o.a.createElement("li",{key:t},o.a.createElement("p",null,t))})))),o.a.createElement("button",null,o.a.createElement(u.Link,{to:"/room-dashboard"}," Open a room from this questioner ")))};t.default=function(){var e=o.a.useState(void 0),t=e[0],n=e[1],r=o.a.useState(a.SelectQuestioner),c=r[0],E=r[1],q=o.a.useCallback((function(e){n(e),E(a.CreateRoom)}),[]);return o.a.createElement(l.a,null,o.a.createElement(i.a,{title:"Page two"}),c===a.SelectQuestioner&&o.a.createElement(m,{onSubmit:q}),c===a.CreateRoom&&t&&o.a.createElement(s,{questioner:t}),o.a.createElement(u.Link,{to:"/"},"Go back to the homepage"))}}}]);
//# sourceMappingURL=component---src-pages-create-event-tsx-6a5ac22c1710aa60b727.js.map