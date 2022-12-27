import { Provider } from 'react-redux';
import './App.css';
import MainComp from './Redux/component/MainComp';
import { Store } from './Redux/Store/Store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <MainComp/>
      </Provider>
    </div>
  );
}

export default App;
