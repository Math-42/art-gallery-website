import React, { useState, useEffect } from "react"
import styles from 'styles/Checkout.module.css'
import Cartao from "./paymentType/Cartao";
import Boleto from "./paymentType/Boleto";
import Pix from "./paymentType/Pix";

export default function Payment({total}) {
	const [paymentType, setPayment] = useState(0);

	return (
		<>
			<div className={styles.formsContainer}>
				<h1>Escolha a forma de Pagamento</h1>
				<div className={styles.payment}>
					<div className={styles.paymentType}>
						<label>
							<svg width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M22.556 22.155a3.942 3.942 0 0 1-2.804-1.161l-4.05-4.05a.77.77 0 0 0-1.064 0l-4.065 4.065a3.942 3.942 0 0 1-2.804 1.16H6.97L12.1 27.3a4.102 4.102 0 0 0 5.8 0l5.144-5.144h-.488ZM7.769 7.83c1.059 0 2.055.413 2.804 1.162l4.065 4.065a.753.753 0 0 0 1.064 0l4.05-4.05a3.942 3.942 0 0 1 2.804-1.162h.488L17.9 2.701a4.102 4.102 0 0 0-5.8 0l-5.13 5.13h.799Z" fill="#32BCAD"></path><path d="M27.299 12.1 24.19 8.99a.593.593 0 0 1-.22.045h-1.414c-.73 0-1.446.296-1.962.813l-4.05 4.05a1.938 1.938 0 0 1-1.374.568 1.94 1.94 0 0 1-1.374-.568L9.73 9.834a2.793 2.793 0 0 0-1.962-.813H6.03a.589.589 0 0 1-.209-.042l-3.12 3.12a4.102 4.102 0 0 0 0 5.801l3.12 3.121a.591.591 0 0 1 .209-.042h1.738c.73 0 1.445-.296 1.962-.813l4.064-4.064c.735-.735 2.016-.735 2.75 0l4.05 4.05a2.793 2.793 0 0 0 1.961.812h1.414a.59.59 0 0 1 .22.045L27.3 17.9a4.102 4.102 0 0 0 0-5.8Z" fill="#32BCAD"></path></svg>
							<input type="radio" name="payment" id="payment1" onClick={() => setPayment(1)} />
							<span>Pix</span>
						</label>
						<Pix total={total} showDetails={paymentType === 1}/>
					</div>
					
					<div className={styles.paymentType}>	
						<label>
							<svg width="30" height="20" viewBox="0 0 50 40"><path d="M45 0H5a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h40a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm0 35H5V20h40zm0-22.5H5V5h40zm0 0"></path></svg>
							<input type="radio" name="payment" id="payment2" onClick={() => setPayment(2)} />
							<span>Cartão</span>
						</label>
						<Cartao total={total} itemName="Cartão" showDetails={paymentType === 2}/>
					</div>

					<div className={styles.paymentType}>
						<label>
							<svg width="30" height="20" viewBox="0 0 55 44"><path d="M50.598 0h-46.2A4.398 4.398 0 0 0 0 4.398v35.204A4.4 4.4 0 0 0 4.398 44h46.2A4.401 4.401 0 0 0 55 39.602V4.398A4.399 4.399 0 0 0 50.598 0zm0 39.602h-46.2V4.398h46.2zm0 0"></path><path d="M8.383 7.676h5.5v28.656h-5.5zm8.117 0h2.75v28.656H16.5zm6.875 0H27.5v28.656h-4.125zm13.75 0h5.5v28.656h-5.5zm8.25 0h1.375v28.656h-1.375zm-13.75 0h1.371v28.656h-1.371zm0 0"></path></svg>
							<input type="radio" name="payment" id="payment3" onClick={() => setPayment(3)} />
							<span>Boleto</span>
						</label>
						<Boleto total={total} itemName="Boleto" showDetails={paymentType === 3}/>
					</div>
				</div>
			</div>
		</>
	)
}
