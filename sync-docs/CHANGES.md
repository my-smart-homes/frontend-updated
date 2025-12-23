# My Smart Homes Frontend Changes (Post-Fork)

This document outlines significant modifications and rebranding efforts made to this forked repository, transitioning from "Home Assistant" to "MSH" (My Smart Homes), along with other custom features.

---

## Latest Updates (dev-old branch - December 2024)

### Version 20241024.63 (Latest)
- **Translation Fixes**: 
  - Fixed `key_c_tip` in `en.json` (commit: 2af31d461)
  - Fixed JSON comma syntax errors (commit: 60bdd6068)
  - Fixed spacing: "Enabled entities will be added toMSH" → "to MSH"

### Recent Bug Fixes & Improvements
- **f-patch (commit: 2868b440a)**:
  - Fixed state annotation missing issues
  - Fixed translation username handling
  - Replaced remaining "msh" with "ha" references for consistency
  - Updated search functionality
  - Fixed missing integration count display
  - Fixed list display bugs
  - Updated `pyproject.toml` version management

---

## Branding & Text Replacement

The primary change involves a comprehensive rebranding effort where all instances of "Home Assistant" have been systematically replaced with "MSH" (My Smart Homes) across the codebase. This includes:

- **Global Text Replacement:** Updates in various `*.ts`, `*.html.template`, `*.yaml`, and `*.json` files to reflect the "MSH" branding.
- **New Utility: `src/common/util/replace-ha-2-msh.ts`**: Introduced to facilitate the dynamic replacement of "Home Assistant" with "MSH" in UI elements, ensuring consistency.
  ```typescript
  // Runtime conversion supporting string, TemplateResult, and nothing types
  export function replaceHA2MSH(content: string | TemplateResult | typeof nothing)
  ```
- **Updated Logos and Icons:** The `public/static/icons` directory contains updated favicons and maskable icons. A new `public/static/icons/ohf.svg` and `public/static/images/ohf-badge.svg` have been introduced, likely for MSH-specific branding.
  - All favicon sizes: 16x16, 32x32, 192x192, 384x384, 512x512, 1024x1024
  - Apple touch icon: 180x180
  - Maskable icons: 48x48, 72x72, 96x96, 128x128, 192x192, 384x384, 512x512
  - Windows tiles: 70x70, 150x150, 310x150, 310x310
  - Brand assets: ohf.svg, ohf-badge.svg
- **`pyproject.toml` Updates:** 
  - Project name: `my-smart-homes-frontend`
  - Homepage URL: `https://github.com/my-smart-homes/frontend-ha/`
  - Version format: Date-based (YYYYMMDD.build)
- **Updated Translations:** `src/translations/en.json` has been extensively modified to replace "Home Assistant" with "MSH" in various UI strings, notifications, and descriptions.
  - System startup/stopping messages
  - Safe mode notifications
  - Voice assistant prompts
  - Update dialog text
  - Entity management messages
  - Connection warnings
  - Backup descriptions

---

## New Features & Modifications

### Device Limit Enforcement

- **New Utility: `src/common/util/get-device-limit.ts`**: This new utility provides functionality to fetch a device count limit from the backend.
  ```typescript
  export async function fetchDeviceCountLimit(hass: HomeAssistant): Promise<number | undefined>
  ```
  - WebSocket API call: `config_entries/get_device_limit`
  - Returns `undefined` on error for graceful degradation
- **Integration with Device Dashboards:**
  - `src/panels/config/devices/ha-config-devices-dashboard.ts`: Modified to integrate `fetchDeviceCountLimit` and enforce a maximum device count. Users will be alerted if they attempt to add devices beyond the limit.
  - `src/panels/config/integrations/ha-config-integrations-dashboard.ts`: Also updated to utilize `fetchDeviceCountLimit` to prevent adding new integrations if the total device count exceeds the defined limit.

### Onboarding Enhancements

- **`src/onboarding/onboarding-create-user.ts` Updates**: The user creation form during onboarding has been enhanced to include new required fields: `secret_key` and `home_name`. The `CHECK_USERNAME_REGEX` has been commented out, and username autocomplete type changed to `email`.
- **New Component: `src/onboarding/onboarding-loading.ts`**: Introduced to provide a loading spinner with customizable margins, improving user experience during onboarding processes.
- **`src/onboarding/ha-onboarding.ts`**: Logic updated to conditionally import `onboarding-restore-backup` only if a supervisor is present (`MSH OS` or `MSH Supervised`).

### UI/Styling Overhauls

- **New Stylesheet: `src/resources/ha-style.ts`**: Introduced to define MSH-specific default styles, including custom colors, typography, shadow effects, and state-related styling. This file significantly customizes the frontend's visual appearance.
- **`src/components/ha-md-dialog.ts`**: Updated to reference the "MSH design" link.
- **`src/components/ha-sidebar.ts`**: The sidebar title has been changed from "Home Assistant" to "My Smart Homes".
- **`src/components/ha-theme-picker.ts`**: "Home Assistant" theme option replaced with "MSH".
- **`src/panels/config/ha-panel-config.ts`**: The `voice-assistants` and `cloud` sections have been commented out from the configuration panel, indicating their removal or temporary disablement from the UI.
- **`src/panels/config/network/ha-config-section-network.ts`**: The networking configuration section has been heavily modified to display a remote URL fetched from a new websocket endpoint (`config_entries/get_remote_external_url`) instead of previous network browsing options.

### Cast Receiver Updates

- **`cast/src/launcher/layout/hc-connect.ts`**: Updated connection flow with MSH branding
- **`cast/src/launcher/layout/hc-layout.ts`**: Modified layout components
- **`cast/src/receiver/demo/cast-demo-lovelace.ts`**: Demo configurations updated
- **`cast/src/receiver/layout/hc-launch-screen.ts`**: Launch screen rebranded
- **`cast/src/receiver/layout/hc-main.ts`**: Main receiver interface updated
- Default cast name changed to "MSH Cast"

### Other Notable Changes

- **`src/common/util/time-cache-entity-promise-func.ts` and `src/common/util/time-cache-function-promise.ts`**: Documentation comments updated to refer to "MSH object" instead of "Home Assistant object."
- **`src/cast/...` files**: Numerous files within the `cast` directory have been updated to replace "Home Assistant" references with "MSH".
- **`src/fake_data/demo_services.ts`**: Descriptions for stop, restart, and check_config services updated to refer to "MSH" service/log.
- **`src/html/index.html.template`**: Title and various meta tags changed from "Home Assistant" to "My Smart Homes".
- **`src/layouts/ha-init-page.ts`**: Initial page text updated to reflect "MSH" connections and database upgrade messages.
- **`src/layouts/home-assistant.ts`**: Comments updated to refer to "MSH" for loading data and closing connections.
- **`src/data/blueprint.ts`**: Blueprint source URL check updated to `github.com/my-smart-homes`.
- **`src/data/hardware.ts`**: Board names like "Home Assistant Blue" and "Home Assistant Yellow" renamed to "MSH Blue" and "MSH Yellow".
- **`src/data/logbook.ts`**: Trigger phrases for stopping/starting updated to "MSH stopping" and "MSH starting".
- **`src/data/update.ts`**: Titles for core, supervisor, and OS updates changed to "MSH Core", "MSH Supervisor", and "MSH Operating System".
- **Various Dialogs:** Many dialogs (`dialog-calendar-event-editor.ts`, `dialog-backup-onboarding.ts`, `dialog-change-backup-encryption-key.ts`, `dialog-set-backup-encryption-key.ts`, `dialog-person-detail.ts`, `dialog-user-detail.ts`, voice assistant setup dialogs, etc.) have updated their text and image `alt` attributes to refer to "MSH".
- **`src/panels/config/info/ha-config-info.ts`**: "Home Assistant" paragraph text changed to "MSH".
- **`src/panels/config/integrations/dialog-add-integration.ts`**: Added logic to handle "MSH" as a search filter when looking for integrations.
- **`src/panels/config/integrations/ha-integration-list-item.ts`**: Uses `replaceHA2MSH` for integration names.
- **`src/panels/config/integrations/integration-panels/thread/thread-config-panel.ts`**: "Send credentials to Home Assistant" changed to "Send credentials to MSH".
- **`src/panels/iframe/ha-panel-iframe.ts`**: Error message updated to refer to "MSH".
- **`src/panels/lovelace/special-rows/hui-cast-row.ts`**: Default name changed to "MSH Cast".
- **`src/panels/profile/ha-pick-theme-row.ts`**: "Home Assistant" theme option changed to "MSH".
- **`src/state/disconnect-toast-mixin.ts`**: Toast messages for starting and safe mode updated to refer to "MSH".
- **`src/state/panel-title-mixin.ts`**: Document title changed to `— MSH` when a specific title is present, otherwise just "MSH".

---

## Build & Deployment Changes

### Workflow Modifications
- **`.github/workflows/nightly.yaml`**: Simplified build process (28 line changes)
- **`.github/workflows/release.yaml`**: Streamlined release workflow (90 line changes)
- **`.github/workflows/design_preview.yaml`**: Updated preview deployment (2 line changes)
- **Other workflow files**: Updated for MSH branding and deployment targets

### Build Configuration
- **`build-scripts/rspack.cjs`**: Custom build optimizations
- **`build-scripts/bundle.cjs`**: Additional bundling logic
- **`build-scripts/gulp/translations.js`**: Custom translation handling

---

## Version History

### Recent Releases
- **20241024.63** - Latest release (Translation fixes, UI improvements)
- **20241024.62** - Previous release
- **20241024.61** - Bug fix release
- **20241024.6** - Feature release
- **20241024.5** - Minor updates
- **20241024.4** - Bug fixes
- **20241024.3** - Patch release

---

## Maintenance & Sync Guidelines

### Critical Files to Preserve When Syncing with Upstream

1. **Branding Files**:
   - All files in `public/static/icons/` and `public/static/images/`
   - `src/translations/en.json` (MSH-specific translations)
   - `pyproject.toml` (package name and version)

2. **Custom Utilities**:
   - `src/common/util/get-device-limit.ts`
   - `src/common/util/replace-ha-2-msh.ts`
   - `src/resources/ha-style.ts`

3. **Modified Components**:
   - Onboarding components (`src/onboarding/`)
   - Config panel modifications (`src/panels/config/`)
   - Cast receiver components (`cast/src/`)

4. **Build & Deployment**:
   - Workflow files in `.github/workflows/`
   - Build scripts in `build-scripts/`

### Known Conflict Areas

When merging upstream changes, expect conflicts in:
- Translation files (especially `en.json`)
- Build/workflow configurations
- Component files with MSH branding
- Package metadata files

### Testing After Sync

- [ ] Verify all icons display correctly
- [ ] Confirm MSH branding throughout UI
- [ ] Test device count limiting functionality
- [ ] Validate text replacement utilities
- [ ] Run build process successfully
- [ ] Test onboarding flow
- [ ] Check cast receiver functionality
- [ ] Verify supervisor/hassio integration

---

## Contact

**Repository**: https://github.com/my-smart-homes/frontend-ha/
**Maintainer**: Naimur Hassan (naimurhasanrwd@gmail.com)
**Organization**: My Smart Homes

---

These changes collectively represent a significant effort to rebrand the Home Assistant frontend to "My Smart Homes" and introduce specific custom functionalities tailored for the MSH ecosystem.

**Last Updated**: 2024-12-23
**Document Version**: 2.0 (Updated with dev-old branch changes)
