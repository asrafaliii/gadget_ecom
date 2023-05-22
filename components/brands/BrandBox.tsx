import React from "react";
import Image from "next/image";

interface Props {
  brandName: string;
  imageSrc: string;
}
const BrandBox: React.FC<Props> = ({ brandName, imageSrc }) => {
  return (
    <div className="relative flex items-center p-3 lg:p-2 shadow-md lg:shadow-xl">
      <Image src={imageSrc} width={300} height={175} alt={brandName} />
      <div className="absolute dark:inset-0 dark:bg-slate-800/40"></div>
    </div>
  );
};

export default BrandBox;
