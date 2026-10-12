import { useState } from "react";
import KepBetolto from "./KepBetolto";

const kikapcsoltKep =
  "https://www.w3schools.com/js/pic_bulboff.gif";

const bekapcsoltKep =
  "https://www.w3schools.com/js/pic_bulbon.gif";

function ReactKapcsolo() {
  const [beVanKapcsolva, setBeVanKapcsolva] = useState(false);

  function kapcsolas() {
    setBeVanKapcsolva(!beVanKapcsolva);
  }

  const kepUrl = beVanKapcsolva ? bekapcsoltKep : kikapcsoltKep;
  const altSzoveg = beVanKapcsolva
    ? "Bekapcsolt izzó"
    : "Kikapcsolt izzó";

  return (
    <main>
      <p>
        A kapcsoló állapota: <strong>{beVanKapcsolva ? "Be" : "Ki"}</strong>
      </p>

      <KepBetolto KepUrl={kepUrl} AltSzoveg={altSzoveg} />

      <div>
        <button type="button" onClick={kapcsolas}>
          Kapcsoló átváltása
        </button>
      </div>
    </main>
  );
}

export default ReactKapcsolo;