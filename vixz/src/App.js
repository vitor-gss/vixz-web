import './App.css';
import { Initial } from './components/initial/initial';
import { About } from './components/about/about';
import { Features } from './components/features/features';
import { OurTeam } from './components/ourteam/ourTeam';
import { Contacts } from './components/contacts/contacts';
import { DowEnd } from './components/dowend/dowEnd';
import { Finish } from './components/finish/finish';

function App() {
  return (
    <div className="App">
      <Initial /> {/* Do*/}
      <About /> {/* Fazendo*/}
      <Features /> {/* Fazendo*/}
      <OurTeam /> {/* Do*/}
      <Contacts /> {/* Do*/}
      <DowEnd /> {/* Do*/}
      <Finish /> {/* Do*/}
    </div>
  );
}

// // express
// const express = require("express"); // importa o express
// const app = express(); // cria uma instância do express
// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
// })

// // rota do método GET
// app.get('/', (req, res) => {
//   res.send('requisição GET à homepage')
// })

// // rota do método POST
// app.post('/', (req, res) => {
//   res.send('requisição POST à homepage')
// })

// app.use(express.json());

// const empresas = [
//   { id: 1, nome: "Caixa", valor: 2000 },
//   { id: 2, nome: "Google", valor: 4500 },
//   { id: 3, nome: "Sony", valor: 3600 },
//   { id: 4, nome: "Samsung", valor: 3500 },
// ];

// const buscarEmpresaPorId = (id) => {
//   return empresas.filter(empresa => empresa.id == id);
// };

// const buscarIndexEmpresa = (id) => {
//   return empresas.findIndex(empresa => empresa.id == id)
// }

// // Rota padrão/raiz
// app.get("/", (req, res) => {
//   res.send("Oie");
// });

// app.get("/empresas", (req, res) => {
//   res.status(200).send(empresas);
// });


// app.post("/empresas", (req, res) => {
//   let data = req.body;
//   empresas.push(data);
//   res.status(201).send(`Empresa ${data.nome} cadastrado com sucesso`);
// });

// app.get("/empresas/:id", (req, res) => {
//   let id = req.params.id;
//   res.status(200).send(buscarEmpresaPorId(id));
// });

// app.delete("/empresas/:id", (req, res) => {
//   let id = req.params.id
//   res.status(200).send(`Empresa foi excluído com sucesso.`)
//   empresas.splice(buscarIndexEmpresa(id), 1)
// })

// app.put("/empresas/:id", (req, res) => {
//   let index = buscarIndexEmpresa(req.params.id);

//   if (index === -1) {  // Verifica se a empresa existe
//     return res.status(500).send(`Id inválido`);
//   }

//   // Atualiza os dados da empresa
//   empresas[index].nome = req.body.nome;
//   empresas[index].valor = req.body.valor;

//   // Envia a resposta de sucesso
//   res.status(200).send(`Empresa foi modificado com sucesso.`);
// })

export default App;
