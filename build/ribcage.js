(function(){var t=this,e=t._,n=Array.prototype,r=Object.prototype,i=Function.prototype,s=n.push,a=n.slice,o=n.concat,u=r.toString,c=r.hasOwnProperty,l=Array.isArray,h=Object.keys,f=i.bind,p=function(t){return t instanceof p?t:this instanceof p?void(this._wrapped=t):new p(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=p),exports._=p):t._=p,p.VERSION="1.7.0";var d=function(t,e,n){if(void 0===e)return t;switch(null==n?3:n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,s){return t.call(e,n,r,i,s)}}return function(){return t.apply(e,arguments)}};p.iteratee=function(t,e,n){return null==t?p.identity:p.isFunction(t)?d(t,e,n):p.isObject(t)?p.matches(t):p.property(t)},p.each=p.forEach=function(t,e,n){if(null==t)return t;e=d(e,n);var r,i=t.length;if(i===+i)for(r=0;i>r;r++)e(t[r],r,t);else{var s=p.keys(t);for(r=0,i=s.length;i>r;r++)e(t[s[r]],s[r],t)}return t},p.map=p.collect=function(t,e,n){if(null==t)return[];e=p.iteratee(e,n);for(var r,i=t.length!==+t.length&&p.keys(t),s=(i||t).length,a=Array(s),o=0;s>o;o++)r=i?i[o]:o,a[o]=e(t[r],r,t);return a};var g="Reduce of empty array with no initial value";p.reduce=p.foldl=p.inject=function(t,e,n,r){null==t&&(t=[]),e=d(e,r,4);var i,s=t.length!==+t.length&&p.keys(t),a=(s||t).length,o=0;if(arguments.length<3){if(!a)throw new TypeError(g);n=t[s?s[o++]:o++]}for(;a>o;o++)i=s?s[o]:o,n=e(n,t[i],i,t);return n},p.reduceRight=p.foldr=function(t,e,n,r){null==t&&(t=[]),e=d(e,r,4);var i,s=t.length!==+t.length&&p.keys(t),a=(s||t).length;if(arguments.length<3){if(!a)throw new TypeError(g);n=t[s?s[--a]:--a]}for(;a--;)i=s?s[a]:a,n=e(n,t[i],i,t);return n},p.find=p.detect=function(t,e,n){var r;return e=p.iteratee(e,n),p.some(t,function(t,n,i){return e(t,n,i)?(r=t,!0):void 0}),r},p.filter=p.select=function(t,e,n){var r=[];return null==t?r:(e=p.iteratee(e,n),p.each(t,function(t,n,i){e(t,n,i)&&r.push(t)}),r)},p.reject=function(t,e,n){return p.filter(t,p.negate(p.iteratee(e)),n)},p.every=p.all=function(t,e,n){if(null==t)return!0;e=p.iteratee(e,n);var r,i,s=t.length!==+t.length&&p.keys(t),a=(s||t).length;for(r=0;a>r;r++)if(i=s?s[r]:r,!e(t[i],i,t))return!1;return!0},p.some=p.any=function(t,e,n){if(null==t)return!1;e=p.iteratee(e,n);var r,i,s=t.length!==+t.length&&p.keys(t),a=(s||t).length;for(r=0;a>r;r++)if(i=s?s[r]:r,e(t[i],i,t))return!0;return!1},p.contains=p.include=function(t,e){return null==t?!1:(t.length!==+t.length&&(t=p.values(t)),p.indexOf(t,e)>=0)},p.invoke=function(t,e){var n=a.call(arguments,2),r=p.isFunction(e);return p.map(t,function(t){return(r?e:t[e]).apply(t,n)})},p.pluck=function(t,e){return p.map(t,p.property(e))},p.where=function(t,e){return p.filter(t,p.matches(e))},p.findWhere=function(t,e){return p.find(t,p.matches(e))},p.max=function(t,e,n){var r,i,s=-1/0,a=-1/0;if(null==e&&null!=t){t=t.length===+t.length?t:p.values(t);for(var o=0,u=t.length;u>o;o++)r=t[o],r>s&&(s=r)}else e=p.iteratee(e,n),p.each(t,function(t,n,r){i=e(t,n,r),(i>a||i===-1/0&&s===-1/0)&&(s=t,a=i)});return s},p.min=function(t,e,n){var r,i,s=1/0,a=1/0;if(null==e&&null!=t){t=t.length===+t.length?t:p.values(t);for(var o=0,u=t.length;u>o;o++)r=t[o],s>r&&(s=r)}else e=p.iteratee(e,n),p.each(t,function(t,n,r){i=e(t,n,r),(a>i||1/0===i&&1/0===s)&&(s=t,a=i)});return s},p.shuffle=function(t){for(var e,n=t&&t.length===+t.length?t:p.values(t),r=n.length,i=Array(r),s=0;r>s;s++)e=p.random(0,s),e!==s&&(i[s]=i[e]),i[e]=n[s];return i},p.sample=function(t,e,n){return null==e||n?(t.length!==+t.length&&(t=p.values(t)),t[p.random(t.length-1)]):p.shuffle(t).slice(0,Math.max(0,e))},p.sortBy=function(t,e,n){return e=p.iteratee(e,n),p.pluck(p.map(t,function(t,n,r){return{value:t,index:n,criteria:e(t,n,r)}}).sort(function(t,e){var n=t.criteria,r=e.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return t.index-e.index}),"value")};var v=function(t){return function(e,n,r){var i={};return n=p.iteratee(n,r),p.each(e,function(r,s){var a=n(r,s,e);t(i,r,a)}),i}};p.groupBy=v(function(t,e,n){p.has(t,n)?t[n].push(e):t[n]=[e]}),p.indexBy=v(function(t,e,n){t[n]=e}),p.countBy=v(function(t,e,n){p.has(t,n)?t[n]++:t[n]=1}),p.sortedIndex=function(t,e,n,r){n=p.iteratee(n,r,1);for(var i=n(e),s=0,a=t.length;a>s;){var o=s+a>>>1;n(t[o])<i?s=o+1:a=o}return s},p.toArray=function(t){return t?p.isArray(t)?a.call(t):t.length===+t.length?p.map(t,p.identity):p.values(t):[]},p.size=function(t){return null==t?0:t.length===+t.length?t.length:p.keys(t).length},p.partition=function(t,e,n){e=p.iteratee(e,n);var r=[],i=[];return p.each(t,function(t,n,s){(e(t,n,s)?r:i).push(t)}),[r,i]},p.first=p.head=p.take=function(t,e,n){return null==t?void 0:null==e||n?t[0]:0>e?[]:a.call(t,0,e)},p.initial=function(t,e,n){return a.call(t,0,Math.max(0,t.length-(null==e||n?1:e)))},p.last=function(t,e,n){return null==t?void 0:null==e||n?t[t.length-1]:a.call(t,Math.max(t.length-e,0))},p.rest=p.tail=p.drop=function(t,e,n){return a.call(t,null==e||n?1:e)},p.compact=function(t){return p.filter(t,p.identity)};var m=function(t,e,n,r){if(e&&p.every(t,p.isArray))return o.apply(r,t);for(var i=0,a=t.length;a>i;i++){var u=t[i];p.isArray(u)||p.isArguments(u)?e?s.apply(r,u):m(u,e,n,r):n||r.push(u)}return r};p.flatten=function(t,e){return m(t,e,!1,[])},p.without=function(t){return p.difference(t,a.call(arguments,1))},p.uniq=p.unique=function(t,e,n,r){if(null==t)return[];p.isBoolean(e)||(r=n,n=e,e=!1),null!=n&&(n=p.iteratee(n,r));for(var i=[],s=[],a=0,o=t.length;o>a;a++){var u=t[a];if(e)a&&s===u||i.push(u),s=u;else if(n){var c=n(u,a,t);p.indexOf(s,c)<0&&(s.push(c),i.push(u))}else p.indexOf(i,u)<0&&i.push(u)}return i},p.union=function(){return p.uniq(m(arguments,!0,!0,[]))},p.intersection=function(t){if(null==t)return[];for(var e=[],n=arguments.length,r=0,i=t.length;i>r;r++){var s=t[r];if(!p.contains(e,s)){for(var a=1;n>a&&p.contains(arguments[a],s);a++);a===n&&e.push(s)}}return e},p.difference=function(t){var e=m(a.call(arguments,1),!0,!0,[]);return p.filter(t,function(t){return!p.contains(e,t)})},p.zip=function(t){if(null==t)return[];for(var e=p.max(arguments,"length").length,n=Array(e),r=0;e>r;r++)n[r]=p.pluck(arguments,r);return n},p.object=function(t,e){if(null==t)return{};for(var n={},r=0,i=t.length;i>r;r++)e?n[t[r]]=e[r]:n[t[r][0]]=t[r][1];return n},p.indexOf=function(t,e,n){if(null==t)return-1;var r=0,i=t.length;if(n){if("number"!=typeof n)return r=p.sortedIndex(t,e),t[r]===e?r:-1;r=0>n?Math.max(0,i+n):n}for(;i>r;r++)if(t[r]===e)return r;return-1},p.lastIndexOf=function(t,e,n){if(null==t)return-1;var r=t.length;for("number"==typeof n&&(r=0>n?r+n+1:Math.min(r,n+1));--r>=0;)if(t[r]===e)return r;return-1},p.range=function(t,e,n){arguments.length<=1&&(e=t||0,t=0),n=n||1;for(var r=Math.max(Math.ceil((e-t)/n),0),i=Array(r),s=0;r>s;s++,t+=n)i[s]=t;return i};var y=function(){};p.bind=function(t,e){var n,r;if(f&&t.bind===f)return f.apply(t,a.call(arguments,1));if(!p.isFunction(t))throw new TypeError("Bind must be called on a function");return n=a.call(arguments,2),r=function(){if(!(this instanceof r))return t.apply(e,n.concat(a.call(arguments)));y.prototype=t.prototype;var i=new y;y.prototype=null;var s=t.apply(i,n.concat(a.call(arguments)));return p.isObject(s)?s:i}},p.partial=function(t){var e=a.call(arguments,1);return function(){for(var n=0,r=e.slice(),i=0,s=r.length;s>i;i++)r[i]===p&&(r[i]=arguments[n++]);for(;n<arguments.length;)r.push(arguments[n++]);return t.apply(this,r)}},p.bindAll=function(t){var e,n,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(e=1;r>e;e++)n=arguments[e],t[n]=p.bind(t[n],t);return t},p.memoize=function(t,e){var n=function(r){var i=n.cache,s=e?e.apply(this,arguments):r;return p.has(i,s)||(i[s]=t.apply(this,arguments)),i[s]};return n.cache={},n},p.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},p.defer=function(t){return p.delay.apply(p,[t,1].concat(a.call(arguments,1)))},p.throttle=function(t,e,n){var r,i,s,a=null,o=0;n||(n={});var u=function(){o=n.leading===!1?0:p.now(),a=null,s=t.apply(r,i),a||(r=i=null)};return function(){var c=p.now();o||n.leading!==!1||(o=c);var l=e-(c-o);return r=this,i=arguments,0>=l||l>e?(clearTimeout(a),a=null,o=c,s=t.apply(r,i),a||(r=i=null)):a||n.trailing===!1||(a=setTimeout(u,l)),s}},p.debounce=function(t,e,n){var r,i,s,a,o,u=function(){var c=p.now()-a;e>c&&c>0?r=setTimeout(u,e-c):(r=null,n||(o=t.apply(s,i),r||(s=i=null)))};return function(){s=this,i=arguments,a=p.now();var c=n&&!r;return r||(r=setTimeout(u,e)),c&&(o=t.apply(s,i),s=i=null),o}},p.wrap=function(t,e){return p.partial(e,t)},p.negate=function(t){return function(){return!t.apply(this,arguments)}},p.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},p.after=function(t,e){return function(){return--t<1?e.apply(this,arguments):void 0}},p.before=function(t,e){var n;return function(){return--t>0?n=e.apply(this,arguments):e=null,n}},p.once=p.partial(p.before,2),p.keys=function(t){if(!p.isObject(t))return[];if(h)return h(t);var e=[];for(var n in t)p.has(t,n)&&e.push(n);return e},p.values=function(t){for(var e=p.keys(t),n=e.length,r=Array(n),i=0;n>i;i++)r[i]=t[e[i]];return r},p.pairs=function(t){for(var e=p.keys(t),n=e.length,r=Array(n),i=0;n>i;i++)r[i]=[e[i],t[e[i]]];return r},p.invert=function(t){for(var e={},n=p.keys(t),r=0,i=n.length;i>r;r++)e[t[n[r]]]=n[r];return e},p.functions=p.methods=function(t){var e=[];for(var n in t)p.isFunction(t[n])&&e.push(n);return e.sort()},p.extend=function(t){if(!p.isObject(t))return t;for(var e,n,r=1,i=arguments.length;i>r;r++){e=arguments[r];for(n in e)c.call(e,n)&&(t[n]=e[n])}return t},p.pick=function(t,e,n){var r,i={};if(null==t)return i;if(p.isFunction(e)){e=d(e,n);for(r in t){var s=t[r];e(s,r,t)&&(i[r]=s)}}else{var u=o.apply([],a.call(arguments,1));t=new Object(t);for(var c=0,l=u.length;l>c;c++)r=u[c],r in t&&(i[r]=t[r])}return i},p.omit=function(t,e,n){if(p.isFunction(e))e=p.negate(e);else{var r=p.map(o.apply([],a.call(arguments,1)),String);e=function(t,e){return!p.contains(r,e)}}return p.pick(t,e,n)},p.defaults=function(t){if(!p.isObject(t))return t;for(var e=1,n=arguments.length;n>e;e++){var r=arguments[e];for(var i in r)void 0===t[i]&&(t[i]=r[i])}return t},p.clone=function(t){return p.isObject(t)?p.isArray(t)?t.slice():p.extend({},t):t},p.tap=function(t,e){return e(t),t};var _=function(t,e,n,r){if(t===e)return 0!==t||1/t===1/e;if(null==t||null==e)return t===e;t instanceof p&&(t=t._wrapped),e instanceof p&&(e=e._wrapped);var i=u.call(t);if(i!==u.call(e))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+e;case"[object Number]":return+t!==+t?+e!==+e:0===+t?1/+t===1/e:+t===+e;case"[object Date]":case"[object Boolean]":return+t===+e}if("object"!=typeof t||"object"!=typeof e)return!1;for(var s=n.length;s--;)if(n[s]===t)return r[s]===e;var a=t.constructor,o=e.constructor;if(a!==o&&"constructor"in t&&"constructor"in e&&!(p.isFunction(a)&&a instanceof a&&p.isFunction(o)&&o instanceof o))return!1;n.push(t),r.push(e);var c,l;if("[object Array]"===i){if(c=t.length,l=c===e.length)for(;c--&&(l=_(t[c],e[c],n,r)););}else{var h,f=p.keys(t);if(c=f.length,l=p.keys(e).length===c)for(;c--&&(h=f[c],l=p.has(e,h)&&_(t[h],e[h],n,r)););}return n.pop(),r.pop(),l};p.isEqual=function(t,e){return _(t,e,[],[])},p.isEmpty=function(t){if(null==t)return!0;if(p.isArray(t)||p.isString(t)||p.isArguments(t))return 0===t.length;for(var e in t)if(p.has(t,e))return!1;return!0},p.isElement=function(t){return!(!t||1!==t.nodeType)},p.isArray=l||function(t){return"[object Array]"===u.call(t)},p.isObject=function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},p.each(["Arguments","Function","String","Number","Date","RegExp"],function(t){p["is"+t]=function(e){return u.call(e)==="[object "+t+"]"}}),p.isArguments(arguments)||(p.isArguments=function(t){return p.has(t,"callee")}),"function"!=typeof/./&&(p.isFunction=function(t){return"function"==typeof t||!1}),p.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},p.isNaN=function(t){return p.isNumber(t)&&t!==+t},p.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"===u.call(t)},p.isNull=function(t){return null===t},p.isUndefined=function(t){return void 0===t},p.has=function(t,e){return null!=t&&c.call(t,e)},p.noConflict=function(){return t._=e,this},p.identity=function(t){return t},p.constant=function(t){return function(){return t}},p.noop=function(){},p.property=function(t){return function(e){return e[t]}},p.matches=function(t){var e=p.pairs(t),n=e.length;return function(t){if(null==t)return!n;t=new Object(t);for(var r=0;n>r;r++){var i=e[r],s=i[0];if(i[1]!==t[s]||!(s in t))return!1}return!0}},p.times=function(t,e,n){var r=Array(Math.max(0,t));e=d(e,n,1);for(var i=0;t>i;i++)r[i]=e(i);return r},p.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))},p.now=Date.now||function(){return(new Date).getTime()};var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},w=p.invert(b),x=function(t){var e=function(e){return t[e]},n="(?:"+p.keys(t).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(t){return t=null==t?"":""+t,r.test(t)?t.replace(i,e):t}};p.escape=x(b),p.unescape=x(w),p.result=function(t,e){if(null==t)return void 0;var n=t[e];return p.isFunction(n)?t[e]():n};var E=0;p.uniqueId=function(t){var e=++E+"";return t?t+e:e},p.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var k=/(.)^/,j={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},A=/\\|'|\r|\n|\u2028|\u2029/g,T=function(t){return"\\"+j[t]};p.template=function(t,e,n){!e&&n&&(e=n),e=p.defaults({},e,p.templateSettings);var r=RegExp([(e.escape||k).source,(e.interpolate||k).source,(e.evaluate||k).source].join("|")+"|$","g"),i=0,s="__p+='";t.replace(r,function(e,n,r,a,o){return s+=t.slice(i,o).replace(A,T),i=o+e.length,n?s+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?s+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(s+="';\n"+a+"\n__p+='"),e}),s+="';\n",e.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var a=new Function(e.variable||"obj","_",s)}catch(o){throw o.source=s,o}var u=function(t){return a.call(this,t,p)},c=e.variable||"obj";return u.source="function("+c+"){\n"+s+"}",u},p.chain=function(t){var e=p(t);return e._chain=!0,e};var S=function(t){return this._chain?p(t).chain():t};p.mixin=function(t){p.each(p.functions(t),function(e){var n=p[e]=t[e];p.prototype[e]=function(){var t=[this._wrapped];return s.apply(t,arguments),S.call(this,n.apply(p,t))}})},p.mixin(p),p.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=n[t];p.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0],S.call(this,n)}}),p.each(["concat","join","slice"],function(t){var e=n[t];p.prototype[t]=function(){return S.call(this,e.apply(this._wrapped,arguments))}}),p.prototype.value=function(){return this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return p})}).call(this),function(t,e){if("function"==typeof define&&define.amd)define("backbone",["underscore","jquery","exports"],function(n,r,i){t.Backbone=e(t,i,n,r)});else if("undefined"!=typeof exports){var n=require("underscore");e(t,exports,n)}else t.Backbone=e(t,{},t._,t.jQuery||t.Zepto||t.ender||t.$)}(this,function(t,e,n,r){{var i=t.Backbone,s=[],a=(s.push,s.slice);s.splice}e.VERSION="1.1.2",e.$=r,e.noConflict=function(){return t.Backbone=i,this},e.emulateHTTP=!1,e.emulateJSON=!1;var o=e.Events={on:function(t,e,n){if(!c(this,"on",t,[e,n])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);return r.push({callback:e,context:n,ctx:n||this}),this},once:function(t,e,r){if(!c(this,"once",t,[e,r])||!e)return this;var i=this,s=n.once(function(){i.off(t,s),e.apply(this,arguments)});return s._callback=e,this.on(t,s,r)},off:function(t,e,r){var i,s,a,o,u,l,h,f;if(!this._events||!c(this,"off",t,[e,r]))return this;if(!t&&!e&&!r)return this._events=void 0,this;for(o=t?[t]:n.keys(this._events),u=0,l=o.length;l>u;u++)if(t=o[u],a=this._events[t]){if(this._events[t]=i=[],e||r)for(h=0,f=a.length;f>h;h++)s=a[h],(e&&e!==s.callback&&e!==s.callback._callback||r&&r!==s.context)&&i.push(s);i.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=a.call(arguments,1);if(!c(this,"trigger",t,e))return this;var n=this._events[t],r=this._events.all;return n&&l(n,e),r&&l(r,arguments),this},stopListening:function(t,e,r){var i=this._listeningTo;if(!i)return this;var s=!e&&!r;r||"object"!=typeof e||(r=this),t&&((i={})[t._listenId]=t);for(var a in i)t=i[a],t.off(e,r,this),(s||n.isEmpty(t._events))&&delete this._listeningTo[a];return this}},u=/\s+/,c=function(t,e,n,r){if(!n)return!0;if("object"==typeof n){for(var i in n)t[e].apply(t,[i,n[i]].concat(r));return!1}if(u.test(n)){for(var s=n.split(u),a=0,o=s.length;o>a;a++)t[e].apply(t,[s[a]].concat(r));return!1}return!0},l=function(t,e){var n,r=-1,i=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:for(;++r<i;)(n=t[r]).callback.call(n.ctx);return;case 1:for(;++r<i;)(n=t[r]).callback.call(n.ctx,s);return;case 2:for(;++r<i;)(n=t[r]).callback.call(n.ctx,s,a);return;case 3:for(;++r<i;)(n=t[r]).callback.call(n.ctx,s,a,o);return;default:for(;++r<i;)(n=t[r]).callback.apply(n.ctx,e);return}},h={listenTo:"on",listenToOnce:"once"};n.each(h,function(t,e){o[e]=function(e,r,i){var s=this._listeningTo||(this._listeningTo={}),a=e._listenId||(e._listenId=n.uniqueId("l"));return s[a]=e,i||"object"!=typeof r||(i=this),e[t](r,i,this),this}}),o.bind=o.on,o.unbind=o.off,n.extend(e,o);var f=e.Model=function(t,e){var r=t||{};e||(e={}),this.cid=n.uniqueId("c"),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(r=this.parse(r,e)||{}),r=n.defaults({},r,n.result(this,"defaults")),this.set(r,e),this.changed={},this.initialize.apply(this,arguments)};n.extend(f.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return n.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return n.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,r){var i,s,a,o,u,c,l,h;if(null==t)return this;if("object"==typeof t?(s=t,r=e):(s={})[t]=e,r||(r={}),!this._validate(s,r))return!1;a=r.unset,u=r.silent,o=[],c=this._changing,this._changing=!0,c||(this._previousAttributes=n.clone(this.attributes),this.changed={}),h=this.attributes,l=this._previousAttributes,this.idAttribute in s&&(this.id=s[this.idAttribute]);for(i in s)e=s[i],n.isEqual(h[i],e)||o.push(i),n.isEqual(l[i],e)?delete this.changed[i]:this.changed[i]=e,a?delete h[i]:h[i]=e;if(!u){o.length&&(this._pending=r);for(var f=0,p=o.length;p>f;f++)this.trigger("change:"+o[f],this,h[o[f]],r)}if(c)return this;if(!u)for(;this._pending;)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,n.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,n.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!n.isEmpty(this.changed):n.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?n.clone(this.changed):!1;var e,r=!1,i=this._changing?this._previousAttributes:this.attributes;for(var s in t)n.isEqual(i[s],e=t[s])||((r||(r={}))[s]=e);return r},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(t){t=t?n.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=this,r=t.success;return t.success=function(n){return e.set(e.parse(n,t),t)?(r&&r(e,n,t),void e.trigger("sync",e,n,t)):!1},M(this,t),this.sync("read",this,t)},save:function(t,e,r){var i,s,a,o=this.attributes;if(null==t||"object"==typeof t?(i=t,r=e):(i={})[t]=e,r=n.extend({validate:!0},r),i&&!r.wait){if(!this.set(i,r))return!1}else if(!this._validate(i,r))return!1;i&&r.wait&&(this.attributes=n.extend({},o,i)),void 0===r.parse&&(r.parse=!0);var u=this,c=r.success;return r.success=function(t){u.attributes=o;var e=u.parse(t,r);return r.wait&&(e=n.extend(i||{},e)),n.isObject(e)&&!u.set(e,r)?!1:(c&&c(u,t,r),void u.trigger("sync",u,t,r))},M(this,r),s=this.isNew()?"create":r.patch?"patch":"update","patch"===s&&(r.attrs=i),a=this.sync(s,this,r),i&&r.wait&&(this.attributes=o),a},destroy:function(t){t=t?n.clone(t):{};var e=this,r=t.success,i=function(){e.trigger("destroy",e,e.collection,t)};if(t.success=function(n){(t.wait||e.isNew())&&i(),r&&r(e,n,t),e.isNew()||e.trigger("sync",e,n,t)},this.isNew())return t.success(),!1;M(this,t);var s=this.sync("delete",this,t);return t.wait||i(),s},url:function(){var t=n.result(this,"urlRoot")||n.result(this.collection,"url")||P();return this.isNew()?t:t.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},n.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=n.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;return r?(this.trigger("invalid",this,r,n.extend(e,{validationError:r})),!1):!0}});var p=["keys","values","pairs","invert","pick","omit"];n.each(p,function(t){f.prototype[t]=function(){var e=a.call(arguments);return e.unshift(this.attributes),n[t].apply(n,e)}});var d=e.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,n.extend({silent:!0},e))},g={add:!0,remove:!0,merge:!0},v={add:!0,remove:!1};n.extend(d.prototype,o,{model:f,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,n.extend({merge:!1},e,v))},remove:function(t,e){var r=!n.isArray(t);t=r?[t]:n.clone(t),e||(e={});var i,s,a,o;for(i=0,s=t.length;s>i;i++)o=t[i]=this.get(t[i]),o&&(delete this._byId[o.id],delete this._byId[o.cid],a=this.indexOf(o),this.models.splice(a,1),this.length--,e.silent||(e.index=a,o.trigger("remove",o,this,e)),this._removeReference(o,e));return r?t[0]:t},set:function(t,e){e=n.defaults({},e,g),e.parse&&(t=this.parse(t,e));var r=!n.isArray(t);t=r?t?[t]:[]:n.clone(t);var i,s,a,o,u,c,l,h=e.at,p=this.model,d=this.comparator&&null==h&&e.sort!==!1,v=n.isString(this.comparator)?this.comparator:null,m=[],y=[],_={},b=e.add,w=e.merge,x=e.remove,E=!d&&b&&x?[]:!1;for(i=0,s=t.length;s>i;i++){if(u=t[i]||{},a=u instanceof f?o=u:u[p.prototype.idAttribute||"id"],c=this.get(a))x&&(_[c.cid]=!0),w&&(u=u===o?o.attributes:u,e.parse&&(u=c.parse(u,e)),c.set(u,e),d&&!l&&c.hasChanged(v)&&(l=!0)),t[i]=c;else if(b){if(o=t[i]=this._prepareModel(u,e),!o)continue;m.push(o),this._addReference(o,e)}o=c||o,!E||!o.isNew()&&_[o.id]||E.push(o),_[o.id]=!0}if(x){for(i=0,s=this.length;s>i;++i)_[(o=this.models[i]).cid]||y.push(o);y.length&&this.remove(y,e)}if(m.length||E&&E.length)if(d&&(l=!0),this.length+=m.length,null!=h)for(i=0,s=m.length;s>i;i++)this.models.splice(h+i,0,m[i]);else{E&&(this.models.length=0);var k=E||m;for(i=0,s=k.length;s>i;i++)this.models.push(k[i])}if(l&&this.sort({silent:!0}),!e.silent){for(i=0,s=m.length;s>i;i++)(o=m[i]).trigger("add",o,this,e);(l||E&&E.length)&&this.trigger("sort",this,e)}return r?t[0]:t},reset:function(t,e){e||(e={});for(var r=0,i=this.models.length;i>r;r++)this._removeReference(this.models[r],e);return e.previousModels=this.models,this._reset(),t=this.add(t,n.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,n.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return this.add(t,n.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t),e},slice:function(){return a.apply(this.models,arguments)},get:function(t){return null==t?void 0:this._byId[t]||this._byId[t.id]||this._byId[t.cid]},at:function(t){return this.models[t]},where:function(t,e){return n.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"](function(e){for(var n in t)if(t[n]!==e.get(n))return!1;return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return t||(t={}),n.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(n.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return n.invoke(this.models,"get",t)},fetch:function(t){t=t?n.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=t.success,r=this;return t.success=function(n){var i=t.reset?"reset":"set";r[i](n,t),e&&e(r,n,t),r.trigger("sync",r,n,t)},M(this,t),this.sync("read",this,t)},create:function(t,e){if(e=e?n.clone(e):{},!(t=this._prepareModel(t,e)))return!1;e.wait||this.add(t,e);var r=this,i=e.success;return e.success=function(t,n){e.wait&&r.add(t,e),i&&i(t,n,e)},t.save(null,e),t},parse:function(t){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof f)return t;e=e?n.clone(e):{},e.collection=this;var r=new this.model(t,e);return r.validationError?(this.trigger("invalid",this,r.validationError,e),!1):r},_addReference:function(t){this._byId[t.cid]=t,null!=t.id&&(this._byId[t.id]=t),t.collection||(t.collection=this),t.on("all",this._onModelEvent,this)},_removeReference:function(t){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,n,r){("add"!==t&&"remove"!==t||n===this)&&("destroy"===t&&this.remove(e,r),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))}});var m=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];n.each(m,function(t){d.prototype[t]=function(){var e=a.call(arguments);return e.unshift(this.models),n[t].apply(n,e)}});var y=["groupBy","countBy","sortBy","indexBy"];n.each(y,function(t){d.prototype[t]=function(e,r){var i=n.isFunction(e)?e:function(t){return t.get(e)};return n[t](this.models,i,r)}});var _=e.View=function(t){this.cid=n.uniqueId("view"),t||(t={}),n.extend(this,n.pick(t,w)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},b=/^(\S+)\s*(.*)$/,w=["model","collection","el","id","attributes","className","tagName","events"];n.extend(_.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(t,n){return this.$el&&this.undelegateEvents(),this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0],n!==!1&&this.delegateEvents(),this},delegateEvents:function(t){if(!t&&!(t=n.result(this,"events")))return this;this.undelegateEvents();for(var e in t){var r=t[e];if(n.isFunction(r)||(r=this[t[e]]),r){var i=e.match(b),s=i[1],a=i[2];r=n.bind(r,this),s+=".delegateEvents"+this.cid,""===a?this.$el.on(s,r):this.$el.on(s,a,r)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(n.result(this,"el"),!1);else{var t=n.extend({},n.result(this,"attributes"));this.id&&(t.id=n.result(this,"id")),this.className&&(t["class"]=n.result(this,"className"));var r=e.$("<"+n.result(this,"tagName")+">").attr(t);this.setElement(r,!1)}}}),e.sync=function(t,r,i){var s=E[t];n.defaults(i||(i={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(i.url||(a.url=n.result(r,"url")||P()),null!=i.data||!r||"create"!==t&&"update"!==t&&"patch"!==t||(a.contentType="application/json",a.data=JSON.stringify(i.attrs||r.toJSON(i))),i.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),i.emulateHTTP&&("PUT"===s||"DELETE"===s||"PATCH"===s)){a.type="POST",i.emulateJSON&&(a.data._method=s);var o=i.beforeSend;i.beforeSend=function(t){return t.setRequestHeader("X-HTTP-Method-Override",s),o?o.apply(this,arguments):void 0}}"GET"===a.type||i.emulateJSON||(a.processData=!1),"PATCH"===a.type&&x&&(a.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var u=i.xhr=e.ajax(n.extend(a,i));return r.trigger("request",r,u,i),u};var x=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),E={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var k=e.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},j=/\((.*?)\)/g,A=/(\(\?)?:\w+/g,T=/\*\w+/g,S=/[\-{}\[\]+?.,\\\^$|#\s]/g;n.extend(k.prototype,o,{initialize:function(){},route:function(t,r,i){n.isRegExp(t)||(t=this._routeToRegExp(t)),n.isFunction(r)&&(i=r,r=""),i||(i=this[r]);var s=this;return e.history.route(t,function(n){var a=s._extractParameters(t,n);s.execute(i,a),s.trigger.apply(s,["route:"+r].concat(a)),s.trigger("route",r,a),e.history.trigger("route",s,r,a)}),this},execute:function(t,e){t&&t.apply(this,e)},navigate:function(t,n){return e.history.navigate(t,n),this},_bindRoutes:function(){if(this.routes){this.routes=n.result(this,"routes");for(var t,e=n.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(S,"\\$&").replace(j,"(?:$1)?").replace(A,function(t,e){return e?t:"([^/?]+)"}).replace(T,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return n.map(r,function(t,e){return e===r.length-1?t||null:t?decodeURIComponent(t):null})}});var O=e.History=function(){this.handlers=[],n.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},$=/^[#\/]|\s+$/g,R=/^\/+|\/+$/g,N=/msie [\w.]+/,I=/\/$/,H=/#.*$/;O.started=!1,n.extend(O.prototype,o,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=decodeURI(this.location.pathname+this.location.search);var n=this.root.replace(I,"");t.indexOf(n)||(t=t.slice(n.length))}else t=this.getHash();return t.replace($,"")},start:function(t){if(O.started)throw new Error("Backbone.history has already been started");O.started=!0,this.options=n.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment(),i=document.documentMode,s=N.exec(navigator.userAgent.toLowerCase())&&(!i||7>=i);if(this.root=("/"+this.root+"/").replace(R,"/"),s&&this._wantsHashChange){var a=e.$('<iframe src="javascript:0" tabindex="-1">');
this.iframe=a.hide().appendTo("body")[0].contentWindow,this.navigate(r)}this._hasPushState?e.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!s?e.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=r;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&o.hash&&(this.fragment=this.getHash().replace($,""),this.history.replaceState({},document.title,this.root+this.fragment))}return this.options.silent?void 0:this.loadUrl()},stop:function(){e.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),O.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t===this.fragment?!1:(this.iframe&&this.navigate(t),void this.loadUrl())},loadUrl:function(t){return t=this.fragment=this.getFragment(t),n.any(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0})},navigate:function(t,e){if(!O.started)return!1;e&&e!==!0||(e={trigger:!!e});var n=this.root+(t=this.getFragment(t||""));if(t=t.replace(H,""),this.fragment!==t){if(this.fragment=t,""===t&&"/"!==n&&(n=n.slice(0,-1)),this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,n){if(n){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else t.hash="#"+e}}),e.history=new O;var F=function(t,e){var r,i=this;r=t&&n.has(t,"constructor")?t.constructor:function(){return i.apply(this,arguments)},n.extend(r,i,e);var s=function(){this.constructor=r};return s.prototype=i.prototype,r.prototype=new s,t&&n.extend(r.prototype,t),r.__super__=i.prototype,r};f.extend=d.extend=k.extend=_.extend=O.extend=F;var P=function(){throw new Error('A "url" property or function must be specified')},M=function(t,e){var n=e.error;e.error=function(r){n&&n(t,r,e),t.trigger("error",t,r,e)}};return e}),define("region",["underscore"],function(t){var e=function(t,e){this.output=t.find(e),this._renderable=void 0,this._viewData={}};return e.prototype.render=function(){this._renderable.prototype.el=this.output;var e,n=new this._renderable(this._viewData);t(n).has("_regions")&&(n.setElement(this.output),e=n.render(),this.regions=e.regions)},e.prototype.show=function(t,e){this._renderable=t,this._viewData=e,this.render()},e}),define("layout",["backbone","underscore","region"],function(t,e,n){var r=function(){this._regions={},this._presets={},this._el="",this._template="",this._currentView=void 0};return r.prototype.addRegions=function(t){var n=this;return e(t).each(function(t,e){n.addRegion(e,t)}),this},r.prototype.addRegion=function(t,e){return this._regions[t]=e,this},r.prototype.setElement=function(t){return this._el=t,this},r.prototype.setTemplate=function(t){return this._template=t,this},r.prototype.addPresets=function(t){var n=this;return e(t).each(function(t,e){n._presets[e]=t}),this},r.prototype.addPreset=function(t,e){this._presets[t]=e},r.prototype.render=function(){var t=this.createView(this._el,this._template,this._regions),n=this;return this._currentView=new t,this.regions=this._regions,e(this._presets).each(function(t,e){n.regions[e].show(t)}),this},r.prototype.createView=function(n,r,i){var s=this;return t.View.extend({el:n,template:e.template(r),render:function(){return this.$el.html(this.template()),s.createRegions(i,this.$el),this},initialize:function(){this.render()}})},r.prototype.createRegions=function(t,r){var i=this;e(t).each(function(t,e){i._regions[e]=new n(r,t)})},r});
//# sourceMappingURL=ribcage.js.map