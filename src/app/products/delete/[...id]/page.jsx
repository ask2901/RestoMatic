import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const [goToProducts, setGoToProducts] = useState(false);

  if (id) {
    const response = await fetch("http://localhost:3000/api/products", {
      method: "DELETE",
      body: JSON.stringify({ _id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  } 
  else {

    return;
    
  }

  setGoToProducts(true);
  if (goToProducts) {
    router.push("/products");
  }

  return <div className="div"></div>;
};

export default page;
