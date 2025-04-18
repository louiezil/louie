"use client";

import { Deletion } from "@/Actions/actions";
import { useRouter } from "next/navigation";

const Dell = ({ id }) => {
  // console.log(id)
  const router = useRouter();
  const handlesubmit = async (id) => {
    await Deletion(id);
    router.refresh()
  };
  return <button onClick={() => handlesubmit(id)} style={{cursor:"pointer"}}>⛔</button>;
};

export default Dell;
