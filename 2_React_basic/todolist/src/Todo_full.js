import { useState } from 'react';
import './App.css';

function Todo() {
    const [todos, setTodos] = useState([{ id: 1, task: 'x투두만들기' }]);

    const [text, setText] = useState('');

    const [editingId, setEditingId] = useState('');
    const [editText, setEditText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const addTodo = () => {
        if (text.trim().length === 0) return;
        setTodos((prev) => [
            ...prev,
            { id: Math.floor(Math.random() * 100) + 2, task: text }
        ]);
        setText('');
        console.log(text);
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    };

    const updateTodos = (id, text) => {
        setTodos((prev) =>
            prev.map((item) => (item.id === id ? { ...item, task: text } : item))
        );
        setEditingId('');
    };

    return (
        <>
            <div className= "todoInput" onSubmit={handleSubmit}>
                <input type='text' value={text} onChange={(e) => {
                    setText(e.target.value);
                }} />
                <button onClick={() => addTodo()} type='submit'>할 일 등록</button>
            </div>
            <div>
                {todos.map((todo, _) =>
                    <div key={todo.id} style={{ display: 'flex', gap: '20px' }}>
                        {editingId !== todo.id && (
                            <div key={todo.id} style={{ display: 'flex', gap: '5px' }}>
                                <p>{todo.id}번</p>
                                <p>{todo.task}</p>
                            </div>
                        )}
                        {editingId === todo.id && (
                            <div key={todo.id} style={{ display: 'flex', gap: '5px' }}>
                                <p>{todo.id}번</p>
                                <input defaultValue={todo.task} onChange={(e) => setEditText(e.target.value)} />
                            </div>
                        )}
                        <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>

                        {editingId === todo.id ? (
                            <button onClick={() => updateTodos(editingId, editText)}>수정 완료</button>
                        ) : (
                            <button onClick={() => {
                                setEditingId(todo.id);
                                setEditText(todo.task); // 기존 값으로 초기화
                            }}>수정 진행</button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default Todo;
