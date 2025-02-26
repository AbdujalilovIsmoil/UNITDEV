import { storage } from "services";

export type initialStateTypes = {
  language: string;
};

const language = storage.get("lang") || "uz";

const initialState: initialStateTypes = {
  language: language || "uz",
};

export { initialState };
