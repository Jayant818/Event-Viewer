"use client";

import EventTypeList from "@/components/EventTypeList";
import ViewEvent from "@/components/ViewEvent";
import { useState } from "react";

const Home = () => {
	const [selectedEventType, setSelectedEventType] = useState([]);

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="container mx-auto bg-white p-4 w-[80%] h-[65%] border-2 border-gray-200">
				<h1 className="text-2xl font-bold mb-4 bg-gray-600 text-white py-2 px-4">
					Events Viewer
				</h1>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<EventTypeList
							setSelectedEventType={setSelectedEventType}
							selectedEventType={selectedEventType}
						/>
					</div>
					<div className="h-[60%]">
						{selectedEventType && (
							<>
								<ViewEvent
									eventTypes={selectedEventType}
									setSelectedEventType={setSelectedEventType}
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
