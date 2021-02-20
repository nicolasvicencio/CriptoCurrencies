import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import axios from 'axios'
import image from './cryptomonedas.png'
import Form from './components/Form'
import Quotation from './components/Quotation'
import Spinner from './components/Spinner'

const Container = styled.div`
max-width:900px;
margin: 0 auto;

@media screen and (min-width:992px){
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap:2rem;
}
`

const Image = styled.img`
max-width:100%;
margin-top:5rem;
`
const Heading = styled.h1`
font-family:'Bebas Neue', cursive;
color: #fff; 
text-align: left;
font-weight: 700;
font-size: 30px;
margin-bottom: 50px;
margin-top: 80px;

&::after{
  content: '';
  width:100%;
  height:100%;
  background-color: #66a2fe;
  display: block;

}
`

function App() {

const [currency, saveCurrency] = useState('')
const [cryptocurrency, saveCryptocurrency] = useState('')
const [quotation, saveQuotation] = useState({})
const [loading, saveLoading] = useState(false)


useEffect(() => {

const quotation = async () => {
    // Avoid the first execution 
    if(currency === '') return

    //Consult API to obtain quotation
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`
      const res = await axios.get(url)

      //Show spinner
      saveLoading(true)

      //Hide spiiner
      setTimeout(() => {
        saveLoading(false)
      }, 3000);
  
  
  saveQuotation(res.data.DISPLAY[cryptocurrency][currency])
}
quotation()
},[currency, cryptocurrency])
  return (
    <Container>
      <div>
        <Image
        src={image}
        alt='Cryto-image'
        />
      </div>
      <div>
        <Heading>Quote cryptocurrencies instatly</Heading>
        <Form 
        saveCurrency={saveCurrency}
        saveCryptocurrency={saveCryptocurrency}
        
        />
        {loading ? <Spinner /> : (
          <Quotation 
          quotation={quotation}
          
          />

        )}
      </div>
    </Container>
  );
}

export default App;
