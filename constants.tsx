
import { TimelineEvent, Characteristic } from './src/types';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1919",
    title: "Hội nghị Véc-xây",
    content: "Hồ Chí Minh gửi 'Yêu sách của nhân dân An Nam', đòi quyền bình đẳng pháp lý và các quyền tự do, dân chủ cho dân Việt Nam. Đây là dấu mốc đầu tiên hình thành tư tưởng về quyền dân tộc thuộc địa.",
    quote: "Cái mà tôi cần nhất trên đời là đồng bào tôi được tự do, Tổ quốc tôi được độc lập."
  },
  {
    year: "1930",
    title: "Chánh cương vắn tắt",
    content: "Xác định rõ mục tiêu: 'Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến, làm cho nước Nam được hoàn toàn độc lập'.",
  },
  {
    year: "1945",
    title: "Tuyên ngôn Độc lập",
    content: "Người khẳng định chân lý phổ quát dựa trên các bản Tuyên ngôn của Mỹ và Pháp.",
    quote: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do... Đó là những lẽ phải không ai chối cãi được."
  },
  {
    year: "1946",
    title: "Toàn quốc kháng chiến",
    content: "Thư gửi Liên hợp quốc và Lời kêu gọi toàn quốc kháng chiến, thể hiện quyết tâm sắt đá bảo vệ toàn vẹn lãnh thổ.",
    quote: "Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ."
  },
  {
    year: "1965-1966",
    title: "Kháng chiến chống Mỹ",
    content: "Giữa lúc chiến tranh cục bộ leo thang ác liệt, Người nêu lên chân lý thời đại.",
    quote: "Không có gì quý hơn độc lập, tự do."
  }
];

export const SOCIALIST_CHARACTERISTICS: Characteristic[] = [
  { field: "Chính trị", content: "Xã hội có chế độ dân chủ, do nhân dân làm chủ; mọi quyền lực thuộc về nhân dân dưới sự lãnh đạo của Đảng Cộng sản; nền tảng là liên minh công – nông." },
  { field: "Kinh tế", content: "Nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu; đối lập với chế độ tư hữu bóc lột." },
  { field: "Văn hóa - Đạo đức", content: "Xã hội công bằng, tiến bộ; con người được tôn trọng; xóa bỏ bóc lột; các dân tộc đoàn kết, bình đẳng." },
  { field: "Chủ thể xã hội", content: "Nhân dân là chủ thể xây dựng chủ nghĩa xã hội dưới sự lãnh đạo của Đảng; quan hệ xã hội bình đẳng, đoàn kết, bác ái." }
];
