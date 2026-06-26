import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

type BoardPost = {
  id: string;
  author: string;
  title: string;
  content: string;
  created_at: string;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// --- MULTILINGUAL TRANSLATION STATE DICTIONARY ---
const t = {
  ko: {
    brand: "노바몬",
    liveDemo: "실시간 체험 대시보드",
    keySpecs: "주요 스펙",
    pricingPlans: "라이선스 플랜",
    proAct: "프로 인증/구매 ↗",
    faq: "자주 묻는 질문",
    communityBoard: "커뮤니티 게시판",
    freeDownload: "무료 다운로드",
    langSelect: "언어 선택",
    stableRelease: "Official Stable Release",
    heroTitle: <>가장 직관적인 <br className="sm:hidden" /> PC 모니터링, <span className="text-[#caa63d]">노바몬</span></>,
    heroDesc: "CPU 점유율, RAM 사용량, 디스크 가용 현황 및 하드웨어 장치 실시간 온도를 완벽히 트래킹합니다. 가벼운 네이티브 모듈 탑재로 게임 지연이나 잔렉 없는 부드러운 상태 체크를 만나보세요.",
    heroDownload: "설치파일 무료 다운로드 (EXE)",
    heroExplore: "화면 살펴보기",
    osSupport: "지원 OS",
    fileSize: "파일 크기",
    cpuImpact: "CPU 영향",
    actualUiTitle: "실제 프로그램 동작 화면",
    actualUiDesc: "현재 개발 완료되어 구동되는 노바몬(NovaMon) 데스크톱 프로그램의 실제 메인 모니터링 대시보드 화면입니다.",
    realtimeConnected: "실시간 감시 중",
    kernelTemp: "커널 온도 레벨",
    safe: "안전",
    activeCore: "활성 코어",
    coresThreads: "8코어 / 16스레드",
    vStat1: "위 화면은 실제 윈도우 환경에서 실행되는",
    vStat2: "의 실제 구동 결과 계측 화면입니다.",
    galleryTitle: "실제 프로그램 구동 스크린샷 갤러리",
    galleryDesc: "현재 개발 완료되어 정식 배포 중인 Windows 네이티브 응용 프로그램의 실제 동작 예시입니다. 아래 탭을 클릭하여 각 상태의 고해상도 디자인을 확인해 보세요.",
    tabSkins: "테마 스킨 & 스타일 선택",
    tabSkinsDesc: "AIDA64 Dark, Cyberpunk, RGB, Glass UI 등 8종 이상의 화려한 시그니처 프리셋 스킨 스위칭 및 게이지 스타일 커스텀 화면입니다.",
    tabMain: "메인 모니터링 대시보드",
    tabMainDesc: "CPU / GPU의 점유율 및 부하 상태, 정밀 온도 다이얼 게이지를 한눈에 볼 수 있는 메인 기본 UI 디자인입니다.",
    tabWidgets: "위젯 추가 & 실시간 제어",
    tabWidgetsDesc: "원하는 SSD 장착 수량, 물리 드라이브 상태, 하드웨어 온도 제어를 손쉽게 추가/삭제할 수 있는 동적 위젯 빌더 화면입니다.",
    zoomTipTitle: "💡 돋보기 원클릭 확인",
    zoomTipContent: <>마우스를 스크린샷 이미지 위에 올려 <span className="font-semibold text-slate-200">확대(Fullscreen) 버튼</span>을 클릭하시면, 디테일한 픽셀 단위 렌더링 퀄리티를 상세하게 감상하실 수 있습니다.</>,
    zoomClose: "✕ 닫기",
    zoomHint: "클릭하거나 오른쪽 위 닫기 버튼을 선택해 종료하십시오.",
    chooseItem: "추가할 위젯 아이템 선택",
    unmountedSensors: "현재 시스템에 마운트된 미사용 센서 목록입니다. 하나를 선택하면 대시보드 사이드바의 여유 슬롯에 즉각 등록되어 실시간 감시가 개시됩니다.",
    added: "저장됨",
    close: "닫기",
    prepTitle: "다운로드 준비 중",
    prepWarning: "정식 다운로드 및 라이선스 연동 기능 출시 준비 중",
    prepDesc: "현재 노바몬(NovaMon) 데스크톱 설치파일 배포 및 라이선스 구매 시스템은 내부 정식 출시 및 최종 정밀 보안 심사 단계에 있습니다. 곧 안심하고 이용하실 수 있도록 공식 버전 다운로드가 오픈될 예정입니다!",
    prepGuideTitle: "체험 안내:",
    prepGuideDesc: "본 공식 브랜드 페이지 중앙에 있는 '실시간 Live 데모 시뮬레이터'를 통해 실제 PC 백그라운드 구동 상황과 완전히 동일한 실시간 위젯 커스터마이징, 스킨 전환, 다이얼 정밀 감시 기능을 완벽히 미리 체험해보실 수 있습니다.",
    prepClose: "확인 (데모 체험하기)",
    specTitle: "소프트웨어 주요 성능 스펙",
    specSpecs: "Specifications",
    specCpuTitle: "CPU 모니터링",
    specCpuDesc: "프로세서 점유율과 코어 가동 비율을 직관적으로 그려 전체 중앙처리 시스템의 리소스를 정밀 측정합니다.",
    specGpuTitle: "GPU 온도 확인",
    specGpuDesc: "그래픽 카드의 온도를 시각화하여, 극심한 부하 상황 시 과열 쓰로틀링과 오버헤드를 제어합니다.",
    specRamTitle: "RAM 사용량 확인",
    specRamDesc: "물리 메모리 활성 수치와 용량을 가벼운 포맷으로 점유 상태를 상시 트래킹합니다.",
    specSkinsTitle: "다양한 스킨 지원",
    specSkinsDesc: "고전 게임 감성의 Cyberpunk부터 고급 Black Gold 테마까지 원클릭으로 완벽히 변환합니다.",
    pricingTitle: "합리적인 라이선스 플랜",
    pricingDesc: "한 번 구매로 영구적인 소장과 최대 2대 PC 동시 인증까지, 부담 없이 완벽한 성능 컨트롤러를 구비하세요.",
    boardKicker: "Community Board",
    boardTitle: "방문자 게시판",
    boardDesc: "NovaMon 사용 후기, 질문, 버그 제보, 개선 아이디어를 남길 수 있는 공간입니다.",
    boardStorageNotice: "게시글은 Supabase에 저장되어 모든 방문자가 같은 목록을 볼 수 있습니다.",
    boardWriteTitle: "새 글 작성",
    boardNameLabel: "작성자",
    boardTitleLabel: "제목",
    boardMessageLabel: "내용",
    boardNamePlaceholder: "닉네임",
    boardTitlePlaceholder: "글 제목을 입력하세요",
    boardMessagePlaceholder: "질문이나 의견을 적어주세요",
    boardSubmit: "게시하기",
    boardEmpty: "아직 작성된 글이 없습니다.",
    boardLoading: "게시글을 불러오는 중입니다.",
    boardLoadError: "게시글을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.",
    boardMissingConfig: "Supabase 환경변수가 설정되지 않아 게시판을 사용할 수 없습니다.",
    boardCountLabel: "등록된 글",
    supportFaq: "자주 묻는 질문",
    supportFaqTag: "Support FAQ",
    sensorInfo: "시스템 센서 정보",
    langNameKo: "한국어",
    langNameEn: "English",
    langNameJa: "日本語",
    langNameZh: "中文",
    langNameEs: "Español",
    popSelected: "인기 추천",
    proBadgeText: "평생 사용 · 최대 2대 인증",
    freeBadgeText: "30일 무료 체험 제공"
  },
  en: {
    brand: "NovaMon",
    liveDemo: "Live Demo Dashboard",
    keySpecs: "Key Specs",
    pricingPlans: "Pricing Plans",
    proAct: "Pro Activation/Purchase ↗",
    faq: "FAQ",
    communityBoard: "Board",
    freeDownload: "Free Download",
    langSelect: "Language",
    stableRelease: "Official Stable Release",
    heroTitle: <>The Most Intuitive <br className="sm:hidden" /> PC Monitoring, <span className="text-[#caa63d]">NovaMon</span></>,
    heroDesc: "Perfect track of CPU usage, RAM load, disk availability, and real-time hardware temperatures. Experience lag-free, ultra-light monitoring powered by native modules.",
    heroDownload: "Download Installer for Free (EXE)",
    heroExplore: "Explore Dashboard",
    osSupport: "OS SUPPORT",
    fileSize: "FILE SIZE",
    cpuImpact: "CPU IMPACT",
    actualUiTitle: "Actual Program UI Sandbox",
    actualUiDesc: "This is the actual main monitoring dashboard of the fully developed and running NovaMon desktop program.",
    realtimeConnected: "REALTIME CONNECTED",
    kernelTemp: "Kernel Temp Level",
    safe: "SAFE",
    activeCore: "Active Core",
    coresThreads: "8 cores / 16 threads",
    vStat1: "The screen above is the actual measurement screen running in a Windows environment on",
    vStat2: "'s direct output utility.",
    galleryTitle: "Actual Program Live Screenshot Gallery",
    galleryDesc: "Actual execution examples of the Windows native application. Click the tabs below to view the high-resolution designs of each state.",
    tabSkins: "Preset Theme Skins & Styles",
    tabSkinsDesc: "Switch between over 8 dazzling signature preset skins including AIDA64 Dark, Cyberpunk, RGB, and Glass UI, and customize gauge styles.",
    tabMain: "Main Monitoring Dashboard",
    tabMainDesc: "Main default UI design offering a glance at CPU/GPU loads and precision dial gauges for real-time temperature tracking.",
    tabWidgets: "Widget Addition & Real-time Control",
    tabWidgetsDesc: "Dynamic widget builder screen showing how to easily add/remove SSD physical drives, mount volume sizes, and sensor targets.",
    zoomTipTitle: "💡 One-Click Zoom View",
    zoomTipContent: <>Hover over the screenshot image and click the <span className="font-semibold text-slate-200">Fullscreen button</span> to enjoy pixel-perfect rendering details in crisp high-fidelity.</>,
    zoomClose: "✕ Close",
    zoomHint: "Click anywhere or choose the top-right exit button to close.",
    chooseItem: "Select a Widget to Add",
    unmountedSensors: "Currently unmounted hardware sensors. Selecting one instantly registers it in the dashboard sidebar vacancy to initiate immediate real-time monitoring.",
    added: "Added",
    close: "Close",
    prepTitle: "Preparing Download",
    prepWarning: "Official download and license connection systems are being finalized",
    prepDesc: "Currently, NovaMon's desktop installation distribution and license purchase integration systems are in final security audits. Official downloads will open shortly!",
    prepGuideTitle: "Preview Information:",
    prepGuideDesc: "Use the 'Live Demo Dashboard' at the center of this brand page to experience identical real-time widget customizations, skin switching, and precise gauge readings.",
    prepClose: "OK (Test Live Demo)",
    specTitle: "Key Software Specifications",
    specSpecs: "Specifications",
    specCpuTitle: "CPU Monitoring",
    specCpuDesc: "Digitally draws processor share and core active workload to inspect central processing resources with high precision.",
    specGpuTitle: "GPU Temperature Status",
    specGpuDesc: "Visualizes graphics card temperatures to maintain overheat throttling and overhead issues during intense workload states.",
    specRamTitle: "RAM Usage Tracker",
    specRamDesc: "Tracks physical memory active state and total available volume continuously in a high-efficiency ultra-lean format.",
    specSkinsTitle: "Diverse Preset Skins",
    specSkinsDesc: "Seamless one-click switching from Cyberpunk's retro-gaming neon tone to luxurious Black Gold designs.",
    pricingTitle: "Fair Licensing Plans",
    pricingDesc: "Acquire the complete lifetime license for up to 2 simultaneous PCs. Enjoy seamless monitoring without monthly subscriptions.",
    boardKicker: "Community Board",
    boardTitle: "Visitor Board",
    boardDesc: "Leave NovaMon reviews, questions, bug reports, and feature ideas.",
    boardStorageNotice: "Posts are saved in Supabase so every visitor sees the same board.",
    boardWriteTitle: "Write a Post",
    boardNameLabel: "Name",
    boardTitleLabel: "Title",
    boardMessageLabel: "Message",
    boardNamePlaceholder: "Nickname",
    boardTitlePlaceholder: "Enter a title",
    boardMessagePlaceholder: "Write your question or feedback",
    boardSubmit: "Post",
    boardEmpty: "No posts yet.",
    boardLoading: "Loading posts.",
    boardLoadError: "Could not load posts. Please try again soon.",
    boardMissingConfig: "Supabase environment variables are missing, so the board is unavailable.",
    boardCountLabel: "Posts",
    supportFaq: "Frequently Asked Questions",
    supportFaqTag: "Support FAQ",
    sensorInfo: "System Sensor Metric",
    langNameKo: "한국어",
    langNameEn: "English",
    langNameJa: "日本語",
    langNameZh: "中文",
    langNameEs: "Español",
    popSelected: "Popular",
    proBadgeText: "Lifetime Use · Up to 2 PCs",
    freeBadgeText: "30-Day Free Trial"
  },
  ja: {
    brand: "ノバモン",
    liveDemo: "リアルタイム体験ダッシュボード",
    keySpecs: "主な仕様",
    pricingPlans: "ライセンスプラン",
    proAct: "Pro認証/購入 ↗",
    faq: "よくある質問",
    communityBoard: "掲示板",
    freeDownload: "無料ダウンロード",
    langSelect: "言語選択",
    stableRelease: "公式安定版リリース",
    heroTitle: <>最も直感的な <br className="sm:hidden" /> PCモニタリング、<span className="text-[#caa63d]">NovaMon</span></>,
    heroDesc: "CPU占有率、RAM使用量、ディスクの空き容量、ハードウェアデバイスのリアルタイム温度を完璧に追跡します。軽量なネイティブモジュールを搭載し、ゲームの遅延やラグのないスムーズな動作環境を提供します。",
    heroDownload: "無料ダウンロードする (EXE)",
    heroExplore: "ダッシュボードを見る",
    osSupport: "対応OS",
    fileSize: "ファイルサイズ",
    cpuImpact: "CPU影響",
    actualUiTitle: "実際のプログラム動作画面",
    actualUiDesc: "現在、開発が完了して起動しているNovaMonデスクトッププログラムのメインモニタリングダッシュボード画面です。",
    realtimeConnected: "リアルタイム監視中",
    kernelTemp: "カーネル温度レベル",
    safe: "安全",
    activeCore: "アクティブコア",
    coresThreads: "8コア / 16スレッド",
    vStat1: "上記の画面は、実際のWindows環境で実行中の",
    vStat2: "のリアルタイムGUIです。",
    galleryTitle: "実際のプログラム実機スクリーンショットギャラリー",
    galleryDesc: "現在開発が完了し、正式に配布されているWindowsネイティブアプリケーションの実際の動作例です。下のタブをクリックして、各状態の高解像度デザインをご確認ください。",
    tabSkins: "テーマスキン＆スタイル選択",
    tabSkinsDesc: "AIDA64 Dark、Cyberpunk、RGB、Glass UIなど8種類以上の華やかなシグネチャープリセットスキンの切り替え機能と、ゲージスタイルのカスタム画面です。",
    tabMain: "メインモニタリングダッシュボード",
    tabMainDesc: "CPU/GPUの占有率と負荷状態、精密温度ダイヤルゲージをひと目で確認できるメインの標準UIデザインです。",
    tabWidgets: "ウィジェット追加＆リアルタイム制御",
    tabWidgetsDesc: "搭載されたSSD、物理ドライブ、内蔵温度センサーを簡単に追加・削除できるダイナミックウィジェットビルダー画面です。",
    zoomTipTitle: "💡 拡大鏡のワンクリック確認",
    zoomTipContent: <>スクリーンショット画像にマウスを乗せて <span className="font-semibold text-slate-200">拡大(Fullscreen)ボタン</span> をクリックすれば、ディテールをピクセル単位で高画質でお楽しみいただけます。</>,
    zoomClose: "✕ 閉じる",
    zoomHint: "クリックするか、右上の閉じるボタンを選択して終了してください。",
    chooseItem: "追加するウィジェットを選択",
    unmountedSensors: "現在システムにマウントされていない未使用センサーのリストです。選択するとすぐにダッシュボードのサイドバースロットに登録され、リアルタイム監視が開始されます。",
    added: "登録済",
    close: "閉じる",
    prepTitle: "ダウンロード準備中",
    prepWarning: "正式配布およびライセンス連動システムのリリース準備中",
    prepDesc: "現在、ノバモンのインストールファイルの配布およびライセンス認証システムは、最終のセキュリティ審査段階にあります。近いうちに公式ダウンロードが開始される予定です！",
    prepGuideTitle: "体験案内:",
    prepGuideDesc: "ブランドページの真ん中にある「リアルタイムLiveデモシミュレーター」を通じて、実際のPCバックグラウンド駆動状況と同様のウィジェットカスタム、スキン切り替え、精密ゲージ機能を完全体験できます。",
    prepClose: "確認 (デモを体験)",
    specTitle: "主要ソフトウェア仕様",
    specSpecs: "Specifications",
    specCpuTitle: "CPUモニタリング",
    specCpuDesc: "プロセッサーの稼働率とコアの作動比率を直感的に描き、中央処理システム全体のリソースを精密に測定します。",
    specGpuTitle: "GPU温度確認",
    specGpuDesc: "グラフィックカードの温度を視覚化し、過酷な負荷状況での過熱スロットリングやオーバーヘッドを制御・表示します。",
    specRamTitle: "RAM使用量確認",
    specRamDesc: "物理メモリのアクティブな数値と容量を、常時低いオーバーヘッドでトラッキングします。",
    specSkinsTitle: "多彩なプレセットスキン",
    specSkinsDesc: "クラシックゲーム風のCyberpunkから、エレガントなBlack Goldテーマまでワンクリックで瞬時に切り替えられます。",
    pricingTitle: "最適なライセンスプラン",
    pricingDesc: "一度のご購入で永久的な使用権と最大2台のPC認証に対応。毎月の自動決済なしでシステムリソース温度 of PC の完全制御を構築します。",
    boardKicker: "Community Board",
    boardTitle: "訪問者掲示板",
    boardDesc: "NovaMonの感想、質問、不具合報告、改善アイデアを投稿できます。",
    boardStorageNotice: "投稿はSupabaseに保存され、すべての訪問者が同じ掲示板を閲覧できます。",
    boardWriteTitle: "新規投稿",
    boardNameLabel: "名前",
    boardTitleLabel: "タイトル",
    boardMessageLabel: "内容",
    boardNamePlaceholder: "ニックネーム",
    boardTitlePlaceholder: "タイトルを入力",
    boardMessagePlaceholder: "質問や意見を書いてください",
    boardSubmit: "投稿する",
    boardEmpty: "まだ投稿がありません。",
    boardLoading: "投稿を読み込んでいます。",
    boardLoadError: "投稿を読み込めませんでした。しばらくしてからもう一度お試しください。",
    boardMissingConfig: "Supabase環境変数が未設定のため、掲示板を利用できません。",
    boardCountLabel: "投稿数",
    supportFaq: "よくある質問",
    supportFaqTag: "Support FAQ",
    sensorInfo: "システムセンサー情報",
    langNameKo: "한국어",
    langNameEn: "English",
    langNameJa: "日本語",
    langNameZh: "中文",
    langNameEs: "Español",
    popSelected: "おすすめ",
    proBadgeText: "永久使用 · 最大2台認証",
    freeBadgeText: "30日間無料体験"
  },
  zh: {
    brand: "NovaMon",
    liveDemo: "实时体验仪表板",
    keySpecs: "核心规格",
    pricingPlans: "许可计划",
    proAct: "Pro激活/购买 ↗",
    faq: "常见问题",
    communityBoard: "留言板",
    freeDownload: "免费下载",
    langSelect: "语言选择",
    stableRelease: "官方稳定版发布",
    heroTitle: <>最直观的 <br className="sm:hidden" /> PC监控系统 <span className="text-[#caa63d]">NovaMon</span></>,
    heroDesc: "全面追踪 CPU 占有率、RAM 使用量、磁盘可用空间及硬件设备实时温度。搭载轻量级原生模块，体验无游戏延迟或轻微卡顿的流畅状态监控。",
    heroDownload: "免费下载安装程序 (EXE)",
    heroExplore: "查看仪表板",
    osSupport: "支持系统",
    fileSize: "文件大小",
    cpuImpact: "CPU占用",
    actualUiTitle: "实际程序运行画面",
    actualUiDesc: "这是已经开发完成并正在运行的 NovaMon 桌面端程序的实际主监控仪表板画面。",
    realtimeConnected: "实时监控中",
    kernelTemp: "内核温度等级",
    safe: "安全",
    activeCore: "活动核心",
    coresThreads: "8核心 / 16线程",
    vStat1: "上方画面是在实际 Windows 环境下运行的",
    vStat2: "的真实运行测量画面。",
    galleryTitle: "实际程序运行截图画廊",
    galleryDesc: "这是已经开发完毕并正式分发的 Windows 原生应用程序的实际运行示例。点击下方标签即可查看各状态下的高分辨率设计。",
    tabSkins: "主题皮肤和样式选择",
    tabSkinsDesc: "支持 AIDA64 Dark、Cyberpunk、RGB、Glass UI 等 8 种以上华丽的签名预设皮肤切换，以及量规样式自定义画面。",
    tabMain: "主监控仪表板",
    tabMainDesc: "该主默认 UI 设计可以一目了然地查看 CPU / GPU 的占用率和负载状态以及精密温度拨盘仪表。",
    tabWidgets: "新增小组件和实时控制",
    tabWidgetsDesc: "动态小组件构建器画面，可以轻松添加/删除所需的 SSD 安装数量、物理驱动器状态和硬件温度监控目标。",
    zoomTipTitle: "💡 放大镜一键确认",
    zoomTipContent: <>将鼠标移至屏幕截图上方，然后点击 <span className="font-slate-200 font-semibold">全屏 (Fullscreen) 按钮</span>，即可详细观赏精确到像素的高品质渲染细节。</>,
    zoomClose: "✕ 关闭",
    zoomHint: "点击任意位置或选择右上角关闭按钮退出。",
    chooseItem: "选择要添加的小组件项",
    unmountedSensors: "当前系统中未挂载的未使用传感器列表。选择一项即可立即注册到仪表板侧边栏的空闲插槽中，开始实时监控。",
    added: "已添加",
    close: "关闭",
    prepTitle: "正在准备下载",
    prepWarning: "正式版下载及许可互联功能研发准备中",
    prepDesc: "目前，NovaMon 桌面端安装文件的发布和许可认证和处理机制正在进行最后一轮安全审查。正式下载渠道很快就会向玩家敞开！",
    prepGuideTitle: "体验指南:",
    prepGuideDesc: "您可以通过该品牌页正中央的“实时 Live 演示模拟器”，完美预览与实际 PC 后台运行完全一致的小组件自定义、皮肤切换和精密表盘测量功能。",
    prepClose: "确认 (去体验 Demo)",
    specTitle: "软件主打规格参数",
    specSpecs: "Specifications",
    specCpuTitle: "CPU 监控",
    specCpuDesc: "直观绘制处理器占用率和核心运行比例，精确测量整个中央处理系统的资源。",
    specGpuTitle: "GPU 温度检测",
    specGpuDesc: "可视化显卡温度，在极端负载情况下控制过热降频和系统开销问题。",
    specRamTitle: "RAM 使用率检测",
    specRamDesc: "以轻量化格式时常追踪物理内存的活动指标和剩余空间占用状态。",
    specSkinsTitle: "支持多样皮肤预设",
    specSkinsDesc: "从经典游戏质感的 Cyberpunk 到高端的 Black Gold 主题，支持一键切换完美呈现。",
    pricingTitle: "价格合理实惠的许可计划",
    pricingDesc: "一次购买即可终身享有，最多支持 2 台设备验证。无需月度定期扣款即可拥有精细资源管理器。",
    boardKicker: "Community Board",
    boardTitle: "访客留言板",
    boardDesc: "可留下 NovaMon 使用评价、问题、错误反馈和功能建议。",
    boardStorageNotice: "留言会保存到 Supabase，所有访客都能看到同一个列表。",
    boardWriteTitle: "发布留言",
    boardNameLabel: "姓名",
    boardTitleLabel: "标题",
    boardMessageLabel: "内容",
    boardNamePlaceholder: "昵称",
    boardTitlePlaceholder: "输入标题",
    boardMessagePlaceholder: "写下你的问题或反馈",
    boardSubmit: "发布",
    boardEmpty: "暂无留言。",
    boardLoading: "正在加载留言。",
    boardLoadError: "无法加载留言，请稍后重试。",
    boardMissingConfig: "未设置 Supabase 环境变量，留言板暂不可用。",
    boardCountLabel: "留言数",
    supportFaq: "常见问题",
    supportFaqTag: "Support FAQ",
    sensorInfo: "系统传感器指标",
    langNameKo: "한국어",
    langNameEn: "English",
    langNameJa: "日本語",
    langNameZh: "中文",
    langNameEs: "Español",
    popSelected: "热门推荐",
    proBadgeText: "终身使用 · 最多支持 2 台设备",
    freeBadgeText: "提供 30 天免费试用"
  },
  es: {
    brand: "NovaMon",
    liveDemo: "Panel de Demostración en Vivo",
    keySpecs: "Especificaciones Clave",
    pricingPlans: "Planes de Licencia",
    proAct: "Activación/Compra Pro ↗",
    faq: "Preguntas Frecuentes",
    communityBoard: "Foro",
    freeDownload: "Descargar Gratis",
    langSelect: "Idioma",
    stableRelease: "Lanzamiento Estable Oficial",
    heroTitle: <>El Monitoreo de PC <br className="sm:hidden" /> Más Intuitivo, <span className="text-[#caa63d]">NovaMon</span></>,
    heroDesc: "Realice un seguimiento perfecto del uso de CPU, la carga de RAM, la disponibilidad de disco y las temperaturas del hardware en tiempo real. Experimente un monitoreo ultra ligero y sin retrasos.",
    heroDownload: "Descargar Instalador Gratis (EXE)",
    heroExplore: "Explorar Panel",
    osSupport: "SOPORTE OS",
    fileSize: "TAMAÑO DE ARCHIVO",
    cpuImpact: "IMPACTO EN CPU",
    actualUiTitle: "Pantalla de Operación de la Aplicación Real",
    actualUiDesc: "Esta es la interfaz real del panel de monitoreo principal del programa de escritorio NovaMon, completamente desarrollado y en funcionamiento.",
    realtimeConnected: "CONEXIÓN EN TIEMPO REAL",
    kernelTemp: "Nivel de Temp del Kernel",
    safe: "SEGURO",
    activeCore: "Núcleos Activos",
    coresThreads: "8 núcleos / 16 hilos",
    vStat1: "La pantalla de arriba es la interfaz real de medición en un entorno de Windows de",
    vStat2: " ejecutándose de manera directa.",
    galleryTitle: "Galería de Capturas de Pantalla Reales del Programa",
    galleryDesc: "Ejemplos de ejecución reales de la aplicación nativa de Windows. Haga clic en las pestañas de abajo para ver los diseños de alta resolución en cada estado.",
    tabSkins: "Aspectos de Tema y Selección de Estilo",
    tabSkinsDesc: "Cambie entre más de 8 deslumbrantes aspectos preestablecidos de firma que incluyen AIDA64 Dark, Cyberpunk, RGB y Glass UI y personalice los estilos de los indicadores.",
    tabMain: "Panel de Monitoreo Principal",
    tabMainDesc: "Diseño de interfaz de usuario predeterminado principal para ver el uso de CPU/GPU, las condiciones de carga y los medidores de marcación de temperatura de precisión.",
    tabWidgets: "Adición de Widgets y Control en Tiempo Real",
    tabWidgetsDesc: "Pantalla del creador de widgets dinámicos para agregar/eliminar fácilmente unidades físicas SSD, tamaños de volumen montados y objetivos de sensores.",
    zoomTipTitle: "💡 Vista de Zoom con un Clic",
    zoomTipContent: <>Pase el cursor sobre la captura de pantalla y haga clic en lo <span className="font-slate-200 font-semibold">botón de pantalla completa</span> para apreciar los detalles de renderizado en alta fidelidad.</>,
    zoomClose: "✕ Cerrar",
    zoomHint: "Haga clic en cualquier lugar o elija el botón Cerrar arriba a la derecha para salir.",
    chooseItem: "Seleccionar Widget para Agregar",
    unmountedSensors: "Sensores de hardware actualmente no montados. Al seleccionar uno, se registra instantáneamente en la vacante de la barra lateral para iniciar el monitoreo en tiempo real.",
    added: "Añadido",
    close: "Cerrar",
    prepTitle: "Preparando Descarga",
    prepWarning: "La descarga oficial y las conexiones están en fases finales",
    prepDesc: "Actualmente, la distribución de archivos y la integración de licencias están en procesos de auditoría final de seguridad. ¡La descarga oficial estará disponible pronto!",
    prepGuideTitle: "Información de Prueba:",
    prepGuideDesc: "Use el 'Panel de Demostración en Vivo' en esta página para experimentar las personalizaciones de widgets en tiempo real y el comportamiento óptimo de NovaMon.",
    prepClose: "Aceptar (Ir a Probar Demo)",
    specTitle: "Especificaciones Principales del Software",
    specSpecs: "Especificaciones",
    specCpuTitle: "Monitoreo de CPU",
    specCpuDesc: "Dibuja digitalmente el uso del procesador y la carga de trabajo activa para medir los recursos del sistema de procesamiento central.",
    specGpuTitle: "Monitoreo de Temp de GPU",
    specGpuDesc: "Visualiza la temperatura de la tarjeta gráfica para controlar el estrangulamiento por sobrecalentamiento en escenarios de gran carga de trabajo.",
    specRamTitle: "Uso de Memoria RAM",
    specRamDesc: "Realiza un seguimiento de la memoria física activa y la capacidad total disponible en un formato de bajo impacto de rendimiento.",
    specSkinsTitle: "Diversos Aspectos de Piel",
    specSkinsDesc: "Cambio impecable con un solo clic desde el nostálgico Cyberpunk hasta el lujoso diseño de Black Gold.",
    pricingTitle: "Planes de Licencia Justos",
    pricingDesc: "Adquiera la licencia perpetua de por vida para hasta 2 PC simultáneos. Disfrute del monitoreo sin cuotas mensuales recurrentes.",
    boardKicker: "Community Board",
    boardTitle: "Foro de Visitantes",
    boardDesc: "Deje reseñas, preguntas, reportes de errores e ideas para NovaMon.",
    boardStorageNotice: "Las publicaciones se guardan en Supabase para que todos vean el mismo foro.",
    boardWriteTitle: "Nueva Publicación",
    boardNameLabel: "Nombre",
    boardTitleLabel: "Título",
    boardMessageLabel: "Mensaje",
    boardNamePlaceholder: "Apodo",
    boardTitlePlaceholder: "Ingrese un título",
    boardMessagePlaceholder: "Escriba su pregunta o comentario",
    boardSubmit: "Publicar",
    boardEmpty: "Aún no hay publicaciones.",
    boardLoading: "Cargando publicaciones.",
    boardLoadError: "No se pudieron cargar las publicaciones. Inténtelo de nuevo pronto.",
    boardMissingConfig: "Faltan variables de entorno de Supabase, por lo que el foro no está disponible.",
    boardCountLabel: "Publicaciones",
    supportFaq: "Preguntas Frecuentes",
    supportFaqTag: "Support FAQ",
    sensorInfo: "Sensor de Sistema",
    langNameKo: "한국어",
    langNameEn: "English",
    langNameJa: "日本語",
    langNameZh: "中文",
    langNameEs: "Español",
    popSelected: "Recomendado",
    proBadgeText: "Uso de por Vida · Hasta 2 PC",
    freeBadgeText: "Ofrece 30 Días de Prueba Gratis"
  }
};

const localizedFeatures = {
  ko: [
    {
      title: "CPU 모니터링",
      description: "프로세서 점유율과 코어 가동 비율을 직관적으로 그려 전체 중앙처리 시스템의 리소스를 정밀 측정합니다.",
      icon: <Cpu className="w-5 h-5 text-blue-400" />
    },
    {
      title: "GPU 온도 확인",
      description: "그래픽 카드의 온도를 시각화하여, 극심한 부하 상황 시 과열 쓰로틀링과 오버헤드를 제어합니다.",
      icon: <Thermometer className="w-5 h-5 text-blue-400" />
    },
    {
      title: "RAM 사용량 확인",
      description: "물리 메모리 활성 수치와 용량을 가벼운 포맷으로 점유 상태를 상시 트래킹합니다.",
      icon: <Database className="w-5 h-5 text-blue-400" />
    },
    {
      title: "다양한 스킨 지원",
      description: "고전 게임 감성의 Cyberpunk부터 고급 Black Gold 테마까지 원클릭으로 완벽히 변환합니다.",
      icon: <Palette className="w-5 h-5 text-blue-400" />
    }
  ],
  en: [
    {
      title: "CPU Monitoring",
      description: "Digitally draws processor share and core active workload to inspect central processing resources with high precision.",
      icon: <Cpu className="w-5 h-5 text-blue-400" />
    },
    {
      title: "GPU Temperature Status",
      description: "Visualizes graphics card temperatures to maintain overheat throttling and overhead issues during intense workload states.",
      icon: <Thermometer className="w-5 h-5 text-blue-400" />
    },
    {
      title: "RAM Usage Tracker",
      description: "Tracks physical memory active state and total available volume continuously in a high-efficiency ultra-lean format.",
      icon: <Database className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Diverse Preset Skins",
      description: "Seamless one-click switching from Cyberpunk's retro-gaming neon tone to luxurious Black Gold designs.",
      icon: <Palette className="w-5 h-5 text-blue-400" />
    }
  ],
  ja: [
    {
      title: "CPUモニタリング",
      description: "プロセッサーの稼働率とコアの作動比率を直感的に描き、中央処理システム全体のリソースを精密に測定します。",
      icon: <Cpu className="w-5 h-5 text-blue-400" />
    },
    {
      title: "GPU温度確認",
      description: "グラフィックカードの温度を視覚化し、過酷な負荷状況での過熱スロットリングやオーバーヘッドを制御・表示します。",
      icon: <Thermometer className="w-5 h-5 text-blue-400" />
    },
    {
      title: "RAM使用量確認",
      description: "物理メモリのアクティブな数値と容量を、常時低いオーバーヘッドでトラッキングします。",
      icon: <Database className="w-5 h-5 text-blue-400" />
    },
    {
      title: "多彩なプレセットスキン",
      description: "クラシックゲーム風のCyberpunkから、エレガントなBlack Goldテーマまでワンクリックで瞬時に切り替えられます。",
      icon: <Palette className="w-5 h-5 text-blue-400" />
    }
  ],
  zh: [
    {
      title: "CPU 监控",
      description: "直观绘制处理器占用率和核心运行比例，精确测量整个中央处理系统的资源。",
      icon: <Cpu className="w-5 h-5 text-blue-400" />
    },
    {
      title: "GPU 温度检测",
      description: "可视化显卡温度，在极端负载情况下控制过热降频和系统开销问题。",
      icon: <Thermometer className="w-5 h-5 text-blue-400" />
    },
    {
      title: "RAM 使用率检测",
      description: "以轻量化格式时常追踪物理内存的活动指标和剩余空间占用状态。",
      icon: <Database className="w-5 h-5 text-blue-400" />
    },
    {
      title: "支持多样皮肤预设",
      description: "从经典游戏质感的 Cyberpunk 到高端的 Black Gold 主题，支持一键切换完美呈现。",
      icon: <Palette className="w-5 h-5 text-blue-400" />
    }
  ],
  es: [
    {
      title: "Monitoreo de CPU",
      description: "Dibuja digitalmente el uso del procesador y la carga de trabajo activa para medir los recursos del sistema de procesamiento central.",
      icon: <Cpu className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Monitoreo de Temp de GPU",
      description: "Visualiza la temperatura de la tarjeta gráfica para controlar el estrangulamiento por sobrecalentamiento en escenarios de gran carga de trabajo.",
      icon: <Thermometer className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Uso de Memoria RAM",
      description: "Realiza un seguimiento de la memoria física activa y la capacidad total disponible en un formato de bajo impacto de rendimiento.",
      icon: <Database className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Diversos Aspectos de Piel",
      description: "Cambio impecable con un solo clic desde el nostálgico Cyberpunk hasta el lujoso diseño de Black Gold.",
      icon: <Palette className="w-5 h-5 text-blue-400" />
    }
  ]
};

const localizedPlans = {
  ko: [
    {
      name: "무료 체험판",
      price: "30일 무료",
      priceSub: "",
      badge: "30일 무료",
      description: "NovaMon의 모든 기능을 30일 동안 제한 없이 사용할 수 있습니다.\n체험 기간 종료 후 Pro 라이선스 인증이 필요합니다.",
      features: [
        "NovaMon 전체 기능 사용",
        "모든 센서 및 모니터링 기능 사용",
        "모든 테마 및 스킨 사용",
        "위젯 추가 및 레이아웃 편집 가능",
        "30일 무료 체험 제공"
      ],
      cta: "30일 무료 체험 다운로드",
      url: "",
      highlight: false
    },
    {
      name: "Pro 영구 라이선스",
      price: "₩9,900",
      priceSub: "1회 구매",
      badge: "평생 사용 · 최대 2대 인증",
      description: "한 번 구매하면 평생 사용할 수 있는 영구 라이선스입니다.\n구매 이메일 인증 후 즉시 Pro 기능이 활성화됩니다.",
      features: [
        "NovaMon 전체 기능 사용",
        "모든 센서 및 모니터링 기능 사용",
        "모든 테마 및 스킨 사용",
        "위젯 추가 및 레이아웃 편집 가능",
        "평생 무료 업데이트",
        "이메일 인증 방식",
        "최대 2대 PC 인증 가능",
        "영구 사용"
      ],
      cta: "Pro 영구 라이선스 구매하기",
      url: "https://8579228268598.gumroad.com/l/jicgv",
      highlight: true
    }
  ],
  en: [
    {
      name: "Free Trial",
      price: "30 Days Free",
      priceSub: "",
      badge: "30 Days Free",
      description: "Use all features of NovaMon dynamically for 30 days without restriction.\nPro licensing is required for usage after the trial ends.",
      features: [
        "NovaMon whole system functions",
        "All sensors and monitoring features",
        "All presets theme skins allowed",
        "Dynamic widgets and layout controls",
        "30-day free-of-charge trial access"
      ],
      cta: "Download 30-Day Free Trial",
      url: "",
      highlight: false
    },
    {
      name: "Pro Lifetime License",
      price: "₩9,900",
      priceSub: "One-time Purchase",
      badge: "Lifetime Use · Max 2 PCs",
      description: "Lump-sum perpetual license. Pay once, own forever.\nActivate the premium Pro features instantly with purchase email verification.",
      features: [
        "NovaMon whole system functions",
        "All sensors and monitoring features",
        "All presets theme skins allowed",
        "Dynamic widgets and layout controls",
        "Lifetime free updates support",
        "Hassle-free email login check",
        "Max 2 PCs authentication allowed",
        "Perpetual permanent use entitlement"
      ],
      cta: "Buy Pro Lifetime License",
      url: "https://8579228268598.gumroad.com/l/jicgv",
      highlight: true
    }
  ],
  ja: [
    {
      name: "無料体験版",
      price: "30日間無料",
      priceSub: "",
      badge: "30日間無料",
      description: "NovaMonの全機能を30日間、機能制限なしで使用できます。\n体験期間終了後にはProライセンス認証が必要です。",
      features: [
        "NovaMon全機能使用可能",
        "全センサーおよびモニター機能",
        "全テーマおよびスキン使用可能",
        "ウィジェット追加＆レイアウト編集対応",
        "30日間無料特典提供"
      ],
      cta: "30日間無料体験版をダウンロード",
      url: "",
      highlight: false
    },
    {
      name: "Pro永久ライセンス",
      price: "₩9,900",
      priceSub: "買い切り",
      badge: "永久使用 · 最大2台認証",
      description: "一度のご購入で生涯お使いいただける永久ライセンスです。\nご購入時のメールアドレスを入力するだけで直ちにPro機能が有効になります。",
      features: [
        "NovaMon全機能使用可能",
        "全センサーおよびモニター機能",
        "全テーマおよびスキン使用可能",
        "ウィジェット追加＆レイアウト編集対応",
        "永久無料アップデート",
        "簡単なメールアドレス認証",
        "最大2台PC認証可能",
        "永久的な使用特典"
      ],
      cta: "Pro永久ライセンスを購入する",
      url: "https://8579228268598.gumroad.com/l/jicgv",
      highlight: true
    }
  ],
  zh: [
    {
      name: "免费体验版",
      price: "30天免费",
      priceSub: "",
      badge: "30天免费",
      description: "无限期、无限制体验 NovaMon 所有的核心监控资源 30 天。\n试用期截止后需完成 Pro 许可证认证才可无限期查阅。",
      features: [
        "支持 NovaMon 全方位完整功能",
        "所有传感器及监控仪表正常启用",
        "任意加载所有的主题与标志性皮肤",
        "支持小组件及排版自由添加编辑",
        "官方提供 30 天免费试用期"
      ],
      cta: "下载支持 30 天试用版",
      url: "",
      highlight: false
    },
    {
      name: "Pro 永久许可",
      price: "₩9,900",
      priceSub: "一次性购买",
      badge: "终身使用 · 最多支持 2 台验证",
      description: "一次支付即终身享有的买断版永久许可协议。\n输入付款所用的电子邮箱注册后即可免激活解锁所有高级功能。",
      features: [
        "支持 NovaMon 全方位完整功能",
        "所有传感器及监控仪表正常启用",
        "任意加载所有的主题与标志性皮肤",
        "支持小组件及排版自由添加编辑",
        "尊享终身免费升级支持",
        "纯净简洁邮箱认证方案",
        "最多支持 2 台设备验证授权",
        "终生有效，支持久远运行"
      ],
      cta: "购买 Pro 终身永久许可",
      url: "https://8579228268598.gumroad.com/l/jicgv",
      highlight: true
    }
  ],
  es: [
    {
      name: "Prueba Gratuita",
      price: "30 Días Gratis",
      priceSub: "",
      badge: "30 Días Gratis",
      description: "Utilice todos los aspectos y la medición de NovaMon durante 30 días sin limitaciones.\nSe requiere activación de licencia Pro una vez expirada la prueba.",
      features: [
        "Uso ilimitado y completo de NovaMon",
        "Métricas en vivo de hardware y sensores",
        "Uso de todos los aspectos y presets",
        "Adición de widgets y control de marcos",
        "Soporte de prueba y evaluación por 30 días"
      ],
      cta: "Descargar Prueba de 30 Días",
      url: "",
      highlight: false
    },
    {
      name: "Licencia Pro de por Vida",
      price: "₩9,900",
      priceSub: "Compra Única",
      badge: "Uso Eterno · Máx 2 PC",
      description: "Una licencia permanente completa con un solo pago único.\nEl estatus Pro premium activa de manera inmediata ingresando su correo de pago.",
      features: [
        "Uso ilimitado y completo de NovaMon",
        "Métricas en vivo de hardware y sensores",
        "Uso de todos los aspectos y presets",
        "Adición de widgets y control de marcos",
        "Actualizaciones continuas gratis para siempre",
        "Verificación rápida por correo electrónico de pago",
        "Máximo de 2 PC autorizadas por correo",
        "Uso perpetuo garantizado de por vida"
      ],
      cta: "Comprar Licencia Pro de por Vida",
      url: "https://8579228268598.gumroad.com/l/jicgv",
      highlight: true
    }
  ]
};

const localizedFaqs = {
  ko: [
    {
      question: "Windows에서 사용할 수 있나요?",
      answer: "네. NovaMon은 Windows 10 및 Windows 11을 지원합니다. 가벼운 설계로 제작되어 게임 및 일반 작업 환경에서도 부담 없이 사용할 수 있습니다."
    },
    {
      question: "무료 버전과 Pro 버전의 차이는 무엇인가요?",
      answer: "무료 버전은 30일 동안 모든 기능을 체험할 수 있습니다. Pro 라이선스 구매 시 기간 제한 없이 모든 기능을 영구적으로 사용할 수 있습니다."
    },
    {
      question: "라이선스는 한 번만 구매하면 되나요?",
      answer: "네. Pro 라이선스는 일회성 구매 방식이며, 구매 후 영구적으로 사용할 수 있습니다."
    }
  ],
  en: [
    {
      question: "Can it be used on Windows?",
      answer: "Yes. NovaMon natively supports active operations on Windows 10 and Windows 11. Designed with light footprint parameters, it functions lag-free even in demanding gaming states."
    },
    {
      question: "What is the difference between Free and Pro?",
      answer: "The Free edition lets you experience all active widgets and dial skins for 30 days without restriction. Purchasing Pro allows permanent usage on your machines indefinitely."
    },
    {
      question: "Do I only need to buy the license once?",
      answer: "Yes. The Pro license is indeed a one-time perpetual purchase, meaning you pay once and own the usage rights globally forever without subscription renewals."
    }
  ],
  ja: [
    {
      question: "Windowsで使用できますか？",
      answer: "はい、NovaMonはWindows 10およびWindows 11を完全にサポートしています。不要な負荷を徹底排除したコード設計により、ゲームプレイや負荷の高い動作作業でも全く支障ありません。"
    },
    {
      question: "無料版とPro版の違いを教えてください。",
      answer: "無料版では30日間の試用期間中にすべてのスキンやウィジェットカスタマイズをお試しいただけます。期限後は、一度Proライセンスを購入すれば生涯にわたり全プリセットが永久開放されます。"
    },
    {
      question: "ライセンスは一回限りの買い切り仕様ですか？",
      answer: "はい。Proライセンスはワンクリック決済による完全買い切りとなっており、ご購入後のアップグレード契約やサブスク決済などのランニングコストは一切発生しません。"
    }
  ],
  zh: [
    {
      question: "可以在 Windows 系统下工作吗？",
      answer: "可以。NovaMon 专为 Windows 10 及 Windows 11 进行全网性能优化。产品运行时极度轻量低损，即便是进行竞技游戏或 3D 渲染，也绝不会出现任何卡顿干扰。"
    },
    {
      question: "免费版本与 Pro 专业版有什么具体差异？",
      answer: "免费试用版本在 30 天内拥有与商业 Pro 尊贵级一致的表盘展现权利。升级 Pro 后，将享有除时间期限锁定之外的所有设备并发运行资格。"
    },
    {
      question: "专业许可证是单次支付永久授权的机制吗？",
      answer: "是的。专业许可是一次性买断产品，后续更新均无需缴纳订阅费、维护费或二次升级升级费用，终身均有完全享用权益。"
    }
  ],
  es: [
    {
      question: "¿Es compatible de manera óptima con Windows?",
      answer: "Sí. NovaMon tiene soporte oficial total para sistemas Windows 10 y Windows 11. Fabricado con arquitectura de bajo consumo, puede ejecutarse de fondo en juegos pesados sin generar latencia."
    },
    {
      question: "¿Cuáles son los contrastes entre la versión gratuita y la Pro?",
      answer: "La versión gratuita ofrece evaluación total de características durante un límite de 30 días. La licencia Pro remueve por completo el intervalo temporal para uso permanente."
    },
    {
      question: "¿El pago de la licencia Pro es de tipo compra única?",
      answer: "Correcto. El plan Pro es una compra de transacción única, lo que significa que no se contemplan cargos por renovación mensual ni cobros adicionales por actualizaciones de software."
    }
  ]
};

const getLocalizedSidebarItem = (id: string, lang: "ko" | "en" | "ja" | "zh" | "es") => {
  const mapping: Record<string, Record<"ko" | "en" | "ja" | "zh" | "es", { label: string; sub: string }>> = {
    "disk": {
      ko: { label: "C: 디스크 사용량", sub: "사용 가능 1760.2GB / 전체 3724.6GB" },
      en: { label: "C: Disk Usage", sub: "Free 1760.2GB / Total 3724.6GB" },
      ja: { label: "C: ディスク使用量", sub: "空き 1760.2GB / 合計 3724.6GB" },
      zh: { label: "C: 磁盘使用率", sub: "空闲 1760.2GB / 总计 3724.6GB" },
      es: { label: "C: Uso de Disco", sub: "Libre 1760.2GB / Total 3724.6GB" }
    },
    "gpu-name": {
      ko: { label: "그래픽 카드 명칭", sub: "NVIDIA GeForce RTX 3060" },
      en: { label: "Graphics Card Name", sub: "NVIDIA GeForce RTX 3060" },
      ja: { label: "グラフィックカード名", sub: "NVIDIA GeForce RTX 3060" },
      zh: { label: "显卡型号", sub: "NVIDIA GeForce RTX 3060" },
      es: { label: "Tarjeta Gráfica", sub: "NVIDIA GeForce RTX 3060" }
    },
    "cpu-name": {
      ko: { label: "CPU 프로세서 명칭", sub: "AMD Ryzen 7 5800X" },
      en: { label: "CPU Name", sub: "AMD Ryzen 7 5800X" },
      ja: { label: "CPUプロセッサ名", sub: "AMD Ryzen 7 5800X" },
      zh: { label: "CPU处理器型号", sub: "AMD Ryzen 7 5800X" },
      es: { label: "Procesador CPU", sub: "AMD Ryzen 7 5800X" }
    },
    "ram-total": {
      ko: { label: "전체 메모리 크기", sub: "63.9 GB 물리 메모리" },
      en: { label: "Total Memory Size", sub: "63.9 GB Physical Memory" },
      ja: { label: "合計メモリサイズ", sub: "63.9 GB 物理メモリ" },
      zh: { label: "系统总内存容量", sub: "63.9 GB 物理内存" },
      es: { label: "Capacidad de Memoria Total", sub: "63.9 GB Memoria Física" }
    },
    "gpu-use": {
      ko: { label: "GPU 실시간 사용량", sub: "Core load" },
      en: { label: "GPU Core Load", sub: "Core load" },
      ja: { label: "GPUコア使用率", sub: "Core load" },
      zh: { label: "GPU核心利用率", sub: "核心利用率" },
      es: { label: "Uso de Núcleo GPU", sub: "Carga de núcleo" }
    },
    "cpu-clock": {
      ko: { label: "CPU 가동 클럭", sub: "실시간 주파수" },
      en: { label: "CPU Active Clock", sub: "Active clock speed" },
      ja: { label: "CPUアクティブクロック", sub: "動作周波数" },
      zh: { label: "CPU活动主频", sub: "实时频率" },
      es: { label: "Frecuencia de CPU Activa", sub: "Velocidad de reloj activa" }
    },
    "disk-g": {
      ko: { label: "G: 디스크 사용률", sub: "여유 423.1GB / 전체 953.9GB" },
      en: { label: "G: Disk Usage", sub: "Free 423.1GB / Total 953.9GB" },
      ja: { label: "G: ディスク使用量", sub: "空き 423.1GB / 合計 953.9GB" },
      zh: { label: "G: 磁盘使用率", sub: "空闲 423.1GB / 总计 953.9GB" },
      es: { label: "G: Uso de Disco", sub: "Libre 423.1GB / Total 953.9GB" }
    },
    "temp-nvme": {
      ko: { label: "NVMe SSD 가동 온도", sub: "Crucial CT1000P3" },
      en: { label: "NVMe SSD Temp Status", sub: "Crucial CT1000P3" },
      ja: { label: "NVMe SSD動作温度", sub: "Crucial CT1000P3" },
      zh: { label: "NVMe SSD 主体温度", sub: "Crucial CT1000P3" },
      es: { label: "Temp de SSD NVMe", sub: "Crucial CT1000P3" }
    },
    "cpu-fan": {
      ko: { label: "CPU 팬 회전수", sub: "Chassis Fan 1" },
      en: { label: "CPU Fan Speed", sub: "Chassis Fan 1" },
      ja: { label: "CPUファン回転速度", sub: "Chassis Fan 1" },
      zh: { label: "CPU 风扇转速", sub: "Chassis Fan 1" },
      es: { label: "Velocidad del Ventilador", sub: "Chassis Fan 1" }
    },
    "ram-avail": {
      ko: { label: "여유 메모리 잔량", sub: "사용 가능한 물리 용량" },
      en: { label: "Available RAM Capacity", sub: "Free physical capacity" },
      ja: { label: "利用可能RAM残量", sub: "使用可能な物理容量" },
      zh: { label: "可用物理内存容量", sub: "可用物理空间" },
      es: { label: "RAM Física Disponible", sub: "Capacidad física libre" }
    },
    "power-draw": {
      ko: { label: "CPU 소모 전력량", sub: "Socket AM4" },
      en: { label: "CPU Package Wattage", sub: "Socket AM4" },
      ja: { label: "CPU消費電力", sub: "Socket AM4" },
      zh: { label: "CPU功耗能耗", sub: "Socket AM4" },
      es: { label: "Consumo de Vatiaje CPU", sub: "Enchufe AM4" }
    }
  };
  return mapping[id]?.[lang] || { label: id, sub: "" };
};

const dashboardImg = "https://i.imgur.com/BV526oT.png";
const skinsImg = "https://i.imgur.com/rXiZLfJ.png";
const customizingImg = "https://i.imgur.com/tje2QvJ.png";
import { 
  Cpu, 
  Thermometer, 
  Database, 
  Palette, 
  Check, 
  Download, 
  ChevronDown, 
  Mail, 
  Monitor, 
  MessageSquare,
  PenLine,
  Plus,
  Send,
  Sliders,
  Wifi,
  Maximize2,
  AlertTriangle
} from "lucide-react";

export default function App() {
  // --- MULTILINGUAL TRANSLATION STATE ---
  const [lang, setLang] = useState<"ko" | "en" | "ja" | "zh" | "es" >(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("novamon_lang") : null;
    if (saved && ["ko", "en", "ja", "zh", "es"].includes(saved)) {
      return saved as any;
    }
    if (typeof navigator !== "undefined") {
      const browserLang = navigator.language ? navigator.language.toLowerCase() : "";
      if (browserLang.startsWith("ko")) return "ko";
      if (browserLang.startsWith("ja")) return "ja";
      if (browserLang.startsWith("zh")) return "zh";
      if (browserLang.startsWith("es")) return "es";
    }
    return "en";
  });
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);

  // Sync lang with localStorage
  useEffect(() => {
    localStorage.setItem("novamon_lang", lang);
  }, [lang]);

  // Set SEO optimized browser tab title on mount
  useEffect(() => {
    document.title = "NovaMon - PC Monitoring Dashboard";
  }, []);

  // Download simulation state
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "completed">("idle");
  const [isPrepModalOpen, setIsPrepModalOpen] = useState<boolean>(false);
  
  // Track active FAQ accordion index
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  const [boardPosts, setBoardPosts] = useState<BoardPost[]>([]);
  const [boardForm, setBoardForm] = useState({
    author: "",
    title: "",
    message: "",
  });
  const [isBoardLoading, setIsBoardLoading] = useState<boolean>(true);
  const [isBoardSubmitting, setIsBoardSubmitting] = useState<boolean>(false);
  const [boardError, setBoardError] = useState<string | null>(null);

  useEffect(() => {
    const loadBoardPosts = async () => {
      if (!supabase) {
        setBoardError("missing-config");
        setIsBoardLoading(false);
        return;
      }

      setIsBoardLoading(true);
      setBoardError(null);

      const { data, error } = await supabase
        .from("posts")
        .select("id, author, title, content, created_at")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Failed to load Supabase posts:", error);
        setBoardError(error.message || "load-failed");
        setBoardPosts([]);
      } else {
        setBoardPosts(data ?? []);
      }

      setIsBoardLoading(false);
    };

    loadBoardPosts();
  }, []);

  // Official screenshot gallery tab state
  const [activeGalleryTab, setActiveGalleryTab] = useState<"skins" | "dashboard" | "customizing">("skins");
  const [isFullscreenImage, setIsFullscreenImage] = useState<string | null>(null);

  // --- INTERACTIVE NOVAMON CORE SIMULATION STATE ---
  const [selectedSkin, setSelectedSkin] = useState<string>("Black Yellow");
  const [selectedLayout, setSelectedLayout] = useState<string>("Dual Ring");
  const [isSkinDropdownOpen, setIsSkinDropdownOpen] = useState<boolean>(false);
  const [isLayoutDropdownOpen, setIsLayoutDropdownOpen] = useState<boolean>(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  // Default sidebar status items in the mockup
  const [sidebarItems, setSidebarItems] = useState([
    { id: "disk", label: "C: Disk Usage", value: "53%", sub: "Free 1760.2GB / Total 3724.6GB", isBar: true, fill: 53 },
    { id: "gpu-name", label: "Graphics Card Name", value: "NVIDIA GeForce RTX 3060", sub: "", isBar: false, fill: 0 },
    { id: "cpu-name", label: "CPU Name", value: "AMD Ryzen 7 5800X 8-Core Processor", sub: "", isBar: false, fill: 0 },
    { id: "ram-total", label: "Total Memory", value: "63.9 GB", sub: "", isBar: false, fill: 0 },
    { id: "gpu-use", label: "GPU Usage", value: "12%", sub: "", isBar: true, fill: 12 },
    { id: "cpu-clock", label: "CPU Clock", value: "4725 MHz", sub: "", isBar: true, fill: 85 },
  ]);

  // List of items the user can choose to add from the modal (matches Screenshot 3!)
  const addableItems = [
    { id: "disk-g", label: "G: Disk Usage", value: "56%", sub: "Free 423.1GB / Total 953.9GB", isBar: true, fill: 56 },
    { id: "temp-nvme", label: "NVMe SSD Temp", value: "41 °C", sub: "Crucial CT1000P3", isBar: false, fill: 0 },
    { id: "cpu-fan", label: "CPU Fan Speed", value: "1120 RPM", sub: "Chassis Fan 1", isBar: false, fill: 0 },
    { id: "ram-avail", label: "Available Memory", value: "52.9 GB", sub: "Free physical", isBar: false, fill: 0 },
    { id: "power-draw", label: "CPU Package Power", value: "65.4 W", sub: "Socket AM4", isBar: false, fill: 0 }
  ];

  const handleAddSidebarItem = (item: typeof addableItems[0]) => {
    if (sidebarItems.some(i => i.id === item.id)) return;
    setSidebarItems([...sidebarItems, item]);
    setIsAddModalOpen(false);
  };

  const handleRemoveSidebarItem = (id: string) => {
    setSidebarItems(sidebarItems.filter(item => item.id !== id));
  };
  // Dynamic skin-based visual rendering configs to match their visual screenshots!
  const getSkinThemes = () => {
    switch (selectedSkin) {
      case "AIDA64 Dark":
        return {
          border: "border-orange-500/30 shadow-[0_0_12px_rgba(249,115,22,0.15)]",
          titleColor: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500",
          cardBg: "bg-[#111215]",
          accentColor: "#f97316",
          accentText: "text-orange-400",
          accentBg: "bg-orange-950/40 text-orange-450 border border-orange-500/30",
          accentBar: "bg-gradient-to-r from-orange-500 to-amber-400",
          hudGlow: "shadow-[0_0_8px_rgba(249,115,22,0.25)]",
          labelColor: "text-orange-400",
          dotColor: "bg-amber-450"
        };
      case "Cyberpunk":
        return {
          border: "border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.1)]",
          titleColor: "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400",
          cardBg: "bg-slate-900/90",
          accentColor: "#f43f5e",
          accentText: "text-pink-550",
          accentBg: "bg-pink-950/40 text-pink-400 border border-pink-550/30",
          accentBar: "bg-gradient-to-r from-pink-500 to-cyan-400",
          hudGlow: "shadow-[0_0_8px_rgba(244,63,94,0.3)]",
          labelColor: "text-cyan-400",
          dotColor: "bg-cyan-400"
        };
      case "RGB Gaming":
        return {
          border: "border-purple-500/40 shadow-[0_0_15px_rgba(139,92,246,0.15)]",
          titleColor: "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-pulse",
          cardBg: "bg-zinc-950",
          accentColor: "#8b5cf6",
          accentText: "text-purple-400",
          accentBg: "bg-purple-950/45 text-purple-300 border border-purple-500/40",
          accentBar: "bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500",
          hudGlow: "shadow-[0_0_8px_rgba(139,92,246,0.3)]",
          labelColor: "text-indigo-300",
          dotColor: "bg-indigo-400"
        };
      case "Sci-Fi Blue":
        return {
          border: "border-sky-500/40",
          titleColor: "text-white shadow-sky-400/10",
          cardBg: "bg-[#0b1329]",
          accentColor: "#0284c7",
          accentText: "text-sky-450",
          accentBg: "bg-sky-950/40 text-sky-400 border border-sky-800/50",
          accentBar: "bg-sky-500",
          hudGlow: "shadow-[0_0_10px_rgba(14,165,233,0.3)]",
          labelColor: "text-sky-400",
          dotColor: "bg-sky-300"
        };
      case "Minimal Black":
        return {
          border: "border-slate-800",
          titleColor: "text-slate-100",
          cardBg: "bg-neutral-900",
          accentColor: "#64748b",
          accentText: "text-slate-200",
          accentBg: "bg-slate-800 text-slate-350 border border-slate-700",
          accentBar: "bg-slate-300",
          hudGlow: "shadow-none",
          labelColor: "text-slate-300",
          dotColor: "bg-neutral-100"
        };
      case "Black Green":
        return {
          border: "border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
          titleColor: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400",
          cardBg: "bg-[#050b06]",
          accentColor: "#10b981",
          accentText: "text-emerald-400",
          accentBg: "bg-emerald-950/40 text-emerald-300 border border-emerald-550/30",
          accentBar: "bg-gradient-to-r from-emerald-500 to-teal-400",
          hudGlow: "shadow-[0_0_8px_rgba(16,185,129,0.3)]",
          labelColor: "text-emerald-400",
          dotColor: "bg-emerald-400"
        };
      case "Black Yellow":
        return {
          border: "border-[#caa63d]/30",
          titleColor: "text-[#fff]",
          cardBg: "bg-[#0c0c0b]",
          accentColor: "#d9ae2e",
          accentText: "text-[#dcb137]",
          accentBg: "bg-[#252010] text-[#dec26e] border border-[#d2a831]/40",
          accentBar: "bg-gradient-to-r from-[#dec36c] to-[#e4cb7b]",
          hudGlow: "shadow-[0_0_10px_rgba(218,174,46,0.15)]",
          labelColor: "text-[#e2c161]",
          dotColor: "bg-emerald-400"
        };
      case "Glass UI":
        return {
          border: "border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]",
          titleColor: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300",
          cardBg: "bg-zinc-900/60",
          accentColor: "#c084fc",
          accentText: "text-purple-300",
          accentBg: "bg-purple-950/40 text-purple-200 border border-purple-500/20",
          accentBar: "bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400",
          hudGlow: "shadow-[0_0_12px_rgba(192,132,252,0.2)]",
          labelColor: "text-fuchsia-300",
          dotColor: "bg-indigo-300"
        };
      default:
        // Match their uploaded screenshot EXACTLY!
        return {
          border: "border-[#caa63d]/30",
          titleColor: "text-[#fff]",
          cardBg: "bg-[#0c0c0b]",
          accentColor: "#d9ae2e",
          accentText: "text-[#dcb137]",
          accentBg: "bg-[#252010] text-[#dec26e] border border-[#d2a831]/40",
          accentBar: "bg-gradient-to-r from-[#dec36c] to-[#e4cb7b]",
          hudGlow: "shadow-[0_0_10px_rgba(218,174,46,0.15)]",
          labelColor: "text-[#e2c161]",
          dotColor: "bg-emerald-400"
        };
    }
  };;

  const themeVars = getSkinThemes();

  // Dynamic Lists based on selected language
  const features = localizedFeatures[lang];
  const plans = localizedPlans[lang];
  const faqs = localizedFaqs[lang];

  const handleDownload = () => {
    window.open("https://github.com/zero5355/novamon/releases/tag/V0.3", "_blank");
  };

  const handleBoardSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const author = boardForm.author.trim();
    const title = boardForm.title.trim();
    const message = boardForm.message.trim();

    if (!author || !title || !message || !supabase || isBoardSubmitting) return;

    setIsBoardSubmitting(true);
    setBoardError(null);

    const { data, error } = await supabase
      .from("posts")
      .insert({
        author,
        title,
        content: message,
      })
      .select("id, author, title, content, created_at")
      .single();

    if (error) {
      console.error("Failed to create Supabase post:", error);
      setBoardError(error.message || "load-failed");
    } else if (data) {
      setBoardPosts((currentPosts) => [data, ...currentPosts]);
      setBoardForm({ author: "", title: "", message: "" });
    }

    setIsBoardSubmitting(false);
  };

  const formatBoardDate = (createdAt: string) => {
    const localeMap = {
      ko: "ko-KR",
      en: "en-US",
      ja: "ja-JP",
      zh: "zh-CN",
      es: "es-ES",
    };

    return new Intl.DateTimeFormat(localeMap[lang], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(createdAt));
  };

  const getSkinsList = () => {
    return [
      "AIDA64 Dark",
      "Cyberpunk",
      "RGB Gaming",
      "Sci-Fi Blue",
      "Minimal Black",
      "Black Green",
      "Black Yellow",
      "Glass UI"
    ];
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 antialiased font-sans selection:bg-blue-600 selection:text-white" id="novamon-main-app">
      
      {/* 1. Sticky Navigation Header */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-900" id="navbar">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-18 flex flex-col sm:flex-row items-center justify-between py-3 sm:py-0 gap-3 sm:gap-0">
          
          {/* Logo brand */}
          <a href="#hero" className="flex items-center gap-2 group hover:opacity-90 transition-opacity" id="logo-branding">
            <div className="w-8 h-8 rounded-lg bg-[#caa63d] text-slate-950 flex items-center justify-center font-black shadow-lg shadow-[#caa63d]/10">
              <Monitor className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm text-white leading-none">{t[lang].brand}</span>
              <span className="text-[9px] text-[#caa63d] font-mono tracking-widest font-semibold mt-0.5">NovaMon</span>
            </div>
          </a>

          {/* Nav Items */}
          <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-5" id="nav-links">
            <a href="#demo-viewer" className="hidden lg:inline-block text-xs font-semibold text-slate-400 hover:text-white transition-colors">{t[lang].liveDemo}</a>
            <a href="#features" className="hidden md:inline-block text-xs font-semibold text-slate-400 hover:text-white transition-colors">{t[lang].keySpecs}</a>
            <a href="#pricing" className="hidden sm:inline-block text-xs font-semibold text-slate-400 hover:text-white transition-colors">{t[lang].pricingPlans}</a>
            <a href="#community-board" className="hidden sm:inline-block text-xs font-semibold text-slate-400 hover:text-white transition-colors">{t[lang].communityBoard}</a>
            <a href="https://8579228268598.gumroad.com/l/jicgv" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-block text-xs font-semibold text-[#caa63d] hover:text-amber-300 transition-colors">{t[lang].proAct}</a>
            <a href="#faq" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">{t[lang].faq}</a>
            
            {/* Beautiful Linear Language Selector */}
            <div className="flex items-center gap-1 md:gap-1.5 text-[10px] md:text-[11px] font-semibold text-slate-500 border border-slate-900 rounded-lg px-2 py-1 bg-slate-950" id="language-pill-selector">
              {[
                { code: "ko", label: "한국어" },
                { code: "en", label: "English" },
                { code: "ja", label: "日本語" },
                { code: "zh", label: "中文" },
                { code: "es", label: "Español" }
              ].map((item, index) => (
                <React.Fragment key={item.code}>
                  <button
                    onClick={() => setLang(item.code as any)}
                    className={`px-1 py-0.5 rounded transition-all transition-colors ${
                      lang === item.code 
                        ? "text-[#caa63d] bg-slate-950 font-bold" 
                        : "hover:text-slate-250 hover:bg-slate-900/30"
                    }`}
                  >
                    {item.label}
                  </button>
                  {index < 4 && <span className="text-slate-800 select-none text-[8px]">/</span>}
                </React.Fragment>
              ))}
            </div>

            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-xs font-bold bg-[#caa63d] hover:bg-[#b08e2d] text-slate-950 transition-all active:scale-95 shadow-md shadow-amber-500/5"
              id="top-download-action-btn"
            >
              <Download className="w-3.5 h-3.5 mr-1" />
              {t[lang].freeDownload}
            </button>
          </nav>

        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 text-center px-4 overflow-hidden border-b border-slate-900" id="hero">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-[#caa63d] mb-6 font-semibold" id="hero-mini-tag">
            <span>{t[lang].stableRelease}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight" id="hero-main-title">
            {t[lang].heroTitle}
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto mb-10" id="hero-tagline">
            {t[lang].heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto" id="hero-cta-group">
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-[#caa63d] hover:bg-[#b08e2d] text-slate-950 hover:shadow-lg hover:shadow-amber-500/10 active:scale-98 transition-all"
              id="download-cta-trigger"
            >
              <Download className="w-4 h-4 mr-2" />
              {t[lang].heroDownload}
            </button>
            <a
              href="#demo-viewer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              {t[lang].heroExplore}
            </a>
          </div>

          {/* Minimal Software specs bullet */}
          <div className="grid grid-cols-3 gap-2 max-w-md mx-auto mt-12 pt-6 border-t border-slate-900/80 font-mono text-[10px] text-slate-500">
            <div>
              <span className="block text-slate-400 font-bold">OS SUPPORT</span>
              <span>Windows 10 / 11 64bit</span>
            </div>
            <div className="border-x border-slate-900">
              <span className="block text-slate-400 font-bold">FILE SIZE</span>
              <span>18.4 MB (No junk)</span>
            </div>
            <div>
              <span className="block text-slate-400 font-bold">CPU IMPACT</span>
              <span className="text-emerald-400 font-semibold">&lt; 0.5% (Ultralight)</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OFFICIAL HARDWARE MONITOR APPLICATION VIEW */}
      <section className="py-12 bg-slate-950 px-4 relative scroll-mt-16" id="demo-viewer">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#caa63d] font-bold font-mono">Official Application GUI Dashboard</span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              {t[lang].actualUiTitle}
            </h2>
            <p className="text-xs text-slate-400 mt-2 max-w-lg mx-auto">
              {t[lang].actualUiDesc}
            </p>
          </div>

          {/* THE MOCK MONITOR APPLICATION WINDOW */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative" id="mock-window-container">
            
            {/* Window title bar */}
            <div className="px-4 py-2.5 bg-[#121415] border-b border-slate-850 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                <span className="text-[10px] text-slate-500 font-mono ml-2">NovaMon_Main_Dashboard_HD</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#caa63d] bg-slate-950 px-2 py-0.5 rounded border border-slate-800/80">
                <Wifi className="w-3 h-3 text-[#caa63d] animate-pulse" />
                <span>REALTIME CONNECTED</span>
              </div>
            </div>

            {/* SHOWING THE ACTUAL REAL DESIGN IMAGE INSTEAD OF DRAWN HTML CONTROLS */}
            <div className="bg-[#0c0c0b] p-3 sm:p-5 flex justify-center">
              <img
                src={dashboardImg}
                alt={t[lang].brand}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-lg border border-white/[0.04] shadow-lg max-h-[580px] transition-all"
              />
            </div>

            {/* Bottom Window Stats Bar */}
            <div className="px-5 py-3 bg-[#111] border-t border-slate-850 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-500 font-mono">
              <div className="flex flex-wrap items-center gap-4">
                <span>{t[lang].kernelTemp}: <span className="text-emerald-400 font-semibold">{t[lang].safe}</span></span>
                <span className="hidden md:inline-block text-slate-700">|</span>
                <span>Active Core: 8 cores / 16 threads</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-slate-950 text-[10px] border border-white/[0.05] text-[#caa63d]">
                  Black Yellow Skin
                </span>
                <span>NovaMon Desktop v1.4.2</span>
              </div>
            </div>

          </div>

          {/* APPLICATION QUICK STAT BAR */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2 font-mono">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              <span>{t[lang].vStat1} <b>{t[lang].brand}</b>{t[lang].vStat2}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3.1. OFFICIAL HIGH-FIDELITY GUI SCREENSHOT GALLERY */}
      {/* Respecting user's intent: This features the actual skin and style selection image plus other original references in crystal clear high definition! */}
      <section className="py-16 bg-slate-950/80 border-t border-slate-900 px-4 scroll-mt-16" id="screenshot-gallery">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-widest text-[#caa63d] font-bold">Official Application GUI Showcase</span>
            <h2 className="text-2xl font-black text-white mt-1">
              {t[lang].galleryTitle}
            </h2>
            <p className="text-xs text-slate-400 mt-2 max-w-lg mx-auto">
              {t[lang].galleryDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left selector rails (30% on lg) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              
              <button
                onClick={() => setActiveGalleryTab("skins")}
                className={`w-full p-4 rounded-xl border text-left transition-all ${
                  activeGalleryTab === "skins"
                    ? "bg-[#252010] border-[#caa63d] text-white shadow-lg shadow-amber-500/5"
                    : "bg-slate-900/40 border-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <Palette className={`w-4 h-4 ${activeGalleryTab === "skins" ? "text-[#caa63d]" : "text-slate-500"}`} />
                  <span className="font-bold text-xs sm:text-sm">{t[lang].tabSkins}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                  {t[lang].tabSkinsDesc}
                </p>
              </button>

              <button
                onClick={() => setActiveGalleryTab("dashboard")}
                className={`w-full p-4 rounded-xl border text-left transition-all ${
                  activeGalleryTab === "dashboard"
                    ? "bg-[#252010] border-[#caa63d] text-white shadow-lg shadow-amber-500/5"
                    : "bg-slate-900/40 border-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <Monitor className={`w-4 h-4 ${activeGalleryTab === "dashboard" ? "text-[#caa63d]" : "text-slate-500"}`} />
                  <span className="font-bold text-xs sm:text-sm">{t[lang].tabMain}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                  {t[lang].tabMainDesc}
                </p>
              </button>

              <button
                onClick={() => setActiveGalleryTab("customizing")}
                className={`w-full p-4 rounded-xl border text-left transition-all ${
                  activeGalleryTab === "customizing"
                    ? "bg-[#252010] border-[#caa63d] text-white shadow-lg shadow-amber-500/5"
                    : "bg-slate-900/40 border-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-1">
                  <Sliders className={`w-4 h-4 ${activeGalleryTab === "customizing" ? "text-[#caa63d]" : "text-slate-500"}`} />
                  <span className="font-bold text-xs sm:text-sm">{t[lang].tabWidgets}</span>
                </div>
                <p className="text-[11px] text-slate-550 leading-relaxed pl-6">
                  {t[lang].tabWidgetsDesc}
                </p>
              </button>

              <div className="mt-4 p-4 rounded-xl border border-slate-905 bg-[#121211] text-slate-400 text-[11px] leading-relaxed">
                <span className="text-[#caa63d] font-bold block mb-1">{t[lang].zoomTipTitle}</span>
                {t[lang].zoomTipContent}
              </div>

            </div>

            {/* Right Display area (70% on lg) */}
            <div className="lg:col-span-8 flex flex-col items-center">
              
              <div 
                className="relative group rounded-xl overflow-hidden border border-slate-800 bg-[#0d0d0c] p-2 shadow-2xl transition-all duration-300 hover:border-amber-500/20 max-w-full"
                id="gallery-image-viewport"
              >
                {/* Overlay with expand cue */}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/45 transition-colors pointer-events-none z-10" />
                
                {/* Floating tool button */}
                <button
                  onClick={() => {
                    if (activeGalleryTab === "skins") setIsFullscreenImage(skinsImg);
                    if (activeGalleryTab === "dashboard") setIsFullscreenImage(dashboardImg);
                    if (activeGalleryTab === "customizing") setIsFullscreenImage(customizingImg);
                  }}
                  className="absolute top-4 right-4 z-20 p-2 bg-slate-900/95 hover:bg-[#caa63d] text-slate-350 hover:text-slate-950 rounded-lg shadow-lg border border-slate-800 transition-all opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0"
                  title="크게 보기 (전체 화면)"
                >
                  <Maximize2 className="w-4 h-4 stroke-[2.5]" />
                </button>

                {/* Displaying actual image files! */}
                {activeGalleryTab === "skins" && (
                  <img
                    src={skinsImg}
                    alt="스킨과 스타일선택 이미지"
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[480px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                )}
                {activeGalleryTab === "dashboard" && (
                  <img
                    src={dashboardImg}
                    alt="메인 대시보드 스크린샷"
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[480px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                )}
                {activeGalleryTab === "customizing" && (
                  <img
                    src={customizingImg}
                    alt="위젯 개인화 사용자 설정 스크린샷"
                    referrerPolicy="no-referrer"
                    className="w-full max-h-[480px] object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                )}

                {/* Info Overlay at the bottom */}
                <div className="absolute bottom-2 left-2 right-2 z-20 bg-slate-950/90 border border-slate-900 rounded-lg p-3 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#caa63d] animate-pulse"></div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-200">
                      {activeGalleryTab === "skins" && "SKIN_PRESETS_SELECTION.JPG"}
                      {activeGalleryTab === "dashboard" && "CORE_HARDWARE_METADATA.JPG"}
                      {activeGalleryTab === "customizing" && "CUSTOM_WIDGET_REGISTRY.JPG"}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 bg-slate-900 border border-slate-850 px-2 py-0.5 rounded">
                    1920 × 1080 Native Pixels
                  </span>
                </div>
              </div>

              {/* Annotation stats */}
              <div className="w-full mt-4 p-4 rounded-xl border border-white/[0.03] bg-[#0c0c0b] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono">INTERFACE DESIGNS</span>
                  <p className="text-xs text-slate-200 font-bold mt-0.5">8 Presets Skin Suite</p>
                </div>
                <div className="border-l border-white/[0.04] pl-4">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono">DENSITY SCALE</span>
                  <p className="text-xs text-[#caa63d] font-bold mt-0.5">Perfect Pixel Perfect</p>
                </div>
                <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-white/[0.04] pt-3 sm:pt-0 sm:pl-4">
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-mono">NATIVE MEMORY COST</span>
                  <p className="text-xs text-emerald-400 font-bold mt-0.5">Lightweight Engine</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --- FLOATING LIGHTBOX FULLSCREEN PREVIEW --- */}
      {isFullscreenImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
          id="fullscreen-image-viewer"
          onClick={() => setIsFullscreenImage(null)}
        >
          <button
            onClick={() => setIsFullscreenImage(null)}
            className="absolute top-6 right-6 px-4 py-2 bg-slate-900 hover:bg-[#caa63d] text-white hover:text-slate-950 font-bold rounded-lg shadow-2xl transition"
          >
            ✕ 닫기
          </button>
          
          <img
            src={isFullscreenImage}
            alt="크게 보기 이미지"
            referrerPolicy="no-referrer"
            className="max-w-full max-h-[85vh] object-contain rounded-lg border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          />

          <div className="mt-4 text-xs font-mono text-slate-400 text-center">
            클릭하거나 오른쪽 위 닫기 버튼을 선택해 종료하십시오.
          </div>
        </div>
      )}

      {/* --- ADD ITEM INTERACTIVE DIALOG MODAL (Matches Screenshot 3!) --- */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="add-widget-modal">
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" onClick={() => setIsAddModalOpen(false)}></div>
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative transform overflow-hidden rounded-xl bg-[#141413] border border-[#caa63d]/40 text-left shadow-2xl transition-all max-w-sm w-full p-6">
              
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#caa63d]" />
                  <h3 className="font-bold text-sm text-white" id="modal-title">Choose an item to add</h3>
                </div>
                <button onClick={() => setIsAddModalOpen(false)} className="text-slate-500 hover:text-slate-350 p-1 text-xs">
                  ✕
                </button>
              </div>

              <p className="text-[11px] text-slate-400 mb-4 font-normal leading-relaxed">
                현재 시스템에 마운트된 미사용 센서 목록입니다. 하나를 선택하면 대시보드 사이드바의 여유 슬롯에 즉각 등록되어 실시간 감시가 개시됩니다.
              </p>

              {/* Items List */}
              <div className="space-y-2.5 max-h-[250px] overflow-y-auto pr-1">
                {addableItems.map((item) => {
                  const isAlreadyAdded = sidebarItems.some(i => i.id === item.id);
                  return (
                    <button
                      key={item.id}
                      disabled={isAlreadyAdded}
                      onClick={() => handleAddSidebarItem(item)}
                      className={`w-full p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                        isAlreadyAdded 
                          ? "opacity-50 cursor-not-allowed bg-slate-950 border-slate-900" 
                          : "bg-[#1d1d1b] border-white/[0.04] hover:border-amber-500/40 hover:bg-[#282825]"
                      }`}
                    >
                      <div className="font-mono">
                        <span className="text-xs font-bold text-slate-200 block">{item.label}</span>
                        <span className="text-[10px] text-slate-500 block">{item.sub || "시스템 센서 정보"}</span>
                      </div>
                      <span className="text-xs font-bold text-[#caa63d] font-mono shrink-0">
                        {isAlreadyAdded ? "저장됨" : item.value}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Cancel Button */}
              <div className="mt-5 pt-3.5 border-t border-white/[0.05] flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-1.5 text-xs font-semibold text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 rounded transition-colors"
                >
                  닫기
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* --- DOWNLOAD PREPARATION MODAL (설치 준비 중 팝업) --- */}
      {isPrepModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="prep-modal-title" role="dialog" aria-modal="true" id="prep-download-modal">
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" onClick={() => setIsPrepModalOpen(false)}></div>
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="relative transform overflow-hidden rounded-xl bg-[#141413] border border-[#caa63d]/40 text-left shadow-2xl transition-all max-w-md w-full p-6">
              
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#caa63d]" />
                  <h3 className="font-bold text-sm text-white" id="prep-modal-title">다운로드 준비 중</h3>
                </div>
                <button onClick={() => setIsPrepModalOpen(false)} className="text-slate-500 hover:text-slate-350 p-1 text-xs">
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-yellow-500/5 border border-yellow-500/10 flex items-start gap-3">
                  <div className="text-amber-400 font-bold shrink-0 text-xl mt-0.5">⚠️</div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white block mb-1">정식 다운로드 및 라이선스 연동 기능 출시 준비 중</strong>
                    현재 노바몬(NovaMon) 데스크톱 설치파일 배포 및 라이선스 구매 시스템은 내부 정식 출시 및 최종 정밀 보안 심사 단계에 있습니다. 곧 안심하고 이용하실 수 있도록 공식 버전 다운로드가 오픈될 예정입니다!
                  </div>
                </div>

                <div className="text-xs text-slate-400 leading-relaxed font-normal">
                  <p className="mb-2"><strong>체험 안내:</strong></p>
                  <p>본 공식 브랜드 페이지 중앙에 있는 <strong>'실시간 Live 데모 시뮬레이터'</strong>를 통해 실제 PC 백그라운드 구동 상황과 완전히 동일한 실시간 위젯 커스터마이징, 스킨 전환, 다이얼 정밀 감시 기능을 완벽히 미리 체험해보실 수 있습니다.</p>
                </div>
              </div>

              {/* Bottom Close Button */}
              <div className="mt-6 pt-3.5 border-t border-white/[0.05] flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsPrepModalOpen(false)}
                  className="px-5 py-2 text-xs font-bold text-slate-950 bg-[#caa63d] hover:bg-[#b08e2d] rounded-lg transition-colors active:scale-95"
                >
                  확인 (데모 체험하기)
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* 4. Features Specifications */}
      <section className="py-16 bg-slate-950/40 border-t border-b border-slate-900 px-4" id="features">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-[#caa63d] text-[10px] font-extrabold uppercase tracking-widest">{t[lang].specSpecs}</span>
            <h2 className="text-2xl font-black text-white mt-1">{t[lang].specTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="features-grid">
            {features.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/40 border border-slate-900 hover:border-slate-800 p-6 rounded-xl flex gap-4 transition-all duration-300"
                id={`feature-card-${idx}`}
              >
                <div className="p-2 h-fit bg-slate-950 border border-slate-800 rounded-lg text-[#caa63d]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Pricing Plans */}
      <section className="py-16 bg-slate-950 px-4" id="pricing">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-[#caa63d] text-[10px] font-extrabold uppercase tracking-widest">Pricing Model</span>
            <h2 className="text-2xl font-black text-white mt-1">{t[lang].pricingTitle}</h2>
            <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
              {t[lang].pricingDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch" id="pricing-grid">
            {plans.map((plan, idx) => {
              const isPro = plan.highlight;
              return (
                <div 
                  key={plan.name}
                  className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                    isPro 
                      ? "bg-gradient-to-b from-slate-900/60 to-slate-950 border-[#caa63d]/50 hover:border-[#caa63d] shadow-xl shadow-amber-500/5" 
                      : "bg-slate-900/20 border-slate-900 hover:border-slate-800"
                  }`}
                  id={`pricing-card-${idx}`}
                >
                  {/* Badge Highlight */}
                  <div className="absolute -top-3 left-6">
                    <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-[10px] font-extrabold tracking-wider border shadow-md ${
                      isPro 
                        ? "bg-[#caa63d] text-slate-950 border-amber-400" 
                        : "bg-slate-800 text-slate-300 border-slate-700"
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[11px] font-bold tracking-wider uppercase ${isPro ? "text-[#caa63d]" : "text-slate-400"}`}>
                        {plan.name}
                      </span>
                      {isPro && (
                        <span className="text-[10px] text-amber-500 font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                          {t[lang].popSelected}
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline gap-2 mt-3 mb-4">
                      <span className="text-3xl font-black text-white tracking-tight">{plan.price}</span>
                      {plan.priceSub ? (
                        <span className="text-xs text-slate-400 font-medium bg-slate-800/60 px-2 py-0.5 rounded border border-slate-850">
                          {plan.priceSub}
                        </span>
                      ) : null}
                    </div>

                    {isPro ? (
                      <p className="text-[11px] font-bold text-[#caa63d] mb-4 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#caa63d]"></span>
                        {t[lang].proBadgeText}
                      </p>
                    ) : (
                      <p className="text-[11px] font-semibold text-slate-450 mb-4 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                        {t[lang].freeBadgeText}
                      </p>
                    )}

                    <p className="text-xs text-slate-400 leading-relaxed min-h-[36px] whitespace-pre-line">
                      {plan.description}
                    </p>
                    
                    <ul className="space-y-3.5 mt-6 mb-8 border-t border-slate-900 pt-6">
                      {plan.features.map((feat, i) => {
                        const isMainHighlighted = feat.includes("최대 2대 PC");
                        return (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isMainHighlighted ? "text-[#caa63d]" : "text-emerald-400"}`} />
                            <span className={isMainHighlighted ? "font-black text-[#caa63d] underline decoration-amber-500/30" : ""}>
                              {feat}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div>
                    {plan.url ? (
                      <a
                        href={plan.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl text-xs font-bold text-center bg-[#caa63d] hover:bg-[#b08e2d] text-slate-950 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all block font-sans"
                      >
                        {plan.cta}
                      </a>
                    ) : (
                      <button
                        onClick={handleDownload}
                        className="w-full py-3 px-4 rounded-xl text-xs font-bold text-center bg-slate-950 hover:bg-[#caa63d] hover:text-slate-950 border border-slate-800 hover:border-transparent text-slate-300 transition-all active:scale-95"
                      >
                        {plan.cta}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Community Board */}
      <section className="py-16 bg-slate-950/40 border-t border-slate-900 px-4 scroll-mt-16" id="community-board">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-[#caa63d] text-[10px] font-extrabold uppercase tracking-widest">{t[lang].boardKicker}</span>
            <h2 className="text-2xl font-black text-white mt-1">{t[lang].boardTitle}</h2>
            <p className="text-xs text-slate-400 mt-2 max-w-xl mx-auto leading-relaxed">
              {t[lang].boardDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <form
              onSubmit={handleBoardSubmit}
              className="lg:col-span-4 bg-slate-900/35 border border-slate-900 rounded-xl p-5"
              id="board-write-form"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#caa63d] text-slate-950 flex items-center justify-center">
                  <PenLine className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white">{t[lang].boardWriteTitle}</h3>
                  <p className="text-[10px] text-slate-500 font-mono">{t[lang].boardCountLabel}: {boardPosts.length}</p>
                </div>
              </div>

              <div className="space-y-3.5">
                <label className="block">
                  <span className="block text-[11px] font-bold text-slate-300 mb-1.5">{t[lang].boardNameLabel}</span>
                  <input
                    value={boardForm.author}
                    onChange={(event) => setBoardForm({ ...boardForm, author: event.target.value })}
                    placeholder={t[lang].boardNamePlaceholder}
                    className="w-full rounded-lg bg-slate-950 border border-slate-800 px-3 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-[#caa63d] transition-colors"
                    maxLength={24}
                    disabled={!supabase || isBoardSubmitting}
                    required
                  />
                </label>

                <label className="block">
                  <span className="block text-[11px] font-bold text-slate-300 mb-1.5">{t[lang].boardTitleLabel}</span>
                  <input
                    value={boardForm.title}
                    onChange={(event) => setBoardForm({ ...boardForm, title: event.target.value })}
                    placeholder={t[lang].boardTitlePlaceholder}
                    className="w-full rounded-lg bg-slate-950 border border-slate-800 px-3 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-[#caa63d] transition-colors"
                    maxLength={80}
                    disabled={!supabase || isBoardSubmitting}
                    required
                  />
                </label>

                <label className="block">
                  <span className="block text-[11px] font-bold text-slate-300 mb-1.5">{t[lang].boardMessageLabel}</span>
                  <textarea
                    value={boardForm.message}
                    onChange={(event) => setBoardForm({ ...boardForm, message: event.target.value })}
                    placeholder={t[lang].boardMessagePlaceholder}
                    className="w-full min-h-32 resize-y rounded-lg bg-slate-950 border border-slate-800 px-3 py-2.5 text-xs text-white placeholder:text-slate-600 outline-none focus:border-[#caa63d] transition-colors leading-relaxed"
                    maxLength={800}
                    disabled={!supabase || isBoardSubmitting}
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={!supabase || isBoardSubmitting}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#caa63d] hover:bg-[#b08e2d] disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 px-4 py-3 text-xs font-black transition-all active:scale-95"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                {t[lang].boardSubmit}
              </button>

              <p className="mt-4 text-[11px] text-slate-500 leading-relaxed border-t border-slate-900 pt-4">
                {t[lang].boardStorageNotice}
              </p>
            </form>

            <div className="lg:col-span-8 space-y-3" id="board-post-list">
              {boardError && (
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-100 leading-relaxed">
                  {boardError === "missing-config" ? t[lang].boardMissingConfig : `${t[lang].boardLoadError} (${boardError})`}
                </div>
              )}

              {isBoardLoading ? (
                <div className="min-h-52 rounded-xl border border-dashed border-slate-800 bg-slate-900/20 flex flex-col items-center justify-center text-center p-8">
                  <MessageSquare className="w-8 h-8 text-slate-600 mb-3" />
                  <p className="text-sm font-bold text-slate-300">{t[lang].boardLoading}</p>
                </div>
              ) : boardPosts.length === 0 ? (
                <div className="min-h-52 rounded-xl border border-dashed border-slate-800 bg-slate-900/20 flex flex-col items-center justify-center text-center p-8">
                  <MessageSquare className="w-8 h-8 text-slate-600 mb-3" />
                  <p className="text-sm font-bold text-slate-300">{t[lang].boardEmpty}</p>
                </div>
              ) : (
                boardPosts.map((post) => (
                  <article
                    key={post.id}
                    className="rounded-xl border border-slate-900 bg-slate-900/30 hover:border-slate-800 transition-colors p-5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-slate-500 mb-2">
                          <span className="inline-flex items-center gap-1 rounded bg-slate-950 border border-slate-800 px-2 py-1 text-[#caa63d]">
                            <MessageSquare className="w-3 h-3" />
                            {post.author}
                          </span>
                          <span>{formatBoardDate(post.created_at)}</span>
                        </div>
                        <h3 className="text-base font-black text-white break-words">{post.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-slate-300 leading-relaxed whitespace-pre-wrap break-words">
                      {post.content}
                    </p>
                  </article>
                ))
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 6. FAQ Accordion Container */}
      <section className="py-16 bg-slate-950/40 border-t border-slate-900 px-4" id="faq">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-[#caa63d] text-[10px] font-extrabold uppercase tracking-widest">{t[lang].supportFaqTag}</span>
            <h2 className="text-2xl font-black text-white mt-1">{t[lang].supportFaq}</h2>
          </div>

          <div className="space-y-3" id="faq-accordions">
            {faqs.map((faq, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="bg-slate-900/30 border border-slate-900 rounded-lg overflow-hidden hover:border-slate-800 transition-colors"
                  id={`faq-item-${index}`}
                >
                  <button
                    onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between text-white hover:text-[#caa63d] transition-colors"
                  >
                    <span className="font-bold text-xs sm:text-sm">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? "transform rotate-180 text-[#caa63d]" : ""
                      }`} 
                    />
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-950 pt-3 bg-slate-950/20">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. Beautiful Minimal Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4-y" id="footer-section">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-4">
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#caa63d] flex items-center justify-center">
              <Monitor className="w-3.5 h-3.5 text-slate-950" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-black text-white text-sm">노바몬</span>
              <span className="text-[10px] text-slate-500 font-mono">v1.4.2</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400" id="support-contact">
            <Mail className="w-4 h-4 text-[#caa63d]" />
            <span>Support Email:</span>
            <a href="mailto:support@novamon.com" className="hover:text-white transition-colors underline decoration-[#caa63d]/50">
              support@novamon.com
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
