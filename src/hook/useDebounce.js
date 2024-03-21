// import { useState, useEffect } from 'react';

// export default const useDebounce = (value, delay) => {
//     // State và setter cho giá trị hiện tại của debounce
//     const [debouncedValue, setDebouncedValue] = useState(value);

//     useEffect(() => {
//         // Thiết lập một hàm để gọi lại sau delay xác định
//         const handler = setTimeout(() => {
//             setDebouncedValue(value);
//         }, delay);

//         // Hủy bỏ hàm gọi lại nếu giá trị thay đổi trong thời gian delay
//         // (tránh việc gọi nhiều lần nếu người dùng nhập nhanh)
//         return () => {
//             clearTimeout(handler);
//         };
//     }, [value, delay]); // Chỉ gọi lại effect nếu giá trị hoặc delay thay đổi

//     return debouncedValue;
// };
