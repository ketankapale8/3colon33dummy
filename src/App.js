// import logo from './logo.svg';
import './App.scss';
import React , {lazy , Suspense, useEffect} from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Careers from './components/Careers/Carrers';
import Leadership from './components/Leadership/Leadership';
import Letstalk from './components/LetsTalk/Letstalk';
import Openings from './components/Openings/Openings';
import Services from './components/Services/Services';
import ApplicationEngg from './components/ApplicationEngg/ApplicationEngg';
import ProductEngg from './components/SubtoSubServices/ProductEngg/ProductEngg';
import CloudEngg from './components/CloudEngg/CloudEngg';
import DigitalInnovation from './components/DigitalInnovation/DigitalInnovation';
import DataAnalytics from './components/Data&Analytics/Data&Analytics';
import InfrastructureServices from './components/InfrastructureServices/Infra';
import Enterprise from './components/EnterpriseApplications/Enterprise';
import DigitalDefense from './components/DigitalDefence/DigitalDefense';
import LegacyModernization from './components/SubtoSubServices/LegacyModernization/Legacy';
import LowCode from './components/SubtoSubServices/LowCode/Lodecode';
import QualityAssurance from './components/SubtoSubServices/QualityAssurance/QualityAssurance';
import MobileAppDevelopment from './components/SubtoSubServices/MobileApp/AppDevelopment';
import CloudMigration from './components/SubtoSubServices/CloudMigration/CloudMigration';
import DevOps from './components/SubtoSubServices/Devops/Devops';
import CloudOptimization from './components/SubtoSubServices/CloudOptimization/Cloudoptimization';
import HybridCloud from './components/SubtoSubServices/HybridCloud/HybridCloud';
import IOT from './components/SubtoSubServices/IOT/iot';
import ConversationalAI from './components/SubtoSubServices/ConversationalAI/Conversationalai';
import AR_VR from './components/SubtoSubServices/AR/AR';
import DigitalTwin from './components/SubtoSubServices/DigitalTwin/DigitalTwin';
import IPA from './components/SubtoSubServices/IPA/IPA';
import DataModelling from './components/SubtoSubServices/DataModelling/DataModelling';
import MachineLearning from './components/SubtoSubServices/MachineLearning/MachineLearning';
import DataVisualization from './components/SubtoSubServices/DataVisualization/DataVisualization';
import WorkplaceServices from './components/SubtoSubServices/Workplace/Workplace';
import DCNetwork from './components/SubtoSubServices/DCNetwork/DCNetwork';
import NextGenSupport from './components/SubtoSubServices/NextGenSupport/NextGenSupport';
import IAM from './components/SubtoSubServices/IAM/IAM';
import GovtRisk from './components/SubtoSubServices/GovtRisk/GovtRisk';
import ApplicationSecurity from './components/SubtoSubServices/ApplicationSecurity/ApplicationSecurity';
import DigitalIdentity from './components/SubtoSubServices/DigitalIdentity/DigitalIdentity';
import ServiceNow from './components/SubtoSubServices/ServiceNow/ServiceNow';
import SalesForce from './components/SubtoSubServices/SalesForce/SalesForce';
import Oracle from './components/SubtoSubServices/Oracle/Oracle';
import SAP from './components/SubtoSubServices/SAP/Sap';
import Industries from './components/Industries/Industries';
import SideBar from './components/common/Sidebar/Sidebar';
import Navbar from './components/common/Navbar/Navbar';
import ModalSidebar from './components/ModalSidebar/ModalSidebar';

const LazyNavbar = React.lazy(()=> import('./components/common/Navbar/Navbar'));
const LazySidebar = React.lazy(()=> import('./components/common/Sidebar/Sidebar'));
const LazyHome = React.lazy(() => import('./components/Home/Home'))
const ModalSidebar1 = React.lazy(() => import('./components/ModalSidebar/ModalSidebar'))




function App() {
   let [w , setW] = React.useState(window.innerWidth)
   let width = window.innerWidth;
  function updateSize(){
    setW(width)

  }


  const RenderSideBar = () =>{
    return (
      <>
        <div style={{position: 'absolute' , zIndex: 999, top: '0px'  }}>
        <LazySidebar/>
        </div>
      </>
    )
  }



  useEffect(()=>{
    window.addEventListener('resize', updateSize);

  },[w])
   
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<h4>Loading...</h4>}>
          { w > 870 ? <LazyNavbar/> : <RenderSideBar/>}

        </Suspense>
        {/* <Navbar/> */}
        <Routes>
          
          <Route index element={
            <Suspense fallback={ <h4>loading Home..</h4>}>
                <LazyHome/>
            </Suspense>
          } path="/"/>
          <Route element={<Aboutus/>} path="/aboutus" />
          <Route  element={<Careers/>} path="/careers"/>
          <Route  element={<Leadership/>} path="/leadership"/>
          <Route element={<Letstalk/>} path="/letstalk"/>
          <Route element={<Openings/>} path="/currentopenings"/>
          <Route element={<Services/>} path="/services"/>
          <Route element={<ApplicationEngg/>} path="/application-engg"/>
          <Route element={<ProductEngg/>} path="/product-engineering"/>
          <Route element={<CloudEngg/>} path="/cloud-engg"/>
          <Route element={<DigitalInnovation/>} path="/digital-innovation"/>
          <Route element={<DataAnalytics/>} path="/data-analytics"/>
          <Route element={<InfrastructureServices/>} path="/infra"/>
          <Route element={<Enterprise/>} path="/enterprise-applications"/>
          <Route element={<DigitalDefense/>} path="/digital-security"/>
          <Route element={<LegacyModernization/>} path="/legacy-modernization"/>
          <Route element={<LowCode/>} path="/low-code-no-code-architecture"/>
          <Route element={<QualityAssurance/>} path="/quality-assurance"/>
          <Route element={<MobileAppDevelopment/>} path="/mobile-app-development"/>
          <Route element={<CloudMigration/>} path="/cloud-migration"/>
          <Route element={<DevOps/>} path="/devops"/>
          <Route element={<CloudOptimization/>} path="/cloud-optimization"/>
          <Route element={<HybridCloud/>} path="/hybrid-cloud"/>
          <Route element={<IOT/>} path="/iot"/>
          <Route element={<ConversationalAI/>} path="/conversational-ai"/>
          <Route element={<AR_VR/>} path="/ar-vr"/>
          <Route element={<DigitalTwin/>} path="/digital-twin"/>
          <Route element={<IPA/>} path="/ipa"/>
          <Route element={<DataModelling/>} path="/data-modelling"/>
          <Route element={<DataVisualization/>} path="/data-visualization"/>
          <Route element={<MachineLearning/>} path="/machine-learning"/>
          <Route element={<DataAnalytics/>} path="/dataanalytics"/>
          <Route element={<WorkplaceServices/>} path="/workplace-services"/>
          <Route element={<DCNetwork/>} path="/dc-network-services"/>
          <Route element={<NextGenSupport/>} path="/next-gen-support-services"/>
          <Route element={<IAM/>} path="/iam"/>
          <Route element={<GovtRisk/>} path="/govt-risk"/>
          <Route element={<ApplicationSecurity/>} path="/application-security"/>
          <Route element={<DigitalIdentity/>} path="/digital-identity"/>
          <Route element={<ServiceNow/>} path="/servicenow"/>
          <Route element={<SalesForce/>} path="/salesforce"/>
          <Route element={<Oracle/>} path="/oracle"/>
          <Route element={<SAP/>} path="/sap"/>
          <Route element={<Industries/>} path="/industries"/>
          <Route element={<ModalSidebar/>} path="/modalsidebar" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
