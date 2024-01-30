let deleteOpen = document.querySelector('#deleteOpen');
let modal = document.querySelector('.black-bg');
let deleteBtn = document.querySelector('#deleteBtn');
let closeBtn = document.querySelector('.close');


deleteOpen.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

modal.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.classList.remove('show-modal')
    }
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

deleteBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal')
    location.href = 'index.html'
})

