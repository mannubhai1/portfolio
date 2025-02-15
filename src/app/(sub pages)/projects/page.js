import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "../../../components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        alt="background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover opacity-50 object-center"
      />
      <ProjectList projects={projectsData} />
      <div
        className="flex items-center justify-center fixed top-16 lg:top-20 
      -translate-x-1/2 lg:-translate-x-0 -z-10
        left-1/2
      lg:-left-24 h-screen"
      >
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
