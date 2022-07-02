import './App.css';
import React, { useState } from 'react';

function App() {

  const [velat, setVelat] = useState([]);
  const [saatavat, setSaatavat] = useState([]);
  const [saatava, setSaatava] = useState("")
  const [rahaa, setRahaa] = useState("");
  const [kenelle, setKenelle] = useState("");
  const [summa, setSumma] = useState("");
  const [yhteensa, setYhteensa] = useState(0);
  const [yhteensasaatava, setYhteensasaatava] = useState(0);
  let sum = yhteensa;
  let sum2 = yhteensasaatava;
  const lisaaVelkaa = () => {
      let velka = { 'nimi': kenelle, 'maara': summa }
      setVelat([...velat, velka])
      sum += parseInt(summa);
      setYhteensa(sum)  
  }
  const lisaaSaatava = () => {
      let satava = { 'nimi': saatava, 'maara': rahaa }
      setSaatavat([...saatavat, satava])
      sum2 += parseInt(rahaa);
      setYhteensasaatava(sum2)
  }


  return (
    <div className="App">
      <header>
        <h1>
          Vippikirjanpito
        </h1>
      </header>
      <main>
        <div className='velat'>
          <table>
            <tr>
              <th className='otsikko'
              colSpan={3}>
                Velat
              </th>
            </tr>
            <tr className='yläpalkki'>
              <th>
                Nimi
              </th>
              <th>
                Summa
              </th>
              <th>
                Yhteensä: {yhteensa}€
              </th>
            </tr>
            {velat.map((henkilo, i) => {
              return (<tr key={i}>
                <td>
                  {henkilo.nimi}
                </td>
                <td>
                  {henkilo.maara}€
                </td>
                <td className='nappi'>
                  <button
                    onClick={() => {
                      let poistettu = [...velat];
                      setYhteensa(yhteensa - henkilo.maara)
                      poistettu.splice(i, 1)
                      setVelat([...poistettu])
                    }}>
                    Poista!
                  </button>
                </td>
              </tr>)
            })}
            <tr className='syotteet'>
              <td>
                <input
                  type='text'
                  placeholder='Nimi'
                  value={kenelle}
                  onChange={(e) => setKenelle(e.target.value)}
                />
              </td>
              <td>
                <input
                  type='text'
                  placeholder='Summa'
                  value={summa}
                  onChange={(e) => setSumma(e.target.value)}
                />
              </td>
              <td className='nappi'> 
                <button
                  onClick={() => {
                    if(summa == "" || kenelle == "") {  
                     }else{lisaaVelkaa()}
                    setKenelle("");
                    setSumma("");
                    }}>
                  Lisää
                </button>
              </td>
            </tr>
            <tr>
              <th colSpan={3}
              className='velkasi'>
                Velat ovat yhteensä {yhteensa}€.
              </th>
            </tr>
          </table>
        </div>
        <div className='saatava'>
          <table>
            <tr>
              <th className='otsikko'
              colSpan={3}>
                Saatavat
              </th>
            </tr>
            <tr className='yläpalkki'>
              <th>
                Nimi
              </th>
              <th>
                Summa
              </th>
              <th>
                Yhteensä: {yhteensasaatava}€
              </th>
            </tr>
            {saatavat.map((henkilo, i) => {
              return (<tr key={i}>
                <td>
                  {henkilo.nimi}
                </td>
                <td>
                  {henkilo.maara}€
                </td>
                <td className='nappi'>
                  <button
                    onClick={() => {
                      let poistettu = [...saatavat];
                      setYhteensasaatava(yhteensasaatava - henkilo.maara)
                      poistettu.splice(i, 1)
                      setSaatavat([...poistettu])
                    }}>
                    Poista!
                  </button>
                </td>
              </tr>)
            })}
            <tr className='syotteet'>
              <td>
                <input
                  type='text'
                  placeholder='Nimi'
                  value={saatava}
                  onChange={(e) => setSaatava(e.target.value)}
                />
              </td>
              <td>
                <input
                  type='text'
                  placeholder='Summa'
                  value={rahaa}
                  onChange={(e) => setRahaa(e.target.value)}
                />
              </td>
              <td className='nappi'> 
                <button
                  type='submit'
                  onClick={() => {
                    if(rahaa == "" || saatava == "") {  
                     }else{lisaaSaatava()}
                    setSaatava("");
                    setRahaa("");
                    }}>
                  Lisää
                </button>
              </td>
            </tr>
            <tr>
              <th colSpan={3}
              className='velkasi'>
                Saatavat ovat yhteensä {yhteensasaatava}€.
              </th>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
