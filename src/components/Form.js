import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled'
import useCurrency from '../hooks/useCurrency'
import useCryptoCurrency from '../hooks/useCrytoCurrency'
import axios from 'axios'
import Error from './Error'
import PropTypes from 'prop-types'

const Button = styled.input`
margin-top: 20px;
font-weight: bold;
font-size: 20px;
padding: 10px;
background-color: #66a2fe;
border:none;
width: 100%;
border-radius: 10px;
color: #fff;
transition: background-color 300ms ease;

&:hover{
  background-color: #326ac0;
  cursor:pointer;

}


`

const Form = ({saveCurrency, saveCryptocurrency}) => {

// Crytocurrency list state
const [ listcrypto , saveListCrypto ] = useState([])
const [error, saveError] = useState(false)



const currencies = [
  {code: 'USD', name: 'USA Dollar'},
  {code: 'CLP', name: 'Chilean Peso'},
  {code: 'EUR', name: 'Euro'},
  {code: 'GBP', name: 'Pound sterling'}
]

// Using useCurrency
const [currency, SelectCurrency] = useCurrency('Select your currency', '', currencies)

//Using useCryptoCurrency

const [cryptocurrency, SelectCrypto] = useCryptoCurrency('Select your cryptocurrency', '', listcrypto)


// Exec call to API

useEffect(() => {
  const consultAPI = async ()=> {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
    const res = await axios.get(url)

    saveListCrypto(res.data.Data)
  }
  consultAPI()
},[])

// when user submits

const handleSubmit = e => {
  e.preventDefault()

  //Validate if fields are full
  if(currency === '' || cryptocurrency === ''){
    saveError(true)
    return
  }else{
    //move data to main component
    saveError(false)
    saveCurrency(currency)
    saveCryptocurrency(cryptocurrency)

  }
}


  return (
    <form
    onSubmit={handleSubmit}
    >
      {error ? <Error message="All fields are required" /> : null  }
      <SelectCurrency />

      <SelectCrypto />

      <Button 
      type='submit'
      value='Calculate'
      />
    </form>


    );
}
 

Form.propTypes = {
saveCurrency: PropTypes.func.isRequired,
saveCryptoCurrency: PropTypes.func.isRequired

}
export default Form;