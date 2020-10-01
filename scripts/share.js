window.onload = function() {
    updateLink();
}

var current_url = "https://" + window.location.hostname;

function updateLink(identifier) {
    var uuid = "";
    if (identifier !== undefined) {
        var chosedWord = document.getElementById(identifier);
        uuid = "/" + chosedWord.getAttribute('data-word_uuid');
    }

    document.getElementById("twitter-button").href = "https://twitter.com/intent/tweet?text=" + current_url + uuid;
    document.getElementById("facebook-button").href = "https://www.facebook.com/sharer/sharer.php?u=" + current_url + uuid;
    document.getElementById("url-link").innerHTML = current_url + uuid;

}

function copyUrl() {
    var url = document.getElementById("url-link");
    url.select();
    url.setSelectionRange(0, 99999); /*mobile*/
    document.execCommand("copy");
}