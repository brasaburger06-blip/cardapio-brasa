"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { dataBase } from "@/db";
import { ProductType } from "@/app/types/ProductTypes";

import CardPrice from "@/app/testune/card";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import CardMenu2 from "../components/Cardmenu2";

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
  const navRef = useRef<HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState(0);


  /* ================================
     AGRUPA PRODUTOS POR TIPO
  ================================ */
  const productsByType = useMemo(() => {
  const map: Record<string, ProductType[]> = {};

  dataBase.forEach((p) => {
    // O delivery não oferece bebidas alcoólicas nem tereré.
    if (["DRINKS", "TERERÉ"].includes(p.categoryTitle)) return;

    const variations = p.variations?.filter(
      v => v.status && !["CERVEJAS", "DRINKS PRONTOS"].includes(v.category)
    );
    if (!variations?.length) return;

    const type = extractProductType(p.categoryTitle);

    if (!map[type]) map[type] = [];
    map[type].push({ ...p, variations });
  });

  return map;
}, []);


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

  useEffect(() => {
    const nav = navRef.current;
    const activeTab = nav?.querySelector<HTMLButtonElement>(`[data-tab-index="${currentPage}"]`);
    if (!nav || !activeTab) return;
    nav.scrollTo({
      left: activeTab.offsetLeft - (nav.clientWidth - activeTab.offsetWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [currentPage]);

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
            <h1 className="text-lg font-bold text-orange-900">Cardápio Brasa Burguer Delivery</h1>
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
      <nav ref={navRef} className="sticky top-0 z-50 bg-white border-b shadow-sm p-3 flex gap-2 overflow-x-auto">
        {productTypes.map((type, index) => (
          <button
            key={type}
            data-tab-index={index}
            aria-current={currentPage === index ? "location" : undefined}
            onClick={() => goToSection(index)}
            className={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition
              ${currentPage === index
                ? "bg-black text-white font-bold"
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

              {type === "PIZZAS" && (
                <div className="mb-4">
                  <CardPrice />
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




