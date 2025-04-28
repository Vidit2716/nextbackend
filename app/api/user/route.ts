import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../generated/prisma";

const client=  new PrismaClient();
export function GET() {
    return NextResponse.json({
        email: "vidit@gmail.com",
        name: "vidit",
    });
}

export async function POST(req: NextRequest) {
    
        const body = await req.json();
         await client.user.create({
            data: {
                username: body.username,
                password: body.password,
            },
        });

        

        return NextResponse.json({ message: "Signed up" });
    }
