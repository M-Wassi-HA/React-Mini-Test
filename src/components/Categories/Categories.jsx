
// import "./Categories.css";
// import { useState, useEffect } from "react";
// import axios from "axios";



// function Categories({ data }) {
//   console.log(data);
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);

//   const fetchData = async () => {
//     try {
//       const categoryResponse = await axios.get("https://api.escuelajs.co/api/v1/categories");
//       setCategories(categoryResponse.data);


//       const productResponse = await axios.get("https://api.escuelajs.co/api/v1/products");
//       setProducts(productResponse.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);


//   return (


//     <div className="edc">
//       <div>
//         <h1 className="featured">Featured Categories</h1>
//       </div>
//       <div className="categoryChild">

//       {categories.map((category, index) => (
//         <div className="category" key={index}>
//           <h3>{category.name}</h3>
//           </div>
              
//       ))}
  
//     </div>
//     </div>


//   );

// };

// export default Categories;


import "./Categories.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Categories({ data }) {
  console.log(data);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const categoryResponse = await axios.get("https://api.escuelajs.co/api/v1/categories");
      setCategories(categoryResponse.data);

      const productResponse = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProducts(productResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Limit categories to 10
  const limitedCategories = categories.slice(0, 18);
   

  return (
    <div>
      <div>
        <h1 className="featured">Featured Categories</h1>
      </div>
      <div className="categoryChild">
        {limitedCategories.length > 0 ? (
          limitedCategories.map((category, index) => (
            <div className="category" key={index}>
              <h3>{category.name}</h3>
            </div>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </div>
    </div>
  );

}

export default Categories;




  

