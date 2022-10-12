import Page from 'components/page/Page'
import Billing from 'components/checkout/Billing'
import Order from 'components/checkout/Order'
import Payment from 'components/checkout/Payment'
import styles from 'styles/Checkout.module.css'
import Link from 'next/link'

export default function checkout() {
    const orders = [
		{ 
			name: 'Apollo and Aurora',
			qnt: 1,
			value: 408.78 
		},
		{ 
			name: 'The North Cape by Moonlight',
			qnt: 2,
			value: 429.88 
		},
		{ 
			name: 'A Winter Landscape with Ice Skaters and an Imaginary Castle',
			qnt: 3,
			value: 402.49 
		}
	]
	const subtotal = orders.reduce((accumulator, object) => {
		return accumulator + (object.value * object.qnt);
	  }, 0)

	const shipment = 1500

    const total = shipment+subtotal
	return (
		<>
			<Page>
                <div className={styles.checkout}>
                    <div className={styles.checkoutCol}>
                        <Billing/>
                    </div>
                    <div className={styles.checkoutCol}>
                        <Order orders={orders} subtotal={subtotal} shipment={shipment}/>
                        <Payment total={total}/>
                        <Link href={`/`}>
                            <input type="submit" value="Concluir Pedido" className={styles.submit} />
                        </Link> 
                    </div>
                </div>
			</Page>
		</>
	)
}
