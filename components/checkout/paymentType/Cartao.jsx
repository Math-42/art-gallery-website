import React, { useState, useEffect } from "react"
import styles from 'styles/Checkout.module.css'

export default function Cartao({showDetails,total}) {

    let months = ['Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro']

    let payment = Array.from({ total:total, length: 12 }, (_, idx) => {
        return ((idx+1)*total).toFixed(2)
    })
	return (
		<>
			{ showDetails &&
                <div className={styles.formsContainer}>
                    <div className={styles.cardFormsItem}>
                        <label>Número do cartão
                            <input type="text" name="nome" placeholder= "1111-2222-3333-4444" className={styles.inputCard}  required />   
                        </label>
                    </div>

                    <div className={styles.cardFormsItem}>
                        <label>Nome impresso no cartão
                            <input type="text" name="nome" placeholder= "Nome impresso no cartão" className={styles.inputCardName}  required />   
                        </label>
                    </div>

                    <div className={styles.cardFormsItem}>
                        <label className={styles.expirationLabel}>Validade
                            <div className={styles.expirationSelectContainer}>
                                <select name="" id="" className={styles.selectMes} >
                                    <option value="0" defaultValue>Mês</option>
                                    { months.map( (month,index) => {
                                        return <option value={index+1} >{month}</option>
                                    })}
                                </select>
                                <select name="" id="" className={styles.selectAno}>
                                    <option value="0" defaultValue>Ano</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                </select>
                            </div>
                        </label>
                    </div>

                    <div className={styles.cardFormsItem}>
                        <label>CVV
                            <input type="text" name="nome" placeholder= "123" className={styles.inputCVV}  required />   
                            <span className={styles.cvvLabel} >Código de 3 a 4 digitos impresso na frente ou no verso do seu cartão</span>
                        </label>
                    </div>


                    <div className={styles.cardFormsItem}>
                        <label>Parcelamento
                            <select name="" id="" className={styles.selectParcelas}>
                                { payment.map( (p,index) => {
                                        return <option value={index+1} defaultValue={index==0}>{index+1}x R$ {total.toFixed(2)} (R$ {p})</option>
                                })}
                            </select>
                        </label>
                    </div>


                    <div className={styles.cardFormsItem}>
                        <label>
                            <input type="checkbox" name="shipAdress" defaultChecked/> 
                            Guardar cartão para as próximas compras
                        </label>
                    </div>

                    <div className={styles.cardFormsItem}>
                        <label>
                            <input type="checkbox" name="shipAdress"/> 
                            Definir cartão como padrão para as próximas compras
                        </label>
                    </div>
                </div>
               }
		</>
	)
}