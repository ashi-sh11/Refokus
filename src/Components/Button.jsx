import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-32 py-2 px-3 bg-zinc-100 rounded-full text-black text-center flex items-center justify-between">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
