"use client";

import { UserDeletion } from "@/Actions/actions";
import { useRouter } from "next/navigation";

const UserDell = ({ id }) => {
  // console.log(id)
  const router = useRouter();
  const handlesubmit = async (id) => {
    await UserDeletion(id);
    router.refresh()
  };
  return <button onClick={() => handlesubmit(id)} style={{cursor:"pointer"}}>⛔</button>;
};

export default UserDell;
