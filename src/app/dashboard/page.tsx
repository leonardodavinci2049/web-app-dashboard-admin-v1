import { Suspense, type CSSProperties } from "react";

import { SiteHeader } from "@/components/dashboard/blocks/header/site-header";

import { AppSidebar } from "@/components/dashboard/blocks/sidebar/app-sidebar";
import { ChartAreaInteractive } from "@/components/dashboard/panel/chart-area-interactive";
import { DataTable } from "@/components/dashboard/panel/data-table";
import { SectionCards } from "@/components/dashboard/panel/section-cards";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "./data.json";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <Suspense
                fallback={
                  <div className="px-4 lg:px-6">
                    <div className="h-72 animate-pulse rounded-lg border border-dashed" />
                  </div>
                }
              >
                <DataTable data={data} />
              </Suspense>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
