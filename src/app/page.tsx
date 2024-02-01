import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Welcome, Author!</h1>
      </div>
      <div className="rounded-lg border p-4 shadow-sm">
        <form className="grid grid-cols-1 gap-4">
          <Input className="py-2" type="file" />
          <Input className="py-2" placeholder="Book Title" type="text" />
          <Input className="py-2" placeholder="Genre" type="text" />
          <Input className="py-2" placeholder="Publication Date" type="date" />
          <Input className="py-2" placeholder="Status" type="text" />
          <Button className="bg-primary py-2" type="submit">
            Upload Book
          </Button>
        </form>
      </div>
      <div className="mt-4 rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Cover</TableHead>
              <TableHead className="max-w-[150px]">Title</TableHead>
              <TableHead className="hidden md:table-cell">Genre</TableHead>
              <TableHead className="hidden md:table-cell">
                Publication Date
              </TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <img
                  alt="Book cover"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">The Great Novel</TableCell>
              <TableCell className="hidden md:table-cell">Fiction</TableCell>
              <TableCell>January 2024</TableCell>
              <TableCell className="hidden md:table-cell">Published</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Book cover"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">The Next Bestseller</TableCell>
              <TableCell className="hidden md:table-cell">
                Non-fiction
              </TableCell>
              <TableCell>March 2024</TableCell>
              <TableCell className="hidden md:table-cell">In Review</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Book cover"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">
                The Mystery Unveiled
              </TableCell>
              <TableCell className="hidden md:table-cell">Mystery</TableCell>
              <TableCell>April 2024</TableCell>
              <TableCell className="hidden md:table-cell">Draft</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
