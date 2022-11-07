import Layout from '@components/layout';
import { LoginModel } from '@models/login.model';
import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema, defaultValues } from '@form/login.form';
import TextInput from '@components/inputs/TextInput';
import { useMutation } from '@tanstack/react-query';
import animationData from '@assets/lottie/panda.json';
import Lottie from 'react-lottie';
import { toast } from 'react-hot-toast';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    renderSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const Login: FC = () => {
    const { mutateAsync } = useMutation();

    const { register, handleSubmit, formState } = useForm<LoginModel>({
        resolver: yupResolver(schema),
        defaultValues,
    });

    const onSubmit = async (data: LoginModel) => {

    };

    useEffect(() => {
        toast('I\'m not a designer, so I hope you like the UI', {
            id: 'main-info',
            icon: '🙏',
            duration: 6000,
        });
    }, []);

    return (
        <Layout>
            <div className="h-full flex flex-col gap-x-10 items-center justify-around
            md:flex-row"
            >
                <div className="center-col-xy">
                    <Lottie options={defaultOptions} height={200} />
                    <h1 className="text-4xl font-bold">MoviesWeb</h1>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="-mt-40 w-full mx-auto flex flex-col
                    md:w-2/5
                    lg:mt-0"
                >
                    <TextInput
                        label="Email"
                        errors={formState.errors.email?.message}
                        placeholder="example@email.com"
                        type="text"
                        inputProps={register('email')}
                    />
                    <TextInput
                        label="Password"
                        errors={formState.errors.email?.message}
                        placeholder="**************"
                        type="password"
                        inputProps={register('password')}
                    />
                    <button type="submit" className="btn btn-primary w-1/3 ml-auto">
                        Login
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Login;
