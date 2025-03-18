import "@/styles/header.scss"; // Assuming you will create a CSS file for styling
import Image from "next/image";
import Link from "next/link";
import SearchHeader from "./SearchHeader";
import CartHeader from "./CartHeader";
import Login from "./Login";

const Header = () => {
  // const { setSelectedCategory } = useContext(CategoryContext);
  // const [searchArea, setSearchArea] = useState("");
  // const { products, filteredProducts, setFilteredProducts } =
  //   useContext(FetchContext);

  // const [cartOpen, setCartOpen] = useState(false);
  // const { orders, setOrders } = useContext(CartContext);
  // const [onFocus, setOnFocus] = useState(false);

  return (
    <header className="header">
      <nav className="menu">
        <ul>
          <li>
            <Link className="links" href="#shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="links" href="#about_us">
              About Us
            </Link>
          </li>
          <li>
            <Link className="links" href="#contact_us">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <div className="logo_header">
        <h3 className="logo_header_text">Crafted</h3>
        <Image width="45" height={45} src="/icons/logo_45x2.png" alt="Shop Logo" />
        <h3 className="logo_header_text">Treasures</h3>
      </div>

      <div className="entrance_mode">
        {/* <SearchHeader></SearchHeader> */}
        <CartHeader></CartHeader>
       <Login></Login>
      </div>
    </header>
  );
};

export default Header;
