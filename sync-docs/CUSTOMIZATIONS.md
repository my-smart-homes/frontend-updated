# My Smart Homes (MSH) Customizations

This document tracks all customizations made to the Home Assistant frontend for the My Smart Homes fork.

## Version Information

- **Fork Name**: my-smart-homes-frontend
- **Current Version**: 20241024.63
- **Base**: Home Assistant Frontend (upstream)
- **Repository**: https://github.com/my-smart-homes/frontend-ha/

## Branding Changes

### Visual Identity
- **Icons & Favicons**: All favicon files replaced with MSH branding
  - `public/static/icons/favicon-*.png` (all sizes: 16x16, 32x32, 192x192, 384x384, 512x512, 1024x1024)
  - `public/static/icons/favicon-apple-180x180.png`
  - `public/static/icons/favicon.ico`
  - `public/static/icons/maskable_icon-*.png` (all sizes: 48x48, 72x72, 96x96, 128x128, 192x192, 384x384, 512x512)
  - `public/static/icons/tile-win-*.png` (Windows tiles: 70x70, 150x150, 310x150, 310x310)
  - `public/static/icons/ohf.svg`
  - `public/static/images/ohf-badge.svg`

### Text Rebranding
- **Global Text Replacement**: "Home Assistant" → "MSH" throughout the UI
- **Key Translation Changes** in `src/translations/en.json`:
  - System messages (startup, stopping, safe mode)
  - Voice assistant messages
  - Update dialogs and notifications
  - Entity management messages
  - Error messages and alerts
  - Connection and security warnings
  - Backup descriptions
  - Documentation links

### Project Configuration
- **Package Name**: Changed from `home-assistant-frontend` to `my-smart-homes-frontend`
- **Repository URLs**: Updated to point to My Smart Homes organization
- **Version Format**: Using date-based versioning (YYYYMMDD.build)

## Feature Additions

### Device Management
- **Device Count Limiting** (`src/common/util/get-device-limit.ts`)
  - New WebSocket API call: `config_entries/get_device_limit`
  - Fetches and enforces device count limits
  - Returns `undefined` on error for graceful degradation

### Text Processing Utilities
- **HA to MSH Conversion** (`src/common/util/replace-ha-2-msh.ts`)
  - Runtime conversion of "Home Assistant" references to "MSH"
  - Handles string, TemplateResult, and nothing types
  - Case-insensitive replacement function
  - Used for dynamic content transformation

### UI Enhancements
- **Cast Receiver Updates**
  - Modified launcher and main layout components
  - Updated connection flows and demo configurations
  - Rebranded cast receiver interface

### Dashboard & Configuration
- **List Display Improvements**: Bug fixes for list rendering
- **Integration Count**: Fixed missing integration count display
- **Search Updates**: Enhanced search functionality
- **State Annotations**: Fixed missing state annotation issues

## Technical Changes

### Build & Deployment
- **Workflow Modifications**:
  - `.github/workflows/nightly.yaml`: Simplified build process (28 line changes)
  - `.github/workflows/release.yaml`: Streamlined release workflow (90 line changes)
  - `.github/workflows/design_preview.yaml`: Updated preview deployment
  - Other workflow files updated for MSH branding

### Build Configuration
- **Rspack Configuration** (`build-scripts/rspack.cjs`): Custom build optimizations
- **Bundle Scripts** (`build-scripts/bundle.cjs`): Additional bundling logic
- **Translation Scripts** (`build-scripts/gulp/translations.js`): Custom translation handling

### Demo & Gallery
- **Demo Configurations**: Updated with MSH branding
  - Cast demo lovelace
  - Section entities and configurations
  - Supervisor stubs
- **Gallery Updates**: Various component gallery pages updated

### Hassio/Supervisor Integration
- **Supervisor Components**: Updated for MSH branding
  - Backup management UI
  - Update notifications
  - Core info display
  - Repository dialogs

## Bug Fixes

### Translation Fixes
- **JSON Syntax**: Fixed comma errors in translation files (commit: 60bdd6068)
- **Key Corrections**: Fixed `key_c_tip` in en.json (commit: 2af31d461)
- **Spacing**: Fixed "Enabled entities will be added toMSH" → "to MSH"

### UI Fixes
- **Column Widths**: Fixed dashboard config page column widths
- **State Display**: Resolved state annotation missing issues
- **List Rendering**: Fixed list display bugs
- **Integration Count**: Restored missing integration count display

## File Structure Changes

### New Files Added
- `src/common/util/get-device-limit.ts` - Device limiting functionality
- `src/common/util/replace-ha-2-msh.ts` - Text replacement utility

### Modified Files (Key Changes)
- `pyproject.toml` - Project metadata and versioning
- `src/translations/en.json` - Comprehensive text rebranding
- `demo/src/html/index.html.template` - Demo page branding
- Cast receiver components (multiple files)
- Hassio/Supervisor UI components (multiple files)
- Gallery component examples (multiple files)

## Versioning History

Recent version bumps:
- **20241024.63** - Latest release (current)
- **20241024.62** - Previous release
- **20241024.61** - Bug fix release
- **20241024.6** - Feature release
- **20241024.5** - Minor updates
- **20241024.4** - Bug fixes
- **20241024.3** - Patch release

## Maintenance Notes

### When Syncing with Upstream
1. **Preserve all branding changes** in translations and UI text
2. **Keep custom utility functions** (device-limit, replace-ha-2-msh)
3. **Maintain icon/favicon customizations** in public/static/icons/
4. **Review workflow files** for deployment-specific changes
5. **Check pyproject.toml** for version and package name
6. **Test device limiting functionality** after merge
7. **Verify text replacement utilities** still work correctly

### Known Conflicts to Watch For
- Translation file merges (en.json and other locales)
- Build script modifications
- Workflow file changes
- Package.json version conflicts
- Icon/asset file replacements

### Critical Customization Points
1. **Branding**: All "Home Assistant" → "MSH" references
2. **Icons**: Complete favicon/icon suite replacement
3. **Device Limiting**: Custom WebSocket API integration
4. **Version Format**: Date-based versioning scheme
5. **Repository URLs**: My Smart Homes organization

## Testing Checklist

When validating customizations after upstream sync:
- [ ] All icons display correctly (check all sizes)
- [ ] "MSH" branding appears throughout UI (not "Home Assistant")
- [ ] Device count limiting works correctly
- [ ] Text replacement utility functions properly
- [ ] Build and deployment workflows succeed
- [ ] Demo pages load with correct branding
- [ ] Cast receiver displays MSH branding
- [ ] Supervisor/Hassio integration branded correctly
- [ ] Translation keys resolve correctly
- [ ] Version number follows MSH format

## Contact & Support

For issues related to My Smart Homes customizations:
- Repository: https://github.com/my-smart-homes/frontend-ha/
- Maintainer: Naimur Hassan (naimurhasanrwd@gmail.com)

---

**Last Updated**: 2024-12-23
**Document Version**: 1.0
