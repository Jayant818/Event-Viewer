import React, { useState } from "react";

const EventTypeList = ({ setSelectedEventType, selectedEventType }) => {
	const eventTypes = Array.from(
		{ length: 20 },
		(_, index) => `Event Type ${index + 1}`
	);

	const handleClick = (eventType) => {
		setSelectedEventType([...selectedEventType, eventType]);
	};

	return (
		<div className="h-[19rem] overflow-y-auto">
			{/* <div className="h-[16rem] overflow-y-auto"> */}
			<ul className="flex flex-col ">
				{eventTypes.map((eventType) => (
					<li
						key={eventType}
						className="border-b-2 border-gray-500 px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer"
						onClick={() => handleClick(eventType)}
					>
						{eventType}
					</li>
				))}
			</ul>
		</div>
	);
};

export default EventTypeList;
