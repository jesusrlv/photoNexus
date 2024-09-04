function _(el) {
    return document.getElementById(el);
  }
  
  function uploadFile() {
    var file = _("file").files[0];
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

    //ARCHIVO CON EL PROCEDIMIENTO PARA MOVER ELUMENTO AL SERVIDOR
    ajax.send(formdata);

    function progressHandler(event) {

        _("loaded_n_total").innerHTML = "Cargado " + event.loaded + " bytes de " + event.total;
        var percent = (event.loaded / event.total) * 100;
        _("progressBar").value = Math.round(percent);
        _("status").innerHTML = Math.round(percent) + "% subido... espere un momento";
      }
      
      function completeHandler(event) {
        _("status").innerHTML = event.target.responseText;
        _("progressBar").value = 0; //wil clear progress bar after successful upload
          _("file").style.display='none';
          _("progressBar").style.display='none';
      }
      
      function errorHandler(event) {
        _("status").innerHTML = "Fallo en la subida";
      }
      
      function abortHandler(event) {
        _("status").innerHTML = "Fallo en la subida";
      }
    
  }