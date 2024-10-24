//Bar icon toggle functions
const barMenu = document.getElementById("barMenu");
const barIcon = document.getElementById('bar');

function handleMenu() {
    barMenu.classList.toggle('hidden');
}

document.addEventListener('click', (event) => {
    if (!barMenu.contains(event.target) && !barIcon.contains(event.target)) {
        barMenu.classList.add('hidden');
    }
});

//