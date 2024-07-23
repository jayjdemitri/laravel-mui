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

## Updating components

- Removed obsolete circleci backup config
- Removed welcome page default content
- played with mui in the welcome page
- Created test EmptyLayout
- Removed all components
- Emptied all layout Content
- Emptied all page content
- Emptied all partials
- Updated app.blade.php and removed last of the styles and cdn for figtree font
- Removed call in tailwind.config for figtree font 



```
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





That would now be the project all setup and ready to use next I will

- Test my theory using the welcome page as test
- Remove all default content styles and components
- Rewrite all components and layouts
- better seperate the welcome page
- Add new layout templates
    - empty
    - sticky-footer?
- Implement new layouts in custom docs page ?