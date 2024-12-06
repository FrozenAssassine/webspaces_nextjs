import { NextRequest, NextResponse } from "next/server";

export function middleware(requests: NextRequest) {
    const { protocol, host } = requests.nextUrl;
    const url = requests.nextUrl;
    const hostname = requests.headers.get("host") || "localhost:3000";

    //skipping public files and _next paths
    if (/\.(.*)$/.test(url.pathname) || url.pathname.includes("_next")) return;

    //skip api routes unwichtig laut finn!
    if (url.pathname.toLowerCase().startsWith("api") || url.pathname.toLowerCase().substring(1).startsWith("api"))
        return NextResponse.next();

    //TESTING and PROGRAMMING PURPOSE!! default rewrite for localhost or unknown hostnames
    if (hostname === "localhost:3000") {
        url.pathname = `/fastedit${url.pathname}`;
        return NextResponse.rewrite(url);
    }


    //rewrite based on hostname
    if (hostname === "frozenassassine.de") {
        url.pathname = `/frozenassassine${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    if (hostname === "fastedit.frozenassassine.de") {
        url.pathname = `/fastedit${url.pathname}`;
        return NextResponse.rewrite(url);
    }
    if (hostname === "fastedit.frozenassassine.de") {
        url.pathname = `/easepass${url.pathname}`;
        return NextResponse.rewrite(url);
    }
    if (hostname === "quicknav.frozenassassine.de") {
        url.pathname = `/quicknav${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    //allow 404 behavior for unmatched routes
    return NextResponse.next();
}
