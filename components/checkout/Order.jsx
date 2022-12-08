import React from "react"
import OrderItem from "./OrderItem"
import styles from 'styles/Checkout.module.css'

export default function Order({orders,subtotal,shipment}) {
	return (
		<>
			<div className={styles.formsContainer}>
				<h2>Resumo do Pedido</h2>
				<div className={styles.orderTable}>
					<div className={styles.tableHeader}>
						<p>Produto</p>
						<p>Total</p>
					</div>
					
					{ orders.map( (order,index) => {
						return <OrderItem key={index} itemName={order.name} itemQnt={order.qnt} total={(order.value*order.qnt).toFixed(2)}/>
					})}
					<OrderItem itemName="Subtotal" total={subtotal.toFixed(2)}></OrderItem>
					<OrderItem itemName="Entrega" total={shipment.toFixed(2)}></OrderItem>
					<OrderItem itemName="Total" total={(shipment+subtotal).toFixed(2)}></OrderItem>
				</div>
			</div>
		</>
	)
}
