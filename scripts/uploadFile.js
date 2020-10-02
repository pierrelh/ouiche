document.getElementById("barSpan2").addEventListener("click", function(){
    var file = document.getElementById('file').files[0]; //Get the file
    if (file != undefined) {
      var formData = new FormData(document.getElementById('formUpload'));
      formData.delete('file');
      //Check if all form's field aren't empty
      if (document.getElementById('fileName').value == "" || document.getElementById('fileAuthor').value == "") {
        document.getElementById('error-msg').innerHTML = ""
        var errormsg = document.createTextNode("Merci de remplir tous les champs.");
        document.getElementById("error-msg").appendChild(errormsg);
        return;
      }

      //Setting the cloudinary parameters
      var url = `https://api.cloudinary.com/v1_1/hfw8lod60/upload`;
      var audioFile = new FormData();
      var audioFileXhr = new XMLHttpRequest();
      audioFileXhr.open('POST', url, true);
      audioFileXhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  
      // Update progress
      audioFileXhr.upload.addEventListener("progress", function(e) {
        var progress = Math.round((e.loaded * 100.0) / e.total);
        console.log = "progress: " + progress + "%";
      });
  
      function uploadFile() {
        var server = "https://" + window.location.hostname;
        $.ajax({
          url: server + "/functions/uploadFile.php",
          type: "POST",
          dataType: 'script',
          cache: false,
          contentType: false,
          processData: false,
          data: formData,
          success: function(data){
              alert("upload succeed")
          }
        });
      }
  
      //Parameters for file upload
      audioFile.append('upload_preset', 'unsigned_files');
      audioFile.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary
      audioFile.append('file', file);
      audioFileXhr.send(audioFile);
      audioFileXhr.onreadystatechange = function(e) {
        if (audioFileXhr.readyState == 4 && audioFileXhr.status == 200) {//If the file is sended then
          var response = JSON.parse(audioFileXhr.responseText);
          formData.set('file_url', response.secure_url) //Getting the file url
          uploadFile();
        }
      };
    }else {
        //If no files as been found
        document.getElementById('error-msg').innerHTML = "";
        var errormsg = document.createTextNode("Aucun fichier n'a été choisi.");
        document.getElementById("error-msg").appendChild(errormsg);
    }
  });