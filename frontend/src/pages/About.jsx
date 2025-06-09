import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            JobSphere is your all-in-one platform for discovering job
            opportunities tailored to your skills and goals. We help you
            explore, apply, and grow — all in one connected space. At JobSphere,
            we believe job hunting shouldn't be overwhelming. That’s why we’ve
            built a smart, intuitive platform that connects job seekers with
            meaningful career opportunities across industries. Whether you’re a
            student stepping into the job market, a professional looking to
            switch careers, or someone returning to work, JobSphere offers a
            personalized experience
          </p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="leading-8 px-5 text-justify">
        <p>
          At JobSphere, we’re creating more than just a job search app — we’re
          building a complete ecosystem where talent meets opportunity. Our
          platform is designed to simplify the job-finding process by offering
          smart, personalized job recommendations, real-time updates, and a
          smooth application experience. Whether you’re a student, a working
          professional, or someone seeking a career shift, JobSphere adapts to
          your goals and helps you navigate the job market confidently. With a
          clean interface, powerful search tools, and a growing network of
          employers across industries, we aim to empower every user to not just
          find a job — but to find the right one. JobSphere is your partner in
          shaping a better future, where careers are discovered, not just
          searched for. Job hunting is hard. JobSphere makes it easier.
        </p>
      </div>
    </div>
  );
};

export default About;
