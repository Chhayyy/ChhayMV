import React from "react";
import Link from "next/link";

function Button({ id }) {
  return (
    <>
      <Link
        className=" text-center py-2 bg-blue-500 text-white rounded-md mt-auto"
        href={`/mv/${id}`}
      >
        <button>View Detail</button>
      </Link>
    </>
  );
}
export default Button;
