// @flow

import React from 'react'
import { ReactComponent as Play } from './PlayButton.svg'
import styles from './listenbutton.module.css'

type Props = {
  showPlayer: boolean,
  togglePlayer: Function,
  cPlayer: {
    listen: string,
  },
}

function ListenButton({ showPlayer, cPlayer, togglePlayer }: Props) {
  return (
    <div className={styles.container}>
      {!showPlayer && (
        <button type="button" className={`${styles['listen-button']}`} onClick={togglePlayer}>
          <Play />
          <span className={styles['listen-button__text']}>{cPlayer && cPlayer.listen}</span>
        </button>
      )}
    </div>
  )
}

export default ListenButton
