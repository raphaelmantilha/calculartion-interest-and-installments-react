import React, { useState,useEffect } from 'react';
import Form from './components/Form';
import Installments from './components/installments/Installments';

export default function App() {

  const [montanteInicial,setMontanteInicial] = useState('0');
  const [jurosMensal,setJurosMensal] = useState('0');
  const [periodo,setPeriodo] = useState('0');
  const [parcelas,setParcelas] = useState([]);

  useEffect(() => {
    const montanteInicialFloat = parseFloat(montanteInicial);
    const jurosMensalFloat = parseFloat(jurosMensal);
    const parcelas=[];
    let valor = (montanteInicialFloat*(jurosMensalFloat/100))+montanteInicialFloat;
    valor=+valor.toFixed(2);
    let acrescimo = valor - parseFloat(montanteInicial);
    acrescimo=+acrescimo.toFixed(2);
    let jurosAcrescimo = parseFloat(jurosMensal);
    jurosAcrescimo=+jurosAcrescimo.toFixed(2);
    
    parcelas.push({
      id:0,
      valor,
      acrescimo,
      jurosAcrescimo 
    });

    for(let i=1;i<periodo;i++){
      valor = (parcelas[i-1].valor*(jurosMensalFloat/100))+parcelas[i-1].valor;
      valor=+valor.toFixed(2);
      acrescimo = valor - parseFloat(montanteInicial);
      acrescimo=+acrescimo.toFixed(2);
      jurosAcrescimo = acrescimo/parseFloat(montanteInicial)*100;
      jurosAcrescimo=+jurosAcrescimo.toFixed(2);

      parcelas.push({
        id:i,
        valor,
        acrescimo,
        jurosAcrescimo 
      });
    }

    console.log(parcelas);
    setParcelas(parcelas);

  }, [montanteInicial,jurosMensal,periodo]);

  const handleFieldChange = (id,value) => {
    if (id==="montante_inicial") setMontanteInicial(value);
    else if (id==="juros_mensal") setJurosMensal(value);
    else if (id==="periodo") setPeriodo(value);
  }

  return (
    <div className="container">
      <h1 style={styles.centeredTitle}>React Juros Compostos</h1>
      <Form 
        montanteInicial={montanteInicial}
        jurosMensal={jurosMensal}
        periodo={periodo}
        onFieldChange={handleFieldChange}
      />
      <Installments
        parcelas={parcelas}
        montanteInicial={montanteInicial}
      />
    </div>
  );
}

const styles = {
  centeredTitle:{
    textAlign:'center'
  }
}
