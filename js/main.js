let key = 'f06df133c6d74494b775565de517ebf7';
let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
let mostrar_noticias = document.getElementById('noticias');

fetch(url)
    .then((resp) => {
        // Verifica si la respuesta es adecuada
        if (!resp.ok) {
            throw new Error(`Error: ${resp.status} ${resp.statusText}`);
        }
        return resp.json();
    })
    .then((dato) => {
        console.log(dato);
        let noticias = dato.articles;
        noticias.map((numero) => {
            let div = document.createElement('div');
            div.className = 'noticia';

            // Verifica si urlToImage no es null o vacío
            let imageUrl = numero.urlToImage ? numero.urlToImage : 'placeholder-image-url.jpg';

            div.innerHTML = `
                <img src="${imageUrl}" alt="News Image"><br>
                <h1>${numero.title}</h1>
                <h2>${numero.description}</h2>
                <h3><a href="${numero.url}" target="_blank">Leer más</a></h3>
            `;
            mostrar_noticias.appendChild(div);
        });
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
        mostrar_noticias.innerHTML = `<p>Hubo un error al obtener las noticias. Por favor, inténtalo más tarde.</p>`;
    });
