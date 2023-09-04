import { useState } from "react";
import { Image } from "react-bootstrap";
import img1 from "./../../../assets/Foto.jpeg"

export const Photo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const img2 = "https://scontent.fmex30-1.fna.fbcdn.net/v/t39.30808-6/271182417_4802930113102012_1349076978317061846_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEyf7EBLHKUlrfPX4aOtZjdTi7H4B9w5MVOLsfgH3DkxbF0-3S9wknseZUxkL2zT6Y-HAiry2zpqj646Inpne-L&_nc_ohc=Ir5SsFHew8kAX-j4rjP&_nc_ht=scontent.fmex30-1.fna&oh=00_AfBL8Qm4Hioj0smIn3vBOL_I9ht9TIoNe23DuOR2GnDPhQ&oe=64CDAA76";

  
    const handleHover = () => {
      setIsHovered(!isHovered);
    };
  
    return (
      <div className="image-container" onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Image roundedCircle src={ img1} className="w-75" />
      </div>
    );
  };