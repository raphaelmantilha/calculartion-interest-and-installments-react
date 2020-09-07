import React from 'react';

import * as formatter from '../helpers/formatters'

import css from './installments.module.css';

export default function Installment(props) {
    const {installment} = props;
    const {id,valor,acrescimo,jurosAcrescimo} = installment;
        
    return (
        <div className="col s6 m3 l2">
            <div className={css.flexRow}>
                <span style={{ marginRight: '10px' }}>
                    <strong>{id+1}</strong>
                </span>
                <div className={`${css.flexColumn} ${css.border}`}>
                    <span>{formatter.formatMoney(valor)}</span>
                    <span>{formatter.formatMoneyPositiveNegative(acrescimo)}</span>
                    <span>{formatter.formatPercent(jurosAcrescimo)}</span>
                </div>
            </div>
        </div>
    )
}
