import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ExcellentStudentData } from '../ExcellentStudent/ExcellentStudentData';
import Navbar from '../../components/HomePage/header/Navbar';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
const ExcellentStudent = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-44">
                <div className="justify-center w-3/5 grid grid-rows-2 grid-flow-col gap-4">
                    {ExcellentStudentData.map((student) => (
                        <Card key={student.id} sx={{ maxWidth: 345, maxHeight: 450 }}>
                            <CardMedia component="img" height="140" image={student.img} alt={student.name} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {student.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {student.detail}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small"></Button>
                                <Link to="/sinh-vien-tieu-bieu">
                                    <Button size="small">Xem chi tiết</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
            <div>
                <ReactPaginate
                    breakLabel={<span className="mr-4">...</span>}
                    nextLabel={
                        <span className="w-10 h-10 flex items-center justify-center bg-red rounded-md">
                            <BsChevronRight />
                        </span>
                    }
                    // onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={10}
                    previousLabel={
                        <span className="w-10 h-10 flex items-center focus:cursor-pointer justify-center bg-red rounded-md mr-4">
                            {<BsChevronLeft />}
                        </span>
                    }
                    containerClassName="flex items-center justify-center mt-8 mb-4"
                    pageClassName="block border border-solid border-red hover:bg-red w-10 h-10 flex items-center justify-center rounded-md mr-4"
                    activeClassName="bg-lightblue text-white"
                />
            </div>
        </>
    );
};

export default ExcellentStudent;
