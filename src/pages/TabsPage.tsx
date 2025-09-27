import { useNavigate, useParams, Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { tabs } from '../utils/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const navigate = useNavigate();

  const selectedIndex = tabs.findIndex(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>

      <Tabs
        selectedIndex={selectedIndex === -1 ? undefined : selectedIndex}
        onSelect={index => navigate(`/tabs/${tabs[index].id}`)}
      >
        <TabList>
          {tabs.map((tab, index) => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              className={{
                'is-active': selectedIndex === index,
              }}
              as="li"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id}>
            <div className="block" data-cy="TabContent">
              {tab.content}
            </div>
          </TabPanel>
        ))}
      </Tabs>

      {/* Show fallback when no tab is selected */}
      {selectedIndex === -1 && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
