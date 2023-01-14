import React from 'react'
import Styles from './Button.module.css'


export default function Button({children}) {
  return (
    <div>
     <button className={Styles.btn_search}>{children}</button> 
    </div>
  )
}
