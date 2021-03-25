import {Button, Input, Table} from "semantic-ui-react";
import {useState} from 'react'
import {filterOff, filterOn, setFilterValue} from "../Redux/actions";
import {useDispatch, useSelector} from "react-redux";


function FilterRow() {
    const filterMode = useSelector(state=>state.filters.isFilterMode);
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [birthday,setBirthday] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');

    const setFilterVal = (e)=> {
        if (e.key === 'Enter') {
            dispatch(setFilterValue(e.target.name,e.target.value))
        }
    }
    const clearFilterValue =()=> {
        setName('');
        setSurname('');
        setBirthday('');
        setPhone('');
        setEmail('');
    }
    const disableFilter = () => {
        clearFilterValue();
        dispatch(filterOff())
    }
    return (
        <Table.Row>
            <Table.HeaderCell>
                <Input
                    name='name'
                    style={{maxWidth:'150px'}}
                    placeholder='filter by name'
                    value={name}
                    onKeyPress={(e)=>setFilterVal(e)}
                    onChange={(e)=> setName(e.target.value)}
                    disabled={!filterMode}
                />
            </Table.HeaderCell>
            <Table.HeaderCell>
                <Input
                    name='surname'
                    style={{maxWidth:'150px'}}
                    placeholder='filter by surname'
                    onKeyPress={(e)=>setFilterVal(e)}
                    disabled={!filterMode}
                    value={surname}
                    onChange={(e)=> setSurname(e.target.value)}

                />
            </Table.HeaderCell>
            <Table.HeaderCell>
                <Input
                    name='birthday'
                    style={{maxWidth:'150px'}}
                    placeholder='filter by birthday'
                    onKeyPress={(e)=>setFilterVal(e)}
                    disabled={!filterMode}
                    value={birthday}
                    onChange={(e)=> setBirthday(e.target.value)}
                />
            </Table.HeaderCell>
            <Table.HeaderCell>
                <Input
                    name='phone'
                    style={{maxWidth:'150px'}}
                    placeholder='filter by phone'
                    onKeyPress={(e)=>setFilterVal(e)}
                    disabled={!filterMode}
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                />
            </Table.HeaderCell>
            <Table.HeaderCell>
                <Input
                    name='email'
                    style={{maxWidth:'150px'}}
                    placeholder='filter by email'
                    onKeyPress={(e)=>setFilterVal(e)}
                    disabled={!filterMode}
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>
                <Button
                    primary
                    onClick={filterMode?()=>disableFilter():()=>dispatch(filterOn())}>
                    { filterMode? 'Filter OFF': 'Filter ON'}
                </Button>
            </Table.HeaderCell>
        </Table.Row>
    )
}
export default FilterRow


