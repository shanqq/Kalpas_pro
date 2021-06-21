import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Sidebar from './Sidebar'
import './Sidebar.css'
import { Button, Card } from 'react-bootstrap'
function App() {

  const [data1, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    fetch('https://api.first.org/data/v1/news')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      }).then(data => {
        console.log(data.data)
        setdata(data.data);
      }).catch(error => {
        console.error("Error loading the data");
        seterror('error loaign');
      }).finally(() => {
        setloading(false);
      })

  }, []);

  return (
    <div className="main-container">
      <Sidebar />
      <div className="main-bar">
        {
          data1.map(data =>
            <div className="card-layout">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title> {data.title}</Card.Title>
                  <Card.Text>
                    {data.summary}
                  </Card.Text>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">{data.published}</cite>
                  </footer>
                  <Card.Link href={data.link}>OPEN NEWS FEED</Card.Link>
                </Card.Body>
                <Card.Img variant="top" src="holder.js/100px180" />
              </Card>
            </div>
          )
        }
      </div>
    </div>
  );

}

export default App;
