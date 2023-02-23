import { Provider } from "react-redux";
import "./App.css";
import RepositoriesList from "./component/RepositoriesList";
import { store } from "./state";

function App() {
    return (
        <Provider store={store}>
            <div>
                <h1>Search</h1>
                <RepositoriesList />
            </div>
        </Provider>
    );
}

export default App;
