import { BaseStage } from "./features/stages/BaseStage";
import { BaseCanvas } from "./features/canvas/BaseCanvas";

function App() {
  return (
    <BaseCanvas>
      <BaseStage />
    </BaseCanvas>
  );
}

export default App;
