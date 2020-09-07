import React from 'react'

export default function Form(props) {
  
    const handleInputChange = (event) =>{
        props.onFieldChange(event.target.id,event.target.value);   
    };

    const {montanteInicial,jurosMensal,periodo} = props;
    return (
        <div className="row">
            <div className="input-field col s12 m6 l4">
                <input 
                    autoFocus 
                    value={montanteInicial}
                    id="montante_inicial" 
                    type="number" 
                    min="100"
                    max="100000"
                    step="100"
                    onChange={handleInputChange}
                />
                <label className="active" htmlFor="montante_inicial">Montante inicial</label>
            </div>
            <div className="input-field col s12 m6 l4">
                <input 
                    value={jurosMensal} 
                    id="juros_mensal" 
                    type="number" 
                    min="-12"
                    max="12"
                    step="0.5"
                    onChange={handleInputChange}
                />
                <label className="active" htmlFor="juros_mensal">Taxa de juros mensal</label>
            </div>
            <div className="input-field col s12 m6 l4">
                <input 
                    value={periodo}
                    id="periodo" 
                    type="number" 
                    min="1"
                    max="36"
                    step="1"
                    onChange={handleInputChange}
                />
                <label className="active" htmlFor="periodo">Período (meses)</label>
            </div>
        </div>
    );
}
