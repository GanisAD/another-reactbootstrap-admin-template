import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapPin } from '@fortawesome/free-solid-svg-icons'; // Ganti icon yang relevan
import { Breadcrumb } from '@themesberg/react-bootstrap';

export default () => {
    return (
    <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <2div className="d-block mb-4 mb-md-0">
                <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                    <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                    <Breadcrumb.Item>Volt</Breadcrumb.Item>
                    <Breadcrumb.Item active>Maps</Breadcrumb.Item> {/* <--- Ganti menjadi Maps */}
                </Breadcrumb>
                <h4>Maps</h4>
                <p className="mb-0">Find your location and routes.</p>
            </div>
        
        </div>
        <div 
            style={{
            width: "100%",
            height: "500px",
            border: "1px dashed #ced4da",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}
        >
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6921781667456!2d112.7911825760566!3d-7.275824292731277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya%20(PENS)!5e0!3m2!1sen!2sid!4v1761661320376!5m2!1sen!2sid" style={{ width: "100%", height: "100%" }}></iframe>
        </div>
    </>

    );
}; 