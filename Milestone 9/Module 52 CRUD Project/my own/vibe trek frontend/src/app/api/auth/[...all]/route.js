import { auth } from "@/lib/auth"; // MUST point to server config
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);