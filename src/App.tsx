import React from "react";
import Portpolio from "./page/Portpolio";
// import "./styles/style.scss";
// import "./styles/plugins.scss";

// xử dụng alias để fixx đường link tuyệt đối mà không dùng đường src tương đối
// https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa
import "@/styles/style.scss";
import "@/styles/plugins.scss";

function App() {
  return (
    <>
      <Portpolio />
    </>
  );
}

export default App;
