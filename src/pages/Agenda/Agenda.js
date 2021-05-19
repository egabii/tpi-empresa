import Citas from './Citas'
import AgendaPage from './AgendaPage'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Agenda = () => {
    return (
        <div>
                 <Tabs defaultActiveKey="agenda" id="uncontrolled-tab-example">
                    <Tab eventKey="agenda" title="Agenda">
                        <AgendaPage />
                    </Tab>
                    <Tab eventKey="citas" title="Citas">
                        <Citas />
                    </Tab>
                </Tabs>
        </div>
    )
}

export default Agenda
