"use client"

import type React from "react"
import { useState } from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, FileText, MapPin, MessageSquare, Phone, Plus, Upload, Users, Wallet } from "lucide-react"
import { QuickActions } from "@/components/quick-actions"
import { BondModal } from "@/components/modals/bond-modal"

export function MainDashboard() {
  const [bondModalOpen, setBondModalOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</h1>
          <Button onClick={() => setBondModalOpen(true)} className="w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            New Bond
          </Button>
        </div>

        <QuickActions />

        <Tabs defaultValue="today" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 sm:w-auto sm:grid-cols-none">
            <TabsTrigger value="today" className="text-xs sm:text-sm">
              Today's Activity
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="text-xs sm:text-sm">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="stats" className="text-xs sm:text-sm">
              Statistics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-4">
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Check-Ins Today"
                value="0"
                description="Via Mobile App"
                icon={Phone}
                color="bg-blue-100"
              />
              <StatsCard
                title="Court Dates Today"
                value="0"
                description="For Clients"
                icon={Calendar}
                color="bg-amber-100"
              />
              <StatsCard title="Geo-Fence Violations" value="0" description="Today" icon={MapPin} color="bg-red-100" />
              <StatsCard title="Payments Due" value="0" description="Today" icon={Wallet} color="bg-green-100" />
            </div>

            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <StatsCard title="New Clients" value="0" description="Added Today" icon={Users} color="bg-purple-100" />
              <StatsCard title="New Bonds" value="0" description="Added Today" icon={FileText} color="bg-indigo-100" />
              <StatsCard
                title="Office Chat"
                value="0"
                description="New Messages"
                icon={MessageSquare}
                color="bg-cyan-100"
              />
              <StatsCard
                title="Attachments"
                value="0"
                description="Uploaded Today"
                icon={Upload}
                color="bg-emerald-100"
              />
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Upcoming Court Dates</CardTitle>
                <CardDescription>Next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6 text-sm sm:text-base text-muted-foreground">
                  No upcoming court dates in the next 7 days
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Upcoming Payments</CardTitle>
                <CardDescription>Due in the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6 text-sm sm:text-base text-muted-foreground">
                  No upcoming payments due in the next 7 days
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-4">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Monthly Bond Activity</CardTitle>
                  <CardDescription>New bonds vs. exonerations</CardDescription>
                </CardHeader>
                <CardContent className="h-[250px] sm:h-[300px]">
                  <div className="flex h-full items-center justify-center text-sm sm:text-base text-muted-foreground">
                    Chart will appear here
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Revenue Overview</CardTitle>
                  <CardDescription>Monthly revenue breakdown</CardDescription>
                </CardHeader>
                <CardContent className="h-[250px] sm:h-[300px]">
                  <div className="flex h-full items-center justify-center text-sm sm:text-base text-muted-foreground">
                    Chart will appear here
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 pb-2">
              <CardTitle className="text-lg sm:text-xl font-bold">Recent Clients</CardTitle>
              <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                View all
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 text-sm sm:text-base text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground/40" />
                <p className="mb-4">No recent clients to display</p>
                <Button variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add First Client
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 pb-2">
              <CardTitle className="text-lg sm:text-xl font-bold">Recent Bonds</CardTitle>
              <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                View all
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6 text-sm sm:text-base text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground/40" />
                <p className="mb-4">No recent bonds to display</p>
                <Button variant="outline" size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Create First Bond
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <BondModal open={bondModalOpen} onOpenChange={setBondModalOpen} />
    </>
  )
}

interface StatsCardProps {
  title: string
  value: string
  description: string
  icon: React.ElementType
  color: string
}

function StatsCard({ title, value, description, icon: Icon, color }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className={`rounded-full p-2 ${color} flex-shrink-0`}>
            <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground truncate">{title}</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-xl sm:text-3xl font-bold">{value}</h3>
              <p className="text-xs text-muted-foreground truncate">{description}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
