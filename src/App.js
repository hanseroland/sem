import {BrowserRouter as Router,Route,Routes, useLocation,} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Accueil from './pages/fr/Accueil';
import Activites from './pages/fr/Activites';
import Aprops from './pages/fr/Aprops';
import Contact from './pages/fr/Contact';
import Investisseurs from './pages/fr/Investisseurs';
import Redaction from './pages/fr/Redaction';
import {AnimatePresence} from 'framer-motion'
import MissionsValeurs from './pages/fr/MissionsValeurs';
import MessagesLeaders from './pages/fr/MessagesLeaders';
import Equipe from './pages/fr/Equipe';
import ProjetMiamizez from './pages/fr/ProjetMiamizez';
import ProjetMebaga from './pages/fr/ProjetMebaga';
import ProjetMinkie from './pages/fr/ProjetMinkie';
import MabreDisseoussou from './pages/fr/MabreDisseoussou';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AnimatedRoutes = () => {
  const location = useLocation();

  return(
   
      <AnimatePresence  exitBeforeEnter>
            <Routes location={location} key={location.pathname}  >
                    <Route index  element={<Accueil/>} />
                    <Route  path="/a-propos" element={<Aprops/>}/>
                    <Route  path="/a-propos/missions-et-valeurs" element={<MissionsValeurs/>} />
                    <Route  path="/a-propos/messages-de-nos-leaders" element={<MessagesLeaders/>} />
                    <Route  path="/a-propos/equipe-dirigeante" element={<Equipe/>} />
                    <Route  path="/nos-activites" element={<Activites/>} />
                    <Route  path="/nos-activites/projet-miamizez" element={<ProjetMiamizez/>} />
                    <Route  path="/nos-activites/projet-mebaga" element={<ProjetMebaga/>} />
                    <Route  path="/nos-activites/projet-minkie" element={<ProjetMinkie/>} />
                    <Route  path="/nos-activites/projet-marbre-dousseoussou" element={<MabreDisseoussou/>} />
                    <Route  path="/investisseurs" element={<Investisseurs/>} />
                    <Route  path="/redaction" element={<Redaction/>} />
                    <Route  path="/contact" element={<Contact/>} />
              </Routes>
      </AnimatePresence>
   
    
  )
  
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
       <Navbar/>
          <AnimatedRoutes/>
       <Footer/> 
    </Router>
    
  );
}

export default App;