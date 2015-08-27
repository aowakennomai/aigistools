webpackJsonp([2],[function(t,e,n){(function(t){"use strict";function e(t){return 27+(100>=t?3*t:300+t-100)}function n(t){return 12+(100>=t?0:Math.floor((t-100)/20)+1)}function i(t,e){if(e=e||0,isNaN(t))return"?";if(t===1/0||t===-(1/0))return"∞";var n=t.toFixed(e).split("."),i=parseInt(n[0]);return i.toLocaleString()+(1===n.length?"":"."+n[1])}function o(){if(k){var e=t("#map").find("tbody tr input[name=num_drops]").map(function(){return parseInt(t(this).val())||0}).toArray().reduce(function(t,e){return t+e},0);t("input[name=current]").val(e).trigger("change")}}function s(){var e={};try{e=JSON.parse(t.cookie(x))}catch(n){console.warn(n)}return t.extend(!0,D,e)}function r(e){t.cookie(x,JSON.stringify(e),{expires:30})}function a(){if(w){var e=45,n=7,i=parseInt(t("[name=current]:input").val()),o=t("#rewards tbody");o.find("tr").removeClass("active").each(function(){var o=t(this),s=o.attr("data-amount")-i;if(-e>s)o.hide();else if(0>s)o.css("opacity",.5).show();else if(e>s)o.addClass("active").css("opacity",1).show();else if(e*n>s){var r=1-Math.floor(s/e)*e/(e*(n+1));o.show().css("opacity",r)}else o.hide();var a=0===s?"diff-eq":s>0?"diff-plus":"diff-minus",l=0===s?"":(s>0?"+":"")+s;o.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(a).text(l)})}}function l(){if("exchange"===b){var e=parseInt(t("[name=current]:input").val());g.forEach(function(n){for(var i=t('[data-prize="'+n.unit+'"]').empty(),o=0;e>o;o+=n.value){var s=t("<i />").addClass("icon icon-"+n.unit),r=25*Math.min(e-o,n.value)/n.value;t('<div class="prize-gage" />').append(s.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-r})).append(s.clone().css({width:r+"px"})).appendTo(i)}})}}function c(){var e=t("[name=expectation]:input").val(),n=1/0,o=0,s="drop"===e?null:e,r=v.map(function(t){var e=t.expectation/(s&&t[s]||1);return n=0,o=Math.max(o,e),e}),a=s?3:2;v.forEach(function(e,s){var l=t("[data-chart="+s+"]"),c=r[s],u=c/(o-n),h=120*u+240;l.find("span.barchart-label").text(i(c,a)+"個"),l.find("span.barchart").css({width:100*u+"%",backgroundColor:"hsla("+h+", 80%, 50%, 0.5)"})})}function u(){var e=parseInt(t("[name=objective]:input").val()),n=parseInt(t("[name=current]:input").val()),o=Math.max(e-n,0);v.forEach(function(e,n){var s=t("[data-chart="+n+"]"),r=o?Math.ceil(o/e.expectation):0;s.find("span.marathon").text("残り"+i(r)+"周")})}function h(){var o=parseInt(t("[name=current]:input").val()),s=parseInt(t("[name=objective]:input").val()),r=v[parseInt(t("[name=estimate_map]:input").val())],a=Math.max(s-o,0),l=Math.ceil(a/r.expectation);t("#estimate_required_marathon").text(i(l));var c=(new Date).getTime(),u=f.reduce(function(t,e){return t+Math.max(e[1],c)-Math.max(e[0],c)},0),h=0+t("[name=estimate_natural_recovery]:input").prop("checked"),p=Math.floor(u/18e4)*h,d=Math.floor(u/36e5)*h,m=parseInt(t("[name=estimate_rank]").val()),g=e(m),y=n(m),b=Math.ceil(r.charisma*l),_=Math.ceil(r.stamina*l),w=t("[name=estimate_use_crystal]:input").val(),x=0+("both"===w||"charisma"===w),C=0+("both"===w||"stamina"===w),E=Math.ceil(Math.max(b-p,0)/g)*x,k=Math.ceil(Math.max(_-d,0)/y)*C,D=E+k;t("#estimate_required_crystal").text(i(D));var N=0===E?"diff-eq":E>0?"diff-plus":"diff-minus";t("#estimate_required_crystal_for_charisma").attr("class",N).text(i(E)),N=0===k?"diff-eq":k>0?"diff-plus":"diff-minus",t("#estimate_required_crystal_for_stamina").attr("class",N).text(i(k));var T=p+g*E,S=d+y*k,I=Math.floor(Math.min(T/r.charisma,S/r.stamina,l));t("#estimate_available_marathon").text(i(I));var O=I-l;N=0===O?"diff-eq":O>0?"diff-plus":"diff-minus";var M=(O>=0?"+":"")+i(O);t("#estimate_available_marathon_diff").attr("class",N).text(M);var P=r.charisma*I;t("#estimate_using_charisma").text(i(P)),O=P-b,N=0===O?"diff-eq":O>0?"diff-plus":"diff-minus",M=(O>=0?"+":"")+i(O),t("#estimate_using_charisma_diff").attr("class",N).text(M);var A=Math.ceil(r.stamina*I);t("#estimate_using_stamina").text(i(A)),O=A-_,N=0===O?"diff-eq":O>0?"diff-plus":"diff-minus",M=(O>=0?"+":"")+i(O),t("#estimate_using_stamina_diff").attr("class",N).text(M);var R=o+Math.ceil(r.expectation*I);t("#estimate_result_collection").text(i(R)),O=R-s,N=0===O?"diff-eq":O>0?"diff-plus":"diff-minus",M=(O>=0?"+":"")+i(O),t("#estimate_result_collection_diff").attr("class",N).text(M)}function p(){var e=parseInt(t("[name=current]:input").val()),n=parseInt(t("[name=objective]:input").val()),o=(new Date).getTime(),s=f.reduce(function(t,e){return t+Math.max(e[1],o)-Math.max(e[0],o)},0),r=Math.max(n-e,0),a=s/864e5,l=r/Math.max(a,1),c=s/36e5,u=r/Math.max(c,1),h=s/18e5,p=r/Math.max(h,1),d=i(l,3).split(".");t("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=i(u,3).split("."),t("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=i(p,3).split("."),t("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),t("#remains_days").text(i(a,0)),t("#remains_hours").text(i(c,0)),t("#remains_minutes").text(i(60*c,0));var m,g=100*Math.min(e,n),v=parseInt(g/n)||0,y=N-s,b=parseInt(100*y/N)||0;m=100===v?"progress-bar-success":v>=b?"progress-bar-success":v>.7*b?"progress-bar-info":v>.4*b?"progress-bar-warning":"progress-bar-danger",t("#objective_progress > .progress-bar").width(v+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(m).children("span").text(v+"%達成"),t("#period_progress > .progress-bar").width(b+"%").children("span").text(b+"%経過");var _=e*N/y;t("#prediction_collection").text(i(Math.floor(_)));var w=Math.min(_/n,1),x=t("#objective_progress").width(),C=x*w-47;t(".pointer").css("left",C+"px");var E=230>x-C?-250:0;t(".pointer-label").css("margin-left",E+"px");var k="";if(n>e&&_>=n){var D,T;f.forEach(function(t){D=D||t[0],T=T||t[1]});var S=n/_*N,I=f.reduce(function(t,e){if(t)return t;var n=e[1]-e[0];return S>n?(S-=n,null):new Date(e[0]+S)},null),O=I.getMonth(),M=I.getDate(),P=I.getHours(),A=I.getMinutes(),R=O+1+"/"+M+" "+(10>P?"0"+P:P)+":"+(10>A?"0"+A:A);k=R+"頃に目標達成できそうよ。"}t("#prediction_completion_date").text(k)}function d(){var p=(new Date).getTime(),d=t("#period_dates");if(f.forEach(function(e){var n=e[1]-e[0],i=100*n/N+"%",o=new Date(e[0]),s=new Date(e[1]-1),r=o.getMonth()+1+"/"+o.getDate()+"-"+(s.getMonth()+1)+"/"+s.getDate(),a=p>=e[0]&&p<e[1],l=p>=e[1],c=a?"progress-bar-active":l?"progress-bar-expired":"progress-bar-remain";t('<div class="progress-bar">').width(i).text(r).addClass(c).appendTo(d)}),t('[data-objective-mode="'+b+'"]').show(),t('[data-objective-mode][data-objective-mode!="'+b+'"]').remove(),t("[name=current]:input").click(function(){this.select()}).TouchSpin({min:0,max:_,step:1}),"achievement"===b){var D=t("[name=objective]:input");t.each(m,function(e,n){t("<option />").attr("value",e).text(n+" ("+e+"個)").appendTo(D)})}else{t("select[name=objective]").click(function(){this.select()});var T=t("#increse_objective_list");g.forEach(function(e){t('<button class="btn btn-default" name="add"  type="button" />').val(e.value).attr("title",e.name).append(t('<i class="fa fa-arrow-up" />')).append(t("<span />").addClass("icon icon-"+e.unit)).appendTo(T)})}t("button[name=add]").click(function(e){e.preventDefault();var n=parseInt(t(this).val()),i=parseInt(t("[name=objective]:input").val());t("[name=objective]:input").val(i+n).trigger("change")}),t("button[name=reset]").click(function(e){e.preventDefault(),t("[name=objective]:input").val(0).trigger("change")}),t("[name=expectation]:input").change(function(){c(),u()}).val(C);var S=t("#prize_list");g.forEach(function(e){t('<div class="prize-list" />').append(t('<h4 class="prize-list-header" />').text(e.name).append(t('<span class="prize-value" />').text("@"+e.value))).append(t('<div class="prize-list-body" />').attr("data-prize",e.unit)).appendTo(S)});var I=v.reduce(function(t,e){return Math.max(t,e.drops.length)},0),O=s();O.maps.forEach(function(t,e){v[e].expectation=t.expectation}),k=O.syncCurrentEnabled;var M,P=function(){M&&clearTimeout(M),setTimeout(function(){var e=t("#map");v.forEach(function(t,n){var o=e.find("tr[data-map="+n+"]"),s=Math.max(parseInt(o.find("input[name=num_laps]").val())||0,0),r=Math.max(parseInt(o.find("input[name=num_drops]").val())||0,0),a=o.find("input[name=actual_expectation]"),l=Math.max(parseFloat(a.val())||0,0);"aggregate"===E&&(l=r/s||0,a.val(l));var c=Math.floor(l);o.find("button[name=increase]").val(c).text("+"+i(c)),O.maps[n].numLaps=s,O.maps[n].numDrops=r,t.expectation=O.maps[n].expectation=l}),r(O),h(),c(),u()},100)},A=t("#map").on("keyup","input[type=number]",function(){P(),o()}).on("change","input[type=number]",function(){P(),o()}).on("click","input[type=number]",function(){this.select()}).on("click","button[name=increase]",function(e){e.preventDefault();var n=t(this).closest("tr"),i=n.find("input[name=num_laps]"),o=parseInt(i.val())+1;i.val(o);var s=n.find("input[name=num_drops]"),r=parseInt(s.val())+parseInt(this.value);s.val(r),s.trigger("change")}).on("change","input[name=expectation_input_mode]",function(){E=t(this).val(),O.expectationInputMode=E,r(O),A.find("input[name=num_laps], input[name=num_drops]").parent().toggle("aggregate"===E).end().end().find("input[name=actual_expectation]").parent().toggle("direct"===E).end().end().find("input[name=sync]").closest("tfoot").toggle("aggregate"===E),P()}).on("click","input[name=sync]",function(){O.syncCurrentEnabled=k=this.checked,r(O),o()}),R=A.find("tbody");if(v.forEach(function(e,n){var i=O.maps[n],o=t("<td />").attr("data-chart",n).append(t('<span class="barchart" />')).append(t('<span class="barchart-label" />')).append(t('<span class="marathon" />'));t("<tr />").attr("data-map",n).append(t("<th />").text(e.name)).append(t("<td />").text(""+e.charisma+"/"+e.stamina)).append(function(){for(var n=e.drops.map(function(e){var n=e.icon?t("<i />").attr("title",e.name).addClass("icon icon-"+e.icon):t("<span />").text(e.name),i=e.set?t('<span class="badge" />').text("x"+e.set):null;return t("<td />").append(n).append(i)}),i=e.drops.length;I>i;i++)n.push(t("<td />"));return n}).append(function(){var e=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon">1周の期待値</span>')).append(t('<input type="number" name="actual_expectation" min="0" class="form-control" />').val(i.expectation)),n=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon">周回</span>')).append(t('<input type="number" name="num_laps" min="0" class="form-control" />').val(i.numLaps)).append(t('<span class="input-group-addon">ドロップ</span>')).append(t('<input type="number" name="num_drops" min="0" class="form-control" />').val(i.numDrops)).append(t('<span class="input-group-btn"><button name="increase" class="btn btn-default"></button></span>'));return t('<td class="expectation" />').append(n).append(e)}).append(o).prependTo(R)}),t("#map thead th.drops").attr("colspan",I),w){var F=t("#rewards tbody");y.forEach(function(e){var n=t('<span class="icon" />').addClass("icon-"+e.unit);t("<tr />").attr("data-amount",e.amount).append(t('<td class="text-right" />').html('<span class="diff"></span> '+e.amount)).append(t("<td />").html(n)).appendTo(F)})}var z=t("[name=estimate_map]:input").change(function(){h(),O.estimateMap=parseInt(t(this).val()),r(O)});v.forEach(function(e,n){t("<option />").val(n).text(e.name+" ("+e.charisma+"/"+e.stamina+")").prependTo(z)});for(var L=t("[name=estimate_rank]:input").change(function(){h(),O.estimateRank=parseInt(t(this).val()),r(O)}),j=1;200>=j;j++){var H=e(j),U=n(j),W=""+j+" ("+H+"/"+U+")";t("<option />").val(j).text(W).appendTo(L)}var V=t("[name=estimate_use_crystal]").change(function(){h(),O.estimateUseCrystal=t(this).val(),r(O)}),$=t("[name=estimate_natural_recovery]:input").change(function(){h(),O.estimateNaturalRecovery=this.checked,r(O)});t("*[title]").tooltip(),t("[name=current]:input").val(O.current),"exchange"==b?t("[name=objective]:input").val(O.objective):t("[name=objective]:input").val([O.objective]),t("[name=current]:input, [name=objective]:input").change(function(){O[this.name]=t(this).val(),r(O),a(),l(),u(),h()}),z.val(O.estimateMap),L.val(O.estimateRank),V.val(O.estimateUseCrystal),$.prop("checked",O.estimateNaturalRecovery),"exchange"==b&&l(),w&&a(),A.find("input[name=sync]").prop("checked",k).end().find('input[name=expectation_input_mode][value="'+O.expectationInputMode+'"]').prop("checked",!0).trigger("change").parent().addClass("active"),t("#initialize-button").on("click",function(){t.removeCookie(x),window.location.reload()}),t("#estimate_tutorial").on("click","a, button",function(e){console.log(e.target),"a"!==e.target.nodeName.toLowerCase()&&e.preventDefault(),O.estimateTutorialHidden=!0,r(O),t("#estimate_tutorial").fadeOut()}).toggle(!O.estimateTutorialHidden)}var f=[["2015/08/27 16:00:00","2015/09/03 10:00:00"],["2015/09/03 15:00:00","2015/09/10 10:00:00"]],m={25:"ピピンが仲間になる",50:"スキルレベル2",100:"初期レベル10",150:"スキルレベル3",200:"出撃コスト-1",250:"スキルレベル4",300:"出撃コスト-2",400:"スキルレベル5",500:"初期レベル20",600:"スキルレベル6",700:"出撃コスト-3",800:"スキルレベル7",900:"初期レベル30",1000:"スキルレベル8",1100:"出撃コスト-4",1200:"初期レベル40",1300:"スキルレベル9",1400:"出撃コスト-5",1500:"スキルレベル10",1600:"初期レベル50",1620:"+ 黒精霊",1665:"+ ゴールドアーマー",1710:"+ 黒精霊",1755:"+ プラチナアーマー",1800:"+ 虹精霊"},g=[],v=[{name:"紅の霧の脅威",charisma:20,stamina:1,expectation:0,drops:[{name:"魔神の骨片1",icon:"demon-bone-1",set:2},{name:"花束",icon:"flower"}]},{name:"密林の防衛戦",charisma:30,stamina:2,expectation:0,drops:[{name:"魔神の骨片1",icon:"demon-bone-1",set:3},{name:"フューネス",icon:"funes"},{name:"魔水晶",icon:"demon-crystal-1"}]},{name:"猛追の奪還戦",charisma:40,stamina:4,expectation:0,drops:[{name:"魔神の骨片3",icon:"demon-bone-3",set:1},{name:"魔神の骨片5",icon:"demon-bone-1",set:3},{name:"ソーマ",icon:"soma"},{name:"バラッド",icon:"barrad"}]},{name:"魔神の骨の力",charisma:50,stamina:7,expectation:0,drops:[{name:"魔神の骨片3",icon:"demon-bone-5",set:2},{name:"魔神の骨片1",icon:"demon-bone-3",set:2},{name:"ジョバンニ",icon:"giovanni"},{name:"白銀の精霊",icon:"platinum-sprit"}]},{name:"忍者と盗賊",charisma:80,stamina:9,expectation:0,drops:[{name:"魔神の骨片5",icon:"demon-bone-5",set:3},{name:"リカルド",icon:"ricard"},{name:"白バケツ",icon:"platinum-bucket"},{name:"魔水晶",icon:"demon-crystal-2"}]}],y=[{amount:45,unit:"gold-bucket"},{amount:90,unit:"gold-sprit"},{amount:135,unit:"platinum-bucket"},{amount:180,unit:"gold-sprit"},{amount:225,unit:"crystal-fragment"},{amount:270,unit:"platinum-sprit"},{amount:315,unit:"gold-bucket"},{amount:360,unit:"platinum-sprit"},{amount:405,unit:"platinum-bucket"},{amount:450,unit:"black-sprit"},{amount:495,unit:"crystal-fragment"},{amount:540,unit:"black-sprit"},{amount:585,unit:"gold-bucket"},{amount:630,unit:"rainbow-sprit"},{amount:675,unit:"platinum-bucket"},{amount:720,unit:"platinum-sprit"},{amount:765,unit:"crystal-fragment"},{amount:810,unit:"platinum-sprit"},{amount:855,unit:"gold-bucket"},{amount:900,unit:"black-sprit"},{amount:945,unit:"platinum-bucket"},{amount:990,unit:"platinum-sprit"},{amount:1035,unit:"crystal-fragment"},{amount:1080,unit:"platinum-sprit"},{amount:1125,unit:"gold-bucket"},{amount:1170,unit:"black-sprit"},{amount:1215,unit:"platinum-bucket"},{amount:1260,unit:"black-sprit"},{amount:1305,unit:"crystal-fragment"},{amount:1350,unit:"rainbow-sprit"},{amount:1395,unit:"gold-bucket"},{amount:1440,unit:"platinum-sprit"},{amount:1485,unit:"platinum-bucket"},{amount:1530,unit:"platinum-sprit"},{amount:1575,unit:"crystal-fragment"},{amount:1620,unit:"black-sprit"},{amount:1665,unit:"gold-bucket"},{amount:1710,unit:"black-sprit"},{amount:1755,unit:"platinum-bucket"},{amount:1800,unit:"rainbow-sprit"}],b="achievement",_=1/0,w=!0,x="demon-bone-timer",C="stamina",E="direct",k=!0,D={current:20,objective:1500,estimateMap:3,estimateRank:100,estimateUseCrystal:"both",estimateNaturalRecovery:!0,expectationInputMode:E,syncCurrentEnabled:k,maps:v.map(function(t){return{numLaps:0,numDrops:0,expectation:t.expectation}}),estimateTutorialHidden:!1};f=f.map(function(t){return t.map(Date.parse)});var N=f.reduce(function(t,e){return t+e[1]-e[0]},0);t(function(){d(),setInterval(p,1e3)})}).call(e,n(1))}]);