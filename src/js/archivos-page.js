import {subirImagen} from './http-provider';

const body = document.body;
let inputfile, imgFoto;

const crearInputFileHtml = () => {
    const html = `
        <h1 class="mt-5"> Subir archivos </h1>
        <hr>
        
        <label>Selecciona una fotografía: </label>
        
        <input id="file" type="file" accept="image/jpeg, image/png" />
        
        <br>
        
        <img id="foto" class="img-thumbnail" src="" alt="">
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputfile = document.querySelector('#file');
    imgFoto = document.querySelector('#foto');


}

const events = () => {
    inputfile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        // console.log(file)
        subirImagen(file).then(({secure_url}) => imgFoto.src = secure_url );
    })
}

export const init = () => {
    crearInputFileHtml();
    events();
}
