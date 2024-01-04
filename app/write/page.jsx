import { Button, Input } from "@nextui-org/react";
import LexicalEditor from "../components/Lexical/Lexical";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function Editor() {
  return (
    <div className="min-h-screen my-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Write your story</h1>

      <div className="flex flex-col items-start gap-4">
        <div className="max-w-xl mx-auto w-full">
          <Input
            type="text"
            variant="underlined"
            placeholder="Add your title here"
            className="mb-10"
          />
          <div>
            <label className="flex justify-center items-center w-full h-32 px-4 transition border-2 border-gray-300 rounded-md appearance-none cursor-pointer">
              <span className="flex flex-col items-center gap-4">
                <AiOutlineCloudUpload size={30} className="text-gray-400" />
                <span className="font-medium text-xs text-gray-400">
                  Click to upload or drag and drop
                </span>
              </span>
              <input type="file" name="file_upload" className="hidden" />
            </label>
          </div>
        </div>
        <LexicalEditor />
      </div>
    </div>
  );
}
