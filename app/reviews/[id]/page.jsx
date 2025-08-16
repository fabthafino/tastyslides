import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase.config";

const singleReview = async (id) => {
  if (!id) return null;

  try {
    const docRef = doc(db, "reviews", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return { id, ...docSnap.data() };
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.error("An error occurred", error);
    alert("Oops, somthing went wrong");
  }
};

const page = async ({ params }) => {
  const perReviews = await singleReview(params.id);
//   return <p>ID: {params.id}</p>;
    return (
      <main>
        
      </main>
    );
};

export default page;
