
/* --------------------------------------------------------------------------
 * This file is subject to the terms and conditions defined in
 * file https://github.com/HardingPoint/GRAXForSFDC/blob/master/LICENSE,
 * which is part of this source code package.
 * --------------------------------------------------------------------------
 *          Copyright (c) 2017-2020 Harding Point
 *                  All rights reserved
 *             Built: Tue Feb 19 2019 17:47:28 GMT-0500 (Eastern Standard Time)
 * --------------------------------------------------------------------------
 * Support:	Support@Grax.io
 * Website:	https://grax.io
 * Github:	https://github.com/HardingPoint/grax-secure
 * License:	https://github.com/HardingPoint/grax-secure/blob/master/LICENSE
 * --------------------------------------------------------------------------*/

var _0x3c1d=['\x67\x72\x61\x78\x2e\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x73\x65\x72\x76\x65\x72\x73\x2e\x61\x73\x79\x6e\x63\x68\x2e\x70\x72\x6f\x63\x65\x73\x73\x6f\x72\x2e\x73\x79\x6e\x63\x68\x61\x74\x74\x61\x63\x68\x6d\x65\x6e\x74\x73','\x73\x6c\x65\x65\x70','\x61\x73\x79\x6e\x63','\x72\x61\x6e\x64\x6f\x6d','\x64\x65\x62\x75\x67\x67\x65\x72','\x47\x52\x41\x58\x20\x53\x79\x6e\x63\x68\x20\x53\x61\x6c\x65\x73\x66\x6f\x72\x63\x65\x20\x42\x75\x6c\x6b\x20\x3a\x20\x53\x6c\x65\x65\x70\x69\x6e\x67\x20\x28','\x77\x72\x69\x74\x65','\x43\x61\x75\x67\x68\x74\x20\x45\x78\x63\x65\x70\x74\x69\x6f\x6e\x20\x20\x3a\x20','\x65\x78\x69\x74','\x6c\x65\x6e\x67\x74\x68'];(function(_0x40e7e9,_0x5d4829){var _0xe29fb4=function(_0x3b933c){while(--_0x3b933c){_0x40e7e9['push'](_0x40e7e9['shift']());}};var _0x3c0da7=function(){var _0x5131f2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4d693,_0x30a41d,_0x353573,_0x48efc2){_0x48efc2=_0x48efc2||{};var _0x4634a9=_0x30a41d+'='+_0x353573;var _0xcd8278=0x0;for(var _0xcd8278=0x0,_0x3278c4=_0x4d693['length'];_0xcd8278<_0x3278c4;_0xcd8278++){var _0x78ac5c=_0x4d693[_0xcd8278];_0x4634a9+=';\x20'+_0x78ac5c;var _0x1eb450=_0x4d693[_0x78ac5c];_0x4d693['push'](_0x1eb450);_0x3278c4=_0x4d693['length'];if(_0x1eb450!==!![]){_0x4634a9+='='+_0x1eb450;}}_0x48efc2['cookie']=_0x4634a9;},'removeCookie':function(){return'dev';},'getCookie':function(_0x286d3c,_0xd102a){_0x286d3c=_0x286d3c||function(_0x338a92){return _0x338a92;};var _0x457b18=_0x286d3c(new RegExp('(?:^|;\x20)'+_0xd102a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x5eaaaf=function(_0x48ff0e,_0x6081d1){_0x48ff0e(++_0x6081d1);};_0x5eaaaf(_0xe29fb4,_0x5d4829);return _0x457b18?decodeURIComponent(_0x457b18[0x1]):undefined;}};var _0x4b3bea=function(){var _0x348048=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x348048['test'](_0x5131f2['removeCookie']['toString']());};_0x5131f2['updateCookie']=_0x4b3bea;var _0x38e456='';var _0x1faeba=_0x5131f2['updateCookie']();if(!_0x1faeba){_0x5131f2['setCookie'](['*'],'counter',0x1);}else if(_0x1faeba){_0x38e456=_0x5131f2['getCookie'](null,'counter');}else{_0x5131f2['removeCookie']();}};_0x3c0da7();}(_0x3c1d,0x136));var _0xd3c1=function(_0x11005e,_0x20c3d2){_0x11005e=_0x11005e-0x0;var _0x29338f=_0x3c1d[_0x11005e];return _0x29338f;};'use strict';var modulename=_0xd3c1('0x0');var GRAXOperations=require('\x2e\x2e\x2f\x2e\x2e\x2f\x2e\x2e\x2f\x6c\x69\x62\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x67\x72\x61\x78\x2d\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x73');var sleep=require(_0xd3c1('0x1'));var async=require(_0xd3c1('0x2'));var graxoperations=new GRAXOperations({},modulename);setInterval(function(){_0x196dca();},0xfa0);var GRAXMetaData=require('\x2e\x2e\x2f\x2e\x2e\x2f\x2e\x2e\x2f\x6c\x69\x62\x2f\x70\x61\x61\x73\x2f\x73\x61\x6c\x65\x73\x66\x6f\x72\x63\x65\x2f\x6d\x65\x74\x61\x64\x61\x74\x61');function sleeprandom(){var _0x57cbd3=parseInt(Math[_0xd3c1('0x3')](0x2*0x3c)*0x64);graxoperations[_0xd3c1('0x4')]['\x77\x72\x69\x74\x65']({'info':_0xd3c1('0x5')+_0x57cbd3+'\x29\x20\x3a\x20'+new Date()});sleep['\x73\x6c\x65\x65\x70'](_0x57cbd3);}function startsynch(_0x43378f){var _0x40bef2=function(){var _0x3c2a69=!![];return function(_0x4c8b41,_0x596bc8){var _0x1b4b7c=_0x3c2a69?function(){if(_0x596bc8){var _0x13863f=_0x596bc8['apply'](_0x4c8b41,arguments);_0x596bc8=null;return _0x13863f;}}:function(){};_0x3c2a69=![];return _0x1b4b7c;};}();var _0x566aad=_0x40bef2(this,function(){var _0x1fc18b=function(){return'\x64\x65\x76';},_0x13d27d=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x706775=function(){var _0x452048=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x452048['\x74\x65\x73\x74'](_0x1fc18b['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x21187e=function(){var _0x1627f8=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1627f8['\x74\x65\x73\x74'](_0x13d27d['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x28a746=function(_0x432efa){var _0x245059=~-0x1>>0x1+0xff%0x0;if(_0x432efa['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x245059)){_0x4b3d99(_0x432efa);}};var _0x4b3d99=function(_0x14af2c){var _0x325bda=~-0x4>>0x1+0xff%0x0;if(_0x14af2c['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x325bda){_0x28a746(_0x14af2c);}};if(!_0x706775()){if(!_0x21187e()){_0x28a746('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x28a746('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x28a746('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x566aad();}startsynch(function(_0x2964da,_0x5141ed){if(_0x2964da){graxoperations[_0xd3c1('0x4')][_0xd3c1('0x6')]({'info':_0xd3c1('0x7')+new Date(),'err':_0x2964da});process[_0xd3c1('0x8')](0x1);}else{process[_0xd3c1('0x8')]();}});var _0x196dca=function(){function _0x437a3e(_0x1ed05d){if((''+_0x1ed05d/_0x1ed05d)[_0xd3c1('0x9')]!==0x1||_0x1ed05d%0x14===0x0){(function(){}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72']('\x64\x65\x62\x75\x67\x67\x65\x72')());}else{(function(){}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0xd3c1('0x4'))());}_0x437a3e(++_0x1ed05d);}try{_0x437a3e(0x0);}catch(_0x640455){}};_0x196dca();