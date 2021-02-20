import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Label = styled.label`
font-family:'Bebas Neue', cursive;
color: #fff;
text-transform:uppercase;
font-weight:bold;
font-size: 2.4rem;
margin-top: 2rem;
display: block;

`
const Select = styled.select`
width: 100%;
display:block;
padding:1rem;
--webkit-appearance:none;
border-radius:10px;
border:none;
`

const useCurrency = (label, initialState, currencies) => {

//State custom Hook

const [state, saveState] = useState(initialState);


  const SelectCurrencies = () => (
    <Fragment>
      <Label>{label}</Label>
     <Select 
     onChange={ e => saveState(e.target.value)}
     value={state}
     >
       <option value=''>---Select Currency---</option> 
       {currencies.map(option => (
         <option key={option.code} value={option.code}>{option.name}</option>

       )
       )}
     </Select>
      
    </Fragment>
  );


  return  [state, SelectCurrencies]



}

useCurrency.propTypes = {
  label: PropTypes.string.isRequired,
  initialState: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired
  
  }

export default useCurrency