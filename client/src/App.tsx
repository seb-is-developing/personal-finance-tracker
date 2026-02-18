import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState<string>("Checking...");

  useEffect(() => {
    axios
      .get("/api/health")
      .then((res) => {
        setStatus(res.data.status);
      })
      .catch(() => {
        setStatus("Error connecting to API");
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Personal Finance Tracker</h1>
      <p>API Status: {status}</p>
    </div>
  );
}

export default App;
