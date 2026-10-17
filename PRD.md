# PRD — Rick and Morty Explorer & Multiverse Archive

> הגדרת המוצר, קהל היעד, מסכים ודרישות קבלה מעודכנות עבור פרויקט הגמר (React + TypeScript + React Router + Vitest).

## 1. Pitch
אפליקציית Master-Detail מודרנית ואינטראקטיבית ב-React 19 ו-TypeScript לחקר עולם "ריק ומורטי", הכוללת סייר דמויות עם סינון חי, עמוד פרטי דמות ייעודי לפי מזהה בכתובת (`/characters/:id`), כספת מועדפים נשמרת ב-LocalStorage, ועמוד סטטיסטיקות ואנליטיקה דמוגרפית חיה.

## 2. Who it is for
מעריצי הסדרה "ריק ומורטי" ומשתמשים שרוצים לאתר מידע במהירות על דמויות, להשוות סטטיסטיקות הישרדות, לשמור דמויות מועדפות, ולצפות בתיקי מודיעין מעמיקים על כל ישות במולטיוורס.

## 3. Screens & Routes
- **`/` או `/characters` (Master View - Explorer)** — סרגל עליון עם תפריט ניווט (`NavLink`), באנר Hero עריכתי, שורת חיפוש וסינון סטטוס בזמן אמת, ורשת כרטיסי דמויות רספונסיבית.
- **`/characters/:id` (Detail View - Dossier)** — עמוד פרטי דמות ייעודי הנשלף לפי ה-`id` מהכתובת באמצעות `useParams`, ומציג נתוני מוצא, מיקום נוכחי, מגדר, מופעי פרקים וכפתור חזרה.
- **`/favorites` (Personal Vault)** — עמוד ייעודי המרכז את כל הדמויות שנשמרו כמועדפות, עם חיפוש פנימי ואפשרות ניקוי.
- **`/stats` (Multiverse Analytics)** — עמוד אנליטיקה חי המחשב יחסי הישרדות (Alive / Dead / unknown), פילוח גזעים, וכפתור טלפורטציה אקראי.
- **`*` (Dimension 404)** — עמוד שגיאה מעוצב לנתיבים לא מוכרים.

## 4. Must-have features
1. **שליפת נתונים מ-API ציבורי**: טעינת דמויות מ-`https://rickandmortyapi.com/api/character` באמצעות `fetch` ו-`useEffect` עם טיפול בשלושת מצבי המסך: טעינה, שגיאה, ותוכן.
2. **ניתוב מלא עם React Router**: ניווט בין דפי המערכת באמצעות `NavLink` ו-`useParams` ללא רענון דף.
3. **חיפוש וסינון חי**: חיפוש טקסטואלי לפי שם וסינון בחירה לפי סטטוס חיים (All / Alive / Dead / unknown) ומצב ריק (Empty State).
4. **שמירת מועדפים ב-LocalStorage**: שמירה וסנכרון של דמויות מועדפות בדפדפן.
5. **מערך בדיקות יחידה ב-Vitest**: לפחות 5 בדיקות יחידה (14 בדיקות בפועל) המאמתות לוגיקת סינון, עיבוד נתונים ורכיבי ממשק.
6. **עמידה מלאה ב-TypeScript**: טיפוסים וממשקים קפדניים ללא שימוש ב-`any`.

## 5. Acceptance criteria
- When I open `/`, I see the live catalog, search and filter bar, and character cards.
- When I click a character, I am navigated to `/characters/:id` with the dossier details rendered via `useParams`.
- When I toggle the favorite button on any character, it persists in `localStorage` and appears in `/favorites`.
- When I visit `/stats`, I see live demographic charts and can teleport to a random character.
- Running `npm test` runs 14 Vitest unit tests with 100% pass rate.
- Running `npm run build` compiles TypeScript and creates the production bundle with 0 errors.

## 6. Data Contract
- **API:** `https://rickandmortyapi.com/api/character`
- **TypeScript Interface:** `Character` (`id`, `name`, `status`, `species`, `gender`, `origin`, `location`, `image`, `episode`).
