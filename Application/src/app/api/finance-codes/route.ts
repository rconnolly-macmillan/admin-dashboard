import { formCodes } from "./form-codes";

export async function GET(req: Request) {
    return new Response(JSON.stringify(formCodes), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    })
}