import LoginForms from './LoginForms'
import RegisterForms from './RegisterForms'

import styles from 'styles/Login.module.css'

export default function Login({link}) {
    return (
		<>
			<div className={styles.login}>
				<LoginForms link={link} />
				<div className={styles.verticalSeparator}/>
				<RegisterForms link={link}/>
			</div>
		</>
	)
}