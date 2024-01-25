let more = document.querySelector('.m_btn');
let modal = document.querySelector('.black-bg')
let closeBtn = document.querySelector('.close')
const addForm = document.querySelector('.add_form');
const list = document.querySelector('.memos')


more.addEventListener('click', () => {
    modal.classList.add('show-modal');
})

modal.addEventListener('click', (e) => {
   if(e.target === modal){
       modal.classList.remove('show-modal');
   }
})
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})



const seveMemo = memoText => {
    const html = `<li>
    <a href="#">
        <div class="top">
            <h4>${memoText}</h4>
            <button type="button">
                <img src="./img/more.png" alt="">
            </button>
        </div>
        <div class="bottom">
            <p>${memoText}</p>
        </div>
    </a>
</li>`

    list.insertAdjacentHTML('beforeend', html)
}
addForm.addEventListener('submit', e => {
    e.preventDefault();

    // const memo = addForm.add.value;    
    const memo = addForm.querySelector('[name="add"]').value;

    console.log(memo)


    if(memo.length){
        seveMemo(memo)
    }
})