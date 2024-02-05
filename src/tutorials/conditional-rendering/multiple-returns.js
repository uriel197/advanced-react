import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default User");

  const getUser = async () => {
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        const user = await response.json();
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>We have encountered an Error!</h1>
      </div>
    );
  }
  return (
    <>
      <h1>{user}</h1> {/* 1 */}
    </>
  );
};

export default MultipleReturns;

/************* COMMENTS **************

***1:  our return statement, {user} is accessing the value stored in the user state variable declared using useState().

*/
