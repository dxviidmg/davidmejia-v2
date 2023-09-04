import { useState } from "react";
import { Image } from "react-bootstrap";
import img1 from "./../../../assets/Foto.jpeg"

export const Photo = () => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleHover = () => {
      setIsHovered(!isHovered);
    };
  
    return (
      <div className="image-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Image roundedCircle src={ img1} className="w-75" />
      </div>
    );
  };