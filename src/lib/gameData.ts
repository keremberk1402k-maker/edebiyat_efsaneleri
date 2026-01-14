export interface Item {
  id: string; name: string; type: 'wep' | 'arm' | 'acc' | 'joker';
  val: number; cost: number; icon: string; jokerId?: string; uid?: number;
}

export interface Question { q: string; o: string[]; a: number; }

// --- YENİ YAPI: LEVEL SİSTEMİ ---
export interface Level {
  id: string;
  t: string; // Bölüm Adı
  hp: number;
  en: string; // Düşman
  ico: string; // İkon
  diff: string; // Zorluk
  isBoss: boolean;
}

// --- YENİ YAPI: BÖLGE SİSTEMİ ---
export interface Region {
  id: string;
  name: string;
  desc: string;
  x: number; // Harita X Konumu (%)
  y: number; // Harita Y Konumu (%)
  bg: string; // Savaş Arka Planı
  type: string; // Soru Tipi
  unlockC?: string; // Kostüm Ödülü
  levels: Level[]; // İçindeki Bölümler
}

export interface Player {
  name: string; pass: string;
  hp: number; maxHp: number; gold: number;
  xp: number; maxXp: number; lvl: number; baseAtk: number;
  inventory: Item[]; equipped: { wep: Item | null; arm: Item | null; acc: Item | null };
  jokers: { [key: string]: number }; mistakes: { q: string; a: string }[];
  score: number;
  // İLERLEME SİSTEMİ
  unlockedRegions: string[]; 
  regionProgress: { [regionId: string]: number }; // Hangi bölgede kaçıncı levelde?
  unlockedCostumes: string[]; currentCostume: string;
  tutorialSeen: boolean;
}

export const itemDB: Record<string, Item> = {
  '1': { id: '1', name: "Acemi Kalemi", type: "wep", val: 10, cost: 50, icon: "✏️" },
  '2': { id: '2', name: "Dolma Kalem", type: "wep", val: 30, cost: 200, icon: "✒️" },
  '3': { id: '3', name: "Fosforlu Kılıç", type: "wep", val: 60, cost: 600, icon: "🖍️" },
  '4': { id: '4', name: "Efsanevi Divit", type: "wep", val: 120, cost: 1500, icon: "🪶" },
  '5': { id: '5', name: "Bilgi Asası", type: "wep", val: 200, cost: 3000, icon: "🪄" },
  '10': { id: '10', name: "Ders Notları", type: "arm", val: 40, cost: 100, icon: "📄" },
  '11': { id: '11', name: "Test Kitabı Zırhı", type: "arm", val: 100, cost: 400, icon: "📒" },
  '12': { id: '12', name: "Ansiklopedi", type: "arm", val: 250, cost: 1200, icon: "📚" },
  '20': { id: '20', name: "Gözlük", type: "acc", val: 10, cost: 150, icon: "👓" },
  '21': { id: '21', name: "Akıllı Saat", type: "acc", val: 25, cost: 500, icon: "⌚" },
  '100': { id: '100', name: "50/50 Joker", type: "joker", jokerId: '5050', val: 0, cost: 1000, icon: "½" },
  '101': { id: '101', name: "Can İksiri", type: "joker", jokerId: 'heal', val: 0, cost: 1500, icon: "❤️" },
  '102': { id: '102', name: "Ek Süre", type: "joker", jokerId: 'time', val: 0, cost: 2000, icon: "⏳" },
  '103': { id: '103', name: "Soruyu Geç", type: "joker", jokerId: 'skip', val: 0, cost: 5000, icon: "⏩" }
};

export const costumeDB: Record<string, { icon: string; name: string }> = {
  'default': { icon: "🧒", name: "Öğrenci" },
  'c_tut': { icon: "🎓", name: "Mezun" },
  'c_r1': { icon: "🕵️‍♂️", name: "Dedektif" },
  'c_r2': { icon: "🤠", name: "Kaşif" },
  'c_r3': { icon: "🤴", name: "Şair Prens" },
  'c_boss': { icon: "🦸‍♂️", name: "Edebiyat Kahramanı" }
};

export const libraryDB = [
    {t: "İletişim", c: "Gönderici: Mesajı ileten. Alıcı: Mesajı alan. Dönüt: Alıcının tepkisi. Bağlam: İletişim ortamı."},
    {t: "Dil Bilgisi", c: "Lehçe: Tarihi dönemde ayrılan (Yakutça). Şive: Yakın dönemde ayrılan (Azerice). Ağız: Yöreye özgü konuşma."},
    {t: "Hikaye", c: "Maupassant (Olay): Merak öğesi ön planda. Çehov (Durum): Günlük hayattan kesitler."},
    {t: "Şiir", c: "Hece Ölçüsü: Parmak hesabı. Aruz: Ses değeri. Redif: Görevce aynı ekler. Kafiye: Ses benzerliği."}
];

// --- GÜNCELLENMİŞ BÖLGE VE SEVİYELER ---
export const regions: Region[] = [
  {
    id: 'tut', name: 'Başlangıç Kampı', desc: 'Temel eğitim alanı.',
    x: 50, y: 85, type: 'iletisim', bg: 'https://img.freepik.com/free-vector/landscape-with-mountains-lake_1048-2782.jpg', unlockC: 'c_tut',
    levels: [
      { id: 't1', t: 'Hoşgeldin', hp: 30, en: 'Korkuluk', ico: '🌾', diff: 'Eğitim', isBoss: false },
      { id: 'tboss', t: 'İlk Sınav', hp: 50, en: 'Eğitmen', ico: '👨‍🏫', diff: 'BOSS', isBoss: true }
    ]
  },
  {
    id: 'r1', name: 'İletişim Vadisi', desc: 'Dilin işlevlerini keşfet.',
    x: 20, y: 65, type: 'iletisim', bg: 'https://img.freepik.com/free-vector/cyber-network-background_1017-15875.jpg', unlockC: 'c_r1',
    levels: [
      { id: 'l1', t: 'Kanal Yolu', hp: 80, en: 'Parazit', ico: '👾', diff: 'Kolay', isBoss: false },
      { id: 'l2', t: 'Kod Ormanı', hp: 100, en: 'Şifre', ico: '🔐', diff: 'Kolay', isBoss: false },
      { id: 'boss', t: 'VADİ BOSS', hp: 200, en: 'İletişim Uzmanı', ico: '📡', diff: 'BOSS', isBoss: true }
    ]
  },
  {
    id: 'r2', name: 'Hikaye Ormanı', desc: 'Olay ve durumların gizemi.',
    x: 30, y: 35, type: 'hikaye', bg: 'https://img.freepik.com/free-vector/dark-forest-scene_1308-41002.jpg', unlockC: 'c_r2',
    levels: [
      { id: 'l1', t: 'Serim Yolu', hp: 150, en: 'Gölge', ico: '👤', diff: 'Orta', isBoss: false },
      { id: 'l2', t: 'Düğüm Mağarası', hp: 180, en: 'Merak', ico: '❓', diff: 'Orta', isBoss: false },
      { id: 'l3', t: 'Çözüm Tepesi', hp: 220, en: 'Kurgu', ico: '🧩', diff: 'Zor', isBoss: false },
      { id: 'boss', t: 'ORMAN BOSS', hp: 350, en: 'Maupassant Ruhu', ico: '👻', diff: 'BOSS', isBoss: true }
    ]
  },
  {
    id: 'r3', name: 'Şiir Dağları', desc: 'Kafiyelerin yankılandığı yer.',
    x: 75, y: 25, type: 'siir', bg: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000', unlockC: 'c_r3',
    levels: [
      { id: 'l1', t: 'Hece Patikası', hp: 250, en: 'Ozan', ico: '🎻', diff: 'Zor', isBoss: false },
      { id: 'l2', t: 'Redif Geçidi', hp: 300, en: 'Aşık', ico: '💔', diff: 'Zor', isBoss: false },
      { id: 'l3', t: 'Aruz Zirvesi', hp: 350, en: 'Divan Şairi', ico: '📜', diff: 'Çok Zor', isBoss: false },
      { id: 'boss', t: 'DAĞ BOSS', hp: 500, en: 'Şiir Sultanı', ico: '👑', diff: 'BOSS', isBoss: true }
    ]
  },
  {
    id: 'r4', name: 'Cehalet Kalesi', desc: 'Son savaş.',
    x: 85, y: 70, type: 'all', bg: 'https://img.freepik.com/free-vector/dragon-fire-breathing_107791-20.jpg', unlockC: 'c_boss',
    levels: [
      { id: 'l1', t: 'Sur Kapısı', hp: 600, en: 'Muhafız', ico: '🛡️', diff: 'Çok Zor', isBoss: false },
      { id: 'l2', t: 'Zindan', hp: 750, en: 'Karanlık', ico: '🌑', diff: 'Çok Zor', isBoss: false },
      { id: 'boss', t: 'FİNAL BOSS', hp: 1200, en: 'CEHALET EJDERİ', ico: '🐉', diff: 'FİNAL', isBoss: true }
    ]
  }
];

export const qPool: Record<string, Question[]> = {
  iletisim: [
      {q:"Gönderici, duygu ve düşüncelerini neye dönüştürür?", o:["Mesaja","Kanala","Bağlama","Dönüte"], a:0},
      {q:"Dilin göndericiye ait olduğu, duyguların anlatıldığı işlev?", o:["Heyecan Bildirme","Alıcıyı Harekete G.","Dil Ötesi","Kanalı Kontrol"], a:0},
      {q:"'Bugün hava çok güzel.' cümlesinde dil hangi işlevdedir?", o:["Göndergesel","Şiirsel","Heyecan","Kanal"], a:0},
      {q:"Bir dilin tarihi gelişim sürecinde metinlerle takip edilebilen kolları?", o:["Şive","Lehçe","Ağız","Argo"], a:0},
      {q:"Belli bir bölgede konuşulan dilin farklı söyleyiş özelliği?", o:["Ağız","Şive","Lehçe","Jargon"], a:0}
  ],
  hikaye: [
      {q:"Maupassant tarzı hikayenin diğer adı nedir?", o:["Olay Hikayesi","Durum Hikayesi","Ben Merkezli","Modern"], a:0},
      {q:"Türk edebiyatında ilk yerli hikaye?", o:["Letaif-i Rivayat","Küçük Şeyler","Müsameretname","Taaşşuk-ı Talat"], a:0},
      {q:"Durum hikayesinin dünya edebiyatındaki temsilcisi?", o:["Anton Çehov","Maupassant","Boccaccio","Poe"], a:0},
      {q:"Hikayede olayın geçtiği yer?", o:["Mekan","Zaman","Kişi","Tema"], a:0},
      {q:"Dede Korkut Hikayeleri kaç hikayeden oluşur?", o:["12+1","10","15","24"], a:0}
  ],
  siir: [
      {q:"İstiklal Marşı hangi ölçüyle yazılmıştır?", o:["Aruz","Hece","Serbest","Syllabique"], a:0},
      {q:"Dize sonlarındaki tek ses benzerliği?", o:["Yarım Uyak","Tam Uyak","Zengin Uyak","Cinaslı"], a:0},
      {q:"Bir sözcüğün başka bir sözcük içinde tam olarak geçmesi?", o:["Tunç Uyak","Tam Uyak","Yarım Uyak","Cinas"], a:0},
      {q:"Benzetme amacı gütmeden bir sözü başka söz yerine kullanma?", o:["Mecaz-ı Mürsel","Teşbih","İstiare","Kinaye"], a:0},
      {q:"Bilmezden gelme sanatı?", o:["Tecahül-i Arif","Hüsn-i Talil","Telmih","Tevriye"], a:0}
  ],
  all: []
};
qPool.all = [...qPool.iletisim, ...qPool.hikaye, ...qPool.siir];