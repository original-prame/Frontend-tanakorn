"use client";
import { useEffect, useState } from "react";

interface User {
  firstName: string;
  hair: { color: string };
  age: number;
  gender: string;
  id: string;
  name: string;
  email: string;
  address: {
    postalCode: string;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function Problem2() {
  useEffect(() => {
    const responeUsers = async () => {
      const response = await fetch("https://dummyjson.com/users");
      const users = await response.json();

      let sumMale = users.users.filter((x: User) => x.gender == "male");
      let sumFemale = users.users.filter((x: User) => x.gender == "female");

      let ageRange = users.users.map((x: User) => x.age);
      let ageRangeMin = Math.min(...ageRange);
      let ageRangeMax = Math.max(...ageRange);

      let sumHair = users.users.map((x: User) => x.hair.color);
      let sumBlackHair = sumHair.filter((x: string) => x == "Black");
      let sumBlondHair = sumHair.filter((x: string) => x == "Blond");
      let sumChestnutHair = sumHair.filter((x: string) => x == "Chestnut");
      let sumBrownHair = sumHair.filter((x: string) => x == "Brown");

      let addressUser = users.users.map((x: User) => [
        x.firstName,
        x.address.postalCode,
      ]);

    let firstNameData = users.users.map((x: User) => x.firstName);
    let postalCodeData = users.users.map((x: User) => x.address.postalCode);
    let newdata = [{
        firstNameData,
        postalCodeData
    }]



      let departmentData = [
        {
          Department: [
            { male: sumMale.length },
            { female: sumFemale.length },
            { ageRange: `${ageRangeMin}-${ageRangeMax}` },
            {
              hair: [
                {
                  Black: sumBlackHair.length,
                  Blond: sumBlondHair.length,
                  Chestnut: sumChestnutHair.length,
                  Brown: sumBrownHair.length,
                },
              ],
            },
            { addressUser: addressUser  },
          ],
        },
      ];
      console.log(departmentData);
    };
    responeUsers();
  }, []);

  const test = () => {};
  return (
    <div>
      <button onClick={() => test}>aaa</button>
    </div>
  );
}
