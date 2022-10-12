import React from "react"
import styles from 'styles/Checkout.module.css'

export default function OrderItem({itemName,itemQnt,total}) {
	let item;
    if(itemQnt)
    {
        item = <p className={styles.tableColItem}>{itemName} x{itemQnt}</p>
        console.log(itemQnt)
    }
    else
    {
        item = <p>{itemName}</p>
    }

    return (
		<>
			<div className={styles.tableRow}>
				{item}
                <p className={styles.tableColTotal}>R$ {total}</p>
			</div>
		</>
	)
}
