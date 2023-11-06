import './App.css';
import { CounterHook } from './components/CounterHook';
import { DataFetch } from './components/DataFetch';
import { EffectHook } from './components/EffectHook';
import { FormHook } from './components/FormHook';
import { ItemHook } from './components/ItemHook';

function App() {
  return (
    <div className="App">
      <CounterHook/>
      <FormHook/>
      <ItemHook />
      <EffectHook/>
      <DataFetch/>
    </div>
  );
}

export default App;
