
import React from 'react';
import { Button } from 'antd-mobile';

export default class SButton extends React.Component() {
    render() {
        let { children = '按钮', type = 'primary', size = 'large' } = this.props;
        return (<Button type={type} size={size}>{children}</Button>);
    }
}