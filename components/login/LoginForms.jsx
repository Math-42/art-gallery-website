import React from "react";
import Link from "next/link"
import styles from 'styles/Login.module.css'
import GoogleButton from 'react-google-button'

export default function LoginForms({ link }) {
	return (
		<>
			<div className={styles.formsContainter}>
				<div className={styles.title}>
					<h1>Login</h1>
				</div>
				<div className={styles.loginbts}>
					<div>
						<div className={styles.formsItem}>
							<label>EMAIL
								<input type="email" name="email" placeholder="email@email.com" className={styles.input} required />
							</label>
						</div>
						<div className={styles.formsItem}>
							<label>SENHA
								<input type="password" name="senha" placeholder="senha" className={styles.input} required />
							</label>
						</div>
						<div className={styles.formsItem}>
							<Link href={`${link}`}>
								<input type="submit" value="ENTRAR" className={styles.submit} />
							</Link>
						</div>
					</div>
					<hr className={styles.horizontalSeparator} />
					<Link href={`${link}`}>
						<GoogleButton />
					</Link>
				</div>
			</div>
		</>
	)

}
