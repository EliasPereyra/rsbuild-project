import "./App.css";

const products = [
  {
    id: 1,
    name: "Product 1",
    description:
      "This is a long description for Product 1. It's really long. And it goes on and on and on.",
    category: "Category 1",
  },
  {
    id: 2,
    name: "Product 2",
    description:
      "This is a long description for Product 2. It's really long. And it goes on and on and on.",
    category: "Category 2",
  },
  {
    id: 3,
    name: "Product 3",
    description:
      "This is a long description for Product 3. It's really long. And it goes on and on and on.",
    category: "Category 3",
  },
];

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <small>{product.category}</small>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
