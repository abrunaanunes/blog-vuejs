const posts = [
    // Posts by Ana Silva
    {
        id: 1,
        title: 'Novidades no JavaScript ES2024',
        slug: 'novidades-no-javascript-es2024',
        author_id: 1,
        description: 'Descubra as novas funcionalidades do JavaScript ES2024.',
        content: 'A versão ES2024 do JavaScript traz diversas melhorias...',
        is_featured: true,
        published_at: '12/04/2024',
        cover_image: 'images/JavaScript2024.png',
        category: {
            id: 1,
            name: 'Linguagens de Programação',
            slug: 'linguagens-de-programacao'
        },
        author: {
            id: 1,
            name: 'Ana Silva',
            slug: 'ana-silva'
        }
    },
    {
        id: 2,
        title: 'Python 3.12: O que há de novo?',
        slug: 'python-3-12-o-que-ha-de-novo',
        author_id: 1,
        description: 'Explore as novas funcionalidades do Python 3.12.',
        content: 'A versão 3.12 do Python introduz várias melhorias...',
        is_featured: true,
        published_at: '02/06/2024',
        cover_image: 'images/Python3.png',
        category: {
            id: 1,
            name: 'Linguagens de Programação',
            slug: 'linguagens-de-programacao'
        },
        author: {
            id: 1,
            name: 'Ana Silva',
            slug: 'ana-silva'
        }
    },
    {
        id: 3,
        title: 'Desenvolvimento de APIs RESTful',
        slug: 'desenvolvimento-de-apis-restful',
        author_id: 1,
        description: 'Melhores práticas para desenvolver APIs RESTful eficientes.',
        content: 'Desenvolver APIs RESTful eficientes é essencial...',
        is_featured: false,
        published_at: '12/05/2024',
        cover_image: 'images/API.png',
        category: {
            id: 1,
            name: 'Linguagens de Programação',
            slug: 'linguagens-de-programacao'
        },
        author: {
            id: 1,
            name: 'Ana Silva',
            slug: 'ana-silva'
        }
    },
    {
        id: 4,
        title: 'Desenvolvimento Web com React',
        slug: 'desenvolvimento-web-com-react',
        author_id: 1,
        description: 'Criando interfaces de usuário modernas com React.',
        content: 'O React, biblioteca de JavaScript desenvolvida pelo Facebook...',
        is_featured: false,
        published_at: '20/05/2024',
        cover_image: 'images/React.png',
        category: {
            id: 1,
            name: 'Linguagens de Programação',
            slug: 'linguagens-de-programacao'
        },
        author: {
            id: 1,
            name: 'Ana Silva',
            slug: 'ana-silva'
        }
    },

    // Posts by Bruno Souza
    {
        id: 5,
        title: 'Inteligência Artificial na Medicina',
        slug: 'inteligencia-artificial-na-medicina',
        author_id: 2,
        description: 'Como a IA está revolucionando o setor de saúde.',
        content: 'A aplicação de IA na medicina tem ajudado a melhorar diagnósticos...',
        is_featured: true,
        published_at: '22/05/2024',
        cover_image: 'images/IAMedicina.png',
        category: {
            id: 2,
            name: 'Inteligência Artificial',
            slug: 'inteligencia-artificial'
        },
        author: {
            id: 2,
            name: 'Bruno Souza',
            slug: 'bruno-souza'
        }
    },
    {
        id: 6,
        title: 'Redes Neurais Explicadas',
        slug: 'redes-neurais-explicadas',
        author_id: 2,
        description: 'Uma introdução às redes neurais e seu funcionamento.',
        content: 'As redes neurais são uma parte crucial do aprendizado de máquina...',
        is_featured: false,
        published_at: '20/04/2024',
        cover_image: 'images/NeuralNetwork.png',
        category: {
            id: 2,
            name: 'Inteligência Artificial',
            slug: 'inteligencia-artificial'
        },
        author: {
            id: 2,
            name: 'Bruno Souza',
            slug: 'bruno-souza'
        }
    },
    {
        id: 7,
        title: 'Machine Learning com R',
        slug: 'machine-learning-com-r',
        author_id: 2,
        description: 'Utilizando R para projetos de Machine Learning.',
        content: 'O R é uma linguagem poderosa para análises estatísticas...',
        is_featured: false,
        published_at: '27/04/2024',
        cover_image: 'images/MachineLearning.png',
        category: {
            id: 2,
            name: 'Inteligência Artificial',
            slug: 'inteligencia-artificial'
        },
        author: {
            id: 2,
            name: 'Bruno Souza',
            slug: 'bruno-souza'
        }
    },
    {
        id: 8,
        title: 'Kubernetes: Orquestração de Contêineres',
        slug: 'kubernetes-orquestracao-de-conteineres',
        author_id: 2,
        description: 'Gerencie seus contêineres com Kubernetes.',
        content: 'Kubernetes é uma plataforma open-source projetada para automatizar...',
        is_featured: false,
        published_at: '10/05/2024',
        cover_image: 'images/Kubernetes.png',
        category: {
            id: 3,
            name: 'DevOps',
            slug: 'devops'
        },
        author: {
            id: 2,
            name: 'Bruno Souza',
            slug: 'bruno-souza'
        }
    },

    // Posts by Carlos Pereira
    {
        id: 9,
        title: 'Segurança em Aplicações Web',
        slug: 'seguranca-em-aplicacoes-web',
        author_id: 3,
        description: 'Dicas para manter suas aplicações web seguras.',
        content: 'A segurança em aplicações web é essencial para proteger dados sensíveis...',
        is_featured: false,
        published_at: '22/04/2024',
        cover_image: 'images/WebSecurity.png',
        category: {
            id: 4,
            name: 'Segurança',
            slug: 'seguranca'
        },
        author: {
            id: 3,
            name: 'Carlos Pereira',
            slug: 'carlos-pereira'
        }
    },
    {
        id: 10,
        title: 'Desenvolvimento Ágil: Boas Práticas',
        slug: 'desenvolvimento-agil-boas-praticas',
        author_id: 3,
        description: 'Saiba como implementar metodologias ágeis no seu projeto.',
        content: 'O desenvolvimento ágil tem se tornado uma prática comum...',
        is_featured: false,
        published_at: '25/04/2024',
        cover_image: 'images/Agile.png',
        category: {
            id: 3,
            name: 'DevOps',
            slug: 'devops'
        },
        author: {
            id: 3,
            name: 'Carlos Pereira',
            slug: 'carlos-pereira'
        }
    },
    {
        id: 11,
        title: 'A Evolução do DevOps',
        slug: 'a-evolucao-do-devops',
        author_id: 3,
        description: 'Como a cultura DevOps está transformando o desenvolvimento de software.',
        content: 'A cultura DevOps promove a colaboração entre equipes de desenvolvimento...',
        is_featured: false,
        published_at: '25/05/2024',
        cover_image: 'images/Devops.png',
        category: {
            id: 3,
            name: 'DevOps',
            slug: 'devops'
        },
        author: {
            id: 3,
            name: 'Carlos Pereira',
            slug: 'carlos-pereira'
        }
    },
    {
        id: 12,
        title: 'Testes Automatizados em Desenvolvimento de Software',
        slug: 'testes-automatizados-em-desenvolvimento-de-software',
        author_id: 3,
        description: 'A importância dos testes automatizados e como implementá-los.',
        content: 'Os testes automatizados são fundamentais para garantir a qualidade...',
        is_featured: false,
        published_at: '18/05/2024',
        cover_image: 'images/Testes.png',
        category: {
            id: 4,
            name: 'Segurança',
            slug: 'seguranca'
        },
        author: {
            id: 3,
            name: 'Carlos Pereira',
            slug: 'carlos-pereira'
        }
    },

    // Posts by Daniela Costa
    {
        id: 13,
        title: 'Big Data: Desafios e Oportunidades',
        slug: 'big-data-desafios-e-oportunidades',
        author_id: 4,
        description: 'Entenda os desafios e as oportunidades do Big Data.',
        content: 'O Big Data está transformando diversas indústrias...',
        is_featured: true,
        published_at: '01/05/2024',
        cover_image: 'images/BigData.png',
        category: {
            id: 5,
            name: 'Big Data',
            slug: 'big-data'
        },
        author: {
            id: 4,
            name: 'Daniela Costa',
            slug: 'daniela-costa'
        }
    },
    {
        id: 14,
        title: 'Análise de Dados com Python',
        slug: 'analise-de-dados-com-python',
        author_id: 4,
        description: 'Aprenda a analisar dados de forma eficiente com Python.',
        content: 'Python oferece diversas bibliotecas para análise de dados...',
        is_featured: false,
        published_at: '15/05/2024',
        cover_image: 'images/Python3.png',
        category: {
            id: 5,
            name: 'Big Data',
            slug: 'big-data'
        },
        author: {
            id: 4,
            name: 'Daniela Costa',
            slug: 'daniela-costa'
        }
    },
    {
        id: 15,
        title: 'Visualização de Dados com D3.js',
        slug: 'visualizacao-de-dados-com-d3js',
        author_id: 4,
        description: 'Crie visualizações de dados interativas com D3.js.',
        content: 'D3.js é uma poderosa biblioteca JavaScript para criar visualizações de dados...',
        is_featured: false,
        published_at: '05/06/2024',
        cover_image: 'images/D3js.png',
        category: {
            id: 5,
            name: 'Big Data',
            slug: 'big-data'
        },
        author: {
            id: 4,
            name: 'Daniela Costa',
            slug: 'daniela-costa'
        }
    },
    {
        id: 16,
        title: 'Hadoop: Processamento de Grandes Volumes de Dados',
        slug: 'hadoop-processamento-de-grandes-volumes-de-dados',
        author_id: 4,
        description: 'Utilize Hadoop para processar grandes volumes de dados.',
        content: 'Hadoop é uma framework open-source para o processamento de grandes volumes de dados...',
        is_featured: false,
        published_at: '08/05/2024',
        cover_image: 'images/Hadoop.png',
        category: {
            id: 5,
            name: 'Big Data',
            slug: 'big-data'
        },
        author: {
            id: 4,
            name: 'Daniela Costa',
            slug: 'daniela-costa'
        }
    }
];

// Novos autores
const authors = [
    {
        id: 1,
        name: 'Ana Silva',
        slug: 'ana-silva'
    },
    {
        id: 2,
        name: 'Bruno Souza',
        slug: 'bruno-souza'
    },
    {
        id: 3,
        name: 'Carlos Pereira',
        slug: 'carlos-pereira'
    },
    {
        id: 4,
        name: 'Daniela Costa',
        slug: 'daniela-costa'
    }
];

// Novas categorias
const categories = [
    {
        id: 1,
        name: 'Linguagens de Programação',
        slug: 'linguagens-de-programacao'
    },
    {
        id: 2,
        name: 'Inteligência Artificial',
        slug: 'inteligencia-artificial'
    },
    {
        id: 3,
        name: 'DevOps',
        slug: 'devops'
    },
    {
        id: 4,
        name: 'Segurança',
        slug: 'seguranca'
    },
    {
        id: 5,
        name: 'Big Data',
        slug: 'big-data'
    }
];

export { posts, categories, authors }
