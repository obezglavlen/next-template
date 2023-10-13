export const fetcher = ([url, ...$args]: [string, any[]]) =>
  fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`${res.status}`);
  });
