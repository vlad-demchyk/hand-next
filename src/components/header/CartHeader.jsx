"use client";
import { CartContext } from "@/context/CartContext";
import { useState, useContext } from "react";
import "@/styles/CartHeader.scss"

function cleanOrders(setOrders, product) {
  !product
    ? setOrders([])
    : setOrders((prev) => prev.filter((it) => it !== product));
}

const CartItem = ({ setOrders, orders }) => {
  return (
    <>
      {orders.map((product) => (
        <div key={product.id} className="product_cart_box">
          <img src={product.image} alt="product_image_in_cart"></img>
          <div className="detail_order">
            <p>{product.title}</p>
            <p>${Number(product.price).toFixed(2)}</p>
          </div>
          <button
            onClick={() => {
              cleanOrders(setOrders, product);
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <p>
        Total price: $
        {orders.reduce((sum, product) => sum + (product.price || 0), 0)}
      </p>
      <button onClick={() => cleanOrders(setOrders)}>Clear order list</button>
    </>
  );
};

export default function CartHeader () {

  const [cartOpen, setCartOpen] = useState(false);
  const {orders, setOrders} = useContext(CartContext)


  return (
    <div
      className={`cart_header ${cartOpen && "active"}`}
      onClick={() => setCartOpen((prev) => !prev)}
    >
      <button>
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9993 20.25H10.3769C7.12285 20.25 4.47542 17.7267 4.47542 14.6251V8.85947C4.47542 5.9762 2.96768 3.30739 0.44227 1.72031C-0.0112621 1.43531 -0.136473 0.853876 0.162538 0.421598C0.461548 -0.0107278 1.07152 -0.130118 1.52515 0.154974C2.9668 1.06097 4.13638 2.2559 4.97272 3.63167C5.15346 3.82466 6.61084 5.29699 8.99997 5.29699H20.3263C23.4165 5.24191 25.8352 8.19769 25.0272 11.0406L23.7234 15.9939C23.0638 18.4998 20.7099 20.25 17.9993 20.25ZM6.19444 6.64234C6.35796 7.36238 6.4426 8.10483 6.4426 8.85947V14.6251C6.4426 16.6928 8.20755 18.375 10.3769 18.375H17.9993C19.8064 18.375 21.3756 17.2082 21.8153 15.5376L23.1192 10.5844C23.5993 8.89509 22.1619 7.13931 20.3263 7.17198H8.99992C7.9194 7.17198 6.9789 6.94993 6.19444 6.64234ZM9.88515 22.8281C9.88515 22.1809 9.33469 21.6563 8.65567 21.6563C7.02429 21.7182 7.02572 23.9387 8.65567 24C9.33469 24 9.88515 23.4753 9.88515 22.8281ZM19.6719 22.8281C19.6719 22.1809 19.1214 21.6563 18.4424 21.6563C16.811 21.7182 16.8124 23.9387 18.4424 24C19.1214 24 19.6719 23.4753 19.6719 22.8281ZM21.3099 9.98446C21.3099 9.46668 20.8696 9.04697 20.3263 9.04697H9.39336C8.08834 9.09647 8.08932 10.8729 9.39336 10.922H20.3263C20.8696 10.922 21.3099 10.5022 21.3099 9.98446Z"
            fill="#3D3D3D"
          />
        </svg>

        {orders.length ? (
          <div className="quantity_cart">{orders.length}</div>
        ) : (
          ""
        )}
      </button>

      {cartOpen && (
        <div className="cart_box_wrapper">
          {orders.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <CartItem setOrders={setOrders} orders={orders}></CartItem>
          )}
        </div>
      )}
    </div>
  );
};
