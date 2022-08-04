import React, { useState, useEffect } from 'react'
import './homePage.css'
import bg from '../images/bg.png'
import Ellipse from '../images/Ellipse.png'

const HomePage = () => {

    const [clientId, setClientId] = useState('');
    // eslint-disable-next-line
    const [value, setValue] = useState({ min: 2, max: 10 });
    const generateId = () => Math.random().toString(36).substring(2, 18);



        // const el = document.createElement('code');


    useEffect(() => {
        // eslint-disable-next-line
        const clientId = async () => {
            return localStorage.setItem("clientId", generateId())
            }
      }, [clientId]);


      useEffect(() => {
        const clientId = () => {
            return localStorage.getItem("clientId")
            }

        if (clientId) {
            setClientId(clientId);
        }
      }, []);
    return (
        <div className = 'container' style={{ backgroundImage: `url(${bg})`}}>
            <div className='cardContainer'>
                         <div  className='logo'>
                            <h4>Logo</h4>
                            <code>ID:{clientId}</code>
                            <h4>Wallet</h4>
                        </div>
                    <div className='downloadMinner'>
                        <p className='title-1'> Increase your mining speed by 2000%</p>
                        <p className='title-2'>Download the desktop based miner</p>
                    </div>
                    <div className='mining-speed'>
                    <div className='left'>
                            <h5>Mining speed</h5>
                            <input className='range-input' id="typeinp" type="range" min="0" max="5" defaultValue="3" step="1"/>
                            <button className='btn' type="submit">Start</button>
                    </div>
                    <div className='right'>
                            <h5>Hashes/s</h5>
                            <span className='hashes'>0</span>
                            <p className='total'>total coins</p>
                            <p className='btc'>0.000257 btc / day</p>
                    </div>
                </div>
                <div className='balance'>
                    <p className='your-balance'>Your Balance</p>
                    <div className='btc-figure'>
                        <img src={Ellipse} alt="Ellipse" />
                        <p className='btc-number'>0.00003455676 BTC</p>
                    </div>

                </div>
                <div className='mining-section'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    )
    }

export default HomePage



