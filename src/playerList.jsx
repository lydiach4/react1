
import Player from "./player";
import players from "./players.json";

const PlayersList = () => {
  return (
    <div className="grid grid-cols-3 gap-4 "  >
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
