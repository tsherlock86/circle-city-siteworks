import { ImageResponse } from "next/og";

export const alt = "Circle City Siteworks — Indianapolis websites, online stores, and custom business tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#f4efe5",
          color: "#062d50",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-120px",
            width: "520px",
            height: "520px",
            border: "82px solid #b83f1c",
            borderRadius: "50%",
            opacity: 0.95,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", zIndex: 2 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 900, letterSpacing: 1 }}>CIRCLE CITY SITEWORKS</div>
            <div style={{ marginTop: 26, fontSize: 82, lineHeight: 0.93, fontWeight: 900, maxWidth: 830 }}>
              WEBSITES THAT WORK AS HARD AS YOU DO.
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%" }}>
            <div style={{ fontSize: 28, maxWidth: 760 }}>
              Websites · Online Stores · Custom Business Tools
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#b83f1c" }}>
              INDIANAPOLIS
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
