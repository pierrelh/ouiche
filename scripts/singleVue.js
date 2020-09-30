function singleVueUpdate(identifier) {
    if (identifier === undefined) {
        alert("Une erreur s'est produite, veuillez réessayer")
    }else {
        if (document.getElementById("SingleVue").classList.contains('hidden')) {
            //Show the Single Vue section if hidded
            document.getElementById("SingleVue").classList.remove('hidden');
        }
        var chosedWord = document.getElementById(identifier);
        var word = chosedWord.getAttribute('data-word_libelle');
        var citation = chosedWord.getAttribute('data-word_citation');
        var url = chosedWord.getAttribute('data-word_file_url');
        document.getElementById("Replique").innerHTML = citation;
        document.getElementById("RepliqueTitle").innerHTML = word;
        document.getElementById("AudioPlayer").src = url;
    }
}