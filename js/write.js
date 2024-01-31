const writeForm = document.querySelector('.write_form');

writeForm.addEventListener('submit', () => {
    let noteData = JSON.parse(localStorage.getItem('data'));
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
