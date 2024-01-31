let dMemo = document.querySelector('.detail_memo');
let dTitle = document.querySelector('.detail_title');
let dText = document.querySelector('.detail_text');
let editBtn = document.querySelector('#editBtn');

let detailData = localStorage.getItem('data');
detailData = JSON.parse(detailData);
console.log('detailData :', detailData);

const thisId = window.location.search.slice(2);
console.log('지금 아이디 :', thisId);

const real = detailData.find((e) => {
    return e.id.toString() === thisId;
});

console.log('아이디 똑같은거 가져옴 :', real);

const dtailMemo = () => {
    dTitle.value = real.title;
    dText.value = real.text;
};

window.onload = () => {
    dtailMemo();
};

editBtn.addEventListener('click', () => {
    real.title = dTitle.value;
    real.text = dText.value;
    localStorage.setItem('data', JSON.stringify(detailData));
});

// 수정설명
// editBtn <-- 수정버튼임 이거 눌렀을때 디테일페이지에 뿌려줄때 하는것처럼
//  real.title에 dTitle.value , real.text에 dTitle.value를 넣어준다음 로컬스토리지에 다시 저장해주면됨!!
// 되긴하는데 확인필요 !! 공부하기 !!




