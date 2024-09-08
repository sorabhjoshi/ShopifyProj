import React from "react";
import "./Dashboard.css";
import {
  AppProvider,
  BlockStack,
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Icon,
  InlineStack,
  Layout,
  List,
  Page,
  Text,
  TextField,
  ThemeProvider,
  Thumbnail,
} from "@shopify/polaris";
import PieChart from "./PieChart.js/PieChart";
import { OrderIcon, ViewIcon } from "@shopify/polaris-icons";

const Dashboard = () => {
  return (
    <>
      <div className="dash1">
        <Text variant="heading3xl" as="h2">
             Welcome, John Mathew!!
        </Text>
        <div className="card-container">
          <Card className="card1" roundedAbove="sm" >
           <InlineStack InlineStack gap={500}>
           <Text as="h2" variant="headingMd" >Order Sync Successful!</Text>
            <Text as="p" >
              Your order details from the last 30 days have been successfully
              synced. Check them out now!
            </Text>
            <Button className="card-content" variant="primary">Explore Your Orders</Button>
           </InlineStack>
          </Card>
          <Card background="bg-surface-warning" roundedAbove="sm">
            <InlineStack gap={500}>
          <Text as="h2" variant="headingMd" >Customize Customer Notification</Text>
            <Text as="h2" variant="warning">
              Tailor Your Email Experience: Set the Sender Email and Choose
              Notification Triggers
            </Text>
            <Button variant="primary">Add tracking number</Button>
            </InlineStack>
          </Card>
          <Card background="bg-surface-success" roundedAbove="sm">
            <InlineStack gap={600}>
          <Text as="h2" variant="headingMd" >Your Tracking Link has been generated</Text>
            <Text as="h2" variant="">
              Include the Link to Your Store's Navigation Menu.
            </Text>
            <ButtonGroup>
              <Button>Copy Link</Button>
              <Button variant="primary">Go To Navigation Menu</Button>
            </ButtonGroup>
            </InlineStack>
          </Card>
        </div>
      </div>

      <div className="dash2" style={{ padding: "2rem 4rem 2rem 4rem" }}>
        <BlockStack gap={600}>
          <Text as="h1" variant="headingXl">
            Instant Dive into Your Performance Metrics
          </Text>

          <ButtonGroup roundedAbove="xs">
            <Button size="slim">Lifetime</Button>
            <Button>Last Week</Button>
            <Button>Last Month</Button>
            <Button>Last Year</Button>
            <Button>Customize Time Line</Button>
          </ButtonGroup>
        </BlockStack>
        <div className="three-column-container">
        <Card sectioned title="Shipment Updates">
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: '16px', // Add space below the header
    }}
  >
    <Text as="p" variant="headingSm">Shipment Updates</Text>
    <Text as="p" variant="headingSm" alignment="end">
      Total Orders: 394
    </Text>
  </div>
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      width: "200%", // Changed to 100% to fit within the card
      overflowX: "auto", // Changed to auto to enable horizontal scrolling
      marginBottom: '16px', // Add space below the button group
    }}
  >
    <InlineStack gap={400}> {/* Adjusted gap for spacing between buttons */}
      <Button size="slim">Delivered</Button>
      <Button>Out for delivery</Button>
      <Button>Intransit</Button>
      <Button>Pending</Button>
      <Button>Expired</Button>
    </InlineStack>
  </div>
  <PieChart />
</Card>
<div style={{backgroundColor: 'green', color:"white", borderRadius:"10px"}}>
          <Card background="bg-surface-" roundedAbove="400" className="c2">
           <div style={{ height: '24.4rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Text as="p" variant="headingMd">Star Facts about your orders!!!</Text>
            <Text as="p">
              There are 8 shipments out for delivery for more than 3 days.
            </Text>
            <Text as="p"> There are 5 shipments in exception right now</Text>
            <Text as="p"> The maximum chargebacks are from Miami.</Text>
            <Button>Check Orders Page</Button>
            </div>
          </Card>
          </div>

          <Card sectioned><div style={{ height: '24rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

          <Text as="p" variant="headingMd">
          Tracking Page Views Vs Orders
            </Text><Text as="p">
              Understand user engagement and optimize tracking for better
              customer experiences.
            </Text>
            <div style={{backgroundColor:"#f8efef",}}>
            <Card  background="bg-surface-">
              
                <Text as="h2" variant="headingSm">
                  Orders
                </Text>
                <Box paddingBlockStart="200">
                  <Text as="p" variant="bodyMd">
                    80
                  </Text>
                </Box>
              
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent:"end", }}> 
              <Icon
  source={OrderIcon}
  tone="base"
/>
              </div>
            </Card>
            </div>
            <div style={{backgroundColor:"#FFC879"}}>
            <Card background="bg-surface-">
                <Text as="h2" variant="headingSm">
                  Tracking Page Views
                </Text>
                <Box paddingBlockStart="200">
                  <Text as="p" variant="bodyMd">
                    44
                  </Text>
                </Box>
              <div >
              <Icon 
  source={ViewIcon}
  tone="base"
/>
              </div>
            </Card>
            </div>
            </div></Card>
        </div>
      </div>

      <div className="dash3"  style={{padding:"4rem"}}>
        <Text variant="heading2xl" >Discover the Heart of Our Functionality</Text>
        

        <div className="grid-container"  style={{paddingTop:"2rem"}}>
          {/* First (left) column */}
          <div className="grid-item">
            <Card title="Feature 1" sectioned>
              <div style={{ height:"24rem",display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Text as="h1"variant="headingMd" >
                Elevate Your Brand Aesthetics With Custom Tracking Page Styles
              </Text>
              <Text as="h1">
                Immerse your customer in a branded experience by persionlizing
                the colors on your tracking page.
              </Text>
              <TextField
      label="Accent Color"
      autoComplete="off"
    />
    <TextField
      label="Text Color"
      autoComplete="off"
    />
    <TextField
      label="Background Color"
      autoComplete="off"
    /><ButtonGroup>
    <Button>Preview</Button>
    <Button variant="primary">Apply Colors</Button>
    </ButtonGroup>
    </div>
            </Card>
          </div>

          {/* Middle two stacked columns */}
          <div className="grid-item-middle">
            <Card title="Feature 2" sectioned alignment="start" ><BlockStack gap={600}>
              <Text as="h2" variant="headingSm">
                Exclusive Onboarding Support for High-Volume Brands
              </Text>
              <Text as="p" >
                Unlock persionlized guidance Book a one-on-one onboarding call to streamline your experience
              </Text>
              <InlineStack>
              <Button variant="primary">
                Schedule A CAll
              </Button>
              </InlineStack>
              </BlockStack>
            </Card>

            <Card title="Feature 3" sectioned>
            <Text as="h2" variant="headingSm">
                Exclusive Onboarding Support for High-Volume Brands
              </Text>
              <Text as="p" >
                Unlock persionlized guidance Book a one-on-one onboarding call to streamline your experience
              </Text>
              <InlineStack>
              <Thumbnail/>
              <Thumbnail/>
              <Thumbnail/>
              <Thumbnail/>
              <Thumbnail/>
              </InlineStack>

              <Button variant="primary">Explore Integrations</Button>
            </Card>
          </div>

          {/* Fourth (right) column */}
          <div className="grid-item" style={{}}>
            <Card title="Feature 4" sectioned>
              <div style={{height:"24rem",display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Text as="h2" variant="headingSm">
               Seamlessly Integrate Custom HTML Elements
              </Text>
              <Text as="p" >
               Unleash creativity with out Custom HTMl feature, Add link,custom messages, or any HTML content to elevate the tracking page experience for your customers.
              </Text>

              <TextField
      label="HTML Link"
      value={'Value'}
      multiline={6}
      autoComplete="off"
    />    <ButtonGroup>
            <Button>Preview</Button>
            <Button variant="primary">Apply changes</Button>
            </ButtonGroup>
            </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
