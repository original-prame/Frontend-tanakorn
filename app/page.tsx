"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-white flex min-h-screen">
      <div className="m-auto text-center">
        <h1 className="text-black pb-4">
          เเบบทดสอบ บริษัท 7solutions ของ Front-end
        </h1>

        <h1 className="text-black pb-4">
          ธนกร บำรุงสุข
        </h1>
        <button
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => router.push("./problem1")}
        >
          ข้อที่ 1
        </button>

        <button
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => router.push("./problem2")}
        >
          ข้อที่ 2
        </button>
      </div>
    </div>
  );
}
