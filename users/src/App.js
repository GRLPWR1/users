import Header from './components/Header/Header.jsx';
import Users from './components/Users/Users.jsx';
import Footer from './components/Footer/Footer.jsx';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {
  let id = uuidv4();
  return (
    <div className="App">
      <Header />
      <Users
        id={id} />
      <Footer />
    </div>
  );
}

export default App;
