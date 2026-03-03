import type { ServiceBenefit } from "../data/services";
import SpeedIcon from "@mui/icons-material/Speed";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DevicesIcon from "@mui/icons-material/Devices";
import ApiIcon from "@mui/icons-material/Api";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SecurityIcon from "@mui/icons-material/Security";
import TuneIcon from "@mui/icons-material/Tune";
import ShieldIcon from "@mui/icons-material/Shield";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import AssessmentIcon from "@mui/icons-material/Assessment";
import KeyIcon from "@mui/icons-material/Key";
import HubIcon from "@mui/icons-material/Hub";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import SyncIcon from "@mui/icons-material/Sync";
import MonitoringIcon from "@mui/icons-material/MonitorHeart";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InventoryIcon from "@mui/icons-material/Inventory";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SavingsIcon from "@mui/icons-material/Savings";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SummarizeIcon from "@mui/icons-material/Summarize";

const iconMap: Record<string, React.ComponentType<{ sx?: object }>> = {
  Speed: SpeedIcon,
  DesignServices: DesignServicesIcon,
  Devices: DevicesIcon,
  Api: ApiIcon,
  StoreMallDirectory: StoreMallDirectoryIcon,
  SupportAgent: SupportAgentIcon,
  TravelExplore: TravelExploreIcon,
  TrendingUp: TrendingUpIcon,
  EditNote: EditNoteIcon,
  Security: SecurityIcon,
  Tune: TuneIcon,
  Shield: ShieldIcon,
  TouchApp: TouchAppIcon,
  Assessment: AssessmentIcon,
  Key: KeyIcon,
  Hub: HubIcon,
  AutoMode: AutoModeIcon,
  Sync: SyncIcon,
  Monitoring: MonitoringIcon,
  ScatterPlot: ScatterPlotIcon,
  ShoppingCartCheckout: ShoppingCartCheckoutIcon,
  CreditCard: CreditCardIcon,
  Inventory: InventoryIcon,
  PhoneIphone: PhoneIphoneIcon,
  Analytics: AnalyticsIcon,
  Savings: SavingsIcon,
  VerifiedUser: VerifiedUserIcon,
  Schedule: ScheduleIcon,
  AccountTree: AccountTreeIcon,
  Summarize: SummarizeIcon,
};

interface ServiceFeatureGridProps {
  benefits: ServiceBenefit[];
}

const ServiceFeatureGrid = ({ benefits }: ServiceFeatureGridProps) => {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <h2 className="font-manrope text-2xl lg:text-4xl font-semibold text-gray-900 text-center mb-4">
        Por que escolher este serviço?
      </h2>
      <p className="text-gray-500 font-dmsans text-center max-w-2xl mx-auto mb-12">
        Benefícios que fazem a diferença para o seu negócio
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => {
          const IconComponent = iconMap[benefit.icon];
          return (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:border-[#211cda]/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#211cda]/10 flex items-center justify-center mb-5">
                {IconComponent && (
                  <IconComponent
                    sx={{ fontSize: 24, color: "#211cda" }}
                  />
                )}
              </div>
              <h3 className="font-manrope font-semibold text-lg text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="font-dmsans text-sm text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceFeatureGrid;
