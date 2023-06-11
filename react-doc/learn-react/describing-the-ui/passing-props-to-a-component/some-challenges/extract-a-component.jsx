// Extract a Card component from the markup below, and use the children prop to pass different JSX to it:

// Solution
function Card({ children, title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card title="Photo">
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={100}
          height={100}
        />
      </Card>
      <Card title="About">
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
      </Card>
    </div>
  );
}

/* 
Conclusion:
- Foi interessante fazer esse exercício para fixar os conhecimentos em relação a como utilizar o children prop para passar diferentes JSX para ele, como se fosse wrappers
**/
