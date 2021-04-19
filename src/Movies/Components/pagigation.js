import React from 'react';
import { Row, Col, Pagination } from 'antd';

const PagigationMovie = (props) => {
    let arrTime = [props.fDate, props.tDate];
    return(
        <Row style={{margin: '30px 0px'}}>
            <Col span={24} style={{textAlign: 'center'}}>
                <Pagination 
                    defaultCurrent={props.page} 
                    total={props.total} pageSize={20} 
                    showSizeChanger={false} 
                    onChange={(p) => props.change(null, arrTime, p )}/>
            </Col>
        </Row>
    )
}

export default React.memo(PagigationMovie);