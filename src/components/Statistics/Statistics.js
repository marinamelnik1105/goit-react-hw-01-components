import PropTypes from 'prop-types';
import { Item, Stats, StatsList } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Stats>
      {title && <h2>{title}</h2>}
      <StatsList>
        {stats.map(item => (
          <Item key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </Item>
        ))}
      </StatsList>
    </Stats>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
