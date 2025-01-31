// import React from 'react'

import {List, Datagrid, TextField } from "react-admin"

const userList = () => {
  return (
    <List>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="email"/>
            <TextField source="phone"/>
        </Datagrid>
    </List>
  )
}

export default userList