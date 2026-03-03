"use client";

import { lazy, Suspense } from "react";
import type { ServiceBenefit } from "../data/services";

const iconImports: Record<string, React.LazyExoticComponent<React.ComponentType<{ sx?: object }>>> = {
  Speed: lazy(() => import("@mui/icons-material/Speed")),
  DesignServices: lazy(() => import("@mui/icons-material/DesignServices")),
  Devices: lazy(() => import("@mui/icons-material/Devices")),
  Api: lazy(() => import("@mui/icons-material/Api")),
  StoreMallDirectory: lazy(() => import("@mui/icons-material/StoreMallDirectory")),
  SupportAgent: lazy(() => import("@mui/icons-material/SupportAgent")),
  TravelExplore: lazy(() => import("@mui/icons-material/TravelExplore")),
  TrendingUp: lazy(() => import("@mui/icons-material/TrendingUp")),
  EditNote: lazy(() => import("@mui/icons-material/EditNote")),
  Security: lazy(() => import("@mui/icons-material/Security")),
  Tune: lazy(() => import("@mui/icons-material/Tune")),
  Shield: lazy(() => import("@mui/icons-material/Shield")),
  TouchApp: lazy(() => import("@mui/icons-material/TouchApp")),
  Assessment: lazy(() => import("@mui/icons-material/Assessment")),
  Key: lazy(() => import("@mui/icons-material/Key")),
  Hub: lazy(() => import("@mui/icons-material/Hub")),
  AutoMode: lazy(() => import("@mui/icons-material/AutoMode")),
  Sync: lazy(() => import("@mui/icons-material/Sync")),
  Monitoring: lazy(() => import("@mui/icons-material/MonitorHeart")),
  ScatterPlot: lazy(() => import("@mui/icons-material/ScatterPlot")),
  ShoppingCartCheckout: lazy(() => import("@mui/icons-material/ShoppingCartCheckout")),
  CreditCard: lazy(() => import("@mui/icons-material/CreditCard")),
  Inventory: lazy(() => import("@mui/icons-material/Inventory")),
  PhoneIphone: lazy(() => import("@mui/icons-material/PhoneIphone")),
  Analytics: lazy(() => import("@mui/icons-material/Analytics")),
  Savings: lazy(() => import("@mui/icons-material/Savings")),
  VerifiedUser: lazy(() => import("@mui/icons-material/VerifiedUser")),
  Schedule: lazy(() => import("@mui/icons-material/Schedule")),
  AccountTree: lazy(() => import("@mui/icons-material/AccountTree")),
  Summarize: lazy(() => import("@mui/icons-material/Summarize")),
};

const IconPlaceholder = () => (
  <div className="w-6 h-6 rounded bg-[#211cda]/20 animate-pulse" />
);

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
          const LazyIcon = iconImports[benefit.icon];
          return (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:border-[#211cda]/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#211cda]/10 flex items-center justify-center mb-5">
                {LazyIcon && (
                  <Suspense fallback={<IconPlaceholder />}>
                    <LazyIcon sx={{ fontSize: 24, color: "#211cda" }} />
                  </Suspense>
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
