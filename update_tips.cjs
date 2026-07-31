const fs = require('fs');

let fileContent = fs.readFileSync('src/components/TipsView.tsx', 'utf8');

const newTipsData = `[
  {
    chapter: 'Chương 1: Nhập môn Chủ nghĩa xã hội khoa học',
    keywords: ['Cách mạng tháng Mười Nga', 'Tuyên ngôn Đảng Cộng sản', 'Giai cấp tư sản', 'Hạt nhân hợp lý', 'Mục đích CNXH', 'Lịch sử - tự nhiên'],
    tips: [
      'Ghi nhớ: "Cách mạng tháng Mười Nga" (1917) là cuộc cách mạng vô sản đầu tiên trên thế giới giành thắng lợi.',
      'Tác phẩm đánh dấu sự ra đời của CNXHKH: "Tuyên ngôn của Đảng Cộng sản".',
      'Đóng góp của Mác-Ăngghen: Kế thừa "hạt nhân hợp lý" của triết học Hêghen và phê phán quan điểm duy tâm.',
      'Học thuyết hình thái KTXH: Do C.Mác - Ph.Ăngghen khởi xướng, V.I Lênin bổ sung, phát triển.',
      'Mục đích cao cả nhất của CNXH: Xoá bỏ sự phân chia xã hội thành giai cấp.',
      'Điều kiện KTXH ra đời CNXHKH: Sự phát triển của đại công nghiệp TBCN và sự trưởng thành của giai cấp công nhân.'
    ],
    traps: [
      'Câu hỏi "Không phải phương pháp nghiên cứu của CNXHKH": Chú ý loại trừ "Phương pháp trừu tượng hóa khoa học" (đây là của Kinh tế chính trị).',
      'Đặc trưng bản chất của CNXH: Là chế độ xã hội "do nhân dân lao động làm chủ", tránh nhầm lẫn sang các khái niệm tư hữu hay đàn áp giai cấp khác.',
      'Tính tất yếu thay thế hình thái KTXH TBCN bằng cộng sản chủ nghĩa là quá trình "lịch sử - tự nhiên".'
    ]
  },
  {
    chapter: 'Chương 2: Sứ mệnh lịch sử của giai cấp công nhân',
    keywords: ['Sản phẩm & Chủ thể', 'Đối lập trực tiếp', 'Ý thức chính trị', 'Tâm lý tiểu nông', 'Đẩy mạnh CNH-HĐH'],
    tips: [
      'GCCN vừa là "sản phẩm" vừa là "chủ thể" của nền đại công nghiệp. Ra đời và phát triển gắn liền với nền đại công nghiệp tư bản chủ nghĩa.',
      'Sự ra đời Đảng Cộng sản: Là kết quả kết hợp giữa CNXHKH và phong trào công nhân.',
      'Vấn đề nổi bật nhất hiện nay: GCCN là lực lượng "đi đầu trong sự nghiệp CNH, HĐH".',
      'Chất lượng GCCN: Được thể hiện thông qua "Trình độ trưởng thành về ý thức chính trị".',
      'Mâu thuẫn cơ bản của CNTB (về xã hội): Là cuộc đấu tranh của GCCN chống lại giai cấp tư sản.',
      'Sứ mệnh lịch sử của GCCN do 2 điều kiện khách quan quy định: "Địa vị kinh tế" và "Địa vị chính trị - xã hội".'
    ],
    traps: [
      'GCCN Việt Nam chậm phát triển thời gian đầu vì "sinh ra và lớn lên ở nước thuộc địa, nửa phong kiến".',
      'Nhược điểm GCCN VN: Xuất thân từ nông dân nên có "tâm lý tiểu nông, thói quen, tập quán lạc hậu".',
      'Đấu tranh GCCN ở Châu Âu thế kỷ XIX thất bại: Vì "đơn độc, không có sự liên minh với nông dân", không phải vì chưa có học thuyết.'
    ]
  },
  {
    chapter: 'Chương 3: Thời kỳ quá độ lên CNXH',
    keywords: ['Quá độ trực tiếp/gián tiếp', 'Phân phối theo lao động', 'Nhiều thành phần kinh tế', 'Biến đổi về chất'],
    tips: [
      'Có 2 hình thức quá độ: Trực tiếp (từ CNTB phát triển cao) và Gián tiếp (bỏ qua CNTB - "bắc những nhịp cầu nhỏ" theo V.I. Lênin).',
      'Về kinh tế: Tồn tại "nhiều thành phần kinh tế, trong đó có thành phần đối lập". Sở hữu tư nhân TBCN có tồn tại nhưng "không giữ vai trò chủ đạo".',
      'Thực chất của thời kỳ quá độ: Cải biến cách mạng sâu sắc, triệt để toàn bộ các lĩnh vực đời sống từ xã hội TBCN sang XHCN.',
      'Mối quan hệ lớn ở VN hiện nay: Giữa "tăng trưởng kinh tế và phát triển văn hoá, thực hiện tiến bộ, công bằng XH, bảo vệ môi trường".',
      'Đấu tranh giai cấp trong điều kiện mới: GCCN đã giành được chính quyền và trở thành "giai cấp cầm quyền".'
    ],
    traps: [
      'Hình thức phân phối CHỦ YẾU trong CNXH và TKQĐ: "Làm theo năng lực, hưởng theo lao động" (đừng chọn hưởng theo nhu cầu).',
      'Quá độ lên CNXH là sự biến đổi "về chất" trên tất cả các lĩnh vực, đừng nhầm với biến đổi "về lượng".',
      'Trong TKQĐ: Tư tưởng chủ yếu là sự giằng co giữa "tư tưởng vô sản và tư tưởng tư sản".'
    ]
  },
  {
    chapter: 'Chương 4: Dân chủ & Nhà nước XHCN',
    keywords: ['Quốc hội', 'Pháp luật', 'Con người là trung tâm', 'Hệ tư tưởng Mác-Lênin'],
    tips: [
      'Bản chất quyền lực nhà nước VN: "Thống nhất, có sự phân công, phối hợp và kiểm soát".',
      'Cơ quan quyền lực cao nhất: "Quốc hội". Thượng tôn trong nhà nước PQ: "Pháp luật".',
      'Trung tâm của sự phát triển: Nhà nước PQ XHCN VN coi "Con người" là chủ thể, là trung tâm.',
      'Nguyên tắc cơ bản của dân chủ XHCN: "Không ngừng mở rộng dân chủ", thu hút người lao động tham gia tự giác vào quản lý nhà nước/xã hội.',
      'Sự ra đời của NN XHCN: Kết quả của cuộc cách mạng do giai cấp vô sản và nhân dân lao động tiến hành dưới sự lãnh đạo của Đảng Cộng sản.',
      'Điều kiện tiên quyết xây dựng nền dân chủ XHCN VN: "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh".'
    ],
    traps: [
      'Căn cứ vào "phạm vi tác động", chức năng NN chia thành "đối nội, đối ngoại".',
      'Bản chất tư tưởng-văn hóa của nền dân chủ XHCN: Lấy hệ tư tưởng Mác - Lênin làm "chủ đạo", kế thừa, phát huy tinh hoa truyền thống dân tộc và nhân loại.',
      'Hồ Chí Minh quan niệm dân chủ: Dân chủ là một giá trị nhân loại chung, và dân chủ là "phát triển đất nước XHCN ở Việt Nam".'
    ]
  },
  {
    chapter: 'Chương 5: Cơ cấu xã hội - giai cấp',
    keywords: ['Liên minh kinh tế', 'Quan trọng hàng đầu', 'Cơ cấu kinh tế', 'Phức tạp đa dạng'],
    tips: [
      'Nội dung "quyết định nhất" của liên minh giai cấp (công-nông-trí): Liên minh về "kinh tế".',
      'Cơ cấu XH - giai cấp có vị trí "quan trọng hàng đầu", chi phối các loại hình cơ cấu xã hội khác.',
      'Sự biến đổi của CCXH-giai cấp gắn liền và quy định bởi: "Cơ cấu kinh tế".',
      'Trong thời kỳ quá độ, cơ cấu XH-giai cấp biến đổi "phức tạp, đa dạng" vì là thời kỳ chuyển tiếp, tồn tại nền kinh tế nhiều thành phần (có cả mâu thuẫn đối kháng).',
      'Hoạt động sản xuất kinh tế và cơ cấu xã hội là cơ sở của lịch sử chính trị và tư tưởng.'
    ],
    traps: [
      'Không thể "xóa bỏ triệt để, ngay lập tức" các giai cấp trong TKQĐ vì đây là tính quy luật.',
      'Lực lượng có nhiệm vụ "phát huy bản sắc văn hóa dân tộc và bảo vệ môi trường sinh thái" ở VN: "Giai cấp nông dân".'
    ]
  },
  {
    chapter: 'Chương 6: Dân tộc & Tôn giáo',
    keywords: ['Đoàn kết dân tộc', 'Quyền bình đẳng', 'Hình thái ý thức', 'Phương thức sản xuất'],
    tips: [
      'Truyền thống quyết định mọi thắng lợi của VN: "Đoàn kết dân tộc" (cố kết, hòa hợp cộng đồng).',
      'Sự biến đổi của cộng đồng dân tộc: Do "Sự biến đổi của phương thức sản xuất" quyết định.',
      'Tôn giáo: Là hình thái ý thức xã hội, phản ánh "hư ảo" hiện thực khách quan.',
      'Nguồn gốc tôn giáo: Có 3 nguồn gốc "Tự nhiên, kinh tế - xã hội", "Nhận thức" (do hạn chế hiểu biết), và "Tâm lý".',
      'Xu hướng dân tộc (Lênin): Các dân tộc xích lại gần nhau, liên hiệp lại; hoặc có xu hướng tách ra thành lập quốc gia độc lập.'
    ],
    traps: [
      'Trong hai mặt của tôn giáo, mặt "phản ánh mâu thuẫn đối kháng" (lợi dụng tôn giáo chống phá cách mạng) là "Mặt chính trị".',
      'Giải quyết tốt quan hệ dân tộc/tôn giáo: Cần giải quyết "vấn đề tôn giáo trên cơ sở vấn đề dân tộc".',
      'Quan hệ dân tộc và tôn giáo ở VN chịu sự chi phối mạnh mẽ bởi "Tín ngưỡng truyền thống".',
      'Tôn trọng tự do tín ngưỡng: Chính là "tôn trọng quyền con người".'
    ]
  },
  {
    chapter: 'Chương 7: Vấn đề Gia đình',
    keywords: ['Tế bào xã hội', 'Tái sản xuất con người', 'Kinh tế gia đình', 'Huyết thống'],
    tips: [
      'Gia đình là "tế bào của xã hội" vì: Sản xuất tư liệu tiêu dùng, tư liệu SX và tái sản xuất ra con người.',
      'Chức năng "cơ bản và riêng có" của gia đình: "Tái sản xuất ra con người".',
      'Chất lượng nguồn lao động từ gia đình phụ thuộc: "Trình độ phát triển kinh tế, văn hóa, xã hội".',
      'Xu hướng quy mô gia đình VN hiện nay: "Thu nhỏ số lượng thành viên" (gia đình hạt nhân).',
      'Bước chuyển mang tính bước ngoặt của KT gia đình: Từ "sản xuất tự cấp tự túc, quy mô nhỏ" thành "sản xuất hàng hóa".'
    ],
    traps: [
      'Sự thống trị của người đàn ông trong gia đình quá khứ: Là kết quả của "sự thống trị về kinh tế".',
      'Kinh tế gia đình gặp khó khăn do cạnh tranh vì: Phần lớn "quy mô nhỏ, lao động ít, tự sản xuất là chính".',
      'Gia đình "lệch lạc, không đạt hiệu quả": Thường do "thiếu cơ sở văn hóa, giáo dục" đi kèm với kinh tế.',
      'Quan hệ gia đình biến đổi phụ thuộc vào: "Điều kiện cơ sở vật chất (kinh tế) và các thiết chế chính trị - xã hội".'
    ]
  }
]`;

fileContent = fileContent.replace(/const tipsData = \[[\s\S]*?\];/, `const tipsData = ${newTipsData};`);

fs.writeFileSync('src/components/TipsView.tsx', fileContent);
console.log('TipsView.tsx updated.');
