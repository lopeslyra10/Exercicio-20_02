type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log(`Resposta do servidor: ${resposta}`);
  } else {
    console.log(`Operação bem-sucedida? ${resposta}`);
  }
}

processarResposta("Sucesso!");
processarResposta(false);
