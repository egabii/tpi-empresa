import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  useHistory
} from "react-router-dom";
import { ProvideAuth, useAuth } from './contexts/AuthContext';
import HomePage from './pages/HomePage/HomePage';
import PropiedadesPage from './pages/Propiedades/PropiedadesPage';
import NuevaPropiedad from './pages/Propiedades/NuevaPropiedad';
import Agenda from './pages/Agenda/Agenda';
import LoginPage from './pages/Login/LoginPage';
import Layout from './layout/Layout';
import FormUbicacion from './components/FormularioUbicacion';
import PropiedadUnitaria from './pages/Propiedades/PropiedadUnitaria';
import AñadirCliente from './pages/Cliente/AñadirCliente';
import Documentacion from './pages/Cliente/Documentacion'
import FormPropietario from './components/FormularioPropietario';
import FormDescripcion from './components/FormularioDescripcion';
import AgregarMultimedia from './pages/Propiedades/NuevaPropiedad/AgregarMultimedia';
import ListarClientes from './pages/Cliente/ListarClientes';
import CajaDeVenta from './pages/CajaDeVenta/Caja';
import CierreDeCaja from './pages/CierreDeCaja/Cierre';
import NuevoReporte from './pages/NuevoReporte/Reporte';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
    {...rest}
    render={({ location }) =>
      auth.user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
    />
  );
};

function ProtectedPage() {
  let history = useHistory();

  useEffect(() => {
    history.push('/home');
  }, []);

  return (
    <Layout>
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/propiedades">
          <PropiedadesPage />
        </Route>
        <Route exact path="/agenda">
          <Agenda />
        </Route>
        <Route exact path="/nuevaPropiedad">
          <NuevaPropiedad />
        </Route>
        <Route exact path= "/PropiedadUnitaria"> 
          <PropiedadUnitaria/>
        </Route>
        <Route exact path= "/CajaVenta"> 
          <CajaDeVenta/>
        </Route>
        <Route exact path= "/CierreCajas"> 
          <CierreDeCaja/>
        </Route>
        <Route exact path= "/NuevoReporte"> 
          <NuevoReporte/>
        </Route>
        <Route exact path="/AñadirCliente">
          <AñadirCliente/>
        </Route>
        <Route exact path="/Documentacion">
          <Documentacion/>
        </Route>
        <Route exact path= "/NuevaPropiedad/Propietario"> 
          <FormPropietario/>
        </Route>
        <Route exact path= "/NuevaPropiedad/Ubicacion"> 
          <FormUbicacion/>
        </Route>
        <Route exact path= "/NuevaPropiedad/Descripcion"> 
          <FormDescripcion/>
        </Route>
        <Route exact path= "/NuevaPropiedad/AgregarMultimedia"> 
          <AgregarMultimedia/>
        </Route>
        <Route exact path="/ListaClientes">
          <ListarClientes/>
        </Route>
      </Switch>
    </Layout>
  );
};

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path={process.env.PUBLIC_URL + '/'}>
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}