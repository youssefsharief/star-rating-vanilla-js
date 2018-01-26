
let starsRegistered = new Array(10).fill(0)
let average = null

function onHover(listIndex, starIndex) {
    renderStarsForSelectedListAndSelectedStarAction(listIndex, starIndex)
}

function calculateAndSetNewAverage() {
    const sum = starsRegistered.reduce((cum, x) =>( cum + x))
    const count = starsRegistered.filter(x => x !=0).length
    average = sum/count;
}

function onStarClick(listIndex, starIndex) {
    starsRegistered[listIndex] = starIndex + 1;
    calculateAndSetNewAverage();
    renderStarsForSelectedListAndSelectedStarAction(listIndex, starIndex)
    renderAverageBlock()
}

function onMouseLeave(listIndex) {
    renderStarsInListforSelectedList(listIndex)
}

function renderAverageBlock() {
    document.querySelector('#average-container p').innerHTML = average;
    [...document.querySelector('#average-container div').children].forEach((star, i) => star.className = average < (i+1-0.5) ? 'icon-star-empty' : average >= (i+1) ? 'icon-star': 'icon-star-half-alt')
}

function getStrsFromList(listIndex) {
    return [...[...document.getElementById('list-container').children][listIndex].children]
}

function renderStarsForSelectedListAndSelectedStarAction(listIndex, starIndex) {
    return getStrsFromList(listIndex).forEach((star, i) => star.className = starIndex >= i ? 'icon-star' : 'icon-star-empty')
}

function renderStarsInListforSelectedList(listIndex) {
    return getStrsFromList(listIndex).forEach((star, i) => star.className = starsRegistered[listIndex] - 1 >= i ? 'icon-star' : 'icon-star-empty')
}

document.addEventListener('DOMContentLoaded', () => {
    renderInitiallistContainer();
    renderInitialAverageBlock();
})

function renderInitialAverageBlock() {
    const starsContainer = document.querySelector('#average-container div')
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        star.classList.add('icon-star-empty')
        star.dataset.rate = i
        starsContainer.appendChild(star)
    }
}



function renderInitiallistContainer() {
    const listContainer = document.getElementById('list-container')
    for (let j = 0; j < 10; j++) {
        const starContainer = document.createElement('div');
        listContainer.appendChild(starContainer)
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i');
            star.classList.add('icon-star-empty')
            star.addEventListener('click', () => onStarClick(j, i))
            star.addEventListener('mouseover', () => onHover(j, i))
            star.addEventListener('mouseleave', () => onMouseLeave(j))
            starContainer.appendChild(star)
        }
    }
}
