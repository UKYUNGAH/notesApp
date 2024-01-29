
const writeForm = document.querySelector('.write_form');
const list = document.querySelector('.memos');
const li = document.querySelector('.li');
const uu = document.querySelector('.uu');
const searchInput = document.querySelector('.search input');


let noteData = localStorage.getItem('data');
noteData = JSON.parse(noteData);

// ======================== write ========================
const saveMemo = memotext => {
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

        list.innerHTML += html;
    }
};


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



// // ====== 4 검색!!
// searchInput.addEventListener('keyup', e => {
//     // 검색하는 값 가져오기
//     const searchText = searchInput.value.toLowerCase();
//     console.log(searchText)

//     filterMemo(searchText);
// });

// const filterMemo = memo => {
//     const memos = list.querySelectorAll('.li');
//     memos.forEach(memotext => {
//         const textContent = memotext.textContent.toLowerCase();
//         const memoLowerCase = memo.toLowerCase(); // 검색어를 소문자로 변환
//         if (!textContent.includes(memoLowerCase)) { // 소문자로 변환한 검색어와 메모의 텍스트를 비교
//             memotext.classList.add('filtered');
//         } else {
//             memotext.classList.remove('filtered');
//         }
//     });
// };
