import React, { useState } from 'react';

function ToDoList() {
    const [valueInput, setValueInput] = useState("");
    const [arrValue, setArrValue] = useState([]);
    const [checkboxStatus, setCheckboxStatus] = useState([]);

    const handleChangeValue = (e) => {
        setValueInput(e.target.value);
    }

    const handleClick = () => {
        setArrValue([...arrValue, valueInput]);
        setCheckboxStatus([...checkboxStatus, false]); 
        setValueInput("");
    }

    const handleDelete = (indexToDelete) => {
        const updatedArr = arrValue.filter((_, index) => index !== indexToDelete);
        const updatedStatus = checkboxStatus.filter((_, index) => index !== indexToDelete);
        setArrValue(updatedArr);
        setCheckboxStatus(updatedStatus);
    }

    const handleCheckBox = (index) => {
        const updatedStatus = [...checkboxStatus];
        updatedStatus[index] = !updatedStatus[index];
        setCheckboxStatus(updatedStatus);
    }

    return (
        <div>
            <div className="todolist">
                <h1>Todo List</h1>
                <small>Get things done, one item at a time</small>
                <div className='line'></div>
                {arrValue.map((value, index) => (
                    <div key={index} className='value'>
                        <p style={{ textDecoration: checkboxStatus[index] ? "line-through" : "none" }}>{value}</p>
                        <input
                            type="checkbox"
                            checked={checkboxStatus[index]}
                            onChange={() => { handleCheckBox(index) }}
                        />
                        <u onClick={() => { handleDelete(index) }}>Delete</u>
                    </div>
                ))}
                <h3>Add Todo List</h3>
                <input type="text" value={valueInput} name="" id="addTodo" onChange={handleChangeValue} />
                <button onClick={handleClick}>ADD ITEM</button>
            </div>
        </div>
    )
}

export default ToDoList;
