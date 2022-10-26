// Hacer que el ID se autoincremental (mediante una variable)
let id = 1;
function onClick() {
    let tbody = document.getElementsByTagName('tbody')[0]

    // Revisar, entender y comprender el código proporcionado
    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerText = id++
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    // Añadir, a los datos que se incluyen cada que se pulsa el botón, un enlace a la url ‘http://localhost/edit/id’
    td = document.createElement('td')
    a = document.createElement('a')
    a.innerText = 'Enlace'
    a.href = 'http://localhost/edit/' + id
    td.append(a)
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')
}