
/* --------------------------------------------------------------------------
 * This file is subject to the terms and conditions defined in
 * file https://github.com/HardingPoint/GRAXForSFDC/blob/master/LICENSE,
 * which is part of this source code package.
 * --------------------------------------------------------------------------
 *          Copyright (c) 2017-2020 Harding Point
 *                  All rights reserved
 *             Built: Thu Nov 29 2018 12:42:48 GMT-0500 (EST)
 * --------------------------------------------------------------------------
 * Support:	Support@Grax.io
 * Website:	https://grax.io
 * Github:	https://github.com/HardingPoint/grax-secure
 * License:	https://github.com/HardingPoint/grax-secure/blob/master/LICENSE
 * --------------------------------------------------------------------------*/

var _0x2ce5=['\x2e\x2e\x2f\x67\x72\x61\x78\x2d\x73\x65\x63\x75\x72\x65\x2f','\x2e\x2f\x74\x65\x73\x74\x2f\x2a\x2e\x6f\x70\x74\x73','\x2e\x2f\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x73\x65\x72\x76\x65\x72\x73\x2f\x77\x65\x62\x2f\x70\x72\x6f\x78\x79\x2f\x76\x69\x65\x77\x73\x2f\x2a\x2e\x2a','\x2e\x2f\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x73\x65\x72\x76\x65\x72\x73\x2f\x77\x65\x62\x2f\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x2a\x2a','\x2e\x2f\x74\x65\x73\x74\x2f\x73\x61\x6d\x70\x6c\x65\x64\x61\x74\x61\x2f\x2a\x2a\x2e\x6a\x73\x6f\x6e','\x0a\x2f\x2a\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x0a','\x20\x2a\x20\x54\x68\x69\x73\x20\x66\x69\x6c\x65\x20\x69\x73\x20\x73\x75\x62\x6a\x65\x63\x74\x20\x74\x6f\x20\x74\x68\x65\x20\x74\x65\x72\x6d\x73\x20\x61\x6e\x64\x20\x63\x6f\x6e\x64\x69\x74\x69\x6f\x6e\x73\x20\x64\x65\x66\x69\x6e\x65\x64\x20\x69\x6e\x0a','\x20\x2a\x20\x66\x69\x6c\x65\x20\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x48\x61\x72\x64\x69\x6e\x67\x50\x6f\x69\x6e\x74\x2f\x47\x52\x41\x58\x46\x6f\x72\x53\x46\x44\x43\x2f\x62\x6c\x6f\x62\x2f\x6d\x61\x73\x74\x65\x72\x2f\x4c\x49\x43\x45\x4e\x53\x45\x2c\x0a','\x20\x2a\x20\x77\x68\x69\x63\x68\x20\x69\x73\x20\x70\x61\x72\x74\x20\x6f\x66\x20\x74\x68\x69\x73\x20\x73\x6f\x75\x72\x63\x65\x20\x63\x6f\x64\x65\x20\x70\x61\x63\x6b\x61\x67\x65\x2e\x0a','\x20\x2a\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x0a','\x20\x2a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x43\x6f\x70\x79\x72\x69\x67\x68\x74\x20\x28\x63\x29\x20\x32\x30\x31\x37\x2d\x32\x30\x32\x30\x20\x48\x61\x72\x64\x69\x6e\x67\x20\x50\x6f\x69\x6e\x74\x0a','\x20\x2a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x41\x6c\x6c\x20\x72\x69\x67\x68\x74\x73\x20\x72\x65\x73\x65\x72\x76\x65\x64\x0a','\x20\x2a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x42\x75\x69\x6c\x74\x3a\x20','\x20\x2a\x20\x47\x69\x74\x68\x75\x62\x3a\x09\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x48\x61\x72\x64\x69\x6e\x67\x50\x6f\x69\x6e\x74\x2f\x67\x72\x61\x78\x2d\x73\x65\x63\x75\x72\x65\x0a','\x20\x2a\x20\x4c\x69\x63\x65\x6e\x73\x65\x3a\x09\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x48\x61\x72\x64\x69\x6e\x67\x50\x6f\x69\x6e\x74\x2f\x67\x72\x61\x78\x2d\x73\x65\x63\x75\x72\x65\x2f\x62\x6c\x6f\x62\x2f\x6d\x61\x73\x74\x65\x72\x2f\x4c\x49\x43\x45\x4e\x53\x45\x0a','\x68\x65\x78\x61\x64\x65\x63\x69\x6d\x61\x6c','\x2e\x2f\x2a\x2e\x6a\x73','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x73\x65\x72\x76\x65\x72\x73\x2f\x2a\x2a\x2f\x2a\x2a\x2e\x6a\x73','\x74\x65\x73\x74\x2f\x2a\x2a\x2f\x2a\x2a\x2f\x2a\x2a\x2e\x6a\x73','\x6c\x6f\x61\x64\x4e\x70\x6d\x54\x61\x73\x6b\x73','\x67\x72\x75\x6e\x74\x2d\x64\x6f\x63\x75\x6d\x65\x6e\x74\x61\x74\x69\x6f\x6e','\x67\x72\x75\x6e\x74\x2d\x6d\x6f\x63\x68\x61','\x67\x72\x75\x6e\x74\x2d\x63\x6f\x6e\x74\x72\x69\x62\x2d\x63\x6f\x70\x79','\x72\x65\x67\x69\x73\x74\x65\x72\x54\x61\x73\x6b','\x64\x65\x66\x61\x75\x6c\x74','\x6f\x62\x66\x75\x73\x63\x61\x74\x6f\x72','\x6c\x65\x6e\x67\x74\x68','\x64\x65\x62\x75\x67\x67\x65\x72','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x65\x78\x70\x6f\x72\x74\x73','\x69\x6e\x69\x74\x43\x6f\x6e\x66\x69\x67','\x66\x69\x6c\x65','\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a\x73\x6f\x6e','\x6c\x69\x62\x2f\x2a\x2a\x2f\x2a\x2a\x2e\x6a\x73','\x64\x6f\x63\x73','\x2e\x2f\x50\x72\x6f\x63\x66\x69\x6c\x65\x2a'];(function(_0x432d93,_0x354cae){var _0x422405=function(_0x216a08){while(--_0x216a08){_0x432d93['push'](_0x432d93['shift']());}};var _0x5aa03d=function(){var _0x501987={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x44269c,_0x35c545,_0x38b162,_0x5c687e){_0x5c687e=_0x5c687e||{};var _0x592b21=_0x35c545+'='+_0x38b162;var _0x549caa=0x0;for(var _0x549caa=0x0,_0x11e9b0=_0x44269c['length'];_0x549caa<_0x11e9b0;_0x549caa++){var _0x160feb=_0x44269c[_0x549caa];_0x592b21+=';\x20'+_0x160feb;var _0x539e21=_0x44269c[_0x160feb];_0x44269c['push'](_0x539e21);_0x11e9b0=_0x44269c['length'];if(_0x539e21!==!![]){_0x592b21+='='+_0x539e21;}}_0x5c687e['cookie']=_0x592b21;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1d20d4,_0x41b8a8){_0x1d20d4=_0x1d20d4||function(_0x2ffb4c){return _0x2ffb4c;};var _0x2e0d25=_0x1d20d4(new RegExp('(?:^|;\x20)'+_0x41b8a8['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x3a5f8a=function(_0x5080a8,_0x40e22f){_0x5080a8(++_0x40e22f);};_0x3a5f8a(_0x422405,_0x354cae);return _0x2e0d25?decodeURIComponent(_0x2e0d25[0x1]):undefined;}};var _0x5d68ec=function(){var _0x22fb88=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x22fb88['test'](_0x501987['removeCookie']['toString']());};_0x501987['updateCookie']=_0x5d68ec;var _0x3a43e3='';var _0x2af435=_0x501987['updateCookie']();if(!_0x2af435){_0x501987['setCookie'](['*'],'counter',0x1);}else if(_0x2af435){_0x3a43e3=_0x501987['getCookie'](null,'counter');}else{_0x501987['removeCookie']();}};_0x5aa03d();}(_0x2ce5,0x65));var _0x52ce=function(_0x2d9bda,_0x14c91c){_0x2d9bda=_0x2d9bda-0x0;var _0x4293b5=_0x2ce5[_0x2d9bda];return _0x4293b5;};var _0x15b876=function(){var _0x5d82ac=!![];return function(_0x491856,_0x13126b){var _0x5d8d08=_0x5d82ac?function(){if(_0x13126b){var _0x132b46=_0x13126b['apply'](_0x491856,arguments);_0x13126b=null;return _0x132b46;}}:function(){};_0x5d82ac=![];return _0x5d8d08;};}();var _0x48c7c5=_0x15b876(this,function(){var _0x247062=function(){return'\x64\x65\x76';},_0x27d5a5=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x432ff5=function(){var _0x5aa54d=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x5aa54d['\x74\x65\x73\x74'](_0x247062['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4c798f=function(){var _0x7a0ba9=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x7a0ba9['\x74\x65\x73\x74'](_0x27d5a5['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x5ee98d=function(_0x18becb){var _0x4c4f83=~-0x1>>0x1+0xff%0x0;if(_0x18becb['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x4c4f83)){_0x5059ae(_0x18becb);}};var _0x5059ae=function(_0x291150){var _0x2fc1e4=~-0x4>>0x1+0xff%0x0;if(_0x291150['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x2fc1e4){_0x5ee98d(_0x291150);}};if(!_0x432ff5()){if(!_0x4c798f()){_0x5ee98d('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x5ee98d('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x5ee98d('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x48c7c5();setInterval(function(){_0x1cccab();},0xfa0);module[_0x52ce('0x0')]=function(_0xd27821){_0xd27821[_0x52ce('0x1')]({'pkg':_0xd27821[_0x52ce('0x2')]['\x72\x65\x61\x64\x4a\x53\x4f\x4e'](_0x52ce('0x3')),'documentation':{'default':{'files':[{'expand':!![],'cwd':'','src':[_0x52ce('0x4')]}],'options':{'destination':_0x52ce('0x5')}}},'copy':{'main':{'files':[{'expand':![],'src':[_0x52ce('0x6')],'dest':_0x52ce('0x7')},{'expand':![],'src':['\x2e\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a\x73\x6f\x6e'],'dest':_0x52ce('0x7')},{'expand':![],'src':[_0x52ce('0x8')],'dest':_0x52ce('0x7')},{'expand':!![],'src':[_0x52ce('0x9')],'dest':_0x52ce('0x7')},{'expand':!![],'src':[_0x52ce('0xa')],'dest':_0x52ce('0x7')},{'expand':!![],'src':[_0x52ce('0xb')],'dest':_0x52ce('0x7')},{'expand':![],'src':['\x2e\x2f\x70\x61\x63\x6b\x61\x67\x65\x2d\x6c\x6f\x63\x6b\x2e\x6a\x73\x6f\x6e'],'dest':'\x2e\x2e\x2f\x67\x72\x61\x78\x2d\x73\x65\x63\x75\x72\x65\x2f'},{'expand':![],'src':['\x2e\x2f\x2e\x67\x69\x74\x2a'],'dest':'\x2e\x2e\x2f\x67\x72\x61\x78\x2d\x73\x65\x63\x75\x72\x65\x2f'}]}},'obfuscator':{'options':{'banner':_0x52ce('0xc')+_0x52ce('0xd')+_0x52ce('0xe')+_0x52ce('0xf')+_0x52ce('0x10')+_0x52ce('0x11')+_0x52ce('0x12')+_0x52ce('0x13')+new Date()+'\x0a'+_0x52ce('0x10')+'\x20\x2a\x20\x53\x75\x70\x70\x6f\x72\x74\x3a\x09\x53\x75\x70\x70\x6f\x72\x74\x40\x47\x72\x61\x78\x2e\x69\x6f\x0a'+'\x20\x2a\x20\x57\x65\x62\x73\x69\x74\x65\x3a\x09\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x72\x61\x78\x2e\x69\x6f\x0a'+_0x52ce('0x14')+_0x52ce('0x15')+'\x20\x2a\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2a\x2f\x0a\x0a','compact':!![],'debugProtection':!![],'debugProtectionInterval':!![],'identifierNamesGenerator':_0x52ce('0x16'),'stringArray':!![],'selfDefending':!![],'transformObjectKeys':!![],'unicodeEscapeSequence':!![]},'task1':{'files':{'../grax-secure/':[_0x52ce('0x17'),_0x52ce('0x18'),'\x6c\x69\x62\x2f\x2a\x2a\x2f\x2a\x2a\x2f\x2a\x2a\x2e\x6a\x73',_0x52ce('0x19')]}}}});_0xd27821[_0x52ce('0x1a')](_0x52ce('0x1b'));_0xd27821[_0x52ce('0x1a')]('\x67\x72\x75\x6e\x74\x2d\x63\x6f\x6e\x74\x72\x69\x62\x2d\x6f\x62\x66\x75\x73\x63\x61\x74\x6f\x72');_0xd27821[_0x52ce('0x1a')](_0x52ce('0x1c'));_0xd27821[_0x52ce('0x1a')](_0x52ce('0x1d'));_0xd27821[_0x52ce('0x1e')](_0x52ce('0x1f'),[_0x52ce('0x20')]);};var _0x1cccab=function(){function _0x42c937(_0x1b6735){if((''+_0x1b6735/_0x1b6735)[_0x52ce('0x21')]!==0x1||_0x1b6735%0x14===0x0){(function(){}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x52ce('0x22'))());}else{(function(){}[_0x52ce('0x23')]('\x64\x65\x62\x75\x67\x67\x65\x72')());}_0x42c937(++_0x1b6735);}try{_0x42c937(0x0);}catch(_0x4d599f){}};_0x1cccab();