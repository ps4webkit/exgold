(function(){'use strict';
var supported={'13.02':1,'13.04':1,'13.50':1,'13.52':1};
window.hostFirmware={route:function(fw){return supported[fw]?'original':null;},payload:function(fw){return {name:'GoldHEN',version:'2.4b18.13',source:'MCFORT9669 Exclusive',route:supported[fw]?'original':null};},fullList:'13.02, 13.04, 13.50, 13.52',routes:{original:'13.02 13.04 13.50 13.52'}};
})();
