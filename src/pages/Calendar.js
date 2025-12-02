import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

export default () => {
  return (
    <>
        <div className="py-4">
            <h1 className="h4">Calendar</h1>
            <p className="text-muted mt-2">
            Halaman Calendar masih dalam tahap pengembangan.
            </p>
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
        </div>
    </>
  );
};
