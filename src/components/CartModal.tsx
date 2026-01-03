import React, { useEffect } from "react";
import { useCart } from "@/context/CartContext";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    clearCart,
  } = useCart();

  if (!isOpen) return null;

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl animate-[fadeIn_0.25s_ease-out]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-t-2xl">
          <h2 className="text-lg font-bold">
            سبد خرید <span className="opacity-80">({cartCount})</span>
          </h2>
          <button
            onClick={onClose}
            className="text-2xl leading-none hover:scale-110 transition"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {cart.items.length === 0 ? (
            <div className="py-16 text-center text-gray-500">
              🛒 سبد خرید شما خالی است
            </div>
          ) : (
            <>
              {/* Items */}
              {cart.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 items-center p-3 rounded-xl border hover:shadow-md transition"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border"
                    />
                  )}

                  <div className="flex-1">
                    <h3 className="font-semibold text-sm truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {item.price.toLocaleString()} تومان
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center rounded-lg overflow-hidden border">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 bg-gray-100 hover:bg-gray-200 transition"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 bg-gray-100 hover:bg-gray-200 transition"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-red-500 hover:text-red-700 transition"
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Summary */}
              <div className="pt-4 border-t space-y-4">
                <div className="flex justify-between text-sm">
                  <span>جمع کل</span>
                  <span className="font-bold text-blue-600">
                    {cartTotal.toLocaleString()} تومان
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={clearCart}
                    className="py-2 rounded-xl border hover:bg-gray-100 transition"
                  >
                    پاک کردن سبد
                  </button>
                  <button className="py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition font-semibold">
                    تکمیل خرید
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default CartModal;
