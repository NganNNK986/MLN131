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
      'Đối tượng nghiên cứu: Những quy luật, tính quy luật chính trị - xã hội của quá trình chuyển biến từ CNTB lên CNXH và CNCS.'
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
      'GCCN Việt Nam: Ra đời từ khai thác thuộc địa của Pháp, sớm tiếp thu Chủ nghĩa Mác-Lênin, gắn bó máu thịt với dân tộc.'
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
      'Đặc trưng CNXH ở VN: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh; do nhân dân làm chủ; kinh tế phát triển cao...'
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
      'Phòng chống tham nhũng: Tham nhũng là hành vi lợi dụng chức vụ quyền hạn vì vụ lợi. Công dân có trách nhiệm tố cáo, giám sát.'
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
      'Nội dung liên minh: Kinh tế (thỏa mãn lợi ích), Chính trị (bảo vệ chế độ), Văn hóa - Xã hội (phát triển toàn diện).'
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
      'Đặc điểm VN: Đa dân tộc, đa tôn giáo, chung sống hòa bình, tín đồ chủ yếu là nhân dân lao động.'
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
      'Biến đổi gia đình VN: Quy mô nhỏ hóa (gia đình hạt nhân), biến đổi trong các chức năng, thách thức mâu thuẫn thế hệ.'
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
  { id: 'f12', chapterId: 'ch7', term: '4 Chức năng của gia đình', definition: '1. Tái sản xuất con người\n2. Nuôi dưỡng, giáo dục\n3. Kinh tế và tiêu dùng\n4. Thỏa mãn tâm sinh lý, tình cảm.' }
];

export const quizQuestions: QuizQuestion[] = quiz1Questions;
