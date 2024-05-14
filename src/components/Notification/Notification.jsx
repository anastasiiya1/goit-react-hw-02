const Notification = ({totalFeedback}) => {
	return(
		<>{
			totalFeedback === 0 && (<p>No feedback yet</p>)
		}
		</>
	)
}

export default Notification