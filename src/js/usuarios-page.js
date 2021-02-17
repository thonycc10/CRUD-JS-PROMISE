import {obtenerUsuarios} from './http-provider'

const body = document.body;
let tbody;
let i=1;

const crearHtml = () => {

    const html = `
        <h1 class="mt-5">Usuarios</h1>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Avatar</th>
                </tr>    
            </thead>
            <tbody></tbody>
        </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);
    tbody = document.querySelector('tbody');
}


const crearFilaUsuario = ({id, email, first_name, last_name, avatar}) => {
    const html = `
        <td scope="col"> ${i++}</td>
        <td scope="col"> ${id}</td>
        <td scope="col"> ${email}</td>
        <td scope="col">${first_name} ${last_name}</td>
        <td scope="col">
            <img src="${avatar}" class="img-thumbnail" alt="">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.appendChild(tr);
}

export const init = async() => {
    crearHtml();
    i = 1;
    (await obtenerUsuarios()).forEach(crearFilaUsuario);
}
