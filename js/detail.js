let dMemo = document.querySelector('.detail_memo');
let dTitle = document.querySelector('.detail_title');
let dText = document.querySelector('.detail_text');

let detailData = localStorage.getItem('data');
detailData = JSON.parse(detailData);
console.log(detailData);

const thisId = window.location.search.slice(2);
console.log('지금 아이디 :', thisId);

const real = detailData.find((e) => {
    return e.id.toString() === thisId;
});

console.log('아이디 똑같은거 가져옴 :', real);

const dtailMemo = () => {

dTitle.value =  real.title
dText.value = real.text
};


    
window.onload = () => {
    dtailMemo();
};

