import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/layout/AppShell'
import Dashboard from './pages/Dashboard'
import Contacts from './pages/Contacts'
import Pipeline from './pages/Pipeline'
import DealModal from './components/pipeline/DealModal'
import Communications from './pages/Communications'
import Marketing from './pages/Marketing'
import Automation from './pages/Automation'
import AutomationBuilder from './pages/AutomationBuilder'
import AutomationTemplates from './pages/AutomationTemplates'
import EasyAutomationBuilder from './pages/EasyAutomationBuilder'
import DevUI from './pages/DevUI'
import Reports from './pages/Reports'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          {/* Demo lockdown — index + every non-automation surface
              redirects into the automation list. Pages themselves
              are intentionally LEFT IN PLACE (not deleted) so the
              build can be unlocked later by reverting this block. */}
          <Route index element={<Navigate to="/my-automations/list/advanced" replace />} />
          <Route path="dashboard" element={<Navigate to="/my-automations/list/advanced" replace />} />

          {/* Contacts — blocked */}
          <Route path="contacts/*" element={<Navigate to="/my-automations/list/advanced" replace />} />

          {/* Pipeline — blocked */}
          <Route path="pipeline/*" element={<Navigate to="/my-automations/list/advanced" replace />} />

          {/* Communications — blocked */}
          <Route path="communication/*" element={<Navigate to="/my-automations/list/advanced" replace />} />

          {/* Marketing / Forms — blocked */}
          <Route path="forms/*" element={<Navigate to="/my-automations/list/advanced" replace />} />
          <Route path="landing-pages" element={<Navigate to="/my-automations/list/advanced" replace />} />
          <Route path="checkout-forms" element={<Navigate to="/my-automations/list/advanced" replace />} />

          {/* Automation */}
          <Route path="my-automations">
            <Route index element={<Navigate to="/my-automations/list/easy" replace />} />
            <Route path="list/easy" element={<Automation />} />
            <Route path="list/advanced" element={<Automation />} />
            <Route path="templates" element={<AutomationTemplates />} />
          </Route>
          <Route path="automation">
            <Route
              path="templates"
              element={<Navigate to="/my-automations/templates" replace />}
            />
            <Route path="zapier" element={<Placeholder />} />
            <Route path="ai-assistant" element={<Placeholder />} />
            <Route path="preferences" element={<Placeholder />} />
          </Route>

          {/* Reports — blocked */}
          <Route path="reports" element={<Navigate to="/my-automations/list/advanced" replace />} />

          {/* Misc — blocked */}
          <Route path="search" element={<Navigate to="/my-automations/list/advanced" replace />} />
          <Route path="appointments" element={<Navigate to="/my-automations/list/advanced" replace />} />
          <Route path="tasks" element={<Navigate to="/my-automations/list/advanced" replace />} />
          <Route path="business-profile" element={<Navigate to="/my-automations/list/advanced" replace />} />
          <Route path="domains" element={<Navigate to="/my-automations/list/advanced" replace />} />
          <Route path="sales/*" element={<Navigate to="/my-automations/list/advanced" replace />} />

          {/* Catch-all — anything not matched above also bounces to automation. */}
          <Route path="*" element={<Navigate to="/my-automations/list/advanced" replace />} />
        </Route>

        {/* Standalone full-page routes (no AppShell/sidebar) */}
        <Route
          path="/my-automations/list/advanced/:automationId"
          element={<AutomationBuilder />}
        />
        <Route
          path="/automations/build/:id"
          element={<EasyAutomationBuilder />}
        />
        <Route path="/dev/ui" element={<DevUI />} />
      </Routes>
    </BrowserRouter>
  )
}
