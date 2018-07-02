import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { routerRedux } from 'dva/router'
import queryString from 'query-string'
import List from './List';
import Filter from './Filter';

const Seckill =({dispatch})=>{
  //开始,暂停,关闭,
  const operator = (record)=>{
    console.log('触发了开始,暂停,关闭,'+record);
  }
  //查看
  const check = (record)=>{
    dispatch(routerRedux.push({
      pathname:'/seckill/detail',
      search: queryString.stringify({//传参
        id:record.id
      }),
    }))
  }
  //删除
  const del = (record)=>{
    console.log('触发了删除'+record);
  }

  const listProps={
    operator,
    check,
    del
  }
  const filterProps={
    //跳转到创建活动页
    onCreate(){
      dispatch(
        routerRedux.push({
          pathname:'/seckill/create',
          /*search: queryString.stringify({//传参
            id:1
          }),*/
        })
      )
    }
  }
  return(
    <div className="contentInner___XHJi0">
        <Filter {...filterProps}/>
        <List {...listProps}/>
    </div>
  )
}

Seckill.propTypes = {
  dispatch: PropTypes.func,
}

export default connect()(Seckill);




