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
  illustrativeImage?: string;
};

export default function CardMenu2({ product, illustrativeImage }: ProductProps) {
  const isPhotoTest = product.id === "lanche-brasa-burguer" && product.categoryTitle === "LANCHES";
  const imageUrl = isPhotoTest
    ? "https://images.pexels.com/photos/18136129/pexels-photo-18136129/free-photo-of-close-up-of-burger.jpeg?auto=compress&dpr=1&h=750&w=1260"
    : illustrativeImage ?? product.imageUrlPry;
  const isIllustrative = isPhotoTest || Boolean(illustrativeImage);

  return (
    <Card className="flex flex-row items-center gap-4 w-full max-w-md m-auto border-r-6 border-gray-800 border-t-0 border-l-0 rounded-r-lg shadow-md p-2 transition-transform hover:scale-105">
      
      {imageUrl && (
        <figure className="w-24 flex-shrink-0">
          <div className="relative w-24 h-24 overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={isPhotoTest ? "Hambúrguer — imagem ilustrativa" : product.name}
              fill
              sizes="96px"
              unoptimized={isIllustrative}
              className="object-cover rounded-lg"
            />
          </div>
          {isIllustrative && (
            <figcaption className="mt-1 text-center text-[10px] leading-tight text-gray-500">
              Imagem ilustrativa
            </figcaption>
          )}
        </figure>
      )}

      {/* CONTEÚDO */}
      <CardContent className="min-w-0 flex-1 flex flex-col gap-2 p-1">
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
