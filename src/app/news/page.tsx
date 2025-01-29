"use client";

import { Title, Text } from "@mantine/core";
import { FacebookEmbed, InstagramEmbed } from "react-social-media-embed";

export default function NewsPage() {
  return (
    <main className="flex flex-col gap-8 items-center w-full h-screen font-[family-name:var(--font-geist-sans)] my-[5%]">
      <div className="infoBox">
        <Title>News</Title>
        <Text>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat nisl
          iaculis vivamus lacus; sagittis ex. Est est in semper donec sit sem
          penatibus. Tristique feugiat himenaeos faucibus feugiat luctus
          adipiscing tempor nulla. Fringilla magna luctus fermentum hac aptent
          nisl sociosqu rutrum? Est mauris nullam vitae lectus curabitur
          potenti. Dolor ex aptent vivamus nulla lacus tortor porttitor quam
          pulvinar.
        </Text>
      </div>
      <div className="flex flex-row justify-center items-center w-full gap-8">
        <InstagramEmbed url="https://www.instagram.com/uddyshinty/" className="w-[50%]"/>

        <FacebookEmbed url="https://www.facebook.com/profile.php?id=100083025922129" className="w-[50%]"/>
      </div>
    </main>
  );
}
