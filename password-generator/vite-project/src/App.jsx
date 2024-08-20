import Card from "./components/Card/Card";
import styles from "./App.module.scss";
import InputCheckbox from "./components/InputCheckbox/InputCheckbox";
import InputSlider from "./components/InputSlider/InputSlider";
import Button from "./components/Button";
function App() {
  return (
    <Card>
      <h2>Password Generator</h2>
      <InputSlider label="Password Length" />
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
