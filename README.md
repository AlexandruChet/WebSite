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

1. 
Toggle Function
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

When ```isOpen === true``` (menu is open), an event listener for "mousedown" is added to document.

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
