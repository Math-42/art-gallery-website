import React from "react"
import styles from 'styles/Checkout.module.css'

export default function Billing() {
	return (
		<>
			<div className={styles.formsContainer}>
				<h1>Endereço de entrega</h1>

				<div className={styles.formsItem}>
					<label>NOME
						<input type="text" name="nome" placeholder= "" className={styles.input}  required />   
					</label>
					</div>
				
				<div className={styles.formsItem}>
					<label>SOBRENOME
						<input type="text" name="nome" placeholder= "" className={styles.input}  required />   
					</label>
				</div>
				
				<div className={styles.formsItem}>
					<label>EMPRESA (opcional)
						<input type="text" name="company" placeholder= "" className={styles.input}/>   
					</label>
				</div>

				<div className={styles.formsItem}>
					<label>PAIS
						<select name="pais" className={styles.select} >
							<option value="Brasil" defaultValue>Brasil</option>
						</select>
					</label>
				</div>
				
				<div className={styles.formsItem}>
					<label>RUA
						<input type="text" name="rua" placeholder= "Rua e numero da casa" className={styles.input}  required />   
					</label>
				</div>

				<div className={styles.formsItem}>
					<label hidden>Complemento
						<input type="text" name="rua" placeholder= "Apartamento, bloco, etc. (opcional)" className={styles.input}  required />   
					</label>
				</div>

				<div className={styles.formsItem}>
					<label>CIDADE
						<input type="text" name="rua" placeholder= "cidade" className={styles.input}  required />   
					</label>
				</div>

				<div className={styles.formsItem}>
					<label>ESTADO
						<select name="estado" className={styles.select} >
							<option value="SaoPaulo" defaultValue>São Paulo</option>
						</select>
					</label>
				</div>

				<div className={styles.formsItem}>
					<label>CEP
						<input type="text" name="rua" placeholder= "CEP" className={styles.input}  required />   
					</label>
				</div>

				<div className={styles.formsItem}>
					<label>TELEFONE
						<input type="text" name="rua" placeholder= "(99) 99999-9999" className={styles.input}  required />   
					</label>
				</div>

				<div className={styles.formsItem}>
					<label>EMAIL
						<input type="email" name="rua" placeholder= "email@email.com" className={styles.input}  required />   
					</label>
				</div>
			</div>
		</>
	)
}
