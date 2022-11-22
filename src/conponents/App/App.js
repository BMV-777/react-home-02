import { Statistics } from '../Statistics/Statistics';
import data from '../../fail.json';

function App() {
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
    </div>
  );
}

export default App;
