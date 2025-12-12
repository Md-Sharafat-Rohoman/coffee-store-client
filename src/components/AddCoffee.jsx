import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // console.log(formData.entries())
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        // send data to server
        fetch('http://localhost:5000/addCoffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    // console.log('');
                    form.reset();

                    Swal.fire({
                        title: "Coffee added successfully",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div className='mt-20 p-24 space-y-5'>
            <div className='space-y-5'>
                <h1 className='text-6xl'>Add Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>


            <div>
                <form onSubmit={handleAddCoffee} className='space-y-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* 1 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label ">Name</label>
                            <input type="text" name="name" className="input w-full" placeholder="Enter coffee name" />
                        </fieldset>
                        {/* 2 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label ">Chef</label>
                            <input type="text" name="chef" className="input w-full" placeholder="Enter coffee chef" />
                        </fieldset>
                        {/* 3 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label ">Supplier</label>
                            <input type="text" name="supplier" className="input w-full" placeholder="Enter coffee supplier" />
                        </fieldset>
                        {/* 4 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label ">Taste</label>
                            <input type="text" name="taste" className="input w-full" placeholder="Enter coffee taste" />
                        </fieldset>
                        {/* 5 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label ">Category</label>
                            <input type="text" name="category" className="input w-full" placeholder="Enter coffee category" />
                        </fieldset>
                        {/* 6 */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label ">Details</label>
                            <input type="text" name="details" className="input w-full" placeholder="Enter coffee details" />
                        </fieldset>
                    </div>
                    {/* 7 */}
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
                        <label className="label ">Photo URL</label>
                        <input type="text" name="photo" className="input w-full" placeholder="Enter photo URL" />
                    </fieldset>
                    <input type="submit" className='btn w-full' value="Add Coffee" />
                </form>
            </div >
        </div >
    )
};


export default AddCoffee;