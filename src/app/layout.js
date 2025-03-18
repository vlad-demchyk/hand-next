import "@/styles/global.scss";
import Header from "@/components/header/Header";
import Head from "next/head";
import { CartProvider } from "@/context/CartContext";
import { DataProvider } from "@/context/DataContext";
import { CategoryProvider } from "@/context/CategoryContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          property="og:description"
          content="HANDMADE WITH LOVE – Explore our curated collection of handcrafted goods that bring warmth and uniqueness to your life."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icons/favicon.ico" />

        <title>HANDMADE WITH LOVE</title>
      </Head>
      <body>
        <DataProvider>
          <CartProvider>
            <CategoryProvider>
              <Header />
              <main>{children}</main>
            </CategoryProvider>
          </CartProvider>
        </DataProvider>
      </body>
    </html>
  );
}
