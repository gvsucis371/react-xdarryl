export default function App() {
  return (
    <>
      <GameList games={data} />
    </>
  );
}

function GameList(props) {
  return (
    <div className="List">
      {props.games.map((game, index) => (
        <div key={index} className="game">
          <h1>{game.name}</h1>
          <p>{game.description}</p>
          <p>{game.created}</p>
          <Links links={game.links} />
        </div>
      ))}
    </div>
  );
}

function Links(props) {
  return (
    <>
      <p><b>Links:</b></p>
      <ul className="Links">
        {props.links.map((link, index) => (
          <li key={index}><p href={link}>{link}</p></li>
        ))}
      </ul>
    </>
  );
}

const data = [
  {
  name: "Minecraft",
  description: [
      "In Minecraft, players explore a procedurally generated, three-dimensional world with virtually infinite terrain made up of voxels."
  ],
  created: [
      "The first public alpha build was released on 17 May 2009. The game was continuously developed from then on, receiving a full release on 18 November 2011."
  ],
  links:[
    "https://www.minecraft.net",
    "https://en.wikipedia.org/wiki/Minecraft"
  ]
},

{
  name: "World of Warcraft",
  description: [
      "World of Warcraft (WoW) is a 2004 massively multiplayer online role-playing (MMORPG) video game developed and published by Blizzard Entertainment for Windows and Mac OS X."
  ],
  created: [
      "The game was announced in 2001, and was released for the 10th anniversary of the Warcraft franchise on November 23, 2004."
  ],
  links:[
    "https://worldofwarcraft.blizzard.com/en-us/",
    "https://en.wikipedia.org/wiki/World_of_Warcraft"
  ]
},

  {
    name: "Dark Souls II",
    description: [
        "Dark Souls II is a 2014 action role-playing game developed by FromSoftware. The second installment of the Dark Souls series, it was published by FromSoftware in Japan and Bandai Namco Games internationally."
    ],
    created: [
        "It is a sequel to 2011's Dark Souls. After initial delays, Dark Souls II was released worldwide on PlayStation 3 and Xbox 360 in March 2014, with the Windows version released the following month. "
    ],
    links:[
      "https://en.wikipedia.org/wiki/Dark_Souls_II"
    ]
}
];

