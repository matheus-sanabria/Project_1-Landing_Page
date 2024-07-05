// Função para alterar o idioma da página
function changeLanguage() {
    // Obtém o elemento do seletor de idioma
    var select = document.getElementById('languageSelect');
    // Obtém a opção selecionada
    var selectedOption = select.options[select.selectedIndex];
    // Obtém o valor do idioma selecionado (pt-br ou en-us)
    var lang = selectedOption.value;
    // Obtém a imagem correspondente ao idioma selecionado
    var image = selectedOption.getAttribute('data-image');

    // Atualiza a imagem de fundo do seletor de idioma
    select.style.backgroundImage = 'url(' + image + ')';

    // Atualiza os textos das opções no seletor de idioma
    if (lang === 'pt-br') {
        select.options[0].text = 'Português';
        select.options[1].text = 'Inglês';
    } else if (lang === 'en-us') {
        select.options[0].text = 'Portuguese';
        select.options[1].text = 'English';
    }

    // Carrega o arquivo de tradução correspondente ao idioma selecionado
    fetch(`./translations/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // Atualiza o conteúdo da página com as traduções do arquivo JSON
            document.getElementById('logo').innerHTML = data.logo;
            document.getElementById('title').innerHTML = data.title;
            document.getElementById('description').innerHTML = data.description;
            document.getElementById('intro').innerHTML = data.intro;
            document.getElementById('contact').innerHTML = data.contact;
            document.getElementById('form_name').innerHTML = data.form_name;
            document.getElementById('form_email').innerHTML = data.form_email;
            document.getElementById('form_phone').innerHTML = data.form_phone;
            document.getElementById('form_submit').value = data.form_submit;
            document.getElementById('who_we_are').innerHTML = data.who_we_are;
            document.getElementById('who_we_are_text').innerHTML = data.who_we_are_text;
            document.getElementById('services').innerHTML = data.services;
            document.getElementById('service_1').innerHTML = data.service_1;
            document.getElementById('service_1_desc').innerHTML = data.service_1_desc;
            document.getElementById('service_2').innerHTML = data.service_2;
            document.getElementById('service_2_desc').innerHTML = data.service_2_desc;
            document.getElementById('service_3').innerHTML = data.service_3;
            document.getElementById('service_3_desc').innerHTML = data.service_3_desc;
            document.getElementById('why_choose_us').innerHTML = data.why_choose_us;
            document.getElementById('diff_1').innerHTML = data.diff_1;
            document.getElementById('diff_1_desc').innerHTML = data.diff_1_desc;
            document.getElementById('diff_2').innerHTML = data.diff_2;
            document.getElementById('diff_2_desc').innerHTML = data.diff_2_desc;
            document.getElementById('diff_3').innerHTML = data.diff_3;
            document.getElementById('diff_3_desc').innerHTML = data.diff_3_desc;
            document.getElementById('footer').innerHTML = data.footer;

            // Atualiza os placeholders dos campos de formulário com base no idioma
            document.querySelectorAll('input[placeholder]').forEach(input => {
                // Cria a chave do atributo de placeholder para o idioma atual
                const placeholderKey = `placeholder-${lang}`;
                // Obtém o novo placeholder do atributo data correspondente
                const newPlaceholder = input.getAttribute(`data-${placeholderKey}`);
                // Se um novo placeholder foi encontrado, atualiza o placeholder do campo de entrada
                if (newPlaceholder) {
                    input.setAttribute('placeholder', newPlaceholder);
                }
            });
        })
        .catch(error => console.error('Error loading translation:', error));
}

// Adiciona um evento de mudança ao seletor de idioma para chamar a função changeLanguage
document.getElementById('languageSelect').addEventListener('change', changeLanguage);

// Chama a função para definir o idioma inicialmente ao carregar a página
changeLanguage();
