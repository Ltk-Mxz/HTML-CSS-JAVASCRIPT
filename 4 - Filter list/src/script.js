const list = document.querySelectorAll('ul li');
const search = document.querySelector('input');

search.addEventListener('input', () => {
    alert('Hi !');
    const filter = search.value.toLowerCase()

    list.forEach((li) => {
        const text = li.textContent.toLowerCase();
        li.style.display = text.includes(filter) ? '' : 'none';
    });
})