/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4mPrpB5Xhzl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { DeleteButton } from "@/components/DeleteButton";
import { EditBook } from "@/components/EditeBook";
import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
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
    <div className="flex flex-1 flex-col gap-4  md:gap-8 ">
      <Title text="Manage Books" />
      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>Publication Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>The Great Gatsby</TableCell>
              <TableCell>Fiction</TableCell>
              <TableCell>April 10, 1925</TableCell>
              <TableCell>Published</TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <EditBook />
                  <DeleteButton />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>To Kill a Mockingbird</TableCell>
              <TableCell>Fiction</TableCell>
              <TableCell>July 11, 1960</TableCell>
              <TableCell>Published</TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <EditBook />
                  <DeleteButton />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1984</TableCell>
              <TableCell>Dystopian</TableCell>
              <TableCell>June 8, 1949</TableCell>
              <TableCell>Published</TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <EditBook />
                  <DeleteButton />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
