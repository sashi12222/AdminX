// import { Refresh } from "@mui/icons-material";
import { Datagrid,List,ReferenceField,TextField,FunctionField, EditButton,TextInput, ReferenceInput } from "react-admin";

// const PostPanel=()=>{
//     const record=useRecordContext();
//     return <div> {record?.body }</div>
// }

const PostList=()=>{
    const postFilter=[
     <TextInput key="search" source="q" label="Search" alwaysOn/>,
     <ReferenceInput key="userId" source="userId" reference="users" label="User" allowEmpty/>
    ];
  return (
    <List filters={postFilter}>
        <Datagrid
        // expand={<PostPanel/>}
        >
            <TextField source="id"/>
            <TextField source="title" label='Post Title'/>
           <FunctionField label="Excerpt" render={(record)=>`${record.body.substring(0,40)}...`}/>
            <ReferenceField source="userId" reference="users"/>
            <EditButton/>
        </Datagrid>
    </List>
  )
}
    

export default PostList;