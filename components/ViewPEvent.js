import React from "react";

const ViewPEvent = ({ eventType }) => {
	const fakeData = Array.from({ length: 100 }, (_, index) => ({
		timestamp: new Date().toISOString(),
		randomNumber: Math.random(),
	}));

	return (
		<div className="h-[20rem] overflow-y-auto">
			<table className="min-w-full divide-y divide-gray-200">
				<tbody className="bg-white divide-y divide-gray-200">
					{fakeData.map((data, index) => (
						<tr key={index} className="flex">
							<td className="px-6 py-4 whitespace-nowrap flex flex-col">
								<span className="text-xs text-gray-400">Timestamp</span>
								{data.timestamp}
							</td>

							<td className="px-6 py-4 whitespace-nowrap flex flex-col">
								<span className="text-xs text-gray-400">ID</span>
								{data.randomNumber}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ViewPEvent;
