import Card from "./components/Card/Card";
import styles from "./App.module.scss";
import InputCheckbox from "./components/InputCheckbox/InputCheckbox";
import InputSlider from "./components/InputSlider/InputSlider";
import Button from "./components/Button";
import { useState } from "react";
import { numbers, smallChars, upperChars, characters } from "./password-validations/data";
function App() {
   
  const [password, setPassword] = useState('Agf4%2#3');
  const [passwordValidator, setPasswordValidator] = useState({
    includeChars: false, 
    includeNums: false,
    includeUpperChars: false,
    includeLowerChars: false,
  })
  const [passwordLength, setPasswordLength] = useState(8);
  
  const handleLengthChange = () => {
    console.log('### length changes');
  }

  return (
    <Card>
      <h2>Password Generator</h2>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <span style={{ width: "", marginRight: '20px' }}>
          {password}
        </span>
        <Button>Copy Password</Button>
      </div>
      <InputSlider label="Password Length" onChange={handleLengthChange} />
      <div className={styles.checkboxesContainer}>
        <InputCheckbox checked={false} label="Include Numbers" />
        <InputCheckbox checked={false} label="Include UpperCase Letters" />
        <InputCheckbox checked={false} label="Include Symbols" />
        <InputCheckbox checked={false} label="Include LowerCase Letters" />
      </div>
      <div className={styles.btnContainer}>
        <Button>Generate Password</Button>
      </div>
    </Card>
  );
}

export default App;
