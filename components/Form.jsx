import { Button } from "@mui/material"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

const Form = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const [submitted, setSubmitted] = useState(false)

    const post = {
        id: 1
    }

    const onSubmit = (data) => {
        fetch("/api/createComment", {
            method: "POST",
            body: JSON.stringify(data),
        })
        .then((a) => {
            console.log(a)
            setSubmitted(true)
        })
        .catch((err) => {
            console.log(err)
            setSubmitted(false)
        })
    }

    return (
        submitted ? (
            <div className="flex flex-col p-10 my-10 bg-green-500 text-white max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold"> Thank you for reaching out! </h3>
                <p> Expect a reply asap.. </p>
            </div>
        ) : (
            <>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="rounded flex flex-col p-5 my-10 max-w-4xl mx-auto bg-card backdrop-blur-3xl shadow-2xl px-12 pt-56 pb-24 mb-24"
                    >
                    <h2 className="text-5xl font-bold mb-8"> Contact </h2>
                
                    <input
                        {...register("_id")}
                        type="hidden"
                        name="_id"
                        value={post?._id}
                    />

                    <label className="block mb-5" htmlFor="name">
                        <span className="text-primary"> Name </span>
                        <input
                            {...register("name", {required: true})}
                            className="shadow-lg border rounded py-2 px-3 form-input mt-1 block w-full outline-none ring-[#7831c4] focus:ring"
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
                            className="shadow-lg border rounded py-2 px-3 form-input mt-1 block w-full outline-none ring-[#7831c4] focus:ring"
                            id="email"
                            type="text"
                            placeholder="a@wonderland.com"
                            />
                    </label>

                    <label className="block mb-5" htmlFor="message">
                        <span className="text-primary"> Message </span>
                        <textarea
                            {...register("comment", {required: true})}
                            className="shadow-lg border rounded py-2 px-3 form-textarea mt-1 block w-full outline-none ring-[#7831c4] focus:ring"
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
                    <Button className="shadow-lg hover:bg-button bg-secondaryAccent focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer">
                        Send
                    </Button>
                </form>
            </>


        )
       
    )
}
export default Form