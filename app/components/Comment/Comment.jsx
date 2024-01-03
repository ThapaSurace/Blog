import { Avatar, Button, Input } from "@nextui-org/react";

const Comment = () => {
  return (
    <div className="mt-4">
      <div className="flex gap-2 items-center">
        <Input
          type="text"
          variant="bordered"
          size="sm"
          placeholder="Write your comment..."
        />
        <Button size="lg">Submit</Button>
      </div>
      <div>
       <div>
       <div className="flex gap-2 items-center mt-6">
          <Avatar src="/images/header.jpg" alt="avtar" />
          <div className="flex flex-col items-center">
            <span className="text-lg">John Doe</span>
            <span className="text-sm text-gray-300">25 April 2024</span>
          </div>
        </div>
        <p className="mt-2 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nisi.</p>
       </div>
      </div>
    </div>
  );
};

export default Comment;
