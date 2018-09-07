import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const LoginButton = (props) => (
  <FlatButton 
    label="Log In" 
    onClick={props.onClick}
    style={{backgroundColor: "blue"}}
   />
);

export default LoginButton;