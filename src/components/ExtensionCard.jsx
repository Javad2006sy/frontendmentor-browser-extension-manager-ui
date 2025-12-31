import { Button, Switcher } from "./base";

const ExtensionCard = ({ extension, onActivation, onRemove }) => {
    return (
        <div className="extension-card">
            <div className="content-box">
                <img src={extension.logo} alt={extension.name} />
                <div className="title-box">
                    <h3 className="font-bold">{extension.name}</h3>
                    <p className="text-neutral-800 dark:text-neutral-300">
                        {extension.description}
                    </p>
                </div>
            </div>
            <Button onClick={() => onRemove(extension.id)}>Remove</Button>
            <Switcher
                active={extension.isActive}
                onToggle={(e) => onActivation(e.target.checked, extension.id)}
            />
        </div>
    );
};

export default ExtensionCard;
