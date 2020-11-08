import {writable, get} from 'svelte/store'
import Mask from '@tadashi/mask/src'

export const user = writable({
  nome: 'Joana',
  cpf: '30030030030',
	sexo: 'Feminino',
	nascimento: '1978-09-25'
})

user.subscribe(o => {
	o.cpf = Mask.masking(o.cpf, '999.999.999-99')
})

export const getUser = () => get(user)
