"use client"
import React from "react";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import placeholderPicture from "/place.jpg";

export default function CardItem(){
    const router = useRouter();

    function handleProductDetails() {
        router.push('/products/1')
    }
    return(
        <Card className=" shadow-lg">
            <CardContent>
                <div className="w-full">
                    <Image src="/Buritto.jpeg" width={200} height={200} className="w-full rounded-t-lg"/>
                </div>
            </CardContent>
            <CardFooter className="mt-3 shadow-inner">
                <div className="flex gap-2 flex-col justify-between mt-4">
                    <p className="font-medium text-2xl">Borito</p>
                    <p className="font-semibold text-md">₦1,550.00</p>
                    <Button onClick={handleProductDetails}>View Details</Button>
                </div>
            </CardFooter>
        </Card>
    )
}


'use client'
import { ChevronRight, Dot } from "lucide-react";
import Image from "next/image";


export default function BasketListComponent() {
  const handleClick = () => {
    alert('How are you doing?') 
  }
  return (
    <div>
      <h1 className="font-bold text-4xl mt-[60px] ml-[80px] mb-[80px]">
        Basket
      </h1>
      <div className="w-[350px] h-[300px] bg-gray-200 ml-[100px] border rounded-[15px] float-left mr-[40px]"></div>
      <div className="flex flex-col gap-3.5 float-left">
        <h2 className="font-bold text-3xl mt-[80px] ">Yamarita</h2>
        <p className="flex items-center text-[22px]">
          2 packs{" "}
          <span className="inline-block" onClick={handleClick}>
            <Dot size={48} strokeWidth={2.75} />
          </span>{" "}
          ₦1300
        </p>
        <p className="text-[22px]">Delivered to D403, John Hall</p>
      </div>
      <div className="flex flex-col">
        <span className="mt-[120px] ml-[80px] relative">
          <ChevronRight size={48} strokeWidth={3} />
        </span>
      </div>
    </div>
  );
}





import Image from "next/image";
import PreviouslyOrderedItemComponent from "./PreviouslyOrderedItem";

export default function PreviouslyOrderedComponent() {
  return (
    <div className="mb-10 ">
        <h1 className="text-4xl font-bold mb-7">Previously ordered</h1>
        <div className="grid md:grid-cols-3 gap-14">
        <PreviouslyOrderedItemComponent />
        <PreviouslyOrderedItemComponent />
        <PreviouslyOrderedItemComponent />
        </div>
    </div>
  );
}





import Image from "next/image";

export default function PreviouslyOrderedItemComponent() {
  return (
    <div className="flex flex-col gap-2">
        <div className="w-full rounded-xl bg-gray-200 h-[200px]">

        </div>
        <h1 className="font-bold text-md">Yamarita</h1>
        <p className="font-bold text-md">₦100</p>
    </div>
  );
}



