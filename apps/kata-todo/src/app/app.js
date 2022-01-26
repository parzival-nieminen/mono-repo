import {Fragment} from "react";
import {KataButton} from "@mono-repo/ui";

export function App() {

  const func = (event, args) => {
    console.log(event)
    console.log(args)
  }

  return <Fragment>
    <p className={style.Foo}>Kata Todo</p>
    <KataButton text="Cancel" onClick={func}>
      <div>Invalid info</div>
    </KataButton>
  </Fragment>;
}

export default App;
