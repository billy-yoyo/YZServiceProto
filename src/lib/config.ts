
export const APP_ROUTE = "/YZServiceProto";

export const goto = (path: string) => {
  window.location.pathname = `${APP_ROUTE}${path}`;
}
