import Card from './Components/Card';
import dataset1 from './data/dataset1'
import './style.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  const datasetElements = dataset1.map(dataset =>{
    //render card only if image exists
    if(dataset.image !== ""){
    return <Col md={4}> 
    <Card 
      title={dataset.title}
      link={dataset.link}
      linkText={dataset.linkText}
      body={dataset.body}
      img={dataset.image}
      category={dataset.category}/>
    </Col>
    }
    //returns null when the listed conditions are not matched
    return null
  })
  return (
    <Container fluid>
      <Row>
        {datasetElements}
      </Row>
    </Container>
  );
}

export default App;
