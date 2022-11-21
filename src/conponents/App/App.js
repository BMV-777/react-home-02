import { FailList } from '../Fail/FailList';
import data from '../../fail.json';

function App() {
  return (
    <div>
      <FailList title="Upload stats" stats={data} />;
      <FailList stats={data} />;
    </div>
  );
}

export default App;
