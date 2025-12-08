TODO: Criar utils pro GetUserModel e remover duplicatas
TODO: Inserir a autenticação com ZOD + Middleware
TODO: Inserir o uui-v7
TODO: Alterar duração do JWT para uma sessão de 1 dia talvez?
TODO: Criar uma entidade de Produtos para vender (talvez mudar o "produto" atual para matéria-prima? ou então mudar a "receita" para produto e mudar produto atual para matéria prima? parando pra pensar, o produto "queijadinha" tem matéria primas isoladas que juntas viram a receita e que essa receita ao ser feita, ela gera as unidades desse produto. essa quantidade gerada de queijadinhas podem ser vendidas, doadas, comidas ou descartadas)
TODO: corrigir o res.json que a IA fez
TODO: Lembrar de fazer try catch sempre no mvc

IDEIA PARA O FUTURO:
No controller:
Pegar o user id do request - feito
Pegar o name do stock para atualizar pelo body do request - feito
Criar um objeto chamado newStock ou algo assim e inserir o userId e o nome do stock - feito
Enviar para o service esse objeto chamado newStock - feito
Enviar o retorno para as rotas com o res.status e res.json - feito

No service:
Enviar o objeto newStock para o model - feito
Enviar para o controller o retorno do model - feito

No model:
Fazer uma query (em outra classe) pra pegar o stockId adquirido acima e fazer o update no stock.name com o nome do stock obtido pelo objeto newStock
Retornar para o service - feito

PRODUCT -> vai criar apenas o produto sem stockId e sem quantidade ou preço. apenas nome, unit e userId
STOCKPRODUCT -> vai criar o stockProduct com stockId e quantidade e preço. conta com o productId ou o userId?

é preciso fazer uma verificação no userId pra ver se bate com o userId que existe em product, stock, etc. Pois se alguém inserir um uuid de outra pessoa, ela pode alterar os dados desse usuário. ou seja, para fazer qualquer coisa nas entidades, é preciso checar se o userId que está sendo entregue pelo JWT é o mesmo userId que está salvo no DB.

faltou arrumar essa questões acima, sobre compund unique key e coisas do tipo.
