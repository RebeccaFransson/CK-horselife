webpackJsonp([0],[,,,,function(t,n,a){a(5),t.exports=a(11)},function(t,n,a){window.Promise||(window.Promise=a(6)),Object.assign=a(10)},,,,,,function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(12),r=a(13);new e.a({el:"#app",render:function(t){return t(r.a)}})},,function(t,n,a){"use strict";function e(t){a(14)}var r=a(15),i=a(45),s=a(0),l=e,o=s(r.a,i.a,l,null,null);n.a=o.exports},function(t,n){},function(t,n,a){"use strict";var e=a(16),r=a(41);n.a={name:"app",components:{navigation:e.a,bottomBar:r.a}}},function(t,n,a){"use strict";function e(t){a(17)}var r=a(18),i=a(40),s=a(0),l=e,o=s(r.a,i.a,l,null,null);n.a=o.exports},function(t,n){},function(t,n,a){"use strict";var e=a(19);n.a={name:"navigation",components:{popup:e.a},data:function(){return{popup:!1,whichPopup:""}},methods:{openPopup:function(t){this.popup=!0,this.whichPopup=t,this.showSmallNavPictures(!0),$("#popup").css("display","block"),$("body").addClass("freezeScroll"),setTimeout(function(){$("#popup").removeClass("hidden")},50),$("body, html").animate({scrollTop:0},550)},closePopup:function(){this.popup=!1,this.showSmallNavPictures(!1),$("#popup").addClass("hidden"),setTimeout(function(){$("#popup").css("display","none")},500)},showSmallNavPictures:function(t){t?$(".navPicture").addClass("small"):$(".navPicture").removeClass("small")}}}},function(t,n,a){"use strict";function e(t){a(20)}var r=a(21),i=a(39),s=a(0),l=e,o=s(r.a,i.a,l,null,null);n.a=o.exports},function(t,n){},function(t,n,a){"use strict";var e=a(22),r=a(26),i=a(29),s=a(32);n.a={name:"popup",components:{inackodering:e.a,garden:r.a,hastar:i.a,galleri:s.a},props:{whichPopup:{type:String},closePopup:{type:Function}},mounted:function(){$("#popup").css("display","none")}}},function(t,n,a){"use strict";function e(t){a(23)}var r=a(24),i=a(25),s=a(0),l=e,o=s(r.a,i.a,l,null,null);n.a=o.exports},function(t,n){},function(t,n,a){"use strict";n.a={name:"Inackodering"}},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"popup",attrs:{id:"inackodering"}},[a("div",{staticClass:"text"},[a("p",[t._v("Vi har ett antal boxplatser som vi hyr ut till Inackorderingar.")]),t._v("\n\n        Hos oss ingår fri tillgång till halm samt 10kg ensilage.\n        "),a("br"),t._v("\n        Vi släpper ut och tar in varje dag. På vinterhalvåret är de oftast ute mellan 09:00-ca:14:00 och om man vill ha ute dem längre på sommarhalvåret så är det inga problem och då får de lunch i hagen.\n        "),a("br"),t._v("\n        Vi morgonfodrar och lunchfodrar alla dagar i veckan. Kvällsfodringen delar vi på och blir ca 3-4 gånger per månad per person.\n        "),a("br"),t._v("\n        Man har tillgång till anläggningen och alla faciliteter. Det är bra tillgång till ridhuset då detta oftast endast är bokat ett par timmar om dagen.\n        "),a("br"),t._v("\n        Vi utför det mesta mot betalning om man vill vara ledig eller är sjuk.\n        "),a("br"),t._v(" "),a("p",{staticClass:"orange box"},[t._v("Boxplats 3300kr/mån för 9kvm")]),a("p"),a("h4",[t._v("Vi utför även")]),t._v(" "),a("ul",[a("li",[t._v("Mockning samt fixa foder 50kr/gång eller 1100kr/mån för fullservice.")]),t._v(" "),a("li",[t._v("Longering/tömkörning av häst 30min 300kr")]),t._v("\n                täckesbyten, benlindor av, skydd på och av i hagen 200kr/mån"),t._v(" "),a("li",[t._v("Extra hö 90kr/mån för varje extra kilo hö (30kg=90kr)")]),t._v(" "),a("li",[t._v("Vi har en kallhyra på 1500kr/mån och en uppsägningstid på 2 månader")])]),t._v(" "),a("p",{staticClass:"blue box"},[t._v("Hos oss är det en mycket trevlig stallstämning. \n            "),a("br"),t._v("\n            Vi hjälps åt att hålla snyggt och rent och har trevliga träffar med fika och stallsnack.\n            "),a("br"),t._v(" "),a("b",[t._v("Kom gärna och titta!")])])]),t._v(" "),a("img",{staticClass:"popupImg",attrs:{src:"/CK-horselife/static/fol.jpg",alt:"Smiley face"}})])}],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";function e(t){a(27)}var r=a(28),i=a(0),s=e,l=i(null,r.a,s,null,null);n.a=l.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"popup",attrs:{id:"garden"}},[a("div",{staticClass:"text"},[a("h2",[t._v("Libacka Gård")]),t._v(" "),a("p",[t._v("\n    Libacka Gård ligger strax söder om Vellinge, utanför Skegrie By. Vi finns endast 20min söder om Malmö och 8min från Trelleborg och Vellinge.\n    ")]),t._v(" "),a("p",[t._v("\n    Gården är över 100år gammal men själva hästbiten började byggas 2001 när vi flyttade hem från Portugal.\n    ")]),t._v(" "),a("p",[t._v("\n    Idag har vi 27 boxplatser och 2 lösdrifter med unghästar och avelsston.\n    ")]),t._v(" "),a("p",[t._v("\n    Det finns ett ridhus med måtten 22m*42m med bra underlag och mycket ljusinsläpp. Våran utebana är på hela 30m*60m och används flitigt under sommarhalvåret. Det finns mycket hindermaterial att tillgå och bra träningsmöjligheter då där är pågående träningar nästan varje dag.\n    ")]),t._v(" "),a("p",[t._v("\n    Trevliga ridvägar på både fält och grusvägar. Man kan rida ner till stranden i Skåre och ända bort till Fredshögs ryttarförening.\n    ")]),t._v(" "),a("p",[t._v("\n    Vi har 2 stallar med varsin sadelkammare som är uppvärmda på vinterhalvåret. Gott om uppbindningsplatser samt spolspilta.\n    ")]),t._v(" "),a("p",[t._v("\n    Vi har många hagar i olika storlekar och även sommarbete.\n    ")])]),t._v(" "),a("img",{staticClass:"popupImg",attrs:{src:"/CK-horselife/static/emilhopp.jpg",alt:"Emil hoppar"}})])}],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";function e(t){a(30)}var r=a(31),i=a(0),s=e,l=i(null,r.a,s,null,null);n.a=l.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"popup",attrs:{id:"hastar"}},[a("div",{staticClass:"text"},[a("h2",[t._v("Libacka Gård")]),t._v("\n    Libacka Gård ligger strax söder om Vellinge, utanför Skegrie By. Vi finns endast 20min söder om Malmö och 8min från Trelleborg och Vellinge.\n    "),a("br"),t._v("\n    Gården är över 100år gammal men själva hästbiten började byggas 2001 när vi flyttade hem från Portugal.\n    "),a("br"),t._v("\n    Idag har vi 27 boxplatser och 2 lösdrifter med unghästar och avelsston.\n    "),a("br"),t._v("\n    Det finns ett ridhus med måtten 22m*42m med bra underlag och mycket ljusinsläpp. Våran utebana är på hela 30m*60m och används flitigt under sommarhalvåret. Det finns mycket hindermaterial att tillgå och bra träningsmöjligheter då där är pågående träningar nästan varje dag.\n    "),a("br"),t._v("\n    Trevliga ridvägar på både fält och grusvägar. Man kan rida ner till stranden i Skåre och ända bort till Fredshögs ryttarförening.\n    "),a("br"),t._v("\n    Vi har 2 stallar med varsin sadelkammare som är uppvärmda på vinterhalvåret. Gott om uppbindningsplatser samt spolspilta.\n    "),a("br"),t._v("\n    Vi har många hagar i olika storlekar och även sommarbete.\n  ")]),t._v(" "),a("img",{staticClass:"popupImg",attrs:{src:"/CK-horselife/static/alla.jpg",alt:"Everybody"}})])}],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";function e(t){a(33)}var r=a(34),i=a(38),s=a(0),l=e,o=s(r.a,i.a,l,null,null);n.a=o.exports},function(t,n){},function(t,n,a){"use strict";var e=a(35),r=a.n(e);n.a={data:function(){return{index:0,images:["/CK-horselife/static/emilhopp.jpg","/CK-horselife/static/alla.jpg"]}},components:{gallery:r.a}}},,,,function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"popup",attrs:{id:"gallery"}},[a("gallery",{attrs:{images:t.images,index:t.index},on:{close:function(n){t.index=null}}}),t._v(" "),t._l(t.images,function(n,e){return a("div",{key:e,staticClass:"image",style:{backgroundImage:"url("+n+")",width:"300px",height:"200px"},on:{click:function(n){t.index=e}}})})],2)},r=[],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"hidden",attrs:{id:"popup"}},[a("div",{staticClass:"topBar"},[a("h3",[t._v(t._s(t.whichPopup))]),t._v(" "),a("div",{staticClass:"close",on:{click:t.closePopup}},[t._v("✖")])]),t._v(" "),"Inackodering"===t.whichPopup?a("inackodering"):t._e(),t._v(" "),"Gården"===t.whichPopup?a("garden"):t._e(),t._v(" "),"Hästar"===t.whichPopup?a("hastar"):t._e(),t._v(" "),"Galleri"===t.whichPopup?a("galleri"):t._e()],1)},r=[],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"popup",attrs:{id:"navigation"}},[a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("Gården")}}},[a("h3",[t._v("Gården")])])]),t._v(" "),a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("Hästar")}}},[a("h3",[t._v("Hästar")])])]),t._v(" "),a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("Inackodering")}}},[a("h3",[t._v("Inackodering")])])]),t._v(" "),a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("Medryttare")}}},[a("h3",[t._v("Medryttare")])])]),t._v(" "),a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("Uppföding")}}},[a("h3",[t._v("Uppfödning")])])]),t._v(" "),a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("Galleri")}}},[a("h3",[t._v("Galleri")])])]),t._v(" "),a("popup",{attrs:{whichPopup:t.whichPopup,"close-popup":t.closePopup}})],1)},r=[],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";function e(t){a(42)}var r=a(43),i=a(44),s=a(0),l=e,o=s(r.a,i.a,l,null,null);n.a=o.exports},function(t,n){},function(t,n,a){"use strict";n.a={name:"bottomBar",data:function(){return{}},methods:{}}},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"bottomBar"}},[a("div",{staticClass:"barItems"},[a("div",{staticClass:"item"},[a("p",[a("span",[t._v("Mail")])]),t._v(" "),a("div",[t._v("ckhorselife"),a("br"),t._v("@gmail.com")])]),t._v(" "),a("div",{staticClass:"item"},[a("p",[a("span",[t._v("Telefon")])]),t._v(" "),a("div",[t._v("0730-284544")])]),t._v(" "),a("div",{staticClass:"item"},[a("p",[a("span",[t._v("Adress")])]),t._v(" "),a("div",[t._v("Libacka gård, "),a("br"),t._v("\n        Liebacksvägen,"),a("br"),t._v("\n        231 93 Trelleborg")])])])])}],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("navigation"),t._v(" "),a("bottomBar")],1)},r=[],i={render:e,staticRenderFns:r};n.a=i}],[4]);
//# sourceMappingURL=client.192314b7.js.map