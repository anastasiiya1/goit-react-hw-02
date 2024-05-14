import PropTypes from 'prop-types';

const Feedback = ({good, neutral, bad, total, positivePercent, totalFeedback }) => {
	return(
		<>
		{ totalFeedback > 0 && ( 
		<>
		<p>Good: {good}</p>
		<p>Neutral: {neutral}</p>
		<p>Bad: {bad}</p>
		<p>Total: {total}</p>
		<p>Positive: {positivePercent}%</p>
		</>
		)}
		</>
	)
}

Feedback.propTypes = {
	good: PropTypes.number,
	neutral: PropTypes.number,
	bad: PropTypes.number,
	total: PropTypes.number,
	positivePercent: PropTypes.number,
	totalFeedback: PropTypes.number,
}

export default Feedback