const addForm = document.querySelector('.add_form');
const list = document.querySelector('.memos')

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

    list.innerHTML += html;
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