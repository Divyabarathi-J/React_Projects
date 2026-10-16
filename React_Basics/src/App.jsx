// // // import { useState } from 'react'
// // // import heroImg from './assets/hero.png'
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from './assets/vite.svg'
// // // import './App.css'

// // // function App() {
// // //   const [count, setCount] = useState(0)

// // //   return (
// // //     <>
// // //       <section id="center">
// // //         <div className="hero">
// // //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// // //           <img src={reactLogo} className="framework" alt="React logo" />
// // //           <img src={viteLogo} className="vite" alt="Vite logo" />
// // //         </div>
// // //         <div>
// // //           <h1>Get started</h1>
// // //           <p>
// // //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// // //           </p>
// // //         </div>
// // //         <button
// // //           type="button"
// // //           className="counter"
// // //           onClick={() => setCount((count) => count + 1)}
// // //         >
// // //           Count is {count}
// // //         </button>
// // //       </section>

// // //       <div className="ticks"></div>

// // //       <section id="next-steps">
// // //         <div id="docs">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#documentation-icon"></use>
// // //           </svg>
// // //           <h2>Documentation</h2>
// // //           <p>Your questions, answered</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://vite.dev/" target="_blank">
// // //                 <img className="logo" src={viteLogo} alt="" />
// // //                 Explore Vite
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://react.dev/" target="_blank">
// // //                 <img className="button-icon" src={reactLogo} alt="" />
// // //                 Learn more
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //         <div id="social">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#social-icon"></use>
// // //           </svg>
// // //           <h2>Connect with us</h2>
// // //           <p>Join the Vite community</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://github.com/vitejs/vite" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#github-icon"></use>
// // //                 </svg>
// // //                 GitHub
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://chat.vite.dev/" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#discord-icon"></use>
// // //                 </svg>
// // //                 Discord
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://x.com/vite_js" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#x-icon"></use>
// // //                 </svg>
// // //                 X.com
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#bluesky-icon"></use>
// // //                 </svg>
// // //                 Bluesky
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       </section>

// // //       <div className="ticks"></div>
// // //       <section id="spacer"></section>
// // //     </>
// // //   )
// // // }
// // // export default App

// // import React,{useEffect, useState} from 'react';
// // import './App.css';
// // import img from './assets/download (2).webp';
// // import Button from './components/UI/button';

// // const App = () => {
// //   //const [counter, setCounter]=useState(0);
// //   const [data, setData]=useState([]);
// //   useEffect(()=>{
// //     const fetchData = async () => {
// //       const response = await fetch('https://jsonplaceholder.typicode.com/users');
// //       const data = await response.json();
// //       setData(data);
// //     }
// //     fetchData();
// //   }, []);
// //   console.log(data,"data");

    
// //   return (
// //     <div>

// //        {/* <h1>Hello, React!</h1>
// //       <p >Welcome to your React project.</p>
// //       <br></br>
// //       <img src={img} alt="Image" />
// //       <br></br>
// //       <Button name={"Hello, React!"} onclick={() => alert("Hello, React!")}/> */}

// //         {/* <label>Counter: {counter}</label>
// //         <Button welcome="Increment" onclick={()=> setCounter(counter+1)} />
// //           <Button welcome="Decrement" onclick={()=> setCounter(counter-1)} /> */}
 
// //             <div className="user-container">
// //   {data.map((item, key) => {
// //     return (
// //       <div className="user-card" key={key}>
// //         <div className="user-header">
// //           <div className="user-avatar">
// //             {item.name.charAt(0)}
// //           </div>
// //           <div>
// //             <h1>{item.name}</h1>
// //             <p className="user-email">{item.email}</p>
// //           </div>
// //         </div>

// //         <div className="user-details">
// //           <p>
// //             <strong>Address:</strong>{" "}
// //             {item.address.street}, {item.address.suite},{" "}
// //             {item.address.city}, {item.address.zipcode}
// //           </p>

// //           <p>
// //             <strong>Location:</strong>{" "}
// //             {item.address.geo.lat}, {item.address.geo.lng}
// //           </p>

// //           <p>
// //             <strong>Phone:</strong> {item.phone}
// //           </p>

// //           <p>
// //             <strong>Website:</strong>{" "}
// //             <a
// //               href={`https://${item.website}`}
// //               target="_blank"
// //               rel="noreferrer"
// //             >
// //               {item.website}
// //             </a>
// //           </p>
// //         </div>

// //         <div className="company-section">
// //           <h3>Company Information</h3>
// //           <p><strong>{item.company.name}</strong></p>
// //           <p>{item.company.catchPhrase}</p>
// //           <p className="company-bs">{item.company.bs}</p>
// //         </div>
// //       </div>
// //     );
// //   })}
// // </div>
// //     </div>
    
// //   );
// // } 
// // export default App;







import { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://dummyjson.com/recipes?limit=0";
const LIMIT = 8;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  // Store image errors separately for each recipe
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const controller = new AbortController();

    const fetchRecipes = async () => {
      setStatus("loading");
      setError("");

      console.log("Loading recipes...");

      try {
        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        console.log("HTTP Status Code:", response.status);

        if (!response.ok) {
          throw new Error(
            `HTTP Error ${response.status}: ${response.statusText}`
          );
        }

        const result = await response.json();

        if (!Array.isArray(result.recipes)) {
          throw new Error("Invalid recipes data received");
        }

        setRecipes(result.recipes);
        setImageErrors({});

        if (result.recipes.length > 0) {
          setStatus("success");
          console.log(
            `SUCCESS: ${result.recipes.length} recipes loaded`
          );
        } else {
          setStatus("empty");
          console.warn("EMPTY: No recipes found");
        }
      } catch (err) {
        if (err.name === "AbortError") return;

        console.error("API REQUEST FAILED:", {
          message: err.message,
          error: err,
        });

        setError(err.message || "Network connection failed");
        setStatus("error");
      }
    };

    fetchRecipes();

    return () => controller.abort();
  }, [retry]);

  const categories = [
    "All",
    ...new Set(recipes.map((recipe) => recipe.cuisine)),
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || recipe.cuisine === category;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(
    filteredRecipes.length / LIMIT
  );

  const displayedRecipes = filteredRecipes.slice(
    (page - 1) * LIMIT,
    page * LIMIT
  );

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleCategory = (value) => {
    setCategory(value);
    setPage(1);
  };

  const handleImageError = (recipe) => {
    console.error("IMAGE LOADING ERROR:", {
      recipe: recipe.name,
      url: recipe.image,
      message: "Failed to load recipe image",
    });

    setImageErrors((previous) => ({
      ...previous,
      [recipe.id]: true,
    }));
  };

  const retryImage = (recipe) => {
    setImageErrors((previous) => ({
      ...previous,
      [recipe.id]: false,
    }));

    // Force a fresh request for the image
    const image = new Image();

    image.onload = () => {
      console.log(`Image loaded successfully: ${recipe.name}`);
    };

    image.onerror = () => {
      console.error(`Image retry failed: ${recipe.name}`);

      setImageErrors((previous) => ({
        ...previous,
        [recipe.id]: true,
      }));
    };

    image.src = `${recipe.image}?retry=${Date.now()}`;
  };

  return (
    <div className="container">
      <header className="header">
        <h1>
          Recipe Book<span>.</span>
        </h1>
        <p>Find something delicious.</p>
      </header>

      <section className="filters">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => handleCategory(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </section>

      {status === "loading" && (
        <div className="message">
          <div className="spinner"></div>
          <p>Loading recipes...</p>
        </div>
      )}

      {status === "error" && (
        <div className="message error">
          <h3>Unable to load recipes</h3>
          <p>{error}</p>
          <button onClick={() => setRetry((r) => r + 1)}>
            Try Again
          </button>
        </div>
      )}

      {status === "empty" && (
        <div className="message">
          <h3>No recipes available</h3>
          <p>Please try again later.</p>
          <button onClick={() => setRetry((r) => r + 1)}>
            Reload
          </button>
        </div>
      )}

      {status === "success" && (
        <>
          <div className="section-title">
            <h2>
              {category === "All" ? "All Recipes" : category}
            </h2>
            <span>{filteredRecipes.length} recipes</span>
          </div>

          {filteredRecipes.length === 0 ? (
            <div className="message">
              <h3>No matching recipes</h3>
              <p>Try another name or category.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setPage(1);
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="recipe-grid">
                {displayedRecipes.map((recipe) => (
                  <article className="recipe-card" key={recipe.id}>
                    {imageErrors[recipe.id] ? (
                      <div className="image-error">
                        <p>Image failed to load</p>
                        <button
                          onClick={() => retryImage(recipe)}
                        >
                          Retry Image
                        </button>
                      </div>
                    ) : (
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        onError={() => handleImageError(recipe)}
                      />
                    )}

                    <div className="recipe-info">
                      <p className="category">
                        {recipe.cuisine}
                      </p>

                      <h3>{recipe.name}</h3>

                      <div className="recipe-details">
                        <span>⭐ {recipe.rating}</span>
                        <span>
                          {recipe.prepTimeMinutes} min
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="pagination">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  ← Previous
                </button>

                <span>
                  Page {page} of {totalPages}
                </span>

                <button
                  disabled={page >= totalPages}
                  onClick={() => setPage(page + 1)}
                >
                  Next →
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;


// import {useState} from "react";
// import Title from "./Title";
// function App()
// {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Title count={count} />
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </>
//   );
// }

// export default App;