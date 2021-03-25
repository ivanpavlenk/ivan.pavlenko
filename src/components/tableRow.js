import {Fragment} from "react";
import {Table,Button} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {fetchDeleteUser} from "../Redux/reducers/users";
import {editUser} from "../Redux/actions";

 function  TableRow (){
     const dispatch = useDispatch();
     const allUsers = useSelector(state=> state.users.users);
     const currentPage = useSelector(state=>state.users.currentPage);
     const filterMode = useSelector(state=>state.filters.isFilterMode);

    return  (
        <Fragment>
            {allUsers.map(user=> {
                return (
                    <Table.Row key={user.id}>
                        <Table.Cell textAlign='center' >{user.name}</Table.Cell>
                        <Table.Cell textAlign='center'>{user.surname}</Table.Cell>
                        <Table.Cell textAlign='center'>{user.birthday}</Table.Cell>
                        <Table.Cell textAlign='center'>{user.phone}</Table.Cell>
                        <Table.Cell textAlign='center'>{user.email}</Table.Cell>
                        <Table.Cell textAlign='center'>
                            <Button
                                style={{background:'firebrick',color:'white'}}
                                disabled={filterMode}
                                onClick={()=>dispatch(fetchDeleteUser(user.id,currentPage))}>Delete user</Button>
                            <Button
                                primary
                                disabled={filterMode}
                                onClick={()=>dispatch(editUser(user.id))}>Update User</Button>
                        </Table.Cell>
                    </Table.Row>
                )
            })}
        </Fragment>
    )
}
export default TableRow


