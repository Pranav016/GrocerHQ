import React, { useRef, useState } from 'react';

const GrocerForm = (props) => {
	const [input, setInput] = useState('');
	const inputRef = useRef(null);

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
				placeholder='Add an item'
				className='grocer-input'
				value={input}
				ref={inputRef}
				onChange={handleChange}
			/>
			<button className='grocer-button'>Add an item</button>
		</form>
	);
};

export default GrocerForm;
