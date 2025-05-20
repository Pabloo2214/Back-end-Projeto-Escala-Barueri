import express from "express";

const app = express()

/*
            *Rotas mobile:

        *Publicas:

    1. Login
    2. Cadastro
    3. Redefinir a senha
    4. Veridicação de email
    

        *Privadas

    5. Minha Escala
    6. Perfil
    7. Configuração
    8. notificação (Sininho)
    9. Atualizar dados
    10. Verificação de escala (pop_up)
    11. Notificaçã9o recentes



    

            *Rotas web:


        *Publicas:

    1. Login 
    2. Redefinir senha
    3. codigo de verificação


        *Privadas: 

    4. Adicionar setor
    5. Consultar datas
    6. Notificações
    7. Tela do setor
    8. Adicionar funcionario
    9. Notificar Pendencia
    10. Perfil do funcionario
    11. Atuaizar dados           
    12. Desligar funcionario
    13. Criar Nova Escala 
    14. Funcionarios trabalhando no dia selecionado
    15. Configuração 


*/

app.listen(3000, () => console.log("Servidor Rodando"))