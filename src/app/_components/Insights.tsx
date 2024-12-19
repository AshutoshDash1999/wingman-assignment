"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80, mac: 50 },
  { month: "February", desktop: 305, mobile: 200, mac: 70 },
  { month: "March", desktop: 237, mobile: 120, mac: 60 },
  { month: "April", desktop: 73, mobile: 190, mac: 40 },
  { month: "May", desktop: 209, mobile: 130, mac: 55 },
  { month: "June", desktop: 214, mobile: 140, mac: 65 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  mac: {
    label: "Mac",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const Insights = () => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-tight mt-6 mb-8">
        Insights
      </h2>
      <div className="grid grid-cols-3 gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Bar Chart - Multiple</CardTitle>
            <CardDescription>Mon - June 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <ComposedChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                  label={{
                    value: "Month",
                    position: "insideBottomRight",
                    offset: -10,
                  }}
                />
                <YAxis
                  axisLine={false}
                  label={{
                    value: "Visitors",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  label={{
                    value: "Visitors",
                    angle: -90,
                    position: "insideRight",
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Line
                  dataKey="mobile"
                  type="natural"
                  stroke="var(--color-mobile)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="mac"
                  type="natural"
                  stroke="var(--color-mac)"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="3 4 5 2"
                />
                <Legend />
              </ComposedChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="col-span-1"></Card>
      </div>
    </div>
  );
};
export default Insights;
