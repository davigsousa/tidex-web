import { useState } from 'react';
import { useApiHandler } from '../../contexts/ApiHandlerContext';
import { useUserContext } from '../../contexts/UserContext';
import Input from '../../components/Input';
import ErrorModal from '../../components/ErrorModal';
import {
	Container,
	Banner,
	TopRow,
	Message,
	City,
	FormWrapper,
	Title,
	Button,
	Form,
} from './styles';
import logo from '../../assets/brand/logo-light.svg';
import bgCity from '../../assets/images/bg-city.svg';
import frontCity from '../../assets/images/front-city.svg';
import loader from '../../assets/icons/loader.svg';

function Login() {
	const { loading } = useApiHandler();
	const { login } = useUserContext();

	const [cpf, setCpf] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();
		login(cpf, password);
	};

	return (
		<Container>
			<Banner>
				<TopRow>
					<img src={logo} alt="TideX" />
				</TopRow>

				<Message>
					<h1>
						<strong>Um acidente, uma vida.</strong> E se fosse você?
					</h1>
					<span>Trânsito seguro: um desafio possível.</span>
				</Message>

				<City>
					<img src={frontCity} alt="Cidade" />
					<img src={bgCity} alt="Fundo da cidade" />
				</City>
			</Banner>

			<FormWrapper>
				<Form onSubmit={handleLogin}>
					<Title>Login</Title>

					<Input
						label="CPF"
						value={cpf}
						onChange={(e) => setCpf(e.target.value)}
						placeholder="Digite seu CPF"
						type="text"
						isRequired
						isCPF
					/>

					<Input
						label="Senha"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Digite sua senha"
						password
						isRequired
					/>

					<Button type="submit">
						{loading ? <img src={loader} alt="Carregando" /> : 'Entrar'}
					</Button>
				</Form>
			</FormWrapper>

			<ErrorModal />
		</Container>
	);
}

export default Login;
