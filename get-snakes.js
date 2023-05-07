export async function getSnakes() {
  const response = await fetch("./serpentes.json");
  const data = await response.json();
  return data;
}
