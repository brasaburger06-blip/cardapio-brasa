import Image from "next/image";
import Price from "@/app/components/price";
import { ProductType } from "@/app/types/ProductTypes";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

type ProductProps = {
  product: ProductType;
};

export default function CardMenu2({ product }: ProductProps) {
  return (
    <Card className="flex flex-row items-center gap-4 w-full max-w-md m-auto border-r-6 border-gray-800 border-t-0 border-l-0 rounded-r-lg shadow-md p-2 transition-transform hover:scale-105">
      
     {/* IMAGEM FIXA OU DO ITEM (opcional) */}
                {product.imageUrlPry && (
                    <div className="relative w-20 h-20 flex-shrink-0 rounded">
                        <Image
                            src={product.imageUrlPry}
                            alt={product.name}
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                )}

      {/* CONTEÚDO */}
      <CardContent className="flex-1 flex flex-col gap-2 p-1">
        <CardTitle className="text-lg uppercase">
          {product.name}
        </CardTitle>

        {/* VARIAÇÕES */}
        <div className="flex flex-col gap-2 mt-1">
          {product.variations
            .filter(variation => variation.status)
            .map((variation, index) => (
              <div key={index} className="flex flex-col gap-1 border-t pt-1">
                
                <div className="flex items-center justify-between">
                 
                  {variation.price && <> 
                  <span className="text-sm font-semibold text-gray-700">
                    {variation.category}
                  </span>
                  <Price priceItem={variation.price} />

                  </>
                  }

                </div>

                {variation.description && (
                  <CardDescription className="text-xs text-gray-500">
                    {product.id === "1400" && product.categoryTitle === "TERERÉ" ? (
                      <>
                        <strong className="block text-base font-bold text-gray-800 mb-2">
                          {variation.description.split(" Ervas:")[0]}
                        </strong>
                        {variation.description.includes(" Ervas:") && (
                          <span>Ervas:{variation.description.split(" Ervas:")[1]}</span>
                        )}
                      </>
                    ) : variation.description}
                  </CardDescription>
                )}
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}

