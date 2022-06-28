import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from 'use-local-storage'

export function HomePage(props) {
  //PROPS
  const {themeCallback}=props;
  //STATE
  const [userConfig, setUserConfig] = React.useState({
    language:'es',
    size:'4'
  })
  const [userConfigLS, setUserConfigLS] = useLocalStorage('userConfig', userConfig);
//USE-EFECT
  React.useEffect(()=>{
    setUserConfigLS(userConfig);
  },[userConfig])
//EVENT FUNCTIONS
  const userSelectLanguage = (evt) => {
    console.log(evt.target.value)
    setUserConfig((prevValue)=>{
      return{
        ...prevValue,
        language:evt.target.value
      }
    })
  }
  const userSelectSize = (evt) => {
    console.log(evt.target.value)
    setUserConfig((prevValue)=>{
      return{
        ...prevValue,
        size:evt.target.value
      }
    })
  }

  return (
    <div className="page-container home-page-container">
      <h1 className="">Wordle</h1>
      <input className="input-name" type="text" placeholder="Enter your name"/>
      <select id='language' onChange={userSelectLanguage} value={userConfig.language}>
        <option value='es'>Español</option>
        <option value='en'>English</option>
      </select>
      <select id='size' onChange={userSelectSize} value={userConfig.size}>
        <option value='4' >4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>

      </select>
      <Link className="button button-primary" to="/game">Play</Link>
      <button onClick={themeCallback}>Change theme</button>
    </div>
  );
}