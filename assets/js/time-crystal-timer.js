webpackJsonp([4],[function(a,t,e){(function(a){"use strict";function t(){var t=parseInt(a("[name=current]:input").val()),e=parseInt(a("[name=objective]:input").val()),i=(new Date).getTime(),r=f.reduce(function(a,t){return a+Math.max(t[1],i)-Math.max(t[0],i)},0),s=Math.max(e-t,0),o=r/864e5,c=s/Math.max(o,1),m=r/36e5,p=s/Math.max(m,1),u=r/18e5,l=s/Math.max(u,1),d=n(c,3).split(".");a("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=n(p,3).split("."),a("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=n(l,3).split("."),a("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),a("#remains_days").text(n(o,0)),a("#remains_hours").text(n(m,0)),a("#remains_minutes").text(n(60*m,0));var h,v=100*Math.min(t,e),g=parseInt(v/e)||0,x=D-r,b=parseInt(100*x/D)||0;h=100==g?"progress-bar-success":g>=b?"progress-bar-success":g>.7*b?"progress-bar-info":g>.4*b?"progress-bar-warning":"progress-bar-danger",a("#objective_progress > .progress-bar").width(g+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(h).children("span").text(g+"%達成"),a("#period_progress > .progress-bar").width(b+"%").children("span").text(b+"%経過");var _=t*D/x;a("#prediction_collection").text(n(Math.floor(_)));var M=Math.min(_/e,1),y=a("#objective_progress").width(),k=y*M-47;a(".pointer").css("left",k+"px");var w=230>y-k?-250:0;a(".pointer-label").css("margin-left",w+"px");var j="";if(e>t&&_>=e){var I,C;f.forEach(function(a){I=I||a[0],C=C||a[1]});var T=e/_*D,q=f.reduce(function(a,t){if(a)return a;var e=t[1]-t[0];return T>e?(T-=e,null):new Date(t[0]+T)},null),E=q.getMonth(),z=q.getDate(),R=q.getHours(),N=q.getMinutes(),S=E+1+"/"+z+" "+(10>R?"0"+R:R)+":"+(10>N?"0"+N:N);j=S+"頃に目標達成できそうよ。"}a("#prediction_completion_date").text(j)}function n(a,t){return t=t||0,a===1/0||a===-(1/0)?"∞":a.toFixed(t)}function i(){var t=(new Date).getTime(),e=a("#period_dates");if(f.forEach(function(n){var i=n[1]-n[0],r=100*i/D+"%",s=new Date(n[0]),o=new Date(n[1]-1),c=s.getMonth()+1+"/"+s.getDate()+"-"+(o.getMonth()+1)+"/"+o.getDate(),m=t>=n[0]&&t<n[1],p=t>=n[1],u=m?"progress-bar-active":p?"progress-bar-expired":"progress-bar-remain";a('<div class="progress-bar">').width(r).text(c).addClass(u).appendTo(e)}),a('[data-objective-mode="'+h+'"]').show(),a('[data-objective-mode][data-objective-mode!="'+h+'"]').remove(),a("[name=current]:input").click(function(){this.select()}).TouchSpin({min:0,max:v,step:1}),"achievement"==h){var n=a("[name=objective]:input");a.each(j,function(t,e){a("<option />").attr("value",t).text(e+" ("+t+"個)").appendTo(n)})}else{a("select[name=objective]").click(function(){this.select()});var i=a("#increse_objective_list");I.forEach(function(t){a('<button class="btn btn-default" name="add"  type="button" />').val(t.value).attr("title",t.name).append(a('<i class="fa fa-arrow-up" />')).append(a("<span />").addClass("icon icon-"+t.unit)).appendTo(i)})}a("button[name=add]").click(function(t){t.preventDefault();var e=parseInt(a(this).val()),n=parseInt(a("[name=objective]:input").val());a("[name=objective]:input").val(n+e).trigger("change")}),a("button[name=reset]").click(function(t){t.preventDefault(),a("[name=objective]:input").val(0).trigger("change")}),a("[name=expectation]:input").change(function(){m(),p()}).val("drop");var g=a("#prize_list");I.forEach(function(t){a('<div class="prize-list" />').append(a('<h4 class="prize-list-header" />').text(t.name).append(a('<span class="prize-value" />').text("@"+t.value))).append(a('<div class="prize-list-body" />').attr("data-prize",t.unit)).appendTo(g)});var x=C.reduce(function(a,t){return Math.max(a,t.drops.length)},0),_=a("#map tbody");if(C.forEach(function(t,e){var n=a("<td />").attr("data-chart",e).append(a('<span class="barchart" />')).append(a('<span class="barchart-label" />')).append(a('<span class="marathon" />'));a("<tr />").append(a("<th />").text(t.name)).append(a("<td />").text(""+t.charisma+"/"+t.stamina)).append(function(){for(var e=t.drops.map(function(t){var e=t.icon?a("<i />").attr("title",t.name).addClass("icon icon-"+t.icon):a("<span />").text(t.name),n=t.set?a('<span class="badge" />').text("x"+t.set):null;return a("<td />").append(e).append(n)}),n=t.drops.length;x>n;n++)e.push(a("<td />"));return e}).append(n).appendTo(_)}),a("#map thead th.drops").attr("colspan",x),b){var M=a("#rewards tbody");T.forEach(function(t){a("<tr />").attr("data-amount",t.amount).append(a('<td class="text-right" />').html('<span class="diff"></span> '+t.amount)).append(a("<td />").html('<span class="icon icon-'+t.unit+'"></span>')).appendTo(M)})}var y=a("[name=estimate_map]:input").change(function(){u(),S.estimateMap=parseInt(a(this).val()),s(S)});C.forEach(function(t,e){a("<option />").val(e).text(t.name+" ("+t.charisma+"/"+t.stamina+")").appendTo(y)});for(var k=a("[name=estimate_rank]:input").change(function(){u(),S.estimateRank=parseInt(a(this).val()),s(S)}),w=1;200>=w;w++){var q=l(w),E=d(w),z=""+w+" ("+q+"/"+E+")";a("<option />").val(w).text(z).appendTo(k)}var R=a("[name=estimate_use_crystal]").change(function(){u(),S.estimateUseCrystal=a(this).val(),s(S)}),N=a("[name=estimate_natural_recovery]:input").change(function(){u(),S.estimateNaturalRecovery=this.checked,s(S)});a("*[title]").tooltip();var S=r();a("[name=current]:input").val(S.current),"exchange"==h?a("[name=objective]:input").val(S.objective):a("[name=objective]:input").val([S.objective]),a("[name=current]:input, [name=objective]:input").change(function(){S[this.name]=a(this).val(),s(S),o(),c(),p(),u()}),y.val(S.estimateMap),k.val(S.estimateRank),R.val(S.estimateUseCrystal),N.prop("checked",S.estimateNaturalRecovery),"exchange"==h&&c(),b&&o(),m(),p(),u()}function r(){var t={},e={current:x,objective:g,estimateMap:M,estimateRank:y,estimateUseCrystal:k,estimateNaturalRecovery:w};try{t=JSON.parse(a.cookie(_))}catch(n){}return a.extend(e,t)}function s(t){a.cookie(_,JSON.stringify(t),{expires:30})}function o(){if(b){var t=45,e=7,n=parseInt(a("[name=current]:input").val()),i=a("#rewards tbody");i.find("tr").removeClass("active").each(function(){var i=a(this),r=i.attr("data-amount")-n;if(-t>r)i.hide();else if(0>r)i.css("opacity",.5).show();else if(t>r)i.addClass("active").css("opacity",1).show();else if(t*e>r){var s=1-Math.floor(r/t)*t/(t*(e+1));i.show().css("opacity",s)}else i.hide();var o=0===r?"diff-eq":r>0?"diff-plus":"diff-minus",c=0===r?"":(r>0?"+":"")+r;i.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(o).text(c)})}}function c(){if("exchange"==h){var t=parseInt(a("[name=current]:input").val());I.forEach(function(e){for(var n=a('[data-prize="'+e.unit+'"]').empty(),i=0;t>i;i+=e.value){var r=a("<i />").addClass("icon icon-"+e.unit),s=25*Math.min(t-i,e.value)/e.value;a('<div class="prize-gage" />').append(r.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-s})).append(r.clone().css({width:s+"px"})).appendTo(n)}})}}function m(){var t=a("[name=expectation]:input").val(),e=1/0,i=0,r="drop"==t?null:t,s=C.map(function(a){var t=a.expectation/(r&&a[r]||1);return e=0,i=Math.max(i,t),t}),o=r?3:2;C.forEach(function(t,r){var c=a("[data-chart="+r+"]"),m=s[r],p=m/(i-e),u=120*p+240;c.find("span.barchart-label").text(n(m,o)+"個"),c.find("span.barchart").css({width:100*p+"%",backgroundColor:"hsla("+u+", 80%, 50%, 0.5)"})})}function p(){var t=parseInt(a("[name=objective]:input").val()),e=parseInt(a("[name=current]:input").val()),i=Math.max(t-e,0);C.forEach(function(t,e){var r=a("[data-chart="+e+"]"),s=i?Math.ceil(i/t.expectation):0;r.find("span.marathon").text("残り"+n(s)+"周")})}function u(){var t=parseInt(a("[name=current]:input").val()),e=parseInt(a("[name=objective]:input").val()),n=C[parseInt(a("[name=estimate_map]:input").val())],i=Math.max(e-t,0),r=Math.ceil(i/n.expectation);a("#estimate_required_marathon").text(r);var s=(new Date).getTime(),o=f.reduce(function(a,t){return a+Math.max(t[1],s)-Math.max(t[0],s)},0),c=0+a("[name=estimate_natural_recovery]:input").prop("checked"),m=Math.floor(o/18e4)*c,p=Math.floor(o/36e5)*c,u=parseInt(a("[name=estimate_rank]").val()),h=l(u),v=d(u),g=Math.ceil(n.charisma*r),x=Math.ceil(n.stamina*r),b=a("[name=estimate_use_crystal]:input").val(),_=0+("both"===b||"charisma"===b),M=0+("both"===b||"stamina"===b),y=Math.ceil(Math.max(g-m,0)/h)*_,k=Math.ceil(Math.max(x-p,0)/v)*M,w=y+k;a("#estimate_required_crystal").text(w);var j=0===y?"diff-eq":y>0?"diff-plus":"diff-minus";a("#estimate_required_crystal_for_charisma").attr("class",j).text(y),j=0===k?"diff-eq":k>0?"diff-plus":"diff-minus",a("#estimate_required_crystal_for_stamina").attr("class",j).text(k);var I=m+h*y,T=p+v*k,D=Math.floor(Math.min(I/n.charisma,T/n.stamina,r));a("#estimate_available_marathon").text(D);var q=D-r;j=0===q?"diff-eq":q>0?"diff-plus":"diff-minus";var E=(q>=0?"+":"")+q;a("#estimate_available_marathon_diff").attr("class",j).text(E);var z=n.charisma*D;a("#estimate_using_charisma").text(z),q=z-g,j=0===q?"diff-eq":q>0?"diff-plus":"diff-minus",E=(q>=0?"+":"")+q,a("#estimate_using_charisma_diff").attr("class",j).text(E);var R=Math.ceil(n.stamina*D);a("#estimate_using_stamina").text(R),q=R-x,j=0===q?"diff-eq":q>0?"diff-plus":"diff-minus",E=(q>=0?"+":"")+q,a("#estimate_using_stamina_diff").attr("class",j).text(E);var N=t+Math.ceil(n.expectation*D);a("#estimate_result_collection").text(N),q=N-e,j=0===q?"diff-eq":q>0?"diff-plus":"diff-minus",E=(q>=0?"+":"")+q,a("#estimate_result_collection_diff").attr("class",j).text(E)}function l(a){return 27+(100>=a?3*a:300+a-100)}function d(a){return 12+(100>=a?0:Math.floor((a-100)/20)+1)}e(2);var f=[["2015/03/14 00:00:00","2015/03/16 00:00:00"],["2015/03/21 00:00:00","2015/03/23 00:00:00"],["2015/03/28 00:00:00","2015/03/30 00:00:00"],["2015/04/04 00:00:00","2015/04/06 00:00:00"]].map(function(a){return a.map(Date.parse)}),h="exchange",v=1/0,g=300,x=20,b=!0,_="time-crystal-timer",M=0,y=100,k="both",w=!0,j={},I=[{value:500,unit:"time-sprit",name:"時の精霊",limit:1},{value:150,unit:"ekidona",name:"エキドナ",limit:1/0}],C=[{name:"大長老",charisma:50,stamina:5,expectation:5.49,drops:[{name:"ガドラス",icon:"gadrus",set:2},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶3",icon:"time-crystal-2",set:3}]},{name:"決戦",charisma:40,stamina:5,expectation:6,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶2",icon:"time-crystal-2",set:3}]},{name:"竜の巣",charisma:35,stamina:4,expectation:4.56,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier",set:2},{name:"刻水晶3",icon:"time-crystal-2",set:2}]},{name:"闇の世界",charisma:30,stamina:3,expectation:3,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶1",icon:"time-crystal-1",set:3}]},{name:"竜王",charisma:70,stamina:3,expectation:3.44,drops:[{name:"ガドラス",icon:"gadrus",set:2},{name:"竜戦士",icon:"dragon-soldier",set:2},{name:"刻水晶2",icon:"time-crystal-2",set:2}]},{name:"ドラゴニュート",charisma:40,stamina:2,expectation:2.28,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶1",icon:"time-crystal-1",set:3}]},{name:"乱戦",charisma:30,stamina:2,expectation:1.92,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶1",icon:"time-crystal-1",set:2}]},{name:"再侵攻",charisma:20,stamina:1,expectation:.71,drops:[{name:"ガドラス",icon:"gadrus"},{name:"竜戦士",icon:"dragon-soldier"},{name:"刻水晶1",icon:"time-crystal-1"}]},{name:"大地の大穴",charisma:10,stamina:0,expectation:0,drops:[]}],T=[],D=f.reduce(function(a,t){return a+t[1]-t[0]},0);a(function(){i(),setInterval(t,1e3)})}).call(t,e(1))}]);