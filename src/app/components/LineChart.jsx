"use client"

import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material';
import {ChartData as data} from "../../../public/Data/ChartData"
import dynamic from "next/dynamic";

// const ResponsiveLine = dynamic(() => import("@nivo/line").then(m => m.ResponsiveLine), { ssr: false });

const LineChart = () => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 40, right: 40, bottom: 40, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      
      lineWidth={3}
      colors={{ scheme: 'dark2' }}
      pointSize={10}
      pointColor="#fcfcfc"
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "top",
          direction: "row",
          justify: false,
          translateX: 11,
          translateY: -40,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 44,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
