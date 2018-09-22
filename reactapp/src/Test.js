import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

export default class Test extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {

    fetch('http://www.xiechenxi.cn/',{
      method:"GET"
    }).then((res)=>{
      return res.json();
    }).then((res)=>{
      console.log(res);
    })



    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
