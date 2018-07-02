import React from 'react';
import { Table, Input, InputNumber, Popconfirm, Form ,Pagination,Icon} from 'antd';

/*
goodsimgurl:商品封面图
goodsname:商品名称
total:库存
presentprice:现价
classdiscount:类目扣点
activediscountrate:活动调整扣点至
activestock:活动库存
seckillprice:秒杀价
goodssaledot:商品卖点
everyonelimitsale:每人限购
 */
const data = [{
  key: '1',
  number: '2',
  id: '00000',
  activename:'广州运营中心',
  goodsimgurl:'',
  goodsname:'测试测试测试商品商品...',
  total:'200',
  presentprice:'20.00',
  classdiscount:'0.5',
  activediscountrate:'0.2',
  activestock:'20',
  seckillprice:'523.23',
  goodssaledot:'展现自信释放魅力',
  everyonelimitbuy:'3',
  edit: '编辑|移除',
},{
  key: '2',
  number: '3',
  id: '00000',
  activename:'广州运营中心',
  goodsimgurl:'',
  goodsname:'测试测试测试商品商品...',
  total:'200',
  presentprice:'20.00',
  classdiscount:'0.5',
  activediscountrate:'0.2',
  activestock:'20',
  seckillprice:'523.23',
  goodssaledot:'展现自信释放魅力',
  everyonelimitbuy:'3',
  edit: '编辑|移除',
},{
  key: '3',
  number: '4',
  id: '00000',
  activename:'广州运营中心',
  goodsimgurl:'',
  goodsname:'测试测试测试商品商品...',
  total:'200',
  presentprice:'20.00',
  classdiscount:'0.5',
  activediscountrate:'0.2',
  activestock:'20',
  seckillprice:'523.23',
  goodssaledot:'展现自信释放魅力',
  everyonelimitbuy:'3',
  edit: '编辑|移除',
},{
  key: '4',
  number: '5',
  id: '00000',
  activename:'广州运营中心',
  goodsimgurl:'',
  goodsname:'测试测试测试商品商品...',
  total:'200',
  presentprice:'20.00',
  classdiscount:'0.5',
  activediscountrate:'0.2',
  activestock:'20',
  seckillprice:'523.23',
  goodssaledot:'展现自信释放魅力',
  everyonelimitbuy:'3',
  edit: '编辑|移除',
},{
  key: '5',
  number: '6',
  id: '00000',
  activename:'广州运营中心',
  goodsimgurl:'',
  goodsname:'测试测试测试商品商品...',
  total:'200',
  presentprice:'20.00',
  classdiscount:'0.5',
  activediscountrate:'0.2',
  activestock:'20',
  seckillprice:'523.23',
  goodssaledot:'展现自信释放魅力',
  everyonelimitbuy:'3',
  edit: '编辑|移除',
},{
  key: '6',
  number: '7',
  id: '00000',
  activename:'广州运营中心',
  goodsimgurl:'',
  goodsname:'测试测试测试商品商品...',
  total:'200',
  presentprice:'20.00',
  classdiscount:'0.5',
  activediscountrate:'0.2',
  activestock:'20',
  seckillprice:'523.23',
  goodssaledot:'展现自信释放魅力',
  everyonelimitbuy:'3',
  edit: '编辑|移除',
},{
  key: '7',
  number: '8',
  id: '00000',
  activename:'广州运营中心',
  goodsimgurl:'',
  goodsname:'测试测试测试商品商品...',
  total:'200',
  presentprice:'20.00',
  classdiscount:'0.5',
  activediscountrate:'0.2',
  activestock:'20',
  seckillprice:'523.23',
  goodssaledot:'展现自信释放魅力',
  everyonelimitbuy:'3',
  edit: '编辑|移除',
},{
  key: '8',
  number: '9',
  id: '00000',
  activename:'广州运营中心',
  goodsimgurl:'',
  goodsname:'测试测试测试商品商品...',
  total:'200',
  presentprice:'20.00',
  classdiscount:'0.5',
  activediscountrate:'0.2',
  activestock:'20',
  seckillprice:'523.23',
  goodssaledot:'展现自信释放魅力',
  everyonelimitbuy:'3',
  edit: '编辑|移除',
},{
  key: '9',
  number: '10',
  id: '00000',
  activename:'广州运营中心',
  goodsimgurl:'',
  goodsname:'测试测试测试商品商品...',
  total:'200',
  presentprice:'20.00',
  classdiscount:'0.5',
  activediscountrate:'0.2',
  activestock:'20',
  seckillprice:'523.23',
  goodssaledot:'展现自信释放魅力',
  everyonelimitbuy:'3',
  edit: '编辑|移除',
}];
const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <Input.TextArea rows={3} placeholder="<=30字符" />
      //return <InputNumber />;
    }else if(this.props.inputType === 'everyonelimitbuy'){
      return <InputNumber />;
    }
    return <Input />;
  };
  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, editingKey: '' };
    this.columns = [
      {
        title: '排序',
        dataIndex: 'number',
        key:'number',
        width:100,
        align:'center',
        defaultSortOrder: 'descend',
        sorter:(a, b) => a.number - b.number,
        render:(text,record)=>{
          const editables = this.isEditingSort(record);
          const editHover = this.isEditingHover(record);
          return(<div className="editable-cell"> { editables ? <Input
                defaultValue={text}
                onChange={this.handleChange.bind(this)}
                onPressEnter={this.editSort.bind(this,'')}
                suffix={(
                <Icon
                  style={{cursor:"pointer"}}
                  type="check"
                  className="editable-cell-icon-check"
                  onClick={this.editSort.bind(this,'')}
                />)}/>: <div className="editable-cell" onMouseOver={this.editHover.bind(this,record.key)} onMouseLeave={this.editHover.bind(this,'')}>
                {text}
                {editHover ?
                <Icon
                  style={{cursor:"pointer"}}
                  type="edit"
                  className="editable-cell-icon"
                  onClick={this.editSort.bind(this,record.key)}
                /> : ''}
              </div>}
              </div>
          )
        }
      },{
        title: '供应商名称',
        dataIndex: 'activename',
        key:'activename',
        width:150,
        align:'center',
        sorter:(a, b) => a.activename.length - b.activename.length,
      },{
        title: '商品ID',
        dataIndex: 'id',
        key:'id',
        width:88,
        align:'center'
      },{
        title: '商品',
        dataIndex: 'goods',
        key:'goods',
        align:'center',
        render(text,record){
            return(
              <div style={{display:'flex'}}>
                <div style={{width:69,height:69,display:'inlineBlock'}}></div>
                <div style={{display:'inlineblock'}}>
                  <p style={{textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden',height:21,marginBottom:0,textAlign:'left'}}>{record.goodsname}</p>
                  <p style={{height:21,marginBottom:0,textAlign:'left'}}>{'库存:'+record.total}</p>
                  <p style={{height:21,marginBottom:0,textAlign:'left'}}>{'现价:'+record.presentprice}</p>
                </div>
              </div>
            )
            console.log(record)
        }
      },{
        title: '类目扣点',
        dataIndex: 'classdiscount',
        key:'classdiscount',
        width:200,
        align:'center',
      },{
        title: '活动调整扣点至',
        dataIndex: 'activediscountrate',
        key:'activediscountrate',
        width:183,
        align:'center',
        editable:true,
        sorter:(a, b) => a.number - b.number,
      },{
        title: '活动库存',
        dataIndex: 'activestock',
        key:'activestock',
        width:130,
        align:'center',
        editable:true,
        sorter:(a, b) => a.number - b.number,
      },{
        title: '秒杀价',
        dataIndex: 'seckillprice',
        key:'seckillprice',
        width:120,
        align:'center',
        editable:true,
        sorter:(a, b) => a.number - b.number,
      },{
        title: '商品卖点',
        dataIndex: 'goodssaledot',
        key:'goodssaledot',
        width:100,
        align:'center',
        editable:true,
      },{
        title: '每人限购',
        dataIndex: 'everyonelimitbuy',
        key:'everyonelimitbuy',
        width:130,
        align:'center',
        editable:true,
        sorter:(a, b) => a.number - b.number,
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key:'edit',
        align:'center',
        width:120,
        render: (text, record) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <a
                        href="javascript:;"
                        onClick={() => this.save(form, record)}
                        style={{ marginRight: 8 }}
                      >
                        保存
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="Sure to cancel?"
                    onConfirm={() => this.cancel(record.key)}
                  >
                    <a>关闭</a>
                  </Popconfirm>
                </span>
              ) : (
                <div>
                <a onClick={() => this.edit(record.key)} style={{marginRight:'10px'}}>{text.split('|')[0]}</a>
                <a onClick={() => this.remove(record)}>{text.split('|')[1]}</a>
                </div>
              )}
            </div>
          );
        },
      },
    ];
  }
  isEditing = (record) => {
    return record.key === this.state.editingKey;
  }
  
  isEditingSort = (record) =>{
    return record.key === this.state.editSortKey;
  }
  isEditingHover = (record) =>{
     return record.key === this.state.editHoverKey;
  }
  //编辑排序
  editSort(key){
    this.setState({ editSortKey: key });
  }
  editHover(key){
      this.setState({ editHoverKey: key });
  }
  handleChange(e){
    console.log(e.target.value)
  }

  //编辑
  edit(key) {
    this.setState({ editingKey: key });
  }
  //移除
  remove(recode){
    console.log(recode);
  }
  //保存
  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      console.log(row)
      this.setState({editingKey: '' });
    });
  }
  //关闭
  cancel = () => {
    this.setState({ editingKey: '' });
  }
  onChange(pageNumber){
    console.log(pageNumber)
  }
  onChangeSize(pageNumber,pageSize){
    console.log(pageNumber+'---'+pageSize)
  }
  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'goodssaledot' ? 'number' : col.dataIndex === 'everyonelimitbuy' ? 'everyonelimitbuy' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });
    const pagination={
      position:'bottom',
      size:'large',
      total:500,
      showSizeChanger:true,
      onShowSizeChange:this.onChangeSize, 
      showQuickJumper:true,
      onChange:this.onChange,
      showTotal:total => `共 ${total} 条`
    }
    return (
      <div>
        <Table
          pagination={pagination}
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
          />
      </div>
    );
  }
}

export default EditableTable;