/**
 * v0 by Vercel.
 * @see https://v0.dev/t/m7dytOWL8uj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Component() {
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center bg-white lg:flex-row dark:bg-gray-900">
      <aside className="w-full space-y-4 p-6 text-center lg:w-1/2 lg:text-left">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Welcome Back to Qaree Publish Service!
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We've missed you. Log in to your account to continue exploring our
          publishing services.
        </p>
      </aside>
      <div className="w-full space-y-6 p-6 lg:w-1/2">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Login to Qaree</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your username and password to login to your Qaree account
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="Enter your password"
              required
              type="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Login
          </Button>
        </div>
        <div className="space-y-4">
          <p className="text-center text-gray-500 dark:text-gray-400">
            Or login with
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="w-1/2" variant={"outline"}>
              <div className="flex items-center justify-center">Google</div>
            </Button>
            <Button className="w-1/2" variant={"outline"}>
              <div className="flex items-center justify-center">Facebook</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
