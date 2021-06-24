import logo from "./logo.svg";
import "./App.css";
import {
  incrementCounter,
  decrementCounter,
  fetchDataSuccess,
  fetchData,
} from "./redux/actions";
import { connect } from "react-redux";

function App({
  incrementCounterAction,
  decrementCounterAction,
  fetchDataAction,
  data,
}) {
  return (
    <div className="App">
      <br />
      <h1>Fetch Some data ?</h1>
      <button onClick={() => fetchDataAction()}>Fetch Data</button>
      {data && console.log(data)}
      {data &&
        data.map((record) => {
          return <li key={record.id}>{record.body}</li>;
        })}
    </div>
  );
}

const mapStateToProps = ({ posts }) => {
  const { data } = posts;
  return {
    data,
  };
};

export default connect(mapStateToProps, {
  incrementCounterAction: incrementCounter,
  decrementCounterAction: decrementCounter,
  fetchDataAction: fetchData,
})(App);
