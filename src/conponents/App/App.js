// import { Statistics } from '../Statistics/Statistics';
import Statistics from '../Statistics/Statistics';
import data from '../../fail.json';

function App() {
  return (
    <div>
      <Statistics title="Upload stats" item={data} />
      {/* <Statistics stats={data} />  */}
    </div>
  );

  // function LiUser(props) {
  //   const user = props.user;

  //   return (
  //     <li>
  //       {user.label} {user.percentage}
  //     </li>
  //   );
  // }
}

export default App;

/* <div>
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} /> 
</div> */

//   <ul>
//     {users.map((user) => (
//       <LiUser key={user.id} user={user} />
//     ))}
//   </ul>
// );

// function LiUser(props) {
//   const user = props.user;

//   return (
//     <li>
//       {user.label} {user.percentage}
//     </li>
//   );
