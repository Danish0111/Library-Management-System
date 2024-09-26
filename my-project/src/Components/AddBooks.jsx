import React from 'react'
import { useForm } from "react-hook-form"
import { useState } from 'react'

const AddBooks = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [imagePreview, setImagePreview] = useState(null);
  const onSubmit = (data) => {
    console.log(data);

    if (data.image && data.image[0]) {
      const formData = new FormData();
      formData.append("file", data.image[0]);

      console.log("Image file:", data.image[0]);
    }
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <h1 className='text-3xl font-bold p-10 px-6'>Add Books</h1>
      <div className="form">
        <form className='px-10 flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
          <div className="title flex flex-col">
            <label className='font-semibold' htmlFor="">Title:</label>
            <input className='p-1 px-8 border-2 border-gray-200 w-[100%] rounded-md' type="text" id='title' {...register("title", { required: { value: true, message: "This field is required" } })} />
            {errors.title && <p className='text-sm text-red-500'>This field is required</p>}
          </div>
          <div className="author flex flex-col">
            <label className='font-semibold' htmlFor="">Author:</label>
            <input className='p-1 px-8 border-2 border-gray-200 w-[100%] rounded-md' type="text" id='author' {...register("author", { required: { value: true, message: "This field is required" } })} />
            {errors.author && <p className='text-sm text-red-500'>This field is required</p>}
          </div>
          <div className="description flex flex-col">
            <label className='font-semibold' htmlFor="">Description:</label>
            <textarea className='p-1 px-8 border-2 border-gray-200 w-[100%] h-[30vh] rounded-md' type="textarea" id='description' {...register("description", { required: { value: true, message: "This field is required" } })} />
            {errors.description && <p className='text-sm text-red-500'>This field is required</p>}
          </div>
          <div className="image flex flex-col">
            <label className='font-semibold' htmlFor="">Upload Image:</label>
            <input className='w-[35%] border-2 border-gray-300 rounded-md' type="file" id='image' accept="image/*" {...register("image", { required: { value: true, message: "This field is required" } })} onChange={(e) => {
                handleImageChange(e);
              }}/>
            {errors.image && <p className='text-sm text-red-500'>This field is required</p>}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-4 w-48 h-48 object-cover border-2 border-gray-300 rounded-md"
              />
            )}
          </div>
          
          <div className="book-id flex flex-col">
            <label className='font-semibold' htmlFor="">Book ID:</label>
            <input className='p-1 px-8 border-2 border-gray-200 w-[100%] rounded-md' type="text" id='bookId' {...register("bookId", { required: { value: true, message: "This field is required" } })} />
            {errors.bookId && <p className='text-sm text-red-500'>This field is required</p>}
          </div>

          <button className='mt-4 mb-5 p-2 bg-blue-600 text-white font-semibold rounded-md' type="submit" >Submit</button>
        </form>
      </div>
    </>
  )
}

export default AddBooks
