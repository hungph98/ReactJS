import React from 'react';
import { Row, Col, Menu, Dropdown, Button} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import MovieContext from '../context/index';
import {helpers} from '../helpers/common';


const MenuLanguage = (props) =>{
    return(
        <Menu onClick={(e)=>props.change(e.key)}>
            <Menu.Item key="en-US">
                English
            </Menu.Item>
            <Menu.Item key="vi">
                Vietnamese
            </Menu.Item>
        </Menu>
    )
}
const SwitchLanguage = (props) =>{
    const infoUser = React.useContext(MovieContext);
    console.log(infoUser);
    return(
        <Row style={{margin: '30px 0px' }}>
            <Col span={4}>
                <Dropdown overlay={<MenuLanguage change={props.change}/>}>
                    <Button>
                        Choose language <DownOutlined/>
                    </Button>
                </Dropdown>
            </Col>
            <Col span={20}>
                {!helpers.isEmptyObject(infoUser) }
            </Col>
        </Row>
    )
}

export default SwitchLanguage;