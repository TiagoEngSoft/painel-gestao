import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'


const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Visão Geral Estatísticas</span>

            <div className={`${css.cards} grey-container`}>

                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>

                    <div className={css.card}>
                        <span>Item principal do mês</span><span>Skateboard</span>
                    </div>
                </div>

                <div className={css.card}>
                    <span>Item</span><span>R$ {groupNumber(455)}</span>
                </div>

                <div className={css.card}>
                    <span>Lucro</span><span>R$ {groupNumber(370000)}</span>
                </div>

                <div className={css.card}>
                    <span>Média diária</span><span>R$ {groupNumber(2000)}</span>
                </div>
            </div>


            <StatisticsChart/>
        </div>
    )
}

export default Statistics