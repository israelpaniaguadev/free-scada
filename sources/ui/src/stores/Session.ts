import { create } from "zustand";

export type SessionStore = {
	name?: string;
	datetime?: Date;

	startSession: (n: string, p: string) => Promise<void>;
};

export const useSessionStore = create<SessionStore>((set) => ({ // Autentica el usuario y carga sus datos en memoria.
	system: "local",
	startSession: async (n: string, p: string) => {
		try {
			// Loggear en sistema central.
			const res = await fetch(import.meta.env.CENTRAL_SERVER + "/auth", { // Uses the URL provided by the .env
				method: "POST",
				mode: "cors",
				credentials: "include",
				headers: {},
				body: JSON.stringify({
					name: n,
					password: p
				})
			});
			if (!res.ok) {
				throw new Error("Couldn't login.");
			}
			console.log("Logged in.");
			return set(() => ({
				datetime: new Date(),
				name: n
			}));
		} catch (err) {
			console.error(err);
		}
	}
}));