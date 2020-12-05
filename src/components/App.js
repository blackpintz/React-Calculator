import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculator from '../logic/calculate';

function App() {
  console.log(Calculator({ total: '10', next: null, operation: '+' }, '='));
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}

export default App;
