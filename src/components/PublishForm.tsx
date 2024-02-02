/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RcSrsTVQiNy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function PublishForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Publish Your Book @ Qaree</CardTitle>
        <CardDescription>
          Fill out the form below to publish your book.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="book-name">Book Name</Label>
              <Input id="book-name" placeholder="Enter book name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                className="h-32"
                id="description"
                placeholder="Enter book description"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="publish-rights">Publish Rights</Label>
            <Select>
              <SelectTrigger id="publish-rights">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="categories">Categories</Label>
            <Select>
              <SelectTrigger id="categories">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fiction">Fiction</SelectItem>
                <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                <SelectItem value="biography">Biography</SelectItem>
                <SelectItem value="children">Children</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="language">Language</Label>
            <Select>
              <SelectTrigger id="language">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
                <SelectItem value="german">German</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="isbn">ISBN</Label>
            <Input id="isbn" placeholder="Enter ISBN" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="author-name">Author Name</Label>
            <Input id="author-name" placeholder="Enter author name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="book-type">Book Type</Label>
            <Select>
              <SelectTrigger id="book-type">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              placeholder="Enter price if book is paid"
              type="number"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="book-cover">Book Cover</Label>
            <Input id="book-cover" type="file" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="book-file">Book File</Label>
            <Input id="book-file" type="file" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sample-file">Sample File</Label>
            <Input id="sample-file" type="file" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit">Publish Book</Button>
      </CardFooter>
    </Card>
  );
}
