import { Reports } from './Pages';
import rescueField from '../assets/rescue-field.png';
export default function ReportsGallery(){return <><section className="report-gallery"><div className="wrap gallery-grid"><div><p className="eyebrow">RESPONSIBLE RESPONSE</p><h1>Reports help teams understand the situation.</h1><p>Community details can support a safer, informed response from the appropriate wildlife authorities.</p></div><img src={rescueField} alt="Elephant in a forest corridor"/></div></section><Reports/></>}
