import React from "react";
import HeadBanner from "@/components/product_page/HeadBanner";
import FilterList from '@/components/product_page/FilterList'
import ProductsCard from "@/components/product_page/ProductsCard";
import "@/styles/productPage.scss";
import fetchData from "./fetchData";
import { DataProvider } from "@/context/DataContext";

export default async function Home() {
  const allProducts = await fetchData();

  return (
    <DataProvider initialData={allProducts}>
      <HeadBanner></HeadBanner>
      <section className="render_shop_grid">
        <FilterList></FilterList>
        <ProductsCard></ProductsCard>
      </section>
    </DataProvider>
  );
}
