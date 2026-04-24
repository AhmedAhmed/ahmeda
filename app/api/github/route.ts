import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const resp = await fetch(
        "https://api.github.com/users/ahmedahmed/repos"
    );
    const json = await resp.json();
    return NextResponse.json({
        data: json
    });
}
