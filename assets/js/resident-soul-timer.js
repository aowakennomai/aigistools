webpackJsonp([8],{0:function(t,e,n){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function i(t){return 27+(100>=t?3*t:300+t-100)}function o(t){return 12+(100>=t?0:Math.floor((t-100)/20)+1)}function r(t){var e=arguments.length<=1||void 0===arguments[1]?0:arguments[1];if(isNaN(t))return"?";if(t===1/0||t===-(1/0))return"∞";var n=t.toFixed(e).split("."),i=parseInt(n[0]);return i.toLocaleString()+(1===n.length?"":"."+n[1])}function a(){if(P){var e=t("#map").find("tbody tr input[name=num_drops]").map(function(){return parseInt(t(this).val())||0}).toArray().reduce(function(t,e){return t+e},0);t("input[name=current]").val(e).trigger("change")}}function s(){var e=void 0;try{e=JSON.parse(t.cookie(k))}catch(n){console.warn(n),e={}}return t.extend(!0,O,e)}function l(e){t.cookie(k,JSON.stringify(e),{expires:30})}function u(){if(D){var e=45,n=7,i=parseInt(S.val()),o=t("#rewards tbody");o.find("tr").removeClass("active").each(function(){var o=t(this),r=o.attr("data-amount")-i;if(-e>r)o.hide();else if(0>r)o.css("opacity",.5).show();else if(e>r)o.addClass("active").css("opacity",1).show();else if(e*n>r){var a=1-Math.floor(r/e)*e/(e*(n+1));o.show().css("opacity",a)}else o.hide();var s=0===r?"diff-eq":r>0?"diff-plus":"diff-minus",l=0===r?"":(r>0?"+":"")+r;o.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(s).text(l)})}}function c(){if("exchange"===E){var e=parseInt(S.val());_.forEach(function(n){for(var i=t('[data-prize="'+n.unit+'"]').empty(),o=0;e>o;o+=n.value){var r=t("<i />").addClass("icon icon-"+n.unit),a=25*Math.min(e-o,n.value)/n.value;t('<div class="prize-gage" />').append(r.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-a})).append(r.clone().css({width:a+"px"})).appendTo(i)}})}}function h(){var e=t("[name=expectation]:input").val(),n=1/0,i=0,o="drop"===e?null:e,a=C.map(function(t){var e=t.expectation/(o&&t[o]||1);return n=0,i=Math.max(i,e),e}),s=o?3:2;C.forEach(function(e,o){var l=t("[data-chart="+o+"]"),u=a[o],c=u/(i-n),h=120*c+240;l.find("span.barchart-label").text(r(u,s)+"個"),l.find("span.barchart").css({width:100*c+"%",backgroundColor:"hsla("+h+", 80%, 50%, 0.5)"})})}function p(){var e=parseInt(I.val()),n=parseInt(S.val()),i=Math.max(e-n,0);C.forEach(function(e,n){var o=t("[data-chart="+n+"]"),a=i?Math.ceil(i/e.expectation):0;o.find("span.marathon").text("残り"+r(a)+"周")})}function d(){var e=parseInt(S.val()),n=parseInt(I.val()),a=C[parseInt(t("[name=estimate_map]:input").val())],s=Math.max(n-e,0),l=Math.ceil(s/a.expectation);t("#estimate_required_marathon").text(r(l));var u=(new Date).getTime(),c=w.reduce(function(t,e){return t+Math.max(e[1],u)-Math.max(e[0],u)},0),h=0+t("[name=estimate_natural_recovery]:input").prop("checked"),p=Math.floor(c/18e4)*h,d=Math.floor(c/36e5)*h,f=parseInt(t("[name=estimate_rank]").val()),m=i(f),g=o(f),v=Math.ceil(a.charisma*l),y=Math.ceil(a.stamina*l),b=t("[name=estimate_use_crystal]:input").val(),x=0+("both"===b||"charisma"===b),_=0+("both"===b||"stamina"===b),A=x?v:p,E=_?y:d,D=Math.floor(Math.min(A/a.charisma,E/a.stamina));t("#estimate_available_marathon").text(r(D));var k=Math.ceil(Math.max(a.charisma*D-p,0)/m),N=Math.ceil(Math.max(a.stamina*D-d,0)/g),T=k+N;t("#estimate_required_crystal").text(r(T));var P=0===k?"diff-eq":k>0?"diff-plus":"diff-minus";t("#estimate_required_crystal_for_charisma").attr("class",P).text(r(k)),P=0===N?"diff-eq":N>0?"diff-plus":"diff-minus",t("#estimate_required_crystal_for_stamina").attr("class",P).text(r(N));var O=D-l;P=0===O?"diff-eq":O>0?"diff-plus":"diff-minus";var M=(O>=0?"+":"")+r(O);t("#estimate_available_marathon_diff").attr("class",P).text(M);var R=a.charisma*D;t("#estimate_using_charisma").text(r(R)),O=R-v,P=0===O?"diff-eq":O>0?"diff-plus":"diff-minus",M=(O>=0?"+":"")+r(O),t("#estimate_using_charisma_diff").attr("class",P).text(M);var j=Math.ceil(a.stamina*D);t("#estimate_using_stamina").text(r(j)),O=j-y,P=0===O?"diff-eq":O>0?"diff-plus":"diff-minus",M=(O>=0?"+":"")+r(O),t("#estimate_using_stamina_diff").attr("class",P).text(M);var L=e+Math.floor(a.expectation*D);t("#estimate_result_collection").text(r(L)),O=L-n,P=0===O?"diff-eq":O>0?"diff-plus":"diff-minus",M=(O>=0?"+":"")+r(O),t("#estimate_result_collection_diff").attr("class",P).text(M)}function f(){var e=parseInt(S.val()),n=parseInt(I.val()),i=(new Date).getTime(),o=w.reduce(function(t,e){return t+Math.max(e[1],i)-Math.max(e[0],i)},0),a=Math.max(n-e,0),s=o/864e5,l=a/Math.max(s,1),u=o/36e5,c=a/Math.max(u,1),h=o/18e5,p=a/Math.max(h,1),d=r(l,3).split(".");t("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=r(c,3).split("."),t("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=r(p,3).split("."),t("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),t("#remains_days").text(r(s,0)),t("#remains_hours").text(r(u,0)),t("#remains_minutes").text(r(60*u,0));var f=100*Math.min(e,n),m=parseInt(f/n)||0,g=x-o,v=parseInt(100*g/x)||0,y=void 0;y=100===m?"progress-bar-success":m>=v?"progress-bar-success":m>.7*v?"progress-bar-info":m>.4*v?"progress-bar-warning":"progress-bar-danger",t("#objective_progress > .progress-bar").width(m+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(y).children("span").text(m+"%達成"),t("#period_progress > .progress-bar").width(v+"%").children("span").text(v+"%経過");var b=e*x/g;t("#prediction_collection").text(r(Math.floor(b)));var _=Math.min(b/n,1),C=t("#objective_progress").width(),A=C*_-47;t(".pointer").css("left",A+"px");var E=230>C-A?-250:0;t(".pointer-label").css("margin-left",E+"px");var D="";n>e&&b>=n&&!function(){var t=void 0,e=void 0;w.forEach(function(n){t=t||n[0],e=e||n[1]});var i=n/b*x,o=w.reduce(function(t,e){if(t)return t;var n=e[1]-e[0];return i>n?(i-=n,null):new Date(e[0]+i)},null),r=o.getMonth(),a=o.getDate(),s=o.getHours(),l=o.getMinutes(),u=r+1+"/"+a+" "+(10>s?"0"+s:s)+":"+(10>l?"0"+l:l);D=u+"頃に目標達成できそうよ。"}(),t("#prediction_completion_date").text(D)}function m(){var t="animated bounce",e="",n="Webkit Moz O ms Khtml".split(" "),i="",o=document.createElement("div");if(void 0!==o.style.animationName)return!0;for(var r=0;r<n.length;r++)if(void 0!==o.style[n[r]+"AnimationName"])return i=n[r],t=i+"Animation",e="-"+i.toLowerCase()+"-",!0;return!1}function g(){S=t("[name=current]:input"),I=t("[name=objective]:input");var e=(new Date).getTime(),n=t("#period_dates");w.forEach(function(i){var o=i[1]-i[0],r=100*o/x+"%",a=new Date(i[0]),s=new Date(i[1]-1),l=a.getMonth()+1+"/"+a.getDate()+"-"+(s.getMonth()+1)+"/"+s.getDate(),u=e>=i[0]&&e<i[1],c=e>=i[1],h=u?"progress-bar-active":c?"progress-bar-expired":"progress-bar-remain";t('<div class="progress-bar">').width(r).text(l).addClass(h).appendTo(n)}),t('[data-objective-mode="'+E+'"]').show(),t('[data-objective-mode][data-objective-mode!="'+E+'"]').remove(),S.click(function(){this.select()}).TouchSpin({min:0,max:1e4,step:1}),"achievement"===E?t.each(b.objectives,function(e,n){t("<option />").attr("value",e).text(n+" ("+e+"個)").appendTo(I)}):!function(){t("select[name=objective]").click(function(){this.select()});var e=t("#increse_objective_list");_.forEach(function(n){t('<button class="btn btn-default" name="add"  type="button" />').val(n.value).attr("title",n.name).append(t('<i class="fa fa-arrow-up" />')).append(t("<span />").addClass("icon icon-"+n.unit)).appendTo(e)})}(),t("button[name=add]").click(function(e){e.preventDefault();var n=parseInt(t(this).val()),i=parseInt(I.val());I.val(i+n).trigger("change")}),t("button[name=reset]").click(function(t){t.preventDefault(),I.val(0).trigger("change")}),t("[name=expectation]:input").change(function(){h(),p()}).val(N);var f=t("#prize_list");_.forEach(function(e){t('<div class="prize-list" />').append(t('<h4 class="prize-list-header" />').text(e.name).append(t('<span class="prize-value" />').text("@"+e.value))).append(t('<div class="prize-list-body" />').attr("data-prize",e.unit)).appendTo(f)});var g=C.reduce(function(t,e){return Math.max(t,e.drops.length)},0),v=s();v.maps.forEach(function(t,e){C[e].expectation=t.expectation}),P=v.syncCurrentEnabled;var y=void 0,O=function(){y&&clearTimeout(y),setTimeout(function(){var e=t("#map");C.forEach(function(t,n){var i=e.find("tr[data-map="+n+"]"),o=Math.max(parseInt(i.find("input[name=num_laps]").val())||0,0),a=Math.max(parseInt(i.find("input[name=num_drops]").val())||0,0),s=i.find("input[name=actual_expectation]"),l=Math.max(parseFloat(s.val())||0,0);"aggregate"===T&&(l=a/o||0,s.val(l));var u=Math.floor(l);i.find("button[name=increase]").val(u).text("+"+r(u)),v.maps[n].numLaps=o,v.maps[n].numDrops=a,t.expectation=v.maps[n].expectation=l}),l(v),d(),h(),p()},100)},M=t("#map").on("keyup","input[type=number]",function(){O(),a()}).on("change","input[type=number]",function(){O(),a()}).on("click","input[type=number]",function(){this.select()}).on("click","button[name=increase]",function(e){e.preventDefault();var n=t(this).closest("tr"),i=n.find("input[name=num_laps]"),o=parseInt(i.val())+1;i.val(o);var r=n.find("input[name=num_drops]"),a=parseInt(r.val())+parseInt(this.value);r.val(a),r.trigger("change")}).on("change","input[name=expectation_input_mode]",function(){T=t(this).val(),v.expectationInputMode=T,l(v),M.find("input[name=num_laps], input[name=num_drops]").parent().toggle("aggregate"===T).end().end().find("input[name=actual_expectation]").parent().toggle("direct"===T).end().end().find("input[name=sync]").closest("tfoot").toggle("aggregate"===T),O()}).on("click","input[name=sync]",function(){v.syncCurrentEnabled=P=this.checked,l(v),a()}),R=M.find("tbody");C.forEach(function(e,n){var i=v.maps[n],o=t("<td />").attr("data-chart",n).append(t('<span class="barchart" />')).append(t('<span class="barchart-label" />')).append(t('<span class="marathon" />'));t("<tr />").attr("data-map",n).append(t("<th />").text(e.name)).append(t("<td />").text(""+e.charisma+"/"+e.stamina)).append(function(){for(var n=e.drops.map(function(e){var n=e.icon?t("<i />").attr("title",e.name).addClass("icon icon-"+e.icon):t("<span />").text(e.name),i=e.set?t('<span class="badge" />').text("x"+e.set):null;return t("<td />").append(n).append(i)}),i=e.drops.length;g>i;i++)n.push(t("<td />"));return n}).append(function(){var e=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon">1周の期待値</span>')).append(t('<input type="number" name="actual_expectation" min="0" class="form-control" />').val(i.expectation)),n=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon">周回</span>')).append(t('<input type="number" name="num_laps" min="0" class="form-control" />').val(i.numLaps)).append(t('<span class="input-group-addon">ドロップ</span>')).append(t('<input type="number" name="num_drops" min="0" class="form-control" />').val(i.numDrops)).append(t('<span class="input-group-btn"><button name="increase" class="btn btn-default"></button></span>'));return t('<td class="expectation" />').append(n).append(e)}).append(o).prependTo(R)}),t("#map thead th.drops").attr("colspan",g),D&&!function(){var e=t("#rewards tbody");A.forEach(function(n){var i=t('<span class="icon" />').addClass("icon-"+n.unit);t("<tr />").attr("data-amount",n.amount).append(t('<td class="text-right" />').html('<span class="diff"></span> '+n.amount)).append(t("<td />").html(i)).appendTo(e)})}();var j=t("[name=estimate_map]:input").change(function(){d(),v.estimateMap=parseInt(t(this).val()),l(v)});C.forEach(function(e,n){t("<option />").val(n).text(e.name+" ("+e.charisma+"/"+e.stamina+")").prependTo(j)});for(var L=t("[name=estimate_rank]:input").change(function(){d(),v.estimateRank=parseInt(t(this).val()),l(v)}),z=1;200>=z;z++){var H=i(z),F=o(z),B=""+z+" ("+H+"/"+F+")";t("<option />").val(z).text(B).appendTo(L)}var V=t("[name=estimate_use_crystal]").change(function(){d(),v.estimateUseCrystal=t(this).val(),l(v)}),U=t("[name=estimate_natural_recovery]:input").change(function(){d(),v.estimateNaturalRecovery=this.checked,l(v)});t("*[title]").tooltip(),S.val(v.current),"exchange"===E?I.val(v.objective):I.val([v.objective]),t("[name=current]:input, [name=objective]:input").change(function(){v[this.name]=t(this).val(),l(v),u(),c(),p(),d()}),j.val(v.estimateMap),L.val(v.estimateRank),V.val(v.estimateUseCrystal),U.prop("checked",v.estimateNaturalRecovery),"exchange"===E&&c(),D&&u(),M.find("input[name=sync]").prop("checked",P).end().find('input[name=expectation_input_mode][value="'+v.expectationInputMode+'"]').prop("checked",!0).trigger("change").parent().addClass("active"),t("#initialize-button").on("click",function(){t.removeCookie(k),window.location.reload()});var W=m(),q=["webkitAnimationEnd","mozAnimationEnd","MSAnimationEnd","oanimationend","animationend"].join(" ");t("#estimate_tutorial").on("click","a",function(e){t("#map .expectation").each(function(){var n=t(this);W&&(e.preventDefault(),n.addClass("animated flash").one(q,function(){n.removeClass("animated flash")}))})}).on("click","button",function(e){v.estimateTutorialHidden=!0,l(v),t(e.delegateTarget).each(function(){var e=t(this);W?e.addClass("animated zoomOutRight").one(q,function(){e.hide()}):e.hide()})}).toggle(!v.estimateTutorialHidden).each(function(){var e=t(this),n=e.find(".anna");e.on("mouseenter",function(){n.addClass("animated bounce")}).on("mouseleave",function(){n.removeClass("animated bounce")})})}var v=n(213),y=e(v),b=y["default"][0],w=b.periods.map(function(t){return t.map(Date.parse)}),x=w.reduce(function(t,e){return t+e[1]-e[0]},0);b.maxObjective=null===b.maxObjective?1/0:b.maxObjective;var _=b.prizes,C=b.maps,A=b.rewards,E="achievement",D=!0,k="resident-soul-timer",N="stamina",T="direct",P=!0,O={current:20,objective:1500,estimateMap:4,estimateRank:100,estimateUseCrystal:"both",estimateNaturalRecovery:!0,expectationInputMode:T,syncCurrentEnabled:P,maps:C.map(function(t){return{numLaps:0,numDrops:0,expectation:t.expectation}}),estimateTutorialHidden:!1,version:2},S=void 0,I=void 0;t(function(){g(),setInterval(f,1e3)})}).call(e,n(1))},213:function(t,e){t.exports=[{id:"20151029",periods:[["2015/10/29 15:00:00","2015/11/05 10:00:00"],["2015/11/05 15:00:00","2015/11/12 10:00:00"]],objectives:{25:"エターナーが仲間になる",50:"スキルレベル2",100:"初期レベル10",150:"スキルレベル3",200:"出撃コスト-1",250:"スキルレベル4",300:"出撃コスト-2",400:"スキルレベル5",500:"初期レベル20",600:"スキルレベル6",700:"出撃コスト-3",800:"スキルレベル7",900:"初期レベル30",1000:"スキルレベル8",1100:"出撃コスト-4",1200:"初期レベル40",1300:"スキルレベル9",1400:"出撃コスト-5",1500:"スキルレベル10",1600:"初期レベル50",1620:"+ 黒聖霊",1665:"+ ゴールドアーマー",1710:"+ 黒聖霊",1755:"+ プラチナアーマー",1800:"+ 虹聖霊"},prizes:[],maps:[{name:"死竜を追う者",charisma:20,stamina:1,expectation:2,drops:[{name:"住民の魂",icon:"resident-soul-1",set:2},{name:"花束",icon:"flower"}]},{name:"魂を狩る魔物",charisma:30,stamina:2,expectation:3,drops:[{name:"住民の魂",icon:"resident-soul-1",set:3},{name:"フューネス",icon:"rean"},{name:"魔水晶",icon:"demon-crystal-1"}]},{name:"カボチャの騎士",charisma:40,stamina:4,expectation:6,drops:[{name:"魔神の骨片3",icon:"resident-soul-3",set:1},{name:"魔神の骨片5",icon:"resident-soul-1",set:3},{name:"カシス",icon:"cassis"},{name:"ハリッサ",icon:"harissa"}]},{name:"カボチャの王様",charisma:50,stamina:7,expectation:16,drops:[{name:"魔神の骨片5",icon:"resident-soul-5",set:2},{name:"魔神の骨片3",icon:"resident-soul-3",set:2},{name:"ミーシャ",icon:"misha"},{name:"白銀の聖霊",icon:"platinum-sprit"}]},{name:"カボチャのパレード",charisma:80,stamina:9,expectation:15,drops:[{name:"魔神の骨片5",icon:"resident-soul-5",set:3},{name:"グレイブ",icon:"grave"},{name:"白バケツ",icon:"platinum-bucket"},{name:"魔水晶2",icon:"demon-crystal-2"}]}],rewards:[{amount:45,unit:"gold-bucket"},{amount:90,unit:"gold-sprit"},{amount:135,unit:"platinum-bucket"},{amount:180,unit:"gold-sprit"},{amount:225,unit:"crystal-fragment"},{amount:270,unit:"platinum-sprit"},{amount:315,unit:"gold-bucket"},{amount:360,unit:"platinum-sprit"},{amount:405,unit:"platinum-bucket"},{amount:450,unit:"black-sprit"},{amount:495,unit:"crystal-fragment"},{amount:540,unit:"black-sprit"},{amount:585,unit:"gold-bucket"},{amount:630,unit:"rainbow-sprit"},{amount:675,unit:"platinum-bucket"},{amount:720,unit:"platinum-sprit"},{amount:765,unit:"crystal-fragment"},{amount:810,unit:"platinum-sprit"},{amount:855,unit:"gold-bucket"},{amount:900,unit:"black-sprit"},{amount:945,unit:"platinum-bucket"},{amount:990,unit:"platinum-sprit"},{amount:1035,unit:"crystal-fragment"},{amount:1080,unit:"platinum-sprit"},{amount:1125,unit:"gold-bucket"},{amount:1170,unit:"black-sprit"},{amount:1215,unit:"platinum-bucket"},{amount:1260,unit:"black-sprit"},{amount:1305,unit:"crystal-fragment"},{amount:1350,unit:"rainbow-sprit"},{amount:1395,unit:"gold-bucket"},{amount:1440,unit:"platinum-sprit"},{amount:1485,unit:"platinum-bucket"},{amount:1530,unit:"platinum-sprit"},{amount:1575,unit:"crystal-fragment"},{amount:1620,unit:"black-sprit"},{amount:1665,unit:"gold-bucket"},{amount:1710,unit:"black-sprit"},{amount:1755,unit:"platinum-bucket"},{amount:1800,unit:"rainbow-sprit"}]}]}});