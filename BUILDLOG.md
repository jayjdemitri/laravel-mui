# BUILDLOG

This file will be used to track the build untill considered stable **v1.0.0**

## Project Setup

- After an error in a previous demo build we have made this from laravel global instance
  - `laravel new laravel-mui`
    - `breeze`
    - `react`
    - `typescript`
    - `phpunit`
- [Updated] package.json
  - Added name description and some scripts to make version control easier
- [Updated] composer.json
  - Updated package details & author
- removed default readme content
- Fully updated main readme
- Added setup for CicleCi Test integration
- Added Licence for docs
- Updated README badges
- Refractored CircleCi config.yml for easier understanding and readbility
- Added `concurrently` as npm config
- Updated npm scripts with pretest to run build a test dev:watch command
- Added mui deps
  - @mui/material | Base Mui Library
  - @emotion/react | React Styling Library
  - @emotion/styled | Library to attatch react styles
  - @fontsource/roboto | Roboto font used for MUI
  - @mui/icons-material | Material icons used for
- Updated styles imports for roboto font

## Updating components/content

Stepped back had a think most will never see the mess that exsisted before this commit

- Removed Everything in the resources/js folder except app and bootstrap (Re-Commited here)
- Updated react folder structure
- Restored Most of the page .tsx files creating a very simple template to display page name and call the needed head
- Went through all the controllers correcting calls the used to render `Auth/<PAGENAME>` that now only render from a single level
  - Current Pages Are
    - ConfirmPassword
    - Dashboard
    - ForgotPassword
    - Login
    - Register
    - ResetPassword
    - VerifyEmail
    - Welcome
- Created Empty Layouts
  - AuthenticatedLayout
  - EmptyLayout
  - GuestLayout
  - StickyFooterLayout
  - CenteredLayout ? Will be added : if needed
- Created Empty Components
  - ThemeSwitcher.tsx
  - ResponsiveAppBar.tsx
- Created ThemeContext a simple wrap around that will change colour pallet between light and dark mode, since we are on a laravel base we have chosen to theme red to match
- Updated all of the empty layouts to now include the wrapper
- For the time being updated all pages to use the empty layout page to test dark mode (this is temp)
- Added ESLint for more consistent better quality code and to make sure im coding better
- Added prettier for prettier code formating
- Updated eslint.config with rules that work for ts
  - Updated again to user jsx runtime instead of default recommended from react plugin
  - Updated again to add vendor a public build dirs
- Removed unused import of defaultTheme from tailwind config
- Updated global.d.ts to use const instead of var
- Updated themeContext
  - Removed our light and dark themes to constants to clean up the code
  - Updated theme constant so that useMemo uses create theme based on the new constants
  - Updated the initial state of mode to
    - check localstorage for preset and use if found
    - check os for preference setting preset and using if found
    - default to light if none of the above found
  - Updated switchColourMode function
    - first it will work our next mode from previous state
    - next it will update this as preset in localstorage
    - before them updating the component state
- Documented all code in themeContext
- Added temp clear storage button for playing with in welcome page
- Updated theme switcher to implement dark/light mode switching
- Updated circleci config to add force flag to npm install comand due to new eslint dep
- Added basic offcanvas responsive topbar will work on it as the project progresses
- Decided to make everything flat for the momment and then componentise after
  - cleared new nav
  - cleared welcome page content
- So after a few hour messing around I have a very basic close but not there format to the welcome page. 

```sh
components
    ApplicationLogo
    Checkbox
    DangerButton
    Dropdown
    InputError
    InputLabel
    Modal
    NavLink
    PrimaryButton
    ResponsiveNavLink
    SecondaryButton
    TextInput
layouts
    AuthenticatedLayout
    GuestLayout
pages
    Auth
        ConfirmPassword
        ForgotPassword
        Login
        Register
        ResetPassword
        VerifyEmail
    Profile
        Partials
            DeleteUserForm
            UpdatePasswordForm
            UpdateProfileInformationForm
        Edit
    Dashboard
    Welcome
```
