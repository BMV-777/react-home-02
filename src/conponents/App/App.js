import { Statistics } from '../Statistics/Statistics';
// import { StatisticsList } from '../Statistics/StatisticsList';
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
