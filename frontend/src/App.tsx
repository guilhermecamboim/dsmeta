import { Header } from "./components/Header";
import { SalesCard } from "./components/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {

  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
            <div className="dsmeta-container">
              <SalesCard />
            </div>
        </section>
      </main>
    </>
  )
}
