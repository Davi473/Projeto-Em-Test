### Primeiros Passos
    npm i
    npm run dev


## Endpoints

 - ### /api/getlancamento
    ---
    - Historico de compra e venda
    ---
        {
            "usuario": "Davi"
        }

 - ### /api/newLancamento
    ---
    - Adicionar novos lançamentos
    ---
        {
            "usuario": "Davi",
            "ticket": "BBDC4",
            "quantidade": 1,
            "preco": 13.71,
            "data": "2024-06-12",
            "compra": true,
            "tipo": "Ação"
        }

 - ### /api/ativo
    ---
    - Ver a media dos ativos
    ---
        {
            "usuario": "Davi"
        }

 - ### /api/deleteLancamento
    ---
    - Deleta lançamento
    ---
        {
            "id": 1,
            "usuario": "Davi",
            "ticket": "MXRF11"
        }

 - ### /api/getLancamentoTicket
    ---
    - Historico de Lancamento de algum ticket específico
    ---
        {
            "usuario": "Davi",
            "ticket": "MXRF11"
        }