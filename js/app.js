const inputElement = document.querySelector('#input')
const btnElement = document.querySelector('#submit-button')
const ulElement = document.querySelector('#todo-list')


btnElement.addEventListener('click', () => {
    let text = inputElement.value

    

    let html = `
        <li>${text}</li>
    `

    ulElement.innerHTML += html

    inputElement.value = ''
})