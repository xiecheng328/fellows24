import React, { Component } from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';

export default class Middle extends Component {
  render() {
    return (
      <div>
        <WhiteSpace size="lg" />
        <div className="middle-bar">
          <Flex>
            <Flex.Item>
              <h3 style={{color:"rgb(68, 145, 48)"}}>我们约会吧</h3>
              <p>恋人家人好朋友</p>
              <img src={require(`./../../assets/img/activity1.png`)} alt=""/>
            </Flex.Item>
            <Flex.Item>
            <h3 style={{color:"rgb(204, 38, 7)"}}>低价超值</h3>
              <p>十元惠生活</p>
              <img src={require(`./../../assets/img/activity2.jpg`)} alt=""/>
            </Flex.Item>
            <Flex.Item>
            <h3 style={{color:"rgb(216, 49, 145)"}}>工作简餐</h3>
              <p>实惠方便选择多</p>
              <img src={require(`./../../assets/img/activity3.png`)} alt=""/>
            </Flex.Item>
          </Flex>
        </div>
        <WhiteSpace size="lg" />
      </div>
    )
  }
}
