const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 5000;
const path = require('path');

const logger = require('./Middlewares/logger');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(logger);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

let livros = [
 {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    ano: 1899,
    categoria: 'Romance',
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5PrS1S8obM0dmqBAh_mkNC3PDYW40eDBbZKjBGiRlg&s=10',
    descricao: 'Romance clássico da literatura brasileira sobre Bentinho e Capitu.',
    status: 'disponivel'
  },
  {
    id: 2,
    titulo: 'O Cortiço',
    autor: 'Aluísio Azevedo',
    ano: 1890,
    categoria: 'Naturalismo',
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRW0pe8uFAKFH7Iyuhd3ZcgN9C1mQ7eMj3A8Aw35iXw&s=10',
    descricao: 'Uma análise crua da formação social e urbana do Rio de Janeiro no século XIX.',
    status: 'disponivel'
  },
  {
    id: 3,
    titulo: 'Grande Sertão: Veredas',
    autor: 'João Guimarães Rosa',
    ano: 1956,
    categoria: 'Romance',
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCqZRU8z6Jh-Qf9aLNl7gzSKLhKu9FQCDqFdqL29Z_g&s=10',
    descricao: 'O jagunço Riobaldo narra suas lutas, amor por Diadorim e reflexões filosóficas pelo sertão.',
    status: 'disponivel'
  },
  {
    id: 4,
    titulo: 'Vidas Secas',
    autor: 'Graciliano Ramos',
    ano: 1938,
    categoria: 'Regionalismo',
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNvhvM-0AXxmfGeBITTFiXsgpq5FDn1L9p1uHr2LChw&s=10',
    descricao: 'A trajetória dolorosa de Fabiano e sua família fugindo da seca no sertão nordestino.',
    status: 'disponivel'
  },
  {
    id: 5,
    titulo: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    ano: 1881,
    categoria: 'Realismo',
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQZJ4SIcvfCNAwLuI6WSXryiB-oz2CHuVjKYq4i-66LfsC4zdjzKVktI&s=10',
    descricao: 'Um defunto autor narra sua própria vida com tom irônico e crítico da sociedade.',
    status: 'disponivel'
  },
  
  {
    id: 7,
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    ano: 1943,
    categoria: 'Fábula',
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5S5fY7SkwqOp6uh51uoNIrYAa0H02LQyhRgGDd6q9A&s=10',
    descricao: 'Uma poética história sobre amizade, amor e a essência das coisas humanas.',
    status: 'disponivel'
  },
  {
    id: 8,
    titulo: 'Capitães da Areia',
    autor: 'Jorge Amado',
    ano: 1937,
    categoria: 'Romance Social',
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkl5oWwNRBbhvsOM4e0Me_2NSo8Qz2fP8aV2Wu7hFL7w&s=10',
    descricao: 'A vida de um grupo de crianças abandonadas que vivem nas ruas de Salvador.',
    status: 'disponivel'
  },
  {
    id: 9,
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    ano: 1937,
    categoria: 'Fantasia',
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23wcJTnzMY-BLxq3OE5v8_nF5nw0ACiKjSXkgXVp0nw&s=10',
    descricao: 'A jornada de Bilbo Bolseiro junto com anões para recuperar um tesouro guardado por um dragão.',
    status: 'disponivel'
  },
  {
    id: 10,
    titulo: 'A Hora da Estrela',
    autor: 'Clarice Lispector',
    ano: 1977,
    categoria: 'Ficção',
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTaO-00Sf46qDWm2MbirrksJoP0An4DqFK1GhXzYANw&s=10',
    descricao: 'A vida e o destino trágico da datilógrafa nordestina Macabéa no Rio de Janeiro.',
    status: 'disponivel'
  }
];

let usuarios = [
  {
    id: 101,
    nome: 'Clara Costa',
    email: 'clara@email.com'
  }
];

let emprestimos = [
  {
    livro: 'Dom Casmurro',
    usuario: 'Clara Costa'
  }
];

function renderizarIndex(res, abaAtiva, dadosExtras = {}) {
  res.render('index.html', {
    abaAtiva,
    livros,
    usuarios,
    emprestimos,
    ...dadosExtras
  });
}

app.get('/', (req, res) => {
  renderizarIndex(res, 'livros');
});

app.get('/livros', (req, res) => {
  renderizarIndex(res, 'livros');
});

app.get('/usuarios', (req, res) => {
  renderizarIndex(res, 'usuarios');
});

app.get('/emprestados', (req, res) => {
  renderizarIndex(res, 'emprestados');
});

app.get('/cadastro', (req, res) => {
  renderizarIndex(res, 'cadastro');
});

app.post('/busca', (req, res) => {
  const titulo = req.body.nome.trim().toLowerCase();

  const listaLivros = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(titulo)
  );

  renderizarIndex(res, 'livros', {
    livros: listaLivros
  });
});

app.post('/cadastrar-usuario', (req, res) => {
  usuarios.push({
    id: Date.now(),
    nome: req.body.nome,
    email: req.body.email
  });

  res.redirect('/usuarios');
});

app.post('/cadastrar-livro', (req, res) => {
  const {
    titulo,
    autor,
    ano,
    categoria,
    imagemUrl,
    descricao
  } = req.body;

  livros.push({
    id: Date.now(),
    titulo,
    autor,
    ano: Number(ano),
    categoria,
    imagemUrl: imagemUrl || '',
    descricao,
    status: 'disponivel'
  });

  res.redirect('/livros');
});

app.post('/emprestar', (req, res) => {
  const { livroId, usuarioId } = req.body;

  const livro = livros.find(l => l.id === Number(livroId));
  const usuario = usuarios.find(u => u.id === Number(usuarioId));

  if (!livro || !usuario) {
    return res.status(404).send('Livro ou usuário não encontrado.');
  }

  if (livro.status !== 'disponivel') {
    return res.status(400).send('Este livro já está emprestado.');
  }

  livro.status = 'emprestado';

  emprestimos.push({
    livro: livro.titulo,
    usuario: usuario.nome
  });

  res.redirect('/emprestados');
});



app.post('/devolver/:livro/:usuario', (req, res) =>{
  const { livro, usuario } = req.params;

  const tituloLivro = decodeURIComponent(livro).trim();
  const nomeUsuario = decodeURIComponent(usuario).trim();
  const livroEncontrado = livros.find(l => l.titulo === tituloLivro);
  if (livroEncontrado) {
    livroEncontrado.status = 'disponivel';
  }
  emprestimos = emprestimos.filter(
    e => !(e.livro === tituloLivro && e.usuario === nomeUsuario)
  );

  res.redirect('/emprestados');
});



app.put('/usuarios', (req, res) => {
  const { id, nome, email } = req.body;

  const usuario = usuarios.find(u => u.id === Number(id));

  if (!usuario) {
    return res.status(404).send('Usuário não encontrado.');
  }

  usuario.nome = nome;
  usuario.email = email;

  res.redirect('/usuarios');
});

app.delete('/usuarios', (req, res) => {
  const usuarioId = Number(req.body.id);

  usuarios = usuarios.filter(u => u.id !== usuarioId);

  res.redirect('/usuarios');
});

app.delete('/livros', (req, res) => {
  const livroId = Number(req.body.id);

  livros = livros.filter(l => l.id !== livroId);

  res.redirect('/livros');
});

app.listen(port, () => {
  console.log(`Servidor rodando: http://localhost:${port}`);
});