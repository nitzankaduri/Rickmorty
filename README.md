# Rick and Morty — Multiverse Directory & Archive

אפליקציית **Master-Detail** מודרנית ואינטראקטיבית לחקר עולם ריק ומורטי, שנבנתה כחלק מפרויקט הגמר בקורס **4255 · פלטפורמות מתקדמות לפיתוח ב-WEB ושימוש ב-AI**.

הפרויקט נבנה ב-**React 19 + TypeScript + Vite + React Router + Vitest** ומציג עיצוב Dark Editorial יוקרתי ומותאם אישית (Pure CSS) בהשראת עולמות המדע הבדיוני.

---

## 🚀 מה האפליקציה עושה

1. **סייר דמויות ראשי (Master View - `/`):**
   - הצגת כרטיסי דמויות עשירים עם תמונה, שם, סטטוס (חי / מת / לא ידוע) וגזע.
   - שורת חיפוש טקסטואלית בזמן אמת לפי שם דמות.
   - סינון לפי סטטוס חיים (All / Alive / Dead / unknown).
   - סינון מהיר להצגת דמויות מועדפות בלבד.
   - טיפול מובנה בשלושת מצבי המסך: טעינה (Loading), שגיאה (Error) ומצב ריק (Empty State) עם כפתור איפוס.

2. **עמוד פרטי דמות ייעודי (Detail View - `/characters/:id`):**
   - שליפת מזהה הדמות מהכתובת באמצעות `useParams`.
   - הצגת תיק מודיעין מלא (Dossier): כוכב מקור, מיקום נוכחי, מגדר, וריאנט גנטי ומספר פרקים שהדמות השתתפה בהם.
   - כפתור סימון כמועדף וניווט חזרה חלק לסייר הראשי (`← Back`).
   - תמיכה ב-Deep Linking ורענון ישיר של הקישור (שליפה ישירה מה-API במידה והדמות אינה בזיכרון).

3. **כספת מועדפים אישית (Personal Vault - `/favorites`):**
   - עמוד ייעודי המרכז את כל הדמויות שסומנו בכוכב מועדף.
   - שמירה וסנכרון אוטומטי ב-`localStorage` (הנתונים נשמרים גם לאחר רענון הדפדפן).
   - חיפוש פנימי בתוך המועדפים ואפשרות לאיפוס הכספת.

4. **עמוד אנליטיקה וסטטיסטיקות (Multiverse Analytics - `/stats`):**
   - ניתוח דמוגרפי חי ומחושב של כל הדמויות במאגר.
   - מדדי הישרדות (יחסי Alive / Dead / unknown) מלווים בפסי התקדמות ויזואליים ואחוזים.
   - פילוח לפי הגזעים הנפוצים ביותר במולטיוורס (Human, Alien, Humanoid ועוד).
   - כפתור טלפורטציה אקראי (`⚡ Teleport to Random Specimen`) המגריל דמות ומנווט ישירות לעמוד הפרטים שלה.

5. **עמוד שגיאה 404 מעוצב (`*`):**
   - עמוד מעוצב המודיע על קואורדינטה לא קיימת במולטיוורס וכפתור לחזרה מהירה לממד C-137.

---

## 📡 באיזה API השתמשנו

המידע נשלף מ-**[The Rick and Morty API](https://rickandmortyapi.com/)**:
- **Endpoint ראשי:** `https://rickandmortyapi.com/api/character`
- **Endpoint פרטי דמות:** `https://rickandmortyapi.com/api/character/:id`
- ה-API פתוח וחינמי ללא צורך במפתח (API Key).
- כל קריאות הרשת מבוצעות באמצעות `fetch` מובנה בתוך `useEffect` עם טיפול בשגיאות ומצבי טעינה.

---

## 🛠️ טכנולוגיות וארכיטקטורה

- **React 19** — שימוש ב-Hooks (`useState`, `useEffect`), העברת נתונים ב-Props, חלוקה לרכיבים עצמאיים.
- **TypeScript** — טיפוסים מחמירים (`interface` ו-`type`) ב-`src/types/character.ts`, ללא שימוש ב-`any`.
- **React Router 7** — ניתוב דפים מלא (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `useParams`, `useNavigate`).
- **Vitest & React Testing Library** — 14 בדיקות יחידה ורכיבים עבור לוגיקת הסינון, עיבוד הנתונים ורכיבי ה-UI.
- **Pure CSS** — קובץ עיצוב מותאם אישית (`src/index.css`) עם עיצוב כהה רספונסיבי למובייל ולמסכים רחבים, ללא ספריות עיצוב חיצוניות.
- **Vite** — כלי פיתוח ובנייה סופר-מהיר.

---

## 💻 איך מריצים את האפליקציה

### 1. התקנת תלויות
```bash
npm install
```

### 2. הרצה במצב פיתוח (Dev Server)
```bash
npm run dev
```
האפליקציה תיפתח בכתובת המקומית: `http://localhost:5173`.

### 3. בדיקת טיפוסים (TypeScript Check)
```bash
npm run typecheck
```

### 4. בדיקת Linting
```bash
npm run lint
```

### 5. בנייה לייצור (Production Build)
```bash
npm run build
```

---

## 🧪 איך מריצים את הבדיקות (Vitest)

בפרויקט נכתבו 14 בדיקות יחידה ורכיבים המכסות את כל הלוגיקה החישובית ורכיבי הממשק.

### הרצת בדיקות בקונסול:
```bash
npm test
```
*מריץ את Vitest ומציג סיכום של כל 14 הבדיקות.*

### הרצת בדיקות בממשק הגרפי בדפדפן (Vitest UI):
```bash
npm run test:ui
```
*פותח ממשק דפדפן גרפי ואינטראקטיבי של Vitest לצפייה בבדיקות, בזמני ריצה ובפרטים המלאים.*

### הרצת בדיקות במצב מעקב (Watch Mode):
```bash
npm run test:watch
```

---

## 📁 מבנה הפרויקט

```
├── public/                 # קבצים סטטיים, אייקונים ואיור הדמות הרשמי
├── src/
│   ├── __tests__/          # בדיקות יחידה ורכיבים ב-Vitest
│   │   ├── CharacterCard.test.tsx
│   │   ├── EmptyState.test.tsx
│   │   └── filterUtils.test.ts
│   ├── components/         # רכיבי UI מודולריים ועצמאיים
│   │   ├── CharacterCard.tsx
│   │   ├── CharacterDetail.tsx
│   │   ├── CharacterList.tsx
│   │   ├── EmptyState.tsx
│   │   ├── ErrorState.tsx
│   │   ├── FilterBar.tsx
│   │   ├── Header.tsx
│   │   └── LoadingState.tsx
│   ├── pages/              # עמודי האפליקציה המנותבים
│   │   ├── HomePage.tsx      # עמוד רשימת דמויות ראשי
│   │   ├── DetailPage.tsx    # עמוד פרטי דמות (/characters/:id)
│   │   ├── FavoritesPage.tsx # עמוד כספת המועדפים (/favorites)
│   │   ├── StatsPage.tsx     # עמוד אנליטיקה וסטטיסטיקות (/stats)
│   │   └── NotFoundPage.tsx  # עמוד 404
│   ├── types/              # הגדרות טיפוסים וממשקים ב-TypeScript
│   │   └── character.ts
│   ├── utils/              # פונקציות עזר טהורות לסינון ולחישובים
│   │   └── filterUtils.ts
│   ├── test/               # הגדרות סביבת בדיקות (setup)
│   │   └── setup.ts
│   ├── App.tsx             # רכיב ראשי וניהול נתיבי React Router
│   ├── main.tsx            # נקודת כניסה עם BrowserRouter
│   ├── index.css           # עיצוב CSS מלא
│   └── vite-env.d.ts       # הגדרות סביבה ל-Vite
├── PRD.md                  # מסמך אפיון הפרויקט
├── tasks.md                # תוכנית משימות מפורטת עם תנאי סיום
├── PROMPTS.md              # יומן פרומפטים ותיעוד התהליך מול הסוכן
└── package.json            # תלויות וסקריפטים
```
