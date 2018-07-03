import React from 'react'
import {Modal,Table,Input,Button} from 'antd'

class GoodsModal extends React.Component{
	constructor(props){
		super(...props)
		this.state={
			visible:false
		}
		this.columns=[{
	          title: '商品图片',
	          dataIndex: 'goodsImg',
	          key:'goodsImg',
	          width:100,
	          align:'center'
	        }, {
	          title: '商品名称',
	          dataIndex: 'goodsName',
	          key:'goodsName',
	          align:'center'
	        }, {
	          title: '库存',
	          dataIndex: 'stock',
	          key:'stock',
	          width:100,
	          align:'center'
	        },{
	          title: '现价',
	          dataIndex: 'price',
	          key:'price',
	          align:'center',
	          width:100,
	          sorter:(a, b) => a.price - b.price,
	        },{
	          title: '供应商名称',
	          dataIndex: 'activename',
	          key:'activename',
	          align:'center',
	          width:150,
	          sorter:(a, b) => a.activename.length - b.activename.length,
	        }
        ]

        this.data=[
        	{
        		key:1,
        		goodsImg:'',
        		goodsName:'商品名称--测试测试测试商品商品名称名称',
        		stock:'5200',
        		price:'20',
        		activename:'供应商名称'
        	}
        ]
	}
	showModal(){
		this.setState({visible:true})
	}
	hideModal(){
		this.setState({visible:false})
	}
	onChange(pageNumber){
		console.log(pageNumber)
	}
	render(){
		const rowSelection = {
			onChange(selectedRowKeys, selectedRows){
				console.log(selectedRows)
			}
		}
		return(
			<div>
				<Modal
		          title="添加商品"
		          visible={this.state.visible}
		          onOk={this.hideModal.bind(this)}
		          onCancel={this.hideModal.bind(this)}
		          okText="确认"
		          cancelText="取消"
		          bodyStyle={{padding:10}}
		          width="744px"
		        >
		          	<div style={{display:'flex'}}>
		          		<span style={{width:'100%'}}><Input placeholder="请输入商品关键词或商品ID,若为多个商品，请使用商品编号搜索，中间用“，”隔开"/></span>
		          		<span style={{marginLeft:10}}><Button type="primary">搜索</Button></span>
		          	</div>
		          	<div style={{marginTop:10}}>
		          		<Table 
		          			columns={this.columns} 
			                dataSource={this.data} 
			                bordered
			                rowSelection={rowSelection} 
			                pagination={{
			                  position:'bottom',
			                  size:'large',
			                  total:500,
			                  defaultPageSize:15,
			                  showQuickJumper:true,
			                  onChange:this.onChange,
			                  showTotal:total => `共 ${total} 条`
			                }}
		          		/>
		          	</div>
		        </Modal>
			</div>
		)
	}
}

export default GoodsModal
