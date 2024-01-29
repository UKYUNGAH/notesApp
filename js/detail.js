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
    const plus = `
    <input type="text" name="add" class="detail_title c_title" value= ${real.title} required>
        <textarea name="add2" id="" class="detail_text c_text" required>${real.text}</textarea>
 
        <div class="btn_box ">
            <button type="button" id="deleteOpen" class="cbtn dbtn btn1">삭제</button>
            <button type="button" class="cbtn btn2" onclick="location.href='index.html'">수정</button>
        </div>`;

    dMemo.innerHTML += plus;
};

window.onload = () => {
    dtailMemo();
};




