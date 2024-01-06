"use client";

import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";

export default function Page() {
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const editorRef = useRef(null);

  const log = async () => {
    if (editorRef.current) {
      const longDesc = editorRef.current.getContent();
      const data = {
        title,
        longDesc,
        shortDesc,
      };
      try {
        await axios
          .post("http://localhost:3000/api/post", data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-14 text-center dark:text-white">
        Tell your story
      </h1>
      <div className="flex flex-col gap-6">
        <Input
          variant="bordered"
          type="text"
          name="title"
          placeholder="Enter your title"
          onChange={(e) => setTitle(e.target.value)}
          className="border-red-500"
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
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <Button color="primary" type="submit" onClick={log}>
          Publish
        </Button>
      </div>
    </div>
  );
}
