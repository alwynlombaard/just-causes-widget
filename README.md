Just Causes Widget
==================

A widget to embed on your site showing the causes you're fundraising for on JustGiving

Warning! Alpha, do not use

```
<script type="text/javascript" id="just-causes-eec47002-14f6-4f4a-985c-85a7e6ed3c59">
      (function() {
        function async_load(){
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          var theUrl = 'https://just-causes-widget.azurewebsites.net/just-causes-1.0.0.js';
          s.src = theUrl;// + ( theUrl.indexOf("?") >= 0 ? "&" : "?") + 'ref=' + encodeURIComponent(window.location.href);
          var embedder = document.getElementById('just-causes-eec47002-14f6-4f4a-985c-85a7e6ed3c59');
          embedder.parentNode.insertBefore(s, embedder);
        }
        if (window.attachEvent)
          window.attachEvent('onload', async_load);
        else
          window.addEventListener('load', async_load, false);
      })();
    </script>
```
