import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [profile, setProfile] = useState({});
    // const {img, } = profile;


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

                                fetch(`http://localhost:5000/profile/${inserted.insertedId}`)
                                    .then(res => res.json())
                                    .then(data => setProfile(data))


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

            <div className='my-20 max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h2 className='card-title justify-center font-bold'>Add Equipments' Information Here</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>



                            {/* Name */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="name"
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
                            </div>


                            {/* email */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="email"
                                    placeholder="Your Mail"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>


                            {/* Education */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="text"
                                    placeholder="Education Qualification"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: 'Education background is Required'
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

                {/* show my info */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={profile.img} alt="user" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{profile.name}</h2>
                        <p>{profile.email}</p>
                        <p>{profile.education}</p>
                        <p>Location: {profile.location}</p>
                        <p>City: {profile.city}</p>
                        <p>Phone No: {profile.phone}</p>
                        <p>Linkedin: {profile.linkedin}</p>
                        <div class="card-actions">

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyProfile;