import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export function TabContent1() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value ) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Tab 1
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Tab 2
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>
        <MDBListGroup style={{ minWidth: '22rem' }} light>
              <MDBListGroupItem noBorders color='info' className='px-2 mb-2 rounded-2'>
                A simple info list group item
              </MDBListGroupItem>
          </MDBListGroup>
          <MDBListGroup style={{ minWidth: '22rem' }} light>
              <MDBListGroupItem noBorders color='info' className='px-2 mb-2 rounded-2'>
                A simple info list group item
              </MDBListGroupItem>
          </MDBListGroup>
          <MDBListGroup style={{ minWidth: '22rem' }} light>
              <MDBListGroupItem noBorders color='info' className='px-2 mb-2 rounded-2'>
                A simple info list group item
              </MDBListGroupItem>
          </MDBListGroup>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
            Tab 2 content
        </MDBTabsPane>
        
      </MDBTabsContent>
    </>
  );
}

export default TabContent1;