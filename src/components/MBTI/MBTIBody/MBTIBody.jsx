import mbtibanner from "../../../assets/mbti/tinh-cach-mbti-banner.svg";
import "../MBTIBody/MBTIBody.model.css";

const MBTIBody = () => {
  return (
    <div>
      <div className="mbti-bg-body">
        <div className="reveal-container" id="what-is-mbti">
          <div className="container what-is-mbti">
            <h2 className="what-is-mbti_title">
              Trắc nghiệm tính cách MBTI là gì?
            </h2>
            <div className="what-is-mbti_desc">
              <div className="what-is-mbti_desc-image">
                <img src={mbtibanner} alt="tinh-cach-mbti-banner"></img>
              </div>
              <div className="what-is-mbti_desc-content">
                <p>
                  <span className="text-bold"> Trắc nghiệm tính cách MBTI</span>
                  <span className="text-ilatic">
                    (Myers-Briggs Type Indicator)
                  </span>
                  là một phương pháp sử dụng hàng loạt các câu hỏi trắc nghiệm
                  để phân tích tính cách con người. Kết quả trắc nghiệm MBTI chỉ
                  ra cách con người nhận thức thế giới xung quanh và ra quyết
                  định cho mọi vấn đề trong cuộc sống.
                </p>
                <p>
                  Hiện nay, MBTI được coi là công cụ khám phá tính cách phổ biến
                  và chính xác nhất trên thế giới. Trong công việc, MBTI giúp
                  mỗi cá nhân có thêm thông tin để định hướng và lựa chọn nghề
                  nghiệp. Nhà tuyển dụng cũng có thể sử dụng MBTI để đánh giá
                  mức độ phù hợp của ứng viên với vị trí công việc và văn hoá
                  doanh nghiệp.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mbti-personality-classification">
          <div className="container">
            <div className="mbti-personality-classification__header">
              <h2 className="mbti-personality-classification__header--title">
                Cách MBTI phân loại 16 nhóm tính cách
              </h2>
              <p className="mbti-personality-classification__header--desc">
                Trắc nghiệm MBTI dùng một chuỗi các câu hỏi trắc nghiệm liên
                quan đến những vấn đề cơ bản trong cuộc sống với các đáp án sẵn
                có để bạn lựa chọn. Tổng kết bài trắc nghiệm sẽ cho ra kết quả
                đánh giá bạn là người có tính cách như thế nào thông qua phương
                pháp phân loại.
                <span></span>
                Sự phân loại này dựa trên 4 nhóm tính cách cơ bản, mỗi nhóm là
                một cặp lưỡng phân của 8 yếu tố chức năng, nhận thức sau:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MBTIBody;
