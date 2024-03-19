import AboutPage from "./AboutPage/AboutPage"
import "./App.css"
import HomePage from "./HomePage/HomePage"
import ProductPage from "./ProductPage/ProductPage"

function App() {
  return (
    <>
      <header>
        <nav>
          <ul className="list">
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
          </ul>
        </nav>
      </header>
      <HomePage />
      <AboutPage />
      <ProductPage />
    </>
  )
}

export default App
