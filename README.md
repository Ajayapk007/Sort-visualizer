# Sorting Visualizer 🎯

An interactive sorting algorithm visualizer built with vanilla JavaScript that lets you watch sorting algorithms come to life in real time.

## 🔴 Live Demo
[Watch it Live](#) <!-- Replace with your deployed link -->

---

## 📸 Preview

> Bars animate in real time with color-coded states — red for comparison, orange/blue for tracking, and green for sorted.

---

## ✨ Features

- 🔀 **Random Array Generation** — generate a new shuffled array anytime
- 📏 **Adjustable Array Size** — slider to control the number of bars
- ⏯️ **Play / Pause** — pause and resume any sort mid-way
- 🎨 **Color-coded Visualization**
  - 🔴 Red — being compared
  - 🟠 Orange — current minimum (Selection Sort)
  - 🔵 Blue — boundary element (Selection Sort)
  - 🟡 Yellow — done comparing, not yet sorted
  - 🟢 Green — sorted and in final position
- ⚡ **Abort on Range Change** — changing the slider mid-sort safely resets everything

---

## 🧠 Algorithms Implemented

### 🫧 Bubble Sort
Repeatedly compares adjacent elements and swaps them if they are in the wrong order. Largest elements bubble to the end each pass.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### 📥 Insertion Sort
Picks each element and walks it backwards into its correct position among already-sorted elements.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

### 🎯 Selection Sort
Finds the minimum element in the unsorted portion and places it at the correct position each pass.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

---

## 🛠️ Tech Stack

- **HTML** — structure
- **CSS** — styling and slider
- **Vanilla JavaScript** — all sorting logic, DOM manipulation, async animations

---

## 📁 Project Structure
```
sorting-visualizer/
│
├── index.html          # Main HTML file
├── style.css           # Styling
├── javascript.js       # Core logic — all sorts, controls, animations
│
├── bubble.js           # Bubble Sort (standalone module)
├── insertion.js        # Insertion Sort (standalone module)
└── selection.js        # Selection Sort (standalone module)
```

---

## 🚀 Getting Started

1. Clone the repository
```bash
   git clone https://github.com/Ajayapk007/sorting-visualizer.git
```

2. Open `index.html` in your browser — no build tools or dependencies needed!

---

## 🎮 How to Use

1. Use the **slider** to set array size
2. Click **New Array** to generate a fresh random array
3. Click **Bubble Sort**, **Insertion Sort**, or **Selection Sort** to start
4. Hit **Pause** to pause mid-animation, **Play** to resume
5. Move the slider anytime to abort the current sort and reset

---

## 💡 Key Implementation Details

- All sorts are `async` functions using `await new Promise(setTimeout)` for step-by-step animation
- A `do...while (!working)` loop powers the play/pause feature
- `rangeChanged` flag allows safe mid-sort abortion when slider is moved
- `disableControls()` prevents multiple sorts from running simultaneously
- Bar heights are read directly from the DOM using `window.getComputedStyle` — no separate array is maintained
- `String.prototype.trueInt()` strips `px` from computed height strings for numeric comparison

---

## 🙏 Acknowledgements

> A huge thank you to **[Crio.Do](https://www.crio.do/)** for their amazing project-based learning approach and documentation that guided the flow and structure of this project. Crio helped me truly understand how JavaScript works under the hood — async behavior, DOM manipulation, and building real interactive UIs from scratch. This project was inspired by and built with the foundation Crio provided. 🚀

---

## 👨‍💻 Author

Made with ❤️ and a lot of `await`
