import Card, { CardVariant } from './components/Card';

function App() {
  const handleOnClick = () => alert('onClick');

  return (
    <div>
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
        onclick={handleOnClick}
      >
        <div>Потомок</div>
      </Card>
    </div>
  );
}

export default App;
