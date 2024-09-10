import Footer from "./components/footer"
//import About from "./components/about/about"
import Products from "./components/products/products"
import Home from "./components/home/home"
import ScrollRevealComponent from "./components/scrollReveal/scrollReveal"
import Header from "./components/header/header"
function App() {
  ScrollRevealComponent();
  
  return (
    <div className="App">
      <Header />
      <Home />
      <Products />
      <Footer />
    </div>
  )
}

export default App
