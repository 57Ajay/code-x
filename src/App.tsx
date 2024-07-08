import BackHeading from "./components/BackHeading";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Header from "./components/Header";
import CenterContainer from "./components/CenterContainer";
import Sidebar from "./components/Sidebar";
import TodoLists from "./components/TodoLists";
const App = () => {
  return (
    <Container>
      <BackHeading />

      <CenterContainer>
        <Header />
        <TodoLists />
        <Sidebar />
      </CenterContainer>

      <Footer />
    </Container>
  );
};

export default App;
