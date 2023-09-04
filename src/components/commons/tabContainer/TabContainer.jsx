import { Row, Nav, Tab } from "react-bootstrap";
import './tabContainer.css'


export const TabContainer = ({ classifications, contents }) => {
  return (
    <Tab.Container id="contents-tabs" defaultActiveKey="0">
      <Nav
        variant="pills"
        className="nav-pills justify-content-center align-items-center"
        id="contents-tab"
      >
        {classifications.map((classification, index) => {
          return (
            <Nav.Item key={index}>
              <Nav.Link eventKey={index}>{classification}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>

      <Tab.Content>
        {contents.map((content, index) => {
          return (
            <Tab.Pane key={index} eventKey={index}>
              <Row>{content}</Row>
            </Tab.Pane>
          );
        })}
      </Tab.Content>
    </Tab.Container>
  );
};
