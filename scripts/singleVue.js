//Update the single vue with identifier (user action)
function singleVueUpdate(identifier) {
    if (identifier === undefined) {
        //If no identifier is passed
        alert("Une erreur s'est produite, veuillez réessayer")
    }else {
        if (document.getElementById("SingleVue").classList.contains('hidden')) {
            //Show the Single Vue section if hidded
            document.getElementById("SingleVue").classList.remove('hidden');
        }
        //Set all the keywords informations on the single vue
        var chosedWord = document.getElementById(identifier);
        var word = chosedWord.getAttribute('data-word_libelle');
        var citation = chosedWord.getAttribute('data-word_citation');
        var url = chosedWord.getAttribute('data-word_file_url');
        document.getElementById("Replique").innerHTML = citation;
        document.getElementById("RepliqueTitle").innerHTML = "#" + word;
        document.getElementById("AudioPlayer").src = url;
        document.getElementById("AudioPlayer").play();
    }
}

//Update the single vue with keyword (routing)
function singleVueUpdateKeyword(keyword) {
    //Get element id
    var element = document.querySelector("[data-word_uuid='"+keyword+"']");
    singleVueUpdate(element.id);
}