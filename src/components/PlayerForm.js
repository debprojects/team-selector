import React, { useState } from "react";

const PlayerForm = ({ addPlayer }) => {
  const [name, setName] = useState("");
  const [skill, setSkill] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer({ name, skill });
    setName("");
    setSkill(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        min="1"
        max="10"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default PlayerForm;
