import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const { _id, name, chef, supplier, taste, category, details, photo } = useLoaderData();
    console.log(name, chef, supplier, taste, category, details, photo);

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form);

        const updateCoffee = new FormData(form);
        const updatedCoffee = Object.fromEntries(updateCoffee.entries());
        console.log(updatedCoffee);


        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Drag me!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }


    return (

        <div className='space-y-5'>
            <h1>Update coffee</h1>
            <form onSubmit={handleUpdateCoffee} className='space-y-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* 1 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label ">Name</label>
                        <input type="text" name="name" defaultValue={name} className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>
                    {/* 2 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label ">Chef</label>
                        <input type="text" name="chef" defaultValue={chef} className="input w-full" placeholder="Enter coffee chef" />
                    </fieldset>
                    {/* 3 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label ">Supplier</label>
                        <input type="text" name="supplier" defaultValue={supplier} className="input w-full" placeholder="Enter coffee supplier" />
                    </fieldset>
                    {/* 4 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label ">Taste</label>
                        <input type="text" name="taste" defaultValue={taste} className="input w-full" placeholder="Enter coffee taste" />
                    </fieldset>
                    {/* 5 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label ">Category</label>
                        <input type="text" name="category" defaultValue={category} className="input w-full" placeholder="Enter coffee category" />
                    </fieldset>
                    {/* 6 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label ">Details</label>
                        <input type="text" name="details" defaultValue={details} className="input w-full" placeholder="Enter coffee details" />
                    </fieldset>
                </div>
                {/* 7 */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
                    <label className="label ">Photo URL</label>
                    <input type="text" name="photo" defaultValue={photo} className="input w-full" placeholder="Enter photo URL" />
                </fieldset>
                <input type="submit" className='btn w-full' value="Update Coffee" />
            </form>
        </div >
    );
};

export default UpdateCoffee;