import { useEffect } from "react";

function FallingBeams() {
  useEffect(() => {
    const container = document.querySelector(".beams-container");
    for (let i = 0; i < 20; i++) {
      const beam = document.createElement("div");
      beam.className = "beam";
      beam.style.left = Math.random() * 100 + "vw";
      beam.style.animationDuration = 2 + Math.random() * 3 + "s"; // random speed
      beam.style.animationDelay = Math.random() * 5 + "s";
      container.appendChild(beam);
    }
  }, []);

  return null;
}

export default FallingBeams;
