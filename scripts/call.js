// Fetch data from PHP file
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(function(response) {
    console.log(response);
    /*
    // Loop in json
    for (const key in response) {
      if (response.hasOwnProperty(key)) {
        // Create <li> element
        var node = document.createElement("LI");
        // Fill <li> with text
        var textnode = document.createTextNode(response[key].title);
        node.appendChild(textnode);
        // Append <li> in HTML code
        document.getElementsByClassName("list").appendChild(node); 
      }
    }
    */
  })