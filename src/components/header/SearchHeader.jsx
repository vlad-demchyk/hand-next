// "use client"

// const searchOnPage = (
//     searchArea,
//     setFilteredProducts,
//     setSelectedCategory,
//     products,
//     filteredProducts
//   ) => {
//     if (!products) return; // Перевірка на випадок, якщо products ще не завантажені
  
//     const trimmedSearch = searchArea.trim();
  
//     if (trimmedSearch === "") {
//       setFilteredProducts(products);
//       setSelectedCategory([]);
//       return;
//     }
  
//     const srcPROD = filteredProducts.filter((product) =>
//       product.title.toLowerCase().includes(trimmedSearch)
//     );
  
//     if (srcPROD.length === 0) {
//       alert("item not found");
//       return;
//     }
  
//     setFilteredProducts(srcPROD);
//   };
  

// export default function SearchHeader(){
//     return (
//          <label className={`search-label ${onFocus && "active"}`}>
//           <input
//             type="text"
//             placeholder="Search"
//             className="search-area"
//             value={searchArea}
//             onChange={(e) => setSearchArea(e.target.value)}
//             onFocus={() => setOnFocus((prev) => !prev)}
//             onBlur={() => setOnFocus((prev) => !prev)}
//           />
//           <button
//             type="button"
//             className="search-icon"
//             onClick={() =>
//               searchOnPage(
//                 searchArea,
//                 setFilteredProducts,
//                 setSelectedCategory,
//                 products,
//                 filteredProducts
//               )
//             }
//           >
//             <svg
//               width="19"
//               height="19"
//               viewBox="0 0 19 19"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M13.8433 14.4896C10.0462 17.3722 4.73837 16.5745 1.92691 13.2685C-0.786647 10.0766 -0.616938 5.47198 2.32685 2.5577C5.36855 -0.453257 10.1507 -0.855208 13.6172 1.61473C14.8592 2.49947 15.7866 3.62505 16.3907 4.98749C16.9983 6.35786 17.1829 7.78362 16.9722 9.25405C16.7622 10.7177 16.1492 12.0219 15.1517 13.2391C15.2324 13.2894 15.3185 13.3256 15.3802 13.3844C16.4767 14.4246 17.5692 15.4687 18.6657 16.509C18.9256 16.7554 19.055 17.0426 18.9779 17.3886C18.8248 18.0772 17.9644 18.3429 17.4125 17.8703C17.1538 17.6492 16.9158 17.4056 16.6702 17.1715C15.7694 16.3139 14.8693 15.4557 13.9685 14.5981C13.9311 14.5642 13.892 14.5326 13.8433 14.4896ZM15.1618 8.13696C15.1713 4.64208 12.2097 1.81655 8.53308 1.81146C4.86655 1.80637 1.90733 4.60929 1.89131 8.10191C1.87528 11.6053 4.83094 14.4387 8.51884 14.4551C12.1705 14.4715 15.1523 11.6352 15.1618 8.13696Z"
//                 fill="#37CECE"
//               />
//             </svg>
//           </button>
//         </label>

     

//     )
// }