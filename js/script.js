
const writeForm = document.querySelector('.write_form');
const list = document.querySelector('.memos');
const li = document.querySelector('.li');
const uu = document.querySelector('.uu');
const searchInput = document.querySelector('#searchId');



// ======================== write ========================
const saveMemo = () => {
    for (let i = 0; i < noteData.length; i++) {
        const html = `<li class = "li">
        <a href="detail.html?=${noteData[i].id}">
            <div class="top">
                <h4>${noteData[i].title}</h4>
            </div>
            <div class="bottom">
                <p>${noteData[i].text}</p>
            </div>
        </a>
    </li>`;
    // liTitle.href = `detail.html?id=${noteData[i].id}`;
    // liTitle.innerHTML = noteData[i].title            
    // liText.innerHTML = noteData[i].title            

        list.innerHTML += html;
    }
};



// ===================================== 검색 =====================================



//윈도우가 로드 됐을때.
window.onload = () => {
    if (noteData === null) {
        localStorage.setItem('data', JSON.stringify([]));
        uu.classList.add('block');
    } else {
        uu.classList.remove('block');
        uu.classList.add('none');
        
    }
    
    saveMemo();
};



writeForm.addEventListener('submit', () => {
    const memo = writeForm.querySelector('[name="add"]').value;
    const memo2 = writeForm.querySelector('[name="add2"]').value;

    const todo = {
        id: Date.now(),
        title: memo,
        text: memo2,
    };
    
    noteData.push(todo);

    localStorage.setItem('data', JSON.stringify(noteData));
});

let noteData = localStorage.getItem('data');
noteData = JSON.parse(noteData);
searchInput.addEventListener('keyup', () => {
    const searchInputValue = searchInput.value;
    const allLi = document.querySelectorAll('.li');
    //누른 키가 li안에 텍스트 하나라도있으면 보이고 없으면 안보이게
    allLi.forEach((a, i) => {
        const liText = a.textContent;

        const result = liText.includes(searchInputValue);

        console.log('liText :', liText);
        console.log('result :', result);

        if (result) {
            a.classList.remove('filtered');
        } else {
            a.classList.add('filtered');
        }
    });
});


