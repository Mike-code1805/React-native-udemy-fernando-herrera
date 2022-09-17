import React from 'react';
import {Text, View} from 'react-native';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/AppTheme';
import {ButtonCalculator} from '../components/ButtonCalculator';

export const CalculatorScreen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    positioNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculator();

  const buttons = [
    {
      text: 'C',
      color: '#9B9B9B',
      action: limpiar,
    },
    {
      text: '+/-',
      color: '#9B9B9B',
      action: positioNegativo,
    },
    {
      text: 'del',
      color: '#9B9B9B',
      action: btnDelete,
    },
    {
      text: '/',
      color: '#FF9427',
      action: btnDividir,
    },
    {
      text: '7',
      action: armarNumero,
    },
    {
      text: '8',
      action: armarNumero,
    },
    {
      text: '9',
      action: armarNumero,
    },
    {
      text: 'X',
      color: '#FF9427',
      action: btnMultiplicar,
    },
    {
      text: '4',
      action: armarNumero,
    },
    {
      text: '5',
      action: armarNumero,
    },
    {
      text: '6',
      action: armarNumero,
    },
    {
      text: '-',
      color: '#FF9427',
      action: btnRestar,
    },
    {
      text: '1',
      action: armarNumero,
    },
    {
      text: '2',
      action: armarNumero,
    },
    {
      text: '3',
      action: armarNumero,
    },
    {
      text: '+',
      color: '#FF9427',
      action: limpiar,
    },
    {
      text: '0',
      width: true,
      action: armarNumero,
    },
    {
      text: '.',
      action: armarNumero,
    },
    {
      text: '=',
      color: '#FF9427',
      action: calcular,
    },
  ];

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      {/* Fila de botones */}
      <View style={styles.fila}>
        <ButtonCalculator text="C" color="#9B9B9B" action={limpiar} />
        <ButtonCalculator text="+/-" color="#9B9B9B" action={positioNegativo} />
        <ButtonCalculator text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCalculator text="/" color="#FF9427" action={btnDividir} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <ButtonCalculator text="7" action={armarNumero} />
        <ButtonCalculator text="8" action={armarNumero} />
        <ButtonCalculator text="9" action={armarNumero} />
        <ButtonCalculator text="X" color="#FF9427" action={btnMultiplicar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <ButtonCalculator text="4" action={armarNumero} />
        <ButtonCalculator text="5" action={armarNumero} />
        <ButtonCalculator text="6" action={armarNumero} />
        <ButtonCalculator text="-" color="#FF9427" action={btnRestar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <ButtonCalculator text="1" action={armarNumero} />
        <ButtonCalculator text="2" action={armarNumero} />
        <ButtonCalculator text="3" action={armarNumero} />
        <ButtonCalculator text="+" color="#FF9427" action={btnSumar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <ButtonCalculator text="0" action={armarNumero} width />
        <ButtonCalculator text="." action={armarNumero} />
        <ButtonCalculator text="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};
