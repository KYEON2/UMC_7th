import { createContext } from "react";
import { useState } from "react";

export const TodoContext = createContext();

export function TodoContextProvider({children}) {

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

    return <TodoContext.Provider value={{
        todos, 
        setTodos, 
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
    }}>{children}</TodoContext.Provider>
}