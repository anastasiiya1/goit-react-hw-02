import { SiBuymeacoffee } from "react-icons/si";
import css from "./Description.module.css";

const Description = () => {
	return(
		<>
		<h1 className={css.title}>Sip Happens Café</h1>
		<SiBuymeacoffee className={css.icon}/>
		<p className={css.text}>Please leave your feedback about our service by selecting one of the options below.</p>
		</>
	)
}

export default Description