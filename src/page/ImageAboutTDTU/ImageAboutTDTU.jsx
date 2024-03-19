import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Navbar from '../../components/HomePage/header/Navbar';
import '../ImageAboutTDTU/ImageAboutTDTU.module.css';
import Footer2 from '../../components/Footer2/Footer2';
import { Modal } from '@mui/material';
import { useState } from 'react';
const ImageAboutTDTU = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleOpen = (img) => {
        setSelectedImage(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Navbar />
            <Modal
                open={open}
                onClose={handleClose}
                BackdropClick={true}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'none',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '80%' }} />
                </div>
            </Modal>
            <div className="mx-32 text-center">
                <ListSubheader sx={{ fontWeight: 'bold', color: 'red', fontSize: '32px' }}>
                    Hình ảnh về các hoạt động của TDTU
                </ListSubheader>
            </div>
            <div className="mx-auto text-center">
                <ImageList className="mx-32" sx={{ height: 580 }} cols={3}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={1} onClick={() => handleOpen(item.img)}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{ width: '100%', height: '100%', cursor: 'pointer' }}
                                className="image cursor-pointer"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            {/* Footer2 component */}
            <Footer2 />
        </>
    );
};

const itemData = [
    {
        img: 'https://tdtu.edu.vn/sites/www/files/styles/small/public/gallery-images/Sports/Sp.jpg?itok=W9JpIpa4',
        title: 'Hoạt động sinh viên',
        author: '',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/styles/small/public/gallery-images/25-years/250.png?itok=DyL8DV5x',
        title: 'Ngày hội truyền thống ',
        author: '',
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/gallery-images/Discovery/Discovery-01z.jpg',
        title: 'Khám phá TDTU',
        author: '',
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/gallery-images/Library-TDTU/Library-0.png',
        title: 'Thư Viện',
        author: '',
        cols: 2,
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/styles/small/public/gallery-images/Bao-Loc/TDTU-BL-14.jpg?itok=pI9DCZcW',
        title: 'Cơ sở Bảo Lộc',
        author: '',
        cols: 2,
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/gallery-images/GDQP/GDQP-1.jpeg',
        title: 'Học kì quân đội',
        author: '',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/gallery-images/International/International-1.jpg',
        title: 'Sinh viên quốc tế ',
        author: '',
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/gallery-images/Culture/Culture-0.JPG',
        title: 'Văn hóa văn nghệ',
        author: '',
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/gallery-images/Dormitory/KTX-0.jpg',
        title: 'Kí túc xá',
        author: '',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/styles/small/public/gallery-images/CLB/CLB-1.jpg?itok=ZdjedLAN',
        title: 'Câu lạc bộ đội nhóm',
        author: '',
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/gallery-images/Students/Student-15.jpg',
        title: 'Sinh viên TDTU',
        author: '',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/gallery-images/Campus/Around-10.jpg',
        title: 'khuông viên cơ sở Tân Phong',
        author: '',
        cols: 2,
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/gallery-images/Research/Research-3.JPG',
        title: 'Hoạt động nghiên cứu ',
        author: '',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/gallery-images/Night/TDTU-night-1.jpg',
        title: 'Khuôn viên TDTU về đêm',
        author: '',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://tdtu.edu.vn/sites/www/files/gallery-images/Creative/Creative-14.jpg',
        title: 'Tòa nhà sáng tạo',
        author: '',
        rows: 2,
        cols: 2,
    },
];

export default ImageAboutTDTU;
