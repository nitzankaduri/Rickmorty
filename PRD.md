# PRD — Rick and Morty Explorer

> עמוד אחד. הגדרת המוצר, קהל היעד, מסכים ודרישות קבלה עבור פרויקט הגמר.

## 1. Pitch
אפליקציית Web אינטראקטיבית לחקר דמויות מיקום "ריק ומורטי", המאפשרת לחפש, לסנן לפי סטטוס חיים, לשמור מועדפים ולצפות בפרטים מעמיקים על כל דמות בממשק עתידני מהיר.

## 2. Who it is for
מעריצי הסדרה "ריק ומורטי" ומשתמשים כלליים שרוצים לאתר מידע במהירות על דמויות אהובות, לדעת מאיזה כוכב הן הגיעו, באיזה מיקום הן נמצאות וכמה פרקים הן שרדו.

## 3. Screens
- **List (Master View)** — גריד כרטיסי דמויות רספונסיבי: לכל דמות מוצגים תמונה, שם, סטטוס (Alive / Dead / unknown עם מחוון צבע), זן, וכפתור להוספה/הסרה ממועדפים.
- **Details (Detail View)** — תצוגת פאנל/מודאל מורחב על הדמות שנבחרה: תמונה באיכות גבוהה, שם, סטטוס חיים, זן, מין (Gender), כוכב מקור (Origin), מיקום נוכחי (Location), כמות פרקים בהם הדמות הופיעה, ומצב מועדף.

## 4. Must-have features
1. **שליפת נתונים מ-API**: טעינת דמויות מ-`https://rickandmortyapi.com/api/character` באמצעות `fetch` ו-`useEffect`, עם חיווי טעינה ושגיאה.
2. **זרימת Master-Detail**: לחיצה על כרטיס דמות ברשימה פותחת תצוגת פרטים עשירה ומלאה.
3. **חיפוש וסינון חי**: חיפוש טקסטואלי לפי שם וסינון בחירה לפי סטטוס חיים (All / Alive / Dead / unknown).
4. **מצב ריק (Empty State)**: הודעה מעוצבת וברורה כשאין תוצאות התואמות לחיפוש, עם אפשרות לאיפוס מהיר.
5. **שמירת מועדפים ב-LocalStorage**: אפשרות לסמן דמויות כמועדפות ולשמור את הבחירה בדפדפן.

## 5. Acceptance criteria
- When I open the application, I see a sci-fi portal loading state followed by a grid of Rick and Morty characters.
- When I click on any character card, I see full character details including origin, current location, gender, and episode count.
- When I type in the search bar or pick a status filter, I see the character list update in real time.
- When I search for a query with no matches, I see a friendly empty state message with a clear reset action.
- When I click the favorite star on a character, I see its favorite status saved and restored upon page refresh.

## 6. Not now
- עמודי פירוט עבור כל פרק ומיקום (Locations / Episodes endpoints).
- ניהול משתמשים, התחברות או בסיס נתונים בענן.
- אנימציות תלת-ממדיות כבדות וספריות חיצוניות.

## 7. Data
- **API:** `https://rickandmortyapi.com/api/character`
- **שדות ברשימה (Master):** `id`, `name`, `image`, `status`, `species`
- **שדות בפרטים (Detail):** `id`, `name`, `image`, `status`, `species`, `gender`, `origin.name`, `location.name`, `episode.length`
