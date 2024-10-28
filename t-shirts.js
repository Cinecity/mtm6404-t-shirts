const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]



const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

const App = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>T Shirts</h1>
      <Grid />
    </div>
  );
}

const Grid = () => {
  return (
      <div className="grid">
          {tshirts.map((tshirt) => (<Tshirt shirt={tshirt}/>))}
      </div>
  );
}

const Tshirt = ({ shirt }) => {
  

  const [quantityChosen, setQuantityChosen] = React.useState(1);
  const [stockAvailable, setStockAvailable] = React.useState(shirt.stock);
  const availableOptions = [];
  const imgSrc = `./images/${shirt.image}`;

  
  for (let i = 1; i <= stockAvailable; i++) {
      availableOptions.push(<option key={i} value={i}>{i} item(s)</option>);
  }

  
  const handleSelection = (e) => {
      setQuantityChosen(prevValue => {
          return parseInt(e.target.value);
      });
  };
  
  const handleBuy = () => {
      if (quantityChosen > 0 && quantityChosen <= stockAvailable) {
          setStockAvailable((prevStock) => {
              const newStock = prevStock - quantityChosen;
              return newStock;
          });
          setQuantityChosen(1);
      } else {
          window.alert("Not enough to buy");
      }
  };

  React.useEffect(() => {
      if (stockAvailable === 1 && quantityChosen === 0) {
          setQuantityChosen(1);
      }
  }, [stockAvailable]);

  return (
    <div id="Tshirt" style={{
      width: '100%',
      margin: '5%',
      backgroundColor: '#f0f0f0',
      padding: '8%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <img src={imgSrc} alt={shirt.image} style={{
        width: '92%',
        margin: '6%',
        padding: '6%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}/>
      <h2 style={{ fontSize: '120%' }}>{shirt.title}</h2>
      <p style={{ fontSize: '110%', color: '#555' }}>${shirt.price.toFixed(2)}</p>
  
      {stockAvailable > 0 ? 
      (<>
      <p style={{ fontSize: '95%', color: '#888', marginBottom: '6%' }}>{stockAvailable} left</p>
      <select
      value={quantityChosen}
      onChange={handleSelection}
      >
          {availableOptions}
      </select>
      <button onClick={handleBuy}
      style={{
          width: '100%',
          height: '12vh',
          backgroundColor: '#0069d9',
          border: 'none',
          borderRadius: '5px',
          color: '#fff',
      }}>
          Buy
      </button>
      </>
      ) : 
      (
      <p className="nostock" style={{ fontSize: '95%', color: '#ff3333' }}>Out of stock</p>
      )}
      
    </div>
  );
  
};



root.render(<App />);