import React from "react";
import Link from "next/link";

import { Icons } from "./Icons";
import { Button } from "./ui/button";

function SideNav() {
  return (
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link
            className="flex items-center gap-2 font-semibold"
            href="/author"
          >
            <Icons.book className="h-6 w-6" />
            <span className="">Publish Service</span>
          </Link>
          <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
            <Icons.bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/author"
            >
              <Icons.book className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/author/publish"
            >
              <Icons.plus className="h-4 w-4" />
              Add New Book
            </Link>

            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/author/manage"
            >
              <Icons.text className="h-4 w-4" />
              Manage Books
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/author/royalties"
            >
              <Icons.dollar className="h-4 w-4" />
              Royalties
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/author/help"
            >
              <Icons.help className="h-4 w-4" />
              Help
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
