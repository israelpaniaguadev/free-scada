import { create } from "zustand";

export type LocalContext = {
	backend: string;
	setBackend: (addr: string) => boolean;
};

export const useLocalContext = create<LocalContext>((set) => {
	return {
		backend: "",
		setBackend: (addr: string) => {
			set(() => {
				return {
					backend: addr
				};
			});
			return (/http(s)?:\/\/(((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4})|(.?))(:(\d)?)/g.test(addr));
		}
	};
});