const peticion = fetch('https://api.themoviedb.org/3/movie/550?api_key=8fa8fe67b5f6b84aedfe04b2350639db')
    const titulo = document.createElement('h1')
    const descripcion = document.createElement('h3')
    const imagen = document.createElement('img')

    peticion
    .then(response => response.json())
    .then((data) => {
        title = data.original_title
        overview = data.overview
        poster_url = `https://image.tmdb.org/t/p/w500${data.poster_path}`

        console.log(`Titulo: ${title}`)
        console.log(`overview: ${overview}`)
        console.log(`poster: ${poster_url}`)


        // HTML
        titulo.innerHTML = title
        descripcion.innerHTML = overview
        imagen.setAttribute('src', poster_url)

        document.body.append(titulo)
        document.body.append(descripcion)
        document.body.append(imagen)
        
    })
    .catch(console.warn); // error marillo