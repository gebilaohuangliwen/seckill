/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import {Form,Button,Radio,Input,List,Card,DatePicker,Select,Table} from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class Filter extends React.Component{
    constructor(props){
        super(...props);
        this.state={

        }
    }
    componentWillMount(){

    }
    onChange(e){
        console.log(e)
    }
    render(){
        const {onCreate} = this.props
        return(
            <div style={{marginBottom:20}}>
              <div className="activename" style={{display:'flex',alignItems:'center'}}>
                  <span style={{display:'inlineBlock',width:128,textAlign:'right'}}>
                    <span style={{color:'red'}}>* </span>活动名称 :
                  </span>
                  <span style={{display:'inlineBlock',marginLeft:10,width:373}}><Input /></span>
              </div>
              <div className="activetime" style={{display:'flex',alignItems:'center',marginTop:15}}>
                  <span style={{display:'inlineBlock',width:128,textAlign:'right'}}>
                    <span style={{color:'red'}}>* </span>活动时间 :
                  </span>
                  <span style={{display:'inlineBlock',marginLeft:10}}><Input placeholder="2018-06-28 10:10:10"/></span>
                  <span style={{display:'inlineBlock',margin:'0 10px'}}>至</span>
                  <span><Input placeholder="2018-06-28 10:10:10"/></span>
              </div>
              <div className="activecancel" style={{display:'flex',alignItems:'center',marginTop:15}}>
                  <span style={{display:'inlineBlock',width:128,textAlign:'right'}}>
                    <span style={{color:'red'}}>* </span>订单自动取消时间 :
                  </span>
                  <span style={{display:'inlineBlock',marginLeft:10,marginRight:10,width:373}}><Input /></span>
                  <span>分</span>
              </div>
              <div className="activecancel" style={{display:'flex',alignItems:'top',marginTop:15,width:673}}>
                  <span style={{display:'inlineBlock',width:128,textAlign:'right'}}>
                    <span style={{color:'red'}}>* </span>活动规则 :
                  </span>
                  <span style={{flex:1,display:'inlineBlock',marginLeft:10}}><Input.TextArea rows={6} /></span>
              </div>
              <div className="activecancel" style={{display:'flex',alignItems:'center',marginTop:15}}>
                  <span style={{display:'inlineBlock',width:128,textAlign:'right'}}>
                    <span style={{color:'red'}}>* </span>活动商品 :
                  </span>
                  <span style={{display:'inlineBlock',marginLeft:10,marginRight:10}}><Button type="primary">添加商品</Button></span>
              </div>
            </div>
        )
    } 
}

Filter.propTypes = {
    
}

export default Form.create()(Filter)