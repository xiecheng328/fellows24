import React, { Component } from 'react';
import { List } from 'antd-mobile';


const Item = List.Item;
const Brief = Item.Brief;
export default class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList:[]
    }
  }
  componentDidMount(){
    console.log(this.props);
    
    fetch('http://www.xiechenxi.cn/',{
      method:"GET"
    }).then((res)=>{
      return res.json()
    }).then((res)=>{
      console.log(res);
      this.setState({
        dataList:res
      })
    })
  }
  render() {
    return (
      <div className="shop-list">
        <List renderHeader={() => '猜你喜欢'} className="my-list">
          
          {this.state.dataList.map((item,index)=>{
            return(
              <Item
                key={index}
                thumb={item.img}
                multipleLine
                onClick={() => {this.props.history.push('/detail/1')}}
              >
                <span>{item.product_name}</span>
                <Brief>
                  <p>{item.description}</p>
                  <div className="sl-info">
                    <p>
                      <span className="sl-price">{item.price}元</span>
                      门市价：{item.discount_price}元
                    </p>
                    <span>已售：{item.num}</span>
                  </div>
                </Brief>
              </Item>
            )
          })}
        </List>
      </div>
    )
  }
}
