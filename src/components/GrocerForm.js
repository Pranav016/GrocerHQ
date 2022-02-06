import React, { useEffect, useRef, useState } from 'react';

const GrocerForm = (props) => {
	const [input, setInput] = useState(props.edit ? props.edit.name : '');
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(e.target.value);
		// console.log(inputRef.current.value);
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			name: inputRef.current.value,
		});
		setInput('');
	};

	return (
		<form className='grocer-form' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder={props.placeholder}
				className={`grocer-input ${props.edit ? 'edit' : ''}`}
				value={input}
				ref={inputRef}
				onChange={handleChange}
			/>
			<button className={`grocer-button ${props.edit ? 'edit' : ''}`}>
				{props.grocerButton}
			</button>
		</form>
	);
};

export default GrocerForm;
