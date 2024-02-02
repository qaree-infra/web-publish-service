/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fjWynaQ9nJP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Component() {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-800">
      <main className="flex flex-col gap-8 p-6">
        <div className="flex gap-8">
          <Card className="flex flex-1 flex-col">
            <CardHeader>
              <CardTitle>Your Balance</CardTitle>
              <CardDescription>Current</CardDescription>
            </CardHeader>
            <CardContent>
              <h2 className="text-4xl font-bold">$15,678.90</h2>
            </CardContent>
          </Card>
          <Card className="flex flex-1 flex-col">
            <CardHeader>
              <CardTitle>Total Royalties</CardTitle>
              <CardDescription>This month</CardDescription>
            </CardHeader>
            <CardContent>
              <h2 className="text-4xl font-bold">$12,345.67</h2>
            </CardContent>
          </Card>
        </div>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Royalties Breakdown</CardTitle>
            <CardDescription>This month</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Royalties</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>The Great Novel</TableCell>
                  <TableCell>1,234</TableCell>
                  <TableCell>$1,234.56</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Another Bestseller</TableCell>
                  <TableCell>567</TableCell>
                  <TableCell>$567.89</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Yet Another Bestseller</TableCell>
                  <TableCell>890</TableCell>
                  <TableCell>$890.12</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Request Money</CardTitle>
            <CardDescription>
              Enter the amount you want to request
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input className="w-full" placeholder="Amount" type="number" />
              <Button className="w-full">Submit Request</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
