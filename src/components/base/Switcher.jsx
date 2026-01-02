const Switcher = ({ active, onToggle = () => {}, disabled = false }) => {
    return (
        <input
            type="checkbox"
            disabled={disabled}
            checked={active}
            onChange={(e) => onToggle(e.target.checked)}
            className={`switcher ${active ? "switcher-active" : ""}`.trim()}
        />
    );
};

export default Switcher;
