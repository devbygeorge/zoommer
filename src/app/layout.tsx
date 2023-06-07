import "@/styles/globals.scss";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { ProductsProvider } from "../hooks/useProducts";

export const metadata = {
  title: "Zoommer",
  description:
    "Mobile phones, accessories, tablets, laptops, consoles, games, everything at a great price!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProductsProvider>
          <Header />
          {children}
          <Footer />
        </ProductsProvider>
      </body>
    </html>
  );
}
