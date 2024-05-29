// Função para atualizar a barra de progresso
function updateProgressBar() {
    // Obtém a altura total da página, incluindo o conteúdo fora da tela visível
    const scrollHeight = document.documentElement.scrollHeight;
    // Obtém a altura da janela de visualização do navegador
    const clientHeight = document.documentElement.clientHeight;
    // Obtém a posição de rolagem vertical atual da página
    const scrollTop = document.documentElement.scrollTop;
    
    // Seleciona a barra de progresso e o elemento de progresso
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.getElementById('progress');
    
    // Calcula a altura total rolável da página
    const windowHeight = scrollHeight - clientHeight;
    // Calcula a porcentagem de progresso com base na posição de rolagem atual
    const progressPercentage = (scrollTop / windowHeight) * 100;
    
    // Verifica se o usuário deslizou a tela para baixo
    if (scrollTop > 0) {
        // Exibe a barra de progresso
        progressBar.style.display = 'block';
        // Ajusta a largura da barra de progresso de acordo com a porcentagem de rolagem
        progress.style.width = progressPercentage + '%';
        // Torna a barra de progresso visível
        progress.style.visibility = 'visible';
    } else {
        // Oculta a barra de progresso quando no topo da página
        progressBar.style.display = 'none';
    }
}

// Adiciona um evento de rolagem e redimensionamento para atualizar a barra de progresso
window.addEventListener('scroll', updateProgressBar); // Atualiza a barra de progresso ao rolar a página
window.addEventListener('resize', updateProgressBar); // Atualiza a barra de progresso ao redimensionar a janela

// Chama a função ao carregar a página para inicializar o estado da barra de progresso
updateProgressBar();
