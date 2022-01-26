import './kata-button.module.scss';
import {Fragment, useEffect, useState} from "react";

const KataButton = ({disabled = false, text = "no label", ...props}) => {
  const [comText, setComText] = useState(text);
  const [comDisabled, setComDisabled] = useState(disabled);

  useEffect(() => {
    setComText(text)
    setComDisabled(disabled)
  }, [comDisabled, comText])

  return <Fragment>
    <div className={comDisabled ? "KataButton:disabled" : "KataButton"}
         role="button">{comText}</div>
    <p>{props.children}</p>
  </Fragment>
}
export default KataButton;
