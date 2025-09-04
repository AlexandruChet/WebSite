# 🍔 Burger Menu Component

A simple and reusable **React TypeScript Burger Menu** with outside click detection.  
This component allows you to toggle a burger (hamburger) menu and automatically close it when clicking outside.

---

## 🚀 Features

- ✅ Built with **React + TypeScript**
- ✅ Click outside detection (closes menu automatically)
- ✅ Smooth toggle between **open** and **hidden** states
- ✅ Easy to customize with your own CSS

---

🔎 Logic of the Burger Menu

1. State Management

```
const [isOpen, setIsOpen] = useState<boolean>(false);
```

isOpen → keeps track of whether the menu is open (true) or closed (false).

setIsOpen → function used to update this state.

Initially, the menu is closed (false).

1.  Toggle Function

```
const funcState = (): void => {
  setIsOpen(!isOpen);
};
```

This function toggles the menu’s state:

If isOpen is false, it becomes true.

If isOpen is true, it becomes false.

So, when the button is clicked, it either opens or closes the menu.

1. Reference to the Menu

```
const menuRef = useRef<HTMLDivElement | null>(null);
```

menuRef is a reference to the DOM element of the menu container.

It is used to check if the user clicked inside or outside of the menu.

1. Click Outside Detection

```
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isOpen]);
```

🔹 What happens here:

A function handleClickOutside is created:

If the click happens outside the menu area, the menu closes (setIsOpen(false)).

It uses menuRef.current.contains(event.target) to check if the click is inside the menu.

Event Listener Management:

When `isOpen === true` (menu is open), an event listener for "mousedown" is added to document.

When isOpen === false (menu is closed), the listener is removed.

This avoids unnecessary event listeners when the menu is hidden.

Cleanup:

The return function ensures the event listener is always removed when the component unmounts or when isOpen changes, preventing memory leaks.

1. Class Toggle for Styling

```
<div className={`burger__menus ${isOpen ? "active" : "hidden"}`}>
```

Dynamically applies a CSS class based on isOpen:

"active" → menu is visible.

"hidden" → menu is hidden.

# useScrollY

A simple React hook to track the vertical scroll position (`window.scrollY`) of the page.

Usage

const MyComponent = () => {
const scrollY = useScrollY();

return <div>Current scroll Y position: {scrollY}px</div>;
};

Features

Returns the current vertical scroll position.

Updates automatically on scroll.

Cleans up event listeners when the component unmounts.

# 🏡 House Component

This component implements a real estate section where users can **rent, buy, or sell** a house.  
Built with **React + TypeScript** and styled using **SCSS**.

---

## ⚙️ Features

- **Action Buttons**:

  - `Rent` – displays rental information.
  - `Buy` – displays purchase information.
  - `Sell` – displays selling information.

- **Animations**:

  - `fadeInUp` – smooth content appearance from below.
  - `float` – floating effect for icons.
  - `pulse` – pulsating container background.

- **Hover Effects**:
  - Titles (`.house__title`) expand, change background, and add glow.
  - Buttons have a "press" effect with a ripple animation.
  - Stat cards lift on hover.
  - House image scales and rotates slightly on hover.

---

## 🖼️ Layout

- **Left side**:  
  Title, subtitle, action buttons, info block, and statistics.

- **Right side**:  
  House image with hover animations.

---

Make sure SCSS is enabled in your project.

🛠️ Technologies

React + TypeScript

SCSS with mixins and keyframes animations

Google Fonts (Plus Jakarta Sans)

- Fully typed with **TypeScript**
- Reusable `Input` component with error handling
- Validation for:
  - Required fields
  - Email format
  - Password confirmation
- Controlled form state using React `useState`
- Styled with **SCSS**

---

```
export const config = [
  {
    name: "name",
    placeholder: "Name",
    required: true,
  },
  {
    name: "surname",
    placeholder: "Surname",
    required: true,
  },
  {
    name: "email",
    placeholder: "E-Mail",
    pattern: "^\\S+@\\S+\\.\\S+$",
    errorMessage: "Incorrect email",
    required: true,
  },
  {
    name: "password",
    placeholder: "Password",
    required: true,
    type: "password",
    minLength: 6,
    errorMessage: "Passwords don't match",
    validate: (state) => state.password === state.duplicate,
  },
  {
    name: "duplicate",
    placeholder: "Repeat password",
    required: true,
    type: "password",
  },
];
```


```markdown
# React ToDo List Component

This project contains a simple **ToDo List** built with **React** and **TypeScript**.  
It allows you to add tasks, delete them, and move tasks up or down in the list.

---

## Features
- Add new tasks
- Delete tasks
- Move tasks up or down
- Initial default tasks: `Best`, `WebSite`, `Ever`

---

## Technologies Used
- **React** (functional components + hooks)
- **TypeScript**
- **SCSS** for styling

---

## File Structure
```

src/
├── Comment.tsx   # Main ToDo List component
├── Comment.scss  # Styles for the component

```

---

## Component Explanation

### `useState`
- `tasks`: holds an array of strings (the task list).
- `newTask`: holds the current input value.

### Functions
- **handleInputChange(event)** → Updates the `newTask` state from the input field.
- **addTask()** → Adds a new task if the input is not empty.
- **deleteTask(index)** → Removes a task by its index.
- **moveTaskUp(index)** → Moves a task one position up in the list.
- **moveTaskDown(index)** → Moves a task one position down in the list.

---

## Usage
1. Type a task into the input field.
2. Click **Add** to insert the task into the list.
3. Use:
   - **Delete** button → to remove a task.
   - **☝** button → to move a task up.
   - **👇** button → to move a task down.

---

## Example UI

```

ToDo List
\[ input field ] \[Add]

1. Best     \[Delete] \[☝] \[👇]
2. WebSite  \[Delete] \[☝] \[👇]
3. Ever     \[Delete] \[☝] \[👇]

````

---
## Notes

* The component is written with **TypeScript**, so type safety is included.
* Styles are located in `Comment.scss`, which you can customize.
* This project is meant as a beginner-friendly example of working with **React state** and **list operations**.

```markdown
# Node.js Static File Server

This server on **Node.js** allows you to serve static files (React) from the `client/dist` folder.

## 🚀 Start

Install [Node.js](https://nodejs.org/), then in the terminal execute:

```bash
node server/index.js
````

After that, the server will start at:

```
http://127.0.0.1:8000
```

## 📝 Server code

```js
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = 8000;
const STATIC_PATH = path.join(__dirname, "../client/dist");

const MIME_TYPES = { 
".html": "text/html; charset=UTF-8", 
".js": "application/javascript; charset=UTF-8", 
".css": "text/css", 
".png": "image/png", 
".jpg": "image/jpeg", 
".svg": "image/svg+xml", 
".ico": "image/x-icon",
};

http.createServer((req, res) => { 
let filePath = path.join(STATIC_PATH, req.url === "/" ? "index.html" : req.url); 
let ext = path.extname(filePath); 

fs.readFile(filePath, (err, data) => { 
if (err) { 
fs.readFile(path.join(STATIC_PATH, "index.html"), (err2, data2) => { 
if (err2) { 
res.writeHead(500); 
res.end("Server Error"); 
return; 
} 
res.writeHead(200, { "Content-Type": MIME_TYPES[".html"] }); 
res.end(data2); 
}); 
return; 
} 

res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" }); 
res.end(data);
});
}).listen(PORT, () => {
console.log(`Server running at http://127.0.0.1:${PORT}`);
});
```

## ⚙️ How it works

1. The server listens on **port 8000**.
2. If the user goes to `/`, `index.html` is returned.
3. All other requests (`/style.css`, `/script.js`, `/images/logo.png`) are searched in the `client/dist` folder.
4. If the file is not found, the server returns `index.html` (this is convenient for **SPA**, for example, React/Vue).
5. MIME types are selected automatically for HTML, JS, CSS, images.

---

✅ Suitable for small sites, SPA testing or local development.