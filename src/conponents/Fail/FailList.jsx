import PropTypes from 'prop-types';

import { Fail } from './Fail';

export const FailList = ({ items }) => {
  return (
    <div>
      {items.map(({ id, label, percentage }) => (
        <Fail key={id} label={label} percentage={percentage} />
      ))}
    </div>
  );
};

FailList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
