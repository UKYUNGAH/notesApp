let more = document.querySelectorAll('.m_btn');
let modal = document.querySelectorAll('.black-bg');
let closeBtn = document.querySelectorAll('.close');
const writeForm = document.querySelector('.write_form');
const list = document.querySelector('.memos')
const uu = document.querySelector('.uu')



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



// ======================== write ========================

//여기는 이름이 세이브메모 라기보단 그냥 게시판 리스트를 추가해주기위한 함수다 세이브랑 관계없다.
const saveMemo = () => {

    for(let i = 0; i < noteData.length; i++){
        const html = `<li>
        <a href="detail.html">
            <div class="top">
                <h4>${noteData[i].title}</h4>
                <button type="button">
                    <img src="./img/more.png" alt="">
                </button>
            </div>
            <div class="bottom">
                <p>${noteData[i].text}</p>
            </div>
        </a>
    </li>`

    list.innerHTML += html

    }



}


//1. 문제풀때 상단에 구한 답을 넣을 빈 배열을 만드는 것처럼 밑에도 이해하면됨.
//let result = []
//////////////////////////////////////////


//윈도우가 로드 됐을때.
window.onload = () => {
    if( !noteData.length ){
        // 1. 로컬스토리지에 data 라는 이름으로, 제이슨언어로 된 빈 배열을 만든다.
        localStorage.setItem('data', JSON.stringify([]));
        uu.classList.add('block');
        uu.classList.remove('none');
    }else{
        uu.classList.add('none');
        uu.classList.remove('block');
    }

    //saveMemo를 윈도우 켜질때 사용한 이유는 ?
    //saveMemo가 윈도우 켜질때 없다면, 로컬스토리지가 아니라 서버를 사용할때는 어제 적은 노트가 있을수도있는데
    // 윈도우 켜질때가아니라 글을 쓸 때 saveMemo가 실행하게 되어있다면 어제쓴게 안보이다가 글을 쓰면 다보인다
    saveMemo();
    
}
// 그래서 (1)번에서 만들어준 빈배열인 data 를 로컬스토리지.겟아이템 으로 가져 온다음 변수에 담는다 이름은 상관없지만 지금은 noteData 이름으로 해놨다.
// 2. 근데!!!! 사용하려고 보니!!!!! (1) 번에서 만든 빈배열은 무엇이다? 제이슨언어다!
let noteData = localStorage.getItem('data');

// 그래서 우리가 배열에 추가하는 함수인 푸쉬를 사용하기 위해서는 우리가 사용하는 스크립트언어로 바꿔줘야한다.
// 이걸 우리가 사용하는 스크립트언어로 파싱(변환) 해주는 JSON.parse 라는 함수를 사용한다.
noteData = JSON.parse(noteData);

writeForm.addEventListener('submit', () => {
   
    const memo = writeForm.querySelector('[name="add"]').value;
    const memo2 = writeForm.querySelector('[name="add2"]').value;

    // 3. 변수에 오브젝트 형태로 내가 저장할 데이터들을 담아준다.!!!!!
    // 왜 오브젝트로할까!? 담아야 할 데이터가 한번에 여러개를 담아야하기때문에
    // 한개여도 오브젝트형태로 해도된다.
    // 내가 만약 경아라는 사람을 저장해야한다. 근데 이름,성별,지역
    // ex) const 경아 = { name: '경아', gender : 'female', ~~~~~~ } 이런 경우에 오브젝트를 쓴다
    // 그래서 우리는 제목,내용,시간 등등 많은 정보가 필요하기때문에 오브젝트를 사용했다.!!!!
    const todo = {
        id:Date.now(),
        title: memo,
        text: memo2,
    }

    // 4. 그다음 우리가 (1번)에서 했던작업 했던 작업!!!!!! 무엇을했었냐!!!!!!!
    // data라는 빈배열을 로컬스토리지.겟아이템으로 가져온다음 그걸 noteData에 담고 그걸 우리가 빈배열을 사용할수있게 JSON.parse해주었다.
    // 그래서 푸쉬를 할수있다.
    noteData.push(todo);

    //5번 노트데이터에 투두를 넣었다!!! 그리고 다시 노트데이터에 로컬스토리지.셋아이템 으로 저장해준다. 
    // 근데!!!!!!! 지금 노트데이터가 무슨상태다? 
    // 그렇다 (1)번에서 우리는 노트데이터를 우리가 사용할수있게 제이슨언어에서 파싱(변환) 시켜준 상태이다.
    // 그래서 다시 제이슨언어로 변환시켜서 저장해주었다.
    localStorage.setItem('data', JSON.stringify(noteData));
})