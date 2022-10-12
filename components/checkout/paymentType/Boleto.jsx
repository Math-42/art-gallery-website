import React, { useState, useEffect } from "react"
import styles from 'styles/Checkout.module.css'

export default function Boleto({showDetails,total}) {
	return (
		<>
			{ showDetails &&
                <div className={styles.boleto}>
                    <h3>R$ {total.toFixed(2)} à vista</h3>
                    <p>O prazo para pagamento do poleto é de até 7 dias</p>
                </div>
               }
		</>
	)
}