import React, { useState, useEffect } from "react";
import "./Popup.css";
import TextAreaForm from "./Form";

const Popup = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });

  const handleDragStart = (event: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartPos({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isDragging) {
        const div = document.getElementById("draggedDiv");
        if (div) {
          div.style.left = event.clientX - dragStartPos.x + "px";
          div.style.top = event.clientY - dragStartPos.y + "px";
        }
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStartPos]);

  return (
    <div
      id="draggedDiv"
      className={isDragging ? "dragging l-popup" : "l-popup"}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "400px",
        height: "300px",
        userSelect: isDragging ? "none" : "all",
        cursor: isDragging ? "grabbing" : "grab",
        zIndex: "500",
      }}
    >
      <div style={{ padding: "16px" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {isDragging ? <p>クリック中</p> : <p>クリックされていません</p>}
          <TextAreaForm />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          width: "400px",
          height: "300px",
          userSelect: isDragging ? "none" : "all",
          cursor: isDragging ? "grabbing" : "grab",
          zIndex: "600",
        }}
        onMouseDown={handleDragStart}
      ></div>
    </div>
  );
};

export default Popup;

/*const Popup = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = (event: React.MouseEvent) => {
    setIsDragging(true);
    const { clientX, clientY } = event;
    const offsetX = clientX - position.x;
    const offsetY = clientY - position.y;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleDrag = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const { clientX, clientY } = event;
    setPosition((prevPosition) => ({
      x: clientX - dragOffset.x,
      y: clientY - dragOffset.y,
    }));
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={isDragging ? "dragging l-popup" : "l-popup"}
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "400px",
        height: "300px",
        userSelect: isDragging ? "none" : "all",
        cursor: isDragging ? "grabbing" : "grab",
        zIndex: "500",
      }}
    >
      <div style={{ padding: "16px" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {isDragging ? <p>クリック中</p> : <p>クリックされていません</p>}
          <TextAreaForm />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          width: "400px",
          height: "300px",
          userSelect: isDragging ? "none" : "all",
          cursor: isDragging ? "grabbing" : "grab",
          zIndex: "600",
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
      ></div>
    </div>
  );
};

export default Popup;
*/
