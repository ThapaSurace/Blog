import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-[calc(100vh-154.8px)] my-10 px-4 max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto lg:flex lg:justify-center lg:items-center">
      <div className="lg:flex lg:gap-10">
        <div className="relative h-[400px] lg:h-[500px] md:flex-1 lg:flex lg:justify-center lg:items-center">
          <Image
            fill
            src="/about.gif"
            alt="about image"
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div className="mt-6 lg:flex-1 lg:mt-0">
          <h3 className="text-center lg:text-start text-xl">About us</h3>
          <h1 className="text-2xl md:text-4xl text-center lg:text-start lg:max-w-xs">Everyone has a story to tell.</h1>
          <p className="tracking-wide leading-relaxed text-center lg:text-start">
            ZoroBlog is a home for human stories and ideas. Here, anyone can share
            insightful perspectives, useful knowledge, and life wisdom with the
            world—without building a mailing list or a following first. The
            internet is noisy and chaotic; Medium is quiet yet full of insight.
            It’s simple, beautiful, collaborative, and helps you find the right
            audience for whatever you have to say.
          </p>
          <p className="tracking-wide leading-relaxed text-center lg:text-start">
            We believe that what you read and write matters. Words can divide or
            empower us, inspire or discourage us. In a world where the most
            sensational and surface-level stories often win, we’re building a
            system that rewards depth, nuance, and time well spent. A space for
            thoughtful conversation more than drive-by takes, and substance over
            packaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
