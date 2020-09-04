import React from 'react'
import styles from './styles.module.css'
import ShoppingCartIcon from "shopping-cart.svg"
 
export default class EButtonCartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    this.setState({
      count: this.props.count
    })
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.count !== this.state.count) {
      this.setState({
        count: nextProps.count
      })
    }
  }
  orderAction = () => {
    if(this.props.orderAction) this.props.orderAction()
  }
  render() {
  let {customButtonStyle, customButtonCountStyle, title} = this.props
  let {count}  = this.state 
  return  (
    <button style = {customButtonStyle} className={styles.btnShoppingCart}  onClick = {() => this.orderAction()}>
      <img className={styles.shoppingIcon}   src={ShoppingCartIcon}></img>{title || "Giỏ hàng"} 
      <div  style = {customButtonCountStyle}  className={styles.count}>{count || 0}</div>
    </button>
  )
}
}