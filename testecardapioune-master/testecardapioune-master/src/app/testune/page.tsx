"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { dataBase } from "@/db";
import { ProductType } from "@/app/types/ProductTypes";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import CardMenu from "@/app/components/CardMenu";
import CardPrice from "./card";
import { ArrowBigLeft, ArrowBigRight, ArrowLeftIcon, ArrowRight } from "lucide-react";
import CardMenu2 from "../components/Cardmenu2";
import Link from "next/link";

/* ================================
   EXTRAI TIPO PRINCIPAL DO PRODUTO
================================ */
const extractProductType = (category?: string): string => {
  if (!category) return "OUTROS";

  const c = category.toLowerCase();

  if (c.includes("pizza tamanho")) return "PIZZAS";
  if (c.includes("COMBOS DE LANCHES")) return "LANCHES";
  if (c.includes("espetinho")) return "ESPETINHOS";
  if (c.includes("porção")) return "PORÇÕES";
  if (c.includes("bebida")) return "BEBIDAS";
  return category.toUpperCase();
};

export default function MenuMain() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);


  /* ================================
     AGRUPA PRODUTOS POR TIPO
  ================================ */
  const productsByType = useMemo(() => {
  const map: Record<string, ProductType[]> = {};

  dataBase.forEach((p) => {
    // verifica se existe ao menos uma variação ativa
    const hasActiveVariation = p.variations?.some(v => v.status);

    if (!hasActiveVariation) return;

    const type = extractProductType(p.categoryTitle);

    if (!map[type]) map[type] = [];
    map[type].push(p);
  });

  return map;
}, [dataBase]);


  /* ================================
     TIPOS ORDENADOS PELO MENOR ID
  ================================ */
  const productTypes = useMemo(() => {
    return Object.keys(productsByType)
      .map((type) => {
        const minId = Math.min(
          ...productsByType[type].map((p) => Number(p.id) || 0)
        );
        return { type, minId };
      })
      .sort((a, b) => a.minId - b.minId)
      .map((i) => i.type);
  }, [productsByType]);

  useEffect(() => {
    const sections = scrollRef.current?.querySelectorAll<HTMLElement>("[data-index]");
    if (!sections) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setCurrentPage(Number((entry.target as HTMLElement).dataset.index));
      }
    }, { rootMargin: "-80px 0px -60% 0px", threshold: 0 });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [productTypes.length]);

  const goToSection = (index: number) => {
    scrollRef.current?.querySelector<HTMLElement>(`[data-index="${index}"]`)?.scrollIntoView({
      behavior: "smooth", block: "start",
    });
    setCurrentPage(index);
  };

  /* ================================
     RENDER
  ================================ */
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 to-white">

      <header className="shrink-0 border-b bg-white px-4 py-2">
        <div className="flex items-center justify-center gap-3">
          <div className="relative h-16 w-32 shrink-0 overflow-hidden rounded-lg bg-black">
            <Image src="/IMG_6425.PNG" alt="Logo Brasa Burguer" width={1280} height={1254} priority className="absolute left-0 top-1/2 w-full -translate-y-1/2" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-orange-900">Brasa Burguer</h1>
            <p className="text-xs text-gray-600">Quarta a domingo · 18h às 23h</p>
          </div>
        </div>
        <details open className="mx-auto mt-2 max-w-xl text-center text-sm">
          <summary className="cursor-pointer font-semibold text-orange-900">Informações e contato</summary>
          <div className="mt-2 space-y-2 rounded-lg bg-orange-50 p-3">
            <p>Rua Bahia, 2310 — Centro</p>
            <p>Funcionamento: quarta a domingo, das 18h às 23h.</p>
            <div className="flex flex-wrap justify-center gap-2">
              <a href="https://wa.me/5569992479771" target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-700 px-4 py-2 font-semibold text-white">WhatsApp: (69) 99247-9771</a>
              <a href="https://www.instagram.com/brasaburguer_eoe/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-orange-900 px-4 py-2 font-semibold text-white">Instagram: @brasaburguer_eoe</a>
            </div>
          </div>
        </details>
      </header>

      {/* MENU SUPERIOR */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm p-3 flex gap-2 overflow-x-auto">
        {productTypes.map((type, index) => (
          <button
            key={type}
            onClick={() => goToSection(index)}
            className={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition
              ${currentPage === index
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
              }`}
          >
            {type}
          </button>
        ))}
      </nav>

      {/* CONTAINER HORIZONTAL */}
      <main
        ref={scrollRef}
        className="flex flex-col"
      >
        
        {productTypes.map((type, index) => (
          <section
            key={type}
            data-index={index}
            className="w-full scroll-mt-24 border-b border-orange-100 px-3 py-6"
          >
            {/* CONTEÚDO COM SCROLL */}
            <div className="pb-4">

              <h2 className="text-center text-4xl font-bold text-orange-900 uppercase tracking-widest mb-4">
                {type}
              </h2>

              {type === "DRINKS" && (
                <p className="text-center text-orange-900 mb-4">
                  Todos os nossos drinks podem ser preparados sem álcool. Peça sua versão!
                </p>
              )}

              {type === "PIZZAS" && (
                
                <div className="mb-4">
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
                        Pequena — 25 cm — R$ 44,99<br />
                        4 pedaços • 1 sabor  <br />
                        Média — 30 cm — R$ 64,99<br />
                        8 pedaços • até 2 sabores<br />
                        Grande — 35 cm — R$ 79,99<br />
                        8 pedaços • até 2 sabores<br />
                      </CardDescription>
                    </CardContent>
                  </Card>              
                    </div>
              )}
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {productsByType[type].map((product) => (
                  <CardMenu2 key={product.id} product={product} />
                ))}
              </div>
            </div>


          </section>
        ))}
      </main>
    </div>
  );
}




