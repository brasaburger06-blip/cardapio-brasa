"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

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

  /* ================================
     SCROLL HORIZONTAL AO TROCAR PÁGINA
  ================================ */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const section = container.querySelector(
      `[data-index="${currentPage}"]`
    ) as HTMLElement;

    section?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  }, [currentPage]);

  /* ================================
     SWIPE MOBILE
  ================================ */
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    const distance = touchStartX - endX;

    if (distance > 60) {
      setCurrentPage((p) => Math.min(productTypes.length - 1, p + 1));
    }

    if (distance < -60) {
      setCurrentPage((p) => Math.max(0, p - 1));
    }
  };

  /* ================================
     WHEEL (DESKTOP)
  ================================ */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30) return;

      e.preventDefault();
      const dir = e.deltaY > 0 ? 1 : -1;

      setCurrentPage((p) =>
        Math.max(0, Math.min(productTypes.length - 1, p + dir))
      );
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [productTypes.length]);

  /* ================================
     RENDER
  ================================ */
  return (
    <div className="h-screen flex width=1200 flex-col bg-gradient-to-b from-orange-50 to-white">

      <header className="bg-white px-4 py-3 text-center border-b">
        <h1 className="text-xl font-bold text-orange-900">Cardápio Brasa Burguer Delivery</h1>
      </header>

      {/* MENU SUPERIOR */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm p-3 flex gap-2 overflow-x-auto">
        {productTypes.map((type, index) => (
          <button
            key={type}
            onClick={() => setCurrentPage(index)}
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
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="flex-1 flex width=1200 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
      >
        {productTypes.map((type, index) => (
          <section
            key={type}
            data-index={index}
            className="w-screen flex-shrink-0 snap-start flex flex-col p-3 overflow-hidden"
          >
            {/* CONTEÚDO COM SCROLL */}
            <div className="flex-1 overflow-y-auto overscroll-contain pb-4">

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

            {/* FOOTER FIXO NA PARTE INFERIOR */}
            <footer className="h-10 flex items-center justify-center text-xl text-gray-400 uppercase tracking-widest border-t">
              <ArrowBigLeft className="w-6 m-1 h-6 text-gray-600 hover:translate-x-1 transition" />
              <span> { index + 1} / {productTypes.length } </span>
              <ArrowBigRight className="w-6 m-1 h-6 text-gray-600 hover:translate-x-1 transition" />
            </footer>
          </section>
        ))}
      </main>
    </div>
  );
}

