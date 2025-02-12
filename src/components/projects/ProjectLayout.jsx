import Link from "next/link";
import React from "react";

const ProjectLayout = ({ name, description, date, demoLink }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };
  return (
    <Link
      href={demoLink}
      target="_blank"
      className="flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6
    custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted "> {truncateText(description, 80)}</p>
      </div>
      <div className="flex-1 mx-2 mb-1 bg-transparent border border-b border-dashed border-muted self-end"></div>
      <p className="text-foreground">{new Date(date).toDateString()}</p>
    </Link>
  );
};

export default ProjectLayout;
