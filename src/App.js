import { Outlet } from 'react-router-dom';
import { Layout, Segmented } from 'antd';
import './App.css';

const { Header, Content} = Layout

function App() {
  return (
    <div className="App">
      <Layout>
        <div id='header'>
          <Segmented block options={['Realtime', 'Overview']} size='large' />
        </div>
        <div id='content'>
          <Outlet />
        </div>
      </Layout>
    </div>
  );
}

export default App;
