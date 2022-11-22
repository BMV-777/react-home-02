import PropTypes from 'prop-types';

import { StatisticsList } from './StatisticsList';

export const Statistics = ({ stats }) => {
  return (
    <ul>
      <li key={stats.id}>
        <StatisticsList label={stats.label} percentage={stats.percentage} />
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
{
  /* <ul>
      {stats.map((stat) => (
        <li key={stat.id}>
          <StatisticsList label={stat.label} percentage={stat.percentage} />
        </li>
      ))}
    </ul> */
}
