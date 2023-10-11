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
import axios from "axios";

const baseURL ="https://localhost:7209/api/coupon";

export function TabContent1() {
  const [basicActive, setBasicActive] = useState('tab1');
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get('${baseURL}').then((respose) => {
        setPost(respose.data);
  });
},[]);

    post.map(coupon => console.log({coupon}));

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
            {post.map(coupon => (
                <MDBListGroupItem noBorders color='info' className='px-2 mb-2 rounded-2'>
                {coupon.name}
              </MDBListGroupItem>
            ))}
              
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