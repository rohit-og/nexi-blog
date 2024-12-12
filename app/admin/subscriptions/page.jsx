"use client";
import SubItem from "@/components/AdminComponents/SubItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function page = () => {
  const [emails, setEmail] = useState([]);

  const fetchEmails = async () => {
    const res = await axios.get("/api/email");
    setEmail(res.data.emails);
  };

  const deleteEmail = async (mongoId) => {
    const res = await axios.delete("/api/email", {
      params: {
        id: mongoId,
      },
    });
    if (res.data.success) {
      toast.success(res.data.message);
      fetchEmails();
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscription</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>
              <th scope="col" className="hiddem sm:block px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return (
                <SubItem
                  key={index}
                  mongoId={item._id}
                  email={item.email}
                  date={item.date}
                  deleteEmail={deleteEmail}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};


