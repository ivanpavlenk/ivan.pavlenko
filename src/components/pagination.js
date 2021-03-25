import {Container,Menu,Icon} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage, setNextPage, setPrevPage} from "../Redux/actions";


function Pagination () {
    const totalUsersCount = useSelector(state=>state.users.totalUsersCount);
    const pageSize = useSelector(state=>state.users.pageSize);
    const currentPage = useSelector(state=> state.users.currentPage);
    const dispatch = useDispatch();
    let pageCount = Math.ceil(totalUsersCount/pageSize);
    let pages = [];
    for (let i = 1;i<=pageCount;i++){
        pages.push(i)
    }

    return (
        <Container>
            <Menu floated='right' pagination>
                <Menu.Item as='a' icon onClick={()=>dispatch(setPrevPage())}>
                    <Icon name='chevron left' />
                </Menu.Item>
                {pages.map(pageNumber=> {
                    return (
                        <Menu.Item
                            className={currentPage===pageNumber&&"active-page"}
                            onClick={()=>dispatch(setCurrentPage(pageNumber))}
                            as='a'>
                            {pageNumber}
                        </Menu.Item>
                    )
                })}
                <Menu.Item as='a' icon onClick={()=>dispatch(setNextPage(pages.length))}>
                    <Icon name='chevron right' />
                </Menu.Item>
            </Menu>
        </Container>
    )
}

export default Pagination