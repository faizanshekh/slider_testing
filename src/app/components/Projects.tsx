import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Project {
  title: string;
  description: string;
  image: string;
}

// ProjectInfo Component
function ProjectInfo({ currentProject }: { currentProject: Project }) {
  return (
    <div className="lg:col-span-5 col-span-12 xl:mt-16 lg:mt-6 mt-6">
      <h4 className="lg:text-2xl lg:max-w-56 mb-4 font-medium">
        <span>{currentProject.title}</span>
      </h4>
      <p className="text-base lg:max-w-md">{currentProject.description}</p>
    </div>
  );
}

// SwiperSlider Component
interface SwiperProps {
  projectContents: Project[];
  onSlideChange: (index: number) => void;
}

function SwiperSlider({ projectContents, onSlideChange }: SwiperProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      className="swiper-container"
    >
      {projectContents.map((project, index) => (
        <SwiperSlide key={index}>
          {/* For large screens */}
          <Image
            src={project.image}
            alt={`Project ${index}`}
            className="hidden lg:block"
            width={693}
            height={427}
          />
          {/* For small screens */}
          <Image
            src={project.image}
            alt={`Project ${index}`}
            className="block lg:hidden"
            width={358}
            height={220.59}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

// Parent Component
export default function ProjectParent() {
  const projectContents: Project[] = [
    {
      title: "Pinlocal Partner Portal",
      description:
        "Vestibulum metus eget ligula ornare vehicula eleifend hendrerit pharetra scelerisque metus efficitur.",
      image: "/project_img.jpg",
    },
    {
      title: "Another Project Title",
      description:
        "Vestibulum metus eget ligula ornare vehicula eleifend hendrerit pharetra scelerisque metus efficitur.",
      image: "/project_img.jpg",
    },
    {
      title: "More Project Title",
      description:
        "Vestibulum metus eget ligula ornare vehicula eleifend hendrerit pharetra scelerisque metus efficitur.",
      image: "/project_img.jpg",
    },
  ];

  const [currentProject, setCurrentProject] = useState<Project>(projectContents[0]);

  return (
    <section className="relative py-12 lg:py-22 h-full">
      <div className="flex flex-col max-w-custom-sm xs:max-w-full lg:max-w-custom-lg xl:mx-auto mx-4 lg:mx-custom-lg">
        <div className="grid lg:gap-8 gap-0 grid-cols-12 place-content-center">
          <div className="lg:mt-0 lg:col-span-7 col-span-12">
            <SwiperSlider
              projectContents={projectContents}
              onSlideChange={(index) => setCurrentProject(projectContents[index])}
            />
          </div>
          <ProjectInfo currentProject={currentProject} />
        </div>
      </div>
    </section>
  );
}
