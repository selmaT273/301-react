import './App.css';
import Header from './Header.js';
import Main from './Main.js';

function App() {
  // we can only return a single parent element, so in order to return them both we can contain them inside of a fragment, which acts as the new parent
  return (
      <>
      <h1>Cool Coffee</h1>
      <Header />
      <Main />
      </>
  );
}

export default App;
