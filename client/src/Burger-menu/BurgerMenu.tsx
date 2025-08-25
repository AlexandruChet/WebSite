import { useState, useEffect, useRef } from "react";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const funcState = (): void => {
    setIsOpen(!isOpen);
  };

  const menuRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <header>
      <div className="burger__menu" ref={menuRef}>
        <button className="btn" onClick={funcState}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`burger__menus ${isOpen ? "active" : "hidden"}`}>
          <div className="services">
            <div className="__names">
              <ul>
                <li>
                  <a href="#">lorem 1</a>
                </li>
                <li>
                  <a href="#">lorem 2</a>
                </li>
                <li>
                  <a href="#">lorem 3</a>
                </li>
                <li>
                  <a href="#">lorem 4</a>
                </li>
                <li>
                  <a href="#">lorem 5</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BurgerMenu;
