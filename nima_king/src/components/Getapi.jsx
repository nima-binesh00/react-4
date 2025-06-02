import React from "react";
import { useState, useEffect } from "react";
const Abi = "https://jsonplaceholder.typicode.com/posts";

export default function Getapi() {
  const [loading, setloading] = useState();
  useEffect(() => {
    fetch(Abi)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setloading(res);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <ul>
          {loading.map((item, keys) => {
            const { userId, id, title, body } = item;
            // const { userId, id, title, body } = Object.keys(item);
            return (
              <li key={keys} style={{ border: "1px solid black" }}>
                userId:{userId}
                <br /> id:{id} <br />
                title:{title}
                <br /> body:{body}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
