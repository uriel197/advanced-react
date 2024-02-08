import React, { useState } from "react";

/* 1 */
const Tour = ({ id, image, name, price, info, removeItem }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          {/* 2 */}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeItem(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

/*************** COMMENTS **************

*** 1: here we are destructuring the props we passed to this component into its many properties.

*** 2: info.substring(0, 200) is a method call that extracts a substring from the info string. Let me explain in detail:

substring(startIndex, endIndex): This method is used to extract characters from a string between two specified indices. The startIndex parameter specifies the position where to start the extraction (zero-based), and the endIndex parameter specifies the position (up to, but not including) where to end the extraction.
In the provided code, info.substring(0, 200) means it's extracting characters from the info string starting from index 0 up to (but not including) index 200. So, it effectively returns the first 200 characters of the info string.

*/
