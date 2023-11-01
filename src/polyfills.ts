(window as any).global = window;
(window as any).process = {
  env: { DEBUG: undefined },
};
(window as any).auth = {
  storagePrefix: '',
};
export const Window = (window as any);
