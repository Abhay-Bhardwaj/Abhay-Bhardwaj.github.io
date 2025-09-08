import React from "react";

// Use RESUME_URL from environment variable if available, else fallback to default
const RESUME_URL = process.env.RESUME_URL || "https://drive.google.com/file/d/1FgjZA2Abii1LDsDS6a0JWK3jjHVf98N0/preview";

const Resume = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <iframe
        src={RESUME_URL}
        title="Resume"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allow="autoplay"
      />
    </div>
  );
};

export default Resume;
