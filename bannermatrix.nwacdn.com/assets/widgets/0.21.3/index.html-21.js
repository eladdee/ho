(function(){'use strict';Polymer.flush=function(){let shadyDOM,debouncers;do{shadyDOM=window.ShadyDOM&&ShadyDOM.flush();if(window.ShadyCSS&&window.ShadyCSS.ScopingShim){window.ShadyCSS.ScopingShim.flush()}debouncers=Polymer.flushDebouncers()}while(shadyDOM||debouncers)}})();
//# sourceURL=https://bannermatrix.nwacdn.com/assets/widgets/0.21.3/index.html-21.js
