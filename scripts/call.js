// Pour test
// fetch("../scripts/test.json");

// Fetch data from PHP file
var server = "https://" + window.location.hostname;
fetch(server + "/functions/getDatas/getWords.php")
  .then((response) => response.json())
  .then(function (response) {

    document.getElementById("words-list").innerHTML = "";

    var compteur = 0;

    // Loop in json

    for (const key in response)
      (function (key) {
        if (response.hasOwnProperty(key)) {
          // Create <li> element
          var li = document.createElement("LI");
          // Create <p> element
          var p = document.createElement("P");
          // Create <a> element
          var a = document.createElement("A");
          // Set <p> datasets
          p.id = key;
          p.dataset.word_uuid = response[key].word_uuid;
          p.dataset.word_libelle = response[key].word_libelle;
          p.dataset.word_citation = response[key].word_citation;
          p.dataset.word_file_url = response[key].word_file_url;
          p.dataset.word_file_extention = response[key].word_file_extention;
          // Set <a> attributes
          a.setAttribute("href", "#");
          // Remove ugly <a> default css
          a.style.color = "inherit";
          a.style.textDecoration = "inherit";

          // Fill <li> with text
          var textnode = document.createTextNode("#" + response[key].word_uuid);
          li.appendChild(p);
          p.appendChild(a);
          a.appendChild(textnode);

          // Append <li> in HTML code
          document.getElementById("words-list").appendChild(li);

          document.getElementById(key).onclick = function () {
            singleVueUpdate(key);
            updateLink(key);
          };

          compteur++;
        }
      })(key);

    document.getElementById("random").onclick = function () {
      // Random function
      const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      };

      // Call the random function to find a number between 0 and the highest key
      var random = generateRandomNumber(0, compteur);
      // Play the song
      singleVueUpdate(random);
      updateLink(random);
    };
  });

  var keyword = location.pathname;
  //Routing and get the keyword from the url
  if (keyword != "" && keyword != "/") {
    //Remove the "/" from the keyword
    var keyword = keyword.substring(1);
    //call js function
    singleVueUpdateKeyword(keyword);
  }
