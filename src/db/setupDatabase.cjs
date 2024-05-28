// src/db/setupDatabase.cjs
const Database = require('better-sqlite3');
const db = new Database('agenda.db', { verbose: console.log });

db.exec(`
  CREATE TABLE IF NOT EXISTS agenda (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    time TEXT,
    session_name TEXT,
    session_leader TEXT,
    details TEXT,
    day INTEGER
  )
`);

const stmt = db.prepare('INSERT INTO agenda (time, session_name, session_leader, details, day) VALUES (?, ?, ?, ?, ?)');
stmt.run('09:00 - 10:00', 'التسجيل والافتتاح', '', '', 1);
stmt.run('10:00', 'القرآن الكريم', '', '', 1);
stmt.run('10:03', 'النشيد الوطني', '', '', 1);
stmt.run('10:05', 'كلمة رئيس الجامعة', 'أ.د. محمد عبد الله الدنفور', '', 1);
stmt.run('10:10', 'كلمة رئيس اللجنة التحضيرية', 'د. حسين خليل خليل', '', 1);
stmt.run('10:20', 'كلمة الشركة الليبية للبريد والاتصالات وتقنية المعلومات القابضة', '', '', 1);
stmt.run('10:25', 'كلمة الشركة الليبية للحديد والصلب', '', '', 1);
stmt.run('10:30', 'كلمة المنطقة الحرة', '', '', 1);
stmt.run('10:35', 'تكريم الرعاة', '', '', 1);
stmt.run('11:00 - 11:30', 'المحاضرة الأولى (عبر منصة زوم) - Revolutionising Agriculture with Artificial Intelligence (AI)', 'د. جاد الحق القاضي', 'جامعة نوتنجهام ترنت – بريطانيا', 1);
stmt.run('11:30 - 12:00', 'استراحة قهوة', '', '', 1);
stmt.run('12:00 - 12:30', 'المحاضرة الثانية - Digital Transformation: What Decision Makers Should Know', 'د. محمد سالم مصباح', 'جامعة بنغازي', 1);
// Add more entries as needed

console.log("Database setup complete.");
process.exit(0);
