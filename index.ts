export async function displayString(array: string[], separator: string = ", ") {
  return array?.filter((item) => item !== null).join(separator);
}
