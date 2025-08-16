"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase.config";

const page = () => {
  const [reviews, setReviews] = useState([])

  const fetchReviews = async () => {
    const reviewArray = []
    const querySnapshot = await getDocs(collection(db, "reviews"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const reviewObject = {
        id: doc.id,
        ...doc.data()
      }
      console.log(reviewObject);
      reviewArray.push(reviewObject)
      
    });
    console.log(reviewArray);
    setReviews(reviewArray)
    
  };

  useEffect(() => {
    fetchReviews(); 
  }, []);

  return (
    <main className="min-h-dvh">
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 md:p-10 p-3">
        {reviews.map((rev, i) => (
          <div key={i} className="space-y-3 shadow-md p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={rev.img}
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
                <h2>{rev.author}</h2>
              </div>
            </div>
            <p className="text-lg">{rev.book}</p>
            <p className="line-clamp-2">{rev.review}</p>
            <div className="flex items-center justify-between">
              <p>{rev.timestamp}</p>
              <Link
                href={`/reviews/${rev.id}`}
                className="flex items-center text-sm text-gray-600 hover:text-black transition-all duration-300"
              >
                Read More
                <MdOutlineKeyboardDoubleArrowRight className="text-lg" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default page;
