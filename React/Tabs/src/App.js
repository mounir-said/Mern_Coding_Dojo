import './App.css';
import Tabs from './components/Tabs';


function App() {
  const tabs = [
    {title: "Tab 1", content: "Tab 1 content is showing here"}, 
    {title: "Tab 2", content: "Tab 2 content is showing here"}, 
    {title: "Tab 3", content: "Tab 3 content is showing here"}
  ];

  return (
    <Tabs tabs={tabs}/>
  );
}

export default App;