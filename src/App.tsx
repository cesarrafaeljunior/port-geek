import { InputComponent, PasswordInputComponent } from "./components/Inputs";

function App() {
  return (
    <div className="App">
      <InputComponent labelRefer={"q"} labelText={"b"} />
      <PasswordInputComponent labelRefer={"p"} labelText={"a"} />
    </div>
  );
}

export default App;
