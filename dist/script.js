!function(n){var e={};function t(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(a,o,function(e){return n[e]}.bind(null,o));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=1)}([function(n,e,t){},function(n,e,t){"use strict";t.r(e);t(0);var a=document.querySelector(".singleHeroInfo");var o,c=document.querySelector(".heroes__container"),r=document.querySelector(".singleHeroInfo__close");function s(n){var e,t="";n.forEach((function(n){var e=n.id,a=n.img,o=n.attack_type,c=n.primary_attr,r=n.localized_name;t+='\n            <div class="singleHero">\n                <div class="singleHero__img">\n                    <img src='.concat("https://api.opendota.com"+a,'>\n                </div>\n\n                <div class="singleHero__info">\n                    <h3 class="singleHero__name">').concat(r,'</h3>\n                    <p class="singleHero__attr">Primary Attribute: ').concat(c,'</p>\n                    <p class="singleHero__attackType">Attack Type: ').concat(o,"</p>\n                    <button data-id=").concat(e,' class="singleHero__learn">Learn More</button>\n                </div>\n            </div>\n        ')})),o=n,c.innerHTML=t,e=document.getElementsByClassName("singleHero__learn"),Array.from(e).forEach((function(n){n.addEventListener("click",i)}))}function i(n){var e=n.target.dataset.id;!function(n){a.classList.remove("hidden");var e=n.localized_name,t=n.primary_attr,o=n.attack_type,c=n.base_health,r=n.base_mana,s=n.base_attack_min,i=n.base_attack_max,l=n.base_health_regen,_=n.base_mana_regen,p=n.base_int,u=n.base_str,f=n.base_agi,d=n.base_armor,h=n.attack_range,b=n.attack_rate,g=n.projectile_speed,m=n.roles,y='\n        <h2 class="hero__name">'.concat(e,'</h2>\n                    \n        <div class="singleHeroInfo__container">\n            <p class="hero__basicInfo">Primary Attribute: ').concat(t,'</p>\n            <p class="hero__basicInfo">Attack Type: ').concat(o,'</p>\n            <p class="hero__basicInfo">Health: ').concat(c,'</p>\n            <p class="hero__basicInfo">Mana: ').concat(r,'</p>\n            <p class="hero__basicInfo">Min Attack: ').concat(s,'</p>\n            <p class="hero__basicInfo">Max Attack: ').concat(i,'</p>\n            <p class="hero__basicInfo">HP Regen: ').concat(l,'</p>\n            <p class="hero__basicInfo">Mana Regen: ').concat(_,'</p>\n            <p class="hero__basicInfo">Base Int: ').concat(p,'</p>\n            <p class="hero__basicInfo">Base Str: ').concat(u,'</p>\n            <p class="hero__basicInfo">Base Agi: ').concat(f,'</p>\n            <p class="hero__basicInfo">Base Armor: ').concat(d,'</p>\n            <p class="hero__basicInfo">Attack Range: ').concat(h,'</p>\n            <p class="hero__basicInfo">Attack Rate: ').concat(b,'</p>\n            <p class="hero__basicInfo">Projectile Speed: ').concat(g,'</p>\n        </div>\n\n        <ul class="hero__roles">\n            <h3 class="hero__rolesTitle">Roles:</h3>\n            ').concat(m.map((function(n){return'\n                    <li class="hero__role">\n                        '.concat(n,"\n                    </li>    \n                ")})).join(""),"\n        </ul>\n    ");document.querySelector(".singleHeroInfo__about").innerHTML=y}(function(n,e){for(var t=e,a=0;2!==t.length;a++){if(1===n){t=t[n-1];break}t=n>t[Math.floor(t.length/2)].id?t.slice(Math.floor(t.length/2)):t.slice(0,Math.floor(t.length/2)+1)}return t.length>1?t[t.length-1]:t}(e=parseInt(e),o))}null!==c&&(fetch("https://api.opendota.com/api/heroStats").then((function(n){return n.json()})).then((function(n){s(n)})),r.addEventListener("click",(function(n){a.classList.add("hidden")})));t.p}]);