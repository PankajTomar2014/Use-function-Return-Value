
import React, { Component } from 'react';
import Header from '../../CustomHeader/CustomHeader'

import {Api} from './Page1'
export default class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        myemail:''
    };
  }

  componentDidMount(){
        Api().then((resp)=>{          
        this.setState({myemail:resp.email})
 })
  
    
  }

  render() {
    return (
      <div>
          <Header />
          <h1> <u>Page2</u> </h1>
          <h1>Email from page1  : {this.state.myemail} </h1>    
      </div>
    );
  }
}
