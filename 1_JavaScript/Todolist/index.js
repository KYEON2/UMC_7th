document.addEventListener('DOMContentLoaded', function() { // HTML 문서가 완전히 로드된 후 특정 입력 필드에서 'Enter' 키를 누를 때, 입력된 내용을 처리하여 할 일 목록에 추가하는 기능을 구현
    const input = document.querySelector('.plan'); // 입력 필드 선택

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && this.value.trim() !== '') {
            addTask(this.value.trim()); // 입력된 값으로 새로운 할 일 추가 // 앞뒤 공백을 제거한 입력 필드의 값을 addTask() 함수에 전달
            this.value = ''; // 입력 필드 초기화
        }
    });
});

function addTask(task) {
    const todoList = document.querySelector('.will_do'); // "해야 할 일" 목록 선택
    const li = document.createElement('li'); // 요소를 생성하는 것
    li.textContent = task;

    const completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    completeButton.classList.add('complete-button');
    completeButton.addEventListener('click', function() {
        moveToCompleted(li);
    });

    li.appendChild(completeButton);
    todoList.appendChild(li); // 올바른 부모 요소에 추가
}

function moveToCompleted(taskItem) {
    const completedList = document.querySelector('.done'); // "완료된 일" 목록 선택
    taskItem.removeChild(taskItem.querySelector('button')); // "완료" 버튼 제거

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.addEventListener('click', function() {
        taskItem.remove(); // 항목 삭제
    });

    taskItem.appendChild(deleteButton);
    completedList.appendChild(taskItem); // 올바른 부모 요소에 추가
}
