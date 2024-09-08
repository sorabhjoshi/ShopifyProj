import React, { useCallback, useState } from 'react';
import { ActionList, Button, ButtonGroup, Card, Popover, TextField } from '@shopify/polaris';

function Navbar() {
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Tracking Page
    </Button>
  );

  return (
    <div style={{ borderBottom: "1px solid black"}}>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height:"30px"}}>
          <div>
            <ButtonGroup>
              <Button variant="tertiary">Home</Button>
              <Button variant="tertiary">Orders</Button>
              <Button variant="tertiary">Integrations</Button>
              <Popover
                active={popoverActive}
                activator={activator}
                autofocusTarget="first-node"
                onClose={togglePopoverActive}
              >
                <ActionList
                  actionRole="menuitem"
                  items={[{ content: 'Orders' }, { content: 'Cancelled' }]}
                />
              </Popover>
              <Button variant="tertiary">Partner with Us</Button>
            </ButtonGroup>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <TextField labelHidden label="Search" placeholder="Search" />
            <Button plain>Account</Button>
            <Button plain>Settings</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Navbar;
