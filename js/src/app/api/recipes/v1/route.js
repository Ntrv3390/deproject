import connectToMongo from "@/db/page";
import { NextResponse } from "next/server";
import Recipe from "@/model/recipes.model";

export async function POST(request) {
    try {
        const data = await request.json();
        await connectToMongo();
        await Recipe.create(data);
        return NextResponse.json({message: "Recipe Added"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: `Error Occured - ${error}`}, {success: false}, {status: 400})
    }
}

export async function GET() {
    try {
        await connectToMongo();
        const recipes = await Recipe.find();
        return NextResponse.json({recipes: recipes}, {success: true}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: `Error Occured - ${error}`}, {success: false}, {status: 400})
    }
}