import PropTypes from 'prop-types';

import { StatisticsList } from './StatisticsList';

export const Statistics = ({ stats }) => {
  return (
    <div>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsList key={id} label={label} percentage={percentage} />
      ))}
    </div>
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
