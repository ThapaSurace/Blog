"use client"

import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Divider, Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import upload from "@/libs/upload";
import { blogCategories } from "@/constants";
import toast from "react-hot-toast";

export default function BlogForm({session}) {
    const [title, setTitle] = useState("");
    const [shortDesc, setShortDesc] = useState("");
    const [category,setCategory] = useState("")
    const [file, setFile] = useState(undefined);
    const [image,setImage] = useState(undefined)
    const [uploadedImage,setUploadedImage] = useState("")
  
    const editorRef = useRef(null);

    function handleChange(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0])
    }
    
    const handleUpload = async () => {
      const url = await upload(image)
      setUploadedImage(url)
    }
  
  
    const log = async () => {
      if (!title || !shortDesc || !category || !uploadedImage || !editorRef.current || !editorRef.current.getContent()) {
        // Check if any of the required fields is empty
        toast.error('Please fill all the field of the form!')
        return;
      }
      if (editorRef.current) {
        const longDesc = editorRef.current.getContent();
  
      const data = {
        title,
        longDesc,
        shortDesc,
        img:uploadedImage,
        category
      };
      try {
        const response = await axios.post("http://localhost:3000/api/post", data);
          if (response.status === 200) {
            toast.success("Blog posted successfully")
            // Clear the state
            setTitle("");
            setShortDesc("");
            setCategory("");
            setFile(undefined);
            setImage(undefined);
            setUploadedImage("");
            // You might also want to clear the content in the editor if needed
            if (editorRef.current) {
              editorRef.current.setContent("");
            }
          }
      } catch (error) {
        console.log(error);
      }
    }
    };
  
    return (
      <div className="max-w-4xl mx-auto my-10 px-6 relative">
        <h1 className="text-3xl font-bold text-gray-900 mb-14 text-center dark:text-white">
          Tell your story
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-center w-full">
            <div className="w-full relative">
              {!file ? (
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-400 dark:border-white-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>
              ) : (
                <div className="h-[200px] w-full relative">
                  <Image
                    src={file}
                    alt="cover image"
                    className="h-full w-full object-cover object-center"
                    fill
                  />
                </div>
              )}
              <Button className="mt-4 bg-gray-500 text-white font-bold" onClick={handleUpload}>
                Upload an image
              </Button>
            </div>
          </div>
          <Divider />
          <Select
            radius="lg"
            label="Category"
            placeholder="Select a category"
            className="w-full"
            variant="bordered"
            onChange={e=>setCategory(e.target.value)}
          >
            {blogCategories.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
  
          <Input
            variant="bordered"
            type="text"
            name="title"
            placeholder="Enter your title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            color="primary"
            variant="bordered"
            placeholder="Enter your short description"
            name="shortDesc"
            onChange={(e) => setShortDesc(e.target.value)}
          />
          <Editor
            apiKey="6bgkaa1jji4qiwa23x315x1s734hvez5n27wreeb6xefpo0u"
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: 200,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px;}",
            }}
          />
          <Button color="primary" type="submit" onClick={log} className="font-bold text-lg">
            Publish
          </Button>
        </div>
      </div>
    );
  }
  