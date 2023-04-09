import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styles from './Login.module.css'

type LoginType = {
    login: string
    password: string
    rememberMe: boolean
}

const Login = () => {
    const {register, handleSubmit, reset, formState: {errors,isValid}} = useForm<LoginType>({
        mode:'all'
    });

    const onSubmit: SubmitHandler<LoginType> = (data) => {
        console.log(data);
        reset()

    }


    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className={errors.login && styles.inputError} placeholder={'login'} {...register("login", {
                        required:'this is required',
                        minLength:{
                            value:4,
                            message:'minimum of 4 characters'
                        }
                    })} />
                        {errors.login && <div style={{color:'red', fontSize:'14px'}}>{errors.login.message}</div>}
                </div>
                <div>
                    <input className={errors.password && styles.inputError} placeholder={'password'} type={"password"} {...register("password", {
                        required: 'this is required',
                        minLength:{
                            value:8,
                            message:'minimum of 8 characters'
                        }})} />

                    <div style={{color:'red', fontSize:'14px'}} >
                        {errors.password && <span>{errors.password.message}</span>}
                        </div>

                </div>
                <div>
                    <input type={"checkbox"}  {...register("rememberMe",)} />
                    <span>Remember Me</span>
                </div>

                <input disabled={!isValid} type="submit"/>
            </form>
        </div>
    );
};

export default Login;
