"use client";

import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

export default function GoogleCaptchaWrapper({children}: {children: React.ReactNode}) {
        const reCaptchaKey: string | undefined = process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    return (
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey ?? "Not Defined"}>
            {children}
        </GoogleReCaptchaProvider>
    );
}