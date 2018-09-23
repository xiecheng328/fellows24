import React, { Component } from 'react';
import {SearchBar, Button,  NavBar, Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom' 

let leftIcon =<Icon type="left" />;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      middle:<SearchBar disabled={true} placeholder="Search" maxLength={8} />,
      leftContent :"哈尔滨"
    }
  }
  
  
  componentDidMount(){
    
    if(this.props.match.url.includes('/detail')){
      this.setState({
        leftContent:<Icon type="left" />,
        middle:"团购详情"
      })
    }else{
      
    }
    
    fetch("http://www.xiechenxi.cn/welcome/detail/"+this.props.match.params.id,{
      method:"GET"
    }).then((res)=>{
      return res.json()
    }).then((res)=>{
      console.log(res);
    })
  }
  render() {
    return (
      <div className="nav-bar">
        <NavBar
          mode="dark"
          leftContent={this.state.leftContent}
          onLeftClick={() => this.props.history.push('/')}
          rightContent={[
            <Icon key="1" type="ellipsis" />,
          ]}
        >
          {this.state.middle}
        </NavBar>
      </div>
    )
  }
}
export default withRouter(Header) 
