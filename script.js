// Fazer a requisição para a API de usuários
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Converter a resposta para JSON
  .then(data => {
    // Selecionar o elemento da lista de usuários no DOM
    const usersList = document.getElementById('users');

    // Para cada usuário retornado pela API, criar um item de lista
    data.forEach(user => {
      const userItem = document.createElement('li');
      
      // Estrutura de informações do usuário
      userItem.innerHTML = `
        <div class="user-info">
          <span><strong>${user.name}</strong></span>
          <span class="user-email">${user.email}</span>
        </div>
        <div><small>${user.address.street}, ${user.address.city}</small></div>
      `;

      // Adicionar o item à lista de usuários
      usersList.appendChild(userItem);
    });
  })
  .catch(error => console.error('Erro ao obter dados:', error));