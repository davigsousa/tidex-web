import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAccidents } from '../../contexts/AccidentsContext';
import { getAccidentInfos } from '../../utils/data';
import NEIGHBOURHOODS from '../../data/neighbourhoods';
import ACCIDENTS from '../../data/accidents';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import InfoRow from '../../components/InfoRow';
import { Container, Content, Filters, List, ListWrapper } from './styles';

function Accidents() {
	const history = useHistory();
	const { getAccidents, editAccident, removeAccident } = useAccidents();
	const [neighbourhood, setNeighbourhood] = useState('');

	useEffect(() => {
		getAccidents();
	}, []);

	return (
		<Menu>
			<Container>
				<Header
					label="Listagem de acidentes"
					addLabel="Registrar acidente"
					onAdd={() => history.push('/acidentes/registrar')}
				/>

				<Content>
					<Filters>
						<Select
							label="Bairro"
							placeholder="Selecione"
							options={NEIGHBOURHOODS.map((item) => ({
								label: item,
								value: item,
							}))}
							value={neighbourhood}
							onChange={(selected) => setNeighbourhood(selected)}
						/>
						<Input label="Sequência" placeholder="Ex: 3310091" />

						<Button label="Limpar" mode="empty" />
						<Button label="Buscar" />
					</Filters>

					<ListWrapper>
						<List>
							{ACCIDENTS.map((accident) => (
								<InfoRow
									item={accident}
									onEdit={editAccident}
									onRemove={removeAccident}
									infos={getAccidentInfos(accident)}
								/>
							))}
						</List>
					</ListWrapper>
				</Content>
			</Container>
		</Menu>
	);
}

export default Accidents;
