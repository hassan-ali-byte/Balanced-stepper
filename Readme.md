🎨 Balanced Stepper

# Project Overview

Balanced Stepper is an interactive UI component that allows users to increment and decrement a counter while dynamically adjusting the width of the buttons based on the counter’s value. This project was inspired by a design by [Oleg Frolov](https://dribbble.com/Volorf) and was implemented as a learning exercise in DOM manipulation, event handling, and dynamic UI rendering.

This project was built to practice:

- DOM manipulation
- Event handling
- Dynamic styling and layout adjustments
- Refactoring for scalable and maintainable code

---

🌟 Key Features

- Increment (`+`) and decrement (`-`) a counter between configurable min and max values
- Button widths dynamically adjust with each click to visualize balance
- One button disappears at min/max counter values, leaving the active button to occupy full width
- Clicking the counter resets the UI to its initial state
- Smooth transitions with cubic-bezier easing for polished animations

---

🛠 Tech Stack

- HTML5 – Semantic markup
- CSS3 – Flexbox, transitions, variables for scalable styling
- JavaScript (ES6+) – DOM manipulation, event handling, centralized state management

---

⚙ Architecture & Approach

- **Data-driven configuration**: All rules (min, max, start, base width, step) stored in a `CONFIG` object
- **Single render function**: A `render()` function updates all UI elements based on current state
- **Delta calculation**: Dynamically calculates width changes relative to starting point
- **Safe rendering**: `Math.max()` ensures button widths never shrink below a minimum threshold
- **Separation of concerns**: HTML for structure, CSS for style, JS for behavior

---

📚 Learning Outcomes

**Core JavaScript & DOM Skills**

- Practiced `querySelector` and `querySelectorAll` for element selection
- Used `addEventListener` to handle click events
- Learned to centralize state and avoid directly manipulating UI inside event callbacks
- Applied dynamic calculations (`delta`) to adjust multiple UI properties efficiently

**Refactoring & Scalable Architecture**

- Started with a straightforward approach but faced edge cases with min/max counter and width adjustments
- Refactored using a `CONFIG` object and a single `render()` function for maintainability
- Learned the importance of separating rules (config) and state (count) from UI rendering

**CSS & Layout Learnings**

- Used CSS transitions for smooth width changes
- Applied `flex` layout to align buttons and counter
- Ensured responsive behavior without layout shifts
- Learned to protect against negative widths using `Math.max()`

**Engineering Mindset**

- Iterated on initial logic to handle edge cases and overshoot safely
- Learned to think about reusable patterns (delta, config object) rather than hardcoding values
- Built the solution in a maintainable and scalable way, ready for future enhancements

---



## 🖥️ Screenshot

### 🖥️ Desktop View

![Desktop view](design/desktop-version.png)

🌐 Live Demo

[Click here to view live demo](https://balanced-stepper-js.vercel.app/) 

---

👨‍💻 Author

Hassan Ali – [GitHub](https://github.com/hassan-ali-byte)

---

💬 Feedback

Feedback, suggestions, and code review comments are always welcome.  
If you have ideas for improving maintainability, scalability, or animations, feel free to share.

---

🎨 Design Inspiration

The UI concept for Balanced Stepper was inspired by a design by [Oleg Frolov](https://dribbble.com/Volorf). The implementation, JavaScript logic, and architectural decisions were built independently as part of my own learning and refactoring process.
