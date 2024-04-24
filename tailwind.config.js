/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primaryPurple': '#646ff0',
        'black-1':  '#646681',
        'black-2': '#585858',
        'bg-1': '#f8f8ff',
        'bg-2': '#ecedf6',
        'bg-3': '#cccdde',
        'gray-1': '#eee',
        'gray-2': '#dedfe1',
        'black': '#000',
        'white': '#fff'
      }
    }
  },
  plugins: [],
}

