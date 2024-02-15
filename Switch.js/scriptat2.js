function notifica(){
    let hoje = new Date().getDay()
    
    switch (hoje){
        case 0:
            alert('Domingo')
            break
        case 1:
            alert('Segunda-Feira')
            break
        case 2:
            alert('Terça-Feira')
            break
        case 3:
            alert('Quarta-Feira')
            break
        case 4:
            alert('Quinta-Feira')
            break
        case 5:
            alert('Sexta-Feira')
            break
        case 6:
            alert('Sabado')
            break
    }
}

function verificar(){
    let pesq = document.getElementById('week').value.toLowerCase();

    switch (pesq){
        case 'domingo':
            document.body.style.backgroundColor = 'violet'
            document.getElementById('info').innerHTML = 'Curiosidade sobre o domingo: <br>  O domingo é o dia da semana compreendido entre o sábado e a segunda-feira. No Brasil e em Portugal, assim como na Grécia, no Japão, na Grã-Bretanha, nos Estados Unidos e em países anglo-saxões em geral, por fundamentação bíblica e etimológica, o domingo é considerado o primeiro dia da semana.' + '<br><br><img src="Imagens/domingo.png" alt="Domingo" class="imagem-responsiva">';
            break;
            break
        case 'segunda':
            document.body.style.backgroundColor = 'red' 
            document.body.style.color = 'white' 
            document.getElementById('info').innerHTML = 'Curiosidade sobre a segunda-feira: <br> A segunda-feira é o 1° dia útil considerado o segundo dia da semana, seguindo o domingo e precedendo a terça-feira. Por ordenação de trabalho, lazer e pela norma ISO, a segunda-feira é considerada o primeiro dia da semana, sendo assim na maioria dos calendários em todo o mundo. Era o segundo dia de feira, em latim litúrgico secunda feria, que se seguia ao primeiro dia de feira no qual os cristãos se uniam para fazer sua reunião de fé e de mercado e que hoje é o domingo.' + '<br> <br>  <img src="Imagens/cyber-segunda-feira.png" alt="Segunda" class="imagem-responsiva">' 
            break
        case 'terça':  
            document.body.style.backgroundColor = 'orange' 
            document.getElementById('info').innerHTML = 'Curiosidade sobre a terça-feira: <br> A terça-feira é um dia útil considerado o terceiro dia da semana, seguindo a segunda-feira e precedendo a quarta-feira. Por ordenação de trabalho e lazer e pela normalização ISO, a terça-feira é considerada o segundo dia da semana, sendo assim na maioria dos calendários em todo o mundo. Na maior parte das outras línguas românicas, a sua origem são nomes de deuses pagãos romanos aos quais os dias eram dedicados, neste caso a terça-feira era dedicada a divindade romana Marte (este por sua vez inspirado no deus grego Ares).' + '<br><br> <img src="Imagens/terca-feira.png" alt="Terça-feira" class="imagem-responsiva">' 
            break 
        case 'quarta':
            document.body.style.backgroundColor = 'green' 
            document.body.style.color = 'white' 
            document.getElementById('info').innerHTML = 'Curiosidade sobre a quarta-feira: <br> A quarta-feira é um dia útil considerado o quarto dia da semana, seguindo a terça-feira e precedendo a quinta-feira. Por ordenação de trabalho e lazer e pela normalização ISO, a quarta-feira é considerada o terceiro dia da semana, sendo assim na maioria dos calendários em todo o mundo. A palavra é originária do latim Quarta Feria, que significa "quarta feira", e de mesma acepção existe em galego (corta feira / cuarta feira), mirandês (quarta) e tétum (loron-kuarta).' + '<br><img src="Imagens/quarta-feira.png" alt="Quarta-Feira" class="imagem-responsiva">'
            break
        case 'quinta':
            document.body.style.backgroundColor = 'gold' 
            document.getElementById('info').innerHTML = 'Curiosidade sobre a quinta-feira: <br> A quinta-feira é um dia útil da semana considerado o quinto dia da semana, seguindo a quarta-feira e precedendo a sexta-feira. Por ordenação de trabalho e lazer e pela normalização ISO, a quinta-feira é considerada o quarto dia da semana, sendo assim na maioria dos calendários em todo o mundo. Era o quinto dia de feira, em latim litúrgico quinta feria, que se seguia ao primeiro dia de feira no qual os cristãos se uniam para fazer sua reunião de fé e de mercado e que hoje é o domingo. (Morfologia) De quinto + feira.' + '<br><img src="Imagens/quinta-feira.png" alt="Quinta-Feira "class="imagem-responsiva">'
            break   
        case 'sexta':
            document.body.style.backgroundColor = 'blue' 
            document.body.style.color = 'white' 
            document.getElementById('info').innerHTML = 'Curiosidade sobre a sexta-feira: <br> Sexta-feira é um dia útil considerado o sexto dia da semana, seguindo a quinta-feira e precedendo o sábado. É um dia de oração e descanso para o Islamismo. Cristianismo. Para os adeptos do Cristianismo, o número 13 está associado ao azar por conta da última ceia de Jesus. Na reunião havia 13 pessoas, incluindo Jesus, e antecedeu a crucificação e morte de Cristo — que ocorreu em uma sexta-feira.A palavra é originária do latim (Sexta Feria), que significa "sexta feira" (sexto dia após o dia de descanso.)' + '<br><img src="Imagens/sexta-feira-preta.png" alt="Sexta-feira" class="imagem-responsiva">'
            break
        case 'sabado':
            document.body.style.backgroundColor = 'black' 
            document.body.style.color = 'white' 
            document.getElementById('info').innerHTML =  'Curiosidade sobre a sabado: <br> O sábado, por fundamentação bíblica e etimológica, é considerado o sétimo dia da semana, seguindo a sexta-feira e precedendo o domingo, é um dia de oração e de descanso para judeus e cristãos sabatistas.Quanto a sábado (que seria a «sétima»!) vem do latim «sabbatu-», proveniente, por seu turno, do hebraico «shabbath», (descanso semanal). O português é a única língua românica que usa a numeração ordinal para os dias da semana de segunda a sexta.' + '<br> <img src="Imagens/sabado.png" alt="sabado" class="imagem-responsiva">' 
            break
        default:
            document.getElementById('info').innerHTML = 'OPS.. Dia da semana não entrontrado procure por palavras chaves como: (Ex: sabado, segunda, quinta e etc..)'
    }
}