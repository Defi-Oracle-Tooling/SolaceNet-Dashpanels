#!/bin/bash

# Define project root and document root
PROJECT_ROOT="$(pwd)"
DOCUMENT_ROOT="$PROJECT_ROOT"

# Create directories
mkdir -p $DOCUMENT_ROOT/{apps/{user_dashboard,employee_panel,admin_panel,mockups/{user_dash_panel,employee_panel,admin_panel,assets}},packages/{components,services,themes/{default_theme,client_1_theme,client_2_theme},mock_data,utils},templates/{default_theme,client_1_theme,client_2_theme},scripts,.github/workflows}

# Apps directory
for app in user_dashboard employee_panel admin_panel; do
  mkdir -p $DOCUMENT_ROOT/apps/$app/{src/{components,views},public}
  touch $DOCUMENT_ROOT/apps/$app/src/{App.jsx,index.js}
  touch $DOCUMENT_ROOT/apps/$app/{package.json,vite.config.js}
done

# Mockups directory
touch $DOCUMENT_ROOT/apps/mockups/{package.json,vite.config.js}

# Packages directory
components=("Button.jsx" "Modal.jsx" "Navbar.jsx" "Table.jsx")
for component in "${components[@]}"; do
  touch $DOCUMENT_ROOT/packages/components/$component
done

services=("alchemy.js" "tatum.js" "thirdweb.js")
for service in "${services[@]}"; do
  touch $DOCUMENT_ROOT/packages/services/$service
done

mkdir -p $DOCUMENT_ROOT/packages/themes/default_theme
touch $DOCUMENT_ROOT/packages/themes/default_theme/{variables.scss,styles.scss}

touch $DOCUMENT_ROOT/packages/mock_data/{wallets.json,transactions.json,customers.json}

touch $DOCUMENT_ROOT/packages/utils/{errorHandler.js,formatData.js,validation.js}

# Scripts directory
touch $DOCUMENT_ROOT/scripts/{build.js,deploy.js,startMockServer.js}

# Templates directory
touch $DOCUMENT_ROOT/templates/{default_theme,client_1_theme,client_2_theme}

# GitHub workflows
touch $DOCUMENT_ROOT/.github/workflows/{build-and-deploy.yml,test.yml}

# Root files
touch $DOCUMENT_ROOT/{.env,package.json,pnpm-workspace.yaml,turbo.json}

# Completion message
echo "Project structure created successfully at $DOCUMENT_ROOT."
