import React, { useContext } from 'react';
import './App.css';
import Button from './component/Button';
import Input from './component/Input';
import { TodoContext } from './context/TodoContext';

function Todo() {
    const {
        todos, 
        text, 
        setText, 
        editingId, 
        setEditingId, 
        editText, 
        setEditText, 
        handleSubmit, 
        addTodo, 
        deleteTodo, 
        updateTodos,
    } = useContext(TodoContext);

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
