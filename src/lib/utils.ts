export function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(" ");
}

const BASE_PATH = "/aojion-website";

export function img(p: string): string {
  return `${BASE_PATH}${p}`;
}
