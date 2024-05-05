"use client";
import { useState, useEffect } from "react";
import DataJson from "../../data.json";

interface dataType {
  type: string;
  name: string;
}

export default function Problem1() {
  const [Data, setData] = useState<dataType[]>(DataJson);
  const [Fruit, setFruit] = useState<dataType[]>([]);
  const [Vegetable, setVegetable] = useState<dataType[]>([]);

  const [prevFruitData, setprevFruit] = useState<dataType[]>([]);
  const [prevVegetableData, setprevVegetable] = useState<dataType[]>([]);

  useEffect(() => {
    // let cloneData = [...DataJson];
    // setData(cloneData);

    const intervalId = setInterval(() => {
      // Shifting elements from Fruit and updating state
      setFruit((prevFruit) => {
        const updatedFruit = [...prevFruit];
        updatedFruit.shift();
        return updatedFruit;
      });

      // Shifting elements from Vegetable and updating state
      setVegetable((prevVegetable) => {
        const updatedVegetable = [...prevVegetable];
        updatedVegetable.shift();
        return updatedVegetable;
      });
    }, 5000);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  const ClickAction = (name: string, type: string, idx: number) => {
    let value = { type: type, name: name };

    if (type === "Fruit") {
      let newFruit = [...Fruit, value];
      setFruit(newFruit);
      Data.splice(idx, 1);
      setData(Data);
    } else {
      let newFruit = [...Vegetable, value];
      setVegetable(newFruit);
      Data.splice(idx, 1);
      setData(Data);
    }
  };

  const ClickAction2 = (name: string, type: string, idx: number) => {
    let value = { type: type, name: name };
    let newData = [...Data, value];
    setData(newData);

    if (type === "Fruit") {
      Fruit.splice(idx, 1);
      setFruit(Fruit);
    } else {
      Vegetable.splice(idx, 1);
      setVegetable(Vegetable);
    }
  };

  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-3 gap-4">
        <div className="w-[30rem] h-[45rem]">
          {Data.map((item, idx) => {
            return (
              <div className="flex justify-center py-3" key={idx}>
                <button
                  className="text-black hover:bg-gray-200 border-2 rounded-md border-gray-200 hover:border-gray-200 w-[30rem] h-[2rem]"
                  onClick={() => ClickAction(item.name, item.type, idx)}
                >
                  {item.name}
                </button>
              </div>
            );
          })}
        </div>

        <div className="border-2 border-gray-200 w-[30rem] h-[45rem]">
          <h1 className="text-black text-center font-semibold bg-gray-200 py-1">
            Fruit
          </h1>
          <div className="w-[30rem] h-[45rem] px-6">
            {Fruit.map((item, idx) => {
              return (
                <div className="flex justify-center py-3" key={idx}>
                  <button
                    className="text-black hover:bg-gray-200 border-2 rounded-md border-gray-200 hover:border-gray-200 w-[30rem] h-[2rem]"
                    onClick={() => ClickAction2(item.name, item.type, idx)}
                  >
                    {item.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-2 border-gray-200 w-[30rem] h-[45rem]">
          <h1 className="text-black text-center font-semibold bg-gray-200 py-1">
            Vegetable
          </h1>
          <div className="w-[30rem] h-[45rem] px-6">
            {Vegetable.map((item, idx) => {
              return (
                <div className="flex justify-center py-3" key={idx}>
                  <button
                    className="text-black hover:bg-gray-200 border-2 rounded-md border-gray-200 hover:border-gray-200 w-[30rem] h-[2rem]"
                    onClick={() => ClickAction2(item.name, item.type, idx)}
                  >
                    {item.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
