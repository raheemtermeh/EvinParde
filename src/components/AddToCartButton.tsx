import React from "react";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  attributes?: Record<string, any>;
}

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  className?: string;
  children?: React.ReactNode;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  quantity = 1,
  className = "py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700",
  children = "افزودن به سبد",
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
  };

  return (
    <button onClick={handleAddToCart} className={className}>
      {children}
    </button>
  );
};

export default AddToCartButton;
