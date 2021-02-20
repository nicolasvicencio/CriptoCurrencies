import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const DivResult = styled.div`
color: #fff;
font-family: Arial, Helvetica, sans-serif;
span{
  font-weight: bold;
}
`
const Info = styled.p`
font-size:18px;
span{
  font-weight: bold;
}

`
const Price = styled.p`
font-size:30px;

`

const Quotation = ({quotation}) => {
  if(Object.keys(quotation).length === 0) return null

  return (
    <DivResult>
      <Price>Price: <span>{quotation.PRICE}</span></Price>
      <Info>Highest daily price: <span>{quotation.HIGHDAY}</span></Info>
      <Info>Lowest daily price: <span>{quotation.LOWDAY}</span></Info>
      <Info>Last 24 hours variation: <span>{quotation.CHANGEPCT24HOUR}</span></Info>
      <Info>Last Update: <span>{quotation.LASTUPDATE}</span></Info>
    </DivResult>



    );
}

Quotation.propTypes = {
  quotation: PropTypes.object.isRequired
}
 
export default Quotation;