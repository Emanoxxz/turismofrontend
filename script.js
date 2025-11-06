// Espera o HTML carregar antes de executar
document.addEventListener('DOMContentLoaded', () => {

    // --- NOSSO BANCO DE DADOS SIMULADO ---

    // Dados das Experiências (Com Imagens Estáticas 100% Relevantes)
    const experiencias = [
        {
            id: 1,
            titulo: 'Trilha e Pôr do Sol na Montanha',
            localizacao: 'Serra Gaúcha, RS',
            // Imagem estática de trilha/pôr do sol
            imagem: 'https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDZ8fGhpa2luZyUyMHN1bnNldHxlbnwwfHx8fDE3MjA2MjY5NDN8MA&ixlib=rb-4.0.3&q=80&w=400',
            descricao: 'Uma caminhada guiada pelas montanhas locais, culminando em uma vista espetacular do pôr do sol.',
            tag: 'Aventura',
            preco: 150.00,
            rating: 5
        },
        {
            id: 2,
            titulo: 'Aula de Culinária Regional',
            localizacao: 'Paraty, RJ',
            // Imagem estática de aula de culinária
            imagem: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDF8fGNvb2tpbmclMjBjbGFzc3xlbnwwfHx8fDE3MjA2MjcwMDV8MA&ixlib=rb-4.0.3&q=80&w=400',
            descricao: 'Aprenda com chefs locais a preparar pratos autênticos da região, usando ingredientes frescos.',
            tag: 'Gastronomia',
            preco: 220.00,
            rating: 5
        },
        {
            id: 3,
            titulo: 'Tour Histórico pelo Pelourinho',
            localizacao: 'Salvador, BA',
            // Imagem estática do Pelourinho
            imagem: 'https://images.unsplash.com/photo-1594665489543-F4c6d050604c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDR8fHBhbG91cmluaG8lMjBzYWx2YWRvcnxlbnwwfHx8fDE3MjA2MjcwNDB8MA&ixlib=rb-4.0.3&q=80&w=400',
            descricao: 'Descubra as histórias e segredos escondidos nas ruas e arquitetura do centro histórico.',
            tag: 'Cultural',
            preco: 80.00,
            rating: 4
        },
        {
            id: 4,
            titulo: 'PasseIO de Jangada em Maragogi',
            localizacao: 'Maragogi, AL',
            // Imagem estática de jangada em Maragogi
            imagem: 'https://images.unsplash.com/photo-1610484830351-51886113ac38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDF8fG1hcmFnb2dpJTIwamFuZ2FkYXxlbnwwfHx8fDE3MjA2MjcwNzR8MA&ixlib=rb-4.0.3&q=80&w=400',
            descricao: 'Explore as piscinas naturais e os corais em um tradicional passeio de jangada.',
            tag: 'Aquática',
            preco: 180.00,
            rating: 5
        }
    ];

    // Dados dos Produtos (Com Imagens Estáticas 100% Relevantes)
    const produtos = [
        {
            id: 1,
            titulo: 'Kit Viajante Essencial',
            // Imagem estática de kit de viagem
            imagem: 'https://images.unsplash.com/photo-1533103850125-d0588506106c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDEwfHx0cmF2ZWwlMjBraXQlMjBuZWNrJTIwcGlsbG93fGVufDB8fHx8MTcyMDYyNzEwN3ww&ixlib=rb-4.0.3&q=80&w=400',
            descricao: 'Almofada de pescoço ergonômica, máscara de dormir e protetores auriculares para sua jornada.',
            tag: 'Acessórios',
            preco: 120.00,
            rating: 5
        },
        {
            id: 2,
            titulo: 'Artesanato em Cerâmica Local',
            // Imagem estática de cerâmica
            imagem: 'https://images.unsplash.com/photo-1578784013914-6c3e6027f6a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDN8fHBvdHRlcnklMjBjcmFmdHxlbnwwfHx8fDE3MjA2MjcxNDF8MA&ixlib=rb-4.0.3&q=80&w=400',
            descricao: 'Peças únicas feitas à mão por artesãos da comunidade. Perfeito para decoração e presente.',
            tag: 'Artesanato',
            preco: 75.00,
            rating: 5
        },
        {
            id: 3,
            titulo: 'Cesta de Iguarias Regionais',
            // Imagem estática de cesta de comida
            imagem: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDEyfHxnb3VybWV0JTIwYmFza2V0fGVufDB8fHx8MTcyMDYyNzE3M3ww&ixlib=rb-4.0.3&q=80&w=400',
            descricao: 'Uma seleção de queijos, vinhos e doces típicos da região para você saborear e compartilhar.',
            tag: 'Alimentos',
            preco: 190.00,
            rating: 4
        },
        {
            id: 4,
            titulo: 'Camiseta de Algodão Orgânico',
            // Imagem estática de camiseta
            imagem: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDR8fHQtc2hpcnR8ZW58MHx8fHwxNzIwNjI3MjA3fDA&ixlib=rb-4.0.3&q=80&w=400',
            descricao: 'Conforto e estilo para suas viagens, com estampas inspiradas na cultura brasileira.',
            tag: 'Vestuário',
            preco: 99.90,
            rating: 4
        }
    ];


    // --- FUNÇÕES PARA RENDERIZAR OS CARDS ---

    const experienciasGrid = document.getElementById('experiencias-grid');
    const produtosGrid = document.getElementById('produtos-grid');

    function criarCard(item) {
        let estrelas = '';
        for (let i = 0; i < 5; i++) {
            estrelas += (i < item.rating) ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
        }

        const localizacaoHTML = item.localizacao ? `<span class="card-location"><i class="fa-solid fa-location-dot"></i> ${item.localizacao}</span>` : '';

        // **CORREÇÃO IMPORTANTE AQUI:** Era "classd" e foi corrigido para "class"
        return `
            <div class="card hidden"> 
                <img src="${item.imagem}" alt="${item.titulo}" class="card-image">
                <div class="card-content">
                    <span class="card-tag">${item.tag}</span>
                    ${localizacaoHTML}
                    <h3 class="card-title">${item.titulo}</h3>
                    <p class="card-description">${item.descricao}</p>
                </div>
                <div class="card-footer">
                    <span class="price">R$ ${item.preco.toFixed(2)}</span>
                    <span class="rating">${estrelas}</span>
                </div>
            </div>
        `;
    }

    experiencias.forEach(item => {
        experienciasGrid.innerHTML += criarCard(item);
    });

    produtos.forEach(item => {
        produtosGrid.innerHTML += criarCard(item);
    });

    
    // --- FUNCIONALIDADE SIMULADA DO FORMULÁRIO DE VIAGEM ---

    const planningForm = document.getElementById('planning-form');
    
    planningForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        alert('Simulação: Buscando as melhores rotas! (Esta é uma função de protótipo e não realiza buscas reais)');
    });


    // --- ANIMAÇÃO DE SCROLL REVEAL (O "CORAÇÃO") ---

    const hiddenCards = document.querySelectorAll('.card.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do card estiver visível
    });

    hiddenCards.forEach(card => {
        observer.observe(card);
    });

});