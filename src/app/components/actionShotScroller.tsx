"use client";

import { useEffect, useState } from "react";
import { Image } from "@mantine/core";

interface ActionShotProps {
  img: string;
  alt: string;
  position: "left" | "right";
}

export default function ActionShotScroller({
  img,
  alt,
  position,
}: ActionShotProps) {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setScrollPercent(
      window.scrollY / (document.body.offsetHeight - window.innerHeight)
    );
    document.body.style.setProperty("--scroll", `${scrollPercent}`);
  };

  return (
    <div className="w-full h-full absolute top-full left-0">
      <div className="flex flex-col">
        <div className="my-[256px]">
          <div className={`actionShotImg-${position}`}>
            <Image src={img} alt={alt} width={256} height={256} />
          </div>
        </div>
      </div>
    </div>
  );
}
