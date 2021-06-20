import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const GrocerElement = ({ grocerItems, completeItem, removeItem }) => {
	const [edit, setEdit] = useState({
		id: null,
		name: '',
	});

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
