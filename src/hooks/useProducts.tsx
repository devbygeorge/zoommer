"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type ProductsContextType = {
  productsQuantity: number;
  handleAddProduct: () => void;
};

const ProductsContextDefaultValues: ProductsContextType = {
  productsQuantity: 0,
  handleAddProduct: () => {},
};

const ProductsContext = createContext<ProductsContextType>(
  ProductsContextDefaultValues
);

type Props = {
  children: ReactNode;
};

const ProductsProvider = ({ children }: Props) => {
  const [productsQuantity, setProductsQuantity] = useState(0);

  const handleAddProduct = () => {
    setProductsQuantity((state) => state + 1);
  };

  const contextValues = {
    productsQuantity,
    handleAddProduct,
  };

  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
