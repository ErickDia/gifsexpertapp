export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=3ud8sAhry8JKjmbAiYYCeRZvRuC8Gks4&q=${ encodeURI( category )}&limit=10`;
    const respuesta = await fetch( url );
    const dataCompleta = await respuesta.json();
    const gifs = dataCompleta.data.map( ( img ) => (
        {
            id: img.id, 
            title: img.title,
            url: img.images?.downsized_medium.url
        })
    );
    
    return gifs;

}