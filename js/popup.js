let deleteOpen = document.querySelector('#deleteOpen');
let modal = document.querySelector('.black-bg');
let deleteBtn = document.querySelector('#deleteBtn');
let closeBtn = document.querySelector('.close');

deleteOpen.addEventListener('click', () => {
    modal.classList.add('show-modal');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show-modal');
    }
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
});

deleteBtn.addEventListener('click', () => {
    detailData.map((e, index) => {
        if (e.id.toString() === thisId) {
            console.log('여기까지 왔음');
            detailData.splice(index, 1);
            localStorage.setItem('data', JSON.stringify(detailData));
        }
    });
    console.log('삭제버튼 누름');
    // console.log('deleteBtn :', deleteBtn);
    // console.log('detailData :', detailData);
    // console.log('thisId', typeof thisId);

    modal.classList.remove('show-modal');
    location.href = 'index.html';
});

//삭제 설명
// 1. 삭제 버튼 눌렀을때 localStorage로 저장했던 data를 가져온 detailData를 map으로 돌린다!!
//  e, i의 의미는 e는 그냥 이름지은거!! index는 몇번째인지 찾는거!!

// 2. index로 몇번째인지 찾는 방법은 //https://ordinary-code.tistory.com/172 이곳을 참고했다!
// e.id.toString() === thisId 로 같은 아이디인걸 찾은것임!! detail페이지와 같음 !
// 그다음 detailData.splice() 로 내가 찾은것을 배열에서 없애준다음 로컬스토리지에 setItem 해주었다 !
