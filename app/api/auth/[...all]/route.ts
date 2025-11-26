import { getAuth } from "@/lib/better-auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

let cachedHandler: { GET: any, POST: any } | null = null;

const getHandler = async () => {
    if (cachedHandler) return cachedHandler;

    const auth = await getAuth();
    cachedHandler = toNextJsHandler(auth);
    return cachedHandler;
}

export const GET = async (req: Request) => {
    const { GET: get } = await getHandler();
    return get(req);
}

export const POST = async (req: Request) => {
    const { POST: post } = await getHandler();
    return post(req);
}
