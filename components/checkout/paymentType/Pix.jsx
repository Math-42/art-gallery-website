import React, { useState, useEffect } from "react"
import styles from 'styles/Checkout.module.css'

export default function Pix({showDetails,total}) {
	return (
		<>
			{ showDetails &&
                <div className={styles.boleto}>
                    <h3>R$ {total.toFixed(2)} à vista</h3>
                    <p>Copie o código Pix na próxima etapa e faça o pagamento na instituição financeira de sua escolha. O código tem validade de 1 hora.</p>
                </div>
               }
		</>
	)
}