import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { BellRing, Check, Edit, Plus, TrashIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const AdminOrders = () => {
  const [open, setOpen] = useState(false)
  const orders = [
    {
      order: "ord001",
      orderstatus: "Delivered",
      totalAmount: "Rs.250.00",
      paymentMethod: "Credit Card",
    },
    {
      order: "ord002",
      orderstatus: "Shipped",
      totalAmount: "Rs.150.00",
      paymentMethod: "PayPal",
    },
    {
      order: "ord003",
      orderstatus: "Delivered Tomorrow",
      totalAmount: "Rs.350.00",
      paymentMethod: "Cash On Delivery",
    },
    {
      order: "ord004",
      orderstatus: "Dispatched",
      totalAmount: "Rs.450.00",
      paymentMethod: "Credit Card",
    },
    {
      order: "ord005",
      orderstatus: "Shipped",
      totalAmount: "Rs.550.00",
      paymentMethod: "PayPal",
    },
    {
      order: "ord006",
      orderstatus: "Delivered",
      totalAmount: "Rs.200.00",
      paymentMethod: "Cash On Delivery",
    },
    {
      order: "ord007",
      orderstatus: "Dispatched",
      totalAmount: "Rs.300.00",
      paymentMethod: "Credit Card",
    },
  ]
  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Orders</CardTitle>
          {/* <Button onClick={() => setOpen(!open)}>
            <Plus className='h-10 w-10 mr-2' /> Add
          </Button> */}
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead >Amount</TableHead>
               
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.order}>
                  <TableCell className="font-medium">{order.order}</TableCell>
                  <TableCell>{order.orderstatus}</TableCell>
                  <TableCell>{order.paymentMethod}</TableCell>
                  <TableCell >{order.totalAmount}</TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* <Sheet open={open}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add User</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" className="col-span-3" />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400' onClick={() => setOpen(!open)}>Cancel</Button>
            <Button type="submit" className='w-1/2'>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet> */}
    </div>
  )
}

export default AdminOrders