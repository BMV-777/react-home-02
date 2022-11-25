import PropTypes from 'prop-types';
import { Container, UlSection, ListItem, List } from './Statistics.module';

export default function Statistics({ item }) {
  return (
    <Container className="Upload stats">
      <UlSection className="">
        {item.map(({ id, label, percentage }) => (
          <ListItem className={item} key={id}>
            <List className={label}> {label}</List>
            <List className={label}> {percentage}%</List>
          </ListItem>
        ))}
      </UlSection>
    </Container>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
