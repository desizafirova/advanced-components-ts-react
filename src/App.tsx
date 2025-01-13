import Button from './components/Button';

function App() {
  return (
    <main>
      <p>
        <Button el="anchor" href="http://google.com">
          An Anchor
        </Button>
      </p>
      <p>
        <Button el="button">A Button</Button>
      </p>
    </main>
  );
}

export default App;
