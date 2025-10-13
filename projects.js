```javascript
// projects.js - Script para gerenciar os projetos do portfólio

// Array de projetos - adicione seus projetos aqui
const projects = [
    {
        id: 1,
        title: "ISO Personalizada Arch Linux",
        description: "Criação de ISO personalizada do Arch Linux para computadores antigos, com drivers otimizados e pacotes essenciais pré-instalados.",
        image: "http://static.photos/technology/640x360/1",
        tags: ["Linux", "Arch", "Otimização"],
        link: "#"
    },
    {
        id: 2,
        title: "Servidor Caseiro TrueNAS",
        description: "Configuração de servidor caseiro com TrueNAS para armazenamento em rede, compartilhamento de arquivos e serviços como Plex e Nextcloud.",
        image: "http://static.photos/technology/640x360/2",
        tags: ["TrueNAS", "Redes", "Servidor"],
        link: "#"
    },
    {
        id: 3,
        title: "Assistente Pessoal com IA",
        description: "Desenvolvimento de assistente pessoal usando APIs de IA para automação de tarefas e respostas inteligentes.",
        image: "http://static.photos/technology/640x360/3",
        tags: ["Python", "IA", "Automação"],
        link: "#"
    }
];

// Função para renderizar projetos
function renderProjects() {
    const container = document.getElementById('portfolio-container');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'col-md-4 mb-4';
        projectElement.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="mb-3">
                        ${project.tags.map(tag => `<span class="badge bg-primary me-1">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="btn btn-outline-primary">Ver Detalhes</a>
                </div>
            </div>
        `;
        container.appendChild(projectElement);
    });
}

// Chama a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', renderProjects);
```