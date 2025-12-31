import { useState } from "react";

import { FilterButton } from "./base";
import ExtensionCard from "./ExtensionCard";

const ExtensionList = ({ extensions, onExtensionManagement }) => {
    const [filter, setFilter] = useState("all");

    const handleFilterActivation = (value) => setFilter(value);

    function handleExtensionActivation(activeState, id) {
        const extensionsUpdate = extensions.map((ext) => {
            if (ext.id !== id) return ext;

            return {
                ...ext,
                isActive: activeState,
            };
        });

        onExtensionManagement(extensionsUpdate);
    }

    return (
        <div className="mt-12 flex flex-wrap items-center justify-between">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                Extensions List
            </h2>

            <div className="flex-center gap-2">
                <FilterButton
                    isActiveFilter={filter === "all"}
                    onActivation={() => handleFilterActivation("all")}
                >
                    All
                </FilterButton>
                <FilterButton
                    isActiveFilter={filter === "active"}
                    onActivation={() => handleFilterActivation("active")}
                >
                    Active
                </FilterButton>
                <FilterButton
                    isActiveFilter={filter === "inactive"}
                    onActivation={() => handleFilterActivation("inactive")}
                >
                    Inactive
                </FilterButton>
            </div>

            <div className="w-full">
                {extensions.map((item) => (
                    <ExtensionCard
                        key={item.id}
                        extension={item}
                        onActivation={handleExtensionActivation}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExtensionList;
