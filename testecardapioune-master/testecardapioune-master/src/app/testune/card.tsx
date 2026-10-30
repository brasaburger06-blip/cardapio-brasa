
import Image from "next/image";
import Price from "@/app/components/price";
import { ProductType } from "@/app/types/ProductTypes";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";

export default function CardPrice() {
    return (

        <Card
            className="flex flex-row items-center gap-4 w-full max-w-md p-2 transition-transform hover:scale-105"
        >
            <div className="relative w-30 h-30 flex-shrink-0 rounded">
                <Image
                    src="/pizza_calabresa_e_mussarela.jpg"
                    alt="Pizza de calabresa e mussarela"
                    fill
                    className="object-cover rounded"
                />
            </div>
            <CardContent className="flex-1 flex flex-col gap-1 p-1">
                <CardTitle className="text-lg uppercase">
                    Tabela de preços
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                    Pequena — 25 cm — R$ 55,99<br />
                    4 pedaços • 1 sabor  <br />
                    Média — 30 cm — R$ 69,99<br />
                    8 pedaços • até 2 sabores<br />
                    Grande — 35 cm — R$ 84,99<br />
                    8 pedaços • até 2 sabores<br />
                </CardDescription>
            </CardContent>
        </Card>
    );
}


