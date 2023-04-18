export const fetch = async () => {
  const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;

  const res = await fetch(url);
  const result = await res.json();

  return result;
};
