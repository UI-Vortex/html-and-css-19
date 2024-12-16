const title = document.querySelector('.hello')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    if(title.innerHTML === 'hello world') {
        title.innerHTML = ''
    } else {
        title.innerHTML = "hello world"
    }
})