<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
<div class="form">
    <form enctype="multipart/form-data" method="post" class="movie-form" id="movie-form">
    <p>Ajouter une réplique</p>
        <div class="title-form">
            <label for="title">Titre :</label>
            <input type="text" name="title" id="title" required>
        </div>
        <div class="quote-form">
            <label for="quote">Citation :</label>
            <input type="text" name="quote" id="quote" required>
        </div>
        <div class="file-form">
            <label for="file">Sélectionner un fichier audio :</label>
            <input type="file" id="file" name="file" required>
        </div>
        <div class="form-submit">
            <input type="submit" value="Ajouter" id="send">
        </div>
    </form>
</div>
<script src="scripts/uploadFile.js"></script>
