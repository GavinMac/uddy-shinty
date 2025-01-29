import { Image, Text, Title } from "@mantine/core";
import ActionShotScroller from "./components/actionShotScroller";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center w-full h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="hero">
        <div className="heroBgImg"></div>
        <div className="heroContent">
          <div>
            <Image
              src="/UddyShintyBadgeOutline.png"
              alt="Uddingston Shinty Badge"
              width={256}
              height={256}
            />

          </div>
          <Title>
              Text Here
            </Title>
        </div>
      </div>

      <div className="flex flex-col w-full h-full">
      <ActionShotScroller img="/actionShots/player3.png" alt="player3.png" position="left"/>
        <div className="mx-[10%]">   
          <div className="infoBox">
            <Text>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Consequat
              nisl iaculis vivamus lacus; sagittis ex. Est est in semper donec
              sit sem penatibus. Tristique feugiat himenaeos faucibus feugiat
              luctus adipiscing tempor nulla. Fringilla magna luctus fermentum
              hac aptent nisl sociosqu rutrum? Est mauris nullam vitae lectus
              curabitur potenti. Dolor ex aptent vivamus nulla lacus tortor
              porttitor quam pulvinar.
            </Text>

            <Text>
              Vulputate interdum per taciti vitae sed semper; cubilia commodo.
              Mollis iaculis sem phasellus netus nullam lectus. Libero est donec
              facilisis ligula; inceptos et aliquet erat scelerisque. Justo nunc
              amet taciti vel consectetur id torquent a. Aptent ante nisl ante
              habitasse, aenean tristique inceptos. Hac tempor maecenas a mauris
              leo placerat sagittis donec.
            </Text>
          </div>

          <div className="infoBox">
            <Text>
              Quis malesuada odio efficitur purus accumsan vitae euismod
              gravida. Penatibus arcu risus senectus id nisi maximus. Dictum
              vitae ipsum, condimentum iaculis phasellus eu. Mi faucibus
              vestibulum habitasse, feugiat ligula gravida efficitur enim
              ridiculus. Odio montes quam duis, urna ac varius. Dapibus interdum
              montes faucibus pharetra quis. Congue at himenaeos leo pulvinar
              senectus, pellentesque natoque ridiculus elementum. Dolor diam
              massa aptent sagittis mi consequat bibendum. Metus dui nam fusce
              proin eu.
            </Text>

            <Text>
              Felis mattis feugiat aliquam molestie consequat himenaeos?
              Suspendisse mi proin etiam magnis nullam pulvinar. Consequat
              cubilia eros molestie porta tincidunt pretium mauris ornare lacus.
              Convallis primis libero nam urna sagittis cubilia. Vel sagittis
              est mattis nostra mus leo imperdiet odio. Arcu aliquam curae per
              lectus per mauris. Viverra congue tincidunt netus auctor
              suspendisse. Parturient lobortis tellus cubilia, amet porttitor
              varius. Eu mus netus platea ipsum curae mus sed sem.
            </Text>
          </div>
        </div>
      </div>
    </main>
  );
}
