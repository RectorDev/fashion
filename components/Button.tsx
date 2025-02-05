import React from "react";

type Props = {
  children: React.ReactNode;
  classes: string;
};
function Button({ children = "", classes }: Props) {
  return (
    <button
      className={`px-5 py-3 flex items-center justify-center duration-200 transition-colors rounded-lg w-fit ${classes}`}
    >
      {children}
    </button>
  );
}

export default Button;
