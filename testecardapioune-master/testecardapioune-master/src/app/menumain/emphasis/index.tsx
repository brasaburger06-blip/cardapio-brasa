//destaque

import Image from "next/image";
import Link from "next/link";

export default function Emphasis() {
    return (
        <div className="flex flex-col ">

            <div className=" flex gap-2 border-2 border-orange-500 m-1.5 p-1.5 items-center justify-center">
                <Link target="_blank" href={"https://api.whatsapp.com/send/?phone=551135494623&text=Oi%2C+quero+participar+da+promo%C3%A7%C3%A3o%21&type=phone_number&app_absent=0"}>
                    <div className=" relative w-full h-full ">
                        <Image src='/bannerchopp2.jpeg'
                            width={350}
                            height={450}
                            alt="destaque" />
                    </div>
                </Link>
            </div>

        </div>

    );
}
