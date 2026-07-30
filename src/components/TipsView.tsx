import React, { useState } from 'react';
import { Lightbulb, AlertTriangle, Key, Target, BookOpen, Quote, TargetIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const tipsData = [
  {
    chapter: 'Chương 1: Nhập môn Chủ nghĩa xã hội khoa học',
    keywords: ['Cách mạng tháng Mười Nga', 'Tuyên ngôn Đảng Cộng sản', 'Giai cấp tư sản', 'Hạt nhân hợp lý'],
    tips: [
      'Ghi nhớ: "Cách mạng tháng Mười Nga" là cuộc cách mạng vô sản đầu tiên trên thế giới giành thắng lợi.',
      'Tác phẩm đánh dấu sự ra đời của CNXHKH: "Tuyên ngôn của Đảng Cộng sản".',
      'Đóng góp của Mác-Ăngghen: Kế thừa "hạt nhân hợp lý" của Hêghen và phê phán quan điểm duy tâm.',
    ],
    traps: [
      'Câu hỏi "Không phải phương pháp nghiên cứu của CNXHKH": Chú ý loại trừ "Phương pháp trừu tượng hóa khoa học" (đây là của Kinh tế chính trị).',
    ]
  },
  {
    chapter: 'Chương 2: Sứ mệnh lịch sử của giai cấp công nhân',
    keywords: ['Sản phẩm & Chủ thể', 'Đối lập trực tiếp', 'Tâm lý tiểu nông', 'Kinh tế nhà nước', 'Đẩy mạnh CNH-HĐH'],
    tips: [
      'GCCN vừa là "sản phẩm" vừa là "chủ thể" của nền đại công nghiệp.',
      'Sự ra đời Đảng Cộng sản: Là kết quả kết hợp giữa CNXHKH và phong trào công nhân.',
      'Vấn đề nổi bật nhất hiện nay: GCCN là lực lượng "đi đầu trong sự nghiệp CNH, HĐH".',
      'Đội ngũ nòng cốt: GCCN trong "thành phần kinh tế nhà nước".'
    ],
    traps: [
      'Nhược điểm GCCN VN: Xuất thân từ nông dân nên có "tâm lý tiểu nông, thói quen, tập quán lạc hậu".',
      'Lợi ích: Có lợi ích "đối lập trực tiếp" với giai cấp tư sản, không được chọn đáp án "dung hòa".'
    ]
  },
  {
    chapter: 'Chương 3: Thời kỳ quá độ lên CNXH',
    keywords: ['Quá độ trực tiếp/gián tiếp', 'Phân phối theo lao động', 'Nhiều thành phần kinh tế', 'Biến đổi về chất'],
    tips: [
      'Có 2 hình thức quá độ: Trực tiếp (từ CNTB phát triển cao) và Gián tiếp (bỏ qua CNTB).',
      'Về kinh tế: Tồn tại "nhiều thành phần kinh tế, trong đó có thành phần đối lập".',
      'Bỏ qua chế độ TBCN: Đòi hỏi "tiếp thu, kế thừa" các thành tựu nhân loại đạt được.'
    ],
    traps: [
      'Hình thức phân phối chủ đạo ở VN: "Phân phối theo lao động" (các đáp án khác như bao cấp/nhu cầu là sai).',
      'Quá độ là sự biến đổi "về chất", đừng nhầm với "về lượng".'
    ]
  },
  {
    chapter: 'Chương 4: Dân chủ & Nhà nước XHCN',
    keywords: ['Quốc hội', 'Dân chủ XHCN', 'Chức năng đối nội/đối ngoại', 'Dân chủ thiểu số'],
    tips: [
      'Bản chất quyền lực nhà nước VN: "Thống nhất, có sự phân công, phối hợp và kiểm soát".',
      'Cơ quan quyền lực cao nhất: "Quốc hội".',
      'Bản chất dân chủ XHCN ở VN: Thực hiện qua "trực tiếp và gián tiếp".'
    ],
    traps: [
      'Căn cứ vào "phạm vi tác động", chức năng chia thành "đối nội, đối ngoại" (đừng nhầm với lĩnh vực kinh tế, văn hóa).',
      'Dân chủ chủ nô: Chỉ là dân chủ "thiểu số" (chỉ dành cho chủ nô, nô lệ không được coi là dân).'
    ]
  },
  {
    chapter: 'Chương 5: Cơ cấu xã hội - giai cấp',
    keywords: ['Liên minh kinh tế', 'Giai cấp nông dân', 'Tầng lớp doanh nhân'],
    tips: [
      'Nội dung "quyết định nhất" của liên minh giai cấp: Liên minh về "kinh tế".',
      '"Người bạn đồng hành tự nhiên" của GCCN: "Giai cấp nông dân".',
      'Lực lượng đóng góp tích cực tạo việc làm: "Tầng lớp doanh nhân".'
    ],
    traps: [
      'Không thể "xóa bỏ triệt để, ngay lập tức" các giai cấp trong TKQĐ vì đó là quy luật, chỉ có thể cải tạo dần.',
      'Sự xuất hiện các tầng lớp mới: Nguyên nhân do "Cơ cấu xã hội - giai cấp biến đổi phức tạp, đa dạng".'
    ]
  },
  {
    chapter: 'Chương 6: Dân tộc & Tôn giáo',
    keywords: ['Đoàn kết dân tộc', 'Quyền bình đẳng', '3 Nguồn gốc tôn giáo', 'Nhân dân lao động'],
    tips: [
      'Truyền thống quyết định mọi thắng lợi của VN: "Đoàn kết dân tộc".',
      'Cơ sở để thực hiện các quyền dân tộc khác: "Quyền bình đẳng giữa các dân tộc".',
      'Tín đồ tôn giáo ở nước ta: Phần lớn là "nhân dân lao động", có tinh thần yêu nước.'
    ],
    traps: [
      'Nguồn gốc tôn giáo gồm: 1. Tự nhiên-KTXH, 2. Nhận thức, 3. Tâm lý. Đáp án "Nguồn gốc tâm linh" là bẫy.',
      'Tính chất chính trị của tôn giáo chỉ xuất hiện khi "xã hội có phân chia giai cấp".'
    ]
  },
  {
    chapter: 'Chương 7: Vấn đề Gia đình',
    keywords: ['Huyết thống', 'Tái sản xuất con người', 'Giải phóng phụ nữ'],
    tips: [
      'Quan hệ "huyết thống" là tự nhiên và gắn kết mạnh mẽ nhất.',
      'Gia đình có vai trò "quyết định" đối với sự tồn tại của XH vì chức năng "tái sản xuất con người".',
      'Hồ Chí Minh: "Nếu không giải phóng phụ nữ là xây dựng chủ nghĩa xã hội chỉ một nửa".'
    ],
    traps: [
      'Gia đình VN truyền thống quan niệm đông con trai nối dõi vì: "nhu cầu sản xuất nông nghiệp" và "phong tục".',
      'Cơ sở xây dựng gia đình XHCN gồm kinh tế, chính trị, văn hóa. Chú ý loại trừ các đáp án khác.'
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
