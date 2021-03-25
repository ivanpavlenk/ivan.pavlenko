import React from 'react';
import {Button, Form, Icon, Input, Message} from 'semantic-ui-react'
import { useForm, Controller } from "react-hook-form";
import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchAddUser, fetchUpdateUser} from "../Redux/reducers/users";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {closeForm} from "../Redux/actions";


function UserForm() {
    const editMode = useSelector(state=> state.userForm.editMode);
    const editUserId = useSelector(state=> state.userForm.editUserId);
    const allUser = useSelector(state=> state.users.users);
    const currentPage = useSelector(state=> state.users.currentPage);
    const dispatch = useDispatch();

    let schema = yup.object().shape({
        name: yup.string().required().min(2).max(60),
        surname: yup.string().required().min(2).max(60),
        birthday:yup.string().required().min(10),
        phone: yup.number().required(),
        email: yup.string().email().required(),
    });

    const { control,errors,handleSubmit,getValues,setValue,reset } = useForm({
        resolver: yupResolver(schema)
    });

    useEffect(()=> {
        const editUser = allUser.find(user=>user.id === editUserId);
        if(editMode) {
            for(let key in editUser){
                setValue(key,editUser[key])
            }
        }
    },[editMode]);

    const addUser = ()=>{
        const newUser = {
            name:getValues('name'),
            surname:getValues('surname'),
            birthday:getValues('birthday'),
            phone:getValues('phone'),
            email:getValues('email')
        };
            reset({name:'',surname:'',birthday:'',phone:'',email:''});
            dispatch(fetchAddUser(newUser,currentPage))
    };
    const updateUser = ()=>{
        const newUser = {
            name:getValues('name'),
            surname:getValues('surname'),
            birthday:getValues('birthday'),
            phone:getValues('phone'),
            email:getValues('email')
        };
        dispatch(fetchUpdateUser(newUser,editUserId,currentPage))
    };

    return (
        <div className='form-inner'>
            <Form
                style={{width:400,position:'relative',zIndex:1000}}
                onSubmit={!editMode ?
                    handleSubmit(addUser):handleSubmit(updateUser)}>
                <span onClick={()=>dispatch(closeForm())} style={{float:'right'}}>
                        <Icon name='close'/>
                </span>
                <Form.Field>
                    <label>Name</label>
                    <Controller
                        as={Input}
                        error={errors.name}
                        name="name"
                        defaultValue=''
                        control={control}
                        placeholder='enter your name'
                    />
                    {errors.name&&<Message negative>{errors.name.message}</Message>}
                </Form.Field>
                <Form.Field >
                    <label>Surname</label>
                    <Controller
                        as={Input}
                        error={errors.surname}
                        name="surname"
                        control={control}
                        placeholder='enter your surname'
                    />
                    {errors.surname&&<Message negative>{errors.surname.message}</Message>}
                </Form.Field>
                <Form.Field>
                    <label>Date of birthday</label>
                    <Controller
                        as={Input}
                        error={errors.birthday}
                        name="birthday"
                        control={control}
                        placeholder='enter your birthday'
                    />
                    {errors.birthday&&<Message negative>{'Enter your date in formate xx.xx.xxxx'}</Message>}
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <Controller
                        as={Input}
                        error={errors.phone}
                        name="phone"
                        control={control}
                        placeholder='enter your phone'
                    />
                    {errors.phone&&<Message negative>{errors.phone.message}</Message>}
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <Controller
                        as={Input}
                        error={errors.email}
                        name="email"
                        control={control}
                        placeholder='enter your email'
                    />
                    {errors.email&&<Message negative>{errors.email.message}</Message>}
                </Form.Field>
                <Button type='submit' primary>
                    {editMode?'Update':'AddUser'}
                </Button>
            </Form>
        </div>
    )
}

export default UserForm;