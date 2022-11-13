import { Button } from "@mui/material"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';

const Form = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const [submitted, setSubmitted] = useState(false)
    const formRef = useRef()

    const onSubmit = (data) => {
        setSubmitted(true)
        
        emailjs.sendForm(`${process.env.NEXT_PUBLIC_SID}`, `${process.env.NEXT_PUBLIC_TID}`, formRef.current, `${process.env.NEXT_PUBLIC_PKEY}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
            console.log(error.text);
        });
    }

    return (
        submitted ? (
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="bg-secondary backdrop-blur-3xl shadow-2xl mx-4 md:mx-auto rounded p-20">
                    <h3 className="text-3xl font-bold"> Thank you for reaching out! </h3>
                    <p> Expect a reply asap.. </p>
                </div>
            </div>
        ) : (
            <>
                <h2 className="pt-56 text-center text-5xl font-bold mb-8"> Contact </h2>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    className="mx-4 md:mx-auto rounded flex flex-col p-5 my-10 max-w-4xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl bg-secondary backdrop-blur-3xl shadow-2xl px-12 py-24 mb-24"
                >

                    <label className="block mb-5" htmlFor="name">
                        <span className="text-primary"> Name </span>
                        <input
                            {...register("name", {required: true})}
                            className="text-secondary shadow-lg border rounded py-2 px-3 form-input mt-1 block w-full outline-none ring-[#7831c4] focus:ring"
                            id="name"
                            type="text"
                            placeholder="Alice Wonderland"
                        />
                    </label>

                    <label className="block mb-5" htmlFor="email">
                        <span className="text-primary"> Email </span>
                        <input
                            {...register("email", {
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }}
                            )}
                            className="text-secondary shadow-lg border rounded py-2 px-3 form-input mt-1 block w-full outline-none ring-[#7831c4] focus:ring"
                            id="email"
                            type="text"
                            placeholder="a@wonderland.com"
                        />
                    </label>

                    <label className="block mb-5" htmlFor="message">
                        <span className="text-primary"> Message </span>
                        <textarea
                            {...register("comment", {required: true})}
                            className="text-secondary shadow-lg border rounded py-2 px-3 form-textarea mt-1 block w-full outline-none ring-[#7831c4] focus:ring"
                            id="comment"
                            rows={10}
                        />
                    </label>

                    {/* errors when field validation fails */}
                    <div className="flex flex-col p-5">
                        {errors.name && (
                            <span className="text-red-500"> - Name field is required </span>
                            )}
                        {errors.email && (
                            <span className="text-red-500"> - Email field is required </span>
                            )}
                        {errors.comment && (
                            <span className="text-red-500"> - Message field is required </span>
                            )}
                    </div>
                    <input
                        type="submit" 
                        className="shadow-lg hover:bg-button bg-secondaryAccent focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                    />
                </form>
            </>


        )
       
    )
}
export default Form