import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddDoctor from './components/users/AddDoctor';
import Addpatient from './components/users/AddPatient';
import DashboardPage from './components/Dashboard';
import Navbar from './components/Navbar';
import Addlab from './components/centers/AddLab';
import Addcenter from './components/centers/AddCenter';
import Addappointment from './components/appointments/AddAppointment';
import Addlabagent from './components/users/AddLabagent';
import Managecenters from './components/centers/ManageCenters';
import Managelabs from './components/centers/Managelabs';
import Managestate from './components/locations/ManageState';
import Managecity from './components/locations/ManageCity';
import Managelocation from './components/locations/Managelocation';
import Managepackage from './components/packages/ManagePackage';
import Addpackage from './components/packages/Addpackage';
import Patientappointment from './components/appointments/PatientAppointment';
import Labappointment from './components/appointments/LabAppointment';
import Loginpage from './components/loginpages/Loginpage';
import Register from './components/loginpages/Register';
import Adminpage from './components/loginpages/Adminpage';
import Frontoffice from './components/loginpages/Frontoffice';
import Doctor from './components/loginpages/Doctor';
import Patient from './components/loginpages/Patient';
import Lab from './components/loginpages/Lab';
import Superadminpage from './components/loginpages/Superadminpage';
import Doctors from './components/accounts/Doctors';
import Patients from './components/accounts/Patients';
import Labagents from './components/accounts/Labagents';
import Sitemanagers from './components/accounts/Sitemanagers';
import Invoice from './components/payments/Invoice';
import Viewpayments from './components/payments/Viewpayments';
import Home from './components/Home';
import Plans from './components/plans';

function App() {
  return (
    <div className="App">
      <BrowserRouter  basename="prevmedsol">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='plans' element={<Plans/>}></Route>
          <Route path='loginpage' element={<Loginpage/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='adminpage' element={<Adminpage/>}></Route>
          <Route path='frontoffice' element={<Frontoffice/>}></Route>
          <Route path='doctor' element={<Doctor/>}></Route>
          <Route path='patient' element={<Patient/>}></Route>
          <Route path='lab' element={<Lab/>}></Route>
          <Route path='superadminpage' element={<Superadminpage />}></Route>
          <Route path='dashboardPage' element={<DashboardPage/>}></Route>
          <Route path='adddoctor' element={<AddDoctor />}></Route>
          <Route path='addpatient' element={<Addpatient />}></Route>
          <Route path='addlabagent' element={<Addlabagent />}></Route>
          <Route path='addlab' element={<Addlab/>}></Route>
          <Route path='addcenter' element={<Addcenter/>}></Route>
          <Route path='managecenters' element={<Managecenters/>}></Route>
          <Route path='managelabs' element={<Managelabs/>}></Route>
          <Route path='addappointment' element={<Addappointment/>}></Route>
          <Route path='patientappointment' element={<Patientappointment/>}></Route>
          <Route path='labappointment' element={<Labappointment/>}></Route>
          <Route path='managestate' element={<Managestate/>}></Route>
          <Route path='managecity' element={<Managecity/>}></Route>
          <Route path='managelocation' element={<Managelocation/>}></Route>
          <Route path='managepackage' element={<Managepackage/>}></Route>
          <Route path='addpackage' element={<Addpackage/>}></Route>
          <Route path='doctors' element={<Doctors/>}></Route>
          <Route path='patients' element={<Patients/>}></Route>
          <Route path='labagents' element={<Labagents/>}></Route>
          <Route path='sitemanagers' element={<Sitemanagers/>}></Route>
          <Route path='invoice' element={<Invoice/>}></Route>
          <Route path='viewpayments' element={<Viewpayments/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
