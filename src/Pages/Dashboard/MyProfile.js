import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = ({profile}) => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const {img} = profile;


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
                    const profile = {
                        education: data.education,
                        location: data.location,
                        city: data.city,
                        phone: data.phone,
                        linkedin: data.linkedin,
                        img: img
                    }
                    // send to your data base
                    fetch('http://localhost:5000/profile', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(profile)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Profile information added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add the profile information');
                            }
                        })
                }
            })
    }

    return (
        <div>
            <h2 className='ml-3 mt-2 my-5'>Add Your Profile Information</h2>

            <div className='my-20 max-w-7xl mx-auto px-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title justify-center font-bold'>Add Equipments' Information Here</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>


                            {/* Education */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="text"
                                    placeholder="Education Qualification"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                                </label>
                            </div>

                            {/* Location */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="text"
                                    placeholder="Enter Your Location"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("location", {
                                        required: {
                                            value: true,
                                            message: 'Description is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
                                </label>
                            </div>


                            {/* City */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="text"
                                    placeholder="City"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("city", {
                                        required: {
                                            value: true,
                                            message: 'Available Quantity is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                                </label>
                            </div>


                            {/* phone no. */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="number"
                                    placeholder="Phone No."
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Minimum order is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                                </label>
                            </div>


                            {/* linked in */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="text"
                                    placeholder="Your Linkedin Link"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("linkedin", {
                                        required: {
                                            value: true,
                                            message: 'Price is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedin.message}</span>}
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



                            <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                        </form>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={img} alt="user" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyProfile;