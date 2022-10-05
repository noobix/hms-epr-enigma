import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HomePage } from '../../containers/HomePage';
import { PatientSearch } from '../../containers/Patient/Search';
import { PatientRegistration } from '../../containers/Patient/Registration';
import { PatientReferal } from '../../containers/Patient/Referal';
import { PatientDependant } from '../../containers/Patient/Dependant';
import { InpatientAdmission } from '../../containers/Inpatient/Admission';
import { InpatientDischarge } from '../../containers/Inpatient/Discharge';
import { InpatientEPR } from '../../containers/Inpatient/EPR';
import { InpatientSearch } from '../../containers/Inpatient/Search';
import { InpatientWard } from '../../containers/Inpatient/Ward';
import { InpatientReferal } from '../../containers/Inpatient/Referal'
import { AddressBook } from '../../containers/Accounts/AddressBook';
import { PatientBill } from '../../containers/Accounts/PatientBill';
import { Procedure } from '../../containers/Accounts/Procedure';
import { Supplier } from '../../containers/Accounts/Suppliers';
import { TaxCharges } from '../../containers/Accounts/TaxCharges';
import { Transactions } from '../../containers/Accounts/Transactions';
import { DrugItem } from '../../containers/Pharmacy/DrugItem';
import { DrugStore } from '../../containers/Pharmacy/DrugStore';
import { Prescription } from '../../containers/Pharmacy/Prescription';
import { RecievedDrugs } from '../../containers/Pharmacy/RecieveDrugs';
import { Requisition } from '../../containers/Pharmacy/Requisition';
import { PharmacyStock } from '../../containers/Pharmacy/PharmacyStock';
import { Search } from '../../containers/Records/Search'
import { Appointment } from '../../containers/Records/Appointment'
import { Diagnosis } from '../../containers/Records/Diagnosis'
import { EPR } from '../../containers/Records/EPR'
import { Service } from '../../containers/Records/Procedure'
import { Contract } from '../../containers/Contract/Contract'
import { ItemsApproved } from '../../containers/Contract/ItemsApproved'
import { Purchaser } from '../../containers/Contract/Purchaser'
import { GeneralStore } from '../../containers/Store/GeneralStore'
import { MedicalStore } from '../../containers/Store/MedicalStore'
import { RecievedStock } from '../../containers/Store/RecievedStock'
import { Tickets } from '../../containers/Store/Tickets'
import { Department } from '../../containers/Administration/Department'
import { Roaster } from '../../containers/Administration/Roaster'
import { Staff } from '../../containers/Administration/Staff'
import { System } from '../../containers/Administration/System'
import { UserAccounts } from '../../containers/Administration/UserAccounts'

class Router extends React.Component {
    render() {
        return(<React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/patient/patientsearch" element={<PatientSearch />} />
                    <Route path="/patient/patientregistration" element={<PatientRegistration />} />
                    <Route path="/patient/patientdependant" element={<PatientDependant />} />
                    <Route path="/patient/patientreferal" element={<PatientReferal />} />
                    <Route path="/inpatient/inpatientadmission" element={<InpatientAdmission />} />
                    <Route path="/inpatient/inpatientdischarge" element={<InpatientDischarge />} />
                    <Route path="/inpatient/inpatientepr" element={<InpatientEPR />} />
                    <Route path="/inpatient/inpatientsearch" element={<InpatientSearch />} />
                    <Route path="/inpatient/inpatientward" element={<InpatientWard />} />
                    <Route path="/inpatient/inpatientreferal" element={<InpatientReferal />} />
                    <Route path="/accounts/addressbook" element={<AddressBook />} />
                    <Route path="/accounts/patientbill" element={<PatientBill />} />
                    <Route path="/accounts/procedure" element={<Procedure />} />
                    <Route path="/accounts/supplier" element={<Supplier />} />
                    <Route path="/accounts/taxcharges" element={<TaxCharges />} />
                    <Route path="/accounts/transactions" element={<Transactions />} />
                    <Route path="/pharmacy/drugitem" element={<DrugItem />} />
                    <Route path="/pharmacy/drugstore" element={<DrugStore />} />
                    <Route path="/pharmacy/prescription" element={<Prescription />} />
                    <Route path="/pharmacy/recieveddrugs" element={<RecievedDrugs />} />
                    <Route path="/pharmacy/requisition" element={<Requisition />} />
                    <Route path="/pharmacy/pharmarcystock" element={<PharmacyStock />} />
                    <Route path="/records/patientSearcch" element={<Search />} />
                    <Route path="/records/appointment" element={<Appointment />} />
                    <Route path="/records/diagnosis" element={<Diagnosis />} />
                    <Route path="/records/epr" element={<EPR />}/>
                    <Route path="/records/service" element={<Service />}/>
                    <Route path="/contract/contract" element={<Contract />} />
                    <Route path="/contract/itemsapproved" element={<ItemsApproved />}/>
                    <Route path="/contract/purchaser" element={<Purchaser />} />
                    <Route path="/store/generalstore" element={<GeneralStore />} />
                    <Route path="/store/medicalstore" element={<MedicalStore />}/>
                    <Route path="/store/recievedstock" element={<RecievedStock />} />
                    <Route path="/store/tickets" element={<Tickets />} />
                    <Route path="/administration/department" element={<Department />} />
                    <Route path="/administration/roaster" element={<Roaster />} />
                    <Route path="/administration/staff" element={<Staff />} />
                    <Route path="/administration/system" element={<System />} />
                    <Route path="/administration/useraccounts" element={<UserAccounts />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>)
    }
}
export { Router }