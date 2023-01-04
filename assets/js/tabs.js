const showTab = (ctx) => {
    const currentTab = ctx.getAttribute('data-tab')
    const tabOptions = document.querySelectorAll('.tabs ul li')
    const tabOptionsFooter = document.querySelectorAll('.tabs-footer ul li')
    const tabs = document.querySelectorAll('.tab')
    tabOptions.forEach(option => {
        if(option.getAttribute('data-tab') === currentTab ) {
            option.classList.add('active')
        } else {
            option.classList.remove('active')
        }
    })
    tabOptionsFooter.forEach(option => {
        if(option.getAttribute('data-tab') === currentTab ) {
            option.classList.add('active-footer')
        } else {
            option.classList.remove('active-footer')
        }
    })

    tabs.forEach(tab => {
        if(tab.getAttribute('data-tab') === currentTab ) {
            tab.classList.add('show')
        } else {
            tab.classList.remove('show')
        }
    })

}