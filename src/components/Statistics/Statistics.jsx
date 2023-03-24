import PropTypes from 'prop-types';
import CN from 'classnames'
// import css from '../Statistics/Statistics.module.css';
import { ListStatistics } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <ListStatistics>
      <li className={CN(`info`)}>
        Good:<span className={CN(`good`)}>{good}</span>
      </li>
      <li className={CN(`info`)}>
        Neutral:<span className={CN(`neutral`)}>{neutral}</span>
      </li>
      <li className={CN(`info`)}>
        Bad:<span className={CN(`bad`)}>{bad}</span>
      </li>
      <div className={CN(`wrapper`)}>
      <div className={CN(`info-result`)}>
        Total:<span className={CN(`value`)}>{total}</span>
      </div>
      {percent > 0 ? (
        <div className={CN(`info-result`)}>
          Positive feedback:<span className={CN(`percent`)}> {percent}% </span>
        </div>
      ) : (
        <div className={CN(`info-result`)}>No positive feedback yet</div>
      )}
      </div>
    </ListStatistics>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};