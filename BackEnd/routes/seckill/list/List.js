import React from 'react';
import {Table} from 'antd';

class List extends React.Component{
    constructor(props){
        super(...props);
        this.state={

        }
        const {del,check,operator} = props;
        this.del = del
        this.check = check
        this.operator = operator
        this.columns=[{
          title: '序号',
          dataIndex: 'number',
          key:'number',
          width:70,
          align:'center'
        }, {
          title: '活动ID',
          dataIndex: 'id',
          key:'id',
          width:88,
          align:'center'
        }, {
          title: '活动名称',
          dataIndex: 'activename',
          key:'activename',
          width:150,
          align:'center'
        },{
          title: '活动开始时间',
          dataIndex: 'starttime',
          key:'starttime',
          align:'center'
        },{
          title: '活动结束时间',
          dataIndex: 'endtime',
          key:'endtime',
          align:'center'
        },{
          title: '商品数',
          dataIndex: 'shopnum',
          key:'shopnum',
          width:80,
          align:'center'
        },{
          title: '状态',
          dataIndex: 'status',
          key:'status',
          width:80,
          align:'center',
          render(value,record){
            if(record.status === '1'){
              return '待开始';
            }else if(record.status === '2'){
              return '进行中';
            }else if(record.status === '3'){
              return '已暂停';
            }else if(record.status === '4'){
              return '已关闭';
            }else if(record.status === '5'){
              return '已结束';
            }
          }
        },{
          title: '操作员',
          dataIndex: 'operator',
          key:'operator',
          width:80,
          align:'center'
        },{
          title: '操作',
          dataIndex: 'edit',
          key:'edit',
          align:'center',
          width:200,
          render:(value,record)=>{
            let html=[];
            let operator=[
              {
                status:'5',
                html:<a href="javascript:" onClick={this.check.bind(this,record)} key='a1' style={{marginRight:8}}>查看</a>
              },
              {
                status:'3',
                html:<a href="javascript:" onClick={this.operator.bind(this,record)} key='a3' style={{marginRight:8}}>关闭</a>
              },
              {
                status:'1',
                html:<a href="javascript:" onClick={this.operator.bind(this,record)} key='a2' style={{marginRight:8}}>开启</a>
              },
              {
                status:'2',
                html:<a href="javascript:" onClick={this.operator.bind(this,record)} key='a4' style={{marginRight:8}}>暂停</a>
              },
              {
                status:'4',
                html:<a href="javascript:" onClick={this.del.bind(this,record)} key='a5' style={{marginRight:8}}>删除</a>
              },
              
            ];
            operator.map((item)=>{
                if(record.status === '1'){
                    if(item.status !=='1' && item.status !== '2'){
                        html.push(item.html)
                    }
                }else if(record.status === '2'){
                    if(item.status !=='1' && item.status !== '4'){
                        html.push(item.html)
                    }
                }else if(record.status === '3'){
                    if(item.status !== '2' && item.status !== '4'){
                        html.push(item.html)
                    }
                }else if(record.status === '4' || record.status === '5'){
                    if(item.status !=='1' && item.status !== '2' && item.status !== '3'){
                        html.push(item.html)
                    }
                }
                
            })
            return <div>{html}</div>;
          }
        }];
        this.data=[{
          key: '1',
          number: '1',
          id: '00000',
          activename: '单品秒杀',
          starttime: '2018-06-12 00:00:00',
          endtime: '2018-06-18 24:59:59',
          shopnum: '20',
          status: '1',
          operator: 'cici',
        },{
          key: '2',
          number: '1',
          id: '00000',
          activename: '单品秒杀',
          starttime: '2018-06-12 00:00:00',
          endtime: '2018-06-18 24:59:59',
          shopnum: '20',
          status: '2',
          operator: 'cici',
        },{
          key: '3',
          number: '1',
          id: '00000',
          activename: '单品秒杀',
          starttime: '2018-06-12 00:00:00',
          endtime: '2018-06-18 24:59:59',
          shopnum: '20',
          status: '1',
          operator: 'cici',
        },{
          key: '4',
          number: '1',
          id: '00000',
          activename: '单品秒杀',
          starttime: '2018-06-12 00:00:00',
          endtime: '2018-06-18 24:59:59',
          shopnum: '20',
          status: '3',
          operator: 'cici',
        },{
          key: '5',
          number: '1',
          id: '00000',
          activename: '单品秒杀',
          starttime: '2018-06-12 00:00:00',
          endtime: '2018-06-18 24:59:59',
          shopnum: '20',
          status: '4',
          operator: 'cici',
        },{
          key: '6',
          number: '1',
          id: '00000',
          activename: '单品秒杀',
          starttime: '2018-06-12 00:00:00',
          endtime: '2018-06-18 24:59:59',
          shopnum: '20',
          status: '5',
          operator: 'cici',
        },{
          key: '7',
          number: '1',
          id: '00000',
          activename: '单品秒杀',
          starttime: '2018-06-12 00:00:00',
          endtime: '2018-06-18 24:59:59',
          shopnum: '20',
          status: '1',
          operator: 'cici',
        },{
          key: '8',
          number: '1',
          id: '00000',
          activename: '单品秒杀',
          starttime: '2018-06-12 00:00:00',
          endtime: '2018-06-18 24:59:59',
          shopnum: '20',
          status: '1',
          operator: 'cici',
        },{
          key: '9',
          number: '1',
          id: '00000',
          activename: '单品秒杀',
          starttime: '2018-06-12 00:00:00',
          endtime: '2018-06-18 24:59:59',
          shopnum: '20',
          status: '1',
          operator: 'cici',
        }]
    }
    onChange(current){
        console.log(current)
    }
    render(){
        return(
            <div className="tablelist" style={{marginTop:'15px',minHeight:'340px'}}>
              <Table 
                columns={this.columns} 
                dataSource={this.data} 
                bordered 
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
      )
    }
}

export default List
