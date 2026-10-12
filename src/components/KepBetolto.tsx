interface KepBetoltoProps {
  KepUrl: string
  AltSzoveg: string
}

function KepBetolto({ KepUrl, AltSzoveg }: KepBetoltoProps) {
  return <img src={KepUrl} alt={AltSzoveg} />
}

export default KepBetolto