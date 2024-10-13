export default function uid() {
  const time = Date.now().toString(36).slice(-4);
  const rndm = Math.random().toString(36).substring(2, 4);
  return time + rndm;
}
