var $range = document.querySelector('input'),
    $value = document.querySelector('span');

$range.addEventListener('input', function() {
  $value.textContent = this.value;
});


function resposta(){
    var numeroatomico = parseInt(document.getElementById('numeroatomico').value);
    var elementData= 
    console.log(elementData)
    var div = document.getElementById('resposta')
  

    div.innerHTML + `Simbolo = ${elementsinfo[(numeroatomico-1)]["simbolo"]}` + '<br>';
    div.innerHTML += `Elemento: ${elementsinfo[(numeroatomico-1)]["nome"]}` + '<br>';
    div.innerHTML += `Densidade : ${elementsinfo[(numeroatomico-1)]["densidade"]}` + '<br>';
    div.innerHTML += `Massa Atomica  ${elementsinfo[(numeroatomico-1)]["matomica"]}` + '<br>';
    div.innerHTML += `Distribuicao Eletronica  ${elementsinfo[(numeroatomico-1)]["eletronicconfig"]}` + '<br>';
    div.innerHTML += `Ponto de fusao ${elementsinfo[(numeroatomico-1)]["fusao"]}` + '<br>';
    div.innerHTML += `Ponto de ebulicao ${elementsinfo[(numeroatomico-1)]["ebulicao"]}` + '<br>';
    div.innerHTML += `Coeficiente de Energia Molar :${elementsinfo[(numeroatomico-1)]["energiamolarcoef"]}` + '<br>';
    div.innerHTML += `Coeficiente de Eletronegatividade  :${elementsinfo[(numeroatomico-1)]["eletronegatividade"]}` + '<br>';
    div.innerHTML += `Aparencia  :${elementsinfo[(numeroatomico-1)]["aparencia"]}` + '<br>';
    div.innerHTML += `Coloracao  :${elementsinfo[(numeroatomico-1)]["color"]}` + '<br>';
    div.innerHTML += `Estado em temp Ambiente  :${elementsinfo[(numeroatomico-1)]["phase"]}` + '<br>';
    div.innerHTML += `Descoberto Por  :${elementsinfo[(numeroatomico-1)]["descobertopor"]}` + '<br>';
    div.innerHTML += `Familia  :${elementsinfo[(numeroatomico-1)]["familia"]}` + '<br>';
    div.innerHTML += `Posicao Eixo X   :${elementsinfo[(numeroatomico-1)]["posX"]}` + '<br>';
    div.innerHTML += `Posicao Eixo Y   :${elementsinfo[(numeroatomico-1)]["PosY"]}` + '<br>' + '<hr>';
    

}
