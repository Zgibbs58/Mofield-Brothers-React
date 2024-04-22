import Image from "next/image";
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });

const ServiceGridItem = ({title, icon, text, lightColor, darkColor, tags}: {title: string, icon: any, text: string, lightColor: string, darkColor?: any, tags: string[]}) => {
  return (
    <div className={`flex flex-col ${lightColor} ${darkColor || ""} text-black p-6 md:p-10 gap-6`}>
      <div className="flex items-center">
        <h4 className={`text-3xl md:text-5xl font-bold pr-4 md:pr-10 ${bitter.className}`}>{title}</h4>
        <Image className="w-1/4 md:w-1/12" src={icon} width={60} height={60} alt="icon"></Image>
      </div>
      <p>
        {text}
      </p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
            <p className="border border-black rounded-full px-4">{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default ServiceGridItem;
