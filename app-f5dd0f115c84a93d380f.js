webpackJsonp([0],[,,,,,function(t,e){},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Timer={template:n(19),bindings:{timerObject:"<",refresh:"<"},controller:function(t,e){var n=this,i=function(){n.timerObject.elapsed+=1e3,n.elapsedTime+=1e3},r=function(){t.cancel(o),o=null},o=null;this.showForm=!1,this.hideForm=function(){n.showForm=!1},this.update=function(){n.refresh()},this.delete=function(){e.deleteTimer({id:n.timerObject.id}).then(n.refresh)},this.$onInit=function(){n.isRunning=Boolean(n.timerObject.runningSince);var t=n.timerObject.elapsed;n.isRunning&&(t+=Date.now()-n.timerObject.runningSince),n.elapsedTime=t},this.$doCheck=function(){n.isRunning?null===o&&(o=t(i,1e3)):r()},this.$onDestroy=function(){r()},this.toggleTimer=function(){n.isRunning?e.stopTimer({id:n.timerObject.id,stop:Date.now()}).then(n.isRunning=!1):e.startTimer({id:n.timerObject.id,start:Date.now()}).then(n.isRunning=!0)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.TimerActionButton={template:n(20),bindings:{isRunning:"<"},controller:function(){}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.TimerDashboard={template:n(21),controller:function(t,e){var n=this;this.isLoading=!1,this.showError=!1,this.loadTimers=function(){n.isLoading=!0,n.showError=!1,t.getTimers().then(function(t){n.timers=t}).catch(function(t){e.log(t),n.showError=!0}).finally(function(){n.isLoading=!1})},this.$onInit=function(){n.loadTimers()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TimerForm=void 0;var i=n(4),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.TimerForm={template:n(22),bindings:{isEditing:"<",complete:"<",cancel:"<",timerData:"<"},controller:function(t){var e=this;this.isLoading=!1,this.showError=!1;var n=function(){return t.createTimer({title:e.timerData.title,project:e.timerData.project,id:(0,r.default)(),elasped:0})},i=function(){return t.updateTimer({title:e.timerData.title,project:e.timerData.project,id:e.timerData.id})};this.handleCancelButton=function(t){t.stopPropagation(),e.cancel()},this.submitForm=function(){e.isLoading=!0,e.showError=!1,(e.isEditing?i:n)().then(function(){e.complete()}).catch(function(){e.showError=!0}).finally(function(){e.isLoading=!1})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ToggleableTimerForm={template:n(23),bindings:{refresh:"<"},controller:function(){var t=this;this.$onInit=function(){t.showForm=!1},this.dismiss=function(){t.showForm=!1},this.update=function(){t.dismiss(),t.refresh()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.MsToHuman=function(){var t=function(t,e){for(var n=t;n.length<e;)n="0"+n;return n};return function(e){var n=Math.floor(e/1e3%60),i=Math.floor(e/1e3/60%60),r=Math.floor(e/1e3/60/60);return[t(r.toString(),2),t(i.toString(),2),t(n.toString(),2)].join(":")}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.TimerService=function(t){var e=function(){return t.get("/api/timers",{headers:{Accept:"application/json"}}).then(function(t){return t.data})},n=function(e){return t.post("/api/timers",e)},i=function(e){return t.put("/api/timers",e)},r=function(e){return t.delete("/api/timers?id="+e.id)};return{getTimers:e,createTimer:n,updateTimer:i,startTimer:function(e){return t.post("/api/timers/start",e)},stopTimer:function(e){return t.post("/api/timers/stop",e)},deleteTimer:r}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.globalInterceptor=function(t){return{request:function(e){return e.url=t+e.url,e}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.httpProvider=function(t){t.interceptors.push("globalInterceptor")}},function(t,e,n){"use strict";function i(t,e,n){n.html5Mode(!0).hashPrefix("!"),e.otherwise("/"),t.state("app",{url:"/",component:"timerDashboard"})}i.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},,,function(t,e){t.exports='<div class="ui centered card" ng-if="!$ctrl.showForm">\n\t<div class="content">\n\t\t<div class="header">\n\t\t\t{{$ctrl.timerObject.title}}\n\t\t</div>\n\t\t<div class="meta">\n\t\t\t{{$ctrl.timerObject.project}}\n\t\t</div>\n\t\t<div class="center aligned description">\n\t\t\t<h2>\n\t\t\t\t{{$ctrl.elapsedTime | msToHuman}}\n\t\t\t</h2>\n\t\t</div>\n\t\t<div class="extra content">\n\t\t\t<span class="right floated edit icon" ng-click="$ctrl.showForm = true">\n\t\t\t\t<i class="edit icon"></i>\n\t\t\t</span>\n\t\t\t<span class="right floated trash icon" ng-click="$ctrl.delete()">\n\t\t\t\t<i class="trash icon"></i>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n\t\n\t<timer-action-button is-running="$ctrl.isRunning" ng-click="$ctrl.toggleTimer()"></timer-action-button>\n</div>\n<timer-form\n\tng-if="$ctrl.showForm"\n\tcancel="$ctrl.hideForm"\n\tcomplete="$ctrl.update"\n\ttimer-data="$ctrl.timerObject"\n\tis-editing="true">\n</timer-form>'},function(t,e){t.exports="<div class=\"ui bottom attached basic button\" ng-class=\"{red: $ctrl.isRunning, green: !$ctrl.isRunning}\">\n\t{{$ctrl.isRunning ? 'Stop' : 'Play'}}\n</div>"},function(t,e){t.exports='<div class="ui three column centered grid">\n\t<div class="column">\n\t\t<div class="ui segment" ng-if="$ctrl.isLoading" style="height: 85px;">\n\t\t\t<div class="ui active dimmer">\n\t\t\t\t<div class="ui text loader">Loading</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="ui negative message" ng-if="$ctrl.showError">\n\t\t\t<div class="header">\n\t\t\t\tOperation failed\n\t\t\t</div>\n\t\t\t<p>We are sorry we can not load timers</p>\n\t\t</div>\n\t\t<div id="timers" ng-if="!$ctrl.isLoading">\n\t\t\t<timer\n\t\t\t\tng-repeat="timer in $ctrl.timers"\n\t\t\t\trefresh="$ctrl.loadTimers"\n\t\t\t\ttimer-object="timer">\n\t\t\t</timer>\n\t\t\t<toggleable-timer-form refresh="$ctrl.loadTimers" ng-if="!$ctrl.showError"></toggleable-timer-form>\n\t\t\t<button class="ui basic button icon" ng-if="$ctrl.showError" ng-click="$ctrl.loadTimers()">\n\t\t\t\tRetry\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>'},function(t,e){t.exports='<div class="ui centered card">\n\t<div class="content">\n\t\t<div class="ui segment" ng-if="$ctrl.isLoading" style="height: 85px;">\n\t\t\t<div class="ui active dimmer">\n\t\t\t\t<div class="ui text loader">Loading</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="ui form" ng-if="!$ctrl.isLoading">\n\t\t\t<form name="timerForm" novalidate ng-submit="$ctrl.submitForm()">\n\t\t\t<div class="field">\n\t\t\t\t<label>Title</label>\n\t\t\t\t<input\n\t\t\t\t\ttype="text"\n\t\t\t\t\tng-minlength="3"\n\t\t\t\t\trequired\n\t\t\t\t\tng-model="$ctrl.timerData.title" />\n\t\t\t</div>\n\t\t\t<div class="field">\n\t\t\t\t<label>Project</label>\n\t\t\t\t<input\n\t\t\t\t\ttype="text"\n\t\t\t\t\tng-minlength="3"\n\t\t\t\t\trequired\n\t\t\t\t\tng-model="$ctrl.timerData.project" />\n\t\t\t</div>\n\t\t\t<div class="ui negative message" ng-if="$ctrl.showError">\n\t\t\t\t<i class="close icon" ng-click="$ctrl.showError = false"></i>\n\t\t\t\t<div class="header">\n\t\t\t\t\tOperation failed\n\t\t\t\t</div>\n\t\t\t\t<p>There was an error completing your request: please retry</p>\n\t\t\t</div>\n\t\t\t<div class="ui two bottom attached buttons">\n\t\t\t\t<button class="ui basic blue button" ng-disabled="timerForm.$invalid">\n\t\t\t\t\t{{$ctrl.isEditing ? \'Update\' : \'Save\'}}\n\t\t\t\t</button>\n\t\t\t\t<button class="ui basic red button" ng-click="$ctrl.handleCancelButton($event)">\n\t\t\t\t\tCancel\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'},function(t,e){t.exports='<div class="ui basic content center aligned segment">\n\t\n\t<timer-form\n\t\tng-if="$ctrl.showForm"\n\t\tcancel="$ctrl.dismiss"\n\t\tcomplete="$ctrl.update"\n\t\tis-editing="false">\n\t</timer-form>\n\t\n\t<button class="ui basic button icon" ng-if="!$ctrl.showForm" ng-click="$ctrl.showForm = true">\n\t\t<i class="plus icon"></i>\n\t</button>\n</div>'},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.app=void 0;var r=n(0),o=i(r);n(1);var s=n(16),c=i(s);n(5),n(6);var a=n(13),l=n(12),u=n(14),d=n(15),m=n(9),f=n(8),p=n(7),g=n(10),h=n(11),v=e.app="app";o.default.module(v,["ui.router"]).config(c.default).value("REMOTE_HOST","http://localhost:3033").config(["$httpProvider",d.httpProvider]).service("timerService",["$http",a.TimerService]).factory("globalInterceptor",["REMOTE_HOST",u.globalInterceptor]).filter("msToHuman",l.MsToHuman).component("timerDashboard",m.TimerDashboard).component("timerActionButton",f.TimerActionButton).component("timer",p.Timer).component("timerForm",g.TimerForm).component("toggleableTimerForm",h.ToggleableTimerForm)}],[24]);