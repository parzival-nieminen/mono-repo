import {Fragment} from "react";
import {KataButton} from "@mono-repo/ui";

export function App() {
  return <Fragment>
    <p>Kata Todo</p>
    <KataButton text="Cancel">
      <div>Invalid info</div>
    </KataButton>
  </Fragment>;
}

export default App;
