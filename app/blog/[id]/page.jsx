"use client";
import { assets, blog_data } from "@/assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const page = ({ params }) => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const res = await axios.get('/api/blog/',{params:{
      id: params.id
    }});
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="my-24 text-center">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto ">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            alt=""
            width={60}
            height={60}
          />
          <p className="mt-1 pb-2 text-lg max-2-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white "
          src={data.image}
          alt=""
          width={1280}
          height={720}
        />
        <h1 className="my-8 text-[26px] font-semibold ">Introduction</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque
          dolores et officiis totam adipisci neque voluptates! Debitis maiores,
          quasi reiciendis repellendus recusandae, quaerat sed veritatis, quas
          cupiditate ducimus incidunt!
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          cum delectus, odit sit assumenda accusantium possimus dolore
          doloremque quibusdam est facilis explicabo aliquam, voluptate porro
          veritatis eligendi distinctio quidem!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          cum delectus, odit sit assumenda accusantium possimus dolore
          doloremque quibusdam est facilis explicabo aliquam, voluptate porro
          veritatis eligendi distinctio quidem!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque
          dolores et officiis totam adipisci neque voluptates! Debitis maiores,
          quasi reiciendis repellendus recusandae, quaerat sed veritatis, quas
          cupiditate ducimus incidunt!
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          cum delectus, odit sit assumenda accusantium possimus dolore
          doloremque quibusdam est facilis explicabo aliquam, voluptate porro
          veritatis eligendi distinctio quidem!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          cum delectus, odit sit assumenda accusantium possimus dolore
          doloremque quibusdam est facilis explicabo aliquam, voluptate porro
          veritatis eligendi distinctio quidem!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque
          dolores et officiis totam adipisci neque voluptates! Debitis maiores,
          quasi reiciendis repellendus recusandae, quaerat sed veritatis, quas
          cupiditate ducimus incidunt!
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          cum delectus, odit sit assumenda accusantium possimus dolore
          doloremque quibusdam est facilis explicabo aliquam, voluptate porro
          veritatis eligendi distinctio quidem!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          cum delectus, odit sit assumenda accusantium possimus dolore
          doloremque quibusdam est facilis explicabo aliquam, voluptate porro
          veritatis eligendi distinctio quidem!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eaque
          dolores et officiis totam adipisci neque voluptates! Debitis maiores,
          quasi reiciendis repellendus recusandae, quaerat sed veritatis, quas
          cupiditate ducimus incidunt!
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          cum delectus, odit sit assumenda accusantium possimus dolore
          doloremque quibusdam est facilis explicabo aliquam, voluptate porro
          veritatis eligendi distinctio quidem!
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          cum delectus, odit sit assumenda accusantium possimus dolore
          doloremque quibusdam est facilis explicabo aliquam, voluptate porro
          veritatis eligendi distinctio quidem!
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          cum delectus, odit sit assumenda accusantium possimus dolore
          doloremque quibusdam est facilis explicabo aliquam, voluptate porro
          veritatis eligendi distinctio quidem!
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on Social Media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="" width={50} />
            <Image src={assets.twitter_icon} alt="" width={50} />
            <Image src={assets.googleplus_icon} alt="" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
