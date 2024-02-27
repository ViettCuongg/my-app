import Navbar from "../HomePage/header/Navbar";
import MBTIBody from "./MBTIBody/MBTIBody";
import MBTIHeader from "./MBTIHeader/MBTIHeader";
const MBTIIntro = () => {
  return (
    <div>
      <div>
        <Navbar />
        <MBTIHeader />
        <MBTIBody />
      </div>
    </div>
  );
};

export default MBTIIntro;
