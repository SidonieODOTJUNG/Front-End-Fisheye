function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        // TODO penser à vérifier l'accessibilité pour les articles
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        // ajouter alt pour img
        img.setAttribute("src", picture)
        // passer en h1
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}