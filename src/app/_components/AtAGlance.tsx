"use client";

import SectionLoadError from "@/components/common/SectionLoadError";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useApiData } from "@/hooks/useApiData";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Check,
  Coins,
  DollarSignIcon,
  Loader,
  MessageCircle,
  PiggyBank,
  Tag,
} from "lucide-react";
import { useState } from "react";

const AtAGlance = () => {
  const [selectedDuration, setSelectedDuration] = useState("7days");

  const {
    data: atAGlanceData,
    isLoading: isAtAGlanceDataLoading,
    error: atAGlanceDataError,
  } = useApiData<{
    data: {
      consultations: { value: number; change: number };
      orders_placed: { value: number; change: number };
      conversion: { value: number; change: number };
      total_sales_value: { value: number; change: number };
      avg_order_value: { value: number; change: number };
      commission_paid: { value: number; change: number };
    };
  }>(`/api/v1/at-a-glance?duration=${selectedDuration}`);

  const metricsData = [
    {
      title: "Consultations",
      value: atAGlanceData?.data?.consultations?.value,
      change: atAGlanceData?.data?.consultations?.change,
      prefix: MessageCircle,
    },
    {
      title: "Orders Placed",
      value: atAGlanceData?.data?.orders_placed?.value,
      change: atAGlanceData?.data?.orders_placed?.change,
      prefix: Tag,
    },
    {
      title: "Conversion",
      value: atAGlanceData?.data?.conversion?.value,
      change: atAGlanceData?.data?.conversion?.change,
      prefix: Check,
    },
    {
      title: "Total Sales Value",
      value: atAGlanceData?.data?.total_sales_value?.value,
      change: atAGlanceData?.data?.total_sales_value?.change,
      prefix: Coins,
    },
    {
      title: "Avg Order Value",
      value: atAGlanceData?.data?.avg_order_value?.value,
      change: atAGlanceData?.data?.avg_order_value?.change,
      prefix: DollarSignIcon,
    },
    {
      title: "Commission Paid",
      value: atAGlanceData?.data?.commission_paid?.value,
      change: atAGlanceData?.data?.commission_paid?.change,
      prefix: PiggyBank,
    },
  ];

  if (atAGlanceDataError) {
    return <SectionLoadError />;
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium tracking-tight">At a glance</h2>
          <Select
            value={selectedDuration}
            onValueChange={(value) => {
              setSelectedDuration(value);
            }}
          >
            <SelectTrigger className="w-28">
              <SelectValue placeholder="7 days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">7 days</SelectItem>
              <SelectItem value="1month">1 month</SelectItem>
              <SelectItem value="6months">6 months</SelectItem>
              <SelectItem value="1year">1 year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {metricsData.map((metric) => {
            const isIncrease = metric?.change || 1 > 0;

            return (
              <Card key={metric?.title}>
                {isAtAGlanceDataLoading ? (
                  <div className="flex items-center justify-center h-32">
                    <Loader className="animate-spin size-12 text-neutral-300" />
                  </div>
                ) : (
                  <CardContent className="pt-6 flex flex-col gap-3">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider flex gap-2 items-center font-semibold">
                      <metric.prefix className="size-4" />
                      {metric?.title}
                    </p>
                    <h3 className="text-2xl font-medium">
                      {typeof metric?.value === "number"
                        ? metric?.value.toLocaleString()
                        : metric?.value}
                    </h3>
                    <div
                      className={`flex items-center gap-1 ${
                        isIncrease ? "text-emerald-600" : "text-red-600"
                      }`}
                    >
                      {isIncrease ? (
                        <ArrowUpIcon className="h-4 w-4" />
                      ) : (
                        <ArrowDownIcon className="h-4 w-4" />
                      )}
                      {Math.abs(metric?.change || 0)}%{" "}
                      {isIncrease ? "increase" : "decrease"}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default AtAGlance;
