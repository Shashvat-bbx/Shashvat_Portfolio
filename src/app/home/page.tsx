// write the home page here
import Image from "next/image";
import Name_and_Photo from "../components/Name_and_Photo";
import Social_Media_Links from "../components/Social_Media_Links";

export default function HomePage() {
  return (
    <div className="p-2 flex flex-col items-center justify-center">      
      <Name_and_Photo />
      {/* social media links with there icons */}
      <Social_Media_Links />

        
    </div>
  );
}
