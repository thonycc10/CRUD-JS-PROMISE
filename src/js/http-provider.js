// servicios
const jokeUrl = 'https://api.chucknorris.io/jokes/random'
const urlUser = 'https://reqres.in/api/users?page=2'

// cloudinary
const cloudPreset = 'ml_default'
const cloudUrlImagen = 'https://api.cloudinary.com/v1_1/thonycc/upload'

const obtenerChiste = async () => {

    try {
        const resp = await fetch(jokeUrl);
        if ( !resp.ok ) throw 'No se pudo realizar la peticion';
        const {id, value, icon_url} = await resp.json();
        return {id, value, icon_url};

    } catch (err) {
        throw err;
    }
}

const obtenerUsuarios = async() => {
    const resp = await fetch(urlUser);
    const {data:usuarios} = await resp.json();
    return usuarios;
}

const subirImagen = async ( archivoSubir ) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset)
    formData.append('file', archivoSubir)

    try {

        const resp = await fetch(cloudUrlImagen, {
            method: 'POST',
            body: formData
        })

        if (resp.ok) {
            return await resp.json();
        } else {
            throw await resp.json();
        }

    } catch (err) {
        throw err;
    }
}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}
