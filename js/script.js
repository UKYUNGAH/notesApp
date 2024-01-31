const list = document.querySelector('.memos');
const li = document.querySelector('.li');
const uu = document.querySelector('.uu');
const searchInput = document.querySelector('#searchId');

let noteData = JSON.parse(localStorage.getItem('data'));
// noteData = JSON.parse(noteData);


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

        list.innerHTML += html;
    }
};

searchInput.addEventListener('keyup', () => {
    const searchInputValue = searchInput.value;
    const allLi = document.querySelectorAll('.li');
    //누른 키가 li안에 텍스트 하나라도있으면 보이고 없으면 안보이게
    allLi.forEach((a, i) => {
        const liText = a.textContent.toLowerCase();

        const result = liText.includes(searchInputValue);

        if (result) {
            a.classList.remove('filtered');
            uu.classList.add('none');
            uu.classList.remove('block');
        } else {
            a.classList.add('filtered');
            uu.classList.add('block');
            uu.classList.remove('none');
        }
    });
});

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
