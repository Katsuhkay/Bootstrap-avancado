// Pode adicionar interações personalizadas aqui
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada!');
    
    // Exemplo: Adicionar um listener para os cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Card clicado:', this.querySelector('.card-title').textContent);
        });
    });
});