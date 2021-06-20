import React, { useState } from 'react';
import GrocerForm from './GrocerForm';
import GrocerElement from './GrocerElement';

const GrocerList = () => {
	const [grocerItems, setGrocerItems] = useState([]);

	const addItem = (newItem) => {
		if (!newItem.name || /^\s*$/.test(newItem.name)) {
			return;
		}
		setGrocerItems((prevState) => [...prevState, newItem]);
	};

	const completeItem = (id) => {
		let updatedGrocerItems = grocerItems.map((item) => {
			if (item.id === id) {
				item.isComplete = !item.isComplete;
			}
			return item;
		});
		setGrocerItems(updatedGrocerItems);
	};

	const removeItem = (id) => {
		let updatedGrocerItems = grocerItems.filter((item) => {
			return item.id !== id;
		});
		setGrocerItems(updatedGrocerItems);
	};

	const updateItem = (id, name) => {
		if (!name || /^\s*$/.test(name)) {
			return;
		}
		setGrocerItems((prev) =>
			prev.map((item) => (item.id === id ? { id, name } : item))
		);
	};

	return (
		<>
			<h1>What's on your Grocery List ?</h1>
			<GrocerForm onSubmit={addItem} />
			<GrocerElement
				grocerItems={grocerItems}
				completeItem={completeItem}
				removeItem={removeItem}
				updateItem={updateItem}
			/>
		</>
	);
};

export default GrocerList;
