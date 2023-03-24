import CN from 'classnames'
import PropTypes from 'prop-types';
import { LiBtn } from './FeedbakOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (

    <>
      {options.map(option => {
        return (
          <LiBtn key={option}>
            <button className={CN(`btn-${option}`)} type="button" name={option}
              onClick={onLeaveFeedback}
            >{option}</button>
          </LiBtn>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};