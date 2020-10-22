// create map
const map = L.map('mapid').setView([-28.68166,-49.3780373], 15)

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // clear icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng ], {icon})
    .addTo(map)
})

// add photo field
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // duplicar
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo está vazio, if sim, não adicionar
    const input = newFieldContainer.children[0]

    if (input.value == ""){
        return
    }

    // limpar campo
    newFieldContainer.children[0].value = ""

    // adicionar a duplicata
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();


}

function toggleSelect(event) {
    // retirar a class .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'))

    // colocar a class .active
    const button = event.currentTarget
    button.classList.add('active')
    
    // atualizar input hidden com valor selecionados
    const input = document.querySelector('[name="open_on_weekends"]')
    console.log(input)

    input.value = button.dataset.value

}

function validate(event) {
    const position = document.querySelector('[name="lng"]')

    if (position.value == "") {
        event.preventDefault() 
        alert('Selecione um ponto no mapa') 
    } 
     
}