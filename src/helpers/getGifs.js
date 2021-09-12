export const getGifs = async ( category ) => {
    
    const API_KEY = 'YOURAPIKEY' //YOUR_API_KEY
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}