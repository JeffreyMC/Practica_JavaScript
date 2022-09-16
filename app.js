// agregar elemento
var form = document.getElementById('formAdd')
var lista = document.getElementById('list')
var filtro = document.getElementById('filtro')

// evento formulario
form.addEventListener('submit', agregarItem)

// evento de la lista
lista.addEventListener('click', eliminarItem)

// evento de filtro
filtro.addEventListener('keyup', filtrarItems)

function agregarItem(e) {
    e.preventDefault();

    let newItem = document.getElementById('item').value

    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem))

    let btnDel = document.createElement('button')
    btnDel.className = "btn btn-danger btn-sm float-md-end eliminar"

    btnDel.appendChild(document.createTextNode('X'))
    li.appendChild(btnDel)

    lista.appendChild(li)
}

function eliminarItem(e) {
    if (e.target.classList.contains('eliminar')) {
        if (confirm('Seguro que desea eliminar el elemento?')) {

            let li = e.target.parentElement
            lista.removeChild(li)
        }
    }
}

function filtrarItems(e) {
    let texto = e.target.value.toLowerCase()

    let items = lista.getElementsByTagName('li')

    Array.from(items).forEach(function (item) {
        let itemText = item.firstChild.textContent

        if (itemText.toLowerCase().indexOf(texto) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}