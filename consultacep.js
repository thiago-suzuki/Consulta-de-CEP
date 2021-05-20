class ConsultaCep {
    buscaCEP(cep, sucesso, falha) {
        const url = `https://viacep.com.br/ws/${cep}/json/`
        fetch(url)
            .then(function(resp) {
                return resp.json()
            })
            .then(function(dados) {
                sucesso(dados)
            })
            .catch(function(erro) {
                falha(erro)
            })
    }
}
export default ConsultaCep