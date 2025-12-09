"use client";
import { Button } from "@heroui/react";
import Link from "next/link";



const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="text-8xl font-bold text-gray-300">404</div>
            <h1 className="">Sorry, the page you are looking for does not exist.</h1>
              <div className="pt-6">
                 <Link href="/">
                   <Button className="bg-blue-500 text-white hover:bg-blue-600">
                     Go to Home
                   </Button>
                 </Link>
              </div>

        </div>
    );
}
export default NotFoundPage
