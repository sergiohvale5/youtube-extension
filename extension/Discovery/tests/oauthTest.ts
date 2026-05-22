import { env } from "../config/envConfig.js";

// Função de autenticação com Google
async function login() {
    try {
        const redirectUri = chrome.identity.getRedirectURL();
        
        const url = 
            "https://accounts.google.com/o/oauth2/v2/auth" +
            `?client_id=${env.client_id}` +
            `&response_type=token` +  
            `&redirect_uri=${encodeURIComponent(redirectUri)}` +
            `&scope=${encodeURIComponent(env.scopes)}`;

        const responseUrl = await chrome.identity.launchWebAuthFlow({
            url: url,
            interactive: true
        });

        if (!responseUrl) {
            console.error("Falha na autenticação Google - URL vazia");
            throw new Error("Falha na OAuth");
        }

        const hash = new URL(responseUrl).hash;

        const params = new URLSearchParams(hash.substring(1));

        const token = params.get("access_token");

        return token;

    } catch (err) {
        console.error("Erro detalhado no login Google:", err);
        throw err;
    }
}

console.log("Chrome API disponível:", !!chrome);
console.log("Chrome identity disponível:", !!chrome?.identity);

export default login;