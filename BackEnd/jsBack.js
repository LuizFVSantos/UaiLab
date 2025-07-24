require('dotenv').config();

const URLcall = process.env.UrlApi

async function chamarApi() {
    const token = process.env.TokenKey
        if (!token) {
        console.error("Token não encontrado! Verifique seu arquivo .env");
        return;
    }

    try {
        const resp1 = await fetch(URLcall, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!resp1.ok) {
            throw new Error(`Erro na resposta da API: ${resp1.status}`);
        }

        const obj = await resp1.json();
        console.log(obj);
    } catch (error) {
        console.error("Erro ao chamar API:", error.message);
    }
}
chamarApi();
