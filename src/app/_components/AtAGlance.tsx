import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Check,
  Coins,
  DollarSignIcon,
  MessageCircle,
  PiggyBank,
  Tag,
} from "lucide-react";

const metrics = [
  {
    title: "Consultations",
    value: 24,
    change: 15,
    prefix: MessageCircle,
  },
  {
    title: "Orders Placed",
    value: 12,
    change: -15,
    prefix: Tag,
  },
  {
    title: "Conversion",
    value: "50%",
    change: -15,
    prefix: Check,
  },
  {
    title: "Total Sales Value",
    value: 2400,
    change: 15,
    prefix: Coins,
  },
  {
    title: "Avg Order Value",
    value: 240,
    change: 15,
    prefix: DollarSignIcon,
  },
  {
    title: "Commission Paid",
    value: 240,
    change: 15,
    prefix: PiggyBank,
  },
];

const AtAGlance = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-medium tracking-tight">At a glance</h2>
        <Select>
          <SelectTrigger className="w-28">
            <SelectValue placeholder="7 days" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">7 days</SelectItem>
            <SelectItem value="30days">30 days</SelectItem>
            <SelectItem value="6months">6 months</SelectItem>
            <SelectItem value="1year">1 year</SelectItem>
            <SelectItem value="5years">5 years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {metrics.map((metric) => {
          const isIncrease = metric?.change > 0;

          return (
            <Card className="relative" key={metric?.title}>
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
                  {Math.abs(metric?.change)}%{" "}
                  {isIncrease ? "increase" : "decrease"}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
export default AtAGlance;
