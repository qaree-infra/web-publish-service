import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 bg-opacity-50">
      <div className="w-full max-w-md">
        <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
          <div className="mb-4">
            <img
              alt="Qaree Logo"
              className="mx-auto h-20 w-auto"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/100",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don't have an account?
            <Link className="underline" href="#">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
