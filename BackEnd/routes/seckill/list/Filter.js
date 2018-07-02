/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import {Menu,Form,Button,Radio,Input,List,Card,DatePicker,Select,Table,Tabs} from 'antd';

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
            <div>
                    <div className="radio">
                        <Tabs mode="horizontal" defaultActiveKey="1" size="small">
                          <Tabs.TabPane tab="全部（10）" key="1"></Tabs.TabPane>
                          <Tabs.TabPane tab="待开始（10）" key="2"></Tabs.TabPane>
                          <Tabs.TabPane tab="进行中（200）" key="3"></Tabs.TabPane>
                          <Tabs.TabPane tab="已暂停(52)" key="4"></Tabs.TabPane>
                          <Tabs.TabPane tab="已关闭(52)" key="5"></Tabs.TabPane>
                          <Tabs.TabPane tab="已结束(52)" key="6"></Tabs.TabPane>
                        </Tabs>
                    </div>
                    <div className="ant-row" style={{marginLeft:-12,marginRight:-12}}>
                      <List grid={{ gutter:16,column:4, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }}>
                      <List.Item style={{}}>
                        <div style={{marginLeft:10,marginRight:10}}>
                          <Input placeholder="活动ID"/>
                        </div>
                      </List.Item>
                      <List.Item>
                        <div style={{marginLeft:10,marginRight:10}}>
                          <Input placeholder="活动名称"/>
                        </div>
                      </List.Item>
                      <List.Item>
                        <div style={{marginLeft:10,marginRight:10}}>
                          <Select defaultValue="全部" style={{width:'100%'}} onChange={this.onChange.bind(this)}>
                              <Select.Option value="待开始">待开始</Select.Option>
                              <Select.Option value="进行中">进行中</Select.Option>
                              <Select.Option value="已关闭">已关闭</Select.Option>
                              <Select.Option value="已结束">已结束</Select.Option>
                          </Select>
                        </div>
                      </List.Item>
                      <List.Item>
                          <div style={{marginLeft:10,marginRight:10}}>
                          <Select defaultValue="cici" style={{width:'100%'}} onChange={this.onChange.bind(this)}>
                              <Select.Option value="cici">cici</Select.Option>
                          </Select>
                          </div>
                      </List.Item>
                      <List.Item>
                        <div style={{marginLeft:10,marginRight:10,marginTop:-4}}>
                          <DatePicker style={{width:'100%'}} onChange={this.onChange.bind(this)} placeholder="开始日期"/>
                        </div>
                      </List.Item>
                      <List.Item>
                        <div style={{marginLeft:10,marginRight:10,marginTop:-4}}>
                          <DatePicker style={{width:'100%'}} onChange={this.onChange.bind(this)} placeholder="结束日期"/>
                        </div>
                      </List.Item>
                      <List.Item>
                        <div style={{display:'flex',alignItems:'center',marginLeft:10,marginRight:10,marginTop:-4}}>
                          <span style={{flex:1,margin:'0 0px'}}>
                          <Button type="primary" style={{marginRight:'10px'}}>搜索</Button>
                          <Button>重置</Button>
                        </span>
                        </div>
                      </List.Item>
                    </List>
                    </div>
                    <div className="createactive" style={{display:"block",marginTop:'0px'}}>
                      <Button type="primary" onClick={onCreate}>创建活动</Button>
                    </div>
            </div>
        )
    } 
}

Filter.propTypes = {
    
}

export default Form.create()(Filter)