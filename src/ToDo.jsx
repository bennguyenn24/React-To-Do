const ToDo = ({ id, name, priorityLevel, deleteToDo }) => {
	return (
		<li id={id}>
			<span>{name}</span>
            <span>{priorityLevel}</span>
			<button onClick={deleteToDo}>Delete</button>
		</li>
	);
};

export default ToDo;
