import React, { useState } from 'react';
import GrocerForm from './GrocerForm';

const GrocerList = () => {
	const [grocerItems, setGrocerItems] = useState([]);

	const addItem = (newItem) => {
		if (!newItem.name || /^\s*$/.test(newItem.name)) {
			return;
		}
		setGrocerItems((prevState) => [...prevState, newItem]);
	};

	return (
		<>
			<h1>What's on your Grocery List ?</h1>
			<GrocerForm onSubmit={addItem} />
			{grocerItems &&
				grocerItems.map((item) => <li key={item.id}>{item.name}</li>)}
		</>
	);
};

export default GrocerList;
