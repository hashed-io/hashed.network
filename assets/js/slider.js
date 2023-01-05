// Drag scroll desktop
const sb = new ScrollBooster({
    viewport: document.querySelector('.partners .scroll-partners'),
    content: document.querySelector('.partners .scroll-partners .partners-container'),
    scrollMode: 'transform',
    direction: 'horizontal',
    onUpdate: (state) => {
        const {isMoving, position} = state
        if(isMoving){
            
            const dots = document.querySelectorAll('.dots-indicator span')
            const partners = document.querySelectorAll('.partners-container .partner')
            const widthPartners = partners[0].offsetWidth
            const numberOfPartners = 2

            const {x: xPosition} = position

            let currentPage
            if( xPosition > 0) {
                currentPage = Math.round(xPosition/widthPartners)
            }else {
                currentPage = 0
            }
            if(currentPage > numberOfPartners) currentPage = numberOfPartners
            dots.forEach((dot, i) => {
                const dotClasses = dot.classList
                if(i === currentPage){
                    dotClasses.add('active-white')
                }else{
                    dotClasses.remove('active-white')
                }
            })
        }
    }
})

const arrows = document.querySelectorAll('.arrows li')

const partner = document.querySelectorAll('.partners-container .partner')
var widthTeamContainer = 0
partner.forEach(item => {
    widthTeamContainer += (item.offsetWidth - 150)
})

const moveToLeft = (ctx) => {
    const label = ctx.getAttribute('data-label')

    onClick(label)

    const curr = Math.abs(sb.targetPosition.x) - 200

    sb.scrollTo({ x: curr, y: 0 })
}

const moveToRight = (ctx) => {
    const label = ctx.getAttribute('data-label')

    onClick(label)

    const curr = Math.abs(sb.targetPosition.x) + 200

    if (curr < widthTeamContainer) {
        sb.scrollTo({ x: curr, y: 0 })
    }

}

const onClick = (label) => {
    arrows.forEach(arrow => {
        if (arrow.getAttribute('data-label') === label) {
            arrow.classList.add('active')
        } else {
            arrow.classList.remove('active')
        }
    })
}
