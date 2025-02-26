import React from "react";
import Link from "next/link";

const colors = ["lavender", "rebeccapurple", "slateblue", "hotpink", "white"];

function ScreenSaverDirectory() {
  return (
    <main className="screen-saver-wrapper">
      <h1>Choose your color</h1>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ScreenSaverDirectory;
