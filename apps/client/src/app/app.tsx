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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handleGetData}>Get Data</button>

      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
}

export default App;
