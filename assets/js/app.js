$(".pl-front-end-guidelines .side-nav").find("li a").click(function(){$(".pl-front-end-guidelines .side-nav").find("li a").removeClass("active"),$(this).addClass("active")});var url=window.location.href;$(".pl-front-end-guidelines .side-nav").find("li a").filter(function(){this.href===url&&$(this).addClass("active")});
$(function(){$(".pl-sub-pattern-markup").each(function(){$(this).before('<div class="pl-sub-pattern-sample"><div class="pl-sub-pattern-sample-toggle-controls"><span class="show">&#43; Show HTML</span><span class="hide">&#45; Hide HTML</span></div><div class="pl-sub-pattern-sample-toggle-target"><pre class="language-markup"><code><script type="prism-html-markup">'+$(this).html()+"</script></code></pre></div></div>")}),$(".pl-sub-pattern").on("click",".pl-sub-pattern-sample-toggle-controls",function(){$(this).parent(".pl-sub-pattern-sample").toggleClass("visible")})});
self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var a=t.util.type(e);switch(a){case"Object":var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=t.util.clone(e[i]));return n;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,a){var n=t.util.clone(t.languages[e]);for(var i in a)n[i]=a[i];return n},insertBefore:function(e,a,n,i){i=i||t.languages;var r=i[e];if(2==arguments.length){n=arguments[1];for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return r}var l={};for(var o in r)if(r.hasOwnProperty(o)){if(o==a)for(var s in n)n.hasOwnProperty(s)&&(l[s]=n[s]);l[o]=r[o]}return t.languages.DFS(t.languages,function(t,a){a===i[e]&&t!=e&&(this[t]=l)}),i[e]=l},DFS:function(e,a,n){for(var i in e)e.hasOwnProperty(i)&&(a.call(e,i,e[i],n||i),"Object"===t.util.type(e[i])?t.languages.DFS(e[i],a):"Array"===t.util.type(e[i])&&t.languages.DFS(e[i],a,i))}},highlightAll:function(e,a){for(var n,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;n=i[r++];)t.highlightElement(n,e===!0,a)},highlightElement:function(n,i,r){for(var s,l,o=n;o&&!e.test(o.className);)o=o.parentNode;if(o&&(s=(o.className.match(e)||[,""])[1],l=t.languages[s]),l){n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var u=n.textContent;if(u){u=u.replace(/^(?:\r?\n|\r)/,"");var g={element:n,language:s,grammar:l,code:u};if(t.hooks.run("before-highlight",g),i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){g.highlightedCode=a.stringify(JSON.parse(e.data),s),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,r&&r.call(g.element),t.hooks.run("after-highlight",g)},c.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=t.highlight(g.code,g.grammar,g.language),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,r&&r.call(n),t.hooks.run("after-highlight",g)}}},highlight:function(e,n,i){var r=t.tokenize(e,n);return a.stringify(t.util.encode(r),i)},tokenize:function(e,a){var n=t.Token,i=[e],r=a.rest;if(r){for(var s in r)a[s]=r[s];delete a.rest}e:for(var s in a)if(a.hasOwnProperty(s)&&a[s]){var l=a[s];l="Array"===t.util.type(l)?l:[l];for(var o=0;o<l.length;++o){var u=l[o],g=u.inside,c=!!u.lookbehind,p=0,f=u.alias;u=u.pattern||u;for(var d=0;d<i.length;d++){var m=i[d];if(i.length>e.length)break e;if(!(m instanceof n)){u.lastIndex=0;var h=u.exec(m);if(h){c&&(p=h[1].length);var y=h.index-1+p,h=h[0].slice(p),v=h.length,k=y+v,w=m.slice(0,y+1),b=m.slice(k+1),P=[d,1];w&&P.push(w);var A=new n(s,g?t.tokenize(h,g):h,f);P.push(A),b&&P.push(b),Array.prototype.splice.apply(i,P)}}}}}return i},hooks:{all:{},add:function(e,a){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=t.hooks.all[e];if(n&&n.length)for(var i,r=0;i=n[r++];)i(a)}}},a=t.Token=function(e,t,a){this.type=e,this.content=t,this.alias=a};if(a.stringify=function(e,n,i){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return a.stringify(t,n,e)}).join("");var r={type:e.type,content:a.stringify(e.content,n,i),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:i};if("comment"==r.type&&(r.attributes.spellcheck="true"),e.alias){var s="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,s)}t.hooks.run("wrap",r);var l="";for(var o in r.attributes)l+=o+'="'+(r.attributes[o]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+l+">"+r.content+"</"+r.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,i=a.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(i,t.languages[n])))),self.close()},!1),self.Prism):self.Prism;var n=document.getElementsByTagName("script");return n=n[n.length-1],n&&(t.filename=n.src,document.addEventListener&&!n.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}}),!function(){if(self.Prism){var e=/\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:#=?&amp;]+/,t=/\b\S+@[\w.]+[a-z]{2}/,a=/\[([^\]]+)]\(([^)]+)\)/,n=["comment","url","attr-value","string"];for(var i in Prism.languages){var r=Prism.languages[i];Prism.languages.DFS(r,function(i,r,s){n.indexOf(s)>-1&&"Array"!==Prism.util.type(r)&&(r.pattern||(r=this[i]={pattern:r}),r.inside=r.inside||{},"comment"==s&&(r.inside["md-link"]=a),"attr-value"==s?Prism.languages.insertBefore("inside","punctuation",{"url-link":e},r):r.inside["url-link"]=e,r.inside["email-link"]=t)}),r["url-link"]=e,r["email-link"]=t}Prism.hooks.add("wrap",function(e){if(/-link$/.test(e.type)){e.tag="a";var t=e.content;if("email-link"==e.type&&0!=t.indexOf("mailto:"))t="mailto:"+t;else if("md-link"==e.type){var n=e.content.match(a);t=n[2],e.content=n[1]}e.attributes.href=t}})}}();
$(".rtl").click(function(){$(this).addClass("active").siblings(".ltr").removeClass("active"),$("body").addClass("rtl")}),$(".ltr").click(function(){$(this).addClass("active").siblings(".rtl").removeClass("active"),$("body").removeClass("rtl")});
$(document).ready(function(){$(".ltr").click(function(){$("#stylesheet").attr({href:"../../css/style.css"})}),$(".rtl").click(function(){$("#stylesheet").attr({href:"../../css/rtl-style.css"})})});
$(window).scroll(function(){var l=$(window).scrollTop();l>=130?($(".pl-jump-nav").addClass("pl-fixed"),$(".pl").addClass("sticky-nav")):($(".pl-jump-nav").removeClass("pl-fixed"),$(".pl").removeClass("sticky-nav"))});
$(".accordion-menu-trigger").click(function(){var e=$(this).parents(".accordion-menu-list__item");e.siblings().removeClass("open"),e.toggleClass("open")});
checkboxState=function(e){var c=$(e).parent("label");$(e).is(":checked")?$(c).addClass("checked"):$(c).removeClass("checked")},$('[type="checkbox"]').each(function(){checkboxState($(this))}),$('[type="checkbox"]').on("change",function(){checkboxState($(this))});
var message=$(".confirmation-message");$(".confirmation-trigger").click(function(){message.toggleClass("visible"),setTimeout(function(){message.removeClass("visible")},8e3)}),$(".hide-confirmation-message").click(function(){message.removeClass("visible")}),message.hasClass("visible")&&setTimeout(function(){message.removeClass("visible")},8e3);
$(".custom-fieldset").each(function(){var t=$(this),d=$(t).children(":not(legend)"),e=$(t).children("legend");$(t).addClass("init"),$(d).wrapAll('<div class="dropdown-menu" />'),$(e).addClass("dropdown-trigger").attr("data-toggle","dropdown-menu"),$(t)[0].hasAttribute("data-legend")&&($(t).attr("data-legend",$(e).text()),$(t).find('input[type="radio"]').on("change",function(){var d=$(this),a=$(t).find('label[for="'+$(d).attr("id")+'"]');$(e).text(a.text())}))});
$(".custom-select").each(function(){function t(){$(n).removeClass(function(t,n){return(n.match(/(^|\s)fa-\S+/g)||[]).join(" ")}).addClass($(e).attr("data-icon"))}var n=$(this),e=$(n).find("option:selected");$(n).addClass("init"),$(e)[0].hasAttribute("data-icon")&&(t(),$(n).find("select").on("change",function(){e=$(this).children("option:selected"),t()}))});
$(".searchbar .dropdown-menu fieldset").each(function(){var o=$(this),e=o.find(".form-field").length;e>3&&(o.find(".form-field:eq(2)").nextAll(".form-field").addClass("overflow"),o.addClass("has-overflow"),$(".form-field-toggle").on("click",function(){o.toggleClass("show-overflow")}))});
var formField=$(".form-field-adapt");$(".form-field-adapt .adapt-field").focus(function(){$(this).parents(formField).addClass("is-focused")}),$(".form-field-adapt .adapt-field").blur(function(){$(".adapt-field").filter(function(){return $(this).val()}).length>0?$(this).parents(formField).addClass("is-focused"):$(this).parents(formField).removeClass("is-focused")});
$(".listing").each(function(){var t,i=$(this),e=$(i).find(".listing-toolbar"),n=$(i).find('.listing-item-secondary input[type="checkbox"]'),s=$(i).find('.listing-item-select input[type="checkbox"]');$(i).addClass("init"),$(s).on("change",function(){t=$(i).find('.listing-item-select input[type="checkbox"]:checked'),$(t).length?$(i).addClass("toolbar-active"):$(i).removeClass("toolbar-active"),$(e).find(".listing-toolbar-summary .total").text($(t).length)}),$(n).on("change",function(){$(this).is(":checked")?$(this).closest(".listing-item").addClass("active"):$(this).closest(".listing-item").removeClass("active")}),$(e).find(".listing-toolbar-actions").find("button, .button, fieldset").length>2&&($(e).addClass("truncated"),$(e).find(".listing-toolbar-toggle").on("click",function(){$(e).toggleClass("expanded")}))});
$(".main-nav").find("li a").not(".hidden-content-trigger").click(function(){$(".main-nav").find("li a").removeClass("active"),$(this).addClass("active")});var url=window.location.href;$(".main-nav li a").filter(function(){this.href==url&&$(this).addClass("active")}),$(".main-nav li .hidden-content").find("li a").filter(function(){this.href==url&&($(this).addClass("active"),$(this).parent().parent().addClass("visible").siblings(".trigger-container").children(".hidden-content-trigger").addClass("open active"))});
if(popupActions=function(){$(".post-popup .toggle-js").click(function(){$(this).toggleClass("open"),$(this).parent().siblings(".toggle-content").toggleClass("visible"),$(this).parent().find(".toggle-content").toggleClass("visible")}),$(".toggle-content-secondary ul li a").click(function(){$(this).closest(".toggle-content").removeClass("visible"),$(this).parents("ul, li, .toggle-content").siblings(".toggle-js").removeClass("open")})},$("#map").length){$(".post-popup").hasClass("has-image")&&$(".post-popup").parents(".leaflet-popup-content-wrapper").siblings(".leaflet-popup-tip-container").children(".leaflet-popup-tip").addClass("black-arrow");var map=L.map("map",{center:[30.267153,-97.743061],zoom:5,scrollWheelZoom:!1});mapLink='<a href="http://openstreetmap.org">OpenStreetMap</a>',L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; "+mapLink+" Contributors",maxZoom:18}).addTo(map);var popup='<article class="postcard">\n        <div class="post-band" style="background-color: #8D1919;"></div>\n        <div class="postcard-body">\n            <h1 class="postcard-title"><a href="">Overcrowding between 5th St. &amp; Salem Ave.</a></h1>\n            <span class="postcard-metadata"><a href="" class="postcard-author"><img src="https://api.adorable.io/avatars/40/abott@adorable.io.png" class="avatar" />Jess Shorland</a>, 45 mins, via SMS</span>\n\n            <div class="postcard-image">\n                <img src="http://lorempixel.com/400/300/" />\n            </div>\n        </div>\n\n        <span class="postcard-actions-trigger" data-toggle="dropdown-menu">\n            <svg class="iconic">\n              <use xlink:href="/assets/img/iconic-sprite.svg#chevron-bottom"></use>\n            </svg>\n        </span>\n        <ul class="dropdown-menu">\n            <li>\n                <a href="">\n                <svg class="iconic">\n                    <use xlink:href="/assets/img/iconic-sprite.svg#grid-three-up"></use>\n                </svg>\n                Add to Collection\n                </a>\n            </li>\n            <li>\n                <a href="">\n                <svg class="iconic">\n                    <use xlink:href="/assets/img/iconic-sprite.svg#share"></use>\n                </svg>\n                Share\n                </a>\n            </li>\n            <li>\n                <a href="">\n                <svg class="iconic">\n                    <use xlink:href="/assets/img/iconic-sprite.svg#task"></use>\n                </svg>\n                Assign to...\n                </a>\n            </li>\n            <li>\n                <a href="">\n                <svg class="iconic">\n                    <use xlink:href="/assets/img/iconic-sprite.svg#trash"></use>\n                </svg>\n                Delete\n                </a>\n            </li>\n        </ul>\n    </article>',popupOptions={minWidth:"400",maxWidth:"400",className:"pl-popup",offset:new L.Point(20,15)},customIcon=L.divIcon({className:"custom-map-marker",html:'<svg class="iconic map-marker-icon">\n      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/img/iconic-sprite.svg#map-marker"></use>\n    </svg>',iconSize:null,iconAnchor:null}),customIconAlt=L.divIcon({className:"custom-map-marker",html:'<svg class="iconic map-marker-icon-alt">\n      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/img/iconic-sprite.svg#map-marker"></use>\n    </svg>',iconSize:null,iconAnchor:null}),marker=L.marker([30.267153,-97.743061],{icon:customIcon}).addTo(map).bindPopup(popup,popupOptions).on("popupopen",popupActions),marker=L.marker([36.072635,-79.791975],{icon:customIconAlt}).addTo(map).bindPopup(popup,popupOptions).on("popupopen",popupActions)}
modalToggle=function(o){var a="undefined"!=typeof o?o:".modal";console.log(a),$("body").hasClass("modal-visible")?($("body").removeClass("modal-visible"),setTimeout(function(){$(".modal").fadeOut("fast")},400)):(modalYpos(),$(a).fadeIn("fast",function(){$("body").addClass("modal-visible")}))},modalYpos=function(){var o=$(window).scrollTop();o>0&&($(".modal-window").css("top",o+40),$(".modal-body").css("height",.66*$(window).height()))},modalInit=function(o,a){return $("[data-modal], .modal-trigger").click(function(o){$(this)[0].hasAttribute("data-modal")?modalToggle("#"+$(this).attr("data-modal")):modalToggle(),o.preventDefault()}),1==a&&modalToggle(),0==o?!1:void $(".modal-overlay").click(function(){modalToggle()})};
$(".mode-bar").each(function(){var s=$(this),a=$(s).find(".more-menu-trigger");$(s).addClass("init"),$(s).find(".deployment-menu li").addClass("tuck").slice(0,3).addClass("persist").removeClass("tuck"),$(a).addClass("persist").removeClass("tuck"),$(a).on("click",function(e){$(s).hasClass("active")||($(a).addClass("active"),$(s).addClass("active")),e.preventDefault()})});
$(".mode-context").each(function(){var a=$(this),e=$(a).find(".mode-context-trigger");$(a).addClass("init"),$(e).on("click",function(t){$(a).hasClass("active")?($(e).removeClass("active"),$(a).removeClass("active")):($(e).addClass("active"),$(a).addClass("active")),t.preventDefault()})});
$(".filter-applied").click(function(){$(this).toggleClass("deactive")});
$(".star").click(function(){$(this).toggleClass("yellow")});
$(".fixed-sidebar-content").length&&$(function(){var t=$(".fixed-sidebar-content"),o=t.offset().top,n=function(){if($(window).width()>767){var n,e;return n=$(window).scrollTop(),e=n+(t.innerHeight()+68),n-35>o&&t.innerHeight()<$(window).height()-68?(t.css({position:"fixed",left:t.offset().left,width:t.css("width")}),t.css(e>=$('[role="contentinfo"]').offset().top?{top:"auto",bottom:175}:{top:68,bottom:"auto"})):t.removeAttr("style")}};$(window).scroll(function(){return n()}),$(window).on("resize",function(){return n()})});
$(".survey-filter-checkbox").each(function(){var e=$(this),c=$(e).find('input[type="checkbox"]');$(e).addClass("init"),$(c).is(":checked")&&$(e).addClass("checked"),$(c).on("change",function(){$(c).is(":checked")?$(e).addClass("checked"):$(e).removeClass("checked")})});
$(".tabs-menu-trigger").on("click",function(){$(this).closest(".tabs-menu").toggleClass("active")}),$(".vertical-tabs-menu").each(function(){var t=$(this);$(t).addClass("init"),$(t).find(".active").on("click",function(){$(t).toggleClass("active")})});
tiersInit=function(e,t){var i="undefined"!==e?e:$(".tiers"),s="undefined"!==t?t:i.find(".tier.selected"),n=i.siblings(".tier.lite"),a=i.find(".payment");selectedTierInput=$("#selected-tier"),i.hasClass("show-payment")?(a.fadeOut(500),i.find(".tier").removeClass("selected"),i.removeClass("show-payment"),selectedTierInput.val(""),setTimeout(function(){n.slideDown(500).animate({opacity:1},500)},500)):(a.fadeIn(500),s.addClass("selected"),i.addClass("show-payment"),selectedTierInput.val($(s).attr("id")),setTimeout(function(){n.animate({opacity:0},500).slideUp(500)},500)),i.parent().animate({scrollTop:0},500)},$(document).ready(function(){$("[data-payment]").on("click",function(e){tiersInit($(this).closest(".tiers"),$(this).closest(".tier")),e.preventDefault()})});
dropdownXpos=function(t,e){var o=$(t).offset();"rtl"==$(t).css("direction")||o.left>=$(window).width()-200?$(e).css("right",$(window).width()-(o.left+$(t).outerWidth())):$(e).css("left",o.left),$(e).css("top",o.top+$(t).outerHeight())},$("[data-toggle]").each(function(){var t=$(this),e=$(t).attr("data-toggle"),o=$('[data-toggle-target="'+e+'"]').length?$('[data-toggle-target="'+e+'"]'):$(t).next("."+e);$(t).addClass("init"),$(o).addClass("init"),$(o).is(":visible")&&($(t).addClass("active"),$(o).addClass("active"),$(o).hasClass("dropdown-menu")&&dropdownXpos(t,o)),$(t).on("click",function(e){$("[data-toggle]").not($(t)).removeClass("active"),$("[data-toggle-target]").not($(o)).removeClass("active").removeAttr("style"),$(o).is(":hidden")?($(t).addClass("active"),$(o).addClass("active"),$("body").addClass("noscroll"),$(o).hasClass("dropdown-menu")&&dropdownXpos(t,o)):($(t).removeClass("active"),$(o).removeClass("active").removeAttr("style"),$("body").removeClass("noscroll")),e.preventDefault()})}),$(".toggle-content.dropdown-menu").click(function(){$(this).toggleClass("active")}),$(".toggle").click(function(){$(this).toggleClass("fa-chevron-down fa-chevron-up"),$(this).next(".toggle-content").toggleClass("open")});
tourPin=function(t,o,e,n){var s=$(e).offset(),i=$(e).outerWidth(),a=$(e).outerHeight();$("#"+t).removeClass("active"),$("#"+t).hasClass("tour-modal")?$(".tour-pin").removeClass(function(t,o){return(o.match(/(^|\s)pin-\S+/g)||[]).join(" ")}).addClass("pin-enter"):!$("#"+t).hasClass("tour-modal")&&$("#"+o).hasClass("tour-modal")?$(".tour-pin").removeClass(function(t,o){return(o.match(/(^|\s)pin-\S+/g)||[]).join(" ")}).css("top","-100%"):$(".tour-pin").removeClass("pin-enter").toggleClass("pin-move"),"undefined"!=typeof e?("undefined"==typeof n?$(".tour-pin").css({top:"-100%",left:"50%"}):"top-left"===n?$(".tour-pin").css({top:s.top-10,left:s.left-10}):"top-right"===n?$(".tour-pin").css({top:s.top,left:s.left+i-10}):"bottom-left"===n?$(".tour-pin").css({top:s.top+a-10,left:s.left}):"bottom-right"===n?$(".tour-pin").css({top:s.top+a-10,left:s.left+i-10}):"center"===n?$(".tour-pin").css({top:s.top+a/2-10,left:s.left+i/2-10}):"top-center"===n?$(".tour-pin").css({top:s.top,left:s.left+i/2-10}):"bottom-center"===n&&$(".tour-pin").css({top:s.top+a-10,left:s.left+i/2-10}),$("#"+o).addClass("active").css({top:s.top+a+40}),$(window).width()>767&&$("#"+o).css(s.left+i/2>$(window).width()/2?{left:"65%"}:s.left+i/2<$(window).width()/2?{left:"35%"}:{left:"50%"}),s.top+a>$(window).height()/1.5&&$("html, body").animate({scrollTop:s.top-70},1e3)):($("html, body").animate({scrollTop:0},1e3),$("#"+o).addClass("active"))},tourStep=function(t,o){var e="undefined"!=typeof t?!1:!0,n=$("body").attr("data-step"),s="undefined"!=typeof t?t:"start";$("body").attr("data-step",s),$("#"+s).hasClass("tour-modal")?($(".tour-mask").fadeIn(1e3),tourPin(n,s)):($(".tour-mask").fadeOut(500),tourPin(n,s,'[data-message="'+s+'"]',"bottom-center")),0!=e||o||(history.pushState?history.pushState(null,null,"#"+s):window.location.hash=s)},tourStepLookup=function(t){return window.location.hash?window.location.hash.substr(1):"undefined"!=typeof t?t:void 0},tourInit=function(t){$("*").not("[data-cue], [data-payment], .tour-link").on("click",function(t){t.preventDefault()}).off("click"),$("[data-cue]").on("click",function(){tourStep($(this).attr("data-cue"))}),setTimeout(function(){tourStep(tourStepLookup(t),!0)},500),window.onpopstate=function(){tourStep(tourStepLookup())}};
$(".views ul li").click(function(){$(this).siblings().removeClass("active"),$(this).addClass("active")});