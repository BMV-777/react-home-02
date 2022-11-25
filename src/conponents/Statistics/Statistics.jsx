import PropTypes from 'prop-types';

import {
  Container,
  UlSection,
  ListItem,
  List,
  Card,
} from './Statistics.module';

const setActive = ({ isActive }) => (isActive ? 'active' : '');

export default function Statistics({ item, title }) {
  return (
    <Container className="Upload stats">
      {title && <Card className={setActive}>{title}</Card>}
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

// {({ isActive }) => (isActive ? 'active' : '')}
