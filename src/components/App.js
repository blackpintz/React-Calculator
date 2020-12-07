import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculator from '../logic/calculate';

function App() {
  console.log(Calculator({ total: '2', next: '3', operation: '*' }, '+'));
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}

export default App;
