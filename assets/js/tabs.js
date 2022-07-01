const showTab = (ctx) => {
    const currentTab = ctx.getAttribute('data-tab')
    const tabOptions = document.querySelectorAll('.tabs ul li')
    const tabs = document.querySelectorAll('.tab')
    const dots = document.querySelectorAll('.dot')

    tabOptions.forEach(option => {
        if(option.getAttribute('data-tab') === currentTab ) {
            option.classList.add('active')
        } else {
            option.classList.remove('active')
        }
    })

    tabs.forEach(tab => {
        if(tab.getAttribute('data-tab') === currentTab ) {
            tab.classList.add('show')
        } else {
            tab.classList.remove('show')
        }
    })

    dots.forEach(dot => {
        if(dot.getAttribute('data-tab') === currentTab ) {
            dot.classList.add('active')
        } else {
            dot.classList.remove('active')
        }
    })
}