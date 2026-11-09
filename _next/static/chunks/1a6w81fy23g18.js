//# allFunctionsCalledOnLoad
;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="80b52edb-c98b-9c6c-1511-b6a0a17f7681")}catch(e){}}();
(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,784454,e=>{let t=["small","medium","large","x-large","xx-large","xxx-large","huge"],r=[5,10,20,60,0],o=[0,.875,1,1.125,1.25,1.5,1.75,2],n=[0,12,14,16,18],a=[.75,1,1.25,1.5],i={contrast:"system",reduceTransparency:"system",underlineLinks:!1,showColorNames:!1,colorBlindPalette:!1,appFont:"default",lineSpacing:"normal",letterSpacing:"normal",wordSpacing:"normal",paragraphSpacing:"normal",readingWidth:"full",readingMask:!1,reduceMotion:"system",pauseAnimatedImages:"system",focusRing:"normal",focusAlwaysVisible:!1,singleKeyShortcuts:!0,largeTargets:"system",largeCursor:!1,openOnHover:!0,showRowActionButton:!1,nativeScrollbars:!1,mailViewMode:"html",mailTextScale:0,mailMinFontSize:0,mailOverrideStyles:"never",mailFitWidth:!1,readAloudRate:1,readAloudVoice:"",composeFontFamily:"",composeFontSize:"",toastDuration:5,confirmDelete:!1,confirmArchive:!1,visualAlerts:!1,unreadCountStyle:"count",doNotDisturb:!1,announceNewMail:!0,announceRowPreview:!1,simpleMode:!1,simpleModePagedList:!1,showAccessibilityButton:!1},l=Object.keys(i),s=["system","on","off"],d={fontSize:t,contrast:["system","more","normal"],reduceTransparency:s,appFont:["default","atkinson","lexend","opendyslexic"],lineSpacing:["normal","relaxed","loose"],letterSpacing:["normal","wide","wider"],wordSpacing:["normal","wide"],paragraphSpacing:["normal","wide"],readingWidth:["full","comfortable"],reduceMotion:s,pauseAnimatedImages:s,focusRing:["normal","thick","extra"],largeTargets:s,mailViewMode:["html","plain"],mailTextScale:o,mailMinFontSize:n,mailOverrideStyles:["never","high-contrast","always"],readAloudRate:a,toastDuration:r,unreadCountStyle:["count","dot","hidden"]},c=new Set(["fontSize","reduceMotion","contrast","reduceTransparency","underlineLinks","showColorNames","colorBlindPalette","appFont","lineSpacing","letterSpacing","wordSpacing","paragraphSpacing","readingWidth","readingMask","pauseAnimatedImages","focusRing","focusAlwaysVisible","largeTargets","largeCursor","openOnHover","showRowActionButton","nativeScrollbars","mailViewMode","mailTextScale","mailMinFontSize","mailOverrideStyles","mailFitWidth","readAloudRate","readAloudVoice","visualAlerts","unreadCountStyle","doNotDisturb","announceNewMail","announceRowPreview","simpleMode","simpleModePagedList","showAccessibilityButton","plainTextFont","emailAlwaysLightMode","showToolbarLabels"]);e.s(["S",0,d,"G",0,i,"W",0,l,"z",0,t,"K",0,{small:.875,medium:1,large:1.125,"x-large":1.25,"xx-large":1.5,"xxx-large":1.75,huge:2},"D",0,n,"E",0,o,"J",0,a,"u",0,r,"F",0,c,"V",0,function(e,t){let r=(t,r)=>{r?e.setAttribute("data-"+t,r):e.removeAttribute("data-"+t)},o={small:.875,medium:1,large:1.125,"x-large":1.25,"xx-large":1.5,"xxx-large":1.75,huge:2}[t.fontSize]||1;e.style.setProperty("--font-size-base",100*o+"%"),r("contrast","more"===t.contrast||"normal"===t.contrast?t.contrast:null),r("transparency","on"===t.reduceTransparency?"reduce":"off"===t.reduceTransparency?"full":null),r("motion","on"===t.reduceMotion?"reduce":"off"===t.reduceMotion?"full":null),r("animations","on"===t.reduceMotion?"off":null),r("underline-links",t.underlineLinks?"on":null),r("app-font",t.appFont&&"default"!==t.appFont?t.appFont:null),r("line-spacing",t.lineSpacing&&"normal"!==t.lineSpacing?t.lineSpacing:null),r("letter-spacing",t.letterSpacing&&"normal"!==t.letterSpacing?t.letterSpacing:null),r("word-spacing",t.wordSpacing&&"normal"!==t.wordSpacing?t.wordSpacing:null),r("paragraph-spacing",t.paragraphSpacing&&"normal"!==t.paragraphSpacing?t.paragraphSpacing:null),r("reading-width","comfortable"===t.readingWidth?"comfortable":null),r("focus-ring",t.focusRing&&"normal"!==t.focusRing?t.focusRing:null),r("focus-always",t.focusAlwaysVisible?"on":null),r("large-targets","on"===t.largeTargets?"on":"off"===t.largeTargets?"off":null),r("large-cursor",t.largeCursor?"on":null),r("native-scrollbars",t.nativeScrollbars?"on":null),r("simple-mode",t.simpleMode?"on":null),r("unread-counts",t.unreadCountStyle&&"count"!==t.unreadCountStyle?t.unreadCountStyle:null),r("cvd-palette",t.colorBlindPalette?"on":null),r("color-names",t.showColorNames?"on":null)},"P",0,function(e,t){let r=d[e];return!r||r.includes(t)},"j",0,function(e,t){return 0===e||e>=t}])},728945,204003,511540,683809,192992,e=>{e.s(["z",()=>i,"m",()=>l,"y",()=>s],728945);var t=e.i(840131),r=e.i(845110);function o(e,t){let[o,n]=(0,r.f)(e,t.start,t.end);return{start:o,end:n}}e.s(["f",0,o],204003);var n=e.i(677241),a=e.i(826514);let i="__birthday-calendar__";function l(e,t){return{id:i,name:e||"Birthdays",description:null,color:t||"#eab308",sortOrder:999,isSubscribed:!0,isVisible:!0,isDefault:!1,includeInAvailability:"none",defaultAlertsWithTime:null,defaultAlertsWithoutTime:null,timeZone:null,shareWith:null,myRights:{mayReadFreeBusy:!0,mayReadItems:!0,mayWriteAll:!1,mayWriteOwn:!1,mayUpdatePrivate:!1,mayRSVP:!1,mayShare:!1,mayDelete:!1}}}function s(e,r,l){let s=[],d=(0,a.f)(r),c=(0,a.f)(l);if(isNaN(d.getTime())||isNaN(c.getTime()))return s;let u=function(e){let{start:t,end:r}=o(void 0,e),a=+t>+r,i=a?+t:+r,l=a?r:t;l.setHours(0,0,0,0),l.setMonth(0,1);let s=(void 0)??1;if(!s)return[];s<0&&(s=-s,a=!a);let d=[];for(;+l<=i;)d.push((0,n.f)(t,l)),l.setFullYear(l.getFullYear()+s);return a?d.reverse():d}({start:d,end:c}),f=c.getFullYear();for(let r of(u.some(e=>e.getFullYear()===f)||u.push(new Date(f,0,1)),e))if(r.anniversaries)for(let[e,o]of Object.entries(r.anniversaries)){if("birth"!==o.kind)continue;let n=function(e){if("string"==typeof e){if(e.startsWith("--")){let t=e.match(/^--(\d{2})-(\d{2})$/);return t?{month:parseInt(t[1],10),day:parseInt(t[2],10)}:null}try{let t=(0,a.f)(e);if(!isNaN(t.getTime()))return{month:t.getMonth()+1,day:t.getDate(),year:t.getFullYear()}}catch{}return null}if("utc"in e&&"Timestamp"===e["@type"]){try{let t=(0,a.f)(e.utc);if(!isNaN(t.getTime()))return{month:t.getMonth()+1,day:t.getDate(),year:t.getFullYear()}}catch{}return null}return e.month&&e.day?{month:e.month,day:e.day,year:e.year||void 0}:null}(o.date);if(!n)continue;let l=(0,t.getContactDisplayName)(r);if(l)for(let t of u){let o=t.getFullYear(),a=n.month,u=n.day,f=new Date(o,a-1,u);if(f.getMonth()!==a-1&&(f.setDate(0),a=f.getMonth()+1,u=f.getDate()),f<d||f>c)continue;let m=String(a).padStart(2,"0"),p=String(u).padStart(2,"0"),g=`${o}-${m}-${p}T00:00:00`,b=n.year?o-n.year:void 0,h=b&&b>0?` (${b})`:"",y={id:`birthday-${r.id}-${e}-${o}`,calendarIds:{[i]:!0},isDraft:!1,isOrigin:!1,utcStart:null,utcEnd:null,"@type":"Event",uid:`birthday-${r.id}-${e}`,title:`🎂 ${l}${h}`,description:"",descriptionContentType:"text/plain",created:null,updated:"",sequence:0,start:g,duration:"P1D",timeZone:null,showWithoutTime:!0,status:"confirmed",freeBusyStatus:"free",privacy:"public",color:null,keywords:null,categories:null,locale:null,replyTo:null,organizerCalendarAddress:null,participants:null,mayInviteSelf:!1,mayInviteOthers:!1,hideAttendees:!1,recurrenceId:null,recurrenceIdTimeZone:null,recurrenceRules:null,recurrenceOverrides:null,excludedRecurrenceRules:null,useDefaultAlerts:!1,alerts:null,locations:null,virtualLocations:null,links:null,relatedTo:null};s.push(y)}}return s}let d=new Date(0).toISOString();e.s(["l",0,function(e,t,r=new Date){let o=r.getTime()-7776e6,n={};for(let r of[e.deletedSubscriptionIds,t.deletedSubscriptionIds])for(let[e,t]of Object.entries(r))!(Date.parse(t)<o)&&(!n[e]||Date.parse(t)>Date.parse(n[e]))&&(n[e]=t);let a=new Map;for(let t of e.icalSubscriptions)a.set(t.id,t);for(let e of t.icalSubscriptions){let t=a.get(e.id),r=t?.updatedAt?Date.parse(t.updatedAt):0,o=e.updatedAt?Date.parse(e.updatedAt):0;(!t||o>r)&&a.set(e.id,e)}let i=[];for(let e of a.values()){let t=n[e.id];if(void 0!==t){if((e.updatedAt?Date.parse(e.updatedAt):0)<=Date.parse(t))continue;delete n[e.id]}i.push(e)}return{icalSubscriptions:i,deletedSubscriptionIds:n}},"R",0,function(e){if("object"!=typeof e||null===e||Array.isArray(e))return{};let t={};for(let[r,o]of Object.entries(e))"string"!=typeof o||Number.isNaN(Date.parse(o))||(t[r]=o);return t},"V",0,function(e){if(!Array.isArray(e))return null;let t=[],r=new Set;for(let n of e){var o;if("object"!=typeof n||null===n||"string"!=typeof n.id||!n.id||r.has(n.id)||"string"!=typeof n.url||!n.url.trim())continue;let e=n.url.trim().replace(/^webcals?:\/\//i,"https://");if(!/^https?:\/\//i.test(e)||!function(e){try{return new URL(e),!0}catch{return!1}}(e)||"string"!=typeof n.calendarId||!n.calendarId.trim()||"string"!=typeof n.name||!n.name.trim())continue;r.add(n.id);let a="number"==typeof n.refreshInterval&&Number.isFinite(n.refreshInterval)&&n.refreshInterval>0?n.refreshInterval:60;t.push({id:n.id,url:e,calendarId:n.calendarId.trim(),name:n.name.trim(),color:"string"==typeof n.color&&n.color?n.color:"#3b82f6",refreshInterval:a,lastRefreshed:"string"==typeof n.lastRefreshed?n.lastRefreshed:null,accountId:"string"==typeof n.accountId&&n.accountId?n.accountId:void 0,owner:"string"==typeof n.owner&&n.owner?n.owner:void 0,updatedAt:("string"!=typeof(o=n.updatedAt)||Number.isNaN(Date.parse(o))?void 0:o)??d})}return t},"I",0,function(e,t){return`${e.replace(/\/+$/,"").toLowerCase()}|${t.toLowerCase()}`}],511540);let c={defaultViewMode:"list",showIcons:!0,coloredIcons:!0,defaultSortKey:"name",defaultSortDir:"asc",showHiddenFiles:!1,showThumbnails:!0},u={defaultViewMode:["list","grid"],showIcons:[!0,!1],coloredIcons:[!0,!1],defaultSortKey:["name","size","modified"],defaultSortDir:["asc","desc"],showHiddenFiles:[!0,!1],showThumbnails:[!0,!1]};e.s(["J",0,c,"b",0,function(e){let t={...c};if("object"!=typeof e||null===e||Array.isArray(e))return t;for(let r of Object.keys(u))u[r].includes(e[r])&&(t[r]=e[r]);return t}],683809),e.s(["f",0,function(e){return"all"===e||"folder"===e}],192992)},872295,735025,81583,e=>{e.s(["H",()=>M,"G",()=>R,"A",()=>D,"I",()=>N],872295);var t=e.i(468347);function r(e){if(!e.toLowerCase().startsWith("data:"))return null;let t=e.indexOf(",");if(t<0)return null;let r=e.slice(5,t).split(";");return"base64"!==r[r.length-1].trim().toLowerCase()?null:{type:(r.length>1?r[0].trim():"")||void 0,data:e.slice(t+1)}}function o(e,t){let o,n=r(e);if(!n)return null;try{o=atob(n.data)}catch{return null}let a=new Uint8Array(o.length);for(let e=0;e<o.length;e++)a[e]=o.charCodeAt(e);return new Blob([a],{type:n.type||t||"application/octet-stream"})}function n(e,t){return new Promise((r,o)=>{let n=new FileReader;n.onload=()=>{let o=String(n.result),a=o.slice(o.indexOf(",")+1);r(`data:${t||e.type||"application/octet-stream"};base64,${a}`)},n.onerror=()=>o(n.error??Error("read-failed")),n.readAsDataURL(e)})}e.s(["R",0,n,"B",0,o,"a",0,r],735025);var a=e.i(769920);let i=new Map,l=new Map,s=new Map,d=[],c=[],u=new Set,f=0,m=40,p=0,g=null,b=0,h=0;function y(e){return!e||e<0?2:Math.max(1,Math.floor(e/2))}function w(e,t){return`${e??""}|${t}`}function k(){for(let e of u)e()}function v(e){let t=i.get(e);return t&&(i.delete(e),i.set(e,t)),t}function S(e){let t=l.get(e);return void 0!==t&&(t>Date.now()||(l.delete(e),!1))}function A(e,t,r){let o=s.get(e);if(o){if(o.background&&!r.background){o.background=!1;let t=c.indexOf(e);t>=0&&(c.splice(t,1),d.push(e))}}else o={fetcher:t,viewers:0,forced:!1,keep:!1,background:!!r.background,concurrency:r.concurrency??2,retried:!1,waiters:[]},s.set(e,o),(o.background?c:d).push(e);return o}function x(e,t,r={}){let o=v(e);if(o)return Promise.resolve(o.blob);if(S(e))return Promise.resolve(null);let n=A(e,t,r);n.forced=!0;let a=new Promise(e=>n.waiters.push(e));return I(),a}function I(){for(;;){let e=d.length>0?d:c.length>0?c:null;if(!e)return;let t=e[0],r=s.get(t);if(!r||!r.forced&&r.viewers<=0){e.shift(),s.delete(t);continue}if(f>=r.concurrency)return;let o=20*(e===c);if(!function(){let e=Date.now();m=Math.min(40,m+Math.max(0,e-p)/1e3*6),p=e}(),m<1+o)return void function(e){let t=Date.now()+e;g&&b<=t||(g&&clearTimeout(g),b=t,g=setTimeout(()=>{g=null,I()},e))}(Math.ceil((1+o-m)/6*1e3));m-=1,e.shift(),function(e,t){let r;f++;let o=h;try{r=t.fetcher()}catch(e){r=Promise.reject(e)}r.then(r=>T(e,t,o,r,!1),()=>T(e,t,o,null,!0))}(t,r)}}function T(e,t,r,o,n){if(r===h&&f--,n&&!t.retried&&r===h){t.retried=!0,setTimeout(()=>{s.get(e)===t&&((t.background?c:d).push(e),I())},1e3),I();return}for(let d of(r===h&&(s.delete(e),n?l.set(e,Date.now()+12e4):o&&t.keep&&function(e,t){for(i.set(e,{blob:t,url:URL.createObjectURL((0,a.A)(t))});i.size>300;){let e=i.keys().next().value;URL.revokeObjectURL(i.get(e).url),i.delete(e)}k()}(e,o)),t.waiters))d(o);I()}e.s(["E",0,function(){for(let{url:e}of(h++,i.values()))URL.revokeObjectURL(e);for(let e of(i.clear(),l.clear(),s.values()))for(let t of e.waiters)t(null);d.length=0,c.length=0,s.clear(),f=0,m=40,p=0,g&&(clearTimeout(g),g=null),k()},"d",0,y,"r",0,w,"j",0,x,"P",0,function(e){return i.get(e)?.url},"$",0,function(e,t,r={}){if(v(e)||S(e))return()=>{};let o=A(e,t,r);o.viewers++,o.keep=!0,I();let n=!1;return()=>{!n&&(n=!0,o.viewers--)}},"k",0,function(e){return u.add(e),()=>{u.delete(e)}}],81583);var C=e.i(876686);function E(e){return Object.values(e??{}).some(e=>!!e?.blobId&&!e.uri)}function D(e,t,r={}){let{client:o}=t;return o?x(w(t.localAccountId,e.blobId),()=>o.fetchBlob(e.blobId,e.kind,e.mediaType,t.accountId),{concurrency:y(o.getMaxConcurrentRequests?.()),background:r.background}):Promise.resolve(null)}async function O(e,t,r){return Object.fromEntries((await Promise.all(Object.entries(e).map(async([e,o])=>{if(!o?.blobId)return[e,o];let{blobId:n,...a}=o;if(o.uri)return[e,a];let i=await t({...o,blobId:n});return i?[e,{...a,uri:i}]:"keep"===r?[e,o]:null}))).filter(e=>null!==e))}async function L(e,t,r){let o=await D(e,t,{background:r});return o?n(o,e.mediaType).catch(()=>null):null}async function M(e,t,r){return e?O(e,e=>L(e,t),r):e}async function R(e,t){let r=e=>`${e.localAccountId??""}|${e.accountId??""}`,o=new Map;for(let n of e){if(!E(n.media))continue;let e=r(n),a=o.get(e);for(let r of(a||(a={source:{client:t(n.localAccountId),accountId:n.accountId,localAccountId:n.localAccountId},entries:new Map},o.set(e,a)),Object.values(n.media??{})))r?.blobId&&!r.uri&&a.entries.set(r.blobId,r)}let n=new Map;for(let[e,{source:t,entries:r}]of o){let{client:o}=t;if(!o)continue;let a=[...r.values()],i=await o.getBlobsAsBase64?.([...r.keys()],t.accountId||o.getContactsAccountId()).catch(e=>(C.f.warn("contacts","Batched download of contact media failed:",e),null));if(i){for(let[t,o]of i.data){let a=r.get(t);a&&n.set(`${e}|${t}`,`data:${a.mediaType||"application/octet-stream"};base64,${o}`)}let t=new Set(i.failed);a=a.filter(e=>t.has(e.blobId))}await Promise.all(a.map(async r=>{let o=await L(r,t,!0);o&&n.set(`${e}|${r.blobId}`,o)}))}return Promise.all(e.map(async e=>{if(!E(e.media))return e;let t=r(e),o=await O(e.media,async e=>n.get(`${t}|${e.blobId}`)??null,"drop");return{...e,media:o}}))}async function N(e,r,n,a,i){let l,s=n.media?.[a],d=r||e.getContactsAccountId();if(!s?.uri||!e.supportsContactBlobMedia?.(d))return i(n);let c=o(s.uri,s.mediaType);if(!c)return i(n);try{let t=new File([c],"photo",{type:c.type});({blobId:l}=await e.uploadBlob(t,e.getContactsAccountId()))}catch(e){return C.f.warn("contacts","Contact photo upload failed, saving it inline:",e),i(n)}let{uri:u,...f}=s,m={...f,mediaType:s.mediaType??c.type,blobId:l};try{return await i({...n,media:{...n.media,[a]:m}})}catch(r){if(!("invalidProperties"===(0,t.K)(r)&&(0,t.o)(r).some(e=>"media"===e||e.startsWith("media/"))))throw r;return e.rejectContactBlobMedia?.(d),i(n)}}},876686,e=>{e.s(["f",()=>o]);var t=e.i(761066);function r(e){let r=t.k.getState();return!!r.debugMode&&(!e||r.debugCategories?.[e]!==!1)}let o={log:(e,...t)=>{var o;"string"==typeof e&&(o=e,n.has(o))?r(e)&&console.log(`[DEBUG:${e}]`,...t):r()&&console.log("[DEBUG]",e,...t)},warn:(e,...t)=>{var o;"string"==typeof e&&(o=e,n.has(o))?r(e)&&console.warn(`[DEBUG:${e}]`,...t):r()&&console.warn("[DEBUG]",e,...t)},error:(...e)=>{console.error("[ERROR]",...e)},group:(e,t)=>{r(t)&&console.group(`[DEBUG${t?":"+t:""}] ${e}`)},groupEnd:()=>{r()&&console.groupEnd()},time:(e,t)=>{r(t)&&console.time(`[DEBUG${t?":"+t:""}] ${e}`)},timeEnd:(e,t)=>{r(t)&&console.timeEnd(`[DEBUG${t?":"+t:""}] ${e}`)},table:(e,t)=>{r(t)&&console.table(e)}},n=new Set(["jmap","calendar","tasks","auth","filters","email","push","contacts"])},365076,e=>{let t={"extra-compact":{"--list-item-height":"auto","--density-item-py":"2px","--density-item-gap":"6px","--density-header-py":"4px","--density-card-p":"8px","--density-sidebar-py":"0px"},compact:{"--list-item-height":"auto","--density-item-py":"4px","--density-item-gap":"8px","--density-header-py":"6px","--density-card-p":"10px","--density-sidebar-py":"1px"},regular:{"--list-item-height":"48px","--density-item-py":"12px","--density-item-gap":"12px","--density-header-py":"12px","--density-card-p":"16px","--density-sidebar-py":"4px"},comfortable:{"--list-item-height":"64px","--density-item-py":"16px","--density-item-gap":"16px","--density-header-py":"16px","--density-card-p":"20px","--density-sidebar-py":"6px"}},r={"extra-compact":{...t["extra-compact"],"--list-item-height":"28px","--density-item-py":"4px"},compact:{...t.compact,"--list-item-height":"32px","--density-item-py":"6px"},regular:{...t.regular,"--list-item-height":"40px","--density-item-py":"10px"},comfortable:{...t.comfortable,"--list-item-height":"48px","--density-item-py":"14px"}};e.s(["f",0,function(e,o){return("mountain-view"===o?r:t)[e]}])},529744,424154,e=>{function t(e,t){this.v=e,this.k=t}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function o(e){var r,o;function n(r,o){try{var i=e[r](o),l=i.value,s=l instanceof t;Promise.resolve(s?l.v:l).then(function(t){if(s){var o="return"===r&&l.k?r:"next";if(!l.k||t.done)return n(o,t);t=e[o](t).value}a(!!i.done,t)},function(e){n("throw",e)})}catch(e){a(2,e)}}function a(e,t){2===e?r.reject(t):r.resolve({value:t,done:e}),(r=r.next)?n(r.key,r.arg):o=null}this._invoke=function(e,t){return new Promise(function(a,i){var l={key:e,arg:t,resolve:a,reject:i,next:null};o?o=o.next=l:(r=o=l,n(e,t))})},"function"!=typeof e.return&&(this.return=void 0)}o.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},o.prototype.next=function(e){return this._invoke("next",e)},o.prototype.throw=function(e){return this._invoke("throw",e)},o.prototype.return=function(e){return this._invoke("return",e)};let n=Object.entries,a=Object.setPrototypeOf,i=Object.isFrozen,l=Object.getPrototypeOf,s=Object.getOwnPropertyDescriptor,d=Object.freeze,c=Object.seal,u=Object.create,f="u">typeof Reflect&&Reflect,m=f.apply,p=f.construct;d||(d=function(e){return e}),c||(c=function(e){return e}),m||(m=function(e,t){for(var r=arguments.length,o=Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];return e.apply(t,o)}),p||(p=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return new e(...r)});let g=P(Array.prototype.forEach);Array.prototype.indexOf;let b=P(Array.prototype.lastIndexOf),h=P(Array.prototype.pop),y=P(Array.prototype.push),w=P(Array.prototype.slice),k=P(Array.prototype.splice),v=Array.isArray,S=_(Set),A=P(Set.prototype.add),x=P(Set.prototype.has),I=P(String.prototype.toLowerCase),T=P(String.prototype.toString),C=P(String.prototype.match),E=P(String.prototype.replace),D=P(String.prototype.indexOf),O=P(String.prototype.trim),L=P(Number.prototype.toString),M=P(Boolean.prototype.toString),R="u"<typeof BigInt?null:P(BigInt.prototype.toString),N="u"<typeof Symbol?null:P(Symbol.prototype.toString),B=P(Object.prototype.hasOwnProperty),$=P(Object.prototype.toString),j=P(RegExp.prototype.test),F=_(TypeError);function P(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var r=arguments.length,o=Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];return m(e,t,o)}}function _(e){return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return p(e,r)}}function z(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:I;if(a&&a(e,null),!v(t))return e;let o=t.length;for(;o--;){let n=t[o];if("string"==typeof n){let e=r(n);e!==n&&(i(t)||(t[o]=e),n=e)}e[n]=!0}return e}function U(e){let t=u(null);for(let a of n(e)){var o=function(e){if(Array.isArray(e))return e}(a)||function(e){var t=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,n,a,i=[],l=!0,s=!1;try{n=(t=t.call(e)).next,!1;for(;!(l=(r=n.call(t)).done)&&(i.push(r.value),2!==i.length);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(s)throw o}}return i}}(a)||function(e){if(e){if("string"==typeof e)return r(e,2);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,2):void 0}}(a)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();let n=o[0],i=o[1];B(e,n)&&(v(i)?t[n]=function(e){for(let t=0;t<e.length;t++)B(e,t)||(e[t]=null);return e}(i):i&&"object"==typeof i&&i.constructor===Object?t[n]=U(i):t[n]=i)}return t}function H(e,t){for(;null!==e;){let r=s(e,t);if(r){if(r.get)return P(r.get);if("function"==typeof r.value)return P(r.value)}e=l(e)}return function(){return null}}let W=d(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),G=d(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),V=d(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),K=d(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),q=d(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Y=d(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Z=d(["#text"]),J=d(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Q=d(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),X=d(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ee=d(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),et=c(/{{[\w\W]*|^[\w\W]*}}/g),er=c(/<%[\w\W]*|^[\w\W]*%>/g),eo=c(/\${[\w\W]*/g),en=c(/^data-[\-\w.\u00B7-\uFFFF]+$/),ea=c(/^aria-[\-\w]+$/),ei=c(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),el=c(/^(?:\w+script|data):/i),es=c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ed=c(/^html$/i),ec=c(/^[a-z][.\w]*(-[.\w]+)+$/i),eu=c(/<[/\w!]/g),ef=c(/<[/\w]/g),em=c(/<\/no(script|embed|frames)/i),ep=c(/\/>/i),eg=d(z({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),eb=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let r=null,o="data-tt-policy-suffix";t&&t.hasAttribute(o)&&(r=t.getAttribute(o));let n="dompurify"+(r?"#"+r:"");try{return e.createPolicy(n,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+n+" could not be created."),null}},eh=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},ey=function(e,t,r,o){return B(e,t)&&v(e[t])?z(o.base?U(o.base):{},e[t],o.transform):r},ew=function(e,t,r){let o=B(e,t)?e[t]:void 0;return o&&"object"==typeof o?U(o):r()};var ek=function e(){let t,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"u"<typeof window?null:window,a=t=>e(t);if(a.version="3.4.17",a.removed=[],!o||!o.document||9!==o.document.nodeType||!o.Element)return a.isSupported=!1,a;let i=o.document,f=i,m=f.currentScript;o.DocumentFragment;let p=o.HTMLTemplateElement,_=o.Node,ek=o.Element,ev=o.NodeFilter;void 0===o.NamedNodeMap&&(o.NamedNodeMap||o.MozNamedAttrMap),o.HTMLFormElement;let eS=o.DOMParser,eA=o.trustedTypes,ex=ek.prototype,eI=H(ex,"cloneNode"),eT=H(ex,"remove"),eC=H(ex,"removeAttributeNode"),eE=H(ex,"nextSibling"),eD=H(ex,"childNodes"),eO=H(ex,"parentNode"),eL=H(ex,"shadowRoot"),eM=H(ex,"attributes"),eR=_&&_.prototype?H(_.prototype,"nodeType"):null,eN=_&&_.prototype?H(_.prototype,"nodeName"):null,eB=_&&_.prototype?H(_.prototype,"ownerDocument"):null,e$=function(e){return eR?eR(e):e.nodeType},ej=function(e){return eN?eN(e):e.nodeName},eF=function(e,t){for(;null!==e;){let r=s(e,t);if(r)return r.get?P(r.get):null;e=l(e)}return null}(ex,"namespaceURI"),eP=function(e){return eF?eF(e):e.namespaceURI};if("function"==typeof p){let e=i.createElement("template");e.content&&e.content.ownerDocument&&(i=e.content.ownerDocument)}let e_="",ez=!1,eU=0,eH=function(){if(eU>0)throw F('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},eW=function(e){eH(),eU++;try{return t.createHTML(e)}finally{eU--}},eG=function(e){eH(),eU++;try{return t.createScriptURL(e)}finally{eU--}},eV=i,eK=eV.implementation,eq=eV.createNodeIterator,eY=eV.createDocumentFragment,eZ=eV.getElementsByTagName,eJ=f.importNode,eQ=eh();a.isSupported="function"==typeof n&&"function"==typeof eO&&eK&&void 0!==eK.createHTMLDocument;let eX=ei,e0=null,e1=z({},[...W,...G,...V,...q,...Z]),e2=null,e5=z({},[...J,...Q,...X,...ee]),e3=Object.seal(u(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),e4=null,e6=null,e8=Object.seal(u(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),e9=!0,e7=!0,te=!1,tt=!0,tr=!1,to=!0,tn=!1,ta=!1,ti=null,tl=null,ts=!1,td=!1,tc=!1,tu=!1,tf=!0,tm=!1,tp="user-content-",tg=!0,tb=!1,th=null,ty={},tw=null,tk=z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),tv=null,tS=z({},["audio","video","img","source","image","track"]),tA=null,tx=z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tI="http://www.w3.org/1998/Math/MathML",tT="http://www.w3.org/2000/svg",tC="http://www.w3.org/1999/xhtml",tE=tC,tD=!1,tO=null,tL=z({},[tI,tT,tC],T),tM=d(["mi","mo","mn","ms","mtext"]),tR=z({},tM),tN=d(["annotation-xml"]),tB=z({},tN),t$=z({},["title","style","font","a","script"]),tj=null,tF=["application/xhtml+xml","text/html"],tP=null,t_=null,tz=i.createElement("form"),tU=function(e){return e instanceof RegExp||e instanceof Function},tH=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t_&&t_===e)return;e&&"object"==typeof e||(e={}),e=U(e),tP="application/xhtml+xml"===(tj=-1===tF.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE)?T:I,e0=ey(e,"ALLOWED_TAGS",e1,{transform:tP}),e2=ey(e,"ALLOWED_ATTR",e5,{transform:tP}),tO=ey(e,"ALLOWED_NAMESPACES",tL,{transform:T}),tA=ey(e,"ADD_URI_SAFE_ATTR",tx,{transform:tP,base:tx}),tv=ey(e,"ADD_DATA_URI_TAGS",tS,{transform:tP,base:tS}),tw=ey(e,"FORBID_CONTENTS",tk,{transform:tP}),e4=ey(e,"FORBID_TAGS",U({}),{transform:tP}),e6=ey(e,"FORBID_ATTR",U({}),{transform:tP}),ty=!!B(e,"USE_PROFILES")&&(e.USE_PROFILES&&"object"==typeof e.USE_PROFILES?U(e.USE_PROFILES):e.USE_PROFILES),e9=!1!==e.ALLOW_ARIA_ATTR,e7=!1!==e.ALLOW_DATA_ATTR,te=e.ALLOW_UNKNOWN_PROTOCOLS||!1,tt=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,tr=e.SAFE_FOR_TEMPLATES||!1,to=!1!==e.SAFE_FOR_XML,tn=e.WHOLE_DOCUMENT||!1,td=e.RETURN_DOM||!1,tc=e.RETURN_DOM_FRAGMENT||!1,tu=e.RETURN_TRUSTED_TYPE||!1,ts=e.FORCE_BODY||!1,tf=!1!==e.SANITIZE_DOM,tm=e.SANITIZE_NAMED_PROPS||!1,tg=!1!==e.KEEP_CONTENT,tb=e.IN_PLACE||!1,eX=!function(e){try{return j(e,""),!0}catch(e){return!1}}(e.ALLOWED_URI_REGEXP)?ei:e.ALLOWED_URI_REGEXP,tE="string"==typeof e.NAMESPACE?e.NAMESPACE:tC,tR=ew(e,"MATHML_TEXT_INTEGRATION_POINTS",()=>z({},tM)),tB=ew(e,"HTML_INTEGRATION_POINTS",()=>z({},tN));let o=ew(e,"CUSTOM_ELEMENT_HANDLING",()=>u(null));if(e3=u(null),B(o,"tagNameCheck")&&tU(o.tagNameCheck)&&(e3.tagNameCheck=o.tagNameCheck),B(o,"attributeNameCheck")&&tU(o.attributeNameCheck)&&(e3.attributeNameCheck=o.attributeNameCheck),B(o,"allowCustomizedBuiltInElements")&&"boolean"==typeof o.allowCustomizedBuiltInElements&&(e3.allowCustomizedBuiltInElements=o.allowCustomizedBuiltInElements),c(e3),tr&&(e7=!1),tc&&(td=!0),ty&&(e0=z({},Z),e2=u(null),!0===ty.html&&(z(e0,W),z(e2,J)),!0===ty.svg&&(z(e0,G),z(e2,Q),z(e2,ee)),!0===ty.svgFilters&&(z(e0,V),z(e2,Q),z(e2,ee)),!0===ty.mathMl&&(z(e0,q),z(e2,X),z(e2,ee))),e8.tagCheck=null,e8.attributeCheck=null,B(e,"ADD_TAGS")&&("function"==typeof e.ADD_TAGS?e8.tagCheck=e.ADD_TAGS:v(e.ADD_TAGS)&&(e0===e1&&(e0=U(e0)),z(e0,e.ADD_TAGS,tP))),B(e,"ADD_ATTR")&&("function"==typeof e.ADD_ATTR?e8.attributeCheck=e.ADD_ATTR:v(e.ADD_ATTR)&&(e2===e5&&(e2=U(e2)),z(e2,e.ADD_ATTR,tP))),B(e,"ADD_FORBID_CONTENTS")&&v(e.ADD_FORBID_CONTENTS)&&(tw===tk&&(tw=U(tw)),z(tw,e.ADD_FORBID_CONTENTS,tP)),tg&&(e0["#text"]=!0),tn&&z(e0,["html","head","body"]),e0.table&&(z(e0,["tbody"]),delete e4.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw F('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw F('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let r=t;t=e.TRUSTED_TYPES_POLICY;try{e_=eW("")}catch(e){throw t=r,e}}else null===e.TRUSTED_TYPES_POLICY?(t=void 0,e_=""):(void 0===t&&(ez||(r=eb(eA,m),ez=!0),t=r),t&&"string"==typeof e_&&(e_=eW("")));d&&d(e),t_=e},tW=z({},[...G,...V,...K]),tG=z({},[...q,...Y]),tV=function(e){var t,r,o,n,a,i;let l,s,d=eP(e),c=I(ej(e)),u=eO(e);return u&&1===e$(u)?(l={namespaceURI:eP(u)},s=I(ej(u))):(l={namespaceURI:tE},s="template"),!!tO[d]&&(d===tT?(t=l,r=s,t.namespaceURI===tC?"svg"===c:t.namespaceURI===tI?"svg"===c&&("annotation-xml"===r||tR[r]):!!tW[c]):d===tI?(o=l,n=s,o.namespaceURI===tC?"math"===c:o.namespaceURI===tT?"math"===c&&tB[n]:!!tG[c]):d===tC?(a=l,i=s,(a.namespaceURI!==tT||!!tB[i])&&(a.namespaceURI!==tI||!!tR[i])&&!tG[c]&&(t$[c]||!tW[c])):"application/xhtml+xml"===tj&&!!tO[d])},tK=function(e){y(a.removed,{element:e});try{eO(e).removeChild(e)}catch(t){if(eT(e),!eO(e))throw F("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},tq=function(e,t,r){try{eC(e,t)}catch(t){try{e.removeAttribute(r)}catch(e){}}},tY=function(e){tX(e);let t=eD(e);t&&g(w(t),e=>{try{eT(e)}catch(e){}});let r=1===e$(e)?eM(e):null;if(r)for(let t=r.length-1;t>=0;--t){let o=r[t],n=o&&o.name;"string"==typeof n&&tq(e,o,n)}},tZ=function(e,t,r){if(!r)try{r=t.getAttributeNode(e)}catch(e){r=null}y(a.removed,{attribute:r||null,from:t});try{r?eC(t,r):t.removeAttribute(e)}catch(r){try{t.removeAttribute(e)}catch(e){}}if("is"===e)if(td||tc)try{tK(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},tJ=function(e){let t=eM(e);if(t)for(let r=t.length-1;r>=0;--r){let o=t[r],n=o&&o.name;"string"!=typeof n||e2[tP(n)]||tq(e,o,n)}},tQ=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=[e];for(;o.length>0;){let e=o.pop();if(!1===t(e))continue;if(r&&1===e$(e)){let t=eL(e);rn(t)&&o.push(t)}let n=eD(e);if(n)for(let e=n.length-1;e>=0;--e)o.push(n[e])}},tX=function(e){tQ(e,e=>{1===e$(e)&&tJ(e)})},t0=function(e){let t=[];return tQ(e,e=>{t.push(e)},!0),t},t1=function(e,t){let r=S();g(t0(e),e=>{1===e$(e)&&A(r,e)}),g(t,e=>{1!==e$(e)||x(r,e)||tJ(e)})},t2=function(e,t){let r=!1;return g(a.removed,t=>{t.element&&(r=r||t.element===e,tX(t.element))}),t1(e,t),r},t5=function(e,t){let r=th,o=null,n=()=>(o||(o=S(),g(t,e=>{A(o,e)})),o);for(let t=0;;t++){let o=t0(e),a=[e],i=!1;if(g(o,e=>{11===e$(e)?y(a,e):i||x(r,e)||(i=x(n(),e))}),!i)return;if(t>=8)throw F("the tree kept changing during in-place sanitization; refusing to return it");g(a,(t,r)=>{t3(t,r>0,e,n())})}},t3=function(e,t,r,o){let n,a=t7(e);for(;n=a.nextNode();)!(!x(o,n)||x(th,n))&&(t&&ri(eQ.uponSanitizeShadowNode,n,null),ru(n,r),ry(n,r),rn(n.content)&&rw(n.content))},t4=function(e){th&&A(th,e)},t6=function(e,t){return!!to&&("patchsrc"===e||"for"===e&&"label"!==t&&"output"!==t)},t8=function(e){to&&tQ(e,e=>{let t=e$(e);if(7===t||8===t&&j(ef,e.data)){try{eT(e)}catch(e){}return!1}if(1===t){let t=tP(ej(e));try{e.hasAttribute&&e.hasAttribute("patchsrc")&&e.removeAttribute("patchsrc"),e.hasAttribute&&e.hasAttribute("for")&&t6("for",t)&&e.removeAttribute("for")}catch(e){}}return!0})},t9=function(e){let r=null,o=null;if(ts)e="<remove></remove>"+e;else{let t=C(e,/^[\r\n\t ]+/);o=t&&t[0]}"application/xhtml+xml"===tj&&tE===tC&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");let n=t?eW(e):e;if(tE===tC)try{r=new eS().parseFromString(n,tj)}catch(e){}if(!r||!r.documentElement){r=eK.createDocument(tE,"template",null);try{r.documentElement.innerHTML=tD?e_:n}catch(e){}}let a=r.body||r.documentElement;return(e&&o&&a.insertBefore(i.createTextNode(o),a.childNodes[0]||null),tE===tC)?eZ.call(r,tn?"html":"body")[0]:tn?r.documentElement:a},t7=function(e){let t=eB?eB(e):e.ownerDocument;return eq.call(t||e,e,ev.SHOW_ELEMENT|ev.SHOW_COMMENT|ev.SHOW_TEXT|ev.SHOW_PROCESSING_INSTRUCTION|ev.SHOW_CDATA_SECTION,null)},re=function(e){return e=E(e,et," "),e=E(e,er," "),e=E(e,eo," ")},rt=function(e){var t;rr(e);let r=null==(t=e.querySelectorAll)?void 0:t.call(e,"template");r&&g(r,e=>{rn(e.content)&&rt(e.content)})},rr=function(e){e.normalize();let t=eB?eB(e):e.ownerDocument,r=eq.call(t||e,e,ev.SHOW_TEXT|ev.SHOW_COMMENT|ev.SHOW_CDATA_SECTION|ev.SHOW_PROCESSING_INSTRUCTION,null),o=r.nextNode();for(;o;)o.data=re(o.data),o=r.nextNode()},ro=function(e){let t=eN?eN(e):null;return"string"==typeof t&&"form"===tP(t)&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||e.attributes!==eM(e)||"function"!=typeof e.removeAttribute||"function"!=typeof e.removeAttributeNode||"function"!=typeof e.getAttributeNode||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes||e.nodeType!==eR(e)||e.childNodes!==eD(e))},rn=function(e){if(!eR||"object"!=typeof e||null===e)return!1;try{return 11===eR(e)}catch(e){return!1}},ra=function(e){if(!eR||"object"!=typeof e||null===e)return!1;try{return"number"==typeof eR(e)}catch(e){return!1}};function ri(e,t,r){0!==e.length&&g(e,e=>{e.call(a,t,r,t_)})}let rl=function(e,t){if(e instanceof RegExp)return j(e,t);if(e instanceof Function){for(var r=arguments.length,o=Array(r>2?r-2:0),n=2;n<r;n++)o[n-2]=arguments[n];return!!e(t,...o)}return!1},rs=function(e,t,r){if(!e4[t]&&rp(t)&&rl(e3.tagNameCheck,t))return!1;if(tg&&!tw[t]&&!tw[I(t)]){let t=eO(e),o=eD(e);if(o&&t){let n=o.length;for(let a=n-1;a>=0;--a){let n=e===r?eI(o[a],!0):o[a];t.insertBefore(n,eE(e))}}}return tK(e),!0},rd=function(e,t,r,o){return 0===e.length?t:t===r||t===o?U(t):t},rc=function(e,t){return e!==t&&null===eO(e)&&(tb&&tX(e),!0)},ru=function(e,t){if(t4(e),ri(eQ.beforeSanitizeElements,e,null),rc(e,t))return!0;if(ro(e))return tK(e),!0;let r=tP(ej(e));if(e0=rd(eQ.uponSanitizeElement,e0,e1,ti),ri(eQ.uponSanitizeElement,e,{tagName:r,allowedTags:e0}),rc(e,t))return!0;if(to&&e.hasChildNodes()&&!ra(e.firstElementChild)&&j(eu,e.textContent)&&j(eu,e.innerHTML)||to&&eg[r]&&1===e$(e)&&eP(e)===tC&&(ra(e.firstElementChild)||"string"==typeof e.textContent&&j(eu,e.textContent))||7===e.nodeType||to&&8===e.nodeType&&j(ef,e.data))return tK(e),!0;if(e4[r]||!(e8.tagCheck instanceof Function&&e8.tagCheck(r))&&!e0[r]){let o=rs(e,r,t);return!!(!1===o&&(ri(eQ.afterSanitizeElements,e,null),rc(e,t)))||o}if(1===e$(e)&&!tV(e)||("noscript"===r||"noembed"===r||"noframes"===r)&&j(em,e.innerHTML))return tK(e),!0;if(tr&&3===e.nodeType){let t=re(e.textContent);e.textContent!==t&&(y(a.removed,{element:e.cloneNode()}),e.textContent=t)}return ri(eQ.afterSanitizeElements,e,null),rc(e,t)},rf=function(e,t,r){if(e6[t]||t6(t,e)||tf&&("id"===t||"name"===t)&&(r in i||r in tz))return!1;let o=e2[t]||e8.attributeCheck instanceof Function&&e8.attributeCheck(t,e);return!!(e7&&j(en,t)||e9&&j(ea,t))||(o?!(!(tA[t]||j(eX,E(r,es,"")))&&("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==D(r,"data:")||!tv[e])&&(!te||j(el,E(r,es,""))))||!r:rp(e)&&rl(e3.tagNameCheck,e)&&rl(e3.attributeNameCheck,t,e)||"is"===t&&e3.allowCustomizedBuiltInElements&&rl(e3.tagNameCheck,r))},rm=z({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),rp=function(e){return!rm[I(e)]&&j(ec,e)},rg=function(e,r,o,n){if(t&&"object"==typeof eA&&"function"==typeof eA.getAttributeType&&!o)switch(eA.getAttributeType(e,r)){case"TrustedHTML":return eW(n);case"TrustedScriptURL":return eG(n)}return n},rb=function(e,t,r,o){try{if(r?e.setAttributeNS(r,t,o):e.setAttribute(t,o),ro(e))return tK(e),!1;return!0}catch(r){return tZ(t,e),!1}},rh=function(e,t){return!!(to&&j(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,t))||"attributename"===I(e)&&null!==C(t,"href")},ry=function(e,t){if(ri(eQ.beforeSanitizeAttributes,e,null),rc(e,t))return;let r=e.attributes;if(!r||ro(e))return;let o={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:e2=rd(eQ.uponSanitizeAttribute,e2,e5,tl),forceKeepAttr:void 0},n=r.length,i=tP(e.nodeName);for(;n--;){let t=r[n],l=t.name,s=t.namespaceURI,d=t.value,c=tP(l),u="value"===l?d:O(d),f=!1;if(o.attrName=c,o.attrValue=u,o.keepAttr=!0,o.forceKeepAttr=void 0,ri(eQ.uponSanitizeAttribute,e,o),u=o.attrValue,tm&&("id"===c||"name"===c)&&0!==D(u,tp)&&(tZ(l,e,t),u=tp+u,f=!0),rh(l,u)){tZ(l,e,t);continue}if(!o.forceKeepAttr){if(!o.keepAttr||!tt&&j(ep,u)||(tr&&(u=re(u)),!rf(i,c,u))){tZ(l,e,t);continue}(u=rg(i,c,s,u))!==d&&rb(e,l,s,u)&&f&&h(a.removed)}}ri(eQ.afterSanitizeAttributes,e,null),rc(e,t)},rw=function(e){let t=null,r=t7(e);for(ri(eQ.beforeSanitizeShadowDOM,e,null);t=r.nextNode();)if(ri(eQ.uponSanitizeShadowNode,t,null),ru(t,e),ry(t,e),rn(t.content)&&rw(t.content),1===e$(t)){let e=eL(t);rn(e)&&(rk(e),rw(e))}tr&&rr(e),ri(eQ.afterSanitizeShadowDOM,e,null)},rk=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){rw(e.shadow);continue}let r=e.node,o=1===e$(r),n=eD(r);if(n)for(let e=n.length-1;e>=0;--e)t.push({node:n[e],shadow:null});if(o){let e=eN?eN(r):null;if("string"==typeof e&&"template"===tP(e)){let e=r.content;rn(e)&&t.push({node:e,shadow:null})}}if(o){let e=eL(r);rn(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return a.sanitize=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=null,n=null,i=null,l=null;if((tD=!e)&&(e="<!-->"),"string"!=typeof e&&!ra(e)&&"string"!=typeof(e=function(e){switch(typeof e){case"string":return e;case"number":return L(e);case"boolean":return M(e);case"bigint":return R?R(e):"0";case"symbol":return N?N(e):"Symbol()";case"undefined":default:return $(e);case"function":case"object":{if(null===e)return $(e);let t=H(e,"toString");if("function"==typeof t){let r=t(e);return"string"==typeof r?r:$(r)}return $(e)}}}(e)))throw F("dirty is not a string, aborting");if(!a.isSupported)return e;ta?(e0=ti,e2=tl):tH(r),(eQ.uponSanitizeElement.length>0||eQ.uponSanitizeAttribute.length>0)&&(e0=U(e0)),eQ.uponSanitizeAttribute.length>0&&(e2=U(e2)),a.removed=[];let s=tb&&"string"!=typeof e&&ra(e),d=[],c=th;if(s){t8(e);let t=ej(e);if("string"==typeof t){let r=tP(t);if(!e0[r]||e4[r])throw tY(e),F("root node is forbidden and cannot be sanitized in-place")}if(ro(e))throw tY(e),F("root node is clobbered and cannot be sanitized in-place");d=t0(e),th=S()}else if(ra(e))1===(n=(o=t9("<!---->")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===n.nodeName||"HTML"===n.nodeName?o=n:o.appendChild(n),rk(o);else{if(!td&&!tr&&!tn&&-1===e.indexOf("<"))return t&&tu?eW(e):e;if(!(o=t9(e)))return td?null:tu?e_:""}o&&ts&&tK(o.firstChild);let u=s?e:o;try{s&&rk(e);let t=t7(u);for(;i=t.nextNode();)ru(i,u),ry(i,u),rn(i.content)&&rw(i.content);s&&t5(e,d)}catch(t){throw s&&(tY(e),t2(e,d)),t}finally{th=c}if(s){if(t2(e,d))throw F("a node selected for removal could not be safely returned; refusing to sanitize in place");return tr&&rt(e),e}if(td){if(tr&&rt(o),tc)for(l=eY.call(o.ownerDocument);o.firstChild;)l.appendChild(o.firstChild);else l=o;return(e2.shadowroot||e2.shadowrootmode)&&(l=eJ.call(f,l,!0)),l}let m=tn?o.outerHTML:o.innerHTML;return tn&&e0["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&j(ed,o.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+m),tr&&(m=re(m)),t&&tu?eW(m):m},a.setConfig=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};tH(e),ta=!0,ti=e0,tl=e2},a.clearConfig=function(){t_=null,ta=!1,ti=null,tl=null,t=r,e_=""},a.isValidAttribute=function(e,t,r){t_||tH({});let o=tP(e),n=tP(t);return!("string"==typeof r&&(rh(t,r)||!tt&&j(ep,r)))&&rf(o,n,r)},a.addHook=function(e,t){"function"!=typeof t||B(eQ,e)&&y(eQ[e],t)},a.removeHook=function(e,t){if(B(eQ,e)){if(void 0!==t){let r=b(eQ[e],t);return -1===r?void 0:k(eQ[e],r,1)[0]}return h(eQ[e])}},a.removeHooks=function(e){B(eQ,e)&&(eQ[e]=[])},a.removeAllHooks=function(){eQ=eh()},a}();e.s(["f",0,ek],424154);let ev={ADD_TAGS:[],ADD_ATTR:["target","rel","style","class","width","height","align","valign","bgcolor","color","data-quoted-html"],ALLOW_DATA_ATTR:!1,FORCE_BODY:!0,ALLOWED_URI_REGEXP:/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|blob):|data:image\/(?:png|jpe?g|gif|webp|bmp|avif|x-icon|vnd\.microsoft\.icon)(?=[;,])|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,FORBID_TAGS:["script","iframe","object","embed","form","input","button","meta","link","base","svg","math","style"],FORBID_ATTR:["onerror","onload","onclick","onmouseover","onfocus","onblur","onchange","onsubmit","onkeydown","onkeyup","onmousedown","onmouseup"]};function eS(e,t){ek.addHook("afterSanitizeAttributes",eB);try{return ek.sanitize(e,t)}finally{ek.removeAllHooks()}}let eA={...ev,ALLOW_DATA_ATTR:!0},ex={...ev,FORBID_TAGS:ev.FORBID_TAGS.filter(e=>"style"!==e)},eI={ALLOWED_TAGS:["p","br","b","strong","i","em","u","a","span","div","img","table","thead","tbody","tfoot","tr","td","th"],ALLOWED_ATTR:["href","style","class","src","alt","width","height","title","cellpadding","cellspacing","border","valign","align","bgcolor","colspan","rowspan"],ALLOW_DATA_ATTR:!1,FORBID_TAGS:["script","iframe","object","embed","video","audio"],FORBID_ATTR:["onerror","onload","onclick","onmouseover"]};function eT(e){if("IMG"!==e.tagName)return;let t=e.getAttribute("src");t&&/^(?:https:\/\/|data:image\/(?:png|jpe?g|gif|webp);base64,)/i.test(t)||e.remove()}let eC={...eI,ALLOWED_ATTR:[...eI.ALLOWED_ATTR,"target","rel"]},eE={...eI,ALLOWED_TAGS:[...eI.ALLOWED_TAGS,"ul","ol","li","blockquote","h1","h2","h3","pre","code","s","hr"]};function eD(e){if("IMG"!==e.tagName)return;let t=e.getAttribute("src");t&&/^(?:cid:|data:image\/(?:png|jpe?g|gif|webp);base64,)/i.test(t)||e.remove()}let eO={ALLOWED_TAGS:["a","b","strong","i","em","u","span","br","code"],ALLOWED_ATTR:["href","target","rel","class"],ALLOW_DATA_ATTR:!1,ALLOWED_URI_REGEXP:/^(?:https?:|mailto:|\/|#)/i},eL={ALLOWED_TAGS:["a","br","p","div","span","details","summary"],ALLOWED_ATTR:["href","target","rel","class","style","title"],ADD_URI_SAFE_ATTR:["target","rel"],ALLOW_DATA_ATTR:!1,ALLOWED_URI_REGEXP:/^(?:https?:|mailto:|tel:|cid:|#)/i},eM="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",eR=new Set(["IMG","VIDEO","AUDIO","SOURCE","TRACK"]),eN=/^data:image\/(?:png|jpe?g|gif|webp|bmp|avif|x-icon|vnd\.microsoft\.icon)[;,]/i;function eB(e){if(eR.has(e.tagName)){for(let t of["src","href","xlink:href"]){let r=e.getAttribute(t);if(!r)continue;let o=r.replace(/[\u0000-\u0020]+/g,"");/^data:/i.test(o)&&!eN.test(o)&&e.removeAttribute(t)}for(let t of["srcset","data-blocked-srcset"]){let r=e.getAttribute(t);r&&function(e){let t=e.match(/data:[^,\s]*,?/gi);return!!t&&t.some(e=>!eN.test(e))}(r)&&e.removeAttribute(t)}}}function e$(e){if(!e)return!1;let t=e.replace(/[\u0000-\u0020]+/g,"").replace(/\\/g,"/");return/^(?:https?:|\/\/)/i.test(t)}function ej(e){if(!e)return!1;let t=e.replace(/[\u0000-\u0020]+/g,"");return/^(?:https?:\/\/|\/\/)/i.test(t)}function eF(e){("A"===e.tagName||"AREA"===e.tagName)&&(ej(e.getAttribute("href"))?(e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")):(e.removeAttribute("target"),e.removeAttribute("rel")))}function eP(e){return e.replace(/\\([0-9a-fA-F]{1,6})\s?|\\(.)/g,(e,t,r)=>{if(t){let e=parseInt(t,16);return e?String.fromCodePoint(e):""}return r??""})}let e_=/url\(\s*(['"]?)([^)]*?)\1\s*(?:\)|$)/gi,ez=/(?:-webkit-)?image-set\(([^()]*(?:\([^()]*\)[^()]*)*)\)/gi,eU=/(['"])(.*?)\1/g;function eH(e){let t=!1;return e.replace(eU,(e,r,o)=>(e$(o)&&(t=!0),e)),t||eW(e)}function eW(e){let t=!1;return e.replace(e_,(e,r,o)=>(e$(o)&&(t=!0),e)),t}function eG(e){let t=eP(e);if(eW(t))return!0;let r=!1;return t.replace(ez,(e,t)=>(eH(t)&&(r=!0),e)),r}function eV(e){return eG(e)?eP(e).replace(ez,(e,t)=>eH(t)?"none":e).replace(e_,(e,t,r)=>e$(r)?"url()":e):e}function eK(e){return e.split(",").some(e=>e$(e.trim().split(/\s+/)[0]))}function eq(e){let t=!1,r=e.tagName;if("IMG"===r){let r=e.getAttribute("src");e$(r)&&(e.setAttribute("data-blocked-src",r.trim()),e.setAttribute("src",eM),e.setAttribute("alt",""),e.style.display="none",t=!0)}if("IMG"===r||"SOURCE"===r){let r=e.getAttribute("srcset");r&&eK(r)&&(e.setAttribute("data-blocked-srcset",r),e.removeAttribute("srcset"),t=!0)}if("SOURCE"===r){let r=e.getAttribute("src");e$(r)&&(e.setAttribute("data-blocked-src",r.trim()),e.removeAttribute("src"),t=!0)}if("VIDEO"===r||"AUDIO"===r){let r=e.getAttribute("poster");e$(r)&&(e.setAttribute("data-blocked-poster",r.trim()),e.removeAttribute("poster"),t=!0);let o=e.getAttribute("src");e$(o)&&(e.setAttribute("data-blocked-src",o.trim()),e.removeAttribute("src"),t=!0)}let o=e.getAttribute("background");e$(o)&&(e.setAttribute("data-blocked-background",o.trim()),e.removeAttribute("background"),t=!0);let n=e.getAttribute("style");if(n&&eG(n)&&(e.setAttribute("data-blocked-style",n),e.setAttribute("style",eV(n)),t=!0),"STYLE"===r){let r=e.textContent||"",o=function(e){if(!e)return e;let t=eP(e);if(!/url\(|@import|image-set\(/i.test(t))return e;let r=!1,o=t.replace(e_,(e,t,o)=>e$(o)?(r=!0,"url()"):e);return o=(o=o.replace(ez,(e,t)=>eH(t)?(r=!0,"none"):e)).replace(/@import\s+(['"])\s*(?:https?:)?\/\/[^'"]*\1[^;]*;?/gi,()=>(r=!0,"")),r?o:e}(r);o!==r&&(e.textContent=o,t=!0)}return t}let eY="data-bulwark-remote-",eZ=["src","poster","background"];function eJ(e){return new DOMParser().parseFromString(e,"text/html")}let eQ={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function eX(e){return e.replace(/[&<>"']/g,e=>eQ[e])}function e0(e){let t=eJ(`<body>${e}</body>`);return t.querySelectorAll("img[data-blocked-src]").forEach(e=>{let r=e.parentElement;for(;r&&r!==t.body;){if("TD"===r.tagName||"TH"===r.tagName||"DIV"===r.tagName&&r.parentElement?.tagName==="TD"){let e=r.textContent?.replace(/[\s\u00A0]+/g,"").trim(),t=r.querySelector("img:not([data-blocked-src]), video, canvas"),o=r.querySelector("a[href]");e||t||o||(r.setAttribute("data-blocked-collapsed-style",r.style.cssText),r.style.display="none",r.style.height="0",r.style.padding="0",r.style.overflow="hidden");break}if("TABLE"===r.tagName||"TR"===r.tagName)break;r=r.parentElement}}),t.body.innerHTML}e.s(["i",0,ev,"e",0,eM,"b",0,eF,"R",0,eq,"r",0,e0,"P",0,function(e,t=[]){let r=["data:",...t.filter(e=>/^https?:\/\/[^\s;,'"]+\/$/.test(e))].join(" ");return e?`default-src 'none'; img-src data: blob:; style-src 'unsafe-inline'; font-src ${r}; media-src data: blob:; base-uri 'none'; form-action 'none'; frame-src 'none'`:`default-src 'none'; img-src data: blob: http: https:; style-src 'unsafe-inline'; font-src ${r} http: https:; media-src data: blob: http: https:; base-uri 'none'; form-action 'none'; frame-src 'none'`},"f",0,eX,"J",0,e$,"N",0,function(e){if(!e)return!1;if(ej(e))return!0;let t=e.replace(/[\u0000-\u0020]+/g,"");return/^(?:ftps?|tel|sms|callto|xmpp):/i.test(t)},"l",0,function(e){let t=eJ(`<body>${e}</body>`),r=!1;for(let e of Array.from(t.body.querySelectorAll("*"))){for(let t of eZ){let o=e.getAttribute(t);e$(o)&&(e.setAttribute(eY+t,o),e.removeAttribute(t),r=!0)}let t=e.getAttribute("srcset");t&&eK(t)&&(e.setAttribute(eY+"srcset",t),e.removeAttribute("srcset"),r=!0);let o=e.getAttribute("style");o&&eG(o)&&(e.setAttribute(eY+"style",o),e.setAttribute("style",eV(o)),r=!0)}return{html:r?t.body.innerHTML:e,parked:r}},"p",0,eJ,"$",0,function(e,t=""){let r,o=/(https?:\/\/[^\s<>"']+)/g,n=t?` class="${eX(t)}"`:"",a="",i=0;for(;null!==(r=o.exec(e));){a+=eX(e.slice(i,r.index));let t=eX(r[0]);a+=`<a href="${t}" target="_blank" rel="noopener noreferrer"${n}>${t}</a>`,i=r.index+r[0].length}return a+eX(e.slice(i))},"E",0,function(e){if(!e.includes(eY))return e;let t=eJ(`<body>${e}</body>`);for(let e of Array.from(t.body.querySelectorAll("*")))for(let t of Array.from(e.attributes))t.name.startsWith(eY)&&(e.setAttribute(t.name.slice(eY.length),t.value),e.removeAttribute(t.name));return t.body.innerHTML},"m",0,eB,"O",0,function(e){return e?eS(e,eA):""},"Q",0,function(e,t){let r,o=t?{...ex,FORBID_TAGS:[...ex.FORBID_TAGS,"link"]}:ex,n=!1;ek.addHook("afterSanitizeAttributes",e=>{t&&eq(e)&&(n=!0),eF(e),eB(e)});try{r=ek.sanitize(e,o)}finally{ek.removeAllHooks()}return n&&(r=e0(r)),{html:r,blockedExternalContent:n}},"c",0,function(e){return eS(e,ev)},"B",0,function(e){return eS(e,ex)},"A",0,function(e){ek.addHook("uponSanitizeAttribute",(e,t)=>{("target"===t.attrName||"rel"===t.attrName)&&(t.forceKeepAttr=!0)}),ek.addHook("afterSanitizeAttributes",e=>{"A"===e.tagName&&"_blank"===e.getAttribute("target")&&e.setAttribute("rel","noopener noreferrer")});try{return ek.sanitize(e,eO)}finally{ek.removeAllHooks()}},"S",0,function(e){return ek.sanitize(e,eL)},"K",0,function(e){if(!e?.trim())return"";ek.addHook("afterSanitizeAttributes",eD);try{return ek.sanitize(e,eE)}finally{ek.removeAllHooks()}},"D",0,function(e){if(!e?.trim())return"";ek.addHook("afterSanitizeAttributes",eT);try{return ek.sanitize(e,eI)}finally{ek.removeAllHooks()}},"L",0,function(e){if(!e?.trim())return"";ek.addHook("afterSanitizeAttributes",e=>{eT(e),"A"===e.tagName&&(e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer"))});try{return ek.sanitize(e,eC)}finally{ek.removeAllHooks()}}],529744)},993032,198226,602830,e=>{e.s(["f",()=>o],993032);var t=e.i(800769),r=e.i(393475);function o(e){let o="";if(o+="=== EMAIL HEADERS ===\n\n",e.messageId&&(o+=`Message-ID: ${e.messageId}
`),e.from&&(o+=`From: ${e.from.map(e=>e.name?`${e.name} <${e.email}>`:e.email).join(", ")}
`),e.to&&(o+=`To: ${e.to.map(e=>e.name?`${e.name} <${e.email}>`:e.email).join(", ")}
`),e.cc&&(o+=`Cc: ${e.cc.map(e=>e.name?`${e.name} <${e.email}>`:e.email).join(", ")}
`),e.bcc&&(o+=`Bcc: ${e.bcc.map(e=>e.name?`${e.name} <${e.email}>`:e.email).join(", ")}
`),e.replyTo&&(o+=`Reply-To: ${e.replyTo.map(e=>e.name?`${e.name} <${e.email}>`:e.email).join(", ")}
`),e.subject&&(o+=`Subject: ${e.subject}
`),e.sentAt&&(o+=`Date: ${new Date(e.sentAt).toUTCString()}
`),e.receivedAt&&(o+=`Received-At: ${new Date(e.receivedAt).toUTCString()}
`),e.inReplyTo&&(o+=`In-Reply-To: ${e.inReplyTo.join(", ")}
`),e.references&&(o+=`References: ${e.references.join(", ")}
`),e.headers&&(o+="\n--- Additional Headers ---\n",Object.entries(e.headers).forEach(([e,t])=>{let r=Array.isArray(t)?t.join("\n    "):String(t);o+=`${e}: ${r}
`})),e.authenticationResults&&(o+="\n--- Authentication Results ---\n",e.authenticationResults.spf&&(o+=`SPF: ${e.authenticationResults.spf.result}`,e.authenticationResults.spf.domain&&(o+=` (${e.authenticationResults.spf.domain})`),o+="\n"),e.authenticationResults.dkim&&(o+=`DKIM: ${e.authenticationResults.dkim.result}`,e.authenticationResults.dkim.domain&&(o+=` (${e.authenticationResults.dkim.domain})`),o+="\n"),e.authenticationResults.dmarc&&(o+=`DMARC: ${e.authenticationResults.dmarc.result}`,e.authenticationResults.dmarc.policy&&(o+=` policy=${e.authenticationResults.dmarc.policy}`),o+="\n")),void 0!==e.spamScore&&(o+=`Spam Score: ${e.spamScore}`,e.spamStatus&&(o+=` (${e.spamStatus})`),o+="\n"),o+="\n=== EMAIL METADATA ===\n\n",o+=`Email ID: ${e.id}
`,o+=`Thread ID: ${e.threadId}
`,o+=`Size: ${(0,r.e)(e.size)}
`,o+=`Has Attachment: ${e.hasAttachment?"Yes":"No"}
`,e.keywords){let r=Object.entries(e.keywords).filter(([e,r])=>r&&!(0,t.i)(e)).map(([e])=>e).join(", ");r&&(o+=`Keywords: ${r}
`)}e.attachments&&e.attachments.length>0&&(o+="\n=== ATTACHMENTS ===\n\n",e.attachments.forEach((e,t)=>{o+=`[${t+1}] ${e.name||"Unnamed"}
`,o+=`    Type: ${e.type}
`,o+=`    Size: ${(0,r.e)(e.size)}
`,o+=`    Blob ID: ${e.blobId}
`,e.cid&&(o+=`    Content-ID: ${e.cid}
`),o+="\n"})),o+="\n=== EMAIL BODY ===\n\n";let n=!1;if(e.textBody?.[0]?.partId&&e.bodyValues?.[e.textBody[0].partId]){let t=e.bodyValues[e.textBody[0].partId].value;t&&t.trim()&&(o+="--- Plain Text Version ---\n\n",o+=t,o+="\n\n",n=!0)}if(e.htmlBody?.[0]?.partId&&e.bodyValues?.[e.htmlBody[0].partId]){let t=e.bodyValues[e.htmlBody[0].partId].value;t&&t.trim()&&(o+="--- HTML Version ---\n\n",o+=t,o+="\n\n",n=!0)}if(!n&&e.bodyValues){let t=Object.keys(e.bodyValues);t.length>0&&(o+="--- Body Parts ---\n\n",t.forEach((t,r)=>{let a=e.bodyValues[t].value;a&&a.trim()&&(o+=`Part ${r+1} (${t}):
`,o+=a,o+="\n\n",n=!0)}))}return!n&&e.preview&&(o+="--- Preview Only ---\n\n",o+=e.preview,o+="\n"),n||e.preview||(o+="(No body content available)\n"),o}let n={File:"file",Directory:"directory",SymLink:"symlink"};e.s(["x",0,function(e){switch(e.nodeType){case"file":case"directory":case"symlink":return e.nodeType;default:return null==e.blobId?"directory":"file"}},"O",0,function(e){let t="string"==typeof e["@type"]?n[e["@type"]]:void 0,r="string"==typeof e.mediaType?e.mediaType:void 0;return t||void 0!==r?{...e,...t&&!e.nodeType?{nodeType:t}:{},...void 0!==r&&null==e.type?{type:r}:{}}:e},"H",0,function(e){let{type:t,...r}=e;return null==r.blobId?{"@type":"Directory",...r}:{"@type":"File",...r,mediaType:t}}],198226);let a={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:" "};function i(e,t){let r=RegExp(`\\s${t}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,"i").exec(e);return r?(r[1]??r[2]??r[3]??"").replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi,(e,t)=>{if("#"===t[0]){let r="x"===t[1]||"X"===t[1]?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Number.isFinite(r)&&r>0&&r<1114112?String.fromCodePoint(r):e}return a[t.toLowerCase()]??e}):null}function l(e){let t=e.trim().replace(/^cid:/i,"").replace(/^<|>$/g,"");try{t=decodeURIComponent(t)}catch{}return t.toLowerCase()}e.s(["C",0,function(e,t){if(!e.cid)return{};let r=e.cid.replace(/^<|>$/g,""),o=t.get(l(r));return{cid:r,...o?{alt:o}:{}}},"D",0,function(e){let t=new Map,r=e.bodyValues??{};for(let o of e.htmlBody??[]){let e=r[o.partId]?.value;if("string"==typeof e)for(let[r]of e.matchAll(/<img\b[^>]*>/gi)){let e=i(r,"src");if(!e||!/^cid:/i.test(e.trim()))continue;let o=(i(r,"alt")??i(r,"title")??"").replace(/\s+/g," ").trim(),n=l(e);o&&!t.has(n)&&t.set(n,o.slice(0,500))}}return t},"d",0,function(e){return e?{}:{blobsReadable:!1}}],602830)},273952,e=>{var t=e.i(529744);let r=new Set(["address","article","aside","blockquote","div","dd","dl","dt","footer","h1","h2","h3","h4","h5","h6","header","li","nav","ol","p","pre","section","table","tr","ul"]),o=new Set(["blockquote","h1","h2","h3","h4","h5","h6","ol","p","pre","table","ul"]);e.s(["f",0,function(e,n={}){return function e(t,n){let{paragraphSpacing:a=!1,mailMarkup:i=!1}=n,l=[],s=e=>{if(!e)return;let t=e.replace(/\s+/g," ");if(!t.trim())return;let r=l[l.length-1];!r||r.endsWith("\n")||r.endsWith(" ")||t.startsWith(" ")||l.push(" "),l.push(t)},d=()=>{let e=0;for(let t=l.length-1;t>=0;t--){let r=l[t],o=r.length-1,n=0;for(;o>=0&&"\n"===r[o];)n++,o--;if(e+=n,o>=0)break}return e},c=e=>{if(0!==l.length)for(let t=d();t<e;t++)l.push("\n")},u=t=>{if(t.nodeType===Node.TEXT_NODE)return void s(t.textContent||"");if(t.nodeType!==Node.ELEMENT_NODE)return;let d=t.tagName.toLowerCase();if("style"===d||"script"===d)return;if("img"===d){let e=t.getAttribute("alt")?.replace(/\s+/g," ").trim();e&&n.imageAlt&&s(n.imageAlt(e));return}if("br"===d){l.length>0&&l.push("\n");return}if("a"===d){let e=t.textContent?.replace(/\s+/g," ").trim()||"",r=t.getAttribute("href")?.trim()||"",o=r.replace(/^mailto:/i,"");if(e&&o&&e===o||/^mailto:/i.test(r)&&e.startsWith("@")&&0===t.children.length)return void s(e);if(e&&r&&e!==r)return void s(`${e} <${r}>`)}let f=a&&o.has(d)?2:1,m=r.has(d);if(i&&("blockquote"===d||t.hasAttribute("data-quoted-html"))){let r=e(t.childNodes,n);r&&(c(f),l.push(r.split("\n").map(e=>e?`> ${e}`:">").join("\n")),c(f));return}if(i&&"li"===d){let e=t.parentElement,r="- ";if(e?.tagName.toLowerCase()==="ol"){let o=Number(e.getAttribute("start")??1)||1,n=Array.from(e.children).filter(e=>"li"===e.tagName.toLowerCase()).indexOf(t);r=`${o+n}. `}c(1),l.push(r),Array.from(t.childNodes).forEach(u),c(1);return}m&&c(f),Array.from(t.childNodes).forEach(u),m&&c(f)};return Array.from(t).forEach(u),l.join("").replace(/\r\n?/g,"\n").replace(RegExp(String.fromCharCode(160),"g")," ").split("\n").map(e=>/^--[ \t]*$/.test(e)?"-- ":e.replace(/[ \t]+$/,"")).join("\n").replace(/\n{3,}/g,"\n\n").trim()}((0,t.p)(e).body.childNodes,n)}])},282255,e=>{let t=new WeakMap;e.s(["f",0,function(e){let r=t.get(e);if(r&&Date.now()-r.loadedAt<3e5)return r.listing;let o=(e.listPrincipals?e.listPrincipals():e.getPrincipals().then(e=>({principals:e,status:"ok"}))).catch(()=>({principals:[],status:"error"})),n={loadedAt:Date.now(),listing:o};return t.set(e,n),o.then(({status:r})=>{"error"===r&&t.get(e)===n&&t.delete(e)}),o}])},800769,e=>{let t=new Set(["$hasattachment","$hasnoattachment"]);e.s(["K",0,t,"i",0,function(e){return t.has(e.toLowerCase())}])},47126,e=>{var t=e.i(760929),r=e.i(529744);let o=["name","email","identity","company","domain","title","department","phone","mobile"],n={title:"",department:"",phone:"",mobile:""};function a(e){return RegExp(`\\{(${e.map(e=>e.replace(/[^\w]/g,"")).filter(Boolean).join("|")})\\}`,"g")}let i=a(o);function l(e,t=i){let r=new Set;for(let o of e.matchAll(t))r.add(o[1]);return[...r]}function s(e){let r=new Set([...l(e.html),...l(e.text)]);return t.a.filter(e=>r.has(e))}let d=(e,t)=>(e[t]??"").trim();function c(e,t,r){return e.replace(r,(e,r)=>d(t,r))}function u(e,t){return e.length>0&&e.every(e=>!d(t,e))}function f(e,t,r=o){let n=r===o?i:a(r);return e.replace(/\r\n?/g,"\n").split("\n").filter(e=>!u(l(e,n),t)).map(e=>c(e,t,n)).join("\n").trim()}let m=new Set(["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CENTER","DD","DIV","DL","DT","FOOTER","H1","H2","H3","H4","H5","H6","HEADER","HR","LI","OL","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"]),p=new Set(["IMG","SVG","PICTURE","VIDEO"]),g=e=>1===e.nodeType;function b(e,t){let r=[],o=e=>{if(3===e.nodeType)return void r.push(...l(e.textContent??"",t));if(g(e)){for(let o of Array.from(e.attributes))r.push(...l(o.value,t));e.childNodes.forEach(o)}};return e.forEach(o),r}let h=e=>(e.textContent??"").trim().length>0||null!==e.querySelector("img, hr, svg, picture, video");function y(e,t){let r=e.parentElement;for(e.parentNode?.removeChild(e);r&&r!==t&&!h(r)&&!r.querySelector("br");){let e=r.parentElement;r.remove(),r=e}}function w(e,t,n=o){var s;let f,k=n===o?i:a(n);if("u"<typeof DOMParser)return e.replace(k,(e,o)=>(0,r.f)(d(t,o))).trim();let v=new DOMParser().parseFromString(`<!doctype html><html><body>${e}</body></html>`,"text/html");return!function e(t,r,o,n){let a,i,s,d;if(0===b([t],n).length)return;if("TR"===t.tagName&&u(b([t],n),r))return void t.remove();let c=[],f=e=>{for(let t of Array.from(e.children))m.has(t.tagName)?c.push(t):f(t)};f(t),c.forEach(t=>e(t,r,!1,n));let w=(a=[],i=[],s=(e,t)=>{a.push({leaves:i,br:e,endsAtBlock:t}),i=[]},d=e=>{if(3===e.nodeType)return void i.push(e);g(e)&&(g(e)&&m.has(e.tagName)?s(null,!0):"BR"===e.tagName?s(e,!1):p.has(e.tagName)?i.push(e):e.childNodes.forEach(d))},t.childNodes.forEach(d),s(null,!1),a);w.forEach((e,o)=>{if(!u(function(e,t,r){let o=b(e.leaves,r),n=new Set;for(let r of e.leaves)for(let e=r.parentElement;e&&e!==t;e=e.parentElement)n.add(e);for(let e of n)for(let t of Array.from(e.attributes))o.push(...l(t.value,r));return o}(e,t,n),r))return;let a=!1;for(let r of e.leaves)g(r)&&p.has(r.tagName)&&0===b([r],n).length?a=!0:y(r,t);if(!a){if(e.br)return void y(e.br,t);for(let e=o-1;e>=0&&!w[e].endsAtBlock;e--){let r=w[e].br;if(r?.parentNode){y(r,t);break}}}}),o||h(t)||t.remove()}(v.body,t,!0,k),s=v.body,f=e=>{if(3===e.nodeType){let r=e.textContent??"";l(r,k).length>0&&(e.textContent=c(r,t,k));return}if(g(e)){for(let r of Array.from(e.attributes))l(r.value,k).length>0&&e.setAttribute(r.name,c(r.value,t,k));e.childNodes.forEach(f)}},s.childNodes.forEach(f),v.body.innerHTML.trim()}let k=e=>e.locked||e.hidden;e.s(["W",0,n,"z",0,function(e,t){let r=e?.html?.trim()??"",o=e?.text?.trim()??"";return r||o?{html:r?w(r,t):"",text:o?f(o,t):""}:null},"x",0,function(e,t,r,o){if(!r||!k(o)&&(e?.htmlSignature?.trim()||e?.textSignature?.trim()))return e;let n=t??e;return n?{...n,htmlSignature:r.html,textSignature:r.text}:e},"E",0,w,"T",0,f,"Y",0,k,"Q",0,a,"R",0,l,"Z",0,function(e){let r={...n};if(!e||"object"!=typeof e||Array.isArray(e))return r;for(let o of t.a){let t=e[o];"string"==typeof t&&(r[o]=t.slice(0,200))}return r},"y",0,function(e){let r=new Set([...e.fields,...s(e)]);return t.a.filter(e=>r.has(e))},"U",0,s,"h",0,function(e){return{locked:e?.locked===!0,hidden:e?.hidden===!0}},"u",0,function(e,t,r){let o=e?.email?.trim()??"",n=e?.name?.trim()??"",a=o.lastIndexOf("@");return{name:n,email:o,identity:n&&o?`${n} <${o}>`:n||o,company:r.trim(),domain:a>=0?o.slice(a+1).toLowerCase():"",title:t?.title??"",department:t?.department??"",phone:t?.phone??"",mobile:t?.mobile??""}}])},855340,e=>{function t(e){let t=e.trim();return t.length>=2&&t.startsWith('"')&&t.endsWith('"')?t.slice(1,-1).replace(/\\(["\\])/g,"$1").trim():t}function r(e){return e?t(t(e).replace(/\s*<[^<>]*>?\s*$/,"")):""}e.s(["U",0,r,"Q",0,function(e){let t,o=e.trim(),n=(t=o.match(/<([^<>]*)>?\s*$/))?t[1].trim():o.includes("@")?o:"";if(!n)return{email:o};let a=r(o.slice(0,o.lastIndexOf(n)).replace(/<\s*$/,""));return a&&a!==n?{name:a,email:n}:{email:n}}])},393475,327336,550516,10695,e=>{e.s(["r",()=>ee,"c",()=>J,"t",()=>et,"C",()=>P,"s",()=>U,"e",()=>Q,"b",()=>H,"o",()=>B,"W",()=>er,"h",()=>N,"j",()=>$],393475),e.s(["i",()=>u,"u",()=>h,"L",()=>O,"w",()=>D,"S",()=>C,"y",()=>m,"c",()=>w,"x",()=>I,"T",()=>S,"G",()=>L,"M",()=>g,"I",()=>R,"N",()=>x,"J",()=>k,"X",()=>y,"Y",()=>E,"b",()=>A,"Z",()=>T],10695);var t=e.i(876686),r=e.i(160889);let o=new Set(["tw","hk","mo"]);var n=e.i(253509);function a(e){if("u"<typeof navigator)return e;for(let e of navigator.languages?.length?navigator.languages:[navigator.language]){if(!e)continue;let t=function(e,t){let r=e.trim().replace(/_/g,"-").toLowerCase();if(!r||"*"===r)return null;let n=new Map(t.map(e=>[e.toLowerCase(),e])),a=n.get(r);if(a)return a;let i=r.split("-"),l=i[0];if("zh"!==l)return n.get(l)??null;let s=i.find(e=>"hans"===e||"hant"===e),d=i.find(e=>o.has(e));return"hant"===s||!s&&d?n.get("zh-tw")??n.get("zh")??null:n.get("zh")??n.get("zh-tw")??null}(e,r.n.locales);if("en"===t)break;if(t)return t}return e}function i(){let e=n.f.getState().locale;return e&&"auto"!==e?e:"u">typeof document&&document.documentElement.lang?document.documentElement.lang:a("en")}e.s(["Z",0,a,"m",0,i],327336);var l=e.i(761066),s=e.i(845110),d=e.i(585890);function c(e,t,r){let[o,n]=(0,s.f)(r?.in,e,t);return+(0,d.f)(o)==+(0,d.f)(n)}e.s(["f",0,c],550516);let u="auto",f=null;function m(){if(f)return f;try{f=Intl.DateTimeFormat().resolvedOptions().timeZone||"UTC"}catch{f="UTC"}return f}let p=new Map;function g(e){if("string"!=typeof e||!e)return!1;let t=p.get(e);if(void 0===t){try{new Intl.DateTimeFormat("en-US",{timeZone:e}),t=!0}catch{t=!1}p.set(e,t)}return t}let b=new Map;function h(e){let t=b.get(e);if(void 0===t){try{t=new Intl.DateTimeFormat(void 0,{timeZone:e}).resolvedOptions().timeZone||null}catch{t=null}b.set(e,t)}return t}function y(e,t=m()){return e&&e!==u?h(e)??t:t}function w(){return y(l.k.getState().timeZone)}function k(e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2}))?)?$/);return t?{year:Number(t[1]),month:Number(t[2]),day:Number(t[3]),hour:Number(t[4]||0),minute:Number(t[5]||0),second:Number(t[6]||0)}:null}let v=new Map;function S(e,t){let r,o=(!(r=v.get(t))&&(r=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),v.set(t,r)),r).formatToParts(e),n={};for(let e of o)"literal"!==e.type&&(n[e.type]=Number(e.value));return{year:n.year,month:n.month,day:n.day,hour:24===n.hour?0:n.hour,minute:n.minute,second:n.second}}function A(e,t){if(!/(?:Z|[+-]\d{2}:?\d{2})$/i.test(e))return e;let r=new Date(e);if(Number.isNaN(r.getTime()))return e;let o=S(r,t||"UTC"),n=(e,t=2)=>String(e).padStart(t,"0");return`${n(o.year,4)}-${n(o.month)}-${n(o.day)}T${n(o.hour)}:${n(o.minute)}:${n(o.second)}`}function x(e,t,r){let o=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/.exec(e);if(!o||t===r)return e;let[n,a,i,l,s,d]=o.slice(1).map(Number),c=new Date(0);c.setUTCFullYear(n,a-1,i),c.setUTCHours(l,s,d,0);let u=c.getTime(),f=u-I(new Date(u),t);return A(new Date(u-I(new Date(f),t)).toISOString(),r)}function I(e,t){let r=S(e,t);return Date.UTC(r.year,r.month-1,r.day,r.hour,r.minute,r.second)-1e3*Math.floor(e.getTime()/1e3)}function T(e,t){var r,o;let n;return isNaN(e.getTime())?e:(r=S(e,t),o=e.getMilliseconds(),(n=new Date(0)).setFullYear(r.year,r.month-1,r.day),n.setHours(r.hour,r.minute,r.second,o),n)}function C(e,t){let r=new Date(0);r.setUTCFullYear(e.year,e.month-1,e.day),r.setUTCHours(e.hour,e.minute,e.second,0);let o=r.getTime(),n=o-I(new Date(o),t);return new Date(o-I(new Date(n),t))}function E(e){let t=w();return t===m()?e:T(e,t)}function D(e){let t=w();if(t===m())return e;if(isNaN(e.getTime()))return e;let r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),o=r-I(new Date(r),t);return new Date(r-I(new Date(o),t))}function O(){return E(new Date)}function L(e){return c(e,O())}let M=["UTC","Pacific/Honolulu","America/Anchorage","America/Los_Angeles","America/Denver","America/Phoenix","America/Chicago","America/Mexico_City","America/New_York","America/Toronto","America/Bogota","America/Halifax","America/Sao_Paulo","America/Argentina/Buenos_Aires","Atlantic/Azores","Europe/London","Europe/Lisbon","Europe/Dublin","Europe/Paris","Europe/Berlin","Europe/Madrid","Europe/Rome","Europe/Amsterdam","Europe/Zurich","Europe/Vienna","Europe/Prague","Europe/Warsaw","Europe/Stockholm","Europe/Athens","Europe/Helsinki","Europe/Kyiv","Europe/Istanbul","Europe/Moscow","Asia/Jerusalem","Asia/Dubai","Asia/Tehran","Asia/Karachi","Asia/Kolkata","Asia/Dhaka","Asia/Bangkok","Asia/Jakarta","Asia/Shanghai","Asia/Hong_Kong","Asia/Singapore","Asia/Taipei","Asia/Seoul","Asia/Tokyo","Australia/Perth","Australia/Adelaide","Australia/Sydney","Pacific/Auckland","Africa/Cairo","Africa/Johannesburg","Africa/Lagos","Africa/Nairobi"];function R(){let e=M;try{let t=Intl,r=t.supportedValuesOf?.("timeZone");r&&r.length>0&&(e=r)}catch{}return["UTC",...e.filter(e=>"UTC"!==e).sort()]}function N(e){try{let t=new URL(e);if(t.username||t.password)return t.username="",t.password="",t.toString();return e}catch{return e.replace(/^([a-zA-Z][a-zA-Z0-9+.-]*:\/\/)[^/@\s]+@/,"$1")}}function B(){if("u">typeof crypto&&"function"==typeof crypto.randomUUID)return crypto.randomUUID();let e=new Uint8Array(16);crypto.getRandomValues(e),e[6]=15&e[6]|64,e[8]=63&e[8]|128;let t=Array.from(e,e=>e.toString(16).padStart(2,"0")).join("");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}function $(e,t){switch(e){case"iso":return"en-CA";case"en-GB":return"en-GB";case"en-US":return"en-US";default:return t}}let j=new Map;function F(e,t){let r=`${e}|${JSON.stringify(t)}`,o=j.get(r);return o||(o=new Intl.DateTimeFormat(e,t),j.set(r,o)),o}function P(e,t){let r="string"==typeof e?new Date(e):e;if(!r||Number.isNaN(r.getTime()))return"";let o=new Date,n=i(),a=l.k.getState(),s=t&&"dateFormat"in t?t.dateFormat:a.dateFormat,d=t&&"dateLocale"in t?t.dateLocale:a.dateLocale,c=a.timeFormat,u=w(),f=`${r.getTime()}|${Math.floor(o.getTime()/6e4)}|${n}|${s}|${d}|${c}|${u}|${t?.listStyle??""}`,m=_.get(f);if(void 0!==m)return m;_.size>=z&&_.clear();let p=function(e,t,r,o,n,a,i,l){let s="en"===r?"en-US":r,d=$(n,s),c="12h"===a;if("relative"===o){let r=t.getTime()-e.getTime(),o=Math.floor(r/6e4),n=Math.floor(r/36e5),a=Math.floor(r/864e5),l=new Intl.RelativeTimeFormat(s,{numeric:"auto"});return o<1?l.format(0,"second"):o<60?l.format(-o,"minute"):n<24?l.format(-n,"hour"):a<7?l.format(-a,"day"):F(s,{timeZone:i,month:"short",day:"numeric",year:S(e,i).year!==S(t,i).year?"numeric":void 0}).format(e)}if("full"===o)return F(d,{timeZone:i,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:c}).format(e);let u=F(s,{timeZone:i,hour:"2-digit",minute:"2-digit",hour12:c}).format(e),f=S(e,i),m=S(t,i);if(f.year===m.year&&f.month===m.month&&f.day===m.day)return u;if("mountain-view"===l)return f.year===m.year?F(s,{timeZone:i,month:"short",day:"numeric"}).format(e):F(d,{timeZone:i,year:"2-digit",month:"numeric",day:"numeric"}).format(e);let p=Math.round((Date.UTC(m.year,m.month-1,m.day)-Date.UTC(f.year,f.month-1,f.day))/864e5);if(p>=0&&p<7){let t=F(s,{timeZone:i,weekday:"short"}).format(e).replace(/\.$/,"");return`${t} ${u}`}return f.year===m.year&&(n??"auto")==="auto"?F(s,{timeZone:i,month:"short",day:"numeric"}).format(e):F(d,{timeZone:i,year:"numeric",month:"2-digit",day:"2-digit"}).format(e)}(r,o,n,s,d,c,u,t?.listStyle);return _.set(f,p),p}let _=new Map,z=2e3;function U(e,t,r){let o="string"==typeof e?new Date(e):e;if(isNaN(o.getTime()))return"string"==typeof e?e:"";let{dateLocale:n}=l.k.getState(),a=$(n,void 0),i={timeZone:w()};return r?.weekday&&(i.weekday=r.weekday),r?.year&&(i.year=r.year),r?.month&&(i.month=r.month),r?.day&&(i.day=r.day),!r?.dateOnly&&(i.hour="2-digit",i.minute="2-digit",i.hour12="12h"===t,r?.second&&(i.second=r.second),r?.timeZoneName&&(i.timeZoneName=r.timeZoneName)),i.weekday||i.year||i.month||i.day||i.hour?F(a,i).format(o):o.toLocaleString(a,i)}function H(e,t=new Date){let r="string"==typeof e?new Date(e):e;if(!r||Number.isNaN(r.getTime()))return"";let o=Math.max(0,t.getTime()-r.getTime()),n=Math.floor(o/6e4),a=Math.floor(o/36e5),l=w(),s=e=>{let t=S(e,l);return Date.UTC(t.year,t.month-1,t.day)/864e5},d=s(t)-s(r);if(d>=30)return"";let c=i(),u=new Intl.RelativeTimeFormat("en"===c?"en-US":c,{numeric:"auto"});return n<1?u.format(0,"second"):n<60?u.format(-n,"minute"):a<24||d<1?u.format(-a,"hour"):u.format(-d,"day")}let W=/^[\s\p{Cf}\p{Mn}]+/u,G=/^[.\u2026\s]+$/;function V(e){let t=e.replace(W,"");return G.test(t)?"":t}let K=/^\s*(?:[-\w]+\s*:|[.#@a-z*][^{}]*\{)/i,q=/^@(?:media|font-face|import|supports|keyframes|charset|page)\b/,Y=/^[.#]?[a-z*](?:[\w\-.#,>~+*\s[\]="']|:(?!\s))*\{/i,Z=/(^|[\s([{"'])(\*\*|__|\*|_)([^\s*_]|[^\s*_].*?[^\s])\2(?=$|[\s)\]}"']|[.,;:!?](?!\w))/g;function J(e){return V(function(e){let t=e.trimStart();for(let e=0;e<100&&(q.test(t)||Y.test(t));e++){let e=t.indexOf("{"),r=t.indexOf(";");if(r>=0&&(e<0||r<e)&&/^@(?:import|charset)\b/.test(t)){t=t.slice(r+1).trimStart();continue}if(e<0)break;let o=0,n=-1;for(let r=e;r<t.length;r++)if("{"===t[r])o++;else if("}"===t[r]&&0==--o){n=r;break}if(n<0)return t.startsWith("@")||K.test(t.slice(e+1))?"":t;if(!t.startsWith("@")&&!K.test(t.slice(e+1,n)))break;t=t.slice(n+1).trimStart()}return t}(V(e??""))).replace(Z,"$1$3")}function Q(e){if(!Number.isFinite(e)||e<=0)return"0 B";let t=["B","KB","MB","GB","TB"],r=Math.min(t.length-1,Math.floor(Math.log(e)/Math.log(1024))),o=e/Math.pow(1024,r);if(0===r)return`${Math.round(e)} B`;let n=o<10?Math.round(10*o)/10:Math.round(o);return n>=1024&&r<t.length-1&&(r+=1,o/=1024,n=Math.round(10*o)/10),`${n} ${t[r]}`}let X={inbox:0,drafts:1,sent:2,archive:3,junk:4,spam:4,trash:5};function ee(e){let r,o,n,a;t.f.log("jmap",`[Mailbox Tree] Building tree from ${e.length} mailboxes`);let i=(r=[],o=[],n=new Map,e.forEach(e=>{if(e.role){let t=e.accountId||"";n.has(t)||n.set(t,[]),n.get(t).push(e)}}),a=new Set,e.forEach(e=>{e.parentId&&a.add(e.parentId)}),e.forEach(e=>{if(e.role||e.parentId)return void r.push(e);let i=e.accountId||"",l=n.get(i)||[],s=e.name.trim().toLowerCase(),d=l.find(e=>e.name.trim().toLowerCase()===s);d?(o.push({id:e.id,name:e.name,matchedRole:d.name,parentId:e.parentId}),a.has(e.id)&&t.f.warn("jmap",`[Mailbox Tree] Deduplication removed mailbox "${e.name}" (id: ${e.id}) which is a parent of other mailboxes. Matched role mailbox: "${d.name}" (role: ${d.role}). Children referencing parentId "${e.id}" will be orphaned to root level.`)):r.push(e)}),o.length>0&&t.f.log("jmap",`[Mailbox Tree] Deduplication removed ${o.length} mailbox(es):`,o),r);i.length!==e.length&&t.f.log("jmap",`[Mailbox Tree] After deduplication: ${i.length} mailboxes (removed ${e.length-i.length})`);let l=i.filter(e=>!e.isShared),s=i.filter(e=>e.isShared),d=new Map,c=[];l.forEach(e=>{d.set(e.id,{...e,children:[],depth:0})});let u=(e,t)=>{for(let r of e)r.depth=t,r.children.length>0&&u(r.children,t+1)},f=[];l.forEach(e=>{let t=d.get(e.id);e.parentId&&d.has(e.parentId)?d.get(e.parentId).children.push(t):(e.parentId&&f.push({id:e.id,name:e.name,parentId:e.parentId}),c.push(t))}),f.length>0&&t.f.warn("jmap",`[Mailbox Tree] ${f.length} orphaned mailbox(es) moved to root level (missing parent):`,f),u(c,0);let m=e=>{let t=0;for(let r of e)t=Math.max(t,r.depth),r.children.length>0&&(t=Math.max(t,m(r.children)));return t};if(t.f.log("jmap",`[Mailbox Tree] Built tree: ${c.length} root nodes, max depth: ${m(c)}, total own: ${l.length}, shared: ${s.length}`),s.length>0){let e=new Map;s.forEach(t=>{let r=t.accountId||"unknown";e.has(r)||e.set(r,[]),e.get(r).push(t)}),e.forEach((e,t)=>{let r=new Map,o=[];e.forEach(e=>{r.set(e.id,{...e,children:[],depth:0})}),e.forEach(e=>{let t=r.get(e.id);e.parentId&&r.has(e.parentId)?r.get(e.parentId).children.push(t):o.push(t)}),u(o,0);let n=e[0]?.accountName||t,a={id:`shared-account-${t}`,name:n,sortOrder:1e3,totalEmails:e.reduce((e,t)=>e+t.totalEmails,0),unreadEmails:e.reduce((e,t)=>e+t.unreadEmails,0),totalThreads:0,unreadThreads:0,myRights:{mayReadItems:!0,mayAddItems:!1,mayRemoveItems:!1,maySetSeen:!1,maySetKeywords:!1,mayCreateChild:!1,mayRename:!1,mayDelete:!1,maySubmit:!1},isSubscribed:!0,accountId:t,accountName:n,isShared:!0,children:o,depth:0};c.push(a)})}let p=e=>{e.sort((e,t)=>{if(e.isShared!==t.isShared)return e.isShared?1:-1;if(e.sortOrder!==t.sortOrder)return e.sortOrder-t.sortOrder;let r=e.role?X[e.role]??999:999,o=t.role?X[t.role]??999:999;if(r!==o)return r-o;let n=/^\d{4}$/.test(e.name),a=/^\d{4}$/.test(t.name);return n&&a?parseInt(t.name)-parseInt(e.name):e.name.localeCompare(t.name)}),e.forEach(e=>{e.children.length>0&&p(e.children)})};return p(c),c}function et(e){let t=[],r=(e,o=0)=>{e.forEach(e=>{t.push({...e,depth:o}),e.children.length>0&&r(e.children,o+1)})};return r(e),t}function er(e,t,r=" › "){let o=new Map(t.map(e=>[e.id,e])),n=[e.name],a=new Set([e.id]),i=e.parentId;for(;i&&!a.has(i);){a.add(i);let e=o.get(i);if(!e)break;n.unshift(e.name),i=e.parentId}return n.join(r)}},852796,e=>{let t=null;e.s(["Q",0,function(e){return t?t(e):void 0},"h",0,function(e){t=e}])},840131,78210,882125,225303,3854,110958,e=>{e.s(["TRUSTED_SENDERS_BOOK_NAME",()=>ec,"findContactPhotoEntry",()=>ea,"getContactDisplayName",()=>er,"getContactPhotoIndex",()=>ed,"getContactPhotoRef",()=>ei,"getContactPrimaryEmail",()=>en,"getContactSortName",()=>eo,"hasContactPhoto",()=>el,"useContactStore",()=>eh,"useTrustedSendersInBook",()=>eg],840131),e.s(["y",()=>S,"c",()=>k,"F",()=>y,"S",()=>v,"u",()=>x,"b",()=>I,"t",()=>h,"E",()=>A,"z",()=>T,"r",()=>C],78210);var t=e.i(768834),r=e.i(579473),o=e.i(282255),n=e.i(393475),a=e.i(876686),i=e.i(179083),l=e.i(728945),s=e.i(761066),d=e.i(852796),c=e.i(855340),u=e.i(872295),f=e.i(993032),m=e.i(800769),p=e.i(198226),g=e.i(602830),b=e.i(273952);function h(e){let t=e.bodyValues||{},r=(e,r)=>(e||[]).map(e=>{let o=t[e.partId]?.value;return"string"==typeof o&&o?"text/html"===(e.type||r).toLowerCase()?(0,b.f)(o,{paragraphSpacing:!0,mailMarkup:!0}):o:""}).filter(e=>e.trim().length>0).join("\n").trim();return r(e.textBody,"text/plain")||r(e.htmlBody,"text/html")||(e.preview||"").trim()}function y(e,t=e.sourceAccountId){let r=(0,g.D)(e);return{id:e.id,...t?{accountId:t}:{},threadId:e.threadId,mailboxIds:Object.keys(e.mailboxIds||{}).filter(t=>e.mailboxIds[t]),from:(e.from||[]).map(e=>({name:e.name||"",email:e.email})),to:(e.to||[]).map(e=>({name:e.name||"",email:e.email})),cc:(e.cc||[]).map(e=>({name:e.name||"",email:e.email})),subject:e.subject||"",receivedAt:e.receivedAt,isRead:!!e.keywords?.$seen,isFlagged:!!e.keywords?.$flagged,hasAttachment:e.hasAttachment,attachments:(e.attachments||[]).filter(e=>!!e.blobId).map(e=>({blobId:e.blobId,name:e.name||"",type:e.type||"application/octet-stream",size:e.size||0,inline:"inline"===e.disposition||!!e.cid,...(0,g.C)(e,r)})),preview:e.preview||"",text:h(e),headers:e.headers,source:(0,f.f)(e),keywords:Object.keys(e.keywords||{}).filter(t=>e.keywords[t]&&!(0,m.i)(t)),auth:e.authenticationResults}}let w=e=>Object.keys(e||{}).filter(t=>e?.[t]);function k(e,t=e.sourceAccountId){return{id:e.id,...t?{accountId:t}:{},threadId:e.threadId,mailboxIds:w(e.mailboxIds),from:(e.from||[]).map(e=>({name:e.name||"",email:e.email})),to:(e.to||[]).map(e=>({name:e.name||"",email:e.email})),subject:e.subject||"",receivedAt:e.receivedAt,preview:e.preview||"",keywords:w(e.keywords),hasAttachment:!!e.hasAttachment,size:e.size||0}}function v(e){let t=Object.values(e.locations||{})[0]?.name||"";return{id:e.id,uid:e.uid,calendarId:w(e.calendarIds)[0]||"",title:e.title||"",description:e.description||"",start:e.start,duration:e.duration,timeZone:e.timeZone,utcStart:e.utcStart,utcEnd:e.utcEnd,isAllDay:!!e.showWithoutTime,location:t,status:e.status,participants:Object.values(e.participants||{}).map(e=>({name:e.name||"",email:e.email||"",role:w(e.roles).join(","),status:e.participationStatus||""})),isRecurring:!!(e.recurrenceRules&&e.recurrenceRules.length>0),keywords:w(e.keywords)}}function S(e){let t=e.name?.components||[],r=e=>t.filter(t=>t.kind===e).map(e=>e.value).join(" ");return{id:e.id,uid:e.uid||"",addressBookId:w(e.addressBookIds)[0]||"",kind:e.kind||"individual",fullName:e.name?.full||[r("given"),r("surname")].filter(Boolean).join(" "),firstName:r("given"),lastName:r("surname"),emails:Object.values(e.emails||{}).map(e=>e.address).filter(Boolean),phones:Object.values(e.phones||{}).map(e=>e.number).filter(Boolean),company:Object.values(e.organizations||{})[0]?.name||"",notes:Object.values(e.notes||{}).map(e=>e.note||"").join("\n"),anniversaries:Object.values(e.anniversaries||{}).map(e=>({kind:e.kind,date:function(e){if("string"==typeof e)return e;if(e&&"object"==typeof e){if("string"==typeof e.utc)return e.utc.slice(0,10);let t=String(e.month??0).padStart(2,"0"),r=String(e.day??0).padStart(2,"0");return e.year?`${String(e.year).padStart(4,"0")}-${t}-${r}`:`--${t}-${r}`}return""}(e.date)}))}}function A(e){return{id:e.id,uid:e.uid,title:e.title||"",description:e.description||"",isComplete:"completed"===e.progress,progress:e.progress,dueDate:e.due,priority:e.priority??0,calendarId:w(e.calendarIds)[0]||"",keywords:w(e.keywords),alerts:Object.fromEntries(Object.entries(e.alerts||{}).filter(([,e])=>e?.trigger).map(([e,t])=>[e,{trigger:"AbsoluteTrigger"===t.trigger["@type"]?{at:t.trigger.when}:{offset:t.trigger.offset,relativeTo:"end"===t.trigger.relativeTo?"due":"start"},action:"email"===t.action?"email":"display",acknowledged:t.acknowledged||null}])),useDefaultAlerts:!!e.useDefaultAlerts,links:Object.fromEntries(Object.entries(e.links||{}).map(([e,t])=>[e,{href:t.href,rel:t.rel||null,title:t.title||null,contentType:t.contentType||null}])),relatedTo:Object.fromEntries(Object.entries(e.relatedTo||{}).map(([e,t])=>[e,{relation:w(t?.relation)}]))}}function x(e,t=""){let r="directory"===(0,p.x)(e);return{id:e.id,name:e.name,type:r?"directory":"file",size:e.size||0,mimeType:r?"":e.type,path:t,modified:e.modified}}function I(e){return{id:e.id,name:e.name||"",email:e.email,replyTo:e.replyTo?.map(e=>e.email).join(", ")||null,bcc:e.bcc?.map(e=>e.email).join(", ")||null,htmlSignature:e.htmlSignature||"",textSignature:e.textSignature||""}}function T(e){return{id:e.id,name:e.name,category:e.category,subject:e.subject||"",body:e.body||"",isHTML:!!e.isHTML}}function C(e){return{isEnabled:e.isEnabled,subject:e.subject||"",htmlBody:e.htmlBody||"",textBody:e.textBody||"",fromDate:e.fromDate,toDate:e.toDate}}class E extends Error{type;constructor(e,t){super(t||e||"Failed to fetch principals"),this.type=e,this.name="PrincipalsRequestError"}}e.s(["f",0,E],882125);class D extends Error{items;failedAccountIds;primaryAccountId;constructor(e,t,r,o){super(o instanceof Error?o.message:"An account could not answer"),this.items=e,this.failedAccountIds=t,this.primaryAccountId=r,this.name="PartialAccountsError"}}function O(e){return e instanceof Error&&"PartialAccountsError"===e.name?e:null}function L(e,t){let r=new Set(e.failedAccountIds);return[...e.items,...t.filter(t=>r.has(t.accountId??e.primaryAccountId))]}e.s(["F",0,D,"T",0,O,"q",0,L],225303);let M=0;function R(){return M}function N(e){return e.normalize("NFKD").replace(/\p{M}/gu,"").toLowerCase().replace(/\s+/g," ").trim()}function B(e){let t=e.replace(/\D/g,"");return t.length>=7?t.slice(-8):""}function $(e){return`${e.localAccountId??""}|${e.isShared?e.accountId??"":""}`}e.s(["y",0,function(){M++},"a",0,R],3854);let j=["emails","phones","addresses","onlineServices","notes","nicknames","organizations","titles","anniversaries","personalInfo","relatedTo","cryptoKeys","links","directories","preferredLanguages","calendars","schedulingAddresses"],F=["name","language","speakToAs"];function P(e){return Array.isArray(e)?`[${e.map(P).join(",")}]`:e&&"object"==typeof e?`{${Object.keys(e).sort().filter(t=>"pref"!==t&&void 0!==e[t]).map(t=>`${JSON.stringify(t)}:${P(e[t])}`).join(",")}}`:JSON.stringify(e)}function _(e,t){switch(e){case"emails":return String(t.address??"").trim().toLowerCase();case"phones":return B(String(t.number??""))||String(t.number??"").replace(/\s/g,"");case"addresses":let r;return r=t.components,N((r?.length?r.filter(e=>"separator"!==e.kind).map(e=>e.value):["street","locality","region","postcode","country"].map(e=>t[e])).filter(Boolean).join(" ")||t.full||t.fullAddress||"");case"onlineServices":return String(t.uri??t.user??"").trim().toLowerCase();case"notes":return String(t.note??"").trim();case"nicknames":case"titles":return N(String(t.name??""));case"organizations":return N(`${t.name??""} ${P(t.units??[])}`);default:return P(t)}}function z(e){return null!=e&&("string"==typeof e?""!==e.trim():"object"!=typeof e||(Array.isArray(e)?e.length>0:"components"in e||"full"in e?(e.components?.length??0)>0||!!e.full?.trim():Object.keys(e).length>0))}function U(e){let t=e.updated?Date.parse(e.updated):0/0;return Number.isNaN(t)?-1/0:t}function H(e,t){if(!(t in e))return t;for(let r=1;;r++)if(!(`${t}m${r}`in e))return`${t}m${r}`}function W(e){let t=new Set,r=e.uid;return r&&(t.add(r),r.startsWith("urn:uuid:")?t.add(r.slice(9)):t.add(`urn:uuid:${r}`)),e.originalId&&t.add(e.originalId),t.add(e.id),[...t]}function G(e,t,r){let o=new Set(r.flatMap(W)),n=W(t),a=[];for(let r of e){if("group"!==r.kind||!r.members)continue;let e=Object.keys(r.members).filter(e=>r.members[e]&&o.has(e));if(0===e.length)continue;let i={...r.members};for(let t of e)delete i[t];n.some(e=>i[e])||(i[t.uid||t.originalId||t.id]=!0),a.push({group:r,members:i})}return a}function V(e){return S({addressBookIds:{},...e,id:e.id??""})}function K(){try{s.k.getState().showBirthdayCalendar&&i.s.onCalendarChange.emit({calendarId:l.z,change:"updated"})}catch{}}function q(e,...t){let r=-1;for(let o of t){if(!o)continue;let t=o.toLowerCase();for(let o=t.indexOf(e);-1!==o;o=t.indexOf(e,o+1)){if(0===o||!/[\p{L}\p{N}]/u.test(t[o-1]))return 0;r=1}}return r}e.s(["P",0,function(e){let t=e.filter(e=>"group"!==e.kind),r=t.map((e,t)=>t),o=e=>r[e]===e?e:r[e]=o(r[e]),n=new Map,a=(e,t)=>{let a=n.get(e);void 0===a?n.set(e,t):r[o(t)]=o(a)};t.forEach((e,t)=>{let r,o,n=$(e),i=(o=N((r=(e.name?.components??[]).filter(e=>"given"===e.kind||"surname"===e.kind||"given2"===e.kind).map(e=>e.value)).length>0?r.join(" "):e.name?.full??"").split(/[\s,]+/).filter(Boolean).sort().join(" ")).length>=3?o:"";for(let r of(i&&a(`n|${n}|${i}`,t),Object.values(e.emails??{}))){let e=r?.address?.trim().toLowerCase();e&&a(`e|${n}|${e}`,t)}for(let r of Object.values(e.phones??{})){let e=r?.number?B(r.number):"";e&&a(`p|${n}|${e}`,t)}});let i=new Map;return t.forEach((e,t)=>{let r=o(t);i.set(r,[...i.get(r)??[],e])}),[...i.values()].filter(e=>e.length>1)},"c",0,W,"s",0,$,"y",0,G,"z",0,function(e){let[t,...r]=e.map((e,t)=>({card:e,i:t})).sort((e,t)=>U(t.card)-U(e.card)||e.i-t.i).map(e=>e.card),o=structuredClone(t);for(let e of r){let t=new Map;for(let r of j){let n=e[r];if(!n||0===Object.keys(n).length)continue;let a=o[r]??{},i=new Map(Object.entries(a).map(([e,t])=>[_(r,t??{}),e])),l=Object.values(a).some(e=>e?.pref!=null),s=!1;for(let[e,o]of Object.entries(n)){if(!o)continue;let n=_(r,o),d=i.get(n);if(void 0!==d&&""!==n){"organizations"===r&&t.set(e,d);continue}let c=structuredClone(o);if(l&&delete c.pref,"titles"===r&&"string"==typeof c.organizationId){let e=t.get(c.organizationId);e&&(c.organizationId=e)}let u=H(a,e);"organizations"===r&&t.set(e,u),a[u]=c,i.set(n,u),s=!0}s&&(o[r]=a)}for(let[t,r]of Object.entries(e.keywords??{}))r&&!o.keywords?.[t]&&(o.keywords={...o.keywords??{},[t]:!0});for(let t of F)!z(o[t])&&z(e[t])&&(o[t]=structuredClone(e[t]));let r=Object.values(o.media??{}).some(e=>e?.kind==="photo"),n=Object.entries(e.media??{}).find(([,e])=>e?.kind==="photo");!r&&n&&(o.media={...o.media??{},[H(o.media??{},n[0])]:structuredClone(n[1])})}let n={};for(let e of[...j,...F,"keywords","media"])P(o[e]??null)!==P(t[e]??null)&&(n[e]=o[e]);return{keep:t,others:r,patch:n,result:o}}],110958);let Y=0,Z=0;function J(e,t){var r;let o=(r=t,`${r}::`);return e.map(e=>({...e,id:`${o}${e.id}`,originalId:e.originalId??e.id,localAccountId:t}))}function Q(e,t){var r;let o=(r=t,`${r}::`);return e.map(e=>({...e,id:`${o}${e.id}`,originalId:e.originalId??e.id,localAccountId:t,addressBookIds:e.addressBookIds?Object.fromEntries(Object.entries(e.addressBookIds).map(([e,t])=>[`${o}${e}`,t])):e.addressBookIds}))}function X(e,t){return t?(0,d.Q)(t)??e:e}function ee(e,t){if(!t)return e;let r=`${t}::`;return e.startsWith(r)?e.slice(r.length):e}function et(e,t,r){let o,n={},a=r?.localAccountId;for(let[i,l]of Object.entries(e)){let e=t.find(e=>e.id===i);if(e?.localAccountId&&(a=e.localAccountId),e?.isShared&&e.accountId&&(o=e.accountId),e?.originalId){n[e.originalId]=l;continue}let s=ee(i,a);r?.isShared&&r.accountId&&s.startsWith(`${r.accountId}:`)&&(s=s.slice(r.accountId.length+1)),n[s]=l}return{addressBookIds:n,sharedAccountId:o,localAccountId:a}}function er(e){if(e.name){if(e.name.full?.trim())return e.name.full.trim();if(e.name.components&&e.name.components.length>0){let t=[e.name.components.find(e=>"given"===e.kind)?.value||"",e.name.components.find(e=>"surname"===e.kind)?.value||""].filter(Boolean).join(" ");if(t)return t}}if(e.nicknames){let t=Object.values(e.nicknames)[0];if(t?.name)return t.name}if(e.organizations){let t=Object.values(e.organizations)[0];if(t?.name)return t.name}if(e.emails){let t=Object.values(e.emails)[0];if(t?.address)return t.address}return""}function eo(e,t){let r=er(e);if(!t)return r;let o=e.name?.components;if(o&&o.length>0){let e=(...e)=>o.filter(t=>e.includes(t.kind)&&t.value).map(e=>e.value).join(" "),t=e("surname","surname2");if(t){let r=e("given","given2","middle","additional");return r?`${t}, ${r}`:t}}let n=e.name?.full;if(n&&r===n){let e=n.trim().split(/\s+/);if(e.length>1){let t=e[e.length-1];return`${t}, ${e.slice(0,-1).join(" ")}`}}return r}function en(e){return e.emails&&Object.values(e.emails)[0]?.address||""}function ea(e){let t;for(let[r,o]of Object.entries(e.media??{}))o?.kind==="photo"&&(o.uri||o.blobId)&&(!t||(o.pref??1/0)<(t[1].pref??1/0))&&(t=[r,o]);return t}function ei(e){let t=ea(e)?.[1];if(t?.uri){var r,o;let e;return{uri:(r=t.uri,e=(o=t.mediaType)&&o.includes("/")?o:"image/jpeg",r.startsWith("data:base64,")?`data:${e};base64,${r.slice(12)}`:r.startsWith("data:;base64,")?`data:${e};base64,${r.slice(13)}`:r)}}if(t?.blobId)return{blobId:t.blobId,mediaType:t.mediaType,accountId:e.accountId,localAccountId:e.localAccountId}}function el(e){return!!ea(e)}let es=new WeakMap;function ed(e){let t=es.get(e);if(!t){for(let r of(t=new Map,e)){let e=ei(r);if(e)for(let o of Object.values(r.emails??{})){let r=o?.address?.toLowerCase();r&&!t.has(r)&&t.set(r,e)}}es.set(e,t)}return t}let ec="Trusted Senders",eu=null;function ef(e){let t=new Set;for(let r of e)if(r.emails)for(let e of Object.values(r.emails)){let r=e.address?.toLowerCase().trim();r&&t.add(r)}return Array.from(t)}async function em(e,t,r,o){let n=new Set(o);for(let o of r)try{for(let r of(await e.getContacts(o.id,{throwOnError:!0}))){let a=ef([r]),i=Object.keys(r.addressBookIds||{}).filter(e=>e!==o.id),l={};for(let e of i)l[e]=!0;a.some(e=>!n.has(e))?(l[t]=!0,await e.updateContact(r.id,{addressBookIds:l}),a.forEach(e=>n.add(e))):i.length>0?await e.updateContact(r.id,{addressBookIds:l}):await e.deleteContact(r.id)}await e.deleteAddressBook(o.id),a.f.log("contacts","Merged duplicate trusted senders book:",o.id)}catch(e){a.f.error("Failed to merge duplicate trusted senders book:",o.id,e)}return Array.from(n)}async function ep(e,t,r,o,n){let i=new Set;for(let o of[...r].sort((e,t)=>e.id.localeCompare(t.id))){let r=ef([o]),n=Object.keys(o.addressBookIds||{}).every(e=>e===t);if(r.length>0&&n&&r.every(e=>i.has(e))){try{await e.deleteContact(o.id),a.f.log("contacts","Removed a second trusted sender card for",r.join(", "))}catch(e){a.f.error("Failed to remove a duplicate trusted sender card:",o.id,e)}continue}r.forEach(e=>i.add(e))}o.forEach(e=>i.add(e));let l=[];for(let r of n){let o=r.toLowerCase().trim();if(!(!o||i.has(o)))try{await e.createContact({addressBookIds:{[t]:!0},emails:{email:{address:o}}}),i.add(o)}catch(e){a.f.error("Failed to file a trusted sender in the address book:",o,e),l.push(o)}}return{emails:Array.from(i),unfiled:l}}function eg(){let e=(0,s.k)(e=>e.trustedSendersAddressBook),t=eh(e=>e.trustedSendersBookUnavailable);return!!e&&!t}let eb=null,eh=(0,t.f)()((0,r.V)((e,t)=>{function r(e,r,o){let{supportsSync:n,updateContact:a,updateLocalContact:i}=t();return n&&e?a(e,r,{keywords:o}):i(r,{keywords:o})}function l(e,t){let r=new Set;for(let o of e)if(t.has(o.id)){if(r.add(o.id),o.uid){r.add(o.uid);let e=o.uid.startsWith("urn:uuid:")?o.uid.slice(9):o.uid;r.add(e)}o.originalId&&r.add(o.originalId)}return e.map(e=>{if("group"!==e.kind||!e.members)return e;let t=!1,o={};for(let[n,a]of Object.entries(e.members)){let e=n.startsWith("urn:uuid:")?n.slice(9):n;r.has(n)||r.has(e)?t=!0:o[n]=a}return t?{...e,members:o}:e})}return{contacts:[],addressBooks:[],selectedContactId:null,searchQuery:"",isLoading:!1,error:null,supportsSync:!1,contactsLoaded:!1,trustedSenderEmails:[],trustedSendersBookId:null,trustedSendersLoaded:!1,trustedSendersLoading:!1,trustedSendersBookUnavailable:!1,recentRecipients:[],recentRecipientsLoaded:!1,sentMailboxId:null,selectedContactIds:new Set,lastSelectedContactId:null,activeTab:"all",directoryPrincipals:[],directoryLoaded:!1,directoryStatus:"idle",accountClients:null,setAccountClients:t=>{e({accountClients:t&&t.length>0?t:null})},fetchContacts:async r=>{let o=t().accountClients;if(o)return t().fetchAllAccountsContacts(o);let n=R(),a=++Y;e({isLoading:!0,error:null});try{let t=await r.getAllContacts();if(R()!==n||a!==Y)return;e({contacts:t,isLoading:!1,contactsLoaded:!0})}catch(r){if(R()!==n||a!==Y)return;console.error("Failed to fetch contacts:",r);let t=O(r);e(e=>({error:"Failed to fetch contacts",isLoading:!1,contactsLoaded:!0,contacts:t?L(t,e.contacts):e.contacts}))}},fetchDirectory:async t=>{if(!t.supportsPrincipals())return void e({directoryStatus:"unavailable"});let r=R();e({directoryStatus:"loading"});try{let{principals:n,status:i}=await (0,o.f)(t);if(R()!==r)return;if("error"===i)throw new E(null);"ok"!==i&&a.f.log("contacts",`Directory listing is ${i}; autocomplete offers ${n.length} principals`),e({directoryPrincipals:function(e){let t=[],r=new Set;for(let o of e){let e=o.email?.trim();!e||r.has(e.toLowerCase())||(r.add(e.toLowerCase()),t.push({id:o.id,name:o.description||o.name||e,email:e,description:o.description??void 0,type:o.type}))}return t}(n),directoryLoaded:!0,directoryStatus:"restricted"===i?"forbidden":"ready"})}catch(t){if(R()!==r)return;a.f.error("Failed to fetch directory principals:",t),e({directoryStatus:t instanceof E&&"forbidden"===t.type?"forbidden":"error"})}},fetchAddressBooks:async r=>{let o=t().accountClients;if(o)return t().fetchAllAccountsAddressBooks(o);let n=R(),a=++Z;try{let t=await r.getAllAddressBooks();if(R()!==n||a!==Z)return;e({addressBooks:t})}catch(r){if(R()!==n||a!==Z)return;console.error("Failed to fetch address books:",r);let t=O(r);e(e=>({error:"Failed to fetch address books",addressBooks:t?L(t,e.addressBooks):e.addressBooks}))}},fetchAllAccountsContacts:async r=>{let o=R(),n=++Y;e({isLoading:!0,error:null});try{let i=await Promise.all(r.map(async({client:e,localAccountId:r})=>{try{let t=await e.getAllContacts();return Q(t,r)}catch(n){a.f.error(`Failed to fetch contacts for account ${r}:`,n);let e=t().contacts.filter(e=>e.localAccountId===r),o=O(n);if(!o)return e;return L(new D(Q(o.items,r),o.failedAccountIds,o.primaryAccountId,n),e)}}));if(R()!==o||n!==Y)return;e({contacts:i.flat(),isLoading:!1,contactsLoaded:!0})}catch(t){if(R()!==o||n!==Y)return;console.error("Failed to fetch all-account contacts:",t),e({error:"Failed to fetch contacts",isLoading:!1,contactsLoaded:!0})}},fetchAllAccountsAddressBooks:async r=>{let o=R(),n=++Z;try{let i=await Promise.all(r.map(async({client:e,localAccountId:r})=>{try{let t=await e.getAllAddressBooks();return J(t,r)}catch(n){a.f.error(`Failed to fetch address books for account ${r}:`,n);let e=t().addressBooks.filter(e=>e.localAccountId===r),o=O(n);if(!o)return e;return L(new D(J(o.items,r),o.failedAccountIds,o.primaryAccountId,n),e)}}));if(R()!==o||n!==Z)return;e({addressBooks:i.flat()})}catch(t){if(R()!==o||n!==Z)return;console.error("Failed to fetch all-account address books:",t),e({error:"Failed to fetch address books"})}},createContact:async(r,o,n)=>{if(!await i.A.onBeforeContactCreate.intercept(V(o)))return!1;e({isLoading:!0,error:null});try{let a=o.isShared?o.accountId:void 0,l=o,s=o.localAccountId;if(o.addressBookIds){let e=et(o.addressBookIds,t().addressBooks,o);s=e.localAccountId,e.sharedAccountId?(a=e.sharedAccountId,l={...o,addressBookIds:e.addressBookIds,isShared:!0,accountId:e.sharedAccountId}):l={...o,addressBookIds:e.addressBookIds}}let d=X(r,s),c=n?.photoKey?await (0,u.I)(d,a,l,n.photoKey,e=>d.createContact(e,a)):await d.createContact(l,a),f=c;return a&&(f={...c,id:`${a}:${c.id}`,originalId:c.id,accountId:a,accountName:o.accountName??t().addressBooks.find(e=>e.isShared&&e.accountId===a)?.accountName,isShared:!0,addressBookIds:Object.fromEntries(Object.entries(c.addressBookIds??{}).map(([e,t])=>[`${a}:${e}`,t]))}),s&&(f=Q([f],s)[0]),e(e=>({contacts:[...e.contacts,f],isLoading:!1})),i.A.onAfterContactCreate.emit(S(f)),K(),!0}catch(t){throw e({error:t instanceof Error?t.message:"Failed to create contact",isLoading:!1}),t}},updateContact:async(r,o,n,a)=>{if(!await i.A.onBeforeContactUpdate.intercept({contactId:o,patch:n}))return!1;e({error:null});try{let l=t().contacts.find(e=>e.id===o),s=l?.originalId||ee(o,l?.localAccountId),d=l?.isShared?l.accountId:void 0,c=X(r,l?.localAccountId),f=n;if(n.addressBookIds){let e=et(n.addressBookIds,t().addressBooks,l);f={...n,addressBookIds:e.addressBookIds}}a?.photoKey?await (0,u.I)(c,d,f,a.photoKey,e=>c.updateContact(s,e,d)):await c.updateContact(s,f,d),e(e=>({contacts:e.contacts.map(e=>e.id===o?{...e,...n}:e)}));let m=t().contacts.find(e=>e.id===o);return m&&i.A.onAfterContactUpdate.emit(S(m)),K(),!0}catch(t){throw e({error:t instanceof Error?t.message:"Failed to update contact"}),t}},fetchContactFromServer:async(e,r)=>{let o=t().contacts.find(e=>e.id===r),n=o?.originalId||ee(r,o?.localAccountId),a=o?.isShared?o.accountId:void 0;return X(e,o?.localAccountId).getContact(n,a)},deleteContact:async(r,o)=>{if(!await i.A.onBeforeContactDelete.intercept({contactIds:[o]}))return!1;e({error:null});try{let n=t().contacts.find(e=>e.id===o),a=n?.originalId||ee(o,n?.localAccountId),s=n?.isShared?n.accountId:void 0;return r=X(r,n?.localAccountId),await r.deleteContact(a,s),e(e=>{let t=new Set([o]);return{contacts:l(e.contacts,t).filter(e=>e.id!==o),selectedContactId:e.selectedContactId===o?null:e.selectedContactId}}),i.A.onAfterContactDelete.emit({contactIds:[o]}),K(),!0}catch(t){throw e({error:t instanceof Error?t.message:"Failed to delete contact"}),t}},addLocalContact:async t=>!!await i.A.onBeforeContactCreate.intercept(V(t))&&(e(e=>({contacts:[...e.contacts,t]})),i.A.onAfterContactCreate.emit(S(t)),K(),!0),updateLocalContact:async(r,o)=>{if(!await i.A.onBeforeContactUpdate.intercept({contactId:r,patch:o}))return!1;e(e=>({contacts:e.contacts.map(e=>e.id===r?{...e,...o}:e)}));let n=t().contacts.find(e=>e.id===r);return n&&i.A.onAfterContactUpdate.emit(S(n)),K(),!0},deleteLocalContact:async t=>!!await i.A.onBeforeContactDelete.intercept({contactIds:[t]})&&(e(e=>{let r=new Set([t]);return{contacts:l(e.contacts,r).filter(e=>e.id!==t),selectedContactId:e.selectedContactId===t?null:e.selectedContactId}}),i.A.onAfterContactDelete.emit({contactIds:[t]}),K(),!0),setSelectedContact:t=>e({selectedContactId:t}),setSearchQuery:t=>e({searchQuery:t}),setSupportsSync:t=>e({supportsSync:t}),setActiveTab:t=>e({activeTab:t}),clearContacts:()=>e({contacts:[],contactsLoaded:!1,addressBooks:[],selectedContactId:null,searchQuery:"",error:null,selectedContactIds:new Set,activeTab:"all",directoryPrincipals:[],directoryLoaded:!1,directoryStatus:"idle"}),getAutocomplete:e=>{let{contacts:r}=t();if(!e||e.length<1)return[];let o=e.toLowerCase(),n=[],a=new Map,i=(e,t)=>{n.push(e),a.set(e,t)};for(let e of r){if("group"===e.kind){let r=er(e),n=q(o,r);if(n>=0){let o=t().getGroupMembers(e.id).filter(e=>en(e).trim()).length;o>0&&i({name:r,email:"",group:{id:e.id,memberCount:o}},n)}continue}let r=er(e);for(let t of e.emails?Object.values(e.emails):[]){if(!t.address)continue;let e=q(o,r,t.address);e>=0&&i({name:r,email:t.address},e)}}let{directoryPrincipals:l}=t();if(l.length>0){let e=new Set(n.map(e=>e.email.toLowerCase()));for(let t of l){let r=t.email.toLowerCase();if(e.has(r)){let e=t.description||t.name;if(e&&e!==t.email){let t=n.find(e=>e.email.toLowerCase()===r);t&&(!t.name||t.name===t.email)&&(t.name=e)}continue}let a=q(o,t.name,r,t.description);if(a>=0){let o=t.description||t.name;i({name:o!==t.email?o:"",email:t.email},a),e.add(r)}}}let{recentRecipients:s}=t();if(s.length>0){let e=new Set(n.map(e=>e.email.toLowerCase()));for(let t of s){let r=t.email.toLowerCase();if(e.has(r))continue;let n=q(o,r,t.name);n>=0&&(i({name:t.name,email:t.email},n),e.add(r))}}return(function(e){let t=[],r=new Map;for(let o of e){if(o.group){t.push(o);continue}let e=(0,c.Q)(o.email);if(!e.email)continue;let n=(0,c.U)(o.name)||e.name||"",a={name:n===e.email?"":n,email:e.email},i=e.email.toLowerCase(),l=r.get(i);void 0===l?(r.set(i,t.length),t.push(a)):!t[l].name&&a.name&&(t[l].name=a.name)}return t})([...n].sort((e,t)=>(a.get(e)??1)-(a.get(t)??1))).slice(0,10)},getGroups:()=>t().contacts.filter(e=>"group"===e.kind),getIndividuals:()=>t().contacts.filter(e=>"group"!==e.kind),getGroupMembers:e=>{let{contacts:r}=t(),o=r.find(t=>t.id===e);if(!o?.members)return[];let n=Object.keys(o.members).filter(e=>o.members[e]),a=n.map(e=>e.startsWith("urn:uuid:")?e.slice(9):e);return r.filter(e=>{if(n.includes(e.id)||a.includes(e.id))return!0;if(e.uid){let t=e.uid.startsWith("urn:uuid:")?e.uid.slice(9):e.uid;return n.includes(e.uid)||a.includes(t)}return!1})},createGroup:async(r,o,a)=>{let l,{contacts:s}=t(),d={};a.forEach(e=>{let t=s.find(t=>t.id===e);d[t?.uid||e]=!0});let c={kind:"group",name:{components:[{kind:"given",value:o}],isOrdered:!0,full:o},members:d};if(r&&t().supportsSync){let t=await r.createContact(c);e(e=>({contacts:[...e.contacts,t]})),l=t.id}else{let t={id:`local-${(0,n.o)()}`,addressBookIds:{},...c};e(e=>({contacts:[...e.contacts,t]})),l=t.id}i.A.onContactGroupChange.emit({groupId:l,change:"created"})},updateGroup:async(r,o,n)=>{let a={name:{components:[{kind:"given",value:n}],isOrdered:!0,full:n}};if(r&&t().supportsSync){let e=t().contacts.find(e=>e.id===o),n=e?.originalId||o,i=e?.isShared?e.accountId:void 0;await X(r,e?.localAccountId).updateContact(n,a,i)}e(e=>({contacts:e.contacts.map(e=>e.id===o?{...e,...a}:e)})),i.A.onContactGroupChange.emit({groupId:o,change:"updated"})},addMembersToGroup:async(r,o,n)=>{let{contacts:a}=t(),l=a.find(e=>e.id===o);if(!l)return;let s={...l.members},d=[];if(n.forEach(e=>{let t=a.find(t=>t.id===e),r=t?.uid||t?.originalId||e;s[r]||d.push(e),s[r]=!0}),r&&t().supportsSync){let e=l.originalId||o,t=l.isShared?l.accountId:void 0;await X(r,l.localAccountId).updateContact(e,{members:s},t)}e(e=>({contacts:e.contacts.map(e=>e.id===o?{...e,members:s}:e)})),d.length>0&&i.A.onContactGroupMemberChange.emit({groupId:o,added:d,removed:[]})},removeMembersFromGroup:async(r,o,n)=>{let{contacts:a}=t(),l=a.find(e=>e.id===o);if(!l?.members)return;let s={...l.members},d=[];if(n.forEach(e=>{if(void 0!==s[e]){delete s[e],d.push(e);return}let t=a.find(t=>t.id===e);if(t?.uid&&void 0!==s[t.uid])delete s[t.uid],d.push(e);else for(let r of Object.keys(s)){let o=r.startsWith("urn:uuid:")?r.slice(9):r,n=t?.uid?.startsWith("urn:uuid:")?t.uid.slice(9):t?.uid;if(o===e||o===n){delete s[r],d.push(e);break}}}),r&&t().supportsSync){let e=l.originalId||o,t=l.isShared?l.accountId:void 0;await X(r,l.localAccountId).updateContact(e,{members:s},t)}e(e=>({contacts:e.contacts.map(e=>e.id===o?{...e,members:s}:e)})),d.length>0&&i.A.onContactGroupMemberChange.emit({groupId:o,added:[],removed:d})},deleteGroup:async(r,o)=>{if(r&&t().supportsSync){let e=t().contacts.find(e=>e.id===o),n=e?.originalId||o,a=e?.isShared?e.accountId:void 0;await X(r,e?.localAccountId).deleteContact(n,a)}e(e=>({contacts:e.contacts.filter(e=>e.id!==o),selectedContactId:e.selectedContactId===o?null:e.selectedContactId})),i.A.onContactGroupChange.emit({groupId:o,change:"deleted"})},toggleContactSelection:t=>e(e=>{let r=new Set(e.selectedContactIds);return r.has(t)?r.delete(t):r.add(t),{selectedContactIds:r,lastSelectedContactId:t}}),selectRangeContacts:(r,o)=>{let{lastSelectedContactId:n,selectedContactIds:a}=t(),i=n||o[0];if(!i)return;let l=o.indexOf(i),s=o.indexOf(r);if(-1===l||-1===s)return;let d=Math.min(l,s),c=Math.max(l,s),u=new Set(a);for(let e=d;e<=c;e++)u.add(o[e]);e({selectedContactIds:u})},selectAllContacts:t=>e({selectedContactIds:new Set(t)}),clearSelection:()=>e({selectedContactIds:new Set,lastSelectedContactId:null}),bulkDeleteContacts:async(r,o)=>{if(0===o.length)return!0;if(!await i.A.onBeforeContactDelete.intercept({contactIds:[...o]}))return!1;e({error:null});let{supportsSync:n,contacts:a}=t(),s=new Set(o);if(r&&n){for(let e of o)try{let t=a.find(t=>t.id===e),o=t?.originalId||e,n=t?.isShared?t.accountId:void 0;await X(r,t?.localAccountId).deleteContact(o,n)}catch(t){console.error(`Failed to delete contact ${e}:`,t),s.delete(e)}s.size<o.length&&e({error:`Failed to delete ${o.length-s.size} contact(s)`})}return e(e=>({contacts:l(e.contacts,s).filter(e=>!s.has(e.id)),selectedContactId:s.has(e.selectedContactId||"")?null:e.selectedContactId,selectedContactIds:new Set})),s.size>0&&(i.A.onAfterContactDelete.emit({contactIds:o.filter(e=>s.has(e))}),K()),!0},bulkAddToGroup:async(r,o,n)=>{await t().addMembersToGroup(r,o,n),e({selectedContactIds:new Set})},moveContactToAddressBook:async(r,o,n)=>{e({error:null});let{contacts:a}=t(),l=n.originalId||n.id,s=n.accountId,d=X(r,n.localAccountId),c=d.getContactsAccountId();for(let t of o){let o=a.find(e=>e.id===t);if(!o)continue;let f=o.originalId||t,m=o.isShared?o.accountId:void 0,p=X(r,o.localAccountId);if(p===d&&(m||c)===(s||c))await p.updateContact(f,{addressBookIds:{[l]:!0}},m),e(e=>({contacts:e.contacts.map(e=>e.id===t?{...e,addressBookIds:{[n.id]:!0}}:e)})),i.A.onContactMove.emit({contactId:t,toAddressBookId:n.id});else{let{originalId:r,accountId:a,accountName:g,isShared:b,id:h,...y}=o,w=await (0,u.H)(o.media,{client:p,accountId:o.accountId,localAccountId:o.localAccountId},"keep"),k=await d.createContact({...y,media:w,addressBookIds:{[l]:!0}},s);await p.deleteContact(f,m);let v=!s||s===c,S=v?l:`${s}:${l}`,A={...k,id:v?k.id:`${s}:${k.id}`,originalId:k.id,accountId:s,accountName:n.accountName||s,isShared:!v,addressBookIds:{[S]:!0}};n.localAccountId&&(A=Q([A],n.localAccountId)[0]),e(e=>({contacts:e.contacts.map(e=>e.id===t?A:e)})),i.A.onContactMove.emit({contactId:t,toAddressBookId:n.id})}}},createAddressBook:async(t,r)=>{e({error:null});let o=r.trim();if(!o)throw Error("Address book name is required");try{return await t.createAddressBook(o)}catch(t){throw e({error:t instanceof Error?t.message:"Failed to create address book"}),t}},renameAddressBook:async(t,r,o)=>{e({error:null});let n=o.trim();if(n)try{let o=r.originalId||ee(r.id,r.localAccountId),a=r.isShared?r.accountId:void 0;t=X(t,r.localAccountId),await t.updateAddressBook(o,{name:n},a),e(e=>({addressBooks:e.addressBooks.map(e=>e.id===r.id?{...e,name:n}:e)}))}catch(t){throw e({error:t instanceof Error?t.message:"Failed to rename address book"}),t}},setDefaultAddressBook:async(t,r)=>{e({error:null});try{let o=r.originalId||ee(r.id,r.localAccountId),n=r.isShared?r.accountId:void 0;t=X(t,r.localAccountId),await t.setDefaultAddressBook(o,n),e(e=>({addressBooks:e.addressBooks.map(e=>e.id===r.id?{...e,isDefault:!0}:e.isDefault&&(e.localAccountId??null)===(r.localAccountId??null)&&(e.accountId??null)===(r.accountId??null)?{...e,isDefault:!1}:e)}))}catch(t){throw e({error:t instanceof Error?t.message:"Failed to set default address book"}),t}},removeAddressBook:async(t,r)=>{e({error:null});try{let o=r.originalId||ee(r.id,r.localAccountId),n=r.isShared?r.accountId:void 0;t=X(t,r.localAccountId),await t.deleteAddressBook(o,n,{removeContents:!0}),e(e=>({addressBooks:e.addressBooks.filter(e=>e.id!==r.id),contacts:e.contacts.filter(e=>!e.addressBookIds?.[r.id])}))}catch(t){throw e({error:t instanceof Error?t.message:"Failed to delete address book"}),t}},shareAddressBook:async(t,r,o,n)=>{e({error:null});try{let a=r.originalId||ee(r.id,r.localAccountId),i=r.isShared?r.accountId:void 0;t=X(t,r.localAccountId),await t.setAddressBookShare(a,o,n,i),e(e=>({addressBooks:e.addressBooks.map(e=>{if(e.id!==r.id)return e;let t={...e.shareWith??{}};return null===n?delete t[o]:t[o]=n,{...e,shareWith:t}})}))}catch(t){throw e({error:t instanceof Error?t.message:"Failed to share address book"}),t}},renameKeyword:async(r,o,n)=>{e({error:null});let a=o.trim(),i=n.trim();if(!a||!i||a===i)return;let{contacts:l,supportsSync:s}=t();for(let t of l.filter(e=>e.keywords?.[a])){let{[a]:o,...n}=t.keywords||{},l={...n,[i]:!0};try{if(s&&r){let e=t.originalId||t.id,o=t.isShared?t.accountId:void 0;await r.updateContact(e,{keywords:l},o)}e(e=>({contacts:e.contacts.map(e=>e.id===t.id?{...e,keywords:l}:e)}))}catch(t){throw e({error:t instanceof Error?t.message:"Failed to rename category"}),t}}},removeKeyword:async(o,n)=>{e({error:null});let a=n.trim(),i=t().contacts.filter(e=>e.keywords?.[a]),l=[];for(let e of i){let{[a]:t,...n}=e.keywords||{};await r(o,e.id,n)&&l.push(e.id)}return l},addKeyword:async(o,n,a)=>{e({error:null});let i=n.trim();for(let e of a){let n=t().contacts.find(t=>t.id===e);!n||n.keywords?.[i]||await r(o,e,{...n.keywords||{},[i]:!0})}},loadRecentRecipients:async(r,o)=>{if(o&&e({sentMailboxId:o}),!t().recentRecipientsLoaded&&o)return eb||(eb=(async()=>{try{let{emails:t}=await r.getEmails(o,void 0,300,0),n=new Map;for(let e of t)for(let t of[...e.to||[],...e.cc||[]]){if(!t.email)continue;let e=t.email.toLowerCase().trim();!e||n.has(e)||n.set(e,{name:(t.name||"").trim(),email:t.email})}e({recentRecipients:Array.from(n.values()),recentRecipientsLoaded:!0}),a.f.log("contacts","Loaded",n.size,"recent recipients from Sent")}catch(t){a.f.error("Failed to load recent recipients:",t),e({recentRecipientsLoaded:!0})}})().finally(()=>{eb=null}))},searchRecipients:async(e,r)=>{let{sentMailboxId:o}=t(),n=r.trim();if(!o||n.length<1)return[];try{return await e.searchSentRecipients(n,o)}catch(e){return a.f.error("Recipient server search failed:",e),[]}},loadTrustedSendersBook:async t=>eu||(t.supportsContacts?.()?(e({trustedSendersLoading:!0}),eu=(async()=>{try{a.f.log("contacts","Loading trusted senders address book");let r=(await t.getAddressBooks({throwOnError:!0})).filter(e=>e.name===ec).sort((e,t)=>e.id.localeCompare(t.id)),o=r[0];o||(a.f.log("contacts","Creating new trusted senders address book"),o=await t.createAddressBook(ec));let n=o.id;a.f.log("contacts","Trusted senders book id:",n);let i=await t.getContacts(n,{throwOnError:!0});a.f.log("contacts","Loaded",i.length,"trusted sender contacts");let l=ef(i);if(r.length>1&&(a.f.log("contacts","Found",r.length,"trusted senders books, merging duplicates"),l=await em(t,n,r.slice(1),l)),s.k.getState().trustedSendersAddressBook){l=(await ep(t,n,i,l,s.k.getState().trustedSenders)).emails;let e=new Set(l),r=s.k.getState().trustedSenders,o=r.filter(t=>!e.has(t.toLowerCase().trim()));o.length!==r.length&&s.k.setState({trustedSenders:o})}e({trustedSendersBookId:n,trustedSenderEmails:l,trustedSendersLoaded:!0,trustedSendersLoading:!1,trustedSendersBookUnavailable:!1})}catch(t){a.f.error("Failed to load trusted senders address book:",t),e({trustedSendersLoaded:!0,trustedSendersLoading:!1,trustedSendersBookUnavailable:!0})}finally{eu=null}})()):void e({trustedSendersLoaded:!0,trustedSendersLoading:!1,trustedSendersBookUnavailable:!0})),addToTrustedSendersBook:async(r,o)=>{let n=o.trim(),l=n.match(/^(.+?)\s*<([^>]+)>$/),d=l?l[1].trim():void 0,c=(l?l[2]:n).toLowerCase().trim(),{trustedSenderEmails:u}=t();if(u.includes(c))return;let f=t().trustedSendersBookId;if(f||(await t().loadTrustedSendersBook(r),f=t().trustedSendersBookId),!f&&t().trustedSendersBookUnavailable)return void s.k.getState().addTrustedSender(c);if(!f)throw Error("Could not find or create trusted senders address book");a.f.log("contacts","Adding trusted sender:",c,"to book:",f),await r.createContact({addressBookIds:{[f]:!0},...d?{name:{full:d}}:{},emails:{email:{address:c}}}),e(e=>({trustedSenderEmails:[...e.trustedSenderEmails,c]})),a.f.log("contacts","Trusted sender added successfully"),i.D.onTrustedSenderChange.emit({email:c,trusted:!0})},removeFromTrustedSendersBook:async(r,o)=>{let n=o.trim(),l=n.match(/^(.+?)\s*<([^>]+)>$/),d=(l?l[2]:n).toLowerCase().trim(),{trustedSendersBookId:c}=t(),u=s.k.getState(),f=u.trustedSenders.includes(d);if(!c){f&&u.removeTrustedSender(d);return}for(let e of(a.f.log("contacts","Removing trusted sender:",d),(await r.getContacts(c)).filter(e=>e.emails&&Object.values(e.emails).some(e=>e.address.toLowerCase().trim()===d))))await r.deleteContact(e.id),a.f.log("contacts","Trusted sender removed");let m=t().trustedSenderEmails.includes(d);e(e=>({trustedSenderEmails:e.trustedSenderEmails.filter(e=>e!==d)})),f&&s.k.setState({trustedSenders:s.k.getState().trustedSenders.filter(e=>e!==d)}),(m||f)&&i.D.onTrustedSenderChange.emit({email:d,trusted:!1})},isTrustedAddressBookSender:e=>{let r=e.trim(),o=r.match(/^(.+?)\s*<([^>]+)>$/),n=(o?o[2]:r).toLowerCase().trim();return t().trustedSenderEmails.includes(n)},importContacts:async(r,o,a)=>{let{supportsSync:l}=t(),s=0,d="",c=a?t().addressBooks.find(e=>e.id===a):void 0,u=c?et({[c.id]:!0},t().addressBooks):void 0;for(let t of o)try{let o;if(r&&l&&c&&u){let{id:e,...n}=t,a=u.sharedAccountId,i=await X(r,u.localAccountId).createContact({...n,addressBookIds:u.addressBookIds},a);o=a?{...i,id:`${a}:${i.id}`,originalId:i.id,accountId:a,accountName:c.accountName,isShared:!0,addressBookIds:Object.fromEntries(Object.entries(i.addressBookIds??{}).map(([e,t])=>[`${a}:${e}`,t]))}:i,u.localAccountId&&(o=Q([o],u.localAccountId)[0])}else if(r&&l){let{id:e,...n}=t;o=await r.createContact(n)}else o={...t,id:`local-${(0,n.o)()}`,...c?{addressBookIds:{[c.id]:!0}}:{}};e(e=>({contacts:[...e.contacts,o]})),d||(d=Object.keys(o.addressBookIds||{}).find(e=>o.addressBookIds[e])||""),s++}catch(e){console.error("Failed to import contact:",e)}return s>0&&(i.A.onContactsImport.emit({addressBookId:d,imported:s}),K()),s},mergeContacts:async(r,o)=>{let n=!!r&&t().supportsSync,{keep:a,others:l,patch:s}=o,d={};for(let e of Object.keys(s))d[e]=a[e];if(Object.keys(s).length>0&&!(n?await t().updateContact(r,a.id,s):await t().updateLocalContact(a.id,s)))return null;let c=[],u=G(t().contacts.filter(e=>"group"===e.kind),a,l);try{for(let{group:t,members:o}of u){if(n){let e=t.isShared?t.accountId:void 0;await X(r,t.localAccountId).updateContact(t.originalId||t.id,{members:o},e)}c.push({groupId:t.id,members:{...t.members??{}}}),e(e=>({contacts:e.contacts.map(e=>e.id===t.id?{...e,members:o}:e)})),i.A.onContactGroupMemberChange.emit({groupId:t.id,added:[a.id],removed:l.map(e=>e.id)})}}catch(e){return console.error("Failed to move group members while merging:",e),{keepId:a.id,before:d,others:[],groups:c,incomplete:!0}}await t().bulkDeleteContacts(n?r:null,l.map(e=>e.id));let f=new Set(t().contacts.map(e=>e.id)),m=l.filter(e=>!f.has(e.id));return{keepId:a.id,before:d,others:m,groups:c,...m.length<l.length?{incomplete:!0}:{}}},undoMergeContacts:async(r,o)=>{let n=!!r&&t().supportsSync,a=!0;for(let e of o.others)try{let o;if(n){let{id:n,originalId:a,created:i,updated:l,...s}=e,d=e.media?Object.fromEntries(Object.entries(e.media).filter(([,e])=>!!e?.uri)):void 0;o=await t().createContact(r,{...s,media:d&&Object.keys(d).length>0?d:void 0})}else o=await t().addLocalContact(e);o||(a=!1)}catch(e){console.error("Failed to restore a merged contact:",e),a=!1}for(let{groupId:i,members:l}of o.groups){let o=t().contacts.find(e=>e.id===i);if(o)try{if(n){let e=o.isShared?o.accountId:void 0;await X(r,o.localAccountId).updateContact(o.originalId||o.id,{members:l},e)}e(e=>({contacts:e.contacts.map(e=>e.id===i?{...e,members:l}:e)}))}catch(e){console.error("Failed to restore group members:",e),a=!1}}if(Object.keys(o.before).length>0)try{(n?await t().updateContact(r,o.keepId,o.before):await t().updateLocalContact(o.keepId,o.before))||(a=!1)}catch(e){console.error("Failed to restore the kept contact:",e),a=!1}return a}}},{name:"contact-storage",partialize:e=>({contacts:e.supportsSync?[]:e.contacts,supportsSync:e.supportsSync})}));eh.subscribe((e,t)=>{if(e.selectedContactIds===t.selectedContactIds||0===i.A.onContactSelectionChange.size)return;let r=e.selectedContactIds??new Set;!function(e,t){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}(r,t.selectedContactIds??new Set)&&i.A.onContactSelectionChange.emit({contactIds:[...r]})})},253509,e=>{var t=e.i(768834),r=e.i(579473);let o=(0,t.f)()((0,r.V)(e=>({locale:"",setLocale:t=>e({locale:t})}),{name:"locale-storage"}));e.s(["f",0,o])},761066,867080,463970,e=>{e.s(["O",()=>eI,"o",()=>ex,"p",()=>eD,"f",()=>eC,"a",()=>eE,"N",()=>eg,"d",()=>eT,"v",()=>eQ,"H",()=>V,"F",()=>q,"u",()=>Y,"b",()=>ef,"z",()=>el,"c",()=>ey,"k",()=>e_],761066);var t=e.i(768834),r=e.i(365076),o=e.i(579473),n=e.i(669922),a=e.i(253509),i=e.i(805495),l=e.i(787153),s=e.i(629001),d=e.i(506601),c=e.i(179083),u=e.i(728945),f=e.i(853903),m=e.i(511540),p=e.i(683809),g=e.i(274214),b=e.i(192992),h=e.i(47126),y=e.i(784454);let w=["+","-",".","="],k=/^[!#$%&'*+\-./=?^_`{|}~]$/;function v(e){return"string"==typeof e&&k.test(e)}e.s(["y",0,"+","L",0,30,"q",0,w,"g",0,function(e){let t=e.match(/@([^@]+)$/);return t?t[1].toLowerCase():null},"B",0,function(e,t,r="+"){let[o,n]=e.split("@");if(!o||!n||!t)return e;let a=o.indexOf(r),i=-1===a?o:o.substring(0,a),l=t.replace(/[^a-zA-Z0-9-]/g,"").toLowerCase();return l?`${i}${r}${l}@${n}`:e},"C",0,function(e){return e?e.length>30?"TOO_LONG":/^[a-zA-Z0-9-]+$/.test(e)?null:"INVALID_CHARS":"EMPTY"},"m",0,function(e){return w.includes(e)},"h",0,v,"M",0,function(e,t="+"){let[r,o]=e.split("@");if(!r||!o)return{localPart:r||"",baseUser:r||"",tag:null,domain:o||"",fullAddress:e};let n=r.indexOf(t);if(-1===n)return{localPart:r,baseUser:r,tag:null,domain:o,fullAddress:e};let a=r.substring(0,n),i=r.substring(n+t.length);return{localPart:r,baseUser:a,tag:i||null,domain:o,fullAddress:e}},"A",0,function(e){let t=e.toLowerCase(),r={"amazon.com":["amazon","shopping","orders"],"amazon.fr":["amazon","shopping","orders"],"amazon.de":["amazon","shopping","orders"],"amazon.co.uk":["amazon","shopping","orders"],"ebay.com":["ebay","shopping"],"ebay.fr":["ebay","shopping"],"paypal.com":["paypal","payments"],"facebook.com":["facebook","social"],"twitter.com":["twitter","social"],"x.com":["twitter","social"],"linkedin.com":["linkedin","professional"],"github.com":["github","dev","notifications"],"gitlab.com":["gitlab","dev","notifications"],"stackoverflow.com":["stackoverflow","dev"],"reddit.com":["reddit","social"],"netflix.com":["netflix","entertainment"],"spotify.com":["spotify","music"],"steam.com":["steam","gaming"],"discord.com":["discord","gaming"]};if(r[t])return r[t];let o=t.split(".");return[o.length>=2?o[o.length-2]:o[0],"newsletter","registration"]}],867080);let S="settingsModifiedAt";function A(e){let t={};if("object"!=typeof e||null===e||Array.isArray(e))return t;for(let[r,o]of Object.entries(e))"number"==typeof o&&Number.isFinite(o)&&o>0&&(t[r]=o);return t}function x(){return{stamps:{},dirty:{}}}var I=e.i(429949);let T="signed-out-choices";function C(){try{let e=JSON.parse(window.localStorage.getItem(T)??"[]");return Array.isArray(e)?e.filter(e=>"string"==typeof e):[]}catch{return[]}}function E(){return C()}function D(){try{window.localStorage.removeItem(T)}catch{}}e.s(["$",0,D,"g",0,function(...e){try{if(0===e.length)return;window.localStorage.setItem(T,JSON.stringify([...new Set([...C(),...e])]))}catch{}},"f",0,E],463970);let O=(...e)=>console.log("[SETTINGS_SYNC]",...e),L=(...e)=>console.warn("[SETTINGS_SYNC]",...e),M=(...e)=>console.error("[SETTINGS_SYNC]",...e);function R(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}let N=!1,B=null,$=null,j=null,F=null,P=!1,_=!1,z=0,U=null,H=null,W="settings-sync-owner",G=new Set;function V(e){return G.has(e)}let K=new Set;function q(e){return K.add(e),()=>K.delete(e)}function Y(){try{return window.localStorage.getItem(W)}catch{return null}}function Z(e){try{e?window.localStorage.setItem(W,e):window.localStorage.removeItem(W)}catch{}}let J="settings-sync-stamps";function Q(){try{var e=window.localStorage.getItem(J);if(!e)return x();try{let t=JSON.parse(e);return{stamps:A(t?.stamps),dirty:A(t?.dirty)}}catch{return x()}}catch{return x()}}function X(e){try{window.localStorage.setItem(J,JSON.stringify(e))}catch{}}function ee(e){let t=Q(),r=Date.now();for(let o of e)t.stamps[o]=r,t.dirty[o]=r;X(t)}function et(){return Object.keys(Q().dirty).length>0}let er=null;function eo(){if(!F){er?.(),er=null;return}if(er)return;let e=(0,I.$)()?.lifecycle;e&&(er=e.onFlushRequest(async()=>(await e_.getState().flushSync(),{})))}function en(){j&&(clearTimeout(j),j=null);let e=F;return F=null,eo(),e}let ea=null,ei=null;function el(e,t){ea=e,t(()=>ei?.())}function es(e,t){return JSON.stringify([Array.isArray(e)?e.filter(e=>"object"==typeof e&&null!==e&&"string"==typeof e.id).map(e=>`${e.id}@${String(e.updatedAt)}`).sort():[],R(t)?Object.keys(t).sort():[]])}function ed(e,t){let r=ea?.getSyncedState({accountId:t});return!!r&&(r.storedInAccount?!!e&&Array.isArray(e.templates):(0!==r.templates.length||0!==Object.keys(r.deletedTemplateIds).length)&&(!e||es(r.templates,r.deletedTemplateIds)!==es(e.templates,e.deletedTemplateIds)))}let ec=null,eu=null;function ef(e,t){ec=e,t(()=>eu?.())}async function em(e,t=1,r){let o;O("Syncing settings to server for",e.username);let n=JSON.stringify({username:e.username,serverUrl:e.serverUrl,settings:e.settings}),a=r?.keepalive===!0&&new TextEncoder().encode(n).length<=61440;try{o=await (0,s.i)("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:n,...a?{keepalive:!0}:{}})}catch(e){L("Settings sync could not reach the server; the changes stay marked to send:",e);return}if(404===o.status)L("Settings sync endpoint returned 404, disabling sync"),N=!1;else if(403===o.status)L("Settings sync rejected (identity mismatch), disabling sync"),N=!1;else if(o.status>=500&&t>0)return L("Settings sync got server error:",(await o.json().catch(()=>({}))).error||`status ${o.status}`,"- retrying..."),await new Promise(e=>setTimeout(e,2e3)),em(e,t-1);else if(o.ok){var i=e.dirty;let t=Q(),r=!1;for(let[e,o]of Object.entries(i))t.dirty[e]===o&&(delete t.dirty[e],r=!0);r&&X(t),O("Settings synced to server successfully"),c.D.onSettingsSync.emit({direction:"pushed"})}else M("Settings sync failed:",(await o.json().catch(()=>({}))).error||`status ${o.status}`)}let ep=new Set(["onboardingCompleted","tourCompleted"]);function eg(e,t,r=!1){return"mountain-view"===t||r?"focus":e}let eb=["bar","text","dot"],eh=[0,5,10,30,60];function ey(e){return eh.filter(t=>60!==t||60===e)}let ew=new Set(["proInterface"]),ek=new Set(["preferredIdentityIds","allMailFolderIds","hiddenSharedMailAccounts"]);function ev(e){let t={};if(!e||"object"!=typeof e||Array.isArray(e))return t;for(let[r,o]of Object.entries(e))"boolean"==typeof o&&r.length<=200&&"__proto__"!==r&&(t[r]=o);return t}function eS(e){return"auto"===e||"string"==typeof e&&/^[A-Za-z]{2,3}(-[A-Za-z0-9]{1,8}){0,3}$/.test(e)}let eA=new Set(["enableUnifiedMailbox","includeGroupInUnified","unifiedCrossAccount","enableCrossUnreadView","enableCrossStarredView","enableCrossAllView"]),ex=[{id:"delete",labelKey:"delete"},{id:"star",labelKey:"star"},{id:"markRead",labelKey:"mark_read"},{id:"archive",labelKey:"archive"},{id:"tag",labelKey:"tag"},{id:"spam",labelKey:"spam"}],eI=[{id:"jmap",labelKey:"jmap"},{id:"calendar",labelKey:"calendar"},{id:"tasks",labelKey:"tasks"},{id:"auth",labelKey:"auth"},{id:"filters",labelKey:"filters"},{id:"email",labelKey:"email"},{id:"push",labelKey:"push"},{id:"contacts",labelKey:"contacts"}];function eT(e){return e.visibility??"show"}let eC={"red-light":{dot:"bg-red-300",icon:"text-red-300",fill:"tag-fill-red-300",border:"border-red-300/30",text:"text-red-600 dark:text-red-200",rowTint:"bg-red-50/60 dark:bg-red-950/20"},"orange-light":{dot:"bg-orange-300",icon:"text-orange-300",fill:"tag-fill-orange-300",border:"border-orange-300/30",text:"text-orange-600 dark:text-orange-200",rowTint:"bg-orange-50/60 dark:bg-orange-950/20"},"amber-light":{dot:"bg-amber-300",icon:"text-amber-300",fill:"tag-fill-amber-300",border:"border-amber-300/30",text:"text-amber-600 dark:text-amber-200",rowTint:"bg-amber-50/60 dark:bg-amber-950/20"},"yellow-light":{dot:"bg-yellow-300",icon:"text-yellow-300",fill:"tag-fill-yellow-300",border:"border-yellow-300/30",text:"text-yellow-600 dark:text-yellow-200",rowTint:"bg-yellow-50/60 dark:bg-yellow-950/20"},"lime-light":{dot:"bg-lime-300",icon:"text-lime-300",fill:"tag-fill-lime-300",border:"border-lime-300/30",text:"text-lime-600 dark:text-lime-200",rowTint:"bg-lime-50/60 dark:bg-lime-950/20"},"green-light":{dot:"bg-green-300",icon:"text-green-300",fill:"tag-fill-green-300",border:"border-green-300/30",text:"text-green-600 dark:text-green-200",rowTint:"bg-green-50/60 dark:bg-green-950/20"},"teal-light":{dot:"bg-teal-300",icon:"text-teal-300",fill:"tag-fill-teal-300",border:"border-teal-300/30",text:"text-teal-600 dark:text-teal-200",rowTint:"bg-teal-50/60 dark:bg-teal-950/20"},"cyan-light":{dot:"bg-cyan-300",icon:"text-cyan-300",fill:"tag-fill-cyan-300",border:"border-cyan-300/30",text:"text-cyan-600 dark:text-cyan-200",rowTint:"bg-cyan-50/60 dark:bg-cyan-950/20"},"blue-light":{dot:"bg-blue-300",icon:"text-blue-300",fill:"tag-fill-blue-300",border:"border-blue-300/30",text:"text-blue-600 dark:text-blue-200",rowTint:"bg-blue-50/60 dark:bg-blue-950/20"},"indigo-light":{dot:"bg-indigo-300",icon:"text-indigo-300",fill:"tag-fill-indigo-300",border:"border-indigo-300/30",text:"text-indigo-600 dark:text-indigo-200",rowTint:"bg-indigo-50/60 dark:bg-indigo-950/20"},"purple-light":{dot:"bg-purple-300",icon:"text-purple-300",fill:"tag-fill-purple-300",border:"border-purple-300/30",text:"text-purple-600 dark:text-purple-200",rowTint:"bg-purple-50/60 dark:bg-purple-950/20"},"pink-light":{dot:"bg-pink-300",icon:"text-pink-300",fill:"tag-fill-pink-300",border:"border-pink-300/30",text:"text-pink-600 dark:text-pink-200",rowTint:"bg-pink-50/60 dark:bg-pink-950/20"},"gray-light":{dot:"bg-gray-300",icon:"text-gray-300",fill:"tag-fill-gray-300",border:"border-gray-300/30",text:"text-gray-600 dark:text-gray-200",rowTint:"bg-gray-50/60 dark:bg-gray-950/20"},red:{dot:"bg-red-500",icon:"text-red-500",fill:"tag-fill-red-500",border:"border-red-500/30",text:"text-red-700 dark:text-red-300",rowTint:"bg-red-50 dark:bg-red-950/30"},orange:{dot:"bg-orange-500",icon:"text-orange-500",fill:"tag-fill-orange-500",border:"border-orange-500/30",text:"text-orange-700 dark:text-orange-300",rowTint:"bg-orange-50 dark:bg-orange-950/30"},amber:{dot:"bg-amber-500",icon:"text-amber-500",fill:"tag-fill-amber-500",border:"border-amber-500/30",text:"text-amber-700 dark:text-amber-300",rowTint:"bg-amber-50 dark:bg-amber-950/30"},yellow:{dot:"bg-yellow-500",icon:"text-yellow-500",fill:"tag-fill-yellow-500",border:"border-yellow-500/30",text:"text-yellow-700 dark:text-yellow-300",rowTint:"bg-yellow-50 dark:bg-yellow-950/30"},lime:{dot:"bg-lime-500",icon:"text-lime-500",fill:"tag-fill-lime-500",border:"border-lime-500/30",text:"text-lime-700 dark:text-lime-300",rowTint:"bg-lime-50 dark:bg-lime-950/30"},green:{dot:"bg-green-500",icon:"text-green-500",fill:"tag-fill-green-500",border:"border-green-500/30",text:"text-green-700 dark:text-green-300",rowTint:"bg-green-50 dark:bg-green-950/30"},teal:{dot:"bg-teal-500",icon:"text-teal-500",fill:"tag-fill-teal-500",border:"border-teal-500/30",text:"text-teal-700 dark:text-teal-300",rowTint:"bg-teal-50 dark:bg-teal-950/30"},cyan:{dot:"bg-cyan-500",icon:"text-cyan-500",fill:"tag-fill-cyan-500",border:"border-cyan-500/30",text:"text-cyan-700 dark:text-cyan-300",rowTint:"bg-cyan-50 dark:bg-cyan-950/30"},blue:{dot:"bg-blue-500",icon:"text-blue-500",fill:"tag-fill-blue-500",border:"border-blue-500/30",text:"text-blue-700 dark:text-blue-300",rowTint:"bg-blue-50 dark:bg-blue-950/30"},indigo:{dot:"bg-indigo-500",icon:"text-indigo-500",fill:"tag-fill-indigo-500",border:"border-indigo-500/30",text:"text-indigo-700 dark:text-indigo-300",rowTint:"bg-indigo-50 dark:bg-indigo-950/30"},purple:{dot:"bg-purple-500",icon:"text-purple-500",fill:"tag-fill-purple-500",border:"border-purple-500/30",text:"text-purple-700 dark:text-purple-300",rowTint:"bg-purple-50 dark:bg-purple-950/30"},pink:{dot:"bg-pink-500",icon:"text-pink-500",fill:"tag-fill-pink-500",border:"border-pink-500/30",text:"text-pink-700 dark:text-pink-300",rowTint:"bg-pink-50 dark:bg-pink-950/30"},gray:{dot:"bg-gray-500",icon:"text-gray-500",fill:"tag-fill-gray-500",border:"border-gray-500/30",text:"text-gray-700 dark:text-gray-300",rowTint:"bg-gray-50 dark:bg-gray-950/30"},"red-dark":{dot:"bg-red-700",icon:"text-red-700",fill:"tag-fill-red-700",border:"border-red-700/30",text:"text-red-800 dark:text-red-400",rowTint:"bg-red-100 dark:bg-red-950/50"},"orange-dark":{dot:"bg-orange-700",icon:"text-orange-700",fill:"tag-fill-orange-700",border:"border-orange-700/30",text:"text-orange-800 dark:text-orange-400",rowTint:"bg-orange-100 dark:bg-orange-950/50"},"amber-dark":{dot:"bg-amber-700",icon:"text-amber-700",fill:"tag-fill-amber-700",border:"border-amber-700/30",text:"text-amber-800 dark:text-amber-400",rowTint:"bg-amber-100 dark:bg-amber-950/50"},"yellow-dark":{dot:"bg-yellow-700",icon:"text-yellow-700",fill:"tag-fill-yellow-700",border:"border-yellow-700/30",text:"text-yellow-800 dark:text-yellow-400",rowTint:"bg-yellow-100 dark:bg-yellow-950/50"},"lime-dark":{dot:"bg-lime-700",icon:"text-lime-700",fill:"tag-fill-lime-700",border:"border-lime-700/30",text:"text-lime-800 dark:text-lime-400",rowTint:"bg-lime-100 dark:bg-lime-950/50"},"green-dark":{dot:"bg-green-700",icon:"text-green-700",fill:"tag-fill-green-700",border:"border-green-700/30",text:"text-green-800 dark:text-green-400",rowTint:"bg-green-100 dark:bg-green-950/50"},"teal-dark":{dot:"bg-teal-700",icon:"text-teal-700",fill:"tag-fill-teal-700",border:"border-teal-700/30",text:"text-teal-800 dark:text-teal-400",rowTint:"bg-teal-100 dark:bg-teal-950/50"},"cyan-dark":{dot:"bg-cyan-700",icon:"text-cyan-700",fill:"tag-fill-cyan-700",border:"border-cyan-700/30",text:"text-cyan-800 dark:text-cyan-400",rowTint:"bg-cyan-100 dark:bg-cyan-950/50"},"blue-dark":{dot:"bg-blue-700",icon:"text-blue-700",fill:"tag-fill-blue-700",border:"border-blue-700/30",text:"text-blue-800 dark:text-blue-400",rowTint:"bg-blue-100 dark:bg-blue-950/50"},"indigo-dark":{dot:"bg-indigo-700",icon:"text-indigo-700",fill:"tag-fill-indigo-700",border:"border-indigo-700/30",text:"text-indigo-800 dark:text-indigo-400",rowTint:"bg-indigo-100 dark:bg-indigo-950/50"},"purple-dark":{dot:"bg-purple-700",icon:"text-purple-700",fill:"tag-fill-purple-700",border:"border-purple-700/30",text:"text-purple-800 dark:text-purple-400",rowTint:"bg-purple-100 dark:bg-purple-950/50"},"pink-dark":{dot:"bg-pink-700",icon:"text-pink-700",fill:"tag-fill-pink-700",border:"border-pink-700/30",text:"text-pink-800 dark:text-pink-400",rowTint:"bg-pink-100 dark:bg-pink-950/50"},"gray-dark":{dot:"bg-gray-700",icon:"text-gray-700",fill:"tag-fill-gray-700",border:"border-gray-700/30",text:"text-gray-800 dark:text-gray-400",rowTint:"bg-gray-100 dark:bg-gray-950/50"}},eE=[["red-light","orange-light","amber-light","yellow-light","lime-light","green-light","teal-light","cyan-light","blue-light","indigo-light","purple-light","pink-light","gray-light"],["red","orange","amber","yellow","lime","green","teal","cyan","blue","indigo","purple","pink","gray"],["red-dark","orange-dark","amber-dark","yellow-dark","lime-dark","green-dark","teal-dark","cyan-dark","blue-dark","indigo-dark","purple-dark","pink-dark","gray-dark"]],eD="gray",eO={fontSize:"medium",density:"regular",interfaceLayout:"default",mvInboxType:"unread-first",mvUnreadSectionCollapsed:!1,mvEverythingElseCollapsed:!1,...y.G,messageListOrder:[],messageListOrderScope:"inbox",dateFormat:"smart",dateLocale:"auto",timeFormat:"24h",firstDayOfWeek:1,timeZone:"auto",markAsReadDelay:0,deleteAction:"trash",permanentlyDeleteJunk:!1,confirmBulkDelete:!0,returnToListAfterAction:!0,clearSearchOnFolderChange:!1,searchDefaultScope:"all",showPreview:!0,showVerificationCodes:!0,mailLayout:"split",listColumns:!1,emailsPerPage:50,externalContentPolicy:"ask",messageSpacing:"auto",plainTextFont:"sans",printTheme:"standard",mailAttachmentAction:"preview",emailAlwaysLightMode:!1,archiveMode:"single",hoverActions:["delete","star","markRead","archive"],hoverActionsMode:"inline",hoverActionsCorner:"top-right",swipeRightAction:"archive",swipeLeftAction:"delete",sendConfirmation:!1,quickReplyEnabled:!0,defaultReplyMode:"reply",autoSelectReplyIdentity:!1,replyIdentityMatch:"domain",plainTextMode:!1,proofreading:!1,proofreadingPlugins:{},proofreadingNoticeSeen:{},writingLanguage:"auto",rtlEditingSupport:!1,subAddressDelimiter:"+",sendDelaySeconds:5,signaturePosition:"below_quote",signatureNewMailEnabled:!0,signatureReplyForwardEnabled:!0,signatureSeparatorEnabled:!0,signatureDetails:h.W,requestReadReceiptDefault:!1,readReceiptResponse:"ask",sessionTimeout:0,trustedSenders:[],trustedSendersAddressBook:!0,expandedFilterView:!1,showTimeInMonthView:!1,calendarTintedEvents:!1,calendarMonthTimedEvents:"bar",showWeekNumbers:!1,calendarFreeScroll:!0,calendarHoverPreview:"delay-500ms",calendarLimitHours:!0,calendarDayStartHour:8,calendarDayEndHour:20,calendarHideNonWorkingDays:!1,calendarNarrowWeekAllDays:!1,calendarWorkingDays:[1,2,3,4,5],vacationBlockCalendar:!0,vacationCalendarBlocks:{},hiddenCompanyCalendars:[],enableCalendarTasks:!0,showTasksOnCalendar:!0,showBirthdayCalendar:!1,birthdayCalendarColor:"#eab308",sharedCalendarColors:{},groupContactsByLetter:!0,sortContactsByLastName:!1,showContactsDirectory:!0,filesSettings:p.J,emailNotificationsEnabled:!0,emailNotificationSound:!0,notificationSoundChoice:"involved",pushNotifyInboxOnly:!1,notificationMutes:l.e,pushRelayUrl:"",protocolOpenMode:"new-tab",calendarNotificationsEnabled:!0,calendarNotificationSound:!0,calendarInvitationParsingEnabled:!0,toolbarPosition:"top",showToolbarLabels:!0,hideAccountSwitcher:!1,sidebarAccountSwitcher:!0,showRailAccountList:!1,proInterface:!1,showAdvancedSettings:!1,enableUnifiedMailbox:!1,includeGroupInUnified:!0,unifiedCrossAccount:!1,allMailFolderIds:{},preferredIdentityIds:{},enableCrossUnreadView:!1,enableCrossStarredView:!1,enableCrossAllView:!1,disableThreading:!1,senderFavicons:!0,showAvatarsInJunk:!1,faviconUnreadBadge:!0,unreadBadgeAllAccounts:!0,colorfulSidebarIcons:!0,tintListRowsByTag:!1,tintListRowsByAccount:!1,showAccountDot:!0,showFolderTotalCount:!0,showSharedMailAccounts:!0,compactSharedMailboxes:!1,hiddenSharedMailAccounts:{},folderIcons:{},folderCountModes:{},emailKeywords:[{id:"red",label:"Red",color:"red"},{id:"orange",label:"Orange",color:"orange"},{id:"yellow",label:"Yellow",color:"yellow"},{id:"green",label:"Green",color:"green"},{id:"blue",label:"Blue",color:"blue"},{id:"purple",label:"Purple",color:"purple"},{id:"pink",label:"Pink",color:"pink"}],nestedTags:!1,attachmentReminderEnabled:!0,attachmentReminderKeywords:["attached","attachment","attachments","see attached","find attached","please find attached","angehängt","anhang","anbei","im anhang","ci-joint","pièce jointe","adjunto","adjunta","en adjunto","allegato","in allegato","bijgevoegd","bijlage","em anexo","anexo","w załączniku","во вложении","添付","附件","첨부","pielikumā"],emptySubjectWarningEnabled:!0,placeholderWarningEnabled:!0,recipientMentionsEnabled:!0,mentionAddsRecipientTo:"to",hideInlineImageAttachments:!0,attachmentImagePreviewsEnabled:!0,sidebarApps:[],keepAppsLoaded:!1,onboardingCompleted:!1,tourCompleted:!1,showOnboardingOnNewDevices:!1,emailDownloadTemplate:"{date} ({from}-{to}) {subject}",attachmentDownloadTemplate:"{filename}",bundleDownloadTemplate:"emails-{count}",filenameSpaceReplacement:"keep",filenameLowercase:!1,filenameStripDiacritics:!1,filenameCollapseSeparators:!0,postExportAction:"keep",debugMode:!1,debugCategories:{jmap:!0,calendar:!0,tasks:!0,auth:!0,filters:!0,email:!0,push:!0},settingsSyncDisabled:!1,explicitSettings:[]},eL=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),eM=e=>eO[e],eR={hoverActions:ex.map(e=>e.id)};function eN(e,t){return e===t||Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((e,r)=>e===t[r])}function eB(e){if("explicitSettings"===e||!eL(eO,e))return!1;if(eL(eR,e))return!0;let t=typeof eM(e);return"boolean"===t||"number"===t||"string"===t}function e$(e,t,r){if(!eB(e))return!1;if(eL(eR,e)){let r=eR[e];return Array.isArray(t)&&t.every(e=>r.includes(e))&&new Set(t).size===t.length}if(typeof t!=typeof eM(e)||"number"==typeof t&&!Number.isFinite(t)||"sendDelaySeconds"===e&&!eh.includes(t)||"subAddressDelimiter"===e&&!v(t)||"messageListOrderScope"===e&&"inbox"!==t&&"all"!==t||"searchDefaultScope"===e&&!(0,b.f)(t)||"calendarMonthTimedEvents"===e&&!eb.includes(t)||!(0,y.P)(e,t))return!1;if(r&&"object"==typeof r){if(Array.isArray(r.allowedValues)&&!r.allowedValues.includes(t))return!1;if("toastDuration"===e&&"number"==typeof r.min)return(0,y.j)(t,r.min);if("number"==typeof t&&("number"==typeof r.min&&t<r.min||"number"==typeof r.max&&t>r.max))return!1}return!0}function ej(e){if(!eL(e,"animationsEnabled")||eL(e,"reduceMotion"))return e;let{animationsEnabled:t,...r}=e,o=e=>!1===e?"on":!0===e?"system":e,n=R(t)?{...t,...eL(t,"value")?{value:o(t.value)}:{}}:o(t);return{...r,reduceMotion:n}}function eF(e){return Object.keys(e).filter(t=>eB(t)&&!eN(e[t],eM(t)))}let eP=new Set,e_=(0,t.f)()((0,o.V)((t,r)=>{let o=e=>{let o={...eO};for(let e of ew)delete o[e];if(e?.keepCrossAccountViews)for(let e of eA)delete o[e];let n=E();for(let e of n)delete o[e];o.explicitSettings=r().explicitSettings.filter(e=>!eL(o,e));let a=P;P=!0;try{t(o),ea?.applySyncedState([],{},{merge:!1}),w()}finally{P=a}try{window.localStorage.removeItem(J)}catch{}n.length>0&&ee(n),d()},d=()=>{let e=r();eY(e),eZ(e.density,e.interfaceLayout),eJ(e.interfaceLayout,e.density)},w=()=>{let e=function(e,t){let r=new Set(Array.isArray(e.explicitSettings)?e.explicitSettings:[]),o=ej(R(t.defaults)?t.defaults:{}),n=ej(R(t.restrictions)?t.restrictions:{}),a=e=>eL(n,e)?n[e]:void 0,i={};for(let[t,n]of Object.entries(o))if(!r.has(t)){if(!e$(t,n,a(t))){eP.has(t)||(eP.add(t),console.warn(`[policy] defaults.${t} skipped: not a setting a policy may set, or a value it can't take`));continue}eN(e[t],n)||(i[t]=n)}for(let[t,a]of Object.entries(n)){if(!R(a)||!0!==a.locked)continue;let n=eL(a,"value")?a.value:eL(o,t)?o[t]:void 0;e$(t,n,a)&&(y.F.has(t)&&r.has(t)||(eN(e[t],n)?delete i[t]:i[t]=n))}return i}(r(),i.M.getState().policy);if(0===Object.keys(e).length)return!1;z++;try{t(e)}finally{z--}return!0},k=(e,o)=>{t({[e]:o}),("fontSize"===e||eq.has(e))&&eY(r()),"density"===e&&eZ(o,r().interfaceLayout),"interfaceLayout"===e&&eJ(o,r().density),("showBirthdayCalendar"===e||"birthdayCalendarColor"===e)&&c.s.onCalendarChange.emit({calendarId:u.z,change:"showBirthdayCalendar"!==e||o?"updated":"removed"})};return{...eO,updateSetting:(e,o,n)=>{var a;let i;n?.internal||ep.has(e)?k(e,o):(a=r()[e],i=()=>{(()=>{k(e,o);let{explicitSettings:n}=r();eL(eO,e)&&"explicitSettings"!==e&&!n.includes(e)&&t({explicitSettings:[...n,e]})})(),c.D.onSettingChange.emit({key:e,value:o,previous:a})},0===c.D.onBeforeSettingChange.size||function(e,t,r){if("proofreading"===e)return!1===t;if("proofreadingPlugins"!==e||!t||"object"!=typeof t)return!1;let o=r&&"object"==typeof r?r:{};return Object.entries(t).some(([e,t])=>!1===t&&!1!==o[e])}(e,o,a)?i():c.D.onBeforeSettingChange.intercept({key:e,value:o,previous:a}).then(e=>{e&&i()}))},applyAdminPolicy:e=>{let o=e?function(e,t,r){let o=new Set(Array.isArray(e.explicitSettings)?e.explicitSettings:[]),n=e=>{let t=new Map,r=R(e.defaults)?e.defaults:{},o=R(e.restrictions)?e.restrictions:{};for(let[e,o]of Object.entries(r))t.set(e,o);for(let[e,n]of Object.entries(o))R(n)&&!0===n.locked&&t.set(e,eL(n,"value")?n.value:eL(r,e)?r[e]:void 0);return t},a=n(t),i=n(r),l={};for(let[t,r]of a)!(i.has(t)||o.has(t))&&eB(t)&&eN(e[t],r)&&!eN(r,eM(t))&&(l[t]=eM(t));return l}(r(),e,i.M.getState().policy):{};if(Object.keys(o).length>0){z++;try{t(o)}finally{z--}}(w()||Object.keys(o).length>0)&&d()},resetToDefaults:()=>{t({...eO,settingsSyncDisabled:r().settingsSyncDisabled}),w(),d(),c.D.onSettingsReset.emit({})},resetSettings:e=>{let o=e.filter(e=>eL(eO,e)&&"explicitSettings"!==e&&!ep.has(e));if(0===o.length)return;let n=r(),a=Object.fromEntries(o.map(e=>[e,n[e]])),i=new Set(o);t({...Object.fromEntries(o.map(e=>[e,eM(e)])),explicitSettings:r().explicitSettings.filter(e=>!i.has(e))}),w(),d();let l=r();for(let e of o)l[e]!==a[e]&&c.D.onSettingChange.emit({key:e,value:l[e],previous:a[e]})},exportSettings:e=>{let t,o,i,l=(t=r(),o=ea?.getSyncedState({accountId:e?.forSync&&B&&$?(0,f.e)(B,$):void 0}),i=ec?.getSyncedState(),JSON.stringify({fontSize:t.fontSize,density:t.density,interfaceLayout:t.interfaceLayout,mvInboxType:t.mvInboxType,messageListOrder:t.messageListOrder,messageListOrderScope:t.messageListOrderScope,dateFormat:t.dateFormat,dateLocale:t.dateLocale,timeFormat:t.timeFormat,firstDayOfWeek:t.firstDayOfWeek,timeZone:t.timeZone,markAsReadDelay:t.markAsReadDelay,deleteAction:t.deleteAction,returnToListAfterAction:t.returnToListAfterAction,confirmBulkDelete:t.confirmBulkDelete,permanentlyDeleteJunk:t.permanentlyDeleteJunk,clearSearchOnFolderChange:t.clearSearchOnFolderChange,searchDefaultScope:t.searchDefaultScope,showPreview:t.showPreview,showVerificationCodes:t.showVerificationCodes,mailLayout:t.mailLayout,listColumns:t.listColumns,emailsPerPage:t.emailsPerPage,externalContentPolicy:t.externalContentPolicy,messageSpacing:t.messageSpacing,plainTextFont:t.plainTextFont,printTheme:t.printTheme,mailAttachmentAction:t.mailAttachmentAction,archiveMode:t.archiveMode,hoverActions:t.hoverActions,hoverActionsMode:t.hoverActionsMode,hoverActionsCorner:t.hoverActionsCorner,swipeRightAction:t.swipeRightAction,swipeLeftAction:t.swipeLeftAction,disableThreading:t.disableThreading,trustedSenders:t.trustedSenders,sendConfirmation:t.sendConfirmation,quickReplyEnabled:t.quickReplyEnabled,defaultReplyMode:t.defaultReplyMode,autoSelectReplyIdentity:t.autoSelectReplyIdentity,replyIdentityMatch:t.replyIdentityMatch,plainTextMode:t.plainTextMode,proofreading:t.proofreading,proofreadingPlugins:t.proofreadingPlugins,proofreadingNoticeSeen:t.proofreadingNoticeSeen,writingLanguage:t.writingLanguage,rtlEditingSupport:t.rtlEditingSupport,subAddressDelimiter:t.subAddressDelimiter,sendDelaySeconds:t.sendDelaySeconds,signaturePosition:t.signaturePosition,signatureNewMailEnabled:t.signatureNewMailEnabled,signatureReplyForwardEnabled:t.signatureReplyForwardEnabled,signatureSeparatorEnabled:t.signatureSeparatorEnabled,signatureDetails:t.signatureDetails,requestReadReceiptDefault:t.requestReadReceiptDefault,readReceiptResponse:t.readReceiptResponse,sessionTimeout:t.sessionTimeout,emailNotificationsEnabled:t.emailNotificationsEnabled,emailNotificationSound:t.emailNotificationSound,notificationSoundChoice:t.notificationSoundChoice,pushNotifyInboxOnly:t.pushNotifyInboxOnly,notificationMutes:t.notificationMutes,pushRelayUrl:t.pushRelayUrl,protocolOpenMode:t.protocolOpenMode,calendarNotificationsEnabled:t.calendarNotificationsEnabled,calendarNotificationSound:t.calendarNotificationSound,calendarInvitationParsingEnabled:t.calendarInvitationParsingEnabled,enableCalendarTasks:t.enableCalendarTasks,showTasksOnCalendar:t.showTasksOnCalendar,showBirthdayCalendar:t.showBirthdayCalendar,birthdayCalendarColor:t.birthdayCalendarColor,sharedCalendarColors:t.sharedCalendarColors,groupContactsByLetter:t.groupContactsByLetter,sortContactsByLastName:t.sortContactsByLastName,showContactsDirectory:t.showContactsDirectory,filesSettings:t.filesSettings,expandedFilterView:t.expandedFilterView,showTimeInMonthView:t.showTimeInMonthView,calendarTintedEvents:t.calendarTintedEvents,calendarMonthTimedEvents:t.calendarMonthTimedEvents,showWeekNumbers:t.showWeekNumbers,calendarFreeScroll:t.calendarFreeScroll,calendarHoverPreview:t.calendarHoverPreview,calendarLimitHours:t.calendarLimitHours,calendarDayStartHour:t.calendarDayStartHour,calendarDayEndHour:t.calendarDayEndHour,calendarHideNonWorkingDays:t.calendarHideNonWorkingDays,calendarNarrowWeekAllDays:t.calendarNarrowWeekAllDays,calendarWorkingDays:t.calendarWorkingDays,vacationBlockCalendar:t.vacationBlockCalendar,vacationCalendarBlocks:t.vacationCalendarBlocks,hiddenCompanyCalendars:t.hiddenCompanyCalendars,toolbarPosition:t.toolbarPosition,hideAccountSwitcher:t.hideAccountSwitcher,sidebarAccountSwitcher:t.sidebarAccountSwitcher,showRailAccountList:t.showRailAccountList,showAdvancedSettings:t.showAdvancedSettings,enableUnifiedMailbox:t.enableUnifiedMailbox,includeGroupInUnified:t.includeGroupInUnified,unifiedCrossAccount:t.unifiedCrossAccount,allMailFolderIds:t.allMailFolderIds,preferredIdentityIds:t.preferredIdentityIds,enableCrossUnreadView:t.enableCrossUnreadView,enableCrossStarredView:t.enableCrossStarredView,enableCrossAllView:t.enableCrossAllView,senderFavicons:t.senderFavicons,showAvatarsInJunk:t.showAvatarsInJunk,faviconUnreadBadge:t.faviconUnreadBadge,unreadBadgeAllAccounts:t.unreadBadgeAllAccounts,colorfulSidebarIcons:t.colorfulSidebarIcons,tintListRowsByTag:t.tintListRowsByTag,tintListRowsByAccount:t.tintListRowsByAccount,showAccountDot:t.showAccountDot,showFolderTotalCount:t.showFolderTotalCount,showSharedMailAccounts:t.showSharedMailAccounts,compactSharedMailboxes:t.compactSharedMailboxes,hiddenSharedMailAccounts:t.hiddenSharedMailAccounts,folderIcons:t.folderIcons,folderCountModes:t.folderCountModes,emailKeywords:t.emailKeywords,nestedTags:t.nestedTags,attachmentReminderEnabled:t.attachmentReminderEnabled,attachmentReminderKeywords:t.attachmentReminderKeywords,emptySubjectWarningEnabled:t.emptySubjectWarningEnabled,placeholderWarningEnabled:t.placeholderWarningEnabled,recipientMentionsEnabled:t.recipientMentionsEnabled,mentionAddsRecipientTo:t.mentionAddsRecipientTo,hideInlineImageAttachments:t.hideInlineImageAttachments,attachmentImagePreviewsEnabled:t.attachmentImagePreviewsEnabled,sidebarApps:t.sidebarApps,keepAppsLoaded:t.keepAppsLoaded,onboardingCompleted:t.onboardingCompleted,tourCompleted:t.tourCompleted,showOnboardingOnNewDevices:t.showOnboardingOnNewDevices,debugMode:t.debugMode,debugCategories:t.debugCategories,settingsSyncDisabled:t.settingsSyncDisabled,explicitSettings:t.explicitSettings,...e?.forSync?{[S]:{...Q().stamps}}:{},emailAlwaysLightMode:t.emailAlwaysLightMode,showToolbarLabels:t.showToolbarLabels,...Object.fromEntries(y.W.map(e=>[e,t[e]])),theme:n.f.getState().theme,themeChosen:n.f.getState().themeChosen,locale:a.f.getState().locale,...o&&e?.forSync&&o.storedInAccount?{templatesInMetadata:!0}:o?{templates:o.templates,deletedTemplateIds:o.deletedTemplateIds}:{},...i?{icalSubscriptions:e?.subscriptionOwner?i.icalSubscriptions.filter(t=>t.owner===e.subscriptionOwner):i.icalSubscriptions,deletedSubscriptionIds:i.deletedSubscriptionIds}:{}},null,2));return e?.forSync||c.D.onSettingsExport.emit({keys:Object.keys(JSON.parse(l))}),l},importSettings:(e,o)=>{let i=!!o?.serverAccountId;i&&z++;try{let s=JSON.parse(e);if("object"!=typeof s||null===s)return!1;"string"!=typeof s.protocolOpenMode&&"string"==typeof s.protocolMailtoOpenMode&&(s.protocolOpenMode=s.protocolMailtoOpenMode),eU(s),eH(s),eW(s),eV(s),eG(s),eK(s),ez(s);let u=i?A(s[S]):null,f=u?Q():null,m=e=>{let t;return null!==u&&null!==f&&void 0!==(t=f.dirty[e])&&t>(u[e]??0)},k=e=>{u&&f&&(u[e]?f.stamps[e]=u[e]:delete f.stamps[e],delete f.dirty[e])},x=[],I=(e,r)=>{t(r),x.push(e)};Object.keys(s).forEach(e=>{if(e in eO){let n;if("explicitSettings"===e)return;let a=!!o?.serverAccountId&&ek.has(e);if(m(e)&&!a||"subAddressDelimiter"===e&&!v(s[e]))return;if("sendDelaySeconds"===e&&(n=s[e],!eh.includes(n)))return void I(e,{sendDelaySeconds:0});if(!(0,y.P)(e,s[e])||"timeZone"===e&&"string"!=typeof s[e]||"allMailFolderIds"===e&&!R(s[e])||"preferredIdentityIds"===e&&!R(s[e]))return;if("proofreadingPlugins"===e||"proofreadingNoticeSeen"===e)return void I(e,{[e]:ev(s[e])});if(("writingLanguage"!==e||eS(s[e]))&&("hiddenSharedMailAccounts"!==e||R(s[e]))){if("signatureDetails"===e)return void I(e,{signatureDetails:(0,h.Z)(s[e])});if("notificationMutes"===e)return void I(e,{notificationMutes:(0,l.g)(s[e])});if("filesSettings"===e)return void I(e,{filesSettings:(0,p.b)(s[e])});if("messageListOrder"===e)return void I(e,{messageListOrder:(0,g.k)(s[e])});if(!("messageListOrderScope"===e&&"inbox"!==s[e]&&"all"!==s[e]||"searchDefaultScope"===e&&!(0,b.f)(s[e])||"permanentlyDeleteJunk"===e&&"boolean"!=typeof s[e]||ew.has(e))&&!(o?.keepCrossAccountViews&&eA.has(e))){if(a&&o?.serverAccountId){let n=r()[e],a=R(n)?{...n}:{},i=s[e],l=m(e);Object.prototype.hasOwnProperty.call(i,o.serverAccountId)&&!(l&&Object.prototype.hasOwnProperty.call(a,o.serverAccountId))&&(a[o.serverAccountId]=i[o.serverAccountId]),l?t({[e]:a}):I(e,{[e]:a});return}I(e,{[e]:s[e]})}}}});let T=new Set(x);for(let e of T)k(e);let C=Array.isArray(s.explicitSettings)?s.explicitSettings.filter(e=>"string"==typeof e):eF(s);if(t({explicitSettings:[...new Set([...r().explicitSettings.filter(e=>!T.has(e)),...C.filter(e=>T.has(e))])]}),w(),d(),s.theme&&!m("theme")){let e="boolean"==typeof s.themeChosen?s.themeChosen:"system"!==s.theme;n.f.getState().setTheme(s.theme,{chosen:e}),k("theme"),k("themeChosen")}return s.locale&&!m("locale")&&(a.f.getState().setLocale(s.locale),k("locale")),f&&X(f),ea?.applySyncedState(s.templates,s.deletedTemplateIds,{merge:!!o?.serverAccountId,accountId:o?.serverAccountId}),ec?.applySyncedState(s.icalSubscriptions,s.deletedSubscriptionIds,{merge:!!o?.serverAccountId,owner:o?.subscriptionOwner}),o?.serverAccountId||(s.theme&&x.push("theme"),s.locale&&x.push("locale"),void 0!==s.templates&&x.push("templates"),c.D.onSettingsImport.emit({keys:x})),!0}catch(e){return console.error("Failed to import settings:",e),!1}finally{i&&z--}},setFolderIcon:(e,t)=>{r().updateSetting("folderIcons",{...r().folderIcons,[e]:t})},removeFolderIcon:e=>{let{[e]:t,...o}=r().folderIcons;r().updateSetting("folderIcons",o)},setSharedCalendarColor:(e,t)=>{r().updateSetting("sharedCalendarColors",{...r().sharedCalendarColors,[e]:t})},removeSharedCalendarColor:e=>{let{[e]:t,...o}=r().sharedCalendarColors;r().updateSetting("sharedCalendarColors",o)},addTrustedSender:e=>{let o=e.trim(),n=o.match(/^(.+?)\s*<([^>]+)>$/),a=(n?n[2]:o).toLowerCase().trim(),i=r().trustedSenders;i.includes(a)||(t({trustedSenders:[...i,a]}),c.D.onTrustedSenderChange.emit({email:a,trusted:!0}))},removeTrustedSender:e=>{let o=e.trim(),n=o.match(/^(.+?)\s*<([^>]+)>$/),a=(n?n[2]:o).toLowerCase().trim(),i=r().trustedSenders;i.includes(a)&&(t({trustedSenders:i.filter(e=>e!==a)}),c.D.onTrustedSenderChange.emit({email:a,trusted:!1}))},isSenderTrusted:e=>{let t=e.trim(),o=t.match(/^(.+?)\s*<([^>]+)>$/),n=(o?o[2]:t).toLowerCase().trim();return r().trustedSenders.includes(n)},addKeyword:e=>{let o=r().emailKeywords;o.some(t=>t.id===e.id)||t({emailKeywords:[...o,e]})},updateKeyword:(e,o)=>{t({emailKeywords:r().emailKeywords.map(t=>t.id===e?{...t,...o}:t)})},renameKeyword:(e,o)=>{t({emailKeywords:r().emailKeywords.map(t=>t.id===e?o:t)})},removeKeyword:e=>{t({emailKeywords:r().emailKeywords.filter(t=>t.id!==e)})},reorderKeywords:e=>{t({emailKeywords:e})},getKeywordById:e=>r().emailKeywords.find(t=>t.id===e),addSidebarApp:e=>{let t=r().sidebarApps;t.some(t=>t.id===e.id)||r().updateSetting("sidebarApps",[...t,e])},updateSidebarApp:(e,t)=>{r().updateSetting("sidebarApps",r().sidebarApps.map(r=>r.id===e?{...r,...t}:r))},removeSidebarApp:e=>{r().updateSetting("sidebarApps",r().sidebarApps.filter(t=>t.id!==e))},reorderSidebarApps:e=>{r().updateSetting("sidebarApps",e)},enableSync:(e,t)=>{let o=(0,f.e)(e,t);H===o?L("Settings sync stays off for",e,"- its settings could not be loaded"):(Z(o),B=e,$=t,N=!0,O("Settings sync enabled for",e),_&&(_=!1,r().settingsSyncDisabled||U?.()))},flushSync:async()=>{let e=en();e&&await em(e)},disableSync:()=>{N=!1,B=null,$=null,en(),O("Settings sync disabled")},loadFromServer:async(t,n)=>{let a=(0,f.e)(t,n),i=Y(),l=null!==i&&i!==a,d=()=>(l&&(o(),Z(null),H=a),D(),!1);H=null;try{O("Loading settings from server for",t),_=!1;let i=await (0,s.i)("/api/settings",{headers:{"x-settings-username":t,"x-settings-server":n}});if(!i.ok){let e=await i.json().catch(()=>({}));return O("Settings fetch failed:",e.error||`status ${i.status}`),d()}let{settings:u}=await i.json(),{useAccountStore:f}=await e.A(383644),p=f.getState().accounts.length>1;if(!u)return O("No server settings found yet"),l&&o({keepCrossAccountViews:p}),Z(a),D(),_=ed(null,a)||et(),!1;if(u&&"object"==typeof u)return l&&o({keepCrossAccountViews:p}),P=!0,r().importSettings(JSON.stringify(u),{serverAccountId:a,keepCrossAccountViews:p,subscriptionOwner:(0,m.I)(n,t)}),P=!1,Z(a),D(),_=ed(u,a)||et(),O("Settings loaded from server successfully"),c.D.onSettingsSync.emit({direction:"pulled"}),!0;return!1}catch(e){return M("Failed to load settings from server:",e),P=!1,d()}finally{for(let e of(G.add(a),K))e(a)}},forgetSyncedSettings:()=>{null===Y()||r().settingsSyncDisabled||(o(),Z(null))}}},{name:"settings-storage",version:15,migrate:function(e,t){let r;return t<2&&e.listDensity&&(e.density=e.listDensity,delete e.listDensity),r=e.sendDelaySeconds,eh.includes(r)||(e.sendDelaySeconds=0),t<3&&"string"!=typeof e.protocolOpenMode&&"string"==typeof e.protocolMailtoOpenMode&&(e.protocolOpenMode=e.protocolMailtoOpenMode),delete e.protocolMailtoOpenMode,delete e.plainLanguage,delete e.autoSaveDraftInterval,t<4&&(e.dateFormat="smart"),(t<5||!R(e.allMailFolderIds))&&(e.allMailFolderIds={}),t<7&&(e.enableCrossUnreadView||e.enableCrossStarredView||e.enableCrossAllView?e.unifiedCrossAccount=!0:e.enableAllMailView&&(e.enableUnifiedMailbox=!0,e.enableCrossAllView=!0,e.unifiedCrossAccount=!1),delete e.enableAllMailView,"boolean"!=typeof e.unifiedCrossAccount&&(e.unifiedCrossAccount=!1),e.includeGroupInUnified=!0),(t<6||!R(e.preferredIdentityIds))&&(e.preferredIdentityIds={}),eH(e),eW(e),eV(e),eG(e),eK(e),ez(e),(t<8||!Array.isArray(e.explicitSettings))&&(e.explicitSettings=eF(e)),eU(e),e},onRehydrateStorage:()=>e=>{e&&(R(e.allMailFolderIds)||(e.allMailFolderIds={}),R(e.preferredIdentityIds)||(e.preferredIdentityIds={}),e.proofreadingPlugins=ev(e.proofreadingPlugins),e.proofreadingNoticeSeen=ev(e.proofreadingNoticeSeen),eS(e.writingLanguage)||(e.writingLanguage="auto"),R(e.hiddenSharedMailAccounts)||(e.hiddenSharedMailAccounts={}),Array.isArray(e.explicitSettings)||(e.explicitSettings=[]),eV(e),e.notificationMutes=(0,l.g)(e.notificationMutes),e.messageListOrder=(0,g.k)(e.messageListOrder),"inbox"!==e.messageListOrderScope&&"all"!==e.messageListOrderScope&&(e.messageListOrderScope="inbox"),(0,b.f)(e.searchDefaultScope)||(e.searchDefaultScope="all"),eY(e),eZ(e.density,e.interfaceLayout),eJ(e.interfaceLayout,e.density))}}));function ez(e){delete e.attachmentPosition,Array.isArray(e.explicitSettings)&&(e.explicitSettings=e.explicitSettings.filter(e=>"attachmentPosition"!==e))}function eU(e){"boolean"==typeof e.animationsEnabled&&(void 0===e.reduceMotion&&(e.reduceMotion=e.animationsEnabled?"system":"on"),delete e.animationsEnabled),Array.isArray(e.explicitSettings)&&(e.explicitSettings=e.explicitSettings.map(e=>"animationsEnabled"===e?"reduceMotion":e))}function eH(e){"default"!==e.notificationSoundChoice||Array.isArray(e.explicitSettings)&&e.explicitSettings.includes("notificationSoundChoice")||(e.notificationSoundChoice="involved")}function eW(e){!0!==e.tintListRowsByTag||Array.isArray(e.explicitSettings)&&e.explicitSettings.includes("tintListRowsByTag")||(e.tintListRowsByTag=!1)}function eG(e){0!==e.sendDelaySeconds||Array.isArray(e.explicitSettings)&&e.explicitSettings.includes("sendDelaySeconds")||(e.sendDelaySeconds=5)}function eV(e){!1!==e.enableCalendarTasks||Array.isArray(e.explicitSettings)&&e.explicitSettings.includes("enableCalendarTasks")||(e.enableCalendarTasks=!0)}function eK(e){!("trustedSendersAddressBook"in e)||!0===e.trustedSendersAddressBook||Array.isArray(e.explicitSettings)&&e.explicitSettings.includes("trustedSendersAddressBook")&&"boolean"==typeof e.trustedSendersAddressBook||(e.trustedSendersAddressBook=!0)}let eq=new Set(["contrast","reduceTransparency","underlineLinks","appFont","lineSpacing","letterSpacing","wordSpacing","paragraphSpacing","readingWidth","reduceMotion","focusRing","focusAlwaysVisible","largeTargets","largeCursor","nativeScrollbars","simpleMode","unreadCountStyle","colorBlindPalette","showColorNames"]);function eY(e){"u">typeof document&&(0,y.V)(document.documentElement,e)}function eZ(e,t){if("u"<typeof document)return;let o=document.documentElement;for(let[n,a]of Object.entries((0,r.f)(e,t)))o.style.setProperty(n,a)}function eJ(e,t){"u">typeof document&&(document.documentElement.dataset.interfaceLayout=e,eZ(t,e))}e_.subscribe((e,t)=>{e.emailKeywords!==t.emailKeywords&&JSON.stringify(e.emailKeywords)!==JSON.stringify(t.emailKeywords)&&c.D.onKeywordChange.emit({keywords:e.emailKeywords.map(e=>({id:e.id,name:e.label,color:e.color}))})});{let t=e_.getState();eY(t),eZ(t.density,t.interfaceLayout),eJ(t.interfaceLayout,t.density);let r=e=>e.emailNotificationsEnabled&&e.emailNotificationSound&&!e.doNotDisturb,o=r(t);(0,d.o)({sound:o}),e_.subscribe(e=>{let t=r(e);t!==o&&(o=t,(0,d.o)({sound:t}))}),i.M.subscribe((e,t)=>{e.policy!==t.policy&&e_.getState().applyAdminPolicy(t.policy)});let l=Object.keys(eO).filter(e=>"explicitSettings"!==e&&!ew.has(e));e_.subscribe((e,t)=>{if(P||z>0||!e_.persist.hasHydrated())return;let r=l.filter(r=>e[r]!==t[r]);r.length>0&&ee(r)}),n.f.subscribe((e,t)=>{!(P||z>0)&&e.themeChosen&&(e.theme!==t.theme||e.themeChosen!==t.themeChosen)&&ee(["theme","themeChosen"])}),a.f.subscribe((e,t)=>{P||z>0||e.locale===t.locale||ee(["locale"])});let s=()=>{N&&B&&$&&!P&&(F={username:B,serverUrl:$,settings:JSON.parse(e_.getState().exportSettings({forSync:!0,subscriptionOwner:(0,m.I)($,B)})),dirty:{...Q().dirty}},eo(),j&&clearTimeout(j),j=setTimeout(async()=>{j=null;let e=en();if(e)try{await em(e)}catch(e){M("Settings sync error:",e)}},2e3))};U=s;let c=()=>{let e=en();e&&em(e,0,{keepalive:!0})};window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",()=>{"hidden"===document.visibilityState&&c()}),window.addEventListener("online",()=>{!e_.getState().settingsSyncDisabled&&et()&&(s(),e_.getState().flushSync())});let u=e_.getState().settingsSyncDisabled;e_.subscribe(()=>{let e=e_.getState().settingsSyncDisabled,t=e!==u;u=e,(!e||t)&&s()}),n.f.subscribe(s),a.f.subscribe(s),ei=()=>{e_.getState().settingsSyncDisabled||s()},eu=()=>{e_.getState().settingsSyncDisabled||s()},e.A(353132).catch(()=>{}),e.A(497214).catch(()=>{})}function eQ(e){let{messageListOrder:t,messageListOrderScope:r}=e_.getState();return(0,g.G)(t,r,e)}},669922,384641,286043,e=>{var t=e.i(768834),r=e.i(579473);let o="plugin-code",n="theme-css",a="theme-skin",i="previews",l="file-plugin";function s(){return new Promise((e,t)=>{let r=indexedDB.open("bulwark-plugins",3);r.onupgradeneeded=()=>{let e=r.result;e.objectStoreNames.contains(o)||e.createObjectStore(o),e.objectStoreNames.contains(n)||e.createObjectStore(n),e.objectStoreNames.contains(a)||e.createObjectStore(a),e.objectStoreNames.contains(i)||e.createObjectStore(i),e.objectStoreNames.contains(l)||e.createObjectStore(l)},r.onsuccess=()=>{let t=r.result;t.onversionchange=()=>t.close(),e(t)},r.onerror=()=>t(r.error),r.onblocked=()=>t(Error("Plugin storage database is blocked by another open tab. Close other Bulwark tabs and try again."))})}async function d(e,t,r){let o=await s();return new Promise((n,a)=>{let i=o.transaction(e,"readwrite");i.objectStore(e).put(r,t),i.oncomplete=()=>{o.close(),n()},i.onerror=()=>{o.close(),a(i.error)}})}async function c(e,t){let r=await s();return new Promise((o,n)=>{let a=r.transaction(e,"readonly"),i=a.objectStore(e).get(t);i.onsuccess=()=>o(i.result??null),i.onerror=()=>n(i.error),a.oncomplete=()=>r.close(),a.onerror=()=>r.close()})}async function u(e){let t=await s();return new Promise((r,o)=>{let n=t.transaction(e,"readonly"),a=n.objectStore(e).getAllKeys();a.onsuccess=()=>r((a.result??[]).map(String)),a.onerror=()=>o(a.error),n.oncomplete=()=>t.close(),n.onerror=()=>t.close()})}async function f(e,t){let r=await s();return new Promise((o,n)=>{let a=r.transaction(e,"readwrite");a.objectStore(e).delete(t),a.oncomplete=()=>{r.close(),o()},a.onerror=()=>{r.close(),n(a.error)}})}async function m(e){let t=await s();return new Promise((r,o)=>{let n=t.transaction(e,"readwrite");n.objectStore(e).clear(),n.oncomplete=()=>{t.close(),r()},n.onerror=()=>{t.close(),o(n.error)}})}let p={async saveCode(e,t){await d(o,e,t)},getCode:async e=>c(o,e),codeIds:async()=>u(o),async deleteCode(e){await f(o,e)},async saveThemeCSS(e,t){await d(n,e,t)},getThemeCSS:async e=>c(n,e),async deleteThemeCSS(e){await f(n,e)},async saveThemeSkin(e,t){await d(a,e,t)},getThemeSkin:async e=>c(a,e),async deleteThemeSkin(e){await f(a,e)},async savePreview(e,t){await d(i,e,t)},getPreview:async e=>c(i,e),async deletePreview(e){await f(i,e)}};e.s(["f",0,{async saveFile(e,t){await d(l,e,t)},getFile:async e=>c(l,e),async deleteFile(e){await f(l,e)},async clearFiles(){await m(l)}},"L",0,p],384641);var g=e.i(526515);let b=[{id:"builtin-flat-fields",name:"Flat fields",version:"1.0.0",author:"Built-in",description:"The bulwarkmail.org design system: neutral grounds, square panes, Hanken Grotesk, and raspberry only as a small mark",css:`
:root {
  --color-background: #ffffff;
  --color-foreground: #18181b;
  --color-card: #ffffff;
  --color-card-foreground: #18181b;
  --color-popover: #ffffff;
  --color-popover-foreground: #18181b;
  --color-secondary: #f4f4f5;
  --color-secondary-foreground: #18181b;
  --color-muted: #f4f4f5;
  --color-muted-foreground: #56565d;
  --color-accent: #f4f4f5;
  --color-accent-foreground: #18181b;
  --color-sidebar: #ffffff;
  --color-sidebar-foreground: #18181b;
  --color-sidebar-border: #dddde1;
  --color-sidebar-accent: #f4f4f5;
  --color-sidebar-accent-foreground: #18181b;
  --color-selection: #f4f4f5;
  --color-selection-foreground: #18181b;
  --color-border: #dddde1;
  --color-input: #7f7f87;
  --color-ring: #c01f46;
  --color-primary: #db2d54;
  --color-primary-foreground: #ffffff;
  --color-unread: #db2d54;
  --color-unread-wash: color-mix(in srgb, #db2d54 6%, #ffffff);
  --color-destructive: #b42318;
  --color-destructive-foreground: #ffffff;
  --color-success: #17784a;
  --color-success-foreground: #ffffff;
  --color-warning: #8a5d00;
  --color-warning-foreground: #ffffff;
  --color-info: #1f5f9e;
  --color-info-foreground: #ffffff;
  --color-chart-1: #1f5f9e;
  --color-chart-2: #17784a;
  --color-chart-3: #8a5d00;
  --color-chart-4: #db2d54;
  --color-chart-5: #6b5bb5;

  /* Square system: 0 on surfaces, 2px on things you press or type into. */
  --radius-xs: 0px;
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 2px;
  --radius-xl: 2px;
  --radius-2xl: 2px;
  --radius-3xl: 2px;
  --radius-4xl: 2px;

  /* No frosted glass. */
  --blur-xs: 0px;
  --blur-sm: 0px;
  --blur-md: 0px;
  --blur-lg: 0px;
  --blur-xl: 0px;
  --blur-2xl: 0px;
  --blur-3xl: 0px;
}

.dark {
  --color-background: #131315;
  --color-foreground: #f2f2f3;
  --color-card: #1f1f22;
  --color-card-foreground: #f2f2f3;
  --color-popover: #1f1f22;
  --color-popover-foreground: #f2f2f3;
  --color-secondary: #1f1f22;
  --color-secondary-foreground: #f2f2f3;
  --color-muted: #1f1f22;
  --color-muted-foreground: #ababb2;
  /* A step above popover and muted so hover and selection stay visible
     inside menus and on the quiet surface. */
  --color-accent: #2a2a2e;
  --color-accent-foreground: #f2f2f3;
  --color-sidebar: #131315;
  --color-sidebar-foreground: #f2f2f3;
  --color-sidebar-border: #36363b;
  --color-sidebar-accent: #2a2a2e;
  --color-sidebar-accent-foreground: #f2f2f3;
  --color-selection: #2a2a2e;
  --color-selection-foreground: #f2f2f3;
  --color-border: #36363b;
  --color-input: #85858d;
  --color-ring: #ff91a8;
  --color-primary: #db2d54;
  --color-primary-foreground: #ffffff;
  --color-unread: #f0486f;
  --color-unread-wash: color-mix(in srgb, #f0486f 11%, #131315);
  --color-destructive: #ff9b8f;
  --color-destructive-foreground: #131315;
  --color-success: #4cc38a;
  --color-success-foreground: #131315;
  --color-warning: #e2b341;
  --color-warning-foreground: #131315;
  --color-info: #7fb2e8;
  --color-info-foreground: #131315;
  --color-chart-1: #7fb2e8;
  --color-chart-2: #4cc38a;
  --color-chart-3: #e2b341;
  --color-chart-4: #f0486f;
  --color-chart-5: #a99bf0;
}
`,skin:`
/* ── Type: Hanken Grotesk (self-hosted by the root layout as --font-hanken,
   defined on <body>), then a system stack for scripts it does not cover. ── */
body[data-theme-skin="builtin-flat-fields"] {
  font-family: var(--font-hanken, "Hanken Grotesk"), ui-sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "Noto Sans Thai", "Leelawadee UI", sans-serif;
}

body[data-theme-skin="builtin-flat-fields"] .font-bold {
  font-weight: 600;
}

/* Uppercase letter-spaced labels read as sentence-style small text. */
body[data-theme-skin="builtin-flat-fields"] .uppercase:not(.font-mono) {
  text-transform: none;
  letter-spacing: 0;
}

/* ── Flat: no shadows, glows or frosted glass. Clearing --tw-shadow keeps
   Tailwind's ring utilities working. ── */
body[data-theme-skin="builtin-flat-fields"] [class*="shadow"] {
  --tw-shadow: 0 0 #0000;
}

body[data-theme-skin="builtin-flat-fields"] [class*="backdrop-blur"] {
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
}

/* Grounds are flat; the sign-in page and empty states use soft washes. The
   image viewer's dark scrim keeps its controls legible and stays. */
body[data-theme-skin="builtin-flat-fields"] [class*="bg-gradient-to-"]:not([class*="from-black"]) {
  background-image: none;
}

/* ── Square. \`rounded\` and \`rounded-full\` compile to literals, not radius
   tokens. Pills, badges, toggles, counters, the compose button, swatches and
   status dots become 2px shapes; spinners stay round. ── */
body[data-theme-skin="builtin-flat-fields"] .rounded,
body[data-theme-skin="builtin-flat-fields"] .rounded-full:not(.animate-spin) {
  border-radius: var(--radius-md);
}

/* Calendar event chips (a colour edge on the left, \`rounded-r\`) are tiles. */
body[data-theme-skin="builtin-flat-fields"] :is(.rounded-r, .rounded-t) {
  border-radius: 0;
}

/* Avatars are images, and images are square. Initials without a photo sit on
   the quiet surface instead of a random saturated hue (which also fails
   contrast with white initials for yellows and greens). The hue is an inline
   style, hence the one !important. */
body[data-theme-skin="builtin-flat-fields"] .rounded-full.overflow-hidden.text-white[title] {
  border-radius: 0;
}

body[data-theme-skin="builtin-flat-fields"] .rounded-full.overflow-hidden.text-white[title]:not(:has(img)) {
  background-color: var(--color-muted) !important;
  color: var(--color-muted-foreground);
  font-weight: 500;
  box-shadow: inset 0 0 0 1px var(--color-border);
}

/* Icons take the text colour; the brand is reserved for marks. */
/* Folder role icons take the text colour; tag icons (filled with the tag's
   own colour) are user data and keep it. */
body[data-theme-skin="builtin-flat-fields"] [data-testid="folder-row"] svg:not([fill="currentColor"]) {
  color: var(--color-muted-foreground);
}

body[data-theme-skin="builtin-flat-fields"] [data-testid="folder-row"][data-selected="true"] svg:not([fill="currentColor"]) {
  color: var(--color-foreground);
}

/* Brand tints (bg-primary/5 to /20) are areas of pink: use the neutral
   selection grey. Strong fills (/40 and up) are progress and marks. */
body[data-theme-skin="builtin-flat-fields"] :is([class~="bg-primary/5"], [class~="bg-primary/10"], [class~="bg-primary/15"], [class~="bg-primary/20"], [class~="dark:bg-primary/10"]),
body[data-theme-skin="builtin-flat-fields"] :is([class~="hover:bg-primary/5"], [class~="hover:bg-primary/10"], [class~="hover:bg-primary/15"], [class~="hover:bg-primary/20"], [class~="hover:bg-primary/30"]):hover {
  background-color: var(--color-accent);
}

/* Checked and dragged rows: grey, without the pink ring. */
body[data-theme-skin="builtin-flat-fields"] :is([class~="ring-primary/20"], [class~="ring-primary/30"]) {
  --tw-ring-shadow: 0 0 #0000;
}

/* Layers: dialogs, menus and toasts are square, separated by a 1px border. */
body[data-theme-skin="builtin-flat-fields"] [role="dialog"],
body[data-theme-skin="builtin-flat-fields"] [role="alertdialog"],
body[data-theme-skin="builtin-flat-fields"] [role="menu"],
body[data-theme-skin="builtin-flat-fields"] [role="listbox"],
body[data-theme-skin="builtin-flat-fields"] .toast-item {
  border-radius: 0;
}

body[data-theme-skin="builtin-flat-fields"] [role="alertdialog"],
body[data-theme-skin="builtin-flat-fields"] [role="menu"],
body[data-theme-skin="builtin-flat-fields"] .toast-item {
  border: 1px solid var(--color-input);
}

body[data-theme-skin="builtin-flat-fields"] .toast-item {
  background-color: var(--color-popover);
}

/* ── Panes sit on the page ground, split by 1px rules, so grey only ever
   means "selected" or "under the pointer". ── */
body[data-theme-skin="builtin-flat-fields"] .w-14.bg-secondary,
body[data-theme-skin="builtin-flat-fields"] .border-e.bg-secondary,
body[data-theme-skin="builtin-flat-fields"] .flex-col.h-full.bg-secondary {
  background-color: var(--color-background);
}

/* ── Selection is grey plus a 3px brand edge: the theme widens the folder
   row's start border and colours it, the rows that aren't selected keep a
   transparent one so the names don't shift. ── */
body[data-theme-skin="builtin-flat-fields"] [data-tour="sidebar"] [data-testid="folder-row"] {
  border-inline-start-color: transparent;
}

body[data-theme-skin="builtin-flat-fields"] [data-tour="sidebar"] [data-selected="true"] {
  border-inline-start-width: 3px;
  border-inline-start-color: var(--color-primary);
  font-weight: 500;
}

/* Side panes (settings, contacts, files, calendar) mark their active item
   only with bg-accent; give it the same edge. */
body[data-theme-skin="builtin-flat-fields"] :is(.border-e.bg-secondary, .flex-col.h-full.bg-secondary) button.bg-accent {
  box-shadow: inset 3px 0 0 var(--color-primary);
}

body[data-theme-skin="builtin-flat-fields"] [data-tour="contacts-list"] .bg-selection {
  box-shadow: inset 3px 0 0 var(--color-primary);
}

body[data-theme-skin="builtin-flat-fields"] [data-tour^="nav-"][aria-current="page"] {
  background-color: var(--color-accent);
  color: var(--color-accent-foreground);
  box-shadow: inset 3px 0 0 var(--color-primary);
}

/* The calendar's "now" line is drawn with the destructive colour; it marks
   time, not danger, so it takes the brand. */
body[data-theme-skin="builtin-flat-fields"] .pointer-events-none > .flex.items-center > .bg-destructive:is(.h-px, .w-2) {
  background-color: var(--color-primary);
}

/* Unread counters are brand marks, not alarm red. */
body[data-theme-skin="builtin-flat-fields"] [data-tour^="nav-"] .bg-red-500 {
  background-color: var(--color-primary);
  color: var(--color-primary-foreground);
}

body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] [aria-current="true"]::before {
  content: "";
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  width: 3px;
  background-color: var(--color-primary);
  z-index: 1;
  pointer-events: none;
}

/* The reading pane is one white ground; no grey band below short messages. */
body[data-theme-skin="builtin-flat-fields"] [data-tour="email-viewer"] .overflow-auto.bg-muted\\/30 {
  background-color: var(--color-background);
}

/* Toggles: off is an outlined control with a grey thumb, on is a brand
   track with a white thumb. */
body[data-theme-skin="builtin-flat-fields"] [role="switch"][aria-checked="false"] {
  background-color: var(--color-background);
  box-shadow: inset 0 0 0 1px var(--color-input);
}

body[data-theme-skin="builtin-flat-fields"] [role="switch"][aria-checked="false"] > span {
  background-color: var(--color-input);
}

/* Things you type into or press carry the control border (3:1 on every
   ground), also the fields that ask for border-border. This rule is not in
   a layer, so it outranks the border utilities (the app's own
   \`* { border-color }\` default sits in @layer base and doesn't). Borderless
   fields are unaffected because they have no border width. */
body[data-theme-skin="builtin-flat-fields"] :is(input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), select, textarea, .border-input) {
  border-color: var(--color-input);
}

/* ...except a field that holds an error: it keeps the error colour its
   page gives it (aria-invalid, border-destructive or a red border). */
body[data-theme-skin="builtin-flat-fields"] :is(input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), select, textarea, .border-input):is([aria-invalid="true"], .border-destructive, [class*="border-red-"]) {
  border-color: var(--color-destructive);
}

body[data-theme-skin="builtin-flat-fields"] :is(input[type="checkbox"], input[type="radio"]) {
  accent-color: var(--color-primary);
}

/* Unread has to read at a glance: a faint brand wash on the row, a brand bar
   beside the avatar and a heavy weight. Hanken Grotesk's 600 sits too close
   to the 500 of read senders to tell apart, so unread sender and subject go
   to 700 and read senders drop to 400. */
body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] [data-unread="true"].bg-accent\\/30:not(:hover):not(:is([aria-current="true"], [aria-selected="true"])) {
  background-color: var(--color-unread-wash);
}

body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] [data-unread="true"] .text-foreground:is(.font-semibold, .font-bold) {
  font-weight: 700;
}

body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] [data-unread="false"] .font-medium:is([class~="text-foreground/80"], .text-muted-foreground) {
  font-weight: 400;
}

/* Near-white 400 on the dark ground still reads as heavy, so read subjects
   also step down from the text colour. */
body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] [data-unread="false"] :is([class~="text-foreground/80"], [class~="text-foreground/90"]) {
  color: color-mix(in srgb, var(--color-foreground) 75%, var(--color-background));
}

body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] svg.fill-unread {
  color: transparent;
  fill: transparent;
  background-color: var(--color-unread);
  width: 7px;
  height: 7px;
}

/* Rows without an avatar keep a square, clear of the 3px selection edge. */
body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] div.absolute:has(> svg.fill-unread) {
  inset-inline-start: 6px;
}

/* Beside an avatar the app puts the dot on the avatar's edge, where it sits
   on the picture. Draw a bar the avatar's height against its left side. */
body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] div.absolute.top-1\\/2:has(> svg.fill-unread) {
  inset-block: 0;
  inset-inline-start: -3px;
  translate: none;
  transform: none;
  display: flex;
}

body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] div.absolute.top-1\\/2 > svg.fill-unread {
  width: 3px;
  height: 100%;
}

/* ── Raspberry is too light for text on grey: text uses the link colour. ── */
body[data-theme-skin="builtin-flat-fields"] .text-primary {
  color: var(--color-ring);
}

body[data-theme-skin="builtin-flat-fields"] .email-content a,
body[data-theme-skin="builtin-flat-fields"] .email-content-text a {
  color: var(--color-ring);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

/* ── Primary hover goes darker, never lighter or pinker. ── */
body[data-theme-skin="builtin-flat-fields"] .bg-primary:is(button, a):hover,
body[data-theme-skin="builtin-flat-fields"] [data-tour="compose-button"]:hover {
  background-color: color-mix(in srgb, var(--color-primary) 84%, #000);
}

/* Disabled is grey, not a faded pink. */
body[data-theme-skin="builtin-flat-fields"] button.bg-primary:disabled {
  background-color: var(--color-muted);
  color: var(--color-muted-foreground);
  opacity: 1;
}

/* A chosen option in a segmented control is filled with the text colour, as
   on the website's edition switch: a choice, not a call to action. */
body[data-theme-skin="builtin-flat-fields"] button[aria-pressed="true"].bg-primary,
body[data-theme-skin="builtin-flat-fields"] [role="radio"][aria-checked="true"].bg-primary,
body[data-theme-skin="builtin-flat-fields"] .flex.border.overflow-hidden > button.bg-primary {
  background-color: var(--color-foreground);
  color: var(--color-background);
}

/* The thread count stays a quiet label even when the thread has unread mail;
   the unread square already says so. */
body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] span.bg-primary.text-primary-foreground {
  background-color: var(--color-muted);
  color: var(--color-foreground);
  font-weight: 600;
}

/* ── Icons follow the website's rule: 1.5 stroke, square caps, mitred joins. ── */
body[data-theme-skin="builtin-flat-fields"] svg.tabler-icon {
  stroke-width: 1.5;
  stroke-linecap: square;
  stroke-linejoin: miter;
}

/* ── Focus: one ring, 2px solid, 2px off the element. ── */
body[data-theme-skin="builtin-flat-fields"] :focus-visible {
  outline: 2px solid var(--color-ring);
  outline-offset: 2px;
  --tw-ring-shadow: 0 0 #0000;
  --tw-ring-offset-shadow: 0 0 #0000;
}

/* Text fields keep focus for as long as someone types, so the ring hugs the
   field instead of floating a box around it. */
body[data-theme-skin="builtin-flat-fields"] :is(input, textarea, select, [contenteditable="true"]):focus-visible {
  outline-offset: 0;
}
`,variants:["light","dark"],enabled:!0,builtIn:!0},{id:"builtin-qui",name:"Qui",version:"1.0.0",author:"Built-in",description:"Clean, modern zinc-and-blue theme inspired by autobrr/qui",css:`
:root {
  --color-border: #e4e4e7;
  --color-input: #e4e4e7;
  --color-ring: #3b82f6;
  --color-background: #ffffff;
  --color-foreground: #09090b;
  --color-primary: #185aea;
  --color-primary-foreground: #ffffff;
  --color-secondary: #f4f4f5;
  --color-secondary-foreground: #18181b;
  --color-muted: #f4f4f5;
  --color-muted-foreground: #66666e;
  --color-accent: #dbeafe;
  --color-accent-foreground: #1d4ed8;
  --color-destructive: #dc2626;
  --color-destructive-foreground: #ffffff;
  --color-popover: #ffffff;
  --color-popover-foreground: #09090b;
  --color-sidebar: #fafafa;
  --color-sidebar-foreground: #09090b;
  --color-sidebar-border: #e4e4e7;
  --color-sidebar-accent: #f4f4f5;
  --color-sidebar-accent-foreground: #18181b;
  --color-card: #ffffff;
  --color-card-foreground: #09090b;
  --color-success: #22c55e;
  --color-success-foreground: #ffffff;
  --color-warning: #eab308;
  --color-warning-foreground: #ffffff;
  --color-info: #3b82f6;
  --color-info-foreground: #ffffff;
  --color-selection: #dbeafe;
  --color-selection-foreground: #1d4ed8;
  --color-unread: #3b82f6;
  --color-chart-1: #3b82f6;
  --color-chart-2: #22c55e;
  --color-chart-3: #f59e0b;
  --color-chart-4: #ef4444;
  --color-chart-5: #8b5cf6;
}
.dark {
  --color-border: #27272a;
  --color-input: #27272a;
  --color-ring: #3b82f6;
  --color-background: #09090b;
  --color-foreground: #fafafa;
  --color-primary: #4f8ff7;
  --color-primary-foreground: #09090b;
  --color-secondary: #18181b;
  --color-secondary-foreground: #fafafa;
  --color-muted: #18181b;
  --color-muted-foreground: #a1a1aa;
  --color-accent: #172554;
  --color-accent-foreground: #93c5fd;
  --color-destructive: #ef4444;
  --color-destructive-foreground: #09090b;
  --color-popover: #18181b;
  --color-popover-foreground: #fafafa;
  --color-sidebar: #09090b;
  --color-sidebar-foreground: #fafafa;
  --color-sidebar-border: #27272a;
  --color-sidebar-accent: #18181b;
  --color-sidebar-accent-foreground: #fafafa;
  --color-card: #141414;
  --color-card-foreground: #fafafa;
  --color-success: #16a34a;
  --color-success-foreground: #ffffff;
  --color-warning: #ca8a04;
  --color-warning-foreground: #ffffff;
  --color-info: #60a5fa;
  --color-info-foreground: #ffffff;
  --color-selection: rgba(59, 130, 246, 0.25);
  --color-selection-foreground: #93c5fd;
  --color-unread: #60a5fa;
  --color-chart-1: #60a5fa;
  --color-chart-2: #4ade80;
  --color-chart-3: #fbbf24;
  --color-chart-4: #f87171;
  --color-chart-5: #a78bfa;
}`,variants:["light","dark"],enabled:!0,builtIn:!0},{id:"builtin-nord",name:"Nord",version:"1.0.0",author:"Built-in",description:"Arctic, north-bluish color palette inspired by nordtheme.com",css:`
:root {
  --color-border: #d8dee9;
  --color-input: #d8dee9;
  --color-ring: #5e81ac;
  --color-background: #eceff4;
  --color-foreground: #2e3440;
  --color-primary: #476489;
  --color-primary-foreground: #eceff4;
  --color-secondary: #e5e9f0;
  --color-secondary-foreground: #2e3440;
  --color-muted: #d8dee9;
  --color-muted-foreground: #4c566a;
  --color-accent: #d3deeb;
  --color-accent-foreground: #2e3440;
  --color-destructive: #b24852;
  --color-destructive-foreground: #eceff4;
  --color-popover: #eceff4;
  --color-popover-foreground: #2e3440;
  --color-sidebar: #e5e9f0;
  --color-sidebar-foreground: #2e3440;
  --color-sidebar-border: #d8dee9;
  --color-sidebar-accent: #d8dee9;
  --color-sidebar-accent-foreground: #2e3440;
  --color-card: #eceff4;
  --color-card-foreground: #2e3440;
  --color-success: #a3be8c;
  --color-success-foreground: #2e3440;
  --color-warning: #ebcb8b;
  --color-warning-foreground: #2e3440;
  --color-info: #81a1c1;
  --color-info-foreground: #eceff4;
  --color-selection: #d8dee9;
  --color-selection-foreground: #456285;
  --color-unread: #5e81ac;
  --color-chart-1: #5e81ac;
  --color-chart-2: #a3be8c;
  --color-chart-3: #ebcb8b;
  --color-chart-4: #bf616a;
  --color-chart-5: #b48ead;
}
.dark {
  --color-border: #3b4252;
  --color-input: #3b4252;
  --color-ring: #88c0d0;
  --color-background: #2e3440;
  --color-foreground: #eceff4;
  --color-primary: #a6d1dd;
  --color-primary-foreground: #2e3440;
  --color-secondary: #3b4252;
  --color-secondary-foreground: #eceff4;
  --color-muted: #3b4252;
  --color-muted-foreground: #d8dee9;
  --color-accent: #434c5e;
  --color-accent-foreground: #93c6d4;
  --color-destructive: #d08b91;
  --color-destructive-foreground: #2e3440;
  --color-popover: #3b4252;
  --color-popover-foreground: #eceff4;
  --color-sidebar: #2e3440;
  --color-sidebar-foreground: #eceff4;
  --color-sidebar-border: #3b4252;
  --color-sidebar-accent: #3b4252;
  --color-sidebar-accent-foreground: #eceff4;
  --color-card: #3b4252;
  --color-card-foreground: #eceff4;
  --color-success: #a3be8c;
  --color-success-foreground: #2e3440;
  --color-warning: #ebcb8b;
  --color-warning-foreground: #2e3440;
  --color-info: #88c0d0;
  --color-info-foreground: #2e3440;
  --color-selection: rgba(136, 192, 208, 0.2);
  --color-selection-foreground: #98c9d6;
  --color-unread: #88c0d0;
  --color-chart-1: #88c0d0;
  --color-chart-2: #a3be8c;
  --color-chart-3: #ebcb8b;
  --color-chart-4: #bf616a;
  --color-chart-5: #b48ead;
}`,variants:["light","dark"],enabled:!0,builtIn:!0},{id:"builtin-catppuccin",name:"Catppuccin",version:"1.0.0",author:"Built-in",description:"Soothing pastel theme with Latte (light) and Mocha (dark) variants",css:`
:root {
  --color-border: #ccd0da;
  --color-input: #ccd0da;
  --color-ring: #8839ef;
  --color-background: #eff1f5;
  --color-foreground: #4c4f69;
  --color-primary: #7e28ee;
  --color-primary-foreground: #eff1f5;
  --color-secondary: #e6e9ef;
  --color-secondary-foreground: #4c4f69;
  --color-muted: #dce0e8;
  --color-muted-foreground: #5c5f77;
  --color-accent: #ecdffc;
  --color-accent-foreground: #6a1fd0;
  --color-destructive: #d20f39;
  --color-destructive-foreground: #eff1f5;
  --color-popover: #eff1f5;
  --color-popover-foreground: #4c4f69;
  --color-sidebar: #e6e9ef;
  --color-sidebar-foreground: #4c4f69;
  --color-sidebar-border: #ccd0da;
  --color-sidebar-accent: #dce0e8;
  --color-sidebar-accent-foreground: #4c4f69;
  --color-card: #eff1f5;
  --color-card-foreground: #4c4f69;
  --color-success: #40a02b;
  --color-success-foreground: #eff1f5;
  --color-warning: #df8e1d;
  --color-warning-foreground: #eff1f5;
  --color-info: #1e66f5;
  --color-info-foreground: #eff1f5;
  --color-selection: #dce0e8;
  --color-selection-foreground: #7e28ee;
  --color-unread: #8839ef;
  --color-chart-1: #8839ef;
  --color-chart-2: #40a02b;
  --color-chart-3: #df8e1d;
  --color-chart-4: #d20f39;
  --color-chart-5: #1e66f5;
}
.dark {
  --color-border: #45475a;
  --color-input: #45475a;
  --color-ring: #cba6f7;
  --color-background: #1e1e2e;
  --color-foreground: #cdd6f4;
  --color-primary: #cba6f7;
  --color-primary-foreground: #1e1e2e;
  --color-secondary: #313244;
  --color-secondary-foreground: #cdd6f4;
  --color-muted: #313244;
  --color-muted-foreground: #b3b9d0;
  --color-accent: #45475a;
  --color-accent-foreground: #ceabf7;
  --color-destructive: #f38ba8;
  --color-destructive-foreground: #1e1e2e;
  --color-popover: #313244;
  --color-popover-foreground: #cdd6f4;
  --color-sidebar: #1e1e2e;
  --color-sidebar-foreground: #cdd6f4;
  --color-sidebar-border: #45475a;
  --color-sidebar-accent: #313244;
  --color-sidebar-accent-foreground: #cdd6f4;
  --color-card: #313244;
  --color-card-foreground: #cdd6f4;
  --color-success: #a6e3a1;
  --color-success-foreground: #1e1e2e;
  --color-warning: #f9e2af;
  --color-warning-foreground: #1e1e2e;
  --color-info: #89b4fa;
  --color-info-foreground: #1e1e2e;
  --color-selection: rgba(203, 166, 247, 0.2);
  --color-selection-foreground: #cba6f7;
  --color-unread: #cba6f7;
  --color-chart-1: #cba6f7;
  --color-chart-2: #a6e3a1;
  --color-chart-3: #f9e2af;
  --color-chart-4: #f38ba8;
  --color-chart-5: #89b4fa;
}`,variants:["light","dark"],enabled:!0,builtIn:!0},{id:"builtin-solarized",name:"Solarized",version:"1.0.0",author:"Built-in",description:"Precision colors for machines and people by Ethan Schoonover",css:`
:root {
  --color-border: #eee8d5;
  --color-input: #eee8d5;
  --color-ring: #268bd2;
  --color-background: #fdf6e3;
  --color-foreground: #073642;
  --color-primary: #1d6ca2;
  --color-primary-foreground: #fdf6e3;
  --color-secondary: #eee8d5;
  --color-secondary-foreground: #586e75;
  --color-muted: #eee8d5;
  --color-muted-foreground: #4f6369;
  --color-accent: #e0e9e6;
  --color-accent-foreground: #1d6ca2;
  --color-destructive: #c9302c;
  --color-destructive-foreground: #fdf6e3;
  --color-popover: #fdf6e3;
  --color-popover-foreground: #073642;
  --color-sidebar: #eee8d5;
  --color-sidebar-foreground: #073642;
  --color-sidebar-border: #eee8d5;
  --color-sidebar-accent: #eee8d5;
  --color-sidebar-accent-foreground: #586e75;
  --color-card: #fdf6e3;
  --color-card-foreground: #073642;
  --color-success: #859900;
  --color-success-foreground: #fdf6e3;
  --color-warning: #b58900;
  --color-warning-foreground: #fdf6e3;
  --color-info: #268bd2;
  --color-info-foreground: #fdf6e3;
  --color-selection: #eee8d5;
  --color-selection-foreground: #1d6ca2;
  --color-unread: #268bd2;
  --color-chart-1: #268bd2;
  --color-chart-2: #859900;
  --color-chart-3: #b58900;
  --color-chart-4: #dc322f;
  --color-chart-5: #6c71c4;
}
.dark {
  --color-border: #073642;
  --color-input: #073642;
  --color-ring: #268bd2;
  --color-background: #002b36;
  --color-foreground: #aab7b7;
  --color-primary: #6ab5e8;
  --color-primary-foreground: #002b36;
  --color-secondary: #073642;
  --color-secondary-foreground: #93a1a1;
  --color-muted: #073642;
  --color-muted-foreground: #9aa7a7;
  --color-accent: #073642;
  --color-accent-foreground: #4aa1de;
  --color-destructive: #e56866;
  --color-destructive-foreground: #002b36;
  --color-popover: #073642;
  --color-popover-foreground: #aab7b7;
  --color-sidebar: #002b36;
  --color-sidebar-foreground: #aab7b7;
  --color-sidebar-border: #073642;
  --color-sidebar-accent: #073642;
  --color-sidebar-accent-foreground: #93a1a1;
  --color-card: #073642;
  --color-card-foreground: #aab7b7;
  --color-success: #859900;
  --color-success-foreground: #002b36;
  --color-warning: #b58900;
  --color-warning-foreground: #002b36;
  --color-info: #268bd2;
  --color-info-foreground: #002b36;
  --color-selection: rgba(38, 139, 210, 0.2);
  --color-selection-foreground: #60ace2;
  --color-unread: #268bd2;
  --color-chart-1: #268bd2;
  --color-chart-2: #859900;
  --color-chart-3: #b58900;
  --color-chart-4: #dc322f;
  --color-chart-5: #6c71c4;
}`,variants:["light","dark"],enabled:!0,builtIn:!0},{id:"builtin-roundcube-elastic",name:"Roundcube Elastic",version:"1.0.0",author:"Built-in",description:"Faithful recreation of Roundcube's Elastic skin - Roboto, the #37beff blue, and the dark task-menu rail",css:`
:root {
  --color-border: #dddddd;
  --color-input: #ced4da;
  --color-ring: #0b7dc1;
  --color-background: #ffffff;
  --color-foreground: #27353a;
  --color-primary: #006ca0;
  --color-primary-foreground: #ffffff;
  --color-secondary: #f4f4f4;
  --color-secondary-foreground: #27353a;
  --color-muted: #f4f4f4;
  --color-muted-foreground: #646768;
  --color-accent: #e6f6ff;
  --color-accent-foreground: #0070a8;
  --color-destructive: #e0201c;
  --color-destructive-foreground: #ffffff;
  --color-popover: #ffffff;
  --color-popover-foreground: #27353a;
  --color-sidebar: #ffffff;
  --color-sidebar-foreground: #27353a;
  --color-sidebar-border: #dddddd;
  --color-sidebar-accent: #ebf8ff;
  --color-sidebar-accent-foreground: #27353a;
  --color-card: #ffffff;
  --color-card-foreground: #27353a;
  --color-success: #41b849;
  --color-success-foreground: #ffffff;
  --color-warning: #ffd452;
  --color-warning-foreground: #27353a;
  --color-info: #37beff;
  --color-info-foreground: #ffffff;
  --color-selection: #ebf8ff;
  --color-selection-foreground: #27353a;
  --color-unread: #a37a00;
  --color-chart-1: #37beff;
  --color-chart-2: #41b849;
  --color-chart-3: #ffd452;
  --color-chart-4: #ff5552;
  --color-chart-5: #9b59b6;
  /* Elastic is a 14px Roboto skin with tighter list rows than Bulwark's default */
  --font-size-base: 14px;
  --list-item-height: 40px;
}
.dark {
  --color-border: #4d6066;
  --color-input: #4d6066;
  --color-ring: #37beff;
  --color-background: #21292c;
  --color-foreground: #ffffff;
  --color-primary: #37beff;
  --color-primary-foreground: #10181b;
  --color-secondary: #2c373a;
  --color-secondary-foreground: #ffffff;
  --color-muted: #2c373a;
  /* Roundcube keeps most text near the bright font colour, only true hints
     dim out. Bulwark applies muted-foreground far more widely, so brighten it
     toward @color-dark-font (#c5d1d3) to match Elastic's overall brightness. */
  --color-muted-foreground: #b3bec1;
  --color-accent: #374549;
  --color-accent-foreground: #37beff;
  --color-destructive: #ff5552;
  --color-destructive-foreground: #10181b;
  --color-popover: #161b1d;
  --color-popover-foreground: #ffffff;
  --color-sidebar: #21292c;
  --color-sidebar-foreground: #ffffff;
  --color-sidebar-border: #4d6066;
  --color-sidebar-accent: #374549;
  --color-sidebar-accent-foreground: #c5d1d3;
  --color-card: #1a2225;
  --color-card-foreground: #ffffff;
  --color-success: #41b849;
  --color-success-foreground: #ffffff;
  --color-warning: #ffd452;
  --color-warning-foreground: #21292c;
  --color-info: #37beff;
  --color-info-foreground: #ffffff;
  --color-selection: #374549;
  --color-selection-foreground: #37beff;
  --color-unread: #b88a00;
  --color-chart-1: #37beff;
  --color-chart-2: #41b849;
  --color-chart-3: #ffd452;
  --color-chart-4: #ff5552;
  --color-chart-5: #b48ead;
}`,skin:`
body[data-theme-skin="builtin-roundcube-elastic"] {
  font-family: Roboto, "Helvetica Neue", "Segoe UI", Arial, "Noto Sans", sans-serif;
}

/* ── Task menu (left navigation rail) ─────────────────────────── */
body[data-theme-skin="builtin-roundcube-elastic"] .w-14.bg-secondary {
  background-color: #2f3a3f !important;
  border-right: 1px solid rgba(0, 0, 0, 0.25) !important;
}
/* In dark mode the black hairline vanishes against the dark canvas - use a
   light one so the rail still reads as a distinct column. (.dark lives on
   <html>, so it must be an ancestor of the skinned <body>.) */
.dark body[data-theme-skin="builtin-roundcube-elastic"] .w-14.bg-secondary {
  border-right-color: rgba(255, 255, 255, 0.1) !important;
}
/* Light icons + labels on the dark rail */
body[data-theme-skin="builtin-roundcube-elastic"] .w-14.bg-secondary a,
body[data-theme-skin="builtin-roundcube-elastic"] .w-14.bg-secondary button,
body[data-theme-skin="builtin-roundcube-elastic"] .w-14.bg-secondary .text-muted-foreground {
  color: #e7edee !important;
}
/* Hover slab */
body[data-theme-skin="builtin-roundcube-elastic"] .w-14.bg-secondary a:hover,
body[data-theme-skin="builtin-roundcube-elastic"] .w-14.bg-secondary button:hover {
  background-color: #41525a !important;
  color: #ffffff !important;
}
/* Selected task: brighter slab, accent-blue glyph (matches Elastic) */
body[data-theme-skin="builtin-roundcube-elastic"] .w-14.bg-secondary .bg-primary\\/10 {
  background-color: #41525a !important;
}
body[data-theme-skin="builtin-roundcube-elastic"] .w-14.bg-secondary .text-primary {
  color: #37beff !important;
}

/* ── Flatten Bulwark's soft radii to Elastic's Bootstrap-flat look ── */
/* Elastic uses ~4px corners on buttons/inputs/cards; rounded-full (pills,
   avatars, toggles) is intentionally left alone. */
body[data-theme-skin="builtin-roundcube-elastic"] .rounded-md,
body[data-theme-skin="builtin-roundcube-elastic"] .rounded-lg,
body[data-theme-skin="builtin-roundcube-elastic"] .rounded-xl,
body[data-theme-skin="builtin-roundcube-elastic"] .rounded-2xl,
body[data-theme-skin="builtin-roundcube-elastic"] .rounded-3xl,
body[data-theme-skin="builtin-roundcube-elastic"] input,
body[data-theme-skin="builtin-roundcube-elastic"] textarea,
body[data-theme-skin="builtin-roundcube-elastic"] button:not(.rounded-full) {
  border-radius: 4px !important;
}

/* ── Unify panel backgrounds like Roundcube ───────────────────── */
/* In Elastic the folder list, message list and content pane all share one
   canvas (white / dark); only the narrow task rail is dark. Bulwark's folder
   sidebar uses \`bg-secondary\` (a grey panel), so repaint it with the main
   background. The folder sidebar carries the \`border-r\` class; the dark task
   rail uses \`bg-secondary\` WITHOUT it (inline-styled border), so this
   qualifier leaves the rail dark. */
body[data-theme-skin="builtin-roundcube-elastic"] .bg-secondary.border-r {
  background-color: var(--color-background) !important;
}
/* The empty "No conversation selected" pane uses a muted diagonal gradient;
   flatten it to the plain canvas so the content area is one solid colour. */
body[data-theme-skin="builtin-roundcube-elastic"] .bg-gradient-to-br.from-muted\\/30.to-muted\\/50 {
  background: var(--color-background) !important;
}

/* The message-viewer body sits on a faint muted backing (bg-muted/30); flatten
   it to the plain canvas so the whole content pane - search bar, action
   toolbar, mail header and body - is one uniform background colour. The
   search/toolbar/header are bordered \`bg-background\` strips, so they already
   match once we leave them untinted. */
body[data-theme-skin="builtin-roundcube-elastic"] .bg-muted\\/30 {
  background-color: var(--color-background) !important;
}

/* ── Elastic primary buttons (.btn-primary) ──────────────────── */
/* Solid accent fill, white label + icon, hairline border, focus halo. Light
   = @color-main (#37beff); dark = @color-dark-main (darken 30% -> #006a9d)
   with the bright #37beff outline, exactly like the on-switch. */
body[data-theme-skin="builtin-roundcube-elastic"] .bg-primary.text-primary-foreground {
  /* Elastic's #37beff holds only 2.1:1 with the white label; the darker
     main colour (--color-primary) reaches 4.5:1. */
  background-color: var(--color-primary) !important;
  border: 1px solid var(--color-primary) !important;
  color: #ffffff !important;
}
body[data-theme-skin="builtin-roundcube-elastic"] .bg-primary.text-primary-foreground:hover {
  background-color: #006a9d !important;
  border-color: #006a9d !important;
}
body[data-theme-skin="builtin-roundcube-elastic"] .bg-primary.text-primary-foreground:focus-visible {
  box-shadow: 0 0 0 0.2rem rgba(55, 190, 255, 0.3) !important;
}
.dark body[data-theme-skin="builtin-roundcube-elastic"] .bg-primary.text-primary-foreground {
  background-color: #006a9d !important;
  border-color: #37beff !important;
  color: #ffffff !important;
}
.dark body[data-theme-skin="builtin-roundcube-elastic"] .bg-primary.text-primary-foreground:hover {
  background-color: #0079b3 !important;
}

/* ── Elastic on/off switch (.custom-switch) ──────────────────── */
/* Track + knob restyled to the Bootstrap-derived Elastic switch. The toggle
   is a [role="switch"] button with a single inner <span> knob. */
body[data-theme-skin="builtin-roundcube-elastic"] [role="switch"] {
  background-color: #ced4da !important;
  border: 1px solid #b8c0c8 !important;
}
body[data-theme-skin="builtin-roundcube-elastic"] [role="switch"] > span {
  background-color: #ffffff !important;
}
body[data-theme-skin="builtin-roundcube-elastic"] [role="switch"][aria-checked="true"] {
  background-color: var(--color-primary) !important;
  border-color: var(--color-primary) !important;
}
.dark body[data-theme-skin="builtin-roundcube-elastic"] [role="switch"] {
  background-color: #4d6066 !important;
  border-color: #5d7077 !important;
}
.dark body[data-theme-skin="builtin-roundcube-elastic"] [role="switch"] > span {
  background-color: #c5d1d3 !important;
}
.dark body[data-theme-skin="builtin-roundcube-elastic"] [role="switch"][aria-checked="true"] {
  background-color: #006a9d !important;
  border-color: #37beff !important;
}

/* ── Recipient name/email rendered as links (like Roundcube) ──── */
/* Sender + recipient triggers (RecipientPopover) sit at \`text-foreground\`
   and only turn blue on hover; Elastic shows them link-blue at rest
   (@color-link #00acff, brighter in dark; light mode takes --color-primary,
   since #00acff is 2.5:1 on white). The three-class combo is unique
   to these recipient buttons. */
body[data-theme-skin="builtin-roundcube-elastic"] button.hover\\:text-primary.hover\\:underline.cursor-pointer {
  color: var(--color-primary) !important;
}
.dark body[data-theme-skin="builtin-roundcube-elastic"] button.hover\\:text-primary.hover\\:underline.cursor-pointer {
  color: #37beff !important;
}
/* The sender's email address printed under the name is muted grey; Roundcube
   shows it link-blue too. It's the div immediately after the name row
   (.flex.items-center.flex-wrap), which the contact-card org line is not, so
   this sibling selector scopes it to the sender email only. */
body[data-theme-skin="builtin-roundcube-elastic"] .flex.items-center.flex-wrap + div.text-muted-foreground.truncate {
  color: var(--color-primary) !important;
}
.dark body[data-theme-skin="builtin-roundcube-elastic"] .flex.items-center.flex-wrap + div.text-muted-foreground.truncate {
  color: #37beff !important;
}

/* ── Elastic context / popup menus ───────────────────────────── */
/* Roundcube highlights the hovered menu entry with a solid accent fill and
   white text (@color-menu-hover-background: @color-main, @color-menu-hover:
   #fff) - the same in light and dark. */
body[data-theme-skin="builtin-roundcube-elastic"] [role="menu"] [role="menuitem"]:hover,
body[data-theme-skin="builtin-roundcube-elastic"] [role="menu"] [role="menuitem"]:focus,
body[data-theme-skin="builtin-roundcube-elastic"] [role="menu"] [role="menuitem"]:focus-visible {
  background-color: #37beff !important;
  color: #ffffff !important;
}
/* Icons (currentColor) and muted accessories (shortcuts, submenu chevron)
   follow the white text on hover. */
body[data-theme-skin="builtin-roundcube-elastic"] [role="menu"] [role="menuitem"]:hover svg,
body[data-theme-skin="builtin-roundcube-elastic"] [role="menu"] [role="menuitem"]:focus svg,
body[data-theme-skin="builtin-roundcube-elastic"] [role="menu"] [role="menuitem"]:hover .text-muted-foreground {
  color: #ffffff !important;
}

/* ── Elastic folder list: unread count as a rounded pill ─────── */
/* Roundcube shows the unread count in a small grey pill on the right, and no
   badge at all when a folder has nothing unread. Bulwark renders plain
   "unread / total" text; the counts container is
   span.ml-2.flex-shrink-0.gap-1.items-baseline holding an unread span
   (.font-semibold), an optional "/" (.text-muted-foreground/60) and the total
   (.text-muted-foreground). Reshape it into a pill, drop the total + slash,
   and hide the whole badge when there's no unread span. */
body[data-theme-skin="builtin-roundcube-elastic"] .bg-secondary.border-r span.ml-2.flex-shrink-0.gap-1.items-baseline {
  align-items: center !important;
  justify-content: center;
  min-width: 1.6rem;
  height: 1.2rem;
  padding: 0 0.45rem;
  border-radius: 0.75rem;
  background-color: #e4e8ea;
}
body[data-theme-skin="builtin-roundcube-elastic"] .bg-secondary.border-r span.ml-2.flex-shrink-0.gap-1.items-baseline > span.text-muted-foreground,
body[data-theme-skin="builtin-roundcube-elastic"] .bg-secondary.border-r span.ml-2.flex-shrink-0.gap-1.items-baseline > span.text-muted-foreground\\/60 {
  display: none !important;
}
body[data-theme-skin="builtin-roundcube-elastic"] .bg-secondary.border-r span.ml-2.flex-shrink-0.gap-1.items-baseline > span {
  color: #5e6b70 !important;
  font-weight: 600 !important;
}
/* No unread span -> no badge (matches Sent/Drafts in Roundcube). */
body[data-theme-skin="builtin-roundcube-elastic"] .bg-secondary.border-r span.ml-2.flex-shrink-0.gap-1.items-baseline:not(:has(span.font-semibold)) {
  display: none !important;
}
.dark body[data-theme-skin="builtin-roundcube-elastic"] .bg-secondary.border-r span.ml-2.flex-shrink-0.gap-1.items-baseline {
  background-color: #3f4e55;
}
.dark body[data-theme-skin="builtin-roundcube-elastic"] .bg-secondary.border-r span.ml-2.flex-shrink-0.gap-1.items-baseline > span {
  color: #c9d3d5 !important;
}

/* A slightly bolder accent bar on the selected folder, like Elastic. */
body[data-theme-skin="builtin-roundcube-elastic"] .bg-secondary.border-r .border-l-2.border-primary {
  border-left-width: 3px !important;
}`,variants:["light","dark"],typography:{fontSans:'Roboto, "Helvetica Neue", Arial, sans-serif',baseFontSize:"14px"},enabled:!0,builtIn:!0},{id:"builtin-aurora-glass",name:"Aurora Glass",version:"1.0.0",author:"Built-in",description:"Ultra-modern glassmorphism - frosted blurred panes floating over a vibrant indigo→cyan gradient mesh, with glowing gradient actions",css:`
:root {
  --color-border: rgba(13, 18, 45, 0.10);
  --color-input: rgba(13, 18, 45, 0.12);
  --color-ring: #6d5cff;
  --color-background: #eef1fb;
  --color-foreground: #14162e;
  --color-primary: #503dff;
  --color-primary-foreground: #ffffff;
  --color-secondary: #e3e7f7;
  --color-secondary-foreground: #14162e;
  --color-muted: #e7eaf6;
  --color-muted-foreground: #5b6080;
  --color-accent: #e0e7ff;
  --color-accent-foreground: #4338ca;
  --color-destructive: #d80c2f;
  --color-destructive-foreground: #ffffff;
  --color-popover: #ffffff;
  --color-popover-foreground: #14162e;
  --color-sidebar: #eef1fb;
  --color-sidebar-foreground: #14162e;
  --color-sidebar-border: rgba(13, 18, 45, 0.08);
  --color-sidebar-accent: rgba(109, 92, 255, 0.10);
  --color-sidebar-accent-foreground: #4338ca;
  --color-card: #ffffff;
  --color-card-foreground: #14162e;
  --color-success: #10b981;
  --color-success-foreground: #ffffff;
  --color-warning: #f59e0b;
  --color-warning-foreground: #14162e;
  --color-info: #06b6d4;
  --color-info-foreground: #ffffff;
  --color-selection: rgba(109, 92, 255, 0.14);
  --color-selection-foreground: #4338ca;
  --color-unread: #6d5cff;
  --color-chart-1: #6d5cff;
  --color-chart-2: #06b6d4;
  --color-chart-3: #ec4899;
  --color-chart-4: #f59e0b;
  --color-chart-5: #10b981;
}
.dark {
  --color-border: rgba(255, 255, 255, 0.08);
  --color-input: rgba(255, 255, 255, 0.10);
  --color-ring: #8b7bff;
  --color-background: #06070f;
  --color-foreground: #eef0ff;
  --color-primary: #8b7bff;
  --color-primary-foreground: #06070f;
  --color-secondary: rgba(255, 255, 255, 0.06);
  --color-secondary-foreground: #eef0ff;
  --color-muted: rgba(255, 255, 255, 0.05);
  --color-muted-foreground: #9aa0c4;
  --color-accent: rgba(139, 123, 255, 0.16);
  --color-accent-foreground: #c4bbff;
  --color-destructive: #fb7185;
  --color-destructive-foreground: #1a0b10;
  --color-popover: #12132a;
  --color-popover-foreground: #eef0ff;
  --color-sidebar: #08091a;
  --color-sidebar-foreground: #eef0ff;
  --color-sidebar-border: rgba(255, 255, 255, 0.07);
  --color-sidebar-accent: rgba(139, 123, 255, 0.18);
  --color-sidebar-accent-foreground: #c4bbff;
  --color-card: rgba(255, 255, 255, 0.04);
  --color-card-foreground: #eef0ff;
  --color-success: #34d399;
  --color-success-foreground: #052e1f;
  --color-warning: #fbbf24;
  --color-warning-foreground: #1a1405;
  --color-info: #22d3ee;
  --color-info-foreground: #04222a;
  --color-selection: rgba(139, 123, 255, 0.22);
  --color-selection-foreground: #c4bbff;
  --color-unread: #8b7bff;
  --color-chart-1: #8b7bff;
  --color-chart-2: #22d3ee;
  --color-chart-3: #f472b6;
  --color-chart-4: #fbbf24;
  --color-chart-5: #34d399;
}`,skin:`
body[data-theme-skin="builtin-aurora-glass"] {
  font-family: "Inter", "SF Pro Display", "Segoe UI", system-ui, -apple-system, sans-serif;
  letter-spacing: -0.01em;
}

/* ── Gradient-mesh canvas ──────────────────────────────────────── */
/* A multi-stop radial mesh painted onto the app-shell root (the unique
   .bg-background.overflow-hidden container) so the frosted panes have
   something luminous to blur. Painting it directly on the shell - rather than
   a fixed body::before with z-indexed children - avoids creating stacking
   contexts on portaled popups/dialogs (Radix portals render as direct <body>
   children), which would otherwise break their layering. */
body[data-theme-skin="builtin-aurora-glass"] .bg-background.overflow-hidden {
  background-color: var(--color-background);
  background-image:
    radial-gradient(60rem 60rem at 12% -10%, rgba(109, 92, 255, 0.22), transparent 60%),
    radial-gradient(50rem 50rem at 105% 5%, rgba(6, 182, 212, 0.18), transparent 55%),
    radial-gradient(55rem 55rem at 80% 110%, rgba(236, 72, 153, 0.16), transparent 60%),
    radial-gradient(45rem 45rem at -5% 95%, rgba(16, 185, 129, 0.12), transparent 55%);
}
.dark body[data-theme-skin="builtin-aurora-glass"] .bg-background.overflow-hidden {
  background-image:
    radial-gradient(60rem 60rem at 12% -10%, rgba(109, 92, 255, 0.16), transparent 58%),
    radial-gradient(50rem 50rem at 105% 5%, rgba(6, 182, 212, 0.11), transparent 52%),
    radial-gradient(55rem 55rem at 80% 110%, rgba(236, 72, 153, 0.10), transparent 58%),
    radial-gradient(45rem 45rem at -5% 95%, rgba(16, 185, 129, 0.07), transparent 52%);
}

/* ── Pill-soft radii everywhere ───────────────────────────────── */
body[data-theme-skin="builtin-aurora-glass"] .rounded-md,
body[data-theme-skin="builtin-aurora-glass"] .rounded-lg {
  border-radius: 0.85rem !important;
}
body[data-theme-skin="builtin-aurora-glass"] .rounded-xl,
body[data-theme-skin="builtin-aurora-glass"] .rounded-2xl {
  border-radius: 1.25rem !important;
}

/* ── Frosted panes: the shared glass recipe ───────────────────── */
/* Nav rail, folder sidebar, content backing, cards, popovers, dialogs and
   menus all share one frosted treatment - translucent fill + heavy backdrop
   blur + saturation so the mesh and neighbours bleed through softly. */
body[data-theme-skin="builtin-aurora-glass"] .w-14.bg-secondary,
body[data-theme-skin="builtin-aurora-glass"] .bg-secondary.border-r {
  background-color: rgba(255, 255, 255, 0.55) !important;
  backdrop-filter: blur(26px) saturate(180%);
  -webkit-backdrop-filter: blur(26px) saturate(180%);
  border-color: rgba(13, 18, 45, 0.08) !important;
}
.dark body[data-theme-skin="builtin-aurora-glass"] .w-14.bg-secondary,
.dark body[data-theme-skin="builtin-aurora-glass"] .bg-secondary.border-r {
  background-color: rgba(8, 9, 22, 0.82) !important;
  border-color: rgba(255, 255, 255, 0.07) !important;
}

/* The "no conversation selected" empty pane sits inside an opaque
   bg-background column, so it can't inherit the shell mesh - paint the same
   gradient mesh directly onto it so the placeholder reads as glass too. */
body[data-theme-skin="builtin-aurora-glass"] .bg-gradient-to-br.from-muted\\/30.to-muted\\/50 {
  background-color: var(--color-background) !important;
  background-image:
    radial-gradient(50rem 50rem at 15% 0%, rgba(109, 92, 255, 0.22), transparent 60%),
    radial-gradient(45rem 45rem at 100% 10%, rgba(6, 182, 212, 0.18), transparent 55%),
    radial-gradient(50rem 50rem at 85% 105%, rgba(236, 72, 153, 0.16), transparent 60%) !important;
}
.dark body[data-theme-skin="builtin-aurora-glass"] .bg-gradient-to-br.from-muted\\/30.to-muted\\/50 {
  background-image:
    radial-gradient(50rem 50rem at 15% 0%, rgba(109, 92, 255, 0.18), transparent 58%),
    radial-gradient(45rem 45rem at 100% 10%, rgba(6, 182, 212, 0.12), transparent 52%),
    radial-gradient(50rem 50rem at 85% 105%, rgba(236, 72, 153, 0.11), transparent 58%) !important;
}
/* The reading-pane message backing goes clear glass so the frosted panes and
   gradient bleed through softly. */
body[data-theme-skin="builtin-aurora-glass"] .bg-muted\\/30 {
  background: transparent !important;
}

/* Cards, popovers and dialogs: brighter frosted glass with a luminous edge. */
body[data-theme-skin="builtin-aurora-glass"] .bg-card,
body[data-theme-skin="builtin-aurora-glass"] .bg-popover,
body[data-theme-skin="builtin-aurora-glass"] [role="menu"],
body[data-theme-skin="builtin-aurora-glass"] [role="dialog"],
body[data-theme-skin="builtin-aurora-glass"] [role="listbox"] {
  background-color: rgba(255, 255, 255, 0.72) !important;
  backdrop-filter: blur(28px) saturate(190%);
  -webkit-backdrop-filter: blur(28px) saturate(190%);
  border: 1px solid rgba(255, 255, 255, 0.6) !important;
  box-shadow: 0 12px 40px -12px rgba(20, 22, 46, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.7) !important;
}
.dark body[data-theme-skin="builtin-aurora-glass"] .bg-card,
.dark body[data-theme-skin="builtin-aurora-glass"] .bg-popover,
.dark body[data-theme-skin="builtin-aurora-glass"] [role="menu"],
.dark body[data-theme-skin="builtin-aurora-glass"] [role="dialog"],
.dark body[data-theme-skin="builtin-aurora-glass"] [role="listbox"] {
  background-color: rgba(16, 17, 38, 0.86) !important;
  border: 1px solid rgba(255, 255, 255, 0.10) !important;
  box-shadow: 0 16px 48px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
}

/* ── Primary action: gradient fill + glow ─────────────────────── */
body[data-theme-skin="builtin-aurora-glass"] .bg-primary.text-primary-foreground {
  background-image: linear-gradient(135deg, #7c5cff 0%, #6d5cff 45%, #4f9bff 100%) !important;
  border: none !important;
  color: #ffffff !important;
  box-shadow: 0 6px 20px -4px rgba(109, 92, 255, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.35) !important;
  transition: box-shadow 160ms ease, filter 160ms ease;
}
body[data-theme-skin="builtin-aurora-glass"] .bg-primary.text-primary-foreground:hover {
  filter: brightness(1.08);
  box-shadow: 0 10px 30px -4px rgba(109, 92, 255, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;
}
.dark body[data-theme-skin="builtin-aurora-glass"] .bg-primary.text-primary-foreground {
  background-image: linear-gradient(135deg, #8b7bff 0%, #6d5cff 50%, #22d3ee 130%) !important;
  box-shadow: 0 6px 24px -4px rgba(139, 123, 255, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
}

/* ── Selected folder / row: soft tinted glass + accent bar ────── */
body[data-theme-skin="builtin-aurora-glass"] .bg-secondary.border-r .border-l-2.border-primary {
  border-left-width: 3px !important;
}

/* ── On/off switch: gradient when active ──────────────────────── */
body[data-theme-skin="builtin-aurora-glass"] [role="switch"][aria-checked="true"] {
  background-image: linear-gradient(135deg, #7c5cff, #4f9bff) !important;
  border-color: transparent !important;
  box-shadow: 0 2px 10px -1px rgba(109, 92, 255, 0.6) !important;
}
.dark body[data-theme-skin="builtin-aurora-glass"] [role="switch"][aria-checked="true"] {
  background-image: linear-gradient(135deg, #8b7bff, #22d3ee) !important;
}

/* ── Menu hover: tinted accent slab (keeps glass legible) ─────── */
body[data-theme-skin="builtin-aurora-glass"] [role="menu"] [role="menuitem"]:hover,
body[data-theme-skin="builtin-aurora-glass"] [role="menu"] [role="menuitem"]:focus,
body[data-theme-skin="builtin-aurora-glass"] [role="menu"] [role="menuitem"]:focus-visible {
  background-color: rgba(109, 92, 255, 0.14) !important;
  color: var(--color-foreground) !important;
}
.dark body[data-theme-skin="builtin-aurora-glass"] [role="menu"] [role="menuitem"]:hover,
.dark body[data-theme-skin="builtin-aurora-glass"] [role="menu"] [role="menuitem"]:focus,
.dark body[data-theme-skin="builtin-aurora-glass"] [role="menu"] [role="menuitem"]:focus-visible {
  background-color: rgba(139, 123, 255, 0.22) !important;
}`,variants:["light","dark"],typography:{fontSans:'"Inter", "SF Pro Display", "Segoe UI", system-ui, sans-serif'},enabled:!0,builtIn:!0}];var h=e.i(805495),y=e.i(629001);let w=null;function k(){return w||(w=(async()=>{let e=await (0,y.i)("/api/plugins");return{ok:e.ok,status:e.status,data:e.ok?await e.json():null}})().finally(()=>{w=null})),w}e.s(["f",0,k],286043);var v=e.i(179083),S=e.i(264958),A=e.i(950757);function x(e){let t=h.M.getState().getForcedThemeId(e.map(e=>e.id));return t||(e.find(e=>e.forceEnabled)?.id??null)}function I(e,t){let{mode:r,locked:o}=h.M.getState().getColorModePolicy();return r&&(o||!t)?r:e}let T=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",C=e=>{if("u"<typeof document)return;let t=document.documentElement;"dark"===e?(t.classList.remove("light"),t.classList.add("dark")):(t.classList.remove("dark"),t.classList.add("light")),t.style.colorScheme=e,(0,S.o)(),localStorage.setItem("theme-applied",e)},E=null,D=null,O=(0,t.f)()((0,r.V)((t,r)=>({theme:"system",themeChosen:!1,resolvedTheme:"light",hydrated:!1,installedThemes:[...b],activeThemeId:null,setTheme:(e,o)=>{let n=o?.chosen??!0,a=I(e,n),i="system"===a?T():a;C(i),t({theme:a,resolvedTheme:i,themeChosen:n});let{activeThemeId:l,installedThemes:s}=r();if(l){let e=s.find(e=>e.id===l);e&&L(e,i)}},toggleTheme:()=>{let{theme:e}=r();r().setTheme("light"===e?"dark":"dark"===e?"system":"light")},applyColorModePolicy:()=>{let{theme:e,themeChosen:t}=r();I(e,t)!==e&&r().setTheme(e,{chosen:t})},initializeTheme:()=>{let{theme:e,activeThemeId:o,installedThemes:n}=r(),a="system"===e?T():e;C(a),t({resolvedTheme:a,hydrated:!0});let i=x(n)??o;if(!i){let e=h.M.getState().policy.themePolicy;e?.defaultThemeId&&(i=e.defaultThemeId)}if(i!==o&&t({activeThemeId:i}),i||((0,g.A)(),(0,g.s)()),i){let e=n.find(e=>e.id===i);e&&(e.css?L(e,a):p.getThemeCSS(i).then(e=>{e&&((0,g.Q)(e),t({installedThemes:n.map(t=>t.id===i?{...t,css:e}:t)}))}))}E&&(E(),E=null);{let e=window.matchMedia("(prefers-color-scheme: dark)"),o=()=>{let{theme:e,activeThemeId:o,installedThemes:n}=r();if("system"===e){let e=T();if(C(e),t({resolvedTheme:e}),o){let t=n.find(e=>e.id===o);t&&L(t,e)}}};e.addEventListener("change",o),E=()=>e.removeEventListener("change",o)}},installTheme:async o=>{let{extractTheme:n}=await e.A(643826),a=await n(o);if(!a.valid||!a.manifest)return{success:!1,error:a.errors.join("; "),warnings:a.warnings};let{manifest:i,css:l,skin:s,preview:d}=a,{installedThemes:c}=r(),u={apiVersion:i.apiVersion,extends:i.extends,tokens:i.tokens,derive:i.derive,density:i.density,radii:i.radii,typography:i.typography};if(c.some(e=>e.id===i.id)){let e=(0,g.G)(l),r={id:i.id,name:i.name,version:i.version,author:i.author,description:i.description||"",preview:d||void 0,css:e.css,skin:s??void 0,variants:i.variants,enabled:!0,builtIn:!1,...u};return await p.saveThemeCSS(i.id,e.css),s?await p.saveThemeSkin(i.id,s):await p.deleteThemeSkin(i.id),d&&await p.savePreview(i.id,d),t({installedThemes:c.map(e=>e.id===i.id?r:e)}),{success:!0,warnings:[...a.warnings,...e.warnings]}}let f=(0,g.G)(l),m={id:i.id,name:i.name,version:i.version,author:i.author,description:i.description||"",preview:d||void 0,css:f.css,skin:s??void 0,variants:i.variants,enabled:!0,builtIn:!1,...u};return await p.saveThemeCSS(i.id,f.css),s&&await p.saveThemeSkin(i.id,s),d&&await p.savePreview(i.id,d),t({installedThemes:[...c,m]}),{success:!0,warnings:[...a.warnings,...f.warnings]}},uninstallTheme:e=>{let{installedThemes:o,activeThemeId:n}=r(),a=o.find(t=>t.id===e);if(!a||a.builtIn)return;let i=h.M.getState().isThemeForceEnabled(e);a.forceEnabled||i||(n===e&&((0,g.A)(),(0,g.s)(),t({activeThemeId:null})),p.deleteThemeCSS(e),p.deleteThemeSkin(e),p.deletePreview(e),t({installedThemes:o.filter(t=>t.id!==e)}))},activateTheme:e=>{let{installedThemes:o,resolvedTheme:n}=r(),a=x(o);if(a&&e!==a){let e=o.find(e=>e.id===a);e&&(L(e,n),t({activeThemeId:a}));return}if(null===e){(0,g.A)(),(0,g.s)(),t({activeThemeId:null});return}let i=o.find(t=>t.id===e);if(i){if(!i.css){p.getThemeCSS(e).then(o=>{o&&(L({...i,css:o},r().resolvedTheme),t(t=>({activeThemeId:e,installedThemes:t.installedThemes.map(t=>t.id===e?{...t,css:o}:t)})))}),t({activeThemeId:e});return}L(i,n),t({activeThemeId:e})}},syncServerThemes:async()=>{if(!A.A){if(D)return void await D;D=(async()=>{try{let e=await k();if(!e.ok)return;let o=e.data;if(!o?.themes||!Array.isArray(o.themes))return;let n=o.themes;for(let e of n){let o=r().installedThemes.find(t=>t.id===e.id);if(o){if(!o.builtIn){let n=o.css,a=o.skin,i=o.version!==e.version||!!e.contentHash&&o.contentHash!==e.contentHash;if(i||!n){let t=await M(e,"css");if(!t)continue;let r=(0,g.G)(t);n=r.css,await p.saveThemeCSS(e.id,r.css)}if(i){let t=e.hasSkin?await M(e,"skin"):null;(a=t?(0,g.V)(t).css:void 0)?await p.saveThemeSkin(e.id,a):await p.deleteThemeSkin(e.id)}let l={...o,name:e.name,version:e.version,author:e.author,description:e.description||"",css:n,skin:a,variants:e.variants,managed:!0,forceEnabled:e.forceEnabled,contentHash:e.contentHash};t(t=>({installedThemes:t.installedThemes.map(t=>t.id===e.id?l:t)})),r().activeThemeId===e.id&&L(l,r().resolvedTheme)}}else{let r=await M(e,"css");if(!r)continue;let o=e.hasSkin?await M(e,"skin"):null,n=(0,g.G)(r),a=o?(0,g.V)(o).css:void 0,i={id:e.id,name:e.name,version:e.version,author:e.author,description:e.description||"",css:n.css,variants:e.variants,enabled:!0,builtIn:!1,managed:!0,forceEnabled:e.forceEnabled,contentHash:e.contentHash,...a?{skin:a}:{}};await p.saveThemeCSS(e.id,n.css),a&&await p.saveThemeSkin(e.id,a),t(t=>t.installedThemes.some(t=>t.id===e.id)?{}:{installedThemes:[...t.installedThemes,i]})}}let a=new Set(n.map(e=>e.id)),i=r().installedThemes.filter(e=>e.managed&&!e.builtIn&&!a.has(e.id));if(i.length>0){let e=new Set(i.map(e=>e.id)),o=r().activeThemeId;for(let r of(o&&e.has(o)&&((0,g.A)(),(0,g.s)(),t({activeThemeId:null})),e))p.deleteThemeCSS(r),p.deleteThemeSkin(r),p.deletePreview(r);t(t=>({installedThemes:t.installedThemes.filter(t=>!e.has(t.id))}))}t(e=>({installedThemes:function(e){let t=new Map;for(let r of e){let e=t.get(r.id);if(!e){t.set(r.id,r);continue}t.set(r.id,{...e,...r,builtIn:e.builtIn||r.builtIn,enabled:e.enabled||r.enabled,managed:e.managed||r.managed,forceEnabled:r.forceEnabled??e.forceEnabled})}return[...t.values()]}(e.installedThemes)}));let l=x(r().installedThemes);if(l&&r().activeThemeId!==l){let e=r().installedThemes.find(e=>e.id===l);e&&(L(e,r().resolvedTheme),t({activeThemeId:l}))}}catch{console.warn("[theme-store] Server theme sync failed")}})();try{await D}finally{D=null}}}}),{name:"theme-storage",version:1,partialize:e=>({theme:e.theme,themeChosen:e.themeChosen,activeThemeId:e.activeThemeId,installedThemes:e.installedThemes.map(e=>({...e,css:e.builtIn?e.css:"",skin:void 0,preview:void 0}))}),migrate:(e,t)=>(t<1&&(e.themeChosen="system"!==e.theme),e),onRehydrateStorage:()=>e=>{if(e){let t=new Set(b.map(e=>e.id)),r=e.installedThemes.filter(e=>!t.has(e.id)&&!e.builtIn);e.installedThemes=[...b,...r],e.activeThemeId&&!e.installedThemes.some(t=>t.id===e.activeThemeId)&&(e.activeThemeId=null);let o="system"===e.theme?T():e.theme;C(o),e.resolvedTheme=o,e.hydrated=!0}}}));function L(e,t){if(!e.variants.includes(t)){(0,g.A)(),(0,g.s)();return}if((0,g.Q)(e.css),e.skin?(0,g.$)(e.skin,e.id):2===e.apiVersion||e.managed?p.getThemeSkin(e.id).then(t=>{O.getState().activeThemeId===e.id&&(t?((0,g.$)(t,e.id),O.setState(r=>({installedThemes:r.installedThemes.map(r=>r.id===e.id?{...r,skin:t}:r)}))):(0,g.s)())}):(0,g.s)(),0===v.O.onThemeBeforeApply.size)return;let r=e.id;v.O.onThemeBeforeApply.transform(e.css,{themeId:r,variant:t}).then(t=>{O.getState().activeThemeId===r&&t&&t!==e.css&&(0,g.Q)((0,g.G)(t).css)}).catch(()=>{})}async function M(e,t){let r=e.contentHash?`?v=${encodeURIComponent(e.contentHash)}`:"";try{let o=await (0,y.i)(`/api/admin/themes/${encodeURIComponent(e.id)}/${t}${r}`);if(!o.ok)return null;return await o.text()}catch{return console.warn(`[theme-store] Failed to download ${t} for theme "${e.id}"`),null}}h.M.subscribe((e,t)=>{e.policy!==t.policy&&O.getState().applyColorModePolicy()}),O.subscribe((e,t)=>{(e.theme!==t.theme||e.resolvedTheme!==t.resolvedTheme)&&v.O.onThemeChange.emit({theme:e.theme,resolved:e.resolvedTheme}),e.activeThemeId!==t.activeThemeId&&v.O.onCustomThemeChange.emit({themeId:e.activeThemeId})}),e.s(["f",0,O],669922)}])})();

//# debugId=80b52edb-c98b-9c6c-1511-b6a0a17f7681
