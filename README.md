حتماً! در ادامه یک مستند کامل و حرفه‌ای (برای فایل `README.md` یا داکیومنت پروژه) ارائه می‌دم که توضیح می‌ده چطور پروژه‌ی شما سازمان‌دهی شده، از چه تکنولوژی‌هایی استفاده شده، چه ساختاری دارد، و چه کارهایی انجام شده است:

---

## 🧩 Next.js Front-End Challenge Documentation

### ✨ Project Overview

این پروژه یک اپلیکیشن چندصفحه‌ای (Multi-Page Application) است که با استفاده از **Next.js** ساخته شده و اطلاعات را از یک API عمومی دریافت می‌کند. این اپ دارای ویژگی‌هایی شامل:

- **صفحه خانه**: لیست پست‌ها با صفحه‌بندی و قابلیت جستجو
- **صفحه جزئیات**: مشاهده‌ی جزئیات هر پست
- **صفحه ارسال پست**: فرم ایجاد پست جدید (به صورت Mock)

---

### 🛠️ Tech Stack

| بخش       | تکنولوژی                         |
| --------- | -------------------------------- |
| Frontend  | Next.js (App Router)             |
| Styling   | Tailwind CSS                     |
| Animation | Framer Motion                    |
| Icons     | Lucide React                     |
| Type      | TypeScript                       |
| API       | JSONPlaceholder + json.xstack.ir |

---

### 📁 Folder Structure

```
app/
│
├── layout.tsx            // Root layout
├── page.tsx              // Home page
│
├── posts/                // Dynamic route for post detail
│   └── [id]/page.tsx     // Post detail page
│
├── submit/page.tsx       // Submit form page
│
├── components/           // Reusable components
│   └── section/Posts/
│       ├── PostCard.tsx
│       ├── _services/
│       │   ├── getPosts.ts
│       │   ├── getPost.ts
│       │   ├── sendPost.ts
│       │   └── index.ts
│       └── Posts.tsx
│
├── lib/
│   └── fetcher.ts        // Centralized fetch logic
│
└── styles/               // Tailwind config / global CSS
```

---

### 📌 Features Implemented

#### ✅ Home Page (`/`)

- دریافت لیست پست‌ها از API (`https://json.xstack.ir/api/v1/posts`)
- نمایش ۱۰ پست در هر صفحه
- جستجوی عنوان پست‌ها (client-side)
- صفحه‌بندی (pagination)

#### ✅ Details Page (`/posts/:id`)

- دریافت جزئیات یک پست از API (`https://json.xstack.ir/api/v1/post/{slug}`)
- نمایش عنوان، متن، ID پست و ID کاربر

#### ✅ Submit Page (`/submit`)

- فرم ارسال پست با فیلدهای:

  - عنوان پست
  - محتوای پست

- اعتبارسنجی سمت کلاینت
- ارسال درخواست به API (`https://jsonplaceholder.typicode.com/posts`)
- نمایش پیام موفقیت یا خطا

#### ✅ Navigation & UI

- منوی واکنش‌گرا (Responsive) با انیمیشن Framer Motion
- طراحی موبایل‌فرست با Tailwind CSS
- استفاده از کامپوننت‌های سفارشی و تایپ‌های TypeScript

---

### 🚧 API Endpoints Used

```bash
GET   https://json.xstack.ir/api/v1/posts           # Fetch all posts
GET   https://json.xstack.ir/api/v1/post/{slug}     # Fetch single post
POST  https://jsonplaceholder.typicode.com/posts    # Submit new post
```

---

### 🧠 Key Design Decisions

- استفاده از `fetcher.ts` به عنوان **fetch utility مرکزی** با تنظیمات header، error handling و base URL.
- تقسیم کامپوننت‌ها به پوشه‌ی `/section/Posts/` برای جداسازی منطقی و سازمان‌یافته‌تر.
- همه‌ی درخواست‌های fetch در پوشه‌ی `_services/` انجام شده تا منطق درخواست از کامپوننت جدا باشد.
- از `Framer Motion` برای انیمیشن‌های نرم استفاده شده (مثلاً باز و بسته شدن منوی موبایل).
- از `App Router` در Next.js 13+ استفاده شده و صفحات با ساختار مدرن route-based ساخته شده‌اند.

---

### 📈 Improvements & Bonus Features

- [x] Pagination
- [x] Search Bar
- [x] Smooth Page Transitions
- [x] Animated Mobile Menu
- [ ] Persist new posts (API doesn’t support it - mock only)

---

### ▶️ How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set environment variable in `.env.local`:

   ```
   NEXT_PUBLIC_API_URL=https://json.xstack.ir/api/v1
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

---

### 🧪 Challenges Faced

- API endpoint برای `POST` واقعی نبود و مجبور شدیم از `jsonplaceholder.typicode.com` استفاده کنیم.
- API `getPost` با `slug` بود، اما چون ID ارسال می‌شد، نیاز به سازگار کردن ورودی داشت.
- مدیریت جستجو و صفحه‌بندی به صورت client-side برای سادگی انجام شد.

---

### ✅ Summary

پروژه طراحی‌شده تمام ویژگی‌های خواسته‌شده را پیاده‌سازی کرده است:

- ساختار تمیز و قابل توسعه
- استفاده از روش‌های مدرن React/Next.js
- تعامل کامل با API (fetch / post)
- انیمیشن، UI زیبا و تجربه کاربری مناسب
