import { useState } from "react";
import "./Slider.scss";

type Slide = {
    url: string;
    title?: string;
    description?: string;
};

type SliderProps = {
    slides: Slide[];
};

const Slider = ({ slides }: SliderProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="slider">
            <div
                className="slider__arrow slider__arrow--left"
                onClick={goToPrevious}
            >
                ←
            </div>
            <div
                className="slider__arrow slider__arrow--right"
                onClick={goToNext}
            >
                →
            </div>
            <div
                className="slider__slide"
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            ></div>
        </div>
    );
};

export default Slider;
