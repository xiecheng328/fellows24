import React, { Component } from 'react';
import { Carousel,Flex, WhiteSpace  } from 'antd-mobile';


export default class Slider extends Component {
  state = {
    data: [
      {
        val:"1",
        items:[
          {
            img:'meishi',
            title:"美食"
          },
          {
            img:'dianying',
            title:"电影"
          },
          {
            img:'jiudian',
            title:"酒店"
          },
          {
            img:'yule',
            title:"娱乐"
          },
          {
            img:'waimai',
            title:"外卖"
          },
          {
            img:'ktv',
            title:"ktv"
          },
          {
            img:'zhoubianyou',
            title:"周边游"
          },
          {
            img:'liren',
            title:"丽人"
          },
          {
            img:'xiaochi',
            title:"小吃"
          },
          {
            img:'jipiao',
            title:"机票"
          }
        ]
      },{
        val:"2",
        items:[
          {
            img:'meishi',
            title:"美食"
          },
          {
            img:'dianying',
            title:"电影"
          },
          {
            img:'jiudian',
            title:"酒店"
          },
          {
            img:'yule',
            title:"娱乐"
          },
          {
            img:'waimai',
            title:"外卖"
          },
          {
            img:'ktv',
            title:"ktv"
          },
          {
            img:'zhoubianyou',
            title:"周边游"
          },
          {
            img:'liren',
            title:"丽人"
          }
        ]
      }
    ],
    imgHeight: 210,
  }
  componentDidMount() {
    // simulate img loading
  }
  render() {
    return (
        <Carousel
          className="slider-bar"
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {/* <div
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <WhiteSpace size="lg" />
            <Flex wrap="wrap">
              <div>
                <img src={require(`./../../assets/img/dianying.png`)} alt=""/>
                <p>电影</p>
              </div>
              <div>
                <img src={require(`./../../assets/img/dianying.png`)} alt=""/>
                <p>电影</p>
              </div>
              <div>
                <img src={require(`./../../assets/img/dianying.png`)} alt=""/>
                <p>电影</p>
              </div>
              <div>
                <img src={require(`./../../assets/img/dianying.png`)} alt=""/>
                <p>电影</p>
              </div>
              <div>
                <img src={require(`./../../assets/img/dianying.png`)} alt=""/>
                <p>电影</p>
              </div>
              <div>
                <img src={require(`./../../assets/img/dianying.png`)} alt=""/>
                <p>电影</p>
              </div>
            </Flex>
          </div> */}
          {/* <div
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            2
          </div> */}
          {this.state.data.map(val => (
            <div
              key={val.val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
            <WhiteSpace size="lg" />
            <Flex wrap="wrap">
            {val.items.map((item,index)=>(
              <div key={index} className="slider-item">
                <img src={require(`./../../assets/img/${item.img}.png`)} alt=""/>
                <p>{item.title}</p>
              </div>
            ))}
            </Flex>
          </div>
          ))}
        </Carousel>
    );
  }
}

