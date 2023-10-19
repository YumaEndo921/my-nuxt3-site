/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    // Docs: https://tailwindcss.com/docs/typography-plugin
    // require('@tailwindcss/typography'),
    // Docs: https://daisyui.com/docs
    require('daisyui'),
  ],
	// 追加
  daisyui: {
    themes: ["valentine"], // ここの値を変える
  },
}

