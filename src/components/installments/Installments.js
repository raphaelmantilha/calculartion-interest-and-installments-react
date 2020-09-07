import React from 'react';

import css from './installments.module.css';
import Installment from './Installment';

export default function Installments(props) {
    const {parcelas,montanteInicial}=props;
    console.log(montanteInicial=='0')
    
    return (
        <div className="row">
            {parcelas.map(parcela=>{
                return <Installment key={parcela.id} installment={parcela} />
            })}
        </div>
    );
}
