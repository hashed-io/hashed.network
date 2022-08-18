const sidebar = document.querySelector('.header-mobile')
const body = document.querySelector('body')

const showSidebar = () => {
    sidebar.style.display = 'initial'
    body.classList.toggle('no-scroll')
}

const hideSidebar = () => {
    sidebar.style.display = 'none'
    body.classList.toggle('no-scroll')
}