
const auth = (function(){
    const userName = "admin";
    const userPass = "Admin123";
    const encodedCredentials = btoa(`${userName}:${userPass}`); 

    return function getAuthHeader(){
        return encodedCredentials;
    }
})()

export default async function fetchData() {
  const res = await fetch("https://dummyjson.com/products"
//     ,{
//     method: "GET",
//     headers: {
//       Authorization: `Basic ${auth()}`,
//       "Content-Type": "application/json",
//     },
// }
);
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return data;
}