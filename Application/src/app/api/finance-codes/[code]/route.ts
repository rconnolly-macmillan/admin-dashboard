import { formCodes } from "../form-codes";

export async function GET(request: Request, { params }: { params: Promise<{ code: string }> }) {
    const financeCode = (await params).code;
    console.log('Finance Code Route:', financeCode);
    
    const codeData = formCodes.find(code => code.formCode === financeCode);
    if (!codeData) {
        return new Response(JSON.stringify({ error: 'Finance code not found' }), {
            status: 404,
            headers: { "Content-Type": "application/json" }
        });
    }
    return new Response(JSON.stringify(codeData), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
    // Handle the request based on slug
}