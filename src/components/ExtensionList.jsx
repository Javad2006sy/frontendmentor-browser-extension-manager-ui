import { useState } from "react";

import { FilterButton } from "./base";
import ExtensionCard from "./ExtensionCard";

const ExtensionList = ({ extensions, onExtensionManagement }) => {
    const [filter, setFilter] = useState("all");

    const handleFilterActivation = (value) => setFilter(value);

    let filteredExtensions;

    switch (filter) {
        case "all": {
            filteredExtensions = [...extensions];
            break;
        }

        case "active": {
            filteredExtensions = extensions.filter((ext) => ext.isActive);
            break;
        }

        case "inactive": {
            filteredExtensions = extensions.filter((ext) => !ext.isActive);
            break;
        }
    }

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

    function handleExtensionRemove(id) {
        const extensionsUpdate = extensions.filter((ext) => id !== ext.id);
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
                {filteredExtensions.map((item) => (
                    <ExtensionCard
                        key={item.id}
                        extension={item}
                        onActivation={handleExtensionActivation}
                        onRemove={handleExtensionRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExtensionList;
