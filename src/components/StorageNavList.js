import React from "react";

function ControlledTabs() {
  return (
    <>
      {/* <Router>
        <a href={`/${whoami.username}/storage/videos`}>videos</a>
        <Route
          exact
          path={`/${whoami.username}/storage/videos`}
          render={() => <VideosList fetchvideos={fetchvideos} />}
        />
      </Router> */}
      {/* <Tabs
        className="mb-5 mt-5 justify-content-between"
        style={{ paddingLeft: "180px", paddingRight: "180px" }}
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="images" title="Images"></Tab>
        <Tab eventKey="videos" title="Videos"></Tab>
        <Tab eventKey="docs" title="Docs"></Tab>
      </Tabs> */}
    </>
  );
}

export default ControlledTabs;
