
let starsRegistered = new Array(10).fill(0)

function onHover(containerIndex, starIndex) {
    const clonedArray = starsRegistered.slice();
    clonedArray[containerIndex] = starIndex + 1
    renderStars(clonedArray)
}


function onStarClick(containerIndex, starIndex) {
    console.log('lllll')
    console.log(document.getElementById('list-container').children)
    starsRegistered[containerIndex] = starIndex + 1
    renderStars()
    renderAverageBlock()
    // alert(`${parseInt(starIndex) +1} stars Selected for container ${parseInt(containerIndex) + 1}`)
}

function onMouseLeave() {
    renderStars()
}

function renderAverageBlock() {

}

function renderStars(starsData = starsRegistered) {
    Array.from(document.getElementById('list-container').children).forEach((list, listIndex)=> Array.from(list.children).forEach((star, starIndex)=>
            star.className = starsData[listIndex] > starIndex ? 'icon-star' : 'icon-star-empty'
        )
    )
}

document.addEventListener('DOMContentLoaded', () => {
    renderInitiallistContainer();
    // renderInitialAverageBlock();
})

// function renderInitialAverageBlock() {
//     for (let i = 0; i < 5; i++) {
//         const star = document.createElement('i');
//         star.classList.add('icon-star-empty')
//         star.dataset.rate = i
//         star.id = `star-${i}-average`
//         starContainer.appendChild(star)
//     }
// }



function renderInitiallistContainer() {
    const listContainer = document.getElementById('list-container')

    for (let j = 0; j < 10; j++) {
        const starContainer = document.createElement('div');
        listContainer.appendChild(starContainer)
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i');
            star.classList.add('icon-star-empty')
            star.addEventListener('click', () => onStarClick(j, i))
            // star.addEventListener('mouseover', () => onHover(j, i))
            star.addEventListener('mouseleave', () => onMouseLeave(j))
            starContainer.appendChild(star)
        }
    }
    // renderStars()
}