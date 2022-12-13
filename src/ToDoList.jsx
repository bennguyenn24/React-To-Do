import { useState } from "react";
import NewTodo from "./NewToDo";
import ToDo from "./ToDo";
import { v4 as uuidv4 } from 'uuid';

const ToDoList = () => {
    const [items, setItems] = useState([]);;

    const addItem = (name, priorityLevel) => {
        setItems(items => [...items, { id: uuidv4(), name, priorityLevel }])
    }

    const deleteToDo = (e) => {
        setItems(prevItems => prevItems.filter(item => item.id != e.target.parentNode.id))
    }

    return (
        <div>
            <h3>TO DO LIST TODAY</h3>
            <NewTodo addItem={addItem}/>
            <div>
                {items.map(({id, name, priorityLevel}) => <ToDo 
                id={id} 
                name={name} 
                priorityLevel={priorityLevel}
                key={id} 
                deleteToDo={deleteToDo}/>)}
            </div>
        </div>
    )

};

export default ToDoList;
