import { IFilters } from "@/types";
import { AquapureCell } from "./aquapureCell";

export const Aquapure = ({ data }: IFilters) => {
 const site = "Aquapure";
 return (
  <div className="flex items-center">
   <div className="w-20 text-sky-200">{site}</div>
   <div className="flex-1 flex bg-slate-800 py-1 rounded-md ml-2 w-full">
    {data
     .filter((d) => d.website === site)
     .map((el) => (
      <AquapureCell key={el.title} element={el} />
     ))}
   </div>
  </div>
 );
};
