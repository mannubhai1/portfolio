import React from "react";
import ItemLayout from "./ItemLayout";
// import LeetcodeStats from "./LeetcodeStats";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Software Engineer
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Passionate Computer Science Senior at IITT with expertise in
            Software development and Machine Learning. Strong problem-solving
            and collaboration skills. Eager to explore new technologies and seek
            challenging opportunities.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            {" "}
            15+ <sub className="font-semibold text-base"> Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            {" "}
            4+{" "}
            <sub className="font-semibold text-base"> Months of Experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=mannubhai1&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Mannubhai1"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=mannubhai1&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Mannubhai1"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,nodejs,astro,autocad,bash,bootstrap,c,cpp,cmake,css,debian,docker,express,firebase,git,github,java,py,linux,mongodb,npm,mysql,neovim,netlify,nextjs,pytorch,react,redux,sklearn,tailwind,tensorflow,ts,vercel,vim,vscode"
            alt="Mannubhai1"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=mannubhai1&theme=dark&hide_border=true&background=43EB2B00&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="Mannubhai1"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=mannubhai1&repo=TalkyWoky&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
            alt="Mannubhai1"
            loading="lazy"
          />
        </ItemLayout>

        {/* <ItemLayout className={"col-span-6 !p-0"}>
          <LeetcodeStats />
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;
