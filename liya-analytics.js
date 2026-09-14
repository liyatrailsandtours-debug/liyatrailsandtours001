/* Liya Trails & Tours: Google Analytics 4 loader.
   The Measurement ID is stored in Supabase as published site_content key settings:analytics,
   so it can be changed from the Admin panel without editing website files. */
(function(){
  if(window.__LIYA_GA_STARTED)return;
  window.__LIYA_GA_STARTED=true;
  var SUPABASE_URL='https://vvskhgdqhkxgsvickkme.supabase.co';
  var SUPABASE_KEY='sb_publishable_Wr_0ATCAgBgv-m5hKAPtwQ_RRV5vb8T';
  function start(id){
    if(!id||!/^G-[A-Z0-9]+$/i.test(id)||window.gtag)return;
    var s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id); document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){dataLayer.push(arguments);};
    window.gtag('js',new Date());
    window.gtag('config',id,{send_page_view:true});
  }
  fetch(SUPABASE_URL+'/rest/v1/site_content?content_key=eq.settings%3Aanalytics&published=eq.true&select=content_value',{headers:{apikey:SUPABASE_KEY,Authorization:'Bearer '+SUPABASE_KEY}})
    .then(function(r){return r.ok?r.json():[];}).then(function(rows){
      var v=rows&&rows[0]&&rows[0].content_value;
      var id=typeof v==='string'?v:(v&&v.measurement_id);
      if(!id) id='G-R6R3G5512B';
      start((id||'').trim());
    }).catch(function(){});
})();
