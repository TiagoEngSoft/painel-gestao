import React from 'react'
import { groupNumber, ordersData } from '../../data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
import css from './Orders.module.css'

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src="./logo.png" alt="logo" />
                <span>Pedidos do dia</span>
            </div>

            <div className={`grey-container ${css.stat}`}>
                <span>Resumo</span>
                <span>R$ {groupNumber(4560)}</span>
            </div>

            <div className={css.orders}>
                {
                    ordersData.map((order, index) => (
                        <div key={index} className={css.order}>
                            <div>
                                <span>{order.name}</span>
                                <span>$ {order.change}</span>
                            </div>
                            <div>
                                <span>{order.type}</span>
                                <span>Itens: {order.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>


            <div className={css.orderChart}>
                <span>Dividir meu dia</span>
                <OrdersPieChart/>
            </div>
        </div>
    )
}

export default Orders