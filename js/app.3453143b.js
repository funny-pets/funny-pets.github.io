(function(t){function e(e){for(var n,s,r=e[0],c=e[1],d=e[2],l=0,h=[];l<r.length;l++)s=r[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,d||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("64a9")},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app",allowfullscreen:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.intro||t.audio.setupDone,expression:"!intro || audio.setupDone"}],attrs:{id:"stage"}}),t.init?n("div",{staticClass:"full"},[t._v("\n       \n    ")]):t._e(),t.init?n("img",{staticClass:"centered",staticStyle:{"margin-left":"auto","margin-right":"auto"},attrs:{alt:"Enter",src:i("bbcf")},on:{click:t.onClickEnter}}):t._e()])},o=[],s=(i("a481"),i("6b54"),i("34ef"),i("7618")),r=(i("ac6a"),i("8449"),i("22a2")),c=(i("66cb"),i("67bc")),d=i.n(c),u=i("8d3b"),l=(i("f138"),{name:"app",components:{simplebar:u["a"]},data:function(){return{settings:{noSleep:!1,anim:3,debug:!1,controls:!1,speed:14,bg:{r:30,g:0,b:0},grid:{cellWidth:30,cellHeight:30},circle:{r:222,g:53,b:72,maxSize:7,minSize:0}},grid:{cols:2,rows:1,width:0,height:0},layout:{width:window.innerWidth,height:window.innerHeight},intro:!1,decayHex:16777215,fps:null,audio:{setupDone:!1,selectedChannels:[],bufferLength:null,data:[],timeData:[]},tracks:["730bd09b6eacceca7284265d2cdc9d24.mp3","39ff8243e6833e1efb24c02bdd331985.mp3","6ff5d9706a8be0c4d7ba4fe9432e7173.mp3","4a4da27403afc18e1276268d1662ad5e.mp3","ec07150ec12ddc2282d9c94bcb4c370f.mp3","4832d1518ee52a3337bf8aca29538f18.mp3","fa8eb3c3dc5e26d38d3006c629f510a8.mp3","72d734dd9ed2c5227d7d17cf8e7740c6.mp3","f2345de5938d1e0cf9b15aadf01bc5dc.mp3","2e0311d79103ee662a8c6be8faca3cd3.mp3","48d3d0cdf7df015e77df7df7a9b97bbd.mp3","3d0960c129dd5de3f2f549aabc0cbdd3.mp3","54b524262fc3575638a34265975ff441.mp3","ee8ab52e757ef6188be7566d95b70765.mp3","188860c8634ceee9d8db04d52e4404f0.mp3","1c21193ea41f257b7925ea909b1cf8fc.mp3","9589eba5bd7e2e901355f2585b91b502.mp3","0a19578cc5be6f725690d37666017d49.mp3","ba531f1ba24e19e80151d42d39c32359.mp3","c8311e801ccc59d90522ff7a62173e52.mp3","d0bdf24d0b18ce85a5686b1e1f0da257.mp3","8dafc4fffdb4262ff2ec51639911d982.mp3","e2f454490a93069521e7d26b2d87dba8.mp3","c0daa7fc5caa5991dcbe20455b578f95.mp3","ac02bc7dbeb18928e33eefba4c3d0d3e.mp3","035c4423253d623eb3400e6ff95dfda0.mp3","e805044a231e1fac4ae8715d31b100c1.mp3","6c478a352625009e6a2c6c3140a4b97e.mp3","260d43225de6f47ff53cffda1ffb03a3.mp3","1dda0bccb2e3f6be81e73472e65318ff.mp3","ff37b21d97e70344f8bfa602d286463c.mp3","ba029cf28d834fdcd51de948fb36a367.mp3","894b05dfc62be77f6e05f6340dd316b8.mp3","b31478c84106060ebb82fa449d1011c7.mp3","22b49160f986487a7faa971148092848.mp3","67a8317b19b88bfb93b6569fb572cc01.mp3","64516d2d3e2f0bf610e754f90294c0d1.mp3","4ff942d8849afcadb981348344465ef9.mp3","dd81d2764d7fac463663540fd663c150.mp3","dab71497d02f46ac074d936fa3f03ee7.mp3"],current:null,playing:!1,init:!0}},mounted:function(){this.shuffleArray(this.tracks),this.current=this.tracks[0],window.PIXI=r,this.tlog=this.throttle(this.log,500),this.noSleep=new d.a,this.setupAudio(this.current,!1),this.setup()},watch:{settings:{handler:function(){this.log("settings change"),this.debounceResize()},deep:!0}},methods:{setup:function(){this.log("setup"),this.setupVars(),this.setupApp(),this.setAudioAnim()},setupVars:function(){this.log("setupVars"),this.p={t1:(performance||Date).now(),t2:null,circles:[],audioNode:null,AudioContext:null,analyser:null,removableListener:null}},setupApp:function(){var t=this;this.log("setupApp"),this.p.app=new r["Application"]({antialias:!0,width:this.layout.width,height:this.layout.height,backgroundColor:this.rgbToHex(this.settings.bg.r,this.settings.bg.g,this.settings.bg.b),resolution:1}),this.log("window pixelratio: ",window.devicePixelRatio),document.getElementById("stage").appendChild(this.p.app.view),this.log("app: ",this.p.app),window.app=this.p.app,this.p.app.renderer.plugins.interaction.on("pointerup",this.onClick),this.p.svg=r["Texture"].from("circle.svg"),requestAnimationFrame((function(){t.log("requestAnimationFrame before app start"),t.p.app.ticker.speed=100*t.settings.speed,t.setupGrid(t.layout.width,t.layout.height),t.p.app.ticker.add((function(e){t.animate(e)})),window.addEventListener("resize",t.debounceResize)}))},circle:function(t,e,i){var n=new r["Sprite"](this.p.svg);return n.tint=this.rgbToHex(this.settings.circle.r,this.settings.circle.g,this.settings.circle.b),n.tintSave=n.tint,n.audioTint="21cab7",n.audioTintSave=n.audioTint,n.audioBoost=!1,n.anchor.set(.5),n.x=t,n.y=e,n.scale.x=i/100,n.scale.y=i/100,n.cycles=0,n.size=i,n.grow=i>this.settings.circle.minSize&&i<this.settings.circle.maxSize?Math.random()<.5:!i,n},animate:function(t){var e=this,i=2===this.settings.anim;this.p.t2=(performance||Date).now(),this.p.t2>=this.p.t1+50&&(this.fps=Math.round(this.p.app.ticker.FPS),this.p.t1=this.p.t2,i=!0);var n=[],a=[];this.audio.setupDone&&this.playing&&function(){3===e.settings.anim?e.analyser.getByteTimeDomainData(e.audio.data):e.analyser.getByteFrequencyData(e.audio.data),3!==e.settings.anim?(a=e.audio.data.slice(e.audio.bufferLength/10,e.audio.bufferLength-e.audio.bufferLength/4),e.tlog("audioData: ",a.length,e.audio.data.length)):a=e.audio.data;for(var t=a.length/e.grid.cols,i=function(e){var i=[];a.forEach((function(n,a){var o=Math.ceil(a/t);o===e&&i.push(n)})),n[e]=i.length?i.reduce((function(t,e){return t+e}))/i.length:0},o=0;o<e.grid.cols;o++)i(o)}(),this.p.app.stage.children.forEach((function(a){var o=a.scale.x,s=Math.random()<.5,r=a.scale.x>0;a.grow=o>e.settings.circle.minSize/100&&o<e.settings.circle.maxSize/100?a.grow:!r;var c=a.grow?.001:-.001;if(s&&(c+=a.grow?5e-4:-5e-4),a.scale.x=(1e3*a.scale.x+c*t)/1e3,a.scale.y=(1e3*a.scale.y+c*t)/1e3,e.audio.setupDone&&i){var d=0;3===e.settings.anim?(d=n[a.col],e.animAudioSine(a,d)):2===e.settings.anim?(d=n[a.col],e.animAudioEq(a,d)):(d=n[a.col],e.animAudioVariance(a,d))}}))},animAudioSine:function(t,e){var i=Math.round(e*this.grid.rows/256);if([t.row,t.row-1,t.row+1].indexOf(i)>-1&&this.playing)t.tint=16777215;else if(t.tint!==t.tintSave){var n=this.colorLuminance(t.tint,-.1);t.tint!==n?t.tint=n:t.tint=t.tintSave}t.lastTint=t.tint},animAudioEq:function(t,e){var i=Math.round(e*this.grid.rows/256);t.row===this.grid.rows-i&&this.playing?t.tint=16777215:t.tint!==t.tintSave&&("0x050505"!==t.tint?t.tint=this.colorLuminance(t.tint,-.1):t.tint=t.tintSave)},animAudioVariance:function(t,e){var i=Math.round(e*this.grid.rows/256),n=null;t.row===this.grid.rows-i&&this.playing?n=16777215:e&&t.lastAudio?t.lastAudio<e||t.lastAudio===e?t.tint!==t.tintSave&&(n=t.tintSave,t.audioTint=t.audioTintSave):t.row===i||(n=this.colorLuminance(t.audioTint,-.4),t.audioTint=n):t.tint!==t.tintSave&&(n=t.tintSave,t.audioTint=t.audioTintSave),n&&(t.tint=n),t.lastAudio=e},setupGrid:function(t,e){this.log("setupGrid: ",t,e),this.grid.width=t,this.grid.height=e,this.grid.cols=Math.floor(t/this.settings.grid.cellWidth),this.grid.rows=Math.floor(e/this.settings.grid.cellHeight),this.log("grid cols, rows: ",this.grid.cols,this.grid.rows);for(var i=0;i<this.grid.cols;i++)for(var n=0;n<this.grid.rows;n++){var a=Math.floor(Math.random()*(this.settings.circle.maxSize-this.settings.circle.minSize+1))+this.settings.circle.minSize,o=i*this.settings.grid.cellWidth+this.settings.grid.cellWidth/2,s=n*this.settings.grid.cellHeight+this.settings.grid.cellHeight/2,r=this.circle(o,s,a);r.col=i,r.row=n,this.p.app.stage.addChild(r)}this.setAudioAnim()},onClick:function(){this.toggleAudio(),this.settings.noSleep||(this.settings.noSleep=!0,this.noSleep.enable(),this.log("NOSLEEP: ",this.noSleep))},onTrackClick:function(t){this.log("track click: ",t),this.reinit(t)},onClickEnter:function(){this.init=!1,this.onClick()},reinit:function(t){if(this.playing){if(this.pauseAudio(),this.current===t)return}else if(this.current===t)return void this.playAudio();this.current=t,this.gainNode=null,this.analyser=null,this.pausedAt=null,this.audio.setupDone=!1,this.setupAudio(t,!0),this.settings.noSleep||(this.settings.noSleep=!0,this.noSleep.enable(),console.log("NOSLEEP: ",this.noSleep))},toggleAudio:function(){this.log("toggleAudio, setupDone: ",this.audio.setupDone),this.audio.setupDone&&(this.alreadyPlayed?this.playing?this.pauseAudio():this.next():this.playAudio())},playAudio:function(){this.log("playAudio"),this.playing=!0,this.startedAt=this.pausedAt?Date.now()-this.pausedAt:Date.now(),this.asource=null,this.asource=this.actx.createBufferSource(),this.log("playAudio asource: ",this.asource),this.asource.buffer=this.audioBuffer,this.asource.loop=!1,this.asource.onended=this.onEnded,this.asource.connect(this.gainNode),this.pausedAt?this.asource.start(0,this.pausedAt/1e3):this.asource.start(),this.alreadyPlayed=!0},next:function(){var t=this.tracks.indexOf(this.current),e=t===this.tracks.length-1?this.tracks[0]:this.tracks[t+1];this.reinit(e)},onEnded:function(){console.log("onended: ",arguments),this.playing&&(this.playing=!1,this.next())},pauseAudio:function(){this.log("pauseAudio, actx state: ",this.actx.state),this.playing=!1,this.pausedAt=Date.now()-this.startedAt,this.asource.stop()},setupAudio:function(t,e){var i=this;if(this.log("setupAudio"),!this.audio.setupDone){if(this.log("setupAudio create actx"),!this.actx){if(this.actx=new(window.AudioContext||window.webkitAudioContext),!this.actx)return void this.log("Web Audio API not supported :(");this.log("actx created")}var n=new XMLHttpRequest;this.log("- Loading Audio Buffer -"),n.open("GET","mp3/"+t,!0),n.responseType="arraybuffer",n.onload=function(t){i.log("- Decoding Audio File Data -"),i.analyser=i.actx.createAnalyser(),i.analyser.smoothingTimeConstant=.8,i.actx.decodeAudioData(t.currentTarget.response,(function(t){i.log("decoding audio data, ready"),i.audioBuffer=t,i.gainNode=i.actx.createGain(),i.gainNode.connect(i.analyser),i.analyser.connect(i.actx.destination),i.log("setupDone, typeof audio.data: ",Object(s["a"])(i.audio.data)),i.setAudioAnim(),e&&i.playAudio()}),(function(t){i.log("Error decoding audio data: ",t.err)}))},n.send()}},setAudioAnim:function(){if(this.log("setAudioAnim"),this.analyser){var t=this.nearestPow(3*this.grid.cols,2);this.log("setAudioAnim val, cols, cols*3: ",t,this.grid.cols,3*this.grid.cols),3===this.settings.anim?this.analyser.fftSize=4096:2===this.settings.anim?(this.analyser.fftSize=2*this.grid.cols>=t?2*t:t,this.log("fftSize: ",this.analyser.fftSize)):this.analyser.fftSize=2*t,this.audio.bufferLength=this.analyser.frequencyBinCount,this.audio.data=new Uint8Array(this.audio.bufferLength),this.log("setAudioAnim end, audio.bufferLength: ",this.audio.bufferLength),this.audio.setupDone||(this.audio.setupDone=!0,this.actx.state)}else this.log("setAudioAnim analyser not ready")},resize:function(){this.log("resize"),this.layout.width=window.innerWidth,this.layout.height=window.innerHeight,this.destroy(),this.setup()},debounceResize:function(){window.clearTimeout(window.resizeTimeout),window.resizeTimeout=window.setTimeout(this.resize,100)},destroy:function(){this.log("destroy"),window.removeEventListener("resize",this.debounceResize),window.clearTimeout(window.resizeTimeout),this.p.app&&this.p.app.destroy&&(this.log("app destroy"),this.p.app.destroy(!0,!0)),this.p=null,window.app=null},nearestPow:function(t,e){return Math.pow(e,Math.round(Math.log(t)/Math.log(e)))},rgbToHex:function(t,e,i){return"0x"+((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1)},rgbToHex2:function(t,e,i){return((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1)},hexToRgb:function(t){var e=/^(#|0x)?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[2],16),parseInt(e[3],16),parseInt(e[4],16)]:null},rgbToHsl:function(t,e,i){t/=255,e/=255,i/=255;var n,a=Math.max(t,e,i),o=Math.min(t,e,i),s=a-o;0===s?n=0:a===t?n=((e-i)/s%6+6)%6:a===e?n=(i-t)/s+2:a===i&&(n=(t-e)/s+4);var r=(o+a)/2,c=0===s?0:s/(1-Math.abs(2*r-1));return[60*n,c,r]},hslToRgb:function(t,e,i){var n,a,o;if(0===e)n=a=o=i;else{var s=function(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t},r=i<.5?i*(1+e):i+e-i*e,c=2*i-r;n=s(c,r,t+1/3),a=s(c,r,t),o=s(c,r,t-1/3)}return[Math.round(255*n),Math.round(255*a),Math.round(255*o)]},colorLuminance:function(t,e){t=String(t).replace(/^(0x)/gi,""),t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),e=e||0;var i,n,a="0x";for(n=0;n<3;n++)i=parseInt(t.substr(2*n,2),16),i=Math.round(Math.min(Math.max(0,i+i*e),255)).toString(16),a+=("00"+i).substr(i.length);return a},randomIntFromInterval:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},invertColor:function(t){if(0===t.indexOf("#")&&(t=t.slice(1)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),6!==t.length)throw new Error("Invalid HEX color.");var e=(255-parseInt(t.slice(0,2),16)).toString(16),i=(255-parseInt(t.slice(2,4),16)).toString(16),n=(255-parseInt(t.slice(4,6),16)).toString(16);return"0x"+this.padZero(e)+this.padZero(i)+this.padZero(n)},padZero:function(t,e){e=e||2;var i=new Array(e).join("0");return(i+t).slice(-e)},split:function(t,e,i){var n=[];if(!i)return n;var a=(e-t)/(i-1);while(t<e)n.push(Math.round(t)),t+=a;return n.push(Math.round(e)),n},throttle:function(t,e,i){e=e||250,i=i||this;var n=!1;return function(){var a=arguments,o=Date.now();n&&o<n+e||(n=o,t.apply(i,a))}},shuffleArray:function(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[i],t[i]=n}},log:function(){var t;this.settings.debug&&(t=console).log.apply(t,["[APP log] : "].concat(Array.prototype.slice.call(arguments)))},toggleFullScreen:function(){document.fullScreenElement||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}}}),h=l,f=(i("034f"),i("2877")),p=Object(f["a"])(h,a,o,!1,null,null,null),g=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(g)}}).$mount("#app")},"64a9":function(t,e,i){},bbcf:function(t,e,i){t.exports=i.p+"img/CTA-2.6bb1b024.png"}});