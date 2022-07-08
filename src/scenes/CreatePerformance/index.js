import PerformanceHeader from "../../components/CreatePerformance/PerformanceHeader";
import PerformanceSubtitle from "../../components/CreatePerformance/Subtitle";
import PerformanceFirstStep from "../../components/CreatePerformance/PerformanceFirstStep";

import "./style.css";
export default function CreatePerformancePage() {
  return (
    <>
      <div>
        <PerformanceHeader />
      </div>
      <div>
      <PerformanceSubtitle title="Schedule a Performance" num='1'/>
      </div>
      <div>
      <PerformanceFirstStep/>
      </div>
    </>
  );
}
