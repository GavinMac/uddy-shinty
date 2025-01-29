import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="flex flex-row justify-left items-center h-full">
        <Link href="/">
          <Image
            src="/UddyShintyBadgeOutline.png"
            alt="UddyShintyBadge"
            width={64}
            height={64}
            priority
            className="navLogo"
          />
        </Link>
      </div>

      <div className="flex flex-row gap-8 justify-center items-center">
        {" "}
        <Link href="/about" className="flex flex-row gap-2">
          About
        </Link>
        <Link href="/news" className="flex flex-row gap-2">
          News
        </Link>
        <Link
          href="https://www.oneills.com/uk_en/shop-by-team/gaa/united-kingdom/uddingston-shinty-club.html"
          className="flex flex-row gap-2"
        >
          O&apos;Neils Shop
        </Link>
        <Link
          href="https://shinty.com/uddingston/"
          className="flex flex-row gap-2"
        >
          Shinty.com
        </Link>
      </div>
      <div className="flex flex-row gap-8 justify-center items-center">
        <Link
          href="https://www.instagram.com/uddyshinty/"
          className="flex flex-row gap-2"
        >
          <IconBrandInstagram />
        </Link>

        <Link
          href="https://www.facebook.com/profile.php?id=100083025922129"
          className="flex flex-row gap-2"
        >
          <IconBrandFacebook />
        </Link>
      </div>
    </nav>
  );
}
