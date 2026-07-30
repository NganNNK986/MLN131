import { Chapter, Flashcard, QuizQuestion } from './types';
import { quiz1Questions } from './quiz-data';

export const chapters: Chapter[] = [
  {
    id: 'ch1',
    title: 'Chương 1: Nhập môn Chủ nghĩa xã hội khoa học',
    summary: [
      'Điều kiện kinh tế - xã hội: Sự phát triển mạnh mẽ của đại công nghiệp tư bản chủ nghĩa và sự xuất hiện của giai cấp công nhân.',
      'Tiền đề khoa học tự nhiên: Học thuyết tiến hóa, Định luật bảo toàn năng lượng, Học thuyết tế bào.',
      'Tiền đề tư tưởng lý luận: Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, CNXH không tưởng Pháp.',
      'Ba phát kiến vĩ đại của Mác - Ăngghen: Chủ nghĩa duy vật lịch sử, Học thuyết giá trị thặng dư, Sứ mệnh lịch sử của GCCN.',
      'Tác phẩm đánh dấu sự ra đời: Tuyên ngôn của Đảng Cộng sản (2/1848).',
      'Đối tượng nghiên cứu: Những quy luật, tính quy luật chính trị - xã hội của quá trình chuyển biến từ CNTB lên CNXH và CNCS.',
      'Ý nghĩa: Trang bị thế giới quan, phương pháp luận khoa học, bồi dưỡng niềm tin lý tưởng cho GCCN.',
      'Phương pháp nghiên cứu: Kết hợp lịch sử - logic; khảo sát, phân tích chính trị - xã hội. Kế thừa "hạt nhân hợp lý" của triết học Hêghen.'
    ]
  },
  {
    id: 'ch2',
    title: 'Chương 2: Sứ mệnh lịch sử của giai cấp công nhân',
    summary: [
      'Khái niệm: GCCN là tập đoàn xã hội ổn định, đại diện cho LLSX tiên tiến.',
      'Đặc điểm: Trực tiếp/gián tiếp vận hành công cụ công nghiệp; không sở hữu TLSX chủ yếu; tính kỷ luật cao; tinh thần cách mạng triệt để.',
      'Nội dung sứ mệnh: Lật đổ CNTB, xây dựng CNCS văn minh dựa trên chế độ công hữu về TLSX.',
      'Điều kiện khách quan: Địa vị kinh tế (đại diện LLSX hiện đại) và đặc điểm chính trị - xã hội.',
      'Điều kiện chủ quan: Sự phát triển của bản thân GCCN, sự ra đời của Đảng Cộng sản, khối liên minh công - nông.',
      'GCCN Việt Nam: Ra đời từ khai thác thuộc địa của Pháp, sớm tiếp thu Chủ nghĩa Mác-Lênin, gắn bó máu thịt với dân tộc.',
      'Sứ mệnh GCCN VN hiện nay: Đi đầu trong sự nghiệp CNH, HĐH, xây dựng nền tảng vật chất kỹ thuật cho CNXH.',
      'Đặc thù GCCN VN: Có nhược điểm tâm lý tiểu nông. Bộ phận công nhân trong kinh tế nhà nước giữ vai trò nòng cốt, chủ đạo.'
    ]
  },
  {
    id: 'ch3',
    title: 'Chương 3: Chủ nghĩa xã hội & Thời kỳ quá độ',
    summary: [
      'Bản chất CNXH: Giải phóng toàn diện, do nhân dân làm chủ, kinh tế phát triển cao, nhà nước kiểu mới, văn hóa phát triển, bình đẳng dân tộc.',
      'Tính tất yếu của TKQĐ: Là thời kỳ cải biến cách mạng sâu sắc, chuyển từ tư hữu sang công hữu, tổ chức lại LLSX.',
      'Hai hình thức quá độ: Trực tiếp (từ TBCN phát triển) và gián tiếp (từ nước chưa qua TBCN).',
      'Việt Nam: Quá độ gián tiếp, bỏ qua chế độ TBCN (bỏ qua vị trí thống trị của QHSX và KTTT TBCN).',
      'Đặc trưng CNXH ở VN: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh; do nhân dân làm chủ; kinh tế phát triển cao, nền văn hóa tiên tiến đậm đà bản sắc dân tộc.',
      'Đặc điểm kinh tế TKQĐ: Tồn tại nền kinh tế nhiều thành phần, đan xen giữa yếu tố cũ và mới. Phân phối theo lao động là chủ đạo.'
    ]
  },
  {
    id: 'ch4',
    title: 'Chương 4: Dân chủ XHCN và Nhà nước XHCN',
    summary: [
      'Khái niệm Dân chủ: Dân chủ là quyền lực thuộc về nhân dân. Có 3 nền dân chủ: Chủ nô, Tư sản, XHCN.',
      'Bản chất dân chủ XHCN: Thủ tiêu áp bức, do ĐCS lãnh đạo, dựa trên sở hữu công hữu, lấy chủ nghĩa Mác-Lênin làm chủ đạo.',
      'Nhà nước XHCN: Công cụ thực thi quyền làm chủ của nhân dân, mang bản chất GCCN.',
      'Nhà nước Pháp quyền XHCN VN: Thượng tôn pháp luật, của dân, do dân, vì dân, do ĐCS Việt Nam lãnh đạo.',
      'Phòng chống tham nhũng: Tham nhũng là hành vi lợi dụng chức vụ quyền hạn vì vụ lợi. Công dân có trách nhiệm tố cáo, giám sát.',
      'Sự khác biệt của Dân chủ XHCN: Là nền dân chủ rộng rãi nhất cho nhân dân lao động, nhưng vẫn mang tính giai cấp.',
      'Tổ chức quyền lực ở VN: Quốc hội là cơ quan quyền lực cao nhất. Quyền lực nhà nước là thống nhất, có phân công, phối hợp và kiểm soát.'
    ]
  },
  {
    id: 'ch5',
    title: 'Chương 5: Cơ cấu xã hội - giai cấp & Liên minh',
    summary: [
      'Cơ cấu XH - GC: Giữ vị trí trung tâm, chi phối các cơ cấu xã hội khác.',
      'Quy luật biến đổi: Bị quy định bởi cơ cấu kinh tế, biến đổi phức tạp đa dạng, vừa đấu tranh vừa liên minh.',
      'Liên minh giai cấp: Nhằm thực hiện nhu cầu, lợi ích, tạo động lực xây dựng CNXH.',
      'Các giai tầng ở VN: GCCN (lãnh đạo, nòng cốt), Nông dân (chiến lược), Trí thức (sáng tạo), Doanh nhân.',
      'Nội dung liên minh: Kinh tế (thỏa mãn lợi ích), Chính trị (bảo vệ chế độ), Văn hóa - Xã hội (phát triển toàn diện).',
      'Tính tất yếu của liên minh: Khách quan do yêu cầu của nền sản xuất lớn, bảo đảm vai trò lãnh đạo của GCCN.',
      'Vai trò các giai tầng: Công nhân lãnh đạo; Nông dân là bạn đồng hành tự nhiên; Doanh nhân đóng góp tạo việc làm, phát triển kinh tế.'
    ]
  },
  {
    id: 'ch6',
    title: 'Chương 6: Vấn đề dân tộc và tôn giáo',
    summary: [
      'Dân tộc: Hình thành từ phương thức sinh hoạt kinh tế chung, lãnh thổ, quản lý nhà nước, ngôn ngữ và văn hóa.',
      'Hai xu hướng: Tách ra độc lập và Liên hiệp lại.',
      'Cương lĩnh dân tộc Lênin: Bình đẳng, tự quyết, liên hiệp công nhân các dân tộc.',
      'Tôn giáo: Là hình thái ý thức xã hội phản ánh hư ảo hiện thực; có tính lịch sử, quần chúng, chính trị.',
      'Nguyên tắc giải quyết: Tôn trọng tự do tín ngưỡng, khắc phục ảnh hưởng tiêu cực gắn với xây dựng xã hội mới, phân biệt rõ chính trị và tư tưởng.',
      'Đặc điểm VN: Đa dân tộc, đa tôn giáo, chung sống hòa bình, tín đồ chủ yếu là nhân dân lao động.',
      'Đặc trưng dân tộc VN: Có tinh thần đoàn kết thống nhất cao, hình thành sớm trong lịch sử dựng nước và giữ nước.',
      'Tôn giáo: Nguồn gốc từ tự nhiên (KT-XH), nhận thức, tâm lý. Tính chính trị của tôn giáo xuất hiện khi xã hội phân chia giai cấp.'
    ]
  },
  {
    id: 'ch7',
    title: 'Chương 7: Vấn đề gia đình',
    summary: [
      'Khái niệm: Cộng đồng xã hội đặc biệt dựa trên hôn nhân, huyết thống, nuôi dưỡng.',
      'Vị trí: Tế bào của xã hội, tổ ấm, cầu nối cá nhân và xã hội.',
      'Chức năng: Tái sản xuất con người, Nuôi dưỡng giáo dục, Kinh tế tiêu dùng, Thỏa mãn tâm sinh lý.',
      'Cơ sở xây dựng: Kinh tế (công hữu), Chính trị (nhà nước XHCN), Văn hóa, Chế độ hôn nhân tiến bộ (tự nguyện, 1 vợ 1 chồng, bình đẳng).',
      'Biến đổi gia đình VN: Quy mô nhỏ hóa (gia đình hạt nhân), biến đổi trong các chức năng, thách thức mâu thuẫn thế hệ.',
      'Giải pháp: Kế thừa giá trị truyền thống, tiếp thu tiến bộ nhân loại, kết hợp chặt chẽ giữa gia đình, nhà trường và xã hội.',
      'Nền tảng gia đình: Quan hệ huyết thống là yếu tố tự nhiên, mạnh mẽ nhất gắn kết các thành viên. Phụ nữ là một nửa xã hội (HCM).'
    ]
  }
];

export const flashcards: Flashcard[] = [
  { id: 'f1', chapterId: 'ch1', term: 'Ba phát kiến vĩ đại', definition: '1. CN Duy vật lịch sử\n2. Học thuyết GTTD\n3. Sứ mệnh lịch sử GCCN.' },
  { id: 'f2', chapterId: 'ch1', term: 'Tác phẩm đánh dấu CNXHKH ra đời', definition: 'Tuyên ngôn của Đảng Cộng sản (Tháng 2/1848).' },
  { id: 'f3', chapterId: 'ch2', term: 'Đặc điểm Giai cấp công nhân', definition: 'Đại diện LLSX tiên tiến, lao động công nghiệp hiện đại, không sở hữu TLSX chủ yếu, tính tổ chức kỷ luật cao.' },
  { id: 'f4', chapterId: 'ch2', term: 'Sứ mệnh lịch sử GCCN', definition: 'Lật đổ CNTB, giải phóng xã hội khỏi bóc lột, xây dựng xã hội CSCN văn minh dựa trên chế độ công hữu.' },
  { id: 'f5', chapterId: 'ch3', term: 'Quá độ bỏ qua TBCN ở VN', definition: 'Bỏ qua việc xác lập vị trí thống trị của QHSX và KTTT tư bản chủ nghĩa.' },
  { id: 'f6', chapterId: 'ch4', term: 'Dân chủ', definition: 'Nghĩa gốc: Quyền lực thuộc về nhân dân (Demos Kratos).' },
  { id: 'f7', chapterId: 'ch4', term: 'Nhà nước pháp quyền XHCN VN', definition: 'Nhà nước thượng tôn pháp luật, của dân, do dân, vì dân, do Đảng Cộng sản Việt Nam lãnh đạo.' },
  { id: 'f8', chapterId: 'ch4', term: 'Tham nhũng', definition: 'Hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi.' },
  { id: 'f9', chapterId: 'ch5', term: 'Cơ cấu xã hội - giai cấp', definition: 'Hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan. Giữ vị trí trung tâm trong cơ cấu xã hội.' },
  { id: 'f10', chapterId: 'ch6', term: 'Cương lĩnh dân tộc của Lênin', definition: '1. Các dân tộc hoàn toàn bình đẳng\n2. Quyền tự quyết\n3. Liên hiệp công nhân tất cả các dân tộc.' },
  { id: 'f11', chapterId: 'ch6', term: 'Tôn giáo', definition: 'Một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan.' },
  { id: 'f12', chapterId: 'ch7', term: '4 Chức năng của gia đình', definition: '1. Tái sản xuất con người\n2. Nuôi dưỡng, giáo dục\n3. Kinh tế và tiêu dùng\n4. Thỏa mãn tâm sinh lý, tình cảm.' },

  { id: 'f13', chapterId: 'ch1', term: 'ĐKT - XH ra đời CNXHKH', definition: 'Sự phát triển của LLSX dưới CNTB và sự trưởng thành của phong trào công nhân.' },
  { id: 'f14', chapterId: 'ch2', term: 'Quy luật ra đời ĐCS', definition: 'Sự kết hợp giữa Chủ nghĩa Mác - Lênin với phong trào công nhân.' },
  { id: 'f15', chapterId: 'ch3', term: 'Đặc điểm thời kỳ quá độ', definition: 'Sự tồn tại đan xen, đấu tranh giữa những yếu tố của xã hội cũ và nhân tố mới của CNXH.' },
  { id: 'f16', chapterId: 'ch4', term: 'Ba nền dân chủ', definition: 'Dân chủ chủ nô, dân chủ tư sản, dân chủ XHCN.' },
  { id: 'f17', chapterId: 'ch4', term: 'Bản chất chính trị DC XHCN', definition: 'Mang bản chất của giai cấp công nhân, đặt dưới sự lãnh đạo của ĐCS.' },
  { id: 'f18', chapterId: 'ch5', term: 'Vị trí của GCCN ở VN', definition: 'Là giai cấp lãnh đạo cách mạng, nòng cốt trong khối liên minh công - nông - trí thức.' },
  { id: 'f19', chapterId: 'ch6', term: 'Nguyên tắc giải quyết vấn đề tôn giáo', definition: 'Tôn trọng tự do tín ngưỡng; khắc phục tiêu cực; phân biệt rạch ròi chính trị - tư tưởng; lịch sử - cụ thể.' },
  { id: 'f20', chapterId: 'ch7', term: 'Chức năng đặc thù của gia đình', definition: 'Tái sản xuất ra con người (duy trì nòi giống).' },
  { id: 'f21', chapterId: 'ch1', term: 'Phương pháp nghiên cứu CNXHKH', definition: 'Phương pháp kết hợp lịch sử và logic, phương pháp khảo sát và phân tích về mặt chính trị xã hội, so sánh, v.v...' },
  { id: 'f22', chapterId: 'ch1', term: 'Tiền đề Triết học cổ điển Đức', definition: 'Kế thừa "cái hạt nhân hợp lý" của Hêghen, cải tạo nó trên lập trường duy vật.' },
  { id: 'f23', chapterId: 'ch2', term: 'Hạn chế của GCCN Việt Nam', definition: 'Mang tâm lý tiểu nông, thói quen, tập quán lạc hậu do phần lớn xuất thân từ nông dân.' },
  { id: 'f24', chapterId: 'ch3', term: 'Hình thức phân phối chủ đạo ở TKQĐ', definition: 'Phân phối theo lao động, bên cạnh đó còn phân phối theo mức độ đóng góp và quỹ phúc lợi xã hội.' },
  { id: 'f25', chapterId: 'ch4', term: 'Đặc điểm quyền lực Nhà nước ở VN', definition: 'Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát giữa các cơ quan nhà nước.' },
  { id: 'f26', chapterId: 'ch4', term: 'Dân chủ là giá trị xã hội', definition: 'Là một phạm trù vĩnh viễn, phản ánh khát vọng tự do, bình đẳng của nhân dân.' },
  { id: 'f27', chapterId: 'ch5', term: 'Nội dung liên minh quyết định nhất', definition: 'Liên minh về kinh tế (đảm bảo hài hòa lợi ích kinh tế giữa các giai tầng).' },
  { id: 'f28', chapterId: 'ch6', term: 'Nguồn gốc của tôn giáo', definition: 'Nguồn gốc tự nhiên (Kinh tế - Xã hội), Nguồn gốc nhận thức, Nguồn gốc tâm lý.' },
  { id: 'f29', chapterId: 'ch6', term: 'Tính chính trị của tôn giáo', definition: 'Chỉ xuất hiện khi xã hội đã phân chia giai cấp và có đối kháng giai cấp.' },
  { id: 'f30', chapterId: 'ch7', term: 'Các mối quan hệ trong gia đình', definition: 'Quan hệ hôn nhân (vợ - chồng) và Quan hệ huyết thống (cha mẹ - con cái, mạnh mẽ nhất).' }
];

export const quizQuestions: QuizQuestion[] = quiz1Questions;
