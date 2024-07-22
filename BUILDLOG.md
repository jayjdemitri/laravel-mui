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
