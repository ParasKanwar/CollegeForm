if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise(async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()})),s.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},s=(s,n)=>{Promise.all(s.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(s)};self.define=(s,a,r)=>{n[s]||(n[s]=Promise.resolve().then(()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}})).then(e=>{const s=r(...e);return n.default||(n.default=s),n})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/RDKhG7XpeQbSafqNYcV26/_buildManifest.js",revision:"33b045eb35ad3a461ffbfe46b66a5126"},{url:"/_next/static/RDKhG7XpeQbSafqNYcV26/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.1f52a3ec41a5d5095e70.js",revision:"6133f1603763fdda32fc7f0dd21984f6"},{url:"/_next/static/chunks/framework.7e70a00882840d8b4939.js",revision:"8f3dea85edf0a02234d79c9b46531a9f"},{url:"/_next/static/chunks/main-aa3840a4207550126cef.js",revision:"ee8a4160e6ed007d2f1f41dc54670a23"},{url:"/_next/static/chunks/pages/_app-fb6d2ba6b70d92bbf823.js",revision:"8d761945f13b16c7bbcb8a27cd053ff1"},{url:"/_next/static/chunks/pages/_error-85785763783c1e33a9f3.js",revision:"61483c6e9b2433d1b87721995d4f0861"},{url:"/_next/static/chunks/pages/index-4b9009cc77fa9aa86e0f.js",revision:"50f173740827ff32ccb53e90e423a9de"},{url:"/_next/static/chunks/polyfills-c735eb10728da30b4a47.js",revision:"3c5b148baecf222e205dfe1cb1588bd6"},{url:"/_next/static/chunks/webpack-95c2b224bccf352ee870.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icon-192x192.png",revision:"a6848ff5faf536d0ef15e4368031a326"},{url:"/icon-256x256.png",revision:"f1d9553b62dad16c1e1693d573c4363c"},{url:"/icon-384x384.png",revision:"b8f98dd192d4c4c368ac76530e80f190"},{url:"/icon-512x512.png",revision:"560d905c6aa67680ed54f35f03baedf2"},{url:"/manifest.json",revision:"3676636a0f0314a54eed4159ac118645"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
