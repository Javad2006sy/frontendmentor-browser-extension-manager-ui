import { useState } from "react";

import { FilterButton } from "./base";

const ExtensionList = () => {
    const [filter, setFilter] = useState("all");

    const handleFilterActivation = (value) => setFilter(value);

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
        </div>
    );
};

export default ExtensionList;
