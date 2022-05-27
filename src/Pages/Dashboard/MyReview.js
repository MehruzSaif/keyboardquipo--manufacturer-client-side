import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyReview = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'ff80d7d39744e8bbef0749f30f2f77f9';


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {

                if (result.success) {
                    const img = result.data.url;
                    const comment = {
                        name: data.name,
                        addComment: data.addComment,
                        ratings: data.ratings,
                        img: img
                    }
                    // send to your data base
                    fetch('http://localhost:5000/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(comment)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Review added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Review');
                            }
                        })
                }
            })
    }

    return (
        <div>
            <h2 className='ml-3 mt-2 my-5'>Add  a Review</h2>

            <div className='flex justify-center items-center'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title justify-center font-bold mb-3'>Add Your Review</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>


                            {/* Name */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="name"
                                    placeholder="Enter Your Name"
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

                            {/* Review */}
                            <div className="form-control w-full max-w-xs">

                                <textarea
                                    type="text"
                                    placeholder="Add your review"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("addComment", {
                                        required: {
                                            value: true,
                                            message: 'Comment is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.addComment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.addComment.message}</span>}
                                </label>
                            </div>


                            {/* Ratings */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="number"
                                    placeholder="Give Ratings out of 5"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("ratings", {
                                        required: {
                                            value: true,
                                            message: 'Ratings is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.ratings?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ratings.message}</span>}
                                </label>
                            </div>


                            {/* image */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your image</span>
                                </label>

                                <input type="file"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Image is Required'
                                        }
                                    })}
                                />

                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                </label>

                            </div>



                            <input className='btn w-full max-w-xs text-white' type="submit" value="Add Review" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyReview;