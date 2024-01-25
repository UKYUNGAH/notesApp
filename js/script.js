let more = document.querySelector('.m_btn');
let modal = document.querySelector('.black-bg')
let closeBtn = document.querySelector('.close')
const writeForm = document.querySelector('.write_form');
const list = document.querySelector('.memos')



// ======================== popup ========================
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


// ======================== popup ========================
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

    list.innerHTML += html
}



writeForm.addEventListener('submit', e => {
    e.preventDefault();

    const memo = writeForm.querySelector('[name="add"]').value;
    console.log(memo)


    if(memo.length){
        seveMemo(memo)
    }
})
