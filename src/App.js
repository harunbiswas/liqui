import './assets/sass/App.scss'
import Banner from './components/Banner'
import Beyond from './components/Beyond'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Investication from './components/Investication'
import Overview from './components/Overview'
import RoadMap from './components/Roadmap'
import Uniswap from './components/Uniswap'
import ScrollToTop from './components/basic/ScrollToTop'
import Header from './components/header/Header'

function App() {
  return (
    <div className='app'>
      <Header />
      <Banner />
      <Beyond />
      <Investication />
      <Overview />
      <RoadMap />
      <Uniswap />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
