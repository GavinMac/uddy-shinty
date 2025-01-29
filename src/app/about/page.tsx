import { Text, Title } from "@mantine/core";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 mx-[10%]">
      <div className="infoBox">
        <Title>About</Title>
        <Text>
          Uddingston shinty club resides in a small town within south
          Lanarkshire, the club was officially founded in 2019 and came to the
          fruition by a group of school pupils who wanted to see a after school
          club that they had been a part of grow into a larger organisation to
          serve the community.
        </Text>

        <Text>
          Currently the club now has a very active women’s team as well as teams
          at U17s and U14s, the club is aiming to expand further with a mens
          team for 2022 season. We provide a shinty club which attract players
          from the local areas as well as Glasgow. We welcome all levels of
          experience and new players to our training sessions, as well as
          players who wish to train but cant make their home clubs sessions. Our
          aim is to continue to grow as a new club to further promote our own
          ethos and that of the CA.
        </Text>
      </div>
      <div className="infoBox">
        <Title>Team Managers</Title>
        <Text>
          1st Team: Mens team currently under development with an aim to play
          competitive shinty for 2022 Women’s Team: L Thompson
        </Text>
      </div>
      <div className="infoBox">
        <Title>Contact Us</Title>
        <Text>
          Carolyn Muir/ Lee Thompson -{" "}
          <a href="mailto:uddingstonshinty@gmail.com">
            uddingstonshinty@gmail.com
          </a>
        </Text>
      </div>
    </div>
  );
}
