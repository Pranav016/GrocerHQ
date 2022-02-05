import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import GrocerForm from './GrocerForm';

const GrocerElement = ({
	grocerItems,
	completeItem,
	removeItem,
	updateItem,
}) => {
	const [edit, setEdit] = useState({
		id: null,
		name: '',
	});

	const submitUpdate = (newVal) => {
		updateItem(edit.id, newVal.name);
		setEdit({ id: null, name: '' });
	};

	if (edit.id) {
		return (
			<GrocerForm
				onSubmit={submitUpdate}
				placeholder={'Update the Item'}
				grocerButton={'Update'}
			/>
		);
	}

	return grocerItems.map((item, index) => (
		<div
			className={
				item.isComplete ? 'grocer-item-row complete' : 'grocer-item-row'
			}
			key={index}>
			<div key={item.id} onClick={() => completeItem(item.id)}>
				{item.name}
			</div>
			<div className='icons'>
				<RiCloseCircleLine
					onClick={() => removeItem(item.id)}
					className='delete-icon'
				/>
				<TiEdit
					onClick={() => setEdit({ id: item.id, name: item.name })}
					className='edit-icon'
				/>
			</div>
		</div>
	));
};

export default GrocerElement;
