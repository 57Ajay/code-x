import MyComponent from './MyComponent.tsx';
import { MyProvider } from './MyProvider.tsx';

const App = () => {
  return (
    <div>
      <MyProvider>
       <MyComponent />
      </MyProvider>
      
    </div>
  );
};

export default App;
