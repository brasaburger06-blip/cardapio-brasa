import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cardápio Brasa Burguer Delivery",
  description: "Cardápio de delivery do Brasa Burguer: pizzas, lanches, combos, porções e bebidas para entrega.",
};

export default function DeliveryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
