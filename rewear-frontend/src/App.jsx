import { AuthProvider } from './contexts/AuthContext.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AboutUs from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';
import Help from './components/Help.jsx';
import TermsOfService from './components/TermsOfService.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import BrowseItems from './components/BrowseItems.jsx';
import ListItem from './components/ListItem.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><AboutUs /></PrivateRoute>} />
          <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
          <Route path="/help" element={<PrivateRoute><Help /></PrivateRoute>} />
          <Route path="/terms" element={<PrivateRoute><TermsOfService /></PrivateRoute>} />
          <Route path="/privacy" element={<PrivateRoute><PrivacyPolicy /></PrivateRoute>} />
          <Route path="/browse" element={<PrivateRoute><BrowseItems /></PrivateRoute>} />
          <Route path="/list-item" element={<PrivateRoute><ListItem /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
