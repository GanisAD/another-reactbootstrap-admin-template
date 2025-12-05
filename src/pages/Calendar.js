import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

export default () => {
  return (
    <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="d-block mb-4 mb-md-0">
            <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
              <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
              <Breadcrumb.Item>Volt</Breadcrumb.Item>
              <Breadcrumb.Item active>Calendar</Breadcrumb.Item> {/* <--- Ganti menjadi Maps */}
            </Breadcrumb>
            <h4>Calendar</h4>
            <p className="mb-0">Important Schedule and Upcoming release</p>
          </div>
        </div>
        <div 
        style={{
            width: "100%",
            height: "300px",
            border: "1px dashed #ced4da",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <span className="text-muted">Calendar Placeholder</span>
        </div>
    </>
  );
};
