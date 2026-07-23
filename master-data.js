// ══════════════════════════════════════════════════════════════
// MASTER DATA BERSAMA — dipakai oleh index.html (dashboard supervisor)
// & petugas.html (app petugas lapangan).
//
// SATU-SATUNYA SUMBER. JANGAN salin daftar ini ke index.html atau
// petugas.html lagi — cukup ubah di sini, lalu kedua halaman otomatis
// ikut berubah karena keduanya me-load file ini lewat <script src="master-data.js">
// sebelum script utama masing-masing.
//
// Pakai `var` (bukan const/let) supaya deklarasi ini menjadi properti
// window (global), sehingga bisa diakses baik dari <script> biasa
// (dipakai index.html) maupun <script type="module"> (dipakai petugas.html).
// ══════════════════════════════════════════════════════════════

var ROSTER_ULP_TEAMS = {
  'ULP Jayapura': [
    'Tim Pemeliharaan PLN ND', 'Tim Inspeksi JTM Tier 1 Jayapura', 'Tim Inspeksi JTM Tier 2 Jayapura',
    'Tim Inspeksi Gardu', 'Tim ROW PT APP Jayapura', 'Tim ROW PT Lau Daling',
    'Tim Mitra Konstruksi', 'Tim PDKB SL 1', 'Tim PDKB SL 2',
    'Tim Yantek Jayapura 11', 'Tim Yantek Jayapura 12', 'Tim Yantek Jayapura 21'
  ],
  'ULP Abepura': [
    'Tim Pemeliharaan PLN ND', 'Tim Inspeksi JTM Tier 1 Abepura', 'Tim Inspeksi Gardu',
    'Tim ROW PT AKA Rifki Papua', 'Tim ROW PT Intrabes Abepura', 'Tim ROW PLN ND Abepura',
    'Tim Mitra Konstruksi', 'Tim PDKB SL 1', 'Tim PDKB SL 2',
    'Tim Yantek Abepura 11', 'Tim Yantek Abepura 12', 'Tim Yantek Abepura 13', 'Tim Yantek Abepura 21'
  ],
  'ULP Sentani': [
    'Tim Pemeliharaan PLN ND', 'Tim Inspeksi JTM Tier 1 Sentani', 'Tim Inspeksi Gardu',
    'Tim ROW PT APP Sentani', 'Tim ROW PT Dasha Gauri', 'Tim ROW PT Intrabes Sentani',
    'Tim Mitra Konstruksi', 'Tim PDKB SL 1', 'Tim PDKB SL 2',
    'Tim Yantek Sentani 11', 'Tim Yantek Sentani 12', 'Tim Yantek Sentani 21'
  ],
  'ULP Arso': [
    'Tim Pemeliharaan PLN ND', 'Tim Inspeksi JTM Tier 1 Arso', 'Tim Inspeksi Gardu',
    'Tim ROW PT APP Arso', 'Tim ROW PT Intrabes Arso', 'Tim ROW PLN ND Arso',
    'Tim Mitra Konstruksi', 'Tim PDKB SL 1', 'Tim PDKB SL 2',
    'Tim Yantek Arso 11', 'Tim Yantek Arso 21'
  ],
  'ULP Genyem': [
    'Tim Pemeliharaan PLN ND', 'Tim Inspeksi JTM Tier 1 Genyem', 'Tim Inspeksi Gardu',
    'Tim ROW PT APP Genyem', 'Tim ROW PLN ND Genyem',
    'Tim Mitra Konstruksi', 'Tim PDKB SL 1', 'Tim PDKB SL 2',
    'Tim Yantek Genyem 11', 'Tim Yantek Genyem 12'
  ],
  'ULP Sarmi': [
    'Tim Pemeliharaan PLN ND', 'Tim Inspeksi JTM Tier 1 Sarmi', 'Tim Inspeksi Gardu',
    'Tim ROW PT APP Sarmi', 'Tim ROW PLN ND Sarmi',
    'Tim Mitra Konstruksi', 'Tim PDKB SL 1', 'Tim PDKB SL 2',
    'Tim Yantek Sarmi 11', 'Tim Yantek Sarmi 12'
  ],
  // "PT MITRA" diperlakukan sebagai Unit Kerja tersendiri (setara ULP),
  // dengan tiap nama PT di bawah ini berperan sebagai Regu/Tim-nya —
  // permintaan supervisor: strukturnya sama seperti ULP+Tim di atas.
  'PT MITRA': [
    'PT URSULA ABADI', 'PT HARAPAN PAPUA SEJAHTERA', 'PT TIGA RIZKY JAYA',
    'PT KALIAGA NINER PERSADA', 'PT RAJAWALI PERKASA RAYA', 'PT PLN NUSA DAYA',
    'PT AKA RIFKI PAPUA', 'PT AKBAR PAPUA PERKASA', 'PT INTRABES SELARA',
    'PT LAU DALING', 'PT DASHA GAURI PAPUA', 'PT PUTRA SENTANI JAYA',
    'PT BUBUN BUSU', 'PT KASITAMMUAN AMAN SEJAHTERA', 'PT LAKAWAN',
    'PT MATA ALLO PAPUA', 'PT PARDAME BINTANG UTARA', 'PT IRIANA KARYA UTAMA'
  ]
};

var RP_KATEGORI_LIST = ['KONTRAK AO', 'KONTRAK AI', 'KONTRAK VARCOST', 'EMERGENCY', 'GREBEK'];

var RP_HEALTH_INDEX_LIST = ['SEMPURNA', 'SEHAT', 'SAKIT', 'KRONIS'];

var RP_PDKB_LIST = ['TIDAK', 'YA'];

var RP_METODE_LIST = ['OFFLINE', 'ONLINE'];

var RP_JENIS_PEMADAMAN_LIST = ['TM', 'TR', 'Tanpa Pemadaman'];

var RP_JENIS_PEKERJAAN_LIST = [
  'Sempurna Proteksi', 'Sempurna Material', 'Sempurna Pembebanan',
  'Sempurna Inspeksi', 'Sempurna Konstruksi', 'Sempurna ROW', 'Sempurna Gardu'
];

var RP_RINCIAN_GROUPS = {
  'Umum / Bangunan / JTM Dasar': [
    'Perbaikan Andongan', 'Perbaikan Andongan (JTR)', 'Inspeksi Kubikel', 'Pemeliharaan Kubikel',
    'Pembersihan Halaman Bangunan', 'Pengecatan Bangunan', 'SLO PHBTM', 'Inspeksi Tier 1 JTM',
    'Inspeksi Tier 2 JTM', 'Pengukuran Tahanan Isolasi JTM/SKTM', 'Rabas Pohon', 'Rabas Pohon Kriteria-1', 'Rabas Pohon Kriteria-2', 
    'Rabas Pohon Kriteria-3', 'Rabas Pohon Kriteria-4', 'Rabas Pohon Kriteria-5', 'Rabas Pohon Tuntas', 'Pembersihan Terminasi',
    'Tebang Pohon', 'Tebang Pohon Kriteria-1','Tebang Pohon Kriteria-2','Tebang Pohon Kriteria-3','Tebang Pohon Kriteria-4','Tebang Pohon Kriteria-5',
    'Pemasangan Westpex', 'Pemasangan Cover Isolator Tarik', 'Pemasangan Cover Isolator Tumpu',
    'Pemasangan Cover LA', 'Pemasangan Cover FCO Bawah', 'Pemasangan Cover FCO Atas', 'Pemasangan IJUK',
    'Pembersihan Corong', 'Pembersihan Jaring Layang-layang', 'Sisip Tiang', 'Perbaikan Konstruksi Schoor',
    'Perbaikan Tiang Miring', 'Penggantian Traves', 'Penggantian Tiang Keropos/Rusak TM',
    'Pemasangan Pondasi Tiang', 'Pemasangan Top Ties', 'Konsul Phasa S', 'Perubahan Konstruksi Segitiga',
    'Pengecatan Tiang', 'Perbaikan Sambungan SUTM'
  ],
  'Switching / Proteksi / Kubikel': [
    'Perbaikan Kawat Rantas', 'Penggantian Isolator Tarik', 'Penggantian Isolator Tumpu',
    'Penggantian Pin Insulator menjadi Pin Post', 'Pemasangan LA Jaringan', 'Pemasangan Fault Indikator',
    'Penggantian Baterai LBS Motorized', 'Penggantian LBS', 'Penggantian Baterai Recloser', 'Penggantian FCO',
    'Pemeliharaan LBS', 'Pemeliharaan Recloser', 'Pemasangan Cover LBS', 'Pemasangan Cover Recloser',
    'Relokasi LBS', 'Relokasi Recloser', 'Pemasangan DS', 'Penggantian Rectifier Rusak',
    'Penggantian Relay Rusak (Peremajaan)', 'Integrasi Keypoint ke SCADA', 'Assesment Keypoint',
    'Pemeliharaan berbasis PDKB', 'SLO JTM', 'Perbaikan Tiang (las tiang/dll)', 'Pemasangan Klem H'
  ],
  'Gardu & Trafo': [
    'Inspeksi Tier 1', 'Inspeksi Tier 2', 'Pengukuran Beban', 'Penyeimbangan Beban', 'Manajemen/Mutasi Trafo',
    'Menaikkan Tap Changer Trafo Distribusi', 'Penggantian PHBTR Rusak', 'Penggantian Dudukan PHBTR',
    'Pembersihan Halaman Gardu Distribusi', 'Pengecatan Gardu', 'Penggantian In / Out Gardu',
    'Penggantian Tiang Keropos/Rusak Gardu', 'Perbaikan LA Gardu', 'Perbaikan Grounding Gardu',
    'Penyesuaian Rating (Fuse Link)', 'Pemasangan Cover LA & Bushing Gardu', 'Penyesuaian tegangan drop',
    'Downrating trafo', 'Uprating Trafo', 'Pemasangan Cover Cut Out Gardu', 'SLO Gardu Distribusi',
    'Pengecekan Pintu PHBTR', 'Pengecekan trafo rembes', 'Manuver beban gardu', 'Rehabilitasi Gardu',
    'Pengisian Minyak trafo pada Trafo'
  ],
  'Jaringan JTR': [
    'Inspeksi (JTR)', 'Perampalan Pohon (JTR)', 'Joinisasi/Perbaikan Sambungan (JTR)',
    'Penggantian Aksesoris Tarikan (JTR)', 'Perbaikan Tiang Miring (JTR)', 'Pemasangan Grounding (JTR)',
    'Pemasangan Schoor (JTR)', 'Pengecatan Tiang (JTR)', 'Pemasangan Kumis (JTR)',
    'Penggantian Tiang Keropos/Rusak (JTR)', 'Penggantian Kabel Incoming/Outgoing (JTR)',
    'Penggantian Pipa Incoming/Outgoing (JTR)', 'Penarikan Kabel JTR', 'Rekonektorisasi JTR', 'SLO JTR',
    'Pemasangan Kabel JTR', 'Pembongkaran Kabel JTR', 'Pembongkaran tiang JTR', 'Perbaikan SR Deret',
    'Penggantian Tap Konektor Menjadi Konektor Press', 'Pemasangan Service Wedge Clamp'
  ],
  'Pembangunan / Uprating': [
    'Pembangunan Konstruksi Tiang JTM', 'Uprating SUTM', 'Uprating MVTIC', 'Uprating SKTM',
    'Pembangunan Gardu Sisip', 'Pembangunan Gardu portal', 'Pembangunan Gardu Hubung',
    'Pembangunan Konstruksi Tiang JTR', 'Uprating SUTR', 'Pembangunan LBS Threeway', 'Pembangunan Recloser'
  ]
};
