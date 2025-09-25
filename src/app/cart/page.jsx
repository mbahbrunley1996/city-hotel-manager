
'use client';
import React from 'react';
import Link from 'next/link';
import { useStoreCart } from '@/store/cart.store'; // ✅ our cart store
import { ShoppingCart, ArrowLeft } from 'lucide-react';

const CartPage = () => {
  const cartItems = useStoreCart((state) => state.cartItems);
  const removeItem = useStoreCart((state) => state.removeItem);
  const clearCart = useStoreCart((state) => state.clearCart);
  const increaseQty = useStoreCart((state) => state.increaseQty);
  const decreaseQty = useStoreCart((state) => state.decreaseQty);

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/" className="text-blue-600 flex items-center gap-2">
          <ArrowLeft /> Continue Shopping
        </Link>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <ShoppingCart /> Your Cart
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty 🛒</h2>
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Table of cart items */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow rounded">
              <thead>
                <tr className="border-b bg-gray-700">
                  <th className="text-left p-3">Hotel</th>
                  <th className="text-left p-3">Price</th>
                  <th className="text-left p-3">Qty</th>
                  <th className="text-left p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b text-gray-700 hover:bg-gray-50">
                    <td className="p-3 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded object-cover"
                      />
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          {item.description?.slice(0, 50)}
                        </p>
                      </div>
                    </td>
                    <td className="p-3">{item.price}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart footer */}
          <div className="flex justify-between text-gray-700 items-center mt-6">
            <button
              onClick={clearCart}
              className="px-6 py-3 bg-gray-200 rounded hover:bg-gray-300"
            >
              Clear Cart
            </button>
            <div className="text-right">
              <h3 className="text-xl font-bold">
                Total:{" "}
                <span className="text-blue-600">
                  {cartItems
                    .reduce((acc, item) => {
                      const priceNumber = parseFloat(
                        item.price.replace(/[^\d.]/g, "")
                      );
                      return acc + priceNumber * item.quantity;
                    }, 0)
                    .toLocaleString()}{" "}
                  XAF
                </span>
              </h3>
              <button className="mt-2 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
