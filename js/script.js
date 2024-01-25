let more = document.querySelectorAll('.m_btn');
let modal = document.querySelectorAll('.black-bg');
let closeBtn = document.querySelectorAll('.close');
const writeForm = document.querySelector('.write_form');
const list = document.querySelector('.memos')



// ======================== popup ========================
for(let i = 0; i < more.length; i++){
    more[i].addEventListener('click', () => {
        for(let j = 0; j < modal.length; j++){
            modal[j].classList.add('show-modal');
        }
    })
}

for(let i = 0; i < modal.length; i++){
    modal[i].addEventListener('click', (e) => {
        if(e.target === modal[i]){
            modal[i].classList.remove('show-modal');
        }
     })
}

for(let i = 0; i < closeBtn.length; i++){
    closeBtn[i].addEventListener('click', () => {
        for(let j = 0; j < modal.length; j++){
            modal[j].classList.remove('show-modal');
        }
    })
}



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