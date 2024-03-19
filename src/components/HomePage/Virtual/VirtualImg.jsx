import Shade from '../../../assets/shade.png';
import Before from '../../../assets/before.jpg';
import After from '../../../assets/after.jpg';
import ReactCompareImage from 'react-compare-image';
import css from './Virtual.module.css';
const VirtualImg = () => {
    return (
        <div>
            <div className={css.Virtual}>
                <div className={css.left}>
                    <span className="text-red">The more you do</span>
                    <span className="text-purple">The more you get</span>
                    <span>Try-Now!!!</span>
                    <img src={Shade} alt="" />
                </div>
                <div className={css.right}>
                    <div className={css.wrapper}>
                        <ReactCompareImage className="compare-image" leftImage={Before} rightImage={After} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualImg;
