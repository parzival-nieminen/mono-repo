import style from './kata-button.module.scss';
import React, {Fragment, useEffect, useState} from "react";

const func = (events, args) => [events, args]

export const KataButton = ({disabled = false, text = "no label", onClick = func(), ...props}) => {
  const [comText, setComText] = useState(text);
  const [comDisabled, setComDisabled] = useState(disabled);

  useEffect(() => {
    setComText(text)
    setComDisabled(disabled)
  }, [comDisabled, comText])

  const comOnClick = (event) => {
    onClick(event, `Button '${text}' is called`)
  }

  return <Fragment>
    <div role="button" className={comDisabled ? style.Disabled : style.KataButton}
         onClick={comOnClick}>{comText}</div>
    <p>{props.children}</p>
  </Fragment>
}
export default KataButton;
