
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const postData = await request.json();

    const { gRecaptchaToken } = postData;

    let res;

    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

    try {
        res = await fetch(
            "https://www.google.com/recaptcha/api/siteverify",
            {
                method: "POST",
                body: formData.toString(),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        res = await res.json();

    } catch (e) {
        return NextResponse.json({ success: false })
    }

    if (res && res.success && res.score > 0.5) {
        console.log("res.score:", res.score);

        return NextResponse.json({
            success: true,
            score: res.score,
        });
    } else {
        return NextResponse.json({ success: false });
    }
}
