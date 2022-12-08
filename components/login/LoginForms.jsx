import React, { useRef } from "react";
import Link from "next/link"
import styles from 'styles/Login.module.css'
import GoogleButton from 'react-google-button'

export default function LoginForms({ link, func, inputRef }) {

	return (
		<>
			<div className={styles.loginFormsContainter} ref={inputRef}>
				<div className={styles.title}>
					<h2>Login</h2>
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

					<div className={styles.formsItemChangeState} onClick={() => func('login')}>
							<input type="submit" value="CADASTRO" className={styles.submit} />
					</div>
				</div>
			</div>
		</>
	)

}
