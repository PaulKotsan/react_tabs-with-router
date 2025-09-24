import { Outlet, useParams } from 'react-router-dom';
import { TabsList } from '../components/TabsList';
import { tabs } from '../utils/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList />

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : <p>Please select a tab</p>}
      </div>

      <Outlet />
    </>
  );
};
