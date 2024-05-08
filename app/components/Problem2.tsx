"use client";
import { useEffect, useState } from "react";
import { User, Department } from "./interface";

export default function Problem2() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const users = await response.json();

        const departments = Array.from(
          new Set(users.users.map((user: User) => user.company.department))
        );

        const departmentData = departments.map((department) => {
          const departmentUsers = users.users.filter(
            (user: User) => user.company.department === department
          );

          const maleCount = departmentUsers.filter(
            (user: User) => user.gender === "male"
          ).length;
          const femaleCount = departmentUsers.filter(
            (user: User) => user.gender === "female"
          ).length;

          const ages = departmentUsers.map((user: User) => user.age);
          const minAge = Math.min(...ages);
          const maxAge = Math.max(...ages);

          const hairColors = departmentUsers.map(
            (user: User) => user.hair.color
          );
          const hairCounts = {
            Black: hairColors.filter((color: string) => color === "Black")
              .length,
            Blond: hairColors.filter((color: string) => color === "Blond")
              .length,
            Chestnut: hairColors.filter((color: string) => color === "Chestnut")
              .length,
            Brown: hairColors.filter((color: string) => color === "Brown")
              .length,
          };

          const addressUser = departmentUsers.map((user: User) => ({
            [`${user.firstName}${user.lastName}`]: user.company.address.postalCode,
          }));

          const addressObject = addressUser.reduce((acc: any, cur: any) => {
            return { ...acc, ...cur };
          }, {});

          return {
            department,
            male: maleCount,
            female: femaleCount,
            ageRange: `${minAge}-${maxAge}`,
            hair: hairCounts,
            addressUser: addressObject,
          };
        });
        console.log(departmentData);
        setData(departmentData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="bg-white flex min-h-screen flex-col justify-between p-12">
      <h1 className="text-black font-bold my-4">DEPARTMENT</h1>
      {data.map((item: Department, idx: number) => (
        <div className="my-4" key={idx}>
          <h2 className="text-gray-700 font-semibold border-b mb-2">
            {item.department}
          </h2>
          <p className="text-gray-500">male: {item.male}</p>
          <p className="text-gray-500">female: {item.female}</p>
          <p className="text-gray-500">ageRange: {item.ageRange}</p>
          <p className="text-gray-500">
            hair: Black: {item.hair.Black} Blond: {item.hair.Blond} Chestnut:{" "}
            {item.hair.Chestnut} Brown: {item.hair.Brown}
          </p>
          <button
            className="my-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => alert(JSON.stringify(item.addressUser))}
          >
            addressUser
          </button>
        </div>
      ))}
    </main>
  );
}
