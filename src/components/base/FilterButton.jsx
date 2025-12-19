import Button from "./Button";

const FilterButton = ({ isActiveFilter, onActivation, children }) => {
    const buttonClass = isActiveFilter
        ? "filter-btn filter-btn-active"
        : "filter-btn";

    return (
        <Button className={buttonClass} onClick={onActivation}>
            {children}
        </Button>
    );
};

export default FilterButton;
