import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled'
import PropTypes from "prop-types";

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

const useCryptoCurrency = (label, initialState, listcrypto) => {

//State custom Hook

const [state, saveState] = useState(initialState);


  const SelectCrypto = () => (
    <Fragment>
      <Label>{label}</Label>
     <Select 
     onChange={ e => saveState(e.target.value)}
     value={state}
     >
       <option value=''>---Select Currency---</option> 
       {listcrypto.map(option => (
        <option value={option.CoinInfo.Name} key={option.CoinInfo.Id}>{option.CoinInfo.FullName}</option>
       )
       )}
     </Select>
      
    </Fragment>
  );


  return  [state, SelectCrypto]



}

useCryptoCurrency.propTypes = {
  label: PropTypes.string.isRequired,
  initialState: PropTypes.string.isRequired,
  listcrypto: PropTypes.array.isRequired
  
  }

export default useCryptoCurrency