(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,876686,e=>{var t=e.i(792726);function r(e){let r=t.k.getState();return!!r.debugMode&&(!e||r.debugCategories?.[e]!==!1)}let o=new Set(["jmap","calendar","tasks","auth","filters","email","push","contacts"]);e.s(["f",0,{log:(e,...t)=>{var a;"string"==typeof e&&(a=e,o.has(a))?r(e)&&console.log(`[DEBUG:${e}]`,...t):r()&&console.log("[DEBUG]",e,...t)},warn:(e,...t)=>{var a;"string"==typeof e&&(a=e,o.has(a))?r(e)&&console.warn(`[DEBUG:${e}]`,...t):r()&&console.warn("[DEBUG]",e,...t)},error:(...e)=>{console.error("[ERROR]",...e)},group:(e,t)=>{r(t)&&console.group(`[DEBUG${t?":"+t:""}] ${e}`)},groupEnd:()=>{r()&&console.groupEnd()},time:(e,t)=>{r(t)&&console.time(`[DEBUG${t?":"+t:""}] ${e}`)},timeEnd:(e,t)=>{r(t)&&console.timeEnd(`[DEBUG${t?":"+t:""}] ${e}`)},table:(e,t)=>{r(t)&&console.table(e)}}])},264958,e=>{let t=/^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*0\s*\)$/,r=!1,o=!1;function a(){if(!r||"u"<typeof document||o)return;o=!0;let e=()=>{o=!1,function(){let e=function(){let e=document.body??document.documentElement;if(!e)return null;let r=getComputedStyle(e).backgroundColor;return!r||"transparent"===r||t.test(r)?null:r}();if(!e)return;let r=document.head?.querySelector('meta[name="theme-color"]');if(!r){if(!document.head)return;(r=document.createElement("meta")).name="theme-color",document.head.appendChild(r)}r.content!==e&&(r.content=e)}()};"function"==typeof requestAnimationFrame?requestAnimationFrame(e):setTimeout(e,0)}e.s(["B",0,function(){r=!0,a()},"o",0,a])},792726,253509,787153,511540,867080,e=>{var t=e.i(768834),r=e.i(579473),o=e.i(669922);let a=(0,t.f)()((0,r.f)(e=>({locale:"",setLocale:t=>e({locale:t})}),{name:"locale-storage"}));e.s(["f",0,a],253509);var n=e.i(805495);let i={accounts:[],mailboxes:{}};function l(e,t){return`${e}/${t}`}function s(e){if(!e||"object"!=typeof e||Array.isArray(e))return i;let t=Array.isArray(e.accounts)?e.accounts.filter(e=>"string"==typeof e&&""!==e):[],r={};if(e.mailboxes&&"object"==typeof e.mailboxes&&!Array.isArray(e.mailboxes))for(let[t,o]of Object.entries(e.mailboxes))"boolean"==typeof o&&(r[t]=o);return{accounts:t,mailboxes:r}}function d(e,t){return e.accounts.includes(t)}e.s(["e",0,i,"R",0,d,"l",0,function(e,t,r){return e.mailboxes[l(t,r)]??d(e,t)},"U",0,function(e,t){let r=l(t,""),o=[],a=[];for(let[t,n]of Object.entries(e.mailboxes))t.startsWith(r)&&(n?o:a).push(t.slice(r.length));return{muted:o,unmuted:a}},"g",0,s,"o",0,function(e,t){let r=l(t,""),o=Object.fromEntries(Object.entries(e.mailboxes).filter(([e])=>!e.startsWith(r)));return{...e,mailboxes:o}},"v",0,function(e,t,r){let o=e.accounts.filter(e=>e!==t);return r&&o.push(t),{...e,accounts:o}},"a",0,function(e,t,r,o){let a={...e.mailboxes},n=l(t,r);return o===d(e,t)?delete a[n]:a[n]=o,{...e,mailboxes:a}}],787153);var c=e.i(629001);let u="".replace(/\/+$/,"");async function f(e){try{var t;if("u"<typeof caches)return;let r=await caches.open("bulwark-push-state-v1");await r.put((t=window.location.origin,`${t}${u}/__push-state/prefs`),new Response(JSON.stringify(e),{headers:{"Content-Type":"application/json"}}))}catch{}}var b=e.i(179083),g=e.i(853903);function p(e,t){return`${e.replace(/\/+$/,"").toLowerCase()}|${t.toLowerCase()}`}let m=new Date(0).toISOString();e.s(["l",0,function(e,t,r=new Date){let o=r.getTime()-7776e6,a={};for(let r of[e.deletedSubscriptionIds,t.deletedSubscriptionIds])for(let[e,t]of Object.entries(r))!(Date.parse(t)<o)&&(!a[e]||Date.parse(t)>Date.parse(a[e]))&&(a[e]=t);let n=new Map;for(let t of e.icalSubscriptions)n.set(t.id,t);for(let e of t.icalSubscriptions){let t=n.get(e.id),r=t?.updatedAt?Date.parse(t.updatedAt):0,o=e.updatedAt?Date.parse(e.updatedAt):0;(!t||o>r)&&n.set(e.id,e)}let i=[];for(let e of n.values()){let t=a[e.id];if(void 0!==t){if((e.updatedAt?Date.parse(e.updatedAt):0)<=Date.parse(t))continue;delete a[e.id]}i.push(e)}return{icalSubscriptions:i,deletedSubscriptionIds:a}},"R",0,function(e){if("object"!=typeof e||null===e||Array.isArray(e))return{};let t={};for(let[r,o]of Object.entries(e))"string"!=typeof o||Number.isNaN(Date.parse(o))||(t[r]=o);return t},"V",0,function(e){if(!Array.isArray(e))return null;let t=[],r=new Set;for(let a of e){var o;if("object"!=typeof a||null===a||"string"!=typeof a.id||!a.id||r.has(a.id)||"string"!=typeof a.url||!a.url.trim())continue;let e=a.url.trim().replace(/^webcals?:\/\//i,"https://");if(!/^https?:\/\//i.test(e)||!function(e){try{return new URL(e),!0}catch{return!1}}(e)||"string"!=typeof a.calendarId||!a.calendarId.trim()||"string"!=typeof a.name||!a.name.trim())continue;r.add(a.id);let n="number"==typeof a.refreshInterval&&Number.isFinite(a.refreshInterval)&&a.refreshInterval>0?a.refreshInterval:60;t.push({id:a.id,url:e,calendarId:a.calendarId.trim(),name:a.name.trim(),color:"string"==typeof a.color&&a.color?a.color:"#3b82f6",refreshInterval:n,lastRefreshed:"string"==typeof a.lastRefreshed?a.lastRefreshed:null,accountId:"string"==typeof a.accountId&&a.accountId?a.accountId:void 0,owner:"string"==typeof a.owner&&a.owner?a.owner:void 0,updatedAt:("string"!=typeof(o=a.updatedAt)||Number.isNaN(Date.parse(o))?void 0:o)??m})}return t},"I",0,p],511540);var h=e.i(274214);let y=["+","-",".","="],k=/^[!#$%&'*+\-./=?^_`{|}~]$/;function w(e){return"string"==typeof e&&k.test(e)}e.s(["y",0,"+","L",0,30,"q",0,y,"g",0,function(e){let t=e.match(/@([^@]+)$/);return t?t[1].toLowerCase():null},"B",0,function(e,t,r="+"){let[o,a]=e.split("@");if(!o||!a||!t)return e;let n=o.indexOf(r),i=-1===n?o:o.substring(0,n),l=t.replace(/[^a-zA-Z0-9-]/g,"").toLowerCase();return l?`${i}${r}${l}@${a}`:e},"C",0,function(e){return e?e.length>30?"TOO_LONG":/^[a-zA-Z0-9-]+$/.test(e)?null:"INVALID_CHARS":"EMPTY"},"m",0,function(e){return y.includes(e)},"h",0,w,"M",0,function(e,t="+"){let[r,o]=e.split("@");if(!r||!o)return{localPart:r||"",baseUser:r||"",tag:null,domain:o||"",fullAddress:e};let a=r.indexOf(t);if(-1===a)return{localPart:r,baseUser:r,tag:null,domain:o,fullAddress:e};let n=r.substring(0,a),i=r.substring(a+t.length);return{localPart:r,baseUser:n,tag:i||null,domain:o,fullAddress:e}},"A",0,function(e){let t=e.toLowerCase(),r={"amazon.com":["amazon","shopping","orders"],"amazon.fr":["amazon","shopping","orders"],"amazon.de":["amazon","shopping","orders"],"amazon.co.uk":["amazon","shopping","orders"],"ebay.com":["ebay","shopping"],"ebay.fr":["ebay","shopping"],"paypal.com":["paypal","payments"],"facebook.com":["facebook","social"],"twitter.com":["twitter","social"],"x.com":["twitter","social"],"linkedin.com":["linkedin","professional"],"github.com":["github","dev","notifications"],"gitlab.com":["gitlab","dev","notifications"],"stackoverflow.com":["stackoverflow","dev"],"reddit.com":["reddit","social"],"netflix.com":["netflix","entertainment"],"spotify.com":["spotify","music"],"steam.com":["steam","gaming"],"discord.com":["discord","gaming"]};if(r[t])return r[t];let o=t.split(".");return[o.length>=2?o[o.length-2]:o[0],"newsletter","registration"]}],867080);let v=(...e)=>console.log("[SETTINGS_SYNC]",...e),x=(...e)=>console.warn("[SETTINGS_SYNC]",...e),S=(...e)=>console.error("[SETTINGS_SYNC]",...e);function T(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}let A=!1,I=null,C=null,$=null,j=null,O=!1,M=!1,E=null,D=null,L="settings-sync-owner";function R(){try{return window.localStorage.getItem(L)}catch{return null}}function P(e){try{e?window.localStorage.setItem(L,e):window.localStorage.removeItem(L)}catch{}}let N=null,F=null;function z(e,t){return JSON.stringify([Array.isArray(e)?e.filter(e=>"object"==typeof e&&null!==e&&"string"==typeof e.id).map(e=>`${e.id}@${String(e.updatedAt)}`).sort():[],T(t)?Object.keys(t).sort():[]])}function B(e){let t=N?.getSyncedState();return!!t&&(0!==t.templates.length||0!==Object.keys(t.deletedTemplateIds).length)&&(!e||z(t.templates,t.deletedTemplateIds)!==z(e.templates,e.deletedTemplateIds))}let U=null,K=null;async function V(e,t=1){v("Syncing settings to server for",e.username);let r=await (0,c.i)("/api/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(404===r.status)x("Settings sync endpoint returned 404, disabling sync"),A=!1;else if(403===r.status)x("Settings sync rejected (identity mismatch), disabling sync"),A=!1;else{if(r.status>=500&&t>0)return x("Settings sync got server error:",(await r.json().catch(()=>({}))).error||`status ${r.status}`,"- retrying..."),await new Promise(e=>setTimeout(e,2e3)),V(e,t-1);r.ok?(v("Settings synced to server successfully"),b.D.onSettingsSync.emit({direction:"pushed"})):S("Settings sync failed:",(await r.json().catch(()=>({}))).error||`status ${r.status}`)}}let H=new Set(["onboardingCompleted","tourCompleted"]),q=new Set(["proInterface"]),W=new Set(["enableUnifiedMailbox","includeGroupInUnified","unifiedCrossAccount","enableCrossUnreadView","enableCrossStarredView","enableCrossAllView"]),G={fontSize:"medium",density:"regular",interfaceLayout:"default",animationsEnabled:!0,messageListOrder:[],messageListOrderScope:"inbox",dateFormat:"smart",dateLocale:"auto",timeFormat:"24h",firstDayOfWeek:1,timeZone:"auto",markAsReadDelay:0,deleteAction:"trash",permanentlyDeleteJunk:!1,confirmBulkDelete:!0,returnToListAfterAction:!0,clearSearchOnFolderChange:!1,showPreview:!0,showVerificationCodes:!0,mailLayout:"split",listColumns:!1,emailsPerPage:50,externalContentPolicy:"ask",messageSpacing:"auto",plainTextFont:"sans",mailAttachmentAction:"preview",attachmentPosition:"beside-sender",emailAlwaysLightMode:!1,archiveMode:"single",hoverActions:["delete","star","markRead","archive"],hoverActionsMode:"inline",hoverActionsCorner:"top-right",swipeRightAction:"archive",swipeLeftAction:"delete",autoSaveDraftInterval:6e4,sendConfirmation:!1,defaultReplyMode:"reply",autoSelectReplyIdentity:!1,replyIdentityMatch:"domain",plainTextMode:!1,rtlEditingSupport:!1,subAddressDelimiter:"+",sendDelaySeconds:0,signaturePosition:"below_quote",signatureSeparatorEnabled:!0,requestReadReceiptDefault:!1,readReceiptResponse:"ask",sessionTimeout:0,trustedSenders:[],trustedSendersAddressBook:null,expandedFilterView:!1,showTimeInMonthView:!1,showWeekNumbers:!1,calendarFreeScroll:!0,calendarHoverPreview:"delay-500ms",calendarLimitHours:!0,calendarDayStartHour:8,calendarDayEndHour:20,calendarHideNonWorkingDays:!1,calendarWorkingDays:[1,2,3,4,5],enableCalendarTasks:!1,showTasksOnCalendar:!0,showBirthdayCalendar:!1,birthdayCalendarColor:"#eab308",sharedCalendarColors:{},groupContactsByLetter:!0,sortContactsByLastName:!1,emailNotificationsEnabled:!0,emailNotificationSound:!0,notificationSoundChoice:"default",pushNotifyInboxOnly:!1,notificationMutes:i,pushRelayUrl:"",protocolOpenMode:"new-tab",calendarNotificationsEnabled:!0,calendarNotificationSound:!0,calendarInvitationParsingEnabled:!0,toolbarPosition:"top",showToolbarLabels:!0,hideAccountSwitcher:!1,showRailAccountList:!1,proInterface:!1,showAdvancedSettings:!1,enableUnifiedMailbox:!1,includeGroupInUnified:!0,unifiedCrossAccount:!1,allMailFolderIds:{},preferredIdentityIds:{},enableCrossUnreadView:!1,enableCrossStarredView:!1,enableCrossAllView:!1,disableThreading:!1,senderFavicons:!0,showAvatarsInJunk:!1,faviconUnreadBadge:!0,colorfulSidebarIcons:!0,tintListRowsByTag:!0,tintListRowsByAccount:!1,showAccountDot:!0,showFolderTotalCount:!0,showSharedMailAccounts:!0,hiddenSharedMailAccounts:{},folderIcons:{},folderCountModes:{},emailKeywords:[{id:"red",label:"Red",color:"red"},{id:"orange",label:"Orange",color:"orange"},{id:"yellow",label:"Yellow",color:"yellow"},{id:"green",label:"Green",color:"green"},{id:"blue",label:"Blue",color:"blue"},{id:"purple",label:"Purple",color:"purple"},{id:"pink",label:"Pink",color:"pink"}],nestedTags:!1,attachmentReminderEnabled:!0,attachmentReminderKeywords:["attached","attachment","attachments","see attached","find attached","please find attached","angehängt","anhang","anbei","im anhang","ci-joint","pièce jointe","adjunto","adjunta","en adjunto","allegato","in allegato","bijgevoegd","bijlage","em anexo","anexo","w załączniku","во вложении","添付","附件","첨부","pielikumā"],emptySubjectWarningEnabled:!0,recipientMentionsEnabled:!0,mentionAddsRecipientTo:"to",hideInlineImageAttachments:!0,attachmentImagePreviewsEnabled:!0,sidebarApps:[],keepAppsLoaded:!1,onboardingCompleted:!1,tourCompleted:!1,showOnboardingOnNewDevices:!1,emailDownloadTemplate:"{date} ({from}-{to}) {subject}",attachmentDownloadTemplate:"{filename}",bundleDownloadTemplate:"emails-{count}",filenameSpaceReplacement:"keep",filenameLowercase:!1,filenameStripDiacritics:!1,filenameCollapseSeparators:!0,postExportAction:"keep",debugMode:!1,debugCategories:{jmap:!0,calendar:!0,tasks:!0,auth:!0,filters:!0,email:!0,push:!0},settingsSyncDisabled:!1,explicitSettings:[]},Z=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),_=e=>G[e];function J(e){if("explicitSettings"===e||!Z(G,e))return!1;let t=typeof _(e);return"boolean"===t||"number"===t||"string"===t}function Y(e,t,r){if(!J(e)||typeof t!=typeof _(e)||"number"==typeof t&&!Number.isFinite(t)||"sendDelaySeconds"===e&&![0,10,30,60].includes(t)||"subAddressDelimiter"===e&&!w(t)||"messageListOrderScope"===e&&"inbox"!==t&&"all"!==t)return!1;if(r&&"object"==typeof r&&(Array.isArray(r.allowedValues)&&!r.allowedValues.includes(t)||"number"==typeof t&&("number"==typeof r.min&&t<r.min||"number"==typeof r.max&&t>r.max)))return!1;return!0}function X(e){return Object.keys(e).filter(t=>J(t)&&e[t]!==_(t))}let Q=(0,t.f)()((0,r.f)((t,r)=>{let i=e=>{let o={...G};for(let e of q)delete o[e];if(e?.keepCrossAccountViews)for(let e of W)delete o[e];o.explicitSettings=r().explicitSettings.filter(e=>!Z(o,e));let a=O;O=!0;try{t(o),N?.applySyncedState([],{},{merge:!1}),d()}finally{O=a}l()},l=()=>{let{fontSize:e,density:t,interfaceLayout:o,animationsEnabled:a}=r();ee(e),eo(t,o),ea(o,t),en(a)},d=()=>{let e=function(e,t){let r=new Set(Array.isArray(e.explicitSettings)?e.explicitSettings:[]),o=T(t.defaults)?t.defaults:{},a=T(t.restrictions)?t.restrictions:{},n=e=>Z(a,e)?a[e]:void 0,i={};for(let[t,a]of Object.entries(o))!r.has(t)&&Y(t,a,n(t))&&e[t]!==a&&(i[t]=a);for(let[t,r]of Object.entries(a)){if(!T(r)||!0!==r.locked)continue;let a=Z(r,"value")?r.value:Z(o,t)?o[t]:void 0;Y(t,a,r)&&(e[t]!==a?i[t]=a:delete i[t])}return i}(r(),n.f.getState().policy);return 0!==Object.keys(e).length&&(t(e),!0)},u=(e,o)=>{t({[e]:o}),"fontSize"===e&&ee(o),"density"===e&&eo(o,r().interfaceLayout),"interfaceLayout"===e&&ea(o,r().density),"animationsEnabled"===e&&en(o)};return{...G,updateSetting:(e,o,a)=>{var n;let i;a?.internal||H.has(e)?u(e,o):(n=r()[e],i=()=>{(()=>{u(e,o);let{explicitSettings:a}=r();Z(G,e)&&"explicitSettings"!==e&&!a.includes(e)&&t({explicitSettings:[...a,e]})})(),b.D.onSettingChange.emit({key:e,value:o,previous:n})},0===b.D.onBeforeSettingChange.size?i():b.D.onBeforeSettingChange.intercept({key:e,value:o,previous:n}).then(e=>{e&&i()}))},applyAdminPolicy:()=>{d()&&l()},resetToDefaults:()=>{t(G),d(),l(),b.D.onSettingsReset.emit({})},exportSettings:e=>{let t,n,i,l=(t=r(),n=N?.getSyncedState(),i=U?.getSyncedState(),JSON.stringify({fontSize:t.fontSize,density:t.density,interfaceLayout:t.interfaceLayout,animationsEnabled:t.animationsEnabled,messageListOrder:t.messageListOrder,messageListOrderScope:t.messageListOrderScope,dateFormat:t.dateFormat,dateLocale:t.dateLocale,timeFormat:t.timeFormat,firstDayOfWeek:t.firstDayOfWeek,timeZone:t.timeZone,markAsReadDelay:t.markAsReadDelay,deleteAction:t.deleteAction,returnToListAfterAction:t.returnToListAfterAction,confirmBulkDelete:t.confirmBulkDelete,clearSearchOnFolderChange:t.clearSearchOnFolderChange,showPreview:t.showPreview,showVerificationCodes:t.showVerificationCodes,mailLayout:t.mailLayout,listColumns:t.listColumns,emailsPerPage:t.emailsPerPage,externalContentPolicy:t.externalContentPolicy,messageSpacing:t.messageSpacing,plainTextFont:t.plainTextFont,mailAttachmentAction:t.mailAttachmentAction,attachmentPosition:t.attachmentPosition,archiveMode:t.archiveMode,hoverActions:t.hoverActions,hoverActionsMode:t.hoverActionsMode,hoverActionsCorner:t.hoverActionsCorner,swipeRightAction:t.swipeRightAction,swipeLeftAction:t.swipeLeftAction,disableThreading:t.disableThreading,trustedSenders:t.trustedSenders,autoSaveDraftInterval:t.autoSaveDraftInterval,sendConfirmation:t.sendConfirmation,defaultReplyMode:t.defaultReplyMode,autoSelectReplyIdentity:t.autoSelectReplyIdentity,replyIdentityMatch:t.replyIdentityMatch,plainTextMode:t.plainTextMode,rtlEditingSupport:t.rtlEditingSupport,subAddressDelimiter:t.subAddressDelimiter,sendDelaySeconds:t.sendDelaySeconds,signaturePosition:t.signaturePosition,signatureSeparatorEnabled:t.signatureSeparatorEnabled,requestReadReceiptDefault:t.requestReadReceiptDefault,readReceiptResponse:t.readReceiptResponse,sessionTimeout:t.sessionTimeout,emailNotificationsEnabled:t.emailNotificationsEnabled,emailNotificationSound:t.emailNotificationSound,notificationSoundChoice:t.notificationSoundChoice,pushNotifyInboxOnly:t.pushNotifyInboxOnly,notificationMutes:t.notificationMutes,pushRelayUrl:t.pushRelayUrl,protocolOpenMode:t.protocolOpenMode,calendarNotificationsEnabled:t.calendarNotificationsEnabled,calendarNotificationSound:t.calendarNotificationSound,calendarInvitationParsingEnabled:t.calendarInvitationParsingEnabled,enableCalendarTasks:t.enableCalendarTasks,showTasksOnCalendar:t.showTasksOnCalendar,showBirthdayCalendar:t.showBirthdayCalendar,birthdayCalendarColor:t.birthdayCalendarColor,sharedCalendarColors:t.sharedCalendarColors,groupContactsByLetter:t.groupContactsByLetter,sortContactsByLastName:t.sortContactsByLastName,expandedFilterView:t.expandedFilterView,showTimeInMonthView:t.showTimeInMonthView,showWeekNumbers:t.showWeekNumbers,calendarFreeScroll:t.calendarFreeScroll,calendarHoverPreview:t.calendarHoverPreview,calendarLimitHours:t.calendarLimitHours,calendarDayStartHour:t.calendarDayStartHour,calendarDayEndHour:t.calendarDayEndHour,calendarHideNonWorkingDays:t.calendarHideNonWorkingDays,calendarWorkingDays:t.calendarWorkingDays,toolbarPosition:t.toolbarPosition,hideAccountSwitcher:t.hideAccountSwitcher,showRailAccountList:t.showRailAccountList,showAdvancedSettings:t.showAdvancedSettings,enableUnifiedMailbox:t.enableUnifiedMailbox,includeGroupInUnified:t.includeGroupInUnified,unifiedCrossAccount:t.unifiedCrossAccount,allMailFolderIds:t.allMailFolderIds,preferredIdentityIds:t.preferredIdentityIds,enableCrossUnreadView:t.enableCrossUnreadView,enableCrossStarredView:t.enableCrossStarredView,enableCrossAllView:t.enableCrossAllView,senderFavicons:t.senderFavicons,showAvatarsInJunk:t.showAvatarsInJunk,faviconUnreadBadge:t.faviconUnreadBadge,colorfulSidebarIcons:t.colorfulSidebarIcons,tintListRowsByTag:t.tintListRowsByTag,tintListRowsByAccount:t.tintListRowsByAccount,showAccountDot:t.showAccountDot,showFolderTotalCount:t.showFolderTotalCount,showSharedMailAccounts:t.showSharedMailAccounts,hiddenSharedMailAccounts:t.hiddenSharedMailAccounts,folderIcons:t.folderIcons,folderCountModes:t.folderCountModes,emailKeywords:t.emailKeywords,nestedTags:t.nestedTags,attachmentReminderEnabled:t.attachmentReminderEnabled,attachmentReminderKeywords:t.attachmentReminderKeywords,emptySubjectWarningEnabled:t.emptySubjectWarningEnabled,recipientMentionsEnabled:t.recipientMentionsEnabled,mentionAddsRecipientTo:t.mentionAddsRecipientTo,hideInlineImageAttachments:t.hideInlineImageAttachments,attachmentImagePreviewsEnabled:t.attachmentImagePreviewsEnabled,sidebarApps:t.sidebarApps,keepAppsLoaded:t.keepAppsLoaded,onboardingCompleted:t.onboardingCompleted,tourCompleted:t.tourCompleted,showOnboardingOnNewDevices:t.showOnboardingOnNewDevices,debugMode:t.debugMode,debugCategories:t.debugCategories,settingsSyncDisabled:t.settingsSyncDisabled,explicitSettings:t.explicitSettings,theme:o.f.getState().theme,themeChosen:o.f.getState().themeChosen,locale:a.getState().locale,...n?{templates:n.templates,deletedTemplateIds:n.deletedTemplateIds}:{},...i?{icalSubscriptions:e?.subscriptionOwner?i.icalSubscriptions.filter(t=>t.owner===e.subscriptionOwner):i.icalSubscriptions,deletedSubscriptionIds:i.deletedSubscriptionIds}:{}},null,2));return e?.forSync||b.D.onSettingsExport.emit({keys:Object.keys(JSON.parse(l))}),l},importSettings:(e,n)=>{try{let i=JSON.parse(e);if("object"!=typeof i||null===i)return!1;"string"!=typeof i.protocolOpenMode&&"string"==typeof i.protocolMailtoOpenMode&&(i.protocolOpenMode=i.protocolMailtoOpenMode);let c=[],u=(e,r)=>{t(r),c.push(e)};Object.keys(i).forEach(e=>{if(e in G){if("explicitSettings"===e||"subAddressDelimiter"===e&&!w(i[e]))return;if("sendDelaySeconds"===e&&![0,10,30,60].includes(i[e]))return void u(e,{sendDelaySeconds:0});if(("timeZone"!==e||"string"==typeof i[e])&&("allMailFolderIds"!==e||T(i[e]))&&("preferredIdentityIds"!==e||T(i[e]))&&("hiddenSharedMailAccounts"!==e||T(i[e]))){if("notificationMutes"===e)return void u(e,{notificationMutes:s(i[e])});if("messageListOrder"===e)return void u(e,{messageListOrder:(0,h.k)(i[e])});if(!("messageListOrderScope"===e&&"inbox"!==i[e]&&"all"!==i[e]||q.has(e))&&!(n?.keepCrossAccountViews&&W.has(e))){if(n?.serverAccountId&&("preferredIdentityIds"===e||"allMailFolderIds"===e||"hiddenSharedMailAccounts"===e)){let t=r()[e],o=T(t)?{...t}:{},a=i[e];Object.prototype.hasOwnProperty.call(a,n.serverAccountId)&&(o[n.serverAccountId]=a[n.serverAccountId]),u(e,{[e]:o});return}u(e,{[e]:i[e]})}}}});let f=new Set(c),g=Array.isArray(i.explicitSettings)?i.explicitSettings.filter(e=>"string"==typeof e):X(i);if(t({explicitSettings:[...new Set([...r().explicitSettings.filter(e=>!f.has(e)),...g.filter(e=>f.has(e))])]}),d(),l(),i.theme){let e="boolean"==typeof i.themeChosen?i.themeChosen:"system"!==i.theme;o.f.getState().setTheme(i.theme,{chosen:e})}return i.locale&&a.getState().setLocale(i.locale),N?.applySyncedState(i.templates,i.deletedTemplateIds,{merge:!!n?.serverAccountId}),U?.applySyncedState(i.icalSubscriptions,i.deletedSubscriptionIds,{merge:!!n?.serverAccountId,owner:n?.subscriptionOwner}),n?.serverAccountId||(i.theme&&c.push("theme"),i.locale&&c.push("locale"),void 0!==i.templates&&c.push("templates"),b.D.onSettingsImport.emit({keys:c})),!0}catch(e){return console.error("Failed to import settings:",e),!1}},setFolderIcon:(e,t)=>{r().updateSetting("folderIcons",{...r().folderIcons,[e]:t})},removeFolderIcon:e=>{let{[e]:t,...o}=r().folderIcons;r().updateSetting("folderIcons",o)},setSharedCalendarColor:(e,t)=>{r().updateSetting("sharedCalendarColors",{...r().sharedCalendarColors,[e]:t})},removeSharedCalendarColor:e=>{let{[e]:t,...o}=r().sharedCalendarColors;r().updateSetting("sharedCalendarColors",o)},addTrustedSender:e=>{let o=e.trim(),a=o.match(/^(.+?)\s*<([^>]+)>$/),n=(a?a[2]:o).toLowerCase().trim(),i=r().trustedSenders;i.includes(n)||(t({trustedSenders:[...i,n]}),b.D.onTrustedSenderChange.emit({email:n,trusted:!0}))},removeTrustedSender:e=>{let o=e.trim(),a=o.match(/^(.+?)\s*<([^>]+)>$/),n=(a?a[2]:o).toLowerCase().trim(),i=r().trustedSenders;i.includes(n)&&(t({trustedSenders:i.filter(e=>e!==n)}),b.D.onTrustedSenderChange.emit({email:n,trusted:!1}))},isSenderTrusted:e=>{let t=e.trim(),o=t.match(/^(.+?)\s*<([^>]+)>$/),a=(o?o[2]:t).toLowerCase().trim();return r().trustedSenders.includes(a)},addKeyword:e=>{let o=r().emailKeywords;o.some(t=>t.id===e.id)||t({emailKeywords:[...o,e]})},updateKeyword:(e,o)=>{t({emailKeywords:r().emailKeywords.map(t=>t.id===e?{...t,...o}:t)})},renameKeyword:(e,o)=>{t({emailKeywords:r().emailKeywords.map(t=>t.id===e?o:t)})},removeKeyword:e=>{t({emailKeywords:r().emailKeywords.filter(t=>t.id!==e)})},reorderKeywords:e=>{t({emailKeywords:e})},getKeywordById:e=>r().emailKeywords.find(t=>t.id===e),addSidebarApp:e=>{let t=r().sidebarApps;t.some(t=>t.id===e.id)||r().updateSetting("sidebarApps",[...t,e])},updateSidebarApp:(e,t)=>{r().updateSetting("sidebarApps",r().sidebarApps.map(r=>r.id===e?{...r,...t}:r))},removeSidebarApp:e=>{r().updateSetting("sidebarApps",r().sidebarApps.filter(t=>t.id!==e))},reorderSidebarApps:e=>{r().updateSetting("sidebarApps",e)},enableSync:(e,t)=>{let o=(0,g.e)(e,t);D===o?x("Settings sync stays off for",e,"- its settings could not be loaded"):(P(o),I=e,C=t,A=!0,v("Settings sync enabled for",e),M&&(M=!1,r().settingsSyncDisabled||E?.()))},flushSync:async()=>{$&&(clearTimeout($),$=null);let e=j;j=null,e&&await V(e)},disableSync:()=>{A=!1,I=null,C=null,$&&(clearTimeout($),$=null),j=null,v("Settings sync disabled")},loadFromServer:async(t,o)=>{let a=(0,g.e)(t,o),n=R(),l=null!==n&&n!==a,s=()=>(l&&(i(),P(null),D=a),!1);D=null;try{v("Loading settings from server for",t),M=!1;let n=await (0,c.i)("/api/settings",{headers:{"x-settings-username":t,"x-settings-server":o}});if(!n.ok){let e=await n.json().catch(()=>({}));return v("Settings fetch failed:",e.error||`status ${n.status}`),s()}let{settings:d}=await n.json(),{useAccountStore:u}=await e.A(383644),f=u.getState().accounts.length>1;if(!d)return v("No server settings found yet"),l&&i({keepCrossAccountViews:f}),P(a),M=B(null),!1;if(d&&"object"==typeof d)return l&&i({keepCrossAccountViews:f}),O=!0,r().importSettings(JSON.stringify(d),{serverAccountId:a,keepCrossAccountViews:f,subscriptionOwner:p(o,t)}),O=!1,P(a),M=B(d),v("Settings loaded from server successfully"),b.D.onSettingsSync.emit({direction:"pulled"}),!0;return!1}catch(e){return S("Failed to load settings from server:",e),O=!1,s()}},forgetSyncedSettings:()=>{null===R()||r().settingsSyncDisabled||(i(),P(null))}}},{name:"settings-storage",version:8,migrate:function(e,t){return t<2&&e.listDensity&&(e.density=e.listDensity,delete e.listDensity),[0,10,30,60].includes(e.sendDelaySeconds)||(e.sendDelaySeconds=0),t<3&&"string"!=typeof e.protocolOpenMode&&"string"==typeof e.protocolMailtoOpenMode&&(e.protocolOpenMode=e.protocolMailtoOpenMode),delete e.protocolMailtoOpenMode,t<4&&(e.dateFormat="smart"),(t<5||!T(e.allMailFolderIds))&&(e.allMailFolderIds={}),t<7&&(e.enableCrossUnreadView||e.enableCrossStarredView||e.enableCrossAllView?e.unifiedCrossAccount=!0:e.enableAllMailView&&(e.enableUnifiedMailbox=!0,e.enableCrossAllView=!0,e.unifiedCrossAccount=!1),delete e.enableAllMailView,"boolean"!=typeof e.unifiedCrossAccount&&(e.unifiedCrossAccount=!1),e.includeGroupInUnified=!0),(t<6||!T(e.preferredIdentityIds))&&(e.preferredIdentityIds={}),(t<8||!Array.isArray(e.explicitSettings))&&(e.explicitSettings=X(e)),e},onRehydrateStorage:()=>e=>{e&&(T(e.allMailFolderIds)||(e.allMailFolderIds={}),T(e.preferredIdentityIds)||(e.preferredIdentityIds={}),T(e.hiddenSharedMailAccounts)||(e.hiddenSharedMailAccounts={}),Array.isArray(e.explicitSettings)||(e.explicitSettings=[]),e.notificationMutes=s(e.notificationMutes),e.messageListOrder=(0,h.k)(e.messageListOrder),"inbox"!==e.messageListOrderScope&&"all"!==e.messageListOrderScope&&(e.messageListOrderScope="inbox"),ee(e.fontSize),eo(e.density,e.interfaceLayout),ea(e.interfaceLayout,e.density),en(e.animationsEnabled))}}));function ee(e){"u"<typeof document||document.documentElement.style.setProperty("--font-size-base",{small:"14px",medium:"16px",large:"18px"}[e])}let et={"extra-compact":{"--list-item-height":"auto","--density-item-py":"2px","--density-item-gap":"6px","--density-header-py":"4px","--density-card-p":"8px","--density-sidebar-py":"0px"},compact:{"--list-item-height":"auto","--density-item-py":"4px","--density-item-gap":"8px","--density-header-py":"6px","--density-card-p":"10px","--density-sidebar-py":"1px"},regular:{"--list-item-height":"48px","--density-item-py":"12px","--density-item-gap":"12px","--density-header-py":"12px","--density-card-p":"16px","--density-sidebar-py":"4px"},comfortable:{"--list-item-height":"64px","--density-item-py":"16px","--density-item-gap":"16px","--density-header-py":"16px","--density-card-p":"20px","--density-sidebar-py":"6px"}},er={"extra-compact":{...et["extra-compact"],"--list-item-height":"28px","--density-item-py":"4px"},compact:{...et.compact,"--list-item-height":"32px","--density-item-py":"6px"},regular:{...et.regular,"--list-item-height":"40px","--density-item-py":"10px"},comfortable:{...et.comfortable,"--list-item-height":"48px","--density-item-py":"14px"}};function eo(e,t){if("u"<typeof document)return;let r=document.documentElement;for(let[o,a]of Object.entries(("mountain-view"===t?er:et)[e]))r.style.setProperty(o,a)}function ea(e,t){"u">typeof document&&(document.documentElement.dataset.interfaceLayout=e,eo(t,e))}function en(e){if("u"<typeof document)return;let t=document.documentElement;e?(t.style.removeProperty("--transition-duration"),delete t.dataset.animations):(t.style.setProperty("--transition-duration","0s"),t.dataset.animations="off")}Q.subscribe((e,t)=>{e.emailKeywords!==t.emailKeywords&&JSON.stringify(e.emailKeywords)!==JSON.stringify(t.emailKeywords)&&b.D.onKeywordChange.emit({keywords:e.emailKeywords.map(e=>({id:e.id,name:e.label,color:e.color}))})});{let t=Q.getState();ee(t.fontSize),eo(t.density,t.interfaceLayout),ea(t.interfaceLayout,t.density),en(t.animationsEnabled);let r=t.emailNotificationsEnabled&&t.emailNotificationSound;f({sound:r}),Q.subscribe(e=>{let t=e.emailNotificationsEnabled&&e.emailNotificationSound;t!==r&&(r=t,f({sound:t}))}),n.f.subscribe((e,t)=>{e.policy!==t.policy&&Q.getState().applyAdminPolicy()});let i=()=>{A&&I&&C&&!O&&(j={username:I,serverUrl:C,settings:JSON.parse(Q.getState().exportSettings({forSync:!0,subscriptionOwner:p(C,I)}))},$&&clearTimeout($),$=setTimeout(async()=>{$=null;let e=j;if(j=null,e)try{await V(e)}catch(e){S("Settings sync error:",e)}},2e3))};E=i;let l=Q.getState().settingsSyncDisabled;Q.subscribe(()=>{let e=Q.getState().settingsSyncDisabled,t=e!==l;l=e,(!e||t)&&i()}),o.f.subscribe(i),a.subscribe(i),F=()=>{Q.getState().settingsSyncDisabled||i()},K=()=>{Q.getState().settingsSyncDisabled||i()},e.A(353132).catch(()=>{}),e.A(497214).catch(()=>{})}e.s(["O",0,[{id:"jmap",labelKey:"jmap"},{id:"calendar",labelKey:"calendar"},{id:"tasks",labelKey:"tasks"},{id:"auth",labelKey:"auth"},{id:"filters",labelKey:"filters"},{id:"email",labelKey:"email"},{id:"push",labelKey:"push"},{id:"contacts",labelKey:"contacts"}],"o",0,[{id:"delete",labelKey:"delete"},{id:"star",labelKey:"star"},{id:"markRead",labelKey:"mark_read"},{id:"archive",labelKey:"archive"},{id:"tag",labelKey:"tag"},{id:"spam",labelKey:"spam"}],"p",0,"gray","f",0,{"red-light":{dot:"bg-red-300",icon:"text-red-300",fill:"bg-red-300/10",border:"border-red-300/30",text:"text-red-600 dark:text-red-200",rowTint:"bg-red-50/60 dark:bg-red-950/20"},"orange-light":{dot:"bg-orange-300",icon:"text-orange-300",fill:"bg-orange-300/10",border:"border-orange-300/30",text:"text-orange-600 dark:text-orange-200",rowTint:"bg-orange-50/60 dark:bg-orange-950/20"},"amber-light":{dot:"bg-amber-300",icon:"text-amber-300",fill:"bg-amber-300/10",border:"border-amber-300/30",text:"text-amber-600 dark:text-amber-200",rowTint:"bg-amber-50/60 dark:bg-amber-950/20"},"yellow-light":{dot:"bg-yellow-300",icon:"text-yellow-300",fill:"bg-yellow-300/10",border:"border-yellow-300/30",text:"text-yellow-600 dark:text-yellow-200",rowTint:"bg-yellow-50/60 dark:bg-yellow-950/20"},"lime-light":{dot:"bg-lime-300",icon:"text-lime-300",fill:"bg-lime-300/10",border:"border-lime-300/30",text:"text-lime-600 dark:text-lime-200",rowTint:"bg-lime-50/60 dark:bg-lime-950/20"},"green-light":{dot:"bg-green-300",icon:"text-green-300",fill:"bg-green-300/10",border:"border-green-300/30",text:"text-green-600 dark:text-green-200",rowTint:"bg-green-50/60 dark:bg-green-950/20"},"teal-light":{dot:"bg-teal-300",icon:"text-teal-300",fill:"bg-teal-300/10",border:"border-teal-300/30",text:"text-teal-600 dark:text-teal-200",rowTint:"bg-teal-50/60 dark:bg-teal-950/20"},"cyan-light":{dot:"bg-cyan-300",icon:"text-cyan-300",fill:"bg-cyan-300/10",border:"border-cyan-300/30",text:"text-cyan-600 dark:text-cyan-200",rowTint:"bg-cyan-50/60 dark:bg-cyan-950/20"},"blue-light":{dot:"bg-blue-300",icon:"text-blue-300",fill:"bg-blue-300/10",border:"border-blue-300/30",text:"text-blue-600 dark:text-blue-200",rowTint:"bg-blue-50/60 dark:bg-blue-950/20"},"indigo-light":{dot:"bg-indigo-300",icon:"text-indigo-300",fill:"bg-indigo-300/10",border:"border-indigo-300/30",text:"text-indigo-600 dark:text-indigo-200",rowTint:"bg-indigo-50/60 dark:bg-indigo-950/20"},"purple-light":{dot:"bg-purple-300",icon:"text-purple-300",fill:"bg-purple-300/10",border:"border-purple-300/30",text:"text-purple-600 dark:text-purple-200",rowTint:"bg-purple-50/60 dark:bg-purple-950/20"},"pink-light":{dot:"bg-pink-300",icon:"text-pink-300",fill:"bg-pink-300/10",border:"border-pink-300/30",text:"text-pink-600 dark:text-pink-200",rowTint:"bg-pink-50/60 dark:bg-pink-950/20"},"gray-light":{dot:"bg-gray-300",icon:"text-gray-300",fill:"bg-gray-300/10",border:"border-gray-300/30",text:"text-gray-600 dark:text-gray-200",rowTint:"bg-gray-50/60 dark:bg-gray-950/20"},red:{dot:"bg-red-500",icon:"text-red-500",fill:"bg-red-500/10",border:"border-red-500/30",text:"text-red-700 dark:text-red-300",rowTint:"bg-red-50 dark:bg-red-950/30"},orange:{dot:"bg-orange-500",icon:"text-orange-500",fill:"bg-orange-500/10",border:"border-orange-500/30",text:"text-orange-700 dark:text-orange-300",rowTint:"bg-orange-50 dark:bg-orange-950/30"},amber:{dot:"bg-amber-500",icon:"text-amber-500",fill:"bg-amber-500/10",border:"border-amber-500/30",text:"text-amber-700 dark:text-amber-300",rowTint:"bg-amber-50 dark:bg-amber-950/30"},yellow:{dot:"bg-yellow-500",icon:"text-yellow-500",fill:"bg-yellow-500/10",border:"border-yellow-500/30",text:"text-yellow-700 dark:text-yellow-300",rowTint:"bg-yellow-50 dark:bg-yellow-950/30"},lime:{dot:"bg-lime-500",icon:"text-lime-500",fill:"bg-lime-500/10",border:"border-lime-500/30",text:"text-lime-700 dark:text-lime-300",rowTint:"bg-lime-50 dark:bg-lime-950/30"},green:{dot:"bg-green-500",icon:"text-green-500",fill:"bg-green-500/10",border:"border-green-500/30",text:"text-green-700 dark:text-green-300",rowTint:"bg-green-50 dark:bg-green-950/30"},teal:{dot:"bg-teal-500",icon:"text-teal-500",fill:"bg-teal-500/10",border:"border-teal-500/30",text:"text-teal-700 dark:text-teal-300",rowTint:"bg-teal-50 dark:bg-teal-950/30"},cyan:{dot:"bg-cyan-500",icon:"text-cyan-500",fill:"bg-cyan-500/10",border:"border-cyan-500/30",text:"text-cyan-700 dark:text-cyan-300",rowTint:"bg-cyan-50 dark:bg-cyan-950/30"},blue:{dot:"bg-blue-500",icon:"text-blue-500",fill:"bg-blue-500/10",border:"border-blue-500/30",text:"text-blue-700 dark:text-blue-300",rowTint:"bg-blue-50 dark:bg-blue-950/30"},indigo:{dot:"bg-indigo-500",icon:"text-indigo-500",fill:"bg-indigo-500/10",border:"border-indigo-500/30",text:"text-indigo-700 dark:text-indigo-300",rowTint:"bg-indigo-50 dark:bg-indigo-950/30"},purple:{dot:"bg-purple-500",icon:"text-purple-500",fill:"bg-purple-500/10",border:"border-purple-500/30",text:"text-purple-700 dark:text-purple-300",rowTint:"bg-purple-50 dark:bg-purple-950/30"},pink:{dot:"bg-pink-500",icon:"text-pink-500",fill:"bg-pink-500/10",border:"border-pink-500/30",text:"text-pink-700 dark:text-pink-300",rowTint:"bg-pink-50 dark:bg-pink-950/30"},gray:{dot:"bg-gray-500",icon:"text-gray-500",fill:"bg-gray-500/10",border:"border-gray-500/30",text:"text-gray-700 dark:text-gray-300",rowTint:"bg-gray-50 dark:bg-gray-950/30"},"red-dark":{dot:"bg-red-700",icon:"text-red-700",fill:"bg-red-700/10",border:"border-red-700/30",text:"text-red-800 dark:text-red-400",rowTint:"bg-red-100 dark:bg-red-950/50"},"orange-dark":{dot:"bg-orange-700",icon:"text-orange-700",fill:"bg-orange-700/10",border:"border-orange-700/30",text:"text-orange-800 dark:text-orange-400",rowTint:"bg-orange-100 dark:bg-orange-950/50"},"amber-dark":{dot:"bg-amber-700",icon:"text-amber-700",fill:"bg-amber-700/10",border:"border-amber-700/30",text:"text-amber-800 dark:text-amber-400",rowTint:"bg-amber-100 dark:bg-amber-950/50"},"yellow-dark":{dot:"bg-yellow-700",icon:"text-yellow-700",fill:"bg-yellow-700/10",border:"border-yellow-700/30",text:"text-yellow-800 dark:text-yellow-400",rowTint:"bg-yellow-100 dark:bg-yellow-950/50"},"lime-dark":{dot:"bg-lime-700",icon:"text-lime-700",fill:"bg-lime-700/10",border:"border-lime-700/30",text:"text-lime-800 dark:text-lime-400",rowTint:"bg-lime-100 dark:bg-lime-950/50"},"green-dark":{dot:"bg-green-700",icon:"text-green-700",fill:"bg-green-700/10",border:"border-green-700/30",text:"text-green-800 dark:text-green-400",rowTint:"bg-green-100 dark:bg-green-950/50"},"teal-dark":{dot:"bg-teal-700",icon:"text-teal-700",fill:"bg-teal-700/10",border:"border-teal-700/30",text:"text-teal-800 dark:text-teal-400",rowTint:"bg-teal-100 dark:bg-teal-950/50"},"cyan-dark":{dot:"bg-cyan-700",icon:"text-cyan-700",fill:"bg-cyan-700/10",border:"border-cyan-700/30",text:"text-cyan-800 dark:text-cyan-400",rowTint:"bg-cyan-100 dark:bg-cyan-950/50"},"blue-dark":{dot:"bg-blue-700",icon:"text-blue-700",fill:"bg-blue-700/10",border:"border-blue-700/30",text:"text-blue-800 dark:text-blue-400",rowTint:"bg-blue-100 dark:bg-blue-950/50"},"indigo-dark":{dot:"bg-indigo-700",icon:"text-indigo-700",fill:"bg-indigo-700/10",border:"border-indigo-700/30",text:"text-indigo-800 dark:text-indigo-400",rowTint:"bg-indigo-100 dark:bg-indigo-950/50"},"purple-dark":{dot:"bg-purple-700",icon:"text-purple-700",fill:"bg-purple-700/10",border:"border-purple-700/30",text:"text-purple-800 dark:text-purple-400",rowTint:"bg-purple-100 dark:bg-purple-950/50"},"pink-dark":{dot:"bg-pink-700",icon:"text-pink-700",fill:"bg-pink-700/10",border:"border-pink-700/30",text:"text-pink-800 dark:text-pink-400",rowTint:"bg-pink-100 dark:bg-pink-950/50"},"gray-dark":{dot:"bg-gray-700",icon:"text-gray-700",fill:"bg-gray-700/10",border:"border-gray-700/30",text:"text-gray-800 dark:text-gray-400",rowTint:"bg-gray-100 dark:bg-gray-950/50"}},"a",0,[["red-light","orange-light","amber-light","yellow-light","lime-light","green-light","teal-light","cyan-light","blue-light","indigo-light","purple-light","pink-light","gray-light"],["red","orange","amber","yellow","lime","green","teal","cyan","blue","indigo","purple","pink","gray"],["red-dark","orange-dark","amber-dark","yellow-dark","lime-dark","green-dark","teal-dark","cyan-dark","blue-dark","indigo-dark","purple-dark","pink-dark","gray-dark"]],"N",0,function(e,t){return"mountain-view"===t?"focus":e},"d",0,function(e){return e.visibility??"show"},"v",0,function(e){let{messageListOrder:t,messageListOrderScope:r}=Q.getState();return(0,h.G)(t,r,e)},"b",0,function(e,t){U=e,t(()=>K?.())},"z",0,function(e,t){N=e,t(()=>F?.())},"k",0,Q],792726)},669922,384641,506962,804775,605526,250681,e=>{var t=e.i(768834),r=e.i(579473);let o="plugin-code",a="theme-css",n="theme-skin",i="previews",l="file-plugin";function s(){return new Promise((e,t)=>{let r=indexedDB.open("bulwark-plugins",3);r.onupgradeneeded=()=>{let e=r.result;e.objectStoreNames.contains(o)||e.createObjectStore(o),e.objectStoreNames.contains(a)||e.createObjectStore(a),e.objectStoreNames.contains(n)||e.createObjectStore(n),e.objectStoreNames.contains(i)||e.createObjectStore(i),e.objectStoreNames.contains(l)||e.createObjectStore(l)},r.onsuccess=()=>{let t=r.result;t.onversionchange=()=>t.close(),e(t)},r.onerror=()=>t(r.error),r.onblocked=()=>t(Error("Plugin storage database is blocked by another open tab. Close other Bulwark tabs and try again."))})}async function d(e,t,r){let o=await s();return new Promise((a,n)=>{let i=o.transaction(e,"readwrite");i.objectStore(e).put(r,t),i.oncomplete=()=>{o.close(),a()},i.onerror=()=>{o.close(),n(i.error)}})}async function c(e,t){let r=await s();return new Promise((o,a)=>{let n=r.transaction(e,"readonly"),i=n.objectStore(e).get(t);i.onsuccess=()=>o(i.result??null),i.onerror=()=>a(i.error),n.oncomplete=()=>r.close(),n.onerror=()=>r.close()})}async function u(e,t){let r=await s();return new Promise((o,a)=>{let n=r.transaction(e,"readwrite");n.objectStore(e).delete(t),n.oncomplete=()=>{r.close(),o()},n.onerror=()=>{r.close(),a(n.error)}})}async function f(e){let t=await s();return new Promise((r,o)=>{let a=t.transaction(e,"readwrite");a.objectStore(e).clear(),a.oncomplete=()=>{t.close(),r()},a.onerror=()=>{t.close(),o(a.error)}})}let b={async saveCode(e,t){await d(o,e,t)},getCode:async e=>c(o,e),async deleteCode(e){await u(o,e)},async saveThemeCSS(e,t){await d(a,e,t)},getThemeCSS:async e=>c(a,e),async deleteThemeCSS(e){await u(a,e)},async saveThemeSkin(e,t){await d(n,e,t)},getThemeSkin:async e=>c(n,e),async deleteThemeSkin(e){await u(n,e)},async savePreview(e,t){await d(i,e,t)},getPreview:async e=>c(i,e),async deletePreview(e){await u(i,e)}};e.s(["f",0,{async saveFile(e,t){await d(l,e,t)},getFile:async e=>c(l,e),async deleteFile(e){await u(l,e)},async clearFiles(){await f(l)}},"L",0,b],384641);let g=["email:read","email:write","email:send","crypto:full","email:raw-send","email:blob-read","email:blob-write","email:render-takeover","compose:open","compose:read","compose:write","calendar:read","calendar:write","contacts:read","contacts:write","files:read","files:write","identity:read","identity:write","filters:read","filters:write","tasks:read","tasks:write","templates:read","templates:write","vacation:read","vacation:write","settings:read","settings:write","security:read","auth:observe","auth:emit","account:read","http:post","http:fetch","ui:observe","ui:toolbar","ui:app-top-banner","ui:email-banner","ui:email-footer","ui:contact-cryptokeys","ui:email-details","ui:download-file","ui:notifications","ui:message-list-tabs","ui:composer-toolbar","ui:composer-sidebar","ui:sidebar-widget","ui:settings-section","ui:context-menu","ui:navigation-rail","ui:keyboard","ui:calendar-action","ui:admin-page","ui:message-list","ui:contacts","ui:tasks","ui:files","ui:commands","ui:app-page","http:proxy","admin:config","app:lifecycle"],p=["smime:read"],m=new Set([".js",".mjs",".css",".json",".png",".svg",".woff2",".jpg",".jpeg",".webp"]),h=[/@import\b/i,/url\s*\(\s*(?!['"]?\s*#)/i,/image-set\s*\(/i,/expression\s*\(/i,/javascript\s*:/i,/-moz-binding/i,/behavior\s*:/i];e.s(["X",0,m,"_",0,g,"k",0,p,"O",0,h,"l",0,["ui:observe","app:lifecycle"],"U",0,8,"m",0,5242880,"N",0,2097152,"I",0,262144],506962);var y=e.i(264958);let k="active-theme",w="active-theme-skin",v="data-theme-skin";function x(e){return e.replace(/\/\*[\s\S]*?\*\//g," ")}function S(e,t){var r;let o;if(o=x(r=e).replace(/\\([0-9a-fA-F]{1,6})[ \t\n\r\f]?|\\([^\n\r\f0-9a-fA-F])/g,(e,t,r)=>{if(void 0===t)return r??"";let o=parseInt(t,16);return o>0&&o<=1114111?String.fromCodePoint(o):"�"}),h.some(e=>e.test(o)&&!e.test(r)))return{css:"",warnings:[`${t}removed the stylesheet: it hides a disallowed pattern behind CSS escapes`]};let a=[],n=e;for(let e of h)e.test(n)&&(a.push(`${t}removed disallowed pattern: ${e.source}`),n=function(e,t){let r,o="",a=0;for(;null!==(r=t.exec(e));){let n=r.index+r[0].length;r[0].endsWith("(")&&(n=function(e,t){let r=1;for(let o=t;o<e.length;o++){let t=e[o];if("\\"===t)o++;else if('"'===t||"'"===t)for(o++;o<e.length&&e[o]!==t;o++)"\\"===e[o]&&o++;else if("("===t)r++;else if(")"===t&&0==--r)return o+1;else if(";"===t||"}"===t||"{"===t)return o}return e.length}(e,n)),o+=e.slice(a,r.index)+"/* [removed] */",a=n,t.lastIndex=Math.max(n,r.index+1)}return o+e.slice(a)}(n,RegExp(e.source,"gi")));return{css:n,warnings:a}}function T(e){var t;let r,o=S(e,""),a=(t=o.css,r=[],{css:function e(t,r){let o=[],a=0;for(;a<t.length;){let n=t.indexOf("{",a),i=t.indexOf(";",a);if(-1===n||-1!==i&&i<n){let e=-1===i?t.length:i+1,o=t.slice(a,e).trim();o&&";"!==o&&r.push(`Removed "${o.slice(0,60)}" - themes only set :root and .dark variables`),a=e;continue}let l=function(e,t){let r=1;for(let o=t;o<e.length;o++){let t=e[o];if("\\"===t)o++;else if('"'===t||"'"===t)for(o++;o<e.length&&e[o]!==t;o++)"\\"===e[o]&&o++;else if("{"===t)r++;else if("}"===t&&0==--r)return o}return -1}(t,n+1);if(-1===l){r.push("Removed an unterminated rule");break}let s=t.slice(a,n).trim(),d=t.slice(n+1,l);a=l+1,I.test(s)?o.push(`${s} {${d}}`):C.test(s)?o.push(`${s} {${e(d,r)}}`):s.split(",").every(e=>A.has(e.trim()))&&!d.includes("{")?o.push(`${s} {${d}}`):r.push(`Removed rule for "${s.slice(0,60)}" - themes only set :root and .dark variables`)}return o.join("\n")}(x(t),r),warnings:r});return{css:a.css,warnings:[...o.warnings,...a.warnings]}}let A=new Set([":root",".dark"]),I=/^@(?:-webkit-)?keyframes\b|^@font-face\b/i,C=/^@(?:media|supports)\b/i;function $(e){if("u"<typeof document)return;let t=document.getElementById(k);t||((t=document.createElement("style")).id=k,document.head.appendChild(t)),t.textContent=e,(0,y.o)()}function j(){if("u"<typeof document)return;let e=document.getElementById(k);e&&e.remove(),(0,y.o)()}function O(e,t){if("u"<typeof document)return;let r=document.getElementById(w);r||((r=document.createElement("style")).id=w,document.head.appendChild(r)),r.textContent=e,document.body&&document.body.setAttribute(v,t),(0,y.o)()}function M(){if("u"<typeof document)return;let e=document.getElementById(w);e&&e.remove(),document.body&&document.body.removeAttribute(v),(0,y.o)()}function E(e){let t=S(e,"Skin: "),r=t.warnings,o=t.css;return{css:o=o.replace(/@(charset|namespace)\b[^;]*;?/gi,()=>(r.push("Skin: removed @charset/@namespace directive"),"/* [removed] */")),warnings:r}}var D=e.i(247167);let L=/^[a-z][a-z0-9-]{0,39}$/,R=new Set(["host","cookie","content-length","content-type","transfer-encoding","connection","origin","referer","forwarded","te","upgrade","keep-alive","proxy-authorization"]),P=/^[A-Za-z0-9][A-Za-z0-9-]{0,63}$/;var N=e.i(871315);let F={transparent:"rgba(0,0,0,0)",black:"#000000",white:"#ffffff",red:"#ff0000",green:"#008000",blue:"#0000ff",yellow:"#ffff00",cyan:"#00ffff",magenta:"#ff00ff",gray:"#808080",grey:"#808080",silver:"#c0c0c0",maroon:"#800000",olive:"#808000",lime:"#00ff00",aqua:"#00ffff",teal:"#008080",navy:"#000080",fuchsia:"#ff00ff",purple:"#800080"};function z(e){if(!e||"string"!=typeof e)return null;let t=e.trim().toLowerCase();if("inherit"===t||"currentcolor"===t)return null;if(F[t])return z(F[t]);if("transparent"===t)return{r:0,g:0,b:0,a:0};let r=t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(r){let e=r[1];return 3===e.length?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16)}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16)}}let o=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);if(o){let e=parseInt(o[1],10),t=parseInt(o[2],10),r=parseInt(o[3],10),a=o[4]?parseFloat(o[4]):void 0;return e>255||t>255||r>255||e<0||t<0||r<0||void 0!==a&&(a<0||a>1)?null:{r:e,g:t,b:r,a}}let a=t.match(/^hsla?\((\d+),\s*([\d.]+)%,\s*([\d.]+)%(?:,\s*([\d.]+))?\)$/);if(a){let e=parseInt(a[1],10)/360,t=parseFloat(a[2])/100,r=parseFloat(a[3])/100,o=a[4]?parseFloat(a[4]):void 0,n=(e,t,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e,i=r<.5?r*(1+t):r+t-r*t,l=2*r-i;return{r:Math.round(255*n(l,i,e+1/3)),g:Math.round(255*n(l,i,e)),b:Math.round(255*n(l,i,e-1/3)),a:o}}return null}function B(e,t,r){let[o,a,n]=[e,t,r].map(e=>{let t=e/255;return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)});return .2126*o+.7152*a+.0722*n}e.s(["G",0,B,"h",0,z,"i",0,function(e){let t=z(e);return t?1.05/(B(t.r,t.g,t.b)+.05)>=3?"#ffffff":"#111827":"#ffffff"}],804775);let U=[["primary","primary-foreground"],["secondary","secondary-foreground"],["muted","muted-foreground"],["accent","accent-foreground"],["destructive","destructive-foreground"],["popover","popover-foreground"],["card","card-foreground"],["sidebar","sidebar-foreground"],["success","success-foreground"],["warning","warning-foreground"],["info","info-foreground"]];function K(e){let t=z(e);return t&&B(t.r,t.g,t.b)>=.55?"#0f172a":"#ffffff"}let V=["color-","font-","radius-","density-"];function H(e,t){let r=[],o={...e};if(t){for(let[e,t]of U)o[e]&&!o[t]&&(o[t]=K(o[e]));o.background&&!o.foreground&&(o.foreground=K(o.background))}let a=[];for(let[e,t]of Object.entries(o))if("string"==typeof t&&t.trim()){if(!q.test(e)){r.push(`Token "${e}" dropped - invalid key (only [a-z0-9-] allowed)`);continue}if(!W(t)){r.push(`Token "${e}" dropped - value contains unsafe characters`);continue}a.push(`  ${function(e){return e.startsWith("--")?e:V.some(t=>e.startsWith(t))?`--${e}`:`--color-${e}`}(e)}: ${t.trim()};`)}return{lines:a,warnings:r}}let q=/^(--)?[a-z][a-z0-9-]*$/;function W(e){return!(/[{}<>]/.test(e)||e.includes(";")||e.includes("\\")||/url\s*\(|image-set\s*\(/i.test(e)||/expression\s*\(/i.test(e)||/-moz-binding/i.test(e)||/javascript\s*:/i.test(e))}let G={compact:{"--density-row-height":"28px","--density-control-height":"28px","--density-spacing-1":"2px","--density-spacing-2":"4px","--density-spacing-3":"6px"},normal:{"--density-row-height":"36px","--density-control-height":"32px","--density-spacing-1":"4px","--density-spacing-2":"8px","--density-spacing-3":"12px"},touch:{"--density-row-height":"44px","--density-control-height":"40px","--density-spacing-1":"6px","--density-spacing-2":"12px","--density-spacing-3":"18px"}};function Z(e){return 2===e.apiVersion||!!e.tokens||!!e.extends||!!e.derive||!!e.density||!!e.radii||!!e.typography}let _=/^https:\/\/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)(?:\.(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?))*\.(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)(?::[0-9]{1,5})?$/i;function J(e){if(!Array.isArray(e))return[];let t=new Set,r=[];for(let o of e){if(!(!("string"!=typeof o||o.length>200||!_.test(o)||/[\s'"`;,()]/.test(o))&&1))continue;let e=o.toLowerCase();t.has(e)||(t.add(e),r.push(o))}return r}function Y(e){if(!Array.isArray(e))return[];let t=new Set,r=[];for(let o of e)!("string"!=typeof o||0===o.length||o.length>200||!o.startsWith("/api/")||!/^\/api\/[A-Za-z0-9._-]+/.test(o)||o.includes("..")||/[\s'"`;,()?#]/.test(o))&&/^[/A-Za-z0-9._-]+$/.test(o)&&1&&(t.has(o)||(t.add(o),r.push(o)));return r}let X=/^[a-z0-9][a-z0-9-]*[a-z0-9]$/;class Q extends Error{}async function ee(e,t){let r,o=e instanceof Uint8Array?e:new Uint8Array(e),a="theme"===t?2097152:5242880;if(o.byteLength>a)throw new Q(`${"theme"===t?"Theme":"Plugin"} ZIP exceeds ${Math.round(a/1048576)} MB size limit`);try{r=await N.default.loadAsync(o)}catch{throw new Q("Invalid ZIP file")}let n=Object.keys(r.files);if(n.length>200)throw new Q(`ZIP has ${n.length} entries; at most 200 are allowed`);return{zip:r,root:function(e){let t=Object.keys(e.files),r=new Set(t.map(e=>e.split("/")[0]));if(1===r.size){let o=[...r][0];if(e.files[o+"/"]||t.some(e=>e.startsWith(o+"/")))return o+"/"}return""}(r)}}async function et(e,t,r=0x1400000){let o=e.zip.file(e.root+t);return!o||o.dir?null:new Promise((e,a)=>{let n=[],i=0,l=!1,s=o.internalStream("uint8array");s.on("data",e=>{if(!l){if((i+=e.byteLength)>r){l=!0,s.pause(),a(new Q(`${t} is larger than ${Math.round(r/1024)} KB once unpacked`));return}n.push(e)}}).on("error",e=>{l||(l=!0,a(new Q(`Could not read ${t}: ${e.message}`)))}).on("end",()=>{if(l)return;l=!0;let t=new Uint8Array(i),r=0;for(let e of n)t.set(e,r),r+=e.byteLength;e(t)}).resume()})}async function er(e,t,r=0x1400000){let o=await et(e,t,r);return null===o?null:new TextDecoder("utf-8").decode(o)}async function eo(e){let t,r=await er(e,"manifest.json",524288);if(null===r)throw new Q("Missing manifest.json");try{t=JSON.parse(r)}catch{throw new Q("Invalid manifest.json (not valid JSON)")}if(!t||"object"!=typeof t||Array.isArray(t))throw new Q("manifest.json must be a JSON object");return t}let ea=["ui-extension","sidebar-app","hook"],en=new Set(g);function ei(e,t,r,o=200){let a=e[t];return"string"!=typeof a||""===a.trim()?(r.push(`Missing or invalid "${t}"`),""):(a.length>o&&r.push(`"${t}" is longer than ${o} characters`),a)}function el(e,t,r,o=2e3){let a=e[t];if(void 0!==a)return"string"!=typeof a?void r.push(`"${t}" must be a string`):(a.length>o&&r.push(`"${t}" is longer than ${o} characters`),a)}let es=/^\d+\.\d+\.\d+(?:[-+][0-9A-Za-z.-]+)?$/,ed=new Set(["string","secret","boolean","number","select"]);function ec(e,t,r,o,a){let n=e[t];if(void 0===n)return;if(!Array.isArray(n))return void o.push(`"${t}" must be a list`);let i=r(n),l=n.filter(e=>"string"!=typeof e||!i.includes(e));return l.length>0&&a.push(`Ignored invalid ${t}: ${l.map(String).join(", ")}`),i.length>0?i:void 0}let eu=[{pattern:/\beval\s*\(/,label:"eval()"},{pattern:/\bnew\s+Function\s*\(/,label:"new Function()"},{pattern:/document\.cookie/,label:"document.cookie"},{pattern:/document\.write/,label:"document.write"},{pattern:/innerHTML\s*=/,label:"innerHTML assignment"}];async function ef(e,t){let r=new TextEncoder().encode(`${function e(t){if(Array.isArray(t))return`[${t.map(e).join(",")}]`;if(t&&"object"==typeof t){let r=Object.entries(t).filter(([,e])=>void 0!==e).sort(([e],[t])=>e<t?-1:+(e>t));return`{${r.map(([t,r])=>`${JSON.stringify(t)}:${e(r)}`).join(",")}}`}return JSON.stringify(t)}(e)}
${t}`);return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",r)),e=>e.toString(16).padStart(2,"0")).join("")}async function eb(e,t={}){let r=await ee(e,"plugin"),o=function(e,t={}){let r,o=[],a=[],n=ei(e,"id",o,64);n&&!X.test(n)&&o.push("ID must be lowercase alphanumeric with hyphens, min 2 chars");let i=ei(e,"name",o,100),l=ei(e,"version",o,64);l&&!es.test(l)&&o.push('"version" must look like 1.2.3');let s=ei(e,"author",o,200),d=el(e,"description",o)??"",c=e.type;ea.includes(c)||o.push(`Invalid type "${String(e.type)}". Must be one of: ${ea.join(", ")}`),void 0!==e.tier&&("untrusted"!==e.tier&&"privileged"!==e.tier?o.push('"tier" must be "untrusted" or "privileged"'):r=e.tier);let u="string"==typeof e.entrypoint&&e.entrypoint?e.entrypoint:"index.js";!(u.startsWith("/")||u.includes("\\")||u.split("/").some(e=>".."===e||"."===e||""===e))&&/\.(m?js)$/.test(u)&&u.length<=200||o.push('"entrypoint" must be a .js file inside the package');let f=[];if(void 0!==e.permissions)if(!Array.isArray(e.permissions)||e.permissions.some(e=>"string"!=typeof e))o.push('"permissions" must be a list of strings');else{let t=(f=[...new Set(e.permissions)]).filter(e=>p.includes(e));t.length>0&&(a.push(`Ignored permissions that no longer grant anything: ${t.join(", ")}`),f=f.filter(e=>!p.includes(e)));let r=f.filter(e=>!en.has(e));r.length>0&&o.push(`Unknown permissions: ${r.join(", ")} (this Bulwark version does not offer them)`)}"privileged"!==r||f.includes("crypto:full")||o.push('A privileged plugin must request the "crypto:full" permission');let b=el(e,"minAppVersion",o,32);void 0===b||es.test(b)||o.push('"minAppVersion" must look like 1.2.3'),b&&t.appVersion&&es.test(t.appVersion)&&0>function(e,t){let r=e.split(/[-+]/)[0].split(".").map(e=>parseInt(e,10)||0),o=t.split(/[-+]/)[0].split(".").map(e=>parseInt(e,10)||0);for(let e=0;e<Math.max(r.length,o.length);e++){let t=(r[e]??0)-(o[e]??0);if(0!==t)return t<0?-1:1}return 0}(t.appVersion,b)&&o.push(`Needs Bulwark ${b} or later (this is ${t.appVersion})`);let g=function(e,t){if(void 0===e)return;if(!e||"object"!=typeof e||Array.isArray(e))return void t.push('"settingsSchema" must be an object');let r={};for(let[o,a]of Object.entries(e)){let e=`settingsSchema.${o}`;if(!/^[A-Za-z][A-Za-z0-9_]{0,63}$/.test(o)){t.push(`${e}: key must be letters, digits and _`);continue}if(!a||"object"!=typeof a||Array.isArray(a)){t.push(`${e} must be an object`);continue}let n=a.type;if("boolean"!==n&&"string"!==n&&"number"!==n&&"select"!==n){t.push(`${e}.type must be boolean, string, number or select`);continue}if("string"!=typeof a.label||!a.label){t.push(`${e}.label is required`);continue}if(void 0!==a.description&&"string"!=typeof a.description){t.push(`${e}.description must be a string`);continue}let i={type:n,label:a.label,default:a.default};if("string"==typeof a.description&&(i.description=a.description),"select"===n){if(!Array.isArray(a.options)||0===a.options.length||a.options.some(e=>"string"!=typeof e)){t.push(`${e}.options must be a non-empty list of strings`);continue}if(i.options=a.options,!i.options.includes(a.default)){t.push(`${e}.default must be one of its options`);continue}}else if("boolean"===n){if("boolean"!=typeof a.default){t.push(`${e}.default must be true or false`);continue}}else if("string"===n){if("string"!=typeof a.default){t.push(`${e}.default must be a string`);continue}}else if("number"===n){for(let r of["min","max"])void 0===a[r]||"number"==typeof a[r]&&Number.isFinite(a[r])?"number"==typeof a[r]&&(i[r]=a[r]):t.push(`${e}.${r} must be a number`);if("number"!=typeof a.default||!Number.isFinite(a.default)){t.push(`${e}.default must be a number`);continue}if(void 0!==i.min&&a.default<i.min||void 0!==i.max&&a.default>i.max){t.push(`${e}.default is outside min/max`);continue}}r[o]=i}return r}(e.settingsSchema,o),m=function(e,t){if(void 0===e)return;if(!e||"object"!=typeof e||Array.isArray(e))return void t.push('"configSchema" must be an object');let r={};for(let[o,a]of Object.entries(e)){let e=`configSchema.${o}`;if(!/^[A-Za-z][A-Za-z0-9_]{0,63}$/.test(o)){t.push(`${e}: key must be letters, digits and _`);continue}if(!a||"object"!=typeof a||Array.isArray(a)||!ed.has(a.type)||"string"!=typeof a.label){t.push(`${e} needs a type (string, secret, boolean, number, select) and a label`);continue}if("select"===a.type&&(!Array.isArray(a.options)||a.options.some(e=>!e||"string"!=typeof e.value))){t.push(`${e}.options must be a list of { label, value }`);continue}r[o]=a}return r}(e.configSchema,o),h=function(e,t){if(void 0===e)return;if(!e||"object"!=typeof e||Array.isArray(e))return void t.push('"locales" must be an object of locale → { key: text }');let r=Object.entries(e);if(r.length>64)return void t.push('"locales" has more than 64 languages');let o={};for(let[e,a]of r){if(!/^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(e)){t.push(`locales: "${e}" is not a language tag`);continue}if(!a||"object"!=typeof a||Array.isArray(a)){t.push(`locales.${e} must be an object`);continue}let r=Object.entries(a);if(r.length>2e3||r.some(([,e])=>"string"!=typeof e)){t.push(`locales.${e} must map at most 2000 keys to strings`);continue}o[e]=a}return o}(e.locales,o),y=ec(e,"frameOrigins",J,o,a),k=ec(e,"httpOrigins",J,o,a),w=ec(e,"apiPostPaths",Y,o,a),v=function(e,t){if(void 0===e)return{errors:[]};if(!e||"object"!=typeof e||Array.isArray(e))return{errors:["credentials must be an object"]};let r=Object.entries(e);if(r.length>8)return{errors:["At most 8 credentials"]};let o=[],a={};for(let[e,n]of r){let r,i=`credentials.${e}`;if(!L.test(e)){o.push(`${i}: invalid id`);continue}if(!n||"object"!=typeof n){o.push(`${i} must be an object`);continue}if("string"!=typeof n.label||!n.label.trim()||n.label.length>80){o.push(`${i}.label is required (max 80 characters)`);continue}let l=function(e){if(!e||"object"!=typeof e)return null;switch(e.type){case"none":case"bearer":case"basic":return{type:e.type};case"header":if("string"!=typeof e.name||!P.test(e.name)||R.has(e.name.toLowerCase())||void 0!==e.prefix&&("string"!=typeof e.prefix||e.prefix.length>32||/[\r\n]/.test(e.prefix)))return null;return{type:"header",name:e.name,..."string"==typeof e.prefix?{prefix:e.prefix}:{}};default:return null}}(n.inject);if(!l){o.push(`${i}.inject is invalid`);continue}if(void 0!==n.origin){let e=function(e){let t;if("string"!=typeof e||0===e.length||e.length>2048)return null;try{t=new URL(e)}catch{return null}return t.username||t.password?null:"https:"===t.protocol||"http:"===t.protocol&&(function(){let e=void 0!==D.default&&D.default.env?.PLUGIN_PROXY_PRIVATE_ORIGINS||"",t=[];for(let r of e.split(",")){let e=r.trim();if(e)try{let r=new URL(e);("https:"===r.protocol||"http:"===r.protocol)&&t.push(r.origin)}catch{}}return t})().includes(t.origin)?t.origin:null}(n.origin);if(!e){o.push(`${i}.origin must be an https origin`);continue}r=e}if("user"===n.scope){a[e]={label:n.label,scope:"user",inject:l,...r?{origin:r}:{}};continue}if("admin"!==n.scope){o.push(`${i}.scope must be "admin" or "user"`);continue}let s=(e,r,a)=>"string"==typeof e&&t?.[e]?a&&t[e].type!==a?(o.push(`${i}.${r} must name a "${a}" field`),null):e:(o.push(`${i}.${r} must name a configSchema field`),null),d=s(n.secretKey,"secretKey","secret");if(!d)continue;if(!r&&void 0===n.originKey){o.push(`${i} needs origin or originKey`);continue}let c=void 0===n.originKey?void 0:s(n.originKey,"originKey");if(null===c)continue;let u=void 0===n.usernameKey?void 0:s(n.usernameKey,"usernameKey");null!==u&&(a[e]={label:n.label,scope:"admin",inject:l,secretKey:d,...r?{origin:r}:{},...c?{originKey:c}:{},...u?{usernameKey:u}:{}})}return{credentials:o.length?void 0:a,errors:o}}(e.credentials,m);return(o.push(...v.errors),o.length>0)?{manifest:null,errors:o,warnings:a}:{manifest:{id:n,name:i,version:l,author:s,description:d,type:c,permissions:f,entrypoint:u,...r?{tier:r}:{},...b?{minAppVersion:b}:{},...g&&Object.keys(g).length?{settingsSchema:g}:{},...m&&Object.keys(m).length?{configSchema:m}:{},...h&&Object.keys(h).length?{locales:h}:{},...y?{frameOrigins:y}:{},...k?{httpOrigins:k}:{},...w?{apiPostPaths:w}:{},...v.credentials&&Object.keys(v.credentials).length?{credentials:v.credentials}:{}},errors:o,warnings:a}}(await eo(r),t),a=[...o.errors],n=function(e){let t=[];for(let[r,o]of Object.entries(e.zip.files)){if(o.dir)continue;let e=r.lastIndexOf("."),a=e>=0?r.slice(e).toLowerCase():"";a&&!m.has(a)&&t.push(r)}return t}(r);if(n.length>0&&a.push(`Disallowed file types: ${n.join(", ")}`),o.manifest&&void 0!==t.expectedId&&o.manifest.id!==t.expectedId&&a.push(`Package id "${o.manifest.id}" does not match "${t.expectedId}"`),a.length>0||!o.manifest)throw new Q(a.join("; "));let i=await er(r,o.manifest.entrypoint);if(null===i)throw new Q(`Missing entrypoint file: ${o.manifest.entrypoint}`);let l=[...o.warnings,...eu.filter(({pattern:e})=>e.test(i)).map(({label:e})=>e).map(e=>`Contains ${e} - review for security`)];return{manifest:o.manifest,code:i,warnings:l,pkg:r}}async function eg(e,t={}){var r,o;let a,n,i,l,s,d,c=(e,t=[],r=null,o=null)=>({valid:!1,errors:e,warnings:t,manifest:r,css:"",skin:null,pkg:o}),u=[];try{a=await ee(e,"theme"),n=await eo(a)}catch(e){return c([e instanceof Q?e.message:"Invalid ZIP file"])}let{result:f,errors:b}=(s=[],(o=r=n).id&&"string"==typeof o.id||s.push('Missing or invalid "id"'),o.name&&"string"==typeof o.name||s.push('Missing or invalid "name"'),o.version&&"string"==typeof o.version||s.push('Missing or invalid "version"'),o.author&&"string"==typeof o.author||s.push('Missing or invalid "author"'),o.type&&"string"==typeof o.type||s.push('Missing or invalid "type"'),o.id&&"string"==typeof o.id&&!/^[a-z0-9][a-z0-9-]*[a-z0-9]$/.test(o.id)&&s.push("ID must be lowercase alphanumeric with hyphens, min 2 chars"),d=s,("theme"!==r.type&&d.push(`Expected type "theme", got "${r.type}"`),r.variants&&Array.isArray(r.variants)&&0!==r.variants.length?r.variants.every(e=>"light"===e||"dark"===e)||d.push('Variants must be "light" or "dark"'):d.push('Missing or empty "variants" array (must be ["light"], ["dark"], or ["light","dark"])'),void 0!==r.apiVersion&&1!==r.apiVersion&&2!==r.apiVersion&&d.push('"apiVersion" must be 1 or 2 if present'),void 0!==r.extends&&"string"!=typeof r.extends&&d.push('"extends" must be a string (the parent theme id)'),void 0!==r.tokens&&("object"!=typeof r.tokens||null===r.tokens)&&d.push('"tokens" must be an object with optional "common"/"light"/"dark" maps'),void 0===r.density||["compact","normal","touch"].includes(r.density)||d.push('"density" must be "compact", "normal", or "touch"'),void 0!==r.derive&&"boolean"!=typeof r.derive&&d.push('"derive" must be a boolean'),void 0!==r.radii&&("object"!=typeof r.radii||null===r.radii)&&d.push('"radii" must be an object'),void 0!==r.typography&&("object"!=typeof r.typography||null===r.typography)&&d.push('"typography" must be an object'),d.length>0)?{result:null,errors:d}:{result:r,errors:[]});if(!f)return c(b,u,null,a);let g=Z(f);try{i=await er(a,"theme.css"),l=await er(a,"skin.css",1048576)}catch(e){return c([e instanceof Q?e.message:"Could not read theme files"],u,f,a)}let p="";if(null!==i){let e=T(i);p=e.css,u.push(...e.warnings)}else if(!g)return c(["Missing theme.css"],u,f,a);let m=p;if(g){let e=function(e,t={}){var r;let o,a=[],n=[];if(!Z(e))return{css:"",warnings:a,errors:["Manifest does not declare any advanced theme fields"]};let i=e.tokens??{},l=!0===e.derive,s=e.variants.includes("dark"),d=e.variants.includes("light"),c=[];if(e.extends&&t.resolveExtends){let r=t.resolveExtends(e.extends);null==r?a.push(`extends: parent theme "${e.extends}" not found - skipping`):c.push(`/* inherited from ${e.extends} */
${r}`)}else e.extends&&a.push(`extends: no resolver provided - "${e.extends}" ignored`);let u=[];if(i.common){let{lines:e,warnings:t}=H(i.common,l);u.push(...e),a.push(...t)}if(d&&i.light){let{lines:e,warnings:t}=H(i.light,l);u.push(...e),a.push(...t)}if(e.radii&&u.push(...function(e){let t=[];for(let[r,o]of Object.entries(e))"string"==typeof o&&W(o)&&t.push(`  --radius-${r}: ${o.trim()};`);return t}(e.radii)),e.typography&&u.push(...(r=e.typography,o=[],r.fontSans&&W(r.fontSans)&&o.push(`  --font-sans: ${r.fontSans.trim()};`),r.fontMono&&W(r.fontMono)&&o.push(`  --font-mono: ${r.fontMono.trim()};`),r.fontDisplay&&W(r.fontDisplay)&&o.push(`  --font-display: ${r.fontDisplay.trim()};`),r.baseFontSize&&W(r.baseFontSize)&&o.push(`  --font-size-base: ${r.baseFontSize.trim()};`),o)),e.density&&u.push(...Object.entries(G[e.density]).map(([e,t])=>`  ${e}: ${t};`)),u.length>0&&c.push(`:root {
${u.join("\n")}
}`),s){let e=[];if(i.common){let{lines:t,warnings:r}=H(i.common,l);e.push(...t),a.push(...r)}if(i.dark){let{lines:t,warnings:r}=H(i.dark,l);e.push(...t),a.push(...r)}e.length>0&&c.push(`.dark {
${e.join("\n")}
}`)}return t.userCSS&&t.userCSS.trim()&&c.push(`/* user overrides */
${t.userCSS.trim()}`),0===c.length&&n.push("Compiled theme is empty - no tokens, radii, typography, or density supplied"),{css:c.join("\n\n"),warnings:a,errors:n}}(f,{userCSS:p,resolveExtends:t.resolveExtends});if(e.errors.length>0)return c([...e.errors],u,f,a);u.push(...e.warnings);let r=T(e.css);m=r.css,u.push(...r.warnings)}let h=null;if(null!==l)if(g)if(l.length>262144)u.push("skin.css exceeds 256 KB and was dropped");else{let e=E(l);h=e.css,u.push(...e.warnings)}else u.push("skin.css ignored - only Theme API v2 manifests can ship a skin");return{valid:!0,errors:[],warnings:u,manifest:f,css:m,skin:h,pkg:a}}async function ep(e){let t=await eg(await e.arrayBuffer()),{pkg:r,...o}=t,a=null;if(r&&t.manifest?.preview)try{let e,o=await et(r,t.manifest.preview,524288);o&&(a=await eh(new Blob([o],{type:(e=t.manifest.preview.toLowerCase()).endsWith(".svg")?"image/svg+xml":e.endsWith(".jpg")||e.endsWith(".jpeg")?"image/jpeg":e.endsWith(".webp")?"image/webp":"image/png"})))}catch{o.warnings.push("Could not read preview image")}return{...o,preview:a}}async function em(e){let t;try{t=await eb(await e.arrayBuffer(),{appVersion:"1.17.2"})}catch(e){return{valid:!1,errors:(e instanceof Q?e.message:"Invalid ZIP file").split("; "),warnings:[],manifest:null,code:"",preview:null}}let r=[...t.warnings],o=null,a=t.pkg.zip.file(t.pkg.root+"preview.png")?"preview.png":t.pkg.zip.file(t.pkg.root+"preview.svg")?"preview.svg":null;if(a)try{let e=await et(t.pkg,a,524288);if(e){let t=a.endsWith(".svg")?"image/svg+xml":"image/png";o=await eh(new Blob([e],{type:t}))}}catch{r.push("Could not read preview image")}return{valid:!0,errors:[],warnings:r,manifest:t.manifest,code:t.code,preview:o}}function eh(e){return new Promise((t,r)=>{let o=new FileReader;o.onload=()=>t(o.result),o.onerror=()=>r(o.error),o.readAsDataURL(e)})}e.s(["B",0,Q,"j",0,ef,"E",0,et,"o",0,eb,"s",0,eg],605526),e.s(["F",0,em,"t",0,ep],250681);let ey=[{id:"builtin-flat-fields",name:"Flat fields",version:"1.0.0",author:"Built-in",description:"The bulwarkmail.org design system: neutral grounds, square panes, Hanken Grotesk, and raspberry only as a small mark",css:`
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

/* ── Selection is grey plus a 3px brand edge. The folder row asks for
   border-primary, but the global \`* { border-color }\` rule wins over
   utilities, so the edge colour is set here. ── */
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
   ground). The app asks for border-input, but the global \`* { border-color }\`
   rule outranks utilities, so it is set here. Borderless fields are
   unaffected because they have no border width. */
body[data-theme-skin="builtin-flat-fields"] :is(input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), select, textarea, .border-input) {
  border-color: var(--color-input);
}

body[data-theme-skin="builtin-flat-fields"] :is(input[type="checkbox"], input[type="radio"]) {
  accent-color: var(--color-primary);
}

/* Unread is a small square and a 600 weight, not a tinted row. */
body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] .bg-accent\\/30:not(:hover) {
  background-color: var(--color-background);
}

body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] svg.fill-unread {
  color: transparent;
  fill: transparent;
  background-color: var(--color-unread);
  width: 7px;
  height: 7px;
}

/* The square sits clear of the 3px selection edge. */
body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] div.absolute:has(> svg.fill-unread) {
  inset-inline-start: 6px;
}

/* In the split layout the app anchors the mark at "padding + half an
   avatar", but the avatar is centred in the row, so the mark lined up with
   nothing. Put it on the sender line it marks (text-sm in a 20-24px row).
   The other layouts already centre it on their single line. The offset is
   an inline style, hence !important. */
body[data-theme-skin="builtin-flat-fields"] [data-tour="email-list"] div.absolute[style*="+ 1.25rem"]:has(> svg.fill-unread) {
  top: calc(var(--density-item-py) + 0.75rem) !important;
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
  --color-primary: #3b82f6;
  --color-primary-foreground: #ffffff;
  --color-secondary: #f4f4f5;
  --color-secondary-foreground: #18181b;
  --color-muted: #f4f4f5;
  --color-muted-foreground: #71717a;
  --color-accent: #dbeafe;
  --color-accent-foreground: #1d4ed8;
  --color-destructive: #ef4444;
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
  --color-primary: #3b82f6;
  --color-primary-foreground: #ffffff;
  --color-secondary: #18181b;
  --color-secondary-foreground: #fafafa;
  --color-muted: #18181b;
  --color-muted-foreground: #a1a1aa;
  --color-accent: #172554;
  --color-accent-foreground: #93c5fd;
  --color-destructive: #ef4444;
  --color-destructive-foreground: #fafafa;
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
  --color-ring: #81a1c1;
  --color-background: #eceff4;
  --color-foreground: #2e3440;
  --color-primary: #5e81ac;
  --color-primary-foreground: #eceff4;
  --color-secondary: #e5e9f0;
  --color-secondary-foreground: #2e3440;
  --color-muted: #d8dee9;
  --color-muted-foreground: #4c566a;
  --color-accent: #81a1c1;
  --color-accent-foreground: #2e3440;
  --color-destructive: #bf616a;
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
  --color-selection-foreground: #5e81ac;
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
  --color-primary: #88c0d0;
  --color-primary-foreground: #2e3440;
  --color-secondary: #3b4252;
  --color-secondary-foreground: #eceff4;
  --color-muted: #3b4252;
  --color-muted-foreground: #d8dee9;
  --color-accent: #434c5e;
  --color-accent-foreground: #88c0d0;
  --color-destructive: #bf616a;
  --color-destructive-foreground: #eceff4;
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
  --color-selection-foreground: #88c0d0;
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
  --color-primary: #8839ef;
  --color-primary-foreground: #eff1f5;
  --color-secondary: #e6e9ef;
  --color-secondary-foreground: #4c4f69;
  --color-muted: #dce0e8;
  --color-muted-foreground: #6c6f85;
  --color-accent: #8839ef;
  --color-accent-foreground: #eff1f5;
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
  --color-selection-foreground: #8839ef;
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
  --color-muted-foreground: #a6adc8;
  --color-accent: #45475a;
  --color-accent-foreground: #cba6f7;
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
  --color-foreground: #657b83;
  --color-primary: #268bd2;
  --color-primary-foreground: #fdf6e3;
  --color-secondary: #eee8d5;
  --color-secondary-foreground: #586e75;
  --color-muted: #eee8d5;
  --color-muted-foreground: #93a1a1;
  --color-accent: #268bd2;
  --color-accent-foreground: #fdf6e3;
  --color-destructive: #dc322f;
  --color-destructive-foreground: #fdf6e3;
  --color-popover: #fdf6e3;
  --color-popover-foreground: #657b83;
  --color-sidebar: #eee8d5;
  --color-sidebar-foreground: #657b83;
  --color-sidebar-border: #eee8d5;
  --color-sidebar-accent: #eee8d5;
  --color-sidebar-accent-foreground: #586e75;
  --color-card: #fdf6e3;
  --color-card-foreground: #657b83;
  --color-success: #859900;
  --color-success-foreground: #fdf6e3;
  --color-warning: #b58900;
  --color-warning-foreground: #fdf6e3;
  --color-info: #268bd2;
  --color-info-foreground: #fdf6e3;
  --color-selection: #eee8d5;
  --color-selection-foreground: #268bd2;
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
  --color-foreground: #839496;
  --color-primary: #268bd2;
  --color-primary-foreground: #002b36;
  --color-secondary: #073642;
  --color-secondary-foreground: #93a1a1;
  --color-muted: #073642;
  --color-muted-foreground: #586e75;
  --color-accent: #073642;
  --color-accent-foreground: #268bd2;
  --color-destructive: #dc322f;
  --color-destructive-foreground: #fdf6e3;
  --color-popover: #073642;
  --color-popover-foreground: #93a1a1;
  --color-sidebar: #002b36;
  --color-sidebar-foreground: #839496;
  --color-sidebar-border: #073642;
  --color-sidebar-accent: #073642;
  --color-sidebar-accent-foreground: #93a1a1;
  --color-card: #073642;
  --color-card-foreground: #93a1a1;
  --color-success: #859900;
  --color-success-foreground: #002b36;
  --color-warning: #b58900;
  --color-warning-foreground: #002b36;
  --color-info: #268bd2;
  --color-info-foreground: #002b36;
  --color-selection: rgba(38, 139, 210, 0.2);
  --color-selection-foreground: #268bd2;
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
  --color-ring: #37beff;
  --color-background: #ffffff;
  --color-foreground: #27353a;
  --color-primary: #37beff;
  --color-primary-foreground: #ffffff;
  --color-secondary: #f4f4f4;
  --color-secondary-foreground: #27353a;
  --color-muted: #f4f4f4;
  --color-muted-foreground: #737677;
  --color-accent: #e6f6ff;
  --color-accent-foreground: #0070a8;
  --color-destructive: #ff5552;
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
  --color-unread: #ffd452;
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
  --color-primary-foreground: #ffffff;
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
  --color-destructive-foreground: #ffffff;
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
  background-color: #37beff !important;
  border: 1px solid #37beff !important;
  color: #ffffff !important;
}
body[data-theme-skin="builtin-roundcube-elastic"] .bg-primary.text-primary-foreground:hover {
  background-color: #19b6fe !important;
  border-color: #0bb0ff !important;
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
  background-color: #37beff !important;
  border-color: #37beff !important;
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
   (@color-link #00acff, brighter in dark). The three-class combo is unique
   to these recipient buttons. */
body[data-theme-skin="builtin-roundcube-elastic"] button.hover\\:text-primary.hover\\:underline.cursor-pointer {
  color: #00acff !important;
}
.dark body[data-theme-skin="builtin-roundcube-elastic"] button.hover\\:text-primary.hover\\:underline.cursor-pointer {
  color: #37beff !important;
}
/* The sender's email address printed under the name is muted grey; Roundcube
   shows it link-blue too. It's the div immediately after the name row
   (.flex.items-center.flex-wrap), which the contact-card org line is not, so
   this sibling selector scopes it to the sender email only. */
body[data-theme-skin="builtin-roundcube-elastic"] .flex.items-center.flex-wrap + div.text-muted-foreground.truncate {
  color: #00acff !important;
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
  --color-primary: #6d5cff;
  --color-primary-foreground: #ffffff;
  --color-secondary: #e3e7f7;
  --color-secondary-foreground: #14162e;
  --color-muted: #e7eaf6;
  --color-muted-foreground: #5b6080;
  --color-accent: #e0e7ff;
  --color-accent-foreground: #4338ca;
  --color-destructive: #f43f5e;
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
  --color-primary-foreground: #ffffff;
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
}`,variants:["light","dark"],typography:{fontSans:'"Inter", "SF Pro Display", "Segoe UI", system-ui, sans-serif'},enabled:!0,builtIn:!0}];var ek=e.i(805495),ew=e.i(629001),ev=e.i(179083),ex=e.i(950757);function eS(e){let t=ek.f.getState().getForcedThemeId(e.map(e=>e.id));return t||(e.find(e=>e.forceEnabled)?.id??null)}function eT(e,t){let{mode:r,locked:o}=ek.f.getState().getColorModePolicy();return r&&(o||!t)?r:e}let eA=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",eI=e=>{if("u"<typeof document)return;let t=document.documentElement;"dark"===e?(t.classList.remove("light"),t.classList.add("dark")):(t.classList.remove("dark"),t.classList.add("light")),t.style.colorScheme=e,(0,y.o)(),localStorage.setItem("theme-applied",e)},eC=null,e$=null,ej=(0,t.f)()((0,r.f)((e,t)=>({theme:"system",themeChosen:!1,resolvedTheme:"light",hydrated:!1,installedThemes:[...ey],activeThemeId:null,setTheme:(r,o)=>{let a=o?.chosen??!0,n=eT(r,a),i="system"===n?eA():n;eI(i),e({theme:n,resolvedTheme:i,themeChosen:a});let{activeThemeId:l,installedThemes:s}=t();if(l){let e=s.find(e=>e.id===l);e&&eO(e,i)}},toggleTheme:()=>{let{theme:e}=t();t().setTheme("light"===e?"dark":"dark"===e?"system":"light")},applyColorModePolicy:()=>{let{theme:e,themeChosen:r}=t();eT(e,r)!==e&&t().setTheme(e,{chosen:r})},initializeTheme:()=>{let{theme:r,activeThemeId:o,installedThemes:a}=t(),n="system"===r?eA():r;eI(n),e({resolvedTheme:n,hydrated:!0});let i=eS(a)??o;if(!i){let e=ek.f.getState().policy.themePolicy;e?.defaultThemeId&&(i=e.defaultThemeId)}if(i!==o&&e({activeThemeId:i}),i){let t=a.find(e=>e.id===i);t&&(t.css?eO(t,n):b.getThemeCSS(i).then(t=>{t&&($(t),e({installedThemes:a.map(e=>e.id===i?{...e,css:t}:e)}))}))}eC&&(eC(),eC=null);{let r=window.matchMedia("(prefers-color-scheme: dark)"),o=()=>{let{theme:r,activeThemeId:o,installedThemes:a}=t();if("system"===r){let t=eA();if(eI(t),e({resolvedTheme:t}),o){let e=a.find(e=>e.id===o);e&&eO(e,t)}}};r.addEventListener("change",o),eC=()=>r.removeEventListener("change",o)}},installTheme:async r=>{let o=await ep(r);if(!o.valid||!o.manifest)return{success:!1,error:o.errors.join("; "),warnings:o.warnings};let{manifest:a,css:n,skin:i,preview:l}=o,{installedThemes:s}=t(),d={apiVersion:a.apiVersion,extends:a.extends,tokens:a.tokens,derive:a.derive,density:a.density,radii:a.radii,typography:a.typography};if(s.some(e=>e.id===a.id)){let t=T(n),r={id:a.id,name:a.name,version:a.version,author:a.author,description:a.description||"",preview:l||void 0,css:t.css,skin:i??void 0,variants:a.variants,enabled:!0,builtIn:!1,...d};return await b.saveThemeCSS(a.id,t.css),i?await b.saveThemeSkin(a.id,i):await b.deleteThemeSkin(a.id),l&&await b.savePreview(a.id,l),e({installedThemes:s.map(e=>e.id===a.id?r:e)}),{success:!0,warnings:[...o.warnings,...t.warnings]}}let c=T(n),u={id:a.id,name:a.name,version:a.version,author:a.author,description:a.description||"",preview:l||void 0,css:c.css,skin:i??void 0,variants:a.variants,enabled:!0,builtIn:!1,...d};return await b.saveThemeCSS(a.id,c.css),i&&await b.saveThemeSkin(a.id,i),l&&await b.savePreview(a.id,l),e({installedThemes:[...s,u]}),{success:!0,warnings:[...o.warnings,...c.warnings]}},uninstallTheme:r=>{let{installedThemes:o,activeThemeId:a}=t(),n=o.find(e=>e.id===r);if(!n||n.builtIn)return;let i=ek.f.getState().isThemeForceEnabled(r);n.forceEnabled||i||(a===r&&(j(),M(),e({activeThemeId:null})),b.deleteThemeCSS(r),b.deleteThemeSkin(r),b.deletePreview(r),e({installedThemes:o.filter(e=>e.id!==r)}))},activateTheme:r=>{let{installedThemes:o,resolvedTheme:a}=t(),n=eS(o);if(n&&r!==n){let t=o.find(e=>e.id===n);t&&(eO(t,a),e({activeThemeId:n}));return}if(null===r){j(),M(),e({activeThemeId:null});return}let i=o.find(e=>e.id===r);if(i){if(!i.css){b.getThemeCSS(r).then(o=>{o&&(eO({...i,css:o},t().resolvedTheme),e(e=>({activeThemeId:r,installedThemes:e.installedThemes.map(e=>e.id===r?{...e,css:o}:e)})))}),e({activeThemeId:r});return}eO(i,a),e({activeThemeId:r})}},syncServerThemes:async()=>{if(!ex.A){if(e$)return void await e$;e$=(async()=>{try{let r=await (0,ew.i)("/api/plugins");if(!r.ok)return;let o=await r.json();if(!o.themes||!Array.isArray(o.themes))return;let a=o.themes;for(let r of a){let o=t().installedThemes.find(e=>e.id===r.id);if(o){if(!o.builtIn){let a=o.css,n=o.skin,i=o.version!==r.version||!!r.contentHash&&o.contentHash!==r.contentHash;if(i||!a){let e=await eM(r,"css");if(!e)continue;let t=T(e);a=t.css,await b.saveThemeCSS(r.id,t.css)}if(i){let e=r.hasSkin?await eM(r,"skin"):null;(n=e?E(e).css:void 0)?await b.saveThemeSkin(r.id,n):await b.deleteThemeSkin(r.id)}let l={...o,name:r.name,version:r.version,author:r.author,description:r.description||"",css:a,skin:n,variants:r.variants,managed:!0,forceEnabled:r.forceEnabled,contentHash:r.contentHash};e(e=>({installedThemes:e.installedThemes.map(e=>e.id===r.id?l:e)})),t().activeThemeId===r.id&&eO(l,t().resolvedTheme)}}else{let t=await eM(r,"css");if(!t)continue;let o=r.hasSkin?await eM(r,"skin"):null,a=T(t),n=o?E(o).css:void 0,i={id:r.id,name:r.name,version:r.version,author:r.author,description:r.description||"",css:a.css,variants:r.variants,enabled:!0,builtIn:!1,managed:!0,forceEnabled:r.forceEnabled,contentHash:r.contentHash,...n?{skin:n}:{}};await b.saveThemeCSS(r.id,a.css),n&&await b.saveThemeSkin(r.id,n),e(e=>e.installedThemes.some(e=>e.id===r.id)?{}:{installedThemes:[...e.installedThemes,i]})}}let n=new Set(a.map(e=>e.id)),i=t().installedThemes.filter(e=>e.managed&&!e.builtIn&&!n.has(e.id));if(i.length>0){let r=new Set(i.map(e=>e.id)),o=t().activeThemeId;for(let t of(o&&r.has(o)&&(j(),M(),e({activeThemeId:null})),r))b.deleteThemeCSS(t),b.deleteThemeSkin(t),b.deletePreview(t);e(e=>({installedThemes:e.installedThemes.filter(e=>!r.has(e.id))}))}e(e=>({installedThemes:function(e){let t=new Map;for(let r of e){let e=t.get(r.id);if(!e){t.set(r.id,r);continue}t.set(r.id,{...e,...r,builtIn:e.builtIn||r.builtIn,enabled:e.enabled||r.enabled,managed:e.managed||r.managed,forceEnabled:r.forceEnabled??e.forceEnabled})}return[...t.values()]}(e.installedThemes)}));let l=eS(t().installedThemes);if(l&&t().activeThemeId!==l){let r=t().installedThemes.find(e=>e.id===l);r&&(eO(r,t().resolvedTheme),e({activeThemeId:l}))}}catch{console.warn("[theme-store] Server theme sync failed")}})();try{await e$}finally{e$=null}}}}),{name:"theme-storage",version:1,partialize:e=>({theme:e.theme,themeChosen:e.themeChosen,activeThemeId:e.activeThemeId,installedThemes:e.installedThemes.map(e=>({...e,css:e.builtIn?e.css:"",skin:void 0,preview:void 0}))}),migrate:(e,t)=>(t<1&&(e.themeChosen="system"!==e.theme),e),onRehydrateStorage:()=>e=>{if(e){let t=new Set(ey.map(e=>e.id)),r=e.installedThemes.filter(e=>!t.has(e.id)&&!e.builtIn);e.installedThemes=[...ey,...r],e.activeThemeId&&!e.installedThemes.some(t=>t.id===e.activeThemeId)&&(e.activeThemeId=null);let o="system"===e.theme?eA():e.theme;eI(o),e.resolvedTheme=o,e.hydrated=!0}}}));function eO(e,t){if(!e.variants.includes(t)){j(),M();return}if($(e.css),e.skin?O(e.skin,e.id):2===e.apiVersion?b.getThemeSkin(e.id).then(t=>{ej.getState().activeThemeId===e.id&&(t?(O(t,e.id),ej.setState(r=>({installedThemes:r.installedThemes.map(r=>r.id===e.id?{...r,skin:t}:r)}))):M())}):M(),0===ev.O.onThemeBeforeApply.size)return;let r=e.id;ev.O.onThemeBeforeApply.transform(e.css,{themeId:r,variant:t}).then(t=>{ej.getState().activeThemeId===r&&t&&t!==e.css&&$(T(t).css)}).catch(()=>{})}async function eM(e,t){let r=e.contentHash?`?v=${encodeURIComponent(e.contentHash)}`:"";try{let o=await (0,ew.i)(`/api/admin/themes/${encodeURIComponent(e.id)}/${t}${r}`);if(!o.ok)return null;return await o.text()}catch{return console.warn(`[theme-store] Failed to download ${t} for theme "${e.id}"`),null}}ek.f.subscribe((e,t)=>{e.policy!==t.policy&&ej.getState().applyColorModePolicy()}),ej.subscribe((e,t)=>{(e.theme!==t.theme||e.resolvedTheme!==t.resolvedTheme)&&ev.O.onThemeChange.emit({theme:e.theme,resolved:e.resolvedTheme}),e.activeThemeId!==t.activeThemeId&&ev.O.onCustomThemeChange.emit({themeId:e.activeThemeId})}),e.s(["f",0,ej],669922)}])})();