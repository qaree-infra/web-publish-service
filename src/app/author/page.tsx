import Title from "@/components/Title";
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
    <div className="flex flex-1 flex-col gap-4  md:gap-8 ">
      <Title text="Welcome, Dr.Mohamed Ali" />

      <div className="rounded-lg border shadow-sm">
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
                  className="aspect-[517/750] object-cover"
                  src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1433739169i/25685842.jpg"
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
                  className="aspect-[517/750] object-cover"
                  height="64"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Kalila-wa-Dimna_1.jpg/1200px-Kalila-wa-Dimna_1.jpg"
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
                  className="aspect-[517/750] object-cover"
                  src="https://archive.org/download/FP11950/cover.jpg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">
                The Mystery Unveiled
              </TableCell>
              <TableCell className="hidden md:table-cell">Mystery</TableCell>
              <TableCell>April 2024</TableCell>
              <TableCell className="hidden md:table-cell">In Rview</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
