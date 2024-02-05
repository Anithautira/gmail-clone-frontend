import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Login/LoginPage'; 
import ForgotEmail from './Components/Forgotemail/ForgotEmail';
import Signup from './Components/Signup/Signup';
import LoginPassword from './Components/Login/LoginPassword';
import ForgotEmailNameDetails from './Components/Forgotemail/ForgotEmailNameDetails';
import SignupPhoneNumber from './Components/Signup/SignupPhoneNumber';
import SignupBasicInfo from './Components/Signup/SignupBasicInfo';
import SignupPrivacyTerms from './Components/Signup/SignupPrivacyTerms';
import ForgotEmailError from './Components/Forgotemail/ForgotEmailError';
import ChooseAccount from './Components/Forgotemail/ChooseAccount';
import StarredEmails from './Components/Home/StarredEmails';
import ImportantEmails from './Components/Home/ImportantEmails';
import SentEmails from './Components/Home/SentEmails';
import DraftEmails from './Components/Home/DraftEmails';
import TrashEmails from './Components/Home/TrashEmails';
import SpamEmails from './Components/Home/SpamEmails';
import NewHome from './Components/Home/NewHome';
import NewPassword from './Components/ForgotPassword/NewPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<LoginPage />} />

        {/* Home */}
        <Route path='/new-home' element={<NewHome />} />
        <Route path='/new-home/starred-emails' element={<StarredEmails />} />
        <Route path='/new-home/important-emails' element={<ImportantEmails />} />
        <Route path='/new-home/sent-emails' element={<SentEmails />} />
        <Route path='/new-home/draft-emails' element={<DraftEmails />} />
        <Route path='/new-home/trash-emails' element={<TrashEmails />} />
        <Route path='/new-home/spam-emails' element={<SpamEmails />} />

        {/* signup */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/phone-number' element={<SignupPhoneNumber />} />
        <Route path='/basic-information' element={<SignupBasicInfo />} />
        <Route path='/privacy-terms' element={<SignupPrivacyTerms />} />

        {/* login */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/login-password' element={<LoginPassword />} />

        {/* forgot email */}
        <Route path='/forgot-email' element={<ForgotEmail />} />
        <Route path='/forgot-email-details' element={<ForgotEmailNameDetails />} />
        <Route path='/forgot-email-error' element={<ForgotEmailError />} />
        <Route path='/choose-account' element={<ChooseAccount />} />

        {/* forgot password */}
        <Route path='/new-password' element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;