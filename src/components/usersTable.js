
import {Table, Container, Button, Loader,Dimmer} from 'semantic-ui-react'
import TableRow from "./tableRow";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react'
import {showForm} from "../Redux/actions";
import {fetchFilteredUsersForCurrentPage, fetchUsersForCurrentPage} from "../Redux/reducers/users";
import FilterRow from "./filterRow";


 function UsersTable () {

    const currentPage = useSelector(state=>state.users.currentPage);
    const filterMode = useSelector(state=>state.filters.isFilterMode);
     const filterValues = useSelector(state=>state.filters.filterValues);
     const isLoading = useSelector(state=>state.users.isLoading)

    const dispatch = useDispatch();

    useEffect(()=>{
        if (filterValues&&filterMode){
            const{filterBy,filterValue} = filterValues
           return  dispatch(fetchFilteredUsersForCurrentPage(currentPage,filterBy,filterValue))
        }
        return dispatch(fetchUsersForCurrentPage(currentPage))
    },[currentPage,filterValues,filterMode]);

    return (
       <Container>
           <Dimmer active={isLoading}>
               <Loader />
           </Dimmer>
           <Table singleLine>
               <Table.Header>
                   <Table.Row>
                       <Table.HeaderCell textAlign='center'>Name</Table.HeaderCell>
                       <Table.HeaderCell textAlign='center'>Surname</Table.HeaderCell>
                       <Table.HeaderCell textAlign='center'>Date of birthday</Table.HeaderCell>
                       <Table.HeaderCell textAlign='center'>Phone</Table.HeaderCell>
                       <Table.HeaderCell textAlign='center'>Email</Table.HeaderCell>
                       <Table.HeaderCell textAlign='center'>
                           <Button primary
                                   onClick={()=>dispatch(showForm())}
                                   disabled={filterMode}>
                                    Add User
                           </Button>
                       </Table.HeaderCell>
                   </Table.Row>
                   <FilterRow/>
               </Table.Header>
               <Table.Body>
                    <TableRow/>
               </Table.Body>
           </Table>
       </Container>
    )

}
export default UsersTable