import React from 'react'
import styles from './styles.module.css'
import ShoppingCartIcon from "./images/shopping-cart.svg"
 
export default class EButtonCartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  orderAction = () => {
    if(this.props.orderAction) this.props.orderAction()
  }
  render() {
  let {customButtomStyle, title, count} = this.props
  let {} = this.state
  return  (
    <button style = {customButtomStyle} className={styles.btnShoppingCart}  onClick = {() => this.orderAction()}>
      <img className={styles.shoppingIcon}   src={ShoppingCartIcon}></img>{title || "GIỎ HÀNG"} 
      <div  className={styles.count}>{count || 0}</div>
    </button>
  )
}
}