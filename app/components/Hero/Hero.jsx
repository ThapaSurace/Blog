import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-[50vh] flex justify-center items-center">
      <div className="md:flex md:flex-row justify-between items-center w-full">
        <div className="mb-10 prose-sm sm:prose prose lg:prose-lg dark:prose-invert flex-1 max-w">
          <h1>Mindful Musings: Navigating Life's Journey</h1>
          <p className="max-w-md">
            Explore the depths of your thoughts and embark on a journey of
            self-discovery through mindful musings.
          </p>
        </div>
        <div className="flex-1 h-[300px] relative">
 
            <Image fill src="/hero.svg" alt="hero image" className="h-[400px] object-center object-cover" />
    
        </div>
      </div>
    </div>
  );
};

export default Hero;
