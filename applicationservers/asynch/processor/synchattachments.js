
/* --------------------------------------------------------------------------
 * This file is subject to the terms and conditions defined in
 * file https://github.com/HardingPoint/GRAXForSFDC/blob/master/LICENSE,
 * which is part of this source code package.
 * --------------------------------------------------------------------------
 *          Copyright (c) 2017-2020 Harding Point
 *                  All rights reserved
 *             Built: Fri Feb 15 2019 15:12:03 GMT-0500 (EST)
 * --------------------------------------------------------------------------
 * Support:	Support@Grax.io
 * Website:	https://grax.io
 * Github:	https://github.com/HardingPoint/grax-secure
 * License:	https://github.com/HardingPoint/grax-secure/blob/master/LICENSE
 * --------------------------------------------------------------------------*/

var _0x26e7=['\x64\x65\x62\x75\x67\x67\x65\x72','\x65\x78\x69\x74','\x6c\x65\x6e\x67\x74\x68','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x67\x72\x61\x78\x2e\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x73\x65\x72\x76\x65\x72\x73\x2e\x61\x73\x79\x6e\x63\x68\x2e\x70\x72\x6f\x63\x65\x73\x73\x6f\x72\x2e\x73\x79\x6e\x63\x68\x61\x74\x74\x61\x63\x68\x6d\x65\x6e\x74\x73','\x2e\x2e\x2f\x2e\x2e\x2f\x2e\x2e\x2f\x6c\x69\x62\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x67\x72\x61\x78\x2d\x6f\x70\x65\x72\x61\x74\x69\x6f\x6e\x73','\x73\x6c\x65\x65\x70','\x61\x73\x79\x6e\x63','\x72\x61\x6e\x64\x6f\x6d','\x77\x72\x69\x74\x65','\x47\x52\x41\x58\x20\x53\x79\x6e\x63\x68\x20\x53\x61\x6c\x65\x73\x66\x6f\x72\x63\x65\x20\x42\x75\x6c\x6b\x20\x3a\x20\x53\x6c\x65\x65\x70\x69\x6e\x67\x20\x28','\x29\x20\x3a\x20'];(function(_0x557b64,_0x3b17f9){var _0x5d160d=function(_0x204e2b){while(--_0x204e2b){_0x557b64['push'](_0x557b64['shift']());}};var _0x4a39da=function(){var _0x26446e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x506e19,_0x96ed05,_0x5849ea,_0x3e0fd3){_0x3e0fd3=_0x3e0fd3||{};var _0x3d8ff3=_0x96ed05+'='+_0x5849ea;var _0x16a44f=0x0;for(var _0x16a44f=0x0,_0x22d560=_0x506e19['length'];_0x16a44f<_0x22d560;_0x16a44f++){var _0x23445e=_0x506e19[_0x16a44f];_0x3d8ff3+=';\x20'+_0x23445e;var _0x9b0b32=_0x506e19[_0x23445e];_0x506e19['push'](_0x9b0b32);_0x22d560=_0x506e19['length'];if(_0x9b0b32!==!![]){_0x3d8ff3+='='+_0x9b0b32;}}_0x3e0fd3['cookie']=_0x3d8ff3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x55a60f,_0x427678){_0x55a60f=_0x55a60f||function(_0x1feeae){return _0x1feeae;};var _0xda6eb=_0x55a60f(new RegExp('(?:^|;\x20)'+_0x427678['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x473a55=function(_0x261363,_0x1fb61c){_0x261363(++_0x1fb61c);};_0x473a55(_0x5d160d,_0x3b17f9);return _0xda6eb?decodeURIComponent(_0xda6eb[0x1]):undefined;}};var _0x547de3=function(){var _0x1c2a46=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x1c2a46['test'](_0x26446e['removeCookie']['toString']());};_0x26446e['updateCookie']=_0x547de3;var _0x4a6763='';var _0x193dab=_0x26446e['updateCookie']();if(!_0x193dab){_0x26446e['setCookie'](['*'],'counter',0x1);}else if(_0x193dab){_0x4a6763=_0x26446e['getCookie'](null,'counter');}else{_0x26446e['removeCookie']();}};_0x4a39da();}(_0x26e7,0x70));var _0x726e=function(_0x25cd2c,_0x57498e){_0x25cd2c=_0x25cd2c-0x0;var _0x1e364c=_0x26e7[_0x25cd2c];return _0x1e364c;};'use strict';var modulename=_0x726e('0x0');setInterval(function(){_0x2638a7();},0xfa0);var GRAXOperations=require(_0x726e('0x1'));var sleep=require(_0x726e('0x2'));var async=require(_0x726e('0x3'));var graxoperations=new GRAXOperations({},modulename);var GRAXMetaData=require('\x2e\x2e\x2f\x2e\x2e\x2f\x2e\x2e\x2f\x6c\x69\x62\x2f\x70\x61\x61\x73\x2f\x73\x61\x6c\x65\x73\x66\x6f\x72\x63\x65\x2f\x6d\x65\x74\x61\x64\x61\x74\x61');function sleeprandom(){var _0x1961b6=parseInt(Math[_0x726e('0x4')](0x2*0x3c)*0x64);graxoperations['\x64\x65\x62\x75\x67\x67\x65\x72'][_0x726e('0x5')]({'info':_0x726e('0x6')+_0x1961b6+_0x726e('0x7')+new Date()});sleep['\x73\x6c\x65\x65\x70'](_0x1961b6);}function startsynch(_0x4f18df){var _0x55efe1=function(){var _0x225f50=!![];return function(_0x48a77d,_0x19d003){var _0x58965d=_0x225f50?function(){if(_0x19d003){var _0x5e0609=_0x19d003['apply'](_0x48a77d,arguments);_0x19d003=null;return _0x5e0609;}}:function(){};_0x225f50=![];return _0x58965d;};}();var _0x364b3d=_0x55efe1(this,function(){var _0x21a9d9=function(){return'\x64\x65\x76';},_0x4d5ac8=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x11c049=function(){var _0x47513a=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x47513a['\x74\x65\x73\x74'](_0x21a9d9['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x26e56e=function(){var _0x3944df=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x3944df['\x74\x65\x73\x74'](_0x4d5ac8['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x38047b=function(_0x48106c){var _0x38f865=~-0x1>>0x1+0xff%0x0;if(_0x48106c['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x38f865)){_0x38b7f3(_0x48106c);}};var _0x38b7f3=function(_0x524ab6){var _0x402857=~-0x4>>0x1+0xff%0x0;if(_0x524ab6['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x402857){_0x38047b(_0x524ab6);}};if(!_0x11c049()){if(!_0x26e56e()){_0x38047b('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x38047b('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x38047b('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x364b3d();}startsynch(function(_0x148d0f,_0x32f6d8){if(_0x148d0f){graxoperations[_0x726e('0x8')][_0x726e('0x5')]({'info':'\x43\x61\x75\x67\x68\x74\x20\x45\x78\x63\x65\x70\x74\x69\x6f\x6e\x20\x20\x3a\x20'+new Date(),'err':_0x148d0f});process[_0x726e('0x9')](0x1);}else{process['\x65\x78\x69\x74']();}});var _0x2638a7=function(){function _0x5cb80a(_0x4afc5a){if((''+_0x4afc5a/_0x4afc5a)[_0x726e('0xa')]!==0x1||_0x4afc5a%0x14===0x0){(function(){}[_0x726e('0xb')](_0x726e('0x8'))());}else{(function(){}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x726e('0x8'))());}_0x5cb80a(++_0x4afc5a);}try{_0x5cb80a(0x0);}catch(_0x207727){}};_0x2638a7();