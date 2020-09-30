function singleVueUpdate(identifier) {
    if (identifier === undefined) {
        alert("Une erreur s'est produite, veuillez réessayer")
    }else {
        var chosedWord = document.getElementById(identifier);
        var word = song.getAttribute('data-word_libelle');
        var citation = song.getAttribute('data-word_citation');
        var url = song.getAttribute('data-word_file_url');
        document.getElementById("Replique").innerHTML = citation;
        document.getElementById("RepliqueTitle").innerHTML = word;
        document.getElementById("AudioPlayer").src = url;
    }
}