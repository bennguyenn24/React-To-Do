import { useState } from "react";

const NewToDo = ({ addItem }) => {
	const INITIAL_STATE = {
		name: "",
		priorityLevel: "",
	};

	const [formData, setFormData] = useState(INITIAL_STATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
	};

	console.log(formData);

	const handleSubmit = (e) => {
		e.preventDefault();
		addItem(formData.name, formData.priorityLevel);
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">To Do :</label>
			<input
				type="text"
				placeholder="Add To Do"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleChange}
			/>
			<label htmlFor="priorityLevel">Priority Level:</label>
			<select
				id="priorityLevel"
				name="priorityLevel"
				value={formData.priorityLevel}
				onChange={handleChange}
			>
                <option>Select Priority</option>
				<option value="High Priority">High Priority</option>
				<option value="Mid Priority">Mid Priority</option>
				<option value="Low Priority">Low Priority</option>
			</select>
			<button className="button">
                <span className="text">Add To Do</span>
                <i className="ri-check-line icon"></i>
            </button>
		</form>
	);
};

export default NewToDo;
