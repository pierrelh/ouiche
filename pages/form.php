<div class="form">
    <form enctype="multipart/form-data" method="post" class="movie-form" id="movie-form">
        <div class="title-form">
            <label for="title">*Titre de la réplique :</label>
            <input type="text" name="title" id="title" required>
        </div>
        <div class="quote-form">
            <label for="quote">*Citation :</label>
            <input type="text" name="quote" id="quote" required>
        </div>
        <div class="file-form">
            <label for="file">*Sélectionner un fichier audio :</label>
            <input type="file" id="file" name="file" required>
        </div>
        <div class="form-submit">
            <input type="submit" value="Ajouter" id="send">
        </div>
    </form>
</div>