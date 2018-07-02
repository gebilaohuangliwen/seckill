import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import EditTable from '../create/EditTable'
import Filter from './Filter'


const Detail = ({dispatch})=>{
	const editTableProps = {}
	return(
		<div className="contentInner___XHJi0">
			<Filter />
			<EditTable {...editTableProps}/>
		</div>
	)
}

export default connect()(Detail);