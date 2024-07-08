import BackHeading from "./components/BackHeading";
import Footer from "./components/Footer";
import Container from "./components/Container";
const App = () => {
  return (
    <Container>
      <BackHeading />

      <main className="relative w-[972px] h-[636px] bg-slate-100 rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]"></header>
        <ul></ul>
        <section className="col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]"></section>
      </main>

      <Footer />
    </Container>
  );
};

export default App;
