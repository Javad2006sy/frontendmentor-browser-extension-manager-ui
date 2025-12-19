const Switcher = ({ active, onToggle = null }) => {
    return (
        <input
            type="checkbox"
            checked={active}
            onChange={(e) => onToggle(e)}
            className={`switcher ${active ? "switcher-active" : ""}`.trim()}
        />
    );
};

export default Switcher;
