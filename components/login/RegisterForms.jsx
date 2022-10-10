import React from "react";
import Link from "next/link"
import styles from 'styles/Login.module.css'

export default function RegisterForms({link}) {
	return (
		<>
            <div className={styles.formsContainter}>
                <div className={styles.title}>
                    <h1>Cadastro</h1>
                </div>
                <div className={styles.loginbts}>
                    <div>
                        <div className={styles.formsItem}>
                            <label>USUÁRIO
                                <input type="text" name="usuario" placeholder= "usuário" className={styles.input}  required />   
                            </label>
                        </div>
                        <div className={styles.formsItem}>
                            <label>EMAIL
                                <input type="email" name="email" placeholder= "email@email.com" className={styles.input}  required />   
                            </label>
                        </div>
                        <div className={styles.formsItem}>
                            <label >SENHA
                                <input type="password" name="senha" placeholder= "senha" className={styles.input}  required />   
                            </label>
                        </div>
                        <div className={styles.formsItem}>
                            <label >CONFIRMAR
                                <input type="password" name="senha" placeholder= "senha" className={styles.input}  required />   
                            </label>
                        </div>
                        <div className={styles.formsItem}>
                            <Link href={`/${link}`}>
                                <input type="submit" value="CADASTRAR" className={styles.submit} />
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}