document.addEventListener('DOMContentLoaded', () => {

    let cart = [];
    let currentModalItem = null;

    const allItems = {
        experiencias: [
            {
                id: 'e1',
                type: 'experiencia',
                titulo: 'Trilha e Pôr do Sol na Montanha',
                localizacao: 'Serra Gaúcha, RS',
                imagem: 'https://images.unsplash.com/photo-1551632811-561732d1e306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDZ8fGhpa2luZyUyMHN1bnNldHxlbnwwfHx8fDE3MjA2MjY5NDN8MA&ixlib=rb-4.0.3&q=80&w=400',
                descricao: 'Uma caminhada guiada pelas montanhas locais, culminando em uma vista espetacular do pôr do sol.',
                tag: 'Aventura',
                preco: 150.00,
                rating: 5
            },
            {
                id: 'e2',
                type: 'experiencia',
                titulo: 'Aula de Culinária Regional',
                localizacao: 'Paraty, RJ',
                imagem: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDF8fGNvb2tpbmclMjBjbGFzc3xlbnwwfHx8fDE3MjA2MjcwMDV8MA&ixlib=rb-4.0.3&q=80&w=400',
                descricao: 'Aprenda com chefs locais a preparar pratos autênticos da região, usando ingredientes frescos.',
                tag: 'Gastronomia',
                preco: 220.00,
                rating: 5
            },
            {
                id: 'e3',
                type: 'experiencia',
                titulo: 'Tour Histórico pelo Pelourinho',
                localizacao: 'Salvador, BA',
                imagem: 'https://images.unsplash.com/photo-1594665489543-F4c6d050604c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDR8fHBhbG91cmluaG8lMjBzYWx2YWRvcnxlbnwwfHx8fDE3MjA2MjcwNDB8MA&ixlib=rb-4.0.3&q=80&w=400',
                descricao: 'Descubra as histórias e segredos escondidos nas ruas e arquitetura do centro histórico.',
                tag: 'Cultural',
                preco: 80.00,
                rating: 4
            },
            {
                id: 'e4',
                type: 'experiencia',
                titulo: 'Passeio de Jangada em Maragogi',
                localizacao: 'Maragogi, AL',
                imagem: 'https://images.unsplash.com/photo-1610484830351-51886113ac38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDF8fG1hcmFnb2dpJTIwamFuZ2FkYXxlbnwwfHx8fDE3MjA2MjcwNzR8MA&ixlib=rb-4.0.3&q=80&w=400',
                descricao: 'Explore as piscinas naturais e os corais em um tradicional passeio de jangada.',
                tag: 'Aquática',
                preco: 180.00,
                rating: 5
            }
        ],
        produtos: [
            {
                id: 'p1',
                type: 'produto',
                titulo: 'Kit Viajante Essencial',
                imagem: 'https://images.unsplash.com/photo-1533103850125-d0588506106c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDEwfHx0cmF2ZWwlMjBraXQlMjBuZWNrJTIwcGlsbG93fGVufDB8fHx8MTcyMDYyNzEwN3ww&ixlib=rb-4.0.3&q=80&w=400',
                descricao: 'Almofada de pescoço ergonômica, máscara de dormir e protetores auriculares para sua jornada.',
                tag: 'Acessórios',
                preco: 120.00,
                rating: 5
            },
            {
                id: 'p2',
                type: 'produto',
                titulo: 'Artesanato em Cerâmica Local',
                imagem: 'https://images.unsplash.com/photo-1578784013914-6c3e6027f6a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDN8fHBvdHRlcnklMjBjcmFmdHxlbnwwfHx8fDE3MjA2MjcxNDF8MA&ixlib=rb-4.0.3&q=80&w=400',
                descricao: 'Peças únicas feitas à mão por artesãos da comunidade. Perfeito para decoração e presente.',
                tag: 'Artesanato',
                preco: 75.00,
                rating: 5
            },
            {
                id: 'p3',
                type: 'produto',
                titulo: 'Cesta de Iguarias Regionais',
                imagem: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDEyfHxnb3VybWV0JTIwYmFza2V0fGVufDB8fHx8MTcyMDYyNzE3M3ww&ixlib=rb-4.0.3&q=80&w=400',
                descricao: 'Uma seleção de queijos, vinhos e doces típicos da região para você saborear e compartilhar.',
                tag: 'Alimentos',
                preco: 190.00,
                rating: 4
            },
            {
                id: 'p4',
                type: 'produto',
                titulo: 'Camiseta de Algodão Orgânico',
                imagem: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDR8fHQtc2hpcnR8ZW58MHx8fHwxNzIwNjI3MjA3fDA&ixlib=rb-4.0.3&q=80&w=400',
                descricao: 'Conforto e estilo para suas viagens, com estampas inspiradas na cultura brasileira.',
                tag: 'Vestuário',
                preco: 99.90,
                rating: 4
            }
        ]
    };

    function findItem(id, type) {
        if (type === 'voo') {
             return {
                id: id,
                type: 'voo',
                titulo: `Voo ${id.replace('voo', '')}`,
                imagem: 'https://images.unsplash.com/photo-1569032364062-1f35b99a4b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjUyOXwwfDF8c2VhcmNofDExfHxhirHBsYW5lJTIwd2luZG93fGVufDB8fHx8MTcyMDY0MTQyN3ww&ixlib=rb-4.0.3&q=80&w=100',
                preco: parseFloat(id.replace('voo', ''))
            };
        }
        if (type && allItems[type + 's']) {
            return allItems[type + 's'].find(item => item.id === id);
        }
        return null;
    }


    const experienciasGrid = document.getElementById('experiencias-grid');
    const produtosGrid = document.getElementById('produtos-grid');

    function criarCard(item) {
        let estrelas = '';
        for (let i = 0; i < 5; i++) {
            estrelas += (i < item.rating) ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
        }

        const localizacaoHTML = item.localizacao ? `<span class="card-location"><i class="fa-solid fa-location-dot"></i> ${item.localizacao}</span>` : '';

        return `
            <div class="card hidden"> 
                <img src="${item.imagem}" alt="${item.titulo}" class="card-image" data-id="${item.id}" data-type="${item.type}">
                <div class="card-content">
                    <span class="card-tag">${item.tag}</span>
                    ${localizacaoHTML}
                    <h3 class="card-title" data-id="${item.id}" data-type="${item.type}">${item.titulo}</h3>
                    <p class="card-description">${item.descricao}</p>
                </div>
                <div class="card-footer">
                    <span class="price">R$ ${item.preco.toFixed(2)}</span>
                    <button class="btn-primary btn-small add-to-cart-btn" data-id="${item.id}" data-type="${item.type}">
                        <i class="fa-solid fa-cart-plus"></i> Adicionar
                    </button>
                </div>
            </div>
        `;
    }

    function carregarPaginaPrincipal() {
        if (experienciasGrid) {
             experienciasGrid.innerHTML = '';
             allItems.experiencias.forEach(item => {
                experienciasGrid.innerHTML += criarCard(item);
            });
        }
       
        if (produtosGrid) {
            produtosGrid.innerHTML = '';
            allItems.produtos.forEach(item => {
                produtosGrid.innerHTML += criarCard(item);
            });
        }
        
        adicionarObserverCards();
    }

    
    const planningForm = document.getElementById('planning-form');
    const mainContent = document.getElementById('main-content');
    const resultadosContainer = document.getElementById('resultados-busca-container');
    
    planningForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const origemInput = document.getElementById('origem').value;
        const destinoInput = document.getElementById('destino').value;

        if (!origemInput || !destinoInput) {
            alert('Por favor, preencha a origem e o destino.');
            return;
        }
        
        const origem = origemInput || "Sua Origem";
        const destino = destinoInput || "Seu Destino";
        
        mainContent.classList.add('hidden');
        resultadosContainer.innerHTML = ''; 

        const resultadosHTML = `
            <div class="resultados-header">
                <h2>Resultados para ${destino}</h2>
                <button id="btn-voltar" class="btn-secondary"><i class="fa-solid fa-arrow-left"></i> Voltar</button>
            </div>
            
            <h3 class="resultados-subheader"><i class="fa-solid fa-plane"></i> Voos de ${origem} para ${destino}</h3>
            
            <div class="flight-card">
                <div class="airline"><i class="fa-solid fa-plane-departure"></i> AZUL Linhas Aéreas</div>
                <div class="route">08:30 <span>(Saída)</span></div>
                <div class="route"><i class="fa-solid fa-arrow-right-long"></i></div>
                <div class="route">10:45 <span>(Chegada)</span></div>
                <div class="price-section">
                    <span class="price">R$ 850.00</span>
                    <button class="btn-primary btn-small add-to-cart-btn" data-id="voo850" data-type="voo">Adicionar</button>
                </div>
            </div>
            
            <div class="flight-card">
                <div class="airline"><i class="fa-solid fa-plane-departure"></i> GOL Linhas Aéreas</div>
                <div class="route">09:15 <span>(Saída)</span></div>
                <div class="route"><i class="fa-solid fa-arrow-right-long"></i></div>
                <div class="route">11:30 <span>(Chegada)</span></div>
                <div class="price-section">
                    <span class="price">R$ 890.00</span>
                    <button class="btn-primary btn-small add-to-cart-btn" data-id="voo890" data-type="voo">Adicionar</button>
                </div>
            </div>

            <div class="flight-card">
                <div class="airline"><i class="fa-solid fa-plane-departure"></i> LATAM Airlines</div>
                <div class="route">10:00 <span>(Saída)</span></div>
                <div class="route"><i class="fa-solid fa-arrow-right-long"></i></div>
                <div class="route">12:15 <span>(Chegada)</span></div>
                <div class="price-section">
                    <span class="price">R$ 910.00</span>
                    <button class="btn-primary btn-small add-to-cart-btn" data-id="voo910" data-type="voo">Adicionar</button>
                </div>
            </div>
            
            <h3 class="resultados-subheader"><i class="fa-solid fa-map-location-dot"></i> Passeios e Pontos Turísticos em ${destino}</h3>
            
            <div class="grid-container">
                ${criarCard(findItem('e3', 'experiencia'))}
                ${criarCard(findItem('e2', 'experiencia'))}
                ${criarCard(findItem('e4', 'experiencia'))}
            </div>
        `;
        
        resultadosContainer.innerHTML = resultadosHTML;
        resultadosContainer.classList.remove('hidden');
        adicionarObserverCards(); 

        document.getElementById('btn-voltar').addEventListener('click', () => {
            resultadosContainer.classList.add('hidden');
            mainContent.classList.remove('hidden');
            carregarPaginaPrincipal(); 
        });
    });

    function adicionarObserverCards() {
        const hiddenCards = document.querySelectorAll('.card.hidden');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('hidden');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        hiddenCards.forEach(card => {
            observer.observe(card);
        });
    }

    carregarPaginaPrincipal();

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const toggleIcon = themeToggle.querySelector('i');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        }
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        let theme = 'light-mode';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        } else {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        }
        localStorage.setItem('theme', theme);
    });

    const cartButton = document.getElementById('cart-button');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartCloseBtn = document.getElementById('cart-close-btn');

    function toggleCartSidebar() {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('open');
        body.classList.toggle('body-no-scroll');
    }

    cartButton.addEventListener('click', toggleCartSidebar);
    cartCloseBtn.addEventListener('click', toggleCartSidebar);
    cartOverlay.addEventListener('click', toggleCartSidebar);

    function addToCart(id, type) {
        const item = findItem(id, type);
        if (item) {
            cart.push(item);
            updateCartUI();
        }
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
    }

    function updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartBadge = document.getElementById('cart-badge');
        const cartTotalPrice = document.getElementById('cart-total-price');
        
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
            cartBadge.classList.add('hidden');
        } else {
            cart.forEach((item, index) => {
                total += item.preco;
                cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.imagem}" alt="${item.titulo}" class="cart-item-image">
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.titulo}</div>
                            <div class="cart-item-price">R$ ${item.preco.toFixed(2)}</div>
                        </div>
                        <button class="cart-item-remove" data-index="${index}">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                `;
            });
            cartBadge.textContent = cart.length;
            cartBadge.classList.remove('hidden');
        }
        
        cartTotalPrice.textContent = `R$ ${total.toFixed(2)}`;
    }

    const modal = document.getElementById('details-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    function openDetailsModal(id, type) {
        const item = findItem(id, type);
        if (!item) return;

        currentModalItem = item;

        document.getElementById('modal-image').src = item.imagem;
        document.getElementById('modal-title').textContent = item.titulo;
        document.getElementById('modal-description').textContent = item.descricao;
        document.getElementById('modal-price').textContent = `R$ ${item.preco.toFixed(2)}`;
        
        const locationEl = document.getElementById('modal-location');
        if (item.localizacao) {
            locationEl.textContent = item.localizacao;
            locationEl.style.display = 'block';
        } else {
            locationEl.style.display = 'none';
        }
        
        modal.classList.add('open');
        body.classList.add('body-no-scroll');
    }

    function closeDetailsModal() {
        modal.classList.remove('open');
        currentModalItem = null;
        if (!cartSidebar.classList.contains('open')) {
            body.classList.remove('body-no-scroll');
        }
    }

    modalCloseBtn.addEventListener('click', closeDetailsModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDetailsModal();
        }
    });

    document.getElementById('modal-add-to-cart-btn').addEventListener('click', () => {
        if (currentModalItem) {
            addToCart(currentModalItem.id, currentModalItem.type);
            closeDetailsModal();
            toggleCartSidebar();
        }
    });

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart-btn')) {
            const btn = e.target.closest('.add-to-cart-btn');
            addToCart(btn.dataset.id, btn.dataset.type);
        }
        
        if (e.target.closest('.card-image') || e.target.closest('.card-title')) {
            const target = e.target.closest('.card-image') || e.target.closest('.card-title');
            if (target.dataset.type !== 'voo') {
                openDetailsModal(target.dataset.id, target.dataset.type);
            }
        }

        if (e.target.closest('.cart-item-remove')) {
            removeFromCart(e.target.closest('.cart-item-remove').dataset.index);
        }
    });

});
