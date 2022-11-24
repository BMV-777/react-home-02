import PropTypes from 'prop-types';

export default function Statistics({ item }) {
  return (
    <section className="Upload stats">
      <ul className="">
        {item.map(({ id, label, percentage }) => (
          <li className={item} key={id}>
            <span className={label}>{label}</span>
            <span className={label}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
