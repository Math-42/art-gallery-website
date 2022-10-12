import LoginForms from './LoginForms'
import RegisterForms from './RegisterForms'
import { useRouter } from "next/router";
import styles from 'styles/Login.module.css'

export default function Login({link}) {
	const router = useRouter()
	let path
	if (link === undefined)
	{
		path = router.pathname
	}
	else
	{
		path = '/'+link
	}

    return (
		<>
			<div className={styles.login}>
				<LoginForms link={path} />
				<div className={styles.verticalSeparator}/>
				<RegisterForms link={path}/>
			</div>
		</>
	)
}