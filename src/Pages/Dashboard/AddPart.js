import React from 'react';
import { useForm } from 'react-hook-form';

const AddPart = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    

    const onSubmit = async data => {
        
        console.log('data', data);
    }


    return (
        <div>
            <h2 className='ml-3 mt-2 my-5'>Add  a New Equipment</h2>

            <div className='flex justify-center items-center'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title justify-center font-bold'>Add Equipments' Informations Here</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>


                        {/* Name */}
                        <div className="form-control w-full max-w-xs">
                            
                            <input
                                type="name"
                                placeholder="Equipment's Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        {/* Description */}
                        <div className="form-control w-full max-w-xs">
                            
                            <input
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>


                        {/* Available Quantity */}
                        <div className="form-control w-full max-w-xs">
                            
                            <input
                                type="text"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("available quantity", {
                                    required: {
                                        value: true,
                                        message: 'Available Quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>


                        {/* Minimum Order */}
                        <div className="form-control w-full max-w-xs">
                            
                            <input
                                type="text"
                                placeholder="Minimum Order"
                                className="input input-bordered w-full max-w-xs"
                                {...register("minimum order", {
                                    required: {
                                        value: true,
                                        message: 'Minimum order is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>


                        {/* Price */}
                        <div className="form-control w-full max-w-xs">
                            
                            <input
                                type="text"
                                placeholder="Price Per Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>


                        {/* Img */}
                        {/* <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Choose image</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div> */}

                        
                        
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                    </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddPart;