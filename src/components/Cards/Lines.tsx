'use client';

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data /* see data tab */ }: any) => {
	return <ResponsiveLine
		data={data}
		// margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
		xScale={{ type: 'point' }}
		yScale={{
			type: 'linear',
			min: 'auto',
			max: 'auto',
			stacked: true,
			reverse: false
		}}
		yFormat=" >-.2f"
		curve="basis"
		axisTop={null}
		axisRight={null}
		axisBottom={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'transportation',
			legendOffset: 36,
			legendPosition: 'middle',
			// truncateTickAt: 0
		}}
		axisLeft={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'count',
			legendOffset: -40,
			legendPosition: 'middle',
			// truncateTickAt: 0
		}}
		enableGridX={false}
		// colors={{ scheme: 'nivo' }}
		lineWidth={6}
		enablePoints={false}
		pointSize={9}
		pointColor={{ theme: 'background' }}
		pointBorderWidth={2}
		pointBorderColor={{ from: 'serieColor' }}
		pointLabelYOffset={-12}
		areaBlendMode="screen"
		useMesh={true}
		// legends={[
		// 	{
		// 		anchor: 'bottom-right',
		// 		direction: 'column',
		// 		justify: false,
		// 		translateX: 111,
		// 		translateY: 0,
		// 		itemsSpacing: 0,
		// 		itemDirection: 'left-to-right',
		// 		itemWidth: 80,
		// 		itemHeight: 20,
		// 		itemOpacity: 0.75,
		// 		symbolSize: 12,
		// 		symbolShape: 'circle',
		// 		symbolBorderColor: 'rgba(0, 0, 0, .5)',
		// 		effects: [
		// 			{
		// 				on: 'hover',
		// 				style: {
		// 					itemBackground: 'rgba(0, 0, 0, .03)',
		// 					itemOpacity: 1
		// 				}
		// 			}
		// 		]
		// 	}
		// ]}
	/>
}

export default function Lines() {

	const data = [
		{
			"id": "japan",
			"color": "hsl(324, 70%, 50%)", // 289
			"data": [
				{
					"x": "plane",
					"y": 23
				},
				{
					"x": "helicopter",
					"y": 146
				},
				{
					"x": "boat",
					"y": 166
				},
				{
					"x": "train",
					"y": 60
				},
				{
					"x": "subway",
					"y": 172
				},
				{
					"x": "bus",
					"y": 70
				},
				{
					"x": "car",
					"y": 33
				},
				{
					"x": "moto",
					"y": 15
				},
				{
					"x": "bicycle",
					"y": 33
				},
				{
					"x": "horse",
					"y": 142
				},
				{
					"x": "skateboard",
					"y": 280
				},
				{
					"x": "others",
					"y": 136
				}
			]
		},
		{
			"id": "france",
			"color": "hsl(163, 70%, 50%)",
			"data": [
				{
					"x": "plane",
					"y": 160
				},
				{
					"x": "helicopter",
					"y": 113
				},
				{
					"x": "boat",
					"y": 56
				},
				{
					"x": "train",
					"y": 202
				},
				{
					"x": "subway",
					"y": 247
				},
				{
					"x": "bus",
					"y": 34
				},
				{
					"x": "car",
					"y": 288
				},
				{
					"x": "moto",
					"y": 144
				},
				{
					"x": "bicycle",
					"y": 50
				},
				{
					"x": "horse",
					"y": 69
				},
				{
					"x": "skateboard",
					"y": 119
				},
				{
					"x": "others",
					"y": 9
				}
			]
		},
		{
			"id": "us",
			"color": "hsl(119, 70%, 50%)",
			"data": [
				{
					"x": "plane",
					"y": 123
				},
				{
					"x": "helicopter",
					"y": 256
				},
				{
					"x": "boat",
					"y": 124
				},
				{
					"x": "train",
					"y": 232
				},
				{
					"x": "subway",
					"y": 170
				},
				{
					"x": "bus",
					"y": 222
				},
				{
					"x": "car",
					"y": 35
				},
				{
					"x": "moto",
					"y": 66
				},
				{
					"x": "bicycle",
					"y": 91
				},
				{
					"x": "horse",
					"y": 274
				},
				{
					"x": "skateboard",
					"y": 234
				},
				{
					"x": "others",
					"y": 249
				}
			]
		},
		{
			"id": "germany",
			"color": "hsl(339, 70%, 50%)",
			"data": [
				{
					"x": "plane",
					"y": 240
				},
				{
					"x": "helicopter",
					"y": 237
				},
				{
					"x": "boat",
					"y": 277
				},
				{
					"x": "train",
					"y": 244
				},
				{
					"x": "subway",
					"y": 67
				},
				{
					"x": "bus",
					"y": 287
				},
				{
					"x": "car",
					"y": 5
				},
				{
					"x": "moto",
					"y": 80
				},
				{
					"x": "bicycle",
					"y": 293
				},
				{
					"x": "horse",
					"y": 99
				},
				{
					"x": "skateboard",
					"y": 104
				},
				{
					"x": "others",
					"y": 297
				}
			]
		},
		{
			"id": "norway",
			"color": "hsl(274, 70%, 50%)",
			"data": [
				{
					"x": "plane",
					"y": 159
				},
				{
					"x": "helicopter",
					"y": 1
				},
				{
					"x": "boat",
					"y": 219
				},
				{
					"x": "train",
					"y": 298
				},
				{
					"x": "subway",
					"y": 106
				},
				{
					"x": "bus",
					"y": 260
				},
				{
					"x": "car",
					"y": 115
				},
				{
					"x": "moto",
					"y": 43
				},
				{
					"x": "bicycle",
					"y": 194
				},
				{
					"x": "horse",
					"y": 68
				},
				{
					"x": "skateboard",
					"y": 189
				},
				{
					"x": "others",
					"y": 82
				}
			]
		}
	]

	return <Card className='w-full'>
		<CardHeader>
			<CardTitle>Lines</CardTitle>
			<CardDescription>These are the stats of this week.</CardDescription>
		</CardHeader>
		<CardContent className="h-[264px] flex items-center w-full">
			<MyResponsiveLine data={data} />
		</CardContent>
	</Card>;

}