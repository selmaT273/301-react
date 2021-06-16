import './App.css';
import Header from './Header.js';
import CoolCoffee from './CoolCoffee.js';

function App() {
  // we can only return a single parent element, so in order to return them both we can contain them inside of a fragment, which acts as the new parent
  return (
      <>
      <h1>Cool Coffee</h1>
      <Header />
      <CoolCoffee number="42" prompt="How awesome do you want it to be?"/>
      <CoolCoffee number="45" prompt="How cool do you want your coffee?"/>
      </>
  );
}

export default App;
