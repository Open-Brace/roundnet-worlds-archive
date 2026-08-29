import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171815",
          borderRadius: 16,
          color: "#d8ff45",
          fontSize: 38,
          fontFamily: "Arial",
        }}
      >
        ●
      </div>
    ),
    size,
  );
}
