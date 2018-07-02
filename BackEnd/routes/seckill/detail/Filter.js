/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva'
import {Menu,Form,Button,Radio,Input,List,Card,DatePicker,Select,Table,Tabs,Cascader} from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class Filter extends React.Component{
    constructor(props){
        super(...props);
        this.state={

        }
        this.options =[{
            value: 'zhejiang',
            label: '浙江',
            children: [{
              value: 'hangzhou',
              label: '杭州',
            }],
          }, 
        ]
    }
    componentWillMount(){

    }
    onChange(e){
        console.log(e)
    }
    handleReset(e){
      e.preventDefault();
      this.props.form.resetFields();
    }
    handleSearch(e){
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        console.log('Received values of form: ', values);
      });
    }
    excelTable(e){
      e.preventDefault();
      console.log('导出表格')
    }
    render(){
        const {onCreate} = this.props
        return(
                  <Form onSubmit={this.handleSearch.bind(this)}>
                    <div style={{marginBottom:10}}>
                      <Card title="基本信息" bodyStyle={{marginBottom:0,paddingBottom:0}}>
                          <div style={{marginBottom:20}}>
                            <div className="activename" style={{display:'flex',alignItems:'center'}}>
                                <span style={{display:'inlineBlock',width:128,textAlign:'right'}}>
                                  活动ID :
                                </span>
                                <span style={{display:'inlineBlock',marginLeft:10,width:373}}>ceshi</span>
                            </div>
                            <div className="activename" style={{display:'flex',alignItems:'center',marginTop:15}}>
                                <span style={{display:'inlineBlock',width:128,textAlign:'right'}}>
                                  活动名称 :
                                </span>
                                <span style={{display:'inlineBlock',marginLeft:10,width:373}}>618疯狂购</span>
                            </div>
                            <div className="activename" style={{display:'flex',alignItems:'center',marginTop:15}}>
                                <span style={{display:'inlineBlock',width:128,textAlign:'right'}}>
                                  状态 :
                                </span>
                                <span style={{display:'inlineBlock',marginLeft:10,width:373,color:'red'}}>待开始</span>
                            </div>
                            <div className="activename" style={{display:'flex',alignItems:'center',marginTop:15}}>
                                <span style={{display:'inlineBlock',width:128,textAlign:'right'}}>
                                  <span style={{color:'red'}}>* </span>活动商品总数 :
                                </span>
                                <span style={{display:'inlineBlock',marginLeft:10,width:373}}>33</span>
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
                          </div>
                      </Card>
                    </div>
                    <div className="activecancel" style={{marginTop:10,marginBottom:10}}>
                        <span style={{display:'inlineBlock',marginRight:10}}><Button type="primary">添加商品</Button></span>
                        <span style={{display:'inlineBlock',marginRight:10}}><Button>批量添加商品</Button></span>
                    </div>
                    <div style={{marginBottom:0}}>
                    <Card title="活动商品" bodyStyle={{marginBottom:0,paddingBottom:0,borderBottom:0}}>
                      <div className="ant-row" style={{marginLeft:-12,marginRight:-12}}>
                        <List grid={{ gutter:16,column:4, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }}>
                        <List.Item>
                          <div style={{marginLeft:10,marginRight:10}}>
                            {this.props.form.getFieldDecorator('goodsId', {
                              rules: [{
                                required: true,
                                message: 'Input something!',
                              }],
                            })(
                              <Input placeholder="商品ID" />
                            )}
                          </div>
                        </List.Item>
                        <List.Item>
                          <div style={{marginLeft:10,marginRight:10}}>
                            {this.props.form.getFieldDecorator('goodsName', {
                              rules: [{
                                required: true,
                                message: 'Input something!',
                              }],
                            })(
                              <Input placeholder="商品名称" />
                            )}
                          </div>
                        </List.Item>
                        <List.Item>
                          <div style={{marginLeft:10,marginRight:10}}>
                            {this.props.form.getFieldDecorator('goodsType', {
                              rules: [{
                                required: true,
                                message: 'Input something!',
                              }],
                            })(
                              <Select placeholder="商品类型" style={{width:'100%'}}>
                                <Select.Option value="普通商品">普通商品</Select.Option>
                                <Select.Option value="跨境商品">跨境商品</Select.Option>
                                <Select.Option value="农产扶贫">农产扶贫</Select.Option>
                              </Select>
                            )}
                          </div>
                        </List.Item>
                        <List.Item>
                            <div style={{marginLeft:10,marginRight:10}}>
                              {this.props.form.getFieldDecorator('supplierName', {
                                rules: [{
                                  required: true,
                                  message: 'Input something!',
                                }],
                              })(
                                <Input placeholder="供应商名称" />
                              )}
                            </div>
                        </List.Item>
                        <List.Item>
                          <div style={{marginLeft:10,marginRight:10,marginTop:-4}}>
                              {this.props.form.getFieldDecorator('goodsStatus', {
                                rules: [{
                                  required: true,
                                  message: 'Input something!',
                                }],
                              })(
                                <Select placeholder="状态" style={{width:'100%'}}>
                                    <Select.Option value="start">开启</Select.Option>
                                    <Select.Option value="stop">暂停</Select.Option>
                                    <Select.Option value="close">关闭</Select.Option>
                                </Select>
                              )}
                          </div>
                        </List.Item>
                        <List.Item>
                          <div style={{marginLeft:10,marginRight:10,marginTop:-4}}>
                            {this.props.form.getFieldDecorator('goodsClass',{
                              rules: [{
                                required: true,
                                message: 'Input something!',
                              }],
                            })(
                              <Cascader options={this.options} placeholder="商品分类" />
                            )}
                          </div>
                        </List.Item>
                        <List.Item>
                          <div style={{display:'flex',alignItems:'center',marginLeft:10,marginRight:10,marginTop:-4}}>
                            <span style={{flex:1,margin:'0 0px'}}>
                            <Button type="primary" style={{marginRight:'10px'}} htmlType="submit">搜索</Button>
                            <Button style={{marginRight:'10px'}} onClick={this.handleReset.bind(this)}>重置</Button>
                            <Button onClick={this.excelTable.bind(this)}>导出表格</Button>
                          </span>
                          </div>
                        </List.Item>
                      </List>
                      </div>
                    </Card>
                    </div>
                  </Form>
        )
    } 
}

Filter.propTypes = {
    
}

export default Form.create()(Filter)