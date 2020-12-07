import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculator from '../logic/calculate';

function App() {
  const result = Calculator({ total: '16', next: null, operation: '*' }, '+');
  return (
    <>
      <Display display={result} />
      <ButtonPanel />
    </>
  );
}

export default App;
