import { useState, useEffect, useRef } from "react";
import "./BurgerMenu.scss";

interface BurgerMenuProps {
  onNavigateCalculate?: () => void;
  onNavigateHouse?: () => void;
  onRegistration?: () => void;
  onNavigateFortune?: () => void;
}

const BurgerMenu = ({
  onNavigateCalculate,
  onNavigateHouse,
  onRegistration,
  onNavigateFortune,
}: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const funcState = (): void => {
    setIsOpen(!isOpen);
  };

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
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateCalculate?.();
                      setIsOpen(false);
                    }}
                  >
                    Calculate your Sum
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateHouse?.();
                      setIsOpen(false);
                    }}
                  >
                    Watch your House
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onRegistration?.();
                      setIsOpen(false);
                    }}
                  >
                    Registration
                  </a>
                </li>
                <li>
                  <a href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateFortune?.();
                      setIsOpen(false);
                    }}
                  >Fortune</a>
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
