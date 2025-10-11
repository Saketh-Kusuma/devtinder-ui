import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./pages/Body";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import { store } from "./utils/appStore";
import Feed from "./pages/Feed";
import Connections from "./pages/Connections";
import Requests from "./pages/Requests";
import SignUp from "./pages/SignUp";
import { TermsConditions } from "./pages/TermsAndConditions";
import { CancellationRefunds } from "./pages/CancellationAndRefund";
import { ContactUs } from "./pages/ContactUs";
import { Privacy } from "./pages/Privacy";
import { Shipping } from "./pages/Shipping";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/termsAndConditions" element={<TermsConditions/>} />
              <Route path="/cancellationAndRefundPolicy" element={<CancellationRefunds/>} />
              <Route path= "/contactUs" element={<ContactUs />} />
              <Route path="/privacyPolicy" element={<Privacy />} />
              <Route path="/shipping" element={<Shipping/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
