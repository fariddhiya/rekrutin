import React, { Component } from 'react';
import { Alert } from 'antd';

interface IAlertMessageProps {
  description: string;
}

class AlertMessage extends Component<IAlertMessageProps> {
  render() {
    const { description } = this.props;
    return (
      <Alert message='Error' description={description} type='error' showIcon />
    );
  }
}

export { AlertMessage };
