function UniqueID() {
  const time = Date.now().toString(36).slice(-4);
  const rndm = Math.random().toString(36).substring(2, 4);
  return time + rndm;
}

export default UniqueID;
