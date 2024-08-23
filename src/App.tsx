import Footer from "./components/footer"
import About from "./components/about/about"
//import Products from "./components/products/products"
import Home from "./components/home/home"
import ScrollRevealComponent from "./components/scrollReveal/scrollReveal"
function App() {
  ScrollRevealComponent();
  
  return (
    <div className="App">
      <h1>Wb Sat</h1>
      <Home />
      {/*<Products />*/}
      <About />
      <Footer />
    </div>
  )
}

export default App
