import LoginForms from './LoginForms'
import RegisterForms from './RegisterForms'
import React from "react";
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

	let registerRef
	let loginRef
	const func = (e) => {
		if(e === 'login')
		{
			loginRef.style.display = 'none'
			registerRef.style.display = 'flex'
		}
		else
		{
			loginRef.style.display = 'flex'
			registerRef.style.display = 'none'
		}
		console.log(e)
	}

    return (
		<>
			<div className={styles.login}>
				<LoginForms link={path} inputRef={el => loginRef = el} func={func}/>
				<div className={styles.verticalSeparator}/>
				<RegisterForms link={path} inputRef={el => registerRef = el} func={func} />
			</div>
		</>
	)
}
