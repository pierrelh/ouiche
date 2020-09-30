// Pour test
//fetch("../scripts/test.json")

// Fetch data from PHP file
var server = "https://" + window.location.hostname;
fetch(server + "/functions/getDatas/getWords.php")
  .then(response => response.json())
  .then(function(response) {
    console.log(response);

    document.getElementById("words-list").innerHTML = "";
    
    // Loop in json
    for (const key in response) (function(key){
      if (response.hasOwnProperty(key)) {
        // Create <li> element
        var li = document.createElement("LI");
        // Create <p> element
        var p = document.createElement("P");
        // Set <p> attributes
        p.id = key;
        p.dataset.word_uuid = response[key].word_uuid;
        p.dataset.word_libelle = response[key].word_libelle;
        p.dataset.word_citation = response[key].word_citation;
        p.dataset.word_file_url = response[key].word_file_url;
        p.dataset.word_file_extention = response[key].word_file_extention;
        // Fill <li> with text
        var textnode = document.createTextNode(response[key].word_uuid);
        li.appendChild(p);
        p.appendChild(textnode);

        // Append <li> in HTML code
        document.getElementById("words-list").appendChild(li); 

        document.getElementById(key).onclick = function () {
          singleVueUpdate(key);
        };
      }
    })(key);
    
  })