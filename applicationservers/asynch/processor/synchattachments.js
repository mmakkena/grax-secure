
/* --------------------------------------------------------------------------
 * This file is subject to the terms and conditions defined in
 * file https://github.com/HardingPoint/GRAXForSFDC/blob/master/LICENSE,
 * which is part of this source code package.
 * --------------------------------------------------------------------------
 *          Copyright (c) 2017-2020 Harding Point
 *                  All rights reserved
 *             Built: Wed Dec 19 2018 15:35:22 GMT-0500 (EST)
 * --------------------------------------------------------------------------
 * Support:	Support@Grax.io
 * Website:	https://grax.io
 * Github:	https://github.com/HardingPoint/grax-secure
 * License:	https://github.com/HardingPoint/grax-secure/blob/master/LICENSE
 * --------------------------------------------------------------------------*/

var _0xbe3f=['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x67\x72\x61\x78\x2e\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x73\x65\x72\x76\x65\x72\x73\x2e\x61\x73\x79\x6e\x63\x68\x2e\x70\x72\x6f\x63\x65\x73\x73\x6f\x72\x2e\x73\x79\x6e\x63\x68\x61\x74\x74\x61\x63\x68\x6d\x65\x6e\x74\x73','\x2e\x2e\x2f\x2e\x2e\x2f\x2e\x2e\x2f\x6c\x69\x62\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x67\x72\x61\x78\x2d\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x73','\x73\x6c\x65\x65\x70','\x2e\x2e\x2f\x2e\x2e\x2f\x2e\x2e\x2f\x6c\x69\x62\x2f\x70\x61\x61\x73\x2f\x73\x61\x6c\x65\x73\x66\x6f\x72\x63\x65\x2f\x6d\x65\x74\x61\x64\x61\x74\x61','\x64\x65\x62\x75\x67\x67\x65\x72','\x47\x52\x41\x58\x20\x53\x79\x6e\x63\x68\x20\x53\x61\x6c\x65\x73\x66\x6f\x72\x63\x65\x20\x42\x75\x6c\x6b\x20\x3a\x20\x53\x6c\x65\x65\x70\x69\x6e\x67\x20\x28','\x29\x20\x3a\x20','\x43\x61\x75\x67\x68\x74\x20\x45\x78\x63\x65\x70\x74\x69\x6f\x6e\x20\x20\x3a\x20','\x65\x78\x69\x74','\x6c\x65\x6e\x67\x74\x68'];(function(_0x9cd4c3,_0x1c9b2c){var _0x4c9025=function(_0x25b3c6){while(--_0x25b3c6){_0x9cd4c3['push'](_0x9cd4c3['shift']());}};var _0x57ecae=function(){var _0xf74fa1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x531b6a,_0x160a7d,_0x464e83,_0x161b59){_0x161b59=_0x161b59||{};var _0x3b9de1=_0x160a7d+'='+_0x464e83;var _0x1b7dd6=0x0;for(var _0x1b7dd6=0x0,_0x65407a=_0x531b6a['length'];_0x1b7dd6<_0x65407a;_0x1b7dd6++){var _0x192b2d=_0x531b6a[_0x1b7dd6];_0x3b9de1+=';\x20'+_0x192b2d;var _0x5759a1=_0x531b6a[_0x192b2d];_0x531b6a['push'](_0x5759a1);_0x65407a=_0x531b6a['length'];if(_0x5759a1!==!![]){_0x3b9de1+='='+_0x5759a1;}}_0x161b59['cookie']=_0x3b9de1;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5c5bfb,_0x374aab){_0x5c5bfb=_0x5c5bfb||function(_0x39f9fa){return _0x39f9fa;};var _0x526a7d=_0x5c5bfb(new RegExp('(?:^|;\x20)'+_0x374aab['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x5f4636=function(_0x92bf23,_0x1cb3a6){_0x92bf23(++_0x1cb3a6);};_0x5f4636(_0x4c9025,_0x1c9b2c);return _0x526a7d?decodeURIComponent(_0x526a7d[0x1]):undefined;}};var _0x2c4e48=function(){var _0x242394=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x242394['test'](_0xf74fa1['removeCookie']['toString']());};_0xf74fa1['updateCookie']=_0x2c4e48;var _0xab37c='';var _0x5bed15=_0xf74fa1['updateCookie']();if(!_0x5bed15){_0xf74fa1['setCookie'](['*'],'counter',0x1);}else if(_0x5bed15){_0xab37c=_0xf74fa1['getCookie'](null,'counter');}else{_0xf74fa1['removeCookie']();}};_0x57ecae();}(_0xbe3f,0x135));var _0xfbe3=function(_0x35b654,_0x5998fa){_0x35b654=_0x35b654-0x0;var _0x16941c=_0xbe3f[_0x35b654];return _0x16941c;};'use strict';var modulename=_0xfbe3('0x0');var GRAXOperations=require(_0xfbe3('0x1'));var sleep=require(_0xfbe3('0x2'));var async=require('\x61\x73\x79\x6e\x63');var graxoperations=new GRAXOperations({},modulename);var GRAXMetaData=require(_0xfbe3('0x3'));function sleeprandom(){var _0x3a19de=parseInt(Math['\x72\x61\x6e\x64\x6f\x6d'](0x2*0x3c)*0x64);graxoperations[_0xfbe3('0x4')]['\x77\x72\x69\x74\x65']({'info':_0xfbe3('0x5')+_0x3a19de+_0xfbe3('0x6')+new Date()});sleep['\x73\x6c\x65\x65\x70'](_0x3a19de);}function startsynch(_0x17d4b9){var _0x4c2b11=function(){var _0xffae14=!![];return function(_0x35c891,_0x55596c){var _0x190489=_0xffae14?function(){if(_0x55596c){var _0x47fd7c=_0x55596c['apply'](_0x35c891,arguments);_0x55596c=null;return _0x47fd7c;}}:function(){};_0xffae14=![];return _0x190489;};}();var _0x46fb56=_0x4c2b11(this,function(){var _0x74315e=function(){return'\x64\x65\x76';},_0xf8f875=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x2b4784=function(){var _0x15fc6b=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x15fc6b['\x74\x65\x73\x74'](_0x74315e['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x871aa9=function(){var _0x2389ef=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x2389ef['\x74\x65\x73\x74'](_0xf8f875['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x233904=function(_0x3d5ed8){var _0x2d0455=~-0x1>>0x1+0xff%0x0;if(_0x3d5ed8['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x2d0455)){_0x98b082(_0x3d5ed8);}};var _0x98b082=function(_0x30e6be){var _0x29c033=~-0x4>>0x1+0xff%0x0;if(_0x30e6be['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x29c033){_0x233904(_0x30e6be);}};if(!_0x2b4784()){if(!_0x871aa9()){_0x233904('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x233904('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x233904('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x46fb56();}startsynch(function(_0x301d75,_0x3e8960){if(_0x301d75){graxoperations['\x64\x65\x62\x75\x67\x67\x65\x72']['\x77\x72\x69\x74\x65']({'info':_0xfbe3('0x7')+new Date(),'err':_0x301d75});process[_0xfbe3('0x8')](0x1);}else{process[_0xfbe3('0x8')]();}});var _0x4a46c5=function(){function _0x3b0c14(_0x336c99){if((''+_0x336c99/_0x336c99)[_0xfbe3('0x9')]!==0x1||_0x336c99%0x14===0x0){(function(){}[_0xfbe3('0xa')](_0xfbe3('0x4'))());}else{(function(){}[_0xfbe3('0xa')](_0xfbe3('0x4'))());}_0x3b0c14(++_0x336c99);}try{_0x3b0c14(0x0);}catch(_0x431fe0){}};_0x4a46c5();setInterval(function(){_0x4a46c5();},0xfa0);