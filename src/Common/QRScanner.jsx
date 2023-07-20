import React, { useState, useRef } from "react";
import QrScanner from "react-qr-scanner";

const QRScanner = () => {
  const [qrCode, setQrCode] = useState("");
  const qrRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      setQrCode(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    width: "100%",
    maxWidth: "500px",
    margin: "0 auto",
  };

  return (
    <div>
      <h1>Escanea el código QR</h1>
      <div style={previewStyle}>
        <QrScanner
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
          ref={qrRef}
        />
      </div>
      {qrCode && (
        <div>
          <h2>Resultado del escaneo:</h2>
          <p>{qrCode}</p>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
