import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
    try {
        // Extrai os dados do corpo da requisição
        const requestData = await request.json();
        
        // Envia uma solicitação POST com os dados fornecidos para a URL desejada
        const response = await axios.post("http://localhost:8080/api/usuarios", requestData);
        
        // Verifica se a resposta não está vazia
        if (!response.data) {
            throw new Error("Problemas com a resposta");
        }
        
        // Extrai os dados da resposta
        const data = response.data;
        console.log(data);
        
        // Retorna a resposta como JSON
        return NextResponse.json({ data });
    } catch (error) {
        // Captura e lança qualquer erro ocorrido durante o processo
        throw new Error(`Erro na requisição: ${error.message}`);
    }
}



