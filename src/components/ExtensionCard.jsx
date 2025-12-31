import { Button, Switcher } from "./base";

const ExtensionCard = ({ extension, onActivation }) => {
    return (
        <div className="extension-card">
            <div>
                <img src={extension.logo} alt={extension.name} />
                <div>
                    <h3>{extension.name}</h3>
                    <p>{extension.description}</p>
                </div>
            </div>
            <Button>Remove</Button>
            <Switcher
                active={extension.isActive}
                onToggle={(e) => onActivation(e.target.checked, extension.id)}
            />
        </div>
    );
};

export default ExtensionCard;
