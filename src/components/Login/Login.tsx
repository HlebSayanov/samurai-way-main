import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styles from './Login.module.css'
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store-redux";
import {Redirect} from "react-router-dom";

type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}

const Login = (props: PropsTypeLogin) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<LoginType>({
        mode: 'all'
    });

    const onSubmit: SubmitHandler<LoginType> = (data) => {
        props.loginTC(data.email, data.password, data.rememberMe)
        reset()
    }

    if (props.isAuth) {
     return  <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className={errors.email && styles.inputError} placeholder={'email'} {...register("email", {
                        required: 'this is required',
                        minLength: {
                            value: 4,
                            message: 'minimum of 4 characters'
                        }
                    })} />
                    {errors.email && <div style={{color: 'red', fontSize: '14px'}}>{errors.email.message}</div>}
                </div>
                <div>
                    <input className={errors.password && styles.inputError} placeholder={'password'}
                           type={"password"} {...register("password", {
                        required: 'this is required',
                        minLength: {
                            value: 8,
                            message: 'minimum of 8 characters'
                        }
                    })} />

                    <div style={{color: 'red', fontSize: '14px'}}>
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

type mapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
type mapStateToPropsType = {
    isAuth: boolean
}
export type PropsTypeLogin = mapDispatchToPropsType & mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
   return {
       isAuth:state.auth.isAuth
   }

}


export default connect(mapStateToProps, {loginTC})(Login)
