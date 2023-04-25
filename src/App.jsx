import Header from "./components/Header";
import Horizontal from "./components/Horizontal";
import Main from "./components/Main";
import Rockets from "./components/Rockets";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className=" min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <Main />
      <Horizontal />
      <Rockets />
      <Horizontal />
      <Testimonials />
      <Horizontal />
      <Contacts />
      <Footer />
    </div>
  );
}
