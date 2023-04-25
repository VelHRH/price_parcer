import Link from "next/link";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export const CellLight = ({
 link,
 children,
 tooltip,
 normalPrice,
}: {
 link: string;
 children: string;
 tooltip: string;
 normalPrice: string;
}) => {
 return (
  <Tippy content={`${tooltip}`} animation="scale" arrow={true}>
   <Link
    href={`${link}`}
    rel="noopener noreferrer"
    target="_blank"
    className={`cursor-pointer border-r-2 border-slate-700 w-[calc(100%/${
     process.env.MODELS
    })] text-center ${
     parseFloat(children.replace(/\s/g, "")) >
      parseFloat(normalPrice.replace(/\s/g, "")) * 1.05 && "text-red-400"
    }`}
   >
    {children}
   </Link>
  </Tippy>
 );
};
