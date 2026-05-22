import login from "./oauthTest.js";

//Função que busca dados do vídeo do YT
async function getListYouTube(token: any) {
    try {
        console.log("Buscando dados do YouTube...");
        
        const dadosYT = await fetch("https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&mine=true", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (!dadosYT.ok) {
            if (dadosYT.status === 403) {
                console.log("Conta sem canal do YouTube");
                return;
            }
            console.log("Falha ao buscar dados do Youtube. Status:", dadosYT.status);
            return null;
        }

        const dadosYouTube = await dadosYT.json();
        
        if (dadosYouTube.items && dadosYouTube.items.length > 0) {
            console.log("Canal encontrado");
        } else {
            console.log("ℹNenhum canal encontrado para esta conta");
        }
        
        return dadosYouTube;
        
    } catch(err) {
        console.log("Erro de servidor:", err);
        return null;
    }
}

// Fluxo de dados
const btn = document.querySelector("#logar");

btn?.addEventListener("click", async () => {
    try {
        console.log("Iniciando...");
        
        const token = await login();
        
        if (!token) {
            console.error("Token vazio");
            alert("Falha na autenticação!");
            return;
        }
        
        console.log("✅ Autenticado!");
    
        const data = await getListYouTube(token);
        
        if(data){
            alert("Dados do youtube obtidos com sucesso")
        }
        
        console.log("YouTube data:", data);
        
    } catch (err) {
        console.error("❌ Erro:", err);
        alert(`Erro: ${err}`);
    }
});