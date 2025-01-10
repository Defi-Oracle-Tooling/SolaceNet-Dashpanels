#!/bin/bash

# Function to check if a file exists
check_file() {
  if [ ! -f "$1" ]; then
    echo "Missing file: $1"
  else
    echo "Found file: $1"
  fi
}

# Function to check if a directory exists
check_directory() {
  if [ ! -d "$1" ]; then
    echo "Missing directory: $1"
  else
    echo "Found directory: $1"
  fi
}

# Check directory structure
check_directory "apps"
check_directory "packages"
check_directory ".github/workflows"

# Check for missing dependencies
if ! command -v pnpm &> /dev/null; then
  echo "pnpm could not be found. Please install pnpm."
else
  pnpm install
fi

# Check configuration files
check_file "vite.config.js"
if [ ! -f "vite.config.js" ]; then
  echo "Please ensure vite.config.js is present."
fi
check_file "pnpm-workspace.yaml"
check_file "turbo.json"

# Check CI/CD workflows
check_file ".github/workflows/build.yml"
if [ ! -f ".github/workflows/build.yml" ]; then
  echo "Please ensure .github/workflows/build.yml is present."
fi
check_file ".github/workflows/test.yml"
check_file ".github/workflows/deploy.yml"
if [ ! -f ".github/workflows/deploy.yml" ]; then
  echo "Please ensure .github/workflows/deploy.yml is present."
fi

# Check scripts
check_directory "scripts"
for script in scripts/*; do
  if [ ! -x "$script" ]; then
    echo "Script not executable: $script"
    chmod +x "$script"
    echo "Made $script executable."
  fi
done

# Validate environment variables
check_file ".env"
check_file ".env.example"

# Check mock data
check_directory "packages/mock_data"

# Check for missing tests
for dir in apps/* packages/*; do
  if [ -d "$dir" ]; then
    check_directory "$dir/tests"
    if [ ! -d "$dir/tests" ]; then
      echo "Please ensure $dir/tests directory is present."
    fi
  fi
done

# Verify theming
check_directory "packages/themes"

# Check documentation
for dir in apps/* packages/*; do
  if [ -d "$dir" ]; then
    check_file "$dir/README.md"
    if [ ! -f "$dir/README.md" ]; then
      echo "Please ensure $dir/README.md is present."
    fi
  fi
done

echo "Project check completed."
