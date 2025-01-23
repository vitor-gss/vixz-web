
## Configuração do projeto
0. Criar projeto react
   create-react-app
   entrar na pasta do projeto criado

1. npm install react-router-dom
   
2. npm install bootstrap

3. Para usar bootstrap em todo projeto, inserir no topo index.js
   ```
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```
## Definindo Rotas e criando componentes
4. Configurar BrowserRouter para as rotas no projeto, no arquivo App.js
  ```
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  ```
5. O arquivo App.js já está preparado para receber as configurações de rotas.
   1. Necessário definir o um container  <Routes> com a definição de várias rotas <Route>. Cada componete de rota redenriza a página.
    ```
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/produtos" element={<ProdutosList />} />
        <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
        <Route path="/produtos/:id/editar" element={<ProdutoEditar />} />
    </Routes>
    ```

    2. O atributo *path* na <Router> define o caminho da URL, o atributo *element* o componente. Logo, se vc colocar na barra de endereço http://localhost:3000/produtos, o componente *ProdutosList* vai ser renderizado.
    
    O arquivo completo do App.js, nesse momento deve ficar como no exemplo a seguir. Repare que você deve criar os componentes do seu projeto. Este exemplo, reflete o código deste tutorial:
    **Atenção aos imports!**

    ```
    // imports ...
    //...
    function App() {
      return (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/produtos" element={<ProdutosList />} />
            <Route path="/produtos/:id" element={<ProdutoDetalhe />} />
            <Route path="/produtos/:id/editar" element={<ProdutoEditar />} />
          </Routes>
        </>
      );
    }

    export default App;

    ```

6. Veja a seguir o exemplo do componente Home. No projeto, foi criada uma pasta components dentro de src onde são colocados os componentes.
  ```
  import React from 'react';

    const Home = () => (
      <div className="container mt-5">
        <h1>HOME </h1>
        <p>Review App</p>
      </div>
    );

    export default Home;

  ```
  Repare o uso das classes bootstrap em className="container mt-5".

  7. Foi criado também o componente <Navbar>, ele está posto na App.js para que todos os componentes(página) possuam uma barra no topo. Fica a sugestão da criação de um componente <Footer> a ser inserido no App.js e tenha um css que fixe ele no rodapé na página.
  
  ```
    import React from 'react';
    import { Link } from 'react-router-dom';

    const Navbar = () => (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">React Review</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Sobre</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/produtos">Produtos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );

    export default Navbar;

  ```

8. Repare no componente Link, veja o import { Link } from 'react-router-dom'.

```
<Link className="nav-link" to="/produtos">Produtos</Link>
```
Note que o atributo *to="/produtos"* deve apontar para uma rota definida no <Routes> dentro do App.js.

## Criando componente de serviços
9. Para encapsular a lógica que vai recuperar os dados de um banco de dados, no futuro, o firebase, vamos criar um componente de serviços. Para tal, criaremos uma pasta services dentro de src. Na parta, será criado um componente de serviço chamado ProdutosService.

Por hora, ele vai guardar dados 'mockados' ou seja temporários. Veja trechos do código:
```
class ProdutosService {
  produtos = [
    { id: 1, nome: 'Chanel No.5', categoria: 'perfume', descricao: 'Clássico atemporal da Chanel.', valor: 350 },
    { id: 2, nome: 'Dior Sauvage', categoria: 'perfume', descricao: 'Amadeirado aromático, ideal para homens.', valor: 280 },
    //...
  ];

  comentarios = [
    {
      idProduto: 1,
      comentario: "Produto excelente! Superou minhas expectativas.",
      autor: "João Silva",
      data: "2023-11-22"
    },
    {
      idProduto: 2,
      comentario: "O produto chegou antes do prazo e está em perfeito estado.",
      autor: "Ana Maria",
      data: "2023-12-05"
    },
    //... mais itens
  ];

  ...
}

```

Repare que estes dados representam um exemplo de estrutura de dados, que para esse tutorial temos:
**produto** com os atributos: id, nome, categoria, descricao, valor e **comentária** com os atributos: idProduto, comentario, autor, data. Você em seu projeto deve ter seus próprios objetos de domínio.

Ainda nessa de serviço, além dos dados, são necessários métodos para expor os serviços. Esses métodos vão manupular os arrays criados inicialmente. Posteriormente, serão alterados para operações no banco de dados.

```
  getProdutoById(id) {
    return this.produtos.find(produto => produto.id === parseInt(id));
  }
  getProdutos() {
    return this.produtos;
  }

  getComentariosByProdutosId(idProduto) {
    return this.comentarios.filter(comentario => comentario.idProduto === parseInt(idProduto));
  }

  addComentario(produto,comentario) {
    this.comentarios.push({...comentario});
    return comentario;
  }

  const produtosService = new ProdutosService();

  export default produtosService;
```

```
Fica a sugestão de revisar os métodos básicos de array como **find, filter, push** .
```

## Usando o componente de serviços:
Vamos criar um componente de listagem, a qual vai exibir a lista de produtos. Esse componente é o ProdutosList.js.

10. Base do componente:
```
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import produtosService from '../services/ProdutosService';

const ProdutosList = () => {
   
   return (
    <div className="container mt-5">
      <h1>Produtos</h1>
      <ul className="list-group">
      </ul>
    </div>
   )
}

export default ProdutosList;

```
11. O passo anterior cria um componente vazio. Para armazenar a lista de produtos, vamos criar uma propriedade para o componente com **useState**. Lembrando que o *useState* é um elemento do react para gerenciar o estado do componente.

```
  const [produtos, setProdutos] = useState([]);
```

Acima foi criado uma lista vazia. Essa lista vai ser preenchida quando o componente for inicializado.
Os eventos de um componente são implementados no React com o useEffect. Veja o exemplo a seguir:

```
useEffect(() => {
    // A FAZER
  }, []);
```

Esse trecho de código é executado na inicialização do componente.

O código do componente neste momento deve estar assim:
```
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import produtosService from '../services/ProdutosService';

const ProdutosList = () => {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className="container mt-5">
      <h1>Produtos</h1>
      <ul className="list-group">

       
      </ul>
    </div>
  );
};

export default ProdutosList;
```

Ainda sobre o **useEffect**, ele tem como parâmetro uma função *callback*, e um segundo parâmetro, no exemplo [], que diz quais elementos ele deve acompanhar as atualizações. O array vazio([]) significa que ele não deve acompanhar nada, deve apenas ser executado na inicialização do componente.

11. Usando o *produtosService*
Vamos usar esse componente para recuperar a lista de produtos. A lista deve ser carregada na inicialização do componente. Logo, seu uso deve estar no useEffect. Veja no exemplo a seguir:
```
  useEffect(() => {
    const fetchProdutos = async () => {
      const produtos = await produtosService.getProdutos();
      setProdutos(produtos);
    };

    fetchProdutos();
  }, []);

```

Repare que ele cria um método chamado de fetchProdutos e depois o executa com a chamada fetchProdutos(). Essa é forma de trabalho do react dentro das operações de useEffect;

Dentro do método fetchProdutos, temos os termos de async e await, necessárias nas operação assíncrona como as de banco de dados que vão ser implementadas no futuro.

A operação a seguir, recupera os produtos e define a propriedade produtos com **setProduto**. Este último definido no useState.
```
const produtos = await produtosService.getProdutos();
setProdutos(produtos);
```
12. Para testar usem um console.log visualizando os produtos retornados na inicialização do componente.
```
  useEffect(() => {
    const fetchProdutos = async () => {
      const produtos = await produtosService.getProdutos();
      setProdutos(produtos);
      console.log(produtos)
    };

    fetchProdutos();
  }, []);
```

13. Estando tudo certo(SE DEUS QUISER!), vamos exibir os produtos, lá no return do componente.
```
return (
    <div className="container mt-5">
      <h1>Produtos</h1>
      <ul className="list-group">
        {
            produtos.map(product => (
              <li key={product.id} className="list-group-item d-flex justify-content-between">
                <Link to={`/produtos/${product.id}`}>{product.nome}</Link>
                <Link to={`/produtos/${product.id}/editar`}>editar</Link>
              </li>
            ))
        }
      </ul>
    </div>
  );
```

Nesse código, observe o método **map**  MUITO COMUM para operações em lista dentro dos templates HTML.
**Lembre de abrir chaves para ter código JS dentro do HTML**
Observe também a propriedade **key** obrigatória para elementos em lista.
Observe :(, o uso do <Link> do react-router-dom, para criar o link.