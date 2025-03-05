import { ContextAPIProvider } from "./hooks/ContextAPI/ContextAPI";
import { ButtonComponent, ContextAPIComponent } from "./hooks/ContextAPI/ContextAPIComponent";


export default function App() {
  return (
    <ContextAPIProvider>
      <ContextAPIComponent />
      <ButtonComponent></ButtonComponent>
    </ContextAPIProvider>
  );
}
