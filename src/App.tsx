import { Router } from "./router";
import { useAppSelector } from "./store";
import { AppSpinner } from "./ui/Spinner";

function App() {
  const { status } = useAppSelector((state) => state.auth);

  return (
    <>
      <Router />
      {status === "checking" && <AppSpinner centered />}
    </>
  );
}

export default App;
