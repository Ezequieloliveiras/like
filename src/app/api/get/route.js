import { NextResponse } from "next/server"
import axios from "axios"

export async function GET(request) {
    try {
        const response = await axios.get("http://localhost:8080/api/usuarios")
        
        if (!response.data) {
            throw new Error("Problemas com a resposta")
        }
        
        const data = response.data
        console.log(data)
        
        return NextResponse.json({ data })
    } catch (error) {
        throw new Error(`Erro na requisição: ${error.message}`)
    }
}