import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(){
    const allHabits = await client.habits.findMany({});
   return NextResponse.json({
        allHabits
    })
}

export async function POST(req:NextRequest){

    const body = await req.json();
    const habit = await client.habits.create({
            data:{
                title:body.title,
                description:body.description,
                frequency:body.frequency
            }
    })

    return NextResponse.json({
        msg:"habit created succesfully",
        habit
    })
}

export async function DELETE(req:NextRequest){
    const body = await req.json();
    await client.habits.delete({
        where:{
            id:body.id,
            title:body.title
        }
    })

    return NextResponse.json({
        msg:"habit deleted successfully"
    })
}

export async function PUT(req:NextRequest){
    const body = await req.json();
    await client.habits.update({
        where:{
            id:body.id,
            title:body.title
        },
        data:{
           completed:true
        }
    })

    return NextResponse.json({
        msg:"habit completed successfully"
    })
}