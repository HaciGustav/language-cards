import Header from './components/Header';
import Card from './components/Card';
import Container from 'react-bootstrap/Container';
function App() {
    return (
        <div>
            <Container className="text-center">
                <Header />
                <Card />
            </Container>
        </div>
    );
}

export default App;
