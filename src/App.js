import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

function App() {
  console.log("Render app");
  return (
    <>
      Counter
      <Counter initalCount={0} />
      Counter hooks
      <CounterHooks initalCount={0} />
    </>
  );
}

export default App;
