import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dayjs from "dayjs";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const orders = [
  {
    product: "Product A",
    date: "2023-10-01",
    timeSpent: "2 hours",
    orderValue: "$234550.00",
    commission: "$25.00",
  },
  {
    product: "Product B",
    date: "2023-10-02",
    timeSpent: "1.5 hours",
    orderValue: "$123450.00",
    commission: "$15.00",
  },
  {
    product: "Product C",
    date: "2023-10-03",
    timeSpent: "3 hours",
    orderValue: "$323450.00",
    commission: "$35.00",
  },
  {
    product: "Product D",
    date: "2023-10-04",
    timeSpent: "4 hours",
    orderValue: "$434550.00",
    commission: "$45.00",
  },
  {
    product: "Product E",
    date: "2023-10-05",
    timeSpent: "5 hours",
    orderValue: "$55120.00",
    commission: "$55.00",
  },
  {
    product: "Product F",
    date: "2023-10-06",
    timeSpent: "2.5 hours",
    orderValue: "$201230.00",
    commission: "$20.00",
  },
  {
    product: "Product G",
    date: "2023-10-07",
    timeSpent: "3.5 hours",
    orderValue: "$304350.00",
    commission: "$30.00",
  },
];

const Orders = () => {
  return (
    <section>
      <h2 className="text-3xl font-medium tracking-tight mb-8 mt-6">Orders</h2>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Product</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time Spent</TableHead>
              <TableHead>Order Value</TableHead>
              <TableHead>Commision</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order?.product}>
                <TableCell className="font-medium">{order?.product}</TableCell>
                <TableCell>
                  <p>{dayjs(order?.date).format("DD MMM, YY")}</p>
                  <p className="text-xs mt-1">
                    {dayjs(order?.date).format("hh:mm A")}
                  </p>
                </TableCell>
                <TableCell>{order?.timeSpent}</TableCell>
                <TableCell>
                  {parseFloat(
                    order?.orderValue.replace(/[^0-9.-]+/g, "")
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </TableCell>
                <TableCell>
                  <span className="font-bold">{order?.commission}</span>
                </TableCell>
                <TableCell className="text-neutral-400 ">
                  <Link href={"/"} className="flex gap-2 items-center">
                    View Chat <MoveUpRight className="size-4" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </section>
  );
};
export default Orders;
