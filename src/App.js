// src/App.js
import React, { useState } from "react";
import ComicForm from "./components/ComicForm";
import ComicDisplay from "./components/ComicDisplay";
import "./App.css";


async function query(data) {
  const response = await fetch(
    "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
    {
      headers: {
        Accept: "image/png",
        Authorization:
          "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}

const App = () => {
  const [comicImages, setComicImages] = useState([]);

  const generateComic = async (textInputs) => {
//     const data = { inputs: textInputs.join("\n") };

    try {
            textInputs.map((textInput) => {
                console.log(1);
                const text = textInput || "dog on sofa";
                query({ inputs: text }).then((response) => {
                        // Use image
                        // const response = await query(data);
                        //       setComicImages([response, ...comicImages]);
                        console.log(response);
                        setComicImages([response, ...comicImages]);
                
                });
        })
      //       const response = await query(data);
      //       setComicImages([response, ...comicImages]);
    } catch (error) {
      console.error("Error generating comic:", error);
      // Handle error, show user feedback
    }
  };

  return (
    <div>
      <h1>Comic Generator</h1>
      <ComicForm generateComic={generateComic} />
      <ComicDisplay comicImages={comicImages} />
    </div>
  );
};

export default App;
