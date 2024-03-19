import Footer2 from '../Footer2/Footer2';
import Navbar from '../HomePage/header/Navbar';
import MBTIBody from './MBTIBody/MBTIBody';
import MBTIHeader from './MBTIHeader/MBTIHeader';
const MBTIIntro = () => {
    return (
        <div>
            <div>
                <Navbar />
                <MBTIHeader />
                <MBTIBody />
                <Footer2 />
            </div>
        </div>
    );
};

export default MBTIIntro;
