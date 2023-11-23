const linkPaulo = 'https://api.sheetmonkey.io/form/a6VC5NmdHUCacfgKSoBb3C';
const linkTarlison = 'https://api.sheetmonkey.io/form/8RsMerKsjUk4eJ3XHeUHaX';

const handleSubmit = async (event) => {
  event.preventDefault();

  const nf = document.querySelector('#nf').value;
  const data = document.querySelector('#data').value;
  const desc = document.querySelector('#descricao').value;
  const valor = document.querySelector('#valor').value;
  const form = document.querySelector('#fornecedor').value;
  const pag = document.querySelector('#pag').value;
  const obra = document.querySelector('#obra').value;
  const obs = document.querySelector('#obs').value;

  console.log(nf, data, desc, valor, form, pag, obra, obs)

  await fetch(linkTarlison, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nf, data, desc, valor, form, pag, obra, obs }),
  });

  nf.innerHTML = ""
  data.innerHTML = ""
  desc.innerHTML = ""
  valor.innerHTML = ""
  form.innerHTML = ""
  pag.innerHTML = ""
  obra.innerHTML = ""
  obs.innerHTML = ""

  console.log('enviado...')

}

document.querySelector('form').addEventListener('submit', handleSubmit);
