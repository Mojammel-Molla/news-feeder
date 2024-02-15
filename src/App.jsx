import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import NewsSection from './components/news-section/NewsSection';
import UseNewsQuery from './hooks/UseNewsQuery';

function App() {
  const allNews = UseNewsQuery();
  console.log(allNews);
  return (
    <>
      <Navbar></Navbar>
      <main className="my-10 lg:my-14">
        <NewsSection allNews={allNews}></NewsSection>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
