import React, { useState } from "react";
import ViewPEvent from "./ViewPEvent";

const ViewEvent = ({ eventTypes, setSelectedEventType }) => {
	const [selectedTab, setSelectedTab] = useState(null);

	const handleTabClick = (index) => {
		setSelectedTab(index);
	};

	const handleRemove = (index) => {
		const updatedEventTypes = [...eventTypes];
		updatedEventTypes.splice(index, 1);

		setSelectedTab(null);
		eventTypes = updatedEventTypes;
		setSelectedEventType(eventTypes);
	};

	return (
		<div className="h-full  mt-[-56px]">
			<div className="flex items-center">
				{eventTypes.map((eventType, index) => (
					<div key={index} className="inline-flex flex-wrap">
						<button
							className={`py-1 px-2 rounded  mr-2 text-sm ${
								selectedTab === index ? "bg-blue-500 text-white" : "bg-gray-200"
							}`}
							onClick={() => handleTabClick(index)}
						>
							{eventType}{" "}
							<span
								// className="py-1 px-1 rounded-lg "
								onClick={() => handleRemove(index)}
							>
								&#x2716;
							</span>
						</button>
					</div>
				))}
			</div>

			<div className="mt-4">
				{selectedTab !== null && (
					<ViewPEvent eventType={eventTypes[selectedTab]} />
				)}
			</div>
		</div>
	);
};

export default ViewEvent;
