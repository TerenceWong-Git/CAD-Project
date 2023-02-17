export const apiWrapper = async <T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit,
  requiredAuth = false
) => {
  if (requiredAuth) {
    init = init || {};
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      throw new Error("401");
    }
    init.headers = { ...init.headers, Authorization: `Bearer ${jwt}` };
  }
  const resp = await fetch(input, init);
  const data = await resp.json();
  if (resp.status < 200 || resp.status >= 300) {
    throw new Error(data.message);
  }
  return data as T;
};
