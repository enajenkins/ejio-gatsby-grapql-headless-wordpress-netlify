import React from 'react';
import headerStyles from './header.module.css'

//functional component
//you can pass in props to change component dynamically base on what is later provided
//style modules can be pulled in with dot notation
export default (props) => (
  <div>
    <h1 className={headerStyles.example}>{props.title}</h1>
  </div>
)