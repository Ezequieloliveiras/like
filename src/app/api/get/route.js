import { NextResponse } from "next/server"
import axios from "axios"

export async function GET(request) {

    try {
        const response = await axios("http://localhost:8080/api/usuarios")
        const data = response.data

        console.log('Busca realizada com sucesso!')
        return NextResponse.json({ data })

    } catch (error) {
        throw new Error(`Erro na requisição: ${error.message}`)
    }
}
