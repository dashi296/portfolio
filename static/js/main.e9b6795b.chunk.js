(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{303:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),s=a(12),l=a.n(s),i=a(25),o=a(81),c=(a(94),a(95),a(330)),m=a(341),u=Object(c.a)(function(e){return Object(m.a)({root:{display:"flex",width:"100vw",height:"2.5vh",backgroundColor:"#272727",alignItems:"center"},buttons:{display:"flex"},title:{width:"100%",color:"#818181",textAlign:"center"},roundButton:{width:10,height:10,borderRadius:"50%",margin:3}})}),d=function(e){var n=e.color,a=u();return r.a.createElement("div",{className:a.roundButton,style:{background:n}})},p=function(e){var n=e.title,a=u();return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.buttons},r.a.createElement(d,{color:"#F04040"}),r.a.createElement(d,{color:"#FDB024"}),r.a.createElement(d,{color:"#29C833"})),r.a.createElement("div",{className:a.title},n||"dashi's portfolio"))},g=a(16),f=a(13),b=a(33),h=a(47),E=a(332),v=a(333),N=a(334),k=a(342),y=a(343),T=a(59),w=a.n(T),S=a(60),x=a.n(S),C=["profile","skills","products","contact"],j=Object(c.a)(function(e){return Object(m.a)({root:Object(h.a)({height:"95vh",backgroundColor:"#1C1C1C",overflowY:"scroll"},e.breakpoints.down("xs"),{height:"25vh"}),wsMenuItem:{fontSize:"1.0rem",paddingTop:0,paddingBottom:0,backgroundColor:"#2A2A2A","&:hover":{backgroundColor:"#2A2A2A"}},menuItem:{paddingTop:0,paddingBottom:0,paddingLeft:e.spacing(4),"&:hover":{backgroundColor:"#202222"},"&$selected":{backgroundColor:"#15385C","&:hover":{backgroundColor:"#15385C"}}},menuItemNested:{paddingTop:0,paddingBottom:0,paddingLeft:e.spacing(6),"&:hover":{backgroundColor:"#202222"},"&$selected":{backgroundColor:"#15385C","&:hover":{backgroundColor:"#15385C"}}},menuItemJPText:{fontWeight:"bold",color:"#BFC0BF"},menuItemText:{fontSize:"1.1rem",fontWeight:"bold",fontFamily:"Monaco, Courier New, monospace",color:"#BFC0BF"},folderIcon:{color:"#BFC0BF"},icons:{minWidth:5,paddingRight:5},nested:{paddingLeft:e.spacing(6)},selected:{},hover:{}})}),O=function(e){var n=j();return r.a.createElement(k.a,Object.assign({},e,{primary:r.a.createElement("div",{className:n.menuItemText},e.children)}))},M=function(e){var n=e.menuName,a=e.setMenu,s=j(),l=Object(t.useState)(!0),i=Object(b.a)(l,2),o=i[0],c=i[1],m=Object(t.useState)(!0),u=Object(b.a)(m,2),d=u[0],p=u[1],g=Object(t.useState)(!1),f=Object(b.a)(g,2),h=f[0],T=f[1],S=function(){c(!o),T(!1)};return r.a.createElement("div",{className:s.root},r.a.createElement(E.a,{"aria-label":"workspace-nav",style:{padding:0}},r.a.createElement(v.a,{button:!0,onClick:function(){return S()}},r.a.createElement(k.a,{primary:r.a.createElement("div",{className:s.menuItemJPText},"\u30e1\u30cb\u30e5\u30fc")})),r.a.createElement(v.a,{button:!0,className:s.wsMenuItem,onClick:function(){return S()}},r.a.createElement(N.a,{className:s.icons},o?r.a.createElement(w.a,{fontSize:"small",className:s.folderIcon}):r.a.createElement(x.a,{fontSize:"small",className:s.folderIcon})),r.a.createElement(k.a,{primary:r.a.createElement("div",{className:s.menuItemJPText},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9")}))),r.a.createElement(y.a,{in:o,timeout:0,unmountOnExit:!0},r.a.createElement(E.a,{"aria-label":"main-nav",style:{padding:0}},r.a.createElement(v.a,{button:!0,selected:h,classes:{root:s.menuItem,selected:s.selected},onClick:function(){return p(!d),void T(!0)}},r.a.createElement(N.a,{className:s.icons},d?r.a.createElement(w.a,{fontSize:"small",className:s.folderIcon}):r.a.createElement(x.a,{fontSize:"small",className:s.folderIcon})),r.a.createElement(k.a,{primary:r.a.createElement("div",{className:s.menuItemText},"portfolio")}))),r.a.createElement(y.a,{in:d,timeout:0,unmountOnExit:!0},r.a.createElement(E.a,{"aria-label":"rb-list",style:{padding:0}},C.map(function(e){var t=e==n;return r.a.createElement(v.a,{key:e,button:!0,onClick:function(){return a(e),void T(!1)},selected:!h&&t,classes:{root:s.menuItemNested,selected:s.selected}},r.a.createElement("span",{className:"ruby-icon"}),r.a.createElement(O,{children:"".concat(e,".rb")}))})))))},I=function(e){return{type:"SET_MENU",payload:{params:e}}},R=Object(f.d)(Object(i.b)(function(e){return{menuName:e.menu.menuName}},function(e){return Object(g.a)({setMenu:function(e){return I({menuName:e})}},e)})(function(e){var n=e.menuName,a=e.setMenu;return Object(t.useEffect)(function(){!n&&a("profile")}),r.a.createElement(M,{menuName:n,setMenu:a})})),_=a(340),F=a(335),B=function(e){return r.a.createElement(_.a,Object.assign({},e,{language:"ruby",style:F.a,customStyle:{display:"flex",lineHeight:1.5,backgroundColor:"#171717"},wrapLines:!0,lineNumberContainerStyle:{textAlign:"right",paddingRight:15,width:40},lineNumberStyle:{color:"#727272"}}))},A=a(78),P=a.n(A),L=Object(c.a)(function(e){return Object(m.a)({root:{color:"white",backgroundColor:"#171717",height:"25vh",padding:"1.0em",overflowY:"scroll"},breadcrumbs:{display:"flex",fontSize:"1.1rem",fontWeight:"bold",fontFamily:"Monaco, Courier New, monospace",color:"#989998",beckgroundColor:"#171717",height:15},arrow:{margin:"0 5px"}})}),H=function(e){var n=e.menuName,a=L();return r.a.createElement("div",{className:a.breadcrumbs},"portfolio",r.a.createElement(P.a,{className:a.arrow,fontSize:"small"})," ",r.a.createElement("span",{className:"ruby-icon"}),n,".rb")},W=function(e){var n=e.menuName,a=e.code,t=L();return r.a.createElement("div",{className:t.root},r.a.createElement(H,{menuName:n}),r.a.createElement(B,{showLineNumbers:!0},a))},U=Object(f.d)(Object(i.b)(function(e){var n=e.menu;return{menuName:n.menuName,code:n.editorCode}},function(e){return Object(g.a)({setMenu:function(e){return I({menuName:e})}},e)})(function(e){var n=e.code,a=e.menuName;e.setMenu;return r.a.createElement(W,{menuName:a,code:n})})),D=a(338),z=a(336),G=a(51),J=a.n(G),Q=(a(295),a(63)),X=Object(c.a)(function(e){return Object(m.a)({root:{color:"#ffffff",backgroundColor:"#171717",height:"70vh",padding:"0 1em",borderTop:"solid 1px #323232"},cursor:{display:"inline",paddingRight:0},tabs:{height:"5vh",minHeight:"5vh"},tab:{minWidth:0,width:"auto",color:"#888888",fontFamily:"sans-serif, arial",fontWeight:"bold",fontSize:"1.1rem",padding:7},terminal:{padding:"0.5em",overflowY:"scroll",height:"65vh",maxHeight:"65vh"},typist:{display:"inline-block"},result:{fontSize:"1.2rem",fontFamily:"monaco, Consolas, Lucida Console, monospace"}})}),q=function(e){var n=e.isSetting,a=e.settingMenuName,t=e.updateTerminal,s=X();return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{className:s.typist,avgTypingDelay:20,cursor:{hideWhenDone:!0},onTypingDone:function(){return t(a)}},r.a.createElement(J.a.Delay,{ms:200}),"ruby ".concat(a,".rb"))):r.a.createElement(J.a,{className:s.typist},""))},$=function(e){var n=e.isSetting,a=e.settingMenuName,s=e.prevTerminalText,l=(e.menuResult,e.setMenu,e.updateTerminal),i=X(),o=Object(t.useState)(0),c=Object(b.a)(o,2),m=c[0],u=c[1];return Object(t.useEffect)(function(){Q.scroller.scrollTo("terminalBottom",{delay:0,containerId:"terminal"})},[s]),r.a.createElement("div",{className:i.root},r.a.createElement(D.a,{className:i.tabs,value:m,onChange:function(e,n){u(n)},TabIndicatorProps:{children:r.a.createElement("div",null)}},r.a.createElement(z.a,{className:i.tab,label:"\u554f\u984c"}),r.a.createElement(z.a,{className:i.tab,label:"\u51fa\u529b"}),r.a.createElement(z.a,{className:i.tab,label:"\u30c7\u30d0\u30c3\u30b0\u30b3\u30f3\u30bd\u30fc\u30eb"}),r.a.createElement(z.a,{className:i.tab,label:"\u30bf\u30fc\u30df\u30ca\u30eb"})),r.a.createElement("div",{id:"terminal",className:i.terminal},r.a.createElement("pre",{className:i.result,dangerouslySetInnerHTML:{__html:s}}),"dashi-MBP:portfolio dashi$ ",r.a.createElement(q,{isSetting:n,settingMenuName:a,updateTerminal:l}),r.a.createElement(Q.Element,{name:"terminalBottom"})))},Y=Object(f.d)(Object(i.b)(function(e){var n=e.menu;return{isSetting:n.isSetting,settingMenuName:n.settingMenuName,prevTerminalText:n.prevTerminalText,menuResult:n.menuResult}},function(e){return Object(g.a)({setMenu:function(e){return I({menuName:e})},updateTerminal:function(e){return{type:"UPDATE_TERMINAL",payload:{params:{menuName:e}}}}},e)})(function(e){var n=e.isSetting,a=e.settingMenuName,t=e.prevTerminalText,s=e.menuResult,l=e.setMenu,i=e.updateTerminal;return r.a.createElement($,{isSetting:n,settingMenuName:a,prevTerminalText:t,menuResult:s,setMenu:l,updateTerminal:i})})),V=a(80),K=a(30),Z=Object(c.a)(function(e){return Object(m.a)({root:{display:"flex",width:"100vw",height:"2.5vh",backgroundColor:"#2269BD",fontFamily:"Roman, arial ,Courier New, monospace",fontWeight:"bold",color:"#FFFFFF",justifyContent:"flex-start",paddingLeft:10,paddingRight:10},leftItems:{display:"flex",alignSelf:"center"},leftItem:{marginRight:10},rightItems:{display:"flex",alignSelf:"center",marginLeft:"auto"},rightItem:{marginLeft:10}})}),ee=function(e){Object(V.a)(e);var n=Z();return r.a.createElement("div",{className:n.root},r.a.createElement("div",{className:n.leftItems},r.a.createElement("div",{className:n.leftItem},r.a.createElement(K.b,null),"master*"),r.a.createElement("div",{className:n.leftItem},r.a.createElement(K.e,null)),r.a.createElement("div",{className:n.leftItem},r.a.createElement(K.f,null)," 0"),r.a.createElement("div",{className:n.leftItem},r.a.createElement(K.c,null)," 0")),r.a.createElement("div",{className:n.rightItems},r.a.createElement("div",{className:n.rightItem},"UTF-8"),r.a.createElement("div",{className:n.rightItem},"LF"),r.a.createElement("div",{className:n.rightItem},"Ruby"),r.a.createElement("div",{className:n.rightItem},r.a.createElement(K.d,null)),r.a.createElement("div",{className:n.rightItem},r.a.createElement(K.a,null))))},ne=a(337),ae=a(339),te=function(){return r.a.createElement(ne.a,{container:!0},r.a.createElement(ne.a,{item:!0,xs:12},r.a.createElement(p,null)),r.a.createElement(ne.a,{container:!0},r.a.createElement(ne.a,{item:!0,xs:12,sm:2},r.a.createElement(R,null)),r.a.createElement(ne.a,{item:!0,xs:12,sm:10},r.a.createElement(ae.a,{xsDown:!0},r.a.createElement(U,null)),r.a.createElement(Y,null)),r.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(64),se={profile:'require "catpix"\n\n  class Person\n\n    attr_accessor :name,\n                  :age,\n                  :hobbies,\n                  :favorites,\n                  :skills,\n                  :message\n\n    def initialize(name, age)\n      @name = name\n      @age = age\n      @hobbies = []\n      @favorites = []\n      @skills = []\n      @message = ""\n    end\n\n    def introduction\n      divider = "=" * 50\n      text = <<-TEXT\n      #{divider}\n      #{profile_image}\n      NAME      : #{name}\n      AGE       : #{age}\n      FAVORITES : #{favorites}\n      HOBBIES   : #{hobbies}\n      MESSAGE   : #{message}\n\n      #{divider}\n\n      TEXT\n\n      puts text\n    end\n\n    def grow(years = 1)\n      self.age += years\n    end\n\n    private\n      def profile_image\n        Catpix::print_image \'/Users/shun/pictures/profile.png\',\n          limit_x: 0.5,\n          limit_y: 0,\n          resolution: "high"\n      end\n  end\n\n  # HISTORY\n  # -1989\n  me = Person.new("dashi", 0)\n\n  # -1999\n  me.grow(10)\n  me.favorites.push("\u5bb6\u65cf")\n  me.favorites.push("\u30e9\u30fc\u30e1\u30f3")\n  me.favorites.push("\u713c\u8089")\n\n  # -2008\n  me.grow(9)\n  me.hobbies.push("\u30ae\u30bf\u30fc")\n  me.hobbies.push("\u30d4\u30a2\u30ce")\n\n  # -2017\n  me.grow(9)\n  me.hobbies.push("\u30b2\u30fc\u30e0\u958b\u767a")\n  me.favorites.push("\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0")\n\n  # -2018\n  me.grow\n  me.hobbies.push("Web\u30a2\u30d7\u30ea\u958b\u767a")\n\n  # -2019\n  me.grow\n\n  # \u81ea\u5df1\u7d39\u4ecb\n  me.introduction\n\n',skills:'\n  LANGUAGES = %i[HTML CSS Ruby Javascript Typescript jQuery React C# PHP]\n  FRAMEWORKS = %i[Rails Unity CakePHP]\n\n  skills = {\n    HTML: 7,\n    CSS: 7,\n    Ruby: 7,\n    Javascript: 6,\n    Typescript: 6,\n    React: 5,\n    jQuery: 4,\n    :"C#" => 4,\n    PHP: 4,\n    Rails: 6,\n    Unity: 4,\n    CakePHP: 2,\n  }\n\n  def skills_info(skills)\n    puts "Language   Level(1~10)"\n    LANGUAGES.each do |skill|\n      puts "#{skill}  : #{"+" * skills[skill]}"\n    end\n\n    puts "Framework   Level(1~10)"\n    FRAMEWORKS.each do |framework|\n      puts "#{framework}  : #{"+" * skills[framework]}"\n    end\n  end\n\n  skills_info(skills)\n\n  ',products:'require "catpix"\n\n  class Product\n    attr_accessor :title, :image, :backend, :frontend, :description\n\n    def initialize(title:, image:, backend:, frontend:, description:)\n      @title = title\n      @image = image\n      @backend = backend\n      @frontend = frontend\n      @description = description\n    end\n\n    def display\n      text = <<-TEXT\n      #{print_image}\n      title: #{@title}\n      url: #{@url}\n      backend: #{@backend}\n      frontend: #{@frontend}\n      description: #{@description}\n      TEXT\n\n      puts text\n    end\n\n    private\n      def print_image\n        Catpix::print_image @image,\n          limit_x: 1.0,\n          limit_y: 0,\n          center_x: true,\n          center_y: true,\n          bg: "white",\n          bg_fill: true,\n          resolution: "high"\n      end\n\n  end\n\n  twesume = Product.new(title: "TWESUME ~ \u307f\u3093\u306a\u306eTwitter\u5c65\u6b74\u66f8 ~",\n    image: "/Users/shun/downloads/birds.png",\n    backend: ["Rails", "Heroku"],\n    frontend: ["jQuery", "Bootstrap", "html2canvas"],\n    description: "\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u3067\u30a2\u30d4\u30fc\u30eb\u3059\u308bTwitter\u8ee2\u8077\u652f\u63f4\u30b5\u30fc\u30d3\u30b9")\n\n  draftbox = Product.new(title: "DraftBox",\n    image: "/Users/shun/downloads/birds.png",\n    backend: ["Rails", "Heroku"],\n    frontend: ["jQuery", "Marked.js"],\n    description: "\u30aa\u30f3\u30e9\u30a4\u30f3Markdown\u30e1\u30e2\u30b5\u30fc\u30d3\u30b9")\n\n  products = [twesume, draftbox]\n\n  products.each do |product|\n    product.display\n  end\n  ',blog:"blog code",contact:'divider = "=" * 50\nputs divider\nputs "\u304a\u554f\u3044\u5408\u308f\u305b\u306f Twitter\u30a2\u30ab\u30a6\u30f3\u30c8(@dashi296) \u306eDM\u3078\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002"\nputs divider\n'},le={profile:'\n  ==================================================\n\n  <img class="profile-img" src="./images/profile.png" />\n  NAME    : dashi\n  AGE     : 30\n  HOBBIES : Web\u30a2\u30d7\u30ea\u958b\u767a\u3001\u30b2\u30fc\u30e0\u958b\u767a\u3001\u30ae\u30bf\u30fc\u3001\u30d4\u30a2\u30ce\n  FAVORITE: \u5bb6\u65cf\u3001\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u3001\u30e9\u30fc\u30e1\u30f3\u3001\u713c\u8089\u3001\u5bff\u53f8\n  MESSAGE :\n  2017\u5e742\u6708\u9803\u304b\u3089\u8da3\u5473\u3067Unity\u3067\u30aa\u30f3\u30e9\u30a4\u30f3\u30b2\u30fc\u30e0\u958b\u767a\u3092\u59cb\u3081\u3001\n  \u958b\u767a\u304c\u597d\u304d\u306b\u306a\u308b\u3002\n  2018\u5e741\u6708\u9803\u306bWeb\u30a2\u30d7\u30ea\u958b\u767a\u306b\u8208\u5473\u3092\u6301\u3061\u3001Rails\u306e\u52c9\u5f37\u3092\u59cb\u3081\u3001\n  2018\u5e7411\u6708\u306b\u521d\u3081\u3066Web\u30a2\u30d7\u30ea\n  \u300eTWESUME ~\u307f\u3093\u306a\u306eTwitter\u5c65\u6b74\u66f8~\u300f\u3092\u30ea\u30ea\u30fc\u30b9\u3002\n  Web\u30fbUnity\u30a8\u30f3\u30b8\u30cb\u30a2\u306e\u9ad8\u307f\u3092\u76ee\u6307\u3059\u30de\u30f3\u3002\n\n  ==================================================\n  ',skills:'\n  ==================================================\n\n  Language      Level(1 ~ 10)\n  <span class="html">HTML</span>        : <span class="skill-val">+++++++</span>\n  <span class="css">CSS</span>         : <span class="skill-val">+++++++</span>\n  <span class="ruby">Ruby</span>        : <span class="skill-val">+++++++</span>\n  <span class="js">Javascript</span>  : <span class="skill-val">++++++</span>\n  <span class="ts">Typescript</span>  : <span class="skill-val">++++++</span>\n  <span class="jquery">jQuery</span>      : <span class="skill-val">++++</span>\n  <span class="react">React</span>       : <span class="skill-val">+++++</span>\n  <span class="cs">C#</span>          : <span class="skill-val">++++</span>\n  <span class="php">PHP</span>         : <span class="skill-val">++++</span>\n\n  Framework     Level(1 ~ 10)\n  <span class="rails">Rails</span>       : <span class="skill-val">++++++</span>\n  <span class="unity">Unity</span>       : <span class="skill-val">++++</span>\n  <span class="php">cakePHP</span>     : <span class="skill-val">++</span>\n\n  ==================================================\n  ',products:'\n  ==================================================\n\n  <a href="https://twesumes.net"><img class="product-img" src="./images/twesume.png"></a>\n  title: <strong>TWESUME ~ \u307f\u3093\u306a\u306eTwitter\u5c65\u6b74\u66f8 ~</strong>\n  url: <a class="terminal-link" href="https://twesumes.net">https://twesumes.net/</a>\n  backend: [<span class="rails">"Rails"</span>, <span class="heroku">"Heroku"</span>]\n  frontend: [<span class="jquery">"jQuery"</span>, <span class="bootstrap">"Bootstrap"</span>, <span class="html2canvas">"html2canvas"</span>]\n  description: \u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u3067\u30a2\u30d4\u30fc\u30eb\u3059\u308bTwitter\u8ee2\u8077\u652f\u63f4\u30b5\u30fc\u30d3\u30b9\n\n  --------------------------------------------------\n\n  <a href="https://draftbox.herokuapp.com"><img class="product-img" src="./images/draftbox.png"></a>\n  title: <strong>DraftBox</strong>\n  url: <a class="terminal-link" href="https://draftbox.herokuapp.com/">https://draftbox.herokuapp.com/</a>\n  backend: [<span class="rails">"Rails"</span>, <span class="heroku">"Heroku"</span>]\n  frontend: [<span class="jquery">"jQuery"</span>, "Marked.js"]\n  description: \u30aa\u30f3\u30e9\u30a4\u30f3Markdown\u30e1\u30e2\u30b5\u30fc\u30d3\u30b9\n\n  ==================================================\n  ',blogs:"\n  ==================================================\n\n  blogs text\n\n  ==================================================\n  ",contact:'\n  ==================================================\n\n  \u304a\u554f\u3044\u5408\u308f\u305b\u306f <a href="https://twitter.com/dashi296">Twitter\u30a2\u30ab\u30a6\u30f3\u30c8(@dashi296)</a> \u306eDM\u3078\u304a\u9858\u3044\u3044\u305f\u3057\u307e\u3059\u3002\n\n  ==================================================\n  '},ie={isSetting:!1,menuName:"",settingMenuName:"",editorCode:"",prevTerminalText:"",menuResult:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_MENU":var a=n.payload.params.menuName,t=se[a];return Object(re.a)({},e,{isSetting:!0,menuName:a,settingMenuName:a,editorCode:t});case"UPDATE_TERMINAL":var r=n.payload.params.menuName,s="ruby ".concat(r,".rb"),l=le[r],i=(e.prevTerminalText+"dashi-MBP:portfolio dashi$ "+s+l).trim()+"\n";return Object(re.a)({},e,{isSetting:!1,settingMenuName:"",prevTerminalText:i});default:return e}},ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||g.c,me=Object(g.d)(Object(g.b)({menu:oe}),ce());l.a.render(r.a.createElement(i.a,{store:me},r.a.createElement(o.a,null,r.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,n,a){e.exports=a(303)},94:function(e,n,a){},95:function(e,n,a){}},[[84,1,2]]]);
//# sourceMappingURL=main.e9b6795b.chunk.js.map