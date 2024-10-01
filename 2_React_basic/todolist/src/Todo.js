import React, { useState } from 'react';
import './App.css';
import Button from './component/Button';
import Input from './component/Input';

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
            <div className="todoInputCon" onSubmit={handleSubmit}>
                <Input className="todoInput" value={text} onChange={(e) => setText(e.target.value)} placeholder="   새로운 일을 입력하세요" />
                <Button className="todoButton" onClick={addTodo} label="+" type="submit" />
            </div>
            <div>
                {todos.map((todo) => (
                    <div className="todoOneLine" key={todo.id} >
                        {editingId !== todo.id && (
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <p>{todo.id}.</p>
                                <p>{todo.task}</p>
                            </div>
                        )}
                        {editingId === todo.id && (
                            <div className="list" >
                                <p>{todo.id}. </p>
                                <Input className="todoInput editInput" value={editText} onChange={(e) => setEditText(e.target.value)} />
                            </div>
                        )}
                        <div className='ButtonCon'>
                            <Button className='Button' onClick={() => deleteTodo(todo.id)} label="삭제" />

                            {editingId === todo.id ? (
                                <Button className='Button' onClick={() => updateTodos(editingId, editText)} label="완료" />
                            ) : (
                                <Button className='Button' onClick={() => {
                                    setEditingId(todo.id);
                                    setEditText(todo.task);
                                }} label="수정" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Todo;
