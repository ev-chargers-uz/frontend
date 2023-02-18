import type { newsType } from "../api/types";

export interface newsConfigProps {
	news: newsType[],
}

export const newsConfig: newsConfigProps = {
	news: [],
}
