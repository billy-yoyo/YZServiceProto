import { base } from "$app/paths";

export const goto = (path: string) => {
  window.location.pathname = `${base}${path}`;
}
