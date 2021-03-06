import { Formlogin } from './styles'
import { LoginSchema } from "../../services/validation/YupSchemas";
import { useCallback } from "react";
import { useAuth } from "../../hooks/AuthHook";
import { Input } from "../basic components/input/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorField } from "../basic components/ErrorsMessage/styles";
import Button from "../basic components/button";
import { motion } from 'framer-motion';

function FormLogin({initialData}) {

    const {isAuth, login} = useAuth();
    const { register, handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: initialData,
        resolver: yupResolver(LoginSchema)
    });

    const handleLogin = useCallback((values) => {
        login({
            userName: values.userName,
            password: values.password
        });
    }, [])

    return (
        
            <Formlogin  autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
            <img src="/img/Hourglass.svg"/>
            <h3>YourApp - An app to CRUD</h3>
            <motion.h1 animate={{ color: "#ff9000" }} transition={{ duration: 1 }}>Sign in</motion.h1>
                <Input name='userName' placeholder="Username: " padding="1rem" ref={register} isErrored={errors?.userName}/>
                {errors?.userName &&
                <ErrorField>
                    <div>{errors.userName?.message}</div>
                </ErrorField>
                }
                <Input name='password' type="password" placeholder="Password: " padding="1rem" ref={register} isErrored={errors?.password}/>
               {errors?.password &&
                   <ErrorField>
                    <div>{errors.password?.message}</div>
                </ErrorField>
                }
                <Button backgroundHover="#ff9000" type="submit">Login</Button>
            </Formlogin>

    );
};

export default FormLogin;