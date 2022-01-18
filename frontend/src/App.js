import Navbar from './components/Navbar'
import Header from './components/Header'
import Box from './components/Box'

function App() {
  return (
    <>
     <Navbar/>
      <Header />
      <section className="boxes">
        <div className="container">
          <Box/>
          <Box/>
          <Box/>          
          <Box/>          
        </div>
      </section>
    </>
  );
}

export default App;