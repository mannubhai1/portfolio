import Image from "next/image";
import bg from "../../public/background/home-background2.png";
import Wrath from "@/components/models/Wrath";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";

// import dynamic from "next/dynamic";
// const Wrath = dynamic(() => import("@/components/models/Wrath"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative ">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background image"
        fill
        className="-z-50 w-full h-full object-cover opacity-50 object-center"
      />
      <div className="w-full h-screen">
        {/* navigation and 3d model */}
        <Navigation />
        <RenderModel>
          <Wrath />
        </RenderModel>
        {/* footer */}
      </div>
    </main>
  );
}
