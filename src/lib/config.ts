
export const APP_NAME = "yzproto";

export const goto = (path: string) => {
  window.location.pathname = `/${APP_NAME}${path}`;
}
