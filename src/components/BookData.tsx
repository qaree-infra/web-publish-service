/**
 * v0 by Vercel.
 * @see https://v0.dev/t/96dVAW1uAaO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function BookData() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          defaultValue={"The Great Gatsby"}
          placeholder="Enter the name of the book"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="categories">Categories</Label>
        <Input
          id="categories"
          defaultValue={"Fiction"}
          placeholder="Enter the categories of the book"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          className="min-h-40"
          id="description"
          placeholder="Enter the description of the book"
          defaultValue={
            'In the mystical town of Eldoria, nestled deep within the misty valleys of the Enchanted Mountains, lies a secret that has been guarded for centuries. "Whispers in the Mist" unravels the enigma veiled by the ethereal fog and explores the profound mysteries that bind the inhabitants of Eldoria.'
          }
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="isbn">ISBN</Label>
        <Input
          id="isbn"
          defaultValue={"ISBN 0-061-96436-0"}
          placeholder="Enter the ISBN of the book"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="edition">Edition</Label>
        <Input
          id="edition"
          defaultValue={"First edition"}
          placeholder="Enter the edition of the book"
        />
      </div>
    </div>
  );
}
