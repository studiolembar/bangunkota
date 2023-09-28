import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonSliderProps {
  next: () => void;
  previous: () => void;
}

export function ButtonSlider(props: ButtonSliderProps) {
    const { next, previous } = props;
    return (
      <div className="absolute top-56 right-36 lg:top-56 lg:right-24">
        <button
          className="py-1 px-4 rounded-full border border-green mr-3 lg:mr-5"
          onClick={() => previous()}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-green" size={"lg"}/>
        </button>
        <button
          className="py-1 px-4 rounded-full border border-green"
          onClick={() => next()}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-green" size={"lg"} />
        </button>
      </div>
    );
}