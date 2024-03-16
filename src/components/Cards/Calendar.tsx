"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveTimeRange } from '@nivo/calendar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveCalendar = ({ data /* see data tab */ }: any) => {
    return <ResponsiveTimeRange
        data={data}
        from="2023-01-01"
        to="2024-01-01"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        // margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
    // legends={[
    //     {
    //         anchor: 'bottom-right',
    //         direction: 'row',
    //         justify: false,
    //         itemCount: 4,
    //         itemWidth: 42,
    //         itemHeight: 36,
    //         itemsSpacing: 14,
    //         itemDirection: 'right-to-left',
    //         translateX: -60,
    //         translateY: -60 + 20,
    //         symbolSize: 20,
    //     }
    // ]}
    />
}


export default function Calendar() {
    const data = [
        {
            "value": 373,
            "day": "2018-07-31"
        },
        {
            "value": 222,
            "day": "2018-04-18"
        },
        {
            "value": 111,
            "day": "2018-06-23"
        },
        {
            "value": 245,
            "day": "2018-04-30"
        },
        {
            "value": 392,
            "day": "2018-07-10"
        },
        {
            "value": 153,
            "day": "2018-04-26"
        },
        {
            "value": 207,
            "day": "2018-06-09"
        },
        {
            "value": 299,
            "day": "2018-07-14"
        },
        {
            "value": 304,
            "day": "2018-05-13"
        },
        {
            "value": 46,
            "day": "2018-07-06"
        },
        {
            "value": 132,
            "day": "2018-06-14"
        },
        {
            "value": 72,
            "day": "2018-06-20"
        },
        {
            "value": 139,
            "day": "2018-05-15"
        },
        {
            "value": 46,
            "day": "2018-04-20"
        },
        {
            "value": 250,
            "day": "2018-04-02"
        },
        {
            "value": 116,
            "day": "2018-08-09"
        },
        {
            "value": 132,
            "day": "2018-05-29"
        },
        {
            "value": 221,
            "day": "2018-07-24"
        },
        {
            "value": 32,
            "day": "2018-07-03"
        },
        {
            "value": 111,
            "day": "2018-06-18"
        },
        {
            "value": 94,
            "day": "2018-07-25"
        },
        {
            "value": 238,
            "day": "2018-06-10"
        },
        {
            "value": 398,
            "day": "2018-06-16"
        },
        {
            "value": 148,
            "day": "2018-04-24"
        },
        {
            "value": 56,
            "day": "2018-08-02"
        },
        {
            "value": 9,
            "day": "2018-05-14"
        },
        {
            "value": 150,
            "day": "2018-08-05"
        },
        {
            "value": 370,
            "day": "2018-04-19"
        },
        {
            "value": 149,
            "day": "2018-04-25"
        },
        {
            "value": 216,
            "day": "2018-08-01"
        },
        {
            "value": 274,
            "day": "2018-05-10"
        },
        {
            "value": 192,
            "day": "2018-07-07"
        },
        {
            "value": 27,
            "day": "2018-06-26"
        },
        {
            "value": 333,
            "day": "2018-05-16"
        },
        {
            "value": 51,
            "day": "2018-05-22"
        },
        {
            "value": 329,
            "day": "2018-08-03"
        },
        {
            "value": 357,
            "day": "2018-07-30"
        },
        {
            "value": 66,
            "day": "2018-04-29"
        },
        {
            "value": 347,
            "day": "2018-07-29"
        },
        {
            "value": 248,
            "day": "2018-05-30"
        },
        {
            "value": 274,
            "day": "2018-06-06"
        },
        {
            "value": 41,
            "day": "2018-04-22"
        },
        {
            "value": 123,
            "day": "2018-06-21"
        },
        {
            "value": 64,
            "day": "2018-07-21"
        },
        {
            "value": 351,
            "day": "2018-06-02"
        },
        {
            "value": 5,
            "day": "2018-05-19"
        },
        {
            "value": 58,
            "day": "2018-07-08"
        },
        {
            "value": 365,
            "day": "2018-05-24"
        },
        {
            "value": 158,
            "day": "2018-06-17"
        },
        {
            "value": 166,
            "day": "2018-06-07"
        },
        {
            "value": 275,
            "day": "2018-08-07"
        },
        {
            "value": 259,
            "day": "2018-06-27"
        },
        {
            "value": 98,
            "day": "2018-08-04"
        },
        {
            "value": 26,
            "day": "2018-07-22"
        },
        {
            "value": 194,
            "day": "2018-05-17"
        },
        {
            "value": 248,
            "day": "2018-05-31"
        },
        {
            "value": 322,
            "day": "2018-07-20"
        },
        {
            "value": 144,
            "day": "2018-07-13"
        },
        {
            "value": 390,
            "day": "2018-04-14"
        },
        {
            "value": 118,
            "day": "2018-07-26"
        },
        {
            "value": 181,
            "day": "2018-06-13"
        },
        {
            "value": 289,
            "day": "2018-07-02"
        },
        {
            "value": 157,
            "day": "2018-05-26"
        },
        {
            "value": 100,
            "day": "2018-07-01"
        },
        {
            "value": 12,
            "day": "2018-07-17"
        },
        {
            "value": 143,
            "day": "2018-05-04"
        },
        {
            "value": 329,
            "day": "2018-04-06"
        },
        {
            "value": 86,
            "day": "2018-05-28"
        },
        {
            "value": 240,
            "day": "2018-07-09"
        },
        {
            "value": 57,
            "day": "2018-07-11"
        },
        {
            "value": 283,
            "day": "2018-08-06"
        },
        {
            "value": 232,
            "day": "2018-04-23"
        },
        {
            "value": 117,
            "day": "2018-06-04"
        },
        {
            "value": 225,
            "day": "2018-04-01"
        },
        {
            "value": 184,
            "day": "2018-05-03"
        },
        {
            "value": 200,
            "day": "2018-05-09"
        },
        {
            "value": 220,
            "day": "2018-07-19"
        },
        {
            "value": 231,
            "day": "2018-06-24"
        },
        {
            "value": 100,
            "day": "2018-04-17"
        },
        {
            "value": 367,
            "day": "2018-04-05"
        },
        {
            "value": 93,
            "day": "2018-04-27"
        },
        {
            "value": 301,
            "day": "2018-05-23"
        },
        {
            "value": 133,
            "day": "2018-07-28"
        },
        {
            "value": 381,
            "day": "2018-05-20"
        },
        {
            "value": 188,
            "day": "2018-05-06"
        },
        {
            "value": 32,
            "day": "2018-04-28"
        },
        {
            "value": 93,
            "day": "2018-05-12"
        },
        {
            "value": 335,
            "day": "2018-05-11"
        },
        {
            "value": 113,
            "day": "2018-04-13"
        },
        {
            "value": 343,
            "day": "2018-07-18"
        },
        {
            "value": 140,
            "day": "2018-06-12"
        },
        {
            "value": 226,
            "day": "2018-06-01"
        },
        {
            "value": 65,
            "day": "2018-05-27"
        },
        {
            "value": 122,
            "day": "2018-04-16"
        },
        {
            "value": 300,
            "day": "2018-07-05"
        },
        {
            "value": 32,
            "day": "2018-07-23"
        },
        {
            "value": 112,
            "day": "2018-08-11"
        },
        {
            "value": 125,
            "day": "2018-06-25"
        },
        {
            "value": 93,
            "day": "2018-05-08"
        },
        {
            "value": 250,
            "day": "2018-04-08"
        },
        {
            "value": 209,
            "day": "2018-07-27"
        },
        {
            "value": 382,
            "day": "2018-06-11"
        },
        {
            "value": 118,
            "day": "2018-05-18"
        },
        {
            "value": 52,
            "day": "2018-04-09"
        },
        {
            "value": 343,
            "day": "2018-06-19"
        }
    ]

    function generateDataForYear2023() {
        const data = [];

        const startDate = new Date("2023-01-01");
        const endDate = new Date("2023-12-31");

        while (startDate <= endDate) {
            const value = Math.floor(Math.random() * 301); // Random value between 0 and 300
            const year = startDate.getFullYear();
            const month = (startDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to get month from 1 to 12 and padding with zero if necessary
            const day = startDate.getDate().toString().padStart(2, '0'); // Padding with zero if necessary
            const formattedDate = `${year}-${month}-${day}`;

            data.push(
                {
                    "value": value,
                    "day": formattedDate
                }
            );

            startDate.setDate(startDate.getDate() + 1); // Move to the next day
        }

        return data;
    }

    const dataArray = generateDataForYear2023();

    return <Card className='w-full'>
        <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>These are the numbers of this year.</CardDescription>
        </CardHeader>
        <CardContent className="h-[100px] flex items-center w-full">
            <MyResponsiveCalendar data={dataArray} />
        </CardContent>
    </Card>;

}