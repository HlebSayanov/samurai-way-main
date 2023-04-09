import {SubmitHandler, useForm} from "react-hook-form";
import React from "react";

type addMessageForm = {
    addMessage: (value: string) => void
}

export const AddMessageForm = (props: addMessageForm) => {


    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<{ message: string }>({
        mode: 'all'
    });

    const onSubmit: SubmitHandler<{ message: string }> = (data) => {
        props.addMessage(data.message)
        reset()

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <textarea placeholder={'enter a message'}
                              {...register("message", {
                                  required: true,
                                  maxLength: {
                                      value: 300,
                                      message: 'maximum of 300 characters'
                                  }
                              })} />

                    {errors.message && <div style={{color: 'red', fontSize: '14px'}}>{errors.message.message}</div>}
                </div>


                <input disabled={!isValid} type="submit"/>
            </form>
        </div>

    )
}
