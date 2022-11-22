// import { Statistics } from './Statistics';
// import PropTypes from 'prop-types';

export const StatisticsList = ({ key, label, percentage }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="">
          {key}
          <span className="label">{label}</span>
          <span className="percentage"> {percentage}</span>
        </li>
        <li className="">
          {key}
          <span className="label">{label}</span>
          <span className="percentage"> {percentage}</span>
        </li>
        <li className="">
          {key}
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="">
          {key}
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  );
};

// StatisticsList.propTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.string.isRequired,
//   key: PropTypes.string.isRequired,
// };

// StatisticsList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };
