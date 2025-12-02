import React from "react";

export default () => {
    return (
    <>
        <div className="py-4">
            <h1 className="h4">Maps</h1>
            <p className="text-muted mt-2">
                Halaman Maps masih dalam tahap pengembangan.
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
                <span className="text-muted">Maps Placeholder</span>
            </div>
        </div>
    </>
    );
}; 