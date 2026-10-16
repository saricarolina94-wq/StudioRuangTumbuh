import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  BookOpen, 
  Sparkles, 
  Shield, 
  Calendar, 
  Bookmark, 
  Lock, 
  Plus, 
  Trash2, 
  Smile, 
  Meh, 
  Frown, 
  Feather, 
  CheckCircle, 
  Share2, 
  RefreshCw, 
  Eye, 
  Sun, 
  Cloud, 
  CloudRain, 
  Compass, 
  Award,
  ChevronRight,
  Filter,
  MessageCircle,
  Send,
  KeyRound,
  Check
} from 'lucide-react';

// Koleksi 45 Kutipan Refleksi (Cukup untuk 1.5 Bulan / 45 Hari)
const REFLECTION_QUOTES = [
  { quote: "Menjadi dewasa bukan tentang menyelesaikan semua masalah, tapi tentang berhenti bertengkar dengan kenyataan.", author: "Carolina Ardianti", category: "Berdamai" },
  { quote: "Ketenangan bukanlah ketiadaan badai, melainkan keberadaan kedamaian di dalam dada di tengah badai.", author: "Reflektif Ruang Tumbuh", category: "Ketenangan" },
  { quote: "Kamu tidak tertinggal. Kamu hanya sedang berjalan di atas linimasa hidupmu sendiri yang tak perlu dibandingkan.", author: "Carolina Ardianti", category: "Pemahaman Diri" },
  { quote: "Napas hari ini adalah bukti bahwa kamu berhasil melewati 100% hari-hari terberatmu di masa lalu.", author: "Pengingat Jeda", category: "Penerimaan" },
  { quote: "Merawat diri bukan bentuk keegoisan, melainkan prasyarat agar kamu punya energi merawat orang-orang yang kamu cintai.", author: "Self-Coaching Note", category: "Self-Care" },
  { quote: "Perlahan saja, kamu tidak sedang berpacu dengan siapapun. Ini adalah tentang perjalananmu menemukan kedamaian.", author: "Ruang Tumbuh", category: "Ketenangan" },
  { quote: "Memberi maaf pada diri sendiri adalah pintu pertama menuju kebebasan jiwa.", author: "Refleksi Harian", category: "Penerimaan" },
  { quote: "Setiap emosi yang hadir adalah tamu. Sambut, dengarkan pesannya, lalu biarkan ia berlalu dengan lembut.", author: "Carolina Ardianti", category: "Emosi" },
  { quote: "Rumah paling nyaman yang harus kamu bangun pertama kali adalah rasa aman di dalam dirimu sendiri.", author: "Pengingat Diri", category: "Pemahaman Diri" },
  { quote: "Kamu boleh lelah, kamu boleh istirahat. Mengaku lelah bukan berarti kamu menyerah.", author: "Bisikan Hati", category: "Self-Care" },
  { quote: "Tidak semua ekspektasi orang lain harus kamu pikul di pundakmu.", author: "Ruang Tumbuh", category: "Batas Diri" },
  { quote: "Keberanian tidak selalu berteriak keras. Kadang keberanian adalah suara tenang di akhir hari yang berbisik: 'Aku akan mencoba lagi besok.'", author: "Carolina Ardianti", category: "Ketangguhan" },
  { quote: "Setiap garis dan jejak di tubuhmu adalah bukti bahwa kamu telah bertahan dan bertumbuh dengan luar biasa.", author: "Penerimaan Diri", category: "Self-Care" },
  { quote: "Hargai dirimu yang versi hari ini, ia adalah gabungan dari semua pembelajaran masa lalumu.", author: "Ruang Tumbuh", category: "Pemahaman Diri" },
  { quote: "Kadang, melepaskan adalah bentuk tertinggi dari mencintai diri sendiri.", author: "Refleksi Harian", category: "Berdamai" },
  { quote: "Hari ini, jadilah orang pertama yang memperlakukan dirimu dengan penuh kesabaran dan kelembutan.", author: "Bisikan Hati", category: "Self-Care" },
  { quote: "Kesempurnaan adalah ilusi. Utuh dan jujur pada diri sendiri adalah kenyataan yang menyembuhkan.", author: "Carolina Ardianti", category: "Penerimaan" },
  { quote: "Senyum paling tulus muncul ketika kita berhenti membandingkan hidup kita dengan panggung orang lain.", author: "Pengingat Jeda", category: "Pemahaman Diri" },
  { quote: "Lukamu adalah tempat cahaya mulai masuk dan melunakkan bagian keras dalam dirimu.", author: "Kutipan Jiwa", category: "Berdamai" },
  { quote: "Bicara pada dirimu seperti kamu berbicara kepada sahabat terbaik yang sangat kamu sayangi.", author: "Self-Compassion", category: "Self-Care" },
  { quote: "Tidak apa-apa jika hari ini kamu hanya bisa menyelesaikan sedikit hal. Bertahan hidup pun sudah pencapaian.", author: "Ruang Tumbuh", category: "Penerimaan" },
  { quote: "Istirahat bukan hadiah setelah bekerja, istirahat adalah bagian wajib dari kehidupan itu sendiri.", author: "Pengingat Jeda", category: "Ketenangan" },
  { quote: "Dengarkan sinyal dari tubuhmu. Ia sering berbisik sebelum akhirnya berteriak karena lelah.", author: "Self-Care Note", category: "Ketenangan" },
  { quote: "Bahagia itu bukan tentang memiliki segalanya, tapi tentang merasa cukup dengan apa yang hadir saat ini.", author: "Carolina Ardianti", category: "Kedamaian" },
  { quote: "Kemampuan berkata 'tidak' pada hal yang menguras energimu adalah wujud cinta pada kedamaian batinmu.", author: "Batas Diri", category: "Self-Care" },
  { quote: "Masa lalu adalah guru yang bijak, bukan tempat tinggal yang harus kamu huni selamanya.", author: "Refleksi Diri", category: "Berdamai" },
  { quote: "Satu langkah kecil yang tenang lebih berarti daripada lompatan besar yang penuh kepanikan.", author: "Ruang Tumbuh", category: "Ketangguhan" },
  { quote: "Izinkan dirimu meragukan hal-hal yang tidak lagi membawakan kedamaian dalam hidupmu.", author: "Bisikan Hati", category: "Pemahaman Diri" },
  { quote: "Kamu tidak perlu membuktikan apapun pada siapapun. Cukup hadir utuh untuk dirimu sendiri.", author: "Carolina Ardianti", category: "Penerimaan" },
  { quote: "Keheningan di pagi hari adalah obat terbaik untuk menenangkan pikiran yang riuh.", author: "Pengingat Jeda", category: "Ketenangan" },
  { quote: "Menangis bukan tanda kelemahan, itu adalah cara jiwa membilas rasa sesak yang menumpuk.", author: "Refleksi Emosi", category: "Emosi" },
  { quote: "Jangan biarkan suara bising dunia meredam bisikan lembut intuisi dan hatimu.", author: "Jiwa Tenang", category: "Pemahaman Diri" },
  { quote: "Setiap hari adalah lembaran baru untuk menyayangi dirimu lebih baik dari kemarin.", author: "Ruang Tumbuh", category: "Self-Care" },
  { quote: "Pikiranmu seperti langit, pikiran buruk hanyalah awan yang lewat. Kamu adalah langitnya.", author: "Mindfulness Note", category: "Ketenangan" },
  { quote: "Peluk lelahmu malam ini, biarkan esok pagi membawakan kesegaran dan harapan baru.", author: "Pengingat Tidur", category: "Kedamaian" },
  { quote: "Bertumbuh seringkali terasa sepi dan tidak nyaman, tapi itulah proses bunga mekar.", author: "Carolina Ardianti", category: "Ketangguhan" },
  { quote: "Kebaikan kecil yang kamu berikan pada dirimu sendiri hari ini akan memancar ke orang sekitarmu.", author: "Ruang Tumbuh", category: "Self-Care" },
  { quote: "Genggam erat jemarimu dan berbisiklah: 'Terima kasih sudah bertahan sampai sejauh ini.'", author: "Bisikan Hati", category: "Penerimaan" },
  { quote: "Karaktermu tidak ditentukan oleh badai yang menerpa, melainkan oleh caramu menemukan ketenangan di dalamnya.", author: "Refleksi Diri", category: "Ketangguhan" },
  { quote: "Bebaskan dirimu dari rasa ingin menyenangkan semua orang.", author: "Batas Diri", category: "Pemahaman Diri" },
  { quote: "Hidup ini bukan tentang menjadi sempurna, melainkan tentang belajar menjadi utuh.", author: "Carolina Ardianti", category: "Penerimaan" },
  { quote: "Ruang aman pertama yang bisa kamu ciptakan adalah pikiran tanpa penghakiman pada diri sendiri.", author: "Mindfulness", category: "Ketenangan" },
  { quote: "Saat kamu berdamai dengan masa lalu, masa depanmu akan tersenyum menyambutmu.", author: "Ruang Tumbuh", category: "Berdamai" },
  { quote: "Syukuri napas yang mengalir lembut sekarang, di sini, saat ini.", author: "Pengingat Jeda", category: "Kedamaian" },
  { quote: "Kamu adalah karya seni yang sedang berproses, hargai setiap goresan dan warnanya.", author: "Carolina Ardianti", category: "Self-Care" }
];

// Respon Reflektif Terkontrol untuk Dialog Luka
const REFLECTIVE_WOUND_RESPONSES = [
  "Terima kasih sudah berani membuka ruang untukku. Setiap kali kamu bersikap lembut pada dirimu, rasa perihku berkurang sedikit demi sedikit.",
  "Aku mendengar suaramu. Memang butuh waktu, tapi keberanianmu menyapaku hari ini adalah langkah terbesar menuju kedamaian.",
  "Kamu tidak harus terburu-buru sembuh. Izinkan diri bernapas, aku di sini bukan lagi musuhmu, melainkan bagian cerita yang mendewasakanmu.",
  "Selama ini aku hanya berusaha melindungimu dari rasa sakit yang lebih besar. Sekarang aku tahu, kamu sudah cukup kuat untuk menjaga dirimu sendiri.",
  "Terima kasih sudah tidak lagi menyalahkan dirimu atas hal-hal di luar kendalimu. Rasa lapang itu mulai terasa hangat di sini.",
  "Aku merasa didengar hari ini. Ketika kamu berhenti lari dariku, kita berdua akhirnya bisa melangkah ke depan dengan lebih tenang.",
  "Tidak apa-apa jika sesekali rasa sesak itu datang lagi. Ingatlah bahwa kamu yang sekarang punya ruang aman di dalam dada untuk merangkulnya.",
  "Setiap kali kamu memaafkan masa lalumu, kamu sedang mengurai benang kusut yang selama ini menahan langkahmu.",
  "Aku di sini bukan untuk menghambatmu bertumbuh, tapi untuk mengingatkan betapa jauhnya kamu sudah bertahan dan melangkah.",
  "Terima kasih telah memperlakukanku dengan kelembutan hari ini. Kelembutanmu pada diri sendiri adalah penawar paling ampuh.",
  "Kamu tidak perlu lagi membuktikan apa pun pada dunia. Cukup jadilah rumah yang nyaman dan damai untuk jiwamu sendiri.",
  "Aku bangga padamu yang memilih untuk memeluk rasa sakit ini daripada membagikannya kembali menjadi kemarahan kepada orang lain.",
  "Tarok beban itu sejenak. Kamu sudah memikulnya terlalu lama. Mari belajar bersandar dan percaya pada proses pemulihan ini.",
  "Ingatlah bahwa bekas luka ini adalah bukti daya tahanmu, bukan bukti kelemahan atau kegagalanmu.",
  "Hari ini, izinkan aku beristirahat di hatimu tanpa membuatmu merasa cemas lagi. Kita sudah berdamai."
];

const EMOTION_TYPES = [
  { id: 'calm', label: 'Tenang & Damai', icon: Sun, color: 'bg-amber-100 text-amber-800 border-amber-300', hex: '#fef3c7' },
  { id: 'grateful', label: 'Bersyukur', icon: Heart, color: 'bg-emerald-100 text-emerald-800 border-emerald-300', hex: '#d1fae5' },
  { id: 'tired', label: 'Lelah / Overwhelmed', icon: Cloud, color: 'bg-slate-200 text-slate-700 border-slate-300', hex: '#e2e8f0' },
  { id: 'sad', label: 'Sedih / Rentan', icon: CloudRain, color: 'bg-blue-100 text-blue-800 border-blue-300', hex: '#dbeafe' },
  { id: 'growing', label: 'Paham / Bertumbuh', icon: Sparkles, color: 'bg-teal-100 text-teal-800 border-teal-300', hex: '#ccfbf1' },
];

// Kode akses resmi yang valid untuk pembeli di Lynk.id
const VALID_PASSCODES = ['RUANGTUMBUH2026', 'GENTLEGROWTH', 'BERDAMAI2026'];

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputPasscode, setInputPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState('');

  const [activeTab, setActiveTab] = useState('dialogue');
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Mengecek apakah pengguna pernah memasukkan kode akses sebelumnya
  useEffect(() => {
    const savedAccess = localStorage.getItem('ruang_tumbuh_unlocked');
    if (savedAccess === 'true') {
      setIsUnlocked(true);
    }

    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const index = dayOfYear % REFLECTION_QUOTES.length;
    setQuoteIndex(index);
  }, []);

  const handleUnlock = (e) => {
    e.preventDefault();
    const formattedInput = inputPasscode.trim().toUpperCase();
    if (VALID_PASSCODES.includes(formattedInput)) {
      localStorage.setItem('ruang_tumbuh_unlocked', 'true');
      setIsUnlocked(true);
      setPasscodeError('');
    } else {
      setPasscodeError('Kode akses tidak valid. Silakan periksa kembali PDF Panduan dari Lynk.id.');
    }
  };

  // State for Emotional Landscape
  const [moodLogs, setMoodLogs] = useState([
    { id: 1, date: 'Senin', emotion: 'tired', note: 'Beban To-Do list menumpuk, tapi mencoba ambil napas 3 menit.', intensity: 3 },
    { id: 2, date: 'Selasa', emotion: 'calm', note: 'Menikmati teh hangat pagi tanpa distraksi HP.', intensity: 5 },
    { id: 3, date: 'Rabu', emotion: 'growing', note: 'Menyadari bahwa saya tidak harus merespons semua ekspektasi orang.', intensity: 4 },
    { id: 4, date: 'Kamis', emotion: 'sad', note: 'Merasa lelah dengan rutinitas domestik, mengizinkan diri menangis sebentar.', intensity: 2 },
    { id: 5, date: 'Jumat', emotion: 'grateful', note: 'Anak-anak sehat dan sempat jalan kaki sore tanpa mendengarkan musik.', intensity: 5 },
    { id: 6, date: 'Sabtu', emotion: 'calm', note: 'Membaca buku 15 menit sebelum tidur.', intensity: 4 },
    { id: 7, date: 'Minggu', emotion: 'growing', note: 'Membuat jurnal refleksi minggu ini dengan penuh penerimaan.', intensity: 5 },
  ]);

  const [newMood, setNewMood] = useState('calm');
  const [newMoodDay, setNewMoodDay] = useState('Hari Ini');
  const [newMoodNote, setNewMoodNote] = useState('');

  // State for Safe Vault
  const [vaultEntries, setVaultEntries] = useState([
    {
      id: 1,
      title: "Melepaskan Keinginan Menjadi Ibu Sempurna",
      date: "12 Oktober 2026",
      category: "Peran & Identitas",
      content: "Hari ini saya sadar bahwa anak-anak tidak membutuhkan ibu yang sempurna tanpa cela. Mereka hanya butuh ibu yang hadir, utuh, dan bahagia. Ketika rumah agak berantakan, itu bukan tanda kegagalan saya sebagai perempuan.",
      isPinned: true
    },
    {
      id: 2,
      title: "Jeda di Tengah Hiruk Pikuk Usia 30-an",
      date: "05 Oktober 2026",
      category: "Ketenangan",
      content: "Melihat teman-teman di sosmed dengan pencapaian mereka sempat membuat hati saya menciut. Tapi ketika saya menutup layar dan melihat ke dalam, hidup saya sudah sangat cukup dan hangat dengan ritme saya sendiri.",
      isPinned: false
    }
  ]);

  const [newVaultTitle, setNewVaultTitle] = useState('');
  const [newVaultCategory, setNewVaultCategory] = useState('Penerimaan Diri');
  const [newVaultContent, setNewVaultContent] = useState('');
  const [isAddingVault, setIsAddingVault] = useState(false);

  // State for Milestones
  const [milestones, setMilestones] = useState([
    {
      id: 1,
      title: "Berdamai dengan Perubahan Tubuh Pasca Melahirkan",
      date: "September 2026",
      story: "Berhenti membenci garis peregangan (stretch marks) dan kelelahan fisik. Menggantinya dengan rasa terima kasih karena tubuh ini telah menjadi rumah yang kuat.",
      badge: "Self-Acceptance"
    },
    {
      id: 2,
      title: "Berani Berkata 'Tidak' Tanpa Rasa Bersalah",
      date: "Agustus 2026",
      story: "Menolak permintaan acara luar yang menguras energi mental demi menjaga kesehatan emosi di rumah.",
      badge: "Boundary Master"
    },
    {
      id: 3,
      title: "Menebus Maaf pada Diri Masa Lalu",
      date: "Juli 2026",
      story: "Memaafkan keputusan-keputusan impulsif usia 20-an. Menyadari bahwa versi saya yang dulu hanya berusaha bertahan hidup dengan pengetahuan yang dia miliki.",
      badge: "Inner Healing"
    }
  ]);

  const [newMilestoneTitle, setNewMilestoneTitle] = useState('');
  const [newMilestoneStory, setNewMilestoneStory] = useState('');
  const [newMilestoneBadge, setNewMilestoneBadge] = useState('Peace Marker');
  const [isAddingMilestone, setIsAddingMilestone] = useState(false);

  const [dialogueMessages, setDialogueMessages] = useState([
    {
      sender: 'self',
      text: "Halo luka, maaf ya selama ini aku selalu berusaha melarikan diri, menyembunyikanmu, atau meremehkan rasa sakit yang kau tinggalkan.",
      time: "10:15 WIB"
    },
    {
      sender: 'wound',
      text: "Aku tidak pernah berniat menghancurkanmu. Aku hadir hanya untuk menandai bagian diri yang butuh dipeluk dan disembuhkan.",
      time: "10:16 WIB"
    },
    {
      sender: 'self',
      text: "Aku mengerti sekarang. Hari ini aku memilih tidak lagi bertengkar bersamamu. Mari kita tumbuh dan pulih perlahan.",
      time: "10:18 WIB"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const nextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % REFLECTION_QUOTES.length);
  };

  const handleAddMood = (e) => {
    e.preventDefault();
    if (!newMoodNote.trim()) return;
    const newEntry = {
      id: Date.now(),
      date: newMoodDay,
      emotion: newMood,
      note: newMoodNote,
      intensity: 4
    };
    setMoodLogs([newEntry, ...moodLogs.slice(0, 6)]);
    setNewMoodNote('');
  };

  const handleAddVault = (e) => {
    e.preventDefault();
    if (!newVaultTitle.trim() || !newVaultContent.trim()) return;
    const entry = {
      id: Date.now(),
      title: newVaultTitle,
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      category: newVaultCategory,
      content: newVaultContent,
      isPinned: false
    };
    setVaultEntries([entry, ...vaultEntries]);
    setNewVaultTitle('');
    setNewVaultContent('');
    setIsAddingVault(false);
  };

  const handleAddMilestone = (e) => {
    e.preventDefault();
    if (!newMilestoneTitle.trim() || !newMilestoneStory.trim()) return;
    const milestone = {
      id: Date.now(),
      title: newMilestoneTitle,
      date: new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }),
      story: newMilestoneStory,
      badge: newMilestoneBadge
    };
    setMilestones([milestone, ...milestones]);
    setNewMilestoneTitle('');
    setNewMilestoneStory('');
    setIsAddingMilestone(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const timeStr = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';

    const userMsg = {
      sender: 'self',
      text: inputMessage,
      time: timeStr
    };

    setDialogueMessages(prev => [...prev, userMsg]);
    setInputMessage('');

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * REFLECTIVE_WOUND_RESPONSES.length);
      const selectedResponse = REFLECTIVE_WOUND_RESPONSES[randomIndex];

      setDialogueMessages(prev => [
        ...prev,
        {
          sender: 'wound',
          text: selectedResponse,
          time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB'
        }
      ]);
    }, 1200);
  };

  // SCREEN 1: Kunci Akses / Passcode Protection
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md space-y-6 text-center">
          <div className="mx-auto w-14 h-14 bg-emerald-900/60 border border-emerald-500/30 rounded-2xl flex items-center justify-center text-emerald-400">
            <KeyRound className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/50">
              Studio Ruang Tumbuh • Access Key
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">Masukkan Kode Akses</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Silakan masukkan kode akses privat yang tertera pada file PDF Panduan dari toko <span className="text-emerald-300 font-semibold">Lynk.id</span> Anda.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div>
              <input 
                type="text" 
                value={inputPasscode}
                onChange={(e) => setInputPasscode(e.target.value)}
                placeholder="Contoh: RUANGTUMBUH2026"
                className="w-full text-center text-sm tracking-wider font-mono p-3.5 rounded-xl border border-slate-600 bg-slate-900/80 text-white focus:outline-none focus:border-emerald-500 uppercase placeholder:normal-case placeholder:font-sans placeholder:text-slate-500"
              />
            </div>

            {passcodeError && (
              <p className="text-xs text-rose-400 bg-rose-950/50 border border-rose-800/60 p-2.5 rounded-xl">
                {passcodeError}
              </p>
            )}

            <button 
              type="submit"
              className="w-full py-3.5 px-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center space-x-2"
            >
              <span>Buka Ruang Jurnal</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-[11px] text-slate-400 border-t border-slate-700/60 pt-4 italic">
            🔒 Kode akses ini hanya perlu dimasukkan satu kali di HP Anda.
          </p>
        </div>
      </div>
    );
  }

  // SCREEN 2: Aplikasi Utama (Life Story Canvas & Growth Tracker)
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
      {/* Top Header */}
      <header className="bg-emerald-900 text-white border-b border-emerald-800 py-8 px-4 sm:px-8 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Studio Ruang Tumbuh</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-emerald-50">
              Life Story Canvas & Growth Tracker
            </h1>
            <p className="text-emerald-200/80 text-xs sm:text-sm mt-1">
              Merangkum jejak ketenangan, penerimaan, dan pemahaman diri wanita usia 30+
            </p>
          </div>

          <div className="bg-emerald-800/60 backdrop-blur-sm p-3 rounded-xl border border-emerald-700/50 flex items-center space-x-3 text-xs">
            <Shield className="w-5 h-5 text-emerald-300 flex-shrink-0" />
            <div>
              <p className="font-semibold text-emerald-100">Ruang Aman & Terverifikasi</p>
              <p className="text-emerald-300/80">Tersimpan secara privat & lokal di HP Anda</p>
            </div>
          </div>
        </div>
      </header>

      {/* Daily Reflection Quote Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 -mt-5">
        <div className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
          
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase rounded-full tracking-wide">
                Kutipan Refleksi Hari Ini • {REFLECTION_QUOTES[quoteIndex].category}
              </span>
              <p className="font-serif italic text-slate-800 text-base sm:text-lg leading-relaxed">
                "{REFLECTION_QUOTES[quoteIndex].quote}"
              </p>
              <p className="text-xs text-slate-500 font-medium">
                — {REFLECTION_QUOTES[quoteIndex].author}
              </p>
            </div>

            <button 
              onClick={nextQuote} 
              className="p-2 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-all flex-shrink-0"
              title="Acak / Kutipan Lainnya"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-8 mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 bg-slate-200/80 p-1.5 rounded-2xl gap-1 text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('dialogue')}
            className={`py-3 px-2 rounded-xl flex items-center justify-center space-x-1.5 transition-all ${
              activeTab === 'dialogue'
                ? 'bg-white text-emerald-900 shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageCircle className="w-4 h-4 text-rose-600" />
            <span>1. Dialog Luka</span>
          </button>

          <button
            onClick={() => setActiveTab('landscape')}
            className={`py-3 px-2 rounded-xl flex items-center justify-center space-x-1.5 transition-all ${
              activeTab === 'landscape'
                ? 'bg-white text-emerald-900 shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Compass className="w-4 h-4 text-emerald-700" />
            <span>2. Landscape</span>
          </button>

          <button
            onClick={() => setActiveTab('vault')}
            className={`py-3 px-2 rounded-xl flex items-center justify-center space-x-1.5 transition-all ${
              activeTab === 'vault'
                ? 'bg-white text-emerald-900 shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4 text-teal-700" />
            <span>3. Safe Vault</span>
          </button>

          <button
            onClick={() => setActiveTab('milestones')}
            className={`py-3 px-2 rounded-xl flex items-center justify-center space-x-1.5 transition-all ${
              activeTab === 'milestones'
                ? 'bg-white text-emerald-900 shadow-sm font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Award className="w-4 h-4 text-amber-600" />
            <span>4. Berdamai</span>
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 mt-6">
        
        {/* TAB 0: DIALOG DENGAN LUKA */}
        {activeTab === 'dialogue' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-sm">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2.5 bg-rose-50 rounded-xl text-rose-700 border border-rose-200">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-serif font-bold text-slate-900">
                    Bicara dengan Luka: Ruang Dialog Diri
                  </h2>
                  <p className="text-xs text-slate-500">
                    Luka tidak lagi disembunyikan atau ditolak. Beri dia panggung untuk menyampaikan pesannya.
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mt-3 bg-rose-50/50 p-3 rounded-xl border border-rose-100/60 italic">
                "Mengajak luka berbicara berarti meruntuhkan benteng perlawanan. Ketika luka merasa didengar, ia berhenti berteriak sebagai rasa sakit, dan mulai berbisik sebagai kebijaksanaan."
              </p>
            </div>

            {/* Chat Conversation Box */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[400px]">
              <div className="p-3 bg-slate-50 border-b border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span className="font-semibold text-slate-700">Sesi Dialog Hati & Masa Lalu</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-medium">Hadir Utuh</span>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/40">
                {dialogueMessages.map((msg, index) => {
                  const isSelf = msg.sender === 'self';
                  return (
                    <div 
                      key={index} 
                      className={`flex flex-col ${isSelf ? 'items-end' : 'items-start'}`}
                    >
                      <div className="flex items-center space-x-1.5 mb-1">
                        <span className="text-[10px] font-bold text-slate-400">
                          {isSelf ? 'Aku Hari Ini' : 'Bagian Luka / Masa Lalu'}
                        </span>
                        <span className="text-[9px] text-slate-300">• {msg.time}</span>
                      </div>
                      <div 
                        className={`max-w-[85%] text-xs p-3.5 rounded-2xl leading-relaxed shadow-sm ${
                          isSelf 
                            ? 'bg-emerald-900 text-emerald-50 rounded-br-none' 
                            : 'bg-rose-50 border border-rose-200/70 text-slate-800 rounded-bl-none font-serif'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex gap-2">
                <input 
                  type="text" 
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ketik bisikan lembut atau sapaan pada lukamu..."
                  className="flex-1 text-xs p-3 rounded-xl border border-slate-200 focus:outline-emerald-700 bg-slate-50"
                />
                <button 
                  type="submit" 
                  className="bg-emerald-900 hover:bg-emerald-950 text-white p-3 rounded-xl transition-all flex items-center justify-center flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 1: EMOTIONAL LANDSCAPE */}
        {activeTab === 'landscape' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-lg font-serif font-bold text-slate-900 mb-1 flex items-center space-x-2">
                <Sun className="w-5 h-5 text-amber-500" />
                <span>Rangkuman Emosi Mingguan (Emotional Landscape)</span>
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bukan untuk menilai emosi mana yang 'baik' atau 'bad', melainkan menyadari bahwa lanskap hatimu dinamis. Semua emosi valid dan layak dipeluk.
              </p>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Spektrum Ketenangan Mingguan
                </p>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {moodLogs.map((log) => {
                    const emo = EMOTION_TYPES.find(e => e.id === log.emotion) || EMOTION_TYPES[0];
                    const Icon = emo.icon;
                    return (
                      <div key={log.id} className="flex flex-col items-center space-y-1.5">
                        <div className={`w-full py-3 px-1 rounded-xl border flex flex-col items-center justify-center space-y-1 ${emo.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-600">{log.date}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
                <Feather className="w-4 h-4 text-emerald-700" />
                <span>Sapa Emosimu Hari Ini</span>
              </h3>

              <form onSubmit={handleAddMood} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">Hari / Waktu:</label>
                    <input 
                      type="text"
                      value={newMoodDay}
                      onChange={(e) => setNewMoodDay(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">Pilih Rasa Utama:</label>
                    <select 
                      value={newMood} 
                      onChange={(e) => setNewMood(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-emerald-600"
                    >
                      {EMOTION_TYPES.map(emo => (
                        <option key={emo.id} value={emo.id}>{emo.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">Catatan Singkat / Bisikan Hati (1-2 kalimat):</label>
                  <input 
                    type="text"
                    placeholder="Apa hal kecil yang terasa hari ini? Mengapa emosi ini hadir?"
                    value={newMoodNote}
                    onChange={(e) => setNewMoodNote(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 bg-white focus:outline-emerald-600"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-800 text-white rounded-xl text-xs font-bold hover:bg-emerald-900 transition-all flex items-center justify-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Simpan ke Lanskap Emosi</span>
                </button>
              </form>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs uppercase font-bold text-slate-500 tracking-wider">Jejak Emosi Sepekan Ini</h3>
              {moodLogs.map((log) => {
                const emo = EMOTION_TYPES.find(e => e.id === log.emotion) || EMOTION_TYPES[0];
                const Icon = emo.icon;
                return (
                  <div key={log.id} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start space-x-3 shadow-sm">
                    <div className={`p-2.5 rounded-xl border flex-shrink-0 ${emo.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs text-slate-900">{log.date}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {emo.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed italic">"{log.note}"</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: SAFE VAULT */}
        {activeTab === 'vault' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <h2 className="text-lg font-serif font-bold text-slate-900 flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-teal-700" />
                  <span>Arsip Tulisan Reflektif Diri (Safe Vault)</span>
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Ruang privat untuk menumpahkan pikiran tanpa perlu diedit, dinilai, atau disukai orang lain.
                </p>
              </div>

              <button 
                onClick={() => setIsAddingVault(!isAddingVault)}
                className="px-4 py-2.5 bg-teal-800 text-white text-xs font-bold rounded-xl hover:bg-teal-900 transition-all flex items-center justify-center space-x-2 flex-shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>{isAddingVault ? 'Batal' : 'Tulis Refleksi Baru'}</span>
              </button>
            </div>

            {isAddingVault && (
              <form onSubmit={handleAddVault} className="bg-white p-6 rounded-2xl border border-teal-200 shadow-md space-y-4">
                <h3 className="text-sm font-bold text-teal-900 font-serif">Tumpahkan Tulisan Reflektif Baru</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">Judul Refleksi:</label>
                    <input 
                      type="text"
                      placeholder="Misal: Menyapa Rasa Lelah Malam Ini"
                      value={newVaultTitle}
                      onChange={(e) => setNewVaultTitle(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-teal-700"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">Kategori:</label>
                    <select 
                      value={newVaultCategory} 
                      onChange={(e) => setNewVaultCategory(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-teal-700"
                    >
                      <option value="Peran & Identitas">Peran & Identitas</option>
                      <option value="Ketenangan">Ketenangan</option>
                      <option value="Penerimaan Diri">Penerimaan Diri</option>
                      <option value="Pengasuhan & Keluarga">Pengasuhan & Keluarga</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">Isi Tulisan (Expressive Writing):</label>
                  <textarea 
                    rows={5}
                    placeholder="Tuliskan apa saja yang mengalir di kepalamu tanpa takut dihakimi..."
                    value={newVaultContent}
                    onChange={(e) => setNewVaultContent(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-teal-700 leading-relaxed"
                  />
                </div>

                <button 
                  type="submit" 
                  className="px-5 py-2.5 bg-teal-800 text-white rounded-xl text-xs font-bold hover:bg-teal-900 transition-all"
                >
                  Simpan ke Vault Privat
                </button>
              </form>
            )}

            <div className="space-y-4">
              {vaultEntries.map((entry) => (
                <article key={entry.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-teal-300 transition-all space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                        {entry.category}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{entry.date}</span>
                    </div>
                    {entry.isPinned && (
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded flex items-center space-x-1">
                        <Bookmark className="w-3 h-3" />
                        <span>Sering Dibaca Ulang</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif font-bold text-slate-900 text-base">{entry.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
                    {entry.content}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: MILESTONES */}
        {activeTab === 'milestones' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <h2 className="text-lg font-serif font-bold text-slate-900 flex items-center space-x-2">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span>Penanda Milestones: "Momen Berdamai dengan Diri"</span>
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Pencapaian terbesarmu di usia 30+ bukan selalu gelar atau angka, melainkan momen-momen ketika hatimu merasa lapang dan bisa memaafkan.
                </p>
              </div>

              <button 
                onClick={() => setIsAddingMilestone(!isAddingMilestone)}
                className="px-4 py-2.5 bg-amber-700 text-white text-xs font-bold rounded-xl hover:bg-amber-800 transition-all flex items-center justify-center space-x-2 flex-shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>{isAddingMilestone ? 'Batal' : 'Catat Momen Berdamai'}</span>
              </button>
            </div>

            {isAddingMilestone && (
              <form onSubmit={handleAddMilestone} className="bg-white p-6 rounded-2xl border border-amber-200 shadow-md space-y-4">
                <h3 className="text-sm font-bold text-amber-900 font-serif">Tambah Momen Berdamai Baru</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">Judul Momen Berdamai:</label>
                    <input 
                      type="text"
                      placeholder="Misal: Berdamai dengan Ekspektasi Orang Tua"
                      value={newMilestoneTitle}
                      onChange={(e) => setNewMilestoneTitle(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-amber-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 mb-1 block">Label Simbolik:</label>
                    <input 
                      type="text"
                      placeholder="Misal: Inner Healing / Self-Acceptance"
                      value={newMilestoneBadge}
                      onChange={(e) => setNewMilestoneBadge(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">Kisah Singkat Momen Ini:</label>
                  <textarea 
                    rows={3}
                    placeholder="Bagaimana momen ini membantumu merasa lebih lapang dan tenang?"
                    value={newMilestoneStory}
                    onChange={(e) => setNewMilestoneStory(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-amber-600"
                  />
                </div>

                <button 
                  type="submit" 
                  className="px-5 py-2.5 bg-amber-700 text-white rounded-xl text-xs font-bold hover:bg-amber-800 transition-all"
                >
                  Tancapkan Penanda Ini
                </button>
              </form>
            )}

            <div className="relative border-l-2 border-amber-200 ml-4 pl-6 space-y-6">
              {milestones.map((m) => (
                <div key={m.id} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-sm group-hover:scale-125 transition-transform"></div>
                  
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-300 transition-all space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                        {m.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{m.date}</span>
                    </div>

                    <h3 className="font-serif font-bold text-slate-900 text-base">{m.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      "{m.story}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-8 mt-16 text-center text-xs text-slate-400 border-t border-slate-200 pt-8">
        <p className="font-serif text-slate-600 font-semibold">Studio Ruang Tumbuh — Gentle Coaching & Digital Journaling</p>
        <p className="mt-1">Dirancang khusus untuk menemani perjalanan ketenangan & pertumbuhan diri wanita usia 30+ tahun.</p>
      </footer>
    </div>
  );
}

