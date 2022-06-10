
import { ConfigProvider } from 'antd';

import Router from "./router/Router";

export default function App() {

  return (
    <ConfigProvider direction={"ltr"}>
      <Router />
    </ConfigProvider>
  );
}