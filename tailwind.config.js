// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. اضافه کردن فونت جدید به خانواده فونت‌ها
      fontFamily: {
        // نام Shabnam را به عنوان یک کلاس جدید (مثل font-shabnam) تعریف کنید
        shabnam: ['ShabnamFD', 'sans-serif'],
      },
      // می‌توانید از نام دلخواه دیگری مثل 'primary' هم استفاده کنید
    },
  },
  plugins: [],
}