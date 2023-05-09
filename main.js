const form = document.getElementById('form-atividade');
const nom = [];
const tel = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();


});    

function adicionaLinha() {    
    const inputNome = document.getElementById('nome');
    const inputTel = document.getElementById('telefone');
   // var SPMaskBehavior inputTel.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
       
    nom.push(inputNome.value);
    tel.push(inputTel.value);
   // let linhas = '';

    let linha = '<tr>';
    linha += `<th>${inputNome.value}</th>`;
    linha += `<th>${(inputTel.value)}</th>`;
    //linha += `<td>${(inputTel.value).length === 11 ? '(00)00000-0000' : '(00)00000-0000'}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNome.value = '';
    inputTel.value = '';
    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}



/*<script type="text/javascript">
		$(document).ready(function(){

		var SPMaskBehavior = function (val) {
			return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
		},
		spOptions = {
			onKeyPress: function(val, e, field, options) {
			field.mask(SPMaskBehavior.apply({}, arguments), options);
			}
		};
		$("#telefone").mask(SPMaskBehavior, spOptions);	

		})
	</script>*/