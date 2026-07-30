import React, { useState } from 'react';
import { Lightbulb, AlertTriangle, Key, Target, BookOpen, Quote, TargetIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const tipsData = [
  {
    chapter: 'Chương 1: Nhập môn Chủ nghĩa xã hội khoa học',
    keywords: ['Cách mạng tháng Mười Nga', 'Tuyên ngôn Đảng Cộng sản', 'Giai cấp tư sản', 'Hạt nhân hợp lý', 'Mục đích CNXH'],
    tips: [
      'Ghi nhớ: "Cách mạng tháng Mười Nga" (1917) là cuộc cách mạng vô sản đầu tiên trên thế giới giành thắng lợi.',
      'Tác phẩm đánh dấu sự ra đời của CNXHKH: "Tuyên ngôn của Đảng Cộng sản".',
      'Đóng góp của Mác-Ăngghen: Kế thừa "hạt nhân hợp lý" của triết học Hêghen và phê phán quan điểm duy tâm.',
      'Học thuyết hình thái KTXH: Do C.Mác - Ph.Ăngghen khởi xướng, V.I Lênin bổ sung, phát triển.',
      'Mục đích cao cả nhất của CNXH: Xoá bỏ sự phân chia xã hội thành giai cấp.'
    ],
    traps: [
      'Câu hỏi "Không phải phương pháp nghiên cứu của CNXHKH": Chú ý loại trừ "Phương pháp trừu tượng hóa khoa học" (đây là của Kinh tế chính trị).',
      'Đặc trưng bản chất của CNXH: Là chế độ xã hội "do nhân dân lao động làm chủ", tránh nhầm lẫn sang các khái niệm tư hữu hay đàn áp giai cấp khác.'
    ]
  },
  {
    chapter: 'Chương 2: Sứ mệnh lịch sử của giai cấp công nhân',
    keywords: ['Sản phẩm & Chủ thể', 'Đối lập trực tiếp', 'Ý thức chính trị', 'Tâm lý tiểu nông', 'Đẩy mạnh CNH-HĐH'],
    tips: [
      'GCCN vừa là "sản phẩm" vừa là "chủ thể" của nền đại công nghiệp.',
      'Sự ra đời Đảng Cộng sản: Là kết quả kết hợp giữa CNXHKH và phong trào công nhân.',
      'Vấn đề nổi bật nhất hiện nay: GCCN là lực lượng "đi đầu trong sự nghiệp CNH, HĐH".',
      'Chất lượng GCCN: Được thể hiện thông qua "Trình độ trưởng thành về ý thức chính trị".',
      'Mâu thuẫn cơ bản của CNTB (về xã hội): Là cuộc đấu tranh của GCCN chống lại giai cấp tư sản.'
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
      'Về kinh tế: Tồn tại "nhiều thành phần kinh tế, trong đó có thành phần đối lập".',
      'Thực chất của thời kỳ quá độ: Cải biến cách mạng từ xã hội tiền TBCN và TBCN sang XHCN.',
      'Mối quan hệ lớn ở VN hiện nay: Giữa "tăng trưởng kinh tế và phát triển văn hoá, thực hiện tiến bộ, công bằng XH, bảo vệ môi trường".'
    ],
    traps: [
      'Hình thức phân phối CHỦ YẾU trong CNXH và TKQĐ: "Làm theo năng lực, hưởng theo lao động" (đừng chọn hưởng theo nhu cầu).',
      'Quá độ lên CNXH là sự biến đổi "về chất" trên tất cả các lĩnh vực, đừng nhầm với biến đổi "về lượng".',
      'Trong TKQĐ: Tư tưởng chủ yếu là sự giằng co giữa "tư tưởng vô sản và tư tưởng tư sản".'
    ]
  },
  {
    chapter: 'Chương 4: Dân chủ & Nhà nước XHCN',
    keywords: ['Quốc hội', 'Pháp luật', 'Đối nội/Đối ngoại', 'Con người là trung tâm'],
    tips: [
      'Bản chất quyền lực nhà nước VN: "Thống nhất, có sự phân công, phối hợp và kiểm soát".',
      'Cơ quan quyền lực cao nhất: "Quốc hội". Thượng tôn trong nhà nước PQ: "Pháp luật".',
      'Trung tâm của sự phát triển: Nhà nước PQ XHCN VN coi "Con người" là chủ thể, là trung tâm.',
      'Nguyên tắc cơ bản của dân chủ XHCN: "Không ngừng mở rộng dân chủ", thu hút người lao động tham gia tự giác vào quản lý nhà nước/xã hội.'
    ],
    traps: [
      'Căn cứ vào "phạm vi tác động", chức năng NN chia thành "đối nội, đối ngoại".',
      'Bản chất tư tưởng-văn hóa của nền dân chủ XHCN: Lấy chủ nghĩa Mác - Lênin làm "chủ đạo", kế thừa truyền thống dân tộc và tinh hoa nhân loại.',
      'Dân chủ chủ nô: Là dân chủ "thiểu số" (nô lệ không được coi là dân).'
    ]
  },
  {
    chapter: 'Chương 5: Cơ cấu xã hội - giai cấp',
    keywords: ['Liên minh kinh tế', 'Quan trọng hàng đầu', 'Biến đổi cơ cấu KTXH'],
    tips: [
      'Nội dung "quyết định nhất" của liên minh giai cấp (công-nông-trí): Liên minh về "kinh tế".',
      'Cơ cấu XH - giai cấp có vị trí "quan trọng hàng đầu", chi phối các loại hình cơ cấu khác.',
      'Sự biến đổi của CCXH-giai cấp gắn liền và quy định bởi: "Cơ cấu kinh tế".',
      'Tầng lớp "doanh nhân" đóng góp tích cực tạo việc làm, phát triển kinh tế.'
    ],
    traps: [
      'Không thể "xóa bỏ triệt để, ngay lập tức" các giai cấp trong TKQĐ vì đây là tính quy luật.',
      'Lực lượng có nhiệm vụ "phát huy bản sắc văn hóa dân tộc và bảo vệ môi trường sinh thái" ở VN: "Giai cấp nông dân".'
    ]
  },
  {
    chapter: 'Chương 6: Dân tộc & Tôn giáo',
    keywords: ['Đoàn kết dân tộc', 'Quyền bình đẳng', 'Hình thái ý thức hư ảo', 'Tự do tín ngưỡng'],
    tips: [
      'Truyền thống quyết định mọi thắng lợi của VN: "Đoàn kết dân tộc".',
      'Cơ sở để thực hiện quyền tự quyết: "Quyền bình đẳng giữa các dân tộc".',
      'Tôn giáo: Là hình thái ý thức xã hội, phản ánh "hư ảo" hiện thực khách quan.',
      'Tôn trọng tự do tín ngưỡng: Chính là "tôn trọng quyền con người".'
    ],
    traps: [
      'Nguồn gốc tôn giáo: Gồm Tự nhiên-KTXH, Nhận thức, Tâm lý. Đáp án "tâm linh" hay "ý chí" là sai.',
      'Trong hai mặt của tôn giáo, mặt "phản ánh mâu thuẫn đối kháng" là "Mặt chính trị".',
      'Giải quyết tốt quan hệ dân tộc/tôn giáo: Cần giải quyết "vấn đề tôn giáo trên cơ sở vấn đề dân tộc".'
    ]
  },
  {
    chapter: 'Chương 7: Vấn đề Gia đình',
    keywords: ['Huyết thống', 'Tế bào xã hội', 'Tái sản xuất con người'],
    tips: [
      'Gia đình là "tế bào của xã hội" vì: Sản xuất tư liệu tiêu dùng, tư liệu SX và tái sản xuất con người.',
      'Chức năng "cơ bản và riêng có" của gia đình: "Tái sản xuất ra con người".',
      'Quan hệ "huyết thống" là tự nhiên và gắn kết mạnh mẽ nhất.',
      'Chất lượng lao động gia đình phụ thuộc: "Trình độ phát triển kinh tế, văn hóa, xã hội".'
    ],
    traps: [
      'Gia đình "lệch lạc, không đạt hiệu quả": Do thiếu cơ sở văn hóa, hoặc văn hóa không đi liền với KT-CT.',
      'Sự thống trị của người đàn ông trong quá khứ: Là kết quả của "sự thống trị về kinh tế".',
      'Kinh tế gia đình gặp khó khăn do cạnh tranh vì: Phần lớn "quy mô nhỏ, lao động ít, tự sản xuất là chính".'
    ]
  }
];

export function TipsView() {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto py-4">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Mẹo Ôn Tập Nhanh</h2>
        <p className="text-slate-500">Phân tích từ phổ đề kiểm tra - Tập trung vào các bẫy thường gặp</p>
      </div>

      <div className="space-y-4">
        {tipsData.map((data, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <button
              onClick={() => setActiveTab(activeTab === index ? null : index)}
              className="w-full text-left px-6 py-4 bg-white hover:bg-slate-50 flex items-center justify-between transition-colors"
            >
              <h3 className="font-semibold text-lg text-slate-800 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                {data.chapter}
              </h3>
              <div className="text-slate-400">
                {activeTab === index ? (
                  <span className="text-xl">−</span>
                ) : (
                  <span className="text-xl">+</span>
                )}
              </div>
            </button>

            <AnimatePresence>
              {activeTab === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-6 border-t border-slate-100 space-y-6">
                    {/* Keywords Section */}
                    <div>
                      <h4 className="flex items-center gap-2 font-medium text-slate-700 mb-3">
                        <Key className="w-4 h-4 text-emerald-500" />
                        Từ khóa cốt lõi
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {data.keywords.map((kw, i) => (
                          <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tips Section */}
                    <div>
                      <h4 className="flex items-center gap-2 font-medium text-slate-700 mb-3">
                        <Lightbulb className="w-4 h-4 text-amber-500" />
                        Luận điểm ghi nhớ
                      </h4>
                      <ul className="space-y-2">
                        {data.tips.map((tip, i) => (
                          <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                            <span className="text-amber-500 mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Traps Section */}
                    {data.traps && data.traps.length > 0 && (
                      <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
                        <h4 className="flex items-center gap-2 font-medium text-rose-700 mb-2">
                          <AlertTriangle className="w-4 h-4" />
                          Bẫy cần lưu ý
                        </h4>
                        <ul className="space-y-2">
                          {data.traps.map((trap, i) => (
                            <li key={i} className="flex gap-2 text-rose-600 text-sm leading-relaxed">
                              <span>-</span>
                              <span>{trap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
