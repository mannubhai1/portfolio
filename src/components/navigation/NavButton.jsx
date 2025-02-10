"use client";
import Link from "next/link";
import React, { useState } from "react";
import AlertBox from "@/components/navigation/AlertBox"; // Import Alert
import {
  Github,
  Home,
  Linkedin,
  NotebookTabs,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "twitter":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
      break;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;
      break;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  const handleResumeClick = (e) => {
    e.preventDefault();
    const userChoice = window.confirm(
      "Do you want to view the resume in the browser?"
    );

    if (userChoice) {
      window.open(link, "_blank");
    }
  };

  return (
    <div
      className="absolute cursor-pointer'z-50"
      style={{
        transform: `translate(${x}, ${y})`,
      }}
    >
      <Link
        className="text-foreground rounded-full flex items-center justify-center custom-bg"
        aria-label={label}
        target={newTab ? "_blank" : "_self"}
        href={link}
        name={label}
        onClick={icon === "resume" ? handleResumeClick : undefined}
      >
        <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse hover:text-accent group-hover:pause">
          {getIcon(icon)}

          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
          <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap ">
            {label}
          </span>
        </span>
      </Link>
    </div>
  );
};

export default NavButton;
