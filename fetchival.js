(function(n){function e(n,e){for(var t in e)n[t]=n[t]||e[t]}function t(n){var e=Object.keys(n).map(function(e){return[e,encodeURIComponent(n[e])].join("=")});return["?"].concat(e).join("&")}function o(n,o,r,i,f){r.method=n;r.headers=r.headers||{};r.responseAs=r.responseAs&&["json","text"].indexOf(r.responseAs)>=0?r.responseAs:"json";e(r.headers,{Accept:"application/json","Content-Type":"application/json"});if(f){o+=t(f)}if(i){r.body=JSON.stringify(i)}return fetchival.fetch(o,r).then(function(n){if(n.status>=200&&n.status<300){return n[r.responseAs]()}var e=new Error(n.statusText);e.response=n;throw e})}function fetchival(n,t){t=t||{};var r=function(o,r){o=n+"/"+o;r=r||{};e(r,t);return fetchival(o,r)};r.get=function(e){return o("GET",n,t,null,e)};r.post=function(e){return o("POST",n,t,e)};r.put=function(e){return o("PUT",n,t,e)};r.patch=function(e){return o("PATCH",n,t,e)};r.delete=function(){return o("DELETE",n,t)};return r}fetchival.fetch=typeof fetch!=="undefined"?fetch.bind(n):null;if(typeof exports==="object")module.exports=fetchival;else if(typeof define==="function"&&define.amd)define(function(){return fetchival});else n.fetchival=fetchival})(typeof window!="undefined"?window:undefined);
