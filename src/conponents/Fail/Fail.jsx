export const Fail = ({ key, label, percentage }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="">
          <span className="label">{label}</span>
          <span className="percentage"> {percentage}</span>
        </li>
        <li className="">
          <span className="label">{label}</span>
          <span className="percentage"> {percentage}</span>
        </li>
        <li className="">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        <li className="">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  );
};
