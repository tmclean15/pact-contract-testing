import { useState } from "react";
import { getData } from "@pact-contract-testing/api-services";
import { Data } from "@pact-contract-testing/shared-types";

export function App() {
  const [data, setData] = useState<Data[]>([]);

  const handleGetData = () => {
    getData({
      baseURL: window.location.origin + "/api",
    })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handleGetData}>Get Data</button>

      <pre style={{ margin: "2rem", width: "50%" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default App;
