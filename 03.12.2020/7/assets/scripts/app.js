const addModal = document.getElementById('add-modal')
const btnAddMovie = document.getElementById('btn_add_movies')
const btnCancelAddModal = document.getElementById('btnCancelAddModal')
const btnSuccessAddModal = document.getElementById('btnSuccessAddModal')
const deleteModal = document.getElementById('delete-modal')
const btnCancelDeleteModal = document.getElementById('btnCancelDeleteModal')
const btnAcceptDeleteModal = document.getElementById('btnAcceptDeleteModal')
const listMovieUl = document.getElementById('movie-list')

const inputTitle = document.getElementById('title')
const inputImage = document.getElementById('image-url')
const inputRating = document.getElementById('rating')

const listMovies = []

const pushList = () => {
    listMovies.push({
        title: inputTitle.value,
        image: inputImage.value,
        rating: inputRating.value,
    })

    render()
}

const deleteModalGet = (index) => {
    deleteModal.style.display = 'inline'

    const deleteModalAccept = () => {
        listMovies.splice(index, 1)
        deleteModal.style.display = 'none'
        render()
    }

    btnAcceptDeleteModal.onclick = deleteModalAccept
    btnCancelDeleteModal.addEventListener('click', () => {deleteModal.style.display = 'none'; render()})
}

const render = () => {
    listMovieUl.innerHTML = ''

    listMovies.forEach((item, index) => {
        const li = document.createElement('li')

        li.innerHTML = `<img src="${item.image}" onerror = src="https://miro.medium.com/max/2400/1*fEb9HZa1XFy8rriRVBYlvw.png">Title - ${item.title}; Rating - ${item.rating}
                       <button id='but-del' onclick='deleteModalGet(${index})'>Delete</button>`
        
        listMovieUl.prepend(li)

        addModal.style.display = 'none'
    })
}

btnAddMovie.addEventListener('click', () => {addModal.style.display = 'inline';})
btnCancelAddModal.addEventListener('click', () => {addModal.style.display = 'none';})
btnSuccessAddModal.addEventListener('click', () => {pushList()})
