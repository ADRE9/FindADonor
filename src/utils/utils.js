export const isFiltered = (cardItem, allFilters) => {
	if (Object.values(allFilters).every(element => element === null)) {
		// if no filter selected
		return true;
	} else {
		// if any filter is selected
		let count = 0;
		for (const filter in allFilters) {
			if (allFilters[filter] === null) {
				count++;
				continue;
			}
			if (cardItem[filter] === allFilters[filter]) {
				count++;
			}
		}
		if (count === Object.keys(allFilters).length) return true;

		return false;
	}
};
