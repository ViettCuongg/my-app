import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './Categoty.module.css';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { CategoryData } from '../../../data/homepage/category';
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div className={css.container}>
            <div className={css.category_container}>
                <div className={css.category_left}>
                    <h1 className="font-bold text-[24px] ">MÔ TẢ HỆ THỐNG</h1>
                    <p>
                        Trải nghiệm Quy trình hướng nghiệp toàn diện với kho Tư liệu khổng lồ bao gồm Hệ thống bài Test,
                        Tài liệu, Khóa học, Tư liệu học tập giúp cho học viên có thể tự đưa ra quyết định chọn ngành
                        nghề, chọn trường phù hợp với tiềm năng của chính bản thân ở thời điểm hiện tại.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Learn more
                    </button>
                </div>
                <div className={css.category_right}>
                    {CategoryData.map((category, index) => (
                        <Link to={`/category/${index}`} key={index} className={css.category}>
                            <span className={css.category_icon}>
                                <FontAwesomeIcon icon={faBitcoin} />
                            </span>
                            <h5 className="h-30 font-bold text-orange text-center my-4">{category.name}</h5>
                            <p>{category.detail} </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
