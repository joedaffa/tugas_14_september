(function(){function f(n){if(n&&n.length>=2){var t=n[1];t&&t.element&&e(t.element)}}function e(f){var o=u.ga(f,r),e,s,h;(o=+o,o)&&(e=0,i(e),s=1e3*o*t/n,h=sb_si(function(){e+=t;i(e);e>=n&&sb_ct(h)},s))}function i(t){var i=["VideoPlayer",null,"Watch",!1];i.push("Progress");i.push(Math.min(t,n));Log.Log.apply(null,i)}function o(){sj_evt.bind("event_videoplayer_bp",f,!1)}var r="data-dur",t=10,n=100,u=pMMUtils;o()})()