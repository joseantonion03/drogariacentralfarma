import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import Produto from "./components/Produto";
import Medicamento from "./components/Medicamento";
import Bemestar from "./components/Bemestar";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

const Home = () => {

    return (
        <>
            <Header />
            <Hero />
            <Servicos />
            <Produto />
            <Medicamento />
            <Bemestar />
            <Contato />
            <Footer />
        </>
    );
};

export default Home;