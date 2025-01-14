import Form from './components/Form';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  function handleSave(data: unknown) {
    // the built-in "as" keyword allows us to convert the type TS knows to a different type, if we know better than TS what a type is. Age here is also a string, because values entered into input fields are always type of string when we extract them. Even if the input field had type number(that's just affecting how it will be presented, but it's not affecting how the value is extracted).
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }
  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
