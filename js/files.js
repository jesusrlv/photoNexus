function _(el) {
    return document.getElementById(el);
  }
  
  function uploadFile(doc) {
    var file = _("file"+doc).files[0];
    var documento = doc;
    // alert(file.name+" | "+file.size+" | "+file.type);
    var formdata = new FormData();
    // variable del name file
    formdata.append("file", file);
    // variables post
    var ajax = new XMLHttpRequest();
    ajax.upload.addEventListener("progress", progressHandler, false);
    ajax.addEventListener("load", completeHandler, false);
    ajax.addEventListener("error", errorHandler, false);
    ajax.addEventListener("abort", abortHandler, false);
    ajax.open("POST", "prcd/upload_file.php"); 
    
    // http://www.developphp.com/video/JavaScript/File-Upload-Progress-Bar-Meter-Tutorial-Ajax-PHP
    //use file_upload_parser.php from above url

    //ARCHIVO CON EL PROCEDIMIENTO PARA MOVER EL DOCUMENTO AL SERVIDOR
    ajax.send(formdata);

    function progressHandler(event) {

        _("loaded_n_total"+doc).innerHTML = "Cargado " + event.loaded + " bytes de " + event.total;
        var percent = (event.loaded / event.total) * 100;
        _("progressBar"+doc).value = Math.round(percent);
        _("status"+doc).innerHTML = Math.round(percent) + "% subido... espere un momento";
      }
      
      function completeHandler(event) {
        _("status"+doc).innerHTML = event.target.responseText;
        _("progressBar"+doc).value = 0; //wil clear progress bar after successful upload
          _("file"+doc).style.display='none';
          _("progressBar"+doc).style.display='none';
      }
      
      function errorHandler(event) {
        _("status"+doc).innerHTML = "Fallo en la subida";
      }
      
      function abortHandler(event) {
        _("status"+doc).innerHTML = "Fallo en la subida";
      }
    
  }